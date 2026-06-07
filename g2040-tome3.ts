// =============================================================================
//  GÉNÉRATION 2040 — Tome 3 : « La Plaine de riz »
//  Fichier de données Pati (même structure que g2040-tome1.ts / g2040-tome2.ts)
// -----------------------------------------------------------------------------
//  ÉTAT : FR + EN remplis (texte entièrement de Claude — pas de figure réelle).
//         AR + ZH = BROUILLONS de Claude → À FAIRE RELIRE par un natif avant
//         de passer le statut à "pret" (même exigence que Tomes 0, 1 et 2).
//  Noms INVARIANTS en latin dans les 4 langues : Kumba, Lanciné, Malodougou,
//  Kissidougou, Guéckédou, Macenta, Lola, Simandou Academy. (malo = riz,
//  dougou = terre, en maninka — gardés en latin, expliqués dans le récit.)
//  Aubaine du train : la ligne du corridor dessert Kissidougou (gare) — desserte
//  ANNONCÉE / vision présidentielle, posée en PROJECTION 2040 (le rail construit
//  passe par Faranah ; cf. note série sur le tracé).
// =============================================================================

import type { LivreG2040, SectionG2040 } from "./g2040-tome1";

export const g2040Tome3: LivreG2040 = {
  slug: "g2040-plaine-de-riz",
  serie: "generation-2040",
  ordre: 3,
  statut: "en_production", // FR + EN prêts ; AR/ZH = brouillons à faire relire
  titre: {
    fr: "La Plaine de riz",
    en: "The Rice Plain",
    ar: "سهل الأرزّ",
    zh: "稻田平原",
  },
  lieu: "Kissidougou",
  sousCollection: "Aventure",
  age: "dès 12 ans",
  odd: [2, 12],
  pilier: "Agriculture, industrie alimentaire & commerce (+ transversal infrastructures via la Ligne)",
  couverture: "/images/g2040-tome3-couverture.webp",
  meta: {
    tagline: {
      fr: "À Kissidougou, la plaine déborde de riz. Alors pourquoi mange-t-on celui des autres ? Le jour où le train s'arrête ici, tout peut changer.",
      en: "In Kissidougou, the plain overflows with rice. So why do we eat someone else's? The day the train stops here, everything can change.",
      ar: "في Kissidougou، يفيض السهل بالأرزّ. فلماذا نأكل أرزّ غيرنا؟ يوم يتوقّف القطار هنا، كلّ شيءٍ قد يتغيّر.",
      zh: "在 Kissidougou，平原稻谷满仓。可我们为什么要吃别人的米？当火车在这里停靠的那一天，一切都可能改变。",
    },
    blurb: {
      fr: [
        "À Kissidougou, là où la grande forêt s'ouvre sur les plaines de la Haute Guinée, tout est riz : sur les coteaux, dans les bas-fonds, dans chaque assiette. Kumba, la petite Kissi, et son ami Lanciné, le Malinké descendu de la savane, travaillent la même rizière.",
        "Au marché, Kumba remarque que tant de sacs de riz viennent de l'autre bout du monde — alors que la plaine est là, juste devant. Pour le concours de la Simandou Academy, sa classe transforme le constat en Objectif : cultiver ce qu'on mange, manger ce qu'on cultive.",
        "Lanciné offre un nom à leur riz — Malodougou, « la terre du riz ». Et la grand-mère rappelle l'essentiel : un riz ne vaut que s'il peut voyager. Justement, la ligne du corridor s'arrête désormais à Kissidougou — et le train peut enfin emporter la récolte des paysans vers tout le pays.",
        "Un livre sur la terre nourricière, la souveraineté alimentaire et le chemin de fer qui désenclave. Génération 2040 · dès 12 ans.",
      ],
      en: [
        "In Kissidougou, where the great forest opens onto the plains of Upper Guinea, everything is rice: on the hillsides, in the lowlands, on every plate. Kumba, the Kissi girl, and her friend Lanciné, the Malinké boy who came down from the savanna, work the same paddy.",
        "At the market, Kumba notices how many sacks of rice come from the other side of the world — when the plain is right there, in front of her. For the Simandou Academy contest, her class turns the observation into an Objective: grow what we eat, eat what we grow.",
        "Lanciné gives their rice a name — Malodougou, \"the land of rice.\" And the grandmother recalls what matters: rice is only worth something if it can travel. As it happens, the corridor's line now stops at Kissidougou — and the train can finally carry the farmers' harvest to the whole country.",
        "A book about the nourishing earth, food sovereignty and the railway that opens up the land. Génération 2040 · ages 12 and up.",
      ],
      ar: [
        "في Kissidougou، حيث تنفتح الغابة الكبرى على سهول غينيا العليا، كلّ شيءٍ أرزّ: على المنحدرات، وفي الأراضي المنخفضة، وفي كلّ صحن. Kumba، الفتاة الكيسية، وصديقها Lanciné، الفتى المالينكي الذي نزل من السافانا، يعملان في الحقل نفسه.",
        "في السوق، تلاحظ Kumba كم من أكياس الأرزّ تأتي من الطرف الآخر من العالم — والسهل هناك، أمامها مباشرة. ومن أجل مسابقة Simandou Academy، يحوّل صفّها هذه الملاحظة إلى هدف: أن نزرع ما نأكل، وأن نأكل ما نزرع.",
        "يمنح Lanciné أرزّهم اسمًا — Malodougou، «أرض الأرزّ». وتذكّر الجدّة بالأهمّ: لا قيمة للأرزّ إن لم يستطع السفر. وها هو خطّ الممرّ يتوقّف الآن عند Kissidougou — فيستطيع القطار أخيرًا أن يحمل محصول الفلّاحين إلى البلد كلّه.",
        "كتابٌ عن الأرض المُعطاءة، والسيادة الغذائية، وسكّة الحديد التي تفكّ العزلة. Génération 2040 · من 12 سنة فما فوق.",
      ],
      zh: [
        "在 Kissidougou，正是大森林向上几内亚平原敞开的地方，处处皆是稻米：山坡上、洼地里、每一只碗中。Kissi 族女孩 Kumba，和她从萨瓦纳下来的 Malinké 族朋友 Lanciné，一起在同一片稻田里劳作。",
        "在集市上，Kumba 注意到有那么多袋大米来自世界的另一端——可平原就在眼前。为了 Simandou Academy 的比赛，全班把这个发现化作「目标」：种我们所吃的，吃我们所种的。",
        "Lanciné 给他们的米起了个名字——Malodougou，「稻米之乡」。祖母则点出最要紧的一点：米若不能运出去，就一文不值。恰好，走廊的那条铁路如今在 Kissidougou 设了站——火车终于能把农人的收成运往全国。",
        "一本关于哺育之地、粮食主权，以及那条打通闭塞的铁路的书。Génération 2040 · 适合 12 岁以上。",
      ],
    },
  },
  sections: [
    {
      id: "la-foret-souvre",
      voix: "recit",
      fr: `À Kissidougou, on sent que le pays change.

Derrière l'école, c'est encore la grande forêt verte, celle des cousins de Lola et de Guéckédou. Devant, la terre s'aplanit, s'ouvre, et l'on devine déjà les longues plaines de la Haute Guinée. Kissidougou est posée juste au milieu, comme une porte.

Et tout autour, sur les coteaux comme dans les bas-fonds, il y a le riz. Quand l'appel de la Simandou Academy arriva, Kumba sut tout de suite de quoi son école parlerait. Ici, le riz, c'est plus qu'une culture. C'est la vie.`,
      en: `In Kissidougou, you can feel the country changing.

Behind the school, there is still the great green forest — the one belonging to the cousins of Lola and Guéckédou. Ahead, the land flattens and opens, and you can already sense the long plains of Upper Guinea. Kissidougou sits right in the middle, like a door.

And all around, on the hillsides as in the lowlands, there is rice. When the call of the Simandou Academy arrived, Kumba knew at once what her school would speak about. Here, rice is more than a crop. It is life.`,
      ar: `في Kissidougou، تشعر أنّ البلد يتغيّر.

خلف المدرسة، لا تزال الغابة الخضراء الكبرى — غابة أبناء عمومة Lola وGuéckédou. وأمامها، تنبسط الأرض وتنفتح، فتكاد ترى سهول غينيا العليا الطويلة. تقع Kissidougou في المنتصف تمامًا، كأنها باب.

وفي كلّ مكان حولها، على المنحدرات كما في الأراضي المنخفضة، هناك الأرزّ. حين وصل نداء Simandou Academy، عرفت Kumba على الفور عمَّ ستتحدّث مدرستها. هنا، الأرزّ أكثر من محصول. إنه الحياة.`,
      zh: `在 Kissidougou，你能感到这个国家正在变化。

学校背后，仍是那片葱绿的大森林——属于 Lola 和 Guéckédou 那些表亲的森林。而在前方，土地渐渐铺平、敞开，已能隐约望见上几内亚绵长的平原。Kissidougou 恰好坐落在正中央，宛如一道门。

四周，无论山坡还是洼地，到处都是稻米。当 Simandou Academy 的号召传来时，Kumba 立刻就知道她的学校要讲什么。在这里，稻米不只是一种作物，它就是生活。`,
    },
    {
      id: "riz-de-chaque-jour",
      voix: "recit",
      fr: `Chez Kumba, comme dans tout le pays, on mange du riz chaque jour. Le matin, le midi, le soir.

Un jour, au marché, elle remarqua quelque chose d'étrange. Beaucoup de sacs de riz venaient de très loin, de l'autre bout du monde, traversant des océans pour arriver dans son assiette.

— Pourquoi ? demanda-t-elle à sa grand-mère. La plaine est juste là, devant nous.

La vieille femme sourit, comme on sourit à une bonne question.

— Voilà, dit-elle. Tu viens de trouver votre Objectif.`,
      en: `At Kumba's home, as everywhere in the country, people eat rice every day. Morning, noon and night.

One day, at the market, she noticed something strange. Many sacks of rice came from very far away, from the other side of the world, crossing oceans to land on her plate.

"Why?" she asked her grandmother. "The plain is right there, in front of us."

The old woman smiled, the way you smile at a good question.

"There," she said. "You have just found your Objective."`,
      ar: `في بيت Kumba، كما في كلّ أنحاء البلد، يأكل الناس الأرزّ كلّ يوم. صباحًا وظهرًا ومساءً.

وذات يومٍ في السوق، لاحظت أمرًا غريبًا. كثيرٌ من أكياس الأرزّ كان يأتي من بعيدٍ جدًّا، من الطرف الآخر من العالم، عابرًا المحيطات ليصل إلى صحنها.

— لماذا؟ سألت جدّتها. السهل هناك، أمامنا مباشرة.

ابتسمت العجوز، كما يُبتسَم لسؤالٍ جيّد.

— ها قد وجدتِ هدفكم، قالت.`,
      zh: `在 Kumba 家，就像全国各地一样，人们每天都吃米饭。早上、中午、晚上。

有一天在集市上，她注意到一件奇怪的事。许多袋大米来自很远很远的地方，来自世界的另一端，漂洋过海才来到她的碗里。

「为什么呢？」她问祖母。「平原就在那儿，就在我们眼前啊。」

老人笑了，就像人们对一个好问题报以微笑那样。

「这就对了，」她说。「你们的『目标』，刚刚被你找到了。」`,
    },
    {
      id: "deux-amis",
      voix: "recit",
      fr: `Dans le champ de la famille de Kumba travaillait aussi Lanciné, son ami.

Kumba était kissi, des gens de la forêt. Lanciné était malinké ; sa famille était descendue, il y a longtemps, des plaines du Nord. À Kissidougou, ce sont les deux qui se rencontrent : ceux de la forêt et ceux de la savane, penchés sur la même rizière, les pieds dans la même boue.

— Chez moi on dit que le riz n'a pas de tribu, riait Lanciné. Il pousse pour qui en prend soin.`,
      en: `In the field of Kumba's family, her friend Lanciné worked too.

Kumba was Kissi, one of the forest people. Lanciné was Malinké; his family had come down, long ago, from the plains of the North. In Kissidougou, the two meet: the people of the forest and the people of the savanna, bent over the same paddy, their feet in the same mud.

"Where I come from, we say rice has no tribe," Lanciné laughed. "It grows for whoever takes care of it."`,
      ar: `في حقل عائلة Kumba، كان يعمل أيضًا صديقها Lanciné.

كانت Kumba كيسيّةً، من أهل الغابة. وكان Lanciné مالينكيًّا؛ نزلت عائلته منذ زمنٍ بعيد من سهول الشمال. في Kissidougou يلتقي الاثنان: أهل الغابة وأهل السافانا، منحنيَين على الحقل نفسه، وأقدامهما في الطين نفسه.

— عندنا نقول إنّ الأرزّ لا قبيلة له، ضحك Lanciné. ينمو لمن يعتني به.`,
      zh: `在 Kumba 家的田里，她的朋友 Lanciné 也在干活。

Kumba 是 Kissi 人，森林的子民。Lanciné 是 Malinké 人；很久以前，他的家族从北方的平原下到了这里。在 Kissidougou，两者相遇了：森林的人和萨瓦纳的人，俯身在同一片稻田上，双脚踩进同一片泥里。

「在我老家，我们常说稻米没有部族，」Lanciné 笑道。「谁照料它，它就为谁生长。」`,
    },
    {
      id: "savoir-de-la-terre",
      voix: "recit",
      fr: `La grand-mère leur apprit ce qu'aucun sac venu de loin ne savait.

Que le riz de coteau pousse sur la pente, à la seule eau du ciel. Que le riz de bas-fond aime avoir les pieds dans l'eau. Qu'il faut laisser la terre se reposer — la jachère — pour qu'elle reste forte. Que les anciens gardaient une ceinture d'arbres autour du village, pour que le sol ne meure pas. Et qu'on peut même élever des poissons dans la rizière : le poisson nourrit le riz, le riz abrite le poisson.

— La terre est généreuse, dit-elle. Mais seulement avec ceux qui la respectent.`,
      en: `The grandmother taught them what no far-traveled sack could know.

That hillside rice grows on the slope, on the water of the sky alone. That lowland rice likes to keep its feet in the water. That you must let the earth rest — the fallow — so that it stays strong. That the elders kept a belt of trees around the village, so that the soil would not die. And that you can even raise fish in the paddy: the fish feeds the rice, the rice shelters the fish.

"The earth is generous," she said. "But only with those who respect it."`,
      ar: `علّمتهما الجدّة ما لا يعرفه أيّ كيسٍ قادمٍ من بعيد.

أنّ أرزّ المنحدر ينمو على السفح، على ماء السماء وحده. وأنّ أرزّ الأرض المنخفضة يحبّ أن تبقى قدماه في الماء. وأنه لا بدّ من إراحة الأرض — البَوار — كي تظلّ قويّة. وأنّ الكبار كانوا يُبقون حزامًا من الأشجار حول القرية، كي لا تموت التربة. وأنه يمكن حتى تربية السمك في الحقل: السمك يُغذّي الأرزّ، والأرزّ يُؤوي السمك.

— الأرض كريمة، قالت. لكن فقط مع من يحترمها.`,
      zh: `祖母教给他们的，是任何远道而来的米袋都不会懂的事。

山坡上的旱稻长在斜坡上，只靠天上的雨水。洼地里的水稻则喜欢把脚泡在水里。要让土地歇一歇——也就是休耕——它才能保持肥力。先辈们会在村子四周留下一圈树木，好让土壤不至于死去。甚至还可以在稻田里养鱼：鱼养肥了稻，稻又庇护了鱼。

「土地是慷慨的，」她说。「但只对那些尊重它的人慷慨。」`,
    },
    {
      id: "malo-dougou",
      voix: "recit",
      fr: `Le jour de l'Objectif, la Maîtresse écrivit au tableau ce que Kumba avait vu au marché :

LE RIZ VIENT D'AILLEURS

Kumba se leva. Elle ne discuta pas. Elle alla simplement changer un mot :

LE RIZ VIENT D'ICI

— On mange le riz des autres, dit-elle, alors que notre plaine est l'une des plus riches du pays. Cultivons ce qu'on mange, mangeons ce qu'on cultive — et le surplus, vendons-le.

Lanciné leva la main.

— Il faut lui donner un nom, à notre riz. Chez moi, le riz se dit malo, et la terre, dougou.

La classe répéta le mot, et il sonna juste, comme s'il avait toujours existé : Malodougou. La terre du riz — petite sœur de Kissidougou, la terre des Kissi.

Mais la grand-mère leva un doigt.

— Un nom, c'est bien. Encore faut-il que le riz puisse voyager. Avant, on récoltait, et la récolte restait là — à pourrir, ou à se brader pour rien. On nourrissait nos familles, jamais notre poche.

— Justement, dit Kumba, les yeux brillants. La grande ligne du corridor passe maintenant par chez nous. Une gare, à Kissidougou ! Le jour où le train s'arrête ici, notre Malodougou peut partir vers tout le pays — et jusqu'au port.

Alors les idées suivirent, comme l'eau dans les rigoles :

— Le train emporte notre riz, et tout ce que les paysans n'arrivaient jamais à écouler.
— On unit nos forces avec Guéckédou et Macenta.
— On forme les jeunes et les femmes, qui font déjà le plus gros du travail.
— Et on garde la terre vivante : la jachère, les arbres, le poisson dans la rizière.

— Un pays qui nourrit ses enfants avec sa propre terre, conclut Kumba, c'est un pays libre. Et un paysan dont le riz voyage, c'est un paysan qui vit enfin de son travail.`,
      en: `On the day of the Objective, the teacher wrote on the board what Kumba had seen at the market:

RICE COMES FROM ELSEWHERE

Kumba stood up. She did not argue. She simply went and changed one word:

RICE COMES FROM HERE

"We eat other people's rice," she said, "while our plain is one of the richest in the country. Let us grow what we eat, eat what we grow — and the surplus, let us sell it."

Lanciné raised his hand.

"We should give our rice a name. Where I come from, rice is called malo, and land is called dougou."

The class repeated the word, and it rang true, as if it had always existed: Malodougou. The land of rice — little sister of Kissidougou, the land of the Kissi.

But the grandmother raised a finger.

"A name is good. But the rice still has to be able to travel. Before, we harvested, and the harvest stayed right here — to rot, or to be sold off for nothing. We fed our families, never our pockets."

"Exactly," said Kumba, her eyes shining. "The great line of the corridor now passes through our town. A station, in Kissidougou! The day the train stops here, our Malodougou can leave for the whole country — all the way to the port."

Then the ideas followed, like water in the channels:

"The train carries our rice, and everything the farmers could never sell."
"We join forces with Guéckédou and Macenta."
"We train the young people and the women, who already do most of the work."
"And we keep the earth alive: the fallow, the trees, the fish in the paddy."

"A country that feeds its children with its own earth," Kumba concluded, "is a free country. And a farmer whose rice travels is a farmer who finally lives from his work."`,
      ar: `في يوم الهدف، كتبت المعلّمة على السبّورة ما رأته Kumba في السوق:

الأرزّ يأتي من بعيد

نهضت Kumba. لم تُجادل. ذهبت ببساطة وغيّرت كلمةً واحدة:

الأرزّ يأتي من هنا

— نأكل أرزّ غيرنا، قالت، بينما سهلنا من أغنى سهول البلد. فلنزرع ما نأكل، ولنأكل ما نزرع — والفائض، لنبِعْه.

رفع Lanciné يده.

— علينا أن نمنح أرزّنا اسمًا. عندنا، يُسمّى الأرزّ malo، وتُسمّى الأرض dougou.

ردّد الصفّ الكلمة، فبدت صحيحةً تمامًا، كأنها وُجدت منذ الأزل: Malodougou. أرض الأرزّ — أختٌ صغرى لـ Kissidougou، أرض الكيسي.

لكنّ الجدّة رفعت إصبعها.

— الاسم جميل. لكن يبقى على الأرزّ أن يستطيع السفر. في الماضي كنّا نحصد، فيبقى المحصول هنا — يتعفّن، أو يُباع بلا ثمن. كنّا نُطعم عائلاتنا، لا جيوبنا قطّ.

— هذا بالضبط، قالت Kumba وعيناها تلمعان. خطّ الممرّ الكبير يمرّ الآن بمدينتنا. محطّة، في Kissidougou! يوم يتوقّف القطار هنا، يستطيع Malodougou أن ينطلق إلى البلد كلّه — حتى الميناء.

عندئذٍ تتالت الأفكار، كالماء في السواقي:

— القطار يحمل أرزّنا، وكلّ ما لم يكن الفلّاحون يقدرون على بيعه يومًا.
— نوحّد قوانا مع Guéckédou وMacenta.
— نُدرّب الشباب والنساء، وهم أصلًا مَن يقوم بمعظم العمل.
— ونُبقي الأرض حيّة: البَوار، والأشجار، والسمك في الحقل.

— بلدٌ يُطعم أبناءه من أرضه، خلصت Kumba، بلدٌ حُرّ. وفلّاحٌ يسافر أرزّه، فلّاحٌ يعيش أخيرًا من عمله.`,
      zh: `在「目标」公布的那天，老师把 Kumba 在集市上看到的写在了黑板上：

稻米来自远方

Kumba 站了起来。她没有争辩，只是走上前，改动了一个词：

稻米就产自这里

「我们吃着别人的米，」她说，「可我们的平原却是全国最富饶的平原之一。让我们种我们所吃的，吃我们所种的——多余的，就卖出去。」

Lanciné 举起了手。

「该给我们的米起个名字。在我老家，稻米叫 malo，土地叫 dougou。」

全班把这个词念了一遍，它听起来如此贴切，仿佛自古就存在：Malodougou。稻米之乡——Kissidougou 的小妹妹，Kissi 人的土地。

可祖母竖起了一根手指。

「名字是好。可米还得能运得出去才行。从前我们收了庄稼，庄稼却只能堆在这儿——要么烂掉，要么贱卖个一文不值。我们喂饱了家人，却从没喂饱过自己的口袋。」

「正是如此，」Kumba 眼里闪着光说。「走廊的那条大铁路如今从我们城里经过。Kissidougou 要有一座车站了！火车在这里停靠的那一天，我们的 Malodougou 就能运往全国——一直运到港口。」

于是，主意像沟渠里的水一样涌了出来：

「火车运走我们的米，运走农人从前永远卖不出去的一切。」
「我们和 Guéckédou、Macenta 联起手来。」
「我们培训年轻人和妇女——本来大半的活儿就是他们干的。」
「我们还要让土地保持生机：休耕、树木、稻田里的鱼。」

「一个用自己的土地喂养子女的国家，」Kumba 总结道，「就是一个自由的国家。而一个稻米能远行的农人，就是一个终于能靠自己劳动过活的农人。」`,
    },
    {
      id: "apres-2040",
      voix: "recit",
      fr: `Dans le dossier que Kissidougou envoya à la Simandou Academy, Kumba avait dessiné la plaine de 2040.

Des rizières à perte de vue, vertes puis dorées. Des bassins où sautaient les poissons. Et, à la gare, un train qu'on chargeait de sacs où l'on lisait en grand : MALODOUGOU. Le riz montait vers les villes du Nord, descendait vers la côte, vers le port. Autour des villages, toujours, la ceinture d'arbres des anciens.

Au bas du dessin, là où la forêt donne la main à la plaine, elle avait écrit :

« On cultivait sans pouvoir vendre. Aujourd'hui, le train emporte notre Malodougou vers tout le pays — et le paysan vit enfin de sa terre. La suite, c'est à ceux qui viennent de l'écrire. »`,
      en: `In the file that Kissidougou sent to the Simandou Academy, Kumba had drawn the plain of 2040.

Paddies as far as the eye could see, green and then golden. Ponds where the fish leaped. And, at the station, a train being loaded with sacks on which you could read, in large letters: MALODOUGOU. The rice went up toward the cities of the North, down toward the coast, toward the port. Around the villages, always, the belt of trees of the elders.

At the bottom of the drawing, there where the forest gives its hand to the plain, she had written:

"We used to grow without being able to sell. Today, the train carries our Malodougou to the whole country — and the farmer finally lives from his land. The rest is for those who come next to write."`,
      ar: `في الملفّ الذي أرسلته Kissidougou إلى Simandou Academy، كانت Kumba قد رسمت سهل عام 2040.

حقول أرزٍّ إلى ما لا تراه العين، خضراء ثمّ ذهبية. وأحواضٌ يقفز فيها السمك. وعند المحطّة، قطارٌ يُحمَّل بأكياسٍ يُقرأ عليها بخطٍّ كبير: MALODOUGOU. كان الأرزّ يصعد نحو مدن الشمال، وينزل نحو الساحل، نحو الميناء. وحول القرى، دائمًا، حزام أشجار الأجداد.

في أسفل الرسم، هناك حيث تمدّ الغابة يدها إلى السهل، كتبت:

«كنّا نزرع دون أن نقدر على البيع. واليوم، يحمل القطار Malodougou إلى البلد كلّه — والفلّاح يعيش أخيرًا من أرضه. والبقيّة على مَن يأتي بعدُ أن يكتبها.»`,
      zh: `在 Kissidougou 寄给 Simandou Academy 的材料里，Kumba 画了一幅 2040 年的平原。

稻田一眼望不到边，先是青绿，继而金黄。池塘里鱼儿跃动。而在车站，一列火车正装着一袋袋大米，袋上用大字写着：MALODOUGOU。稻米往北运向城市，往南运向海岸、运向港口。村庄四周，始终是先辈留下的那一圈树木。

在画的下方，正是森林向平原伸出手的地方，她写道：

「我们曾经只会种，却卖不出去。如今，火车把我们的 Malodougou 运往全国——农人终于能靠自己的土地过活。余下的故事，要由后来的人来书写。」`,
    },
  ],
};

export default g2040Tome3;
