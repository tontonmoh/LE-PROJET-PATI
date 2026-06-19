// ════════════════════════════════════════════════════════════════
//  MANSAYA — Données des quêtes interactives
//  ----------------------------------------------------------------
//  Ce fichier contient UNIQUEMENT le contenu (textes, faits, choix).
//  Le moteur qui l'affiche est dans src/components/MansayaQuete.tsx
//  et ne doit PAS être modifié pour ajouter un empire.
//
//  Pour ajouter un empire : copier le bloc `mali` ci-dessous,
//  le renommer, remplir les scènes. C'est tout.
//
//  RÈGLE ÉDITORIALE — réel vs projeté :
//  Tout fait dans `fact` doit être sourcé (veilles Mansaya).
//  Seule Fanta (l'exploratrice) est fictive, assumée comme
//  dispositif narratif — jamais présentée comme historique.
// ════════════════════════════════════════════════════════════════

export interface Fact {
  id: string;          // identifiant unique du fait (évite les doublons)
  title: string;       // titre court du fait débloqué
  body: string;        // texte du fait (sourcé)
  // ── Illustration approfondie (optionnelle) ──
  // Remplir quand l'image existe. Tant que `image` est absent,
  // la lightbox affiche un cadre « illustration à venir ».
  // Chemin attendu : une image dans public/images/mansaya/...
  //   → référencée ici en absolu, ex. "/images/mansaya/kirina.png"
  image?: string;      // chemin de l'illustration (optionnel)
  caption?: string;    // légende affichée sous l'image (optionnel)
}

export interface Choice {
  label: string;       // texte du bouton
  icon: string;        // nom d'icône Tabler (ex. "ti-swords")
  go: string;          // clé de la scène cible
}

export interface Scene {
  speaker: string;     // qui parle (Fanta, ou un personnage historique)
  text: string;        // réplique / narration
  fact?: Fact;         // fait débloqué en entrant dans la scène (optionnel)
  choices: Choice[];   // chemins proposés (vide = scène finale gérée par "end")
}

export interface Quest {
  slug: string;             // identifiant URL (ex. "mali")
  empire: string;           // nom de l'empire
  subtitle: string;         // sous-titre affiché dans l'en-tête
  narrator: string;         // nom du personnage-guide (Fanta)
  totalFacts: number;       // nombre total de faits à débloquer (pour la barre)
  badge: string;            // nom du badge final
  startScene: string;       // clé de la première scène
  scenes: Record<string, Scene>;
}

// ────────────────────────────────────────────────────────────────
//  PALETTE PERSONNAGES
//  Couleurs d'avatar par personnage. [bg, accent, texte-foncé].
//  Tirées du nuancier afrotemporel Mansaya (ocre, indigo, terre).
// ────────────────────────────────────────────────────────────────
export const speakerColors: Record<string, [string, string, string]> = {
  Fanta:            ['#FAEEDA', '#854F0B', '#412402'], // ocre — la narratrice
  'Balla Fasséké':  ['#EEEDFE', '#534AB7', '#26215C'], // indigo — le griot
  'Nana Triban':    ['#FBEAF0', '#D4537E', '#4B1528'], // rose — l'espionne
  Soumaoro:         ['#FCEBEB', '#A32D2D', '#501313'], // rouge — le tyran
  Soundiata:        ['#E1F5EE', '#0F6E56', '#04342C'], // vert — le roi
  'Moussa Tounkara':['#E6F1FB', '#185FA5', '#042C53'], // bleu — le mentor
  Sogolon:          ['#FAECE7', '#993C1D', '#4A1B0C'], // corail — la mère
};

