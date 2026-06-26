/**
 * HOROYA — Indépendance de la Guinée (1946–1960)
 * Encyclopédie Pati /horoya
 *
 * Structure : 4 chapitres narratifs, chacun contenant 3 jalons cliquables (facts).
 * Calibrage éditorial : Pati Passage (13-15 ans) pour la version "adulte",
 * Pati Aventure (10-12 ans) pour la version "enfant".
 *
 * Ligne éditoriale : chronique factuelle neutre, sans hagiographie Sékou Touré,
 * honorer les figures collectives (femmes, syndicalistes, opposants) à parité.
 */

export interface HoroyaJalon {
  id: string; // ex: 'r1', 'h2'
  title: string;
  date: string; // "31 mars 1957", "1946", "Été 1958"
  description: string;
  imageUrl: string; // '/images/horoya/r1.jpg'
  caption: string;
  source?: string;
}

export interface HoroyaChapitre {
  id: string;
  number: 'I' | 'II' | 'III' | 'IV';
  name: string;
  subtitle: string;
  period: string;
  role: string; // sous-titre court pour vignette

  versions: {
    enfant: string; // 10-12 ans, phrases plus simples
    adulte: string; // 13-15 ans, registre soutenu accessible
  };

  jalons: HoroyaJalon[];

  imageCount: number;
}

