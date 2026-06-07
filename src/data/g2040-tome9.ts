// =============================================================================
//  GÉNÉRATION 2040 — Tome 9 : « La Ligne qui traverse le pays »
//  Fichier de données Pati (même structure que g2040-tome1..8.ts)
// -----------------------------------------------------------------------------
//  ÉTAT : FR + EN remplis (texte de Claude, v4 humanisée). AR + ZH = BROUILLONS
//         de Claude → À FAIRE RELIRE par un natif avant de passer à "pret".
//  NOMS INVARIANTS en latin dans les 4 langues : Kindia, Samaya, Gangan,
//  Kilissi, Voile de la Mariée, Fatim, Simandou Academy, Guinée, France.
//  TON : RÊVEUR/POSITIF (sortie scolaire), PAS militant. L'idée naît de
//  l'émerveillement. Inversion « traverse → relie » livrée comme un VŒU.
//  CŒUR : Kindia, ville-jardin qui respire ; relier en douceur (ponts, froid
//  pour les fruits, routes) ; la grande Ligne du fer passe LOIN (au sud).
//  GARDE-FOU : NE nommer ni président (barrage de Samaya), ni compagnie
//  minière, ni camp militaire, ni Institut Pasteur. Coopération avec la France
//  évoquée brièvement et à DOUBLE SENS (filière miel de Kindia, pas un cadeau).
// =============================================================================

import type { LivreG2040, SectionG2040 } from "./g2040-tome1";

