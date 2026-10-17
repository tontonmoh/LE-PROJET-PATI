import { Link } from "react-router-dom";
import GenieMotion from "../components/GenieMotion";
import { PARCOURSUP } from "../data/referentiel";
import { Sparkles, UserCircle, Target, Heart, Star, Flag, Shapes, MapPin, GraduationCap, Rocket, Mountain } from "lucide-react";

const DIMENSIONS = [
  { icon: UserCircle, title: "Ce que j'aime faire", sub: "30 situations concrètes", color: "#B8472A" },
  { icon: Target, title: "Six génies", sub: "Réaliste · Investigateur · Artiste · Social · Entreprenant · Conventionnel", color: "#2B5C8A" },
  { icon: Heart, title: "Pas de bonne réponse", sub: "Juste toi, sincèrement", color: "#FF6B4A" },
  { icon: Star, title: "Ton code génie", sub: "Deux lettres, comme un vrai bilan d'orientation", color: "#C8841E" },
  { icon: Flag, title: "Ma région", sub: "Les formations près de chez moi", color: "#0F6E56" },
  { icon: Shapes, title: "Un modèle réel", sub: "Quelqu'un comme toi, en Guinée", color: "#1F7A8C" },
];

const DECOUVERTES = [
  { icon: Sparkles, title: "Ton génie et ton code", color: "#FF6B4A", desc: "Ton génie dominant, ton secondaire, et si ton profil est net, affirmé ou ouvert." },
  { icon: Mountain, title: "Tes six génies mesurés", color: "#2B5C8A", desc: "Un score sur 100 pour chacun, pour voir ce qui te ressemble le plus." },
  { icon: Rocket, title: "Des métiers faits pour toi", color: "#C8841E", desc: "Ceux du catalogue PATI et ceux du référentiel guinéen, métiers émergents compris." },
  { icon: GraduationCap, title: "Des formations près de chez toi", color: "#0F6E56", desc: "Les établissements de ta région, avec le niveau d'entrée et le diplôme." },
];

export function SimandouBanner() {
  return (
    <svg viewBox="0 0 800 220" className="w-full h-auto" role="img" aria-label="Illustration du programme Simandou 2040 : montagnes, voie ferrée et soleil 2040">
      <rect width="800" height="220" fill="#0F6E56" />
      {/* Soleil 2040 */}
      <circle cx="660" cy="62" r="40" fill="#FFC93C" />
      <text x="660" y="69" textAnchor="middle" fontFamily="Fredoka, sans-serif" fontWeight="700" fontSize="22" fill="#0D2B1A">2040</text>
      {/* Montagnes (chaîne du Simandou) */}
      <path d="M0 170 L120 80 L210 150 L330 60 L460 160 L560 95 L680 165 L800 110 L800 220 L0 220 Z" fill="#0A4D3C" />
      <path d="M0 195 L150 120 L280 185 L420 110 L560 185 L700 130 L800 175 L800 220 L0 220 Z" fill="#073A2D" />
      {/* Voie ferrée */}
      <line x1="0" y1="205" x2="800" y2="205" stroke="#5DCAA5" strokeWidth="4" />
      <line x1="0" y1="214" x2="800" y2="214" stroke="#5DCAA5" strokeWidth="4" />
      {Array.from({ length: 27 }).map((_, i) => (
        <line key={i} x1={i * 30} y1="203" x2={i * 30} y2="216" stroke="#9FE1CB" strokeWidth="3" />
      ))}
    </svg>
  );
}

