// « Le Corridorium » — Série « Les enfants découvrent » · Simandou — Pati Passage (13–15 ans).
// Adaptation lisible du récit, 14 sections alignées sur 4 langues. Registre littéraire sobre.
export type CorridoriumLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[] };
type Book = { lang: CorridoriumLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const CORRIDORIUM_ML: Record<CorridoriumLang, Book> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le Corridorium",
    sections: [
      { id: "fer", title: "La fille qui posait trop de questions", paragraphs: [
        "On raconte qu'au pied de la montagne de fer vivait une fille qui posait trop de questions. Elle s'appelait Loffo Koné, et elle avait quatorze ans.",
        "La montagne, on disait qu'elle était faite de fer. Quand le soleil se levait sur Beyla, les crêtes prenaient une couleur de vieille casserole, et l'air sentait la latérite. En contrebas coulait la Farako, la rivière du village, celle où sa mère lavait le linge quand Loffo était petite.",
        "Cette année-là, le monde avait changé de bruit. Des camions montaient et descendaient toute la journée. Un rail neuf, tout droit, coupait la vallée comme une cicatrice luisante. Et la Farako avait bruni. On ne s'y baignait plus." ] },
      { id: "etrangers", title: "Les étrangers qui restent", paragraphs: [
        "Le plus étrange, c'étaient les étrangers. Ils débarquaient par le train, par la route, par on ne savait où. Des Chinois, des Canadiens, des Sénégalais, des Indiens, des Australiens, des Béninois.",
        "Ils ne venaient pas en touristes. On les voyait avec leurs casques, leurs cartes, leurs valises, le regard de gens qui restent." ] },
      { id: "du-vent", title: "Du vent, comme d'habitude", paragraphs: [
        "Le soir, dans la cour, Fabara comptait son argent. Fabara, c'était le grand frère. Vingt ans, le menton dur, des rêves qui regardaient ailleurs. Il parlait de « la route ». Il parlait de « la mer ».",
        "— Simandou ? lâcha-t-il en glissant les billets dans sa poche. Du vent, petite sœur. Comme d'habitude. On nous l'a déjà chanté, cette chanson-là. Papa l'a entendue. Le grand-père l'a entendue.",
        "Loffo ne savait pas répondre par des chiffres. Mais elle avait des yeux.",
        "— Si c'est du vent, dit-elle, pourquoi ils débarquent tous ? Les Chinois, les Canadiens, les Sénégalais, les Indiens… ils ne viennent pas voir le paysage.",
        "Elle s'entendit dire une chose qu'elle ne s'expliquait pas elle-même : — Nous, on fuit nos villages pour aller mourir en mer. Eux, ils quittent leurs buildings pour venir vivre en brousse. Il y a quelque chose qui se trame, Fabara.",
        "Le grand frère haussa les épaules. Mais il ne répondit pas tout de suite." ] },
      { id: "carnet", title: "La question dans le carnet", paragraphs: [
        "Cette nuit-là, Loffo ouvrit son carnet, celui qu'elle gardait sous son oreiller. Sur la première page, elle avait écrit une question, une seule :",
        "« En 2040, j'aurai vingt-huit ans. À quoi ça ressemblera ? »",
        "Au matin, sa mère vint la trouver. Elle portait l'uniforme bleu de son travail : depuis peu, elle était cheffe de gare du corridor, et elle en était fière sans le dire.",
        "— Demain, tu montes avec moi, dit-elle. Le train va jusqu'à la mer.",
        "Dans l'embrasure de la porte, l'oncle écoutait. Lui aussi avait quitté quelque chose : son champ, avalé par la mine. On l'avait payé.",
        "— On m'a donné de l'argent pour la terre, murmura-t-il. L'argent se dépense. La terre, non.",
        "Loffo serra son carnet contre elle." ] },
      { id: "train", title: "Le grand train du corridor", paragraphs: [
        "Le train partit à l'aube. Le nez collé à la vitre, Loffo n'en revenait pas. Le chantier était immense — bien plus grand que tout ce qu'elle avait imaginé du haut de son village.",
        "La double voie filait vers l'horizon. Des engins gros comme des maisons mordaient la montagne. Et entre deux, le pays défilait, splendide : les monts bleus, les forêts, les rivières qui s'enfuyaient vers le sud.",
        "— Tout ça, demanda-t-elle, c'est nous qui le construisons ?",
        "Sa mère sourit. — Tout ça. Et on n'en est qu'au début." ] },
      { id: "regarde-devant", title: "Regarde devant", paragraphs: [
        "Puis le train entra dans la montagne. L'obscurité tomba d'un coup.",
        "Au cœur de la roche, une veine de minerai s'était mise à luire — doucement, comme une braise, comme une chose qui respire. Loffo n'avait jamais vu ça. Personne dans le wagon ne semblait la voir.",
        "Une voix, très loin, comme une conteuse au bord du sommeil, dit simplement : — Regarde devant.",
        "Et la lumière la prit." ] },
      { id: "2040", title: "2040", paragraphs: [
        "Quand elle rouvrit les yeux, c'était le plein jour. C'était la même vallée — elle reconnaissait la forme des crêtes — et pourtant ce n'était plus la même. L'air était clair. L'eau brillait partout. Le vert avait tout repris.",
        "Une seule pensée se forma, nette, dans sa tête : si je trouve la preuve… il restera peut-être. Si elle rapportait à Fabara une seule chose qu'il ne puisse pas balayer d'un revers de main.",
        "Un garçon de son âge la regardait, intrigué. — Tu parles bizarre, dit-il. Tu viens du temps des rivières brunes ?" ] },
      { id: "corridorium", title: "Le Corridorium", paragraphs: [
        "Avant qu'elle puisse répondre, elle le vit. Au fond de la vallée se dressait une chose qu'aucun mot ne pouvait contenir. C'était une Nimba — la grande figure aux longues lignes, celle des fêtes et des récoltes — mais haute comme une montagne.",
        "— On est toujours en Guinée ? souffla-t-elle. C'est quoi, ça ?",
        "— Le Corridorium, répondit le garçon, comme si elle avait demandé le nom du soleil. Tu n'as jamais vu le Corridorium ?",
        "À l'intérieur, c'était une ville debout : cent niveaux de galeries qui montaient en terrasses, dans un éclat sombre de fer et un éclat clair de métal léger. Et des visiteurs partout — dont beaucoup d'étrangers, exactement ceux qui, dans son temps à elle, débarquaient sans qu'on sache pourquoi." ] },
      { id: "tout-dici", title: "Tout est d'ici", paragraphs: [
        "Une femme les accueillit, calme, le métier dans la voix. Une historienne, gardienne du lieu.",
        "— Pensé par les architectes de l'ISAU, dit-elle. Bâti à la main par les apprentis du Centre de formation de Kérouané. Le fer vient de Simandou. Le métal léger, de Tougué — une mine qu'on a ouverte tard, et qu'on a transformée ici, chez nous. Tout est d'ici.",
        "Elle les mena dans une salle dont les murs portaient des images du monde entier : des tours, des ponts, des navires immenses. — Pendant cent ans, dit-elle, notre fer est parti élever les maisons des autres.",
        "Puis la salle se retournait sur le Corridorium lui-même. — Celui-ci, c'est le premier qu'on a gardé pour nous. Aujourd'hui, ce sont eux qui viennent le voir.",
        "Loffo comprit, d'un coup, la contradiction qui la tourmentait chez elle. Les étrangers ne venaient pas pour rien. Ils venaient parce qu'il y avait, enfin, quelque chose à voir." ] },
      { id: "carte", title: "La carte vivante", paragraphs: [
        "Dans une autre salle, on marchait à l'intérieur d'une carte vivante du pays, où chaque rivière, chaque village se laissait approcher. Le cœur battant, Loffo descendit vers sa région. Elle chercha la Farako.",
        "La Farako courait claire. — Elle est propre, dit Loffo tout bas. Quelqu'un a réparé l'eau.",
        "Elle chercha encore. Le village de son oncle, celui qu'on avait déplacé. Il existait — rebâti, nommé, honoré, et non pas effacé.",
        "Plus loin s'ouvrait le pays comme un jardin : des forêts épaisses de la côte jusqu'à la forêt de l'est, la Haute-Guinée qui avait repoussé l'avancée du sable, des universités où venait toute la sous-région. Mais tout n'était pas fini. Quelque part, un chantier travaillait encore. Sur un mur, un grand panneau invitait les gens à débattre d'un projet en cours. Rien n'était parfait. Tout était en train de se faire." ] },
      { id: "salle-du-temps", title: "La salle du temps", paragraphs: [
        "Dans la salle du temps, on gardait la mémoire honnête des années anciennes. Un long mur portait les noms des villages déplacés, chacun écrit en toutes lettres, pour qu'on n'oublie pas.",
        "Un vieil homme se tenait là, à côté d'elle. — On a failli tout vendre brut, dit-il sans la regarder. Et ne garder rien." ] },
      { id: "mur-des-enfants", title: "Le mur des enfants", paragraphs: [
        "Et puis vint la salle qui répondit à sa question. Un mur entier de visages d'enfants. Un par préfecture du pays. Sous chaque visage, un nom, une ville, souvent un coin perdu dont Loffo n'avait jamais entendu parler.",
        "— On croyait que la richesse, c'était le fer, dit l'historienne. La clef, ça a été l'école. Chaque année, la Simandou Academy choisit les meilleurs élèves de chaque préfecture. Même les plus loin. Même les plus pauvres.",
        "Voilà, pensa Loffo. Voilà ce que je cherchais. Pas un slogan. Une porte. Une porte ouverte à des enfants comme elle — comme Fabara, s'il avait voulu." ] },
      { id: "celle-que-je-serai", title: "Celle que je serai", paragraphs: [
        "C'est à ce moment qu'une femme s'avança vers elle. Une architecte, à son badge. Une démarche, un front, quelque chose dans le pli des yeux que Loffo crut reconnaître sans savoir où.",
        "La femme s'arrêta devant elle et sortit, de sa poche, un carnet. Un vieux carnet usé. Le même. Sur la première page, la même question, de la même écriture d'enfant.",
        "— Je l'ai gardé, dit la femme. Cette question, je me la suis posée chaque jour.",
        "Loffo la regarda, et le sol parut bouger. C'était elle. C'était Loffo Koné, à vingt-huit ans. Sortie de la première promotion de l'Academy. Une de celles qui avaient dessiné le Corridorium.",
        "— Et mon frère… Fabara. Il est parti ?",
        "La femme la regarda longtemps. Elle ne mentit pas. Elle ne consola pas. — Ça, ce n'est pas écrit ici, dit-elle doucement. Ça dépend de ce que tu feras en rentrant.",
        "Elle posa une main sur l'épaule de la petite. — Rien de tout ça n'était écrit, tu m'entends ? Ce qui a fait la différence, c'est des jeunes qui n'ont pas laissé faire. Rentre, Loffo. C'est de là-bas que tout commence." ] },
      { id: "le-choix", title: "Là où commence le choix", paragraphs: [
        "Le train sortit de la montagne dans un grand jour blanc. Sa mère était à côté d'elle, tranquille, comme si rien n'avait eu lieu. À peine quelques secondes avaient passé.",
        "— Tu as rêvé dans le tunnel ? demanda sa mère. Tu as l'air ailleurs.",
        "Loffo ouvrit son carnet pour se rassurer. Et son souffle s'arrêta. Après sa question d'enfant, sur la page suivante, il y avait des mots — d'une écriture qui n'était pas encore la sienne, mais qui était la sienne quand même.",
        "Elle comprit autre chose, plus urgent : c'était aujourd'hui. Aujourd'hui que Fabara devait partir. Elle descendit du train avant l'arrêt complet et courut.",
        "Elle le trouva au bord de la route, le sac sur l'épaule, le visage tourné vers le sud, là où la route finit dans la mer. — Tu vas me sortir encore ton vent, petite sœur ?",
        "Loffo ne lui fit pas de discours. Elle avait sa question, et une chose vraie. — S'il n'y a rien ici, dit-elle, pourquoi eux ils viennent ?",
        "Et, plus bas : — Et si la richesse, ce n'était pas le fer, Fabara. Si c'était nous.",
        "Fabara ne dit rien. Mais il ne repartit pas tout de suite non plus. Il resta là, le sac sur l'épaule, à regarder tour à tour la route, et le visage de sa sœur.",
        "Personne ne sait si Fabara Koné monta dans la pirogue ce jour-là. L'histoire s'arrête où commence le choix." ] },
    ],
  },
  en: {
    lang: "en", dir: "ltr", label: "English", bookTitle: "The Corridorium",
    sections: [
      { id: "fer", title: "The Girl Who Asked Too Many Questions", paragraphs: [
        "They say that at the foot of the iron mountain lived a girl who asked too many questions. Her name was Loffo Koné, and she was fourteen.",
        "The mountain, they said, was made of iron. When the sun rose over Beyla, the ridges turned the colour of an old cooking pot, and the air smelled of laterite. Below ran the Farako, the village river, the one where her mother washed the laundry when Loffo was small.",
        "That year, the world had changed its sound. Trucks went up and down all day long. A new rail line, dead straight, cut across the valley like a gleaming scar. And the Farako had turned brown. No one bathed in it anymore." ] },
      { id: "etrangers", title: "The Foreigners Who Stay", paragraphs: [
        "Strangest of all were the foreigners. They arrived by train, by road, from who knew where. Chinese, Canadians, Senegalese, Indians, Australians, Beninese.",
        "They did not come as tourists. You saw them with their helmets, their maps, their suitcases — the look of people who stay." ] },
      { id: "du-vent", title: "Just Wind, As Always", paragraphs: [
        "In the evening, in the courtyard, Fabara was counting his money. Fabara was the big brother. Twenty years old, a hard jaw, dreams that looked elsewhere. He spoke of \"the road.\" He spoke of \"the sea.\"",
        "— Simandou? he said, slipping the banknotes into his pocket. Just wind, little sister. As always. We've been sung that song before. Father heard it. Grandfather heard it.",
        "Loffo couldn't answer with figures. But she had eyes.",
        "— If it's just wind, she said, why are they all turning up? The Chinese, the Canadians, the Senegalese, the Indians… they're not here for the scenery.",
        "She heard herself say something she couldn't even explain: — We flee our villages to go and die at sea. They leave their towers to come and live in the bush. Something is going on here, Fabara.",
        "Her big brother shrugged. But he did not answer right away." ] },
      { id: "carnet", title: "The Question in the Notebook", paragraphs: [
        "That night, Loffo opened her notebook, the one she kept under her pillow. On the first page she had written a single question:",
        "\"In 2040, I'll be twenty-eight. What will it look like?\"",
        "In the morning, her mother came to find her, wearing the blue uniform of her job: she had recently become a stationmaster on the corridor, and was proud of it without saying so.",
        "— Tomorrow, you ride with me, she said. The train goes all the way to the sea.",
        "In the doorway, the uncle was listening. He too had given something up: his field, swallowed by the mine. He had been paid.",
        "— They gave me money for the land, he murmured. Money gets spent. Land doesn't.",
        "Loffo held her notebook tight against her." ] },
      { id: "train", title: "The Great Corridor Train", paragraphs: [
        "The train left at dawn. Nose pressed to the window, Loffo could not believe it. The worksite was immense — far bigger than anything she had imagined from up in her village.",
        "The double track shot toward the horizon. Machines as big as houses bit into the mountain. And in between, the country streamed past, splendid: the blue hills, the forests, the rivers fleeing south.",
        "— All this, she asked, we are the ones building it?",
        "Her mother smiled. — All of it. And we're only at the beginning." ] },
      { id: "regarde-devant", title: "Look Ahead", paragraphs: [
        "Then the train entered the mountain. Darkness fell all at once.",
        "At the heart of the rock, a vein of ore had begun to glow — softly, like an ember, like something breathing. Loffo had never seen such a thing. No one else in the carriage seemed to see it.",
        "A voice, far away, like a storyteller on the edge of sleep, said simply: — Look ahead.",
        "And the light took her." ] },
      { id: "2040", title: "2040", paragraphs: [
        "When she opened her eyes, it was broad daylight. It was the same valley — she recognised the shape of the ridges — and yet it was no longer the same. The air was clear. Water shone everywhere. The green had taken everything back.",
        "A single thought formed, sharp, in her mind: if I find the proof… maybe he'll stay. If she could bring Fabara one single thing he couldn't wave away.",
        "A boy her own age was watching her, puzzled. — You talk strangely, he said. Do you come from the time of the brown rivers?" ] },
      { id: "corridorium", title: "The Corridorium", paragraphs: [
        "Before she could answer, she saw it. At the far end of the valley rose a thing no word could contain. It was a Nimba — the great figure of long lines, the one of feasts and harvests — but tall as a mountain.",
        "— Are we still in Guinea? she breathed. What is that?",
        "— The Corridorium, the boy answered, as if she had asked the name of the sun. You've never seen the Corridorium?",
        "Inside, it was a standing city: a hundred levels of galleries rising in terraces, in the dark gleam of iron and the bright gleam of light metal. And visitors everywhere — many of them foreigners, exactly the ones who, in her own time, arrived without anyone knowing why." ] },
      { id: "tout-dici", title: "Everything Is From Here", paragraphs: [
        "A woman welcomed them, calm, her craft in her voice. A historian, the keeper of the place.",
        "— Designed by the architects of the ISAU, she said. Built by hand by the apprentices of the Kérouané training centre. The iron comes from Simandou. The light metal, from Tougué — a mine we opened late, and that we transformed here, at home. Everything is from here.",
        "She led them into a hall whose walls bore images from all over the world: towers, bridges, immense ships. — For a hundred years, she said, our iron went off to raise other people's houses.",
        "Then the hall turned back to the Corridorium itself. — This one is the first we kept for ourselves. Today, it is they who come to see it.",
        "All at once, Loffo understood the contradiction that tormented her back home. The foreigners were not coming for nothing. They were coming because there was, at last, something to see." ] },
      { id: "carte", title: "The Living Map", paragraphs: [
        "In another hall, you walked inside a living map of the country, where every river, every village could be approached. Heart pounding, Loffo went down toward her own region. She looked for the Farako.",
        "The Farako ran clear. — It's clean, said Loffo under her breath. Someone repaired the water.",
        "She searched again. Her uncle's village, the one that had been displaced. It existed — rebuilt, named, honoured, and not erased.",
        "Further on, the country opened like a garden: thick forests from the coast to the eastern forest, the Upper Guinea that had pushed back the advancing sand, universities where the whole sub-region came. But not everything was finished. Somewhere, a worksite was still at work. On a wall, a large board invited people to debate a project under way. Nothing was perfect. Everything was in the making." ] },
      { id: "salle-du-temps", title: "The Hall of Time", paragraphs: [
        "In the hall of time, the honest memory of the old years was kept. A long wall bore the names of the displaced villages, each written out in full, so that no one would forget.",
        "An old man stood there, beside her. — We nearly sold it all raw, he said without looking at her. And kept nothing." ] },
      { id: "mur-des-enfants", title: "The Wall of Children", paragraphs: [
        "And then came the hall that answered her question. A whole wall of children's faces. One for each prefecture of the country. Beneath each face, a name, a town, often some remote corner Loffo had never heard of.",
        "— We thought wealth was iron, said the historian. The key turned out to be school. Every year, the Simandou Academy chooses the best pupils from each prefecture. Even the farthest. Even the poorest.",
        "There, thought Loffo. That's what I was looking for. Not a slogan. A door. A door open to children like her — like Fabara, if he had wanted it." ] },
      { id: "celle-que-je-serai", title: "The One I Will Become", paragraphs: [
        "It was then that a woman came toward her. An architect, by her badge. A way of walking, a brow, something in the fold of the eyes that Loffo thought she recognised without knowing where.",
        "The woman stopped in front of her and drew, from her pocket, a notebook. An old, worn notebook. The same one. On the first page, the same question, in the same child's hand.",
        "— I kept it, said the woman. That question, I asked myself every day.",
        "Loffo looked at her, and the ground seemed to move. It was her. It was Loffo Koné, at twenty-eight. From the very first class of the Academy. One of those who had designed the Corridorium.",
        "— And my brother… Fabara. Did he leave?",
        "The woman looked at her for a long time. She did not lie. She did not console. — That is not written here, she said gently. It depends on what you do when you go back.",
        "She laid a hand on the girl's shoulder. — None of this was written, do you hear me? What made the difference was young people who would not let it happen. Go back, Loffo. That is where it all begins." ] },
      { id: "le-choix", title: "Where the Choice Begins", paragraphs: [
        "The train came out of the mountain into a great white daylight. Her mother was beside her, calm, as if nothing had happened. Barely a few seconds had passed.",
        "— Did you dream in the tunnel? her mother asked. You seem far away.",
        "Loffo opened her notebook to reassure herself. And her breath stopped. After her child's question, on the next page, there were words — in a hand that was not yet hers, but was hers all the same.",
        "She understood something else, more urgent: it was today. Today that Fabara was to leave. She stepped off the train before it had fully stopped and ran.",
        "She found him by the roadside, his bag on his shoulder, his face turned south, where the road ends in the sea. — Going to give me your wind talk again, little sister?",
        "Loffo made him no speech. She had her question, and one true thing. — If there's nothing here, she said, why do they come?",
        "And, lower: — And what if the wealth wasn't the iron, Fabara. What if it was us.",
        "Fabara said nothing. But he did not set off right away either. He stayed there, bag on his shoulder, looking by turns at the road, and at his sister's face.",
        "No one knows whether Fabara Koné climbed into the canoe that day. The story stops where the choice begins." ] },
    ],
  },
  ar: {
    lang: "ar", dir: "rtl", label: "العربية", bookTitle: "الكوريدوريوم",
    sections: [
      { id: "fer", title: "الفتاة التي تطرح أسئلة كثيرة", paragraphs: [
        "يُحكى أنه عند سفح جبل الحديد عاشت فتاة تطرح أسئلة كثيرة. اسمها لوفو كوني، وكانت في الرابعة عشرة.",
        "كانوا يقولون إن الجبل مصنوع من الحديد. حين تشرق الشمس على بيلا، تأخذ القمم لون قِدْرٍ قديم، وتفوح من الهواء رائحة اللاتريت. وفي الأسفل يجري نهر فاراكو، نهر القرية، حيث كانت أمها تغسل الثياب حين كانت لوفو صغيرة.",
        "في ذلك العام، تغيّر صوت العالم. كانت الشاحنات تصعد وتنزل طوال النهار. وسكّة حديد جديدة، مستقيمة تمامًا، تشقّ الوادي كندبة لامعة. واسودّ نهر فاراكو. لم يعد أحد يسبح فيه." ] },
      { id: "etrangers", title: "الغرباء الذين يبقون", paragraphs: [
        "كان الأغرب من كل شيء هم الغرباء. يصلون بالقطار، وبالطريق، ومن حيث لا يُدرى. صينيون، وكنديون، وسنغاليون، وهنود، وأستراليون، وبنينيون.",
        "لم يأتوا سياحًا. كنّا نراهم بخوذهم وخرائطهم وحقائبهم، بنظرة أناس جاؤوا ليبقوا." ] },
      { id: "du-vent", title: "كلام فارغ، كالعادة", paragraphs: [
        "في المساء، في الفناء، كان فابارا يعدّ نقوده. فابارا هو الأخ الأكبر. عشرون عامًا، ذقنٌ صلب، وأحلامٌ تنظر إلى مكان آخر. كان يتحدّث عن «الطريق». ويتحدّث عن «البحر».",
        "— سيماندو؟ قال وهو يدسّ الأوراق النقدية في جيبه. كلام فارغ يا أختي الصغيرة. كالعادة. سمعنا هذه الأغنية من قبل. سمعها أبي. وسمعها الجدّ.",
        "لم تكن لوفو تعرف الردّ بالأرقام. لكن كانت لها عينان.",
        "— إن كان كلامًا فارغًا، قالت، فلماذا ينزلون كلهم؟ الصينيون والكنديون والسنغاليون والهنود… إنهم لا يأتون لرؤية المنظر.",
        "وسمعت نفسها تقول شيئًا لم تستطع تفسيره: — نحن نهرب من قرانا لنموت في البحر. وهم يتركون أبراجهم ليعيشوا في الأدغال. هناك أمرٌ يُدبَّر يا فابارا.",
        "هزّ الأخ الأكبر كتفيه. لكنه لم يردّ على الفور." ] },
      { id: "carnet", title: "السؤال في الدفتر", paragraphs: [
        "في تلك الليلة، فتحت لوفو دفترها، الذي تحفظه تحت وسادتها. في الصفحة الأولى كتبت سؤالًا واحدًا:",
        "«في عام 2040، سيكون عمري ثمانية وعشرين عامًا. كيف سيبدو ذلك؟»",
        "في الصباح، جاءتها أمها بزيّها الأزرق: فقد صارت منذ وقت قريب رئيسة محطة في الممرّ، وكانت فخورة بذلك دون أن تقول.",
        "— غدًا، تركبين معي، قالت. القطار يذهب حتى البحر.",
        "في عتبة الباب، كان العمّ يصغي. هو أيضًا تخلّى عن شيء: حقله، الذي ابتلعه المنجم. وقد دُفع له ثمنه.",
        "— أعطوني مالًا مقابل الأرض، تمتم. المال يُنفَق. أما الأرض، فلا.",
        "ضمّت لوفو دفترها إلى صدرها." ] },
      { id: "train", title: "قطار الممرّ الكبير", paragraphs: [
        "انطلق القطار عند الفجر. وأنفها ملتصق بالزجاج، لم تكن لوفو تصدّق. كان الورش هائلًا — أكبر بكثير من كل ما تخيّلته من أعلى قريتها.",
        "كان الخطّ المزدوج ينطلق نحو الأفق. وآلات بحجم البيوت تنهش الجبل. وفي ما بينها، كانت البلاد تمرّ، بديعة: الجبال الزرقاء، والغابات، والأنهار الهاربة نحو الجنوب.",
        "— كل هذا، سألت، نحن من يبنيه؟",
        "ابتسمت أمها. — كل هذا. ونحن لم نزل في البداية." ] },
      { id: "regarde-devant", title: "انظري إلى الأمام", paragraphs: [
        "ثم دخل القطار في الجبل. وحلّ الظلام دفعة واحدة.",
        "في قلب الصخر، بدأ عرقٌ من المعدن يتوهّج — برفق، كجمرة، كشيء يتنفّس. لم ترَ لوفو ذلك قطّ. ولم يبدُ أن أحدًا في العربة يراه.",
        "قال صوتٌ، بعيد جدًا، كرواية على حافة النوم، ببساطة: — انظري إلى الأمام.",
        "وأخذها النور." ] },
      { id: "2040", title: "عام 2040", paragraphs: [
        "حين فتحت عينيها، كان النهار ساطعًا. كان الوادي نفسه — تعرّفت إلى شكل القمم — ومع ذلك لم يعد هو نفسه. كان الهواء صافيًا. والماء يلمع في كل مكان. والأخضر استعاد كل شيء.",
        "تشكّلت في رأسها فكرة واحدة، واضحة: إن وجدتُ الدليل… فربما يبقى. لو استطاعت أن تحمل إلى فابارا شيئًا واحدًا لا يستطيع أن يزيحه بظهر يده.",
        "كان صبيٌّ في مثل سنّها ينظر إليها، حائرًا. — تتكلّمين بغرابة، قال. هل أتيتِ من زمن الأنهار البنّية؟" ] },
      { id: "corridorium", title: "الكوريدوريوم", paragraphs: [
        "قبل أن تستطيع الردّ، رأته. في أقصى الوادي انتصب شيء لا تستطيع أي كلمة أن تحتويه. كان نيمبا — تلك الصورة الكبيرة ذات الخطوط الطويلة، صورة الأعياد والحصاد — لكن بعلوّ جبل.",
        "— أما زلنا في غينيا؟ همست. ما هذا؟",
        "— الكوريدوريوم، أجاب الصبي، كأنها سألت عن اسم الشمس. ألم ترَي الكوريدوريوم من قبل؟",
        "في الداخل، كان مدينةً واقفة: مئة طابق من الأروقة ترتفع مدرّجاتٍ، في بريقٍ داكن من الحديد وبريقٍ فاتح من معدنٍ خفيف. وزوّار في كل مكان — كثير منهم غرباء، تمامًا أولئك الذين كانوا، في زمنها، ينزلون دون أن يُعرَف لماذا." ] },
      { id: "tout-dici", title: "كل شيء من هنا", paragraphs: [
        "استقبلتهم امرأة، هادئة، في صوتها مهنتها. مؤرّخة، حارسة المكان.",
        "— صمّمه مهندسو معهد ISAU، قالت. وبناه بأيديهم متدرّبو مركز التكوين في كيروانيه. الحديد من سيماندو. والمعدن الخفيف من توغيه — منجمٌ فتحناه متأخّرين، وحوّلناه هنا، عندنا. كل شيء من هنا.",
        "قادتهم إلى قاعة تحمل جدرانها صورًا من العالم كله: أبراج، وجسور، وسفن هائلة. — مئة عام، قالت، وحديدنا يذهب ليرفع بيوت الآخرين.",
        "ثم انقلبت القاعة على الكوريدوريوم نفسه. — هذا أول ما احتفظنا به لأنفسنا. واليوم، هم من يأتون لرؤيته.",
        "فهمت لوفو، دفعة واحدة، التناقض الذي كان يؤرّقها في بلدتها. لم يكن الغرباء يأتون عبثًا. كانوا يأتون لأن هناك، أخيرًا، ما يُرى." ] },
      { id: "carte", title: "الخريطة الحيّة", paragraphs: [
        "في قاعة أخرى، كنتَ تمشي داخل خريطة حيّة للبلاد، حيث يمكن الاقتراب من كل نهر وكل قرية. وبقلبٍ خافق، نزلت لوفو نحو منطقتها. بحثت عن فاراكو.",
        "كان فاراكو يجري صافيًا. — إنه نظيف، قالت لوفو بصوت خافت. أحدهم أصلح الماء.",
        "بحثت من جديد. قرية عمّها، التي رُحِّل أهلها. كانت موجودة — أُعيد بناؤها، وسُمّيت، وكُرّمت، ولم تُمحَ.",
        "وأبعد، انفتحت البلاد كحديقة: غابات كثيفة من الساحل حتى غابة الشرق، وغينيا العليا التي ردّت زحف الرمال، وجامعات تأتيها المنطقة كلها. لكن لم يكن كل شيء قد اكتمل. في مكان ما، كان ورشٌ لا يزال يعمل. وعلى جدار، لوحة كبيرة تدعو الناس إلى مناقشة مشروع جارٍ. لم يكن شيء كاملًا. كان كل شيء قيد الإنجاز." ] },
      { id: "salle-du-temps", title: "قاعة الزمن", paragraphs: [
        "في قاعة الزمن، كانت تُحفَظ الذاكرة الصادقة للسنوات القديمة. جدارٌ طويل يحمل أسماء القرى المُرحَّلة، كلٌّ منها مكتوبٌ بالحروف كاملة، لئلّا يُنسى.",
        "وقف هناك رجلٌ عجوز إلى جانبها. — كدنا نبيع كل شيء خامًا، قال دون أن ينظر إليها. ولا نحتفظ بشيء." ] },
      { id: "mur-des-enfants", title: "جدار الأطفال", paragraphs: [
        "ثم جاءت القاعة التي أجابت عن سؤالها. جدارٌ كامل من وجوه أطفال. واحدٌ عن كل محافظة في البلاد. تحت كل وجه، اسمٌ ومدينة، وكثيرًا ما كانت ركنًا نائيًا لم تسمع لوفو به قطّ.",
        "— كنّا نظنّ أن الثروة هي الحديد، قالت المؤرّخة. لكن المفتاح كان المدرسة. كل عام، تختار أكاديمية سيماندو أفضل التلاميذ من كل محافظة. حتى الأبعد. حتى الأفقر.",
        "ها هو، فكّرت لوفو. هذا ما كنتُ أبحث عنه. ليس شعارًا. بل بابًا. بابًا مفتوحًا لأطفال مثلها — مثل فابارا، لو أراد." ] },
      { id: "celle-que-je-serai", title: "التي سأصيرها", paragraphs: [
        "في تلك اللحظة، تقدّمت نحوها امرأة. مهندسة معمارية، بحسب شارتها. مشيةٌ، وجبين، وشيءٌ في طيّة العينين ظنّت لوفو أنها تعرفه دون أن تدري من أين.",
        "وقفت المرأة أمامها وأخرجت من جيبها دفترًا. دفترًا قديمًا باليًا. الدفتر نفسه. في الصفحة الأولى، السؤال نفسه، بخطّ الطفلة نفسه.",
        "— احتفظتُ به، قالت المرأة. هذا السؤال، طرحته على نفسي كل يوم.",
        "نظرت إليها لوفو، فبدا أن الأرض تتحرّك. كانت هي. كانت لوفو كوني، في الثامنة والعشرين. من أول دفعة في الأكاديمية. من بين من صمّموا الكوريدوريوم.",
        "— وأخي… فابارا. هل رحل؟",
        "نظرت إليها المرأة طويلًا. لم تكذب. ولم تواسِ. — هذا ليس مكتوبًا هنا، قالت برفق. إنه يتوقّف على ما ستفعلينه حين تعودين.",
        "وضعت يدها على كتف الصغيرة. — لم يكن أيٌّ من هذا مكتوبًا، أتسمعينني؟ ما صنع الفرق هو شبابٌ لم يتركوا الأمور تجري. عودي يا لوفو. من هناك يبدأ كل شيء." ] },
      { id: "le-choix", title: "حيث يبدأ الاختيار", paragraphs: [
        "خرج القطار من الجبل إلى نهارٍ أبيض واسع. كانت أمها بجانبها، هادئة، كأن شيئًا لم يحدث. لم تكن قد مرّت سوى ثوانٍ قليلة.",
        "— هل حلمتِ في النفق؟ سألت أمها. تبدين شاردة.",
        "فتحت لوفو دفترها لتطمئن. فتوقّف نفَسها. بعد سؤال طفولتها، في الصفحة التالية، كانت هناك كلمات — بخطٍّ لم يكن بعدُ خطّها، لكنه كان خطّها رغم ذلك.",
        "فهمت شيئًا آخر، أكثر إلحاحًا: إنه اليوم. اليوم الذي يُفترَض أن يرحل فيه فابارا. نزلت من القطار قبل أن يتوقّف تمامًا، وركضت.",
        "وجدته على حافة الطريق، الحقيبة على كتفه، ووجهه نحو الجنوب، حيث ينتهي الطريق في البحر. — هل ستُخرجين لي كلامك الفارغ من جديد يا أختي الصغيرة؟",
        "لم تُلقِ لوفو خطابًا. كان لديها سؤالها، وشيءٌ حقيقي. — إن لم يكن هنا شيء، قالت، فلماذا يأتون هم؟",
        "ثم، بصوت أخفض: — وماذا لو لم تكن الثروة هي الحديد يا فابارا. ماذا لو كنّا نحن.",
        "لم يقل فابارا شيئًا. لكنه لم ينطلق على الفور أيضًا. بقي هناك، الحقيبة على كتفه، ينظر تارةً إلى الطريق، وتارةً إلى وجه أخته.",
        "لا أحد يعرف إن كان فابارا كوني قد ركب الزورق في ذلك اليوم. تتوقّف الحكاية حيث يبدأ الاختيار." ] },
    ],
  },
  zh: {
    lang: "zh", dir: "ltr", label: "中文", bookTitle: "科里多里乌姆",
    sections: [
      { id: "fer", title: "那个问题太多的女孩", paragraphs: [
        "据说，在铁山脚下，住着一个问题太多的女孩。她叫洛福·科内，十四岁。",
        "人们说，那座山是铁做的。当太阳从贝拉升起，山脊便呈现出旧锅一样的颜色，空气里有红土的气味。山下流着法拉科河，村子的河，洛福小时候母亲在那里洗衣的河。",
        "那一年，世界的声音变了。卡车整天上上下下。一条笔直的新铁路像一道发亮的疤，划开了山谷。法拉科河变浑了。再没有人在里面游泳。" ] },
      { id: "etrangers", title: "留下来的外国人", paragraphs: [
        "最奇怪的，是那些外国人。他们坐火车来，走公路来，从不知何处来。中国人、加拿大人、塞内加尔人、印度人、澳大利亚人、贝宁人。",
        "他们不是来旅游的。你看见他们戴着安全帽，拿着地图，提着行李箱，带着一种要留下来的人的眼神。" ] },
      { id: "du-vent", title: "又是空话，一如往常", paragraphs: [
        "傍晚，在院子里，法巴拉在数他的钱。法巴拉是哥哥。二十岁，下巴坚硬，梦想望着别处。他说起「那条路」。他说起「大海」。",
        "——西芒杜？他把钞票塞进口袋，说。空话，小妹。一如往常。这首歌早就唱给我们听过了。爸爸听过。爷爷也听过。",
        "洛福不会用数字来回答。但她有眼睛。",
        "——如果是空话，她说，那他们为什么都跑来了？中国人、加拿大人、塞内加尔人、印度人……他们不是来看风景的。",
        "她听见自己说出一句连自己都解释不清的话：——我们逃离自己的村庄，跑去死在海里。他们却离开高楼大厦，跑来荒野里生活。有什么事正在酝酿，法巴拉。",
        "哥哥耸了耸肩。但他没有马上回答。" ] },
      { id: "carnet", title: "本子里的那个问题", paragraphs: [
        "那天夜里，洛福打开她的本子，那本她藏在枕头下的本子。第一页上，她写下了一个问题，只有一个：",
        "「2040年，我会是二十八岁。那时会是什么样子？」",
        "早上，母亲来找她，穿着工作的蓝制服：不久前，她成了走廊线上的一位站长，嘴上不说，心里却很自豪。",
        "——明天，你跟我一起坐车，她说。这趟火车一直开到海边。",
        "门口，舅舅在听着。他也放弃了一样东西：他的田，被矿吞掉了。他得到了补偿。",
        "——他们给了我地的钱，他喃喃道。钱会花掉。地，不会。",
        "洛福把本子紧紧抱在怀里。" ] },
      { id: "train", title: "走廊的大火车", paragraphs: [
        "火车在黎明出发。鼻子贴着车窗，洛福简直不敢相信。工地无比庞大——比她在村子高处想象的大得多。",
        "双轨一直伸向地平线。房子那么大的机器啃咬着山。两者之间，国土壮丽地掠过：蔚蓝的群山、森林、向南奔逃的河流。",
        "——这一切，她问，是我们在建造的吗？",
        "母亲笑了。——这一切。而我们才刚刚开始。" ] },
      { id: "regarde-devant", title: "往前看", paragraphs: [
        "然后火车驶进了山里。黑暗骤然落下。",
        "在岩石深处，一条矿脉开始发光——柔和地，像一块余烬，像某种在呼吸的东西。洛福从没见过这样的景象。车厢里似乎没有别人看见它。",
        "一个声音，很远很远，像一个濒临睡眠的讲故事的人，只是简单地说：——往前看。",
        "然后光把她带走了。" ] },
      { id: "2040", title: "2040年", paragraphs: [
        "当她睁开眼，已是大白天。还是同一座山谷——她认得山脊的形状——可它已经不是原来的样子。空气清澈。到处水光粼粼。绿色重新夺回了一切。",
        "一个念头清晰地在她脑中成形：如果我找到证据……也许他会留下。只要她能给法巴拉带回一样他无法一挥手就抹掉的东西。",
        "一个和她差不多大的男孩好奇地看着她。——你说话好奇怪，他说。你是从那些褐色河流的年代来的吗？" ] },
      { id: "corridorium", title: "科里多里乌姆", paragraphs: [
        "她还没来得及回答，就看见了它。在山谷的尽头，矗立着一个任何词语都无法容纳的东西。那是一座宁巴——那个线条修长的伟大形象，节庆与丰收的形象——却高如一座山。",
        "——我们还在几内亚吗？她屏住呼吸。那是什么？",
        "——科里多里乌姆，男孩回答，仿佛她问的是太阳的名字。你从没见过科里多里乌姆吗？",
        "里面，是一座立着的城：一百层的回廊层层叠叠地向上，黑沉沉的铁的光泽里，又透着轻金属明亮的光。到处都是参观者——许多是外国人，正是在她那个年代里、不知为何纷纷涌来的那些人。" ] },
      { id: "tout-dici", title: "一切都来自这里", paragraphs: [
        "一位女子接待了他们，神态从容，声音里带着她的专业。一位历史学家，这地方的守护者。",
        "——由 ISAU 学院的建筑师们构想，她说。由凯鲁阿内培训中心的学徒们亲手建成。铁来自西芒杜。轻金属来自图盖——一座我们很晚才开的矿，并在这里、在我们自己的土地上加工。一切都来自这里。",
        "她把他们领进一个大厅，墙上挂满世界各地的图像：高塔、桥梁、巨轮。——一百年来，她说，我们的铁都跑去为别人盖房子了。",
        "随后，大厅又转回到科里多里乌姆本身。——这一座，是我们第一次为自己留下的。今天，是他们来看它。",
        "刹那间，洛福明白了在家乡一直折磨着她的那个矛盾。外国人不是无缘无故来的。他们来，是因为终于有了值得一看的东西。" ] },
      { id: "carte", title: "活的地图", paragraphs: [
        "在另一个厅里，你走在一张活的国土地图之内，每一条河、每一个村庄都可以走近。心跳着，洛福往自己的家乡走下去。她寻找法拉科河。",
        "法拉科河清清地流着。——它干净了，洛福低声说。有人把水修好了。",
        "她又找。舅舅的村庄，那个被迁走的村庄。它还在——被重建、被命名、被尊崇，而不是被抹去。",
        "再远处，国土像一座花园般展开：从海岸到东部森林的茂密丛林，挡住了流沙推进的上几内亚，还有整个次区域都来求学的大学。但并非一切都已完成。某处，一个工地仍在施工。一面墙上，一块大牌子邀请人们就一个正在进行的项目展开讨论。没有什么是完美的。一切都在生成之中。" ] },
      { id: "salle-du-temps", title: "时间之厅", paragraphs: [
        "在时间之厅里，保存着对往昔岁月诚实的记忆。一面长墙上写着被迁村庄的名字，每一个都用全称写出，以免被遗忘。",
        "一位老人站在那里，在她身旁。——我们差一点就把一切都原样卖掉了，他没看她，说道。什么也不留下。" ] },
      { id: "mur-des-enfants", title: "孩子们的墙", paragraphs: [
        "接着，便是回答了她那个问题的大厅。一整面墙的孩子面孔。全国每个省一个。每张脸下面，一个名字、一座城，常常是洛福从没听说过的偏远角落。",
        "——我们曾以为财富是铁，历史学家说。可关键原来是学校。每一年，西芒杜学院都从每个省挑选最优秀的学生。哪怕最遥远的。哪怕最贫穷的。",
        "就是这个，洛福想。这就是我要找的。不是一句口号。而是一扇门。一扇向像她这样的孩子敞开的门——也向法巴拉，如果他愿意的话。" ] },
      { id: "celle-que-je-serai", title: "我将成为的那个人", paragraphs: [
        "就在这时，一位女子向她走来。看她的证件，是一位建筑师。一种步态，一道额头，眼角的某种皱褶，洛福觉得自己认得，却说不出在哪里。",
        "女子在她面前停下，从口袋里掏出一个本子。一个又旧又破的本子。同一个。第一页上，同一个问题，同样的、孩子的笔迹。",
        "——我一直留着它，女子说。这个问题，我每天都问自己。",
        "洛福望着她，脚下的地仿佛动了。是她。是二十八岁的洛福·科内。学院第一届的毕业生。设计了科里多里乌姆的人之一。",
        "——那我哥哥……法巴拉。他走了吗？",
        "女子看了她很久。她没有撒谎。也没有安慰。——这一点，这里没有写，她轻声说。这取决于你回去以后做什么。",
        "她把一只手放在小女孩的肩上。——这一切都没有写定，你听见了吗？真正带来改变的，是一些不肯听之任之的年轻人。回去吧，洛福。一切都从那里开始。" ] },
      { id: "le-choix", title: "选择从这里开始", paragraphs: [
        "火车驶出大山，进入一片广阔的白昼。母亲在她身旁，平静得仿佛什么都没发生过。其实才过了几秒钟。",
        "——你在隧道里做梦了吗？母亲问。你看上去心不在焉。",
        "洛福打开本子，想让自己安心。她的呼吸停住了。在她孩提时的问题之后，下一页上，有一行字——那笔迹还不是她的，却又分明是她的。",
        "她明白了另一件更紧迫的事：就是今天。今天，法巴拉就要走了。火车还没完全停稳，她就跳下车，奔跑起来。",
        "她在路边找到了他，包搭在肩上，脸朝着南方，朝着那条路终于汇入大海的方向。——又要跟我说你那套空话了吗，小妹？",
        "洛福没有对他长篇大论。她有她的问题，还有一件真实的事。——如果这里什么都没有，她说，那他们为什么要来？",
        "然后，声音更低：——又如果，财富不是铁呢，法巴拉。如果，是我们呢。",
        "法巴拉什么也没说。可他也没有马上动身。他留在那里，包搭在肩上，目光在那条路和妹妹的脸之间来回。",
        "没有人知道，法巴拉·科内那天是否登上了那只独木舟。故事，停在选择开始的地方。" ] },
    ],
  },
};