export const g2040Tome9: LivreG2040 = {
  slug: "g2040-la-ligne",
  serie: "generation-2040",
  ordre: 9,
  statut: "en_production", // FR + EN prêts ; AR/ZH = brouillons à faire relire
  titre: {
    fr: "La Ligne qui traverse le pays",
    en: "The Line That Crosses the Country",
    ar: "الخطُّ الذي يعبر البلاد",
    zh: "穿越国家的铁路线",
  },
  lieu: "Kindia",
  sousCollection: "Aventure",
  age: "dès 10 ans",
  odd: [9, 11, 17],
  pilier: "Infrastructures & désenclavement (ODD 9) · ville durable (ODD 11) · coopération (ODD 17)",
  couverture: "/images/g2040-tome9-couverture.webp",
  meta: {
    tagline: {
      fr: "À Kindia, la cité-jardin, une sortie au lac de Samaya fait rêver Fatim : et si la grande Ligne du fer, au lieu de seulement traverser le pays, le reliait — comme les pirogues relient les villages du lac ?",
      en: "In Kindia, the garden-town, a school trip to Lake Samaya sets Fatim dreaming: what if the great iron Line, instead of merely crossing the country, connected it — the way the canoes connect the villages of the lake?",
      ar: "في Kindia، المدينة-الحديقة، تُشعل رحلةٌ مدرسية إلى بحيرة Samaya خيالَ Fatim: ماذا لو أنّ خطّ الحديد الكبير، بدل أن يَعبُر البلادَ فحسب، وصَلَها — مثلما تصل الزوارقُ قرى البحيرة؟",
      zh: "在花园之城 Kindia，一次前往 Samaya 湖的郊游让 Fatim 浮想联翩：倘若那条大铁路线不只是穿越国家，而是把它连接起来——就像独木舟把湖上的村庄连起来一样，会怎样呢？",
    },
    blurb: {
      fr: [
        "Kindia, c'est le Jardin de Guinée : une vraie ville, mais sans le vacarme ni l'air gris des grandes villes — des manguiers dans les rues, trois rivières, et le mont Gangan qui veille.",
        "Pour le concours de la Simandou Academy, la Maîtresse emmène la classe en sortie. Au bord du lac de Samaya, Fatim découvre la valse des pirogues, les villages posés sur l'eau, les paniers de fruits qui attendent — et se met à rêver.",
        "Et si l'on reliait tout cela en douceur, par des ponts et de bonnes routes, sans jamais perdre les arbres ni l'air pur ? Et si la grande Ligne du fer ne faisait pas que traverser le pays, mais le reliait vraiment ?",
        "Un livre tendre sur les infrastructures, la ville qui respire et l'amitié entre les peuples. Génération 2040 · dès 10 ans.",
      ],
      en: [
        "Kindia is the Garden of Guinea: a real town, yet without the din or the grey air of big cities — mango trees in the streets, three rivers, and Mount Gangan keeping watch.",
        "For the Simandou Academy contest, the teacher takes the class on an outing. By Lake Samaya, Fatim discovers the dance of the canoes, the villages set upon the water, the baskets of fruit waiting their turn — and begins to dream.",
        "What if all of this were gently connected, by bridges and good roads, without ever losing the trees or the clean air? What if the great iron Line did not merely cross the country, but truly linked it?",
        "A tender book about infrastructure, the town that breathes, and friendship between peoples. Génération 2040 · ages 10 and up.",
      ],
      ar: [
        "Kindia هي حديقةُ Guinée: مدينةٌ حقيقية، لكن بلا ضجيج المدن الكبرى ولا هوائها الرمادي — أشجارُ المانغو في الشوارع، ثلاثة أنهار، وجبلُ Gangan يَحرس.",
        "من أجل مسابقة Simandou Academy، تأخذ المعلّمةُ الصفَّ في رحلة. على ضفّة بحيرة Samaya، تكتشف Fatim رقصةَ الزوارق، والقرى القائمة على الماء، وسلالَ الفاكهة التي تنتظر دورها — فتبدأ في الحلم.",
        "فماذا لو وُصِل كلُّ ذلك برفق، بجسورٍ وطرقٍ جيّدة، دون أن نفقد الأشجارَ أو الهواءَ النقي؟ وماذا لو أنّ خطّ الحديد الكبير لم يَعبُر البلادَ فحسب، بل وصَلَها حقًّا؟",
        "كتابٌ حنون عن البِنى التحتية، وعن المدينة التي تتنفّس، وعن الصداقة بين الشعوب. Génération 2040 · من 10 سنوات فما فوق.",
      ],
      zh: [
        "Kindia 是几内亚的花园：一座真正的城市，却没有大城市的喧嚣与灰蒙蒙的空气——街上长着芒果树，有三条河，还有 Gangan 山守望着。",
        "为了 Simandou Academy 的比赛，老师带全班去郊游。在 Samaya 湖边，Fatim 看见了独木舟的舞蹈、坐落在水上的村庄、等待轮到自己的一筐筐水果——于是她开始做梦。",
        "倘若把这一切都温柔地连接起来，用桥梁和好路，却永远不失去树木和清新的空气，会怎样？倘若那条大铁路线不只是穿越国家，而是真正把它连在一起，又会怎样？",
        "一本温柔的书，讲述基础设施、会呼吸的城市，以及各民族之间的友谊。Génération 2040 · 适合 10 岁以上。",
      ],
    },
  },
  sections: [
    {
      id: "ou-irons-nous-rever",
      voix: "recit",
      fr: `Ce matin-là, la Maîtresse posa la craie et sourit.

— Pour trouver notre idée du concours, dit-elle, nous n'allons pas rester assis. Une école qui veut parler de sa ville doit d'abord la regarder. Alors… où voulez-vous aller ?

Personne n'osait commencer. Fatim leva la main la première.

— Moi, dit-elle tout bas, je voudrais voir le lac de Samaya. Celui qui n'est sur aucune carte, avec ses mille bras et ses pirogues.

Et comme elle avait osé, les autres se lâchèrent d'un coup :

— Les chutes de Kilissi ! L'eau qui dégringole entre les rochers !
— Non, le Voile de la Mariée — on dirait un grand voile blanc sur la falaise !

La Maîtresse riait.

— Tout me tente, dit-elle. Mais commençons par le lac. On raconte que là-bas, le dimanche, l'eau se met à danser.`,
      en: `That morning, the teacher set down the chalk and smiled.

"To find our idea for the contest," she said, "we're not going to sit still. A school that wants to talk about its town must first look at it. So… where do you want to go?"

No one dared start. Fatim raised her hand first.

"Me," she said softly, "I'd like to see Lake Samaya. The one that's on no map, with its thousand arms and its canoes."

And because she had dared, the others let loose all at once:

"The Kilissi falls! The water tumbling down between the rocks!"
"No, the Bride's Veil — it looks like a great white veil on the cliff!"

The teacher laughed.

"Everything tempts me," she said. "But let's start with the lake. They say that there, on Sundays, the water begins to dance."`,
      ar: `في ذلك الصباح، وضعت المعلّمةُ الطباشير وابتسمت.

— لكي نجد فكرتنا للمسابقة، قالت، لن نبقى جالسين. مدرسةٌ تريد أن تتحدّث عن مدينتها عليها أوّلًا أن تنظر إليها. فإلى أين تريدون الذهاب؟

لم يجرؤ أحدٌ على البدء. رفعت Fatim يدها أوّلًا.

— أنا، قالت بصوتٍ خافت، أودّ أن أرى بحيرة Samaya. تلك التي ليست على أيّ خريطة، بأذرعها الألف وزوارقها.

ولأنّها تجرّأت، انطلق الآخرون دفعةً واحدة:

— شلّالات Kilissi! الماء الذي يتدحرج بين الصخور!
— لا، Voile de la Mariée — يبدو كحجابٍ أبيض كبير على الجرف!

ضحكت المعلّمة.

— كلُّ شيءٍ يغريني، قالت. لكن لنبدأ بالبحيرة. يُقال إنّ الماء هناك، يوم الأحد، يبدأ في الرقص.`,
      zh: `那天早晨，老师放下粉笔，微微一笑。

「为了找到我们参赛的点子，」她说，「我们不会坐着不动。一所想要讲述自己城市的学校，首先得去看看它。那么……你们想去哪儿？」

没有人敢先开口。Fatim 第一个举起了手。

「我，」她轻声说，「我想去看 Samaya 湖。那座任何地图上都没有的湖，有上千条支汊，还有独木舟。」

因为她敢开口，其他人也一下子放开了：

「Kilissi 瀑布！水从岩石间倾泻而下！」
「不，Voile de la Mariée——它就像挂在悬崖上的一大幅白纱！」

老师笑了。

「我什么都想去，」她说。「不过先从湖开始吧。听说那里每逢星期天，湖水都会跳起舞来。」`,
    },
    {
      id: "le-chauffeur-des-trains",
      voix: "recit",
      fr: `Le lendemain, le vieux car les attendait — et au volant, il y avait le grand-père de Fatim. Car avant de conduire ce car, lui, autrefois, il avait conduit des trains.

Sur la route, quand ils longèrent une vieille trace de rails mangée par l'herbe, Fatim ne put se retenir :

— Grand-père, c'était quoi, ces rails ?

— Ça, ma fille, c'était la grande ligne d'autrefois. Beaucoup croient que Kindia est née du chemin de fer. C'est faux : quand le train est arrivé, il a trouvé nos villages et nos vieux rois déjà là. Le rail nous a seulement donné un rôle — porter nos bananes jusqu'à la mer — puis il s'est tu. Mais la terre, elle, était là bien avant lui.

Et parce que Fatim avait posé la première question, les autres n'eurent plus peur des leurs. Elles fusèrent de tous les sièges :

— Et le lac, il est grand comment ?
— On montera dans les pirogues ?
— C'est vrai que des villages sont posés sur l'eau ?

Le grand-père riait en conduisant.

— Patience ! Vous allez voir de vos yeux.`,
      en: `The next day, the old bus was waiting for them — and at the wheel sat Fatim's grandfather. For before he drove this bus, long ago, he had driven trains.

On the road, as they passed an old line of rails eaten by the grass, Fatim could not hold back:

"Grandfather, what were those rails?"

"Those, my child, were the great line of the old days. Many believe Kindia was born from the railway. That's not true: when the train arrived, it found our villages and our old kings already here. The rail only gave us a role — to carry our bananas to the sea — and then it fell silent. But the land was here long before it."

And because Fatim had asked the first question, the others lost their fear of theirs. The questions flew from every seat:

"And the lake — how big is it?"
"Will we ride in the canoes?"
"Is it true that some villages sit on the water?"

The grandfather laughed as he drove.

"Patience! You'll see with your own eyes."`,
      ar: `في اليوم التالي، كانت الحافلةُ القديمة في انتظارهم — وخلف المقود جلس جدُّ Fatim. فقبل أن يقود هذه الحافلة، كان قديمًا يقود القطارات.

في الطريق، حين حاذَوا أثرَ سكّةٍ قديمة أكلها العشب، لم تستطع Fatim أن تكتم نفسها:

— جدّي، ما هذه السكّة؟

— تلك، يا ابنتي، كانت الخطَّ الكبير في الزمن الغابر. كثيرون يظنّون أنّ Kindia وُلدت من سكّة الحديد. هذا خطأ: حين جاء القطار، وجد قرانا وملوكَنا القدامى هنا من قبل. لم تمنحنا السكّةُ سوى دور — أن نحمل موزنا إلى البحر — ثمّ صمتت. لكنّ الأرض كانت هنا قبله بزمنٍ طويل.

ولأنّ Fatim سألت السؤالَ الأوّل، لم يَعُد الآخرون يخافون من أسئلتهم. تطايرت الأسئلةُ من كلّ مقعد:

— والبحيرة، ما حجمها؟
— هل سنركب الزوارق؟
— أصحيحٌ أنّ قرى تقوم على الماء؟

ضحك الجدُّ وهو يقود.

— صبرًا! سترون بأمّ أعينكم.`,
      zh: `第二天，那辆旧巴士已经等着他们了——方向盘后面坐着的，是 Fatim 的祖父。因为在开这辆巴士之前，很久以前，他开过火车。

路上，当他们经过一段被野草吞没的旧铁轨时，Fatim 忍不住问：

「祖父，那些铁轨是什么呀？」

「那个呀，孩子，是从前的那条大铁路线。很多人以为 Kindia 是因铁路才诞生的。这不对：火车来到的时候，我们的村庄和古老的王早就在这里了。铁路只是给了我们一个角色——把香蕉运到海边——后来它就沉默了。可这片土地，早在它之前就在这里了。」

因为 Fatim 问了第一个问题，其他人也不再害怕自己的问题了。问题从每个座位上飞了出来：

「那湖有多大呀？」
「我们会坐独木舟吗？」
「真的有村庄坐落在水上吗？」

祖父一边开车一边笑。

「别急！你们会亲眼看到的。」`,
    },
    {
      id: "le-lac-qui-danse",
      voix: "recit",
      fr: `Puis le lac apparut, immense, au pied des falaises du Gangan.

Fatim retint son souffle. Sur l'eau calme glissaient des pirogues colorées — une vraie danse. C'était dimanche, jour de marché : de tous les villages cachés au bout des bras du lac, les pirogues arrivaient, chargées d'oranges, d'avocats, de tomates. Sur la rive, on s'appelait, on riait, et des enfants pieds nus entraînèrent aussitôt ceux de la classe dans leurs jeux.

Un vieux passeur accosta, sa pirogue pleine d'oranges. C'est alors que Fatim remarqua quelque chose. Certains villages étaient tout au bout, de l'autre côté de l'eau ; pour en sortir, il n'y avait que la pirogue. Et là, sur la berge, au soleil, des paniers de fruits attendaient leur tour.

— Tout est si beau, pensa-t-elle. Si seulement rien de tout cela ne se perdait.`,
      en: `Then the lake appeared, immense, at the foot of the cliffs of Gangan.

Fatim held her breath. On the calm water glided colorful canoes — a real dance. It was Sunday, market day: from all the villages hidden at the ends of the lake's arms, the canoes were arriving, laden with oranges, avocados, tomatoes. On the shore, people called to one another and laughed, and barefoot children at once swept the class into their games.

An old ferryman pulled in, his canoe full of oranges. That was when Fatim noticed something. Some villages lay far out, on the other side of the water; to leave them, there was only the canoe. And there, on the bank, in the sun, baskets of fruit were waiting their turn.

"Everything is so beautiful," she thought. "If only none of it were ever lost."`,
      ar: `ثمّ ظهرت البحيرة، شاسعةً، عند سفح جروف Gangan.

حبست Fatim أنفاسها. على الماء الهادئ كانت تنزلق زوارقُ ملوّنة — رقصةٌ حقيقية. كان يوم الأحد، يوم السوق: من كلّ القرى المختبئة في أطراف أذرع البحيرة، كانت الزوارقُ تصل محمّلةً بالبرتقال والأفوكادو والطماطم. على الضفّة، كان الناس ينادون بعضهم ويضحكون، وسحب أطفالٌ حفاةٌ تلاميذَ الصفّ فورًا إلى ألعابهم.

رسا معدّيٌّ عجوز، وزورقُه مملوءٌ بالبرتقال. عندها لاحظت Fatim شيئًا. بعض القرى كانت في أقصى البعد، على الضفّة الأخرى من الماء؛ وللخروج منها لم يكن ثمّة سوى الزورق. وهناك، على الشاطئ، تحت الشمس، كانت سلالُ الفاكهة تنتظر دورها.

— كلُّ شيءٍ جميلٌ هكذا، فكّرت. ليت شيئًا من هذا كلِّه لا يضيع أبدًا.`,
      zh: `然后，湖出现了，浩瀚无边，就在 Gangan 的悬崖脚下。

Fatim 屏住了呼吸。平静的水面上，一只只彩色的独木舟滑行而过——真像一场舞蹈。那天是星期天，赶集的日子：从藏在湖汊尽头的各个村庄，独木舟纷纷驶来，载着橙子、牛油果和番茄。岸上，人们互相呼唤、欢笑，赤脚的孩子立刻把全班拉进了他们的游戏。

一位年老的船夫靠了岸，独木舟里装满了橙子。就在那时，Fatim 注意到了一件事。有些村庄远在水的另一边；要出来，就只有独木舟。而那里，岸边，太阳底下，一筐筐水果正等着轮到自己。

「一切都这么美，」她想。「但愿这一切，一样都不要失去。」`,
    },
    {
      id: "le-chemin-du-retour",
      voix: "recit",
      fr: `Le soir, dans le car, on était fatigué et heureux. Les uns chantaient ; les autres montraient leurs mains collantes de jus d'orange.

Fatim, le front contre la vitre, se mit à rêver tout haut.

— Tu imagines, dit-elle à son amie, un petit pont là-bas, pour que les gens du lac n'attendent plus la pirogue ? Et un endroit au frais, près du marché, pour garder les fruits ?

— Et le car de ton grand-père qui irait les chercher ! répondit son amie en riant.

— Oui ! Et Kindia resterait comme aujourd'hui : verte, tranquille, pleine d'arbres. Une grande ville, mais qui respire.

Du volant, sans se retourner, le grand-père lança :

— Tu sais, ma fille, une ville, ça doit grandir comme un arbre. Pas comme un tas de béton.

Fatim sourit. C'était exactement ce qu'elle pensait.`,
      en: `That evening, in the bus, everyone was tired and happy. Some were singing; others showed off their hands sticky with orange juice.

Fatim, her forehead against the window, began to dream aloud.

"Can you imagine," she said to her friend, "a little bridge over there, so the lake people no longer have to wait for the canoe? And a cool place, near the market, to keep the fruit?"

"And your grandfather's bus going to fetch it all!" her friend answered, laughing.

"Yes! And Kindia would stay just as it is today: green, peaceful, full of trees. A big town, but one that breathes."

From the wheel, without turning around, the grandfather called out:

"You know, my child, a town should grow like a tree. Not like a heap of concrete."

Fatim smiled. That was exactly what she was thinking.`,
      ar: `في المساء، في الحافلة، كان الجميعُ متعبين وسعداء. بعضهم يغنّي؛ وآخرون يُرون أيديهم اللزجةَ من عصير البرتقال.

Fatim، وجبهتُها ملتصقةٌ بالزجاج، راحت تحلم بصوتٍ عالٍ.

— تخيّلي، قالت لصديقتها، جسرًا صغيرًا هناك، حتّى لا ينتظر أهلُ البحيرة الزورقَ بعد الآن؟ ومكانًا باردًا، قرب السوق، لحفظ الفاكهة؟

— وحافلةُ جدّك تذهب لجلبها! ردّت صديقتُها ضاحكة.

— نعم! وتبقى Kindia كما هي اليوم: خضراء، هادئة، مليئةً بالأشجار. مدينةٌ كبيرة، لكنّها تتنفّس.

من خلف المقود، دون أن يلتفت، قال الجدُّ:

— أتعلمين، يا ابنتي، المدينةُ يجب أن تكبر مثل الشجرة. لا مثل كومةٍ من الإسمنت.

ابتسمت Fatim. كان ذلك تمامًا ما تفكّر فيه.`,
      zh: `傍晚，在巴士里，大家又累又开心。有的在唱歌；有的炫耀着被橙汁粘住的手。

Fatim 把额头贴在车窗上，开始大声做起梦来。

「你能想象吗，」她对朋友说，「在那边架一座小桥，这样湖边的人就不用再等独木舟了？再在集市旁边弄一个凉爽的地方，把水果存起来？」

「再让你祖父的巴士去把它们都运来！」她的朋友笑着回答。

「对！而 Kindia 还会像今天一样：绿意盎然，宁静，满是树木。一座大城市，却会呼吸。」

方向盘后面，祖父头也不回地说：

「你知道吗，孩子，一座城市应该像一棵树那样成长。而不是像一堆水泥。」

Fatim 笑了。这正是她心里想的。`,
    },
    {
      id: "la-reponse-de-kindia",
      voix: "recit",
      fr: `De retour en classe, ils écrivirent leur réponse au concours — tous ensemble, en se coupant la parole, en riant.

Ils racontèrent le lac qui danse, le mont Gangan, les pirogues, les fruits qu'on garderait au frais pour qu'ils voyagent loin, les villages qu'on relierait par des ponts et de bonnes routes, et la ville-jardin qui ne perdrait jamais ses arbres.

Quelqu'un pensa aussi aux amis de France, avec qui Kindia échange depuis longtemps : on s'écrit, on apprend les uns des autres — c'est même ainsi qu'on a monté ici les ruches et développé le miel de la région.

— On leur écrira, décida la classe. Une ville ne rêve pas toute seule.

Restait la grande Ligne du fer, là-bas, tout au sud. Un garçon dit :

— Elle traverse notre pays.

Fatim réfléchit un instant, puis sourit.

— Alors faisons un vœu : qu'elle ne fasse pas que passer. Qu'elle nous relie — comme les pirogues relient les villages du lac.

La Maîtresse écrivit en haut de la feuille, en grandes lettres :

KINDIA, LA VILLE QUI RELIE ET QUI RESPIRE`,
      en: `Back in class, they wrote their answer to the contest — all together, talking over one another, laughing.

They told of the dancing lake, of Mount Gangan, of the canoes, of the fruit one would keep cool so it could travel far, of the villages one would link by bridges and good roads, and of the garden-town that would never lose its trees.

Someone thought too of the friends in France, with whom Kindia has long exchanged: they write to each other, they learn from one another — that is even how the beehives were set up here and the region's honey was developed.

"We'll write to them," the class decided. "A town does not dream alone."

There remained the great iron Line, down there, far to the south. A boy said:

"It crosses our country."

Fatim thought for a moment, then smiled.

"Then let's make a wish: that it not only pass through. That it connect us — the way the canoes connect the villages of the lake."

The teacher wrote at the top of the page, in big letters:

KINDIA, THE TOWN THAT CONNECTS AND BREATHES`,
      ar: `عند العودة إلى الصفّ، كتبوا جوابهم للمسابقة — جميعًا معًا، يقاطع بعضُهم بعضًا، ويضحكون.

حكَوا عن البحيرة التي ترقص، وعن جبل Gangan، وعن الزوارق، وعن الفاكهة التي ستُحفظ باردةً لتسافر بعيدًا، وعن القرى التي ستُوصَل بالجسور والطرق الجيّدة، وعن المدينة-الحديقة التي لن تفقد أشجارها أبدًا.

وفكّر أحدُهم أيضًا في الأصدقاء في France، الذين تتبادل معهم Kindia منذ زمنٍ طويل: يتكاتبون، ويتعلّم بعضهم من بعض — وهكذا بالضبط أُقيمت هنا خلايا النحل وطُوّر عسلُ المنطقة.

— سنكتب لهم، قرّر الصفّ. المدينةُ لا تحلم وحدها.

بقي خطُّ الحديد الكبير، هناك، في أقصى الجنوب. قال صبيٌّ:

— إنّه يعبر بلادنا.

فكّرت Fatim لحظةً، ثمّ ابتسمت.

— إذن لنُطلق أمنية: ألّا يكتفي بالمرور. أن يصلنا — مثلما تصل الزوارقُ قرى البحيرة.

كتبت المعلّمةُ في أعلى الورقة، بحروفٍ كبيرة:

Kindia، المدينةُ التي تَصِل وتتنفّس`,
      zh: `回到教室，他们一起写下了参赛的答案——大家七嘴八舌、互相打断、笑作一团。

他们讲了会跳舞的湖、Gangan 山、独木舟，讲了要把水果冷藏好让它走得更远，讲了要用桥梁和好路把村庄连起来，还讲了那座永远不会失去树木的花园之城。

也有人想起了在 France 的朋友，Kindia 和他们交流已经很久了：彼此通信，互相学习——这里的蜂箱和本地的蜂蜜，正是这样建立和发展起来的。

「我们要给他们写信，」全班决定。「一座城市不会独自做梦。」

还剩下那条大铁路线，在那边，遥远的南方。一个男孩说：

「它穿越我们的国家。」

Fatim 想了一会儿，然后笑了。

「那我们来许个愿吧：愿它不只是经过。愿它把我们连接起来——就像独木舟把湖上的村庄连起来一样。」

老师在纸的最上方，用大大的字写道：

Kindia，连接与呼吸之城`,
    },
    {
      id: "apres-2040",
      voix: "recit",
      fr: `Dans le dossier que Kindia envoya à la Simandou Academy, Fatim avait dessiné son rêve.

Le lac de Samaya dansait toujours de ses pirogues — mais un petit pont, maintenant, reliait deux villages du bord. Des pistes claires grimpaient vers les hameaux, sous le Gangan. Près du marché, les paniers d'oranges partaient au frais vers la ville et la mer. Au milieu, Kindia était restée verte et tranquille, traversée de rivières limpides — une grande ville, et pourtant pleine d'arbres et d'oiseaux. Tout au loin, au sud, filait la grande Ligne du fer. Et dans un coin du dessin, une enveloppe s'envolait vers la France, pour les amis avec qui l'on échange.

En bas, de sa plus belle écriture, Fatim avait écrit :

« Avant, on disait : Kindia, une ville qu'on traverse. Maintenant, on dira : Kindia, la ville qui relie et qui respire. Le train du fer file au loin ; nous, on a tendu des ponts, gardé nos fruits, gardé nos arbres — et gardé nos amis. À vous, maintenant, de continuer le rêve. »`,
      en: `In the file that Kindia sent to the Simandou Academy, Fatim had drawn her dream.

Lake Samaya still danced with its canoes — but a little bridge, now, linked two villages on its banks. Bright tracks climbed toward the hamlets, below Gangan. Near the market, baskets of oranges set off, kept cool, toward the town and the sea. In the middle, Kindia had stayed green and peaceful, crossed by clear rivers — a big town, and yet full of trees and birds. Far off, to the south, the great iron Line sped along. And in one corner of the drawing, an envelope was flying off to France, for the friends with whom they exchange.

At the bottom, in her finest handwriting, Fatim had written:

"Before, people said: Kindia, a town you cross. Now we will say: Kindia, the town that connects and breathes. The iron train speeds far away; we, we have stretched out bridges, kept our fruit, kept our trees — and kept our friends. It's up to you, now, to carry on the dream."`,
      ar: `في الملفّ الذي أرسلته Kindia إلى Simandou Academy، كانت Fatim قد رسمت حلمها.

ظلّت بحيرة Samaya ترقص بزوارقها — لكنّ جسرًا صغيرًا، الآن، يربط قريتين على ضفّتها. كانت دروبٌ واضحة تصعد نحو الكفور، تحت Gangan. قرب السوق، كانت سلالُ البرتقال تنطلق، محفوظةً باردة، نحو المدينة والبحر. وفي الوسط، بقيت Kindia خضراء وهادئة، تعبرها أنهارٌ صافية — مدينةٌ كبيرة، ومع ذلك مليئةٌ بالأشجار والطيور. في أقصى البعد، جنوبًا، كان خطُّ الحديد الكبير ينطلق مسرعًا. وفي ركنٍ من الرسم، كان مظروفٌ يطير نحو France، إلى الأصدقاء الذين نتبادل معهم.

في الأسفل، بأجمل خطٍّ لها، كتبت Fatim:

« كانوا يقولون من قبل: Kindia، مدينةٌ تُعبَر. الآن سنقول: Kindia، المدينةُ التي تَصِل وتتنفّس. قطارُ الحديد ينطلق بعيدًا؛ أمّا نحن، فقد مددنا الجسور، وحفظنا فاكهتنا، وحفظنا أشجارنا — وحفظنا أصدقاءنا. والآن، عليكم أنتم أن تواصلوا الحلم. »`,
      zh: `在 Kindia 寄给 Simandou Academy 的材料里，Fatim 画下了她的梦。

Samaya 湖依旧随着独木舟起舞——但如今，一座小桥把岸边的两个村庄连了起来。一条条清晰的小路朝着 Gangan 山下的村落攀升。集市旁，一筐筐橙子被冷藏着，启程驶向城市和大海。中间，Kindia 依然绿意盎然、宁静安详，清澈的河流穿城而过——一座大城市，却满是树木与飞鸟。在遥远的南方，那条大铁路线疾驰而过。而在画的一角，一个信封正飞往 France，寄给那些与他们交流的朋友。

在画的下方，Fatim 用她最漂亮的字写道：

「从前，人们说：Kindia，一座被穿越的城市。如今我们要说：Kindia，连接与呼吸之城。铁的列车驶向远方；而我们，架起了桥梁，留住了水果，留住了树木——也留住了朋友。现在，轮到你们，把这个梦继续下去。」`,
    },
  ],
};

export default g2040Tome9;
