// « Les Chimpanzés de Bossou — Les primates supérieurs » — Valentine Traoré, ill. Mohamed Soumah.
// Éditions Solidaires (2021) — documentaire. Collection Pati · Découverte (7–9 ans).
// Texte source extrait du PDF puis RÉCRIT au calibre Découverte (phrases simples 8–14 mots,
// 1–2 mots nouveaux par page expliqués en contexte), fidèle aux faits.
// FR posé en premier ; EN / AR / ZH à ajouter ensuite.
// NB : titre distinct du roman « Le Peuple de Bossou » (slug "bossou"), qui reste au catalogue.
export type ChimpoLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[]; image?: string };
type Book = { lang: ChimpoLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const CHIMPO_ML: Partial<Record<ChimpoLang, Book>> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Les Chimpanzés de Bossou",
    sections: [
      { id: "village", title: "Le village de Bossou", paragraphs: [
        "Tout près de la frontière entre la Guinée et le Libéria, il y a un village : Bossou.",
        "Il se trouve à six kilomètres du mont Nimba, dans la préfecture de Lola.",
        "Autour du village s'élèvent de petites collines couvertes de forêt. C'est là que vivent les chimpanzés.",
        "Les habitants y cultivent leurs champs. À Bossou, des scientifiques étudient les chimpanzés sauvages depuis très longtemps." ] },
      { id: "sacres", title: "Des animaux sacrés", paragraphs: [
        "Pour le peuple manon, les chimpanzés de Bossou sont sacrés.",
        "On raconte qu'ils sont les ancêtres revenus vivre parmi eux.",
        "Ces chimpanzés vivent en groupe, tous ensemble. Ceux du mont Nimba, eux, vivent plutôt seuls.",
        "Chaque année, pour les honorer, le village organise une cérémonie d'offrandes sur le mont Gban." ] },
      { id: "comme-nous", title: "Des gestes comme les nôtres", paragraphs: [
        "Beaucoup de leurs gestes ressemblent aux nôtres.",
        "Ils se lavent. Ils « parlent » avec de grands mouvements des bras. Ils pêchent et cueillent pour se nourrir." ] },
      { id: "casseurs", title: "Les casseurs de noix", paragraphs: [
        "Les chimpanzés de Bossou sont célèbres pour une chose : casser les noix du palmier à huile.",
        "Ils posent la noix sur une pierre plate, l'enclume, et frappent avec une autre pierre, le marteau.",
        "C'est la façon la plus habile de se servir d'un outil jamais observée chez des animaux sauvages." ] },
      { id: "partage", title: "Le partage du sage", paragraphs: [
        "Après la pêche ou la cueillette, c'est le plus vieux chimpanzé, le sage, qui partage la nourriture.",
        "Et il partage avec justice, pour tout le monde.",
        "Si chacun reçoit deux fruits, une femelle qui attend un petit en reçoit trois : le bébé dans son ventre a, lui aussi, sa part." ] },
      { id: "outils", title: "Un outil pour chaque besoin", paragraphs: [
        "Ils inventent un outil pour presque tout.",
        "Une feuille pliée pour boire l'eau. Une petite tige pour attraper les fourmis.",
        "Un bâton pour récolter le miel, ou pour ramasser les algues qui flottent sur les mares.",
        "Et la tige d'une feuille de palmier pour piler et sortir le cœur du palmier." ] },
      { id: "berceau", title: "Le berceau de l'humanité", paragraphs: [
        "La vie des chimpanzés de Bossou nous rappelle une grande idée : l'Afrique est le berceau de l'humanité, le lieu où tout a commencé.",
        "Voilà pourquoi il faut protéger ces animaux et leur forêt.",
        "Le mont Nimba est inscrit au patrimoine mondial de l'UNESCO : un trésor de la nature, protégé pour le monde entier.",
        "On y trouve aussi des crapauds très rares, qui donnent naissance à des petits déjà formés, au lieu de pondre des œufs.",
        "En observant les chimpanzés, les scientifiques comprennent mieux comment les primates — la grande famille des singes et des humains — se sont répandus sur la Terre." ] },
      { id: "credo", title: "Pati — Les racines, c'est la Base", paragraphs: [
        "« Partager les ressources de notre Histoire, analyser les faits et les versions, les transcrire, trier le vrai, trouver les non-dits, illustrer pour mieux inspirer. »",
        "Éditions Solidaires — Août 2021." ] },
    ],
  },

  en: {
    lang: "en", dir: "ltr", label: "English", bookTitle: "The Chimpanzees of Bossou",
    sections: [
      { id: "village", title: "The Village of Bossou", paragraphs: [
        "Very near the border between Guinea and Liberia, there is a village: Bossou.",
        "It lies six kilometres from Mount Nimba, in the prefecture of Lola.",
        "Around the village rise small hills covered in forest. That is where the chimpanzees live.",
        "The people farm their fields there. At Bossou, scientists have studied the wild chimpanzees for a very long time." ] },
      { id: "sacres", title: "Sacred Animals", paragraphs: [
        "For the Manon people, the chimpanzees of Bossou are sacred.",
        "It is said that they are the ancestors come back to live among them.",
        "These chimpanzees live in a group, all together. Those of Mount Nimba live rather alone.",
        "Each year, to honour them, the village holds a ceremony of offerings on Mount Gban." ] },
      { id: "comme-nous", title: "Gestures Like Ours", paragraphs: [
        "Many of their gestures resemble ours.",
        "They wash themselves. They \"speak\" with great movements of the arms. They fish and gather to feed themselves." ] },
      { id: "casseurs", title: "The Nut-Crackers", paragraphs: [
        "The chimpanzees of Bossou are famous for one thing: cracking the nuts of the oil palm.",
        "They lay the nut on a flat stone, the anvil, and strike with another stone, the hammer.",
        "It is the most skilful use of a tool ever observed in wild animals." ] },
      { id: "partage", title: "The Sage's Sharing", paragraphs: [
        "After fishing or gathering, it is the oldest chimpanzee, the sage, who shares out the food.",
        "And he shares it fairly, for everyone.",
        "If each receives two fruits, a female expecting a baby receives three: the baby in her belly has its share too." ] },
      { id: "outils", title: "A Tool for Every Need", paragraphs: [
        "They invent a tool for almost everything.",
        "A folded leaf to drink water. A small stalk to catch ants.",
        "A stick to gather honey, or to scoop up the algae floating on the ponds.",
        "And the stalk of a palm leaf to pound and draw out the heart of the palm." ] },
      { id: "berceau", title: "The Cradle of Humanity", paragraphs: [
        "The life of the chimpanzees of Bossou reminds us of a great idea: Africa is the cradle of humanity, the place where everything began.",
        "That is why these animals and their forest must be protected.",
        "Mount Nimba is inscribed on UNESCO's World Heritage List: a treasure of nature, protected for the whole world.",
        "There are also very rare toads there, which give birth to young already formed, instead of laying eggs.",
        "By observing the chimpanzees, scientists better understand how the primates — the great family of apes and humans — spread across the Earth." ] },
      { id: "credo", title: "Pati — The Roots Are the Base", paragraphs: [
        "\"Sharing the resources of our History, analysing the facts and the versions, transcribing them, sorting out the true, finding the unspoken, illustrating to better inspire.\"",
        "Éditions Solidaires — August 2021." ] },
    ],
  },

  ar: {
    lang: "ar", dir: "rtl", label: "العربية", bookTitle: "شمبانزي بوسو",
    sections: [
      { id: "village", title: "قرية بوسو", paragraphs: [
        "قريبًا جدًّا من الحدود بين غينيا وليبيريا، توجد قرية: بوسو.",
        "تقع على بُعد ستّة كيلومترات من جبل نيمبا، في مقاطعة لولا.",
        "حول القرية تنهض تلالٌ صغيرة تكسوها الغابة. هناك يعيش الشمبانزي.",
        "يزرع الأهالي حقولهم هناك. في بوسو، يدرس العلماء الشمبانزي البرّيّ منذ زمنٍ بعيدٍ جدًّا." ] },
      { id: "sacres", title: "حيواناتٌ مقدّسة", paragraphs: [
        "عند شعب المانون، شمبانزي بوسو مقدّسون.",
        "يُروى أنهم الأسلاف عادوا ليعيشوا بينهم.",
        "يعيش هؤلاء الشمبانزي جماعةً، معًا. أمّا شمبانزي جبل نيمبا، فيعيشون منفردين غالبًا.",
        "كلّ عام، تكريمًا لهم، تُقيم القرية مراسم قرابين على جبل غبان." ] },
      { id: "comme-nous", title: "إيماءاتٌ كإيماءاتنا", paragraphs: [
        "كثيرٌ من إيماءاتهم تشبه إيماءاتنا.",
        "يغتسلون. «يتكلّمون» بحركاتٍ كبيرة من الذراعين. يصطادون ويجمعون ليتغذّوا." ] },
      { id: "casseurs", title: "كاسرو الجوز", paragraphs: [
        "يشتهر شمبانزي بوسو بأمرٍ واحد: كسر جوز نخيل الزيت.",
        "يضعون الجوزة على حجرٍ مسطّح، السندان، ويضربون بحجرٍ آخر، المطرقة.",
        "إنها أمهر استخدامٍ لأداةٍ شوهد على الإطلاق عند حيواناتٍ برّيّة." ] },
      { id: "partage", title: "قِسمة الحكيم", paragraphs: [
        "بعد الصيد أو الجمع، الشمبانزي الأكبر سنًّا، الحكيم، هو من يقسم الطعام.",
        "ويقسمه بعدل، للجميع.",
        "إن نال كلٌّ ثمرتين، فالأنثى التي تنتظر صغيرًا تنال ثلاثًا: للجنين في بطنها نصيبه أيضًا." ] },
      { id: "outils", title: "أداةٌ لكلّ حاجة", paragraphs: [
        "يخترعون أداةً لكلّ شيءٍ تقريبًا.",
        "ورقةٌ مطويّة لشرب الماء. ساقٌ صغيرة لاصطياد النمل.",
        "عصًا لجمع العسل، أو لانتشال الطحالب الطافية على البِرَك.",
        "وساق ورقة نخيلٍ لدقّ قلب النخلة واستخراجه." ] },
      { id: "berceau", title: "مهد البشريّة", paragraphs: [
        "تذكّرنا حياة شمبانزي بوسو بفكرةٍ عظيمة: أفريقيا مهد البشريّة، المكان الذي بدأ فيه كلّ شيء.",
        "لهذا يجب حماية هذه الحيوانات وغابتها.",
        "جبل نيمبا مُدرَجٌ على لائحة التراث العالميّ لليونسكو: كنزٌ من كنوز الطبيعة، محميٌّ للعالم أجمع.",
        "يوجد فيه أيضًا علاجيمُ نادرةٌ جدًّا، تلد صغارًا مكتملي التكوين، بدل أن تضع بيضًا.",
        "بمراقبة الشمبانزي، يفهم العلماء على نحوٍ أفضل كيف انتشرت الرئيسيّات — العائلة الكبرى للقردة والبشر — على الأرض." ] },
      { id: "credo", title: "باتي — الجذور هي الأساس", paragraphs: [
        "«مقاسمة موارد تاريخنا، وتحليل الوقائع والروايات، وتدوينها، وغربلة الحقيقة، واكتشاف المسكوت عنه، والرسم لإلهامٍ أفضل.»",
        "Éditions Solidaires — أغسطس 2021." ] },
    ],
  },

  zh: {
    lang: "zh", dir: "ltr", label: "中文", bookTitle: "博苏的黑猩猩",
    sections: [
      { id: "village", title: "博苏村", paragraphs: [
        "在几内亚与利比里亚交界处附近，有一座村庄：博苏。",
        "它在距宁巴山六公里处，属洛拉省。",
        "村子四周耸立着覆满森林的小山丘。黑猩猩就生活在那里。",
        "村民在那里耕种自己的田。在博苏，科学家研究野生黑猩猩已经很久很久了。" ] },
      { id: "sacres", title: "神圣的动物", paragraphs: [
        "对马农人来说，博苏的黑猩猩是神圣的。",
        "据说它们是回到族人中间生活的祖先。",
        "这些黑猩猩成群生活，全体在一起。而宁巴山的黑猩猩，则多半独居。",
        "每一年，为了向它们致敬，村庄都会在格班山上举行献祭仪式。" ] },
      { id: "comme-nous", title: "与我们相似的举动", paragraphs: [
        "它们许多举动都和我们相似。",
        "它们梳洗自己。它们用手臂的大幅动作来「说话」。它们捕捞、采集来养活自己。" ] },
      { id: "casseurs", title: "砸坚果的能手", paragraphs: [
        "博苏的黑猩猩以一件事闻名：砸开油棕的坚果。",
        "它们把坚果放在一块平石头——砧上，再用另一块石头——锤来敲。",
        "这是在野生动物身上观察到的、最灵巧的工具使用方式。" ] },
      { id: "partage", title: "智者的分配", paragraphs: [
        "捕捞或采集之后，是由最年长的黑猩猩——智者，来分配食物。",
        "而它分得很公道，人人有份。",
        "如果每只分到两个果子，一只怀着宝宝的母猩猩就分到三个：它肚子里的宝宝，也有自己的一份。" ] },
      { id: "outils", title: "为每种需要发明工具", paragraphs: [
        "它们几乎为每件事都发明一种工具。",
        "一片折起的叶子用来喝水。一根小茎用来逮蚂蚁。",
        "一根棍子用来取蜂蜜，或捞起浮在水塘上的藻。",
        "还有一根棕榈叶的茎，用来捣出棕榈的芯。" ] },
      { id: "berceau", title: "人类的摇篮", paragraphs: [
        "博苏黑猩猩的生活，让我们想起一个伟大的观念：非洲是人类的摇篮，是一切开始的地方。",
        "这就是为什么必须保护这些动物和它们的森林。",
        "宁巴山被列入联合国教科文组织世界遗产名录：一份大自然的珍宝，为全世界而受到保护。",
        "那里还有非常罕见的蟾蜍，它们直接产下已经成形的幼体，而不是产卵。",
        "通过观察黑猩猩，科学家更好地理解了灵长类——猿与人类这个大家族——是如何在地球上散布开来的。" ] },
      { id: "credo", title: "巴提 — 根，就是根基", paragraphs: [
        "「分享我们历史的资源，分析事实与各种说法，把它们记录下来，筛选真相，发现未曾言说的，以图画更好地启迪人心。」",
        "Éditions Solidaires — 2021年8月。" ] },
    ],
  },
};
