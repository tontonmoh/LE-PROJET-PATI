import type { LivreG2040, SectionG2040 } from "./g2040-tome1";

// GÉNÉRATION 2040 — Tome 11 (FINALE) — Conakry « Le Conseil des enfants »
// ODD 16 · 10 · 17 — la cérémonie n'est PAS montrée ; fin = lettre collective au Président
// FR + EN complets · AR + ZH = BROUILLONS de Claude → relecture native requise avant statut "pret"
// ⚠ Déléguée de Mali = Néné Gallé (à réconcilier avec Dieynaba, héroïne du Tome 7) — décision Moh pending
// ⚠ pilier + sousCollection à confirmer/aligner sur l'enum du type

const livre: LivreG2040 = {
  slug: "g2040-conseil-des-enfants",
  serie: "generation-2040",
  ordre: 11,
  statut: "en_production",
  titre: {
    fr: "Le Conseil des enfants",
    en: "The Children's Council",
    ar: "مجلس الأطفال",
    zh: "儿童议会",
  },
  lieu: "Conakry",
  sousCollection: "Aventure",
  age: "dès 10 ans",
  odd: [16, 10, 17],
  pilier: "Gouvernance, inclusion et partenariats",
  couverture: "/images/g2040-tome11-couverture.webp",
  meta: {
    tagline: {
      fr: "Simandou, ce n'est pas faire gagner une ville. C'est faire gagner toute la Guinée.",
      en: "Simandou isn't about making one town win. It's about making all of Guinea win.",
      ar: "سيماندو ليس أن تفوز مدينة واحدة، بل أن تفوز غينيا كلها.",
      zh: "西曼杜不是让一座城市获胜，而是让整个几内亚获胜。",
    },
    blurb: {
      fr: [
        "La grande Ligne a traversé toute la Guinée, et le concours de la Simandou Academy touche à sa fin : sur des centaines de collèges, trente-quatre propositions, puis dix villes finalistes montent à Conakry.",
        "Un garçon et une fille par ville : vingt enfants réunis trois jours dans une villa pour préparer la finale. En répétant, en mangeant, en riant de leurs accents, dix concurrentes deviennent une équipe.",
        "On leur demande un discours de remerciement, et de choisir une seule voix pour le lire. Mais choisir une voix, c'est choisir une ville — et après trois jours ensemble, aucun n'en a envie.",
        "Alors, à vingt mains, ils écrivent une lettre au Président : que chaque école gagne, qu'un Conseil des enfants donne un siège à chaque ville. Car Simandou, c'est faire gagner toute la Guinée.",
      ],
      en: [
        "The great Line has crossed all of Guinea, and the Simandou Academy's competition is drawing to its end: out of hundreds of middle schools, thirty-four proposals, then ten finalist towns travel up to Conakry.",
        "A boy and a girl from each town: twenty children gathered for three days in a villa to prepare for the final. Rehearsing, eating, laughing at one another's accents, ten rivals become a team.",
        "They are asked for a thank-you speech, and to choose a single voice to read it. But to choose a voice is to choose a town — and after three days together, none of them wants to.",
        "So, with twenty hands, they write a letter to the President: that every school should win, that a Children's Council should give every town a seat. For Simandou is about making all of Guinea win.",
      ],
      ar: [
        "عبر الخط الكبير غينيا كلها، وتقترب مسابقة أكاديمية سيماندو من نهايتها: من بين مئات الإعداديات، أربعة وثلاثون مقترحًا، ثم عشر مدن نهائية تصعد إلى كوناكري.",
        "ولد وبنت من كل مدينة: عشرون طفلًا جُمعوا ثلاثة أيام في فيلا لتحضير النهائي. بالتمرين والأكل والضحك من لهجاتهم، تصير عشر منافِسات فريقًا واحدًا.",
        "يُطلب منهم خطاب شكر، واختيار صوت واحد ليقرأه. لكن اختيار صوت هو اختيار مدينة — وبعد ثلاثة أيام معًا، لا أحد يرغب في ذلك.",
        "فيكتبون، بعشرين يدًا، رسالة إلى الرئيس: أن تفوز كل مدرسة، وأن يمنح مجلسٌ للأطفال مقعدًا لكل مدينة. لأن سيماندو هو أن تفوز غينيا كلها.",
      ],
      zh: [
        "那条大铁路穿过了整个几内亚，西曼杜学院的比赛也接近尾声：从数百所初中里选出三十四份提案，再由十座入围城市来到科纳克里。",
        "每座城市一个男孩、一个女孩：二十个孩子在别墅里聚了三天，准备决赛。一起排练、吃饭、笑彼此的口音，十个对手成了一支队伍。",
        "他们被要求写一篇感谢词，并选出一个声音来念。可选一个声音，就是选一座城市——而在一起待了三天后，谁都不愿意。",
        "于是，二十只手一起，给总统写了一封信：让每一所学校都获胜，让一个儿童议会给每座城市一个席位。因为西曼杜，就是让整个几内亚获胜。",
      ],
    },
  },
  sections: [
    {
      id: "des-colleges-aux-dix-villes",
      voix: "recit",
      fr: `Le concours avait commencé bien avant Conakry.

Dans chaque préfecture, des dizaines de collèges avaient proposé leur Objectif. Et, à chaque fois, un seul avait été retenu. Au bout du compte, trente-quatre propositions étaient arrivées à la Simandou Academy : une par préfecture, et une pour Conakry.

De ces trente-quatre, dix villes furent présélectionnées pour la grande finale, dans la capitale. La même ligne qui descendait le fer jusqu'au port allait, cette fois, faire monter des enfants jusqu'à Conakry.`,
      en: `The competition had begun long before Conakry.

In every prefecture, dozens of middle schools had put forward their Objective. And each time, only one was kept. In the end, thirty-four proposals reached the Simandou Academy: one per prefecture, and one for Conakry.

From those thirty-four, ten towns were shortlisted for the grand final, in the capital. The same line that carried the iron down to the port would now carry children up to Conakry.`,
      ar: `كانت المسابقة قد بدأت قبل كوناكري بوقت طويل.

في كل محافظة، اقترحت عشرات الإعداديات هدفها. وفي كل مرة، لم يُحتفظ إلا بواحد. وفي النهاية، وصل أربعة وثلاثون مقترحًا إلى أكاديمية سيماندو: واحد لكل محافظة، وواحد لكوناكري.

ومن هذه الأربعة والثلاثين، اختيرت عشر مدن للتصفية النهائية الكبرى، في العاصمة. والخط نفسه الذي كان ينزل بالحديد إلى الميناء سيصعد هذه المرة بالأطفال إلى كوناكري.`,
      zh: `比赛早在到达科纳克里之前就开始了。

在每个省，几十所初中都提交了自己的目标。每一次，都只留下一个。最后，三十四份提案送到了西曼杜学院：每省一份，再加科纳克里一份。

从这三十四份里，十座城市被选入在首都举行的总决赛。那条把铁矿运下港口的大铁路，这一次将把孩子们送上来，送到科纳克里。`,
    },
    {
      id: "la-villa",
      voix: "recit",
      fr: `Chaque ville finaliste envoya deux élèves : un garçon et une fille. Vingt enfants en tout, réunis trois jours dans une grande et belle villa pour préparer la finale. À l'intérieur, des murs tressés, des nattes, une case à palabres — comme on en fait là-haut, dans le Fouta.

Le premier soir, vingt enfants qui ne se connaissaient pas se partagèrent les chambres.

— Toi, tu viens d'où ? demanda l'un.

— De la forêt, là où il y a le fer. Et toi ?

— Des montagnes du Fouta. Elle, c'est du bord de mer.

Ils rirent de leurs accents, se trompèrent sur les prénoms, recommencèrent. En trois jours, à force de répéter et de manger ensemble, dix villes cessèrent d'être dix concurrentes. Elles devinrent une équipe.`,
      en: `Each finalist town sent two pupils: a boy and a girl. Twenty children in all, brought together for three days in a large and beautiful villa to prepare for the final. Inside: woven walls, mats, a palaver house — like the ones they build up there, in the Fouta.

The first evening, twenty children who didn't know one another shared out the rooms.

"You — where are you from?" asked one.

"From the forest, where the iron is. And you?"

"From the mountains of the Fouta. She's from the seaside."

They laughed at one another's accents, got the names wrong, started over. In three days, from rehearsing and eating together, ten rivals stopped being ten rivals. They became a team.`,
      ar: `أرسلت كل مدينة نهائية تلميذَين: ولدًا وبنتًا. عشرون طفلًا في المجموع، جُمعوا ثلاثة أيام في فيلا كبيرة وجميلة لتحضير النهائي. في الداخل: جدران مضفورة، وحُصُر، وبيت للمشورة — مثل تلك التي تُبنى هناك في الأعلى، في فوتا.

في المساء الأول، اقتسم عشرون طفلًا لا يعرف بعضهم بعضًا الغرف.

— أنت، من أين أنت؟ سأل أحدهم.

— من الغابة، حيث الحديد. وأنت؟

— من جبال فوتا. وهي، من ساحل البحر.

ضحكوا من لهجاتهم، وأخطأوا في الأسماء، وأعادوا. في ثلاثة أيام، بالتمرين والأكل معًا، لم تعد عشر مدنٍ عشر منافِسات. صرن فريقًا واحدًا.`,
      zh: `每座入围城市派出两名学生：一个男孩、一个女孩。一共二十个孩子，在一座宽敞漂亮的别墅里聚了三天，准备决赛。屋里是编织的墙、草席，还有一间议事屋——就像富塔高原上人们盖的那样。

第一天晚上，二十个互不相识的孩子分了房间。

“你，从哪里来？”一个孩子问。

“从有铁矿的森林来。你呢？”

“从富塔的群山来。她，是从海边来的。”

他们笑话彼此的口音，叫错名字，又重来。三天里，一起排练、一起吃饭，十座互相竞争的城市不再是十个对手。她们成了一支队伍。`,
    },
    {
      id: "le-discours-de-remerciement",
      voix: "recit",
      fr: `L'avant-veille de la cérémonie, on leur confia une tâche : écrire ensemble un discours de remerciement, puis choisir l'un d'eux pour le lire, au nom de tous.

Le discours, ils l'écrivirent sans peine. Mais au moment de choisir qui le lirait, plus personne ne parla.

— Sur quoi on choisit ? demanda Sia. La ville ? Le projet ? L'accent ?

Choisir une seule voix parmi les vingt, c'était déjà choisir une seule ville parmi toutes. Et après ces trois jours, aucun n'en avait envie.

C'est là que l'idée leur vint.`,
      en: `Two days before the ceremony, they were given a task: to write a thank-you speech together, then to choose one of them to read it, on behalf of all.

The speech, they wrote easily. But when the time came to choose who would read it, no one spoke.

"On what do we choose?" asked Sia. "The town? The project? The accent?"

To choose a single voice among the twenty was already to choose a single town among them all. And after these three days, none of them wanted to.

That was when the idea came to them.`,
      ar: `قبل الحفل بيومين، كُلِّفوا مهمة: أن يكتبوا معًا خطاب شكر، ثم يختاروا أحدهم ليقرأه باسم الجميع.

كتبوا الخطاب بلا عناء. لكن حين جاء وقت اختيار من يقرؤه، لم يتكلم أحد.

— على أي أساس نختار؟ سألت سيا. المدينة؟ المشروع؟ اللهجة؟

اختيار صوت واحد من بين العشرين كان أصلًا اختيار مدينة واحدة من بينها كلها. وبعد هذه الأيام الثلاثة، لم يرغب أحد في ذلك.

هنا جاءتهم الفكرة.`,
      zh: `典礼前两天，他们接到一个任务：一起写一篇感谢词，然后选出他们当中一个人，代表大家来念。

感谢词，他们写得很顺。可到了要选谁来念的时候，谁都不说话了。

“凭什么选呢？”西娅问。“城市？项目？还是口音？”

在二十个人里选一个声音，其实就是在所有城市里选一座城市。而经过这三天，谁都不愿意这么做。

就在这时，主意来了。`,
    },
    {
      id: "la-lettre-au-president",
      voix: "recit",
      fr: `Ce fut Néné Gallé, de Mali, qui la dit tout haut.

— Et si personne ne lisait seul ? Et si, au lieu d'un discours, on écrivait tous ensemble une lettre au Président ?

Ils se penchèrent sur une grande feuille, et écrivirent à vingt mains.

Ils ne demandaient pas un prix pour une seule école. Ils demandaient que chaque école soit récompensée et accompagnée à la hauteur de ce qu'elle avait inventé. Et que les vingt-quatre villes qui n'étaient pas venues aient, elles aussi, leur tour de parole. Ils proposaient un Conseil des enfants de Génération 2040, où chaque ville aurait un siège : eux dix pour commencer, puis les vingt-quatre autres, une par une, jusqu'à ce que tout le pays ait sa voix. Trente-quatre en tout. Aucune laissée dehors.

Tout en bas, ils écrivirent ceci : « On nous a appris que Simandou, ce n'est pas faire gagner une ville. C'est faire gagner toute la Guinée. Alors, Monsieur le Président, faites-nous gagner tous. »

Puis ils cachetèrent l'enveloppe.

Ce que le Président répondrait, ils ne le savaient pas encore. Mais pour la première fois, ils n'attendaient pas un gagnant. Ils attendaient une réponse — et ils étaient vingt à l'attendre ensemble.`,
      en: `It was Néné Gallé, from Mali, who said it out loud.

"What if no one read alone? What if, instead of a speech, we all wrote a letter to the President, together?"

They bent over a large sheet of paper, and wrote it with twenty hands.

They were not asking for a prize for a single school. They asked that every school be rewarded and supported to the measure of what it had invented. And that the twenty-four towns that had not come should have their turn to speak too. They proposed a Generation 2040 Children's Council, where every town would have a seat: the ten of them to begin, then the twenty-four others, one by one, until the whole country had a voice. Thirty-four in all. None left outside.

Right at the bottom, they wrote this: "We have been taught that Simandou is not about making one town win. It is about making all of Guinea win. So, Mr. President, make us all win."

Then they sealed the envelope.

What the President would answer, they did not yet know. But for the first time, they were not waiting for a winner. They were waiting for a reply — and there were twenty of them waiting together.`,
      ar: `كانت نيني غالي، من مالي، من قالتها بصوتٍ عالٍ.

— وماذا لو لم يقرأ أحدٌ وحده؟ وماذا لو كتبنا، بدل الخطاب، رسالة إلى الرئيس، كلنا معًا؟

انكبّوا على ورقة كبيرة، وكتبوها بعشرين يدًا.

لم يكونوا يطلبون جائزة لمدرسة واحدة. طلبوا أن تُكافأ كل مدرسة وتُرافَق بقدر ما ابتكرت. وأن تنال المدن الأربع والعشرون التي لم تأتِ دورها في الكلام هي أيضًا. واقترحوا مجلسًا لأطفال جيل 2040، يكون لكل مدينة فيه مقعد: هم العشرة للبداية، ثم الأربع والعشرون الأخريات، واحدةً واحدة، حتى يصير لكل البلد صوت. أربعة وثلاثون في المجموع. لا أحد يُترَك خارجًا.

وفي الأسفل تمامًا، كتبوا هذا: «عُلِّمنا أن سيماندو ليس أن تفوز مدينة واحدة. بل أن تفوز غينيا كلها. فيا سيادة الرئيس، اجعلنا نفوز جميعًا.»

ثم ختموا الظرف.

ماذا سيرد الرئيس، لم يكونوا يعرفون بعد. لكن لأول مرة، لم يكونوا ينتظرون فائزًا. كانوا ينتظرون ردًّا — وكانوا عشرين ينتظرونه معًا.`,
      zh: `是来自马里的内内·加莱大声说了出来。

“要是没有人单独念呢？要是我们不写感谢词，而是大家一起，给总统写一封信呢？”

他们伏在一大张纸上，二十只手一起写。

他们要的不是给某一所学校的奖。他们请求：每一所学校都按它的创意得到奖励和陪伴。还请求那二十四座没能来的城市，也轮到它们说话。他们提议成立一个“2040一代儿童议会”，让每座城市都有一个席位：先是他们十座，然后是另外二十四座，一座接一座，直到全国都有自己的声音。一共三十四个。没有谁被留在外面。

在最下面，他们写道：“有人教过我们：西曼杜不是让一座城市获胜，而是让整个几内亚获胜。所以，总统先生，请让我们所有人都获胜。”

然后，他们封上了信封。

总统会怎样回信，他们还不知道。但这一次，他们等待的不是一个赢家。他们在等一个答复——而且是二十个人一起等。`,
    },
  ] as SectionG2040[],
};

export default livre;
