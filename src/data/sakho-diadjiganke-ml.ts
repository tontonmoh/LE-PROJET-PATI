// NOUVEAU · src/data/sakho-diadjiganke-ml.ts
// Reader ML pour « Sakho Diadjiganké » — tome 1 de la série JAAMU — Les Noms.
// Format « Laye » ({ fr, en, ar, zh } avec { lang, dir, label, bookTitle, sections:[{id,title,paragraphs,image?}] }).
// v1 FR only — EN / AR / ZH à faire dans une seconde passe.

export const SAKHO_DIADJIGANKE_ML = {
  fr: {
    lang: "fr",
    dir: "ltr",
    label: "Français",
    bookTitle: "Sakho Diadjiganké",
    subtitle: "Une légende Sacko racontée par Bemba",
    sections: [
      {
        id: "01",
        title: "Lélouma, sous le manguier",
        paragraphs: [
          "Le taxi-brousse déposa Diadjiga Sacko devant la mosquée du Petel. Trois semaines chez son grand-père, à Lélouma. Sa mère, née Doumbouya, l'avait embrassée le matin même. « Écoute Bemba. Il a des choses à te dire. »",
          "Elle trouva le vieil homme sous le manguier. Une aigrette blanche s'était posée sur une branche basse. Bemba la regardait comme un vieil ami.",
          "Diadjiga posa son sac.",
          "— Bemba, pourquoi on s'appelle Sacko ? Ici tout le monde s'appelle Diallo, Baldé, Barry. On n'est pas d'ici ?",
          "Le vieil homme sourit.",
          "— On est d'ici. Et on n'est pas seulement d'ici. Notre nom, ma fille, il a traversé un désert, sept pays et mille ans. Assieds-toi.",
          "Et Bemba commença.",
        ],
        image: "/images/jaamu/t1_sakho/dp_01.webp", // [À VALIDER] à générer
      },
      {
        id: "02",
        title: "Dinga, l'homme venu de l'Est",
        paragraphs: [
          "Il y a plus de mille ans, un homme quitta les rives du Nil.",
          "Il s'appelait Dinga. On dit qu'il était noble à la cour du pharaon, à Assouan. Un jour, il fit seller son cheval. Il partit vers l'ouest, avec ses cavaliers, ses chameaux, ses femmes, ses enfants. Personne n'a jamais su pourquoi.",
          "Ils marchèrent des mois. Peut-être des années. Ils cherchaient une terre où l'eau ne mentirait pas.",
          "Un jour, ils arrivèrent au sud de ce qui n'était pas encore la Mauritanie. Là vivait un peuple d'agriculteurs, les Karos. Dinga avait des chevaux et du fer. Il s'imposa. Mais il ne fit pas la guerre pour la guerre. Il épousa les filles des chefs vaincus, mêla son sang au leur, et resta.",
          "De ce mélange, une nation naquit. On l'appellerait, plus tard, les Soninkés.",
        ],
        image: "/images/jaamu/t1_sakho/dp_02.webp", // [À VALIDER] à générer
      },
      {
        id: "03",
        title: "Les six fils, les six clans",
        paragraphs: [
          "Dinga eut six fils, de six femmes différentes. Six fils qui devinrent les six premiers clans soninkés.",
          "L'aîné s'appelait Diabé. Il aimait les chevaux. Il aimait commander. Sa lignée prit le nom de Cissé — ce qui veut dire, en soninké, celui qui monte un cheval blanc.",
          "Un des cadets s'appelait Makhan. Celui-là aimait veiller. Il pouvait rester des heures debout au bord d'un fleuve, immobile, comme un oiseau sur une patte. Sa lignée prit le nom de Sakho — ce qui veut dire, en soninké, l'aigrette.",
          "Les autres fondèrent les Touré, les Bérété, les Diané, les Soukhouna.",
          "Six frères. Six clans. Un même père. L'un régnait. L'autre veillait. C'est ainsi que tout tenait debout.",
        ],
        image: "/images/jaamu/t1_sakho/dp_03.webp", // [À VALIDER] à générer
      },
      {
        id: "04",
        title: "Koumbi la dorée, et le pacte",
        paragraphs: [
          "Diabé Cissé bâtit une ville. Cette ville s'appelait Koumbi Saleh. On y venait de partout. Du désert avec le sel. Des forêts du sud avec l'or. Diabé devint Manga. Puis Kaya Maghan, ce qui veut dire « roi de l'or ».",
          "Mais un royaume ne tient pas avec les seuls hommes.",
          "Au fond d'un puits du palais vivait Bida, un serpent à sept têtes. Diabé passa un pacte avec lui. Chaque année, une jeune fille de Koumbi serait donnée à Bida. En échange, le serpent ferait tomber la pluie et briller l'or dans les rivières.",
          "Chaque année, une jeune fille disparaissait. On n'en parlait pas. Elle n'était plus, voilà tout.",
          "Et chaque année, la pluie tombait. Et chaque année, l'or brillait dans les fleuves.",
          "C'était le prix du Wagadou.",
        ],
        image: "/images/jaamu/t1_sakho/dp_04.webp", // [À VALIDER] à générer
      },
      {
        id: "05",
        title: "Sakho Wakané, celui qui est devant",
        paragraphs: [
          "Pendant que Diabé régnait, Makhan défendait.",
          "On le surnommait Sakho Wakané — le Sakho qui est devant. Il commandait les armées du Wagadou. Neuf mille neuf cent quatre-vingt-dix-neuf tribus, rangées en quatre grands ensembles. Il gardait les frontières. Il escortait les caravanes. Il protégeait les mines d'or.",
          "Sa maison n'était pas à Koumbi. Elle était plus au sud, dans un village qu'on appelait Madiga, dans le pays de Diadjiga — oui, le même prénom que celui de Diadjiga Sacko, treize siècles plus tard.",
          "C'est pour cela que tous les Sacko qui viennent de Makhan se surnomment Sakho Diadjiganké — les Sakho du pays de Diadjiga.",
          "Makhan choisit un totem pour sa lignée. Il aurait pu choisir le lion. Il aurait pu choisir l'aigle. Il choisit l'aigrette. Cet oiseau qui se tient au bord de l'eau, immobile, et qui voit tout venir. Parce qu'un chef d'armée, disait-il, doit d'abord veiller. Frapper vient après.",
        ],
        image: "/images/jaamu/t1_sakho/dp_05.webp", // [À VALIDER] à générer
      },
      {
        id: "06",
        title: "L'apogée",
        paragraphs: [
          "Pendant deux siècles, le Wagadou fut le plus riche royaume de son temps.",
          "Les caravanes de sel descendaient du Sahara. Celles d'or remontaient du Bouré. On disait que le Kaya Maghan produisait une tonne d'or par an. Les cavaliers cuirassés tenaient les routes. Les forgerons battaient le fer pour les armes et les outils.",
          "Les Sacko étaient partout. Guerriers, souvent. Forgerons, souvent aussi. Parfois griots, porteurs de la parole juste dans la cour des rois. Trois vocations. Un même nom.",
          "L'aigrette veillait au bord du fleuve. Personne n'imaginait que cela pourrait un jour finir.",
        ],
        image: "/images/jaamu/t1_sakho/dp_06.webp", // [À VALIDER] à générer
      },
      {
        id: "07",
        title: "Quand les Sacko portèrent la couronne",
        paragraphs: [
          "Le temps passa. Des générations tombèrent. Le Wagadou changea.",
          "Un jour, très longtemps après Makhan, les Sacko eux-mêmes montèrent sur le trône. Trois rois, l'un après l'autre, pendant trente ans. Ce n'était plus l'âge d'or. Les caravanes se faisaient rares. Depuis le nord, des cavaliers venus d'un désert plus lointain encore — les Almoravides — pressaient les frontières.",
          "Les Sacko régnèrent avec ce qu'ils savaient faire depuis toujours. Tenir. Veiller. Défendre. Le dernier de ces rois s'appelait Kalou. Après lui, le trône passa à d'autres mains.",
          "Le Wagadou était vieux. Il ne savait pas encore qu'il allait mourir.",
        ],
        image: "/images/jaamu/t1_sakho/dp_07.webp", // [À VALIDER] à générer
      },
      {
        id: "08",
        title: "Le pacte rompu, la malédiction",
        paragraphs: [
          "Cette année-là, une jeune fille du nom de Sia Yatabéré fut désignée pour l'offrande.",
          "Elle aimait un jeune homme du nom d'Amadou. Amadou l'aimait. Il ne put pas.",
          "Au petit matin, il se cacha près du puits. Quand Bida sortit ses sept têtes, il frappa. Sept fois. Chaque tête tomba, roula, s'enfonça dans la terre en direction du sud. À sept endroits différents, l'or apparut. Au Bouré. Au Bambouk. À la Falémé. Au Galam. Au Bondoukou. Au Lobi. Et un septième endroit dont personne n'a jamais retrouvé le nom.",
          "On dit que les sept mines d'or de l'Afrique de l'Ouest ne sont rien d'autre que les sept têtes du serpent qui continuent de briller sous la terre.",
          "Mais avant de mourir, Bida parla. Il jeta une malédiction sur le Wagadou. Sept années, sept mois, sept jours de sécheresse.",
          "Les puits tarirent. L'or disparut des fleuves. La pluie oublia le chemin.",
          "Le Wagadou mourut.",
        ],
        image: "/images/jaamu/t1_sakho/dp_08.webp", // [À VALIDER] à générer
      },
      {
        id: "09",
        title: "La grande marche, et jusqu'à Lélouma",
        paragraphs: [
          "Alors les clans partirent.",
          "Certains descendirent le fleuve Sénégal jusqu'au royaume du Galam. D'autres traversèrent la Gambie et gagnèrent la Guinée-Bissau. D'autres s'enfoncèrent dans le Kaarta, puis jusqu'à Kong en pays sénoufo. Une branche descendit encore plus bas, jusqu'aux terres des Malinkés — Siguiri, Kankan, Baro. Là, les Sacko se lièrent aux Kondé, aux Konté. Ils apprirent une nouvelle langue. Ils gardèrent leur nom.",
          "Cela dura des siècles.",
          "Puis, il y a plus de deux cents ans, une nouvelle histoire commença. Au Fouta, des Peuls musulmans et des Diakhankés venus du nord s'allièrent pour bâtir un pays uni. Douze marabouts peuls. Dix marabouts diakhankés. Dans leur sillage, des familles mandingues — dont des Sacko — remontèrent vers les hauts plateaux. Ils s'installèrent dans les villages du Fouta. Ils épousèrent des femmes peules. Ils apprirent le pular. Ils gardèrent leur nom.",
          "C'est ainsi qu'un ancêtre de Bemba arriva à Lélouma. Il ne devint pas peul. Il ne cessa pas d'être Sacko.",
          "Il devint les deux.",
        ],
        image: "/images/jaamu/t1_sakho/dp_09.webp", // [À VALIDER] à générer
      },
      {
        id: "10",
        title: "Ce que tu portes",
        paragraphs: [
          "Le soleil tombait derrière les hauts plateaux. L'aigrette bougea sur sa branche.",
          "Bemba tourna la tête vers Diadjiga.",
          "— Notre nom, ma fille, il a mille ans. Il a traversé un désert, une sécheresse et sept pays. Il a régné une fois. Il a défendu mille fois. Il a marché sans s'arrêter, jusqu'à ce manguier, ce soir.",
          "Il posa la main sur celle de Diadjiga.",
          "— Tu portes en toi le cavalier de Diabé et l'aigrette de Makhan. Où que tu ailles, tu es devant.",
          "L'aigrette ouvrit ses ailes. Elle prit son envol. Elle fila vers le nord.",
          "Diadjiga ne dit rien.",
          "Elle avait compris.",
        ],
        image: "/images/jaamu/t1_sakho/dp_10.webp", // [À VALIDER] à générer
      },
    ],
  },
};
