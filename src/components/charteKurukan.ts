/**
 * LA CHARTE DE KURUKAN FUGA (1236)
 * Version authentique collectée à Kankan, Guinée (mars 1998)
 * Transcription/traduction : IRLA sous supervision de Siriman Kouyaté
 * 
 * Structure pour intégration Pati :
 * - 44 articles avec texte complet + résumé enfant
 * - Illustrations : charte_01.jpg à charte_44.jpg
 * - Thèmes : organisation, paix, famille, biens, nature, dispositions
 */

export interface ArticleCharte {
  id: number;
  titre: string;
  texte: string;
  resume: string; // Version enfant 10-15 ans
  theme: 'organisation' | 'paix' | 'famille' | 'biens' | 'nature' | 'dispositions';
  illustration: string; // charte_01.jpg, etc.
  notesExplicatives?: string;
}

export const charteKurukan: ArticleCharte[] = [
  {
    id: 1,
    titre: "La structure de la société mandingue",
    texte: "La société du grand mandé est divisée en seize (16) porteurs de carquois, cinq (5) classes de marabouts, quatre classes (4) de nyamakalas. Chacun de ces groupes a une activité et un rôle spécifiques.",
    resume: "Le Mali est organisé en trois grands groupes : les guerriers (qui portent les arcs), les savants religieux (les marabouts), et les artisans spécialisés (nyamakalas). Chacun a son travail important.",
    theme: 'organisation',
    illustration: 'charte_01.jpg',
    notesExplicatives: "Cette classification institutionnalise la division du travail. Les 16 clans porteurs de carquois comprennent : Traoré, Condé, Camara, Kourouma, Kamissoko, Magassouba, Diawara, Sako, Fofana, Koïta, Dansouba, Diaby, Diallo, Diakité, Sidibé et Sangaré."
  },
  {
    id: 2,
    titre: "Rôle des nyamakalas",
    texte: "Les nyamakalas se doivent de dire la vérité aux Chefs, d'être leurs conseillers et de défendre par le verbe les règles établies et l'ordre sur l'ensemble du royaume.",
    resume: "Les artisans spécialisés (griots, forgerons, tisserands) sont les conseillers du roi. Ils doivent toujours dire la vérité, même si elle déplaît, et protéger l'ordre du royaume par leurs paroles.",
    theme: 'organisation',
    illustration: 'charte_02.jpg'
  },
  {
    id: 3,
    titre: "Les marabouts, maîtres et éducateurs",
    texte: "Les morikanda Lolu (les cinq classes de marabouts) sont nos maîtres et nos éducateurs en islam. Tout le monde leur doit respect et considération.",
    resume: "Les marabouts (chefs religieux) enseignent la foi islamique. Tous les Mandingues doivent les respecter et les écouter comme des maîtres.",
    theme: 'organisation',
    illustration: 'charte_03.jpg'
  },
  {
    id: 4,
    titre: "Les classes d'âge et les Kangbès",
    texte: "La société est divisée en classes d'âge. A la tête de chacune d'elles est élu un chef. Sont de la même classe d'âge les personnes (hommes ou femmes) nées au cours d'une période de trois années consécutives. Les Kangbès (classe intermédiaire entre les jeunes et les vieux) doivent être conviés pour participer à la prise des grandes décisions concernant la société.",
    resume: "Les personnes nées dans les mêmes années forment des groupes d'âge avec un chef. Les Kangbès (jeunes adultes) aident les anciens à décider et transmettent aux enfants. Tout le monde, jeune ou vieux, a un rôle.",
    theme: 'organisation',
    illustration: 'charte_04.jpg'
  },
  {
    id: 5,
    titre: "Droit à la vie",
    texte: "Chacun a le droit à la vie et à la préservation de son intégrité physique. En conséquence, toute tentation d'enlever la vie à son prochain est punie de la peine de mort.",
    resume: "La vie de chaque personne est sacrée et protégée. Tuer quelqu'un est le crime le plus grave et est puni de mort.",
    theme: 'paix',
    illustration: 'charte_05.jpg'
  },
  {
    id: 6,
    titre: "Lutte contre la paresse et l'oisiveté",
    texte: "Pour gagner la bataille de la prospérité, il est institué le Kön¨gbèn Wölö (un mode de surveillance) pour lutter contre la paresse et l'oisiveté.",
    resume: "Pour que l'empire prospère, on surveille que personne ne reste inactif. Chacun doit travailler aux champs ou à son métier pour que la communauté soit riche.",
    theme: 'paix',
    illustration: 'charte_06.jpg'
  },
  {
    id: 7,
    titre: "La sanankunya et le tanamanyöya — Parenté à plaisanterie",
    texte: "Il est institué entre les mandenkas le sanankunya (parenté à plaisanterie) et le tanamanyöya (forme de totémisme). En conséquence, aucun différent né entre ces groupes ne doit dégénérer, le respect de l'autre étant la règle. Entre beaux-frères et belles-sœurs, entre grands parents et petits-enfants, la tolérance et le chahut doivent être le principe.",
    resume: "Certains groupes ont le droit de se plaisanter et de rire ensemble sans se fâcher. C'est une manière spéciale de rester amis même quand on n'est pas d'accord. Cela crée la paix entre les peuples.",
    theme: 'paix',
    illustration: 'charte_07.jpg',
    notesExplicatives: "La parenté à plaisanterie est une alliance ancestrale unique en Afrique de l'Ouest, permettant de désamorcer les conflits par l'humour et la tolérance."
  },
  {
    id: 8,
    titre: "La famille Keïta, famille régnante",
    texte: "La famille Keïta est désignée famille régnante sur l'empire.",
    resume: "Les Keïta sont la famille royale du Mali. C'est Soundiata Keïta qui fonde l'empire, et sa famille gouvernera après lui.",
    theme: 'organisation',
    illustration: 'charte_08.jpg'
  },
  {
    id: 9,
    titre: "L'éducation collective des enfants",
    texte: "L'éducation des enfants incombe à l'ensemble de la société. La puissance paternelle appartient en conséquence à tous.",
    resume: "Ce n'est pas seulement le père et la mère qui élèvent les enfants — tout le village les éduque. Chaque adulte a le droit et le devoir de corriger et d'enseigner les enfants.",
    theme: 'famille',
    illustration: 'charte_09.jpg'
  },
  {
    id: 10,
    titre: "Les condoléances mutuelles",
    texte: "Adressons-nous mutuellement les condoléances.",
    resume: "Quand quelqu'un meurt, toute la communauté partage la douleur de la famille. On doit compatir et soutenir ceux qui souffrent.",
    theme: 'paix',
    illustration: 'charte_10.jpg'
  },
  {
    id: 11,
    titre: "Respect des voisins",
    texte: "Quand votre femme ou votre enfant fuit, ne le poursuivez pas chez le voisin.",
    resume: "Si un membre de ta famille se réfugie chez le voisin, tu dois oublier ta colère. Le respect du voisinage est plus important que de punir.",
    theme: 'paix',
    illustration: 'charte_11.jpg',
    notesExplicatives: "Cet article « presque sacralise » le respect qu'on doit à ses voisins. Une fois le refuge trouvé, l'offense doit être effacée de la mémoire."
  },
  {
    id: 12,
    titre: "Succession patrilinéaire — Règles du pouvoir",
    texte: "La succession étant patrilinéaire, ne donnez jamais le pouvoir à un fils tant qu'un seul de ses pères vit. Ne donnez jamais le pouvoir à un mineur parce qu'il possède des liens.",
    resume: "Le pouvoir passe de père en fils, mais seulement si le père et tous les ancêtres mâles sont morts. Un enfant trop jeune ne peut pas gouverner, même s'il est de famille royale.",
    theme: 'organisation',
    illustration: 'charte_12.jpg'
  },
  {
    id: 13,
    titre: "Respecter les hommes de talent",
    texte: "N'offensez jamais les nyaras.",
    resume: "Les hommes de talent et de savoir doivent être respectés. Ce sont eux qui conseillent le roi et apportent la sagesse à l'empire.",
    theme: 'paix',
    illustration: 'charte_13.jpg',
    notesExplicatives: "Nyara = hommes de talent parmi les nyamakalas, djéli et fina. Ils sont les médiateurs attitrés, aucune offense ne doit leur être faite."
  },
  {
    id: 14,
    titre: "Protéger les femmes",
    texte: "N'offensez jamais les femmes, nos mères.",
    resume: "Les femmes sont respectées comme nos mères. Aucun homme ne doit les offenser ou les maltraiter.",
    theme: 'paix',
    illustration: 'charte_14.jpg'
  },
  {
    id: 15,
    titre: "Résoudre les conflits conjugaux",
    texte: "Ne portez jamais la main sur une femme mariée avant d'avoir fait intervenir sans succès son mari.",
    resume: "Si une femme te cause du tort, tu dois d'abord parler à son mari. Ce n'est qu'après une tentative échouée de paix qu'on peut agir.",
    theme: 'paix',
    illustration: 'charte_15.jpg'
  },
  {
    id: 16,
    titre: "Participation des femmes au gouvernement",
    texte: "Les femmes, en plus de leurs occupations quotidiennes doivent être associées à tous nos Gouvernements.",
    resume: "Les femmes travaillent à la maison ET doivent participer aux grandes décisions de la société. Elles ne doivent pas être écartées du gouvernement.",
    theme: 'organisation',
    illustration: 'charte_16.jpg'
  },
  {
    id: 17,
    titre: "Prescription des mensonges",
    texte: "Les mensonges qui ont vécu 40 ans doivent être considérés comme des vérités.",
    resume: "Une histoire racontée depuis 40 ans est acceptée comme vraie. Après ce délai, on ne peut plus dire que c'est un mensonge.",
    theme: 'paix',
    illustration: 'charte_17.jpg',
    notesExplicatives: "C'est une forme de prescription : la société accorde une sorte de « prescrition morale » aux propos tenus pour vrais pendant longtemps."
  },
  {
    id: 18,
    titre: "Droit d'aînesse",
    texte: "Respectons le droit d'aînesse.",
    resume: "On doit respecter les plus âgés, même s'ils sont moins riches ou moins puissants. L'âge commande le respect.",
    theme: 'paix',
    illustration: 'charte_18.jpg',
    notesExplicatives: "Un dicton populaire dit : « on peut être plus âgé que son père ou sa mère mais jamais plus âgé que son frère aîné »."
  },
  {
    id: 19,
    titre: "Respect des beaux-parents",
    texte: "Tout homme a deux beaux-parents: Les parents de la fille que l'on n'a pas eue et la parole qu'on a prononcé sans contrainte aucune. On leur doit respect et considération.",
    resume: "Chaque homme a des obligations envers des beaux-parents : ceux de sa femme ET les gens à qui il a donné sa parole. Tous deux méritent respect.",
    theme: 'famille',
    illustration: 'charte_19.jpg'
  },
  {
    id: 20,
    titre: "Traitement humain des esclaves",
    texte: "Ne maltraite pas les esclaves, accordez leur un jour de repos par semaine et faites en sorte qu'ils cessent le travail à des heures raisonnables. On est maître de l'esclave et non du sac qu'il porte.",
    resume: "Même les esclaves doivent être traités avec humanité. Ils ont droit à un jour de repos par semaine et à des horaires de travail justes. On ne peut pas les traiter comme des bêtes.",
    theme: 'paix',
    illustration: 'charte_20.jpg',
    notesExplicatives: "Cet article humanise la condition des esclaves — Soundiata avait interdit la traite des esclaves et assoupli les conditions de l'esclavage domestique."
  },
  {
    id: 21,
    titre: "Prohibition de l'adultère",
    texte: "Ne poursuivez pas de vos assiduités les épouses: du Chef, du voisin, du marabout, du prêtre, de l'ami et de l'associé.",
    resume: "Il est interdit de courtiser certaines femmes : celle du chef, du voisin, du savant religieux, du prêtre, de l'ami ou du partenaire commercial. Ces femmes sont interdites.",
    theme: 'paix',
    illustration: 'charte_21.jpg',
    notesExplicatives: "En écartant les épouses de ces six groupes importants, il ne reste plus de femmes à courtiser — c'est une manière de prévenir l'adultère."
  },
  {
    id: 22,
    titre: "L'humilité est grandeur",
    texte: "La vanité est le signe de la faiblesse et l'humilité le signe de la grandeur.",
    resume: "Un grand leader n'est pas orgueilleux. L'humilité montre la vraie force et la sagesse. L'orgueil est une faiblesse.",
    theme: 'paix',
    illustration: 'charte_22.jpg'
  },
  {
    id: 23,
    titre: "Fidélité et parole d'honneur",
    texte: "Ne vous trahissez jamais entre vous. Respectez la parole d'honneur.",
    resume: "Tu dois être loyal envers les autres Mandingues. Une promesse faite sans contrainte doit être tenue, c'est l'honneur.",
    theme: 'paix',
    illustration: 'charte_23.jpg'
  },
  {
    id: 24,
    titre: "Protection des étrangers",
    texte: "Ne faites jamais du tort aux étrangers.",
    resume: "Les étrangers doivent être protégés et respectés. C'est un devoir sacré d'aider ceux qui viennent d'ailleurs.",
    theme: 'paix',
    illustration: 'charte_24.jpg',
    notesExplicatives: "Cet article honore l'hospitalité dont Soundiata lui-même a bénéficié lors de son exil de 17 ans. L'étranger est « roi au Mandé »."
  },
  {
    id: 25,
    titre: "Immunité du messager",
    texte: "Le chargé de mission ne risque rien au Mandé.",
    resume: "Un messager qui porte un message pour quelqu'un d'autre est protégé. On ne peut pas le punir pour ce que dit le message — ce n'est pas ses paroles.",
    theme: 'paix',
    illustration: 'charte_25.jpg',
    notesExplicatives: "C'est l'ancêtre de l'article 29 de la Convention de Vienne (1961) protégeant les diplomates."
  },
  {
    id: 26,
    titre: "Ne pas mettre l'étranger à la tête",
    texte: "Le taureau confié ne doit pas diriger le parc.",
    resume: "Un étranger ne doit pas diriger une localité sauf après un long apprentissage. Cette métaphore protège la communauté : on ne confie pas le pouvoir à celui qu'on ne connaît pas.",
    theme: 'organisation',
    illustration: 'charte_26.jpg',
    notesExplicatives: "Métaphore : un taureau prêté n'est pas du troupeau, il ne doit pas le diriger."
  },
  {
    id: 27,
    titre: "Mariage précoce des filles",
    texte: "La jeune fille peut être donnée en mariage dès qu'elle est pubère sans détermination d'âge. Le choix de ses parents doit être suivi quelque soit le nombre des candidats.",
    resume: "Une jeune fille peut se marier dès qu'elle a l'âge requis. Ses parents choisissent le mari, peu importe combien de candidats il y a.",
    theme: 'famille',
    illustration: 'charte_27.jpg'
  },
  {
    id: 28,
    titre: "Âge du mariage pour les garçons",
    texte: "Le jeune homme peut se marier à partir de 20 ans.",
    resume: "Un garçon peut se marier à partir de 20 ans. C'est l'âge où on est assez mûr pour former une famille.",
    theme: 'famille',
    illustration: 'charte_28.jpg'
  },
  {
    id: 29,
    titre: "La dote matrimoniale",
    texte: "La dote est fixée à 3 bovins: un pour la fille, deux pour ses père et mère.",
    resume: "Pour se marier, le garçon doit payer une dote de trois bovins : un pour la fille, deux pour ses parents. C'est un prix juste et fixe.",
    theme: 'famille',
    illustration: 'charte_29.jpg'
  },
  {
    id: 30,
    titre: "Aide aux nécessiteux",
    texte: "Venons en aide à ceux qui en ont besoin.",
    resume: "Ceux qui sont riches ou en bonne santé doivent aider les pauvres et les malades. C'est un devoir de solidarité.",
    theme: 'paix',
    illustration: 'charte_30.jpg'
  },
  {
    id: 31,
    titre: "Modes d'acquisition de la propriété",
    texte: "Il y a cinq façons d'acquérir la propriété: l'achat, la donation, l'échange, le travail et la succession. Toute autre forme sans témoignage probant est équivoque.",
    resume: "On devient propriétaire de cinq manières : en achetant, en recevant un cadeau, en échangeant quelque chose, en travaillant la terre, ou en héritage. Toute autre manière sans témoins n'est pas légitime.",
    theme: 'biens',
    illustration: 'charte_31.jpg'
  },
  {
    id: 32,
    titre: "Propriété des objets trouvés",
    texte: "Tout objet trouvé sans propriétaire connu ne devient propriété commune qu'au bout de quatre ans.",
    resume: "Si tu trouves quelque chose et que personne ne le réclame après 4 ans, cela devient ta propriété. Mais avant, tu dois l'offrir à la communauté.",
    theme: 'biens',
    illustration: 'charte_32.jpg'
  },
  {
    id: 33,
    titre: "Propriété du gardien de génisse",
    texte: "La quatrième mise-bas d'une génisse confiée est la propriété du gardien.",
    resume: "Si on te confie une vache pour la garder, après quatre veaux nés, le quatrième te appartient. C'est ta récompense pour le travail.",
    theme: 'biens',
    illustration: 'charte_33.jpg'
  },
  {
    id: 34,
    titre: "Échange du bétail",
    texte: "Un bovin doit être échangé contre quatre moutons ou quatre chèvres.",
    resume: "Pour échanger avec justice, une vache vaut quatre moutons OU quatre chèvres. C'est le prix de référence du commerce.",
    theme: 'biens',
    illustration: 'charte_34.jpg'
  },
  {
    id: 35,
    titre: "Propriété du gardien de poule",
    texte: "Un œuf sur quatre est la propriété du gardien de la poule pondeuse.",
    resume: "Si tu gardes la poule de quelqu'un, tu peux garder un œuf sur quatre pour toi. C'est ta rétribution.",
    theme: 'biens',
    illustration: 'charte_35.jpg'
  },
  {
    id: 36,
    titre: "Droit de nécessité — l'assouvissement de la faim",
    texte: "Assouvir sa faim n'est pas du vol si on n'emporte rien dans son sac ou sa poche.",
    resume: "Si tu as très faim, tu peux manger des fruits ou des récoltes dans les champs. Mais tu ne dois rien mettre dans ta poche — si tu prends quelque chose, c'est du vol.",
    theme: 'biens',
    illustration: 'charte_36.jpg',
    notesExplicatives: "C'est une forme de « droit de nécessité » qui existe en droit pénal moderne — on peut agir pour survivre dans l'urgence."
  },
  {
    id: 37,
    titre: "Fakombè, chef des chasseurs",
    texte: "Fakombè est désigné Chef des chasseurs. Il est chargé de préserver la brousse et ses habitants pour le bonheur de tous.",
    resume: "Fakombè est le grand chef des chasseurs du Mali. Son travail est de protéger la forêt et les animaux pour que tout le monde en profite.",
    theme: 'nature',
    illustration: 'charte_37.jpg'
  },
  {
    id: 38,
    titre: "Protection des arbres contre le feu",
    texte: "Avant de mettre le feu à la brousse, ne regardez pas à terre, levez la tête en direction de la cime des arbres.",
    resume: "Avant de faire un feu de brousse, regarde vers le haut des arbres. C'est un appel à respecter la forêt — ne brûle pas les beaux arbres.",
    theme: 'nature',
    illustration: 'charte_38.jpg',
    notesExplicatives: "Les feux de brousse non contrôlés étaient une infraction punie de mort — signe de la volonté de préserver la nature."
  },
  {
    id: 39,
    titre: "Confinement des animaux domestiques",
    texte: "Les animaux domestiques doivent être attachés au moment des cultures et libérés après les récoltes. Le chien, le chat, le canard et la volaille ne sont pas soumis à cette mesure.",
    resume: "Pendant qu'on cultive les champs, les vaches, moutons et chèvres doivent être attachés pour ne pas manger les récoltes. Après la moisson, ils sont libérés. Les petits animaux sont toujours libres.",
    theme: 'nature',
    illustration: 'charte_39.jpg'
  },
  {
    id: 40,
    titre: "Respect de la parenté, du mariage et du voisinage",
    texte: "Respectez la parenté, le mariage et le voisinage.",
    resume: "Trois choses fondent la société : ta famille, ton couple, tes voisins. Respecte ces trois piliers.",
    theme: 'paix',
    illustration: 'charte_40.jpg'
  },
  {
    id: 41,
    titre: "Courage et dignité au combat",
    texte: "Tuez votre ennemi, ne l'humiliez pas.",
    resume: "Si tu dois combattre, affonte ton ennemi de face. La lâcheté est honteuse — soit courageux et honnête, même au combat.",
    theme: 'paix',
    illustration: 'charte_41.jpg',
    notesExplicatives: "Cet article symbolise l'honneur et la dignité mandingue. Ne trahis jamais, ne poignarde pas dans le dos, ne trompe pas après avoir accepté."
  },
  {
    id: 42,
    titre: "Tolérance dans les grandes assemblées",
    texte: "Dans les grandes assemblées, contentez-vous de vos légitimes représentants et tolérez-vous les uns les autres.",
    resume: "Lors des réunions du conseil, chaque groupe envoie ses représentants. Tout le monde doit s'écouter et se tolérer, même s'il y a des désaccords.",
    theme: 'organisation',
    illustration: 'charte_42.jpg'
  },
  {
    id: 43,
    titre: "Balla Fasséké Kouaté, grand chef des cérémonies et médiateur",
    texte: "Balla Fassèkè Kouaté est désigné grand chef des cérémonies et médiateur principal du Mandé. Il est autorisé à plaisanter avec toutes les tribus, en priorité avec la famille royale.",
    resume: "Balla Fasséké est le plus grand conseiller du roi et médiateur de paix. Il a le droit spécial de plaisanter avec tout le monde, même le roi, pour dire la vérité sans offense.",
    theme: 'dispositions',
    illustration: 'charte_43.jpg',
    notesExplicatives: "Balla Fasséké est l'historique Balla Fasséké qui a accompagné Soundiata et lui a dit la vérité avec courage — prototype du djeli loyal et sage."
  },
  {
    id: 44,
    titre: "Application de la Charte",
    texte: "Tous ceux qui enfreindront à ces règles seront punis. Chacun est chargé de veiller à leur application.",
    resume: "Cette Charte s'applique à tous. Celui qui la viole sera puni. C'est le devoir de chaque Mandingue de veiller à ce que ces lois soient respectées.",
    theme: 'dispositions',
    illustration: 'charte_44.jpg'
  }
];

