// Données de la série « KOUMANTHIO, ENFANT DE TROUPE » (modèle calqué sur point-zero).
// La fiche-série /serie/koumanthio consomme cet objet.
// Tome 1 en ligne ; les suivants = cartes-gabarit (aucune image à générer).

export type KMTome = {
  numero: number;
  titre: string;
  sousTitre?: string;
  lieu?: string;
  statut: "live" | "soon";
  to?: string;
  cover?: string;
  coverLandscape?: string;
};

export const KOUMANTHIO = {
  id: "koumanthio",
  titre: "Koumanthio, enfant de troupe",
  accroche: "Un grand nom, c'est un dos qu'on tient droit.",
  intro:
    "Koumanthio Diallo a grandi à Labé, dans la brume du Fouta, élevée par Pati, sa très vieille grand-mère. Première au CEPE, elle descend à Conakry passer le test du Prytanée — le Camp Alpha Yaya Diallo, qui porte le nom de son aïeul, le roi qui n'a pas voulu plier. Elle porte ce nom comme un secret. Tome après tome, loin des collines, elle apprend que le respect ne se réclame pas : il se gagne, le dos droit, et en silence.",
  cover: "/images/koumanthio/koumanthio-serie-hero.webp",
  accent: "#2E4A6B",
  tomes: [
    { numero: 1, titre: "L'arrivée", sousTitre: "Le Prytanée", lieu: "Labé · Conakry", statut: "live", to: "/livre/koumanthio-t1/lire", cover: "/images/koumanthio/koumanthio-t1-couverture.webp", coverLandscape: "/images/koumanthio/koumanthio-t1-couverture.webp" },
    { numero: 2, titre: "L'épreuve", sousTitre: "L'année qui forge", lieu: "Camp Alpha Yaya Diallo", statut: "soon" },
    { numero: 3, titre: "Le secret de Pati", sousTitre: "Ce qu'on ouvre un jour", lieu: "Conakry · Labé", statut: "soon" },
  ] as KMTome[],

  // Helpers pour le comptage
  getLiveCount: function () {
    return this.tomes.filter((t) => t.statut === "live").length;
  },
  getTotalCount: function () {
    return this.tomes.length;
  },
};
