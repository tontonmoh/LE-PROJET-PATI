import { PREFECTURES, REGION_COLORS, MAP_VIEWBOX } from "../data/guinee-map";

// Carte de Guinée : une préfecture se colore (couleur de sa région) quand l'enfant
// l'a correctement placée dans le Défi ; sinon elle reste en gris clair.
// `discovered` = ensemble des NOMS de préfectures trouvées (ex: new Set(["Conakry","Boké"])).
export default function GuineeMap({
  discovered,
  className = "",
}: {
  discovered: Set<string>;
  className?: string;
}) {
  return (
    <svg
      viewBox={MAP_VIEWBOX}
      className={className}
      style={{ width: "100%", height: "auto", display: "block" }}
      role="img"
      aria-label="Carte de Guinée des préfectures découvertes"
    >
      {PREFECTURES.map((p) => {
        const found = discovered.has(p.name);
        return (
          <path
            key={p.name}
            d={p.d}
            fill={found ? REGION_COLORS[p.region] || "#FFC93C" : "#E4E1D5"}
            stroke="#FFF6E7"
            strokeWidth={1.4}
            strokeLinejoin="round"
            style={{ transition: "fill .4s ease" }}
          />
        );
      })}
    </svg>
  );
}
