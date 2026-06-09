import { supabase } from "./supabase";

// Avatars anonymes : le parent reconnait son enfant, on ne stocke AUCUN nom/age.
export const AVATARS = ["🦁","🐘","🦒","🐢","🦅","🐬","🦋","🐝","🌟","🍊","🥭","🌴"];

export type ChildProfile = { id: string; avatar: string; position: number };

const ACTIVE_KEY = "pati-active-profile";
export function getActiveProfileId(): string | null {
  try { return localStorage.getItem(ACTIVE_KEY); } catch { return null; }
}
export function setActiveProfileId(id: string | null) {
  try { if (id) localStorage.setItem(ACTIVE_KEY, id); else localStorage.removeItem(ACTIVE_KEY); } catch { /* noop */ }
}

export async function listProfiles(): Promise<ChildProfile[]> {
  const { data } = await supabase.from("child_profiles").select("id,avatar,position").order("position");
  return (data as ChildProfile[]) || [];
}
export async function createProfile(avatar: string, position: number): Promise<ChildProfile | null> {
  const { data } = await supabase.from("child_profiles").insert({ avatar, position }).select("id,avatar,position").single();
  return (data as ChildProfile) || null;
}
export async function deleteProfile(id: string): Promise<void> {
  await supabase.from("child_profiles").delete().eq("id", id);
}
