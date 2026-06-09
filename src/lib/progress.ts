import { supabase } from "./supabase";
import { getActiveProfileId } from "./profiles";

// Enregistre un evenement de progression dans Supabase, UNIQUEMENT si un parent est connecte.
// On tague l'enfant actif (profile_id) si un avatar est selectionne.
export async function logProgress(type: string, ref?: string, value?: number) {
  try {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return;
    const profile_id = getActiveProfileId();
    await supabase.from("progress_events").insert({ type, ref, value, profile_id });
  } catch {
    // silencieux : la progression ne doit jamais casser la lecture
  }
}
