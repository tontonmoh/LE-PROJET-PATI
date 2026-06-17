// Série « LE POINT ZÉRO » — Tome 6 (FINAL) : « Le cœur enfoui »
// Pati, Passage (13-15 ans). 11 doubles-pages.
// Narratrice : KAMA elle-même — son cœur enfoui au point zéro, ranimé par le toucher des enfants.
// Clôture de la saga : reconnexion avec Amak, le pays se relève, et la révélation finale à l'aéroport.
// Plume « à la Barjavel ».
// FR + EN + AR + ZH. (AR/ZH : relecture locuteur natif recommandée avant production.)

import type { Lang } from "./series/taadidi";

type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };

export const POINT_ZERO_T6_ML: Partial<Record<Lang, RBook>> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français",
    bookTitle: "Le Point Zéro — Le cœur enfoui",
    sections: [
    { title: "", image: "/images/point-zero/pz6-01.webp", paragraphs: [
        "Je suis le cœur. Non — je suis le corps entier, désormais.",
        "Longtemps, je n'ai été qu'un morceau au fond de l'eau. Mais quelque chose a changé. Je me sens reliée à mes autres éclats, aux quatre coins du monde. Ils se tiennent la main, très loin, et je le sens.",
        "Presque entière. Presque vivante.",
        "Il manque encore une chose.",
    ] },
    { title: "", image: "/images/point-zero/pz6-02.webp", paragraphs: [
        "Un soir, je les ai sentis venir. Deux enfants, une coque rouge dans la main. Le phare de Kassa tournait, comme depuis plus de cent ans.",
        "On les avait envoyés ramasser mes morceaux à travers le monde. Ils rentraient les mains vides.",
        "Vides — et c'est eux, justement, qu'il me manquait.",
    ] },
    { title: "", image: "/images/point-zero/pz6-03.webp", paragraphs: [
        "Kamara les reçut le premier. Il les attendait sur le rocher, et n'a rien demandé : leurs yeux suffisaient.",
        "« On n'a pas ramené un seul éclat, dit Djènè.",
        "— Je sais, dit le vieux gardien. Ce n'était pas le but. On ne rassemble pas une étoile. On la relie. »",
    ] },
    { title: "", image: "/images/point-zero/pz6-04.webp", paragraphs: [
        "Puis ils sont entrés dans la mer. Là où le ciel touche l'eau. Là où je suis tombée. Au point zéro.",
        "Ils ont plongé. Descendu dans le noir, jusqu'au fond.",
        "Jusqu'à moi.",
        "Et ils m'ont touchée.",
    ] },
    { title: "", image: "/images/point-zero/pz6-05.webp", paragraphs: [
        "Alors je me suis réveillée.",
        "Pas reconstruite — réveillée. Le courant a repris dans mes morceaux. La chaleur. Comme avant la première nuit. Comme avant la chute.",
        "Pour la première fois depuis si longtemps, je me suis sentie vivante.",
    ] },
    { title: "", image: "/images/point-zero/pz6-06.webp", paragraphs: [
        "Et là-haut, très loin, dans le noir entre les étoiles, j'ai senti Amak.",
        "Ma jumelle. Le lien que nous avions rompu la nuit où je suis descendue — ce lien brisé depuis la nuit des temps — s'est rallumé.",
        "Je n'étais plus seule.",
        "Amak m'a sentie. Et je l'ai sentie me sentir.",
    ] },
    { title: "", image: "/images/point-zero/pz6-07.webp", paragraphs: [
        "Et soudain, j'étais partout.",
        "Ici, dans l'eau, au creux de la main des enfants. Et partout en même temps : dans les mains des femmes qui pilent et repiquent, sur les ailes des oiseaux qui refont chaque année le même voyage, dans la sagesse lente des arbres, sur le toit du phare, dans la vie de Kamara qui veille.",
        "Ici, et partout à la fois. Une étoile ne meurt pas. Elle se répand.",
    ] },
    { title: "", image: "/images/point-zero/pz6-08.webp", paragraphs: [
        "Et parce que je vivais, le pays s'est relevé.",
        "Le masque des femmes est rentré, après des siècles derrière des vitres. Les anciennes ont pleuré. On a regardé la grande montagne non plus comme un butin pour d'autres, mais comme un avenir à bâtir soi-même.",
        "Et ça durerait. Bien après ces enfants, bien après les leurs. Tant qu'on se souviendrait.",
    ] },
    { title: "", image: "/images/point-zero/pz6-09.webp", paragraphs: [
        "Alors je ne suis pas morte. Je ne suis pas remontée au ciel non plus.",
        "Je suis restée. Je vis parmi vous : dans la lumière qu'on a retrouvée, dans ce qu'on se partage d'une rive à l'autre, dans le fait de savoir, enfin, qui l'on est, dans le respect rendu à la terre et à tout ce qui vit.",
        "Kama, c'est vous — quand vous vous souvenez.",
    ] },
    { title: "", image: "/images/point-zero/pz6-10.webp", paragraphs: [
        "Au matin, les enfants sont remontés sur le rocher. Le phare s'est éteint devant le soleil.",
        "« Vous avez fait le tour, dit Kamara.",
        "— Non, dit Djènè. On commence. »",
        "Et au fond de la mer, je n'étais plus seule. Je ne l'avais, au fond, jamais vraiment été.",
        "La mer a continué de poser ses vagues. Mais elle chantait, maintenant.",
    ] },
    { title: "", image: "/images/point-zero/pz6-11.webp", paragraphs: [
        "C'est moi qui termine cette histoire. Djènè.",
        "Des années ont passé. Ce jour-là, j'étais loin — un aéroport, un pays étranger, une file d'attente.",
        "Quelqu'un m'a demandé : « Vous venez d'où ? »",
        "« De Guinée », j'ai dit.",
        "« Guinée ? Quelle Guinée ? »",
        "J'ai levé les yeux. Sereine.",
        "« La Mère. La Mère Guinée. La jumelle des unes, et la sœur des autres. »",
    ] },
    ],
  },

  en: {
    lang: "en", dir: "ltr", label: "English",
    bookTitle: "Point Zero — The Buried Heart",
    sections: [
    { title: "", image: "/images/point-zero/pz6-01.webp", paragraphs: [
        "I am the heart. No — I am the whole body, now.",
        "For a long time, I was only a fragment at the bottom of the water. But something has changed. I feel myself connected to my other shards, at the four corners of the world. They hold hands, very far away, and I feel it.",
        "Almost whole. Almost alive.",
        "One thing is still missing.",
    ] },
    { title: "", image: "/images/point-zero/pz6-02.webp", paragraphs: [
        "One evening, I felt them coming. Two children, a red shell in hand. The lighthouse of Kassa was turning, as it had for more than a hundred years.",
        "They had been sent to gather my fragments across the world. They were coming back empty-handed.",
        "Empty — and it was they, precisely, that I was missing.",
    ] },
    { title: "", image: "/images/point-zero/pz6-03.webp", paragraphs: [
        "Kamara received them first. He was waiting for them on the rock, and asked nothing: their eyes were enough.",
        "\"We didn't bring back a single shard,\" said Djènè.",
        "\"I know,\" said the old keeper. \"That was not the goal. One does not gather a star. One connects it.\"",
    ] },
    { title: "", image: "/images/point-zero/pz6-04.webp", paragraphs: [
        "Then they walked into the sea. There where the sky touches the water. There where I fell. At the point zero.",
        "They dived. Down into the dark, all the way to the bottom.",
        "All the way to me.",
        "And they touched me.",
    ] },
    { title: "", image: "/images/point-zero/pz6-05.webp", paragraphs: [
        "Then I awoke.",
        "Not rebuilt — awakened. The current returned through my fragments. The warmth. As before the first night. As before the fall.",
        "For the first time in so long, I felt alive.",
    ] },
    { title: "", image: "/images/point-zero/pz6-06.webp", paragraphs: [
        "And up there, very far, in the dark between the stars, I felt Amak.",
        "My twin. The bond we had broken the night I came down — that bond shattered since the dawn of time — lit up again.",
        "I was no longer alone.",
        "Amak felt me. And I felt her feel me.",
    ] },
    { title: "", image: "/images/point-zero/pz6-07.webp", paragraphs: [
        "And suddenly, I was everywhere.",
        "Here, in the water, in the hollow of the children's hands. And everywhere at once: in the hands of the women who pound and transplant, on the wings of the birds that make the same journey each year, in the slow wisdom of the trees, on the roof of the lighthouse, in the life of Kamara who keeps watch.",
        "Here, and everywhere at the same time. A star does not die. It spreads.",
    ] },
    { title: "", image: "/images/point-zero/pz6-08.webp", paragraphs: [
        "And because I lived, the land rose again.",
        "The women's mask came home, after centuries behind glass. The elders wept. The great mountain was no longer looked upon as plunder for others, but as a future to build oneself.",
        "And it would last. Long after these children, long after theirs. As long as people remembered.",
    ] },
    { title: "", image: "/images/point-zero/pz6-09.webp", paragraphs: [
        "So I did not die. Nor did I rise back to the sky.",
        "I stayed. I live among you: in the light that was found again, in what is shared from one shore to the other, in finally knowing who one is, in the respect rendered to the earth and to all that lives.",
        "Kama is you — when you remember.",
    ] },
    { title: "", image: "/images/point-zero/pz6-10.webp", paragraphs: [
        "In the morning, the children climbed back onto the rock. The lighthouse went out before the sun.",
        "\"You've come full circle,\" said Kamara.",
        "\"No,\" said Djènè. \"We're beginning.\"",
        "And at the bottom of the sea, I was no longer alone. Deep down, I never truly had been.",
        "The sea went on laying down its waves. But now, it was singing.",
    ] },
    { title: "", image: "/images/point-zero/pz6-11.webp", paragraphs: [
        "It is I who end this story. Djènè.",
        "Years have passed. That day, I was far away — an airport, a foreign country, a queue.",
        "Someone asked me: \"Where are you from?\"",
        "\"From Guinea,\" I said.",
        "\"Guinea? Which Guinea?\"",
        "I raised my eyes. Serene.",
        "\"The Mother. Mother Guinea. The twin of some, and the sister of others.\"",
    ] },
    ],
  },

  ar: {
    lang: "ar", dir: "rtl", label: "العربية",
    bookTitle: "النقطة صفر — القلب المدفون",
    sections: [
    { title: "", image: "/images/point-zero/pz6-01.webp", paragraphs: [
        "أنا القلب. لا — أنا الجسد كلّه، الآن.",
        "زمنًا طويلًا، لم أكن سوى قطعةٍ في قاع الماء. لكنّ شيئًا تغيّر. أشعر بنفسي موصولةً بشظاياي الأخرى، في أركان العالم الأربعة. إنها تمسك الأيدي، بعيدًا جدًّا، وأنا أشعر بذلك.",
        "شِبه كاملة. شِبه حيّة.",
        "ما زال ينقص شيءٌ واحد.",
    ] },
    { title: "", image: "/images/point-zero/pz6-02.webp", paragraphs: [
        "ذات مساء، شعرتُ بهما قادمَين. طفلان، صَدَفةٌ حمراء في اليد. كانت منارة كاسا تدور، كما منذ أكثر من مئة عام.",
        "أُرسِلا لجمع قطعي عبر العالم. كانا يعودان خاليَي اليدين.",
        "خاليَين — وهما، تحديدًا، مَن كان ينقصني.",
    ] },
    { title: "", image: "/images/point-zero/pz6-03.webp", paragraphs: [
        "استقبلهما كامارا أولًا. كان ينتظرهما على الصخرة، ولم يسأل شيئًا: كانت عيناهما تكفيان.",
        "«لم نُعِد شظيّةً واحدة»، قالت دجيني.",
        "«أعلم»، قال الحارس العجوز. «لم يكن ذلك الهدف. لا نجمع نجمةً. بل نَصِلها.»",
    ] },
    { title: "", image: "/images/point-zero/pz6-04.webp", paragraphs: [
        "ثم دخلا البحر. حيث تلامس السماء الماء. حيث سقطتُ. عند النقطة صفر.",
        "غاصا. نزلا في السواد، حتى القاع.",
        "حتى وصلا إليّ.",
        "ولمساني.",
    ] },
    { title: "", image: "/images/point-zero/pz6-05.webp", paragraphs: [
        "فاستيقظتُ.",
        "لا أُعيد بناؤها — بل أُيقِظتُ. عاد التيّار في قطعي. عادت الحرارة. كما قبل الليلة الأولى. كما قبل السقوط.",
        "للمرّة الأولى منذ زمنٍ طويل، شعرتُ بنفسي حيّة.",
    ] },
    { title: "", image: "/images/point-zero/pz6-06.webp", paragraphs: [
        "وهناك في الأعلى، بعيدًا جدًّا، في السواد بين النجوم، شعرتُ بأماك.",
        "توأمي. الرابط الذي قطعناه ليلة نزلتُ — ذلك الرابط المكسور منذ فجر الزمن — اشتعل من جديد.",
        "لم أعد وحدي.",
        "شعرت بي أماك. وشعرتُ بها تشعر بي.",
    ] },
    { title: "", image: "/images/point-zero/pz6-07.webp", paragraphs: [
        "وفجأةً، كنتُ في كلّ مكان.",
        "هنا، في الماء، في راحة يدَي الطفلين. وفي كلّ مكانٍ في آن: في أيدي النساء اللواتي يَدققن ويَشتُلن، على أجنحة الطيور التي تُعيد كلّ عامٍ الرحلة ذاتها، في حكمة الأشجار البطيئة، على سطح المنارة، في حياة كامارا الذي يحرس.",
        "هنا، وفي كلّ مكانٍ معًا. النجمة لا تموت. إنها تنتشر.",
    ] },
    { title: "", image: "/images/point-zero/pz6-08.webp", paragraphs: [
        "ولأنّي حيّة، نهض البلد من جديد.",
        "عاد قناع النساء، بعد قرونٍ خلف الزجاج. بكت المُسنّات. ولم يعُد يُنظَر إلى الجبل العظيم كغنيمةٍ لآخرين، بل كمستقبلٍ نبنيه بأنفسنا.",
        "وسيدوم ذلك. بعد هؤلاء الأطفال بكثير، بعد أطفالهم بكثير. ما دمنا نتذكّر.",
    ] },
    { title: "", image: "/images/point-zero/pz6-09.webp", paragraphs: [
        "فلم أمُت. ولم أصعد إلى السماء أيضًا.",
        "بقيتُ. أعيش بينكم: في الضوء الذي استعدناه، في ما نتقاسمه من ضفّةٍ إلى أخرى، في أن نعرف، أخيرًا، مَن نحن، في الاحترام المُعاد إلى الأرض وإلى كلّ ما يحيا.",
        "كاما، هي أنتم — حين تتذكّرون.",
    ] },
    { title: "", image: "/images/point-zero/pz6-10.webp", paragraphs: [
        "في الصباح، صعد الطفلان إلى الصخرة من جديد. انطفأت المنارة أمام الشمس.",
        "«لقد أتممتما الدورة»، قال كامارا.",
        "«لا»، قالت دجيني. «نحن نبدأ.»",
        "وفي قاع البحر، لم أعد وحدي. في العمق، لم أكن كذلك حقًّا قطّ.",
        "واصل البحر وضع أمواجه. لكنه كان يُغنّي، الآن.",
    ] },
    { title: "", image: "/images/point-zero/pz6-11.webp", paragraphs: [
        "أنا مَن يُنهي هذه الحكاية. دجيني.",
        "مرّت سنوات. ذلك اليوم، كنتُ بعيدة — مطار، بلدٌ أجنبيّ، طابور انتظار.",
        "سألني أحدهم: «من أين أنتِ؟»",
        "«من غينيا»، قلتُ.",
        "«غينيا؟ أيّ غينيا؟»",
        "رفعتُ عينيّ. وادعةً.",
        "«الأمّ. غينيا الأمّ. توأم بعضهنّ، وأخت الأخريات.»",
    ] },
    ],
  },

  zh: {
    lang: "zh", dir: "ltr", label: "中文",
    bookTitle: "零点 — 埋藏的心",
    sections: [
    { title: "", image: "/images/point-zero/pz6-01.webp", paragraphs: [
        "我是那颗心。不——如今，我是整个身体。",
        "很长一段时间，我只是水底的一块碎片。但有什么变了。我感到自己与我别的碎光相连，在世界的四个角落。它们手牵着手，在很远很远的地方，而我感觉得到。",
        "几乎完整。几乎活着。",
        "还缺一样东西。",
    ] },
    { title: "", image: "/images/point-zero/pz6-02.webp", paragraphs: [
        "一个夜晚，我感到他们来了。两个孩子，手里握着一枚红壳。卡萨的灯塔转着，像一百多年来一样。",
        "他们曾被派去周游世界，收集我的碎片。他们空着手回来了。",
        "空手——而我所缺的，恰恰正是他们。",
    ] },
    { title: "", image: "/images/point-zero/pz6-03.webp", paragraphs: [
        "卡马拉第一个迎接他们。他在岩石上等着他们，什么也没问：他们的眼睛已经够了。",
        "「我们一片碎光也没带回来，」吉妮说。",
        "「我知道，」年迈的守望者说。「那本不是目的。人不是去把一颗星聚拢。而是去连接它。」",
    ] },
    { title: "", image: "/images/point-zero/pz6-04.webp", paragraphs: [
        "然后他们走进了海里。在天与水相触之处。在我坠落之处。在零点。",
        "他们潜了下去。潜入黑暗，一直到海底。",
        "一直到我这里。",
        "他们触到了我。",
    ] },
    { title: "", image: "/images/point-zero/pz6-05.webp", paragraphs: [
        "于是我醒了。",
        "不是被重建——是被唤醒。电流重新流过我的碎片。还有热。像第一夜之前。像坠落之前。",
        "这么久以来第一次，我感到自己活着。",
    ] },
    { title: "", image: "/images/point-zero/pz6-06.webp", paragraphs: [
        "而在那上面，很远很远，在群星之间的黑暗里，我感到了阿玛克。",
        "我的孪生。我们在我坠落那夜断开的纽带——那条自亘古以来就破碎的纽带——重新亮了起来。",
        "我不再孤单。",
        "阿玛克感到了我。而我感到了她在感到我。",
    ] },
    { title: "", image: "/images/point-zero/pz6-07.webp", paragraphs: [
        "忽然，我无处不在。",
        "在这里，在水里，在孩子们的掌心。也同时在每一处：在舂米、插秧的女人们手中，在每年重走同一段旅程的鸟儿翅膀上，在树木缓慢的智慧里，在灯塔的顶上，在守望着的卡马拉的生命里。",
        "在这里，又同时在每一处。一颗星不会死。它弥散开来。",
    ] },
    { title: "", image: "/images/point-zero/pz6-08.webp", paragraphs: [
        "而因为我活着，这片土地重新站了起来。",
        "女人们的面具回家了，在玻璃柜后被关了几个世纪之后。年长的女人们哭了。人们望着那座大山，不再把它看作给别人的战利品，而是看作一个要靠自己建造的未来。",
        "而这会延续下去。远在这些孩子之后，远在他们的孩子之后。只要人们还记得。",
    ] },
    { title: "", image: "/images/point-zero/pz6-09.webp", paragraphs: [
        "所以我没有死。我也没有重新升回天空。",
        "我留了下来。我活在你们中间：活在重新寻回的光里，活在从一岸传到另一岸的分享里，活在终于知道自己是谁这件事里，活在归还给土地、归还给一切生灵的敬重里。",
        "卡玛，就是你们——当你们记得的时候。",
    ] },
    { title: "", image: "/images/point-zero/pz6-10.webp", paragraphs: [
        "早晨，孩子们重新爬上岩石。灯塔在太阳面前熄灭了。",
        "「你们走完了一整圈，」卡马拉说。",
        "「不，」吉妮说。「我们才刚开始。」",
        "而在海底，我不再孤单。其实，在最深处，我从来不曾真正孤单过。",
        "海继续铺展着它的波浪。但此刻，它在歌唱。",
    ] },
    { title: "", image: "/images/point-zero/pz6-11.webp", paragraphs: [
        "是我来结束这个故事。吉妮。",
        "许多年过去了。那一天，我在很远的地方——一座机场，一个异国，一条排队的长龙。",
        "有人问我：「你从哪儿来？」",
        "「从几内亚来，」我说。",
        "「几内亚？哪一个几内亚？」",
        "我抬起眼睛。平静。",
        "「母亲。几内亚母亲。是一些人的孪生，是另一些人的姐妹。」",
    ] },
    ],
  },
};
