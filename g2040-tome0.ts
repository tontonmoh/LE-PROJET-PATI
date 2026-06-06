// =============================================================================
//  GÉNÉRATION 2040 — Tome 0 : « Le changement commence à l'école »
//  Fichier de données Pati (à aligner sur l'interface réelle de chateau-ml.ts)
// -----------------------------------------------------------------------------
//  ÉTAT : FR + EN + AR + ZH du RÉCIT ET du visiteur remplis
//         (EN/AR/ZH = traductions fournies par Moh, commentaires retirés).
//  À RELIRE AVANT PROD :
//   • AR — les noms de personnages ont été TRANSLITTÉRÉS (Mbalia, Tchotcho, Joël, Fatoumata).
//     Règle Pati = noms INVARIANTS → restaurer Mbalia / Tchotcho / Joël / Fatoumata en latin.
//   • AR & ZH — relecture par un natif recommandée.
//   • meta.tagline / meta.blurb : AR + ZH encore à produire (FR + EN faits).
// =============================================================================

export interface SectionG2040 {
  id: string;
  voix: "recit" | "visiteur";
  fr: string;
  en: string;
  ar: string;
  zh: string;
}

export interface LivreG2040 {
  slug: string;
  serie: string;
  ordre: number;
  statut: "pret" | "en_production" | "placeholder";
  titre: { fr: string; en: string; ar: string; zh: string };
  lieu: string;
  sousCollection: string;
  age: string;
  odd: number[];
  pilier: string;
  couverture: string;
  meta: {
    tagline: { fr: string; en: string; ar: string; zh: string };
    blurb: { fr: string[]; en: string[]; ar: string[]; zh: string[] };
  };
  sections: SectionG2040[];
}