export default function DecouvrirTonGenie() {
  return (
    <div className="bg-[#FFF6E7]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-12 text-center">
        <div className="inline-flex items-center gap-2 font-display font-semibold text-white bg-[#FF6B4A] px-4 py-1.5 rounded-full mb-5">
          <Mountain size={16} /> Programme Simandou 2040
        </div>
        <h1 className="text-3xl md:text-5xl text-[#0D2B1A] leading-tight mb-4">Découvre ton génie</h1>
        <p className="text-lg text-[#3a4a42] font-semibold leading-relaxed max-w-2xl mx-auto mb-7">
          30 questions sur ce que tu aimes faire, pour trouver ton génie — ton code à deux lettres —
          et découvrir les métiers et les formations de la Guinée de demain qui lui ressemblent.
        </p>
        <Link to="/orientation/questionnaire" className="btn-kid bg-[#FF6B4A] text-white shadow-kid">
          <Sparkles size={18} /> Commencer mon bilan
        </Link>
        <p className="text-sm text-[#5a6b62] font-semibold mt-4">30 questions · ~10 minutes · Résultat personnalisé</p>
      </section>

      {/* Motion design : profils, méthode, résultats (26 s, en boucle) */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-[1.75rem] overflow-hidden border-8 border-white shadow-kid">
          <GenieMotion />
        </div>
      </section>

      {/* Dimensions du bilan */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-2 text-center">Ce que le bilan explore</h2>
        <p className="text-[#5a6b62] font-semibold mb-3 text-center">6 dimensions · 4 profils possibles</p>
        <div className="flex justify-center gap-1.5 mb-8">
          {["#B8472A", "#2B5C8A", "#FF6B4A", "#0F6E56", "#C8841E", "#1F7A8C"].map((c) => <span key={c} className="w-8 h-2 rounded-full" style={{ background: c }} />)}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIMENSIONS.map((d) => (
            <div key={d.title} className="card-kid p-6 border-t-8" style={{ borderTopColor: d.color, background: `linear-gradient(180deg, ${d.color}14 0%, #fff 55%)` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-sm" style={{ background: d.color }}>
                <d.icon className="text-white" size={24} />
              </div>
              <h3 className="font-display font-semibold text-[#0D2B1A] text-lg">{d.title}</h3>
              <p className="text-sm text-[#5a6b62] font-semibold">{d.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ce que tu vas découvrir */}
      <section className="bg-[#0F6E56] mt-6 py-12">
       <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl text-white mb-8 text-center">À la fin, tu découvres…</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {DECOUVERTES.map((d) => (
            <div key={d.title} className="card-kid p-6 flex gap-4 items-start border-l-8" style={{ borderLeftColor: d.color, background: `linear-gradient(90deg, ${d.color}14 0%, #fff 45%)` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm" style={{ background: d.color }}>
                <d.icon className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-1">{d.title}</h3>
                <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-[#5a6b62] font-semibold mt-8 bg-white rounded-2xl px-5 py-4 max-w-2xl mx-auto shadow-kid">
          <MapPin size={18} className="text-[#FF6B4A] shrink-0" />
          Le bilan utilise ta région pour te proposer des métiers et des formations proches de chez toi.
        </div>
        <div className="mt-5 max-w-2xl mx-auto bg-[#2B5C8A] text-white rounded-2xl px-5 py-4 shadow-kid flex flex-wrap items-center gap-3 justify-between">
          <div className="text-sm font-semibold leading-relaxed">
            <b className="font-display">Et après le bac ?</b> Ton résultat te prépare à {PARCOURSUP.nom}, le portail officiel où tu classeras tes vœux d'université.
          </div>
          <a href={PARCOURSUP.url} target="_blank" rel="noopener noreferrer" className="shrink-0 bg-white text-[#2B5C8A] font-display font-semibold px-4 py-1.5 rounded-full text-sm">Voir le portail ↗</a>
        </div>
       </div>
      </section>

      {/* CTA bas */}
      <section className="max-w-4xl mx-auto px-6 py-14 text-center">
        <Link to="/orientation/questionnaire" className="btn-kid bg-[#FF6B4A] text-white shadow-kid">
          <Sparkles size={18} /> C'est parti, je commence !
        </Link>
      </section>
    </div>
  );
}
