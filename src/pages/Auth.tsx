import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCircle, LogIn, UserPlus, LogOut } from "lucide-react";
import { useAuth } from "../auth/AuthContext";
import { getAccountType, setAccountType } from "../lib/accountType";
import type { AccountType } from "../lib/accountType";

export default function Auth({ mode }: { mode: "connexion" | "inscription" | "compte" }) {
  const { user, loading, signUpPhone, signInPhone, signOut } = useAuth();
  const navigate = useNavigate();
  const [prenom, setPrenom] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [savingType, setSavingType] = useState(false);

  if (mode === "compte") {
    const type = user ? getAccountType(user) : null;
    const espaceLabel = type === "moi" ? "Mon espace" : type === "ecole" ? "Espace Enseignant" : "Espace Parents";
    const TYPES: [AccountType, string][] = [["moi", "Moi-même"], ["parent", "Mon/mes enfant(s)"], ["ecole", "Ma classe"]];

    async function changeType(t: AccountType) {
      setSavingType(true);
      await setAccountType(t);
      setSavingType(false);
    }

    return (
      <section className="bg-[#FFF6E7] min-h-[60vh] flex items-center">
        <div className="max-w-md mx-auto px-6 py-20 text-center">
          <UserCircle className="text-[#0F6E56] mx-auto mb-4" size={56} />
          {loading ? (
            <p className="text-[#5a6b62] font-semibold">Chargement...</p>
          ) : user ? (
            <>
              <h1 className="text-3xl text-[#0D2B1A] mb-2">Mon compte</h1>
              <p className="text-[#3a4a42] font-semibold mb-2">
                Connecte : {(user.user_metadata?.prenom as string) || "-"} - {(user.user_metadata?.phone as string) || ""}
              </p>
              <div className="flex gap-3 justify-center">
                <Link to="/parent" className="btn-kid bg-[#0F6E56] text-white">{espaceLabel}</Link>
                <button onClick={() => signOut()} className="btn-kid bg-white text-[#0D2B1A] shadow-kid">
                  <LogOut size={18} /> Se deconnecter
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e7e0cf]">
                <p className="text-[#5a6b62] font-semibold text-sm mb-3">Vous utilisez PATI pour :</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {TYPES.map(([t, lab]) => (
                    <button key={t} disabled={savingType} onClick={() => changeType(t)}
                      className={`px-4 py-2 rounded-full font-display font-semibold text-sm transition-colors disabled:opacity-60 ${type === t ? "bg-[#0F6E56] text-white" : "bg-white text-[#0D2B1A] shadow-kid"}`}>
                      {lab}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl text-[#0D2B1A] mb-3">Mon compte</h1>
              <p className="text-[#3a4a42] font-semibold mb-8">Connecte-toi pour suivre les livres, les quiz et la progression.</p>
              <div className="flex gap-3 justify-center">
                <Link to="/connexion" className="btn-kid bg-[#0F6E56] text-white">Se connecter</Link>
                <Link to="/inscription" className="btn-kid bg-white text-[#0D2B1A] shadow-kid">Creer un compte</Link>
              </div>
            </>
          )}
        </div>
      </section>
    );
  }

  const isLogin = mode === "connexion";

  async function submit() {
    setError(null);
    if (!phone.trim() || !password) { setError("Renseigne ton numero WhatsApp et un mot de passe."); return; }
    if (!isLogin && password.length < 6) { setError("Mot de passe trop court (6 caracteres minimum)."); return; }
    setBusy(true);
    const res = isLogin ? await signInPhone(phone, password) : await signUpPhone(phone, password, prenom.trim());
    setBusy(false);
    if (res.error) { setError(res.error); return; }
    navigate("/compte");
  }

  return (
    <section className="bg-[#FFF6E7] min-h-[60vh] flex items-center">
      <div className="max-w-md w-full mx-auto px-6 py-16">
        <div className="card-kid p-8">
          <div className="flex items-center gap-2 mb-5">
            {isLogin ? <LogIn className="text-[#0F6E56]" size={24} /> : <UserPlus className="text-[#0F6E56]" size={24} />}
            <h1 className="text-2xl text-[#0D2B1A]">{isLogin ? "Se connecter" : "Creer un compte"}</h1>
          </div>
          <div className="space-y-3">
            {!isLogin && (
              <input value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Votre prenom"
                className="w-full bg-[#FFF6E7] rounded-2xl px-4 py-3 font-semibold text-[#0D2B1A] placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
            )}
            <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" placeholder="Numero WhatsApp (ex. 620 00 00 00)"
              className="w-full bg-[#FFF6E7] rounded-2xl px-4 py-3 font-semibold text-[#0D2B1A] placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Mot de passe"
              className="w-full bg-[#FFF6E7] rounded-2xl px-4 py-3 font-semibold text-[#0D2B1A] placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
          </div>
          {error && <p className="text-sm text-[#B3261E] font-semibold mt-3">{error}</p>}
          <button onClick={submit} disabled={busy}
            className="btn-kid bg-[#0F6E56] text-white w-full justify-center mt-5 disabled:opacity-60">
            {busy ? "..." : isLogin ? "Se connecter" : "Creer mon compte"}
          </button>
          <p className="text-center text-sm text-[#5a6b62] font-semibold mt-4">
            {isLogin
              ? <>Pas encore de compte ? <Link to="/inscription" className="text-[#0F6E56] underline">S'inscrire</Link></>
              : <>Deja inscrit ? <Link to="/connexion" className="text-[#0F6E56] underline">Se connecter</Link></>}
          </p>
        </div>
      </div>
    </section>
  );
}
