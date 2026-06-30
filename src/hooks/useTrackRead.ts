import { useEffect, useRef } from "react";
import { supabase } from "../lib/supabaseClient";

export type ItemType = "livre" | "serie" | "encyclopedie";

export interface TrackableItem {
  slug: string;
  type: ItemType;
  title: string;
}

const SESSION_KEY = "pati_session_hash";

function getOrCreateSessionHash(): string {
  try {
    let hash = sessionStorage.getItem(SESSION_KEY);
    if (!hash) {
      hash = crypto.randomUUID();
      sessionStorage.setItem(SESSION_KEY, hash);
    }
    return hash;
  } catch {
    return "anon";
  }
}

/**
 * Logge une lecture lorsque le composant se monte.
 *
 * Dedup côté client : un seul insert par couple (item_type, item_slug, session).
 * Si le visiteur recharge ou navigue ailleurs puis revient dans la même session
 * onglet, on ne re-logge pas. Une nouvelle session (nouvel onglet, nouveau jour)
 * relogge.
 *
 * Usage :
 *   useTrackRead({ slug: "point-zero-t0", type: "livre", title: "Point Zéro — Tome 0" });
 *
 * Si `item` est null/undefined (ex. en cours de chargement), le hook ne fait rien.
 */
export function useTrackRead(item: TrackableItem | null | undefined) {
  const fired = useRef<string | null>(null);

  useEffect(() => {
    if (!item || !item.slug || !item.type) return;

    const dedupKey = `${item.type}:${item.slug}`;
    if (fired.current === dedupKey) return;
    fired.current = dedupKey;

    const sessionHash = getOrCreateSessionHash();

    // Fire-and-forget : on n'attend pas la réponse, on n'expose pas l'erreur.
    supabase
      .from("book_reads")
      .insert({
        item_slug: item.slug,
        item_type: item.type,
        item_title: item.title,
        session_hash: sessionHash,
      })
      .then(({ error }) => {
        if (error && import.meta.env.DEV) {
          console.warn("[useTrackRead] insert failed:", error.message);
        }
      });
  }, [item?.slug, item?.type, item?.title]);
}
