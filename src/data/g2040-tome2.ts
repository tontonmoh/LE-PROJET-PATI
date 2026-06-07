// =============================================================================
//  GÉNÉRATION 2040 — Tome 2 : « Makona, un fleuve qui relie »
//  Fichier de données Pati (aligné sur l'interface de g2040-tome0.ts).
// -----------------------------------------------------------------------------
//  ÉTAT : FR + EN + AR + ZH remplis (texte de Claude — pas de figure réelle).
//  AR & ZH = DRAFTS produits par Claude → à FAIRE RELIRE par un locuteur natif.
//  Noms INVARIANTS, laissés en latin : Finda, Tamba, Saa.
//  Sensibilité : guerres des voisins au passé et à hauteur d'enfant ; aucune
//  mention d'Ebola ni d'actualité récente ; voisins/institutions en générique.
//  À TRANCHER avec Moh : un mot kissi de ralliement (équivalent du « Kookieba »
//  manon du T1) — non inventé ici.
// =============================================================================

import type { LivreG2040 } from "./g2040-tome1";

export const g2040Tome2: LivreG2040 = {
  slug: "g2040-makona",
  serie: "generation-2040",
  ordre: 2,
  statut: "en_production", // FR + EN prêts ; AR/ZH = drafts à relire
  titre: {
    fr: "Makona, un fleuve qui relie",
    en: "Makona, a River That Connects",
    ar: "ماكونا، نهرٌ يَصِل",
    zh: "马科纳，一条连接的河",
  },
  lieu: "Guéckédou",
  sousCollection: "Aventure",
  age: "dès 12 ans",
  odd: [8, 17],
  pilier: "Économie, finance & assurances (+ transversal partenariats & paix)",
  couverture: "/images/g2040-tome2-couverture.webp",
  meta: {
    tagline: {
      fr: "À Guéckédou, on dit que le Makona est une frontière. Finda, elle, sait que c'est un chemin.",
      en: "In Guéckédou, they say the Makona is a border. Finda knows it's a path.",
      ar: "في غيكيدو يقولون إنّ Makona حدود. أمّا Finda، فتعرف أنه طريق.",
      zh: "在盖凯杜，人们说 Makona 是一道边界。可 Finda 知道，它是一条路。",
    },
    blurb: {
      fr: [
        "À Guéckédou, ville-carrefour entre la Guinée, le Liberia et la Sierra Leone, la grand-mère de Finda se souvient du plus grand marché de toute la sous-région. Pour le concours de la Simandou Academy, la classe doit raconter son Objectif.",
        "Sur la carte, le Makona est une frontière. Mais de l'autre côté du fleuve vit Tamba, le cousin de Finda — même famille, même langue, même grand-mère. Alors : le fleuve sépare-t-il, ou relie-t-il ?",
        "Finda n'efface pas le mot de la maîtresse. Elle ajoute seulement, en dessous : un fleuve qui relie. Et la classe se met à rêver le marché de demain — avec des balances et des sourires, pas des fusils.",
        "Un livre sur le travail, la paix et les voisins qu'on retrouve. Génération 2040 · dès 12 ans.",
      ],
      en: [
        "In Guéckédou, a crossroads town between Guinea, Liberia and Sierra Leone, Finda's grandmother remembers the biggest market in the whole sub-region. For the Simandou Academy contest, the class must tell its Objective.",
        "On the map, the Makona is a border. But on the other side of the river lives Tamba, Finda's cousin — same family, same language, same grandmother. So: does the river separate, or connect?",
        "Finda doesn't erase the teacher's word. She only adds, beneath it: a river that connects. And the class begins to dream up the market of tomorrow — with scales and smiles, not rifles.",
        "A book about work, peace, and neighbors found again. Génération 2040 · ages 12 and up.",
      ],
      ar: [
        "في غيكيدو، مدينة المفترق بين غينيا وليبيريا وسيراليون، تتذكّر جدّة Finda أكبر سوقٍ في المنطقة كلّها. من أجل مسابقة Simandou Academy، على الصفّ أن يروي هدفه.",
        "على الخريطة، Makona حدود. لكن على الضفّة الأخرى من النهر يعيش Tamba، ابن عمّ Finda — العائلة نفسها، اللغة نفسها، الجدّة نفسها. إذًا: هل يفصل النهر، أم يَصِل؟",
        "لا تمحو Finda كلمة الأستاذة. تضيف فقط، تحتها: نهرٌ يَصِل. ويأخذ الصفّ يحلم بسوق الغد — بالموازين والابتسامات، لا بالبنادق.",
        "كتابٌ عن العمل والسلام والجيران الذين نلتقي بهم من جديد. Génération 2040 · من 12 سنة.",
      ],
      zh: [
        "在盖凯杜，这座几内亚、利比里亚与塞拉利昂之间的十字路口之城，Finda 的祖母记得整个次区域最大的集市。为了 Simandou Academy 的比赛，班级要讲述自己的目标。",
        "在地图上，Makona 是一道边界。可河的另一岸住着 Finda 的表亲 Tamba——同一个家族，同一种语言，同一位祖母。那么：河，是隔开，还是连接？",
        "Finda 没有擦掉老师写的词。她只在下面添了一句：一条连接的河。于是全班开始畅想明天的集市——用秤和微笑，而不是枪。",
        "一本关于劳动、和平，以及重新相遇的邻邦的书。Génération 2040 · 12岁以上。",
      ],
    },
  },
  sections: [
    {
      id: "marche-avant",
      voix: "recit",
      fr: `Quand l'appel de la Simandou Academy arriva à Guéckédou, la grand-mère de Finda se mit à rire doucement.

— Un Objectif ? Mais nous, on l'a déjà eu, notre grand jour. Tu aurais dû voir ce marché, ma fille.

Et elle racontait : le plus grand marché de toute la sous-région, des étals à perte de vue, des marchands venus de la Guinée, du Liberia, de la Sierra Leone, et même de la Côte d'Ivoire. Dans une seule allée, on entendait dix langues. On y marchandait le tissu, l'huile rouge, le poisson fumé — et un peu d'espoir avec.

Finda regardait le marché d'aujourd'hui. Il battait encore, mais plus doucement. Comme un cœur qui se souvient d'avoir couru.`,
      en: `When the call of the Simandou Academy reached Guéckédou, Finda's grandmother began to laugh softly.

"An Objective? But we already had ours, our great day. You should have seen that market, my girl."

And she would tell of it: the biggest market in the whole sub-region, stalls as far as the eye could see, traders come from Guinea, from Liberia, from Sierra Leone, and even from Côte d'Ivoire. In a single lane you could hear ten languages. People bargained over cloth, red oil, smoked fish — and a little hope along with it.

Finda looked at the market of today. It still beat, but more softly. Like a heart that remembers having run.`,
      ar: `عندما وصل نداء Simandou Academy إلى غيكيدو، أخذت جدّة Finda تضحك بهدوء.

— هدف؟ لكنّنا قد حظينا بيومنا الكبير من قبل. كان عليكِ أن تري ذلك السوق، يا ابنتي.

وكانت تروي: أكبر سوقٍ في المنطقة كلّها، بسطاتٌ تمتدّ إلى ما لا نهاية، تجّارٌ قدِموا من غينيا، ومن ليبيريا، ومن سيراليون، وحتى من ساحل العاج. في ممرٍّ واحد، كنت تسمع عشر لغات. كان يُساوَم فيه على القماش، والزيت الأحمر، والسمك المدخّن — وقليلٍ من الأمل معها.

كانت Finda تنظر إلى سوق اليوم. ما زال ينبض، لكن بهدوءٍ أكثر. كقلبٍ يتذكّر أنه ركض يومًا.`,
      zh: `当 Simandou Academy 的号召传到盖凯杜时，Finda 的祖母轻轻地笑了起来。

「目标？可我们早就有过自己的大日子了。你真该看看那个集市，我的孩子。」

她讲着：那是整个次区域最大的集市，摊位一眼望不到头，商人们从几内亚、从利比里亚、从塞拉利昂，甚至从科特迪瓦赶来。在一条小巷里，你能听见十种语言。人们讨价还价，买卖布料、红油、熏鱼——还有一点点希望。

Finda 望着今天的集市。它依然跳动着，只是更轻了。像一颗记得自己曾经奔跑过的心。`,
    },
    {
      id: "cousine-autre-rive",
      voix: "recit",
      fr: `Finda, elle, avait une raison bien à elle d'aimer le fleuve.

De l'autre côté du Makona vivait Tamba, son cousin. Même famille, même langue kissi, même grand-mère — mais un autre drapeau au-dessus de sa maison. Les jours de marché, quand le débarcadère était ouvert, ils se retrouvaient ; les autres jours, ils se faisaient signe d'une rive à l'autre, par-dessus l'eau.

Sur la carte de la classe, le Makona était un trait : une frontière. Pour Finda, c'était autre chose. C'était le chemin par lequel sa famille s'était toujours parlé.`,
      en: `Finda, for her part, had a reason all her own to love the river.

On the other side of the Makona lived Tamba, her cousin. Same family, same Kissi language, same grandmother — but another flag above his house. On market days, when the landing was open, they met; on other days, they waved to each other from one bank to the other, across the water.

On the class map, the Makona was a line: a border. For Finda, it was something else. It was the path along which her family had always spoken to one another.`,
      ar: `أمّا Finda، فكان لها سببٌ خاصٌّ بها لتحبّ النهر.

على الضفّة الأخرى من Makona كان يعيش Tamba، ابن عمّها. العائلة نفسها، لغة الكيسي نفسها، الجدّة نفسها — لكن علمٌ آخر فوق بيته. في أيام السوق، حين يكون المرسى مفتوحًا، كانا يلتقيان؛ وفي الأيام الأخرى، كانا يلوّحان لبعضهما من ضفّةٍ إلى أخرى، فوق الماء.

على خريطة الصفّ، كان Makona خطًّا: حدودًا. أمّا بالنسبة إلى Finda، فكان شيئًا آخر. كان الطريق الذي تحدّثت عبره عائلتها دائمًا.`,
      zh: `而 Finda，她有一个完全属于自己的爱这条河的理由。

在 Makona 的另一岸住着她的表亲 Tamba。同一个家族，同一种基西语，同一位祖母——只是他家屋顶上飘着另一面旗。赶集的日子，渡口开放时，他们会相见；其余的日子，他们就隔着水，从一岸向另一岸招手。

在班级的地图上，Makona 是一条线：一道边界。对 Finda 来说，它是别的东西。它是她的家人一直以来彼此说话的那条路。`,
    },
    {
      id: "frontiere-ou-chemin",
      voix: "recit",
      fr: `En classe, on discutait ferme.

— Le fleuve, c'est la frontière, dit un garçon. C'est écrit sur la carte. De l'autre côté, c'est un autre pays.

— Et quand le marché est fermé, ajouta un autre, on ne passe plus. Le fleuve nous sépare.

La Professeure Saa écrivit alors un mot au tableau, en grand :

MAKONA = FRONTIÈRE

— C'est ça, votre fleuve ? demanda-t-elle. À vous de me dire.`,
      en: `In class, the debate ran hard.

"The river is the border," said a boy. "It's written on the map. On the other side, it's another country."

"And when the market is closed," added another, "you can't cross anymore. The river separates us."

Professeure Saa then wrote one word on the board, in large letters:

MAKONA = BORDER

"Is that your river?" she asked. "It's for you to tell me."`,
      ar: `في الصفّ، كان النقاش حاميًا.

— النهر هو الحدود، قال صبيّ. هذا مكتوبٌ على الخريطة. الجهة الأخرى بلدٌ آخر.

— وحين يُغلق السوق، أضاف آخر، لا نعبر بعد ذلك. النهر يفصل بيننا.

عندئذٍ كتبت الأستاذة Saa كلمةً على السبّورة، كبيرة:

Makona = حدود

— أهذا هو نهركم؟ سألت. عليكم أن تخبروني.`,
      zh: `课堂上，争论得很激烈。

「河就是边界，」一个男孩说。「地图上写着呢。对岸是另一个国家。」

「而且集市一关，」另一个补充道，「就过不去了。河把我们隔开了。」

于是 Saa 老师在黑板上写下一个大大的词：

Makona = 边界

「这就是你们的河吗？」她问。「由你们来告诉我。」`,
    },
    {
      id: "gloire-blessure",
      voix: "recit",
      fr: `Pour comprendre, il fallait écouter les anciens.

Il y avait longtemps, quand les guerres des pays voisins étaient passées par là, les routes s'étaient tues. Les étals s'étaient vidés, les marchands avaient rangé leur courage, et tant de familles avaient traversé le fleuve dans l'autre sens, pour se mettre à l'abri. Le grand marché s'était endormi.

Mais Guéckédou n'avait jamais baissé les bras. La grand-mère le disait à sa manière :

— On nous a pris le marché. On ne nous a pas pris l'envie. Une ville carrefour, ça ne meurt pas : ça attend son heure.`,
      en: `To understand, you had to listen to the elders.

Long ago, when the wars of the neighboring countries had passed through, the roads had fallen silent. The stalls had emptied, the traders had folded away their courage, and so many families had crossed the river the other way, to find shelter. The great market had fallen asleep.

But Guéckédou had never given up. The grandmother put it her own way:

"They took the market from us. They did not take our will. A crossroads town does not die: it waits for its hour."`,
      ar: `لكي تفهم، كان عليك أن تصغي إلى الكبار.

منذ زمنٍ بعيد، حين مرّت حروب البلدان المجاورة من هناك، صمتت الطرقات. خلت البسطات، وطوى التجّار شجاعتهم، وعبرت عائلاتٌ كثيرة النهر في الاتجاه الآخر، طلبًا للأمان. نام السوق الكبير.

لكنّ غيكيدو لم تستسلم يومًا. كانت الجدّة تقولها على طريقتها:

— أخذوا منّا السوق. لم يأخذوا منّا الرغبة. مدينة المفترق لا تموت: إنها تنتظر ساعتها.`,
      zh: `要明白这一切，得听老人讲。

很久以前，邻国的战争从这里经过，道路都沉默了。摊位空了，商人们收起了勇气，许许多多的家庭朝相反的方向渡过河，去寻找避难之所。大集市睡着了。

但盖凯杜从未低头。祖母用她自己的方式说：

「他们夺走了我们的集市。他们没能夺走我们的心气。一座十字路口的城不会死：它在等待属于它的时辰。」`,
    },
    {
      id: "mot-de-finda",
      voix: "recit",
      fr: `Finda y pensa toute la nuit, en écoutant le fleuve. Le matin, elle alla au tableau. Elle n'effaça pas le mot de la Professeure. Elle ajouta juste, en dessous :

MAKONA = UN FLEUVE QUI RELIE

— Un fleuve, ça sépare deux rives, dit-elle. Mais c'est aussi la seule chose que les deux rives ont en commun. Avant, c'est lui qui amenait tout le monde au marché.

Alors les idées partirent, vraies :

— On rouvre les débarcadères, et on en prend soin, des deux côtés.
— On refait un grand jour de marché où les trois pays se retrouvent — la Guinée, le Liberia, la Sierra Leone.
— Les nouvelles routes, la ligne, le téléphone : que Guéckédou redevienne le carrefour, relié au pays et aux voisins.
— Et d'abord la paix. On ne fait pas un marché avec des fusils. On le fait avec des balances et des sourires.

Du fond de la classe, une fille murmura ce que tout le monde pensait : de l'autre côté de l'eau, ce n'étaient pas des étrangers. C'était un même peuple.`,
      en: `Finda thought about it all night, listening to the river. In the morning she went to the board. She did not erase the teacher's word. She only added, beneath it:

MAKONA = A RIVER THAT CONNECTS

"A river separates two banks," she said. "But it is also the one thing the two banks have in common. Long ago, it was the river that brought everyone to the market."

Then the ideas poured out, true:

"We reopen the landings, and we care for them, on both sides."
"We hold a great market day again, where the three countries meet — Guinea, Liberia, Sierra Leone."
"The new roads, the line, the telephone: let Guéckédou become the crossroads again, linked to the country and to the neighbors."
"And first of all, peace. You don't build a market with rifles. You build it with scales and smiles."

From the back of the class, a girl whispered what everyone was thinking: on the other side of the water, they were not strangers. They were one and the same people.`,
      ar: `فكّرت Finda في الأمر طوال الليل، وهي تصغي إلى النهر. في الصباح، ذهبت إلى السبّورة. لم تمحُ كلمة الأستاذة. أضافت فقط، تحتها:

Makona = نهرٌ يَصِل

— النهر يفصل بين ضفّتين، قالت. لكنه أيضًا الشيء الوحيد المشترك بين الضفّتين. قديمًا، هو الذي كان يجمع الجميع في السوق.

عندئذٍ انطلقت الأفكار، صادقة:

— نعيد فتح المراسي، ونعتني بها، على الجهتين.
— نعيد يوم سوقٍ كبير تلتقي فيه البلدان الثلاثة — غينيا، ليبيريا، سيراليون.
— الطرق الجديدة، الخطّ، الهاتف: لتعُد غيكيدو مفترقًا، موصولةً بالبلد وبالجيران.
— وقبل كلّ شيء، السلام. لا يُبنى سوقٌ بالبنادق. يُبنى بالموازين والابتسامات.

من آخر الصفّ، همست فتاةٌ بما كان يفكّر فيه الجميع: على الجهة الأخرى من الماء، لم يكونوا غرباء. كانوا شعبًا واحدًا.`,
      zh: `Finda 想了整整一夜，听着河水的声音。早晨，她走到黑板前。她没有擦掉老师写的词。她只在下面添了一句：

Makona = 一条连接的河

「河把两岸分开，」她说。「但它也是两岸唯一共有的东西。从前，正是它把所有人带到集市。」

于是，一个个真切的想法涌了出来：

——我们重新开放渡口，两岸一起照看它。
——我们再办一个盛大的集市日，让三个国家重聚——几内亚、利比里亚、塞拉利昂。
——新修的公路、那条线路、电话：让盖凯杜重新成为十字路口，与国家、与邻邦相连。
——而首先是和平。集市不是用枪造出来的。集市是用秤和微笑造出来的。

从教室后排，一个女孩轻声说出了大家心里想的：水的那一边，不是陌生人。是同一个民族。`,
    },
    {
      id: "apres-2040",
      voix: "recit",
      fr: `Dans le dossier que la classe de Guéckédou envoya à la Simandou Academy, Finda avait dessiné le marché de 2040.

On y voyait le Makona couvert de pirogues — chargées de tissu, d'huile rouge, de poisson, et non de peur. Sur les deux rives, des étals à perte de vue ; dans une seule allée, dix langues à nouveau. Des camions arrivaient par les routes neuves, le carrefour avait retrouvé son cœur. Et au milieu du pont de pirogues, une grande fille et un grand garçon se serraient la main, au-dessus de l'eau.

Au dos de la feuille, Finda avait écrit, pour qu'on n'oublie pas :

« On avait fait du fleuve une frontière. On en a refait un marché. Un même fleuve, un même peuple — la suite, c'est à ceux qui viennent de l'écrire. »`,
      en: `In the file that Guéckédou's class sent to the Simandou Academy, Finda had drawn the market of 2040.

It showed the Makona covered with pirogues — loaded with cloth, red oil, fish, and not with fear. On both banks, stalls as far as the eye could see; in a single lane, ten languages again. Trucks arrived along the new roads; the crossroads had found its heart again. And in the middle of the bridge of pirogues, a tall girl and a tall boy shook hands, above the water.

On the back of the sheet, Finda had written, so it would not be forgotten:

"We had made the river a border. We made it a market again. One same river, one same people — the rest is for those who come next to write."`,
      ar: `في الملفّ الذي أرسله صفّ غيكيدو إلى Simandou Academy، كانت Finda قد رسمت سوق 2040.

كان يظهر فيه Makona مغطّى بالزوارق — محمَّلةً بالقماش، والزيت الأحمر، والسمك، لا بالخوف. على الضفّتين، بسطاتٌ تمتدّ إلى ما لا نهاية؛ في ممرٍّ واحد، عشر لغاتٍ من جديد. كانت الشاحنات تصل عبر الطرق الجديدة، وقد استعاد المفترق قلبه. وفي وسط جسر الزوارق، تصافحت فتاةٌ كبيرة وفتًى كبير، فوق الماء.

على ظهر الورقة، كانت Finda قد كتبت، كي لا يُنسى:

«كنّا قد جعلنا النهر حدودًا. أعدناه سوقًا. نهرٌ واحد، شعبٌ واحد — أمّا البقيّة، فعلى مَن سيأتون أن يكتبوها.»`,
      zh: `在盖凯杜的班级寄给 Simandou Academy 的材料里，Finda 画了 2040 年的集市。

画上，Makona 上满是独木舟——载着布料、红油、鱼，而不是恐惧。两岸，摊位一眼望不到头；一条小巷里，又响起十种语言。卡车沿着新修的公路驶来，十字路口重新找回了它的心。在那座由独木舟连成的桥中央，一个高个子女孩和一个高个子男孩，在水面之上握手。

在纸的背面，Finda 写下了这句话，为了不被忘记：

「我们曾把河变成边界。我们又把它变回了集市。同一条河，同一个民族——接下来的，要由后来的人来书写。」`,
    },
  ],
};

export default g2040Tome2;
