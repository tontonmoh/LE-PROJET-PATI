// Livre « Les sept kilomètres » — Collection Pati Passage (13–15 ans).
// Macenta, Guinée forestière. Vévé, 14 ans, raconte pourquoi les femmes
// du village continuent de marcher 7 km jusqu'au marigot alors qu'une ONG a installé un puits
// tout près. Marie, la responsable de l'ONG, vient vérifier — et découvre que le marigot
// n'était pas qu'une source d'eau : c'était l'heure de liberté des femmes. Récit sur l'écoute,
// l'autonomie, et le développement qui décide « pour » sans demander « à ».
// Texte illustré, 15 doubles-pages. FR ; EN/AR/ZH à venir.
// Narrateur : Vévé (14 ans) ; sa mère se nomme Ogou. Vévé OUVRE et FERME le récit mais ne va PAS
//    au marigot (un garçon ne peut y assister — pudeur) ; c'est MARIE qu'on suit au marigot.

import type { Lang } from "./series/taadidi";

type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };

export const SEPT_KM_ML: Partial<Record<Lang, RBook>> = {
  fr: {
    lang: "fr",
    dir: "ltr",
    label: "Français",
    bookTitle: "Les sept kilomètres",
    sections: [
    { title: "1 — Ouverture", image: "/images/sept-kilometres/7km-01.webp", paragraphs: [
        "À peine rentrée du marché, ma mère se met à cuisiner.",
        "On voit sa maîtrise à la vitesse de ses mains. Elle coupe, elle épluche, elle prépare la sauce. C'est vite fini. Dehors, ses amies l'attendent. La corvée de l'eau les attend.",
        "Mon nom, c'est Vévé. J'ai quatorze ans. Et il y a une chose que je n'ai jamais comprise.",
    ] },
    { title: "2 — L'énigme", image: "/images/sept-kilometres/7km-02.webp", paragraphs: [
        "Chaque fin d'après-midi, les femmes du village partent au marigot. Sept kilomètres, aller-retour. Pour ramener l'eau.",
        "Mais le puits est juste là. À deux pas. L'ONG l'a installé il y a trois mois — avec une grande fête, le préfet, le maire, la fanfare.",
        "De l'eau propre, tout près. Et personne n'en veut.",
        "Pourquoi ?",
    ] },
    { title: "3 — Le panier", image: "/images/sept-kilometres/7km-03.webp", paragraphs: [
        "Le panier de ma mère n'est plus le même qu'au matin. Le matin, il était plein de ses aubergines à vendre. Le soir, il revient plein du poisson, de l'huile, du sel pour la sauce.",
        "On vend pour acheter. Le panier ne se vide jamais. L'argent non plus ne reste jamais.",
    ] },
    { title: "4 — Le départ", image: "/images/sept-kilometres/7km-04.webp", paragraphs: [
        "— Je vais au marigot, me dit ma mère. Il y a à manger dans le pot pour ton petit frère.",
        "— Pourquoi pas l'eau du puits ? Il est juste là.",
        "Elle sourit, comme si j'avais dit une bêtise.",
        "— Le puits, c'est pas pour après la journée. Après la journée, c'est le marigot.",
        "Aminata l'appelle depuis la cour. Elles partent en riant. Un rire qui a un sens pour elles, et aucun pour moi.",
    ] },
    { title: "5 — Marie", image: "/images/sept-kilometres/7km-05.webp", paragraphs: [
        "Elle s'appelle Marie. Elle vient de loin. C'est elle qui a fait venir le puits.",
        "Trois mois après, elle revient vérifier. Elle a des papiers, des chiffres, des questions.",
        "Partout, on lui dit oui. « Oui, madame, on utilise le puits. » Mais le puits reste vide l'après-midi, et les femmes marchent toujours.",
        "Marie ne comprend pas. Ça l'agace.",
    ] },
    { title: "6 — Les réponses", image: "/images/sept-kilometres/7km-06.webp", paragraphs: [
        "Au puits, elle interroge les femmes.",
        "— Pourquoi le marigot, si loin ?",
        "— L'eau y est plus fraîche, madame.",
        "— C'est une eau vivante, pas stagnante.",
        "— Le puits, c'est mort. Le marigot, c'est vivant.",
        "Des réponses qui ne tiennent pas debout. Marie le sait. Mais elle sent que la vraie raison se cache derrière.",
    ] },
    { title: "7 — L'invitation", image: "/images/sept-kilometres/7km-07.webp", paragraphs: [
        "C'est Aminata qui finit par le dire.",
        "— Madame, si vous voulez comprendre, venez avec nous.",
        "Marie accepte. Elle croit qu'elle va régler un problème d'eau.",
        "Elle se trompe.",
    ] },
    { title: "8 — La marche", image: "/images/sept-kilometres/7km-08.webp", paragraphs: [
        "Elles partent ensemble. Marie, ses chaussures de marche aux pieds, son sac sur le dos.",
        "Sous les palmiers, les femmes se mettent à chanter. Marie écoute. Elle essaie de suivre — elle n'y arrive pas.",
        "À mesure qu'elles s'éloignent du village, quelque chose change en elles. Le poids de la journée tombe, pas à pas.",
    ] },
    { title: "9 — Le marigot", image: "/images/sept-kilometres/7km-09.webp", paragraphs: [
        "Au marigot, les femmes posent leurs charges. Elles s'assoient. Elles parlent fort, elles se moquent, elles rient — ce rire qui vient du ventre.",
        "Marie reste à l'écart. Elle regarde. Elle attend.",
        "Et lentement, elle commence à voir.",
    ] },
    { title: "10 — Ce que Marie comprend", image: "/images/sept-kilometres/7km-10.webp", paragraphs: [
        "Ici, loin du village, les femmes ne sont plus des servantes, des vendeuses, des mères pressées.",
        "Ici, elles décident. Elles disent ce qu'elles veulent. Elles sont libres.",
        "Aminata se tourne vers Marie.",
        "— Vous voyez, madame ? C'est ça, le marigot. C'est pas l'eau.",
    ] },
    { title: "11 — La parole d'Ogou", image: "/images/sept-kilometres/7km-11.webp", paragraphs: [
        "Ma mère s'assoit près de Marie.",
        "— Avant le puits, on avait une heure. Une seule. Après le marché, après la cuisine, après les enfants. Une heure à nous. Ici.",
        "— Le puits nous l'a enlevée.",
        "— Mais l'eau du puits est plus propre, dit Marie.",
        "— Oui. C'est pour ça que c'est injuste. Tu as raison pour l'eau. Mais tu as tort pour nous.",
    ] },
    { title: "12 — L'injustice", image: "/images/sept-kilometres/7km-12.webp", paragraphs: [
        "— Avec le puits, on remplit, on rentre. C'est tout. On n'a plus rien à nous.",
        "— Mais vous pouvez venir au marigot quand même, dit Marie.",
        "— Non. Si on a le puits, on doit l'utiliser. Sinon, on est des têtues qui refusent le progrès.",
        "Ma mère regarde Marie, sans colère.",
        "— Vous décidez une bonne chose pour nous. Sans nous demander. Une bonne intention, ça ne suffit pas.",
        "Et Marie comprend qu'elle s'était trompée. Pas sur l'eau. Sur nous.",
    ] },
    { title: "13 — Le retour", image: "/images/sept-kilometres/7km-13.webp", paragraphs: [
        "Au village, Marie regarde le puits blanc qui brille dans le soir.",
        "— Qu'est-ce qu'on fait ?",
        "Ma mère hausse les épaules.",
        "— Le puits restera là. Et nous, on continuera au marigot.",
        "Puis elle dit la phrase que je n'oublierai jamais :",
        "— Une décision qu'on prend pour quelqu'un, sans le lui demander, c'est rarement une aide. C'est souvent une injustice.",
    ] },
    { title: "14 — La lettre", image: "/images/sept-kilometres/7km-14.webp", paragraphs: [
        "Marie est repartie le lendemain.",
        "Une semaine plus tard, une lettre arrive de la capitale.",
        "« Merci de m'avoir montré ce que je n'avais pas vu. Je vais changer ma façon de travailler. Les bonnes intentions ne suffisent pas. Il faut écouter. »",
        "Ma mère la lit, la montre aux autres. Elles sourient.",
        "— Au moins, elle a compris.",
    ] },
    { title: "15 — Ce que j'ai compris", image: "/images/sept-kilometres/7km-15.webp", paragraphs: [
        "Le puits brille toujours. Personne ne le prend. L'eau qu'il contient est la meilleure du village — et elle n'appartient à personne.",
        "Moi, j'ai changé. Maintenant, quand mon père dit « c'est comme ça », je me demande : qui a décidé ? Est-ce qu'on m'a demandé ?",
        "Les femmes qui m'ont élevé ne sont pas des ignorantes qu'on doit sauver. Ce sont des femmes qui savent. Qui décident. Qui refusent.",
        "Et refuser, ce n'est pas être en retard. Refuser, c'est un pouvoir.",
    ] },
    ],
  },

  en: {
    lang: "en", dir: "ltr", label: "English",
    bookTitle: "The Seven Kilometres",
    sections: [
    { title: "1 — Opening", image: "/images/sept-kilometres/7km-01.webp", paragraphs: [
        "Barely home from the market, my mother starts cooking.",
        "You can see her mastery in the speed of her hands. She cuts, she peels, she prepares the sauce. It is quickly done. Outside, her friends are waiting for her. The water chore awaits them.",
        "My name is Vévé. I am fourteen. And there is one thing I have never understood.",
    ] },
    { title: "2 — The Riddle", image: "/images/sept-kilometres/7km-02.webp", paragraphs: [
        "Every late afternoon, the women of the village set off for the marsh. Seven kilometres, there and back. To bring back the water.",
        "But the well is right there. A stone's throw away. The NGO installed it three months ago — with a great celebration, the prefect, the mayor, the brass band.",
        "Clean water, close by. And no one wants it.",
        "Why?",
    ] },
    { title: "3 — The Basket", image: "/images/sept-kilometres/7km-03.webp", paragraphs: [
        "My mother's basket is no longer the same as in the morning. In the morning, it was full of her aubergines to sell. In the evening, it comes back full of fish, oil, salt for the sauce.",
        "We sell to buy. The basket never empties. Nor does the money ever stay.",
    ] },
    { title: "4 — The Departure", image: "/images/sept-kilometres/7km-04.webp", paragraphs: [
        "— I'm going to the marsh, my mother tells me. There's food in the pot for your little brother.",
        "— Why not the well water? It's right there.",
        "She smiles, as if I had said something foolish.",
        "— The well is not for after the day. After the day, it's the marsh.",
        "Aminata calls her from the courtyard. They set off laughing. A laughter that means something to them, and nothing to me.",
    ] },
    { title: "5 — Marie", image: "/images/sept-kilometres/7km-05.webp", paragraphs: [
        "Her name is Marie. She comes from far away. It is she who had the well brought.",
        "Three months later, she comes back to check. She has papers, figures, questions.",
        "Everywhere, they tell her yes. \"Yes, madam, we use the well.\" But the well stays empty in the afternoon, and the women still walk.",
        "Marie does not understand. It vexes her.",
    ] },
    { title: "6 — The Answers", image: "/images/sept-kilometres/7km-06.webp", paragraphs: [
        "At the well, she questions the women.",
        "— Why the marsh, so far away?",
        "— The water there is fresher, madam.",
        "— It's living water, not stagnant.",
        "— The well is dead. The marsh is alive.",
        "Answers that do not hold up. Marie knows it. But she senses that the real reason hides behind them.",
    ] },
    { title: "7 — The Invitation", image: "/images/sept-kilometres/7km-07.webp", paragraphs: [
        "It is Aminata who finally says it.",
        "— Madam, if you want to understand, come with us.",
        "Marie accepts. She thinks she is going to solve a water problem.",
        "She is mistaken.",
    ] },
    { title: "8 — The Walk", image: "/images/sept-kilometres/7km-08.webp", paragraphs: [
        "They set off together. Marie, her walking shoes on her feet, her bag on her back.",
        "Under the palm trees, the women begin to sing. Marie listens. She tries to follow — she cannot.",
        "As they move away from the village, something changes in them. The weight of the day falls away, step by step.",
    ] },
    { title: "9 — The Marsh", image: "/images/sept-kilometres/7km-09.webp", paragraphs: [
        "At the marsh, the women set down their loads. They sit. They talk loudly, they tease, they laugh — that laughter that comes from the belly.",
        "Marie stays apart. She watches. She waits.",
        "And slowly, she begins to see.",
    ] },
    { title: "10 — What Marie Understands", image: "/images/sept-kilometres/7km-10.webp", paragraphs: [
        "Here, far from the village, the women are no longer servants, sellers, hurried mothers.",
        "Here, they decide. They say what they want. They are free.",
        "Aminata turns to Marie.",
        "— You see, madam? That is the marsh. It is not the water.",
    ] },
    { title: "11 — The Words of Ogou", image: "/images/sept-kilometres/7km-11.webp", paragraphs: [
        "My mother sits down near Marie.",
        "— Before the well, we had one hour. Just one. After the market, after the cooking, after the children. One hour for us. Here.",
        "— The well took it from us.",
        "— But the well water is cleaner, says Marie.",
        "— Yes. That's why it's unjust. You are right about the water. But you are wrong about us.",
    ] },
    { title: "12 — The Injustice", image: "/images/sept-kilometres/7km-12.webp", paragraphs: [
        "— With the well, we fill, we go home. That's all. We no longer have anything of our own.",
        "— But you can still come to the marsh, says Marie.",
        "— No. If we have the well, we must use it. Otherwise, we are stubborn women who refuse progress.",
        "My mother looks at Marie, without anger.",
        "— You decide a good thing for us. Without asking us. A good intention is not enough.",
        "And Marie understands that she had been mistaken. Not about the water. About us.",
    ] },
    { title: "13 — The Return", image: "/images/sept-kilometres/7km-13.webp", paragraphs: [
        "In the village, Marie looks at the white well that shines in the evening.",
        "— What do we do?",
        "My mother shrugs.",
        "— The well will stay there. And we, we'll go on to the marsh.",
        "Then she says the sentence I will never forget:",
        "— A decision we make for someone, without asking them, is rarely a help. It is often an injustice.",
    ] },
    { title: "14 — The Letter", image: "/images/sept-kilometres/7km-14.webp", paragraphs: [
        "Marie left the next day.",
        "A week later, a letter arrives from the capital.",
        "\"Thank you for showing me what I had not seen. I am going to change the way I work. Good intentions are not enough. One must listen.\"",
        "My mother reads it, shows it to the others. They smile.",
        "— At least, she understood.",
    ] },
    { title: "15 — What I Understood", image: "/images/sept-kilometres/7km-15.webp", paragraphs: [
        "The well still shines. No one takes from it. The water it holds is the best in the village — and it belongs to no one.",
        "As for me, I have changed. Now, when my father says \"that's how it is,\" I ask myself: who decided? Was I asked?",
        "The women who raised me are not ignorant women to be saved. They are women who know. Who decide. Who refuse.",
        "And to refuse is not to be backward. To refuse is a power.",
    ] },
    ],
  },

  ar: {
    lang: "ar", dir: "rtl", label: "العربية",
    bookTitle: "الكيلومترات السبعة",
    sections: [
    { title: "1 — افتتاحيّة", image: "/images/sept-kilometres/7km-01.webp", paragraphs: [
        "ما إن تعود أمّي من السوق حتى تشرع في الطبخ.",
        "تُرى براعتها في سرعة يديها. تقطّع، تقشّر، تُعدّ الصلصة. ينتهي الأمر سريعًا. في الخارج، صديقاتها ينتظرنها. مهمّة الماء تنتظرهنّ.",
        "اسمي فيفي. عمري أربع عشرة سنة. وثمّة أمرٌ لم أفهمه قطّ.",
    ] },
    { title: "2 — اللغز", image: "/images/sept-kilometres/7km-02.webp", paragraphs: [
        "كلّ آخر نهار، تنطلق نساء القرية إلى المستنقع. سبعة كيلومترات، ذهابًا وإيابًا. ليُحضِرن الماء.",
        "لكنّ البئر هنا تمامًا. على بُعد خطوتين. ركّبتها المنظّمة غير الحكوميّة قبل ثلاثة أشهر — باحتفالٍ كبير، الوالي، العمدة، الفرقة الموسيقيّة.",
        "ماءٌ نظيف، قريبٌ جدًّا. ولا أحد يريده.",
        "لماذا؟",
    ] },
    { title: "3 — السلّة", image: "/images/sept-kilometres/7km-03.webp", paragraphs: [
        "سلّة أمّي لم تعد كما كانت في الصباح. في الصباح، كانت مليئةً بباذنجانها للبيع. في المساء، تعود مليئةً بالسمك، والزيت، والملح للصلصة.",
        "نبيع لنشتري. السلّة لا تفرغ أبدًا. والمال أيضًا لا يبقى أبدًا.",
    ] },
    { title: "4 — الرحيل", image: "/images/sept-kilometres/7km-04.webp", paragraphs: [
        "— أذهب إلى المستنقع، تقول لي أمّي. هناك طعامٌ في القِدر لأخيك الصغير.",
        "— لماذا لا ماء البئر؟ إنه هنا تمامًا.",
        "تبتسم، كأنّي قلتُ حماقة.",
        "— البئر ليست لما بعد النهار. ما بعد النهار، هو المستنقع.",
        "تناديها أميناتا من الفناء. تنطلقان ضاحكتين. ضحكٌ له معنًى عندهنّ، ولا معنى لي.",
    ] },
    { title: "5 — ماري", image: "/images/sept-kilometres/7km-05.webp", paragraphs: [
        "اسمها ماري. تأتي من بعيد. هي من جلبت البئر.",
        "بعد ثلاثة أشهر، تعود لتتحقّق. معها أوراق، أرقام، أسئلة.",
        "في كلّ مكان، يقولون لها نعم. «نعم، سيّدتي، نستخدم البئر.» لكنّ البئر تبقى فارغةً بعد الظهر، والنساء ما زلن يمشين.",
        "ماري لا تفهم. هذا يُزعجها.",
    ] },
    { title: "6 — الأجوبة", image: "/images/sept-kilometres/7km-06.webp", paragraphs: [
        "عند البئر، تستجوب النساء.",
        "— لماذا المستنقع، البعيد هكذا؟",
        "— الماء هناك أكثر برودة، سيّدتي.",
        "— إنه ماءٌ حيّ، لا راكد.",
        "— البئر ميّتة. المستنقع حيّ.",
        "أجوبةٌ لا تستقيم. ماري تعرف ذلك. لكنها تشعر أنّ السبب الحقيقيّ يختبئ خلفها.",
    ] },
    { title: "7 — الدعوة", image: "/images/sept-kilometres/7km-07.webp", paragraphs: [
        "أميناتا هي من تقولها أخيرًا.",
        "— سيّدتي، إن أردتِ أن تفهمي، تعالي معنا.",
        "تقبل ماري. تظنّ أنها ستحلّ مشكلة ماء.",
        "إنها مخطئة.",
    ] },
    { title: "8 — المسير", image: "/images/sept-kilometres/7km-08.webp", paragraphs: [
        "ينطلقن معًا. ماري، حذاء المشي في قدميها، حقيبتها على ظهرها.",
        "تحت النخيل، تبدأ النساء بالغناء. تُصغي ماري. تحاول أن تجاري — لا تستطيع.",
        "كلّما ابتعدن عن القرية، تغيّر فيهنّ شيء. يتساقط ثقل النهار، خطوةً خطوة.",
    ] },
    { title: "9 — المستنقع", image: "/images/sept-kilometres/7km-09.webp", paragraphs: [
        "عند المستنقع، تضع النساء أحمالهنّ. يجلسن. يتكلّمن بصوتٍ عالٍ، يتمازحن، يضحكن — ذلك الضحك الآتي من الأعماق.",
        "تبقى ماري على حِدة. تنظر. تنتظر.",
        "وببطء، تبدأ ترى.",
    ] },
    { title: "10 — ما تفهمه ماري", image: "/images/sept-kilometres/7km-10.webp", paragraphs: [
        "هنا، بعيدًا عن القرية، لم تعد النساء خادمات، ولا بائعات، ولا أمّهاتٍ مستعجلات.",
        "هنا، يقرّرن. يقُلن ما يُرِدن. هنّ حرّات.",
        "تلتفت أميناتا إلى ماري.",
        "— أترين، سيّدتي؟ هذا هو المستنقع. ليس الماء.",
    ] },
    { title: "11 — كلام أوغو", image: "/images/sept-kilometres/7km-11.webp", paragraphs: [
        "تجلس أمّي قرب ماري.",
        "— قبل البئر، كانت لنا ساعة. واحدةٌ فقط. بعد السوق، بعد الطبخ، بعد الأطفال. ساعةٌ لنا. هنا.",
        "— البئر سلبتنا إيّاها.",
        "— لكنّ ماء البئر أنظف، تقول ماري.",
        "— نعم. لهذا هو ظلم. أنتِ محقّةٌ في الماء. لكنّك مخطئةٌ في حقّنا.",
    ] },
    { title: "12 — الظلم", image: "/images/sept-kilometres/7km-12.webp", paragraphs: [
        "— مع البئر، نملأ، نعود. هذا كلّ شيء. لم يعد لنا شيءٌ خاصٌّ بنا.",
        "— لكن يمكنكنّ المجيء إلى المستنقع مع ذلك، تقول ماري.",
        "— لا. إن كانت لدينا البئر، وجب أن نستخدمها. وإلا، فنحن عنيداتٌ يرفُضن التقدّم.",
        "تنظر أمّي إلى ماري، دون غضب.",
        "— تقرّرين أمرًا جيّدًا لنا. دون أن تسألينا. النيّة الحسنة لا تكفي.",
        "وتفهم ماري أنها كانت مخطئة. لا في الماء. بل فينا.",
    ] },
    { title: "13 — العودة", image: "/images/sept-kilometres/7km-13.webp", paragraphs: [
        "في القرية، تنظر ماري إلى البئر البيضاء التي تلمع في المساء.",
        "— ماذا نفعل؟",
        "تهزّ أمّي كتفيها.",
        "— ستبقى البئر هناك. ونحن، سنواصل إلى المستنقع.",
        "ثم تقول الجملة التي لن أنساها أبدًا:",
        "— قرارٌ نتّخذه عن أحدٍ، دون أن نسأله، نادرًا ما يكون عونًا. غالبًا ما يكون ظلمًا.",
    ] },
    { title: "14 — الرسالة", image: "/images/sept-kilometres/7km-14.webp", paragraphs: [
        "رحلت ماري في اليوم التالي.",
        "بعد أسبوع، تصل رسالةٌ من العاصمة.",
        "«شكرًا لأنّكِ أريتِني ما لم أكن أراه. سأغيّر طريقتي في العمل. النوايا الحسنة لا تكفي. لا بدّ من الإصغاء.»",
        "تقرؤها أمّي، تُريها للأخريات. يبتسمن.",
        "— على الأقلّ، فهمت.",
    ] },
    { title: "15 — ما فهمتُه", image: "/images/sept-kilometres/7km-15.webp", paragraphs: [
        "ما زالت البئر تلمع. لا أحد يأخذ منها. الماء الذي فيها هو الأفضل في القرية — وهو لا يخصّ أحدًا.",
        "أمّا أنا، فقد تغيّرت. الآن، حين يقول أبي «الأمر هكذا»، أسأل نفسي: مَن قرّر؟ هل سُئلتُ؟",
        "النساء اللواتي ربّينني لسن جاهلاتٍ يجب إنقاذهنّ. إنهنّ نساءٌ يَعرِفن. يقرّرن. يرفُضن.",
        "والرفض ليس تخلّفًا. الرفض قوّة.",
    ] },
    ],
  },

  zh: {
    lang: "zh", dir: "ltr", label: "中文",
    bookTitle: "七公里",
    sections: [
    { title: "1 — 开篇", image: "/images/sept-kilometres/7km-01.webp", paragraphs: [
        "刚从市场回来，我母亲就开始做饭。",
        "从她双手的快，能看出她的娴熟。她切、她削、她调酱。很快就好了。外面，她的朋友们在等她。打水的活儿在等着她们。",
        "我叫薇薇。十四岁。有一件事，我从来没弄明白。",
    ] },
    { title: "2 — 谜", image: "/images/sept-kilometres/7km-02.webp", paragraphs: [
        "每天傍晚，村里的女人都出发去沼泽。来回七公里。去把水打回来。",
        "可水井就在那儿。几步路。非政府组织三个月前装好的——办了一场盛大的庆典，省长、镇长、铜管乐队都来了。",
        "干净的水，近在咫尺。却没人要它。",
        "为什么？",
    ] },
    { title: "3 — 篮子", image: "/images/sept-kilometres/7km-03.webp", paragraphs: [
        "我母亲的篮子，已经和早上的不一样了。早上，它装满了她要卖的茄子。傍晚，它装满了鱼、油、调酱的盐回来。",
        "我们卖了去买。篮子从不空。钱也从不留下。",
    ] },
    { title: "4 — 出发", image: "/images/sept-kilometres/7km-04.webp", paragraphs: [
        "——我去沼泽了，母亲对我说。锅里有给你弟弟的饭。",
        "——为什么不用井水？它就在那儿。",
        "她笑了，仿佛我说了句蠢话。",
        "——井水不是给一天劳作之后用的。一天之后，是沼泽。",
        "阿米娜塔从院子里叫她。她们笑着出发了。那笑声，对她们有意义，对我却没有。",
    ] },
    { title: "5 — 玛丽", image: "/images/sept-kilometres/7km-05.webp", paragraphs: [
        "她叫玛丽。她从远方来。是她让人把井装上的。",
        "三个月后，她回来检查。她带着文件、数据、问题。",
        "到处，人们都对她说是。「是的，夫人，我们用井。」可一到下午，井就空着，女人们照旧步行。",
        "玛丽不明白。这让她恼火。",
    ] },
    { title: "6 — 那些回答", image: "/images/sept-kilometres/7km-06.webp", paragraphs: [
        "在井边，她询问女人们。",
        "——为什么要去那么远的沼泽？",
        "——那里的水更清凉，夫人。",
        "——那是活水，不是死水。",
        "——井是死的。沼泽是活的。",
        "站不住脚的回答。玛丽知道。但她感到，真正的原因藏在它们背后。",
    ] },
    { title: "7 — 邀请", image: "/images/sept-kilometres/7km-07.webp", paragraphs: [
        "最后说出口的，是阿米娜塔。",
        "——夫人，您要是想明白，就跟我们一起来。",
        "玛丽答应了。她以为自己要去解决一个水的问题。",
        "她错了。",
    ] },
    { title: "8 — 行走", image: "/images/sept-kilometres/7km-08.webp", paragraphs: [
        "她们一起出发。玛丽，脚上穿着徒步鞋，背上背着包。",
        "棕榈树下，女人们唱起歌来。玛丽听着。她想跟上——跟不上。",
        "随着离村子越来越远，她们身上有什么变了。一天的重量，一步一步地，卸了下来。",
    ] },
    { title: "9 — 沼泽", image: "/images/sept-kilometres/7km-09.webp", paragraphs: [
        "到了沼泽，女人们放下担子。她们坐下。她们大声说话，互相打趣，开怀大笑——那种从肚子里发出的笑。",
        "玛丽待在一旁。她看着。她等着。",
        "慢慢地，她开始看见了。",
    ] },
    { title: "10 — 玛丽所明白的", image: "/images/sept-kilometres/7km-10.webp", paragraphs: [
        "在这里，远离村庄，女人们不再是仆人、小贩、匆忙的母亲。",
        "在这里，她们做主。她们说自己想说的。她们是自由的。",
        "阿米娜塔转向玛丽。",
        "——您看见了吗，夫人？这才是沼泽。不是为了水。",
    ] },
    { title: "11 — 奥古的话", image: "/images/sept-kilometres/7km-11.webp", paragraphs: [
        "我母亲在玛丽身边坐下。",
        "——有井之前，我们有一个钟头。只有一个。在市场之后，做饭之后，孩子之后。一个属于我们的钟头。在这里。",
        "——井把它从我们这儿夺走了。",
        "——可井水更干净，玛丽说。",
        "——是的。正因如此才不公。水上你说得对。但在我们身上，你错了。",
    ] },
    { title: "12 — 不公", image: "/images/sept-kilometres/7km-12.webp", paragraphs: [
        "——有了井，我们打满，回家。就这样。我们再没有任何属于自己的东西。",
        "——可你们还是能来沼泽呀，玛丽说。",
        "——不行。要是有了井，我们就必须用它。否则，我们就是拒绝进步的犟女人。",
        "我母亲看着玛丽，没有怒气。",
        "——你为我们决定了一件好事。却没问过我们。一个好意，是不够的。",
        "玛丽明白了，她错了。不是水上错了。是在我们身上错了。",
    ] },
    { title: "13 — 归途", image: "/images/sept-kilometres/7km-13.webp", paragraphs: [
        "在村子里，玛丽望着那口在暮色中闪光的白井。",
        "——我们怎么办？",
        "我母亲耸了耸肩。",
        "——井会留在那儿。而我们，会继续去沼泽。",
        "然后她说了那句我永远不会忘记的话：",
        "——我们替别人做的、却没问过他的决定，很少是帮助。它往往是一种不公。",
    ] },
    { title: "14 — 信", image: "/images/sept-kilometres/7km-14.webp", paragraphs: [
        "玛丽第二天就走了。",
        "一周后，一封信从首都寄来。",
        "「谢谢您让我看见了我从前没看见的。我要改变我的工作方式。好意是不够的。必须倾听。」",
        "我母亲读了它，拿给别的女人看。她们笑了。",
        "——至少，她明白了。",
    ] },
    { title: "15 — 我所明白的", image: "/images/sept-kilometres/7km-15.webp", paragraphs: [
        "井依旧闪着光。没有人取用它。它里面的水是全村最好的——而它不属于任何人。",
        "至于我，我变了。如今，当我父亲说「就是这样」时，我会问自己：谁决定的？有人问过我吗？",
        "把我养大的那些女人，不是等着被拯救的无知者。她们是懂得的女人。是做主的女人。是拒绝的女人。",
        "而拒绝，并不是落后。拒绝，是一种力量。",
    ] },
    ],
  },
};
