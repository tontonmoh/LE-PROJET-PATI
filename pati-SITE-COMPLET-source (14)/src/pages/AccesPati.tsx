import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Sparkles, Gift, ShoppingBag } from "lucide-react";
import { SOCIAL } from "../data/site";

// =====================================================================
//  TARIFS PATI (FG) — modifier ici uniquement.
//  Annuel : Guinée = 3 mois offerts ; Diaspora & Famille = 2 mois offerts.
// =====================================================================
const PRICING = {
  individuel: {
    guinee:   { mensuel: "10 000 FG", annuel: "90 000 FG" },
    diaspora: { mensuel: "25 000 FG", annuel: "250 000 FG" },
  },
  famille:    { mensuel: "30 000 FG", annuel: "300 000 FG" }, // familles de + de 5 personnes (Guinée)
};

// Offre de lancement : essai gratuit, puis bascule payante.
const TRIAL = { periode: "juin & juillet 2026" };

type Tier = {
  t: string; badge: string; color: string; sub: string; pts: string[];
  price: "essai" | "individuel" | "famille" | "devis"; featured?: boolean;
  cta: { label: string; to?: string; href?: string };
};

const TIERS: Tier[] = [
  { t: "PATI Freemium", badge: "Essai gratuit · 2 mois", color: "#0F6E56", sub: `Gratuit en ${TRIAL.periode}`, price: "essai",
    pts: ["Accès complet pendant l'essai", "Tous les livres + audio", "Quiz, défis et suivi", "Puis bascule vers un plan payant"], cta: { label: "Profiter de l'essai", to: "/inscription" } },
  { t: "PATI Premium", badge: "Individuel", color: "#1F7A8C", sub: "1 personne", price: "individuel",
    pts: ["Tous les livres + nouveautés", "Livres audio complets", "Contenus premium", "Mode hors-ligne (bientôt)"], cta: { label: "S'abonner", to: "/inscription" } },
  { t: "PATI Famille", badge: "Famille 5+", color: "#FF6B4A", sub: "Familles de plus de 5 personnes", price: "famille",
    pts: ["Jusqu'à 6 profils enfants", "Tous les avantages Premium", "Suivi par enfant"], cta: { label: "S'abonner", to: "/inscription" } },
  { t: "PATI École", badge: "Institutionnel", color: "#9B59B6", sub: "Écoles & MEN", price: "devis", featured: true,
    pts: ["Clubs PATI", "Boîte à Outils enseignants", "Mallette pédagogique", "Tableau de bord classe"], cta: { label: "Demander un devis", href: SOCIAL.whatsapp } },
];

