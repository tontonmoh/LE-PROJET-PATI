const URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export type CounterKey = 'quiz_joues' | 'livres_lus';

/** Incrémente un compteur public (+1). À appeler pour TOUS les utilisateurs. */
export async function bumpCounter(key: CounterKey): Promise<void> {
  if (!URL || !KEY) return;
  try {
    await fetch(`${URL}/rest/v1/rpc/bump_counter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: KEY,
        Authorization: `Bearer ${KEY}`,
      },
      body: JSON.stringify({ p_key: key }),
    });
  } catch {
    /* silencieux — un compteur ne doit jamais casser un parcours */
  }
}

/** Renvoie l'ensemble des compteurs, ex. { quiz_joues: 1240, livres_lus: 980 }. */
export async function fetchCounters(): Promise<Partial<Record<CounterKey, number>>> {
  if (!URL || !KEY) return {};
  try {
    const res = await fetch(`${URL}/rest/v1/public_counters?select=key,value`, {
      headers: { apikey: KEY, Authorization: `Bearer ${KEY}` },
    });
    const rows = await res.json();
    const out: Partial<Record<CounterKey, number>> = {};
    (Array.isArray(rows) ? rows : []).forEach((r: any) => {
      out[r.key as CounterKey] = Number(r.value) || 0;
    });
    return out;
  } catch {
    return {};
  }
}
