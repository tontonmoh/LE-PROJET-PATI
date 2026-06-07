// 4ᵉ de couverture calibrée plateforme — registre central (clé = slug du livre).
// Produit avec le standard prompt-4e-couverture-pati.md (étalon : maitre-ecole).
// tagline = 1 phrase (cartes catalogue + aperçus de partage) ; blurb = 4ᵉ complète
// (accroche → enjeu sans spoiler → ligne de thème → pied de page), en fr/en/ar/zh.
// NB : AR & ZH sont des drafts soignés — à faire relire par un locuteur natif avant prod.
export type Lang = "fr" | "en" | "ar" | "zh";
export type Blurb = { tagline: Record<Lang, string>; blurb: Record<Lang, string[]> };

const BLURBS: Record<string, Blurb> = {
  "g2040-tome0": {
    tagline: {
      fr: "Le jour où une classe de Boffa découvre qu'elle connaît le monde entier — sauf son propre pays.",
      en: "The day a classroom in Boffa realizes it knows the whole world — except its own country.",
      ar: "اليوم الذي يكتشف فيه صفٌّ في بوفا أنه يعرف العالم كلّه… إلا بلده.",
      zh: "在博法，一个班级发现自己认识全世界——唯独不了解自己的国家。",
    },
    blurb: {
      fr: [
        "À Boffa, dans une classe ordinaire aux bancs fatigués, le professeur n'est pas venu ce matin. Les élèves révisent seuls — jusqu'à ce qu'une visite inattendue change la journée.",
        "Ils savent réciter l'Asie et les Amériques par cœur. Mais quand on leur demande de parler de la Guinée, de Boffa, de Simandou… le silence tombe. Et si c'était à eux d'apprendre, puis de raconter, le pays de demain ?",
        "De ce matin-là naît un grand concours national des écoles — et la série Génération 2040.",
        "Parce que le changement, le plus grand, commence toujours sur les bancs de l'école.",
      ],
      en: [
        "In Boffa, in an ordinary classroom with worn-out benches, the teacher hasn't come this morning. The pupils revise on their own — until an unexpected visit turns the day around.",
        "They can recite Asia and the Americas by heart. But when asked to speak about Guinea, about Boffa, about Simandou… silence falls. What if it were up to them to learn, and then to tell, the country of tomorrow?",
        "Out of that morning a great national schools' contest is born — and with it the Génération 2040 series.",
        "Because the greatest change always begins on the benches of a school.",
      ],
      ar: [],
      zh: [],
    },
  },
  "g2040-foret-et-fer": {
    tagline: {
      fr: "À Lola, une montagne porte une forêt vivante — et, peut-être, un fer endormi. Faut-il choisir ?",
      en: "In Lola, a mountain holds a living forest — and, perhaps, a sleeping iron. Must we choose?",
      ar: "في لولا، جبلٌ يحمل غابةً حيّة — وربّما حديدًا نائمًا. هل علينا أن نختار؟",
      zh: "在洛拉，一座山承载着一片生机勃勃的森林——也许还有沉睡的铁。我们必须做出选择吗？",
    },
    blurb: {
      fr: [
        "À Lola, la montagne veille sur tout : la forêt, les villages, et les chimpanzés de Bossou qui cassent leurs noix depuis toujours. Pour le concours de la Simandou Academy, la classe de Sia doit raconter son Objectif.",
        "Mais une question divise les enfants. On dit que le fer dort sous leur montagne. Faut-il le réveiller un jour, pour que Lola compte enfin — au risque de la forêt ? Ou protéger la forêt — au risque de voir partir les grands frères ?",
        "Sia refuse de choisir. Entre la forêt et le fer, elle écrit un seul petit mot : ET. À condition d'en prendre soin.",
        "Un livre sur la vie terrestre et l'industrie qui apprennent à grandir ensemble. Génération 2040 · dès 12 ans.",
      ],
      en: [
        "In Lola, the mountain watches over everything: the forest, the villages, and the chimpanzees of Bossou who have cracked their nuts since forever. For the Simandou Academy contest, Sia's class must tell its Objective.",
        "But one question divides the children. They say iron sleeps beneath their mountain. Should it be woken one day, so that Lola finally counts — at the risk of the forest? Or protect the forest — at the risk of seeing the older brothers leave?",
        "Sia refuses to choose. Between the forest and the iron, she writes one small word: AND. As long as we take care of both.",
        "A book about life on land and industry learning to grow up together. Génération 2040 · ages 12 and up.",
      ],
      ar: [
        "في لولا، يسهر الجبل على كلّ شيء: الغابة، والقرى، وشمبانزي Bossou التي تكسر جوزها منذ الأزل. من أجل مسابقة Simandou Academy، على صفّ Sia أن يروي هدفه.",
        "لكنّ سؤالًا يقسم الأطفال. يُقال إنّ الحديد ينام تحت جبلهم. هل يُوقَظ يومًا لكي تُحسب لولا أخيرًا — على حساب الغابة؟ أم نحمي الغابة — على خطر رحيل الإخوة الكبار؟",
        "ترفض Sia أن تختار. بين الغابة والحديد، تكتب كلمةً صغيرةً واحدة: وَ. شرط أن نعتني بهما.",
        "كتابٌ عن الحياة على اليابسة والصناعة وهما يتعلّمان أن يكبرا معًا. Génération 2040 · من 12 سنة.",
      ],
      zh: [
        "在洛拉，大山守护着一切：森林、村庄，还有自古就用石头敲开坚果的 Bossou 黑猩猩。为了 Simandou Academy 的比赛，Sia 的班级要讲述自己的目标。",
        "但有一个问题让孩子们产生了分歧。据说铁就沉睡在他们的山下。是否有一天该把它唤醒，让洛拉终于被看见——哪怕冒着失去森林的风险？还是守护森林——哪怕看着哥哥们离开？",
        "Sia 拒绝二选一。在森林与铁之间，她写下一个小小的词：和。前提是好好照看它们。",
        "一本关于陆地生命与工业学会共同成长的书。Génération 2040 · 12岁以上。",
      ],
    },
  },
  "g2040-makona": {
    tagline: {
      fr: "À Guéckédou, on dit que le Makona est une frontière. Finda, elle, sait que c'est un chemin.",
      en: "In Guéckédou, they say the Makona is a border. Finda knows it's a path.",
      ar: "في غيكيدو يقولون إنّ Makona حدود. أمّا Finda، فتعرف أنه طريق.",
      zh: "在盖凯杜，人们说 Makona 是一道边界。可 Finda 知道，它是一条路。",
    },
    blurb: {
      fr: [
        "À Guéckédou, ville-carrefour entre la Guinée, le Liberia et la Sierra Leone, la grand-mère de Finda se souvient du plus grand marché de toute la sous-région. Pour le concours de la Simandou Academy, la classe doit raconter son Objectif.",
        "Sur la carte, le Makona est une frontière. Mais de l'autre côté du fleuve vit Tamba, le cousin de Finda — même famille, même langue, même grand-mère. Alors : le fleuve sépare-t-il, ou relie-t-il ?",
        "Finda n'efface pas le mot de la maîtresse. Elle ajoute seulement, en dessous : un fleuve qui relie. Et la classe se met à rêver le marché de demain — avec des balances et des sourires, pas des fusils.",
        "Un livre sur le travail, la paix et les voisins qu'on retrouve. Génération 2040 · dès 12 ans.",
      ],
      en: [
        "In Guéckédou, a crossroads town between Guinea, Liberia and Sierra Leone, Finda's grandmother remembers the biggest market in the whole sub-region. For the Simandou Academy contest, the class must tell its Objective.",
        "On the map, the Makona is a border. But on the other side of the river lives Tamba, Finda's cousin — same family, same language, same grandmother. So: does the river separate, or connect?",
        "Finda doesn't erase the teacher's word. She only adds, beneath it: a river that connects. And the class begins to dream up the market of tomorrow — with scales and smiles, not rifles.",
        "A book about work, peace, and neighbors found again. Génération 2040 · ages 12 and up.",
      ],
      ar: [
        "في غيكيدو، مدينة المفترق بين غينيا وليبيريا وسيراليون، تتذكّر جدّة Finda أكبر سوقٍ في المنطقة كلّها. من أجل مسابقة Simandou Academy، على الصفّ أن يروي هدفه.",
        "على الخريطة، Makona حدود. لكن على الضفّة الأخرى من النهر يعيش Tamba، ابن عمّ Finda — العائلة نفسها، اللغة نفسها، الجدّة نفسها. إذًا: هل يفصل النهر، أم يَصِل؟",
        "لا تمحو Finda كلمة الأستاذة. تضيف فقط، تحتها: نهرٌ يَصِل. ويأخذ الصفّ يحلم بسوق الغد — بالموازين والابتسامات، لا بالبنادق.",
        "كتابٌ عن العمل والسلام والجيران الذين نلتقي بهم من جديد. Génération 2040 · من 12 سنة.",
      ],
      zh: [
        "在盖凯杜，这座几内亚、利比里亚与塞拉利昂之间的十字路口之城，Finda 的祖母记得整个次区域最大的集市。为了 Simandou Academy 的比赛，班级要讲述自己的目标。",
        "在地图上，Makona 是一道边界。可河的另一岸住着 Finda 的表亲 Tamba——同一个家族，同一种语言，同一位祖母。那么：河，是隔开，还是连接？",
        "Finda 没有擦掉老师写的词。她只在下面添了一句：一条连接的河。于是全班开始畅想明天的集市——用秤和微笑，而不是枪。",
        "一本关于劳动、和平，以及重新相遇的邻邦的书。Génération 2040 · 12岁以上。",
      ],
    },
  },
  "g2040-plaine-de-riz": {
    tagline: {
      fr: "À Kissidougou, la plaine déborde de riz. Alors pourquoi mange-t-on celui des autres ? Le jour où le train s'arrête ici, tout peut changer.",
      en: "In Kissidougou, the plain overflows with rice. So why do we eat someone else's? The day the train stops here, everything can change.",
      ar: "في Kissidougou، يفيض السهل بالأرزّ. فلماذا نأكل أرزّ غيرنا؟ يوم يتوقّف القطار هنا، كلّ شيءٍ قد يتغيّر.",
      zh: "在 Kissidougou，平原稻谷满仓。可我们为什么要吃别人的米？当火车在这里停靠的那一天，一切都可能改变。",
    },
    blurb: {
      fr: [
        "À Kissidougou, là où la grande forêt s'ouvre sur les plaines de la Haute Guinée, tout est riz : sur les coteaux, dans les bas-fonds, dans chaque assiette. Kumba, la petite Kissi, et son ami Lanciné, le Malinké descendu de la savane, travaillent la même rizière.",
        "Au marché, Kumba remarque que tant de sacs de riz viennent de l'autre bout du monde — alors que la plaine est là, juste devant. Pour le concours de la Simandou Academy, sa classe transforme le constat en Objectif : cultiver ce qu'on mange, manger ce qu'on cultive.",
        "Lanciné offre un nom à leur riz — Malodougou, « la terre du riz ». Et la grand-mère rappelle l'essentiel : un riz ne vaut que s'il peut voyager. Justement, la ligne du corridor s'arrête désormais à Kissidougou — et le train peut enfin emporter la récolte des paysans vers tout le pays.",
        "Un livre sur la terre nourricière, la souveraineté alimentaire et le chemin de fer qui désenclave. Génération 2040 · dès 12 ans.",
      ],
      en: [
        "In Kissidougou, where the great forest opens onto the plains of Upper Guinea, everything is rice: on the hillsides, in the lowlands, on every plate. Kumba, the Kissi girl, and her friend Lanciné, the Malinké boy who came down from the savanna, work the same paddy.",
        "At the market, Kumba notices how many sacks of rice come from the other side of the world — when the plain is right there, in front of her. For the Simandou Academy contest, her class turns the observation into an Objective: grow what we eat, eat what we grow.",
        "Lanciné gives their rice a name — Malodougou, \"the land of rice.\" And the grandmother recalls what matters: rice is only worth something if it can travel. As it happens, the corridor's line now stops at Kissidougou — and the train can finally carry the farmers' harvest to the whole country.",
        "A book about the nourishing earth, food sovereignty and the railway that opens up the land. Génération 2040 · ages 12 and up.",
      ],
      ar: [
        "في Kissidougou، حيث تنفتح الغابة الكبرى على سهول غينيا العليا، كلّ شيءٍ أرزّ: على المنحدرات، وفي الأراضي المنخفضة، وفي كلّ صحن. Kumba، الفتاة الكيسية، وصديقها Lanciné، الفتى المالينكي الذي نزل من السافانا، يعملان في الحقل نفسه.",
        "في السوق، تلاحظ Kumba كم من أكياس الأرزّ تأتي من الطرف الآخر من العالم — والسهل هناك، أمامها مباشرة. ومن أجل مسابقة Simandou Academy، يحوّل صفّها هذه الملاحظة إلى هدف: أن نزرع ما نأكل، وأن نأكل ما نزرع.",
        "يمنح Lanciné أرزّهم اسمًا — Malodougou، «أرض الأرزّ». وتذكّر الجدّة بالأهمّ: لا قيمة للأرزّ إن لم يستطع السفر. وها هو خطّ الممرّ يتوقّف الآن عند Kissidougou — فيستطيع القطار أخيرًا أن يحمل محصول الفلّاحين إلى البلد كلّه.",
        "كتابٌ عن الأرض المُعطاءة، والسيادة الغذائية، وسكّة الحديد التي تفكّ العزلة. Génération 2040 · من 12 سنة فما فوق.",
      ],
      zh: [
        "在 Kissidougou，正是大森林向上几内亚平原敞开的地方，处处皆是稻米：山坡上、洼地里、每一只碗中。Kissi 族女孩 Kumba，和她从萨瓦纳下来的 Malinké 族朋友 Lanciné，一起在同一片稻田里劳作。",
        "在集市上，Kumba 注意到有那么多袋大米来自世界的另一端——可平原就在眼前。为了 Simandou Academy 的比赛，全班把这个发现化作「目标」：种我们所吃的，吃我们所种的。",
        "Lanciné 给他们的米起了个名字——Malodougou，「稻米之乡」。祖母则点出最要紧的一点：米若不能运出去，就一文不值。恰好，走廊的那条铁路如今在 Kissidougou 设了站——火车终于能把农人的收成运往全国。",
        "一本关于哺育之地、粮食主权，以及那条打通闭塞的铁路的书。Génération 2040 · 适合 12 岁以上。",
      ],
    },
  },
  "g2040-graine-et-huile": {
    tagline: {
      fr: "À Dabola, l'arachide part nue et l'huile revient chère. L'usine, elle, est là — elle a juste faim. Et si on la nourrissait ?",
      en: "In Dabola, the peanut leaves bare and the oil comes back dear. The mill is right there — it is only hungry. What if we fed it?",
      ar: "في Dabola، يخرج الفول السوداني عاريًا ويعود الزيت غاليًا. أمّا المصنع، فهو هنا — إنه جائعٌ فقط. فماذا لو أطعمناه؟",
      zh: "在 Dabola，花生赤裸裸地运出去，油却昂贵地买回来。可榨油厂就在这儿——它只是饿了。我们何不喂饱它呢？",
    },
    blurb: {
      fr: [
        "Dabola, au cœur du pays, avait deux fiertés : sa gare — la première grande gare du bassin du Niger — et sa grande huilerie d'arachide. Aujourd'hui la gare dort, rails disparus ; et l'usine tourne au ralenti, faute de graines.",
        "Au marché, Saran observe un manège absurde : on charge l'arachide brute, vendue pour presque rien, et on décharge des bouteilles d'huile, chères, venues d'ailleurs. La même arachide, partie nue, revenue habillée.",
        "Pour le concours de la Simandou Academy, sa classe trouve l'Objectif : nourrir l'usine au lieu de vendre la graine ; presser l'huile ici ; et réveiller la gare pour que la Ligne emporte des bouteilles pleines, pas des sacs bradés.",
        "Un livre sur la transformation locale, le travail qui reste au pays et la fierté retrouvée. Génération 2040 · dès 12 ans.",
      ],
      en: [
        "Dabola, in the heart of the country, had two prides: its station — the first great station of the Niger basin — and its big peanut oil mill. Today the station sleeps, its rails gone; and the mill runs at half-speed, short of seed.",
        "At the market, Saran watches an absurd dance: raw peanut is loaded up, sold for almost nothing, while bottles of oil are unloaded, expensive, come from elsewhere. The same peanut, leaving bare, returning dressed.",
        "For the Simandou Academy contest, her class finds its Objective: feed the mill instead of selling the seed; press the oil here; and wake the station, so the Line carries full bottles, not cut-price sacks.",
        "A book about local processing, work that stays in the country, and pride regained. Génération 2040 · ages 12 and up.",
      ],
      ar: [
        "كانت لـ Dabola، في قلب البلد، فخران: محطّتها — أولى محطّات حوض النيجر الكبرى — ومصنعها الكبير لزيت الفول السوداني. أمّا اليوم، فالمحطّة نائمة وقد اختفت قضبانها؛ والمصنع يعمل بنصف طاقته، لقلّة البذور.",
        "في السوق، تراقب Saran رقصةً عبثية: يُحمَّل الفول السوداني خامًا فيُباع بأبخس ثمن، وتُفرَّغ زجاجات الزيت غاليةً قادمةً من مكانٍ آخر. الفول نفسه: يخرج عاريًا، ويعود مكسوًّا.",
        "ومن أجل مسابقة Simandou Academy، يجد صفّها هدفه: أن نُطعم المصنع بدل أن نبيع البذرة؛ أن نعصر الزيت هنا؛ وأن نوقظ المحطّة، كي يحمل الخطّ زجاجاتٍ ملأى، لا أكياسًا مباعةً بثمنٍ بخس.",
        "كتابٌ عن التحويل المحلّي، والعمل الذي يبقى في البلد، والكرامة المستعادة. Génération 2040 · من 12 سنة فما فوق.",
      ],
      zh: [
        "Dabola 地处全国中心，曾有两样骄傲：它的火车站——尼日尔河流域的第一座大站——和它那座大花生榨油厂。如今车站沉睡，铁轨不知去向；榨油厂则因缺少花生，只开半工。",
        "在集市上，Saran 看着一幕荒唐的景象：生花生被装车运走，贱卖得几乎不值钱；一瓶瓶油却被卸下来，价格高昂，来自别处。同样的花生，赤裸裸地出去，穿戴整齐地回来。",
        "为了 Simandou Academy 的比赛，全班找到了「目标」：与其卖掉种子，不如喂饱工厂；把油榨在这里；再唤醒车站，让铁路运走的是满瓶的油，而不是贱卖的麻袋。",
        "一本关于本地加工、把劳动留在国内、重拾骄傲的书。Génération 2040 · 适合 12 岁以上。",
      ],
    },
  },
  "g2040-tambour-et-livre": {
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
  "maitre-ecole": {
    tagline: {
      fr: "Un vieux livre oublié, une kermesse à préparer… et une chanson qui relie cent ans de mémoire.",
      en: "A forgotten old book, a school fair to prepare… and a song that ties a hundred years of memory together.",
      ar: "كتابٌ قديمٌ منسيّ، وحفلُ مدرسةٍ يُحضَّر… وأغنيةٌ تربط مئة عامٍ من الذاكرة.",
      zh: "一本被遗忘的旧书，一场要筹备的游园会……还有一首串起百年记忆的歌。",
    },
    blurb: {
      fr: [
        "Au fond d'une vieille malle, Damba déterre un livre signé Fodéba Keïta — et une scène d'école qui la fait rire aux éclats.",
        "Pour la kermesse, sa bande décide de la rejouer : un maître si fier qu'il se croit le plus grand savant du monde, et un élève qui préfère chanter. Mais à force de répéter, Pathé se met à ressembler un peu trop à son personnage…",
        "Une histoire sur la transmission : ce qui ne s'écrit pas toujours, mais se chante — de griot en griot, jusqu'à l'hymne qu'on entonne chaque matin.",
        "Pati — Aventure · 10–12 ans · d'après Fodéba Keïta",
      ],
      en: [
        "At the bottom of an old trunk, Damba digs up a book signed Fodéba Keïta — and a classroom scene that makes her laugh out loud.",
        "For the school fair, her crew decides to act it out: a teacher so proud he thinks he's the greatest scholar alive, and a pupil who would rather sing. But the more they rehearse, the more Pathé starts to resemble his own character…",
        "A story about passing things on: what isn't always written down, but sung — from griot to griot, all the way to the anthem sung every morning.",
        "Pati — Aventure · ages 10–12 · after Fodéba Keïta",
      ],
      ar: [
        "في قاع صندوقٍ قديم، تعثر Damba على كتابٍ موقّع باسم Fodéba Keïta — ومشهدٍ مدرسيٍّ يجعلها تضحك من القلب.",
        "من أجل حفل المدرسة، يقرّر أصدقاؤها تمثيله: معلّمٌ مغرورٌ حتى يحسب نفسه أعظم عالِمٍ في الدنيا، وتلميذٌ يفضّل الغناء. لكن كلّما تمرّنوا، بدأ Pathé يشبه شخصيّته أكثر من اللازم…",
        "حكايةٌ عن التوارث: ما لا يُكتب دائمًا، بل يُغنّى وتتناقله الألسن، حتى النشيد الذي يُردَّد كلّ صباح.",
        "Pati — Aventure · ١٠–١٢ سنة · عن Fodéba Keïta",
      ],
      zh: [
        "在箱子的最底层，Damba 翻出一本署名 Fodéba Keïta 的旧书——还有一幕让她放声大笑的课堂戏。",
        "为了游园会，她和伙伴决定把它演出来：一位自负到以为自己是天下第一学问家的老师，和一个宁愿唱歌的学生。可越排练，Pathé 就越像他演的那个角色……",
        "一个关于传承的故事：有些东西并不总是写下来的，而是唱出来的——一位格里奥传给下一位，一直传到每天清晨高唱的国歌。",
        "Pati — Aventure · 10–12 岁 · 改编自 Fodéba Keïta",
      ],
    },
  },

  "chateau-eau": {
    tagline: {
      fr: "Dans un village sans courant, un homme regarde la rivière… et décide d'en faire de la lumière.",
      en: "In a village with no power, one man looks at the river… and decides to turn it into light.",
      ar: "في قريةٍ بلا كهرباء، يتأمّل رجلٌ النهر… ويقرّر أن يصنع منه نورًا.",
      zh: "在一个没有电的村庄，一个人望着河流……决定把它变成光。",
    },
    blurb: {
      fr: [
        "À Bolodou, la nuit tombe tôt et l'on s'éclaire à la lampe à pile. Mais un homme, lui, n'arrête pas de regarder le torrent qui passe.",
        "Et si l'eau qui coule pouvait allumer les maisons, les écoles, les rues ? De la roue qui tourne à l'ampoule qui s'allume, découvre comment naît l'électricité.",
        "Une histoire vraie sur le courage d'oser, et sur tout ce qu'un seul rêve, mené jusqu'au bout, peut changer pour un village entier.",
        "Pati — Découverte · 7–9 ans · inspiré d'une histoire vraie",
      ],
      en: [
        "In Bolodou, night falls early and homes glow by battery lamp. But one man cannot stop watching the stream rushing by.",
        "What if running water could light up houses, schools, whole streets? From the spinning wheel to the glowing bulb, discover how electricity is born.",
        "A true story about the courage to try — and all that one dream, carried through to the end, can change for a whole village.",
        "Pati — Découverte · ages 7–9 · inspired by a true story",
      ],
      ar: [
        "في Bolodou، يحلّ الليل باكرًا، وتُضاء البيوت بمصابيح البطاريات. لكنّ رجلًا واحدًا لا يكفّ عن مراقبة النهر الجاري.",
        "ماذا لو استطاع الماء الجاري أن يُضيء البيوت والمدارس والشوارع؟ من الدولاب الدائر إلى المصباح المُضيء، اكتشف كيف تُولد الكهرباء.",
        "قصة حقيقية عن شجاعة المحاولة، وعن كلّ ما يمكن أن يغيّره حلمٌ واحدٌ يُنفَّذ إلى النهاية في قريةٍ بأكملها.",
        "Pati — Découverte · ٧–٩ سنوات · مستوحاة من قصة حقيقية",
      ],
      zh: [
        "在 Bolodou，夜幕很早降临，家家靠电池灯照明。可有一个人，总是盯着奔流而过的小河。",
        "要是流水能点亮房屋、学校、整条街道呢？从转动的水轮到发亮的灯泡，看看电是怎样诞生的。",
        "一个真实的故事，讲述敢于尝试的勇气，以及一个被坚持到底的梦想能为整座村庄带来的改变。",
        "Pati — Découverte · 7–9 岁 · 取材自真实故事",
      ],
    },
  },

  "binta-diallo": {
    tagline: {
      fr: "Petite, Binta regardait le ciel… et elle est devenue la première femme à le piloter en Afrique noire.",
      en: "As a child, Binta watched the sky… and became the first woman in Black Africa to fly it.",
      ar: "صغيرةً، كانت Binta تراقب السماء… فصارت أوّل امرأةٍ تقودها في إفريقيا السوداء.",
      zh: "小时候，Binta 仰望天空……后来成为黑非洲第一位飞上蓝天的女性。",
    },
    blurb: {
      fr: [
        "Née à Labé, dans le Fouta-Djalon, Binta rêvait de voler quand presque personne ne croyait qu'une fille le pourrait.",
        "Comment devient-on « la Dame Oiseau », pilote puis colonelle ? Suis son envol, de l'école jusqu'aux commandes d'un hélicoptère.",
        "Une histoire vraie pour oser : aucun ciel n'est interdit à celle qui croit en son rêve.",
        "Pati — Découverte · 7–9 ans · inspiré d'une histoire vraie",
      ],
      en: [
        "Born in Labé, in the Fouta-Djalon, Binta dreamed of flying when almost no one believed a girl could.",
        "How does one become “the Bird Lady,” a pilot and then a colonel? Follow her takeoff, from school all the way to the controls of a helicopter.",
        "A true story to dare by: no sky is off-limits to the girl who believes in her dream.",
        "Pati — Découverte · ages 7–9 · inspired by a true story",
      ],
      ar: [
        "وُلدت Binta في Labé، في Fouta-Djalon، وحلمت بالطيران حين لم يكن أحدٌ تقريبًا يصدّق أنّ فتاةً تستطيع ذلك.",
        "كيف يصير المرء «سيّدة الطير»، طيّارةً ثمّ عقيدة؟ تابع إقلاعها، من المدرسة حتى مقود طائرة هليكوبتر.",
        "قصة حقيقية تمنح الجرأة: ما من سماءٍ ممنوعةٍ على من تؤمن بحلمها.",
        "Pati — Découverte · ٧–٩ سنوات · مستوحاة من قصة حقيقية",
      ],
      zh: [
        "Binta 出生在 Fouta-Djalon 的 Labé。当几乎没人相信女孩能飞上天时，她却梦想着飞翔。",
        "一个人如何成为「飞鸟夫人」，先当飞行员、再成为上校？跟随她的起飞，从校园一直到直升机的操纵杆。",
        "一个让人勇敢的真实故事：对相信梦想的女孩，没有哪片天空是禁区。",
        "Pati — Découverte · 7–9 岁 · 取材自真实故事",
      ],
    },
  },

  "sacree-dmba": {
    tagline: {
      fr: "Le grand masque Nimba veille sur la Guinée depuis toujours — Amadou et Fifi vont découvrir son secret.",
      en: "The great Nimba mask has watched over Guinea forever — Amadou and Fifi are about to discover its secret.",
      ar: "قناع Nimba الكبير يحرس غينيا منذ الأزل — وها هما Amadou وFifi يكتشفان سرّه.",
      zh: "伟大的 Nimba 面具自古守护着几内亚——Amadou 和 Fifi 即将揭开它的秘密。",
    },
    blurb: {
      fr: [
        "On la voit partout : sur les billets, les logos, à l'entrée des fêtes. La Nimba, le grand masque-mère, est le visage même de la Guinée.",
        "Mais d'où vient-elle, et que protège-t-elle ? Amadou et Fifi suivent sa trace et rencontrent la D'mba, gardienne de la fécondité et de la vie.",
        "Pour découvrir un trésor du patrimoine baga, devenu l'emblème de tout un pays.",
        "Pati — Découverte · 7–9 ans",
      ],
      en: [
        "You see her everywhere: on banknotes, on logos, at the entrance to festivals. The Nimba, the great mother-mask, is the very face of Guinea.",
        "But where does she come from, and what does she protect? Amadou and Fifi follow her trail and meet the D'mba, guardian of fertility and life.",
        "To discover a treasure of Baga heritage that became the emblem of a whole country.",
        "Pati — Découverte · ages 7–9",
      ],
      ar: [
        "تراها في كلّ مكان: على الأوراق النقدية، على الشعارات، عند مداخل الأعياد. الـNimba، القناع-الأمّ الكبير، هو وجه غينيا نفسه.",
        "لكن من أين أتت؟ وماذا تحمي؟ يتتبّع Amadou وFifi أثرها فيلتقيان الـD'mba، حارسةَ الخصب والحياة.",
        "لاكتشاف كنزٍ من تراث الباغا، صار رمزًا لبلدٍ بأكمله.",
        "Pati — Découverte · ٧–٩ سنوات",
      ],
      zh: [
        "你到处都能看见她：纸币上、徽标上、节庆的入口处。Nimba，这尊伟大的母亲面具，正是几内亚的面孔。",
        "可她从何而来，又守护着什么？Amadou 和 Fifi 循着她的踪迹，遇见了丰饶与生命的守护者 D'mba。",
        "一起去发现巴加人遗产中的瑰宝——它已成为整个国家的象征。",
        "Pati — Découverte · 7–9 岁",
      ],
    },
  },

  "chimpanzes-bossou": {
    tagline: {
      fr: "Tout près du mont Nimba vivent des chimpanzés si malins qu'ils se servent d'outils — partons les rencontrer !",
      en: "Right by Mount Nimba live chimpanzees so clever they use tools — let's go and meet them!",
      ar: "قرب جبل Nimba تعيش شمبانزي بارعةٌ إلى حدّ استخدام الأدوات — هيّا نلتقي بها!",
      zh: "在 Nimba 山旁，住着聪明到会使用工具的黑猩猩——一起去认识它们吧！",
    },
    blurb: {
      fr: [
        "À Bossou, des chimpanzés sacrés cassent des noix de palme entre deux pierres, comme nous le ferions avec un marteau.",
        "Comment vivent-ils ? Que mangent-ils ? Pourquoi les protège-t-on ? Ce petit documentaire t'emmène les observer de tout près.",
        "Pour découvrir nos cousins les grands singes, et la nature précieuse qui les entoure.",
        "Pati — Découverte · 7–9 ans · documentaire",
      ],
      en: [
        "In Bossou, sacred chimpanzees crack palm nuts between two stones, just as we would with a hammer.",
        "How do they live? What do they eat? Why are they protected? This little documentary takes you to watch them up close.",
        "To discover our cousins the great apes — and the precious nature all around them.",
        "Pati — Découverte · ages 7–9 · documentary",
      ],
      ar: [
        "في Bossou، تكسر الشمبانزي المقدّسة جوزَ النخيل بين حجرين، كما نفعل نحن بالمطرقة.",
        "كيف تعيش؟ وبماذا تتغذّى؟ ولماذا نحميها؟ يأخذك هذا الفيلم الوثائقيّ الصغير لمشاهدتها عن قرب.",
        "لتكتشف أبناء عمومتنا من القردة العليا، والطبيعة الثمينة من حولها.",
        "Pati — Découverte · ٧–٩ سنوات · فيلم وثائقي",
      ],
      zh: [
        "在 Bossou，神圣的黑猩猩用两块石头敲开棕榈果，就像我们用锤子一样。",
        "它们怎样生活？吃些什么？为什么要保护它们？这部小小的纪录片带你近距离观察它们。",
        "一起认识我们的近亲——类人猿，以及它们周围珍贵的大自然。",
        "Pati — Découverte · 7–9 岁 · 纪录片",
      ],
    },
  },

  "bossou": {
    tagline: {
      fr: "Et si, derrière les arbres de Bossou, un autre peuple nous observait depuis toujours ?",
      en: "What if, behind the trees of Bossou, another people had been watching us all along?",
      ar: "وماذا لو كان وراء أشجار Bossou شعبٌ آخر يراقبنا منذ الأزل؟",
      zh: "倘若在 Bossou 的树林后，另一个族群一直在注视着我们呢？",
    },
    blurb: {
      fr: [
        "À la lisière de la forêt de Bossou vit un peuple discret, qui casse des noix avec des pierres et transmet ses gestes de génération en génération.",
        "En s'approchant des chimpanzés, des enfants apprennent à regarder autrement ces voisins si proches de nous — et la forêt qui les abrite.",
        "Une histoire sur le respect du vivant et la frontière fragile entre les hommes et les grands singes.",
        "Pati — Aventure · 10–12 ans",
      ],
      en: [
        "At the edge of the Bossou forest lives a quiet people who crack nuts with stones and pass their gestures down through generations.",
        "Drawing closer to the chimpanzees, children learn to see these neighbors — so much like us — and the forest that shelters them, with new eyes.",
        "A story about respecting all living things and the fragile line between humans and great apes.",
        "Pati — Aventure · ages 10–12",
      ],
      ar: [
        "على أطراف غابة Bossou يعيش شعبٌ هادئ، يكسر الجوز بالحجارة ويتوارث حركاته جيلًا بعد جيل.",
        "وباقترابهم من الشمبانزي، يتعلّم الأطفال أن ينظروا بعينٍ جديدة إلى هؤلاء الجيران القريبين منّا، وإلى الغابة التي تحتضنهم.",
        "حكاية عن احترام كلّ كائنٍ حيّ، وعن الحدّ الهشّ بين البشر والقردة العليا.",
        "Pati — Aventure · ١٠–١٢ سنة",
      ],
      zh: [
        "在 Bossou 森林的边缘，住着一个安静的族群：它们用石头敲开坚果，把动作一代代传下去。",
        "当孩子们走近这些黑猩猩，他们学会用全新的眼光去看这些与我们如此相像的邻居，以及庇护它们的森林。",
        "一个关于尊重生命、关于人与类人猿之间脆弱界线的故事。",
        "Pati — Aventure · 10–12 岁",
      ],
    },
  },

  "laye-kouroussa": {
    tagline: {
      fr: "À Kouroussa, un garçon regarde son père forger l'or — il deviendra l'un des plus grands écrivains d'Afrique.",
      en: "In Kouroussa, a boy watches his father forge gold — he will become one of Africa's greatest writers.",
      ar: "في Kouroussa، يراقب صبيٌّ أباه وهو يطرق الذهب — وسيصير أحد أعظم كُتّاب إفريقيا.",
      zh: "在 Kouroussa，一个男孩看着父亲锻造黄金——他日后将成为非洲最伟大的作家之一。",
    },
    blurb: {
      fr: [
        "À Kouroussa, Laye grandit entre l'atelier de son père forgeron, les champs de riz et les secrets qu'on se transmet tout bas.",
        "De l'enfance d'un garçon ordinaire naîtra une œuvre immense. Découvre les souvenirs qui ont nourri une légende de la littérature.",
        "Une histoire sur l'enfance, la transmission et la magie du quotidien guinéen.",
        "Pati — Aventure · 10–12 ans · d'après « L'Enfant noir » de Camara Laye",
      ],
      en: [
        "In Kouroussa, Laye grows up between his blacksmith father's workshop, the rice fields and the secrets whispered from ear to ear.",
        "From the childhood of an ordinary boy, an immense body of work will be born. Discover the memories that nourished a literary legend.",
        "A story about childhood, transmission and the magic of everyday Guinean life.",
        "Pati — Aventure · ages 10–12 · after Camara Laye's “The African Child”",
      ],
      ar: [
        "في Kouroussa، يكبر Laye بين ورشة أبيه الحدّاد وحقول الأرزّ والأسرار التي تُهمَس من أذنٍ إلى أذن.",
        "من طفولة صبيٍّ عاديّ سيولد أثرٌ أدبيٌّ هائل. اكتشف الذكريات التي غذّت أسطورةً من أساطير الأدب.",
        "حكاية عن الطفولة والتوارث وسحر الحياة اليومية في غينيا.",
        "Pati — Aventure · ١٠–١٢ سنة · عن «الطفل الأسود» لـCamara Laye",
      ],
      zh: [
        "在 Kouroussa，Laye 在打铁的父亲的作坊、稻田，以及人们低声相传的秘密之间长大。",
        "一个普通男孩的童年，将孕育出一部宏大的作品。来认识那些滋养了一位文学传奇的记忆吧。",
        "一个关于童年、传承与几内亚日常生活之奇妙的故事。",
        "Pati — Aventure · 10–12 岁 · 改编自 Camara Laye《黑孩子》",
      ],
    },
  },

  "empereur-enfant": {
    tagline: {
      fr: "Et si, deux siècles avant Colomb, un empereur de Niani avait voulu traverser l'océan ?",
      en: "What if, two centuries before Columbus, an emperor of Niani had set out to cross the ocean?",
      ar: "وماذا لو أنّ إمبراطورًا من Niani، قبل Colomb بقرنين، أراد أن يعبر المحيط؟",
      zh: "倘若在哥伦布之前两个世纪，一位 Niani 的皇帝就曾想横渡大洋呢？",
    },
    blurb: {
      fr: [
        "On raconte qu'un roi de Niani, fasciné par l'horizon, arma une flotte immense pour franchir l'Atlantique — et ne revint jamais.",
        "Entre faits attestés, hypothèses débattues et mystère absolu, Koumba enquête sur la trace de l'empereur Bakary, par-delà l'océan.",
        "Une histoire sur l'audace, la mémoire et les énigmes de l'Histoire — là où la légende et la science se rencontrent.",
        "Pati — Aventure · 10–12 ans",
      ],
      en: [
        "They say a king of Niani, spellbound by the horizon, armed a vast fleet to cross the Atlantic — and never returned.",
        "Between attested facts, debated hypotheses and absolute mystery, Koumba investigates the trail of Emperor Bakary, far beyond the ocean.",
        "A story about daring, memory and the riddles of History — where legend and science meet.",
        "Pati — Aventure · ages 10–12",
      ],
      ar: [
        "يُروى أنّ ملكًا من Niani، سحره الأفق، جهّز أسطولًا هائلًا ليعبر الأطلسي… ولم يَعُد قطّ.",
        "بين وقائعَ مؤكَّدة وفرضيّاتٍ متنازَعٍ فيها وغموضٍ مطلق، تحقّق Koumba في أثر الإمبراطور Bakary، فيما وراء المحيط.",
        "حكاية عن الجرأة والذاكرة وألغاز التاريخ، حيث تلتقي الأسطورة بالعلم.",
        "Pati — Aventure · ١٠–١٢ سنة",
      ],
      zh: [
        "传说 Niani 的一位国王，为地平线所痴迷，装备了一支庞大的舰队要横渡大西洋——却再也没有回来。",
        "在确凿的史实、众说纷纭的假说与彻底的谜团之间，Koumba 追查 Bakary 皇帝越过大洋的踪迹。",
        "一个关于胆识、记忆与历史谜题的故事——在传说与科学交汇之处。",
        "Pati — Aventure · 10–12 岁",
      ],
    },
  },

  "tresor-terres": {
    tagline: {
      fr: "Le vrai trésor de la Guinée n'est pas toujours sous la terre — parfois, il pousse dessus.",
      en: "Guinea's true treasure isn't always underground — sometimes, it grows on top of it.",
      ar: "كنز غينيا الحقيقيّ ليس دائمًا تحت الأرض — أحيانًا ينبت فوقها.",
      zh: "几内亚真正的宝藏并不总在地下——有时，它就生长在地上。",
    },
    blurb: {
      fr: [
        "On parle souvent de l'or et du fer cachés sous le sol. Mais sur la terre rouge, une autre richesse lève à chaque saison : les champs, les vergers, la ferme.",
        "Des enfants découvrent d'où vient ce qu'ils mangent, et tout le travail, le savoir et la patience qu'il faut pour faire pousser un pays.",
        "Une histoire sur l'agriculture et la valeur du sol nourricier — le trésor qui se renouvelle.",
        "Pati — Aventure · 10–12 ans",
      ],
      en: [
        "We often speak of the gold and iron hidden underground. But on the red earth, another wealth rises each season: the fields, the orchards, the farm.",
        "Children discover where their food comes from, and all the work, knowledge and patience it takes to grow a country.",
        "A story about farming and the value of nourishing soil — the treasure that renews itself.",
        "Pati — Aventure · ages 10–12",
      ],
      ar: [
        "كثيرًا ما نتحدّث عن الذهب والحديد المخبّأين تحت الأرض. لكن فوق التربة الحمراء تنهض ثروةٌ أخرى كلّ موسم: الحقول والبساتين والمزرعة.",
        "يكتشف الأطفال من أين يأتي طعامهم، وكم من العمل والمعرفة والصبر يلزم لإنبات بلد.",
        "حكاية عن الزراعة وقيمة التربة المُطعِمة، الكنزِ الذي يتجدّد.",
        "Pati — Aventure · ١٠–١٢ سنة",
      ],
      zh: [
        "人们常谈论埋在地下的黄金与铁矿。可在这片红土之上，每一季都会升起另一种财富：田野、果园与农场。",
        "孩子们发现自己的食物从何而来，以及养育一个国家所需的全部劳作、知识与耐心。",
        "一个关于农业与沃土价值的故事——这是会自我更新的宝藏。",
        "Pati — Aventure · 10–12 岁",
      ],
    },
  },

  "secret-cola": {
    tagline: {
      fr: "Une petite noix amère qui scelle les mariages, honore les hôtes et touche les cœurs : voici le secret de la cola.",
      en: "A small bitter nut that seals marriages, honors guests and touches hearts: here is the secret of the kola.",
      ar: "جوزةٌ صغيرةٌ مُرّة تُبرم الزيجات وتُكرم الضيوف وتلمس القلوب: هذا هو سرّ الكولا.",
      zh: "一枚又苦又小的果实，却能缔结婚姻、款待宾客、打动人心：这就是可乐果的秘密。",
    },
    blurb: {
      fr: [
        "Elle tient dans la main, elle est amère et âpre… et pourtant, dans tout le pays, on l'offre, on la partage, on la respecte.",
        "Pourquoi la noix de cola compte-t-elle autant ? Des enfants remontent le fil de ses vertus et de sa place dans le mariage coutumier malinké.",
        "Une histoire sur la générosité et les gestes qui relient — quand un simple fruit dit tout le sens du partage.",
        "Pati — Aventure · 10–12 ans",
      ],
      en: [
        "It fits in your hand, bitter and sharp… and yet, across the whole country, it is offered, shared and honored.",
        "Why does the kola nut matter so much? Children trace the thread of its virtues and its place in Malinke customary marriage.",
        "A story about generosity and the gestures that bind us — when a simple fruit holds the whole meaning of sharing.",
        "Pati — Aventure · ages 10–12",
      ],
      ar: [
        "تملأ راحة اليد، مُرّةً لاذعة… ومع ذلك، في البلد كلّه، تُهدى وتُتقاسم وتُحترم.",
        "لماذا تحظى جوزة الكولا بكلّ هذه المكانة؟ يتتبّع الأطفال خيط فضائلها ومكانتها في الزواج العرفيّ الماندينغي.",
        "حكاية عن الكرم وعن اللفتات التي تجمع القلوب، حين تختصر ثمرةٌ بسيطةٌ كلّ معنى المشاركة.",
        "Pati — Aventure · ١٠–١٢ سنة",
      ],
      zh: [
        "它握在手心，又苦又涩……可在整个国家，人们却把它当作礼物、彼此分享、郑重相待。",
        "可乐果为何如此重要？孩子们顺着线索，探寻它的种种功用，以及它在曼丁传统婚礼中的位置。",
        "一个关于慷慨与连结之礼的故事——一枚简单的果实，道尽分享的全部意义。",
        "Pati — Aventure · 10–12 岁",
      ],
    },
  },

  "rever-plus-grand": {
    tagline: {
      fr: "Sidy pétrit le pain de son père chaque nuit — mais ses rêves, eux, montent bien plus haut que la pâte.",
      en: "Sidy kneads his father's bread every night — but his dreams rise far higher than the dough.",
      ar: "يعجن Sidy خبز أبيه كلّ ليلة — لكنّ أحلامه ترتفع أعلى بكثير من العجين.",
      zh: "Sidy 每晚都揉着父亲的面团——可他的梦想，升得比面团高得多。",
    },
    blurb: {
      fr: [
        "Fils de boulanger, Sidy connaît par cœur l'odeur de la farine et le silence des nuits de four.",
        "Mais une question l'empêche de dormir : a-t-on le droit de rêver plus grand que là où l'on est né ? Et que doit-on à ceux qui nous ont élevés ?",
        "Une histoire sur l'ambition et la fidélité aux siens — et sur le courage de tracer sa voie sans renier d'où l'on vient.",
        "Pati — Passage · 13–15 ans",
      ],
      en: [
        "A baker's son, Sidy knows by heart the smell of flour and the silence of nights at the oven.",
        "But one question keeps him awake: are we allowed to dream bigger than the place we were born? And what do we owe those who raised us?",
        "A story about ambition and loyalty to one's own — and the courage to carve your own path without denying where you come from.",
        "Pati — Passage · ages 13–15",
      ],
      ar: [
        "ابنُ خبّاز، يعرف Sidy عن ظهر قلب رائحة الطحين وصمت ليالي الفرن.",
        "لكنّ سؤالًا يؤرّقه: هل يحقّ للمرء أن يحلم أكبر من المكان الذي وُلد فيه؟ وما الذي ندين به لمن ربّونا؟",
        "حكاية عن الطموح والوفاء للأهل، وعن شجاعة شقّ طريقك دون أن تنكر أصلك.",
        "Pati — Passage · ١٣–١٥ سنة",
      ],
      zh: [
        "身为面包师的儿子，Sidy 熟悉面粉的气味，也熟悉守炉之夜的寂静。",
        "可一个问题让他夜不能寐：人能不能梦想得比自己出生的地方更大？我们又欠养育我们的人什么？",
        "一个关于抱负与忠于亲人的故事——以及在不背弃来处的前提下，走出自己道路的勇气。",
        "Pati — Passage · 13–15 岁",
      ],
    },
  },

  "kaback": {
    tagline: {
      fr: "Sur l'île de Kaback, le plus beau coucher de soleil du monde est en danger — des enfants décident de le défendre.",
      en: "On Kaback island, the most beautiful sunset in the world is in danger — and children decide to defend it.",
      ar: "في جزيرة Kaback، أجملُ غروبٍ في العالم مهدَّد — فيقرّر الأطفال الدفاع عنه.",
      zh: "在 Kaback 岛，世上最美的日落正陷入危险——孩子们决定守护它。",
    },
    blurb: {
      fr: [
        "À Kaback, la mer, les rizières et la mangrove se partagent une lumière que personne n'oublie : le plus beau des soleils.",
        "Mais cet équilibre fragile est menacé. Que peuvent des enfants face à ce qui abîme leur île — le sel, l'eau, les gestes de chacun ?",
        "Une histoire sur l'amour d'un territoire et l'écologie du quotidien, là où protéger la nature, c'est se protéger soi-même.",
        "Pati — Passage · 13–15 ans",
      ],
      en: [
        "On Kaback, the sea, the rice paddies and the mangrove share a light no one forgets: the most beautiful of suns.",
        "But that fragile balance is under threat. What can children do against what is harming their island — the salt, the water, everyone's small habits?",
        "A story about loving a homeland and everyday ecology, where protecting nature means protecting yourself.",
        "Pati — Passage · ages 13–15",
      ],
      ar: [
        "في Kaback، يتقاسم البحرُ وحقولُ الأرزّ وغابةُ المانغروف ضوءًا لا يُنسى: أجملَ شمسٍ على الإطلاق.",
        "لكنّ هذا التوازن الهشّ مهدَّد. ماذا يستطيع الأطفال أمام ما يؤذي جزيرتهم — الملح، الماء، وعادات كلّ واحد؟",
        "حكاية عن حبّ الأرض وعن إيكولوجيا الحياة اليومية، حيث حماية الطبيعة هي حماية النفس.",
        "Pati — Passage · ١٣–١٥ سنة",
      ],
      zh: [
        "在 Kaback，大海、稻田与红树林共享着一种令人难忘的光：最美的太阳。",
        "可这脆弱的平衡正受到威胁。面对正在侵蚀小岛的一切——盐、水、每个人的小习惯——孩子们能做什么？",
        "一个关于热爱土地与日常生态的故事：保护自然，就是保护自己。",
        "Pati — Passage · 13–15 岁",
      ],
    },
  },

  "corridorium": {
    tagline: {
      fr: "Sous les monts de Simandou dort le plus grand trésor de fer du monde — et tout un pays retient son souffle.",
      en: "Beneath the Simandou mountains sleeps the world's largest iron treasure — and a whole country holds its breath.",
      ar: "تحت جبال Simandou يرقد أكبر كنزٍ من الحديد في العالم — وبلدٌ بأكمله يحبس أنفاسه.",
      zh: "在 Simandou 群山之下，沉睡着世界上最大的铁矿宝藏——整个国家都屏住了呼吸。",
    },
    blurb: {
      fr: [
        "Des montagnes du Simandou jusqu'à la mer, un immense couloir s'ouvre : rails, trains, machines, et une promesse qui fait rêver la Guinée entière.",
        "Mais à qui profite un trésor ? Des enfants suivent la trace du fer et découvrent les espoirs, les choix et les questions que soulève la richesse d'un sol.",
        "Une histoire sur les ressources, le développement et l'avenir — pour comprendre ce qui se joue sous nos pieds.",
        "Pati — Passage · 13–15 ans",
      ],
      en: [
        "From the Simandou mountains to the sea, a vast corridor opens up: rails, trains, machines — and a promise the whole of Guinea dreams about.",
        "But who does a treasure serve? Children follow the trail of iron and discover the hopes, the choices and the questions that a country's wealth raises.",
        "A story about resources, development and the future — to understand what is at stake beneath our feet.",
        "Pati — Passage · ages 13–15",
      ],
      ar: [
        "من جبال Simandou إلى البحر، ينفتح ممرٌّ هائل: قضبانٌ وقطاراتٌ وآلات، ووعدٌ تحلم به غينيا كلّها.",
        "لكن لمن ينفع الكنز؟ يتتبّع الأطفال أثر الحديد، فيكتشفون الآمال والخيارات والأسئلة التي تثيرها ثروة الأرض.",
        "حكاية عن الموارد والتنمية والمستقبل، لفهم ما يجري تحت أقدامنا.",
        "Pati — Passage · ١٣–١٥ سنة",
      ],
      zh: [
        "从 Simandou 群山到大海，一条巨大的走廊铺展开来：铁轨、列车、机器，还有一个令整个几内亚都为之憧憬的承诺。",
        "可宝藏究竟造福谁？孩子们循着铁矿的踪迹，发现一个国家的财富所带来的希望、选择与疑问。",
        "一个关于资源、发展与未来的故事——读懂我们脚下正在发生的一切。",
        "Pati — Passage · 13–15 岁",
      ],
    },
  },

  "conakry-belle-propre": {
    tagline: {
      fr: "Après la première grande pluie, une classe de Conakry décide que « propre », ça commence par eux.",
      en: "After the first heavy rain, a Conakry classroom decides that “clean” starts with them.",
      ar: "بعد أوّل مطرٍ غزير، يقرّر صفٌّ في Conakry أنّ «النظافة» تبدأ منهم.",
      zh: "在第一场大雨之后，Conakry 的一个班级决定：「干净」要从自己做起。",
    },
    blurb: {
      fr: [
        "La première grande pluie a tout débordé : caniveaux, ordures, une maison effondrée. À l'école, la classe transforme la catastrophe en enquête.",
        "Pourquoi ça recommence chaque année ? Et surtout : qui aurait pu arrêter la chaîne ? De question en question, les élèves cherchent leur part — et décident d'agir.",
        "Une histoire sur la responsabilité partagée et le pouvoir d'agir : « tout le monde », ça ne doit jamais vouloir dire « personne ».",
        "Pati — Passage · 13–15 ans",
      ],
      en: [
        "The first heavy rain overflowed everything: gutters, garbage, a collapsed house. At school, the class turns the disaster into an investigation.",
        "Why does it happen every year? And above all: who could have stopped the chain? Question after question, the students look for their own share — and decide to act.",
        "A story about shared responsibility and the power to act: “everyone” must never come to mean “no one.”",
        "Pati — Passage · ages 13–15",
      ],
      ar: [
        "أوّلُ مطرٍ غزير أفاض كلّ شيء: المجاري، النفايات، وبيتٌ منهار. في المدرسة، يحوّل الصفُّ الكارثةَ إلى تحقيق.",
        "لماذا يتكرّر الأمر كلّ عام؟ والأهمّ: مَن كان يمكنه أن يقطع السلسلة؟ سؤالًا بعد سؤال، يبحث التلاميذ عن نصيبهم… ويقرّرون أن يتحرّكوا.",
        "حكاية عن المسؤولية المشتركة وعن القدرة على الفعل: «الجميع» يجب ألّا تعني أبدًا «لا أحد».",
        "Pati — Passage · ١٣–١٥ سنة",
      ],
      zh: [
        "第一场大雨让一切都漫了出来：排水沟、垃圾，还有一座坍塌的房子。在学校，全班把这场灾难变成了一次调查。",
        "为什么年年如此？更重要的是：谁本可以斩断这条链条？一个问题接一个问题，学生们寻找自己的那一份责任——并决定行动。",
        "一个关于共同责任与行动力的故事：「人人」绝不该变成「没人」。",
        "Pati — Passage · 13–15 岁",
      ],
    },
  },

  "sauver-milo": {
    tagline: {
      fr: "À Kankan, le fleuve Milo a bercé la Mamaya depuis toujours — aujourd'hui, c'est lui qu'il faut sauver.",
      en: "In Kankan, the Milo river has cradled the Mamaya forever — today, it is the river that must be saved.",
      ar: "في Kankan، هدهد نهرُ Milo رقصةَ الـMamaya منذ الأزل — واليوم، النهرُ نفسه هو ما يجب إنقاذه.",
      zh: "在 Kankan，Milo 河自古伴随着 Mamaya 舞——而今天，要拯救的正是这条河。",
    },
    blurb: {
      fr: [
        "À Kankan, le Milo rythme la vie : on y pêche, on y puise, et au son du balafon on y danse la Mamaya, élégante et fière.",
        "Mais le fleuve faiblit, et avec lui c'est tout un art de vivre qui vacille. Des enfants se demandent comment rendre au Milo ce qu'il leur a tant donné.",
        "Une histoire sur l'eau, la culture mandingue et la mémoire d'une ville — quand sauver un fleuve, c'est sauver une identité.",
        "Pati — Passage · 13–15 ans",
      ],
      en: [
        "In Kankan, the Milo river sets the rhythm of life: people fish it, draw from it, and to the sound of the balafon they dance the elegant, proud Mamaya.",
        "But the river is weakening, and with it a whole way of life wavers. Children wonder how to give back to the Milo all it has given them.",
        "A story about water, Mandinka culture and a city's memory — when saving a river means saving an identity.",
        "Pati — Passage · ages 13–15",
      ],
      ar: [
        "في Kankan، يضبط نهرُ Milo إيقاعَ الحياة: منه يصطادون ويستقون، وعلى أنغام البالافون يرقصون الـMamaya، أنيقةً فخورة.",
        "لكنّ النهر يضعف، ومعه يهتزّ أسلوب حياةٍ بأكمله. يتساءل الأطفال كيف يردّون إلى الـMilo بعض ما منحهم.",
        "حكاية عن الماء وثقافة الماندينغ وذاكرة مدينة، حين يصبح إنقاذ نهرٍ إنقاذًا لهويّة.",
        "Pati — Passage · ١٣–١٥ سنة",
      ],
      zh: [
        "在 Kankan，Milo 河掌控着生活的节奏：人们在河里捕鱼、取水，在巴拉风琴的乐声中跳起优雅而自豪的 Mamaya。",
        "可河流正在衰弱，一整套生活方式也随之动摇。孩子们思考着，如何把 Milo 曾给予他们的，回报给它。",
        "一个关于水、曼丁文化与一座城市记忆的故事——拯救一条河，就是拯救一种身份。",
        "Pati — Passage · 13–15 岁",
      ],
    },
  },

  "fendani": {
    tagline: {
      fr: "Mayenie va devenir une femme — et elle découvre qu'on peut l'être pleinement par la parole, le chant et le savoir.",
      en: "Mayenie is becoming a woman — and she discovers one can be one fully through speech, song and knowledge.",
      ar: "توشك Mayenie أن تصير امرأة — وتكتشف أنّ المرء يكون كذلك تمامًا بالكلمة والغناء والمعرفة.",
      zh: "Mayenie 即将成为一名女性——她发现，凭借言语、歌声与知识，便可堂堂正正地成为女人。",
    },
    blurb: {
      fr: [
        "Au seuil de l'âge adulte, Mayenie entend mille voix lui dire qui elle doit devenir, et comment.",
        "Mais au cœur de la « forêt sans douleur », une autre vérité l'attend : qu'on peut grandir entière et fière, sans rien renier de soi.",
        "Une histoire de dignité et de courage sur le passage à l'âge de femme — porté par la parole, le chant et le savoir.",
        "Pati — Passage · 13–15 ans",
      ],
      en: [
        "On the threshold of adulthood, Mayenie hears a thousand voices telling her who she must become, and how.",
        "But at the heart of the “forest without pain,” another truth awaits her: that one can grow up whole and proud, without giving up any part of oneself.",
        "A story of dignity and courage about coming of age as a woman — carried by speech, song and knowledge.",
        "Pati — Passage · ages 13–15",
      ],
      ar: [
        "على عتبة سنّ الرشد، تسمع Mayenie ألف صوتٍ يُملي عليها مَن ينبغي أن تصير، وكيف.",
        "لكن في قلب «الغابة بلا ألم» تنتظرها حقيقةٌ أخرى: أنّ المرء يمكن أن يكبر كاملًا فخورًا، دون أن يتخلّى عن شيءٍ من ذاته.",
        "حكاية كرامةٍ وشجاعة عن عبور الفتاة إلى مرحلة المرأة، تحملها الكلمةُ والغناءُ والمعرفة.",
        "Pati — Passage · ١٣–١٥ سنة",
      ],
      zh: [
        "站在成年的门槛上，Mayenie 听见千百个声音告诉她，该成为什么样的人、又该怎样成为。",
        "可在「无痛之林」的深处，另一个真相在等着她：人可以完整而自豪地长大，无需舍弃自己的任何一部分。",
        "一个关于尊严与勇气的成长故事——以言语、歌声与知识，走向女性的人生。",
        "Pati — Passage · 13–15 岁",
      ],
    },
  },
};

export function getBlurb(slug: string): Blurb | undefined {
  return BLURBS[slug];
}
