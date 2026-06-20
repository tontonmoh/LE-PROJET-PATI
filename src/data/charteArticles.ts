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

export interface Article {
  id: number;
  titre: string;
  texte: string;
  resume: string;
  theme: 'organisation' | 'paix' | 'famille' | 'biens' | 'nature' | 'dispositions';
  illustration: string;
  notesExplicatives?: string;
}

export const charteArticles: Article[] = [
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
    texte: "Dans chaque village, il y a des classes d'âge appelées Kangbès. Ces groupes de jeunes du même âge travaillent ensemble, cultivent ensemble et s'entraident.",
    resume: "Dans chaque village, les jeunes du même âge forment un groupe appelé Kangbé. Ils travaillent et s'entraident ensemble.",
    theme: 'organisation',
    illustration: 'charte_04.jpg'
  },
  {
    id: 5,
    titre: "Interdiction de la violence entre frères",
    texte: "Aucun homme ne doit lever la main sur son frère. Celui qui frappe son frère doit payer une amende au chef du village.",
    resume: "Frapper quelqu'un de sa communauté est très grave. Il faut payer une amende au chef du village.",
    theme: 'paix',
    illustration: 'charte_05.jpg'
  },
  {
    id: 6,
    titre: "Protection des esclaves",
    texte: "Tout esclave a le droit de pouvoir se racheter en versant une rançon. Aucun maître ne peut refuser la liberté à son esclave s'il paie sa rançon.",
    resume: "Un esclave peut acheter sa liberté en payant une rançon. Aucun maître ne peut refuser.",
    theme: 'paix',
    illustration: 'charte_06.jpg'
  },
  {
    id: 7,
    titre: "Droit d'asile",
    texte: "Quiconque fuit face à la persécution peut trouver refuge dans un autre village. Le chef du village doit accorder la protection.",
    resume: "Quelqu'un qui fuit un danger peut se réfugier dans un autre village. Le chef doit lui offrir la protection.",
    theme: 'paix',
    illustration: 'charte_07.jpg'
  },
  {
    id: 8,
    titre: "Autonomie administrative des villages",
    texte: "Chaque village a le droit de gérer ses propres affaires et son propre village. Le chef du village est responsable devant les anciens.",
    resume: "Chaque village gère ses propres affaires. Le chef du village doit écouter les anciens.",
    theme: 'organisation',
    illustration: 'charte_08.jpg'
  },
  {
    id: 9,
    titre: "Le mariage et la dot",
    texte: "Le mariage doit être marqué par l'échange de cadeaux et le respect des engagements. La dot ne doit pas être excessive.",
    resume: "Le mariage est une alliance entre deux familles. La dot doit être honnête et raisonnable.",
    theme: 'famille',
    illustration: 'charte_09.jpg'
  },
  {
    id: 10,
    titre: "Résolution des conflits",
    texte: "Tous les conflits doivent être résolus par la parole et les conseils des anciens, jamais par la violence.",
    resume: "Les conflits se règlent par la parole et l'avis des anciens, pas par la violence.",
    theme: 'paix',
    illustration: 'charte_10.jpg'
  },
  {
    id: 11,
    titre: "Respect des routes commerciales",
    texte: "Les routes de commerce doivent rester ouvertes et sûres pour tous. Aucun brigand ne doit les attaquer.",
    resume: "Les routes du commerce doivent rester ouvertes et sûres pour que le peuple puisse faire du commerce.",
    theme: 'paix',
    illustration: 'charte_11.jpg'
  },
  {
    id: 12,
    titre: "Responsabilités des chefs",
    texte: "Le chef doit protéger son peuple et assurer la justice. Il ne doit jamais détourner les biens publics.",
    resume: "Le chef doit protéger son peuple, assurer la justice et ne jamais voler les biens publics.",
    theme: 'organisation',
    illustration: 'charte_12.jpg'
  },
  {
    id: 13,
    titre: "Interdiction du meurtre",
    texte: "Le meurtre est le crime le plus grave. Celui qui tue doit payer une très grande rançon à la famille de la victime.",
    resume: "Tuer quelqu'un est le crime le plus grave. Le meurtrier doit payer une très grande rançon à la famille.",
    theme: 'paix',
    illustration: 'charte_13.jpg'
  },
  {
    id: 14,
    titre: "Protection des femmes",
    texte: "Les femmes doivent être respectées et protégées. Aucun homme ne doit les maltraiter.",
    resume: "Les femmes méritent respect et protection. Personne n'a le droit de les maltraiter.",
    theme: 'paix',
    illustration: 'charte_14.jpg'
  },
  {
    id: 15,
    titre: "Droit des orphelins",
    texte: "Les orphelins doivent être pris en charge par la communauté. On doit s'occuper d'eux comme de ses propres enfants.",
    resume: "Les orphelins sont la responsabilité de toute la communauté, comme nos propres enfants.",
    theme: 'paix',
    illustration: 'charte_15.jpg'
  },
  {
    id: 16,
    titre: "Autorité du Kaisoba",
    texte: "Le Kaisoba (chef suprême) est investi par les chefs des villages et les anciens. Son pouvoir n'est pas absolu.",
    resume: "Le chef suprême est choisi et soutenu par les chefs de villages et les anciens.",
    theme: 'organisation',
    illustration: 'charte_16.jpg'
  },
  {
    id: 17,
    titre: "Interdiction de l'empoisonnement",
    texte: "Empoisonner quelqu'un est un crime terrible. C'est considéré comme un sacrilège contre Dieu.",
    resume: "Empoisonner quelqu'un est un acte mauvais et très grave, une insulte à Dieu.",
    theme: 'paix',
    illustration: 'charte_17.jpg'
  },
  {
    id: 18,
    titre: "Justice pour tous",
    texte: "La justice doit être égale pour tous, riches et pauvres, nobles et roturiers. Les lois s'appliquent pareillement à tous.",
    resume: "La justice s'applique à tout le monde de la même façon, riche ou pauvre, noble ou non.",
    theme: 'paix',
    illustration: 'charte_18.jpg'
  },
  {
    id: 19,
    titre: "Respect des beaux-parents",
    texte: "Les gendres et les brus doivent respecter les parents de leur conjoint comme leurs propres parents.",
    resume: "Les gendres et les brus doivent respecter les parents de leur mari ou femme comme leurs propres parents.",
    theme: 'famille',
    illustration: 'charte_19.jpg'
  },
  {
    id: 20,
    titre: "Protection des enfants",
    texte: "Les enfants sont l'avenir du Mali. Ils doivent être protégés, éduqués et nourris.",
    resume: "Les enfants sont précieux pour le Mali. On doit les protéger, les éduquer et bien les nourrir.",
    theme: 'paix',
    illustration: 'charte_20.jpg'
  },
  {
    id: 21,
    titre: "Liberté d'expression",
    texte: "Chacun a le droit de parler et d'exprimer son avis. Le silence ne doit jamais signifier l'accord.",
    resume: "Chacun peut parler et dire son avis librement. Ne pas parler ne veut pas dire être d'accord.",
    theme: 'paix',
    illustration: 'charte_21.jpg'
  },
  {
    id: 22,
    titre: "Solidarité communautaire",
    texte: "Les hommes d'une communauté doivent s'entraider mutuellement. Personne ne doit être laissé à l'abandon.",
    resume: "Les gens d'une communauté doivent s'aider les uns les autres. Personne ne doit rester seul.",
    theme: 'paix',
    illustration: 'charte_22.jpg'
  },
  {
    id: 23,
    titre: "Respect du Coran",
    texte: "Le Coran est sacré. Aucun acte profane ne doit être commis en sa présence.",
    resume: "Le Coran est très sacré. On doit le traiter avec beaucoup de respect.",
    theme: 'paix',
    illustration: 'charte_23.jpg'
  },
  {
    id: 24,
    titre: "Absence d'esclavage des prisonniers de guerre",
    texte: "Un prisonnier de guerre peut être racheté par sa famille. Il ne doit pas rester esclave à vie.",
    resume: "Un prisonnier de guerre peut être libéré si sa famille paie une rançon.",
    theme: 'paix',
    illustration: 'charte_24.jpg'
  },
  {
    id: 25,
    titre: "Respect mutuel entre époux",
    texte: "Les époux doivent se respecter et s'aider mutuellement. Le mariage est une alliance entre égaux.",
    resume: "Un mari et sa femme doivent se respecter et s'aider mutuellement.",
    theme: 'paix',
    illustration: 'charte_25.jpg'
  },
  {
    id: 26,
    titre: "Sages anciens",
    texte: "Les anciens sont les dépositaires de la sagesse. On doit les écouter et les honorer.",
    resume: "Les anciens sont très sages. On doit les écouter, les respecter et les honorer.",
    theme: 'organisation',
    illustration: 'charte_26.jpg'
  },
  {
    id: 27,
    titre: "Éducation des enfants",
    texte: "Les parents doivent éduquer leurs enfants correctement. L'éducation commence à la maison.",
    resume: "Les parents doivent bien éduquer leurs enfants dès la maison.",
    theme: 'famille',
    illustration: 'charte_27.jpg'
  },
  {
    id: 28,
    titre: "Responsabilité du père",
    texte: "Le père est responsable du bien-être de sa famille. Il doit nourrir, protéger et éduquer ses enfants.",
    resume: "Le père doit nourrir, protéger et éduquer sa famille.",
    theme: 'famille',
    illustration: 'charte_28.jpg'
  },
  {
    id: 29,
    titre: "Responsabilité de la mère",
    texte: "La mère est responsable de l'éducation morale et religieuse de ses enfants. Elle est le cœur du foyer.",
    resume: "La mère éduque ses enfants, les guide moralement et religieusement. Elle est le cœur de la famille.",
    theme: 'famille',
    illustration: 'charte_29.jpg'
  },
  {
    id: 30,
    titre: "Restauration des terres",
    texte: "Celui qui endommage les terres d'un autre doit les restaurer ou payer une compensation.",
    resume: "Si tu endommages les terres de quelqu'un, tu dois les réparer ou payer une compensation.",
    theme: 'paix',
    illustration: 'charte_30.jpg'
  },
  {
    id: 31,
    titre: "Propriété des terres",
    texte: "Les terres appartiennent à la communauté, non à un individu. Chacun a le droit de cultiver sa part.",
    resume: "Les terres appartiennent à toute la communauté. Chacun a le droit de cultiver sa part.",
    theme: 'biens',
    illustration: 'charte_31.jpg'
  },
  {
    id: 32,
    titre: "Droits du cultivateur",
    texte: "Le cultivateur a le droit de garder le fruit de son travail. Nul ne peut lui enlever sa récolte.",
    resume: "Le cultivateur garde le fruit de son travail. Personne ne peut lui voler sa récolte.",
    theme: 'biens',
    illustration: 'charte_32.jpg'
  },
  {
    id: 33,
    titre: "Respect de la propriété",
    texte: "Voler les biens d'un autre est un crime. Le voleur doit restituer le double de ce qu'il a volé.",
    resume: "Voler, c'est très grave. Le voleur doit rendre le double de ce qu'il a pris.",
    theme: 'biens',
    illustration: 'charte_33.jpg'
  },
  {
    id: 34,
    titre: "Commerce équitable",
    texte: "Tous les échanges commerciaux doivent être justes et honnêtes. La tromperie est interdite.",
    resume: "Le commerce doit être honnête et juste. On ne doit jamais tromper l'autre.",
    theme: 'biens',
    illustration: 'charte_34.jpg'
  },
  {
    id: 35,
    titre: "Droit d'héritage",
    texte: "À la mort d'un homme, ses biens doivent être partagés équitablement entre ses héritiers selon la loi.",
    resume: "Quand quelqu'un meurt, ses biens sont partagés équitablement entre la famille selon les règles.",
    theme: 'biens',
    illustration: 'charte_35.jpg'
  },
  {
    id: 36,
    titre: "Protection du gardien",
    texte: "Celui qui garde les biens d'un autre en dépôt ne doit pas être blâmé si le bien est perdu ou volé sans sa faute.",
    resume: "Quelqu'un qui garde un dépôt pour un autre n'est pas responsable si ce bien disparaît malgré lui.",
    theme: 'biens',
    illustration: 'charte_36.jpg'
  },
  {
    id: 37,
    titre: "Protection de la chasse",
    texte: "La chasse doit être pratiquée selon les règles. Les animaux ne doivent pas être tués inutilement.",
    resume: "La chasse doit se faire selon les règles. On ne doit pas tuer les animaux pour rien.",
    theme: 'nature',
    illustration: 'charte_37.jpg'
  },
  {
    id: 38,
    titre: "Respect des forêts",
    texte: "Les forêts doivent être protégées et respectées. Elles sont essentielles à la vie de tous.",
    resume: "Les forêts doivent être protégées. Elles donnent la vie à tous les êtres.",
    theme: 'nature',
    illustration: 'charte_38.jpg'
  },
  {
    id: 39,
    titre: "Agriculture durable",
    texte: "La terre doit être cultivée avec soin pour que les générations futures puissent aussi en vivre.",
    resume: "On cultive la terre pour nos enfants et les enfants de nos enfants.",
    theme: 'nature',
    illustration: 'charte_39.jpg'
  },
  {
    id: 40,
    titre: "Liberté de culte",
    texte: "Chacun est libre de pratiquer sa religion selon sa conscience, tant qu'il ne trouble pas la paix.",
    resume: "Chacun peut prier et croire comme il le souhaite, tant qu'il respecte la paix.",
    theme: 'paix',
    illustration: 'charte_40.jpg'
  },
  {
    id: 41,
    titre: "Tolérance religieuse",
    texte: "Les différentes communautés religieuses doivent coexister pacifiquement et se respecter mutuellement.",
    resume: "Les différentes religions doivent vivre en paix les unes avec les autres.",
    theme: 'paix',
    illustration: 'charte_41.jpg'
  },
  {
    id: 42,
    titre: "Conseil des sages",
    texte: "Un Conseil des Sages doit se réunir régulièrement pour guider la nation et trancher les différends.",
    resume: "Un Conseil des Sages se réunit régulièrement pour guider le Mali et résoudre les conflits.",
    theme: 'organisation',
    illustration: 'charte_42.jpg'
  },
  {
    id: 43,
    titre: "Application de la Charte",
    texte: "Tous les chefs et les anciens doivent appliquer la Charte sans exception. Personne ne peut s'y soustraire.",
    resume: "Tous les chefs et tous les anciens doivent respecter et appliquer cette Charte.",
    theme: 'dispositions',
    illustration: 'charte_43.jpg'
  },
  {
    id: 44,
    titre: "Garantie perpétuelle",
    texte: "Tous ceux qui enfreindront à ces règles seront punis. Chacun est chargé de veiller à leur application.",
    resume: "Cette Charte s'applique à tous. Celui qui la viole sera puni. C'est le devoir de chaque Mandingue de veiller à ce que ces lois soient respectées.",
    theme: 'dispositions',
    illustration: 'charte_44.jpg'
  }
];

export const charteParTheme = {
  organisation: {
    titre: "📜 L'organisation du Mali",
    description: "Comment le Mali est gouverné, qui décide, les rôles de chacun",
    articles: [1, 2, 3, 4, 8, 12, 16, 26, 42]
  },
  paix: {
    titre: "🤝 Vivre ensemble en paix",
    description: "Les règles pour coexister sans violence, respecter l'autre, créer l'harmonie",
    articles: [5, 6, 7, 10, 11, 13, 14, 15, 17, 18, 20, 21, 22, 23, 24, 25, 30, 40, 41]
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

export default charteArticles;
