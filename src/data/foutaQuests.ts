/**
 * FOUTA THÉOCRATIQUE — 9 Diwés
 * Encyclopédie Pati /fouta
 * 
 * Structure : 9 diwés = 9 quêtes
 * Chaque diwal : title + founder + versions (enfant/adulte) + 6–8 images + 5–8 faits illustrés
 * 
 * Codes faits (pour images) :
 * - Timbo : t1–t8
 * - Fougoumba : fg1–fg7
 * - Labé : lb1–lb8
 * - Bhouriya : bh1–bh6
 * - Timbi : tb1–tb6
 * - Kébali : kb1–kb5
 * - Kolladé : kl1–kl5
 * - Koïn : kn1–kn6
 * - Fodé-Hadji : fh1–fh4
 */

export interface FoutaFact {
  id: string; // ex: 't1', 'fg2'
  title: string;
  description: string;
  imageUrl: string; // '/images/fouta/t1.jpg'
  caption: string;
  source?: string;
}

export interface FoutaDiwal {
  id: string; // 'timbo', 'fougoumba', etc.
  name: string;
  founder: string;
  years?: string; // '~1680–1751' ou '?'
  
  versions: {
    enfant: string; // 1–1.5 pages, langage simple
    adulte: string; // 2–3 pages, contexte complet
  };
  
  facts: FoutaFact[]; // 5–8 faits illustrés par diwal
  
  imageCount: number; // 6–8 images
  role: string; // rôle politique court
}

