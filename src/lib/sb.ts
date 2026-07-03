// ────────────────────────────────────────────────────────────────────────────
// Helpers Supabase REST — pattern fetch direct.
// Credentials publishable, publics par design (protégés par RLS côté DB).
// Cohérent avec ton style dans SerieTaadidi / UniversTaadidi.
// ────────────────────────────────────────────────────────────────────────────

const SB = {
  url: "https://gipqwrqwouytlmsuxefj.supabase.co",
  key: "sb_publishable_gaOQLiWvGUeSwOozZlPPGQ_e6ii9upC",
};

const HEADERS_JSON = {
  apikey: SB.key,
  Authorization: `Bearer ${SB.key}`,
  "Content-Type": "application/json",
};

/**
 * Insère une ligne dans une table. Fire-and-forget compatible.
 */
export async function sbInsert(
  table: string,
  row: Record<string, unknown>
): Promise<{ ok: boolean; error?: string }> {
  try {
    const r = await fetch(`${SB.url}/rest/v1/${table}`, {
      method: "POST",
      headers: { ...HEADERS_JSON, Prefer: "return=minimal" },
      body: JSON.stringify(row),
    });
    if (!r.ok) return { ok: false, error: `${r.status} ${r.statusText}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

/**
 * Appelle une fonction RPC PostgreSQL.
 */
export async function sbRpc<T = unknown>(
  fn: string,
  params: Record<string, unknown> = {}
): Promise<{ data: T | null; error?: string }> {
  try {
    const r = await fetch(`${SB.url}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers: HEADERS_JSON,
      body: JSON.stringify(params),
    });
    if (!r.ok) return { data: null, error: `${r.status} ${r.statusText}` };
    const data = (await r.json()) as T;
    return { data };
  } catch (e) {
    return { data: null, error: String(e) };
  }
}

/**
 * Compte les lignes de book_reads (optionnellement filtrées par item_slug).
 * Utilise le header Content-Range de PostgREST.
 */
export async function sbCountBookReads(slug: string | null): Promise<number | null> {
  try {
    const filter = slug ? `&item_slug=eq.${encodeURIComponent(slug)}` : "";
    const url = `${SB.url}/rest/v1/book_reads?select=id${filter}&limit=0`;
    const r = await fetch(url, {
      headers: { ...HEADERS_JSON, Prefer: "count=exact", Range: "0-0" },
    });
    if (!r.ok) return null;
    const range = r.headers.get("content-range");
    if (!range) return null;
    const total = parseInt(range.split("/")[1], 10);
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}