export const horoyaChapitres: HoroyaChapitre[] = [
  // ====================================================================
  // I. LES RACINES (1946-1956) — Le terreau du NON
  // ====================================================================
  {
    id: 'racines',
    number: 'I',
    name: 'Les racines',
    subtitle: 'Le terreau du NON',
    period: '1946 – 1956',
    role: 'Comment se forme une génération qui osera dire non',

    versions: {
      enfant: `En 1946, la Guinée n'existe pas encore comme pays indépendant. C'est un territoire de l'Afrique-Occidentale française, dirigé depuis Paris. À cette époque, des Africains commencent à se réunir pour réfléchir : comment changer cela ? Comment faire entendre la voix des peuples colonisés ?

À Bamako, au Mali, des hommes politiques de toute l'Afrique-Occidentale se rassemblent en octobre 1946. Ils créent un mouvement, le Rassemblement Démocratique Africain — le RDA. Un jeune Guinéen y participe : Sékou Touré, descendant de Samory Touré, le grand résistant. Il a 24 ans.

Pendant les années qui suivent, les ouvriers, les enseignants, les cheminots se mettent à s'organiser. En 1953, à Conakry, une longue grève commence : elle durera 67 jours. Les travailleurs réclament l'égalité des salaires entre Africains et Européens. C'est l'une des plus grandes grèves de toute l'histoire de l'Afrique-Occidentale française. Et elle gagne.

À cette époque aussi, des femmes prennent leur place dans la lutte. M'Balia Camara, une jeune militante du Manéah, en Basse-Guinée, défie l'administrateur colonial qui veut prélever des impôts injustes. En février 1955, lors d'un affrontement, elle est blessée par un coup de sabre alors qu'elle est enceinte. Elle mourra des suites de ses blessures. M'Balia Camara devient un symbole : on n'oublie pas son nom.

En 1956, la France comprend que les colonies réclament quelque chose. Le ministre Gaston Defferre fait voter une loi qu'on appelle la « loi-cadre ». Elle accorde à chaque territoire une certaine autonomie : un gouvernement local, des élections. C'est un début. Mais pour beaucoup, ce n'est pas suffisant. La graine est plantée. Elle germera bientôt.`,

      adulte: `Au lendemain de la Seconde Guerre mondiale, les territoires africains de l'empire français entrent dans une décennie décisive. La conscience politique africaine, longtemps contenue par le régime colonial, s'organise et se structure. Les anciens combattants africains, qui se sont battus en Europe pour la libération de la France, reviennent dans leurs villages porteurs d'une exigence nouvelle : si l'on a combattu pour la liberté, on peut aussi la réclamer pour soi.

En octobre 1946, à Bamako, des leaders politiques de toute l'Afrique-Occidentale française et de l'Afrique-Équatoriale française se rassemblent en congrès. Ils fondent le Rassemblement Démocratique Africain (RDA), une fédération politique transterritoriale présidée par l'Ivoirien Félix Houphouët-Boigny. Parmi les délégués guinéens présents, un jeune militant syndicaliste de 24 ans, Sékou Touré, arrière-petit-neveu de Samory Touré, dont la résistance à la pénétration française est encore dans toutes les mémoires.

Les années qui suivent sont celles de l'organisation. Sékou Touré devient secrétaire général du syndicat des Postes, puis monte rapidement dans l'appareil de la CGT puis du Parti Démocratique de Guinée (PDG-RDA). Le syndicalisme africain devient l'école de la politique : il forme les cadres, structure les exigences, mobilise les bases.

En septembre 1953, Conakry s'embrase. Une grève générale est déclenchée pour réclamer l'égalité salariale entre travailleurs africains et européens à poste équivalent. Elle dure 67 jours. C'est l'une des grèves les plus longues et les mieux suivies de toute l'histoire coloniale française en Afrique. Sékou Touré, qui en est l'un des principaux dirigeants, en sort considérablement renforcé. La grève s'achève sur une victoire : les revendications sont en grande partie obtenues. Et au-delà des salaires, c'est l'idée qui a gagné — celle que l'organisation collective peut faire reculer l'administration coloniale.

La même décennie voit l'émergence de figures féminines de la lutte. M'Balia Camara, militante du PDG à Manéah, en Basse-Guinée, est mortellement blessée en février 1955 d'un coup de sabre porté par le chef de canton David Sylla, dans le contexte d'un affrontement autour de la perception d'un impôt contesté. Enceinte au moment du drame, elle meurt des suites de ses blessures. Sa figure deviendra emblématique de la résistance féminine guinéenne et entrera durablement dans la mémoire nationale.

Sur le plan institutionnel, la France finit par bouger. La loi-cadre Defferre, adoptée le 23 juin 1956, transforme en profondeur le statut des colonies. Elle institue dans chaque territoire un Conseil de gouvernement élu au suffrage universel, dote ces territoires d'une autonomie administrative significative et acte la fin du double collège électoral. Pour les leaders du RDA, c'est un palier — pas l'aboutissement. Houphouët-Boigny y voit une étape vers une intégration moderne avec la France ; Sékou Touré, lui, commence à penser au-delà.`,
    },

    jalons: [
      {
        id: 'r1',
        title: 'Bamako — Le manifeste du RDA',
        date: '18-21 octobre 1946',
        description: 'Fondation du Rassemblement Démocratique Africain, première force politique transterritoriale africaine sous présidence d\'Houphouët-Boigny.',
        imageUrl: '/images/horoya/r1.jpg',
        caption: 'Congrès constitutif du RDA, Bamako, 1946',
        source: 'Archives RDA',
      },
      {
        id: 'r2',
        title: 'La grève des 67 jours',
        date: 'Septembre-novembre 1953',
        description: 'À Conakry, une grève générale pour l\'égalité salariale Africains-Européens dure 67 jours et s\'achève en victoire. Le syndicalisme devient l\'école de la politique.',
        imageUrl: '/images/horoya/r2.jpg',
        caption: 'Grévistes à Conakry, automne 1953',
      },
      {
        id: 'r3',
        title: 'M\'Balia Camara, martyre',
        date: 'Février 1955',
        description: 'Militante du PDG à Manéah, mortellement blessée d\'un coup de sabre lors d\'un affrontement autour d\'un impôt contesté. Enceinte, elle meurt de ses blessures. Première grande figure féminine de la résistance.',
        imageUrl: '/images/horoya/r3.jpg',
        caption: 'M\'Balia Camara — portrait posthume',
      },
    ],

    imageCount: 6,
  },

  // ====================================================================
  // II. LA MARCHE VERS LE CHOIX (1956-1958) — [À RÉDIGER PHASE 2]
  // ====================================================================
  {
    id: 'marche',
    number: 'II',
    name: 'La marche vers le choix',
    subtitle: 'Du compromis à la rupture',
    period: '1956 – été 1958',
    role: 'Loi-cadre, élections, débat continental — la dernière étape avant le NON',

    versions: {
      enfant: `[À RÉDIGER — Phase 2]

Trame : la loi-cadre Defferre entre en application. Les premières élections territoriales du 31 mars 1957 voient le PDG-RDA de Sékou Touré l'emporter largement (56 sièges sur 60 à l'Assemblée territoriale). Sékou Touré devient vice-président du Conseil de gouvernement. Au sein du RDA, le débat s'intensifie : faut-il accepter une autonomie progressive avec la France (position d'Houphouët-Boigny) ou aller vers l'indépendance ? À Bamako, en septembre 1957, puis à Cotonou en juillet 1958, les positions se durcissent. L'été 1958, le retour au pouvoir du général de Gaulle change la donne : il propose un référendum sur la Communauté française. Voter OUI = autonomie dans la Communauté. Voter NON = indépendance immédiate, hors de la Communauté.`,

      adulte: `[À RÉDIGER — Phase 2]

Couvrir : application de la loi-cadre en territoire guinéen ; élections territoriales du 31 mars 1957 et raz-de-marée du PDG-RDA (56 sièges sur 60) ; entrée de Sékou Touré au Conseil de gouvernement comme vice-président aux côtés du gouverneur Jean Ramadier ; congrès de Bamako (septembre 1957) puis de Cotonou (juillet 1958) où s'affrontent les lignes Houphouët-Boigny (intégration fédérale) et Sékou Touré (indépendance) ; retour de De Gaulle et proposition du référendum sur la Communauté française (projet de Constitution du 4 septembre 1958) ; positionnement des autres partis guinéens (BAG de Diawadou Barry, DSG de Barry III) qui finiront par se rallier au NON. Mentionner Saïfoulaye Diallo, Béavogui, et la place des syndicalistes dans la mobilisation.`,
    },

    jalons: [
      {
        id: 'm1',
        title: 'La loi-cadre Defferre',
        date: '23 juin 1956',
        description: 'Adoption à Paris de la loi qui dote chaque territoire africain d\'un Conseil de gouvernement élu et d\'une autonomie administrative significative.',
        imageUrl: '/images/horoya/m1.jpg',
        caption: 'L\'Assemblée nationale française vote la loi-cadre',
      },
      {
        id: 'm2',
        title: 'Élections territoriales',
        date: '31 mars 1957',
        description: 'Premier scrutin au suffrage universel en Guinée : le PDG-RDA remporte 56 sièges sur 60 à l\'Assemblée territoriale. Sékou Touré devient vice-président du Conseil de gouvernement.',
        imageUrl: '/images/horoya/m2.jpg',
        caption: 'Bureau de vote, Conakry, mars 1957',
      },
      {
        id: 'm3',
        title: 'Houphouët / Sékou — le débat',
        date: 'Été 1958',
        description: 'Aux congrès du RDA à Bamako puis à Cotonou, deux lignes s\'affrontent : intégration fédérale avec la France (Houphouët-Boigny) ou indépendance (Sékou Touré). Le débat est public, fraternel, mais sans compromis.',
        imageUrl: '/images/horoya/m3.jpg',
        caption: 'Congrès du RDA à Cotonou, juillet 1958',
      },
    ],

    imageCount: 6,
  },

  // ====================================================================
  // III. LE MOMENT HOROYA (août-décembre 1958)
  // ====================================================================
  {
    id: 'moment',
    number: 'III',
    name: 'Le moment Horoya',
    subtitle: 'Du discours au NON, du NON à l\'État',
    period: 'Août – décembre 1958',
    role: 'Cent jours qui font une nation',

    versions: {
      enfant: `Le 25 août 1958, le général Charles de Gaulle arrive à Conakry. Il fait le tour de l'Afrique-Occidentale française pour expliquer son projet : la Communauté française. Chaque territoire votera OUI ou NON lors d'un référendum, le 28 septembre. Voter OUI, c'est rester avec la France dans une grande famille de pays autonomes. Voter NON, c'est devenir indépendant tout de suite — mais perdre l'aide française.

Au Palais du Gouvernement à Conakry, Sékou Touré prononce un discours en présence de De Gaulle. Devant les caméras du monde entier, il dit cette phrase qui restera dans toute l'Histoire : « Nous préférons la pauvreté dans la liberté à la richesse dans l'esclavage. » Le ton est ferme, sans hostilité personnelle, mais sans ambiguïté non plus. De Gaulle écoute, répond brièvement, repart.

Le 28 septembre 1958, les Guinéennes et les Guinéens votent. Le scrutin est massif. Quand on dépouille les bulletins, le résultat tombe : 95,22 % de NON. La Guinée est le seul des douze territoires d'Afrique noire française à refuser la Communauté.

Le 2 octobre 1958, depuis la Place du Palais à Conakry, l'indépendance de la République de Guinée est proclamée. Sékou Touré devient le premier président. Il n'a que 36 ans.

Mais l'aventure n'est pas finie. La France retire en quelques semaines tous ses administrateurs, ses enseignants, ses médecins, parfois même les fournitures de bureau et les lignes téléphoniques. Il faut reconstruire un pays de zéro. Heureusement, les soutiens arrivent : le Ghana de Kwame Nkrumah envoie un prêt généreux, l'URSS, la Tchécoslovaquie, la Chine populaire, le Liberia reconnaissent immédiatement le nouvel État.

Le 12 décembre 1958, la République de Guinée est admise aux Nations unies. Elle devient le 82ᵉ État membre. Le drapeau rouge-jaune-vert flotte à New York. La Guinée existe sur la carte du monde.`,

      adulte: `Le retour au pouvoir du général de Gaulle en juin 1958, dans le contexte de la crise algérienne, change la donne pour les colonies. Le projet de la Cinquième République inclut une nouvelle architecture pour l'outre-mer : la Communauté française, fédération autonome où chaque territoire pourra disposer de ses propres institutions tout en partageant avec Paris la défense, la monnaie, la politique étrangère et certaines fonctions régaliennes. Un référendum est convoqué pour le 28 septembre 1958 : approuver ou refuser la nouvelle Constitution. Un OUI vaudra adhésion à la Communauté ; un NON sera interprété comme une volonté d'indépendance immédiate, hors de toute coopération privilégiée.

Le 25 août 1958, De Gaulle arrive à Conakry au cours d'une tournée africaine. Devant l'Assemblée territoriale réunie au Palais, Sékou Touré, vice-président du Conseil de gouvernement, prononce le discours d'accueil. Le ton est respectueux, mais le propos est ferme : la Guinée veut son indépendance. Sékou Touré prononce alors la formule qui entrera dans toutes les anthologies politiques du XXᵉ siècle : « Nous préférons la pauvreté dans la liberté à la richesse dans l'esclavage. » De Gaulle, visiblement agacé, répond avec retenue, écourte sa visite et repart pour Dakar. L'épisode marque une rupture personnelle qui pèsera lourdement sur les relations franco-guinéennes pendant deux décennies.

La campagne référendaire est brève mais intense. Le PDG-RDA, structuré et discipliné, mobilise ses militants jusque dans les villages les plus reculés. Les partis d'opposition guinéens — le Bloc Africain de Guinée de Diawadou Barry, la Démocratie Socialiste de Guinée de Barry III — se rallient au NON, soit par conviction, soit pour ne pas se couper de la dynamique populaire. Au sein du gouvernement local, Saïfoulaye Diallo et Louis Lansana Béavogui prennent une part active à la mobilisation. Mafory Bangoura, dirigeante des femmes du PDG, sillonne les marchés et porte la parole du NON dans les milieux féminins.

Le 28 septembre 1958, le scrutin se tient. La participation est exceptionnellement élevée. Au dépouillement, 1 136 324 électeurs ont voté NON, 56 981 ont voté OUI — soit 95,22 % de NON. Sur les douze territoires d'Afrique noire française appelés à se prononcer, la Guinée est le seul à refuser la Communauté. Tous les autres — Sénégal, Soudan français, Côte d'Ivoire, Haute-Volta, Niger, Dahomey, Mauritanie, et les quatre territoires d'AEF — votent OUI à de larges majorités.

Le 2 octobre 1958, à 17 heures, depuis la Place du Palais à Conakry, l'indépendance de la République de Guinée est proclamée. L'Assemblée territoriale se constitue en Assemblée nationale constituante. Sékou Touré, 36 ans, devient président de la République. Une Constitution provisoire est adoptée. Un gouvernement est formé.

La réponse française est immédiate et brutale. Dans les semaines qui suivent, l'administration française retire ses cadres, ses enseignants, ses médecins, ses techniciens. Des archives sont emportées, des installations partiellement démontées, des liaisons téléphoniques coupées. Cette politique, parfois décrite comme « le sabotage », laisse le jeune État dans une situation matérielle extrêmement difficile. Mais les soutiens internationaux affluent : le Ghana de Kwame Nkrumah accorde un prêt de dix millions de livres ; l'URSS, la Tchécoslovaquie, la République populaire de Chine, le Liberia, l'Égypte de Nasser reconnaissent rapidement le nouvel État. Une coopération technique se met en place.

Le 12 décembre 1958, la République de Guinée est admise à l'Organisation des Nations unies, comme 82ᵉ État membre. Le drapeau rouge-jaune-vert — choisi en référence aux couleurs panafricaines déjà arborées par le Ghana — flotte sur l'East River. La Guinée prend sa place dans le concert des nations. Cent jours après le discours du 25 août, le pays a basculé.`,
    },

    jalons: [
      {
        id: 'h1',
        title: 'Le discours à De Gaulle',
        date: '25 août 1958',
        description: 'À Conakry, devant l\'Assemblée territoriale réunie en présence du général de Gaulle, Sékou Touré prononce la phrase qui restera : « Nous préférons la pauvreté dans la liberté à la richesse dans l\'esclavage. »',
        imageUrl: '/images/horoya/h1.jpg',
        caption: 'Sékou Touré au Palais du Gouvernement, 25 août 1958',
        source: 'Archives audiovisuelles ORTF / RTG',
      },
      {
        id: 'h2',
        title: 'Le référendum',
        date: '28 septembre 1958',
        description: '1 136 324 NON contre 56 981 OUI — soit 95,22 % de refus de la Communauté française. La Guinée est le seul des douze territoires d\'AOF et AEF à voter NON.',
        imageUrl: '/images/horoya/h2.jpg',
        caption: 'Bureau de vote, septembre 1958',
      },
      {
        id: 'h3',
        title: 'Proclamation de la République',
        date: '2 octobre 1958',
        description: 'À 17 heures, depuis la Place du Palais à Conakry, l\'indépendance est proclamée. Sékou Touré, 36 ans, devient président. Constitution provisoire, gouvernement formé. Le pays existe.',
        imageUrl: '/images/horoya/h3.jpg',
        caption: 'Foule sur la Place du Palais, 2 octobre 1958',
      },
      {
        id: 'h4',
        title: 'Admission à l\'ONU',
        date: '12 décembre 1958',
        description: 'La République de Guinée devient le 82ᵉ État membre des Nations unies. Le drapeau rouge-jaune-vert flotte à New York. La reconnaissance internationale est acquise.',
        imageUrl: '/images/horoya/h4.jpg',
        caption: 'Cérémonie au siège de l\'ONU, New York, décembre 1958',
      },
    ],

    imageCount: 8,
  },

  // ====================================================================
  // IV. CONSTRUIRE UN ÉTAT (1959-1960) — [À RÉDIGER PHASE 2]
  // ====================================================================
  {
    id: 'construire',
    number: 'IV',
    name: 'Construire un État',
    subtitle: 'Institutions, monnaie, place dans le monde',
    period: '1959 – 1960',
    role: 'D\'un pays proclamé à un pays gouverné',

    versions: {
      enfant: `[À RÉDIGER — Phase 2]

Trame : adoption de la Constitution définitive du 10 novembre 1958. Premier gouvernement complet : Sékou Touré président, Saïfoulaye Diallo président de l'Assemblée nationale, Louis Lansana Béavogui aux affaires économiques, Diallo Telli aux Affaires étrangères. Mise en place de l'administration : remplacer en quelques mois les cadres français partis. Création d'une école nationale d'administration. Politique d'africanisation des cadres. Sur le plan international : adhésion à l'Union Ghana-Guinée (novembre 1958) puis Union Ghana-Guinée-Mali. Tournée diplomatique mondiale (URSS, Chine, États-Unis, Yougoslavie). 1er mars 1960 : sortie de la zone franc, création du franc guinéen — souveraineté monétaire complète.`,

      adulte: `[À RÉDIGER — Phase 2]

Couvrir en profondeur : Constitution du 10 novembre 1958 (régime présidentiel, parti unique de fait dès l'origine, articulation État-PDG) ; premier gouvernement et profil des ministres (Saïfoulaye Diallo, Béavogui, Diallo Telli, Mamadou Touré, Keita Fodéba) ; chantier de l'administration (africanisation accélérée, École nationale d'administration créée en 1959, recrutement de cadres formés en URSS, en Tchécoslovaquie, au Ghana) ; politique panafricaine (Union Ghana-Guinée 1er mai 1959, élargie au Mali en décembre 1960) ; tournées diplomatiques de Sékou Touré (Washington octobre 1959 — accueil par Eisenhower, voyage en URSS, en Chine, en Yougoslavie) ; sortie de la zone franc le 1er mars 1960 et création du franc guinéen, geste souverain majeur mais qui pèsera économiquement ; tensions naissantes (premier "complot" en novembre 1960 — annonciateur du tournant autoritaire ultérieur, à mentionner sans le développer car hors période). Honorer les figures secondaires : Jeanne Martin Cissé (à l'époque encore enseignante, ne deviendra leader plus tard), Mafory Bangoura à la tête des femmes, Loffo Camara.`,
    },

    jalons: [
      {
        id: 'c1',
        title: 'La Constitution',
        date: '10 novembre 1958',
        description: 'Adoption de la Constitution définitive : régime présidentiel, articulation État-parti, drapeau et hymne nationaux fixés.',
        imageUrl: '/images/horoya/c1.jpg',
        caption: 'L\'Assemblée nationale constituante, automne 1958',
      },
      {
        id: 'c2',
        title: 'Union Ghana-Guinée',
        date: '1ᵉʳ mai 1959',
        description: 'Sékou Touré et Kwame Nkrumah signent à Conakry l\'acte d\'union des deux jeunes États indépendants. Première pierre du panafricanisme institutionnel.',
        imageUrl: '/images/horoya/c2.jpg',
        caption: 'Sékou Touré et Kwame Nkrumah, Conakry, mai 1959',
      },
      {
        id: 'c3',
        title: 'Le franc guinéen',
        date: '1ᵉʳ mars 1960',
        description: 'La Guinée quitte la zone franc et émet sa propre monnaie. Geste de souveraineté complète. Le pays imprime son histoire, jusque sur ses billets.',
        imageUrl: '/images/horoya/c3.jpg',
        caption: 'Premiers billets du franc guinéen, 1960',
      },
    ],

    imageCount: 6,
  },
];

export default horoyaChapitres;
