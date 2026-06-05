// « Kaback — Les enfants protègent le plus beau des soleils » — Pati Passage (13–15 ans).
// Adaptation du récit (10 chapitres), 10 sections alignées sur 4 langues. Registre littéraire sobre.
// NB : seul « Ka Bènk » est en soussou (enquête de terrain) ; aucun autre soussou inventé.
export type KabackLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[] };
type Book = { lang: KabackLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const KABACK_ML: Record<KabackLang, Book> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Kaback",
    sections: [
      { id: "premier-soleil", title: "Le premier soleil", paragraphs: [
        "Makalé Soumah se levait toujours avant le soleil, parce qu'elle voulait le voir arriver. À quatorze ans, elle savait peu de choses avec certitude, mais elle savait celle-ci : nulle part en Guinée le soleil ne se levait comme à Kaback.",
        "Il montait du fond de la plaine, derrière les rizières, et pendant un instant l'eau des canaux, le riz vert, le sable et le ciel ne faisaient plus qu'une seule lumière. On aurait dit que la terre s'allumait par en dessous.",
        "Son père, Bourama, était déjà parti en mer avec les pêcheurs. « Le plus beau des soleils », disait sa grand-mère. Et personne, à Kaback, ne la contredisait.",
        "C'était une terre d'agriculteurs, de pêcheurs et d'éleveurs, où l'on accueillait l'étranger comme un parent : avant même de connaître son nom, on lui offrait de l'eau et une place à l'ombre. Ici, on ne laisse personne dehors.",
        "Makalé planta sa daba dans la terre noire, le cœur tranquille — sans savoir que c'était l'un des derniers matins où la plaine serait entièrement verte." ] },
      { id: "ka-benk", title: "Le conte de Ka Bènk", paragraphs: [
        "Le soir, quand la chaleur tombait, la grand-mère racontait. C'est elle qui apprit à Makalé pourquoi leur terre s'appelait Kaback.",
        "« Au commencement, il n'y avait que l'eau. Puis le sable est venu, grain après grain, jusqu'à former un tas au milieu de la mer. Ka Bènk : un tas de sable entouré d'eau. Les premiers habitants ont compris une chose que tu ne dois jamais oublier, ma fille : nous ne sommes pas les maîtres de cette terre. Nous en sommes les gardiens. La mer nous l'a prêtée. »",
        "Dans la lumière de la lampe, il semblait parfois à Makalé voir, derrière l'épaule de la vieille femme, une silhouette qui veillait. Elle n'en parlait à personne ; elle pensait que c'était la nuit qui jouait avec ses yeux.",
        "« Et la digue, N'na ? — Les hommes l'ont faite. Dix-sept kilomètres de terre dressés contre la mer, pour que l'eau salée reste dehors et que le riz pousse dedans. Tant que la digue tient, l'eau douce reste douce. Le jour où elle cédera… » La grand-mère ne finissait jamais cette phrase." ] },
      { id: "rester-partir", title: "Ceux qui restent, ceux qui partent", paragraphs: [
        "Le grand frère de Makalé s'appelait Sana. Dix-huit ans, et il ne voulait plus de la daba. « Ici, il n'y a rien, disait-il. Pas de route, pas de lumière la nuit, pas d'avenir. À Conakry, au moins, on tente sa chance. »",
        "Makalé ne comprenait pas qu'on appelle « rien » une terre où le soleil se levait ainsi. Mais Sana n'était pas le seul : chaque saison, des plus âgés montaient dans la pirogue vers le continent, et ne revenaient pas.",
        "À la Maison des jeunes, elle rencontra deux femmes qu'elle n'oublierait plus. Makhadi Bangoura, responsable des microréalisations de la commune : « Le développement, ce n'est pas attendre que la ville pense à nous. C'est faire, avec ce qu'on a, là où on est. » Et Yama Touré, la journaliste de la radio rurale : « Une terre qui se tait, c'est une terre qu'on oublie. »",
        "Ce soir-là, Makalé regarda le soleil se coucher, immense, rouge et or, sur le riz qui ondulait comme une eau calme. Elle se dit qu'elle ne partirait jamais. Elle ne savait pas encore qu'on n'a pas toujours le choix de rester." ] },
      { id: "grande-eau", title: "La nuit de la grande eau", paragraphs: [
        "Cela commença par une nuit de grande marée et de vent. Makalé fut réveillée par un bruit qu'elle n'avait jamais entendu : la mer qui n'était plus à sa place.",
        "La digue, fatiguée par les années, fissurée depuis longtemps sans que personne ne vienne la réparer, avait cédé sur une grande largeur. L'eau salée entrait dans la plaine.",
        "On essaya de la repousser avec des sacs de sable, à mains nues, dans le noir. Bourama travailla jusqu'à l'aube. Mais on ne repousse pas la mer avec ses bras.",
        "Au matin — sans beau soleil, seulement une lumière sale derrière les nuages — la plaine était une lagune. Le riz vert trempait dans l'eau de mer. « Ça va sécher », dit quelqu'un. La grand-mère ne dit rien : elle savait ce que le sel laisse derrière lui." ] },
      { id: "sel", title: "Le sel", paragraphs: [
        "L'eau redescendit. Le sel resta. Il resta dans la terre comme une maladie. Là où le riz poussait, plus rien ne leva. La plaine, le grenier de toute la Basse-Côte, devint une croûte blanche et craquelée.",
        "En mer, ce ne fut pas mieux. La mangrove, ces arbres aux racines plongées dans la vase qui abritaient les petits poissons, mourait à son tour, étouffée. Et sans la mangrove, les poissons se firent rares. Bourama rentrait avec des pirogues à moitié vides.",
        "L'infirmière, Yarie Cissé, passait de maison en maison et notait dans un cahier : des enfants avec des plaies que l'eau salée empêchait de guérir, des familles qui écopaient l'eau la nuit. Certains reculèrent, abandonnant leur maison au bord de l'eau.",
        "Un soir, Sana prit son sac. « Je pars. Il n'y a plus de riz, plus de poisson. Moi, je ne veux pas mourir sur un tas de sable. » Makalé voulut le retenir et ne trouva pas les mots. Ka Bènk, pensa-t-elle. La terre entourée d'eau. Et l'eau, maintenant, la reprenait." ] },
      { id: "soleil-rouge", title: "Le soleil rouge", paragraphs: [
        "Il y eut quand même un soir où le soleil se coucha comme avant. Le ciel s'embrasa, rouge et or, magnifique, indifférent — et le plus beau des soleils se reflétait à présent dans une plaine noyée et salée. C'était insupportable, cette beauté posée sur ce désastre.",
        "Sa grand-mère vint s'asseoir près d'elle. « Tu te souviens ? Nous sommes les gardiens, pas les maîtres. — On a mal gardé, N'na. — Oui. La digue, on l'a laissée se fendre. La mangrove, on l'a coupée pour le bois. On a cru que la mer attendrait. » Elle prit la terre craquelée dans sa main. « Mais une gardienne qui se trompe ne baisse pas les bras : elle apprend, et elle recommence. »",
        "« Recommencer comment ? On n'a pas de quoi rebâtir dix-sept kilomètres de digue. La ville ne vient pas. — Alors commence par ce que tu peux. Une racine. Une voix. C'est déjà ça contre la mer. »" ] },
      { id: "pepiniere", title: "La pépinière", paragraphs: [
        "Le lendemain, Makalé alla trouver Makhadi Bangoura. « Vous avez dit qu'on pouvait faire, avec ce qu'on a. La digue, on ne peut pas. Mais la mangrove ? »",
        "Alors Makalé répéta ce que sa grand-mère savait, et ce qu'elle avait fini par comprendre seule : la mangrove n'est pas seulement des arbres. Ses racines retiennent la terre, brisent les vagues, abritent les poissons. C'est une digue qui pousse toute seule — à condition qu'on l'aide à revenir.",
        "« Une pépinière, dit Makhadi. On récolte les jeunes pousses, les propagules, on les fait grandir, et on replante le long de la côte. Ça, je sais monter. »",
        "Ils étaient sept, au début. Makalé montra comment reconnaître une bonne propagule, l'enfoncer dans la vase à la bonne profondeur, la protéger les premières semaines. La grand-mère corrigeait les gestes : elle se souvenait de la mangrove de sa jeunesse, épaisse comme une forêt. Le soir, les mains couvertes de vase, Makalé sentit quelque chose qui ressemblait à la fierté." ] },
      { id: "parole", title: "La parole qui voyage", paragraphs: [
        "« Une terre qui se tait, c'est une terre qu'on oublie. » Makalé alla trouver Yama Touré à la radio rurale. « Personne ne sait, à la ville, ce qui nous arrive. Sana est parti parce qu'il croyait qu'il n'y avait rien à défendre. Si les gens entendaient Kaback… »",
        "Pendant plusieurs jours, Yama recueillit des voix : Bourama et ses pirogues vides, l'infirmière et son cahier, la grand-mère et le conte de Ka Bènk, les jeunes de la pépinière. Et Makalé, d'une voix qui tremblait un peu : « Chez nous, le soleil se lève plus beau que partout. On voudrait juste qu'il continue d'avoir une plaine où se lever. »",
        "L'émission passa un dimanche, voyagea de poste en poste, de bouche-à-oreille en message partagé de téléphone en téléphone jusqu'à Conakry.",
        "Les jeunes peignirent aussi, sur le mur de la Maison des jeunes, une grande fresque : la plaine verte, la mangrove, et au-dessus, un immense soleil. Quand Makalé recula pour la regarder, il lui sembla encore voir, dans la lumière, cette silhouette douce qui veillait. Cette fois, elle sourit : elle savait maintenant à quoi servent les gardiens." ] },
      { id: "racine", title: "Ce que tient une racine", paragraphs: [
        "La voix de Kaback finit par arriver là où l'on décide. Un jour, des gens vinrent de la ville. Pas tous ceux qu'on espérait, et pas avec tout ce qu'il fallait — la grande digue restait un rêve trop lourd pour une seule visite. Mais ils écoutèrent.",
        "À la réunion communale, Makhadi déroula le dossier préparé avec les jeunes : photos, chiffres, cartes, et la pépinière comme preuve. « Nous ne demandons pas la charité. Nous demandons qu'on répare ce qui protège un grenier qui nourrit jusqu'à la capitale. Et en attendant, regardez : nous avons commencé. »",
        "Les autorités promirent d'étudier la réhabilitation de la digue. Une promesse, ce n'est pas une digue, Makalé le savait. Mais un engagement écrit, c'est une porte qui s'ouvre, là où il n'y avait qu'un mur.",
        "Ce soir-là, Makalé retourna voir sa première rangée de palétuviers. Les jeunes plants avaient tenu ; de petites racines agrippaient déjà la vase. Si peu de chose. Et pourtant, quand la marée monta, l'eau, à cet endroit précis, cogna un peu moins fort. « Tu vois, dit la grand-mère. Voilà ce que tient une racine. Pas la mer entière. Juste sa part. Et si chacun tient sa part… »" ] },
      { id: "soleil-revient", title: "Le soleil revient", paragraphs: [
        "Sana revint au début de la saison sèche. Conakry ne l'avait pas voulu comme il l'avait rêvé ; il rentra plus maigre, plus silencieux. Makalé crut qu'il aurait honte. Mais il descendit jusqu'à la plaine, regarda la pépinière, la fresque, la rangée de jeunes mangroves, et il dit seulement : « On peut en planter d'autres ? »",
        "Le lendemain, ils se levèrent ensemble avant le jour, le frère et la sœur, une daba et un sac de propagules sur l'épaule, et descendirent vers la lisière.",
        "Le soleil monta du fond de la plaine. La terre n'était pas encore guérie ; le sel mettrait des années à partir, et la digue n'était toujours qu'une promesse. Mais le long de la côte, une jeune mangrove verdissait, et dans quelques carrés où l'eau douce était revenue, on avait osé remettre du riz. Pendant un instant, comme avant, l'eau, le riz, le sable et le ciel ne firent plus qu'une seule lumière.",
        "Makalé planta sa daba dans la terre. Ce n'était pas la fin de l'histoire. C'était le début de la garde." ] },
    ],
  },
  en: {
    lang: "en", dir: "ltr", label: "English", bookTitle: "Kaback",
    sections: [
      { id: "premier-soleil", title: "The First Sun", paragraphs: [
        "Makalé Soumah always woke before the sun, because she wanted to watch it arrive. At fourteen, she knew few things for certain, but she knew this one: nowhere in Guinea did the sun rise the way it did at Kaback.",
        "It climbed from the far end of the plain, behind the rice paddies, and for a moment the water in the channels, the green rice, the sand and the sky became a single light. It was as if the land were lit from underneath.",
        "Her father, Bourama, had already gone to sea with the fishermen. \"The most beautiful of suns,\" her grandmother would say. And no one in Kaback contradicted her.",
        "It was a land of farmers, fishermen and herders, where the stranger was welcomed like family: before even learning your name, they offered you water and a place in the shade. Here, no one is left outside.",
        "Makalé drove her daba into the black soil, her heart at ease — not knowing it was one of the last mornings the plain would be entirely green." ] },
      { id: "ka-benk", title: "The Tale of Ka Bènk", paragraphs: [
        "In the evening, when the heat fell, the grandmother would tell stories. It was she who taught Makalé why their land was called Kaback.",
        "\"In the beginning, there was only water. Then the sand came, grain by grain, until it formed a mound in the middle of the sea. Ka Bènk: a mound of sand surrounded by water. The first inhabitants understood something you must never forget, my girl: we are not the masters of this land. We are its keepers. The sea has lent it to us.\"",
        "In the lamplight, it sometimes seemed to Makalé that she saw, behind the old woman's shoulder, a silhouette keeping watch. She spoke of it to no one; she thought it was the night playing tricks on her eyes.",
        "\"And the dyke, N'na? — Men made it. Seventeen kilometres of earth raised against the sea, so the salt water stays out and the rice grows within. As long as the dyke holds, the fresh water stays fresh. The day it gives way…\" The grandmother never finished that sentence." ] },
      { id: "rester-partir", title: "Those Who Stay, Those Who Leave", paragraphs: [
        "Makalé's big brother was called Sana. Eighteen years old, and he wanted no more of the daba. \"There's nothing here,\" he said. \"No road, no light at night, no future. In Conakry, at least, you take your chance.\"",
        "Makalé could not understand calling \"nothing\" a land where the sun rose like that. But Sana was not the only one: every season, older ones climbed into the canoe toward the mainland, and did not come back.",
        "At the Youth House, she met two women she would never forget. Makhadi Bangoura, head of the commune's micro-projects: \"Development isn't waiting for the city to think of us. It's doing, with what we have, where we are.\" And Yama Touré, the rural-radio journalist: \"A land that stays silent is a land that gets forgotten.\"",
        "That evening, Makalé watched the sun set, immense, red and gold, over the rice rippling like calm water. She told herself she would never leave. She did not yet know that one does not always have the choice to stay." ] },
      { id: "grande-eau", title: "The Night of the Great Water", paragraphs: [
        "It began with a night of high tide and wind. Makalé was woken by a sound she had never heard: the sea no longer in its place.",
        "The dyke, worn out by the years, long cracked without anyone coming to mend it, had given way along a great stretch. The salt water was pouring into the plain.",
        "They tried to push it back with sandbags, with bare hands, in the dark. Bourama worked until dawn. But you cannot push back the sea with your arms.",
        "By morning — no beautiful sun, only a dirty light behind the clouds — the plain was a lagoon. The green rice was soaking in seawater. \"It'll dry,\" someone said. The grandmother said nothing: she knew what salt leaves behind." ] },
      { id: "sel", title: "The Salt", paragraphs: [
        "The water went back down. The salt stayed. It stayed in the soil like a sickness. Where the rice had grown, nothing came up. The plain, the granary of the whole Lower Coast, became a white, cracked crust.",
        "At sea, it was no better. The mangrove — those trees with roots plunged into the mud, sheltering the small fish — was dying too, smothered. And without the mangrove, the fish grew scarce. Bourama came home with half-empty canoes.",
        "The nurse, Yarie Cissé, went from house to house and noted things in a notebook: children with wounds that the salt water kept from healing, families bailing out water at night. Some pulled back, abandoning their houses by the water's edge.",
        "One evening, Sana took his bag. \"I'm leaving. There's no more rice, no more fish. I don't want to die on a mound of sand.\" Makalé wanted to hold him back and found no words. Ka Bènk, she thought. The land surrounded by water. And the water, now, was taking it back." ] },
      { id: "soleil-rouge", title: "The Red Sun", paragraphs: [
        "There was, even so, an evening that week when the sun set as before. The sky blazed, red and gold, magnificent, indifferent — and the most beautiful of suns was now reflected in a flooded, salted plain. It was unbearable, that beauty laid over the disaster.",
        "Her grandmother came and sat beside her. \"Do you remember? We are the keepers, not the masters. — We kept it badly, N'na. — Yes. The dyke, we let it crack. The mangrove, we cut it for firewood. We thought the sea would wait.\" She took the cracked earth in her hand. \"But a keeper who makes a mistake does not give up: she learns, and she begins again.\"",
        "\"Begin again how? We can't rebuild seventeen kilometres of dyke. The city doesn't come. — Then begin with what you can. A root. A voice. That's already something against the sea.\"" ] },
      { id: "pepiniere", title: "The Nursery", paragraphs: [
        "The next day, Makalé went to find Makhadi Bangoura. \"You said we could do, with what we have. The dyke, we can't. But the mangrove?\"",
        "Then Makalé repeated what her grandmother knew, and what she had come to understand on her own: the mangrove is not only trees. Its roots hold the soil, break the waves, shelter the fish. It is a dyke that grows by itself — provided you help it come back.",
        "\"A nursery,\" said Makhadi. \"We gather the young shoots, the propagules, we let them grow, and we replant along the coast. That, I know how to set up.\"",
        "There were seven of them at first. Makalé showed how to recognise a good propagule, push it into the mud at the right depth, protect it the first weeks. The grandmother corrected the gestures: she remembered the mangrove of her youth, thick as a forest. In the evening, her hands covered in mud, Makalé felt something that resembled pride." ] },
      { id: "parole", title: "The Word That Travels", paragraphs: [
        "\"A land that stays silent is a land that gets forgotten.\" Makalé went to find Yama Touré at the rural radio. \"No one in the city knows what is happening to us. Sana left because he believed there was nothing to defend. If people could hear Kaback…\"",
        "For several days, Yama gathered voices: Bourama and his empty canoes, the nurse and her notebook, the grandmother and the tale of Ka Bènk, the young people of the nursery. And Makalé, in a voice that trembled a little: \"Here, the sun rises more beautiful than anywhere. We'd just like it to keep having a plain to rise over.\"",
        "The programme aired one Sunday, travelled from radio to radio, from word of mouth to a message shared from phone to phone, all the way to Conakry.",
        "The young people also painted, on the wall of the Youth House, a great fresco: the green plain, the mangrove, and above it, an immense sun. When Makalé stepped back to look at it, it again seemed to her that she saw, in the light, that gentle silhouette keeping watch. This time, she smiled: she now knew what keepers are for." ] },
      { id: "racine", title: "What a Root Holds", paragraphs: [
        "The voice of Kaback eventually reached where decisions are made. One day, people came from the city. Not all those they had hoped for, and not with all that was needed — the great dyke remained a dream too heavy for a single visit. But they listened.",
        "At the commune meeting, Makhadi laid out the file prepared with the young people: photos, figures, maps, and the mangrove nursery as proof. \"We are not asking for charity. We are asking that you repair what protects a granary that feeds all the way to the capital. And in the meantime, look: we have begun.\"",
        "The authorities promised to study the rehabilitation of the dyke. A promise is not a dyke, Makalé knew that. But a written commitment is a door that opens, where there had been only a wall.",
        "That evening, Makalé went back to see her first row of mangroves. The young plants had held; little roots were already gripping the mud. Such a small thing. And yet, when the tide rose, the water, at that exact spot, struck a little less hard. \"You see,\" said the grandmother. \"That is what a root holds. Not the whole sea. Just its share. And if everyone holds their share…\"" ] },
      { id: "soleil-revient", title: "The Sun Returns", paragraphs: [
        "Sana came back at the start of the dry season. Conakry had not wanted him the way he had dreamed; he returned thinner, more silent. Makalé thought he would be ashamed. But he went down to the plain, looked at the nursery, the fresco, the row of young mangroves, and said only: \"Can we plant some more?\"",
        "The next day, they rose together before daybreak, brother and sister, a daba and a bag of propagules on their shoulders, and went down toward the shore.",
        "The sun climbed from the far end of the plain. The land was not yet healed; the salt would take years to leave, and the dyke was still only a promise. But along the coast, a young mangrove was greening, and in a few squares where the fresh water had come back, they had dared to put rice again. For a moment, as before, the water, the rice, the sand and the sky became a single light.",
        "Makalé drove her daba into the soil. It was not the end of the story. It was the beginning of the keeping." ] },
    ],
  },
  ar: {
    lang: "ar", dir: "rtl", label: "العربية", bookTitle: "كاباك",
    sections: [
      { id: "premier-soleil", title: "أول شمس", paragraphs: [
        "كانت مكالي سوماه تستيقظ دائمًا قبل الشمس، لأنها أرادت أن تراها وهي تأتي. في الرابعة عشرة، كانت تعرف القليل على وجه اليقين، لكنها كانت تعرف هذا: لا مكان في غينيا تشرق فيه الشمس كما في كاباك.",
        "كانت تصعد من أقصى السهل، خلف حقول الأرز، وللحظة يصير ماء القنوات، والأرز الأخضر، والرمل، والسماء، نورًا واحدًا. كأن الأرض تُضاء من تحت.",
        "كان أبوها، بوراما، قد خرج إلى البحر مع الصيّادين. «أجمل الشموس»، كانت تقول جدّتها. ولم يكن أحدٌ في كاباك يخالفها.",
        "كانت أرض مزارعين وصيّادين ورُعاة، يُستقبَل فيها الغريب كأنه قريب: قبل أن يُعرَف اسمه، يُقدَّم له الماء ومكانٌ في الظلّ. هنا، لا يُترَك أحدٌ في الخارج.",
        "غرست مكالي مِعزقتها في التراب الأسود، ساكنة القلب — دون أن تدري أنه أحد آخر صباحات يكون فيها السهل أخضر بأكمله." ] },
      { id: "ka-benk", title: "حكاية كا بِنك", paragraphs: [
        "في المساء، حين يهبط الحرّ، كانت الجدّة تحكي. هي التي علّمت مكالي لماذا تُسمّى أرضهم كاباك.",
        "«في البدء، لم يكن إلا الماء. ثم جاء الرمل، حبّة بعد حبّة، حتى صار كومةً في وسط البحر. كا بِنك: كومة رملٍ يحيط بها الماء. وفهم أول السكّان شيئًا يجب ألّا تنسيه أبدًا يا ابنتي: لسنا أسياد هذه الأرض. نحن حُرّاسها. البحر أعارنا إيّاها.»",
        "في ضوء المصباح، كان يخيّل لمكالي أحيانًا أنها ترى، خلف كتف العجوز، طيفًا يحرس. لم تكن تحدّث به أحدًا؛ ظنّت أنه الليل يعبث بعينيها.",
        "«والسدّ يا نّنا؟ — صنعه الرجال. سبعة عشر كيلومترًا من التراب رُفعت في وجه البحر، ليبقى الماء المالح في الخارج وينمو الأرز في الداخل. ما دام السدّ صامدًا، يبقى الماء العذب عذبًا. ويوم ينهار…» لم تكن الجدّة تُتمّ هذه الجملة قطّ." ] },
      { id: "rester-partir", title: "من يبقى، ومن يرحل", paragraphs: [
        "كان أخو مكالي الكبير يُدعى سانا. ثمانية عشر عامًا، ولم يعد يريد المِعزقة. «لا شيء هنا، كان يقول. لا طريق، ولا نور في الليل، ولا مستقبل. في كوناكري، على الأقل، يجرّب المرء حظّه.»",
        "لم تكن مكالي تفهم كيف يُسمّى «لا شيء» أرضٌ تشرق فيها الشمس هكذا. لكن سانا لم يكن وحده: في كل موسم، يصعد الأكبر سنًّا إلى الزورق نحو البرّ، ولا يعودون.",
        "في «بيت الشباب»، التقت بامرأتين لن تنساهما أبدًا. مخادي بانغورا، مسؤولة المشاريع الصغيرة في البلدية: «التنمية ليست أن ننتظر أن تفكّر فينا المدينة. بل أن نفعل، بما لدينا، حيث نحن.» ويامة توري، صحافية الإذاعة الريفية: «أرضٌ تصمت، أرضٌ تُنسى.»",
        "في ذلك المساء، رأت مكالي الشمس تغيب، هائلة، حمراء وذهبية، فوق الأرز المتموّج كماءٍ ساكن. قالت لنفسها إنها لن ترحل أبدًا. لم تكن تعلم بعدُ أن البقاء ليس دائمًا خيارًا." ] },
      { id: "grande-eau", title: "ليلة الماء الكبير", paragraphs: [
        "بدأ الأمر بليلة مدٍّ عالٍ وريح. أيقظ مكالي صوتٌ لم تسمعه قطّ: البحر لم يعد في مكانه.",
        "كان السدّ، الذي أنهكته السنون، والمتصدّع منذ زمن دون أن يأتي أحدٌ لإصلاحه، قد انهار على مسافة واسعة. وكان الماء المالح يدخل السهل.",
        "حاولوا ردّه بأكياس الرمل، بأيدٍ عارية، في الظلام. عمل بوراما حتى الفجر. لكن لا يُردّ البحر بالأذرع.",
        "في الصباح — بلا شمسٍ جميلة، بل ضوءٌ كَدِرٌ خلف الغيوم — كان السهل بحيرة. والأرز الأخضر يغرق في ماء البحر. «سيجفّ»، قال أحدهم. لم تقل الجدّة شيئًا: كانت تعرف ما يتركه الملح وراءه." ] },
      { id: "sel", title: "الملح", paragraphs: [
        "انحسر الماء. وبقي الملح. بقي في التربة كمرض. حيث كان ينمو الأرز، لم يطلع شيء. وصار السهل، مخزن الساحل الأدنى كلّه، قشرةً بيضاء متشقّقة.",
        "وفي البحر، لم يكن الحال أفضل. كانت غابة المانغروف، تلك الأشجار التي تغوص جذورها في الطين وتأوي صغار السمك، تموت بدورها، مختنقة. وبلا المانغروف، ندر السمك. صار بوراما يعود بزوارق نصف فارغة.",
        "كانت الممرّضة، ياري سيسي، تنتقل من بيت إلى بيت وتدوّن في دفتر: أطفالٌ بجروح يمنع الماء المالح شفاءها، وعائلات تنزح الماء ليلًا. تراجع بعضهم، وتركوا بيوتهم على حافة الماء.",
        "ذات مساء، أخذ سانا حقيبته. «أرحل. لم يعد هناك أرز ولا سمك. أنا لا أريد أن أموت على كومة رمل.» أرادت مكالي أن تمنعه فلم تجد الكلمات. كا بِنك، فكّرت. الأرض المحاطة بالماء. والماء، الآن، يستردّها." ] },
      { id: "soleil-rouge", title: "الشمس الحمراء", paragraphs: [
        "ومع ذلك، كان هناك مساءٌ في ذلك الأسبوع غابت فيه الشمس كما من قبل. اشتعلت السماء، حمراء وذهبية، بديعة، غير مبالية — وصار أجمل الشموس ينعكس الآن في سهلٍ غارقٍ ومالح. كان لا يُحتمَل، ذلك الجمال الملقى فوق الكارثة.",
        "جاءت جدّتها وجلست إلى جانبها. «أتذكرين؟ نحن الحرّاس، لا الأسياد. — حرسنا بشكل سيّئ يا نّنا. — نعم. السدّ، تركناه يتصدّع. والمانغروف، قطعناه للحطب. ظننّا أن البحر سينتظر.» أخذت التراب المتشقّق في يدها. «لكن الحارسة التي تُخطئ لا تستسلم: تتعلّم، وتبدأ من جديد.»",
        "«أبدأ من جديد كيف؟ ليس لدينا ما نعيد به بناء سبعة عشر كيلومترًا من السدّ. والمدينة لا تأتي. — إذًا ابدئي بما تستطيعين. جذرًا. صوتًا. هذا بحدّ ذاته شيءٌ في وجه البحر.»" ] },
      { id: "pepiniere", title: "المشتل", paragraphs: [
        "في الغد، ذهبت مكالي إلى مخادي بانغورا. «قلتِ إننا نستطيع أن نفعل، بما لدينا. السدّ، لا نستطيع. لكن المانغروف؟»",
        "عندئذٍ كرّرت مكالي ما تعرفه جدّتها، وما فهمته هي بنفسها في النهاية: المانغروف ليس أشجارًا فحسب. جذوره تُمسك التربة، وتكسر الأمواج، وتأوي السمك. إنه سدٌّ ينمو من تلقاء نفسه — بشرط أن نساعده على العودة.",
        "«مشتل، قالت مخادي. نجمع البراعم الصغيرة، الأبواغ النابتة، ونُنمّيها، ونعيد غرسها على طول الساحل. هذا أعرف كيف أُنظّمه.»",
        "كانوا سبعة في البداية. أرت مكالي كيف يُعرَف البُرعم الجيّد، وكيف يُغرَس في الطين على العمق الصحيح، وكيف يُحمى في الأسابيع الأولى. كانت الجدّة تصحّح الحركات: كانت تذكر مانغروف صباها، كثيفًا كغابة. في المساء، ويداها مغطّاتان بالطين، شعرت مكالي بشيءٍ يشبه الفخر." ] },
      { id: "parole", title: "الكلمة التي تسافر", paragraphs: [
        "«أرضٌ تصمت، أرضٌ تُنسى.» ذهبت مكالي إلى يامة توري في الإذاعة الريفية. «لا أحد في المدينة يعرف ما يحدث لنا. رحل سانا لأنه ظنّ أنه لا شيء يستحقّ الدفاع عنه. لو سمع الناس كاباك…»",
        "على مدى أيام، جمعت يامة الأصوات: بوراما وزوارقه الفارغة، والممرّضة ودفترها، والجدّة وحكاية كا بِنك، وشباب المشتل. ومكالي، بصوتٍ يرتجف قليلًا: «عندنا، تشرق الشمس أجمل من أي مكان. نريد فقط أن يبقى لها سهلٌ تشرق عليه.»",
        "بُثّ البرنامج يوم أحد، وسافر من مذياع إلى مذياع، ومن كلمةٍ متناقَلة إلى رسالةٍ تُشارَك من هاتف إلى هاتف، حتى كوناكري.",
        "ورسم الشباب أيضًا، على جدار «بيت الشباب»، جدارية كبيرة: السهل الأخضر، والمانغروف، وفوقها شمسٌ هائلة. حين تراجعت مكالي لتنظر إليها، خُيّل إليها من جديد أنها ترى، في الضوء، ذلك الطيف اللطيف الذي يحرس. هذه المرة، ابتسمت: صارت تعرف الآن لماذا يوجد الحرّاس." ] },
      { id: "racine", title: "ما يُمسكه جذر", paragraphs: [
        "وصل صوت كاباك في النهاية إلى حيث تُتّخذ القرارات. ذات يوم، جاء أناسٌ من المدينة. ليس كلّ من كانوا يأملون، ولا بكل ما يلزم — بقي السدّ الكبير حلمًا أثقل من زيارة واحدة. لكنهم أصغوا.",
        "في اجتماع البلدية، عرضت مخادي الملفّ الذي أعدّه الشباب معها: صور، وأرقام، وخرائط، والمشتل دليلًا. «لا نطلب صدقة. نطلب أن يُصلَح ما يحمي مخزنًا يُطعِم حتى العاصمة. وفي الانتظار، انظروا: لقد بدأنا.»",
        "وعدت السلطات بدراسة إعادة تأهيل السدّ. والوعد ليس سدًّا، كانت مكالي تعرف ذلك. لكن التزامًا مكتوبًا بابٌ يُفتَح، حيث لم يكن إلا جدار.",
        "في ذلك المساء، عادت مكالي لترى صفّها الأول من أشجار المانغروف. كانت الشتلات قد صمدت؛ وجذورٌ صغيرة تُمسك الطين بالفعل. شيءٌ ضئيل. ومع ذلك، حين ارتفع المدّ، اصطدم الماء، في ذلك الموضع بالضبط، بقوّةٍ أقلّ قليلًا. «أترين، قالت الجدّة. هذا ما يُمسكه جذر. لا البحر كلّه. بل حصّته فحسب. وإن أمسك كلٌّ حصّته…»" ] },
      { id: "soleil-revient", title: "الشمس تعود", paragraphs: [
        "عاد سانا في بداية الموسم الجافّ. لم تُرِده كوناكري كما حلم؛ عاد أنحف، وأكثر صمتًا. ظنّت مكالي أنه سيخجل. لكنه نزل إلى السهل، ونظر إلى المشتل، والجدارية، وصفّ أشجار المانغروف الفتيّة، وقال فقط: «هل يمكننا أن نغرس المزيد؟»",
        "في الغد، نهضا معًا قبل بزوغ النهار، الأخ والأخت، مِعزقة وكيس أبواغ على الكتف، ونزلا نحو الشاطئ.",
        "صعدت الشمس من أقصى السهل. لم تكن الأرض قد شُفيت بعد؛ سيحتاج الملح سنواتٍ ليرحل، وما زال السدّ مجرّد وعد. لكن على طول الساحل، كانت مانغروف فتيّة تخضرّ، وفي بضعة مربّعاتٍ عاد إليها الماء العذب، تجرّأوا على إعادة الأرز. وللحظة، كما من قبل، صار الماء والأرز والرمل والسماء نورًا واحدًا.",
        "غرست مكالي مِعزقتها في التراب. لم تكن تلك نهاية الحكاية. كانت بداية الحراسة." ] },
    ],
  },
  zh: {
    lang: "zh", dir: "ltr", label: "中文", bookTitle: "卡巴克",
    sections: [
      { id: "premier-soleil", title: "第一缕太阳", paragraphs: [
        "玛卡蕾·苏马总是赶在太阳之前醒来，因为她想看着它升起来。十四岁的她，能确定的事不多，但这一件她很确定：在几内亚，没有哪里的太阳像在卡巴克这样升起。",
        "它从平原的尽头、稻田的后面升上来，有那么一瞬间，水渠里的水、绿色的稻、沙子和天空，融成了同一束光。仿佛大地是从底下被点亮的。",
        "她的父亲布拉马已经和渔民们出海了。「最美的太阳」，她奶奶常这么说。在卡巴克，没有人反驳她。",
        "这是一片农人、渔民和牧人的土地，把陌生人当作亲人来招待：还没问你的名字，就先递给你水，给你一个树荫下的位置。在这里，没有人会被留在门外。",
        "玛卡蕾把锄头插进黑色的泥土里，心里安宁——并不知道，这是平原整片还是绿色的最后几个清晨之一。" ] },
      { id: "ka-benk", title: "卡·宾克的传说", paragraphs: [
        "傍晚，暑气退下时，奶奶就讲故事。是她告诉玛卡蕾，他们的土地为什么叫卡巴克。",
        "「最初，只有水。后来沙子来了，一粒一粒，直到在海中央堆成一座小丘。卡·宾克：被水环绕的一堆沙。最早的居民懂得了一件你永远不能忘记的事，我的孩子：我们不是这片土地的主人。我们是它的守护者。海把它借给了我们。」",
        "在灯光里，玛卡蕾有时仿佛看见，在老人的肩后，有一个守望着的身影。她没对任何人说起；她以为是夜色在跟她的眼睛开玩笑。",
        "「那堤坝呢，恩娜？——是人筑的。十七公里的土，立起来抵挡大海，让咸水留在外面，让稻子在里面生长。只要堤坝守得住，淡水就还是淡水。等它垮掉的那一天……」奶奶从不把这句话说完。" ] },
      { id: "rester-partir", title: "留下的人，离开的人", paragraphs: [
        "玛卡蕾的哥哥叫萨纳。十八岁，他不想再要那把锄头了。「这里什么都没有，他说。没有路，夜里没有灯，没有未来。在科纳克里，至少还能碰碰运气。」",
        "玛卡蕾不明白，怎么能把一片太阳如此升起的土地叫作「什么都没有」。可萨纳不是唯一一个：每一季，年纪大些的孩子背着包，登上去往大陆的独木舟，再也不回来。",
        "在「青年之家」，她遇见了两个她再也忘不了的女人。负责本镇小型项目的玛卡迪·班古拉：「发展，不是等城里来想着我们。而是用我们手里有的，在我们所在的地方，去做。」还有乡村电台的记者雅玛·图雷：「一片沉默的土地，就是一片被遗忘的土地。」",
        "那天傍晚，玛卡蕾望着太阳落下，巨大，火红与金黄，落在像静水般起伏的稻田上。她对自己说，她永远不会离开。她还不知道，留下，并不总是由得了自己。" ] },
      { id: "grande-eau", title: "大水之夜", paragraphs: [
        "事情始于一个大潮和大风的夜晚。玛卡蕾被一种从未听过的声音惊醒：大海，不在它该在的地方了。",
        "那堤坝，被岁月磨垮，早就裂了，却一直没有人来修，终于在很长一段上崩开了。咸水正涌进平原。",
        "人们想用沙袋把它挡回去，赤手空拳，在黑暗里。布拉马一直干到黎明。可人是挡不住大海的。",
        "天亮时——没有美丽的太阳，只有云后一片污浊的光——平原成了一片潟湖。绿色的稻子泡在海水里。「会干的」，有人说。奶奶什么也没说：她知道盐会留下什么。" ] },
      { id: "sel", title: "盐", paragraphs: [
        "水退了。盐留下了。它像一种病一样留在土里。从前长稻的地方，再没有什么冒出来。这片平原，整个下海岸的粮仓，变成了一层白色、龟裂的硬壳。",
        "海上也好不到哪里去。红树林——那些根扎进淤泥、庇护着小鱼的树——也在窒息中死去。没有了红树林，鱼也少了。布拉马的独木舟，回来时只装了半船。",
        "护士雅丽·西塞挨家挨户地走，在一个本子里记下：孩子身上的伤口被咸水泡得不愈合，一家家在夜里往外舀水。有些人往后退，丢下水边的房子。",
        "一天傍晚，萨纳拿起了他的包。「我走了。没有稻，也没有鱼了。我不想死在一堆沙上。」玛卡蕾想留住他，却找不到话。卡·宾克，她想。被水环绕的土地。而水，此刻，正把它收回去。" ] },
      { id: "soleil-rouge", title: "红色的太阳", paragraphs: [
        "可那一周，仍有一个傍晚，太阳像从前一样落下。天空燃烧起来，火红与金黄，壮丽，漠然——而最美的太阳，如今映在一片被淹、被盐浸的平原上。这份铺在灾难之上的美，让人难以忍受。",
        "奶奶过来坐在她身边。「你还记得吗？我们是守护者，不是主人。——我们守得不好，恩娜。——是啊。堤坝，我们由着它开裂。红树林，我们砍来当柴。我们以为大海会等。」她把龟裂的泥土握在手里。「可一个犯了错的守护者不会就此放手：她去学，然后重新开始。」",
        "「重新开始？我们没有本钱重筑十七公里的堤坝。城里也不来。——那就从你能做的开始。一条根。一个声音。这，对着大海来说，已经是点什么了。」" ] },
      { id: "pepiniere", title: "苗圃", paragraphs: [
        "第二天，玛卡蕾去找玛卡迪·班古拉。「您说过，我们能用手里有的去做。堤坝，我们做不了。可红树林呢？」",
        "于是玛卡蕾把奶奶知道的、还有她自己终于想明白的，都说了出来：红树林不只是树。它的根固住泥土，破开浪头，庇护鱼群。它是一道会自己生长的堤坝——只要我们帮它回来。",
        "「办个苗圃，玛卡迪说。我们采来幼苗，那些胎生的繁殖体，把它们养大，再沿着海岸重新栽下去。这个，我会组织。」",
        "起初他们只有七个人。玛卡蕾教大家怎么认出一株好的繁殖体，怎么把它按到淤泥里合适的深度，头几个星期怎么护着它。奶奶纠正大家的手势：她记得自己年轻时的红树林，密得像一片森林。傍晚，双手沾满泥，玛卡蕾感到一种近乎自豪的东西。" ] },
      { id: "parole", title: "会旅行的话语", paragraphs: [
        "「一片沉默的土地，就是一片被遗忘的土地。」玛卡蕾去乡村电台找雅玛·图雷。「城里没有人知道我们正在经历什么。萨纳走，是因为他以为这里没有什么值得守护。如果人们能听见卡巴克……」",
        "一连几天，雅玛收集声音：布拉马和他空空的独木舟，护士和她的本子，奶奶和卡·宾克的传说，苗圃里的年轻人。还有玛卡蕾，用微微发颤的声音说：「在我们这儿，太阳升起来比任何地方都美。我们只希望，它能一直有一片平原可以升起。」",
        "节目在一个星期天播出，从一台收音机传到另一台，从口耳相传到一条在手机间转发的消息，一路传到科纳克里。",
        "年轻人还在「青年之家」的墙上画了一幅大壁画：绿色的平原，红树林，上方一轮巨大的太阳。当玛卡蕾退后去看它，她仿佛又在光里看见了那个温柔的、守望着的身影。这一次，她笑了：她现在懂得了守护者是做什么的。" ] },
      { id: "racine", title: "一条根能守住什么", paragraphs: [
        "卡巴克的声音，终于传到了做决定的地方。有一天，有人从城里来了。不是他们盼着的所有人，也没带来所需的一切——那道大堤坝，对一次到访来说仍是个太沉重的梦。但他们听了。",
        "在镇上的会议上，玛卡迪摊开年轻人和她一起准备的卷宗：照片、数字、地图，还有红树林苗圃作为证据。「我们不是来求施舍的。我们请求修复那道保护着一座粮仓的东西——这座粮仓，一直供养到首都。而在此期间，请看：我们已经开始了。」",
        "当局答应研究堤坝的修复。一个承诺不是一道堤坝，玛卡蕾明白这一点。可一纸书面承诺，是在原本只有一堵墙的地方，打开的一扇门。",
        "那天傍晚，玛卡蕾回去看她那第一排红树。幼苗挺住了；细小的根已经在抓着淤泥。这么微不足道。可当潮水涨起，就在那一处，海水拍打得轻了一些。「你看，奶奶说。这就是一条根能守住的。不是整片海。只是它那一份。而如果人人都守住自己那一份……」" ] },
      { id: "soleil-revient", title: "太阳回来了", paragraphs: [
        "旱季初，萨纳回来了。科纳克里没有像他梦想的那样接纳他；他回来时更瘦了，更沉默了。玛卡蕾以为他会觉得羞愧。可他走下平原，看着苗圃、壁画、那一排年轻的红树，只说了一句：「我们能再多种一些吗？」",
        "第二天，兄妹俩在天亮前一起起身，肩上一把锄头、一袋繁殖体，向海边走去。",
        "太阳从平原的尽头升起。土地还没有痊愈；盐还要好些年才会退去，堤坝也仍只是一个承诺。可沿着海岸，一片年轻的红树正在转绿，而在几块淡水重新回来的田里，人们已经敢于重新种上稻子。有那么一瞬，像从前一样，水、稻、沙和天，融成了同一束光。",
        "玛卡蕾把锄头插进泥土。这不是故事的结束。这是守护的开始。" ] },
    ],
  },
};
