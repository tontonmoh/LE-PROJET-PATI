// =============================================================================
//  GÉNÉRATION 2040 — Tome 4 : « La Graine et l'Huile »
//  Fichier de données Pati (même structure que g2040-tome1/2/3.ts)
// -----------------------------------------------------------------------------
//  ÉTAT : FR + EN remplis (texte entièrement de Claude — pas de figure réelle).
//         AR + ZH = BROUILLONS de Claude → À FAIRE RELIRE par un natif avant
//         de passer le statut à "pret" (même exigence que Tomes 0-3).
//  Noms INVARIANTS en latin dans les 4 langues : Saran, Hawa, Dabola,
//  Simandou Academy, « Huile de Dabola » (marque, gardée telle quelle).
//  Ancrage : l'HUILERIE DE DABOLA EXISTE DÉJÀ (usine d'arachide « Sincéry »,
//  vitrine de la préfecture, relancée 2014) ; le goulot réel = l'approvisionnement
//  en grain → l'histoire = la NOURRIR (cultiver assez + garder le grain), non la
//  construire. Gare de l'ancienne Ligne du Niger (Conakry-Kankan) qui renaît.
// =============================================================================

import type { LivreG2040, SectionG2040 } from "./g2040-tome1";

export const g2040Tome4: LivreG2040 = {
  slug: "g2040-graine-et-huile",
  serie: "generation-2040",
  ordre: 4,
  statut: "en_production", // FR + EN prêts ; AR/ZH = brouillons à faire relire
  titre: {
    fr: "La Graine et l'Huile",
    en: "The Seed and the Oil",
    ar: "البذرة والزيت",
    zh: "种子与油",
  },
  lieu: "Dabola",
  sousCollection: "Aventure",
  age: "dès 12 ans",
  odd: [9, 12],
  pilier: "Agriculture, industrie alimentaire & commerce (transformation locale)",
  couverture: "/images/g2040-tome4-couverture.webp",
  meta: {
    tagline: {
      fr: "À Dabola, l'arachide part nue et l'huile revient chère. L'usine, elle, est là — elle a juste faim. Et si on la nourrissait ?",
      en: "In Dabola, the peanut leaves bare and the oil comes back dear. The mill is right there — it is only hungry. What if we fed it?",
      ar: "في Dabola، يخرج الفول السوداني عاريًا ويعود الزيت غاليًا. أمّا المصنع، فهو هنا — إنه جائعٌ فقط. فماذا لو أطعمناه؟",
      zh: "在 Dabola，花生赤裸裸地运出去，油却昂贵地买回来。可榨油厂就在这儿——它只是饿了。我们何不喂饱它呢？",
    },
    blurb: {
      fr: [
        "Dabola, au cœur du pays, avait deux fiertés : sa gare — la première grande gare du bassin du Niger — et sa grande huilerie d'arachide. Aujourd'hui la gare dort, rails disparus ; et l'usine tourne au ralenti, faute de graines.",
        "Au marché, Saran observe un manège absurde : on charge l'arachide brute, vendue pour presque rien, et on décharge des bouteilles d'huile, chères, venues d'ailleurs. La même arachide, partie nue, revenue habillée.",
        "Pour le concours de la Simandou Academy, sa classe trouve l'Objectif : nourrir l'usine au lieu de vendre la graine ; presser l'huile ici ; et réveiller la gare pour que la Ligne emporte des bouteilles pleines, pas des sacs bradés.",
        "Un livre sur la transformation locale, le travail qui reste au pays et la fierté retrouvée. Génération 2040 · dès 12 ans.",
      ],
      en: [
        "Dabola, in the heart of the country, had two prides: its station — the first great station of the Niger basin — and its big peanut oil mill. Today the station sleeps, its rails gone; and the mill runs at half-speed, short of seed.",
        "At the market, Saran watches an absurd dance: raw peanut is loaded up, sold for almost nothing, while bottles of oil are unloaded, expensive, come from elsewhere. The same peanut, leaving bare, returning dressed.",
        "For the Simandou Academy contest, her class finds its Objective: feed the mill instead of selling the seed; press the oil here; and wake the station, so the Line carries full bottles, not cut-price sacks.",
        "A book about local processing, work that stays in the country, and pride regained. Génération 2040 · ages 12 and up.",
      ],
      ar: [
        "كانت لـ Dabola، في قلب البلد، فخران: محطّتها — أولى محطّات حوض النيجر الكبرى — ومصنعها الكبير لزيت الفول السوداني. أمّا اليوم، فالمحطّة نائمة وقد اختفت قضبانها؛ والمصنع يعمل بنصف طاقته، لقلّة البذور.",
        "في السوق، تراقب Saran رقصةً عبثية: يُحمَّل الفول السوداني خامًا فيُباع بأبخس ثمن، وتُفرَّغ زجاجات الزيت غاليةً قادمةً من مكانٍ آخر. الفول نفسه: يخرج عاريًا، ويعود مكسوًّا.",
        "ومن أجل مسابقة Simandou Academy، يجد صفّها هدفه: أن نُطعم المصنع بدل أن نبيع البذرة؛ أن نعصر الزيت هنا؛ وأن نوقظ المحطّة، كي يحمل الخطّ زجاجاتٍ ملأى، لا أكياسًا مباعةً بثمنٍ بخس.",
        "كتابٌ عن التحويل المحلّي، والعمل الذي يبقى في البلد، والكرامة المستعادة. Génération 2040 · من 12 سنة فما فوق.",
      ],
      zh: [
        "Dabola 地处全国中心，曾有两样骄傲：它的火车站——尼日尔河流域的第一座大站——和它那座大花生榨油厂。如今车站沉睡，铁轨不知去向；榨油厂则因缺少花生，只开半工。",
        "在集市上，Saran 看着一幕荒唐的景象：生花生被装车运走，贱卖得几乎不值钱；一瓶瓶油却被卸下来，价格高昂，来自别处。同样的花生，赤裸裸地出去，穿戴整齐地回来。",
        "为了 Simandou Academy 的比赛，全班找到了「目标」：与其卖掉种子，不如喂饱工厂；把油榨在这里；再唤醒车站，让铁路运走的是满瓶的油，而不是贱卖的麻袋。",
        "一本关于本地加工、把劳动留在国内、重拾骄傲的书。Génération 2040 · 适合 12 岁以上。",
      ],
    },
  },
  sections: [
    {
      id: "gare-et-huilerie",
      voix: "recit",
      fr: `Dabola est posée au milieu du pays, là où toutes les routes se croisent.

Autrefois, deux fiertés faisaient battre la ville. La gare d'abord : Dabola était la première grande gare du bassin du Niger, et les wagons repartaient pleins vers la mer. L'huilerie ensuite — la grande usine d'arachide, la vitrine de la ville, où tant de familles avaient gagné leur vie. La grand-mère de Saran se souvient des deux.

Aujourd'hui, la gare dort : les rails ont disparu, et l'herbe a repris le quai. Et l'usine tourne au ralenti, presque à l'arrêt — non qu'elle soit cassée, mais parce qu'on ne lui apporte plus assez de graines.

Autour de la ville, pourtant, à perte de vue, il y a les champs. Quand l'appel de la Simandou Academy arriva, Saran regarda la gare endormie, l'usine assoupie, puis les champs — et sentit que tous les trois avaient quelque chose à se dire.`,
      en: `Dabola sits in the middle of the country, where all the roads cross.

Long ago, two prides made the town's heart beat. The station first: Dabola was the first great station of the Niger basin, and the wagons left full toward the sea. Then the oil mill — the big peanut factory, the town's showcase, where so many families had earned their living. Saran's grandmother remembers them both.

Today, the station sleeps: the rails are gone, and the grass has taken back the platform. And the mill runs at half-speed, almost stopped — not because it is broken, but because no one brings it enough seed anymore.

All around the town, though, as far as the eye can see, there are the fields. When the call of the Simandou Academy arrived, Saran looked at the sleeping station, the dozing mill, then the fields — and felt that all three had something to say to one another.`,
      ar: `تقع Dabola في وسط البلد، حيث تتقاطع كلّ الطرق.

قديمًا، كان فخران يجعلان قلب المدينة ينبض. المحطّة أولًا: كانت Dabola أولى محطّات حوض النيجر الكبرى، ومنها تنطلق العربات ملأى نحو البحر. ثمّ المصنع — مصنع الفول السوداني الكبير، واجهة المدينة، حيث كسبت عائلاتٌ كثيرة رزقها. تتذكّر جدّة Saran كليهما.

أمّا اليوم، فالمحطّة نائمة: اختفت القضبان، وغطّى العشب الرصيف. والمصنع يعمل بنصف طاقته، يكاد يتوقّف — لا لأنه معطوب، بل لأنّ أحدًا لم يعد يجلب له ما يكفي من البذور.

ومع ذلك، حول المدينة، إلى ما لا تراه العين، هناك الحقول. حين وصل نداء Simandou Academy، نظرت Saran إلى المحطّة النائمة، والمصنع الغافي، ثمّ إلى الحقول — وشعرت أنّ للثلاثة شيئًا يقولونه لبعضهم.`,
      zh: `Dabola 坐落在全国的正中央，所有道路在此交汇。

很久以前，有两样骄傲让这座城市的心跳动。先是火车站：Dabola 曾是尼日尔河流域的第一座大站，一列列车厢满载着驶向大海。然后是榨油厂——那座大花生厂，城市的门面，曾有那么多家庭靠它谋生。Saran 的祖母对这两样都记得清清楚楚。

可如今，车站沉睡：铁轨不见了，月台重新长满了草。榨油厂也只开半工，几乎停了下来——不是因为它坏了，而是因为再没有人给它送来足够的花生。

然而，城市四周，一眼望不到尽头，是大片大片的田野。当 Simandou Academy 的号召传来时，Saran 望着沉睡的车站、打盹的工厂，再望向田野——她觉得，这三者之间，有话要说。`,
    },
    {
      id: "graine-et-huile",
      voix: "recit",
      fr: `Au marché, Saran observa un manège étrange.

D'un côté, on chargeait des sacs d'arachide brute, qui partaient loin, vendus pour presque rien. De l'autre, on déchargeait des bouteilles d'huile — brillantes, chères, avec une étiquette venue d'ailleurs.

— Grand-mère, demanda-t-elle, c'est la même arachide ?

— Bien sûr, soupira la vieille. Notre graine s'en va nue. Et notre huile nous revient habillée, au prix fort. On vend le plus dur — la terre, la sueur — et on rachète le meilleur.`,
      en: `At the market, Saran watched a strange dance.

On one side, sacks of raw peanut were being loaded, leaving far away, sold for almost nothing. On the other, bottles of oil were being unloaded — shiny, expensive, with a label come from elsewhere.

"Grandmother," she asked, "is it the same peanut?"

"Of course," sighed the old woman. "Our seed leaves bare. And our oil comes back to us dressed, at a high price. We sell the hardest part — the soil, the sweat — and we buy back the best."`,
      ar: `في السوق، راقبت Saran مشهدًا غريبًا.

من جهة، كانت تُحمَّل أكياس الفول السوداني الخام، فتذهب بعيدًا، مباعةً بأبخس ثمن. ومن جهة أخرى، كانت تُفرَّغ زجاجات الزيت — لامعةً غاليةً، عليها ملصقٌ قادمٌ من مكانٍ آخر.

— يا جدّتي، سألت، أهو الفول السوداني نفسه؟

— بالطبع، تنهّدت العجوز. بذرتنا تخرج عارية. وزيتنا يعود إلينا مكسوًّا، بثمنٍ غالٍ. نبيع الأصعب — الأرض والعرق — ونشتري الأطيب.`,
      zh: `在集市上，Saran 看着一幕奇怪的景象。

一边，一袋袋生花生被装上车，运往远方，贱卖得几乎不值钱。另一边，一瓶瓶油被卸下来——亮晶晶的，很贵，贴着来自别处的标签。

「祖母，」她问，「这是同样的花生吗？」

「当然，」老人叹了口气。「我们的种子赤裸裸地出去，我们的油却穿戴整齐地回来，要价不菲。我们卖掉最辛苦的——土地和汗水——再把最好的买回来。」`,
    },
    {
      id: "savoir-des-mains",
      voix: "recit",
      fr: `La grand-mère, elle, savait faire l'huile.

Elle pilait, chauffait, pressait, comme sa mère avant elle. L'huile qui coulait, dorée, sentait bon le pays. Mais à la main, une journée entière donnait à peine de quoi remplir quelques bouteilles.

— Le secret n'est pas dans la graine, dit-elle à Saran. Il est dans ce qu'on en fait. Seulement, mes mains sont lentes, et nous sommes trop peu.`,
      en: `The grandmother, for her part, knew how to make oil.

She pounded, heated, pressed, as her mother had before her. The oil that flowed, golden, smelled of the homeland. But by hand, a whole day barely yielded enough to fill a few bottles.

"The secret is not in the seed," she told Saran. "It is in what you make of it. Only, my hands are slow, and we are too few."`,
      ar: `أمّا الجدّة، فكانت تعرف كيف تصنع الزيت.

كانت تدقّ وتُسخّن وتعصر، كما فعلت أمّها من قبلها. والزيت السائل، الذهبيّ، كانت رائحته رائحة البلد. لكن باليد، كان اليوم بطوله بالكاد يكفي لملء بضع زجاجات.

— السرّ ليس في البذرة، قالت لـ Saran. السرّ في ما نصنعه منها. غير أنّ يديّ بطيئتان، ونحن قليلون جدًّا.`,
      zh: `至于祖母，她懂得怎么榨油。

她像她母亲当年那样，捣碎、加热、压榨。流出来的油，金黄金黄，闻起来就是家乡的味道。可全凭一双手，忙一整天也勉强只够装满几瓶。

「秘密不在种子里，」她对 Saran 说。「秘密在于你拿它做成什么。只是，我的手太慢了，我们的人也太少了。」`,
    },
    {
      id: "retour-tante-hawa",
      voix: "recit",
      fr: `Cette année-là, Tante Hawa était revenue au village.

Partie longtemps travailler à la ville, elle connaissait bien la grande huilerie — ses presses, ses moteurs, ses bidons. Elle écouta Saran et sa grand-mère, et sourit.

— Les machines sont là, dit-elle. Vos mains savent. Ce qui manque, ce n'est pas l'usine : c'est qu'on cultive assez d'arachide, et surtout qu'on la garde pour la presser ici, au lieu de la vendre nue à ceux qui partent. L'usine a faim. Nourrissons-la.`,
      en: `That year, Aunt Hawa had come back to the village.

Gone for a long time to work in the city, she knew the big oil mill well — its presses, its engines, its drums. She listened to Saran and her grandmother, and smiled.

"The machines are there," she said. "Your hands know how. What is missing is not the mill: it is that we grow enough peanut, and above all that we keep it to press it here, instead of selling it bare to those who leave. The mill is hungry. Let us feed it."`,
      ar: `في تلك السنة، كانت العمّة Hawa قد عادت إلى القرية.

غابت طويلًا للعمل في المدينة، فصارت تعرف المصنع الكبير جيّدًا — مكابسه ومحرّكاته وبراميله. أصغت إلى Saran وجدّتها، وابتسمت.

— الآلات موجودة، قالت. وأيديكم تعرف. ما ينقص ليس المصنع: بل أن نزرع ما يكفي من الفول السوداني، وقبل كلّ شيء أن نحتفظ به لنعصره هنا، بدل أن نبيعه عاريًا لمن يرحلون. المصنع جائع. فلنُطعمه.`,
      zh: `那一年，Hawa 姑姑回到了村里。

她在城里干了很久，对那座大榨油厂了如指掌——它的压榨机、马达、油桶。她听 Saran 和她祖母说完，笑了。

「机器都在，」她说。「你们的手也会做。缺的不是工厂：缺的是我们要种出足够的花生，更要紧的是把它留下来在这儿榨，而不是赤裸裸地卖给那些运走它的人。工厂饿了。我们来喂饱它。」`,
    },
    {
      id: "mot-de-saran",
      voix: "recit",
      fr: `Le jour de l'Objectif, la Maîtresse écrivit au tableau ce que Saran avait vu au marché :

ON VEND LA GRAINE

Saran se leva, et écrivit dessous :

ON VEND L'HUILE

— Même champ, même arachide, dit-elle. Mais si on presse l'huile ici, c'est le travail qui reste ici. Les machines, les emplois, l'argent — et l'étiquette, ce sera la nôtre.

Les idées jaillirent :

— On cultive plus d'arachide, et on l'apporte à notre usine au lieu de la vendre nue à ceux qui partent.
— On réveille l'huilerie : le savoir des femmes, les bras des jeunes — et rien ne se perd, l'huile pour nous, le tourteau pour le bétail.
— On réveille la gare : la Ligne qui renaît emportera des bouteilles pleines, pas des sacs bradés.
— Et nos jeunes n'auront plus besoin de partir chercher fortune ailleurs : la fortune se presse ici.

— Vendre sa graine, conclut Saran, c'est vendre sa peine. Vendre son huile, c'est vendre son génie.`,
      en: `On the day of the Objective, the teacher wrote on the board what Saran had seen at the market:

WE SELL THE SEED

Saran stood up, and wrote beneath it:

WE SELL THE OIL

"Same field, same peanut," she said. "But if we press the oil here, it is the work that stays here. The machines, the jobs, the money — and the label, it will be ours."

The ideas burst out:

"We grow more peanut, and we bring it to our own mill instead of selling it bare to those who leave."
"We wake the oil mill: the women's know-how, the young people's hands — and nothing is wasted, the oil for us, the press-cake for the livestock."
"We wake the station: the Line, reborn, will carry full bottles, not cut-price sacks."
"And our young people will no longer need to leave to seek their fortune elsewhere: the fortune is pressed right here."

"To sell your seed," Saran concluded, "is to sell your toil. To sell your oil is to sell your genius."`,
      ar: `في يوم الهدف، كتبت المعلّمة على السبّورة ما رأته Saran في السوق:

نَبيع البذرة

نهضت Saran، وكتبت تحتها:

نَبيع الزيت

— الحقل نفسه، والفول نفسه، قالت. لكن إن عصرنا الزيت هنا، فالعمل يبقى هنا. الآلات، والوظائف، والمال — والملصق سيكون ملصقنا.

تدفّقت الأفكار:

— نزرع المزيد من الفول السوداني، ونأتي به إلى مصنعنا بدل أن نبيعه عاريًا لمن يرحلون.
— نوقظ المصنع: معرفة النساء، وسواعد الشباب — ولا يضيع شيء، الزيت لنا، والكُسب للماشية.
— نوقظ المحطّة: الخطّ، إذ يُبعَث من جديد، سيحمل زجاجاتٍ ملأى، لا أكياسًا مباعةً بثمنٍ بخس.
— ولن يحتاج شبابنا بعد اليوم إلى الرحيل بحثًا عن الرزق في مكانٍ آخر: الرزق يُعصَر هنا.

— أن تبيع بذرتك، خلصت Saran، أن تبيع تعبك. وأن تبيع زيتك، أن تبيع نبوغك.`,
      zh: `在「目标」公布的那天，老师把 Saran 在集市上看到的写在了黑板上：

我们卖种子

Saran 站起来，在下面写道：

我们卖油

「同一片田，同样的花生，」她说。「可只要我们在这里把油榨出来，劳动就留在了这里。机器、工作、钱——还有标签，都将是我们自己的。」

主意一下子涌了出来：

「我们多种花生，并把它送进自己的工厂，而不是赤裸裸地卖给那些运走它的人。」
「我们唤醒榨油厂：妇女的手艺、年轻人的双手——而且什么都不浪费，油归我们，油渣饼喂牲口。」
「我们唤醒车站：重生的铁路，运走的将是满瓶的油，而不是贱卖的麻袋。」
「我们的年轻人，也不必再背井离乡去别处寻找财富了：财富就在这里被榨出来。」

「卖掉种子，」Saran 总结道，「是卖掉自己的辛劳。卖掉油，才是卖出自己的才智。」`,
    },
    {
      id: "apres-2040",
      voix: "recit",
      fr: `Dans le dossier que Dabola envoya à la Simandou Academy, Saran avait dessiné sa ville en 2040.

Au centre, la vieille huilerie réveillée, qui ronronnait de nouveau, des femmes en blouse et des jeunes aux commandes. Tout autour, des champs d'arachide à perte de vue, là pour la nourrir. Des caisses de bouteilles dorées portant une étiquette fière : Huile de Dabola. Et la gare, réveillée elle aussi : sur la Ligne du Niger ressuscitée, un train emportait l'huile vers le pays et vers le port — non plus la graine nue, mais le travail fini.

Au bas du dessin, là où la voie ferrée repartait vers l'horizon, elle avait écrit :

« On vendait notre graine, on rachetait notre huile. Aujourd'hui, c'est notre huile qui voyage, et notre génie qui reste. La suite, c'est à ceux qui viennent de l'écrire. »`,
      en: `In the file that Dabola sent to the Simandou Academy, Saran had drawn her town in 2040.

At the center, the old oil mill woken up, purring again, women in work coats and young people at the controls. All around, fields of peanut as far as the eye could see, there to feed it. Crates of golden bottles bearing a proud label: Huile de Dabola. And the station, awake again too: on the resurrected Niger Line, a train carried the oil toward the country and toward the port — no longer the bare seed, but the finished work.

At the bottom of the drawing, there where the railway set off toward the horizon, she had written:

"We used to sell our seed and buy back our oil. Today it is our oil that travels, and our genius that stays. The rest is for those who come next to write."`,
      ar: `في الملفّ الذي أرسلته Dabola إلى Simandou Academy، كانت Saran قد رسمت مدينتها عام 2040.

في الوسط، المصنع القديم وقد استيقظ، يُدندِن من جديد، ونساءٌ بمآزرهنّ وشبابٌ على الأزرار. وحوله، حقول فولٍ سودانيّ إلى ما لا تراه العين، لتُطعمه. وصناديق زجاجاتٍ ذهبية تحمل ملصقًا فخورًا: Huile de Dabola. والمحطّة، استيقظت هي الأخرى: على خطّ النيجر المبعوث من جديد، كان قطارٌ يحمل الزيت نحو البلد ونحو الميناء — لا البذرة العارية بعد اليوم، بل العمل المُنجَز.

في أسفل الرسم، هناك حيث تنطلق السكّة نحو الأفق، كتبت:

«كنّا نبيع بذرتنا ونشتري زيتنا. واليوم، زيتنا هو الذي يسافر، ونبوغنا هو الذي يبقى. والبقيّة على مَن يأتي بعدُ أن يكتبها.»`,
      zh: `在 Dabola 寄给 Simandou Academy 的材料里，Saran 画了一幅 2040 年的家乡。

正中央，那座老榨油厂醒了过来，又欢快地运转起来，穿工作服的妇女和年轻人守在操作台前。四周是一眼望不到边的花生田，正是用来喂养它的。一箱箱金黄的油瓶贴着自豪的标签：Huile de Dabola。车站也一同苏醒：在重生的尼日尔铁路线上，一列火车载着油驶向全国、驶向港口——不再是赤裸的种子，而是完成了的劳动。

在画的下方，正是铁路伸向地平线的地方，她写道：

「我们曾经卖掉种子，再买回油。如今，是我们的油在远行，是我们的才智在留下。余下的故事，要由后来的人来书写。」`,
    },
  ],
};

export default g2040Tome4;
