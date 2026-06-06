// Contexte de création « Le projet » — affiché dans un onglet dédié sur la page du livre.
// Source : le livre « La Guinée — Château d'Eau » (pages Pourquoi/Comment, encadrement, Nos Talents Réunis).
// Éthique & transparence : processus participatif d'enfants, usage assumé de l'IA, bénéfices reversés.
export type ProjetSection = { title: string; paragraphs: string[] };
export type ProjetPersonne = { nom: string; role: string; photo?: string };
export type ProjetEnfant = { nom: string; ecole: string };
export type Projet = {
  title: string;
  intro: string[];
  sections: ProjetSection[];
  hommage?: { titre: string; memoriam: string; oeuvre: string[]; chiffres?: { v: string; l: string }[]; photos: { img: string; legende: string }[]; sources?: { label: string; url: string }[] };
  ethique: string[];
  encadrement: ProjetPersonne[];
  partenaires: { nom: string; logo?: string }[];
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
    hommage: {
      titre: "En mémoire d'Ibrahima Tounkara",
      memoriam: "Ibrahima Tounkara nous a quittés en janvier 2026. Ce livre, né de l'admiration des enfants, perpétue sa mémoire et son exemple.",
      oeuvre: [
        "Professeur de mathématiques originaire de Bolodou, un village du sud de la Guinée à environ 65 km de Guéckédou, Ibrahima Tounkara a fait entrer la lumière chez lui par sa seule volonté.",
        "Il ne connaissait rien aux barrages : il s'est formé seul. En mars 2016, il achète un smartphone pour étudier en ligne le fonctionnement des centrales ; fin 2016, il se lance. À partir de schémas et de vidéos, il fabrique une turbine reliée par une poulie à une dynamo, et bâtit un micro-barrage sur le marigot Gbasso.",
        "En mai 2017, après un an de recherches et de travaux financés sur ses propres économies (environ 50 millions de francs guinéens), la centrale fonctionne. Près de 90 des quelque 94 foyers du village ont alors l'électricité 24 h/24 — là où l'on s'éclairait jusque-là à la lampe à pile.",
        "Pour l'entretien, il forme un jeune du village, rémunéré par une contribution hebdomadaire modique des habitants — bien moins chère que les piles ou le pétrole. Son ambition : augmenter la puissance pour électrifier les villages voisins.",
      ],
      chiffres: [
        { v: "2017", l: "mise en service" },
        { v: "≈ 9 kW", l: "puissance de la centrale" },
        { v: "≈ 90", l: "foyers éclairés 24 h/24" },
        { v: "Seul", l: "conçu et financé par lui-même" },
      ],
      photos: [
        { img: "/images/projet/ibrahima-portrait.webp", legende: "Ibrahima Tounkara, distingué pour son innovation." },
        { img: "/images/projet/ibrahima-terrain.webp", legende: "Devant l'ouvrage qu'il a bâti, à Bolodou." },
        { img: "/images/projet/gbasso.webp", legende: "Le marigot Gbasso, le cours d'eau de l'histoire." },
        { img: "/images/projet/canal.webp", legende: "Le canal d'amenée de son barrage." },
      ],
      sources: [
        { label: "France 24 — Les Observateurs (2017)", url: "https://observers.france24.com/fr/20170915-guinee-professeur-maths-electrifie-tout-seul-son-village-natal" },
      ],
    },
    encadrement: [
      { nom: "Mohamed Doumbouya", role: "Consultant en communication, fondateur de L'Atelier Solidaire", photo: "/images/projet/sup-doumbouya.webp" },
      { nom: "Kadiatou Kouboura Baldé", role: "Médiathécaire, responsable de l'espace jeunesse du Centre Culturel Franco-Guinéen", photo: "/images/projet/sup-balde.webp" },
      { nom: "Salif Sylla", role: "Éducateur spécialiste de la petite enfance, administrateur d'Éducation en Question", photo: "/images/projet/sup-sylla.webp" },
    ],
    partenaires: [
      { nom: "République de Guinée", logo: "/images/projet/logo-guinee-armoiries.webp" },
      { nom: "L'Atelier Solidaire", logo: "/images/projet/logo-atelier-solidaire.webp" },
      { nom: "Centre Culturel Franco-Guinéen Sory Kandia Kouyaté", logo: "/images/projet/logo-ccfg.webp" },
      { nom: "Éducation en Question", logo: "/images/projet/logo-eduq.webp" },
      { nom: "Lire pour apprendre — Ressources éducatives", logo: "/images/projet/logo-ressources-educatives.webp" },
      { nom: "République Française & AFD", logo: "/images/projet/logo-rf-afd.webp" },
      { nom: "Institut Français", logo: "/images/projet/logo-institut-francais.webp" },
      { nom: "Heroes Coffee Guinée", logo: "/images/projet/logo-heroes-coffee.webp" },
      { nom: "72 Heures du Livre (17ᵉ édition)", logo: "/images/projet/logo-72h.webp" },
      { nom: "Guinée", logo: "/images/projet/logo-guinee.webp" },
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
