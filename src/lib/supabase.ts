import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL || "https://gipqwrqwouytlmsuxefj.supabase.co";
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_gaOQLiWvGUeSwOozZlPPGQ_e6ii9upC";

export const supabase = createClient(url, key);

// Numero WhatsApp (contexte Guinee, +224) -> e-mail technique interne.
export function normalizePhone(raw: string): string {
  let d = (raw || "").replace(/\D/g, "");
  if (d.startsWith("00224")) d = d.slice(2);
  if (d.length === 9) d = "224" + d;
  return d;
}
export function phoneToEmail(raw: string): string {
  return `${normalizePhone(raw)}@wa.projetpati.com`;
}
