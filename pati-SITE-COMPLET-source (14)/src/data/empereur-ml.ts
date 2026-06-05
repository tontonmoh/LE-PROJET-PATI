// « L'Empereur qui voulut traverser la mer » — Pati Aventure (10–12 ans).
// Adaptation lisible du manuscrit BD (15 planches), 15 sections alignées sur 4 langues.
export type EmpereurLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[] };
type Book = { lang: EmpereurLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const EMPEREUR_ML: Record<EmpereurLang, Book> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "L'Empereur qui voulut traverser la mer",
    sections: [
      { id: "route", title: "La route vers Siguiri", paragraphs: [
        "Cinq heures du matin. Le 4x4 quitta Conakry, direction Siguiri : huit cents kilomètres, une journée entière de route.",
        "La route grimpa vers le Fouta-Djalon, le château d'eau de l'Afrique de l'Ouest.",
        "— Tu te souviens comment c'était, cette route, il y a dix ans ? Trois jours de souffrance ! soupira la Docteure Koumba Fofana.",
        "— Aujourd'hui on fait Conakry-Kankan en une journée, Docteure. Le pays change, répondit Boubacar.",
        "À Mamou, la porte du Fouta, il était midi. « Tout grandit, tout pousse, songea-t-elle en regardant par la fenêtre. Comme nos plantes médicinales… »",
        "Et enfin, Siguiri : la ville de l'or, la terre des ancêtres Keïta. « Ma petite homonyme va m'attendre, j'en suis sûre », sourit-elle." ] },
      { id: "retrouvailles", title: "Retrouvailles", paragraphs: [
        "— NTÖMAAAA ! cria la petite Koumba en se jetant dans ses bras.",
        "— Eh, ma petite homonyme ! Tu as encore grandi !",
        "— J'ai eu mention au concours, Ntöma !",
        "— Je sais. Et c'est exactement pour ça que j'ai fait huit cents kilomètres !",
        "Son père, Sékou Keïta, s'inclina : — Bienvenue à Siguiri, Docteure. Vous nous faites honneur. — Sékou, arrête. Chez vous, je suis juste Koumba.",
        "Ce soir-là, on parla, on rit, on mangea le riz au gras de Djaka Touré, la maman. Ntöma sortit ses cadeaux, et la petite Koumba s'endormit le sourire aux lèvres.",
        "— Apprends bien, ma fille ! lui lança Ntöma le lendemain. Et reviens-moi avec une question difficile, comme toujours ! — Promis, Ntöma !" ] },
      { id: "question", title: "La question difficile", paragraphs: [
        "Ce matin-là, le cours d'histoire prit une tournure inattendue.",
        "— En 1492, Christophe Colomb découvre l'Amérique, annonça Monsieur Diakité, le maître.",
        "— Maître, demanda Koumba, comment peut-on découvrir un endroit où des gens vivent déjà ? Les Indiens étaient là, non ?",
        "— Eh… c'est ce que dit le manuel, Koumba. On en reparlera, répondit le maître, hésitant.",
        "— Tu l'as cassé, le maître ! murmura son amie Aïssata.",
        "De retour à la maison, Koumba courut vers Ntöma : — J'ai posé ma question difficile ! Le maître n'a pas su répondre !",
        "Ntöma posa son carnet. — Déjà ? Viens, raconte-moi. Tu as posé une grande question. Et tu sais quoi ? J'ai la réponse. Mais ce n'est pas une réponse simple : c'est une histoire qu'on ne raconte pas dans les livres d'école.",
        "— Une histoire de ta famille, ma Koumba. Un Keïta a essayé. Bien avant Colomb." ] },
      { id: "empire", title: "L'empire du Mali", paragraphs: [
        "Il était une fois, il y a sept siècles… Niani, capitale de l'empire du Mali, l'un des plus grands empires que la terre ait connus.",
        "— Et tu sais quoi, Koumba ? Cet empire allait jusqu'ici, à Siguiri. Tes ancêtres marchaient sur cette terre.",
        "À Tombouctou se dressait l'une des plus grandes universités du monde : des savants venus de partout, des centaines de milliers de manuscrits.",
        "— Ntöma, c'est là que tu vas, à Bamako ? — L'Institut de Pharmacopée Traditionnelle de Bamako étudie les plantes que les médecins de Tombouctou utilisaient au temps de Mansa Musa. La science africaine n'a jamais cessé, ma fille. Elle a juste été oubliée." ] },
      { id: "or", title: "L'or de Kankou Moussa", paragraphs: [
        "En 1324, l'empereur Mansa Musa — que l'on appelle aussi Kankou Moussa — partit en pèlerinage à La Mecque.",
        "Il distribua tant d'or au Caire que sa valeur s'effondra pendant plus de dix ans dans tout le monde arabe.",
        "— Les historiens du monde entier disent que Kankou Moussa fut l'homme le plus riche de toute l'histoire de l'humanité.",
        "— De toute l'histoire ?! — De toute l'histoire. Plus riche que tous les rois d'Europe, plus riche que les pharaons d'Égypte." ] },
      { id: "autre-empereur", title: "L'autre empereur", paragraphs: [
        "— Mais avant Mansa Musa, il y avait quelqu'un d'autre. Son cousin. Celui qui régnait avant lui.",
        "— Qui ? — Mansa Bakary. Les chroniqueurs arabes le connaissaient sous un autre nom : Abū Bakr le Deuxième.",
        "Mansa Bakary avait une obsession, une obsession qui allait changer sa vie : l'océan." ] },
      { id: "reve", title: "Le rêve", paragraphs: [
        "Cette nuit-là, l'empereur fit un rêve qui devait changer son destin : il voyait des centaines d'embarcations sur la mer, toutes voguant vers le couchant.",
        "— Mon seigneur, qu'as-tu vu ? demanda son épouse, douce.",
        "— J'ai vu… des bateaux. Des centaines de bateaux. Et tous voguaient vers l'ouest, là où le soleil meurt." ] },
      { id: "chant", title: "Le chant de Naréna", paragraphs: [
        "— Vieux Naréna, dit l'empereur au griot, j'ai fait un rêve : des centaines de pirogues voguant vers le couchant, un fleuve d'or dans l'océan. Que lisent tes ancêtres dans ce songe ?",
        "Alors le vieux griot fit chanter sa kora :",
        "« De l'autre côté de la grande mer, des hommes marchent. Ils ne nous connaissent pas ; nous ne les connaissons pas. Mais la terre est une. La terre a toujours été une.",
        "Ô Mansa, ton rêve n'est pas venu du sommeil. Il est venu de plus loin, du temps qui n'est pas encore.",
        "Si tes pirogues touchent cette rive, si tes hommes tendent la main en paix, deux peuples se regarderont dans les yeux pour la première fois.",
        "Et peut-être que certaines douleurs, que le temps porte en lui comme une pierre, n'auront jamais besoin de tomber. Ô Mansa, va. Le fleuve t'attend. Et l'autre rive aussi. »",
        "— Quelles douleurs, vieux Naréna ? demanda l'empereur à voix basse.",
        "— Celles que je préfère ne jamais avoir à chanter, Mansa. Celles qu'on espère que le fleuve emportera avant qu'elles n'arrivent." ] },
      { id: "fleuve-ocean", title: "Le fleuve dans l'océan", paragraphs: [
        "Un jour, un explorateur revint d'un long voyage vers l'ouest.",
        "— Sire, j'ai parcouru la côte pendant des mois. Tous les pêcheurs racontent la même chose : au loin, dans l'océan, il y a un fleuve qui coule au milieu de la mer. Un courant immense, qui pousse les pirogues vers l'inconnu. Personne n'est jamais revenu pour dire ce qu'il y a au-delà.",
        "— Le fleuve. Comme dans mon rêve. Comme dans la chanson des anciens, murmura l'empereur. Ce fleuve, je veux le voir. Et savoir où il mène." ] },
      { id: "deux-cents", title: "Deux cents pirogues", paragraphs: [
        "L'empereur ordonna la construction de deux cents grandes pirogues, capables de naviguer pendant des mois, avec de l'eau, des vivres, des semences. Leur mission : trouver l'autre rive.",
        "— Allez, mes frères ! Et revenez me dire ce qu'il y a au-delà !",
        "Les pirogues partirent. L'empereur attendait." ] },
      { id: "survivant", title: "Le seul survivant", paragraphs: [
        "Des semaines passèrent. Des mois. Un jour, une seule pirogue revint.",
        "— Mansa ! Une seule pirogue est revenue ! s'écria un conseiller.",
        "Un seul homme en descendit, épuisé.",
        "— Nous avons navigué longtemps. Puis le fleuve dans l'océan… Le courant nous a tous pris. Je suis le seul à avoir pu revenir, souffla le capitaine Diaby.",
        "— Le fleuve. Il existe donc vraiment, dit l'empereur, lentement." ] },
      { id: "abdication", title: "L'abdication", paragraphs: [
        "— Si une pirogue est revenue, alors cette mer peut être traversée. Quelque chose attend de l'autre côté, et je dois le voir de mes propres yeux.",
        "— Sire, vous ne pouvez pas abandonner l'empire ! — C'est de la folie, Mansa ! protestèrent les conseillers.",
        "L'empereur se tourna vers son cousin : — Toi, tu seras un grand Mansa. Tu connais les hommes, les lois, l'or. L'empire sera en bonnes mains.",
        "— Et toi, mon cousin ? demanda Mansa Musa, ému.",
        "— Moi, je vais voir ce que le vieux Naréna a vu dans l'eau du fleuve.",
        "Ce jour-là, l'homme le plus puissant d'Afrique abdiqua son trône, pour aller chercher quelque chose que personne ne savait encore nommer." ] },
      { id: "deux-mille", title: "Deux mille pirogues", paragraphs: [
        "L'empereur ordonna alors la construction de deux mille pirogues. Pas une expédition : une arche. Des marins, des savants, des médecins, des forgerons, des griots, des familles. Des semences, des animaux. Tout ce qu'il faut pour fonder un peuple.",
        "— Que les vents te portent, mon cousin. — Et que tu règnes en sage, mon frère, répondit Mansa Bakary, déjà loin sur l'eau.",
        "Le griot, lui, garda pour lui la suite de la chanson." ] },
      { id: "horizon", title: "L'horizon", paragraphs: [
        "Les chroniqueurs arabes écrivirent ce qu'ils virent. Mais personne ne vit jamais ce qu'il advint. Aucune pirogue ne revint jamais.",
        "— Et c'est ici, ma fille, que les certitudes s'arrêtent." ] },
      { id: "voyage", title: "La question voyage", paragraphs: [
        "— Ntöma… on ne saura jamais ? demanda Koumba, troublée.",
        "— On ne sait pas avec certitude. Mais regarde ce que les chercheurs ont trouvé : des statues aux visages africains au Mexique, des plantes africaines en Amérique avant 1492, et de très anciens récits de peuples autochtones qui parlent d'hommes venus de l'est par la grande mer. Des indices, ma Koumba — débattus, pas prouvés.",
        "— Et après ? — On ne sait pas. Peut-être qu'ils sont repartis. Peut-être qu'ils sont restés. Peut-être que personne n'a jamais su les relier à notre histoire.",
        "— Deux peuples se regarderont dans les yeux pour la première fois, murmura Koumba.",
        "— Qu'est-ce que tu viens de dire, ma fille ? — Je ne sais pas. Ça m'est venu comme ça. (C'était la voix du vieux Naréna, qui voyageait à travers les siècles.)",
        "Le lendemain, au tableau, Koumba écrivit en grandes lettres : « Et si deux humanités s'étaient tendues la main ? »",
        "— Cette question, je la connais aussi, dit Monsieur Diakité, ému. Mais je n'avais jamais osé la poser. Aujourd'hui, grâce à Koumba, nous allons chercher la réponse ensemble.",
        "Et c'est ainsi qu'une histoire de sept siècles recommença à voyager — d'un griot à un empereur, d'une Ntöma à sa filleule, d'une enfant à toute une classe. De génération en génération. Comme les pirogues sur le fleuve." ] },
    ],
  },
  en: {
    lang: "en", dir: "ltr", label: "English", bookTitle: "The Emperor Who Wanted to Cross the Sea",
    sections: [
      { id: "route", title: "The Road to Siguiri", paragraphs: [
        "Five in the morning. The 4x4 left Conakry, heading for Siguiri: eight hundred kilometres, a full day's drive.",
        "The road climbed toward Fouta-Djalon, the water tower of West Africa.",
        "— Do you remember what this road was like ten years ago? Three days of suffering! sighed Doctor Koumba Fofana.",
        "— Today we do Conakry–Kankan in a single day, Doctor. The country is changing, answered Boubacar.",
        "At Mamou, the gateway to Fouta, it was noon. \"Everything grows, everything sprouts,\" she mused, gazing out the window. \"Just like our medicinal plants…\"",
        "And at last, Siguiri: the city of gold, the land of the Keïta ancestors. \"My little namesake will be waiting for me, I'm sure of it,\" she smiled." ] },
      { id: "retrouvailles", title: "The Reunion", paragraphs: [
        "— NTÖMAAAA! cried little Koumba, throwing herself into her arms.",
        "— Hey, my little namesake! You've grown again!",
        "— I passed the entrance exam with honours, Ntöma!",
        "— I know. And that is exactly why I drove eight hundred kilometres!",
        "Her father, Sékou Keïta, bowed: — Welcome to Siguiri, Doctor. You honour us. — Sékou, stop. In your home, I'm just Koumba.",
        "That evening they talked, laughed, and ate Djaka Touré's rich rice. Ntöma brought out her gifts, and little Koumba fell asleep with a smile.",
        "— Study well, my girl! Ntöma called the next morning. And come back to me with a difficult question, as always! — I promise, Ntöma!" ] },
      { id: "question", title: "The Difficult Question", paragraphs: [
        "That morning, the history lesson took an unexpected turn.",
        "— In 1492, Christopher Columbus discovered America, announced Monsieur Diakité, the teacher.",
        "— Sir, asked Koumba, how can you discover a place where people already live? The Indians were there, weren't they?",
        "— Well… that is what the textbook says, Koumba. We'll come back to it, the teacher answered, hesitant.",
        "— You stumped him! whispered her friend Aïssata.",
        "Back home, Koumba ran to Ntöma: — I asked my difficult question! The teacher couldn't answer!",
        "Ntöma set down her notebook. — Already? Come, tell me. You asked a great question. And you know what? I have the answer. But it isn't a simple one: it's a story they don't tell in school books.",
        "— A story about your own family, my Koumba. A Keïta tried. Long before Columbus." ] },
      { id: "empire", title: "The Empire of Mali", paragraphs: [
        "Once upon a time, seven centuries ago… Niani, capital of the Empire of Mali, one of the greatest empires the earth has ever known.",
        "— And you know what, Koumba? That empire reached all the way here, to Siguiri. Your ancestors walked this very land.",
        "In Timbuktu stood one of the greatest universities in the world: scholars from everywhere, hundreds of thousands of manuscripts.",
        "— Ntöma, is that where you're going, to Bamako? — The Institute of Traditional Pharmacopoeia in Bamako studies the plants the doctors of Timbuktu used in the time of Mansa Musa. African science never stopped, my girl. It was only forgotten." ] },
      { id: "or", title: "The Gold of Kankou Moussa", paragraphs: [
        "In 1324, Emperor Mansa Musa — also called Kankou Moussa — set out on pilgrimage to Mecca.",
        "He gave away so much gold in Cairo that its value collapsed for more than ten years across the whole Arab world.",
        "— Historians the world over say Kankou Moussa was the richest man in all of human history.",
        "— In all of history?! — In all of history. Richer than every king of Europe, richer than the pharaohs of Egypt." ] },
      { id: "autre-empereur", title: "The Other Emperor", paragraphs: [
        "— But before Mansa Musa, there was someone else. His cousin. The one who reigned before him.",
        "— Who? — Mansa Bakary. The Arab chroniclers knew him by another name: Abū Bakr the Second.",
        "Mansa Bakary had one obsession, an obsession that would change his life: the ocean." ] },
      { id: "reve", title: "The Dream", paragraphs: [
        "That night, the emperor had a dream that would change his destiny: he saw hundreds of vessels on the sea, all sailing toward the setting sun.",
        "— My lord, what did you see? his wife asked gently.",
        "— I saw… boats. Hundreds of boats. And all of them sailed west, to where the sun dies." ] },
      { id: "chant", title: "Naréna's Song", paragraphs: [
        "— Old Naréna, the emperor said to the griot, I had a dream: hundreds of canoes sailing toward the sunset, a river of gold within the ocean. What do your ancestors read in this dream?",
        "Then the old griot made his kora sing:",
        "\"On the other side of the great sea, men are walking. They do not know us; we do not know them. But the earth is one. The earth has always been one.",
        "O Mansa, your dream did not come from sleep. It came from farther away, from a time not yet born.",
        "If your canoes touch that shore, if your men reach out a hand in peace, two peoples will look into each other's eyes for the first time.",
        "And perhaps some sorrows, which time carries within it like a stone, will never need to fall. O Mansa, go. The river awaits you. And so does the other shore.\"",
        "— What sorrows, old Naréna? the emperor asked in a low voice.",
        "— The ones I would rather never have to sing, Mansa. The ones we hope the river will carry off before they arrive." ] },
      { id: "fleuve-ocean", title: "The River Within the Ocean", paragraphs: [
        "One day, an explorer returned from a long voyage westward.",
        "— Sire, I followed the coast for months. Every fisherman tells the same thing: far out in the ocean, there is a river that flows in the middle of the sea. A vast current that pushes canoes toward the unknown. No one has ever come back to say what lies beyond.",
        "— The river. Like in my dream. Like in the song of the ancients, murmured the emperor. That river — I want to see it, and know where it leads." ] },
      { id: "deux-cents", title: "Two Hundred Canoes", paragraphs: [
        "The emperor ordered two hundred great canoes to be built, able to sail for months, with water, food, and seeds. Their mission: to find the other shore.",
        "— Go, my brothers! And come back to tell me what lies beyond!",
        "The canoes set off. The emperor waited." ] },
      { id: "survivant", title: "The Only Survivor", paragraphs: [
        "Weeks passed. Months. One day, a single canoe returned.",
        "— Mansa! A single canoe has come back! cried a counsellor.",
        "One man climbed out, exhausted.",
        "— We sailed for a long time. Then the river within the ocean… The current took us all. I am the only one who could return, gasped Captain Diaby.",
        "— The river. So it truly exists, said the emperor, slowly." ] },
      { id: "abdication", title: "The Abdication", paragraphs: [
        "— If one canoe came back, then this sea can be crossed. Something waits on the other side, and I must see it with my own eyes.",
        "— Sire, you cannot abandon the empire! — This is madness, Mansa! the counsellors protested.",
        "The emperor turned to his cousin: — You will be a great Mansa. You know men, laws, gold. The empire will be in good hands.",
        "— And you, my cousin? asked Mansa Musa, moved.",
        "— I will go and see what old Naréna saw in the water of the river.",
        "That day, the most powerful man in Africa gave up his throne, to seek something no one yet knew how to name." ] },
      { id: "deux-mille", title: "Two Thousand Canoes", paragraphs: [
        "The emperor then ordered two thousand canoes to be built. Not an expedition: an ark. Sailors, scholars, doctors, blacksmiths, griots, families. Seeds, animals. Everything needed to found a people.",
        "— May the winds carry you, my cousin. — And may you reign wisely, my brother, answered Mansa Bakary, already far out on the water.",
        "As for the griot, he kept the rest of the song to himself." ] },
      { id: "horizon", title: "The Horizon", paragraphs: [
        "The Arab chroniclers wrote down what they saw. But no one ever saw what became of them. Not a single canoe ever returned.",
        "— And it is here, my girl, that certainty stops." ] },
      { id: "voyage", title: "The Question Travels On", paragraphs: [
        "— Ntöma… will we never know? asked Koumba, troubled.",
        "— We do not know for certain. But look at what researchers have found: statues with African faces in Mexico, African plants in America before 1492, and very old stories from native peoples that speak of men who came from the east across the great sea. Clues, my Koumba — debated, not proven.",
        "— And then? — We don't know. Maybe they sailed back. Maybe they stayed. Maybe no one ever managed to link them to our story.",
        "— Two peoples will look into each other's eyes for the first time, murmured Koumba.",
        "— What did you just say, my girl? — I don't know. It just came to me. (It was the voice of old Naréna, travelling across the centuries.)",
        "The next day, on the board, Koumba wrote in big letters: \"What if two humanities had reached out a hand to each other?\"",
        "— I know that question too, said Monsieur Diakité, moved. But I had never dared to ask it. Today, thanks to Koumba, we will look for the answer together.",
        "And so a seven-century-old story set off travelling again — from a griot to an emperor, from a Ntöma to her goddaughter, from a child to a whole class. From generation to generation. Like the canoes on the river." ] },
    ],
  },
  ar: {
    lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الإمبراطور الذي أراد عبور البحر",
    sections: [
      { id: "route", title: "الطريق إلى سيغيري", paragraphs: [
        "الخامسة صباحًا. انطلقت سيارة الدفع الرباعي من كوناكري نحو سيغيري: ثمانمائة كيلومتر، يوم كامل على الطريق.",
        "صعدت الطريق نحو فوتا دجالون، خزّان مياه غرب إفريقيا.",
        "— أتذكرين كيف كانت هذه الطريق قبل عشر سنوات؟ ثلاثة أيام من العذاب! تنهّدت الدكتورة كومبا فوفانا.",
        "— اليوم نقطع كوناكري–كنكان في يوم واحد يا دكتورة. البلد يتغيّر، أجاب بوبكر.",
        "عند مامو، بوابة الفوتا، كان الوقت ظهرًا. «كل شيء ينمو، كل شيء يزهر، تأمّلت وهي تنظر من النافذة. مثل نباتاتنا الطبية…»",
        "وأخيرًا، سيغيري: مدينة الذهب، أرض أجداد كيتا. «حفيدتي الصغيرة التي تحمل اسمي تنتظرني، أنا واثقة»، ابتسمت." ] },
      { id: "retrouvailles", title: "اللقاء", paragraphs: [
        "— نتوماااا! صاحت كومبا الصغيرة وارتمت بين ذراعيها.",
        "— يا حاملة اسمي الصغيرة! لقد كبرتِ من جديد!",
        "— نجحت في المسابقة بامتياز يا نتوما!",
        "— أعرف. ولهذا بالضبط قطعت ثمانمائة كيلومتر!",
        "انحنى والدها سيكو كيتا: — أهلًا بكِ في سيغيري يا دكتورة، شرّفتِنا. — كفى يا سيكو. في بيتكم، أنا مجرد كومبا.",
        "في تلك الليلة تحدّثوا وضحكوا وأكلوا أرزّ دجاكا توري الدسم. أخرجت نتوما هداياها، ونامت كومبا الصغيرة وعلى شفتيها ابتسامة.",
        "— اجتهدي يا ابنتي! نادتها نتوما في الصباح التالي. وعودي إليّ بسؤال صعب، كعادتك! — أعدك يا نتوما!" ] },
      { id: "question", title: "السؤال الصعب", paragraphs: [
        "في ذلك الصباح، أخذ درس التاريخ منعطفًا غير متوقّع.",
        "— في عام 1492 اكتشف كريستوف كولومبوس أمريكا، أعلن السيد دياكيتي، المعلّم.",
        "— يا أستاذ، سألت كومبا، كيف يكتشف المرء مكانًا يعيش فيه الناس أصلًا؟ كان السكان هناك، أليس كذلك؟",
        "— حسنًا… هذا ما يقوله الكتاب يا كومبا. سنعود إلى ذلك، أجاب المعلّم مترددًا.",
        "— لقد أحرجتِه! همست صديقتها عيساتا.",
        "عادت كومبا إلى البيت وركضت نحو نتوما: — طرحت سؤالي الصعب! ولم يعرف المعلّم الجواب!",
        "وضعت نتوما دفترها. — بهذه السرعة؟ تعالي واحكي لي. لقد طرحتِ سؤالًا عظيمًا. وأتعرفين؟ لديّ الجواب. لكنه ليس جوابًا بسيطًا: إنها قصة لا تُروى في كتب المدرسة.",
        "— قصة من عائلتك يا كومبا. أحد آل كيتا حاول. قبل كولومبوس بزمن طويل." ] },
      { id: "empire", title: "إمبراطورية مالي", paragraphs: [
        "كان يا ما كان، قبل سبعة قرون… نياني، عاصمة إمبراطورية مالي، من أعظم الإمبراطوريات التي عرفتها الأرض.",
        "— وأتعرفين يا كومبا؟ كانت هذه الإمبراطورية تمتدّ إلى هنا، إلى سيغيري. كان أجدادك يسيرون على هذه الأرض.",
        "في تمبكتو قامت واحدة من أعظم جامعات العالم: علماء من كل مكان، ومئات الآلاف من المخطوطات.",
        "— نتوما، أهناك تذهبين، إلى باماكو؟ — معهد الصيدلة التقليدية في باماكو يدرس النباتات التي استعملها أطباء تمبكتو في زمن مانسا موسى. العلم الإفريقي لم يتوقّف قط يا ابنتي، بل نُسي فحسب." ] },
      { id: "or", title: "ذهب كانكو موسى", paragraphs: [
        "في عام 1324، خرج الإمبراطور مانسا موسى — ويُسمّى أيضًا كانكو موسى — في الحج إلى مكة.",
        "وزّع في القاهرة ذهبًا كثيرًا حتى انهارت قيمته أكثر من عشر سنوات في العالم العربي كله.",
        "— يقول مؤرّخو العالم كله إن كانكو موسى كان أغنى رجل في تاريخ البشرية كله.",
        "— في التاريخ كله؟! — في التاريخ كله. أغنى من كل ملوك أوروبا، وأغنى من فراعنة مصر." ] },
      { id: "autre-empereur", title: "الإمبراطور الآخر", paragraphs: [
        "— لكن قبل مانسا موسى، كان هناك شخص آخر. ابن عمه. الذي حكم قبله.",
        "— من؟ — مانسا باكاري. عرفه المؤرّخون العرب باسم آخر: أبو بكر الثاني.",
        "كان لمانسا باكاري هوس واحد، هوس سيغيّر حياته: المحيط." ] },
      { id: "reve", title: "الحلم", paragraphs: [
        "في تلك الليلة، رأى الإمبراطور حلمًا سيغيّر مصيره: رأى مئات المراكب على البحر، كلها تبحر نحو مغيب الشمس.",
        "— سيدي، ماذا رأيت؟ سألته زوجته بلطف.",
        "— رأيت… سفنًا. مئات السفن. وكلها تبحر غربًا، حيث تموت الشمس." ] },
      { id: "chant", title: "أنشودة نارينا", paragraphs: [
        "— يا نارينا العجوز، قال الإمبراطور للجريو، رأيت حلمًا: مئات الزوارق تبحر نحو المغيب، ونهرًا من ذهب في المحيط. ماذا يقرأ أجدادك في هذا الحلم؟",
        "عندئذٍ جعل الجريو العجوز قيثارته (الكورا) تغنّي:",
        "«في الجهة الأخرى من البحر العظيم، يسير بشر. لا يعرفوننا، ولا نعرفهم. لكن الأرض واحدة. الأرض كانت دائمًا واحدة.",
        "يا مانسا، حلمك لم يأتِ من النوم. جاء من أبعد، من زمنٍ لم يولد بعد.",
        "إن لمست زوارقك ذلك الشاطئ، وإن مدّ رجالك أيديهم بسلام، فسينظر شعبان في عيون بعضهما لأول مرة.",
        "وربما بعض الآلام، التي يحملها الزمن في داخله كالحجر، لن تحتاج أبدًا أن تسقط. يا مانسا، اذهب. النهر ينتظرك، والشاطئ الآخر أيضًا.»",
        "— أيّ آلام يا نارينا العجوز؟ سأل الإمبراطور بصوت خافت.",
        "— تلك التي أوثر ألّا أُضطر إلى إنشادها أبدًا يا مانسا. تلك التي نرجو أن يحملها النهر بعيدًا قبل أن تأتي." ] },
      { id: "fleuve-ocean", title: "النهر في المحيط", paragraphs: [
        "ذات يوم، عاد مستكشف من رحلة طويلة نحو الغرب.",
        "— يا سيدي، تتبّعت الساحل شهورًا. كل الصيادين يروون الشيء نفسه: بعيدًا في المحيط، هناك نهر يجري وسط البحر. تيّار هائل يدفع الزوارق نحو المجهول. ولم يعد أحد قط ليقول ماذا وراءه.",
        "— النهر. كما في حلمي. كما في أنشودة القدماء، تمتم الإمبراطور. هذا النهر، أريد أن أراه، وأن أعرف إلى أين يقود." ] },
      { id: "deux-cents", title: "مئتا زورق", paragraphs: [
        "أمر الإمبراطور ببناء مئتي زورق كبير، قادرة على الإبحار شهورًا، محمّلة بالماء والمؤن والبذور. ومهمتها: العثور على الشاطئ الآخر.",
        "— انطلقوا يا إخوتي! وعودوا لتخبروني بما وراء البحر!",
        "انطلقت الزوارق. وانتظر الإمبراطور." ] },
      { id: "survivant", title: "الناجي الوحيد", paragraphs: [
        "مرّت أسابيع. ثم أشهر. وذات يوم، عاد زورق واحد.",
        "— يا مانسا! عاد زورق واحد فقط! صاح أحد المستشارين.",
        "نزل منه رجل واحد، منهكًا.",
        "— أبحرنا طويلًا. ثم النهر في المحيط… أخذنا التيّار جميعًا. أنا الوحيد الذي استطاع العودة، لهث القبطان ديابي.",
        "— النهر. إذًا هو موجود حقًّا، قال الإمبراطور ببطء." ] },
      { id: "abdication", title: "التنازل عن العرش", paragraphs: [
        "— إن عاد زورق واحد، فهذا البحر يمكن عبوره. هناك شيء ينتظر في الجهة الأخرى، ويجب أن أراه بعينيّ.",
        "— يا سيدي، لا يمكنك أن تترك الإمبراطورية! — هذا جنون يا مانسا! اعترض المستشارون.",
        "التفت الإمبراطور إلى ابن عمه: — أنت ستكون مانسا عظيمًا. تعرف الناس والقوانين والذهب. ستكون الإمبراطورية في أيدٍ أمينة.",
        "— وأنت يا ابن عمي؟ سأل مانسا موسى متأثرًا.",
        "— أنا سأذهب لأرى ما رآه نارينا العجوز في ماء النهر.",
        "في ذلك اليوم، تنازل أقوى رجل في إفريقيا عن عرشه، ليبحث عن شيء لم يكن أحد يعرف بعد كيف يسمّيه." ] },
      { id: "deux-mille", title: "ألفا زورق", paragraphs: [
        "عندئذٍ أمر الإمبراطور ببناء ألفي زورق. ليست بعثة، بل سفينة نجاة: بحّارة، وعلماء، وأطباء، وحدّادون، وأهل الجريو، وعائلات. بذور وحيوانات. كل ما يلزم لتأسيس شعب.",
        "— لتحملك الرياح يا ابن عمي. — ولتحكم بحكمة يا أخي، أجاب مانسا باكاري، وقد ابتعد على الماء.",
        "أما الجريو، فاحتفظ ببقية الأنشودة لنفسه." ] },
      { id: "horizon", title: "الأفق", paragraphs: [
        "كتب المؤرّخون العرب ما رأوه. لكن لم يرَ أحد قط ما آل إليه أمرهم. لم يعد زورق واحد أبدًا.",
        "— وهنا، يا ابنتي، تتوقّف اليقينيات." ] },
      { id: "voyage", title: "السؤال يواصل السفر", paragraphs: [
        "— نتوما… ألن نعرف أبدًا؟ سألت كومبا في حيرة.",
        "— لا نعرف على وجه اليقين. لكن انظري ماذا وجد الباحثون: تماثيل بوجوه إفريقية في المكسيك، ونباتات إفريقية في أمريكا قبل 1492، وحكايات قديمة جدًا لشعوب أصلية تتحدّث عن رجال جاؤوا من الشرق عبر البحر العظيم. أدلّة يا كومبا — متنازَع عليها، لا مثبتة.",
        "— وبعد ذلك؟ — لا نعرف. ربما عادوا. ربما بقوا. ربما لم يستطع أحد قط أن يربطهم بقصتنا.",
        "— سينظر شعبان في عيون بعضهما لأول مرة، همست كومبا.",
        "— ماذا قلتِ للتوّ يا ابنتي؟ — لا أدري. جاءتني هكذا. (كان ذلك صوت نارينا العجوز، يسافر عبر القرون.)",
        "في اليوم التالي، كتبت كومبا على السبورة بأحرف كبيرة: «ماذا لو أن إنسانيتين مدّت كلٌّ منهما يدها إلى الأخرى؟»",
        "— أعرف هذا السؤال أيضًا، قال السيد دياكيتي متأثرًا. لكنني لم أجرؤ يومًا على طرحه. اليوم، بفضل كومبا، سنبحث عن الجواب معًا.",
        "وهكذا عادت قصة عمرها سبعة قرون إلى السفر — من جريو إلى إمبراطور، ومن نتوما إلى ابنتها بالعماد، ومن طفلة إلى صفّ بأكمله. من جيل إلى جيل. مثل الزوارق على النهر." ] },
    ],
  },
  zh: {
    lang: "zh", dir: "ltr", label: "中文", bookTitle: "想要横渡大海的皇帝",
    sections: [
      { id: "route", title: "通往锡吉里的路", paragraphs: [
        "清晨五点。四驱车驶离科纳克里，前往锡吉里：八百公里，整整一天的车程。",
        "道路向富塔贾隆攀升——那是西非的水塔。",
        "——你还记得十年前这条路是什么样吗？三天的折磨！库姆巴·福法纳医生叹道。",
        "——今天我们一天就能从科纳克里到坎康，医生。国家在变，布巴卡尔回答。",
        "在富塔的门户马穆，已是正午。「一切都在生长，一切都在抽芽，」她望着窗外沉思，「就像我们的草药一样……」",
        "终于，锡吉里到了：黄金之城，凯塔家族祖先的土地。「我的小同名一定在等我，」她微笑着说。" ] },
      { id: "retrouvailles", title: "重逢", paragraphs: [
        "——恩托玛——！小库姆巴扑进她怀里大喊。",
        "——哎，我的小同名！你又长高了！",
        "——我考试得了优等，恩托玛！",
        "——我知道。正因为这样，我才开了八百公里的车来！",
        "她的父亲塞库·凯塔躬身道：——欢迎来到锡吉里，医生，您让我们蓬荜生辉。——别这样，塞库。在你们家，我只是库姆巴。",
        "那天晚上，大家聊天、欢笑，吃了贾卡·图雷做的油焖饭。恩托玛拿出她的礼物，小库姆巴带着微笑睡着了。",
        "——好好学习，孩子！第二天早上恩托玛对她说。还要像往常一样，给我带一个难题回来！——我保证，恩托玛！" ] },
      { id: "question", title: "难题", paragraphs: [
        "那天早上，历史课出现了意想不到的转折。",
        "——1492年，克里斯托弗·哥伦布发现了美洲，迪亚基特老师宣布道。",
        "——老师，库姆巴问，怎么能「发现」一个早已有人居住的地方呢？那里本来就有人，不是吗？",
        "——这个嘛……课本是这么写的，库姆巴。我们以后再谈，老师迟疑地回答。",
        "——你把老师问住了！她的朋友艾莎塔低声说。",
        "回到家，库姆巴跑向恩托玛：——我问了我的难题！老师答不上来！",
        "恩托玛放下笔记本。——这么快？过来，跟我说说。你问了一个了不起的问题。你知道吗？我有答案。但它不是一个简单的答案：这是一个学校课本里不会讲的故事。",
        "——一个关于你家族的故事，我的库姆巴。一位凯塔家的人曾经尝试过。远在哥伦布之前。" ] },
      { id: "empire", title: "马里帝国", paragraphs: [
        "很久很久以前，七个世纪之前……尼亚尼，马里帝国的都城，是大地上曾有过的最伟大的帝国之一。",
        "——你知道吗，库姆巴？这个帝国一直延伸到这里，到锡吉里。你的祖先就走在这片土地上。",
        "在通布图，矗立着世界上最伟大的大学之一：来自各地的学者，数十万册手稿。",
        "——恩托玛，你要去的就是那里吗，去巴马科？——巴马科的传统药典研究所，研究的正是通布图的医生们在曼萨·穆萨时代使用的植物。非洲的科学从未停止，孩子，只是被遗忘了。" ] },
      { id: "or", title: "坎库·穆萨的黄金", paragraphs: [
        "1324年，曼萨·穆萨皇帝——也被称作坎库·穆萨——前往麦加朝圣。",
        "他在开罗散发的黄金多得惊人，以至于其价值在整个阿拉伯世界暴跌了十多年。",
        "——全世界的历史学家都说，坎库·穆萨是人类全部历史上最富有的人。",
        "——整个历史上？！——整个历史上。比欧洲所有的国王都富有，比埃及的法老都富有。" ] },
      { id: "autre-empereur", title: "另一位皇帝", paragraphs: [
        "——但在曼萨·穆萨之前，还有另一个人。他的堂兄。在他之前在位的人。",
        "——是谁？——曼萨·巴卡里。阿拉伯编年史家用另一个名字称呼他：阿布·伯克尔二世。",
        "曼萨·巴卡里有一个执念，一个将改变他一生的执念：海洋。" ] },
      { id: "reve", title: "梦", paragraphs: [
        "那一夜，皇帝做了一个将改变他命运的梦：他看见海上有成百上千艘船，全都驶向落日的方向。",
        "——我的君主，你看见了什么？他的妻子温柔地问。",
        "——我看见……船。成百上千艘船。它们全都向西航行，驶向太阳落下的地方。" ] },
      { id: "chant", title: "纳雷纳之歌", paragraphs: [
        "——纳雷纳老人家，皇帝对这位格里奥说，我做了一个梦：成百上千只独木舟驶向落日，海洋之中有一条黄金之河。你的祖先在这个梦里读出了什么？",
        "于是老格里奥让他的科拉琴歌唱起来：",
        "「在大海的另一边，有人在行走。他们不认识我们，我们也不认识他们。但大地是一体的。大地从来都是一体的。",
        "啊，曼萨，你的梦不是来自睡眠。它来自更远的地方，来自尚未到来的时间。",
        "如果你的独木舟触到那片海岸，如果你的人和平地伸出手，两个民族将第一次对视彼此的眼睛。",
        "也许有些痛苦——那些时间像石头一样背负的痛苦——将永远不必落下。啊，曼萨，去吧。河在等你，对岸也在等你。」",
        "——什么痛苦，纳雷纳老人家？皇帝低声问。",
        "——那些我宁愿永远不必歌唱的痛苦，曼萨。那些我们盼望河流能在它们到来之前就带走的痛苦。" ] },
      { id: "fleuve-ocean", title: "海洋中的河", paragraphs: [
        "有一天，一位探险者从向西的长途航行中归来。",
        "——陛下，我沿着海岸走了好几个月。所有渔民都说同样的话：在海洋的远处，有一条在大海中央流淌的河。一股巨大的水流，把独木舟推向未知。从没有人回来讲述那之后有什么。",
        "——那条河。就像我梦里一样。就像古人的歌里一样，皇帝喃喃道。这条河，我要亲眼看见它，要知道它通向何方。" ] },
      { id: "deux-cents", title: "两百只独木舟", paragraphs: [
        "皇帝下令建造两百只大独木舟，能够航行数月，载着水、粮食和种子。它们的使命：找到对岸。",
        "——去吧，我的兄弟们！回来告诉我那之后有什么！",
        "独木舟出发了。皇帝等待着。" ] },
      { id: "survivant", title: "唯一的幸存者", paragraphs: [
        "几周过去了。几个月过去了。有一天，只有一只独木舟回来了。",
        "——曼萨！只回来了一只独木舟！一位顾问喊道。",
        "一个人筋疲力尽地走下船。",
        "——我们航行了很久。然后是海洋中的那条河……水流把我们全都卷走了。我是唯一能回来的人，迪亚比船长喘息着说。",
        "——那条河。原来它真的存在，皇帝缓缓地说。" ] },
      { id: "abdication", title: "退位", paragraphs: [
        "——既然有一只独木舟回来了，那么这片海就能横渡。对岸有什么在等待，我必须亲眼去看。",
        "——陛下，您不能抛下帝国！——这是疯了，曼萨！顾问们抗议道。",
        "皇帝转向他的堂弟：——你会成为一位伟大的曼萨。你懂人心、懂律法、懂黄金。帝国会托付给可靠的人。",
        "——那你呢，我的堂兄？曼萨·穆萨动容地问。",
        "——我要去看看纳雷纳老人在河水里看见的东西。",
        "那一天，非洲最有权势的人让出了王位，去寻找一件还没有人知道该如何命名的东西。" ] },
      { id: "deux-mille", title: "两千只独木舟", paragraphs: [
        "于是皇帝下令建造两千只独木舟。这不是一支远征队，而是一艘方舟：水手、学者、医生、铁匠、格里奥、家庭。种子、牲畜。建立一个民族所需的一切。",
        "——愿风载着你，我的堂兄。——愿你智慧地统治，我的兄弟，曼萨·巴卡里回答，已经远在水面上。",
        "至于那位格里奥，他把歌的后半段留在了自己心里。" ] },
      { id: "horizon", title: "地平线", paragraphs: [
        "阿拉伯编年史家记下了他们所见。但没有人见过他们最终的结局。再没有一只独木舟回来过。",
        "——而就在这里，孩子，确定的事到此为止。" ] },
      { id: "voyage", title: "问题继续旅行", paragraphs: [
        "——恩托玛……我们永远都不会知道了吗？库姆巴困惑地问。",
        "——我们无法确定。但你看研究者们发现了什么：墨西哥有非洲面孔的石像，美洲在1492年之前就有非洲的植物，还有原住民非常古老的传说，讲述有人从东方渡过大海而来。是线索，库姆巴——有争议，未被证实。",
        "——然后呢？——我们不知道。也许他们回去了。也许他们留下了。也许从来没有人能把他们和我们的故事联系起来。",
        "——两个民族将第一次对视彼此的眼睛，库姆巴喃喃道。",
        "——你刚才说什么，孩子？——我不知道。它就这么浮现出来了。（那是纳雷纳老人的声音，穿越了几个世纪。）",
        "第二天，库姆巴在黑板上写下大大的一行字：「如果两种人类曾向彼此伸出手，会怎样？」",
        "——这个问题我也知道，迪亚基特老师动容地说。但我从来不敢提出来。今天，多亏了库姆巴，我们要一起去寻找答案。",
        "就这样，一个七个世纪的故事又重新上路了——从一位格里奥到一位皇帝，从一位恩托玛到她的教女，从一个孩子到整个班级。代代相传。就像河上的独木舟。" ] },
    ],
  },
};
