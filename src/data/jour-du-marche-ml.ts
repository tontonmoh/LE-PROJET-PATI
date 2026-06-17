// « Le jour du marché » — Pati Découverte, bas de tranche (les tout-petits).
// 8 doubles-pages. Phrases très courtes, répétition rythmée, une action par page.
// Piliers : citoyenneté / vivre-ensemble + le voyage des aliments (du champ à l'étal).
// But : casser les stéréotypes de genre (Habib veut le marché, Sira veut le terrain).
// Refrain chanté : « D'où ça vient ? — De loin, de loin ! »
// FR + EN + AR + ZH. (AR/ZH : relecture locuteur natif recommandée avant production.)
// NB : prix illustratifs (récit, pas données réelles) ; prénoms provisoires (Sira, Habib).

import type { Lang } from "./series/taadidi";

type RSection = { id: string; title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };

export const JOUR_DU_MARCHE_ML: Partial<Record<Lang, RBook>> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le jour du marché",
    sections: [
      { id: "dp1", title: "La mission", image: "/images/jour-du-marche/jdm-01.webp", paragraphs: [
        "Ce matin, Maman donne un panier à Sira.",
        "« Tu es grande. Va au marché toute seule. »",
        "Trois choses à acheter : des tomates, du poisson, du riz.",
        "Sira a un peu peur. Mais elle sourit." ] },
      { id: "dp2", title: "Le grand marché", image: "/images/jour-du-marche/jdm-02.webp", paragraphs: [
        "Le marché est très grand.",
        "Ça crie. Ça sent bon. Ça brille partout.",
        "Sira serre son panier.",
        "Et elle avance, tout doucement." ] },
      { id: "dp3", title: "Les tomates", image: "/images/jour-du-marche/jdm-03.webp", paragraphs: [
        "« Des tomates bien rouges ! » crie Tantie Fanta.",
        "« C'est combien ? » demande Sira.",
        "C'est un peu cher. Alors Sira marchande, tout doucement.",
        "Puis elle demande : « D'où ça vient ? »",
        "« De loin, de loin ! Du Fouta, là-haut dans les montagnes. »" ] },
      { id: "dp4", title: "Le poisson", image: "/images/jour-du-marche/jdm-04.webp", paragraphs: [
        "Plus loin, ça sent la mer.",
        "Sira choisit un beau poisson argenté.",
        "« D'où ça vient ? » demande Sira.",
        "« De loin, de loin ! De la mer.",
        "Les pirogues l'ont ramené ce matin, à Boulbinet. »" ] },
      { id: "dp5", title: "Le riz", image: "/images/jour-du-marche/jdm-05.webp", paragraphs: [
        "Encore un achat : le riz, tout blanc.",
        "« Et ça, d'où ça vient ? » demande Sira.",
        "« De loin, de loin ! Des rizières de Boffa, les pieds dans l'eau. »",
        "Sira sourit. Tout a fait un long voyage." ] },
      { id: "dp6", title: "Le compte", image: "/images/jour-du-marche/jdm-06.webp", paragraphs: [
        "Sira compte ses pièces, une par une.",
        "Tout est acheté. Il reste une seule pièce.",
        "Juste celle que Maman attend. Bravo, Sira !" ] },
      { id: "dp7", title: "Le retour", image: "/images/jour-du-marche/jdm-07.webp", paragraphs: [
        "Le panier est lourd, maintenant.",
        "Mais Sira marche la tête haute.",
        "Elle a tout trouvé. Toute seule." ] },
      { id: "dp8", title: "La marmite, et la promesse", image: "/images/jour-du-marche/jdm-08.webp", paragraphs: [
        "Le soir, la marmite chante.",
        "La tomate, le poisson et le riz se retrouvent dans le plat.",
        "Tout est venu de loin… jusqu'à Sira.",
        "Alors Habib, le petit frère, demande :",
        "« Maman, la prochaine fois, je peux accompagner Sira au marché ? »",
        "Sira sourit : « D'accord… si tu m'emmènes au terrain avec toi ! »" ] },
    ],
  },

  en: {
    lang: "en", dir: "ltr", label: "English", bookTitle: "Market Day",
    sections: [
      { id: "dp1", title: "The Errand", image: "/images/jour-du-marche/jdm-01.webp", paragraphs: [
        "This morning, Mum gives Sira a basket.",
        "\"You're a big girl now. Go to the market all by yourself.\"",
        "Three things to buy: tomatoes, fish, rice.",
        "Sira is a little scared. But she smiles." ] },
      { id: "dp2", title: "The Big Market", image: "/images/jour-du-marche/jdm-02.webp", paragraphs: [
        "The market is very big.",
        "It's noisy. It smells good. It shines everywhere.",
        "Sira holds her basket tight.",
        "And she steps forward, very slowly." ] },
      { id: "dp3", title: "The Tomatoes", image: "/images/jour-du-marche/jdm-03.webp", paragraphs: [
        "\"Lovely red tomatoes!\" calls Auntie Fanta.",
        "\"How much is it?\" asks Sira.",
        "It's a bit dear. So Sira haggles, very gently.",
        "Then she asks: \"Where does it come from?\"",
        "\"From far, far away! From the Fouta, up in the mountains.\"" ] },
      { id: "dp4", title: "The Fish", image: "/images/jour-du-marche/jdm-04.webp", paragraphs: [
        "Further on, it smells of the sea.",
        "Sira chooses a fine silvery fish.",
        "\"Where does it come from?\" asks Sira.",
        "\"From far, far away! From the sea.",
        "The pirogues brought it back this morning, to Boulbinet.\"" ] },
      { id: "dp5", title: "The Rice", image: "/images/jour-du-marche/jdm-05.webp", paragraphs: [
        "One more thing to buy: the rice, all white.",
        "\"And this, where does it come from?\" asks Sira.",
        "\"From far, far away! From the rice fields of Boffa, feet in the water.\"",
        "Sira smiles. Everything has made a long journey." ] },
      { id: "dp6", title: "The Counting", image: "/images/jour-du-marche/jdm-06.webp", paragraphs: [
        "Sira counts her coins, one by one.",
        "Everything is bought. One single coin is left.",
        "Just the one Mum is waiting for. Well done, Sira!" ] },
      { id: "dp7", title: "The Way Home", image: "/images/jour-du-marche/jdm-07.webp", paragraphs: [
        "The basket is heavy now.",
        "But Sira walks with her head held high.",
        "She found everything. All by herself." ] },
      { id: "dp8", title: "The Pot, and the Promise", image: "/images/jour-du-marche/jdm-08.webp", paragraphs: [
        "In the evening, the cooking pot sings.",
        "The tomato, the fish and the rice meet again in the dish.",
        "Everything came from far away… all the way to Sira.",
        "Then Habib, her little brother, asks:",
        "\"Mum, next time, can I go with Sira to the market?\"",
        "Sira smiles: \"All right… if you take me to the football pitch with you!\"" ] },
    ],
  },

  ar: {
    lang: "ar", dir: "rtl", label: "العربية", bookTitle: "يوم السوق",
    sections: [
      { id: "dp1", title: "المهمّة", image: "/images/jour-du-marche/jdm-01.webp", paragraphs: [
        "هذا الصباح، تُعطي ماما سيرا سلّةً.",
        "«صرتِ كبيرة. اذهبي إلى السوق وحدك.»",
        "ثلاثة أشياء للشراء: طماطم، سمك، أرز.",
        "سيرا خائفةٌ قليلًا. لكنها تبتسم." ] },
      { id: "dp2", title: "السوق الكبير", image: "/images/jour-du-marche/jdm-02.webp", paragraphs: [
        "السوق كبيرٌ جدًّا.",
        "ضجيج. رائحةٌ طيّبة. لمعانٌ في كلّ مكان.",
        "تشدّ سيرا سلّتها.",
        "وتتقدّم، بهدوءٍ شديد." ] },
      { id: "dp3", title: "الطماطم", image: "/images/jour-du-marche/jdm-03.webp", paragraphs: [
        "«طماطم حمراء زاهية!» تنادي العمّة فانتا.",
        "«بكم هذه؟» تسأل سيرا.",
        "إنها غالية قليلًا. فتساوم سيرا، بهدوءٍ شديد.",
        "ثم تسأل: «من أين تأتي؟»",
        "«من بعيد، من بعيد! من الفوتا، هناك في أعالي الجبال.»" ] },
      { id: "dp4", title: "السمك", image: "/images/jour-du-marche/jdm-04.webp", paragraphs: [
        "أبعد قليلًا، رائحة البحر.",
        "تختار سيرا سمكةً فضّيّةً جميلة.",
        "«من أين تأتي؟» تسأل سيرا.",
        "«من بعيد، من بعيد! من البحر.",
        "أحضرتها الزوارق هذا الصباح، إلى بولبيني.»" ] },
      { id: "dp5", title: "الأرز", image: "/images/jour-du-marche/jdm-05.webp", paragraphs: [
        "وشراءٌ آخر: الأرز، أبيضُ ناصع.",
        "«وهذا، من أين يأتي؟» تسأل سيرا.",
        "«من بعيد، من بعيد! من حقول أرز بوفا، والأقدام في الماء.»",
        "تبتسم سيرا. كلّ شيءٍ قطع رحلةً طويلة." ] },
      { id: "dp6", title: "الحساب", image: "/images/jour-du-marche/jdm-06.webp", paragraphs: [
        "تَعُدّ سيرا نقودها، واحدةً واحدة.",
        "اشترت كلّ شيء. بقيت قطعةٌ واحدة.",
        "تمامًا تلك التي تنتظرها ماما. أحسنتِ، سيرا!" ] },
      { id: "dp7", title: "العودة", image: "/images/jour-du-marche/jdm-07.webp", paragraphs: [
        "السلّة ثقيلةٌ الآن.",
        "لكنّ سيرا تمشي ورأسها مرفوع.",
        "وجدت كلّ شيء. وحدها." ] },
      { id: "dp8", title: "القِدر، والوعد", image: "/images/jour-du-marche/jdm-08.webp", paragraphs: [
        "في المساء، تُغنّي القِدر.",
        "تلتقي الطماطم والسمك والأرز من جديد في الطبق.",
        "كلّ شيءٍ أتى من بعيد… حتى وصل إلى سيرا.",
        "فيسأل حبيب، الأخ الصغير:",
        "«ماما، في المرّة القادمة، أيمكنني مرافقة سيرا إلى السوق؟»",
        "تبتسم سيرا: «حسنًا… إن أخذتني معك إلى الملعب!»" ] },
    ],
  },

  zh: {
    lang: "zh", dir: "ltr", label: "中文", bookTitle: "赶集日",
    sections: [
      { id: "dp1", title: "任务", image: "/images/jour-du-marche/jdm-01.webp", paragraphs: [
        "今天早上，妈妈给了西拉一个篮子。",
        "「你长大了。自己一个人去市场吧。」",
        "要买三样东西：番茄、鱼、大米。",
        "西拉有点害怕。但她笑了。" ] },
      { id: "dp2", title: "大市场", image: "/images/jour-du-marche/jdm-02.webp", paragraphs: [
        "市场很大很大。",
        "到处在吆喝。到处香喷喷。到处亮晶晶。",
        "西拉抱紧她的篮子。",
        "然后，慢慢地，往前走。" ] },
      { id: "dp3", title: "番茄", image: "/images/jour-du-marche/jdm-03.webp", paragraphs: [
        "「红通通的番茄哟！」凡塔阿姨喊道。",
        "「这个多少钱？」西拉问。",
        "有点儿贵。于是西拉轻轻地讨起价来。",
        "然后她问：「它从哪儿来？」",
        "「从很远很远的地方来！从富塔，从高高的山上。」" ] },
      { id: "dp4", title: "鱼", image: "/images/jour-du-marche/jdm-04.webp", paragraphs: [
        "再往前，有一股海的味道。",
        "西拉挑了一条漂亮的银色的鱼。",
        "「它从哪儿来？」西拉问。",
        "「从很远很远的地方来！从海里来。",
        "独木舟今天早上把它带回来的，带到布尔比内。」" ] },
      { id: "dp5", title: "大米", image: "/images/jour-du-marche/jdm-05.webp", paragraphs: [
        "还有一样要买：大米，白白的。",
        "「那这个呢，从哪儿来？」西拉问。",
        "「从很远很远的地方来！从博法的稻田来，脚泡在水里的稻田。」",
        "西拉笑了。一切都走了好长的路。" ] },
      { id: "dp6", title: "数钱", image: "/images/jour-du-marche/jdm-06.webp", paragraphs: [
        "西拉数着她的硬币，一枚一枚地数。",
        "全都买齐了。还剩下一枚硬币。",
        "正好是妈妈等着的那一枚。真棒，西拉！" ] },
      { id: "dp7", title: "回家", image: "/images/jour-du-marche/jdm-07.webp", paragraphs: [
        "现在，篮子沉甸甸的。",
        "但西拉昂着头走路。",
        "她全都买到了。自己一个人。" ] },
      { id: "dp8", title: "锅，和约定", image: "/images/jour-du-marche/jdm-08.webp", paragraphs: [
        "晚上，锅唱起歌来。",
        "番茄、鱼和大米，在菜里重逢了。",
        "一切都从很远很远的地方来……一直来到西拉这里。",
        "于是小弟弟哈比卜问：",
        "「妈妈，下一次，我能跟西拉一起去市场吗？」",
        "西拉笑了：「行呀……只要你带我跟你一起去球场！」" ] },
    ],
  },
};
