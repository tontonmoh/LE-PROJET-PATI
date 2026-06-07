// =============================================================================
//  GÉNÉRATION 2040 — Tome 6 : « Les Montagnes et les Sources »
//  Fichier de données Pati (même structure que g2040-tome1..5.ts)
// -----------------------------------------------------------------------------
//  ÉTAT : FR + EN remplis (texte de Claude). AR + ZH = BROUILLONS de Claude →
//         À FAIRE RELIRE par un natif avant de passer le statut à "pret".
//  NOMS INVARIANTS en latin dans les 4 langues : Binta (héroïne), Madame Baldé
//  (la maîtresse), Dalaba, Faranah, Dabola, Mamou, Niger, Sénégal, Gambie,
//  Pouké, Sébori, Miriam Makeba, Simandou Academy. Termes-concepts gardés tels
//  quels et glosés : suudu mauudo (la grande case), lefa (plafond tressé),
//  Pakala (serrure), vannerie, indigo.
//  GARDE-FOU : Miriam Makeba (figure réelle décédée) référencée FACTUELLEMENT
//  comme patrimoine — AUCUNE parole de chanson, pas de focus apartheid /
//  dirigeants. La case à palabres = architecture + lieu de décisions, SANS
//  nommer les figures politiques de 1957. Religieux → discret.
// =============================================================================

import type { LivreG2040, SectionG2040 } from "./g2040-tome1";

