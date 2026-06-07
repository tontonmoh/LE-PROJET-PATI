// =============================================================================
//  GÉNÉRATION 2040 — Tome 8 : « L'Arbre et le Fleuve »
//  Fichier de données Pati (même structure que g2040-tome1..7.ts)
// -----------------------------------------------------------------------------
//  ÉTAT : FR + EN remplis (texte de Claude). AR + ZH = BROUILLONS de Claude →
//         À FAIRE RELIRE par un natif avant de passer le statut à "pret".
//  NOMS INVARIANTS en latin dans les 4 langues : Télimélé, téli, méli, Konkouré,
//  Konkouré Fé, Bella (héroïne soussoue), Yama (héroïne peule), Fouta, Conakry,
//  Guinée, Simandou Academy. Ethnonymes traduits/translittérés selon la langue
//  (Peuls/Soussous/Djallonkés).
//  CŒUR (Moh) : le NOM = téli (poular) + méli (soussou) = un arbre / deux
//  langues / deux peuples (charnière Fouta→Basse Guinée ; registre légendaire).
//  KONKOURÉ : naît dans le Fouta, passe au pont de Télimélé, descend à la mer ;
//  ses barrages éclairent le pays MAIS pas Télimélé (injustice, sourcé).
//  ÉMANCIPATION : ne pas attendre/quémander → CONQUÉRIR LA SCIENCE DE L'ÉNERGIE
//  (métiers de l'énergie). KONKOURÉ FÉ = festival annuel (reboisement des
//  berges + culture + échanges). PUNCH : « sans arbres, plus de Télimélé ».
//  GARDE-FOU : NE nommer AUCUN président (barrages liés à des chefs d'État dans
//  les sources) ; religieux → discret.
// =============================================================================

import type { LivreG2040, SectionG2040 } from "./g2040-tome1";

