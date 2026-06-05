// =====================================================================
//  ESPACE ENSEIGNANTS — La Boîte à Outils PATI (contenu éditable)
// =====================================================================

export type Tool = { name: string; desc: string; resource: string };
export type Pillar = { key: string; title: string; intro: string; tools: Tool[] };

export const PILLARS: Pillar[] = [
  {
    key: "parole",
    title: "Parole & Transmission",
    intro: "Des outils qui font de la voix et de l'écoute des leviers pédagogiques.",
    tools: [
      {
        name: "La Carte de l'Arbre à Palabres",
        desc: "Un outil conversationnel inspiré de la palabre ouest-africaine : les élèves forment un cercle, un bâton de parole circule, trois rôles tournants (poser la question, répondre, synthétiser). L'enseignant n'est plus au tableau mais dans le cercle ; l'outil enseigne l'écoute, la patience et l'argumentation.",
        resource: "Fiche imprimable avec 12 questions modèles par titre PATI.",
      },
      {
        name: "Le Studio Conteur",
        desc: "Transforme n'importe quel smartphone en outil de production audio. Les élèves enregistrent leurs propres contes — récits recueillis en famille ou créations inspirées des œuvres PATI. Compétences : expression orale, écriture, prise de son, montage, recherche ethnographique.",
        resource: "Guide de prise de son + grille d'auto-évaluation.",
      },
      {
        name: "La Radio PATI de Classe",
        desc: "Un mini-journal hebdomadaire de 5 minutes produit par un binôme d'élèves : nouvelle locale, proverbe du jour, chronique sur une œuvre PATI, devinette. Compétences : synthèse, prise de parole, travail en équipe, gestion du temps.",
        resource: "Modèle de script + grille de rotation des binômes.",
      },
    ],
  },
  {
    key: "memoire",
    title: "Mémoire & Territoire",
    intro: "Des outils qui ancrent l'apprentissage dans le territoire réel des élèves.",
    tools: [
      {
        name: "La Carte Patrimoniale Vivante",
        desc: "Chaque classe construit la carte de son quartier, sa ville, sa préfecture : arbres remarquables, figures historiques, contes localisés, métiers traditionnels, lieux de mémoire. La carte se densifie au fil de l'année. La géographie devient une discipline d'enquête.",
        resource: "Modèle de carte vierge + symboles + guide d'enquête.",
      },
      {
        name: "La Ligne du Temps Vivante",
        desc: "Une frise chronologique murale où les élèves placent événements historiques, dates personnelles, événements du quartier et anniversaires des personnages PATI. Mélange Grande Histoire et histoire intime : l'élève comprend qu'il appartient lui aussi à l'Histoire.",
        resource: "Frise murale imprimable + fiches événements vierges.",
      },
      {
        name: "Les Trois Tableaux",
        desc: "Trois tableaux permanents — français, anglais, langue nationale locale (soussou, malinké ou peul). Chaque séance, un mot-clé du jour figure dans les trois langues. Sur une année, les élèves intègrent des centaines de mots de leur langue ancestrale sans effort explicite.",
        resource: "Calendrier annuel de mots-clés thématiques avec traductions validées.",
      },
    ],
  },
  {
    key: "creation",
    title: "Création & Jeu",
    intro: "Des outils qui mobilisent le corps, l'imagination et le plaisir de créer.",
    tools: [
      {
        name: "Le Théâtre-Forum PATI",
        desc: "Inspiré du théâtre de l'opprimé d'Augusto Boal. Les élèves jouent une scène d'une œuvre PATI portant une tension ; les spectateurs peuvent crier stop, remplacer un acteur et proposer une autre issue. Idéal pour l'éducation civique et le vivre-ensemble.",
        resource: "3 scénarios modèles + fiche de rôles + règles du forum.",
      },
      {
        name: "Le Jeu de Cartes PATI",
        desc: "Un jeu de 54 cartes à fabriquer en classe : un personnage, une époque, un lieu, une vertu ou un défi. Mécaniques : associations, devinettes, mises en scène improvisées. Un outil qu'un enseignant sort en cinq minutes pour relancer un cours.",
        resource: "Modèle de cartes vierges + 54 cartes prêtes à imprimer.",
      },
      {
        name: "La Pédagogie de la Bouture",
        desc: "Principe transversal : à partir de chaque œuvre PATI lue, les élèves produisent une bouture — une création dérivée dans un autre format (dessin, chanson, planche BD, saynète…).",
        resource: "Grille de transposition format par format + exemples.",
      },
    ],
  },
  {
    key: "ecriture",
    title: "Écriture & Pensée",
    intro: "Des outils qui cultivent l'attention, la pensée critique et l'expression écrite.",
    tools: [
      {
        name: "Le Cahier-Griot",
        desc: "Un cahier où chaque élève consigne ce qu'il recueille hors les murs : un proverbe de sa grand-mère, une recette familiale, une chanson de mariage, un récit du grand-père. Rituel de 10 minutes par semaine. Effet : revaloriser les anciens comme sources légitimes de savoir.",
        resource: "Modèle de Cahier-Griot imprimable + rubriques structurées.",
      },
      {
        name: "La Fiche « IA et Moi »",
        desc: "L'élève rend visible sa propre pensée à côté de la suggestion de la machine. Il apprend à dialoguer, à discerner, à refuser. Une grille accompagne la fiche pour évaluer le processus de discernement.",
        resource: "Fiche « IA et Moi » + grille d'évaluation du processus.",
      },
      {
        name: "Le Carnet d'Émerveillement",
        desc: "Un carnet où l'élève note, deux à trois fois par semaine, une chose qui l'a émerveillé : un mot, un geste, un dessin, une idée. Pas d'évaluation, juste un rituel d'attention — pour réapprendre à voir le monde avant de scroller.",
        resource: "Modèle de carnet imprimable + consignes de partage.",
      },
    ],
  },
  {
    key: "communaute",
    title: "Communauté & Éthique",
    intro: "Des outils qui transforment la classe en communauté et cultivent le jugement moral.",
    tools: [
      {
        name: "Le Miroir des Vertus",
        desc: "À la fin de chaque œuvre, les élèves identifient une vertu incarnée par les personnages — courage, ruse, humilité, persévérance, hospitalité — affichée avec le nom du personnage. En fin d'année, chaque élève reçoit une vertu attribuée par ses camarades.",
        resource: "Affiches des vertus + bulletin de vote + diplôme de vertu.",
      },
      {
        name: "Le Conseil PATI",
        desc: "Une heure par mois où les élèves tiennent leur propre conseil : ordre du jour proposé par eux, présidence tournante, décisions consignées. La classe devient une micro-communauté politique qui apprend la délibération et la responsabilité collective.",
        resource: "Modèle de Cahier de Conseil avec rubriques structurées.",
      },
      {
        name: "La Correspondance Inter-Clubs",
        desc: "Chaque Club est jumelé à un autre, idéalement d'une autre région ou d'un autre pays africain. Échanges mensuels : contes audio, dessins, planches BD, devinettes. Effet : construire, à hauteur d'enfant, une géographie panafricaine vécue.",
        resource: "Guide de jumelage + modèle de lettre d'échange.",
      },
    ],
  },
];

export const FORMATS = [
  { name: "Fiches PDF imprimables", desc: "Téléchargeables gratuitement, classées par cycle et par discipline. Format A4, design PATI, mode d'emploi en une page." },
  { name: "Modules vidéo de formation", desc: "Courts (5 à 8 min), montrant un enseignant guinéen utilisant l'outil avec une vraie classe. Visionnables hors-ligne." },
  { name: "Mallette physique « Club PATI »", desc: "Envoyée aux écoles partenaires : les cahiers (Griot, Émerveillement, Conseil), les jeux de cartes, les affiches et le guide de l'animateur." },
];
