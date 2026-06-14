// Livre « Les sept kilomètres » — Collection Pati Passage (13–15 ans).
// Macenta, Guinée forestière. Vévé, 14 ans, raconte pourquoi les femmes
// du village continuent de marcher 7 km jusqu'au marigot alors qu'une ONG a installé un puits
// tout près. Marie, la responsable de l'ONG, vient vérifier — et découvre que le marigot
// n'était pas qu'une source d'eau : c'était l'heure de liberté des femmes. Récit sur l'écoute,
// l'autonomie, et le développement qui décide « pour » sans demander « à ».
// Texte illustré, 15 doubles-pages. FR ; EN/AR/ZH à venir.
// Narrateur : Vévé (14 ans) ; sa mère se nomme Ogou. Vévé OUVRE et FERME le récit mais ne va PAS
//    au marigot (un garçon ne peut y assister — pudeur) ; c'est MARIE qu'on suit au marigot.

import type { Lang } from "./series/taadidi";

type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };

export const SEPT_KM_ML: Partial<Record<Lang, RBook>> = {
  fr: {
    lang: "fr",
    dir: "ltr",
    label: "Français",
    bookTitle: "Les sept kilomètres",
    sections: [
    { title: "1 — Ouverture", image: "/images/sept-kilometres/7km-01.webp", paragraphs: [
        "À peine rentrée du marché, ma mère se met à cuisiner.",
        "On voit sa maîtrise à la vitesse de ses mains. Elle coupe, elle épluche, elle prépare la sauce. C'est vite fini. Dehors, ses amies l'attendent. La corvée de l'eau les attend.",
        "Mon nom, c'est Vévé. J'ai quatorze ans. Et il y a une chose que je n'ai jamais comprise.",
    ] },
    { title: "2 — L'énigme", image: "/images/sept-kilometres/7km-02.webp", paragraphs: [
        "Chaque fin d'après-midi, les femmes du village partent au marigot. Sept kilomètres, aller-retour. Pour ramener l'eau.",
        "Mais le puits est juste là. À deux pas. L'ONG l'a installé il y a trois mois — avec une grande fête, le préfet, le maire, la fanfare.",
        "De l'eau propre, tout près. Et personne n'en veut.",
        "Pourquoi ?",
    ] },
    { title: "3 — Le panier", image: "/images/sept-kilometres/7km-03.webp", paragraphs: [
        "Le panier de ma mère n'est plus le même qu'au matin. Le matin, il était plein de ses aubergines à vendre. Le soir, il revient plein du poisson, de l'huile, du sel pour la sauce.",
        "On vend pour acheter. Le panier ne se vide jamais. L'argent non plus ne reste jamais.",
    ] },
    { title: "4 — Le départ", image: "/images/sept-kilometres/7km-04.webp", paragraphs: [
        "— Je vais au marigot, me dit ma mère. Il y a à manger dans le pot pour ton petit frère.",
        "— Pourquoi pas l'eau du puits ? Il est juste là.",
        "Elle sourit, comme si j'avais dit une bêtise.",
        "— Le puits, c'est pas pour après la journée. Après la journée, c'est le marigot.",
        "Aminata l'appelle depuis la cour. Elles partent en riant. Un rire qui a un sens pour elles, et aucun pour moi.",
    ] },
    { title: "5 — Marie", image: "/images/sept-kilometres/7km-05.webp", paragraphs: [
        "Elle s'appelle Marie. Elle vient de loin. C'est elle qui a fait venir le puits.",
        "Trois mois après, elle revient vérifier. Elle a des papiers, des chiffres, des questions.",
        "Partout, on lui dit oui. « Oui, madame, on utilise le puits. » Mais le puits reste vide l'après-midi, et les femmes marchent toujours.",
        "Marie ne comprend pas. Ça l'agace.",
    ] },
    { title: "6 — Les réponses", image: "/images/sept-kilometres/7km-06.webp", paragraphs: [
        "Au puits, elle interroge les femmes.",
        "— Pourquoi le marigot, si loin ?",
        "— L'eau y est plus fraîche, madame.",
        "— C'est une eau vivante, pas stagnante.",
        "— Le puits, c'est mort. Le marigot, c'est vivant.",
        "Des réponses qui ne tiennent pas debout. Marie le sait. Mais elle sent que la vraie raison se cache derrière.",
    ] },
    { title: "7 — L'invitation", image: "/images/sept-kilometres/7km-07.webp", paragraphs: [
        "C'est Aminata qui finit par le dire.",
        "— Madame, si vous voulez comprendre, venez avec nous.",
        "Marie accepte. Elle croit qu'elle va régler un problème d'eau.",
        "Elle se trompe.",
    ] },
    { title: "8 — La marche", image: "/images/sept-kilometres/7km-08.webp", paragraphs: [
        "Elles partent ensemble. Marie, ses chaussures de marche aux pieds, son sac sur le dos.",
        "Sous les palmiers, les femmes se mettent à chanter. Marie écoute. Elle essaie de suivre — elle n'y arrive pas.",
        "À mesure qu'elles s'éloignent du village, quelque chose change en elles. Le poids de la journée tombe, pas à pas.",
    ] },
    { title: "9 — Le marigot", image: "/images/sept-kilometres/7km-09.webp", paragraphs: [
        "Au marigot, les femmes posent leurs charges. Elles s'assoient. Elles parlent fort, elles se moquent, elles rient — ce rire qui vient du ventre.",
        "Marie reste à l'écart. Elle regarde. Elle attend.",
        "Et lentement, elle commence à voir.",
    ] },
    { title: "10 — Ce que Marie comprend", image: "/images/sept-kilometres/7km-10.webp", paragraphs: [
        "Ici, loin du village, les femmes ne sont plus des servantes, des vendeuses, des mères pressées.",
        "Ici, elles décident. Elles disent ce qu'elles veulent. Elles sont libres.",
        "Aminata se tourne vers Marie.",
        "— Vous voyez, madame ? C'est ça, le marigot. C'est pas l'eau.",
    ] },
    { title: "11 — La parole d'Ogou", image: "/images/sept-kilometres/7km-11.webp", paragraphs: [
        "Ma mère s'assoit près de Marie.",
        "— Avant le puits, on avait une heure. Une seule. Après le marché, après la cuisine, après les enfants. Une heure à nous. Ici.",
        "— Le puits nous l'a enlevée.",
        "— Mais l'eau du puits est plus propre, dit Marie.",
        "— Oui. C'est pour ça que c'est injuste. Tu as raison pour l'eau. Mais tu as tort pour nous.",
    ] },
    { title: "12 — L'injustice", image: "/images/sept-kilometres/7km-12.webp", paragraphs: [
        "— Avec le puits, on remplit, on rentre. C'est tout. On n'a plus rien à nous.",
        "— Mais vous pouvez venir au marigot quand même, dit Marie.",
        "— Non. Si on a le puits, on doit l'utiliser. Sinon, on est des têtues qui refusent le progrès.",
        "Ma mère regarde Marie, sans colère.",
        "— Vous décidez une bonne chose pour nous. Sans nous demander. Une bonne intention, ça ne suffit pas.",
        "Et Marie comprend qu'elle s'était trompée. Pas sur l'eau. Sur nous.",
    ] },
    { title: "13 — Le retour", image: "/images/sept-kilometres/7km-13.webp", paragraphs: [
        "Au village, Marie regarde le puits blanc qui brille dans le soir.",
        "— Qu'est-ce qu'on fait ?",
        "Ma mère hausse les épaules.",
        "— Le puits restera là. Et nous, on continuera au marigot.",
        "Puis elle dit la phrase que je n'oublierai jamais :",
        "— Une décision qu'on prend pour quelqu'un, sans le lui demander, c'est rarement une aide. C'est souvent une injustice.",
    ] },
    { title: "14 — La lettre", image: "/images/sept-kilometres/7km-14.webp", paragraphs: [
        "Marie est repartie le lendemain.",
        "Une semaine plus tard, une lettre arrive de la capitale.",
        "« Merci de m'avoir montré ce que je n'avais pas vu. Je vais changer ma façon de travailler. Les bonnes intentions ne suffisent pas. Il faut écouter. »",
        "Ma mère la lit, la montre aux autres. Elles sourient.",
        "— Au moins, elle a compris.",
    ] },
    { title: "15 — Ce que j'ai compris", image: "/images/sept-kilometres/7km-15.webp", paragraphs: [
        "Le puits brille toujours. Personne ne le prend. L'eau qu'il contient est la meilleure du village — et elle n'appartient à personne.",
        "Moi, j'ai changé. Maintenant, quand mon père dit « c'est comme ça », je me demande : qui a décidé ? Est-ce qu'on m'a demandé ?",
        "Les femmes qui m'ont élevé ne sont pas des ignorantes qu'on doit sauver. Ce sont des femmes qui savent. Qui décident. Qui refusent.",
        "Et refuser, ce n'est pas être en retard. Refuser, c'est un pouvoir.",
    ] },
    ],
  },
};
