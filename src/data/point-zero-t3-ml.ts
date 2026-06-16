// Série « LE POINT ZÉRO » — Tome 3 : « Le mystère des îles perdues »
// Pati, Passage (13-15 ans). Thème : sacrifice, transmission, reconnaissance.
// 11 doubles-pages. Héros : Djènè et Bangaly. Narrateur : Papou (oiseau du paradis).
// Lieu : île isolée du Pacifique.
// Plume « à la Barjavel » — vif, sensations, fragments nets.
// FR ; EN/AR/ZH à venir.

import type { Lang } from "./series/taadidi";

type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };

export const POINT_ZERO_T3_ML: Partial<Record<Lang, RBook>> = {
  fr: {
    lang: "fr",
    dir: "ltr",
    label: "Français",
    bookTitle: "Le Point Zéro — Le mystère des îles perdues",
    sections: [
    { title: "", image: "/images/point-zero/pz3-01.webp", paragraphs: [
        "Le champ s'illumina.",
        "Pas progressif. Brutal. L'arachide se déchira en mille éclats blancs, et deux enfants s'effondrèrent au sol, étourdis.",
        "Je les vis.",
        "Je suis Papou. Oiseau du paradis. Mon plumage brille — or, violet, noir iridescent. J'ai attendu ce moment longtemps.",
        "Je reconnaissais cette lumière. C'était celle du champ. Le même champ. Celui d'où j'avais décollé il y a des générations.",
        "Les enfants respiraient à peine.",
        "— Vous avez suivi l'étoile jusqu'ici, dis-je.",
    ] },
    { title: "", image: "/images/point-zero/pz3-02.webp", paragraphs: [
        "Djènè se releva d'abord.",
        "— Qui êtes-vous ?",
        "— Papou. Je suis né en Guinée. J'ai vieilli ici.",
        "Je volai bas. Assez bas pour qu'ils voient mes plumes. L'or. Le violet. Le noir qui danse.",
        "— Kamara vous a envoyés ?",
        "— Oui, dit Bangaly. Comment vous savez ?",
        "— Parce que j'attends depuis longtemps. Depuis très longtemps.",
        "Je me posai sur une branche cassée.",
        "— Asseyez-vous. Ce que j'ai à vous raconter, c'est le sacrifice d'une étoile. Et le mien.",
    ] },
    { title: "", image: "/images/point-zero/pz3-03.webp", paragraphs: [
        "Je suis né blanc.",
        "Blanc pur. Les autres oiseaux du paradis — or, rouge, violet. Pas moi.",
        "Et ils se moquaient.",
        "« Tu es cassé. » « Pas de couleurs. » « Reste au sol. »",
        "Alors j'ai appris à voler seul. Très haut. Plus haut que les autres. Là où l'air était mince et froid.",
        "Un jour, j'ai vu quelque chose tomber.",
        "Une étoile.",
        "Blanche. Solitaire. Sans peur.",
        "Elle tombait vers un champ d'arachides à Kassa.",
    ] },
    { title: "", image: "/images/point-zero/pz3-04.webp", paragraphs: [
        "Je l'ai reconnue.",
        "Peut-être parce qu'elle était seule aussi. Peut-être parce qu'elle brillait. Peut-être parce que, en la regardant, je sentais que je n'étais pas cassé — je suis différent.",
        "Elle ne s'arrêtait pas.",
        "Elle appelait. Pas avec une voix. Avec la lumière qui disait : Suis-moi.",
        "Alors j'ai volé.",
        "J'ai suivi cette lumière très loin. Plus loin que n'importe quel oiseau du paradis n'avait jamais volé. Les montagnes de Guinée disparurent. L'océan Pacifique s'ouvrit — infini, sombre.",
        "J'avais peur.",
        "J'étais fatigué.",
        "Et pourtant — je ne pouvais pas l'abandonner.",
    ] },
    { title: "", image: "/images/point-zero/pz3-05.webp", paragraphs: [
        "Le voyage dura des jours. Des nuits.",
        "Parfois je voulais revenir. Mais je savais qu'elle, si je revenais, resterait seule. Et je ne pouvais pas accepter ça.",
        "Alors j'ai continué.",
        "Et pendant que je volais, pendant que la lumière me traversait — mes plumes ont changé.",
        "Le blanc ne disparut pas.",
        "Il s'est rempli. Or. Violet. Noir profond. Luminescent. Les couleurs que j'avais enviées, elles émergèrent de moi parce que j'acceptais le sacrifice.",
        "Je ne suis pas devenu beau pour impressionner. Je suis devenu beau parce que je servais.",
    ] },
    { title: "", image: "/images/point-zero/pz3-06.webp", paragraphs: [
        "Quand j'ai vu cette île — impénétrable, verte, perdue — j'ai compris.",
        "L'étoile s'y était posée.",
        "Et moi, j'étais venu pour la veiller.",
        "Depuis, je veille.",
        "Chaque jour, je vole jusqu'au cœur de cette jungle. Et là, elle attend. Elle n'a pas disparu. Elle s'est juste reposée.",
        "Elle apporte la fertilité. La terre rouge devient vivante. L'eau jaillit pure. Les arbres portent des fruits qu'on n'a jamais vus.",
        "Et moi — j'ai apporté les techniques.",
    ] },
    { title: "", image: "/images/point-zero/pz3-07.webp", paragraphs: [
        "J'ai enseigné l'agriculture selon la méthode Baga.",
        "Comment cultiver. Comment respecter la terre. Comment nourrir.",
        "Les autochtones ont appris. Ils ont planté. La jungle s'est transformée. Fertile. Vivante. Humaine.",
        "Pendant longtemps, j'ai fait cela seul.",
        "Puis Kamara est né à Kassa.",
        "Et j'ai senti — quelque chose se réveillait.",
    ] },
    { title: "", image: "/images/point-zero/pz3-08.webp", paragraphs: [
        "Kamara a compris le secret de l'arachide.",
        "De très loin, j'ai reconnu son œuvre.",
        "L'arachide qui voyage. L'arachide qui relie.",
        "J'ai attendu. J'ai anticipé.",
        "Parce que je savais qu'un jour, quelqu'un suivrait cette lumière jusqu'ici. Quelqu'un qui prendrait part à la veille.",
        "Hier, vous étiez avec Kamara.",
        "Aujourd'hui, vous êtes ici.",
    ] },
    { title: "", image: "/images/point-zero/pz3-09.webp", paragraphs: [
        "— Où est-elle ? demanda Djènè. L'étoile ?",
        "— Venez.",
        "Je décollai. Ils me suivirent. Lianes écartées. Arbres millénaires. Rivières souterraines qui chantaient.",
        "En marchant, Bangaly demanda :",
        "— Vous n'avez pas regretté ? De ne pas revenir ?",
        "Je volai bas.",
        "— Le regret est un luxe quand on veille quelque chose de sacré.",
        "Et soudain — le cœur de la jungle s'ouvrit.",
    ] },
    { title: "", image: "/images/point-zero/pz3-10.webp", paragraphs: [
        "L'étoile reposait là.",
        "Pas en forme d'étoile. En forme de terre. Rouge-ocre. Fertile. Une source jaillissait au centre — eau mère.",
        "Autour, les oiseaux du paradis dansaient. Centaines. Couleurs impossibles ailleurs sur Terre.",
        "Et les humains avaient construit. Champs. Villages. Vie.",
        "Djènè regarda autour.",
        "— C'est comme la Guinée, murmura-t-elle.",
        "Bangaly posa sa main sur la terre rouge.",
        "— Oui. C'est exactement comme là-bas. L'eau. La fertilité. Les gens qui cultivent.",
        "Je me posai.",
        "— C'est pour ça qu'ils l'ont nommée ainsi. En voyant la ressemblance. Pas le nom que les explorateurs avaient donné. Mais la vraie ressemblance. La vie que l'étoile apporte. La culture que j'ai apportée. La Guinée qui a voyagé jusqu'ici.",
    ] },
    { title: "", image: "/images/point-zero/pz3-11.webp", paragraphs: [
        "Nous avons travaillé jusqu'au coucher du soleil.",
        "Planté. Cultivé. Versé l'eau de la source sur la terre. Les oiseaux du paradis dansaient.",
        "C'était un acte de reconnaissance.",
        "Quand la nuit tomba, je les ramenai vers le champ d'arachides.",
        "— Il y a une autre île, dis-je en volant. Encore plus loin. Où l'étoile a aussi voyagé. Où le sacrifice a été encore plus grand.",
        "Djènè me regarda.",
        "— Vous venez avec nous ?",
        "— Non. Je reste. Quelqu'un doit veiller ici.",
        "Mais vous — vous devez aller.",
        "Kamara vous donnera les coques. Vous comprendrez.",
        "Et souvenez-vous : partout où vous irez, vous êtes les ambassadrices de votre terre. Soyez aussi belles que cette étoile vous l'a montré.",
    ] },
    ],
  },
};
