// « M'Balia Camara, le courage de Tondon » — Pati Aventure (10-12 ans).
// Biographie de M'Balia Camara (Posséah 1929 – Conakry 1955), première martyre de la lutte pour l'indépendance.
// Texte v2 (19/11/2026) : réécrit avec la plume de Moh (profil plume-moh).
// Illustrations : plans du portrait animé (public/livres/mbalia/). Février 1955 raconté « direct », comme voulu par Moh (18/11/2026).
export type MbaliaLang = "fr";
type Section = { id: string; title: string; image?: string; paragraphs: string[] };
type Book = { lang: MbaliaLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; subtitle?: string; sections: Section[] };

const I = (f: string) => `/livres/mbalia/${f}.webp`;

export const MBALIA_ML: Record<MbaliaLang, Book> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "M'Balia Camara, le courage de Tondon",
    subtitle: "La paysanne qui a dit NON",
    sections: [
      { id: "posseah", title: "Posséah", image: I("mbc-01-posseah-village-v1"), paragraphs: [
        "À Posséah, près de Dubréka, les rizières dessinent des carrés d'eau qui brillent jusqu'au bout de l'horizon. C'est là que naît M'Balia, en 1929.",
        "Ses parents cultivent le riz. L'école ? Elle n'ira jamais. Dans la Guinée coloniale, l'école est rare dans les campagnes. Pour une fille, encore plus.",
        "Mais M'Balia a deux yeux, deux oreilles, et une tête qui marche très bien. Elle regarde. Elle écoute. Elle comprend." ] },
      { id: "impot", title: "On paie, on repaie", image: I("mbc-02-calebasse-v1"), paragraphs: [
        "La Guinée est alors une colonie française. Dans les villages, des chefs de canton, nommés par l'administration, lèvent l'impôt.",
        "Ils réclament aussi des journées de travail forcé. Sans salaire. Celui qui dit non a des ennuis.",
        "M'Balia porte la calebasse, suit les grands dans les rizières, et entend ce qu'on se dit à voix basse : on paie, on repaie, et on se tait." ] },
      { id: "thierno", title: "Le chemin de Tondon", image: I("mbc-03-couple-chemin-v1"), paragraphs: [
        "M'Balia épouse Thierno Camara, un ancien soldat. Lui aime les réunions, les journaux, les idées nouvelles qui arrivent de la ville.",
        "Le couple s'installe à Tondon, dans la région de Dubréka.",
        "Le soir, Thierno discute politique avec ses amis. M'Balia écoute. Pas longtemps. Bientôt, c'est elle qu'on écoute." ] },
      { id: "arbre", title: "Sous le grand arbre", image: I("mbc-04-reunion-arbre-v1"), paragraphs: [
        "Début des années 1950. Un grand mouvement pour l'émancipation gagne les villages de Guinée. On se réunit sous les arbres pour parler de justice et de Dignité.",
        "Devant, les hommes parlent. Derrière, les femmes écoutent. Et souvent, elles se taisent.",
        "M'Balia, elle, avance d'un pas. Puis d'un autre. Et elle pose des questions." ] },
      { id: "voix", title: "La voix des femmes", image: I("mbc-05-voix-femmes-v1"), paragraphs: [
        "M'Balia prend la tête du comité des femmes de Tondon. Elle marche de village en village, de marché en marché. À pied.",
        "Elle va voir celles qu'on n'écoute jamais. Elle leur dit : vous avez le droit de comprendre. Vous avez le droit de vous organiser. Vous avez le droit de refuser l'injustice.",
        "Elle ne sait ni lire ni écrire. Pourtant, elle convainc mieux que bien des diplômés. Notre Amazone de Tondon : sans cartable, sans micro, et tout le monde l'entend." ] },
      { id: "main", title: "Une main, puis cent", image: I("mbc-06-main-levee-v1"), paragraphs: [
        "Quand M'Balia lève la main dans une réunion, une autre main se lève. Puis une autre. Puis cent.",
        "Les femmes de Tondon ne sont plus seules. Elles sont nombreuses. Et elles le savent.",
        "Chez le chef de canton, on commence à transpirer." ] },
      { id: "fevrier", title: "Février 1955", image: I("mbc-07-seuil-v1"), paragraphs: [
        "Février 1955. Le chef de canton, Almamy David Sylla, arrive à Tondon. Il réclame un impôt. Les habitants l'ont déjà payé.",
        "Le village refuse de payer deux fois. M'Balia fait partie de celles qui tiennent tête. Elle est enceinte de huit mois.",
        "La dispute tourne mal. Le chef de canton entre dans la maison des Camara. Il tire son sabre. Il frappe M'Balia au ventre." ] },
      { id: "foulard", title: "Le foulard à terre", image: I("mbc-08-foulard-sol-v1"), paragraphs: [
        "Les hommes du chef repartent en courant.",
        "Sur la natte, il ne reste qu'un foulard rouge et une calebasse renversée.",
        "Tondon est sous le choc. Frapper une femme enceinte. Même ceux qui avaient peur du chef n'en reviennent pas." ] },
      { id: "hopital", title: "À l'hôpital de Conakry", image: I("mbc-09-hopital-v1"), paragraphs: [
        "On transporte M'Balia à l'hôpital de Conakry. Elle a perdu beaucoup de sang.",
        "Le 11 février, son enfant naît sans vie.",
        "Le 18 février 1955, M'Balia Camara meurt à son tour. Elle avait vingt-six ans." ] },
      { id: "funerailles", title: "Une foule immense", image: I("mbc-10-funerailles-v1"), paragraphs: [
        "La nouvelle court plus vite que les camions sur la route de Dubréka. Pour ses funérailles, une foule immense remplit les rues de Conakry.",
        "Des gens qui ne l'avaient jamais vue marchent derrière elle. Des milliers.",
        "En quelques jours, une paysanne de Tondon devient le visage de tout un peuple qui dit : ça suffit." ] },
      { id: "independance", title: "Trois ans plus tard", image: I("mbc-11-independance-v1"), paragraphs: [
        "28 septembre 1958. La Guinée dit NON. Le 2 octobre, elle est indépendante.",
        "Dans la foule, des foulards rouges montent au-dessus des têtes.",
        "M'Balia n'est pas là pour voir ce jour. Mais ce jour-là, beaucoup pensent à elle." ] },
      { id: "marche", title: "Un nom qu'on dit tous les jours", image: I("mbc-12b-marche-panneau-v1"), paragraphs: [
        "Aujourd'hui, à Conakry, un grand marché porte son nom : le marché M'Balia.",
        "Chaque jour, des milliers de gens y achètent du riz, du poisson, des tomates. Ils disent « M'Balia » sans toujours savoir qui elle était.",
        "Toi, maintenant, tu sais. Le prochain qui te dit « on va au marché M'Balia », raconte-lui." ] },
      { id: "transmis", title: "Le foulard rouge", image: I("mbc-13-foulard-transmis-v1"), paragraphs: [
        "Au marché, une vendeuse tend un foulard rouge à une écolière.",
        "C'est juste un morceau de tissu. Mais dedans, il y a l'histoire d'une femme sans diplôme et sans titre, qui a quand même fait bouger tout un pays." ] },
      { id: "ecole", title: "Sur le chemin de l'école", image: I("mbc-14-fillette-foulard-v1"), paragraphs: [
        "M'Balia n'est jamais allée à l'école. Aujourd'hui, chaque matin, des filles de Guinée prennent ce chemin, cartable au dos.",
        "Elle a payé très cher le droit de dire NON à l'injustice.",
        "À nous de dire OUI à l'école, et d'aller jusqu'au bout du chemin. Pour elle. Pour la Guinée." ] },
    ],
  },
};
