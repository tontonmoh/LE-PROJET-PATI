// =====================================================================
//  CATALOGUE PATI — données éditables
//  Pour ajouter / modifier un livre, édite simplement ce tableau.
//  Les fichiers (couvertures, PDF, audio) vivent dans /public.
// =====================================================================

export type Book = {
  slug: string; // identifiant d'URL : /livre/<slug>
  title: string;
  description: string;
  cover: string; // chemin de la couverture dans /public
  pdf?: string; // PDF du livre dans /public
  audio?: string; // extrait audio dans /public
  kora?: string; // boucle kora (ambiance lecture)
  languages?: { label: string; pdf: string }[];
  teaser?: string; // URL YouTube du teaser
  keywords: string[];
  band?: "Mômes" | "Découverte" | "Aventure" | "Passage";
  comingSoon?: boolean;
};

export const BOOKS: Book[] = [
  {
    slug: "rever-plus-grand",
    band: "Passage",
    title: "Rêver plus grand que mon père",
    description: "L'histoire de Sidy, fils de boulanger",
    cover: "/images/rever-couverture.webp",
    keywords: ["Linsan", "boulanger", "rêve", "entrepreneuriat", "transmission", "Pati Passage"],
  },
  {
    slug: "kaback",
    band: "Passage",
    title: "Kaback",
    description: "Les enfants protègent le plus beau des soleils",
    cover: "/images/kaback-couverture.webp",
    keywords: ["Kaback", "mangrove", "rizières", "digue", "littoral", "climat", "Pati Passage"],
  },
  {
    slug: "bossou",
    band: "Aventure",
    title: "Le Peuple de Bossou",
    description: "Les enfants découvrent les chimpanzés de Bossou",
    cover: "/images/bossou-couverture.webp",
    keywords: ["Nimba", "Bossou", "chimpanzés", "biodiversité", "Wontanara", "Koséin", "Pati Aventure"],
  },
  {
    slug: "corridorium",
    band: "Passage",
    title: "Le Corridorium",
    description: "Les enfants découvrent Simandou",
    cover: "/images/corridorium-couverture.webp",
    keywords: ["Simandou", "Beyla", "fer", "corridor", "2040", "souveraineté", "Pati Passage"],
  },
  {
    slug: "conakry-belle-propre",
    band: "Passage",
    title: "Conakry Belle et Propre",
    description: "Les enfants décident d'agir",
    cover: "/images/conakry-couverture.webp",
    keywords: ["Conakry", "assainissement", "salubrité", "citoyenneté", "responsabilité", "BD", "Passage"],
  },
  {
    slug: "binta-diallo",
    audio: "/audio/binta.mp3",
    kora: "/audio/kora-binta.mp3",
    band: "Découverte",
    title: "Binta Diallo — La Dame Oiseau",
    description: "Les enfants découvrent une pionnière de l'aviation",
    cover: "/images/binta-couverture.png",
    teaser: "https://youtu.be/AtiSgIEainM",
    keywords: ["binta", "diallo", "pilote", "helicoptere", "aviation", "femme", "heroine", "oiseau", "fouta", "labe"],
  },
  {
    slug: "sacree-dmba",
    band: "Découverte",
    title: "Sacrée D'mba",
    description: "Les enfants découvrent le Nimba de Guinée",
    cover: "/images/couverture_nimba.jpg",
    keywords: ["dmba", "nimba", "masque", "baga", "musee", "samori", "fifi", "amadou", "boké", "culture"],
  },
  {
    slug: "chateau-eau",
    band: "Découverte",
    title: "Le Château d'Eau",
    description: "Les enfants découvrent comment Ibrahima Tounkara a fait de l'électricité à partir d'une rivière",
    cover: "/images/couverture_chateau.jpg",
    keywords: ["chateau", "eau", "niani", "tounkara", "elhadj", "nabaya", "kouroussa", "puits", "eau potable"],
  },
  {
    slug: "laye-kouroussa",
    band: "Aventure",
    title: "Laye Kouroussa",
    description: "Les enfants découvrent l'enfance d'une légende de la littérature",
    cover: "/images/couverture_laye.jpg",
    keywords: ["laye", "kouroussa", "keita", "griot", "mandinka", "haute guinee", "kankan", "musique"],
  },
  {
    slug: "empereur-enfant",
    band: "Aventure",
    title: "L'Empereur et l'Enfant",
    description: "Les enfants découvrent le roi Bakary de Niani, au-delà de l'Atlantique",
    cover: "/images/couverture_empereur.jpg",
    keywords: ["samori", "touré", "empereur", "wassoulou", "guerrier", "beyla", "mandinka", "histoire"],
  },
  {
    slug: "tresor-terres",
    band: "Aventure",
    title: "Trésor des Terres Rouges",
    description: "Les enfants découvrent l'agriculture et la ferme",
    cover: "/images/couverture_tresor.jpg",
    keywords: ["tresor", "terres rouges", "boffa", "dubréka", "coyah", "maritime", "peche", "baga"],
  },
  {
    slug: "sauver-milo",
    band: "Passage",
    title: "Sauver Milo",
    description: "Les enfants découvrent Kankan, la Mamaya et le Milo",
    cover: "/images/couverture_milo.jpg",
    keywords: ["milo", "delta", "cigare", "kankan", "nature", "ecologie", "riviere"],
  },
];

export const getBook = (slug: string) => BOOKS.find((b) => b.slug === slug);