/**
 * GROUPEMENT PAR THÈME pour version pédagogique
 */
export const charteParTheme = {
  organisation: {
    titre: "📜 L'organisation du Mali",
    description: "Comment le Mali est gouverné, qui décide, les rôles de chacun",
    articles: [1, 2, 3, 4, 8, 12, 16, 26, 42]
  },
  paix: {
    titre: "🤝 Vivre ensemble en paix",
    description: "Les règles pour coexister sans violence, respecter l'autre, créer l'harmonie",
    articles: [5, 6, 7, 10, 11, 13, 14, 15, 17, 18, 21, 22, 23, 24, 25, 30, 40, 41]
  },
  famille: {
    titre: "👨‍👩‍👧 La famille et le mariage",
    description: "Éducation des enfants, mariage, dote, respect des beaux-parents",
    articles: [9, 19, 27, 28, 29]
  },
  biens: {
    titre: "💰 Propriété et échanges",
    description: "Comment on acquiert les biens, les échanges justes, les droits du gardien",
    articles: [31, 32, 33, 34, 35, 36]
  },
  nature: {
    titre: "🌿 Chasse, animaux et nature",
    description: "Protection de la forêt, respect des animaux, agriculture durable",
    articles: [37, 38, 39]
  },
  dispositions: {
    titre: "⚖️ Dispositions finales",
    description: "Les garants de la Charte, son application, son autorité",
    articles: [43, 44]
  }
};

export default charteKurukan;
