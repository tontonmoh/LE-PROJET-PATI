// Livre Pati standalone — « La guerre des casseroles »
// Sous-titre : ou la nuit où le courant s'en alla
// Pati, Passage (13-15 ans). Fable en trois actes — tradition vs modernité, mémoire de la terre.
// Adaptation en prose rythmée (d'après la fable en vers). Esprit truculent, oralité, ironie douce.
// FR ; EN/AR/ZH à venir.

import type { Lang } from "./series/taadidi";

type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };

export const CASSEROLES_ML: Partial<Record<Lang, RBook>> = {
  fr: {
    lang: "fr",
    dir: "ltr",
    label: "Français",
    bookTitle: "La guerre des casseroles",
    sections: [
    { title: "La maison qui changea", image: "/images/casseroles/casseroles-01.webp", paragraphs: [
        "C'était une maison comme il en est mille. Modeste, un peu bancale, au bout d'une ruelle. On y mangeait du riz, du fonio, de la sauce, cuits sur trois pierres noires par des mains patientes.",
        "Les objets s'y connaissaient depuis toujours : la Marmite et la Louche, le Van et la Daba. On vivait sans façon. On vivait de peu de chose.",
        "Puis un matin — qui sait comment ? la chance a ses raisons — la fortune entra. D'un coup. Sans frapper. Sans prévenir. On ne sut pas d'où. On sut juste qu'au réveil, la maison se trouva plus riche que la veille.",
        "Et tout se mit à changer.",
        "D'abord, il y eut plus de viande dans la marmite. Puis des sacs, des cartons, des caisses qu'on livrait. Puis une voiture, un soir, vint dormir dans la cour. Puis, contre le mur, un grand carton tout blanc, d'où montait un bzzz électrique encore endormi.",
        "Les Anciens se regardèrent. Quelque chose arrivait.",
    ] },
    { title: "Le conseil s'ouvre", image: "/images/casseroles/casseroles-02.webp", paragraphs: [
        "Ce soir-là, sous le toit de la maison en chaleur, où l'oignon fondait d'aise et l'ail rendait les armes, on chuchotait encore le long du mur, à voix basse : « Des nouveaux. Ils cuisent sans le feu. Sans la main. Ils sont déjà chez nous. Demain, ils seront rois. »",
        "Le foyer convoqua tout son monde : « Il nous faut, dès ce soir, un chef de délégation. Quelqu'un qui parlera pour nous, les Anciens, demain. »",
        "On s'assit. On toussa. La séance était ouverte.",
        "La Marmite, d'abord, bomba son ventre rond, flancs noircis, tête haute, couronne de vapeur. « Le chef, c'est moi, voyons. Je suis l'âme du repas. C'est en moi que tout cuit, que tout mêle et tout chante. Le bouillon, c'est mon œuvre. La sauce, mon sang. Qui d'autre que la mère, pour mener ses enfants ? »",
        "Dans son coin, la Vanne glissa : « Bien dit, ma vieille… mais sans feu sous tes fesses, t'es qu'un seau qui s'ennuie. »",
    ] },
    { title: "La parade des ustensiles", image: "/images/casseroles/casseroles-03.webp", paragraphs: [
        "Le Couvercle bondit, vexé. « Faux ! Le secret, c'est moi qui le garde et le couve. Soulevez-moi trop tôt : l'arôme fout le camp. Le chef doit savoir taire. Moi seul sais retenir. »",
        "La Louche plongea, large, ronde et bombée. « Taire, garder… mais qui partage, à la fin ? Moi. Je puise, je verse, je donne à chacun sa part. Un chef, ça sert les autres. Donc le chef, ce sera moi. »",
        "La Cuillère ricana, petite, vive, têtue. « Et qui goûte avant tous ? Qui dose ? Qui corrige ? Une pincée de trop, et ton plat est perdu. Le chef, c'est qui surveille. Et qui surveille ? Moi. » — « Surveiller… ou lécher ? » souffla la Vanne.",
        "Le Mortier et le Pilon entrèrent en cadence, deux compères qui cognent, tam-tam de la cuisine. « Boum ! Avant que ça cuise, il faut bien que ça craque. Le piment, le gingembre, l'arachide, le sel — c'est nous qui les marions à grands coups de musique. Pas de chef sans courage. Et le courage, c'est nous ! »",
        "Le Tamis se dressa, fin, fier, plein de trous. « Grossiers ! Moi, je trie : je ne garde que le doux. » Le Van lui répondit, calme : « Trier ? C'est mon métier depuis l'aube du monde. Mais je ne crie pas, moi. Je vanne. Et je me tais. »",
    ] },
    { title: "Le feu, l'eau, et la dispute", image: "/images/casseroles/casseroles-04.webp", paragraphs: [
        "Alors gronda le Fourneau, vieux trône de braise. « Assez ! Petit peuple sans flamme, écoutez-moi. Que seriez-vous, tous tant que vous êtes, sans feu ? Du froid. Du cru. Du rien. Je suis le cœur qui bat. Le chef de la maison, c'est celui qui réchauffe. »",
        "Le Charbon, sous la cendre, souffla, presque éteint. « Le cœur ? C'est moi qui brûle, en silence, pour vous. Je rougis, je me ronge, je meurs en vous nourrissant. Vous mangez ; moi, je tombe en poussière. Et je donne. »",
        "L'Eau, longtemps tranquille, monta dans la marmite. « Criez, criez toujours. Sans moi, rien ne se lie. Je suis la vie qui coule, je suis la mère du bouillon. Ôtez-moi : votre festin n'est qu'un tas qui se brûle. »",
        "La Calebasse enfin, ronde, lisse, élégante. « Mesurer, transporter, offrir de mains en mains… Le repas voyage en moi. Je suis l'hospitalité. Un chef doit accueillir. Qui accueille mieux que moi ? »",
        "Le Conseil s'échauffait. On se traitait de « creux », de « ferraille », de « bois mort », de « four à prétention ». Chacun voulait le titre, la première place, et le bâton sculpté du Chef de la Maison.",
    ] },
    { title: "La Daba", image: "/images/casseroles/casseroles-05.webp", paragraphs: [
        "C'est alors qu'à la porte on entendit un raclement. Un fer rouillé, courbé, couvert de terre rouge, poussa du manche, entra — et tout le monde se tut.",
        "La Daba.",
        "Elle regarda le cercle, un long moment, sans rien. Puis sa voix, basse et lente, comme un sillon qui s'ouvre : « Belle assemblée. Beau bruit. Beau concours de grandeur. Vous cherchez un chef pour défendre la maison. Et personne — personne — n'est venu me chercher. »",
        "« Moi, sans qui pas un grain ne serait dans le van. Moi, sans qui pas un épi, pas un brin de fonio ne serait sorti vivant du ventre de la terre. Vous êtes la cuisine. Moi, je suis le matin. Vous êtes le festin. Moi, j'étais déjà le champ. »",
        "Un silence. La Marmite, gênée, regarda ailleurs.",
        "« Je n'ai pas votre éclat. Je rentre noire de boue. On me laisse dehors, contre le mur, sous la pluie. Mais ne me croyez pas — puisque vous m'oubliez — demandez à la Terre. Elle, elle se souvient. »",
    ] },
    { title: "La Terre se souvient", image: "/images/casseroles/casseroles-06.webp", paragraphs: [
        "Et la Daba frappa, trois fois, le sol battu. La Terre, en dessous, répondit d'une voix de tambour :",
        "« Avant la marmite, l'eau. Avant l'eau, la pluie. Avant la pluie, la graine. Avant la graine, la main. Et dans la main, toujours, le manche de la Daba. Vous voulez un vrai chef ? Prenez la plus ancienne. »",
        "Le Conseil baissa le front. Le Pilon se fit muet. Le Fourneau, tout gêné, rougit sans dire un mot. La Louche, doucement, s'inclina la première et mit, à sa main droite, la vieille oubliée.",
        "« Tu mèneras, dirent-ils. Tu parleras pour nous. Demain, devant les Neufs, tu diras d'où l'on vient. »",
        "Et la Daba sourit — un sourire de terre. « Demain, je leur dirai. Mais eux aussi en viennent. »",
        "La Vanne, pour une fois, ne lança aucune vanne. Elle ôta son chapeau — ce qui, d'une vanne, est rare.",
    ] },
    { title: "L'irruption des Modernes", image: "/images/casseroles/casseroles-07.webp", paragraphs: [
        "Au matin, la lumière entra — mais pas celle du jour. Une lumière froide, bleue, qui clignote et qui ronfle. On les avait livrés la veille, en grande pompe, tout neufs, tout fiers, encore tièdes de leurs cartons. La porte s'ouvrit seule. Un courant d'air glacé. Et la Génération Neuve entra, en rang serré.",
        "Le Frigo, le premier, immense, blanc, glacé, toisa les vieux objets du haut de ses deux mètres. « Bonjour, les antiquités. On m'envoie vous le dire : la cuisine a changé. Vous pouvez disposer. Moi, je garde le frais. Vos restes, sans le Frigo, pourriraient en un jour. Qui de vous fait cela ? »",
        "Le Blender vrombit, lame au clair. « Et la vitesse ? Regardez ! » — vrrrrr — « En trois secondes, ce que votre Pilon martèle pendant une heure, moi, je le rends en crème. Turbo. Lisse. Parfait. Le Mortier ? Une brouette. Moi, je suis la fusée. »",
        "Le Micro-ondes clignota, carré, pressé, content. « Réchauffer ? Trente secondes. Bip-bip. C'est servi. Plus de feu, plus de cendre, plus d'attente, plus de fumée. Le progrès, mes aïeux, ça s'appelle un bouton. »",
        "La Gazinière, plus calme, alluma ses couronnes — de petites fleurs de feu, bleues, bien rangées. « Doucement, dit-elle. Moi aussi, je fais du feu. Je suis du Neuf, c'est vrai. Mais le feu, c'est ancien… » On la fit taire vite. « Pas de nostalgie, voyons ! »",
    ] },
    { title: "Trois petits mots", image: "/images/casseroles/casseroles-08.webp", paragraphs: [
        "Le Four, le Batteur, la Bouilloire, l'Induction, en chœur, scandaient leur réclame : « Watts ! Vitesse ! Programme ! Minuteur ! Sans effort ! Demain, c'est nous. Hier, c'est vous. Place au courant ! »",
        "Les Anciens, un instant, restèrent sans bouger. La Marmite tremblait. Le Charbon se fit petit. Le Mortier, vexé, leva son lourd Pilon — mais la Daba, d'un geste, arrêta le combat.",
        "Elle s'avança, courbée, minuscule et boueuse, devant le grand Frigo qui brillait comme un roi. « Je suis leur déléguée. J'ai trois mots à vous dire. Trois petits mots. Après, vous ferez ce qu'il faut. »",
        "Le Frigo, de très haut : « Faites vite, grand-mère. On a un programme. » — « Justement, dit la Daba. Le frais que tu gardes si bien — d'où vient-il, ce poisson ? Cette tomate au froid — qui l'a tirée du sol ? Et toi, Blender si lisse — ton arachide en crème, qui l'a semée, sarclée, battue, avant ta lame ? »",
        "Un blanc. Le Blender toussa. Le Frigo cligna deux fois. « Ça… c'est pas le problème. Nous, on est le futur. » — « Le futur, dit la Daba, mange aussi du présent. Et le présent, mes beaux, pousse encore dans la terre. »",
        "Le Micro-ondes ricana : « Discours de vieil outil. Vous parlez. Nous, on branche. Et la maison nous suit. » Il allait conclure — fier, carré, victorieux — quand soudain, d'un seul coup… clac.",
    ] },
    { title: "Le délestage", image: "/images/casseroles/casseroles-09.webp", paragraphs: [
        "Le courant s'en alla.",
        "Tout s'éteignit d'un coup. Plus de bleu. Plus de bzzz. Le Frigo se tut. Le Blender pendit, lame morte. Le Micro-ondes, noir, ne fit plus un seul bip. L'Induction, la Bouilloire, le Four — éteints, muets. La cuisine, soudain, retomba dans le noir.",
        "« Qu'est-ce… qu'est-ce qui se passe ? » bredouilla le Frigo. « Le courant, dit la Vanne. Tu sais : le dé-les-tage. » — « Le quoi ? » — « La coupure. Ça arrive, par ici. Toi qui gardes le frais : tu vas garder le tiède. »",
        "On entendit, dans l'ombre, le Frigo qui suait. Le poisson, lentement, recommençait à fondre. Le Blender, débranché, n'était plus qu'un bocal. Le grand Micro-ondes : une boîte. Rien qu'une boîte.",
        "Alors, dans le noir, une étincelle. Le Charbon, doucement, s'était mis à rougir. La Daba souffla dessus. Le Foyer s'alluma. Trois pierres. Une flamme. Une lumière qui danse.",
    ] },
    { title: "La nuit où la guerre prit fin", image: "/images/casseroles/casseroles-10.webp", paragraphs: [
        "Le Mortier reprit son chant : boum, boum, boum. La Marmite chauffa. L'Eau se mit à chanter. La Calebasse servit. La Louche partagea. Et la maison, dans l'ombre, sentit l'odeur du vivre.",
        "Le Frigo, tout penaud, murmura dans le noir : « Comment… comment faites-vous ? Sans bouton ? Sans courant ? » — « On ne dépend pas du fil, répondit la Daba. Nous, notre courant à nous, c'est la patience et la main. »",
        "La Gazinière osa : « Moi, j'ai du gaz. Je peux donner du feu, si on me laisse faire. » — « Viens, dit la Daba. Approche. Le feu n'a pas d'âge. Tu es neuve, mais ton feu est cousin du mien. »",
        "Et c'est ainsi, cette nuit, que la guerre prit fin. Pas par un vainqueur. Pas par un écrasé. Mais quand le grand Frigo, de lui-même, comprit : « Le poisson que je garde… c'est elle qui l'a fait pousser. »",
        "Au petit jour, le courant revint en bourdonnant. Le Blender repartit. Le Micro-ondes fit bip. Mais quelque chose, en eux, avait changé de place : le Blender, en passant, salua le Mortier. « Bonjour, dit-il tout bas… bonjour, grand-père. »",
    ] },
    { title: "Morale", image: "/images/casseroles/casseroles-11.webp", paragraphs: [
        "Petit, dans ta cuisine, il y a deux familles : celle des fils électriques, celle des mains usées.",
        "Le frigo et la daba nourrissent le même enfant.",
        "Et le jour où le courant, soudain, s'en ira, tu seras bien content qu'il reste un peu de braise — et quelqu'un qui se souvient d'où vient le grain de riz.",
    ] },
    { title: "Coda", image: "/images/casseroles/casseroles-12.webp", paragraphs: [
        "Et tandis que l'assemblée, lentement, se dispersait, que chacun regagnait son coin — le Van au mur, la Louche à son clou, le Pilon contre le Mortier, la Daba près des braises, au chaud, enfin tranquille —",
        "dans la cour, un moteur. Madame Bangoura rentra. Elle gara sa voiture sous le manguier, descendit.",
        "Sur le pare-brise, glissée sous l'essuie-glace, une affiche.",
        "TRACTEUR À VENDRE.",
    ] },
    ],
  },
};
