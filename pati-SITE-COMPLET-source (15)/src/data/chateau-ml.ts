// « La Guinée — Château d'Eau » : texte intégral structuré, dans 4 langues.
// Source de référence : PDF officiel fourni par l'éditeur. Traductions adaptées aux enfants.
export type Scene = { title: string; text: string[] };
export type BookLang = { title: string; subtitle: string; dir?: "rtl"; sections: Scene[] };

const FR: BookLang = {
  title: "La Guinée — Château d'Eau",
  subtitle: "Les aventures d'ElectroMan · Dès 9 ans",
  sections: [
    { title: "Pourquoi ce livre ?", text: [
      "Ce livre que tu as entre les mains, c'est une aventure un peu folle et très chouette. Il est né d'une idée de l'Atelier Solidaire et du Centre Culturel Franco-Guinéen (CCFG), pour les « 72h du Livre » 2025. Cette année-là, la ville invitée d'honneur, c'est Guéckédou !",
      "Mais ce n'est pas tout : ce livre a un cœur gros comme ça. Tous les bénéfices récoltés serviront à acheter des fournitures scolaires pour des enfants de Guéckédou.",
      "Dans ce livre, tu vas apprendre plein de choses sur l'eau, mais aussi t'amuser avec des jeux, des quiz et un « Peti Dic'Eau » qui explique les mots compliqués." ] },
    { title: "Comment ce livre a-t-il été créé ?", text: [
      "Ce livre a une histoire vraiment spéciale ! Pour le faire, 30 enfants de différentes écoles de Conakry, publiques et privées, ont travaillé ensemble. Répartis en 5 équipes, ils ont écrit l'histoire et fait les dessins.",
      "Ils ont même appris à se servir de l'intelligence artificielle pour créer des images, comme si un ordinateur les aidait à dessiner ce qu'ils imaginaient.",
      "Avant de raconter leur histoire, ils ont cherché plein d'infos sur l'eau en Guinée. Et en cherchant, ils sont tombés sur l'histoire d'un monsieur extraordinaire : Ibrahima Tounkara. Ils ont décidé de lui rendre hommage dans ce livre.",
      "Alors, prêt à plonger dans l'aventure ?" ] },
    { title: "Tout sur l'eau en Guinée", text: [
      "Le savais-tu ? La Guinée est un pays exceptionnel quand il s'agit d'eau. On la surnomme même le « Château d'eau de l'Afrique de l'Ouest » !",
      "Plongeons ensemble à la découverte des secrets et des merveilles de l'eau en Guinée." ] },
    { title: "Pays béni par l'eau", text: [
      "Plus de 15 000 rivières ! Des milliers de cours d'eau serpentent à travers notre beau pays, comme d'innombrables rubans d'argent qui apportent la vie partout où ils passent.",
      "Les sources des grands fleuves : incroyable mais vrai, certains des plus grands fleuves d'Afrique prennent leur source en Guinée. Le Niger, le Sénégal et la Gambie commencent ici leur long voyage, arrosant de nombreux pays avant de se jeter dans l'océan.",
      "La pluie, une amie généreuse : la Guinée reçoit beaucoup de pluie chaque année. Cette eau du ciel remplit nos rivières, arrose nos cultures et garde nos forêts bien vertes." ] },
    { title: "Curiosités aquatiques", text: [
      "Des noms d'eau qui racontent des histoires : chaque rivière, chaque cascade porte souvent un nom qui a un sens dans les langues locales. Parfois, le nom raconte une histoire, décrit la couleur de l'eau ou rappelle un événement passé.",
      "L'eau et les traditions : dans certaines communautés de Guinée, l'eau est sacrée. On organise des cérémonies et des fêtes pour remercier les esprits de l'eau ou pour demander une bonne saison des pluies." ] },
    { title: "Des paysages et de l'énergie", text: [
      "Des paysages façonnés par l'eau : cascades spectaculaires, vallées profondes creusées par les rivières, zones humides pleines d'oiseaux… L'eau a sculpté des paysages magnifiques en Guinée.",
      "L'eau qui donne de l'énergie : la force de l'eau peut être transformée en électricité. Grâce à ses nombreuses rivières, la Guinée a un grand potentiel pour produire encore plus d'énergie propre." ] },
    { title: "Protégeons l'eau, notre trésor bleu !", text: [
      "Même si la Guinée est riche en eau, il faut la protéger. La pollution, la déforestation près des rivières et le gaspillage menacent cette ressource précieuse.",
      "Nous devons tous être responsables pour que l'eau reste propre et disponible, aujourd'hui et demain." ] },
    { title: "Découvrons l'histoire : ElectroMan", text: [
      "Ibrahima Tounkara, un professeur de mathématiques au grand cœur, a marqué l'histoire de son village en y construisant un barrage hydroélectrique grâce à ses propres moyens. Cette initiative est la source de notre récit." ] },
    { title: "Le village de Bolodou", text: [
      "Au sud de la Guinée, dans la région de Nzérékoré où se trouve Guéckédou, se cache le village de Bolodou.",
      "Ici, le joyeux marigot Gbasso chantait une douce mélodie chaque jour, offrant son eau aux paysans dans leurs fermes et ses poissons aux braves pêcheurs." ] },
    { title: "Un garçon curieux", text: [
      "Parmi les enfants de Bolodou, il y avait Ibrahima, un garçon fasciné par les mystères de la science.",
      "Il passait des heures à observer la force tranquille de l'eau, imaginant des choses étonnantes…",
      "Dans sa tête pleine de rêves, une idée brillante commença à germer : utiliser la puissance de l'eau pour apporter la lumière à son village !" ] },
    { title: "Ibrahima n'a jamais abandonné", text: [
      "Son amour pour les sciences et son envie de servir sa communauté l'ont conduit à devenir professeur de mathématiques-physique dans un lycée à Kissidougou.",
      "Mais son projet est resté le même : offrir de la lumière à sa famille à Bolodou. Pour trouver l'argent, il a ouvert, à côté de ses cours, une boutique de panneaux solaires qui marche très bien." ] },
    { title: "On se moque de lui", text: [
      "Quand Ibrahima partagea son idée, beaucoup rirent : « Un professeur de maths, construire un barrage ? Quelle drôle d'idée ! Laisse ça aux experts ! »",
      "Rien de tout cela ne découragea Ibrahima : au contraire, il aimait les défis.",
      "Sa famille, un peu inquiète de ses dépenses, croyait quand même en lui. Sa grand-mère lui rappelait un proverbe soussou : « sobè folè ma yo »." ] },
    { title: "La construction du rêve", text: [
      "Et un jour, avec l'aide d'élèves, de quelques amis et beaucoup d'efforts, Ibrahima commença à construire son rêve au bord du Gbasso.",
      "Il construisit un long canal, comme un toboggan pour l'eau, afin de la guider doucement vers son usine magique. Ce canal d'amenée, en béton solide, utilise la pente pour que l'eau coule." ] },
    { title: "Lumière à Bolodou !", text: [
      "Wéee… tèeee… faaaa… Lumière à Bolodou !",
      "L'électricité jaillit dans les maisons, les écoles et les rues. Les enfants pouvaient enfin lire le soir — grâce à la science et au travail acharné de Monsieur Ibrahima Tounkara, notre héros, notre ElectroMan !" ] },
    { title: "Et toi ?", text: [
      "Mais l'aventure d'ElectroMan ne s'arrête pas là. Il rêve d'apporter la lumière à d'autres villages. Avec plus de volontaires, on peut illuminer toute la région, voire le pays entier !",
      "Et toi ? Qu'est-ce que tu peux imaginer pour aider ta communauté ? L'eau est une source d'énergie incroyable. Peut-être qu'un jour, toi aussi, tu deviendras un ElectroHéros." ] },
    { title: "Comment l'eau devient lumière", text: [
      "Monsieur Tounkara nous a expliqué comment transformer l'eau d'une rivière en lumière pour nos maisons et nos écoles. Une incroyable histoire de science et d'ingéniosité !",
      "1. Le barrage : un grand mur construit en travers de la rivière. Il retient l'eau, qui s'accumule et forme un grand lac — une réserve d'énergie prête à servir.",
      "2. Le canal : un long toboggan en béton qui prend l'eau du lac et la guide doucement vers la centrale.",
      "3. La chambre d'équilibre : un petit bassin où l'eau se calme, pour qu'il en arrive toujours la bonne quantité, comme un robinet géant.",
      "4. La conduite forcée : un grand tuyau où l'eau plonge très vite et prend beaucoup de force.",
      "5. La centrale : l'eau arrive avec force et fait tourner une roue spéciale, la turbine, comme un moulin à eau géant.",
      "6. La lumière ! La turbine fait tourner la dynamo, qui transforme le mouvement en électricité. L'électricité voyage par des fils jusqu'aux maisons… et soudain, la lumière jaillit !" ] },
    { title: "Salut, jeune scientifique !", text: [
      "Tu as entre 9 et 13 ans et la science t'intéresse ? Voici le chemin qui t'attend.",
      "À l'école primaire (ton âge !) : c'est le temps de la curiosité. Pose plein de questions, fais des expériences simples, observe les insectes, fais pousser des graines, lis et regarde des documentaires.",
      "Au collège : tu découvriras la physique, la chimie, la biologie, la géologie, avec des expériences passionnantes.",
      "Au lycée : tu pourras te spécialiser en sciences ou en maths, étudier des circuits électriques, observer des cellules au microscope.",
      "À l'université : tu deviendras un expert. Génie électrique, génie mécanique, génie civil (pour bâtir des barrages !), physique, chimie, ou énergies renouvelables pour sauver la planète !" ] },
    { title: "Le Petit Dic'Eau", text: [
      "Barrage hydroélectrique : une construction qui utilise la force de l'eau pour faire tourner des machines et produire de l'électricité.",
      "Canal d'amenée : comme un toboggan en béton qui guide l'eau de la rivière vers le barrage.",
      "Chambre d'équilibre : un bassin qui s'assure qu'il arrive toujours la bonne quantité d'eau, ni trop ni trop peu.",
      "Conduite forcée : un grand tuyau incliné où l'eau prend beaucoup de vitesse avant la centrale.",
      "Centrale électrique : la « maison » des machines qui transforment la force de l'eau en électricité.",
      "Turbine : une roue à pales qui tourne quand l'eau la frappe avec force.",
      "Dynamo : une machine qui transforme le mouvement de la turbine en électricité, comme la dynamo d'un vélo.",
      "Énergies renouvelables : des énergies qui ne s'épuisent pas, comme l'eau, le soleil ou le vent.",
      "Marigot : un petit cours d'eau, comme le joyeux Gbasso.",
      "Ressources naturelles : les richesses que la nature nous offre — l'eau, le soleil, le vent." ] },
  ],
};