export const g2040Tome8: LivreG2040 = {
  slug: "g2040-arbre-et-fleuve",
  serie: "generation-2040",
  ordre: 8,
  statut: "en_production", // FR + EN prêts ; AR/ZH = brouillons à faire relire
  titre: {
    fr: "L'Arbre et le Fleuve",
    en: "The Tree and the River",
    ar: "الشجرة والنهر",
    zh: "树与河",
  },
  lieu: "Télimélé",
  sousCollection: "Aventure",
  age: "dès 10 ans",
  odd: [7, 9],
  pilier: "Énergie (ODD 7) · infrastructures & désenclavement (ODD 9)",
  couverture: "/images/g2040-tome8-couverture.webp",
  meta: {
    tagline: {
      fr: "À Télimélé, le nom même de la ville unit deux peuples autour d'un arbre, et son fleuve éclaire tout le pays — sauf elle. Et si les enfants apprenaient à s'éclairer eux-mêmes ?",
      en: "In Télimélé, the town's very name unites two peoples around a tree, and its river lights up the whole country — except itself. What if the children learned to light their own way?",
      ar: "في Télimélé، يوحّد اسمُ المدينة نفسه شعبَين حول شجرة، ونهرُها يضيء البلادَ كلَّها — إلا هي. فماذا لو تعلّم الأطفال أن يضيئوا دربهم بأنفسهم؟",
      zh: "在 Télimélé，城市的名字本身就把两个民族围绕一棵树连在一起，而它的河流照亮了整个国家——唯独照不亮它自己。倘若孩子们学会自己点亮道路，会怎样呢？",
    },
    blurb: {
      fr: [
        "Télimélé, sur les contreforts ouest du Fouta, est la ville aux huit voisins — une porte entre la montagne et la mer. Mais le soir venu, elle reste dans le noir.",
        "Pour le concours de la Simandou Academy, Bella la Soussou et Yama la Peule découvrent que le nom de leur ville vient d'un arbre : téli en poular, méli en soussou — deux peuples, une seule ville. Et que leur fleuve, le Konkouré, fait tourner les grands barrages qui éclairent le pays… mais pas eux.",
        "Plutôt que d'attendre ou de quémander, les enfants décident de conquérir la science de l'énergie pour faire tourner eux-mêmes les barrages, de lancer le Konkouré Fé — un festival annuel pour reboiser le fleuve, danser et partager — et de protéger l'arbre de leur nom : « sans arbres, plus de Télimélé ».",
        "Un livre sur l'énergie, l'unité de deux peuples et la fierté de s'éclairer soi-même. Génération 2040 · dès 10 ans.",
      ],
      en: [
        "Télimélé, on the western foothills of the Fouta, is the town of eight neighbors — a gateway between the mountains and the sea. Yet when evening comes, it stays in darkness.",
        "For the Simandou Academy contest, Bella the Soussou and Yama the Fulani discover that their town's name comes from a tree: téli in Pular, méli in Soussou — two peoples, one town. And that their river, the Konkouré, drives the great dams that light up the country… but not them.",
        "Rather than wait or beg, the children decide to conquer the science of energy so as to run the dams themselves, to launch the Konkouré Fé — a yearly festival to replant the river, dance and share — and to protect the tree of their name: « without trees, no more Télimélé ».",
        "A book about energy, the unity of two peoples, and the pride of lighting one's own way. Génération 2040 · ages 10 and up.",
      ],
      ar: [
        "Télimélé، على السفوح الغربية للـ Fouta، هي مدينةُ الجيران الثمانية — بوّابةٌ بين الجبال والبحر. ومع ذلك، حين يحلّ المساء، تبقى في الظلام.",
        "من أجل مسابقة Simandou Academy، تكتشف Bella السوسوية وYama الفولانية أنّ اسم مدينتهما يأتي من شجرة: téli بالبولارية، méli بالسوسوية — شعبان، مدينةٌ واحدة. وأنّ نهرهما، الـ Konkouré، يُدير السدودَ الكبرى التي تضيء البلاد… لكن ليس هما.",
        "بدل أن ينتظروا أو يستجدوا، يقرّر الأطفال أن يفتحوا علمَ الطاقة ليُديروا السدودَ بأنفسهم، وأن يُطلقوا الـ Konkouré Fé — مهرجانًا سنويًّا لإعادة تشجير النهر والرقص والمشاركة — وأن يحموا شجرة اسمهم: « بلا أشجار، لا Télimélé ».",
        "كتابٌ عن الطاقة، ووحدة شعبَين، وفخر إضاءة المرء دربَه بنفسه. Génération 2040 · من 10 سنوات فما فوق.",
      ],
      zh: [
        "Télimélé 位于 Fouta 的西部山麓，是拥有八个邻居的城市——群山与大海之间的门户。然而每当夜幕降临，它却仍在黑暗中。",
        "为了 Simandou Academy 的比赛，苏苏族的 Bella 和富拉族的 Yama 发现，她们城市的名字来自一棵树：富拉语叫 téli，苏苏语叫 méli——两个民族，一座城。她们还发现，她们的河流 Konkouré 驱动着照亮全国的大坝……却唯独照不亮她们自己。",
        "孩子们决定不再等待或乞求，而是要掌握能源的科学，亲手让大坝运转；发起 Konkouré Fé——一个每年为河流重新植树、跳舞和分享的节日；并守护他们名字里的那棵树：「没有树，就没有 Télimélé」。",
        "一本关于能源、两个民族的团结，以及自己点亮道路的自豪的书。Génération 2040 · 适合 10 岁以上。",
      ],
    },
  },
  sections: [
    {
      id: "carrefour-aux-huit-voisins",
      voix: "recit",
      fr: `Télimélé est posée là où le Fouta s'incline vers la mer : on quitte les hautes montagnes, et la côte n'est plus très loin. C'est sans doute la ville de Guinée qui a le plus de voisins — elle en touche huit, tout autour. Une vraie porte entre la montagne et l'océan.

Pour le concours de la Simandou Academy, Bella et son amie Yama cherchaient par où commencer.

— On pourrait parler de tout, dit Bella. On est le carrefour de huit préfectures !

— Oui, soupira Yama. Mais le soir, chez nous, il fait noir. Une ville qui n'a même pas la lumière, qu'est-ce qu'elle peut raconter ?`,
      en: `Télimélé sits where the Fouta slopes down toward the sea: you leave the high mountains behind, and the coast is no longer far. It is probably the town in Guinea with the most neighbors — it touches eight of them, all around. A true gateway between the mountains and the ocean.

For the Simandou Academy contest, Bella and her friend Yama were trying to find where to begin.

"We could talk about anything," said Bella. "We're the crossroads of eight prefectures!"

"Yes," sighed Yama. "But in the evening, at home, it's dark. A town that doesn't even have light — what can it have to tell?"`,
      ar: `تقع Télimélé حيث ينحدر الـ Fouta نحو البحر: تترك خلفك الجبالَ العالية، ولا يعود الساحلُ بعيدًا. لعلّها المدينةُ الأكثر جيرانًا في Guinée — تلامس ثمانيةً منهم من حولها. بوّابةٌ حقيقية بين الجبال والمحيط.

من أجل مسابقة Simandou Academy، كانت Bella وصديقتها Yama تبحثان من أين تبدآن.

— يمكننا أن نتحدّث عن كلّ شيء، قالت Bella. نحن ملتقى ثماني مقاطعات!

— نعم، تنهّدت Yama. لكن في المساء، عندنا، يحلّ الظلام. مدينةٌ لا تملك حتّى النور، ماذا عساها أن تروي؟`,
      zh: `Télimélé 坐落在 Fouta 向大海倾斜的地方：你把高山抛在身后，海岸便不再遥远。它大概是 Guinée 邻居最多的城市——四周一共挨着八个。一座真正连接群山与海洋的门户。

为了 Simandou Academy 的比赛，Bella 和她的朋友 Yama 正在琢磨该从哪里开始。

「我们什么都可以讲，」Bella 说。「我们是八个省的交汇点呢！」

「是啊，」Yama 叹了口气。「可一到晚上，我们家乡就一片漆黑。一座连灯都没有的城市，又能讲些什么呢？」`,
    },
    {
      id: "teli-et-meli",
      voix: "recit",
      fr: `Le grand-père de Bella, qui avait tout vu, sourit quand elles lui posèrent la question.

— Vous cherchez loin ce qui est dans votre nom, dit-il. « Télimélé », savez-vous d'où ça vient ? D'un arbre. Les Peuls l'appellent téli. Les Soussous l'appellent méli. Le même arbre, deux langues. On raconte que c'est de là qu'est né le nom de la ville.

Il les regarda toutes les deux — Bella la Soussou, Yama la Peule.

— Ici vivaient d'abord les Djallonkés. Puis sont venus les Peuls, puis les Soussous, et l'on s'est partagé la même terre et le même fleuve. Notre nom, à lui tout seul, c'est déjà deux peuples qui se donnent la main. Voilà ce que vous êtes : un carrefour, pas une frontière.`,
      en: `Bella's grandfather, who had seen everything, smiled when they put the question to him.

"You look far away for what is in your own name," he said. "'Télimélé' — do you know where it comes from? From a tree. The Fulani call it téli. The Soussou call it méli. The same tree, two languages. They say that is where the town's name was born."

He looked at the two of them — Bella the Soussou, Yama the Fulani.

"The Djallonké lived here first. Then came the Fulani, then the Soussou, and we shared the same land and the same river. Our name, all by itself, is already two peoples joining hands. That is what you are: a crossroads, not a border."`,
      ar: `ابتسم جدُّ Bella، الذي رأى كلَّ شيء، حين طرحتا عليه السؤال.

— تبحثان بعيدًا عمّا هو في اسمكما، قال. « Télimélé » — أتعرفان من أين أتى؟ من شجرة. يسمّيها الفولانيون téli. ويسمّيها السوسو méli. الشجرةُ نفسها، لغتان. يُقال إنّ من هناك وُلد اسمُ المدينة.

نظر إليهما كلتيهما — Bella السوسوية، وYama الفولانية.

— هنا عاش الجالونكي أوّلًا. ثمّ جاء الفولانيون، ثمّ السوسو، وتقاسمنا الأرضَ نفسها والنهرَ نفسه. اسمُنا وحده شعبان يتصافحان. هذا ما أنتما: ملتقى، لا حدود.`,
      zh: `Bella 的祖父见多识广，听到她们的问题便笑了。

「你们舍近求远，答案就在你们自己的名字里，」他说。「『Télimélé』——你们知道它从哪儿来吗？来自一棵树。富拉人叫它 téli，苏苏人叫它 méli。同一棵树，两种语言。人们说，城市的名字就是这样诞生的。」

他望着她们俩——苏苏族的 Bella，富拉族的 Yama。

「最早住在这里的是贾隆凯人。后来富拉人来了，苏苏人也来了，大家共享同一片土地、同一条河。我们的名字本身，就是两个民族握手言和。这就是你们的本色：一个交汇点，而不是一道边界。」`,
    },
    {
      id: "le-konkoure",
      voix: "recit",
      fr: `Il y avait aussi le fleuve. Le Konkouré naît tout là-haut dans le Fouta, passe sous le grand pont de Télimélé, traverse les vieux villages djallonkés, puis descend, descend jusqu'à la mer.

Sur ce fleuve, plus bas, on a bâti de grands barrages. Leurs turbines fabriquent de l'électricité — celle qui allume Conakry et une bonne partie du pays.

— Tu te rends compte ? dit Bella. Notre fleuve éclaire des villes entières, à l'autre bout de la Guinée.

Puis elle se tut. Car le soir tombait sur Télimélé, et, comme chaque soir, les maisons s'éteignaient dans le noir.

— Notre fleuve allume les lampes du pays, murmura-t-elle. Et chez nous, il fait nuit.`,
      en: `There was also the river. The Konkouré is born high up in the Fouta, passes under the great bridge of Télimélé, runs through the old Djallonké villages, then flows down, down to the sea.

Lower along this river, great dams have been built. Their turbines make electricity — the kind that lights up Conakry and much of the country.

"Can you imagine?" said Bella. "Our river lights whole towns, at the other end of Guinea."

Then she fell silent. For evening was settling over Télimélé, and, as every evening, the houses were going dark.

"Our river lights the country's lamps," she murmured. "And here, night falls."`,
      ar: `وكان هناك أيضًا النهر. يُولد الـ Konkouré في أعالي الـ Fouta، يمرّ تحت جسر Télimélé الكبير، يعبر قرى الجالونكي القديمة، ثمّ ينحدر، ينحدر حتّى البحر.

على هذا النهر، في الأسفل، شُيِّدت سدودٌ كبرى. توربيناتُها تصنع الكهرباء — تلك التي تضيء Conakry وجزءًا كبيرًا من البلاد.

— أتتصوّرين؟ قالت Bella. نهرُنا يضيء مدنًا بأكملها، في الطرف الآخر من Guinée.

ثمّ صمتت. فقد كان المساء يهبط على Télimélé، وكما في كلّ مساء، كانت البيوت تنطفئ في الظلام.

— نهرُنا يُشعل مصابيح البلاد، همست. وعندنا، يحلّ الليل.`,
      zh: `还有那条河。Konkouré 发源于 Fouta 的高处，从 Télimélé 的大桥下流过，穿过古老的贾隆凯村庄，然后一路向下，奔向大海。

在这条河的下游，人们建起了大坝。它们的涡轮发出电——照亮 Conakry 和大半个国家的电。

「你能想象吗？」Bella 说。「我们的河照亮了整座整座的城市，就在 Guinée 的另一头。」

随后她沉默了。因为夜色正笼罩 Télimélé，而和每个夜晚一样，家家户户都熄灭在黑暗里。

「我们的河点亮了全国的灯，」她喃喃道。「可我们这里，却是一片黑夜。」`,
    },
    {
      id: "garder-le-fleuve-vivant",
      voix: "recit",
      fr: `Le grand-père hocha la tête.

— Et ce n'est pas tout. Ces barrages ont besoin du fleuve plein. Or le fleuve, lui, a besoin des arbres : sans eux, les berges s'écroulent, les pluies se dérèglent, et l'eau finit par baisser. Si on coupe tous les arbres, un jour il n'y aura plus assez d'eau — ni pour eux, ni pour nous.

Bella repensa au téli, au méli — l'arbre de leur nom.

— Alors protéger les arbres, comprit-elle, c'est protéger le fleuve. Et protéger le fleuve, c'est protéger la lumière. La nôtre, et celle de tout le pays.

Elle resta un instant silencieuse.

— Et puis Télimélé, c'est l'arbre lui-même, dit-elle. Téli, méli : sans arbres, il n'y aurait même plus de Télimélé.`,
      en: `The grandfather nodded.

"And that's not all. Those dams need the river full. And the river, in turn, needs the trees: without them, the banks crumble, the rains turn unsteady, and the water finally drops. If we cut down all the trees, one day there won't be enough water — neither for them, nor for us."

Bella thought again of téli, of méli — the tree of their name.

"So protecting the trees," she understood, "is protecting the river. And protecting the river is protecting the light. Ours, and the whole country's."

She stayed silent a moment.

"And besides, Télimélé is the tree itself," she said. "Téli, méli: without trees, there would not even be a Télimélé."`,
      ar: `هزّ الجدُّ رأسه.

— وليس هذا كلَّ شيء. هذه السدودُ تحتاج إلى نهرٍ ممتلئ. والنهرُ بدوره يحتاج إلى الأشجار: من دونها تنهار الضفاف، وتضطرب الأمطار، وينخفض الماءُ في النهاية. إن قطعنا كلَّ الأشجار، فلن يبقى يومًا ماءٌ كافٍ — لا لها، ولا لنا.

فكّرت Bella من جديد في téli وفي méli — شجرة اسمهما.

— إذن حمايةُ الأشجار، أدركت، هي حمايةُ النهر. وحمايةُ النهر هي حمايةُ النور. نورِنا، ونورِ البلاد كلِّها.

صمتت لحظة.

— ثمّ إنّ Télimélé هي الشجرةُ نفسها، قالت. téli، méli: بلا أشجار، لما بقيت Télimélé أصلًا.`,
      zh: `祖父点了点头。

「还不止如此。那些大坝需要满满的河水。而河水反过来又需要树木：没有树，河岸会坍塌，雨水会失常，水位最终会下降。要是把树全砍光了，总有一天连水都不够——它们不够，我们也不够。」

Bella 又想起了 téli，想起了 méli——他们名字里的那棵树。

「这么说，守护树木，」她明白了，「就是守护河流。而守护河流，就是守护光。我们的光，也是全国的光。」

她沉默了片刻。

「再说，Télimélé 本身就是那棵树，」她说。「téli，méli：没有树，连 Télimélé 都不会存在了。」`,
    },
    {
      id: "mot-de-bella",
      voix: "recit",
      fr: `Le jour de l'Objectif, la Maîtresse écrivit au tableau ce que Bella avait dit la veille :

NOTRE FLEUVE ÉCLAIRE LE PAYS

— C'est vrai, et c'est notre fierté, dit Bella. Mais il manque la moitié de la phrase.

Elle se leva et compléta :

NOTRE FLEUVE ÉCLAIRE LE PAYS — ET IL DOIT NOUS ÉCLAIRER AUSSI

— Mais attendre des années pour avoir la lumière, c'est trop long, dit Yama.

— Et puis, ajouta Bella, si l'on vient nous prendre notre énergie sans nous en laisser, c'est qu'on n'a pas encore conquis sa science. N'attendons pas qu'on nous éclaire : apprenons à nous éclairer nous-mêmes.

Les idées jaillirent :

— On lance le Konkouré Fé — « Pour le Konkouré » : chaque année, un grand festival où l'on reboise ensemble les berges du fleuve, où l'on danse et où l'on chante, où Peuls, Soussous et voisins partagent et échangent. Car comme Télimélé, c'est l'arbre : sans arbres, plus de fleuve — et plus de Télimélé.
— On conquiert la science de l'énergie : que les fils et les filles de Télimélé se forment aux métiers du courant — techniciennes, ingénieures — pour faire tourner, demain, les barrages de leur propre fleuve.
— On réclame notre juste part, dès maintenant : le courant et l'eau potable dans nos villages.
— On devient le vrai carrefour : la route qui descend du Fouta vers la côte passe par nous — pour nos marchés, nos voyageurs, nos huit voisins.
— On reste téli et méli : Peuls et Soussous, une seule ville.

— On n'attendra pas qu'on vienne nous éclairer, conclut Bella. On apprendra à le faire nous-mêmes.`,
      en: `On the day of the Objective, the teacher wrote on the board what Bella had said the day before:

OUR RIVER LIGHTS THE COUNTRY

"It's true, and it's our pride," said Bella. "But half the sentence is missing."

She stood up and completed it:

OUR RIVER LIGHTS THE COUNTRY — AND IT MUST LIGHT US TOO

"But waiting years to get the light is too long," said Yama.

"And besides," Bella added, "if people come and take our energy without leaving us any, it's because we haven't yet conquered its science. Let's not wait to be given light: let's learn to light our own way."

The ideas burst out:

"We launch the Konkouré Fé — 'For the Konkouré': every year, a great festival where together we replant the riverbanks, where we dance and sing, where Fulani, Soussou and neighbors share and trade. For Télimélé is the tree: without trees, no river — and no Télimélé."
"We conquer the science of energy: let Télimélé's sons and daughters train in the trades of power — technicians, engineers — to run, tomorrow, the dams of their own river."
"We claim our fair share, starting now: electricity and clean water in our villages."
"We become the true crossroads: the road that comes down from the Fouta to the coast passes through us — for our markets, our travelers, our eight neighbors."
"We stay téli and méli: Fulani and Soussou, one single town."

"We won't wait to be given light," Bella concluded. "We'll learn to make it ourselves."`,
      ar: `في يوم الهدف، كتبت المعلّمة على السبّورة ما قالته Bella في اليوم السابق:

نهرُنا يضيء البلاد

— هذا صحيح، وهو فخرُنا، قالت Bella. لكن نصف الجملة ناقص.

نهضت وأكملت:

نهرُنا يضيء البلاد — وعليه أن يضيئنا نحن أيضًا

— لكنّ انتظار سنواتٍ للحصول على النور طويلٌ جدًّا، قالت Yama.

— ثمّ، أضافت Bella، إن جاء من يأخذ طاقتنا دون أن يترك لنا منها، فلأنّنا لم نفتح بعدُ علمَها. لا ننتظر أن يضيئونا: لنتعلّم أن نضيء دربنا بأنفسنا.

تدفّقت الأفكار:

— نُطلق الـ Konkouré Fé — « من أجل الـ Konkouré »: كلّ عام، مهرجانٌ كبير نُعيد فيه معًا تشجير ضفاف النهر، نرقص ونغنّي، يتشارك ويتبادل فيه الفولانيون والسوسو والجيران. فـ Télimélé هي الشجرة: بلا أشجار، لا نهر — ولا Télimélé.
— نفتح علمَ الطاقة: ليتدرّب أبناء Télimélé وبناتها على مِهَن الكهرباء — تقنيّاتٍ ومهندساتٍ — ليُديروا غدًا سدودَ نهرهم.
— نطالب بحقّنا العادل، من الآن: الكهرباء والماء الصالح للشرب في قرانا.
— نصير الملتقى الحقيقي: الطريقُ النازل من الـ Fouta إلى الساحل يمرّ بنا — لأسواقنا، ومسافرينا، وجيراننا الثمانية.
— نبقى téli وméli: فولانيين وسوسو، مدينةً واحدة.

— لن ننتظر أن يأتي أحدٌ ليضيئنا، خلصت Bella. سنتعلّم أن نفعل ذلك بأنفسنا.`,
      zh: `在「目标」公布的那天，老师把 Bella 前一天说的话写在黑板上：

我们的河照亮全国

「这是真的，也是我们的骄傲，」Bella 说。「可这句话少了一半。」

她站起来，把它补完：

我们的河照亮全国——它也应该照亮我们

「可要等上好些年才能有光，太久了，」Yama 说。

「再说，」Bella 补充道，「如果有人来拿走我们的能源，却不给我们留一点，那是因为我们还没掌握它的科学。我们不要等着别人来点亮我们：让我们学会自己点亮自己的路。」

主意一下子涌了出来：

「我们发起 Konkouré Fé——『为了 Konkouré』：每年办一场盛大的节日，大家一起为河岸重新植树，一起跳舞歌唱，让富拉人、苏苏人和邻居们分享与交流。因为 Télimélé 就是那棵树：没有树，就没有河——也就没有 Télimélé。」
「我们掌握能源的科学：让 Télimélé 的儿女们去学电力的行当——当技师、当工程师——好在将来亲手让自己河上的大坝运转。」
「我们从现在起就争取应得的那一份：让电和干净的水进到我们的村庄。」
「我们成为真正的交汇点：从 Fouta 下到海岸的路要经过我们——为了我们的集市、我们的旅人、我们的八个邻居。」
「我们守住 téli 和 méli：富拉人和苏苏人，同一座城。」

「我们不会等着别人来点亮我们，」Bella 总结道。「我们要学会自己来。」`,
    },
    {
      id: "apres-2040",
      voix: "recit",
      fr: `Dans le dossier que Télimélé envoya à la Simandou Academy, Bella et Yama avaient dessiné leur ville — et ce n'était plus si loin.

La nuit, les villages brillaient enfin, alimentés par le Konkouré, leur propre fleuve — et, dans la salle des machines des barrages, on trouvait des techniciennes et des ingénieurs nés à Télimélé. Le long de l'eau, les berges reboisées étaient redevenues vertes : c'était le Konkouré Fé, le grand rendez-vous annuel où l'on plantait des arbres, où Peuls et Soussous dansaient, partageaient, échangeaient. Le grand pont voyait passer camions et voyageurs entre la montagne et la mer.

Au bas du dessin, le long du fleuve, elles avaient écrit :

« Notre nom est fait de deux langues — et d'un arbre : sans arbres, plus de Télimélé. Notre fleuve éclairait les autres ; nous n'avons pas attendu qu'on nous éclaire — nous avons conquis sa science, et il nous éclaire aussi. La suite, c'est à ceux qui viennent de l'écrire. »`,
      en: `In the file that Télimélé sent to the Simandou Academy, Bella and Yama had drawn their town — and it was no longer so far off.

At night, the villages shone at last, powered by the Konkouré, their own river — and in the dam's machine room there were technicians and engineers born in Télimélé. Along the water, the replanted banks had turned green again: it was the Konkouré Fé, the great yearly gathering where people planted trees, where Fulani and Soussou danced, shared, and traded. The great bridge watched trucks and travelers pass between the mountains and the sea.

At the bottom of the drawing, along the river, they had written:

"Our name is made of two languages — and of a tree: without trees, no more Télimélé. Our river used to light others; we did not wait to be given light — we conquered its science, and now it lights us too. The rest is for those who come next to write."`,
      ar: `في الملفّ الذي أرسلته Télimélé إلى Simandou Academy، كانت Bella وYama قد رسمتا مدينتهما — ولم يعد ذلك بعيدًا.

في الليل، أضاءت القرى أخيرًا، يغذّيها الـ Konkouré، نهرُهما الخاصّ — وفي قاعة محرّكات السدود كان ثمّة تقنيّاتٌ ومهندسون وُلدوا في Télimélé. على طول الماء، عادت الضفافُ المُعاد تشجيرها خضراء: كان ذلك الـ Konkouré Fé، الموعدَ السنويّ الكبير حيث يُغرَس الشجر، ويرقص الفولانيون والسوسو ويتشاركون ويتبادلون. وكان الجسرُ الكبير يرى الشاحناتِ والمسافرين يمرّون بين الجبال والبحر.

في أسفل الرسم، على طول النهر، كتبتا:

« اسمُنا مصنوعٌ من لغتين — ومن شجرة: بلا أشجار، لا Télimélé. كان نهرُنا يضيء الآخرين؛ لم ننتظر أن يضيئونا — فتحنا علمَه، وها هو يضيئنا نحن أيضًا. والبقيّة على مَن يأتي بعدُ أن يكتبها. »`,
      zh: `在 Télimélé 寄给 Simandou Academy 的材料里，Bella 和 Yama 画了一幅家乡——而那已不再遥远。

夜里，村庄终于亮了起来，由她们自己的河 Konkouré 供电——而在大坝的机房里，有在 Télimélé 出生的技师和工程师。沿着水边，重新种过树的河岸又绿了：那是 Konkouré Fé，每年盛大的聚会，人们栽树，富拉人和苏苏人一起跳舞、分享、交流。大桥看着卡车和旅人在群山与大海之间往来。

在画的下方，沿着河流，她们写道：

「我们的名字由两种语言——和一棵树——组成：没有树，就没有 Télimélé。我们的河曾照亮别人；我们没有等着别人来点亮——我们掌握了它的科学，如今它也照亮了我们。余下的故事，要由后来的人来书写。」`,
    },
  ],
};

export default g2040Tome8;
