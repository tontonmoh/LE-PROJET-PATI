import { useState } from "react";
import { User, Users, GraduationCap } from "lucide-react";
import { useAuth } from "../auth/AuthContext";
import { getAccountType, setAccountType } from "../lib/accountType";
import type { AccountType } from "../lib/accountType";

const VERT = "#0D2B1A";
const OR = "#FFC93C";

const OPTIONS: { type: AccountType; icon: typeof User; titre: string; desc: string }[] = [
  { type: "moi", icon: User, titre: "Moi-même", desc: "Je lis et j'explore PATI pour moi" },
  { type: "parent", icon: Users, titre: "Mon ou mes enfant(s)", desc: "Je suis leur progression" },
  { type: "ecole", icon: GraduationCap, titre: "Ma classe", desc: "Mes élèves, à l'école" },
];

export default function AccountTypeGate() {
  const { user, loading } = useAuth();
  const [busy, setBusy] = useState<AccountType | null>(null);
  const [done, setDone] = useState(false);

  if (loading || !user || done) return null;
  if (getAccountType(user)) return null;

  async function choose(type: AccountType) {
    setBusy(type);
    const { error } = await setAccountType(type);
    setBusy(null);
    if (!error) setDone(true);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="text-center">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                style={{ background: OR, color: VERT }}>Bienvenue sur PATI</span>
          <h2 className="mt-3 text-2xl font-extrabold" style={{ color: VERT }}>Vous utilisez PATI pour… ?</h2>
          <p className="mt-1 text-sm text-gray-500">Pour adapter votre espace. Modifiable plus tard.</p>
        </div>
        <div className="mt-5 space-y-3">
          {OPTIONS.map((o) => (
            <button key={o.type} onClick={() => choose(o.type)} disabled={busy !== null}
              className="flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-colors hover:bg-[#FBF8F0] disabled:opacity-60"
              style={{ borderColor: "#E7E1D2" }}>
              <span className="grid h-11 w-11 place-items-center rounded-full" style={{ background: `${OR}33` }}>
                <o.icon size={22} style={{ color: VERT }} />
              </span>
              <span className="flex-1">
                <span className="block font-bold" style={{ color: VERT }}>{o.titre}</span>
                <span className="block text-sm text-gray-500">{o.desc}</span>
              </span>
              {busy === o.type && <span className="text-sm text-gray-400">…</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
