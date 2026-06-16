// Série « LE POINT ZÉRO » — Tome 2 : « Le partage des cousins »
// Pati, Passage (13-15 ans). Thème : danger réel, action immédiate, partage = choix courageux.
// 8 doubles-pages. Héros : Djènè et Bangaly. Mentor : Ngo. Lieu : Malabo/Bioko.
// Plume « à la Barjavel » — suspense, immersion, dramatique.
// FR ; EN/AR/ZH à venir.

import type { Lang } from "./series/taadidi";

type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };

export const POINT_ZERO_T2_ML: Partial<Record<Lang, RBook>> = {
  fr: {
    lang: "fr",
    dir: "ltr",
    label: "Français",
    bookTitle: "Le Point Zéro — Le partage des cousins",
    sections: [
    { title: "", image: "/images/point-zero/pz2-01.webp", paragraphs: [
        "Kamara nous regarda longtemps avant de parler.",
        "— Le prochain éclat est au sud. À Malabo. Une femme vous attend — elle s'appelle Ngo.",
        "Il posa deux coques dans nos mains. Elles battaient vite. Trop vite.",
        "— Elle vous appellera immédiatement. Écoutez ce que vous allez entendre. Et agissez.",
        "Nous avons mangé. Une graine chacun.",
        "Le voyage sud fut court, écrasant. Chaud. Étouffant.",
        "Puis : un cri.",
        "Pas un oiseau. Pas un animal quelconque. Une créature. Aigué. Désespérée.",
        "Nous arrivâmes dans une forêt qui criait.",
    ] },
    { title: "", image: "/images/point-zero/pz2-02.webp", paragraphs: [
        "Ngo nous attendait, mais pas assise sous un arbre. Debout. Tendue. Les mains serrées.",
        "— Vite, dit-elle. Les colobes rouges de Gran Caldera. Un piège ce matin. Les chasseurs reviennent ce soir pour récupérer.",
        "Elle nous saisit les mains.",
        "— Vous avez quelques heures. Si vous ne faites rien, ce colobe meurt. Vous comprenez ? Meurt. Pas demain. Maintenant.",
        "Je sentis Bangaly serrer ma main.",
        "— On peut l'aider ? demanda-t-elle.",
        "Ngo regarda vers la forêt dense.",
        "— Oui. Si vous êtes assez courageux. Venez.",
        "Elle courut.",
    ] },
    { title: "", image: "/images/point-zero/pz2-03.webp", paragraphs: [
        "La forêt était épaisse. Verte. Bruyante de cris — pas juste un. Un groupe entier. Panique absolue.",
        "Puis nous la vîmes.",
        "Orange-marron. Patte avant prise dans un piège — corde, bois, métal rouillé. Vivante. Criante. Désespérée.",
        "Les autres colobes sautaient autour, vocalisant, incapables d'aider.",
        "— Là, dit Ngo, montrant le piège à ressort. Ancien. Très serré. Si on ne l'enlève pas avant les chasseurs, elle restera toute la nuit. Et demain...",
        "Elle ne termina pas.",
        "Je compris.",
    ] },
    { title: "", image: "/images/point-zero/pz2-04.webp", paragraphs: [
        "— Pourquoi les chasseurs ? demandai-je.",
        "— Viande. Marché de Malabo. Les colobes valent cher — c'est endémique. Bioko seulement. Nulle part ailleurs au monde.",
        "Ngo s'agenouilla près du piège.",
        "— Cette femelle a probablement des petits. Elle crie parce qu'elle a peur. Pas pour elle. Pour eux.",
        "Bangaly s'approcha du colobe. La femelle siffla — pas agressive. Terrifiée.",
        "— On peut vraiment la libérer ? demanda Bangaly.",
        "— Oui, dit Ngo. Mais il faut être rapides. Et puis il faut partir. Avant qu'ils reviennent.",
        "Elle nous montra comment faire.",
    ] },
    { title: "", image: "/images/point-zero/pz2-05.webp", paragraphs: [
        "Bangaly tenait doucement la bête — pas par la patte blessée. Par le corps, fermement mais sans faire mal. Le colobe se débattait, criait.",
        "Je desserrais le piège. Les mains me tremblaient.",
        "Ngo regardait vers le bas du sentier.",
        "— Plus vite. J'entends les voix. Là. En bas.",
        "Mon cœur s'accéléra.",
        "La corde céda.",
        "Le colobe tomba — libéré. Elle ne courut pas immédiatement. Elle cria — différemment. Pas de douleur. D'urgence. De reconnaissance.",
        "Puis elle sauta vers les arbres, rejoignit son groupe.",
        "Tous criaient ensemble maintenant.",
    ] },
    { title: "", image: "/images/point-zero/pz2-06.webp", paragraphs: [
        "— Maintenant on part. Maintenant, dit Ngo.",
        "Elle courut.",
        "Nous la suivîmes.",
        "Derrière, les voix se rapprochaient. Peut-être 500 mètres. Peut-être moins.",
        "Bangaly se tourna vers la forêt une seconde.",
        "— Ils vont voir le piège ouvert.",
        "— Oui, dit Ngo sans ralentir. Ils vont savoir. Quelqu'un a libéré. Ils vont être furieux. Mais ils ne nous trouveront pas si on est rapides.",
        "Nous courûmes.",
        "Les cris des colobes s'éloignaient.",
        "Les voix des chasseurs se rapprochaient.",
    ] },
    { title: "", image: "/images/point-zero/pz2-07.webp", paragraphs: [
        "Nous arrivâmes au champ juste avant le coucher du soleil.",
        "Ngo nous regarda. Essoufflée. Les yeux brillants.",
        "— Vous avez vu ? C'est ça, le partage. Pas une idée. C'est une créature qui crie. C'est une mère qui a des petits. C'est des hommes qui viennent avec des armes. C'est un piège. Et c'est votre choix : vous faites rien et elle meurt. Ou vous agissez et elle vit.",
        "Elle nous donna une coque.",
        "— Celle-ci, c'est pour vous rappeler que partager c'est avoir peur. C'est courir. C'est choisir même quand c'est difficile.",
        "Nous avons mangé. Une graine chacun.",
    ] },
    { title: "", image: "/images/point-zero/pz2-08.webp", paragraphs: [
        "Kassa. Le phare.",
        "Kamara était assis exactement où nous l'avions laissé.",
        "Il vit la coque de Ngo.",
        "Il sourit. Gravement.",
        "— Elle a parlé d'action.",
        "— Oui. On a sauvé une femelle. Une mère. Elles vivent à Bioko seulement, nulle part ailleurs. Comme nos chimpanzés de Bossou — endémiques, uniques, en danger.",
        "Kamara regarda Bangaly, puis moi.",
        "— Oui ma fille. Des cousins éloignés et uniques. Sur deux Guinées qui ne sont pas si différentes l'une de l'autre. Vous avez compris ça maintenant.",
        "Il se leva.",
        "— Vous êtes prêts pour très, très loin ?",
    ] },
    ],
  },
};