export const g2040Tome0: LivreG2040 = {
  slug: "g2040-tome0",
  serie: "generation-2040",
  ordre: 0,
  statut: "pret",
  titre: {
    fr: "Le changement commence à l'école",
    en: "Change begins at school",
    ar: "التغيير يبدأ من المدرسة",
    zh: "改变始于学校",
  },
  lieu: "Boffa",
  sousCollection: "Aventure",
  age: "dès 12 ans",
  odd: [4],
  pilier: "Éducation & culture",
  couverture: "/img/g2040/g2040-tome0-couverture.png",
  meta: {
    tagline: {
      fr: "Le jour où une classe de Boffa découvre qu'elle connaît le monde entier — sauf son propre pays.",
      en: "The day a classroom in Boffa realizes it knows the whole world — except its own country.",
      ar: "",
      zh: "",
    },
    blurb: {
      fr: [
        "À Boffa, dans une classe ordinaire aux bancs fatigués, le professeur n'est pas venu ce matin. Les élèves révisent seuls — jusqu'à ce qu'une visite inattendue change la journée.",
        "Ils savent réciter l'Asie et les Amériques par cœur. Mais quand on leur demande de parler de la Guinée, de Boffa, de Simandou… le silence tombe. Alors une question se pose, simple et immense : et si c'était à eux d'apprendre, puis de raconter, le pays de demain ?",
        "De ce matin-là naît un grand concours national des écoles — et la série Génération 2040.",
        "Parce que le changement, le plus grand, commence toujours sur les bancs de l'école.",
      ],
      en: [
        "In Boffa, in an ordinary classroom with worn-out benches, the teacher hasn't come this morning. The pupils revise on their own — until an unexpected visit turns the day around.",
        "They can recite Asia and the Americas by heart. But when asked to speak about Guinea, about Boffa, about Simandou… silence falls. And a simple, vast question arises: what if it were up to them to learn, and then to tell, the country of tomorrow?",
        "Out of that morning a great national schools' contest is born — and with it the Génération 2040 series.",
        "Because the greatest change always begins on the benches of a school.",
      ],
      ar: [],
      zh: [],
    },
  },
  sections: [
    {
      id: "ouverture",
      voix: "visiteur",
      fr: `Le Président était à Boffa pour le pèlerinage. Comme le Nouvel An approchait, une idée lui vint : « Pour mon discours, je veux être dans une salle de classe. »

Mais au village, c'était la panique ! Les conseillers couraient dans tous les sens, le protocole était tout chamboulé. « Monsieur le Président, il n'y a aucune salle adaptée ! » Ils lui proposaient les jardins d'un hôtel luxueux, les salons feutrés de la préfecture, ou même le sable doré de la plage.

« Pourquoi vouloir cacher la vérité ? » demanda-t-il doucement. « Si nous ne trouvons pas une école qui nous honore, alors c'est là que nous devons commencer notre travail. Le changement commence toujours sur les bancs de l'école. »

Le Président fit signe au Préfet : « Conduisez-moi à l'école la plus proche. Peu importe l'état des lieux, peu importe le protocole. »

Annoncé par les klaxons des motards qui avaient tenu à accompagner le cortège, la cour entière fut en émoi. Les gens n'en croyaient pas leurs yeux de voir apparaître ce visiteur inattendu. Il était là, vêtu simplement d'un polo, sans lunettes, entouré d'une sécurité réduite au strict minimum pour ne pas briser la magie du moment.

Le DPE arrivait en toute hâte, ayant dû grimper sur une moto-taxi pour traverser la ville en un éclair, tandis que le Principal du collège, paniqué de ne pas avoir été prévenu, se posait mille questions. Il avait commencé à sortir tout le monde quand le Président lui dit : « Non, ne sortez personne, on fera cela après. »

Arrivé devant une classe de 8ème année, le Président s'arrêta. Il demanda à tout le monde — adultes, gardes, officiels — de rester dehors. « Laissez le personnel vaquer à ses occupations, » dit-il avec un sourire. « Je veux juste quinze minutes avec les enfants. »`,
      en: `The President was in Boffa for the pilgrimage. As the New Year approached, an idea came to him: "For my speech, I want to be in a classroom."

But in the village, it was panic! The advisors were running in all directions, and the protocol was completely turned upside down. "Mr. President, there is no suitable room!" They offered him the gardens of a luxury hotel, the plush lounges of the prefecture, or even the golden sand of the beach.

"Why would we want to hide the truth?" he asked gently. "If we cannot find a school that honors us, then that is where we must begin our work. Change always starts at school desks." The President signaled to the Prefect: "Take me to the nearest school. It doesn't matter what the condition of the premises is, it doesn't matter what the protocol is."

Announced by the sirens of the motorcyclists who insisted on accompanying the motorcade, the entire courtyard was in turmoil. People couldn't believe their eyes to see this unexpected visitor appear. He was there, dressed simply in a polo shirt, without glasses, surrounded by security reduced to the bare minimum so as not to break the magic of the moment.

The DPE arrived in a hurry, having had to climb onto a motorcycle taxi to cross the city in a flash, while the Principal of the middle school, panicked at not having been warned, asked himself a thousand questions. He had started to bring everyone out when the President said to him: "No, don't bring anyone out, we'll do that later."

Arrived in front of an 8th-grade class, the President stopped. He asked everyone—adults, guards, officials—to stay outside. "Let the staff go about their business," he said with a smile. "I just want fifteen minutes with the children."`,
      ar: `كان الرئيس في "بوفا" من أجل الحج. ومع اقتراب العام الجديد، خطرت له فكرة: "بالنسبة لخطابي، أريد أن أكون في فصل دراسي".

لكن في القرية، سادت حالة من الذعر! كان المستشارون يركضون في كل اتجاه، وكانت البروتوكولات في حالة من الفوضى. "سيدي الرئيس، لا توجد قاعة مناسبة!" اقترحوا عليه حدائق فندق فاخر، أو صالونات المحافظة الهادئة، أو حتى الرمال الذهبية للشاطئ.

"لماذا نريد إخفاء الحقيقة؟" سأل برفق. "إذا لم نجد مدرسة تشرفنا، فهذا هو المكان الذي يجب أن نبدأ فيه عملنا. التغيير يبدأ دائماً من مقاعد المدرسة". أشار الرئيس للمحافظ: "خذني إلى أقرب مدرسة. لا يهم حالة المكان، ولا يهم البروتوكول".

مع إعلان أصوات أبواق الدراجات النارية التي أصرت على مرافقة الموكب، أصبحت الساحة بأكملها في حالة هياج. لم يصدق الناس أعينهم لرؤية هذا الزائر غير المتوقع. كان هناك، يرتدي قميص "بولو" بسيطاً، بدون نظارات، ومحاطاً بحد أدنى من الأمن لكي لا يفسد سحر اللحظة.

وصل مدير التعليم الإقليمي على عجل، بعد أن اضطر لركوب دراجة أجرة ليعبر المدينة في لمح البصر، بينما كان مدير المدرسة، الذي أصابه الذعر لعدم إبلاغه مسبقاً، يطرح على نفسه ألف سؤال. كان قد بدأ بإخراج الجميع عندما قال له الرئيس: "لا، لا تخرج أحداً، سنفعل ذلك لاحقاً".

عند وصوله أمام فصل السنة الثامنة، توقف الرئيس. وطلب من الجميع—بالغين، حراساً، مسؤولين—البقاء في الخارج. قال بابتسامة: "دعوا الموظفين يمارسون أعمالهم. أريد فقط خمس عشرة دقيقة مع الأطفال".`,
      zh: `总统在博法进行朝圣。随着新年临近，一个想法浮现在他脑海中：“对于我的演讲，我想在一间教室里进行。”

但在村子里，情况一片混乱！顾问们四处奔走，礼节完全被打乱了。“总统先生，没有合适的房间！”他们建议他去豪华酒店的花园、省政府的雅致客厅，甚至金色的海滩。

“为什么要隐藏真相呢？”他温柔地问道。“如果我们找不到一所能让我们引以为傲的学校，那么这正是我们必须开始工作的地方。改变总是从学校的课桌开始。”总统向省长示意：“带我去最近的学校。无论场地状况如何，无论礼节如何。”

随着坚持护送车队的摩托车手们的鸣笛声，整个院子陷入了骚动。人们不敢相信自己的眼睛，看到了这位意想不到的访客。他穿着简单的马球衫，没戴眼镜，安全防范减到最低，以免打破这一刻的魔力。

教育部门主管匆忙赶来，他不得不坐上一辆摩托出租车闪电般穿过城市，而中学校长因未被提前通知而惊慌失措，脑子里闪过无数个疑问。他正准备疏散所有人时，总统对他说：“不，不要把任何人赶出去，我们稍后再做这些。”

走到八年级教室前，总统停下了脚步。他要求所有人——成年人、警卫、官员——都留在外面。“让工作人员忙他们自己的事吧，”他微笑着说。“我只想和孩子们待十五分钟。”`,
    },
    {
      id: "avant",
      voix: "recit",
      fr: `Dans la classe de 8ᵉ année, le tableau avait perdu ses couleurs : un gris fatigué où la craie s'effaçait à moitié. Trois bancs étaient calés avec des cales de bois. Une vitre manquait à la fenêtre du fond ; on avait tendu un sac à la place. Le professeur n'était pas venu ce matin-là — ça arrivait. Les élèves révisaient seuls, en attendant le prochain cours et les passages répétés du surveillant général.`,
      en: `In the 8th-grade class, the blackboard had lost its color: a tired gray where the chalk half-faded. Three benches were propped up with wooden shims. A pane was missing from the back window; a bag had been stretched in its place. The teacher hadn't come that morning—it happened. The students were reviewing alone, waiting for the next class and the repeated passages of the general supervisor.`,
      ar: `في فصل السنة الثامنة، كانت السبورة قد فقدت ألوانها: رمادي متعب حيث يمحى الطباشير نصف محو. كانت ثلاث مقاعد مدعومة بقطع خشبية. نافذة في الخلف كانت تفتقد إلى زجاج؛ وقد وضعوا كيساً بدلاً منه. لم يأتِ المعلم في ذلك الصباح—وهذا كان يحدث. كان الطلاب يراجعون دروسهم وحدهم، بانتظار الدرس التالي وتكرار زيارات المراقب العام.`,
      zh: `在八年级教室里，黑板已经失去了颜色：一种疲惫的灰色，粉笔迹若隐若现。三张长凳用木楔垫着。后窗缺少一块玻璃；取而代之的是挂着一个袋子。老师那天早上没来——这种事常有发生。学生们独自复习，等待下一堂课和总监察员的例行巡视。`,
    },
    {
      id: "bonjour",
      voix: "recit",
      fr: `— Bonjour Monsieur, dit la classe en chantant d'un seul élan, debout, dans un raclement de bancs.`,
      en: `"Good morning, sir," the class said in a chanting voice, all at once, standing up in a scraping of benches.`,
      ar: `"صباح الخير يا سيدي"، قال الفصل بصوت واحد كأنه غناء، واقفين مع أصوات جر المقاعد.`,
      zh: `“老师好，”全班齐声唱道，伴随着长凳摩擦的声音，学生们站了起来。`,
    },
    {
      id: "visiteur-assoit",
      voix: "visiteur",
      fr: `D'un geste simple, il invita les élèves à s'asseoir. Dans la salle, le silence devint tout à coup très doux. Il posa ses mains sur le bureau, les regarda tour à tour, et sa voix, profonde et chaleureuse, s'éleva :

« On m'a dit que votre professeur était absent aujourd'hui, alors je me suis invité à sa place », dit-il avec un clin d'œil amusé.

Puis il se pencha un peu vers eux, son expression devenant plus douce, presque confiante : « Mais vous savez, je ne suis pas là pour vous faire la leçon. Si je suis là aujourd'hui, c'est parce que je suis venu pour apprendre de vous. »`,
      en: `With a simple gesture, he invited the students to sit down. In the room, the silence suddenly became very soft. He placed his hands on the desk, looked at them one by one, and his voice, deep and warm, rose: "I was told your teacher was absent today, so I invited myself in his place," he said with an amused wink. Then he leaned slightly toward them, his expression becoming softer, almost confident: "But you know, I'm not here to lecture you. If I am here today, it is because I came to learn from you."`,
      ar: `بحركة بسيطة، دعا الطلاب للجلوس. في القاعة، أصبح الصمت فجأة هادئاً جداً. وضع يديه على المكتب، نظر إليهم واحداً تلو الآخر، وارتفع صوته العميق والدافئ: "قيل لي إن معلمكم غائب اليوم، لذا دعوت نفسي مكانه"، قالها مع غمز عين مرحة. ثم انحنى قليلاً نحوهم، وأصبحت تعبيراته أكثر نعومة، وشبه واثقة: "لكن كما تعلمون، أنا لست هنا لألقي عليكم درساً. إذا كنت هنا اليوم، فذلك لأنني جئت لأتعلم منكم".`,
      zh: `他用一个简单的手势示意学生们坐下。室内，沉默突然变得非常柔和。他双手放在桌子上，逐一注视着他们，他深沉而温暖的声音响起：“有人告诉我你们的老师今天缺席了，所以我代替他，不请自来，”他眨了眨眼，打趣道。然后他微微倾身靠近他们，表情变得更柔和、几乎是交心地说：“但你知道，我不是来给你们上课的。我今天来这里，是因为我是来向你们学习的。”`,
    },
    {
      id: "songe",
      voix: "recit",
      fr: `Les enfants semblaient dans un songe.`,
      en: `The children seemed to be in a dream.`,
      ar: `بدا الأطفال وكأنهم في حلم.`,
      zh: `孩子们仿佛置身梦中。`,
    },
    {
      id: "relance-appris",
      voix: "visiteur",
      fr: `— Qu'avez-vous appris cette semaine ?`,
      en: `"What have you learned this week?"`,
      ar: `"ماذا تعلمتم هذا الأسبوع؟"`,
      zh: `“这周你们学到了什么？”`,
    },
    {
      id: "asie-ameriques",
      voix: "recit",
      fr: `Les mains se levèrent toutes en même temps. Mbalia parla la première, fière : l'Asie, ses régions, la mousson, les fleuves immenses, les villes plus peuplées que des pays entiers. Tchotcho enchaîna sans attendre son tour : les Amériques — le Nord, le Centre, le Sud, les noms roulaient dans sa bouche comme une leçon bien récitée.

La classe brillait. Elle connaissait le monde.`,
      en: `The hands all went up at the same time. Mbalia spoke first, proud: Asia, its regions, the monsoon, the immense rivers, cities more populous than entire countries. Tchotcho continued without waiting for his turn: the Americas—North, Central, South, the names rolled in his mouth like a well-recited lesson.

The class was shining. It knew the world.`,
      ar: `ارتفعت الأيدي كلها في وقت واحد. تحدثت "Mbalia" أولاً، بفخر: عن آسيا، مناطقها، الرياح الموسمية، الأنهار العظيمة، ومدن يفوق عدد سكانها دولاً بأكملها. أكمل "Tchotcho" دون انتظار دوره: عن الأمريكيتين—الشمالية والوسطى والجنوبية، الأسماء تتدحرج في فمه كدرس محفوظ جيداً.

كان الفصل مشعاً. إنه يعرف العالم.`,
      zh: `所有手同时举了起来。Mbalia首先发言，自豪地说道：亚洲，它的地区，季风，巨大的河流，人口比整个国家还多的城市。Tchotcho不等轮到自己就接道：美洲——北部、中部、南部，名字在他口中流淌，就像一门背诵得很好的课程。

教室闪耀着光芒。它了解世界。`,
    },
    {
      id: "relance-guinee",
      voix: "visiteur",
      fr: `— Et la Guinée ? Boffa ? Labé ? Faranah ? Lola ?`,
      en: `"And Guinea? Boffa? Labé? Faranah? Lola?"`,
      ar: `"وماذا عن غينيا؟ بوفا؟ لابي؟ فاراناه؟ لولا؟"`,
      zh: `“那几内亚呢？博法？拉贝？法拉纳？洛拉？”`,
    },
    {
      id: "silence-joel",
      voix: "recit",
      fr: `Le silence tomba d'un coup. Les bras redescendirent. Les regards cherchèrent le sol, le sac à la fenêtre, n'importe quoi.

Ce fut Joël qui osa, à mi-voix :

— Il paraît que ça, c'est pour la 10ᵉ année, Monsieur.

Personne ne rit. Tout le monde sentit que la phrase était plus lourde qu'elle n'en avait l'air.`,
      en: `The silence fell all at once. The arms went back down. The gazes looked for the floor, the bag at the window, anything. It was Joël who dared, in a low voice: "It seems that's for 10th grade, sir." Nobody laughed. Everyone felt that the sentence was heavier than it seemed.`,
      ar: `سقط الصمت فجأة. انخفضت الأذرع. بحثت النظرات عن الأرض، عن الكيس في النافذة، عن أي شيء. "Joël" هو الذي تجرأ، بصوت منخفض: "يبدو أن هذا لمنهج السنة العاشرة، يا سيدي". لم يضحك أحد. شعر الجميع أن الجملة أثقل مما تبدو.`,
      zh: `沉默瞬间降临。手臂放下了。目光搜寻着地板、窗户上的袋子，任何东西。Joël小声鼓起勇气说道：“老师，那好像是十年级学的。”没人笑。每个人都感觉到这句话比表面听起来更沉重。`,
    },
    {
      id: "relance-simandou-1",
      voix: "visiteur",
      fr: `— Qui a déjà entendu parler de Simandou ?`,
      en: `"Who has already heard of Simandou?"`,
      ar: `"من سمع من قبل عن سيماندو؟"`,
      zh: `“谁听说过西芒杜？”`,
    },
    {
      id: "mains-relevent",
      voix: "recit",
      fr: `Toutes les mains se relevèrent — celle-là, ils la connaissaient, le mot était partout.`,
      en: `All the hands went back up—that one, they knew, the word was everywhere.`,
      ar: `ارتفعت كل الأيدي مجدداً—هذه الكلمة كانوا يعرفونها، كانت الكلمة في كل مكان.`,
      zh: `所有的手又举了起来——这个词他们很熟悉，到处都是这个词。`,
    },
    {
      id: "relance-simandou-2",
      voix: "visiteur",
      fr: `— Et qui peut me dire ce que c'est ?`,
      en: `"And who can tell me what it is?"`,
      ar: `"ومن يستطيع أن يخبرني ما هي؟"`,
      zh: `“谁能告诉我那是什么？”`,
    },
    {
      id: "fatoumata-simandou",
      voix: "recit",
      fr: `Et les mains retombèrent, une à une. Fatoumata ouvrit la bouche, la referma. Un garçon murmura « Simandou 2040… » puis s'arrêta, pas sûr. Le mot que tout le monde avait entendu, personne ne savait le remplir.`,
      en: `And the hands fell again, one by one. Fatoumata opened her mouth, closed it. A boy whispered "Simandou 2040..." then stopped, unsure. The word that everyone had heard, no one knew how to fill.`,
      ar: `وسقطت الأيدي مرة أخرى، الواحدة تلو الأخرى. فتحت "Fatoumata" فمها، ثم أغلقته. همس فتى "سيماندو 2040..." ثم توقف، غير متأكد. الكلمة التي سمعها الجميع، لم يعرف أحد كيف يملؤها.`,
      zh: `手又一个接一个地放下了。Fatoumata张了张嘴，又合上了。一个男孩低声嘀咕“西芒杜 2040……”然后停住了，不确定。每个人都听过的这个词，没有人知道如何解读。`,
    },
    {
      id: "relance-tour-de-table",
      voix: "visiteur",
      fr: `— Imaginons que vous soyez à ma place : que feriez-vous ?`,
      en: `"Let's imagine you were in my place: what would you do?"`,
      ar: `"لنتخيل أنكم في مكاني: ماذا ستفعلون؟"`,
      zh: `“想象一下，如果你坐在我的位置：你会怎么做？”`,
    },
    {
      id: "tour-de-table",
      voix: "recit",
      fr: `Là, plus de silence. Les idées partirent, généreuses, désordonnées, vraies :

— Mbalia : « Je réparerais d'abord le tableau. On ne peut pas apprendre sur un mur gris. »
— Tchotcho : « Moi, j'apprendrais la Guinée avant l'Asie. Pas à la place. Avant. »
— Joël : « Je demanderais aux entreprises d'aider les écoles. »
— Et les centres de santé ! lança une voix.
— Et les terrains de football ! ajouta une autre, du tac au tac.
— Fatoumata, plus bas : « Moi, je ferais juste que le professeur vienne tous les jours. »

Un petit, au fond, sans lever la main :

— J'enverrais les meilleurs élèves dans les meilleures écoles du monde.
— Oui, mais qu'ils reviennent, dehh ! corrigea son voisin. Sinon… si on a de bonnes écoles ici, ça suffit déjà.

Quelqu'un rit, doucement, et le rire fit du bien. La classe venait de dire, sans le savoir, à peu près tout le programme.`,
      en: `There, no more silence. The ideas flowed, generous, disorganized, true:

— Mbalia: "I would fix the blackboard first. You can't learn on a gray wall."
— Tchotcho: "Me, I would learn about Guinea before Asia. Not instead of. Before."
— Joël: "I would ask companies to help schools."
— "And health centers!" shouted a voice.
— "And football fields!" added another, back to back.
— Fatoumata, lower: "Me, I would just make sure the teacher comes every day."

A little one, at the back, without raising his hand:

— "I would send the best students to the best schools in the world."
— "Yes, but let them come back, dehh!" corrected his neighbor. "Otherwise... if we have good schools here, that's already enough."

Someone laughed, gently, and the laughter felt good. The class had just said, without knowing it, almost the entire program.`,
      ar: `هنا، انتهى الصمت. انطلقت الأفكار، سخية، غير منظمة، حقيقية:

— Mbalia: "سأصلح السبورة أولاً. لا يمكننا التعلم على جدار رمادي".
— Tchotcho: "أنا، سأتعلم عن غينيا قبل آسيا. ليس بدلاً منها. قبلها".
— Joël: "سأطلب من الشركات مساعدة المدارس".
— "ومراكز الصحة!" صاح صوت.
— "وملاعب كرة القدم!" أضاف آخر، بسرعة.
— Fatoumata، بصوت أخفض: "أنا، سأجعل المعلم يأتي كل يوم فقط".

صغير، في الخلف، دون رفع يده:

— "سأرسل أفضل الطلاب إلى أفضل المدارس في العالم".
— "نعم، ولكن بشرط أن يعودوا!" صحح له جاره. "وإلا... إذا كان لدينا مدارس جيدة هنا، فهذا يكفي".

ضحك أحدهم برفق، وكانت الضحكة مريحة. كان الفصل قد قال للتو، دون أن يدري، البرنامج بأكمله تقريباً.`,
      zh: `不再有沉默。想法喷涌而出，慷慨、杂乱、真实：

— Mbalia：“我会先修理黑板。你不能在灰色的墙上学习。”
— Tchotcho：“我，我会先学几内亚再学亚洲。不是代替。是先学。”
— Joël：“我会请求企业帮助学校。”
— “还有卫生中心！”一个声音喊道。
— “还有足球场！”另一个声音立即接道。
— Fatoumata小声说：“我嘛，我只会确保老师每天都来。”

后排的一个小男孩，没举手：

— “我会把最好的学生送到世界上最好的学校去。”
— “对，但要让他们回来，喂！”邻座纠正道，“不然……如果我们这里有好的学校，这就足够了。”

有人轻轻地笑了，笑声让人感觉很好。班级在不知不觉中说出了几乎整个计划。`,
    },
    {
      id: "declenche",
      voix: "visiteur",
      fr: `Après ces échanges précieux, le Président sortit de la classe, le cœur rempli par la générosité des enfants.

En marchant dans le couloir, il se pencha vers son Directeur et chuchota : « Simandou Academy doit toucher tous les enfants, vraiment tous. Passons aux choses sérieuses : il nous faut une idée, comme un grand concours, qui aura un vrai impact, aujourd'hui et pour longtemps. »

Puis il se tourna vers le DPE et le Directeur qui semblaient un peu mal à l'aise, comme s'ils voulaient se faire tout petits. Il les questionna doucement : « Est-ce que cela aide vraiment nos enfants à découvrir l'Asie ou l'Amérique avant de connaître les trésors de leur propre pays ou de leur région ? »

La question était posée, sans besoin de réponse. Le Président se tourna alors vers son chargé de communication avec un sourire déterminé : « Ici, c'est l'endroit parfait. Nous pouvons tourner maintenant ! »`,
      en: `After these precious exchanges, the President left the class, his heart filled by the children's generosity. While walking in the hallway, he leaned toward his Director and whispered: "Simandou Academy must reach all the children, really all of them. Let's move on to serious things: we need an idea, like a big competition, which will have a real impact, today and for a long time." Then he turned to the DPE and the Director who seemed a little uncomfortable, as if they wanted to make themselves small. He questioned them gently: "Does this really help our children discover Asia or America before they know the treasures of their own country or their region?" The question was asked, with no need for an answer. The President then turned to his communications officer with a determined smile: "Here, it's the perfect place. We can film now!"`,
      ar: `بعد هذه التبادلات الثمينة، خرج الرئيس من الفصل، وقلبه ممتلئ بسخاء الأطفال. وهو يمشي في الممر، انحنى نحو مديره وهمس: "يجب أن تصل أكاديمية سيماندو إلى كل الأطفال، حقاً كل الأطفال. لننتقل إلى الأمور الجدية: نحتاج إلى فكرة، مثل مسابقة كبرى، يكون لها أثر حقيقي، اليوم ولفترة طويلة". ثم التفت نحو مدير التعليم والمدير اللذين بديا غير مرتاحين قليلاً، وكأنهما يريدان تصغير نفسيهما. سألهما برفق: "هل يساعد هذا حقاً أطفالنا على اكتشاف آسيا أو أمريكا قبل أن يعرفوا كنوز بلدهم أو منطقتهم؟" طُرح السؤال، دون حاجة لإجابة. التفت الرئيس حينها نحو مسؤول الاتصال بابتسامة حازمة: "هنا، هو المكان المثالي. يمكننا التصوير الآن!"`,
      zh: `在这些珍贵的交流之后，总统走出了教室，心中充满了孩子们的慷慨。在走廊里走着，他俯身对他的主任耳语：“西芒杜学院必须触及所有的孩子，真的是所有的孩子。让我们来做点正经事：我们需要一个想法，比如一场真正有影响力的大赛，在今天和未来很长一段时间内发挥作用。”然后他转向那些显得有些不自在、似乎想把自己变得很小的主管和校长。他温和地质问他们：“这真的能帮助我们的孩子在了解自己国家或地区的宝藏之前，先去发现亚洲或美洲吗？”问题提出来了，不需要回答。总统随后带着坚定的微笑转向他的通讯负责人：“这里，是完美的地方。我们现在可以开拍了！”`,
    },
    {
      id: "apres",
      voix: "recit",
      fr: `Quand la porte se referma, la classe resta un instant sans un bruit, comme si l'air avait changé d'épaisseur.

Puis les chuchotis repartirent. Mbalia regardait le tableau gris autrement. Tchotcho répétait tout bas : « avant, pas à la place ». Joël fixait la fenêtre au sac, du côté où passait, quelque part, la grande ligne.

Fatoumata, elle, ne dit rien. Elle ouvrit son cahier à une page neuve et, tout en haut, écrivit deux mots, lentement, pour ne pas les oublier :

notre pays.`,
      en: `When the door closed, the class remained for a moment without a sound, as if the air had changed thickness. Then the whispers started again. Mbalia looked at the gray board differently. Tchotcho repeated under his breath: "before, not instead of." Joël stared at the window with the bag, on the side where, somewhere, the great line passed. Fatoumata, for her part, said nothing. She opened her notebook to a new page and, at the very top, wrote two words, slowly, so as not to forget them: our country.`,
      ar: `عندما أُغلق الباب، بقي الفصل للحظة دون صوت، وكأن الهواء تغيرت كثافته. ثم عادت الهمسات. كانت "Mbalia" تنظر إلى السبورة الرمادية بطريقة مختلفة. كان "Tchotcho" يكرر بصوت خافت: "قبلها، ليس بدلاً منها". كان "Joël" يحدق في النافذة ذات الكيس، من الجانب الذي يمر فيه، في مكان ما، الخط الكبير. أما "Fatoumata"، فلم تقل شيئاً. فتحت دفترها على صفحة جديدة، وفي الأعلى، كتبت كلمتين ببطء، حتى لا تنساها: بلدنا.`,
      zh: `当门关上时，教室里静了一会儿，仿佛空气的密度都变了。然后窃窃私语声又开始了。Mbalia看着那块灰色黑板的眼光不同了。Tchotcho低声重复着：“先学，不是代替”。Joël盯着窗户上的袋子，看向那条伟大路线经过的地方。Fatoumata什么也没说。她翻开笔记本写下新的一页，在最顶端，慢慢地写下两个字，以免忘记：我们的国家。`,
    },
  ],
};

export default g2040Tome0;
