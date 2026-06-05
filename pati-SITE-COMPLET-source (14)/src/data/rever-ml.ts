// « Rêver plus grand que mon père » — L'histoire de Sidy, fils de boulanger — Pati Passage (13–15 ans).
// EXTRAIT : prologue + séquences 1-2 (6 sections). À étendre quand la suite du manuscrit arrivera.
export type ReverLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[] };
type Book = { lang: ReverLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const REVER_ML: Record<ReverLang, Book> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Rêver plus grand que mon père",
    sections: [
      { id: "prologue-pain", title: "Prologue — Le pain et les hommes", paragraphs: [
        "Le soir tombait sur Linsan. Les derniers cars étaient passés, le carrefour respirait enfin, et la grande route, pour une heure, redevenait silencieuse.",
        "Boubacar raclait la sole de son vieux four, les mains blanches de farine et de cendre. Sidy, accroupi près de lui, regardait mourir les braises. C'était l'heure que le garçon préférait : celle où son père, fatigué et content, se mettait parfois à parler.",
        "« Tu as compté les voyageurs, ce matin ? dit Boubacar. Des centaines. Des milliers, sur l'année. Tous, à un moment, ils ont faim. Et un homme qui a faim, mon fils, tu peux lui parler de tout ce que tu veux, il n'écoute pas. Donne-lui d'abord du pain. Après, il t'écoute. »",
        "Il se redressa, s'essuya les mains à son tablier. « Un boulanger, ce n'est pas rien. Les gens croient que c'est petit. Ce n'est pas petit. Tant qu'il y a du pain, les gens tiennent. »" ] },
      { id: "prologue-tierno", title: "Prologue — Deux wakilarè", paragraphs: [
        "Ce soir-là, son père s'assit sur le banc, regarda la nuit monter au-dessus du Konkouré, et raconta autre chose.",
        "« Quand j'avais ton âge, je suis descendu du Foutah avec une natte et rien d'autre. J'étais apprenti chez un boulanger, à Conakry, du côté de Sandervalia. La farine était rare. Je pétrissais la nuit, je dormais trois heures, je recommençais.",
        "« Chaque nuit, un garçon attendait à la porte. Un Foutanké comme moi, sans métier — rien que ses jambes et son culot. Tierno, qu'il s'appelait. Il achetait mes premières baguettes pour les revendre en courant dans les ruelles, avant qu'elles refroidissent.",
        "« On était deux wakilarè. Deux débrouillards : ceux qui se lèvent avant le jour pour arracher leur part. Et entre wakilarè, on ne se vole pas — on se tient. Alors je lui gardais toujours les plus belles, celles du fond du four. “Prends celles-là, elles tiendront chaud plus longtemps.” Lui me regardait dans les yeux : “Un jour, Boubacar, ça comptera.” »",
        "« Ce Tierno, mon fils… c'est aujourd'hui El Hadj Tierno Diallo. »",
        "Le garçon connaissait le nom. Tout le monde le connaissait : les moulins, la tour de Kaloum, les milliers d'emplois.",
        "« Tu ne l'as jamais revu ? — Jamais cherché à le revoir. Ce que je lui ai donné, je le lui ai donné. On ne court pas derrière un homme pour réclamer une bonté. »",
        "Il posa la main sur l'épaule de son fils. « Et tu sais de quoi je suis fier ? Pas qu'il soit riche. Qu'il soit utile. Il nourrit un pays, maintenant. Et quelque part, dans le noir, avant l'aube, c'est un peu de mon pain qui l'a tenu debout au début. Ça, personne ne me l'enlèvera. »",
        "Le four ne fumait plus. Mais quelque chose, dans la poitrine de Sidy, venait de prendre feu." ] },
      { id: "reve", title: "« Quel est ton rêve ? »", paragraphs: [
        "La craie crissa, puis la professeure Mariama Camara s'écarta du tableau. Quatre mots, en grandes lettres : Quel est ton rêve ?",
        "Dehors, un gros-porteur freina au carrefour, et tout le collège trembla un peu. À Linsan, on apprend à parler entre deux klaxons.",
        "« Pas dans dix ans, précisa la professeure. Plus loin. Le rêve qui vous fait lever le matin. »",
        "Sory leva la main. « Footballeur, Madame. En Europe. » Les rires fusèrent. « Moi, je serai Docteure », dit Aïssata, d'abord en soussou, dokotoro, puis en français, comme on traverse un pont. Un autre voulait piloter les avions de Conakry-Gbessia ; une fille rêvait de chanter à la radio. Les rêves se ressemblaient : grands, lointains, faciles à dire en un seul mot.",
        "Sidy, lui, regardait la fenêtre. Il voyait la file de véhicules au pont du Konkouré, et les vendeuses qui couraient le long des cars, des paniers de pain sur la tête. Ce pain-là venait de Kindia, à quatre-vingts kilomètres, monté chaque matin sur le toit des taxis-brousse, déjà tiède, parfois rassis avant midi." ] },
      { id: "adresse", title: "Un rêve qui a une adresse", paragraphs: [
        "« Sidy ? » La voix de la professeure le ramena dans la salle. Toute la classe s'était tournée vers lui.",
        "Il hésita. Son rêve ne tenait pas dans un mot. Il avait peur qu'on le trouve ridicule — ou pire, qu'on le croie honteux du four de son père.",
        "« Je veux bâtir un four », finit-il par dire. Sory pouffa. « Un four ? Comme ton papa ? C'est tout ? »",
        "Sidy ne baissa pas les yeux. « Pas comme le sien. Un grand four. Moderne. Ici, au carrefour, là où passent des milliers de gens chaque jour. Un four à la hauteur de tout ce que mon père sait faire — pour qu'on arrête de faire monter le pain de Kindia, et qu'il sorte chaud, ici, devant eux. »",
        "Le rire de Sory mourut tout seul. Ce n'était pas un rêve d'ailleurs : c'était un rêve d'ici, et il avait un visage, et une adresse.",
        "La professeure Camara reposa sa craie. « Voilà un rêve qu'on peut dessiner, dit-elle doucement. Et tout ce qu'on peut dessiner, Sidy, on peut un jour le construire. »" ] },
      { id: "aube", title: "L'aube au carrefour", paragraphs: [
        "Bien avant le jour, quand le carrefour de Linsan dormait encore, le four, lui, était déjà réveillé.",
        "Sidy connaissait cette heure par cœur : le froid bleu d'avant l'aube, l'odeur de bois brûlé, la pâte que son père retournait sur la table. Boubacar travaillait sans parler, les gestes sûrs de trente ans, et Sidy apprenait en regardant — fendre la boule d'un coup de lame, lire la braise, savoir sans thermomètre que le four était à point.",
        "Le petit four ne donnait que deux fournées avant de faiblir ; alors la fente sur le flanc se mettait à fumer, et il fallait le laisser souffler.",
        "Le jour se levait, et le carrefour s'éveillait d'un coup. La mère de Sidy, Hawa Soumah, installait son étal et commençait sa danse à elle : tendre, rendre la monnaie, héler, compter — plus vite que n'importe quelle calculatrice du marché.",
        "Mais le four du père n'allait pas au rythme du carrefour. À huit heures, les deux fournées étaient vendues, et le carrefour continuait de cracher des affamés. Alors arrivaient, sur le toit des taxis-brousse, les cartons de pain de Kindia — du pain de la veille, tiède au mieux, sec au pire. Les voyageurs l'achetaient quand même : ils n'avaient pas le choix.",
        "Ce matin-là, un grand car de Mamou s'arrêta. Une trentaine de personnes en descendirent, toutes vers l'étal. Hawa n'avait plus une seule baguette. Sidy les vit se rabattre sur le pain froid de Kindia, payer, remonter, repartir. Ce n'était pas de la jalousie ; c'était autre chose. Toute cette faim était passée sous leurs yeux, et ils n'avaient pas pu la nourrir — non pas parce que son père ne savait pas faire le pain, mais parce que le four était trop petit pour le carrefour." ] },
      { id: "cahier", title: "Le cahier", paragraphs: [
        "Il sortit de sa poche un cahier corné. Depuis des semaines, il y notait des chiffres en cachette : combien de cars passaient, à quelle heure, combien de pains chacun aurait pu acheter, à quelle heure le four tombait à sec. Les colonnes s'allongeaient, et elles disaient toutes la même chose.",
        "« Papa. » Sidy tendit le cahier. « Regarde. Si on avait un four qui ne s'éteint jamais… un grand… on nourrirait tout le carrefour. Le pain sortirait chaud, ici, devant eux. Plus jamais celui de Kindia. »",
        "Boubacar essuya ses mains, prit le cahier, le parcourut longtemps. Sidy crut qu'il allait sourire de lui, comme Sory à l'école. Il ne sourit pas.",
        "« Tu as compté tout ça, toi ? — Tous les matins. »",
        "Le père referma le cahier doucement, comme on referme un objet précieux. « Moi, j'ai les mains. Le pain, je le connais. Mais ça — » il posa l'index sur le cahier — « ça, je ne l'ai jamais su faire. Ce four-là, mon fils, ce n'est pas moi qui le bâtirai. »",
        "Il rendit le cahier à Sidy. « C'est toi. »" ] },
    ],
  },
  en: {
    lang: "en", dir: "ltr", label: "English", bookTitle: "Dreaming Bigger Than My Father",
    sections: [
      { id: "prologue-pain", title: "Prologue — Bread and Men", paragraphs: [
        "Evening was falling over Linsan. The last buses had gone through, the crossroads was breathing at last, and the great road, for an hour, fell silent again.",
        "Boubacar was scraping the floor of his old oven, his hands white with flour and ash. Sidy, crouched beside him, watched the embers die. It was the hour the boy loved best: the one when his father, tired and content, would sometimes begin to talk.",
        "\"Did you count the travellers this morning? said Boubacar. Hundreds. Thousands, over a year. All of them, at some point, are hungry. And a hungry man, my son — you can talk to him about anything you like, he won't listen. Give him bread first. After that, he listens.\"",
        "He straightened up, wiped his hands on his apron. \"A baker is not nothing. People think it's a small thing. It is not small. As long as there is bread, people hold on.\"" ] },
      { id: "prologue-tierno", title: "Prologue — Two Wakilarè", paragraphs: [
        "That evening, his father sat down on the bench, watched the night rise over the Konkouré, and told something else.",
        "\"When I was your age, I came down from the Foutah with a sleeping mat and nothing else. I was an apprentice to a baker in Conakry, over in Sandervalia. Flour was scarce then. I kneaded at night, slept three hours, started again.",
        "\"Every night, a boy waited at the door. A Foutanké like me, with no trade — nothing but his legs and his nerve. Tierno, his name was. He bought my first baguettes to resell them, running through the alleys before they cooled.",
        "\"We were two wakilarè. Two hustlers: those who rise before daybreak to seize their share. And between wakilarè, you don't steal from each other — you hold each other up. So I always saved him the finest ones, from the back of the oven. 'Take these, they'll stay warm longer.' He'd look me in the eye: 'One day, Boubacar, this will count.'\"",
        "\"That Tierno, my son… is today El Hadj Tierno Diallo.\"",
        "The boy knew the name. Everyone knew it: the mills, the tower in Kaloum, the thousands of jobs.",
        "\"You never saw him again? — Never tried to. What I gave him, I gave him. You don't run after a man to claim back a kindness.\"",
        "He laid his hand on his son's shoulder. \"And do you know what I'm proud of? Not that he's rich. That he's useful. He feeds a country now. And somewhere, in the dark, before dawn, it was a little of my bread that kept him standing at the start. That, no one can take from me.\"",
        "The oven no longer smoked. But something, in Sidy's chest, had just caught fire." ] },
      { id: "reve", title: "\"What Is Your Dream?\"", paragraphs: [
        "The chalk squeaked, then Professor Mariama Camara stepped back from the board. Four words, in big letters: What is your dream?",
        "Outside, a heavy lorry braked at the crossroads, and the whole school shook a little. In Linsan, you learn to speak between two horn blasts.",
        "\"Not in ten years, the teacher said. Further. The dream that gets you up in the morning.\"",
        "Sory raised his hand. \"Footballer, Madame. In Europe.\" Laughter broke out. \"Me, I'll be a Doctor,\" said Aïssata — first in Soussou, dokotoro, then in French, like crossing a bridge. Another wanted to fly the planes of Conakry-Gbessia; a girl dreamed of singing on the radio. The dreams were alike: big, far away, easy to say in a single word.",
        "Sidy, for his part, was looking out the window. He could see the line of vehicles at the Konkouré bridge, and the women running alongside the buses, baskets of bread on their heads. That bread came from Kindia, eighty kilometres away, carried up each morning on the roofs of bush taxis, already lukewarm, sometimes stale before noon." ] },
      { id: "adresse", title: "A Dream With an Address", paragraphs: [
        "\"Sidy?\" The teacher's voice brought him back into the room. The whole class had turned toward him.",
        "He hesitated. His dream did not fit into one word. He was afraid they'd find it ridiculous — or worse, think he was ashamed of his father's oven.",
        "\"I want to build an oven,\" he finally said. Sory sniggered. \"An oven? Like your dad? That's it?\"",
        "Sidy did not lower his eyes. \"Not like his. A big oven. A modern one. Here, at the crossroads, where thousands of people pass every day. An oven worthy of all my father knows how to do — so we stop hauling bread up from Kindia, and it comes out hot, here, in front of them.\"",
        "Sory's laugh died on its own. It was not a dream of elsewhere: it was a dream of here, and it had a face, and an address.",
        "Professor Camara set down her chalk. \"There's a dream you can draw, she said gently. And everything you can draw, Sidy, you can one day build.\"" ] },
      { id: "aube", title: "Dawn at the Crossroads", paragraphs: [
        "Long before daybreak, when the crossroads of Linsan was still asleep, the oven was already awake.",
        "Sidy knew this hour by heart: the blue cold before dawn, the smell of burnt wood, the dough his father turned over on the table. Boubacar worked without speaking, with the sure gestures of thirty years, and Sidy learned by watching — how to slash the loaf with one stroke of the blade, how to read the embers, how to know, without a thermometer, that the oven was just right.",
        "The little oven could only give two batches before weakening; then the crack in its side began to smoke, and it had to be left to breathe.",
        "Day broke, and the crossroads woke all at once. Sidy's mother, Hawa Soumah, set up her stall and began her own dance: handing over, giving change, calling out, counting — faster than any calculator at the market.",
        "But the father's oven did not keep the rhythm of the crossroads. By eight o'clock, the two batches were sold, and the crossroads kept spilling out hungry people. Then came, on the roofs of the bush taxis, the cartons of Kindia bread — yesterday's bread, lukewarm at best, dry at worst. The travellers bought it anyway: they had no choice.",
        "That morning, a big bus from Mamou stopped. Some thirty people got off, all heading for the stall. Hawa had not a single baguette left. Sidy watched them fall back on the cold Kindia bread, pay, climb back up, leave. It was not jealousy; it was something else. All that hunger had passed before their eyes, and they had not been able to feed it — not because his father couldn't make bread, but because the oven was too small for the crossroads." ] },
      { id: "cahier", title: "The Notebook", paragraphs: [
        "He took a dog-eared notebook from his pocket. For weeks he had been secretly noting figures in it: how many buses passed, at what hour, how much bread each could have bought, at what hour the oven ran dry. The columns grew longer, and they all said the same thing.",
        "\"Papa.\" Sidy held out the notebook. \"Look. If we had an oven that never went out… a big one… we'd feed the whole crossroads. The bread would come out hot, here, in front of them. Never again the Kindia bread.\"",
        "Boubacar wiped his hands, took the notebook, read through it for a long time. Sidy thought he would smile at him, like Sory at school. He did not smile.",
        "\"You counted all this, you? — Every morning.\"",
        "The father closed the notebook gently, the way you close something precious. \"Me, I have the hands. Bread, I know. But this —\" he laid his finger on the notebook — \"this, I never learned to do. That oven, my son, is not one I will build.\"",
        "He handed the notebook back to Sidy. \"It's you.\"" ] },
    ],
  },
  ar: {
    lang: "ar", dir: "rtl", label: "العربية", bookTitle: "أن أحلم أكبر من أبي",
    sections: [
      { id: "prologue-pain", title: "تمهيد — الخبز والناس", paragraphs: [
        "كان المساء يهبط على لينسان. مرّت آخر الحافلات، وتنفّس المفترق أخيرًا، وعادت الطريق الكبرى، لساعة، إلى صمتها.",
        "كان بوبكر يكشط أرضية فرنه القديم، ويداه بيضاوان من الطحين والرماد. وسيدي، جاثيًا قربه، يراقب الجمر وهو يخبو. كانت تلك الساعة التي يحبّها الفتى أكثر: الساعة التي يبدأ فيها أبوه، متعبًا وراضيًا، بالكلام أحيانًا.",
        "«هل عددتَ المسافرين هذا الصباح؟ قال بوبكر. مئات. آلاف في السنة. وكلهم، في لحظة ما، يجوعون. والجائع، يا بنيّ، يمكنك أن تحدّثه عن أي شيء، فلن يصغي. أعطه الخبز أولًا. بعد ذلك، يصغي.»",
        "نهض، ومسح يديه بمئزره. «الخبّاز ليس شيئًا تافهًا. يظنّ الناس أنه أمر صغير. ليس صغيرًا. ما دام هناك خبز، يصمد الناس.»" ] },
      { id: "prologue-tierno", title: "تمهيد — اثنان من الـ«واكيلاري»", paragraphs: [
        "في تلك الليلة، جلس أبوه على المقعد، ونظر إلى الليل وهو يعلو فوق نهر كونكوريه، وحكى شيئًا آخر.",
        "«حين كنتُ في مثل سنّك، نزلتُ من فوتا بحصيرة ولا شيء غيرها. كنتُ صبيًّا عند خبّاز، في كوناكري، في حيّ ساندرفاليا. كان الطحين نادرًا. كنتُ أعجن في الليل، وأنام ثلاث ساعات، ثم أبدأ من جديد.",
        "«كل ليلة، كان صبيّ ينتظر عند الباب. فوتانكيّ مثلي، بلا حرفة — لا يملك إلا ساقيه وجرأته. تيرنو، كان اسمه. كان يشتري أول أرغفتي ليبيعها راكضًا في الأزقّة، قبل أن تبرد.",
        "«كنّا اثنين من الـواكيلاري. اثنين من أصحاب الكدّ: الذين ينهضون قبل الفجر لينتزعوا نصيبهم. وبين الـواكيلاري، لا يسرق أحدنا الآخر — بل يسند أحدنا الآخر. فكنتُ أحتفظ له دائمًا بأجملها، تلك التي من قعر الفرن. “خذ هذه، ستبقى دافئة أطول.” وكان ينظر في عينيّ: “يومًا ما، يا بوبكر، سيكون لهذا قيمة.”»",
        "«ذلك التيرنو، يا بنيّ… هو اليوم الحاج تيرنو ديالو.»",
        "كان الفتى يعرف الاسم. الجميع يعرفه: المطاحن، والبرج في كالوم، وآلاف الوظائف.",
        "«ألم ترَه ثانيةً قطّ؟ — لم أسعَ إلى رؤيته. ما أعطيته إيّاه، أعطيته. لا يركض المرء خلف رجل ليطالبه بردّ معروف.»",
        "وضع يده على كتف ابنه. «وأتعرف بماذا أفتخر؟ ليس بأنه غنيّ. بل بأنه نافع. هو يُطعم بلدًا الآن. وفي مكان ما، في العتمة، قبل الفجر، كان شيءٌ من خبزي هو ما أبقاه واقفًا في البداية. هذا، لا أحد ينتزعه منّي.»",
        "لم يعد الفرن يدخّن. لكن شيئًا ما، في صدر سيدي، كان قد اشتعل للتوّ." ] },
      { id: "reve", title: "«ما هو حلمك؟»", paragraphs: [
        "صرّ الطباشير، ثم ابتعدت المعلّمة مريامة كامارا عن السبورة. أربع كلمات، بأحرف كبيرة: ما هو حلمك؟",
        "في الخارج، كبحت شاحنة ثقيلة عند المفترق، فاهتزّت المدرسة كلها قليلًا. في لينسان، يتعلّم المرء أن يتكلّم بين بوقين.",
        "«لا بعد عشر سنوات، أوضحت المعلّمة. أبعد. الحلم الذي يُنهضكم في الصباح.»",
        "رفع سوري يده. «لاعب كرة قدم يا سيدتي. في أوروبا.» انفجر الضحك. «أنا، سأصير طبيبة»، قالت عيساتا، بالسوسو أولًا، دوكوتورو، ثم بالفرنسية، كمن يعبر جسرًا. وأراد آخر أن يقود طائرات كوناكري-غبيسيا؛ وحلمت فتاة بالغناء في الإذاعة. كانت الأحلام متشابهة: كبيرة، بعيدة، يسهل قولها في كلمة واحدة.",
        "أما سيدي، فكان ينظر إلى النافذة. كان يرى صفّ السيارات عند جسر كونكوريه، والبائعات يركضن بمحاذاة الحافلات، وسلال الخبز على رؤوسهنّ. كان ذلك الخبز يأتي من كينديا، على بُعد ثمانين كيلومترًا، يُرفَع كل صباح فوق سيارات الأجرة الريفية، فاترًا أصلًا، ويابسًا أحيانًا قبل الظهر." ] },
      { id: "adresse", title: "حلمٌ له عنوان", paragraphs: [
        "«سيدي؟» أعاده صوت المعلّمة إلى القاعة. كان الصفّ كله قد التفت نحوه.",
        "تردّد. لم يكن حلمه يتّسع في كلمة واحدة. خاف أن يجدوه سخيفًا — أو أسوأ، أن يظنّوه خجلًا من فرن أبيه.",
        "«أريد أن أبني فرنًا»، قال أخيرًا. قهقه سوري. «فرنًا؟ مثل أبيك؟ هذا كل شيء؟»",
        "لم يخفض سيدي عينيه. «ليس مثل فرنه. فرنًا كبيرًا. حديثًا. هنا، عند المفترق، حيث يمرّ آلاف الناس كل يوم. فرنًا على قدر كل ما يعرف أبي صنعه — حتى نتوقّف عن جلب خبز كينديا، ويخرج الخبز ساخنًا، هنا، أمامهم.»",
        "خمد ضحك سوري من تلقاء نفسه. لم يكن حلمًا من مكان آخر: كان حلمًا من هنا، وله وجه، وله عنوان.",
        "أعادت المعلّمة كامارا طباشيرها. «هذا حلمٌ يمكن أن يُرسَم، قالت بهدوء. وكل ما يمكن رسمه، يا سيدي، يمكن بناؤه يومًا ما.»" ] },
      { id: "aube", title: "الفجر عند المفترق", paragraphs: [
        "قبل النهار بكثير، حين كان مفترق لينسان لا يزال نائمًا، كان الفرن قد استيقظ.",
        "كان سيدي يعرف هذه الساعة عن ظهر قلب: برد ما قبل الفجر الأزرق، ورائحة الخشب المحروق، والعجين الذي يقلبه أبوه على الطاولة. كان بوبكر يعمل بلا كلام، بحركات واثقة عمرها ثلاثون عامًا، وسيدي يتعلّم بالنظر — كيف يشقّ الكرة بضربة شفرة، كيف يقرأ الجمر، كيف يعرف بلا ميزان حرارة أن الفرن قد بلغ نقطته.",
        "لم يكن الفرن الصغير يعطي إلا فُرنتين قبل أن يضعف؛ عندئذٍ يبدأ الشقّ في جانبه بالتدخين، ويجب أن يُترَك ليتنفّس.",
        "كان النهار يبزغ، فيستيقظ المفترق دفعة واحدة. كانت أمّ سيدي، هاوا سوماه، تنصب بسطتها وتبدأ رقصتها هي: تناوِل، تردّ الباقي، تنادي، تعدّ — أسرع من أي آلة حاسبة في السوق.",
        "لكن فرن الأب لم يكن يساير إيقاع المفترق. عند الثامنة، كانت الفُرنتان قد بِيعتا، والمفترق ما زال يقذف الجياع. عندئذٍ تصل، فوق سيارات الأجرة الريفية، صناديق خبز كينديا — خبز الأمس، فاتر في أحسن الأحوال، يابس في أسوئها. كان المسافرون يشترونه رغم ذلك: لم يكن لديهم خيار.",
        "ذلك الصباح، توقّفت حافلة كبيرة من مامو. نزل منها نحو ثلاثين شخصًا، كلهم نحو البسطة. لم يبقَ لدى هاوا رغيف واحد. رأى سيدي المسافرين يلجؤون إلى خبز كينديا البارد، يدفعون، يصعدون، يمضون. لم تكن غيرة؛ كان شيئًا آخر. مرّ كل ذلك الجوع أمام أعينهم، ولم يستطيعوا إطعامه — لا لأن أباه لا يعرف صنع الخبز، بل لأن الفرن كان أصغر من المفترق." ] },
      { id: "cahier", title: "الدفتر", paragraphs: [
        "أخرج من جيبه دفترًا مثنيّ الأطراف. منذ أسابيع، كان يدوّن فيه أرقامًا خِفيةً: كم حافلة تمرّ، وفي أي ساعة، وكم رغيفًا كان كلٌّ يستطيع شراءه، وفي أي ساعة يجفّ الفرن. كانت الأعمدة تطول، وكلها تقول الشيء نفسه.",
        "«أبي.» مدّ سيدي الدفتر. «انظر. لو كان لدينا فرنٌ لا ينطفئ أبدًا… كبير… لأطعمنا المفترق كلّه. لخرج الخبز ساخنًا، هنا، أمامهم. ولا خبز كينديا بعد اليوم.»",
        "مسح بوبكر يديه، وأخذ الدفتر، وتصفّحه طويلًا. ظنّ سيدي أنه سيبتسم ساخرًا منه، كسوري في المدرسة. لم يبتسم.",
        "«أنت عددتَ كل هذا؟ — كل صباح.»",
        "أغلق الأب الدفتر برفق، كما يُغلَق شيءٌ ثمين. «أنا، لديّ اليدان. الخبز، أعرفه. أما هذا —» ووضع سبّابته على الدفتر — «هذا، لم أتعلّم فعله قطّ. ذلك الفرن، يا بنيّ، لستُ أنا من سيبنيه.»",
        "أعاد الدفتر إلى سيدي. «أنت.»" ] },
    ],
  },
  zh: {
    lang: "zh", dir: "ltr", label: "中文", bookTitle: "梦想比父亲更大",
    sections: [
      { id: "prologue-pain", title: "序——面包与人", paragraphs: [
        "夜色落在林桑。最后几班长途车开过去了，十字路口终于喘了口气，那条大路，有一个小时，重又安静下来。",
        "布巴卡尔正刮着他那旧炉子的炉膛，双手沾满面粉和灰白。西迪蹲在他身旁，看着炭火慢慢熄灭。这是男孩最爱的时刻：父亲又累又满足，有时会开口说话的时刻。",
        "「你今早数过过往的旅客吗？布巴卡尔说。几百个。一年下来，几千个。他们每一个，总有饿的时候。而一个饿着肚子的人，我的儿子，你跟他说什么他都不听。先给他面包。之后，他才听你说。」",
        "他直起身，在围裙上擦了擦手。「面包师不是小角色。人们以为这行当很小。它不小。只要有面包，人就撑得住。」" ] },
      { id: "prologue-tierno", title: "序——两个「瓦基拉雷」", paragraphs: [
        "那天晚上，父亲在长凳上坐下，望着夜色在孔库雷河上升起，讲了另一件事。",
        "「我像你这么大的时候，从富塔下来，只带着一张席子，别的什么都没有。我在科纳克里给一个面包师当学徒，在桑德瓦利亚那一带。那时候面粉很稀缺。我夜里揉面，睡三个钟头，再重新开始。",
        "「每天夜里，门口都有一个男孩等着。一个像我一样的富塔人，没有手艺——只有两条腿和一股闯劲。他叫铁尔诺。他买下我最早出炉的法棍，趁还没凉，一路跑着在巷子里转卖。",
        "「我们是两个『瓦基拉雷』。两个能拼搏的人：天没亮就起身、去争自己那一份的人。而『瓦基拉雷』之间，彼此不偷——彼此扶持。所以我总把最好的留给他，炉子最里头的那些。『拿这些，能多暖一会儿。』他会看着我的眼睛：『总有一天，布巴卡尔，这会算数的。』」",
        "「那个铁尔诺，我的儿子……就是今天的阿尔哈吉·铁尔诺·迪亚洛。」",
        "男孩知道这个名字。人人都知道：那些面粉厂，卡卢姆的那座大楼，成千上万个工作岗位。",
        "「你后来再没见过他？——从没想着去见。我给他的，就是给他了。人不该追在一个人后面，去讨回一份好意。」",
        "他把手放在儿子肩上。「你知道我为什么自豪吗？不是因为他富。是因为他有用。他如今在养活一个国家。而在某个地方，在黑暗里，在黎明之前，是我的一点面包，曾在最初撑着他站住了脚。这一点，谁也夺不走。」",
        "炉子不再冒烟了。可在西迪的胸口，有什么东西，刚刚燃了起来。" ] },
      { id: "reve", title: "「你的梦想是什么？」", paragraphs: [
        "粉笔吱地响了一声，然后玛丽亚玛·卡马拉老师从黑板前让开。四个大字：你的梦想是什么？",
        "外面，一辆重型卡车在十字路口刹住，整座中学都微微一震。在林桑，人学会了在两声喇叭之间说话。",
        "「不是十年以后，老师补充道。更远。那个让你早上爬起来的梦想。」",
        "索里抢先举手。「足球运动员，老师。在欧洲。」哄笑响成一片。「我，我要当医生」，艾莎塔说，先用苏苏语，多科托罗，再用法语，像走过一座桥。另一个想开科纳克里-格贝西亚的飞机；一个女孩梦想在电台里唱歌。这些梦想都很像：宏大、遥远，一个词就能说出口。",
        "西迪呢，望着窗外。他看见孔库雷桥那边排着的车队，看见沿着长途车奔跑的小贩，头上顶着一篮篮面包。那些面包来自八十公里外的金迪亚，每天清晨用丛林出租车的车顶运上来，到这儿就只是温的，有时不到中午就硬了。" ] },
      { id: "adresse", title: "一个有地址的梦想", paragraphs: [
        "「西迪？」老师的声音把他拉回了教室。全班都转过头看着他。",
        "他犹豫了。他的梦想，一个词装不下。他怕大家觉得可笑——或者更糟，以为他在为父亲的炉子感到羞耻。",
        "「我想造一座炉子」，他终于说。索里嗤地一笑。「炉子？像你爸那样？就这？」",
        "西迪没有低下眼睛。「不像他的。一座大炉子。现代的。就在这儿，在十字路口，每天有成千上万人经过的地方。一座配得上我父亲全部本事的炉子——好让我们不必再从金迪亚把面包运上来，让它热腾腾地，就在这儿，在他们面前出炉。」",
        "索里的笑声自己熄灭了。这不是一个别处的梦想：这是一个此地的梦想，它有一张脸，还有一个地址。",
        "卡马拉老师放下粉笔。「这是一个可以画出来的梦想，她轻声说。而一切你能画出来的东西，西迪，总有一天，你能把它造出来。」" ] },
      { id: "aube", title: "十字路口的黎明", paragraphs: [
        "天还远没有亮，林桑的十字路口仍在沉睡时，炉子，却已经醒了。",
        "西迪把这个时辰记得滚瓜烂熟：黎明前那种蓝色的寒冷，烧木头的气味，父亲在台子上翻动的面团。布巴卡尔不说话地干着，三十年练就的手势稳稳当当，西迪在一旁看着学——怎样一刀划开面团，怎样看懂炭火，怎样不用温度计就知道炉温正好。",
        "那小炉子只能出两炉就乏了；接着，侧面的裂缝便开始冒烟，得让它歇口气。",
        "天亮了，十字路口一下子苏醒。西迪的母亲哈瓦·苏马摆开她的摊子，开始她自己的那支舞：递面包，找零钱，吆喝，算账——比市场上任何一台计算器都快。",
        "可父亲的炉子，跟不上十字路口的节奏。八点钟，两炉都卖光了，而十字路口还在不停地吐出饿着肚子的人。于是，丛林出租车的车顶上，运来一箱箱金迪亚的面包——隔夜的面包，好的时候是温的，差的时候是干硬的。旅客们还是买了：他们没有选择。",
        "那天早上，一辆从马穆来的大客车停下。下来三十来人，全奔向摊子。哈瓦连一根法棍都没剩。西迪看着他们退而求其次，买了金迪亚那冰冷的面包，付钱，上车，离开。这不是嫉妒；是别的东西。所有那些饥饿从他们眼前经过，而他们没能喂饱它——不是因为他父亲不会做面包，而是因为，那炉子，对这个十字路口来说，太小了。" ] },
      { id: "cahier", title: "那个本子", paragraphs: [
        "他从口袋里掏出一个卷了角的本子。几个星期以来，他一直偷偷在上面记数字：多少辆车经过，在几点，每辆车的人本可以买多少面包，炉子在几点见了底。一列列数字越拉越长，而它们说的都是同一件事。",
        "「爸爸。」西迪递上本子。「你看。要是我们有一座永不熄灭的炉子……一座大的……我们就能喂饱整个十字路口。面包会热腾腾地，就在这儿，在他们面前出炉。再也不用金迪亚的了。」",
        "布巴卡尔擦了擦手，接过本子，看了很久。西迪以为他会像学校里的索里那样笑话他。他没有笑。",
        "「这些都是你数的？——每天早上。」",
        "父亲轻轻合上本子，像合上一件珍贵的东西。「我，我有这双手。面包，我懂。可这个——」他把食指按在本子上——「这个，我从来不会。那座炉子，我的儿子，不会是我来造。」",
        "他把本子还给西迪。「是你。」" ] },
    ],
  },
};
