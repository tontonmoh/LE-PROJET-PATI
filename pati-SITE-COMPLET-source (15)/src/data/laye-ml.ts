// laye-ml.ts
// « Laye de Kouroussa » — adaptation jeunesse de L'Enfant Noir de Camara Laye
// Source de référence : PDF officiel de l'éditeur (laye.pdf).
// Lecteur multilingue Pati — même principe que chateau-ml.ts :
//   • Latin (fr / en) : police Andika
//   • Arabe (ar)      : police Noto Naskh Arabic, dir = "rtl"
//   • Chinois (zh)    : police Noto Sans SC
// Les sections sont ALIGNÉES : même `id`, même ordre, même nombre dans les 4 langues.

export type LayeLang = "fr" | "en" | "ar" | "zh";

export interface LayeSection {
  id: string;          // identifiant stable, identique d'une langue à l'autre
  title: string;
  paragraphs: string[];
}

export interface LayeBook {
  lang: LayeLang;
  dir: "ltr" | "rtl";
  label: string;       // nom de la langue dans sa propre langue
  bookTitle: string;
  sections: LayeSection[];
}

export const LAYE_ML: Record<LayeLang, LayeBook> = {
  // ──────────────────────────────────────────────────────────────────────────
  // FRANÇAIS (texte de référence, transcrit du PDF)
  // ──────────────────────────────────────────────────────────────────────────
  fr: {
    lang: "fr",
    dir: "ltr",
    label: "Français",
    bookTitle: "Laye de Kouroussa",
    sections: [
      {
        id: "intro",
        title: "Salut, moi c'est Laye",
        paragraphs: [
          `Salut ! Moi, c'est Laye Camara. L'Enfant Noir. Vous avez peut-être déjà entendu parler de moi : mon histoire a fait le tour du monde... surtout dans les lycées ! Mais vous, les plus jeunes, est-ce que vous me connaissez vraiment ?`,
          `En mon temps, pas de téléphones, pas d'écrans... Juste la nature, la famille et des aventures incroyables tous les jours ! Curieux d'en apprendre plus ?`,
          `Alors, prêts à remonter le temps ? Venez, on bouge pour Kouroussa !`,
        ],
      },
      {
        id: "kouroussa",
        title: "Bienvenue à Kouroussa",
        paragraphs: [
          `Kouroussa, c'est mon point de départ. Imaginez un grand village baigné par le soleil de la Haute-Guinée, là où le fleuve Niger commence sa longue route.`,
          `Ici, les maisons sont des cases rondes aux murs de terre et aux toits de chaume, qui se regroupent en familles. C'est un endroit où la terre est rouge, où les baobabs géants surveillent la savane, et où chaque voisin est un peu comme un oncle ou une tante.`,
          `C'est ici, entre le bruit du marteau sur l'enclume et le chant des oiseaux de la brousse, que tout a commencé pour moi.`,
        ],
      },
      {
        id: "pere-forgeron",
        title: "Mon père, le forgeron",
        paragraphs: [
          `Mon père n'était pas un homme comme les autres. Quand il travaillait le fer, c'était comme s'il parlait au feu lui-même.`,
          `Chaque coup de marteau, chaque étincelle racontait une histoire ancienne, celle de notre peuple forgeron. J'adorais le regarder... et j'apprenais sans même m'en rendre compte.`,
        ],
      },
      {
        id: "serpent-dore",
        title: "Le petit serpent doré",
        paragraphs: [
          `Mais le secret le mieux gardé de l'atelier, c'était lui : le petit serpent doré. Mon père disait que c'était le guide de nos ancêtres forgerons, celui qui nous montrait les mystères de l'or.`,
          `Jamais je ne l'ai craint. Il veillait sur nous, et sur les merveilles que mon père tirait de ce métal précieux.`,
        ],
      },
      {
        id: "mere-patronne",
        title: "La patronne de la maison",
        paragraphs: [
          `Et voici la vraie patronne de la maison : ma mère ! Ne vous fiez pas à son sourire tranquille... elle a une force de lionne et un regard qui peut calmer n'importe quelle dispute en une seconde.`,
        ],
      },
      {
        id: "mere-animaux",
        title: "Elle parle aux animaux",
        paragraphs: [
          `Son truc à elle ? Elle parle aux animaux. Pour de vrai ! Et tout le monde au village sait qu'il ne faut pas l'énerver, car elle possède des secrets que même les plus vieux respectent.`,
          `« C'est elle qui fait battre le cœur de notre maison », aimait dire mon papa.`,
        ],
      },
      {
        id: "ecole-brousse",
        title: "L'école de la brousse",
        paragraphs: [
          `Bon, après la forge et la maison, passons aux choses sérieuses : les virées dans la brousse avec mes oncles ! Pas de téléphone pour prendre des photos ici, juste nos yeux et nos oreilles.`,
          `C'était comme une école géante à ciel ouvert. Mes oncles m'apprenaient à lire les pistes, à comprendre le vent, à écouter les sons...`,
        ],
      },
      {
        id: "secrets-nature",
        title: "Les secrets de la nature",
        paragraphs: [
          `Chaque feuille, chaque brindille racontait une histoire. Et on respectait tout : la brousse est notre amie, pas un simple terrain de jeu.`,
          `C'est là que j'ai compris que la nature a des milliers de secrets, et qu'il faut être patient pour qu'elle te les révèle.`,
        ],
      },
      {
        id: "veillee",
        title: "La veillée",
        paragraphs: [
          `Quand le soleil se couchait et que les étoiles s'allumaient, c'était l'heure préférée de tous : la veillée ! Fini les jeux dans la poussière, place à la magie des contes.`,
          `Pas besoin d'écrans pour voyager. Juste la voix des anciens, qui nous emmenait loin, très loin... Ils nous parlaient de héros, d'animaux malins, de nos ancêtres.`,
          `Ces nuits sous la lune étaient comme de beaux films : une leçon, une aventure, une part de nous. C'est comme ça qu'on apprenait qui on était, d'où on venait.`,
        ],
      },
      {
        id: "ecole",
        title: "L'école, c'est l'école",
        paragraphs: [
          `Bon, on ne va pas se mentir : l'école, c'est l'école ! Que ce soit à Kouroussa ou chez vous, le stress du tableau noir reste le même.`,
          `Vous connaissez ce moment où vous avez l'impression que tout ce que vous avez révisé s'est envolé par la fenêtre ?`,
        ],
      },
      {
        id: "lettres-chiffres",
        title: "Dompter les lettres et les chiffres",
        paragraphs: [
          `C'est là que j'ai découvert que la vraie aventure, c'était aussi de dompter les lettres et les chiffres. Finies les balades tranquilles, place à la dictée et à l'arithmétique.`,
          `C'était dur, parfois injuste, mais c'était aussi une porte ouverte sur un monde immense. Finalement, la traque en brousse ou le problème de maths bien complexe... ça forge bien le courage !`,
        ],
      },
      {
        id: "tambours",
        title: "Les tambours résonnent",
        paragraphs: [
          `Et puis, un soir, les tambours ont résonné différemment. C'était le moment. Celui où l'on arrête de jouer au petit garçon pour devenir un homme.`,
          `C'est une étape qui fait peur, je vous l'avoue. On nous appelle au milieu de la nuit, on nous teste, on nous demande d'être braves. Ce n'est pas juste une cérémonie, c'est le moment où tu comprends que ta vie ne sera plus jamais la même. Prêts pour le grand saut ?`,
        ],
      },
      {
        id: "troisieme-courage",
        title: "Le troisième courage",
        paragraphs: [
          `Je me demandais ce qui demandait le plus de courage : traquer une bête en brousse ou affronter une équation au tableau noir ? En fait, j'ai trouvé la réponse ce soir-là. Il existe un troisième type de courage : celui de regarder son destin en face et de ne pas baisser les yeux.`,
          `Dans cette case, avec mes potes, on sent l'enfance qui nous glisse entre les doigts.`,
        ],
      },
      {
        id: "epreuve-silence",
        title: "Une épreuve de silence",
        paragraphs: [
          `On a tous la trouille, c'est normal. Mais on ne flanche pas. Le village entier chante pour nous, les tambours nous rappellent qu'on porte l'histoire de nos ancêtres sur nos épaules.`,
          `C'est une épreuve de silence. Demain, on ne sera plus les petits qui courent dans la poussière. On sera des hommes. Et croyez-moi, aucune dictée ni aucun animal ne m'ont jamais fait battre le cœur aussi vite.`,
        ],
      },
      {
        id: "niveau-superieur",
        title: "Le niveau supérieur",
        paragraphs: [
          `On l'a fait. On est sortis de là différents. Finis les vieux pagnes et les jeux de gamins, regardez l'allure ! Le plus fou, ce n'est pas la douleur qu'on a surmontée, c'est le regard nouveau des autres sur nous.`,
          `Dans les yeux de mon père, je ne suis plus « le petit Laye ». Je suis un homme de sa lignée. C'est comme si on venait de débloquer le niveau supérieur de la vie.`,
        ],
      },
      {
        id: "prochain-defi",
        title: "Le prochain défi",
        paragraphs: [
          `Mais attention : être un homme, ça veut aussi dire que les choses sérieuses commencent. Et le prochain défi m'attend déjà...`,
        ],
      },
      {
        id: "conakry",
        title: "Direction Conakry",
        paragraphs: [
          `Wow... Bienvenue à Conakry ! Oubliez le calme de la savane, ici c'est une fourmilière géante. Et l'eau... vous avez déjà vu autant d'eau ? Je connaissais les petites rivières de chez nous, mais ici, c'est la mer — enfin, l'océan ! Elle ne s'arrête jamais.`,
          `Je me sens comme une petite fourmi perdue au milieu de nulle part. À Kouroussa, je connaissais chaque caillou. Ici, je ne suis personne. C'est ça aussi, devenir un homme : apprendre à tracer son chemin là où personne ne vous attend.`,
        ],
      },
      {
        id: "internat",
        title: "L'internat",
        paragraphs: [
          `L'internat, c'est un autre genre d'épreuve. Pas de chants sous la lune, pas de conseils de mon père. Juste le silence des autres qui dorment et le bruit de mon stylo sur le papier.`,
          `Il y a des soirs où le manque de ma famille me serre la gorge plus fort que n'importe quelle peur en brousse. Mais je me rappelle pourquoi je suis là. Je travaille deux fois plus pour ne pas les décevoir. Ma nouvelle forge, c'est ce bureau.`,
        ],
      },
      {
        id: "diplome",
        title: "Diplôme en poche",
        paragraphs: [
          `Check ! Diplôme en poche. Ces nuits à réviser sous la lampe ont fini par payer. Mes profs disent que j'ai du potentiel, que je peux aller encore plus loin.`,
          `Mais « plus loin », à l'époque, ça voulait dire traverser l'océan. La France. Un rêve fou qui commence à trotter dans ma tête. Est-ce que mon destin est vraiment de l'autre côté de cet horizon bleu ?`,
          `Je suis fier, c'est sûr, mais j'ai une boule au ventre : plus je réussis mes examens, plus je m'éloigne de Kouroussa. C'est le prix de la liberté, je suppose ?`,
        ],
      },
      {
        id: "annoncer-depart",
        title: "Annoncer le départ",
        paragraphs: [
          `Annoncer à ma mère que je partais pour la France... c'était comme lui arracher une partie d'elle-même. Toutes ses forces semblaient l'avoir quittée d'un coup.`,
          `J'ai beau être un « homme » maintenant, dans ses bras je redevenais le petit garçon qui avait peur du serpent noir. Mon père, lui, restait silencieux. Il savait que mon destin n'était plus ici, mais son regard disait : « N'oublie jamais d'où tu viens. »`,
        ],
      },
      {
        id: "jamais-seul",
        title: "On ne part jamais seul",
        paragraphs: [
          `Le village entier s'est réuni. C'est ça, la force de Kouroussa : on ne part jamais seul. Les anciens défilent pour me donner leurs secrets de voyage, leurs bénédictions.`,
          `À travers les rires et les plats de mil, je réalise que j'emporte tout un village dans ma valise. Je pars pour apprendre leur savoir, mais c'est le mien que je vais devoir protéger là-bas, dans le froid.`,
        ],
      },
      {
        id: "aventure-commence",
        title: "L'aventure commence",
        paragraphs: [
          `Et voilà. J'ai passé toute mon enfance à rêver de cet « ailleurs », et maintenant que j'y suis, j'ai l'impression d'avoir laissé mon cœur dans le Sankaran.`,
          `La France. Un pays dont j'ai lu les livres, mais dont je ne connais pas les bruits, ni les odeurs, ni le froid. Est-ce que je serai toujours le même Laye de l'autre côté ?`,
          `En tout cas, je n'avais plus d'autre choix que d'avancer. L'aventure commence vraiment maintenant.`,
        ],
      },
      {
        id: "lettre-jeunesse",
        title: "Lettre à la jeunesse — Qui était Camara Laye ?",
        paragraphs: [
          `Salut à toi, jeune lecteur, jeune lectrice ! Nous arrivons au bout de ce voyage avec Laye, de la terre rouge de Kouroussa jusqu'aux quais brumeux de la France. Si nous devions dédier cette adaptation à quelqu'un, ce serait bien sûr à lui : Camara Laye, l'homme qui a su transformer ses souvenirs en un trésor pour le monde entier.`,
          `Né en 1928 en Haute-Guinée, Laye était ce petit garçon qui jouait dans l'atelier de son père forgeron, fasciné par le petit serpent, le guide de ses ancêtres. Sa vie a été un pont entre deux mondes : celui de la tradition africaine, avec ses veillées sous la lune et ses rites d'initiation comme le Konden Diarra, et celui de la modernité, à travers l'école française, le lycée technique de Conakry, puis ses études d'ingénieur en France.`,
          `C'est là-bas, loin de la chaleur de sa Guinée natale, qu'il a ressenti le besoin d'écrire. Dans le froid et la solitude de Paris, il a pris sa plume pour ne pas oublier l'odeur de la terre après la pluie. En publiant L'Enfant Noir en 1953, il est devenu l'une des voix les plus importantes de la littérature africaine.`,
        ],
      },
      {
        id: "heros-identite",
        title: "Un héros de l'identité africaine",
        paragraphs: [
          `Pourquoi Laye est-il si important ? Parce qu'il nous a montré que l'identité africaine n'est pas quelque chose de vieux ou de dépassé. C'est une force vivante.`,
          `La fierté des racines : il a écrit son histoire pour garder son « serpent » près de lui, même à des milliers de kilomètres. L'ouverture au monde : il nous apprend qu'on peut étudier dans les plus grandes écoles sans jamais trahir d'où l'on vient. Le respect de la nature et des anciens : à travers ses mots, il redonne ses lettres de noblesse à la culture orale, aux contes des veillées et au savoir des forgerons.`,
        ],
      },
      {
        id: "ton-tour",
        title: "Ton tour de briller",
        paragraphs: [
          `Laye a prouvé qu'un enfant parti d'un petit village de Haute-Guinée pouvait toucher le cœur de millions de personnes à travers la planète. Il a laissé sa trace. Aujourd'hui, cette adaptation te passe le relais.`,
          `Comme lui, n'aie pas peur de grandir ou de partir vers de nouveaux horizons. Ton histoire est ton trésor. Que tu sois à l'école, face à un problème de maths, ou en train d'apprendre les secrets de ta propre famille, souviens-toi : dans le cœur de chaque enfant réside une étoile prête à briller.`,
          `Alors, prêt(e) à tracer ton propre chemin ? Laye de Kouroussa veille sur toi, et son histoire continuera de vivre tant que tu porteras avec fierté l'héritage de tes racines.`,
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // ENGLISH
  // ──────────────────────────────────────────────────────────────────────────
  en: {
    lang: "en",
    dir: "ltr",
    label: "English",
    bookTitle: "Laye of Kouroussa",
    sections: [
      {
        id: "intro",
        title: "Hi, I'm Laye",
        paragraphs: [
          `Hi! I'm Laye Camara — the African Child. Maybe you've heard of me already: my story has travelled all over the world... especially in high schools! But you, the younger ones — do you really know me?`,
          `In my day, there were no phones, no screens... just nature, family, and amazing adventures every single day! Curious to learn more?`,
          `So, ready to travel back in time? Come on, let's head for Kouroussa!`,
        ],
      },
      {
        id: "kouroussa",
        title: "Welcome to Kouroussa",
        paragraphs: [
          `Kouroussa is where it all begins for me. Picture a big village bathed in the sunshine of Upper Guinea, right where the Niger River sets off on its long journey.`,
          `Here, the houses are round huts with earthen walls and thatched roofs, gathered together like families. It's a place where the earth is red, where giant baobabs watch over the savannah, and where every neighbour is a little like an uncle or an aunt.`,
          `It's here, between the ring of the hammer on the anvil and the song of the bush birds, that everything started for me.`,
        ],
      },
      {
        id: "pere-forgeron",
        title: "My father, the blacksmith",
        paragraphs: [
          `My father was not a man like the others. When he worked the iron, it was as if he were speaking to the fire itself.`,
          `Every blow of the hammer, every spark told an ancient story — the story of our blacksmith people. I loved to watch him... and I was learning without even realising it.`,
        ],
      },
      {
        id: "serpent-dore",
        title: "The little golden snake",
        paragraphs: [
          `But the best-kept secret of the workshop was him: the little golden snake. My father said it was the guide of our blacksmith ancestors, the one who showed us the mysteries of gold.`,
          `I was never afraid of it. It watched over us, and over the wonders my father drew from that precious metal.`,
        ],
      },
      {
        id: "mere-patronne",
        title: "The boss of the house",
        paragraphs: [
          `And here is the real boss of the house: my mother! Don't be fooled by her calm smile... she has the strength of a lioness and a look that can settle any quarrel in a single second.`,
        ],
      },
      {
        id: "mere-animaux",
        title: "She talks to animals",
        paragraphs: [
          `Her special gift? She talks to animals. For real! And everyone in the village knows you mustn't make her angry, because she holds secrets that even the oldest people respect.`,
          `"She's the one who makes the heart of our home beat," my dad loved to say.`,
        ],
      },
      {
        id: "ecole-brousse",
        title: "The school of the bush",
        paragraphs: [
          `Right — after the forge and the house, let's get to the serious business: trips into the bush with my uncles! No phone to take pictures here, just our eyes and our ears.`,
          `It was like a giant open-air school. My uncles taught me to read the tracks, to understand the wind, to listen to the sounds...`,
        ],
      },
      {
        id: "secrets-nature",
        title: "Nature's secrets",
        paragraphs: [
          `Every leaf, every twig told a story. And we respected everything: the bush is our friend, not just a playground.`,
          `That's when I understood that nature holds thousands of secrets, and that you have to be patient for it to reveal them to you.`,
        ],
      },
      {
        id: "veillee",
        title: "The evening gathering",
        paragraphs: [
          `When the sun went down and the stars lit up, it was everyone's favourite hour: the evening gathering! No more games in the dust — now came the magic of the tales.`,
          `No screens needed to travel. Just the voices of the elders, carrying us far, far away... They told us of heroes, clever animals, and our ancestors.`,
          `Those nights under the moon were like beautiful films: a lesson, an adventure, a part of who we were. That's how we learned who we were and where we came from.`,
        ],
      },
      {
        id: "ecole",
        title: "School is school",
        paragraphs: [
          `Okay, let's be honest: school is school! Whether in Kouroussa or where you live, the stress of the blackboard is exactly the same.`,
          `You know that moment when you feel like everything you revised has just flown out of the window?`,
        ],
      },
      {
        id: "lettres-chiffres",
        title: "Taming letters and numbers",
        paragraphs: [
          `That's when I discovered that the real adventure was also about taming letters and numbers. No more easy strolls — now came dictation and arithmetic.`,
          `It was hard, sometimes unfair, but it was also a door opening onto a vast world. In the end, tracking an animal in the bush or solving a really tricky maths problem... both of them build courage!`,
        ],
      },
      {
        id: "tambours",
        title: "The drums sound out",
        paragraphs: [
          `And then, one evening, the drums sounded different. This was the moment. The one where you stop playing the little boy and become a man.`,
          `It's a frightening step, I'll admit. They call you in the middle of the night, they test you, they ask you to be brave. It isn't just a ceremony — it's the moment you understand that your life will never be the same again. Ready for the great leap?`,
        ],
      },
      {
        id: "troisieme-courage",
        title: "The third kind of courage",
        paragraphs: [
          `I used to wonder which took more courage: tracking a wild animal in the bush, or facing an equation on the blackboard? In fact, I found the answer that night. There is a third kind of courage: looking your destiny in the face and not lowering your eyes.`,
          `In that hut, with my friends, you could feel childhood slipping through our fingers.`,
        ],
      },
      {
        id: "epreuve-silence",
        title: "A test of silence",
        paragraphs: [
          `We're all scared, that's normal. But we don't flinch. The whole village sings for us; the drums remind us that we carry the history of our ancestors on our shoulders.`,
          `It's a test of silence. Tomorrow, we won't be the little ones running in the dust anymore. We'll be men. And believe me, no dictation and no animal ever made my heart beat that fast.`,
        ],
      },
      {
        id: "niveau-superieur",
        title: "The next level",
        paragraphs: [
          `We did it. We came out of there changed. No more old loincloths and kids' games — look at the bearing! The wildest part isn't the pain we got through; it's the new way others look at us.`,
          `In my father's eyes, I'm no longer "little Laye." I'm a man of his lineage. It's as if we'd just unlocked the next level of life.`,
        ],
      },
      {
        id: "prochain-defi",
        title: "The next challenge",
        paragraphs: [
          `But watch out: being a man also means the serious things are only just beginning. And the next challenge is already waiting for me...`,
        ],
      },
      {
        id: "conakry",
        title: "Heading for Conakry",
        paragraphs: [
          `Wow... Welcome to Conakry! Forget the calm of the savannah — this is a giant anthill. And the water... have you ever seen so much water? I knew the little rivers back home, but here it's the sea — well, the ocean! It never stops.`,
          `I feel like a tiny ant lost in the middle of nowhere. In Kouroussa, I knew every pebble. Here, I'm nobody. That, too, is part of becoming a man: learning to make your own way where no one is waiting for you.`,
        ],
      },
      {
        id: "internat",
        title: "Boarding school",
        paragraphs: [
          `Boarding school is another kind of test. No songs under the moon, no advice from my father. Just the silence of the others sleeping and the sound of my pen on the paper.`,
          `There are evenings when missing my family grips my throat harder than any fear in the bush. But I remember why I'm here. I work twice as hard so as not to let them down. My new forge is this desk.`,
        ],
      },
      {
        id: "diplome",
        title: "Diploma in hand",
        paragraphs: [
          `Done! Diploma in hand. Those nights revising under the lamp finally paid off. My teachers say I have potential, that I can go even further.`,
          `But "further," back then, meant crossing the ocean. France. A wild dream that starts running through my head. Is my destiny really on the other side of that blue horizon?`,
          `I'm proud, that's for sure, but my stomach is in knots: the better I do in my exams, the further I drift from Kouroussa. That's the price of freedom, I suppose?`,
        ],
      },
      {
        id: "annoncer-depart",
        title: "Telling them I'm leaving",
        paragraphs: [
          `Telling my mother I was leaving for France... it was like tearing a piece of her away. All her strength seemed to drain out of her at once.`,
          `Even though I'm a "man" now, in her arms I became again the little boy who was afraid of the black snake. My father stayed silent. He knew my destiny was no longer here, but his eyes said: "Never forget where you come from."`,
        ],
      },
      {
        id: "jamais-seul",
        title: "You never leave alone",
        paragraphs: [
          `The whole village came together. That's the strength of Kouroussa: you never leave alone. The elders come one after another to give me their travelling secrets and their blessings.`,
          `Through the laughter and the dishes of millet, I realise I'm carrying a whole village in my suitcase. I'm leaving to learn their knowledge, but it's my own that I'll have to protect over there, in the cold.`,
        ],
      },
      {
        id: "aventure-commence",
        title: "The adventure begins",
        paragraphs: [
          `And there it is. I spent my whole childhood dreaming of this "elsewhere," and now that I'm here, I feel as though I've left my heart in the Sankaran.`,
          `France. A country whose books I've read, but whose sounds, smells, and cold I don't know. Will I still be the same Laye on the other side?`,
          `Either way, I had no choice but to go forward. The adventure really begins now.`,
        ],
      },
      {
        id: "lettre-jeunesse",
        title: "A letter to today's youth — Who was Camara Laye?",
        paragraphs: [
          `Hello to you, young reader! We've reached the end of this journey with Laye, from the red earth of Kouroussa to the misty quays of France. If we had to dedicate this adaptation to anyone, it would of course be to him: Camara Laye, the man who turned his memories into a treasure for the whole world.`,
          `Born in 1928 in Upper Guinea, Laye was that little boy who played in his blacksmith father's workshop, fascinated by the little snake, the guide of his ancestors. His life was a bridge between two worlds: that of African tradition, with its evening gatherings under the moon and its rites of passage such as the Konden Diarra; and that of modernity, through French school, the technical high school in Conakry, and then his engineering studies in France.`,
          `It was there, far from the warmth of his native Guinea, that he felt the need to write. In the cold and loneliness of Paris, he took up his pen so as not to forget the smell of the earth after the rain. By publishing The African Child in 1953, he became one of the most important voices in African literature.`,
        ],
      },
      {
        id: "heros-identite",
        title: "A hero of African identity",
        paragraphs: [
          `Why is Laye so important? Because he showed us that African identity is not something old or out of date. It is a living force.`,
          `The pride of roots: he wrote his story to keep his "snake" close to him, even thousands of kilometres away. Openness to the world: he teaches us that you can study in the greatest schools without ever betraying where you come from. Respect for nature and for the elders: through his words, he restores the nobility of oral culture, of the tales of the evening gatherings, and of the knowledge of the blacksmiths.`,
        ],
      },
      {
        id: "ton-tour",
        title: "Your turn to shine",
        paragraphs: [
          `Laye proved that a child who set out from a small village in Upper Guinea could touch the hearts of millions of people across the planet. He left his mark. Today, this adaptation passes the baton to you.`,
          `Like him, don't be afraid to grow up or to set out for new horizons. Your story is your treasure. Whether you're at school, facing a maths problem, or learning the secrets of your own family, remember: in the heart of every child lives a star ready to shine.`,
          `So — ready to trace your own path? Laye of Kouroussa is watching over you, and his story will go on living as long as you carry the heritage of your roots with pride.`,
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // العربية (arabe — dir = rtl, police Noto Naskh Arabic)
  // ⚠ Traduction à faire relire par un locuteur natif avant la prod.
  // ──────────────────────────────────────────────────────────────────────────
  ar: {
    lang: "ar",
    dir: "rtl",
    label: "العربية",
    bookTitle: "لاي من كوروسا",
    sections: [
      {
        id: "intro",
        title: "مرحبًا، أنا لاي",
        paragraphs: [
          `مرحبًا! أنا لاي كامارا، «الطفل الأسود». ربما سمعتم بي من قبل: فقصتي طافت أنحاء العالم... وخاصة في المدارس الثانوية! لكن أنتم، أيها الصغار، هل تعرفونني حقًّا؟`,
          `في زماني، لم تكن هناك هواتف ولا شاشات... فقط الطبيعة والعائلة ومغامرات مدهشة كل يوم! هل تتشوّقون لمعرفة المزيد؟`,
          `إذن، هل أنتم مستعدّون للعودة بالزمن إلى الوراء؟ هيا بنا نمضي إلى كوروسا!`,
        ],
      },
      {
        id: "kouroussa",
        title: "مرحبًا بكم في كوروسا",
        paragraphs: [
          `كوروسا هي نقطة انطلاقي. تخيّلوا قرية كبيرة تغمرها شمس غينيا العليا، هناك حيث يبدأ نهر النيجر رحلته الطويلة.`,
          `هنا، البيوت أكواخ مستديرة بجدران من طين وسقوف من قشّ، تتجمّع معًا كأنها عائلات. إنه مكان ترابه أحمر، تحرس فيه أشجار الباوباب العملاقة السافانا، وكل جار فيه يكاد يكون عمًّا أو خالة.`,
          `هنا، بين رنين المطرقة على السندان وغناء طيور الأدغال، بدأ كل شيء بالنسبة إليّ.`,
        ],
      },
      {
        id: "pere-forgeron",
        title: "أبي الحدّاد",
        paragraphs: [
          `لم يكن أبي رجلًا كسائر الرجال. حين كان يطرق الحديد، بدا وكأنه يحدّث النار نفسها.`,
          `كانت كل ضربة مطرقة، وكل شرارة، تروي حكاية قديمة، حكاية قومنا الحدّادين. كنت أحبّ مراقبته... وكنت أتعلّم دون أن أشعر.`,
        ],
      },
      {
        id: "serpent-dore",
        title: "الثعبان الذهبيّ الصغير",
        paragraphs: [
          `لكن سرّ الورشة الأكثر كتمانًا كان هو: الثعبان الذهبيّ الصغير. كان أبي يقول إنه دليل أجدادنا الحدّادين، الذي يكشف لنا أسرار الذهب.`,
          `لم أخفْه قطّ. كان يسهر علينا، وعلى العجائب التي كان أبي يستخرجها من ذلك المعدن النفيس.`,
        ],
      },
      {
        id: "mere-patronne",
        title: "سيّدة البيت",
        paragraphs: [
          `وها هي سيّدة البيت الحقيقيّة: أمي! لا تنخدعوا بابتسامتها الهادئة... فلها قوّة لبؤة، ونظرة تُهدِّئ أي شجار في ثانية واحدة.`,
        ],
      },
      {
        id: "mere-animaux",
        title: "تحدّث الحيوانات",
        paragraphs: [
          `ما سرّها؟ إنها تحدّث الحيوانات. حقًّا! والجميع في القرية يعرف أنه لا يجوز إغضابها، لأنها تملك أسرارًا يحترمها حتى أكبر العجائز سنًّا.`,
          `«هي مَن يجعل قلب بيتنا ينبض»، هكذا كان يحبّ أبي أن يقول.`,
        ],
      },
      {
        id: "ecole-brousse",
        title: "مدرسة الأدغال",
        paragraphs: [
          `حسنًا، بعد الورشة والبيت، لننتقل إلى الأمور الجدّيّة: الجولات في الأدغال مع أعمامي! لا هاتف هنا لالتقاط الصور، فقط أعيننا وآذاننا.`,
          `كانت أشبه بمدرسة عملاقة في الهواء الطلق. كان أعمامي يعلّمونني قراءة الآثار، وفهم الريح، والإصغاء إلى الأصوات...`,
        ],
      },
      {
        id: "secrets-nature",
        title: "أسرار الطبيعة",
        paragraphs: [
          `كانت كل ورقة، وكل غصن صغير، تروي حكاية. وكنّا نحترم كل شيء: فالأدغال صديقتنا، لا مجرّد ساحة لعب.`,
          `هناك أدركت أن للطبيعة آلاف الأسرار، وأن عليك أن تتحلّى بالصبر كي تكشفها لك.`,
        ],
      },
      {
        id: "veillee",
        title: "سهرة المساء",
        paragraphs: [
          `حين كانت الشمس تغيب وتُضيء النجوم، كانت تحلّ الساعة المفضّلة لدى الجميع: السهرة! تنتهي الألعاب في الغبار، ويحلّ سحر الحكايات.`,
          `لا حاجة إلى شاشات كي نسافر. فقط أصوات الكبار، تحملنا بعيدًا، بعيدًا جدًّا... كانوا يحدّثوننا عن الأبطال، والحيوانات الماكرة، وأجدادنا.`,
          `كانت تلك الليالي تحت القمر أشبه بأفلام جميلة: درس، ومغامرة، وجزء منّا. هكذا كنّا نتعلّم من نحن ومن أين أتينا.`,
        ],
      },
      {
        id: "ecole",
        title: "المدرسة تبقى مدرسة",
        paragraphs: [
          `حسنًا، لنكن صادقين: المدرسة تبقى مدرسة! سواء في كوروسا أو في بلدكم، يبقى توتُّر السبّورة هو نفسه.`,
          `أتعرفون تلك اللحظة التي تشعرون فيها أن كل ما راجعتموه قد طار من النافذة؟`,
        ],
      },
      {
        id: "lettres-chiffres",
        title: "ترويض الحروف والأرقام",
        paragraphs: [
          `هناك اكتشفت أن المغامرة الحقيقيّة هي أيضًا ترويض الحروف والأرقام. انتهت النزهات الهادئة، وحلّ الإملاء والحساب.`,
          `كان الأمر صعبًا، وأحيانًا غير عادل، لكنه كان أيضًا بابًا مفتوحًا على عالم واسع. في النهاية، تعقُّب حيوان في الأدغال أو حلّ مسألة رياضيّات معقّدة جدًّا... كلاهما يصنع الشجاعة!`,
        ],
      },
      {
        id: "tambours",
        title: "تدقّ الطبول",
        paragraphs: [
          `ثم، في إحدى الأمسيات، دقّت الطبول دقًّا مختلفًا. كانت تلك هي اللحظة. اللحظة التي يكفّ فيها المرء عن لعب دور الصبيّ الصغير ليصير رجلًا.`,
          `إنها مرحلة مخيفة، أعترف لكم. ينادوننا في جوف الليل، ويختبروننا، ويطلبون منّا أن نكون شجعانًا. ليست مجرّد مراسم، بل هي اللحظة التي تفهم فيها أن حياتك لن تكون كما كانت أبدًا. هل أنتم مستعدّون للقفزة الكبرى؟`,
        ],
      },
      {
        id: "troisieme-courage",
        title: "الشجاعة الثالثة",
        paragraphs: [
          `كنت أتساءل: أيّهما يتطلّب شجاعة أكبر، تعقُّب وحش في الأدغال أم مواجهة معادلة على السبّورة؟ في الحقيقة، وجدت الجواب تلك الليلة. هناك نوع ثالث من الشجاعة: أن تنظر إلى مصيرك وجهًا لوجه، ولا تُطرِق ببصرك.`,
          `في ذلك الكوخ، مع أصدقائي، كنّا نشعر بالطفولة تنساب من بين أصابعنا.`,
        ],
      },
      {
        id: "epreuve-silence",
        title: "امتحان الصمت",
        paragraphs: [
          `كلّنا خائفون، وهذا طبيعيّ. لكننا لا نتراجع. القرية كلها تغنّي من أجلنا، والطبول تذكّرنا أننا نحمل تاريخ أجدادنا على أكتافنا.`,
          `إنه امتحان صمت. غدًا، لن نكون الصغار الذين يركضون في الغبار. سنكون رجالًا. وصدّقوني، لا إملاء ولا حيوان جعل قلبي ينبض بهذه السرعة قطّ.`,
        ],
      },
      {
        id: "niveau-superieur",
        title: "المستوى الأعلى",
        paragraphs: [
          `لقد فعلناها. خرجنا من هناك مختلفين. انتهت الأثواب القديمة وألعاب الصغار، انظروا إلى الهيئة! والأعجب من ذلك ليس الألم الذي تجاوزناه، بل نظرة الآخرين الجديدة إلينا.`,
          `في عيني أبي، لم أعُد «لاي الصغير». صرت رجلًا من سلالته. وكأننا فتحنا للتوّ المستوى الأعلى من الحياة.`,
        ],
      },
      {
        id: "prochain-defi",
        title: "التحدّي القادم",
        paragraphs: [
          `لكن انتبهوا: أن تصير رجلًا يعني أيضًا أن الأمور الجدّيّة قد بدأت للتوّ. والتحدّي القادم ينتظرني سلفًا...`,
        ],
      },
      {
        id: "conakry",
        title: "في اتّجاه كوناكري",
        paragraphs: [
          `واو... مرحبًا بكم في كوناكري! انسَوا هدوء السافانا، فهنا قرية نمل عملاقة. والماء... هل رأيتم يومًا هذا القدر من الماء؟ كنت أعرف أنهار قريتنا الصغيرة، أما هنا فهو البحر — بل المحيط! لا يتوقّف أبدًا.`,
          `أشعر كأنني نملة صغيرة تائهة في وسط اللامكان. في كوروسا، كنت أعرف كل حصاة. أما هنا، فأنا لا أحد. وهذا أيضًا جزء من أن تصير رجلًا: أن تتعلّم شقّ طريقك حيث لا ينتظرك أحد.`,
        ],
      },
      {
        id: "internat",
        title: "المدرسة الداخليّة",
        paragraphs: [
          `المدرسة الداخليّة امتحان من نوع آخر. لا أغانٍ تحت القمر، ولا نصائح من أبي. فقط صمت النائمين وصوت قلمي على الورق.`,
          `هناك أمسياتٌ يخنقني فيها الحنين إلى عائلتي أشدّ من أي خوف في الأدغال. لكنني أتذكّر لماذا أنا هنا. أعمل ضِعفَ ما أعمل كي لا أخيّب ظنّهم. مِسبَكي الجديد هو هذا المكتب.`,
        ],
      },
      {
        id: "diplome",
        title: "الشهادة في الجيب",
        paragraphs: [
          `تمّ الأمر! الشهادة في الجيب. تلك الليالي التي قضيتها أراجع تحت ضوء المصباح أثمرت أخيرًا. يقول أساتذتي إن لديّ إمكانات، وإنني أستطيع أن أمضي أبعد من ذلك.`,
          `لكنّ «أبعد» في ذلك الزمن كانت تعني عبور المحيط. فرنسا. حلمٌ جامح بدأ يدور في رأسي. أحقًّا مصيري في الجهة الأخرى من ذلك الأفق الأزرق؟`,
          `أنا فخور، بلا شكّ، لكن في معدتي عُقدة: كلّما نجحت في امتحاناتي ابتعدت أكثر عن كوروسا. هذا ثمن الحرّيّة، على ما أظنّ؟`,
        ],
      },
      {
        id: "annoncer-depart",
        title: "إعلان الرحيل",
        paragraphs: [
          `أن أُخبر أمي بأنني سأرحل إلى فرنسا... كان أشبه بانتزاع جزء منها. بدا أن كل قواها قد فارقتها دفعةً واحدة.`,
          `مهما صرت «رجلًا» الآن، فإنني بين ذراعيها عدتُ ذلك الصبيّ الصغير الذي يخاف الثعبان الأسود. أما أبي، فظلّ صامتًا. كان يعرف أن مصيري لم يعُد هنا، لكن نظرته كانت تقول: «لا تنسَ أبدًا من أين أتيت.»`,
        ],
      },
      {
        id: "jamais-seul",
        title: "لا يرحل المرء وحده أبدًا",
        paragraphs: [
          `اجتمعت القرية كلها. هذه هي قوّة كوروسا: لا يرحل المرء وحده أبدًا. يتوافد الكبار واحدًا تلو الآخر ليمنحوني أسرار السفر وبركاتهم.`,
          `وسط الضحكات وأطباق الدخن، أدركتُ أنني أحمل قرية بأكملها في حقيبتي. أرحل لأتعلّم علمهم، لكنّ علمي أنا هو ما سيتعيّن عليّ حمايته هناك، في البرد.`,
        ],
      },
      {
        id: "aventure-commence",
        title: "تبدأ المغامرة",
        paragraphs: [
          `وها قد حان الأمر. قضيت طفولتي كلها أحلم بهذا «المكان الآخر»، والآن وقد بلغته، أشعر كأنني تركت قلبي في سانكاران.`,
          `فرنسا. بلدٌ قرأت كتبه، لكنني لا أعرف أصواته، ولا روائحه، ولا برده. هل سأبقى لاي نفسه في الجهة الأخرى؟`,
          `على أي حال، لم يبقَ أمامي خيار سوى المضيّ قُدُمًا. المغامرة تبدأ حقًّا الآن.`,
        ],
      },
      {
        id: "lettre-jeunesse",
        title: "رسالة إلى شباب اليوم — من كان كامارا لاي؟",
        paragraphs: [
          `مرحبًا بك، أيها القارئ الصغير، أيتها القارئة الصغيرة! ها نحن نبلغ نهاية هذه الرحلة مع لاي، من تراب كوروسا الأحمر إلى أرصفة فرنسا الضبابيّة. لو كان علينا أن نُهدي هذه المعالجة إلى أحد، لكان هو بلا شكّ: كامارا لاي، الرجل الذي حوّل ذكرياته إلى كنزٍ للعالم أجمع.`,
          `وُلد لاي عام 1928 في غينيا العليا، وكان ذلك الصبيّ الصغير الذي يلعب في ورشة أبيه الحدّاد، مفتونًا بالثعبان الصغير، دليل أجداده. كانت حياته جسرًا بين عالمَين: عالم التقاليد الإفريقيّة، بسهراته تحت القمر وطقوس عبوره مثل «كوندن ديارّا»؛ وعالم الحداثة، عبر المدرسة الفرنسيّة، والثانويّة التقنيّة في كوناكري، ثم دراسته الهندسيّة في فرنسا.`,
          `هناك، بعيدًا عن دفء غينيا مسقط رأسه، شعر بالحاجة إلى الكتابة. في برد باريس ووحدتها، أمسك قلمه كي لا ينسى رائحة الأرض بعد المطر. وبنشره «الطفل الأسود» عام 1953، صار أحد أهمّ أصوات الأدب الإفريقيّ.`,
        ],
      },
      {
        id: "heros-identite",
        title: "بطل الهُويّة الإفريقيّة",
        paragraphs: [
          `لماذا لاي بهذه الأهمّيّة؟ لأنه أرانا أن الهُويّة الإفريقيّة ليست شيئًا قديمًا أو عتيقًا. إنها قوّة حيّة.`,
          `فخر الجذور: كتب قصّته ليُبقي «ثعبانه» قريبًا منه، ولو على بُعد آلاف الكيلومترات. الانفتاح على العالم: يعلّمنا أن بإمكانك أن تدرس في أعرق المدارس دون أن تخون أصلك أبدًا. احترام الطبيعة والكبار: بكلماته، يردّ الاعتبار للثقافة الشفويّة، ولحكايات السهرات، ولعلم الحدّادين.`,
        ],
      },
      {
        id: "ton-tour",
        title: "حان دورك لتتألّق",
        paragraphs: [
          `أثبت لاي أن طفلًا انطلق من قرية صغيرة في غينيا العليا يستطيع أن يلامس قلوب ملايين الناس عبر الكوكب. لقد ترك أثره. واليوم، تُسلّمك هذه المعالجة المشعل.`,
          `مثله، لا تخفْ أن تكبر أو أن تنطلق نحو آفاق جديدة. قصّتك هي كنزك. سواء كنت في المدرسة، أو أمام مسألة رياضيّات، أو تتعلّم أسرار عائلتك، تذكّر: في قلب كل طفل نجمةٌ مستعدّة للتألّق.`,
          `إذن، هل أنت مستعدّ لرسم طريقك الخاصّ؟ لاي من كوروسا يسهر عليك، وستظلّ قصّته حيّةً ما دمت تحمل إرث جذورك بفخر.`,
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 中文 (chinois simplifié — police Noto Sans SC)
  // ⚠ Traduction à faire relire par un locuteur natif avant la prod.
  // ──────────────────────────────────────────────────────────────────────────
  zh: {
    lang: "zh",
    dir: "ltr",
    label: "中文",
    bookTitle: "库鲁萨的拉耶",
    sections: [
      {
        id: "intro",
        title: "你好，我是拉耶",
        paragraphs: [
          `你好！我叫拉耶·卡马拉，也就是《黑孩子》。也许你已经听说过我了：我的故事传遍了全世界……尤其是在中学里！可是你们这些更小的孩子，真的了解我吗？`,
          `在我那个年代，没有手机，也没有屏幕……只有大自然、家人，还有每天都精彩无比的冒险！想多了解一些吗？`,
          `那么，准备好回到过去了吗？来吧，我们一起出发去库鲁萨！`,
        ],
      },
      {
        id: "kouroussa",
        title: "欢迎来到库鲁萨",
        paragraphs: [
          `库鲁萨是我出发的地方。想象一座沐浴在上几内亚阳光下的大村庄，就在尼日尔河开始它漫长旅程的地方。`,
          `这里的房子是圆形的土墙茅屋，一家家聚在一起。这是一个土地呈红色的地方，巨大的猴面包树守望着热带草原，每一个邻居都有点像叔伯或姑姨。`,
          `就在这里，在铁锤敲打铁砧的声响与丛林鸟儿的歌唱之间，我的一切开始了。`,
        ],
      },
      {
        id: "pere-forgeron",
        title: "我的父亲，铁匠",
        paragraphs: [
          `我的父亲与众不同。当他打铁时，就仿佛在与火本身交谈。`,
          `每一次锤击、每一颗火星，都讲述着一个古老的故事——我们铁匠民族的故事。我喜欢看着他……而我在不知不觉中学到了东西。`,
        ],
      },
      {
        id: "serpent-dore",
        title: "金色的小蛇",
        paragraphs: [
          `但作坊里守得最严的秘密，就是它：那条金色的小蛇。父亲说，它是我们铁匠祖先的向导，是为我们揭示黄金奥秘的那一位。`,
          `我从来不怕它。它守护着我们，也守护着父亲从这珍贵金属中打造出的奇迹。`,
        ],
      },
      {
        id: "mere-patronne",
        title: "家中的女主人",
        paragraphs: [
          `而这位才是家里真正的女主人：我的母亲！别被她平静的微笑骗了……她有着母狮般的力量，一个眼神就能在一秒钟内平息任何争吵。`,
        ],
      },
      {
        id: "mere-animaux",
        title: "她会和动物说话",
        paragraphs: [
          `她的本事是什么？她会和动物说话。千真万确！全村人都知道不能惹她生气，因为她掌握着连最年长的人都敬重的秘密。`,
          `“是她让我们家的心跳动起来。”我爸爸常这么说。`,
        ],
      },
      {
        id: "ecole-brousse",
        title: "丛林的学校",
        paragraphs: [
          `好了，说完了铁匠铺和家，来说正经事吧：和叔叔们一起进丛林！这里可没有手机拍照，只有我们的眼睛和耳朵。`,
          `那就像一所巨大的露天学校。叔叔们教我辨认足迹、读懂风向、聆听各种声音……`,
        ],
      },
      {
        id: "secrets-nature",
        title: "大自然的秘密",
        paragraphs: [
          `每一片叶子、每一根细枝都在讲述一个故事。我们尊重一切：丛林是我们的朋友，而不只是一个玩耍的场地。`,
          `正是在那里，我明白了大自然藏着千万个秘密，而你必须有耐心，它才会把这些秘密揭示给你。`,
        ],
      },
      {
        id: "veillee",
        title: "夜晚的守夜聚会",
        paragraphs: [
          `当太阳落山、繁星点亮时，就到了大家最喜爱的时刻：守夜聚会！尘土中的游戏结束了，故事的魔力登场了。`,
          `不需要屏幕，我们也能远行。只凭长辈们的声音，把我们带到很远、很远的地方……他们给我们讲英雄、机灵的动物，还有我们的祖先。`,
          `那些月光下的夜晚就像一部部美丽的电影：一个教训、一场冒险、一份属于我们自己的东西。我们就是这样学会了自己是谁、来自哪里。`,
        ],
      },
      {
        id: "ecole",
        title: "上学就是上学",
        paragraphs: [
          `好吧，咱们别自欺欺人：上学就是上学！无论在库鲁萨还是在你们那里，面对黑板的紧张都是一样的。`,
          `你们知道那种感觉吗——好像复习过的一切都从窗户飞走了？`,
        ],
      },
      {
        id: "lettres-chiffres",
        title: "驯服字母和数字",
        paragraphs: [
          `就在那时，我发现真正的冒险也包括驯服字母和数字。悠闲的散步结束了，听写和算术开始了。`,
          `这很难，有时还不公平，但它也是一扇通往广阔世界的大门。说到底，在丛林里追踪野兽，或是解一道很复杂的数学题……两者都同样能锻炼勇气！`,
        ],
      },
      {
        id: "tambours",
        title: "鼓声响起",
        paragraphs: [
          `然后，有一天晚上，鼓声变得不一样了。那一刻到了。就是停止扮演小男孩、成为男子汉的那一刻。`,
          `我承认，这是个让人害怕的阶段。人们在深夜把我们叫起来，考验我们，要求我们勇敢。这不只是一场仪式，而是你明白自己的人生将永远不同的那一刻。准备好这一大跃了吗？`,
        ],
      },
      {
        id: "troisieme-courage",
        title: "第三种勇气",
        paragraphs: [
          `我曾经想：哪一件事更需要勇气——在丛林里追踪野兽，还是面对黑板上的方程式？其实，那天晚上我找到了答案。还有第三种勇气：直面自己的命运，绝不垂下目光。`,
          `在那间茅屋里，和伙伴们在一起，我们感到童年正从指缝间溜走。`,
        ],
      },
      {
        id: "epreuve-silence",
        title: "一场沉默的考验",
        paragraphs: [
          `我们都很害怕，这很正常。但我们绝不退缩。整座村庄为我们歌唱，鼓声提醒我们：我们的肩上担负着祖先的历史。`,
          `这是一场沉默的考验。明天，我们将不再是在尘土里奔跑的小孩。我们将是男子汉。相信我，没有任何一次听写、任何一只野兽，曾让我的心跳得这么快。`,
        ],
      },
      {
        id: "niveau-superieur",
        title: "更高的关卡",
        paragraphs: [
          `我们做到了。我们走出那里时，已经不一样了。旧腰布和小孩子的游戏都过去了，看看这气派吧！最不可思议的，不是我们熬过的疼痛，而是别人看我们的全新目光。`,
          `在父亲眼里，我不再是“小拉耶”了。我是他血脉中的一个男子汉。就好像我们刚刚解锁了人生更高的关卡。`,
        ],
      },
      {
        id: "prochain-defi",
        title: "下一个挑战",
        paragraphs: [
          `不过要注意：成为男子汉也意味着，正经的事才刚刚开始。下一个挑战已经在等着我了……`,
        ],
      },
      {
        id: "conakry",
        title: "前往科纳克里",
        paragraphs: [
          `哇……欢迎来到科纳克里！忘掉草原的宁静吧，这里是一座巨大的蚂蚁窝。还有那水……你们见过这么多的水吗？我熟悉家乡的小河，可这里是大海——不，是大洋！它永不停息。`,
          `我觉得自己像一只迷失在茫茫之中的小蚂蚁。在库鲁萨，我认得每一颗石子。可在这里，我谁也不是。这也是成为男子汉的一部分：学会在没有人等你的地方，开辟出自己的路。`,
        ],
      },
      {
        id: "internat",
        title: "寄宿学校",
        paragraphs: [
          `寄宿学校是另一种考验。没有月光下的歌声，没有父亲的叮嘱。只有别人熟睡的寂静，和我的笔尖在纸上的沙沙声。`,
          `有些夜晚，对家人的思念扼住我的喉咙，比丛林里任何恐惧都更紧。但我记得自己为什么在这里。我加倍努力，只为不让他们失望。我的新铁匠铺，就是这张书桌。`,
        ],
      },
      {
        id: "diplome",
        title: "文凭到手",
        paragraphs: [
          `搞定！文凭到手。那些在灯下复习的夜晚终于有了回报。老师们说我有潜力，说我可以走得更远。`,
          `可在那个年代，“更远”意味着跨越大洋。法国。一个疯狂的梦想开始在我脑海里盘旋。我的命运，真的在那条蓝色地平线的另一边吗？`,
          `我当然自豪，可心里也七上八下：我考试越成功，就离库鲁萨越远。这大概就是自由的代价吧？`,
        ],
      },
      {
        id: "annoncer-depart",
        title: "宣布离别",
        paragraphs: [
          `告诉母亲我要去法国……那就像从她身上撕下了一部分。她所有的力气仿佛一下子都离她而去。`,
          `尽管如今我是个“男子汉”了，可在她怀里，我又变回了那个害怕黑蛇的小男孩。父亲则一直沉默。他知道我的命运已不在这里，但他的目光在说：“永远不要忘记你从哪里来。”`,
        ],
      },
      {
        id: "jamais-seul",
        title: "出发从不是孤身一人",
        paragraphs: [
          `全村人都聚到了一起。这就是库鲁萨的力量：出发从不是孤身一人。长辈们一个接一个走上前来，把出行的秘诀和祝福送给我。`,
          `在笑声和一盘盘小米饭之间，我意识到自己把整座村庄都装进了行李箱。我此去是为了学习他们的知识，可真正需要我在那寒冷之地守护的，是我自己的知识。`,
        ],
      },
      {
        id: "aventure-commence",
        title: "冒险开始",
        paragraphs: [
          `就这样。我用整个童年去梦想这个“别处”，如今真的到了，却觉得自己把心留在了桑卡兰。`,
          `法国。一个我读过它书籍的国家，却不知道它的声音、它的气味、它的寒冷。到了那一边，我还会是同一个拉耶吗？`,
          `无论如何，我已别无选择，只能向前。冒险，现在才真正开始。`,
        ],
      },
      {
        id: "lettre-jeunesse",
        title: "致今日少年的一封信——卡马拉·拉耶是谁？",
        paragraphs: [
          `你好啊，年轻的读者！我们和拉耶一起走到了这趟旅程的尽头，从库鲁萨的红土，一直到法国雾气弥漫的码头。如果要把这部改编作品献给谁，那当然是献给他：卡马拉·拉耶，那个把自己的回忆化作全世界珍宝的人。`,
          `拉耶于1928年生于上几内亚，曾是那个在铁匠父亲作坊里玩耍的小男孩，痴迷于那条小蛇——他祖先的向导。他的一生是连接两个世界的桥梁：一个是非洲传统的世界，有月光下的守夜聚会和像“孔登·迪亚拉”那样的成年礼；另一个是现代的世界，通过法语学校、科纳克里的技术中学，以及后来在法国的工程学学习。`,
          `正是在那里，远离故乡几内亚的温暖，他感到了写作的需要。在巴黎的寒冷与孤独中，他提起笔，只为不忘记雨后泥土的气息。1953年，他出版了《黑孩子》，成为非洲文学中最重要的声音之一。`,
        ],
      },
      {
        id: "heros-identite",
        title: "非洲身份认同的英雄",
        paragraphs: [
          `为什么拉耶如此重要？因为他让我们看到，非洲的身份认同并不是陈旧或过时的东西。它是一股鲜活的力量。`,
          `根的自豪：他写下自己的故事，是为了把他的“蛇”带在身边，哪怕远隔千里。对世界的开放：他教导我们，你可以在最优秀的学校求学，却永不背叛自己的来处。对自然和长辈的尊重：透过他的文字，他让口头文化、守夜的故事、铁匠的智慧重新获得尊严。`,
        ],
      },
      {
        id: "ton-tour",
        title: "轮到你闪耀了",
        paragraphs: [
          `拉耶证明了：一个从上几内亚小村庄走出来的孩子，能够打动全世界千百万人的心。他留下了自己的印记。如今，这部改编作品把接力棒交到了你手中。`,
          `像他一样，不要害怕长大，不要害怕奔向新的天地。你的故事就是你的珍宝。无论你是在学校里、面对一道数学题，还是在了解自己家族的秘密，请记住：在每个孩子的心里，都住着一颗随时准备闪耀的星星。`,
          `那么，准备好开辟属于你自己的道路了吗？库鲁萨的拉耶在守护着你，只要你自豪地承载着根脉的传承，他的故事就会一直延续下去。`,
        ],
      },
    ],
  },
};

export default LAYE_ML;
