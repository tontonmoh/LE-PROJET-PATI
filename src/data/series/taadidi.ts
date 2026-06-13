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
    {
      numero: 14, statut: "live",
      planche: "/images/taadidi/ep14-planche.png",
      cover: "/images/taadidi/ep14-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Les voix du marigot", "en": "The Voices of the Marigot", "ar": "أصوات المنهل", "zh": "水塘边的话语"},
      teaser: {"fr": "Aujourd'hui, pas de Taadidi. Les filles descendent au marigot, calebasse sur la tête, et jouent à leur jeu : un souci, puis une victoire. Jusqu'à ce qu'Adama raconte la « promesse » d'un vieil homme — et la plus belle voix qu'elle ait jamais entendue.", "en": "Today, no Taadidi. The girls go down to the marigot, calabashes on their heads, and play their game: a worry, then a victory. Until Adama tells of an older man's “promise” — and of the most beautiful voice she ever heard.", "ar": "اليوم، لا Taadidi. تنزل الفتيات إلى المنهل، والقِرَع على رؤوسهنّ، يلعبن لعبتهنّ: همٌّ، ثمّ نصر. إلى أن تروي Adama قصّة «وعدٍ» من رجلٍ مُسنّ — وأجملِ صوتٍ سمعته في حياتها.", "zh": "今天，没有 Taadidi。姑娘们顶着葫芦瓢下到水塘，玩她们的游戏：一桩烦恼，一桩胜利。直到 Adama 说起一个老男人的「许诺」——和她这辈子听过的最美的嗓音。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Les voix du marigot", sections: [
          { title: "Le chemin du marigot", paragraphs: [
            "Écoutez, enfants de Kiribounyi. Aujourd'hui, pas de Taadidi. Pas de Sayon, pas de fils de Bakala. Aujourd'hui, c'est l'affaire des filles. Calebasse sur la tête, elles descendent le sentier vers le marigot, en file, en riant. Au marigot, au marigot — l'eau dans la calebasse, et les mots dans le cœur !" ] },
          { title: "Le jeu des soucis et des victoires", paragraphs: [
            "Au bord de l'eau, pendant qu'on remplit les calebasses, c'est toujours le même jeu. Chacune son tour : un souci, puis une victoire. Tofan et Fanyi, les sœurs jumelles, ouvrent le bal. « Mon souci, dit Tofan : notre cabri a mangé le savon. — Et ta victoire ? — Le cabri sent meilleur que mon frère ! » Et le marigot éclata de rire." ] },
          { title: "La ronde des filles", paragraphs: [
            "Saran enchaîna : « Mon souci, j'ai renversé tout le riz. Ma victoire : les poules m'adorent, maintenant ! » Néné leva la main : « Mon souci, j'ai pilé jusqu'à la nuit. Ma victoire : mon foutou était si lisse que ma grand-mère a redemandé deux fois ! » Souci, victoire, souci, victoire — l'eau montait dans les calebasses, et les rires montaient avec." ] },
          { title: "Le tour d'Adama", paragraphs: [
            "Puis vint le tour d'Adama. Elle sourit, mais d'un sourire un peu fatigué. « Mon souci, les filles… c'est mon visage. » On s'arrêta de remplir. « J'ai quinze ans. Mais on m'en donne plus. Alors je récolte des regards qui pèsent, des mots qu'on me jette, des sous-entendus dont je n'ai jamais voulu. »" ] },
          { title: "L'ami du père", paragraphs: [
            "« Et l'autre jour, dit-elle, un ami de mon père. Il faisait semblant de plaisanter. Il m'a “promis” qu'il demanderait ma main. “Comme ça, je te promets” — comme si c'était un cadeau, comme si c'était quelque chose que j'avais réclamé. » Les calebasses ne bougeaient plus. Saran serra les dents. « Un homme de l'âge de ton père… »" ] },
          { title: "La riposte d'Adama", paragraphs: [
            "« Je lui ai répondu, dit Adama, très calme. Je lui ai rappelé que je suis plus jeune que sa dernière fille — celle que j'appelle grande sœur. Et je lui ai demandé : “Alors, dis-moi… elle, elle devra m'appeler comment ? Maman… ou marâtre ?” » Un silence. Puis le marigot tout entier explosa : un grand rire de filles, franc, libérateur, qui fit s'envoler les oiseaux. « Maman ou marâtre ! » répétait Saran en se tenant les côtes. Le vieux, lui, avait dû ravaler sa “promesse”." ] },
          { title: "Adama baisse la voix", paragraphs: [
            "Quand le rire retomba, Adama baissa la voix. « Mais ce n'est pas ça, ma vraie histoire d'aujourd'hui. » Les filles se rapprochèrent, calebasses contre la hanche. « Il y a quelque chose que je n'ai dit à personne. »" ] },
          { title: "La plus belle voix", paragraphs: [
            "« L'autre jour, à l'école, dans un coin où personne ne va… deux garçons. Vous voyez le genre. J'avais peur. Vraiment peur. » Les filles ne riaient plus du tout. « Et là… une voix. Derrière le mur. La plus belle voix que j'aie jamais entendue. Calme, douce — elle chantait presque. Elle leur a dit d'arrêter, que non c'est non. Et ils sont partis en courant. »" ] },
          { title: "Qui était-ce ?", paragraphs: [
            "« Mais qui c'était ? » souffla Fanyi. Adama secoua la tête. « Je n'ai jamais vu. Quand je me suis retournée, il n'y avait plus personne. » Les filles se mirent à deviner — un grand de la classe ? un berger qui passait ? — et chacune y allait de son nom. Tofan et Fanyi cherchaient, elles aussi… sans se douter une seconde de qui pouvait bien chanter ainsi, à voix déguisée, pour disparaître ensuite sans un merci." ] },
          { title: "Le trésor d'Adama", paragraphs: [
            "« Tout ce que je sais, dit Adama, c'est que cette voix-là, je la reconnaîtrais entre mille. » Elle posa la main sur son cœur. « Un jour, je saurai à qui elle appartient. Et ce jour-là… » Elle ne finit pas. Elle souriait, pour de vrai cette fois. Le souci avait fondu ; il restait la victoire — celle d'avoir été défendue par quelqu'un qui n'attendait rien en retour." ] },
          { title: "Le retour", paragraphs: [
            "Les calebasses étaient pleines. Les filles reprirent le sentier, l'eau en équilibre, les rires encore dans la gorge. Au marigot, au marigot — l'eau dans la calebasse, et les mots dans le cœur ! Car au marigot, mes enfants, les filles portent bien plus que de l'eau : elles se portent les unes les autres. Et quelque part, un garçon qui avait chanté puis fui ne saurait jamais qu'il avait rendu à Adama… son rire." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Voices of the Marigot", sections: [
          { title: "The Path to the Marigot", paragraphs: [
            "Listen, children of Kiribounyi. Today, no Taadidi. No Sayon, no sons of Bakala. Today, it's the girls' affair. Calabashes on their heads, they go down the path to the marigot, in a line, laughing. To the marigot, to the marigot — water in the calabash, and words in the heart!" ] },
          { title: "The Game of Worries and Victories", paragraphs: [
            "At the water's edge, while they fill the calabashes, it's always the same game. Each in turn: a worry, then a victory. Tofan and Fanyi, the twin sisters, open the dance. “My worry,” says Tofan: “our kid goat ate the soap. — And your victory? — The kid smells better than my brother!” And the marigot burst out laughing." ] },
          { title: "The Girls' Round", paragraphs: [
            "Saran went next: “My worry, I spilled all the rice. My victory: the hens adore me now!” Néné raised her hand: “My worry, I pounded until nightfall. My victory: my foutou was so smooth that my grandmother asked for more twice!” Worry, victory, worry, victory — the water rose in the calabashes, and the laughter rose with it." ] },
          { title: "Adama's Turn", paragraphs: [
            "Then came Adama's turn. She smiled, but with a slightly tired smile. “My worry, girls… is my face.” They stopped filling. “I'm fifteen. But people think I'm older. So I gather heavy stares, words thrown at me, hints I never asked for.”" ] },
          { title: "Her Father's Friend", paragraphs: [
            "“And the other day,” she said, “a friend of my father's. He pretended to joke. He ‘promised' me he would ask for my hand. ‘Just like that, I promise you' — as if it were a gift, as if it were something I had asked for.” The calabashes no longer moved. Saran clenched her teeth. “A man your father's age…”" ] },
          { title: "Adama's Comeback", paragraphs: [
            "“I answered him,” said Adama, very calm. “I reminded him that I'm younger than his youngest daughter — the one I call big sister. And I asked him: ‘So tell me… what will she have to call me? Mum… or stepmother?'” A silence. Then the whole marigot exploded: a great girls' laugh, frank, freeing, that sent the birds flying. “Mum or stepmother!” Saran kept repeating, holding her sides. The old man had had to swallow his ‘promise.'" ] },
          { title: "Adama Lowers Her Voice", paragraphs: [
            "When the laughter died down, Adama lowered her voice. “But that's not it — not my real story for today.” The girls drew closer, calabashes against their hips. “There's something I've told no one.”" ] },
          { title: "The Most Beautiful Voice", paragraphs: [
            "“The other day, at school, in a corner where no one goes… two boys. You know the kind. I was afraid. Really afraid.” The girls were no longer laughing at all. “And then… a voice. Behind the wall. The most beautiful voice I've ever heard. Calm, gentle — almost singing. It told them to stop, that no means no. And they ran off.”" ] },
          { title: "Who Was It?", paragraphs: [
            "“But who was it?” breathed Fanyi. Adama shook her head. “I never saw. When I turned around, there was no one left.” The girls began to guess — an older boy from class? a shepherd passing by? — and each offered a name. Tofan and Fanyi searched too… never suspecting for a second who could sing like that, in a disguised voice, only to vanish afterward without a thank-you." ] },
          { title: "Adama's Treasure", paragraphs: [
            "“All I know,” said Adama, “is that that voice, I would know it among a thousand.” She laid her hand on her heart. “One day, I'll know whose it is. And that day…” She didn't finish. She was smiling, for real this time. The worry had melted away; what remained was the victory — that of having been defended by someone who expected nothing in return." ] },
          { title: "The Way Back", paragraphs: [
            "The calabashes were full. The girls took the path again, the water balanced, the laughter still in their throats. To the marigot, to the marigot — water in the calabash, and words in the heart! For at the marigot, my children, the girls carry far more than water: they carry one another. And somewhere, a boy who had sung and then fled would never know that he had given Adama back… her laughter." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "أصوات المنهل", sections: [
          { title: "الطريق إلى المنهل", paragraphs: [
            "اسمعوا، يا أطفال Kiribounyi. اليوم، لا Taadidi. لا Sayon، ولا أبناء Bakala. اليوم، الأمر أمرُ الفتيات. والقِرَع على رؤوسهنّ، ينزلن الدرب إلى المنهل، صفًّا، يضحكن. إلى المنهل، إلى المنهل — الماء في القرعة، والكلام في القلب!" ] },
          { title: "لعبة الهموم والانتصارات", paragraphs: [
            "على حافّة الماء، وهنّ يملأن القِرَع، اللعبة دائمًا هي نفسها. كلٌّ بدورها: همٌّ، ثمّ نصر. Tofan وFanyi، الأختان التوأمان، تفتتحان. «همّي، تقول Tofan: جديُنا أكل الصابون. — وانتصارك؟ — الجدي صار أطيب رائحةً من أخي!» وانفجر المنهل ضحكًا." ] },
          { title: "دورة الفتيات", paragraphs: [
            "تابعت Saran: «همّي، سكبتُ الأرزّ كلّه. انتصاري: الدجاج صار يعشقني الآن!» رفعت Néné يدها: «همّي، دققتُ حتى الليل. انتصاري: كان foutou ناعمًا حتى إنّ جدّتي طلبت المزيد مرّتين!» همٌّ، نصر، همٌّ، نصر — الماء يرتفع في القِرَع، والضحك يرتفع معه." ] },
          { title: "دور Adama", paragraphs: [
            "ثمّ جاء دور Adama. ابتسمت، لكن بابتسامة متعبة قليلًا. «همّي، يا بنات… هو وجهي.» توقّفن عن الملء. «عمري خمسة عشر عامًا. لكنّهم يظنّونني أكبر. فأجني نظراتٍ ثقيلة، وكلماتٍ تُرمى عليّ، وتلميحاتٍ لم أُردها قطّ.»" ] },
          { title: "صديق الأب", paragraphs: [
            "«وذات يوم، قالت، صديقٌ لأبي. تظاهر بالمزاح. «وعدني» بأن يطلب يدي. ‹هكذا، أعِدك› — كأنّه هديّة، كأنّه شيءٌ طلبتُه أنا.» لم تَعُد القِرَع تتحرّك. أطبقت Saran على أسنانها. «رجلٌ في سنّ أبيك…»" ] },
          { title: "ردّ Adama", paragraphs: [
            "«أجبتُه، قالت Adama، بهدوءٍ شديد. ذكّرتُه أنّني أصغر من ابنته الصغرى — تلك التي أناديها أختي الكبرى. وسألتُه: ‹إذًا قل لي… هي، بماذا ستناديني؟ ماما… أم زوجة أب؟›» صمت. ثمّ انفجر المنهل كلّه: ضحكةُ فتياتٍ كبيرة، صريحة، مُحرِّرة، أطارت العصافير. «ماما أم زوجة أب!» تكرّر Saran وهي تمسك خاصرتيها. أمّا العجوز، فقد اضطُرّ أن يبتلع «وعده»." ] },
          { title: "Adama تخفض صوتها", paragraphs: [
            "حين هدأ الضحك، خفضت Adama صوتها. «لكن ليست هذه قصّتي الحقيقيّة اليوم.» اقتربت الفتيات، والقِرَع على خواصرهنّ. «هناك شيءٌ لم أقُله لأحد.»" ] },
          { title: "أجمل صوت", paragraphs: [
            "«ذات يوم، في المدرسة، في ركنٍ لا يذهب إليه أحد… فتيان. تعرفن النوع. كنتُ خائفة. خائفةً حقًّا.» لم تَعُد الفتيات يضحكن البتّة. «وفجأةً… صوت. خلف الجدار. أجمل صوتٍ سمعته في حياتي. هادئ، رقيق — يكاد يغنّي. قال لهما أن يتوقّفا، أنّ لا تعني لا. ففرّا راكضَين.»" ] },
          { title: "مَن كان؟", paragraphs: [
            "«لكن مَن كان؟» همست Fanyi. هزّت Adama رأسها. «لم أرَ أبدًا. حين التفتُّ، لم يَعُد هناك أحد.» راحت الفتيات يُخمّنّ — فتى كبير من الصفّ؟ راعٍ عابر؟ — وكلٌّ تقترح اسمًا. Tofan وFanyi تبحثان أيضًا… دون أن تشكّا للحظةٍ في مَن قد يغنّي هكذا، بصوتٍ مُموَّه، ثمّ يختفي بلا كلمة شكر." ] },
          { title: "كنز Adama", paragraphs: [
            "«كلّ ما أعرفه، قالت Adama، أنّ ذلك الصوت، سأعرفه من بين ألف.» وضعت يدها على قلبها. «يومًا ما، سأعرف لمن هو. وذلك اليوم…» لم تُكمل. كانت تبتسم، ابتسامةً حقيقيّةً هذه المرّة. ذاب الهمّ؛ وبقي النصر — نصرُ أن دافع عنها مَن لا ينتظر شيئًا في المقابل." ] },
          { title: "العودة", paragraphs: [
            "امتلأت القِرَع. عادت الفتيات إلى الدرب، والماء متوازنٌ، والضحك ما زال في حلوقهنّ. إلى المنهل، إلى المنهل — الماء في القرعة، والكلام في القلب! فعند المنهل، يا أطفالي، تحمل الفتيات أكثر بكثير من الماء: يحمل بعضهنّ بعضًا. وفي مكانٍ ما، فتًى غنّى ثمّ فرّ، لن يعرف أبدًا أنّه ردّ إلى Adama… ضحكتها." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "水塘边的话语", sections: [
          { title: "去水塘的路", paragraphs: [
            "听着，Kiribounyi 的孩子们。今天，没有 Taadidi。没有 Sayon，没有 Bakala 的儿子们。今天，是姑娘们的事。头顶着葫芦瓢，她们排成一行，说说笑笑下到水塘。去水塘，去水塘——瓢里盛水，心里盛话！" ] },
          { title: "烦恼与胜利的游戏", paragraphs: [
            "在水边，一边打满葫芦瓢，一边玩那个老游戏。轮流来：一桩烦恼，再一桩胜利。双胞胎姐妹 Tofan 和 Fanyi 先开头。「我的烦恼，」Tofan 说，「我们家的小山羊把肥皂吃了。——那你的胜利呢？——那小羊闻起来比我哥还香！」整个水塘哄堂大笑。" ] },
          { title: "姑娘们一轮", paragraphs: [
            "Saran 接着说：「我的烦恼，我把米全撒了。我的胜利：现在母鸡们可爱我了！」Néné 举起手：「我的烦恼，我舂到了天黑。我的胜利：我的 foutou 又滑又匀，奶奶一连添了两回！」烦恼，胜利，烦恼，胜利——水在瓢里涨，笑声也跟着涨。" ] },
          { title: "轮到 Adama", paragraphs: [
            "然后轮到 Adama。她笑了，可那笑里带着一点疲惫。「我的烦恼，姑娘们……是我这张脸。」大家停下了手。「我十五岁。可人家看我都觉得更大。于是我招来一道道沉甸甸的目光，一句句砸过来的话，一个个我从没想要的暗示。」" ] },
          { title: "父亲的朋友", paragraphs: [
            "「就在前几天，」她说，「我父亲的一个朋友。装作开玩笑。他「许诺」要来提亲。『就这样，我答应你』——好像那是一份礼物，好像那是我求来的东西。」葫芦瓢都不动了。Saran 咬紧了牙。「一个跟你父亲一般年纪的人……」" ] },
          { title: "Adama 的回敬", paragraphs: [
            "「我回了他，」Adama 说，很平静。「我提醒他，我比他最小的女儿还小——就是那个我叫大姐的。然后我问他：『那你说说……她以后该叫我什么？妈妈……还是后妈？』」一阵静默。接着整个水塘炸开了：一片姑娘们的大笑，痛快，畅快，把鸟都惊飞了。「妈妈还是后妈！」Saran 捂着肚子一遍遍地说。那老头呢，只好把他的「许诺」咽了回去。" ] },
          { title: "Adama 压低声音", paragraphs: [
            "笑声落下后，Adama 压低了声音。「可这还不是我今天真正的故事。」姑娘们凑近过来，葫芦瓢抵在胯上。「有件事，我谁也没说过。」" ] },
          { title: "最美的嗓音", paragraphs: [
            "「那天，在学校，一个没人去的角落……两个男孩。你们懂那种。我害怕。是真的害怕。」姑娘们再也笑不出来了。「就在那时……一个声音。从墙后面。我这辈子听过的最美的嗓音。平静、温柔——几乎是在唱。它叫他们住手，说不就是不。他们撒腿就跑了。」" ] },
          { title: "那是谁？", paragraphs: [
            "「可那是谁呀？」Fanyi 轻声问。Adama 摇摇头。「我始终没看见。等我回过头，已经一个人也没有了。」姑娘们开始猜——班里某个大男孩？路过的牧人？——一人报一个名字。Tofan 和 Fanyi 也在猜……却一秒钟也没想到，会是谁用那样一副伪装的嗓音歌唱，唱完又消失，连一句谢都不要。" ] },
          { title: "Adama 的宝物", paragraphs: [
            "「我只知道，」Adama 说，「那个嗓音，就算在一千个人里我也认得出。」她把手按在心口。「总有一天，我会知道它是谁的。到那一天……」她没有说完。她笑了，这一次是真心的笑。烦恼化开了；剩下的是胜利——被一个不图任何回报的人护住的那份胜利。" ] },
          { title: "归途", paragraphs: [
            "葫芦瓢都满了。姑娘们重新上路，水稳稳地顶着，笑还卡在嗓子里。去水塘，去水塘——瓢里盛水，心里盛话！因为在水塘边，我的孩子们，姑娘们担起的远不止是水：她们彼此担起对方。而在某个地方，一个唱过歌又逃走的男孩，永远不会知道，他还给了 Adama……她的笑。" ] },
        ] },
      },
    },
    {
      numero: 15, statut: "live",
      planche: "/images/taadidi/ep15-planche.png",
      cover: "/images/taadidi/ep15-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "La promesse", "en": "The Promise", "ar": "الوعد", "zh": "那个许诺"},
      teaser: {"fr": "La « promesse » du marigot n'était pas une blague : Babadi est le chef du village, et son beau fils Alya — celui qui avait coincé Adama derrière l'école — la réclame en mariage. Quelques femmes se dressent. On ne les écoute pas. Mais l'histoire d'Adama ne s'arrête pas là.", "en": "The marigot “promise” was no joke: Babadi is the village chief, and his handsome son Alya — the one who cornered Adama behind the school — claims her in marriage. A few women stand up. No one listens. But Adama's story does not end there.", "ar": "لم تكن «وعدُ» المنهل مزحة: Babadi هو شيخ القرية، وابنه الوسيم Alya — الذي حاصر Adama خلف المدرسة — يطلبها للزواج. تنهض بضع نساء. لا أحد يسمع. لكنّ قصّة Adama لا تنتهي هنا.", "zh": "水塘边的「许诺」不是玩笑：Babadi 是村长，他那俊俏的儿子 Alya——就是把 Adama 堵在学校后面的那个——要娶她。几个女人站了出来。没有人听。可 Adama 的故事，并没有到此为止。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "La promesse", sections: [
          { title: "La promesse n'était pas une blague", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Au marigot, Adama avait ri de la « promesse » du vieux Babadi. Mais cette promesse-là n'était pas une blague. Et Babadi n'était pas n'importe qui : Babadi était le chef du village." ] },
          { title: "Le beau Alya", paragraphs: [
            "Babadi avait un fils, Alya. Un beau garçon, grand, le sourire facile. Beaucoup de filles du village rêvaient de lui. « Quelle chance, celle qui l'aura ! » disait-on. Personne, au village, n'aurait imaginé du mal de lui." ] },
          { title: "Mais Adama savait", paragraphs: [
            "Adama, elle, connaissait un autre Alya. Car l'un des deux grands qui l'avaient coincée derrière l'école — c'était lui. Et ça, qui l'aurait crue ? Le beau fils du chef ? « Tu mens », voilà ce qu'on lui aurait dit. Alors Adama avait eu peur. Peur qu'on ne la croie pas." ] },
          { title: "La rancune d'Alya", paragraphs: [
            "Alya non plus n'avait pas oublié. Mis en fuite par une voix qu'il n'avait même pas vue. Battu, devant la fille. Ça lui restait dans la gorge. Il voulait Adama — pas pour l'aimer, mais parce qu'elle lui avait échappé. Alors il alla voir son père et dit : « Je veux la marier. »" ] },
          { title: "Le oui du chef", paragraphs: [
            "Babadi resta longtemps sans rien dire. Puis il sourit. Un drôle de sourire. Et il dit : « Oui. » Et quand c'est le chef qui dit oui, qui ose dire non ? Personne. Voilà ce qui rendait le piège si solide." ] },
          { title: "On décide pour Adama", paragraphs: [
            "Les deux pères s'arrangèrent. Ils fixèrent le jour, le prix, la fête. Ils décidèrent de toute la vie d'Adama. Mais pas une seule fois, personne ne pensa à demander… à Adama." ] },
          { title: "Le village partagé", paragraphs: [
            "Mais le village ne fut pas d'accord avec lui-même. Beaucoup trouvaient ça tout à fait normal. « Quelle chance elle a ! disait-on. Alya, le garçon le plus convoité du village ! » Et quand quelqu'un parlait de son âge, on haussait les épaules. « Dix ans d'écart, ce n'est rien. Et puis regardez-la : on lui donnerait bien plus. » Comme si le corps d'une fille pouvait effacer ses quinze ans." ] },
          { title: "Le peu qui se dressent", paragraphs: [
            "Mais quelques-unes ne se turent pas. Nana. La mère d'Adama. Deux ou trois filles du marigot. « Quinze ans, c'est quinze ans, dirent-elles. Qu'on la trouve grande ou petite, ça ne change rien : c'est une enfant. » Elles étaient peu. Se dresser à quelques-unes contre le chef, contre le beau Alya, et contre un village entier qui trouvait ça normal — il en fallait, du cœur." ] },
          { title: "Mais le piège se referme", paragraphs: [
            "Mais le chef était le chef. Le beau Alya, presque tout le monde l'admirait. Et la parole d'une fille — ou de quelques femmes — ne pesait pas lourd contre la sienne. On ne les écouta pas. Et c'est ainsi, mes enfants : à quinze ans, on maria Adama." ] },
          { title: "La voix qu'elle gardait", paragraphs: [
            "Mais au fond d'elle, Adama gardait une chose que personne ne pouvait lui prendre. La voix. Celle qui l'avait défendue derrière l'école, sans rien réclamer. Cette voix-là l'avait crue. Cette voix-là l'avait vue. Adama la garda comme une petite braise, tout au fond du cœur." ] },
          { title: "Ce n'est pas la fin", paragraphs: [
            "Le conteur posa la main sur son tambour. Mes enfants, on a marié Adama à quinze ans. C'est triste. Et c'est comme ça que ça se passe, parfois, quand les puissants décident et qu'on ne croit pas les filles. Mais écoutez-moi bien. Ce n'est pas là que finit l'histoire d'Adama. Oh non. Pas du tout." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Promise", sections: [
          { title: "The Promise Was No Joke", paragraphs: [
            "Listen to what came next, children of Kiribounyi. At the marigot, Adama had laughed at old Babadi's “promise.” But that promise was no joke. And Babadi was not just anyone: Babadi was the chief of the village." ] },
          { title: "Handsome Alya", paragraphs: [
            "Babadi had a son, Alya. A handsome boy, tall, with an easy smile. Many girls in the village dreamed of him. “How lucky, whoever gets him!” people said. No one in the village would ever have imagined any harm in him." ] },
          { title: "But Adama Knew", paragraphs: [
            "Adama, though, knew another Alya. For one of the two big boys who had cornered her behind the school — was him. And who would have believed her? The chief's handsome son? “You're lying,” that's what they would have said. So Adama had been afraid. Afraid she would not be believed." ] },
          { title: "Alya's Grudge", paragraphs: [
            "Alya had not forgotten either. Driven off by a voice he had not even seen. Beaten, in front of the girl. It stuck in his throat. He wanted Adama — not to love her, but because she had escaped him. So he went to his father and said: “I want to marry her.”" ] },
          { title: "The Chief's Yes", paragraphs: [
            "Babadi said nothing for a long while. Then he smiled. A strange smile. And he said: “Yes.” And when it's the chief who says yes, who dares say no? No one. That is what made the trap so strong." ] },
          { title: "They Decide for Adama", paragraphs: [
            "The two fathers came to an arrangement. They set the day, the price, the feast. They decided Adama's whole life. But not once did anyone think to ask… Adama." ] },
          { title: "The Village Divided", paragraphs: [
            "But the village did not agree with itself. Many found it perfectly normal. “How lucky she is!” they said. “Alya, the most sought-after boy in the village!” And when someone mentioned her age, they shrugged. “Ten years' difference, that's nothing. And look at her: you'd think her much older.” As if a girl's body could erase her fifteen years." ] },
          { title: "The Few Who Stand", paragraphs: [
            "But a few did not stay silent. Nana. Adama's mother. Two or three girls from the marigot. “Fifteen is fifteen,” they said. “Whether you find her grown or small, it changes nothing: she is a child.” They were few. To stand, a handful of them, against the chief, against handsome Alya, and against a whole village that found it normal — that took heart." ] },
          { title: "But the Trap Closes", paragraphs: [
            "But the chief was the chief. Handsome Alya, almost everyone admired him. And the word of a girl — or of a few women — weighed little against his. They were not listened to. And so it was, my children: at fifteen, Adama was married." ] },
          { title: "The Voice She Kept", paragraphs: [
            "But deep inside, Adama kept one thing no one could take from her. The voice. The one that had defended her behind the school, asking nothing in return. That voice had believed her. That voice had seen her. Adama kept it like a small ember, deep in her heart." ] },
          { title: "This Is Not the End", paragraphs: [
            "The storyteller laid his hand on his drum. My children, Adama was married at fifteen. It is sad. And that is how it happens, sometimes, when the powerful decide and girls are not believed. But listen to me well. This is not where Adama's story ends. Oh no. Not at all." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الوعد", sections: [
          { title: "الوعد لم يكن مزحة", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. عند المنهل، ضحكت Adama من «وعد» العجوز Babadi. لكنّ ذلك الوعد لم يكن مزحة. وBabadi لم يكن أيَّ أحد: Babadi كان شيخ القرية." ] },
          { title: "Alya الوسيم", paragraphs: [
            "كان لـBabadi ابنٌ، Alya. فتًى وسيم، طويل، سهل الابتسامة. كثيرٌ من فتيات القرية كنّ يحلمن به. «يا حظّ من تظفر به!» كانوا يقولون. ما كان أحدٌ في القرية ليتخيّل فيه سوءًا." ] },
          { title: "لكنّ Adama كانت تعرف", paragraphs: [
            "أمّا Adama، فكانت تعرف Alya آخر. فأحد الكبيرَين اللذين حاصراها خلف المدرسة — كان هو. ومَن كان ليصدّقها؟ ابن الشيخ الوسيم؟ «أنتِ تكذبين»، هذا ما كانوا سيقولونه لها. فخافت Adama. خافت ألّا يُصدّقها أحد." ] },
          { title: "حقد Alya", paragraphs: [
            "وAlya أيضًا لم ينسَ. طُرد على يد صوتٍ لم يرَه حتى. هُزم، أمام الفتاة. بقي ذلك في حلقه. كان يريد Adama — لا ليحبّها، بل لأنّها أفلتت منه. فذهب إلى أبيه وقال: «أريد أن أتزوّجها.»" ] },
          { title: "نعم الشيخ", paragraphs: [
            "صمت Babadi طويلًا. ثمّ ابتسم. ابتسامةً غريبة. وقال: «نعم.» وحين يقول الشيخ نعم، مَن يجرؤ أن يقول لا؟ لا أحد. هذا ما جعل الفخّ محكمًا إلى هذا الحدّ." ] },
          { title: "يقرّرون عن Adama", paragraphs: [
            "اتّفق الأبوان. حدّدا اليوم، والمهر، والوليمة. قرّرا حياة Adama كلّها. لكن ولا مرّة واحدة، لم يفكّر أحدٌ في أن يسأل… Adama." ] },
          { title: "القرية المنقسمة", paragraphs: [
            "لكنّ القرية لم تتّفق مع نفسها. كثيرون رأوا الأمر طبيعيًّا تمامًا. «يا حظّها! كانوا يقولون. Alya، أكثر فتيان القرية رغبةً فيه!» وحين كان أحدٌ يذكر سنّها، كانوا يهزّون أكتافهم. «عشر سنوات فارق، هذا لا شيء. ثمّ انظروا إليها: تبدو أكبر بكثير.» كأنّ جسد فتاةٍ يمكنه أن يمحو خمسة عشر عامًا." ] },
          { title: "القلّة التي تنهض", paragraphs: [
            "لكنّ بعضهنّ لم يسكتن. Nana. أمّ Adama. فتاتان أو ثلاث من المنهل. «خمسة عشر عامًا تبقى خمسة عشر عامًا، قُلن. سواء وجدتموها كبيرة أو صغيرة، لا يغيّر ذلك شيئًا: إنّها طفلة.» كنّ قلّة. أن تنهض حفنةٌ في وجه الشيخ، وفي وجه Alya الوسيم، وفي وجه قريةٍ بأكملها ترى الأمر طبيعيًّا — كان ذلك يحتاج إلى قلب." ] },
          { title: "لكنّ الفخّ يُطبق", paragraphs: [
            "لكنّ الشيخ كان الشيخ. وAlya الوسيم، كان الجميع تقريبًا يُعجبون به. وكلمةُ فتاة — أو بضع نساء — لم تكن لتزن شيئًا أمام كلمته. لم يُصغَ إليهنّ. وهكذا، يا أطفالي: في الخامسة عشرة، زُوّجت Adama." ] },
          { title: "الصوت الذي احتفظت به", paragraphs: [
            "لكن في أعماقها، احتفظت Adama بشيءٍ لا يستطيع أحدٌ أن يسلبها إيّاه. الصوت. ذاك الذي دافع عنها خلف المدرسة، دون أن يطلب شيئًا. ذلك الصوت صدّقها. ذلك الصوت رآها. احتفظت به Adama كجمرةٍ صغيرة، في أعماق قلبها." ] },
          { title: "ليست هذه النهاية", paragraphs: [
            "وضع الحكواتي يده على طبله. يا أطفالي، زُوّجت Adama في الخامسة عشرة. هذا محزن. وهكذا يحدث الأمر، أحيانًا، حين يقرّر الأقوياء ولا يُصدَّق البنات. لكن اسمعوني جيّدًا. ليست هنا تنتهي قصّة Adama. لا. أبدًا." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "那个许诺", sections: [
          { title: "那个许诺不是玩笑", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。在水塘边，Adama 笑过老 Babadi 的那个「许诺」。可那个许诺，不是玩笑。而 Babadi 也不是随便什么人：Babadi 是村长。" ] },
          { title: "俊俏的 Alya", paragraphs: [
            "Babadi 有个儿子，Alya。一个俊俏的男孩，高个子，笑容随和。村里许多姑娘都梦着他。「谁能嫁给他，谁就有福了！」人们说。村里没有一个人会想到他坏。" ] },
          { title: "可是 Adama 知道", paragraphs: [
            "Adama 呢，她认得另一个 Alya。因为把她堵在学校后面的那两个大孩子，其中一个——就是他。可这话，谁会信她呢？村长那俊俏的儿子？「你撒谎，」他们会这么说。于是 Adama 害怕了。她怕没有人信她。" ] },
          { title: "Alya 的怨恨", paragraphs: [
            "Alya 也没有忘。被一个他连面都没见着的声音赶跑。在那女孩面前，吃了败仗。这口气咽不下。他要 Adama——不是为了爱，而是因为她从他手里逃脱了。于是他去找父亲，说：「我要娶她。」" ] },
          { title: "村长的一声「好」", paragraphs: [
            "Babadi 半晌不语。然后他笑了。一个古怪的笑。他说：「好。」而当村长说「好」，谁还敢说「不」？没有人。这就是为什么这个圈套那么牢。" ] },
          { title: "他们替 Adama 做主", paragraphs: [
            "两位父亲谈妥了。定下日子、聘礼、酒席。他们替 Adama 决定了一生。可是没有一次，没有一个人想到去问一问……Adama。" ] },
          { title: "分裂的村子", paragraphs: [
            "可村子自己也没说到一块儿去。许多人觉得这再正常不过。「她多有福气！人们说。Alya，全村最让人惦记的男孩！」每当有人提起她的年纪，他们就耸耸肩。「差十岁，算什么。再说你看她：怎么看都不止这个岁数。」仿佛一个姑娘的身子，就能抹掉她的十五岁。" ] },
          { title: "站出来的那几个", paragraphs: [
            "可有几个人没有闭嘴。Nana。Adama 的母亲。水塘边的两三个姑娘。「十五岁就是十五岁，她们说。不管你觉得她大还是小，都改变不了：她是个孩子。」她们人少。几个人，要顶着村长，顶着俊俏的 Alya，顶着一整个觉得这很正常的村子站出来——那是要有心肝的。" ] },
          { title: "可圈套还是合上了", paragraphs: [
            "可村长终归是村长。俊俏的 Alya，几乎人人都仰慕。而一个姑娘的话——或者几个女人的话——压在他的话面前，分量太轻。没有人听她们的。事情就这样，我的孩子们：十五岁，Adama 被嫁了。" ] },
          { title: "她守住的那个声音", paragraphs: [
            "可在心底，Adama 守着一样谁也夺不走的东西。那个声音。就是在学校后面护过她、什么也不图的那个。那个声音信过她。那个声音看见过她。Adama 把它像一小颗火炭一样，守在心的最深处。" ] },
          { title: "这还不是结局", paragraphs: [
            "讲故事的人把手按在他的鼓上。我的孩子们，Adama 十五岁就被嫁了。这很令人难过。事情有时就是这样——当有权势的人做了主，而没有人肯信姑娘们。可是你们好好听我说。Adama 的故事，并不到此为止。哦，不。远远不到。" ] },
        ] },
      },
    },
    {
      numero: 16, statut: "live",
      planche: "/images/taadidi/ep16-planche.png",
      cover: "/images/taadidi/ep16-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "La porte", "en": "The Door", "ar": "الباب", "zh": "那扇门"},
      teaser: {"fr": "Une bourse pour devenir infirmière — la chance de Lima, l'aînée. Elle décroche la place à la force du travail. Mais le village ne veut pas qu'une fille parte si loin. Taadidi tient sa promesse : il n'ouvre qu'une porte.", "en": "A scholarship to become a nurse — the chance of Lima, the eldest. She wins the place by sheer hard work. But the village won't let a girl go so far away. Taadidi keeps his promise: he opens only a door.", "ar": "منحةٌ لتصير ممرّضة — فرصة Lima، الكبرى. تنال المقعد بجهدها وحده. لكنّ القرية لا تريد لفتاةٍ أن ترحل بعيدًا. يفي Taadidi بوعده: لا يفتح سوى باب.", "zh": "一份当护士的奖学金——长姐 Lima 的机会。她全凭苦功拿下了名额。可村子不肯让一个姑娘走那么远。Taadidi 守住承诺：他只打开一扇门。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "La porte", sections: [
          { title: "Lima, l'aînée", paragraphs: [
            "Écoutez, enfants de Kiribounyi. Vous souvenez-vous de Lima ? L'aînée des sœurs de Taadidi. Celle qui, un jour, avait chanté pour sortir son petit frère du fond de son chagrin. Lima avait du courage à revendre. Et elle rêvait de devenir infirmière — pour soigner les gens, comme elle soignait, petite, les oiseaux tombés du nid." ] },
          { title: "Le journal", paragraphs: [
            "Un matin, Taadidi déplia un journal — un de ceux que son directeur d'école lui faisait souvent lire. Et là, une annonce lui sauta aux yeux. Une grande école, très loin, offrait des bourses pour devenir infirmière. Et c'était écrit noir sur blanc : on attendait des jeunes filles, surtout celles des villages. Taadidi courut trouver sa sœur. « Grande sœur ! Ta chance est là ! »" ] },
          { title: "Lima ne craint pas la chance", paragraphs: [
            "Lima lut l'annonce, lentement. Puis elle releva la tête. « Je n'ai pas besoin qu'on me fasse de cadeau, dit-elle. J'ai ce qu'il faut, ici — elle toucha son front — et là — elle toucha son cœur. S'il faut travailler dur pour mériter cette place, je travaillerai dur. La chance ne me fait pas peur. »" ] },
          { title: "Sa vraie crainte", paragraphs: [
            "Elle se tut un instant. Puis, plus bas : « Ce qui me fait peur, c'est autre chose. Nos parents. Surtout Papa. Et le village tout entier. Une fille qui part si loin, toute seule, pas encore mariée… Ils ne me laisseront jamais partir, Taadidi. Et ça, tu le sais aussi bien que moi. »" ] },
          { title: "« Chaque chose en son temps »", paragraphs: [
            "Taadidi la regarda droit dans les yeux. « Chaque chose en son temps, grande sœur. Décroche la place d'abord. Ça, c'est ton affaire — et tu vas y arriver, j'en suis sûr. Le reste — Papa, les anciens, le village — ça, j'en fais mon affaire aussi. » Puis il dit un seul mot : « Wontanara. » Nous ne faisons qu'un. Et il la serra fort dans ses bras." ] },
          { title: "La place, méritée", paragraphs: [
            "Alors Lima se présenta au concours. Elle travailla le jour. Elle travailla la nuit, à la lampe. Et quand les résultats tombèrent, son nom était là, tout en haut. Elle avait décroché la place. Pas par chance — parce qu'elle était la meilleure. Ça, personne ne pourrait jamais le lui enlever." ] },
          { title: "La porte fermée, puis ouverte", paragraphs: [
            "Mais au village, ce fut une affaire d'État. « Une femme ? Partir si loin ? Pas même mariée ? Ça ne se fait pas ! » Et le père de Lima, lui-même, hésitait. Alors Taadidi tint sa promesse. Il parla à son père, longuement, avec respect. Il parla aux anciens. Il ne décida rien à la place de Lima — elle avait tout décidé. Il ouvrit seulement la porte que les hommes voulaient garder fermée." ] },
          { title: "Le départ", paragraphs: [
            "Et un beau matin, la porte s'ouvrit. Lima fit son baluchon. « Je reviendrai, dit-elle. Vous verrez. » Et elle prit la route, la tête haute. Le conteur sourit. Croyez-moi, mes enfants : Lima allait tous les surprendre. Mais ça… c'est l'histoire de demain." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Door", sections: [
          { title: "Lima, the Eldest", paragraphs: [
            "Listen, children of Kiribounyi. Do you remember Lima? The eldest of Taadidi's sisters. The one who, one day, had sung to pull her little brother up from the depths of his sorrow. Lima had courage to spare. And she dreamed of becoming a nurse — to heal people, the way she healed, as a little girl, the birds fallen from the nest." ] },
          { title: "The Newspaper", paragraphs: [
            "One morning, Taadidi unfolded a newspaper — one of those his school principal often had him read. And there, a notice leapt out at him. A great school, very far away, was offering scholarships to become a nurse. And it was written in black and white: they wanted young women, especially those from the villages. Taadidi ran to find his sister. “Big sister! Here is your chance!”" ] },
          { title: "Lima Does Not Fear Luck", paragraphs: [
            "Lima read the notice, slowly. Then she raised her head. “I don't need anyone to give me a gift,” she said. “I have what it takes, here” — she touched her forehead — “and here” — she touched her heart. “If I must work hard to deserve this place, I will work hard. Luck does not frighten me.”" ] },
          { title: "Her Real Fear", paragraphs: [
            "She fell silent for a moment. Then, lower: “What frightens me is something else. Our parents. Father above all. And the whole village. A girl who goes so far, all alone, not yet married… They will never let me leave, Taadidi. And that, you know as well as I do.”" ] },
          { title: "“Each Thing in Its Time”", paragraphs: [
            "Taadidi looked her straight in the eyes. “Each thing in its time, big sister. Win the place first. That's your affair — and you'll do it, I'm sure of it. The rest — Father, the elders, the village — that, I'll make my affair too.” Then he said a single word: “Wontanara.” We are one. And he held her tight in his arms." ] },
          { title: "The Place, Earned", paragraphs: [
            "So Lima sat the entrance exam. She worked by day. She worked by night, by lamplight. And when the results came, her name was there, right at the top. She had won the place. Not by luck — because she was the best. That, no one could ever take from her." ] },
          { title: "The Door Shut, Then Opened", paragraphs: [
            "But in the village, it became a great affair. “A woman? Going so far? Not even married? It isn't done!” And Lima's own father hesitated. So Taadidi kept his promise. He spoke to his father, at length, with respect. He spoke to the elders. He decided nothing in Lima's place — she had decided everything. He only opened the door the men wanted to keep shut." ] },
          { title: "The Departure", paragraphs: [
            "And one fine morning, the door opened. Lima made up her bundle. “I'll come back,” she said. “You'll see.” And she took the road, her head high. The storyteller smiled. Believe me, my children: Lima was going to surprise them all. But that… is the story of tomorrow." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الباب", sections: [
          { title: "Lima، الكبرى", paragraphs: [
            "اسمعوا، يا أطفال Kiribounyi. أتذكرون Lima؟ كبرى أخوات Taadidi. تلك التي، ذات يوم، غنّت لتُخرج أخاها الصغير من قاع حزنه. كان لدى Lima شجاعةٌ تفيض. وكانت تحلم بأن تصير ممرّضة — لتداوي الناس، كما كانت تداوي، صغيرةً، العصافير الساقطة من العشّ." ] },
          { title: "الجريدة", paragraphs: [
            "ذات صباح، نشر Taadidi جريدة — من تلك التي كان مدير مدرسته يجعله يقرؤها كثيرًا. وهناك، قفز إعلانٌ إلى عينيه. مدرسةٌ كبيرة، بعيدةٌ جدًّا، تقدّم منحًا لتصيري ممرّضة. وكان مكتوبًا بالأبيض والأسود: يُنتظَر فتياتٌ شابّات، خاصّةً من القرى. ركض Taadidi إلى أخته. «يا أختي الكبرى! فرصتك هنا!»" ] },
          { title: "Lima لا تخاف الفرصة", paragraphs: [
            "قرأت Lima الإعلان، ببطء. ثمّ رفعت رأسها. «لا أحتاج أن يُهديني أحدٌ شيئًا، قالت. عندي ما يلزم، هنا — ولمست جبينها — وهنا — ولمست قلبها. إن كان عليّ أن أعمل بجدٍّ لأستحقّ هذا المقعد، فسأعمل بجدّ. الفرصة لا تخيفني.»" ] },
          { title: "خوفها الحقيقيّ", paragraphs: [
            "صمتت لحظة. ثمّ، بصوتٍ أخفض: «ما يخيفني شيءٌ آخر. والدانا. أبي قبل الجميع. والقرية بأسرها. فتاةٌ ترحل بعيدًا، وحدها، ولمّا تتزوّج بعد… لن يسمحوا لي بالرحيل أبدًا، يا Taadidi. وهذا، تعرفه مثلي تمامًا.»" ] },
          { title: "«كلّ شيءٍ في وقته»", paragraphs: [
            "نظر Taadidi في عينيها مباشرة. «كلّ شيءٍ في وقته، يا أختي الكبرى. انتزعي المقعد أوّلًا. هذا شأنك — وستنجحين، أنا واثق. أمّا الباقي — أبي، والكبار، والقرية — فذلك شأني أنا.» ثمّ قال كلمةً واحدة: «Wontanara.» نحن واحد. وضمّها بقوّةٍ بين ذراعيه." ] },
          { title: "المقعد، عن جدارة", paragraphs: [
            "فتقدّمت Lima إلى المسابقة. عملت نهارًا. وعملت ليلًا، على ضوء المصباح. ولمّا صدرت النتائج، كان اسمها هناك، في القمّة. نالت المقعد. لا بالحظّ — بل لأنّها كانت الأفضل. هذا، لا يستطيع أحدٌ أن يسلبها إيّاه أبدًا." ] },
          { title: "الباب المُغلق، ثمّ المفتوح", paragraphs: [
            "لكن في القرية، صارت قضيّةً كبرى. «امرأة؟ ترحل بعيدًا؟ ولمّا تتزوّج؟ هذا لا يصحّ!» وأبو Lima نفسه، تردّد. فوفى Taadidi بوعده. كلّم أباه، طويلًا، باحترام. كلّم الكبار. لم يقرّر شيئًا بدلًا من Lima — هي قرّرت كلّ شيء. فتح فقط البابَ الذي أراد الرجال أن يُبقوه مُغلقًا." ] },
          { title: "الرحيل", paragraphs: [
            "وذات صباحٍ جميل، انفتح الباب. حزمت Lima صرّتها. «سأعود، قالت. سترَون.» وأخذت الطريق، ورأسها مرفوع. ابتسم الحكواتي. صدّقوني، يا أطفالي: كانت Lima ستفاجئ الجميع. لكن ذلك… حكاية الغد." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "那扇门", sections: [
          { title: "长姐 Lima", paragraphs: [
            "听着，Kiribounyi 的孩子们。你们还记得 Lima 吗？Taadidi 姐姐里的老大。就是那个有一天唱起歌、把弟弟从悲伤的谷底拉上来的人。Lima 有的是勇气。她梦想当一名护士——去医治人，就像她小时候医治那些跌出鸟窝的小鸟一样。" ] },
          { title: "报纸", paragraphs: [
            "一天早上，Taadidi 摊开一份报纸——是他校长常让他读的那种。就在那上面，一则启事跳进了他的眼睛。一所很远的大学校，提供当护士的奖学金。白纸黑字写着：欢迎年轻姑娘，尤其是村里的姑娘。Taadidi 跑去找姐姐。「大姐！你的机会来了！」" ] },
          { title: "Lima 不怕机会", paragraphs: [
            "Lima 慢慢读完启事。然后她抬起头。「我不需要谁施舍我，」她说。「我有该有的，在这儿——」她碰了碰额头，「还有这儿——」她碰了碰心口。「要靠苦干才配得上这个名额，那我就苦干。机会，吓不倒我。」" ] },
          { title: "她真正怕的", paragraphs: [
            "她沉默了一会儿。然后，压低声音：「我怕的是别的。我们的父母。尤其是爸爸。还有整个村子。一个姑娘走那么远，独自一人，还没出嫁……他们永远不会放我走的，Taadidi。这个，你跟我一样清楚。」" ] },
          { title: "「一样一样来」", paragraphs: [
            "Taadidi 直直看进她的眼睛。「一样一样来，大姐。先把名额拿下。那是你的事——你一定行，我有把握。剩下的——爸爸、长辈、村子——那，我也包了。」然后他只说了一个词：「Wontanara。」我们是一体。他把她紧紧抱在怀里。" ] },
          { title: "凭本事得来的名额", paragraphs: [
            "于是 Lima 去考了。她白天用功。她夜里就着灯用功。等成绩出来，她的名字在那儿，高高在最上头。她拿下了名额。不是靠运气——是因为她最优秀。这个，谁也永远夺不走。" ] },
          { title: "先关上、又打开的门", paragraphs: [
            "可在村里，这成了天大的事。「一个女人？走那么远？还没嫁人？这成何体统！」连 Lima 自己的父亲都犹豫了。于是 Taadidi 守住了承诺。他跟父亲长谈，恭恭敬敬。他跟长辈们说。他没有替 Lima 拿任何主意——一切都是她自己定的。他只是打开了那扇男人们想关着的门。" ] },
          { title: "启程", paragraphs: [
            "一个晴朗的早晨，门开了。Lima 打好包袱。「我会回来的，」她说。「你们等着瞧。」她踏上了路，昂着头。讲故事的人笑了。相信我，我的孩子们：Lima 会让所有人大吃一惊。可那个……是明天的故事了。" ] },
        ] },
      },
    },
    {
      numero: 17, statut: "live",
      planche: "/images/taadidi/ep17-planche.png",
      cover: "/images/taadidi/ep17-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Le jour de Lima", "en": "Lima's Day", "ar": "يوم Lima", "zh": "Lima 的大喜日子"},
      teaser: {"fr": "Des années plus tard : Lima a tenu parole. Infirmière reconnue, elle se marie — quand elle l'a choisi, avec qui elle a choisi. Et dans la foule, Adama, vingt ans, son enfant sur la hanche, regarde ce mariage joyeux… et ose espérer.", "en": "Years later: Lima kept her word. A nurse known across the country, she marries — when she chose, whom she chose. And in the crowd, Adama, twenty, her child on her hip, watches this joyful wedding… and dares to hope.", "ar": "بعد سنوات: وفت Lima بوعدها. ممرّضةٌ معروفة في البلاد كلّها، تتزوّج — حين اختارت، ممّن اختارت. وفي الزحام، Adama، في العشرين، وطفلها على خاصرتها، تشاهد هذا العرس الفرِح… وتجرؤ على الأمل.", "zh": "多年以后：Lima 说到做到。她成了全国闻名的护士，如今要出嫁了——在她选定的时候，嫁给她选定的人。人群里，二十岁的 Adama，孩子搂在胯上，望着这场欢喜的婚礼……竟敢盼望起来。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le jour de Lima", sections: [
          { title: "Lima a déjoué tout le monde", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Des années passèrent. Et Lima ? Lima tint parole. Elle étudia loin, très loin, et elle étudia bien. Puis elle revint — exactement comme elle l'avait promis. Elle devint une infirmière qu'on connaissait dans tout le pays, et vint servir à la préfecture, tout près, pour rentrer souvent au village. Et ceux qui avaient dit « une femme ne peut pas » baissaient les yeux." ] },
          { title: "Le village n'a jamais été aussi plein", paragraphs: [
            "Et cette semaine-là, le village n'avait jamais été aussi plein. De partout, on était venu. Sur toutes les routes, des gens, des pagnes, des chants. Pourquoi tout ce monde ? Pour un mariage. Le mariage de Lima." ] },
          { title: "À son heure", paragraphs: [
            "Car maintenant — après ses études, après son travail, après avoir prouvé à tous ce qu'elle valait — Lima se mariait. Quand elle l'avait choisi. Avec celui qu'elle avait choisi. À son heure, à elle. Personne n'avait décidé pour elle. Personne." ] },
          { title: "Tout le monde sur son trente-et-un", paragraphs: [
            "Ce jour-là, tout le village était sur son trente-et-un. Les plus beaux boubous, les plus beaux pagnes, l'indigo profond et l'or qui brille. On dansait, on chantait, on riait jusqu'au soir. Kiribounyi n'avait jamais brillé comme ça." ] },
          { title: "Taadidi, le témoin", paragraphs: [
            "Et au premier rang, qui se tenait debout à côté de la mariée ? Taadidi. Le petit garçon aux locks avait dix-huit ans, à présent. C'était lui, le témoin de sa grande sœur. Droit et fier, comme pour dire au monde entier : « Voilà ma sœur. Regardez ce qu'elle a fait. » Car lui n'avait fait qu'ouvrir une porte. Tout le reste, c'était elle." ] },
          { title: "Adama, dans la foule", paragraphs: [
            "Et dans la foule, parmi les amies de Tofan et Fanyi, il y avait Adama. Vingt ans, son enfant bien serré sur la hanche. Elle regardait ce mariage choisi, ce mariage joyeux — tout ce que le sien n'avait pas été." ] },
          { title: "Et si elle aussi…", paragraphs: [
            "Mais au lieu d'être triste, Adama sourit. Car Lima venait de prouver une chose, devant tout le village : une femme peut choisir sa vie. Tofan et Fanyi l'attrapèrent par la main et l'entraînèrent dans la danse. Et là, au milieu des rires, Adama se prit à espérer. Si Lima l'avait fait… alors elle aussi, peut-être. Un jour." ] },
          { title: "Deux qui ne se savent pas", paragraphs: [
            "Le conteur posa la main sur son tambour. Dans cette grande fête, mes enfants, il y avait un garçon qui avait chanté, une fois, pour sauver une fille — sans que personne le sache. Et il y avait cette fille, devenue femme, qui gardait cette voix tout au fond du cœur. Ils étaient là, tous les deux, sous le même soleil. Et aucun ne le savait encore. Mais bientôt… ah, bientôt." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Lima's Day", sections: [
          { title: "Lima Outwitted Everyone", paragraphs: [
            "Listen to what came next, children of Kiribounyi. Years went by. And Lima? Lima kept her word. She studied far, very far, and she studied well. Then she came back — exactly as she had promised. She became a nurse known across the whole country, and came to serve at the prefecture, close by, so she could return often to the village. And those who had said “a woman cannot” lowered their eyes." ] },
          { title: "The Village Had Never Been So Full", paragraphs: [
            "And that week, the village had never been so full. From everywhere, people had come. On every road, people, wrappers, songs. Why all this crowd? For a wedding. Lima's wedding." ] },
          { title: "In Her Own Time", paragraphs: [
            "For now — after her studies, after her work, after proving to everyone what she was worth — Lima was getting married. When she had chosen. To the one she had chosen. In her own time, hers. No one had decided for her. No one." ] },
          { title: "Everyone in Their Finest", paragraphs: [
            "That day, the whole village was in its finest. The most beautiful boubous, the most beautiful wrappers, deep indigo and shining gold. They danced, they sang, they laughed until evening. Kiribounyi had never shone like that." ] },
          { title: "Taadidi, the Witness", paragraphs: [
            "And in the front row, who stood beside the bride? Taadidi. The little boy with the locks was eighteen now. He was his big sister's witness. Straight and proud, as if to tell the whole world: “Here is my sister. Look at what she has done.” For he had only opened a door. All the rest was her." ] },
          { title: "Adama, in the Crowd", paragraphs: [
            "And in the crowd, among Tofan and Fanyi's friends, was Adama. Twenty years old, her child held close on her hip. She watched this chosen wedding, this joyful wedding — everything her own had not been." ] },
          { title: "And What if She Too…", paragraphs: [
            "But instead of being sad, Adama smiled. For Lima had just proven one thing, before the whole village: a woman can choose her life. Tofan and Fanyi caught her by the hand and pulled her into the dance. And there, amid the laughter, Adama began to hope. If Lima had done it… then she too, perhaps. One day." ] },
          { title: "Two Who Don't Know", paragraphs: [
            "The storyteller laid his hand on his drum. In this great feast, my children, there was a boy who had sung, once, to save a girl — without anyone knowing. And there was that girl, now a woman, who kept that voice deep in her heart. They were both there, under the same sun. And neither one knew it yet. But soon… ah, soon." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "يوم Lima", sections: [
          { title: "Lima خدعت الجميع", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. مرّت سنوات. وLima؟ وفت Lima بوعدها. درست بعيدًا، بعيدًا جدًّا، ودرست جيّدًا. ثمّ عادت — تمامًا كما وعدت. صارت ممرّضةً تُعرف في البلاد كلّها، وجاءت تخدم في المحافظة، قريبًا، لتعود كثيرًا إلى القرية. والذين قالوا «المرأة لا تستطيع» أطرقوا بأعينهم." ] },
          { title: "لم تكن القرية يومًا بهذا الازدحام", paragraphs: [
            "وفي ذلك الأسبوع، لم تكن القرية يومًا بهذا الازدحام. من كلّ مكان، أتى الناس. على كلّ الطرقات، ناسٌ، وأثوابٌ، وأغانٍ. لماذا كلّ هذا الجمع؟ من أجل عرس. عرس Lima." ] },
          { title: "في وقتها هي", paragraphs: [
            "فالآن — بعد دراستها، بعد عملها، بعد أن أثبتت للجميع قَدْرها — كانت Lima تتزوّج. حين اختارت هي. بمن اختارت هي. في وقتها، هي. لم يقرّر أحدٌ عنها. لا أحد." ] },
          { title: "الجميع في أبهى حُلّة", paragraphs: [
            "في ذلك اليوم، كانت القرية كلّها في أبهى حُلّة. أجمل البوبو، أجمل الأثواب، النيلةُ العميقة والذهبُ اللامع. رقصوا، غنّوا، ضحكوا حتى المساء. ما تألّقت Kiribounyi هكذا من قبل." ] },
          { title: "Taadidi، الشاهد", paragraphs: [
            "وفي الصفّ الأوّل، مَن وقف إلى جانب العروس؟ Taadidi. الصبيّ صاحب الجدائل صار في الثامنة عشرة الآن. كان هو شاهد أخته الكبرى. منتصبًا فخورًا، كأنّه يقول للعالم بأسره: «هذه أختي. انظروا ما صنعت.» فهو لم يفعل سوى أن فتح بابًا. أمّا الباقي كلّه، فكان منها." ] },
          { title: "Adama، في الزحام", paragraphs: [
            "وفي الزحام، بين صديقات Tofan وFanyi، كانت Adama. عشرون عامًا، وطفلها مضمومٌ إلى خاصرتها. كانت تشاهد هذا العرس المختار، هذا العرس الفرِح — كلّ ما لم يكنه عرسها هي." ] },
          { title: "وماذا لو هي أيضًا…", paragraphs: [
            "لكن بدل أن تحزن، ابتسمت Adama. فقد أثبتت Lima للتوّ شيئًا، أمام القرية كلّها: المرأة تستطيع أن تختار حياتها. أمسكت Tofan وFanyi بيدها وجذبتاها إلى الرقص. وهناك، وسط الضحكات، أخذت Adama تأمل. إن كانت Lima فعلتها… فهي أيضًا، ربّما. يومًا ما." ] },
          { title: "اثنان لا يدريان", paragraphs: [
            "وضع الحكواتي يده على طبله. في هذا العرس الكبير، يا أطفالي، كان هناك فتًى غنّى، مرّةً، لينقذ فتاة — دون أن يعلم أحد. وكانت هناك تلك الفتاة، التي صارت امرأة، تحفظ ذلك الصوت في أعماق قلبها. كانا هناك، كلاهما، تحت الشمس نفسها. ولم يدرِ أيٌّ منهما بعد. لكن قريبًا… آه، قريبًا." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "Lima 的大喜日子", sections: [
          { title: "Lima 让所有人都看走了眼", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。许多年过去了。Lima 呢？Lima 说到做到。她去远方求学，很远很远，而且学得很好。然后她回来了——一字不差，正如她答应过的。她成了全国都知道的护士，到附近的县里服务，好常常回村。当年说「女人不行」的那些人，都垂下了眼睛。" ] },
          { title: "村子从没这么挤过", paragraphs: [
            "那一周，村子从没这么挤过。人们从四面八方赶来。条条路上，都是人，都是花布，都是歌声。这么多人为了什么？为了一场婚礼。Lima 的婚礼。" ] },
          { title: "在她自己的时候", paragraphs: [
            "因为如今——念完了书，做出了事业，向所有人证明了自己的分量之后——Lima 才出嫁。在她选定的时候。嫁给她选定的人。在她自己的时候，她自己的。没有人替她做主。没有人。" ] },
          { title: "人人盛装", paragraphs: [
            "那一天，全村人都盛装打扮。最漂亮的长袍，最漂亮的花布，深沉的靛蓝和闪亮的金。人们跳舞、唱歌、笑到天黑。Kiribounyi 从没这样光彩过。" ] },
          { title: "证婚人 Taadidi", paragraphs: [
            "而在最前排，站在新娘身边的是谁？Taadidi。那个留着脏辫的小男孩，如今十八岁了。他做了大姐的证婚人。挺直，骄傲，仿佛要告诉全世界：「这是我姐姐。看看她做成了什么。」因为他不过是开了一扇门。其余的一切，都是她自己。" ] },
          { title: "人群里的 Adama", paragraphs: [
            "人群里，在 Tofan 和 Fanyi 的朋友中间，站着 Adama。二十岁，孩子紧紧搂在胯上。她望着这场自己选的、欢欢喜喜的婚礼——那是她自己的婚礼不曾有过的一切。" ] },
          { title: "那么，她是不是也……", paragraphs: [
            "可 Adama 没有伤心，反而笑了。因为 Lima 刚刚当着全村的面证明了一件事：女人能选择自己的人生。Tofan 和 Fanyi 拉起她的手，把她拽进了舞圈。就在那儿，在笑声中间，Adama 动了盼头。要是 Lima 能做到……那么她，或许也能。总有一天。" ] },
          { title: "两个还不知情的人", paragraphs: [
            "讲故事的人把手按在他的鼓上。在这场盛大的喜宴上，我的孩子们，有一个曾经唱过歌、救过一个女孩的男孩——没有人知道。还有那个女孩，如今已是女人，把那个声音守在心的最深处。他们俩都在那儿，在同一片阳光下。可谁都还不知道。不过快了……啊，快了。" ] },
        ] },
      },
    },
    {
      numero: 18, statut: "live",
      planche: "/images/taadidi/ep18-planche.png",
      cover: "/images/taadidi/ep18-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "La plus belle", "en": "The Fairest", "ar": "الأجمل", "zh": "最美的姑娘"},
      teaser: {"fr": "Un concours de Miss à la préfecture. Les jumeaux cheminots pensent aussitôt à Tofan — la plus belle, et la plus ambitieuse. Taadidi conseille à Kala de parler à sa tête, pas à son visage. Et la glace, entre eux, se fissure.", "en": "A Miss contest in the prefecture. The railwayman twins think at once of Tofan — the fairest, and the most ambitious. Taadidi advises Kala to speak to her mind, not her face. And the ice between them cracks.", "ar": "مسابقة ملكة جمال في المحافظة. التوأمان عاملا السكّة يفكّران فورًا في Tofan — الأجمل، والأكثر طموحًا. ينصح Taadidi أخاه Kala أن يخاطب عقلها، لا وجهها. فيتصدّع الجليد بينهما.", "zh": "县里要办一场选美。当铁路工的双胞胎兄弟立刻想到了 Tofan——最美，也最有志气。Taadidi 劝 Kala 去对她的头脑说话，别对她的脸说话。于是，两人之间的坚冰，裂开了一道缝。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "La plus belle", sections: [
          { title: "Les jumeaux cheminots", paragraphs: [
            "Écoutez, enfants de Kiribounyi. Vous souvenez-vous des jumeaux Kaly et Kala, les fils de Bakala ? Ils avaient grandi, et tous les deux travaillaient à présent sur le chemin de fer — cheminots, comme on dit. Un jour, à la gare, ils tombèrent ensemble sur une affiche. Un grand concours de Miss, pour toute la préfecture. Et la gagnante représenterait la préfecture au niveau du pays tout entier." ] },
          { title: "« Ça te fait penser à qui ? »", paragraphs: [
            "Kaly lut l'affiche, puis se tourna vers son frère. « Ça te fait penser à qui ? » Kala répondit sans même réfléchir : « À Tofan, bien sûr. C'est la plus belle fille du village. Et puis elle a ce côté ambitieux que sa sœur Fanyi n'a pas. »" ] },
          { title: "« Donc tu la trouves belle ? »", paragraphs: [
            "Kaly leva un sourcil, et sourit. « Donc tu la trouves belle ? Je croyais que tu la détestais. » Kala détourna les yeux. « C'est qu'ils nous ont fait voir de toutes les couleurs depuis l'enfance, ronchonna-t-il. — Mais ils ont aussi soigné maman », répondit doucement Kaly. Kala se tut un instant. « … C'est vrai. Alors ? On lui dit, pour le concours ? »" ] },
          { title: "On alerte Taadidi", paragraphs: [
            "Ne sachant trop comment s'y prendre, les jumeaux allèrent trouver Taadidi — le petit frère de Tofan. Car il faut vous dire une chose : personne n'osait parler facilement à Tofan. En grandissant, elle désarmait tout le monde d'un seul regard." ] },
          { title: "Ce qu'elle a dans la tête", paragraphs: [
            "Taadidi les écouta. Puis il hocha la tête. « Je pense qu'elle ne voudra pas, dit-il. Ma sœur aime qu'on la reconnaisse pour ce qu'elle a dans la tête. Pas seulement pour ce qu'on voit. » Mais en disant cela, une petite idée lui vint. Et il sourit." ] },
          { title: "Le conseil de Taadidi", paragraphs: [
            "« Je ne sais pas ce qu'elle pensera du concours, dit Taadidi à Kala. Mais si tu lui dis ce que tu viens de me dire — qu'elle est ambitieuse, qu'elle a quelque chose en plus — sans paraître insistant, sans rien vouloir d'autre… alors, peut-être, les choses entre vous deux pourraient s'arranger. Et qui sait ? Ça libérerait nos deux autres tourtereaux. » Il jeta un œil vers Kaly et Fanyi, qui, un peu plus loin, n'osaient même pas se regarder." ] },
          { title: "Kala parle à Tofan", paragraphs: [
            "Alors Kala prit son courage à deux mains. Il alla trouver Tofan. Il ne dit pas un mot sur son joli visage — ça, elle l'entendait dix fois par jour. Il parla du concours. Puis il ajouta : « On dit que c'est pour les belles. Mais moi, je crois que c'est surtout pour celles qui ont de l'ambition et une tête bien faite. Comme toi. » Tofan, qui s'attendait à une moquerie, ou à un compliment creux, resta sans voix." ] },
          { title: "La glace se fissure", paragraphs: [
            "Pour la première fois, Tofan regarda Kala autrement. « Tiens, dit-elle enfin, un demi-sourire au coin des lèvres. Le dur Kala saurait donc voir plus loin que le bout de son nez ? » Ce n'était pas encore de l'amitié. Mais ce jour-là, la glace se fissura. Et un peu plus loin, Kaly et Fanyi, eux, respirèrent enfin. Le conteur sourit : quand le plus dur des cœurs se met à voir clair… il se passe parfois bien des choses. Mais ça, mes enfants, c'est l'histoire de demain." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Fairest", sections: [
          { title: "The Railwayman Twins", paragraphs: [
            "Listen, children of Kiribounyi. Do you remember the twins Kaly and Kala, the sons of Bakala? They had grown up, and both now worked on the railway — railwaymen, as they say. One day, at the station, they came upon a poster together. A great Miss contest, for the whole prefecture. And the winner would represent the prefecture for the entire country." ] },
          { title: "“Who Does It Make You Think Of?”", paragraphs: [
            "Kaly read the poster, then turned to his brother. “Who does it make you think of?” Kala answered without even thinking: “Tofan, of course. She's the prettiest girl in the village. And she has that ambitious side her sister Fanyi doesn't.”" ] },
          { title: "“So You Find Her Beautiful?”", paragraphs: [
            "Kaly raised an eyebrow, and smiled. “So you find her beautiful? I thought you hated her.” Kala looked away. “It's that they gave us a hard time all through childhood,” he grumbled. “But they also healed our mother,” Kaly answered gently. Kala fell silent for a moment. “…That's true. So? Do we tell her, about the contest?”" ] },
          { title: "They Alert Taadidi", paragraphs: [
            "Not quite knowing how to go about it, the twins went to find Taadidi — Tofan's little brother. For there's something you must know: no one dared speak easily to Tofan. As she grew up, she disarmed everyone with a single look." ] },
          { title: "What She Has in Her Head", paragraphs: [
            "Taadidi listened to them. Then he nodded. “I think she won't want to,” he said. “My sister likes to be recognized for what she has in her head. Not only for what people see.” But as he said it, a small idea came to him. And he smiled." ] },
          { title: "Taadidi's Advice", paragraphs: [
            "“I don't know what she'll think of the contest,” Taadidi said to Kala. “But if you tell her what you just told me — that she's ambitious, that she has something more — without seeming pushy, without wanting anything else… then, perhaps, things between the two of you could work out. And who knows? It would free our two other lovebirds.” He glanced toward Kaly and Fanyi, who, a little way off, did not even dare look at each other." ] },
          { title: "Kala Speaks to Tofan", paragraphs: [
            "So Kala took his courage in both hands. He went to find Tofan. He did not say a word about her pretty face — that, she heard ten times a day. He spoke of the contest. Then he added: “They say it's for the beautiful ones. But I think it's mostly for those who have ambition and a good head. Like you.” Tofan, who expected a jeer or an empty compliment, was left speechless." ] },
          { title: "The Ice Cracks", paragraphs: [
            "For the first time, Tofan looked at Kala differently. “Well,” she said at last, half a smile at the corner of her lips. “So hard Kala can see further than the end of his nose?” It was not friendship yet. But that day, the ice cracked. And a little way off, Kaly and Fanyi breathed at last. The storyteller smiled: when the hardest of hearts begins to see clearly… many things can happen. But that, my children, is the story of tomorrow." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الأجمل", sections: [
          { title: "التوأمان عاملا السكّة", paragraphs: [
            "اسمعوا، يا أطفال Kiribounyi. أتذكرون التوأمين Kaly وKala، ابنَي Bakala؟ كانا قد كبرا، وصارا كلاهما يعملان في سكّة الحديد — عاملَي سكّة، كما يُقال. ذات يوم، في المحطّة، وقعا معًا على مُلصَق. مسابقة ملكة جمال كبيرة، للمحافظة كلّها. والفائزة ستمثّل المحافظة على مستوى البلد بأسره." ] },
          { title: "«بمن يذكّرك هذا؟»", paragraphs: [
            "قرأ Kaly المُلصَق، ثمّ التفت إلى أخيه. «بمن يذكّرك هذا؟» أجاب Kala دون أن يفكّر حتى: «بـTofan، بالطبع. هي أجمل فتاة في القرية. ثمّ إنّ فيها ذلك الطموح الذي لا تملكه أختها Fanyi.»" ] },
          { title: "«إذًا تراها جميلة؟»", paragraphs: [
            "رفع Kaly حاجبًا، وابتسم. «إذًا تراها جميلة؟ كنتُ أظنّك تكرهها.» أشاح Kala بنظره. «هما أذاقانا الأمرّين منذ الطفولة، تذمّر. — لكنّهما داويا أمّنا أيضًا»، أجاب Kaly برفق. صمت Kala لحظة. «…هذا صحيح. فماذا؟ أنخبرها بأمر المسابقة؟»" ] },
          { title: "ينبّهان Taadidi", paragraphs: [
            "وإذ لم يعرفا تمامًا كيف يتصرّفان، ذهب التوأمان إلى Taadidi — أخي Tofan الصغير. فلا بدّ أن أقول لكم شيئًا: لم يكن أحدٌ يجرؤ على مخاطبة Tofan بسهولة. وهي تكبر، صارت تنزع سلاح الجميع بنظرةٍ واحدة." ] },
          { title: "ما في عقلها", paragraphs: [
            "أصغى إليهما Taadidi. ثمّ أومأ برأسه. «أظنّها لن تريد، قال. أختي تحبّ أن يُعترَف بها لما في عقلها. لا لما يُرى فقط.» لكنّه إذ قال ذلك، خطرت له فكرةٌ صغيرة. وابتسم." ] },
          { title: "نصيحة Taadidi", paragraphs: [
            "«لا أدري ما رأيها في المسابقة، قال Taadidi لـKala. لكن إن قلتَ لها ما قلتَه لي للتوّ — أنّها طموحة، أنّ فيها شيئًا زائدًا — دون أن تبدو مُلحًّا، دون أن تريد شيئًا آخر… فعندئذٍ، ربّما، يمكن للأمور بينكما أن تُصلَح. ومن يدري؟ قد يُحرّر ذلك حمامتَينا الأُخريَين.» وألقى نظرةً نحو Kaly وFanyi، اللذين، على بُعدٍ قليل، لم يكونا يجرؤان حتى على النظر أحدهما إلى الآخر." ] },
          { title: "Kala يكلّم Tofan", paragraphs: [
            "فجمع Kala شجاعته. ذهب إلى Tofan. لم يقل كلمةً عن وجهها الجميل — ذاك، كانت تسمعه عشر مرّاتٍ في اليوم. تكلّم عن المسابقة. ثمّ أضاف: «يقولون إنّها للجميلات. لكنّي أرى أنّها قبل كلّ شيء لمن عندهنّ طموحٌ وعقلٌ راجح. مثلك.» Tofan، التي كانت تتوقّع سخريةً أو مجاملةً جوفاء، بقيت بلا كلام." ] },
          { title: "الجليد يتصدّع", paragraphs: [
            "لأوّل مرّة، نظرت Tofan إلى Kala نظرةً أخرى. «عجبًا، قالت أخيرًا، ونصفُ ابتسامةٍ في زاوية شفتيها. أيستطيع Kala القاسي أن يرى أبعد من طرف أنفه؟» لم يكن ذلك صداقةً بعد. لكن في ذلك اليوم، تصدّع الجليد. وعلى بُعدٍ قليل، Kaly وFanyi، تنفّسا أخيرًا. ابتسم الحكواتي: حين يبدأ أقسى القلوب يرى بوضوح… تحدث أحيانًا أمورٌ كثيرة. لكن ذلك، يا أطفالي، حكاية الغد." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "最美的姑娘", sections: [
          { title: "当铁路工的双胞胎", paragraphs: [
            "听着，Kiribounyi 的孩子们。你们还记得那对双胞胎 Kaly 和 Kala，Bakala 的儿子吗？他们都长大了，如今两人都在铁路上做工——人们叫他们铁路工。一天，在车站，兄弟俩一起撞见一张海报。一场盛大的选美，面向全县。冠军还要代表全县，去全国一较高下。" ] },
          { title: "「这让你想起谁？」", paragraphs: [
            "Kaly 读完海报，转向弟弟。「这让你想起谁？」Kala 想都没想就答：「当然是 Tofan。她是村里最美的姑娘。再说，她有那么一股子志气，那是她妹妹 Fanyi 没有的。」" ] },
          { title: "「这么说你觉得她美？」", paragraphs: [
            "Kaly 挑了挑眉，笑了。「这么说你觉得她美？我还以为你恨她呢。」Kala 把眼睛移开。「还不是因为从小他们让我们吃尽了苦头，」他嘟囔着。「可他们也医好了妈妈，」Kaly 轻轻地说。Kala 沉默了一会儿。「……这倒是真的。那？选美的事，咱们跟她说不说？」" ] },
          { title: "他们去通报 Taadidi", paragraphs: [
            "兄弟俩不太知道该怎么开口，就去找 Taadidi——Tofan 的弟弟。因为有件事得告诉你们：没人敢轻易跟 Tofan 搭话。她越长大，一个眼神就能让所有人没了脾气。" ] },
          { title: "她脑子里的东西", paragraphs: [
            "Taadidi 听他们说完。然后点点头。「我看她不会愿意，」他说。「我姐姐喜欢人家因为她脑子里的东西认可她。不光是因为人家看得见的那些。」可话一出口，他心里冒出个小主意。他笑了。" ] },
          { title: "Taadidi 的主意", paragraphs: [
            "「我不知道她对选美会怎么想，」Taadidi 对 Kala 说。「不过你要是把刚才跟我说的话告诉她——说她有志气，说她有过人之处——不显得死缠烂打，也别图别的……那么，也许，你们俩之间的事就有转机了。谁知道呢？说不定还能解放我们另外那两只小鸳鸯。」他朝 Kaly 和 Fanyi 那边瞟了一眼——那两人在不远处，连看都不敢看对方一眼。" ] },
          { title: "Kala 跟 Tofan 说话", paragraphs: [
            "于是 Kala 鼓起勇气。他去找 Tofan。他一个字也没提她那张漂亮脸蛋——那种话，她一天要听十遍。他说起了选美。然后他加了一句：「人家说这是给美人办的。可我觉得，它更是给那些有志气、有头脑的人办的。比如你。」Tofan 本以为会是一句嘲笑，或者一句空洞的恭维，一时竟说不出话来。" ] },
          { title: "坚冰裂开一道缝", paragraphs: [
            "Tofan 头一回用另一种眼光看 Kala。「哟，」她终于开口，嘴角挂着半个笑。「硬骨头 Kala，居然也能看得比鼻子尖远？」那还算不上友情。可那一天，坚冰裂开了一道缝。而在不远处，Kaly 和 Fanyi，总算松了口气。讲故事的人笑了：当最硬的心开始看清楚……有时就会发生好些事呢。可那个，我的孩子们，是明天的故事了。" ] },
        ] },
      },
    },
    {
      numero: 19, statut: "live",
      planche: "/images/taadidi/ep19-planche.png",
      cover: "/images/taadidi/ep19-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Madame la bonté", "en": "Lady Kindness", "ar": "سيّدة الطيبة", "zh": "善良夫人"},
      teaser: {"fr": "Taadidi envoie Kaly voir Fanyi… qui l'accueille, faussement fâchée, et le met à l'épreuve : un fût de néré, une moisson, un bouquet — rien ne suffit. Jusqu'à ce que Kaly cesse de prouver, et trouve les seuls mots qui comptent. Sana et Bakala enfin réunis.", "en": "Taadidi sends Kaly to see Fanyi… who greets him, falsely cross, and puts him to the test: a vat of néré, a harvest, a bouquet — nothing is enough. Until Kaly stops proving himself, and finds the only words that count. Sana and Bakala united at last.", "ar": "يرسل Taadidi أخاه Kaly إلى Fanyi… فتستقبله متظاهرةً بالغضب، وتضعه في الاختبار: برميل نيري، حصاد، باقة زهور — لا شيء يكفي. إلى أن يكفّ Kaly عن إثبات نفسه، فيجد الكلمات الوحيدة التي تهمّ. وأخيرًا يجتمع آل Sana وآل Bakala.", "zh": "Taadidi 打发 Kaly 去见 Fanyi……她却假装生气地迎着他，把他考了又考：一桶 néré、一场收割、一束花——样样都不够。直到 Kaly 不再证明自己，找到了唯一要紧的那句话。Sana 家和 Bakala 家，终于结成一家。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Madame la bonté", sections: [
          { title: "Taadidi envoie Kaly", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Depuis que Kala et Tofan ne se faisaient plus la guerre, l'air était plus léger au village. Un jour, Taadidi vint trouver Kaly, l'œil malicieux. « Ma sœur Fanyi a un mot à te dire. Va donc la voir. » Le cœur de Kaly bondit. Enfin ! Cette liberté retrouvée allait, il l'espérait, se changer en quelque chose de concret — et vite ! Il partit en courant, tout sourire." ] },
          { title: "La surprise", paragraphs: [
            "Mais quelle surprise l'attendait ! Fanyi l'accueillit les bras croisés, le sourcil froncé. « Il paraît, dit-elle, que tu as conseillé de présenter TOFAN au concours de Miss. Pas moi. Ta presque-jumelle ! Ma sœur serait belle, et moi, je serais quoi ? Un sac de riz ? » Or, mes enfants, on appelait Fanyi « la bonté » même. Mais ce jour-là, la bonté avait décidé d'éprouver son nom… et son homme. (En vérité, elle s'amusait comme une folle. Mais ça, Kaly l'ignorait.)" ] },
          { title: "Premier défi : le fût de néré", paragraphs: [
            "« Tu veux te faire pardonner ? dit Fanyi, l'air de rien. Prouve-le. » Plein d'espoir, Kaly s'y mit. Il remplit le grand fût de néré jusqu'au bord — de quoi faire du kenda pour tout le quartier. « Voilà ! » dit-il, fier. Fanyi haussa une épaule. « Et alors ? N'importe quel garçon costaud en ferait autant. »" ] },
          { title: "Deuxième défi : la moisson", paragraphs: [
            "Kaly ne se découragea pas. Le lendemain, il moissonna tout seul un lopin de terre de la famille — du lever au coucher du soleil, le dos en compote. « Et ça ? » souffla-t-il. Fanyi pencha la tête. « Mon père aussi sait moissonner. Ça prouve quoi, au juste ? »" ] },
          { title: "Troisième défi : les fleurs", paragraphs: [
            "Alors, à bout, Kaly se souvint des films qu'on projetait parfois au village. Il courut jusqu'au pré et cueillit un énorme bouquet de fleurs sauvages, comme les amoureux dans les histoires. Il le tendit à Fanyi, le souffle court. Elle regarda le bouquet, puis le regarda, lui. « Et j'en fais quoi, moi, de ça ? Ça se mange ? Tu te crois dans un film ? »" ] },
          { title: "À bout de défis", paragraphs: [
            "Le fût, la moisson, les fleurs… Kaly avait tout fait. Il n'avait plus de bras, plus de souffle, plus une seule idée. Alors il se tut. Et dans ce silence, le cœur à nu, il trouva enfin la seule chose vraie qui lui restait." ] },
          { title: "La demande", paragraphs: [
            "Kaly releva la tête. Il ne parla plus de défis. Il regarda Fanyi droit dans les yeux. « Fanyi. Je ne veux pas que tu sois la Miss de qui que ce soit. Tu es la Miss de mon univers. Je veux que tu sois ma femme. » Puis, d'une voix posée : « Permets-moi de demander ta main, et qu'on unisse nos familles. »" ] },
          { title: "Madame la bonté désarmée", paragraphs: [
            "Et là — enfin ! — Madame la bonté n'eut plus rien à répliquer. Car pour une maîtresse d'école qui prend tout au sérieux, il n'existe rien de plus sérieux que ça. Son faux courroux fondit d'un coup, et un vrai sourire le remplaça. « Oui », dit-elle tout bas. Ce jour-là, le clan de Sana et le clan de Bakala furent réunis par le cœur. Le conteur éclata de rire : elle l'avait éprouvé jusqu'au bout — et lui, pour une fois, avait trouvé les bons mots." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Lady Kindness", sections: [
          { title: "Taadidi Sends Kaly", paragraphs: [
            "Listen to what came next, children of Kiribounyi. Ever since Kala and Tofan had stopped warring, the air was lighter in the village. One day, Taadidi came to find Kaly, a mischievous look in his eye. “My sister Fanyi has a word for you. Go and see her.” Kaly's heart leapt. At last! This newfound freedom would, he hoped, turn into something real — and fast! He ran off, all smiles." ] },
          { title: "The Surprise", paragraphs: [
            "But what a surprise awaited him! Fanyi greeted him with arms crossed, brow furrowed. “It seems,” she said, “that you advised putting TOFAN forward for the Miss contest. Not me. Your almost-twin! My sister gets to be the beautiful one, and what am I? A sack of rice?” Now, my children, Fanyi was called “kindness” itself. But that day, kindness had decided to test her name… and her man. (In truth, she was enjoying herself enormously. But that, Kaly did not know.)" ] },
          { title: "First Trial: The Vat of Néré", paragraphs: [
            "“You want to be forgiven?” said Fanyi, all innocence. “Prove it.” Full of hope, Kaly set to work. He filled the great vat of néré to the brim — enough to make kenda for the whole quarter. “There!” he said, proud. Fanyi lifted one shoulder. “So what? Any strapping boy could do as much.”" ] },
          { title: "Second Trial: The Harvest", paragraphs: [
            "Kaly was not discouraged. The next day, he harvested a plot of the family's land all by himself — from sunrise to sunset, his back in tatters. “And this?” he panted. Fanyi tilted her head. “My father can harvest too. What exactly does that prove?”" ] },
          { title: "Third Trial: The Flowers", paragraphs: [
            "Then, at his wit's end, Kaly remembered the films sometimes shown in the village. He ran to the meadow and gathered a huge bouquet of wild flowers, like the lovers in the stories. He held it out to Fanyi, breathless. She looked at the bouquet, then looked at him. “And what am I supposed to do with this? Can you eat it? Do you think you're in a film?”" ] },
          { title: "Out of Trials", paragraphs: [
            "The vat, the harvest, the flowers… Kaly had done it all. He had no arms left, no breath, not a single idea. So he fell silent. And in that silence, his heart laid bare, he found at last the only true thing he had left." ] },
          { title: "The Proposal", paragraphs: [
            "Kaly raised his head. He spoke no more of trials. He looked Fanyi straight in the eyes. “Fanyi. I don't want you to be anyone's Miss. You are the Miss of my whole world. I want you to be my wife.” Then, in a steady voice: “Allow me to ask for your hand, and to unite our families.”" ] },
          { title: "Lady Kindness Disarmed", paragraphs: [
            "And there — at last! — Lady Kindness had nothing left to reply. For to a schoolteacher who takes everything seriously, there is nothing more serious than that. Her false anger melted in an instant, and a true smile took its place. “Yes,” she said softly. That day, the clan of Sana and the clan of Bakala were united by the heart. The storyteller burst out laughing: she had tested him to the very end — and he, for once, had found the right words." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "سيّدة الطيبة", sections: [
          { title: "Taadidi يرسل Kaly", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. منذ أن كفّ Kala وTofan عن التحارب، صار الهواء أخفّ في القرية. ذات يوم، جاء Taadidi إلى Kaly، وفي عينه لمعةُ مكر. «أختي Fanyi عندها كلمةٌ تقولها لك. اذهب إليها.» قفز قلب Kaly. أخيرًا! هذه الحرّية المستعادة ستتحوّل، كما رجا، إلى شيءٍ ملموس — وبسرعة! انطلق راكضًا، يملؤه الابتسام." ] },
          { title: "المفاجأة", paragraphs: [
            "لكن يا لها من مفاجأةٍ كانت تنتظره! استقبلته Fanyi وذراعاها معقودتان، وحاجبها مقطّب. «يبدو، قالت، أنّك نصحت بترشيح TOFAN لمسابقة ملكة الجمال. لا أنا. أنا التي أكاد أكون توأمك! أختي تكون الجميلة، وأنا، ماذا أكون؟ كيس أرزّ؟» وكانت Fanyi، يا أطفالي، تُلقّب بـ«الطيبة» نفسها. لكن في ذلك اليوم، قرّرت الطيبة أن تختبر اسمها… ورجلها. (في الحقيقة، كانت تستمتع أيّما استمتاع. لكنّ Kaly لم يكن يدري.)" ] },
          { title: "التحدّي الأوّل: برميل النيري", paragraphs: [
            "«تريد أن أسامحك؟ قالت Fanyi، بلا مبالاة. أثبت ذلك.» ملؤه الأمل، شرع Kaly في العمل. ملأ برميل النيري الكبير حتى حافّته — ما يكفي لصنع kenda للحيّ كلّه. «ها هو!» قال فخورًا. هزّت Fanyi كتفًا واحدة. «وماذا في ذلك؟ أيّ فتًى قويّ يفعل مثله.»" ] },
          { title: "التحدّي الثاني: الحصاد", paragraphs: [
            "لم ييأس Kaly. في اليوم التالي، حصد وحده قطعةً من أرض العائلة — من شروق الشمس إلى غروبها، وظهره محطّم. «وهذا؟» لهث. أمالت Fanyi رأسها. «أبي أيضًا يعرف الحصاد. وماذا يُثبت هذا بالضبط؟»" ] },
          { title: "التحدّي الثالث: الزهور", paragraphs: [
            "عندئذٍ، وقد بلغ منتهاه، تذكّر Kaly الأفلام التي كانت تُعرض أحيانًا في القرية. ركض إلى المرج وقطف باقةً ضخمة من الزهور البرّية، كالعشّاق في الحكايات. مدّها إلى Fanyi، ونفَسُه متقطّع. نظرت إلى الباقة، ثمّ نظرت إليه. «وماذا أصنع أنا بهذه؟ أتُؤكَل؟ أتحسب نفسك في فيلم؟»" ] },
          { title: "نفدت التحدّيات", paragraphs: [
            "البرميل، الحصاد، الزهور… كان Kaly قد فعل كلّ شيء. لم يبقَ له ذراعان، ولا نفَس، ولا فكرةٌ واحدة. فصمت. وفي ذلك الصمت، وقلبه عارٍ، وجد أخيرًا الشيء الحقيقيّ الوحيد الذي بقي له." ] },
          { title: "الطلب", paragraphs: [
            "رفع Kaly رأسه. لم يعد يتكلّم عن التحدّيات. نظر في عيني Fanyi مباشرة. «Fanyi. لا أريدك أن تكوني ملكة جمالِ أحد. أنتِ ملكة جمال عالمي كلّه. أريدك أن تكوني زوجتي.» ثمّ، بصوتٍ رزين: «اسمحي لي أن أطلب يدك، وأن نجمع عائلتَينا.»" ] },
          { title: "سيّدة الطيبة منزوعة السلاح", paragraphs: [
            "وهناك — أخيرًا! — لم يبقَ لدى سيّدة الطيبة ما تردّ به. فبالنسبة لمعلّمةٍ تأخذ كلّ شيء على محمل الجدّ، لا شيء أجدّ من هذا. ذاب غضبها المُصطنع دفعةً واحدة، وحلّت محلّه ابتسامةٌ حقيقيّة. «نعم»، قالت بصوتٍ خفيض. في ذلك اليوم، اجتمع آل Sana وآل Bakala بالقلب. انفجر الحكواتي ضاحكًا: لقد اختبرته حتى النهاية — وهو، لمرّةٍ واحدة، وجد الكلمات الصحيحة." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "善良夫人", sections: [
          { title: "Taadidi 打发 Kaly", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。自从 Kala 和 Tofan 不再斗气，村里的空气都轻松了。一天，Taadidi 来找 Kaly，眼里带着调皮。「我姐姐 Fanyi 有句话要跟你说。你去见见她吧。」Kaly 的心一下子蹦了起来。总算！这失而复得的自由，他盼着，要变成点实实在在的东西——而且要快！他撒腿就跑，满脸是笑。" ] },
          { title: "意外", paragraphs: [
            "可等着他的，是怎样一个意外啊！Fanyi 抱着胳膊迎他，皱着眉。「听说啊，」她说，「你出主意让 TOFAN 去参加选美。不是我。我可是跟你差不多的双生姐妹！我姐姐当那个美人，那我算什么？一袋米吗？」要知道，我的孩子们，人家管 Fanyi 叫「善良」本人。可那一天，善良决定考一考自己的名号……还有自己的男人。（其实，她乐得不行。可这个，Kaly 不知道。）" ] },
          { title: "第一关：那桶 néré", paragraphs: [
            "「你想我原谅你？」Fanyi 漫不经心地说。「那就证明给我看。」Kaly 满怀希望，干了起来。他把那只大桶装满 néré，一直装到桶沿——够给一整片街区做 kenda 了。「瞧！」他得意地说。Fanyi 耸了耸一边肩膀。「那又怎样？随便哪个壮小伙都做得来。」" ] },
          { title: "第二关：收割", paragraphs: [
            "Kaly 没有气馁。第二天，他独自一人收割了家里的一块地——从日出到日落，腰都直不起来了。「这个呢？」他喘着气。Fanyi 歪了歪头。「我父亲也会收割。这到底证明了什么？」" ] },
          { title: "第三关：花", paragraphs: [
            "于是，黔驴技穷的 Kaly，想起了村里偶尔放映的电影。他跑到草地上，采了一大束野花，就像故事里的恋人那样。他气喘吁吁地把花递给 Fanyi。她看看花，又看看他。「这玩意儿叫我拿来干嘛？能吃吗？你当自己在演电影呢？」" ] },
          { title: "招数用尽", paragraphs: [
            "桶、收割、花……Kaly 全做了。他没了力气，没了气，连一个主意都没了。于是他不作声了。就在那片沉默里，心赤裸裸地袒着，他终于找到了自己仅剩的、唯一真实的东西。" ] },
          { title: "求婚", paragraphs: [
            "Kaly 抬起头。他不再说什么考验了。他直直看进 Fanyi 的眼睛。「Fanyi。我不要你当谁的选美皇后。你是我整个世界的皇后。我要你做我的妻子。」然后，他声音沉稳地说：「请允许我向你提亲，让我们两家结成一家。」" ] },
          { title: "善良夫人也没了辙", paragraphs: [
            "就在这时——总算！——善良夫人再也没什么可回的了。因为对一个事事认真的女教师来说，没有比这更认真的事了。她那假装的怒气一下子化了，换上一个真心的笑。「好，」她轻轻地说。那一天，Sana 家和 Bakala 家，由心结成了一家。讲故事的人放声大笑：她把他考到了最后——而他，破天荒头一回，找对了话。" ] },
        ] },
      },
    },
    {
      numero: 20, statut: "live",
      planche: "/images/taadidi/ep20-planche.png",
      cover: "/images/taadidi/ep20-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Ce qu'elle avait dans la tête", "en": "What She Had in Her Head", "ar": "ما في رأسها", "zh": "她脑子里的东西"},
      teaser: {"fr": "Tofan se présente au concours de Miss — mais avec un projet pour son village : aménager les plaines, et lancer le kenda Neribounyi, fabriqué au village. Elle ne parle pas de sa beauté ; elle fait goûter ses cubes. Préfectoral, puis national : elle gagne avec ce qu'elle a dans la tête.", "en": "Tofan enters the Miss contest — but with a project for her village: develop the plains, and launch the Neribounyi kenda, made in the village. She doesn't speak of her beauty; she has people taste her cubes. Prefectoral, then national: she wins with what she has in her head.", "ar": "تترشّح Tofan لمسابقة ملكة الجمال — لكن بمشروعٍ لقريتها: استصلاح السهول، وإطلاق kenda Neribounyi المصنوع في القرية. لا تتكلّم عن جمالها؛ بل تُذيق الناس مكعّباتها. على مستوى المحافظة ثمّ الوطن: تفوز بما في رأسها.", "zh": "Tofan 报名参加选美——可她带着一个为村子准备的方案：开发平原，推出村里自产的 Neribounyi kenda。她不谈自己的美貌；她让人品尝她的小方块。县级、然后全国：她靠脑子里的东西赢了。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Ce qu'elle avait dans la tête", sections: [
          { title: "Tofan se présente", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Vous vous souvenez du concours de Miss ? Eh bien, Tofan décida de s'y présenter. Mais pas comme les autres. Elle ne monta pas sur l'estrade pour qu'on admire son visage. Elle y monta avec une idée dans la tête. Une grande idée pour son village." ] },
          { title: "Kala, son meilleur ami", paragraphs: [
            "Et devinez qui marchait à ses côtés ? Kala. Oui, Kala ! Celui qui, autrefois, la détestait. Au village, on crut qu'ils allaient se marier. Eh bien non, mes enfants. Ils devinrent tout autre chose — et c'est parfois plus précieux : les meilleurs amis du monde. Kala portait ses dossiers, défendait ses idées, et la relevait quand le doute la prenait." ] },
          { title: "Le projet : les plaines", paragraphs: [
            "Quel était donc ce projet ? Tofan avait regardé les grandes plaines qui entouraient le village. Des terres immenses, riches, qui ne demandaient qu'à nourrir tout le pays. « Aménageons-les, disait-elle. Que les yeux du pays se tournent vers nos plaines ! » C'était un beau rêve. Mais un rêve pour demain." ] },
          { title: "Le kenda Neribounyi", paragraphs: [
            "« Et pour aujourd'hui ? » lui demanda Taadidi. Car il fallait aussi quelque chose tout de suite. Alors, sur le conseil de son frère, Tofan ajouta une seconde idée. « Faisons du kenda. Notre kenda à nous, en petits cubes. » Et elle lui donna un nom : le kenda Neribounyi. (Vous vous souvenez ? Autrefois, de vilains cubes vendus de loin avaient rendu le village malade. Cette fois, le village ferait ses propres cubes — les bons, les vrais.)" ] },
          { title: "Taadidi rassemble les jeunes", paragraphs: [
            "À l'approche du concours, Taadidi réunit encore tous les jeunes du village. Mais cette fois, pas de ruse, pas de défi pour savoir qui cueillerait le plus ou remplirait le plus de fûts — tout ça, ils y étaient déjà habitués. Cette fois, une seule mission : faire connaître leur kenda dans tout le pays, et en faire une vraie économie — du travail pour les gens, de l'argent pour le village et les familles. Alors les jeunes cueillirent les gousses de néré (il y en avait à toute saison !), et quelques femmes, championnes du kenda, les encadrèrent : cuisson, fermentation, mise en forme, et emballage dans de belles feuilles de bananier." ] },
          { title: "Montrer, pas seulement dire", paragraphs: [
            "« Tofan, dit Taadidi, tu as de bonnes chances. Mais elles seraient encore plus grandes si tu ne te contentais pas de parler de ton kenda. Apporte-le. Fais-le goûter. » Et c'est ainsi qu'ils préparèrent des centaines de petits cubes Neribounyi — pas seulement pour la dégustation, mais comme un véritable appel à investir, bien au-delà de la simple récompense de la lauréate. Tofan, les yeux brillants, ajouta : « Et les épis de riz, je les porterai sur mon costume ! Pour qu'on voie, rien qu'en me regardant, la qualité de notre terre ! »" ] },
          { title: "Nakiry, le préfectoral", paragraphs: [
            "Le grand jour arriva. Devant tout Nakiry, Tofan monta sur l'estrade — des épis de riz dorés sur son costume, et des paniers de kenda Neribounyi à partager. Elle ne parla pas de sa beauté. Elle parla des plaines, du kenda, des jeunes et des femmes au travail. Et pendant qu'on goûtait ses petits cubes, la salle comprit qu'elle avait là bien plus qu'un joli visage. Tofan remporta le préfectoral haut la main." ] },
          { title: "Le national", paragraphs: [
            "Mais Tofan ne s'arrêta pas là. Elle porta son projet — les plaines, le kenda, les épis de riz — jusqu'au niveau national. Et là encore, elle gagna ! Mieux : des gens voulurent investir dans le village. Tout le pays tourna les yeux vers Kiribounyi, ses terres et son petit kenda emballé dans ses feuilles de bananier." ] },
          { title: "Ce qu'elle avait dans la tête", paragraphs: [
            "Le conteur sourit. On avait dit que la plus jolie l'emporterait. Mais Tofan, elle, l'emporta avec ce qu'elle avait dans la tête. Et celui qui applaudissait le plus fort, dans la foule ? Kala. Le dur Kala, devenu son plus fidèle ami. Mais ça… ce n'est pas encore tout. Car pendant ce temps, un autre, lui aussi, travaillait à changer le village." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "What She Had in Her Head", sections: [
          { title: "Tofan Enters", paragraphs: [
            "Listen to what came next, children of Kiribounyi. You remember the Miss contest? Well, Tofan decided to enter. But not like the others. She did not climb onto the stage for her face to be admired. She climbed up with an idea in her head. A great idea for her village." ] },
          { title: "Kala, Her Best Friend", paragraphs: [
            "And guess who walked at her side? Kala. Yes, Kala! The one who, once, had hated her. In the village, people thought they would marry. Well, no, my children. They became something else entirely — and that is sometimes more precious: the best of friends. Kala carried her files, defended her ideas, and lifted her up when doubt took hold of her." ] },
          { title: "The Project: The Plains", paragraphs: [
            "And what was this project? Tofan had looked at the great plains surrounding the village. Vast, rich lands, that asked only to feed the whole country. “Let's develop them,” she said. “Let the country's eyes turn to our plains!” It was a fine dream. But a dream for tomorrow." ] },
          { title: "The Neribounyi Kenda", paragraphs: [
            "“And for today?” Taadidi asked her. For something was needed right away too. So, on her brother's advice, Tofan added a second idea. “Let's make kenda. Our own kenda, in little cubes.” And she gave it a name: Neribounyi kenda. (Do you remember? Once, nasty cubes sold from far away had made the village sick. This time, the village would make its own cubes — the good ones, the real ones.)" ] },
          { title: "Taadidi Gathers the Young People", paragraphs: [
            "As the contest drew near, Taadidi once again gathered all the village's young people. But this time, no trick, no challenge to see who would gather the most or fill the most vats — all that, they were already used to. This time, a single mission: to make their kenda known across the whole country, and to turn it into a real economy — work for the people, money for the village and the families. So the young people gathered the néré pods (there were some in every season!), and a few women, champions of the kenda, guided them: cooking, fermenting, shaping, and wrapping in fine banana leaves." ] },
          { title: "Show, Not Just Tell", paragraphs: [
            "“Tofan,” said Taadidi, “you have a good chance. But it would be even greater if you didn't just talk about your kenda. Bring it. Have them taste it.” And so they prepared hundreds of little Neribounyi cubes — not only for the tasting, but as a real call to invest, far beyond the winner's mere prize. Tofan, eyes shining, added: “And the ears of rice, I'll wear them on my costume! So that, just by looking at me, people see the quality of our land!”" ] },
          { title: "Nakiry, the Prefectoral", paragraphs: [
            "The great day came. Before all of Nakiry, Tofan climbed onto the stage — golden ears of rice on her costume, and baskets of Neribounyi kenda to share. She did not speak of her beauty. She spoke of the plains, of the kenda, of the young people and the women at work. And while they tasted her little cubes, the hall understood that she had there far more than a pretty face. Tofan won the prefectoral hands down." ] },
          { title: "The National", paragraphs: [
            "But Tofan did not stop there. She carried her project — the plains, the kenda, the ears of rice — all the way to the national level. And there again, she won! Better still: people wanted to invest in the village. The whole country turned its eyes to Kiribounyi, its lands and its little kenda wrapped in its banana leaves." ] },
          { title: "What She Had in Her Head", paragraphs: [
            "The storyteller smiled. They had said the prettiest would win. But Tofan, she won with what she had in her head. And who clapped the loudest in the crowd? Kala. Hard Kala, become her most faithful friend. But that… is not yet all. For in the meantime, another, too, was working to change the village." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "ما في رأسها", sections: [
          { title: "Tofan تترشّح", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. أتذكرون مسابقة ملكة الجمال؟ حسنًا، قرّرت Tofan أن تترشّح. لكن لا كالأخريات. لم تصعد إلى المنصّة ليُعجَب الناس بوجهها. صعدت وفي رأسها فكرة. فكرةٌ كبيرة لقريتها." ] },
          { title: "Kala، أعزّ صديق لها", paragraphs: [
            "وخمّنوا مَن كان يسير إلى جانبها؟ Kala. نعم، Kala! ذاك الذي كان يكرهها في ما مضى. ظنّ أهل القرية أنّهما سيتزوّجان. لكن لا، يا أطفالي. صارا شيئًا آخر تمامًا — وهو أحيانًا أثمن: أعزّ صديقَين في الدنيا. كان Kala يحمل ملفّاتها، ويدافع عن أفكارها، ويرفعها حين يأخذها الشكّ." ] },
          { title: "المشروع: السهول", paragraphs: [
            "فما كان ذلك المشروع؟ كانت Tofan قد نظرت إلى السهول الكبيرة المحيطة بالقرية. أراضٍ شاسعة، غنيّة، لا تطلب إلّا أن تُطعم البلد كلّه. «لنستصلحها، كانت تقول. لتتّجه أنظار البلد إلى سهولنا!» كان حلمًا جميلًا. لكنّه حلمٌ للغد." ] },
          { title: "kenda Neribounyi", paragraphs: [
            "«وماذا لليوم؟» سألها Taadidi. فقد كان لا بدّ من شيءٍ على الفور أيضًا. فبنصيحة أخيها، أضافت Tofan فكرةً ثانية. «لنصنع kenda. kenda خاصًّا بنا، في مكعّباتٍ صغيرة.» وأعطته اسمًا: kenda Neribounyi. (أتذكرون؟ في ما مضى، مكعّباتٌ رديئة تُباع من بعيد كانت قد أمرضت القرية. هذه المرّة، القرية تصنع مكعّباتها بنفسها — الجيّدة، الحقيقيّة.)" ] },
          { title: "Taadidi يجمع الشباب", paragraphs: [
            "ومع اقتراب المسابقة، جمع Taadidi مرّةً أخرى كلّ شباب القرية. لكن هذه المرّة، لا حيلة، ولا تحدٍّ لمعرفة من يقطف أكثر أو يملأ أكثر من البراميل — كلّ ذلك، كانوا قد اعتادوه. هذه المرّة، مهمّةٌ واحدة: أن يُعرّفوا بـkenda في البلد كلّه، وأن يجعلوه اقتصادًا حقيقيًّا — عملًا للناس، ومالًا للقرية والعائلات. فقطف الشباب قرون النيري (كانت متوفّرةً في كلّ فصل!)، وأشرفت عليهم بضع نساءٍ، بطلات الـkenda: طبخًا، وتخميرًا، وتشكيلًا، وتغليفًا في أوراق موزٍ جميلة." ] },
          { title: "أن تُري، لا أن تقول فقط", paragraphs: [
            "«Tofan، قال Taadidi، حظوظك جيّدة. لكنّها ستكون أكبر لو لم تكتفي بالكلام عن kenda. أحضريه. أذيقيه.» وهكذا أعدّوا مئات المكعّبات الصغيرة Neribounyi — لا للتذوّق فحسب، بل كدعوةٍ حقيقيّة للاستثمار، أبعد بكثير من مجرّد جائزة الفائزة. وأضافت Tofan، وعيناها تلمعان: «وسنابل الأرزّ، سأحملها على زيّي! ليرى الناس، بمجرّد النظر إليّ، جودة أرضنا!»" ] },
          { title: "Nakiry، المستوى المحافظيّ", paragraphs: [
            "جاء اليوم الكبير. أمام Nakiry كلّها، صعدت Tofan إلى المنصّة — سنابلُ أرزٍّ ذهبيّة على زيّها، وسلالُ kenda Neribounyi للمشاركة. لم تتكلّم عن جمالها. تكلّمت عن السهول، وعن الـkenda، وعن الشباب والنساء في العمل. وبينما كان الناس يتذوّقون مكعّباتها الصغيرة، أدركت القاعة أنّ لديها هناك أكثر بكثير من وجهٍ جميل. فازت Tofan على مستوى المحافظة بجدارة." ] },
          { title: "المستوى الوطنيّ", paragraphs: [
            "لكنّ Tofan لم تتوقّف عند ذلك. حملت مشروعها — السهول، الـkenda، سنابل الأرزّ — إلى المستوى الوطنيّ. وهناك أيضًا، فازت! والأفضل: أراد ناسٌ أن يستثمروا في القرية. اتّجه البلد كلّه بأنظاره إلى Kiribounyi، وأراضيها، وكنداها الصغير المغلّف في أوراق الموز." ] },
          { title: "ما في رأسها", paragraphs: [
            "ابتسم الحكواتي. قيل إنّ الأجمل ستفوز. لكنّ Tofan، هي، فازت بما في رأسها. ومَن كان يصفّق بأشدّ ما يكون، في الزحام؟ Kala. Kala القاسي، الذي صار أوفى صديقٍ لها. لكن هذا… ليس كلّ شيء بعد. فبينما كان ذلك يجري، كان آخرُ، هو أيضًا، يعمل على تغيير القرية." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "她脑子里的东西", sections: [
          { title: "Tofan 报名", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。你们还记得那场选美吧？Tofan 决定去报名。可她跟别人不一样。她登上台，不是为了让人欣赏她的脸。她带着一个主意登台。一个为村子准备的大主意。" ] },
          { title: "Kala，她最好的朋友", paragraphs: [
            "猜猜谁陪在她身边？Kala。没错，Kala！就是从前恨她的那个。村里人以为他们要成亲了。可不是的，我的孩子们。他们成了另一种关系——而那有时更珍贵：世上最好的朋友。Kala 替她拎文件、为她的主意辩护，在她被疑虑攫住时把她扶起来。" ] },
          { title: "方案：那片平原", paragraphs: [
            "那么这是个什么方案呢？Tofan 望过环绕村子的那大片平原。辽阔、肥沃的土地，只求着去喂饱整个国家。「咱们把它开发出来，」她说。「让全国的目光都转向我们的平原！」那是个美梦。可那是留给明天的梦。" ] },
          { title: "Neribounyi kenda", paragraphs: [
            "「那今天呢？」Taadidi 问她。因为眼下也得有点实在的东西。于是，听了弟弟的主意，Tofan 又添了第二个点子。「咱们做 kenda。咱们自己的 kenda，做成小方块。」她还给它起了个名字：Neribounyi kenda。（你们还记得吧？从前，从远处贩来的劣质方块把村子弄病了。这一回，村子要做自己的方块——好的，真的。）" ] },
          { title: "Taadidi 召集年轻人", paragraphs: [
            "选美临近，Taadidi 又一次召集了村里所有的年轻人。可这一回，没有计谋，没有比谁采得多、谁装满更多桶的较量——那些，他们早就熟门熟路了。这一回，只有一个使命：让他们的 kenda 传遍全国，把它做成一门真正的营生——给人们活干，给村子和家家户户挣钱。于是年轻人去采 néré 的豆荚（一年四季都有！），几个 kenda 的好手大婶领着他们：蒸煮、发酵、定型，再用漂亮的芭蕉叶包起来。" ] },
          { title: "要让人看见，不只是说", paragraphs: [
            "「Tofan，」Taadidi 说，「你很有希望。可要是你不光是嘴上说你的 kenda，希望会更大。把它带上。让大家尝尝。」就这样，他们做了好几百块 Neribounyi 小方块——不只是为了品尝，更是一份实实在在的招商邀请，远远不止冠军那点奖赏。Tofan 眼睛发亮，又添了一句：「还有稻穗，我要把它们戴在我的礼服上！让人光是看着我，就看见我们土地的好！」" ] },
          { title: "Nakiry，县一级", paragraphs: [
            "大日子到了。在整个 Nakiry 面前，Tofan 登上了台——礼服上缀着金黄的稻穗，还有一篮篮 Neribounyi kenda 分给大家。她没有谈自己的美。她谈平原，谈 kenda，谈劳作的年轻人和妇女。而当人们品着她的小方块，全场都明白了：她拥有的，远不止一张漂亮脸蛋。Tofan 干脆利落地拿下了县一级。" ] },
          { title: "全国一级", paragraphs: [
            "可 Tofan 没有就此打住。她把她的方案——平原、kenda、稻穗——一路带到了全国一级。在那儿，她又赢了！更妙的是：有人想来村里投资。全国都把目光转向了 Kiribounyi，转向它的土地，和它那用芭蕉叶包着的小小 kenda。" ] },
          { title: "她脑子里的东西", paragraphs: [
            "讲故事的人笑了。人家说过，最漂亮的会赢。可 Tofan 呢，她是靠脑子里的东西赢的。而人群里，鼓掌最响的是谁？Kala。那个硬骨头 Kala，成了她最忠实的朋友。可这……还不是全部呢。因为就在这段日子里，还有一个人，也在为改变这村子使着劲。" ] },
        ] },
      },
    },
    {
      numero: 21, statut: "live",
      planche: "/images/taadidi/ep21-planche.png",
      cover: "/images/taadidi/ep21-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Kiké", "en": "Kiké", "ar": "Kiké", "zh": "Kiké"},
      teaser: {"fr": "Taadidi revient bâtisseur, et jette des ponts solides aux points d'eau — là où se retrouvent les femmes et jouent les enfants. Un jour, en chantant sur son pont, sa voix porte sur l'eau… et Adama, venue puiser, reconnaît enfin la voix qui l'avait sauvée. Le début d'une toute autre histoire.", "en": "Taadidi returns a builder, and throws solid bridges across the water points — where the women gather and the children play. One day, singing on his bridge, his voice carries over the water… and Adama, come to draw water, finally recognizes the voice that had saved her. The beginning of a whole other story.", "ar": "يعود Taadidi بنّاءً، فيمدّ جسورًا متينة عند نقاط الماء — حيث تجتمع النساء ويلعب الأطفال. وذات يوم، وهو يغنّي على جسره، يحمل الماءُ صوتَه… فتتعرّف Adama، التي جاءت تستقي، أخيرًا على الصوت الذي أنقذها. بداية حكايةٍ أخرى تمامًا.", "zh": "Taadidi 学成归来，成了建桥人，在一处处取水点架起结实的桥——那里是妇女相聚、孩子玩耍的地方。一天，他在桥上唱歌，歌声越过水面飘远……来打水的 Adama，终于认出了当年救过她的那个声音。一段全新故事的开端。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Kiké", sections: [
          { title: "Taadidi est revenu", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Le petit garçon aux locks était devenu un jeune homme. Taadidi était parti à l'école des métiers, et il en était revenu — bâtisseur. Et il avait tenu sa promesse : fini, les ouvrages bâclés qui s'écroulent. Désormais, il construisait solide. Pour que plus jamais un pont ne cède sous une mère et son enfant." ] },
          { title: "Les ponts", paragraphs: [
            "Et savez-vous ce qu'il bâtissait, par-dessus tout ? Des ponts. Partout dans le Nakiry, l'eau coupait les chemins — et c'est là, aux points d'eau, que les femmes se retrouvaient et que les enfants jouaient. Alors Taadidi jeta des ponts solides au-dessus des rivières, pour que chacun passe sans danger. Le bouclier de son enfance était devenu un métier." ] },
          { title: "Le village change", paragraphs: [
            "Et le village changea. L'eau ne séparait plus rien. On allait, on venait, on traversait sans peur. Et tandis que Tofan attirait sur Kiribounyi les yeux de tout le pays, les ponts de Taadidi en ouvraient les chemins. Bientôt, des gens vinrent de loin, juste pour voir ce village qui montait. Kiribounyi était devenu une vraie attraction." ] },
          { title: "Le chant", paragraphs: [
            "Or, quand Taadidi bâtissait, il faisait comme autrefois : il chantait. Un vieux chant à lui, pour donner le rythme et soutenir l'effort. Les ouvriers reprenaient en chœur, et le travail s'en allait plus léger. Sa voix portait loin, par-dessus l'eau." ] },
          { title: "Adama au point d'eau", paragraphs: [
            "Ce jour-là, Adama vint au point d'eau, sa calebasse sur la tête, son enfant sur la hanche. Comme toutes les femmes. Et soudain, elle s'arrêta net. Une voix. Là-bas, sur le pont en construction. Une voix qui chantait." ] },
          { title: "La voix", paragraphs: [
            "Adama sentit son cœur cogner. Cette voix-là… Elle la connaissait. Elle l'aurait reconnue entre mille. C'était la voix. Celle qui, des années plus tôt, derrière l'école, l'avait défendue sans rien demander. Celle qui l'avait crue. Celle qu'elle gardait, comme une braise, tout au fond du cœur depuis si longtemps." ] },
          { title: "La reconnaissance", paragraphs: [
            "Lentement, Adama s'approcha. Et elle le vit. Taadidi. Le jeune frère de ses amies Tofan et Fanyi, là, debout sur son pont, en train de chanter. C'était lui. Depuis le début, c'était lui. Taadidi leva les yeux. Il vit cette femme qui le regardait comme on regarde un revenant — et quelque chose, en lui aussi, se mit à comprendre." ] },
          { title: "Kiké", paragraphs: [
            "Le conteur posa la main sur son tambour. Mes enfants, le village s'était longtemps laissé aveugler par un beau visage, et n'avait pas su voir Adama. Mais il existait quelqu'un qui, lui, l'avait toujours vue. Et ce jour-là, au bord de l'eau, ce fut au tour d'Adama de le voir, lui, enfin. Deux personnes qui, pour la première fois, se voyaient vraiment. Et ça, mes enfants… c'est le début d'une toute autre histoire." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Kiké", sections: [
          { title: "Taadidi Has Returned", paragraphs: [
            "Listen to what came next, children of Kiribounyi. The little boy with the locks had become a young man. Taadidi had gone off to the trades school, and he had come back from it — a builder. And he had kept his promise: no more slapdash works that collapse. From now on, he built solid. So that never again would a bridge give way beneath a mother and her child." ] },
          { title: "The Bridges", paragraphs: [
            "And do you know what he built, above all else? Bridges. All across Nakiry, water cut off the paths — and it was there, at the water points, that the women gathered and the children played. So Taadidi threw solid bridges over the rivers, so that everyone could cross without danger. The shield of his childhood had become a trade." ] },
          { title: "The Village Changes", paragraphs: [
            "And the village changed. Water no longer separated anything. People came and went, crossed without fear. And while Tofan drew the whole country's eyes to Kiribounyi, Taadidi's bridges opened its paths. Soon, people came from far away, just to see this village on the rise. Kiribounyi had become a real attraction." ] },
          { title: "The Song", paragraphs: [
            "Now, when Taadidi built, he did as he used to: he sang. An old song of his own, to give the rhythm and sustain the effort. The workers took it up in chorus, and the work went lighter. His voice carried far, out over the water." ] },
          { title: "Adama at the Water Point", paragraphs: [
            "That day, Adama came to the water point, her calabash on her head, her child on her hip. Like all the women. And suddenly, she stopped short. A voice. Over there, on the bridge under construction. A voice that was singing." ] },
          { title: "The Voice", paragraphs: [
            "Adama felt her heart pound. That voice… She knew it. She would have known it among a thousand. It was the voice. The one that, years earlier, behind the school, had defended her asking nothing in return. The one that had believed her. The one she had kept, like an ember, deep in her heart for so long." ] },
          { title: "The Recognition", paragraphs: [
            "Slowly, Adama drew nearer. And she saw him. Taadidi. The younger brother of her friends Tofan and Fanyi, there, standing on his bridge, singing. It was him. From the very start, it had been him. Taadidi raised his eyes. He saw this woman looking at him the way one looks at someone returned from the dead — and something, in him too, began to understand." ] },
          { title: "Kiké", paragraphs: [
            "The storyteller laid his hand on his drum. My children, the village had long let itself be blinded by a beautiful face, and had not known how to see Adama. But there was someone who had always seen her. And that day, at the water's edge, it was Adama's turn to see him, at last. Two people who, for the first time, truly saw each other. And that, my children… is the beginning of a whole other story." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "Kiké", sections: [
          { title: "Taadidi عاد", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. الصبيّ الصغير صاحب الجدائل صار شابًّا. كان Taadidi قد ذهب إلى مدرسة المِهَن، وعاد منها — بنّاءً. وقد وفى بوعده: انتهى زمن الأعمال المتسرّعة التي تنهار. صار من الآن يبني متينًا. كي لا ينهار جسرٌ أبدًا تحت أمٍّ وطفلها." ] },
          { title: "الجسور", paragraphs: [
            "وأتدرون ماذا كان يبني، قبل كلّ شيء؟ الجسور. في كلّ أنحاء Nakiry، كان الماء يقطع الدروب — وهناك، عند نقاط الماء، كانت النساء تجتمع والأطفال يلعبون. فمدّ Taadidi جسورًا متينة فوق الأنهار، ليعبر كلٌّ بلا خطر. صار درعُ طفولته مهنة." ] },
          { title: "القرية تتغيّر", paragraphs: [
            "وتغيّرت القرية. لم يَعُد الماء يفصل شيئًا. كان الناس يذهبون ويأتون، ويعبرون بلا خوف. وبينما كانت Tofan تجذب إلى Kiribounyi أنظار البلد كلّه، كانت جسور Taadidi تفتح دروبها. وسرعان ما جاء الناس من بعيد، فقط ليروا هذه القرية الصاعدة. صارت Kiribounyi مَزارًا حقيقيًّا." ] },
          { title: "الغناء", paragraphs: [
            "وكان Taadidi، حين يبني، يفعل كما في ما مضى: يغنّي. أغنيةً قديمة خاصّةً به، ليعطي الإيقاع ويسند الجهد. كان العمّال يردّدون معه في جوقة، فيمضي العمل أخفّ. وكان صوته يحمل بعيدًا، فوق الماء." ] },
          { title: "Adama عند نقطة الماء", paragraphs: [
            "في ذلك اليوم، جاءت Adama إلى نقطة الماء، وقرعتها على رأسها، وطفلها على خاصرتها. كسائر النساء. وفجأةً، توقّفت في مكانها. صوت. هناك، على الجسر قيد البناء. صوتٌ يغنّي." ] },
          { title: "الصوت", paragraphs: [
            "شعرت Adama بقلبها يخفق. ذلك الصوت… كانت تعرفه. كانت ستعرفه من بين ألف. كان هو الصوت. ذاك الذي، قبل سنوات، خلف المدرسة، دافع عنها دون أن يطلب شيئًا. ذاك الذي صدّقها. ذاك الذي احتفظت به، كجمرة، في أعماق قلبها منذ زمنٍ طويل." ] },
          { title: "التعرّف", paragraphs: [
            "ببطء، اقتربت Adama. ورأته. Taadidi. الأخ الأصغر لصديقتيها Tofan وFanyi، هناك، واقفًا على جسره، يغنّي. كان هو. منذ البداية، كان هو. رفع Taadidi عينيه. رأى تلك المرأة تنظر إليه كما يُنظَر إلى عائدٍ من الموت — وبدأ شيءٌ، فيه هو أيضًا، يفهم." ] },
          { title: "Kiké", paragraphs: [
            "وضع الحكواتي يده على طبله. يا أطفالي، طالما تركت القرية وجهًا جميلًا يُعميها، فلم تعرف أن ترى Adama. لكن كان هناك مَن رآها دائمًا. وفي ذلك اليوم، على ضفّة الماء، جاء دور Adama لتراه هو، أخيرًا. شخصان، لأوّل مرّة، يرى أحدهما الآخر حقًّا. وهذا، يا أطفالي… بداية حكايةٍ أخرى تمامًا." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "Kiké", sections: [
          { title: "Taadidi 回来了", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。那个留着脏辫的小男孩，长成了青年。Taadidi 去了技工学校，又从那儿回来了——成了一名建桥人。他守住了承诺：再没有偷工减料、说塌就塌的工程。从今往后，他造得结实。好让一座桥，永远不会再在一位母亲和她的孩子脚下垮掉。" ] },
          { title: "那些桥", paragraphs: [
            "你们知道他最爱造什么吗？桥。在 Nakiry 各处，水把路截断——而正是在那些取水点，妇女们相聚，孩子们玩耍。于是 Taadidi 在河上架起一座座结实的桥，让人人都能平安通过。他童年的那面盾牌，如今成了一门手艺。" ] },
          { title: "村子变了", paragraphs: [
            "村子变了。水再也隔不断什么了。人们来来往往，毫无惧色地过河。而当 Tofan 把全国的目光引向 Kiribounyi，Taadidi 的桥则为它打开了道路。很快，人们从远方赶来，只为看看这个正在崛起的村子。Kiribounyi 成了一处真正的去处。" ] },
          { title: "歌声", paragraphs: [
            "而 Taadidi 造桥时，还像从前那样：他唱歌。一支他自己的老调子，用来打节拍、撑住力气。工人们跟着合唱，活儿就干得轻快些。他的声音传得很远，越过了水面。" ] },
          { title: "取水点的 Adama", paragraphs: [
            "那一天，Adama 来到取水点，葫芦瓢顶在头上，孩子搂在胯上。和所有妇女一样。可她忽然，猛地停住了。一个声音。在那边，在正建着的桥上。一个在歌唱的声音。" ] },
          { title: "那个声音", paragraphs: [
            "Adama 觉得心怦怦直跳。那个声音……她认得。就算在一千个人里她也认得出。就是那个声音。多年以前，在学校后面，什么也不图地护过她的那一个。信过她的那一个。她像守着一颗火炭一样，在心的最深处守了那么久的那一个。" ] },
          { title: "相认", paragraphs: [
            "Adama 慢慢走近。她看见了他。Taadidi。她的朋友 Tofan 和 Fanyi 的弟弟，就在那儿，站在他的桥上，唱着歌。是他。从一开始，就是他。Taadidi 抬起眼。他看见这个女人望着他，像望着一个死而复生的人——而有什么，在他心里，也开始懂了。" ] },
          { title: "Kiké", paragraphs: [
            "讲故事的人把手按在他的鼓上。我的孩子们，村子曾长久地任由一张漂亮脸蛋蒙住了眼，没能看见 Adama。可有一个人，他始终看见她。而那一天，在水边，轮到 Adama 看见他了，终于。两个人，第一次，真正地看见了彼此。而这，我的孩子们……是另一段全新故事的开端。" ] },
        ] },
      },
    },
    {
      numero: 22, statut: "live",
      planche: "/images/taadidi/ep22-planche.png",
      cover: "/images/taadidi/ep22-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "C'était toi", "en": "It Was You", "ar": "كنتَ أنت", "zh": "是你"},
      teaser: {"fr": "Troublé par le regard de cette femme au point d'eau, Taadidi remonte le vallon pour l'aborder. Il croit connaître Ada, l'amie de ses sœurs. Mais Adama, elle, vient de comprendre quelque chose qu'il ignore encore — et elle va lui dire.", "en": "Troubled by this woman's look at the water point, Taadidi climbs back up the valley to speak to her. He thinks he knows Ada, his sisters' friend. But Adama has just understood something he doesn't yet know — and she is going to tell him.", "ar": "مضطربًا من نظرة تلك المرأة عند نقطة الماء، يصعد Taadidi الوادي لمجابهتها. يظنّ أنّه يعرف Ada، صديقة أختيه. لكنّ Adama للتوّ أدركت شيئًا لا يعلمه هو بعد — وستخبره.", "zh": "被取水点那个女人的眼神触动，Taadidi 折回山谷去找她。他以为认得 Ada，姐姐们的朋友。可 Adama 刚刚明白了一件他还不知道的事——她要告诉他。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "C'était toi", sections: [
          { title: "Le vallon", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Troublé par ce qu'il avait lu dans le regard de cette femme, Taadidi remonta le vallon en trois grandes enjambées pour l'aborder. Il la regardait d'un œil tout neuf. Il se souvenait à peine d'elle : une fille du village, partie autrefois épouser Alya, le fils du chef du village voisin." ] },
          { title: "Le garçon", paragraphs: [
            "Son enfant somnolait, blotti contre elle. « Et… comment s'appelle-t-elle ? » demanda Taadidi, un peu gauche. « Ce n'est pas une fille, répondit Adama. C'est un garçon. » Et tandis qu'elle parlait, son cœur, à elle, battait la plus grande chamade. Car elle savait déjà quelque chose que lui ignorait encore." ] },
          { title: "« Me reconnais-tu ? »", paragraphs: [
            "Elle releva les yeux vers lui. « Me reconnais-tu ? » demanda-t-elle. Taadidi sourit. « Bien sûr. Tu es Ada. L'amie de mes sœurs, Tofan et Fanyi. » Adama hocha la tête, doucement. Oui. Mais ce n'était pas tout à fait ça qu'elle voulait dire." ] },
          { title: "Ce qu'il ne savait pas", paragraphs: [
            "Car Taadidi connaissait Ada, l'amie des jumelles, oui. Mais il ignorait l'autre chose. Il ignorait que la voix qu'il avait prêtée, un jour, derrière l'école, pour sauver une fille sans se montrer… cette fille, c'était elle. Adama, elle, venait tout juste de le comprendre — là, en l'entendant chanter sur son pont." ] },
          { title: "« La voix, c'était toi »", paragraphs: [
            "Alors Adama prit son courage à deux mains. « Taadidi. Il y a des années, derrière l'école, une fille a été sauvée par une voix. Une voix qui chantait, cachée. Une voix qui l'a crue quand personne d'autre ne l'aurait crue. » Elle s'arrêta, la gorge serrée. « Cette voix… c'était la tienne. Et cette fille… c'était moi. »" ] },
          { title: "Deux qui se voient enfin", paragraphs: [
            "Taadidi resta figé. Les souvenirs lui revinrent d'un coup — le coin désert, les deux grands, la peur de la fille, son propre chant pour les faire fuir. Tout ce temps, il n'avait jamais su qui il avait sauvé. Et c'était elle. Adama. Là, devant lui. Pour la première fois, ils se regardèrent vraiment — non plus comme l'amie des sœurs et le petit frère, mais comme deux personnes qui partageaient un secret. Et peut-être bien davantage." ] },
          { title: "L'ombre", paragraphs: [
            "Mais dans la joie de Taadidi, soudain, quelque chose se figea. Une fille sauvée de deux garçons, derrière l'école. Et Adama, partie épouser Alya. Alya… Un nom remonta lentement, comme une eau trouble. Et si l'un de ces deux garçons, ce jour-là, avait été…" ] },
          { title: "Deux histoires", paragraphs: [
            "Le conteur posa la main sur son tambour. Ce jour-là, au bord de l'eau, une étincelle s'était allumée — belle, douce, attendue depuis si longtemps. Mais une vieille ombre, elle aussi, venait de remuer. Et désormais, mes enfants, deux histoires allaient marcher côte à côte : une histoire d'amour… et une histoire de justice. Mais ça, c'est pour demain." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "It Was You", sections: [
          { title: "The Valley", paragraphs: [
            "Listen to what came next, children of Kiribounyi. Troubled by what he had read in this woman's eyes, Taadidi climbed back up the valley in three great strides to speak to her. He was looking at her with fresh eyes. He barely remembered her: a girl from the village, who had once gone away to marry Alya, the son of the chief of the neighbouring village." ] },
          { title: "The Boy", paragraphs: [
            "Her child was dozing, nestled against her. \"And… what is her name?\" Taadidi asked, a little awkwardly. \"It's not a girl,\" Adama replied. \"It's a boy.\" And as she spoke, her own heart was hammering louder than it had ever hammered. For she already knew something that he did not yet know." ] },
          { title: "\"Do You Recognise Me?\"", paragraphs: [
            "She raised her eyes to him. \"Do you recognise me?\" she asked. Taadidi smiled. \"Of course. You're Ada. My sisters' friend, Tofan and Fanyi's.\" Adama nodded, gently. Yes. But that wasn't quite what she meant." ] },
          { title: "What He Didn't Know", paragraphs: [
            "For Taadidi knew Ada, the twins' friend, yes. But he didn't know the other thing. He didn't know that the voice he had lent, one day, behind the school, to save a girl without showing himself… that girl was her. Adama had just understood it — there, hearing him sing on his bridge." ] },
          { title: "\"The Voice Was You\"", paragraphs: [
            "Then Adama took her courage in both hands. \"Taadidi. Years ago, behind the school, a girl was saved by a voice. A voice that sang, hidden. A voice that believed her when no one else would have.\" She stopped, throat tight. \"That voice… was yours. And that girl… was me.\"" ] },
          { title: "Two Who Finally See Each Other", paragraphs: [
            "Taadidi stood frozen. The memories came rushing back — the deserted corner, the two older boys, the girl's fear, his own singing to drive them away. All this time, he had never known who he had saved. And it was her. Adama. There, before him. For the first time, they looked at each other truly — no longer as the sisters' friend and the little brother, but as two people sharing a secret. And perhaps much more than that." ] },
          { title: "The Shadow", paragraphs: [
            "But in Taadidi's joy, suddenly, something froze. A girl saved from two boys, behind the school. And Adama, gone to marry Alya. Alya… A name rose slowly, like troubled water. What if one of those two boys, that day, had been…" ] },
          { title: "Two Stories", paragraphs: [
            "The storyteller laid his hand on his drum. That day, at the water's edge, a spark had lit — beautiful, gentle, waited for so long. But an old shadow, too, had just stirred. And from now on, my children, two stories would walk side by side: a love story… and a story of justice. But that will be for tomorrow." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "كنتَ أنت", sections: [
          { title: "الوادي", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. مضطربًا ممّا قرأه في نظرة تلك المرأة، صعد Taadidi الوادي بثلاث خطوات واسعة ليكلّمها. كان ينظر إليها بعينٍ جديدة كلّيًّا. بالكاد تذكّرها: فتاةٌ من القرية، رحلت ذات يوم لتتزوّج Alya، ابن رئيس القرية المجاورة." ] },
          { title: "الولد", paragraphs: [
            "كان طفلها يغفو، مضمومًا إليها. «وما اسمها؟» سأل Taadidi، في شيءٍ من ارتباك. «إنّه ليس فتاة، أجابت Adama. إنّه ولد.» وبينما كانت تتكلّم، كان قلبها هي يخفق أشدّ خفقان. إذ كانت تعلم شيئًا لا يعلمه هو بعد." ] },
          { title: "«أتعرفني؟»", paragraphs: [
            "رفعت عينيها إليه. «أتعرفني؟» سألت. ابتسم Taadidi. «بالطبع. أنتِ Ada. صديقة أختيَّ Tofan وFanyi.» أومأت Adama برأسها، برفق. نعم. لكنّ ذلك لم يكن تمامًا ما أرادت قوله." ] },
          { title: "ما كان يجهله", paragraphs: [
            "إذ كان Taadidi يعرف Ada، صديقة التوأمتين، نعم. لكنّه كان يجهل الشيء الآخر. كان يجهل أنّ الصوت الذي أعاره، يومًا ما، خلف المدرسة، لينقذ فتاةً دون أن يظهر… تلك الفتاة كانت هي. وقد فهمت Adama ذلك للتوّ — هناك، حين سمعته يغنّي على جسره." ] },
          { title: "«الصوت كان صوتك»", paragraphs: [
            "فجمعت Adama شجاعتها. «Taadidi. قبل سنوات، خلف المدرسة، أُنقذت فتاةٌ بصوت. صوتٌ كان يغنّي، مختبئًا. صوتٌ صدّقها حين ما كان أحدٌ سيصدّقها.» توقّفت، وقد أمسك الغصّةُ بحلقها. «ذلك الصوت… كان صوتك. وتلك الفتاة… كنتُ أنا.»" ] },
          { title: "اثنان يريان بعضهما أخيرًا", paragraphs: [
            "بقي Taadidi مشلولًا. عادت إليه الذكريات دفعةً واحدة — الركن الخالي، الشابّان الكبيران، خوف الفتاة، غناؤه هو ليُهربهما. طوال هذا الوقت، لم يعرف يومًا من أنقذ. وكانت هي. Adama. هناك، أمامه. لأوّل مرّة، نظرا بعضهما نظرةً حقيقيّة — لا بوصفهما صديقة الأختين والأخ الصغير، بل بوصفهما شخصَين يتقاسمان سرًّا. وربّما أكثر بكثير." ] },
          { title: "الظلّ", paragraphs: [
            "لكن في فرحة Taadidi، فجأةً، تجمّد شيء. فتاةٌ أُنقذت من شابّين، خلف المدرسة. وAdama رحلت لتتزوّج Alya. Alya… عاد الاسم يرتفع رويدًا، كماءٍ عكر. وإن كان أحدُ ذينك الشابّين، يومئذٍ، هو…" ] },
          { title: "قصّتان", paragraphs: [
            "وضع الحكواتي يده على طبله. في ذلك اليوم، على ضفّة الماء، أُشعلت شرارة — جميلة، حنون، منتظرة منذ زمنٍ طويل. لكنّ ظلًّا قديمًا، هو أيضًا، تحرّك للتوّ. ومن الآن فصاعدًا، يا أطفالي، ستسير قصّتان جنبًا إلى جنب: قصّة حبٍّ… وقصّة عدالة. لكن ذلك، يكون في الغد." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "是你", sections: [
          { title: "山谷", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。被那个女人眼神里读到的东西触动，Taadidi 三步并作两步走回山谷去找她。他用一种全新的眼光打量着她。他几乎不记得她了：村里的一个姑娘，当年嫁去了邻村酋长的儿子 Alya 那里。" ] },
          { title: "那个孩子", paragraphs: [
            "她的孩子靠着她昏昏欲睡。「那……她叫什么名字？」Taadidi 有些笨拙地问道。「不是女孩，」Adama 回答。「是男孩。」她说话的时候，自己的心正猛烈地跳着。因为她已经知道了一件他还不知道的事。" ] },
          { title: "「你认得我吗？」", paragraphs: [
            "她抬起眼望向他。「你认得我吗？」她问。Taadidi 笑了。「当然。你是 Ada。我姐姐 Tofan 和 Fanyi 的朋友。」Adama 轻轻地点了点头。是的。可那并不完全是她想问的。" ] },
          { title: "他不知道的事", paragraphs: [
            "Taadidi 认识 Ada，认识那对双胞胎的朋友，这没错。可他不知道另一件事。他不知道，他当年在学校后面出借的那个声音，为了救一个姑娘而藏身歌唱的那个声音……那个姑娘，就是她。Adama 刚刚明白了这一切——就在这里，听到他在桥上唱歌的那一刻。" ] },
          { title: "「那个声音，是你」", paragraphs: [
            "于是 Adama 鼓起了勇气。「Taadidi。多年以前，在学校后面，一个姑娘被一个声音救了。一个躲着唱歌的声音。一个信了她的声音，那时换了别人都不会信。」她停下来，喉咙哽住了。「那个声音……是你的。而那个姑娘……是我。」" ] },
          { title: "两个终于看见彼此的人", paragraphs: [
            "Taadidi 僵在那里。记忆一下子涌回来——那个僻静的角落，两个大个子，那女孩的恐惧，他自己唱歌把他们赶走。这么多年，他从来不知道自己救了谁。而那个人，就是她。Adama。就在他面前。头一次，他们真正地看见了彼此——不再是姐姐们的朋友和小弟弟，而是两个共同守着一个秘密的人。也许，远不止于此。" ] },
          { title: "那道阴影", paragraphs: [
            "可就在 Taadidi 的喜悦里，忽然，有什么东西凝住了。一个姑娘在学校后面被两个大个子围住，得救了。而 Adama，后来嫁给了 Alya。Alya……那个名字像浑浊的水一样慢慢浮上来。如果那两个大个子里，有一个，就是……" ] },
          { title: "两个故事", paragraphs: [
            "讲故事的人把手按在鼓上。那一天，在水边，一颗火星被点燃了——美丽，温柔，等待了那么久。可一道旧日的阴影，也刚刚动了。从今往后，我的孩子们，两个故事要并肩而行：一个爱情故事……和一个关于公道的故事。可那，是明天的事了。" ] },
        ] },
      },
    },
    {
      numero: 23, statut: "live",
      planche: "/images/taadidi/ep23-planche.png",
      cover: "/images/taadidi/ep23-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "La vérité", "en": "The Truth", "ar": "الحقيقة", "zh": "真相"},
      teaser: {"fr": "Adama raconte tout à Taadidi — le mariage forcé, les années dures, le courage de partir. Et le nom d'Alya, qui rouvre tout. Taadidi veut se battre ; Adama redirige : ce n'est pas sa force qu'elle veut — c'est la vérité entendue.", "en": "Adama tells Taadidi everything — the forced marriage, the hard years, the courage to leave. And the name Alya, which reopens everything. Taadidi wants to fight; Adama redirects: it's not his strength she wants — it's the truth heard.", "ar": "تحكي Adama لـTaadidi كلّ شيء — الزواج القسريّ، السنوات الصعبة، شجاعة الرحيل. واسم Alya الذي يفتح كلّ شيء من جديد. يريد Taadidi أن يتقاتل؛ Adama تعيد التوجيه: ليست قوّته ما تريد — بل الحقيقة مسموعة.", "zh": "Adama 把一切都告诉了 Taadidi——被迫的婚姻、艰难的岁月、鼓起勇气离开。还有 Alya 这个名字，把一切都重新揭开。Taadidi 想去打架；Adama 纠正了他：她要的不是他的拳头——是真相被听见。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "La vérité", sections: [
          { title: "Les jours d'après", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Après ce jour au bord de l'eau, Taadidi et Adama se revirent souvent. Il bâtissait ses ponts ; elle venait puiser, son petit garçon sur la hanche. Ils parlaient. De tout, de rien. Et chaque jour, l'étincelle grandissait. Mais Taadidi sentait bien qu'Adama portait, au fond d'elle, une ombre dont elle ne parlait jamais." ] },
          { title: "Ce qu'Adama portait", paragraphs: [
            "Il ne la pressa pas. On ne force pas une porte ; on attend qu'elle s'ouvre. Et un jour, doucement, Adama décida de parler. « Tu m'as raconté ta voix, dit-elle. Laisse-moi te raconter mon histoire. » Taadidi s'assit près d'elle, et il écouta." ] },
          { title: "Le récit d'Adama", paragraphs: [
            "Adama raconta. Comment, à quinze ans, on l'avait mariée de force, loin, à un homme qu'elle n'avait pas choisi. Comment ces années avaient été dures, si dures. Et comment, un jour, elle avait trouvé le courage de partir, de reprendre son enfant et de rentrer au village, la tête haute, malgré tout ce qu'on dirait. Taadidi l'écoutait, le cœur serré. Quel courage il fallait pour tenir debout après cela." ] },
          { title: "Le nom", paragraphs: [
            "« Et cet homme, demanda Taadidi tout bas, qui était-ce ? » Adama le regarda. « Alya. Le fils du chef du village voisin. Celui à qui mon père avait été forcé de me promettre. »" ] },
          { title: "L'eau trouble", paragraphs: [
            "Alya. Ce nom remonta en Taadidi comme une eau trouble. Et soudain, tout se recolla. Le coin désert, derrière l'école. Les deux grands qui avaient cerné une fille. Sa propre voix, cachée, pour les faire fuir. L'un de ces deux-là… c'était Alya. Et la fille qu'il avait sauvée ce jour-là… c'était Adama. Celui qui l'avait harcelée était devenu celui qu'on l'avait forcée à épouser." ] },
          { title: "Sa justice, à elle", paragraphs: [
            "Taadidi sentit la colère monter, brûlante. Ses poings se serrèrent. Mais Adama posa une main sur son bras. « Non, dit-elle. Je ne veux pas que tu te battes. Ce que je veux, ce n'est pas ta force. C'est que la vérité soit enfin entendue. » Et Taadidi comprit : cette histoire était la sienne, à elle. Lui ne ferait que marcher à ses côtés." ] },
          { title: "L'ombre s'est levée", paragraphs: [
            "« Mais qui m'écoutera ? souffla Adama. Babadi était si puissant… » Alors Taadidi lui apprit ce qu'elle ignorait peut-être encore. Babadi, le vieux chef qui couvrait tout, n'était plus. Il était mort. Et avec lui s'était levée l'ombre qui, pendant des années, avait fait taire les voix. Pour la première fois, on pourrait parler." ] },
          { title: "Ce qui ne peut rester caché", paragraphs: [
            "Le conteur posa la main sur son tambour. Mes enfants, certaines choses qu'on enterre ne restent pas enterrées pour toujours. Ce soir-là, Adama et Taadidi se turent longtemps, côte à côte, au bord de l'eau. Tant de mal avait été tu, excusé, laissé impuni. Mais une question, désormais, brûlait dans le cœur d'Adama. Et demain, mes enfants, elle devrait y répondre." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Truth", sections: [
          { title: "The Days After", paragraphs: [
            "Listen to what came next, children of Kiribounyi. After that day at the water's edge, Taadidi and Adama saw each other often. He was building his bridges; she came to draw water, her little boy on her hip. They talked. About everything and nothing. And each day, the spark grew. But Taadidi could feel that Adama carried, deep inside her, a shadow she never spoke of." ] },
          { title: "What Adama Carried", paragraphs: [
            "He didn't press her. You don't force a door open; you wait for it to open itself. And one day, gently, Adama decided to speak. \"You told me about your voice,\" she said. \"Let me tell you my story.\" Taadidi sat down beside her, and he listened." ] },
          { title: "Adama's Story", paragraphs: [
            "Adama told her story. How, at fifteen, she had been married off by force, far away, to a man she had not chosen. How those years had been hard, so hard. And how, one day, she had found the courage to leave, to take back her child and return to the village, head high, in spite of everything people would say. Taadidi listened, his heart tight. What courage it must take to stand upright after all that." ] },
          { title: "The Name", paragraphs: [
            "\"And that man,\" Taadidi asked quietly, \"who was he?\" Adama looked at him. \"Alya. The son of the chief of the neighbouring village. The one my father had been forced to promise me to.\"" ] },
          { title: "Troubled Water", paragraphs: [
            "Alya. The name rose in Taadidi like troubled water. And suddenly, everything fell back into place. The deserted corner, behind the school. The two older boys who had cornered a girl. His own voice, hidden, to drive them away. One of those two… was Alya. And the girl he had saved that day… was Adama. The one who had harassed her had become the one she had been forced to marry." ] },
          { title: "Her Justice", paragraphs: [
            "Taadidi felt the anger rise, burning. His fists clenched. But Adama laid a hand on his arm. \"No,\" she said. \"I don't want you to fight. What I want isn't your strength. I want the truth to be heard at last.\" And Taadidi understood: this story was hers. He would only walk at her side." ] },
          { title: "The Shadow Has Lifted", paragraphs: [
            "\"But who will listen to me?\" Adama whispered. \"Babadi was so powerful…\" Then Taadidi told her what she perhaps did not yet know. Babadi, the old chief who covered everything up, was gone. He had died. And with him, the shadow that for years had silenced voices had lifted. For the first time, people would be able to speak." ] },
          { title: "What Cannot Stay Hidden", paragraphs: [
            "The storyteller laid his hand on his drum. My children, some things that are buried do not stay buried forever. That evening, Adama and Taadidi were silent for a long time, side by side, at the water's edge. So much harm had been hushed, excused, left unpunished. But a question now burned in Adama's heart. And tomorrow, my children, she would have to answer it." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الحقيقة", sections: [
          { title: "الأيّام التالية", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. بعد ذلك اليوم على ضفّة الماء، تقابل Taadidi وAdama كثيرًا. كان يبني جسوره؛ وكانت تأتي تستقي، وابنها الصغير على خاصرتها. تكلّما. عن كلّ شيء وعن لا شيء. وكلّ يوم، كانت الشرارة تكبر. لكنّ Taadidi كان يحسّ جيّدًا أنّ Adama تحمل، في أعماقها، ظلًّا لم تكن تتكلّم عنه أبدًا." ] },
          { title: "ما كانت Adama تحمل", paragraphs: [
            "لم يضغط عليها. لا تكسر بابًا غصبًا؛ تنتظر أن يفتح. ذات يومٍ، بهدوء، قرّرت Adama أن تتكلّم. «لقد حكيتَ لي عن صوتك، قالت. دعني أحكي لك قصّتي.» جلس Taadidi بجانبها، وأنصت." ] },
          { title: "قصّة Adama", paragraphs: [
            "حكت Adama. كيف، في الخامسة عشرة، زوّجوها قسرًا، بعيدًا، لرجلٍ لم تختره. كيف كانت تلك السنوات قاسية، قاسيةً جدًّا. وكيف، يومًا ما، وجدت الشجاعة لتغادر، تستعيد طفلها وتعود إلى القرية، ورأسها مرفوع، رغم كلّ ما قد يُقال. كان Taadidi يصغي، وقلبه ينقبض. يا لها من شجاعة تلزم للوقوف بعد كلّ ذلك." ] },
          { title: "الاسم", paragraphs: [
            "«وهذا الرجل، سأل Taadidi بصوتٍ خافت، من كان؟» نظرت إليه Adama. «Alya. ابن رئيس القرية المجاورة. الذي أُجبر أبي على أن يعدني له.»" ] },
          { title: "الماء العكر", paragraphs: [
            "Alya. عاد الاسم في Taadidi كماءٍ عكر. وفجأةً، تلاءمت كلّ القطع. الركن الخالي، خلف المدرسة. الشابّان الكبيران اللذان أحاطا بفتاة. صوته هو، مختبئًا، ليُهربهما. أحد هذين... كان Alya. والفتاة التي أنقذها ذلك اليوم... كانت Adama. من حرشها صار من أُجبرت على الزواج به." ] },
          { title: "عدالتها هي", paragraphs: [
            "شعر Taadidi بالغضب يرتفع، محرقًا. تشبّكت قبضتاه. لكنّ Adama وضعت يدها على ذراعه. «لا، قالت. لا أريدك أن تتقاتل. ما أريده ليس قوّتك. بل أن تُسمَع الحقيقة أخيرًا.» وفهم Taadidi: هذه القصّة كانت قصّتها هي. لن يفعل هو سوى أن يسير إلى جانبها." ] },
          { title: "رُفع الظلّ", paragraphs: [
            "«لكن من سيستمع إليّ؟ همست Adama. كان Babadi قوّيًّا جدًّا…» فأخبرها Taadidi بما ربّما كانت لا تعلمه بعد. Babadi، الرئيس العجوز الذي كان يغطّي كلّ شيء، لم يعد موجودًا. كان قد مات. وبرحيله رُفع الظلّ الذي أسكت الأصوات سنواتٍ طويلة. لأوّل مرّة، يمكن الكلام." ] },
          { title: "ما لا يبقى مدفونًا", paragraphs: [
            "وضع الحكواتي يده على طبله. يا أطفالي، بعض الأشياء التي تُدفن لا تبقى مدفونةً للأبد. في تلك الأمسية، صمت Adama وTaadidi طويلًا، جنبًا إلى جنب، على ضفّة الماء. كثيرٌ من الأذى كان قد كُتم، وتُعذّر به، وتُرك دون عقاب. لكنّ سؤالًا صار يحرق قلب Adama من الآن. وغدًا، يا أطفالي، ستضطرّ إلى الإجابة عنه." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "真相", sections: [
          { title: "此后的日子", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。水边那天之后，Taadidi 和 Adama 常常见面。他建着他的桥；她来打水，小儿子搂在胯上。他们聊天。什么都聊。每一天，那颗火星都在长大。可 Taadidi 清楚地感觉到，Adama 心底深处藏着一道阴影，从来不提。" ] },
          { title: "Adama 背负的", paragraphs: [
            "他没有追问。门不是强迫撬开的；等它自己开。一天，Adama 轻轻地决定开口。「你告诉了我你的声音，」她说。「让我来告诉你我的故事。」Taadidi 在她身边坐下，听着。" ] },
          { title: "Adama 的故事", paragraphs: [
            "Adama 讲起来了。十五岁那年，她被强嫁给了远方一个她没有选过的人。那些岁月有多难，有多难。然后有一天，她找到了勇气，带着孩子离开，回到村子，昂着头，不管别人怎么说。Taadidi 心里揪着听完。要在那一切之后还站得住，得有多大的勇气。" ] },
          { title: "那个名字", paragraphs: [
            "「那个人，」Taadidi 轻声问道，「是谁？」Adama 看着他。「Alya。邻村酋长的儿子。我父亲被逼着把我许给他的那个人。」" ] },
          { title: "浑浊的水", paragraphs: [
            "Alya。这个名字在 Taadidi 心里像浑浊的水一样浮上来。猛然间，一切都拼上了。学校后面那个僻静的角落。两个大个子把一个女孩围住。他自己藏着唱歌，把他们赶走。那两个人里的一个……是 Alya。而他那天救的那个姑娘……是 Adama。曾经骚扰她的那个人，成了她被迫嫁给的那个人。" ] },
          { title: "她自己的公道", paragraphs: [
            "Taadidi 感到怒火腾地烧起来。他的拳头握紧了。可 Adama 把一只手放在他臂上。「不，」她说。「我不要你去打架。我要的不是你的力气。我要的是真相终于被人听见。」Taadidi 明白了：这个故事是她的。他只是走在她身旁。" ] },
          { title: "阴影散了", paragraphs: [
            "「可谁会听我说？」Adama 低声道。「Babadi 那么有势力……」于是 Taadidi 告诉了她一件她或许还不知道的事。那个遮掩一切的老酋长 Babadi，已经不在了。他死了。随着他，多年来让人噤声的那道阴影散了。头一回，人们可以开口说话了。" ] },
          { title: "埋不住的东西", paragraphs: [
            "讲故事的人把手按在鼓上。我的孩子们，有些被埋下去的东西，不会永远埋着。那天晚上，Adama 和 Taadidi 在水边并肩沉默了很久。那么多的伤害被压下去、被开脱、被放过。可如今，有一个问题在 Adama 心里燃烧。明天，我的孩子们，她将不得不回答它。" ] },
        ] },
      },
    },
    {
      numero: 24, statut: "live",
      planche: "/images/taadidi/ep24-planche.png",
      cover: "/images/taadidi/ep24-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Bâtir quelque chose", "en": "Building Something", "ar": "بناء شيء", "zh": "建起一些东西"},
      teaser: {"fr": "Adama regarde ses amies réussir et décide de bâtir elle aussi — une association pour protéger les femmes. Taadidi ouvre ses chantiers aux femmes vulnérables. Adama n'est pas une victime : elle est une actrice du changement.", "en": "Adama watches her friends succeed and decides to build something too — an association to protect women. Taadidi opens his building sites to vulnerable women. Adama is not a victim: she is an agent of change.", "ar": "ترى Adama صديقاتها ينجحن وتقرّر أن تبني هي أيضًا — جمعيّةً لحماية المرأة. Taadidi يفتح مواقع بنائه للنساء الضعيفات. Adama ليست ضحيّة: هي فاعلة للتغيير.", "zh": "Adama 望着朋友们各有成就，决定自己也要建起一些东西——一个保护妇女的互助社。Taadidi 向弱势妇女开放他的工地。Adama 不是受害者：她是变革的行动者。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Bâtir quelque chose", sections: [
          { title: "Adama regarde ses amies", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Autour d'Adama, ses amies montaient, chacune à sa façon. Lima soignait les malades. Tofan portait son grand projet jusqu'au pays tout entier. Fanyi faisait la classe aux enfants. Et Adama, un jour, en les regardant, se posa une question." ] },
          { title: "La question d'Adama", paragraphs: [
            "« Vais-je faire des allers-retours au marigot toute ma vie ? » Elle aimait prendre soin de son fils et de sa maison, oh oui. Mais, au fond d'elle, elle avait toujours cru qu'elle aussi bâtirait quelque chose. Comme ses amies. Comme Taadidi. Quelque chose qui compterait." ] },
          { title: "L'idée d'Adama", paragraphs: [
            "Alors elle vint trouver Taadidi. « J'ai pensé à monter une association, dit-elle. Et… je ne t'ai pas raconté toute mon histoire. Je voudrais la raconter à tout le monde. En faire un exemple, pour qu'aucune autre femme ne tombe dans le piège qui a failli me prendre ma vie. Trop de femmes souffrent en silence, Taadidi. Trop. »" ] },
          { title: "Ni pitié, ni victime", paragraphs: [
            "Taadidi la regarda. Et savez-vous ce qu'il ressentit ? Pas de la pitié. Non. De l'admiration. Une admiration immense. Car devant lui se tenait une grande dame qui refusait de se voir en victime, et qui choisissait, à la place, d'être une actrice du changement. « Tu es la personne la plus courageuse que je connaisse », pensa-t-il." ] },
          { title: "La promesse", paragraphs: [
            "« Je serai là, lui dit-il simplement. À chaque pas. » Et il le pensait de tout son cœur." ] },
          { title: "Le vrai piège", paragraphs: [
            "Adama réfléchit tout haut. « Tu sais ce qui retient tant de femmes prisonnières ? Ce n'est pas seulement la peur. C'est le manque. Pas de travail, pas d'argent à elles. Alors elles restent, parce qu'elles n'ont nulle part où aller. » Et là, une idée traversa Taadidi." ] },
          { title: "Les chantiers", paragraphs: [
            "« Alors voilà ce que je propose, dit-il. Sur mes chantiers, il y a de la place. Que ces femmes viennent ! Elles peuvent bâtir aussi bien que quiconque. Et le plus beau ? Mes ponts, je les construis au bord des marigots — là, justement, où les enfants adorent jouer. Les mamans travailleront, et leurs petits joueront tout près. » Adama sourit. C'était exactement ça." ] },
          { title: "Deux bâtisseurs", paragraphs: [
            "Le conteur posa la main sur son tambour. Et voilà, mes enfants, comment, ce jour-là, deux bâtisseurs se tinrent côte à côte : l'un dressait des ponts de pierre par-dessus l'eau ; l'autre allait dresser un abri pour celles qu'on avait trop longtemps fait taire. Mais pour cela, Adama devrait d'abord faire la chose la plus difficile de toutes : se tenir debout, devant tout le monde, et raconter. Et ça, mes enfants, c'est pour demain." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Building Something", sections: [
          { title: "Adama Watches Her Friends", paragraphs: [
            "Listen to what came next, children of Kiribounyi. Around Adama, her friends were rising, each in her own way. Lima was caring for the sick. Tofan was carrying her great project across the whole country. Fanyi was teaching the children. And Adama, one day, watching them, asked herself a question." ] },
          { title: "Adama's Question", paragraphs: [
            "\"Am I going to be making trips to the water point all my life?\" She loved caring for her son and her home, oh yes. But, deep inside, she had always believed that she too would build something. Like her friends. Like Taadidi. Something that would matter." ] },
          { title: "Adama's Idea", paragraphs: [
            "Then she went to find Taadidi. \"I've been thinking about starting an association,\" she said. \"And… I haven't told you my whole story. I'd like to tell everyone. To make it an example, so that no other woman falls into the trap that nearly took my life. Too many women suffer in silence, Taadidi. Too many.\"" ] },
          { title: "Neither Pity, nor Victim", paragraphs: [
            "Taadidi looked at her. And do you know what he felt? Not pity. No. Admiration. Immense admiration. For before him stood a great woman who refused to see herself as a victim, and who chose, instead, to be an agent of change. \"You are the most courageous person I know,\" he thought." ] },
          { title: "The Promise", paragraphs: [
            "\"I'll be there,\" he told her simply. \"At every step.\" And he meant it with all his heart." ] },
          { title: "The Real Trap", paragraphs: [
            "\"You know what keeps so many women trapped?\" Adama thought aloud. \"It isn't only fear. It's lack. No work, no money of their own. So they stay, because they have nowhere to go.\" And at that moment, an idea came to Taadidi." ] },
          { title: "The Building Sites", paragraphs: [
            "\"Then here is what I propose,\" he said. \"On my building sites, there is room. Let these women come! They can build just as well as anyone. And the finest part? My bridges, I build them by the water points — right where children love to play. The mothers will work, and their little ones will play nearby.\" Adama smiled. That was exactly it." ] },
          { title: "Two Builders", paragraphs: [
            "The storyteller laid his hand on his drum. And that, my children, is how, that day, two builders stood side by side: one was raising stone bridges over the water; the other was going to raise a shelter for those who had been silenced too long. But for that, Adama would first have to do the most difficult thing of all: stand up, before everyone, and tell her story. And that, my children, will be for tomorrow." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "بناء شيء", sections: [
          { title: "Adama تنظر إلى صديقاتها", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. من حول Adama، كانت صديقاتها يصعدن، كلٌّ على طريقتها. Lima تداوي المرضى. Tofan تحمل مشروعها الكبير إلى البلد كلّه. Fanyi تُعلّم الأطفال. وAdama، ذات يوم، وهي تنظر إليهنّ، طرحت على نفسها سؤالًا." ] },
          { title: "سؤال Adama", paragraphs: [
            "«هل سأقضي حياتي في التردّد على المجرى؟» كانت تحبّ العناية بابنها وبيتها، أجل. لكنّها، في أعماقها، كانت دائمًا تؤمن أنّها هي أيضًا ستبني شيئًا. كصديقاتها. كـTaadidi. شيئًا يُحسب." ] },
          { title: "فكرة Adama", paragraphs: [
            "فذهبت تجد Taadidi. «فكّرتُ في إنشاء جمعيّة، قالت. و… لم أحكِ لك قصّتي كلّها. أودّ أن أحكيها للجميع. أن أجعلها نموذجًا، كي لا تقع امرأةٌ أخرى في الفخّ الذي كاد يأخذ حياتي. كثيرٌ جدًّا من النساء يعانين في صمت، Taadidi. كثيرٌ جدًّا.»" ] },
          { title: "لا شفقة، ولا ضحيّة", paragraphs: [
            "نظر Taadidi إليها. وأتدرون ما شعر به؟ ليس الشفقة. لا. الإعجاب. إعجابٌ بالغ. إذ كانت أمامه سيّدةٌ عظيمة ترفض أن ترى نفسها ضحيّة، وتختار عوضًا عن ذلك أن تكون فاعلةً للتغيير. «أنتِ أشجع إنسانٍ أعرفه»، فكّر." ] },
          { title: "الوعد", paragraphs: [
            "«سأكون هنا، قال لها ببساطة. في كلّ خطوة.» وكان يعني ذلك بكلّ قلبه." ] },
          { title: "الفخّ الحقيقيّ", paragraphs: [
            "فكّرت Adama بصوتٍ عالٍ. «أتدري ما الذي يبقي كثيرًا من النساء أسيرات؟ ليست الخوف وحده. بل الحاجة. لا عمل، لا مال لهنّ. فيبقين، لأنّ لا مكان آخر يذهبن إليه.» وهناك، خطرت لـTaadidi فكرة." ] },
          { title: "المواقع", paragraphs: [
            "«إذًا هذا ما أقترحه، قال. على مواقعي، ثمّة مكان. لتأتِ هؤلاء النساء! يمكنهنّ البناء بقدر ما يستطيع أيّ أحد. والأجمل؟ جسوري، أبنيها على ضفاف المجاري — هناك بالضبط، حيث يحبّ الأطفال اللعب. الأمّهات سيعملن، وصغارهنّ سيلعبون قريبًا منهنّ.» ابتسمت Adama. كان ذلك بالضبط ما تريد." ] },
          { title: "بنّاءان", paragraphs: [
            "وضع الحكواتي يده على طبله. وهكذا، يا أطفالي، في ذلك اليوم، وقف بنّاءان جنبًا إلى جنب: أحدهما يرفع جسور الحجارة فوق الماء؛ والأخرى ستُشيّد ملجأً لمن صُمِّتن طويلًا. لكن لذلك، كان على Adama أن تفعل أوّلًا أصعب شيء من كلّ شيء: أن تقف، أمام الجميع، وتحكي. وذلك، يا أطفالي، سيكون في الغد." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "建起一些东西", sections: [
          { title: "Adama 望着她的朋友们", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。在 Adama 周围，她的朋友们各自往上走，各走各的路。Lima 照料病人。Tofan 把她的大方案带到了整个国家。Fanyi 给孩子们上课。Adama 有一天望着她们，问了自己一个问题。" ] },
          { title: "Adama 的问题", paragraphs: [
            "「难道我要一辈子来来回回打水吗？」她爱照料儿子和家，那是真的。可在她心底，她一直相信自己也会建起一些东西。像她的朋友们那样。像 Taadidi 那样。一些真正重要的东西。" ] },
          { title: "Adama 的主意", paragraphs: [
            "于是她去找 Taadidi。「我想过要成立一个互助社，」她说。「还有……我没有把我的故事全告诉你。我想告诉所有人。让它成为一个例子，让再没有任何女人掉进那个差点要了我的命的陷阱。太多女人在沉默中受苦，Taadidi。太多了。」" ] },
          { title: "既不是怜悯，也不是受害者", paragraphs: [
            "Taadidi 看着她。你们知道他感受到了什么吗？不是怜悯。不是。是敬佩。巨大的敬佩。因为他面前站着一位伟大的女性，她拒绝把自己看作受害者，而是选择成为变革的行动者。「你是我认识的最勇敢的人，」他心想。" ] },
          { title: "承诺", paragraphs: [
            "「我会在，」他只是简单地对她说。「每一步。」他是打心底这么想的。" ] },
          { title: "真正的陷阱", paragraphs: [
            "Adama 大声地想着。「你知道是什么把那么多女人困住了吗？不只是恐惧。是匮乏。没有工作，没有自己的钱。于是她们留下来，因为无处可去。」就在那一刻，Taadidi 想到了一个主意。" ] },
          { title: "工地", paragraphs: [
            "「那我提议这个，」他说。「我的工地上，有地方。让这些女人来吧！她们造得跟任何人一样好。最美的是什么？我的桥，都是在水边造的——正好是孩子们最爱玩耍的地方。妈妈们干活，她们的孩子就在旁边玩。」Adama 笑了。就是这个。" ] },
          { title: "两个建造者", paragraphs: [
            "讲故事的人把手按在鼓上。这就是，我的孩子们，那一天，两个建造者并肩而立的样子：一个在水上架起石桥；另一个要为那些被压了太久声音的人建起一处遮蔽所。可为此，Adama 首先要做那件最难的事：站在所有人面前，开口讲述。而那，我的孩子们，是明天的事了。" ] },
        ] },
      },
    },
    {
      numero: 25, statut: "live",
      planche: "/images/taadidi/ep25-planche.png",
      cover: "/images/taadidi/ep25-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Sous le néribily", "en": "Under the Néribily", "ar": "تحت النيريبيلي", "zh": "在 néribily 树下"},
      teaser: {"fr": "Ce jour-là, tout le village se rassemble sous le grand fromager. Adama se lève, raconte tout, et appelle les femmes à se lever. Le village qui ne l'avait pas crue voit enfin la vérité. Et sous l'arbre à palabres, le silence de plusieurs années se brise.", "en": "That day, the whole village gathers under the great kapok tree. Adama stands up, tells everything, and calls the women to rise. The village that had not believed her finally sees the truth. And under the palaver tree, a silence of several years is broken.", "ar": "في ذلك اليوم، يتجمّع القرية كلّها تحت فرنجيبانة الكبيرة. تقوم Adama، تحكي كلّ شيء، وتدعو النساء للنهوض. القرية التي لم تصدّقها ترى الحقيقة أخيرًا. وتحت شجرة الكلام، ينكسر صمتُ سنواتٍ عديدة.", "zh": "那一天，全村人聚在大木棉树下。Adama 站起来，讲述一切，呼唤女人们也站起来。曾经不相信她的村子终于看见了真相。而在言谈树下，多年的沉默破碎了。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Sous le néribily", sections: [
          { title: "Le grand arbre", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Ce jour-là, tout le village se rassembla sous le grand néribily — le fromager, l'arbre à palabres, celui sous lequel, depuis toujours, on dit les choses importantes. Et sous ses immenses branches, une femme allait dire la chose la plus difficile de toutes." ] },
          { title: "Debout", paragraphs: [
            "Adama se leva. Devant elle, il y avait tout le village — ce même village qui, autrefois, ne l'avait pas crue. Son cœur cognait fort. Mais elle n'était pas seule : Taadidi était là, et Kala, et Lima, et les jumelles. Elle prit une grande inspiration, et elle commença." ] },
          { title: "Adama raconte", paragraphs: [
            "Elle raconta tout. La promesse qu'on avait faite sans elle. Le mariage forcé, à quinze ans. Les années de silence, loin des siens. Et le courage qu'il avait fallu, un matin, pour partir. Elle ne cacha rien de ce qu'on lui avait pris. Sa voix tremblait, mais elle ne s'arrêta pas. Sous le néribily, on n'entendait plus qu'elle." ] },
          { title: "Les larmes", paragraphs: [
            "À un moment, son petit garçon, dans ses bras, se mit à pleurer. Elle le serra contre elle et continua. Et alors, dans l'assemblée, quelque chose se passa. Des larmes se mirent à couler. Sur le visage des femmes. Sur le visage des hommes, aussi. Le village entier, pour la première fois, sentait ce qu'Adama avait porté seule." ] },
          { title: "Le village voit enfin", paragraphs: [
            "Et ce jour-là, mes enfants, le village qui s'était laissé aveugler par un beau visage, le village qui avait dit « quelle chance », le village qui n'avait pas voulu croire — ce village-là vit enfin. Il vit la vérité. Et le vieux silence, celui qui protégeait les puissants, se brisa d'un coup, comme une calebasse qui tombe." ] },
          { title: "Ce qui devra répondre", paragraphs: [
            "Car Babadi n'était plus là pour couvrir les siens. Désormais, ce qui avait été fait ne pourrait plus se cacher — ni derrière un joli visage, ni derrière le nom d'un chef. Devant tout le village réuni, la vérité était dite. Et ce qui est dit à voix haute, mes enfants, ne peut plus rester impuni." ] },
          { title: "La main tendue", paragraphs: [
            "Adama releva la tête, et sa voix se raffermit. « Si vous aussi, dit-elle, vous taisez une injustice — prenez mes mots comme une main tendue, et venez nous rejoindre. Il est temps. Il est temps que nos vies soient plus justes. »" ] },
          { title: "L'abri se lève", paragraphs: [
            "Alors, mes enfants, il se passa une chose magnifique. Une femme se leva dans l'assemblée. Puis une autre. Puis une autre encore. Elles s'avançaient vers Adama, la main tendue à leur tour. Sous le grand néribily, ce jour-là, un silence de plusieurs années fut rompu — et un abri se leva pour toutes celles qu'on avait fait taire. Le conteur sourit : il restait pourtant une dernière histoire à raconter. La plus douce de toutes." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Under the Néribily", sections: [
          { title: "The Great Tree", paragraphs: [
            "Listen to what came next, children of Kiribounyi. That day, the whole village gathered under the great néribily — the kapok tree, the palaver tree, the one under which, since always, the important things are said. And beneath its vast branches, a woman was going to say the most difficult thing of all." ] },
          { title: "Standing Up", paragraphs: [
            "Adama rose. Before her stood the whole village — that same village which, once, had not believed her. Her heart was beating hard. But she was not alone: Taadidi was there, and Kala, and Lima, and the twins. She took a deep breath, and she began." ] },
          { title: "Adama Tells Her Story", paragraphs: [
            "She told everything. The promise that had been made without her. The forced marriage, at fifteen. The years of silence, far from her own people. And the courage it had taken, one morning, to leave. She hid nothing of what had been taken from her. Her voice trembled, but she did not stop. Under the néribily, only her voice could be heard." ] },
          { title: "The Tears", paragraphs: [
            "At a certain moment, her little boy in her arms began to cry. She held him close and went on. And then, in the assembly, something happened. Tears began to flow. On the faces of the women. On the faces of the men, too. The whole village, for the first time, felt what Adama had carried alone." ] },
          { title: "The Village Finally Sees", paragraphs: [
            "And that day, my children, the village that had let itself be blinded by a beautiful face, the village that had said \"how lucky\", the village that had refused to believe — that village, at last, saw. It saw the truth. And the old silence, the one that protected the powerful, broke all at once, like a calabash that falls." ] },
          { title: "What Must Now Answer", paragraphs: [
            "For Babadi was no longer there to cover for his own. From now on, what had been done could no longer hide — not behind a pretty face, not behind a chief's name. Before the whole village assembled, the truth was spoken. And what is spoken aloud, my children, can no longer go unpunished." ] },
          { title: "The Outstretched Hand", paragraphs: [
            "\"If you too,\" she said, \"are keeping an injustice silent — take my words as an outstretched hand, and come join us. It is time. It is time for our lives to be more just.\"" ] },
          { title: "A Shelter Rises", paragraphs: [
            "Then, my children, a magnificent thing happened. A woman rose in the assembly. Then another. Then another still. They moved toward Adama, their own hands outstretched. Under the great néribily, that day, a silence of several years was broken — and a shelter rose for all those who had been silenced. The storyteller smiled: and yet one last story remained to be told. The sweetest of all." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "تحت النيريبيلي", sections: [
          { title: "الشجرة الكبيرة", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. في ذلك اليوم، تجمّع القرية كلّها تحت النيريبيلي الكبير — القطن الحريري، شجرة الكلام، التي تحتها دائمًا تُقال الأشياء المهمّة. وتحت أغصانها الشاسعة، امرأةٌ كانت على وشك أن تقول أصعب شيء من كلّ شيء." ] },
          { title: "واقفة", paragraphs: [
            "وقفت Adama. أمامها كان القرية كلّها — هذا القرية ذاته الذي لم يصدّقها في ما مضى. كان قلبها يخفق بشدّة. لكنّها لم تكن وحدها: كان Taadidi هناك، وKala، وLima، والتوأمتان. أخذت نفسًا عميقًا، وبدأت." ] },
          { title: "Adama تحكي", paragraphs: [
            "حكت كلّ شيء. الوعد الذي أُعطي بدونها. الزواج القسريّ، في الخامسة عشرة. سنوات الصمت، بعيدًا عن ذويها. والشجاعة التي لزمت، ذات صباح، للمغادرة. لم تخفِ شيئًا ممّا أُخذ منها. كان صوتها يرتجف، لكنّها لم تتوقّف. تحت النيريبيلي، لم يُسمَع سوى صوتها." ] },
          { title: "الدموع", paragraphs: [
            "في لحظة، بدأ طفلها الصغير في ذراعيها يبكي. ضمّته إليها واستمرّت. وعندئذٍ، في التجمّع، حدث شيء. بدأت دموعٌ تجري. على وجوه النساء. وعلى وجوه الرجال أيضًا. القرية كلّها، لأوّل مرّة، تحسّ ما حملته Adama وحدها." ] },
          { title: "القرية يرى أخيرًا", paragraphs: [
            "وفي ذلك اليوم، يا أطفالي، القرية الذي تركت وجهًا جميلًا يعميه، القرية الذي قال «يا لها من حظّ»، القرية الذي لم يرد أن يصدّق — ذلك القرية رأى أخيرًا. رأى الحقيقة. والصمت القديم، الذي كان يحمي الأقوياء، انكسر دفعةً واحدة، كقرعةٍ تسقط." ] },
          { title: "ما يجب أن يُجيب", paragraphs: [
            "إذ لم يعد Babadi هناك يغطّي على أبنائه. من الآن فصاعدًا، لن يستطيع ما صنعه الاختباء — لا خلف وجهٍ جميل، ولا خلف اسم رئيس. أمام القرية كلّها مجتمعة، قيلت الحقيقة. وما يُقال بصوتٍ عالٍ، يا أطفالي، لا يمكنه أن يظلّ بلا عقاب." ] },
          { title: "اليد الممدودة", paragraphs: [
            "رفعت Adama رأسها، واستقرّ صوتها. «إن كنتنّ أنتنّ أيضًا، قالت، تكتمن ظلمًا — فخذن كلماتي كيدٍ ممدودة، وتعالين إلينا. لقد حان الوقت. لقد حان الوقت أن تكون حياتنا أكثر عدلًا.»" ] },
          { title: "الملجأ يقوم", paragraphs: [
            "وعندئذٍ، يا أطفالي، حدث شيءٌ رائع. وقفت امرأةٌ في التجمّع. ثمّ أخرى. ثمّ أخرى بعدها. كنّ يتقدّمن نحو Adama، وأيديهنّ ممدودةٌ بدورهنّ. تحت النيريبيلي الكبير، في ذلك اليوم، انكسر صمتُ عدّة سنوات — وقام ملجأٌ لكلّ من صُمِّتن. ابتسم الحكواتي: كانت ثمّة قصّةٌ أخيرة تبقّت لتُروى. أعذبُ القصص جميعًا." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "在 néribily 树下", sections: [
          { title: "那棵大树", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。那一天，全村人聚到了那棵大 néribily 树下——那棵木棉树，言谈树，自古以来人们在树下说重要事情的地方。在它巨大的枝桠下，一个女人要说出那件最难说出口的事。" ] },
          { title: "站起来", paragraphs: [
            "Adama 站了起来。她面前是整个村子——就是那个从前不相信她的村子。她的心跳得很响。但她不是一个人：Taadidi 在，Kala 在，Lima 在，那对双胞胎也在。她深吸一口气，开口了。" ] },
          { title: "Adama 讲述", paragraphs: [
            "她把一切都说了。那个没有她就做出的承诺。十五岁时的强迫婚姻。在远方沉默度过的那些年。还有某个早晨，鼓起勇气离开所需要的力气。她没有隐瞒任何被夺走的东西。她的声音在颤抖，但她没有停。néribily 树下，只听得见她的声音。" ] },
          { title: "眼泪", paragraphs: [
            "有一刻，她怀里的小男孩哭了起来。她把他紧紧搂住，继续说下去。就在这时，人群里发生了一件事。眼泪流下来了。从女人们脸上流下来。也从男人们脸上流下来。全村人，第一次，感受到了 Adama 一个人背负的那些。" ] },
          { title: "村子终于看见了", paragraphs: [
            "而那一天，我的孩子们，曾经被一张漂亮脸蛋蒙住了眼的村子，说过「多幸运啊」的村子，不肯相信的村子——那个村子，终于看见了。它看见了真相。多年来保护强权者的那道旧日沉默，一下子碎了，像一只落地的葫芦。" ] },
          { title: "要给出答案的事", paragraphs: [
            "Babadi 已经不在了，无法再遮护他的人。从今以后，做下的事再也无处藏身——既藏不进一张漂亮脸蛋后面，也藏不进一个酋长的名字后面。在聚在一起的全村人面前，真相说出来了。而大声说出来的事情，我的孩子们，再也不能不受惩处。" ] },
          { title: "伸出的手", paragraphs: [
            "Adama 抬起头，声音稳了下来。「如果你们也在，」她说，「压着一桩不公正——就把我的话当成一只伸出的手，来加入我们吧。是时候了。是时候让我们的生活更公正了。」" ] },
          { title: "遮蔽所升起", paragraphs: [
            "于是，我的孩子们，发生了一件美好的事。一个女人在人群里站了起来。又一个。再一个。她们走向 Adama，伸出了各自的手。大 néribily 树下，那一天，多年的沉默破碎了——一处遮蔽所，为所有被压了声音的人升起来了。讲故事的人笑了：可还有最后一个故事要讲。所有故事里最甜的那个。" ] },
        ] },
      },
    },
    {
      numero: 26, statut: "live",
      planche: "/images/taadidi/ep26-planche.png",
      cover: "/images/taadidi/ep26-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Le choix d'Adama", "en": "Adama's Choice", "ar": "اختيار Adama", "zh": "Adama 的选择"},
      teaser: {"fr": "Les saisons passent, Taadidi et Adama se rapprochent. Il l'aime — et aime son fils. Le soir où il le lui dit, pour la première fois de sa vie, on lui pose la question. Le choix est le sien.", "en": "The seasons pass; Taadidi and Adama draw closer. He loves her — and loves her son. The evening he tells her, for the first time in her life, she is asked. The choice is hers.", "ar": "تمرّ المواسم، ويتقرّب Taadidi وAdama من بعضهما. يحبّها — ويحبّ ابنها. وليلة يقول لها ذلك، لأوّل مرّة في حياتها، يُسألُ رأيها. الاختيار اختيارها.", "zh": "季节流逝，Taadidi 和 Adama 越走越近。他爱她——也爱她的儿子。那个夜晚他开口说了，她生平第一次被人问到。这个选择，是她自己的。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le choix d'Adama", sections: [
          { title: "Les saisons passent", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Les saisons passèrent. L'association d'Adama grandissait ; des femmes venaient de partout, travaillaient, gagnaient leur vie, relevaient la tête. Le village guérissait, doucement. Et au milieu de tout cela, Taadidi et Adama se rapprochaient — pour de bon, cette fois, et au grand jour." ] },
          { title: "Le petit garçon", paragraphs: [
            "Sur les chantiers, au bord des marigots, le petit garçon d'Adama suivait Taadidi partout. Il lui tendait les outils, riait de ses chansons, s'endormait parfois sur son épaule. Et Taadidi, sans même y penser, s'était mis à l'aimer comme s'il était son propre fils." ] },
          { title: "Ce que Taadidi voulait", paragraphs: [
            "Un soir, Taadidi sut exactement ce qu'il voulait. Pas seulement Adama. Adama et son petit garçon. Les deux. Pour toujours. Il alla la trouver, le cœur battant." ] },
          { title: "La demande", paragraphs: [
            "« Adama, dit-il. Je ne veux pas seulement t'épouser. Ton fils, je veux qu'il soit le mien, lui aussi. Permets-moi de demander ta main, et d'unir nos familles. » Il ne s'agenouilla pas. Il se tint simplement devant elle, droit et sincère, comme on se tient devant quelqu'un qu'on respecte de toute son âme." ] },
          { title: "Pour la première fois", paragraphs: [
            "Adama le regarda longtemps. À quinze ans, on l'avait donnée sans même lui demander son avis. Aujourd'hui, pour la première fois de toute sa vie, on lui posait la question. Le choix était le sien. Rien qu'à elle. À travers ses larmes, elle sourit. « Oui », dit-elle. Et ce oui-là, enfin, c'était le sien." ] },
          { title: "« Mon fils »", paragraphs: [
            "Alors Taadidi se tourna vers le petit garçon qui jouait à leurs pieds. Il le souleva bien haut dans ses bras, et l'enfant éclata de rire. « Et toi, lui dit Taadidi, tu seras mon fils. » Le petit qui n'avait jamais eu de père en aurait un. Un père qui l'avait choisi." ] },
          { title: "Deux qui se choisissent", paragraphs: [
            "Le conteur sourit. Mes enfants, le village avait connu tant d'unions arrangées, promises, forcées. Mais celle-ci ne ressemblait à aucune autre. Car celle-ci, personne ne l'avait décidée à leur place. Deux personnes s'étaient vues vraiment, puis s'étaient choisies. Et il n'y a pas, sur cette terre, de lien plus solide que celui-là." ] },
          { title: "La plus douce des histoires", paragraphs: [
            "Ainsi, celle qu'on avait donnée de force allait, cette fois, se donner librement. Et celui qui avait sauvé une inconnue, un jour, derrière une école, allait bâtir avec elle la plus belle de ses constructions : une famille. Il ne restait plus qu'à célébrer. Et un mariage à Kiribounyi, mes enfants... ça, il faut le voir ! Mais ce sera pour demain." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Adama's Choice", sections: [
          { title: "The Seasons Pass", paragraphs: [
            "Listen to what came next, children of Kiribounyi. The seasons passed. Adama's association was growing; women came from everywhere, worked, earned their living, held their heads high. The village was healing, slowly. And in the midst of all this, Taadidi and Adama were drawing closer — for good, this time, and in the open." ] },
          { title: "The Little Boy", paragraphs: [
            "On the building sites, by the water's edge, Adama's little boy followed Taadidi everywhere. He handed him tools, laughed at his songs, sometimes fell asleep on his shoulder. And Taadidi, without even thinking about it, had come to love him as if he were his own son." ] },
          { title: "What Taadidi Wanted", paragraphs: [
            "One evening, Taadidi knew exactly what he wanted. Not just Adama. Adama and her little boy. Both of them. Forever. He went to find her, his heart beating fast." ] },
          { title: "The Proposal", paragraphs: [
            "\"Adama,\" he said. \"I don't only want to marry you. Your son — I want him to be mine too. Allow me to ask for your hand, and to unite our families.\" He did not kneel. He simply stood before her, straight and sincere, the way one stands before someone one respects with all one's soul." ] },
          { title: "For the First Time", paragraphs: [
            "Adama looked at him for a long moment. At fifteen, she had been given away without anyone asking her opinion. Today, for the first time in her entire life, she was being asked. The choice was hers. Hers alone. Through her tears, she smiled. \"Yes,\" she said. And that yes, at last, was hers." ] },
          { title: "\"My Son\"", paragraphs: [
            "Then Taadidi turned to the little boy who was playing at their feet. He lifted him high in his arms, and the child burst out laughing. \"And you,\" Taadidi told him, \"you will be my son.\" The little one who had never had a father would have one. A father who had chosen him." ] },
          { title: "Two Who Choose Each Other", paragraphs: [
            "The storyteller smiled. My children, the village had known so many arranged unions, promised, forced. But this one resembled no other. For this one, no one had decided in their place. Two people had truly seen each other, and then had chosen each other. And there is no bond, on this earth, stronger than that." ] },
          { title: "The Sweetest of Stories", paragraphs: [
            "So she who had been given by force would, this time, give herself freely. And he who had once saved a stranger, one day, behind a school, was going to build with her the finest of his constructions: a family. There was nothing left to do but celebrate. And a wedding at Kiribounyi, my children... that, you have to see! But that will be for tomorrow." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "اختيار Adama", sections: [
          { title: "تمرّ المواسم", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. مرّت المواسم. كانت جمعية Adama تكبر؛ النساء يأتين من كلّ مكان، يعملن، يكسبن رزقهنّ، ويرفعن رؤوسهنّ. كانت القرية تتعافى، رويدًا رويدًا. وفي خضمّ كلّ ذلك، كان Taadidi وAdama يتقرّبان من بعضهما — هذه المرّة بجدٍّ، وعلى الملأ." ] },
          { title: "الطفل الصغير", paragraphs: [
            "على المواقع، وعلى ضفاف المجاري، كان طفل Adama الصغير يتبع Taadidi في كلّ مكان. كان يمدّ إليه الأدوات، ويضحك من أغانيه، وأحيانًا يغفو على كتفه. وكان Taadidi، دون أن يفكّر، قد صار يحبّه كأنّه ابنه هو." ] },
          { title: "ما أراده Taadidi", paragraphs: [
            "ذات مساء، عرف Taadidi بالضبط ما يريد. ليس Adama وحدها. Adama وابنها الصغير. كلاهما. إلى الأبد. ذهب ليجدها، وقلبه يخفق." ] },
          { title: "الطلب", paragraphs: [
            "«Adama، قال. لا أريد أن أتزوّجك فحسب. ابنك، أريده أن يكون ابني هو أيضًا. اسمحي لي أن أطلب يدك، وأن نجمع عائلتَينا.» لم يجثُ على ركبتيه. وقف ببساطة أمامها، منتصبًا صادقًا، كما يقف المرء أمام من يحترمه بكلّ روحه." ] },
          { title: "لأوّل مرّة", paragraphs: [
            "نظرت إليه Adama طويلًا. في الخامسة عشرة، أُعطيت دون أن يسألها أحد. اليوم، لأوّل مرّة في حياتها كلّها، يُسألُ رأيها. الاختيار اختيارها. لها وحدها. من خلال دموعها، ابتسمت. «نعم»، قالت. وذلك النعم، أخيرًا، كان نعمها." ] },
          { title: "«ابني»", paragraphs: [
            "ثمّ التفت Taadidi إلى الطفل الصغير الذي يلعب عند قدميهما. رفعه عاليًا بين ذراعيه، فانفجر الطفل ضاحكًا. «وأنت، قال له Taadidi، ستكون ابني.» الصغير الذي لم يكن له أبٌ من قبلُ سيُولَد له أبٌ. أبٌ اختاره." ] },
          { title: "اثنان يختاران بعضهما", paragraphs: [
            "ابتسم الحكواتي. يا أطفالي، عرفت القرية كثيرًا من العقود المرتَّبة، الموعودة، المفروضة. لكنّ هذا الزواج لم يُشبه سواه. لأنّ هذا، لم يقرّره أحدٌ عنهما. شخصان رأى أحدهما الآخر حقًّا، ثمّ اختارا بعضهما. وما من رابطٍ في هذه الدنيا أمتن من ذلك." ] },
          { title: "أعذب القصص", paragraphs: [
            "وهكذا، التي أُعطيت قسرًا ستعطي نفسها هذه المرّة بحرّية. وذاك الذي أنقذ غريبةً، يومًا ما، خلف مدرسة، سيبني معها أجمل ما بنى: أسرة. لم يبقَ إلّا الاحتفال. وعرسٌ في Kiribounyi، يا أطفالي... لا بدّ أن تروه! لكنّ ذلك سيكون في الغد." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "Adama 的选择", sections: [
          { title: "季节流逝", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。季节流逝。Adama 的互助社越来越壮大；妇女们从四面八方赶来，做工，挣钱，抬起头来。村子在慢慢愈合。而在这一切中间，Taadidi 和 Adama 越走越近——这一回，是真的，是在光天化日之下。" ] },
          { title: "那个小男孩", paragraphs: [
            "在工地上，在水边，Adama 的小男孩跟着 Taadidi 到处跑。他递工具，被歌声逗笑，有时靠在 Taadidi 肩上睡着了。而 Taadidi，不知不觉，已经把他爱得像自己亲生的儿子。" ] },
          { title: "Taadidi 想要的", paragraphs: [
            "一天傍晚，Taadidi 清清楚楚知道了自己想要什么。不只是 Adama。是 Adama 和她的小男孩。两个人。永远。他去找她，心跳得厉害。" ] },
          { title: "提亲", paragraphs: [
            "「Adama，」他说。「我不只是想娶你。你的儿子，我也想让他成为我的儿子。请允许我向你提亲，让我们两家结成一家。」他没有跪下。他只是站在她面前，挺直，真诚，就像站在一个你打心底里敬重的人面前那样。" ] },
          { title: "头一次", paragraphs: [
            "Adama 望了他很久。十五岁那年，她被人给了出去，没有人问过她一句。今天，她生平头一回，被人问到了。这个选择是她自己的。只属于她。她透过泪水笑了。「好，」她说。而这个「好」，终于，是她自己的。" ] },
          { title: "「我的儿子」", paragraphs: [
            "Taadidi 转向在他们脚边玩耍的小男孩。他把孩子高高举起，孩子咯咯笑出声来。「而你，」Taadidi 对他说，「你会是我的儿子。」这个从来没有父亲的小孩，要有父亲了。一个选择了他的父亲。" ] },
          { title: "两个互相选择的人", paragraphs: [
            "讲故事的人笑了。我的孩子们，这村子见过太多安排好的、许下的、强迫的婚事。可这一桩和那些都不一样。因为这一桩，没有人替他们做主。两个人真正看见了彼此，然后互相选择了对方。而这世上，没有比这更牢靠的纽带了。" ] },
          { title: "最甜的故事", paragraphs: [
            "就这样，曾被人强行给出去的人，这一回，要自己把自己交出去。而那个有一天在学校后面救下一个陌生姑娘的人，要和她一起建造他这辈子最美的工程：一个家。剩下的，就是庆祝了。而在 Kiribounyi 办一场婚礼，我的孩子们……那，可要亲眼见才行！可那是明天的故事了。" ] },
        ] },
      },
    },
    {
      numero: 27, statut: "live",
      planche: "/images/taadidi/ep27-planche.png",
      cover: "/images/taadidi/ep27-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Le grand jour", "en": "The Great Day", "ar": "اليوم الكبير", "zh": "大日子"},
      teaser: {"fr": "Kiribounyi ouvre ses portes. Investisseurs, ingénieurs, entrepreneurs arrivent du pays entier. Nana présente la coopérative kenda, Adama son association, Taadidi ses ponts, Tofan son projet des plaines. Et dans la salle : Bakala et Sana, main dans la main.", "en": "Kiribounyi opens its doors. Investors, engineers, entrepreneurs arrive from across the country. Nana presents the kenda cooperative, Adama her association, Taadidi his bridges, Tofan her plains project. And in the room: Bakala and Sana, hand in hand.", "ar": "Kiribounyi تفتح أبوابها. يصل مستثمرون ومهندسون ورجال أعمال من أنحاء البلاد كلّها. Nana تقدّم تعاونية الـkenda، وAdama جمعيّتها، وTaadidi جسوره، وTofan مشروع السهول. وفي القاعة: Bakala وSana، يدًا في يد.", "zh": "Kiribounyi 打开大门。投资者、工程师、企业家从全国各地赶来。Nana 介绍 kenda 合作社，Adama 介绍她的互助社，Taadidi 介绍他的桥，Tofan 介绍她的平原方案。而在会场里：Bakala 和 Sana，手握着手。"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le grand jour", sections: [
          { title: "Lima revient vite", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Un jour, tout Nakiry apprit une nouvelle : le village de Kiribounyi ouvrait ses portes. Des entrepreneurs, des investisseurs, des ingénieurs venaient du pays entier pour écouter ce que ce petit village avait à montrer. Et ce matin-là, Lima l'infirmière arriva depuis la préfecture. Elle sourit en descendant de son véhicule. Quarante-cinq minutes de route. Jadis, il lui en avait fallu près de deux heures. Grâce aux ponts de Taadidi, le village était devenu proche. Tout allait changer ce jour-là." ] },
          { title: "Nana et Makhadi à la barre", paragraphs: [
            "Sous le grand néribily, les présentations commencèrent. D'abord, Nana se leva — celle qu'on avait moquée dix ans, celle qui ne faisait « que des filles ». Avec Makhadi à ses côtés, elle présenta la coopérative du kenda Neribounyi. Cent femmes au travail. Des emplois. De l'argent qui restait au village. Des investisseurs se penchèrent en avant, intéressés." ] },
          { title: "Adama parle", paragraphs: [
            "Puis Adama prit la parole. Elle parla des femmes qui restent prisonnières, faute d'une autre route. Elle parla de son association, née sous le néribily. Et de tous les chantiers, au bord de l'eau, où ces femmes gagnaient désormais leur vie. « Nous avons compris, dit-elle, que la vraie liberté passe par l'argent qu'on gagne soi-même. »" ] },
          { title: "Taadidi présente ses ponts", paragraphs: [
            "Alors Taadidi se leva, tranquille. Il présenta ses ouvrages de franchissement — chacun construit avec une technique durable, écologique, que nul n'avait vu faire avant. Des ponts qui ne s'écroulent pas, qui protègent l'eau, qui durent. Il avait un plan : en couvrir tout le Nakiry. Et des ingénieurs, intrigués, lui posèrent mille questions." ] },
          { title: "Tofan, la promotrice", paragraphs: [
            "Mais la présentation principale, ce fut celle de Tofan. Elle monta sur l'estrade vêtue de son indigo, les épis de riz à sa poitrine. Elle avait passé un certificat en marketing et vente — elle allait être la promotrice officielle de sa terre. Elle parla des plaines, du kenda, de l'infrastructure nouvelle, de ce que le village pouvait devenir. Et, comme toujours, elle le dit avec ce qu'elle avait dans la tête." ] },
          { title: "Les concurrentes venues voir", paragraphs: [
            "Et savez-vous qui était dans la salle ? Les autres candidates à la couronne nationale. Ses concurrentes, venues de partout pour voir ce qui motivait cette passion, cette flamme dans la voix de Tofan quand elle parlait de sa terre. Et ce jour-là, elles comprirent : ce n'était pas un joli visage qui parlait. C'était une femme qui construisait." ] },
          { title: "Les deux vieux ennemis", paragraphs: [
            "Mais le plus beau spectacle, mes enfants, c'était au fond de l'assemblée. Bakala et Sana — les deux vieux ennemis, ceux qui s'étaient haïs pendant des années — se tenaient côte à côte, main dans la main, à applaudir. Kala, le fils de Bakala, était là aussi, fier de sa meilleure amie Tofan. Et Fanyi, la maîtresse d'école, rayonnante de voir Kaly si fier." ] },
          { title: "Ce qu'on a bâti ensemble", paragraphs: [
            "Le conteur sourit, voyant tout cela d'en haut. Ce n'était pas un héros qui avait sauvé son village. C'était un village entier qui, avec un jeune garçon aux locks, avait décidé de bâtir quelque chose. Chacun sa pierre, chacun sa brique. Lima revenue en quarante-cinq minutes ; Nana à la barre d'une économie ; Adama la voix de celles qu'on avait fait taire ; Taadidi les ponts qui duraient ; Tofan les rêves qui montaient. Et ce qu'on vit ce jour-là sous le néribily, ce n'était pas le triomphe d'un seul — c'était celui de tous. Mais le plus beau, mes enfants, c'était encore à venir." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "The Great Day", sections: [
          { title: "Lima Arrives Quickly", paragraphs: [
            "Listen to what came next, children of Kiribounyi. One day, all of Nakiry learned the news: the village of Kiribounyi was opening its doors. Entrepreneurs, investors, engineers came from across the whole country to hear what this small village had to show. And that morning, Lima the nurse arrived from the prefecture. She smiled as she stepped out of her vehicle. Forty-five minutes on the road. Once, it had taken her nearly two hours. Thanks to Taadidi's bridges, the village had become close. Everything was going to change that day." ] },
          { title: "Nana and Makhadi at the Helm", paragraphs: [
            "Under the great néribily, the presentations began. First, Nana rose — the one who had been mocked for ten years, the one who \"only made girls\". With Makhadi at her side, she presented the Neribounyi kenda cooperative. A hundred women at work. Jobs. Money that stayed in the village. Investors leaned forward, interested." ] },
          { title: "Adama Speaks", paragraphs: [
            "Then Adama took the floor. She spoke of the women who remain trapped, for lack of another road. She spoke of her association, born under the néribily. And of all the building sites, by the water, where these women were now earning their living. \"We understood,\" she said, \"that true freedom comes through money you earn yourself.\"" ] },
          { title: "Taadidi Presents His Bridges", paragraphs: [
            "Then Taadidi rose, calm. He presented his crossing structures — each built with a sustainable, ecological technique that no one had ever seen before. Bridges that don't collapse, that protect the water, that last. He had a plan: to cover all of Nakiry with them. And engineers, intrigued, asked him a thousand questions." ] },
          { title: "Tofan, the Promoter", paragraphs: [
            "But the main presentation was Tofan's. She climbed onto the stage dressed in her indigo, ears of rice on her chest. She had earned a certificate in marketing and sales — she was going to be the official promoter of her land. She spoke of the plains, of the kenda, of the new infrastructure, of what the village could become. And, as always, she said it with what she had in her head." ] },
          { title: "The Rival Candidates Who Came to See", paragraphs: [
            "And do you know who was in the room? The other candidates for the national crown. Her rivals, come from everywhere to see what drove this passion, this flame in Tofan's voice when she spoke of her land. And that day, they understood: it was not a pretty face speaking. It was a woman who was building." ] },
          { title: "The Two Old Enemies", paragraphs: [
            "But the finest sight, my children, was at the back of the assembly. Bakala and Sana — the two old enemies, those who had hated each other for years — stood side by side, hand in hand, applauding. Kala, Bakala's son, was there too, proud of his best friend Tofan. And Fanyi, the schoolteacher, radiant at seeing Kaly so proud." ] },
          { title: "What We Built Together", paragraphs: [
            "The storyteller smiled, looking at all this from above. It was not a hero who had saved his village. It was a whole village that, together with a young boy with locks, had decided to build something. Each his stone, each her brick. Lima back in forty-five minutes; Nana at the helm of an economy; Adama the voice of those who had been silenced; Taadidi the bridges that endured; Tofan the dreams that were rising. And what was seen that day under the néribily was not the triumph of one — it was the triumph of all. But the finest of all, my children, was still to come." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "اليوم الكبير", sections: [
          { title: "Lima تصل سريعًا", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. ذات يوم، علم Nakiry كلّها بخبر: قرية Kiribounyi تفتح أبوابها. جاء رجال أعمال ومستثمرون ومهندسون من البلد كلّه لسماع ما لهذه القرية الصغيرة من عرض. وفي ذلك الصباح، وصلت Lima الممرّضة من المحافظة. ابتسمت حين نزلت من سيّارتها. خمسٌ وأربعون دقيقةً على الطريق. كانت تحتاج في ما مضى قرابة ساعتين. بفضل جسور Taadidi، صار القرية قريبًا. كلّ شيء كان سيتغيّر في ذلك اليوم." ] },
          { title: "Nana ومخادي على الرأس", paragraphs: [
            "تحت النيريبيلي الكبير، بدأت العروض. أوّلًا وقفت Nana — التي سخروا منها عشر سنوات، تلك التي لا تنجب «سوى البنات». مع Makhadi إلى جانبها، قدّمت تعاونية kenda Neribounyi. مئة امرأةٍ في العمل. وظائف. مالٌ يبقى في القرية. انحنى المستثمرون إلى الأمام، مهتمّين." ] },
          { title: "Adama تتكلّم", paragraphs: [
            "ثمّ أخذت Adama الكلمة. تكلّمت عن النساء اللواتي يبقين أسيرات، لعدم وجود طريقٍ أخرى. تكلّمت عن جمعيّتها، التي وُلدت تحت النيريبيلي. وعن كلّ المواقع، على ضفاف الماء، حيث بتن يكسبن رزقهنّ. «أدركنا، قالت، أنّ الحرّية الحقيقيّة تمرّ بالمال الذي تكسبه المرأة بنفسها.»" ] },
          { title: "Taadidi يقدّم جسوره", paragraphs: [
            "ثمّ وقف Taadidi، هادئًا. قدّم منشآت العبور — كلٌّ منها مبنيٌّ بتقنيّةٍ مستدامة، بيئيّة، لم يكن أحدٌ قد رآها من قبل. جسورٌ لا تنهار، تحمي الماء، وتدوم. كان لديه خطّة: تغطية Nakiry كلّها بها. ومهندسون، بالغو الفضول، طرحوا عليه ألف سؤال." ] },
          { title: "Tofan، المروّجة", paragraphs: [
            "لكنّ العرض الرئيسيّ كان عرض Tofan. صعدت إلى المنصّة مرتديةً إنديغوها، وسنابل الأرزّ على صدرها. كانت قد حصلت على شهادةٍ في التسويق والمبيعات — ستكون المروّجة الرسمية لأرضها. تكلّمت عن السهول، وعن الـkenda، وعن البنية التحتية الجديدة، وعمّا يمكن أن يصبح عليه القرية. وكما دائمًا، قالته بما في رأسها." ] },
          { title: "المنافسات جئن لترى", paragraphs: [
            "وأتدرون من كان في القاعة؟ المترشّحات الأخريات للتاج الوطنيّ. منافساتها، اللواتي جئن من كلّ مكان ليرين ما يحرّك هذا الشغف، هذه الجذوة في صوت Tofan حين تتكلّم عن أرضها. وفي ذلك اليوم، أدركن: ليس وجهًا جميلًا هو من يتكلّم. بل امرأةٌ تبني." ] },
          { title: "العدوّان القديمان", paragraphs: [
            "لكنّ أجمل مشهد، يا أطفالي، كان في آخر التجمّع. Bakala وSana — العدوّان القديمان، اللذان تكارها سنواتٍ طويلة — كانا يقفان جنبًا إلى جنب، يدًا في يد، يصفّقان. وكان Kala، ابن Bakala، هناك أيضًا، فخورًا بصديقته الأعزّ Tofan. وFanyi، المعلّمة، مشرقةً برؤية Kaly فخورًا." ] },
          { title: "ما بنيناه معًا", paragraphs: [
            "ابتسم الحكواتي، ناظرًا إلى كلّ ذلك من الأعلى. لم يكن بطلٌ واحد هو من أنقذ قريته. كان القرية كلّها الذي، مع فتًى صغير ذي جدائل، قرّر أن يبني شيئًا. كلٌّ بحجره، كلٌّ بقرميدته. Lima عادت في خمسٍ وأربعين دقيقة؛ Nana على رأس اقتصاد؛ Adama صوت من صُمِّتن؛ Taadidi الجسور التي تدوم؛ Tofan الأحلام الصاعدة. وما رُئي في ذلك اليوم تحت النيريبيلي لم يكن انتصار فردٍ واحد — بل انتصار الجميع. لكنّ الأجمل، يا أطفالي، كان لا يزال آتيًا." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "大日子", sections: [
          { title: "Lima 很快到了", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。有一天，整个 Nakiry 都知道了这个消息：Kiribounyi 村敞开了大门。企业家、投资者、工程师从全国各地赶来，听这个小村子有什么要展示的。那天早上，护士 Lima 从县里赶到了。她从车上下来，面带微笑。四十五分钟的路程。从前，她需要将近两个小时。多亏了 Taadidi 的桥，村子变近了。那一天，一切都要改变。" ] },
          { title: "Nana 和 Makhadi 当家", paragraphs: [
            "在大 néribily 树下，展示开始了。第一个站起来的是 Nana——被嘲笑了十年的那个人，「只会生女儿」的那个人。她和 Makhadi 并肩，介绍了 Neribounyi kenda 合作社。一百个妇女在劳作。有了活干。钱留在了村里。投资者们身体前倾，来了兴致。" ] },
          { title: "Adama 发言", paragraphs: [
            "然后 Adama 发言了。她谈到那些因为无路可走而留在困境里的妇女。她谈到在 néribily 树下诞生的互助社。还有那些水边的工地，那里的妇女如今自己挣钱养活自己。「我们明白了，」她说，「真正的自由，要靠自己挣来的钱。」" ] },
          { title: "Taadidi 介绍他的桥", paragraphs: [
            "然后 Taadidi 平静地站了起来。他介绍了他的跨河工程——每一座都用从没人见过的可持续、生态工法建造的。不会垮的桥，保护水源的桥，能撑久的桥。他有个计划：把整个 Nakiry 都铺满这样的桥。工程师们来了兴趣，问了他上千个问题。" ] },
          { title: "Tofan，推广人", paragraphs: [
            "可最主要的展示是 Tofan 的。她穿着靛蓝色的礼服，胸前别着稻穗，走上台去。她考了一张市场营销与销售的证书——她要做自己土地的官方推广人。她谈平原、谈 kenda、谈新基础设施、谈这个村子能成为什么。一如既往地，她用脑子里装着的东西说话。" ] },
          { title: "前来观看的对手们", paragraphs: [
            "你们知道台下坐着谁吗？全国那顶王冠的其他候选人。她的对手们，从四面八方赶来，想看看是什么驱动了这种热情、让 Tofan 谈起自己土地时声音里带着那团火。那一天，她们明白了：说话的不是一张漂亮脸蛋。是一个正在建造的女人。" ] },
          { title: "两个老对头", paragraphs: [
            "可最美的一幕，我的孩子们，在会场最后排。Bakala 和 Sana——两个老对头，多年来彼此憎恶的人——并肩而立，手握着手，鼓着掌。Bakala 的儿子 Kala 也在那里，为最好的朋友 Tofan 骄傲着。还有女教师 Fanyi，看着 Kaly 那么骄傲，她的脸上一片光亮。" ] },
          { title: "我们一起建起的", paragraphs: [
            "讲故事的人从上面望着这一切，笑了。不是一个英雄拯救了他的村子。是一整个村子，和一个留着脏辫的年轻男孩一起，决定建起一些东西。各人一块石头，各人一块砖。Lima 四十五分钟回来了；Nana 当了一个经济体的当家；Adama 是那些被压了声音的人的声音；Taadidi 是撑得住的桥；Tofan 是升起的梦。而那天在 néribily 树下看见的，不是一个人的胜利——是所有人的胜利。可最美的，我的孩子们，还在后面。" ] },
        ] },
      },
    },
    {
      numero: 28, statut: "live",
      planche: "/images/taadidi/ep28-planche.png",
      cover: "/images/taadidi/ep28-cover.png",
      cote: "gauche",
      bande: "horizontale",
      titre: {"fr": "Sogué nènè", "en": "Sogué nènè", "ar": "Sogué nènè", "zh": "Sogué nènè"},
      teaser: {"fr": "Trois ans plus tard. Kiribounyi prospère. Makhadi refuse de concurrencer Nana : « Il y a une cheffe, c'est toi. » Nana, celle qu'on a moquée dix ans, devient Cheffe. Au même instant, au dispensaire, naît Sogué nènè — la fille aux cheveux lumineux comme un soleil. Kiké… Sogué. WOYIKA !", "en": "Three years later. Kiribounyi thrives. Makhadi refuses to compete with Nana: \"There is one chief, and it's you.\" Nana, the one mocked for ten years, becomes Chief. At that same moment, in the dispensary, Sogué nènè is born — the girl whose hair shines like a sun. Kiké… Sogué. WOYIKA!", "ar": "بعد ثلاث سنوات. Kiribounyi تزدهر. Makhadi ترفض منافسة Nana: «هناك رئيسة واحدة، وأنتِ هي.» Nana، التي سخروا منها عشر سنوات، تصير رئيسة. في الوقت ذاته، في المستوصف، تُولَد Sogué nènè — الفتاة ذات الشعر المضيء كالشمس. Kiké… Sogué. WOYIKA!", "zh": "三年以后。Kiribounyi 欣欣向荣。Makhadi 拒绝和 Nana 竞争：「只有一个村长，那就是你。」Nana，被嘲笑了十年的那个人，成了村长。就在同一刻，在诊疗所里，Sogué nènè 出生了——那个头发明亮如太阳的女孩。Kiké……Sogué。WOYIKA！"},
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Sogué nènè", sections: [
          { title: "Trois ans plus tard", paragraphs: [
            "Écoutez la suite, enfants de Kiribounyi. Trois ans avaient passé. Le village s'était envolé — les chantiers de Taadidi couvraient tout Nakiry, la coopérative de Nana avait grandi bien au-delà des plaines, et les femmes de l'association d'Adama travaillaient partout, relevées, gagnantes. Mais un jour, une nouvelle question se posa : qui allait être le chef du village ?" ] },
          { title: "La concurrence menace", paragraphs: [
            "Bakala et Sana, les deux vieux patriarches, n'étaient plus trop en forme. Il fallait un successeur. Et soudain, la fadenya revint rôder — la jalousie d'autrefois. Car Makhadi et Nana auraient pu réclamer, rivaliser, se battre pour le titre." ] },
          { title: "Makhadi refuse", paragraphs: [
            "Mais Makhadi vint trouver Nana sous le néribily. Et ce qu'elle dit fit taire la concurrence avant même qu'elle ne naisse. « Non, dit Makhadi. Il n'y a pas de match à mes yeux. C'est toi la Cheffe. »" ] },
          { title: "Pourquoi Nana", paragraphs: [
            "« Tu m'as sauvé la vie, autrefois, continua Makhadi. Et tes enfants — ta vision — ont remis ce village en orbite. Tu m'as donné des responsabilités avec la coopérative, et chaque jour elle grandit. Non, Nana. Il y a une chef du village, et c'est toi. »" ] },
          { title: "Nana devient Cheffe", paragraphs: [
            "Et ainsi, celle qu'on avait moquée dix ans — « elle ne fait que des filles ! » — devint la Cheffe de Kiribounyi. Celle qui gardait les savoirs de sa grand-mère. Celle qui avait opéré l'économie du kenda. Celle qui voyait juste. Celle qui bâtissait sans orgueil." ] },
          { title: "Le griot crie", paragraphs: [
            "Le jour de l'annonce, sous le grand néribily, le griot poussa un cri qui ébranla le village : « Un nouveau soleil s'est levé sur notre terre ! SOGUÉ ! »" ] },
          { title: "La fille de Taadidi", paragraphs: [
            "À ce même instant — savez-vous où était Taadidi ? Au dispensaire, à côté de sa femme Adama, qui venait de mettre au monde une fille. Une fille aux cheveux lumineux comme un soleil. Taadidi regarda ce soleil au bord de son enfant, et il répéta les mots du griot : « Sogué nènè. »" ] },
          { title: "Le sommet", paragraphs: [
            "« Comment trouves-tu ce nom ? » demanda-t-il à Adama, le cœur débordant. Et Adama, qui avait porté tant d'ombres et bâti tant de lumière, sourit. « C'est parfait », dit-elle. Et la petite Sogué nènè éternua de toute sa force — comme si elle criait oui à la vie. Les parents sourirent. Le cycle était fermé. De la lune au soleil. De l'enfant au père. Du silence au cri de victoire. Et Kiribounyi, pour la première fois, était libre. WOYIKA !" ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Sogué nènè", sections: [
          { title: "Three Years Later", paragraphs: [
            "Listen to what came next, children of Kiribounyi. Three years had passed. The village had taken flight — Taadidi's building sites covered all of Nakiry, Nana's cooperative had grown far beyond the plains, and the women of Adama's association were working everywhere, lifted up, victorious. But one day, a new question arose: who was going to be chief of the village?" ] },
          { title: "A Rivalry Threatens", paragraphs: [
            "Bakala and Sana, the two old patriarchs, were no longer in the best shape. A successor was needed. And suddenly, fadenya came prowling back — the jealousy of old. For Makhadi and Nana could have claimed, competed, fought for the title." ] },
          { title: "Makhadi Refuses", paragraphs: [
            "\"But Makhadi came to find Nana under the néribily. And what she said silenced the rivalry before it was even born. \"No,\" said Makhadi. \"There is no contest in my eyes. You are the Chief.\"" ] },
          { title: "Why Nana", paragraphs: [
            "\"You once saved my life,\" Makhadi went on. \"And your children — your vision — have put this village back in orbit. You gave me responsibilities with the cooperative, and every day it grows. No, Nana. There is one chief of this village, and it is you.\"" ] },
          { title: "Nana Becomes Chief", paragraphs: [
            "And so she who had been mocked for ten years — \"she only makes girls!\" — became Chief of Kiribounyi. The one who kept her grandmother's knowledge. The one who had set the kenda economy in motion. The one who saw clearly. The one who built without pride." ] },
          { title: "The Griot Cries Out", paragraphs: [
            "The day of the announcement, under the great néribily, the griot let out a cry that shook the village: \"A new sun has risen on our land! SOGUÉ!\"" ] },
          { title: "Taadidi's Daughter", paragraphs: [
            "At that very moment — do you know where Taadidi was? At the dispensary, beside his wife Adama, who had just brought a girl into the world. A girl whose hair shone like a sun. Taadidi looked at that sun at the edge of his child, and he repeated the griot's words: \"Sogué nènè.\"" ] },
          { title: "The Summit", paragraphs: [
            "\"What do you think of the name?\" he asked Adama, his heart overflowing. And Adama, who had carried so many shadows and built so much light, smiled. \"It's perfect,\" she said. And little Sogué nènè sneezed with all her might — as if crying yes to life. The parents smiled. The cycle was closed. From the moon to the sun. From the child to the father. From silence to the cry of victory. And Kiribounyi, for the first time, was free. WOYIKA!" ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "Sogué nènè", sections: [
          { title: "بعد ثلاث سنوات", paragraphs: [
            "اسمعوا التتمّة، يا أطفال Kiribounyi. مرّت ثلاث سنوات. انطلق القرية — مواقع Taadidi تغطّي Nakiry كلّها، وتعاونية Nana نمت إلى أبعد بكثير من السهول، ونساء جمعية Adama يعملن في كلّ مكان، رافعاتٍ رؤوسهنّ، فائزات. لكن ذات يوم، نشأ سؤالٌ جديد: من سيكون رئيس القرية؟" ] },
          { title: "المنافسة تتهدّد", paragraphs: [
            "لم يعد Bakala وSana، البطريركان العجوزان، في أحسن حال. كان ثمّة حاجةٌ لخلف. وفجأةً، عادت الفاديانيا تتربّص — غيرةُ الزمن الغابر. إذ كان بإمكان Makhadi وNana أن تطالبا، وتتنافسا، وتتصارعا على اللقب." ] },
          { title: "Makhadi ترفض", paragraphs: [
            "لكنّ Makhadi جاءت تجد Nana تحت النيريبيلي. وما قالته أسكت المنافسة قبل أن تُولَد حتّى. «لا، قالت Makhadi. لا منافسة في نظري. أنتِ الرئيسة.»" ] },
          { title: "لماذا Nana", paragraphs: [
            "«أنقذتِ حياتي ذات يوم، واصلت Makhadi. وأبناؤكِ — رؤيتكِ — أعادا هذا القرية إلى مساره. أعطيتِني مسؤوليّاتٍ مع التعاونية، وكلّ يومٍ تكبر. لا، Nana. هناك رئيسةٌ للقرية، وأنتِ هي.»" ] },
          { title: "Nana تصير رئيسة", paragraphs: [
            "وهكذا، التي سخروا منها عشر سنوات — «لا تنجب إلّا البنات!» — صارت رئيسةَ Kiribounyi. تلك التي تحفظ علوم جدّتها. التي أدارت اقتصاد الـkenda. التي كانت ترى صائبًا. التي تبني بلا غرور." ] },
          { title: "الغريّو يصرخ", paragraphs: [
            "يوم الإعلان، تحت النيريبيلي الكبير، انطلق صرخةٌ من الغريّو هزّت القرية: «شمسٌ جديدة أشرقت على أرضنا! SOGUÉ!»" ] },
          { title: "ابنة Taadidi", paragraphs: [
            "في ذلك الوقت ذاته — أتعرفون أين كان Taadidi؟ في المستوصف، إلى جانب زوجته Adama، التي كانت قد أنجبت للتوّ فتاة. فتاةً بشعرٍ مضيءٍ كالشمس. نظر Taadidi إلى هذه الشمس على حافّة طفله، وردّد كلمات الغريّو: «Sogué nènè.»" ] },
          { title: "القمّة", paragraphs: [
            "«ما رأيكِ في هذا الاسم؟» سأل Adama، وقلبه يفيض. وAdama، التي حملت كثيرًا من الظلال وبنت كثيرًا من النور، ابتسمت. «إنّه مثاليّ»، قالت. وعطست الصغيرة Sogué nènè بكلّ ما فيها — كأنّها تصرخ نعم للحياة. ابتسم الوالدان. أُغلق الدائرة. من القمر إلى الشمس. من الطفل إلى الأب. من الصمت إلى صرخة النصر. وكانت Kiribounyi، لأوّل مرّة، حرّة. WOYIKA!" ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "Sogué nènè", sections: [
          { title: "三年以后", paragraphs: [
            "再听下去，Kiribounyi 的孩子们。三年过去了。村子腾飞了——Taadidi 的工地铺满了整个 Nakiry，Nana 的合作社早已延伸到平原之外，Adama 互助社的妇女们到处在干活，昂着头，胜利了。可有一天，一个新问题出现了：谁来当村长？" ] },
          { title: "竞争威胁着", paragraphs: [
            "Bakala 和 Sana，两个老族长，体力不比当年了。需要一个继承人。转眼间，fadenya 又溜回来了——昔日的嫉妒。因为 Makhadi 和 Nana 本可以争，本可以对立，本可以为这个头衔打架。" ] },
          { title: "Makhadi 拒绝", paragraphs: [
            "可 Makhadi 来到 néribily 树下找到 Nana。她说的那句话，在竞争尚未诞生之前就把它压下去了。「不，」Makhadi 说。「在我眼里，没什么好比的。你是村长。」" ] },
          { title: "为什么是 Nana", paragraphs: [
            "「你有一次救了我的命，」Makhadi 接着说。「还有你的孩子们——你的眼光——让这个村子重新起飞了。你给了我合作社里的职责，每一天它都在壮大。不，Nana。这个村子有一个村长，那就是你。」" ] },
          { title: "Nana 成了村长", paragraphs: [
            "于是，那个被嘲笑了十年——「她只会生女儿！」——的人，成了 Kiribounyi 的村长。那个守着祖母智慧的人。那个让 kenda 经济运转起来的人。那个看得准的人。那个不骄傲地建造的人。" ] },
          { title: "格里奥高喊", paragraphs: [
            "宣布的那天，大 néribily 树下，格里奥喊出了一声震动全村的声音：「一轮新的太阳在我们的土地上升起了！SOGUÉ！」" ] },
          { title: "Taadidi 的女儿", paragraphs: [
            "就在那同一刻——你们知道 Taadidi 在哪儿吗？在诊疗所里，妻子 Adama 身边，她刚刚生下了一个女儿。一个头发亮得像太阳的女孩。Taadidi 望着孩子头旁那道阳光，重复了格里奥的话：「Sogué nènè。」" ] },
          { title: "顶点", paragraphs: [
            "「你觉得这个名字怎么样？」他问 Adama，心里溢满了。而 Adama，那个背负过那么多阴影、建造出那么多光的人，笑了。「太好了，」她说。小小的 Sogué nènè 用尽全力打了个喷嚏——好像在对生命大喊「是的」。父母俩都笑了。循环关闭了。从月亮到太阳。从孩子到父亲。从沉默到胜利的呐喊。而 Kiribounyi，有史以来第一次，自由了。WOYIKA！" ] },
        ] },
      },
    },

  ] as Episode[],
};
