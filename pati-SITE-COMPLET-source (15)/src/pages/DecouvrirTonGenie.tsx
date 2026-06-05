import { Link } from "react-router-dom";
import { Sparkles, UserCircle, Target, Heart, Star, Flag, Shapes, MapPin, GraduationCap, Rocket, Mountain } from "lucide-react";

const DIMENSIONS = [
  { icon: UserCircle, title: "Qui suis-je ?", sub: "Connaissance de soi" },
  { icon: Target, title: "Mes aptitudes", sub: "Ce que je fais bien" },
  { icon: Heart, title: "Mes aspirations", sub: "Ce que je veux" },
  { icon: Star, title: "Dans la peau d'un héros", sub: "Héros PATI" },
  { icon: Flag, title: "Ma vision", sub: "La Guinée que je veux" },
  { icon: Shapes, title: "Mon style", sub: "Mon rapport au monde" },
];

const DECOUVERTES = [
  { icon: Sparkles, title: "Ton profil Simandou 2040", desc: "Ton pilier dominant et ton pilier secondaire, rien que pour toi." },
  { icon: Mountain, title: "Tes piliers Simandou", desc: "Les forces sur lesquelles bâtir ton avenir." },
  { icon: Rocket, title: "Des métiers faits pour toi", desc: "Pistes PRO, UNIV et INNOV adaptées à ton profil." },
  { icon: GraduationCap, title: "Des formations près de chez toi", desc: "Filières existantes et émergentes, dans ta région." },
];

function SimandouBanner() {
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
          24 questions pour te connaître vraiment : tes aptitudes, tes qualités, tes aspirations —
          et découvrir quel métier de la Guinée de demain est fait pour toi.
        </p>
        <Link to="/orientation/questionnaire" className="btn-kid bg-[#FF6B4A] text-white shadow-kid">
          <Sparkles size={18} /> Commencer mon bilan
        </Link>
        <p className="text-sm text-[#5a6b62] font-semibold mt-4">24 questions · ~8 minutes · Résultat personnalisé</p>
      </section>

      {/* Bannière Simandou */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-[1.75rem] overflow-hidden border-8 border-white shadow-kid">
          <SimandouBanner />
        </div>
      </section>

      {/* Dimensions du bilan */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-2 text-center">Ce que le bilan explore</h2>
        <p className="text-[#5a6b62] font-semibold mb-8 text-center">6 dimensions · 4 profils possibles</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIMENSIONS.map((d) => (
            <div key={d.title} className="card-kid p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#5DCAA5]/25 flex items-center justify-center mb-3">
                <d.icon className="text-[#0F6E56]" size={24} />
              </div>
              <h3 className="font-display font-semibold text-[#0D2B1A] text-lg">{d.title}</h3>
              <p className="text-sm text-[#5a6b62] font-semibold">{d.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ce que tu vas découvrir */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-8 text-center">À la fin, tu découvres…</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {DECOUVERTES.map((d) => (
            <div key={d.title} className="card-kid p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#FFC93C]/30 flex items-center justify-center shrink-0">
                <d.icon className="text-[#0F6E56]" size={24} />
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
      </section>

      {/* CTA bas */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <Link to="/orientation/questionnaire" className="btn-kid bg-[#0F6E56] text-white shadow-kid">
          <Sparkles size={18} /> C'est parti, je commence !
        </Link>
      </section>
    </div>
  );
}
