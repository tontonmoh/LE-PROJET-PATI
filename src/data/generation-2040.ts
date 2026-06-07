// Série « Génération 2040 » — données de la page-série /serie/generation-2040.
// Une école-ville par tome, un Objectif de développement durable, ancré dans Simandou 2040.
// Tomes 0, 1 et 2 en ligne ; les suivants à paraître. Titres connus : Tome 1 (Lola), Tome 2 (Guéckédou), Tome 4 (Fouta).
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
    { numero: 3, statut: "soon" },
    { numero: 4, statut: "soon", titre: "Le Pays des Sources", lieu: "Fouta" },
    { numero: 5, statut: "soon" },
    { numero: 6, statut: "soon" },
    { numero: 7, statut: "soon" },
    { numero: 8, statut: "soon" },
    { numero: 9, statut: "soon" },
    { numero: 10, statut: "soon" },
    { numero: 11, statut: "soon" },
  ] as G2040Tome[],
};
