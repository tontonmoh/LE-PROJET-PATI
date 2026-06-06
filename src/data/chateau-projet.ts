// Contexte de création « Le projet » — affiché dans un onglet dédié sur la page du livre.
// Source : le livre « La Guinée — Château d'Eau » (pages Pourquoi/Comment, encadrement, Nos Talents Réunis).
// Éthique & transparence : processus participatif d'enfants, usage assumé de l'IA, bénéfices reversés.
export type ProjetSection = { title: string; paragraphs: string[] };
export type ProjetPersonne = { nom: string; role: string };
export type ProjetEnfant = { nom: string; ecole: string };
export type Projet = {
  title: string;
  intro: string[];
  sections: ProjetSection[];
  ethique: string[];
  encadrement: ProjetPersonne[];
  partenaires: string[];
  enfants: ProjetEnfant[];
};

const PROJETS: Record<string, Projet> = {
  "chateau-eau": {
    title: "Comment ce livre est né",
    intro: [
      "« La Guinée — Château d'Eau » n'est pas un livre comme les autres : il a été imaginé, écrit et illustré par des enfants.",
      "Le projet est né d'une idée commune de L'Atelier Solidaire et du Centre Culturel Franco-Guinéen (CCFG), dans la perspective des « 72 Heures du Livre » 2025, dont la ville invitée d'honneur était Guéckédou.",
    ],
    sections: [
      { title: "Un livre fait par des enfants", paragraphs: [
        "Trente enfants de différentes écoles de Conakry, publiques et privées, ont travaillé ensemble. Répartis en cinq équipes, ils ont écrit l'histoire et réalisé les dessins.",
        "Avant d'écrire, ils ont d'abord mené l'enquête : pourquoi l'eau est si importante en Guinée, ce pays aux milliers de rivières et à la pluie abondante.",
      ] },
      { title: "La transparence sur l'intelligence artificielle", paragraphs: [
        "Pour créer les images, les enfants ont appris à se servir de l'intelligence artificielle : comme si un ordinateur les aidait à dessiner ce qu'ils imaginaient. Ce choix est assumé, et expliqué dans le livre lui-même.",
        "Les organisateurs les ont ensuite aidés à mettre l'ensemble en ordre, pour que le livre soit beau et facile à lire.",
      ] },
      { title: "Un hommage à un héros réel", paragraphs: [
        "Au fil de leurs recherches, les enfants ont découvert l'histoire d'Ibrahima Tounkara, professeur de mathématiques-physique qui a construit un barrage hydroélectrique pour apporter la lumière à son village, Bolodou.",
        "Touchés par son parcours, ils ont décidé de lui rendre hommage en racontant son aventure : c'est le « ElectroMan » du livre.",
      ] },
    ],
    ethique: [
      "Tous les bénéfices du livre servent à acheter des fournitures scolaires pour des enfants de Guéckédou.",
      "Les enfants auteurs sont nommés et crédités ci-dessous, école par école — parce que ce livre est le leur.",
    ],
    encadrement: [
      { nom: "Mohamed Doumbouya", role: "Consultant en communication, fondateur de L'Atelier Solidaire" },
      { nom: "Kadiatou Kouboura Baldé", role: "Médiathécaire, responsable de l'espace jeunesse du Centre Culturel Franco-Guinéen" },
      { nom: "Salif Sylla", role: "Éducateur spécialiste de la petite enfance, administrateur d'Éducation en Question" },
    ],
    partenaires: [
      "République de Guinée",
      "L'Atelier Solidaire",
      "Centre Culturel Franco-Guinéen Sory Kandia Kouyaté",
      "Éducation en Question",
      "Lire pour apprendre — Ressources éducatives",
      "République Française & AFD",
      "Institut Français",
      "Heroes Coffee Guinée",
      "72 Heures du Livre (17ᵉ édition)",
    ],
    enfants: [
      { nom: "Makalé Keita", ecole: "E.P. Bonfi" },
      { nom: "Fatoumata Camara", ecole: "Federico Mayor" },
      { nom: "Kadiatou Bangoura", ecole: "Sainte Marie" },
      { nom: "Assiatou Diallo", ecole: "E.C.A.G" },
      { nom: "Aïcha Donzo", ecole: "Atlas" },
      { nom: "Ramatoulaye Barry", ecole: "Les Ruisseaux" },
      { nom: "Mariama", ecole: "Lucas Cissé (CDL Garderie)" },
      { nom: "Fanta Tounkara", ecole: "Hamdallaye Secondaire" },
      { nom: "Seydouba Doumbouya", ecole: "Aly Koumbassa" },
      { nom: "Ousmane F. Doumbouya", ecole: "Mamadi Touré" },
      { nom: "Alpha Boubacar Barry", ecole: "Hamdallaye Secondaire" },
      { nom: "Mamadou Abdoul Daff", ecole: "Mamadou Diakité" },
      { nom: "Cheick Abdel Kader Camara", ecole: "Federico Mayor" },
      { nom: "Mamadou Djoulde Barry", ecole: "Les Ruisseaux" },
      { nom: "Naby Bangoura", ecole: "E.P. Bonfi" },
      { nom: "Sory Binta Diallo", ecole: "Mamadou Diakité" },
      { nom: "Mabinty Alseny Camara", ecole: "Les Dabadins" },
      { nom: "Namina Camara", ecole: "Sainte Marie" },
      { nom: "Aïssata Noumou", ecole: "Lucas Cissé (CDL Garderie)" },
      { nom: "Fatoumata", ecole: "Lucas Cissé (CDL Garderie)" },
      { nom: "Ibrahima Sory Keita", ecole: "Paul Valéry" },
      { nom: "Mohamed Doumbouya", ecole: "Aly Koumbassa" },
      { nom: "Mohamed Mboum", ecole: "Roland Pré" },
      { nom: "Mamadou Saliou Diawara", ecole: "Sainte Marie" },
      { nom: "Mohamed Kaba Beavogui", ecole: "Paul Valéry" },
      { nom: "Mamadou Saliou Diallo", ecole: "Les Dabadins" },
      { nom: "Ibrahima Kebe", ecole: "Atlas" },
      { nom: "Mohamed Moba Doumbouya", ecole: "Aly Koumbassa" },
      { nom: "Aboubacar Doumbouya", ecole: "Aly Koumbassa" },
    ],
  },
};

export function getProjet(slug: string): Projet | undefined {
  return PROJETS[slug];
}
