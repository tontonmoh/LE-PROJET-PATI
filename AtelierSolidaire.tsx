import { Users, Briefcase, Landmark, Sparkles } from "lucide-react";
import { SOCIAL } from "../data/site";

const STATS = [
  ["1500+", "bénéficiaires directs"], ["8000+", "produits innovants vendus"],
  ["50+", "micro-entreprises nées"], ["100+", "emplois soutenus"], ["100%", "autofinancé en 2025"],
];
const DOMAINES = [
  { icon: Users, t: "Impact social", pts: ["Éducation alternative via des objets pédagogiques (cartes de Guinée)", "Safe Space de la jeunesse : internet, bibliothèque, open space gratuits", "100+ sessions : couture, design, entrepreneuriat, soft skills, droits humains", "17 pionniers incubés ayant lancé la dynamique"] },
  { icon: Briefcase, t: "Impact économique", pts: ["Promotion du Made in Guinea : artisanat transformé en produits de design", "8000+ produits vendus (cartes pédagogiques, packagings, décoration)", "3 points de vente : CCFG, Musée National, Aéroport AST", "Modèle de viabilité économique 100% autofinancé"] },
  { icon: Landmark, t: "Impact culturel & citoyen", pts: ["Valorisation du patrimoine : chaque objet raconte la Guinée", "Studio d'enregistrement, débats citoyens, soirées slam", "Diplomatie créative : Expo Dubaï, prix internationaux", "Championnats de slam, 3 trophées SENAMIC"] },
];

export default function AtelierSolidaire() {
  return (
    <div className="bg-[#FFF6E7]">
      <section className="bg-[#0D2B1A] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <a href={SOCIAL.websiteAtelier} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-display font-semibold text-[#FFC93C] bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full mb-5"><Sparkles size={16} /> L'Atelier Solidaire</a>
          <h1 className="text-3xl md:text-5xl leading-tight mb-4">L'incubateur citoyen qui a fait naître PATI</h1>
          <p className="text-lg text-white/85 font-semibold max-w-2xl leading-relaxed">À Conakry, l'Atelier Solidaire forme, oriente et incube la jeunesse guinéenne — et fait du patrimoine une force économique, sociale et culturelle.</p>
          <a href={SOCIAL.websiteAtelier} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 bg-[#FFC93C] text-[#0D2B1A] font-display font-bold px-5 py-2.5 rounded-full hover:opacity-90">Visiter le site officiel ↗</a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {STATS.map(([n, l]) => (
            <div key={l} className="card-kid p-5 text-center">
              <div className="font-display font-bold text-2xl text-[#0F6E56]">{n}</div>
              <div className="text-xs text-[#5a6b62] font-semibold mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12 space-y-6">
        {DOMAINES.map((d) => (
          <div key={d.t} className="card-kid p-7">
            <div className="flex items-center gap-2 mb-4"><div className="w-11 h-11 rounded-2xl bg-[#FFC93C]/30 flex items-center justify-center"><d.icon className="text-[#0F6E56]" size={22} /></div><h2 className="text-xl md:text-2xl text-[#0D2B1A]">{d.t}</h2></div>
            <div className="grid sm:grid-cols-2 gap-2">
              {d.pts.map((p) => <div key={p} className="flex items-start gap-2 text-sm text-[#3a4a42] font-semibold"><span className="text-[#FF6B4A] mt-1">▹</span>{p}</div>)}
            </div>
          </div>
        ))}
        <div className="bg-[#0F6E56] rounded-[2rem] p-7 text-white text-center font-display font-semibold">
          PATI — plateforme d'édition jeunesse en langues nationales — est née et incubée à <a href={SOCIAL.websiteAtelier} target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-2 hover:opacity-90">l'Atelier Solidaire</a>.
        </div>
      </section>
    </div>
  );
}
