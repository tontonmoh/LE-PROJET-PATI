// Suivi de lecture LOCAL (par appareil), sans compte ni donnée envoyée nulle part.
// « Lu » = dernière page atteinte (done). Sert au héros dynamique + à la reprise.
// Tout est best-effort : si localStorage est indisponible, on dégrade en silence.

export type Progress = { page: number; total: number; done: boolean; t: number };

const KEY = "pati:progress:v1";
const HERO_KEY = "pati:hero-last:v1";

function readAll(): Record<string, Progress> {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}") as Record<string, Progress>;
  } catch {
    return {};
  }
}

function writeAll(all: Record<string, Progress>) {
  try {
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    /* ignore */
  }
}

/** Enregistre la page courante (index de section, 0-based). done = dernière page atteinte. */
export function recordProgress(slug: string, page: number, total: number) {
  if (!slug || total <= 0 || page < 0) return;
  const all = readAll();
  const done = page >= total - 1;
  const prev = all[slug];
  all[slug] = { page, total, done: done || !!prev?.done, t: Date.now() };
  writeAll(all);
}

export function getProgress(slug: string): Progress | undefined {
  return readAll()[slug];
}

/** Page de reprise : page sauvegardée si commencé ET non terminé, sinon -1 (couverture). */
export function resumePage(slug: string): number {
  const p = readAll()[slug];
  return p && !p.done && p.page >= 0 ? p.page : -1;
}

export function isDone(slug: string): boolean {
  return !!readAll()[slug]?.done;
}

/** Livres en cours (non terminés), du plus récent au plus ancien. */
export function inProgressSlugs(): string[] {
  return Object.entries(readAll())
    .filter(([, p]) => !p.done && p.page >= 0)
    .sort((a, b) => b[1].t - a[1].t)
    .map(([slug]) => slug);
}

export function hasHistory(): boolean {
  return Object.keys(readAll()).length > 0;
}

export function lastHero(): string | null {
  try {
    return localStorage.getItem(HERO_KEY);
  } catch {
    return null;
  }
}

export function setLastHero(slug: string) {
  try {
    localStorage.setItem(HERO_KEY, slug);
  } catch {
    /* ignore */
  }
}
