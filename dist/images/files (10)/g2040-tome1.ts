// =============================================================================
//  GÉNÉRATION 2040 — Tome 1 : « La Forêt et le Fer »
//  Fichier de données Pati (à aligner sur l'interface réelle de chateau-ml.ts)
// -----------------------------------------------------------------------------
//  ÉTAT : FR + EN remplis (texte entièrement de Claude — pas de figure réelle).
//  AR & ZH = à PRODUIRE puis FAIRE RELIRE par un natif (même boucle que le Tome 0 :
//            Moh fait traduire → Claude réintègre, commentaires retirés).
//  Noms INVARIANTS dans les 4 langues : Sia, Cécé, Gbamou, Haba, Mamy Loua.
//  Mot manon laissé tel quel et traduit en contexte : « Kookieba ! » (= c'est nous).
// =============================================================================

export interface SectionG2040 {
  id: string;
  voix: "recit" | "visiteur";
  fr: string;
  en: string;
  ar: string;
  zh: string;
}

export interface LivreG2040 {
  slug: string;
  serie: string;
  ordre: number;
  statut: "pret" | "en_production" | "placeholder";
  titre: { fr: string; en: string; ar: string; zh: string };
  lieu: string;
  sousCollection: string;
  age: string;
  odd: number[];
  pilier: string;
  couverture: string;
  meta: {
    tagline: { fr: string; en: string; ar: string; zh: string };
    blurb: { fr: string[]; en: string[]; ar: string[]; zh: string[] };
  };
  sections: SectionG2040[];
}

