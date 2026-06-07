import type { LivreG2040, SectionG2040 } from "./g2040-tome1";

// GÉNÉRATION 2040 — Tome 10 — Forécariah « Le Port et la Pirogue »
// ODD 8 · 11 · 14 (proposé ; catalogue d'origine 14·8·12) — RSE + collectivité locale en fil conducteur
// FR complet · EN soigné · AR + ZH = BROUILLONS de Claude → relecture native requise avant statut "pret"

const livre: LivreG2040 = {
  slug: "g2040-port-et-pirogue",
  serie: "generation-2040",
  ordre: 10,
  statut: "en_production",
  titre: {
    fr: "Le Port et la Pirogue",
    en: "The Port and the Pirogue",
    ar: "الميناء والزورق",
    zh: "港口与独木舟",
  },
  lieu: "Forécariah",
  sousCollection: "Aventure",
  age: "dès 10 ans",
  odd: [8, 11, 14],
  pilier: "Infrastructures, transports et technologies",
  couverture: "/images/g2040-tome10-couverture.webp",
  meta: {
    tagline: {
      fr: "Le bout de la Ligne est chez nous. À nous d'en faire un commencement.",
      en: "The end of the Line is here, in our home. Ours to turn into a beginning.",
      ar: "نهاية الخط عندنا، في بلدتنا. وعلينا أن نجعل منها بداية.",
      zh: "这条大铁路的终点就在我们这里。让我们把它变成一个开始。",
    },
    blurb: {
      fr: [
        "La grande Ligne a traversé toute la Guinée, et c'est dans la préfecture de Forécariah qu'elle rejoint enfin la mer, au port de Morébaya. La classe est fière : le pays tout entier débouche chez eux.",
        "Mais Morébaya est loin de la ville. Le maître Camara emmène les enfants sur la route du port — le pont de fer, Maférinyah, Madinagbé — puis leur demande une chose : ne pas regarder les machines, mais écouter les habitants.",
        "Sira, Morlaye, Yakha et Bafodé reviennent avec des voix : un pêcheur, une famille déplacée, un jeune ouvrier, une vendeuse, un agent de la commune. Peu à peu, ils comprennent qu'une chance ne se transforme pas toute seule.",
        "Entre la commune et l'entreprise, entre le grand port et le petit quai des pirogues, les enfants dessinent une côte où la richesse qui passe finit par laisser quelque chose ici — pour tous. Génération 2040 · dès 10 ans.",
      ],
      en: [
        "The great Line has crossed all of Guinea, and it is in the prefecture of Forécariah that it finally reaches the sea, at the port of Morébaya. The class is proud: the whole country comes out right at their home.",
        "But Morébaya is far from the town. Mr. Camara takes the children along the road to the port — the iron bridge, Maférinyah, Madinagbé — then asks one thing of them: not to watch the machines, but to listen to the people.",
        "Sira, Morlaye, Yakha and Bafodé come back with voices: a fisherman, a displaced family, a young worker, a market woman, a council official. Bit by bit, they understand that luck does not turn itself into anything on its own.",
        "Between the council and the company, between the great port and the little quay of the pirogues, the children draw a coast where the wealth that passes through finally leaves something behind — for everyone. Génération 2040 · ages 10 and up.",
      ],
      ar: [
        "عبر الخط الكبير غينيا كلها، وفي محافظة فوريكاريا يبلغ البحر أخيرًا، عند ميناء موريبايا. الصف فخور: البلد كله يصبّ عندهم.",
        "لكن موريبايا بعيدة عن المدينة. يأخذ المعلّم كامارا الأطفال على طريق الميناء — الجسر الحديدي، ومافيرينيا، وماديناغبي — ثم يطلب منهم أمرًا واحدًا: ألا ينظروا إلى الآلات، بل أن يستمعوا إلى الناس.",
        "يعود سيرا ومورلاي وياخا وبافودي بأصوات: صيّاد، وعائلة مُهجَّرة، وعامل شاب، وبائعة، وموظّف بلدية. وشيئًا فشيئًا يفهمون أن الحظ لا يتحوّل وحده.",
        "بين البلدية والشركة، بين الميناء الكبير والرصيف الصغير للزوارق، يرسم الأطفال ساحلًا تترك فيه الثروة العابرة شيئًا في النهاية — للجميع. Génération 2040 · من 10 سنوات فما فوق.",
      ],
      zh: [
        "那条大铁路穿过了整个几内亚，正是在福雷卡里亚省，它终于抵达大海，在莫雷巴亚港。全班都很自豪：整个国家就在他们这里通向大海。",
        "可是莫雷巴亚离城很远。卡马拉老师带孩子们走上通往港口的路——铁桥、马费里尼亚、马迪纳格贝——然后只要求他们一件事：不要看机器，而要听当地人说话。",
        "西拉、莫尔莱、雅卡和巴福代带回了一个个声音：一位渔民、一户被迁走的人家、一个年轻工人、一个女商贩、一位镇政府工作人员。他们渐渐明白：幸运不会自己变成任何东西。",
        "在地方政府与公司之间，在大港与独木舟小码头之间，孩子们画出了一片海岸：经过的财富终于在这里留下了些什么——为了所有人。Génération 2040 · 适合 10 岁以上。",
      ],
    },
  },
  sections: [
    {
      id: "la-chance-de-forecariah",
      voix: "recit",
      fr: `Ce matin-là, la classe est fière, et elle le dit tout haut.

La grande Ligne a traversé toute la Guinée. Les montagnes de fer, les plateaux, le Fouta, les plaines — gare après gare, elle est descendue jusqu'à la mer. Et c'est chez nous, dans la préfecture de Forécariah, qu'elle s'arrête. Au port de Morébaya.

— On a de la chance, lance Morlaye. Le pays tout entier finit dans notre préfecture.

— Le bout de la grande Ligne, juste chez nous ! ajoute Yakha. À côté d'elle, Bafodé imagine déjà les bateaux géants.

Le maître Camara sourit, puis nuance.

— Une chance, peut-être. Mais Morébaya, mes enfants, c'est loin d'ici. Très loin de notre ville. Avant de vous réjouir, allons voir. Et surtout, allons écouter.`,
      en: `That morning, the class was proud, and said so out loud.

The great Line has crossed all of Guinea. The iron mountains, the high plateaus, the Fouta, the plains — station after station, it came down all the way to the sea. And it is here, in our own prefecture of Forécariah, that it ends. At the port of Morébaya.

"We're lucky," said Morlaye. "The whole country ends up in our prefecture."

"The end of the great Line, right here at home!" added Yakha. Beside her, Bafodé was already picturing the giant ships.

Mr. Camara smiled, then added a word of caution.

"Lucky, perhaps. But Morébaya, children, is far from here. Very far from our town. Before you celebrate, let's go and see. And above all, let's go and listen."`,
      ar: `في ذلك الصباح، كان الصف فخورًا، وقال ذلك بصوتٍ عالٍ.

لقد عبر الخط الكبير غينيا كلها. جبال الحديد، والهضاب، وفوتا، والسهول — محطةً بعد محطة، نزل حتى البحر. وعندنا، في محافظة فوريكاريا، يتوقف. عند ميناء موريبايا.

— نحن محظوظون، قال مورلاي. البلد كله ينتهي في محافظتنا.

— نهاية الخط الكبير، عندنا تمامًا! أضافت ياخا. وإلى جانبها، كان بافودي يتخيّل بالفعل السفن العملاقة.

ابتسم المعلّم كامارا، ثم استدرك.

— حظٌّ، ربما. لكن موريبايا، يا أبنائي، بعيدة من هنا. بعيدة جدًّا عن مدينتنا. قبل أن تفرحوا، لنذهب لنرى. وقبل كل شيء، لنذهب لنستمع.`,
      zh: `那天早上，全班都很自豪，还大声说了出来。

那条大铁路穿过了整个几内亚。铁矿的群山、高原、富塔、平原——一站接着一站，一直下到海边。而它的终点，就在我们这里，在福雷卡里亚省，在莫雷巴亚港。

“我们真幸运，”莫尔莱说。“整个国家都在我们省里结束。”

“大铁路的尽头，就在我们家门口！”雅卡补充道。在她身旁，巴福代已经在想象那些巨轮了。

卡马拉老师笑了笑，又补了一句。

“也许是幸运。可是孩子们，莫雷巴亚离这里很远，离我们的城很远。在你们高兴之前，先去看看吧。尤其是，去听一听。”`,
    },
    {
      id: "la-route-du-port",
      voix: "recit",
      fr: `Le car sort de Forécariah au petit matin.

On traverse le pont de fer sur le Mellacorée. On passe Allassoyah. On arrive au carrefour de Maférinyah — qui n'arrête plus de grossir : boutiques, garages, gargotes, camions garés partout. Un vrai marché qui ne dort jamais.

Puis le car tourne à gauche et fonce vers la côte. Madinagbé. Et là, tout change.

Des chantiers énormes. Des milliers de camions dans la poussière. Des grues hautes comme des arbres. Enfin Morébaya : le port, et des travaux partout, jusqu'à l'eau.

Les enfants restent bouche bée devant les machines. Le maître Camara les rappelle.

— Ne restez pas plantés devant les engins. Dispersez-vous. Allez vers les gens d'ici. Et écoutez-les bien.`,
      en: `The bus left Forécariah at first light.

They crossed the iron bridge over the Mellacorée. They passed Allassoyah. They reached the Maférinyah junction — which keeps on growing: shops, garages, food stalls, trucks parked everywhere. A real market that never sleeps.

Then the bus turned left and sped toward the coast. Madinagbé. And there, everything changed.

Enormous worksites. Thousands of trucks in the dust. Cranes as tall as trees. At last, Morébaya: the port, and works everywhere, right down to the water.

The children stood open-mouthed before the machines. Mr. Camara called them back.

"Don't just stand there staring at the engines. Spread out. Go to the people who live here. And listen to them carefully."`,
      ar: `غادرت الحافلة فوريكاريا مع أول ضوء.

عبرنا الجسر الحديدي فوق نهر ميلاكوري. مررنا بألاسويا. وصلنا إلى مفترق مافيرينيا — الذي لا يتوقف عن النمو: متاجر، ومرائب، ومطاعم صغيرة، وشاحنات متوقفة في كل مكان. سوق حقيقي لا ينام أبدًا.

ثم انعطفت الحافلة يسارًا واندفعت نحو الساحل. ماديناغبي. وهناك، تغيّر كل شيء.

أوراش ضخمة. آلاف الشاحنات في الغبار. رافعات عالية كالأشجار. وأخيرًا موريبايا: الميناء، وأعمال في كل مكان، حتى الماء.

وقف الأطفال مفغوري الأفواه أمام الآلات. ناداهم المعلّم كامارا.

— لا تقفوا متسمّرين أمام الآلات. تفرّقوا. اذهبوا إلى أهل المكان. واستمعوا إليهم جيدًا.`,
      zh: `天刚亮，大巴就驶出了福雷卡里亚。

我们越过梅拉科雷河上的铁桥，经过阿拉索亚，来到马费里尼亚的路口——它不停地变大：商铺、修车铺、小饭馆，到处停着卡车。一个真正不眠的集市。

然后大巴向左拐，朝海岸疾驶。马迪纳格贝。到了那里，一切都变了。

巨大的工地。尘土中成千上万辆卡车。像树一样高的起重机。终于到了莫雷巴亚：港口，到处都在施工，一直修到水边。

孩子们张着嘴呆呆地看着机器。卡马拉老师把他们叫了回来。

“别只顾着盯着那些机器。散开。到这里的人们身边去，好好听他们说。”`,
    },
    {
      id: "ce-que-les-gens-nous-ont-dit",
      voix: "recit",
      fr: `Les enfants se séparent par petits groupes. Le soir, dans le car, chacun raconte.

Morlaye a parlé à un pêcheur. « La mangrove, là-bas, c'est la nurserie : les petits poissons y grandissent. Depuis le grand chantier, le poisson se fait plus rare. On nous a donné des filets, du matériel. Mais ce qu'il nous faut, c'est un vrai quai, et de la glace. »

Sira a écouté une famille déplacée. « Notre champ est sous le chantier, maintenant. On nous a donné une autre parcelle, plus loin. » La maman a ajouté, doucement : « Reloger, c'est bien. Reloger avec une école et de l'eau à côté, ce serait mieux. »

Un autre groupe a rencontré un jeune homme du coin, embauché au port. « L'entreprise qui creuse Morébaya m'a formé, puis recruté. Avant, je n'avais rien. Mais il faudrait former plus de gens d'ici — pas faire venir tout le monde d'ailleurs. » Bafodé l'a écouté longtemps : lui aussi rêve d'un métier.

Yakha, elle, était restée vers Maférinyah. Une vendeuse lui a ri au nez, toute contente : « Depuis le chantier, mon carrefour est devenu une ville. Je vends du matin au soir. » Puis, à la commune, un agent a tout expliqué à Yakha. « La collectivité reçoit une part de ce qui passe ici. Mais une part, ça ne sert que si on la transforme — en écoles, en routes, en eau pour tous. »`,
      en: `The children split into small groups. That evening, on the bus, each one told their story.

Morlaye had talked with a fisherman. "The mangrove over there is the nursery: the little fish grow up among its roots. Since the big worksite began, fish have become scarcer. They've given us nets and gear. But what we need is a real quay, and ice."

Sira had listened to a displaced family. "Our field is under the worksite now. They gave us another plot, farther away." The mother added softly: "Resettling us is good. Resettling us with a school and water nearby would be better."

Another group met a young man from the area, hired at the port. "The company digging Morébaya trained me, then took me on. Before, I had nothing. But they should train more people from here — not bring everyone in from elsewhere." Bafodé listened for a long time: he too dreams of a trade.

Yakha had stayed near Maférinyah. A market woman laughed with delight: "Since the worksite, my junction has become a town. I sell from morning to night." Then, at the town hall, an official explained everything to Yakha. "The local council receives a share of what passes through here. But a share is only useful if it is turned into something — into schools, roads, water for everyone."`,
      ar: `انقسم الأطفال إلى مجموعات صغيرة. في المساء، في الحافلة، روى كلٌّ منهم ما سمع.

تحدّث مورلاي مع صيّاد. «غابة المانغروف هناك هي الحضانة: تكبر الأسماك الصغيرة بين جذورها. منذ بدء الورش الكبير، صار السمك أندر. أعطونا شِباكًا ومعدّات. لكن ما نحتاجه هو رصيف حقيقي، وثلج.»

استمعت سيرا إلى عائلة مُهجَّرة. «حقلنا صار تحت الورش الآن. أعطونا قطعة أرض أخرى، أبعد.» وأضافت الأم بهدوء: «إعادة إسكاننا أمرٌ جيّد. إعادة إسكاننا مع مدرسة وماء بالقرب أفضل.»

التقت مجموعة أخرى بشابٍّ من المنطقة، وظّفه الميناء. «الشركة التي تحفر موريبايا دربتني ثم وظّفتني. من قبل، لم يكن لديّ شيء. لكن ينبغي تدريب المزيد من أهل المكان — لا أن يُؤتى بالجميع من مكان آخر.» أنصت بافودي طويلًا: هو أيضًا يحلم بمهنة.

أما ياخا فبقيت قرب مافيرينيا. ضحكت بائعة بفرح: «منذ الورش، صار مفترقي مدينة. أبيع من الصباح إلى المساء.» ثم، في البلدية، شرح موظّف كل شيء لياخا. «تتلقّى الجماعة المحلية حصةً مما يمرّ من هنا. لكن الحصة لا تنفع إلا إذا حُوِّلت — إلى مدارس، وطرق، وماء للجميع.»`,
      zh: `孩子们分成一个个小组。傍晚，在大巴上，每个人都讲起自己听到的。

莫尔莱和一位渔民聊过。“那边的红树林是育苗场：小鱼在树根之间长大。自从大工地开工，鱼越来越少了。他们给了我们渔网和工具。可我们需要的，是一个真正的码头，还有冰。”

西拉听了一户被迁走的人家说话。“我们的田现在在工地底下了。他们给了我们另一块地，更远的地方。”母亲轻声补充：“给我们安置是好的。要是安置的地方旁边有学校和水，就更好了。”

另一组遇到一个本地的年轻人，被港口录用了。“开挖莫雷巴亚的公司培训了我，然后雇了我。以前我什么都没有。但应该多培训本地人——而不是把所有人都从别处带来。”巴福代听了很久：他也梦想有一门手艺。

雅卡呢，留在了马费里尼亚附近。一个女商贩开心地笑着说：“自从有了工地，我这个路口变成了一座城。我从早卖到晚。”后来，在镇政府，一位工作人员把一切都讲给雅卡听。“地方政府会从这里经过的东西里分到一份。但这一份只有变成学校、道路、人人有水，才有用。”`,
    },
    {
      id: "la-chance-ne-suffit-pas",
      voix: "recit",
      fr: `De retour en classe, les enfants font le tri dans tout ce qu'ils ont entendu.

Ils comprennent une chose, et elle est simple. Accueillir le bout de la Ligne, c'est une chance. Mais une chance ne se transforme pas toute seule en écoles, en emplois, en mer protégée.

Il faut deux mains qui travaillent ensemble. La commune, qui veille à ce que la richesse qui passe laisse vraiment quelque chose ici, pour tous. Et l'entreprise, qui creuse le port : quand on dérange la vie des gens, on a le devoir de réparer, de reloger, de former, de partager.

— Et nous ? demande Bafodé.

— Nous, on a écouté, dit Sira. C'est déjà ça. Maintenant, on propose.

Yakha sort déjà une feuille.`,
      en: `Back in class, the children sorted through everything they had heard.

They understood one thing, and it was simple. Welcoming the end of the Line is a piece of luck. But luck does not turn itself into schools, into jobs, into a protected sea.

It takes two hands working together. The local council, which makes sure that the wealth passing through really leaves something here, for everyone. And the company digging the port: when you disturb people's lives, you have a duty to repair, to resettle, to train, to share.

"And us?" asked Bafodé.

"Us, we listened," said Sira. "That's already something. Now, we propose."

Yakha was already taking out a sheet of paper.`,
      ar: `عند العودة إلى الصف، رتّب الأطفال كل ما سمعوه.

فهموا أمرًا واحدًا، وهو بسيط. استقبال نهاية الخط حظٌّ. لكن الحظ لا يتحوّل وحده إلى مدارس، ولا إلى وظائف، ولا إلى بحرٍ محميّ.

يلزم يدان تعملان معًا. البلدية، التي تحرص على أن تترك الثروة العابرة شيئًا هنا حقًّا، للجميع. والشركة التي تحفر الميناء: حين تُربك حياة الناس، عليك واجب الإصلاح، وإعادة الإسكان، والتدريب، والمشاركة.

— ونحن؟ سأل بافودي.

— نحن، استمعنا، قالت سيرا. هذا شيءٌ بالفعل. الآن، نقترح.

أخرجت ياخا ورقةً بالفعل.`,
      zh: `回到班里，孩子们把听到的一切理了一遍。

他们明白了一件事，很简单。迎来这条铁路的终点，是一种幸运。但幸运不会自己变成学校、变成工作、变成受保护的大海。

这需要两只手一起干活。一只是地方政府，它要确保经过的财富真的在这里留下些什么，为了所有人。另一只是开挖港口的公司：当你打扰了人们的生活，你就有责任去修补、去安置、去培训、去分享。

“那我们呢？”巴福代问。

“我们，我们听了，”西拉说。“这已经是一件事了。现在，我们来提建议。”

雅卡已经拿出了一张纸。`,
    },
    {
      id: "la-reponse-de-forecariah",
      voix: "recit",
      fr: `Pour le dossier de la Simandou Academy, la classe écrit ce qu'elle a décidé.

Que le port forme et embauche d'abord les gens d'ici. Que les familles déplacées soient relogées dignement — avec école, eau et route. Que la commune transforme sa part en équipements pour tous, et qu'on organise enfin le carrefour de Maférinyah.

Que la mer et la mangrove soient protégées, et qu'on bâtisse un vrai quai pour les pêcheurs, avec de la glace. Que ce qui sort d'ici — le poisson, le sel, le riz de Kaback — soit gardé et transformé sur place, pas bradé.

Le grand port pour le fer du pays. Et, juste à côté, le petit quai pour nos pirogues.

Sira écrit la phrase qui résume tout : « Le bout de la Ligne est chez nous. À nous d'en faire un commencement. »`,
      en: `For the Simandou Academy file, the class wrote down what it had decided.

That the port should train and hire local people first. That the displaced families be resettled with dignity — with a school, water and a road. That the council turn its share into facilities for all, and that the Maférinyah junction be organised at last.

That the sea and the mangrove be protected, and that a real quay be built for the fishermen, with ice. That what comes from here — the fish, the salt, the rice of Kaback — be kept and processed on the spot, not sold off cheap.

The great port for the country's iron. And, right beside it, the little quay for our pirogues.

Sira wrote the sentence that summed it all up: "The end of the Line is here, in our home. Ours to turn into a beginning."`,
      ar: `من أجل ملف أكاديمية سيماندو، كتب الصف ما قرّره.

أن يدرّب الميناء أهل المكان ويوظّفهم أولًا. أن تُعاد العائلات المُهجَّرة إلى السكن بكرامة — مع مدرسة وماء وطريق. أن تحوّل البلدية حصتها إلى مرافق للجميع، وأن يُنظَّم أخيرًا مفترق مافيرينيا.

أن يُحمى البحر والمانغروف، وأن يُبنى رصيف حقيقي للصيّادين، مع ثلج. وأن يُحفظ ما يخرج من هنا — السمك، والملح، وأرزّ كاباك — ويُحوَّل في المكان، لا أن يُباع رخيصًا.

الميناء الكبير لحديد البلد. وإلى جانبه تمامًا، الرصيف الصغير لزوارقنا.

كتبت سيرا الجملة التي تختصر كل شيء: «نهاية الخط عندنا، في بلدتنا. وعلينا أن نجعل منها بداية.»`,
      zh: `为了交给西曼杜学院的材料，全班写下了他们的决定。

港口要先培训和雇用本地人。被迁走的家庭要有尊严地重新安置——要有学校、有水、有路。地方政府要把它那一份变成人人可用的设施，还要终于把马费里尼亚的路口管理好。

要保护大海和红树林，要为渔民修一个真正的码头，还要有冰。从这里出产的东西——鱼、盐、卡巴克的稻米——要就地保存和加工，而不是贱卖。

大港，用来运国家的铁矿。而紧挨着它的，是给我们的独木舟用的小码头。

西拉写下了那句概括一切的话：“这条大铁路的终点就在我们这里。让我们把它变成一个开始。”`,
    },
    {
      id: "apres-2040",
      voix: "recit",
      fr: `Sur le dessin que Forécariah envoie, c'est la côte de demain.

Le grand port travaille. Des navires énormes emportent le fer et la poudre blanche qui ont traversé tout le pays par la Ligne. Mais cette fois, la richesse ne fait pas que passer : elle laisse des traces ici.

Les familles d'avant ont un vrai quartier, avec une école et de l'eau. Des jeunes de Forécariah travaillent au port, et en forment d'autres. À côté des géants, un quai de pêche vit, plein de pirogues et de glace. La mangrove a reverdi. Le carrefour de Maférinyah est devenu une vraie petite ville. Et à Kaback, les digues tiennent : le riz est revenu.

En bas du dessin, Sira a écrit : « On disait : on a de la chance, le train finit chez nous. Maintenant on dit : la chance, on l'a cultivée — ensemble. »`,
      en: `On the drawing Forécariah sent in, it is the coast of tomorrow.

The great port is at work. Huge ships carry away the iron and the white powder that crossed the whole country along the Line. But this time, the wealth does not merely pass through: it leaves traces here.

The families from before have a real neighbourhood, with a school and water. Young people from Forécariah work at the port, and train others. Beside the giants, a fishing quay is alive, full of pirogues and ice. The mangrove has turned green again. The Maférinyah junction has become a real little town. And at Kaback, the dikes hold: the rice has come back.

At the bottom of the drawing, Sira wrote: "We used to say: we're lucky, the train ends at our home. Now we say: the luck — we cultivated it, together."`,
      ar: `على الرسم الذي أرسلته فوريكاريا، هذا هو ساحل الغد.

الميناء الكبير يعمل. سفن ضخمة تحمل الحديد والمسحوق الأبيض اللذين عبرا البلد كله عبر الخط. لكن هذه المرة، لا تكتفي الثروة بالعبور: تترك آثارًا هنا.

صار للعائلات السابقة حيٌّ حقيقي، فيه مدرسة وماء. شبابٌ من فوريكاريا يعملون في الميناء، ويدرّبون غيرهم. إلى جانب العمالقة، رصيف صيدٍ ينبض بالحياة، مليء بالزوارق والثلج. اخضرّت المانغروف من جديد. صار مفترق مافيرينيا بلدةً صغيرة حقيقية. وفي كاباك، تصمد السدود: عاد الأرزّ.

أسفل الرسم، كتبت سيرا: «كنا نقول: نحن محظوظون، القطار ينتهي عندنا. الآن نقول: الحظّ — نحن من زرعناه، معًا.»`,
      zh: `在福雷卡里亚寄出的那幅画上，画的是明天的海岸。

大港在运转。巨轮运走沿着铁路穿过整个国家的铁矿和白色的粉末。但这一次，财富不只是经过：它在这里留下了痕迹。

从前的那些人家有了真正的街区，有学校、有水。福雷卡里亚的年轻人在港口工作，还培训别人。在那些巨人旁边，一个渔业码头充满生机，满是独木舟和冰。红树林又绿了。马费里尼亚的路口变成了一座真正的小城。在卡巴克，堤坝守住了：稻米回来了。

在画的下方，西拉写道：“我们以前说：我们真幸运，火车在我们这里到站。现在我们说：这份幸运——是我们一起耕耘出来的。”`,
    },
  ] as SectionG2040[],
};

export default livre;
