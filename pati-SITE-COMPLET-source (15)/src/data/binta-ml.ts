// « Binta Diallo — La Dame Oiseau » : texte du livre L'Atelier Solidaire,
// structuré en 12 sections alignées sur 4 langues (source : PDF officiel FR).
export type BintaLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[] };
type Book = { lang: BintaLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const BINTA_ML: Record<BintaLang, Book> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Binta Diallo — La Dame Oiseau",
    sections: [
      { id: "intro", title: "La Dame Oiseau", image: "/images/planches/binta-01.webp", paragraphs: [
        "Ce livre te raconte l'histoire de Binta Diallo, une jeune fille qui avait la tête dans les nuages… et, au fond du cœur, une grande ambition : devenir pilote." ] },
      { id: "labe", title: "Une petite fille de Labé", image: "/images/planches/binta-02.webp", paragraphs: [
        "Dans un petit village de Labé, au cœur du Fouta-Djalon, vivait une petite fille nommée Binta.",
        "Elle aimait regarder le ciel. Chaque avion qui passait au-dessus de sa tête la fascinait.",
        "« Un jour, se disait-elle, je volerai moi aussi ! »" ] },
      { id: "ecole", title: "Travailler dur à l'école", image: "/images/planches/binta-03.webp", paragraphs: [
        "Binta grandissait, et son rêve ne la quittait jamais. À l'école, elle étudiait beaucoup.",
        "Elle savait que, pour devenir pilote, elle devait être très forte en mathématiques et en sciences." ] },
      { id: "president", title: "Devant le Président", image: "/images/planches/binta-04.webp", paragraphs: [
        "À cette époque, les filles n'avaient pas le droit de devenir pilotes. On refusa même à Binta sa demande de bourse.",
        "Mais Binta ne renonça pas : elle fit tout pour rencontrer le Président Sékou Touré.",
        "— Monsieur le Président, je veux être pilote !",
        "— Mais… les filles ne pilotent pas !",
        "— Monsieur le Président, je suis très forte ! J'aime les avions, et je veux faire voler les avions de Guinée !" ] },
      { id: "audace", title: "Une idée audacieuse", image: "/images/planches/binta-05.webp", paragraphs: [
        "Le Président la regarda longtemps. Il était impressionné par sa détermination.",
        "— C'est une idée audacieuse, Binta. Il y aura beaucoup de difficultés.",
        "— Je suis prête, Camarade !",
        "— Très bien, Binta. Montre au monde ce que tu sais faire. Nous allons envoyer des demandes de bourses." ] },
      { id: "russie", title: "Cap sur la Russie", image: "/images/planches/binta-06.webp", paragraphs: [
        "Pour réaliser son rêve, Binta partit loin de Labé, loin de la Guinée, jusqu'en Russie, pour apprendre à piloter." ] },
      { id: "formation", title: "Une formation difficile", image: "/images/planches/binta-07.webp", paragraphs: [
        "La formation était difficile… mais Binta était déterminée !" ] },
      { id: "parachute", title: "Le saut en parachute", image: "/images/planches/binta-08.webp", paragraphs: [
        "Un jour, pendant les évaluations, Binta était prête pour le saut en parachute. Mais l'instructeur lui dit :",
        "— Binta, on te dispense du saut. Tu auras quand même la moyenne.",
        "Binta était déçue : elle avait travaillé aussi dur que les garçons !",
        "— Non ! Je veux sauter comme tout le monde ! Je veux la meilleure note, pas une moyenne facile !",
        "L'instructeur hésita. Binta était si courageuse ! — Très bien, Binta. Mais fais attention !",
        "Binta sourit. Elle allait sauter, et montrer à tous qu'une fille pouvait être aussi brave qu'un garçon !" ] },
      { id: "diplome", title: "Le grand jour", image: "/images/planches/binta-09.webp", paragraphs: [
        "Enfin, le grand jour arriva : Binta reçut son diplôme de pilote !",
        "Elle devenait la première femme de Guinée et d'Afrique noire à devenir pilote !" ] },
      { id: "capitaine", title: "Capitaine Binta", image: "/images/planches/binta-10.webp", paragraphs: [
        "De retour en Guinée, après des épreuves de terrain au plus haut niveau, Binta devint Capitaine de l'armée de l'air." ] },
      { id: "pilote-president", title: "La pilote du Président", image: "/images/planches/binta-11.webp", paragraphs: [
        "Notre héroïne devint la pilote personnelle du Président et transporta d'importantes personnalités du monde entier.",
        "On l'appelait Binta Pilote, « la Dame Oiseau »." ] },
      { id: "ton-reve", title: "Et toi, quel est ton rêve ?", image: "/images/planches/binta-12.webp", paragraphs: [
        "Binta a montré au monde entier que les filles peuvent réaliser leurs rêves, même les plus grands.",
        "Son histoire inspire beaucoup de jeunes filles partout dans le monde. La Dame Oiseau a toujours suivi son rêve.",
        "Et toi, quel est ton rêve ?" ] },
    ],
  },
  en: {
    lang: "en", dir: "ltr", label: "English", bookTitle: "Binta Diallo — The Bird Lady",
    sections: [
      { id: "intro", title: "The Bird Lady", paragraphs: [
        "This book tells the story of Binta Diallo, a young girl whose head was up in the clouds… and whose heart held one big dream: to become a pilot." ] },
      { id: "labe", title: "A Little Girl from Labé", paragraphs: [
        "In a small village in Labé, in the heart of Fouta-Djalon, there lived a little girl named Binta.",
        "She loved to watch the sky. Every plane that flew over her head fascinated her.",
        "\"One day,\" she told herself, \"I will fly too!\"" ] },
      { id: "ecole", title: "Working Hard at School", paragraphs: [
        "Binta grew up, and her dream never left her. At school, she studied very hard.",
        "She knew that to become a pilot, she had to be very strong in mathematics and science." ] },
      { id: "president", title: "Before the President", paragraphs: [
        "In those days, girls were not allowed to become pilots. Binta's scholarship request was even turned down.",
        "But Binta did not give up: she did everything she could to meet President Sékou Touré.",
        "— Mr President, I want to be a pilot!",
        "— But… girls don't fly planes!",
        "— Mr President, I am very good! I love planes, and I want to fly Guinea's planes!" ] },
      { id: "audace", title: "A Bold Idea", paragraphs: [
        "The President looked at her for a long time. He was impressed by her determination.",
        "— That is a bold idea, Binta. There will be many difficulties.",
        "— I am ready, Comrade!",
        "— Very well, Binta. Show the world what you can do. We will send scholarship requests." ] },
      { id: "russie", title: "Off to Russia", paragraphs: [
        "To make her dream come true, Binta travelled far from Labé, far from Guinea, all the way to Russia, to learn to fly." ] },
      { id: "formation", title: "Hard Training", paragraphs: [
        "The training was hard… but Binta was determined!" ] },
      { id: "parachute", title: "The Parachute Jump", paragraphs: [
        "One day, during the tests, Binta was ready for the parachute jump. But the instructor told her:",
        "— Binta, you don't have to jump. You'll still pass.",
        "Binta was disappointed: she had worked just as hard as the boys!",
        "— No! I want to jump like everyone else! I want the best grade, not an easy pass!",
        "The instructor hesitated. Binta was so brave! — All right, Binta. But be careful!",
        "Binta smiled. She would jump, and show everyone that a girl could be just as brave as a boy!" ] },
      { id: "diplome", title: "The Big Day", paragraphs: [
        "At last, the big day arrived: Binta received her pilot's diploma!",
        "She became the first woman from Guinea and from Black Africa to become a pilot!" ] },
      { id: "capitaine", title: "Captain Binta", paragraphs: [
        "Back in Guinea, after field tests at the highest level, Binta became a Captain in the air force." ] },
      { id: "pilote-president", title: "The President's Pilot", paragraphs: [
        "Our heroine became the President's personal pilot and flew important figures from all over the world.",
        "People called her Binta Pilote, \"the Bird Lady.\"" ] },
      { id: "ton-reve", title: "What About You?", paragraphs: [
        "Binta showed the whole world that girls can achieve their dreams, even the biggest ones.",
        "Her story inspires many young girls everywhere. The Bird Lady always followed her dream.",
        "And you — what is your dream?" ] },
    ],
  },
  ar: {
    lang: "ar", dir: "rtl", label: "العربية", bookTitle: "بنتا ديالو — سيدة الطيور",
    sections: [
      { id: "intro", title: "سيدة الطيور", paragraphs: [
        "يحكي لك هذا الكتاب قصة بنتا ديالو، فتاة صغيرة كان رأسها في الغيوم… وفي قلبها حلم كبير: أن تصبح طيّارة." ] },
      { id: "labe", title: "فتاة صغيرة من لابيه", paragraphs: [
        "في قرية صغيرة في لابيه، في قلب فوتا دجالون، عاشت فتاة صغيرة اسمها بنتا.",
        "كانت تحب النظر إلى السماء، وكل طائرة تمرّ فوق رأسها كانت تبهرها.",
        "«يومًا ما، قالت لنفسها، سأطير أنا أيضًا!»" ] },
      { id: "ecole", title: "الاجتهاد في المدرسة", paragraphs: [
        "كبرت بنتا، ولم يفارقها حلمها أبدًا. في المدرسة كانت تدرس كثيرًا.",
        "كانت تعرف أنها، لتصبح طيّارة، يجب أن تكون قوية جدًا في الرياضيات والعلوم." ] },
      { id: "president", title: "أمام الرئيس", paragraphs: [
        "في ذلك الزمان، لم يكن مسموحًا للفتيات أن يصبحن طيّارات، حتى إن طلبها للمنحة قوبل بالرفض.",
        "لكن بنتا لم تستسلم: بذلت كل ما تستطيع لتلتقي الرئيس سيكو توري.",
        "— سيادة الرئيس، أريد أن أصبح طيّارة!",
        "— لكن… الفتيات لا يقدن الطائرات!",
        "— سيادة الرئيس، أنا قوية جدًا! أحب الطائرات، وأريد أن أُطيّر طائرات غينيا!" ] },
      { id: "audace", title: "فكرة جريئة", paragraphs: [
        "نظر إليها الرئيس طويلًا، وقد أُعجب بعزيمتها.",
        "— إنها فكرة جريئة يا بنتا، وستكون هناك صعوبات كثيرة.",
        "— أنا مستعدة أيها الرفيق!",
        "— حسنًا يا بنتا، أرِ العالم ما تستطيعين فعله. سنرسل طلبات المنح." ] },
      { id: "russie", title: "نحو روسيا", paragraphs: [
        "لتحقّق حلمها، سافرت بنتا بعيدًا عن لابيه، بعيدًا عن غينيا، حتى روسيا، لتتعلّم قيادة الطائرات." ] },
      { id: "formation", title: "تدريب صعب", paragraphs: [
        "كان التدريب صعبًا… لكن بنتا كانت مصمّمة!" ] },
      { id: "parachute", title: "القفز بالمظلة", paragraphs: [
        "ذات يوم، أثناء الاختبارات، كانت بنتا مستعدة للقفز بالمظلة. لكن المدرّب قال لها:",
        "— بنتا، أنتِ مُعفاة من القفز، وستنجحين رغم ذلك.",
        "حزنت بنتا: لقد اجتهدت مثل الأولاد تمامًا!",
        "— لا! أريد أن أقفز مثل الجميع! أريد أعلى علامة، لا نجاحًا سهلًا!",
        "تردّد المدرّب. كانت بنتا شجاعة جدًا! — حسنًا يا بنتا، لكن انتبهي!",
        "ابتسمت بنتا. ستقفز، وتُري الجميع أن الفتاة يمكن أن تكون شجاعة مثل الولد تمامًا!" ] },
      { id: "diplome", title: "اليوم الكبير", paragraphs: [
        "وأخيرًا جاء اليوم الكبير: نالت بنتا شهادة الطيران!",
        "أصبحت أول امرأة من غينيا ومن إفريقيا السوداء تصبح طيّارة!" ] },
      { id: "capitaine", title: "النقيب بنتا", paragraphs: [
        "بعد عودتها إلى غينيا، وبعد اختبارات ميدانية على أعلى مستوى، أصبحت بنتا نقيبًا في سلاح الجو." ] },
      { id: "pilote-president", title: "طيّارة الرئيس", paragraphs: [
        "صارت بطلتنا الطيّارة الخاصة للرئيس، ونقلت شخصيات مهمة من كل أنحاء العالم.",
        "كان الناس ينادونها بنتا الطيّارة، «سيدة الطيور»." ] },
      { id: "ton-reve", title: "وأنتَ، ما هو حلمك؟", paragraphs: [
        "أرت بنتا العالم كله أن الفتيات يستطعن تحقيق أحلامهن، حتى أكبرها.",
        "قصتها تُلهم كثيرًا من الفتيات في كل مكان. سيدة الطيور تبعت حلمها دائمًا.",
        "وأنتَ، ما هو حلمك؟" ] },
    ],
  },
  zh: {
    lang: "zh", dir: "ltr", label: "中文", bookTitle: "宾塔·迪亚洛 — 飞鸟女士",
    sections: [
      { id: "intro", title: "飞鸟女士", paragraphs: [
        "这本书给你讲述宾塔·迪亚洛的故事——一个一心向往天空的小女孩，心里藏着一个大大的梦想：当一名飞行员。" ] },
      { id: "labe", title: "拉贝的小女孩", paragraphs: [
        "在富塔贾隆腹地的拉贝，一个小村庄里，住着一个名叫宾塔的小女孩。",
        "她喜欢仰望天空，每一架从头顶飞过的飞机都让她着迷。",
        "「总有一天，」她对自己说，「我也要飞上天！」" ] },
      { id: "ecole", title: "在学校刻苦学习", paragraphs: [
        "宾塔渐渐长大，梦想从未离开过她。在学校里，她非常用功。",
        "她知道，要想当飞行员，就必须在数学和科学上特别出色。" ] },
      { id: "president", title: "在总统面前", paragraphs: [
        "在那个年代，女孩子是不被允许当飞行员的，宾塔申请奖学金还被拒绝了。",
        "但宾塔没有放弃：她想尽办法去见塞古·杜尔总统。",
        "——总统先生，我想当飞行员！",
        "——可是……女孩子不开飞机呀！",
        "——总统先生，我很厉害！我热爱飞机，我要驾驶几内亚的飞机！" ] },
      { id: "audace", title: "一个大胆的主意", paragraphs: [
        "总统久久地注视着她，被她的决心打动了。",
        "——这是个大胆的主意，宾塔。会有很多困难。",
        "——我准备好了，同志！",
        "——很好，宾塔。让世界看看你的本领吧。我们会去申请奖学金。" ] },
      { id: "russie", title: "前往俄罗斯", paragraphs: [
        "为了实现梦想，宾塔离开拉贝，离开几内亚，一路远赴俄罗斯，去学习驾驶飞机。" ] },
      { id: "formation", title: "艰苦的训练", paragraphs: [
        "训练非常艰苦……但宾塔意志坚定！" ] },
      { id: "parachute", title: "跳伞", paragraphs: [
        "有一天，在考核中，宾塔已准备好跳伞。可是教官对她说：",
        "——宾塔，你可以不跳，照样能及格。",
        "宾塔很失望：她和男生们一样刻苦训练！",
        "——不！我要和大家一样跳！我要最高分，不要轻松的及格！",
        "教官犹豫了。宾塔太勇敢了！——好吧，宾塔，但要小心！",
        "宾塔笑了。她要跳下去，让所有人看到：女孩可以和男孩一样勇敢！" ] },
      { id: "diplome", title: "大日子", paragraphs: [
        "终于，大日子到了：宾塔拿到了飞行员证书！",
        "她成为几内亚、也是撒哈拉以南非洲第一位女飞行员！" ] },
      { id: "capitaine", title: "宾塔上尉", paragraphs: [
        "回到几内亚后，经过最高级别的实地考验，宾塔成为空军上尉。" ] },
      { id: "pilote-president", title: "总统的飞行员", paragraphs: [
        "我们的女英雄成了总统的专机飞行员，接送来自世界各地的重要人物。",
        "人们称她为宾塔机长，「飞鸟女士」。" ] },
      { id: "ton-reve", title: "那么你呢？", paragraphs: [
        "宾塔向全世界证明：女孩也能实现自己的梦想，哪怕是最大的梦想。",
        "她的故事激励着各地许许多多的女孩。飞鸟女士始终追随着自己的梦想。",
        "那么你呢，你的梦想是什么？" ] },
    ],
  },
};
