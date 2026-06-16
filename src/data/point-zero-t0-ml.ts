// Série « LE POINT ZÉRO » — Tome 0 : « La nuit où l'étoile se donna »
// Pati, à cheval Aventure (10-12) / Passage (13-15). Mythe d'origine fantastique.
// Sur l'île de Kassa (terre baga, sable rouge), au pied du phare de Tamara, deux enfants —
// DJÈNÈ (la ville, les étoiles, la lunette) et BANGALY (l'île, la mer, la mémoire) — découvrent
// que le faisceau du phare marque des pauses et révèle quatre marques, les quatre coins du monde,
// où sont tombés les éclats d'une étoile-femme : Guínée, tombée par amour. Conteur : le vieux
// Kamara, gardien du phare (« celui qui veille »). Voyage par l'arachide crue trouvée dans un champ.
// Visage de l'étoile = D'mba, déesse baga. 28 doubles-pages. Plume « à la Barjavel ».
// FR ; EN/AR/ZH à venir. ⚠️ D'mba = patrimoine sacré baga : validation baga souhaitable.

import type { Lang } from "./series/taadidi";

type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };

export const POINT_ZERO_T0_ML: Partial<Record<Lang, RBook>> = {
  fr: {
    lang: "fr",
    dir: "ltr",
    label: "Français",
    bookTitle: "Le Point Zéro — La nuit où l'étoile se donna",
    sections: [
    { title: "", image: "/images/point-zero/pz0-01.webp", paragraphs: [
        "Il y a, sur la Terre, un point d'où l'on a mesuré le monde entier.",
        "Un seul. Là où la ligne qui sépare le haut du bas croise celle qui sépare le levant du couchant. Les savants l'appellent le point zéro. Il est posé sur la mer, au large de la Guinée, à l'endroit exact où l'eau et le ciel se touchent sans qu'on puisse dire où finit l'un, où commence l'autre.",
        "Personne n'y habite. On ne peut pas. Mais quelqu'un le garde.",
        "Son nom est Kamara. En langue mandingue, cela veut dire : celui qui veille.",
    ] },
    { title: "", image: "/images/point-zero/pz0-02.webp", paragraphs: [
        "La pirogue accosta Kassa au moment où le soleil touchait l'eau. Le sable, sous mes pieds nus, était rouge. Rouge comme une braise qu'on aurait éteinte la veille et qui garderait, dessous, un peu de feu.",
        "Mon père avait un chantier sur l'île. Nous étions venus en famille, mes trois sœurs et moi. Elles voulaient la plage. Moi, je voulais autre chose.",
        "— Le vieux Kamara te mènera au phare, avait fini par dire mon père. Une fois. Une seule. La nuit, là-haut, ce n'est pas pour les enfants.",
        "Je m'appelle Djènè. Djénéba, en entier, mais personne ne m'appelle ainsi, sauf mon grand-père quand il veut que je l'écoute. J'aime les étoiles depuis que je sais lever la tête.",
    ] },
    { title: "", image: "/images/point-zero/pz0-03.webp", paragraphs: [
        "Un garçon nous attendait sur la grève, pieds dans l'eau, immobile comme s'il faisait partie du paysage.",
        "— Bangaly, dit-il sans qu'on lui demande. Je suis d'ici.",
        "Il regarda ma lunette, mon carnet, mes cartes pliées sous le bras. Il ne dit rien, mais je vis sa bouche se tordre un peu, comme on sourit d'une chose qu'on trouve inutile.",
        "— Tu sais lire ça ? demandai-je, vexée, en montrant le ciel.",
        "— Je sais lire la mer, répondit-il. C'est elle qui ramène les gens vivants. Pas tes papiers.",
        "Nous ne nous aimions pas encore. Cela viendrait. Mais il fallait d'abord une nuit, et un secret trop grand pour un seul.",
    ] },
    { title: "", image: "/images/point-zero/pz0-04.webp", paragraphs: [
        "À neuf heures, le générateur du village s'éteignit d'un coup. Toutes les lumières des hommes moururent ensemble.",
        "Alors le ciel s'ouvrit.",
        "Je connaissais les étoiles par leur nom, par les livres, par les nuits de Conakry où l'on en devine à peine quelques-unes. Mais ça — ça, je ne l'avais jamais vu. Il y en avait trop. Elles descendaient jusqu'à la mer. On aurait dit que le ciel s'était penché pour nous regarder de plus près.",
        "— À Conakry, soufflai-je, il y en a moins.",
        "— Non, dit la voix de Kamara, derrière nous. Il y en a autant. C'est la ville qui vous crève les yeux. Ici, on les retrouve.",
    ] },
    { title: "", image: "/images/point-zero/pz0-05.webp", paragraphs: [
        "En face, sur l'île de Tamara, le phare tournait. Son trait de lumière balayait l'eau noire, revenait, repartait. Je le suivis avec ma lunette, pour le plaisir.",
        "Et je m'arrêtai.",
        "— Il ne tourne pas, murmurai-je.",
        "— Quoi ? fit Bangaly.",
        "— Il ne tourne pas régulièrement. Il s'arrête. Regarde — il marque un temps, toujours au même endroit. Puis il repart. Comme quelqu'un qui... qui montre quelque chose du doigt.",
        "Bangaly s'approcha. Pour la première fois, il ne souriait plus.",
    ] },
    { title: "", image: "/images/point-zero/pz0-06.webp", paragraphs: [
        "Le faisceau s'immobilisa sur un rocher de la côte. Resta. Et sur la pierre, dans la lumière crue, des traits parurent. Pas une ombre, pas un hasard de la roche. Des traits. Comme gravés là, et qui attendaient depuis toujours qu'on les éclaire.",
        "Je pris la photo avant même de comprendre pourquoi.",
        "— Ces marques, dit Bangaly tout bas, je les ai vues mille fois sur les rochers d'ici. On dit qu'elles sont vieilles. Plus vieilles que les vieux.",
        "Derrière nous, Kamara ne disait rien. Mais je l'entendis respirer autrement. Comme un homme qui a gardé un secret toute sa vie, et qui sent que la nuit est enfin venue de le rendre.",
    ] },
    { title: "", image: "/images/point-zero/pz0-07.webp", paragraphs: [
        "Sur mon téléphone, une application lisait l'endroit d'où venait chaque photo. La latitude. La longitude. Et la direction.",
        "Je la lançai. Un chiffre s'afficha. Une flèche.",
        "— Plein ouest, dis-je. La marque montre l'ouest. La mer, et au bout de la mer, l'autre rive du monde.",
        "Kamara s'accroupit près de moi. Sa vieille main trembla un peu au-dessus de l'écran, sans le toucher.",
        "— Cinquante ans, dit-il. Cinquante ans que je vois ce phare s'arrêter. Je croyais qu'il se reposait. Personne ne m'avait dit qu'il parlait.",
    ] },
    { title: "", image: "/images/point-zero/pz0-08.webp", paragraphs: [
        "Nous avons attendu. Le faisceau repartit, tourna, s'arrêta encore. Puis encore. Puis une dernière fois.",
        "Quatre pauses. Quatre rochers. Quatre marques. Et quatre flèches sur mon écran.",
        "— L'ouest, le sud, l'est, le nord, comptai-je. Les quatre coins du monde.",
        "Bangaly regardait l'eau noire, et pour une fois sa voix de garçon des îles tremblait comme la mienne.",
        "— Le phare montre quelque chose depuis toujours, dit-il. Et il a fallu une fille de la ville et sa lunette pour le voir. Tu ne trouves pas ça étrange, vieux Kamara ?",
        "Le vieux ne répondit pas tout de suite. Il regardait, lui, non pas la mer, mais nous deux.",
    ] },
    { title: "", image: "/images/point-zero/pz0-09.webp", paragraphs: [
        "— Étrange ? finit-il par dire. Non. Juste.",
        "Il se releva en s'appuyant sur sa canne.",
        "— Une chose pareille ne se laisse pas lire par un seul. Jamais. Il faut deux regards qui ne voient pas le même monde, et qui acceptent de regarder ensemble. Toi le ciel. Lui la mer.",
        "Et puis il disparut dans la maison du phare, et nous laissa seuls avec les quatre points sur la Terre.",
    ] },
    { title: "L'Ouest", image: "/images/point-zero/pz0-10.webp", paragraphs: [
        "La marque de l'ouest était sur la plage, face au large, là où le courant vous prend si vous vous baignez sans connaître. Je demandai au pêcheur qui la gardait si c'était un danger.",
        "— Non, dit-il. Un appel. Quelque chose qui veut dire : viens voir.",
        "Je scannai la marque. L'endroit où elle pointait se trouvait à des milliers de kilomètres, au-delà de l'Atlantique, sur le continent voisin. Un pays qui portait aussi le nom de notre pays.",
        "Le pêcheur regarda la flèche.",
        "— Combien de Guinée y a-t-il sur Terre ? demanda-t-il, perplexe.",
        "— Au moins quatre, murmura-je. Et voilà la première.",
    ] },
    { title: "Le Sud", image: "/images/point-zero/pz0-11.webp", paragraphs: [
        "La marque du sud se trouvait dans un petit lagon, caché par les racines aériennes des palétuviers. Bangaly connaissait le chemin, et il me le montra sans parler.",
        "L'eau était très claire. Et très vieille. On sentait, dans ce lagon, qu'aucune saison n'y passait vraiment. Juste le temps qui s'éternisait.",
        "— Il y a un crocodile, ici, me dit-il. Très vieux. Plus vieux que le bois des anciens. Je crois qu'il attend quelque chose.",
        "Nous pûmes scanner la marque depuis la terre. Elle pointait vers une île, très proche de nous, juste de l'autre côté du golfe. Un lieu où, disait Bangaly, les collobes rouges n'existaient que là au monde.",
        "— Le sud, dis-je. Toujours le sud. Comme si tous les mystères de Guinée étaient dans les quatre directions.",
    ] },
    { title: "L'Est", image: "/images/point-zero/pz0-12.webp", paragraphs: [
        "La marque de l'est était la plus loin, sur l'autre île, là où se dressaient de vieux murs gris. Un lieu où l'on enfermait les hommes, autrefois. Personne n'y allait plus.",
        "Kamara nous dit où trouver le sentier. Il ne nous accompagna pas jusque-là.",
        "— Ce lieu, dit-il, a gardé du chagrin. Mais le chagrin, c'est aussi une marque. C'est aussi quelque chose à comprendre. Vous deux, vous comprendrez. Allez.",
        "Bangaly serrait ma main très fort.",
    ] },
    { title: "", image: "/images/point-zero/pz0-19.webp", paragraphs: [
        "Les murs suintaient. Un oiseau jaillit d'une fissure et nous fit bondir tous les deux d'un coup. Mais nous restions ensemble. Nous restâmes ensemble.",
        "La marque était gravée sur une dalle, tout au fond, dans le noir.",
        "— Je veux ressortir, dis-je.",
        "— Moi aussi, avoua Bangaly. Mais à deux, on a moins peur qu'à un. Viens. On lit la marque, et on file.",
        "Nous nous agenouillâmes côte à côte, et scannâmes.",
    ] },
    { title: "", image: "/images/point-zero/pz0-20.webp", paragraphs: [
        "La flèche partit vers l'est. L'est extrême. Si loin que, sur la carte, elle semblait faire le tour de la Terre pour y arriver.",
        "— C'est où, ça ? demanda-je.",
        "Bangaly lut sur l'écran : une grande île, à l'autre bout du monde, qui portait pourtant le mot Guinée, comme nous.",
        "— L'éclat le plus loin, murmura-je en ressortant à la lumière. Gardé par le lieu le plus sombre. Bien sûr. On cache toujours au plus profond ce qu'on a de plus précieux.",
        "Nous avons respiré longtemps, dehors, sous le soleil.",
    ] },
    { title: "Le Nord", image: "/images/point-zero/pz0-21.webp", paragraphs: [
        "Au nord, il n'y avait ni rocher glissant ni mer traître. Il y avait un bois. Vieux, silencieux, où les arbres se touchaient en haut comme des mains jointes. C'est Bangaly qui m'y mena. Il le connaissait depuis l'enfance.",
        "Une femme très âgée gardait l'entrée. Elle leva la main avant qu'on approche.",
        "— Ici, c'est le bois des anciens. Les étrangers n'entrent pas. C'est la terre des Baga.",
        "— On ne vient rien prendre, dit Bangaly. On vient lire. À deux. Une de la ville, une de l'île. À deux.",
    ] },
    { title: "", image: "/images/point-zero/pz0-22.webp", paragraphs: [
        "La vieille femme nous regarda longtemps. Puis elle vit qu'elles étaient deux, et que nos mains se tenaient.",
        "— Deux mains qui se tiennent, dit-elle. C'est ainsi qu'on entre. Ou pas du tout. Suivez-moi. Et taisez-vous.",
        "Au cœur du bois se dressait une forme de bois sombre. Une femme. Des bras puissants. Une poitrine lourde, faite pour nourrir le monde entier.",
        "— C'est D'mba, dit la vieille femme, et sa voix se fit douce. La Mère. Celle qui donne et qui ne reprend jamais.",
    ] },
    { title: "", image: "/images/point-zero/pz0-23.webp", paragraphs: [
        "La marque était à ses pieds. Nous nous agenouillâmes, scannâmes à deux, le souffle court. La flèche montra le nord — la Guinée voisine, la plus proche des sœurs.",
        "Mais aucun de nous deux ne regardait plus la flèche. Nous regardions le visage de bois, qui semblait, dans la pénombre, nous regarder aussi.",
        "— Merci, dit la vieille femme.",
        "Et elle nous laissa partir.",
    ] },
    { title: "", image: "/images/point-zero/pz0-24.webp", paragraphs: [
        "Au coucher du soleil, nous avons gravi ensemble l'escalier du phare de Tamara. Marche après marche, en colimaçon, jusqu'à ce que le vent nous prenne le visage.",
        "Tout en haut, le monde s'ouvrait. La mer de tous les côtés. Et Kamara, assis près de la grande lampe qui allait bientôt s'allumer, qui nous attendait.",
        "— Alors, dit-il. Racontez-moi ce que le phare vous a montré.",
        "Je posai ma carte sur le sol de pierre. Et j'y plantai les quatre points.",
    ] },
    { title: "", image: "/images/point-zero/pz0-25.webp", paragraphs: [
        "Quatre points. Aux quatre coins du monde. Je les regardai, et d'un coup tout se renversa dans ma tête, comme un seau qu'on vide.",
        "— Ce sont toutes des Guinée, dis-je. Toutes. Celle du nord. Celle du golfe. Celle du bout du monde qui porte notre nom. Et celle de l'ouest, qui le porte presque.",
        "— Notre nom, dit Bangaly. Jeté aux quatre coins de la Terre. Pourquoi un nom se brise-t-il en morceaux ?",
        "Kamara se laissa glisser au sol, parmi nous, comme un grand-père au milieu de ses petits-enfants. La lampe, derrière lui, s'alluma. Et sa voix changea.",
        "— Parce que ce nom n'est pas né sur la Terre, dit-il. Asseyez-vous. Je vais vous dire ce que ce phare garde depuis qu'on l'a bâti.",
    ] },
    { title: "", image: "/images/point-zero/pz0-26.webp", paragraphs: [
        "— Il y a très longtemps, quand la Terre était jeune, brillait là-haut une étoile. La plus grande de toutes. Faite de toutes les couleurs à la fois. Et son nom était Guínée.",
        "— Toutes les couleurs ensemble, dis-je malgré moi. Ça fait du noir.",
        "— Le noir qui les contient toutes, dit Kamara. Non pas le vide : le plein. Toute la lumière du monde, rassemblée en une seule. Et cette étoile était une femme. De là-haut, elle voyait les hommes en bas, qui grelottaient dans l'ombre, sans une lueur à eux. Et son cœur de mère ne l'a pas supporté.",
        "— Une lumière qui reste trop haute n'éclaire plus personne, murmura Bangaly, sans savoir qu'il parlait.",
        "Le vieux le regarda, saisi.",
        "— C'est exactement ce qu'elle a dit, mon garçon. Mot pour mot. Comment le sais-tu ?",
        "Bangaly ne répondit pas. Il ne le savait pas lui-même.",
    ] },
    { title: "", image: "/images/point-zero/pz0-27.webp", paragraphs: [
        "— Alors, une nuit, reprit Kamara, elle s'est laissée tomber. Et parce qu'une seule lumière ne pouvait pas réchauffer toute la Terre, en tombant, par amour, elle s'est brisée. En mille éclats. Pour qu'aucun enfant, nulle part, ne reste jamais sans lumière.",
        "— Les marques, dis-je tout bas. Les quatre coins. Ce sont les éclats. Là où ils sont tombés.",
        "— Les plus petits, oui, dit Kamara. Mais le plus grand morceau, le cœur, est tombé ici. Sous nos pieds. Au point zéro, là où la mer et le ciel se nouent. Sa chair est devenue cette argile rouge où vous marchez. Son sang, nos mille rivières. Ses premiers enfants, les bêtes de la forêt qui nous ressemblent. Et son visage, les anciens l'ont sculpté dans le bois. Vous l'avez vu, ce soir. Ils l'ont appelé D'mba.",
        "Le sable rouge. Les rivières. La femme dans le bois. Tout, d'un coup, ne faisait plus qu'un.",
    ] },
    { title: "", image: "/images/point-zero/pz0-28.webp", paragraphs: [
        "La nuit était tombée pour de bon. En contrebas, le faisceau recommençait sa ronde, et marquait ses pauses — mais maintenant, nous savions à qui il parlait.",
        "— Le cœur est ici, dit Bangaly. Mais les éclats sont partis loin. Aux quatre coins. Qui sait ce qu'ils sont devenus, depuis le temps.",
        "— On pourrait aller voir, dis-je. Les chercher. Un par un. Savoir.",
        "Kamara nous regarda, et pour la première fois je vis qu'il souriait. Mais c'est Bangaly qu'il regardait le plus longtemps. Comme on regarde quelqu'un qu'on reconnaît.",
        "— Toi, mon garçon, dit-il enfin, tu sais déjà veiller sur les vivants dans l'eau. Un jour, c'est sur autre chose que tu veilleras. Je le vois. J'étais comme toi.",
        "Puis il se tourna vers moi.",
        "— Et toi, Djénéba. Ton grand-père t'a bien nommée. Djénéba — celle qui porte la lumière des étoiles, et le don, et la dignité. Et un vieux nom de ville, aussi, là d'où vient peut-être le nom même de notre pays. Lucas savait. Il a planté tout cela dans ton nom, et il a attendu cette nuit pour que ça pousse.",
        "Je ne dis rien. J'avais quatorze ans et, pour la première fois, je sentais que je portais quelque chose de plus grand que moi.",
        "— C'est pour cela que le phare vous a choisis, reprit Kamara. Vous deux. Il fallait deux regards pour lire la carte du monde.",
        "Il sortit de sa poche la coque d'arachide que nous avions trouvée au champ. Elle était intacte. Elle semblait briller encore.",
        "— Mangez-en une chacun. La même coque. Deux graines. Et vous verrez : quand on sait suivre la lumière, on arrive à la lumière.",
    ] },
    ],
  },
};
