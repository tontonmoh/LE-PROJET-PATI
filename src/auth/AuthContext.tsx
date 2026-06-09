import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase, phoneToEmail, normalizePhone } from "../lib/supabase";

type AuthCtx = {
  user: User | null;
  loading: boolean;
  signUpPhone: (phone: string, password: string, prenom: string) => Promise<{ error: string | null }>;
  signInPhone: (phone: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
};

const Ctx = createContext<AuthCtx>(null as unknown as AuthCtx);
export const useAuth = () => useContext(Ctx);

function pretty(e: unknown): string {
  const m = (e as { message?: string })?.message || String(e);
  if (/already registered|already exists/i.test(m)) return "Ce numero a deja un compte. Connecte-toi.";
  if (/Invalid login credentials/i.test(m)) return "Numero ou mot de passe incorrect.";
  if (/Password should be at least/i.test(m)) return "Mot de passe trop court (6 caracteres minimum).";
  return "Une erreur est survenue. Reessaie.";
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session: Session | null) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function signUpPhone(phone: string, password: string, prenom: string) {
    const { error } = await supabase.auth.signUp({
      email: phoneToEmail(phone),
      password,
      options: { data: { phone: normalizePhone(phone), prenom } },
    });
    return { error: error ? pretty(error) : null };
  }
  async function signInPhone(phone: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email: phoneToEmail(phone), password });
    return { error: error ? pretty(error) : null };
  }
  async function signOut() { await supabase.auth.signOut(); }

  return (
    <Ctx.Provider value={{ user, loading, signUpPhone, signInPhone, signOut }}>
      {children}
    </Ctx.Provider>
  );
}
