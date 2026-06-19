import { Link } from "react-router-dom";
import { BookOpen, PenTool, Landmark, Share2, Mic, FileText, Palette, Drama, Trophy, Sparkles, Cpu, Compass, ArrowRight } from "lucide-react";

const ACTIVITES = [
  { icon: BookOpen, color: "#0F6E56", t: "Lecture & Découverte", d: "Lire ensemble les histoires PATI, les commenter, les partager. Chaque club reçoit un kit de lecture adapté à son niveau.", to: "/catalogue", cta: "Explorer le catalogue" },
  { icon: PenTool, color: "#FF6B4A", t: "Expression & Création", d: "Écrire, illustrer, raconter ses propres histoires inspirées du patrimoine guinéen. Les meilleures créations sont publiées sur la plateforme." },
  { icon: Landmark, color: "#1F7A8C", t: "Culture & Patrimoine", d: "Explorer les cultures guinéennes, les traditions, les figures historiques. Sorties, rencontres avec des aînés, documentation." },
  { icon: Share2, color: "#C8841E", t: "Engagement & Partage", d: "Partager avec la communauté, sensibiliser les autres enfants, organiser des événements de lecture dans son quartier." },
  { icon: Cpu, color: "#7A5CFF", t: "Atelier IA & création numérique", d: "Découvrir et utiliser l'intelligence artificielle de façon responsable pour créer : écrire, illustrer, imaginer. Une initiation aux outils de demain, au service du patrimoine guinéen.", to: "/atelier-ia", cta: "Découvrir l'atelier IA" },
  { icon: Compass, color: "#9B59B6", t: "Connaissance de soi & orientation", d: "Des sessions pour mieux se connaître et explorer les métiers d'avenir, avec le test « Découvre ton génie » et un accompagnement vers les opportunités de Simandou 2040.", to: "/decouvrir-son-genie", cta: "Faire le test" },
];
const CONCOURS = [
  { icon: Mic, color: "#FF6B4A", t: "Lecture à voix haute", d: "Lire un extrait d'une histoire PATI avec expression et interprétation.", meta: "Individuel ou duo · 3 min max" },
  { icon: FileText, color: "#0F6E56", t: "Nouvelle & Écriture", d: "Écrire une nouvelle courte inspirée des thèmes PATI : héroïnes, environnement, traditions, aventures.", meta: "Individuel" },
  { icon: Palette, color: "#9B59B6", t: "Illustration", d: "Créer une illustration originale inspirée d'une histoire PATI. Toutes techniques acceptées.", meta: "Individuel ou duo · A3 ou numérique" },
  { icon: Drama, color: "#1F7A8C", t: "Spectacle vivant", d: "Théâtre, conte, performance — une adaptation scénique d'une histoire PATI.", meta: "Groupe de 3 à 8" },
];
const RECOMPENSES = [
  "Livres dédicacés de la collection", "Publication de l'œuvre sur projetpati.com",
  "Stage d'une journée à l'Atelier Solidaire", "Label « Club PATI d'Excellence » pour un an",
  "Animation spéciale par un auteur ou illustrateur", "Visite guidée d'un lieu culturel",
  "Trophée « École Promotrice de la Lecture »",
];

export default function ClubsPati() {
  return (
    <div className="bg-[#FFF6E7]">
      <section className="bg-[#0F6E56] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[#FFC93C] bg-white/10 px-4 py-1.5 rounded-full mb-5"><Trophy size={16} /> Clubs PATI — écoles</div>
          <h1 className="text-3xl md:text-5xl leading-tight mb-4">Un club de lecture et de création dans chaque école</h1>
          <p className="text-lg text-white/85 font-semibold max-w-2xl leading-relaxed">Les Clubs PATI font vivre la lecture, l'écriture et le patrimoine guinéen au cœur des écoles, autour des histoires de la collection.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-6">Les activités du club</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {ACTIVITES.map((a) => {
            const inner = (
              <>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: `${a.color}26` }}><a.icon size={24} style={{ color: a.color }} /></div>
                <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-1">{a.t}</h3>
                <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">{a.d}</p>
                {a.soon ? (
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold bg-[#FFC93C]/30 text-[#633806] px-2.5 py-1 rounded-full">Bientôt</span>
                ) : a.to ? (
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-display font-semibold group-hover:gap-2 transition-all" style={{ color: a.color }}>{a.cta} <ArrowRight size={15} /></span>
                ) : null}
              </>
            );
            const cardStyle = { background: `${a.color}0d`, borderColor: `${a.color}33` };
            if (a.to) return <Link key={a.t} to={a.to} className="card-kid p-6 group block border-2 hover:shadow-kid transition-shadow" style={cardStyle}>{inner}</Link>;
            return <div key={a.t} className="card-kid p-6 border-2" style={cardStyle}>{inner}</div>;
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-2">Le Grand Concours PATI</h2>
        <p className="text-[#5a6b62] font-semibold mb-6">Quatre catégories pour briller.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {CONCOURS.map((c) => (
            <div key={c.t} className="card-kid p-6 border-2" style={{ background: `${c.color}0d`, borderColor: `${c.color}33` }}>
              <div className="flex items-center gap-2 mb-2"><c.icon size={22} style={{ color: c.color }} /><h3 className="font-display font-semibold text-[#0D2B1A] text-lg">{c.t}</h3></div>
              <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed mb-2">{c.d}</p>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: `${c.color}1f`, color: c.color }}>{c.meta}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-[2rem] p-8 shadow-kid">
          <div className="flex items-center gap-2 mb-4"><Sparkles className="text-[#FFC93C]" size={22} /><h2 className="text-2xl text-[#0D2B1A]">Les récompenses</h2></div>
          <div className="grid sm:grid-cols-2 gap-3">
            {RECOMPENSES.map((r) => (
              <div key={r} className="flex items-start gap-2 text-[#3a4a42] font-semibold text-sm"><Trophy size={16} className="text-[#FFC93C] mt-0.5 shrink-0" />{r}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