// ════════════════════════════════════════════════════════════════
//  ENTRÉE : EMPIRE DU MALI  (modèle de référence)
// ════════════════════════════════════════════════════════════════
const mali: Quest = {
  slug: 'mali',
  empire: 'Empire du Mali',
  subtitle: 'Le royaume de l’or mandingue',
  narrator: 'Fanta',
  totalFacts: 8,
  badge: 'Mansa',
  startScene: 'start',
  scenes: {
    start: {
      speaker: 'Fanta',
      text: 'Me voici dans le Manden, il y a 800 ans. On raconte qu’un enfant est né ici — incapable de marcher jusqu’à 7 ans. Et qu’il deviendrait le plus grand roi du monde. Je veux comprendre comment. Par où je commence ?',
      choices: [
        { label: 'Enquêter sur sa naissance', icon: 'ti-baby-carriage', go: 'birth' },
        { label: 'Filer droit à la grande bataille', icon: 'ti-swords', go: 'battle' },
      ],
    },
    birth: {
      speaker: 'Fanta',
      fact: {
        id: 'f1',
        title: 'Soundiata l’enfant',
        body: 'Soundiata Keïta naît dans le Manden. La tradition orale rapporte qu’il marcha à quatre pattes jusqu’à 7 ans passés, avant de se lever d’un coup.',

        image: '/images/mansaya/f1.jpg',

        caption: 'Soundiata se lève enfin et déracine un baobab à mains nues.',
      },
      text: 'Sa mère s’appelle Sogolon Condé. On la surnomme la « femme-buffle ». Les autres femmes se moquent d’elle parce que son fils ne marche pas. Mais un jour, humilié pour elle, Soundiata se lève — et déracine un baobab à mains nues. Qui pourrait l’aider à régner ?',
      choices: [
        { label: 'Rencontrer son griot', icon: 'ti-music', go: 'griot' },
        { label: 'Comprendre pourquoi il part en exil', icon: 'ti-walk', go: 'exile' },
      ],
    },
    griot: {
      speaker: 'Balla Fasséké',
      fact: {
        id: 'f2',
        title: 'Le griot Balla Fasséké',
        body: 'Balla Fasséké, griot personnel de Soundiata, créa l’hymne « Niama ». Les griots de la lignée Kouyaté le transmettent encore aujourd’hui.',

        image: '/images/mansaya/f2.jpg',

        caption: 'Le griot Balla Fasséké chante l’épopée à la kora, autour du feu.',
      },
      text: '« Je suis Balla Fasséké, sa voix et sa mémoire. Sans nous, les griots, les rois seraient oubliés. C’est moi qui composerai l’hymne Niama, qu’on chantera dans 800 ans — jusqu’à ton époque, exploratrice. » Mais d’abord, Soundiata doit fuir…',
      choices: [
        { label: 'Suivre Soundiata en exil', icon: 'ti-walk', go: 'exile' },
      ],
    },
    exile: {
      speaker: 'Fanta',
      fact: {
        id: 'f3',
        title: 'Vingt ans d’exil',
        body: 'Chassé par son demi-frère Dankaran Touman, Soundiata grandit dans des royaumes voisins. À Mema, le roi Moussa Tounkara le forme et le nomme Kan-Koro-Sigui (vice-roi) à 18 ans.',

        image: '/images/mansaya/f3.jpg',

        caption: 'Soundiata et sa mère Sogolon partent pour vingt ans d’exil.',
      },
      text: 'Son demi-frère Dankaran, jaloux de la prophétie, l’a chassé. Pendant 20 ans Soundiata erre — Tabon, Wagadou, puis Mema. Là, le roi Moussa Tounkara le traite comme un fils, lui apprend la guerre et le nomme vice-roi. Pendant ce temps, un tyran ravage le Manden…',
      choices: [
        { label: 'Découvrir le tyran Soumaoro', icon: 'ti-flame', go: 'tyrant' },
      ],
    },
    tyrant: {
      speaker: 'Fanta',
      fact: {
        id: 'f4',
        title: 'Soumaoro Kanté du Sosso',
        body: 'Roi-forgeron du Sosso, Soumaoro envahit le Manden affaibli. L’épopée le présente comme invincible grâce à des secrets mystiques.',

        image: '/images/mansaya/f4.jpg',

        caption: 'Soumaoro Kanté, le roi-forgeron du Sosso, dans sa forge.',
      },
      text: 'Soumaoro Kanté, roi du Sosso, a envahi le Manden. On le dit invincible, protégé par des forces secrètes. Le peuple supplie Soundiata de revenir. Il lève une armée avec ses alliés. Mais comment vaincre un homme qu’aucune arme ne touche ?',
      choices: [
        { label: 'Chercher le secret de Soumaoro', icon: 'ti-eye', go: 'secret' },
        { label: 'Rallier les grands généraux', icon: 'ti-users', go: 'generals' },
      ],
    },
    secret: {
      speaker: 'Nana Triban',
      fact: {
        id: 'f5',
        title: 'Le secret volé',
        body: 'Nana Triban, demi-sœur de Soundiata mariée de force à Soumaoro, découvre le secret de sa puissance (un ergot de coq blanc) et s’enfuit pour le révéler.',

        image: '/images/mansaya/f5.jpg',

        caption: 'Nana Triban s’enfuit avec le secret de Soumaoro.',
      },
      text: '« Je suis Nana Triban. On m’a mariée de force à Soumaoro. Mais j’ai découvert son secret — et je me suis enfuie pour le livrer à mon frère. Sans armée, sans épée : juste ce que je savais. Parfois, exploratrice, le plus grand courage est invisible. »',
      choices: [
        { label: 'Rejoindre les généraux pour la bataille', icon: 'ti-users', go: 'generals' },
      ],
    },
    generals: {
      speaker: 'Fanta',
      fact: {
        id: 'f6',
        title: 'Fakoli et Tiramakhan',
        body: 'Fakoli Doumbia (neveu révolté de Soumaoro) et Tiramakhan Traore, généraux de Soundiata. Tiramakhan étendra plus tard l’empire vers l’ouest et fondera le Kaabu.',
      },
      text: 'Deux géants rejoignent Soundiata. Fakoli Doumbia, le propre neveu de Soumaoro, qui s’est révolté contre son oncle. Et Tiramakhan Traore, le stratège — celui pour qui, plus tard, le roi chantera le fassa, l’hymne d’honneur réservé aux plus grands. L’armée est prête. Direction : Kirina.',
      choices: [
        { label: 'Vivre la bataille de Kirina', icon: 'ti-swords', go: 'battle' },
      ],
    },
    battle: {
      speaker: 'Fanta',
      fact: {
        id: 'f7',
        title: 'La bataille de Kirina (1235)',
        body: 'En 1235 à Kirina, Soundiata vainc Soumaoro. C’est l’acte fondateur de l’Empire du Mali. Soundiata devient Mansa, « roi des rois ».',
        image: '/images/mansaya/kirina.jpg',
        caption: 'La bataille de Kirina (1235) — Soundiata terrasse Soumaoro. Illustration afrotemporelle.',
      },
      text: '1235. Les deux armées s’affrontent à Kirina. Le secret de Soumaoro a été percé — sa puissance le quitte. Soundiata l’emporte. Le tyran disparaît. L’enfant qu’on disait infirme est désormais Mansa : roi des rois. L’Empire du Mali vient de naître. Et après la victoire ?',
      choices: [
        { label: 'Découvrir la Charte du Manden', icon: 'ti-scale', go: 'charter' },
      ],
    },
    charter: {
      speaker: 'Soundiata',
      fact: {
        id: 'f8',
        title: 'La Charte du Manden (1235)',
        body: 'Après Kirina, Soundiata proclame la Charte du Manden, qui fixe les droits des peuples. L’UNESCO l’a inscrite en 2009 au patrimoine immatériel de l’humanité.',
      },
      text: '« Écoute bien, Fanta. Je ne veux pas seulement régner — je veux des lois justes. Voici la Charte du Manden : elle protège les peuples, les griots, et interdit qu’on traite mal les autres. 800 ans plus tard, on dira que c’est l’une des premières déclarations de droits du monde. » Tu as reconstitué toute son histoire !',
      choices: [
        { label: 'Voir mon carnet complet', icon: 'ti-book', go: 'end' },
      ],
    },
  },
};

