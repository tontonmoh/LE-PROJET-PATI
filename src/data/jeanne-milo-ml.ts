// « Jeanne, la fille du Milo » — Pati Aventure (10-12 ans).
// Biographie de Jeanne Martin Cissé (Kankan 1926 – Conakry 2017), écrite pour son centenaire.
// Texte v2 (19/11/2026) : réécrit avec la plume de Moh (profil plume-moh).
// Illustrations : plans du portrait animé du centenaire (public/livres/jeanne/).
// Années dures traitées « en pudique », comme dans le film validé par Moh (17/11/2026).
export type JeanneLang = "fr";
type Section = { id: string; title: string; image?: string; paragraphs: string[] };
type Book = { lang: JeanneLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; subtitle?: string; sections: Section[] };

const I = (f: string) => `/livres/jeanne/${f}.webp`;

export const JEANNE_ML: Record<JeanneLang, Book> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Jeanne, la fille du Milo",
    subtitle: "De Kankan au Conseil de sécurité",
    sections: [
      { id: "milo", title: "Le Milo", image: I("fdm-03-pont-enfant-v1"), paragraphs: [
        "En plein centre de Kankan, l'eau coule depuis toujours. C'est le Milo. Il était là avant nous, il sera là après nous, et il va se jeter dans le Niger sans demander l'avis de personne.",
        "Près de ses rives, en 1926, naît une petite fille. Jeanne.",
        "C'est l'aînée de sept enfants. Papa, Darricau Martin, travaille aux Postes. Maman, Damaye Soumah, est sage-femme. Dans cette maison, on s'occupe des lettres qui arrivent et des bébés qui arrivent. Ça fait beaucoup d'arrivées." ] },
      { id: "lire", title: "La fille qui lit", image: I("fdm-03b-lecture-milo-v1"), paragraphs: [
        "Sur la berge, les autres enfants courent, plongent, s'éclaboussent. Jeanne, elle, s'assoit sous l'arbre avec un livre.",
        "Elle lit tout. Même les vieux journaux qui traînent au bureau de Papa.",
        "À l'époque, on pense qu'une fille doit surtout apprendre à tenir une maison. Jeanne a une autre idée en tête : étudier. Loin. Longtemps." ] },
      { id: "reunion", title: "La réunion qui tourne court", image: I("fdm-04-reunion-famille-v2"), paragraphs: [
        "Une fille qui veut étudier ? Chez nous, ça fait un problème de famille. Alors on réunit la famille sous le grand arbre, comme pour les affaires sérieuses.",
        "Les oncles arrivent. Les tantes arrivent. Chacun a préparé son discours, certains depuis la veille.",
        "Mais la réunion tourne court. Papa a déjà dit oui. Ses enfants iront à l'école, les filles comme les garçons. Point.",
        "Les discours rentrent à la maison sans avoir servi." ] },
      { id: "depart", title: "Le petit bateau de papier", image: I("fdm-03c-bateau-papier-v1"), paragraphs: [
        "1940. Jeanne passe le concours de l'École normale de jeunes filles de Rufisque, au Sénégal. C'est là qu'on forme les institutrices de toute l'Afrique de l'Ouest française.",
        "Reçue. À quatorze ans.",
        "Avant de partir, elle pose un petit bateau de papier sur le Milo et le regarde s'en aller. Le bateau ne reviendra pas. Elle, si." ] },
      { id: "rufisque", title: "Rufisque", image: I("fdm-06-internat-v2"), paragraphs: [
        "Quatre ans d'internat, loin de Kankan. Nous, à cet âge, on pleurait pour trois jours chez la tante.",
        "À Rufisque, les filles viennent du Sénégal, du Dahomey, du Soudan, de Côte d'Ivoire. Les Guinéennes de sa promotion ? Trois. On les compte sur les doigts d'une main, et il reste des doigts.",
        "Au mur du dortoir, une grande carte. Ici, on ne dit pas « je suis du Sénégal » ou « je suis de Guinée ». On dit : nous sommes d'Afrique. Jeanne garde ce mot dans sa poche. Pour la vie." ] },
      { id: "maitresse", title: "Retour à Kankan", image: I("fdm-07-institutrice-v2"), paragraphs: [
        "1944. Jeanne rentre à Kankan. Même école, autre porte : cette fois, c'est celle de la maîtresse.",
        "Elle devient l'une des toutes premières institutrices de Guinée. Certaines élèves ont presque son âge. Il faut se faire respecter. Elle se fait respecter.",
        "Par la fenêtre de la classe, on voit le pont et le Milo. La rivière n'a pas bougé. La petite fille, si." ] },
      { id: "afrique", title: "Un mot au tableau", image: I("fdm-07b-afrique-v3"), paragraphs: [
        "Premier jour de classe. Jeanne prend la craie. Un seul mot, en grand : Afrique.",
        "Les élèves recopient. Ils ne savent pas encore pourquoi la maîtresse a l'air si sérieuse.",
        "Ce mot-là, notre Championne va le porter beaucoup plus loin que Kankan. Tu vas voir." ] },
      { id: "chaises", title: "Compter les chaises", image: I("fdm-08-salle-chaises-v2"), paragraphs: [
        "Après la guerre, toute l'Afrique se met à parler de liberté. Jeanne s'engage dans le grand mouvement qui réclame l'émancipation des colonies.",
        "Mais elle remarque une chose. Les grandes décisions se prennent dans des salles où il n'y a que des hommes. Que des hommes. Encore des hommes.",
        "Jeanne entre. Elle regarde. Elle compte les chaises.",
        "Il en reste une. Au bout." ] },
      { id: "chaise", title: "Elle prend la chaise", image: I("fdm-08b-chaise-assise-v2"), paragraphs: [
        "Jeanne s'assoit. Personne ne l'a invitée. Personne n'ose non plus lui demander de se lever.",
        "1954. Elle quitte l'Afrique pour la première fois, direction la France, pour un congrès de femmes venues du monde entier.",
        "Des Antillaises, des Asiatiques, des Africaines. Pas la même langue, pas le même pays. Mais la même phrase : nous voulons être écoutées." ] },
      { id: "independance", title: "Le NON", image: I("fdm-09-independance-v1"), paragraphs: [
        "28 septembre 1958. La Guinée dit NON. Le 2 octobre, elle est indépendante.",
        "Dans la foule, Jeanne lève le drapeau rouge, jaune, vert. Ce jour-là, tout le monde chante. Même ceux qui chantent faux.",
        "Le lendemain, on range les tambours et on se met au travail. Il y a un pays à bâtir, brique par brique. Et pour Jeanne, les femmes ne sont pas là que pour applaudir le chantier." ] },
      { id: "dar-es-salam", title: "Dar es Salam, 1962", image: I("fdm-09b-dar-es-salam-v1"), paragraphs: [
        "1962, Dar es Salam, en Tanzanie. Des femmes venues de vingt et un pays se retrouvent autour d'une même table. Elles fondent la Conférence des femmes africaines.",
        "Qui tient le stylo ? Jeanne. Secrétaire générale, pendant plus de dix ans.",
        "1968, elle est élue députée en Guinée. Puis première femme vice-présidente de l'Assemblée nationale. Elle avait compté les chaises, tu te rappelles ? Elle continue." ] },
      { id: "onu", title: "New York, 1972", image: I("fdm-10-conseil-onu-v2"), paragraphs: [
        "1972. La Guinée envoie Jeanne la représenter aux Nations unies, à New York.",
        "Cette année-là, la Guinée siège au Conseil de sécurité. C'est la table où l'on parle des guerres et de la paix du monde entier. Rien que ça.",
        "Chaque pays préside à son tour. Le tour de la Guinée arrive. Quinze pays autour de la table. Que des hommes. Et au milieu, une institutrice de Kankan." ] },
      { id: "marteau", title: "Le coup de marteau", image: I("fdm-10b-marteau-pose-v2"), paragraphs: [
        "C'est elle qui ouvre la séance. Elle qui donne la parole. Elle qui la reprend.",
        "Même les grandes puissances attendent leur tour. Comme à l'école : on lève la main.",
        "Jeanne Martin Cissé est la première femme au monde à présider le Conseil de sécurité des Nations unies. La première. Au monde.",
        "Le jour où elle pose le marteau, la planète comprend qu'une fille du Milo peut tenir cette table. Et la tenir bien." ] },
      { id: "apartheid", title: "La porte de l'apartheid", image: I("fdm-10c-apartheid-porte-v1"), paragraphs: [
        "Pendant ce temps, en Afrique du Sud, une loi sépare les gens selon la couleur de leur peau. Les Noirs n'ont pas le droit de vivre, d'étudier ou de voter comme les Blancs. Ça s'appelle l'apartheid.",
        "Jeanne prend la tête du comité des Nations unies contre l'apartheid. Europe, Asie, Amérique latine : elle frappe à toutes les portes et répète la même chose. Cette porte-là doit s'ouvrir.",
        "Elle s'ouvrira, des années plus tard. En 2014, l'Afrique du Sud lui dit merci avec l'une de ses plus hautes distinctions." ] },
      { id: "ministre", title: "Madame la Ministre", image: I("fdm-11-ministre-v2"), paragraphs: [
        "1976. Jeanne rentre au pays. La voici ministre des Affaires sociales, pour huit ans.",
        "Sur son bureau, les dossiers montent comme une pile de briques : les femmes, les familles, les enfants, et tous ceux qu'on oublie trop vite.",
        "Par la fenêtre, la mer de Conakry. Sur la table, un téléphone qui sonne. Qui sonne. Qui sonne encore." ] },
      { id: "annees-dures", title: "Les années dures", image: I("fdm-12a-chaise-vide-v1"), paragraphs: [
        "La vie de Jeanne a aussi traversé des années dures.",
        "1971. Elle perd son mari. À côté de sa chaise, une chaise reste vide.",
        "1984. Le pouvoir change en Guinée. Jeanne est arrêtée, sans jugement. Elle n'est libérée que l'année suivante." ] },
      { id: "loin", title: "Loin de la Guinée", image: I("fdm-12c-loin-guinee-v1"), paragraphs: [
        "Elle part vivre loin de la Guinée. Le Sénégal, puis les États-Unis. Longtemps.",
        "Même de loin, elle ne lâche rien. Elle continue de se battre pour les femmes et les enfants d'Afrique australe.",
        "Au début des années 2000, elle rentre enfin. Elle s'installe à Conakry, pas très loin de la mer." ] },
      { id: "livre", title: "La fille du Milo", image: I("fdm-12d-livre-couleur-v1"), paragraphs: [
        "Alors Jeanne prend la plume et raconte sa vie. Le titre ? La fille du Milo.",
        "Pas « la dame de New York ». Pas « Madame la Ministre ». La fille du Milo. Parce que c'est au bord de la rivière que tout a commencé.",
        "Jeanne s'éteint à Conakry, le 21 février 2017. Elle avait quatre-vingt-dix ans." ] },
      { id: "relais", title: "La craie passe de main en main", image: I("fdm-13-relais-craie-v2"), paragraphs: [
        "La chaise qu'elle a prise à New York, d'autres femmes s'y sont assises depuis.",
        "La craie qu'elle tenait à Kankan passe de main en main. De la maîtresse à l'élève. De l'élève à la suivante. De la suivante à toi, peut-être." ] },
      { id: "presidente", title: "Et la prochaine ?", image: I("fdm-13c-presidente-v3"), paragraphs: [
        "2026. Notre Championne aurait eu cent ans.",
        "Dans une classe, une petite fille se lève, prend la craie et écrit un mot, en grand : Présidente.",
        "La prochaine Jeanne est peut-être dans ta classe. Elle est peut-être assise à ta place. Alors ? On prend le relais ?" ] },
      { id: "chemin", title: "Le chemin de Jeanne", image: I("fdm-14-foulard-chaise-v1"), paragraphs: [
        "Kankan. Rufisque. Dar es Salam. New York. Conakry.",
        "Institutrice. Députée. Présidente du Conseil de sécurité. Ministre.",
        "Cent ans après, le chemin de Jeanne reste grand ouvert. Merci, Jeanne. Pour la Guinée. Pour l'Afrique." ] },
    ],
  },
};
