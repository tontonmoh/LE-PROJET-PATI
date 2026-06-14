// Quiz de la saga Taadidi — 15 questions couvrant les 28 épisodes (4 quartiers).
// Format : choices[correct] = la bonne réponse.

export type QuizQuestion = {
  phase: string;     // label du quartier
  emoji: string;     // emoji lune
  question: string;
  choices: string[]; // 4 choix
  correct: number;   // index de la bonne réponse dans choices
};

export const TAADIDI_QUIZ: QuizQuestion[] = [
  // ── Nouvelle lune · ép. 1–7 ──────────────────────────────────────────────
  {
    phase: "Nouvelle lune", emoji: "🌑",
    question: "Comment Taadidi gagne-t-il son nom ?",
    choices: [
      "En courant plus vite que tout le village",
      "En battant son père à la ruse",
      "En récitant la généalogie des ancêtres",
      "En sauvant un enfant dans le marigot",
    ],
    correct: 1,
  },
  {
    phase: "Nouvelle lune", emoji: "🌑",
    question: "Que dit Nana des filles dans la saga ?",
    choices: [
      "« Les filles sont l'eau »",
      "« Les filles sont le feu »",
      "« Les filles sont la lune »",
      "« Les filles sont la forêt »",
    ],
    correct: 2,
  },
  {
    phase: "Nouvelle lune", emoji: "🌑",
    question: "Quel est le rôle de Bakala dans la saga ?",
    choices: [
      "Le griot de Kiribounyi",
      "Le chef des jeunes",
      "Le maître des épreuves",
      "Le rival jaloux du père de Taadidi",
    ],
    correct: 3,
  },

  // ── Premier quartier · ép. 8–14 ──────────────────────────────────────────
  {
    phase: "Premier quartier", emoji: "🌓",
    question: "Lima réalise son rêve à la force de son travail. Elle devient quoi ?",
    choices: [
      "Maîtresse d'école",
      "Infirmière",
      "Sage-femme",
      "Commerçante",
    ],
    correct: 1,
  },
  {
    phase: "Premier quartier", emoji: "🌓",
    question: "Pourquoi Tofan remporte-t-elle le grand concours ?",
    choices: [
      "Elle porte le plus beau pagne du pays",
      "Elle chante la plus belle chanson",
      "Elle arrive avec un projet pour son village",
      "Elle récite la meilleure poésie",
    ],
    correct: 2,
  },
  {
    phase: "Premier quartier", emoji: "🌓",
    question: "Comment connaît-on Adama au début de la saga ?",
    choices: [
      "« La colombe de Kiribounyi »",
      "« La sœur de Kaly »",
      "« La fille du marigot »",
      "« L'amie de Tofan et Fanyi »",
    ],
    correct: 3,
  },

  // ── Pleine lune · ép. 15–21 ──────────────────────────────────────────────
  {
    phase: "Pleine lune", emoji: "🌕",
    question: "Que signifie « Kiké » en soussou ?",
    choices: [
      "Le chant, la voix, le griot",
      "Le soleil, la chaleur, la vie",
      "L'eau, la source, la rivière",
      "La lune, le mois, le miroir, le regard",
    ],
    correct: 3,
  },
  {
    phase: "Pleine lune", emoji: "🌕",
    question: "Qu'est-ce que Taadidi construit pour transformer la vie du village ?",
    choices: [
      "Des puits",
      "Des greniers",
      "Des ponts",
      "Des cases",
    ],
    correct: 2,
  },
  {
    phase: "Pleine lune", emoji: "🌕",
    question: "Comment Adama reconnaît-elle Taadidi au point d'eau ?",
    choices: [
      "Par ses locks",
      "Par la façon dont il marche",
      "Par son regard",
      "Par sa voix qui chante",
    ],
    correct: 3,
  },

  // ── Dernier quartier · ép. 22–28 ─────────────────────────────────────────
  {
    phase: "Dernier quartier", emoji: "🌗",
    question: "Qui était Alya pour Adama ?",
    choices: [
      "Le fils du griot du village voisin",
      "Celui à qui elle a été forcée de se marier",
      "Le frère de Bakala",
      "Le rival de Taadidi",
    ],
    correct: 1,
  },
  {
    phase: "Dernier quartier", emoji: "🌗",
    question: "Quand Taadidi veut se battre pour Adama, que lui répond-elle ?",
    choices: [
      "« Laisse-moi régler cela seule »",
      "« Le temps arrangera les choses »",
      "« Pars et ne reviens pas »",
      "« Ce n'est pas ta force que je veux — c'est que la vérité soit entendue »",
    ],
    correct: 3,
  },
  {
    phase: "Dernier quartier", emoji: "🌗",
    question: "Sous quel arbre Adama prend-elle la parole devant tout le village ?",
    choices: [
      "Le baobab de Kiribounyi",
      "Le néribily (le fromager)",
      "Le kapokier sacré",
      "Le manguier du chef",
    ],
    correct: 1,
  },
  {
    phase: "Dernier quartier", emoji: "🌗",
    question: "Pourquoi Makhadi refuse-t-elle de concurrencer Nana pour la chefferie ?",
    choices: [
      "Elle préfère diriger la coopérative seule",
      "Elle est trop jeune pour le rôle",
      "« Il n'y a pas de match. C'est toi la Cheffe. »",
      "Elle part vivre dans un autre village",
    ],
    correct: 2,
  },
  {
    phase: "Dernier quartier", emoji: "🌗",
    question: "Que représente le nom « Sogué » dans la saga ?",
    choices: [
      "L'eau — la source du village",
      "La forêt — la mémoire des ancêtres",
      "La lune — la promesse tenue",
      "Le soleil — la fille de Taadidi",
    ],
    correct: 3,
  },
  {
    phase: "Dernier quartier", emoji: "🌗",
    question: "Quel cri le griot pousse-t-il le jour où Nana devient cheffe ?",
    choices: [
      "« WOYIKA ! »",
      "« SOGUÉ ! »",
      "« TAADIDI ! »",
      "« KIKÉ ! »",
    ],
    correct: 1,
  },
];

// Messages de fin selon le score
export const SCORE_MESSAGES: { min: number; max: number; msg: string }[] = [
  { min: 15, max: 15, msg: "WOYIKA ! Tu connais Taadidi mieux que le griot lui-même." },
  { min: 12, max: 14, msg: "Excellent ! Tu as suivi la saga de très près." },
  { min:  9, max: 11, msg: "Bien ! Quelques épisodes à relire, peut-être." },
  { min:  6, max:  8, msg: "Pas mal. La saga a encore des secrets pour toi." },
  { min:  0, max:  5, msg: "Retourne lire ! Taadidi a encore beaucoup à t'apprendre." },
];

export function getScoreMessage(score: number): string {
  const m = SCORE_MESSAGES.find((s) => score >= s.min && score <= s.max);
  return m?.msg ?? "";
}
