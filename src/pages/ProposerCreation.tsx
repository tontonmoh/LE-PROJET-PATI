import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PenTool, FileText, Mic2, Palette, Drama, Music, Cpu,
  CheckCircle2, ArrowRight, BookOpen,
} from "lucide-react";

/* ── Types de créations qu'un club peut proposer. [À VALIDER] ── */
const TYPES = [
  { icon: FileText, color: "#0F6E56", t: "Écriture", d: "Nouvelle, poème, conte écrit inspiré du patrimoine guinéen." },
  { icon: Mic2, color: "#C8841E", t: "Oralité & lecture", d: "Lecture à voix haute, conte dit, slam — la parole en action." },
  { icon: Palette, color: "#1F7A8C", t: "Arts visuels", d: "Dessin, peinture, sculpture, illustration d'une histoire PATI." },
  { icon: Drama, color: "#9B59B6", t: "Spectacle vivant", d: "Théâtre, mise en scène, performance autour d'un récit." },
  { icon: Music, color: "#FF6B4A", t: "Musique", d: "Kora, balafon, percussions, chant — une création sonore." },
  { icon: Cpu, color: "#7A5CFF", t: "Numérique & IA", d: "Création assistée par les outils de l'Atelier IA." },
];

export default function ProposerCreation() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-[#FFF6E7]">
      {/* HERO */}
      <section className="bg-[#0F6E56] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[#FFC93C] bg-white/10 px-4 py-1.5 rounded-full mb-5"><PenTool size={16} /> Expression & Création</div>
          <h1 className="text-3xl md:text-5xl leading-tight mb-4">Proposer une création de mon club</h1>
          <p className="text-lg text-white/85 font-semibold max-w-2xl leading-relaxed">Votre club a écrit, dessiné, joué ou composé quelque chose&nbsp;? Partagez-le avec nous — les plus belles créations sont publiées sur la plateforme.</p>
        </div>
      </section>

      {/* TYPES */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-2">Quels types de créations&nbsp;?</h2>
        <p className="text-[#5a6b62] font-semibold mb-6">Choisissez ce qui correspond à votre projet — toutes les formes d'expression sont les bienvenues.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TYPES.map((x) => (
            <div key={x.t} className="card-kid p-6 border-2" style={{ background: `${x.color}0d`, borderColor: `${x.color}33` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: `${x.color}26` }}><x.icon size={24} style={{ color: x.color }} /></div>
              <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-1">{x.t}</h3>
              <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORMULAIRE */}
      <section id="formulaire" className="max-w-3xl mx-auto px-6 pb-20 scroll-mt-6">
        <div className="bg-[#0F6E56] text-white rounded-[2rem] p-8 md:p-10 shadow-kid">
          <div className="flex items-center gap-2 mb-2"><PenTool className="text-[#FFC93C]" size={24} /><h2 className="text-2xl md:text-3xl">Soumettre notre création</h2></div>

          {sent ? (
            <div className="flex items-start gap-3 bg-white/10 rounded-2xl p-6 mt-4">
              <CheckCircle2 size={26} className="text-[#FFC93C] shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-semibold text-lg mb-1">Merci, votre création est envoyée&nbsp;!</p>
                <p className="text-white/85 font-semibold text-sm leading-relaxed">Nous la découvrons avec attention et revenons vers vous. En attendant, explorez la collection.</p>
                <Link to="/catalogue" className="btn-kid bg-[#FFC93C] text-[#0D2B1A] mt-4"><BookOpen size={18} /> Découvrir les livres</Link>
              </div>
            </div>
          ) : (
            <>
              <p className="text-white/85 font-semibold mb-6 leading-relaxed">Laissez-nous vos coordonnées et décrivez votre création — nous vous recontactons.</p>
              <form
                name="creation-club"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
                  }).then(() => setSent(true)).catch(() => setSent(true));
                }}
                className="grid sm:grid-cols-2 gap-4"
              >
                <input type="hidden" name="form-name" value="creation-club" />
                <p className="hidden"><label>Ne pas remplir : <input name="bot-field" /></label></p>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-display font-semibold text-white/90 mb-1.5">Type de création <span className="text-[#FFC93C]">*</span></label>
                  <select name="type" required className="w-full rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold outline-none focus:ring-2 focus:ring-[#FFC93C]">
                    <option value="">Choisir…</option>
                    {TYPES.map((x) => <option key={x.t} value={x.t}>{x.t}</option>)}
                  </select>
                </div>
                <Field name="club" label="Nom du club / école" required />
                <Field name="ville" label="Ville / préfecture" required />
                <Field name="responsable" label="Responsable" required />
                <Field name="contact" label="Email ou téléphone / WhatsApp" required />
                <div className="sm:col-span-2">
                  <label className="block text-sm font-display font-semibold text-white/90 mb-1.5">Décrivez votre création <span className="text-white/50">(facultatif)</span></label>
                  <textarea name="description" rows={3} className="w-full rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold outline-none focus:ring-2 focus:ring-[#FFC93C]" placeholder="Le titre, l'idée, ce que vous avez réalisé…" />
                </div>

                <div className="sm:col-span-2 flex items-center gap-3 flex-wrap">
                  <button type="submit" className="btn-kid bg-[#FFC93C] text-[#0D2B1A] shadow-kid"><ArrowRight size={18} /> Envoyer notre création</button>
                  <span className="text-xs text-white/60 font-semibold">Réponse sous quelques jours.</span>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-display font-semibold text-white/90 mb-1.5">{label} {required && <span className="text-[#FFC93C]">*</span>}</label>
      <input name={name} type={type} required={required} className="w-full rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold outline-none focus:ring-2 focus:ring-[#FFC93C]" />
    </div>
  );
}
