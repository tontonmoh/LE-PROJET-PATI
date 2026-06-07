// =============================================================================
//  GÉNÉRATION 2040 — Tome 5 : « Le Tambour et le Livre »
//  Fichier de données Pati (même structure que g2040-tome1/2/3/4.ts)
// -----------------------------------------------------------------------------
//  ÉTAT : FR + EN remplis (texte de Claude). AR + ZH = BROUILLONS de Claude →
//         À FAIRE RELIRE par un natif avant de passer le statut à "pret".
//  NOMS INVARIANTS en latin dans les 4 langues : Fanta (héroïne), Mamadi (le
//  djeli), Camara Laye, Kouroussa, Dabola, Baro, Djoliba, Hamana, Simandou
//  Academy. Termes-concepts gardés tels quels et glosés : dununba, djeli, bara.
//  GARDE-FOU : Camara Laye (auteur réel décédé) référencé FACTUELLEMENT comme
//  patrimoine — jamais comme personnage qui parle, AUCUNE citation inventée,
//  AUCUNE reproduction du texte de « L'Enfant noir ».
// =============================================================================

import type { LivreG2040, SectionG2040 } from "./g2040-tome1";

export const g2040Tome5: LivreG2040 = {
  slug: "g2040-tambour-et-livre",
  serie: "generation-2040",
  ordre: 5,
  statut: "en_production", // FR + EN prêts ; AR/ZH = brouillons à faire relire
  titre: {
    fr: "Le Tambour et le Livre",
    en: "The Drum and the Book",
    ar: "الطبل والكتاب",
    zh: "鼓与书",
  },
  lieu: "Kouroussa",
  sousCollection: "Aventure",
  age: "dès 12 ans",
  odd: [4, 11],
  pilier: "Éducation & culture (patrimoine vivant, transmission)",
  couverture: "/images/g2040-tome5-couverture.webp",
  meta: {
    tagline: {
      fr: "À Kouroussa, un enfant a écrit un livre lu dans le monde entier. Et si notre plus grand trésor d'avenir, c'était notre culture ?",
      en: "In Kouroussa, a child wrote a book read the world over. What if our greatest treasure for the future were our culture?",
      ar: "في Kouroussa، كتب طفلٌ كتابًا قُرِئ في العالم كلّه. فماذا لو كان أعظمُ كنوزنا للمستقبل هو ثقافتنا؟",
      zh: "在 Kouroussa，一个孩子写出了一本风行世界的书。倘若我们面向未来的最大财富，正是我们的文化呢？",
    },
    blurb: {
      fr: [
        "Kouroussa, au bord du Djoliba, est le cœur du vieux pays mandingue, le Hamana. C'est ici qu'est né Camara Laye — un enfant de forgeron qui, avec un livre, a porté sa ville jusqu'au bout du monde.",
        "Mais Fanta, elle, croit que tout cela n'est que « le passé » : le dununba qu'on ne sort qu'aux fêtes, la mare sacrée de Baro qu'on laisse se dessécher, les histoires que les jeunes n'écoutent plus.",
        "Le vieux Mamadi, le djeli, lui ouvre les yeux : un peuple sans ses histoires est un arbre sans racines. Pour le concours de la Simandou Academy, sa classe trouve l'Objectif : faire de la culture une richesse d'avenir — festival, maison des histoires, Baro protégée, et le train qui amène le monde jusqu'à eux.",
        "Un livre sur la fierté, la mémoire et le pouvoir des mots. Génération 2040 · dès 12 ans.",
      ],
      en: [
        "Kouroussa, on the banks of the Djoliba, is the heart of the old Mandingo country, the Hamana. It is here that Camara Laye was born — a blacksmith's child who, with a single book, carried his town to the ends of the earth.",
        "But Fanta believes all of it is just \"the past\": the dununba brought out only on feast days, the sacred pool of Baro left to dry up, the stories the young no longer listen to.",
        "Old Mamadi, the djeli, opens her eyes: a people without its stories is a tree without roots. For the Simandou Academy contest, her class finds its Objective: to make culture a treasure for the future — a festival, a house of stories, Baro protected, and the train that brings the world to them.",
        "A book about pride, memory, and the power of words. Génération 2040 · ages 12 and up.",
      ],
      ar: [
        "تقع Kouroussa على ضفاف Djoliba، وهي قلب بلاد الماندينغ القديمة، الـ Hamana. هنا وُلد Camara Laye — ابنُ حدّادٍ حمل مدينته، بكتابٍ واحد، إلى أقاصي الأرض.",
        "لكنّ Fanta تظنّ أنّ هذا كلّه مجرّد «ماضٍ»: الـ dununba لا يُخرَج إلّا في الأعياد، ومستنقع Baro المقدّس يُترَك ليجفّ، والحكايات لم يعد الشباب يصغون إليها.",
        "يفتح لها الشيخ Mamadi، الـ djeli، عينيها: شعبٌ بلا حكاياته شجرةٌ بلا جذور. ومن أجل مسابقة Simandou Academy، يجد صفّها هدفه: أن يجعل الثقافة كنزًا للمستقبل — مهرجانٌ، وبيتٌ للحكايات، وحمايةُ Baro، والقطارُ الذي يجلب العالم إليهم.",
        "كتابٌ عن الكرامة والذاكرة وقوّة الكلمات. Génération 2040 · من 12 سنة فما فوق.",
      ],
      zh: [
        "Kouroussa 坐落在 Djoliba 河畔，是古老曼丁哥地区——Hamana——的心脏。Camara Laye 就出生在这里：一个铁匠的孩子，凭一本书把家乡带到了天涯海角。",
        "可 Fanta 却觉得这一切不过是「过去」：dununba 只在节庆时才搬出来，Baro 的圣潭任由它干涸，老人的故事年轻人也不再听了。",
        "老 Mamadi——那位 djeli——点醒了她：一个没有故事的民族，就像没有根的树。为了 Simandou Academy 的比赛，全班找到了「目标」：让文化成为面向未来的财富——办 festival、建一座故事之屋、守护 Baro，让火车把世界带到他们面前。",
        "一本关于骄傲、记忆和文字力量的书。Génération 2040 · 适合 12 岁以上。",
      ],
    },
  },
  sections: [
    {
      id: "ville-qui-a-ecrit",
      voix: "recit",
      fr: `Kouroussa est assise sur le Djoliba, le grand fleuve Niger, qui descend des hauteurs du pays et traverse tout le Mandé.

Comme à Dabola, il y a la vieille gare et le pont de fer sur le fleuve — endormis, aujourd'hui, en attendant que la Ligne renaisse. Mais le vrai trésor de Kouroussa n'est ni le rail ni le pont. C'est qu'ici, autrefois, est né un enfant qui a écrit un livre. Camara Laye, on l'appelle — le fils d'un forgeron de la ville. C'est par cette gare qu'il était parti, en train, étudier au loin ; puis il avait raconté l'enfance d'un petit garçon de Kouroussa dans un livre que le monde entier a lu.

Quand l'appel de la Simandou Academy arriva — écrivez l'histoire de votre ville —, Fanta resta songeuse. Sa ville, justement, avait déjà donné un livre au monde. Que pouvait-elle ajouter ?`,
      en: `Kouroussa sits on the Djoliba, the great river Niger, which comes down from the high country and crosses all of the Mandé.

As in Dabola, there is the old station and the iron bridge over the river — asleep, today, waiting for the Line to be reborn. But Kouroussa's true treasure is neither the rails nor the bridge. It is that here, long ago, a child was born who wrote a book. Camara Laye, they call him — the son of a blacksmith of the town. It was from this very station that he left, by train, to study far away; then he told the childhood of a little boy of Kouroussa in a book that the whole world has read.

When the call of the Simandou Academy arrived — write the story of your town —, Fanta grew thoughtful. Her town, precisely, had already given a book to the world. What could she add?`,
      ar: `تقع Kouroussa على Djoliba، النهر العظيم النيجر، الذي ينحدر من أعالي البلاد ويعبر بلاد الـ Mandé كلّها.

كما في Dabola، هناك المحطّة القديمة والجسر الحديديّ فوق النهر — نائمان اليوم، ينتظران أن يُبعَث الخطّ. لكنّ كنز Kouroussa الحقيقيّ ليس القضبان ولا الجسر. بل أنّه هنا، قديمًا، وُلد طفلٌ كتب كتابًا. Camara Laye يسمّونه — ابنُ حدّادٍ من المدينة. من هذه المحطّة نفسها رحل، بالقطار، ليدرس بعيدًا؛ ثمّ روى طفولة صبيٍّ صغير من Kouroussa في كتابٍ قرأه العالم كلّه.

حين وصل نداء Simandou Academy — اكتبوا قصّة مدينتكم —، غرقت Fanta في التفكير. فمدينتها، بالذات، قد أهدت العالم كتابًا من قبل. فماذا عساها تضيف؟`,
      zh: `Kouroussa 坐落在 Djoliba——浩荡的尼日尔河——之畔，这条河自高地流下，穿越整个 Mandé 地区。

和 Dabola 一样，这里也有那座老火车站和横跨河面的铁桥——如今都沉睡着，等待着铁路重生。可 Kouroussa 真正的宝藏，既不是铁轨，也不是桥。而是从前，这里诞生过一个写书的孩子。人们叫他 Camara Laye——城里一位铁匠的儿子。正是从这座车站，他坐着火车离开，去远方求学；后来，他在一本书里讲述了一个 Kouroussa 小男孩的童年，而那本书，全世界都读过。

当 Simandou Academy 的号召传来——写下你们城市的故事——Fanta 陷入了沉思。她的城市，恰恰已经给过世界一本书了。她还能添上什么呢？`,
    },
    {
      id: "tresor-qu-on-regarde-sans-voir",
      voix: "recit",
      fr: `Pourtant, le trésor était partout — et personne ne le regardait plus.

Il y avait le dununba, la danse des hommes forts, née ici même dans le Hamana, mais qu'on ne sortait plus qu'aux grandes fêtes. Il y avait, à Baro, la mare sacrée au pied du vieux baobab, où l'on venait depuis des siècles ; on disait qu'elle risquait de se dessécher. Il y avait les histoires du vieux djeli, que les jeunes, partis à la ville, n'écoutaient plus.

— Tout ça, c'est le passé, soupira Fanta. De vieilles choses.`,
      en: `And yet the treasure was everywhere — and no one looked at it anymore.

There was the dununba, the dance of the strong men, born right here in the Hamana, but brought out now only on great feast days. There was, at Baro, the sacred pool at the foot of the old baobab, where people had come for centuries; it was said to be at risk of drying up. There were the old djeli's stories, which the young, gone to the city, no longer listened to.

"All that is the past," sighed Fanta. "Old things."`,
      ar: `ومع ذلك كان الكنز في كلّ مكان — ولم يعد أحدٌ ينظر إليه.

كان هناك الـ dununba، رقصة الرجال الأقوياء، المولودة هنا تمامًا في الـ Hamana، لكنّها لم تعد تُخرَج إلّا في الأعياد الكبرى. وكان هناك، في Baro، المستنقع المقدّس عند جذع الباوباب العتيق، حيث قصده الناس قرونًا؛ ويُقال إنّه مهدَّدٌ بالجفاف. وكانت هناك حكايات الـ djeli العجوز، التي لم يعد الشباب، بعد رحيلهم إلى المدينة، يصغون إليها.

— هذا كلّه ماضٍ، تنهّدت Fanta. أشياء قديمة.`,
      zh: `然而宝藏遍地都是——却再没有人去看它。

有 dununba，那「强者之舞」，就诞生在这片 Hamana，可如今只在盛大节庆时才搬出来。在 Baro，有那座老猴面包树下的圣潭，几百年来人们都来这里；据说它如今有干涸之虞。还有老 djeli 的故事，那些进了城的年轻人，再也不听了。

「这些都是过去，」Fanta 叹了口气，「老掉牙的东西。」`,
    },
    {
      id: "vieux-mamadi-le-djeli",
      voix: "recit",
      fr: `Le vieux Mamadi, lui, était djeli : gardien des histoires, joueur de tambour. Il entendit Fanta, et l'emmena au bord du Djoliba.

— Regarde le fleuve, dit-il. Il porte la pirogue parce qu'il vient de loin. Un peuple qui oublie ses histoires, c'est un arbre sans racines : le premier vent le couche.

Le dununba, lui apprit-il, n'est pas qu'une danse : c'est le courage, le passage de l'enfant à l'adulte, la paix qu'on refait entre les gens. La mare de Baro enseigne le respect du vivant. Et Camara Laye a montré qu'un enfant d'ici pouvait, avec des mots, porter sa ville jusqu'au bout du monde — même si, aujourd'hui, on laisse sa case et la forge de son père tomber en poussière, faute d'y prendre garde.

— Le passé n'est pas derrière toi, Fanta. Il te porte.`,
      en: `Old Mamadi, for his part, was a djeli: keeper of stories, drummer. He heard Fanta, and took her down to the banks of the Djoliba.

"Look at the river," he said. "It carries the canoe because it comes from far away. A people who forget their stories are a tree without roots: the first wind lays them down."

The dununba, he taught her, is not just a dance: it is courage, the passage from child to adult, the peace remade between people. The pool of Baro teaches respect for living things. And Camara Laye showed that a child from here could, with words, carry his town to the ends of the earth — even if, today, his hut and his father's forge are left to crumble to dust, for want of care.

"The past is not behind you, Fanta. It carries you."`,
      ar: `أمّا الشيخ Mamadi، فكان djeli: حافظ الحكايات، وضاربَ الطبل. سمع Fanta، فأخذها إلى ضفاف Djoliba.

— انظري إلى النهر، قال. إنّه يحمل الزورق لأنّه آتٍ من بعيد. شعبٌ ينسى حكاياته شجرةٌ بلا جذور: أوّلُ ريحٍ تطرحها أرضًا.

والـ dununba، علّمها، ليس مجرّد رقصة: إنّه الشجاعة، وعبورُ الطفل إلى الرشد، والسلامُ الذي يُعاد بين الناس. ومستنقعُ Baro يعلّم احترام كلّ حيّ. وقد أثبت Camara Laye أنّ طفلًا من هنا يستطيع، بالكلمات، أن يحمل مدينته إلى أقاصي الأرض — وإن كانت اليوم كوخُه وحدّادةُ أبيه تُترَكان لتنهارا غبارًا، لقلّة العناية.

— الماضي ليس خلفكِ يا Fanta. إنّه يحملكِ.`,
      zh: `至于老 Mamadi，他是个 djeli：故事的守护者，击鼓的人。他听见了 Fanta 的话，便领她下到 Djoliba 河畔。

「看看这条河，」他说。「它能托起独木舟，是因为它来自远方。一个忘掉自己故事的民族，就是一棵没有根的树：第一阵风就把它吹倒。」

他告诉她，dununba 不只是一支舞：它是勇气，是孩子迈向成人的关口，是人与人之间重新缔结的和平。Baro 的圣潭教人敬重一切生命。而 Camara Laye 证明了，这里的一个孩子，能用文字把家乡带到天涯海角——尽管今天，他的小屋和他父亲的铁匠铺，因无人照管而任其化为尘土。

「过去不在你身后，Fanta。它托着你向前。」`,
    },
    {
      id: "le-declic",
      voix: "recit",
      fr: `Alors Fanta comprit.

La culture n'était pas de « vieilles choses ». C'était une force — et une richesse d'avenir : la fierté d'un peuple, son nom dans le monde, et de quoi faire vivre toute une ville. Un festival qui fait venir le pays. Des livres. Des visiteurs à Baro. Le tambour appris aux enfants.

Et le concours, soudain, lui parut limpide.

— On nous demande d'écrire notre ville, dit-elle. Mais un enfant d'ici l'a déjà fait, il y a longtemps. À nous d'écrire la suite.`,
      en: `Then Fanta understood.

Culture was not "old things." It was a force — and a treasure for the future: the pride of a people, its name in the world, and enough to make a whole town live. A festival that draws the country in. Books. Visitors at Baro. The drum taught to children.

And the contest, all at once, seemed clear to her.

"We are asked to write our town," she said. "But a child from here already did it, long ago. It is for us to write what comes next."`,
      ar: `عندئذٍ فهمت Fanta.

لم تكن الثقافة «أشياء قديمة». كانت قوّة — وكنزًا للمستقبل: كبرياءَ شعبٍ، واسمَه في العالم، وما يكفي لإحياء مدينةٍ بأكملها. مهرجانٌ يجذب البلد. كتبٌ. زوّارٌ في Baro. وطبلٌ يُعلَّم للأطفال.

وفجأةً، بدت لها المسابقة واضحة.

— يُطلَب منّا أن نكتب مدينتنا، قالت. لكنّ طفلًا من هنا فعل ذلك من قبل، منذ زمن بعيد. وعلينا نحن أن نكتب ما يأتي بعد.`,
      zh: `于是 Fanta 明白了。

文化并不是「老掉牙的东西」。它是一种力量——一笔面向未来的财富：一个民族的骄傲、它在世界上的名字，足以让整座城市活起来。一场把全国吸引来的 festival。书。来 Baro 的访客。教给孩子们的鼓。

刹那间，这场比赛在她眼里清晰了起来。

「人家要我们写自己的城市，」她说。「可这里的一个孩子，很久以前就已经写过了。接下来的故事，该由我们来写。」`,
    },
    {
      id: "mot-de-fanta",
      voix: "recit",
      fr: `Le jour de l'Objectif, la Maîtresse écrivit au tableau ce que Fanta avait dit en arrivant :

LA CULTURE, C'EST LE PASSÉ

Fanta se leva, et écrivit dessous :

LA CULTURE, C'EST NOTRE AVENIR

Les idées jaillirent :

— On fait renaître le dununba en grand : un festival qui attire le pays et le monde, et les vieux qui l'enseignent aux enfants.
— On rend vivante la maison de Camara Laye : une maison des histoires, une bibliothèque où l'on lit — et où l'on apprend à écrire.
— On protège la mare de Baro et son baobab : qu'elle ne se dessèche pas, et qu'on l'accueille comme le trésor qu'elle est.
— Et la Ligne qui renaît amènera, par le pont sur le Djoliba, les visiteurs jusqu'à nous.

— Camara Laye a écrit un enfant d'ici, conclut Fanta. À nous d'écrire les enfants de 2040.`,
      en: `On the day of the Objective, the teacher wrote on the board what Fanta had said when she arrived:

CULTURE IS THE PAST

Fanta stood up, and wrote beneath it:

CULTURE IS OUR FUTURE

The ideas burst out:

"We bring the dununba back to life in a big way: a festival that draws the country and the world, and the elders who teach it to the children."
"We make Camara Laye's house live again: a house of stories, a library where you read — and where you learn to write."
"We protect the pool of Baro and its baobab: that it does not dry up, and that we welcome it as the treasure it is."
"And the Line, reborn, will bring visitors to us across the bridge over the Djoliba."

"Camara Laye wrote a child from here," Fanta concluded. "It is for us to write the children of 2040."`,
      ar: `في يوم الهدف، كتبت المعلّمة على السبّورة ما قالته Fanta حين وصلت:

الثقافة هي الماضي

نهضت Fanta، وكتبت تحتها:

الثقافة هي مستقبلنا

تدفّقت الأفكار:

— نُحيي الـ dununba على نطاقٍ واسع: مهرجانٌ يجذب البلد والعالم، وشيوخٌ يعلّمونه للأطفال.
— نُعيد الحياة إلى بيت Camara Laye: بيتٌ للحكايات، ومكتبةٌ نقرأ فيها — ونتعلّم فيها الكتابة.
— نحمي مستنقع Baro وباوبابه: ألّا يجفّ، وأن نستقبله كالكنز الذي هو عليه.
— والخطّ، إذ يُبعَث، سيجلب إلينا الزوّار عبر الجسر فوق Djoliba.

— كتب Camara Laye طفلًا من هنا، خلصت Fanta. وعلينا نحن أن نكتب أطفال 2040.`,
      zh: `在「目标」公布的那天，老师把 Fanta 刚来时说的话写在了黑板上：

文化就是过去

Fanta 站起来，在下面写道：

文化是我们的未来

主意一下子涌了出来：

「我们把 dununba 大大方方地复兴起来：办一场吸引全国乃至世界的 festival，让老人把它教给孩子。」
「我们让 Camara Laye 的家重新活过来：一座故事之屋，一座可以读书的图书馆——也是学写作的地方。」
「我们守护 Baro 的圣潭和它的猴面包树：别让它干涸，把它当作它本该是的宝藏来款待。」
「重生的铁路，会经由 Djoliba 河上的大桥，把访客带到我们这里。」

「Camara Laye 写下了一个这里的孩子，」Fanta 总结道。「该由我们来写下 2040 年的孩子们了。」`,
    },
    {
      id: "apres-2040",
      voix: "recit",
      fr: `Dans le dossier que Kouroussa envoya à la Simandou Academy, Fanta avait dessiné sa ville en 2040.

Au bord du Djoliba, la maison de Camara Laye était vivante, pleine d'enfants qui lisaient et écrivaient. Sur la grande place, le bara, le dununba battait pour le festival, et le train — la Ligne ressuscitée — déversait des visiteurs venus du pays et du monde. Plus loin, sous son baobab, la mare de Baro brillait, protégée. Et le fleuve, lui, coulait, comme toujours.

Au bas du dessin, le long du fleuve, elle avait écrit :

« On croyait notre culture derrière nous : elle était devant. Un enfant d'ici a écrit notre enfance ; à nous d'écrire notre avenir. La suite, c'est à ceux qui viennent de l'écrire. »`,
      en: `In the file that Kouroussa sent to the Simandou Academy, Fanta had drawn her town in 2040.

On the banks of the Djoliba, Camara Laye's house was alive, full of children reading and writing. On the great square, the bara, the dununba beat for the festival, and the train — the Line resurrected — poured out visitors come from the country and from the world. Farther off, beneath its baobab, the pool of Baro shone, protected. And the river, for its part, flowed on, as always.

At the bottom of the drawing, along the river, she had written:

"We thought our culture was behind us: it was ahead. A child from here wrote our childhood; it is for us to write our future. The rest is for those who come next to write."`,
      ar: `في الملفّ الذي أرسلته Kouroussa إلى Simandou Academy، كانت Fanta قد رسمت مدينتها عام 2040.

على ضفاف Djoliba، كان بيت Camara Laye حيًّا، مفعمًا بأطفالٍ يقرؤون ويكتبون. وعلى الساحة الكبرى، الـ bara، كان الـ dununba يقرع للمهرجان، والقطار — الخطّ المبعوث من جديد — يصبّ زوّارًا قدِموا من البلد ومن العالم. وأبعدُ قليلًا، تحت باوبابه، كان مستنقع Baro يتلألأ، محميًّا. أمّا النهر، فكان يجري، كعادته دائمًا.

في أسفل الرسم، على امتداد النهر، كتبت:

«ظننّا ثقافتنا خلفنا: كانت أمامنا. طفلٌ من هنا كتب طفولتنا؛ وعلينا نحن أن نكتب مستقبلنا. والبقيّة على مَن يأتي بعدُ أن يكتبها.»`,
      zh: `在 Kouroussa 寄给 Simandou Academy 的材料里，Fanta 画了一幅 2040 年的家乡。

Djoliba 河畔，Camara Laye 的家活了过来，满是读书写字的孩子。在那片大广场——bara——上，dununba 为 festival 而擂响，火车——重生的铁路——倾泻出从全国、从世界各地赶来的访客。再远些，在猴面包树下，Baro 的圣潭闪着光，受着守护。至于那条河，依旧奔流，一如往常。

在画的下方，沿着河流，她写道：

「我们曾以为文化在我们身后：它其实在前方。这里的一个孩子写下了我们的童年；该由我们来写下我们的未来。余下的故事，要由后来的人来书写。」`,
    },
  ],
};

export default g2040Tome5;