export default function AccesPati() {
  const [billing, setBilling] = useState<"mensuel" | "annuel">("mensuel");
  const suffix = billing === "mensuel" ? "/ mois" : "/ an";

  return (
    <div className="bg-[#FFF6E7]">
      <section className="max-w-4xl mx-auto px-6 pt-12 text-center">
        <div className="inline-flex items-center gap-2 font-display font-semibold text-[#0F6E56] bg-[#FFC93C]/30 px-4 py-1.5 rounded-full mb-5"><Sparkles size={16} /> Abonnements PATI</div>
        <h1 className="text-3xl md:text-4xl text-[#0D2B1A] mb-3">Choisis ton accès</h1>
        <p className="text-[#3a4a42] font-semibold mb-6">PATI reste gratuit pour les enfants. Des formules élargies pour les familles, la diaspora et les écoles.</p>

        {/* Bandeau offre de lancement */}
        <div className="flex items-start gap-3 text-left bg-[#0F6E56] text-white rounded-2xl px-5 py-4 mb-7 max-w-2xl mx-auto">
          <Gift size={22} className="shrink-0 mt-0.5 text-[#FFC93C]" />
          <p className="text-sm font-semibold leading-relaxed">
            <span className="font-display">Offre de lancement.</span> L'essai Freemium est <span className="text-[#FFC93C]">gratuit en {TRIAL.periode}</span> et donne l'accès complet. Ensuite, place aux formules payantes.
          </p>
        </div>

        <div className="inline-flex items-center bg-white rounded-full p-1 shadow-kid mb-3">
          {(["mensuel", "annuel"] as const).map((b) => (
            <button key={b} onClick={() => setBilling(b)}
              className={`px-5 py-2 rounded-full text-sm font-display font-semibold transition ${billing === b ? "bg-[#0F6E56] text-white" : "text-[#5a6b62]"}`}>
              {b === "mensuel" ? "Mensuel" : "Annuel"}
              {b === "annuel" && <span className="ml-2 text-xs bg-[#FFC93C] text-[#0D2B1A] px-2 py-0.5 rounded-full">jusqu'à 3 mois offerts</span>}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIERS.map((tier) => (
            <div key={tier.t} className={`card-kid p-6 flex flex-col ${tier.price === "essai" ? "ring-4 ring-[#FFC93C]" : ""}`}>
              <span className="inline-block self-start text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ background: `${tier.color}22`, color: tier.color }}>{tier.badge}</span>
              <h3 className="font-display font-semibold text-[#0D2B1A] text-xl">{tier.t}</h3>
              <p className="text-sm text-[#5a6b62] font-semibold mb-3">{tier.sub}</p>

              {/* Prix */}
              <div className="mb-4 min-h-[3.2rem]">
                {tier.price === "essai" && (<><span className="font-display font-semibold text-[#0D2B1A] text-2xl">Gratuit</span><span className="block text-xs text-[#5a6b62] font-semibold">2 mois d'essai</span></>)}
                {tier.price === "devis" && (<><span className="font-display font-semibold text-[#0D2B1A] text-2xl">Sur devis</span><span className="block text-xs text-[#5a6b62] font-semibold">selon l'établissement</span></>)}
                {tier.price === "individuel" && (
                  <div className="space-y-1">
                    <div className="text-[#0D2B1A] font-semibold text-sm"><span className="text-[#5a6b62]">Guinée</span> · <span className="font-display text-base">{PRICING.individuel.guinee[billing]}</span> <span className="text-xs text-[#5a6b62]">{suffix}</span></div>
                    <div className="text-[#0D2B1A] font-semibold text-sm"><span className="text-[#5a6b62]">Diaspora</span> · <span className="font-display text-base">{PRICING.individuel.diaspora[billing]}</span> <span className="text-xs text-[#5a6b62]">{suffix}</span></div>
                  </div>
                )}
                {tier.price === "famille" && (<><span className="font-display font-semibold text-[#0D2B1A] text-2xl">{PRICING.famille[billing]}</span><span className="text-xs text-[#5a6b62] font-semibold ml-1">{suffix}</span></>)}
              </div>

              <div className="space-y-2 flex-1">
                {tier.pts.map((pt) => <div key={pt} className="flex items-start gap-2 text-sm text-[#3a4a42] font-semibold"><Check size={16} className="text-[#0F6E56] mt-0.5 shrink-0" />{pt}</div>)}
              </div>
              {tier.cta.href ? (
                <a href={tier.cta.href} target="_blank" rel="noopener noreferrer" className="btn-kid text-white justify-center mt-5 text-sm py-2.5" style={{ background: tier.color }}>{tier.cta.label}</a>
              ) : (
                <Link to={tier.cta.to!} className="btn-kid text-white justify-center mt-5 text-sm py-2.5" style={{ background: tier.color }}>{tier.cta.label}</Link>
              )}
            </div>
          ))}
        </div>
        <div id="achats" className="mt-12 bg-white rounded-[2rem] p-8 shadow-kid scroll-mt-24">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0F6E56]/10 flex items-center justify-center shrink-0"><ShoppingBag className="text-[#0F6E56]" size={24} /></div>
            <div>
              <h2 className="font-display font-semibold text-[#0D2B1A] text-xl mb-1">Achats — livres physiques</h2>
              <p className="text-[#5a6b62] font-semibold leading-relaxed mb-4 max-w-2xl">Envie de tenir l'histoire entre les mains&nbsp;? Tous les livres de la collection sont disponibles en version physique à <span className="text-[#0D2B1A] font-display">30 000 FG</span> l'unité. Commande et livraison via WhatsApp.</p>
              <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-kid bg-[#0F6E56] text-white"><ShoppingBag size={18} /> Commander un livre · 30 000 FG</a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-[#5a6b62] font-semibold mt-8">
          Une question sur les abonnements ?{" "}
          <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#0F6E56] underline">Écris-nous sur WhatsApp</a>.
        </p>
      </section>
    </div>
  );
}
