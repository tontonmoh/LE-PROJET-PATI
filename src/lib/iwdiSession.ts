// src/lib/iwdiSession.ts
// Helper Supabase pour les parties IWDI LAGUINÈ multi-joueur en ligne.
// Utilise le client Supabase partagé du projet (src/lib/supabase.ts).

import { supabase } from "./supabase";
import type { RealtimeChannel } from "@supabase/supabase-js";

// ── Types ──────────────────────────────────────────────────────────────
export interface IwdiPlayer {
  id: string;
  name: string;
  position: number;   // 0..3 dans l'ordre des sièges
  is_host: boolean;
  joined_at: string;
}

export interface IwdiGame {
  code: string;
  host_id: string;
  players: IwdiPlayer[];
  state: unknown | null;                // null tant que la partie n'a pas démarré
  status: "lobby" | "playing" | "ended";
  winner_position: number | null;
  created_at: string;
  updated_at: string;
}

// ── Identifiant anonyme persistant (par appareil) ───────────────────────
const ANON_KEY = "iwdi_anon_id";
export function getAnonId(): string {
  try {
    let id = localStorage.getItem(ANON_KEY);
    if (!id) {
      id = "u_" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
      localStorage.setItem(ANON_KEY, id);
    }
    return id;
  } catch {
    return "u_" + Math.random().toString(36).slice(2, 10);
  }
}

// ── API ────────────────────────────────────────────────────────────────

/**
 * Charge une partie IWDI par son code. Retourne null si elle n'existe
 * pas encore côté iwdi_games (le code peut exister côté pati_sessions
 * sans que la partie IWDI n'ait démarré : ce sera créé au 1er join).
 */
export async function fetchIwdiGame(code: string): Promise<IwdiGame | null> {
  const { data, error } = await supabase
    .from("iwdi_games")
    .select()
    .eq("code", code)
    .maybeSingle();
  if (error) return null;
  return data as IwdiGame | null;
}

/**
 * Crée directement la ligne iwdi_games pour un code donné, avec ce joueur
 * comme host en position 0. Utilisé par joinIwdiGame en fallback si la
 * partie n'existe pas encore côté iwdi_games.
 */
async function _createIwdiRow(code: string, hostName: string): Promise<IwdiGame> {
  const hostId = getAnonId();
  const now = new Date().toISOString();
  const player: IwdiPlayer = {
    id: hostId,
    name: (hostName || "Hôte").slice(0, 24),
    position: 0,
    is_host: true,
    joined_at: now,
  };
  const { data, error } = await supabase
    .from("iwdi_games")
    .insert({
      code,
      host_id: hostId,
      players: [player],
      status: "lobby",
    })
    .select()
    .single();
  if (error) throw error;
  return data as IwdiGame;
}

/**
 * Rejoint une partie. Si la ligne iwdi_games n'existe pas encore pour ce
 * code, la crée avec ce joueur en tant qu'hôte.
 * Idempotent : si le joueur est déjà dedans, no-op.
 */
export async function joinIwdiGame(code: string, playerName: string): Promise<IwdiGame> {
  const id = getAnonId();
  const existing = await fetchIwdiGame(code);

  // Cas 1 : la partie n'existe pas encore → on la crée avec ce joueur comme host
  if (!existing) {
    try {
      return await _createIwdiRow(code, playerName);
    } catch (e: unknown) {
      // Race : quelqu'un d'autre a créé entre le fetch et l'insert → on refait un join
      const refetched = await fetchIwdiGame(code);
      if (refetched) return _appendPlayer(refetched, id, playerName);
      throw e;
    }
  }

  // Cas 2 : déjà dedans → no-op
  if (existing.players.some((p) => p.id === id)) return existing;

  // Cas 3 : partie déjà lancée / pleine
  if (existing.status !== "lobby") throw new Error("Partie déjà lancée");
  if (existing.players.length >= 4) throw new Error("Partie complète (max 4 joueurs)");

  // Cas 4 : ajout normal
  return _appendPlayer(existing, id, playerName);
}

async function _appendPlayer(game: IwdiGame, playerId: string, playerName: string): Promise<IwdiGame> {
  const newPlayer: IwdiPlayer = {
    id: playerId,
    name: (playerName || `Joueur ${game.players.length + 1}`).slice(0, 24),
    position: game.players.length,
    is_host: false,
    joined_at: new Date().toISOString(),
  };
  const { data, error } = await supabase
    .from("iwdi_games")
    .update({ players: [...game.players, newPlayer] })
    .eq("code", game.code)
    .select()
    .single();
  if (error) throw error;
  return data as IwdiGame;
}

/** Démarre la partie : passe status=playing et pose l'état initial. */
export async function startIwdiGame(code: string, initialState: unknown): Promise<void> {
  const { error } = await supabase
    .from("iwdi_games")
    .update({ status: "playing", state: initialState })
    .eq("code", code);
  if (error) throw error;
}

/** Met à jour l'état du jeu. Si winnerPosition est passé, marque la partie terminée. */
export async function updateIwdiState(
  code: string,
  newState: unknown,
  winnerPosition?: number | null,
): Promise<void> {
  const upd: Record<string, unknown> = { state: newState };
  if (winnerPosition !== undefined) {
    upd.winner_position = winnerPosition;
    upd.status = winnerPosition !== null ? "ended" : "playing";
  }
  const { error } = await supabase.from("iwdi_games").update(upd).eq("code", code);
  if (error) throw error;
}

/**
 * S'abonne aux changements d'une partie via Realtime.
 * Retourne une fonction de désabonnement.
 *
 * Utilise un nom de channel unique par appel pour éviter les conflits
 * avec les channels précédents (React StrictMode monte/démonte 2× en dev,
 * et supabase.channel(name) retourne le channel existant s'il porte le
 * même nom → erreur "cannot add callbacks after subscribe()").
 */
export function subscribeIwdiGame(code: string, onChange: (game: IwdiGame) => void): () => void {
  const uniqueSuffix = Math.random().toString(36).slice(2, 8);
  const channelName = `iwdi-${code}-${uniqueSuffix}`;
  const channel: RealtimeChannel = supabase
    .channel(channelName)
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "iwdi_games", filter: `code=eq.${code}` },
      (payload) => {
        if (payload.new) onChange(payload.new as IwdiGame);
      },
    )
    .subscribe();
  return () => {
    supabase.removeChannel(channel);
  };
}