const EN: BookLang = {
  title: "Guinea — Water Tower",
  subtitle: "The Adventures of ElectroMan · Ages 9+",
  sections: [
    { title: "Why this book?", text: [
      "The book in your hands is a slightly crazy and very wonderful adventure. It grew from an idea of L'Atelier Solidaire and the Franco-Guinean Cultural Center (CCFG), for the \"72 Hours of the Book\" 2025. That year, the guest city of honour was Guéckédou!",
      "And there's more: this book has a big heart. All the money it earns will buy school supplies for children in Guéckédou.",
      "In this book you will learn lots about water, but also have fun with games, quizzes and a \"Little Water Dictionary\" that explains the tricky words." ] },
    { title: "How was this book made?", text: [
      "This book has a truly special story! To make it, 30 children from different schools in Conakry, public and private, worked together. In 5 teams, they wrote the story and drew the pictures.",
      "They even learned to use artificial intelligence to create images, as if a computer helped them draw what they imagined.",
      "Before telling their story, they searched for lots of facts about water in Guinea. And along the way, they discovered the story of an extraordinary man: Ibrahima Tounkara. They decided to honour him in this book.",
      "So, ready to dive into the adventure?" ] },
    { title: "All about water in Guinea", text: [
      "Did you know? Guinea is an amazing country when it comes to water. It is even nicknamed the \"Water Tower of West Africa\"!",
      "Let's dive together into the secrets and wonders of water in Guinea." ] },
    { title: "A land blessed with water", text: [
      "More than 15,000 rivers! Thousands of streams wind across our beautiful country, like countless silver ribbons that bring life wherever they flow.",
      "The source of great rivers: hard to believe, but some of Africa's biggest rivers begin in Guinea. The Niger, the Senegal and the Gambia start their long journey here, watering many countries before reaching the ocean.",
      "Rain, a generous friend: Guinea gets a lot of rain every year. This water from the sky fills our rivers, waters our crops and keeps our forests green." ] },
    { title: "Water wonders", text: [
      "Water names that tell stories: every river and waterfall often has a name with a meaning in the local languages. Sometimes the name tells a story, describes the colour of the water, or recalls a past event.",
      "Water and traditions: in some communities of Guinea, water is sacred. Ceremonies and festivals are held to thank the spirits of the water or to ask for a good rainy season." ] },
    { title: "Landscapes and energy", text: [
      "Landscapes shaped by water: spectacular waterfalls, deep valleys carved by rivers, wetlands full of birds… Water has sculpted magnificent landscapes in Guinea.",
      "Water that gives energy: the power of water can be turned into electricity. Thanks to its many rivers, Guinea has great potential to produce even more clean energy." ] },
    { title: "Let's protect water, our blue treasure!", text: [
      "Even though Guinea is rich in water, we must protect it. Pollution, cutting down trees near rivers, and waste all threaten this precious resource.",
      "We must all be responsible, so that water stays clean and available, today and tomorrow." ] },
    { title: "Let's discover the story: ElectroMan", text: [
      "Ibrahima Tounkara, a maths teacher with a big heart, made history in his village by building a hydroelectric dam with his own means. This is where our story begins." ] },
    { title: "The village of Bolodou", text: [
      "In the south of Guinea, in the Nzérékoré region where Guéckédou lies, the village of Bolodou is hidden away.",
      "Here, the cheerful Gbasso stream sang a soft melody every day, giving its water to the farmers in their fields and its fish to the brave fishermen." ] },
    { title: "A curious boy", text: [
      "Among the children of Bolodou was Ibrahima, a boy fascinated by the mysteries of science.",
      "He spent hours watching the quiet power of the water, imagining amazing things…",
      "In his head full of dreams, a bright idea began to grow: to use the power of water to bring light to his village!" ] },
    { title: "Ibrahima never gave up", text: [
      "His love of science and his wish to serve his community led him to become a maths and physics teacher at a high school in Kissidougou.",
      "But his dream stayed the same: to bring light to his family in Bolodou. To find the money, he opened a solar-panel shop alongside his classes, and it did very well." ] },
    { title: "People laughed at him", text: [
      "When Ibrahima shared his idea, many laughed: \"A maths teacher, build a dam? What a funny idea! Leave that to the experts!\"",
      "None of this discouraged Ibrahima — on the contrary, he loved a challenge.",
      "His family, a little worried about his spending, still believed in him. His grandmother reminded him of a Soussou proverb: \"sobè folè ma yo.\"" ] },
    { title: "Building the dream", text: [
      "And one day, with the help of students, a few friends and a lot of effort, Ibrahima began to build his dream beside the Gbasso.",
      "He built a long canal, like a slide for the water, to guide it gently toward his magic workshop. This intake canal, made of solid concrete, uses the slope so the water flows." ] },
    { title: "Light in Bolodou!", text: [
      "Wéee… tèeee… faaaa… Light in Bolodou!",
      "Electricity burst into the houses, the schools and the streets. At last the children could read in the evening — thanks to the science and hard work of Mr Ibrahima Tounkara, our hero, our ElectroMan!" ] },
    { title: "What about you?", text: [
      "But ElectroMan's adventure does not stop there. He dreams of bringing light to other villages. With more volunteers, we can light up the whole region, even the whole country!",
      "And you? What could you imagine to help your community? Water is an incredible source of energy. Maybe one day you too will become an Electro-Hero." ] },
    { title: "How water becomes light", text: [
      "Mr Tounkara explained how to turn the water of a river into light for our homes and schools. An amazing story of science and cleverness!",
      "1. The dam: a great wall built across the river. It holds back the water, which gathers into a big lake — a store of energy ready to use.",
      "2. The canal: a long concrete slide that takes water from the lake and guides it gently toward the power station.",
      "3. The surge chamber: a small pool where the water calms down, so just the right amount always arrives, like a giant tap.",
      "4. The penstock: a big pipe where the water dives down very fast and gains great force.",
      "5. The power station: the water arrives with force and spins a special wheel, the turbine, like a giant water mill.",
      "6. Light! The turbine spins the dynamo, which turns the movement into electricity. The electricity travels along wires to the houses… and suddenly, light appears!" ] },
    { title: "Hello, young scientist!", text: [
      "Are you between 9 and 13 and curious about science? Here is the path ahead of you.",
      "In primary school (your age!): it's the time for curiosity. Ask lots of questions, do simple experiments, watch insects, grow seeds, read and watch documentaries.",
      "In secondary school: you'll discover physics, chemistry, biology and geology, with exciting experiments.",
      "In high school: you can specialise in science or maths, study electric circuits, look at cells under a microscope.",
      "At university: you'll become an expert. Electrical engineering, mechanical engineering, civil engineering (to build dams!), physics, chemistry, or renewable energy to save the planet!" ] },
    { title: "The Little Water Dictionary", text: [
      "Hydroelectric dam: a structure that uses the force of flowing water to turn machines and make electricity.",
      "Intake canal: like a concrete slide that guides water from the river toward the dam.",
      "Surge chamber: a pool that makes sure the right amount of water always arrives, not too much, not too little.",
      "Penstock: a big sloping pipe where water speeds up before reaching the power station.",
      "Power station: the \"house\" of the machines that turn the force of water into electricity.",
      "Turbine: a bladed wheel that spins when water hits it with force.",
      "Dynamo: a machine that turns the turbine's movement into electricity, like a bicycle dynamo.",
      "Renewable energy: energy that never runs out, like water, sun or wind.",
      "Stream (marigot): a small watercourse, like the cheerful Gbasso.",
      "Natural resources: the riches nature gives us — water, sun, wind." ] },
  ],
};

