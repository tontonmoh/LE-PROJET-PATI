// =============================================================================
//  GÉNÉRATION 2040 — Tome 1 : « La Forêt et le Fer »
//  Fichier de données Pati (aligné sur l'interface de g2040-tome0.ts).
// -----------------------------------------------------------------------------
//  ÉTAT : FR + EN + AR + ZH remplis (texte entièrement de Claude — pas de figure réelle).
//  AR & ZH = DRAFTS produits par Claude → à FAIRE RELIRE par un locuteur natif avant prod.
//  Noms INVARIANTS dans les 4 langues, laissés en latin : Sia, Cécé, Gbamou, Haba, Mamy Loua.
//  Mot manon laissé tel quel et glosé en contexte : « Kookieba ! » (= c'est nous).
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
  statut: "en_production", // FR + EN prêts ; AR/ZH = drafts à relire
  titre: {
    fr: "La Forêt et le Fer",
    en: "The Forest and the Iron",
    ar: "الغابة والحديد",
    zh: "森林与铁",
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
      ar: "في لولا، جبلٌ يحمل غابةً حيّة — وربّما حديدًا نائمًا. هل علينا أن نختار؟",
      zh: "在洛拉，一座山承载着一片生机勃勃的森林——也许还有沉睡的铁。我们必须做出选择吗？",
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
      ar: [
        "في لولا، يسهر الجبل على كلّ شيء: الغابة، والقرى، وشمبانزي Bossou التي تكسر جوزها منذ الأزل. من أجل مسابقة Simandou Academy، على صفّ Sia أن يروي هدفه.",
        "لكنّ سؤالًا يقسم الأطفال. يُقال إنّ الحديد ينام تحت جبلهم. هل يُوقَظ يومًا لكي تُحسب لولا أخيرًا — على حساب الغابة؟ أم نحمي الغابة — على خطر رحيل الإخوة الكبار؟",
        "ترفض Sia أن تختار. بين الغابة والحديد، تكتب كلمةً صغيرةً واحدة: وَ. شرط أن نعتني بهما.",
        "كتابٌ عن الحياة على اليابسة والصناعة وهما يتعلّمان أن يكبرا معًا. Génération 2040 · من 12 سنة.",
      ],
      zh: [
        "在洛拉，大山守护着一切：森林、村庄，还有自古就用石头敲开坚果的 Bossou 黑猩猩。为了 Simandou Academy 的比赛，Sia 的班级要讲述自己的目标。",
        "但有一个问题让孩子们产生了分歧。据说铁就沉睡在他们的山下。是否有一天该把它唤醒，让洛拉终于被看见——哪怕冒着失去森林的风险？还是守护森林——哪怕看着哥哥们离开？",
        "Sia 拒绝二选一。在森林与铁之间，她写下一个小小的词：和。前提是好好照看它们。",
        "一本关于陆地生命与工业学会共同成长的书。Génération 2040 · 12岁以上。",
      ],
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
      ar: `كان نداء Simandou Academy قد وصل حتى لولا، تحمله الإذاعة ومُلصقٌ كبيرٌ على جدار المدرسة: كلّ مدرسة تروي هدفها. في صفّ Sia، كان النقاش حاميًا.

— نحن، الأمر سهل، قال Cécé. نروي الحديد. يُقال إنّ جبلنا مملوءٌ به. إذا جاؤوا يومًا للبحث عنه، ستُحسب لولا أخيرًا.

— وماذا عن الغابة إذًا؟ أجابت Sia، دون أن ترفع صوتها. الجبل ليس حديدًا فقط.

خلفهم، على جبل Nimba، كانت الغيوم تتعلّق بالأشجار كما في كلّ صباح. لم تحسم الأستاذة Haba الأمر. كتبت كلمتين على السبّورة، وتركت بينهما فراغًا كبيرًا — الغابة … الحديد.

— هذا هو هدفكم، قالت. عليكم أن تملأوا الوسط.`,
      zh: `Simandou Academy 的号召已经传到了洛拉，由广播和贴在学校墙上的一张大海报带来：每所学校讲述自己的目标。在 Sia 的班上，讨论得很热烈。

「我们的很简单，」Cécé 喊道。「我们讲铁。听说我们的山里全是铁。哪天有人来开采，洛拉终于就能被看见了。」

「那森林呢？」Sia 回答，没有提高声音。「山，不只是铁。」

在他们身后的宁巴山上，云雾像每天早晨一样缠绕着树木。Haba 老师没有下定论。她在黑板上写下两个词，中间留了一大片空白——森林……铁。

「这就是你们的目标，」她说。「中间，由你们来填。」`,
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
      ar: `كان Cécé يحفظ حلمه عن ظهر قلب. كان أخوه الكبير قد رحل بحثًا عن عملٍ بعيدًا، عند ورشات الحديد الكبرى. هناك، كان يروي، ينحدر أنقى حديدٍ في العالم نحو البحر، عبر خطٍّ طويلٍ كالنهر.

— يومًا ما، كان يقول Cécé، سيأتون ليوقظوا الحديد النائم تحت جبلنا نحن أيضًا. وفي ذلك اليوم، لن يضطرّ إخوتي إلى الرحيل.

كانت Sia تستمع. لم يكن ذلك خطأ. هي أيضًا رأت الشباب يرحلون. هي أيضًا أرادت أن تُحسب لولا على خريطة البلد، لا على خريطة الغابات فقط.`,
      zh: `Cécé 把自己的梦想记得滚瓜烂熟。他的哥哥为了找工作去了很远的地方，在那些大型的铁矿工地。他说，在那里，世界上最纯的铁早已沿着一条像河流一样长的线路运往大海。

「总有一天，」Cécé 说，「他们也会来唤醒沉睡在我们山下的铁。到那一天，我的哥哥们就不必离开了。」

Sia 听着。这并没有错。她也看着年轻人一个个离开。她也希望洛拉能出现在国家的地图上，而不只是森林的地图上。`,
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
      ar: `يوم الأربعاء، اصطحبت حارسة غابة Nimba، Mamy Loua، الصفّ نحو Bossou. ستّة كيلومترات، لا أكثر، بين الجبل والحدود. هناك، تحت الأشجار، صمت الأطفال.

كانت عائلةٌ من الشمبانزي تكسر جوز النخيل. حجرٌ في الأسفل، حجرٌ في الأعلى، والحركة واثقة، تتكرّر. كان الأكبر سنًّا يقسم اللُّبّ بالعدل، مبتدئًا بالصغار.

— إنهم يختارون أدواتهم، همست Mamy Loua. يعلّمون أبناءهم. قبلنا، كانوا هنا بالفعل.

في المساء، روت جدّة Sia النصف الآخر من الحكاية — ذلك الذي يتوارثه المانون: هذه الشمبانزي لا تُصاد ولا يُسخَر منها. إنهم أجدادٌ عادوا ليجلسوا قرب البشر. كانت Sia تعرف كتاب الصفّ الصغير، شمبانزي Bossou. في تلك الليلة، أعادت قراءته كاملًا.`,
      zh: `星期三，宁巴山的护林员 Mamy Loua 带着全班前往 Bossou。山与边境之间，只有六公里。在那里，树下，孩子们安静了下来。

一家黑猩猩正在敲开棕榈果。下面一块石头，上面一块石头，动作稳健，一次次重复。年长的那只公平地分着果仁，先从小的开始。

「它们会挑选自己的工具，」Mamy Loua 轻声说。「它们教自己的孩子。在我们之前，它们就已经在这里了。」

晚上，Sia 的祖母讲述了故事的另一半——马农人代代相传的那一半：这些黑猩猩，不可以猎杀，也不可以嘲笑。它们是回来坐在人们身边的祖先。Sia 知道班上那本小书《Bossou 的黑猩猩》。那天夜里，她把它从头到尾又读了一遍。`,
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
      ar: `في اليوم التالي، عاد الجدال، أشدّ.

— إذا حفرنا الجبل بحثًا عن الحديد، قال Gbamou، أين ستذهب الغابة؟ أين سيذهبون هم؟

— وإذا لم نحفر، ردّ Cécé، أين سيذهب إخوتنا؟ أين سنذهب نحن؟

لم يكن أحدٌ مخطئًا. ذلك كان الأصعب. كان الصفّ ينظر إلى السبّورة، الغابة في جهة، الحديد في الأخرى، وذلك الفراغ الكبير في الوسط الذي لم يعرف أحدٌ كيف يملؤه.

في ذلك اليوم، كانت Mamy Loua قد جاءت لتستمع. قالت فقط:

— تظنّون أنّ عليكم أن تختاروا. لكن مَن قال لكم إنّ عليكم أن تختاروا؟`,
      zh: `第二天，争论又起，而且更激烈了。

「如果我们为了铁去挖山，」Gbamou 说，「森林去哪里？它们去哪里？」

「那如果我们不挖，」Cécé 反驳，「我们的哥哥们去哪里？我们去哪里？」

没有人错。这才是最难的地方。全班望着黑板，一边是森林，一边是铁，中间那一大片空白，谁也不知道怎么填。

那一天，Mamy Loua 来旁听了。她只说了一句：

「你们以为必须二选一。可是，谁告诉你们必须选呢？」`,
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
      ar: `فكّرت Sia في الأمر طوال الليل. في الصباح، ذهبت إلى السبّورة، وفي الفراغ الكبير كتبت كلمةً صغيرةً واحدة — وَ.

— يمكننا أن نحافظ على الغابة وأن نوقظ الحديد، قالت. لكن فقط إذا فعلنا ذلك بعناية.

عندئذٍ انطلقت الأفكار، صادقة:

— لا نمسّ جزء الجبل حيث تعيش الشمبانزي. نترك ممرًّا من الأشجار بين المنجم وBossou.
— ما نقطعه، نعيد غرسه. فريقٌ من الأطفال لإحصاء الأشجار، كلّ موسم.
— القطار يُحدث ضجيجًا؟ نعلّمه أن يبطئ قرب الغابة.
— ومال الحديد، فليعُد أيضًا إلى المدرسة، إلى الصحّة، إلى المشاتل.

كانت Mamy Loua تبتسم. وشرحت مهندسةٌ من الشركة، حضرت ذلك اليوم، أنّ نعم، بعض المناجم تتعلّم أن تترك الغابة تعيش إلى جانبها — أنّ ذلك أطول وأكثر صرامة، لكنه ممكن. وأنّ الإنجاز الحقيقي ليس أن نحفر بسرعة: بل أن نحفر دون أن نمحو.

عندئذٍ، من آخر الصفّ، ارتفعت قبضة، وانطلقت الكلمة المانونية القديمة: «Kookieba!» — إنّنا نحن. ردّدها الصفّ، مرّة، مرّتين، حتى ارتجّت المقاعد. Kookieba: الغابة والحديد، وعلينا نحن أن نعتني بهما.`,
      zh: `Sia 想了整整一夜。早晨，她走到黑板前，在那一大片空白里写下一个小小的词——和。

「我们可以既守护森林，又唤醒铁，」她说。「但前提是，要用心去做。」

于是，一个个真切的想法涌了出来：

——黑猩猩生活的那片山，我们不碰。在矿场和 Bossou 之间，留一条树木的通道。
——砍掉的，我们重新种上。组一支孩子的队伍，每个季节去数树。
——火车太吵？我们教它在森林边放慢速度。
——还有铁带来的钱，也让它回到学校、回到医疗、回到苗圃。

Mamy Loua 微笑着。那天来的一位公司女工程师解释说，是的，有些矿场正在学着让森林在身旁继续生长——这更漫长、更苛刻，但做得到。真正的本事不是挖得快：而是挖而不抹去。

这时，从教室后排，一只拳头举了起来，古老的马农语词迸了出来：「Kookieba！」——是我们。全班跟着喊，一遍，两遍，直到长凳都在颤动。Kookieba：森林与铁，由我们来守护。`,
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
      ar: `في الملفّ الذي أرسله صفّ لولا إلى Simandou Academy، كانت هناك صورةٌ واحدة، رسمتها Sia.

كانت تُظهر الجبل سنة 2040. إذا أُوقِظ يومًا حديد Nimba — فليكن هكذا: في الأسفل، ينحدر القطار نحو البحر، محمَّلًا؛ أمّا في الأعلى، فيبقى Nimba حاملًا غابته، خضراء كاملة. وفي Bossou، تظلّ عائلةٌ من الشمبانزي تكسر جوزها، حجرٌ في الأسفل، حجرٌ في الأعلى.

على ظهر الورقة، كانت Sia قد كتبت، كي لا يُنسى:

«لم نختر بين الغابة والحديد. اخترنا الاثنين، وتعلّمنا أن نعتني بهما. أمّا البقيّة، فعلى مَن سيأتون أن يكتبوها.»`,
      zh: `在洛拉的班级寄给 Simandou Academy 的材料里，只有一幅画，是 Sia 画的。

画上是 2040 年的大山。如果有一天宁巴山的铁被唤醒——那就让它这样吧：山下，火车满载着往大海驶去；而山上，宁巴山依旧披着它的森林，翠绿而完整。在 Bossou，一家黑猩猩仍旧敲着坚果，下面一块石头，上面一块石头。

在纸的背面，Sia 写下了这句话，为了不被忘记：

「我们没有在森林和铁之间二选一。我们两个都选了，并学会了好好照看它们。接下来的，要由后来的人来书写。」`,
    },
  ],
};

export default g2040Tome1;
