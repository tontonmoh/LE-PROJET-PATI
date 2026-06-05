import { GraduationCap, Coins, Megaphone, UserCheck, Sparkles } from "lucide-react";

const AXES = [
  { icon: GraduationCap, t: "Préparer", d: "Préparer de jeunes ouvriers et artisans dans leur aventure entrepreneuriale : renforcement des capacités personnelles et administratives." },
  { icon: Coins, t: "Mobiliser les investissements", d: "Via le parrainage de personnes physiques ou la RSE. Prêts remboursables à taux zéro et investissements solidaires." },
  { icon: Megaphone, t: "Promouvoir les produits", d: "Émission de télé-réalité, appli digitale et numéro spécial pour vendre le concept, les produits et les services des sobèlas." },
  { icon: UserCheck, t: "Placer les profils", d: "Base de données de profils qualifiés et cadre de collaboration avec les recruteurs, pour un placement permanent ou intérimaire." },
];
const PLANS = [
  { t: "Plan Individuel", pts: ["1 personne accompagnée", "Remboursement à 3 mois", "Préparation d'un apprenti ouvrier", "Accompagnement marketing & comptabilité"] },
  { t: "Plan Standard", pts: ["4 personnes accompagnées", "Remboursement à 6 mois", "Préparation de 3 apprentis", "Financement de matériels", "Formalisation en entreprise"], featured: true },
  { t: "Plan Avancé", pts: ["15 personnes accompagnées", "Remboursement à 1 an", "Promotion produits & services", "Associé au projet SÖBÈLA"] },
];

export default function Sobela() {
  return (
    <div className="bg-[#FFF6E7]">
      <section className="bg-[#3FB6E8] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="inline-flex items-center gap-2 font-display font-semibold bg-white/20 px-4 py-1.5 rounded-full mb-5"><Sparkles size={16} /> SÖBÈLA</div>
          <h1 className="text-3xl md:text-5xl leading-tight mb-4">Investir dans les jeunes ouvriers et artisans de Guinée</h1>
          <p className="text-lg text-white/90 font-semibold max-w-2xl leading-relaxed">Sobela accompagne, finance et place les jeunes artisans dans leur aventure entrepreneuriale.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-6">Comment ça marche</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {AXES.map((a) => (
            <div key={a.t} className="card-kid p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#3FB6E8]/15 flex items-center justify-center mb-3"><a.icon className="text-[#0F6E56]" size={24} /></div>
              <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-1">{a.t}</h3>
              <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-6">Les plans d'accompagnement</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((p) => (
            <div key={p.t} className={`card-kid p-6 ${p.featured ? "ring-4 ring-[#FFC93C]" : ""}`}>
              <h3 className="font-display font-semibold text-[#0D2B1A] text-xl mb-3">{p.t}</h3>
              <div className="space-y-2">
                {p.pts.map((x) => <div key={x} className="flex items-start gap-2 text-sm text-[#3a4a42] font-semibold"><span className="text-[#3FB6E8] mt-1">▹</span>{x}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