// ════════════════════════════════════════════════════════════════
//  ENTRÉE : EMPIRE DU GHANA  (le berceau de l'or)
// ════════════════════════════════════════════════════════════════
const ghana: Quest = {
  slug: 'ghana',
  empire: 'Empire du Ghana',
  subtitle: 'Le berceau de l’or',
  narrator: 'Fanta',
  totalFacts: 6,
  badge: 'Maître de l’or',
  startScene: 'start',
  scenes: {
    start: {
      speaker: 'Fanta',
      fact: {
        id: 'g1',
        title: 'La naissance du Ghana',
        body: 'Au VIIIe siècle, le peuple soninké se rassemble entre le Niger et le Sénégal. Un chef, Kaya Magan Cissé, rallie les tribus : c’est le premier grand empire d’Afrique de l’Ouest.',
      },
      text: 'Me voici 400 ans avant le Mali, entre le Niger et le Sénégal. Un peuple, les Soninké, vient de fonder le premier grand empire de la région. On l’appelle le Ghana. Mais attention — « Ghana » n’est pas le nom du pays ! Veux-tu savoir ce que ça veut dire, ou découvrir d’où vient sa richesse ?',
      choices: [
        { label: 'Que signifie « Ghana » ?', icon: 'ti-crown', go: 'title' },
        { label: 'D’où vient sa richesse ?', icon: 'ti-coins', go: 'gold' },
      ],
    },
    title: {
      speaker: 'Fanta',
      fact: {
        id: 'g2',
        title: 'Un titre, pas un pays',
        body: '« Ghana » est le titre du souverain, signifiant « guerrier ». Le territoire, lui, portait d’autres noms. Comme un roi porte une couronne, un Ghana porte un titre de puissance.',
      },
      text: 'Surprise : « Ghana » est le titre du roi, pas du territoire ! Ça veut dire « guerrier ». Les voyageurs arabes ont retenu ce mot et l’ont collé à tout l’empire. Maintenant, suis-moi vers ce qui faisait sa vraie force…',
      choices: [
        { label: 'Découvrir l’or du Ghana', icon: 'ti-coins', go: 'gold' },
      ],
    },
    gold: {
      speaker: 'Fanta',
      fact: {
        id: 'g3',
        title: 'L’or contre le sel',
        body: 'Le Ghana détenait des mines d’or convoitées. Au marché de Koumbi Saleh, on échangeait l’or contre le sel apporté par les caravanes du Sahara — un sel aussi précieux que l’or au Sahel.',
      },
      text: 'Le secret du Ghana, c’est l’or — des mines que personne d’autre ne possède. Les marchands traversent le Sahara pour l’acheter, et apportent en échange du sel, aussi précieux que l’or ici. Les rois contrôlent ce commerce d’une main de fer. Comment gardent-ils tant de pouvoir ?',
      choices: [
        { label: 'Entrer dans la capitale', icon: 'ti-building-castle', go: 'capital' },
        { label: 'Voir arriver une nouvelle religion', icon: 'ti-moon', go: 'islam' },
      ],
    },
    capital: {
      speaker: 'Fanta',
      fact: {
        id: 'g4',
        title: 'Koumbi Saleh, la ville du silence',
        body: 'Les voyageurs arabes nommaient la capitale Koumbi Saleh « la ville du silence » : on y interdisait le bruit près du palais royal. L’historien Ibn Haukal la décrit au Xe siècle.',
      },
      text: 'Voici Koumbi Saleh, la capitale. On la surnomme « la ville du silence » : près du palais, le bruit est interdit, par respect pour le roi ! L’historien arabe Ibn Haukal l’a décrite au Xe siècle. C’est une cité immense pour l’époque, avec déjà des mosquées. Justement — parlons de religion.',
      choices: [
        { label: 'Comprendre l’arrivée de l’islam', icon: 'ti-moon', go: 'islam' },
      ],
    },
    islam: {
      speaker: 'Fanta',
      fact: {
        id: 'g5',
        title: 'Deux mondes qui cohabitent',
        body: 'Avec les caravanes arrive l’islam. L’élite du Ghana se convertit peu à peu, mais reste syncrétique : les rois prient à la mosquée et consultent les traditions anciennes. Les deux coexistent.',
      },
      text: 'Avec les marchands arabes arrive une nouvelle religion : l’islam. Les rois étaient animistes — ils croyaient que les esprits habitent les arbres et les rivières. Peu à peu l’élite se convertit, car l’islam apporte l’écriture et les comptables, utiles au commerce. Mais ils ne renoncent jamais aux traditions : ils mêlent les deux. Et puis, un jour, la fin arrive…',
      choices: [
        { label: 'Assister à la chute du Ghana', icon: 'ti-sword', go: 'fall' },
      ],
    },
    fall: {
      speaker: 'Fanta',
      fact: {
        id: 'g6',
        title: 'La chute… et l’or qui migre',
        body: 'À la fin du XIe siècle, les Almoravides venus du Maroc envahissent le Ghana et prennent Koumbi Saleh. L’empire s’effondre — mais l’or ne disparaît pas : le commerce migre vers le sud, où naîtront le Sosso puis le Mali.',
      },
      text: 'À la fin du XIe siècle, les Almoravides, des guerriers musulmans venus du Maroc, envahissent le Ghana et prennent Koumbi Saleh. L’empire s’écroule. Mais l’or, lui, ne disparaît jamais : il migre vers le sud. Là naîtra bientôt un nouveau royaume — le Sosso — puis le plus grand de tous, le Mali. Tu as percé tous les secrets du Ghana !',
      choices: [
        { label: 'Voir mon carnet complet', icon: 'ti-book', go: 'end' },
      ],
    },
  },
};

