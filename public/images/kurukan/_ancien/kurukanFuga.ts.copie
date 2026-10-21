// Série « Kurukan Fuga » — la naissance de la Charte du Mandén, racontée par un griot à ses enfants.
// Récit-cadre contemporain (famille Kouyaté de Conakry) + bascule historique post-Kirina (1235).
// Cible Passage (13-15 ans). Texte de Moh. Versions EN/AR/ZH = teasers/titres seulement pour l'instant ;
// le corps des épisodes (reader) est en français — EN/AR/ZH à produire ultérieurement.
// Ajouter un épisode = passer statut 'soon' -> 'live' + remplir reader. Rien d'autre.
export type Lang = "fr" | "en" | "ar" | "zh";
type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };
export type Reader = Partial<Record<Lang, RBook>>;
export type Episode = {
  numero: number;
  titre: Record<Lang, string>;
  teaser?: Record<Lang, string>;
  statut: "live" | "soon";
  cover?: string;     // planche resserrée — vignette pour la carte de l'épisode
  planche?: string;   // planche plein-cadre — fond du gabarit, présent pendant la lecture
  cote?: "gauche" | "droite";
  bande?: "verticale" | "horizontale";
  reader?: Reader;
};

export const KURUKAN_ACCENT = "#BA7517"; // ocre Mandén

