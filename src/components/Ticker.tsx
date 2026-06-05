import { Link } from "react-router-dom";
import { Gift, BookMarked, Compass, Trophy, Star, Puzzle } from "lucide-react";
import { SOCIAL } from "../data/site";

// Messages du bandeau — éditable ici. `to` = lien interne, `href` = lien externe.
const ITEMS: { icon: any; text: string; to?: string; href?: string }[] = [
  { icon: Gift, text: "Profitez de 2 mois gratuits sur PATI — juin & juillet 2026", to: "/abonnement" },
  { icon: BookMarked, text: "Commandez les livres physiques — 30 000 FG", to: "/abonnement" },
  { icon: Compass, text: "Réservez votre test de connaissance de soi & orientation", to: "/decouvrir-son-genie" },
  { icon: Trophy, text: "Un Club PATI dans votre école ?", to: "/clubs" },
  { icon: Star, text: "Découvrez Binta Diallo, la Dame Oiseau", to: "/binta-diallo" },
  { icon: Gift, text: "Offre spéciale : un livre ou un dessin animé sur votre famille — sur devis", to: "/personnalisation" },
  { icon: Puzzle, text: "Relève Le Défi PATI : reconstitue la carte de la Guinée", to: "/defi" },
];

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <div className="ticker-group" aria-hidden={hidden}>
      {ITEMS.map((it, k) => {
        const inner = (<><it.icon size={15} /> {it.text}</>);
        return (
          <span key={k} className="ticker-cell">
            {it.href ? (
              <a className="ticker-item" href={it.href} target="_blank" rel="noopener noreferrer">{inner}</a>
            ) : (
              <Link className="ticker-item" to={it.to!}>{inner}</Link>
            )}
            <span className="ticker-sep">•</span>
          </span>
        );
      })}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="ticker" role="region" aria-label="Annonces PATI">
      <div className="ticker-track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