// ════════════════════════════════════════════════════════════════
//  ENTRÉE : ROYAUME DU SOSSO  (le forgeron qui se fit roi)
// ════════════════════════════════════════════════════════════════
const sosso: Quest = {
  slug: 'sosso',
  empire: 'Royaume du Sosso',
  subtitle: 'Le forgeron qui se fit roi',
  narrator: 'Fanta',
  totalFacts: 6,
  badge: 'Maître du feu',
  startScene: 'start',
  scenes: {
    start: {
      speaker: 'Fanta',
      fact: {
        id: 's1',
        title: 'Du chaos naît le Sosso',
        body: 'Après la chute du Ghana, les routes se fragmentent et personne ne gouverne. Du désordre émerge un petit territoire ambitieux : le Sosso, dirigé par un descendant de forgerons.',

        image: '/images/mansaya/s1.jpg',

        caption: 'Du chaos qui suit la chute du Ghana naît le royaume du Sosso.',
      },
      text: 'Le Ghana est tombé, et c’est l’anarchie. Plus personne ne contrôle les routes de l’or. De ce chaos surgit un homme qu’on m’a décrit comme un tyran… mais je veux juger par moi-même. Il s’appelle Soumaoro Kanté, et il vient d’une famille de forgerons. Veux-tu le rencontrer, ou comprendre d’abord pourquoi un forgeron-roi, c’est si étonnant ?',
      choices: [
        { label: 'Pourquoi un forgeron-roi étonne', icon: 'ti-hammer', go: 'blacksmith' },
        { label: 'Rencontrer Soumaoro', icon: 'ti-flame', go: 'meet' },
      ],
    },
    blacksmith: {
      speaker: 'Fanta',
      fact: {
        id: 's2',
        title: 'Le tabou du forgeron',
        body: 'Dans la société mandingue, les forgerons sont des artisans respectés mais ne deviennent pas chefs de guerre. Soumaoro, descendant de la lignée Diarisso, brise cette règle en se faisant roi guerrier.',

        image: '/images/mansaya/s2.jpg',

        caption: 'Le forgeron Soumaoro brise le tabou et se fait roi guerrier.',
      },
      text: 'Dans le monde mandingue, les forgerons sont les maîtres du feu — respectés, mais ils restent artisans. Un forgeron qui se fait roi guerrier, c’est inouï ! Soumaoro brise ce tabou. Il rassemble les meilleurs forgerons et leur fait fabriquer des armes en masse. Allons voir ce qu’il en fait.',
      choices: [
        { label: 'Rencontrer Soumaoro', icon: 'ti-flame', go: 'meet' },
      ],
    },
    meet: {
      speaker: 'Soumaoro',
      fact: {
        id: 's3',
        title: 'Une puissance militaire inédite',
        body: 'Entre 1200 et 1235, Soumaoro bâtit une armée organisée (cavalerie lourde, archers, fantassins), fédère les petits royaumes et reprend les mines d’or, conquérant même l’ancienne capitale du Ghana.',

        image: '/images/mansaya/s3.jpg',

        caption: 'Le Sosso forge en masse et lève une armée organisée.',
      },
      text: '« Oui, je suis forgeron, et alors ? Le fer fait les épées, les épées font les rois. J’ai bâti une armée comme on n’en avait jamais vu — cavalerie en armure, archers, fantassins. J’ai réuni les royaumes brisés et repris les mines d’or. Le Sosso est puissant. Mais une chose me résiste… »',
      choices: [
        { label: 'Quelle chose lui résiste ?', icon: 'ti-help', go: 'tradition' },
      ],
    },
    tradition: {
      speaker: 'Fanta',
      fact: {
        id: 's4',
        title: 'Le refus de la modernité',
        body: 'Soumaoro défend les traditions ancestrales et refuse l’islam que portent les marchands. Là où le Ghana mêlait les deux mondes, lui choisit de résister au changement — un choix qui l’isole.',

        image: '/images/mansaya/s4.jpg',

        caption: 'Soumaoro défend les traditions et refuse l’islam des marchands.',
      },
      text: 'Voilà ce qui le bloque : Soumaoro refuse l’islam des marchands. Il défend les traditions des ancêtres, la magie du feu, les génies. Le Ghana, lui, avait su mêler les deux mondes. Soumaoro, non — il dit NON à la modernité. Ce choix le rend fort… mais il l’isole aussi. Pendant ce temps, loin de là, un enfant grandit.',
      choices: [
        { label: 'Qui est cet enfant ?', icon: 'ti-baby-carriage', go: 'child' },
      ],
    },
    child: {
      speaker: 'Fanta',
      fact: {
        id: 's5',
        title: 'L’enfant exilé',
        body: 'Soumaoro occupe le Manden et en chasse la famille royale. Le jeune Soundiata Keïta et sa mère Sogolon s’exilent à Mema, où l’enfant grandit et se prépare en secret.',

        image: '/images/mansaya/s5.jpg',

        caption: 'Le jeune Soundiata exilé, chassé du Manden par Soumaoro.',
      },
      text: 'Soumaoro a envahi le Manden et chassé la famille royale. Le petit Soundiata Keïta et sa mère Sogolon ont fui vers Mema. Là, l’enfant grandit, apprend la guerre, se prépare — en secret. Soumaoro ne le sait pas encore, mais cet enfant scellera son destin. Veux-tu voir comment tout cela finit ?',
      choices: [
        { label: 'Voir la fin du Sosso', icon: 'ti-swords', go: 'end_battle' },
      ],
    },
    end_battle: {
      speaker: 'Fanta',
      fact: {
        id: 's6',
        title: 'Kirina, 1235 : la fin du Sosso',
        body: 'En 1235, à la bataille de Kirina, Soundiata vainc Soumaoro. Le Sosso s’effondre et laisse place à l’Empire du Mali. Le forgeron-roi entre dans la légende comme l’adversaire vaincu.',

        image: '/images/mansaya/s6.jpg',

        caption: 'À Kirina (1235), le Sosso s’effondre et le Mali naît.',
      },
      text: '1235, à Kirina, Soundiata revient et affronte Soumaoro. Le forgeron-roi est vaincu, et le Sosso s’efface pour laisser naître le Mali. Ce que je retiens, exploratrice : Soumaoro n’était pas qu’un « méchant ». C’était un bâtisseur qui a refusé de changer avec son temps. L’histoire est plus nuancée qu’on me l’avait dit. Tu as reconstitué le vrai Sosso !',
      choices: [
        { label: 'Voir mon carnet complet', icon: 'ti-book', go: 'end' },
      ],
    },
  },
};

