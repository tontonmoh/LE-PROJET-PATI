// =============================================================================
//  GÉNÉRATION 2040 — Tome 7 : « La Dame qui veille »
//  Fichier de données Pati (même structure que g2040-tome1..6.ts)
// -----------------------------------------------------------------------------
//  ÉTAT : FR + EN remplis (texte de Claude). AR + ZH = BROUILLONS de Claude →
//         À FAIRE RELIRE par un natif avant de passer le statut à "pret".
//  NOMS INVARIANTS en latin dans les 4 langues : Dieynaba (héroïne écolière),
//  Néné Gallé (la femme de la légende, « mère du foyer »), Néné Foutah (« mère
//  du Fouta »), Mali, mont Loura, Fouta, Belle de Guinée, Sénégal, Simandou
//  Academy. Concept glosé tel quel : fête de la pomme de terre.
//  PARTI PRIS FEMMES : on RÉHABILITE la Dame de Mali. On NE redétaille PAS la
//  légende dégradante (juste « une femme punie/exposée », sans le motif de
//  l'infidélité). Inversion : « ON LA REGARDE » → « ELLE NOUS VEILLE ».
//  GARDE-FOU : roche = formation NATURELLE ; ne nommer AUCUN président/figure
//  politique (renommage Néné Foutah + essor pomme de terre attribués aux
//  habitants/anciens) ; religieux → discret. Pomme de terre : Mali = BERCEAU
//  + ville de la FÊTE (ne PAS écrire « plus grande production » — c'est Pita).
// =============================================================================

import type { LivreG2040, SectionG2040 } from "./g2040-tome1";

