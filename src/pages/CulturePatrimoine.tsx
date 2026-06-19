import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Landmark, Palette, Hammer, Wand2, Mic2, Drama, BookOpen,
  Headphones, Users, ArrowRight, Sparkles, CalendarCheck, Layers, FileText, CheckCircle2,
} from "lucide-react";
import { KoraIcon, BalafonIcon, DjembeIcon } from "../components/InstrumentIcons";

/* ── 3 packs proposés sous chaque atelier ── */
/* ── Grille à 3 paliers (selon intrants & rareté du maître) ── */
const PALIERS: Record<number, { single: string; dix: string }> = {
  1: { single: "150 000 FG", dix: "1 050 000 FG" }, // Parole & Scène (intrant faible)
  2: { single: "210 000 FG", dix: "1 500 000 FG" }, // Création (standard)
  3: { single: "300 000 FG", dix: "2 100 000 FG" }, // Maître & Patrimoine (intrant fort)
};
const PACK_TYPES: { key: string; icon: typeof CalendarCheck; t: string; prix: (p: number) => string }[] = [
  { key: "session", icon: CalendarCheck, t: "Réserver une séance", prix: (p) => PALIERS[p].single },
  { key: "dix", icon: Layers, t: "Commander 10 séances", prix: (p) => PALIERS[p].dix },
  { key: "polyvalent", icon: FileText, t: "Pack polyvalent", prix: () => "Sur devis" },
];

/* ── Ateliers regroupés par catégorie. Descriptions génériques — [À VALIDER] avant prod. ── */
const CATEGORIES = [
  {
    cle: "musique", titre: "Musique & rythme", emoji: "🎵", accent: "#C8841E",
    note: "Le patrimoine sonore de la Guinée, instrument en main.",
    ateliers: [
      { icon: KoraIcon, t: "Kora", palier: 3, d: "Découvrir la kora mandingue, ses cordes et son histoire de griot. Initiation au jeu et aux mélodies traditionnelles." },
      { icon: BalafonIcon, t: "Balafon", palier: 3, d: "S'initier au balafon : frappe, gammes et rythmes du Mandé, transmis de génération en génération." },
      { icon: DjembeIcon, t: "Tam-tam (djembé & doundoun)", palier: 2, d: "Sentir le rythme avec les mains : percussions, ensembles et dialogues de tambours au cœur de la fête et du récit." },
    ],
  },
  {
    cle: "arts", titre: "Arts visuels", emoji: "🎨", accent: "#1F7A8C",
    note: "Donner forme et couleur aux histoires et au patrimoine.",
    ateliers: [
      { icon: Palette, t: "Peinture", palier: 2, d: "Couleurs, motifs et scènes inspirés des contes et des paysages guinéens. De l'esquisse à l'œuvre, à plat ou sur grand format." },
      { icon: Hammer, t: "Sculpture", palier: 2, d: "Modeler, tailler, assembler : masques, figures et objets qui font vivre les symboles du patrimoine entre les mains des enfants." },
      { icon: Wand2, t: "Concevoir avec l'IA", palier: 2, d: "Imaginer et composer des images avec les outils de l'Atelier IA, au service du patrimoine guinéen." },
    ],
  },
  {
    cle: "scene", titre: "Scène & parole", emoji: "🎭", accent: "#9B59B6",
    note: "Faire vivre les mots et les histoires devant un public.",
    ateliers: [
      { icon: Mic2, t: "Slam", palier: 1, d: "Écrire et dire ses textes : rythme des mots, souffle et engagement. La parole d'aujourd'hui au service des récits d'hier." },
      { icon: Drama, t: "Théâtre", palier: 1, d: "Jouer, incarner, mettre en scène une histoire PATI : voix, corps et émotion pour porter un récit en groupe." },
      { icon: BookOpen, t: "Conte", palier: 1, d: "Apprendre l'art du conteur : transmettre une histoire de vive voix, comme les aînés, et tenir un auditoire en haleine." },
    ],
  },
];