export const g2040Tome1: LivreG2040 = {
  slug: "g2040-foret-et-fer",
  serie: "generation-2040",
  ordre: 1,
  statut: "en_production", // FR + EN prêts ; AR/ZH à produire
  titre: {
    fr: "La Forêt et le Fer",
    en: "The Forest and the Iron",
    ar: "",
    zh: "",
  },
  lieu: "Lola",
  sousCollection: "Aventure",
  age: "dès 12 ans",
  odd: [15, 9],
  pilier: "Infrastructures, transports & technologies (+ transversal durable)",
  couverture: "/images/g2040-tome1-couverture.webp",
  meta: {
    tagline: {
      fr: "À Lola, une montagne porte une forêt vivante — et, peut-être, un fer endormi. Faut-il choisir ?",
      en: "In Lola, a mountain holds a living forest — and, perhaps, a sleeping iron. Must we choose?",
      ar: "",
      zh: "",
    },
    blurb: {
      fr: [
        "À Lola, la montagne veille sur tout : la forêt, les villages, et les chimpanzés de Bossou qui cassent leurs noix depuis toujours. Pour le concours de la Simandou Academy, la classe de Sia doit raconter son Objectif.",
        "Mais une question divise les enfants. On dit que le fer dort sous leur montagne. Faut-il le réveiller un jour, pour que Lola compte enfin — au risque de la forêt ? Ou protéger la forêt — au risque de voir partir les grands frères ?",
        "Sia refuse de choisir. Entre la forêt et le fer, elle écrit un seul petit mot : ET. À condition d'en prendre soin.",
        "Un livre sur la vie terrestre et l'industrie qui apprennent à grandir ensemble. Génération 2040 · dès 12 ans.",
      ],
      en: [
        "In Lola, the mountain watches over everything: the forest, the villages, and the chimpanzees of Bossou who have cracked their nuts since forever. For the Simandou Academy contest, Sia's class must tell its Objective.",
        "But one question divides the children. They say iron sleeps beneath their mountain. Should it be woken one day, so that Lola finally counts — at the risk of the forest? Or protect the forest — at the risk of seeing the older brothers leave?",
        "Sia refuses to choose. Between the forest and the iron, she writes one small word: AND. As long as we take care of both.",
        "A book about life on land and industry learning to grow up together. Génération 2040 · ages 12 and up.",
      ],
      ar: [],
      zh: [],
    },
  },
  sections: [
    {
      id: "defi",
      voix: "recit",
      fr: `L'appel de la Simandou Academy était arrivé jusqu'à Lola, porté par la radio et par une grande affiche collée sur le mur de l'école : chaque école raconte son Objectif. Dans la classe de Sia, ça discutait fort.

— Nous, c'est facile, lança Cécé. On raconte le fer. On dit que notre montagne en est pleine. Si un jour on vient le chercher, Lola comptera enfin.

— Et la forêt, alors ? répondit Sia, sans lever la voix. La montagne, ce n'est pas que du fer.

Derrière eux, sur le mont Nimba, les nuages s'accrochaient aux arbres comme tous les matins. La Professeure Haba ne trancha pas. Elle écrivit deux mots au tableau, et entre les deux, elle laissa un grand blanc — LA FORÊT … LE FER.

— Voilà votre Objectif, dit-elle. À vous de remplir le milieu.`,
      en: `The call of the Simandou Academy had reached all the way to Lola, carried by the radio and by a big poster pasted on the school wall: every school tells its Objective. In Sia's class, the talk ran loud.

"Us, it's easy," Cécé called out. "We tell the iron. They say our mountain is full of it. If one day they come for it, Lola will finally count."

"And the forest, then?" Sia answered, without raising her voice. "The mountain isn't only iron."

Behind them, on Mount Nimba, the clouds clung to the trees as they did every morning. Professeure Haba did not settle it. She wrote two words on the board, and between them she left a wide blank — THE FOREST … THE IRON.

"There's your Objective," she said. "It's up to you to fill in the middle."`,
      ar: "",
      zh: "",
    },
    {
      id: "fer-qui-dort",
      voix: "recit",
      fr: `Cécé connaissait son rêve par cœur. Son grand frère était parti chercher du travail loin, du côté des grands chantiers du fer. Là-bas, racontait-il, le fer le plus pur du monde descendait déjà vers la mer, par une ligne longue comme un fleuve.

— Un jour, disait Cécé, on viendra réveiller le fer qui dort sous notre montagne, à nous aussi. Et ce jour-là, mes frères n'auront plus besoin de partir.

Sia écoutait. Ce n'était pas faux. Elle aussi avait vu les jeunes s'en aller. Elle aussi voulait que Lola compte sur la carte du pays, pas seulement sur celle des forêts.`,
      en: `Cécé knew his dream by heart. His big brother had gone far away to look for work, over by the great iron sites. Out there, he said, the purest iron in the world was already going down to the sea, on a line as long as a river.

"One day," said Cécé, "they'll come and wake the iron that sleeps under our mountain too. And on that day, my brothers won't need to leave anymore."

Sia listened. It wasn't wrong. She too had watched the young ones go. She too wanted Lola to count on the country's map, not only on the map of forests.`,
      ar: "",
      zh: "",
    },
    {
      id: "foret-vivante",
      voix: "recit",
      fr: `Le mercredi, la garde forestière du Nimba, Mamy Loua, emmena la classe vers Bossou. Six kilomètres, pas plus, entre la montagne et la frontière. Là, sous les arbres, les enfants firent silence.

Une famille de chimpanzés cassait des noix de palme. Une pierre dessous, une pierre dessus, et le geste sûr, recommencé. Le plus âgé partageait les amandes, équitablement, en commençant par les petits.

— Ils choisissent leurs outils, murmura Mamy Loua. Ils apprennent à leurs enfants. Avant nous, ils étaient déjà là.

Le soir, la grand-mère de Sia raconta l'autre moitié de l'histoire — celle que les Manon se transmettent : ces chimpanzés-là, on ne les chasse pas, on ne les moque pas. Ce sont des ancêtres revenus s'asseoir près des hommes. Sia connaissait le petit livre de la classe, Les Chimpanzés de Bossou. Cette nuit-là, elle le relut en entier.`,
      en: `On Wednesday, the Nimba forest guard, Mamy Loua, took the class toward Bossou. Six kilometers, no more, between the mountain and the border. There, under the trees, the children fell silent.

A family of chimpanzees was cracking palm nuts. One stone below, one stone above, and the sure gesture, repeated. The eldest shared out the kernels, fairly, beginning with the little ones.

"They choose their tools," murmured Mamy Loua. "They teach their children. Before us, they were already here."

That evening, Sia's grandmother told the other half of the story — the one the Manon pass down: these chimpanzees, you do not hunt them, you do not mock them. They are ancestors come back to sit beside us. Sia knew the class's little book, The Chimpanzees of Bossou. That night, she read it again from cover to cover.`,
      ar: "",
      zh: "",
    },
    {
      id: "faux-choix",
      voix: "recit",
      fr: `Le lendemain, la dispute reprit, plus dure.

— Si on creuse la montagne pour le fer, dit Gbamou, où ira la forêt ? Où iront eux ?

— Et si on ne creuse pas, répliqua Cécé, où iront nos frères ? Où irons-nous ?

Personne n'avait tort. C'était ça, le plus difficile. La classe regardait le tableau, la forêt d'un côté, le fer de l'autre, et ce grand blanc au milieu que personne ne savait remplir.

Mamy Loua, ce jour-là, était venue écouter. Elle dit seulement :

— Vous croyez qu'il faut choisir. Mais qui vous a dit qu'il fallait choisir ?`,
      en: `The next day, the argument flared up again, harder.

"If we dig the mountain for iron," said Gbamou, "where will the forest go? Where will they go?"

"And if we don't dig," Cécé shot back, "where will our brothers go? Where will we go?"

No one was wrong. That was the hardest part. The class stared at the board, the forest on one side, the iron on the other, and that wide blank in the middle no one knew how to fill.

Mamy Loua had come to listen that day. She only said:

"You think you must choose. But who told you that you had to choose?"`,
      ar: "",
      zh: "",
    },
    {
      id: "mot-du-milieu",
      voix: "recit",
      fr: `Sia y pensa toute la nuit. Le matin, elle alla au tableau et, dans le grand blanc, elle écrivit un seul petit mot — ET.

— On peut garder la forêt et réveiller le fer, dit-elle. Mais seulement si on le fait avec soin.

Alors les idées partirent, vraies :

— On ne touche pas au morceau de montagne où vivent les chimpanzés. On laisse un chemin d'arbres entre la mine et Bossou.
— Ce qu'on coupe, on le replante. Une équipe d'enfants pour compter les arbres, chaque saison.
— Le train fait du bruit ? On lui apprend à ralentir près de la forêt.
— Et l'argent du fer, qu'il revienne aussi à l'école, à la santé, aux pépinières.

Mamy Loua souriait. Une ingénieure de la compagnie, venue ce jour-là, expliqua que oui, des mines apprenaient à laisser la forêt vivre à côté — que c'était plus long, plus exigeant, mais possible. Que le vrai exploit, ce n'était pas de creuser vite : c'était de creuser sans effacer.

Alors, du fond de la classe, un poing se leva, et le vieux mot manon jaillit : « Kookieba ! » — c'est nous. La classe le reprit, une fois, deux fois, jusqu'à faire trembler les bancs. Kookieba : la forêt et le fer, et c'est à nous d'en prendre soin.`,
      en: `Sia thought about it all night. In the morning she went to the board and, in the wide blank, she wrote one small word — AND.

"We can keep the forest and wake the iron," she said. "But only if we do it with care."

Then the ideas poured out, true:

"We don't touch the part of the mountain where the chimpanzees live. We leave a path of trees between the mine and Bossou."
"What we cut, we replant. A team of children to count the trees, every season."
"The train is noisy? We teach it to slow down near the forest."
"And the iron's money — let it come back to the school, to health, to the tree nurseries too."

Mamy Loua was smiling. An engineer from the company, who had come that day, explained that yes, some mines were learning to let the forest live beside them — that it was longer, more demanding, but possible. That the real feat was not to dig fast: it was to dig without erasing.

Then, from the back of the class, a fist rose, and the old Manon word burst out: "Kookieba!" — it's us. The class took it up, once, twice, until the benches shook. Kookieba: the forest and the iron, and it's up to us to take care of them.`,
      ar: "",
      zh: "",
    },
    {
      id: "apres-2040",
      voix: "recit",
      fr: `Dans le dossier que la classe de Lola envoya à la Simandou Academy, il y avait une seule image, dessinée par Sia.

On y voyait la montagne en 2040. Si un jour on réveillait le fer du Nimba — alors qu'il en soit ainsi : en bas, le train descendrait vers la mer, chargé ; mais en haut, le Nimba porterait toujours sa forêt, verte et entière. Et à Bossou, une famille de chimpanzés casserait encore ses noix, une pierre dessous, une pierre dessus.

Au dos de la feuille, Sia avait écrit, pour qu'on n'oublie pas :

« On n'a pas choisi entre la forêt et le fer. On a choisi les deux, et on a appris à en prendre soin. La suite, c'est à ceux qui viennent de l'écrire. »`,
      en: `In the file that Lola's class sent to the Simandou Academy, there was a single picture, drawn by Sia.

It showed the mountain in 2040. If one day the iron of Nimba were woken — then let it be like this: down below, the train would go to the sea, loaded; but up above, Nimba would still wear its forest, green and whole. And at Bossou, a family of chimpanzees would still be cracking its nuts, one stone below, one stone above.

On the back of the sheet, Sia had written, so it would not be forgotten:

"We did not choose between the forest and the iron. We chose both, and we learned to take care of them. The rest is for those who come next to write."`,
      ar: "",
      zh: "",
    },
  ],
};

export default g2040Tome1;
