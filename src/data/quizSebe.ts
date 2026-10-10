// Sèbè — le jeu littéraire guinéen
// Pool pilote : 50 questions, toutes maîtrisées. Strate « encyclopedies » = pages publiques du site. Schéma figé pour démultiplier sans refonte.
// Tirage : voir tirerPartie() en bas de fichier.

export type SebeType =
  | 'qcm'          // question classique
  | 'ouverture'    // scène d'ouverture décrite → trouver l'œuvre
  | 'qui-parle'    // personnage décrit → trouver l'œuvre
  | 'chronologie'  // 3 œuvres → bon ordre de parution
  | 'intrus'       // 4 noms/titres → lequel n'est pas guinéen / pas de l'auteur
  | 'mot-manquant' // titre à trou
  | 'portrait';    // bio en 2 lignes → trouver l'auteur

export type SebeStrate = 'fondateurs' | 'contemporains' | 'oralite' | 'encyclopedies';

export interface SebeQuestion {
  id: string;
  type: SebeType;
  strate: SebeStrate;
  auteur: string;          // clé de diversité (jamais 2 consécutives sur le même auteur)
  difficulte: 1 | 2 | 3;   // 1 facile, 2 moyen, 3 difficile
  question: string;
  choix: [string, string, string, string];
  reponse: 0 | 1 | 2 | 3;  // index dans choix
  fiche: string;           // 2 lignes révélées après réponse
  route?: string;          // page publique à ouvrir après la réponse (encyclopédies)
}

