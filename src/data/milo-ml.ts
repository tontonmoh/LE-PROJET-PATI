// « Sauver le Milo — Une Mamaya pas comme les autres » — Pati Engagement (12–15 ans).
// Adaptation lisible du manuscrit BD (22 planches), 14 sections alignées sur 4 langues.
export type MiloLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[] };
type Book = { lang: MiloLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const MILO_ML: Record<MiloLang, Book> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Sauver le Milo",
    sections: [
      { id: "route", title: "Sur la route de Kankan", paragraphs: [
        "Depuis Kindia, le grand frère de Kadiatou n'arrêtait pas de parler.",
        "— Tu vois, Kadi, cette année la Mamaya a 86 ans ! Les gens vont s'en souvenir. Et nos puits dans les villages : quatre en six mois ! Quand le ministère viendra inaugurer, qui va-t-il chercher ? Le délégué. Moi.",
        "— Sory, glissa leur père Bangaly, sans quitter la route des yeux.",
        "À l'entrée de Kankan, un homme les héla : — Eh, Sory ! Délégué ! Tu nous as fait attendre !" ] },
      { id: "cour", title: "La cour des Kaba", paragraphs: [
        "Dans la cour familiale, on embrassa Kadiatou, on s'exclama qu'elle avait grandi.",
        "— Cousine ! Toi, c'est Kadiatou, hein ? Moi c'est Karifalla, d'Abidjan. Tu parles maninka ?",
        "— Un peu, répondit-elle, gênée.",
        "— On va t'apprendre. Et là-bas, c'est Aminata, notre cousine de New York !",
        "— Hi… Bonjour, fit timidement Aminata.",
        "— Maintenant qu'on est trois, dit Karifalla, on va bien rigoler." ] },
      { id: "baba", title: "Bâba Karamoko", paragraphs: [
        "Puis on la mena devant le grand-père, Bâba Karamoko.",
        "— Bâba, à Conakry, au salon, il y a une photo. C'est toi, je crois : tu es debout dans une pirogue, tu tiens un trophée.",
        "— Ah, cette photo… C'était en 72, sur le Milo, rit-il doucement.",
        "— Le Milo d'ici ?",
        "— Le Milo d'ici. Demain matin, après la prière de six heures, tu viens avec moi : je t'emmène voir un lever de soleil sur le fleuve. Il n'y a rien de plus beau au monde." ] },
      { id: "lever", title: "Le lever de soleil sur le Milo", paragraphs: [
        "Le lendemain, à l'aube, le Milo s'éveilla sous leurs yeux. Kadiatou retint son souffle.",
        "— Je te l'avais dit, souffla Bâba Karamoko. Maintenant, descendons. Je veux te montrer autre chose." ] },
      { id: "blesse", title: "Le Milo blessé", paragraphs: [
        "En contrebas, c'était le Milo de tous les jours. C'était pire que tout ce que Kadiatou avait imaginé : les déchets, le sable, partout.",
        "— Mais Bâba… c'est horrible.",
        "— Ça n'a pas toujours été comme ça, ma fille. Quand j'avais ton âge, le fleuve était large comme deux fois cela. Les pirogues s'y croisaient. Le phare, là-bas, servait. Maintenant, il regarde.",
        "— Tu as vu le lever de soleil ; il est encore là. Mais en dessous, vois ce qu'on a fait." ] },
      { id: "manguier", title: "Sous le manguier", paragraphs: [
        "Le soir, sous le manguier, Kadiatou retrouva son frère.",
        "— Tu as vu le fleuve ? Beau le matin, hein ?",
        "— Beau le matin. Mais en dessous, Sory… tu l'as vu, en dessous ?",
        "— Je l'ai vu. Tout le monde a vu. C'est pour ça que la Mamaya, ce n'est pas que la danse : il y a beaucoup d'actions pour la communauté. Cette année, on offre des puits améliorés.",
        "— C'est bien. Mais ajoute une grande action pour le fleuve. La vie de Kankan en dépend." ] },
      { id: "maire", title: "Le Maire écoute", paragraphs: [
        "Aux répétitions, les cousins n'en revenaient pas. — Plus chic que tout ce que j'avais vu à Abidjan, dit Karifalla. — It's beautiful, ajouta Aminata.",
        "— Monsieur le Maire, dit Sory, ma sœur a une proposition.",
        "— Le Milo, monsieur… il faut faire quelque chose. Ce n'est pas que des ordures : c'est le sable, c'est tout, dit Kadiatou.",
        "— Vous avez raison, mademoiselle. C'est un sujet qui me hante. Intègre une action Milo à votre programme, Sory ; j'annoncerai mon appui à l'auditorium." ] },
      { id: "mamaya", title: "La Mamaya des 86 ans", paragraphs: [
        "Vint la Tabaski, le jour saint. Puis, trois jours après, la Mamaya commença.",
        "Le jeli Kouyaté chantait : « Kankan ! Kankan-Nabaya ! Ville de mes pères ! Aujourd'hui, 86 ans ! »",
        "— Le jeli, là, murmura Karifalla, c'est l'homme qu'on a vu au check-point, en uniforme. Le jour, il est policier ; les grands jours, il est jeli.",
        "À Kankan, on est tous au moins deux choses à la fois." ] },
      { id: "discours", title: "Le discours de Sory", paragraphs: [
        "À l'auditorium, Sory prit la parole devant tous.",
        "— Notre Sèdè avait prévu d'offrir à Kankan, pour les 86 ans, des puits améliorés. Quatre dans les villages, deux au centre. C'était notre programme.",
        "— Mais une voix, dans ma famille, m'a rappelé une chose : la vie de Kankan dépend du Milo. Et notre fleuve se meurt sous nos ordures.",
        "— Alors notre Sèdè ajoute un quatrième jour à la Mamaya. Un jour de labeur. Tout Kankan en gants, sur les berges. Pour sauver le fleuve. Pour les cent ans qui viennent.",
        "— La Mairie appuie, dit le Maire en se levant, et finance les premiers chantiers.",
        "Sory n'avait pas prononcé le nom de Kadiatou. Mais toute la famille avait compris." ] },
      { id: "anciens", title: "Le conseil des anciens Sömönö", paragraphs: [
        "Les anciens Sömönö se concertaient depuis le matin.",
        "— Le quatrième jour, ils nettoieront. Bien. Et après ? Quand nous ne serons plus là, qui pagayera sur ce fleuve ? dit Bâba Soriba.",
        "— Si le fleuve vit, et que les pirogues vivent sur le fleuve, le fleuve ne mourra jamais, répondit Bâba Fadiala.",
        "— Nous offrons une course de pirogues, dit Bâba Mory. Le soir du quatrième jour, à tous ceux qui auront travaillé sur les berges. Et pendant qu'on rame, on apprend le métier aux jeunes. La course, c'est l'école.",
        "Le jeli l'annonça : « Le quatrième jour, vous nettoyez. Le soir, ils pagayent. Et nos pirogues reprennent leur cours sur le Milo ! »" ] },
      { id: "quatrieme", title: "Le quatrième jour", paragraphs: [
        "Au matin du quatrième jour, tout Kankan était sur la berge.",
        "— Par groupes de dix ! Des gants pour tout le monde ! Les zones dangereuses sont marquées en rouge ! lança Sory.",
        "— On va se salir, frérot, dit Karifalla.",
        "— I came for this. Je suis venue pour ça, répondit Aminata." ] },
      { id: "place", title: "Chacun sa place", paragraphs: [
        "Des enfants accoururent pour aider.",
        "— Pas vous, les petits ! dit Sory. C'est trop dangereux : des éclats, des objets coupants.",
        "— Attendez ! reprit Karifalla. Vous avez vu les murs, là-bas, tout décrépis ? Si on les peignait, nous, pendant que les grands nettoient le fleuve ?",
        "— Avec quoi ? — C'est ça, la question. Aminata !",
        "— Je peux appeler mon père ; il sera content de payer la peinture et le matériel.",
        "Deux chantiers en miroir, et tout Kankan en mouvement. — C'est beau, hein ? — C'est nous." ] },
      { id: "course", title: "La course des pirogues", paragraphs: [
        "Le soir venu, on prépara les pirogues.",
        "— Sory, tu pagayes avec moi. Derrière, dit Bâba Karamoko.",
        "La pagaie de l'ancien donnait le rythme ; celle du jeune apprenait, en temps réel.",
        "Pour la première fois depuis trente ans, quelqu'un pagayait sur le Milo." ] },
      { id: "coule", title: "Coule, Milo", paragraphs: [
        "Devant les caméras, le Maire signa le décret de réhabilitation du Milo et de construction d'un belvédère. — À nos enfants, à nos petits-enfants : le Milo continuera de couler.",
        "— C'était ta Mamaya, Sory, dit Bâba Karamoko. — C'était la nôtre, Bâba.",
        "Le ciel s'embrasa, et tout Kankan se tut. Au bord du fleuve, le jeli Kouyaté éleva la voix :",
        "« Ô Milo, fleuve de mes pères. Tu as porté les pirogues des Sömönö au temps de l'empire. Tu as vu naître Kankan-Nabaya. Tu as nourri les pêcheurs.",
        "Et aujourd'hui, en l'an 86 de la Mamaya, tu as été lavé — par tes propres enfants. Et tes pirogues t'ont retrouvé.",
        "Coule, Milo. Coule. Et que ta mémoire se transmette. »" ] },
    ],
  },
  en: {
    lang: "en", dir: "ltr", label: "English", bookTitle: "Saving the Milo",
    sections: [
      { id: "route", title: "On the Road to Kankan", paragraphs: [
        "Ever since Kindia, Kadiatou's big brother had not stopped talking.",
        "— You see, Kadi, this year the Mamaya turns 86! People will remember it. And our wells in the villages: four in six months! When the ministry comes to inaugurate them, who will they look for? The delegate. Me.",
        "— Sory, said their father Bangaly, without taking his eyes off the road.",
        "At the entrance to Kankan, a man called out: — Hey, Sory! Delegate! You kept us waiting!" ] },
      { id: "cour", title: "The Kaba Courtyard", paragraphs: [
        "In the family courtyard, they hugged Kadiatou and marvelled at how she had grown.",
        "— Cousin! You're Kadiatou, right? I'm Karifalla, from Abidjan. Do you speak Maninka?",
        "— A little, she answered, shyly.",
        "— We'll teach you. And over there is Aminata, our cousin from New York!",
        "— Hi… Bonjour, said Aminata timidly.",
        "— Now that we're three, said Karifalla, we're going to have fun." ] },
      { id: "baba", title: "Bâba Karamoko", paragraphs: [
        "Then they led her to her grandfather, Bâba Karamoko.",
        "— Bâba, in Conakry, in the living room, there's a photo. I think it's you: standing in a canoe, holding a trophy.",
        "— Ah, that photo… That was in '72, on the Milo, he chuckled softly.",
        "— The Milo here?",
        "— The Milo here. Tomorrow morning, after the six o'clock prayer, you come with me: I'll take you to see the sunrise over the river. There is nothing more beautiful in the world." ] },
      { id: "lever", title: "Sunrise over the Milo", paragraphs: [
        "The next day, at dawn, the Milo woke before their eyes. Kadiatou held her breath.",
        "— I told you so, breathed Bâba Karamoko. Now, let's go down. I want to show you something else." ] },
      { id: "blesse", title: "The Wounded Milo", paragraphs: [
        "Down below was the everyday Milo. It was worse than anything Kadiatou had imagined: rubbish and sand, everywhere.",
        "— But Bâba… it's horrible.",
        "— It wasn't always like this, my girl. When I was your age, the river was twice as wide. Canoes crossed each other on it. That lighthouse over there was in use. Now it only watches.",
        "— You saw the sunrise; it is still there. But underneath, look at what we have done." ] },
      { id: "manguier", title: "Under the Mango Tree", paragraphs: [
        "That evening, under the mango tree, Kadiatou found her brother.",
        "— So you saw the river? Beautiful in the morning, isn't it?",
        "— Beautiful in the morning. But underneath, Sory… did you see it underneath?",
        "— I saw it. Everyone saw it. That's why the Mamaya isn't only dance: there are many actions for the community. This year, we're offering improved wells.",
        "— That's good. But add a big action for the river. The life of Kankan depends on it." ] },
      { id: "maire", title: "The Mayor Listens", paragraphs: [
        "At the rehearsals, the cousins were amazed. — Classier than anything I saw in Abidjan, said Karifalla. — It's beautiful, added Aminata.",
        "— Mr Mayor, said Sory, my sister has a proposal.",
        "— The Milo, sir… something must be done. It's not just rubbish: it's the sand, it's everything, said Kadiatou.",
        "— You are right, miss. It's a matter that haunts me. Add a Milo action to your programme, Sory; I will announce my support at the auditorium." ] },
      { id: "mamaya", title: "The Mamaya of 86 Years", paragraphs: [
        "Then came Tabaski, the holy day. And three days later, the Mamaya began.",
        "The griot Kouyaté sang: \"Kankan! Kankan-Nabaya! City of my fathers! Today, 86 years!\"",
        "— That griot, whispered Karifalla, is the man we saw at the checkpoint, in uniform. By day he's a police officer; on the great days, he's a griot.",
        "In Kankan, everyone is at least two things at once." ] },
      { id: "discours", title: "Sory's Speech", paragraphs: [
        "At the auditorium, Sory spoke before everyone.",
        "— Our Sèdè had planned to offer Kankan improved wells for the 86 years. Four in the villages, two in the centre. That was our programme.",
        "— But a voice, in my family, reminded me of something: the life of Kankan depends on the Milo. And our river is dying under our rubbish.",
        "— So our Sèdè is adding a fourth day to the Mamaya. A day of labour. All of Kankan in gloves, on the banks. To save the river. For the hundred years to come.",
        "— The town hall supports this, said the mayor, rising, and will fund the first works.",
        "Sory had not said Kadiatou's name. But the whole family understood." ] },
      { id: "anciens", title: "The Council of the Old Sömönö", paragraphs: [
        "The old Sömönö had been conferring since morning.",
        "— On the fourth day, they'll clean. Good. And after? When we are gone, who will paddle on this river? said Bâba Soriba.",
        "— If the river lives, and the canoes live on the river, the river will never die, answered Bâba Fadiala.",
        "— We offer a canoe race, said Bâba Mory. On the evening of the fourth day, to all who will have worked on the banks. And while we row, we teach the craft to the young. The race is a school.",
        "The griot announced it: \"On the fourth day, you clean. In the evening, they paddle. And our canoes return to their course on the Milo!\"" ] },
      { id: "quatrieme", title: "The Fourth Day", paragraphs: [
        "On the morning of the fourth day, all of Kankan was on the bank.",
        "— In groups of ten! Gloves for everyone! The dangerous areas are marked in red! called Sory.",
        "— We're going to get dirty, brother, said Karifalla.",
        "— I came for this, answered Aminata." ] },
      { id: "place", title: "Everyone Has a Place", paragraphs: [
        "Children rushed up to help.",
        "— Not you, little ones! said Sory. It's too dangerous: shards, sharp objects.",
        "— Wait! said Karifalla. Have you seen those walls over there, all crumbling? What if we painted them, while the grown-ups clean the river?",
        "— With what? — That's the question. Aminata!",
        "— I can call my dad; he'll be happy to pay for the paint and the materials.",
        "Two worksites mirroring each other, and all of Kankan in motion. — It's beautiful, isn't it? — It's us." ] },
      { id: "course", title: "The Canoe Race", paragraphs: [
        "When evening came, they prepared the canoes.",
        "— Sory, you paddle with me. Behind, said Bâba Karamoko.",
        "The elder's paddle set the rhythm; the young one's paddle learned, in real time.",
        "For the first time in thirty years, someone was paddling on the Milo." ] },
      { id: "coule", title: "Flow, Milo", paragraphs: [
        "Before the cameras, the mayor signed the decree to rehabilitate the Milo and build a riverside overlook. — For our children, for our grandchildren: the Milo will keep flowing.",
        "— It was your Mamaya, Sory, said Bâba Karamoko. — It was ours, Bâba.",
        "The sky blazed, and all of Kankan fell silent. At the river's edge, the griot Kouyaté raised his voice:",
        "\"O Milo, river of my fathers. You carried the canoes of the Sömönö in the time of the empire. You watched Kankan-Nabaya be born. You fed the fishermen.",
        "And today, in the 86th year of the Mamaya, you have been washed — by your own children. And your canoes have found you again.",
        "Flow, Milo. Flow. And may your memory be passed on.\"" ] },
    ],
  },
  ar: {
    lang: "ar", dir: "rtl", label: "العربية", bookTitle: "إنقاذ نهر الميلو",
    sections: [
      { id: "route", title: "على طريق كانكان", paragraphs: [
        "منذ كينديا، لم يتوقّف أخو كادياتو الكبير عن الكلام.",
        "— أرأيتِ يا كادي، هذا العام تبلغ المامايا 86 عامًا! سيتذكّرها الناس. وآبارنا في القرى: أربعة في ستة أشهر! حين تأتي الوزارة للتدشين، عمّن ستبحث؟ عن المندوب. عنّي أنا.",
        "— سوري، قال أبوهما بانغالي دون أن يرفع عينيه عن الطريق.",
        "عند مدخل كانكان ناداه رجل: — يا سوري! أيها المندوب! لقد جعلتنا ننتظر!" ] },
      { id: "cour", title: "فناء آل كابا", paragraphs: [
        "في فناء العائلة، احتضنوا كادياتو وتعجّبوا كم كبرت.",
        "— يا ابنة عمّي! أنتِ كادياتو، صحيح؟ أنا كاريفالا، من أبيدجان. هل تتكلّمين المانينكا؟",
        "— قليلًا، أجابت في حرج.",
        "— سنعلّمكِ. وهناك أمينة، ابنة عمّنا من نيويورك!",
        "— هاي… مرحبًا، قالت أمينة بخجل.",
        "— ما دمنا الآن ثلاثة، قال كاريفالا، فسنمرح كثيرًا." ] },
      { id: "baba", title: "بابا كاراموكو", paragraphs: [
        "ثم اقتادوها إلى جدّها، بابا كاراموكو.",
        "— بابا، في كوناكري، في الصالون، صورة. أظنها أنت: تقف في زورق وتمسك كأسًا.",
        "— آه، تلك الصورة… كانت في عام 72، على نهر الميلو، ضحك بهدوء.",
        "— ميلو هنا؟",
        "— ميلو هنا. غدًا صباحًا، بعد صلاة السادسة، تأتين معي: سآخذك لترَي شروق الشمس على النهر. ليس في الدنيا أجمل منه." ] },
      { id: "lever", title: "شروق الشمس على الميلو", paragraphs: [
        "في الغد، عند الفجر، استيقظ الميلو أمام عينيهما. حبست كادياتو أنفاسها.",
        "— ألم أقل لكِ؟ همس بابا كاراموكو. والآن، لننزل. أريد أن أُريكِ شيئًا آخر." ] },
      { id: "blesse", title: "الميلو الجريح", paragraphs: [
        "في الأسفل كان الميلو في كل يوم. كان أسوأ من كل ما تخيّلته كادياتو: النفايات والرمل في كل مكان.",
        "— لكن يا بابا… هذا فظيع.",
        "— لم يكن دائمًا هكذا يا ابنتي. حين كنتُ في مثل سنّك، كان النهر أعرض من هذا مرّتين. كانت الزوارق تتقاطع عليه. وتلك المنارة هناك كانت تعمل. أما الآن فهي تتفرّج فحسب.",
        "— رأيتِ الشروق؛ ما زال هنا. لكن في الأسفل، انظري ماذا فعلنا." ] },
      { id: "manguier", title: "تحت شجرة المانجو", paragraphs: [
        "في المساء، تحت شجرة المانجو، وجدت كادياتو أخاها.",
        "— رأيتِ النهر؟ جميل في الصباح، أليس كذلك؟",
        "— جميل في الصباح. لكن في الأسفل يا سوري… هل رأيته في الأسفل؟",
        "— رأيته. الجميع رأى. لهذا المامايا ليست رقصًا فقط: فيها أعمال كثيرة للمجتمع. هذا العام نُهدي آبارًا محسّنة.",
        "— هذا جميل. لكن أضِف عملًا كبيرًا للنهر. حياة كانكان تتوقّف عليه." ] },
      { id: "maire", title: "العمدة يصغي", paragraphs: [
        "في التدريبات، لم يصدّق ابنا العمّ ما يريان. — أأنق من كل ما رأيته في أبيدجان، قال كاريفالا. — إنه جميل، أضافت أمينة.",
        "— سيادة العمدة، قال سوري، لأختي اقتراح.",
        "— النهر يا سيدي… الميلو. يجب أن نفعل شيئًا. ليست نفايات فقط: إنه الرمل، إنه كل شيء، قالت كادياتو.",
        "— أنتِ محقّة يا آنسة. إنه أمر يقضّ مضجعي. أدخِل عملًا للميلو في برنامجكم يا سوري؛ وسأعلن دعمي في القاعة." ] },
      { id: "mamaya", title: "مامايا الـ86 عامًا", paragraphs: [
        "ثم جاءت التاباسكي، اليوم المقدّس. وبعد ثلاثة أيام، بدأت المامايا.",
        "كان الغريو كوياتي يغنّي: «كانكان! كانكان-نابايا! مدينة آبائي! اليوم 86 عامًا!»",
        "— ذلك الغريو، همس كاريفالا، هو الرجل الذي رأيناه عند الحاجز بالزيّ الرسمي. في النهار شرطيّ، وفي الأيام الكبيرة غريو.",
        "في كانكان، كلٌّ منّا شيئان على الأقل في آنٍ واحد." ] },
      { id: "discours", title: "خطاب سوري", paragraphs: [
        "في القاعة، تكلّم سوري أمام الجميع.",
        "— كان فريقنا (السيدي) قد قرّر أن يُهدي كانكان، في عيدها الـ86، آبارًا محسّنة. أربعة في القرى، واثنان في المركز. كان ذلك برنامجنا.",
        "— لكن صوتًا في عائلتي ذكّرني بشيء: حياة كانكان تتوقّف على الميلو. ونهرنا يموت تحت نفاياتنا.",
        "— لذا يضيف فريقنا يومًا رابعًا إلى المامايا. يوم عمل. كانكان كلها بالقفازات على الضفاف. لإنقاذ النهر. من أجل المئة عام القادمة.",
        "— البلدية تدعم، قال العمدة واقفًا، وتموّل أولى الأعمال.",
        "لم ينطق سوري باسم كادياتو. لكن العائلة كلها فهمت." ] },
      { id: "anciens", title: "مجلس شيوخ السومونو", paragraphs: [
        "كان شيوخ السومونو يتشاورون منذ الصباح.",
        "— في اليوم الرابع سينظّفون. حسن. وبعد ذلك؟ حين لا نعود موجودين، من سيجدّف على هذا النهر؟ قال بابا سوريبا.",
        "— إن عاش النهر، وعاشت الزوارق على النهر، فلن يموت النهر أبدًا، أجاب بابا فاديالا.",
        "— نُهدي سباق زوارق، قال بابا موري. مساء اليوم الرابع، لكل من عمل على الضفاف. وبينما نجدّف، نعلّم الحرفة للشباب. السباق مدرسة.",
        "أعلنها الغريو: «اسمعي يا كانكان! اليوم الرابع تنظّفون. وفي المساء يجدّفون. وتعود زوارقنا إلى مجراها على الميلو!»" ] },
      { id: "quatrieme", title: "اليوم الرابع", paragraphs: [
        "في صباح اليوم الرابع، كانت كانكان كلها على الضفّة.",
        "— في مجموعات من عشرة! قفازات للجميع! المناطق الخطرة معلّمة بالأحمر! نادى سوري.",
        "— سنتّسخ يا أخي، قال كاريفالا.",
        "— لهذا جئتُ، أجابت أمينة." ] },
      { id: "place", title: "لكلٍّ مكانه", paragraphs: [
        "هرع الأطفال للمساعدة.",
        "— ليس أنتم أيها الصغار! قال سوري. الأمر خطر جدًا: شظايا وأشياء حادّة.",
        "— مهلًا! قال كاريفالا. أرأيتم تلك الجدران المتهالكة هناك؟ ماذا لو طليناها نحن، بينما ينظّف الكبار النهر؟",
        "— بماذا؟ — هذا هو السؤال. أمينة!",
        "— أستطيع الاتصال بأبي؛ سيسعده أن يدفع ثمن الطلاء والمعدّات.",
        "ورشتان متقابلتان، وكانكان كلها تتحرّك. — جميل، أليس كذلك؟ — هذا نحن." ] },
      { id: "course", title: "سباق الزوارق", paragraphs: [
        "حين جاء المساء، أعدّوا الزوارق.",
        "— سوري، تجدّف معي. في الخلف، قال بابا كاراموكو.",
        "كانت مجدافة الشيخ تعطي الإيقاع؛ ومجدافة الشاب تتعلّم، في اللحظة نفسها.",
        "لأول مرة منذ ثلاثين عامًا، كان أحدهم يجدّف على الميلو." ] },
      { id: "coule", title: "اجرِ يا ميلو", paragraphs: [
        "أمام الكاميرات، وقّع العمدة مرسوم إعادة تأهيل الميلو وبناء شُرفة على ضفّته. — لأبنائنا ولأحفادنا: سيظلّ الميلو يجري.",
        "— كانت تلك مامايا تخصّك يا سوري، قال بابا كاراموكو. — كانت مامايانا، يا بابا.",
        "اشتعلت السماء، وصمتت كانكان كلها. على ضفّة النهر، رفع الغريو كوياتي صوته:",
        "«يا ميلو، يا نهر آبائي. حملتَ زوارق السومونو في زمن الإمبراطورية. رأيتَ كانكان-نابايا تُولد. أطعمتَ الصيّادين.",
        "واليوم، في العام الـ86 للمامايا، غُسلتَ — على يد أبنائك أنت. وعادت إليك زوارقك.",
        "اجرِ يا ميلو. اجرِ. ولتُنقَل ذاكرتك من جيل إلى جيل.»" ] },
    ],
  },
  zh: {
    lang: "zh", dir: "ltr", label: "中文", bookTitle: "拯救米洛河",
    sections: [
      { id: "route", title: "前往坎康的路上", paragraphs: [
        "从金迪亚一路过来，卡迪亚图的哥哥就没停过嘴。",
        "——你看，卡迪，今年马马亚节满86年了！大家都会记住的。还有我们在村里打的井：半年四口！等部里来剪彩，他们会找谁？找代表。找我。",
        "——索里，他们的父亲班加利说，眼睛没离开过路面。",
        "在坎康入口，一个男人喊道：——嘿，索里！代表！你让我们等了好久！" ] },
      { id: "cour", title: "卡巴家的院子", paragraphs: [
        "在家族的院子里，大家拥抱卡迪亚图，惊叹她长高了。",
        "——表妹！你就是卡迪亚图吧？我是卡里法拉，从阿比让来的。你会说马宁卡语吗？",
        "——会一点，她有些不好意思地答道。",
        "——我们教你。那边那个是阿米娜塔，我们从纽约来的表姐！",
        "——Hi……你好，阿米娜塔怯生生地说。",
        "——现在我们三个人了，卡里法拉说，可有得乐了。" ] },
      { id: "baba", title: "巴巴·卡拉莫科", paragraphs: [
        "然后他们把她带到祖父巴巴·卡拉莫科面前。",
        "——巴巴，在科纳克里，客厅里有一张照片。我想那是你：你站在一只独木舟上，手里举着奖杯。",
        "——啊，那张照片啊……那是七二年，在米洛河上，他轻轻笑了。",
        "——这里的米洛河？",
        "——这里的米洛河。明天早上，做完六点的祷告，你跟我来：我带你去看河上的日出。世上没有比这更美的了。" ] },
      { id: "lever", title: "米洛河上的日出", paragraphs: [
        "第二天黎明，米洛河在他们眼前苏醒。卡迪亚图屏住了呼吸。",
        "——我早说了吧，巴巴·卡拉莫科低声说。现在，我们下去。我还要给你看点别的。" ] },
      { id: "blesse", title: "受伤的米洛河", paragraphs: [
        "下面，是日常的米洛河。比卡迪亚图想象的还要糟：垃圾、泥沙，到处都是。",
        "——可是巴巴……这太可怕了。",
        "——它不是一直这样的，我的孩子。我像你这么大时，河面有现在的两倍宽。独木舟在河上来来往往。那边那座灯塔还在用。如今它只是看着。",
        "——你看到了日出，它还在。但在水面之下，看看我们都做了些什么。" ] },
      { id: "manguier", title: "芒果树下", paragraphs: [
        "傍晚，在芒果树下，卡迪亚图找到了哥哥。",
        "——你看到河了？早上很美吧？",
        "——早上很美。可是水面之下呢，索里……你看到下面了吗？",
        "——我看到了。大家都看到了。所以马马亚节不只是舞蹈：还有很多为社区做的事。今年我们要捐建改良水井。",
        "——这很好。但再加一项为河流的大行动吧。坎康的命，系在这条河上。" ] },
      { id: "maire", title: "市长在听", paragraphs: [
        "排练时，两个表亲看呆了。——比我在阿比让见过的都气派，卡里法拉说。——It's beautiful，阿米娜塔补了一句。",
        "——市长先生，索里说，我妹妹有个提议。",
        "——是这条河，先生……米洛河。必须做点什么。不只是垃圾：还有泥沙，还有一切，卡迪亚图说。",
        "——你说得对，姑娘。这件事一直困扰着我。索里，在你们的项目里加一项米洛河行动吧；我会在礼堂宣布支持。" ] },
      { id: "mamaya", title: "八十六周年的马马亚", paragraphs: [
        "塔巴斯基节到了，那是神圣的日子。三天之后，马马亚节开始了。",
        "格里奥·库亚特唱道：「坎康！坎康-纳巴亚！我父辈的城！今天，八十六年！」",
        "——那个格里奥，卡里法拉低声说，就是我们在检查站见到的那个穿制服的人。白天他是警察，大日子里他是格里奥。",
        "在坎康，每个人至少同时是两种身份。" ] },
      { id: "discours", title: "索里的演讲", paragraphs: [
        "在礼堂里，索里当着所有人讲话。",
        "——为了八十六周年，我们的「塞德」本打算为坎康捐建改良水井。村里四口，城中两口。这是我们原定的计划。",
        "——但我家里有一个声音提醒了我一件事：坎康的命系于米洛河。而我们的河，正死在我们自己的垃圾下面。",
        "——所以，我们的「塞德」要为马马亚节加上第四天。一个劳动日。整个坎康戴着手套，走上河岸。为了拯救这条河。为了将要到来的一百年。",
        "——市政府支持，市长站起来说，并出资启动第一批工程。",
        "索里没有说出卡迪亚图的名字。但全家人都明白了。" ] },
      { id: "anciens", title: "索蒙诺长老会议", paragraphs: [
        "索蒙诺的长老们从早上就在商议。",
        "——第四天他们会清理。好。可之后呢？等我们不在了，谁来在这条河上划桨？巴巴·索里巴说。",
        "——只要河活着，独木舟也活在河上，这条河就永远不会死，巴巴·法迪亚拉答道。",
        "——我们来办一场独木舟赛，巴巴·莫里说。第四天的傍晚，献给所有在河岸上劳动过的人。我们一边划桨，一边把这门手艺教给年轻人。比赛，就是学校。",
        "格里奥宣布道：「听着，坎康！第四天你们清理。傍晚，他们划桨。我们的独木舟，要重新在米洛河上启程！」" ] },
      { id: "quatrieme", title: "第四天", paragraphs: [
        "第四天清晨，整个坎康都在河岸上。",
        "——十人一组！人人都戴手套！危险区域用红色标出！索里喊道。",
        "——我们要弄脏了，老兄，卡里法拉说。",
        "——我就是为这个来的，阿米娜塔答道。" ] },
      { id: "place", title: "人人都有位置", paragraphs: [
        "孩子们也跑来帮忙。",
        "——你们不行，小家伙们！索里说。太危险了：有碎片，有尖锐的东西。",
        "——等等！卡里法拉说。你们看到那边那些破败的墙了吗？趁大人们清理河流，我们去把墙刷一刷怎么样？",
        "——用什么刷？——这正是问题所在。阿米娜塔！",
        "——我可以打电话给我爸爸；他会很乐意出钱买油漆和材料。",
        "两个工地相互映照，整个坎康都在动。——很美吧？——这是我们做的。" ] },
      { id: "course", title: "独木舟赛", paragraphs: [
        "傍晚到了，他们准备好独木舟。",
        "——索里，你跟我一起划。在后面，巴巴·卡拉莫科说。",
        "长者的桨定下节奏；年轻人的桨，就在当下学着。",
        "三十年来，第一次有人在米洛河上划桨。" ] },
      { id: "coule", title: "流吧，米洛河", paragraphs: [
        "在镜头前，市长签署了修复米洛河、修建观景台的法令。——为了我们的孩子，为了我们的子孙：米洛河会继续流淌。",
        "——这是你的马马亚，索里，巴巴·卡拉莫科说。——这是我们大家的，巴巴。",
        "天空燃烧起来，整个坎康陷入沉默。在河边，格里奥·库亚特扬声唱道：",
        "「啊，米洛，我父辈的河。在帝国的年代，你载过索蒙诺人的独木舟。你看着坎康-纳巴亚诞生。你养育了渔民。",
        "而今天，在马马亚节的第八十六年，你被洗净了——被你自己的孩子。你的独木舟也重新找到了你。",
        "流吧，米洛。流吧。愿你的记忆代代相传。」" ] },
    ],
  },
};
