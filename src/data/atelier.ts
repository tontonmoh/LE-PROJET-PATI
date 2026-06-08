// ============================================================================
// L'ATELIER — données éditables de la page "À propos / Les artisans de Pati"
// ----------------------------------------------------------------------------
// • Pour MODIFIER le manifeste : édite le tableau MANIFESTO ci-dessous.
// • Pour AJOUTER un artisan : ajoute un objet { name, role, line?, photo? }
//   dans le bon groupe de CATEGORIES.
// • Photos : dépose le fichier dans  public/atelier/  et mets le chemin
//   ex. photo: "/atelier/aminata.jpg". Sans photo, un monogramme s'affiche.
// • Pour retirer une catégorie : supprime son bloc dans CATEGORIES.
// ============================================================================

export type ManifestoBlock = {
  kind: "lead" | "pull" | "body" | "close";
  text: string;
};

export type Artisan = {
  name: string;
  role: string;
  line?: string;   // courte phrase (facultatif)
  photo?: string;  // chemin public, ex "/atelier/nom.jpg" (facultatif)
};

export type AtelierCategory = {
  id: string;
  label: string;
  icon: string;     // clé d'icône (voir ICONS dans Atelier.tsx)
  tagline: string;  // sous-titre court de la catégorie
  artisans: Artisan[];
};

// ----------------------------------------------------------------------------
// Le manifeste
// ----------------------------------------------------------------------------
export const MANIFESTO: ManifestoBlock[] = [
  {
    kind: "lead",
    text:
      "Il y a des histoires qu'on ne trouve dans aucun manuel. Elles vivent dans la voix d'une grand-mère, dans le rire d'une conteuse, dans la façon dont un nom passe d'une bouche à une oreille, le soir, quand la lumière baisse. Ces histoires-là sont un patrimoine — fragile, vivant, et qui ne tient qu'à un fil : celui de celles et ceux qui veulent bien les redire. Un fil ténu comme la corde d'une kora — et sur lequel s'invitent, sans prévenir, le bois clair d'un balafon, la peau tendue d'un djembé. Car chez nous, la mémoire ne se transmet jamais tout à fait sans rythme.",
  },
  { kind: "pull", text: "Pati est né pour tenir ce fil." },
  {
    kind: "body",
    text:
      "Derrière chaque page, il y a des mains. Des autrices et des auteurs qui écoutent avant d'écrire. Des illustratrices et des illustrateurs qui donnent vie à nos images — pour que la machine s'en inspire, et non l'inverse. Et des voix : celles qui prêtent leur souffle aux contes, en français, en soso, en pular, en maninkakan, en kisi, en kpèlèwoo et d'autres encore, pour qu'aucune langue ne s'éteigne faute d'être dite à un enfant.",
  },
  {
    kind: "body",
    text:
      "Nous croyons que l'imaginaire éduque. Qu'un enfant qui rêve sa terre la comprend mieux qu'un enfant à qui on la récite. Que la rigueur et la beauté ne sont réservées à personne — surtout pas à ceux qui sont nés ailleurs.",
  },
  {
    kind: "body",
    text:
      "Alors nous faisons une chose simple et exigeante : du contenu pensé, dessiné, raconté et fabriqué en Guinée — un vrai « Made in Guinea », à la hauteur de ce qui se fait de mieux dans le monde. Pour les enfants d'ici, qui méritent de se reconnaître. Pour les enfants d'ailleurs, qui méritent de nous connaître.",
  },
  {
    kind: "close",
    text:
      "L'Atelier, c'est cette porte ouverte. Entrez : vous y rencontrerez celles et ceux qui, conte après conte, dessin après dessin, portent notre mémoire à la lumière.",
  },
];

// ----------------------------------------------------------------------------
// Les artisans, par catégorie.
// Les entrées « À compléter » sont des emplacements à remplir (Moh).
// Kini Bangaly (voix) et Mohamed Doumbouya (direction) sont des exemples réels :
// adapte ou complète librement.
// ----------------------------------------------------------------------------
export const CATEGORIES: AtelierCategory[] = [
  {
    id: "rythmes",
    label: "Rythmes",
    icon: "Music",
    tagline: "Kora, balafon, djembé — le pouls de nos histoires.",
    artisans: [
      { name: "À compléter", role: "Kora" },
      { name: "À compléter", role: "Balafon & djembé" },
    ],
  },
  {
    id: "voix",
    label: "Voix",
    icon: "Mic",
    tagline: "Celles et ceux qui prêtent leur souffle aux contes.",
    artisans: [
      {
        name: "Kini Bangaly",
        role: "Conteur en soso",
        line: "Prête sa voix aux contes de la basse côte.",
      },
      { name: "À compléter", role: "Voix française" },
    ],
  },
  {
    id: "textes",
    label: "Textes",
    icon: "Feather",
    tagline: "Celles et ceux qui écoutent avant d'écrire.",
    artisans: [
      { name: "À compléter", role: "Autrice" },
      { name: "À compléter", role: "Auteur" },
    ],
  },
  {
    id: "image",
    label: "Image",
    icon: "Palette",
    tagline: "Illustration, couleur, mise en pages.",
    artisans: [
      { name: "À compléter", role: "Illustratrice" },
      { name: "À compléter", role: "Illustrateur" },
    ],
  },
  {
    id: "technique",
    label: "Technique",
    icon: "SlidersHorizontal",
    tagline: "Prise de son, infographie, montage vidéo.",
    artisans: [
      { name: "À compléter", role: "Prise de son" },
      { name: "À compléter", role: "Infographie" },
      { name: "À compléter", role: "Montage vidéo" },
    ],
  },
  {
    id: "traduction",
    label: "Traduction & langues",
    icon: "Languages",
    tagline: "Pour qu'aucune langue ne reste à la porte.",
    artisans: [
      { name: "À compléter", role: "Anglais" },
      { name: "À compléter", role: "Arabe" },
      { name: "À compléter", role: "Chinois" },
    ],
  },
  {
    id: "pedagogie",
    label: "Pédagogie",
    icon: "GraduationCap",
    tagline: "Livrets, ateliers, Clubs Pati.",
    artisans: [
      { name: "À compléter", role: "Conseil pédagogique" },
    ],
  },
  {
    id: "direction",
    label: "Direction",
    icon: "Compass",
    tagline: "Tenir le cap, de la première idée à la dernière page.",
    artisans: [
      {
        name: "Mohamed Doumbouya",
        role: "Fondateur & direction éditoriale",
        line: "Tient le fil, du premier conte à la dernière page.",
      },
    ],
  },
];
