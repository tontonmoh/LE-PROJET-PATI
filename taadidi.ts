// Série « Taadidi » — première série de la collection Pati (cycle du rusé).
// Patrimoine immatériel de la basse côte, transmis par Kini Bangaly.
// Adaptation Pati ; versions AR/ZH = drafts à faire relire par des natifs.
// Ajouter un épisode = passer statut 'soon' -> 'live' + remplir reader. Rien d'autre.
export type Lang = "fr" | "en" | "ar" | "zh";
type RSection = { title: string; paragraphs: string[] };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };
export type Reader = Partial<Record<Lang, RBook>>;
export type Episode = {
  numero: number;
  titre: Record<Lang, string>;
  teaser?: Record<Lang, string>;
  statut: "live" | "soon";
  reader?: Reader;
};

export const TAADIDI_ACCENT = "#C8841E"; // or profond

const Q: Record<Lang, string> = { fr: "?", en: "?", ar: "؟", zh: "？" };

export const TAADIDI = {
  id: "taadidi",
  titre: "Taadidi",
  accroche: "Le cycle du rusé.",
  pitch:
    "Taadidi, un garçon trop malin pour son village, transforme chaque problème en bon tour — jusqu'au jour où sa ruse se retourne contre lui.",
  accent: TAADIDI_ACCENT,
  badge: "Pati Aventure · 10–12 ans",
  cover: "/images/taadidi-couverture.webp",
  provenance: "D'après le patrimoine immatériel de la basse côte, transmis par Kini Bangaly.",
  episodes: [
    {
      numero: 1, statut: "live",
      titre: { fr: "Taadidi et le partage du poisson", en: "Taadidi and the Sharing of the Fish", ar: "تاديدي وقِسمة السمكة", zh: "塔迪迪与分鱼" },
      teaser: { fr: "Un seul poisson, tout un village affamé : comment partager sans bagarre ?", en: "One fish, a whole hungry village: how to share without a fight?", ar: "سمكة واحدة وقريةٌ جائعة: كيف نقسّم دون شجار؟", zh: "一条鱼，一个饥饿的村庄：怎样分才不吵架？" },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Taadidi et le partage du poisson", sections: [
          { title: "La pêche du village", paragraphs: [
            "Au bord de la lagune vivait Taadidi, un garçon si malin qu'on disait de lui : « Méfie-toi, il pense déjà à demain. »",
            "Un matin, les pêcheurs ne rapportèrent qu'un seul gros poisson. Aussitôt, tout le village se disputa pour le partage." ] },
          { title: "La ruse de Taadidi", paragraphs: [
            "« Laissez-moi partager », dit Taadidi. Il posa le poisson sur une large feuille.",
            "« La tête pour le plus vieux, qui a le plus de sagesse. La queue pour le plus jeune, qui a le plus à grandir. Et le milieu pour tous, à cuire en sauce pour le repas commun. »" ] },
          { title: "La leçon", paragraphs: [
            "Personne ne pouvait protester : chacun avait sa part, et le village mangea ensemble.",
            "Ce soir-là, on comprit que la ruse de Taadidi ne servait pas qu'à lui — parfois, elle rapprochait tout le monde." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Taadidi and the Sharing of the Fish", sections: [
          { title: "The village's catch", paragraphs: [
            "By the lagoon lived Taadidi, a boy so clever that people said of him: “Watch out — he is already thinking about tomorrow.”",
            "One morning the fishermen brought back a single big fish. At once, the whole village quarrelled over how to share it." ] },
          { title: "Taadidi's trick", paragraphs: [
            "“Let me share it,” said Taadidi. He laid the fish on a broad leaf.",
            "“The head for the eldest, who has the most wisdom. The tail for the youngest, who has the most growing to do. And the middle for everyone, cooked in sauce for the shared meal.”" ] },
          { title: "The lesson", paragraphs: [
            "No one could protest: each had a share, and the village ate together.",
            "That evening, people understood that Taadidi's cleverness did not serve only him — sometimes, it brought everyone closer." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "تاديدي وقِسمة السمكة", sections: [
          { title: "صيد القرية", paragraphs: [
            "على ضفّة البحيرة عاش تاديدي، صبيٌّ شديد الذكاء حتى قيل عنه: «احذر، فهو يفكّر في الغد من الآن.»",
            "في صباح أحد الأيام، لم يُحضر الصيّادون سوى سمكة كبيرة واحدة. فتنازعت القرية كلّها في الحال على تقسيمها." ] },
          { title: "حيلة تاديدي", paragraphs: [
            "قال تاديدي: «دعوني أقسّمها.» ووضع السمكة على ورقة عريضة.",
            "«الرأس لأكبر الناس سنًّا، فله أوفر الحكمة. والذيل لأصغرهم، فأمامه أكبر نموّ. والوسط للجميع، يُطبخ بالصلصة للوجبة المشتركة.»" ] },
          { title: "العِبرة", paragraphs: [
            "لم يستطع أحدٌ الاعتراض: لكلٍّ نصيبه، وأكلت القرية معًا.",
            "في تلك الأمسية، فهم الناس أنّ ذكاء تاديدي لا يخدمه وحده — بل يقرّب أحيانًا بين الجميع." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "塔迪迪与分鱼", sections: [
          { title: "村子的渔获", paragraphs: [
            "潟湖边住着塔迪迪，一个聪明得让人说「小心，他已经在盘算明天了」的男孩。",
            "一天早晨，渔夫们只带回一条大鱼。全村立刻为怎么分而争吵起来。" ] },
          { title: "塔迪迪的妙计", paragraphs: [
            "「让我来分，」塔迪迪说。他把鱼放在一片宽大的叶子上。",
            "「鱼头给最年长的人，他最有智慧；鱼尾给最年幼的人，他最需要成长；中间留给大家，煮成酱汁做一顿共餐。」" ] },
          { title: "教训", paragraphs: [
            "没有人能反对：人人有份，全村一起吃。",
            "那天晚上，大家明白了：塔迪迪的聪明不只为自己——有时，它让所有人更亲近。" ] },
        ] },
      },
    },
    {
      numero: 2, statut: "live",
      titre: { fr: "Taadidi et le tambour du chef", en: "Taadidi and the Chief's Drum", ar: "تاديدي وطبل الزعيم", zh: "塔迪迪与村长的鼓" },
      teaser: { fr: "Comment faire sonner un tambour qu'il est interdit de toucher ?", en: "How do you make a drum sound when no one may touch it?", ar: "كيف تجعل طبلًا يُحرَّم لمسه يُصدر صوته؟", zh: "一面禁止触碰的鼓，怎样才能让它响起来？" },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Taadidi et le tambour du chef", sections: [
          { title: "Le tambour interdit", paragraphs: [
            "Le chef du village avait un tambour magnifique que personne n'avait le droit de toucher.",
            "Taadidi en rêvait. « Un tambour qui ne sonne jamais, à quoi sert-il ? » se demandait-il." ] },
          { title: "La ruse", paragraphs: [
            "Taadidi alla voir le chef : « Grand chef, on raconte au marché que ton tambour est cassé et ne sonne plus. »",
            "Furieux, le chef voulut prouver le contraire. Il frappa le tambour devant tout le village — boum, boum, boum !" ] },
          { title: "Le rire du village", paragraphs: [
            "Le son roula sur la lagune, et les enfants se mirent à danser.",
            "Le chef comprit la ruse et rit à son tour : « Petit malin… Puisqu'il chante si bien, qu'il chante pour tous les jours de fête ! » Et le tambour ne se tut plus jamais." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Taadidi and the Chief's Drum", sections: [
          { title: "The forbidden drum", paragraphs: [
            "The village chief had a magnificent drum that no one was allowed to touch.",
            "Taadidi dreamed of it. “A drum that never sounds — what is it good for?” he wondered." ] },
          { title: "The trick", paragraphs: [
            "Taadidi went to the chief: “Great chief, they say at the market that your drum is broken and no longer sounds.”",
            "Furious, the chief wanted to prove otherwise. He struck the drum before the whole village — boom, boom, boom!" ] },
          { title: "The village laughs", paragraphs: [
            "The sound rolled across the lagoon, and the children began to dance.",
            "The chief saw the trick and laughed too: “Little rascal… Since it sings so well, let it sing for every feast day!” And the drum was never silent again." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "تاديدي وطبل الزعيم", sections: [
          { title: "الطبل المحرَّم", paragraphs: [
            "كان لزعيم القرية طبلٌ رائع لا يُسمح لأحدٍ بلمسه.",
            "وكان تاديدي يحلم به. «طبلٌ لا يُقرَع أبدًا، فما فائدته؟» يتساءل." ] },
          { title: "الحيلة", paragraphs: [
            "ذهب تاديدي إلى الزعيم: «أيّها الزعيم العظيم، يقولون في السوق إنّ طبلك مكسور ولم يعد يُصدر صوتًا.»",
            "غضب الزعيم وأراد أن يُثبت العكس، فقرع الطبل أمام القرية كلّها — بوم، بوم، بوم!" ] },
          { title: "ضحك القرية", paragraphs: [
            "تدحرج الصوت على البحيرة، فأخذ الأطفال يرقصون.",
            "فهم الزعيم الحيلة وضحك بدوره: «يا صغيري الماكر… ما دام يغنّي بهذا الجمال، فليغنِّ في كلّ يوم عيد!» ولم يصمت الطبل بعدها أبدًا." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "塔迪迪与村长的鼓", sections: [
          { title: "禁止敲的鼓", paragraphs: [
            "村长有一面华美的鼓，谁也不许碰。",
            "塔迪迪很向往它。「一面从不响的鼓，有什么用呢？」他想。" ] },
          { title: "妙计", paragraphs: [
            "塔迪迪去见村长：「伟大的村长，集市上都说您的鼓坏了，再也响不起来了。」",
            "村长大怒，要证明并非如此。他当着全村的面敲起鼓来——咚，咚，咚！" ] },
          { title: "全村的笑声", paragraphs: [
            "鼓声在潟湖上回荡，孩子们跳起舞来。",
            "村长看穿了妙计，也笑了：「小机灵鬼……既然它唱得这么好，那就让它为每个节日而唱吧！」从此，那面鼓再也没有沉默。" ] },
        ] },
      },
    },
    {
      numero: 3, statut: "live",
      titre: { fr: "Taadidi pris à son propre jeu", en: "Taadidi Caught at His Own Game", ar: "تاديدي يقع في فخّ نفسه", zh: "塔迪迪自食其果" },
      teaser: { fr: "Le plus malin du village peut-il être pris à son propre piège ?", en: "Can the village's cleverest boy be caught in his own trap?", ar: "هل يمكن لأذكى فتى في القرية أن يقع في فخّه؟", zh: "村里最聪明的男孩，会掉进自己的陷阱吗？" },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Taadidi pris à son propre jeu", sections: [
          { title: "Trop sûr de lui", paragraphs: [
            "À force de gagner, Taadidi se croyait le plus malin du monde.",
            "« Personne ne peut me tromper », répétait-il. Sa grand-mère souriait sans rien dire." ] },
          { title: "Le pari", paragraphs: [
            "Un vieux pêcheur lui proposa un pari : « Garde les yeux ouverts une nuit entière près du feu, et la pirogue est à toi. »",
            "Taadidi accepta, sûr de lui. Mais la nuit est longue, et le feu est doux…" ] },
          { title: "La vraie leçon", paragraphs: [
            "Au matin, Taadidi dormait profondément. Le vieux rit tout doucement.",
            "« La ruse est un bon outil, dit la grand-mère, mais elle ne remplace ni le repos ni l'humilité. » Pour une fois, Taadidi n'eut rien à répondre — et c'est ce jour-là qu'il devint vraiment sage." ] },
        ] },
        en: { lang: "en", dir: "ltr", label: "English", bookTitle: "Taadidi Caught at His Own Game", sections: [
          { title: "Too sure of himself", paragraphs: [
            "From winning so often, Taadidi believed himself the cleverest in the world.",
            "“No one can fool me,” he kept saying. His grandmother smiled and said nothing." ] },
          { title: "The wager", paragraphs: [
            "An old fisherman offered him a bet: “Keep your eyes open one whole night by the fire, and the canoe is yours.”",
            "Taadidi accepted, sure of himself. But the night is long, and the fire is gentle…" ] },
          { title: "The real lesson", paragraphs: [
            "In the morning, Taadidi was fast asleep. The old man laughed softly.",
            "“Cleverness is a fine tool,” said his grandmother, “but it replaces neither rest nor humility.” For once, Taadidi had nothing to answer — and that is the day he truly became wise." ] },
        ] },
        ar: { lang: "ar", dir: "rtl", label: "العربية", bookTitle: "تاديدي يقع في فخّ نفسه", sections: [
          { title: "واثقٌ من نفسه أكثر من اللازم", paragraphs: [
            "من كثرة الفوز، ظنّ تاديدي نفسه أذكى أهل الأرض.",
            "«لا أحد يستطيع خداعي»، يكرّر. وكانت جدّته تبتسم ولا تقول شيئًا." ] },
          { title: "الرهان", paragraphs: [
            "عرض عليه صيّادٌ عجوز رهانًا: «ابقِ عينيك مفتوحتين ليلةً كاملة قرب النار، ويكون الزورق لك.»",
            "قبِل تاديدي واثقًا من نفسه. لكنّ الليل طويل، والنار دافئةٌ لطيفة…" ] },
          { title: "العِبرة الحقيقية", paragraphs: [
            "في الصباح، كان تاديدي غارقًا في النوم. ضحك العجوز بهدوء.",
            "«الذكاء أداةٌ جيّدة»، قالت الجدّة، «لكنّه لا يُغني عن الراحة ولا عن التواضع.» وللمرّة الأولى، لم يجد تاديدي ما يردّ — وفي ذلك اليوم صار حكيمًا حقًّا." ] },
        ] },
        zh: { lang: "zh", dir: "ltr", label: "中文", bookTitle: "塔迪迪自食其果", sections: [
          { title: "太过自信", paragraphs: [
            "因为常常获胜，塔迪迪自以为是世界上最聪明的人。",
            "「没有人能骗到我，」他常这么说。祖母只是微笑，什么也不说。" ] },
          { title: "打赌", paragraphs: [
            "一位老渔夫向他提出打赌：「在火堆旁睁眼守一整夜，独木舟就归你。」",
            "塔迪迪满怀自信地答应了。可是夜很长，火很温柔……" ] },
          { title: "真正的教训", paragraphs: [
            "清晨，塔迪迪睡得正香。老人轻轻地笑了。",
            "「聪明是把好工具，」祖母说，「但它既不能代替休息，也不能代替谦逊。」这一次，塔迪迪无言以对——而正是那天，他才真正变得有智慧。" ] },
        ] },
      },
    },
    {
      numero: 4, statut: "soon",
      titre: Q,
      teaser: { fr: "Taadidi promet la lune au marché… et doit tenir parole.", en: "Taadidi promises the moon at the market… and must keep his word.", ar: "تاديدي يَعِد بالقمر في السوق… وعليه أن يفي بوعده.", zh: "塔迪迪在集市上许下天大的承诺……而他必须兑现。" },
    },
    { numero: 5, statut: "soon", titre: Q },
    { numero: 6, statut: "soon", titre: Q },
    { numero: 7, statut: "soon", titre: Q },
    { numero: 8, statut: "soon", titre: Q },
    { numero: 9, statut: "soon", titre: Q },
    { numero: 10, statut: "soon", titre: Q },
    { numero: 11, statut: "soon", titre: Q },
    { numero: 12, statut: "soon", titre: Q },
  ] as Episode[],
};
