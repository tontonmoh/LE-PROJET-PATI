// Série « LE POINT ZÉRO » — Tome 5 : « L'éclat changé en or »
// Pati, Passage (13-15 ans). Thème : lucidité, le poids de l'or, traite, terres jumelles, transmission.
// 13 doubles-pages. Héros : Djènè et Bangaly. Narrateur : le grain d'or.
// Lieu : la terre des eaux (Guyane jamais nommée) — jumelle du « château d'eau » guinéen.
// Plume « à la Barjavel ». L'or et la traite réservés à ce tome.
// FR + EN + AR + ZH. (AR/ZH : relecture locuteur natif recommandée avant production.)

import type { Lang } from "./series/taadidi";

type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };

export const POINT_ZERO_T5_ML: Partial<Record<Lang, RBook>> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français",
    bookTitle: "Le Point Zéro — L'éclat changé en or",
    sections: [
    { title: "", image: "/images/point-zero/pz5-01.webp", paragraphs: [
        "Je les ai sentis venir avant de les voir. Deux enfants, portés par une lumière qui n'était pas la mienne — celle d'Amak, là-haut, qui les tirait vers l'est.",
        "Ils n'étaient pas rentrés à Kassa depuis deux voyages. Avant de filer, Bangaly avait porté un coquillage à sa bouche.",
        "« Kamara. On ne rentre pas. Pas encore. Et ce sera long. »",
        "Loin, sur son rocher, le vieux gardien avait fait cligner le phare. Une fois. Il avait compris.",
        "« C'est plus grand qu'on croyait, avait dit Djènè dans le coquillage. Plus grand qu'une étoile à recoller. »",
    ] },
    { title: "", image: "/images/point-zero/pz5-02.webp", paragraphs: [
        "La graine s'est brisée. D'habitude, un champ. Cette fois : des planches noires, de l'eau jusqu'aux genoux, le jour très loin au-dessus d'un trou déchiré.",
        "Un bateau. Échoué là depuis des centaines d'années. La mer l'avait à moitié avalé. La rouille avait fait le reste.",
    ] },
    { title: "", image: "/images/point-zero/pz5-03.webp", paragraphs: [
        "Djènè a respiré, et s'est arrêtée net. Quelque chose dans l'odeur. Le sel, la rouille — et dessous, autre chose. Du sang. Du vieux sang marié à l'eau depuis si longtemps qu'il était entré dans le bois.",
        "Leurs sens avaient changé. À force de voyager, ils percevaient ce que les autres ne perçoivent plus.",
        "On ne traverse pas le monde sans en revenir autre.",
    ] },
    { title: "", image: "/images/point-zero/pz5-04.webp", paragraphs: [
        "Ils ont compris ensemble. Sans un mot.",
        "Ce bateau n'avait jamais porté d'or. Il avait porté des gens. Entassés dans le noir, de l'autre côté de la même eau qu'ils venaient de franchir.",
        "Celui-là s'était brisé sur les rochers. Des milliers d'autres étaient passés. Avec des fortunes diverses.",
        "Bangaly aurait voulu ne pas savoir. Trop tard : on ne décomprend pas. Avant, ils ramassaient des éclats. Maintenant, ils savaient pourquoi — et ça pesait plus lourd que l'or.",
    ] },
    { title: "", image: "/images/point-zero/pz5-05.webp", paragraphs: [
        "Ils ont grimpé hors de la coque, vers le jour, et sont sortis à l'air libre.",
        "Tout, là-haut, était vivant. Un champ de maïs, haut, vert, qui buvait l'eau par les racines. Des oiseaux. Le soleil sur la boue.",
        "Au bord du champ, une femme les attendait. Elle ne s'étonnait pas — comme si elle savait depuis toujours.",
        "« Bienvenue sur la terre des eaux », dit Awa.",
        "Djènè a regardé Bangaly. Pas besoin de mots.",
        "La terre des eaux. Le château d'eau. La même.",
    ] },
    { title: "", image: "/images/point-zero/pz5-06.webp", paragraphs: [
        "Awa les a menés dans la terre. Partout, l'eau : des rizières plates comme des miroirs, des femmes dedans qui repiquaient le riz, le même dos courbé qu'à la maison. Sous les palmes, on pilait ; une petite fille s'essayait à un pilon trop grand, ratait, recommençait — personne ne lui disait rien.",
        "« C'est chez nous », murmura Djènè.",
        "« C'est pareil », dit Awa.",
        "Moi, dans la boue, je n'étais qu'une paillette. Je me suis tu.",
    ] },
    { title: "", image: "/images/point-zero/pz5-07.webp", paragraphs: [
        "Au bord, une clôture. Un panneau dans une langue étrangère. Une drague qui mâchait le fleuve et crachait la boue, cherchant l'or.",
        "« Ça, dit Awa, c'est l'affaire des hommes qui tracent des lignes. Ils ont coupé cette terre en trois sur leurs cartes. L'eau, elle, ne sait pas lire. »",
        "Djènè regardait la machine. « Awa. Pourquoi Amak nous a-t-elle envoyés ici ? »",
        "Awa n'a pas répondu. Elle a levé le doigt vers le ciel.",
    ] },
    { title: "", image: "/images/point-zero/pz5-08.webp", paragraphs: [
        "Au loin, au-dessus des arbres, une tour blanche. Puis le tonnerre. Une colonne de feu est montée du sol — lente, énorme, droite vers le ciel.",
        "Une fusée.",
        "Ici, sur cette terre d'eau et de boue, les hommes envoyaient des machines vers les étoiles.",
        "Bangaly courait déjà. « Vite ! »",
    ] },
    { title: "", image: "/images/point-zero/pz5-09.webp", paragraphs: [
        "Comment ils sont montés ? Je ne saurais le dire. La graine, le feu, ma lumière. Ils se sont glissés dans le souffle de la fusée, et je les ai gardés.",
        "Le feu ne brûle pas ce qui est né du feu. Kama était une étoile ; j'étais sa lumière ; et eux tenaient ma lumière.",
        "La fusée a percé les nuages. Puis le bleu. Puis le noir.",
    ] },
    { title: "", image: "/images/point-zero/pz5-10.webp", paragraphs: [
        "De là-haut, la Terre n'avait plus de frontières. Plus de clôtures, plus de panneaux, plus de cartes. Juste de l'eau, des terres, des nuages.",
        "Alors je leur ai montré ce que les étoiles voient.",
        "J'ai fait reculer le temps. Les continents ont glissé, lentement, et se sont rejoints — emboîtés comme deux mains qui se retrouvent. Un seul bloc. Une seule terre.",
    ] },
    { title: "", image: "/images/point-zero/pz5-11.webp", paragraphs: [
        "Au creux de l'emboîtement, Djènè a reconnu deux pays qui n'en faisaient qu'un.",
        "« Le château d'eau, souffla-t-elle. Et la terre des eaux. »",
        "Collés. La même côte, la même eau. Séparés, depuis, par un océan qui n'était qu'une déchirure.",
        "Bangaly riait, les yeux pleins d'eau. « On n'a jamais été deux. »",
    ] },
    { title: "", image: "/images/point-zero/pz5-12.webp", paragraphs: [
        "Et Djènè comprit pourquoi Amak les avait envoyés.",
        "Sur cette rive, on avait appris à nourrir la terre et à toucher les étoiles. Le riz, et la fusée. L'autre rive pouvait l'apprendre aussi — ce qu'une moitié avait réussi, l'autre le pouvait.",
        "Il suffisait de se souvenir qu'elles étaient sœurs. De se passer ce qu'on sait, d'une main à l'autre, par-dessus la déchirure.",
        "« On rentre, dit Djènè. On rapporte quelque chose. Pas de l'or. »",
    ] },
    { title: "", image: "/images/point-zero/pz5-13.webp", paragraphs: [
        "La fusée est redescendue — ou peut-être ma lumière les a-t-elle reposés ; je ne sais plus. Ils étaient au bord du champ de maïs, et Awa souriait.",
        "La coque rouge, dans la main de Bangaly. Le sud les appelait. La maison.",
        "Là où, depuis le premier soir, le cœur de Kama attend qu'on vienne le lui dire : ton sacrifice comptait.",
    ] },
    ],
  },

  en: {
    lang: "en", dir: "ltr", label: "English",
    bookTitle: "Point Zero — The Shard Turned to Gold",
    sections: [
    { title: "", image: "/images/point-zero/pz5-01.webp", paragraphs: [
        "I felt them coming before I saw them. Two children, carried by a light that was not mine — Amak's, up there, pulling them eastward.",
        "They had not gone home to Kassa for two journeys now. Before darting off, Bangaly had raised a shell to his mouth.",
        "\"Kamara. We're not coming home. Not yet. And it will be long.\"",
        "Far away, on his rock, the old keeper had made the lighthouse blink. Once. He had understood.",
        "\"It's bigger than we thought,\" Djènè had said into the shell. \"Bigger than a star to piece back together.\"",
    ] },
    { title: "", image: "/images/point-zero/pz5-02.webp", paragraphs: [
        "The seed broke open. Usually, a field. This time: black planks, water up to our knees, the daylight far above through a torn hole.",
        "A ship. Run aground there for hundreds of years. The sea had half-swallowed it. The rust had done the rest.",
    ] },
    { title: "", image: "/images/point-zero/pz5-03.webp", paragraphs: [
        "Djènè breathed in, and stopped short. Something in the smell. The salt, the rust — and beneath, something else. Blood. Old blood wedded to the water for so long that it had entered the wood.",
        "Their senses had changed. From travelling so much, they perceived what others no longer perceive.",
        "One does not cross the world without coming back other.",
    ] },
    { title: "", image: "/images/point-zero/pz5-04.webp", paragraphs: [
        "They understood together. Without a word.",
        "This ship had never carried gold. It had carried people. Piled in the dark, on the other side of the same water they had just crossed.",
        "That one had broken on the rocks. Thousands of others had passed. With varying fortunes.",
        "Bangaly would have wished not to know. Too late: one cannot un-understand. Before, they gathered shards. Now, they knew why — and it weighed heavier than gold.",
    ] },
    { title: "", image: "/images/point-zero/pz5-05.webp", paragraphs: [
        "They climbed out of the hull, toward the daylight, and came out into the open air.",
        "Everything, up there, was alive. A field of maize, tall, green, drinking water through its roots. Birds. The sun on the mud.",
        "At the edge of the field, a woman was waiting for them. She showed no surprise — as if she had always known.",
        "\"Welcome to the land of waters,\" said Awa.",
        "Djènè looked at Bangaly. No need for words.",
        "The land of waters. The water tower. The same.",
    ] },
    { title: "", image: "/images/point-zero/pz5-06.webp", paragraphs: [
        "Awa led them into the land. Everywhere, water: rice paddies flat as mirrors, women in them transplanting the rice, the same bent back as at home. Under the palms, they pounded; a little girl was trying her hand at a pestle too big for her, missing, beginning again — no one said a word to her.",
        "\"It's home,\" murmured Djènè.",
        "\"It's the same,\" said Awa.",
        "And I, in the mud, was nothing but a fleck. I held my tongue.",
    ] },
    { title: "", image: "/images/point-zero/pz5-07.webp", paragraphs: [
        "At the edge, a fence. A sign in a foreign tongue. A dredger chewing the river and spitting out the mud, hunting for gold.",
        "\"That,\" said Awa, \"is the business of men who draw lines. They cut this land into three on their maps. The water, it cannot read.\"",
        "Djènè watched the machine. \"Awa. Why did Amak send us here?\"",
        "Awa did not answer. She raised her finger toward the sky.",
    ] },
    { title: "", image: "/images/point-zero/pz5-08.webp", paragraphs: [
        "Far off, above the trees, a white tower. Then thunder. A column of fire rose from the ground — slow, enormous, straight toward the sky.",
        "A rocket.",
        "Here, on this land of water and mud, men were sending machines toward the stars.",
        "Bangaly was already running. \"Quick!\"",
    ] },
    { title: "", image: "/images/point-zero/pz5-09.webp", paragraphs: [
        "How did they get up there? I could not say. The seed, the fire, my light. They slipped into the rocket's breath, and I kept them.",
        "Fire does not burn what is born of fire. Kama was a star; I was her light; and they held my light.",
        "The rocket pierced the clouds. Then the blue. Then the black.",
    ] },
    { title: "", image: "/images/point-zero/pz5-10.webp", paragraphs: [
        "From up there, the Earth had no more borders. No more fences, no more signs, no more maps. Just water, lands, clouds.",
        "So I showed them what the stars see.",
        "I made time run backward. The continents slid, slowly, and joined again — fitting together like two hands reunited. A single block. A single land.",
    ] },
    { title: "", image: "/images/point-zero/pz5-11.webp", paragraphs: [
        "In the hollow of the fitting, Djènè recognized two countries that were but one.",
        "\"The water tower,\" she breathed. \"And the land of waters.\"",
        "Joined. The same coast, the same water. Separated, since, by an ocean that was only a tear.",
        "Bangaly was laughing, his eyes full of water. \"We were never two.\"",
    ] },
    { title: "", image: "/images/point-zero/pz5-12.webp", paragraphs: [
        "And Djènè understood why Amak had sent them.",
        "On this shore, they had learned to feed the land and to touch the stars. The rice, and the rocket. The other shore could learn it too — what one half had achieved, the other could.",
        "It was enough to remember that they were sisters. To pass on what one knows, from one hand to the other, across the tear.",
        "\"We're going home,\" said Djènè. \"We're bringing back something. Not gold.\"",
    ] },
    { title: "", image: "/images/point-zero/pz5-13.webp", paragraphs: [
        "The rocket came back down — or perhaps my light set them down again; I no longer know. They were at the edge of the maize field, and Awa was smiling.",
        "The red shell, in Bangaly's hand. The south was calling them. Home.",
        "There where, since the very first evening, the heart of Kama waits for someone to come and tell it: your sacrifice mattered.",
    ] },
    ],
  },

  ar: {
    lang: "ar", dir: "rtl", label: "العربية",
    bookTitle: "النقطة صفر — الشظيّة التي صارت ذهبًا",
    sections: [
    { title: "", image: "/images/point-zero/pz5-01.webp", paragraphs: [
        "شعرتُ بهما قادمَين قبل أن أراهما. طفلان، يحملهما ضوءٌ ليس ضوئي — ضوء أماك، هناك في الأعلى، يجذبهما نحو الشرق.",
        "لم يكونا قد عادا إلى كاسا منذ رحلتين. قبل أن ينطلق، رفع بانغالي صَدَفةً إلى فمه.",
        "«كامارا. لن نعود. ليس بعد. وسيطول الأمر.»",
        "بعيدًا، على صخرته، جعل الحارس العجوز المنارة تومض. مرّةً واحدة. كان قد فهم.",
        "«إنه أكبر ممّا ظننّا، قالت دجيني في الصَّدَفة. أكبر من نجمةٍ نُعيد لملمتها.»",
    ] },
    { title: "", image: "/images/point-zero/pz5-02.webp", paragraphs: [
        "انكسرت البذرة. عادةً، حقل. هذه المرّة: ألواحٌ سوداء، ماءٌ حتى الرُّكبتين، والنهار بعيدٌ جدًّا فوق فتحةٍ ممزّقة.",
        "سفينة. جانحةٌ هناك منذ مئات السنين. ابتلعها البحر نصفًا. وأتمّ الصدأ الباقي.",
    ] },
    { title: "", image: "/images/point-zero/pz5-03.webp", paragraphs: [
        "تنفّست دجيني، وتوقّفت فجأةً. شيءٌ في الرائحة. الملح، الصدأ — وتحتهما، شيءٌ آخر. دم. دمٌ عتيقٌ تزوّج الماء منذ زمنٍ طويل حتى دخل في الخشب.",
        "تغيّرت حواسّهما. من كثرة السفر، صارا يُدركان ما لم يعد يُدركه الآخرون.",
        "لا يعبر المرء العالم دون أن يعود منه شخصًا آخر.",
    ] },
    { title: "", image: "/images/point-zero/pz5-04.webp", paragraphs: [
        "فهِما معًا. دون كلمة.",
        "هذه السفينة لم تحمل ذهبًا قطّ. حملت بشرًا. مكدّسين في العتمة، على الجانب الآخر من الماء ذاته الذي عبراه للتوّ.",
        "تلك تحطّمت على الصخور. آلافٌ غيرها مرّت. بحظوظٍ متفاوتة.",
        "كان بانغالي يودّ لو لم يعرف. فات الأوان: لا يُمكن إلغاء الفهم. من قبل، كانا يلتقطان شظايا. الآن، عرفا لماذا — وكان ذلك أثقل من الذهب.",
    ] },
    { title: "", image: "/images/point-zero/pz5-05.webp", paragraphs: [
        "تسلّقا خارج بدن السفينة، نحو النهار، وخرجا إلى الهواء الطلق.",
        "كان كلّ شيءٍ هناك في الأعلى حيًّا. حقل ذرة، عالٍ، أخضر، يشرب الماء بجذوره. طيور. الشمس على الطين.",
        "عند حافة الحقل، كانت امرأةٌ تنتظرهما. لم تتعجّب — كأنها تعرف منذ الأزل.",
        "«أهلًا بكما في أرض المياه»، قالت آوا.",
        "نظرت دجيني إلى بانغالي. لا حاجة إلى كلمات.",
        "أرض المياه. خزّان الماء. الأرض ذاتها.",
    ] },
    { title: "", image: "/images/point-zero/pz5-06.webp", paragraphs: [
        "قادتهما آوا إلى داخل الأرض. في كلّ مكان، الماء: حقول أرزٍّ مسطّحة كالمرايا، نساءٌ فيها يَشتُلن الأرزّ، الظهر المنحني ذاته كما في الديار. تحت سعف النخيل، كان يُدَقّ؛ طفلةٌ صغيرة تحاول مع مِدَقّةٍ أكبر منها، تُخطئ، تُعيد — لا أحد يقول لها شيئًا.",
        "«هذه ديارنا»، همست دجيني.",
        "«إنها الشيء ذاته»، قالت آوا.",
        "أمّا أنا، في الطين، فلم أكن سوى ذرّةٍ لامعة. صمتُّ.",
    ] },
    { title: "", image: "/images/point-zero/pz5-07.webp", paragraphs: [
        "عند الحافة، سياج. لافتةٌ بلغةٍ أجنبيّة. جرّافةٌ تمضغ النهر وتبصق الطين، تبحث عن الذهب.",
        "«هذا، قالت آوا، شأن الرجال الذين يرسمون الخطوط. قطّعوا هذه الأرض ثلاثًا على خرائطهم. أمّا الماء، فلا يعرف القراءة.»",
        "نظرت دجيني إلى الآلة. «آوا. لماذا أرسلتنا أماك إلى هنا؟»",
        "لم تُجب آوا. رفعت إصبعها نحو السماء.",
    ] },
    { title: "", image: "/images/point-zero/pz5-08.webp", paragraphs: [
        "بعيدًا، فوق الأشجار، برجٌ أبيض. ثم الرعد. ارتفع عمودٌ من نار من الأرض — بطيئًا، هائلًا، مستقيمًا نحو السماء.",
        "صاروخ.",
        "هنا، على هذه الأرض من ماءٍ وطين، كان الناس يُرسلون آلاتٍ نحو النجوم.",
        "كان بانغالي يركض سلفًا. «بسرعة!»",
    ] },
    { title: "", image: "/images/point-zero/pz5-09.webp", paragraphs: [
        "كيف صعدا؟ لا أستطيع القول. البذرة، النار، ضوئي. تسلّلا في زفير الصاروخ، وحفظتهما.",
        "النار لا تحرق ما وُلِد من نار. كانت كاما نجمة؛ وكنتُ أنا ضوءها؛ وهما كانا يحملان ضوئي.",
        "اخترق الصاروخ الغيوم. ثم الزُّرقة. ثم السواد.",
    ] },
    { title: "", image: "/images/point-zero/pz5-10.webp", paragraphs: [
        "من هناك في الأعلى، لم يعد للأرض حدود. لا أسيجة، لا لافتات، لا خرائط. مجرّد ماءٍ، وأراضٍ، وغيوم.",
        "فأريتُهما ما تراه النجوم.",
        "أرجعتُ الزمن إلى الوراء. انزلقت القارّات، ببطء، والتأمت — متراصّةً كيدين تلتقيان من جديد. كتلةٌ واحدة. أرضٌ واحدة.",
    ] },
    { title: "", image: "/images/point-zero/pz5-11.webp", paragraphs: [
        "في تجويف التراصّ، تعرّفت دجيني على بلدين كانا واحدًا.",
        "«خزّان الماء، همست. وأرض المياه.»",
        "ملتصقان. الساحل ذاته، الماء ذاته. فرّق بينهما، منذ ذلك الحين، محيطٌ لم يكن سوى شَقّ.",
        "كان بانغالي يضحك، وعيناه ملأى بالماء. «لم نكن اثنين قطّ.»",
    ] },
    { title: "", image: "/images/point-zero/pz5-12.webp", paragraphs: [
        "وفهِمت دجيني لماذا أرسلتهما أماك.",
        "على هذه الضفّة، تعلّموا أن يُطعموا الأرض وأن يلمسوا النجوم. الأرزّ، والصاروخ. والضفّة الأخرى تستطيع تعلّمه أيضًا — ما نجح فيه نصف، يستطيعه النصف الآخر.",
        "يكفي أن نتذكّر أنهما أختان. أن نُمرّر ما نعرفه، من يدٍ إلى يد، فوق الشَّقّ.",
        "«نعود، قالت دجيني. نُحضِر معنا شيئًا. لا ذهبًا.»",
    ] },
    { title: "", image: "/images/point-zero/pz5-13.webp", paragraphs: [
        "هبط الصاروخ — أو لعلّ ضوئي أنزلهما من جديد؛ لم أعد أدري. كانا عند حافة حقل الذرة، وآوا تبتسم.",
        "الصَّدَفة الحمراء، في يد بانغالي. كان الجنوب يناديهما. الديار.",
        "هناك حيث، منذ المساء الأوّل، ينتظر قلب كاما أن يأتي أحدٌ ليقول له: تضحيتك كانت لها قيمة.",
    ] },
    ],
  },

  zh: {
    lang: "zh", dir: "ltr", label: "中文",
    bookTitle: "零点 — 化作黄金的碎光",
    sections: [
    { title: "", image: "/images/point-zero/pz5-01.webp", paragraphs: [
        "我在看见他们之前，就感到他们来了。两个孩子，被一道不属于我的光托着——是阿玛克的光，在那上面，把他们朝东方牵引。",
        "他们已经两趟旅程没回卡萨了。出发前，班加利把一枚贝壳举到嘴边。",
        "「卡马拉。我们不回来。还不回。而且会很久。」",
        "远处，在他的岩石上，年迈的守望者让灯塔闪了一下。一下。他懂了。",
        "「这比我们以为的更大，」吉妮对着贝壳说。「比一颗要拼回去的星更大。」",
    ] },
    { title: "", image: "/images/point-zero/pz5-02.webp", paragraphs: [
        "种子裂开了。平常，是一片田。这一次：黑色的船板，齐膝的水，日光在一个撕裂的洞口上方很远很远的地方。",
        "一艘船。在那里搁浅了几百年。海把它吞掉了一半。锈做了剩下的事。",
    ] },
    { title: "", image: "/images/point-zero/pz5-03.webp", paragraphs: [
        "吉妮吸了口气，猛地停住。那气味里有什么。盐、锈——还有下面，别的东西。血。陈年的血，与水交融了太久太久，已经渗进了木头。",
        "他们的感官变了。旅行得多了，他们感知到别人再也感知不到的东西。",
        "人穿越世界，回来时不会还是原来的自己。",
    ] },
    { title: "", image: "/images/point-zero/pz5-04.webp", paragraphs: [
        "他们一起明白了。一句话也没说。",
        "这艘船从未运过黄金。它运的是人。挤在黑暗里，在他们刚刚渡过的同一片水的另一边。",
        "这一艘在礁石上撞碎了。成千上万艘别的，过去了。命运各不相同。",
        "班加利但愿自己不知道。太迟了：人没法把懂了的东西重新变成不懂。从前，他们拾捡碎光。如今，他们知道了为什么——而这，比黄金更重。",
    ] },
    { title: "", image: "/images/point-zero/pz5-05.webp", paragraphs: [
        "他们从船舱里爬出来，朝着日光，来到了露天之下。",
        "那上面，一切都活着。一片玉米地，高高的，绿绿的，用根须喝着水。鸟。泥地上的阳光。",
        "田边，一个女人在等他们。她毫不惊讶——仿佛她一直都知道。",
        "「欢迎来到水之地，」阿娃说。",
        "吉妮看了看班加利。无需言语。",
        "水之地。水塔之国。同一个。",
    ] },
    { title: "", image: "/images/point-zero/pz5-06.webp", paragraphs: [
        "阿娃领他们走进这片土地。到处是水：平得像镜子的稻田，女人们在田里插秧，和家乡一样弯着的背。棕榈叶下，有人在舂米；一个小女孩试着用一根对她来说太大的杵，舂歪了，又重来——没人说她一句。",
        "「这是我们的家，」吉妮喃喃道。",
        "「是一样的，」阿娃说。",
        "而我，在泥里，不过是一片金屑。我沉默了。",
    ] },
    { title: "", image: "/images/point-zero/pz5-07.webp", paragraphs: [
        "在边上，一道围栏。一块用外国文字写的牌子。一台挖泥机啃着河，吐着泥，搜寻着黄金。",
        "「那个，阿娃说，是那些画线的人的勾当。他们在地图上把这片土地切成了三块。可水，它不识字。」",
        "吉妮望着那台机器。「阿娃。阿玛克为什么把我们送来这里？」",
        "阿娃没有回答。她抬起手指，指向天空。",
    ] },
    { title: "", image: "/images/point-zero/pz5-08.webp", paragraphs: [
        "远处，树木上方，一座白色的塔。然后是雷鸣。一根火柱从地面升起——缓慢，巨大，笔直地朝向天空。",
        "一枚火箭。",
        "在这里，在这片水与泥的土地上，人们正把机器送向星辰。",
        "班加利已经跑了起来。「快！」",
    ] },
    { title: "", image: "/images/point-zero/pz5-09.webp", paragraphs: [
        "他们是怎么上去的？我说不清。种子、火、我的光。他们溜进了火箭的气流里，而我护住了他们。",
        "火不会烧灼那从火中诞生之物。卡玛曾是一颗星；我曾是她的光；而他们，握着我的光。",
        "火箭穿透了云。然后是蓝。然后是黑。",
    ] },
    { title: "", image: "/images/point-zero/pz5-10.webp", paragraphs: [
        "从那上面，地球再没有边界。没有围栏，没有牌子，没有地图。只有水、陆地、云。",
        "于是我让他们看见星辰所见。",
        "我让时间倒流。大陆缓缓滑动，重新合到一起——像两只重逢的手那样嵌合。一整块。一片土地。",
    ] },
    { title: "", image: "/images/point-zero/pz5-11.webp", paragraphs: [
        "在那嵌合的凹处，吉妮认出了两个本是一体的国家。",
        "「水塔之国，」她轻声说。「还有水之地。」",
        "紧贴着。同一道海岸，同一片水。从那以后，被一片不过是一道裂口的海洋分开。",
        "班加利笑着，眼里满是水。「我们从来就不是两个。」",
    ] },
    { title: "", image: "/images/point-zero/pz5-12.webp", paragraphs: [
        "于是吉妮明白了阿玛克为什么把他们送来。",
        "在这一岸，人们学会了滋养土地，也学会了触摸星辰。稻米，和火箭。另一岸也能学会——一半做到了的，另一半也能做到。",
        "只要记得，她们是姐妹。把所知的，从一只手传到另一只手，越过那道裂口。",
        "「我们回家，」吉妮说。「我们带回一样东西。不是黄金。」",
    ] },
    { title: "", image: "/images/point-zero/pz5-13.webp", paragraphs: [
        "火箭降了下来——又或许是我的光把他们重新放下；我也记不清了。他们站在玉米地边，阿娃微笑着。",
        "那枚红壳，在班加利手里。南方在召唤他们。家。",
        "在那里，从最初的那一夜起，卡玛的心一直等着有人来对它说：你的牺牲，是有意义的。",
    ] },
    ],
  },
};