export const KURUKAN = {
  id: "kurukan-fuga",
  titre: "Kurukan Fuga",
  accroche: "La naissance de la Charte du Mandén.",
  pitch:
    "Sept cents ans avant que d'autres peuples n'écrivent leurs droits de l'homme, les sages du Mandén se réunirent sur la plaine de Kurukan Fuga pour fonder un empire avec des mots, non avec des armes. À travers les soirées d'une famille de griots de Conakry, Sidiman raconte à ses enfants comment naquit la grande Charte — article par article, voix par voix.",
  accent: KURUKAN_ACCENT,
  badge: "Pati Passage · 13–15 ans",
  cover: "/images/kurukan/kurukan-couverture.webp",
  provenance: "D'après la Charte du Mandén (Kurukan Fuga, 1236), patrimoine culturel immatériel de l'humanité (UNESCO, 2009).",
  episodes: [
    // ───────────────────────── ÉPISODE 1 ─────────────────────────
    {
      numero: 1, statut: "live",
      planche: "/images/kurukan/ep1-planche.webp",
      cover: "/images/kurukan/ep1-cover.webp",
      cote: "gauche",
      bande: "verticale",
      titre: { fr: "Le Serment du Griot", en: "The Griot's Oath", ar: "قَسَم الغريّو", zh: "格里奥的誓言" },
      teaser: {
        fr: "Au retour d'un baptême où de faux griots criaient pour de l'argent, le petit Morissanda confie son malaise à son père. Sidiman lui révèle alors ce qu'était un véritable djeli — et d'où vient le serment que sa famille porte depuis Kurukan Fuga.",
        en: "On the way back from a naming ceremony where false griots shouted for money, young Morissanda shares his unease with his father. Sidiman reveals what a true djeli once was — and where the oath his family has carried since Kurukan Fuga comes from.",
        ar: "في طريق العودة من حفل تسمية حيث كان غريّوون زائفون يصيحون طلبًا للمال، يبوح الصغير Morissanda بضيقه لأبيه. فيكشف له Sidiman ما كان عليه الجلّي الحقيقيّ — ومن أين جاء القَسَم الذي تحمله عائلته منذ Kurukan Fuga.",
        zh: "从一场假格里奥们为了钱叫喊的命名礼回来的路上，小 Morissanda 向父亲诉说他的不安。Sidiman 于是向他揭示真正的「djeli」曾经是什么——以及他家族自 Kurukan Fuga 以来所背负的誓言从何而来。",
      },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le Serment du Griot", sections: [
          { title: "Le baptême", image: "/images/kurukan/ep1/serment_01.jpg", paragraphs: [
            "Sous la grande tente du baptême, la foule dansait. Les haut-parleurs crachaient la musique, des hommes en boubous brillants tendaient la main vers les invités : « Donne pour le griot ! »",
            "Morissanda, debout à l'écart, regardait tout cela sans joie. Son père Sidiman posa une main sur son épaule.",
            "— Viens, mon fils. On rentre." ] },
          { title: "Dans la voiture", image: "/images/kurukan/ep1/serment_02.jpg", paragraphs: [
            "Conakry défilait par la fenêtre : les avenues animées, les taxis jaunes, la mer qui scintillait au loin entre les immeubles.",
            "— Papa… je peux te dire quelque chose ? murmura Morissanda.",
            "— Bien sûr, mon fils. Dis-moi." ] },
          { title: "Ce qui t'a choqué", image: "/images/kurukan/ep1/serment_03.jpg", paragraphs: [
            "— Quelque chose t'a touché au baptême, non ? Tu as vu quelque chose qui t'a choqué ?",
            "Morissanda hésita, puis se tourna vers son père." ] },
          { title: "La dame", image: "/images/kurukan/ep1/serment_04.jpg", paragraphs: [
            "— Il y avait une dame. Elle s'est approchée d'un monsieur bien habillé, elle a juste tapé son épaule et elle a dit : « Toi, tu es le digne fils de ton père ! Donc je sais que tu me donneras un peu ! »",
            "Le monsieur a souri, il a donné de l'argent. Mais Papa… elle ne raconte rien. Elle ne connaît même pas son père. Elle dit ça juste pour avoir des billets." ] },
          { title: "Le musicien", image: "/images/kurukan/ep1/serment_05.jpg", paragraphs: [
            "— Et il y avait le musicien avec le petit instrument en bois et la lamelle, le gongoma. J'aime bien son son.",
            "Mais lui, il répète juste : « Grand Excellence ! Grand Excellence ! » Encore et encore. Quelle excellence ? Pourquoi ? Il ne raconte rien du tout." ] },
          { title: "Un gardien", image: "/images/kurukan/ep1/serment_06.jpg", paragraphs: [
            "— Ce que tu as senti là-bas, c'est important, dit Sidiman. Un vrai djeli, ce n'est pas ça.",
            "Un djeli, ce n'est pas quelqu'un qui flatte pour de l'argent. C'est un gardien : de la mémoire, de la parole, de la vérité. Laisse-moi te donner des exemples. Des vrais." ] },
          { title: "Sory Kandia, le médiateur", image: "/images/kurukan/ep1/serment_07.jpg", paragraphs: [
            "— Tu as entendu parler de Sory Kandia Kouyaté ? Un grand djeli, de notre famille.",
            "Un jour, deux présidents — celui du Mali et celui du Burkina Faso — étaient fâchés, presque prêts à se faire la guerre. C'est Sory Kandia qui s'est levé. Il leur a rappelé qu'ils étaient liés par le sanankouya, cette alliance sacrée où l'on se taquine au lieu de se battre.",
            "— Avec juste des mots ? souffla Morissanda.",
            "— Avec la vérité et la mémoire. C'est ça, un djeli médiateur." ] },
          { title: "Le témoin", image: "/images/kurukan/ep1/serment_08.jpg", paragraphs: [
            "— Aujourd'hui, quand deux personnes vendent un terrain, il faut un huissier de justice : quelqu'un d'officiel qui dit « j'ai vu, je témoigne ».",
            "Avant les papiers, c'était le djeli qui faisait ça. Il écoutait, il mémorisait. Et trente ans plus tard, si quelqu'un mentait, on disait : « Appelez le djeli. »",
            "— Donc sa mémoire, c'était comme un papier vivant.",
            "— Exactement. Un papier qui respire et qui ne ment pas." ] },
          { title: "Le magistrat", image: "/images/kurukan/ep1/serment_09.jpg", paragraphs: [
            "Morissanda réfléchit fort, puis son visage s'éclaira.",
            "— Papa ! Alors c'est un peu comme un juge aussi, non ? Un magistrat ! Parce que quand deux personnes se disputent, le juge écoute les deux côtés et décide qui a raison !",
            "— Mais oui, mon fils ! Exactement ! Le djeli était l'arbitre. Il ne prenait pas parti pour le plus riche. Et tu viens de trouver ça tout seul." ] },
          { title: "Le messager", image: "/images/kurukan/ep1/serment_10.jpg", paragraphs: [
            "— Tu connais les gens qui passent à la radio, les journalistes, les communicants, ceux qui expliquent pourquoi une idée est bonne ?",
            "Le djeli, c'était ça aussi. Quand un roi voulait lancer une grande idée — un marché, un puits, la paix — c'est le djeli qui allait de village en village l'expliquer.",
            "— Donc le djeli, c'était beaucoup de métiers à la fois ?",
            "— Médiateur, témoin, juge, messager… et au fond, une seule chose : un gardien de la vérité." ] },
          { title: "Ce qui s'est perdu", image: "/images/kurukan/ep1/serment_11.jpg", paragraphs: [
            "— Mais alors pourquoi aujourd'hui ils font juste « Grand Excellence » ? Pourquoi ils ont oublié ?",
            "— Plusieurs choses sont arrivées. D'abord, la colonisation : les colons ont dit « vous n'avez pas besoin de griots, vous avez des écoles et des papiers ».",
            "Puis les villes ont grandi. Apprendre par cœur sept cents généalogies prend une vie. Crier « Grand Excellence », c'est plus facile que d'apprendre la vérité." ] },
          { title: "Les vrais gardiens", image: "/images/kurukan/ep1/serment_12.jpg", paragraphs: [
            "— Mais tout n'est pas perdu. Il existe encore des familles qui gardent la vraie tradition.",
            "Nous, les Kouyaté, nous descendons de Balla Fasséké, le tout premier griot de Soundiata Keïta, le fondateur de l'empire du Mali.",
            "Et notre famille garde encore le Soso Bala, le balafon sacré vieux de huit cents ans, là-bas à Niagassola." ] },
          { title: "Imagine…", image: "/images/kurukan/ep1/serment_13.jpg", paragraphs: [
            "Sidiman se gara, coupa le moteur. Son regard changea — c'était le regard d'un griot qui va raconter.",
            "— Tu veux savoir d'où vient tout ça ? Il y a presque huit cents ans, après une grande bataille appelée Kirina, quelque chose d'extraordinaire est arrivé.",
            "Ferme les yeux un instant. Imagine…" ] },
          { title: "La plaine de Kurukan Fuga", image: "/images/kurukan/ep1/serment_14.jpg", paragraphs: [
            "1235. La plaine de Kurukan Fuga, au cœur du Mandé. Soundiata venait de vaincre Soumaoro Kanté, le roi du Sosso. L'empire du Mali venait de naître.",
            "Mais un empire, ce n'est pas qu'une armée victorieuse. C'est aussi des lois, des promesses. Et le premier à se lever pour parler ne fut pas un guerrier. Ce fut un griot : Balla Fasséké Kouyaté." ] },
          { title: "La parole du griot", image: "/images/kurukan/ep1/serment_15.jpg", paragraphs: [
            "— Soundiata, tu as vaincu par l'épée, dit Balla Fasséké. Mais l'épée ne construit pas la paix.",
            "Aujourd'hui, nous n'allons pas écrire avec du sang. Nous allons parler. Et nos paroles deviendront des lois — des lois que les griots garderont, génération après génération." ] },
          { title: "La paix et le sanankouya", image: "/images/kurukan/ep1/serment_16.jpg", paragraphs: [
            "Un noble inquiet se leva : — Comment nous faire confiance ? Hier encore nos peuples se combattaient.",
            "— C'est pour cela, répondit Balla Fasséké, que toute vie sera sacrée, que plus personne ne sera réduit en esclavage par la guerre, et que les anciens ennemis deviendront des familles unies.",
            "Ainsi naquit le sanankouya : au lieu de se battre, certaines familles allaient désormais se taquiner. Liées pour toujours par le rire plutôt que par le sang." ] },
          { title: "Le serment", image: "/images/kurukan/ep1/serment_17.jpg", paragraphs: [
            "— Pour que ces promesses ne soient jamais oubliées, il faut des gardiens dont la parole vaut plus que l'or. Un griot ne doit jamais mentir sur les origines d'une famille.",
            "Soundiata se leva et posa la main sur l'épaule de Balla Fasséké :",
            "— Toi et tes descendants, vous serez les gardiens de ces lois. Vous les apprendrez par cœur. Vous les chanterez.",
            "— Je le jure. Tant qu'il y aura un Kouyaté vivant, la parole du Mandé vivra avec lui." ] },
          { title: "Quarante-quatre promesses", image: "/images/kurukan/ep1/serment_18.jpg", paragraphs: [
            "Pendant trois jours et trois nuits, ils parlèrent. De la paix entre les peuples. Du respect des femmes et des mères. Du droit de chacun à manger, à apprendre, à vivre dignement. De la protection de la nature. Du commerce honnête. De la justice pour les faibles comme pour les puissants.",
            "Quarante-quatre promesses. Quarante-quatre articles. La Charte du Mandén. Bien avant que d'autres peuples du monde n'écrivent leurs droits de l'homme, nos ancêtres les avaient déjà dits, là, sur cette plaine." ] },
          { title: "Retour sous les étoiles", image: "/images/kurukan/ep1/serment_19.jpg", paragraphs: [
            "La plaine dorée s'effaça. Ils étaient de nouveau dans la voiture, sous les étoiles de Conakry.",
            "— Donc les griots d'aujourd'hui, avec leur « Grand Excellence »… ils ont oublié tout ça ?",
            "— Ils ont oublié. Ou on les a laissés oublier. Mais toi, ce matin, tu as senti qu'il manquait quelque chose. Ton cœur connaît la vérité, même si ta tête ne la connaissait pas encore." ] },
          { title: "Une académie", image: "/images/kurukan/ep1/serment_20.jpg", paragraphs: [
            "— Papa… tu devrais ouvrir une académie. Une vraie école de djeli. Notre ancêtre a juré que tant qu'il y aurait un Kouyaté vivant, la parole du Mandé vivrait. Alors il faut que ça continue.",
            "Sidiman sourit lentement, profondément, et posa la main sur la poitrine de son fils, sur son cœur.",
            "— Une académie commence toujours par un seul élève. Et les vrais griots de demain naissent dans le cœur des enfants comme toi. Demain, nous commençons ta première leçon." ] },
        ] },
      },
    },

    // ───────────────────────── ÉPISODE 2 ─────────────────────────
    {
      numero: 2, statut: "live",
      planche: "/images/kurukan/ep2-planche.webp",
      cover: "/images/kurukan/ep2-cover.webp",
      cote: "droite",
      bande: "verticale",
      titre: { fr: "L'Assemblée des Mille Voix", en: "The Assembly of a Thousand Voices", ar: "مجلس الألف صوت", zh: "千声议会" },
      teaser: {
        fr: "Un soir de pleine lune, sur la véranda, Sidiman sort la kora et se transforme en conteur-poète sous les yeux émerveillés de Morissanda, de sa sœur Ciré et de leur mère Sona. Il révèle le secret de la gouvernance du Mandén : une assemblée où chaque voix comptait.",
        en: "One full-moon evening on the veranda, Sidiman takes out the kora and turns into a poet-storyteller before the wondering eyes of Morissanda, his sister Ciré and their mother Sona. He reveals the secret of Mandén's governance: an assembly where every voice counted.",
        ar: "في ليلةِ بدرٍ على الشرفة، يُخرج Sidiman الكورا فيتحوّل إلى شاعرٍ راوٍ أمام أعين Morissanda وأخته Ciré وأمّهما Sona المبهورة. يكشف سرّ حكم الـMandén: مجلسٌ كان فيه لكلّ صوتٍ قيمة.",
        zh: "一个满月的夜晚，在阳台上，Sidiman 拿出科拉琴，在 Morissanda、姐姐 Ciré 和母亲 Sona 惊奇的目光中化作一位吟游诗人。他揭示了 Mandén 治理的秘密：一个每个声音都算数的议会。",
      },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "L'Assemblée des Mille Voix", sections: [
          { title: "La kora au clair de lune", image: "/images/kurukan/ep2/assemblee_01.jpg", paragraphs: [
            "Sur la véranda, le repas du soir s'achevait. La lune était pleine et haute, sa lumière argentée douce. Sidiman tira une kora de son étui.",
            "— Tiens… tu sors la kora ce soir ? sourit Sona.",
            "— Le clair de lune le demande. Approchez, les enfants. Asseyez-vous." ] },
          { title: "Les premières notes", image: "/images/kurukan/ep2/assemblee_02.jpg", paragraphs: [
            "Les premières notes s'envolèrent des vingt-et-une cordes. Morissanda et Ciré se rapprochèrent.",
            "— Le Mandén a été un grand empire, dit Sidiman d'une voix changée, plus ample. Bien plus grand que ce qu'on vous enseigne à l'école.",
            "— Papa parle bizarrement ce soir… souffla Morissanda à sa sœur." ] },
          { title: "Le père se transforme", image: "/images/kurukan/ep2/assemblee_03.jpg", paragraphs: [
            "C'était la première fois qu'ils voyaient leur père ainsi. Papa si sérieux, si occupé, s'était transformé en un fantastique conteur. Un artiste. Un poète. Un professeur, aussi — mais aucune salle de classe n'avait jamais eu le bonheur d'une aussi belle ambiance, sous la lune." ] },
          { title: "Un territoire immense", image: "/images/kurukan/ep2/assemblee_04.jpg", paragraphs: [
            "— Imagine un territoire si vaste que pour le traverser à pied, il te faudrait marcher des lunes entières.",
            "Des savanes dorées, des fleuves immenses comme le Djoliba — ce que vous appelez aujourd'hui le fleuve Niger — des villes de marchands où l'or coulait comme l'eau." ] },
          { title: "Sept pays d'aujourd'hui", image: "/images/kurukan/ep2/assemblee_05.jpg", paragraphs: [
            "— Ce que le Mandén couvrait autrefois forme aujourd'hui le territoire de plusieurs pays : la Guinée, où nous sommes, le Mali, le Sénégal, la Gambie, la Guinée-Bissau, et des parts de la Mauritanie, du Burkina Faso, de la Côte d'Ivoire.",
            "— Tout ça… c'était UN seul empire ? s'émerveilla Ciré.",
            "— Un seul. Avec une seule grande loi pour les unir." ] },
          { title: "Avant l'union, les guerres", image: "/images/kurukan/ep2/assemblee_06.jpg", paragraphs: [
            "Le ton de la kora se fit plus grave.",
            "— Mais avant d'être uni, ce territoire sortait d'une longue période de guerres. Des affrontements fratricides. Des frères contre des frères. Soumaoro avait semé la terreur, et même après sa défaite, la méfiance restait, la peur restait." ] },
          { title: "Réorganiser tout le monde", image: "/images/kurukan/ep2/assemblee_07.jpg", paragraphs: [
            "— Alors Soundiata et les sages ont compris : on ne construit pas un empire seulement avec une armée. Il fallait réorganiser tout le monde. Donner à chacun sa place, son rôle, sa voix. Pour que plus jamais on ne se fasse la guerre entre frères." ] },
          { title: "Comme les Nations Unies", image: "/images/kurukan/ep2/assemblee_08.jpg", paragraphs: [
            "Ciré se redressa : — Un peu comme les Nations Unies, Papa ! Après la Deuxième Guerre mondiale, les pays se sont réunis pour éviter que ça recommence. On l'a vu en cours d'histoire !",
            "— Exactement, ma fille. Sauf que nous, les Africains, nous l'avions déjà fait. Sept cents ans plus tôt. Et d'une manière, peut-être, encore plus sage." ] },
          { title: "Sans faire de perdants", image: "/images/kurukan/ep2/assemblee_09.jpg", paragraphs: [
            "— Plus sage comment ? demanda Sona.",
            "— Aux Nations Unies, on vote. Et quand on vote, il y a ceux qui gagnent et ceux qui perdent, qui rentrent chez eux fâchés.",
            "Mais à Kurukan Fuga, on ne cherchait pas à faire des perdants. On parlait, encore et encore, jusqu'à ce que tout le monde soit d'accord. On appelle ça s'asseoir sous l'arbre à palabres." ] },
          { title: "L'arbre à palabres", image: "/images/kurukan/ep2/assemblee_10.jpg", paragraphs: [
            "— Imaginez un arbre immense, vieux de plusieurs siècles. Sous ses branches, tout le village pouvait s'asseoir.",
            "Et là, on parlait. Chacun son tour, du plus vieux au plus jeune. Personne n'était mis de côté. On ne se levait pas tant que tous n'étaient pas d'accord. C'est ça, le consensus : pas la victoire des uns sur les autres, l'entente de tous." ] },
          { title: "L'assemblée se divise", image: "/images/kurukan/ep2/assemblee_11.jpg", paragraphs: [
            "— Mais le Mandén était trop vaste pour que tout le monde parle de tout en même temps. Alors les sages eurent une idée brillante.",
            "Ils divisèrent l'assemblée en groupes. Chaque corps de la société travaillerait sur ce qu'il connaissait le mieux." ] },
          { title: "Le cercle des rois", image: "/images/kurukan/ep2/assemblee_12.jpg", paragraphs: [
            "D'abord, le cercle des rois et des guerriers, les porteurs de carquois.",
            "— Que chaque royaume garde son propre roi, son maître de la terre ! Mais que tous reconnaissent un seul Mansa, un roi des rois, pour nous unir.",
            "Ainsi l'empire serait uni, mais chaque pays garderait sa liberté. Un pouvoir partagé, pas un seul homme qui écrase tout." ] },
          { title: "Le cercle des marabouts", image: "/images/kurukan/ep2/assemblee_13.jpg", paragraphs: [
            "Ensuite, le cercle des marabouts et des hommes de savoir.",
            "— Que le savoir soit respecté. Que l'éducation des enfants soit un devoir. Qu'aucune décision ne se prenne sans réfléchir et sans conseil.",
            "Car un empire sans savoir est un empire aveugle." ] },
          { title: "Le cercle des forgerons", image: "/images/kurukan/ep2/assemblee_14.jpg", paragraphs: [
            "Puis le cercle des forgerons et des artisans, les nyamakala, maîtres du fer et de la matière.",
            "— Que nos métiers soient protégés et transmis ! Sans nous, pas de récolte, pas de défense, pas de beauté.",
            "Chaque artisan aurait sa dignité et sa place." ] },
          { title: "Le cercle des femmes", image: "/images/kurukan/ep2/assemblee_15.jpg", paragraphs: [
            "Et — chose rare dans le monde de cette époque — il y avait le cercle des femmes.",
            "— Que les femmes soient respectées et associées à toutes les décisions. Car nous sommes les mères de l'empire. Qui insulte sa mère insulte la nation tout entière.",
            "Sur la véranda, Sona sourit, touchée. Ciré la regarda avec fierté." ] },
          { title: "Le cercle des jeunes", image: "/images/kurukan/ep2/assemblee_16.jpg", paragraphs: [
            "Il y avait aussi le cercle des jeunes, organisés en classes d'âge, les ton.",
            "— Que chaque génération ait ses devoirs ! À nous les travaux des champs, la défense du village, l'aide aux anciens ! Donnez-nous des responsabilités, et nous bâtirons l'empire de demain.",
            "« J'aurais aimé être dans ce cercle… » murmura Morissanda." ] },
          { title: "Le cercle des griots", image: "/images/kurukan/ep2/assemblee_17.jpg", paragraphs: [
            "Et enfin, le cercle des griots. Notre cercle.",
            "— Nous ne réglerons ni un métier, ni une terre, ni une armée, dit Balla Fasséké. Notre tâche est plus grande : nous écouterons tous les autres cercles. Nous garderons en mémoire chaque parole, chaque accord, et nous les transmettrons.",
            "Les griots étaient le fil qui reliait tous les cercles. La mémoire vivante de l'assemblée entière." ] },
          { title: "Le retour sous l'arbre", image: "/images/kurukan/ep2/assemblee_18.jpg", paragraphs: [
            "Puis chaque cercle revint sous le grand arbre et apporta le fruit de son travail. Les rois, les marabouts, les forgerons, les femmes, les jeunes, les griots — tous ensemble accordèrent leurs paroles.",
            "Personne n'avait tout décidé seul. Personne n'avait été oublié. Voilà comment, morceau par morceau, voix par voix, naquit la grande Charte du Mandén." ] },
          { title: "Une assemblée de mille voix", image: "/images/kurukan/ep2/assemblee_19.jpg", paragraphs: [
            "La kora se tut doucement. La lune avait bougé dans le ciel.",
            "— Donc chacun avait sa voix… même les jeunes, même les femmes, même les artisans, dit Ciré.",
            "— Chacun. C'est ça, le génie du Mandén. Pas un roi tout-puissant. Une assemblée de mille voix." ] },
          { title: "La première loi", image: "/images/kurukan/ep2/assemblee_20.jpg", paragraphs: [
            "— Il se fait tard, conteur, sourit Sona. Mais c'était beau. Merci.",
            "— Papa, demanda Morissanda, mais une fois qu'ils étaient tous d'accord… qu'est-ce qu'ils ont décidé exactement ? C'était quoi, les vraies lois ?",
            "— Ah… ça, mon fils, c'est une autre soirée. Demain, peut-être, sous une autre lune, je vous raconterai la première loi : celle qui protège la vie de chaque être humain." ] },
        ] },
      },
    },

    // ───────────────────────── ÉPISODES 3-7 (À VENIR) ─────────────────────────
    {
      numero: 3, statut: "live",
      planche: "/images/kurukan/ep3-planche.webp",
      cover: "/images/kurukan/ep3-cover.webp",
      cote: "gauche",
      bande: "verticale",
      titre: { fr: "La Vie est Sacrée", en: "Life is Sacred", ar: "الحياة مقدّسة", zh: "生命神圣" },
      teaser: {
        fr: "Un dimanche de ménage, Ciré voit une foule s'en prendre à un homme accusé de vol. Ce soir-là, sur ses vieux livres séchant au soleil, Sidiman révèle la plus grande loi de Kurukan Fuga : toute vie est sacrée, et nul ne se fait justice seul.",
        en: "On a Sunday of chores, Ciré watches a crowd turn on a man accused of theft. That evening, over his old books drying in the sun, Sidiman reveals the greatest law of Kurukan Fuga: every life is sacred, and no one takes justice into their own hands.",
        ar: "في أحد أيام الأحد المخصّصة للأعمال المنزلية، ترى Ciré حشدًا ينقضّ على رجلٍ متّهمٍ بالسرقة. وفي ذلك المساء، فوق كتبه القديمة التي تجفّ في الشمس، يكشف Sidiman أعظم قوانين Kurukan Fuga: كلّ حياةٍ مقدّسة، ولا أحد يأخذ العدالة بيده.",
        zh: "一个做家务的星期天，Ciré 看到一群人围攻一个被指控偷窃的男人。那天晚上，在阳光下晾晒的旧书旁，Sidiman 揭示了 Kurukan Fuga 最伟大的法律：每个生命都是神圣的，没有人能擅自动用私刑。",
      },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "La Vie est Sacrée", sections: [
          { title: "Le dimanche de la maisonnée", image: "/images/kurukan/ep3/vie_01.jpg", paragraphs: [
            "C'était un dimanche, et chez nous le dimanche a une odeur : celle du savon, du riz qui mijote et de la poussière qu'on chasse.",
            "Maman et moi étions à la cuisine. Morissanda et notre cousin Lansana frottaient le linge dans deux grandes bassines, plus de mousse sur eux que sur les habits. Et Papa, lui, sortait tout au soleil — les matelas, les coussins, et ses vieux livres, qu'il étalait avec soin pour chasser l'humidité de l'hivernage.",
            "Je m'appelle Ciré. Et ce dimanche-là, j'ai appris quelque chose que je ne savais pas pouvoir s'apprendre un jour de lessive." ] },
          { title: "Les vieux livres au soleil", image: "/images/kurukan/ep3/vie_02.jpg", paragraphs: [
            "Papa traitait ses livres comme on traite des aînés. Il les portait à deux mains, soufflait sur les tranches, ouvrait chaque cahier à une page différente pour que le soleil entre partout.",
            "Certains étaient si vieux que l'encre avait pâli. Des noms, des dates, des lignées entières de familles. La mémoire des Kouyaté, écrite et réécrite de génération en génération.",
            "— Ne marchez pas dessus, nous prévint-il sans même se retourner. Et il caressa une couverture, doucement, comme on rassure un vieil ami." ] },
          { title: "Les cris dans la rue", image: "/images/kurukan/ep3/vie_03.jpg", paragraphs: [
            "Et puis il y a eu les cris.",
            "D'abord un seul, aigu, suivi d'une rumeur qui enfle. Le bruit d'une foule qui se forme — ce bruit qu'on reconnaît sans l'avoir appris, et qui serre le ventre.",
            "Lansana lâcha son linge. Morissanda était déjà debout. Maman a posé sa louche.",
            "— Restez là, dit-elle. Mais nous étions déjà au portail." ] },
          { title: "« Voleur ! »", image: "/images/kurukan/ep3/vie_04.jpg", paragraphs: [
            "Au bout de la rue, un homme était à terre. Maigre, pieds nus, les bras repliés sur la tête. Autour de lui, dix, quinze personnes, et d'autres qui accouraient.",
            "— Voleur ! Voleur ! criait quelqu'un.",
            "Les voix montaient, se mêlaient, se poussaient l'une l'autre. Une femme réclamait qu'on le punisse sur-le-champ. L'homme à terre ne disait rien — il se faisait petit, si petit, comme s'il voulait disparaître dans le sol.",
            "Je n'oublierai jamais ses yeux. Ce n'étaient pas les yeux d'un méchant. C'étaient les yeux de quelqu'un qui a peur, vraiment peur." ] },
          { title: "La voix de Papa", image: "/images/kurukan/ep3/vie_05.jpg", paragraphs: [
            "Papa est arrivé. Je ne l'avais jamais vu marcher si vite sans courir.",
            "Il ne cria pas. Il fit pire, pour la foule : il parla bas, et tout le monde se tut.",
            "— Qui l'a vu, de ses yeux ? Toi ? Toi ? Et qui d'entre nous est juge, là, dans la poussière, sans rien savoir de cet homme ?",
            "Les voix sont retombées. La foule a hésité. Quelqu'un a dit qu'il fallait prévenir les autorités. Lentement, le cercle s'est défait." ] },
          { title: "De retour à la maison", image: "/images/kurukan/ep3/vie_06.jpg", paragraphs: [
            "Avant de nous ramener, Papa avait aidé l'homme à se relever et l'avait confié à deux voisins de confiance, le temps que les autorités du quartier viennent l'entendre.",
            "Nous sommes rentrés en silence. Mes mains tremblaient un peu et je ne savais pas pourquoi — je n'avais rien fait, rien reçu.",
            "— Ils allaient le frapper, ai-je fini par dire. Comme ça. Sans juge, sans rien.",
            "— Et s'il avait vraiment volé ? demanda Morissanda. On fait quoi, alors ?",
            "Papa s'assit sur un matelas chauffé de soleil. Il prit un de ses vieux livres, l'ouvrit sur ses genoux, et son regard a changé — ce regard qu'il a quand il s'apprête à nous emmener loin." ] },
          { title: "Huit cents ans plus tôt", image: "/images/kurukan/ep3/vie_07.jpg", paragraphs: [
            "— Ce que vous venez de voir, dit-il, nos ancêtres y avaient déjà répondu. Il y a presque huit cents ans. Sur la plaine de Kurukan Fuga.",
            "Fermez les yeux.",
            "L'assemblée avait déjà donné à chacun son rôle, sa place, sa voix. Mais il restait la plus grande question de toutes — la plus difficile, celle qui dit la vraie valeur d'un peuple.",
            "Comment protéger chaque vie ? Même celle du plus pauvre. Même celle de l'étranger. Même celle de celui qui a fauté." ] },
          { title: "La vie est sacrée", image: "/images/kurukan/ep3/vie_08.jpg", paragraphs: [
            "Un sage se leva, et sa parole fut simple comme une pierre.",
            "— Toute vie humaine est une vie. Aucune ne vaut plus qu'une autre. Celui qui ôte une vie sans droit, c'est toute la communauté qu'il blesse.",
            "Et un autre ajouta, en regardant la foule des guerriers :",
            "— Désormais, nul ne se fera justice de ses propres mains. Le tort se juge, il ne se venge pas. Là où il n'y a pas de juge, il n'y a pas de justice — seulement une seconde faute par-dessus la première." ] },
          { title: "La fin des razzias", image: "/images/kurukan/ep3/vie_09.jpg", paragraphs: [
            "Alors les anciens parlèrent d'une chose terrible, que tous connaissaient.",
            "Avant, la guerre prenait les hommes. On brûlait un village, et les survivants devenaient du butin, emportés, arrachés aux leurs.",
            "— Plus jamais, dit le sage. La faim ne justifie pas la razzia. La victoire ne donne à personne le droit de traiter un homme comme une chose. Laissons cette coutume derrière nous. Que la guerre, si elle vient, épargne celui qui ne combat pas.",
            "Dans l'assemblée, des hommes qui avaient razzié baissèrent la tête. Mais aucun ne protesta. Car chacun savait, au fond, que c'était juste." ] },
          { title: "Le faible, le voyageur, l'étranger", image: "/images/kurukan/ep3/vie_10.jpg", paragraphs: [
            "La parole continua, et elle se faisait douce maintenant, comme une main posée sur une épaule.",
            "— Que le voyageur soit protégé sur nos routes. Que l'étranger qui arrive en paix soit traité en hôte, non en proie. Que la veuve, l'orphelin, le vieillard sans bras pour le défendre trouvent chez nous un toit et une part du repas.",
            "— Et que personne, dans tout le Mandén, ne meure de faim quand son voisin a mangé.",
            "Mon père s'arrêta là un instant. Le soleil descendait sur les livres étalés.",
            "— Vous comprenez, mes enfants ? Ils n'ont pas seulement interdit de tuer. Ils ont décidé de protéger." ] },
          { title: "Ce que Ciré comprit", image: "/images/kurukan/ep3/vie_11.jpg", paragraphs: [
            "Je repensais à l'homme dans la poussière. À ses yeux.",
            "— Alors… même lui ? demandai-je. Même un voleur, il a le droit à un juge ? Le droit qu'on ne le frappe pas dans la rue ?",
            "— Surtout lui, dit Papa. C'est facile de protéger ceux qu'on aime. La vraie loi, celle de Kurukan Fuga, protège aussi celui que la foule déteste. Parce que le jour où l'on accepte qu'une seule vie ne compte pas, c'est la nôtre, à tous, qu'on fragilise.",
            "Je n'ai rien répondu. Mais quelque chose, en moi, s'est mis debout." ] },
          { title: "La page que j'ai reçue", image: "/images/kurukan/ep3/vie_12.jpg", paragraphs: [
            "En fin d'après-midi, on apprit la suite par les voisins. L'homme avait été entendu. Il n'avait pas volé : il avait ramassé un sac tombé d'un étal et cherchait son propriétaire quand on l'avait pris pour un voleur. La marchande, retrouvée, l'avait reconnu et remercié. Il était reparti libre, et l'on dit même qu'on lui offrit à manger, car il avait faim depuis deux jours.",
            "Papa rentra ses livres un à un, à deux mains, comme toujours.",
            "Cette nuit-là, je n'arrivais pas à dormir. Je pensais à ces yeux que j'avais cru voir pleins de faute, et qui n'étaient pleins que de faim et de peur. Je pensais à un livre vieux de huit cents ans, séchant au soleil de notre cour. Et je me disais qu'une page, ce jour-là, était entrée en moi aussi." ] }
        ] },
      },
    },
    {
      numero: 4, statut: "live",
      planche: "/images/kurukan/ep4-planche.webp",
      cover: "/images/kurukan/ep4-cover.webp",
      cote: "droite",
      bande: "verticale",
      titre: { fr: "Les Liens du Sang et du Cœur", en: "Bonds of Blood and Heart", ar: "روابط الدم والقلب", zh: "血与心的纽带" },
      teaser: {
        fr: "Deux jeunes voisins s'aiment, mais une vieille barrière de rang menace leur union. Ce soir-là, Sona comprend que la Charte du Mandén avait déjà brisé ce mur : nul n'est indigne d'aimer, et le mariage unit deux familles égales.",
        en: "Two young neighbours are in love, but an old barrier of rank threatens their union. That evening, Sona realizes the Charter of Mandén had already broken that wall: no one is unworthy of love, and marriage unites two equal families.",
        ar: "شابّان جاران يحبّ أحدهما الآخر، لكنّ حاجزًا قديمًا من المراتب يهدّد اتّحادهما. في ذلك المساء، تدرك Sona أنّ ميثاق Mandén كان قد هدم ذلك الجدار: لا أحد غير جديرٍ بالحبّ، والزواج يوحّد عائلتين متساويتين.",
        zh: "两个年轻的邻居相爱，但一道古老的等级壁垒威胁着他们的结合。那天晚上，Sona 明白 Mandén 宪章早已打破那堵墙：没有人不配被爱，婚姻结合的是两个平等的家庭。",
      },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Les Liens du Sang et du Cœur", sections: [
          { title: "Le thé chez les voisins", image: "/images/kurukan/ep4/ep4_01.jpg", paragraphs: [
            "Il y a des soirs où une maison entière retient son souffle sans le dire.",
            "Ce soir-là, j'étais allée porter un plat chez nos voisins, les Camara. Leur fils Sékou venait de rentrer, et toute la cour bruissait d'une nouvelle qu'on n'osait pas encore appeler par son nom.",
            "Je m'appelle Sona. Je suis la mère de cette maison, l'épouse d'un griot, et j'ai appris ce soir-là qu'une vieille blessure peut encore faire mal, même quand on la croyait guérie depuis huit cents ans." ] },
          { title: "Sékou et Aïssata", image: "/images/kurukan/ep4/ep4_02.jpg", paragraphs: [
            "Sékou aime Aïssata. Et Aïssata aime Sékou.",
            "Cela, tout le quartier le savait, comme on sait que le soleil se lève à l'est. Ils avaient grandi à deux portes l'un de l'autre. On les voyait rire au même endroit, baisser les yeux au même moment.",
            "Les deux familles s'estimaient. On se prêtait le sel, on gardait les enfants les uns des autres. Tout, dans ce mariage qui s'annonçait, semblait simple et doux." ] },
          { title: "Le mot qu'on ne dit pas", image: "/images/kurukan/ep4/ep4_03.jpg", paragraphs: [
            "Et pourtant. Ce soir-là, dans la cour des Camara, les visages étaient fermés.",
            "Une grand-tante était venue de loin. Elle avait posé son sac, regardé la photo des deux jeunes, et dit une phrase à voix basse — une de ces phrases anciennes qui tombent comme une pierre dans l'eau calme.",
            "— Chez nous, on ne mélange pas les familles de cette manière. Eux, ce sont des gens de métier. Nous, non. Ça ne s'est jamais fait.",
            "Le silence qui suivit, je le connaissais. C'était le silence de la honte ancienne." ] },
          { title: "Ce que je n'ai pas supporté", image: "/images/kurukan/ep4/ep4_04.jpg", paragraphs: [
            "Je suis rentrée le cœur lourd. Car cette phrase, voyez-vous, me visait aussi.",
            "Mon mari est un Kouyaté. Une famille de griots. Des gens de la parole, de la mémoire, du métier. « Des gens de métier », comme avait dit la grand-tante, avec ce petit pli au coin de la bouche.",
            "J'ai posé le plat vide. Sidiman a vu mon visage.",
            "— Quelqu'un a ressorti la vieille histoire, dit-il doucement. Celle des rangs. De ceux qui seraient nés au-dessus, et de ceux qui seraient nés en dessous." ] },
          { title: "La colère de Ciré", image: "/images/kurukan/ep4/ep4_05.jpg", paragraphs: [
            "Ciré avait tout entendu depuis la pièce d'à côté. Elle est entrée, les joues brûlantes.",
            "— Mais c'est injuste ! Sékou et Aïssata s'aiment ! Et nous, alors ? Papa est griot, et c'est la plus belle chose du monde, ce qu'il fait ! Pourquoi quelqu'un oserait dire qu'on vaut moins ?",
            "Sidiman ne répondit pas tout de suite. Il fit ce qu'il fait toujours quand la blessure est trop grande pour une réponse rapide.",
            "Il alla chercher la kora." ] },
          { title: "« Vous croyez que c'est nouveau ? »", image: "/images/kurukan/ep4/ep4_06.jpg", paragraphs: [
            "— Vous croyez que cette douleur est nouvelle ? dit-il en accordant les cordes. Elle est aussi vieille que les hommes. Mais la réponse, elle aussi, est ancienne.",
            "Asseyez-vous.",
            "Il y a presque huit cents ans, sur la plaine de Kurukan Fuga, l'assemblée s'était posé exactement cette question. Quand on bâtit un empire, que fait-on des rangs ? Qui est noble ? Qui ne l'est pas ? Et qui décide ?" ] },
          { title: "Les gens de métier", image: "/images/kurukan/ep4/ep4_07.jpg", paragraphs: [
            "— Dans le Mandén, dit Sidiman, il y avait ceux qu'on appelait les nyamakala. Les gens de métier.",
            "Les forgerons, qui domptaient le fer et le feu. Les cordonniers, qui travaillaient le cuir. Et nous, les griots, gardiens de la parole et de la mémoire.",
            "Certains voulaient nous tenir à part, comme si nos mains nous rendaient plus petits. Mais les sages de l'assemblée virent les choses autrement." ] },
          { title: "Le savoir n'abaisse personne", image: "/images/kurukan/ep4/ep4_08.jpg", paragraphs: [
            "— Un sage se leva, et dit une chose que je veux que vous gardiez toute votre vie :",
            "« Celui qui forge la lame qui défend le roi n'est pas en dessous du roi. Celui qui garde la mémoire de la famille n'est pas en dessous de la famille. Chaque métier porte un savoir, et tout savoir est sacré. »",
            "Alors l'assemblée décida : nul ne sera méprisé pour sa naissance ou pour son métier. La dignité n'est pas un héritage de quelques-uns. Elle est le droit de chacun." ] },
          { title: "Les ennemis devenus familles", image: "/images/kurukan/ep4/ep4_09.jpg", paragraphs: [
            "— Et il y avait plus dur encore, continua mon mari. Des familles qui s'étaient fait la guerre. Du sang entre elles. Comment vivre ensemble, après ça ?",
            "L'assemblée inventa une chose magnifique : le sanankouya. Le cousinage. Au lieu de se haïr, ces familles allaient désormais se taquiner, se charrier, rire ensemble. Un Keïta et un Coulibaly, un Diabaté et un Kanté — liés pour toujours, non par le sang, mais par le rire.",
            "— Les anciens ennemis sont devenus des familles. Voilà ce que nos ancêtres ont choisi." ] },
          { title: "Le mariage qui unit deux familles", image: "/images/kurukan/ep4/ep4_10.jpg", paragraphs: [
            "— Et le mariage, dans tout cela ? demandai-je, car c'était ma question à moi.",
            "— Le mariage, dit Sidiman, n'a jamais uni deux personnes seulement. Il unit deux familles. C'est un pont. Et un pont ne se construit pas entre un haut et un bas — il se construit entre deux rives égales.",
            "La Charte l'a dit : que les familles s'allient et se respectent. Que l'on honore sa belle-famille comme la sienne. Personne, dans le Mandén nouveau, ne devait être jugé indigne d'aimer." ] },
          { title: "Ce que j'ai porté chez les Camara", image: "/images/kurukan/ep4/ep4_11.jpg", paragraphs: [
            "Le lendemain, je suis retournée chez les Camara. J'ai apporté du thé, et autre chose : cette histoire.",
            "Je ne l'ai pas dite comme une leçon. Je l'ai dite comme une mémoire — la nôtre, à tous. La grand-tante a écouté. Elle n'a pas changé d'avis en une nuit ; les vieilles peurs ne s'en vont pas si vite.",
            "Mais à un moment, elle a regardé la photo des deux jeunes différemment. Plus longuement. Et elle a dit, tout bas : « Mon propre grand-père était forgeron. Je l'avais oublié. »" ] },
          { title: "Le pont n'est pas encore fini", image: "/images/kurukan/ep4/ep4_12.jpg", paragraphs: [
            "Je ne sais pas encore si Sékou épousera Aïssata. Ces choses prennent le temps qu'elles prennent, et plusieurs cœurs doivent encore s'ouvrir.",
            "Mais quelque chose a bougé. Une fissure dans un vieux mur, par où passe un peu de lumière.",
            "Ce soir-là, en regardant mon mari ranger sa kora, j'ai pensé que les lois les plus précieuses ne sont pas celles qu'on grave dans la pierre. Ce sont celles qu'on se transmet, de cour en cour, de thé en thé, jusqu'à ce qu'un jour, enfin, plus personne n'ait à demander la permission d'aimer." ] }
        ] },
      },
    },
    {
      numero: 5, statut: "live",
      planche: "/images/kurukan/ep5-planche.webp",
      cover: "/images/kurukan/ep5-cover.webp",
      cote: "gauche",
      bande: "verticale",
      titre: { fr: "Le Commerce Honnête", en: "Honest Trade", ar: "التجارة الأمينة", zh: "诚实的贸易" },
      teaser: {
        fr: "Morissanda et Ciré montent une boutique de jus dans l'arrière-cour. Mais à qui revient l'argent — à Maman qui les fabrique, ou à eux qui les vendent ? Des Dioulas aux caravanes de sel, la Charte du Mandén leur enseigne le juste partage du travail.",
        en: "Morissanda and Ciré set up a juice stall in the backyard. But whose money is it — their mother's, who makes the juice, or theirs, who sell it? From the Dioula merchants to the salt caravans, the Charter of Mandén teaches them the fair sharing of work.",
        ar: "يُنشئ Morissanda وCiré كشكًا لبيع العصائر في الفناء الخلفيّ. لكن لمن يعود المال — لأمّهما التي تصنعه، أم لهما اللذين يبيعانه؟ من تجّار الـDioula إلى قوافل الملح، يعلّمهما ميثاق Mandén قسمة العمل العادلة.",
        zh: "Morissanda 和 Ciré 在后院摆起了果汁摊。但这钱该归谁——做果汁的妈妈，还是卖果汁的他们？从迪乌拉商人到盐队商旅，Mandén 宪章教会他们公平地分享劳动成果。",
      },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le Commerce Honnête", sections: [
          { title: "L'idée", image: "/images/kurukan/ep5/ep5_01.jpg", paragraphs: [
            "Tout a commencé à cause des jus de Maman.",
            "Maman est infirmière. Elle part tôt, rentre tard, et pourtant, le soir, elle trouve encore le temps de préparer ses jus : le bissap rouge sombre, le gingembre qui réveille, le tamarin doux-acide. Et chaque semaine, une saveur nouvelle — le néré, le moké, des racines dont on ne connaît même pas le nom en français. Personne, à Conakry, n'en fait de meilleurs. Ça, tout le quartier le sait.",
            "Un jour, mon ami Lamine est venu en boire un verre. Puis il est revenu. Puis il a amené deux autres. Et c'est là que Ciré, ma sœur, a eu l'idée." ] },
          { title: "La boutique de l'arrière-cour", image: "/images/kurukan/ep5/ep5_02.jpg", paragraphs: [
            "— Et si on les vendait ? dit-elle, les yeux brillants. Maman n'a pas le temps de s'en occuper. Mais nous, après les cours, on a le temps !",
            "En deux jours, on avait monté notre boutique : une vieille table dans l'arrière-cour, une glacière prêtée, un carton qui servait de comptoir. On avait même un nom : « Les Jus de Sona ».",
            "Le premier après-midi, on a tout vendu. Le deuxième aussi. Les pièces s'accumulaient dans une boîte de lait en poudre. Je n'avais jamais rien tenu d'aussi excitant." ] },
          { title: "La boîte qui se remplit", image: "/images/kurukan/ep5/ep5_03.jpg", paragraphs: [
            "Chaque soir, on comptait. Ciré notait dans un cahier. Moi, je faisais des piles de pièces.",
            "— On est riches, dis-je un soir, pour rire. Mais au fond, je le pensais un peu.",
            "On parlait déjà de ce qu'on ferait de l'argent. Ciré voulait des livres. Moi, des chaussures de foot. On rêvait, penchés sur notre boîte de lait, comme deux marchands sur leur coffre.",
            "C'est là que la première dispute est née." ] },
          { title: "À qui est l'argent ?", image: "/images/kurukan/ep5/ep5_04.jpg", paragraphs: [
            "— Attends, dit Ciré un soir. Si on achète tes chaussures et mes livres… il reste quoi pour racheter le bissap, le gingembre, le sucre ?",
            "Je n'y avais pas pensé. Les ingrédients, c'était Maman qui les payait. Et c'était Maman qui faisait les jus, en plus, après ses journées à l'hôpital.",
            "— Alors l'argent, il est à Maman ? demandai-je.",
            "— Mais c'est nous qui vendons ! protesta Ciré. C'est nous qui avons eu l'idée ! Et on aide même un peu à la fabrication, ajouta-t-elle en riant. Sans nous, les jus resteraient au frigo !",
            "On s'est regardés. Pour la première fois, notre belle boîte de pièces ressemblait à un problème." ] },
          { title: "Le silence de la table", image: "/images/kurukan/ep5/ep5_05.jpg", paragraphs: [
            "Ce soir-là, on n'a pas compté. La boîte est restée fermée entre nous deux, sur la table.",
            "Ciré disait : « C'est notre travail. » Je disais : « Mais ce sont ses jus. » Et tous les deux, on avait raison, et c'est ça qui était difficile.",
            "Papa nous écoutait depuis sa chaise, sans rien dire. Quand le silence est devenu trop lourd, il sourit.",
            "— D'abord, une chose : bravo. Une boutique, un cahier, des clients fidèles… je suis fier de vous deux. Beaucoup d'adultes ne sauraient pas faire ce que vous avez fait. Maintenant, asseyez-vous. Cette dispute que vous avez là, elle est vieille comme le commerce lui-même." ] },
          { title: "Les Dioulas", image: "/images/kurukan/ep5/ep5_06.jpg", paragraphs: [
            "— Vous savez d'où viennent les meilleurs jus de Conakry ? dit Papa. Du talent de votre mère. Mais aussi de son sang.",
            "Parmi les ancêtres de Maman, il y a des Dioulas. Et les Dioulas, mes enfants, étaient parmi les plus grands marchands que le monde ait connus.",
            "Fermez les yeux un instant. Imaginez." ] },
          { title: "Là où passe l'or", image: "/images/kurukan/ep5/ep5_07.jpg", paragraphs: [
            "— Le Mandén était traversé de routes immenses, continua Papa. Des caravanes de mille bêtes. L'or du sud qui montait, le sel du nord qui descendait, les étoffes, les colas. Et les Dioulas étaient sur toutes ces routes. Des villes entières vivaient du négoce : Djenné, Tombouctou, Niani.",
            "— Mais là où passe l'or passe aussi la tentation. Tromper sur le poids. Vendre une marchandise gâtée. Ne pas payer celui qui a travaillé pour vous. Prendre le bien d'un autre.",
            "Une grande route marchande ne tient pas sans confiance. Si chacun triche, plus personne ne vient. Le marché meurt. Alors les sages firent des lois pour les biens, comme ils en avaient fait pour la vie et pour la famille." ] },
          { title: "Les lois du marché juste", image: "/images/kurukan/ep5/ep5_08.jpg", paragraphs: [
            "— L'assemblée déclara : que les échanges soient loyaux. Que nul ne trompe sur la qualité ni sur la mesure. Que le bien d'autrui soit respecté comme le sien. Que la parole donnée dans une affaire vaille autant qu'un contrat scellé.",
            "Et surtout, mes enfants, écoutez bien celle-ci :",
            "— Que le travail de chacun soit reconnu. Celui qui produit et celui qui vend méritent tous deux leur part. Spolier le travail d'une personne, c'est lui voler une part de sa vie." ] },
          { title: "Celui qui produit, celui qui porte", image: "/images/kurukan/ep5/ep5_09.jpg", paragraphs: [
            "Je commençais à comprendre où il voulait nous mener, mais il ne nous a pas désigné la réponse. Il a continué son histoire.",
            "— Pensez à une caravane de sel. Il y a celui qui creuse le sel dans la mine, au loin. Il y a celui qui le charge sur les bêtes et traverse le désert pendant des semaines. Et il y a celui qui le vend, enfin, sur le marché de Niani.",
            "— Lequel des trois mérite l'argent ? demanda Ciré, tout bas.",
            "— À ton avis ? répondit Papa." ] },
          { title: "Les trois parts", image: "/images/kurukan/ep5/ep5_10.jpg", paragraphs: [
            "Ciré réfléchit longtemps. Puis elle dit, lentement :",
            "— Les trois. Chacun a fait sa part du chemin. Si celui qui vend gardait tout, plus personne ne creuserait ni ne porterait. Et s'il ne gardait rien, plus personne ne voudrait vendre.",
            "Papa hocha la tête, et son visage souriait.",
            "— Voilà la sagesse du Mandén. Le juste prix, ce n'est pas le plus gros pour soi. C'est la part qui fait que demain, tout le monde voudra encore travailler ensemble." ] },
          { title: "La règle des Jus de Sona", image: "/images/kurukan/ep5/ep5_11.jpg", paragraphs: [
            "Ce soir-là, on a rouvert la boîte. Et avec Ciré, on a inventé notre règle.",
            "Une part pour les ingrédients et pour Maman, qui produit et qui paie : la plus grande, parce que sans ses jus, rien n'existe. Une part pour nous deux, qui avons eu l'idée et qui vendons : notre vrai salaire, mérité. Et une dernière part qu'on remet dans la boîte, pour faire grandir la boutique.",
            "Car la boutique, déjà, voulait grandir. On rêvait de glaces au bissap, de smoothies, et même — Ciré y tenait — d'apprendre la pâtisserie, pour des gâteaux aussi savoureux que nos boissons. Plus de saveurs, plus de clients, plus de comptes. Trois colonnes dans un cahier, ça allait vite devenir trop petit.",
            "Quand on a montré nos trois colonnes à Maman, elle a lu le cahier en silence, et ses yeux ont brillé. « Ce n'est pas l'argent qui me rend fière, dit-elle. C'est la colonne du milieu — celle où vous avez écrit, sans tricher, ce qui revient à chacun. »",
            "— Et pour la suite, demanda Ciré, si on demandait au téléphone ?" ] },
          { title: "L'outil et la règle", image: "/images/kurukan/ep5/ep5_12.jpg", paragraphs: [
            "Sur le téléphone de Papa, il y avait une de ces applications intelligentes. On lui a expliqué nos trois parts. En un instant, elle a tout calculé — la part de Maman, la nôtre, celle de la boutique — et elle a même dessiné une courbe : si on ajoutait les glaces et les gâteaux, voilà ce que la boutique pourrait devenir dans six mois.",
            "Ciré avait les yeux ronds. Notre petite table dans l'arrière-cour, sur l'écran, ressemblait soudain à une vraie entreprise.",
            "— L'outil calcule vite, dit Papa. Mais la règle, le partage juste, c'est vous qui l'avez trouvée. Et ça, aucune machine ne pouvait le faire à votre place. La machine compte les parts. C'est le cœur qui décide qu'elles soient justes.",
            "Plus tard, en rangeant la glacière, j'ai pensé aux Dioulas, à celui qui creuse le sel, à celui qui le porte, à celui qui le vend. Et je me suis dit que notre petite table, dans l'arrière-cour, était devenue elle aussi, à sa manière, une toute petite route du Mandén — avec, en plus, un téléphone pour tenir les comptes." ] }
        ] },
      },
    },
    {
      numero: 6, statut: "live",
      planche: "/images/kurukan/ep6-planche.webp",
      cover: "/images/kurukan/ep6-cover.webp",
      cote: "droite",
      bande: "verticale",
      titre: { fr: "La Terre qui Nourrit", en: "The Land that Feeds", ar: "الأرض التي تُطعِم", zh: "养育万物的土地" },
      teaser: {
        fr: "Après la première pluie, le caniveau déborde d'ordures et la rue est inondée. Ciré regarde sa mère se lancer : du compost dans la cour, un plaidoyer chez le chef de quartier, et la sagesse du Mandén — la terre n'est pas à nous, elle est prêtée par les ancêtres et due aux enfants à naître.",
        en: "After the first rain, the gutter overflows with refuse and the street floods. Ciré watches her mother take action: compost in the yard, a plea to the neighbourhood chief, and the wisdom of Mandén — the land is not ours, it is lent by the ancestors and owed to the children yet unborn.",
        ar: "بعد أوّل مطر، يفيض المجرى بالنفايات ويغرق الشارع. تشاهد Ciré أمّها وهي تتحرّك: سمادٌ في الفناء، ومناشدةٌ لرئيس الحيّ، وحكمة الـMandén — الأرض ليست لنا، بل هي أمانةٌ من الأجداد ودَينٌ للأطفال الذين لم يولدوا بعد.",
        zh: "第一场雨后，沟渠被垃圾堵塞，街道被淹。Ciré 看着母亲行动起来：院子里堆肥，向街区长官陈情，还有 Mandén 的智慧——土地不属于我们，它是祖先的借予，是欠未出生孩子的债。",
      },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "La Terre qui Nourrit", sections: [
          { title: "L'eau qui ne descend plus", image: "/images/kurukan/ep6/ep6_01.jpg", paragraphs: [
            "La première pluie de l'année est tombée un mardi soir. Le lendemain matin, notre rue était une rivière.",
            "L'eau brune ne descendait plus. Elle stagnait, soulevait des sachets noirs, des bouteilles, des épluchures, tout un radeau d'ordures qui flottait jusqu'au seuil des maisons.",
            "Ce matin-là, en regardant Maman relever son pagne pour traverser, j'ai compris qu'une chose qu'on jette sans y penser peut revenir frapper à notre porte." ] },
          { title: "Le caniveau et les sachets", image: "/images/kurukan/ep6/ep6_02.jpg", paragraphs: [
            "Le caniveau, devant chez nous, était bouché. Complètement. Bouché par des mois de sachets plastiques que tout le quartier y jetait, faute de mieux.",
            "Nous étions pourtant abonnés, comme beaucoup, à une de ces petites entreprises qui ramassent les ordures. Mais leur camionnette passait quand elle voulait. Une semaine, deux, parfois trois. Et pendant ce temps, les sacs s'entassaient, crevaient, et finissaient dans le caniveau.",
            "— On paie pour rien, soupira Maman. Et c'est nous qui avons les pieds dans l'eau." ] },
          { title: "La vidéo", image: "/images/kurukan/ep6/ep6_03.jpg", paragraphs: [
            "Ce soir-là, Maman et moi étions sur le canapé, le téléphone entre nous. Elle aime regarder des vidéos après ses gardes à l'hôpital.",
            "Et nous sommes tombées dessus : une femme, quelque part en Afrique, montrait comment elle ne jetait presque plus rien. Ses épluchures, ses restes, ses coquilles d'œuf — tout partait dans un coin de sa cour, dans un bac, et devenait, quelques semaines plus tard, une terre noire et riche. Du compost.",
            "Maman s'est redressée. J'ai reconnu ce regard. Le même que celui de Papa quand une histoire le prend." ] },
          { title: "« Et si on essayait ? »", image: "/images/kurukan/ep6/ep6_04.jpg", paragraphs: [
            "— Et si on essayait ? dit Maman.",
            "On a commencé le lendemain. Un vieux fût, dans le fond de la cour — loin de la boutique de jus, car Maman a tout de suite dit qu'on ne mélange pas ce qu'on boit et ce qui pourrit. Les épluchures de Maman — et elle en produit, avec tous ses jus et ses sauces — au lieu d'aller au sachet, allaient au fût.",
            "Et pour le reste, ce qui ne pourrit pas — les sachets, les bouteilles, le plastique — un grand bidon jaune, à part, où tout s'entassait proprement en attendant la camionnette.",
            "Au début, je trouvais ça sale. Puis j'ai vu : moins de sachets traînaient chez nous. Beaucoup moins. Notre poubelle avait maigri de moitié.",
            "— Tu te rends compte, dit Maman, si chaque maison faisait pareil ?" ] },
          { title: "Le rêve trop grand pour une cour", image: "/images/kurukan/ep6/ep6_05.jpg", paragraphs: [
            "C'est là que Maman a cessé de penser à notre seule cour.",
            "Elle en a parlé au groupement des femmes du quartier — celles avec qui elle cotise, avec qui elle organise les baptêmes et les funérailles. Elle leur a montré la vidéo, leur a montré notre fût, leur a montré notre poubelle maigrie.",
            "Certaines ont ri. « Tu veux qu'on garde nos ordures à la maison, maintenant ? » D'autres ont écouté. Mais toutes ont dit la même chose : « Le vrai problème, c'est le ramassage. Tant que les camions ne passent pas, on fait quoi de tout ça ? »" ] },
          { title: "Le mur du découragement", image: "/images/kurukan/ep6/ep6_06.jpg", paragraphs: [
            "Maman est rentrée fatiguée ce soir-là. Pas de la fatigue de l'hôpital. D'une autre.",
            "— Elles n'ont pas tort, dit-elle à Papa. Le compost réduit les épluchures. Mais les plastiques, les vrais déchets, il faut bien que quelqu'un les emporte. Et ça, c'est plus grand que moi. C'est l'affaire du chef de quartier, des autorités. Qui suis-je pour aller frapper à ces portes ?",
            "Papa l'a regardée longtemps. Puis il a dit une chose qui m'a surprise.",
            "— Tu n'es pas la première femme de ce pays à vouloir nettoyer ce que les puissants laissent sale. Laisse-moi te raconter." ] },
          { title: "La terre qui ne nous appartient pas", image: "/images/kurukan/ep6/ep6_07.jpg", paragraphs: [
            "— Dans le Mandén, dit Papa, on ne disait jamais : « cette terre est à moi ». On disait : « cette terre m'est confiée ».",
            "Car la terre, pensaient nos ancêtres, n'appartient pas aux vivants. Elle appartient aux morts, qui nous l'ont prêtée, et aux enfants pas encore nés, à qui nous la devons. Nous ne sommes que de passage. Des gardiens, le temps d'une vie.",
            "— Alors celui qui salit la terre, ou qui l'épuise, dit Papa, il ne se vole pas seulement lui-même. Il vole ceux qui viendront après." ] },
          { title: "On ne prend que ce qu'il faut", image: "/images/kurukan/ep6/ep6_08.jpg", paragraphs: [
            "— C'est pour cela, continua-t-il, que la Charte de Kurukan Fuga protégeait la nature, il y a près de huit cents ans, comme peu de lois au monde le faisaient.",
            "On ne coupait pas un arbre sans raison. On ne brûlait pas la brousse n'importe comment. On ne chassait pas la bête qui portait ses petits. On prenait de la forêt et de la rivière ce dont on avait besoin — pas davantage.",
            "— Nos ancêtres avaient compris, dit Papa, une chose simple : une terre qu'on respecte vous nourrit toujours. Une terre qu'on pille finit par avoir faim, et alors c'est l'homme qui a faim avec elle.",
            "Il s'est arrêté, et son regard est parti loin, vers son enfance.",
            "— Et vous savez, cette sagesse-là n'est pas restée dans les vieux livres. Quand j'étais petit, dans ce pays même, on la vivait encore. À chaque baptême d'enfant, la famille devait planter un arbre — un être qui naît, un arbre qui pousse. Et pour la propreté, chaque famille donnait une personne, une fois par semaine, pour nettoyer les espaces de tous. Personne n'y échappait, et personne ne s'en plaignait. C'était ainsi.",
            "— Pourquoi on ne le fait plus ? demandai-je.",
            "— Bonne question, dit Papa. On a oublié. Ou on a cru que c'était à d'autres de s'en charger. Mais ta mère, là… elle est en train de s'en souvenir." ] },
          { title: "Le soin n'était l'affaire de personne seul", image: "/images/kurukan/ep6/ep6_09.jpg", paragraphs: [
            "— Mais qui s'occupait de tout cela ? demandai-je. Le roi ?",
            "— Non, dit Papa, et c'est le plus beau. Le soin du village n'était l'affaire de personne seul — il était l'affaire de tous.",
            "Les jeunes, organisés en classes d'âge, avaient la charge des chemins, des puits, de la propreté du village. Nettoyer n'était pas une punition ni un travail de pauvre. C'était un honneur. Celui qui prenait soin du commun était respecté de tous.",
            "— Tu vois, Sona, dit Papa en se tournant vers Maman. Ton groupement de femmes, ce n'est pas une idée nouvelle. C'est la plus vieille idée du Mandén." ] },
          { title: "Maman se relève", image: "/images/kurukan/ep6/ep6_10.jpg", paragraphs: [
            "Maman n'a rien dit ce soir-là. Mais le lendemain, elle s'est levée autrement.",
            "Elle est retournée voir le groupement. Cette fois, elle n'a pas parlé du compost d'abord. Elle a parlé d'honneur. De la terre qu'on laisse aux enfants. De ce que valait, autrefois, celui qui prenait soin du commun.",
            "Et elle a dit une chose qui les a toutes fait taire :",
            "— Regardez-nous. Pour un baptême, un mariage, on sort les plus beaux boubous, on est magnifiques. Puis on prend la photo… et dans un coin, toujours, il y a un tas d'ordures. Nous sommes belles devant la saleté. Est-ce que c'est digne de nous, ça ? Notre dignité ne s'arrête pas à nos habits. Elle commence à nos pieds, sur le sol qu'on laisse.",
            "Puis elle a proposé un plan : le compost et le bidon jaune dans chaque maison, pour trier et réduire les ordures — et, pour le reste, un cahier de doléances que toutes signeraient, à porter ensemble chez le chef de quartier. Pas une plainte de plus. Une voix nombreuse." ] },
          { title: "Chez le chef de quartier", image: "/images/kurukan/ep6/ep6_11.jpg", paragraphs: [
            "Elles y sont allées à douze. Maman devant, le cahier à la main.",
            "Je n'étais pas dans la pièce, mais Maman m'a raconté. Le chef a d'abord fait la moue — une histoire de femmes, de poubelles. Puis il a vu les douze signatures, puis vingt, puis trente que d'autres avaient ajoutées. Il a compris que ce n'était pas une plainte. C'était un quartier qui se tenait debout.",
            "Il a promis de convoquer l'entreprise de ramassage. De fixer des jours précis. De rendre des comptes.",
            "— On verra s'il tient parole, dit Maman. Mais au moins, maintenant, il sait qu'on regarde." ] },
          { title: "Le potager des ancêtres", image: "/images/kurukan/ep6/ep6_12.jpg", paragraphs: [
            "Tout n'est pas réglé, je dois le dire. La camionnette ne passe pas encore comme il faut. Certaines familles oublient leur fût. Le quartier n'est pas devenu propre en une saison.",
            "Mais quelque chose a changé. Une dizaine de cours, maintenant, ont leur fût de compost et leur bidon jaune. Les poubelles ont maigri. Et le caniveau, devant chez nous, débouché un samedi matin, respire de nouveau.",
            "Et il y a eu plus beau encore. À l'entrée du quartier, il y avait depuis toujours un grand dépotoir — une montagne d'ordures que personne ne regardait. Les jeunes, un week-end, sont allés le nettoyer. Pas seuls : avec leurs mamans. Et sur cette terre enfin dégagée, ils ont fait un potager. Le compost de toutes les cours y sert d'engrais. Chaque famille y a son petit lopin : du gombo, des aubergines, du piment, de la menthe.",
            "Là où l'on jetait, on récolte. En regardant Maman cueillir ses premiers piments sur l'ancien dépotoir, j'ai pensé aux gardiens du Mandén, à l'arbre qu'on plantait pour chaque enfant, à cette terre qu'on ne fait qu'emprunter. Et je me suis dit que ma mère, avec son fût d'épluchures et son cahier de signatures, était devenue elle aussi, sans le savoir, une gardienne." ] }
        ] },
      },
    },
    {
      numero: 7, statut: "live",
      planche: "/images/kurukan/ep7-planche.webp",
      cover: "/images/kurukan/ep7-cover.webp",
      cote: "gauche",
      bande: "verticale",
      titre: { fr: "Le Serment des Gardiens", en: "The Oath of the Guardians", ar: "قَسَم الحُرّاس", zh: "守护者的誓言" },
      teaser: {
        fr: "Pour le concours de talents de la kermesse, Morissanda ose prendre la kora de son père, Ciré le mégaphone, Lansana le slam. Trois enfants, trois maladresses réunies, pour faire vivre la Charte devant toute l'école — et tenir, à leur tour, le serment des gardiens. Final de la série.",
        en: "For the school fair's talent show, Morissanda dares to take up his father's kora, Ciré the megaphone, Lansana the slam. Three children, three clumsinesses joined, bringing the Charter to life before the whole school — and keeping, in their turn, the oath of the guardians. Series finale.",
        ar: "في مسابقة المواهب بحفل المدرسة، يجرؤ Morissanda على حمل كورا أبيه، وCiré على المكبّر، وLansana على الـslam. ثلاثة أطفال، ثلاث عثراتٍ مجتمعة، يُحيون الميثاق أمام المدرسة كلّها — ويحفظون بدورهم قَسَم الحُرّاس. خاتمة المسلسل.",
        zh: "在学校游园会的才艺比赛上，Morissanda 鼓起勇气拿起父亲的科拉琴，Ciré 拿起扩音器，Lansana 上阵说唱。三个孩子，三份生涩交织在一起，在全校面前让宪章焕发生机——也轮到他们守护这份守护者的誓言。系列大结局。",
      },
      reader: {
        fr: { lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le Serment des Gardiens", sections: [
          { title: "La kermesse", image: "/images/kurukan/ep7/ep7_01.jpg", paragraphs: [
            "À la fin de l'année, notre école organise une kermesse. Et cette année, il y avait une nouveauté : un concours de talents.",
            "Toute la classe bouillonnait. Fodé préparait une danse. Les jumelles, un sketch. Karim voulait imiter les professeurs — ce qui lui a valu un avertissement avant même de monter sur scène.",
            "Et nous, on ne savait pas quoi faire. Jusqu'à ce que Ciré, comme souvent, ait une idée. Une idée folle." ] },
          { title: "L'idée folle de Ciré", image: "/images/kurukan/ep7/ep7_02.jpg", paragraphs: [
            "— On n'a qu'à raconter la Charte, dit-elle.",
            "Je l'ai regardée comme si elle avait pris un coup de soleil.",
            "— La Charte ? Devant toute l'école ? Mais avec quoi ? On va réciter des articles comme un cours ? Personne ne va écouter.",
            "— Pas réciter, dit Ciré, les yeux brillants. La faire entendre. La jouer. En musique, en voix. Comme Papa nous l'a racontée à nous.",
            "— En musique… avec quoi ?",
            "Elle a souri. Et là, j'ai eu peur de comprendre.",
            "— Avec la kora de Papa." ] },
          { title: "Ce qu'on avait reçu", image: "/images/kurukan/ep7/ep7_03.jpg", paragraphs: [
            "Cette nuit-là, je n'ai pas dormi. Pas à cause du trac. À cause de tout ce qui me revenait.",
            "Depuis des mois, le soir, Papa nous avait emmenés quelque part. À chaque veillée, il revenait avec une loi. La parole. L'assemblée. La vie. La famille. Le commerce. La terre. Six chemins, et au bout de chacun, la même chose.",
            "Comment faire tenir tout ça dans une chanson ?" ] },
          { title: "Demander la kora", image: "/images/kurukan/ep7/ep7_04.jpg", paragraphs: [
            "Le lendemain, j'ai fait la chose la plus difficile : demander la kora à Papa.",
            "Papa est avocat. Le jour, il porte des dossiers, plaide, défend. Mais le sang des Kouyaté coule en lui, et avec lui la mémoire des griots. La kora, chez nous, n'est pas un jouet. C'est l'instrument de notre famille depuis des générations, et Papa en joue le soir, non comme un musicien de métier, mais comme un héritier qui tient sa part d'un fil très ancien.",
            "Je ne l'avais jamais touchée. Je l'ai regardée toute ma vie de loin, posée contre le mur, comme on regarde quelque chose de trop grand pour soi.",
            "— Papa, dis-je, la voix petite. Pour la kermesse… est-ce que je pourrais… apprendre quelques notes ?",
            "Il a posé son dossier. Il m'a regardé un long moment, sans rien dire." ] },
          { title: "Les mains de mon père sur les miennes", image: "/images/kurukan/ep7/ep7_05.jpg", paragraphs: [
            "Puis il s'est levé, a pris la kora, et me l'a tendue.",
            "— Assieds-toi. Tiens-la comme ça. Le dos droit. Ce n'est pas toi qui portes la kora ; c'est elle qui te porte.",
            "Ses mains se sont posées sur les miennes. Il m'a montré trois notes. Juste trois. Une qui appelle, une qui répond, une qui apaise.",
            "— Tu n'as pas besoin de plus, dit-il. Un griot débutant ne joue pas beaucoup de notes. Il joue les bonnes. Le reste viendra avec les années — si tu choisis ce chemin." ] },
          { title: "Le trio", image: "/images/kurukan/ep7/ep7_06.jpg", paragraphs: [
            "On a répété chaque soir dans l'arrière-cour.",
            "Moi à la kora — trois notes, encore et encore, jusqu'à ce que mes doigts cessent de trembler. Ciré au mégaphone emprunté, la voix claire, qui portait les lois comme un chant. Et Lansana, mon cousin Touré, qui n'est pas d'une famille griote, mais qui a tout appris en suivant nos initiations, année après année : lui, il slame. Sa voix claque, sèche et rythmée, et vient cogner contre le mélodieux de la kora et le chant de Ciré.",
            "On a cherché longtemps comment dire six lois sans endormir personne. Ciré a fini par trouver. « On ne va pas les expliquer, dit-elle. On va les faire sentir. »" ] },
          { title: "Le fil qui relie tout", image: "/images/kurukan/ep7/ep7_07.jpg", paragraphs: [
            "— Mais il manque quelque chose, dis-je un soir. Si on dit juste « la vie, la famille, le commerce, la terre »… ça fait une liste. Papa, lui, ça ne faisait jamais une liste. Qu'est-ce qui relie tout ?",
            "Papa, qui écoutait depuis sa chaise, sourit.",
            "— Tu brûles, Morissanda. Cherche encore.",
            "J'ai fermé les yeux. La parole protégée, la vie sacrée, la famille égale, le commerce juste, la terre confiée… Et soudain, je l'ai vu. Le mot caché sous tous les autres.",
            "— La dignité, dis-je. Chaque loi protège la dignité de quelqu'un." ] },
          { title: "Le dernier jour de Kurukan Fuga", image: "/images/kurukan/ep7/ep7_08.jpg", paragraphs: [
            "Ce soir-là, Papa nous a emmenés une dernière fois sur la plaine.",
            "— Les quarante-quatre articles avaient été dits, raconta-t-il. La parole, l'organisation, la paix, la famille, les biens, la terre — tout. L'assemblée était fatiguée et heureuse, comme après une longue marche. Mais un sage se leva et posa la dernière question. La plus importante, peut-être.",
            "« Tout cela est beau, dit-il. Mais qui s'en souviendra demain ? Une loi qu'on ne transmet pas est une loi morte. »" ] },
          { title: "Le serment", image: "/images/kurukan/ep7/ep7_09.jpg", paragraphs: [
            "— Alors, dit Papa, ils firent un serment.",
            "Chacun jura, la main levée, de respecter la Charte, et de la transmettre à ses enfants, et aux enfants de ses enfants. Pour qu'elle ne meure jamais.",
            "Et l'on confia une mission particulière à une famille : les griots. À eux de garder la parole, de la réciter, de la chanter, de la passer de bouche en bouche à travers les siècles. Sans eux, tout serait oublié.",
            "— Cette famille, dit Papa en nous regardant, c'était la nôtre. Voilà pourquoi, mes enfants, je vous raconte tout cela depuis des mois. Je ne fais que tenir un serment vieux de huit cents ans." ] },
          { title: "La veille", image: "/images/kurukan/ep7/ep7_10.jpg", paragraphs: [
            "Je comprenais, maintenant, pourquoi Ciré avait eu raison.",
            "Notre numéro n'était pas un numéro. C'était notre part du serment. Papa nous avait transmis ; à nous, désormais, de transmettre à notre tour — à toute une cour d'école.",
            "La veille de la kermesse, j'ai à peine touché la kora. J'avais peur de gâcher mes trois notes. Papa est passé, a vu mon visage, et a dit seulement :",
            "— Demain, ne pense pas à bien jouer. Pense à ce que tu portes. La kora, elle, sait le chemin." ] },
          { title: "Les trois notes", image: "/images/kurukan/ep7/ep7_11.jpg", paragraphs: [
            "La cour est pleine. C'est notre tour.",
            "Mes jambes sont en coton. Je m'assois. Je pose la kora contre moi — le dos droit, comme Papa l'a dit. Et là, au fond de la foule, je le vois, lui, debout.",
            "Je joue ma première note. Elle tremble, mais elle est juste. Puis la deuxième. Puis la troisième. Ciré lève le mégaphone, et sa voix s'envole au-dessus de la cour : « Écoutez l'histoire d'une parole donnée, il y a huit cents ans… » Lansana entre alors, et son slam claque comme un tambour de mots — la vie, la famille, la terre — sec, vif, par-dessus le mélodieux de la kora. La cour se tait. Quelque chose passe. La Charte du Mandén est en train de vivre, là, maintenant, entre nos trois maladresses réunies." ] },
          { title: "Les ancêtres sont fiers", image: "/images/kurukan/ep7/ep7_12.jpg", paragraphs: [
            "On sort de scène le cœur battant, tous les trois, dans les coulisses derrière l'estrade.",
            "On ne sait pas si on a gagné. On s'en moque, au fond. Ciré rit, le mégaphone encore à la main. Lansana refait son passage, tout seul, pour le plaisir. Et moi je serre la kora contre moi — elle ne me semble plus trop grande.",
            "Puis on les voit arriver. Maman, qui presse le pas, les yeux brillants. Et Papa derrière elle, plus lent, plus calme, de ce calme qui chez lui veut dire beaucoup.",
            "— Alors Papa, demande Ciré, hors d'haleine. C'était comment ?",
            "Il nous regarde tous les trois, longuement. Il ne dit pas « vous avez bien joué ». Il ne dit pas « vous avez gagné ». Il pose une main sur l'épaule de chacun, et il dit, tout bas :",
            "— Les ancêtres sont fiers de vous." ] }
        ] },
      },
    },
  ] as Episode[],
};