const AR: BookLang = {
  title: "غينيا — خزّان المياه",
  subtitle: "مغامرات إلكترومان · من سن 9 سنوات",
  dir: "rtl",
  sections: [
    { title: "لماذا هذا الكتاب؟", text: [
      "هذا الكتاب الذي بين يديك مغامرة جميلة ومدهشة. وُلد من فكرة «الورشة التضامنية» والمركز الثقافي الفرنسي الغيني، من أجل «٧٢ ساعة للكتاب» سنة ٢٠٢٥، حيث كانت مدينة غيكيدو ضيفة الشرف!",
      "وليس هذا فقط: لهذا الكتاب قلب كبير. كل الأرباح ستُستعمل لشراء أدوات مدرسية لأطفال غيكيدو.",
      "في هذا الكتاب ستتعلّم أشياء كثيرة عن الماء، وستلعب أيضًا وتحلّ ألغازًا، مع «قاموس الماء الصغير» الذي يشرح الكلمات الصعبة." ] },
    { title: "كيف صُنع هذا الكتاب؟", text: [
      "لهذا الكتاب قصة خاصة جدًا! لصنعه، عمل ٣٠ طفلًا من مدارس مختلفة في كوناكري معًا، موزّعين في ٥ فرق، فكتبوا القصة ورسموا الصور.",
      "بل تعلّموا استعمال الذكاء الاصطناعي لصنع الصور، وكأن الحاسوب يساعدهم على رسم ما يتخيّلون.",
      "وقبل أن يرووا قصتهم، بحثوا كثيرًا عن الماء في غينيا. وأثناء البحث اكتشفوا قصة رجل رائع اسمه إبراهيما تونكارا، فقرروا تكريمه في هذا الكتاب.",
      "فهل أنت مستعد للغوص في المغامرة؟" ] },
    { title: "كل شيء عن الماء في غينيا", text: [
      "هل تعلم؟ غينيا بلد استثنائي حين يتعلق الأمر بالماء، حتى إنها تُلقَّب بـ«خزّان مياه غرب إفريقيا»!",
      "لنغُص معًا لاكتشاف أسرار الماء وعجائبه في غينيا." ] },
    { title: "بلد بارك الله ماءه", text: [
      "أكثر من ١٥٠٠٠ نهر! آلاف الجداول تتعرّج عبر بلدنا الجميل، كأشرطة فضية لا تُحصى تجلب الحياة أينما مرّت.",
      "منابع الأنهار الكبرى: من العجيب أن بعض أكبر أنهار إفريقيا تنبع من غينيا. النيجر والسنغال وغامبيا تبدأ رحلتها الطويلة هنا قبل أن تصبّ في المحيط.",
      "المطر صديق كريم: تتلقى غينيا أمطارًا كثيرة كل عام، تملأ أنهارنا وتسقي محاصيلنا وتُبقي غاباتنا خضراء." ] },
    { title: "عجائب مائية", text: [
      "أسماء ماء تحكي قصصًا: لكل نهر وكل شلال اسم له معنى في اللغات المحلية. أحيانًا يحكي الاسم قصة، أو يصف لون الماء، أو يذكّر بحدث قديم.",
      "الماء والتقاليد: في بعض مجتمعات غينيا يُعدّ الماء مقدّسًا. تُقام احتفالات لشكر أرواح الماء أو لطلب موسم أمطار جيد." ] },
    { title: "مناظر وطاقة", text: [
      "مناظر شكّلها الماء: شلالات رائعة، ووديان عميقة حفرتها الأنهار، ومستنقعات مليئة بالطيور… لقد نحت الماء مناظر بديعة في غينيا.",
      "ماء يمنح الطاقة: يمكن تحويل قوة الماء إلى كهرباء. وبفضل أنهارها الكثيرة، تملك غينيا إمكانات كبيرة لإنتاج طاقة نظيفة." ] },
    { title: "لنحمِ الماء، كنزنا الأزرق!", text: [
      "رغم غنى غينيا بالماء، يجب أن نحميه. فالتلوّث وقطع الأشجار قرب الأنهار والإسراف كلها تهدّد هذا المورد الثمين.",
      "علينا جميعًا أن نكون مسؤولين ليبقى الماء نظيفًا ومتوفّرًا، اليوم وغدًا." ] },
    { title: "لنكتشف القصة: إلكترومان", text: [
      "إبراهيما تونكارا، أستاذ رياضيات طيّب القلب، صنع تاريخ قريته ببناء سدّ كهرومائي بإمكاناته الخاصة. من هنا تبدأ قصتنا." ] },
    { title: "قرية بولودو", text: [
      "في جنوب غينيا، في منطقة نزيريكوري حيث تقع غيكيدو، تختبئ قرية بولودو.",
      "هنا كان جدول غباسو المرح يغنّي لحنًا عذبًا كل يوم، يمنح ماءه للفلاحين في حقولهم وسمكه للصيادين الشجعان." ] },
    { title: "صبيّ فضولي", text: [
      "بين أطفال بولودو كان إبراهيما، صبيّ مفتون بأسرار العلم.",
      "كان يقضي ساعات يراقب قوة الماء الهادئة، ويتخيّل أشياء مدهشة…",
      "وفي رأسه المليء بالأحلام، نمت فكرة لامعة: استعمال قوة الماء لجلب النور إلى قريته!" ] },
    { title: "إبراهيما لم يستسلم أبدًا", text: [
      "حبّه للعلم ورغبته في خدمة مجتمعه قاداه ليصبح أستاذ رياضيات وفيزياء في ثانوية بمدينة كيسيدوغو.",
      "لكن حلمه بقي كما هو: أن يجلب النور لعائلته في بولودو. ولجمع المال، فتح بجانب دروسه محلًّا للألواح الشمسية، ونجح نجاحًا كبيرًا." ] },
    { title: "سخروا منه", text: [
      "حين شارك إبراهيما فكرته، ضحك كثيرون: «أستاذ رياضيات يبني سدًّا؟ يا لها من فكرة غريبة! اترك ذلك للخبراء!»",
      "لم يثنِه ذلك أبدًا، بل كان يحبّ التحدّيات.",
      "وعائلته، رغم قلقها من مصاريفه، آمنت به. وكانت جدّته تذكّره بمثل سوسو يقول: «سوبي فولي ما يو»." ] },
    { title: "بناء الحلم", text: [
      "وذات يوم، بمساعدة تلاميذ وبعض الأصدقاء وكثير من الجهد، بدأ إبراهيما يبني حلمه على ضفّة غباسو.",
      "بنى قناة طويلة، كأنها مزلق للماء، تقوده بلطف نحو مصنعه السحري. هذه القناة من خرسانة متينة، وتستعمل الانحدار ليجري الماء." ] },
    { title: "النور في بولودو!", text: [
      "ويي… تيي… فاا… النور في بولودو!",
      "اندفعت الكهرباء إلى البيوت والمدارس والشوارع. وأخيرًا استطاع الأطفال القراءة في المساء — بفضل علم السيد إبراهيما تونكارا وعمله الدؤوب، بطلنا، إلكترومان!" ] },
    { title: "وأنت؟", text: [
      "لكن مغامرة إلكترومان لا تتوقف هنا. فهو يحلم بجلب النور إلى قرى أخرى. وبمزيد من المتطوّعين، يمكننا إنارة المنطقة كلها، بل البلد بأكمله!",
      "وأنت؟ ماذا يمكنك أن تتخيّل لمساعدة مجتمعك؟ الماء مصدر طاقة مذهل. ربما تصبح أنت أيضًا يومًا ما بطلًا للكهرباء." ] },
    { title: "كيف يصير الماء نورًا", text: [
      "شرح لنا السيد تونكارا كيف نحوّل ماء النهر إلى نور لبيوتنا ومدارسنا. قصة مدهشة من العلم والبراعة!",
      "١. السدّ: جدار كبير يُبنى عبر النهر، يحبس الماء فيتجمّع ويكوّن بحيرة كبيرة — مخزون طاقة جاهز.",
      "٢. القناة: مزلق طويل من الخرسانة يأخذ الماء من البحيرة ويقوده بلطف نحو المحطة.",
      "٣. غرفة التوازن: حوض صغير يهدأ فيه الماء، ليصل دائمًا بالقدر المناسب، كحنفية عملاقة.",
      "٤. الأنبوب الضاغط: أنبوب كبير ينحدر فيه الماء بسرعة كبيرة فيكتسب قوة هائلة.",
      "٥. المحطة: يصل الماء بقوة فيُدير عجلة خاصة هي التوربين، كطاحونة ماء عملاقة.",
      "٦. النور! يدير التوربين الدينامو الذي يحوّل الحركة إلى كهرباء، فتسير الكهرباء في الأسلاك إلى البيوت… وفجأة يظهر النور!" ] },
    { title: "مرحبًا أيها العالِم الصغير!", text: [
      "هل عمرك بين ٩ و١٣ سنة والعلم يثير فضولك؟ هذا هو الطريق أمامك.",
      "في المدرسة الابتدائية (عمرك الآن!): إنه زمن الفضول. اطرح أسئلة كثيرة، وأجرِ تجارب بسيطة، وراقب الحشرات، وازرع البذور، واقرأ وشاهد الأفلام الوثائقية.",
      "في الإعدادية: ستكتشف الفيزياء والكيمياء والأحياء والجيولوجيا، بتجارب ممتعة.",
      "في الثانوية: يمكنك التخصّص في العلوم أو الرياضيات، ودراسة الدوائر الكهربائية، ومراقبة الخلايا بالمجهر.",
      "في الجامعة: ستصبح خبيرًا. هندسة كهربائية، هندسة ميكانيكية، هندسة مدنية (لبناء السدود!)، فيزياء، كيمياء، أو طاقات متجددة لإنقاذ الكوكب!" ] },
    { title: "قاموس الماء الصغير", text: [
      "السدّ الكهرومائي: منشأة تستعمل قوة الماء الجاري لتدوير الآلات وإنتاج الكهرباء.",
      "قناة الجرّ: كمزلق خرساني يقود الماء من النهر إلى السدّ.",
      "غرفة التوازن: حوض يضمن وصول القدر المناسب من الماء دائمًا، لا كثيرًا ولا قليلًا.",
      "الأنبوب الضاغط: أنبوب كبير منحدر يكتسب فيه الماء سرعة قبل المحطة.",
      "المحطة الكهربائية: «بيت» الآلات التي تحوّل قوة الماء إلى كهرباء.",
      "التوربين: عجلة بريش تدور حين يصطدم بها الماء بقوة.",
      "الدينامو: آلة تحوّل حركة التوربين إلى كهرباء، كدينامو الدراجة.",
      "الطاقات المتجددة: طاقات لا تنفد، كالماء والشمس والريح.",
      "الجدول (الماريغو): مجرى ماء صغير، مثل غباسو المرح.",
      "الموارد الطبيعية: ما تمنحنا إياه الطبيعة — الماء والشمس والريح." ] },
  ],
};

