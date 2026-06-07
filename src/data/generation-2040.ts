// Série « Génération 2040 » — données de la page-série /serie/generation-2040.
// Une école-ville par tome, un Objectif de développement durable, ancré dans Simandou 2040.
// Tomes 0 à 8 en ligne ; les suivants à paraître. Titres connus : T1 Lola, T2 Guéckédou, T3 Kissidougou, T4 Kouroussa, T5 Dabola, T6 Dalaba, T7 Mali, T8 Télimélé.
export type G2040Tome = {
  numero: number;
  statut: "live" | "soon";
  titre?: string;
  lieu?: string;
  odd?: number[];
  to?: string;
  cover?: string; // couverture du tome (tomes parus)
};

export const G2040 = {
  slug: "generation-2040",
  titre: "Génération 2040",
  accroche: "Une école, une ville, un Objectif. La génération qui apprend — puis raconte — la Guinée de demain.",
  intro:
    "Un grand concours national des écoles, lancé par la Simandou Academy : dans chaque ville, une classe s'approprie un Objectif de développement durable et le raconte, ancré dans le Programme Simandou 2040. Douze écoles, douze villes, douze histoires.",
  cover: "/images/g2040-tome0-couverture.webp",
  accent: "#18402A",
  tomes: [
    { numero: 0, statut: "live", titre: "Le changement commence à l'école", lieu: "Boffa", odd: [4], to: "/livre/g2040-tome0/lire", cover: "/images/g2040-tome0-couverture.webp" },
    { numero: 1, statut: "live", titre: "La Forêt et le Fer", lieu: "Lola", odd: [15, 9], to: "/livre/g2040-foret-et-fer/lire", cover: "/images/g2040-tome1-couverture.webp" },
    { numero: 2, statut: "live", titre: "Makona, un fleuve qui relie", lieu: "Guéckédou", odd: [8, 17], to: "/livre/g2040-makona/lire", cover: "/images/g2040-tome2-couverture.webp" },
    { numero: 3, statut: "live", titre: "La Plaine de riz", lieu: "Kissidougou", odd: [2, 12], to: "/livre/g2040-plaine-de-riz/lire", cover: "/images/g2040-tome3-couverture.webp" },
    { numero: 4, statut: "live", titre: "Le Tambour et le Livre", lieu: "Kouroussa", odd: [4, 11], to: "/livre/g2040-tambour-et-livre/lire", cover: "/images/g2040-tome5-couverture.webp" },
    { numero: 5, statut: "live", titre: "La Graine et l'Huile", lieu: "Dabola", odd: [9, 12], to: "/livre/g2040-graine-et-huile/lire", cover: "/images/g2040-tome4-couverture.webp" },
    { numero: 6, statut: "live", titre: "Les Montagnes et les Sources", lieu: "Dalaba", odd: [6, 13, 15], to: "/livre/g2040-montagnes-et-sources/lire", cover: "/images/g2040-tome6-couverture.webp" },
    { numero: 7, statut: "live", titre: "La Dame qui veille", lieu: "Mali", odd: [9, 11], to: "/livre/g2040-dame-qui-veille/lire", cover: "/images/g2040-tome7-couverture.webp" },
    { numero: 8, statut: "live", titre: "L'Arbre et le Fleuve", lieu: "Télimélé", odd: [7, 9], to: "/livre/g2040-arbre-et-fleuve/lire", cover: "/images/g2040-tome8-couverture.webp" },
    { numero: 9, statut: "soon" },
    { numero: 10, statut: "soon" },
    { numero: 11, statut: "soon" },
  ] as G2040Tome[],
};
