import { supabase } from "./supabase";
import type { User } from "@supabase/supabase-js";

/* Type de compte PATI — stocké dans le user_metadata Supabase (pas de table).
   moi    = utilisateur individuel (lit/explore pour lui-même)
   parent = suit la progression de son/ses enfant(s)
   ecole  = enseignant suivant ses élèves / sa classe */
export type AccountType = "moi" | "parent" | "ecole";

export function getAccountType(user: User | null): AccountType | null {
  const t = user?.user_metadata?.account_type;
  return t === "moi" || t === "parent" || t === "ecole" ? t : null;
}

export async function setAccountType(type: AccountType): Promise<{ error: string | null }> {
  const { error } = await supabase.auth.updateUser({ data: { account_type: type } });
  return { error: error ? "Impossible d'enregistrer votre choix. Réessaie." : null };
}
