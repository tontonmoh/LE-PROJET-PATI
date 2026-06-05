// dmba-ml.ts
// « Sacrée D'mba — Amadou et Fifi au paradis »
// Source de référence : PDF officiel de l'éditeur (nimba.pdf).
// Lecteur multilingue Pati — même principe que laye-ml.ts / chateau-ml.ts :
//   • Latin (fr / en) : police Andika
//   • Arabe (ar)      : police Noto Naskh Arabic, dir = "rtl"
//   • Chinois (zh)    : police Noto Sans SC
// Les sections sont ALIGNÉES : même `id`, même ordre, même nombre dans les 4 langues.

export type DmbaLang = "fr" | "en" | "ar" | "zh";

export interface DmbaSection {
  id: string;          // identifiant stable, identique d'une langue à l'autre
  title: string;
  paragraphs: string[];
}

export interface DmbaBook {
  lang: DmbaLang;
  dir: "ltr" | "rtl";
  label: string;       // nom de la langue dans sa propre langue
  bookTitle: string;
  sections: DmbaSection[];
}

export const DMBA_ML: Record<DmbaLang, DmbaBook> = {
  // ──────────────────────────────────────────────────────────────────────────
  // FRANÇAIS (texte de référence, transcrit du PDF)
  // ──────────────────────────────────────────────────────────────────────────
  fr: {
    lang: "fr",
    dir: "ltr",
    label: "Français",
    bookTitle: "Sacrée D'mba — Amadou et Fifi au paradis",
    sections: [
      {
        id: "collection-pati",
        title: "La collection Pati",
        paragraphs: [
          `Il était une fois, dans un pays baigné de soleil et d'eau, une collection de livres merveilleux appelée Pati.`,
          `Pati, c'est le doux nom que l'on donne aux grands-mères, gardiennes de la mémoire et des secrets d'antan. Ces livres enchantés renferment les récits fabuleux des héros et des traditions qui ont façonné l'histoire de la Guinée.`,
          `Ouvre grand tes yeux, car tu vas découvrir l'histoire de la Sacrée D'mba, ce masque ancestral du peuple Baga, et partir à l'aventure avec Amadou et Fifi dans le berceau de leur peuple, à Kamsar.`,
          `Tu t'émerveilleras devant les trésors de notre patrimoine, et tu comprendras comment le D'mba, symbole de fertilité et de prospérité, est devenu le nouveau « Branding Guinée ». La collection Pati est un voyage à travers le temps, pour que les enfants d'aujourd'hui et de demain puissent s'approprier leur héritage et en être fiers.`,
          `Ce livre nous raconte l'histoire de deux jeunes citadins qui, guidés par la sagesse de leur grand-mère, vont découvrir la beauté de leur culture.`,
        ],
      },
      {
        id: "dedicace",
        title: "Dédicace",
        paragraphs: [
          `« Pour que nos enfants grandissent en étant certains que la Guinée est un paradis qui a tout à leur donner. »`,
          `— Djiba Diakité, Ministre Directeur de Cabinet, Présidence de la République de Guinée`,
        ],
      },
      {
        id: "fifi",
        title: "Salut les followers, ici Fifi !",
        paragraphs: [
          `Salut les followers ! Ici Fifi, votre future influenceuse préférée ! 15 ans, et déjà une pro des réseaux. Mode, beauté, lifestyle : je partage tout avec ma communauté.`,
          `Mon but ? Devenir la reine des réseaux et inspirer des millions de personnes !`,
        ],
      },
      {
        id: "amadou",
        title: "Moi, c'est Amadou",
        paragraphs: [
          `Moi, c'est Amadou. 13 ans, et un seul rêve : devenir le prochain grand footballeur français, comme Paul Pogba !`,
          `Je m'entraîne tous les jours — dribbles, tirs, rien ne m'arrête. Un jour, je porterai le maillot bleu, c'est sûr !`,
        ],
      },
      {
        id: "la-guinee",
        title: "La Guinée ?",
        paragraphs: [
          `La Guinée ? C'est l'origine de nos parents, mais on n'y connaissait pas grand-chose.`,
          `Juste que c'est le pays où Papy et Mamie habitent...`,
        ],
      },
      {
        id: "musee-nimba",
        title: "Au musée : un masque immense !",
        paragraphs: [
          `Un jour, notre classe a visité un musée d'art africain. Et là, BAM ! Un masque immense et magnifique : le Nimba, de Guinée ! La guide a dit que c'était l'un des masques les plus chers et les plus connus d'Afrique.`,
          `Il est symbole de fertilité et de protection. Avec Fifi, on était super fiers que ça vienne de notre pays !`,
        ],
      },
      {
        id: "appel-mamie",
        title: "L'appel de Mamie",
        paragraphs: [
          `Mamie nous a appelés. Et comme d'habitude, elle nous invitait au pays ; on hésitait toujours.`,
          `Mais cette fois, on était curieux d'en savoir plus, suite à la découverte de ce fameux masque.`,
        ],
      },
      {
        id: "voyage",
        title: "Le grand voyage",
        paragraphs: [
          `Le voyage était long, mais on était trop excités ! On allait enfin découvrir la Guinée !`,
        ],
      },
      {
        id: "aeroport",
        title: "« Wo nou senen — Bienvenue chez vous »",
        paragraphs: [
          `À l'aéroport, surprise ! Une grande image du D'mba !`,
          `Mamie nous a accueillis avec un grand sourire : « Wo nou senen — Bienvenue chez vous ! »`,
        ],
      },
      {
        id: "route-kamsar",
        title: "La route pour Kamsar",
        paragraphs: [
          `Tout le monde était déjà en vacances, et nous avons directement pris la route pour Kamsar. C'est Mamie qui conduisait. Et sur la route, nous n'avons pas arrêté de poser des questions.`,
          `Le paysage est magnifique ! Dubréka, Koba, Boffa... la Guinée est vraiment un paradis. La route n'est pas très grande, mais la vue compense, et le voyage est un vrai kiff. J'ai pris des photos tout le long, et j'espère que j'aurai l'occasion de vous les partager dans une de mes chroniques.`,
        ],
      },
      {
        id: "eau-partout",
        title: "De l'eau partout",
        paragraphs: [
          `Il y a de l'eau partout en Guinée, quelle beauté ! Les champs verts, les rivières et les fleuves, et surtout le sourire des populations. Les gens semblent chaleureux.`,
          `J'aimerais bien m'y baigner. Ils ont l'air tellement libres, ces enfants !`,
        ],
      },
      {
        id: "malle-masque",
        title: "Le masque dans la malle",
        paragraphs: [
          `Une fois arrivés, nous avons rencontré beaucoup de cousins et de cousines. Comme c'étaient les vacances, ils étaient venus eux aussi passer du temps avec Papy et Mamie à Kamsar.`,
          `En fouillant dans une malle que Papy a sortie, nous avons trouvé un magnifique masque D'mba caché parmi des souvenirs familiaux. Pour la première fois, nous avions le droit de le toucher.`,
        ],
      },
      {
        id: "mamie-explique",
        title: "Mamie explique le D'mba",
        paragraphs: [
          `Mamie explique : « Au départ, ces masques ne sont pas que des objets d'art. Ils possèdent une énergie ancestrale, un esprit vital qui nous relie à nos ancêtres. »`,
          `« Le D'mba est un symbole baga de fertilité et de prospérité. Lors des rites de passage, il est présent pour bénir les nouvelles générations. Le D'mba sort également lors de cérémonies importantes — mariages, moissons, récoltes — unissant les membres de la communauté et favorisant la réussite des actions menées. »`,
          `« Ces objets culturels sont réalisés par des artisans talentueux, héritiers de techniques anciennes. À travers leur art, ils racontent notre histoire et nos valeurs. »`,
        ],
      },
      {
        id: "promesse",
        title: "Une nouvelle responsabilité",
        paragraphs: [
          `Profondément touchés par les histoires de Mamie, nous avons ressenti une nouvelle responsabilité. « Nous devons partager la beauté de notre culture avec le monde ! » Nous avons promis à Mamie de revenir bientôt. « Le D'mba est notre symbole, et nous sommes fiers de notre héritage. Nous le partagerons avec tous ! »`,
          `« Moi, je vais m'entraîner encore plus fort afin de jouer pour l'équipe nationale de football. Je veux montrer au monde ce que signifie être guinéen sur le terrain. » Et moi, ce sera historienne, prête à explorer et à partager les merveilles de mon pays, la Guinée.`,
        ],
      },
      {
        id: "branding-national",
        title: "Qu'est-ce qu'un « branding » national ?",
        paragraphs: [
          `Imagine que tu doives dessiner la France pour un ami qui ne la connaît pas. Que dessinerais-tu ? Sûrement la Tour Eiffel, n'est-ce pas ? Quand on voit sa silhouette, on pense tout de suite à Paris. Elle est devenue un « branding » de la France : une image forte, facilement reconnaissable, qui représente tout un pays et ce qu'il a de beau à offrir.`,
          `Tout comme la Tour Eiffel pour la France, d'autres symboles représentent leur pays : la Statue de la Liberté pour les États-Unis, la Grande Muraille pour la Chine, les Pyramides de Gizeh pour l'Égypte, le bus à impériale et la cabine téléphonique rouge pour le Royaume-Uni, le moulin à vent pour les Pays-Bas, le kangourou pour l'Australie.`,
        ],
      },
      {
        id: "nimba-branding",
        title: "Le Nimba, « Branding Guinée »",
        paragraphs: [
          `Eh bien, en 2022, la Guinée a décidé de faire la même chose. Elle a choisi un symbole très spécial pour représenter le pays tout entier : le masque Nimba, ou le D'mba !`,
          `Le masque Nimba n'est pas seulement un trésor du peuple Baga ; c'est aussi un symbole pour tous les Guinéens. C'est pourquoi le gouvernement l'a choisi pour être le visage de la Guinée dans le monde. On dit alors que le Nimba est le « Branding Guinée ».`,
        ],
      },
      {
        id: "valeurs-nimba",
        title: "Les valeurs du Nimba",
        paragraphs: [
          `Les Nimba sont de grands masques d'épaules qui représentent une femme forte et fertile. Ses seins tombants montrent qu'elle a nourri de nombreux enfants, et sa coiffure en tresse rappelle les champs de riz bien cultivés.`,
          `Le Nimba est donc un symbole de : la fertilité et l'abondance — elle favorise de bonnes récoltes et de la joie ; la protection — elle veille sur le village et les familles ; la force et le courage — la femme Nimba est le modèle d'une mère capable de tout faire pour ses enfants et sa communauté.`,
          `Ce sont ces belles valeurs que la Guinée veut montrer au monde entier !`,
        ],
      },
      {
        id: "pourquoi-nimba-1",
        title: "Pourquoi le Nimba ? (1)",
        paragraphs: [
          `1. La Basse Guinée et l'histoire de D'mba : le masque Nimba est né chez les Baga, en Basse Guinée. La légende raconte qu'un sculpteur voulut aider sa sœur, qui ne pouvait pas avoir d'enfant. Alors qu'ils se trouvaient près d'une rivière, un génie lui apparut et lui demanda de sculpter la déesse de la fertilité. C'est de cette histoire qu'est né le masque, symbole de la femme qui donne la vie.`,
          `2. La Moyenne Guinée et la crête royale : le masque est coiffé d'une majestueuse crête royale. Cette coiffure ressemble beaucoup au Djoubadee, que portent les reines et les princesses du peuple Peul, qui vit en Moyenne Guinée. Ainsi, même les habitants du Fouta Djallon peuvent se reconnaître et se sentir représentés par ce masque.`,
        ],
      },
      {
        id: "pourquoi-nimba-2",
        title: "Pourquoi le Nimba ? (2)",
        paragraphs: [
          `3. La Haute Guinée et l'art de la sculpture : aujourd'hui, l'art de sculpter ces masques est transmis par des artisans talentueux, souvent issus des peuples mandingues de la Haute Guinée. Des familles de sculpteurs, comme les Sidimé, sont devenues très douées dans l'art de transformer le bois en masques magnifiques.`,
          `4. La Guinée Forestière et le Mont Nimba : enfin, le nom « Nimba » ne renvoie pas qu'au masque ! C'est aussi le nom du point culminant de la Guinée, une montagne de plus de 1 758 mètres située en Guinée Forestière. Cet autre « Nimba » est un symbole de grandeur et de force pour tout le pays.`,
        ],
      },
      {
        id: "armoiries",
        title: "Les armoiries",
        paragraphs: [
          `Chaque pays a ses armoiries, comme une sorte de carte d'identité visuelle officielle.`,
          `Pour la Guinée, par exemple, on y voit un bouclier, une colombe avec une branche d'olivier et la devise « Travail, Justice, Solidarité ». Les armoiries sont un symbole administratif et solennel : on ne peut les utiliser que si l'on est mandaté par l'État.`,
        ],
      },
      {
        id: "difference-branding",
        title: "Armoiries ou branding : quelle différence ?",
        paragraphs: [
          `Le « branding » est un peu différent. C'est une image plus moderne, choisie pour communiquer avec les gens du monde entier et les inviter à découvrir le pays. C'est un peu comme le logo d'une marque qui veut raconter une histoire et donner envie de la découvrir.`,
          `Le branding de la Guinée raconte l'histoire d'un pays riche de sa culture et de son histoire.`,
        ],
      },
      {
        id: "tresor-musees",
        title: "Une star dans les grands musées",
        paragraphs: [
          `Le masque Nimba n'est pas célèbre qu'en Guinée : c'est une véritable star dans le monde entier ! Comment un masque en bois, sculpté il y a très longtemps en Guinée, est-il devenu aussi célèbre ? C'est simple : sa beauté et son énergie sont si grandes que les grands musées et les artistes ont voulu l'avoir près d'eux.`,
          `On peut l'admirer dans des endroits incroyables : le Louvre à Paris, le musée le plus connu au monde ; le Metropolitan Museum of Art à New York, qui possède des trésors venus des quatre coins de la planète ; le British Museum à Londres ; et bien sûr le Musée des Civilisations Noires de Dakar, au Sénégal, l'un des plus grands musées consacrés à la culture et aux arts africains. Le Nimba est souvent la pièce maîtresse des expositions d'art africain à travers le monde.`,
        ],
      },
      {
        id: "picasso-tresor",
        title: "Picasso et un trésor convoité",
        paragraphs: [
          `Un artiste très célèbre, Pablo Picasso, a découvert l'art africain au début du XXᵉ siècle. Il a été tellement fasciné par les formes des masques et leur force qu'il a complètement changé sa manière de peindre. Les formes géométriques du Nimba, son style unique, l'ont beaucoup inspiré pour créer un nouveau style de peinture : le Cubisme ! Grâce à Picasso, le masque Nimba a influencé l'art dans le monde entier.`,
          `Aujourd'hui encore, de grandes stars de la musique et du cinéma sont passionnées par l'art africain. On trouve des masques Nimba dans des collections privées de célébrités, comme la chanteuse Alicia Keys. Cela montre que l'art de Guinée est intemporel et qu'il continue de fasciner les gens de toutes les époques. Les collectionneurs du monde entier sont prêts à tout pour en posséder un : lors de grandes enchères, certains de ces masques se vendent à des prix impressionnants.`,
        ],
      },
      {
        id: "quiz",
        title: "Es-tu devenu un expert du Nimba ?",
        paragraphs: [
          `Question 1 : Dans quelle ville habitent les deux enfants qui découvrent le masque Nimba et qui partent en Guinée ? — Réponse : Paris.`,
          `Question 2 : De quel peuple de Guinée le masque Nimba est-il originaire ? — Réponse : le peuple Baga.`,
          `Question 3 : Quelle est la principale différence entre les armoiries de la Guinée et le « Branding Guinée » ? — Réponse : les armoiries sont le symbole officiel et solennel du pays, tandis que le branding est une image moderne, comme le Nimba, choisie pour représenter et promouvoir le pays.`,
          `Question 4 : Quel célèbre artiste a été inspiré par le masque Nimba pour créer un nouveau style de peinture ? — Réponse : Pablo Picasso.`,
          `Question 5 : Quel art exerçait la personne qui a offert le Nimba au monde ? — Réponse : la sculpture.`,
          `Question 6 : Outre le masque, où trouve-t-on le nom « Nimba » en Guinée ? — Réponse : c'est le nom de la plus haute montagne de Guinée, le Mont Nimba.`,
          `Question 7 : Quelles sont les trois valeurs que le masque Nimba symbolise ? — Réponse : la fertilité, la protection et la prospérité.`,
          `Question 8 : Selon toi, quel autre symbole pourrait servir de branding pour la Guinée, et pourquoi ? — Réponse libre.`,
        ],
      },
      {
        id: "petit-dico",
        title: "Le petit dico",
        paragraphs: [
          `Armoiries : un blason ou un symbole officiel utilisé par un pays pour représenter son identité administrative.`,
          `Art africain : l'ensemble des œuvres artistiques créées sur le continent africain ; cet art a eu une grande influence sur l'art mondial, notamment au XXᵉ siècle.`,
          `Baga : un peuple de Guinée, vivant en Basse Guinée, à l'origine de la création du masque Nimba.`,
          `Branding : le mot anglais qui désigne l'image forte et reconnaissable qu'un pays ou une entreprise choisit pour se présenter au monde ; il vient de brand, qui signifie « marque ».`,
          `Collectionneur : une personne passionnée qui achète et rassemble des œuvres d'art pour sa collection personnelle.`,
          `Cubisme : un style de peinture où l'on représente les objets avec des formes géométriques ; Pablo Picasso s'est inspiré des masques africains pour le créer.`,
          `D'mba (ou Nimba) : un grand masque d'épaule du peuple Baga, symbole de la fertilité, de la force et de la protection.`,
          `Fertilité : la capacité de donner la vie, de faire pousser des plantes ou d'avoir de bonnes récoltes.`,
          `Guinée : un pays d'Afrique de l'Ouest, riche en culture, en traditions et en paysages magnifiques.`,
          `Masque d'épaule : un masque très grand et lourd qui ne se porte pas sur le visage mais sur les épaules, souvent accompagné d'un costume ; le Nimba est un masque d'épaule.`,
          `Musée : un lieu où sont exposées des œuvres d'art, des objets de science ou des trésors historiques, pour que tout le monde puisse les admirer et apprendre.`,
          `Sidimé : un nom de famille de sculpteurs mandingues qui excellent dans la création de masques et de sculptures en bois.`,
          `Slogan : une phrase courte et percutante qui exprime l'idée principale d'une marque, d'une campagne ou d'un pays.`,
          `Symbole : un objet, une image ou un mot qui représente une idée, un sentiment ou une valeur.`,
          `Trésor : un objet rare, précieux et de grande valeur.`,
        ],
      },
      {
        id: "en-mission",
        title: "En mission pour la Guinée",
        paragraphs: [
          `Après leur incroyable voyage et leurs découvertes, Amadou et Fifi ont compris une chose : connaître son histoire et sa culture, c'est aussi savoir comment construire l'avenir de son pays ! Leurs passions et leurs talents pourraient être utiles pour le faire grandir.`,
          `Fifi, l'historienne : notre héroïne ne veut pas seulement devenir influenceuse, mais aussi historienne et journaliste. En étudiant l'histoire, elle pourra raconter des légendes comme celle du D'mba ; en devenant journaliste, elle pourra filmer et partager les traditions, les événements culturels et les histoires incroyables de la Guinée avec le monde entier. Son métier : aider la Guinée à avoir une belle image, partout.`,
          `Amadou, le footballeur engagé : Amadou rêve toujours d'être footballeur, mais il a désormais une nouvelle mission. S'il devient professionnel, il pourra représenter fièrement le Sily sur le terrain, comme Serhou Guirassy. Il sera un ambassadeur de son pays et pourra en inspirer beaucoup d'autres.`,
        ],
      },
      {
        id: "autres-metiers",
        title: "Plein de métiers pour faire rayonner la Guinée",
        paragraphs: [
          `Il y a plein d'autres métiers qui permettent de faire rayonner la culture de la Guinée : archéologue, pour fouiller le sol et découvrir les trésors du passé ; guide touristique, pour accompagner les visiteurs et faire respecter les sites ; conservateur de musée, pour prendre soin d'œuvres comme le masque Nimba ; artisan d'art, pour continuer à sculpter, tisser ou fabriquer des instruments de musique traditionnels ; historien de l'art, pour étudier les masques et les sculptures ; documentaliste, pour classer et archiver les documents, photos et vidéos du patrimoine guinéen.`,
          `Créateur de contenus : comme Fifi, avec ton téléphone, tu peux faire des vidéos ou des podcasts pour faire découvrir des recettes traditionnelles ou les paysages magnifiques de la Guinée — un guide touristique, mais pour le monde entier ! Développeur de jeux vidéo : tu pourrais créer un jeu où Amadou et Fifi partent à l'aventure pour découvrir les régions de la Guinée, et rendre la culture amusante et interactive pour des millions d'enfants.`,
          `Designer 3D : avec des outils numériques, tu peux modéliser en 3D des objets traditionnels, pour des applications éducatives ou même pour imprimer de petites répliques. Spécialiste en marketing digital : tu pourrais aider les artisans guinéens à vendre leurs œuvres dans le monde entier grâce à Internet, en créant de belles photos, en gérant les réseaux sociaux et en faisant connaître la richesse de l'artisanat guinéen à l'échelle internationale.`,
        ],
      },
      {
        id: "ton-tour",
        title: "À ton tour !",
        paragraphs: [
          `Quelles que soient tes passions, tu peux toi aussi aider à faire rayonner la culture et la force de ton pays !`,
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
    bookTitle: "Sacred D'mba — Amadou and Fifi in Paradise",
    sections: [
      {
        id: "collection-pati",
        title: "The Pati collection",
        paragraphs: [
          `Once upon a time, in a land bathed in sunshine and water, there was a collection of wonderful books called Pati.`,
          `Pati is the tender name given to grandmothers, the keepers of memory and of the secrets of old. These enchanted books hold the marvellous tales of the heroes and traditions that shaped the history of Guinea.`,
          `Open your eyes wide, for you are about to discover the story of the Sacred D'mba, the ancestral mask of the Baga people, and to set off on an adventure with Amadou and Fifi to the cradle of their people, in Kamsar.`,
          `You will marvel at the treasures of our heritage, and you will understand how the D'mba — a symbol of fertility and prosperity — became the new "Brand Guinea." The Pati collection is a journey through time, so that the children of today and tomorrow can take ownership of their heritage and be proud of it.`,
          `This book tells the story of two young city children who, guided by the wisdom of their grandmother, come to discover the beauty of their culture.`,
        ],
      },
      {
        id: "dedicace",
        title: "Dedication",
        paragraphs: [
          `"So that our children may grow up certain that Guinea is a paradise that has everything to give them."`,
          `— Djiba Diakité, Minister and Director of Cabinet, Presidency of the Republic of Guinea`,
        ],
      },
      {
        id: "fifi",
        title: "Hi followers, it's Fifi!",
        paragraphs: [
          `Hi followers! It's Fifi, your future favourite influencer! Fifteen years old, and already a pro on social media. Fashion, beauty, lifestyle — I share it all with my community.`,
          `My goal? To become the queen of social media and to inspire millions of people!`,
        ],
      },
      {
        id: "amadou",
        title: "I'm Amadou",
        paragraphs: [
          `I'm Amadou. Thirteen years old, with a single dream: to become the next great French footballer, like Paul Pogba!`,
          `I train every day — dribbles, shots, nothing stops me. One day I'll wear the blue jersey, for sure!`,
        ],
      },
      {
        id: "la-guinee",
        title: "Guinea?",
        paragraphs: [
          `Guinea? It's where our parents come from, but we didn't really know much about it.`,
          `Just that it's the country where Grandpa and Grandma live...`,
        ],
      },
      {
        id: "musee-nimba",
        title: "At the museum: a huge mask!",
        paragraphs: [
          `One day, our class visited a museum of African art. And then — BAM! A huge, magnificent mask: the Nimba, from Guinea! The guide said it was one of the most prized and best-known masks in Africa.`,
          `It is a symbol of fertility and protection. Fifi and I were so proud that it came from our country!`,
        ],
      },
      {
        id: "appel-mamie",
        title: "Grandma's call",
        paragraphs: [
          `Grandma called us. And as usual, she invited us to come to the country; we always hesitated.`,
          `But this time, after discovering that famous mask, we were curious to find out more.`,
        ],
      },
      {
        id: "voyage",
        title: "The big journey",
        paragraphs: [
          `The journey was long, but we were so excited! We were finally going to discover Guinea!`,
        ],
      },
      {
        id: "aeroport",
        title: `"Wo nou senen — Welcome home"`,
        paragraphs: [
          `At the airport — surprise! A huge picture of the D'mba!`,
          `Grandma welcomed us with a big smile: "Wo nou senen — Welcome home!"`,
        ],
      },
      {
        id: "route-kamsar",
        title: "The road to Kamsar",
        paragraphs: [
          `Everyone was already on holiday, and we set off straight away for Kamsar. Grandma was driving. And on the road, we never stopped asking questions.`,
          `The landscape is magnificent! Dubréka, Koba, Boffa... Guinea really is a paradise. The road isn't very wide, but the view makes up for it, and the trip is a real joy. I took photos all along the way, and I hope I'll get to share them with you in one of my vlogs.`,
        ],
      },
      {
        id: "eau-partout",
        title: "Water everywhere",
        paragraphs: [
          `There's water everywhere in Guinea — what beauty! The green fields, the rivers and the great waterways, and above all the smiles of the people. They seem so warm.`,
          `I'd love to go for a swim. These children seem so free!`,
        ],
      },
      {
        id: "malle-masque",
        title: "The mask in the trunk",
        paragraphs: [
          `Once we arrived, we met lots of cousins. Since it was the holidays, they too had come to spend time with Grandpa and Grandma in Kamsar.`,
          `Rummaging through a trunk that Grandpa had brought out, we found a magnificent D'mba mask hidden among family keepsakes. For the first time, we were allowed to touch it.`,
        ],
      },
      {
        id: "mamie-explique",
        title: "Grandma explains the D'mba",
        paragraphs: [
          `Grandma explains: "To begin with, these masks are not just works of art. They hold an ancestral energy, a living spirit that connects us to our ancestors."`,
          `"The D'mba is a Baga symbol of fertility and prosperity. During rites of passage, it is present to bless the new generations. The D'mba also appears at important ceremonies — weddings, harvests, gatherings — uniting the members of the community and helping their efforts succeed."`,
          `"These cultural objects are made by talented craftspeople, heirs to ancient techniques. Through their art, they tell our history and our values."`,
        ],
      },
      {
        id: "promesse",
        title: "A new responsibility",
        paragraphs: [
          `Deeply moved by Grandma's stories, we felt a new responsibility. "We must share the beauty of our culture with the world!" We promised Grandma we'd come back soon. "The D'mba is our symbol, and we are proud of our heritage. We will share it with everyone!"`,
          `"As for me, I'm going to train even harder so I can play for the national football team. I want to show the world what it means to be Guinean on the pitch." And me — I'll be a historian, ready to explore and share the wonders of my country, Guinea.`,
        ],
      },
      {
        id: "branding-national",
        title: `What is a national "brand"?`,
        paragraphs: [
          `Imagine you had to draw France for a friend who doesn't know it. What would you draw? Surely the Eiffel Tower, right? When you see its outline, you think straight away of Paris. It has become a "brand" for France: a strong, easily recognisable image that stands for a whole country and the beauty it has to offer.`,
          `Just like the Eiffel Tower for France, other symbols represent their countries: the Statue of Liberty for the United States, the Great Wall for China, the Pyramids of Giza for Egypt, the double-decker bus and the red telephone box for the United Kingdom, the windmill for the Netherlands, the kangaroo for Australia.`,
        ],
      },
      {
        id: "nimba-branding",
        title: `The Nimba, "Brand Guinea"`,
        paragraphs: [
          `Well, in 2022, Guinea decided to do the same thing. It chose a very special symbol to represent the whole country: the Nimba mask, or the D'mba!`,
          `The Nimba mask is not only a treasure of the Baga people; it is also a symbol for all Guineans. That is why the government chose it to be the face of Guinea in the world. So we say that the Nimba is "Brand Guinea."`,
        ],
      },
      {
        id: "valeurs-nimba",
        title: "What the Nimba stands for",
        paragraphs: [
          `The Nimba are large shoulder masks that represent a strong, fertile woman. Her low-hanging breasts show that she has nourished many children, and her braided headdress recalls well-tended rice fields.`,
          `So the Nimba is a symbol of: fertility and abundance — she brings good harvests and joy; protection — she watches over the village and the families; strength and courage — the Nimba woman is the model of a mother able to do anything for her children and her community.`,
          `These are the beautiful values that Guinea wants to show the whole world!`,
        ],
      },
      {
        id: "pourquoi-nimba-1",
        title: "Why the Nimba? (1)",
        paragraphs: [
          `1. Lower Guinea and the story of D'mba: the Nimba mask was born among the Baga, in Lower Guinea. Legend tells of a sculptor who wanted to help his sister, who could not have children. As they stood near a river, a spirit appeared to him and asked him to carve the goddess of fertility. It is from this story that the mask was born — a symbol of the woman who gives life.`,
          `2. Middle Guinea and the royal crest: the mask wears a majestic royal crest. This headdress closely resembles the Djoubadee worn by the queens and princesses of the Fula (Peul) people, who live in Middle Guinea. In this way, even the people of the Fouta Djallon can recognise themselves and feel represented by this mask.`,
        ],
      },
      {
        id: "pourquoi-nimba-2",
        title: "Why the Nimba? (2)",
        paragraphs: [
          `3. Upper Guinea and the art of carving: today, the art of carving these masks is passed down by talented craftspeople, often from the Mandinka peoples of Upper Guinea. Families of sculptors, such as the Sidimé, have become highly skilled at turning wood into magnificent masks.`,
          `4. Forest Guinea and Mount Nimba: finally, the name "Nimba" does not refer only to the mask! It is also the name of Guinea's highest point, a mountain over 1,758 metres high, in Forest Guinea. This other "Nimba" is a symbol of grandeur and strength for the whole country.`,
        ],
      },
      {
        id: "armoiries",
        title: "The coat of arms",
        paragraphs: [
          `Every country has its coat of arms, a kind of official visual identity card.`,
          `For Guinea, for example, it shows a shield, a dove with an olive branch, and the motto "Work, Justice, Solidarity." The coat of arms is an administrative and solemn symbol: it can only be used by those authorised by the State.`,
        ],
      },
      {
        id: "difference-branding",
        title: "Coat of arms or brand: what's the difference?",
        paragraphs: [
          `The "brand" is a little different. It is a more modern image, chosen to communicate with people all over the world and invite them to discover the country. It is a bit like the logo of a brand that wants to tell a story and make you want to explore it.`,
          `Guinea's brand tells the story of a country rich in its culture and its history.`,
        ],
      },
      {
        id: "tresor-musees",
        title: "A star in the great museums",
        paragraphs: [
          `The Nimba mask is famous not only in Guinea — it is a real star around the world! How did a wooden mask, carved long ago in Guinea, become so famous? Quite simply: its beauty and its energy are so great that the great museums and artists wanted to keep it close to them.`,
          `You can admire it in incredible places: the Louvre in Paris, the most famous museum in the world; the Metropolitan Museum of Art in New York, which holds treasures from the four corners of the planet; the British Museum in London; and of course the Museum of Black Civilisations in Dakar, Senegal, one of the largest museums devoted to African culture and arts. The Nimba is often the centrepiece of African art exhibitions across the world.`,
        ],
      },
      {
        id: "picasso-tresor",
        title: "Picasso and a coveted treasure",
        paragraphs: [
          `A very famous artist, Pablo Picasso, discovered African art at the beginning of the 20th century. He was so fascinated by the shapes of the masks and their power that he completely changed the way he painted. The geometric forms of the Nimba and its unique style greatly inspired him to create a new style of painting: Cubism! Thanks to Picasso, the Nimba mask influenced art around the world.`,
          `Even today, great stars of music and cinema are passionate about African art. Nimba masks can be found in the private collections of celebrities such as the singer Alicia Keys. This shows that the art of Guinea is timeless and continues to fascinate people of every era. Collectors all over the world will do anything to own one: at great auctions, some of these masks sell for staggering prices.`,
        ],
      },
      {
        id: "quiz",
        title: "Are you now a Nimba expert?",
        paragraphs: [
          `Question 1: In which city do the two children who discover the Nimba mask and travel to Guinea live? — Answer: Paris.`,
          `Question 2: Which people of Guinea does the Nimba mask come from? — Answer: the Baga people.`,
          `Question 3: What is the main difference between Guinea's coat of arms and "Brand Guinea"? — Answer: the coat of arms is the country's official and solemn symbol, while the brand is a modern image, like the Nimba, chosen to represent and promote the country.`,
          `Question 4: Which famous artist was inspired by the Nimba mask to create a new style of painting? — Answer: Pablo Picasso.`,
          `Question 5: What art did the person who gave the Nimba to the world practise? — Answer: sculpture.`,
          `Question 6: Besides the mask, where else is the name "Nimba" found in Guinea? — Answer: it is the name of Guinea's highest mountain, Mount Nimba.`,
          `Question 7: What are the three values the Nimba mask symbolises? — Answer: fertility, protection and prosperity.`,
          `Question 8: In your opinion, what other symbol could serve as a brand for Guinea, and why? — Open answer.`,
        ],
      },
      {
        id: "petit-dico",
        title: "The little dictionary",
        paragraphs: [
          `Coat of arms: an emblem or official symbol used by a country to represent its administrative identity.`,
          `African art: all the artistic works created on the African continent; this art had a great influence on world art, especially in the 20th century.`,
          `Baga: a people of Guinea, living in Lower Guinea, who created the Nimba mask.`,
          `Brand: the strong, recognisable image that a country or a company chooses to present itself to the world; from the word "brand," meaning a maker's mark.`,
          `Collector: a passionate person who buys and gathers works of art for their personal collection.`,
          `Cubism: a style of painting in which objects are shown with geometric shapes; Pablo Picasso drew on African masks to create it.`,
          `D'mba (or Nimba): a large shoulder mask of the Baga people, a symbol of fertility, strength and protection.`,
          `Fertility: the ability to give life, to make plants grow, or to have good harvests.`,
          `Guinea: a country in West Africa, rich in culture, traditions and magnificent landscapes.`,
          `Shoulder mask: a very large, heavy mask worn not on the face but on the shoulders, often with a costume; the Nimba is a shoulder mask.`,
          `Museum: a place where works of art, scientific objects or historical treasures are displayed, so that everyone can admire them and learn.`,
          `Sidimé: a family name of Mandinka sculptors who excel at creating wooden masks and sculptures.`,
          `Slogan: a short, striking phrase that expresses the main idea of a brand, a campaign or a country.`,
          `Symbol: an object, image or word that represents an idea, a feeling or a value.`,
          `Treasure: a rare, precious object of great value.`,
        ],
      },
      {
        id: "en-mission",
        title: "On a mission for Guinea",
        paragraphs: [
          `After their amazing journey and their discoveries, Amadou and Fifi understood one thing: knowing your history and your culture also means knowing how to build the future of your country! Their passions and their talents could help it grow.`,
          `Fifi, the historian: our heroine no longer wants only to be an influencer, but also a historian and a journalist. By studying history, she'll be able to tell legends like that of the D'mba; by becoming a journalist, she'll be able to film and share Guinea's traditions, cultural events and incredible stories with the whole world. Her job: helping Guinea shine, everywhere.`,
          `Amadou, the committed footballer: Amadou still dreams of being a footballer, but now he has a new mission. If he turns professional, he'll be able to represent the Sily (Guinea's national team) proudly on the pitch, like Serhou Guirassy. He'll be an ambassador for his country and will inspire many others.`,
        ],
      },
      {
        id: "autres-metiers",
        title: "So many jobs to make Guinea shine",
        paragraphs: [
          `There are many other jobs that help Guinean culture shine: archaeologist, to dig the soil and uncover the treasures of the past; tour guide, to accompany visitors and make sure the sites are respected; museum curator, to care for works like the Nimba mask; art craftsperson, to keep carving, weaving or making traditional musical instruments; art historian, to study masks and sculptures; archivist, to sort and store the documents, photos and videos of Guinea's heritage.`,
          `Content creator: like Fifi, with your phone you can make videos or podcasts to share traditional recipes or Guinea's magnificent landscapes — a tour guide, but for the whole world! Video game developer: you could create a game in which Amadou and Fifi go on an adventure to discover Guinea's regions, making the culture fun and interactive for millions of children.`,
          `3D designer: with digital tools, you can model traditional objects in 3D, for educational apps or even to print small replicas. Digital marketing specialist: you could help Guinean craftspeople sell their work all over the world through the internet — taking beautiful photos, managing social media, and making the richness of Guinean craftsmanship known internationally.`,
        ],
      },
      {
        id: "ton-tour",
        title: "Now it's your turn!",
        paragraphs: [
          `Whatever your passions, you too can help the culture and the strength of your country shine!`,
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
    bookTitle: "دمبا المقدّسة — أمادو وفيفي في الجنّة",
    sections: [
      {
        id: "collection-pati",
        title: "مجموعة باتي",
        paragraphs: [
          `كان يا ما كان، في بلدٍ تغمره الشمس والماء، مجموعة كتبٍ رائعة اسمها «باتي».`,
          `«باتي» هو الاسم الحنون الذي يُطلق على الجدّات، حارسات الذاكرة وأسرار الزمن الجميل. تحتوي هذه الكتب الساحرة على الحكايات العجيبة للأبطال والتقاليد التي صاغت تاريخ غينيا.`,
          `افتح عينيك جيّدًا، فأنت على وشك أن تكتشف قصّة «دمبا المقدّسة»، ذلك القناع العريق لشعب الباغا، وأن تنطلق في مغامرة مع أمادو وفيفي إلى مهد قومهما، في كامسار.`,
          `ستندهش أمام كنوز تراثنا، وستفهم كيف صار الـدمبا، رمز الخصوبة والازدهار، «هُويّة غينيا» (Branding Guinée) الجديدة. مجموعة «باتي» رحلة عبر الزمن، كي يتمكّن أطفال اليوم والغد من تملُّك إرثهم والاعتزاز به.`,
          `يحكي لنا هذا الكتاب قصّة طفلَين من المدينة، يكتشفان جمال ثقافتهما بإرشاد من حكمة جدّتهما.`,
        ],
      },
      {
        id: "dedicace",
        title: "إهداء",
        paragraphs: [
          `«كي يكبر أطفالنا وهم على يقينٍ بأنّ غينيا جنّةٌ تملك كل ما تمنحه إيّاهم.»`,
          `— جيبا دياكيتي، الوزير مدير الديوان، رئاسة جمهوريّة غينيا`,
        ],
      },
      {
        id: "fifi",
        title: "مرحبًا أيها المتابعون، أنا فيفي!",
        paragraphs: [
          `مرحبًا أيها المتابعون! أنا فيفي، صانعة المحتوى المفضّلة لديكم في المستقبل! خمسة عشر عامًا، وأنا محترفة في وسائل التواصل. الموضة، الجمال، أسلوب الحياة — أشارك كل شيء مع متابعيّ.`,
          `هدفي؟ أن أصير ملكة الشبكات وأُلهم ملايين الناس!`,
        ],
      },
      {
        id: "amadou",
        title: "أنا أمادو",
        paragraphs: [
          `أنا أمادو. ثلاثة عشر عامًا، وحلمٌ واحد: أن أصير لاعب الكرة الفرنسيّ الكبير القادم، مثل بول بوغبا!`,
          `أتدرّب كل يوم — مراوغات وتسديدات، لا شيء يوقفني. وفي يومٍ ما سأرتدي القميص الأزرق، هذا مؤكّد!`,
        ],
      },
      {
        id: "la-guinee",
        title: "غينيا؟",
        paragraphs: [
          `غينيا؟ إنها بلد والدَينا، لكننا لم نكن نعرف عنها الكثير.`,
          `فقط أنها البلد الذي يعيش فيه جدّي وجدّتي...`,
        ],
      },
      {
        id: "musee-nimba",
        title: "في المتحف: قناع ضخم!",
        paragraphs: [
          `في أحد الأيام، زار صفّنا متحفًا للفنّ الإفريقيّ. وفجأةً — بام! قناع ضخم ورائع: النيمبا، من غينيا! قالت المرشدة إنه من أغلى أقنعة إفريقيا وأشهرها.`,
          `إنه رمز للخصوبة والحماية. شعرتُ أنا وفيفي بفخرٍ عظيم لأنه من بلدنا!`,
        ],
      },
      {
        id: "appel-mamie",
        title: "اتّصال الجدّة",
        paragraphs: [
          `اتّصلت بنا جدّتي. وكعادتها، دعتنا إلى البلد؛ وكنّا دائمًا نتردّد.`,
          `لكن هذه المرّة، بعد اكتشاف ذلك القناع الشهير، صرنا فضوليّين لمعرفة المزيد.`,
        ],
      },
      {
        id: "voyage",
        title: "الرحلة الكبرى",
        paragraphs: [
          `كانت الرحلة طويلة، لكننا كنّا في غاية الحماس! أخيرًا سنكتشف غينيا!`,
        ],
      },
      {
        id: "aeroport",
        title: "«وو نو سِنِن — أهلًا بكما في بلدكما»",
        paragraphs: [
          `في المطار، مفاجأة! صورة كبيرة للـدمبا!`,
          `استقبلتنا جدّتي بابتسامة عريضة: «وو نو سِنِن — أهلًا بكما في بلدكما!»`,
        ],
      },
      {
        id: "route-kamsar",
        title: "الطريق إلى كامسار",
        paragraphs: [
          `كان الجميع في عطلة بالفعل، فاتّجهنا مباشرةً نحو كامسار. كانت جدّتي هي مَن تقود السيّارة. وعلى الطريق، لم نتوقّف عن طرح الأسئلة.`,
          `المناظر رائعة! دوبريكا، كوبا، بوفا... غينيا جنّةٌ حقًّا. الطريق ليست واسعة جدًّا، لكن المنظر يعوّض ذلك، والرحلة متعة حقيقيّة. التقطت صورًا طوال الطريق، وآمل أن تتاح لي فرصة مشاركتها معكم في إحدى تدويناتي.`,
        ],
      },
      {
        id: "eau-partout",
        title: "الماء في كل مكان",
        paragraphs: [
          `هناك ماء في كل مكان في غينيا، يا له من جمال! الحقول الخضراء، والأنهار والمجاري الكبيرة، وقبل كل شيء ابتسامة الناس. يبدو الناس ودودين للغاية.`,
          `أودّ لو أسبح هنا. كم يبدو هؤلاء الأطفال أحرارًا!`,
        ],
      },
      {
        id: "malle-masque",
        title: "القناع في الصندوق",
        paragraphs: [
          `حين وصلنا، التقينا بكثير من أبناء العمومة والخؤولة. وبما أنها العطلة، فقد أتوا هم أيضًا ليقضوا وقتًا مع جدّي وجدّتي في كامسار.`,
          `وبينما كنّا نفتّش في صندوق أخرجه جدّي، وجدنا قناع دمبا رائعًا مخبّأً بين ذكريات العائلة. وللمرّة الأولى، سُمح لنا بلمسه.`,
        ],
      },
      {
        id: "mamie-explique",
        title: "الجدّة تشرح الـدمبا",
        paragraphs: [
          `تشرح جدّتي: «في الأصل، هذه الأقنعة ليست مجرّد أعمال فنّيّة. إنها تحمل طاقةً سلفيّة، روحًا حيّةً تصلنا بأجدادنا.»`,
          `«الـدمبا رمزٌ بَاغاويّ للخصوبة والازدهار. في طقوس العبور، يحضر ليبارك الأجيال الجديدة. ويخرج الـدمبا أيضًا في المناسبات المهمّة — الأعراس والحصاد والجني — موحِّدًا أفراد المجتمع ومُيسِّرًا نجاح أعمالهم.»`,
          `«هذه الأشياء الثقافيّة يصنعها حرفيّون موهوبون، ورثة تقنيات قديمة. وعبر فنّهم، يروون تاريخنا وقيمنا.»`,
        ],
      },
      {
        id: "promesse",
        title: "مسؤوليّة جديدة",
        paragraphs: [
          `وقد تأثّرنا بعمقٍ بحكايات جدّتي، فشعرنا بمسؤوليّة جديدة. «علينا أن نشارك جمال ثقافتنا مع العالم!» وعدنا جدّتنا بأن نعود قريبًا. «الـدمبا رمزنا، ونحن فخوران بإرثنا. سنشاركه مع الجميع!»`,
          `«أمّا أنا، فسأتدرّب بجدٍّ أكبر كي ألعب لمنتخب كرة القدم الوطنيّ. أريد أن أُري العالم معنى أن تكون غينيًّا في الملعب.» وأنا، سأصير مؤرِّخة، مستعدّةً لاستكشاف عجائب بلدي غينيا ومشاركتها.`,
        ],
      },
      {
        id: "branding-national",
        title: "ما هي «هُويّة» (Branding) وطنيّة؟",
        paragraphs: [
          `تخيّل أنّ عليك أن ترسم فرنسا لصديقٍ لا يعرفها. ماذا سترسم؟ بالتأكيد برج إيفل، أليس كذلك؟ حين ترى ظلّه، تفكّر فورًا في باريس. لقد صار «هُويّةً» لفرنسا: صورة قويّة، سهلة التعرّف، تمثّل بلدًا بأكمله وما لديه من جمال.`,
          `وكما يمثّل برج إيفل فرنسا، تمثّل رموزٌ أخرى بلدانها: تمثال الحرّيّة للولايات المتّحدة، والسور العظيم للصين، وأهرامات الجيزة لمصر، والحافلة ذات الطابقَين وكشك الهاتف الأحمر للمملكة المتّحدة، وطاحونة الهواء لهولندا، والكنغر لأستراليا.`,
        ],
      },
      {
        id: "nimba-branding",
        title: "النيمبا، «هُويّة غينيا»",
        paragraphs: [
          `حسنًا، في عام 2022، قرّرت غينيا أن تفعل الشيء نفسه. اختارت رمزًا خاصًّا جدًّا ليمثّل البلد بأكمله: قناع النيمبا، أو الـدمبا!`,
          `قناع النيمبا ليس كنزًا لشعب الباغا فحسب، بل هو أيضًا رمزٌ لكل الغينيّين. لذلك اختارته الحكومة ليكون وجه غينيا في العالم. ومن ثَمّ نقول إنّ النيمبا هو «هُويّة غينيا».`,
        ],
      },
      {
        id: "valeurs-nimba",
        title: "ما يرمز إليه النيمبا",
        paragraphs: [
          `النيمبا أقنعة كبيرة تُحمل على الكتفَين، تمثّل امرأةً قويّةً خصبة. ثدياها المتدلّيان يدلّان على أنها أرضعت أطفالًا كثيرين، وتسريحتها المضفورة تذكّر بحقول الأرزّ المعتنى بها جيّدًا.`,
          `إذن، النيمبا رمزٌ لـ: الخصوبة والوفرة — تجلب الحصاد الوفير والفرح؛ والحماية — تسهر على القرية والعائلات؛ والقوّة والشجاعة — فالمرأة النيمبا نموذج الأمّ القادرة على فعل أي شيء من أجل أطفالها ومجتمعها.`,
          `هذه هي القيم الجميلة التي تريد غينيا أن تُريها للعالم أجمع!`,
        ],
      },
      {
        id: "pourquoi-nimba-1",
        title: "لماذا النيمبا؟ (1)",
        paragraphs: [
          `1. غينيا السفلى وحكاية الـدمبا: وُلد قناع النيمبا عند الباغا، في غينيا السفلى. تحكي الأسطورة أنّ نحّاتًا أراد أن يساعد أخته التي لم تكن تستطيع الإنجاب. وبينما كانا قرب نهر، ظهر له جنّيّ وطلب منه أن ينحت إلهة الخصوبة. ومن هذه الحكاية وُلد القناع، رمز المرأة التي تمنح الحياة.`,
          `2. غينيا الوسطى والعُرف الملكيّ: يعتلي القناع عُرفٌ ملكيّ مهيب. تشبه هذه التسريحة كثيرًا «جوبادي» التي ترتديها ملكات وأميرات شعب الفولاني (البول)، الذين يعيشون في غينيا الوسطى. وهكذا، يستطيع حتى سكّان فوتا جالون أن يتعرّفوا على أنفسهم ويشعروا بأنّ هذا القناع يمثّلهم.`,
        ],
      },
      {
        id: "pourquoi-nimba-2",
        title: "لماذا النيمبا؟ (2)",
        paragraphs: [
          `3. غينيا العليا وفنّ النحت: اليوم، يتوارث فنّ نحت هذه الأقنعة حرفيّون موهوبون، غالبًا من شعوب الماندينغ في غينيا العليا. وقد برعت عائلات من النحّاتين، مثل آل سيديمي، في فنّ تحويل الخشب إلى أقنعة رائعة.`,
          `4. غينيا الغابيّة وجبل نيمبا: أخيرًا، لا يشير اسم «نيمبا» إلى القناع فقط! إنه أيضًا اسم أعلى قمّة في غينيا، جبلٌ يتجاوز ارتفاعه 1758 مترًا، يقع في غينيا الغابيّة. وهذا «النيمبا» الآخر رمزٌ للعظمة والقوّة لكل البلاد.`,
        ],
      },
      {
        id: "armoiries",
        title: "شعار الدولة",
        paragraphs: [
          `لكل بلد شعاره، أشبه ببطاقة هُويّة بصريّة رسميّة.`,
          `في غينيا مثلًا، يظهر فيه تُرسٌ، وحمامة تحمل غصن زيتون، وشعار «العمل، العدالة، التضامن». شعار الدولة رمزٌ إداريّ ورسميّ: لا يجوز استخدامه إلّا لمن فوّضته الدولة.`,
        ],
      },
      {
        id: "difference-branding",
        title: "شعار الدولة أم الهُويّة: ما الفرق؟",
        paragraphs: [
          `«الهُويّة» (Branding) تختلف قليلًا. إنها صورة أحدث، تُختار للتواصل مع الناس في كل أنحاء العالم ودعوتهم لاكتشاف البلد. إنها أشبه بشعار علامةٍ تجاريّة تريد أن تروي قصّةً وتدفعك إلى اكتشافها.`,
          `هُويّة غينيا تروي قصّة بلدٍ غنيٍّ بثقافته وتاريخه.`,
        ],
      },
      {
        id: "tresor-musees",
        title: "نجمٌ في كبرى المتاحف",
        paragraphs: [
          `قناع النيمبا ليس مشهورًا في غينيا فحسب — إنه نجمٌ حقيقيّ في العالم كله! كيف صار قناعٌ خشبيّ، نُحت قبل زمنٍ طويل في غينيا، بهذه الشهرة؟ ببساطة: جماله وطاقته عظيمان إلى حدٍّ جعل كبرى المتاحف والفنّانين يرغبون في أن يكون قريبًا منهم.`,
          `يمكنك أن تتأمّله في أماكن مذهلة: متحف اللوفر في باريس، أشهر متحف في العالم؛ ومتحف المتروبوليتان للفنون في نيويورك، الذي يضمّ كنوزًا من أصقاع الأرض الأربعة؛ والمتحف البريطانيّ في لندن؛ وبالطبع متحف الحضارات السوداء في داكار، بالسنغال، أحد أكبر المتاحف المخصّصة للثقافة والفنون الإفريقيّة. وكثيرًا ما يكون النيمبا قطعة الصدارة في معارض الفنّ الإفريقيّ حول العالم.`,
        ],
      },
      {
        id: "picasso-tresor",
        title: "بيكاسو وكنزٌ مطلوب",
        paragraphs: [
          `اكتشف فنّانٌ شهير جدًّا، اسمه بابلو بيكاسو، الفنّ الإفريقيّ في مطلع القرن العشرين. وقد فُتن إلى حدٍّ كبير بأشكال الأقنعة وقوّتها حتى غيّر تمامًا طريقته في الرسم. ألهمته الأشكال الهندسيّة للنيمبا، وأسلوبه الفريد، أن يبتكر أسلوبًا جديدًا في الرسم: التكعيبيّة! وبفضل بيكاسو، أثّر قناع النيمبا في الفنّ حول العالم.`,
          `وحتى اليوم، يَعشق نجوم كبار في الموسيقى والسينما الفنّ الإفريقيّ. تُوجد أقنعة نيمبا في مجموعات خاصّة لمشاهير، مثل المغنّية أليشيا كيز. وهذا يدلّ على أنّ فنّ غينيا خالد، وأنه ما يزال يَفتن الناس في كل العصور. والجامعون في العالم كله مستعدّون لفعل أي شيء لامتلاك واحدٍ منها: ففي المزادات الكبرى، تُباع بعض هذه الأقنعة بأسعار مذهلة.`,
        ],
      },
      {
        id: "quiz",
        title: "هل صرت خبيرًا في النيمبا؟",
        paragraphs: [
          `السؤال 1: في أي مدينة يعيش الطفلان اللذان يكتشفان قناع النيمبا ويسافران إلى غينيا؟ — الجواب: باريس.`,
          `السؤال 2: من أي شعبٍ في غينيا نشأ قناع النيمبا؟ — الجواب: شعب الباغا.`,
          `السؤال 3: ما الفرق الرئيسيّ بين شعار دولة غينيا و«هُويّة غينيا»؟ — الجواب: شعار الدولة هو الرمز الرسميّ والمهيب للبلد، بينما الهُويّة صورة حديثة، مثل النيمبا، تُختار لتمثيل البلد والترويج له.`,
          `السؤال 4: أي فنّانٍ شهير استلهم من قناع النيمبا أسلوبًا جديدًا في الرسم؟ — الجواب: بابلو بيكاسو.`,
          `السؤال 5: ما الفنّ الذي كان يمارسه مَن قدّم النيمبا للعالم؟ — الجواب: النحت.`,
          `السؤال 6: إلى جانب القناع، أين نجد اسم «نيمبا» في غينيا؟ — الجواب: إنه اسم أعلى جبل في غينيا، جبل نيمبا.`,
          `السؤال 7: ما القيم الثلاث التي يرمز إليها قناع النيمبا؟ — الجواب: الخصوبة، والحماية، والازدهار.`,
          `السؤال 8: برأيك، ما الرمز الآخر الذي يمكن أن يصلح هُويّةً لغينيا، ولماذا؟ — إجابة حرّة.`,
        ],
      },
      {
        id: "petit-dico",
        title: "القاموس الصغير",
        paragraphs: [
          `شعار الدولة: شارة أو رمز رسميّ يستخدمه بلدٌ لتمثيل هُويّته الإداريّة.`,
          `الفنّ الإفريقيّ: مجموع الأعمال الفنّيّة التي أُبدعت في القارّة الإفريقيّة؛ كان لهذا الفنّ تأثير كبير في الفنّ العالميّ، خاصّةً في القرن العشرين.`,
          `الباغا: شعبٌ من غينيا، يعيش في غينيا السفلى، وهو أصل قناع النيمبا.`,
          `الهُويّة (Branding): الكلمة الإنجليزيّة للصورة القويّة المميَّزة التي يختارها بلدٌ أو شركة لتقديم نفسها للعالم؛ من كلمة brand بمعنى «علامة».`,
          `الجامع (المُقتني): شخصٌ شغوف يشتري الأعمال الفنّيّة ويجمعها في مجموعته الخاصّة.`,
          `التكعيبيّة: أسلوب رسمٍ تُمثَّل فيه الأشياء بأشكال هندسيّة؛ استلهمه بابلو بيكاسو من الأقنعة الإفريقيّة.`,
          `الـدمبا (أو النيمبا): قناع كتفٍ كبير لشعب الباغا، رمز للخصوبة والقوّة والحماية.`,
          `الخصوبة: القدرة على منح الحياة، وإنبات النبات، أو الحصول على محاصيل جيّدة.`,
          `غينيا: بلدٌ في غرب إفريقيا، غنيّ بالثقافة والتقاليد والمناظر الرائعة.`,
          `قناع الكتف: قناع كبير وثقيل جدًّا لا يُلبس على الوجه بل على الكتفَين، وغالبًا ما يرافقه زيّ؛ والنيمبا قناع كتف.`,
          `المتحف: مكانٌ تُعرض فيه الأعمال الفنّيّة والأشياء العلميّة والكنوز التاريخيّة، كي يتمكّن الجميع من تأمّلها والتعلّم.`,
          `سيديمي: اسم عائلة من النحّاتين الماندينغ يتفوّقون في صنع الأقنعة والمنحوتات الخشبيّة.`,
          `الشعار (Slogan): عبارة قصيرة ومؤثّرة تعبّر عن الفكرة الأساسيّة لعلامةٍ أو حملةٍ أو بلد.`,
          `الرمز: شيء أو صورة أو كلمة تمثّل فكرةً أو شعورًا أو قيمة.`,
          `الكنز: شيء نادر وثمين وعظيم القيمة.`,
        ],
      },
      {
        id: "en-mission",
        title: "في مهمّةٍ من أجل غينيا",
        paragraphs: [
          `بعد رحلتهما المدهشة واكتشافاتهما، فهم أمادو وفيفي شيئًا واحدًا: أن تعرف تاريخك وثقافتك يعني أيضًا أن تعرف كيف تبني مستقبل بلدك! يمكن لشغفهما وموهبتهما أن يساعدا على ازدهاره.`,
          `فيفي، المؤرّخة: بطلتنا لم تعُد تريد أن تكون صانعة محتوى فحسب، بل مؤرّخةً وصحفيّةً أيضًا. بدراستها التاريخ، ستستطيع أن تروي أساطير مثل أسطورة الـدمبا؛ وبصيرورتها صحفيّة، ستستطيع أن تصوّر وتشارك تقاليد غينيا وفعاليّاتها الثقافيّة وحكاياتها المدهشة مع العالم كله. مهمّتها: مساعدة غينيا على أن تتألّق، في كل مكان.`,
          `أمادو، لاعب الكرة الملتزِم: ما زال أمادو يحلم بأن يكون لاعب كرة، لكن له الآن مهمّة جديدة. إن صار محترفًا، فسيستطيع أن يمثّل «السيلي» (المنتخب الوطنيّ الغينيّ) بفخر في الملعب، مثل سيرهو غيراسي. سيكون سفيرًا لبلده، ويُلهم كثيرين غيره.`,
        ],
      },
      {
        id: "autres-metiers",
        title: "مهنٌ كثيرة لإشعاع غينيا",
        paragraphs: [
          `هناك مهن كثيرة أخرى تساعد على إشعاع ثقافة غينيا: عالِم آثار، للتنقيب في الأرض واكتشاف كنوز الماضي؛ مرشد سياحيّ، لمرافقة الزوّار والحرص على احترام المواقع؛ أمين متحف، للعناية بأعمالٍ مثل قناع النيمبا؛ حرفيّ فنّيّ، لمواصلة النحت والنسج وصناعة الآلات الموسيقيّة التقليديّة؛ مؤرّخ فنّ، لدراسة الأقنعة والمنحوتات؛ موثِّق، لتصنيف وأرشفة الوثائق والصور والفيديوهات الخاصّة بتراث غينيا.`,
          `صانع محتوى: مثل فيفي، بهاتفك تستطيع أن تصنع فيديوهات أو بودكاست للتعريف بوصفاتٍ تقليديّة أو بمناظر غينيا الرائعة — مرشد سياحيّ، لكن للعالم كله! مطوّر ألعاب فيديو: يمكنك أن تبتكر لعبةً ينطلق فيها أمادو وفيفي في مغامرة لاكتشاف مناطق غينيا، فتجعل الثقافة ممتعة وتفاعليّة لملايين الأطفال.`,
          `مصمّم ثلاثيّ الأبعاد: بأدواتٍ رقميّة، تستطيع أن تنمذج أشياء تقليديّة بتقنية 3D، لتطبيقاتٍ تعليميّة أو حتى لطباعة نسخٍ صغيرة. أخصّائيّ تسويق رقميّ: يمكنك أن تساعد الحرفيّين الغينيّين على بيع أعمالهم في العالم كله عبر الإنترنت — بالتقاط صورٍ جميلة، وإدارة وسائل التواصل، والتعريف بثراء الحرف الغينيّة على المستوى الدوليّ.`,
        ],
      },
      {
        id: "ton-tour",
        title: "حان دورك أنت!",
        paragraphs: [
          `مهما كانت شغفك واهتماماتك، تستطيع أنت أيضًا أن تساعد على إشعاع ثقافة بلدك وقوّته!`,
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
    bookTitle: "神圣的邓巴——阿马杜和菲菲在天堂",
    sections: [
      {
        id: "collection-pati",
        title: "“巴提”系列",
        paragraphs: [
          `很久很久以前，在一个阳光与水交织的国度，有一套美妙的图书，名叫“巴提”（Pati）。`,
          `“巴提”是人们对祖母的亲切称呼，她们是记忆与古老秘密的守护者。这些被施了魔法的书，收藏着塑造了几内亚历史的英雄与传统的奇妙故事。`,
          `睁大你的眼睛吧，因为你即将认识“神圣的邓巴”的故事——这是巴加人（Baga）的祖传面具——并和阿马杜、菲菲一起，前往他们民族的摇篮卡姆萨尔展开冒险。`,
          `你会为我们遗产中的珍宝惊叹，也会明白邓巴——这个象征丰饶与繁荣的符号——是如何成为几内亚全新的“国家品牌”（Branding Guinée）的。“巴提”系列是一场穿越时光的旅程，让今天和明天的孩子都能拥抱自己的传承，并为之自豪。`,
          `这本书讲述了两个城市孩子的故事：在祖母智慧的引领下，他们渐渐发现了自己文化之美。`,
        ],
      },
      {
        id: "dedicace",
        title: "献词",
        paragraphs: [
          `“愿我们的孩子在成长中坚信：几内亚是一座天堂，拥有一切可以给予他们的东西。”`,
          `——吉巴·迪亚基特，部长兼内阁主任，几内亚共和国总统府`,
        ],
      },
      {
        id: "fifi",
        title: "嗨，粉丝们，我是菲菲！",
        paragraphs: [
          `嗨，粉丝们！我是菲菲，你们未来最爱的网红！十五岁，已经是社交媒体高手啦。时尚、美妆、生活方式——我把一切都和我的粉丝分享。`,
          `我的目标？成为社交媒体的女王，激励千百万人！`,
        ],
      },
      {
        id: "amadou",
        title: "我是阿马杜",
        paragraphs: [
          `我是阿马杜。十三岁，只有一个梦想：成为下一位伟大的法国足球运动员，就像保罗·博格巴！`,
          `我每天训练——盘带、射门，什么都拦不住我。总有一天，我会穿上蓝色球衣，一定会！`,
        ],
      },
      {
        id: "la-guinee",
        title: "几内亚？",
        paragraphs: [
          `几内亚？那是我们父母的故乡，可我们对它了解得并不多。`,
          `只知道那是爷爷奶奶住的国家……`,
        ],
      },
      {
        id: "musee-nimba",
        title: "在博物馆：一个巨大的面具！",
        paragraphs: [
          `有一天，我们班去参观一家非洲艺术博物馆。然后——砰！一个巨大而华美的面具：来自几内亚的宁巴！讲解员说，它是非洲最珍贵、最有名的面具之一。`,
          `它象征着丰饶与守护。我和菲菲都特别自豪，因为它来自我们的国家！`,
        ],
      },
      {
        id: "appel-mamie",
        title: "奶奶的来电",
        paragraphs: [
          `奶奶给我们打来电话。和往常一样，她邀请我们回国；我们总是犹豫不决。`,
          `但这一次，自从发现了那个著名的面具，我们就很好奇，想了解更多。`,
        ],
      },
      {
        id: "voyage",
        title: "盛大的旅程",
        paragraphs: [
          `旅途很漫长，可我们激动极了！终于要去认识几内亚了！`,
        ],
      },
      {
        id: "aeroport",
        title: "“Wo nou senen——欢迎回家”",
        paragraphs: [
          `在机场，惊喜来了！一幅巨大的邓巴图像！`,
          `奶奶笑容满面地迎接我们：“Wo nou senen——欢迎回家！”`,
        ],
      },
      {
        id: "route-kamsar",
        title: "通往卡姆萨尔的路",
        paragraphs: [
          `大家都已经在放假了，我们便直接上路前往卡姆萨尔。开车的是奶奶。一路上，我们问个不停。`,
          `风景美极了！杜布雷卡、科巴、博法……几内亚真是一座天堂。路不算宽，可景色弥补了这一切，旅途真叫人享受。我一路拍照，希望以后有机会在我的一期视频里和你们分享。`,
        ],
      },
      {
        id: "eau-partout",
        title: "到处都是水",
        paragraphs: [
          `几内亚到处都是水，多美啊！碧绿的田野、河流与大江，还有最重要的——人们的笑容。这里的人显得格外热情。`,
          `我真想下去游个泳。这些孩子看起来多么自由啊！`,
        ],
      },
      {
        id: "malle-masque",
        title: "箱子里的面具",
        paragraphs: [
          `一到那里，我们就见到了好多表兄弟姐妹。因为是假期，他们也来卡姆萨尔陪爷爷奶奶。`,
          `在爷爷搬出来的一只箱子里翻找时，我们在家族纪念物中发现了一个精美的邓巴面具。我们第一次被允许触摸它。`,
        ],
      },
      {
        id: "mamie-explique",
        title: "奶奶讲解邓巴",
        paragraphs: [
          `奶奶解释道：“一开始，这些面具不仅仅是艺术品。它们蕴含着祖先的能量，一种把我们与先人相连的鲜活灵魂。”`,
          `“邓巴是巴加人象征丰饶与繁荣的符号。在成年礼上，它会出现，为新一代祝福。在重要的仪式上——婚礼、收割、丰收——邓巴也会出现，把社区的成员团结在一起，助人们的行动获得成功。”`,
          `“这些文化器物，是由才华横溢的工匠制作的，他们是古老技艺的传人。透过他们的艺术，他们讲述着我们的历史和价值观。”`,
        ],
      },
      {
        id: "promesse",
        title: "一份新的责任",
        paragraphs: [
          `被奶奶的故事深深打动后，我们感到了一份新的责任。“我们必须把我们文化之美分享给世界！”我们答应奶奶很快会回来。“邓巴是我们的象征，我们为自己的传承而自豪。我们要把它分享给所有人！”`,
          `“至于我，我要更加刻苦训练，好为国家足球队效力。我要让世界看看，在球场上做一个几内亚人意味着什么。”而我，将成为一名历史学家，准备好去探索并分享我祖国几内亚的奇迹。`,
        ],
      },
      {
        id: "branding-national",
        title: "什么是国家“品牌”？",
        paragraphs: [
          `想象你要为一个不了解法国的朋友画出法国。你会画什么？多半是埃菲尔铁塔，对吧？一看到它的轮廓，人们立刻就想到巴黎。它成了法国的一个“品牌”：一个鲜明、易于辨认的形象，代表着整个国家以及它所拥有的美好。`,
          `正如埃菲尔铁塔代表法国，其他符号也代表着各自的国家：自由女神像代表美国，长城代表中国，吉萨金字塔代表埃及，双层巴士和红色电话亭代表英国，风车代表荷兰，袋鼠代表澳大利亚。`,
        ],
      },
      {
        id: "nimba-branding",
        title: "宁巴，“几内亚品牌”",
        paragraphs: [
          `于是，2022年，几内亚决定也这么做。它选择了一个非常特别的符号来代表整个国家：宁巴面具，也就是邓巴！`,
          `宁巴面具不仅是巴加人的珍宝，也是全体几内亚人的象征。正因如此，政府选择它作为几内亚面向世界的面孔。于是，人们就说宁巴是“几内亚品牌”。`,
        ],
      },
      {
        id: "valeurs-nimba",
        title: "宁巴所象征的",
        paragraphs: [
          `宁巴是戴在肩上的大型面具，代表一位强壮而丰饶的女性。她下垂的乳房表明她哺育过许多孩子，她编成辫子的发式让人联想到精心耕种的稻田。`,
          `因此，宁巴象征着：丰饶与富足——她带来好收成和喜悦；守护——她庇佑村庄和家庭；力量与勇气——宁巴女性是一位母亲的典范，能为孩子和社区做任何事。`,
          `这正是几内亚想向全世界展示的美好价值！`,
        ],
      },
      {
        id: "pourquoi-nimba-1",
        title: "为什么是宁巴？（一）",
        paragraphs: [
          `一、下几内亚与邓巴的故事：宁巴面具诞生于下几内亚的巴加人之中。传说有一位雕刻匠想帮助他无法生育的妹妹。当他们来到一条河边时，一位精灵出现在他面前，请他雕刻丰饶女神。面具正是从这个故事中诞生的，象征着赋予生命的女性。`,
          `二、中几内亚与王室冠饰：面具顶上戴着一顶威严的王室冠饰。这种发饰很像“朱巴迪”（Djoubadee），由生活在中几内亚的颇尔人（Peul）的王后和公主佩戴。于是，连富塔贾隆的居民也能在这个面具中认出自己、感到被代表。`,
        ],
      },
      {
        id: "pourquoi-nimba-2",
        title: "为什么是宁巴？（二）",
        paragraphs: [
          `三、上几内亚与雕刻艺术：如今，雕刻这些面具的技艺由才华横溢的工匠传承下来，他们多来自上几内亚的曼丁各族。一些雕刻世家，比如西迪梅（Sidimé）家族，已成为把木头化作华美面具的高手。`,
          `四、森林几内亚与宁巴山：最后，“宁巴”这个名字不只指面具！它也是几内亚最高峰的名字——一座位于森林几内亚、海拔超过1758米的高山。这另一座“宁巴”，是整个国家壮丽与力量的象征。`,
        ],
      },
      {
        id: "armoiries",
        title: "国徽",
        paragraphs: [
          `每个国家都有自己的国徽，就像一张官方的视觉身份证。`,
          `比如几内亚的国徽上，有一面盾牌、一只衔着橄榄枝的鸽子，还有箴言“劳动、正义、团结”。国徽是行政性、庄严的符号：只有受国家授权的人才能使用。`,
        ],
      },
      {
        id: "difference-branding",
        title: "国徽与品牌：有什么区别？",
        paragraphs: [
          `“品牌”有点不一样。它是一个更现代的形象，专门用来与世界各地的人沟通，邀请他们来认识这个国家。它有点像一个想讲述故事、让你想去了解它的商标。`,
          `几内亚的品牌讲述的是一个文化与历史都无比丰厚的国家的故事。`,
        ],
      },
      {
        id: "tresor-musees",
        title: "大博物馆里的明星",
        paragraphs: [
          `宁巴面具不仅在几内亚有名——它是名副其实的世界级明星！一个很久以前在几内亚雕成的木面具，怎么会变得如此有名？很简单：它的美与能量是如此强大，连那些大博物馆和艺术家都想把它留在身边。`,
          `你可以在许多不可思议的地方欣赏到它：巴黎的卢浮宫，世界上最有名的博物馆；纽约的大都会艺术博物馆，收藏着来自世界各地的珍宝；伦敦的大英博物馆；当然还有塞内加尔达喀尔的黑人文明博物馆，世界上最大的非洲文化与艺术博物馆之一。在世界各地的非洲艺术展上，宁巴常常是镇展之宝。`,
        ],
      },
      {
        id: "picasso-tresor",
        title: "毕加索与一件人人渴求的珍宝",
        paragraphs: [
          `一位非常著名的艺术家——巴勃罗·毕加索，在20世纪初发现了非洲艺术。他被面具的造型与力量深深吸引，以至于彻底改变了自己的绘画方式。宁巴那些几何化的造型、那种独一无二的风格，给了他巨大的灵感，去开创一种全新的绘画风格：立体主义！多亏了毕加索，宁巴面具影响了全世界的艺术。`,
          `直到今天，音乐和电影界的大明星仍痴迷于非洲艺术。在一些名人的私人收藏中就能见到宁巴面具，比如歌手艾丽西亚·凯斯。这说明几内亚的艺术是超越时代的，它持续打动着各个时代的人。世界各地的收藏家为了拥有一件，可以不惜一切：在大型拍卖会上，有些面具能卖出惊人的高价。`,
        ],
      },
      {
        id: "quiz",
        title: "你现在是宁巴专家了吗？",
        paragraphs: [
          `问题1：发现宁巴面具并前往几内亚的两个孩子住在哪座城市？——答案：巴黎。`,
          `问题2：宁巴面具源自几内亚的哪个民族？——答案：巴加人。`,
          `问题3：几内亚国徽与“几内亚品牌”最主要的区别是什么？——答案：国徽是国家官方而庄严的象征，而品牌是一个现代的形象，如宁巴，用来代表并推广国家。`,
          `问题4：哪位著名艺术家受宁巴面具启发，开创了一种新的绘画风格？——答案：巴勃罗·毕加索。`,
          `问题5：把宁巴献给世界的那个人从事的是什么艺术？——答案：雕刻。`,
          `问题6：除了面具，“宁巴”这个名字在几内亚还出现在哪里？——答案：它是几内亚最高山峰的名字，宁巴山。`,
          `问题7：宁巴面具象征哪三种价值？——答案：丰饶、守护与繁荣。`,
          `问题8：在你看来，还有什么符号可以作为几内亚的品牌，为什么？——自由作答。`,
        ],
      },
      {
        id: "petit-dico",
        title: "小词典",
        paragraphs: [
          `国徽：一个国家用来代表其行政身份的纹章或官方符号。`,
          `非洲艺术：在非洲大陆创作的全部艺术作品；这种艺术对世界艺术影响深远，尤其是在20世纪。`,
          `巴加人：几内亚的一个民族，生活在下几内亚，是宁巴面具的创造者。`,
          `品牌（Branding）：英语词，指一个国家或一家企业为向世界展示自己而选择的鲜明、易辨认的形象；来自brand，意为“标记”。`,
          `收藏家：热衷于购买并收集艺术品、把它们纳入个人收藏的人。`,
          `立体主义：一种用几何形状来表现物体的绘画风格；巴勃罗·毕加索从非洲面具中获得灵感而创立了它。`,
          `邓巴（或宁巴）：巴加人的一种大型肩部面具，象征丰饶、力量与守护。`,
          `丰饶：赋予生命、使植物生长或获得好收成的能力。`,
          `几内亚：西非的一个国家，拥有丰富的文化、传统和壮丽的风景。`,
          `肩部面具：一种很大很重、不戴在脸上而是扛在肩上的面具，通常还配有服饰；宁巴就是一种肩部面具。`,
          `博物馆：陈列艺术品、科学物件或历史珍宝的地方，让每个人都能欣赏和学习。`,
          `西迪梅：曼丁各族雕刻匠的一个姓氏，他们擅长创作木质面具和雕塑。`,
          `口号（Slogan）：一句简短而有力的话，概括一个品牌、一场活动或一个国家的核心理念。`,
          `符号：代表某种思想、情感或价值的物件、图像或词语。`,
          `珍宝：稀有、珍贵、价值连城的物品。`,
        ],
      },
      {
        id: "en-mission",
        title: "为几内亚出一份力",
        paragraphs: [
          `经历了这场奇妙的旅程和种种发现后，阿马杜和菲菲明白了一件事：了解自己的历史与文化，也意味着懂得如何建设国家的未来！他们的热爱与天赋，都能为国家的成长出力。`,
          `菲菲，历史学家：我们的女主人公不再只想当网红，还想成为历史学家和记者。学习历史，她就能讲述像邓巴这样的传说；当上记者，她就能拍摄并把几内亚的传统、文化活动和精彩故事分享给全世界。她的工作：让几内亚处处都拥有美好的形象。`,
          `阿马杜，有担当的足球运动员：阿马杜依然梦想成为足球运动员，但如今他多了一项使命。如果他成为职业球员，就能像塞鲁·吉拉西那样，在球场上自豪地代表“西利”（几内亚国家队）。他将成为祖国的大使，激励许许多多其他人。`,
        ],
      },
      {
        id: "autres-metiers",
        title: "让几内亚闪耀的众多职业",
        paragraphs: [
          `还有许许多多职业，都能让几内亚的文化闪耀：考古学家，去挖掘土地、发现讲述几内亚历史的往昔珍宝；导游，陪伴游客并确保景点得到尊重；博物馆策展人，照护像宁巴面具这样的作品；工艺美术匠人，继续雕刻、编织或制作传统乐器；艺术史学家，研究面具和雕塑；档案管理员，整理并存档讲述几内亚遗产的文件、照片和视频。`,
          `内容创作者：像菲菲一样，用你的手机就能制作视频或播客，介绍传统食谱或几内亚壮美的风景——就像一位面向全世界的导游！电子游戏开发者：你可以做一款游戏，让阿马杜和菲菲展开冒险去探索几内亚的各个地区，把文化变得对千百万孩子既有趣又可互动。`,
          `三维设计师：借助数字工具，你可以用3D技术为传统器物建模，用于教育类应用，甚至打印出小小的复制品。数字营销专员：你可以借助互联网，帮助几内亚的工匠把作品卖到世界各地——拍出漂亮的照片，运营社交媒体，把几内亚手工艺的丰富之美推向国际。`,
        ],
      },
      {
        id: "ton-tour",
        title: "现在轮到你了！",
        paragraphs: [
          `无论你的热爱是什么，你也能为自己国家的文化和力量增添光彩！`,
        ],
      },
    ],
  },
};

export default DMBA_ML;
