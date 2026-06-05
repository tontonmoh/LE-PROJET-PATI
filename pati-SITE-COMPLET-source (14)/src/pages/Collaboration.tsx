import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft, CheckCircle2, Send, ChevronRight } from "lucide-react";
import { SOCIAL } from "../data/site";

// Métiers ouverts à la collaboration. Éditable ici.
const METIERS: { id: string; label: string; desc: string; color: string }[] = [
  { id: "illustration", label: "Illustrateur·rice BD", desc: "Donner vie aux planches et aux couvertures de la collection.", color: "#FF6B4A" },
  { id: "couleur", label: "Coloriste / mise en couleur", desc: "Habiller les illustrations aux couleurs de PATI.", color: "#FFC93C" },
  { id: "scenario", label: "Auteur·e / scénariste", desc: "Écrire et structurer les récits Pati, des Mômes au Passage.", color: "#0F6E56" },
  { id: "trad-nationales", label: "Traducteur·rice — langues nationales", desc: "Soussou, maninka, pular, kpèlè… porter PATI dans les langues de Guinée.", color: "#1F7A8C" },
  { id: "trad-etrangeres", label: "Traducteur·rice — anglais / arabe / chinois", desc: "Étendre le lecteur multilingue du site.", color: "#3FB6E8" },
  { id: "relecture", label: "Relecteur·rice culturel·le", desc: "Vérifier l'exactitude culturelle et linguistique des récits.", color: "#C2410C" },
  { id: "conte", label: "Conteur·se", desc: "Rejoindre la Caravane de Collecte et l'Espace conteurs.", color: "#9B59B6" },
  { id: "voix", label: "Voix-off / narration", desc: "Prêter sa voix aux livres audio et aux vidéos PATI.", color: "#E08A2E" },
  { id: "animation", label: "Animateur·rice 2D / motion", desc: "Animer les histoires pour la chaîne Le Projet PATI.", color: "#2E7D32" },
  { id: "son", label: "Compositeur·rice / sound design", desc: "Musique et ambiances sonores des productions.", color: "#0E8A8A" },
  { id: "dev", label: "Développeur·se web", desc: "Construire et faire évoluer projetpati.com.", color: "#3F6B7D" },
  { id: "pedagogie", label: "Pédagogue — cahiers & ateliers", desc: "Concevoir les cahiers pédagogiques et les Clubs PATI.", color: "#0F6E56" },
  { id: "enseignant", label: "Enseignant·e ambassadeur·rice", desc: "Déployer PATI dans son école.", color: "#FF6B4A" },
  { id: "cm", label: "Community manager", desc: "Faire rayonner PATI sur les réseaux.", color: "#3FB6E8" },
  { id: "autre", label: "Bénévole / autre", desc: "Une autre envie, une autre compétence ? Dis-nous.", color: "#5a6b62" },
];

