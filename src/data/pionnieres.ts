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
  chapeau: string; // mini-bio affichée au survol sur l'accueil (~30 mots)
  bio: string[];          // « L'essentiel » : bio courte (4 paragraphes environ)
  parcours?: string[];    // « Le parcours complet » : bio longue (~800 mots), optionnelle
  sources?: Source[];     // Sources et lectures (affichées sous la bio)
  themes: string[];       // sert à proposer « À découvrir aussi »
  ouvert: string;
}

export interface Source {
  titre: string;
  auteur?: string;
  editeur?: string;
  annee?: string;
  url?: string;
}

export const PIONNIERES: Pionniere[] = [
  {
    slug: "mbalia-camara", photo: "/images/pionnieres/mbalia-camara.jpg", youtube: "UFAsoedpFu0", nom: "M'Balia Camara", dates: "1929 – 1955", vivante: false, valide: true,
    lieu: "Posséah, Dubréka", titre: "Première martyre de la lutte pour l'indépendance", mot: "COURAGE",
    chapeau: "Paysanne de Dubréka, elle prend la tête des femmes du RDA à Tondon. En 1955, elle tombe en refusant un impôt injuste et devient le symbole du combat pour l'indépendance.",
    bio: [
      "M'Balia Camara naît en 1929 à Posséah, dans la préfecture de Dubréka. Paysanne, elle n'a jamais été à l'école. Cela ne l'empêche pas de comprendre ce qui se joue autour d'elle : dans la Guinée coloniale des années 1950, les chefs de canton prélèvent l'impôt, souvent sans justice.",
      "À Tondon, elle s'engage au Rassemblement démocratique africain et prend la tête du comité des femmes. Elle parcourt les marchés et les villages, parle à celles qu'on n'écoute pas, les réunit.",
      "Le 9 février 1955, un chef de canton vient réclamer un impôt que le village estime déjà payé. Les habitants refusent. La confrontation tourne au drame : M'Balia Camara, enceinte, est frappée d'un coup de sabre. Elle meurt quelques jours plus tard.",
      "Ses funérailles rassemblent une foule immense. Sa mort devient un symbole : celui d'une femme ordinaire qui a refusé l'injustice. Trois ans plus tard, la Guinée choisit l'indépendance.",
    ],
    parcours: [
      "M'Balia Camara naît en 1929 à Posséah, dans l'actuelle préfecture de Dubréka, en Basse-Guinée. Fille de paysans, elle ne va pas à l'école. Elle épouse Thierno Camara, ancien militaire, lui-même engagé dans la vie politique de son temps.",
      "Au début des années 1950, la Guinée est une colonie française. Dans les campagnes, les chefs de canton, nommés par l'administration, lèvent l'impôt et imposent les travaux forcés ; les contestations sont fréquentes. Le Rassemblement démocratique africain, qui porte la revendication de l'émancipation, gagne les villages.",
      "M'Balia Camara refuse de s'en tenir aux tâches domestiques. Elle rejoint la section guinéenne du RDA et prend la tête du comité des femmes de Tondon. Elle parcourt les villages et les marchés, réunit les femmes, les invite à s'organiser et à faire entendre leur voix.",
      "Le 9 février 1955, un chef de canton vient réclamer un impôt que les habitants affirment avoir déjà payé. Ils refusent de payer une seconde fois. La confrontation dégénère. M'Balia Camara, considérée comme l'une des meneuses de la résistance, est frappée au ventre d'un coup de sabre. Elle est enceinte de huit mois.",
      "Transportée à l'hôpital de Conakry, elle perd beaucoup de sang. Le 11 février, son enfant naît sans vie. M'Balia Camara meurt le 18 février 1955. Elle a vingt-six ans.",
      "Sa mort soulève une immense émotion. Ses obsèques rassemblent une foule considérable, et le RDA fait d'elle le symbole de la lutte contre l'arbitraire colonial. Trois ans plus tard, le 28 septembre 1958, la Guinée vote « Non » et devient indépendante le 2 octobre.",
      "Aujourd'hui, un grand marché de Conakry et un lycée portent son nom. Paysanne sans instruction, elle reste la première martyre de la lutte pour l'indépendance, celle qui a montré que le courage des femmes pouvait changer le cours de l'histoire.",
    ],
    sources: [
      {"titre": "M'Balia Camara (1929-1955)", "auteur": "Otis D. Alexander", "editeur": "BlackPast.org", "annee": "2023", "url": "https://blackpast.org/global-african-history/mbalia-camara-1929-1955"},
      {"titre": "M'Balia Camara", "editeur": "Wikipédia (anglais)", "url": "https://en.wikipedia.org/wiki/M%27Balia_Camara"},
      {"titre": "Célébration de l'an 60 de l'indépendance : M'balia Camara, la grande oubliée", "editeur": "Guinéenews", "annee": "2018", "url": "https://guineenews.org/2018/10/26/celebration-de-lan-60-de-lindependance-mbalia-camara-la-grande-oubliee/"},
      {"titre": "Mobilizing the Masses: Gender, Ethnicity, and Class in the Nationalist Movement in Guinea, 1939-1958", "auteur": "Elizabeth Schmidt", "editeur": "Heinemann", "annee": "2005"},
    ],
    themes: ["indépendance", "militantisme"],
    ouvert: "La place des femmes dans le combat pour l'indépendance.",
  },
  {
    slug: "jeanne-martin-cisse", youtube: "UFB69oS86ik", photo: "/images/pionnieres/jeanne-martin-cisse.jpg", nom: "Jeanne Martin Cissé", dates: "1926 – 2017", vivante: false, valide: true,
    lieu: "Kankan", titre: "Première femme à présider le Conseil de sécurité de l'ONU", mot: "ELLE EST GUINÉENNE",
    chapeau: "Institutrice née à Kankan, elle porte la voix de la Guinée à l'ONU. En 1972, elle devient la première femme au monde à présider le Conseil de sécurité.",
    bio: [
      "Jeanne Martin naît en 1926 à Kankan, au bord du Milo. Brillante élève, elle part étudier à l'École normale de Rufisque, au Sénégal, qui forme alors les institutrices de toute l'Afrique occidentale française.",
      "Revenue en Guinée, elle enseigne et s'engage dans le mouvement des femmes. Quand le pays dit « Non » en 1958 et devient libre, elle fait partie de celles qui construisent le nouvel État.",
      "En 1972, alors qu'elle représente la Guinée aux Nations unies, elle devient la première femme au monde à présider le Conseil de sécurité. Elle y porte notamment la lutte contre l'apartheid.",
      "De retour au pays, elle est nommée ministre des Affaires sociales et travaille à la promotion des femmes. Elle s'éteint en 2017.",
    ],
    parcours: [
      "Jeanne Martin naît le 6 avril 1926 à Kankan, en Haute-Guinée, aînée d'une fratrie de sept enfants. Son père, Darricau Martin Cissé, travaille aux Postes, télégraphes et téléphones de l'administration coloniale ; sa mère, Damaye Soumah, est sage-femme. Malinké par son père, soussou par sa mère, elle grandit au bord du Milo, la rivière qui donnera son titre à ses mémoires.",
      "Élève brillante, elle est admise à l'École normale de jeunes filles de Rufisque, au Sénégal, qui forme alors les institutrices de toute l'Afrique occidentale française. Elle fait partie des trois Guinéennes de la promotion 1940-1944. Diplôme en poche, elle est nommée en 1944 à l'école des filles de Kankan : elle devient l'une des toutes premières institutrices de Guinée.",
      "L'après-guerre est le temps de l'engagement. En 1947, elle rejoint le Rassemblement démocratique africain, qui porte le combat pour l'émancipation des colonies. En 1948, elle épouse Ansoumane Touré, l'un des fondateurs du Parti démocratique de Guinée. En 1954, elle quitte l'Afrique pour la première fois : elle est déléguée à un congrès de la Fédération démocratique internationale des femmes, à Asnières, en France. En 1956, à Budapest, lors de la première Conférence mondiale des femmes travailleuses, elle rencontre l'institutrice malienne Aïssata Sow Coulibaly. Les deux femmes partagent une conviction : les Africaines doivent s'organiser par-delà les frontières.",
      "Quand la Guinée choisit l'indépendance en 1958, Jeanne Martin Cissé fait partie de celles qui bâtissent le nouvel État. En 1959, elle participe à Bamako au congrès de l'Union des femmes de l'Ouest africain. En 1962, à Dar es Salaam, une trentaine de déléguées venues de 21 pays fondent la Conférence des femmes africaines, qui deviendra l'Organisation panafricaine des femmes : elle en est la secrétaire générale pendant dix ans. Élue députée en 1968, elle devient la première femme vice-présidente de l'Assemblée nationale.",
      "En 1972, elle est nommée représentante permanente de la Guinée aux Nations unies, à New York. Cette année-là, la Guinée siège au Conseil de sécurité comme membre non permanent, et la présidence tournante lui revient : Jeanne Martin Cissé devient la première femme au monde à présider le Conseil de sécurité. Elle prend aussi la tête du Comité spécial des Nations unies contre l'apartheid et parcourt l'Europe, l'Asie et l'Amérique latine pour soutenir la lutte du peuple sud-africain. Ce combat lui vaut le prix Lénine pour la paix en 1975.",
      "En 1971, son époux est arrêté et meurt en détention au Camp Boiro. Rentrée au pays en 1976, elle est nommée ministre des Affaires sociales, poste qu'elle occupe jusqu'en 1984. Après la mort du président Ahmed Sékou Touré et le changement de régime, elle est à son tour détenue sans jugement pendant treize mois, puis libérée en 1985. Elle part en exil, au Sénégal puis aux États-Unis.",
      "Depuis l'exil, elle continue de militer, notamment au sein du Comité international de solidarité avec les femmes et les enfants d'Afrique australe. Elle raconte sa vie dans ses mémoires, La fille du Milo, publiés chez Présence africaine. Revenue en Guinée au début des années 2000, elle s'installe à Donka, à Conakry. En 2014, l'Afrique du Sud lui remet l'Ordre des compagnons d'O. R. Tambo, qui salue son rôle dans la lutte pour les droits des femmes en Afrique.",
      "Jeanne Martin Cissé s'éteint le 21 février 2017. Mère de six enfants, institutrice devenue voix de la Guinée dans le monde, elle reste celle qui a prouvé qu'une Africaine pouvait présider l'instance la plus puissante de la planète.",
    ],
    sources: [
      {"titre": "Anticolonialisme, droits des femmes : les trajectoires méconnues de pionnières africaines", "auteur": "Pascale Barthélemy", "editeur": "The Conversation (republié par Ritimo)", "annee": "2022", "url": "https://www.ritimo.org/Anticolonialisme-droits-des-femmes-les-trajectoires-meconnues-de-pionnieres"},
      {"titre": "La Guinée endeuillée par la disparition de Jeanne Martin Cissé, figure de l'indépendance et des droits des femmes", "editeur": "Jeune Afrique", "annee": "2017", "url": "https://www.jeuneafrique.com/405868/politique/guinee-endeuillee-disparition-de-jeanne-martin-cisse-figure-de-lindependance-droits-femmes/"},
      {"titre": "Jeanne Martin Cissé", "editeur": "Wikipédia (anglais)", "url": "https://en.wikipedia.org/wiki/Jeanne_Martin_Ciss%C3%A9"},
      {"titre": "La fille du Milo", "auteur": "Jeanne Martin Cissé", "editeur": "Présence africaine"},
    ],
    themes: ["diplomatie", "éducation", "indépendance", "gouvernement", "panafricanisme"],
    ouvert: "La présidence du Conseil de sécurité de l'ONU, jusque-là réservée aux hommes.",
  },
  {
    slug: "loffo-camara", youtube: "Mu15SphzmOA", photo: "/images/pionnieres/loffo-camara.jpg", nom: "Loffo Camara", dates: "1925 – 1971", vivante: false, valide: true,
    lieu: "Macenta", titre: "Première femme ministre de Guinée", mot: "PREMIÈRE",
    chapeau: "Sage-femme et couturière de Macenta, elle entre au gouvernement en 1961 : la première femme ministre de l'histoire de la Guinée.",
    bio: [
      "Loffo Camara naît en 1925 dans la région de Macenta, en Guinée forestière. Sage-femme de formation, elle est aussi couturière : un métier de mains, qu'elle n'a jamais renié.",
      "Militante du mouvement des femmes, elle est nommée au gouvernement en 1961. Elle devient la première femme ministre de l'histoire de la Guinée : une femme parmi une vingtaine d'hommes sur la photo officielle.",
      "En mai 1962, à Bonn, elle est reçue lors d'une visite officielle ; une photo la montre à une machine à coudre. La Guinée parle au monde, et Loffo Camara en est une des voix.",
      "Son parcours s'interrompt brutalement en 1971.",
    ],
    parcours: [
      "Loffo Camara naît vers 1925 à Macenta, en Guinée forestière. Elle se forme au métier de sage-femme, qu'elle exerce dans sa région. Elle est aussi couturière : un savoir-faire qu'elle met au service de son engagement, en confectionnant les tenues des militantes du Parti démocratique de Guinée.",
      "C'est à Macenta qu'elle entre en politique. Militante du Parti démocratique de Guinée dès les années 1950, elle s'impose dans le mouvement des femmes, qui joue un rôle central dans la marche vers l'indépendance. Élue à l'Assemblée nationale, elle entre au Comité central, puis au Bureau politique national du parti.",
      "Après l'indépendance de 1958, elle fait partie des cadres du nouvel État. En juillet 1960, elle se rend en République démocratique allemande pour une mission d'information. En 1961, elle est nommée secrétaire d'État aux Affaires sociales. Elle devient ainsi la première femme membre d'un gouvernement guinéen, et l'une des toutes premières en Afrique francophone indépendante. Sur la photo officielle, elle est la seule femme parmi une vingtaine d'hommes.",
      "Elle représente la Guinée à l'étranger. En mai 1962, à Bonn, elle est reçue lors d'une visite officielle : une photo la montre à une machine à coudre, aux côtés de l'épouse du président de la République fédérale d'Allemagne. La couturière de Macenta porte alors la voix de son pays.",
      "En novembre 1962, lors d'une conférence du parti, elle propose avec deux autres responsables que les membres du Bureau politique soient choisis parmi les militants et élus par l'ensemble des adhérents. En 1967, au 8e congrès du parti, le Bureau politique passe de quinze à sept membres ; elle n'en fait plus partie. Elle quitte le gouvernement en 1968.",
      "Arrêtée en décembre 1970, elle est exécutée le 25 janvier 1971 à Conakry.",
      "Sage-femme, couturière, militante et ministre, Loffo Camara reste celle qui a ouvert aux femmes guinéennes les portes du gouvernement.",
    ],
    sources: [
      {"titre": "Devoir de mémoire : Loffo Camara, 1ère femme ministre de la Guinée post-indépendante", "editeur": "Africanews", "annee": "2018", "url": "https://fr.africanews.com/2018/10/03/devoir-de-memoire-loffo-camara-1ere-femme-ministre-de-la-guinee-post/"},
      {"titre": "Loffo Camara", "editeur": "Wikipédia (anglais)", "url": "https://en.wikipedia.org/wiki/Loffo_Camara"},
      {"titre": "Historical Dictionary of Guinea", "auteur": "Thomas O'Toole et Janice E. Baker", "editeur": "Scarecrow Press", "annee": "2005"},
    ],
    themes: ["gouvernement", "santé", "indépendance"],
    ouvert: "La porte du gouvernement aux femmes guinéennes.",
  },
  {
    slug: "andree-toure", photo: "/images/pionnieres/andree-toure.jpg", youtube: "xVotCJjZSOI", nom: "Hadja Andrée Touré", dates: "1934 – 2026", vivante: false, valide: true,
    lieu: "Macenta", titre: "Première Première dame de la Guinée indépendante", mot: "DIGNITÉ",
    chapeau: "Née à Macenta, première Première dame de la Guinée indépendante, elle a traversé les épreuves et gardé jusqu'au bout la mémoire du pays.",
    bio: [
      "Andrée Kourouma naît en 1934 à Macenta. Bonne élève, elle rencontre à Kankan Ahmed Sékou Touré, qu'elle épouse en 1953.",
      "En 1958, elle devient la première Première dame du pays. Pendant vingt-six ans, elle accompagne les voyages officiels et s'engage auprès des enfants : le Jardin du 2 Octobre, à Conakry, reste associé à son nom.",
      "En 1984 s'ouvrent des années d'épreuve, loin de son pays. Elle y revient et consacre la fin de sa vie à la mémoire : elle confie ses archives en 2024.",
      "Dans ses dernières années, des gestes publics lui rendent sa dignité : l'aéroport de Conakry porte le nom d'Ahmed Sékou Touré, ses maisons de Bellevue lui sont restituées, la Villa Andrée de Faranah est réhabilitée. Elle s'éteint le 8 juillet 2026.",
    ],
    parcours: [
      "Andrée Kourouma naît le 18 novembre 1934 à Macenta. Son père, Paul-Marie Duplantier, est médecin militaire français ; sa mère, Kaïssa Kourouma, est malinké. Élevée dans la famille de son oncle, elle obtient son certificat d'études primaires en 1946, à douze ans, puis poursuit au Collège des jeunes filles de Conakry, où elle décroche le brevet élémentaire.",
      "Le 18 juin 1953, à la grande mosquée de Kankan, elle épouse Ahmed Sékou Touré, alors jeune syndicaliste et dirigeant du Parti démocratique de Guinée. Elle a dix-huit ans. Leur fils, Mohamed, naît en 1961.",
      "Quand la Guinée accède à l'indépendance en octobre 1958, elle devient la première Première dame du pays. Pendant plus de vingt-cinq ans, elle accompagne les voyages officiels et rencontre, aux côtés de son époux, les grands dirigeants de l'époque. Elle reçoit les délégations étrangères et s'engage auprès des femmes et des enfants : le Jardin du 2 Octobre, à Conakry, reste associé à son nom.",
      "Ahmed Sékou Touré meurt le 26 mars 1984. Après 1984, elle est détenue, puis libérée en 1988 et part en exil, au Maroc, en Côte d'Ivoire et au Sénégal, avant de rentrer en Guinée en 2000.",
      "De retour au pays, elle consacre ses dernières années à la mémoire. En 2023, elle publie ses souvenirs, Ma vie auprès d'Ahmed Sékou Touré, aux éditions L'Harmattan Guinée, et confie ses archives en 2024.",
      "Sous la présidence du général Mamadi Doumbouya, elle est officiellement réhabilitée : en décembre 2021, l'aéroport international de Conakry prend le nom d'Ahmed Sékou Touré ; ses maisons de Bellevue lui sont restituées ; la Villa Andrée de Faranah est réhabilitée.",
      "Hadja Andrée Touré s'éteint le 8 juillet 2026 au Maroc, où elle recevait des soins. Elle est inhumée à Conakry le 12 juillet. Première des Premières dames de Guinée, elle a traversé toute l'histoire du pays indépendant, et en a gardé la mémoire jusqu'au bout.",
    ],
    sources: [
      {"titre": "Décès de Hadja Andrée Touré, première Première Dame de Guinée", "editeur": "APS", "annee": "2026", "url": "https://aps.sn/deces-de-hadja-andree-toure-veuve-du-president-ahmed-sekou-toure/"},
      {"titre": "Biographie de Hadja Andrée Touré", "editeur": "Qui est qui en Guinée", "url": "https://www.quiestquienguinee.com/en/list-of-personalities/p0744/hadja-andree-toure"},
      {"titre": "L'aéroport de Conakry rebaptisé Ahmed Sékou Touré", "editeur": "VOA Afrique", "annee": "2021", "url": "https://www.voaafrique.com/a/l-a%C3%A9roport-de-conakry-rebaptis%C3%A9-ahmed-s%C3%A9kou-tour%C3%A9/6358651.html"},
      {"titre": "Ma vie auprès d'Ahmed Sékou Touré", "auteur": "Hadja Andrée Touré", "editeur": "L'Harmattan Guinée", "annee": "2023"},
    ],
    themes: ["indépendance", "mémoire"],
    ouvert: "Le rôle de Première dame dans la Guinée indépendante, et une mémoire gardée jusqu'au bout.",
  },
  {
    slug: "rabiatou-serah-diallo", photo: "/images/pionnieres/rabiatou-serah-diallo.jpg", youtube: "RBGCZbJr0sA", nom: "Hadja Rabiatou Serah Diallo", dates: "1949 – 2023", vivante: false, valide: true,
    lieu: "Mamou", titre: "Première femme d'Afrique à la tête d'une centrale syndicale nationale", mot: "MARMITE",
    chapeau: "Syndicaliste de Mamou, elle devient en 2000 la première femme d'Afrique à diriger une centrale syndicale nationale, et mène les grandes grèves de 2006-2007.",
    bio: [
      "Rabiatou Serah Diallo naît en 1949 dans la région de Mamou et s'engage très tôt dans le syndicalisme.",
      "En 2000, elle est élue secrétaire générale de la Confédération nationale des travailleurs de Guinée (CNTG) : la première femme d'Afrique à diriger une centrale syndicale nationale.",
      "En 2006 et 2007, avec les autres centrales, elle mène les grandes grèves générales. Le mot d'ordre parle à chaque famille : le prix du riz, du carburant, ce qui remplit ou vide la marmite.",
      "Elle siège à l'Organisation internationale du Travail. En 2010, elle préside le Conseil national de la Transition. Elle s'éteint en 2023.",
    ],
    parcours: [
      "Rabiatou Serah Diallo naît le 31 décembre 1949 à Mamou, en Moyenne-Guinée. De 1964 à 1966, elle suit une formation de secrétariat à l'École des cadres techniques de Conakry. À dix-sept ans, elle entre dans l'administration, au secrétariat de la présidence de la République, où elle travaille jusqu'en 1979.",
      "Le syndicalisme l'attire très tôt : en 1966, elle est élue à la section syndicale de la présidence. Elle reprend ensuite des études de droit à l'Institut polytechnique Gamal Abdel Nasser de Conakry. Elle devient greffière au tribunal de Conakry, puis juge assesseure au tribunal pour enfants. De 1981 à 1984, elle est secrétaire générale du comité syndical de la région de Conakry.",
      "Membre du bureau exécutif de la Confédération nationale des travailleurs de Guinée (CNTG), elle en est élue secrétaire générale en 2000. Elle devient ainsi la première femme d'Afrique à diriger une centrale syndicale nationale. Sous sa direction, la CNTG devient la première force syndicale du pays.",
      "En 2006, elle mobilise les travailleurs, y compris ceux du secteur informel, lors de la première grève générale. En janvier 2007, avec Ibrahima Fofana, secrétaire général de l'USTG, et l'intersyndicale, elle conduit un vaste mouvement de grève : les revendications portent sur le prix du riz et du carburant, sur les salaires et sur la gouvernance. Le 22 janvier 2007, elle est arrêtée avec d'autres dirigeants syndicaux, puis libérée sous la pression nationale et internationale. Le mouvement aboutit à la nomination d'un Premier ministre de consensus.",
      "Le 28 septembre 2009, au stade de Conakry, un rassemblement de l'opposition est violemment réprimé. Dans les mois qui suivent, une transition s'organise. Le 8 février 2010, Rabiatou Serah Diallo est nommée présidente du Conseil national de la Transition, l'organe législatif chargé de préparer la nouvelle Constitution et les élections. Celles-ci se tiennent la même année.",
      "Elle préside ensuite le Conseil économique et social de Guinée, et devient présidente d'honneur de l'Union des conseils économiques et sociaux et institutions similaires francophones.",
      "Hadja Rabiatou Serah Diallo s'éteint à Conakry le 28 juin 2023, à soixante-treize ans. Secrétaire devenue dirigeante syndicale, elle a ouvert aux femmes africaines la direction des grandes organisations de travailleurs.",
    ],
    sources: [
      {"titre": "Rabiatou Sérah Diallo", "editeur": "Wikipédia (anglais)", "url": "https://en.wikipedia.org/wiki/Rabiatou_S%C3%A9rah_Diallo"},
      {"titre": "Hommage à Hadja Rabiatou Serah Diallo", "editeur": "CGT", "annee": "2023", "url": "https://snjcgt.fr/wp-content/uploads/sites/11/2023/07/CGT-Hadja-Rabiatou-Serah-Diallo-30-juin-2023.pdf"},
      {"titre": "Hadja Rabiatou Serah, une pasionaria du monde syndical s'en est allée", "editeur": "Guinéenews", "annee": "2023", "url": "https://guineenews.org/2023/06/28/guinee-hadja-rabiatou-serah-une-pasionaria-du-monde-syndical-sen-est-allee-editorial/"},
      {"titre": "Décès de Hadja Rabiatou : la Guinée lui rend un dernier hommage", "editeur": "Guinéenews", "annee": "2023", "url": "https://guineenews.org/2023/06/30/deces-de-hadja-rabiatou-la-guinee-lui-rend-un-dernier-hommage/"},
    ],
    themes: ["syndicalisme", "institutions", "militantisme"],
    ouvert: "La direction d'une centrale syndicale nationale par une femme, première sur le continent.",
  },
  {
    slug: "mafory-bangoura", photo: "/images/pionnieres/mafory-bangoura.jpg", youtube: "S8Y7VXgG5iA", nom: "Hadja Mafory Bangoura", dates: "v. 1910 – 1976", vivante: false, valide: true,
    lieu: "Wonkifong, Coyah", titre: "Mère de la mobilisation des femmes pour l'indépendance", mot: "PREMIÈRE FEMME",
    chapeau: "Couturière de Wonkifong, elle mobilise les femmes de Conakry dès 1953 et fait d'elles une force de l'indépendance. Son visage figure sur le billet de 1 syli.",
    bio: [
      "Mafory Bangoura naît vers 1910 à Wonkifong, dans la préfecture de Coyah. Elle n'a pas été à l'école. Installée à Conakry, elle est couturière : son atelier est aussi un lieu où les femmes se parlent.",
      "En 1953, elle devient présidente du comité des femmes du Rassemblement démocratique africain. Pendant la grande grève, elle mobilise les femmes de Conakry, souvent seule femme debout parmi les hommes.",
      "Après l'indépendance, elle reste l'une des voix les plus écoutées du mouvement des femmes. En 1970, elle est nommée ministre des Affaires sociales.",
      "Elle s'éteint en 1976. Son visage figurera sur le billet de 1 syli émis en 1981.",
    ],
    parcours: [
      "Mafory Bangoura naît vers 1910 à Wonkifong, dans l'actuelle préfecture de Coyah, dans une famille soussou d'agriculteurs et de pêcheurs. Elle ne va pas à l'école : elle apprendra à lire et à écrire à l'âge adulte. Mariée à Badara Bangoura, elle est mère de trois enfants.",
      "En 1936, elle s'installe à Conakry, où elle travaille comme couturière. Elle rejoint le Foyer de la Basse-Guinée, une association d'entraide des ressortissants de la région. Son atelier devient un lieu où les femmes se retrouvent et se parlent.",
      "En 1953, une grève générale paralyse la Guinée pendant 72 jours pour obtenir l'application du Code du travail d'outre-mer. Ahmed Sékou Touré, qui la dirige, invite Mafory Bangoura à mobiliser les femmes. Elle conduit leur participation au comité de grève : c'est la première fois que des femmes y siègent. Elle est souvent la seule femme debout parmi les hommes.",
      "Au lendemain de la grève, elle est élue présidente du comité des femmes du Rassemblement démocratique africain. En 1954, lors d'un meeting, elle appelle les femmes à une « grève conjugale » pour pousser les hommes à rejoindre le RDA. Elle les encourage aussi à vendre bijoux et pagnes pour financer le mouvement. Elle organise des milices de femmes, présentes bientôt dans chaque grand quartier de Conakry, et dirige la Croix-Rouge de la ville, qui soigne les blessés des manifestations.",
      "En juillet 1955, l'administration coloniale l'accuse d'avoir transmis un document aux militants emprisonnés. Elle est condamnée à une amende et incarcérée. Des centaines de femmes manifestent pour sa libération ; elle sort de prison le 17 août, après plus d'un mois de détention.",
      "Après l'indépendance de 1958, elle devient l'une des dirigeantes du Parti démocratique de Guinée et siège au Bureau politique, où elle porte la voix des femmes. On l'appelle « la présidente des femmes de Guinée ». En 1968, elle est élue première présidente de l'Union révolutionnaire des femmes de Guinée. En 1970, elle est nommée ministre des Affaires sociales.",
      "Elle s'éteint en 1976 à Bucarest, en Roumanie. En 1981, son portrait figure sur le billet de 1 syli ; en 1983, un collège de Conakry prend son nom. Couturière de Wonkifong, elle a fait des femmes une force de l'indépendance.",
    ],
    sources: [
      {"titre": "Mafory Bangoura", "editeur": "Wikipédia (anglais)", "url": "https://en.wikipedia.org/wiki/Mafory_Bangoura"},
      {"titre": "Liste de femmes ministres guinéennes", "editeur": "Wikipédia", "url": "https://fr.wikipedia.org/wiki/Liste_de_femmes_ministres_guin%C3%A9ens"},
      {"titre": "Mobilizing the Masses: Gender, Ethnicity, and Class in the Nationalist Movement in Guinea, 1939-1958", "auteur": "Elizabeth Schmidt", "editeur": "Heinemann", "annee": "2005"},
    ],
    themes: ["indépendance", "militantisme", "gouvernement"],
    ouvert: "La mobilisation des femmes comme force politique de l'indépendance.",
  },
  {
    slug: "binta-pilote", photo: "/images/pionnieres/binta-pilote.jpg", youtube: "93Hge4VQS98", nom: "Fatoumata Binta Diallo", surnom: "Binta Pilote", dates: "1949 – 2020", vivante: false, valide: true,
    lieu: "Pounthioun, Labé", titre: "Première femme pilote d'hélicoptère d'Afrique noire", mot: "DEVENIR PILOTE",
    livre: { titre: "Binta Diallo — La Dame Oiseau", url: "/binta-diallo" },
    chapeau: "Née dans la région de Labé, elle obtient son brevet en 1974 : première femme pilote d'hélicoptère de Guinée, et l'une des premières d'Afrique noire.",
    bio: [
      "Fatoumata Binta Diallo naît en 1949 dans la région de Labé, au Fouta-Djalon. Enfant, elle regarde le ciel. Adulte, elle décide d'y monter.",
      "Au début des années 1970, elle part se former à l'aviation en Union soviétique. En 1974, elle obtient son brevet : première femme pilote d'hélicoptère de Guinée, et l'une des toutes premières d'Afrique subsaharienne.",
      "De retour au pays, elle pilote les vols officiels et transporte des chefs d'État en visite. On l'appelle désormais « Binta Pilote ».",
      "Colonelle de l'armée de l'air, elle siège aussi à l'Assemblée nationale. Elle s'éteint le 29 avril 2020.",
    ],
    parcours: [
      "Fatoumata Binta Diallo naît en 1949 à Pounthioun, dans la région de Labé, au cœur du Fouta-Djalon. Elle grandit dans la Guinée qui vient de conquérir son indépendance, où l'État cherche à former ses propres cadres dans tous les domaines, y compris l'aviation.",
      "En 1971, elle s'engage dans les Forces armées guinéennes. Elle fait partie des jeunes Guinéens envoyés en Union soviétique pour se former au pilotage. Elle y apprend à piloter l'hélicoptère et obtient son brevet en 1974. Elle devient la première femme pilote d'hélicoptère de Guinée, et la première d'Afrique noire.",
      "En 1975, elle rentre au pays avec l'équipe chargée des vols de la présidence de la République. Elle transporte des responsables guinéens et des hôtes étrangers en visite officielle, et devient la pilote personnelle du président Ahmed Sékou Touré. Le pays entier l'appelle désormais « Binta Pilote ».",
      "Parallèlement, elle siège à l'Assemblée nationale, dont elle est la plus jeune députée jusqu'en 1984.",
      "Après 1984, elle poursuit sa carrière dans l'armée de l'air. Elle sera aussi la pilote de Henriette Conté, épouse du président Lansana Conté. Elle gravit les grades jusqu'à celui de colonelle et reçoit la distinction de Chevalier de l'Ordre national du Mérite.",
      "Colonelle de l'aviation à la retraite, Fatoumata Binta Diallo s'éteint à Paris le 29 avril 2020. Le ministère de la Défense nationale annonce sa disparition en saluant « la première femme pilote d'hélicoptère d'Afrique noire ».",
      "Partie d'un village du Fouta-Djalon, elle a ouvert le cockpit aux femmes guinéennes et montré aux filles que le ciel leur appartenait aussi.",
    ],
    sources: [
      {"titre": "Binta Pilote", "editeur": "Wikipédia (anglais)", "url": "https://en.wikipedia.org/wiki/Binta_Pilote"},
      {"titre": "La célèbre colonel Fatoumata Binta Diallo dite Binta Pilote n'est plus (communiqué)", "editeur": "Guinéenews", "annee": "2020", "url": "https://guineenews.org/2020/04/29/la-celebre-colonel-fatoumata-binta-diallo-dite-binta-pilote-nest-plus-communique/"},
      {"titre": "Binta Diallo — La Dame Oiseau", "editeur": "Projet PATI", "url": "/binta-diallo"},
    ],
    themes: ["défense", "institutions", "sciences"],
    ouvert: "Le cockpit, jusque-là réservé aux hommes.",
  },
  {
    slug: "djene-keita", photo: "/images/pionnieres/djene-keita.jpg", youtube: "2Ss4jRDrPdM", nom: "Djènè Keïta", dates: "née en 1964", vivante: true, valide: true,
    lieu: "", titre: "Première Guinéenne à diriger une agence des Nations unies", mot: "PREMIÈRE GUINÉENNE",
    chapeau: "Juriste et femme de terrain, ministre en 2018, elle devient en 2025 la première Guinéenne à diriger une agence des Nations unies, l'UNFPA.",
    bio: [
      "Djènè Keïta est docteure en droit de l'Université Paris 1 Panthéon-Sorbonne, spécialiste de l'économie internationale et du droit du développement.",
      "En 1990, elle entre au Programme des Nations unies pour le développement. Du Niger au Burundi, d'Haïti au Burkina Faso, elle travaille pour le développement humain, puis représente le Fonds des Nations unies pour la population dans plusieurs pays d'Afrique.",
      "En 2018, elle revient servir la Guinée comme ministre de la Coopération et de l'Intégration africaine.",
      "En 2025, elle est nommée Directrice exécutive de l'UNFPA, avec rang de Secrétaire générale adjointe des Nations unies.",
    ],
    parcours: [
      "Djènè Keïta naît le 19 août 1964 en Guinée. Elle fait ses études supérieures à Paris : un diplôme d'études approfondies en économie internationale et droit du développement à l'Université René-Descartes, puis un doctorat en droit à la Sorbonne, obtenu avec la mention très honorable.",
      "En 1990, elle entre au Programme des Nations unies pour le développement (PNUD), à New York, comme chargée de programme. Elle part ensuite sur le terrain, au Niger, au Burkina Faso, au Burundi et en Haïti, où elle occupe les fonctions de représentante adjointe puis de représentante par intérim. En 2006, elle devient représentante du PNUD auprès de l'Union africaine et de la Commission économique des Nations unies pour l'Afrique, à Addis-Abeba.",
      "La même année, elle rejoint le Fonds des Nations unies pour la population (UNFPA), qu'elle représente successivement en Mauritanie, au Bénin, en République démocratique du Congo et au Nigeria. Dans plusieurs de ces pays, elle assure aussi par intérim la coordination de l'ensemble du système des Nations unies. Son travail porte sur la santé maternelle, la planification familiale et les droits des femmes et des jeunes filles.",
      "En 2018, elle revient servir son pays comme ministre de la Coopération et de l'Intégration africaine, jusqu'en 2020.",
      "En juin 2020, elle retourne à l'UNFPA comme directrice exécutive adjointe chargée des programmes, avec rang de Sous-Secrétaire générale des Nations unies. Elle supervise alors le portefeuille mondial des programmes de l'agence.",
      "En août 2025, le Secrétaire général António Guterres la nomme Directrice exécutive de l'UNFPA, avec rang de Secrétaire générale adjointe. Elle devient la première Guinéenne à diriger une agence des Nations unies.",
      "Juriste formée à Paris, femme de terrain aux quatre coins de l'Afrique, Djènè Keïta a ouvert aux Guinéennes la direction des grandes institutions internationales.",
    ],
    sources: [
      {"titre": "Diene Keita", "editeur": "Wikipédia (anglais)", "url": "https://en.wikipedia.org/wiki/Diene_Keita"},
      {"titre": "Biographie de Diene Keita, Directrice exécutive", "editeur": "UNFPA", "annee": "2025", "url": "https://aa.unfpa.org/sites/default/files/biographies/USG%20Diene%20Keita%20bio_Aug%202025.pdf"},
      {"titre": "Diene Keita", "editeur": "PMNCH / OMS", "url": "https://pmnch.who.int/about-pmnch/biography/diene-keita"},
    ],
    themes: ["diplomatie", "gouvernement", "international"],
    ouvert: "La direction d'une agence onusienne par une Guinéenne.",
  },
  {
    slug: "mariama-sow", photo: "/images/pionnieres/mariama-sow.jpg", youtube: "Ozv0j2FKkD8", nom: "Hadja Mariama Sow", dates: "née en 1942", vivante: true, valide: true,
    lieu: "Tountouroun, Labé", titre: "Parmi les 1 000 femmes proposées au prix Nobel de la paix", mot: "DOUZE ANS",
    chapeau: "Enseignante née près de Labé, députée pendant douze ans, elle consacre sa vie aux femmes, au dialogue et à la paix.",
    bio: [
      "Mariama Sow naît en 1942 à Tountouroun, près de Labé. Elle devient enseignante à Conakry.",
      "En 1972, elle entre à l'Assemblée nationale, où elle siège douze ans. Elle est secrétaire générale de l'Union des femmes révolutionnaires, puis la première présidente de l'Association des femmes d'Afrique de l'Ouest.",
      "En 2005, elle figure parmi les « 1 000 femmes pour le prix Nobel de la paix ».",
      "Depuis 2017, elle préside l'organisation qui rassemble les leaders religieux de Guinée, au service du dialogue et de la paix.",
    ],
    parcours: [
      "Mariama Sow naît en 1942 à Tountouroun, près de Labé, dans une grande famille peule du Fouta-Djalon. Elle fait sa scolarité à Conakry, dans l'établissement qui deviendra le lycée du 2 Octobre, puis devient enseignante.",
      "En 1961, elle épouse un ingénieur, qui sera plus tard gouverneur de Faranah, de Forécariah et de Conakry. Le couple aura huit enfants.",
      "Très jeune, elle milite dans les organisations de jeunesse du Rassemblement démocratique africain et dans le mouvement syndical. En 1972, elle est élue à l'Assemblée nationale, où elle siège douze ans. Pendant douze ans également, elle est secrétaire générale de l'Union révolutionnaire des femmes de Guinée.",
      "Son action dépasse les frontières. Elle devient la première présidente de l'Association des femmes de l'Afrique de l'Ouest (AFAO), qui œuvre au sein de la CEDEAO. Elle contribue à inscrire les Guinéennes dans le mouvement des femmes africaines.",
      "Plus tard, elle préside la Coordination des associations de femmes musulmanes de Guinée. Elle s'engage pour le maintien des filles à l'école, la formation et l'autonomie économique des femmes, et pour la paix dans l'espace du fleuve Mano. Elle défend un islam ouvert, attaché au dialogue entre les religions.",
      "En 2005, elle figure parmi les « 1 000 femmes pour le prix Nobel de la paix ». En 2017, elle devient présidente du Groupe des leaders religieux pour la santé, le développement et la paix en Guinée. Elle est aussi coprésidente de Religions pour la paix, le réseau mondial du dialogue interreligieux.",
      "Enseignante, députée, dirigeante d'organisations féminines et artisane de paix, Hadja Mariama Sow a ouvert aux femmes une place durable dans l'hémicycle et dans les instances de dialogue.",
    ],
    sources: [
      {"titre": "Cissé Hadja Mariama Sow", "editeur": "Wikipédia (anglais)", "url": "https://en.wikipedia.org/wiki/Ciss%C3%A9_Hadja_Mariama_Sow"},
      {"titre": "A Discussion with Madame Cissé Hadja Mariama Sow", "editeur": "Berkley Center, Georgetown University", "url": "https://berkleycenter.georgetown.edu/interviews/a-discussion-with-madame-cisse-hadja-mariama-sow-president-of-the-group-of-religious-leaders-for-health-development-and-peace-in-guinea-co-president-of-religions-for-peace"},
      {"titre": "Cissé Hadja Mariama Sow", "editeur": "1000 PeaceWomen", "url": "https://1000peacewomen.org/en/network/1000-peacewomen/cisse-hadja-mariama-sow-2403"},
      {"titre": "Mme Cissé Hadja Mariama Sow", "editeur": "Religions for Peace", "url": "https://www.rfp.org/leadership_member/mme-cisse-hadja-mariama-sow-2"},
    ],
    themes: ["institutions", "paix", "éducation", "panafricanisme"],
    ouvert: "Une présence durable des femmes dans l'hémicycle et les instances de paix.",
  },
  {
    slug: "aicha-bah", photo: "/images/pionnieres/aicha-bah.jpg", youtube: "6w0WvHyyfac", nom: "Hadja Aïcha Bah", dates: "née en 1942", vivante: true, valide: true,
    lieu: "Kouroussa", titre: "La ministre qui a doublé le nombre de filles à l'école", mot: "DOUBLE",
    chapeau: "Proviseure puis ministre de l'Éducation, elle a doublé le nombre de filles à l'école en Guinée, avant de porter ce combat à l'UNESCO.",
    bio: [
      "Aïcha Bah naît en 1942 à Kouroussa, en Haute-Guinée. Professeure, elle dirige le lycée de Conakry de 1966 à 1984 : des générations d'élèves passent entre ses mains.",
      "De 1989 à 1996, elle est ministre de l'Éducation. Sous son mandat, le nombre de filles scolarisées double, d'environ 113 000 à 233 000.",
      "En 1992, elle participe à la fondation du Forum des éducatrices africaines (FAWE). De 1996 à 2005, elle occupe de hautes fonctions à l'UNESCO.",
    ],
    parcours: [
      "Aïcha Bah naît en 1942 à Kouroussa, en Haute-Guinée. Elle est la première fille après trois garçons, et ses parents lui répètent : « Tu es une meneuse. » Elle étudie la chimie aux États-Unis, à l'Université d'État de Pennsylvanie, puis obtient un diplôme de biochimie à l'Institut polytechnique Gamal Abdel Nasser de Conakry.",
      "Revenue au pays, elle enseigne et dirige un lycée de Conakry. Sous la Première République, son mari est emprisonné au Camp Boiro.",
      "En 1989, elle est nommée ministre de l'Éducation, poste qu'elle occupe jusqu'en 1996. Elle conduit le programme d'ajustement structurel du secteur éducatif, en négocie un second, prépare une politique de l'enseignement technique et professionnel, et mobilise les bailleurs. Elle s'attaque surtout aux obstacles qui tiennent les filles éloignées de l'école. Sous son mandat, le nombre de filles scolarisées passe d'environ 113 000 à 233 000.",
      "En 1990, elle participe à la conférence mondiale de Jomtien, en Thaïlande, qui lance l'Éducation pour tous. En 1992, elle cofonde le Forum des éducatrices africaines (FAWE), réseau de femmes ministres et de responsables de l'éducation engagées pour l'école des filles sur tout le continent. Elle en présidera plus tard le conseil d'administration.",
      "De 1996 à 2005, elle occupe de hautes fonctions à l'UNESCO : directrice de l'éducation de base, puis sous-directrice générale adjointe et sous-directrice générale pour l'éducation. De 2005 à 2009, elle est conseillère spéciale du directeur général pour l'Afrique. En 2005, elle cofonde aussi l'Association pour le renforcement de l'enseignement supérieur des femmes en Afrique.",
      "Elle siège au comité du prix de la Fondation Mo Ibrahim pour le leadership africain et préside plusieurs réseaux d'éducation, dont Aide et Action International. Elle reçoit les Palmes académiques françaises, et plusieurs écoles, en Guinée et au Sénégal, portent son nom.",
      "En 2022, elle est élevée à la dignité de Grand Officier de l'Ordre du Kolatier. La même année, elle est nommée facilitatrice du cadre de dialogue inclusif, aux côtés de Joséphine Lenaud Guilao et de Makalé Traoré.",
      "Chimiste, enseignante, ministre puis voix de l'éducation dans le monde, Hadja Aïcha Bah a ouvert les portes de l'école à des dizaines de milliers de filles guinéennes.",
    ],
    sources: [
      {"titre": "Aïcha Bah Diallo", "editeur": "Wikipédia (anglais)", "url": "https://en.wikipedia.org/wiki/A%C3%AFcha_Bah_Diallo"},
      {"titre": "H.E. Aïcha Bah Diallo", "editeur": "FAWE", "url": "https://fawe.org/en/team/h-e-aicha-bah-diallo/"},
      {"titre": "Aïcha Bah Diallo", "editeur": "Fondation Mo Ibrahim", "url": "https://mo.ibrahim.foundation/about-us/prize-committee/aicha-bah-diallo"},
    ],
    themes: ["éducation", "gouvernement", "international"],
    ouvert: "Les portes de l'école à des dizaines de milliers de filles guinéennes.",
  },
  {
    slug: "josephine-guilao", youtube: "YR8IglDITC8", photo: "/images/pionnieres/josephine-guilao.jpg", nom: "Joséphine Lenaud Guilao", dates: "", vivante: true, valide: true,
    lieu: "", titre: "Une femme de dialogue", mot: "DIALOGUE",
    chapeau: "Institutrice et syndicaliste, ministre du Travail, elle est restée une femme de dialogue là où les positions se durcissent.",
    bio: [
      "Joséphine Lenaud Guilao commence sa vie professionnelle comme institutrice, puis dirige le syndicat national des enseignants.",
      "De 1994 à 1996, elle est ministre du Travail. Elle siège aussi au Conseil économique et social.",
      "Là où les positions se durcissent, elle cherche ce qui permet de se parler encore. En 2022, elle est facilitatrice du dialogue inclusif national.",
    ],
    parcours: [
      "Joséphine Léno, dont le nom s'écrit aussi Lenaud, est connue sous le nom de Madame Guilao. Institutrice, mère de trois enfants, elle mène une longue carrière dans l'enseignement et le syndicalisme.",
      "Sous la Première République, elle dirige pendant plusieurs années le Syndicat national des enseignants de Guinée. Elle porte aussi la voix des enseignants guinéens à l'échelle du continent et du monde : de 1986 à 1995, elle est vice-présidente de l'Organisation panafricaine de la profession enseignante, et siège au comité exécutif de la Confédération mondiale des organisations de la profession enseignante.",
      "Après 1984, la Guinée entre dans une nouvelle période politique. Elle est membre du Comité transitoire de redressement national, l'organe législatif de la transition, jusqu'aux élections législatives de juin 1995. Elle est ensuite nommée ministre du Travail et des Affaires sociales.",
      "Au ministère comme ailleurs, elle se fait médiatrice. Lors des crises sociales, elle ouvre le dialogue avec les dirigeants syndicaux et aide à apaiser les tensions. Elle soutient aussi les communautés rurales et les travailleurs pris dans des conflits sociaux. À Kissidougou, en Guinée forestière, elle s'engage pour le maintien des filles à l'école, face aux mariages précoces.",
      "En 2005, elle figure parmi les « 1 000 femmes pour le prix Nobel de la paix ». Vice-présidente du Conseil économique et social, elle en assure la présidence par intérim en 2010. En 2015, elle accompagne l'entrée de la Guinée dans l'Union des conseils économiques et sociaux et institutions similaires francophones.",
      "En 2022, elle est élevée à la dignité de Grand Officier de l'Ordre national du Mérite et nommée au conseil de l'Ordre. En septembre de la même année, elle est désignée facilitatrice du cadre de dialogue inclusif, aux côtés de Hadja Aïcha Bah et de Makalé Traoré.",
      "Institutrice, syndicaliste, ministre et médiatrice, Joséphine Lenaud Guilao a ouvert aux femmes une place centrale dans le dialogue social et politique de la Guinée.",
    ],
    sources: [
      {"titre": "Joséphine Léno", "editeur": "Wikipédia (anglais)", "url": "https://en.wikipedia.org/wiki/Jos%C3%A9phine_L%C3%A9no"},
      {"titre": "Joséphine Léno (Guinea)", "editeur": "1000 PeaceWomen / WikiPeaceWomen", "url": "https://wikipeacewomen.org/wpworg/en/?p=2290"},
    ],
    themes: ["syndicalisme", "éducation", "gouvernement", "paix"],
    ouvert: "La place des femmes dans le dialogue social et politique.",
  },
  {
    slug: "hawa-drame", nom: "Hawa Dramé", dates: "", vivante: true, valide: false,
    lieu: "Conakry", titre: "Fondatrice de FITIMA", mot: "DEBOUT",
    chapeau: "Fondatrice de FITIMA, elle aide les enfants atteints de maladies neuromusculaires à se tenir debout, à aller à l'école, à être vus.",
    bio: [
      "Hawa Dramé grandit à Conakry, dans le quartier de Boulbinet.",
      "En 2003, elle fonde au Burkina Faso la Fondation internationale Tierno et Mariam (FITIMA), qui accompagne les enfants atteints de maladies neuromusculaires et leurs familles. En 2010, la fondation s'installe en Guinée.",
      "Rééducation, suivi, sensibilisation : FITIMA aide des enfants à se tenir debout, à aller à l'école, à être vus.",
    ],
    themes: ["santé", "société civile"],
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
