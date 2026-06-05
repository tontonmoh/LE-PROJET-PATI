// « Conakry Belle et Propre — Les enfants décident d'agir »
// Pati Passage (13–15 ans). Adaptation lisible du découpage 25 planches,
// 14 sections alignées sur 4 langues. Registre sobre, non-moralisateur.
export type ConakryLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[] };
type Book = { lang: ConakryLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const CONAKRY_ML: Record<ConakryLang, Book> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Conakry Belle et Propre",
    sections: [
      { id: "dabondy", title: "Dabondy sous l'eau", paragraphs: [
        "La première grande pluie de mai était tombée toute la nuit. Au réveil, Lamine Camara poussa la porte sur une eau brune qui montait jusqu'aux chevilles.",
        "Dans la rue, un attroupement. La maison de la famille Soumah s'était effondrée pendant la nuit.",
        "— On le disait, qu'à cet endroit l'eau passait toujours, murmura un voisin." ] },
      { id: "pont", title: "Le pont de l'aéroport", paragraphs: [
        "Plus bas, vers le pont de l'aéroport, le courant emportait tout : une moto, des bidons, une chaise, un pan de tôle.",
        "Des gens couraient le long de la rive, les bras tendus vers leurs affaires qui filaient sur l'eau. Personne ne pouvait rien rattraper." ] },
      { id: "kamano-remonte", title: "La professeure remonte la ville", paragraphs: [
        "À Matam, la professeure Kamano regarda l'eau envahir sa cour. Elle aurait pu rester chez elle. Elle décida d'aller à l'école.",
        "Elle remonta tout l'axe noyé — Bonfi, Dabondy, le pont — de l'eau jusqu'aux genoux, son cartable serré contre elle." ] },
      { id: "on-attend", title: "En classe, on attend", paragraphs: [
        "Dans la salle, les élèves attendaient, trempés eux aussi.",
        "— On a club Pati cet après-midi, rappela Sékou. Vous croyez que ça tient, avec la pluie ?",
        "— L'atelier ne saute jamais, dit Mariama. Même malade, elle vient.",
        "— Normal, souffla Kalil. C'est elle qui l'a créé.",
        "Sous la table d'Aïssata, un sac plastique vide traînait. Du pied, elle le repoussa." ] },
      { id: "assainissement", title: "Assainissement", paragraphs: [
        "La professeure Kamano entra enfin, ruisselante. Sans un mot, elle écrivit au tableau, en grand : ASSAINISSEMENT.",
        "Toute la classe le lut d'un même cri.",
        "— Très bien. Maintenant, qui peut me le définir ?",
        "Le cri retomba. Deux mains seulement se levèrent : celle d'Aïssata, celle de Kalil.",
        "Alors la professeure barra d'un trait net un seul préfixe — comme on simplifie une fraction — et transforma INSALUBRITÉ en SALUBRITÉ.",
        "— La salubrité, dit Kalil, c'est quand un endroit est propre et sain. L'insalubrité, c'est le contraire.",
        "— Et l'assainissement, ajouta Aïssata, c'est tout ce qu'on fait pour rendre un endroit propre à nouveau." ] },
      { id: "ce-quon-a-vu", title: "Ce qu'on a vu", paragraphs: [
        "— Alors racontez, dit la professeure. Qu'avez-vous vu ce matin ?",
        "Elle traça une colonne au tableau : CE QU'ON A VU. Les réponses fusèrent : un caniveau bouché, des motos en travers, des ordures partout.",
        "— Chez moi, à Dabondy, dit Lamine, la maison des Soumah s'est effondrée. Et tout le monde répétait : on le savait.",
        "Un silence gêné s'installa. La professeure ouvrit une deuxième colonne : POURQUOI ?" ] },
      { id: "pourquoi-qui", title: "Pourquoi ? Qui aurait dû ?", paragraphs: [
        "On chercha les causes, une à une, reliées par des flèches au tableau. Le caniveau bouché parce que rempli de sachets. Les sachets, parce que jetés. L'eau qui monte, parce qu'elle ne trouve plus de passage.",
        "— Et pourquoi on l'a laissée construire là, cette maison, juste sur le passage de l'eau ? lâcha Lamine.",
        "La question resta suspendue. La professeure écrivit alors : QUI AURAIT DÛ ?",
        "— La mairie, qu'est-ce qu'elle fait ? demanda Aïssata.",
        "— Et nous, qu'est-ce qu'on fait ? répondit Sékou.",
        "— Quand on dit que c'est la faute de tout le monde, dit doucement la professeure, ça veut dire la faute de personne.",
        "Chacun nota sa part : celui qui construit où il ne faut pas, celui qui jette, celui qui devait vérifier… — Et celui qui voit, et qui ne dit rien, ajouta Aïssata." ] },
      { id: "devoir-terrain", title: "Le devoir de terrain", paragraphs: [
        "— Pour demain, dit la professeure, je ne veux pas de grandes idées d'experts. Je veux des solutions que tout le monde peut faire. Regardez votre quartier. Vraiment." ] },
      { id: "indices", title: "Les indices du quartier", paragraphs: [
        "Cet après-midi-là, Lamine retourna devant la maison des Soumah. Dans la terre, l'eau avait laissé une longue trace, comme une cicatrice. Il la photographia.",
        "Au marché, un vieux chauffeur racontait la crue. Sans un mot de trop, il leva le bras à hauteur de poitrine : l'eau était montée jusque-là." ] },
      { id: "premier-geste", title: "Le premier geste", paragraphs: [
        "Sur le chemin du retour, Aïssata retrouva un sac plastique poussé par le vent — peut-être le même qu'elle écartait du pied depuis des jours. Cette fois, elle le ramassa.",
        "Sur un mur, une vieille fresque délavée veillait sur la rue : Pati, presque effacée par le temps, semblait suivre son geste." ] },
      { id: "diagnostic", title: "Le diagnostic complet", paragraphs: [
        "Le lendemain, la chaîne se reconstitua au tableau, plus claire. Lamine montra sa photo : la cicatrice d'eau disait exactement par où l'eau était passée.",
        "Sékou se leva et refit, à hauteur de poitrine, le geste du vieux chauffeur. La classe comprit : l'eau n'arrive pas par hasard ; elle suit un chemin qu'on a oublié de lui laisser." ] },
      { id: "pas-argent", title: "Ce n'est pas une question d'argent", paragraphs: [
        "La professeure traça deux colonnes : AGIR et NE RIEN FAIRE.",
        "Côté AGIR, on aligna les prix : une pelle, une brouette, des gants, un puisard, un fût repeint en poubelle de cour. Partagé sur tout le quartier, cela faisait presque rien par famille.",
        "Côté NE RIEN FAIRE, on essaya de compter : une maison perdue, des journées de travail envolées, et tout ce qui n'a pas de prix.",
        "— Vous voyez, dit la professeure, ce n'est pas une question d'argent." ] },
      { id: "et-nous", title: "Et nous, qu'est-ce qu'on fait ?", paragraphs: [
        "— Et nous, alors, qu'est-ce qu'on fait ? répéta Sékou.",
        "— On pourrait montrer tout ça aux gens du quartier, proposa Aïssata. Un film.",
        "— Un film, ça coûte cher, et on n'a pas le temps, objecta quelqu'un.",
        "— Pas forcément, dit Kalil. Avec l'intelligence artificielle, on peut fabriquer les images nous-mêmes.",
        "— D'accord, dit Aïssata, mais attention : l'IA donne les images. L'histoire, le quartier, les vraies solutions, c'est nous.",
        "La professeure sourit. — Vous savez pourquoi j'ai créé le club Pati de cette école ? Pour des jours comme celui-ci. Ce sera mon dernier projet avec vous : je pars bientôt à la retraite." ] },
      { id: "la-salle-demarre", title: "La salle qui démarre", paragraphs: [
        "La classe se mit en mouvement d'un coup : les rôles se distribuèrent, les idées se croisèrent, le club Pati s'alluma.",
        "Aïssata glissa dans sa poche le sac plastique ramassé la veille. Le film commençait — et sa toute première image était, justement, celle que tu as vue en ouvrant ce livre." ] },
    ],
  },
  en: {
    lang: "en", dir: "ltr", label: "English", bookTitle: "A Clean and Beautiful Conakry",
    sections: [
      { id: "dabondy", title: "Dabondy Under Water", paragraphs: [
        "The first big May rain had fallen all night long. When he woke, Lamine Camara opened his door onto brown water rising up to his ankles.",
        "Out in the street, a crowd had gathered. The Soumah family's house had collapsed during the night.",
        "— We always said the water ran through here, a neighbour murmured." ] },
      { id: "pont", title: "The Airport Bridge", paragraphs: [
        "Lower down, near the airport bridge, the current was carrying everything away: a motorbike, jerrycans, a chair, a sheet of metal.",
        "People ran along the bank, arms reaching out toward their belongings as they rushed past on the water. No one could catch a thing." ] },
      { id: "kamano-remonte", title: "The Teacher Climbs the City", paragraphs: [
        "In Matam, Professor Kamano watched the water flood her yard. She could have stayed home. She decided to go to school.",
        "She climbed the whole drowned road — Bonfi, Dabondy, the bridge — water up to her knees, her bag held tight against her." ] },
      { id: "on-attend", title: "Waiting in Class", paragraphs: [
        "In the classroom, the students were waiting, soaked through as well.",
        "— We have Pati club this afternoon, Sékou reminded them. Think it's still on, with this rain?",
        "— The workshop never gets cancelled, said Mariama. Even when she's sick, she comes.",
        "— Of course, whispered Kalil. She's the one who created it.",
        "Under Aïssata's desk, an empty plastic bag lay around. With her foot, she pushed it away." ] },
      { id: "assainissement", title: "Sanitation", paragraphs: [
        "Professor Kamano finally walked in, dripping wet. Without a word, she wrote on the board, in big letters: SANITATION.",
        "The whole class read it out in one voice.",
        "— Good. Now, who can define it for me?",
        "The shouting died down. Only two hands went up: Aïssata's and Kalil's.",
        "So the teacher took one clean stroke and crossed out a single prefix — the way you simplify a fraction — turning UNCLEANLINESS back into CLEANLINESS.",
        "— Cleanliness, said Kalil, is when a place is clean and healthy. Uncleanliness is the opposite.",
        "— And sanitation, Aïssata added, is everything we do to make a place clean again." ] },
      { id: "ce-quon-a-vu", title: "What We Saw", paragraphs: [
        "— So tell me, said the teacher. What did you see this morning?",
        "She drew a column on the board: WHAT WE SAW. The answers came flying: a blocked gutter, motorbikes lying across the road, rubbish everywhere.",
        "— In my neighbourhood, in Dabondy, said Lamine, the Soumah house collapsed. And everyone kept repeating: we knew it.",
        "An uneasy silence settled in. The teacher opened a second column: WHY?" ] },
      { id: "pourquoi-qui", title: "Why? Who Should Have?", paragraphs: [
        "They looked for the causes, one by one, linked by arrows on the board. The gutter was blocked because it was full of plastic bags. The bags, because they were thrown away. The water rose, because it no longer found a way through.",
        "— And why was that house allowed to be built right there, on the path of the water? Lamine blurted out.",
        "The question hung in the air. Then the teacher wrote: WHO SHOULD HAVE?",
        "— The town hall, what is it doing? asked Aïssata.",
        "— And us, what are we doing? answered Sékou.",
        "— When we say it's everybody's fault, the teacher said gently, that means it's nobody's fault.",
        "Each one noted their share: the one who builds where they shouldn't, the one who litters, the one who was meant to check… — And the one who sees, and says nothing, added Aïssata." ] },
      { id: "devoir-terrain", title: "Fieldwork Homework", paragraphs: [
        "— For tomorrow, said the teacher, I don't want grand expert ideas. I want solutions that anyone can carry out. Look at your neighbourhood. Really look." ] },
      { id: "indices", title: "Clues in the Neighbourhood", paragraphs: [
        "That afternoon, Lamine went back to the Soumah house. In the soil, the water had left a long mark, like a scar. He took a photo of it.",
        "At the market, an old driver was telling the story of the flood. Without one extra word, he raised his arm to chest height: the water had risen all the way up there." ] },
      { id: "premier-geste", title: "The First Gesture", paragraphs: [
        "On the way home, Aïssata came across a plastic bag pushed along by the wind — perhaps the very one she had been nudging aside with her foot for days. This time, she picked it up.",
        "On a wall, an old faded mural watched over the street: Pati, almost erased by time, seemed to follow her gesture." ] },
      { id: "diagnostic", title: "The Full Diagnosis", paragraphs: [
        "The next day, the chain came back together on the board, clearer now. Lamine showed his photo: the water scar told exactly where the water had passed.",
        "Sékou stood up and repeated, at chest height, the old driver's gesture. The class understood: water does not come by chance; it follows a path we forgot to leave it." ] },
      { id: "pas-argent", title: "It's Not About Money", paragraphs: [
        "The teacher drew two columns: ACT and DO NOTHING.",
        "On the ACT side, they listed the prices: a shovel, a wheelbarrow, gloves, a soakaway, a drum repainted into a courtyard bin. Shared across the whole neighbourhood, it came to almost nothing per family.",
        "On the DO NOTHING side, they tried to count: a house lost, days of work gone, and everything that has no price.",
        "— You see, said the teacher, it's not about money." ] },
      { id: "et-nous", title: "And Us — What Do We Do?", paragraphs: [
        "— So what about us — what do we do? Sékou repeated.",
        "— We could show all this to the people of the neighbourhood, Aïssata suggested. A film.",
        "— A film is expensive, and we don't have time, someone objected.",
        "— Not necessarily, said Kalil. With artificial intelligence, we can make the images ourselves.",
        "— All right, said Aïssata, but careful: the AI gives the images. The story, the neighbourhood, the real solutions — that's us.",
        "The teacher smiled. — Do you know why I created this school's Pati club? For days like this one. This will be my last project with you: I am retiring soon." ] },
      { id: "la-salle-demarre", title: "The Room Gets Going", paragraphs: [
        "The class sprang into motion all at once: roles were handed out, ideas crossed, the Pati club lit up.",
        "Aïssata slipped into her pocket the plastic bag she had picked up the day before. The film was beginning — and its very first image was, in fact, the one you saw when you opened this book." ] },
    ],
  },
  ar: {
    lang: "ar", dir: "rtl", label: "العربية", bookTitle: "كوناكري الجميلة النظيفة",
    sections: [
      { id: "dabondy", title: "دابوندو تحت الماء", paragraphs: [
        "هطل أول مطر كبير في مايو طوال الليل. وعند الصباح، فتح لامين كامارا الباب على ماء بُنّيّ يصل إلى الكاحلين.",
        "في الشارع تجمهر الناس: لقد انهار منزل عائلة سوماه أثناء الليل.",
        "— كنا نقول دائمًا إن الماء يمرّ من هنا، تمتم أحد الجيران." ] },
      { id: "pont", title: "جسر المطار", paragraphs: [
        "في الأسفل، قرب جسر المطار، كان التيار يجرف كل شيء: دراجة نارية، وصفائح، وكرسيًا، وقطعة من الصفيح.",
        "كان الناس يركضون على الضفة، أيديهم ممدودة نحو أمتعتهم التي تنجرف فوق الماء. لم يستطع أحد أن يمسك شيئًا." ] },
      { id: "kamano-remonte", title: "المعلّمة تصعد المدينة", paragraphs: [
        "في ماتام، رأت المعلّمة كامانو الماء يغمر فناءها. كان بإمكانها البقاء في البيت، لكنها قررت الذهاب إلى المدرسة.",
        "صعدت كل الطريق الغارق — بونفي، دابوندو، الجسر — والماء حتى ركبتيها، وحقيبتها مضمومة إلى صدرها." ] },
      { id: "on-attend", title: "في الصف، ننتظر", paragraphs: [
        "في القاعة، كان التلاميذ ينتظرون، وقد ابتلّوا هم أيضًا.",
        "— لدينا نادي باتي بعد الظهر، ذكّرهم سيكو. أتظنون أنه سيُقام رغم المطر؟",
        "— الورشة لا تُلغى أبدًا، قالت مريامة. حتى وهي مريضة، تأتي.",
        "— طبيعي، همس كليل. فهي التي أنشأته.",
        "تحت طاولة عيساتا، كان كيس بلاستيكي فارغ ملقى. دفعته بقدمها بعيدًا." ] },
      { id: "assainissement", title: "الإصحاح", paragraphs: [
        "دخلت المعلّمة كامانو أخيرًا وهي تقطر ماءً. ودون كلمة، كتبت على السبورة بأحرف كبيرة: الإصحاح.",
        "قرأها الصف كله بصوت واحد.",
        "— حسنًا. والآن، من يستطيع أن يعرّفها لي؟",
        "خفت الصياح. ولم ترتفع سوى يدين: يد عيساتا ويد كليل.",
        "عندئذٍ شطبت المعلّمة بخطٍّ واحدٍ نظيف أداة النفي — كما نبسّط كسرًا — فحوّلت «اللانظافة» إلى «نظافة».",
        "— النظافة، قال كليل، أن يكون المكان نظيفًا وصحّيًا. واللانظافة عكس ذلك.",
        "— والإصحاح، أضافت عيساتا، هو كل ما نفعله لنعيد المكان نظيفًا." ] },
      { id: "ce-quon-a-vu", title: "ما الذي رأيناه", paragraphs: [
        "— احكوا لي إذًا، قالت المعلّمة. ماذا رأيتم هذا الصباح؟",
        "رسمت عمودًا على السبورة: ما الذي رأيناه. انهالت الأجوبة: مجرى ماء مسدود، دراجات نارية معترضة، نفايات في كل مكان.",
        "— في حيّي، في دابوندو، قال لامين، انهار منزل آل سوماه. والجميع يكرّرون: كنا نعرف ذلك.",
        "حلّ صمت محرج. فتحت المعلّمة عمودًا ثانيًا: لماذا؟" ] },
      { id: "pourquoi-qui", title: "لماذا؟ ومن كان يجب؟", paragraphs: [
        "بحثوا عن الأسباب، واحدًا واحدًا، تربطها أسهم على السبورة. المجرى مسدود لأنه ملآن بالأكياس. والأكياس لأنها رُميت. والماء يرتفع لأنه لم يعد يجد منفذًا.",
        "— ولماذا سُمح ببناء ذلك المنزل هناك تمامًا، في طريق الماء؟ قالها لامين.",
        "بقي السؤال معلّقًا. فكتبت المعلّمة: من كان يجب عليه؟",
        "— والبلدية، ماذا تفعل؟ سألت عيساتا.",
        "— ونحن، ماذا نفعل؟ أجاب سيكو.",
        "— حين نقول إنه خطأ الجميع، قالت المعلّمة بهدوء، فهذا يعني أنه خطأ لا أحد.",
        "دوّن كلٌّ نصيبه: من يبني حيث لا يجب، ومن يرمي، ومن كان عليه أن يتحقّق… — ومن يرى ولا يقول شيئًا، أضافت عيساتا." ] },
      { id: "devoir-terrain", title: "واجب ميداني", paragraphs: [
        "— لغدٍ، قالت المعلّمة، لا أريد أفكارًا كبيرة للخبراء. أريد حلولًا يستطيع الجميع تنفيذها. انظروا إلى حيّكم. انظروا حقًّا." ] },
      { id: "indices", title: "أدلّة في الحيّ", paragraphs: [
        "بعد ظهر ذلك اليوم، عاد لامين أمام منزل آل سوماه. في التراب، ترك الماء أثرًا طويلًا، كنُدبة. فالتقط لها صورة.",
        "في السوق، كان سائق عجوز يروي الفيضان. ودون كلمة زائدة، رفع ذراعه إلى مستوى صدره: إلى هنا ارتفع الماء." ] },
      { id: "premier-geste", title: "أول لفتة", paragraphs: [
        "في طريق العودة، وجدت عيساتا كيسًا بلاستيكيًا تدفعه الريح — ربما الكيس نفسه الذي كانت تزيحه بقدمها منذ أيام. هذه المرة التقطته.",
        "على أحد الجدران، كانت جدارية قديمة باهتة تحرس الشارع: باتي، التي كاد الزمن يمحوها، بدت وكأنها تتابع لفتتها." ] },
      { id: "diagnostic", title: "التشخيص الكامل", paragraphs: [
        "في اليوم التالي، أُعيد بناء السلسلة على السبورة، أوضح من قبل. أرى لامين صورته: نُدبة الماء تقول بالضبط من أين مرّ الماء.",
        "وقف سيكو وأعاد، إلى مستوى الصدر، حركة السائق العجوز. فهم الصف: الماء لا يأتي صدفة؛ إنه يتبع طريقًا نسينا أن نتركه له." ] },
      { id: "pas-argent", title: "إنها ليست مسألة مال", paragraphs: [
        "رسمت المعلّمة عمودين: أن نعمل، وألّا نفعل شيئًا.",
        "في خانة «أن نعمل»، صفّوا الأسعار: مجرفة، وعربة يد، وقفازات، وحفرة تصريف، وبرميل أُعيد طلاؤه ليصير سلة في الفناء. وموزّعًا على الحيّ كله، يصبح شيئًا يكاد لا يُذكر لكل أسرة.",
        "في خانة «ألّا نفعل شيئًا»، حاولوا أن يحسبوا: منزل ضاع، وأيام عمل تبخّرت، وكل ما لا ثمن له.",
        "— أرأيتم، قالت المعلّمة، إنها ليست مسألة مال." ] },
      { id: "et-nous", title: "ونحن، ماذا نفعل؟", paragraphs: [
        "— ونحن إذًا، ماذا نفعل؟ كرّر سيكو.",
        "— يمكننا أن نُري كل هذا لأهل الحيّ، اقترحت عيساتا. فيلم.",
        "— الفيلم مكلف، ولا وقت لدينا، اعترض أحدهم.",
        "— ليس بالضرورة، قال كليل. بالذكاء الاصطناعي نستطيع أن نصنع الصور بأنفسنا.",
        "— حسنًا، قالت عيساتا، لكن انتبهوا: الذكاء الاصطناعي يعطي الصور. أما القصة والحيّ والحلول الحقيقية، فهي نحن.",
        "ابتسمت المعلّمة. — أتعرفون لماذا أنشأت نادي باتي في هذه المدرسة؟ من أجل أيام كهذا اليوم. سيكون هذا آخر مشروع لي معكم: سأتقاعد قريبًا." ] },
      { id: "la-salle-demarre", title: "القاعة تنطلق", paragraphs: [
        "تحرّك الصف دفعة واحدة: وُزّعت الأدوار، وتلاقت الأفكار، واشتعل نادي باتي.",
        "دسّت عيساتا في جيبها الكيس البلاستيكي الذي التقطته بالأمس. كان الفيلم يبدأ — وكانت صورته الأولى تمامًا تلك التي رأيتَها حين فتحتَ هذا الكتاب." ] },
    ],
  },
  zh: {
    lang: "zh", dir: "ltr", label: "中文", bookTitle: "美丽洁净的科纳克里",
    sections: [
      { id: "dabondy", title: "水淹达邦迪", paragraphs: [
        "五月的第一场大雨下了整整一夜。早上醒来，拉明·卡马拉推开门，门外是漫到脚踝的褐色泥水。",
        "街上围了一群人：苏马一家的房子在夜里塌了。",
        "——我们一直说，水会从这里过的，一位邻居喃喃道。" ] },
      { id: "pont", title: "机场大桥", paragraphs: [
        "再往下，靠近机场大桥，水流卷走了一切：一辆摩托、几个塑料桶、一把椅子、一块铁皮。",
        "人们沿着岸边奔跑，伸手去够随水冲走的东西。可谁也抓不住什么。" ] },
      { id: "kamano-remonte", title: "老师逆水进城", paragraphs: [
        "在马塔姆，卡马诺老师看着水淹进自家院子。她本可以待在家里，却决定去学校。",
        "她沿着整条被淹的路一路往上——邦菲、达邦迪、大桥——水没到膝盖，书包紧紧抱在怀里。" ] },
      { id: "on-attend", title: "教室里，等待", paragraphs: [
        "教室里，学生们也都湿透了，正在等待。",
        "——今天下午有帕提社团，塞库提醒大家。下这么大雨，还办吗？",
        "——工作坊从不取消，玛丽亚玛说。她就算生病也会来。",
        "——当然，卡里尔低声说。社团就是她创办的。",
        "艾莎塔的桌子底下，扔着一个空塑料袋。她用脚把它踢开。" ] },
      { id: "assainissement", title: "环境卫生", paragraphs: [
        "卡马诺老师终于走了进来，浑身滴水。她一言不发，在黑板上写下大大的两个字：卫生。",
        "全班齐声念了出来。",
        "——很好。那么，谁能给我下个定义？",
        "喊声平息下来。只有两只手举起：艾莎塔的，和卡里尔的。",
        "于是老师干净利落地划掉一个否定字——就像约分一样——把「不卫生」变回了「卫生」。",
        "——卫生，卡里尔说，就是一个地方干净又健康。不卫生就是相反。",
        "——而环境卫生，艾莎塔补充道，就是我们为了让一个地方重新变干净所做的一切。" ] },
      { id: "ce-quon-a-vu", title: "我们看到了什么", paragraphs: [
        "——那就说说吧，老师说。今天早上你们看到了什么？",
        "她在黑板上画了一栏：我们看到了什么。答案纷纷涌出：堵塞的排水沟、横在路上的摩托、到处的垃圾。",
        "——在我住的达邦迪，拉明说，苏马家的房子塌了。大家都在重复一句话：我们早就知道。",
        "一阵尴尬的沉默。老师又开了第二栏：为什么？" ] },
      { id: "pourquoi-qui", title: "为什么？谁本该负责？", paragraphs: [
        "他们一个接一个地寻找原因，用箭头连在黑板上。排水沟堵了，因为塞满了塑料袋。塑料袋，因为被人乱扔。水位上涨，因为它再也找不到去路。",
        "——那为什么当初允许在那里盖房子，正好挡在水的去路上？拉明脱口而出。",
        "问题悬在空中。老师于是写下：谁本该负责？",
        "——市政府，他们在做什么？艾莎塔问。",
        "——那我们呢，我们在做什么？塞库回答。",
        "——当我们说这是所有人的错，老师轻声说，那就等于说这是没有人的错。",
        "每个人都记下自己的一份：在不该建的地方建房的人、乱扔垃圾的人、本该检查的人……——还有那看见了却什么都不说的人，艾莎塔补充道。" ] },
      { id: "devoir-terrain", title: "实地作业", paragraphs: [
        "——明天，老师说，我不要专家式的大主意。我要人人都能动手去做的办法。看看你们的街区，认真地看。" ] },
      { id: "indices", title: "街区里的线索", paragraphs: [
        "那天下午，拉明回到苏马家门前。泥土里，水留下一道长长的痕迹，像一道疤。他拍了下来。",
        "在市场上，一位年长的司机讲着这场洪水。他没多说一个字，只把胳膊抬到胸口的高度：水就涨到了这里。" ] },
      { id: "premier-geste", title: "第一个动作", paragraphs: [
        "回家的路上，艾莎塔遇到一个被风吹动的塑料袋——也许正是她这些天用脚踢开的那一个。这一次，她把它捡了起来。",
        "一面墙上，一幅褪色的旧壁画守望着街道：帕提，几乎被时间抹去，仿佛在注视着她的这个动作。" ] },
      { id: "diagnostic", title: "完整的诊断", paragraphs: [
        "第二天，那条因果链在黑板上重新拼了起来，更清楚了。拉明展示他的照片：那道水痕清楚地说明水是从哪里经过的。",
        "塞库站起来，在胸口的高度重做了老司机的那个动作。全班明白了：水不是偶然来的；它走的是一条我们忘了给它留出的路。" ] },
      { id: "pas-argent", title: "这不是钱的问题", paragraphs: [
        "老师画了两栏：行动，和什么都不做。",
        "在「行动」一栏，他们列出价格：一把铲子、一辆手推车、几副手套、一个渗水井、一个改造成院子垃圾桶的旧桶。分摊到整个街区，每家几乎不算什么。",
        "在「什么都不做」一栏，他们试着去算：失去一座房子、白白消逝的工作日，以及一切无法标价的东西。",
        "——你们看，老师说，这不是钱的问题。" ] },
      { id: "et-nous", title: "那我们，做什么？", paragraphs: [
        "——那我们呢，到底做什么？塞库又问了一遍。",
        "——我们可以把这一切讲给街区的人看，艾莎塔提议。拍一部影片。",
        "——拍片很贵，我们也没时间，有人反对。",
        "——不一定，卡里尔说。用人工智能，我们可以自己做出画面。",
        "——好，艾莎塔说，但要注意：人工智能给的是画面。故事、街区、真正的办法，是我们。",
        "老师笑了。——你们知道我为什么要在这所学校创办帕提社团吗？就是为了这样的日子。这将是我和你们的最后一个项目：我快要退休了。" ] },
      { id: "la-salle-demarre", title: "教室动了起来", paragraphs: [
        "全班一下子动了起来：分配角色，交换想法，帕提社团点亮了。",
        "艾莎塔把前一天捡起的塑料袋塞进口袋。影片开始了——而它的第一个画面，正是你翻开这本书时看到的那一幅。" ] },
    ],
  },
};