export const QUIZ_SEBE: SebeQuestion[] = [
  // ─────────────── FONDATEURS ───────────────
  {
    id: 'f01', type: 'qcm', strate: 'fondateurs', auteur: 'Camara Laye', difficulte: 1,
    question: 'Qui a écrit « L\'Enfant noir » ?',
    choix: ['Camara Laye', 'Williams Sassine', 'Djibril Tamsir Niane', 'Tierno Monénembo'],
    reponse: 0,
    fiche: 'Publié à Paris en 1953, « L\'Enfant noir » raconte l\'enfance de l\'auteur à Kouroussa. C\'est le roman guinéen le plus lu au monde.',
  },
  {
    id: 'f02', type: 'ouverture', strate: 'fondateurs', auteur: 'Camara Laye', difficulte: 1,
    question: 'Un petit garçon joue près de la case de son père, forgeron-orfèvre, et croise un petit serpent noir que personne ne doit tuer. Quel roman s\'ouvre ainsi ?',
    choix: ['Le Regard du roi', 'L\'Enfant noir', 'Dramouss', 'Les Crapauds-brousse'],
    reponse: 1,
    fiche: 'Le serpent noir est le génie protecteur du père. Toute la première partie du livre tourne autour de l\'atelier, de l\'or et des rites de Kouroussa.',
  },
  {
    id: 'f03', type: 'qcm', strate: 'fondateurs', auteur: 'Camara Laye', difficulte: 2,
    question: 'Dans quelle ville de Haute-Guinée Camara Laye est-il né et a-t-il grandi ?',
    choix: ['Kankan', 'Siguiri', 'Kouroussa', 'Dabola'],
    reponse: 2,
    fiche: 'Né à Kouroussa en 1928, mort à Dakar en 1980. Il a quitté la Guinée à la fin des années 1960, en désaccord avec le régime.',
  },
  {
    id: 'f04', type: 'qui-parle', strate: 'fondateurs', auteur: 'Camara Laye', difficulte: 2,
    question: 'Clarence, un Blanc ruiné, erre dans une Afrique de rêve pour rencontrer un roi qui ne vient jamais. Quel roman ?',
    choix: ['Le Regard du roi', 'Le Cercle des tropiques', 'Wirriyamu', 'Le Maître de la parole'],
    reponse: 0,
    fiche: '« Le Regard du roi » (1954) renverse les rôles : c\'est l\'Européen qui est perdu et doit apprendre. Le livre le plus mystique de Camara Laye.',
  },
  {
    id: 'f05', type: 'qcm', strate: 'fondateurs', auteur: 'Camara Laye', difficulte: 3,
    question: 'Le dernier livre de Camara Laye, « Le Maître de la parole » (1978), transcrit un récit traditionnel. Lequel ?',
    choix: ['La fondation du Fouta-Djalon', 'L\'épopée de Soundjata', 'La légende de Kéléya Kanko', 'Les guerres de Samory'],
    reponse: 1,
    fiche: 'Camara Laye a recueilli l\'épopée auprès du griot Babou Condé. Le sous-titre du livre est « Kouma Lafôlô Kouma ».',
  },
  {
    id: 'f06', type: 'chronologie', strate: 'fondateurs', auteur: 'Camara Laye', difficulte: 2,
    question: 'Remets ces trois romans de Camara Laye dans l\'ordre de parution.',
    choix: [
      'L\'Enfant noir → Le Regard du roi → Dramouss',
      'Dramouss → L\'Enfant noir → Le Regard du roi',
      'Le Regard du roi → L\'Enfant noir → Dramouss',
      'L\'Enfant noir → Dramouss → Le Regard du roi',
    ],
    reponse: 0,
    fiche: '1953, 1954, 1966. « Dramouss » marque la rupture de l\'auteur avec la Guinée de l\'époque.',
  },
  {
    id: 'f07', type: 'qcm', strate: 'fondateurs', auteur: 'Djibril Tamsir Niane', difficulte: 1,
    question: 'Qui a écrit « Soundjata ou l\'épopée mandingue » (1960) ?',
    choix: ['Djibril Tamsir Niane', 'Camara Laye', 'Fodéba Keïta', 'Alioum Fantouré'],
    reponse: 0,
    fiche: 'Historien né à Conakry en 1932, D. T. Niane a mis par écrit l\'épopée telle que la racontait un griot. Le livre est étudié dans toute l\'Afrique de l\'Ouest.',
  },
  {
    id: 'f08', type: 'qcm', strate: 'fondateurs', auteur: 'Djibril Tamsir Niane', difficulte: 2,
    question: 'Auprès de quel griot D. T. Niane a-t-il recueilli l\'épopée de Soundjata ?',
    choix: ['Babou Condé', 'Mamadou Kouyaté', 'Sory Kandia Kouyaté', 'Djeli Moussa Diawara'],
    reponse: 1,
    fiche: 'Mamadou Kouyaté, griot de Djéliba Koro, ouvre le livre en se présentant : il est le gardien de la parole de ses ancêtres.',
  },
  {
    id: 'f09', type: 'qui-parle', strate: 'fondateurs', auteur: 'Djibril Tamsir Niane', difficulte: 1,
    question: 'Un enfant qui ne marche pas, moqué par la première épouse de son père, se relève un jour en arrachant un baobab. Qui est-il ?',
    choix: ['Samory Touré', 'Soumaoro Kanté', 'Soundjata Keïta', 'Fakoli'],
    reponse: 2,
    fiche: 'Sogolon Djata, fils de la femme-buffle, deviendra le fondateur de l\'empire du Mali après la bataille de Kirina (1235).',
    route: '/charte',
  },
  {
    id: 'f10', type: 'qcm', strate: 'fondateurs', auteur: 'Fodéba Keïta', difficulte: 2,
    question: 'Fodéba Keïta, poète et ministre, est aussi le fondateur d\'une troupe mondialement connue. Laquelle ?',
    choix: ['Le Bembeya Jazz National', 'Les Ballets Africains', 'Le Syli Orchestre', 'Les Amazones de Guinée'],
    reponse: 1,
    fiche: 'Né à Siguiri en 1921, Fodéba Keïta crée les Ballets Africains à Paris au début des années 1950. Il meurt au camp Boiro en 1969.',
  },
  {
    id: 'f11', type: 'mot-manquant', strate: 'fondateurs', auteur: 'Fodéba Keïta', difficulte: 2,
    question: 'Complète le titre du poème le plus célèbre de Fodéba Keïta : « ___ africaine ».',
    choix: ['Nuit', 'Aube', 'Terre', 'Voix'],
    reponse: 1,
    fiche: '« Aube africaine » raconte un tirailleur rentré au pays et tué au camp de Thiaroye. Le texte fut interdit en AOF par l\'administration coloniale.',
  },
  {
    id: 'f12', type: 'portrait', strate: 'fondateurs', auteur: 'Williams Sassine', difficulte: 2,
    question: 'Né à Kankan en 1944 d\'un père libanais, professeur de mathématiques, exilé puis revenu à Conakry où il meurt en 1997. Qui est-ce ?',
    choix: ['Alioum Fantouré', 'Williams Sassine', 'Saïdou Bokoum', 'Émile Cissé'],
    reponse: 1,
    fiche: 'Williams Sassine est l\'écrivain de la marge : ses héros sont des ratés magnifiques. Ses chroniques dans « Le Lynx » ont marqué les années 1990.',
  },
  {
    id: 'f13', type: 'qui-parle', strate: 'fondateurs', auteur: 'Williams Sassine', difficulte: 2,
    question: 'Un vieil instituteur mis à la retraite ouvre sa propre école pour les enfants pauvres. Quel roman de Williams Sassine ?',
    choix: ['Wirriyamu', 'Le Jeune Homme de sable', 'Saint Monsieur Baly', 'Le Zéhéros n\'est pas n\'importe qui'],
    reponse: 2,
    fiche: '« Saint Monsieur Baly » (1973) est le premier roman de Sassine. Baly est un saint sans religion : il veut juste enseigner.',
  },
  {
    id: 'f14', type: 'mot-manquant', strate: 'fondateurs', auteur: 'Williams Sassine', difficulte: 3,
    question: 'Complète ce titre de Williams Sassine : « Le ___ n\'est pas n\'importe qui ».',
    choix: ['Héros', 'Zéro', 'Zéhéros', 'Zorro'],
    reponse: 2,
    fiche: 'Mot-valise entre zéro et héros : Camara, le narrateur, rentre au pays après vingt ans d\'exile et ne comprend plus rien. Paru en 1985.',
  },
  {
    id: 'f15', type: 'qcm', strate: 'fondateurs', auteur: 'Williams Sassine', difficulte: 3,
    question: 'Quel roman de Sassine se passe dans un village du Mozambique colonisé, au moment d\'un massacre ?',
    choix: ['Wirriyamu', 'Mémoire d\'une peau', 'Saint Monsieur Baly', 'L\'Alphabête'],
    reponse: 0,
    fiche: '« Wirriyamu » (1976) part d\'un fait réel : le massacre d\'un village mozambicain par l\'armée portugaise en 1972.',
  },
  {
    id: 'f16', type: 'qcm', strate: 'fondateurs', auteur: 'Alioum Fantouré', difficulte: 2,
    question: '« Le Cercle des tropiques » (1972) d\'Alioum Fantouré se déroule dans un pays imaginaire. Comment s\'appelle-t-il ?',
    choix: ['Les Marigots du Sud', 'La Côte des Esclaves', 'Le Pays des Mille Collines', 'Katamalanasie'],
    reponse: 0,
    fiche: 'Le dictateur Baré Koulé y règne par la peur. Le roman a reçu le Grand prix littéraire de l\'Afrique noire en 1973.',
  },
  {
    id: 'f18', type: 'intrus', strate: 'fondateurs', auteur: 'Camara Laye', difficulte: 2,
    question: 'Un de ces titres n\'est pas de Camara Laye. Lequel ?',
    choix: ['Dramouss', 'Le Regard du roi', 'Chaîne', 'Le Maître de la parole'],
    reponse: 2,
    fiche: '« Chaîne » (1974) est le roman de Saïdou Bokoum : un étudiant guinéen à Paris, entre révolte et désespoir.',
  },
  {
    id: 'f20', type: 'qcm', strate: 'fondateurs', auteur: 'Camara Laye', difficulte: 2,
    question: 'Quel prix « L\'Enfant noir » a-t-il reçu en 1954 ?',
    choix: ['Prix Goncourt', 'Prix Renaudot', 'Prix Charles Veillon', 'Grand prix littéraire de l\'Afrique noire'],
    reponse: 2,
    fiche: 'Le prix Charles Veillon est un prix suisse. Le Grand prix de l\'Afrique noire n\'existait pas encore ; il sera créé en 1960.',
  },
  {
    id: 'f21', type: 'chronologie', strate: 'fondateurs', auteur: 'divers', difficulte: 3,
    question: 'Remets dans l\'ordre de parution : « Soundjata » (Niane), « L\'Enfant noir » (Laye), « Le Cercle des tropiques » (Fantouré).',
    choix: [
      'Soundjata → L\'Enfant noir → Le Cercle des tropiques',
      'L\'Enfant noir → Soundjata → Le Cercle des tropiques',
      'L\'Enfant noir → Le Cercle des tropiques → Soundjata',
      'Le Cercle des tropiques → L\'Enfant noir → Soundjata',
    ],
    reponse: 1,
    fiche: '1953, 1960, 1972. Trois décennies, trois manières d\'écrire la Guinée : l\'enfance, l\'épopée, la dictature.',
  },

  // ─────────────── CONTEMPORAINS ───────────────
  {
    id: 'c01', type: 'qcm', strate: 'contemporains', auteur: 'Tierno Monénembo', difficulte: 1,
    question: 'Quel écrivain guinéen a reçu le prix Renaudot en 2008 ?',
    choix: ['Tierno Monénembo', 'Williams Sassine', 'Libar Fofana', 'Hakim Bah'],
    reponse: 0,
    fiche: 'Pour « Le Roi de Kahel ». Né Thierno Saïdou Diallo à Porédaka en 1947, Monénembo est le romancier guinéen vivant le plus traduit.',
  },
  {
    id: 'c02', type: 'qui-parle', strate: 'contemporains', auteur: 'Tierno Monénembo', difficulte: 2,
    question: 'Un aventurier français du XIXᵉ siècle rêve de devenir roi au Fouta-Djalon et d\'y construire un chemin de fer. Quel roman ?',
    choix: ['Peuls', 'Le Roi de Kahel', 'Le Terroriste noir', 'Les Écailles du ciel'],
    reponse: 1,
    fiche: 'Aimé Olivier de Sanderval a vraiment existé. Monénembo en fait un personnage à la fois ridicule et fascinant.',
  },
  {
    id: 'c03', type: 'qcm', strate: 'contemporains', auteur: 'Tierno Monénembo', difficulte: 2,
    question: 'Quel est le premier roman de Tierno Monénembo, paru en 1979 ?',
    choix: ['Les Écailles du ciel', 'Cinéma', 'Les Crapauds-brousse', 'Bled'],
    reponse: 2,
    fiche: '« Les Crapauds-brousse » décrit un pays étouffé par un régime de peur. L\'auteur avait quitté la Guinée dix ans plus tôt, en 1969.',
  },
  {
    id: 'c04', type: 'qui-parle', strate: 'contemporains', auteur: 'Tierno Monénembo', difficulte: 3,
    question: 'Addi Bâ, tirailleur guinéen, organise un maquis dans les Vosges pendant l\'Occupation. Quel roman ?',
    choix: ['Le Terroriste noir', 'L\'Aîné des orphelins', 'Peuls', 'Saharienne indigo'],
    reponse: 0,
    fiche: '« Le Terroriste noir » (2012) s\'appuie sur une histoire vraie : Addi Bâ fut fusillé par les Allemands en 1943 et honoré en France bien plus tard.',
  },
  {
    id: 'c05', type: 'chronologie', strate: 'contemporains', auteur: 'Tierno Monénembo', difficulte: 3,
    question: 'Remets ces romans de Monénembo dans l\'ordre de parution.',
    choix: [
      'Peuls → Le Roi de Kahel → Le Terroriste noir',
      'Le Roi de Kahel → Peuls → Le Terroriste noir',
      'Le Terroriste noir → Peuls → Le Roi de Kahel',
      'Peuls → Le Terroriste noir → Le Roi de Kahel',
    ],
    reponse: 0,
    fiche: '2004, 2008, 2012. Trois romans où l\'auteur revient vers l\'histoire des siens, après les livres de l\'exil.',
  },
  {
    id: 'c06', type: 'qcm', strate: 'contemporains', auteur: 'Tierno Monénembo', difficulte: 2,
    question: '« L\'Aîné des orphelins » (2000) de Monénembo se passe dans un autre pays africain, après un génocide. Lequel ?',
    choix: ['Le Rwanda', 'Le Burundi', 'Le Congo', 'Le Soudan'],
    reponse: 0,
    fiche: 'Écrit dans le cadre du projet « Rwanda : écrire par devoir de mémoire ». Le narrateur, Faustin, a quinze ans et attend d\'être exécuté.',
  },
  {
    id: 'c09', type: 'portrait', strate: 'contemporains', auteur: 'Tierno Monénembo', difficulte: 2,
    question: 'Docteur en biochimie, exilé en 1969, il a enseigné au Maroc et en Algérie avant de vivre de sa plume. Il est revenu s\'installer à Conakry. Qui est-ce ?',
    choix: ['Alioum Fantouré', 'Tierno Monénembo', 'Djibril Tamsir Niane', 'Libar Fofana'],
    reponse: 1,
    fiche: 'Son vrai nom est Thierno Saïdou Diallo. « Monénembo » est un nom de plume.',
  },
  {
    id: 'c10', type: 'intrus', strate: 'contemporains', auteur: 'Tierno Monénembo', difficulte: 2,
    question: 'Un de ces titres n\'est pas de Tierno Monénembo. Lequel ?',
    choix: ['Cinéma', 'Bled', 'Le Jeune Homme de sable', 'Saharienne indigo'],
    reponse: 2,
    fiche: '« Le Jeune Homme de sable » (1979) est de Williams Sassine. Même année que « Les Crapauds-brousse » — l\'année des deux grands débuts.',
  },
  {
    id: 'c12', type: 'mot-manquant', strate: 'contemporains', auteur: 'Tierno Monénembo', difficulte: 2,
    question: 'Complète ce titre de Monénembo (2004) : « ___ », une fresque de l\'histoire de ce peuple du Fouta et du Sahel.',
    choix: ['Soussous', 'Peuls', 'Mandingues', 'Nomades'],
    reponse: 1,
    fiche: '« Peuls » retrace plusieurs siècles de migrations, de Tekrour au Fouta-Djalon, raconté par un griot facétieux.',
  },

  // ─────────────── ORALITÉ ───────────────
  {
    id: 'o01', type: 'qcm', strate: 'oralite', auteur: 'tradition mandingue', difficulte: 1,
    question: 'Comment appelle-t-on, en mandingue, le maître de la parole qui conserve et chante la mémoire des familles ?',
    choix: ['Le forgeron', 'Le djeli (griot)', 'Le marabout', 'Le sofa'],
    reponse: 1,
    fiche: 'Le djeli transmet les généalogies et les épopées. Sans lui, pas de « Soundjata » : Niane et Camara Laye ont tous deux écrit sous la dictée d\'un griot.',
  },
  {
    id: 'o02', type: 'qcm', strate: 'oralite', auteur: 'tradition mandingue', difficulte: 2,
    question: 'Quelle bataille, en 1235, voit Soundjata vaincre Soumaoro Kanté dans l\'épopée mandingue ?',
    choix: ['Kirina', 'Porédaka', 'Kankan', 'Niani'],
    reponse: 0,
    fiche: 'Kirina est le tournant de l\'épopée. Après la victoire, la charte de Kurukan Fuga organise le nouvel empire.',
    route: '/charte',
  },
  {
    id: 'o03', type: 'qui-parle', strate: 'oralite', auteur: 'tradition mandingue', difficulte: 2,
    question: 'Roi-forgeron du Sosso, maître de la sorcellerie, il ne peut être blessé que par une flèche à ergot de coq. Qui est-il ?',
    choix: ['Fakoli Doumbia', 'Naré Maghan', 'Soumaoro Kanté', 'Dankaran Touman'],
    reponse: 2,
    fiche: 'Soumaoro est le grand adversaire de Soundjata. Le balafon Sosso Bala, qui lui est associé, existe toujours à Niagassola, en Guinée.',
  },
  {
    id: 'o04', type: 'qcm', strate: 'oralite', auteur: 'tradition mandingue', difficulte: 2,
    question: 'Le Sosso Bala, balafon sacré de l\'épopée mandingue, est conservé dans quelle localité guinéenne ?',
    choix: ['Niagassola', 'Kouroussa', 'Siguiri', 'Dinguiraye'],
    reponse: 0,
    fiche: 'Inscrit par l\'UNESCO au patrimoine immatériel. La famille Dokala Kouyaté en est la gardienne depuis des siècles.',
  },
  {
    id: 'o05', type: 'qcm', strate: 'oralite', auteur: 'tradition soussou', difficulte: 1,
    question: 'Dans les contes de la Basse-Côte comme dans ceux du Fouta, quel animal joue le plus souvent le rôle du rusé ?',
    choix: ['L\'éléphant', 'Le lièvre', 'Le lion', 'La tortue'],
    reponse: 1,
    fiche: 'Le lièvre (Sari chez les Peuls) roule l\'hyène, grosse et gourmande. Un duo qu\'on retrouve dans tout le Sahel.',
  },
  {
    id: 'o06', type: 'qcm', strate: 'oralite', auteur: 'tradition peule', difficulte: 2,
    question: 'Dans les contes peuls du Fouta-Djalon, comment s\'appelle l\'hyène, éternelle dupe du lièvre ?',
    choix: ['Bono', 'Sari', 'Kini', 'Fadouba'],
    reponse: 0,
    fiche: 'Bono l\'hyène et Sari le lièvre forment le couple comique du cycle peul. Le rire sert à transmettre la règle.',
  },
  {
    id: 'o07', type: 'qcm', strate: 'oralite', auteur: 'tradition mandingue', difficulte: 3,
    question: 'Quel nom porte la mère de Soundjata, dite « la femme-buffle », dans l\'épopée ?',
    choix: ['Sassouma Bérété', 'Sogolon Kondé', 'Kéléya Kanko', 'Nana Triban'],
    reponse: 1,
    fiche: 'Sogolon, laide et bossue, porte l\'esprit du buffle du Do. Son fils en hérite la force.',
  },
  {
    id: 'o08', type: 'intrus', strate: 'oralite', auteur: 'divers', difficulte: 2,
    question: 'Un de ces quatre héros n\'appartient pas à l\'épopée de Soundjata. Lequel ?',
    choix: ['Fakoli', 'Balla Fasséké', 'Samory Touré', 'Tiramakhan Traoré'],
    reponse: 2,
    fiche: 'Samory Touré est un résistant du XIXᵉ siècle, pas un héros du XIIIᵉ. Mais il a lui aussi son épopée chantée par les griots.',
  },
  {
    id: 'o09', type: 'qcm', strate: 'oralite', auteur: 'tradition mandingue', difficulte: 2,
    question: 'Après Kirina, Soundjata réunit les clans pour proclamer une charte qui fixe les règles de l\'empire. Son nom ?',
    choix: ['La charte de Kurukan Fuga', 'La charte de Niani', 'La loi de Kangaba', 'Le serment de Tabon'],
    reponse: 0,
    fiche: 'Quarante-quatre articles transmis oralement. Inscrite par l\'UNESCO au patrimoine immatériel en 2009.',
    route: '/charte',
  },

  // ─────────────── ENCYCLOPÉDIES (pages publiques : /mansaya, /fouta, /horoya, /charte) ───────────────
  {
    id: 'e01', type: 'qcm', strate: 'encyclopedies', auteur: 'Horoya', difficulte: 1,
    question: 'Le 28 septembre 1958, un seul territoire d\'Afrique française vote NON au référendum de de Gaulle. Lequel ?',
    choix: ['Le Sénégal', 'La Guinée', 'La Côte d\'Ivoire', 'Le Soudan français'],
    reponse: 1,
    fiche: 'NON à plus de 95 %. L\'indépendance est proclamée quatre jours plus tard, le 2 octobre 1958. Toute l\'histoire est dans l\'encyclopédie HOROYA.',
    route: '/horoya',
  },
  {
    id: 'e02', type: 'mot-manquant', strate: 'encyclopedies', auteur: 'Horoya', difficulte: 2,
    question: 'Complète la phrase du 25 août 1958, prononcée devant de Gaulle à Conakry : « Nous préférons la ___ dans la liberté à la richesse dans l\'esclavage. »',
    choix: ['faim', 'pauvreté', 'guerre', 'solitude'],
    reponse: 1,
    fiche: 'Une phrase devenue texte fondateur, répétée dans les écoles comme un poème. C\'est le chapitre III de HOROYA, « Le moment Horoya ».',
    route: '/horoya',
  },
  {
    id: 'e03', type: 'qcm', strate: 'encyclopedies', auteur: 'Horoya', difficulte: 2,
    question: 'Que signifie le mot « Horoya », en soussou comme en malinké ?',
    choix: ['La patrie', 'La liberté', 'Le courage', 'L\'unité'],
    reponse: 1,
    fiche: 'Liberté, indépendance. C\'est aussi le nom du quotidien national de la Première République et d\'un grand club de football de Conakry.',
    route: '/horoya',
  },
  {
    id: 'e04', type: 'portrait', strate: 'encyclopedies', auteur: 'Horoya', difficulte: 2,
    question: 'Militante de Tondon, frappée mortellement en 1955 alors qu\'elle était enceinte, elle devient la première martyre du mouvement indépendantiste. Qui est-ce ?',
    choix: ['Mafory Bangoura', 'Loffo Camara', 'M\'Balia Camara', 'Jeanne Martin Cissé'],
    reponse: 2,
    fiche: 'M\'Balia Camara ouvre le chapitre I de HOROYA, « Les racines ». Les femmes ont porté le mouvement bien avant 1958.',
    route: '/horoya',
  },
  {
    id: 'e05', type: 'qcm', strate: 'encyclopedies', auteur: 'Horoya', difficulte: 3,
    question: 'Quelle Guinéenne fut, en 1972, la première femme à présider le Conseil de sécurité de l\'ONU ?',
    choix: ['Jeanne Martin Cissé', 'Loffo Camara', 'Mafory Bangoura', 'Hadja Andrée Touré'],
    reponse: 0,
    fiche: 'Jeanne Martin Cissé, de Kankan, figure parmi les dix Pionniers du Mémorial HOROYA. Loffo Camara, elle, fut la première femme ministre (1961).',
    route: '/horoya/memorial',
  },
  {
    id: 'e06', type: 'qcm', strate: 'encyclopedies', auteur: 'Fouta', difficulte: 2,
    question: 'Quelle bataille, en 1725, marque la naissance de l\'État théocratique du Fouta-Djalon ?',
    choix: ['Porédaka', 'Talansan', 'Kirina', 'Fougoumba'],
    reponse: 1,
    fiche: 'À Talansan, les Peuls musulmans l\'emportent. Le Fouta théocratique durera jusqu\'en 1896. Tout est dans l\'encyclopédie FOUTA.',
    route: '/fouta',
  },
  {
    id: 'e07', type: 'qcm', strate: 'encyclopedies', auteur: 'Fouta', difficulte: 2,
    question: 'Dans le Fouta théocratique, Timbo est la capitale politique. Quelle ville est la capitale religieuse, où l\'on couronne l\'Almamy ?',
    choix: ['Labé', 'Fougoumba', 'Mamou', 'Dalaba'],
    reponse: 1,
    fiche: 'Fougoumba, diwal de Fodé Séïri. Neuf provinces (diwés) se partagent les rôles : Labé décide la guerre, Bhouriya garde les sept insignes du pouvoir.',
    route: '/fouta',
  },
  {
    id: 'e08', type: 'qcm', strate: 'encyclopedies', auteur: 'Fouta', difficulte: 3,
    question: 'Parmi les sept insignes du pouvoir de l\'Almamy, gardés à Bhouriya, lequel n\'est pas un objet mais une personne ?',
    choix: ['Le sabre', 'Le tabala', 'Le griot', 'Le voile blanc'],
    reponse: 2,
    fiche: 'Sceptre, voile blanc, Coran, cheval, tabala, sabre — et le griot. La parole fait partie des attributs du pouvoir.',
    route: '/fouta',
  },
  {
    id: 'e09', type: 'qcm', strate: 'encyclopedies', auteur: 'Fouta', difficulte: 2,
    question: 'Combien de provinces (diwés) composaient la confédération du Fouta-Djalon ?',
    choix: ['4', '7', '9', '12'],
    reponse: 2,
    fiche: 'Neuf diwés depuis le congrès de Timbi-Touni (1743) : Timbo, Fougoumba, Labé, Bhouriya, Timbi-Touni, Kébali, Kolladé, Koïn, Fodé-Hadji.',
    route: '/fouta',
  },
  {
    id: 'e10', type: 'qcm', strate: 'encyclopedies', auteur: 'Mansaya', difficulte: 1,
    question: 'Dans MANSAYA, l\'encyclopédie royale, quel empire est surnommé « le Berceau de l\'Or » ?',
    choix: ['Le Mali', 'Le Songhaï', 'Le Ghana', 'Le Sosso'],
    reponse: 2,
    fiche: 'Le Ghana (Wagadou) est le premier des grands empires. L\'or qu\'il échangeait venait en bonne partie de l\'actuelle Haute-Guinée.',
    route: '/mansaya',
  },
  {
    id: 'e11', type: 'qcm', strate: 'encyclopedies', auteur: 'Mansaya', difficulte: 3,
    question: 'Chez les griots du Mandé, quel chant est réservé aux guerriers et associé à Fakoli ?',
    choix: ['Le Fassa', 'Le Djandjon', 'Le Soundiata Fassa', 'Le Lamban'],
    reponse: 1,
    fiche: 'Le Djandjon est l\'hymne des braves ; le Fassa, lui, est l\'hymne royal lié à Tiramakhan Traoré. Deux chants, deux statuts.',
    route: '/mansaya',
  },
  {
    id: 'e12', type: 'qcm', strate: 'encyclopedies', auteur: 'Charte', difficulte: 2,
    question: 'Combien d\'articles compte la charte du Mandén (Kurukan Fuga), telle que transmise par les griots ?',
    choix: ['12', '44', '99', '144'],
    reponse: 1,
    fiche: 'Quarante-quatre articles : organisation sociale, droits des personnes, environnement. Lisible article par article sur la page /charte.',
    route: '/charte',
  },
  {
    id: 'e13', type: 'chronologie', strate: 'encyclopedies', auteur: 'divers', difficulte: 3,
    question: 'Remets dans l\'ordre : la bataille de Kirina, la bataille de Talansan, le référendum du NON.',
    choix: [
      'Kirina → Talansan → NON',
      'Talansan → Kirina → NON',
      'NON → Kirina → Talansan',
      'Kirina → NON → Talansan',
    ],
    reponse: 0,
    fiche: '1235, 1725, 1958. Trois moments, trois encyclopédies : MANSAYA, FOUTA, HOROYA.',
  },
];