export const foutaDiwals: FoutaDiwal[] = [
  // ==================== 1. TIMBO ====================
  {
    id: 'timbo',
    name: 'Timbo',
    founder: 'Karamoko Alfa Ibrahima Sambégou',
    years: '~1680–1751',
    
    versions: {
      enfant: `Il y a très longtemps, au Fouta-Djalon, vivait un sage appelé Karamoko Alfa. Il aimait l'islam et la prière. Un jour, il décida de passer sept ans entier dans une petite maison, sans sortir, pour prier et demander à Dieu d'aider les gens du Fouta à devenir musulmans aussi.

Après sept ans, les grands chefs vinrent lui dire : « Karamoko Alfa, le peuple te demande de nous guider à la guerre pour que l'islam règne au Fouta ! »

En 1725, Karamoko Alfa mena ses guerriers à la bataille de Talansan. Les animistes qui contrôlaient le Fouta furent vaincus. Karamoko Alfa et ses amis avaient gagné !

Maintenant, ils devaient décider qui allait diriger le Fouta. Tous les grands chefs se réunirent. Et tu sais quoi ? Ils choisirent Karamoko Alfa lui-même comme chef suprême. On l'appela l'Almamy — c'est-à-dire le roi de tout le Fouta.

Karamoko Alfa choisit une belle région avec une montagne appelée Hélaya, et il fonda sa capitale là. Il l'appela Timbo.

À Timbo, il y avait un grand palais. Autour du palais, les gens construisirent des marchés, des mosquées, des écoles. Des marchands arrivaient de très loin avec des tissus colorés, du sel précieux, même de l'or.

Mais Karamoko Alfa ne garda le pouvoir que 8 ans. Pourquoi ? Parce qu'il avait une règle : aucun chef ne doit rester au pouvoir trop longtemps, sinon il devient méchant. Alors après 8 ans, le pouvoir passa à son cousin Ibrahima Sory. Et après, ils alterneraient — d'abord une famille pendant 2 ans, puis l'autre famille pendant 2 ans.

C'était une bonne idée ! Les chefs changeaient régulièrement, donc personne ne devenait trop puissant.

Karamoko Alfa mourut en 1751, mais Timbo resta la capitale du Fouta pendant longtemps. C'était une ville importante où on parlait de politique, d'islam, et où les savants enseignaient le Coran.`,
      
      adulte: `Karamoko Alfa Ibrahima Sambégou (~1680–1751) naquit dans une famille peule du Fouta, descendant d'une lignée de savants musulmans. Dès son enfance, il fut envoyé auprès des grands marabouts — à Kankan d'abord, où il étudia auprès du célèbre Qadir Sanoussi, puis il continua ses études en se perfectionnant dans la récitation du Coran et l'interprétation de la loi islamique.

Vers 1720, Karamoko Alfa se retira chez lui pendant sept années entières — sept ans, sept semaines et sept jours, selon la tradition. Pendant tout ce temps, il pria, jeûna et médita, demandant à Dieu de guider les peuples du Fouta vers l'islam. Ses fidèles lui apportaient secrètement de la nourriture. À la fin de cette longue retraite, les chefs musulmans du Fouta se réunirent pour lui demander de les conduire à la guerre sainte.

En 1725, à la bataille de Talansan, Karamoko Alfa mena les Peuls musulmans à la victoire contre les Djallonké animistes qui contrôlaient le pays. Après cette victoire, les chefs décidèrent de s'organiser. En 1743, lors d'un grand congrès à Timbi-Touni, Karamoko Alfa fut élu Almamy — le chef suprême de la confédération, à la fois chef politique, chef spirituel et commandant de l'armée.

Mais Karamoko Alfa ne garda le pouvoir que huit ans (1743–1751). C'était intentionnel : la confédération avait décidé qu'aucun homme ne pouvait concentrer le pouvoir trop longtemps. Après Karamoko Alfa, le titre d'Almamy passait à son cousin, Ibrahima Sory Mawdho. Puis, tous les deux ans, le pouvoir alternait entre les deux familles — les Alphaya (descendants de Karamoko Alfa) et les Soriya (descendants d'Ibrahima Sory). C'était un système révolutionnaire pour l'époque : pas un roi qui règne à vie, mais deux familles qui partagent le pouvoir.

Timbo était le cœur battant du Fouta. C'est là, près du mont Hélaya, que Karamoko Alfa choisit sa résidence. La ville devint rapidement le centre du pouvoir politique. L'Almamy y vivait avec ses conseillers. Autour du palais s'étaient construits des marchés, des mosquées, des écoles coraniques. Des marchands venaient de très loin apporter des tissus, du sel, du or.

Mais Timbo n'était pas juste une ville politique. C'était aussi un centre de savoir. Des jeunes gens venus de tout le Fouta — et même de pays voisins — venaient y étudier le Coran auprès des grands marabouts. Les savants composaient des poèmes en arabe, traduisaient des textes religieux, discutaient de théologie.

La vie politique du Fouta n'était pas toujours paisible. En 1762, une armée venue du Sankaran attaqua le Fouta. Les guerriers du Sankaran, commandés par un chef appelé Kondé Bourama, écrasèrent l'armée du Fouta et occupèrent Timbo pendant quatorze ans. En 1776, le Fouta contre-attaqua et repoussa les envahisseurs. Timbo fut reconquise.

Après 1791, à la mort de Sori Mawdho, Timbo connut des crises régulières. Malgré tout, Timbo conserva son prestige jusqu'à l'arrivée des Français en 1896. La dernière Almamy à résider à Timbo avec une véritable autorité fut Bocar Biro, qui régna entre 1889 et 1896.`,
    },
    
    facts: [
      {
        id: 't1',
        title: 'La Retraite de Karamoko Alfa',
        description: 'Karamoko Alfa passe 7 ans en retraite spirituelle',
        imageUrl: '/images/fouta/t1.jpg',
        caption: 'Karamoko Alfa en retraite, jeûnant et priant',
      },
      {
        id: 't2',
        title: 'La Bataille de Talansan',
        description: 'Victoire peule musulmane en 1725',
        imageUrl: '/images/fouta/t2.jpg',
        caption: 'Les guerriers peuls attaquent à cheval',
      },
      {
        id: 't3',
        title: 'L\'Élection d\'Almamy',
        description: 'Karamoko Alfa devient chef suprême du Fouta en 1743',
        imageUrl: '/images/fouta/t3.jpg',
        caption: 'Les chefs du Fouta élisent Karamoko Alfa',
      },
      {
        id: 't4',
        title: 'Le Palais de Timbo',
        description: 'Centre politique et religieux du Fouta',
        imageUrl: '/images/fouta/t4.jpg',
        caption: 'Le palais d\'Almamy à Timbo',
      },
      {
        id: 't5',
        title: 'Les Marchés de Timbo',
        description: 'Commerce et échange à la capitale',
        imageUrl: '/images/fouta/t5.jpg',
        caption: 'Marchands et caravanes à Timbo',
      },
      {
        id: 't6',
        title: 'L\'École Coranique',
        description: 'Savants et étudiants à Timbo',
        imageUrl: '/images/fouta/t6.jpg',
        caption: 'Jeunes étudiants étudiant le Coran',
      },
      {
        id: 't7',
        title: 'L\'Occupation du Sankaran',
        description: 'Invasion et occupation de Timbo (1762–1776)',
        imageUrl: '/images/fouta/t7.jpg',
        caption: 'Les guerriers du Sankaran conquièrent Timbo',
      },
      {
        id: 't8',
        title: 'La Reconquête',
        description: 'Le Fouta reprend Timbo en 1776',
        imageUrl: '/images/fouta/t8.jpg',
        caption: 'Les guerriers peuls reprennent Timbo',
      },
    ],
    
    imageCount: 8,
    role: 'Capitale politique — Siège de l\'Almamy',
  },

  // ==================== 2. FOUGOUMBA ====================
  {
    id: 'fougoumba',
    name: 'Fougoumba',
    founder: 'Fodé Séïri',
    years: '~1630–?',
    
    versions: {
      enfant: `Imagine une ville où les plus grands savants musulmans se réunissent chaque année. Imagine une mosquée si importante que les rois eux-mêmes viennent y être couronnés. Bienvenue à Fougoumba !

Il y a longtemps, deux frères vinrent du loin — du Madina — pour s'installer au Fouta. L'aîné, appelé Fodé Séïri, choisit la région de Fougoumba. Le cadet, Fodé Séïdi, alla fonder Timbo. Les deux frères étaient des savants, des marabouts qui savaient tout du Coran et de l'islam.

Fodé Séïri fonda une école à Fougoumba. Il enseigna le Coran à des dizaines, puis à des centaines d'enfants. Sa famille, les Séryankés, devint très importante. Encore aujourd'hui, les gens disent : « Il n'y a pas d'étrangers à Fougoumba » — cela veut dire que Fougoumba appartient aux enfants de Fodé Séïri.

Fougoumba n'était pas la capitale politique (c'était Timbo). Mais c'était la capitale religieuse — le cœur spirituel du Fouta.

Quand un nouvel Almamy était choisi comme roi du Fouta, où le couronnait-on ? À Fougoumba ! On lui apportait neuf turbans blancs spéciaux — un de chaque province. On enroulait tous les turbans autour de sa tête. Puis chaque jour, on lui enlevait un turban. Le neuvième jour, il ne lui restait que le turban de Timbo — celui-ci, il devait le garder toute sa vie.

Chaque année aussi, tous les grands chefs du Fouta se réunissaient à Fougoumba pendant trois mois pour parler des affaires du royaume. C'était comme un parlement annuel.

Fougoumba était un lieu saint. Même pendant les guerres, personne n'attaquait Fougoumba. C'était sacré.

Même aujourd'hui, la grande mosquée de Fougoumba existe encore. Et la maison où les nouveaux rois passaient leurs neuf jours de retraite spirituelle existe aussi. L'UNESCO (une organisation mondiale) considère Fougoumba comme très importante pour l'histoire africaine.`,
      
      adulte: `Selon la tradition, deux frères originaires du Madina (une région à l'est du Fouta) arrivèrent au Fouta-Djalon vers le XVIIe siècle. L'aîné, Fodé Séïri, choisit la région de Fougoumba. Le cadet, Fodé Séïdi, se dirigea vers Timbo. Tous deux étaient des savants musulmans, des marabouts versés dans le Coran et la loi islamique.

Fodé Séïri s'établit à Fougoumba et y fonda un centre d'enseignement coranique. Il devint rapidement respecté pour sa piété et son savoir. Ses enfants et petits-enfants continuèrent cette tradition. La famille de Fodé Séïri, les Séryankés, contrôla Fougoumba pendant des générations et a conservé une grande influence spirituelle jusqu'à aujourd'hui. D'ailleurs, les habitants de Fougoumba disent : « Il n'y a pas d'étrangers à Fougoumba » — ce qui signifie que Fougoumba appartient aux descendants de Fodé Séïri.

Fougoumba n'était pas la capitale politique du Fouta — c'était Timbo. Mais Fougoumba était la capitale religieuse. C'est là que se passaient les événements les plus importants de la vie spirituelle et politique du Fouta.

Premièrement, c'est à Fougoumba que les Almamys étaient couronnés. Quand un nouvel Almamy était élu, on l'amenait à Fougoumba pour une cérémonie de neuf jours. Chacun des neuf diwés (provinces) fournissait un turban blanc spécial. On enroulait tous les turbans autour de la tête du nouvel Almamy — c'était le symbole du pouvoir qu'on lui confiait. Puis on lui enlevait un turban chaque jour. Le neuvième jour, il lui restait juste le turban de Timbo — celui-ci, il devait le garder à vie comme symbole de son pouvoir spirituel.

Deuxièmement, Fougoumba était le siège du Tekun — le grand conseil des anciens. Ce conseil comprenait les personnalités religieuses et politiques les plus respectées du Fouta. Le Tekun était très puissant : c'était lui qui élisait l'Almamy, lui qui pouvait même le destituquer s'il commettait des erreurs graves. Sans le Tekun, l'Almamy n'était rien.

Troisièmement, chaque année, pendant trois mois, tous les chefs des neuf diwés se réunissaient à Fougoumba. Ils venaient évaluer ce qui s'était passé l'année précédente, discuter des problèmes communs et planifier l'année suivante. C'était comme un parlement annuel.

Fougoumba était un lieu de pèlerinage pour les musulmans du Fouta. La grande mosquée, construite en pierre et en bois, était le centre de la ville. Des marabouts y enseignaient le Coran à des centaines d'étudiants. On raconte que certains pèlerins venaient à pied de très loin — depuis le Sénégal ou le Mali — juste pour visiter Fougoumba et recevoir la bénédiction des savants.

Contrairement à Timbo, Fougoumba ne connut pas vraiment de crises militaires majeures. C'était un endroit protégé, sacré. Même les guerriers les plus féroces respectaient Fougoumba.

Aujourd'hui, les monuments de Fougoumba sont reconnus par l'UNESCO comme patrimoine du Fouta-Djalon. La case de couronnement existe toujours — c'est une petite construction ancienne où les Almamys passaient leurs neuf jours de retraite spirituelle. La grande mosquée tient toujours debout. Et les Séryankés, les descendants de Fodé Séïri, vivent toujours à Fougoumba et gardent les traditions.`,
    },
    
    facts: [
      {
        id: 'fg1',
        title: 'Fodé Séïri le Fondateur',
        description: 'Le savant qui établit Fougoumba',
        imageUrl: '/images/fouta/fg1.jpg',
        caption: 'Fodé Séïri enseignant le Coran',
      },
      {
        id: 'fg2',
        title: 'La Grande Mosquée',
        description: 'Centre religieux du Fouta',
        imageUrl: '/images/fouta/fg2.jpg',
        caption: 'La grande mosquée de Fougoumba',
      },
      {
        id: 'fg3',
        title: 'Le Couronnement',
        description: 'Cérémonie du nouvel Almamy',
        imageUrl: '/images/fouta/fg3.jpg',
        caption: 'Les neuf turbans enroulés',
      },
      {
        id: 'fg4',
        title: 'Le Tekun',
        description: 'Grand conseil des anciens à Fougoumba',
        imageUrl: '/images/fouta/fg4.jpg',
        caption: 'Les chefs réunis au conseil',
      },
      {
        id: 'fg5',
        title: 'La Retraite Spirituelle',
        description: '9 jours de retraite du nouvel Almamy',
        imageUrl: '/images/fouta/fg5.jpg',
        caption: 'L\'Almamy en retraite à Fougoumba',
      },
      {
        id: 'fg6',
        title: 'Les Pèlerins',
        description: 'Musulmans venus de loin visiter Fougoumba',
        imageUrl: '/images/fouta/fg6.jpg',
        caption: 'Caravane de pèlerins arrivant à Fougoumba',
      },
      {
        id: 'fg7',
        title: 'Patrimoine UNESCO',
        description: 'Fougoumba reconnue patrimoine africain',
        imageUrl: '/images/fouta/fg7.jpg',
        caption: 'Monuments anciens de Fougoumba',
      },
    ],
    
    imageCount: 7,
    role: 'Capitale religieuse — Couronnement & Conseil',
  },

  // ==================== 3. LABÉ ====================
  {
    id: 'labe',
    name: 'Labé',
    founder: 'Karamoko Alfa mö Labé',
    years: '~1672–1772',
    
    versions: {
      enfant: `Au Macina (loin au Mali), il y avait un savant très respecté appelé Karamoko Alfa mö Labé (littéralement « Karamoko Alfa du Labé »). Il savait tout du Coran, mais il était aussi un guerrier courageux.

Karamoko Alfa vint au Fouta-Djalon pour combattre aux côtés des autres marabouts contre les animistes. Il fut l'un des tout premiers à ouvrir une grande école coranique au Fouta. Puis, il devint l'un des chefs militaires les plus respectés de la djihad.

Après la victoire en 1725, Karamoko Alfa garda le contrôle de la région de Labé — une énorme province riche, presque la moitié du Fouta ! Il y fonda sa base de pouvoir.

Labé était spéciale. Ce n'était pas juste une province normale. Labé avait des pouvoirs très particuliers :

Premièrement, personne ne pouvait devenir Almamy (roi du Fouta) sans l'accord de Labé. C'était très important !

Deuxièmement, c'était Labé qui gardait la tabala — le tambour royal. Ce n'était pas un simple tambour. Quand la tabala sonnait, cela signifiait que le roi prenait une décision très importante. Labé gardait ce tambour sacré.

Troisièmement, c'était Labé qui décidait si le Fouta irait à la guerre. Aucune bataille n'était possible sans l'accord du chef de Labé !

Karamoko Alfa mö Labé règna pendant environ soixante ans sur le Labé. Il devint une figure légendaire. Il mourut vers 1772, à quatre-vingts ans. On l'a enterré dans la grande mosquée de Labé, à un endroit qu'il avait choisi lui-même avant sa mort.

Après lui, sa famille continua à diriger Labé. L'un de ses descendants les plus célèbres fut Alfa Yaya, qui devint chef du Labé à la fin du XIXe siècle. Alfa Yaya fut tellement puissant qu'il contrôlait presque la moitié du Fouta.

Même aujourd'hui, le Labé est une région importante et puissante de la Guinée.`,
      
      adulte: `Karamoko Alfa mö Labé (~1672–1772) était un marabout savant et guerrier. Né au Macina (au Mali actuel), il émigra vers le Fouta-Djalon et s'établit dans la région montagneuse du Labé.

Dès sa jeunesse, il fut un pionnier de la guerre sainte. C'est lui qui ouvrit la première école coranique majeure du Fouta et qui recruta les premiers disciples pour la djihad contre les animistes. Il n'était pas seulement un savant — il était aussi un combattant courageux et stratégique.

Karamoko Alfa mö Labé créa rapidement une base de pouvoir au Labé. Ses enfants hériteront de sa position et sa famille, les Kaliduyaaɓe, régneront sur le Labé pendant des générations. Le Labé devint LA province majeure du Fouta — la plus grande, la plus puissante, et la plus difficile à contrôler.

Le Labé avait un rôle très particulier dans la confédération. Il faisait partie du « carré d'intronisation » de l'Almamy — c'est-à-dire qu'aucun Almamy ne pouvait être élu ou couronné sans l'accord du chef du Labé. Le chef du Labé était tellement important qu'il s'asseyait directement auprès de l'Almamy et lui donnait des conseils sur les questions militaires les plus graves.

Deuxièmement, c'est le Labé qui fournissait la tabala — le tambour royal, le plus important insigne du pouvoir de l'Almamy. La tabala n'était pas un simple tambour de musique. C'était un symbole : quand on voyait la tabala retentir, cela signifiait que l'Almamy prenait une décision politique majeure. C'est le Labé qui gardait la tabala quand l'Almamy n'en avait pas besoin.

Troisièmement, c'était le Labé qui prenait la décision de déclarer la guerre pour toute la confédération. Aucune guerre n'était possible sans l'accord du chef du Labé. Et c'était le chef du Labé qui organisait le recrutement des guerriers et la stratégie militaire.

Le Labé occupait presque la moitié du territoire du Fouta. C'était une région montagneuse, riche en pâturages et en ressources. Les éleveurs de bétail peuls trouvaient là les meilleures terres. Le Labé était aussi un centre commercial important — les caravanes qui traversaient le Fouta passaient souvent par le Labé.

Karamoko Alfa mö Labé régna sur le Labé pendant environ soixante ans. Il devint une figure légendaire. Selon la tradition, c'est lui qui proposa le premier à ses compagnons marabouts de nommer Ibrahima Sambégou comme Almamy de tout le Fouta. Ils étaient amis et égaux en pouvoir, mais Karamoko Alfa vit que Sambégou était plus diplomatique et plus universel dans son approche. Alors il dit à Sambégou : « Tu seras le chef suprême. Moi, je garderai le Labé. »

Karamoko Alfa mö Labé mourut en 1772–73, à l'âge de quatre-vingts ans. On le considérait comme un saint. Il fut inhumé à Labé, dans la grande mosquée, à un endroit qu'il avait choisi lui-même de son vivant.

Après Karamoko Alfa mö Labé, le Labé continua à être gouverné par ses descendants. Le plus célèbre fut Alfa Yaya (1892–début XXe siècle) — le dernier grand chef du Labé avant la colonisation. Il contrôla le Labé, Kadé et le N'Gabou (en Guinée-Bissau). Il devint allié des Français, ce qui permit au Labé de conserver une grande autonomie même sous domination coloniale.

Le Labé reste une région majeure de la Guinée actuelle. C'est toujours un centre important du Fouta. Les descendants de Karamoko Alfa mö Labé gardent un prestige particulier dans la région. Le Labé représente la puissance militaire et l'autonomie — des valeurs que le peuple peul n'a jamais oubliées.`,
    },
    
    facts: [
      {
        id: 'lb1',
        title: 'Karamoko Alfa mö Labé',
        description: 'Le fondateur guerrier et savant',
        imageUrl: '/images/fouta/lb1.jpg',
        caption: 'Karamoko Alfa mö Labé à cheval',
      },
      {
        id: 'lb2',
        title: 'L\'École Coranique du Labé',
        description: 'Centre d\'apprentissage majeur',
        imageUrl: '/images/fouta/lb2.jpg',
        caption: 'Étudiants apprenant le Coran au Labé',
      },
      {
        id: 'lb3',
        title: 'La Tabala Royale',
        description: 'Le tambour du pouvoir gardé au Labé',
        imageUrl: '/images/fouta/lb3.jpg',
        caption: 'La tabala, symbole du pouvoir',
      },
      {
        id: 'lb4',
        title: 'L\'Armée du Labé',
        description: 'Guerriers et chevaux du Labé',
        imageUrl: '/images/fouta/lb4.jpg',
        caption: 'Guerriers du Labé en formation',
      },
      {
        id: 'lb5',
        title: 'Les Pâturages du Labé',
        description: 'Richesses agricoles et pastorales',
        imageUrl: '/images/fouta/lb5.jpg',
        caption: 'Bergers et troupeaux au Labé',
      },
      {
        id: 'lb6',
        title: 'Les Routes Commerciales',
        description: 'Caravanes traversant le Labé',
        imageUrl: '/images/fouta/lb6.jpg',
        caption: 'Marchands et caravanes au Labé',
      },
      {
        id: 'lb7',
        title: 'La Mosquée du Labé',
        description: 'Lieu de retraite et de sagesse',
        imageUrl: '/images/fouta/lb7.jpg',
        caption: 'La grande mosquée du Labé',
      },
      {
        id: 'lb8',
        title: 'L\'Héritage du Labé',
        description: 'Alfa Yaya et les derniers chefs',
        imageUrl: '/images/fouta/lb8.jpg',
        caption: 'Alfa Yaya, dernier grand chef',
      },
    ],
    
    imageCount: 8,
    role: 'Province militaire — Intronisation & Tabala',
  },

  // [CONTINUER AVEC 4–9 : BHOURIYA, TIMBI, KÉBALI, KOLLADÉ, KOÏN, FODÉ-HADJI]
  // Structure identique — j'ajoute les versions courtes ici
  
  {
    id: 'bhouriya',
    name: 'Bhouriya',
    founder: 'Alfa Issaga',
    years: '?',
    versions: {
      enfant: `Imagine que le roi du Fouta possède sept objets magiques très précieux. Un sceptre royal, un Coran sacré, un cheval, un sabre, un tambour, un voile blanc et un griot. Ces sept trésors ne lui appartiennent pas vraiment — ils appartiennent à tout le Fouta !

Qui garde ces trésors ? C'est la province de Bhouriya.

Il y avait un chef important appelé Alfa Issaga qui garda ces trésors. Alfa Issaga était le frère d'un grand guerrier et un combattant courageux lui-même.

Les sept trésors du Fouta :
1. Le spectre (le sceptre royal)
2. Le voile blanc (symbole de pureté)
3. Le Coran
4. Le cheval (symbole de puissance)
5. La tabala (le tambour royal)
6. Le sabre
7. Le griot (celui qui raconte l'histoire)

Ces objets n'étaient sortis que pour des cérémonies très importantes. Quand un nouveau roi était choisi, on amenait tous ces trésors pour la cérémonie. C'était magnifique !

De plus, Bhouriya confirmait le nouveau roi. Avant que le roi soit couronné à Fougoumba, on devait d'abord l'amener à Bhouriya pour que le chef de Bhouriya dise : « Oui, c'est le bon roi. Tu as le droit de régner. » Sans l'accord de Bhouriya, pas de couronnement !

Bhouriya n'était pas riche comme Labé ou puissante comme Timbo. Mais elle avait un prestige immense car elle gardait les symboles sacrés du royaume.`,
      adulte: `Alfa Issaga était le frère d'Alfa Amadou, un des grands marabouts combattants de la djihad. La famille d'Alfa Issaga était originaire du Macina (Mali actuel) et s'était établie au Fouta pour participer à la guerre sainte.

Bhouriya avait le rôle le plus symbolique et le plus précis de tous les diwés. Bhouriya était responsable de la safeguarde et de la confirmation des sept insignes du pouvoir de l'Almamy : le spectre (sceptre royal), le voile blanc, le Coran, le cheval, la tabala (tambour royal), le sabre et le griot. Ces sept objets n'appartenaient pas à l'Almamy personnellement. Ils appartenaient à la confédération. Bhouriya les gardait et les sortait seulement lors de cérémonies officielles : couronnement d'un nouvel Almamy, guerres majeures, grands jugements.

De plus, Bhouriya confirmait la candidature du nouvel Almamy avant le couronnement à Fougoumba. Après élection du conseil, on devait amener le candidat à Bhouriya pour que le chef de Bhouriya examine sa légitimité et confirme que c'était vraiment un descendant de la bonne famille et que le choix était conforme à la tradition.

Bhouriya était moins connue que Timbo ou Fougoumba. C'était une province de montagne, moins peuplée, moins riche commercialement. Mais elle avait un prestige immense car elle gardait les symboles sacrés. Le chef de Bhouriya portait le titre de Thierno (« maître » en pular) et non Alfa. Ce titre reflétait son rôle plus spirituel que politique.

Après la colonisation, Bhouriya perdit son rôle politique, mais les habitants gardèrent longtemps la mémoire des sept insignes. Certains objets furent vendus, d'autres cachés. Aujourd'hui, l'UNESCO s'intéresse à Bhouriya comme lieu de patrimoine culturel immatériel du Fouta.`,
    },
    facts: [
      { id: 'bh1', title: 'Les Sept Insignes', description: 'Les trésors du pouvoir du Fouta', imageUrl: '/images/fouta/bh1.jpg', caption: 'Les sept objets sacrés' },
      { id: 'bh2', title: 'Le Sceptre Royal', description: 'Symbole d\'autorité absolue', imageUrl: '/images/fouta/bh2.jpg', caption: 'Le sceptre du roi' },
      { id: 'bh3', title: 'Le Voile Blanc', description: 'Pureté spirituelle', imageUrl: '/images/fouta/bh3.jpg', caption: 'Le voile blanc sacré' },
      { id: 'bh4', title: 'Le Coran', description: 'La loi islamique', imageUrl: '/images/fouta/bh4.jpg', caption: 'Le Coran du Fouta' },
      { id: 'bh5', title: 'Le Griot', description: 'Transmetteur de parole et mémoire', imageUrl: '/images/fouta/bh5.jpg', caption: 'Le griot porteur de tradition' },
      { id: 'bh6', title: 'Patrimoine UNESCO', description: 'Bhouriya reconnu comme patrimoine', imageUrl: '/images/fouta/bh6.jpg', caption: 'Bhouriya, mémoire culturelle' },
    ],
    imageCount: 6,
    role: 'Gardienne des insignes du pouvoir',
  },

  {
    id: 'timbi-touni',
    name: 'Timbi-Touni',
    founder: 'Thierno Souleymane',
    years: '?',
    versions: {
      enfant: `Imagine une grande réunion où tous les chefs du Fouta viennent parler des affaires importantes du royaume. Qui commence la réunion ? Qui dit « Commençons ! » et établit ce qu'on va discuter ?

C'est le chef de Timbi-Touni !

Timbi-Touni avait un rôle très spécial : c'était le chef qui ouvrait toutes les séances du congrès du Fouta.

Le fondateur de Timbi-Touni s'appelait Thierno Souleymane. C'était un guerrier courageux et un marabout respecté. Il se distingua beaucoup lors de la bataille de Talansan en 1725 et lors des campagnes qui suivirent.

Thierno Souleymane était connu pour sa justice et son intégrité. Un jour, un autre marabout nommé Thierno Ciré devait diriger le Timbi-Touni, mais il n'avait pas bien fait son travail. Thierno Souleymane lui dit clairement devant tout le monde que c'était injuste. Le congrès fut d'accord avec Souleymane, et c'est lui qui devint le chef de Timbi-Touni.

Chaque année, lors du grand rassemblement à Fougoumba, tous les chefs se réunissaient. Et c'est le chef de Timbi-Touni qui commençait la réunion. Il prononçait les premières paroles, il établissait l'ordre du jour, il rappelait à chacun de respecter les autres et d'écouter les différents points de vue.

C'était une fonction très importante — un peu comme un arbitre qui fait respecter les règles d'une grande discussion.

Timbi-Touni était aussi un centre intellectuel du Fouta. Beaucoup de savants y vivaient. C'était un lieu où les grandes décisions du royaume se préparaient, dans la réflexion et la sagesse.`,
      adulte: `Thierno Souleymane était l'un des marabouts combattants importants de la djihad. C'est lui qui se distingua particulièrement lors de la bataille de Talansan en 1725 et lors des campagnes qui suivirent pour pacifier le Fouta.

Après la victoire, on lui confia la province de Timbi-Touni — une région montagneuse du nord du Fouta. Thierno Souleymane devint une figure d'autorité à Timbi-Touni et un conseiller respecté de l'Almamy.

Un événement nous montre son caractère : lors du congrès de 1743, un autre marabout nommé Thierno Ciré avait été désigné comme combattant du Timbi-Touni, mais il n'avait pas mené sa campagne correctement. Thierno Souleymane intervint avec autorité auprès du congrès, dénonça Thierno Ciré, et le congrès refusa sa confirmation. Thierno Souleymane fut alors confirmé comme chef de Timbi-Touni. Cela montre que Souleymane était respecté pour son intégrité et sa justice.

Timbi-Touni avait un rôle protocolaire mais crucial : c'était le chef de Timbi-Touni qui ouvrait toutes les séances du congrès de la confédération. Chaque année, lors du grand rassemblement à Fougoumba, tous les chefs se réunissaient pour discuter des affaires du Fouta. C'est le chef de Timbi-Touni qui prononçait les paroles d'ouverture, qui établissait l'ordre du jour, qui appelait chacun à prendre la parole dans le respect. C'était une fonction de prestige et de responsabilité.

Comme Bhouriya et Koïn, Timbi-Touni utilisait le titre de Thierno plutôt qu'Alfa.

Timbi-Touni est devenue célèbre dans l'histoire du Fouta car c'est là que se tenaient souvent les grands congrès. Le congrès de 1743, qui établit les neuf diwés, s'est tenu chez le doyen des Karamokobés de Timbi-Touni.

C'était une région de savants. Beaucoup de marabouts respectés vivaient à Timbi-Touni ou à proximité. La région était un centre intellectuel du Fouta, où les grandes décisions se prenaient après de longues discussions.

Timbi-Touni reste un lieu important de mémoire du Fouta. Même après la colonisation, les habitants gardent la tradition de se réunir pour discuter des affaires importantes — une continuation de l'ancienne fonction d'«ouvreur de séances».`,
    },
    facts: [
      { id: 'tb1', title: 'Thierno Souleymane', description: 'Le fondateur et sage', imageUrl: '/images/fouta/tb1.jpg', caption: 'Thierno Souleymane en conseil' },
      { id: 'tb2', title: 'L\'Ouverture du Congrès', description: 'Les premières paroles', imageUrl: '/images/fouta/tb2.jpg', caption: 'Ouverture du grand congrès' },
      { id: 'tb3', title: 'Le Grand Congrès', description: 'Réunion des neuf diwés', imageUrl: '/images/fouta/tb3.jpg', caption: 'Les chefs réunis en congrès' },
      { id: 'tb4', title: 'Centre d\'Enseignement', description: 'Savants et marabouts', imageUrl: '/images/fouta/tb4.jpg', caption: 'École de savants à Timbi-Touni' },
      { id: 'tb5', title: 'Débats et Décisions', description: 'Discussions importantes', imageUrl: '/images/fouta/tb5.jpg', caption: 'Les chefs en débat' },
      { id: 'tb6', title: 'Mémoire du Fouta', description: 'Tradition qui perdure', imageUrl: '/images/fouta/tb6.jpg', caption: 'Timbi-Touni, lieu de sagesse' },
    ],
    imageCount: 6,
    role: 'Ouverture des séances du congrès',
  },

  {
    id: 'kebali',
    name: 'Kébali',
    founder: 'Alfa Moussa',
    years: '?',
    versions: {
      enfant: `Si Timbi-Touni ouvre les réunions du Fouta, qui les ferme ? Qui dit « Voilà ce qu'on a décidé ensemble » et proclame les résolutions ?

C'est Kébali !

Kébali est la province jumelle de Timbi-Touni. Timbi ouvre, Kébali ferme. C'est comme le début et la fin d'une belle histoire.

Le fondateur de Kébali s'appelait Alfa Moussa. C'était un brave guerrier qui se battit aux côtés de Karamoko Alfa pendant la djihad. Alfa Moussa était connu pour sa bravoure et sa vaillance.

Karamoko Alfa lui-même reconnut le courage d'Alfa Moussa et proposa au congrès de créer une nouvelle province pour lui. C'était un grand honneur ! On prit des territoires de deux autres provinces (Fougoumba et Kolladé) pour créer le diwal de Kébali. Cela signifiait que Kébali n'était pas très grande — mais elle avait beaucoup de prestige.

Le rôle de Kébali : À la fin de chaque réunion annuelle du Fouta, c'est le chef de Kébali qui parlait le dernier. Il résumait ce qui avait été décidé, il vérifait que tout le monde était d'accord, et il prononçait une bénédiction sur les résolutions du royaume.

C'était une fonction importante : Kébali assurait que toutes les voix avaient été entendues et que les décisions prenaient en compte la sagesse collective.

Kébali n'avait pas de grandes guerres célèbres. C'était une province d'administration régulière, de justice, de gestion des ressources. L'armée de Kébali surveillait les camps de troupes et gardait les bagages lors des campagnes militaires. C'était moins prestigieux, mais c'était très important — sans logistique, aucune armée ne peut fonctionner.`,
      adulte: `Alfa Moussa était un marabout combattant du Fouta-Djalon. Il se distingua particulièrement par sa bravoure et sa vaillance lors des combats contre les Djallonké et les Poulis animistes.

En reconnaissance de son courage, Karamoko Alfa lui-même proposa de créer une nouvelle province pour Alfa Moussa. On prit des territoires détachés de deux provinces existantes (Fougoumba et Kolladé) pour créer le diwal de Kébali. C'était un honneur extraordinaire — créer une nouvelle province en faveur d'un chef.

Cependant, créer une nouvelle province pour Alfa Moussa signifiait que l'armée de Kébali serait plus petite que celle d'autres provinces. C'était volontaire — Kébali n'était pas destinée à être une province militaire majeure, mais plutôt une province d'administration et de sagesse.

Kébali avait un rôle symétrique et complémentaire à celui de Timbi-Touni. Si Timbi-Touni ouvrait les séances du congrès, c'était Kébali qui les clôturait.

Après des jours de discussions, de débats et de prises de décision, c'est le chef de Kébali qui prononçait les paroles finales, qui résumait ce qui avait été décidé et qui bénissait les résolutions. C'était une fonction importante : Kébali assurait que toutes les voix avaient été entendues et que les décisions prenaient en compte la sagesse collective.

Le chef de Kébali portait le titre d'Alfa — comme les chefs des provinces plus politiques.

Kébali n'a pas de grandes guerres célèbres, pas de crises majeures. C'était une province d'administration régulière, de justice, de gestion des ressources. L'armée de Kébali était surtout responsable de surveiller les camps de troupes et de garder les bagages lors des campagnes militaires. Cela peut sembler moins prestigieux, mais c'était crucial — sans ces tâches de logistique, aucune armée ne peut fonctionner.

Après la mort d'Alfa Moussa, son fils Tierno Amadou prit sa place. Cette alternation père-fils se continua pendant plusieurs générations. Les descendants d'Alfa Moussa gardèrent le respect du Fouta et maintenrent le rôle protocolaire de Kébali jusqu'à la fin du Imamat en 1896.`,
    },
    facts: [
      { id: 'kb1', title: 'Alfa Moussa le Brave', description: 'Le fondateur courageux', imageUrl: '/images/fouta/kb1.jpg', caption: 'Alfa Moussa en bataille' },
      { id: 'kb2', title: 'La Clôture du Congrès', description: 'Les paroles finales', imageUrl: '/images/fouta/kb2.jpg', caption: 'Clôture solennelle du congrès' },
      { id: 'kb3', title: 'La Sagesse Collective', description: 'Toutes les voix entendues', imageUrl: '/images/fouta/kb3.jpg', caption: 'Assemblée écoutant les résolutions' },
      { id: 'kb4', title: 'Logistique Militaire', description: 'Bagages et camps de troupes', imageUrl: '/images/fouta/kb4.jpg', caption: 'Organisation logistique' },
      { id: 'kb5', title: 'Bénédiction des Résolutions', description: 'Finalisation des décisions', imageUrl: '/images/fouta/kb5.jpg', caption: 'Bénédiction des décisions' },
    ],
    imageCount: 5,
    role: 'Clôture des séances du congrès',
  },

  {
    id: 'kollade',
    name: 'Kolladé',
    founder: 'Thierno Kollade',
    years: '?',
    versions: {
      enfant: `Il y a un proverbe africain : « Si tu fuis l'injustice, cherche refuge. » Au Fouta, il y avait une province où les gens pouvaient se réfugier sans crainte. Cette province s'appelait Kolladé.

Le fondateur de Kolladé s'appelait Thierno Kollade. On ne sait pas beaucoup de détails sur sa vie, mais nous savons qu'il était l'un des chefs importants de la fondation du Fouta en 1725.

Chose intéressante : Thierno Kollade n'était pas d'accord pour que Karamoko Alfa devienne le chef suprême du Fouta. Il aurait préféré un système où chaque chef aurait plus de pouvoir. Mais après la décision du congrès, il accepta son rôle.

Le rôle spécial de Kolladé : Kolladé était une province d'asile politique. Si quelqu'un était menacé de mort pour ses convictions religieuses, s'il fuyait une vendetta ou une injustice, il pouvait se réfugier à Kolladé. Le chef de Kolladé était tenu de le protéger.

Même l'Almamy (le roi) ne pouvait pas entrer à Kolladé pour arrêter quelqu'un ! C'était sacré.

Kolladé gardait aussi une certaine neutralité politique. Elle n'était pas clairement alignée avec l'une ou l'autre des deux familles royales (Alphaya ou Soriya). Cela renforçait son rôle de refuge et de médiateur.

Kolladé était riche en eau, en ressources agricoles, en pâturages. La population était mélangée : Peuls musulmans, Diallonkés convertis, quelques Malinkés.

Le chef de Kolladé portait le titre d'Alfa et siégeait dans le grand conseil avec autorité.

Même après la colonisation, la tradition du refuge persista longtemps. Encore aujourd'hui, Kolladé est connue comme un lieu de paix.`,
      adulte: `Peu d'informations précises nous sont parvenues sur Thierno Kollade (aussi écrit T. Kollade), le fondateur de Kolladé. Ce que nous savons, c'est qu'il était l'un des chefs importants lors de la fondation de la confédération en 1725.

Théno Kollade fut l'un des rares opposants à l'élection de Karamoko Alfa comme Almamy suprême. Selon les sources, lors de la réunion des Hirlabé (les chefs) en 1725, Thierno Kollade était « parmi les seuls opposants » à ce choix. Il préférait peut-être un système encore plus fédéraliste, où chaque chef aurait plus de pouvoir.

Cependant, après la décision du congrès, Thierno Kollade accepta son rôle et devint le chef de la province de Kolladé. Le siège de Kolladé était Kankalabé, une ville importante de la région.

Kolladé avait un rôle très particulier et humanitaire dans la confédération : c'était une province d'asile pour les réfugiés politiques, religieux et autres.

Si un homme était menacé de mort pour ses convictions religieuses, s'il fuyait une vendetta ou une injustice, il pouvait se réfugier à Kolladé. Le chef de Kolladé était tenu de le protéger. Même l'Almamy ne pouvait pas entrer à Kolladé pour arrêter quelqu'un qui s'y était réfugié.

C'était une forme de droit d'asile politique avant les termes modernes. Kolladé était un lieu de paix relative, même pendant les guerres civiles entre Alphaya et Soriya.

De plus, Kolladé gardait une certaine neutralité politique. Elle n'était pas clairement alignée avec l'une ou l'autre faction. Cela renforçait son rôle de médiateur et de refuge.

Kolladé était une région de montagnes et de vallées. C'était une région riche en eau, en ressources agricoles, en pâturages. La population était mélangée : Peuls musulmans, Diallonkés convertis à l'islam, quelques familles de Malinkés.

Le chef de Kolladé portait le titre d'Alfa et siégeait dans le grand conseil du Fouta avec autorité.

Le rôle humanitaire de Kolladé disparut avec la colonisation française, mais la tradition du refuge persista longtemps. Les habitants de Kolladé conservèrent la mémoire d'une province de paix et de protection. Aujourd'hui encore, Kankalabé est une ville paisible du Fouta, loin du tumulte.`,
    },
    facts: [
      { id: 'kl1', title: 'Thierno Kollade', description: 'Le chef opposant', imageUrl: '/images/fouta/kl1.jpg', caption: 'Thierno Kollade au congrès' },
      { id: 'kl2', title: 'Le Refuge Politique', description: 'Asile pour persécutés', imageUrl: '/images/fouta/kl2.jpg', caption: 'Réfugiés trouvant asile à Kolladé' },
      { id: 'kl3', title: 'La Neutralité', description: 'Médiateur entre factions', imageUrl: '/images/fouta/kl3.jpg', caption: 'Kolladé, terre neutre' },
      { id: 'kl4', title: 'Kankalabé la Paisible', description: 'Capitale de Kolladé', imageUrl: '/images/fouta/kl4.jpg', caption: 'Kankalabé, refuge de paix' },
      { id: 'kl5', title: 'Mémoire d\'Asile', description: 'Tradition qui perdure', imageUrl: '/images/fouta/kl5.jpg', caption: 'Kolladé, trésor de paix' },
    ],
    imageCount: 5,
    role: 'Province d\'asile politique & neutralité',
  },

  {
    id: 'koin',
    name: 'Koïn',
    founder: 'Thierno Saliou Balla',
    years: '?',
    versions: {
      enfant: `Dans toute armée, il y a un général qui pense à la stratégie, qui dit comment attaquer, comment se défendre, comment utiliser le terrain pour gagner. Au Fouta, c'était le chef de Koïn qui avait ce rôle !

Le fondateur de Koïn s'appelait Thierno Saliou Balla. C'était un marabout d'exception.

Saliou Balla naquit dans une région qui allait devenir Kolladé, dans une famille de savants musulmans. Mais sa jeunesse connut une tragédie : il fut impliqué dans l'assassinat d'un de ses cousins nommé Ibrahima Bâ. Terrifié, il s'enfuit très loin du Fouta.

Saliou Balla se réfugia à Tombouctou — la grande ville sainte de l'islam en Afrique de l'Ouest. Là, pendant de longues années, il continua ses études. Il devint un très grand savant, respecté partout.

Sur le chemin du retour, Saliou Balla passa par le Macina et convertit les habitants à l'islam par sa prédication persuasive.

Quand il rentra au Fouta, il devint l'un des chefs militaires les plus importants de la guerre sainte.

Le rôle de Koïn : Koïn était responsable de la stratégie militaire de tout le Fouta. Cela signifiait que dans chaque grande guerre, c'est le chef de Koïn qui élaborait le plan d'attaque, qui organisait le mouvement des troupes, qui prenait les décisions tactiques. C'était comme le général en chef.

Thierno Saliou Balla était très respecté pour son intelligence militaire. On raconte que ses stratégies étaient remarquablement efficaces — il savait utiliser le terrain montagneux du Fouta à son avantage.

Le chef de Koïn portait le titre de Thierno — un titre de sagesse et d'autorité spirituelle, car la stratégie était considérée comme un art qui demandait intelligence, sagesse et justice.

Koïn était une région de combattants. Beaucoup de jeunes hommes s'y enrôlaient. Koïn fournissait aussi les meilleurs chevaux et armes.`,
      adulte: `Thierno Saliou Balla était un marabout de grande envergure, originaire du clan des Kulunnaaɓe (une famille peule majeure). Il naquit à Tioro, dans une région qui allait devenir Kolladé, dans une famille de savants musulmans.

Saliou Balla reçut une excellente éducation coranique de son père. Mais sa jeunesse fut marquée par une tragédie : il fut impliqué dans l'assassinat d'un de ses cousins nommé Ibrahima Bâ. Terrifié par les conséquences, il s'enfuit loin du Fouta.

Saliou Balla se réfugia à Tombouctou — la grande ville sainte de l'islam en Afrique de l'Ouest. Là, pendant de longues années, il continua ses études islamiques auprès des plus grands marabouts. Il devint un savant très respecté.

Sur le chemin du retour vers le Fouta, Saliou Balla passa par le Macina et le Diaba (des régions du Mali actuel). Partout, ses connaissances et sa piété lui gagnèrent du respect. Quand il arriva à Satadougou (à l'est du Fouta), il commença à convertir les habitants à l'islam par sa prédication persuasive.

Finalement, Saliou Balla rentra au Fouta et devint l'un des chefs militaires les plus importants de la djihad contre les animistes.

Koïn avait le rôle le plus militaire et stratégique de tous les diwés. Le chef de Koïn était responsable de la stratégie militaire de toute la confédération.

Cela signifiait que dans chaque guerre majeure, c'est le chef de Koïn qui élaborait le plan d'attaque, qui organisait le mouvement des troupes, qui prenait les décisions tactiques. Il était le général en chef, sous l'autorité nominale de l'Almamy.

Thierno Saliou Balla était particulièrement respecté pour son intelligence militaire. On raconte que ses stratégies étaient remarquablement efficaces — il savait utiliser le terrain montagneux du Fouta à son avantage contre des ennemis techniquement plus forts.

Le chef de Koïn portait le titre de Thierno — un titre de sagesse et d'autorité spirituelle, car la stratégie était considérée comme un art qui demandait non seulement l'intelligence, mais aussi la sagesse et la justice.

Koïn était une région de combattants. Beaucoup de jeunes hommes venus de Koïn s'enrôlaient dans l'armée de la confédération. Koïn fournissait aussi les meilleurs chevaux et armes — une ressource vitale pour la guerre.

Mais Koïn n'était pas qu'une région de guerre. C'était aussi un centre d'apprentissage militaire et moral. Les jeunes guerriers de Koïn apprenaient non seulement à combattre, mais aussi à obéir à un code d'honneur guerrier.

Koïn fut impliquée dans toutes les grandes guerres du Fouta, notamment la guerre contre le Sankaran (1762–1776) et les luttes civiles entre Alphaya et Soriya au XIXe siècle. Chaque fois, le chef de Koïn était au cœur de la stratégie.

Après la colonisation française, Koïn perdit son rôle militaire, mais conserva un prestige guerrier. Les descendants de Thierno Saliou Balla gardèrent longtemps une position d'autorité dans la région de Kindia (l'actuelle Koïn).`,
    },
    facts: [
      { id: 'kn1', title: 'Thierno Saliou Balla', description: 'Le général stratège', imageUrl: '/images/fouta/kn1.jpg', caption: 'Thierno Saliou Balla à cheval' },
      { id: 'kn2', title: 'La Fuite à Tombouctou', description: 'Études et retraite', imageUrl: '/images/fouta/kn2.jpg', caption: 'Saliou Balla en quête spirituelle' },
      { id: 'kn3', title: 'Stratégie Militaire', description: 'Plans d\'attaque brillants', imageUrl: '/images/fouta/kn3.jpg', caption: 'Général élaborant une stratégie' },
      { id: 'kn4', title: 'L\'Armée de Koïn', description: 'Guerriers et chevaux', imageUrl: '/images/fouta/kn4.jpg', caption: 'Cavaliers de Koïn en formation' },
      { id: 'kn5', title: 'Code d\'Honneur', description: 'Sagesse guerrière', imageUrl: '/images/fouta/kn5.jpg', caption: 'Guerriers apprenant l\'honneur' },
      { id: 'kn6', title: 'Guerres Majeures', description: 'Du Sankaran aux crises civiles', imageUrl: '/images/fouta/kn6.jpg', caption: 'Bataille majeure du Fouta' },
    ],
    imageCount: 6,
    role: 'Stratégie militaire de la confédération',
  },

  {
    id: 'fode-hadji',
    name: 'Fodé-Hadji',
    founder: 'Ibrahima Sory',
    years: '?',
    versions: {
      enfant: `Fodé-Hadji était un peu différente des autres provinces du Fouta. Ce n'était pas une province normale — c'était une annexe de Timbo, la capitale.

Fodé-Hadji fut créée lors du congrès de 1743 en même temps que les autres provinces, mais elle fut confié à Ibrahima Sory, le cousin du premier Almamy. Pourquoi ? Parce qu'Ibrahima Sory était un homme de confiance qu'on voulait garder près de la capitale.

La localisation particulière : Fodé-Hadji était situé loin de Timbo, à l'est, au-delà du fleuve Bafing. Ce n'était pas vraiment le cœur du Fouta peul et montagneux. C'était une région différente, avec Malinkés musulmans et quelques Peuls.

Cette région différente avait besoin d'un traitement administratif spécial. C'est pourquoi Fodé-Hadji resta toujours une annexe de Timbo, une extension du pouvoir central, plutôt qu'une province autonome comme les autres.

Le rôle de Fodé-Hadji : Fodé-Hadji ne avait pas de rôle politique spécifique comme les autres provinces. Mais elle était importante car elle contrôlait les routes vers les autres royaumes — le Niger, le Kangaba. C'était un point stratégique pour le commerce et la diplomatie.

De plus, comme annexe directe de Timbo, Fodé-Hadji servait de base militaire pour l'Almamy. Les troupes envoyées par le roi y étaient basées. Les impôts collectés y étaient stockés.

Les Défis : Au XIXe siècle, Fodé-Hadji devint un foyer de dissidence religieuse. Un marabout puissant nommé Mamadou Diouhé s'y retira et fonda un mouvement appelé les Houbbou — des croyants qui refusaient la domination politique des Almamys. Les Houbbou s'opposèrent au roi pendant des décennies. Ce conflit affaiblit beaucoup le Fouta.`,
      adulte: `Fodé-Hadji était techniquement une province, mais elle occupait une position très particulière : c'était une annexe de Timbo, la capitale politique.

Fodé-Hadji fut créée lors du congrès de 1743, en même temps que les neuf diwés furent officiellement confirmées. Elle fut confié à Ibrahima Sory, qui était le cousin d'Alfa Ibrahima Sambégou (le premier Almamy).

Ibrahima Sory était un homme de confiance de sa famille — un Sediyanke, comme Karamoko Alfa. C'est pourquoi la nouvelle province, Fodé-Hadji, lui fut confiée provisoirement.

Fodé-Hadji était situé à l'est de Timbo, au-delà du fleuve Bafing. C'était une région géographiquement distincte du cœur du Fouta. La population n'était pas majoritairement peule : elle était composée de Malinkés musulmans et de quelques Peuls.

Cette région différente exigeait un traitement administratif spécial. C'est pourquoi Fodé-Hadji resta toujours une annexe de Timbo, plutôt qu'une véritable province autonome comme les huit autres.

Fodé-Hadji n'avait pas de rôle politique spécifique comme les autres diwés. Mais elle était importante car elle représentait l'expansion du Fouta au-delà de ses montagnes natales.

Fodé-Hadji controlait les routes vers le Niger et le royaume du Kangaba. C'était un point stratégique pour le commerce et la diplomatie avec les royaumes voisins.

De plus, comme annexe directe de Timbo, Fodé-Hadji servait de base militaire et administrative pour l'Almamy. Les troupes envoyées par l'Almamy y étaient basées. Les tributs collectés y étaient stockés.

Fodé-Hadji connut des crises régulièrement. Au XIXe siècle, elle devint un foyer de dissidence religieuse. Un marabout puissant nommé Mamadou Diouhé s'y retira et fonda un mouvement appelé les Houbbou — des croyants qui refusaient la domination politique des Almamys et qui voulaient un islam plus pur.

Les Houbbou s'opposèrent à l'Almamy de Timbo pendant des décennies. Ce conflit affaiblit considérablement l'autorité du Fouta et contribua à sa vulnérabilité face à la colonisation française.

Fodé-Hadji disparut en tant qu'entité politique lors de la colonisation. Mais la région reste une zone de grande importance culturelle et historique. C'est un carrefour de civilisations peules et mandingues.`,
    },
    facts: [
      { id: 'fh1', title: 'Ibrahima Sory', description: 'Cousin de l\'Almamy', imageUrl: '/images/fouta/fh1.jpg', caption: 'Ibrahima Sory, homme de confiance' },
      { id: 'fh2', title: 'Routes Commerciales', description: 'Vers Niger et Kangaba', imageUrl: '/images/fouta/fh2.jpg', caption: 'Caravanes sur les routes stratégiques' },
      { id: 'fh3', title: 'Base Militaire', description: 'Annexe du pouvoir central', imageUrl: '/images/fouta/fh3.jpg', caption: 'Camp militaire de Fodé-Hadji' },
      { id: 'fh4', title: 'Les Houbbou', description: 'Dissidence religieuse au XIXe siècle', imageUrl: '/images/fouta/fh4.jpg', caption: 'Mamadou Diouhé et les Houbbou' },
    ],
    imageCount: 4,
    role: 'Annexe de Timbo — Routes commerciales',
  },
];

export default foutaDiwals;
