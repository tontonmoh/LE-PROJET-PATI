// ════════════════════════════════════════════════════════════════════════════
// PROJET PATI — lib/session.ts
// Client du mode Session : créer une partie, rejoindre, poster un temps,
// classement en temps réel. S'appuie sur les tables pati_sessions /
// pati_session_scores et la RPC pati_submit_session_score (cf. session-schema.sql).
//
// Réutilise le même projet Supabase que le reste du site.
// Si tu as déjà un client partagé (src/lib/supabase.ts), remplace la création
// locale ci-dessous par : import { supabase } from "./supabase";
// ════════════════════════════════════════════════════════════════════════════

import { createClient, type RealtimeChannel } from "@supabase/supabase-js";

const SUPABASE_URL = "https://gipqwrqwouytlmsuxefj.supabase.co";
const SUPABASE_KEY = "sb_publishable_gaOQLiWvGUeSwOozZlPPGQ_e6ii9upC";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ─── Types ───────────────────────────────────────────────────────────────────
export type SessionType = "classe" | "forum" | "concert" | "solo";

export interface Session {
  code: string;
  livre_slug: string;
  jeu: string;
  label: string | null;
  type: SessionType;
  created_by: string | null;
  created_at: string;
  closed_at: string | null;
  player_count: number;
}

export interface SessionScore {
  id: string;
  session_code: string;
  session_type: SessionType;
  livre_slug: string;
  jeu: string;
  pseudo: string;
  score: number;
  time_ms: number;
  country: string | null;
  finished_at: string;
}

// ─── Génération de code lisible (sans caractères ambigus 0/O, 1/I/L) ────────
const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

export function generateCode(len = 6): string {
  let out = "";
  const bytes = new Uint32Array(len);
  crypto.getRandomValues(bytes);
  for (let i = 0; i < len; i++) {
    out += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
  }
  return out;
}

// ─── Formatage du temps (ms → "1:07.4") ─────────────────────────────────────
export function formatTime(ms: number): string {
  const totalS = ms / 1000;
  const m = Math.floor(totalS / 60);
  const s = totalS % 60;
  if (m > 0) return `${m}:${s.toFixed(1).padStart(4, "0")}`;
  return `${s.toFixed(2)}s`;
}

// ════════════════════════════════════════════════════════════════════════════
// ANIMATEUR
// ════════════════════════════════════════════════════════════════════════════

/**
 * Crée une session. Réessaie si le code généré existe déjà (collision rare).
 * @returns la session créée (avec son code)
 */
export async function createSession(params: {
  livre_slug: string;
  jeu?: string;
  label?: string;
  type?: SessionType;
  created_by?: string;
}): Promise<Session> {
  const { livre_slug, jeu = "defi", label = null, type = "classe", created_by = null } = params;

  for (let attempt = 0; attempt < 5; attempt++) {
    const code = generateCode(6);
    const { data, error } = await supabase
      .from("pati_sessions")
      .insert({ code, livre_slug, jeu, label, type, created_by })
      .select()
      .single();

    if (!error && data) return data as Session;
    // 23505 = violation de clé primaire (code déjà pris) → on régénère
    if (error && (error as { code?: string }).code !== "23505") {
      throw error;
    }
  }
  throw new Error("Impossible de générer un code de session unique.");
}

/** Ferme une session : le classement live se fige, les scores restent permanents. */
export async function closeSession(code: string): Promise<void> {
  const { error } = await supabase
    .from("pati_sessions")
    .update({ closed_at: new Date().toISOString() })
    .eq("code", code);
  if (error) throw error;
}

// ════════════════════════════════════════════════════════════════════════════
// JOUEUR
// ════════════════════════════════════════════════════════════════════════════

/** Récupère une session par son code (pour l'écran de jonction). */
export async function getSession(code: string): Promise<Session | null> {
  const { data, error } = await supabase
    .from("pati_sessions")
    .select("*")
    .eq("code", code.toUpperCase().trim())
    .maybeSingle();
  if (error) throw error;
  return (data as Session) ?? null;
}

/**
 * Poste un temps via la RPC (insert + incrément compteur en une fois).
 * @returns le rang du joueur dans la session
 */
export async function submitScore(params: {
  code: string;
  livre_slug: string;
  jeu?: string;
  pseudo: string;
  score?: number;
  time_ms: number;
  country?: string | null;
}): Promise<number> {
  const { code, livre_slug, jeu = "defi", pseudo, score = 0, time_ms, country = null } = params;
  const { data, error } = await supabase.rpc("pati_submit_session_score", {
    p_code: code.toUpperCase().trim(),
    p_livre: livre_slug,
    p_jeu: jeu,
    p_pseudo: pseudo.trim().slice(0, 24),
    p_score: score,
    p_time_ms: Math.round(time_ms),
    p_country: country,
  });
  if (error) throw error;
  return (data as number) ?? 0;
}

// ════════════════════════════════════════════════════════════════════════════
// CLASSEMENT (live + figé)
// ════════════════════════════════════════════════════════════════════════════

/** Récupère le classement d'une session, trié par temps croissant. */
export async function getLeaderboard(code: string, limit = 100): Promise<SessionScore[]> {
  const { data, error } = await supabase
    .from("pati_session_scores")
    .select("*")
    .eq("session_code", code.toUpperCase().trim())
    .order("time_ms", { ascending: true })
    .limit(limit);
  if (error) throw error;
  return (data as SessionScore[]) ?? [];
}

/**
 * S'abonne au classement live d'une session.
 * À chaque nouveau score, `onUpdate` reçoit la liste re-triée complète.
 * @returns une fonction de désabonnement à appeler au démontage.
 */
export function subscribeLeaderboard(
  code: string,
  onUpdate: (scores: SessionScore[]) => void,
  limit = 100,
): () => void {
  const upper = code.toUpperCase().trim();

  // charge initiale
  getLeaderboard(upper, limit).then(onUpdate).catch(() => {});

  const channel: RealtimeChannel = supabase
    .channel(`session-${upper}`)
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "pati_session_scores",
        filter: `session_code=eq.${upper}`,
      },
      () => {
        // un nouveau score est arrivé → on recharge la liste triée
        getLeaderboard(upper, limit).then(onUpdate).catch(() => {});
      },
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}

// ════════════════════════════════════════════════════════════════════════════
// STATS PERMANENTES (records, classement global, lauréats)
// ════════════════════════════════════════════════════════════════════════════

/** Top N mondial d'un livre, tous temps confondus (page /stats). */
export async function getGlobalLeaderboard(livre_slug: string, limit = 100): Promise<SessionScore[]> {
  const { data, error } = await supabase
    .from("pati_session_scores")
    .select("*")
    .eq("livre_slug", livre_slug)
    .order("time_ms", { ascending: true })
    .limit(limit);
  if (error) throw error;
  return (data as SessionScore[]) ?? [];
}

/** Statistiques agrégées d'un livre (parties, temps moyen/médian/record, pays). */
export async function getGameStats(livre_slug: string): Promise<{
  parties_total: number;
  sessions_total: number;
  temps_moyen_ms: number;
  meilleur_temps_ms: number;
  temps_median_ms: number;
  pays_distincts: number;
} | null> {
  const { data, error } = await supabase
    .from("pati_stats_jeu")
    .select("*")
    .eq("livre_slug", livre_slug)
    .maybeSingle();
  if (error) throw error;
  return (data as ReturnType<typeof getGameStats> extends Promise<infer T> ? T : never) ?? null;
}
