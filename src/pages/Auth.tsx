import { useState } from "react";
import { Link } from "react-router-dom";
import { UserCircle, LogIn, UserPlus, CheckCircle2 } from "lucide-react";

export default function Auth({ mode }: { mode: "connexion" | "inscription" | "compte" }) {
  const [done, setDone] = useState(false);
  if (mode === "compte") {
    return (
      <section className="bg-[#FFF6E7] min-h-[60vh] flex items-center">
        <div className="max-w-md mx-auto px-6 py-20 text-center">
          <UserCircle className="text-[#0F6E56] mx-auto mb-4" size={56} />
          <h1 className="text-3xl text-[#0D2B1A] mb-3">Mon compte</h1>
          <p className="text-[#3a4a42] font-semibold mb-8">Connecte-toi pour retrouver tes livres, tes quiz et ta progression.</p>
          <div className="flex gap-3 justify-center">
            <Link to="/connexion" className="btn-kid bg-[#0F6E56] text-white">Se connecter</Link>
            <Link to="/inscription" className="btn-kid bg-white text-[#0D2B1A] shadow-kid">Créer un compte</Link>
          </div>
        </div>
      </section>
    );
  }
  const isLogin = mode === "connexion";
  return (
    <section className="bg-[#FFF6E7] min-h-[60vh] flex items-center">
      <div className="max-w-md w-full mx-auto px-6 py-16">
        <div className="card-kid p-8">
          {done ? (
            <div className="text-center py-4">
              <CheckCircle2 className="text-[#0F6E56] mx-auto mb-4" size={48} />
              <h1 className="text-2xl text-[#0D2B1A] mb-2">{isLogin ? "Bon retour !" : "Bienvenue dans PATI !"}</h1>
              <p className="text-[#5a6b62] font-semibold mb-6">La connexion complète arrive bientôt.</p>
              <Link to="/" className="btn-kid bg-[#0F6E56] text-white">Découvrir les livres</Link>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-5">{isLogin ? <LogIn className="text-[#0F6E56]" size={24} /> : <UserPlus className="text-[#0F6E56]" size={24} />}<h1 className="text-2xl text-[#0D2B1A]">{isLogin ? "Se connecter" : "Créer un compte"}</h1></div>
              <div className="space-y-3">
                {!isLogin && <input placeholder="Prénom" className="w-full bg-[#FFF6E7] rounded-2xl px-4 py-3 font-semibold text-[#0D2B1A] placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />}
                <input placeholder="Email ou téléphone" className="w-full bg-[#FFF6E7] rounded-2xl px-4 py-3 font-semibold text-[#0D2B1A] placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
                <input type="password" placeholder="Mot de passe" className="w-full bg-[#FFF6E7] rounded-2xl px-4 py-3 font-semibold text-[#0D2B1A] placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
              </div>
              <button onClick={() => setDone(true)} className="btn-kid bg-[#0F6E56] text-white w-full justify-center mt-5">{isLogin ? "Se connecter" : "Créer mon compte"}</button>
              <p className="text-center text-sm text-[#5a6b62] font-semibold mt-4">
                {isLogin ? <>Pas encore de compte ? <Link to="/inscription" className="text-[#0F6E56] underline">S'inscrire</Link></> : <>Déjà inscrit ? <Link to="/connexion" className="text-[#0F6E56] underline">Se connecter</Link></>}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