export const g2040Tome6: LivreG2040 = {
  slug: "g2040-montagnes-et-sources",
  serie: "generation-2040",
  ordre: 6,
  statut: "en_production", // FR + EN prêts ; AR/ZH = brouillons à faire relire
  titre: {
    fr: "Les Montagnes et les Sources",
    en: "The Mountains and the Springs",
    ar: "الجبال والينابيع",
    zh: "群山与清泉",
  },
  lieu: "Dalaba",
  sousCollection: "Aventure",
  age: "dès 10 ans",
  odd: [6, 13, 15],
  pilier: "Santé & bien-être · cadre de vie (eau, climat, forêts ; tourisme de repos)",
  couverture: "/images/g2040-tome6-couverture.webp",
  meta: {
    tagline: {
      fr: "À Dalaba, l'air est frais, l'eau jaillit, et le monde rêve de s'y reposer. Et si nos montagnes et nos sources étaient un trésor d'avenir ?",
      en: "In Dalaba the air is cool, the water springs up, and the world dreams of resting there. What if our mountains and our springs were a treasure for the future?",
      ar: "في Dalaba، الهواء عليلٌ، والماء يتفجّر، والعالم يحلم بأن يستريح هنا. فماذا لو كانت جبالنا وينابيعنا كنزًا للمستقبل؟",
      zh: "在 Dalaba，空气清凉，泉水涌流，世界都梦想着来此歇息。倘若我们的群山与清泉，正是一笔面向未来的财富呢？",
    },
    blurb: {
      fr: [
        "Dalaba, la « petite Suisse » du Fouta Djallon, est perchée dans la fraîcheur des montagnes, là où naissent les sources qui abreuvent trois pays. Quand la nouvelle maîtresse, Madame Baldé, y monte en taxi depuis les plaines chaudes, elle découvre un autre pays : pins, brume, eau claire.",
        "Pour le concours de la Simandou Academy, la classe de Binta croit que son seul trésor est « du passé » : la vieille case à palabres et l'artisanat des grands-mères, l'indigo et la vannerie.",
        "Mais Madame Baldé a traversé le pays, et Miriam Makeba, « Mama Africa », était venue se reposer ici : le climat, l'eau et le calme de Dalaba sont un trésor d'avenir. Binta renverse la phrase « on part d'ici » en « on vient ici » — et trouve l'Objectif : protéger les forêts et les sources, faire de Dalaba la ville du repos, et faire vivre ses merveilles, jusqu'à son étonnante architecture aux plafonds tressés.",
        "Un livre sur l'eau, le climat et la fierté de bâtir. Génération 2040 · dès 10 ans.",
      ],
      en: [
        "Dalaba, the \u201Clittle Switzerland\u201D of the Fouta Djallon, is perched in the cool of the mountains, where the springs are born that water three countries. When the new teacher, Madame Baldé, climbs up by taxi from the hot plains, she discovers another country: pines, mist, clear water.",
        "For the Simandou Academy contest, Binta's class believes its only treasure is \u201Cthe past\u201D: the old palaver house and their grandmothers' crafts, indigo and basketry.",
        "But Madame Baldé has crossed the country, and Miriam Makeba, \u201CMama Africa,\u201D once came here to rest: Dalaba's climate, water and calm are a treasure for the future. Binta turns the saying \u201Cwe leave here\u201D into \u201Cwe come here\u201D \u2014 and finds the Objective: to protect the forests and the springs, to make Dalaba the town of rest, and to keep its wonders alive, down to its astonishing woven-ceiling architecture.",
        "A book about water, climate, and the pride of building. Génération 2040 · ages 10 and up.",
      ],
      ar: [
        "Dalaba، «سويسرا الصغيرة» في Fouta Djallon، تتربّع في برودة الجبال، حيث تُولَد الينابيع التي تسقي ثلاثة بلدان. وحين تصعد إليها المعلّمة الجديدة، Madame Baldé، بالتاكسي من السهول الحارّة، تكتشف بلدًا آخر: صنوبرٌ، وضبابٌ، وماءٌ صافٍ.",
        "من أجل مسابقة Simandou Academy، يظنّ صفّ Binta أنّ كنزه الوحيد «من الماضي»: دار المضافة العتيقة وحِرَفُ الجدّات، النيلة (indigo) والسلال (vannerie).",
        "لكنّ Madame Baldé عبرت البلاد، و Miriam Makeba، «Mama Africa»، جاءت يومًا لتستريح هنا: مناخ Dalaba وماؤها وهدوؤها كنزٌ للمستقبل. تقلب Binta العبارة «من هنا نرحل» إلى «إلى هنا نأتي» — وتجد الهدف: حماية الغابات والينابيع، وجعل Dalaba مدينةَ الراحة، وإحياء عجائبها، حتّى عمارتها المذهلة ذات الأسقف المنسوجة.",
        "كتابٌ عن الماء والمناخ وكبرياء البناء. Génération 2040 · من 10 سنوات فما فوق.",
      ],
      zh: [
        "Dalaba，Fouta Djallon 的「小瑞士」，高踞在清凉的群山之间，那里诞生着滋养三个国家的水源。当新来的老师 Madame Baldé 从炎热的平原乘出租车上山时，她发现了另一个国度：松林、薄雾、清澈的泉水。",
        "为了 Simandou Academy 的比赛，Binta 全班都以为自己唯一的宝藏「属于过去」：那座古老的议事大屋，还有祖母们的手艺——靛蓝（indigo）与编筐（vannerie）。",
        "可 Madame Baldé 走遍了全国，而 Miriam Makeba——「Mama Africa」——也曾来此歇息：Dalaba 的气候、清水与宁静，正是一笔面向未来的财富。Binta 把「我们从这里离开」反转成「人们到这里来」——并找到了「目标」：守护森林与水源，把 Dalaba 变成歇息之城，让它的种种奇景活下去，直到那令人惊叹的、编织顶棚的建筑。",
        "一本关于水、气候与建造之骄傲的书。Génération 2040 · 适合 10 岁以上。",
      ],
    },
  },
  sections: [
    {
      id: "taxi-qui-monte",
      voix: "recit",
      fr: `La nouvelle maîtresse, Madame Baldé, était partie de Faranah dans un vieux taxi chargé jusqu'au toit.

La route monta longtemps. À Dabola, où l'usine d'huile ronflait de nouveau, il faisait chaud et la poussière collait à la peau. À Mamou, le grand carrefour, les taxis se croisaient dans tous les sens. Puis le taxi grimpa encore — et quelque chose changea. L'air devint frais. Des pins apparurent. Des sources couraient au bord de la route. Quand elle descendit enfin à Dalaba, Madame Baldé frissonna, surprise, et sourit : « On dirait un autre pays. »`,
      en: `The new teacher, Madame Baldé, had set out from Faranah in an old taxi loaded to the roof.

The road climbed for a long time. At Dabola, where the oil mill was humming again, it was hot and the dust clung to the skin. At Mamou, the great crossroads, taxis crossed in every direction. Then the taxi climbed higher still — and something changed. The air turned cool. Pines appeared. Springs ran along the roadside. When she finally stepped down at Dalaba, Madame Baldé shivered, surprised, and smiled: "It's like another country."`,
      ar: `كانت المعلّمة الجديدة، Madame Baldé، قد انطلقت من Faranah في تاكسي قديمٍ محمَّلٍ حتّى سقفه.

صعِد الطريق طويلًا. في Dabola، حيث عاد معمل الزيت يهدر، كان الحرّ شديدًا والغبار يلتصق بالجلد. وفي Mamou، المفترق الكبير، كانت سيّارات الأجرة تتقاطع في كلّ اتّجاه. ثمّ صعِد التاكسي أكثر — وتغيّر شيءٌ ما. صار الهواء عليلًا. ظهرت أشجار الصنوبر. وجرت الينابيع على حافّة الطريق. وحين نزلت أخيرًا في Dalaba، ارتجفت Madame Baldé مندهشةً، وابتسمت: «كأنّه بلدٌ آخر.»`,
      zh: `新来的老师 Madame Baldé，从 Faranah 出发，坐进一辆装得连车顶都堆满了东西的旧出租车。

路一直往上爬。在 Dabola，榨油厂又轰鸣起来，那里又热，尘土黏在皮肤上。在大路口 Mamou，出租车朝四面八方交错而过。随后车子继续往上爬——有什么变了。空气变凉了。松树出现了。泉水顺着路边流淌。当她终于在 Dalaba 下车时，Madame Baldé 惊讶地打了个寒颤，笑道：「简直像到了另一个国家。」`,
    },
    {
      id: "richesse-derriere-nous",
      voix: "recit",
      fr: `Dans sa nouvelle classe, on préparait l'Objectif pour la Simandou Academy.

— Le trésor de Dalaba, récita Binta, c'est notre histoire : la vieille case à palabres — la suudu mauudo, « la grande case » — là où l'on prenait les grandes décisions, aujourd'hui classée. Et c'est l'artisanat de nos grands-mères : l'indigo que l'on teint à la main, et la vannerie — les vans tressés par les femmes de Pouké et de Sébori.

Ce qu'elle ne disait pas encore, c'est que ces deux mondes n'en font qu'un. Car dans la case à palabres, le plus beau est à l'intérieur : le plafond entier est tressé — un « lefa » de vans posés sur une charpente de bambou, comme une immense mosaïque suspendue. Les mêmes mains qui font les paniers ont tissé le toit. Murs de terre, quatre portes, et une serrure de bois qu'on n'ouvre qu'avec une clé d'autrefois.

— De belles choses, dit un garçon. Mais des choses du passé. Juste de quoi amuser deux touristes qui passent.`,
      en: `In her new class, they were preparing the Objective for the Simandou Academy.

"Dalaba's treasure," Binta recited, "is our history: the old palaver house — the suudu mauudo, 'the great house' — where the big decisions were once made, now a listed monument. And it is our grandmothers' crafts: the indigo we dye by hand, and basketry — the winnowing trays woven by the women of Pouké and Sébori."

What she did not yet say was that these two worlds are one. For in the palaver house, the most beautiful part is inside: the whole ceiling is woven — a "lefa" of trays set on a bamboo frame, like a vast suspended mosaic. The same hands that make the baskets wove the roof. Earthen walls, four doors, and a wooden lock that opens only with a key of the old days.

"Lovely things," said a boy. "But things of the past. Just enough to amuse a couple of passing tourists."`,
      ar: `في صفّها الجديد، كانوا يُعدّون الهدف من أجل Simandou Academy.

— كنزُ Dalaba، تلت Binta، هو تاريخنا: دار المضافة العتيقة — الـ suudu mauudo، «الدار الكبيرة» — حيث كانت تُتَّخذ القرارات الكبرى، وقد صارت اليوم أثرًا مصنَّفًا. وهو حِرَفُ جدّاتنا: النيلة التي نصبغها باليد، والسلال — الأطباق المنسوجة على يد نساء Pouké و Sébori.

ما لم تقله بعد هو أنّ هذين العالمين عالمٌ واحد. ففي دار المضافة، الأجملُ في الداخل: السقف كلّه منسوجٌ — «lefa» من الأطباق موضوعةٍ على هيكلٍ من الخيزران، كأنّها فسيفساءُ معلّقةٌ شاسعة. اليدان نفساهما اللتان تصنعان السلال نسجتا السقف. جدرانٌ من الطين، وأربعة أبواب، وقفلٌ خشبيٌّ لا يُفتَح إلّا بمفتاحٍ من الزمن الغابر.

— أشياء جميلة، قال صبيٌّ. لكنّها من الماضي. تكفي فقط لتسلية سائحَين عابرَين.`,
      zh: `在她的新班级里，大家正为 Simandou Academy 准备「目标」。

「Dalaba 的宝藏，」Binta 背诵道，「是我们的历史：那座古老的议事大屋——suudu mauudo，『大屋』——从前的重大决定都在这里做出，如今已被列为文物。还有祖母们的手艺：我们手工染的靛蓝，以及编筐——Pouké 和 Sébori 的妇女编出的簸箕。」

她还没说出口的是：这两个世界其实是一体的。因为在议事大屋里，最美的在内部：整个顶棚都是编织的——一张张簸箕（lefa）架在竹制的骨架上，宛如一片悬空的巨大马赛克。编筐的那双手，也编出了屋顶。土墙，四道门，还有一把只能用古老钥匙才打得开的木锁。

「挺美的，」一个男孩说。「可都是过去的东西。顶多够逗两个路过的游客开心。」`,
    },
    {
      id: "ce-que-madame-balde-a-vu",
      voix: "recit",
      fr: `— Les enfants, dit la maîtresse, je viens de traverser le pays. En bas, partout, on travaille dans la chaleur et la poussière. Et puis je suis montée chez vous… et j'ai eu froid en plein après-midi. J'ai vu des sources à chaque virage, des jardins, le calme.

Elle marqua un silence.

— Savez-vous qu'il y a longtemps, une des chanteuses les plus célèbres du monde, venue d'Afrique du Sud, est tombée amoureuse de Dalaba ? Elle y a bâti une maison pour s'y reposer entre ses tournées, et préparait ses concerts dans son jardin. Aujourd'hui sa villa tombe en ruine — mais pensez-y : si le monde connaît déjà la douceur de Dalaba, alors votre climat et votre eau ne sont pas « le passé ». C'est un trésor que beaucoup de pays vous envient.`,
      en: `"Children," said the teacher, "I have just crossed the country. Down below, everywhere, people work in the heat and the dust. And then I came up to you… and I was cold in the middle of the afternoon. I saw springs at every bend, gardens, the quiet."

She paused.

"Did you know that, long ago, one of the most famous singers in the world, who came from South Africa, fell in love with Dalaba? She built a house here to rest between her tours, and prepared her concerts in its garden. Today her villa is falling into ruin — but think about it: if the world already knows the gentleness of Dalaba, then your climate and your water are not 'the past.' They are a treasure that many countries envy you."`,
      ar: `— يا أطفال، قالت المعلّمة، لقد عبرتُ البلاد للتوّ. في الأسفل، في كلّ مكان، يعمل الناس في الحرّ والغبار. ثمّ صعدتُ إليكم… فبَرَدتُ في عزّ الظهيرة. رأيتُ ينابيعَ عند كلّ منعطف، وحدائقَ، والسكينة.

صمتت لحظة.

— أتعلمون أنّه، قديمًا، وقعت واحدةٌ من أشهر المغنّيات في العالم، قادمةٌ من جنوب إفريقيا، في حبّ Dalaba؟ بنَت هنا بيتًا تستريح فيه بين جولاتها، وكانت تُعِدّ حفلاتها في حديقته. واليوم تتداعى فِلّتها — لكن فكّروا: إن كان العالم يعرف عذوبة Dalaba من قبل، فمناخكم وماؤكم ليسا «الماضي». إنّهما كنزٌ تحسدكم عليه بلدانٌ كثيرة.`,
      zh: `「孩子们，」老师说，「我刚刚穿越了整个国家。在下面，到处的人都在炎热和尘土里劳作。可我上到你们这里……大中午的我竟觉得冷。我看见每个转弯处都有泉水、花园，还有那份宁静。」

她停顿了一下。

「你们知道吗，很久以前，世界上最著名的歌唱家之一，一位来自南非的女子，爱上了 Dalaba？她在这里盖了一座房子，在巡演之间来此歇息，还在花园里筹备她的演唱会。如今她的别墅正日渐荒废——可你们想想：如果全世界早就知道 Dalaba 的温柔，那么你们的气候和清水就不是『过去』。它们是一笔许多国家都羡慕你们的财富。」`,
    },
    {
      id: "montagnes-et-sources",
      voix: "recit",
      fr: `Ce mot, eau, fit réfléchir Binta.

Elle savait que le Fouta était appelé le « château d'eau » : c'est sur ces hauteurs que naissent les grands fleuves — le Niger, le Sénégal, la Gambie. « Toute la sous-région boit un peu d'ici », pensa-t-elle. Mais elle savait aussi que, chaque année, on coupait des arbres, et que des sources baissaient.

Protéger la forêt, comprit-elle, c'était protéger l'eau. Et protéger l'eau, c'était garder vivant le vrai trésor — celui qui faisait la fraîcheur, et qui faisait venir le monde.`,
      en: `That word, water, set Binta thinking.

She knew the Fouta was called the "water tower": it is on these heights that the great rivers are born — the Niger, the Sénégal, the Gambie. "The whole sub-region drinks a little from here," she thought. But she also knew that, every year, trees were cut down, and springs ran lower.

To protect the forest, she understood, was to protect the water. And to protect the water was to keep alive the true treasure — the one that made the coolness, and that made the world come.`,
      ar: `تلك الكلمة، الماء، أطلقت تفكير Binta.

كانت تعرف أنّ Fouta يُسمّى «خزّان الماء»: فعلى هذه المرتفعات تُولَد الأنهار الكبرى — Niger و Sénégal و Gambie. «المنطقةُ كلّها تشرب قليلًا من هنا»، فكّرت. لكنّها كانت تعرف أيضًا أنّ الأشجار تُقطَع كلّ عام، وأنّ الينابيع تتراجع.

أن تحمي الغابة، أدركت، هو أن تحمي الماء. وأن تحمي الماء هو أن تُبقيَ الكنز الحقيقيّ حيًّا — ذاك الذي يصنع البرودة، ويجلب العالم.`,
      zh: `「水」这个字，让 Binta 陷入了思索。

她知道 Fouta 被称作「水塔」：正是在这些高地，诞生了那些大河——Niger、Sénégal、Gambie。「整个次区域都喝着这里的一点水，」她想。可她也知道，每年都有树木被砍倒，泉水也越来越低。

她明白了：守护森林，就是守护水。而守护水，就是让那真正的宝藏活下去——正是它带来了清凉，也带来了整个世界。`,
    },
    {
      id: "mot-de-binta",
      voix: "recit",
      fr: `Le jour de l'Objectif, Madame Baldé écrivit au tableau la phrase qu'on entendait souvent à Dalaba :

ON PART D'ICI

— Les grands s'en vont vers les villes chaudes pour gagner leur vie, dit Binta. Mais si notre richesse, c'est justement la fraîcheur, l'eau et le calme… alors on peut renverser la phrase.

Elle se leva et écrivit dessous :

ON VIENT ICI

Les idées jaillirent :

— On protège les forêts et les sources : pas d'eau fraîche, pas de Dalaba.
— On fait de Dalaba la ville du repos : le climat, les jardins, les cascades, l'accueil — pour les gens du pays comme pour le monde.
— On fait vivre nos merveilles : la case à palabres et son plafond tressé, la vannerie et l'indigo des grands-mères, et la villa de la chanteuse, qu'on sauve pour en faire un lieu de musique et de repos.
— Et notre façon de bâtir — ces tressages, ces intérieurs si beaux — pourrait inspirer les maisons d'accueil de demain, ici et ailleurs.
— Et la route, la Ligne qui renaît, montera les visiteurs jusqu'à nous, au lieu d'emporter nos jeunes vers le bas.

— Nos montagnes nous gardent au frais, conclut Binta, et nos sources font boire trois pays. Bien gardées, ce n'est pas nous qui partirons : c'est le monde qui montera s'y reposer.`,
      en: `On the day of the Objective, Madame Baldé wrote on the board the saying often heard in Dalaba:

WE LEAVE THIS PLACE

"The grown-ups go off to the hot cities to earn a living," said Binta. "But if our wealth is precisely the coolness, the water and the quiet… then we can turn the saying around."

She stood up and wrote beneath it:

WE COME TO THIS PLACE

The ideas burst out:

"We protect the forests and the springs: no cool water, no Dalaba."
"We make Dalaba the town of rest: the climate, the gardens, the waterfalls, the welcome — for the people of the country as for the world."
"We bring our wonders to life: the palaver house and its woven ceiling, the basketry and the grandmothers' indigo, and the singer's villa, which we save and turn into a place of music and rest."
"And our way of building — this weaving, these beautiful interiors — could inspire the guesthouses of tomorrow, here and elsewhere."
"And the road, the Line reborn, will bring visitors up to us, instead of carrying our young people down."

"Our mountains keep us cool," Binta concluded, "and our springs give three countries to drink. Well guarded, it is not we who will leave: it is the world that will come up to rest."`,
      ar: `في يوم الهدف، كتبت Madame Baldé على السبّورة العبارة التي تُسمَع كثيرًا في Dalaba:

مِن هنا نرحل

— الكبار يذهبون إلى المدن الحارّة ليكسبوا عيشهم، قالت Binta. لكن إن كانت ثروتنا هي بالذات البرودة والماء والسكينة… فيمكننا أن نقلب العبارة.

نهضت وكتبت تحتها:

إلى هنا نأتي

تدفّقت الأفكار:

— نحمي الغابات والينابيع: لا ماءَ باردًا، لا Dalaba.
— نجعل Dalaba مدينةَ الراحة: المناخ، والحدائق، والشلّالات، وحُسن الاستقبال — لأهل البلد وللعالم.
— نُحيي عجائبنا: دار المضافة وسقفها المنسوج، والسلال ونيلة الجدّات، وفِلّة المغنّية التي نُنقذها لنجعلها مكانًا للموسيقى والراحة.
— وطريقتنا في البناء — هذا النسج، هذه الدواخل البديعة — قد تُلهم بيوت الضيافة في الغد، هنا وفي غيرها.
— والطريق، الخطّ المبعوث من جديد، سيصعد بالزوّار إلينا، بدلًا من أن يحمل شبابنا إلى الأسفل.

— جبالنا تُبقينا في البرودة، خلصت Binta، وينابيعنا تسقي ثلاثة بلدان. إن أحسنّا حراستها، فلن نرحل نحن: بل العالمُ هو من سيصعد ليستريح.`,
      zh: `在「目标」公布的那天，Madame Baldé 把 Dalaba 常听到的那句话写在黑板上：

我们从这里离开

「大人们都跑到炎热的城市去谋生，」Binta 说。「可如果我们的财富恰恰是这份清凉、清水与宁静……那我们就能把这句话反过来。」

她站起来，在下面写道：

人们到这里来

主意一下子涌了出来：

「我们守护森林和水源：没有清凉的水，就没有 Dalaba。」
「我们把 Dalaba 变成歇息之城：气候、花园、瀑布、好客之道——既为本国人，也为全世界。」
「我们让种种奇景活过来：议事大屋和它编织的顶棚，编筐和祖母们的靛蓝，还有那位歌唱家的别墅——我们把它救下来，变成一处音乐与歇息之地。」
「我们的建造方式——这种编织、这些美丽的内部——也许能启发明天的迎宾客舍，无论在这里还是别处。」
「而那条路，重生的铁路，会把访客带上山来，而不是把我们的年轻人载下山去。」

「我们的群山让我们清凉，」Binta 总结道，「我们的泉水让三个国家有水喝。只要守护得好，离开的就不会是我们：而是世界会上山来歇息。」`,
    },
    {
      id: "apres-2040",
      voix: "recit",
      fr: `Dans le dossier que Dalaba envoya à la Simandou Academy, Binta avait dessiné sa ville en 2040.

Des collines couvertes de forêts protégées, des sources claires, des jardins en fleurs. De petites maisons d'accueil aux plafonds tressés comme la vieille case, où des familles de Conakry et des voyageurs du monde venaient respirer et dormir au frais. La case à palabres restaurée, pleine de visiteurs levant les yeux vers sa coupole de vannerie ; l'atelier d'indigo et les vannières devenus une halte qu'on adorait. Et la villa de la chanteuse, sauvée, où l'on venait écouter de la musique et se reposer, comme elle autrefois.

Au bas du dessin, le long d'une rivière naissante, elle avait écrit :

« On croyait qu'il fallait partir d'ici pour réussir. On a compris que nos montagnes et nos sources pouvaient faire monter le monde entier jusqu'à nous. La suite, c'est à ceux qui viennent de l'écrire. »`,
      en: `In the file that Dalaba sent to the Simandou Academy, Binta had drawn her town in 2040.

Hills covered in protected forests, clear springs, gardens in bloom. Little guesthouses with woven ceilings like the old palaver house, where families from Conakry and travellers from around the world came to breathe and sleep in the cool. The palaver house restored, full of visitors lifting their eyes to its dome of basketry; the indigo workshop and the weavers become a much-loved stop. And the singer's villa, saved, where people came to listen to music and to rest, as she once had.

At the bottom of the drawing, along a newborn river, she had written:

"We thought we had to leave this place to succeed. We understood that our mountains and our springs could bring the whole world up to us. The rest is for those who come next to write."`,
      ar: `في الملفّ الذي أرسلته Dalaba إلى Simandou Academy، كانت Binta قد رسمت مدينتها عام 2040.

تلالٌ تكسوها غاباتٌ محميّة، وينابيعُ صافية، وحدائقُ مزهرة. بيوتُ ضيافةٍ صغيرة بأسقفٍ منسوجةٍ كدار المضافة العتيقة، تأتي إليها عائلاتٌ من Conakry ومسافرون من العالم ليتنفّسوا وينعموا بالنوم في البرودة. دار المضافة مُرمَّمةً، تغصّ بالزوّار وهم يرفعون أعينهم إلى قبّتها المنسوجة؛ ومشغل النيلة والنسّاجات صارا محطّةً محبوبة. وفِلّة المغنّية، وقد أُنقِذت، يأتي إليها الناس ليستمعوا إلى الموسيقى ويستريحوا، كما كانت تفعل هي يومًا.

في أسفل الرسم، على امتداد نهرٍ وليد، كتبت:

«ظننّا أنّ علينا الرحيل من هنا لننجح. فهِمنا أنّ جبالنا وينابيعنا تستطيع أن تُصعِد العالم كلّه إلينا. والبقيّة على مَن يأتي بعدُ أن يكتبها.»`,
      zh: `在 Dalaba 寄给 Simandou Academy 的材料里，Binta 画了一幅 2040 年的家乡。

山丘上覆盖着受保护的森林，泉水清澈，花园绽放。一座座小小的迎宾客舍，顶棚像古老的议事大屋一样编织而成，来自 Conakry 的家庭和世界各地的旅人都来这里呼吸、在清凉中安睡。修复一新的议事大屋里挤满了访客，人人仰头望着那编织的穹顶；靛蓝作坊和编筐的女人们，成了人人喜爱的一站。还有那位歌唱家的别墅，被救了回来，人们来这里听音乐、歇息，就像她当年一样。

在画的下方，沿着一条新生的河流，她写道：

「我们曾以为，必须离开这里才能成功。后来才明白，我们的群山与清泉，能把整个世界都引上山来。余下的故事，要由后来的人来书写。」`,
    },
  ],
};

export default g2040Tome6;