// ─────────────── TIRAGE STRATIFIÉ ───────────────
// 25 questions : 8 faciles → 12 moyennes → 5 difficiles
// - jamais 2 consécutives sur le même auteur
// - au moins 1 question « encyclopedies » garantie (renvoie vers une page publique)
// - exclut les ids déjà vus (localStorage côté appelant)

const COURBE: Array<[1 | 2 | 3, number]> = [[1, 8], [2, 12], [3, 5]]; // calé sur le pool 9/30/11

function melange<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

export function tirerPartie(dejaVus: Set<string> = new Set(), taille = 25): SebeQuestion[] {
  let pool = QUIZ_SEBE.filter(q => !dejaVus.has(q.id));
  if (pool.length < taille) pool = [...QUIZ_SEBE]; // pool épuisé → on recycle

  const sortie: SebeQuestion[] = [];
  let dernierAuteur = '';

  for (const [diff, n] of COURBE) {
    const candidats = melange(pool.filter(q => q.difficulte === diff && !sortie.includes(q)));
    let pris = 0;
    for (const q of candidats) {
      if (pris >= n) break;
      if (q.auteur === dernierAuteur) continue;
      sortie.push(q); dernierAuteur = q.auteur; pris++;
    }
    // complément si la contrainte auteur a trop filtré
    for (const q of candidats) {
      if (pris >= n) break;
      if (!sortie.includes(q)) { sortie.push(q); dernierAuteur = q.auteur; pris++; }
    }
  }

  // garantie encyclopédies
  if (!sortie.some(q => q.strate === 'encyclopedies')) {
    const p = melange(pool.filter(q => q.strate === 'encyclopedies'))[0];
    if (p) sortie[Math.floor(sortie.length / 2)] = p;
  }
  return sortie.slice(0, taille);
}
