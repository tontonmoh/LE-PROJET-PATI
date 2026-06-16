// Données de la série « LE POINT ZÉRO » (modèle calqué sur generation-2040).
// La fiche-série /serie/point-zero consomme cet objet.
// Tome 0 en ligne ; les suivants = cartes-gabarit (aucune image à générer).

export type PZTome = {
  numero: number;
  titre: string;
  sousTitre?: string;  // la direction/coin du monde
  lieu?: string;
  statut: "live" | "soon";
  to?: string;         // route de lecture si live
  cover?: string;      // couverture si live (portrait, avec titre)
  coverLandscape?: string; // couverture paysage (sans titre) pour la grille de la fiche
};

export const POINT_ZERO = {
  id: "point-zero",
  titre: "Le Point Zéro",
  accroche: "Là d'où tout part.",
  intro:
    "Il existe sur la Terre un point d'où l'on a mesuré le monde entier : le point zéro, posé sur la mer, au large de la Guinée. C'est là qu'est tombé le cœur d'une étoile-femme, Guínée, brisée par amour en mille éclats aux quatre coins du monde. Tome après tome, Djènè et Bangaly suivent les éclats — pour comprendre d'où vient le nom écrit partout sur la Terre.",
  cover: "/images/point-zero/point-zero-serie-hero.webp",
  accent: "#1A2A4A",
  tomes: [
    { numero: 0, titre: "La nuit où l'étoile se donna", sousTitre: "Le point zéro", lieu: "Kassa · phare de Tamara", statut: "live", to: "/livre/point-zero-t0/lire", cover: "/images/point-zero/point-zero-t0-couverture.webp", coverLandscape: "/images/point-zero/point-zero-t0-couverture.webp" },
    { numero: 1, titre: "La sœur voisine", sousTitre: "Le nord", lieu: "Bijagós · Guinée-Bissau", statut: "live", to: "/livre/point-zero-t1/lire", cover: "/images/point-zero/point-zero-t1-couverture.webp", coverLandscape: "/images/point-zero/point-zero-t1-couverture.webp" },
    { numero: 2, titre: "L'éclat du même golfe", sousTitre: "Le sud", lieu: "Malabo · Guinée équatoriale", statut: "live", to: "/livre/point-zero-t2/lire", cover: "/images/point-zero/point-zero-t2-couverture.webp", coverLandscape: "/images/point-zero/point-zero-t2-couverture.webp" },
    { numero: 3, titre: "L'éclat du bout du monde", sousTitre: "L'est extrême", lieu: "île du Pacifique", statut: "live", to: "/livre/point-zero-t3/lire", cover: "/images/point-zero/point-zero-t3-couverture.webp", coverLandscape: "/images/point-zero/point-zero-t3-couverture.webp" },
    { numero: 4, titre: "L'éclat voisin", sousTitre: "Le nord", lieu: "Bissau · Guinée-Bissau", statut: "soon" },
    { numero: 5, titre: "L'éclat changé en or", sousTitre: "L'or", lieu: "Bouré · Niani · Londres", statut: "soon" },
    { numero: 6, titre: "Le cœur enfoui", sousTitre: "Le retour", lieu: "Guinée · Simandou", statut: "soon" },
  ] as PZTome[],
  
  // Helpers pour le comptage
  getLiveCount: function() {
    return this.tomes.filter(t => t.statut === "live").length;
  },
  getTotalCount: function() {
    return this.tomes.length;
  },
};