export const g2040Tome7: LivreG2040 = {
  slug: "g2040-dame-qui-veille",
  serie: "generation-2040",
  ordre: 7,
  statut: "en_production", // FR + EN prêts ; AR/ZH = brouillons à faire relire
  titre: {
    fr: "La Dame qui veille",
    en: "The Lady Who Watches Over Us",
    ar: "السيّدة التي تسهر علينا",
    zh: "守望的夫人",
  },
  lieu: "Mali",
  sousCollection: "Aventure",
  age: "dès 10 ans",
  odd: [9, 11],
  pilier: "Infrastructures & désenclavement (ODD 9) · patrimoine & communautés (ODD 11)",
  couverture: "/images/g2040-tome7-couverture.webp",
  meta: {
    tagline: {
      fr: "À Mali, au sommet du Fouta, une femme de pierre veille sur la ville. Et si, au lieu de la montrer du doigt, on rallumait sa lumière ?",
      en: "In Mali, atop the Fouta, a woman of stone watches over the town. What if, instead of pointing at her, we relit her light?",
      ar: "في Mali، فوق سطح Fouta، تسهر امرأةٌ من حجرٍ على المدينة. فماذا لو، بدل أن نشير إليها بالأصابع، أعدنا إشعال نورها؟",
      zh: "在 Mali，在 Fouta 之巅，一位石头的女子守望着小城。倘若我们不再对她指指点点，而是重新点亮她的灯火，会怎样呢？",
    },
    blurb: {
      fr: [
        "Mali, tout au nord, est la ville la plus haute de Guinée — le toit du Fouta. À son sommet, le mont Loura, le vent et la pluie ont dessiné dans la pierre la silhouette d'une femme : la Dame de Mali.",
        "Aux visiteurs, on raconte une vieille histoire qui rabaisse cette femme. Dieynaba en a honte. Sa grand-mère le lui dit : une montagne ne porte pas de faute, et c'est aux enfants de raconter qui elle est vraiment.",
        "Pour le concours de la Simandou Academy, leur classe lui rend son honneur : la Dame, c'est Néné Gallé, « la mère du foyer », qui montait chaque soir avec sa lampe et dont la lueur guidait les voyageurs perdus — devenue Néné Foutah, la mère de tout le Fouta. « On la regarde » devient « Elle nous veille ». L'Objectif : rallumer sa lampe en phare, désenclaver la route, et faire connaître la pomme de terre de Mali — la Belle de Guinée — née ici, et sa fête.",
        "Un livre sur la dignité des femmes, la lumière et le désenclavement. Génération 2040 · dès 10 ans.",
      ],
      en: [
        "Mali, in the far north, is the highest town in Guinea — the roof of the Fouta. At its summit, Mount Loura, wind and rain have carved into the stone the silhouette of a woman: the Lady of Mali.",
        "To visitors, an old story is told that demeans this woman. Dieynaba is ashamed of it. Her grandmother tells her: a mountain bears no fault, and it is for the children to tell who she truly is.",
        "For the Simandou Academy contest, their class restores her honor: the Lady is Néné Gallé, 'the mother of the household,' who climbed up each evening with her lamp and whose glow guided lost travelers — and who became Néné Foutah, the mother of all the Fouta. 'We look at her' becomes 'She watches over us.' The Objective: to relight her lamp as a beacon, to open up the road, and to make Mali's potato — the Belle de Guinée, born here — and its festival known to all.",
        "A book about the dignity of women, light, and ending isolation. Génération 2040 · ages 10 and up.",
      ],
      ar: [
        "Mali، في أقصى الشمال، أعلى مدينةٍ في Guinée — سطحُ الـ Fouta. وفي قمّتها، جبل Loura، نحتت الريحُ والمطرُ في الحجر صورةَ امرأة: سيّدة Mali.",
        "يُروى للزوّار حكايةٌ قديمة تحطّ من قدر هذه المرأة. تشعر Dieynaba بالخجل منها. تقول لها جدّتها: الجبلُ لا يحمل ذنبًا، وعلى الأطفال أن يرووا مَن هي حقًّا.",
        "من أجل مسابقة Simandou Academy، يردّ صفُّها إليها كرامتها: السيّدة هي Néné Gallé، «أمّ البيت»، التي كانت تصعد كلّ مساءٍ بمصباحها، وكان نورُها يهدي المسافرين التائهين — فصارت Néné Foutah، أمّ الـ Fouta كلّه. «ننظر إليها» تصبح «هي تسهر علينا». الهدف: إعادة إشعال مصباحها منارةً، وفكّ عزلة الطريق، والتعريف ببطاطا Mali — الـ Belle de Guinée، التي وُلدت هنا — وبعيدها.",
        "كتابٌ عن كرامة النساء والنور وفكّ العزلة. Génération 2040 · من 10 سنوات فما فوق.",
      ],
      zh: [
        "Mali 位于最北端，是 Guinée 海拔最高的城市——Fouta 的屋顶。在它的顶峰 Loura 山上，风和雨在岩石中刻出了一位女子的轮廓：Mali 的夫人。",
        "人们对游客讲述一个贬低这位女子的古老故事。Dieynaba 为此感到羞愧。她的祖母告诉她：山没有过错，该由孩子们来讲述她究竟是谁。",
        "为了 Simandou Academy 的比赛，全班为她恢复了荣誉：这位夫人就是 Néné Gallé，「家的母亲」，她每晚提着灯登上山顶，她的微光为迷路的旅人指引方向——后来她成了 Néné Foutah，整个 Fouta 的母亲。「我们注视着她」变成了「她守望着我们」。目标：把她的灯重新点亮成一座灯塔，打通道路，让诞生于此的 Mali 马铃薯——Belle de Guinée——和它的节日为世人所知。",
        "一本关于女性尊严、光与打破闭塞的书。Génération 2040 · 适合 10 岁以上。",
      ],
    },
  },
  sections: [
    {
      id: "la-dame-qu-on-montre",
      voix: "recit",
      fr: `Mali est la ville la plus haute du pays, tout au nord du Fouta, là où la montagne touche presque le ciel. Et au sommet du mont Loura, taillée dans la pierre par le vent et la pluie depuis des temps que personne ne compte, se dresse la silhouette d'une femme : la Dame de Mali.

Les visiteurs montent de loin pour la voir — par des routes longues et difficiles. Un jour, Dieynaba accompagna un groupe avec le guide. Et le guide raconta la vieille histoire : celle où la Dame serait une femme punie, changée en pierre pour être montrée à tous, pour toujours.

Dieynaba sentit la honte lui monter aux joues. « On vient du bout du monde, pensa-t-elle, pour qu'on parle ainsi d'une femme de chez nous ? »`,
      en: `Mali is the highest town in the country, in the far north of the Fouta, where the mountain almost touches the sky. And at the summit of Mount Loura, carved into the stone by wind and rain since times no one counts, stands the silhouette of a woman: the Lady of Mali.

Visitors climb from far away to see her — along long, hard roads. One day, Dieynaba went up with a group and the guide. And the guide told the old story: the one in which the Lady was a woman punished, turned to stone to be shown to all, forever.

Dieynaba felt shame rise to her cheeks. "People come from the ends of the earth," she thought, "to hear a woman of ours spoken of like that?"`,
      ar: `Mali أعلى مدينةٍ في البلاد، في أقصى شمال الـ Fouta، حيث يكاد الجبل يلامس السماء. وفي قمّة جبل Loura، منحوتةً في الحجر بالريح والمطر منذ أزمانٍ لا يحصيها أحد، تنتصب صورةُ امرأة: سيّدة Mali.

يصعد الزوّار من بعيدٍ ليروها — عبر طرقٍ طويلةٍ وصعبة. ذات يومٍ رافقت Dieynaba مجموعةً مع المرشد. فروى المرشد الحكاية القديمة: تلك التي تكون فيها السيّدة امرأةً معاقَبة، حُوّلت إلى حجرٍ لتُعرَض على الجميع، إلى الأبد.

أحسّت Dieynaba بالخجل يصعد إلى وجنتيها. «أيأتي الناس من أقاصي الأرض، فكّرت، ليُقال هذا عن امرأةٍ من بلدنا؟»`,
      zh: `Mali 是全国海拔最高的城市，在 Fouta 的最北端，那里群山几乎触到天空。在 Loura 山的顶峰，风和雨用谁也数不清的岁月把岩石雕成了一位女子的轮廓：Mali 的夫人。

游客们从远方爬上来看她——走的是又长又难的路。有一天，Dieynaba 跟着一个旅行团和导游上了山。导游讲起那个古老的故事：说这位夫人是个受罚的女人，被变成石头，永远展示给所有人看。

Dieynaba 感到羞愧涌上脸颊。「人们从天涯海角赶来，」她想，「就为了听人这样说我们家乡的一个女人？」`,
    },
    {
      id: "raconter-autrement",
      voix: "recit",
      fr: `Le soir, elle en parla à sa grand-mère, qui cultivait la pomme de terre sur les hauteurs.

— Cette roche était là bien avant qu'on invente cette histoire, dit la vieille femme. Une montagne ne porte pas de faute. Et une femme ne mérite pas qu'on la montre du doigt pour l'éternité.

Elle sourit.

— D'ailleurs, ici, beaucoup ont déjà cessé de la nommer ainsi. On l'appelle Néné Foutah — la Mère du Fouta. À vous, maintenant, de raconter qui elle est vraiment.`,
      en: `That evening, she spoke of it to her grandmother, who grew potatoes on the heights.

"This rock was here long before anyone invented that story," said the old woman. "A mountain bears no fault. And a woman does not deserve to be pointed at for all eternity."

She smiled.

"Besides, here, many have already stopped calling her that. They call her Néné Foutah — the Mother of the Fouta. It is for you, now, to tell who she really is."`,
      ar: `في المساء، حدّثت جدّتها بالأمر، وكانت تزرع البطاطا في المرتفعات.

— كانت هذه الصخرة هنا قبل أن يخترع أحدٌ تلك الحكاية بزمنٍ طويل، قالت العجوز. الجبلُ لا يحمل ذنبًا. والمرأةُ لا تستحقّ أن يُشار إليها بالأصابع إلى الأبد.

ابتسمت.

— ثمّ إنّ كثيرين هنا كفّوا عن تسميتها هكذا. ينادونها Néné Foutah — أمّ الـ Fouta. وعليكم أنتم الآن أن ترووا مَن هي حقًّا.`,
      zh: `那天晚上，她把这事告诉了祖母——祖母在高地上种马铃薯。

「早在有人编出那个故事之前，这块岩石就在这里了，」老人说。「山没有过错。一个女人也不该被人永远指指点点。」

她笑了笑。

「再说，这里已经有很多人不再那样叫她了。人们叫她 Néné Foutah——Fouta 的母亲。现在，该由你们来讲述她究竟是谁了。」`,
    },
    {
      id: "nene-galle-la-lampe",
      voix: "recit",
      fr: `Alors, pour le concours de la Simandou Academy, la classe de Dieynaba choisit de raconter la femme qu'avait été la Dame.

On l'appelait Néné Gallé — « la mère du foyer ». Le soir, quand tout le travail du jour était fini, elle aimait monter au point le plus haut de la ville, une petite lampe à la main. De là, elle regardait au loin : les véhicules qui montaient vers Mali, les gens qui rentraient des champs. Et elle se laissait aller à ses songes.

Une nuit, des paysans perdus dans le brouillard aperçurent une lueur, tout en haut, et la silhouette d'une femme éclairée par sa lampe. Ils marchèrent vers cette lumière — et arrivèrent à bon port. Le lendemain, ils montèrent la remercier de les avoir guidés. Néné Gallé n'avait pourtant rien fait d'autre que veiller, là-haut, avec sa lampe ; mais sa lumière, sans qu'elle le sache, ramenait les voyageurs.

Elle veilla ainsi tant d'années, et de si haut, que la montagne finit par garder sa silhouette — pour qu'elle continue de veiller. La « mère du foyer » était devenue Néné Foutah : la mère de tout le Fouta. Voilà pourquoi elle se tient encore là, face à la plaine : non pour être jugée, mais pour nous garder et nous éclairer.`,
      en: `So, for the Simandou Academy contest, Dieynaba's class chose to tell of the woman the Lady had been.

She was called Néné Gallé — "the mother of the household." In the evening, when all the day's work was done, she liked to climb to the highest point of the town, a small lamp in her hand. From there she looked into the distance: the vehicles coming up toward Mali, the people returning from the fields. And she let herself drift into her dreams.

One night, farmers lost in the fog saw a glow, high up, and the silhouette of a woman lit by her lamp. They walked toward that light — and reached safety. The next day they climbed up to thank her for guiding them. Yet Néné Gallé had done nothing but keep watch, up there, with her lamp; but her light, without her knowing, was bringing the travelers home.

She kept watch like this for so many years, and from so high, that the mountain came to keep her silhouette — so that she might watch on. The "mother of the household" had become Néné Foutah: the mother of all the Fouta. That is why she still stands there, facing the plain: not to be judged, but to keep us and to light our way.`,
      ar: `وهكذا، من أجل مسابقة Simandou Academy، اختار صفُّ Dieynaba أن يروي المرأة التي كانتها السيّدة.

كانوا يسمّونها Néné Gallé — «أمّ البيت». في المساء، حين ينتهي عملُ النهار كلّه، كانت تحبّ أن تصعد إلى أعلى نقطةٍ في المدينة، ومصباحٌ صغيرٌ في يدها. من هناك كانت تنظر إلى البعيد: المركباتُ الصاعدة نحو Mali، والناسُ العائدون من الحقول. وتسترسل في أحلامها.

ذات ليلةٍ، رأى فلّاحون تاهوا في الضباب لمعةً في الأعلى، وصورةَ امرأةٍ يضيئها مصباحُها. ساروا نحو ذلك النور — فبلغوا برّ الأمان. وفي الغد صعدوا ليشكروها على هدايتهم. ومع ذلك لم تكن Néné Gallé قد فعلت شيئًا سوى أن تسهر، هناك في الأعلى، بمصباحها؛ لكنّ نورها، من دون أن تدري، كان يُرجِع المسافرين إلى ديارهم.

سهرت هكذا سنواتٍ طويلة، ومن علوٍّ شاهق، حتّى احتفظ الجبلُ بصورتها — لتظلّ تسهر. صارت «أمّ البيت» Néné Foutah: أمّ الـ Fouta كلّه. لهذا لا تزال واقفةً هناك، تجاه السهل: لا لتُحاكَم، بل لتحرسنا وتضيء لنا الدرب.`,
      zh: `于是，为了 Simandou Academy 的比赛，Dieynaba 全班决定讲述这位夫人曾经是怎样的女子。

人们叫她 Néné Gallé——「家的母亲」。傍晚，一天的活儿都干完了，她喜欢提着一盏小灯，登上城里最高的地方。从那里她望向远方：驶向 Mali 的车辆，从田里归来的人们。她任自己沉入遐想。

一天夜里，几个在雾中迷路的农人看见高处有一点微光，还有一位被灯火照亮的女子的轮廓。他们朝那光走去——平安抵达。第二天，他们爬上山来谢她指引了路。可 Néné Gallé 不过是在那高处提着灯守望罢了；然而她的光，在她不知情时，把旅人一个个带回了家。

她就这样守望了许多年，又站得那样高，以至于山最终留住了她的轮廓——好让她继续守望。「家的母亲」成了 Néné Foutah：整个 Fouta 的母亲。这就是为什么她至今仍站在那里，面朝平原：不是为了受审判，而是为了守护我们、为我们照亮道路。`,
    },
    {
      id: "le-tresor-qui-aime-le-froid",
      voix: "recit",
      fr: `Il y avait une autre preuve que les hauteurs de Mali n'étaient pas une punition, mais un don.

La pomme de terre — la Belle de Guinée — était venue de très loin, des montagnes froides d'un autre continent. Pour pousser, il lui fallait un climat frais ; et le coin le plus haut et le plus frais du pays, c'était ici. C'est à Mali, la première, qu'elle avait germé en Guinée. Aujourd'hui encore, chaque année, on y célèbre la fête de la pomme de terre, où montent les gens de tout le pays et même des pays voisins.

Ce sont surtout les femmes qui la cultivent, et elle leur donne de quoi vivre. Le froid que la vieille légende prenait pour une malédiction faisait, en vérité, la richesse de Mali.

— Mais quand la récolte est prête, soupira la grand-mère, les mauvaises routes nous mangent tout : il coûte trop cher de descendre la vendre.`,
      en: `There was another proof that the heights of Mali were not a punishment, but a gift.

The potato — the Belle de Guinée — had come from very far away, from the cold mountains of another continent. To grow, it needed a cool climate; and the highest, coolest corner of the country was right here. It was at Mali, first of all, that it had sprouted in Guinea. To this day, every year, the potato festival is held here, where people come up from all over the country and even from the neighboring lands.

It is above all the women who grow it, and it gives them their living. The cold that the old legend took for a curse was, in truth, the wealth of Mali.

"But when the harvest is ready," the grandmother sighed, "the bad roads eat it all up: it costs too much to take it down to sell."`,
      ar: `وكان هناك دليلٌ آخر على أنّ مرتفعات Mali لم تكن عقابًا، بل هبة.

فالبطاطا — الـ Belle de Guinée — جاءت من بعيدٍ جدًّا، من جبالٍ باردةٍ في قارّةٍ أخرى. ولكي تنمو، كانت تحتاج إلى مناخٍ بارد؛ وأعلى بقعةٍ وأبردها في البلاد كانت هنا. في Mali، أوّلًا، أنبتت في Guinée. وحتّى اليوم، كلّ عام، يُقام هنا عيدُ البطاطا، حيث يصعد الناس من كلّ البلاد، ومن البلدان المجاورة أيضًا.

والنساء بالأخصّ هنّ من يزرعنها، وهي تمنحهنّ قوتَهنّ. فالبردُ الذي ظنّته الحكايةُ القديمة لعنةً كان، في الحقيقة، ثروةَ Mali.

— لكن حين يجهز المحصول، تنهّدت الجدّة، تأكل الطرقُ السيّئة كلَّ شيء: يكلّفنا النزولُ لبيعه أكثرَ ممّا يجب.`,
      zh: `还有一个证据，说明 Mali 的高地不是惩罚，而是恩赐。

马铃薯——Belle de Guinée——来自很远很远的地方，来自另一片大陆的寒冷山区。要生长，它需要凉爽的气候；而全国最高、最凉的角落，正是这里。正是在 Mali，它第一次在 Guinée 发了芽。直到今天，每年这里都举办马铃薯节，全国各地、甚至邻国的人都赶来。

种它的主要是女人，它养活了她们。古老传说当作诅咒的那份寒冷，其实正是 Mali 的财富。

「可一到收成的时候，」祖母叹了口气，「糟糕的路把一切都吃掉了：运下山去卖，太贵了。」`,
    },
    {
      id: "mot-de-dieynaba",
      voix: "recit",
      fr: `Le jour de l'Objectif, la Maîtresse écrivit au tableau la phrase qui résumait l'ancienne histoire :

ON LA REGARDE

— On la montrait du doigt, dit Dieynaba. Comme une femme exposée. Mais si elle veillait sur nous, si elle nous éclairait… alors la phrase est à l'envers.

Elle se leva et écrivit dessous :

ELLE NOUS VEILLE

Les idées jaillirent :

— On raconte enfin la vraie histoire de Néné Foutah — avec fierté, pas avec honte — à tous ceux qui montent.
— On rallume la lampe de Néné Gallé au sommet : un vrai phare d'accueil, qui guide les voyageurs et signale Mali de loin.
— On désenclave : une bonne route qui monte les visiteurs jusqu'à la Dame, et qui descend nos pommes de terre jusqu'aux marchés.
— On fait connaître la Belle de Guinée et sa fête au pays et au monde — c'est ici qu'elle est née.
— On protège les sources et les forêts que la gardienne veillait.

— Le point le plus haut et le plus oublié, conclut Dieynaba, peut devenir le plus visité. Il suffisait d'honorer celle qui veille — et de lui rallumer sa lumière.`,
      en: `On the day of the Objective, the teacher wrote on the board the sentence that summed up the old story:

WE LOOK AT HER

"She was pointed at," said Dieynaba. "Like a woman put on display. But if she watched over us, if she lit our way… then the sentence is the wrong way round."

She stood up and wrote beneath it:

SHE WATCHES OVER US

The ideas burst out:

"We tell, at last, the true story of Néné Foutah — with pride, not shame — to everyone who comes up."
"We relight Néné Gallé's lamp at the summit: a real welcoming beacon, that guides travelers and signals Mali from afar."
"We open up the road: a good road that brings visitors up to the Lady, and takes our potatoes down to the markets."
"We make the Belle de Guinée and its festival known to the country and the world — this is where it was born."
"We protect the springs and the forests the guardian watched over."

"The highest and most forgotten place," Dieynaba concluded, "can become the most visited. It was enough to honor the one who watches — and to relight her light."`,
      ar: `في يوم الهدف، كتبت المعلّمة على السبّورة الجملةَ التي تلخّص الحكاية القديمة:

ننظر إليها

— كانوا يشيرون إليها بالأصابع، قالت Dieynaba. كامرأةٍ مَعروضة. لكن إن كانت تسهر علينا، إن كانت تضيء لنا… فالجملةُ مقلوبة.

نهضت وكتبت تحتها:

هي تسهر علينا

تدفّقت الأفكار:

— نروي أخيرًا الحكاية الحقيقية لـ Néné Foutah — بفخرٍ لا بخجل — لكلّ من يصعد.
— نُعيد إشعال مصباح Néné Gallé في القمّة: منارةَ ترحيبٍ حقيقية، تهدي المسافرين وتدلّ على Mali من بعيد.
— نفكّ العزلة: طريقٌ جيّدةٌ تصعد بالزوّار إلى السيّدة، وتنزل ببطاطانا إلى الأسواق.
— نُعرِّف بالـ Belle de Guinée وعيدها في البلاد والعالم — فهنا وُلدت.
— نحمي الينابيع والغابات التي كانت الحارسةُ تسهر عليها.

— أعلى مكانٍ وأكثرُه نسيانًا، خلصت Dieynaba، يمكن أن يصير أكثرَها زيارة. كان يكفي أن نُكرّم التي تسهر — وأن نُعيد إشعال نورها.`,
      zh: `在「目标」公布的那天，老师把概括那个旧故事的句子写在黑板上：

我们注视着她

「人们对她指指点点，」Dieynaba 说。「把她当成一个被展示的女人。可如果她守望着我们，如果她为我们照亮道路……那这句话就反了。」

她站起来，在下面写道：

她守望着我们

主意一下子涌了出来：

「我们终于把 Néné Foutah 真正的故事——带着骄傲，而不是羞愧——讲给每一个上山的人听。」
「我们在山顶重新点亮 Néné Gallé 的灯：一座真正迎客的灯塔，为旅人指路，从远处就标示出 Mali。」
「我们打通道路：一条好路，把访客送上山见这位夫人，把我们的马铃薯运下山到市场。」
「我们让 Belle de Guinée 和它的节日为全国、为世界所知——它就诞生在这里。」
「我们守护这位守望者曾照看的水源和森林。」

「最高、最被遗忘的地方，」Dieynaba 总结道，「能够变成最多人来的地方。只需要敬重那位守望的人——并重新点亮她的灯火。」`,
    },
    {
      id: "apres-2040",
      voix: "recit",
      fr: `Dans le dossier que Mali envoya à la Simandou Academy, Dieynaba avait dessiné sa ville en 2040.

Au sommet du mont Loura, la lampe de Néné Gallé — devenue un vrai phare — brillait de nouveau dans la nuit, visible depuis la plaine et jusqu'au Sénégal. Une belle route montait, pleine de cars de visiteurs venus saluer Néné Foutah — et, dans l'autre sens, de camions chargés de pommes de terre qui descendaient enfin vendre sans tout perdre en route. Sur la grande place, la fête de la pomme de terre battait son plein, les femmes productrices en tête. Et là-haut, la Dame de pierre veillait, honorée.

Au bas du dessin, sous la silhouette éclairée, elle avait écrit :

« On nous montrait une femme punie. On a appris à voir une femme qui veille. Elle a rallumé sa lumière, et le monde a retrouvé le chemin de chez nous. La suite, c'est à ceux qui viennent de l'écrire. »`,
      en: `In the file that Mali sent to the Simandou Academy, Dieynaba had drawn her town in 2040.

At the summit of Mount Loura, Néné Gallé's lamp — now a true beacon — shone again in the night, visible from the plain all the way to Senegal. A fine road climbed, full of buses of visitors come to greet Néné Foutah — and, the other way, of trucks loaded with potatoes going down at last to sell without losing everything on the road. On the great square, the potato festival was in full swing, the women growers at the front. And up above, the Lady of stone watched over them, honored.

At the bottom of the drawing, beneath the lit silhouette, she had written:

"We were shown a woman punished. We learned to see a woman who watches over us. She relit her light, and the world found the way back to us. The rest is for those who come next to write."`,
      ar: `في الملفّ الذي أرسلته Mali إلى Simandou Academy، كانت Dieynaba قد رسمت مدينتها عام 2040.

في قمّة جبل Loura، كان مصباح Néné Gallé — وقد صار منارةً حقيقية — يضيء من جديدٍ في الليل، يُرى من السهل وحتّى Sénégal. كانت طريقٌ جميلةٌ تصعد، مليئةً بحافلات الزوّار القادمين لتحيّة Néné Foutah — وفي الاتّجاه الآخر، بشاحناتٍ محمّلةٍ بالبطاطا تنزل أخيرًا لتبيع دون أن تخسر كلّ شيءٍ في الطريق. وفي الساحة الكبرى، كان عيدُ البطاطا في أوجه، والنساءُ المنتِجات في المقدّمة. وفي الأعلى، كانت السيّدة الحجرية تسهر، مُكرَّمة.

في أسفل الرسم، تحت الصورة المضاءة، كتبت:

«كانوا يُروننا امرأةً معاقَبة. تعلّمنا أن نرى امرأةً تسهر علينا. أعادت إشعال نورها، فاهتدى العالمُ إلى طريق ديارنا. والبقيّة على مَن يأتي بعدُ أن يكتبها.»`,
      zh: `在 Mali 寄给 Simandou Academy 的材料里，Dieynaba 画了一幅 2040 年的家乡。

在 Loura 山的顶峰，Néné Gallé 的灯——如今成了一座真正的灯塔——又在夜里亮了起来，从平原一直望到 Sénégal 都能看见。一条好路盘旋而上，满是前来问候 Néné Foutah 的访客大巴——而在另一个方向，满载马铃薯的卡车终于驶下山去售卖，不必再在路上损失一切。在大广场上，马铃薯节正热闹非凡，女种植者们走在最前面。而在高处，石头的夫人守望着他们，受人敬重。

在画的下方，在那被照亮的轮廓底下，她写道：

「人们曾给我们看一个受罚的女人。我们学会了看见一个守望我们的女人。她重新点亮了自己的灯，世界也重新找到了通往我们家乡的路。余下的故事，要由后来的人来书写。」`,
    },
  ],
};

export default g2040Tome7;
