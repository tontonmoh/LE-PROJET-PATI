// Série « Taadidi » — première série de la collection Pati (cycle du rusé).
// Patrimoine immatériel de la basse côte, transmis par Kini Bangaly.
// Texte source de Moh, calibré Aventure ; voix orale préservée (seules retouches = orthographe).
// Versions AR/ZH = drafts à faire relire par des natifs. Noms propres invariants (Seny, Fodé, Moussa, Nana, Taadidi, Woyika).
// Ajouter un épisode = passer statut 'soon' -> 'live' + remplir reader. Rien d'autre.
export type Lang = "fr" | "en" | "ar" | "zh";
type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };
export type Reader = Partial<Record<Lang, RBook>>;
export type Episode = {
  numero: number;
  titre: Record<Lang, string>;
  teaser?: Record<Lang, string>;
  statut: "live" | "soon";
  cover?: string;     // planche resserrée — vignette pour la carte de l'épisode
  planche?: string;   // planche plein-cadre — fond du gabarit, présent pendant la lecture
  cote?: "gauche" | "droite"; // côté de la carte de lecture (toujours opposé au sujet)
  bande?: "verticale" | "horizontale"; // forme de la carte : bande latérale fine, ou légende basse
  reader?: Reader;
};

export const TAADIDI_ACCENT = "#C8841E"; // or profond

const Q: Record<Lang, string> = { fr: "?", en: "?", ar: "؟", zh: "？" };