// ════════════════════════════════════════════════════════════════
//  ENTRÉE : EMPIRE DU SONGHAÏ  (le successeur du Mali)
// ════════════════════════════════════════════════════════════════
const songhai: Quest = {
  slug: 'songhai',
  empire: 'Empire du Songhaï',
  subtitle: 'Le successeur du Mali',
  narrator: 'Fanta',
  totalFacts: 7,
  badge: 'Askia',
  startScene: 'start',
  scenes: {
    start: {
      speaker: 'Fanta',
      text: 'Le Mali décline, et un nouvel empire le remplace : le Songhaï, sur le fleuve Niger. Pendant 700 ans il fut un petit royaume de pêcheurs… jusqu’à ce que deux hommes le transforment en géant. Veux-tu rencontrer le guerrier, ou le réformateur ?',
      choices: [
        { label: 'Le guerrier Sonni Ali', icon: 'ti-swords', go: 'sonni' },
        { label: 'Le réformateur Askia', icon: 'ti-scale', go: 'askia' },
      ],
    },
    sonni: {
      speaker: 'Fanta',
      fact: {
        id: 'h1',
        title: 'Sonni Ali Ber, le conquérant',
        body: 'À partir de 1464, Sonni Ali Ber transforme le petit royaume songhaï en empire. Il reprend Tombouctou puis Djenné au Mali affaibli — la tradition dit qu’il ne perdit jamais une bataille.',
      },
      text: 'Voici Sonni Ali Ber, « le grand guerrier ». À partir de 1464, il regarde le Mali affaibli et se dit : pourquoi pas nous ? Il conquiert Tombouctou, puis Djenné. On raconte qu’il ne perd jamais une bataille. Et il a une arme secrète… veux-tu la connaître ?',
      choices: [
        { label: 'Son arme secrète', icon: 'ti-ship', go: 'river' },
      ],
    },
    river: {
      speaker: 'Fanta',
      fact: {
        id: 'h2',
        title: 'La maîtrise du Niger',
        body: 'Sonni Ali construit une flotte de pirogues de guerre et attaque les villes par le fleuve autant que par la terre. Cette double offensive fait du Songhaï la première puissance ouest-africaine.',
      },
      text: 'Son arme, c’est le fleuve ! Sonni Ali bâtit une flotte de pirogues de guerre. Pendant que tu défends ta porte nord, son armée surgit par le Niger. Génial, non ? Le Songhaï devient la plus grande puissance de la région. Mais Sonni Ali avait un rapport étrange à l’islam…',
      choices: [
        { label: 'Son rapport à l’islam', icon: 'ti-moon', go: 'sonni_islam' },
      ],
    },
    sonni_islam: {
      speaker: 'Fanta',
      fact: {
        id: 'h3',
        title: 'Un musulman contesté',
        body: 'Sonni Ali était musulman mais refusait d’imposer l’islam et restait attaché aux traditions. Les savants de Tombouctou lui reprochèrent son manque de zèle religieux.',
      },
      text: 'Sonni Ali est musulman, mais il refuse de forcer l’islam et reste proche des traditions. Les savants de Tombouctou s’en plaignent. Quand il meurt en 1492, c’est presque un divorce entre le roi et les religieux. Et c’est là qu’un autre homme va tout changer…',
      choices: [
        { label: 'Découvrir Askia Muhammad', icon: 'ti-scale', go: 'askia' },
      ],
    },
    askia: {
      speaker: 'Fanta',
      fact: {
        id: 'h4',
        title: 'Askia Muhammad, le réformateur',
        body: 'En 1493, Askia Muhammad Ture prend le pouvoir bien qu’il ne soit pas de sang royal. Génie organisateur, il fait du Songhaï un véritable empire musulman, divisé en provinces avec des gouverneurs.',
      },
      text: 'Voici Askia Muhammad. Il prend le pouvoir en 1493 — alors qu’il n’est même pas de sang royal ! Mais c’est un génie de l’organisation. Il divise l’empire en provinces, nomme des gouverneurs, crée une vraie administration. Et il fait quelque chose que tu as déjà vu avec un grand roi du Mali…',
      choices: [
        { label: 'Son grand pèlerinage', icon: 'ti-route', go: 'pilgrimage' },
        { label: 'Sa ville de savants', icon: 'ti-book-2', go: 'timbuktu' },
      ],
    },
    pilgrimage: {
      speaker: 'Fanta',
      fact: {
        id: 'h5',
        title: 'Le pèlerinage d’Askia (1496)',
        body: 'Comme Mansa Moussa deux siècles plus tôt, Askia Muhammad part à La Mecque en 1496. Il revient avec des savants, des juges et des architectes, et impose la justice islamique dans tout l’empire.',
      },
      text: 'Comme Mansa Moussa avant lui, Askia part à La Mecque en 1496. Il revient avec des savants, des juges, des architectes. Il impose la justice islamique partout. Le Songhaï devient un empire musulman puissant et organisé. Et son joyau, c’est une ville extraordinaire…',
      choices: [
        { label: 'Visiter cette ville', icon: 'ti-book-2', go: 'timbuktu' },
      ],
    },
    timbuktu: {
      speaker: 'Fanta',
      fact: {
        id: 'h6',
        title: 'Tombouctou, capitale du savoir',
        body: 'Sous Askia, Tombouctou devient un centre intellectuel rivalisant avec Le Caire. Des savants comme Ahmed Baba y écrivent des centaines de livres, accumulés en milliers de manuscrits.',
      },
      text: 'Tombouctou ! Sous Askia, elle rivalise avec Le Caire. Ses universités, sa mosquée de Sankoré, ses bibliothèques de milliers de manuscrits. Le savant Ahmed Baba y écrit des centaines de livres, tous copiés à la main. Mais aucun empire ne dure toujours. Veux-tu voir comment le Songhaï tombe ?',
      choices: [
        { label: 'La chute de l’empire', icon: 'ti-cannon', go: 'tondibi' },
      ],
    },
    tondibi: {
      speaker: 'Fanta',
      fact: {
        id: 'h7',
        title: 'Tondibi 1591 et les manuscrits sauvés',
        body: 'En 1591, à Tondibi, une petite armée marocaine équipée d’armes à feu écrase le Songhaï affaibli par les guerres de succession. L’empire s’effondre — mais les habitants cachent les manuscrits de Tombouctou, dont beaucoup ont survécu jusqu’à aujourd’hui.',
      },
      text: 'En 1591, le sultan du Maroc envoie une petite armée — mais elle a des armes à feu. À Tondibi, les mousquets écrasent les arcs et les lances du Songhaï, déjà affaibli par ses guerres de succession. L’empire tombe. Mais les habitants cachent les manuscrits dans leurs caves, et beaucoup ont traversé les siècles. Le savoir, lui, a survécu. Tu as reconstitué toute l’histoire du Songhaï !',
      choices: [
        { label: 'Voir mon carnet complet', icon: 'ti-book', go: 'end' },
      ],
    },
  },
};

// ════════════════════════════════════════════════════════════════
//  REGISTRE DES QUÊTES
//  Ajoute chaque nouvel empire ici après l'avoir écrit ci-dessus.
// ════════════════════════════════════════════════════════════════
export const quests: Record<string, Quest> = {
  ghana,
  sosso,
  mali,
  songhai,
};

export default quests;
