// src/lib/iwdiSession.ts
// Helper Supabase pour les parties IWDI LAGUINÈ multi-joueur en ligne.
//
// ⚠ ADAPTATION : ce fichier importe le client Supabase depuis "./supabase".
// Si ton projet a le client à un autre chemin, ajuste la 1re ligne d'import
// (par exemple "./supabaseClient" ou "./session" si createSession y est déjà).

import { createClient, SupabaseClient, RealtimeChannel } from "@supabase/supabase-js";

// ── Client Supabase ────────────────────────────────────────────────────
// Si ton projet a déjà un client exporté ailleurs, remplace ce bloc par
//   import { supabase } from "./supabase";
const SB_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SB_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let _supabase: SupabaseClient | null = null;
function sb(): SupabaseClient {
  if (!_supabase) {
    if (!SB_URL || !SB_KEY) {
      throw new Error("Supabase non configuré (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY manquants).");
    }
    _supabase = createClient(SB_URL, SB_KEY);
  }
  return _supabase;
}

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
    // Mode privé / SSR : id éphémère
    return "u_" + Math.random().toString(36).slice(2, 10);
  }
}

// ── API ────────────────────────────────────────────────────────────────

/** Crée une nouvelle partie et retourne l'objet Game. Le créateur devient host. */
export async function createIwdiGame(code: string, hostName: string): Promise<IwdiGame> {
  const hostId = getAnonId();
  const now = new Date().toISOString();
  const player: IwdiPlayer = {
    id: hostId,
    name: (hostName || "Hôte").slice(0, 24),
    position: 0,
    is_host: true,
    joined_at: now,
  };
  const { data, error } = await sb()
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

/** Rejoint une partie existante en lobby. Idempotent (si déjà dedans, no-op). */
export async function joinIwdiGame(code: string, playerName: string): Promise<IwdiGame> {
  const id = getAnonId();
  const { data: g, error: e1 } = await sb()
    .from("iwdi_games")
    .select()
    .eq("code", code)
    .single();
  if (e1) throw new Error("Partie introuvable");
  const game = g as IwdiGame;
  if (game.players.some((p) => p.id === id)) return game;
  if (game.status !== "lobby") throw new Error("Partie déjà lancée");
  if (game.players.length >= 4) throw new Error("Partie complète (max 4 joueurs)");

  const newPlayer: IwdiPlayer = {
    id,
    name: (playerName || `Joueur ${game.players.length + 1}`).slice(0, 24),
    position: game.players.length,
    is_host: false,
    joined_at: new Date().toISOString(),
  };
  const { data, error } = await sb()
    .from("iwdi_games")
    .update({ players: [...game.players, newPlayer] })
    .eq("code", code)
    .select()
    .single();
  if (error) throw error;
  return data as IwdiGame;
}

/** Charge une partie sans s'y inscrire (pour vérifier son existence, refresh, etc.) */
export async function fetchIwdiGame(code: string): Promise<IwdiGame | null> {
  const { data, error } = await sb()
    .from("iwdi_games")
    .select()
    .eq("code", code)
    .single();
  if (error) return null;
  return data as IwdiGame;
}

/** Démarre la partie : passe status=playing et pose l'état initial (fourni par le HTML). */
export async function startIwdiGame(code: string, initialState: unknown): Promise<void> {
  const { error } = await sb()
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
  const { error } = await sb().from("iwdi_games").update(upd).eq("code", code);
  if (error) throw error;
}

/**
 * S'abonne aux changements d'une partie via Realtime.
 * Retourne une fonction de désabonnement.
 */
export function subscribeIwdiGame(code: string, onChange: (game: IwdiGame) => void): () => void {
  const channel: RealtimeChannel = sb()
    .channel("iwdi-" + code)
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "iwdi_games", filter: `code=eq.${code}` },
      (payload) => {
        if (payload.new) onChange(payload.new as IwdiGame);
      },
    )
    .subscribe();
  return () => {
    sb().removeChannel(channel);
  };
}
