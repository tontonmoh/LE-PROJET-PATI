import { useState } from "react";
import { Link } from "react-router-dom";
import { Gift, ArrowLeft, CheckCircle2, Send, BookOpen, Film, Sparkles } from "lucide-react";
import { SOCIAL } from "../data/site";

const FORMATS = ["Livre personnalisé", "Dessin animé", "Les deux"];
const OCCASIONS = ["Baptême", "Anniversaire", "Mariage", "Autre"];

export default function Personnalisation() {
  const [format, setFormat] = useState("");
  const [occasion, setOccasion] = useState("");
  const [heros, setHeros] = useState("");
  const [nom, setNom] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const valid = format && occasion && nom.trim() && contact.trim();

  const demander = () => {
    if (!valid) return;
    const texte =
      `Demande de devis — Personnalisation PATI\n` +
      `Format : ${format}\n` +
      `Occasion : ${occasion}\n` +
      (heros.trim() ? `À mettre en avant : ${heros}\n` : "") +
      `Nom : ${nom}\n` +
      `Contact : ${contact}\n` +
      (message.trim() ? `Détails : ${message}\n` : "");
    window.open(`${SOCIAL.whatsapp}?text=${encodeURIComponent(texte)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="bg-[#FFF6E7]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-12 text-center">
        <div className="inline-flex items-center gap-2 font-display font-semibold text-[#0F6E56] bg-[#FFC93C]/30 px-4 py-1.5 rounded-full mb-5"><Gift size={16} /> Offre spéciale · Personnalisation</div>
        <h1 className="text-3xl md:text-4xl text-[#0D2B1A] mb-3">Un livre ou un dessin animé sur votre famille&nbsp;?</h1>
        <p className="text-[#3a4a42] font-semibold leading-relaxed max-w-2xl mx-auto">Pour un baptême, un anniversaire ou un mariage : une création unique aux couleurs de votre histoire — votre enfant en héros, vos prénoms, votre récit, dans le style PATI (illustration, animation, musique de kora). <span className="text-[#0D2B1A]">Sur devis.</span></p>
      </section>

      {/* Ce qu'on peut créer */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: BookOpen, t: "Un livre personnalisé", d: "Votre enfant ou votre famille en héros d'une belle histoire illustrée." },
            { icon: Film, t: "Un dessin animé", d: "Un court film d'animation sur mesure, voix et musique comprises." },
            { icon: Sparkles, t: "Une touche guinéenne", d: "Prénoms, proverbes, traditions et kora pour un souvenir qui vous ressemble." },
          ].map((c) => (
            <div key={c.t} className="card-kid p-5">
              <div className="w-11 h-11 rounded-2xl bg-[#0F6E56]/10 flex items-center justify-center mb-2"><c.icon className="text-[#0F6E56]" size={22} /></div>
              <h3 className="font-display font-semibold text-[#0D2B1A] mb-1">{c.t}</h3>
              <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire de devis */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-kid">
          {sent ? (
            <div className="text-center py-6">
              <CheckCircle2 className="text-[#0F6E56] mx-auto mb-4" size={48} />
              <h2 className="text-2xl text-[#0D2B1A] mb-2">Demande prête à envoyer&nbsp;!</h2>
              <p className="text-[#5a6b62] font-semibold mb-2">WhatsApp s'est ouvert avec votre demande pré-remplie. Vérifiez-la et appuyez sur « envoyer ».</p>
              <p className="text-[#5a6b62] font-semibold mb-6">Nous revenons vers vous avec un devis sous 72h.</p>
              <button onClick={() => setSent(false)} className="btn-kid bg-[#0F6E56] text-white justify-center">Faire une autre demande</button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-2">Demander un devis</h2>
              <p className="text-[#5a6b62] font-semibold mb-6">Dites-nous votre projet : votre demande partira par WhatsApp à l'Atelier.</p>

              <label className="block text-sm font-display font-semibold text-[#0D2B1A] mb-1.5">Format souhaité</label>
              <select value={format} onChange={(e) => setFormat(e.target.value)} className="w-full bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold outline-none focus:ring-2 focus:ring-[#FFC93C] mb-4">
                <option value="">— Choisissez —</option>
                {FORMATS.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>

              <label className="block text-sm font-display font-semibold text-[#0D2B1A] mb-1.5">Occasion</label>
              <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className="w-full bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold outline-none focus:ring-2 focus:ring-[#FFC93C] mb-4">
                <option value="">— Choisissez —</option>
                {OCCASIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>

              <div className="grid sm:grid-cols-2 gap-3">
                <input value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Vos nom et prénom *" className="bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
                <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Email ou WhatsApp *" className="bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
              </div>
              <input value={heros} onChange={(e) => setHeros(e.target.value)} placeholder="Qui mettre en avant ? (prénom de l'enfant, des mariés…)" className="w-full mt-3 bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Racontez-nous votre projet (date, idée, langues…)" rows={4} className="w-full mt-3 bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C] resize-none" />

              <button onClick={demander} disabled={!valid} className={`btn-kid text-white mt-5 w-full justify-center ${valid ? "bg-[#FF6B4A]" : "bg-[#c9c2b4] cursor-not-allowed"}`}>
                <Send size={18} /> Demander mon devis
              </button>
              <p className="text-xs text-[#8a9389] font-semibold text-center mt-3">* Champs requis. Tarification sur devis, selon le projet.</p>
            </>
          )}
        </div>

        <Link to="/" className="btn-kid bg-[#0F6E56] text-white mt-8"><ArrowLeft size={18} /> Accueil</Link>
      </section>
    </div>
  );
}