export default function Collaboration() {
  const [metier, setMetier] = useState("");
  const [nom, setNom] = useState("");
  const [contact, setContact] = useState("");
  const [ville, setVille] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const metierLabel = METIERS.find((m) => m.id === metier)?.label || "Non précisé";
  const valid = nom.trim() && contact.trim() && metier;

  const choisir = (id: string) => {
    setMetier(id);
    document.getElementById("postuler")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const postuler = () => {
    if (!valid) return;
    const texte =
      `Candidature — Collaboration PATI\n` +
      `Métier : ${metierLabel}\n` +
      `Nom : ${nom}\n` +
      `Contact : ${contact}\n` +
      (ville.trim() ? `Ville / Pays : ${ville}\n` : "") +
      (portfolio.trim() ? `Portfolio / CV : ${portfolio}\n` : "") +
      (message.trim() ? `Message : ${message}\n` : "");
    window.open(`${SOCIAL.whatsapp}?text=${encodeURIComponent(texte)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="bg-[#FFF6E7]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-12 text-center">
        <div className="inline-flex items-center gap-2 font-display font-semibold text-[#0F6E56] bg-[#FFC93C]/30 px-4 py-1.5 rounded-full mb-5"><Sparkles size={16} /> Collaborer avec PATI</div>
        <h1 className="text-3xl md:text-4xl text-[#0D2B1A] mb-3">Construisons la collection, ensemble</h1>
        <p className="text-[#3a4a42] font-semibold mb-2 leading-relaxed">PATI grandit avec celles et ceux qui partagent sa mission : rendre à la jeunesse guinéenne ses récits. Choisis ton métier, et postule en un message.</p>
      </section>

      {/* Cartes métiers */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="font-display font-semibold text-[#0D2B1A] text-xl mb-5">Les profils que nous recherchons</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {METIERS.map((m) => (
            <button
              key={m.id}
              onClick={() => choisir(m.id)}
              className={`card-kid p-5 text-left flex flex-col transition ${metier === m.id ? "ring-4 ring-[#FFC93C]" : ""}`}
            >
              <span className="inline-block self-start text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ background: `${m.color}22`, color: m.color }}>{m.label}</span>
              <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed flex-1">{m.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-display font-semibold mt-4" style={{ color: m.color }}>Postuler <ChevronRight size={15} /></span>
            </button>
          ))}
        </div>
      </section>

      {/* Formulaire de candidature */}
      <section id="postuler" className="max-w-3xl mx-auto px-6 pb-20 scroll-mt-24">
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-kid">
          {sent ? (
            <div className="text-center py-6">
              <CheckCircle2 className="text-[#0F6E56] mx-auto mb-4" size={48} />
              <h2 className="text-2xl text-[#0D2B1A] mb-2">Candidature prête à envoyer&nbsp;!</h2>
              <p className="text-[#5a6b62] font-semibold mb-2">WhatsApp s'est ouvert avec ton message pré-rempli. Vérifie-le et appuie sur « envoyer ».</p>
              <p className="text-[#5a6b62] font-semibold mb-6">L'équipe PATI te répondra sous 72h.</p>
              <button onClick={() => setSent(false)} className="btn-kid bg-[#0F6E56] text-white justify-center">Faire une autre candidature</button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-2">Postuler</h2>
              <p className="text-[#5a6b62] font-semibold mb-6">Remplis ce formulaire : ta candidature partira par WhatsApp à l'équipe PATI.</p>

              <label className="block text-sm font-display font-semibold text-[#0D2B1A] mb-1.5">Métier visé</label>
              <select
                value={metier}
                onChange={(e) => setMetier(e.target.value)}
                className="w-full bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold outline-none focus:ring-2 focus:ring-[#FFC93C] mb-4"
              >
                <option value="">— Choisis un métier —</option>
                {METIERS.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
              </select>

              <div className="grid sm:grid-cols-2 gap-3">
                <input value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom et prénom *" className="bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
                <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Email ou WhatsApp *" className="bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
                <input value={ville} onChange={(e) => setVille(e.target.value)} placeholder="Ville / Pays" className="bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
                <input value={portfolio} onChange={(e) => setPortfolio(e.target.value)} placeholder="Lien portfolio / CV (optionnel)" className="bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
              </div>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Quelques mots sur toi et ta motivation" rows={4} className="w-full mt-3 bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C] resize-none" />

              <button
                onClick={postuler}
                disabled={!valid}
                className={`btn-kid text-white mt-5 w-full justify-center ${valid ? "bg-[#FF6B4A]" : "bg-[#c9c2b4] cursor-not-allowed"}`}
              >
                <Send size={18} /> Envoyer ma candidature
              </button>
              <p className="text-xs text-[#8a9389] font-semibold text-center mt-3">* Champs requis. Ta candidature s'ouvre dans WhatsApp, pré-remplie.</p>
            </>
          )}
        </div>

        <Link to="/" className="btn-kid bg-[#0F6E56] text-white mt-8"><ArrowLeft size={18} /> Accueil</Link>
      </section>
    </div>
  );
}