const ZH: BookLang = {
  title: "几内亚——西非水塔",
  subtitle: "电力侠的冒险 · 9 岁以上",
  sections: [
    { title: "为什么有这本书？", text: [
      "你手中的这本书，是一场有点疯狂又非常美妙的冒险。它来自「团结工坊」和法国—几内亚文化中心（CCFG）的创意，为 2025 年「图书 72 小时」活动而作。那一年的荣誉嘉宾城市是盖凯杜！",
      "不仅如此：这本书还有一颗大大的爱心。它筹得的所有收益，都将用来为盖凯杜的孩子们购买学习用品。",
      "在这本书里，你会学到许多关于水的知识，还能玩游戏、做问答，并有一本「小小水词典」来解释那些较难的词。" ] },
    { title: "这本书是怎么做出来的？", text: [
      "这本书有一个非常特别的故事！为了完成它，科纳克里不同公立和私立学校的 30 个孩子一起合作，分成 5 个小队，写故事，也画插图。",
      "他们甚至学会用人工智能来生成图像，就像电脑帮他们把想象画出来一样。",
      "在讲述故事之前，他们先查找了许多关于几内亚水资源的资料。在查找中，他们发现了一位了不起的人物——易卜拉希马·通卡拉的故事，于是决定在书中向他致敬。",
      "那么，准备好潜入这场冒险了吗？" ] },
    { title: "关于几内亚的水", text: [
      "你知道吗？在水资源方面，几内亚是个了不起的国家，人们甚至称它为「西非的水塔」！",
      "让我们一起潜入，去发现几内亚水的秘密与奇迹。" ] },
    { title: "被水祝福的土地", text: [
      "超过 15000 条河流！成千上万的溪流蜿蜒流过我们美丽的国家，像无数条银色的丝带，把生命带到所经之处。",
      "大河的源头：难以置信但千真万确，非洲一些最大的河流发源于几内亚。尼日尔河、塞内加尔河和冈比亚河都从这里开始漫长的旅程，滋润许多国家后才汇入海洋。",
      "雨水，慷慨的朋友：几内亚每年都有充沛的降雨。这来自天空的水注满河流、灌溉庄稼，让森林常青。" ] },
    { title: "水的奇趣", text: [
      "会讲故事的水名：每条河、每道瀑布往往都有一个在当地语言中含义丰富的名字。有时这名字讲述一个故事，描述水的颜色，或让人想起一件往事。",
      "水与传统：在几内亚的一些社区，水被视为神圣。人们举行仪式和节庆，感谢水的精灵，或祈求一个好的雨季。" ] },
    { title: "风景与能量", text: [
      "被水塑造的风景：壮观的瀑布、被河流切出的深谷、鸟儿成群的湿地……水在几内亚雕刻出绝美的风景。",
      "带来能量的水：水的力量可以转化为电。凭借众多河流，几内亚在生产更多清洁能源方面潜力巨大。" ] },
    { title: "守护水，我们的蓝色宝藏！", text: [
      "尽管几内亚水资源丰富，我们仍要保护它。污染、河边砍树和浪费，都会威胁这份珍贵的资源。",
      "我们每个人都要负起责任，让水保持洁净、长久可用——为了今天，也为了明天。" ] },
    { title: "走进故事：电力侠", text: [
      "易卜拉希马·通卡拉，一位心怀大爱的数学老师，靠自己的力量在村里建起一座水力发电站，从此载入村庄的历史。我们的故事，正是从这里开始。" ] },
    { title: "博洛杜村", text: [
      "在几内亚南部、盖凯杜所在的恩泽雷科雷大区，藏着一个叫博洛杜的村庄。",
      "在这里，欢快的格巴索小河每天唱着轻柔的歌，把河水送给田里辛劳的农民，把鱼儿送给勇敢的渔夫。" ] },
    { title: "好奇的男孩", text: [
      "在博洛杜的孩子中，有一个叫易卜拉希马的男孩，他着迷于科学的奥秘。",
      "他常常一连几个小时观察水那平静的力量，想象着种种奇妙的事……",
      "在他满是梦想的脑海里，一个闪亮的念头开始发芽：用水的力量，为村庄带来光明！" ] },
    { title: "易卜拉希马从未放弃", text: [
      "对科学的热爱和服务社区的心愿，让他成为基西杜古一所高中的数理老师。",
      "但他的梦想始终如一：为博洛杜的家人带来光明。为了筹钱，他在教书之余开了一家太阳能板店，生意非常红火。" ] },
    { title: "人们嘲笑他", text: [
      "当易卜拉希马说出他的想法时，许多人都笑了：「一个数学老师，去建水坝？真是怪点子！这种事还是留给专家吧！」",
      "这些话丝毫没有让他气馁——相反，他喜欢挑战。",
      "他的家人虽然担心花费，却依然相信他。奶奶常对他念起一句苏苏族谚语：「sobè folè ma yo」。" ] },
    { title: "建造梦想", text: [
      "终于有一天，在学生和几位朋友的帮助下，靠着许多努力，易卜拉希马在格巴索河畔开始建造他的梦想。",
      "他修了一条长长的水渠，像给水做的滑梯，把水缓缓引向他那座神奇的「工厂」。这条引水渠用坚固的混凝土筑成，靠坡度让水流动。" ] },
    { title: "博洛杜亮起来了！", text: [
      "嗡——啪——哗——博洛杜，亮了！",
      "电流涌进家家户户、学校和街道。孩子们终于能在夜晚读书了——这一切，多亏了易卜拉希马·通卡拉先生的科学与不懈努力，我们的英雄，我们的电力侠！" ] },
    { title: "那么你呢？", text: [
      "但电力侠的冒险并未就此停下。他梦想把光明带到更多村庄。有了更多志愿者，我们可以点亮整个大区，甚至整个国家！",
      "那么你呢？你能想到什么办法来帮助你的社区？水是一种了不起的能量来源。也许有一天，你也会成为一名「电力小英雄」。" ] },
    { title: "水怎样变成光", text: [
      "通卡拉先生向我们解释，怎样把河里的水变成照亮家和学校的光。这是一个关于科学与智慧的奇妙故事！",
      "1. 水坝：一道横跨河流的大墙，把水拦住，积成一个大湖——一座随时可用的能量储备。",
      "2. 水渠：一条长长的混凝土滑梯，把湖水缓缓引向发电站。",
      "3. 调压室：一个小水池，让水平静下来，使到达的水量总是刚刚好，就像一个巨大的水龙头。",
      "4. 压力水管：一根大管子，水在里面飞快下冲，获得巨大的力量。",
      "5. 发电站：水带着力量冲来，转动一个特别的轮子——水轮机，就像一座巨大的水磨。",
      "6. 光！水轮机带动发电机，把运动变成电。电沿着电线流到各家各户……忽然，光亮了起来！" ] },
    { title: "你好，小小科学家！", text: [
      "你在 9 到 13 岁之间，对科学充满好奇吗？这就是你前方的路。",
      "在小学（也就是现在的你！）：这是充满好奇的时候。多提问，做简单的实验，观察昆虫，种下种子，多读书、多看科普纪录片。",
      "在初中：你会更深入地认识物理、化学、生物和地质，课堂实验也会越来越有趣。",
      "在高中：你可以选择专攻理科或数学，研究电路，用显微镜观察细胞。",
      "在大学：你会成为真正的专家。电气工程、机械工程、土木工程（去建水坝吧！）、物理、化学，或者拯救地球的可再生能源！" ] },
    { title: "小小水词典", text: [
      "水力发电站：一种利用流水的力量带动机器、产生电力的设施。",
      "引水渠：像一条混凝土滑梯，把水从河里引向水坝。",
      "调压室：一个水池，确保到达的水量总是刚好，不多也不少。",
      "压力水管：一根倾斜的大管子，水在到达发电站前在其中加速。",
      "发电站：那些把水的力量变成电的机器所在的「房子」。",
      "水轮机：一个带叶片的轮子，被水有力地冲击时会转动。",
      "发电机（dynamo）：靠水轮机转动、把运动变成电的机器，就像自行车上的小发电机。",
      "可再生能源：不会枯竭的能源，比如水、太阳和风。",
      "小河（marigot）：一条小小的水流，就像欢快的格巴索。",
      "自然资源：大自然给予我们的财富——水、阳光和风。" ] },
  ],
};

export const CHATEAU: Record<string, BookLang> = { fr: FR, en: EN, ar: AR, zh: ZH };

export const CHATEAU_LANGS = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "zh", label: "中文" },
];
