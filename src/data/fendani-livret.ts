// Livret d'accompagnement pédagogique de « Le Secret de la Forêt sans Douleur ».
// Destiné aux adultes (enseignantes, parents, animatrices) — affiché dans un onglet dédié sur la fiche du livre.
// Texte de l'autrice / L'Atelier Solidaire ; chants soussou + traductions conservés intacts.
export type LivretSection = { title: string; paragraphs: string[] };
export type Livret = { title: string; subtitle?: string; sections: LivretSection[] };

export const LIVRETS: Record<string, Livret> = {
  fendani: {
    title: "Livret d'accompagnement pédagogique",
    subtitle: "Pour les éducateurs, parents et animatrices — en accompagnement du conte « Le Secret de la Forêt sans Douleur » de Fatoumata Diaraye Cissé.",
    sections: [
      { title: "À propos de ce livret", paragraphs: [
        "Ce livret accompagne le conte Le Secret de la Forêt sans Douleur. Le conte se lit seul ; ce livret est destiné aux adultes qui le portent : enseignantes, parents, animatrices de centres communautaires et de camps Fendani.",
        "Il rassemble l'avant-propos de la démarche, des repères de lecture, un guide d'animation autour des chants, et la présentation des piliers Fendani. Il ne se lit pas aux enfants : il outille celles et ceux qui les accompagnent." ] },

      { title: "Avant-propos", paragraphs: [
        "La culture n'est pas un monument figé dans le passé, mais un arbre vivant qui puise sa force dans ses racines pour mieux s'épanouir vers le ciel. En Guinée, nos rites d'initiation ont toujours été le ciment de notre identité, transmettant courage, pudeur et dignité aux jeunes filles.",
        "Mais le cœur de cette transmission s'est parfois perdu derrière la douleur du couteau. Fendani fait un choix : que les rites conservent toute leur puissance symbolique et éducative, en remplaçant la mutilation par la parole, le chant et la connaissance. Protéger l'intégrité physique de nos filles, et magnifier notre patrimoine.",
        "Le conte Le Secret de la Forêt sans Douleur est plus qu'une histoire. C'est une promesse faite à Mayenie et à toutes les filles de notre nation : la preuve que l'on peut devenir une femme accomplie, entière et fière de ses origines, par la seule puissance de la parole et du savoir." ] },

      { title: "Repères — Les chants comme vecteurs de valeurs", paragraphs: [
        "Chaque chant du Chapitre 4 porte l'une des valeurs fondatrices de Fendani. En les faisant chanter ensemble, les animatrices transmettent ces valeurs de façon vivante et mémorable — exactement comme le faisaient les anciennes.",
        "Nga Wobé enseigne l'humilité et le refus des préjugés.",
        "A Toofan célèbre la beauté naturelle et l'intégrité du corps.",
        "Sali Yé honore la pureté et l'entraide entre femmes.",
        "Le chant du marchand rappelle que la dignité se porte comme un pagne précieux." ] },

      { title: "Repères — Un récit entre deux mondes", paragraphs: [
        "Mayenie grandit à la croisée de la modernité et de la tradition. Sa détresse n'est pas celle d'une enfant qui rejette sa culture : c'est celle d'une enfant qui veut y appartenir. Cette nuance est essentielle pour créer, lors des animations, un espace de dialogue bienveillant et sans jugement." ] },

      { title: "Repères — La réconciliation des générations", paragraphs: [
        "Le Chapitre 3 montre que les anciennes ne sont pas des adversaires, mais des alliées potentielles — gardiennes d'une sagesse que la mutilation a fini par éclipser. L'initiation alternative leur rend leur rôle premier : éducatrices et passeuses de savoir." ] },

      { title: "Pistes d'animation", paragraphs: [
        "Quelques façons de prolonger la lecture en atelier, à adapter selon l'âge et le groupe :",
        "Lire le Chapitre 1 à voix haute, puis demander aux filles ce qu'elles auraient répondu à Aïcha.",
        "Apprendre un chant du Chapitre 4 et en chercher ensemble le sens, avant d'en parler.",
        "Inviter une aînée du quartier à raconter ce que les rites transmettaient, derrière l'acte.",
        "Faire écrire à chaque fille une phrase qui commence par : « Je suis… » — comme Mayenie à la fin." ] },

      { title: "La démarche Fendani", paragraphs: [
        "Fendani propose de garder la puissance éducative des rites d'initiation en remplaçant la mutilation par la parole, le chant et la connaissance. La démarche s'articule autour de trois piliers.",
        "Éducation — Sensibiliser les filles à la santé sans passer par la violence. Leur donner des mots pour comprendre leur corps et le respecter.",
        "Inclusion — Transformer les exciseuses en gardiennes des rites alternatifs. Réconcilier les générations autour d'une tradition réinventée, vivante et bienveillante.",
        "Expansion — Créer des camps d'initiation résidentiels dans les préfectures de Guinée, pour que chaque fille grandisse entière, ancrée dans sa culture et sa dignité.",
        "Objectif de déploiement : toucher 30 écoles par an, puis essaimer de préfecture en préfecture." ] },

      { title: "Annexe — 1. Nga Wobé · Chant de l'humilité et de l'entraide", paragraphs: [
        "Texte original :",
        "Nga wobé bira khi tokhogbi nè / An nkha sa a makha khoummawali ma / Khoummawali sé won ndon ma ba ? / Khoummawali sé wo ya magakhou yo / Nga wobé bira khi tokhogbi nè",
        "Traduction :",
        "Nga Wobé est tombée dans la merde de poulets / Elle veut que je la baigne dans la rivière Khoummawali / Génies de la rivière Khoummawali, allez-vous me dévorer ? / Génies de la rivière Khoummawali, vos regards m'effraient." ] },

      { title: "Annexe — 2. A Toofan · Chant de la beauté naturelle", paragraphs: [
        "Texte original :",
        "A tofan deh m'ma diyorè tofan deh / A tofan deh diyorè fangni tofan deh / M'ma diyorè forè tofan deh / A yâ ra sissi na mou béré khori min ma…",
        "Traduction :",
        "Elle est magnifique mon bébé / Mon doux et magnifique bébé au teint d'ébène / Son regard scintille, et pourtant elle ne croque pas de la noix de raisin / Ses lèvres sont d'un rouge éclatant, et pourtant elle ne les trempe pas dans de l'huile rouge / Ses dents sont si blanches, et pourtant elle ne croque pas des graines de riz blanc." ] },

      { title: "Annexe — 3. Wo Nou Wali · Chant de la gratitude", paragraphs: [
        "Texte original :",
        "Wo nou wali wo nou wali yo n'nah (×2) / Sé gningni ni a gni ma ndo khi mbè ya / Bandé gningni ni a gni ma ndo khi mbè ya / Eh Nènè yo Nènè wo nou wali yo n'nah",
        "Traduction :",
        "Soyez-en remerciées, chères mères et tantes (×2) / Quand les dames cuisinent, je me prélasse / Quand c'est au tour des préparatrices de riz, je me prélasse / Oyé chères mères et tantes, je ne vous remercierai jamais assez pour vos efforts." ] },

      { title: "Annexe — 4. Laaga · Chant de la cueillette et du foyer", paragraphs: [
        "Texte original :",
        "Mbourakhè ba yé khi li mè / Ntolon yi khiri laaga ra / Mou khou na raalan souri ma / Mbourakhè sénin guira yo / Na dokho koté sénin koui…",
        "Traduction :",
        "À l'annonce de l'arrivée des cueilleurs de feuillages, je cours faire sonner la cloche / Je cueille sept feuilles, j'en fais sept colis que je porte fièrement sur ma tête / Je les cuisinerai pour la maisonnée, puis j'emporterai les restes pour mon fiancé / Chère marâtre, il faut bien se tenir pour être digne d'être la préférée." ] },

      { title: "Annexe — 5. Honneur · Chant de la dignité", paragraphs: [
        "Texte original :",
        "Nfafé Youlai Nfafé Youlai Ayi ya ! / Nfafé Youlai dougui di ndé bé ayi ya / A khindé nara fo a yinlen ma ara ayi ya ! / Guinè fanyi noun khamet fanyi é ta nan eh kéli dé kolon…",
        "Traduction :",
        "Oyé cher marchand, il y a un pagne ici tout frais, tout brillant / Si seulement j'avais un frère, si seulement j'avais un père / Il n'y a que la belle dame et le bel homme qui connaissent leurs origines / Ah, cher marchand, sois compatissant ; ne t'offusque pas de l'affront." ] },

      { title: "Annexe — 6. Sali Yé · Chant de l'eau de purification", paragraphs: [
        "Texte original :",
        "Nga Yakha keli yo, nki Sali yé donkhoe nkha nya yarakha (×2) / Ito fissakhi ntan mbè, mba Doumbouya to itan mbè iyé yo / Ito fissakhi ntan mbè, Doumbouya to i tan mbè iyé yo",
        "Traduction :",
        "Mère Yakha, réveille-toi et partage un peu de ton eau de purification avec moi, que je me nettoie le visage / Puisque tu vaux mieux que moi, puisque tu es la préférée de Père Camara / Puisque tu es la préférée de Père Doumbouya." ] },
    ],
  },
};

export const getLivret = (slug: string): Livret | undefined => LIVRETS[slug];
