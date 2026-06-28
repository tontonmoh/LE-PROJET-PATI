/**
 * QCM SENAG — 25 questions pour la mémoire
 * 5 manches : Définitions / Figures patrimoniales / Pionniers / 28.09.1958 / SENAG
 * Conçu pour animation publique et défi collectif SENAG (Plage Camayenne, juin 2026)
 */

export type QuizOptionId = 'A' | 'B' | 'C' | 'D';

export type QuizSection =
  | 'definitions'
  | 'figures'
  | 'pionniers'
  | 'independance'
  | 'senag';

export type QuizOption = {
  id: QuizOptionId;
  text: string;
};

export type QuizQuestion = {
  id: number;
  section: QuizSection;
  question: string;
  options: QuizOption[];
  correctId: QuizOptionId;
  commentary: string;
};

export const SECTION_LABELS: Record<QuizSection, string> = {
  definitions: "Qu'est-ce qu'une archive ?",
  figures: 'Le Mur de la Mémoire — Figures patrimoniales',
  pionniers: "Pionniers et Pionnières de l'Indépendance",
  independance: 'Le NON, l\u2019Indépendance et les Compagnons',
  senag: 'La SENAG 2026',
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ─── MANCHE 1 — DÉFINITIONS ───
  {
    id: 1,
    section: 'definitions',
    question: "Une archive, c'est avant tout :",
    options: [
      { id: 'A', text: 'Un document ancien et poussiéreux' },
      {
        id: 'B',
        text: "Un document produit ou reçu par une personne ou une institution dans l'exercice de son activité, conservé pour sa valeur de preuve ou de mémoire",
      },
      { id: 'C', text: 'Un livre imprimé en plusieurs exemplaires' },
      { id: 'D', text: 'Une œuvre d\u2019art exposée' },
    ],
    correctId: 'B',
    commentary:
      "Une archive n'est pas vieille par essence — un email envoyé ce matin par un ministère est déjà une archive en devenir.",
  },
  {
    id: 2,
    section: 'definitions',
    question: 'Les archives audiovisuelles regroupent :',
    options: [
      { id: 'A', text: 'Uniquement les films de cinéma' },
      { id: 'B', text: 'Les enregistrements sonores, photographies, films et vidéos' },
      { id: 'C', text: 'Les peintures et les sculptures' },
      { id: 'D', text: 'Les manuscrits illustrés' },
    ],
    correctId: 'B',
    commentary:
      "Tout ce qui se voit ou s'écoute. La SENAG est centrée sur ce volet — « Apprendre notre histoire à travers nos archives audiovisuelles ».",
  },
  {
    id: 3,
    section: 'definitions',
    question: "Une archive numérique, c'est :",
    options: [
      { id: 'A', text: 'Toute archive papier qui a été scannée' },
      {
        id: 'B',
        text: 'Un document nativement créé sous forme électronique, ou numérisé pour conservation et diffusion',
      },
      { id: 'C', text: 'Une copie sur clé USB ou disque dur' },
      { id: 'D', text: 'Une photo prise au téléphone' },
    ],
    correctId: 'B',
    commentary:
      'La numérisation ne garantit pas la conservation — il faut aussi des formats pérennes, des copies de sauvegarde, et des métadonnées.',
  },
  {
    id: 4,
    section: 'definitions',
    question: 'Les archives administratives sont :',
    options: [
      {
        id: 'A',
        text: 'Les documents produits ou reçus par les administrations dans l\u2019exercice de leurs missions',
      },
      { id: 'B', text: 'Uniquement les arrêtés et décrets' },
      { id: 'C', text: 'Uniquement les bulletins de paie' },
      { id: 'D', text: 'Les correspondances privées des ministres' },
    ],
    correctId: 'A',
    commentary:
      "C'est l'immense majorité du volume conservé — rapports, comptes-rendus, courriers, dossiers.",
  },
  {
    id: 5,
    section: 'definitions',
    question: "Le rôle premier des Archives nationales d'un pays est de :",
    options: [
      { id: 'A', text: 'Vendre des documents anciens aux collectionneurs' },
      {
        id: 'B',
        text: "Collecter, classer, conserver et communiquer les archives publiques de l'État, pour la mémoire et la preuve",
      },
      { id: 'C', text: 'Imprimer les manuels scolaires' },
      { id: 'D', text: 'Organiser les concours administratifs' },
    ],
    correctId: 'B',
    commentary:
      'Les quatre verbes — collecter, classer, conserver, communiquer. Aucun ne vaut sans les trois autres.',
  },

  // ─── MANCHE 2 — FIGURES PATRIMONIALES ───
  {
    id: 6,
    section: 'figures',
    question:
      "Fondateur de l'Empire du Mali au XIIIᵉ siècle, célébré dans la Charte du Mandén :",
    options: [
      { id: 'A', text: 'Samory Touré' },
      { id: 'B', text: 'Soundiata Keïta' },
      { id: 'C', text: 'Alfa Yaya Diallo' },
      { id: 'D', text: 'Sékou Touré' },
    ],
    correctId: 'B',
    commentary:
      "Soundiata — le héros du Mandén, dont la Charte de Kurukan Fuga, en 1236, est l'une des plus anciennes constitutions orales du monde.",
  },
  {
    id: 7,
    section: 'figures',
    question:
      'Empereur du Wassoulou, grand résistant à la pénétration coloniale française, capturé en 1898 :',
    options: [
      { id: 'A', text: 'Soundiata Keïta' },
      { id: 'B', text: 'Almamy Samory Touré' },
      { id: 'C', text: 'Alfa Yaya Diallo' },
      { id: 'D', text: 'Bokar Biro' },
    ],
    correctId: 'B',
    commentary:
      "Samory a tenu tête à la France pendant près de vingt ans avant d'être déporté au Gabon.",
  },
  {
    id: 8,
    section: 'figures',
    question:
      'Roi du Labé déporté par les Français vers le Dahomey puis la Mauritanie au début du XXᵉ siècle :',
    options: [
      { id: 'A', text: 'Alfa Yaya Diallo' },
      { id: 'B', text: 'Karamoko Alfa' },
      { id: 'C', text: 'Bokar Biro' },
      { id: 'D', text: 'Tierno Souleymane Baal' },
    ],
    correctId: 'A',
    commentary:
      "Alfa Yaya — symbole de la résistance peule du Fouta-Djalon contre l'occupation.",
  },
  {
    id: 9,
    section: 'figures',
    question:
      "Militante du PDG-RDA, tuée enceinte par un chef de canton en 1955, érigée en martyre de l'indépendance :",
    options: [
      { id: 'A', text: 'Loffo Camara' },
      { id: 'B', text: "M'Balia Camara" },
      { id: 'C', text: 'Mafory Bangoura' },
      { id: 'D', text: 'Jeanne Martin Cissé' },
    ],
    correctId: 'B',
    commentary:
      "M'Balia Camara — son nom est gravé dans toutes les écoles. Sa mort a galvanisé la mobilisation pour le NON de 1958.",
  },
  {
    id: 10,
    section: 'figures',
    question:
      "Auteur du roman « L'Enfant noir », écrivain guinéen né à Kouroussa :",
    options: [
      { id: 'A', text: 'Djibril Tamsir Niane' },
      { id: 'B', text: 'Camara Laye' },
      { id: 'C', text: 'Tierno Monénembo' },
      { id: 'D', text: 'Williams Sassine' },
    ],
    correctId: 'B',
    commentary:
      'Camara Laye — première grande voix littéraire africaine traduite dans le monde, dès 1953.',
  },
  {
    id: 11,
    section: 'figures',
    question:
      "« Le griot électrique », chanteur et joueur de kora mondialement connu pour le tube « Yéké Yéké » :",
    options: [
      { id: 'A', text: 'Sékou Bembeya Diabaté' },
      { id: 'B', text: 'Mory Kanté' },
      { id: 'C', text: 'Kerfala Kanté' },
      { id: 'D', text: 'Sory Kandia Kouyaté' },
    ],
    correctId: 'B',
    commentary:
      "Mory Kanté — il a fait danser la planète entière à la fin des années 80 et reste l'un de nos ambassadeurs culturels les plus puissants.",
  },
  {
    id: 12,
    section: 'figures',
    question:
      "Attaquant emblématique du Hafia FC, Ballon d'Or africain 1972 :",
    options: [
      { id: 'A', text: 'Petit Sory' },
      { id: 'B', text: 'Chérif Souleymane' },
      { id: 'C', text: 'Naby Keïta' },
      { id: 'D', text: 'Pascal Feindouno' },
    ],
    correctId: 'B',
    commentary:
      "Le Syli national des trois titres africains du Hafia — Ballon d'Or en 1972, en plein âge d'or de notre football.",
  },
  {
    id: 13,
    section: 'figures',
    question: 'Au Mur de la Mémoire, « les Amazones » désigne :',
    options: [
      { id: 'A', text: 'Une équipe féminine de basket' },
      {
        id: 'B',
        text: 'Un orchestre féminin de la Gendarmerie nationale, pionnier en Afrique',
      },
      { id: 'C', text: 'Les gardes royales du Dahomey' },
      { id: 'D', text: 'Une brigade militaire féminine' },
    ],
    correctId: 'B',
    commentary:
      "Les Amazones de Guinée — l'un des tout premiers orchestres entièrement féminins du continent, fierté nationale.",
  },

  // ─── MANCHE 3 — PIONNIERS ───
  {
    id: 14,
    section: 'pionniers',
    question:
      "Premier Secrétaire général de l'Organisation de l'Unité Africaine (OUA), de 1964 à 1972 :",
    options: [
      { id: 'A', text: 'Saïfoulaye Diallo' },
      { id: 'B', text: 'Diallo Telli (Boubacar Telli Diallo)' },
      { id: 'C', text: 'Lansana Béavogui' },
      { id: 'D', text: 'Habib Tall' },
    ],
    correctId: 'B',
    commentary:
      "Diallo Telli a porté la voix de l'Afrique aux Nations Unies puis à la tête de l'OUA, avant son tragique destin au Camp Boiro.",
  },
  {
    id: 15,
    section: 'pionniers',
    question:
      'Première femme à présider le Conseil de sécurité des Nations Unies, en 1972 :',
    options: [
      { id: 'A', text: 'Loffo Camara' },
      { id: 'B', text: 'Mafory Bangoura' },
      { id: 'C', text: 'Jeanne Martin Cissé' },
      { id: 'D', text: 'Aïcha Bah Diallo' },
    ],
    correctId: 'C',
    commentary:
      "Jeanne Martin Cissé — fille du Milo, ambassadrice qui a fait entrer la Guinée et l'Afrique au sommet de la diplomatie mondiale.",
  },
  {
    id: 16,
    section: 'pionniers',
    question:
      'Premier Premier ministre de la République de Guinée, en fonction de 1972 à 1984 :',
    options: [
      { id: 'A', text: 'Diallo Telli' },
      { id: 'B', text: 'Lansana Béavogui' },
      { id: 'C', text: 'Saïfoulaye Diallo' },
      { id: 'D', text: 'Sidya Touré' },
    ],
    correctId: 'B',
    commentary:
      'Béavogui — premier PM, premier chef de gouvernement, premier nom de la frise institutionnelle.',
  },
  {
    id: 17,
    section: 'pionniers',
    question:
      "Surnommée « la mère de l'indépendance », grande militante du PDG-RDA :",
    options: [
      { id: 'A', text: "M'Balia Camara" },
      { id: 'B', text: 'Mafory Bangoura' },
      { id: 'C', text: 'Loffo Camara' },
      { id: 'D', text: 'Rabiatou Serah Diallo' },
    ],
    correctId: 'B',
    commentary:
      "Mafory Bangoura — l'âme féminine du combat indépendantiste à Conakry.",
  },
  {
    id: 18,
    section: 'pionniers',
    question:
      'Première femme ministre de la République de Guinée, nommée en 1961 :',
    options: [
      { id: 'A', text: 'Jeanne Martin Cissé' },
      { id: 'B', text: 'Loffo Camara' },
      { id: 'C', text: 'Mafory Bangoura' },
      { id: 'D', text: 'Aïcha Bah Diallo' },
    ],
    correctId: 'B',
    commentary:
      "Loffo Camara — première femme ministre dès 1961, aux Affaires sociales du premier gouvernement, dont la trajectoire s'est tragiquement achevée au Camp Boiro.",
  },

  // ─── MANCHE 4 — 28.09.1958 ET APRÈS ───
  {
    id: 19,
    section: 'independance',
    question:
      'Le 28 septembre 1958, lors du référendum constitutionnel français, la Guinée a voté :',
    options: [
      { id: 'A', text: 'OUI à 95 %' },
      { id: 'B', text: 'NON à plus de 95 %' },
      { id: 'C', text: 'NON à 51 % seulement' },
      { id: 'D', text: 'Blanc à 60 %' },
    ],
    correctId: 'B',
    commentary:
      "Le NON guinéen — seul du continent. C'est ce vote qui a fait basculer l'histoire de l'Afrique francophone.",
  },
  {
    id: 20,
    section: 'independance',
    question: 'La République de Guinée a proclamé son indépendance le :',
    options: [
      { id: 'A', text: '28 septembre 1958' },
      { id: 'B', text: '2 octobre 1958' },
      { id: 'C', text: '1ᵉʳ janvier 1959' },
      { id: 'D', text: '14 mai 1959' },
    ],
    correctId: 'B',
    commentary:
      'Le 28 septembre est le vote ; le 2 octobre est la proclamation. Deux dates, un seul mouvement.',
  },
  {
    id: 21,
    section: 'independance',
    question:
      "Combien de Compagnons sont aujourd'hui célébrés par le Rouleau d'honneur exposé au Mur de la Mémoire ?",
    options: [
      { id: 'A', text: '28' },
      { id: 'B', text: '60' },
      { id: 'C', text: '100' },
      { id: 'D', text: '453' },
    ],
    correctId: 'B',
    commentary:
      "60 Compagnons fondateurs — les architectes politiques du NON et de l'État jeune.",
  },
  {
    id: 22,
    section: 'independance',
    question:
      "Combien de Guinéens ont reçu la Croix du Compagnon de l'Indépendance ?",
    options: [
      { id: 'A', text: 'Entre 40 et 60' },
      { id: 'B', text: 'Entre 100 et 200' },
      { id: 'C', text: 'Entre 200 et 400' },
      { id: 'D', text: 'Plus de 400' },
    ],
    correctId: 'D',
    commentary:
      "Plus de 400 Croix du Compagnon — distinction remise en 1959-1960 à celles et ceux qui ont porté la mobilisation de l'indépendance.",
  },

  // ─── MANCHE 5 — LA SENAG ───
  {
    id: 23,
    section: 'senag',
    question: 'La SENAG 2026 est :',
    options: [
      { id: 'A', text: 'La 1ʳᵉ édition' },
      { id: 'B', text: 'La 5ᵉ édition' },
      { id: 'C', text: 'La 10ᵉ édition' },
      { id: 'D', text: "Une réédition d'un événement colonial" },
    ],
    correctId: 'A',
    commentary:
      'Une première — donc tout ce que nous faisons cette semaine fait jurisprudence pour les éditions à venir.',
  },
  {
    id: 24,
    section: 'senag',
    question: 'Le thème officiel de la 1ʳᵉ SENAG est :',
    options: [
      { id: 'A', text: '« Mémoire vive, démocratie vivante »' },
      {
        id: 'B',
        text: "« Archives de l'État et Gouvernance publique : préserver la mémoire nationale »",
      },
      { id: 'C', text: '« De la plume au pixel »' },
      { id: 'D', text: '« Nos archives, notre fierté »' },
    ],
    correctId: 'B',
    commentary:
      "Archives ET gouvernance — les deux ne se séparent pas. Sans archives, pas d'État de droit.",
  },
  {
    id: 25,
    section: 'senag',
    question:
      'Le Mur de la Mémoire, à la Plage Camayenne, est organisé en :',
    options: [
      { id: 'A', text: '2 grands panneaux' },
      {
        id: 'B',
        text: '3 registres : Pionniers, Figures patrimoniales, et Frise institutionnelle des chefs d\u2019État et Premiers ministres',
      },
      { id: 'C', text: '5 sections géographiques' },
      { id: 'D', text: 'Une fresque continue sans découpage' },
    ],
    correctId: 'B',
    commentary:
      "Trois registres, une seule mémoire. L'archive vit quand on s'y reconnaît.",
  },
];

// ─── Helpers ───

export const TOTAL_QUESTIONS = QUIZ_QUESTIONS.length; // 25
export const POINTS_PER_QUESTION = 4; // → score sur 100

export type QuizMode = 'complet' | QuizSection;

export const MODE_LABELS: Record<QuizMode, string> = {
  complet: '25 questions complètes',
  definitions: '5 questions — Définitions',
  figures: '8 questions — Figures patrimoniales',
  pionniers: '5 questions — Pionniers',
  independance: '4 questions — 28.09.1958 et après',
  senag: '3 questions — La SENAG',
};

export function getQuestionsForMode(mode: QuizMode): QuizQuestion[] {
  if (mode === 'complet') return QUIZ_QUESTIONS;
  return QUIZ_QUESTIONS.filter((q) => q.section === mode);
}
