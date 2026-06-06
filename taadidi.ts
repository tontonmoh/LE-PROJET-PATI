// Série « Taadidi » — première série de la collection Pati (cycle du rusé).
// Patrimoine immatériel de la basse côte, transmis par Kini Bangaly.
// Texte source de Moh, calibré Aventure ; voix orale préservée (seules retouches = orthographe).
// Versions AR/ZH = drafts à faire relire par des natifs. Noms propres invariants (Seny, Fodé, Moussa, Nana, Taadidi, Woyika).
// Ajouter un épisode = passer statut 'soon' -> 'live' + remplir reader. Rien d'autre.
export type Lang = "fr" | "en" | "ar" | "zh";
type RSection = { title: string; paragraphs: string[] };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };
export type Reader = Partial<Record<Lang, RBook>>;
export type Episode = {
  numero: number;
  titre: Record<Lang, string>;
  teaser?: Record<Lang, string>;
  statut: "live" | "soon";
  reader?: Reader;
};

export const TAADIDI_ACCENT = "#C8841E"; // or profond

const Q: Record<Lang, string> = { fr: "?", en: "?", ar: "؟", zh: "？" };

export const TAADIDI = {
  id: "taadidi",
  titre: "Taadidi",
  accroche: "Le cycle du rusé.",
  pitch:
    "Taadidi, un garçon trop malin pour son village, transforme chaque problème en bon tour — jusqu'au jour où sa ruse se retourne contre lui.",
  accent: TAADIDI_ACCENT,
  badge: "Pati Aventure · 10–12 ans",
  cover: "/images/taadidi-couverture.webp",
  provenance: "D'après le patrimoine immatériel de la basse côte, transmis par Kini Bangaly.",
  episodes: [
    {
      numero: 1, statut: "live",
      titre: { fr: "Le tas de néré", en: "The Pile of Néré", ar: "كومة النيري", zh: "那堆 néré" },
      teaser: { fr: "Trois gourmands, un grand arbre à néré… et une naissance que personne n'attendait.", en: "Three gluttons, a great néré tree… and a birth no one saw coming.", ar: "ثلاثة نهِمين، وشجرة نيري كبيرة… وولادةٌ لم يتوقّعها أحد.", zh: "三个馋鬼，一棵大 néré 树……还有一场谁也没料到的诞生。" },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le tas de néré", sections: [
          { title: "Trois gourmands", paragraphs: [
            "Il était une fois trois gourmands, chassés chacun de sa famille, dans trois villages différents.",
            "Ils se rencontrèrent à un carrefour. « Pourquoi t'a-t-on chassé ? » demanda le premier. Les autres se regardèrent… et comprirent : ils étaient pareils ! Et ils furent tout contents — à plusieurs, on trouve toujours mieux à manger.",
            "Seny, Fodé et Moussa, c'étaient leurs noms." ] },
          { title: "L'arbre à néré", paragraphs: [
            "Ils découvrirent un grand arbre à néré, chargé de fruits. On envoya le plus jeune grimper ; les autres ramasseraient en bas, pour que rien ne s'écrase ni ne se salisse.",
            "« C'est parce que je suis le plus petit que vous m'envoyez travailler pendant que vous mangez tranquilles ? » râla Seny.",
            "« Mais non ! Il faut bien que quelqu'un monte. »",
            "« Bon, je monte. Mais à la moindre noix dans vos bouches, en descendant, j'en finis avec le coupable ! »",
            "Seny grimpa. En bas, Fodé et Moussa devaient ouvrir les gousses et ranger le néré dans les sacs.",
            "Mais le néré est si bon — comme l'arachide, peut-on vraiment le travailler sans y goûter ? Chacun croyant que l'autre ne voyait rien, et tous deux sûrs que Seny ne les voyait pas d'en haut, ils cédèrent.",
            "Là-haut, Seny n'était pas tranquille. À chaque bonne poignée, il comptait, pour recompter une fois en bas. Soudain il vit Moussa remuer la bouche et Fodé s'essuyer les lèvres. Furieux, il ferma le poing — et, au lieu de descendre par le tronc, il sauta pour mieux frapper…",
            "Les deux compères s'écartèrent d'un même mouvement. Et Seny s'écrasa, la tête la première, sur la roche. Fini." ] },
          { title: "Fodé et la chanson", paragraphs: [
            "Les deux survivants étaient tristes… et, en secret, contents : à deux, cela faisait plus de néré pour chacun.",
            "Moussa avait une idée derrière la tête. « Le néré est bon à croquer, mais meilleur encore en nectar. Il nous faut de l'eau : va en chercher. »",
            "« Tu ne vas pas me faire le coup à moi aussi ? Je n'irai pas. »",
            "« Dès que j'ai fini d'ouvrir ce tas, je monte à mon tour, pour qu'on en ait encore plus. » Il glissa une bonne poignée dans les bras de Fodé. « Tiens, mange en chemin, et reviens vite. »",
            "« D'accord. Mais tu ne touches plus à rien — et à mon retour, gare à toi si ta bouche sent le néré. »",
            "Fodé partit à reculons, surveillant Moussa, en chantonnant : « Si tu prends, je vois… ne prends pas, je te vois… »",
            "Le néré était doux, la chanson l'emportait, et il marchait toujours à reculons… si bien qu'il dégringola du haut de la falaise. Bam." ] },
          { title: "Moussa et le lion", paragraphs: [
            "Moussa, ravi d'avoir le magot pour lui seul, décida d'aller chercher l'eau lui-même : ainsi, personne ne lui volerait son tas.",
            "En chemin, il vit une antilope qui courait en boitant. « Comme ce gibier serait meilleur que du simple néré ! » se dit-il. Et il courut, courut derrière l'antilope…",
            "…jusqu'à se retrouver nez à nez avec un lion. Grrrrr." ] },
          { title: "Le tas de néré", paragraphs: [
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
      titre: { fr: "Taadidi gagne son nom", en: "Taadidi Earns His Name", ar: "Taadidi يكسب اسمه", zh: "Taadidi 赢得他的名字" },
      teaser: { fr: "Le nouveau-né parle — et lance au père un duel de ruse pour gagner son nom.", en: "The newborn speaks — and challenges the father to a battle of wits to earn his name.", ar: "المولود يتكلّم — ويتحدّى أباه في مبارزة دهاءٍ ليكسب اسمه.", zh: "新生儿开口了——还向父亲发起一场智斗，去赢得自己的名字。" },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Taadidi gagne son nom", sections: [
          { title: "La voix", paragraphs: [
            "« — Woyika ! » La voix venait d'en bas, du nouveau-né. « Pourquoi une mère mettrait-elle au monde un être aussi précieux que moi… sinon pour l'envoyer porter ses messages ? Je suis là. Fais un vœu, mère, et tu seras exaucée. »",
            "La femme — elle s'appelait Nana — en resta bouche bée.",
            "« Eh bien… puisque c'est ainsi : va, mon fils. Ton père est au champ, juste derrière la colline. »" ] },
          { title: "La commission au père", paragraphs: [
            "« Papa ! Papa ! Mère m'envoie te dire qu'elle a accouché. »",
            "Le père, incrédule, refusa de se laisser berner par pareille effronterie.",
            "« Petit du champ, retourne lui dire que j'ai bien compris. Et tiens : sous le lit, dans l'eau, il y a une noix de cola. Qu'elle laboure la terre devant la porte de la case, qu'elle y plante cette noix — et que celle-ci germe, grandisse, se couvre de feuilles et donne ses fruits. Ce sont CES noix qu'on enverra à la famille pour annoncer ta naissance, et qui orneront la calebasse de ton baptême… dans une semaine. »" ] },
          { title: "Le grain de riz", paragraphs: [
            "L'enfant rapporta la commission. Sa mère fondit en larmes : « Comment réaliser un tel miracle ? Je tiens à peine debout ! »",
            "« Encore une fois, mère, à quoi bon pleurer ? Tu as désormais un missionnaire. Donne-moi un grain de riz. »",
            "Et déjà il avait filé.",
            "« Père, tiens. »",
            "« Un grain de riz, pour quoi faire ? »",
            "« Fais vite : mère te l'envoie pour que tu le plantes aujourd'hui même, que tu travailles tard, moissonnes, récoltes, passes au pilon… Ainsi, sûrement, les colas trouveront leur place sur le pain blanc préparé grâce à ce riz. »",
            "Le père sentit qu'il avait perdu cette manche." ] },
          { title: "La tête rasée", paragraphs: [
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
    { numero: 3, statut: "soon", titre: Q },
    {
      numero: 4, statut: "soon", titre: Q,
      teaser: { fr: "Taadidi promet la lune au marché… et doit tenir parole.", en: "Taadidi promises the moon at the market… and must keep his word.", ar: "تاديدي يَعِد بالقمر في السوق… وعليه أن يفي بوعده.", zh: "塔迪迪在集市上许下天大的承诺……而他必须兑现。" },
    },
    { numero: 5, statut: "soon", titre: Q },
    { numero: 6, statut: "soon", titre: Q },
    { numero: 7, statut: "soon", titre: Q },
    { numero: 8, statut: "soon", titre: Q },
    { numero: 9, statut: "soon", titre: Q },
    { numero: 10, statut: "soon", titre: Q },
    { numero: 11, statut: "soon", titre: Q },
    { numero: 12, statut: "soon", titre: Q },
  ] as Episode[],
};