export default function CulturePatrimoine() {
  const [sent, setSent] = useState(false);
  const [atelierSel, setAtelierSel] = useState("");
  const tousAteliers = CATEGORIES.flatMap((c) => c.ateliers.map((a) => a.t));
  const palierDe: Record<string, number> = {};
  CATEGORIES.forEach((c) => c.ateliers.forEach((a) => { palierDe[a.t] = a.palier; }));
  const palierSel = atelierSel ? palierDe[atelierSel] : null;

  return (
    <div className="bg-[#FFF6E7]">
      {/* HERO */}
      <section className="bg-[#0F6E56] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[#FFC93C] bg-white/10 px-4 py-1.5 rounded-full mb-5"><Landmark size={16} /> Culture & Patrimoine</div>
          <h1 className="text-3xl md:text-5xl leading-tight mb-4">Des ateliers pour faire vivre le patrimoine</h1>
          <p className="text-lg text-white/85 font-semibold max-w-2xl leading-relaxed">Musique, arts visuels, scène : des ateliers pratiques où les enfants explorent les cultures guinéennes avec leurs mains, leur voix et leur corps — au-delà des livres.</p>
        </div>
      </section>

      {/* CATÉGORIES & ATELIERS */}
      {CATEGORIES.map((cat) => (
        <section key={cat.cle} className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-baseline gap-2 mb-1">
            <h2 className="text-2xl md:text-3xl text-[#0D2B1A]">{cat.emoji} {cat.titre}</h2>
          </div>
          <p className="text-[#5a6b62] font-semibold mb-6">{cat.note}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cat.ateliers.map((a) => (
              <div key={a.t} className="card-kid p-6 border-2 flex flex-col" style={{ background: `${cat.accent}0d`, borderColor: `${cat.accent}33` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: `${cat.accent}26` }}><a.icon size={24} style={{ color: cat.accent }} /></div>
                <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-1">{a.t}</h3>
                <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed mb-4">{a.d}</p>
                <div className="mt-auto pt-3 space-y-1.5 border-t" style={{ borderColor: `${cat.accent}22` }}>
                  {PACK_TYPES.map((p) => (
                    <a key={p.key} href="#reserver" className="flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-xs font-bold transition-colors hover:brightness-95" style={{ background: `${cat.accent}14`, color: cat.accent }}>
                      <span className="inline-flex items-center gap-1.5"><p.icon size={14} /> {p.t}</span>
                      <span className="whitespace-nowrap">{p.prix(a.palier)}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* FORMULAIRE DE RÉSERVATION */}
      <section id="reserver" className="max-w-3xl mx-auto px-6 py-12 scroll-mt-6">
        <div className="bg-[#0F6E56] text-white rounded-[2rem] p-8 md:p-10 shadow-kid">
          <div className="flex items-center gap-2 mb-2"><CalendarCheck className="text-[#FFC93C]" size={24} /><h2 className="text-2xl md:text-3xl">Réserver un atelier</h2></div>

          {sent ? (
            <div className="flex items-start gap-3 bg-white/10 rounded-2xl p-6 mt-4">
              <CheckCircle2 size={26} className="text-[#FFC93C] shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-semibold text-lg mb-1">Merci, votre réservation est envoyée&nbsp;!</p>
                <p className="text-white/85 font-semibold text-sm leading-relaxed">Nous vous recontactons pour confirmer les dates et le règlement.</p>
                <Link to="/clubs" className="btn-kid bg-[#FFC93C] text-[#0D2B1A] mt-4"><ArrowRight size={18} /> Retour aux Clubs PATI</Link>
              </div>
            </div>
          ) : (
            <>
              <p className="text-white/85 font-semibold mb-2 leading-relaxed">Choisissez un atelier et un pack — nous vous recontactons pour fixer les dates.</p>
              <p className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 mb-6"><Sparkles size={14} className="text-[#FFC93C]" /> Paiement par Mobile Money — bientôt directement en ligne.</p>
              <form
                name="reservation-atelier"
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
                <input type="hidden" name="form-name" value="reservation-atelier" />
                <p className="hidden"><label>Ne pas remplir : <input name="bot-field" /></label></p>

                <div>
                  <label className="block text-sm font-display font-semibold text-white/90 mb-1.5">Atelier <span className="text-[#FFC93C]">*</span></label>
                  <select name="atelier" required value={atelierSel} onChange={(e) => setAtelierSel(e.target.value)} className="w-full rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold outline-none focus:ring-2 focus:ring-[#FFC93C]">
                    <option value="">Choisir…</option>
                    {tousAteliers.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-display font-semibold text-white/90 mb-1.5">Pack <span className="text-[#FFC93C]">*</span></label>
                  <select name="pack" required disabled={!palierSel} className="w-full rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold outline-none focus:ring-2 focus:ring-[#FFC93C] disabled:opacity-60">
                    <option value="">{palierSel ? "Choisir…" : "Choisissez d'abord un atelier"}</option>
                    {palierSel && PACK_TYPES.map((p) => {
                      const label = `${p.t} — ${p.prix(palierSel)}`;
                      return <option key={p.key} value={label}>{label}</option>;
                    })}
                  </select>
                </div>
                <Field name="structure" label="École / club / structure" required />
                <Field name="ville" label="Ville / préfecture" required />
                <Field name="responsable" label="Responsable" required />
                <Field name="contact" label="Email ou téléphone / WhatsApp" required />
                <div className="sm:col-span-2">
                  <label className="block text-sm font-display font-semibold text-white/90 mb-1.5">Message <span className="text-white/50">(facultatif)</span></label>
                  <textarea name="message" rows={3} className="w-full rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold outline-none focus:ring-2 focus:ring-[#FFC93C]" placeholder="Nombre d'enfants, dates souhaitées, vos questions…" />
                </div>

                <div className="sm:col-span-2 flex items-center gap-3 flex-wrap">
                  <button type="submit" className="btn-kid bg-[#FFC93C] text-[#0D2B1A] shadow-kid"><ArrowRight size={18} /> Envoyer ma réservation</button>
                  <span className="text-xs text-white/60 font-semibold">Réponse sous quelques jours.</span>
                </div>
              </form>
            </>
          )}
        </div>
      </section>

      {/* PASSERELLES vers le reste du site */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid sm:grid-cols-2 gap-5">
          <Link to="/ecouter-les-contes" className="card-kid p-6 group block border-2 hover:shadow-kid transition-shadow" style={{ background: "#0F6E560d", borderColor: "#0F6E5633" }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: "#0F6E5626" }}><Headphones size={24} style={{ color: "#0F6E56" }} /></div>
            <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-1">Écouter les contes</h3>
            <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">Le patrimoine oral, raconté par des conteurs — pour nourrir les ateliers.</p>
            <span className="inline-flex items-center gap-1 mt-3 text-sm font-display font-semibold group-hover:gap-2 transition-all" style={{ color: "#0F6E56" }}>Découvrir <ArrowRight size={15} /></span>
          </Link>
          <Link to="/espace-conteurs" className="card-kid p-6 group block border-2 hover:shadow-kid transition-shadow" style={{ background: "#FF6B4A0d", borderColor: "#FF6B4A33" }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: "#FF6B4A26" }}><Users size={24} style={{ color: "#FF6B4A" }} /></div>
            <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-1">Espace conteurs & création</h3>
            <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">Partager ses créations et rejoindre la communauté des conteurs PATI.</p>
            <span className="inline-flex items-center gap-1 mt-3 text-sm font-display font-semibold group-hover:gap-2 transition-all" style={{ color: "#FF6B4A" }}>Rejoindre <ArrowRight size={15} /></span>
          </Link>
        </div>
      </section>

      {/* CTA retour Clubs */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-[2rem] p-8 shadow-kid text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FFC93C]/30 mb-3"><Sparkles className="text-[#C8841E]" size={24} /></div>
          <h3 className="font-display font-semibold text-[#0D2B1A] text-xl mb-2">Ces ateliers vivent dans les Clubs PATI</h3>
          <p className="text-[#5a6b62] font-semibold mb-5">Musique, arts et scène font partie des activités proposées aux écoles.</p>
          <Link to="/clubs" className="btn-kid bg-[#0F6E56] text-white"><ArrowRight size={18} /> Voir les Clubs PATI</Link>
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
