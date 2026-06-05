// « Le Trésor de nos Terres » — Pati Aventure (10–12 ans).
// Adaptation lisible du manuscrit V5 (13 chapitres), récit à la 1re personne (Yarie),
// 13 sections alignées sur 4 langues. NB géo : Maferinya = Forécariah, au sud de Conakry
// (harmonisé ; le manuscrit comportait une incohérence « 500 km » au ch.9).
export type TresorLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[] };
type Book = { lang: TresorLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const TRESOR_ML: Record<TresorLang, Book> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le Trésor de nos Terres",
    sections: [
      { id: "yarie", title: "Yarie de Conakry", paragraphs: [
        "Je m'appelle Yarie. J'ai onze ans et j'habite à Conakry.",
        "À Conakry, tout vient de loin : les légumes du Sénégal ou du Maroc, le riz de l'Inde, le lait en poudre d'Europe.",
        "Mon père travaille pour une compagnie minière. Il rentre tard, il parle de tonnes et de camions, et il dit que la Guinée est riche.",
        "Riche de quoi, exactement ? Je ne le savais pas encore. Mais ces grandes vacances-là, j'allais comprendre." ] },
      { id: "route", title: "La route vers Tamita", paragraphs: [
        "Chaque année, pour les grandes vacances, on va chez Mamie Fatou, à Tamita, dans la préfecture de Boffa — à trois heures de route de Conakry.",
        "Cette année, j'avais les yeux collés à la vitre. En classe, j'avais vu une carte : Boffa était au cœur des mines de bauxite.",
        "Sur la route, on les voyait : les camions immenses chargés de pierres rouges, la poussière sur les feuilles, les collines tranchées net comme une orange coupée en deux.",
        "— C'est quoi, tout ça ? demandai-je.",
        "— C'est la bauxite, dit mon père. La richesse de la Guinée.",
        "Je regardai les arbres couverts de poussière rouge. Je n'étais pas sûre que ce soit ça, la richesse." ] },
      { id: "mamie", title: "Mamie Fatou et Tchotcho", paragraphs: [
        "Mamie Fatou n'était pas comme les autres grand-mères. Elle avait des mains de travailleuse, et autour de sa maison, un jardin qui donnait toute l'année.",
        "— Regarde ! Les tomates sont prêtes. Et les aubergines. Et le gombo. — Tout ça vient de votre jardin ? — Tout. Ici, on ne manque jamais de rien… pour l'instant.",
        "Je remarquai ce « pour l'instant ». Au loin, derrière les manguiers, une colline avait perdu sa forêt ; la poussière rouge gagnait du terrain, chaque année un peu plus près.",
        "À Conakry, nos légumes venaient d'un sachet plastique. Ici, ils venaient de la terre. Cela faisait une différence immense." ] },
      { id: "question-yarie", title: "La question de Yarie", paragraphs: [
        "Le soir, je posai la question qui me trottait dans la tête.",
        "— Mamie, pourquoi dit-on que la Guinée est riche avec la bauxite, alors que les villages autour des mines sont si pauvres ?",
        "Mamie arracha une herbe et la tint dans ses mains.",
        "— Tu vois cette herbe ? La terre l'a fait pousser en quelques semaines. La bauxite, la terre l'a faite en combien de temps ? — Des millions d'années ?",
        "— Alors qu'est-ce qui est le plus précieux : ce qu'on peut refaire en quelques semaines, ou ce qu'on ne refera jamais ?",
        "— Mais c'est quoi, exactement, la bauxite ? — Ça, c'est l'affaire de ton père. Lui connaît les pierres ; moi, je connais la terre. Demande-lui." ] },
      { id: "champs", title: "Les champs de Mamie", paragraphs: [
        "Le lendemain, Mamie nous réveilla à l'aube. — Les champs n'attendent pas.",
        "Tchotcho savait déjà tout faire ; moi, je confondais les mauvaises herbes avec les plants de légumes.",
        "— La terre, ça s'apprend, comme lire, comme écrire. Tes ancêtres savaient. Ton père savait encore un peu. Mais en ville, on oublie.",
        "— Et si on oublie complètement ? — C'est ça, le vrai danger. Pas la pauvreté : l'oubli. Un peuple qui oublie de cultiver sa terre dépend de tout le monde pour manger. Et qui dépend de tout le monde pour manger n'est libre de rien.",
        "Je montrai les bornes blanches au bord du champ. — Et ça ? — Ça, c'est la mine qui s'approche. Un jour, elle voudra cette terre aussi. Je ne veux pas attendre qu'on vienne nous chasser." ] },
      { id: "pere", title: "Ce que sait mon père", paragraphs: [
        "Mon père passa quelques jours au village. Un soir, je lui montrai le caillou rouge ramassé sur la route.",
        "— Papa, c'est ça la bauxite ? — Oui. Du fer et de l'aluminium mélangés. On l'extrait, on la transforme, et on en fait des avions, des voitures, des canettes.",
        "— Pourquoi tout le monde vient en Guinée pour ça ? — Parce que la Guinée a les plus grandes réserves du monde. Quand une entreprise trouve de la bauxite sous un terrain, l'État lui accorde le droit de creuser.",
        "— Même là où des gens habitent ? demanda Tchotcho. — Alors les familles doivent partir. On les reloge, on les dédommage. C'est la règle. « Le prix du développement », comme on dit au bureau.",
        "— Et si la bauxite était sous Tamita ? demanda Tchotcho, tout bas. Mon père regarda la nuit du côté des collines, puis rangea la carte. — On verra, dit-il.",
        "Cette nuit-là, je compris que mon père connaissait les pierres mieux que personne — et qu'il évitait de regarder la terre." ] },
      { id: "secret", title: "Le secret de la terre rouge", paragraphs: [
        "Le lendemain, je racontai à Mamie ce que papa m'avait expliqué. Elle prit une poignée de terre rouge dans sa main.",
        "— Ton père t'a dit ce que la bauxite vaut. Moi, je vais te dire ce que la terre garde. Sous cette terre, il y a la pierre rouge qu'on emporte. Mais sur cette terre, il y a tout le reste : les tomates, le manioc, les manguiers, l'eau, les abeilles. Ça, on ne l'emporte pas. Ça reste — si on en prend soin.",
        "— Alors qu'est-ce qui est le plus riche ? La pierre qu'on vend une seule fois, ou la terre qui donne chaque année ?",
        "— La bauxite ne repousse pas, Yarie. La terre, si. C'est ça, le secret de la terre rouge." ] },
      { id: "question-tchotcho", title: "La question de Tchotcho", paragraphs: [
        "Un soir, au bord des champs, Tchotcho me demanda : — Toi, tu veux faire quoi après l'école ?",
        "Je n'y avais jamais vraiment réfléchi. À Conakry, on disait : médecin, avocate, ingénieure pétrolière. Rien sur la terre.",
        "— Moi, dit Tchotcho, je veux être agronome : quelqu'un qui sait faire produire la terre, la protéger, nourrir les gens. Et un jour, je serai l'agronome de la nouvelle ferme de Mamie.",
        "— La Guinée a besoin d'agronomes, pas seulement de mines. Les mines s'épuisent. La terre, si on la respecte, ne s'épuise pas." ] },
      { id: "plan", title: "Le plan de Mamie Fatou", paragraphs: [
        "L'avant-dernier soir, Mamie me parla d'un projet qu'elle gardait depuis longtemps.",
        "— Tu as vu les bornes au bord des champs. Un jour, la mine voudra Tamita. Je ne veux pas attendre qu'on me chasse comme on en a chassé d'autres.",
        "— Alors qu'est-ce que tu vas faire ? — J'ai déjà acheté une terre. À Maferinya, dans la préfecture de Forécariah, au sud de Conakry. Je l'ai payée avec mes économies, sou après sou, pendant des années.",
        "Elle ouvrit son cahier et me montra le croquis d'une parcelle. — C'est à quelques heures de route, de l'autre côté de la capitale. Une terre vivante, sans mine. Le mois prochain, je passe par Conakry, puis je vais une semaine à Maferinya. C'est la bonne saison pour les semis : la terre est gorgée de pluie. Je prépare les pépinières, un poulailler, un enclos pour les moutons qu'on doit me livrer.",
        "— Tu déménages déjà ? — Pas encore. Je prépare. Je veux que la terre soit prête quand je serai prête — et ça ne sera plus très long. Toi, tu viendras m'aider depuis Conakry ? C'est tout près, là-bas." ] },
      { id: "graines", title: "Le sachet de graines", paragraphs: [
        "Le dernier matin, Mamie me mit un petit sachet dans la main. Des graines.",
        "— Des graines de tomates. De chez nous. Pas des graines importées : les nôtres. Celles que ma mère m'a données, et sa mère avant elle.",
        "— Qu'est-ce que j'en fais ? — Tu les plantes. À Conakry, sur ton balcon si tu n'as pas de jardin. Et tu regardes pousser, en attendant de venir m'aider à Maferinya.",
        "— Et quand tes enfants te demanderont d'où viennent les tomates, tu leur diras : de chez nous. Pas du Sénégal, pas du Maroc. De chez nous.",
        "Je serrai le sachet fort. Il était petit, mais il pesait lourd." ] },
      { id: "retour", title: "Le retour", paragraphs: [
        "Les vacances se terminaient. Sur le chemin du retour, je regardai encore les camions de bauxite, la poussière rouge, les collines entaillées.",
        "Mais je regardais aussi autre chose : les rizières dans les bas-fonds, les femmes portant des bassines de légumes, les arbres fruitiers le long des routes. La vie qui continuait, entre les mines.",
        "— Tu as aimé chez Mamie ? — Oui. Elle m'a appris ce qu'est la vraie richesse. Et elle prépare une ferme, loin des mines.",
        "Mon père resta longtemps silencieux. Lui aussi avait grandi dans ces champs. Puis il dit, tout doucement : « Elle me l'a appris aussi, quand j'étais petit. J'avais oublié. »" ] },
      { id: "balcon", title: "Les graines sur le balcon", paragraphs: [
        "À Conakry, je plantai les graines de Mamie dans des pots, sur le balcon. Ma mère me regarda faire avec des yeux ronds. — Tu fais quoi ? — Je plante des tomates. Des tomates de chez nous.",
        "Trois semaines plus tard, les premières feuilles sortirent : minuscules, vertes, vivantes.",
        "Je pensai à Mamie Fatou, à Tchotcho qui voulait être agronome, et à la terre de Maferinya qui attendait. Mamie avait dit qu'elle m'y attendrait. Le mois suivant arriva vite." ] },
      { id: "ferme", title: "Le premier jour de la ferme", paragraphs: [
        "Cinq semaines plus tard, Mamie passa par Conakry, comme prévu. Le lendemain, elle m'emmena à Maferinya : c'était tout près, quelques heures au sud de la ville.",
        "La terre était verte, gorgée de pluie. Des voisines étaient venues aider. On aligna les pépinières comme des petits soldats, on finit le poulailler, on monta l'enclos — juste à temps : un camion amena les premiers moutons, qui descendirent en bêlant.",
        "Mamie me tendit un jeune manguier. — Plante-le, toi. Le premier arbre de la ferme. Je creusai, je posai les racines, je tassai la terre rouge. Je pensai à Tchotcho : un jour, il serait l'agronome de cette ferme.",
        "Mamie n'avait pas attendu qu'on la chasse : elle avait pris les devants, avec ses économies et ses semences. Et moi, j'étais là, les mains dans la terre.",
        "La bauxite ne repousse pas. Les graines, si. C'est ça, le vrai trésor de nos terres." ] },
    ],
  },
  en: {
    lang: "en", dir: "ltr", label: "English", bookTitle: "The Treasure of Our Lands",
    sections: [
      { id: "yarie", title: "Yarie from Conakry", paragraphs: [
        "My name is Yarie. I am eleven years old and I live in Conakry.",
        "In Conakry, everything comes from far away: vegetables from Senegal or Morocco, rice from India, powdered milk from Europe.",
        "My father works for a mining company. He comes home late, talks of tonnes and trucks, and says that Guinea is rich.",
        "Rich with what, exactly? I didn't know yet. But that summer, I was going to understand." ] },
      { id: "route", title: "The Road to Tamita", paragraphs: [
        "Every year, for the summer holidays, we go to Mamie Fatou's, in Tamita, in the prefecture of Boffa — three hours' drive from Conakry.",
        "This year, my eyes were glued to the window. In class, I had seen a map: Boffa was at the heart of the bauxite mines.",
        "On the road, you could see them: huge trucks loaded with red stones, the dust on the leaves, the hills sliced clean through like an orange cut in two.",
        "— What is all that? I asked.",
        "— That's bauxite, said my father. The wealth of Guinea.",
        "I looked at the trees covered in red dust. I wasn't sure that was what wealth looked like." ] },
      { id: "mamie", title: "Mamie Fatou and Tchotcho", paragraphs: [
        "Mamie Fatou was not like other grandmothers. She had a worker's hands, and around her house, a garden that gave all year round.",
        "— Look! The tomatoes are ready. And the aubergines. And the okra. — All this is from your garden? — All of it. Here, we never lack for anything… for now.",
        "I noticed that \"for now.\" Far off, behind the mango trees, a hill had lost its forest; the red dust was gaining ground, a little closer every year.",
        "In Conakry, our vegetables came out of a plastic bag. Here, they came from the soil. That made an enormous difference." ] },
      { id: "question-yarie", title: "Yarie's Question", paragraphs: [
        "That evening, I asked the question that had been turning in my head.",
        "— Mamie, why do people say Guinea is rich with bauxite, when the villages around the mines are so poor?",
        "Mamie pulled up a blade of grass and held it in her hands.",
        "— You see this grass? The earth grew it in a few weeks. And the bauxite — how long did the earth take to make it? — Millions of years?",
        "— So which is more precious: what can be made again in a few weeks, or what can never be made again?",
        "— But what exactly is bauxite? — That's your father's business. He knows the stones; I know the soil. Ask him." ] },
      { id: "champs", title: "Mamie's Fields", paragraphs: [
        "The next day, Mamie woke us at dawn. — The fields don't wait.",
        "Tchotcho already knew how to do everything; I kept mistaking the weeds for the vegetable seedlings.",
        "— The soil is something you learn, like reading, like writing. Your ancestors knew. Your father still knew a little. But in the city, people forget.",
        "— And if we forget completely? — That's the real danger. Not poverty: forgetting. A people who forget to farm their land depend on everyone else to eat. And whoever depends on everyone else to eat is truly free of nothing.",
        "I pointed to the white markers at the edge of the field. — And those? — Those are the mine drawing closer. One day, it will want this land too. I don't want to wait until they come to drive us out." ] },
      { id: "pere", title: "What My Father Knows", paragraphs: [
        "My father spent a few days in the village. One evening, I showed him the red stone I had picked up on the road.",
        "— Dad, is this bauxite? — Yes. Iron and aluminium mixed together. We dig it out, transform it, and make planes, cars and cans from it.",
        "— Why does everyone come to Guinea for it? — Because Guinea has the largest reserves in the world. When a company finds bauxite under a piece of land, the State grants it the right to dig.",
        "— Even where people live? asked Tchotcho. — Then the families have to leave. They are rehoused, compensated. Those are the rules. \"The price of development,\" as we say at the office.",
        "— And if the bauxite were under Tamita? asked Tchotcho, very softly. My father looked out at the night, toward the hills, then put the map away. — We'll see, he said.",
        "That night, I understood that my father knew the stones better than anyone — and that he avoided looking at the soil." ] },
      { id: "secret", title: "The Secret of the Red Earth", paragraphs: [
        "The next day, I told Mamie what Dad had explained. She scooped up a handful of red earth.",
        "— Your father told you what bauxite is worth. I will tell you what the earth keeps. Under this earth is the red stone we carry away. But on this earth is all the rest: tomatoes, cassava, mango trees, water, bees. That, we do not carry away. It stays — if we take care of it.",
        "— So which is richer? The stone you sell only once, or the soil that gives every year?",
        "— Bauxite does not grow back, Yarie. The soil does. That is the secret of the red earth." ] },
      { id: "question-tchotcho", title: "Tchotcho's Question", paragraphs: [
        "One evening, at the edge of the fields, Tchotcho asked me: — What do you want to do after school?",
        "I had never really thought about it. In Conakry, people said: doctor, lawyer, oil engineer. Nothing about the land.",
        "— Me, said Tchotcho, I want to be an agronomist: someone who knows how to make the land produce, protect it, feed people. And one day, I'll be the agronomist of Mamie's new farm.",
        "— Guinea needs agronomists, not just mines. Mines run out. The soil, if you respect it, never runs out." ] },
      { id: "plan", title: "Mamie Fatou's Plan", paragraphs: [
        "On the second-to-last evening, Mamie told me about a plan she had kept for a long time.",
        "— You saw the markers at the edge of the fields. One day, the mine will want Tamita. I don't want to wait to be driven out, as others have been.",
        "— So what are you going to do? — I have already bought land. In Maferinya, in the prefecture of Forécariah, south of Conakry. I paid for it with my savings, coin by coin, over years.",
        "She opened her notebook and showed me the sketch of a plot. — It's a few hours' drive away, on the other side of the capital. Living land, with no mine. Next month, I pass through Conakry, then I spend a week in Maferinya. It's the right season for sowing: the soil is soaked with rain. I'll set up the nurseries, a henhouse, a pen for the sheep being delivered to me.",
        "— You're moving already? — Not yet. I'm preparing. I want the land to be ready when I am ready — and that won't be long now. Will you come and help me, from Conakry? It's quite close, over there." ] },
      { id: "graines", title: "The Packet of Seeds", paragraphs: [
        "On the last morning, Mamie put a small packet in my hand. Seeds.",
        "— Tomato seeds. From home. Not imported seeds: ours. The ones my mother gave me, and her mother before her.",
        "— What do I do with them? — You plant them. In Conakry, on your balcony if you have no garden. And you watch them grow, while you wait to come and help me in Maferinya.",
        "— And when your children ask you where the tomatoes come from, you'll tell them: from home. Not from Senegal, not from Morocco. From home.",
        "I held the packet tight. It was small, but it weighed heavy." ] },
      { id: "retour", title: "The Journey Back", paragraphs: [
        "The holidays were ending. On the way back, I looked again at the bauxite trucks, the red dust, the gashed hills.",
        "But I was also looking at something else: the rice paddies in the lowlands, the women carrying basins of vegetables, the fruit trees along the roads. Life going on, between the mines.",
        "— Did you enjoy Mamie's? — Yes. She taught me what real wealth is. And she's preparing a farm, far from the mines.",
        "My father stayed silent for a long while. He too had grown up in those fields. Then he said, very softly: \"She taught me that too, when I was little. I had forgotten.\"" ] },
      { id: "balcon", title: "The Seeds on the Balcony", paragraphs: [
        "In Conakry, I planted Mamie's seeds in pots, on the balcony. My mother watched me, wide-eyed. — What are you doing? — I'm planting tomatoes. Tomatoes from home.",
        "Three weeks later, the first leaves came out: tiny, green, alive.",
        "I thought of Mamie Fatou, of Tchotcho who wanted to be an agronomist, and of the land in Maferinya that was waiting. Mamie had said she would be waiting for me there. The next month came quickly." ] },
      { id: "ferme", title: "The First Day of the Farm", paragraphs: [
        "Five weeks later, Mamie passed through Conakry, as planned. The next day, she took me to Maferinya: it was quite close, a few hours south of the city.",
        "The land was green, soaked with rain. Neighbour women had come to help. We lined up the nurseries like little soldiers, finished the henhouse, raised the pen — just in time: a truck brought the first sheep, which came down bleating.",
        "Mamie handed me a young mango tree. — You plant it. The first tree of the farm. I dug, set the roots, pressed down the red earth. I thought of Tchotcho: one day, he would be the agronomist of this farm.",
        "Mamie had not waited to be driven out: she had taken the lead, with her savings and her seeds. And I was there, hands in the soil.",
        "Bauxite does not grow back. Seeds do. That is the true treasure of our lands." ] },
    ],
  },
  ar: {
    lang: "ar", dir: "rtl", label: "العربية", bookTitle: "كنز أرضنا",
    sections: [
      { id: "yarie", title: "ياري من كوناكري", paragraphs: [
        "اسمي ياري. عمري إحدى عشرة سنة، وأسكن في كوناكري.",
        "في كوناكري، كل شيء يأتي من بعيد: الخضار من السنغال أو المغرب، والأرز من الهند، والحليب المجفّف من أوروبا.",
        "أبي يعمل في شركة تعدين. يعود متأخّرًا، يتحدّث عن الأطنان والشاحنات، ويقول إن غينيا غنية.",
        "غنية بماذا، بالضبط؟ لم أكن أعرف بعد. لكن في تلك العطلة الصيفية، كنتُ سأفهم." ] },
      { id: "route", title: "الطريق إلى تاميتا", paragraphs: [
        "كل عام، في العطلة الصيفية، نذهب إلى الجدة فاتو، في تاميتا، بمحافظة بوفا — على بُعد ثلاث ساعات من كوناكري.",
        "هذا العام، التصقت عيناي بالزجاج. ففي الصف رأيتُ خريطة: بوفا في قلب مناجم البوكسيت.",
        "وعلى الطريق، كنّا نراها: شاحنات ضخمة محمّلة بحجارة حمراء، وغبار يعلق بأوراق الأشجار، وتلال مقطوعة بحدّة كبرتقالة شُطرت نصفين.",
        "— ما كل هذا؟ سألت.",
        "— هذا هو البوكسيت، قال أبي. ثروة غينيا.",
        "نظرتُ إلى الأشجار المغطّاة بالغبار الأحمر. لم أكن واثقة أن هذه هي الثروة." ] },
      { id: "mamie", title: "الجدة فاتو وتشوتشو", paragraphs: [
        "لم تكن الجدة فاتو كسائر الجدّات. كانت يداها يدَي عاملة، وحول بيتها حديقة تُعطي طوال السنة.",
        "— انظري! الطماطم جاهزة. والباذنجان. والبامية. — كل هذا من حديقتكم؟ — كله. هنا لا ينقصنا شيء أبدًا… في الوقت الراهن.",
        "لاحظتُ قولها «في الوقت الراهن». في البعيد، خلف أشجار المانجو، كان تلٌّ قد فقد غابته؛ والغبار الأحمر يزحف، كل عام أقرب قليلًا.",
        "في كوناكري، كان خضارنا يخرج من كيس بلاستيكي. هنا، كان يخرج من الأرض. وهذا فرق هائل." ] },
      { id: "question-yarie", title: "سؤال ياري", paragraphs: [
        "في المساء، طرحتُ السؤال الذي كان يدور في رأسي.",
        "— جدّتي، لماذا يقولون إن غينيا غنية بالبوكسيت، بينما القرى حول المناجم فقيرة جدًا؟",
        "اقتلعت الجدة عشبةً وأمسكتها بيديها.",
        "— أترين هذه العشبة؟ أنبتتها الأرض في بضعة أسابيع. والبوكسيت، في كم من الزمن صنعته الأرض؟ — ملايين السنين؟",
        "— إذًا، ما الأثمن: ما يمكن صنعه من جديد في بضعة أسابيع، أم ما لن يُصنع أبدًا من جديد؟",
        "— لكن ما هو البوكسيت بالضبط؟ — هذا شأن أبيك. هو يعرف الحجارة؛ أما أنا فأعرف الأرض. اسأليه." ] },
      { id: "champs", title: "حقول الجدة", paragraphs: [
        "في الغد، أيقظتنا الجدة عند الفجر. — الحقول لا تنتظر.",
        "كان تشوتشو يُتقن كل شيء؛ أما أنا فكنتُ أخلط بين الأعشاب الضارّة وشتلات الخضار.",
        "— الأرض تُتعلّم، كالقراءة، كالكتابة. أجدادك كانوا يعرفون. وأبوك ما زال يعرف قليلًا. لكن في المدينة، ينسى الناس.",
        "— وإن نسينا تمامًا؟ — هذا هو الخطر الحقيقي. ليس الفقر، بل النسيان. شعبٌ ينسى زراعة أرضه يعتمد على الجميع ليأكل. ومن يعتمد على الجميع ليأكل ليس حرًّا في أي شيء حقًّا.",
        "أشرتُ إلى العلامات البيضاء عند حافة الحقل. — وتلك؟ — تلك هي المنجم يقترب. يومًا ما، سيريد هذه الأرض أيضًا. لا أريد أن أنتظر حتى يأتوا ليطردونا." ] },
      { id: "pere", title: "ما يعرفه أبي", paragraphs: [
        "أمضى أبي بضعة أيام في القرية. ذات مساء، أريته الحجر الأحمر الذي التقطته على الطريق.",
        "— أبي، أهذا هو البوكسيت؟ — نعم. حديد وألمنيوم ممزوجان. نستخرجه، نحوّله، ونصنع منه الطائرات والسيارات والعلب.",
        "— ولماذا يأتي الجميع إلى غينيا من أجله؟ — لأن لدى غينيا أكبر احتياطيات في العالم. حين تجد شركة بوكسيت تحت أرض، تمنحها الدولة حق الحفر.",
        "— حتى حيث يعيش الناس؟ سأل تشوتشو. — عندئذٍ على العائلات أن ترحل. يُعاد إسكانها، وتُعوَّض. تلك هي القاعدة. «ثمن التنمية»، كما نقول في المكتب.",
        "— وإن كان البوكسيت تحت تاميتا؟ سأل تشوتشو بصوت خافت. نظر أبي إلى الليل ناحية التلال، ثم طوى الخريطة. — سنرى، قال.",
        "في تلك الليلة، فهمتُ أن أبي يعرف الحجارة أكثر من أي أحد — وأنه يتجنّب النظر إلى الأرض." ] },
      { id: "secret", title: "سرّ الأرض الحمراء", paragraphs: [
        "في الغد، رويتُ للجدة ما شرحه لي أبي. أخذت حفنة من التراب الأحمر في يدها.",
        "— أبوك قال لكِ كم يساوي البوكسيت. وأنا سأقول لكِ ماذا تحفظ الأرض. تحت هذه الأرض الحجر الأحمر الذي نأخذه. لكن فوق هذه الأرض كل ما تبقّى: الطماطم، والمنيهوت، وأشجار المانجو، والماء، والنحل. هذا لا نأخذه. يبقى — إن اعتنينا به.",
        "— إذًا، أيّهما أغنى؟ الحجر الذي نبيعه مرّة واحدة، أم الأرض التي تُعطي كل عام؟",
        "— البوكسيت لا ينبت من جديد يا ياري. أما الأرض، فنعم. هذا هو سرّ الأرض الحمراء." ] },
      { id: "question-tchotcho", title: "سؤال تشوتشو", paragraphs: [
        "ذات مساء، على حافة الحقول، سألني تشوتشو: — وأنتِ، ماذا تريدين أن تفعلي بعد المدرسة؟",
        "لم أكن قد فكّرتُ في ذلك حقًّا. في كوناكري كانوا يقولون: طبيبة، محامية، مهندسة بترول. لا شيء عن الأرض.",
        "— أنا، قال تشوتشو، أريد أن أكون مهندسًا زراعيًا: من يعرف كيف يجعل الأرض تُنتج، ويحميها، ويُطعم الناس. ويومًا ما، سأكون المهندس الزراعي لمزرعة الجدة الجديدة.",
        "— غينيا بحاجة إلى مهندسين زراعيين، لا إلى المناجم وحدها. المناجم تنضب. أما الأرض، إن احترمناها، فلا تنضب." ] },
      { id: "plan", title: "خطة الجدة فاتو", paragraphs: [
        "في المساء قبل الأخير، حدّثتني الجدة عن مشروع كانت تحتفظ به منذ زمن طويل.",
        "— رأيتِ العلامات عند حافة الحقول. يومًا ما، سيريد المنجم تاميتا. لا أريد أن أنتظر حتى أُطرَد، كما طُرد غيري.",
        "— إذًا ماذا ستفعلين؟ — لقد اشتريتُ أرضًا. في مافيرينيا، بمحافظة فوريكاريا، جنوب كوناكري. دفعتُ ثمنها من مدّخراتي، قرشًا قرشًا، على مدى سنوات.",
        "فتحت دفترها وأرتني رسمًا لقطعة أرض. — على بُعد بضع ساعات بالسيارة، على الجانب الآخر من العاصمة. أرض حيّة، بلا منجم. الشهر القادم أمرّ بكوناكري، ثم أقضي أسبوعًا في مافيرينيا. إنه الموسم المناسب للبذر: الأرض مُشبَعة بالمطر. سأُعدّ المشاتل، وحظيرة دجاج، وزريبة لخراف ستُسلَّم إليّ.",
        "— أتنتقلين من الآن؟ — ليس بعد. أنا أُحضّر. أريد أن تكون الأرض جاهزة حين أكون جاهزة — ولن يطول ذلك كثيرًا. وأنتِ، ستأتين لمساعدتي من كوناكري؟ المكان قريب جدًا هناك." ] },
      { id: "graines", title: "كيس البذور", paragraphs: [
        "في الصباح الأخير، وضعت الجدة في يدي كيسًا صغيرًا. بذورًا.",
        "— بذور طماطم. من عندنا. ليست بذورًا مستوردة: بذورنا نحن. تلك التي أعطتني إياها أمي، وأمها قبلها.",
        "— وماذا أفعل بها؟ — تزرعينها. في كوناكري، على شرفتك إن لم تكن لديك حديقة. وتراقبينها تنمو، ريثما تأتين لمساعدتي في مافيرينيا.",
        "— وحين يسألك أولادك من أين تأتي الطماطم، ستقولين لهم: من عندنا. لا من السنغال، ولا من المغرب. من عندنا.",
        "ضممتُ الكيس بقوّة. كان صغيرًا، لكنه كان ثقيلًا." ] },
      { id: "retour", title: "العودة", paragraphs: [
        "كانت العطلة تقترب من نهايتها. في طريق العودة، نظرتُ من جديد إلى شاحنات البوكسيت، والغبار الأحمر، والتلال المشطورة.",
        "لكني كنتُ أنظر أيضًا إلى شيء آخر: حقول الأرز في المنخفضات، والنساء يحملن أطباق الخضار، وأشجار الفاكهة على جانبي الطرق. الحياة تمضي، بين المناجم.",
        "— هل أعجبك المقام عند الجدة؟ — نعم. علّمتني ما هي الثروة الحقيقية. وهي تُعدّ مزرعة، بعيدًا عن المناجم.",
        "صمت أبي طويلًا. هو أيضًا نشأ في تلك الحقول. ثم قال بهدوء شديد: «هي علّمتني ذلك أيضًا، حين كنتُ صغيرًا. لكني نسيت.»" ] },
      { id: "balcon", title: "البذور على الشرفة", paragraphs: [
        "في كوناكري، زرعتُ بذور الجدة في أصص على الشرفة. نظرت إليّ أمي بعينين واسعتين. — ماذا تفعلين؟ — أزرع طماطم. طماطم من عندنا.",
        "بعد ثلاثة أسابيع، خرجت الأوراق الأولى: صغيرة، خضراء، حيّة.",
        "فكّرتُ في الجدة فاتو، وفي تشوتشو الذي يريد أن يصير مهندسًا زراعيًا، وفي أرض مافيرينيا التي تنتظر. قالت الجدة إنها ستنتظرني هناك. وجاء الشهر التالي سريعًا." ] },
      { id: "ferme", title: "أول يوم في المزرعة", paragraphs: [
        "بعد خمسة أسابيع، مرّت الجدة بكوناكري، كما اتُّفق. وفي الغد أخذتني إلى مافيرينيا: كان المكان قريبًا، على بُعد بضع ساعات جنوب المدينة.",
        "كانت الأرض خضراء، مُشبَعة بالمطر. جاءت جارات للمساعدة. صَفَفنا المشاتل كجنود صغار، وأكملنا حظيرة الدجاج، ورفعنا الزريبة — في الوقت المناسب تمامًا: جاءت شاحنة بأول الخراف، فنزلت ثاغية.",
        "ناولتني الجدة شتلة مانجو صغيرة. — ازرعيها أنتِ. أول شجرة في المزرعة. حفرتُ، ووضعتُ الجذور، وكبستُ التراب الأحمر. فكّرتُ في تشوتشو: يومًا ما، سيكون المهندس الزراعي لهذه المزرعة.",
        "لم تنتظر الجدة أن تُطرَد: بل بادرت، بمدّخراتها وبذورها. وكنتُ أنا هناك، ويداي في التراب.",
        "البوكسيت لا ينبت من جديد. أما البذور، فنعم. هذا هو كنز أرضنا الحقيقي." ] },
    ],
  },
  zh: {
    lang: "zh", dir: "ltr", label: "中文", bookTitle: "我们土地的宝藏",
    sections: [
      { id: "yarie", title: "来自科纳克里的雅丽", paragraphs: [
        "我叫雅丽。我十一岁，住在科纳克里。",
        "在科纳克里，一切都来自远方：蔬菜来自塞内加尔或摩洛哥，大米来自印度，奶粉来自欧洲。",
        "我父亲在一家矿业公司工作。他很晚才回家，开口就是吨数和卡车，还说几内亚很富有。",
        "到底富在哪里呢？我那时还不知道。但就在那个暑假，我将会明白。" ] },
      { id: "route", title: "通往塔米塔的路", paragraphs: [
        "每年暑假，我们都去法图奶奶家，在博法省的塔米塔——离科纳克里三小时车程。",
        "今年，我的眼睛紧贴着车窗。因为在课堂上，我看过一张地图：博法正处在铝土矿区的中心。",
        "一路上，都能看见它们：装满红色矿石的巨型卡车，落在树叶上的尘土，被齐齐削开的山丘，像被切成两半的橙子。",
        "——这都是什么？我问。",
        "——这是铝土矿，父亲说。几内亚的财富。",
        "我望着覆满红尘的树。我不确定这就是所谓的财富。" ] },
      { id: "mamie", title: "法图奶奶和乔乔", paragraphs: [
        "法图奶奶和别的奶奶不一样。她有一双劳动者的手，房子周围还有一座一年到头都结果的园子。",
        "——你看！番茄熟了。还有茄子。还有秋葵。——这些都是你们园子里的？——全都是。在这里，我们从不缺什么……目前是这样。",
        "我注意到那句「目前是这样」。远处，芒果树后面，一座山丘失去了它的森林；红色的尘土在一年年逼近。",
        "在科纳克里，我们的蔬菜是从塑料袋里拿出来的。在这里，它们是从土地里长出来的。这是天壤之别。" ] },
      { id: "question-yarie", title: "雅丽的问题", paragraphs: [
        "晚上，我问出了一直在脑海里打转的问题。",
        "——奶奶，为什么人们说几内亚因为铝土矿而富有，可矿区周围的村庄却那么穷？",
        "奶奶拔起一根草，握在手里。",
        "——你看这根草？大地几个星期就让它长出来了。那铝土矿呢，大地花了多久才造出它？——几百万年？",
        "——那么，哪个更珍贵：几个星期就能再造出来的，还是永远再也造不出来的？",
        "——可铝土矿到底是什么呢？——这是你父亲的事。他懂石头，我懂土地。去问他吧。" ] },
      { id: "champs", title: "奶奶的田", paragraphs: [
        "第二天，奶奶天一亮就叫醒我们。——田地不等人。",
        "乔乔早就什么都会做了；我却笨手笨脚，把杂草和菜苗弄混。",
        "——土地是要学的，就像识字，就像写字。你的祖先懂。你父亲还懂一点。可在城里，人们就忘了。",
        "——要是完全忘了呢？——那才是真正的危险。不是贫穷，而是遗忘。一个忘了耕种自己土地的民族，吃饭就要依赖所有人。而吃饭依赖所有人的，其实什么自由都没有。",
        "我指着田边的白色界桩。——那些是什么？——那些，是矿在逼近。总有一天，它也会想要这片地。我不想等着被人赶走。" ] },
      { id: "pere", title: "父亲所知道的", paragraphs: [
        "父亲来村里住了几天。一天傍晚，我把在路上捡的红石头拿给他看。",
        "——爸爸，这就是铝土矿吗？——是的。铁和铝混在一起。我们把它挖出来，加工，做成飞机、汽车和易拉罐。",
        "——为什么大家都为了它来几内亚？——因为几内亚有世界上最大的储量。当一家公司在一块地下发现铝土矿，国家就授予它开采的权利。",
        "——即使那里有人住？乔乔问。——那家庭就得搬走。会给他们安置、补偿。这是规矩。「发展的代价」，我们在办公室里这么说。",
        "——要是铝土矿在塔米塔下面呢？乔乔低声问。父亲望向山那边的夜色，然后把地图收了起来。——到时候再说吧，他说。",
        "那天夜里，我明白了：父亲比谁都更懂石头——而他在回避去看那片土地。" ] },
      { id: "secret", title: "红土的秘密", paragraphs: [
        "第二天，我把爸爸解释的告诉了奶奶。她抓起一把红土，握在手心。",
        "——你父亲告诉了你铝土矿值多少。我来告诉你土地守护着什么。这片土地之下，是被运走的红石头。可这片土地之上，是其余的一切：番茄、木薯、芒果树、水、蜜蜂。这些，运不走。它们会留下——只要我们好好照料。",
        "——那么，哪个更富有？只卖一次的石头，还是年年都给予的土地？",
        "——铝土矿不会再长出来，雅丽。而土地会。这就是红土的秘密。" ] },
      { id: "question-tchotcho", title: "乔乔的问题", paragraphs: [
        "一天傍晚，在田边，乔乔问我：——你呢，毕业以后想做什么？",
        "我从没真正想过。在科纳克里，人们说：医生、律师、石油工程师。没有一样和土地有关。",
        "——我啊，乔乔说，我想当农艺师：懂得让土地出产、保护土地、养活人的人。总有一天，我会成为奶奶新农场的农艺师。",
        "——几内亚需要农艺师，而不只是矿。矿会枯竭。而土地，只要我们尊重它，就不会枯竭。" ] },
      { id: "plan", title: "法图奶奶的计划", paragraphs: [
        "倒数第二个晚上，奶奶跟我说起一个她藏了很久的计划。",
        "——你看到田边的界桩了。总有一天，矿会想要塔米塔。我不想像别人那样，等着被赶走。",
        "——那你打算怎么办？——我已经买了一块地。在马费里尼亚，弗雷卡里亚省，科纳克里以南。我用积蓄，一分一分，攒了好几年才买下的。",
        "她翻开本子，给我看一块地的草图。——开车几个小时就到，在首都的另一边。一块活的土地，没有矿。下个月我路过科纳克里，然后去马费里尼亚住一个星期。正是播种的好季节：土地饱含雨水。我要把苗圃、鸡舍都备好，再搭一个羊圈，等着人把羊送来。",
        "——你这就要搬了？——还没有。我在准备。我要让土地在我准备好的时候也准备好——这不会太久了。你呢，会从科纳克里来帮我吗？那地方很近。" ] },
      { id: "graines", title: "那一袋种子", paragraphs: [
        "最后一个早上，奶奶往我手里放了一个小袋子。是种子。",
        "——番茄种子。我们自己的。不是进口的种子：是我们的。是我母亲给我的，她母亲又给了她。",
        "——我拿它们做什么？——你种下它们。在科纳克里，要是没有园子，就种在阳台上。看着它们长，一边等着来马费里尼亚帮我。",
        "——等你的孩子问你番茄是从哪儿来的，你就告诉他们：从我们这儿来。不是塞内加尔，不是摩洛哥。是我们这儿。",
        "我把袋子紧紧攥住。它很小，却很沉。" ] },
      { id: "retour", title: "归途", paragraphs: [
        "假期快结束了。回去的路上，我又看着那些铝土矿卡车、红色的尘土、被削开的山丘。",
        "但我也在看别的东西：低地里的稻田，端着一盆盆蔬菜的妇女，路边的果树。生活在继续，就在矿与矿之间。",
        "——在奶奶那儿过得开心吗？——开心。她教会了我什么才是真正的财富。而且她正在筹备一座农场，远离矿区。",
        "父亲沉默了很久。他也是在那些田里长大的。然后他轻轻地说：「她也教过我，在我小时候。我把它忘了。」" ] },
      { id: "balcon", title: "阳台上的种子", paragraphs: [
        "在科纳克里，我把奶奶的种子种在阳台的花盆里。母亲瞪圆了眼睛看着我。——你在做什么？——我在种番茄。我们自己的番茄。",
        "三个星期后，第一批叶子冒了出来：小小的，绿绿的，活着的。",
        "我想起法图奶奶，想起想当农艺师的乔乔，想起在马费里尼亚等待着的那片土地。奶奶说过她会在那里等我。下个月很快就到了。" ] },
      { id: "ferme", title: "农场的第一天", paragraphs: [
        "五个星期后，奶奶如约路过科纳克里。第二天，她带我去了马费里尼亚：很近，就在城南几个小时的路程。",
        "土地一片碧绿，饱含雨水。邻家的妇女们都来帮忙。我们把苗圃像小士兵一样排好，盖完鸡舍，搭起羊圈——正赶上时候：一辆卡车送来了第一批羊，它们咩咩叫着下了车。",
        "奶奶递给我一棵小芒果树。——你来种。农场的第一棵树。我挖坑，放下树根，压实红土。我想起乔乔：总有一天，他会成为这座农场的农艺师。",
        "奶奶没有等着被赶走：她抢在了前头，靠她的积蓄和她的种子。而我，就在那里，双手插进泥土。",
        "铝土矿不会再长出来。而种子会。这，就是我们土地真正的宝藏。" ] },
    ],
  },
};