export const TAADIDI = {
  id: "taadidi",
  titre: "Taadidi",
  accroche: "L'enfant de toute la communauté.",
  pitch:
    "Né avec une voix — « Woyika ! » —, Taadidi grandit parmi des femmes fortes : une mère championne, des sœurs qui ne plient pas. Quand les hommes jaloux veulent rabaisser les filles, lui retourne la moquerie et montre, à chacun, la force qu'elles ont déjà. De sa naissance à sa paternité : vingt-huit épisodes, comme les nuits d'une lune.",
  accent: TAADIDI_ACCENT,
  badge: "Pati Aventure · 10–12 ans",
  cover: "/images/taadidi/taadidi-couverture.png",
  provenance: "D'après le patrimoine immatériel de la basse côte, transmis par Kini Bangaly.",
  episodes: [
    {
      numero: 1, statut: "live",
      planche: "/images/taadidi/ep1-planche.png",
      cover: "/images/taadidi/ep1-cover.png",
      cote: "gauche",
      bande: "verticale",
      titre: { fr: "Le tas de néré", en: "The Pile of Néré", ar: "كومة النيري", zh: "那堆 néré" },
      teaser: { fr: "Trois gourmands, un grand arbre à néré… et une naissance que personne n'attendait.", en: "Three gluttons, a great néré tree… and a birth no one saw coming.", ar: "ثلاثة نهِمين، وشجرة نيري كبيرة… وولادةٌ لم يتوقّعها أحد.", zh: "三个馋鬼，一棵大 néré 树……还有一场谁也没料到的诞生。" },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le tas de néré", sections: [
          { title: "Trois gourmands", image: "/images/taadidi/ep1-p1.png", paragraphs: [
            "Il était une fois trois gourmands, chassés chacun de sa famille, dans trois villages différents.",
            "Ils se rencontrèrent à un carrefour. « Pourquoi t'a-t-on chassé ? » demanda le premier. Les autres se regardèrent… et comprirent : ils étaient pareils ! Et ils furent tout contents — à plusieurs, on trouve toujours mieux à manger.",
            "Seny, Fodé et Moussa, c'étaient leurs noms." ] },
          { title: "L'arbre à néré", image: "/images/taadidi/ep1-p2.png", paragraphs: [
            "Ils découvrirent un grand arbre à néré, chargé de fruits. On envoya le plus jeune grimper ; les autres ramasseraient en bas, pour que rien ne s'écrase ni ne se salisse.",
            "« C'est parce que je suis le plus petit que vous m'envoyez travailler pendant que vous mangez tranquilles ? » râla Seny.",
            "« Mais non ! Il faut bien que quelqu'un monte. »",
            "« Bon, je monte. Mais à la moindre noix dans vos bouches, en descendant, j'en finis avec le coupable ! »",
            "Seny grimpa. En bas, Fodé et Moussa devaient ouvrir les gousses et ranger le néré dans les sacs.",
            "Mais le néré est si bon — comme l'arachide, peut-on vraiment le travailler sans y goûter ? Chacun croyant que l'autre ne voyait rien, et tous deux sûrs que Seny ne les voyait pas d'en haut, ils cédèrent.",
            "Là-haut, Seny n'était pas tranquille. À chaque bonne poignée, il comptait, pour recompter une fois en bas. Soudain il vit Moussa remuer la bouche et Fodé s'essuyer les lèvres. Furieux, il ferma le poing — et, au lieu de descendre par le tronc, il sauta pour mieux frapper…",
            "Les deux compères s'écartèrent d'un même mouvement. Et Seny s'écrasa, la tête la première, sur la roche. Fini." ] },
          { title: "Fodé et la chanson", image: "/images/taadidi/ep1-p3.png", paragraphs: [
            "Les deux survivants étaient tristes… et, en secret, contents : à deux, cela faisait plus de néré pour chacun.",
            "Moussa avait une idée derrière la tête. « Le néré est bon à croquer, mais meilleur encore en nectar. Il nous faut de l'eau : va en chercher. »",
            "« Tu ne vas pas me faire le coup à moi aussi ? Je n'irai pas. »",
            "« Dès que j'ai fini d'ouvrir ce tas, je monte à mon tour, pour qu'on en ait encore plus. » Il glissa une bonne poignée dans les bras de Fodé. « Tiens, mange en chemin, et reviens vite. »",
            "« D'accord. Mais tu ne touches plus à rien — et à mon retour, gare à toi si ta bouche sent le néré. »",
            "Fodé partit à reculons, surveillant Moussa, en chantonnant : « Si tu prends, je vois… ne prends pas, je te vois… »",
            "Le néré était doux, la chanson l'emportait, et il marchait toujours à reculons… si bien qu'il dégringola du haut de la falaise. Bam." ] },
          { title: "Moussa et le lion", image: "/images/taadidi/ep1-p4.png", paragraphs: [
            "Moussa, ravi d'avoir le magot pour lui seul, décida d'aller chercher l'eau lui-même : ainsi, personne ne lui volerait son tas.",
            "En chemin, il vit une antilope qui courait en boitant. « Comme ce gibier serait meilleur que du simple néré ! » se dit-il. Et il courut, courut derrière l'antilope…",
            "…jusqu'à se retrouver nez à nez avec un lion. Grrrrr." ] },
          { title: "Le tas de néré", image: "/images/taadidi/ep1-p5.png", paragraphs: [
            "Le néré resta donc là, en tas, à attendre.",
            "Un jour, une femme enceinte passa par là et tomba dessus. Elle en mangea, et en mangea — de son troisième mois à son neuvième.",
            "Puis vint l'heure. Seule, loin de tout, elle sentit le travail avancer tout seul. L'enfant naquit… mais ne pleura pas.",
            "« Mon bébé n'a pas crié — est-ce qu'il va bien ? J'ai accouché, et personne pour m'aider ! Personne pour courir au champ prévenir mon mari que ce beau bébé est là… »",
            "Alors, tout en bas, une petite voix monta :",
            "« — Woyika ! »" ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Pile of Néré", sections: [
          { title: "Three gluttons", paragraphs: [
            "Once upon a time there were three gluttons, each driven out of his family, in three different villages.",
            "They met at a crossroads. “Why were you chased away?” asked the first. The others looked at each other… and understood: they were just the same! And they were delighted — together, you always find more to eat.",
            "Their names were Seny, Fodé and Moussa." ] },
          { title: "The néré tree", paragraphs: [
            "They found a great néré tree, heavy with fruit. They sent the youngest up to climb; the others would catch below, so nothing would burst or get dirty.",
            "“So because I'm the smallest, you send me to work while you eat in peace?” grumbled Seny.",
            "“Not at all! Someone has to climb.”",
            "“Fine, I'll climb. But at the slightest nut in your mouths, when I come down, I'll deal with the guilty one!”",
            "Seny climbed. Below, Fodé and Moussa were to open the pods and pack the néré into the sacks.",
            "But néré is delicious — like groundnuts, can you really handle it without tasting? Each one, sure the other saw nothing, and both sure Seny couldn't see from above, gave in.",
            "Up in the tree, Seny was uneasy. With every good handful he counted, to count again below. Suddenly he saw Moussa's mouth moving and Fodé wiping his lips. Furious, he clenched his fist — and, instead of climbing down the trunk, he leapt to strike harder…",
            "The two friends stepped aside as one. And Seny crashed head-first onto the rock. Done." ] },
          { title: "Fodé and the song", paragraphs: [
            "The two survivors were sad… and secretly glad: with two, that meant more néré each.",
            "Moussa had an idea. “Néré is good to chew, but better still as nectar. We need water: go and fetch some.”",
            "“You won't pull the same trick on me, will you? I'm not going.”",
            "“As soon as I've finished opening this pile, I'll climb up too, so we'll have even more.” He slipped a good handful into Fodé's arms. “Here, eat on the way, and come back quick.”",
            "“All right. But you touch nothing more — and when I'm back, woe to you if your breath smells of néré.”",
            "Fodé set off backwards, watching Moussa, humming: “If you take, I see… don't take, I'm watching you…”",
            "The néré was sweet, the song carried him along, and he kept walking backwards… until he tumbled off the top of the cliff. Bam." ] },
          { title: "Moussa and the lion", paragraphs: [
            "Moussa, delighted to have the loot all to himself, decided to fetch the water in person: that way no one would steal his pile.",
            "On the way, he saw an antelope running with a limp. “How much better that game would be than plain néré!” he thought. And he ran, and ran after the antelope…",
            "…until he came face to face with a lion. Grrrrr." ] },
          { title: "The pile of néré", paragraphs: [
            "So the néré stayed there, in a pile, waiting.",
            "One day a pregnant woman passed by and came upon it. She ate, and ate — from her third month to her ninth.",
            "Then the hour came. Alone, far from everything, she felt the labour move along by itself. The child was born… but did not cry.",
            "“My baby didn't cry — is he all right? I've given birth, and no one to help me! No one to run to the field and tell my husband this beautiful baby is here…”",
            "Then, from down below, a small voice rose:",
            "“— Woyika!”" ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "كومة النيري", sections: [
          { title: "ثلاثة نهِمين", paragraphs: [
            "كان يا ما كان، ثلاثة نهِمين، طُرد كلٌّ منهم من عائلته، في ثلاث قرى مختلفة.",
            "التقوا عند مفترق طرق. سأل الأوّل: «لماذا طُردتَ؟» فنظر الآخران أحدهما إلى الآخر… وأدركا أنّهما مثله تمامًا! وفرحوا كثيرًا — فمع الجماعة يجد المرء دائمًا ما يأكله أكثر.",
            "وكانت أسماؤهم: Seny وFodé وMoussa." ] },
          { title: "شجرة النيري", paragraphs: [
            "وجدوا شجرة نيري كبيرة مثقلة بالثمر. أرسلوا الأصغر ليتسلّق، على أن يتلقّى الآخران في الأسفل، حتى لا ينكسر الثمر ولا يتّسخ.",
            "تذمّر Seny: «أَلِأنّي الأصغر تُرسلونني للعمل بينما تأكلون في هناء؟»",
            "«كلّا! لا بدّ أن يصعد أحدٌ ما.»",
            "«حسنًا، أصعد. لكن عند أوّل حبّةٍ في أفواهكم، حين أنزل، سأُنهي أمر المذنب!»",
            "صعد Seny. وفي الأسفل، كان على Fodé وMoussa أن يفتحا القرون ويعبّئا النيري في الأكياس.",
            "لكنّ النيري لذيذ — كالفول السوداني، فهل يُعقل أن يعمل المرء فيه دون أن يذوقه؟ كلٌّ منهما ظنّ أنّ الآخر لم يره، وكلاهما ظنّ أنّ Seny لا يراهما من الأعلى، فاستسلما.",
            "في الأعلى، لم يكن Seny مطمئنًّا. مع كلّ حفنةٍ طيّبة كان يَعدّ، ليُعيد العدّ في الأسفل. وفجأةً رأى فم Moussa يتحرّك وFodé يمسح شفتيه. فاحتدم غضبه وأطبق قبضته — وبدل أن ينزل على الجذع، قفز ليضرب بقوّةٍ أكبر…",
            "فابتعد الرفيقان في آنٍ واحد. فارتطم Seny بالصخرة، رأسه أوّلًا. انتهى أمره." ] },
          { title: "Fodé والأغنية", paragraphs: [
            "كان الناجيان حزينين… وفي سرّهما مسرورين: فمع اثنين، يصيب كلٌّ نصيبًا أكبر من النيري.",
            "كان في رأس Moussa فكرة. «النيري طيّبٌ مضغًا، لكنّه ألذّ رحيقًا. نحتاج إلى ماء: اذهب فأحضِره.»",
            "«لن تخدعني أنا أيضًا، أليس كذلك؟ لن أذهب.»",
            "«حالما أنتهي من فتح هذه الكومة، سأصعد أنا أيضًا لنحصل على المزيد.» ودسّ حفنةً طيّبة بين ذراعَي Fodé. «خُذ، كُل في الطريق، وعُد سريعًا.»",
            "«حسنًا. لكن لا تلمس شيئًا بعد — وعند عودتي، ويلٌ لك إن فاح من فمك النيري.»",
            "انطلق Fodé إلى الوراء، يراقب Moussa، وهو يدندن: «إن أخذتَ، أراك… وإن لم تأخذ، أُراقبك…»",
            "كان النيري حلوًا، والأغنية تأخذه، وهو لا يزال يمشي إلى الوراء… حتى تدحرج من أعلى الجُرف. بام." ] },
          { title: "Moussa والأسد", paragraphs: [
            "أمّا Moussa، وقد سُرّ بأن صار الكنز له وحده، فقرّر أن يجلب الماء بنفسه: هكذا لا يسرق أحدٌ كومته.",
            "وفي الطريق، رأى ظبيًا يعدو وهو يعرج. «كم سيكون هذا الصيد ألذّ من مجرّد النيري!» قال في نفسه. فجرى، وجرى خلف الظبي…",
            "…حتى وجد نفسه وجهًا لوجهٍ أمام أسد. غررررر." ] },
          { title: "كومة النيري", paragraphs: [
            "بقيت كومة النيري إذن في مكانها، تنتظر.",
            "وذات يوم، مرّت امرأةٌ حامل فعثرت عليها. فأكلت، وأكلت — من شهرها الثالث إلى التاسع.",
            "ثمّ جاءت الساعة. وحيدةً، بعيدةً عن كلّ شيء، أحسّت المخاض يتقدّم من تلقاء نفسه. وُلد الطفل… لكنّه لم يبكِ.",
            "«طفلي لم يبكِ — أهو بخير؟ وضعتُ حملي، ولا أحد يساعدني! لا أحد يركض إلى الحقل ليُخبر زوجي أنّ هذا الطفل الجميل قد جاء…»",
            "وعندئذٍ، من الأسفل، ارتفع صوتٌ صغير:",
            "«— Woyika!»" ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "那堆 néré", sections: [
          { title: "三个馋鬼", paragraphs: [
            "从前有三个馋鬼，各自被家里赶了出来，来自三个不同的村子。",
            "他们在一个十字路口相遇。第一个问：「你为什么被赶出来？」另外两个面面相觑……明白了：原来彼此都一样！他们高兴极了——人多一起，总能找到更多吃的。",
            "他们的名字是 Seny、Fodé 和 Moussa。" ] },
          { title: "néré 树", paragraphs: [
            "他们发现一棵硕大的 néré 树，挂满了果实。大家让最小的爬上去，其余的人在下面接住，免得果子摔破弄脏。",
            "Seny 抱怨：「就因为我最小，你们就派我干活，自己在下面安心吃？」",
            "「哪有！总得有人爬上去呀。」",
            "「好，我爬。但只要你们嘴里有一颗果子，等我下来，就跟那个偷吃的人算账！」",
            "Seny 爬了上去。下面，Fodé 和 Moussa 负责剥开豆荚，把 néré 装进袋子。",
            "可 néré 太好吃了——就像花生，光干活而不尝一口，做得到吗？两人都以为对方没看见，又都以为 Seny 在上面看不到，于是都没忍住。",
            "树上的 Seny 却不踏实。每抓一把，他都要数一数，好下来再核对。忽然，他看见 Moussa 在动嘴，Fodé 在擦嘴。他怒火中烧，攥紧拳头——没有顺着树干下来，而是纵身一跳，想狠狠教训他们……",
            "两个同伴同时一闪身。Seny 头朝下重重摔在岩石上。完了。" ] },
          { title: "Fodé 与那首歌", paragraphs: [
            "两个幸存者既难过……又暗自高兴：剩两个人，每人分到的 néré 更多了。",
            "Moussa 心里有个主意。「néré 嚼着好吃，可榨成汁更好。我们需要水：你去打吧。」",
            "「你不会也想耍我吧？我不去。」",
            "「等我把这堆剥完，我也爬上去，好让我们有更多。」他往 Fodé 怀里塞了一大把。「给，路上吃，快去快回。」",
            "「行。可你别再碰任何东西——等我回来，要是你嘴里有 néré 味，你就等着瞧。」",
            "Fodé 倒着走，盯着 Moussa，哼着小调：「你拿，我看见……你不拿，我也盯着你……」",
            "néré 又甜，歌儿又把他带着走，他一直倒着走……结果从悬崖顶上摔了下去。砰。" ] },
          { title: "Moussa 与狮子", paragraphs: [
            "Moussa 高兴极了，宝贝全归他一个人，他决定亲自去打水：这样谁也偷不走他那一堆。",
            "路上，他看见一只一瘸一拐奔跑的羚羊。「这猎物可比单吃 néré 强多了！」他想。于是他追啊追，追着那只羚羊……",
            "……结果迎面撞上了一头狮子。吼——" ] },
          { title: "那堆 néré", paragraphs: [
            "于是那堆 néré 就留在原地，等着。",
            "有一天，一个怀孕的女人路过，发现了它。她吃啊吃——从怀孕第三个月一直吃到第九个月。",
            "然后，时辰到了。她孤身一人，远离一切，感到分娩自己进行着。孩子出生了……却没有哭。",
            "「我的孩子没有哭——他还好吗？我生了孩子，却没有人帮我！没有人能跑到田里告诉我丈夫，这个漂亮的孩子已经来到了……」",
            "就在这时，从下方传来一个小小的声音：",
            "「— Woyika！」" ] },
        ] },
      },
    },
    {
      numero: 2, statut: "live",
      planche: "/images/taadidi/ep2-planche.png",
      cover: "/images/taadidi/ep2-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: { fr: "Taadidi gagne son nom", en: "Taadidi Earns His Name", ar: "Taadidi يكسب اسمه", zh: "Taadidi 赢得他的名字" },
      teaser: { fr: "Le nouveau-né parle — et lance au père un duel de ruse pour gagner son nom.", en: "The newborn speaks — and challenges the father to a battle of wits to earn his name.", ar: "المولود يتكلّم — ويتحدّى أباه في مبارزة دهاءٍ ليكسب اسمه.", zh: "新生儿开口了——还向父亲发起一场智斗，去赢得自己的名字。" },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Taadidi gagne son nom", sections: [
          { title: "La voix", image: "/images/taadidi/ep2-p1.png", paragraphs: [
            "« — Woyika ! » La voix venait d'en bas, du nouveau-né. « Pourquoi une mère mettrait-elle au monde un être aussi précieux que moi… sinon pour l'envoyer porter ses messages ? Je suis là. Fais un vœu, mère, et tu seras exaucée. »",
            "La femme — elle s'appelait Nana — en resta bouche bée.",
            "« Eh bien… puisque c'est ainsi : va, mon fils. Ton père est au champ, juste derrière la colline. »" ] },
          { title: "La commission au père", image: "/images/taadidi/ep2-p2.png", paragraphs: [
            "« Papa ! Papa ! Mère m'envoie te dire qu'elle a accouché. »",
            "Le père, incrédule, refusa de se laisser berner par pareille effronterie.",
            "« Petit du champ, retourne lui dire que j'ai bien compris. Et tiens : sous le lit, dans l'eau, il y a une noix de cola. Qu'elle laboure la terre devant la porte de la case, qu'elle y plante cette noix — et que celle-ci germe, grandisse, se couvre de feuilles et donne ses fruits. Ce sont CES noix qu'on enverra à la famille pour annoncer ta naissance, et qui orneront la calebasse de ton baptême… dans une semaine. »" ] },
          { title: "Le grain de riz", image: "/images/taadidi/ep2-p3.png", paragraphs: [
            "L'enfant rapporta la commission. Sa mère fondit en larmes : « Comment réaliser un tel miracle ? Je tiens à peine debout ! »",
            "« Encore une fois, mère, à quoi bon pleurer ? Tu as désormais un missionnaire. Donne-moi un grain de riz. »",
            "Et déjà il avait filé.",
            "« Père, tiens. »",
            "« Un grain de riz, pour quoi faire ? »",
            "« Fais vite : mère te l'envoie pour que tu le plantes aujourd'hui même, que tu travailles tard, moissonnes, récoltes, passes au pilon… Ainsi, sûrement, les colas trouveront leur place sur le pain blanc préparé grâce à ce riz. »",
            "Le père sentit qu'il avait perdu cette manche." ] },
          { title: "La tête rasée", image: "/images/taadidi/ep2-p4.png", paragraphs: [
            "Ce bébé trop malin agaçait déjà tout le village, qui avait commencé à le surnommer — mi-fier, mi-excédé — Taadidi.",
            "La veille du baptême, le père voulut sa revanche. Il crut tenir une colle imparable.",
            "« Taadidi ! Où est ta maman ? »",
            "« Elle se fait tresser : il faut qu'elle soit encore plus belle, pour demain. »",
            "« Eh bien va lui dire que je viens de me raser la tête… et qu'elle vienne me tresser, moi. »",
            "Les gens autour éclatèrent de rire. Mais Taadidi avait déjà détalé.",
            "« Mère, mère ! Père te demande… il vient de se raser le crâne, et il veut que tu ailles le tresser. »",
            "Les femmes pouffèrent. La mère sourit en disant : « Adeyaaa… comment contenter un mari aussi exigeant ? »",
            "« Fais-moi confiance, mère. Prêtez-moi un peigne. »",
            "Le garçon revint vers son père.",
            "« Père, voici un peigne. »",
            "« Pour quoi faire, Taadidi ? »",
            "« Pour te peigner, le temps que mère arrive avec toute son équipe — pour que ça aille plus vite. »",
            "« Mais, fils, je n'ai pas de cheveux ! Comment veux-tu que je les peigne ? »",
            "« Alors, père… depuis quand, et surtout comment, tresse-t-on une tête qui n'a jamais été peignée ? »",
            "La foule, stupéfaite, n'eut plus un mot." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Taadidi Earns His Name", sections: [
          { title: "The voice", paragraphs: [
            "“— Woyika!” The voice came from below, from the newborn. “Why would a mother bring into the world a being as precious as me… if not to send him carrying her messages? Here I am. Make a wish, mother, and it shall be granted.”",
            "The woman — her name was Nana — was speechless.",
            "“Well… since that's how it is: go, my son. Your father is at the field, just behind the hill.”" ] },
          { title: "The message to the father", paragraphs: [
            "“Father! Father! Mother sends me to tell you she has given birth.”",
            "The father, incredulous, refused to be fooled by such cheek.",
            "“Child of the field, go back and tell her I understand. And here: under the bed, in the water, there is a kola nut. Let her till the ground before the door of the hut, let her plant this nut — and let it sprout, grow, fill with leaves and bear fruit. It is THOSE nuts that will be sent to the family to announce your birth, and that will adorn the calabash of your naming feast… in one week.”" ] },
          { title: "The grain of rice", paragraphs: [
            "The child carried the message back. His mother burst into tears: “How can I work such a miracle? I can barely stand!”",
            "“Once more, mother, what good is crying? You have a missionary now. Give me a grain of rice.”",
            "And already he had darted off.",
            "“Father, here.”",
            "“A grain of rice, what for?”",
            "“Be quick: mother sends it so you may plant it this very day, work late, harvest, reap, pound it… So that, surely, the kola nuts will find their place on the pain blanc — the traditional bread shared with families at the naming — made from this rice.”",
            "The father felt he had lost that round." ] },
          { title: "The shaven head", paragraphs: [
            "This too-clever baby already vexed the whole village, which had begun to nickname him — half proud, half exasperated — Taadidi.",
            "On the eve of the naming feast, the father wanted his revenge. He thought he held an unbeatable riddle.",
            "“Taadidi! Where is your mother?”",
            "“She's having her hair braided: she must be even more beautiful, for tomorrow.”",
            "“Then go tell her I've just shaved my head… and that she comes to braid me.”",
            "The people around burst out laughing. But Taadidi had already darted off.",
            "“Mother, mother! Father wants you… he's just shaved his head, and he wants you to braid it.”",
            "The women snickered. This time the mother smiled: “Adeyaaa… how can I please such a demanding husband?”",
            "“Trust me, mother. Lend me a comb.”",
            "The boy went back to his father.",
            "“Father, here is a comb.”",
            "“What for, Taadidi?”",
            "“To comb your head while mother arrives with her whole team — to make it faster.”",
            "“But, son, I have no hair! How would I comb it?”",
            "“Then, father… since when, and above all how, do you braid a head that has never been combed?”",
            "The crowd, stunned, had not another word." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "Taadidi يكسب اسمه", sections: [
          { title: "الصوت", paragraphs: [
            "«— Woyika!» جاء الصوت من الأسفل، من المولود الجديد. «لماذا تُنجب أمٌّ كائنًا ثمينًا مثلي… إن لم يكن لتُرسله يحمل رسائلها؟ ها أنا ذا. تمنّي يا أمّي، وسيُستجاب لك.»",
            "المرأة — واسمها Nana — بُهتت ولم تنطق.",
            "«حسنًا… ما دام الأمر كذلك: اذهب يا بنيّ. أبوك في الحقل، خلف التلّة مباشرةً.»" ] },
          { title: "الرسالة إلى الأب", paragraphs: [
            "«أبي! أبي! أرسلتني أمّي لأخبرك أنّها وضعت مولودها.»",
            "لم يصدّق الأب، ورفض أن تنطلي عليه هذه الوقاحة.",
            "«يا ابن الحقل، عُد وقُل لها إنّني فهمت. وها هي: تحت السرير، في الماء، نواةُ كولا. فلتحرث الأرض أمام باب الكوخ، ولتغرس هذه النواة — ولتُنبت وتكبر وتورق وتُثمر. فهذه النوى هي التي تُرسل إلى الأهل لإعلان مولدك، والتي تُزيّن قَرعة وليمة تسميتك… بعد أسبوع.»" ] },
          { title: "حبّة الأرز", paragraphs: [
            "حمل الطفل الرسالة عائدًا. فأجهشت أمّه بالبكاء: «كيف أصنع هذه المعجزة؟ بالكاد أقف على قدميّ!»",
            "«مرّةً أخرى يا أمّي، ما جدوى البكاء؟ صار لديك مبعوثٌ الآن. أعطيني حبّة أرز.»",
            "وكان قد انطلق سلفًا.",
            "«أبي، تفضّل.»",
            "«حبّة أرز، لماذا؟»",
            "«أسرِع: أرسلتها أمّي لتغرسها اليوم نفسه، وتعمل حتى وقتٍ متأخّر، وتحصد، وتجني، وتدقّ في الهاون… عندئذٍ، بالتأكيد، ستجد نوى الكولا مكانها على «pain blanc» (الخبز التقليدي الذي يُوزَّع على العائلات في التسمية) المُعَدّ من هذا الأرز.»",
            "أحسّ الأب أنّه خسر هذه الجولة." ] },
          { title: "الرأس الحليق", paragraphs: [
            "كان هذا الرضيع المفرط الذكاء قد أضجر القرية كلّها، حتى بدأت تلقّبه — بين فخرٍ وضيق — Taadidi.",
            "عشيّةَ التسمية، أراد الأب أن ينتقم. وظنّ أنّه أمسك أُحجيّةً لا تُحلّ.",
            "«Taadidi! أين أمّك؟»",
            "«تُضفّر شعرها: لا بدّ أن تكون أجمل، من أجل الغد.»",
            "«إذن اذهب وقُل لها إنّني حلقتُ رأسي للتوّ… ولتأتِ هي لتُضفّرني أنا.»",
            "انفجر من حوله ضاحكين. لكنّ Taadidi كان قد انطلق سلفًا.",
            "«أمّي، أمّي! أبي يطلبك… لقد حلق رأسه للتوّ، ويريد منكِ أن تُضفّريه.»",
            "قهقهت النساء. هذه المرّة ابتسمت الأمّ وقالت: «Adeyaaa… كيف أُرضي زوجًا بهذه الصعوبة؟»",
            "«ثقي بي يا أمّي. أعيروني مشطًا.»",
            "عاد الصبيّ إلى أبيه.",
            "«أبي، هذا مشط.»",
            "«لماذا يا Taadidi؟»",
            "«لأمشّط لك رأسك ريثما تصل أمّي مع فريقها كلّه — حتى نُسرع.»",
            "«لكن يا بُنيّ، لا شعر لي! كيف أمشّطه؟»",
            "«إذن يا أبي… منذ متى، وكيف أصلًا، تُضفَّر رأسٌ لم تُمشَّط قطّ؟»",
            "فبُهت الجمع، ولم ينبس بكلمةٍ أخرى." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "Taadidi 赢得他的名字", sections: [
          { title: "那个声音", paragraphs: [
            "「— Woyika！」声音来自下方，来自那个新生儿。「母亲为何要把像我这样珍贵的生命带到世上……若不是为了派他去传话呢？我在这儿。许个愿吧，母亲，你必如愿。」",
            "那女人——她叫 Nana——惊得说不出话。",
            "「好吧……既然如此：去吧，我的儿子。你父亲在田里，就在山丘后面。」" ] },
          { title: "给父亲的口信", paragraphs: [
            "「父亲！父亲！母亲叫我来告诉你，她生了。」",
            "父亲不肯相信，更不愿被这样的厚脸皮糊弄。",
            "「田里来的小子，回去告诉她我明白了。还有：床底下，水里，有一颗可乐果。让她把屋门前的地翻好，把这颗果种下——让它发芽、长大、枝繁叶茂、结出果实。正是这些果子，要送到族里去通报你的出生，要装点你命名礼上的葫芦……就在一周后。」" ] },
          { title: "一粒米", paragraphs: [
            "孩子把口信带了回去。母亲放声大哭：「我怎么变得出这样的奇迹？我连站都站不稳！」",
            "「母亲，再说一次，哭有什么用？你现在有了一个传信的人。给我一粒米。」",
            "话音未落，他已经跑开了。",
            "「父亲，给。」",
            "「一粒米，做什么？」",
            "「快些：母亲让你今天就把它种下，干到很晚，收割，打谷，舂米……这样，可乐果自然就能摆上用这米做成的传统白面包「pain blanc」了。」",
            "父亲觉得，这一回合他输了。" ] },
          { title: "剃光的头", paragraphs: [
            "这个太过聪明的婴儿，早已惹恼了全村；人们半是骄傲、半是无奈地，开始叫他—— Taadidi。",
            "命名礼前夜，父亲想要扳回一城。他自以为想出了一道无解的难题。",
            "「Taadidi！你母亲在哪儿？」",
            "「她在编头发：明天，她得更漂亮才行。」",
            "「那就去告诉她，我刚把头剃光了……让她来给我编。」",
            "周围的人哄笑起来。可 Taadidi 早就跑开了。",
            "「母亲，母亲！父亲找你……他刚把头剃光，要你去给他编头发。」",
            "妇女们都偷笑。这一次，母亲笑着说：「Adeyaaa……这么难伺候的丈夫，我怎么应付得了？」",
            "「相信我，母亲。借我一把梳子。」",
            "男孩回到父亲那里。",
            "「父亲，这是梳子。」",
            "「做什么用，Taadidi？」",
            "「趁母亲带着她全套人马赶来之前，先给你梳梳头——好快一点。」",
            "「可是，孩子，我没有头发！我怎么梳？」",
            "「那么，父亲……一颗从没梳过的头，是从什么时候起、又究竟怎样，能编得起来呢？」",
            "人群惊呆了，再也说不出一句话。" ] },
        ] },
      },
    },
    {
      numero: 3, statut: "live",
      planche: "/images/taadidi/ep3-planche.png",
      cover: "/images/taadidi/ep3-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Le serment de Bakala", "en": "Bakala's Oath", "ar": "قَسَم Bakala", "zh": "Bakala 的誓言"},
      teaser: {"fr": "Au baptême, un colosse humilie Nana — jusqu'à ce qu'une petite voix lui rappelle un serment oublié.", "en": "At the naming feast, a giant humiliates Nana — until a tiny voice reminds him of a forgotten oath.", "ar": "في حفل التسمية، يُهين عملاقٌ Nana — حتى يُذكّره صوتٌ صغير بقَسَمٍ منسيّ.", "zh": "命名礼上，一个壮汉羞辱了 Nana——直到一个小小的声音让他想起一个被遗忘的誓言。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le serment de Bakala", sections: [
          { title: "Promis l'un à l'autre", image: "/images/taadidi/ep3-p1.png", paragraphs: [
            "Écoutez, enfants de Kiribounyi et d'ailleurs. En ce temps-là, on gagnait sa femme au champ. Le meilleur des hommes épousait la meilleure des femmes, et ainsi de suite.",
            "Bakala était le plus fort des moissonneurs. Nana était la première des femmes. On les disait promis l'un à l'autre." ] },
          { title: "La colère de Bakala", image: "/images/taadidi/ep3-p2.png", paragraphs: [
            "Mais Sana était venu du village voisin, et c'est lui qui avait épousé Nana. Depuis, Bakala gardait sa colère.",
            "Seulement, il n'osait rien contre Sana, qui était trop fort. Alors, pendant dix ans, à chaque fille qui naissait, c'est Nana qu'il montrait du doigt." ] },
          { title: "Le septième jour", image: "/images/taadidi/ep3-p3.png", paragraphs: [
            "Ce matin-là, tout le village était venu. Calebasses, colas, tam-tams. Car enfin, la maison de Sana fêtait un garçon.",
            "Bakala se planta au milieu de la fête, ses cinq fils derrière lui — deux jumeaux parmi eux.",
            "Un peu à l'écart, Lima, Tofan et Fanyi serraient leur mère contre elles. Et Nana n'osait toujours pas lever la tête." ] },
          { title: "Un garçon ? Et alors ?", image: "/images/taadidi/ep3-p4.png", paragraphs: [
            "« Un garçon ? Et alors ? lança Bakala. Moi j'en ai cinq. Et pas en dix ans ! »",
            "Les rires montèrent. Sur Nana, comme toujours.",
            "Mais une petite voix claire sortit du pagne où dormait le bébé. « Woyika ! » Tout le monde se figea." ] },
          { title: "Le serment", image: "/images/taadidi/ep3-p5.png", paragraphs: [
            "Le nourrisson tourna vers Bakala ses grands yeux noirs. « Bakala… tu avais juré quelque chose, non ? Rappelle-toi. »",
            "« Le jour où Nana donnera un fils à Sana, je mettrai un pagne, j'irai au marigot avec les femmes, et je puiserai l'eau jusqu'au soir. »",
            "Un grand silence tomba. Et là, tout le monde se souvint du serment." ] },
          { title: "Tiens parole", image: "/images/taadidi/ep3-p6.png", paragraphs: [
            "Bakala devint tout pâle. « Je n'obéirai pas à un bébé ! » gronda-t-il.",
            "Taadidi pencha la tête. « Tu tiens tête à un nourrisson… toi qui n'as jamais osé regarder mon père en face ? »",
            "Alors le rire monta. Mais cette fois, il ne tomba pas sur Nana. Il tomba sur Bakala." ] },
          { title: "Au marigot !", image: "/images/taadidi/ep3-p7.png", paragraphs: [
            "« Un serment, c'est un serment ! » cria une vieille femme. « Au marigot, Bakala ! » reprit tout le village.",
            "Et le grand moissonneur, rouge jusqu'aux oreilles, dut mettre un pagne. Il descendit vers l'eau, la calebasse sur la tête, sous les rires de tout Kiribounyi." ] },
          { title: "Le rire change de camp", image: "/images/taadidi/ep3-p8.png", paragraphs: [
            "Alors Nana leva la tête. Pour la première fois en dix ans, ce n'était plus elle qu'on montrait du doigt.",
            "Lima posa la main sur l'épaule de sa mère, et les trois sœurs se redressèrent, droites comme des palmiers après l'orage.",
            "Mais un peu plus loin, un des fils de Bakala regardait son père courber le dos sous les rires. C'était Sayon — celui qui était né juste après les jumeaux. Il serra les poings. « Toi, le bébé sorcier… un jour, tu me le paieras. »",
            "Le conteur sourit. Ce jour-là, au septième jour de sa vie, Taadidi avait fait taire les moqueurs de sa mère. Et, sans le savoir, il s'était fait son premier ennemi. Mais ça, mes enfants, c'est l'histoire de demain." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Bakala's Oath", sections: [
          { title: "Promised to Each Other", paragraphs: [
            "Listen, children of Kiribounyi and beyond. In those days, a man won his wife in the fields. The best of the men married the best of the women, and so on down the line.",
            "Bakala was the strongest of the harvesters. Nana was the first among the women. People said the two were promised to each other." ] },
          { title: "Bakala's Anger", paragraphs: [
            "But Sana had come from the neighbouring village, and it was he who married Nana. Ever since, Bakala had nursed his anger.",
            "Only, he dared do nothing against Sana, who was too strong. So for ten years, at every girl who was born, it was Nana he pointed at." ] },
          { title: "The Seventh Day", paragraphs: [
            "That morning, the whole village had come. Calabashes, kola nuts, drums. For at last, Sana's house was celebrating a boy.",
            "Bakala planted himself in the middle of the feast, his five sons behind him — two of them twins.",
            "A little apart, Lima, Tofan and Fanyi held their mother close. And Nana still did not dare lift her head." ] },
          { title: "A Boy? So What?", paragraphs: [
            "“A boy? So what?” Bakala threw out. “I have five. And not in ten years!”",
            "The laughter rose. On Nana, as always.",
            "But a small clear voice came from the wrap where the baby slept. “Woyika!” Everyone froze." ] },
          { title: "The Oath", paragraphs: [
            "The newborn turned his big black eyes towards Bakala. “Bakala… you swore something once, didn't you? Remember.”",
            "“The day Nana gives Sana a son, I will put on a wrapper, I will go to the watering hole with the women, and I will draw water until nightfall.”",
            "A deep silence fell. And there, everyone remembered the oath." ] },
          { title: "Keep Your Word", paragraphs: [
            "Bakala turned pale. “I will not obey a baby!” he growled.",
            "Taadidi tilted his head. “You stand up to a newborn… you who never once dared look my father in the face?”",
            "Then the laughter rose. But this time, it did not fall on Nana. It fell on Bakala." ] },
          { title: "To the Watering Hole!", paragraphs: [
            "“An oath is an oath!” cried an old woman. “To the watering hole, Bakala!” the whole village took up.",
            "And the great harvester, red to the ears, had to put on a wrapper. He went down to the water, the calabash on his head, under the laughter of all Kiribounyi." ] },
          { title: "The Laughter Changes Sides", paragraphs: [
            "Then Nana lifted her head. For the first time in ten years, it was no longer she who was being pointed at.",
            "Lima laid a hand on her mother's shoulder, and the three sisters straightened up, tall as palm trees after the storm.",
            "But a little further off, one of Bakala's sons watched his father bend his back under the laughter. It was Sayon — the one born just after the twins. He clenched his fists. “You, sorcerer baby… one day, you'll pay me for this.”",
            "The storyteller smiled. That day, on the seventh day of his life, Taadidi had silenced his mother's mockers. And, without knowing it, he had made his first enemy. But that, my children, is tomorrow's story." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "قَسَم Bakala", sections: [
          { title: "موعودان أحدهما للآخر", paragraphs: [
            "اسمعوا، يا أطفال Kiribounyi وما وراءها. في ذلك الزمان، كان الرجل يكسب زوجته في الحقل. أفضل الرجال يتزوّج أفضل النساء، وهكذا دواليك.",
            "كان Bakala أقوى الحصّادين. وكانت Nana أوّل النساء. وكان يُقال إنّهما موعودان أحدهما للآخر." ] },
          { title: "غضب Bakala", paragraphs: [
            "لكنّ Sana جاء من القرية المجاورة، وهو الذي تزوّج Nana. ومنذ ذلك الحين، ظلّ Bakala يكتم غيظه.",
            "غير أنّه لم يجرؤ على شيء ضدّ Sana، فقد كان أقوى من أن يُواجَه. فطوال عشر سنوات، عند كلّ بنتٍ تُولد، كان يشير بإصبعه إلى Nana." ] },
          { title: "اليوم السابع", paragraphs: [
            "في ذلك الصباح، جاء القرية كلّها. قِرَع، وجوز الكولا، وطبول. فأخيرًا، بيت Sana يحتفل بولد.",
            "تمركز Bakala في وسط الحفل، وخلفه أبناؤه الخمسة — اثنان منهم توأمان.",
            "وعلى جانبٍ قليلًا، كانت Lima وTofan وFanyi يضممن أمّهنّ إليهنّ. وما زالت Nana لا تجرؤ على رفع رأسها." ] },
          { title: "ولدٌ؟ وماذا في ذلك؟", paragraphs: [
            "«ولدٌ؟ وماذا في ذلك؟» صاح Bakala. «أنا عندي خمسة. وليس في عشر سنوات!»",
            "فارتفع الضحك. على Nana، كالعادة.",
            "لكن صوتًا صغيرًا صافيًا خرج من الإزار حيث ينام الرضيع. «Woyika!» فتجمّد الجميع." ] },
          { title: "القَسَم", paragraphs: [
            "أدار الرضيع نحو Bakala عينيه السوداوين الكبيرتين. «Bakala… لقد أقسمتَ شيئًا، أليس كذلك؟ تذكّر.»",
            "«يوم تُنجب Nana ابنًا لـ Sana، سألبس الإزار، وأذهب إلى المنهل مع النساء، وأستقي الماء حتى المساء.»",
            "خيّم صمتٌ عظيم. وعندئذٍ، تذكّر الجميع القَسَم." ] },
          { title: "أوفِ بوعدك", paragraphs: [
            "اصفرّ وجه Bakala. «لن أطيع رضيعًا!» زمجر.",
            "أمال Taadidi رأسه. «تتحدّى رضيعًا… أنت الذي لم تجرؤ يومًا أن تنظر في وجه أبي؟»",
            "فارتفع الضحك. لكنّه هذه المرّة لم يقع على Nana. وقع على Bakala." ] },
          { title: "إلى المنهل!", paragraphs: [
            "«القَسَم قَسَم!» صاحت امرأة عجوز. «إلى المنهل، يا Bakala!» ردّدت القرية كلّها.",
            "فاضطرّ الحصّاد العظيم، وقد احمرّ حتى أذنيه، أن يلبس الإزار. ونزل إلى الماء، والقرعة على رأسه، تحت ضحكات Kiribounyi كلّها." ] },
          { title: "الضحك يبدّل صفّه", paragraphs: [
            "عندئذٍ رفعت Nana رأسها. لأوّل مرّةٍ منذ عشر سنوات، لم تَعُد هي مَن يُشار إليها بالإصبع.",
            "وضعت Lima يدها على كتف أمّها، وانتصبت الأخوات الثلاث، مستقيماتٍ كالنخيل بعد العاصفة.",
            "لكن على بُعدٍ قليل، كان أحد أبناء Bakala يراقب أباه يحني ظهره تحت الضحك. كان ذلك Sayon — الذي وُلد بعد التوأمين مباشرة. فقبض يديه. «أنتَ، أيّها الرضيع الساحر… سأنتقم منك يومًا ما.»",
            "ابتسم الحكواتي. في ذلك اليوم، في اليوم السابع من حياته، أسكت Taadidi مَن سخروا من أمّه. ودون أن يدري، صنع لنفسه أوّل عدوّ. لكن ذلك، يا أطفالي، حكاية الغد." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "Bakala 的誓言", sections: [
          { title: "彼此相许", paragraphs: [
            "听着，Kiribounyi 以及远方的孩子们。在那个年代，男子在田里赢得妻子。最出色的男子娶最出色的女子，依此类推。",
            "Bakala 是最强壮的收割者。Nana 是众女子之首。人们都说，他们俩彼此相许。" ] },
          { title: "Bakala 的怒火", paragraphs: [
            "可是 Sana 从邻村来了，娶走 Nana 的正是他。从那以后，Bakala 一直憋着一口气。",
            "只是，他不敢对 Sana 怎样，那人太强了。于是整整十年，每生下一个女孩，他就指着 Nana。" ] },
          { title: "第七天", paragraphs: [
            "那天早上，全村都来了。葫芦瓢、可乐果、手鼓。因为 Sana 家终于在庆祝一个男孩。",
            "Bakala 立在宴席中央，五个儿子排在他身后——其中两个是双胞胎。",
            "稍远一些，Lima、Tofan 和 Fanyi 紧紧依偎着母亲。而 Nana 依旧不敢抬头。" ] },
          { title: "是个男孩？那又如何？", paragraphs: [
            "「是个男孩？那又如何？」Bakala 抛出一句。「我有五个。而且不用十年！」",
            "笑声涌起。一如既往，落在 Nana 身上。",
            "可是，一个清亮的小声音从裹着熟睡婴儿的布里传出。「Woyika！」所有人都僵住了。" ] },
          { title: "誓言", paragraphs: [
            "婴儿把又大又黑的眼睛转向 Bakala。「Bakala……你曾发过誓，不是吗？想想看。」",
            "「Nana 给 Sana 生下儿子的那一天，我就系上女人的布裙，跟女人们一起去水塘，打水打到天黑。」",
            "一片深深的寂静落下。这时，所有人都想起了那个誓言。" ] },
          { title: "信守诺言", paragraphs: [
            "Bakala 脸色发白。「我才不听一个婴儿的话！」他怒吼。",
            "Taadidi 歪了歪头。「你跟一个婴儿较劲……你这个从不敢正眼看我父亲的人？」",
            "于是笑声又起。但这一次，没有落在 Nana 身上。落在了 Bakala 身上。" ] },
          { title: "去水塘！", paragraphs: [
            "「誓言就是誓言！」一位老妇人喊道。「去水塘，Bakala！」全村跟着喊起来。",
            "这位伟大的收割者，红到了耳根，只得系上女人的布裙。他朝水边走去，葫芦瓢顶在头上，在全 Kiribounyi 的笑声里。" ] },
          { title: "笑声换了边", paragraphs: [
            "这时 Nana 抬起了头。十年来第一次，被指指点点的不再是她。",
            "Lima 把手搭在母亲肩上，三姐妹挺直了身子，像雨后的棕榈树一样笔直。",
            "可是稍远处，Bakala 的一个儿子，正看着父亲在笑声中弯下腰。那是 Sayon——紧接着双胞胎之后出生的那个。他攥紧了拳头。「你，巫术婴儿……总有一天，我要你还。」",
            "讲故事的人笑了。那一天，在他生命的第七天，Taadidi 让嘲笑母亲的人闭了嘴。而他自己也在不知不觉间，结下了第一个仇敌。但那，孩子们，是明天的故事了。" ] },
        ] },
      },
    },
    {
      numero: 4, statut: "live",
      planche: "/images/taadidi/ep4-planche.png",
      cover: "/images/taadidi/ep4-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Le pari de Sayon", "en": "Sayon's Wager", "ar": "رِهان Sayon", "zh": "Sayon 的赌约"},
      teaser: {"fr": "Sayon défie le bébé : la daba ou la calebasse ? Le piège va se refermer sur celui qui l'a tendu.", "en": "Sayon dares the baby: the hoe or the calabash? The trap will close on the one who set it.", "ar": "يتحدّى Sayon الرضيع: المِعزقة أم القرعة؟ سيُطبق الفخّ على ناصبه.", "zh": "Sayon 向婴儿下战书：锄头还是葫芦瓢？陷阱将反噬设局之人。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le pari de Sayon", sections: [
          { title: "La rancune de Sayon", paragraphs: [
            "Écoutez encore, enfants de Kiribounyi. Bakala avait dû mettre le pagne et puiser l'eau ; mais son fils Sayon, lui, n'avait rien oublié.",
            "Seulement, comme son père, il n'osait pas s'attaquer aux forts. Alors il choisit le plus petit de tous : le bébé.",
            "« Puisque je ne peux pas le battre, se dit-il, je vais montrer à tout le village que ce fils-miracle n'est qu'une fille de plus. »" ] },
          { title: "Le pari", paragraphs: [
            "Le lendemain, devant tout le monde, Sayon prit une voix forte.",
            "« Chez nous, à un vrai garçon, on présente la daba — la houe du champion, comme mon père, et tous ses fils, de vrais garçons ! À une fille, on présente la calebasse. »",
            "« Posons les deux devant ce bébé. S'il prend la calebasse… c'est une fille, et la lignée de Sana, une farce ! »",
            "Le village trouva le pari amusant. On accepta." ] },
          { title: "Le choix", paragraphs: [
            "On posa la daba d'un côté, la calebasse de l'autre, juste devant le nourrisson sur sa natte. Chacun retint son souffle.",
            "Taadidi ouvrit ses grands yeux noirs, regarda les deux objets… « Woyika ! » Et sa petite main se referma sur la calebasse.",
            "Sayon bondit de joie. « Vous voyez ? Une fille ! Rien qu'une fille ! »" ] },
          { title: "La calebasse parle", paragraphs: [
            "Mais Taadidi souriait. « La daba coupe la terre, dit-il. C'est bien. »",
            "« Mais réponds-moi, Sayon. Quand ton père revient du champ, où met-il son grain ? Dans quoi boit-il quand il a soif ? Et avec quoi ta mère t'a-t-elle nourri, depuis le premier jour de ta vie ? »",
            "Sayon resta la bouche ouverte. Il ne trouva rien à répondre." ] },
          { title: "Qui donne la vie", paragraphs: [
            "« La daba prend à la terre, continua le bébé. La calebasse, elle, porte l'eau, porte le grain, porte l'enfant. »",
            "« Sans elle, la moisson de nos parents pourrit au champ. Alors dis-moi : le plus fort, est-ce celui qui coupe… ou celui qui nourrit ? »" ] },
          { title: "Le rire change de camp", paragraphs: [
            "Un grand silence. Puis le village éclata — de rire et d'étonnement.",
            "Sayon était pris à son propre pari. Il avait voulu faire honte au bébé : il ne s'était fait honte qu'à lui-même.",
            "Et il s'en alla, la tête basse, sans demander son reste." ] },
          { title: "La première étincelle", paragraphs: [
            "Un peu à l'écart, Lima, Tofan et Fanyi se regardèrent. Pour la première fois, quelqu'un venait de dire tout haut que ce qu'elles portaient, elles — l'eau, le grain, la vie — était une force.",
            "Et quelque chose, doucement, s'alluma dans leurs yeux.",
            "Le conteur sourit. Sans même quitter sa natte, Taadidi avait encore gagné. Mais les frères de Sayon, eux aussi, regardaient. Et ça, mes enfants, c'est une autre histoire." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Sayon's Wager", sections: [
          { title: "Sayon's Grudge", paragraphs: [
            "Listen again, children of Kiribounyi. Bakala had had to put on the wrapper and draw the water; but his son Sayon had forgotten nothing.",
            "Only, like his father, he did not dare go after the strong. So he chose the smallest of all: the baby.",
            "“Since I cannot beat him,” he told himself, “I'll show the whole village that this miracle son is just one more girl.”" ] },
          { title: "The Wager", paragraphs: [
            "The next day, before everyone, Sayon raised his voice.",
            "“Among us, to a true boy we present the daba — the champion's hoe, like my father, and all his sons, true boys! To a girl we present the calabash.”",
            "“Let us set both before this baby. If he takes the calabash… he is a girl, and Sana's line is a joke!”",
            "The village found the wager amusing. They agreed." ] },
          { title: "The Choice", paragraphs: [
            "They set the daba on one side, the calabash on the other, right before the newborn on his mat. Everyone held their breath.",
            "Taadidi opened his big black eyes, looked at the two objects… “Woyika!” And his little hand closed on the calabash.",
            "Sayon leapt for joy. “You see? A girl! Nothing but a girl!”" ] },
          { title: "The Calabash Speaks", paragraphs: [
            "But Taadidi was smiling. “The daba cuts the earth,” he said. “That is good.”",
            "“But answer me, Sayon. When your father comes back from the field, where does he put his grain? What does he drink from when he is thirsty? And with what did your mother feed you, from the very first day of your life?”",
            "Sayon stood there, mouth open. He found nothing to answer." ] },
          { title: "Who Gives Life", paragraphs: [
            "“The daba takes from the earth,” the baby went on. “The calabash carries the water, carries the grain, carries the child.”",
            "“Without it, our parents' harvest rots in the field. So tell me: the stronger one — is it the one who cuts… or the one who feeds?”" ] },
          { title: "The Laughter Changes Sides", paragraphs: [
            "A deep silence. Then the village burst out — with laughter and astonishment.",
            "Sayon was caught in his own wager. He had meant to shame the baby: he had shamed only himself.",
            "And off he went, head low, without waiting for the rest." ] },
          { title: "The First Spark", paragraphs: [
            "A little apart, Lima, Tofan and Fanyi looked at one another. For the first time, someone had just said aloud that what they carried — the water, the grain, life itself — was a strength.",
            "And something, softly, lit up in their eyes.",
            "The storyteller smiled. Without even leaving his mat, Taadidi had won again. But Sayon's brothers were watching too. And that, my children, is another story." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "رِهان Sayon", sections: [
          { title: "حِقد Sayon", paragraphs: [
            "اسمعوا مرّةً أخرى، يا أطفال Kiribounyi. اضطُرّ Bakala أن يلبس الإزار ويستقي الماء؛ أمّا ابنه Sayon فلم يَنسَ شيئًا.",
            "غير أنّه، مثل أبيه، لم يجرؤ على مواجهة الأقوياء. فاختار أصغر الجميع: الرضيع.",
            "«ما دمتُ لا أستطيع أن أغلبه،» قال في نفسه، «فسأُري القرية كلّها أنّ ابن المعجزة هذا ليس إلّا بنتًا أخرى.»" ] },
          { title: "الرِّهان", paragraphs: [
            "في الغد، أمام الجميع، رفع Sayon صوته.",
            "«عندنا، للولد الحقّ نُقدّم المِعزقة — مِعزقة البطل، مثل أبي وكلّ أبنائه، أولادٌ حقيقيّون! وللبنت نُقدّم القرعة.»",
            "«لنضع الاثنتين أمام هذا الرضيع. إن أخذ القرعة… فهو بنت، ونسل Sana مَهزلة!»",
            "وجدت القرية الرِّهان مُسلّيًا. فقبلوا." ] },
          { title: "الاختيار", paragraphs: [
            "وُضعت المِعزقة من جهة، والقرعة من جهة، أمام الرضيع على حصيرته تمامًا. وحبس الجميع أنفاسهم.",
            "فتح Taadidi عينيه السوداوين الكبيرتين، ونظر إلى الشيئين… «Woyika!» وانطبقت يده الصغيرة على القرعة.",
            "قفز Sayon فرحًا. «أرأيتم؟ بنت! مجرّد بنت!»" ] },
          { title: "القرعة تتكلّم", paragraphs: [
            "لكنّ Taadidi كان يبتسم. «المِعزقة تَشُقّ الأرض،» قال. «هذا حسن.»",
            "«لكن أجِبني، يا Sayon. حين يعود أبوك من الحقل، أين يضع حَبّه؟ وفيمَ يشرب حين يعطش؟ وبماذا أطعمتك أمّك، منذ أوّل يومٍ في حياتك؟»",
            "بقي Sayon فاغرًا فاه. لم يجد ما يُجيب به." ] },
          { title: "مَن يهب الحياة", paragraphs: [
            "«المِعزقة تأخذ من الأرض،» تابع الرضيع. «أمّا القرعة فتحمل الماء، وتحمل الحَبّ، وتحمل الطفل.»",
            "«من دونها، يتعفّن حصاد آبائنا في الحقل. فقل لي: الأقوى، أهو الذي يَشُقّ… أم الذي يُطعِم؟»" ] },
          { title: "الضحك يبدّل صفّه", paragraphs: [
            "صمتٌ عظيم. ثمّ انفجرت القرية — ضحكًا ودهشة.",
            "وقع Sayon في رهانه هو. أراد أن يُخجِل الرضيع: فلم يُخجِل إلّا نفسه.",
            "ومضى، مُطرِق الرأس، دون أن ينتظر شيئًا." ] },
          { title: "الشرارة الأولى", paragraphs: [
            "وعلى جانبٍ قليلًا، تبادلت Lima وTofan وFanyi النظرات. لأوّل مرّة، قال أحدٌ بصوتٍ عالٍ إنّ ما يحملنه هنّ — الماء، والحَبّ، والحياة — قوّة.",
            "وشيءٌ ما، في هدوء، أضاء في عيونهنّ.",
            "ابتسم الحكواتي. دون أن يغادر حتى حصيرته، انتصر Taadidi مرّةً أخرى. لكنّ إخوة Sayon كانوا يراقبون أيضًا. وذلك، يا أطفالي، حكايةٌ أخرى." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "Sayon 的赌约", sections: [
          { title: "Sayon 的记恨", paragraphs: [
            "再听着，Kiribounyi 的孩子们。Bakala 被迫系上布裙、去打水；可他的儿子 Sayon，什么都没忘。",
            "只是，他和父亲一样，不敢去招惹强者。于是他挑了最小的那一个：婴儿。",
            "「既然我打不过他，」他心想，「我就要让全村看看，这个奇迹之子，不过又是一个女孩。」" ] },
          { title: "赌约", paragraphs: [
            "第二天，当着所有人，Sayon 提高了嗓门。",
            "「在我们这儿，给真正的男孩，要献上 daba——冠军的锄头，就像我父亲，还有他所有的儿子，都是真男孩！给女孩，才献上葫芦瓢。」",
            "「把两样都摆在这婴儿面前。要是他拿了葫芦瓢……那他就是个女孩，Sana 的血脉就是个笑话！」",
            "全村觉得这赌约有趣。大家答应了。" ] },
          { title: "选择", paragraphs: [
            "他们把 daba 摆在一边，葫芦瓢摆在另一边，正放在席子上的婴儿面前。人人屏住了呼吸。",
            "Taadidi 睁开又大又黑的眼睛，看了看那两样东西……「Woyika！」他的小手，握住了葫芦瓢。",
            "Sayon 高兴得跳起来。「看见了吧？一个女孩！只是个女孩！」" ] },
          { title: "葫芦瓢说话", paragraphs: [
            "可是 Taadidi 在微笑。「daba 劈开土地，」他说。「这很好。」",
            "「可你回答我，Sayon。你父亲从田里回来，把谷子放进什么里？口渴时用什么喝水？还有，从你生命的第一天起，你母亲用什么喂养你？」",
            "Sayon 张着嘴，愣住了。他什么也答不上来。" ] },
          { title: "谁给予生命", paragraphs: [
            "「daba 向土地索取，」婴儿继续说。「而葫芦瓢，盛水，盛谷，盛婴孩。」",
            "「没有它，父辈的收成就烂在田里。那你告诉我：更强的，是劈砍的那个……还是养育的那个？」" ] },
          { title: "笑声换了边", paragraphs: [
            "一片深深的寂静。接着全村爆发了——又是笑，又是惊。",
            "Sayon 落进了自己设的赌局。他本想羞辱婴儿：到头来只羞辱了自己。",
            "他低着头走开了，没敢多留。" ] },
          { title: "第一束火花", paragraphs: [
            "稍远一些，Lima、Tofan 和 Fanyi 彼此对望。第一次，有人高声说出：她们所承载的——水、谷、生命——是一种力量。",
            "于是有什么，悄悄地，在她们眼里亮了起来。",
            "讲故事的人笑了。连席子都没离开，Taadidi 又赢了一回。可 Sayon 的兄弟们，也在看着。而那，孩子们，是另一个故事了。" ] },
        ] },
      },
    },
    {
      numero: 5, statut: "live",
      planche: "/images/taadidi/ep5-planche.png",
      cover: "/images/taadidi/ep5-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Le bouclier", "en": "The Shield", "ar": "الدرع", "zh": "盾牌"},
      teaser: {"fr": "Les jumeaux de Bakala défient les sœurs : descendre seuls la grande pirogue. Mais l'union est un bouclier.", "en": "Bakala's twins challenge the sisters: drag the great canoe down alone. But unity is a shield.", "ar": "يتحدّى توأما Bakala الأخوات: أن يُنزلن المركب الكبير وحدهنّ. لكنّ الاتّحاد دِرع.", "zh": "Bakala 的双胞胎向姐妹们下战书：独自把大独木舟拖下水。可团结就是一面盾牌。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le bouclier", sections: [
          { title: "Les jumeaux et les sœurs", paragraphs: [
            "Écoutez encore, enfants de Kiribounyi. Un jour, près de la plage, les deux jumeaux de Bakala — Kaly et Kala — barrèrent le chemin aux trois sœurs.",
            "« Des filles, ça ne vaut rien, ricanèrent-ils. Et votre fameux petit frère, entouré de filles, ce sera une mauviette. Une fille de plus, voilà tout. »" ] },
          { title: "Le défi", paragraphs: [
            "« Nous, on est deux, dit Kala. Plus forts qu'une bande de filles. Cette grande pirogue, là, sur le sable — nous deux, on la descend jusqu'à l'eau. Vous, jamais. »",
            "« Si vous y arrivez, on se taira. Sinon, vous direz vous-mêmes que votre frère est une fille. »",
            "Lima, Tofan et Fanyi hésitèrent." ] },
          { title: "La voix du berceau", paragraphs: [
            "Sur le dos de sa mère, le bébé ouvrit les yeux.",
            "« Woyika ! Mes sœurs relèvent le défi. Mais à une seule condition, les jumeaux : on tire ensemble, au même souffle. Pas chacun pour sa gloire. »" ] },
          { title: "Les jumeaux tirent", paragraphs: [
            "Kaly et Kala empoignèrent la corde. Seulement, chacun voulait être le plus fort.",
            "Kala tira le premier, Kaly de son côté ; ils se battaient contre la corde autant que contre la pirogue. Elle racla à peine le sable.",
            "Les jumeaux s'arrêtèrent, à bout de souffle, fâchés l'un contre l'autre." ] },
          { title: "Les sœurs tirent", paragraphs: [
            "Alors Taadidi donna le rythme. « Ho !… Ho !… Ho !… »",
            "Lima, Tofan et Fanyi tirèrent comme une seule personne, au même souffle. La pirogue trembla… puis glissa, toute douce, jusqu'à l'eau.",
            "Le village cria de joie." ] },
          { title: "Le bouclier", paragraphs: [
            "« Vous avez vu ? dit Taadidi. Vous étiez deux, mais chacun pour soi. Elles étaient trois, mais comme une seule. »",
            "« Une fille seule, on peut la moquer. Des sœurs unies, c'est un bouclier. Tant que je serai là, ce bouclier les couvre — et elles me couvrent. »",
            "Kaly et Kala baissèrent les yeux." ] },
          { title: "Le cœur et la rancune", paragraphs: [
            "Et là, une chose étrange arriva. Kaly — celui qui avait tiré le plus doucement — ne pouvait plus détacher ses yeux de Fanyi, la plus douce des sœurs ; et Fanyi, sans trop savoir pourquoi, lui sourit.",
            "Mais Kala et Tofan, la plus belle et la plus fière, se regardèrent comme deux chats. Et depuis ce jour-là, ces deux-là ne purent plus se supporter." ] },
          { title: "La lumière monte", paragraphs: [
            "Le conteur sourit. Cette fois, les sœurs n'avaient pas été défendues : elles avaient gagné.",
            "Et le soleil qu'elles portaient en elles monta d'un cran. Sur le dos de sa mère, Taadidi ferma les yeux, content.",
            "Mais entre les deux maisons, un amour et une haine venaient de naître… et ça, mes enfants, nous donnera bien des histoires." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Shield", sections: [
          { title: "The Twins and the Sisters", paragraphs: [
            "Listen again, children of Kiribounyi. One day, near the beach, Bakala's two twins — Kaly and Kala — blocked the path of the three sisters.",
            "“Girls are worth nothing,” they sneered. “And your famous little brother, surrounded by girls, will be a weakling. One more girl, that's all.”" ] },
          { title: "The Challenge", paragraphs: [
            "“There are two of us,” said Kala. “Stronger than a pack of girls. That great canoe there, on the sand — the two of us will drag it down to the water. You, never.”",
            "“If you manage it, we'll hold our tongues. If not, you yourselves will say your brother is a girl.”",
            "Lima, Tofan and Fanyi hesitated." ] },
          { title: "The Voice from the Cradle", paragraphs: [
            "On his mother's back, the baby opened his eyes.",
            "“Woyika! My sisters take up the challenge. But on one condition, twins: we pull together, on the same breath. Not each for his own glory.”" ] },
          { title: "The Twins Pull", paragraphs: [
            "Kaly and Kala seized the rope. Only, each wanted to be the strongest.",
            "Kala pulled first, Kaly his own way; they fought the rope as much as the canoe. It barely scraped the sand.",
            "The twins stopped, out of breath, angry with each other." ] },
          { title: "The Sisters Pull", paragraphs: [
            "Then Taadidi gave the rhythm. “Ho!… Ho!… Ho!…”",
            "Lima, Tofan and Fanyi pulled as one person, on the same breath. The canoe shuddered… then slid, ever so smooth, down to the water.",
            "The village cried out for joy." ] },
          { title: "The Shield", paragraphs: [
            "“You see?” said Taadidi. “There were two of you, but each for himself. They were three, but as one.”",
            "“A girl alone can be mocked. United sisters are a shield. As long as I am here, this shield covers them — and they cover me.”",
            "Kaly and Kala lowered their eyes." ] },
          { title: "The Heart and the Grudge", paragraphs: [
            "And there, a strange thing happened. Kaly — the one who had pulled the gentlest — could no longer take his eyes off Fanyi, the softest of the sisters; and Fanyi, without quite knowing why, smiled at him.",
            "But Kala and Tofan, the most beautiful and the proudest, looked at each other like two cats. And from that day on, those two could not stand each other." ] },
          { title: "The Light Rises", paragraphs: [
            "The storyteller smiled. This time, the sisters had not been defended: they had won.",
            "And the sun they carried within them rose a notch. On his mother's back, Taadidi closed his eyes, content.",
            "But between the two houses, a love and a hatred had just been born… and that, my children, will give us many a story." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الدرع", sections: [
          { title: "التوأمان والأخوات", paragraphs: [
            "اسمعوا مرّةً أخرى، يا أطفال Kiribounyi. ذات يوم، قرب الشاطئ، سدّ توأما Bakala — Kaly وKala — الطريق على الأخوات الثلاث.",
            "«البنات لا قيمة لهنّ،» قالا ساخرَين. «وأخوكنّ الصغير الشهير، محاطًا بالبنات، سيكون ضعيفًا. مجرّد بنتٍ أخرى، لا أكثر.»" ] },
          { title: "التحدّي", paragraphs: [
            "«نحن اثنان،» قال Kala. «أقوى من حفنة بنات. هذا المركب الكبير، هناك على الرمل — نحن الاثنان نُنزله إلى الماء. أمّا أنتنّ، فلا أبدًا.»",
            "«إن نجحتنّ، صمتنا. وإلّا، فستقلن بأنفسكنّ إنّ أخاكنّ بنت.»",
            "ترددت Lima وTofan وFanyi." ] },
          { title: "صوت من المهد", paragraphs: [
            "على ظهر أمّه، فتح الرضيع عينيه.",
            "«Woyika! أخواتي يقبلن التحدّي. لكن بشرطٍ واحد، أيّها التوأمان: نجرّ معًا، بنَفَسٍ واحد. لا كلٌّ لمجده.»" ] },
          { title: "التوأمان يجرّان", paragraphs: [
            "أمسك Kaly وKala بالحبل. غير أنّ كلًّا منهما أراد أن يكون الأقوى.",
            "جرّ Kala أوّلًا، وKaly من جهته؛ كانا يصارعان الحبل بقدر ما يصارعان المركب. فلم يكد يحتكّ بالرمل.",
            "توقّف التوأمان، لاهثَين، غاضبَين أحدهما من الآخر." ] },
          { title: "الأخوات يجررن", paragraphs: [
            "عندئذٍ أعطى Taadidi الإيقاع. «هو!… هو!… هو!…»",
            "جرّت Lima وTofan وFanyi كشخصٍ واحد، بنَفَسٍ واحد. ارتجف المركب… ثمّ انزلق، رقيقًا تمامًا، حتى الماء.",
            "صاحت القرية فرحًا." ] },
          { title: "الدرع", paragraphs: [
            "«أرأيتم؟» قال Taadidi. «كنتما اثنين، لكن كلٌّ لنفسه. وكنّ ثلاثًا، لكن كشخصٍ واحد.»",
            "«البنت وحدها يُسخَر منها. أمّا الأخوات المتّحدات فدِرع. ما دمتُ هنا، هذا الدرع يحميهنّ — وهنّ يحميْنني.»",
            "أطرق Kaly وKala بأعينهما." ] },
          { title: "القلب والحقد", paragraphs: [
            "وهناك، حدث أمرٌ غريب. Kaly — الذي جرّ بأرفق ما يكون — لم يَعُد يقدر أن يرفع عينيه عن Fanyi، أرقّ الأخوات؛ وFanyi، دون أن تدري تمامًا لماذا، ابتسمت له.",
            "أمّا Kala وTofan، الأجمل والأشدّ كبرياءً، فتبادلا النظر كقطّين. ومنذ ذلك اليوم، لم يعد هذان يطيق أحدهما الآخر." ] },
          { title: "النور يعلو", paragraphs: [
            "ابتسم الحكواتي. هذه المرّة، لم تُدافَع الأخوات: بل انتصرن.",
            "وعلت الشمس التي يحملنها في داخلهنّ درجةً. وعلى ظهر أمّه، أغمض Taadidi عينيه، راضيًا.",
            "لكن بين البيتين، وُلد حبٌّ وحقد… وذلك، يا أطفالي، سيمنحنا حكاياتٍ كثيرة." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "盾牌", sections: [
          { title: "双胞胎与姐妹", paragraphs: [
            "再听着，Kiribounyi 的孩子们。一天，在海滩边，Bakala 的一对双胞胎——Kaly 和 Kala——拦住了三姐妹的去路。",
            "「女孩子，一文不值，」他们冷笑。「你们那位有名的小弟弟，被一群女孩围着，将来准是个软蛋。不过又多一个女孩罢了。」" ] },
          { title: "战书", paragraphs: [
            "「我们有两个，」Kala 说。「比一群女孩强。那边沙滩上那条大独木舟——我们俩，把它拖下水。你们，永远办不到。」",
            "「要是你们办成了，我们就闭嘴。要是办不成，就由你们自己说：你们的弟弟是个女孩。」",
            "Lima、Tofan 和 Fanyi 犹豫了。" ] },
          { title: "摇篮里的声音", paragraphs: [
            "在母亲背上，婴儿睁开了眼睛。",
            "「Woyika！我的姐姐们接下这战书。但有一个条件，双胞胎：我们一起拉，同一口气。不是各拉各的、各争各的荣耀。」" ] },
          { title: "双胞胎拉", paragraphs: [
            "Kaly 和 Kala 抓住绳子。只是，两人都想当最强的那个。",
            "Kala 先拉，Kaly 朝自己那边拉；他们既跟独木舟较劲，也跟绳子较劲。船身几乎没在沙上挪动。",
            "双胞胎停了下来，气喘吁吁，彼此都生着气。" ] },
          { title: "姐妹们拉", paragraphs: [
            "于是 Taadidi 打起了节奏。「嗬！……嗬！……嗬！……」",
            "Lima、Tofan 和 Fanyi 像一个人一样拉，同一口气。独木舟一颤……随后顺顺地滑向了水里。",
            "全村欢呼起来。" ] },
          { title: "盾牌", paragraphs: [
            "「看见了吧？」Taadidi 说。「你们有两个，却各顾各的。她们有三个，却像一个人。」",
            "「一个女孩，独自一人，可以被嘲笑。团结的姐妹，是一面盾牌。只要我在，这面盾牌护着她们——她们也护着我。」",
            "Kaly 和 Kala 垂下了眼睛。" ] },
          { title: "心动与记恨", paragraphs: [
            "就在这时，一件奇怪的事发生了。Kaly——拉得最轻的那一个——再也挪不开盯着 Fanyi 的目光，那是最温柔的姐姐；而 Fanyi，自己也说不清为什么，朝他笑了。",
            "可 Kala 和 Tofan，最美、最骄傲的那一个，彼此对望，像两只猫。从那天起，这两人再也无法相互忍受。" ] },
          { title: "光升起来", paragraphs: [
            "讲故事的人笑了。这一次，姐妹们不是被保护：她们赢了。",
            "她们体内承载的太阳，又升高了一分。在母亲背上，Taadidi 闭上眼睛，心满意足。",
            "可两家之间，一段爱与一段恨刚刚诞生……而那，孩子们，会给我们带来许多故事呢。" ] },
        ] },
      },
    },
    {
      numero: 6, statut: "live",
      planche: "/images/taadidi/ep6-planche.png",
      cover: "/images/taadidi/ep6-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Le bataillon de Sana", "en": "Sana's Battalion", "ar": "كتيبة Sana", "zh": "Sana 的兵团"},
      teaser: {"fr": "Bakala change la règle du championnat pour gagner en nombre. Mais Sana a une réserve qu'il n'avait pas vue : ses filles.", "en": "Bakala changes the championship rules to win by numbers. But Sana has a reserve he never saw: his daughters.", "ar": "يُغيّر Bakala قواعد البطولة ليفوز بالعدد. لكنّ لدى Sana احتياطًا لم يَرَه: بناته.", "zh": "Bakala 改了比赛规则，想以人数取胜。可 Sana 有一支他从未看见的后备力量：他的女儿们。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le bataillon de Sana", sections: [
          { title: "La règle qui change", paragraphs: [
            "Écoutez encore, enfants de Kiribounyi. Autrefois, le championnat de moissons opposait deux hommes seuls, daba contre daba, du lever au coucher du soleil. Sana l'avait gagné chaque année.",
            "Mais Bakala alla trouver le chef avec un beau discours. « Patriarche, dit-il, pourquoi laisser un seul homme suer, quand une famille entière peut produire dix fois plus ? Et puis, au champ, le père enseigne au fils, la mère à la fille : la moisson devient une école. Que le championnat oppose désormais les familles entières, à la quantité. »",
            "L'argument était juste, et le chef l'accepta. Mais Bakala, lui, avait une idée derrière la tête : il avait cinq fils." ] },
          { title: "La revanche", paragraphs: [
            "Car Bakala n'avait qu'une idée : reprendre à Sana le titre qu'il lui enviait. Sana, l'étranger qui l'avait ridiculisé et qui lui avait pris sa promise.",
            "Et surtout, devant tout le village, prouver à Nana qu'elle s'était trompée d'homme." ] },
          { title: "Le souci de Sana", paragraphs: [
            "Sana, lui, n'était pas tranquille. Toute sa vie, il avait gagné par le muscle. Et là, en face : cinq ou six bras solides. De son côté, un nourrisson et des femmes qui, pensait-il, allaient le ralentir.",
            "« Je m'en sortirai seul, se dit-il. Ma femme m'aidera pour le plus léger. Et peut-être que mon fils, qui a parlé en naissant, me trouvera un tour. »" ] },
          { title: "Les pépites", paragraphs: [
            "Mais sur un point, il était décidé : il ne fatiguerait pas ses filles.",
            "« Leurs mains magnifiques n'ont rien à faire avec une daba, se disait-il. Ce sont mes pépites. Elles sont belles, et elles doivent le rester. »" ] },
          { title: "La voix du berceau", paragraphs: [
            "Alors Taadidi parla. « Woyika ! Père, écoute-moi. Une pépite qu'on cache ne brille pour personne. »",
            "« Leurs mains ne sont pas trop belles pour la daba — c'est la daba qui ne les abîmera pas. Ne te prive pas de ta réserve. Tes filles, père… c'est ton bataillon. »" ] },
          { title: "Le grand jour", paragraphs: [
            "Au matin, tout le village était là. D'un côté, Bakala et ses cinq fils, bombant le torse.",
            "De l'autre, Sana, Nana, et — à la surprise de tous — Lima, Tofan et Fanyi, la daba au poing. Sur le dos de sa mère, le bébé veillait." ] },
          { title: "Les fils partent en trombe", paragraphs: [
            "Le chef donna le signal. Les cinq fils se jetèrent sur le champ, chacun voulant couper plus vite que l'autre. En un rien de temps, leur tas montait haut.",
            "« Regarde, Nana ! lança Bakala. Voilà des bras d'hommes ! »" ] },
          { title: "Le chant de Taadidi", paragraphs: [
            "Mais Taadidi ne donnait pas qu'un coup de voix. Sur le dos de sa mère, il chantait — comme un griot qui pousse les paysans au travail.",
            "Il chantait les gloires de la maison : « Filles de Nana ! Votre mère tenait quand les autres lâchaient ! » Puis il encourageait chacune, tout bas : « Ne cours pas, Lima… garde ton souffle, Fanyi… on n'abandonne pas. »",
            "Et il revenait toujours à la même parole : « Ce qui compte, ce n'est pas comment on commence — c'est ce qu'on termine, et de quelle manière. »" ] },
          { title: "Le soleil au zénith", paragraphs: [
            "Au rythme de ce chant, les trois sœurs avançaient, rangée après rangée, sans jamais faiblir.",
            "Mais quand le soleil monta haut, les cinq fils, eux, ralentirent. Ils avaient tout donné trop tôt. Ils soufflaient, se disputaient, l'un accusait l'autre.",
            "Kaly, lui, ralentissait surtout quand son regard croisait Fanyi." ] },
          { title: "Le bataillon fatal", paragraphs: [
            "Au soir, on compta. Le tas des Kala était grand — mais commencé tôt, fini tôt. Celui de Sana, lui, n'avait jamais cessé de monter, et il le dépassait. La force était partie en sprint ; l'endurance avait gagné la journée.",
            "Sana regarda les mains de ses filles, pleines de terre et plus belles que jamais. Il avait failli laisser sa plus grande force au bord du champ. Il prit Nana par l'épaule. « Tu avais bien choisi », dit-il — et Bakala l'entendit.",
            "Le conteur sourit. Des filles avaient gagné le championnat des hommes : ça, le village ne l'oublierait pas. Et le soleil qu'elles portaient monta encore d'un cran." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Sana's Battalion", sections: [
          { title: "The Rule That Changes", paragraphs: [
            "Listen again, children of Kiribounyi. Long ago, the harvest championship pitted two lone men against each other, daba against daba, from sunrise to sunset. Sana had won it every year.",
            "But Bakala went to the chief with a fine speech. “Patriarch,” he said, “why let a single man sweat, when a whole family can produce ten times more? And besides, in the field the father teaches the son, the mother the daughter: the harvest becomes a school. Let the championship now pit whole families against each other, by quantity.”",
            "The argument was sound, and the chief accepted it. But Bakala had an idea up his sleeve: he had five sons." ] },
          { title: "The Revenge", paragraphs: [
            "For Bakala had but one idea: to take back from Sana the title he envied him. Sana, the stranger who had made a fool of him and taken his promised bride.",
            "And above all, before the whole village, to prove to Nana that she had chosen the wrong man." ] },
          { title: "Sana's Worry", paragraphs: [
            "Sana, for his part, was uneasy. All his life he had won by muscle. And now, facing him: five or six solid arms. On his own side, a newborn and women who, he thought, would only slow him down.",
            "“I'll manage alone,” he told himself. “My wife will help with the lightest work. And perhaps my son, who spoke at birth, will find me a trick.”" ] },
          { title: "The Nuggets", paragraphs: [
            "But on one point he was decided: he would not tire his daughters.",
            "“Their lovely hands have no business with a daba,” he thought. “They are my nuggets of gold. They are beautiful, and they must stay so.”" ] },
          { title: "The Voice from the Cradle", paragraphs: [
            "Then Taadidi spoke. “Woyika! Father, listen to me. A nugget that you hide shines for no one.”",
            "“Their hands are not too beautiful for the daba — it is the daba that will not spoil them. Do not deprive yourself of your reserve. Your daughters, father… are your battalion.”" ] },
          { title: "The Big Day", paragraphs: [
            "In the morning, the whole village was there. On one side, Bakala and his five sons, puffing out their chests.",
            "On the other, Sana, Nana, and — to everyone's surprise — Lima, Tofan and Fanyi, daba in hand. On his mother's back, the baby kept watch." ] },
          { title: "The Sons Burst Out", paragraphs: [
            "The chief gave the signal. The five sons threw themselves at the field, each wanting to cut faster than the next. In no time their pile rose high.",
            "“Look, Nana!” called Bakala. “Now those are a man's arms!”" ] },
          { title: "Taadidi's Song", paragraphs: [
            "But Taadidi did more than lend his voice. On his mother's back, he sang — like a griot who drives the farmers on at their work.",
            "He sang the glories of the house: “Daughters of Nana! Your mother held on when others gave up!” Then he encouraged each one, softly: “Don't run, Lima… save your breath, Fanyi… we never give up.”",
            "And he always came back to the same words: “What matters is not how you begin — it is what you finish, and in what way.”" ] },
          { title: "The Sun at Its Peak", paragraphs: [
            "To the rhythm of that song, the three sisters advanced, row after row, never flagging.",
            "But when the sun climbed high, the five sons slowed. They had given everything too soon. They panted, they quarrelled, one blamed the other.",
            "Kaly, for his part, slowed most of all whenever his eyes met Fanyi's." ] },
          { title: "The Fatal Battalion", paragraphs: [
            "At evening, they counted. The pile of Bakala's sons was big — but begun early, finished early. Sana's, on the other hand, had never stopped rising, and it overtook theirs. Strength had set off in a sprint; endurance had won the day.",
            "Sana looked at his daughters' hands, full of earth and more beautiful than ever. He had nearly left his greatest strength at the edge of the field. He took Nana by the shoulder. “You chose well,” he said — and Bakala heard him.",
            "The storyteller smiled. Girls had won the men's championship: that, the village would not forget. And the sun they carried rose one more notch." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "كتيبة Sana", sections: [
          { title: "القاعدة التي تتغيّر", paragraphs: [
            "اسمعوا مرّةً أخرى، يا أطفال Kiribounyi. قديمًا، كانت بطولة الحصاد تجمع بين رجلين منفردين، مِعزقةً ضدّ مِعزقة، من شروق الشمس إلى غروبها. وكان Sana يفوز بها كلّ عام.",
            "لكنّ Bakala ذهب إلى الزعيم بخطابٍ منمّق. «أيّها الشيخ،» قال، «لماذا نَدَع رجلًا واحدًا يتصبّب عرقًا، بينما تستطيع عائلة بأكملها أن تُنتج عشرة أضعاف؟ ثمّ إنّ في الحقل يُعلّم الأب ابنه، والأمّ ابنتها: فيصير الحصاد مدرسة. فلتُجابِه البطولةُ من الآن العائلاتِ بأكملها، بالكمّيّة.»",
            "كانت الحجّة وجيهة، فقبلها الزعيم. لكنّ Bakala كان يُخفي نيّةً: كان لديه خمسة أبناء." ] },
          { title: "الثأر", paragraphs: [
            "فلم يكن لدى Bakala إلّا فكرة واحدة: أن يستردّ من Sana اللقب الذي يحسده عليه. Sana، الغريب الذي أهانه وسلبه خطيبته.",
            "وقبل كلّ شيء، أن يُثبت لـ Nana، أمام القرية كلّها، أنّها أخطأت في اختيار الرجل." ] },
          { title: "قلق Sana", paragraphs: [
            "أمّا Sana فلم يكن مطمئنًّا. طوال حياته فاز بالعضلات. والآن، أمامه: خمسة أو ستّة سواعد قويّة. وفي صفّه: رضيع ونساء، ظنّ أنّهنّ سيُبطّئنه.",
            "«سأتدبّر أمري وحدي،» قال في نفسه. «وزوجتي تُعينني في الأخفّ. ورُبّما يجد لي ابني، الذي تكلّم عند ولادته، حيلةً.»" ] },
          { title: "حبّات الذهب", paragraphs: [
            "لكنّه كان قد حسم أمرًا واحدًا: لن يُتعِب بناته.",
            "«أيديهنّ الجميلة لا شأن لها بالمِعزقة،» قال في نفسه. «إنّهنّ حبّات ذهبي. جميلات، ويجب أن يَبقَين كذلك.»" ] },
          { title: "صوت من المهد", paragraphs: [
            "عندئذٍ تكلّم Taadidi. «Woyika! يا أبي، اسمعني. الحبّة التي تُخبّئها لا تَلمع لأحد.»",
            "«أيديهنّ ليست أجمل من أن تحمل المِعزقة — بل المِعزقة هي التي لن تُؤذيها. لا تحرم نفسك من احتياطك. بناتك، يا أبي… هنّ كتيبتك.»" ] },
          { title: "اليوم الكبير", paragraphs: [
            "في الصباح، كانت القرية كلّها هناك. من جهة، Bakala وأبناؤه الخمسة، ينفخون صدورهم.",
            "ومن الجهة الأخرى، Sana وNana، و— لدهشة الجميع — Lima وTofan وFanyi، والمِعزقة في الأيدي. وعلى ظهر أمّه، كان الرضيع يَرقُب." ] },
          { title: "الأبناء ينطلقون كالعاصفة", paragraphs: [
            "أعطى الزعيم الإشارة. انقضّ الأبناء الخمسة على الحقل، كلٌّ يريد أن يحصد أسرع من الآخر. وفي لمح البصر، علا كومُهم.",
            "«انظري، يا Nana!» صاح Bakala. «هذه سواعد رجال!»" ] },
          { title: "أغنية Taadidi", paragraphs: [
            "لكنّ Taadidi لم يكتفِ بالصوت. على ظهر أمّه، كان يُغنّي — كحكواتيٍّ يحثّ الفلّاحين على العمل.",
            "غنّى أمجاد البيت: «يا بنات Nana! أمّكنّ صمدت حين تخلّى الآخرون!» ثمّ شجّع كلًّا منهنّ، بصوتٍ خفيض: «لا تركضي، يا Lima… وفّري نَفَسك، يا Fanyi… لا نستسلم.»",
            "وكان يعود دائمًا إلى الكلمة ذاتها: «المهمّ ليس كيف تبدأ — بل بماذا تختم، وكيف.»" ] },
          { title: "الشمس في كبد السماء", paragraphs: [
            "على إيقاع تلك الأغنية، تقدّمت الأخوات الثلاث، صفًّا بعد صفّ، دون أن يَهِنّ أبدًا.",
            "لكن حين علت الشمس، تباطأ الأبناء الخمسة. كانوا قد بذلوا كلّ شيء مبكّرًا. لهثوا، وتشاجروا، يتّهم أحدهم الآخر.",
            "أمّا Kaly، فكان يتباطأ خاصّةً كلّما التقت عيناه بعينَي Fanyi." ] },
          { title: "الكتيبة الحاسمة", paragraphs: [
            "في المساء، عدّوا. كان كوم أبناء Bakala كبيرًا — لكنّه بدأ باكرًا وانتهى باكرًا. أمّا كوم Sana فلم يكفّ عن الارتفاع، حتى تجاوزه. انطلقت القوّة في عَدوٍ سريع؛ أمّا التحمّل فربح اليوم.",
            "نظر Sana إلى أيدي بناته، مملوءةً ترابًا وأجملَ من أيّ وقت. كاد يترك أعظم قوّةٍ له عند حافّة الحقل. أمسك Nana من كتفها. «لقد أحسنتِ الاختيار،» قال — وسمعه Bakala.",
            "ابتسم الحكواتي. بناتٌ فُزن ببطولة الرجال: هذا ما لن تنساه القرية. وعلت الشمس التي يحملنها درجةً أخرى." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "Sana 的兵团", sections: [
          { title: "改变的规则", paragraphs: [
            "再听着，Kiribounyi 的孩子们。从前，收割大赛是两个单打独斗的男人对决，锄头对锄头，从日出到日落。每年夺冠的都是 Sana。",
            "可 Bakala 跑去找族长，说了一番漂亮话。「族长，」他说，「为什么让一个男人独自流汗，而一整个家庭能产出十倍呢？再说，在田里，父亲教儿子，母亲教女儿：收割就成了一所学校。从今往后，让比赛以家庭为单位，比数量吧。」",
            "这话在理，族长便答应了。可 Bakala 心里另有盘算：他有五个儿子。" ] },
          { title: "复仇", paragraphs: [
            "因为 Bakala 心里只有一个念头：从 Sana 手里夺回他眼红的那个头衔。Sana，那个让他出丑、又抢走他未婚妻的外乡人。",
            "而最重要的是，要当着全村的面，向 Nana 证明：她选错了男人。" ] },
          { title: "Sana 的忧虑", paragraphs: [
            "Sana 这边，却不踏实。一辈子，他都是靠力气取胜。可如今，对面是五六条结实的胳膊。而他这边，是一个婴儿，还有几个他以为会拖后腿的女人。",
            "「我自己应付得来，」他心想。「轻些的活，让妻子帮把手。也许我那出生就会说话的儿子，能给我想个法子。」" ] },
          { title: "金粒", paragraphs: [
            "但有一点他打定了主意：决不让女儿们劳累。",
            "「她们那么漂亮的手，跟锄头没什么关系，」他想。「她们是我的金粒。她们美，就该一直美下去。」" ] },
          { title: "摇篮里的声音", paragraphs: [
            "于是 Taadidi 开口了。「Woyika！父亲，听我说。藏起来的金粒，不为任何人发光。」",
            "「她们的手，不是美得不能拿锄头——是锄头不会糟蹋它们。别舍弃你的后备力量。父亲，你的女儿们……就是你的兵团。」" ] },
          { title: "大日子", paragraphs: [
            "清晨，全村都到了。一边，是 Bakala 和他五个儿子，挺着胸膛。",
            "另一边，是 Sana、Nana，还有——出乎所有人意料——手握锄头的 Lima、Tofan 和 Fanyi。在母亲背上，婴儿守望着。" ] },
          { title: "儿子们猛冲而出", paragraphs: [
            "族长发令。五个儿子扑向田地，个个都想割得比别人快。转眼间，他们的谷堆就高高垒起。",
            "「看哪，Nana！」Bakala 喊道。「这才是男人的臂膀！」" ] },
          { title: "Taadidi 的歌", paragraphs: [
            "可 Taadidi 不只是出一把声。在母亲背上，他唱了起来——像一个催着农人干活的格里奥说唱人。",
            "他唱着这一家的荣光：「Nana 的女儿们啊！别人撑不住时，你们的母亲撑住了！」接着他低声鼓励每一个：「别跑，Lima……省着气，Fanyi……我们不放弃。」",
            "而他总是回到同一句话：「要紧的不是你怎么开始——而是你怎么收尾，以何种方式收尾。」" ] },
          { title: "烈日当空", paragraphs: [
            "和着那歌声，三姐妹一垄接一垄地往前，从不松劲。",
            "可当太阳升到高处，那五个儿子却慢了下来。他们太早把力气使光了。他们喘着气，互相争吵，一个怪另一个。",
            "至于 Kaly，每当目光撞上 Fanyi，他就慢得格外厉害。" ] },
          { title: "致命的兵团", paragraphs: [
            "到了傍晚，开始清点。Bakala 几个儿子的谷堆很大——可开始得早，也结束得早。而 Sana 这边的谷堆，却一直没停过往上长，最终超过了他们。力气在冲刺中耗尽；耐力赢得了这一天。",
            "Sana 看着女儿们的手，沾满泥土，比以往任何时候都美。他差点把自己最大的力量丢在田边。他搂住 Nana 的肩。「你选对了人，」他说——Bakala 听见了。",
            "讲故事的人笑了。女孩们赢得了男人的比赛：这件事，全村都不会忘记。而她们承载的太阳，又升高了一分。" ] },
        ] },
      },
    },
    {
      numero: 7, statut: "live",
      planche: "/images/taadidi/ep7-planche.png",
      cover: "/images/taadidi/ep7-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Le premier pas", "en": "The First Step", "ar": "الخطوة الأولى", "zh": "第一步"},
      teaser: {"fr": "Un cri sous les néré : la mère des jumeaux est tombée, et ses fils ne savent qu'en faire. C'est l'enfant d'en face qui accourt.", "en": "A cry under the néré trees: the twins' mother has collapsed, and her sons don't know what to do. It's the child from the other house who runs to help.", "ar": "صرخةٌ تحت أشجار néré: أمّ التوأمين قد سقطت، وابناها لا يدريان ماذا يفعلان. والذي يهرع للنجدة هو طفل البيت المقابل.", "zh": "néré 树下一声惊叫：双胞胎的母亲倒下了，两个儿子却手足无措。奔来相救的，是对门那家的孩子。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le premier pas", sections: [
          { title: "Le cri", paragraphs: [
            "Écoutez encore, enfants de Kiribounyi — une dernière fois pour cette lune. Ce jour-là, un cri déchira la brousse, du côté des grands néré.",
            "Sur le dos de sa mère, Taadidi se redressa d'un coup. « Woyika ! » Il glissa à terre et partit en courant vers le cri, droit devant lui. Nana, le cœur battant, s'élança derrière lui." ] },
          { title: "Les jumeaux dépassés", paragraphs: [
            "Sous les néré, une femme était tombée : Makhadi, la femme de Bakala, la mère des jumeaux. À genoux près d'elle, Kaly et Kala tournaient en rond, les mains tremblantes, sans savoir quoi faire.",
            "Toute leur vie, c'était Makhadi qui s'était occupée d'eux. Jamais l'inverse. Et maintenant qu'elle gisait là, ses deux grands fils étaient perdus comme des tout-petits." ] },
          { title: "Soulagé, et fermé", paragraphs: [
            "Quand Kaly vit arriver Taadidi, puis Nana, ce fut comme si sa prière silencieuse était exaucée : enfin, quelqu'un qui saurait.",
            "Mais Kala se dressa devant sa mère. « Ne la touchez pas ! » gronda-t-il. Pas la femme de l'ennemi. Pas eux. Kaly posa la main sur le bras de son frère. « Kala… regarde-la. »" ] },
          { title: "L'arbre est là", paragraphs: [
            "Nana s'agenouilla, calme. « Une chance que l'arbre soit là, dit-elle. Le néré va nous permettre de la réveiller, le temps de la ramener à la maison. » Elle savait : sa grand-mère, autrefois, soignait ainsi.",
            "À ces mots, sans attendre, Taadidi était déjà dans l'arbre, vif comme un écureuil. Il grimpa jusqu'aux branches lourdes de gousses : le sucre du néré rendrait des forces à Makhadi." ] },
          { title: "La décision", paragraphs: [
            "Kala serrait encore les poings. Alors Kaly lui parla tout bas. « Baba est en voyage. Si nous deux on porte notre mère à la maison comme ça, on ne saura rien faire. S'ils veulent nous aider… Dieu merci, Kala. »",
            "Un long silence. Puis Kala détourna les yeux. « Bon. On l'emmène à la maison. Et qu'ils viennent nous aider là-bas. »" ] },
          { title: "Le sucre, puis le feu", paragraphs: [
            "Taadidi fit pleuvoir les gousses. Nana en pressa la pulpe jaune sur les lèvres de Makhadi ; le sucre, doucement, la ranima — juste assez.",
            "« Toi, dit Nana au bébé, cours devant avec une gousse et des feuilles de néré. Dis aux filles de les mettre à bouillir. » Et Taadidi détala vers le village, plus vite que le vent." ] },
          { title: "Fanyi à la porte", paragraphs: [
            "On porta Makhadi jusqu'à sa case. Et pendant que les deux garçons aidaient leur mère à passer le pas de la porte, quelqu'un était déjà là, une gourde fumante entre les mains : Fanyi. Elle avait couru apporter l'infusion.",
            "Kaly leva les yeux vers elle, et ne trouva plus ses mots. On fit boire Makhadi, gorgée après gorgée. Peu à peu, ses forces revinrent. Elle était sauvée." ] },
          { title: "La lune se ferme", paragraphs: [
            "Kala, lui, n'avait pas dit merci : que sa mère doive la vie aux gens d'en face, son orgueil ne le digérait pas encore. Mais Kaly, lui, avait changé.",
            "Le conteur sourit. Ce jour-là, deux grands gaillards avaient appris que veiller sur une mère n'est pas l'affaire des filles — et qu'ils n'en savaient rien.",
            "Le néré, lui, avait montré qu'il ne fait pas que se manger : il sauve. Et Taadidi avait gagné son premier homme, Kaly — par la bonté, pas par la force. À chaque lune, désormais, un cœur de plus se laisserait convaincre… sauf un, le plus dur. Mais le bébé allait grandir, mes enfants. Et ça — c'est la lune prochaine." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The First Step", sections: [
          { title: "The Cry", paragraphs: [
            "Listen again, children of Kiribounyi — one last time for this moon. That day, a cry tore through the bush, over by the great néré trees.",
            "On his mother's back, Taadidi sat up at once. “Woyika!” He slid to the ground and ran toward the cry, straight ahead. Nana, her heart pounding, dashed after him." ] },
          { title: "The Twins Overwhelmed", paragraphs: [
            "Under the néré trees, a woman had fallen: Makhadi, Bakala's wife, the mother of the twins. Kneeling beside her, Kaly and Kala turned in circles, hands shaking, not knowing what to do.",
            "All their lives, it was Makhadi who had cared for them. Never the other way round. And now that she lay there, her two strapping sons were as lost as little children." ] },
          { title: "Relieved, and Closed Off", paragraphs: [
            "When Kaly saw Taadidi coming, then Nana, it was as if his silent prayer had been answered: at last, someone who would know what to do.",
            "But Kala planted himself in front of his mother. “Don't touch her!” he growled. Not the enemy's wife. Not them. Kaly laid a hand on his brother's arm. “Kala… look at her.”" ] },
          { title: "The Tree Is There", paragraphs: [
            "Nana knelt, calm. “Lucky the tree is here,” she said. “The néré will let us wake her, long enough to carry her home.” She knew: her grandmother, long ago, had healed this way.",
            "At her words, without waiting, Taadidi was already up the tree, quick as a squirrel. He climbed to the branches heavy with pods: the sugar of the néré would give Makhadi back her strength." ] },
          { title: "The Decision", paragraphs: [
            "Kala still clenched his fists. So Kaly spoke to him, low. “Baba is away. If the two of us carry our mother home like this, we won't know how to do anything. If they want to help us… thank God, Kala.”",
            "A long silence. Then Kala looked away. “Fine. We take her home. And let them come help us there.”" ] },
          { title: "The Sugar, Then the Fire", paragraphs: [
            "Taadidi rained down the pods. Nana pressed the yellow pulp to Makhadi's lips; the sugar, gently, revived her — just enough.",
            "“You,” Nana said to the baby, “run ahead with a pod and some néré leaves. Tell the girls to set them to boil.” And Taadidi shot off toward the village, faster than the wind." ] },
          { title: "Fanyi at the Door", paragraphs: [
            "They carried Makhadi to her hut. And as the two boys helped their mother across the threshold, someone was already there, a steaming gourd in her hands: Fanyi. She had run to bring the infusion.",
            "Kaly looked up at her, and could find no words. They gave Makhadi the drink, sip by sip. Little by little, her strength returned. She was saved." ] },
          { title: "The Moon Closes", paragraphs: [
            "Kala, for his part, had not said thank you: that his mother owed her life to the people across the way, his pride could not yet swallow. But Kaly had changed.",
            "The storyteller smiled. That day, two strapping lads had learned that watching over a mother is not a girls' business — and that they knew nothing of it.",
            "The néré, for its part, had shown that it is not only to be eaten: it saves. And Taadidi had won his first man, Kaly — by kindness, not by force. From now on, with each moon, one more heart would let itself be won… all but one, the hardest. But the baby was going to grow, my children. And that — is next moon's tale." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الخطوة الأولى", sections: [
          { title: "الصرخة", paragraphs: [
            "اسمعوا مرّةً أخرى، يا أطفال Kiribounyi — للمرّة الأخيرة في هذه اللمحة. في ذلك اليوم، شقّت صرخةٌ الأدغال، من جهة أشجار néré الكبيرة.",
            "على ظهر أمّه، اعتدل Taadidi فجأة. «Woyika!» انزلق إلى الأرض وانطلق يركض نحو الصرخة، مستقيمًا أمامه. وNana، وقلبها يخفق، اندفعت خلفه." ] },
          { title: "التوأمان في حيرة", paragraphs: [
            "تحت أشجار néré، كانت امرأةٌ قد سقطت: Makhadi، زوجة Bakala، أمّ التوأمين. وعلى ركبتيهما قربها، كان Kaly وKala يدوران في مكانهما، وأيديهما ترتجف، لا يدريان ماذا يفعلان.",
            "طوال حياتهما، كانت Makhadi هي التي تعتني بهما. لا العكس أبدًا. والآن وهي ممدّدة هناك، كان ابناها الكبيران ضائعَين كطفلين صغيرين." ] },
          { title: "مرتاحٌ، ومنغلق", paragraphs: [
            "حين رأى Kaly قدوم Taadidi، ثمّ Nana، كان الأمر كأنّ دعاءه الصامت قد استُجيب: أخيرًا، أحدٌ يعرف ما العمل.",
            "لكنّ Kala انتصب أمام أمّه. «لا تلمسوها!» زمجر. لا زوجة العدوّ. ولا هم. وضع Kaly يده على ذراع أخيه. «Kala… انظر إليها.»" ] },
          { title: "الشجرة هناك", paragraphs: [
            "ركعت Nana، هادئة. «من حسن الحظّ أنّ الشجرة هنا،» قالت. «الـ néré سيتيح لنا أن نوقظها، ريثما نحملها إلى البيت.» كانت تعرف: جدّتها، قديمًا، كانت تداوي هكذا.",
            "عند هذه الكلمات، ودون انتظار، كان Taadidi قد صعد الشجرة، رشيقًا كالسنجاب. تسلّق حتى الأغصان المثقلة بالقرون: سكّر الـ néré سيُعيد لـ Makhadi قواها." ] },
          { title: "القرار", paragraphs: [
            "كان Kala ما يزال يشدّ قبضتيه. فكلّمه Kaly بصوتٍ خفيض. «Baba في سفر. إن حملنا أمّنا إلى البيت هكذا، نحن الاثنين، فلن نعرف أن نفعل شيئًا. وإن أرادوا أن يساعدونا… الحمد لله، يا Kala.»",
            "صمتٌ طويل. ثمّ أشاح Kala بعينيه. «حسنًا. نأخذها إلى البيت. وليأتوا يساعدوننا هناك.»" ] },
          { title: "السكّر، ثمّ النار", paragraphs: [
            "أمطر Taadidi القرون. عصرت Nana لُبّها الأصفر على شفتَي Makhadi؛ فأنعشها السكّر، برفق — بما يكفي فقط.",
            "«أنت،» قالت Nana للرضيع، «اركض أمامنا بقرنٍ وبعض أوراق néré. قل للبنات أن يضعنها على النار.» وانطلق Taadidi نحو القرية، أسرع من الريح." ] },
          { title: "Fanyi عند الباب", paragraphs: [
            "حملوا Makhadi إلى كوخها. وبينما كان الولدان يساعدان أمّهما على تجاوز عتبة الباب، كان أحدٌ هناك سلفًا، وفي يديه قرعةٌ يتصاعد منها البخار: Fanyi. كانت قد ركضت لتُحضر النقيع.",
            "رفع Kaly عينيه إليها، فلم يجد كلمات. سُقيت Makhadi، جرعةً بعد جرعة. وشيئًا فشيئًا، عادت إليها قواها. لقد نجت." ] },
          { title: "القمر يأفل", paragraphs: [
            "أمّا Kala فلم يقل شكرًا: أن تدين أمّه بحياتها لأهل الجهة المقابلة، لم يكن كبرياؤه قد هضمه بعد. لكنّ Kaly قد تغيّر.",
            "ابتسم الحكواتي. في ذلك اليوم، تعلّم شابّان قويّان أنّ السهر على أمٍّ ليس شأن البنات — وأنّهما لا يعرفان منه شيئًا.",
            "أمّا الـ néré فقد أرى أنّه ليس للأكل وحده: إنّه يُنقذ. وكان Taadidi قد كسب أوّل رجلٍ له، Kaly — بالبرّ، لا بالقوّة. ومنذ الآن، مع كلّ قمر، سيدع قلبٌ آخر نفسه يُقنَع… إلّا واحدًا، الأشدّ صلابة. لكنّ الرضيع كان سيكبر، يا أطفالي. وذلك — حكاية القمر المقبل." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "第一步", sections: [
          { title: "惊叫", paragraphs: [
            "再听着，Kiribounyi 的孩子们——这轮月亮的最后一回。那一天，一声惊叫划破了灌木丛，就在那几棵大 néré 树那边。",
            "在母亲背上，Taadidi 猛地直起身。「Woyika！」他滑到地上，朝着叫声径直跑去。Nana 心头狂跳，紧追在后。" ] },
          { title: "不知所措的双胞胎", paragraphs: [
            "néré 树下，一个女人倒下了：Makhadi，Bakala 的妻子，双胞胎的母亲。Kaly 和 Kala 跪在她身边，团团打转，双手发抖，不知如何是好。",
            "他们这一辈子，都是 Makhadi 在照顾他们。从没反过来。如今她躺在那里，两个高大的儿子，却像两个小不点一样手足无措。" ] },
          { title: "一个松了口气，一个紧闭心门", paragraphs: [
            "当 Kaly 看见 Taadidi 跑来，接着是 Nana，他仿佛一句没敢说出口的祈祷得到了回应：终于，有个懂的人来了。",
            "可 Kala 挡在母亲面前。「别碰她！」他咆哮。不许敌人的妻子被碰，不许他们碰。Kaly 把手按在哥哥的胳膊上。「Kala……你看看她。」" ] },
          { title: "树就在那里", paragraphs: [
            "Nana 跪下，很镇定。「幸好这树在这儿，」她说。「néré 能让我们把她唤醒，撑到把她抬回家。」她懂：从前，她的祖母就是这样治病的。",
            "话音未落，Taadidi 已经上了树，灵巧得像只松鼠。他爬到挂满豆荚的枝头：néré 的糖，能让 Makhadi 重新有力气。" ] },
          { title: "决定", paragraphs: [
            "Kala 仍攥着拳。于是 Kaly 低声对他说。「Baba 出远门了。要是就我们俩这样把母亲抬回家，我们什么也不会弄。要是他们愿意帮我们……谢天谢地，Kala。」",
            "好一阵沉默。然后 Kala 别过脸去。「行。把她抬回家。让他们到那边来帮我们。」" ] },
          { title: "先是糖，再是火", paragraphs: [
            "Taadidi 把豆荚撒落下来。Nana 把黄色的果肉挤在 Makhadi 唇上；那糖，轻轻地，把她唤醒了——刚好够。",
            "「你，」Nana 对婴儿说，「带一只豆荚和几片 néré 叶子，跑在前头。叫姐姐们把它们煮上。」Taadidi 便朝村子飞奔，比风还快。" ] },
          { title: "门口的 Fanyi", paragraphs: [
            "他们把 Makhadi 抬回她的屋子。就在两个男孩扶着母亲跨过门槛时，已经有人等在那里，手里捧着一只冒着热气的葫芦瓢：Fanyi。她早跑来送药汤了。",
            "Kaly 抬眼望她，一句话也说不出。他们一口一口给 Makhadi 喂下。一点一点，她的力气回来了。她得救了。" ] },
          { title: "月落幕", paragraphs: [
            "至于 Kala，他没有道谢：母亲的命要欠对门那家人，他的傲气还咽不下去。可 Kaly，已经变了。",
            "讲故事的人笑了。那一天，两个高大的小伙子明白了：守护母亲，不是女孩子的事——而他们对此一窍不通。",
            "而那 néré 也表明：它不只是用来吃的，它能救命。Taadidi 赢得了他的第一个男人，Kaly——靠的是善意，不是力气。从此，每一轮月亮，都会有多一颗心被打动……只除了一个，最硬的那个。可婴儿就要长大了，孩子们。而那——是下一轮月亮的故事了。" ] },
        ] },
      },
    },
    {
      numero: 8, statut: "live",
      planche: "/images/taadidi/ep8-planche.png",
      cover: "/images/taadidi/ep8-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Le trésor qu'on jette", "en": "The Treasure We Throw Away", "ar": "الكنز الذي يُرمى", "zh": "被丢掉的宝藏"},
      teaser: {"fr": "Le village tombe malade à cause des cubes du marché. À treize ans, Taadidi a une idée : et si plus personne n'en avait besoin ? Le secret se cache dans ce qu'on jette.", "en": "The village is falling ill because of the market's cubes. At thirteen, Taadidi has an idea: what if no one needed them anymore? The secret hides in what people throw away.", "ar": "القرية تمرض بسبب مكعبات السوق. وفي الثالثة عشرة، يخطر لـ Taadidi فكرة: ماذا لو لم يَعُد أحدٌ بحاجة إليها؟ السرّ مخبوء في ما يُرمى.", "zh": "村子因为市场上的汤块而生起病来。十三岁的 Taadidi 有了个主意：要是再没人需要它呢？秘密，就藏在人们丢掉的东西里。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le trésor qu'on jette", sections: [
          { title: "Le collégien", paragraphs: [
            "Écoutez encore, enfants de Kiribounyi. Le bébé qui parlait avait treize ans, et il était au collège. Il savait lire, et il lisait tout. Mais il restait le même — toujours près des femmes et de ses sœurs, à se demander pourquoi les choses étaient ainsi." ] },
          { title: "Le village malade", paragraphs: [
            "Depuis quelque temps, beaucoup tombaient malades. Têtes lourdes, ventres gros. Un jour, Taadidi lut d'où cela pouvait venir : de ces petits cubes du marché qu'on jette dans toutes les sauces — trop de sel, et des choses dont nul ne connaît la composition." ] },
          { title: "Chez le grossiste", paragraphs: [
            "Il alla droit chez le grossiste qui vendait ces cubes. « Ne vends plus ça, dit-il. Ça rend les gens malades. » L'homme haussa les épaules. « Je ne peux pas ne pas vendre, petit. C'est mon marché. » — « Même si ça rend les gens malades ? » répliqua Taadidi. L'homme se tut. Et Taadidi rentra, le front plissé." ] },
          { title: "La nuit blanche", paragraphs: [
            "Cette nuit-là, il ne dormit pas. Puisqu'on ne pouvait pas faire taire le vendeur, il fallait que plus personne n'ait besoin de lui. Dans le noir, Taadidi calculait même le prix d'un cube." ] },
          { title: "« Maman, combien ? »", paragraphs: [
            "Au matin : « Maman, combien tu achètes le bouillon, au marché ? » — « Mais je n'achète jamais de bouillon, mon fils. Je cuisine au kenda. » — « C'est vrai… C'est pour ça que tout le monde dit que tu es la meilleure cuisinière. »" ] },
          { title: "Meilleur, et moins cher", paragraphs: [
            "« Donc si toutes les familles cuisinaient au kenda, ce serait meilleur ? » — « Et sûrement moins cher », ajouta Lima. — « Ah oui ? Mais pourquoi on achète les cubes, alors ? » — « Parce que c'est trop de travail d'en faire, dit Nana. Et les femmes ont déjà tant à faire. » — « Donc les hommes… et les jeunes… » murmura Taadidi. Et il disparut." ] },
          { title: "La ruse : la grimpe", paragraphs: [
            "Faire le kenda, c'était depuis toujours le travail des femmes ; jamais un homme n'y aurait touché. Alors Taadidi lança un défi. « On dit que les hommes de Kiribounyi sont les plus forts, et leurs fils les plus vaillants. Mais lequel grimpera le plus haut dans les grands néré ? Lequel rapportera le plus de gousses ? » Aussitôt, hommes et garçons : « Moi ! » « Non, moi ! » Et les voilà dans les arbres." ] },
          { title: "Le deuxième défi : le kenda", paragraphs: [
            "Quand les gousses firent des montagnes, Taadidi se tourna vers ceux qui avaient perdu la grimpe. « Vous voulez vous rattraper ? Voici l'autre défi : qui fera la plus grosse quantité de kenda ? » — « Mais on ne sait pas en faire ! » — « Moi, si, dit Taadidi. Et ma maman, et deux autres de vos mamans, sont d'accord pour tout nous expliquer. »" ] },
          { title: "Des fûts, et le respect", paragraphs: [
            "Et ils s'y mirent. On pressa la pulpe douce — un bon jus de néré pour tous — puis on fit bouillir, envelopper, fermenter, cuire les graines, sous l'œil des trois mamans. À suer sur ce travail, les fiers gaillards se turent : « Tout ça… nos mères le font chaque jour ? » Bientôt, il y eut des fûts et des fûts de kenda, et tout le village sentait cette odeur spéciale qui réveille l'appétit. Et l'on aurait dit que, déjà, chacun se sentait mieux." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Treasure We Throw Away", sections: [
          { title: "The Schoolboy", paragraphs: [
            "Listen again, children of Kiribounyi. The baby who once spoke was now thirteen, and he was at school. He could read, and he read everything. But he was still the same — always near the women and his sisters, wondering why things were the way they were." ] },
          { title: "The Village Falls Ill", paragraphs: [
            "For some time now, many had been falling sick. Heavy heads, swollen bellies. One day, Taadidi read where it might come from: those little cubes from the market that people drop into every sauce — too much salt, and things no one knows the makeup of." ] },
          { title: "At the Wholesaler's", paragraphs: [
            "He went straight to the wholesaler who sold those cubes. “Stop selling this,” he said. “It's making people sick.” The man shrugged. “I can't just not sell, little one. It's my trade.” — “Even if it makes people sick?” Taadidi shot back. The man fell silent. And Taadidi went home, his brow furrowed." ] },
          { title: "The Sleepless Night", paragraphs: [
            "That night, he did not sleep. Since the seller could not be silenced, no one must need him anymore. In the dark, Taadidi even worked out the price of a single cube." ] },
          { title: "“Mother, How Much?”", paragraphs: [
            "In the morning: “Mother, how much do you pay for bouillon at the market?” — “But I never buy bouillon, my son. I cook with kenda.” — “That's true… That's why everyone says you're the best cook.”" ] },
          { title: "Better, and Cheaper", paragraphs: [
            "“So if every family cooked with kenda, it would taste better?” — “And surely cost less,” added Lima. — “Oh? Then why do people buy the cubes?” — “Because it's too much work to make,” said Nana. “And the women already have so much to do.” — “So the men… and the young ones…” murmured Taadidi. And he vanished." ] },
          { title: "The Trick: The Climb", paragraphs: [
            "Making kenda had always been women's work; no man would ever have touched it. So Taadidi threw down a challenge. “They say the men of Kiribounyi are the strongest, and their sons the bravest. But who will climb highest in the great néré trees? Who will bring back the most pods?” At once, men and boys: “Me!” “No, me!” And up the trees they went." ] },
          { title: "The Second Challenge: The Kenda", paragraphs: [
            "When the pods made mountains, Taadidi turned to those who had lost the climb. “Want to make up for it? Here's the other challenge: who will make the most kenda?” — “But we don't know how!” — “I do,” said Taadidi. “And my mother, and two of your mothers, have agreed to teach us everything.”" ] },
          { title: "Barrels, and Respect", paragraphs: [
            "And they set to it. They pressed the sweet pulp — good néré juice for everyone — then boiled, wrapped, fermented, and cooked the seeds, under the eyes of the three mothers. Sweating over the work, the proud lads went quiet: “All this… our mothers do every day?” Soon there were barrels upon barrels of kenda, and the whole village smelled that special scent that wakes the appetite. And it already seemed as if everyone felt better." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الكنز الذي يُرمى", sections: [
          { title: "تلميذ المدرسة", paragraphs: [
            "اسمعوا مرّةً أخرى، يا أطفال Kiribounyi. الرضيع الذي كان يتكلّم صار في الثالثة عشرة، وكان في المدرسة. كان يعرف القراءة، وكان يقرأ كلّ شيء. لكنّه بقي كما هو — دائمًا قرب النساء وأخواته، يتساءل لماذا الأمور هكذا." ] },
          { title: "القرية المريضة", paragraphs: [
            "منذ مدّة، كان كثيرون يمرضون. رؤوسٌ ثقيلة، وبطونٌ منتفخة. وذات يوم، قرأ Taadidi من أين قد يأتي ذلك: من تلك المكعّبات الصغيرة في السوق التي تُرمى في كلّ الصلصات — ملحٌ أكثر من اللازم، وأشياء لا أحد يعرف ممّ تتكوّن." ] },
          { title: "عند تاجر الجملة", paragraphs: [
            "ذهب توًّا إلى تاجر الجملة الذي يبيع هذه المكعّبات. «لا تبع هذا بعد الآن، قال. إنّه يمرض الناس.» هزّ الرجل كتفيه. «لا أستطيع ألّا أبيع، يا صغير. هذه تجارتي.» — «حتى لو كان يمرض الناس؟» ردّ Taadidi. صمت الرجل. وعاد Taadidi إلى البيت، وجبينه مقطّب." ] },
          { title: "ليلةٌ بلا نوم", paragraphs: [
            "تلك الليلة، لم ينم. ما دام لا يمكن إسكات البائع، فلا بدّ ألّا يحتاج إليه أحدٌ بعد الآن. وفي العتمة، كان Taadidi يحسب حتى ثمن المكعّب الواحد." ] },
          { title: "«ماما، بكم؟»", paragraphs: [
            "في الصباح: «ماما، بكم تشترين المرق من السوق؟» — «لكنّي لا أشتري المرق أبدًا، يا بنيّ. أنا أطبخ بالـ kenda.» — «صحيح… لهذا يقول الجميع إنّك أفضل طبّاخة.»" ] },
          { title: "أطيب، وأرخص", paragraphs: [
            "«إذًا لو طبخت كلّ العائلات بالـ kenda، لكان الطعام أطيب؟» — «وأرخص بالتأكيد،» أضافت Lima. — «حقًّا؟ فلماذا نشتري المكعّبات إذًا؟» — «لأنّ صنعه شاقّ جدًّا، قالت Nana. والنساء عليهنّ أصلًا الكثير.» — «إذًا الرجال… والشباب…» تمتم Taadidi. ثمّ اختفى." ] },
          { title: "الحيلة: التسلّق", paragraphs: [
            "كان صنع الـ kenda منذ الأزل عمل النساء؛ ما كان رجلٌ ليمسّه قطّ. فأطلق Taadidi تحدّيًا. «يقولون إنّ رجال Kiribounyi هم الأقوى، وأبناءهم هم الأشجع. لكن مَن سيتسلّق أعلى في أشجار néré الكبيرة؟ ومَن سيأتي بأكثر القرون؟» وفورًا، الرجال والصبيان: «أنا!» «لا، أنا!» وها هم في الأشجار." ] },
          { title: "التحدّي الثاني: الـ kenda", paragraphs: [
            "حين صارت القرون جبالًا، التفت Taadidi إلى مَن خسروا التسلّق. «أتريدون أن تعوّضوا؟ هذا هو التحدّي الآخر: مَن سيصنع أكبر كمّيّة من الـ kenda؟» — «لكنّنا لا نعرف صنعه!» — «أنا أعرف، قال Taadidi. وأمّي، وأمّان من أمّهاتكم، موافقات على أن يشرحن لنا كلّ شيء.»" ] },
          { title: "براميل، واحترام", paragraphs: [
            "وشرعوا في العمل. عُصرت اللُّبّة الحلوة — عصير néré طيّب للجميع — ثمّ غُليت الحبوب ولُفّت وخُمّرت وطُبخت، تحت أعين الأمّهات الثلاث. وإذ تصبّبوا عرقًا على هذا العمل، صمت الفتيان الفخورون: «كلّ هذا… أمّهاتنا يفعلنه كلّ يوم؟» وسرعان ما صارت هناك براميل وبراميل من الـ kenda، وفاحت في القرية كلّها تلك الرائحة الخاصّة التي تفتح الشهيّة. وكأنّ الجميع، من الآن، صاروا أحسن حالًا." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "被丢掉的宝藏", sections: [
          { title: "中学生", paragraphs: [
            "再听着，Kiribounyi 的孩子们。那个会说话的婴儿，已经十三岁，在上中学了。他识字，什么都读。可他还是老样子——总在女人和姐姐们身边，琢磨着为什么事情会是这样。" ] },
          { title: "生病的村子", paragraphs: [
            "这阵子，许多人病倒了。头沉沉的，肚子鼓鼓的。一天，Taadidi 读到了病因可能出在哪儿：市场上那种丢进每一锅酱汁里的小方块——盐太多，还有些谁也说不清成分的东西。" ] },
          { title: "在批发商那里", paragraphs: [
            "他径直去找卖这些方块的批发商。「别再卖这个了，」他说。「它让人生病。」那人耸耸肩。「我不能不卖呀，小家伙。这是我的生意。」——「就算它让人生病？」Taadidi 顶了回去。那人沉默了。Taadidi 皱着眉回了家。" ] },
          { title: "不眠之夜", paragraphs: [
            "那一夜，他没睡。既然没法让卖家闭嘴，那就得让谁也不再需要他。在黑暗里，Taadidi 甚至算起了一块方块的价钱。" ] },
          { title: "「妈妈，多少钱？」", paragraphs: [
            "早上：「妈妈，你在市场上买汤块要多少钱？」——「我从不买汤块呀，孩子。我用 kenda 做饭。」——「真的……怪不得大家都说你是最好的厨娘。」" ] },
          { title: "更好，也更便宜", paragraphs: [
            "「那要是家家都用 kenda 做饭，会更好吃？」——「肯定也更便宜，」Lima 补了一句。——「是吗？那大家为什么还买方块？」——「因为做起来太费工了，」Nana 说。「女人们手上的活儿已经够多了。」——「那么男人……还有年轻人……」Taadidi 喃喃道。然后他就不见了。" ] },
          { title: "妙计：爬树", paragraphs: [
            "做 kenda，自古以来都是女人的活儿；男人是从不沾手的。于是 Taadidi 抛出一个挑战。「都说 Kiribounyi 的男人最壮，他们的儿子最勇。可谁能爬到那几棵大 néré 树的最高处？谁能带回最多的豆荚？」立刻，男人和男孩们：「我！」「不，我！」转眼都上了树。" ] },
          { title: "第二个挑战：kenda", paragraphs: [
            "等豆荚堆成了山，Taadidi 转向那些爬树输了的人。「想扳回来吗？这是另一个挑战：谁能做出最多的 kenda？」——「可我们不会做呀！」——「我会，」Taadidi 说。「我妈妈，还有你们两位妈妈，都答应把一切都教给我们。」" ] },
          { title: "一桶桶，和敬意", paragraphs: [
            "于是他们动手了。先榨出甜甜的果肉——给大家来一份上好的 néré 汁——再把豆子煮、包、发酵、烧熟，都在三位妈妈的眼皮底下。在这活儿上累得满头大汗，骄傲的小伙子们都安静了：「这一切……我们的母亲天天都在做？」很快，就有了一桶又一桶的 kenda，整个村子都飘着那股勾人食欲的特别香味。仿佛人人都已经觉得好多了。" ] },
        ] },
      },
    },
    {
      numero: 9, statut: "live",
      planche: "/images/taadidi/ep9-planche.png",
      cover: "/images/taadidi/ep9-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "La même natte", "en": "The Same Mat", "ar": "الحصيرة نفسها", "zh": "同一张席子"},
      teaser: {"fr": "Tout le village a fait son kenda. Reste à le partager : Taadidi invente une fête où chacun mange sur la même natte, et où rien n'est acheté d'ailleurs.", "en": "The whole village has made its kenda. Now to share it: Taadidi invents a feast where everyone eats off the same mat, and nothing is bought from elsewhere.", "ar": "صنعت القرية كلّها الـ kenda. بقي تقاسمه: يبتكر Taadidi وليمةً يأكل فيها الجميع على حصيرةٍ واحدة، ولا يُشترى فيها شيءٌ من الخارج.", "zh": "全村都做好了自己的 kenda。剩下的就是分享：Taadidi 想出一场宴席，人人围着同一张席子吃饭，没有一样东西是从外头买来的。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "La même natte", sections: [
          { title: "Tout ce kenda", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Devant tous ces fûts, Taadidi eut une idée. « Maintenant qu'on a tout ce kenda… et si on poussait nos familles à s'en servir, à la place du bouillon qui coûte bien plus cher ? »" ] },
          { title: "L'aveu des jumeaux", paragraphs: [
            "Kaly éclata de rire. « En vrai… toute la semaine passée, chez nous, c'est comme ça qu'on a cuisiné. » Puis, plus bas : « Et Kala en avait même pris en douce. » Kala devint tout rouge ; son jumeau lui tapota la tête pour le taquiner. Tout le monde rit. « Alors c'est dit, lança Taadidi : on cuisine au kenda. Plus de cubes venus d'ailleurs. »" ] },
          { title: "L'idée de la fête", paragraphs: [
            "« Et puisque la fête approche, reprit-il, et qu'on a tous travaillé ensemble… ce serait bien qu'on se retrouve tous pour manger ensemble, non ? Chacun apporte ce qu'il peut. »" ] },
          { title: "Samba et le fils de l'éleveur", paragraphs: [
            "« Dis à ton père de nous tuer deux de ses plus grands bœufs ! » lança Samba en taquinant le fils de l'éleveur. L'autre rétorqua aussitôt : « Et moi, je donnerais tout pour manger le lafidi de ta maman, ce jour-là ! » On rit — car le plus riche en bœufs rêvait du plat le plus simple." ] },
          { title: "« On ne cuisine pas ça un jour de fête »", paragraphs: [
            "« Le lafidi un jour de fête ? grogna quelqu'un. On ne sert pas ça les jours de fête, voyons. » Et une petite voix, dans un coin, demanda : « Mais… pourquoi, même ? » Et personne ne sut quoi répondre." ] },
          { title: "La vraie fête", paragraphs: [
            "Alors Taadidi sourit. « Parce qu'on croit qu'une fête, c'est montrer qu'on est le plus riche, ou le meilleur. Mais une vraie fête, c'est se réunir et partager ce qu'on a et ce qu'on est. Et le marakoulanyi, justement, tout le monde peut l'apporter. »" ] },
          { title: "Sur la même natte", paragraphs: [
            "Vint le jour de la fête. On étala tout sur une même grande natte. Les plus aisés apportèrent leur viande et en offrirent à tous ; les plus modestes apportèrent ce qu'ils pouvaient, et nul ne fut mis de côté. Chacun se servait de ce qu'il voulait. Mais dans chaque sauce, à la place des cubes, il y avait le kenda du village — celui que tous avaient fait ensemble. Et rien, ce jour-là, n'avait été acheté d'ailleurs." ] },
          { title: "Le goût, et la santé", paragraphs: [
            "Ce fut la plus belle fête depuis longtemps — et tout était bon, et léger : pas de tête lourde, pas de grande soif. « Voilà la nourriture de chez nous, dirent les anciens. Celle qui nourrit sans rendre malade. »" ] },
          { title: "Le trésor qu'on jetait", paragraphs: [
            "Le conteur sourit. Taadidi n'avait pas pu faire taire le vendeur de cubes — alors il avait fait en sorte que personne n'ait plus besoin de lui. Les graines qu'on jetait étaient devenues l'or du village ; les hommes les plus fiers avaient appris, les mains dans la pâte, ce que valent celles qui les nourrissent ; et tout le monde avait mangé sur la même natte. C'était le deuxième secret du néré." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Same Mat", sections: [
          { title: "All That Kenda", paragraphs: [
            "Listen to what came next, children of Kiribounyi. Faced with all those barrels, Taadidi had an idea. “Now that we have all this kenda… what if we got our families to use it, instead of the bouillon that costs so much more?”" ] },
          { title: "The Twins' Confession", paragraphs: [
            "Kaly burst out laughing. “Honestly… all last week, at home, that's how we cooked.” Then, lower: “And Kala even snuck some for himself.” Kala turned bright red; his twin patted his head to tease him. Everyone laughed. “Then it's settled,” said Taadidi: “we cook with kenda. No more cubes from elsewhere.”" ] },
          { title: "The Idea of a Feast", paragraphs: [
            "“And since the festival is near,” he went on, “and we've all worked together… wouldn't it be good to gather and eat together? Everyone brings what they can.”" ] },
          { title: "Samba and the Herder's Son", paragraphs: [
            "“Tell your father to slaughter two of his biggest oxen for us!” called Samba, teasing the herder's son. The other shot back at once: “And I'd give anything to eat your mother's lafidi that day!” Everyone laughed — for the one richest in oxen was dreaming of the simplest dish." ] },
          { title: "“You Don't Cook That on a Feast Day”", paragraphs: [
            "“Lafidi on a feast day?” someone grumbled. “You don't serve that on feast days, come now.” And a small voice, from a corner, asked: “But… why, though?” And no one knew what to answer." ] },
          { title: "The Real Feast", paragraphs: [
            "Then Taadidi smiled. “Because we think a feast means showing who's the richest, or the best. But a real feast is coming together and sharing what we have and what we are. And the marakoulanyi — that, everyone can bring.”" ] },
          { title: "On the Same Mat", paragraphs: [
            "The day of the feast came. Everything was spread on one big mat. The better-off brought their meat and offered it to all; the poorest brought what they could, and no one was left out. Everyone helped themselves to what they liked. But in every sauce, in place of the cubes, was the village's kenda — the one they had all made together. And nothing, that day, had been bought from elsewhere." ] },
          { title: "The Taste, and the Health", paragraphs: [
            "It was the finest feast in a long while — and everything was good, and light: no heavy heads, no great thirst. “This is the food of our own land,” said the elders. “The food that nourishes without making us ill.”" ] },
          { title: "The Treasure They Threw Away", paragraphs: [
            "The storyteller smiled. Taadidi had not been able to silence the cube-seller — so he had made it so that no one needed him anymore. The seeds they used to throw away had become the village's gold; the proudest men had learned, hands in the paste, what those who feed them are worth; and everyone had eaten off the same mat. That was the second secret of the néré." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الحصيرة نفسها", sections: [
          { title: "كلّ هذا الـ kenda", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. أمام كلّ تلك البراميل، خطرت لـ Taadidi فكرة. «الآن وقد صار لدينا كلّ هذا الـ kenda… فماذا لو حثثنا عائلاتنا على استعماله، بدل المرق الذي يكلّف أكثر بكثير؟»" ] },
          { title: "اعتراف التوأمين", paragraphs: [
            "انفجر Kaly ضاحكًا. «بصراحة… الأسبوع الماضي كلّه، في بيتنا، هكذا طبخنا.» ثمّ، بصوتٍ أخفض: «وKala أخذ منه خلسةً حتى.» احمرّ Kala تمامًا؛ وربت أخوه التوأم على رأسه ممازحًا. ضحك الجميع. «إذًا فلْيكن، قال Taadidi: نطبخ بالـ kenda. لا مكعّبات من الخارج بعد اليوم.»" ] },
          { title: "فكرة الوليمة", paragraphs: [
            "«وبما أنّ العيد يقترب، تابع، وقد عملنا جميعًا معًا… أليس من الجميل أن نجتمع كلّنا لنأكل معًا؟ كلٌّ يأتي بما يستطيع.»" ] },
          { title: "Samba وابن الراعي", paragraphs: [
            "«قل لأبيك أن يذبح لنا اثنين من أكبر ثيرانه!» نادى Samba ممازحًا ابن الراعي. فردّ الآخر فورًا: «وأنا، أبذل كلّ شيء لآكل lafidi أمّك في ذلك اليوم!» ضحكوا — فالأغنى بالثيران كان يحلم بأبسط طبق." ] },
          { title: "«لا يُطبخ هذا يوم عيد»", paragraphs: [
            "«الـ lafidi يوم عيد؟ تذمّر أحدهم. لا يُقدَّم هذا أيّام الأعياد، بربّك.» وسأل صوتٌ صغير، في ركن: «لكن… لماذا، أصلًا؟» ولم يعرف أحدٌ بماذا يجيب." ] },
          { title: "الوليمة الحقّة", paragraphs: [
            "فابتسم Taadidi. «لأنّنا نظنّ أنّ العيد هو أن نُظهر مَن الأغنى، أو الأفضل. لكنّ العيد الحقّ هو أن نجتمع ونتقاسم ما نملك وما نكون. والـ marakoulanyi، بالذات، يستطيع كلّ واحد أن يأتي به.»" ] },
          { title: "على الحصيرة نفسها", paragraphs: [
            "جاء يوم العيد. فُرش كلّ شيء على حصيرةٍ واحدة كبيرة. أتى الأيسر حالًا بلحمهم وقدّموه للجميع؛ وأتى الأكثر تواضعًا بما استطاعوا، ولم يُقصَ أحد. كان كلٌّ يأخذ ما يشاء. لكن في كلّ صلصة، بدل المكعّبات، كان هناك kenda القرية — الذي صنعوه جميعًا معًا. ولم يكن شيءٌ، ذلك اليوم، قد اشتُري من الخارج." ] },
          { title: "الطعم، والصحّة", paragraphs: [
            "كانت أجمل وليمةٍ منذ زمن — وكان كلّ شيء طيّبًا، وخفيفًا: لا رؤوس ثقيلة، ولا عطشٌ شديد. «هذا طعام بلادنا، قال الكبار. الطعام الذي يُغذّي دون أن يُمرض.»" ] },
          { title: "الكنز الذي كان يُرمى", paragraphs: [
            "ابتسم الحكواتي. لم يستطع Taadidi إسكات بائع المكعّبات — فجعل ألّا يحتاج إليه أحدٌ بعد الآن. الحبوب التي كانت تُرمى صارت ذهب القرية؛ وأشدّ الرجال فخرًا تعلّموا، وأيديهم في العجين، قيمة اللواتي يُطعمنهم؛ وأكل الجميع على الحصيرة نفسها. كان ذلك سرّ الـ néré الثاني." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "同一张席子", sections: [
          { title: "这么多 kenda", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。望着那一桶桶 kenda，Taadidi 有了个主意。「现在我们有了这么多 kenda……不如劝劝各家都用它，代替那贵得多的汤块，怎么样？」" ] },
          { title: "双胞胎的坦白", paragraphs: [
            "Kaly 哈哈大笑。「说真的……上个礼拜在我们家，一直就是这么做饭的。」接着，压低声音：「Kala 还偷偷拿了点。」Kala 涨红了脸；他的双胞胎兄弟拍拍他的头逗他。大家都笑了。「那就这么定了，」Taadidi 说：「我们用 kenda 做饭。再不要外头来的方块。」" ] },
          { title: "办宴席的主意", paragraphs: [
            "「再说节日快到了，」他接着说，「我们又一起出了力……大家聚在一起吃顿饭，不好吗？各人带上能带的。」" ] },
          { title: "Samba 和牧人的儿子", paragraphs: [
            "「叫你爸宰两头他最大的牛给我们！」Samba 逗着牧人的儿子喊。对方立刻回敬：「我呀，那天能吃上你妈做的 lafidi，什么都肯给！」众人大笑——最有牛的那个，偏偏惦记着最朴素的一道菜。" ] },
          { title: "「过节哪能做这个」", paragraphs: [
            "「过节做 lafidi？」有人嘟囔。「过节可不上这个，得了吧。」角落里一个小小的声音问：「可是……到底为什么呢？」竟没人答得上来。" ] },
          { title: "真正的节日", paragraphs: [
            "于是 Taadidi 笑了。「因为我们以为，节日就是比谁最有钱、谁最厉害。可真正的节日，是聚到一起，分享我们有的、我们是的。而 marakoulanyi，恰恰人人都拿得出。」" ] },
          { title: "在同一张席子上", paragraphs: [
            "节日那天到了。所有东西都摊在同一张大席子上。家境好的带来他们的肉，分给大家；清贫的带来力所能及的，谁也没被撇下。人人各取所好。可每一锅酱汁里，代替方块的，是全村的 kenda——大家一起做出来的那一批。那一天，没有一样东西是从外头买来的。" ] },
          { title: "味道，和健康", paragraphs: [
            "这是好久以来最美的一场宴席——样样都好吃，又清爽：没有沉沉的脑袋，没有难解的口渴。「这才是咱们自家的吃食，」老人们说。「养人，又不让人生病。」" ] },
          { title: "曾被丢掉的宝藏", paragraphs: [
            "讲故事的人笑了。Taadidi 没能让卖方块的人闭嘴——于是他让谁也不再需要他。曾经被丢掉的豆子，成了村子的黄金；最骄傲的男人们，双手沾着面糊，懂得了喂养他们的人有多珍贵；而所有人都在同一张席子上吃了饭。这，就是 néré 的第二个秘密。" ] },
        ] },
      },
    },
    {
      numero: 10, statut: "live",
      planche: "/images/taadidi/ep10-planche.png",
      cover: "/images/taadidi/ep10-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Celui qui ne se trompait jamais", "en": "He Who Was Never Wrong", "ar": "الذي لا يخطئ أبدًا", "zh": "从不出错的人"},
      teaser: {"fr": "Devenu la fierté de Kiribounyi, Taadidi tranche tous les litiges — jusqu'au jour où sa ruse donne un bélier au plus malin, pas au vrai maître. Sa première erreur devant tout le village.", "en": "Now the pride of Kiribounyi, Taadidi settles every dispute — until his cleverness hands a ram to the craftier man, not its true owner. His first mistake before the whole village.", "ar": "وقد صار فخر Kiribounyi، يفصل Taadidi في كلّ نزاع — إلى أن تُسلّم حيلتُه كبشًا للأدهى، لا لصاحبه الحقّ. أوّل خطأ له أمام القرية كلّها.", "zh": "成了 Kiribounyi 的骄傲，Taadidi 裁断每一桩纠纷——直到他的机巧把一头公羊判给了更狡猾的人，而非真正的主人。这是他第一次当着全村出错。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Celui qui ne se trompait jamais", sections: [
          { title: "Tout le monde aime Taadidi", paragraphs: [
            "Écoutez encore, enfants de Kiribounyi. Le temps avait passé, et Taadidi était devenu la fierté du village. Tout le monde l'aimait. Même Sayon, même Kala — eux qui le raillaient autrefois — s'étaient mis à dire du bien de lui. On venait le consulter pour tout : un champ, un mariage, une dispute. Et chaque fois, ses conseils tombaient juste." ] },
          { title: "Le petit sage", paragraphs: [
            "« Demandez à Taadidi, il saura. » C'était devenu la phrase du village. Et lui, à force de toujours avoir raison, en prenait un peu plaisir. Sa tête, sans qu'il le sente, grossissait d'un tout petit peu." ] },
          { title: "Le bélier", paragraphs: [
            "Un jour, deux hommes vinrent à lui, se disputant un beau bélier. « Il est à moi ! » disait l'un. « Non, à moi ! » disait l'autre. Et chacun jurait. « Taadidi tranchera », dirent les gens en se massant autour." ] },
          { title: "Le jugement habile", paragraphs: [
            "Taadidi sourit, content de montrer sa ruse. « Facile. Lâchons le bélier au bout du village. Une bête connaît sa maison : il ira tout droit chez son vrai maître. » On admira : quelle idée ! On lâcha le bélier." ] },
          { title: "Le verdict", paragraphs: [
            "Le bélier trotta, hésita… puis fila vers la cour du premier homme. « Voilà ! déclara Taadidi. Le bélier a parlé. Il est à toi. » L'homme exulta ; l'autre repartit la tête basse, sous les regards. Justice était faite — croyait-on." ] },
          { title: "La vérité", paragraphs: [
            "Mais le lendemain, le second homme revint, avec un témoin. Ce bélier-là, on l'avait nourri une semaine dans la cour du premier, avant la dispute — bien sûr qu'il y retournait ! Le vrai maître, c'était lui, le second. Taadidi avait donné le bélier… au plus malin, pas au plus honnête." ] },
          { title: "On en rit", paragraphs: [
            "Le village rit gentiment. « Même notre petit sage se trompe une fois ! » On rendit le bélier à son vrai maître, et l'affaire en resta là. Taadidi rit avec les autres. Mais quelque chose, tout petit, lui pinça le cœur — la première fois qu'il s'était trompé devant tout le monde." ] },
          { title: "La première fois", paragraphs: [
            "Le conteur, lui, ne riait pas tout à fait. Car c'était la première fois que Taadidi se trompait. Il croyait que ce serait la dernière. Mes enfants… ce n'était que la première." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "He Who Was Never Wrong", sections: [
          { title: "Everyone Loves Taadidi", paragraphs: [
            "Listen again, children of Kiribounyi. Time had passed, and Taadidi had become the pride of the village. Everyone loved him. Even Sayon, even Kala — who once mocked him — had begun to speak well of him. People came to consult him about everything: a field, a marriage, a quarrel. And every time, his advice fell true." ] },
          { title: "The Little Sage", paragraphs: [
            "“Ask Taadidi, he'll know.” It had become the village's saying. And he, from always being right, took a little pleasure in it. His head, without his feeling it, was swelling just a little." ] },
          { title: "The Ram", paragraphs: [
            "One day, two men came to him, quarreling over a fine ram. “It's mine!” said one. “No, mine!” said the other. And each swore it. “Taadidi will decide,” said the people, crowding around." ] },
          { title: "The Clever Judgment", paragraphs: [
            "Taadidi smiled, pleased to show his cunning. “Easy. Let's release the ram at the edge of the village. An animal knows its home: it will go straight to its true owner.” Everyone admired it: what an idea! They released the ram." ] },
          { title: "The Verdict", paragraphs: [
            "The ram trotted, hesitated… then made for the first man's yard. “There!” declared Taadidi. “The ram has spoken. It's yours.” The man rejoiced; the other walked off head down, under everyone's eyes. Justice was done — or so they thought." ] },
          { title: "The Truth", paragraphs: [
            "But the next day, the second man came back, with a witness. That ram had been fed for a week in the first man's yard, before the quarrel — of course it went back there! The true owner was him, the second man. Taadidi had given the ram… to the craftier, not the more honest." ] },
          { title: "They Laugh", paragraphs: [
            "The village laughed gently. “Even our little sage is wrong once!” They returned the ram to its true owner, and the matter ended there. Taadidi laughed with the others. But something, very small, pinched his heart — the first time he had been wrong in front of everyone." ] },
          { title: "The First Time", paragraphs: [
            "The storyteller, though, did not quite laugh. For it was the first time Taadidi had been wrong. He thought it would be the last. My children… it was only the first." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الذي لا يخطئ أبدًا", sections: [
          { title: "الجميع يحبّ Taadidi", paragraphs: [
            "اسمعوا مرّةً أخرى، يا أطفال Kiribounyi. مرّ الزمن، وصار Taadidi فخر القرية. كان الجميع يحبّونه. حتى Sayon، حتى Kala — اللذان كانا يسخران منه — صارا يثنيان عليه. كان الناس يأتون يستشيرونه في كلّ شيء: حقل، زواج، خصام. وفي كلّ مرّة، كانت نصيحته تقع في الصواب." ] },
          { title: "الحكيم الصغير", paragraphs: [
            "«اسألوا Taadidi، هو يعرف.» صارت هذه عبارة القرية. وهو، من كثرة ما يصيب دائمًا، صار يجد في ذلك لذّةً صغيرة. ورأسُه، دون أن يشعر، كان ينتفخ قليلًا." ] },
          { title: "الكبش", paragraphs: [
            "وذات يوم، جاءه رجلان يتنازعان كبشًا جميلًا. «هو لي!» قال الأوّل. «لا، بل لي!» قال الآخر. وكلٌّ يُقسم. «Taadidi سيفصل»، قال الناس وهم يتحلّقون حوله." ] },
          { title: "الحُكم الذكيّ", paragraphs: [
            "ابتسم Taadidi، مسرورًا بأن يُظهر دهاءه. «سهل. لنُطلق الكبش عند طرف القرية. البهيمة تعرف بيتها: ستذهب توًّا إلى صاحبها الحقّ.» أُعجب الناس: يا لها من فكرة! وأطلقوا الكبش." ] },
          { title: "الحُكم يصدر", paragraphs: [
            "هرول الكبش، تردّد… ثمّ انطلق نحو دار الرجل الأوّل. «ها هو! أعلن Taadidi. الكبش نطق. هو لك.» ابتهج الرجل؛ ومضى الآخر مُطرقًا، تحت الأنظار. تحقّق العدل — هكذا ظنّوا." ] },
          { title: "الحقيقة", paragraphs: [
            "لكن في الغد، عاد الرجل الثاني، ومعه شاهد. ذلك الكبش، كان قد أُطعم أسبوعًا في دار الأوّل، قبل الخصام — فبالطبع عاد إليها! الصاحب الحقّ كان هو، الثاني. كان Taadidi قد أعطى الكبش… للأدهى، لا للأصدق." ] },
          { title: "يضحكون", paragraphs: [
            "ضحكت القرية برفق. «حتى حكيمنا الصغير يخطئ مرّة!» أُعيد الكبش إلى صاحبه الحقّ، وانتهى الأمر عند ذلك. ضحك Taadidi مع الآخرين. لكن شيئًا، صغيرًا جدًّا، عصر قلبه — أوّل مرّة يخطئ فيها أمام الجميع." ] },
          { title: "أوّل مرّة", paragraphs: [
            "أمّا الحكواتي، فلم يضحك تمامًا. لأنّها كانت أوّل مرّة يخطئ فيها Taadidi. ظنّ أنّها ستكون الأخيرة. يا أطفالي… لم تكن سوى الأولى." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "从不出错的人", sections: [
          { title: "人人都爱 Taadidi", paragraphs: [
            "再听着，Kiribounyi 的孩子们。时间过去了，Taadidi 成了村子的骄傲。人人都爱他。连 Sayon、连 Kala——从前讥笑他的那两个——也开始说他的好话。人们什么事都来找他商量：一块田、一桩婚事、一场争吵。每一次，他的主意都说得在理。" ] },
          { title: "小圣人", paragraphs: [
            "「问 Taadidi，他准知道。」这成了全村的口头禅。而他，因为总是对，渐渐有点享受其中。他的脑袋，自己也没察觉，悄悄地大了那么一点点。" ] },
          { title: "公羊", paragraphs: [
            "一天，两个男人来找他，为一头漂亮的公羊争执。「是我的！」一个说。「不，是我的！」另一个说。两人都赌咒发誓。「让 Taadidi 来断，」众人围拢过来说。" ] },
          { title: "巧妙的裁决", paragraphs: [
            "Taadidi 笑了，乐得显一显他的机灵。「简单。把羊放到村口去。牲口认得自己的家：它会径直回到真主人那儿。」众人都赞叹：好主意！于是把羊放了。" ] },
          { title: "判决", paragraphs: [
            "公羊小跑着，迟疑了一下……然后朝第一个人的院子奔去。「瞧！」Taadidi 宣布。「羊说话了。它是你的。」那人欣喜若狂；另一个低着头走开，众目睽睽之下。公道得伸了——人们这么以为。" ] },
          { title: "真相", paragraphs: [
            "可第二天，第二个男人回来了，还带着一个证人。那头羊，争执之前在第一个人的院子里喂了整整一周——它当然往那儿跑！真正的主人，是他，第二个人。Taadidi 把羊判给了……更狡猾的，而不是更诚实的。" ] },
          { title: "众人发笑", paragraphs: [
            "全村善意地笑了。「连我们的小圣人也错了一回！」羊还给了真主人，事情就此了结。Taadidi 跟着大家一起笑。可有个很小的东西，揪了一下他的心——这是他头一回当着所有人出错。" ] },
          { title: "第一次", paragraphs: [
            "讲故事的人呢，却没有完全笑出来。因为这是 Taadidi 头一回出错。他以为这会是最后一回。我的孩子们……这才只是第一回。" ] },
        ] },
      },
    },
    {
      numero: 11, statut: "live",
      planche: "/images/taadidi/ep11-planche.png",
      cover: "/images/taadidi/ep11-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Le pont", "en": "The Bridge", "ar": "الجسر", "zh": "桥"},
      teaser: {"fr": "Pour refaire le pont avant les pluies, Taadidi impose sa méthode rapide et écarte le doyen. Trois jours plus tard, un jour de marché, la rivière gonflée emporte tout. Cette fois, personne ne rit.", "en": "To rebuild the bridge before the rains, Taadidi imposes his quick method and brushes aside the eldest builder. Three days later, on market day, the swollen river sweeps it all away. This time, no one laughs.", "ar": "لإعادة بناء الجسر قبل الأمطار، يفرض Taadidi طريقته السريعة ويُقصي شيخ البنّائين. وبعد ثلاثة أيّام، في يوم سوق، يجرف النهرُ المنتفخ كلّ شيء. هذه المرّة، لا أحد يضحك.", "zh": "为了在雨季前重修这座桥，Taadidi 强推他那套又快又巧的办法，把老匠人晾在一边。三天后，赶上集市，涨水的河把一切都冲走了。这一次，没有人笑。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le pont", sections: [
          { title: "Le pont à refaire", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Le vieux pont sur la rivière était fatigué, et il fallait le refaire avant les pluies. Ce pont-là, c'était tout : la route des champs, du marché, du collège. Sans lui, le village serait coupé du monde." ] },
          { title: "L'idée de Taadidi", paragraphs: [
            "Le bélier était déjà oublié. Taadidi, toujours « le petit sage », arriva avec une idée. « Pourquoi bâtir lourd et lentement comme avant ? J'ai une façon plus rapide, plus légère. On aura fini en trois jours. » Les gens applaudirent : quel garçon !" ] },
          { title: "Le doyen hésite", paragraphs: [
            "Mais le doyen des bâtisseurs hocha la tête. « Petit, nos pères faisaient solide, et lentement. La rivière, quand elle se gonfle, ne pardonne pas. » Taadidi sourit, sûr de lui. « Les temps changent, doyen. Fais-moi confiance. » Et le village, charmé, suivit le garçon plutôt que le vieil homme." ] },
          { title: "On bâtit vite", paragraphs: [
            "On bâtit en trois jours, comme promis. Le pont était fin, élégant, joli à voir. Tout le monde était fier ; et Taadidi, la tête plus haute que jamais. Même Sayon et Kala traversèrent en disant : « Bien joué. »" ] },
          { title: "Les premiers jours", paragraphs: [
            "Les premiers jours, tout alla bien. On passait, on repassait, on admirait. « Notre petit sage avait encore raison », disait-on. Personne ne pensait plus au doyen." ] },
          { title: "Le jour de marché", paragraphs: [
            "Puis vint un jour de marché. La pluie était tombée la veille, et la rivière avait grossi, brune et rapide. Le pont était plein de monde, chargé de paniers — et au milieu, une mère et son petit enfant." ] },
          { title: "Le pont cède", paragraphs: [
            "Il y eut un craquement. Un seul. Puis le pont fin et léger plia… et céda. Des cris montèrent. Les paniers, les gens, le petit enfant — tout bascula vers l'eau brune qui courait." ] },
          { title: "Le sauvetage", paragraphs: [
            "Taadidi se jeta le premier dans la rivière. Et le doyen, et les vieux bâtisseurs qu'il avait écartés, plongèrent avec lui. À grand-peine, on rattrapa l'enfant, sa mère, les autres, un par un. Personne ne périt — mais il s'en fallut d'un souffle. Le pont, lui, était emporté. Et les pluies, maintenant, arrivaient pour de bon." ] },
          { title: "Le silence", paragraphs: [
            "Cette fois, personne ne rit. Le village, trempé, tremblant, regardait Taadidi autrement. « On aurait dû t'écouter, doyen », murmura quelqu'un. Taadidi, lui, ne disait rien. Il fixait l'eau brune où, l'instant d'avant, un enfant avait failli disparaître — à cause de son conseil. Et pour la première fois, mes enfants, une peur froide entra dans son cœur." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Bridge", sections: [
          { title: "The Bridge to Rebuild", paragraphs: [
            "Listen to what came next, children of Kiribounyi. The old bridge over the river was worn out, and it had to be rebuilt before the rains. That bridge was everything: the road to the fields, the market, the school. Without it, the village would be cut off from the world." ] },
          { title: "Taadidi's Idea", paragraphs: [
            "The ram was already forgotten. Taadidi, still “the little sage,” came with an idea. “Why build heavy and slow like before? I have a faster, lighter way. We'll be done in three days.” The people applauded: what a boy!" ] },
          { title: "The Elder Hesitates", paragraphs: [
            "But the eldest of the builders shook his head. “Little one, our fathers built solid, and slow. The river, when it swells, does not forgive.” Taadidi smiled, sure of himself. “Times change, elder. Trust me.” And the village, charmed, followed the boy rather than the old man." ] },
          { title: "They Build Fast", paragraphs: [
            "They built in three days, as promised. The bridge was slim, elegant, lovely to see. Everyone was proud; and Taadidi, his head higher than ever. Even Sayon and Kala crossed it, saying: “Well done.”" ] },
          { title: "The First Days", paragraphs: [
            "The first days, all went well. People crossed, recrossed, admired. “Our little sage was right again,” they said. No one thought about the elder anymore." ] },
          { title: "Market Day", paragraphs: [
            "Then came a market day. Rain had fallen the day before, and the river had swollen, brown and fast. The bridge was full of people, laden with baskets — and in the middle, a mother and her little child." ] },
          { title: "The Bridge Gives Way", paragraphs: [
            "There was a crack. A single one. Then the slim, light bridge bent… and gave way. Cries went up. The baskets, the people, the little child — everything toppled toward the running brown water." ] },
          { title: "The Rescue", paragraphs: [
            "Taadidi threw himself into the river first. And the elder, and the old builders he had brushed aside, dived in with him. With great effort, they pulled out the child, its mother, the others, one by one. No one died — but it was a hair's breadth. The bridge, though, was swept away. And the rains, now, were coming in earnest." ] },
          { title: "The Silence", paragraphs: [
            "This time, no one laughed. The village, soaked and trembling, looked at Taadidi differently. “We should have listened to you, elder,” someone murmured. Taadidi said nothing. He stared at the brown water where, a moment before, a child had nearly vanished — because of his advice. And for the first time, my children, a cold fear entered his heart." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الجسر", sections: [
          { title: "الجسر الذي يجب إصلاحه", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. كان الجسر القديم على النهر قد وهَن، وكان لا بدّ من إصلاحه قبل الأمطار. ذلك الجسر كان كلّ شيء: طريق الحقول، والسوق، والمدرسة. بدونه، تنقطع القرية عن العالم." ] },
          { title: "فكرة Taadidi", paragraphs: [
            "كان الكبش قد نُسي. جاء Taadidi، «الحكيم الصغير» دائمًا، بفكرة. «لماذا نبني ثقيلًا وببطء كما في السابق؟ عندي طريقة أسرع، أخفّ. سننتهي في ثلاثة أيّام.» صفّق الناس: يا له من فتى!" ] },
          { title: "الشيخ يتردّد", paragraphs: [
            "لكنّ شيخ البنّائين هزّ رأسه. «يا صغير، آباؤنا كانوا يبنون متينًا، وببطء. النهر، إذا انتفخ، لا يرحم.» ابتسم Taadidi، واثقًا من نفسه. «الزمن يتغيّر، يا شيخ. ثق بي.» والقرية، مأخوذةً، تبعت الفتى لا الشيخ." ] },
          { title: "يبنون بسرعة", paragraphs: [
            "بنوا في ثلاثة أيّام، كما وُعدوا. كان الجسر رفيعًا، أنيقًا، جميل المنظر. كان الجميع فخورين؛ وTaadidi، رأسُه أعلى من أيّ وقت. حتى Sayon وKala عبراه قائلَين: «أحسنت.»" ] },
          { title: "الأيّام الأولى", paragraphs: [
            "في الأيّام الأولى، سار كلّ شيء على ما يُرام. كان الناس يعبرون، ويعودون، ويُعجبون. «حكيمنا الصغير كان على حقّ مرّةً أخرى»، كانوا يقولون. لم يَعُد أحدٌ يفكّر في الشيخ." ] },
          { title: "يوم السوق", paragraphs: [
            "ثمّ جاء يوم سوق. كان المطر قد نزل في اليوم السابق، وانتفخ النهر، عكِرًا سريعًا. كان الجسر مكتظًّا بالناس، محمَّلًا بالسِّلال — وفي الوسط، أمٌّ وطفلها الصغير." ] },
          { title: "الجسر ينهار", paragraphs: [
            "سُمعت طقطقة. واحدة. ثمّ انحنى الجسر الرفيع الخفيف… وانهار. علت الصرخات. السِّلال، الناس، الطفل الصغير — كلّ شيء انقلب نحو الماء العكِر الجاري." ] },
          { title: "الإنقاذ", paragraphs: [
            "ألقى Taadidi بنفسه أوّلًا في النهر. والشيخ، والبنّاؤون العجائز الذين أقصاهم، غطسوا معه. بمشقّة بالغة، انتُشل الطفل، وأمّه، والآخرون، واحدًا واحدًا. لم يهلك أحد — لكن بفارق نَفَس. أمّا الجسر، فقد جرفه الماء. والأمطار، الآن، كانت قادمةً حقًّا." ] },
          { title: "الصمت", paragraphs: [
            "هذه المرّة، لم يضحك أحد. القرية، مبتلّةً مرتجفة، نظرت إلى Taadidi نظرةً أخرى. «كان علينا أن نسمع كلامك، يا شيخ»، همس أحدهم. أمّا Taadidi فلم يقل شيئًا. كان يحدّق في الماء العكِر حيث، قبل لحظة، كاد طفلٌ يختفي — بسبب نصيحته. ولأوّل مرّة، يا أطفالي، دخل خوفٌ باردٌ قلبه." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "桥", sections: [
          { title: "要重修的桥", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。河上那座老桥累垮了，得赶在雨季前重修。那座桥就是一切：通往田地、集市、学校的路。没有它，村子就要与世隔绝。" ] },
          { title: "Taadidi 的主意", paragraphs: [
            "公羊的事已经忘了。Taadidi，还是那个「小圣人」，带着一个主意来了。「干嘛像从前那样又重又慢地造？我有更快、更轻的法子。三天就能完工。」众人鼓掌：好一个孩子！" ] },
          { title: "老匠人迟疑", paragraphs: [
            "可是匠人里的长者摇了摇头。「孩子，我们的父辈造得结实，也造得慢。河水一涨起来，是不留情的。」Taadidi 笑了，信心十足。「时代变了，长者。信我吧。」村子被他说动了，跟了这孩子，没跟那老人。" ] },
          { title: "他们造得飞快", paragraphs: [
            "三天就造好了，说到做到。桥又细又雅，看着真好。人人都自豪；Taadidi 的头，更是抬得比任何时候都高。连 Sayon 和 Kala 走过桥时都说：「干得漂亮。」" ] },
          { title: "起初几天", paragraphs: [
            "起初几天，一切都好。人们来来回回地走，啧啧称赞。「我们的小圣人又说对了，」大家说。再没有人想起那位长者。" ] },
          { title: "集市那天", paragraphs: [
            "后来到了一个集市日。头一天下了雨，河水涨了起来，又浑又急。桥上挤满了人，挑着一篮篮货——正中间，是一位母亲和她的小娃娃。" ] },
          { title: "桥塌了", paragraphs: [
            "「咔」的一声。就一声。然后那又细又轻的桥弯了下去……塌了。喊声四起。篮子、人、那小娃娃——全都翻进了奔流的浑水里。" ] },
          { title: "营救", paragraphs: [
            "Taadidi 第一个跳进河里。那位长者，还有被他晾在一边的老匠人们，也跟着扎了进去。费了九牛二虎之力，才把娃娃、他母亲、其余的人一个个捞上来。没有人丧命——可只差一口气。那座桥，却被冲走了。而雨季，这下，真的来了。" ] },
          { title: "沉默", paragraphs: [
            "这一次，没有人笑。全村人，浑身湿透，哆嗦着，用另一种眼光看 Taadidi。「我们当初该听你的，长者，」有人低声说。Taadidi 什么也没说。他盯着那浑水——就在刚才，一个孩子险些在那里消失——只因他的主意。我的孩子们，那是头一回，一股冰冷的恐惧，钻进了他的心。" ] },
        ] },
      },
    },
    {
      numero: 12, statut: "live",
      planche: "/images/taadidi/ep12-planche.png",
      cover: "/images/taadidi/ep12-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "La mer", "en": "The Sea", "ar": "البحر", "zh": "大海"},
      teaser: {"fr": "Après deux échecs qui l'ont brisé, Taadidi s'isole au bord de la mer. Quand la peur le cloue devant un enfant en danger, il touche le fond — jusqu'à ce qu'une voix de sœur devienne une lampe dans le noir.", "en": "After two failures that broke him, Taadidi shuts himself away by the sea. When fear roots him to the spot before a child in danger, he hits the bottom — until a sister's voice becomes a lamp in the dark.", "ar": "بعد إخفاقين كسراه، ينعزل Taadidi عند البحر. وحين يسمّره الخوف أمام طفلٍ في خطر، يبلغ القاع — إلى أن يصير صوت أختٍ مصباحًا في العتمة.", "zh": "两次失败把他击垮，Taadidi 把自己关在海边。当恐惧让他在一个遇险的孩子面前僵住，他跌到了谷底——直到一个姐姐的声音，成了黑暗里的一盏灯。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "La mer", sections: [
          { title: "L'isolé", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Depuis le pont, Taadidi ne donnait plus un seul conseil. Il fuyait le village et passait ses journées seul, au bord de la mer. C'était, pensait-il, le seul endroit sûr : là, au moins, il n'avait personne à mettre en danger." ] },
          { title: "L'ombre sur la grève", paragraphs: [
            "Le garçon qui avait éclairé tout le village n'était plus qu'une ombre sur le sable. Et Sayon et Kala, qui s'étaient pourtant mis à dire du bien de lui, avaient saisi l'occasion de ses deux bêtises pour recommencer à le clasher : « Le faux sage ! Celui qui a failli noyer le village ! » Leur vieille rancœur était revenue, et personne, désormais, ne les faisait taire. Taadidi, lui, ne répondait plus. Il fixait l'eau, et il se rongeait." ] },
          { title: "Le cri", paragraphs: [
            "Un jour qu'il était là, seul, un cri monta. Tout près du bord, une petite pirogue avait chaviré, et un enfant battait des bras dans l'eau, emporté par le ressac." ] },
          { title: "L'élan", paragraphs: [
            "Le cœur de Taadidi bondit. Vas-y. Tu peux le sauver. Ses jambes s'élancèrent vers l'eau — un pas, deux…" ] },
          { title: "La peur le rattrape", paragraphs: [
            "…et la peur le rattrapa. D'un coup, tout lui revint : le bélier, le pont, l'eau brune où un enfant avait failli disparaître par sa faute. « Et si je rate ? Et si, en m'y jetant, j'aggrave tout ? Tout ce que je touche tue. » Ses pieds se clouèrent dans le sable. Il resta là, tremblant, à mi-chemin." ] },
          { title: "Sauvé sans lui", paragraphs: [
            "Alors un vieux pêcheur, plus loin, plongea sans une seconde d'hésitation, fendit le ressac et ramena l'enfant contre lui. Sauvé. Sain et sauf. Sans Taadidi." ] },
          { title: "Le fond du puits", paragraphs: [
            "Taadidi tomba à genoux sur le sable. Ce n'était pas un mort qu'il avait causé. C'était pire, pour lui : il avait vu un enfant en danger, il avait su qu'il pouvait l'aider… et la peur l'avait empêché de bouger. « Je ne suis même plus bon à ça. » Le malin de Kiribounyi n'était plus rien." ] },
          { title: "Lima arrive", paragraphs: [
            "Mais quelqu'un l'avait suivi, ce jour-là. Quelqu'un qui voyait son frère sombrer depuis des jours et ne le supportait plus. Lima — l'aînée, la résiliente — s'avança sur la grève et vint s'asseoir près de lui, dans le sable." ] },
          { title: "Elle ne gronde pas", paragraphs: [
            "Elle ne le gronda pas. Elle ne lui dit pas « relève-toi ». Elle resta là, contre son épaule, en silence, le temps que la mer respire. Puis, doucement, elle se mit à chanter — comme lui, autrefois, avait chanté pour ses sœurs dans le champ." ] },
          { title: "La griotte", paragraphs: [
            "« Fils de Nana, chantait Lima, toi qui es né en épargnant ta mère ! Toi qui as fait gagner nos filles à la moisson ! Toi qui as délivré le village du poison qui le rendait malade ! » Et elle lui rendit ses propres mots, ceux qu'il leur avait donnés au champ : « Ce qui compte, mon frère, ce n'est pas comment on commence, ni même comment on tombe — c'est ce qu'on termine, et de quelle manière. Une chute n'enterre pas un homme habile. Elle réveille un homme debout. »" ] },
          { title: "La première lueur", paragraphs: [
            "Taadidi releva la tête, à peine. Pour la première fois depuis le pont, l'ombre dans ses yeux trembla — comme une lampe qu'on rallume. La nuit avait été longue. Mais une voix de sœur, mes enfants, c'est une lampe dans le noir. Comment il se releva tout à fait — ça, c'est pour le prochain conte." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Sea", sections: [
          { title: "The Outcast", paragraphs: [
            "Listen to what came next, children of Kiribounyi. Since the bridge, Taadidi gave no more advice. He fled the village and spent his days alone, by the sea. It was, he thought, the only safe place: there, at least, he had no one to put in danger." ] },
          { title: "A Shadow on the Shore", paragraphs: [
            "The boy who had lit up the whole village was now no more than a shadow on the sand. And Sayon and Kala, who had even begun to speak well of him, seized on his two blunders to start tearing him down again: “The false sage! The one who nearly drowned the village!” Their old bitterness was back, and now no one made them stop. Taadidi no longer answered. He stared at the water, and gnawed at himself." ] },
          { title: "The Cry", paragraphs: [
            "One day, as he sat there alone, a cry went up. Close to the shore, a little pirogue had capsized, and a child was flailing in the water, dragged by the undertow." ] },
          { title: "The Surge", paragraphs: [
            "Taadidi's heart leapt. Go. You can save him. His legs sprang toward the water — one step, two…" ] },
          { title: "Fear Catches Up", paragraphs: [
            "…and fear caught up with him. All at once it came rushing back: the ram, the bridge, the brown water where a child had nearly vanished through his fault. “And if I fail? And if, by throwing myself in, I make it all worse? Everything I touch, I kill.” His feet nailed themselves to the sand. He stood there, trembling, halfway." ] },
          { title: "Saved Without Him", paragraphs: [
            "Then an old fisherman, further off, dived without a second's hesitation, cut through the undertow and brought the child back against him. Saved. Safe and sound. Without Taadidi." ] },
          { title: "The Bottom of the Well", paragraphs: [
            "Taadidi dropped to his knees in the sand. It was not a death he had caused. It was worse, for him: he had seen a child in danger, he had known he could help… and fear had kept him from moving. “I'm not even good for that anymore.” The clever one of Kiribounyi was nothing now." ] },
          { title: "Lima Comes", paragraphs: [
            "But someone had followed him that day. Someone who had watched her brother sink for days and could bear it no longer. Lima — the eldest, the resilient one — stepped onto the shore and came to sit beside him, in the sand." ] },
          { title: "She Does Not Scold", paragraphs: [
            "She did not scold him. She did not say “get up.” She stayed there, against his shoulder, in silence, while the sea caught its breath. Then, softly, she began to sing — as he, long ago, had sung for his sisters in the field." ] },
          { title: "The Griotte", paragraphs: [
            "“Son of Nana,” sang Lima, “you who were born sparing your mother! You who made our girls win the harvest! You who freed the village from the poison that made it sick!” And she gave him back his own words, the ones he had given them in the field: “What matters, my brother, is not how one begins, nor even how one falls — it is how one finishes, and in what manner. A fall does not bury a clever man. It wakes a man who stands.”" ] },
          { title: "The First Glimmer", paragraphs: [
            "Taadidi lifted his head, barely. For the first time since the bridge, the shadow in his eyes trembled — like a lamp being relit. The night had been long. But a sister's voice, my children, is a lamp in the dark. How he rose all the way back up — that is for the next tale." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "البحر", sections: [
          { title: "المنعزل", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. منذ الجسر، لم يَعُد Taadidi يُسدي نصيحةً واحدة. كان يهرب من القرية ويقضي أيّامه وحيدًا، عند البحر. كان ذلك، في ظنّه، المكان الآمن الوحيد: هناك، على الأقل، لا أحد يعرّضه للخطر." ] },
          { title: "ظلٌّ على الشاطئ", paragraphs: [
            "الفتى الذي أنار القرية كلّها لم يَعُد سوى ظلٍّ على الرمل. وSayon وKala، اللذان كانا قد بدآ يثنيان عليه، اغتنما زلّتيه ليعودا إلى التهجّم عليه: «الحكيم الزائف! الذي كاد يُغرق القرية!» عادت ضغينتهما القديمة، ولم يَعُد أحدٌ يُسكتهما. أمّا Taadidi، فلم يَعُد يردّ. كان يحدّق في الماء، ويأكل نفسه همًّا." ] },
          { title: "الصرخة", paragraphs: [
            "وذات يومٍ كان فيه هناك، وحيدًا، علت صرخة. قرب الشاطئ، انقلب زورقٌ صغير، وطفلٌ يخبط بذراعيه في الماء، يجرفه الموج المرتدّ." ] },
          { title: "الاندفاع", paragraphs: [
            "وثب قلب Taadidi. هيّا. تستطيع إنقاذه. اندفعت ساقاه نحو الماء — خطوة، خطوتان…" ] },
          { title: "يدركه الخوف", paragraphs: [
            "…وأدركه الخوف. دفعةً واحدة، عاد إليه كلّ شيء: الكبش، الجسر، الماء العكر حيث كاد طفلٌ يختفي بسببه. «وإن فشلت؟ وإن زدتُ الأمر سوءًا برمي نفسي؟ كلّ ما ألمسه أقتله.» تسمّرت قدماه في الرمل. وبقي هناك، مرتجفًا، في منتصف الطريق." ] },
          { title: "نجا من دونه", paragraphs: [
            "عندئذٍ غطس صيّادٌ عجوز، أبعد قليلًا، دون لحظة تردّد، شقّ الموج المرتدّ وأعاد الطفل إلى صدره. نجا. سالمًا. من دون Taadidi." ] },
          { title: "قعر البئر", paragraphs: [
            "سقط Taadidi على ركبتيه في الرمل. لم يكن قد تسبّب في موت. بل كان الأمر أسوأ، بالنسبة إليه: رأى طفلًا في خطر، وعلم أنّه يستطيع مساعدته… ومنعه الخوف من الحراك. «لم أعُد صالحًا حتى لهذا.» لم يَعُد ذكيّ Kiribounyi شيئًا." ] },
          { title: "Lima تأتي", paragraphs: [
            "لكنّ أحدًا تبعه في ذلك اليوم. أحدٌ كان يرى أخاه يغرق منذ أيّام ولم يَعُد يحتمل. Lima — الكبرى، الصبور — تقدّمت على الشاطئ وجاءت تجلس قربه، في الرمل." ] },
          { title: "لا تؤنّبه", paragraphs: [
            "لم تؤنّبه. لم تقل له «انهض». بقيت هناك، إلى كتفه، في صمت، ريثما يتنفّس البحر. ثمّ، بهدوء، أخذت تغنّي — كما كان هو يغنّي، فيما مضى، لأخواته في الحقل." ] },
          { title: "الحكواتية", paragraphs: [
            "«يا ابن Nana، غنّت Lima، يا من وُلدتَ مُبقيًا على أمّك! يا من جعلتَ فتياتنا يفُزن بالحصاد! يا من خلّصتَ القرية من السمّ الذي كان يُمرضها!» وردّت إليه كلماته نفسها، تلك التي أعطاها لهنّ في الحقل: «ما يهمّ، يا أخي، ليس كيف يبدأ المرء، ولا حتى كيف يسقط — بل كيف ينهي، وبأيّ طريقة. السقطة لا تدفن رجلًا حاذقًا. إنّها تُوقظ رجلًا واقفًا.»" ] },
          { title: "أوّل بصيص", paragraphs: [
            "رفع Taadidi رأسه، بالكاد. للمرّة الأولى منذ الجسر، ارتجف الظلّ في عينيه — كمصباحٍ يُضاء من جديد. كان الليل طويلًا. لكنّ صوت أختٍ، يا أطفالي، مصباحٌ في العتمة. أمّا كيف نهض تمامًا — فذلك لحكاية أخرى." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "大海", sections: [
          { title: "孤独的人", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。自从那座桥之后，Taadidi 再不给一句忠告。他躲开村子，整天独自待在海边。他想，这是唯一安全的地方：在这里，至少没有人会被他连累。" ] },
          { title: "沙滩上的影子", paragraphs: [
            "那个曾照亮全村的男孩，如今只剩沙上的一道影子。而 Sayon 和 Kala——本来已经开始说他的好话——抓住他这两桩糗事，又开始数落他：「假圣人！差点淹了全村的家伙！」他们旧日的怨气回来了，再没有人让他们闭嘴。Taadidi 呢，再也不回嘴。他盯着水面，把自己一点点啃噬。" ] },
          { title: "一声喊叫", paragraphs: [
            "一天，他独自坐在那里，一声喊叫传来。就在岸边不远处，一只小独木舟翻了，一个孩子在水里乱扑腾，被回流卷走。" ] },
          { title: "冲动", paragraphs: [
            "Taadidi 的心一跳。去啊。你能救他。他的腿向水里冲去——一步，两步……" ] },
          { title: "恐惧追上来", paragraphs: [
            "……恐惧追上了他。一下子，全涌了回来：那头公羊，那座桥，那浑浊的水里，一个孩子险些因他而消失。「万一我失手呢？万一我跳进去，把一切弄得更糟呢？我碰什么，什么就死。」他的脚钉在了沙里。他僵在那儿，发着抖，停在半途。" ] },
          { title: "没有他，也得救了", paragraphs: [
            "这时，远处一个老渔夫，毫不迟疑地一头扎进去，劈开回流，把孩子搂回怀里。得救了。平安无事。没有 Taadidi。" ] },
          { title: "井底", paragraphs: [
            "Taadidi 跪倒在沙上。他这次没有害死谁。可对他来说更糟：他看见一个孩子遇险，他知道自己能帮……可恐惧让他动弹不得。「我连这个都不中用了。」Kiribounyi 的机灵鬼，如今什么都不是了。" ] },
          { title: "Lima 来了", paragraphs: [
            "可那天，有人跟着他来了。有人眼看着自己的弟弟一连几天往下沉，再也受不了。Lima——长姐，那个坚韧的——走上海滩，挨着他在沙里坐下。" ] },
          { title: "她没有责备", paragraphs: [
            "她没有责备他。她没有说「站起来」。她就待在那儿，靠着他的肩，静静地，等大海喘一口气。然后，轻轻地，她唱了起来——就像他从前在田里为姐姐们唱的那样。" ] },
          { title: "女歌者", paragraphs: [
            "「Nana 之子，」Lima 唱道，「你，生来就护着母亲！你，让我们的姑娘在收割里赢了！你，把村子从那让它生病的毒里解救出来！」她把他自己的话还给了他，就是他当初在田里给她们的那些：「要紧的，我的弟弟，不是怎么开始，甚至不是怎么跌倒——而是怎么收尾，以什么方式收尾。一次跌倒，埋不了一个机敏的人。它唤醒一个站着的人。」" ] },
          { title: "第一缕微光", paragraphs: [
            "Taadidi 微微抬起头。自从那座桥以来第一次，他眼里的阴影颤动了一下——像一盏被重新点亮的灯。夜很长。可是一个姐姐的声音，我的孩子们，是黑暗里的一盏灯。至于他怎么彻底站起来——那，是下一个故事了。" ] },
        ] },
      },
    },
    {
      numero: 13, statut: "live",
      planche: "/images/taadidi/ep13-planche.png",
      cover: "/images/taadidi/ep13-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Le colibri", "en": "The Hummingbird", "ar": "الطائر الطنّان", "zh": "蜂鸟"},
      teaser: {"fr": "De retour au village, tête basse, Taadidi se cache dans un coin désert — et tombe sur deux grands qui harcèlent une fille. Sans se montrer, il fait comme le colibri : juste sa part. Le plus grand bien de sa vie, et personne ne le saura.", "en": "Back in the village, head down, Taadidi hides in a deserted corner — and stumbles on two big boys harassing a girl. Without showing himself, he does as the hummingbird does: just his part. The greatest good of his life, and no one will ever know.", "ar": "عائدًا إلى القرية، مُطرقًا، يختبئ Taadidi في ركنٍ مهجور — فيقع على فتيين كبيرين يتحرّشان بفتاة. دون أن يُظهر نفسه، يفعل كما يفعل الطائر الطنّان: نصيبه فحسب. أعظم خيرٍ في حياته، ولن يعرفه أحدٌ أبدًا.", "zh": "回到村里，低着头，Taadidi 躲进一个没人的角落——却撞见两个大孩子在欺负一个女孩。他没有现身，只做蜂鸟所做的：尽自己那一份。这是他一生中最大的善举，而且永远不会有人知道。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le colibri", sections: [
          { title: "La rentrée, tête basse", paragraphs: [
            "Écoutez encore, enfants de Kiribounyi. Taadidi avait passé le reste des vacances en ville, chez son oncle, recroquevillé, sans goût à rien. Mais la rentrée le ramena au village. Et c'est la tête basse qu'il franchit la porte de l'école, priant le ciel pour que personne, surtout, ne lui demande un conseil ou de l'aide." ] },
          { title: "Fuir les gens", paragraphs: [
            "Pour éviter tout le monde, il se glissa dans un coin désert, du côté des toilettes — moins pour un besoin que pour être seul. Là, au moins, pensait-il, il ne croiserait personne." ] },
          { title: "Des voix", paragraphs: [
            "Mais derrière le mur, il entendit des voix. Une voix de fille. Et deux voix de garçons. Ce n'était pas amical." ] },
          { title: "« Arrêtez »", paragraphs: [
            "La fille répétait : « Arrêtez… arrêtez. » Et les garçons : « On veut juste jouer, tu vas voir. » — « De toute façon, ici, personne ne t'entend. Tu ne peux rien faire. » Deux grands, une fille acculée dans un coin sans témoin." ] },
          { title: "L'ironie", paragraphs: [
            "Et Taadidi comprit, le cœur serré : ce coin désert qu'il cherchait pour fuir les gens, c'était justement là qu'on vient coincer les plus faibles. Sa solitude l'avait conduit pile à l'endroit où l'on avait besoin de lui." ] },
          { title: "Le colibri", paragraphs: [
            "Quelque chose remua en lui. Pas un plan, pas une ruse — juste le petit oiseau qui fait sa part, même minuscule, même brisé. Il ne serait pas le sage. Il ferait seulement ce qui est droit. Mais il ne voulait ni gloire ni merci. Alors il ne prit pas sa voix." ] },
          { title: "Le chant", paragraphs: [
            "Caché derrière le mur, sans se montrer, il se mit à chanter — d'une voix calme et basse, posant chaque mot pour qu'on l'entende bien, comme sa sœur Lima l'avait fait pour lui. « Elle ne veut pas jouer… Non, c'est non. Ce que vous allez faire, vous le regretterez toute votre vie — et elle, vous la marquerez à jamais. Lâchez-la. »" ] },
          { title: "L'impunité brisée", paragraphs: [
            "Les deux garçons se figèrent. « Qui… qui est là ? » Toute leur audace tenait sur une seule chose : que personne ne voyait, qu'elle ne pouvait rien. Et voilà qu'une voix, tranquille et sûre, venait de tout briser : quelqu'un savait." ] },
          { title: "Ils lâchent", paragraphs: [
            "Ils lâchèrent la fille et détalèrent, cherchant des yeux d'où venait ce chant. La fille, libre, s'éloigna en tremblant — secouée, mais sauve. Personne ne l'avait touchée." ] },
          { title: "Sans gloire", paragraphs: [
            "Et Taadidi ? Il resta caché. Personne ne sut que c'était lui. Aucun merci, aucune gloire — et c'était exactement ce qu'il voulait. Le garçon qui avait tant rêvé qu'on l'admire venait d'accomplir le plus grand bien de sa vie, et nul ne le saurait jamais. Le colibri avait fait sa part. Et ce jour-là, mes enfants, sans un seul merci, Taadidi commença pour de vrai à guérir." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Hummingbird", sections: [
          { title: "Back to School, Head Down", paragraphs: [
            "Listen again, children of Kiribounyi. Taadidi had spent the rest of the holidays in town, at his uncle's, curled up, with no taste for anything. But the new term brought him back to the village. And it was with his head down that he stepped through the school gate, praying to heaven that no one, above all, would ask him for advice or help." ] },
          { title: "Avoiding People", paragraphs: [
            "To avoid everyone, he slipped into a deserted corner, over by the toilets — less out of need than to be alone. There, at least, he thought, he would meet no one." ] },
          { title: "Voices", paragraphs: [
            "But behind the wall, he heard voices. A girl's voice. And two boys' voices. It was not friendly." ] },
          { title: "“Stop”", paragraphs: [
            "The girl kept saying: “Stop… stop.” And the boys: “We just want to play, you'll see.” — “Anyway, no one can hear you here. You can't do anything.” Two big boys, a girl cornered in a spot with no witness." ] },
          { title: "The Irony", paragraphs: [
            "And Taadidi understood, his heart tight: this deserted corner he sought to flee people — it was exactly where the weakest are cornered. His solitude had led him to the very place where he was needed." ] },
          { title: "The Hummingbird", paragraphs: [
            "Something stirred in him. Not a plan, not a trick — just the little bird that does its part, however tiny, however broken. He would not be the sage. He would only do what is right. But he wanted neither glory nor thanks. So he did not use his own voice." ] },
          { title: "The Song", paragraphs: [
            "Hidden behind the wall, without showing himself, he began to sing — in a calm, low voice, setting down each word so it would be heard well, as his sister Lima had done for him. “She doesn't want to play… No means no. What you are about to do, you will regret all your life — and her, you will mark forever. Let her go.”" ] },
          { title: "The Impunity Broken", paragraphs: [
            "The two boys froze. “Who… who's there?” All their boldness rested on one thing: that no one saw, that she could do nothing. And now a voice, calm and sure, had just shattered it all: someone knew." ] },
          { title: "They Let Go", paragraphs: [
            "They let go of the girl and bolted, their eyes searching for where the song came from. The girl, free, moved away trembling — shaken, but safe. No one had touched her." ] },
          { title: "Without Glory", paragraphs: [
            "And Taadidi? He stayed hidden. No one knew it was him. No thanks, no glory — and that was exactly what he wanted. The boy who had so dreamed of being admired had just done the greatest good of his life, and no one would ever know. The hummingbird had done its part. And that day, my children, without a single thank-you, Taadidi truly began to heal." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الطائر الطنّان", sections: [
          { title: "العودة إلى المدرسة، مُطرقًا", paragraphs: [
            "اسمعوا مرّةً أخرى، يا أطفال Kiribounyi. كان Taadidi قد قضى بقيّة العطلة في المدينة، عند عمّه، منكمشًا، لا رغبة له في شيء. لكنّ بداية العام أعادته إلى القرية. وبرأسٍ مُطرقٍ عبر باب المدرسة، يدعو السماء ألّا يطلب منه أحد، قبل كلّ شيء، نصيحةً أو عونًا." ] },
          { title: "تجنّب الناس", paragraphs: [
            "تفاديًا للجميع، تسلّل إلى ركنٍ مهجور، ناحية المراحيض — لا لحاجة بقدر ما ليكون وحده. هناك، على الأقل، ظنّ أنّه لن يصادف أحدًا." ] },
          { title: "أصوات", paragraphs: [
            "لكن خلف الجدار، سمع أصواتًا. صوت فتاة. وصوتَي فتيين. لم يكن وُدّيًّا." ] },
          { title: "«توقّفا»", paragraphs: [
            "كانت الفتاة تكرّر: «توقّفا… توقّفا.» والفتيان: «نريد أن نلعب فقط، سترَين.» — «على كلّ حال، لا أحد يسمعك هنا. لا تستطيعين شيئًا.» كبيران، وفتاة محشورة في ركنٍ بلا شاهد." ] },
          { title: "المفارقة", paragraphs: [
            "وأدرك Taadidi، وقلبه يعتصر: هذا الركن المهجور الذي قصده هربًا من الناس، هو بالذات حيث يُحشَر الأضعفون. عزلتُه قادته تمامًا إلى المكان الذي كانوا فيه بحاجة إليه." ] },
          { title: "الطائر الطنّان", paragraphs: [
            "تحرّك شيءٌ في داخله. لا خطّة، لا حيلة — فقط الطائر الصغير الذي يؤدّي نصيبه، مهما كان ضئيلًا، مهما كان منكسرًا. لن يكون الحكيم. سيفعل فقط ما هو مستقيم. لكنّه لم يُرد لا مجدًا ولا شكرًا. فلم يستعمل صوته." ] },
          { title: "الغناء", paragraphs: [
            "مختبئًا خلف الجدار، دون أن يُظهر نفسه، أخذ يغنّي — بصوتٍ هادئ منخفض، يضع كلّ كلمةٍ لتُسمع جيّدًا، كما فعلت أخته Lima من أجله. «هي لا تريد أن تلعب… لا تعني لا. ما أنتما مُقدمان عليه، ستندمان عليه طوال حياتكما — وهي، ستترُكان فيها أثرًا إلى الأبد. اتركاها.»" ] },
          { title: "كسر الإفلات من العقاب", paragraphs: [
            "تجمّد الفتيان. «مَن… مَن هناك؟» كانت كلّ جرأتهما قائمةً على شيءٍ واحد: أنّ لا أحد يرى، وأنّها لا تستطيع شيئًا. وإذا بصوت، هادئٍ واثق، يحطّم كلّ ذلك: أحدٌ يعلم." ] },
          { title: "يتركانها", paragraphs: [
            "تركا الفتاة وفرّا، تبحث أعينهما عن مصدر الغناء. الفتاة، حرّةً، ابتعدت مرتجفة — مصدومةً، لكن سالمة. لم يمسّها أحد." ] },
          { title: "بلا مجد", paragraphs: [
            "وTaadidi؟ بقي مختبئًا. لم يعرف أحدٌ أنّه هو. لا شكر، لا مجد — وذلك بالضبط ما أراد. الفتى الذي طالما حلم بأن يُعجَب به، كان قد صنع للتوّ أعظم خيرٍ في حياته، ولن يعرفه أحدٌ أبدًا. الطائر الطنّان أدّى نصيبه. وفي ذلك اليوم، يا أطفالي، دون كلمة شكرٍ واحدة، بدأ Taadidi يُشفى حقًّا." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "蜂鸟", sections: [
          { title: "开学，低着头", paragraphs: [
            "再听着，Kiribounyi 的孩子们。Taadidi 在城里叔叔家过完了剩下的假期，缩成一团，对什么都提不起劲。可开学把他带回了村子。他低着头跨进校门，一个劲儿祈求上天：千万别有人来找他出主意、求帮忙。" ] },
          { title: "躲开人", paragraphs: [
            "为了躲开所有人，他溜进一个没人的角落，厕所那边——与其说为方便，不如说是想独处。他想，在这儿，至少不会碰上谁。" ] },
          { title: "说话声", paragraphs: [
            "可是墙后面，他听见说话声。一个女孩的声音。还有两个男孩的声音。那口气，不友善。" ] },
          { title: "「住手」", paragraphs: [
            "女孩反复说着：「住手……住手。」男孩们却说：「我们就想玩玩，你瞧着吧。」——「反正在这儿没人听得见你。你什么也做不了。」两个大个子，一个女孩被逼到没有目击者的角落。" ] },
          { title: "讽刺", paragraphs: [
            "Taadidi 心里一紧，明白了：他为了躲人而找的这个没人的角落，正是有人专挑来欺负弱者的地方。他的孤独，偏偏把他领到了最需要他的地方。" ] },
          { title: "蜂鸟", paragraphs: [
            "他心里有什么动了一下。不是计谋，不是诡计——只是那只小鸟，尽自己的一份，哪怕微不足道，哪怕自己也伤着。他不要当什么圣人。他只做正直的事。可他不要荣耀，也不要道谢。于是，他没有用自己的嗓音。" ] },
          { title: "歌声", paragraphs: [
            "藏在墙后，不露面，他唱了起来——声音平静低沉，一字一句放稳，好让人听清，就像姐姐 Lima 当初为他做的那样。「她不想玩……不就是不。你们要做的事，会让你们后悔一辈子——而她，你们会留下永远的伤。放开她。」" ] },
          { title: "打破有恃无恐", paragraphs: [
            "两个男孩僵住了。「谁……谁在那儿？」他们全部的胆量，只建立在一件事上：没人看见，她什么也做不了。如今一个声音，平静而笃定，把这一切击碎了：有人知道。" ] },
          { title: "他们松手", paragraphs: [
            "他们松开女孩，撒腿就跑，眼睛四处找那歌声从哪儿来。女孩自由了，发着抖走开——受了惊，却平安。没有人碰到她。" ] },
          { title: "没有荣耀", paragraphs: [
            "那 Taadidi 呢？他一直藏着。没人知道是他。没有道谢，没有荣耀——而这正是他想要的。那个曾那么渴望被人仰慕的男孩，刚刚做了他一生中最大的善事，而且永远不会有人知道。蜂鸟尽了自己那一份。我的孩子们，就在那一天，没有一句谢谢，Taadidi 才真正开始痊愈。" ] },
        ] },
      },
    },
  ] as Episode[],
};
