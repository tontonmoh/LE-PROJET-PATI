// « Le Peuple de Bossou » — Série « Les enfants découvrent » · Nimba — Pati Aventure (10–12 ans).
// Récit raconté par les chimpanzés (Wani). 14 sections alignées sur 4 langues. Notes d'illustration écartées.
export type BossouLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[] };
type Book = { lang: BossouLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const BOSSOU_ML: Record<BossouLang, Book> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le Peuple de Bossou",
    sections: [
      { id: "peuple", title: "Le peuple qui sait casser les pierres", paragraphs: [
        "On raconte qu'au pied du Nimba vivait un peuple qui savait casser les pierres. Ce peuple, c'était nous.",
        "Vous nous appelez chimpanzés. Entre nous, on se connaît un par un : Kpaï la doyenne, Founé qui décide, Téli qui invente, et moi, Wani, le plus jeune.",
        "Le matin, les crêtes du Nimba prennent la couleur d'une vieille marmite, et l'air sent la terre rouge. En bas coule la rivière où les femmes du village lavent le linge depuis toujours. Le village, c'est Bossou. Là-bas, on nous appelle les cousins : ils disent que nous portons l'esprit de leurs anciens. C'est pour ça que, depuis des siècles, personne ne lève la main sur nous." ] },
      { id: "secret", title: "Notre secret", paragraphs: [
        "Ce que nous savons faire, aucun autre peuple de la forêt ne le sait. Deux cailloux — l'un dessous, plat, l'enclume ; l'autre dessus, lourd, le marteau. Une noix de palme au milieu. On frappe, juste assez fort, juste assez juste. La coque éclate.",
        "Et ce savoir n'appartient à personne tout seul. Kpaï garde les pierres-mères, mais le geste, lui, le petit l'apprend en regardant toute la troupe : sa mère, sa tante, le vieux d'à côté. Chacun montre un bout.",
        "Voilà notre secret : chez nous, on n'apprend pas de quelqu'un, on apprend ensemble." ] },
      { id: "bruit", title: "Le bruit de la vallée", paragraphs: [
        "Cette année-là, un bruit nouveau est monté de la vallée. Des camions. Et un mot qui revenait partout : Simandou, des milliards.",
        "Founé a frappé le sol. « Et notre montagne ? Le Nimba aussi est plein de fer. Qu'est-ce qui les empêchera de venir creuser nos racines ? »",
        "Silence. Même les oiseaux se sont tus." ] },
      { id: "plan", title: "Le plan de Téli", paragraphs: [
        "C'est là que Téli a eu son idée — maligne, et un peu folle.",
        "« On va leur faire peur. La nuit, on tambourine sur les contreforts des arbres, boum, boum, comme un tonnerre qui marche. On empile des cailloux sur leurs chemins, en lignes bizarres, pour qu'ils croient à un mauvais sort. Cette montagne n'est pas à prendre. Partez. »",
        "Founé a réfléchi longtemps. Puis il a hoché la tête. « On essaie. Mais d'abord, on repère leurs chemins. Téli, Wani, avec moi. »" ] },
      { id: "enfants", title: "Trois enfants dans la clairière", paragraphs: [
        "Nous sommes descendus à la lisière. Et là, dans une clairière, nous les avons vus. Trois petits humains. Une fille devant, deux garçons derrière. La fille tenait une grande feuille de papier et parlait fort, toute seule, comme à une foule invisible.",
        "« Bonjour. Je m'appelle Néné. Avec Pépé et Lamine, on vous présente notre exposé : Comment réduire l'impact des mines sur la nature. »",
        "On avait reconnu deux mots : mines. Et nature.",
        "« Tu vois ? a soufflé Founé. Ils préparent quelque chose contre nous. » Téli, elle, écoutait." ] },
      { id: "exposé", title: "Éviter, réduire, réparer, relier", paragraphs: [
        "« Premièrement, éviter : là où vivent des animaux rares, on ne creuse pas. Deuxièmement, réduire : si on doit creuser, on creuse plus petit, on garde l'eau propre. Troisièmement, réparer : on replante, on nettoie la rivière. »",
        "« Et le plus important… relier. Quand une mine coupe une forêt en deux, les animaux d'un côté ne peuvent plus rejoindre ceux de l'autre. Alors on plante une bande d'arbres entre les deux. Une route verte. Un corridor. »",
        "À côté de moi, Téli a cessé de respirer. Parce que c'était notre problème, mot pour mot. Depuis des années, la savane coupée faisait de notre forêt une île. Nous étions de moins en moins nombreux." ] },
      { id: "peur", title: "La peur change de camp", paragraphs: [
        "Alors Téli a fait une chose que je n'oublierai jamais : elle est sortie des feuilles.",
        "Les enfants ont hurlé. Lamine est tombé sur les fesses, Pépé a lancé son carnet en l'air, Néné a reculé en serrant sa feuille comme un bouclier. Surprise, Téli a hurlé aussi. Founé est sorti en grognant pour la protéger. Moi, paniqué, je me suis accroché à la première branche venue — sauf que c'était la jambe de Founé, qui est tombé, ce qui m'a fait tomber, ce qui a fait rire Lamine au beau milieu de sa peur.",
        "Un instant, tout le monde a eu peur de tout le monde. Trois enfants tremblants, quatre chimpanzés ébouriffés, et au milieu un carnet ouvert dans l'herbe.",
        "Néné a parlé la première, tout doucement. « Ce sont les cousins. Ceux de Bossou. Mon grand-père dit qu'on ne leur fait jamais de mal. Jamais. »",
        "Founé a compris au ton, sinon aux mots. Alors il a fait ce qu'on fait pour dire « je ne suis pas un ennemi » : il s'est assis, lentement, et a baissé les yeux." ] },
      { id: "dessin", title: "Le dessin de Pépé", paragraphs: [
        "Dans le carnet de Pépé, un dessin nous a dressé le poil : une montagne fendue par une longue cicatrice de fer, et, entre les deux moitiés, une fine bande d'arbres avec une flèche.",
        "Téli a posé un doigt sur le dessin. Puis elle a regardé le Nimba, là-haut. Puis le dessin. Puis la montagne. Trois fois.",
        "« Elle comprend ? a soufflé Néné. Pépé, elle comprend ! Ils sont coupés du grand Nimba ! »",
        "Nous étions venus leur faire peur. Et eux, sans le savoir, écrivaient notre sauvetage sur une grande feuille de papier." ] },
      { id: "et-si", title: "Et si vous veniez ?", paragraphs: [
        "Le lendemain, à la lisière, Néné nous attendait. Elle a montré le ciel, puis nous, puis l'école au loin, et dit une seule phrase, lentement : « Et si vous veniez ? »",
        "Téli avait compris avant moi : l'exposé ne serait plus les enfants parlant des animaux, mais les animaux montrant ce qu'ils savent faire.",
        "Founé a refusé d'abord — descendre chez les hommes, à découvert, devant une foule ? Jamais un chef n'avait fait ça. Mais Kpaï s'est avancée. Elle a posé ses pierres-mères devant lui, et dit, à sa manière qui ne se traduit pas en mots mais que toute la troupe a entendue : « Un savoir qu'on cache finit par mourir. Un savoir qu'on montre se met à vivre. »",
        "Founé a baissé la tête. C'était oui." ] },
      { id: "anciens", title: "La parole des anciens", paragraphs: [
        "Mais le village ne pouvait pas décider seul. On ne fait pas entrer les cousins de la forêt sur la place des hommes sans la parole des anciens.",
        "Les gardiens de la tradition ont convoqué tout le monde sur la place du marché — les vieux, les mères, les enfants, et quelques hommes du chantier venus voir. La plus âgée des gardiennes a rappelé le vieux pacte : depuis toujours, les cousins de Bossou et les gens de Bossou se protègent ; quand l'un souffre, l'autre souffre. Et elle a proposé de le renouer autrement — non plus « nous ici, eux là-bas », mais « nous ensemble ».",
        "Toute la place a renouvelé le serment ce jour-là. Depuis, dit-on, plus aucune dispute entre nous et le village." ] },
      { id: "estrade", title: "Sur l'estrade", paragraphs: [
        "L'estrade fut dressée dehors, au bord de la forêt, pour que tout le monde vienne — des deux côtés.",
        "Néné a déroulé son exposé : éviter, réduire, réparer, relier. Puis : « Et maintenant, nos invités vont vous montrer pourquoi cette montagne vaut plus que son fer. »",
        "Alors nous sommes montés. Kpaï la première : enclume, marteau, noix. Crac. Un murmure a parcouru la foule. Téli ensuite : elle a trempé sa baguette dans une fourmilière, retiré les fourmis une à une, l'air de rien, puis plié une feuille en gobelet pour boire — les enfants riaient, émerveillés. Founé a soulevé une pierre qu'aucun enfant n'aurait bougée, et l'a reposée tout doucement : « je pourrais, mais je choisis de ne pas. »",
        "Et moi, Wani, je tremblais. Kpaï m'a poussé du regard. J'ai pris les pierres-mères, posé la noix. Toute la troupe me regardait. Tout le village me regardait. Et — je ne sais pas pourquoi, cette fois-là — j'ai frappé juste.",
        "Crac. La foule a explosé. Je venais d'apprendre devant tout le monde ce que la troupe entière m'avait enseigné, en silence, depuis ma naissance." ] },
      { id: "koséin", title: "Le pacte du Koséin", paragraphs: [
        "C'est de cet exposé qu'est né le nouveau pacte. Quelqu'un, dans la foule, a posé la vraie question : « Et si on les laissait vivre parmi nous ? Pas loin, pas dans un enclos — ici, avec nous ? »",
        "Partout ailleurs, pour voir des bêtes, on les enferme : grilles, chaînes, cages. Mais à Bossou, les cousins n'avaient jamais été enfermés ; le pacte tenait depuis des siècles. Ce fut décidé : pas de chaîne, pas d'enclos, pas de cage. Le seul endroit au monde où les bêtes et les gens vivraient côte à côte, libres, par respect mutuel.",
        "Les éléphants de la forêt voisine ont flairé l'affaire tout de suite. Ces gros malins ont compris qu'on les regardait avec admiration — alors ils en ont rajouté : l'un arrosait les enfants d'un jet d'eau bien calculé pour entendre leurs cris de joie, l'autre faisait semblant de dormir puis ouvrait un œil au dernier moment. Téli disait qu'ils exagéraient. Les visiteurs adoraient ça.",
        "Au village, on donna un nom à tout cela — un nom de la langue d'ici, le manon : Koséin. « Ensemble. » Car c'était bien de cela qu'il s'agissait : les cousins et les gens, ensemble, sur la même montagne." ] },
      { id: "wontanara", title: "Wontanara", paragraphs: [
        "La nouvelle est partie vite. Les premiers à venir furent ceux qui passaient pour le fer : des cadres guinéens en route vers le chantier, des étrangers venus de partout. Néné, Pépé et Lamine filmaient et envoyaient tout sur les réseaux. Une vidéo de Wani cassant sa noix a fait le tour du monde en une nuit.",
        "Et comme la Guinée entière s'y reconnaissait, on finit par rassembler tout cela sous un mot que le monde connaissait déjà comme guinéen : Wontanara — « nous sommes ensemble », mais dans la langue de tous. Sous les vidéos, on écrivait : « Il y a le safari au Kenya. Et il y a le Wontanara en Guinée — et tout a commencé à Bossou. »",
        "La Guinée, ce paradis que le monde ignorait, s'ouvrait comme aucun pays d'Afrique avant elle. On ne venait plus chercher ce qu'il y avait sous la montagne. On venait pour ce qui vivait dessus." ] },
      { id: "transmission", title: "L'École de la Forêt Sacrée", paragraphs: [
        "Avec les premiers revenus, le village n'a pas attendu. On a bâti une école comme il n'en existe nulle part : l'École de la Forêt Sacrée. On n'y apprend pas seulement dans des cahiers, mais comme nous : ensemble, les uns des autres, le grand montrant au petit, le petit osant devant le grand. La maîtresse Tolno disait que c'était l'école la plus heureuse de Guinée.",
        "D'autres contrées de Guinée sont venues voir. Chacune avait sa merveille — une cascade ignorée, une forêt d'oiseaux, une rivière à hippopotames, une montagne sacrée. Et chacune, en adoptant l'idée de Bossou, lui donna son nom à elle, dans sa langue à elle : car « ensemble » se dit dans toutes les langues de Guinée.",
        "Aujourd'hui, entre notre forêt et le grand Nimba, les arbres du corridor ont grandi. On passe. On n'est plus une île — et on n'est plus une poignée. Du temps de ma peur, on aurait pu nous compter sur les doigts des deux mains. Aujourd'hui, nous sommes près de cent.",
        "Kpaï est très vieille, maintenant. L'autre jour, elle a posé les pierres-mères devant un tout-petit à peine sevré. « Regarde, et recommence », lui a-t-elle dit. Le petit a raté. Comme moi, avant. Mais autour de lui, toute la troupe regardait. Et à la lisière, des enfants des hommes regardaient aussi.",
        "Un jour, ce petit frappera juste. Et ce jour-là, comme moi, il ne devra son savoir à personne en particulier — il le devra à tous.",
        "Koséin, disent les anciens d'ici. Wontanara, répète le pays tout entier. Cela veut dire la même chose : nous sommes ensemble. Et tant qu'on le restera, ni le peuple des cailloux, ni le village qui le garde, ne s'éteindront." ] },
    ],
  },
  en: {
    lang: "en", dir: "ltr", label: "English", bookTitle: "The People of Bossou",
    sections: [
      { id: "peuple", title: "The People Who Know How to Crack Stones", paragraphs: [
        "They say that at the foot of the Nimba lived a people who knew how to crack stones. That people was us.",
        "You call us chimpanzees. Among ourselves, we know each other one by one: Kpaï the eldest, Founé who decides, Téli who invents, and me, Wani, the youngest.",
        "In the morning, the ridges of the Nimba turn the colour of an old cooking pot, and the air smells of red earth. Below runs the river where the village women have always washed the laundry. The village is Bossou. There, they call us the cousins: they say we carry the spirit of their ancestors. That is why, for centuries, no one has raised a hand against us." ] },
      { id: "secret", title: "Our Secret", paragraphs: [
        "What we know how to do, no other people of the forest knows. Two stones — one underneath, flat, the anvil; one on top, heavy, the hammer. A palm nut in between. You strike, just hard enough, just true enough. The shell bursts open.",
        "And this knowledge belongs to no one alone. Kpaï keeps the mother-stones, but the gesture itself, the little one learns by watching the whole troop: his mother, his aunt, the old one next door. Each shows a piece of it.",
        "That is our secret: among us, you do not learn from someone — you learn together." ] },
      { id: "bruit", title: "The Noise from the Valley", paragraphs: [
        "That year, a new noise rose up from the valley. Trucks. And a word that came back everywhere: Simandou, billions.",
        "Founé struck the ground. \"And our mountain? The Nimba is full of iron too. What will stop them from coming to dig up our roots?\"",
        "Silence. Even the birds fell quiet." ] },
      { id: "plan", title: "Téli's Plan", paragraphs: [
        "That was when Téli had her idea — clever, and a little crazy.",
        "\"We'll scare them. At night, we'll drum on the tree buttresses, boom, boom, like thunder that walks. We'll pile stones along their paths, in strange lines, so they think there's a curse. This mountain is not for the taking. Go away.\"",
        "Founé thought for a long time. Then he nodded. \"We'll try. But first, we scout their paths. Téli, Wani, with me.\"" ] },
      { id: "enfants", title: "Three Children in the Clearing", paragraphs: [
        "We went down to the forest edge. And there, in a clearing, we saw them. Three small humans. A girl in front, two boys behind. The girl held a big sheet of paper and spoke loudly, all alone, as if to an invisible crowd.",
        "\"Hello. My name is Néné. With Pépé and Lamine, we present our talk: How to Reduce the Impact of Mines on Nature.\"",
        "We had recognised two words: mines. And nature.",
        "\"You see?\" whispered Founé. \"They're preparing something against us.\" But Téli was listening." ] },
      { id: "exposé", title: "Avoid, Reduce, Repair, Connect", paragraphs: [
        "\"First, avoid: where rare animals live, you do not dig. Second, reduce: if you must dig, you dig smaller, you keep the water clean. Third, repair: you replant, you clean the river.\"",
        "\"And the most important… connect. When a mine cuts a forest in two, the animals on one side can no longer reach those on the other. So you plant a strip of trees between them. A green road. A corridor.\"",
        "Beside me, Téli stopped breathing. Because it was our problem, word for word. For years, the cut savanna had made our forest an island. We were fewer and fewer." ] },
      { id: "peur", title: "Fear Changes Sides", paragraphs: [
        "Then Téli did something I will never forget: she stepped out of the leaves.",
        "The children screamed. Lamine fell on his backside, Pépé threw his notebook in the air, Néné backed away clutching her sheet like a shield. Startled, Téli screamed too. Founé came out growling to protect her. As for me, in a panic, I grabbed the first branch I could — except it was Founé's leg, who fell, which made me fall, which made Lamine laugh in the middle of his own fright.",
        "For a moment, everyone was afraid of everyone. Three trembling children, four ruffled chimpanzees, and between them a notebook open in the grass.",
        "Néné spoke first, very softly. \"They're the cousins. The ones from Bossou. My grandfather says we never hurt them. Never.\"",
        "Founé understood from the tone, if not the words. So he did what we do to say \"I am not an enemy\": he sat down, slowly, and lowered his eyes." ] },
      { id: "dessin", title: "Pépé's Drawing", paragraphs: [
        "In Pépé's notebook, one drawing made our hair stand on end: a mountain split by a long scar of iron, and, between the two halves, a thin strip of trees with an arrow.",
        "Téli put a finger on the drawing. Then she looked at the Nimba, up there. Then the drawing. Then the mountain. Three times.",
        "\"Does she understand?\" whispered Néné. \"Pépé, she understands! They're cut off from the great Nimba!\"",
        "We had come to scare them. And they, without knowing it, were writing our rescue on a big sheet of paper." ] },
      { id: "et-si", title: "What If You Came?", paragraphs: [
        "The next day, at the forest edge, Néné was waiting for us. She pointed at the sky, then at us, then at the school in the distance, and said a single sentence, slowly: \"What if you came?\"",
        "Téli understood before I did: the talk would no longer be the children speaking about the animals, but the animals showing what they can do.",
        "Founé refused at first — go down among the humans, out in the open, before a crowd? No leader had ever done that. But Kpaï stepped forward. She laid her mother-stones before him, and said, in her way that does not translate into words but that the whole troop heard: \"A knowledge you hide ends up dying. A knowledge you show begins to live.\"",
        "Founé lowered his head. It was a yes." ] },
      { id: "anciens", title: "The Word of the Elders", paragraphs: [
        "But the village could not decide alone. You do not bring the cousins of the forest onto the people's square without the word of the elders.",
        "The keepers of the tradition called everyone to the marketplace — the old, the mothers, the children, and a few men from the worksite who came to watch. The eldest of the keepers recalled the old pact: from time immemorial, the cousins of Bossou and the people of Bossou protect each other; when one suffers, the other suffers. And she proposed to renew it differently — no longer \"us here, them over there,\" but \"us together.\"",
        "The whole square renewed the oath that day. Since then, they say, there has not been a single quarrel between us and the village." ] },
      { id: "estrade", title: "On the Stage", paragraphs: [
        "The stage was set up outside, at the forest's edge, so that everyone could come — from both sides.",
        "Néné delivered her talk: avoid, reduce, repair, connect. Then: \"And now, our guests will show you why this mountain is worth more than its iron.\"",
        "So we went up. Kpaï first: anvil, hammer, nut. Crack. A murmur ran through the crowd. Then Téli: she dipped her stick into an anthill, drew out the ants one by one, all casual, then folded a leaf into a cup to drink — the children laughed, amazed. Founé lifted a stone no child could have moved, and set it down ever so gently: \"I could, but I choose not to.\"",
        "And me, Wani, I was trembling. Kpaï nudged me with a look. I took the mother-stones, set the nut. The whole troop was watching me. The whole village was watching me. And — I don't know why, that time — I struck true.",
        "Crack. The crowd erupted. I had just learned, in front of everyone, what the whole troop had taught me, in silence, since I was born." ] },
      { id: "koséin", title: "The Pact of the Koséin", paragraphs: [
        "It was from that talk that the new pact was born. Someone in the crowd asked the real question: \"What if we let them live among us? Not far away, not in a pen — here, with us?\"",
        "Everywhere else, to see animals, people lock them up: bars, chains, cages. But in Bossou, the cousins had never been shut in; the pact had held for centuries. It was decided: no chain, no pen, no cage. The only place in the world where beasts and people would live side by side, free, out of mutual respect.",
        "The elephants of the neighbouring forest sniffed out the affair at once. Those big rascals understood they were being watched with admiration — so they laid it on thick: one would spray the children with a well-aimed jet of water just to hear their shrieks of joy, the other would pretend to sleep then open one eye at the last moment. Téli said they were overdoing it. The visitors loved it.",
        "In the village, they gave all this a name — a name from the language of this place, manon: Koséin. \"Together.\" For that was exactly what it was: the cousins and the people, together, on the same mountain." ] },
      { id: "wontanara", title: "Wontanara", paragraphs: [
        "The news travelled fast. The first to come were those passing through for the iron: Guinean managers on their way to the worksite, foreigners from everywhere. Néné, Pépé and Lamine filmed and sent everything onto the networks. A video of Wani cracking his nut went around the world in one night.",
        "And since all of Guinea saw itself in it, people ended up gathering it all under a word the world already knew as Guinean: Wontanara — \"we are together,\" but in everyone's language. Under the videos, they wrote: \"There's the safari in Kenya. And there's the Wontanara in Guinea — and it all began in Bossou.\"",
        "Guinea, that paradise the world had overlooked, was opening up as no country in Africa before it. People no longer came looking for what lay under the mountain. They came for what lived upon it." ] },
      { id: "transmission", title: "The School of the Sacred Forest", paragraphs: [
        "With the first revenues, the village did not wait. They built a school like no other: the School of the Sacred Forest. There, you learn not only from books, but the way we do: together, from one another, the big one showing the little one, the little one daring before the big one. Teacher Tolno said it was the happiest school in Guinea.",
        "Other regions of Guinea came to see. Each had its own wonder — an unknown waterfall, a forest of birds, a river of hippos, a sacred mountain. And each, taking up Bossou's idea, gave it its own name, in its own language: for \"together\" is said in every language of Guinea.",
        "Today, between our forest and the great Nimba, the corridor trees have grown. We cross over. We are no longer an island — and no longer a handful. In the days of my fear, you could have counted us on the fingers of two hands. Today, we are nearly a hundred.",
        "Kpaï is very old now. The other day, she laid the mother-stones before a little one barely weaned. \"Watch, and try again,\" she told him. The little one missed. Like me, before. But around him, the whole troop was watching. And at the forest's edge, the children of the humans were watching too.",
        "One day, that little one will strike true. And on that day, like me, he will owe his knowledge to no one in particular — he will owe it to everyone.",
        "Koséin, say the elders here. Wontanara, repeats the whole country. It means the same thing: we are together. And as long as we remain so, neither the people of the stones, nor the village that keeps them, will fade away." ] },
    ],
  },
  ar: {
    lang: "ar", dir: "rtl", label: "العربية", bookTitle: "شعب بوسو",
    sections: [
      { id: "peuple", title: "الشعب الذي يعرف كسر الحجارة", paragraphs: [
        "يُحكى أنه عند سفح جبل نيمبا عاش شعبٌ يعرف كسر الحجارة. ذلك الشعب كان نحن.",
        "أنتم تسمّوننا الشمبانزي. أما بيننا، فنعرف بعضنا واحدًا واحدًا: كباي الكبرى، وفوني الذي يقرّر، وتيلي التي تبتكر، وأنا، واني، الأصغر.",
        "في الصباح، تأخذ قمم نيمبا لون قِدْرٍ قديم، وتفوح من الهواء رائحة التراب الأحمر. وفي الأسفل يجري النهر حيث تغسل نساء القرية الثياب منذ الأزل. القرية اسمها بوسو. هناك يسمّوننا الأبناء العمومة: يقولون إننا نحمل روح أسلافهم. لذلك، منذ قرون، لا يرفع أحدٌ يده علينا." ] },
      { id: "secret", title: "سرّنا", paragraphs: [
        "ما نعرف فعله، لا يعرفه أيّ شعب آخر في الغابة. حجران — واحد في الأسفل، مسطّح، السندان؛ وآخر في الأعلى، ثقيل، المطرقة. وجوزة نخيل في الوسط. نضرب، بقوّة كافية تمامًا، وبدقّة كافية تمامًا. فتنفلق القشرة.",
        "وهذه المعرفة لا تخصّ أحدًا وحده. كباي تحفظ «الحجارة الأمّ»، أما الحركة نفسها فيتعلّمها الصغير بمراقبة الجماعة كلها: أمه، وخالته، والعجوز المجاور. كلٌّ يُريه جزءًا منها.",
        "هذا هو سرّنا: عندنا، لا نتعلّم من أحدٍ بعينه، بل نتعلّم معًا." ] },
      { id: "bruit", title: "ضجيج الوادي", paragraphs: [
        "في ذلك العام، ارتفع ضجيج جديد من الوادي. شاحنات. وكلمة تتردّد في كل مكان: سيماندو، المليارات.",
        "ضرب فوني الأرض. «وجبلنا؟ نيمبا أيضًا مليء بالحديد. ما الذي سيمنعهم من القدوم لحفر جذورنا؟»",
        "صمت. حتى الطيور سكتت." ] },
      { id: "plan", title: "خطة تيلي", paragraphs: [
        "عندئذٍ خطرت لتيلي فكرتها — ذكيّة، ومجنونة قليلًا.",
        "«سنُخيفهم. في الليل، نقرع على دعامات الأشجار، بوم، بوم، كرعدٍ يمشي. ونُكوّم الحجارة على دروبهم، في خطوط غريبة، ليظنّوا أنه سحرٌ سيّئ. هذا الجبل ليس للأخذ. ارحلوا.»",
        "فكّر فوني طويلًا. ثم أومأ برأسه. «نجرّب. لكن أولًا، نستطلع دروبهم. تيلي، واني، معي.»" ] },
      { id: "enfants", title: "ثلاثة أطفال في الفُسحة", paragraphs: [
        "نزلنا إلى طرف الغابة. وهناك، في فُسحة، رأيناهم. ثلاثة بشر صغار. فتاة في المقدّمة، وصبيّان خلفها. كانت الفتاة تمسك ورقة كبيرة وتتكلّم بصوت عالٍ، وحدها، كأنها تخاطب جمهورًا غير مرئيّ.",
        "«مرحبًا. اسمي نيني. مع بيبي ولامين، نقدّم لكم عرضنا: كيف نخفّف أثر المناجم على الطبيعة.»",
        "كنّا قد عرفنا كلمتين: المناجم. والطبيعة.",
        "«أرأيتَ؟ همس فوني. إنهم يُعِدّون شيئًا ضدّنا.» أما تيلي، فكانت تصغي." ] },
      { id: "exposé", title: "نتجنّب، نُقلّل، نُصلح، نَصِل", paragraphs: [
        "«أولًا، نتجنّب: حيث تعيش حيوانات نادرة، لا نحفر. ثانيًا، نُقلّل: إن وجب الحفر، نحفر أصغر، ونُبقي الماء نظيفًا. ثالثًا، نُصلح: نعيد الغرس، وننظّف النهر.»",
        "«والأهمّ… نَصِل. حين يقطع منجمٌ غابةً نصفين، لا تعود حيوانات جهةٍ قادرة على بلوغ حيوانات الجهة الأخرى. فنغرس شريطًا من الأشجار بينهما. طريقًا أخضر. ممرًّا.»",
        "إلى جانبي، توقّفت تيلي عن التنفّس. لأنها كانت مشكلتنا، كلمةً بكلمة. منذ سنوات، جعلت السافانا المقطوعة من غابتنا جزيرة. وكنّا نتناقص شيئًا فشيئًا." ] },
      { id: "peur", title: "الخوف يبدّل جهته", paragraphs: [
        "عندئذٍ فعلت تيلي شيئًا لن أنساه أبدًا: خرجت من بين الأوراق.",
        "صرخ الأطفال. سقط لامين على مؤخّرته، ورمى بيبي دفتره في الهواء، وتراجعت نيني وهي تضمّ ورقتها كدرع. ومن المفاجأة، صرخت تيلي أيضًا. وخرج فوني يزمجر ليحميها. أما أنا، فمن الذعر تعلّقتُ بأول غصنٍ صادفته — إلا أنه كان ساق فوني، فسقط، فأسقطني، فأضحك لامين في خِضمّ خوفه.",
        "للحظة، خاف الجميع من الجميع. ثلاثة أطفال يرتجفون، وأربعة شمبانزي منفوشين، وفي الوسط دفترٌ مفتوح في العشب.",
        "تكلّمت نيني أولًا، بهدوء شديد. «هؤلاء الأبناء العمومة. أبناء بوسو. جدّي يقول إننا لا نؤذيهم أبدًا. أبدًا.»",
        "فهم فوني من النبرة، إن لم يكن من الكلمات. ففعل ما نفعله لنقول «لستُ عدوًّا»: جلس، ببطء، وخفض عينيه." ] },
      { id: "dessin", title: "رسم بيبي", paragraphs: [
        "في دفتر بيبي، رسمٌ واحد جعل شعرنا يقف: جبلٌ يشقّه ندبةٌ طويلة من حديد، وبين النصفين شريطٌ رفيع من الأشجار وسهمٌ صغير.",
        "وضعت تيلي إصبعها على الرسم. ثم نظرت إلى نيمبا، هناك في الأعلى. ثم إلى الرسم. ثم إلى الجبل. ثلاث مرات.",
        "«هل فهمت؟ همست نيني. بيبي، لقد فهمت! إنهم مقطوعون عن نيمبا الكبير!»",
        "جئنا لنُخيفهم. وهم، دون أن يدروا، كانوا يكتبون نجاتنا على ورقةٍ كبيرة." ] },
      { id: "et-si", title: "ماذا لو جئتم؟", paragraphs: [
        "في الغد، عند طرف الغابة، كانت نيني تنتظرنا. أشارت إلى السماء، ثم إلينا، ثم إلى المدرسة البعيدة، وقالت جملة واحدة، ببطء: «ماذا لو جئتم؟»",
        "فهمت تيلي قبلي: لن يكون العرض بعد الآن أطفالًا يتحدّثون عن الحيوانات، بل حيوانات تُري ما تُحسن صنعه.",
        "رفض فوني في البداية — أن ينزل إلى البشر، في العراء، أمام جمهور؟ ما فعل زعيمٌ ذلك قطّ. لكن كباي تقدّمت. وضعت حجارتها الأمّ أمامه، وقالت، بطريقتها التي لا تُترجَم إلى كلمات لكن سمعتها الجماعة كلها: «المعرفة التي تُخبَّأ تموت في النهاية. والمعرفة التي تُظهَر تبدأ في الحياة.»",
        "خفض فوني رأسه. كان ذلك نعم." ] },
      { id: "anciens", title: "كلمة الكبار", paragraphs: [
        "لكن القرية لا تستطيع أن تقرّر وحدها. لا يُدخَل أبناء العمومة من الغابة إلى ساحة الناس دون كلمة الكبار.",
        "دعا حُرّاس التقاليد الجميع إلى ساحة السوق — الشيوخ، والأمهات، والأطفال، وبعض رجال الورش جاؤوا ليروا. ذكّرت أكبر الحارسات بالعهد القديم: منذ الأزل، يحمي أبناء عمومة بوسو وأهل بوسو بعضهم بعضًا؛ إذا تألّم أحدهما تألّم الآخر. واقترحت أن يُجدَّد على نحوٍ آخر — لا «نحن هنا، وهم هناك»، بل «نحن معًا».",
        "جدّدت الساحة كلها العهد في ذلك اليوم. ومنذ ذلك الحين، يُقال، لم يعد بيننا وبين القرية أيّ خلاف." ] },
      { id: "estrade", title: "على المنصّة", paragraphs: [
        "نُصبت المنصّة في الخارج، عند طرف الغابة، ليأتي الجميع — من الجهتين.",
        "عرضت نيني موضوعها: نتجنّب، نُقلّل، نُصلح، نَصِل. ثم: «والآن، سيُريكم ضيوفنا لماذا يساوي هذا الجبل أكثر من حديده.»",
        "عندئذٍ صعدنا. كباي أولًا: سندان، مطرقة، جوزة. قَرْع. سرت همهمة في الجمهور. ثم تيلي: غمست عودها في قرية نمل، وأخرجت النمل واحدًا واحدًا، بلا اكتراث، ثم طوت ورقة على شكل كوب لتشرب — ضحك الأطفال مبهورين. ورفع فوني حجرًا ما كان طفلٌ ليحرّكه، وأعاده برفقٍ شديد: «أستطيع، لكنّي أختار ألّا أفعل.»",
        "وأنا، واني، كنتُ أرتجف. دفعتني كباي بنظرة. أخذتُ الحجارة الأمّ، ووضعتُ الجوزة. كانت الجماعة كلها تنظر إليّ. وكانت القرية كلها تنظر إليّ. و— لا أدري لماذا، تلك المرة — ضربتُ بدقّة.",
        "قَرْع. انفجر الجمهور. كنتُ قد تعلّمتُ أمام الجميع ما علّمتني إيّاه الجماعة كلها، في صمت، منذ مولدي." ] },
      { id: "koséin", title: "ميثاق الكوسيين", paragraphs: [
        "من ذلك العرض وُلد الميثاق الجديد. طرح أحدهم، في الجمهور، السؤال الحقيقي: «وماذا لو تركناهم يعيشون بيننا؟ لا بعيدًا، ولا في حظيرة — هنا، معنا؟»",
        "في كل مكان آخر، لرؤية الحيوانات، يحبسونها: قضبان، وسلاسل، وأقفاص. أما في بوسو، فلم يُحبَس أبناء العمومة قطّ؛ صمد العهد قرونًا. فتقرّر: لا سلسلة، ولا حظيرة، ولا قفص. المكان الوحيد في العالم حيث تعيش الوحوش والناس جنبًا إلى جنب، أحرارًا، باحترام متبادل.",
        "شمّت فِيَلة الغابة المجاورة الأمر فورًا. فهمت تلك الكائنات الكبيرة الماكرة أننا ننظر إليها بإعجاب — فبالغت: أحدها يرشّ الأطفال بنفّاثة ماء محسوبة تمامًا ليسمع صيحات فرحهم، والآخر يتظاهر بالنوم ثم يفتح عينًا في اللحظة الأخيرة. كانت تيلي تقول إنها تبالغ. وكان الزوّار يعشقون ذلك.",
        "في القرية، أعطوا كل هذا اسمًا — اسمًا من لغة المكان، المانون: كوسيين. «معًا.» فقد كان هذا هو الأمر بالضبط: أبناء العمومة والناس، معًا، على الجبل نفسه." ] },
      { id: "wontanara", title: "ونتانارا", paragraphs: [
        "انتشر الخبر بسرعة. أول من جاء هم العابرون من أجل الحديد: كوادر غينيون في طريقهم إلى الورش، وغرباء من كل مكان. كان نيني وبيبي ولامين يصوّرون ويرسلون كل شيء إلى الشبكات. وطاف مقطعٌ لواني يكسر جوزته العالمَ في ليلة واحدة.",
        "ولأن غينيا كلها رأت نفسها فيه، انتهى الأمر بجمع كل ذلك تحت كلمة عرفها العالم بوصفها غينية: ونتانارا — «نحن معًا»، لكن بلغة الجميع. وتحت المقاطع، كانوا يكتبون: «هناك السفاري في كينيا. وهناك الونتانارا في غينيا — وكل شيء بدأ في بوسو.»",
        "غينيا، تلك الجنّة التي تجاهلها العالم، كانت تنفتح كما لم ينفتح بلدٌ إفريقي قبلها. لم يعد الناس يأتون بحثًا عمّا تحت الجبل. صاروا يأتون من أجل ما يحيا فوقه." ] },
      { id: "transmission", title: "مدرسة الغابة المقدّسة", paragraphs: [
        "مع أول العائدات، لم تنتظر القرية. بنوا مدرسة لا مثيل لها: مدرسة الغابة المقدّسة. لا يُتعلَّم فيها من الكتب وحدها، بل كما نتعلّم نحن: معًا، بعضنا من بعض، الكبير يُري الصغير، والصغير يجرؤ أمام الكبير. كانت المعلّمة تولنو تقول إنها أسعد مدرسة في غينيا.",
        "جاءت مناطق أخرى من غينيا لترى. لكلٍّ منها أعجوبتها — شلّالٌ مجهول، وغابة طيور، ونهرٌ فيه أفراس النهر، وجبلٌ مقدّس. وكلٌّ منها، إذ تبنّت فكرة بوسو، أعطتها اسمها هي، بلغتها هي: فكلمة «معًا» تُقال في كل لغات غينيا.",
        "اليوم، بين غابتنا ونيمبا الكبير، كبرت أشجار الممرّ. نعبُر. لم نعد جزيرة — ولم نعد حفنة. أيام خوفي، كان يمكن عدّنا على أصابع اليدين. واليوم، نحن قرابة المئة.",
        "كباي عجوزٌ جدًا الآن. قبل أيام، وضعت الحجارة الأمّ أمام صغيرٍ بالكاد فُطِم. «انظر، وأعِد المحاولة»، قالت له. أخطأ الصغير. مثلي، من قبل. لكن من حوله، كانت الجماعة كلها تنظر. وعند طرف الغابة، كان أطفال البشر ينظرون أيضًا.",
        "يومًا ما، سيضرب ذلك الصغير بدقّة. وفي ذلك اليوم، مثلي، لن يدين بمعرفته لأحدٍ بعينه — بل سيدين بها للجميع.",
        "كوسيين، يقول كبار هذا المكان. ونتانارا، يردّد البلد كلّه. وهي تعني الشيء نفسه: نحن معًا. وما دمنا كذلك، فلن ينقرض شعب الحجارة، ولا القرية التي تحرسه." ] },
    ],
  },
  zh: {
    lang: "zh", dir: "ltr", label: "中文", bookTitle: "博苏的子民",
    sections: [
      { id: "peuple", title: "懂得敲开石头的子民", paragraphs: [
        "据说，在宁巴山脚下，住着一群懂得敲开石头的子民。那群子民，就是我们。",
        "你们叫我们黑猩猩。而我们彼此，一个一个都认得：最年长的卡帕伊，做决定的富内，爱发明的泰利，还有我，最小的瓦尼。",
        "清晨，宁巴的山脊呈现出旧锅的颜色，空气里有红土的气味。山下流着一条河，村里的妇女自古就在那儿洗衣。村子叫博苏。在那里，人们叫我们「表亲」：他们说我们承载着祖先的灵魂。正因如此，几个世纪以来，没有人对我们动过手。" ] },
      { id: "secret", title: "我们的秘密", paragraphs: [
        "我们会做的事，森林里别的子民都不会。两块石头——下面一块，平的，是砧；上面一块，重的，是锤。中间放一颗棕榈果。敲下去，力道刚刚好，分寸刚刚好。壳就裂开了。",
        "而这门本事，不属于任何一个单独的人。卡帕伊保管着「母石」，可那个动作，小家伙是看着整个族群学会的：他的母亲、他的姨母、隔壁的老者。每个人都示范一点点。",
        "这就是我们的秘密：在我们这里，你不是「跟某个人」学，而是「大家一起」学。" ] },
      { id: "bruit", title: "山谷里的喧响", paragraphs: [
        "那一年，山谷里升起一种新的喧响。卡车。还有一个到处反复出现的词：西芒杜，几十亿。",
        "富内捶了一下地。「那我们的山呢？宁巴也满是铁。有什么能拦住他们来挖我们的根？」",
        "一片寂静。连鸟儿都不出声了。" ] },
      { id: "plan", title: "泰利的计划", paragraphs: [
        "就在那时，泰利想出了她的主意——聪明，又有点疯。",
        "「我们去吓唬他们。夜里，我们敲打树的板根，咚，咚，像会走路的雷。我们在他们的路上堆石头，排成奇怪的线，让他们以为中了邪。这座山不是用来夺的。走开。」",
        "富内想了很久。然后点了点头。「试试。但先去摸清他们的路。泰利，瓦尼，跟我来。」" ] },
      { id: "enfants", title: "林间空地上的三个孩子", paragraphs: [
        "我们下到林缘。就在那里，在一片空地上，我们看见了他们。三个小小的人。一个女孩在前，两个男孩在后。女孩举着一大张纸，独自大声讲着，仿佛对着一群看不见的听众。",
        "「你们好。我叫内内。我和佩佩、拉明，给大家做我们的报告：《如何减少矿山对自然的影响》。」",
        "我们认出了两个词：矿山。还有自然。",
        "「看见了吧？」富内低声说。「他们在准备对付我们的东西。」可泰利，在听。" ] },
      { id: "exposé", title: "避开、减少、修复、连通", paragraphs: [
        "「第一，避开：有珍稀动物生活的地方，就不开挖。第二，减少：如果非挖不可，就挖得更小，让水保持洁净。第三，修复：重新栽种，清理河流。」",
        "「而最重要的……连通。当一座矿把森林切成两半，一边的动物就再也到不了另一边。于是我们在两边之间种上一条树带。一条绿色的路。一条走廊。」",
        "在我身旁，泰利屏住了呼吸。因为那，一字不差，正是我们的难题。多年来，被切断的稀树草原把我们的森林变成了一座孤岛。我们越来越少。" ] },
      { id: "peur", title: "恐惧换了边", paragraphs: [
        "于是泰利做了一件我永远忘不了的事：她从树叶里走了出来。",
        "孩子们尖叫起来。拉明一屁股坐倒，佩佩把本子抛向半空，内内一边后退一边把那张纸像盾牌一样抱在胸前。泰利受了惊，也尖叫起来。富内吼着冲出来护她。而我，惊慌之下抓住了最近的一根「树枝」——可那是富内的腿，他倒了，把我也带倒了，这又让拉明在自己的惊吓里笑了出来。",
        "有那么一瞬，所有人都怕着所有人。三个发抖的孩子，四只毛发竖起的黑猩猩，中间是一本摊开在草地上的本子。",
        "内内最先开口，轻轻地说：「他们是表亲。博苏的表亲。我爷爷说，我们从不伤害他们。从不。」",
        "富内即便听不懂词，也从语气里懂了。于是他做了我们用来表示「我不是敌人」的事：慢慢坐下，垂下了眼睛。" ] },
      { id: "dessin", title: "佩佩的画", paragraphs: [
        "在佩佩的本子里，有一幅画让我们汗毛直竖：一座被一道长长的铁的疤痕劈开的山，而在两半之间，是一条细细的树带，配着一个箭头。",
        "泰利把一根手指按在画上。然后她望向上头的宁巴。又看画。又看山。来回三次。",
        "「她看懂了？」内内低声说。「佩佩，她看懂了！他们被切断了，去不了大宁巴！」",
        "我们本是来吓唬他们的。而他们，自己都不知道，正把我们的得救写在一大张纸上。" ] },
      { id: "et-si", title: "要不你们来吧？", paragraphs: [
        "第二天，在林缘，内内在等我们。她指指天，再指指我们，又指指远处的学校，然后慢慢说了一句话：「要不你们来吧？」",
        "泰利比我先明白：那场报告将不再是孩子们讲动物，而是动物们展示自己会做什么。",
        "富内起初拒绝——下到人那里，在空旷处，当着一群人？从没有哪个首领这么做过。可卡帕伊上前一步。她把母石放在他面前，用一种无法译成语言、却被整个族群听懂的方式说：「藏起来的本事，终会死去。展示出来的本事，才开始活着。」",
        "富内低下了头。那就是同意。" ] },
      { id: "anciens", title: "长老们的话", paragraphs: [
        "可村子不能独自决定。没有长老们的话，是不能把森林里的表亲请上人的广场的。",
        "传统的守护者把所有人召到集市广场——老人、母亲、孩子，还有几个从工地来看热闹的男人。最年长的女守护者重提那个古老的约定：自古以来，博苏的表亲和博苏的人彼此守护；一方受苦，另一方也受苦。她提议以另一种方式重续它——不再是「我们在这边，他们在那边」，而是「我们在一起」。",
        "那一天，整个广场重续了誓约。据说从那以后，我们和村子之间，再没有过一次争执。" ] },
      { id: "estrade", title: "在台上", paragraphs: [
        "台子搭在外面，搭在森林边上，好让所有人都来——两边的人都来。",
        "内内讲完她的报告：避开、减少、修复、连通。然后说：「现在，我们的客人要让你们看看，为什么这座山比它的铁更珍贵。」",
        "于是我们上了台。卡帕伊先来：砧、锤、果。咔嚓。人群里掠过一阵低语。接着是泰利：她把一根细枝伸进蚁巢，若无其事地一只只把蚂蚁挑出来，又把一片叶子折成杯子来喝水——孩子们看得又惊又笑。富内举起一块没有哪个孩子搬得动的石头，又轻轻把它放下：「我能，但我选择不。」",
        "而我，瓦尼，在发抖。卡帕伊用眼神推了我一把。我拿起母石，放好果子。整个族群在看我。整个村子在看我。而——不知为何，那一次——我敲得正中。",
        "咔嚓。人群沸腾了。我刚刚当着所有人，学会了整个族群自我出生起、在沉默中教给我的东西。" ] },
      { id: "koséin", title: "科塞因之约", paragraphs: [
        "新的约定，就是从那场报告里诞生的。人群中有人问出了真正的问题：「要不，我们让他们住在我们中间？不是住在远处，不是关在围栏里——就在这儿，和我们一起？」",
        "在别的任何地方，要看动物，人们都把它们关起来：栏杆、锁链、笼子。可在博苏，表亲们从没被关过；这个约定已经守了几个世纪。于是定了下来：不要锁链，不要围栏，不要笼子。这将是世界上唯一一个，野兽与人因彼此尊重而自由地比邻而居的地方。",
        "邻近森林的大象立刻嗅到了苗头。那些精明的大家伙明白人们在用赞叹的目光看它们——于是它们更来劲了：一头用算得恰到好处的水柱喷孩子，只为听他们欢叫；另一头假装睡着，又在最后一刻睁开一只眼。泰利说它们太夸张了。可游客们爱极了。",
        "在村里，人们给这一切起了个名字——一个本地语言、马农语的名字：科塞因。「在一起。」因为这正是它的本意：表亲与人，在一起，在同一座山上。" ] },
      { id: "wontanara", title: "翁塔纳拉", paragraphs: [
        "消息传得飞快。最早来的，是那些为了铁而路过的人：前往工地的几内亚干部，来自各地的外国人。内内、佩佩和拉明拍下一切，发到网上。一段瓦尼敲开果子的视频，一夜之间传遍了世界。",
        "而因为整个几内亚都在其中看见了自己，人们最终把这一切归到一个世界早已认作几内亚的词下面：翁塔纳拉——「我们在一起」，只不过用的是所有人的语言。视频下面，人们写道：「肯尼亚有狩猎之旅。而几内亚有翁塔纳拉——而这一切，始于博苏。」",
        "几内亚，这个被世界忽略的天堂，正以非洲此前任何国家都不曾有过的方式敞开。人们不再是为了山「之下」有什么而来。他们为山「之上」活着的东西而来。" ] },
      { id: "transmission", title: "圣林学校", paragraphs: [
        "有了最初的收入，村子没有等待。他们建起了一所举世无双的学校：圣林学校。在那里，人们不只从本子里学，而是像我们一样学：在一起，彼此为师，大的示范给小的，小的敢在大的面前尝试。托尔诺老师说，那是几内亚最快乐的学校。",
        "几内亚别的地方也来看。每一处都有自己的奇景——一道无人知晓的瀑布，一片鸟的森林，一条有河马的河，一座圣山。而每一处，在采纳博苏的主意时，都用自己的语言给它起了自己的名字：因为「在一起」，在几内亚的每一种语言里都说得出来。",
        "如今，在我们的森林和大宁巴之间，走廊的树长大了。我们来往穿行。我们不再是一座孤岛——也不再是一小撮。在我害怕的那些日子，用两只手的手指就能把我们数完。而今天，我们将近一百。",
        "卡帕伊现在很老了。前几天，她把母石放在一个刚断奶的小不点面前。「看着，再试一次」，她对他说。小家伙失手了。就像从前的我。可在他周围，整个族群都在看。而在林缘，人的孩子也在看。",
        "总有一天，那个小家伙会敲得正中。而那一天，就像我一样，他的本事将不归功于任何一个人——而归功于所有人。",
        "科塞因，这里的长辈说。翁塔纳拉，整个国家跟着说。它们是同一个意思：我们在一起。而只要我们还在一起，无论是石头的子民，还是守护他们的村子，都不会消亡。" ] },
    ],
  },
};
