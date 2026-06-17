// Série « KOUMANTHIO, ENFANT DE TROUPE » — Tome 1 : « L'arrivée »
// Pati Aventure (10-12 ans). 15 doubles-pages.
// Héroïne : Koumanthio Diallo, de Labé (Fouta). Élevée par Pati, sa très vieille grand-mère.
// Le Prytanée / Camp Alpha Yaya Diallo (Simandou Academy). Fil rouge : « On tient droit, et on se tait. »
// FR + EN + AR + ZH. (AR/ZH : relecture locuteur natif recommandée avant production.)
// NB : prénoms et noms provisoires — à verrouiller.

import type { Lang } from "./series/taadidi";

type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };

export const KOUMANTHIO_T1_ML: Partial<Record<Lang, RBook>> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français",
    bookTitle: "Koumanthio, enfant de troupe — L'arrivée",
    sections: [
    { title: "La liste du CEPE", image: "/images/koumanthio/koumanthio-t1-01.webp", paragraphs: [
        "Ce matin-là, la brume était si épaisse sur Labé qu'on ne voyait pas le manguier au bout de la cour.",
        "Devant le mur de l'école, c'était la bousculade : chacun cherchait son nom sur les résultats du CEPE. Koumanthio attendit que la vague se retire, puis elle lut. Une fois, deux fois. Elle était parmi les premiers de toute la région.",
        "Elle ne cria pas. Elle posa seulement la main à plat sur le mur. Les mieux classés, on le disait partout, seraient présélectionnés pour descendre à Conakry — et passer le test du Prytanée.",
    ] },
    { title: "Pati savait", image: "/images/koumanthio/koumanthio-t1-02.webp", paragraphs: [
        "À la maison, la vieille femme ne pleura pas, ne cria pas. Elle écouta, hocha la tête une fois, et dit :",
        "— Je le savais.",
        "On l'appelait Pati. Depuis toujours, c'était elle qui élevait Koumanthio. Elle était si âgée que plus personne au quartier ne se souvenait de l'avoir vue jeune ; ses mains tremblaient un peu, mais son regard, jamais.",
    ] },
    { title: "Le petit sac", image: "/images/koumanthio/koumanthio-t1-03.webp", paragraphs: [
        "Les jours suivants, Pati prépara le départ. Elle plia, déplia, replia le petit sac. Elle y mit un foulard, un sachet de fonio, et une chose enveloppée dans un vieux tissu que Koumanthio ne vit pas.",
        "— Qu'est-ce que c'est, Pati ?",
        "— On l'ouvrira un jour, dit la grand-mère en refermant le sac. Pas aujourd'hui.",
    ] },
    { title: "Ce que dit Pati", image: "/images/koumanthio/koumanthio-t1-04.webp", paragraphs: [
        "La veille du grand jour, Pati la fit asseoir devant elle.",
        "— L'école est dans un camp, à Conakry. Et ce camp porte un nom : celui de ton aïeul. Alpha Yaya. Le roi de Labé, l'homme qui n'a pas voulu plier. On est venu le chercher, on l'a emmené par-delà la mer, dans un pays de sable. Il n'est jamais revenu vivant.",
        "Elle prit le menton de l'enfant dans sa main tremblante.",
        "— Tu portes deux noms qui pèsent. Diallo, comme lui — mais des Diallo, il y en a autant que de gouttes de pluie. Et Koumanthio : ça, c'est rare. C'était le nom de la mère du roi, une princesse venue de loin.",
    ] },
    { title: "On tient droit, on se tait", image: "/images/koumanthio/koumanthio-t1-05.webp", paragraphs: [
        "— Pourquoi tu me dis tout ça, Pati ?",
        "— Pour que tu le saches. Pas pour que tu t'en serves. Là-bas, on ne te demandera pas qui était ton aïeul. On te demandera ce que toi, tu sais faire.",
        "Sa voix se fit basse et ferme.",
        "— Un grand nom, ce n'est pas une porte pour passer devant les autres. C'est un dos qu'on tient droit. Tu m'entends ? On tient droit, et on se tait.",
        "Koumanthio rangea les mots quelque part en elle, là où l'on garde ce qui servira plus tard.",
    ] },
    { title: "Adieu aux collines", image: "/images/koumanthio/koumanthio-t1-06.webp", paragraphs: [
        "Au matin, la brume avait avalé les collines. Koumanthio les regarda disparaître par la vitre, jusqu'à ce qu'il n'en reste rien.",
        "Conakry était tout le contraire du Fouta. Pas de fraîcheur : la chaleur collait à la peau, l'air sentait le sel et l'essence, et la mer, au bout des avenues, brillait comme une plaque de métal. Tant de monde, tant de bruit. Koumanthio se sentit minuscule sous le grand ciel blanc.",
    ] },
    { title: "La grille", image: "/images/koumanthio/koumanthio-t1-07.webp", paragraphs: [
        "Devant elle se dressait une grille immense. Au-dessus, des lettres de fer :",
        "CAMP ALPHA YAYA DIALLO.",
        "Koumanthio s'arrêta net. Le nom de l'aïeul, écrit en grand, au-dessus de sa tête, pour que tout le monde le voie — et personne, autour d'elle, ne savait. Pour les autres, des lettres sur un portail. Pour elle, un coup au cœur qu'elle garda pour elle.",
        "À côté, un panneau plus neuf : Établissement du programme Simandou Academy. Elle ne savait pas encore ce que ça voulait dire. Elle l'apprendrait.",
    ] },
    { title: "Le test", image: "/images/koumanthio/koumanthio-t1-08.webp", paragraphs: [
        "Car on n'entrait pas encore. Les présélectionnés de tout le pays étaient là pour la même chose : le test.",
        "Une grande salle, des tables au carré, le silence, le grattement des stylos. Koumanthio respira, comme avant de lire la liste, et elle travailla. Les chiffres, les mots, les questions — elle les prit un à un, sans se presser, le dos droit.",
        "Quand elle posa son stylo, elle ne savait pas si c'était assez. Elle savait seulement qu'elle avait tout donné.",
    ] },
    { title: "L'enregistrement", image: "/images/koumanthio/koumanthio-t1-09.webp", paragraphs: [
        "Quelques jours plus tard, son nom était sur la dernière liste — la bonne. Elle était admise.",
        "À l'enregistrement, un militaire lut sans lever la tête :",
        "— Diallo. Prénom ?",
        "— Koumanthio.",
        "Là, il leva les yeux, et la regarda une seconde de trop.",
        "— Koumanthio… ce n'est pas un nom de tous les jours, ça.",
        "Elle sourit. Un sourire poli, tranquille, qui ne disait ni oui ni non.",
        "— Non, monsieur. C'est mon nom.",
        "Et ce fut tout.",
    ] },
    { title: "L'uniforme et le carré", image: "/images/koumanthio/koumanthio-t1-10.webp", paragraphs: [
        "On lui remit un uniforme plié, raide et propre, qui sentait le neuf. On lui montra le dortoir : des lits alignés au carré, si droits qu'on aurait dit qu'ils avaient peur de bouger. Le sien était près de la fenêtre.",
        "Ce soir-là, dans le noir, elle entendit la respiration d'enfants qu'elle ne connaissait pas, et, très loin, un clairon qui sonnait l'extinction des feux. Par la fenêtre, on devinait encore les grandes lettres de fer. Elle ferma les yeux, et tint son dos droit, même couchée.",
    ] },
    { title: "Le clairon", image: "/images/koumanthio/koumanthio-t1-11.webp", paragraphs: [
        "Le clairon, ici, décidait de tout. Il réveillait avant le jour, alignait, pressait, comptait. Tout était droit, net, minuté : le lit au carré, les chaussures en ligne, le pas qui claque.",
        "Les premiers jours furent durs. Le Fouta lui manquait — la brume, le fonio de Pati, le silence des collines. Le soir, certains pleuraient tout bas. Koumanthio, elle, serrait les dents et tenait.",
    ] },
    { title: "Les autres", image: "/images/koumanthio/koumanthio-t1-12.webp", paragraphs: [
        "Peu à peu, des visages devinrent des noms.",
        "Sèdjro était venu du Bénin — l'un des élèves des pays amis. Loin des siens lui aussi, il riait fort pour ne pas avoir le mal du pays.",
        "Il y avait un petit qui n'y arrivait pas, toujours en retard, toujours puni. Et un grand qui répétait à qui voulait l'entendre que son père était « quelqu'un d'important ».",
        "Koumanthio écoutait. Et du sien, de nom, elle ne disait rien.",
    ] },
    { title: "Le quartier libre", image: "/images/koumanthio/koumanthio-t1-13.webp", paragraphs: [
        "Mais une école d'enfants reste une école d'enfants. Au quartier libre, le carré et le clairon s'oubliaient : un ballon sortait de nulle part, et la cour devenait un terrain.",
        "Sèdjro était partout — il criait, ratait, recommençait, faisait rire tout le monde. Le petit, qu'on choisissait toujours en dernier, marqua un but un soir ; Koumanthio cria son nom plus fort que les autres.",
        "Un jour, des filles l'entraînèrent à l'écart. Koumanthio hésita, puis se lança : elle leur apprit un jeu de mains de Labé, avec une chanson en pular. Bientôt leurs paumes claquaient ensemble, de plus en plus vite — clac, clac-clac, clac — et le rythme gagna toute la cour.",
        "D'abord, les garçons firent mine de ne pas écouter. Puis un pied se mit à battre la mesure. Puis deux mains. Puis Sèdjro débarqua au milieu du cercle, voulut chanter le pular, écorcha tous les mots — et la cour entière éclata de rire.",
        "Le soir même, filles et garçons mêlés, c'était devenu le jeu de tout le monde.",
        "Pour la première fois depuis la grille, Koumanthio ne pensa plus aux collines.",
    ] },
    { title: "Le pas en avant", image: "/images/koumanthio/koumanthio-t1-14.webp", paragraphs: [
        "Tout n'était pas que rires, pourtant.",
        "Un soir, le petit fit tomber le drapeau qu'on rangeait. Punition pour tout le groupe. Le fanfaron, celui dont le père était « quelqu'un d'important », se cacha derrière les autres.",
        "Koumanthio, elle, fit un pas en avant : c'était sa faute à elle aussi, dit-elle. Sortir son nom, ce soir-là, l'aurait peut-être tirée d'affaire. Elle ne le fit pas.",
        "Elle prit la punition, debout à côté du petit, sans un mot.",
    ] },
    { title: "Le dos droit", image: "/images/koumanthio/koumanthio-t1-15.webp", paragraphs: [
        "Après ça, le groupe se serra. Le matin, Koumanthio aidait le petit à faire son lit au carré ; le soir, on revoyait les leçons ensemble, Sèdjro répétait la chanson de Labé sans jamais la réussir, et l'on riait encore.",
        "Le respect vint — non pour un nom, mais pour ce qu'elle faisait, et pour ce qu'elle était avec les autres.",
        "À la fin de cette première année, Koumanthio passa sous la grande grille. Les lettres de fer étaient toujours là, au-dessus d'elle : le nom de l'aïeul, son secret. Elle ne dit rien.",
        "Mais elle marcha la tête un peu plus haute.",
    ] },
    ],
  },

  en: {
    lang: "en", dir: "ltr", label: "English",
    bookTitle: "Koumanthio, Child of the Troop — The Arrival",
    sections: [
    { title: "The CEPE List", image: "/images/koumanthio/koumanthio-t1-01.webp", paragraphs: [
        "That morning, the mist lay so thick over Labé that you could not see the mango tree at the end of the yard.",
        "In front of the school wall, it was a crush: everyone searching for their name on the CEPE results. Koumanthio waited for the wave to draw back, then she read. Once, twice. She was among the top of the whole region.",
        "She did not cry out. She only laid her flat hand against the wall. The highest-ranked, everyone said, would be preselected to go down to Conakry — and sit the entrance test of the Prytanée.",
    ] },
    { title: "Pati Knew", image: "/images/koumanthio/koumanthio-t1-02.webp", paragraphs: [
        "At home, the old woman did not weep, did not cry out. She listened, nodded once, and said:",
        "\"I knew it.\"",
        "They called her Pati. For as long as anyone could remember, it was she who had raised Koumanthio. She was so old that no one in the neighbourhood remembered ever seeing her young; her hands trembled a little, but her gaze, never.",
    ] },
    { title: "The Little Bag", image: "/images/koumanthio/koumanthio-t1-03.webp", paragraphs: [
        "In the days that followed, Pati prepared the departure. She folded, unfolded, folded again the little bag. She put in a headscarf, a small pouch of fonio, and a thing wrapped in an old cloth that Koumanthio did not see.",
        "\"What is it, Pati?\"",
        "\"We'll open it one day,\" said the grandmother, closing the bag. \"Not today.\"",
    ] },
    { title: "What Pati Said", image: "/images/koumanthio/koumanthio-t1-04.webp", paragraphs: [
        "On the eve of the great day, Pati had her sit down before her.",
        "\"The school is in a camp, in Conakry. And that camp bears a name: that of your forefather. Alpha Yaya. The king of Labé, the man who would not bend. They came for him, they took him away across the sea, to a land of sand. He never came back alive.\"",
        "She took the child's chin in her trembling hand.",
        "\"You carry two names that weigh. Diallo, like him — but Diallos, there are as many as raindrops. And Koumanthio: that one is rare. It was the name of the king's mother, a princess come from far away.\"",
    ] },
    { title: "We Stand Straight, We Stay Silent", image: "/images/koumanthio/koumanthio-t1-05.webp", paragraphs: [
        "\"Why are you telling me all this, Pati?\"",
        "\"So that you know it. Not so that you use it. Over there, no one will ask you who your forefather was. They will ask you what you, yourself, can do.\"",
        "Her voice grew low and firm.",
        "\"A great name is not a door to walk ahead of others. It is a back you hold straight. Do you hear me? We stand straight, and we stay silent.\"",
        "Koumanthio put the words away somewhere inside her, there where one keeps what will serve later.",
    ] },
    { title: "Farewell to the Hills", image: "/images/koumanthio/koumanthio-t1-06.webp", paragraphs: [
        "In the morning, the mist had swallowed the hills. Koumanthio watched them vanish through the window, until nothing was left of them.",
        "Conakry was the very opposite of the Fouta. No coolness: the heat clung to the skin, the air smelled of salt and petrol, and the sea, at the end of the avenues, shone like a sheet of metal. So many people, so much noise. Koumanthio felt tiny under the great white sky.",
    ] },
    { title: "The Gate", image: "/images/koumanthio/koumanthio-t1-07.webp", paragraphs: [
        "Before her rose an immense gate. Above it, letters of iron:",
        "CAMP ALPHA YAYA DIALLO.",
        "Koumanthio stopped short. The name of her forefather, written large, above her head, for all to see — and no one, around her, knew. To the others, letters on a gate. To her, a blow to the heart that she kept to herself.",
        "Beside it, a newer sign: Establishment of the Simandou Academy programme. She did not yet know what that meant. She would learn.",
    ] },
    { title: "The Test", image: "/images/koumanthio/koumanthio-t1-08.webp", paragraphs: [
        "For one did not yet go in. The preselected from all over the country were there for the same thing: the test.",
        "A great hall, tables set in squares, the silence, the scratching of pens. Koumanthio breathed, as before reading the list, and she worked. The figures, the words, the questions — she took them one by one, without hurrying, her back straight.",
        "When she set down her pen, she did not know if it was enough. She knew only that she had given everything.",
    ] },
    { title: "The Registration", image: "/images/koumanthio/koumanthio-t1-09.webp", paragraphs: [
        "A few days later, her name was on the final list — the right one. She was admitted.",
        "At registration, a soldier read without raising his head:",
        "\"Diallo. First name?\"",
        "\"Koumanthio.\"",
        "There, he raised his eyes, and looked at her a second too long.",
        "\"Koumanthio… that's not an everyday name, that one.\"",
        "She smiled. A polite, calm smile, that said neither yes nor no.",
        "\"No, sir. It is my name.\"",
        "And that was all.",
    ] },
    { title: "The Uniform and the Square", image: "/images/koumanthio/koumanthio-t1-10.webp", paragraphs: [
        "She was handed a folded uniform, stiff and clean, smelling of newness. She was shown the dormitory: beds aligned in squares, so straight you would have thought they were afraid to move. Hers was near the window.",
        "That night, in the dark, she heard the breathing of children she did not know, and, very far off, a bugle sounding lights-out. Through the window, the great iron letters could still be made out. She closed her eyes, and held her back straight, even lying down.",
    ] },
    { title: "The Bugle", image: "/images/koumanthio/koumanthio-t1-11.webp", paragraphs: [
        "The bugle, here, decided everything. It woke them before daybreak, lined them up, hurried them, counted them. Everything was straight, sharp, timed: the bed squared, the shoes in a line, the step that snaps.",
        "The first days were hard. She missed the Fouta — the mist, Pati's fonio, the silence of the hills. In the evening, some wept quietly. Koumanthio, she gritted her teeth and held on.",
    ] },
    { title: "The Others", image: "/images/koumanthio/koumanthio-t1-12.webp", paragraphs: [
        "Little by little, faces became names.",
        "Sèdjro had come from Benin — one of the pupils from the friendly countries. Far from his own people too, he laughed loudly so as not to be homesick.",
        "There was a small one who could not manage, always late, always punished. And a big one who repeated to anyone who would listen that his father was \"someone important.\"",
        "Koumanthio listened. And of her own name, she said nothing.",
    ] },
    { title: "Free Time", image: "/images/koumanthio/koumanthio-t1-13.webp", paragraphs: [
        "But a school of children remains a school of children. In free time, the square and the bugle were forgotten: a ball came out of nowhere, and the yard became a pitch.",
        "Sèdjro was everywhere — he shouted, missed, started again, made everyone laugh. The small one, always chosen last, scored a goal one evening; Koumanthio called out his name louder than the others.",
        "One day, some girls drew her aside. Koumanthio hesitated, then dived in: she taught them a clapping game from Labé, with a song in Pular. Soon their palms were clapping together, faster and faster — clap, clap-clap, clap — and the rhythm took over the whole yard.",
        "At first, the boys pretended not to listen. Then a foot began to beat time. Then two hands. Then Sèdjro burst into the middle of the circle, tried to sing the Pular, mangled every word — and the whole yard burst out laughing.",
        "That very evening, girls and boys all mixed together, it had become everyone's game.",
        "For the first time since the gate, Koumanthio no longer thought of the hills.",
    ] },
    { title: "The Step Forward", image: "/images/koumanthio/koumanthio-t1-14.webp", paragraphs: [
        "Yet it was not all laughter.",
        "One evening, the small one knocked over the flag being put away. Punishment for the whole group. The braggart, the one whose father was \"someone important,\" hid behind the others.",
        "Koumanthio, she took a step forward: it was her fault too, she said. To bring out her name, that evening, might perhaps have got her off. She did not do it.",
        "She took the punishment, standing beside the small one, without a word.",
    ] },
    { title: "The Straight Back", image: "/images/koumanthio/koumanthio-t1-15.webp", paragraphs: [
        "After that, the group drew closer. In the morning, Koumanthio helped the small one square his bed; in the evening, they went over the lessons together, Sèdjro rehearsed the song from Labé without ever getting it right, and again they laughed.",
        "Respect came — not for a name, but for what she did, and for what she was with the others.",
        "At the end of that first year, Koumanthio passed beneath the great gate. The iron letters were still there, above her: the name of her forefather, her secret. She said nothing.",
        "But she walked with her head a little higher.",
    ] },
    ],
  },

  ar: {
    lang: "ar", dir: "rtl", label: "العربية",
    bookTitle: "كومانثيو، ابنة الكتيبة — الوصول",
    sections: [
    { title: "قائمة الشهادة الابتدائيّة", image: "/images/koumanthio/koumanthio-t1-01.webp", paragraphs: [
        "ذلك الصباح، كان الضباب كثيفًا فوق لابي إلى حدّ أنّ شجرة المانغو في آخر الفناء لم تكن تُرى.",
        "أمام جدار المدرسة، كان هناك تدافع: كلٌّ يبحث عن اسمه في نتائج الشهادة الابتدائيّة. انتظرت كومانثيو أن تنحسر الموجة، ثم قرأت. مرّةً، مرّتين. كانت من الأوائل في الإقليم كلّه.",
        "لم تصرخ. وضعت يدها مبسوطةً على الجدار فحسب. كان يُقال في كلّ مكان إنّ الأوائل سيُنتقَون مبدئيًّا للنزول إلى كوناكري — ولاجتياز اختبار البريتانيه (المدرسة العسكريّة).",
    ] },
    { title: "باتي كانت تعلم", image: "/images/koumanthio/koumanthio-t1-02.webp", paragraphs: [
        "في البيت، لم تبكِ العجوز، ولم تصرخ. أصغت، أومأت مرّةً واحدة، وقالت:",
        "— كنتُ أعلم.",
        "كانوا يسمّونها باتي. منذ الأزل، هي من ربّت كومانثيو. كانت مُسنّةً إلى حدّ أنّ لا أحد في الحيّ يتذكّر أنه رآها شابّة؛ كانت يداها ترتجفان قليلًا، أمّا نظرتها، فلا أبدًا.",
    ] },
    { title: "الكيس الصغير", image: "/images/koumanthio/koumanthio-t1-03.webp", paragraphs: [
        "في الأيّام التالية، هيّأت باتي الرحيل. طوت الكيس الصغير، نشرته، أعادت طيّه. وضعت فيه منديلًا، وكيسًا صغيرًا من الفونيو، وشيئًا ملفوفًا في قماشٍ عتيق لم ترَه كومانثيو.",
        "— ما هذا، يا باتي؟",
        "— سنفتحه يومًا ما، قالت الجدّة وهي تُغلق الكيس. لا اليوم.",
    ] },
    { title: "ما قالته باتي", image: "/images/koumanthio/koumanthio-t1-04.webp", paragraphs: [
        "عشيّة اليوم الكبير، أجلستها باتي أمامها.",
        "— المدرسة في معسكر، في كوناكري. وهذا المعسكر يحمل اسمًا: اسم جدّك الأكبر. ألفا يايا. ملك لابي، الرجل الذي أبى أن ينحني. جاؤوا ليأخذوه، حملوه عبر البحر، إلى بلد رمال. لم يعد حيًّا أبدًا.",
        "أخذت ذقن الطفلة في يدها المرتجفة.",
        "— تحملين اسمين ثقيلين. ديالو، مثله — لكنّ آل ديالو كثيرون كقطرات المطر. وكومانثيو: هذا نادر. كان اسم أمّ الملك، أميرةٍ جاءت من بعيد.",
    ] },
    { title: "نقف منتصبين، ونصمت", image: "/images/koumanthio/koumanthio-t1-05.webp", paragraphs: [
        "— لماذا تقولين لي كلّ هذا، يا باتي؟",
        "— كي تعرفيه. لا كي تستخدميه. هناك، لن يسألوك مَن كان جدّك. سيسألونك ماذا تُحسنين أنتِ.",
        "صار صوتها خفيضًا وحازمًا.",
        "— الاسم الكبير ليس بابًا تتقدّمين به على الآخرين. إنه ظهرٌ نُبقيه منتصبًا. أتسمعينني؟ نقف منتصبين، ونصمت.",
        "أودعت كومانثيو الكلمات في مكانٍ ما في داخلها، هناك حيث نحفظ ما سيفيد لاحقًا.",
    ] },
    { title: "وداعًا للتلال", image: "/images/koumanthio/koumanthio-t1-06.webp", paragraphs: [
        "في الصباح، كان الضباب قد ابتلع التلال. نظرت كومانثيو إليها تختفي من النافذة، حتى لم يبقَ منها شيء.",
        "كانت كوناكري نقيض الفوتا تمامًا. لا برودة: الحرّ يلتصق بالجلد، والهواء تفوح منه رائحة الملح والبنزين، والبحر، في آخر الجادّات، يلمع كصفيحة معدن. كم من الناس، كم من الضجيج. شعرت كومانثيو بنفسها ضئيلةً تحت السماء البيضاء الواسعة.",
    ] },
    { title: "البوّابة", image: "/images/koumanthio/koumanthio-t1-07.webp", paragraphs: [
        "انتصبت أمامها بوّابةٌ هائلة. فوقها، حروفٌ من حديد:",
        "معسكر ألفا يايا ديالو.",
        "توقّفت كومانثيو فجأةً. اسم الجدّ، مكتوبًا بحروفٍ كبيرة، فوق رأسها، ليراه الجميع — ولا أحد، من حولها، يعلم. للآخرين، حروفٌ على بوّابة. أمّا لها، فطعنةٌ في القلب احتفظت بها لنفسها.",
        "إلى جانبها، لافتةٌ أحدث: مؤسّسة برنامج سيماندو أكاديمي. لم تكن تعرف بعد ما يعنيه ذلك. ستعرفه.",
    ] },
    { title: "الاختبار", image: "/images/koumanthio/koumanthio-t1-08.webp", paragraphs: [
        "إذ لم يكن الدخول قد حان بعد. كان المنتقَون مبدئيًّا من كلّ البلد هناك للأمر ذاته: الاختبار.",
        "قاعةٌ كبيرة، طاولاتٌ مرصوفة، الصمت، حفيف الأقلام. تنفّست كومانثيو، كما قبل قراءة القائمة، وعملت. الأرقام، الكلمات، الأسئلة — تناولتها واحدًا واحدًا، دون عجلة، وظهرها منتصب.",
        "حين وضعت قلمها، لم تكن تعرف إن كان ذلك كافيًا. كانت تعرف فقط أنها بذلت كلّ ما لديها.",
    ] },
    { title: "التسجيل", image: "/images/koumanthio/koumanthio-t1-09.webp", paragraphs: [
        "بعد أيّامٍ قليلة، كان اسمها على القائمة الأخيرة — الصحيحة. قُبِلت.",
        "عند التسجيل، قرأ عسكريٌّ دون أن يرفع رأسه:",
        "— ديالو. الاسم الأوّل؟",
        "— كومانثيو.",
        "هنا، رفع عينيه، ونظر إليها ثانيةً أطول من اللازم.",
        "— كومانثيو… ليس اسمًا يُسمَع كلّ يوم، هذا.",
        "ابتسمت. ابتسامةً مهذّبة، هادئة، لا تقول نعم ولا لا.",
        "— لا، سيّدي. إنه اسمي.",
        "وكان ذلك كلّ شيء.",
    ] },
    { title: "البزّة والترتيب", image: "/images/koumanthio/koumanthio-t1-10.webp", paragraphs: [
        "سُلّمت إليها بزّةٌ مطويّة، قاسية ونظيفة، تفوح منها رائحة الجديد. أُرِيت المهجع: أسرّةٌ مصفوفة بإحكام، مستقيمةٌ إلى حدّ تظنّها تخاف أن تتحرّك. كان سريرها قرب النافذة.",
        "تلك الليلة، في العتمة، سمعت أنفاس أطفالٍ لا تعرفهم، و، بعيدًا جدًّا، بوقًا يُعلن إطفاء الأنوار. من النافذة، كانت تُلمَح بعدُ الحروف الحديديّة الكبيرة. أغمضت عينيها، وأبقت ظهرها منتصبًا، حتى وهي مستلقية.",
    ] },
    { title: "البوق", image: "/images/koumanthio/koumanthio-t1-11.webp", paragraphs: [
        "البوق، هنا، كان يقرّر كلّ شيء. يوقظ قبل النهار، يصفّ، يستعجل، يَعُدّ. كان كلّ شيءٍ مستقيمًا، حادًّا، مضبوط التوقيت: السرير المرتّب، الأحذية في صفّ، الخطوة التي تَقرع.",
        "كانت الأيّام الأولى صعبة. اشتاقت إلى الفوتا — الضباب، فونيو باتي، صمت التلال. في المساء، كان بعضهم يبكي بصوتٍ خفيض. أمّا كومانثيو، فكانت تشدّ على أسنانها وتصمد.",
    ] },
    { title: "الآخرون", image: "/images/koumanthio/koumanthio-t1-12.webp", paragraphs: [
        "شيئًا فشيئًا، صارت الوجوه أسماءً.",
        "سيدجرو جاء من بنين — أحد تلاميذ البلدان الصديقة. بعيدًا عن أهله هو أيضًا، كان يضحك بصوتٍ عالٍ كي لا يصيبه الحنين.",
        "كان هناك صغيرٌ لا يقوى على الأمر، دائم التأخّر، دائم العقاب. وكبيرٌ يكرّر لكلّ من يسمعه أنّ أباه «شخصٌ مهمّ».",
        "كانت كومانثيو تُصغي. وعن اسمها هي، لم تقل شيئًا.",
    ] },
    { title: "وقت الفراغ", image: "/images/koumanthio/koumanthio-t1-13.webp", paragraphs: [
        "لكنّ مدرسة أطفالٍ تبقى مدرسة أطفال. في وقت الفراغ، كان الترتيب والبوق يُنسيان: كرةٌ تخرج من العدم، ويصير الفناء ملعبًا.",
        "كان سيدجرو في كلّ مكان — يصيح، يُخطئ، يُعيد، يُضحك الجميع. الصغير، الذي يُختار دائمًا آخرًا، سجّل هدفًا ذات مساء؛ صاحت كومانثيو باسمه أعلى من الجميع.",
        "ذات يوم، جذبتها فتياتٌ جانبًا. ترّددت كومانثيو، ثم انطلقت: علّمتهنّ لعبة أيدٍ من لابي، بأُغنيةٍ بالفولاريّة (البولار). وسرعان ما صارت أكفّهنّ تتلاقى، أسرع فأسرع — كلاك، كلاك-كلاك، كلاك — وعمّ الإيقاع الفناء كلّه.",
        "في البداية، تظاهر الفتيان بألّا يُصغوا. ثم بدأت قدمٌ تضرب الإيقاع. ثم يدان. ثم اقتحم سيدجرو وسط الحلقة، أراد أن يُغنّي البولار، فلحَن في كلّ الكلمات — فانفجر الفناء كلّه ضاحكًا.",
        "في ذلك المساء نفسه، فتياتٌ وفتيانٌ مختلطون، صارت لعبة الجميع.",
        "للمرّة الأولى منذ البوّابة، لم تعد كومانثيو تفكّر في التلال.",
    ] },
    { title: "الخطوة إلى الأمام", image: "/images/koumanthio/koumanthio-t1-14.webp", paragraphs: [
        "لكن لم يكن كلّ شيءٍ ضحكًا.",
        "ذات مساء، أوقع الصغير العَلَم الذي كانوا يطوونه. عقابٌ للمجموعة كلّها. أمّا المتباهي، ذاك الذي أبوه «شخصٌ مهمّ»، فاختبأ خلف الآخرين.",
        "أمّا كومانثيو، فخطت خطوةً إلى الأمام: إنها غلطتها هي أيضًا، قالت. أن تُخرِج اسمها، ذلك المساء، ربّما كان سيُخرِجها من المأزق. لم تفعل.",
        "تلقّت العقاب، واقفةً إلى جانب الصغير، دون كلمة.",
    ] },
    { title: "الظهر المنتصب", image: "/images/koumanthio/koumanthio-t1-15.webp", paragraphs: [
        "بعد ذلك، تماسكت المجموعة. في الصباح، كانت كومانثيو تساعد الصغير على ترتيب سريره؛ في المساء، كانوا يُراجعون الدروس معًا، يُكرّر سيدجرو أُغنية لابي دون أن يُتقنها أبدًا، وكانوا يضحكون من جديد.",
        "جاء الاحترام — لا لاسمٍ، بل لما كانت تفعله، ولِما كانت عليه مع الآخرين.",
        "في نهاية تلك السنة الأولى، مرّت كومانثيو تحت البوّابة الكبيرة. كانت الحروف الحديديّة ما زالت هناك، فوقها: اسم الجدّ، سرّها. لم تقل شيئًا.",
        "لكنها مشت ورأسها أعلى قليلًا.",
    ] },
    ],
  },

  zh: {
    lang: "zh", dir: "ltr", label: "中文",
    bookTitle: "库曼蒂奥，军营之女 — 抵达",
    sections: [
    { title: "小学毕业证书名单", image: "/images/koumanthio/koumanthio-t1-01.webp", paragraphs: [
        "那天早晨，雾浓得盖住了拉贝，连院子尽头的芒果树都看不见。",
        "学校的墙前，人们挤作一团：每个人都在小学毕业证书的成绩单上找自己的名字。库曼蒂奥等那阵人潮退去，才去看。一遍，两遍。她名列全大区的前茅。",
        "她没有喊。她只是把手平平地按在墙上。到处都在说，名次最靠前的，会被预选下到科纳克里——去参加军校的入学考试。",
    ] },
    { title: "帕提早就知道", image: "/images/koumanthio/koumanthio-t1-02.webp", paragraphs: [
        "在家里，老妇人没有哭，没有喊。她听着，点了一下头，说：",
        "——我早就知道。",
        "人们叫她帕提。一直以来，是她把库曼蒂奥养大的。她年纪太大了，街区里再没有人记得见过她年轻的样子；她的手有点儿抖，但她的目光，从来不抖。",
    ] },
    { title: "小包袱", image: "/images/koumanthio/koumanthio-t1-03.webp", paragraphs: [
        "接下来的几天，帕提为出发做准备。她把小包袱叠起来，又打开，再叠上。她往里放了一条头巾、一小袋福尼奥，还有一样用旧布裹着的东西，库曼蒂奥没看见。",
        "——这是什么，帕提？",
        "——总有一天我们会打开它，奶奶说着，合上了包袱。不是今天。",
    ] },
    { title: "帕提说的话", image: "/images/koumanthio/koumanthio-t1-04.webp", paragraphs: [
        "大日子的前一晚，帕提让她坐在自己面前。",
        "——学校在一座军营里，在科纳克里。那座军营有个名字：你先祖的名字。阿尔法·亚亚。拉贝的国王，那个不肯低头的人。他们来抓走了他，把他带到海的那边，一个沙的国度。他再也没有活着回来。",
        "她用颤抖的手托起孩子的下巴。",
        "——你背着两个有分量的名字。迪亚洛，和他一样——但姓迪亚洛的，多得像雨点。而库曼蒂奥：这个，少见。那是国王母亲的名字，一位从远方来的公主。",
    ] },
    { title: "我们站得笔直，我们沉默", image: "/images/koumanthio/koumanthio-t1-05.webp", paragraphs: [
        "——你为什么跟我说这一切，帕提？",
        "——为了让你知道。不是为了让你用它。在那边，没有人会问你的先祖是谁。他们会问你，你自己，会做什么。",
        "她的声音变得低沉而坚定。",
        "——一个大名字，不是一道让你走在别人前头的门。它是一道你要挺直的脊背。你听见了吗？我们站得笔直，我们沉默。",
        "库曼蒂奥把这些话收进了心里的某个地方，那个收藏着日后有用之物的地方。",
    ] },
    { title: "向群山告别", image: "/images/koumanthio/koumanthio-t1-06.webp", paragraphs: [
        "早晨，雾吞没了群山。库曼蒂奥隔着车窗望着它们消失，直到什么都不剩。",
        "科纳克里和富塔恰恰相反。没有清凉：热气黏在皮肤上，空气里有盐和汽油的味道，而大海，在大街的尽头，亮得像一块金属板。这么多人，这么吵。库曼蒂奥在那片巨大的白色天空下，觉得自己渺小极了。",
    ] },
    { title: "大门", image: "/images/koumanthio/koumanthio-t1-07.webp", paragraphs: [
        "在她面前，矗立着一道巨大的铁门。门上方，是铁铸的字母：",
        "阿尔法·亚亚·迪亚洛军营。",
        "库曼蒂奥猛地停住。先祖的名字，大大地写着，在她头顶，让所有人都看得见——而她周围，没有人知道。对别人，那是大门上的几个字母。对她，那是一记击在心上的、她独自咽下的痛。",
        "门旁，一块更新的牌子：西曼杜学院项目机构。她还不知道那是什么意思。她会知道的。",
    ] },
    { title: "考试", image: "/images/koumanthio/koumanthio-t1-08.webp", paragraphs: [
        "因为还不能进去。全国被预选上的人都为了同一件事来到这里：考试。",
        "一间大厅，方方正正排列的桌子，寂静，笔尖的沙沙声。库曼蒂奥吸了口气，像看名单前那样，然后她答题。数字、词语、问题——她一道一道地接住，不慌不忙，脊背挺直。",
        "当她放下笔时，她不知道这够不够。她只知道，她拿出了全部。",
    ] },
    { title: "登记", image: "/images/koumanthio/koumanthio-t1-09.webp", paragraphs: [
        "几天后，她的名字在最后一份名单上——对的那份。她被录取了。",
        "登记时，一个军人头也不抬地念：",
        "——迪亚洛。名字呢？",
        "——库曼蒂奥。",
        "这时，他抬起眼睛，多看了她一秒。",
        "——库曼蒂奥……这名字，可不是天天听得到的。",
        "她笑了。一个礼貌、平静的笑，既不说是，也不说不。",
        "——是的，先生。这是我的名字。",
        "就这样。",
    ] },
    { title: "制服与方正", image: "/images/koumanthio/koumanthio-t1-10.webp", paragraphs: [
        "人家递给她一套叠好的制服，硬挺、干净，带着新东西的味道。人家带她看宿舍：一张张方方正正排列的床，笔直得仿佛怕动一下。她的床在窗边。",
        "那天夜里，在黑暗中，她听见一些她不认识的孩子的呼吸，还有，在很远的地方，一声宣告熄灯的号角。透过窗子，还能依稀辨出那些巨大的铁字母。她闭上眼睛，挺直脊背，哪怕是躺着。",
    ] },
    { title: "号角", image: "/images/koumanthio/koumanthio-t1-11.webp", paragraphs: [
        "在这里，号角决定一切。它在天亮前唤醒众人，列队、催促、清点。一切都笔直、利落、掐着点：床要叠方，鞋要排齐，步子要踏得脆响。",
        "头几天很难熬。她想念富塔——那雾，帕提的福尼奥，群山的寂静。晚上，有人悄悄地哭。而库曼蒂奥，咬紧牙关，撑住。",
    ] },
    { title: "其他人", image: "/images/koumanthio/koumanthio-t1-12.webp", paragraphs: [
        "一点一点地，一张张脸变成了名字。",
        "塞德乔来自贝宁——友好国家的学生之一。他也远离亲人，便大声地笑，好让自己不想家。",
        "有一个小个子，怎么都跟不上，老是迟到，老是受罚。还有一个大个子，逢人就说他父亲是「重要人物」。",
        "库曼蒂奥听着。而关于她自己的名字，她什么也没说。",
    ] },
    { title: "自由活动时间", image: "/images/koumanthio/koumanthio-t1-13.webp", paragraphs: [
        "但孩子的学校，终究是孩子的学校。到了自由活动时间，方正和号角都被抛到脑后：一个球不知从哪儿冒出来，院子就成了球场。",
        "塞德乔无处不在——他喊叫、踢空、再来一次，把大家逗得直笑。那个总是最后才被挑中的小个子，一天傍晚进了一个球；库曼蒂奥喊他的名字，喊得比谁都响。",
        "有一天，几个女孩把她拉到一旁。库曼蒂奥犹豫了一下，然后放开了：她教她们一个拉贝的拍手游戏，配着一首富拉语（颇尔语）的歌。很快，她们的手掌一起拍打起来，越来越快——啪，啪啪，啪——节奏传遍了整个院子。",
        "起初，男孩们假装没在听。然后一只脚开始打拍子。然后是两只手。然后塞德乔冲进圈子中间，想唱富拉语，每个词都唱错了——整个院子哄堂大笑。",
        "就在那天晚上，女孩男孩混在一起，这成了所有人的游戏。",
        "自打进了那道大门以来，库曼蒂奥第一次不再想念群山。",
    ] },
    { title: "向前一步", image: "/images/koumanthio/koumanthio-t1-14.webp", paragraphs: [
        "然而，并不全是欢笑。",
        "一天傍晚，小个子把正在收起来的旗子碰倒了。全组受罚。那个爱吹牛的、父亲是「重要人物」的，躲到了别人身后。",
        "而库曼蒂奥，向前迈了一步：这也是她的错，她说。那天晚上，亮出她的名字，也许能让她脱身。她没有那样做。",
        "她受了罚，站在小个子身旁，一言不发。",
    ] },
    { title: "挺直的脊背", image: "/images/koumanthio/koumanthio-t1-15.webp", paragraphs: [
        "在那之后，这个小集体更紧了。早晨，库曼蒂奥帮小个子把床叠方；晚上，大家一起复习功课，塞德乔练那首拉贝的歌，怎么都唱不对，于是又是一阵笑。",
        "尊重来了——不是为了一个名字，而是为了她所做的，和她与人相处时的样子。",
        "那第一年结束时，库曼蒂奥从那道大门下走过。铁字母还在那里，在她头顶：先祖的名字，她的秘密。她什么也没说。",
        "但她走路时，头抬得高了一点。",
    ] },
    ],
  },
};
