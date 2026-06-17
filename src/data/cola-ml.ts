// « Le secret magique qui touche les cœurs » — Fatoumata Diaraye Cissé, illustrations Mady Camara.
// Collection Pati · Éditions Solidaires — album documentaire-narratif sur la noix de cola.
// FR posé en premier (texte maître fidèle) ; EN / AR / ZH à ajouter ensuite.
// NB : quelques points restent à valider avec l'autrice (chant maninka sans traduction, formules complétées
// au plus proche du sens) — voir le récap remis à Moh.
export type ColaLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[]; image?: string };
type Book = { lang: ColaLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const COLA_ML: Partial<Record<ColaLang, Book>> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le secret magique qui touche les cœurs",
    sections: [
      { id: "s1", title: "Un fruit qui relie les peuples", paragraphs: [
        "Depuis toujours, l'Homme utilise les moyens que lui offre la nature pour se nourrir, se soigner, ou encore tisser des liens avec ses voisins. La noix de cola, fruit tropical par excellence, est un exemple pour faciliter les échanges entre les peuples d'Afrique." ] },
      { id: "s2", title: "D'où vient la noix de cola", paragraphs: [
        "La noix de cola nous vient du colatier, un arbre fruitier originaire des forêts africaines. La cabosse du colatier contient des graines appelées noix de cola. Amère et âpre au goût, la cola est très aimée en Afrique, surtout chez les adultes et les personnes âgées." ] },
      { id: "s3", title: "Une monnaie, puis une marchandise", paragraphs: [
        "La noix de cola a longtemps servi de monnaie d'échange, au même titre que le cauris et le sel. Mais elle devint très tôt elle-même une marchandise." ] },
      { id: "s4", title: "Un produit vital", paragraphs: [
        "La noix de cola a été, pendant des siècles, un produit vital en Afrique, grâce à ses propriétés médicinales et curatives, dont la plupart ont été confirmées par des études cliniques." ] },
      { id: "s5", title: "Ses vertus", paragraphs: [
        "La cola contient des éléments essentiels : la caféine et la kolatine. Ceux-ci stimulent les nerfs et le corps, ce qui lui confère des vertus diurétiques et cardiotoniques.",
        "La noix de cola peut être mâchée crue, ou infusée après broyage. Elle est utilisée en cas de rhume, de fatigue physique ou intellectuelle. Elle aide également à mieux digérer après un repas." ] },
      { id: "s6", title: "Le symbole de la générosité", paragraphs: [
        "Elle est souvent le symbole de la générosité, utilisée pour souhaiter la bienvenue aux étrangers." ] },
      { id: "s7", title: "De la cola au Coca-Cola", paragraphs: [
        "Elle est à l'origine d'une célèbre boisson appelée « Coca-Cola », produite aux États-Unis d'Amérique par le Dr Pemberton à l'aide de feuilles de coca et de noix de cola. Cette boisson est consommée par des millions de personnes dans le monde.",
        "Depuis, nombreuses sont les compagnies qui désirent reproduire le succès de la marque. La cola est ainsi l'un des ingrédients les plus demandés du secteur de la boisson." ] },
      { id: "s8", title: "Un trait d'union social", paragraphs: [
        "La noix de cola, par-delà les disparités sociales, favorise la paix dans la société. Elle contribue à créer, maintenir et consolider des liens sociaux, tout en instaurant au sein des communautés un climat de considération mutuelle." ] },
      { id: "s9", title: "Le chant de la cola", paragraphs: [
        "♪ Yoli yoliyo badara / Yoli yoliyo badara / Maamaya gnokhoun / Nso ma m'mini ma / Mama so cola ra mini / A na Bankhikoui / Mama so cola ra mini / A natandé ma / Mama so cola ra mini / Yoli yoliyo badara",
        "(Chant en maninka — traduction française à venir.)" ] },
      { id: "s10", title: "La cola et l'apprentissage", paragraphs: [
        "Souvent, pour inscrire son enfant dans un centre d'apprentissage d'un métier, ou dans un programme d'initiation, on offre une poignée de noix de cola." ] },
      { id: "s11", title: "Et si on célébrait un mariage ?", paragraphs: [
        "Et si on participait à célébrer un mariage ?" ] },
      { id: "s12", title: "Fanta et Balla", paragraphs: [
        "Fanta et Balla veulent s'unir pour la vie ; mais, pour ce faire, il faut l'accord des parents, surtout celui de Fanta. Et l'ingrédient secret pour rapprocher les deux familles est, bien évidemment, notre noix magique." ] },
      { id: "s13", title: "Woro tan folo", paragraphs: [
        "WORO TAN FOLO…",
        "« An Mbarafen do yé aloubara men baradiyanyen, Moba louf o woro lé ten »",
        "Par un matin ensoleillé, la famille de Balla se met en route pour rencontrer celle de Fanta, afin de s'assurer qu'il n'y a pas d'autres prétendants pour la jeune femme." ] },
      { id: "s14", title: "Gninin kan woro tan", paragraphs: [
        "Il est de coutume, chez les Malinkés, de toujours s'assurer que la prétendante est libre de tout attachement, afin d'éviter d'éventuels conflits. Et seulement après, la famille du prétendant peut poser sa candidature.",
        "GNININ KAN WORO TAN…",
        "« Ni mo ta ko wo gnini kali woro le ten »",
        "Ça y est ! Fanta est libre de tout engagement vis-à-vis d'un autre homme, et sa famille en a informé la famille du prétendant. Cette dernière, ayant reçu la notification, se prépare donc à repartir chez les grands-oncles de Fanta, munie de dix noix de cola, pour leur demander de bien vouloir accorder la main de la jeune femme à leur fils." ] },
      { id: "s15", title: "Woro tan", paragraphs: [
        "WORO TAN",
        "— « Ni mo ta ko alouyé a din an ma » : l'intention de la famille du prétendant.",
        "— « Silabara la ka alouyé » : la notification de la famille de la fille.",
        "Ensuite, les formalités d'usage sont effectuées par le Fouti wali (chargé de protocole), mandaté par la famille de la fille pour s'occuper de l'intégralité des démarches, en compagnie de la famille du prétendant qu'il est censé guider." ] },
      { id: "s16", title: "Foudou sidi — la célébration", paragraphs: [
        "Le jour de la célébration, dix noix de cola réglementaires — plus un autre lot de cola, en guise de marque de considération envers toutes les parties prenantes — sont présentées par la belle-famille. Et l'union coutumière est scellée entre les deux familles, au-delà des conjoints.",
        "Fanta et Balla sont désormais unis par les liens sacrés du mariage. Ils vécurent heureux et eurent beaucoup d'enfants." ] },
      { id: "fin", title: "Pati — Les racines, c'est la Base", paragraphs: [
        "« Partager les ressources de notre Histoire, analyser les faits et les versions, les transcrire, trier le vrai, trouver les non-dits, illustrer pour mieux inspirer. »",
        "Éditions Solidaires." ] },
    ],
  },

  en: {
    lang: "en", dir: "ltr", label: "English", bookTitle: "The Magic Secret That Touches Hearts",
    sections: [
      { id: "s1", title: "A Fruit That Links Peoples", paragraphs: [
        "Since the beginning, humankind has used what nature offers to feed itself, to heal, and to weave bonds with its neighbours. The kola nut, a tropical fruit above all others, is one example that eases exchange among the peoples of Africa." ] },
      { id: "s2", title: "Where the Kola Nut Comes From", paragraphs: [
        "The kola nut comes to us from the kola tree, a fruit tree native to the African forests. The pod of the kola tree holds seeds called kola nuts. Bitter and sharp to the taste, kola is much loved in Africa, especially among adults and the elderly." ] },
      { id: "s3", title: "A Currency, Then a Commodity", paragraphs: [
        "The kola nut long served as a currency of exchange, in the same way as cowries and salt. But very early it became a commodity in its own right." ] },
      { id: "s4", title: "A Vital Product", paragraphs: [
        "For centuries, the kola nut was a vital product in Africa, thanks to its medicinal and curative properties, most of which have been confirmed by clinical studies." ] },
      { id: "s5", title: "Its Virtues", paragraphs: [
        "Kola contains essential elements: caffeine and kolatine. These stimulate the nerves and the body, which gives it diuretic and cardiotonic virtues.",
        "The kola nut can be chewed raw, or infused after grinding. It is used for colds, for physical or mental fatigue. It also helps with digestion after a meal." ] },
      { id: "s6", title: "The Symbol of Generosity", paragraphs: [
        "It is often the symbol of generosity, used to welcome strangers." ] },
      { id: "s7", title: "From Kola to Coca-Cola", paragraphs: [
        "It is the origin of a famous drink called \"Coca-Cola,\" produced in the United States of America by Dr Pemberton using coca leaves and kola nuts. This drink is consumed by millions of people around the world.",
        "Since then, many companies have wished to repeat the brand's success. Kola is thus one of the most sought-after ingredients in the beverage sector." ] },
      { id: "s8", title: "A Social Bond", paragraphs: [
        "The kola nut, beyond social disparities, fosters peace in society. It helps to create, maintain and strengthen social bonds, while establishing within communities a climate of mutual regard." ] },
      { id: "s9", title: "The Song of the Kola", paragraphs: [
        "♪ Yoli yoliyo badara / Yoli yoliyo badara / Maamaya gnokhoun / Nso ma m'mini ma / Mama so cola ra mini / A na Bankhikoui / Mama so cola ra mini / A natandé ma / Mama so cola ra mini / Yoli yoliyo badara",
        "(Song in Maninka — French translation forthcoming.)" ] },
      { id: "s10", title: "Kola and Learning", paragraphs: [
        "Often, to enrol a child in a trade-apprenticeship centre, or in a programme of initiation, one offers a handful of kola nuts." ] },
      { id: "s11", title: "And What If We Celebrated a Wedding?", paragraphs: [
        "And what if we took part in celebrating a wedding?" ] },
      { id: "s12", title: "Fanta and Balla", paragraphs: [
        "Fanta and Balla wish to unite for life; but to do so, the parents' consent is needed, above all that of Fanta. And the secret ingredient to bring the two families together is, of course, our magic nut." ] },
      { id: "s13", title: "Woro tan folo", paragraphs: [
        "WORO TAN FOLO…",
        "« An Mbarafen do yé aloubara men baradiyanyen, Moba louf o woro lé ten »",
        "On a sunny morning, Balla's family sets out to meet Fanta's, to make sure there are no other suitors for the young woman." ] },
      { id: "s14", title: "Gninin kan woro tan", paragraphs: [
        "It is the custom, among the Malinké, always to make sure the bride-to-be is free of any attachment, so as to avoid possible conflicts. And only then may the suitor's family put forward its candidacy.",
        "GNININ KAN WORO TAN…",
        "« Ni mo ta ko wo gnini kali woro le ten »",
        "There it is! Fanta is free of any commitment to another man, and her family has informed the suitor's family. The latter, having received the notification, then prepares to set off again to Fanta's great-uncles, bearing ten kola nuts, to ask them to be so good as to grant the young woman's hand to their son." ] },
      { id: "s15", title: "Woro tan", paragraphs: [
        "WORO TAN",
        "— « Ni mo ta ko alouyé a din an ma »: the intention of the suitor's family.",
        "— « Silabara la ka alouyé »: the notification of the girl's family.",
        "Then the customary formalities are carried out by the Fouti wali (the protocol officer), appointed by the girl's family to handle the whole of the procedure, together with the suitor's family whom he is to guide." ] },
      { id: "s16", title: "Foudou sidi — the Celebration", paragraphs: [
        "On the day of the celebration, ten regulation kola nuts — plus another batch of kola, as a mark of regard toward all the parties — are presented by the in-laws. And the customary union is sealed between the two families, beyond the spouses.",
        "Fanta and Balla are now joined by the sacred bonds of marriage. They lived happily and had many children." ] },
      { id: "fin", title: "Pati — The Roots Are the Base", paragraphs: [
        "\"Sharing the resources of our History, analysing the facts and the versions, transcribing them, sorting out the true, finding the unspoken, illustrating to better inspire.\"",
        "Éditions Solidaires." ] },
    ],
  },

  ar: {
    lang: "ar", dir: "rtl", label: "العربية", bookTitle: "السرّ السحريّ الذي يلامس القلوب",
    sections: [
      { id: "s1", title: "ثمرةٌ تربط الشعوب", paragraphs: [
        "منذ الأزل، يستخدم الإنسان ما تمنحه الطبيعة ليتغذّى، ويتداوى، أو لينسج روابط مع جيرانه. جوزة الكولا، الثمرة الاستوائيّة بامتياز، مثالٌ على تيسير التبادل بين شعوب أفريقيا." ] },
      { id: "s2", title: "من أين تأتي جوزة الكولا", paragraphs: [
        "تأتينا جوزة الكولا من شجرة الكولا، شجرةٍ مثمرة أصلها من غابات أفريقيا. تحتوي ثمرة شجرة الكولا على بذورٍ تُسمّى جوزات الكولا. مُرّةً لاذعة المذاق، الكولا محبوبةٌ جدًّا في أفريقيا، لا سيّما عند الكبار والمسنّين." ] },
      { id: "s3", title: "عملةٌ، ثم سلعة", paragraphs: [
        "خدمت جوزة الكولا طويلًا كعملة تبادل، شأنها شأن الودع والملح. لكنها صارت باكرًا جدًّا سلعةً بذاتها." ] },
      { id: "s4", title: "منتجٌ حيويّ", paragraphs: [
        "كانت جوزة الكولا، طوال قرون، منتجًا حيويًّا في أفريقيا، بفضل خصائصها الطبّيّة والعلاجيّة، التي أكّدت أغلبها دراساتٌ سريريّة." ] },
      { id: "s5", title: "فوائدها", paragraphs: [
        "تحتوي الكولا على عناصر أساسيّة: الكافيين والكولاتين. وهي تُنبّه الأعصاب والجسد، ممّا يمنحها خصائص مُدِرّةً للبول ومقوّيةً للقلب.",
        "يمكن مضغ جوزة الكولا نيئةً، أو نقعها بعد طحنها. تُستخدم في حالات الزكام، والإرهاق الجسديّ أو الذهنيّ. كما تساعد على الهضم بعد الطعام." ] },
      { id: "s6", title: "رمز الكرم", paragraphs: [
        "كثيرًا ما تكون رمز الكرم، تُستخدم للترحيب بالغرباء." ] },
      { id: "s7", title: "من الكولا إلى كوكا-كولا", paragraphs: [
        "هي أصل مشروبٍ شهيرٍ اسمه «كوكا-كولا»، يُنتَج في الولايات المتّحدة الأمريكيّة على يد الدكتور بمبرتون، بأوراق الكوكا وجوزات الكولا. يشربه ملايين الناس في العالم.",
        "ومنذ ذلك الحين، رغبت شركاتٌ كثيرة في تكرار نجاح العلامة. وهكذا صارت الكولا من أكثر المكوّنات طلبًا في قطاع المشروبات." ] },
      { id: "s8", title: "رابطٌ اجتماعيّ", paragraphs: [
        "جوزة الكولا، فوق الفوارق الاجتماعيّة، تعزّز السلام في المجتمع. تسهم في خلق الروابط الاجتماعيّة وصونها وتمتينها، وتُرسي داخل الجماعات مناخًا من الاحترام المتبادل." ] },
      { id: "s9", title: "أُغنية الكولا", paragraphs: [
        "♪ Yoli yoliyo badara / Yoli yoliyo badara / Maamaya gnokhoun / Nso ma m'mini ma / Mama so cola ra mini / A na Bankhikoui / Mama so cola ra mini / A natandé ma / Mama so cola ra mini / Yoli yoliyo badara",
        "(أُغنية بالمانينكا — الترجمة الفرنسيّة لاحقًا.)" ] },
      { id: "s10", title: "الكولا والتعلّم", paragraphs: [
        "كثيرًا ما يُقدَّم، لتسجيل طفلٍ في مركز تعلّم حرفة، أو في برنامج تنشئة، حفنةٌ من جوزات الكولا." ] },
      { id: "s11", title: "وماذا لو احتفلنا بزفاف؟", paragraphs: [
        "وماذا لو شاركنا في الاحتفال بزفاف؟" ] },
      { id: "s12", title: "فانتا وبالا", paragraphs: [
        "تريد فانتا وبالا أن يتّحدا مدى الحياة؛ لكن لذلك، لا بدّ من موافقة الأهل، لا سيّما أهل فانتا. والمكوّن السرّيّ للتقريب بين العائلتين هو، بالطبع، جوزتنا السحريّة." ] },
      { id: "s13", title: "Woro tan folo", paragraphs: [
        "WORO TAN FOLO…",
        "« An Mbarafen do yé aloubara men baradiyanyen, Moba louf o woro lé ten »",
        "في صباحٍ مشمس، تنطلق عائلة بالا للقاء عائلة فانتا، للتأكّد من ألّا خُطّاب آخرين للفتاة." ] },
      { id: "s14", title: "Gninin kan woro tan", paragraphs: [
        "من عادة المالينكي أن يتأكّدوا دائمًا من أنّ المخطوبة حرّةٌ من أيّ ارتباط، تفاديًا لنزاعاتٍ محتملة. وعندئذٍ فقط يمكن لعائلة الخاطب أن تتقدّم بطلبها.",
        "GNININ KAN WORO TAN…",
        "« Ni mo ta ko wo gnini kali woro le ten »",
        "ها قد تمّ! فانتا حرّةٌ من أيّ التزامٍ تجاه رجلٍ آخر، وقد أبلغت عائلتها عائلة الخاطب. وهذه الأخيرة، إذ تلقّت الإخطار، تستعدّ للعودة إلى أعمام فانتا الكبار، حاملةً عشر جوزات كولا، لتطلب منهم أن يتكرّموا بمنح يد الفتاة لابنهم." ] },
      { id: "s15", title: "Woro tan", paragraphs: [
        "WORO TAN",
        "— « Ni mo ta ko alouyé a din an ma »: نيّة عائلة الخاطب.",
        "— « Silabara la ka alouyé »: إخطار عائلة الفتاة.",
        "ثم يتولّى الفوتي والي (المكلّف بالبروتوكول)، المنتدَب من عائلة الفتاة، القيام بكامل الإجراءات، برفقة عائلة الخاطب التي يُفترض أن يرشدها." ] },
      { id: "s16", title: "Foudou sidi — الاحتفال", paragraphs: [
        "يوم الاحتفال، تُقدَّم عشر جوزات كولا نظاميّة — إضافةً إلى دفعةٍ أخرى من الكولا، كعلامة احترامٍ لجميع الأطراف — من قِبَل أهل الصهر. ويُختَم الاتّحاد العُرفيّ بين العائلتين، أبعد من الزوجين.",
        "فانتا وبالا متّحدان الآن برباط الزواج المقدّس. عاشا سعيدين وأنجبا أطفالًا كثيرين." ] },
      { id: "fin", title: "باتي — الجذور هي الأساس", paragraphs: [
        "«مقاسمة موارد تاريخنا، وتحليل الوقائع والروايات، وتدوينها، وغربلة الحقيقة، واكتشاف المسكوت عنه، والرسم لإلهامٍ أفضل.»",
        "Éditions Solidaires." ] },
    ],
  },

  zh: {
    lang: "zh", dir: "ltr", label: "中文", bookTitle: "触动人心的神奇秘密",
    sections: [
      { id: "s1", title: "连结各民族的果实", paragraphs: [
        "自古以来，人类就利用大自然所赐之物来果腹、疗伤，或与邻人结下情谊。可乐果，这最典型的热带果实，便是一个促进非洲各民族交流的例子。" ] },
      { id: "s2", title: "可乐果从何而来", paragraphs: [
        "可乐果来自可乐树，一种原产于非洲森林的果树。可乐树的果荚里含有被称为可乐果的种子。味道苦涩辛辣，可乐果在非洲深受喜爱，尤其在成年人和老年人当中。" ] },
      { id: "s3", title: "先是货币，后成商品", paragraphs: [
        "可乐果长期被用作交换的货币，与贝币和盐并列。但它很早就成了一种商品本身。" ] },
      { id: "s4", title: "一种不可或缺的物产", paragraphs: [
        "数百年来，可乐果一直是非洲不可或缺的物产，因其药用与疗愈的功效——其中大多已得到临床研究的证实。" ] },
      { id: "s5", title: "它的功效", paragraphs: [
        "可乐果含有重要成分：咖啡因和可乐碱。它们能刺激神经和身体，因而赋予它利尿和强心的功效。",
        "可乐果可以生嚼，或磨碎后冲泡。它用于感冒、身体或脑力疲劳。它也有助于饭后消化。" ] },
      { id: "s6", title: "慷慨的象征", paragraphs: [
        "它常常是慷慨的象征，用来欢迎远方的客人。" ] },
      { id: "s7", title: "从可乐果到可口可乐", paragraphs: [
        "它是一种著名饮料「可口可乐」的源头——由彭伯顿医生在美利坚合众国用古柯叶和可乐果制成。这种饮料被全世界千百万人饮用。",
        "自那以后，许多公司都想复制这个品牌的成功。可乐果于是成了饮料行业最抢手的原料之一。" ] },
      { id: "s8", title: "一条社会的纽带", paragraphs: [
        "可乐果超越社会的差异，促进社会的和睦。它有助于建立、维系并巩固社会的纽带，同时在各社群之间营造一种相互尊重的氛围。" ] },
      { id: "s9", title: "可乐果之歌", paragraphs: [
        "♪ Yoli yoliyo badara / Yoli yoliyo badara / Maamaya gnokhoun / Nso ma m'mini ma / Mama so cola ra mini / A na Bankhikoui / Mama so cola ra mini / A natandé ma / Mama so cola ra mini / Yoli yoliyo badara",
        "（马宁卡语歌谣——法文翻译稍后补上。）" ] },
      { id: "s10", title: "可乐果与求学", paragraphs: [
        "往往，为了把孩子送进某个学艺中心，或某个启蒙项目，人们会奉上一把可乐果。" ] },
      { id: "s11", title: "我们来办一场婚礼如何？", paragraphs: [
        "我们来一起庆祝一场婚礼如何？" ] },
      { id: "s12", title: "凡塔与巴拉", paragraphs: [
        "凡塔与巴拉想结为终身伴侣；但要这样，得有双方父母的同意，尤其是凡塔父母的同意。而拉近两个家庭的秘密配方，当然，就是我们这颗神奇的果子。" ] },
      { id: "s13", title: "Woro tan folo", paragraphs: [
        "WORO TAN FOLO……",
        "« An Mbarafen do yé aloubara men baradiyanyen, Moba louf o woro lé ten »",
        "在一个阳光明媚的早晨，巴拉的家人动身去会见凡塔的家人，以确认这位姑娘没有别的求婚者。" ] },
      { id: "s14", title: "Gninin kan woro tan", paragraphs: [
        "在马林凯人当中，习惯上总要确认待嫁的姑娘没有任何婚约牵绊，以免日后可能的纠纷。只有在这之后，求婚者的家人才能正式提亲。",
        "GNININ KAN WORO TAN……",
        "« Ni mo ta ko wo gnini kali woro le ten »",
        "成了！凡塔对任何别的男子都没有婚约，她的家人已通知了求婚者的家人。后者收到通知后，便准备再次前往凡塔的舅公们那里，带上十颗可乐果，请他们恩准把姑娘的手交给自家儿子。" ] },
      { id: "s15", title: "Woro tan", paragraphs: [
        "WORO TAN",
        "——« Ni mo ta ko alouyé a din an ma »：求婚者一方的意愿。",
        "——« Silabara la ka alouyé »：姑娘一方的通知。",
        "然后，惯例的各项手续由富提瓦利（司礼官）来办理——他由姑娘的家人委派，全权处理整个流程，并陪同、引导求婚者的一方。" ] },
      { id: "s16", title: "Foudou sidi — 庆典", paragraphs: [
        "庆典当天，十颗规定的可乐果——外加另一批可乐果，以示对所有相关各方的敬重——由姻亲一方奉上。于是，超越新人本身，习俗的结合在两个家庭之间缔结。",
        "凡塔与巴拉如今由神圣的婚姻纽带结合在一起。他们幸福地生活，养育了许多孩子。" ] },
      { id: "fin", title: "巴提 — 根，就是根基", paragraphs: [
        "「分享我们历史的资源，分析事实与各种说法，把它们记录下来，筛选真相，发现未曾言说的，以图画更好地启迪人心。」",
        "Éditions Solidaires。" ] },
    ],
  },
};
