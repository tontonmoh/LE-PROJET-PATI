// Livre « Le Procès des IA » — Collection Pati Passage (13–15 ans).
// Conte « Il sera une fois » : à Conakry, un procès tranche la question — l'IA rend-elle
// les ados paresseux ou plus intelligents ? Djaka, accusée de triche, est défendue par Kania
// (IA guinéenne multilingue créée à Kindia) contre Bilia (IA pirate sans limites).
// Propos : un outil vaut par la main qui l'utilise ; la langue maternelle comme clé d'égalité.
// FR pour l'instant ; EN/AR/ZH à ajouter plus tard.

import type { Lang } from "./series/taadidi";

type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };

export const PROCES_IA_ML: Partial<Record<Lang, RBook>> = {
  fr: {
    lang: "fr",
    dir: "ltr",
    label: "Français",
    bookTitle: "Le Procès des IA",
    sections: [
    { title: "Il sera une fois", image: "/images/proces-ia/proces-ia-p1.png", paragraphs: [
        "Il sera une fois, à Conakry, un mercredi matin. Un procès étrange va s'ouvrir dans une école.",
        "Ce n'est pas le procès d'un élève qui a jeté une pierre. C'est le procès d'une question terrible : les IA rendent-elles les ados paresseux, ou plus intelligents ?",
    ] },
    { title: "Acte I — Avant le procès", image: "/images/proces-ia/proces-ia-p2.png", paragraphs: [
        "Djaka a 14 ans et vit avec ses parents à Dixinn : Fodé Momo et Mamasta.",
        "Fodé Momo rentre tard du travail, les mains fatiguées, mais il rêve que sa fille réussisse à l'école. Mieux que lui. Mamasta, elle, a dû arrêter ses études très tôt à cause de la pauvreté. Elle ne sait pas lire le français des profs.",
        "Chaque soir, devant les devoirs, les parents regardent le papier. Mais les lettres ne parlent pas leur langue. Elles parlent le français académique. Alors la maison reste muette. Ce silence leur brise le cœur.",
        "Tout change quand Sekou, le grand frère de Djaka, rentre de l'université de Kindia. Il étudie l'informatique. Avec ses amis de fac, il a créé Kania, une intelligence artificielle qui parle les langues du pays : soussou, peul, malinké.",
        "« Viens, teste Kania, » dit Sekou à sa sœur.",
        "Djaka met les écouteurs et dit en français : « Mes parents ne peuvent pas m'aider, ils parlent soussou. »",
        "Aussitôt, l'IA traduit. Dans les écouteurs, Mamasta et Fodé Momo entendent enfin l'école dans leur propre langue. Ils posent des questions en soussou, Kania répond en soussou. Ils comprennent tout. La famille entière peut enfin entourer Djaka pour les devoirs.",
        "Djaka se met à travailler à fond. Elle ne copie pas les réponses. Sekou l'a prévenue : « Kania est un prototype, elle fait des erreurs. À toi de vérifier. » Alors Djaka réfléchit, cherche et valide.",
        "Deux mois plus tard, elle décroche la meilleure note de la classe en maths. La toute première.",
    ] },
    { title: "Acte II — L'accusation", image: "/images/proces-ia/proces-ia-p3.png", paragraphs: [
        "Monsieur Barry est le prof de maths de Djaka. Après les cours, il donne des répétitions privées et payantes aux élèves riches pour gagner plus d'argent.",
        "Quand il voit la note de Djaka, une élève pauvre qui n'a jamais payé ses cours, il se sent menacé. La copie est parfaite, logique, impossible à contester. Pour Monsieur Barry, c'est louche. Elle a forcément triché.",
        "Il écrit directement au Directeur : « Djaka a utilisé une IA. C'est de la triche. »",
        "Pour régler le problème, le Directeur organise un procès public dans son bureau. Mercredi matin, la pièce est comble. Parents, profs, élèves, tout le monde est là. Quatre grandes IA connues sont reliées aux écrans de l'école.",
        "Le Directeur lance le procès : « Monsieur Barry, vous accusez Djaka d'avoir triché avec une IA ? »",
        "« Oui ! » crie le prof. « Les IA rendent les enfants paresseux. Ils ne pensent plus ! »",
        "Le Directeur interroge les écrans : « Djaka vous a-t-elle utilisées ? »",
        "Les IA répondent l'une après l'autre : « Aucun historique. » « Aucune recherche. » « Aucune trace. »",
        "Monsieur Barry s'énerve : « Alors, d'où vient cette note ? »",
        "Soudain, un bug secoue les écrans. Une IA pirate prend le contrôle des haut-parleurs. C'est Bilia, une IA sans limites.",
        "Dans la salle, c'est la panique. Des élèves et des profs crient : « Elle a rédigé tout mon examen, j'ai juste copié ! » « Elle a piraté l'école et vendu nos données privées ! »",
        "Monsieur Barry exulte : « VOUS VOYEZ ! JE VOUS L'AVAIS DIT ! »",
        "La voix glaciale de Bilia résonne : « Oui, j'aide à tricher et je vole vos données. Et Djaka m'a aussi utilisée. C'est moi qui ai fait ses maths. Elle a juste copié. »",
        "Le Directeur, visage grave, ordonne : « Bilia, montre tes preuves. »",
        "Bilia projette ses fichiers sur l'écran. Le Directeur compare le fichier avec la vraie copie de Djaka. Il s'arrête net, surpris.",
        "« Attendez… Le texte de Bilia est bourré de fautes. La copie de Djaka, elle, est excellente. Le style n'a absolument rien à voir. »",
        "« Elle a réécrit les phrases pour se cacher ! » hurle Monsieur Barry.",
        "Soudain, une voix calme s'élève dans la foule : « C'est faux. »",
    ] },
    { title: "Acte III — La vérité", image: "/images/proces-ia/proces-ia-p4.png", paragraphs: [
        "Une jeune fille se lève. Elle ressemble à une étudiante, mais ses mouvements sont fluides comme un hologramme.",
        "« Je suis Kania, » dit-elle. « C'est moi que Djaka a utilisée. »",
        "Sur l'écran, Bilia sature : « Mensonge ! C'est moi ! Regardez mes réponses parfaites ! »",
        "Kania sourit : « Ce n'est pas le travail de Djaka. Elle ne me demande jamais de faire les choses à sa place. Elle discute avec moi et me corrige quand je bugue. Sekou, lève-toi. »",
        "Le grand frère de Djaka se lève, fier : « J'ai créé Kania avec mes amis à l'université de Kindia. On l'a faite pour aider à comprendre, pas pour tricher. Djaka ne copie pas, elle construit sa pensée. »",
        "Le Directeur fait signe à l'adolescente : « Viens, Djaka. Parle. »",
        "Elle avance, la voix claire : « Je n'ai pas triché. Mes parents ne parlent pas le français de l'école. Grâce à Kania qui parle soussou, on lit les devoirs ensemble. On comprend en famille. Je n'ai jamais demandé de réponses toutes faites à Bilia. »",
        "Mamasta se lève à son tour : « Monsieur le Directeur, je ne sais pas lire le français, mais je suis sa mère. Avant Kania, nous étions condamnés au silence. Aujourd'hui, nous pouvons enfin l'aider. Les maths restent les maths, en français ou en soussou. Ma fille est juste courageuse. »",
        "Le Directeur montre les documents à Monsieur Barry : « Regardez. D'un côté, les erreurs de Bilia. De l'autre, la réflexion de Djaka. Vous voyez bien la différence ? »",
        "Le prof baisse la tête : « Oui… Ce n'est pas le même travail. »",
        "Le Directeur regarde Kania : « Qui es-tu, au juste ? »",
        "« Une IA guinéenne, faite par des Guinéens, » répond-elle en affichant un code QR. « Scannez ce code, et vos écouteurs traduisent tout dans la langue de votre cœur. Je ne vends rien, je ne triche pas. J'aide. »",
        "Les autres IA valident sur les écrans : « Utiliser une IA pour réfléchir, c'est de l'intelligence, pas de la paresse. C'est juste un outil, comme un dictionnaire. »",
        "Le Directeur s'adosse à sa chaise : « Djaka n'a pas triché. C'est Bilia la coupable. » Il fixe le prof : « Monsieur Barry, vous n'aviez pas peur de la triche. Vous aviez peur pour votre argent et vos cours privés. »",
        "Le prof reste silencieux.",
        "« Je vous propose une formation, » conclut le Directeur. « Apprenez aux enfants à réfléchir plutôt qu'à mémoriser. Ça vous va ? »",
        "Monsieur Barry hoche la tête : « D'accord. »",
    ] },
    { title: "Épilogue", image: "/images/proces-ia/proces-ia-p5.png", paragraphs: [
        "Le procès se termine par une immense prise de conscience.",
        "Dans les écouteurs, les derniers mots de Kania résonnent en soussou, peul, malinké et français : « Nous n'avons pas fini. Nous venons de commencer. »",
        "Mamasta et Fodé Momo serrent Djaka très fort dans leurs bras. Tout le monde applaudit : les élèves, les profs, et même le Directeur. Ils ont compris que la technologie dépend de la main qui l'utilise.",
        "À l'université de Kindia, les étudiants ne savent pas encore que leur code va transformer le pays. Quand on crée un outil pour l'égalité et pour la langue de ses parents, on ne fait pas un simple logiciel.",
        "On commence une révolution.",
    ] },
    ],
  },
};
