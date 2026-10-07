// ════════════════════════════════════════════════════════════════
//  GINÈ — La Guinée des Pionnières
//  Une entrée par pionnière. valide:false = fiche masquée (et QR inactif).
//  L'ordre du tableau = l'ordre des panneaux de l'expo = /p/01 … /p/12
//  DÉPÔT : src/data/pionnieres.ts   (FICHIER NOUVEAU)
// ════════════════════════════════════════════════════════════════

export interface Pionniere {
  slug: string;
  nom: string;
  surnom?: string;
  dates: string;
  vivante: boolean;
  valide: boolean;
  lieu: string;
  titre: string;
  mot: string;
  photo?: string; // ex. /images/pionnieres/binta-pilote.jpg
  video?: string; // URL d'un fichier vidéo (mp4) — optionnel
  youtube?: string; // ID YouTube de la capsule (ex. youtu.be/S8Y7VXgG5iA → "S8Y7VXgG5iA")
  livre?: { titre: string; url: string };
  bio: string[];
  ouvert: string;
}

export const PIONNIERES: Pionniere[] = [
  {
    slug: "mbalia-camara", youtube: "UFAsoedpFu0", nom: "M'Balia Camara", dates: "1929 – 1955", vivante: false, valide: true,
    lieu: "Posséah, Dubréka", titre: "Première martyre de la lutte pour l'indépendance", mot: "COURAGE",
    bio: [
      "M'Balia Camara naît en 1929 à Posséah, dans la préfecture de Dubréka. Paysanne, elle n'a jamais été à l'école. Cela ne l'empêche pas de comprendre ce qui se joue autour d'elle : dans la Guinée coloniale des années 1950, les chefs de canton prélèvent l'impôt, souvent sans justice.",
      "À Tondon, elle s'engage au Rassemblement démocratique africain et prend la tête du comité des femmes. Elle parcourt les marchés et les villages, parle à celles qu'on n'écoute pas, les réunit.",
      "Le 9 février 1955, un chef de canton vient réclamer un impôt que le village estime déjà payé. Les habitants refusent. La confrontation tourne au drame : M'Balia Camara, enceinte, est frappée d'un coup de sabre. Elle meurt quelques jours plus tard.",
      "Ses funérailles rassemblent une foule immense. Sa mort devient un symbole : celui d'une femme ordinaire qui a refusé l'injustice. Trois ans plus tard, la Guinée choisit l'indépendance.",
    ],
    ouvert: "La place des femmes dans le combat pour l'indépendance.",
  },
  {
    slug: "jeanne-martin-cisse", nom: "Jeanne Martin Cissé", dates: "1926 – 2017", vivante: false, valide: true,
    lieu: "Kankan", titre: "Première femme à présider le Conseil de sécurité de l'ONU", mot: "ELLE EST GUINÉENNE",
    bio: [
      "Jeanne Martin naît en 1926 à Kankan, au bord du Milo. Brillante élève, elle part étudier à l'École normale de Rufisque, au Sénégal, qui forme alors les institutrices de toute l'Afrique occidentale française.",
      "Revenue en Guinée, elle enseigne et s'engage dans le mouvement des femmes. Quand le pays dit « Non » en 1958 et devient libre, elle fait partie de celles qui construisent le nouvel État.",
      "En 1972, alors qu'elle représente la Guinée aux Nations unies, elle devient la première femme au monde à présider le Conseil de sécurité. Elle y porte notamment la lutte contre l'apartheid.",
      "De retour au pays, elle est nommée ministre des Affaires sociales et travaille à la promotion des femmes. Elle s'éteint en 2017.",
    ],
    ouvert: "La présidence du Conseil de sécurité de l'ONU, jusque-là réservée aux hommes.",
  },
  {
    slug: "loffo-camara", nom: "Loffo Camara", dates: "1925 – 1971", vivante: false, valide: true,
    lieu: "Macenta", titre: "Première femme ministre de Guinée", mot: "PREMIÈRE",
    bio: [
      "Loffo Camara naît en 1925 dans la région de Macenta, en Guinée forestière. Sage-femme de formation, elle est aussi couturière : un métier de mains, qu'elle n'a jamais renié.",
      "Militante du mouvement des femmes, elle est nommée au gouvernement en 1961. Elle devient la première femme ministre de l'histoire de la Guinée : une femme parmi une vingtaine d'hommes sur la photo officielle.",
      "En mai 1962, à Bonn, elle est reçue lors d'une visite officielle ; une photo la montre à une machine à coudre. La Guinée parle au monde, et Loffo Camara en est une des voix.",
      "Son parcours s'interrompt brutalement en 1971.",
    ],
    ouvert: "La porte du gouvernement aux femmes guinéennes.",
  },
  {
    slug: "andree-toure", youtube: "xVotCJjZSOI", nom: "Hadja Andrée Touré", dates: "1934 – 2026", vivante: false, valide: true,
    lieu: "Macenta", titre: "Première Première dame de la Guinée indépendante", mot: "DIGNITÉ",
    bio: [
      "Andrée Kourouma naît en 1934 à Macenta. Bonne élève, elle rencontre à Kankan Ahmed Sékou Touré, qu'elle épouse en 1953.",
      "En 1958, elle devient la première Première dame du pays. Pendant vingt-six ans, elle accompagne les voyages officiels et s'engage auprès des enfants : le Jardin du 2 Octobre, à Conakry, reste associé à son nom.",
      "En 1984 s'ouvrent des années d'épreuve, loin de son pays. Elle y revient et consacre la fin de sa vie à la mémoire : elle confie ses archives en 2024.",
      "Dans ses dernières années, des gestes publics lui rendent sa dignité : l'aéroport de Conakry porte le nom d'Ahmed Sékou Touré, ses maisons de Bellevue lui sont restituées, la Villa Andrée de Faranah est réhabilitée. Elle s'éteint le 8 juillet 2026.",
    ],
    ouvert: "Le rôle de Première dame dans la Guinée indépendante, et une mémoire gardée jusqu'au bout.",
  },
  {
    slug: "rabiatou-serah-diallo", youtube: "RBGCZbJr0sA", nom: "Hadja Rabiatou Serah Diallo", dates: "1949 – 2023", vivante: false, valide: true,
    lieu: "Mamou", titre: "Première femme d'Afrique à la tête d'une centrale syndicale nationale", mot: "MARMITE",
    bio: [
      "Rabiatou Serah Diallo naît en 1949 dans la région de Mamou et s'engage très tôt dans le syndicalisme.",
      "En 2000, elle est élue secrétaire générale de la Confédération nationale des travailleurs de Guinée (CNTG) : la première femme d'Afrique à diriger une centrale syndicale nationale.",
      "En 2006 et 2007, avec les autres centrales, elle mène les grandes grèves générales. Le mot d'ordre parle à chaque famille : le prix du riz, du carburant, ce qui remplit ou vide la marmite.",
      "Elle siège à l'Organisation internationale du Travail. En 2010, elle préside le Conseil national de la Transition. Elle s'éteint en 2023.",
    ],
    ouvert: "La direction d'une centrale syndicale nationale par une femme, première sur le continent.",
  },
  {
    slug: "mafory-bangoura", youtube: "S8Y7VXgG5iA", nom: "Hadja Mafory Bangoura", dates: "v. 1910 – 1976", vivante: false, valide: true,
    lieu: "Wonkifong, Coyah", titre: "Mère de la mobilisation des femmes pour l'indépendance", mot: "PREMIÈRE FEMME",
    bio: [
      "Mafory Bangoura naît vers 1910 à Wonkifong, dans la préfecture de Coyah. Elle n'a pas été à l'école. Installée à Conakry, elle est couturière : son atelier est aussi un lieu où les femmes se parlent.",
      "En 1953, elle devient présidente du comité des femmes du Rassemblement démocratique africain. Pendant la grande grève, elle mobilise les femmes de Conakry, souvent seule femme debout parmi les hommes.",
      "Après l'indépendance, elle reste l'une des voix les plus écoutées du mouvement des femmes. En 1970, elle est nommée ministre des Affaires sociales.",
      "Elle s'éteint en 1976. Son visage figurera sur le billet de 1 syli émis en 1981.",
    ],
    ouvert: "La mobilisation des femmes comme force politique de l'indépendance.",
  },
  {
    slug: "binta-pilote", youtube: "93Hge4VQS98", nom: "Fatoumata Binta Diallo", surnom: "Binta Pilote", dates: "1949 – 2020", vivante: false, valide: true,
    lieu: "Pounthioun, Labé", titre: "Première femme pilote d'hélicoptère d'Afrique noire", mot: "DEVENIR PILOTE",
    livre: { titre: "Binta Diallo — La Dame Oiseau", url: "/binta-diallo" },
    bio: [
      "Fatoumata Binta Diallo naît en 1949 dans la région de Labé, au Fouta-Djalon. Enfant, elle regarde le ciel. Adulte, elle décide d'y monter.",
      "Au début des années 1970, elle part se former à l'aviation en Union soviétique. En 1974, elle obtient son brevet : première femme pilote d'hélicoptère de Guinée, et l'une des toutes premières d'Afrique subsaharienne.",
      "De retour au pays, elle pilote les vols officiels et transporte des chefs d'État en visite. On l'appelle désormais « Binta Pilote ».",
      "Colonelle de l'armée de l'air, elle siège aussi à l'Assemblée nationale. Elle s'éteint le 29 avril 2020.",
    ],
    ouvert: "Le cockpit, jusque-là réservé aux hommes.",
  },
  {
    slug: "djene-keita", youtube: "2Ss4jRDrPdM", nom: "Djènè Keïta", dates: "née en 1964", vivante: true, valide: true,
    lieu: "", titre: "Première Guinéenne à diriger une agence des Nations unies", mot: "PREMIÈRE GUINÉENNE",
    bio: [
      "Djènè Keïta est docteure en droit de l'Université Paris 1 Panthéon-Sorbonne, spécialiste de l'économie internationale et du droit du développement.",
      "En 1990, elle entre au Programme des Nations unies pour le développement. Du Niger au Burundi, d'Haïti au Burkina Faso, elle travaille pour le développement humain, puis représente le Fonds des Nations unies pour la population dans plusieurs pays d'Afrique.",
      "En 2018, elle revient servir la Guinée comme ministre de la Coopération et de l'Intégration africaine.",
      "En 2025, elle est nommée Directrice exécutive de l'UNFPA, avec rang de Secrétaire générale adjointe des Nations unies.",
    ],
    ouvert: "La direction d'une agence onusienne par une Guinéenne.",
  },
  {
    slug: "mariama-sow", youtube: "Ozv0j2FKkD8", nom: "Hadja Mariama Sow", dates: "née en 1942", vivante: true, valide: true,
    lieu: "Tountouroun, Labé", titre: "Parmi les 1 000 femmes proposées au prix Nobel de la paix", mot: "DOUZE ANS",
    bio: [
      "Mariama Sow naît en 1942 à Tountouroun, près de Labé. Elle devient enseignante à Conakry.",
      "En 1972, elle entre à l'Assemblée nationale, où elle siège douze ans. Elle est secrétaire générale de l'Union des femmes révolutionnaires, puis la première présidente de l'Association des femmes d'Afrique de l'Ouest.",
      "En 2005, elle figure parmi les « 1 000 femmes pour le prix Nobel de la paix ».",
      "Depuis 2017, elle préside l'organisation qui rassemble les leaders religieux de Guinée, au service du dialogue et de la paix.",
    ],
    ouvert: "Une présence durable des femmes dans l'hémicycle et les instances de paix.",
  },
  {
    slug: "aicha-bah", youtube: "6w0WvHyyfac", nom: "Hadja Aïcha Bah", dates: "née en 1942", vivante: true, valide: true,
    lieu: "Kouroussa", titre: "La ministre qui a doublé le nombre de filles à l'école", mot: "DOUBLE",
    bio: [
      "Aïcha Bah naît en 1942 à Kouroussa, en Haute-Guinée. Professeure, elle dirige le lycée de Conakry de 1966 à 1984 : des générations d'élèves passent entre ses mains.",
      "De 1989 à 1996, elle est ministre de l'Éducation. Sous son mandat, le nombre de filles scolarisées double, d'environ 113 000 à 233 000.",
      "En 1992, elle participe à la fondation du Forum des éducatrices africaines (FAWE). De 1996 à 2005, elle occupe de hautes fonctions à l'UNESCO.",
    ],
    ouvert: "Les portes de l'école à des dizaines de milliers de filles guinéennes.",
  },
  {
    slug: "josephine-guilao", nom: "Joséphine Lenaud Guilao", dates: "", vivante: true, valide: false,
    lieu: "", titre: "Une femme de dialogue", mot: "DIALOGUE",
    bio: [
      "Joséphine Lenaud Guilao commence sa vie professionnelle comme institutrice, puis dirige le syndicat national des enseignants.",
      "De 1994 à 1996, elle est ministre du Travail. Elle siège aussi au Conseil économique et social.",
      "Là où les positions se durcissent, elle cherche ce qui permet de se parler encore. En 2022, elle est facilitatrice du dialogue inclusif national.",
    ],
    ouvert: "La place des femmes dans le dialogue social et politique.",
  },
  {
    slug: "hawa-drame", nom: "Hawa Dramé", dates: "", vivante: true, valide: false,
    lieu: "Conakry", titre: "Fondatrice de FITIMA", mot: "DEBOUT",
    bio: [
      "Hawa Dramé grandit à Conakry, dans le quartier de Boulbinet.",
      "En 2003, elle fonde au Burkina Faso la Fondation internationale Tierno et Mariam (FITIMA), qui accompagne les enfants atteints de maladies neuromusculaires et leurs familles. En 2010, la fondation s'installe en Guinée.",
      "Rééducation, suivi, sensibilisation : FITIMA aide des enfants à se tenir debout, à aller à l'école, à être vus.",
    ],
    ouvert: "Une place aux enfants handicapés, là où on ne les attendait pas.",
  },
];

export const PIONNIERES_VISIBLES = PIONNIERES.filter((p) => p.valide);

/** QR des panneaux : /p/01 → 1re pionnière du tableau, etc. */
export function slugDepuisNumero(n: string | undefined): string | null {
  const i = Number(n) - 1;
  const p = PIONNIERES[i];
  return p && p.valide ? p.slug : null;
}
