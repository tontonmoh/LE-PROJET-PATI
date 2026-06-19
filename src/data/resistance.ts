// Données de la série « RÉSISTANCE » (modèle calqué sur point-zero).
// Pati Passage (13-15). 6 épisodes — figures de la résistance guinéenne à la pénétration coloniale.
// COQUILLE : les 6 tomes sont en attente de texte ; titres/lieux/slugs à compléter à réception.
// La fiche-série /serie/resistance consomme cet objet.

export type RSTome = {
  numero: number;
  titre: string;
  sousTitre?: string;
  lieu?: string;
  statut: "live" | "soon";
  to?: string;
  cover?: string;
  coverLandscape?: string;
};

export const RESISTANCE = {
  id: "resistance",
  titre: "Résistance",
  accroche: "Ceux qui n'ont pas voulu plier.",
  intro:
    "Avant la colonie, des femmes et des hommes de toute la Guinée ont tenu tête à la pénétration coloniale — chacun à sa manière, sur sa terre, avec ses armes. Samory, Alpha Yaya, Dinah Salifou, Bocar Biro, Wali de Goumba, Kissi Kaba, Zegbela, Koko… Six récits pour des enfants d'aujourd'hui, sur le courage de dire non et le prix de la dignité.",
  cover: "/images/resistance/resistance-couverture.webp",
  accent: "#1B2A4A",
  tomes: [
    { numero: 1, titre: "Le roi dans la foule", sousTitre: "Dinah Salifou", lieu: "Rio Nunez · Paris 1889", statut: "live", to: "/livre/resistance-t1/lire", cover: "/images/resistance/resistance-t1-couverture.webp", coverLandscape: "/images/resistance/resistance-t1-couverture.webp" },
    { numero: 2, titre: "Les deux refus du Fouta", sousTitre: "Bôkar Biro · Alpha Yaya", lieu: "Fouta-Djallon", statut: "live", to: "/livre/resistance-t2/lire", cover: "/images/resistance/resistance-t2-couverture.webp", coverLandscape: "/images/resistance/resistance-t2-couverture.webp" },
    { numero: 3, titre: "La foi qui résiste", sousTitre: "Oumar Tall · Wali de Goumba", lieu: "Dinguiraye · Goumba", statut: "live", to: "/livre/resistance-t3/lire", cover: "/images/resistance/resistance-t3-couverture.webp", coverLandscape: "/images/resistance/resistance-t3-couverture.webp" },
    { numero: 4, titre: "La forêt", sousTitre: "Zégbéla · Kissi Kaba · Koko", lieu: "Guinée forestière", statut: "live", to: "/livre/resistance-t4/lire", cover: "/images/resistance/resistance-t4-couverture.webp", coverLandscape: "/images/resistance/resistance-t4-couverture.webp" },
    { numero: 5, titre: "Le dernier roi", sousTitre: "Samory Touré", lieu: "Wassoulou · Guélémou 1898", statut: "live", to: "/livre/resistance-t5/lire", cover: "/images/resistance/resistance-t5-couverture.webp", coverLandscape: "/images/resistance/resistance-t5-couverture.webp" },
    { numero: 6, titre: "Un seul NON", sousTitre: "1958 · la finale", lieu: "Guinée", statut: "live", to: "/livre/resistance-t6/lire", cover: "/images/resistance/resistance-t6-couverture.webp", coverLandscape: "/images/resistance/resistance-t6-couverture.webp" },
  ] as RSTome[],

  getLiveCount: function () {
    return this.tomes.filter((t) => t.statut === "live").length;
  },
  getTotalCount: function () {
    return this.tomes.length;
  },
};
