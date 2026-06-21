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
      numero: 3, statut: "soon",
      titre: { fr: "La Vie est Sacrée", en: "Life is Sacred", ar: "الحياة مقدّسة", zh: "生命神圣" },
      teaser: {
        fr: "La première grande loi du Mandén : l'inviolabilité de chaque être humain. Comment l'assemblée déclara la vie sacrée et abolit la razzia, bien avant le reste du monde.",
        en: "The first great law of Mandén: the inviolability of every human being. How the assembly declared life sacred and abolished the raid, long before the rest of the world.",
        ar: "أوّل قانونٍ عظيمٍ في الـMandén: حُرمة كلّ كائنٍ بشريّ. كيف أعلن المجلس قداسة الحياة وألغى الغزو، قبل بقيّة العالم بزمنٍ طويل.",
        zh: "Mandén 的第一条伟大法律：每个人的不可侵犯。议会如何宣布生命神圣、废除劫掠——远早于世界其他地方。",
      },
    },
    {
      numero: 4, statut: "soon",
      titre: { fr: "Les Liens du Sang et du Cœur", en: "Bonds of Blood and Heart", ar: "روابط الدم والقلب", zh: "血与心的纽带" },
      teaser: {
        fr: "Le mariage, la famille, les alliances entre clans : comment la Charte fit de l'union des familles un rempart contre la guerre.",
        en: "Marriage, family, alliances between clans: how the Charter made the union of families a bulwark against war.",
        ar: "الزواج والعائلة والأحلاف بين العشائر: كيف جعل الميثاق من اتّحاد العائلات حصنًا ضدّ الحرب.",
        zh: "婚姻、家庭、氏族间的联盟：宪章如何让家族的结合成为抵御战争的壁垒。",
      },
    },
    {
      numero: 5, statut: "soon",
      titre: { fr: "Le Commerce Honnête", en: "Honest Trade", ar: "التجارة الأمينة", zh: "诚实的贸易" },
      teaser: {
        fr: "Les biens, la propriété, les échanges justes : comment le Mandén protégea le travail de chacun et fit du commerce un art de la confiance.",
        en: "Goods, property, fair exchange: how Mandén protected everyone's labour and made trade an art of trust.",
        ar: "الأموال والملكية والمبادلات العادلة: كيف حمى الـMandén عمل كلّ فردٍ وجعل التجارة فنّ ثقة.",
        zh: "财物、产权、公平交易：Mandén 如何保护每个人的劳动，并让贸易成为一门信任的艺术。",
      },
    },
    {
      numero: 6, statut: "soon",
      titre: { fr: "La Terre qui Nourrit", en: "The Land that Feeds", ar: "الأرض التي تُطعِم", zh: "养育万物的土地" },
      teaser: {
        fr: "La forêt, les animaux, l'agriculture durable : comment, il y a huit siècles, les sages du Mandén protégèrent déjà la nature pour les générations futures.",
        en: "The forest, the animals, sustainable farming: how, eight centuries ago, the sages of Mandén were already protecting nature for future generations.",
        ar: "الغابة والحيوانات والزراعة المستدامة: كيف حمى حكماء الـMandén الطبيعة قبل ثمانية قرون من أجل الأجيال القادمة.",
        zh: "森林、动物、可持续农业：八个世纪前，Mandén 的智者们如何已经为子孙后代保护自然。",
      },
    },
    {
      numero: 7, statut: "soon",
      titre: { fr: "Le Serment des Gardiens", en: "The Guardians' Oath", ar: "قَسَم الحُرّاس", zh: "守护者的誓言" },
      teaser: {
        fr: "La promulgation de la Charte et la transmission : qui protège la loi quand les rois meurent ? Le dernier secret que Sidiman confie à ses enfants.",
        en: "The proclamation of the Charter and its transmission: who protects the law when kings die? The last secret Sidiman entrusts to his children.",
        ar: "إعلان الميثاق ونقله: من يحمي القانون حين يموت الملوك؟ السرّ الأخير الذي يُودِعه Sidiman أبناءه.",
        zh: "宪章的颁布与传承：当君王逝去，谁来守护法律？这是 Sidiman 托付给孩子们的最后一个秘密。",
      },
    },
  ] as Episode[],
};
