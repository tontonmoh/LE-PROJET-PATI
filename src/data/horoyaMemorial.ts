// ============================================================
// LE MÉMORIAL HOROYA — données
// Trois fonds : les 10 Pionniers (expo SENAG 2026), les 60
// Compagnons de l'Indépendance (élus du 31 mars 1957), et les
// 453 bénéficiaires de la Croix du Compagnon (1959-1960).
//
// SOURCES
// • André Lewin, Ahmed Sékou Touré (1922-1984) — Tome 2
//   (1956-1958), L'Harmattan, 2009 : Annexes 2, 3 et 4.
// • Sidiki Kobélé Kéita, Esquisses biographiques des Premiers
//   Députés Guinéens, Éditions Universitaires, Conakry, 1995.
// • Panneau commémoratif « Les bénéficiaires de la Croix du
//   Compagnon de l'Indépendance (1959-1960) » (SGG).
// • Exposition « Les Pionniers de l'Administration guinéenne »,
//   SENAG 2026 (25-30 juin, Plage Camayenne).
//
// Document de travail — reconstitution documentaire. Attribution
// nominative à vérifier ponctuellement sur le Journal officiel
// de la Guinée française (avril 1957) et sur les décrets de 1959
// et 1960.
// ============================================================

export interface Pionnier {
  id: string;
  nom: string;
  dates?: string;
  titre: string;
  categorie: "president" | "chefs1957" | "figures";
  identite: string;
  chantierTitre: string;
  chantierAxes: string[];
  resonance?: string;
  image: string;
}

export interface CompagnonSiege {
  circonscription: string;
  membres: string[];
  complement?: string;
  note?: string;
}

export interface CroixEntree { n: number; nom: string; mention: string; }
export interface CroixSection { titre: string; entrees: CroixEntree[]; }
export interface CroixDecret {
  id: string;
  titre: string;
  date: string;
  note?: string;
  sections: CroixSection[];
}

// ------------------------------------------------------------
// I. LES PIONNIERS — 10 notices de l'exposition SENAG 2026
// ------------------------------------------------------------

export const PIONNIERS_CATEGORIES: Record<Pionnier["categorie"], string> = {
  president: "Le Président",
  chefs1957: "Les chefs des formations politiques de 1957",
  figures: "Les figures de « premier »",
};

export const PIONNIERS: Pionnier[] = [
  {
    id: "sekou-toure",
    nom: "Ahmed Sékou Touré",
    dates: "1922 – 1984",
    titre: "Le Président",
    categorie: "president",
    identite:
      "Maître d'œuvre de la rupture institutionnelle avec l'ordre colonial et l'architecte en chef de l'État guinéen souverain. Son rôle pivot réside dans sa capacité à avoir transformé, en l'espace de quelques semaines après le « Non » du 28 septembre 1958, une colonie de l'Afrique Occidentale Française (AOF) en une administration publique centrale, souveraine et fonctionnelle.",
    chantierTitre: "La fondation de l'État souverain",
    chantierAxes: [],
    resonance:
      "La figure administrative de Sékou Touré incarne le principe d'audace institutionnelle et de souveraineté économique. Déployer le mégaprojet Simandou 2040 montre que la Guinée d'aujourd'hui s'appuie sur une tradition de résilience administrative capable de concevoir ses propres outils de gouvernance face aux défis internationaux.",
    image: "/images/horoya/pionniers/sekou-toure.jpg",
  },
  {
    id: "saifoulaye-diallo",
    nom: "Saïfoulaye Diallo",
    dates: "1923 – 1981",
    titre: "PDG (Parti Démocratique de Guinée)",
    categorie: "chefs1957",
    identite:
      "Leader politique de premier plan, intellectuel et homme d'État, Saïfoulaye Diallo est le pilier organisationnel et le stratège administratif de la transition vers l'indépendance. En 1957, il devient le premier président de l'Assemblée territoriale de la Guinée sous le régime de la Loi-cadre, avant de présider la première Assemblée nationale de la République souveraine. Son rôle pivot consiste à avoir été le « gardien du temple législatif et budgétaire », traduisant l'idéologie politique en textes de loi et en structures administratives viables.",
    chantierTitre: "L'institutionnalisation du pouvoir législatif et l'orthodoxie financière",
    chantierAxes: [
      "La transition du modèle colonial au modèle souverain",
      "La mise en place de la rigueur budgétaire",
      "La diplomatie parlementaire",
    ],
    resonance: "C'est le modèle de la rigueur administrative au service du développement durable.",
    image: "/images/horoya/pionniers/saifoulaye-diallo.jpg",
  },
  {
    id: "barry-diawadou",
    nom: "Barry Diawadou",
    dates: "1916 – 1969",
    titre: "BAG (Bloc Africain de Guinée)",
    categorie: "chefs1957",
    identite:
      "Député de la Guinée à l'Assemblée nationale française et chef de file du Bloc Africain de Guinée (BAG), Barry Diawadou est une figure incontournable du pluralisme politique de 1957. Lors de la transition vers l'indépendance, il fait le choix stratégique de l'unité nationale en sabordant son parti pour rejoindre le front commun souverain. Intégré dès les premières heures au gouvernement de la Première République, il devient un grand commis de l'État, occupant notamment les fonctions de ministre de l'Éducation nationale, puis de ministre des Finances. Son rôle pivot réside dans l'apport d'une culture de haute administration républicaine au sein de l'appareil d'État naissant.",
    chantierTitre: "La décolonisation des programmes éducatifs et la transition financière",
    chantierAxes: [
      "La refonte administrative de l'Éducation nationale",
      "La structuration des services des Finances",
    ],
    image: "/images/horoya/pionniers/barry-diawadou.jpg",
  },
  {
    id: "barry-iii",
    nom: "Ibrahima Barry, dit Barry III",
    titre: "DSG (Démocratie Socialiste de Guinée)",
    categorie: "chefs1957",
    identite:
      "Avocat de formation, intellectuel rigoureux et fondateur de la Démocratie Socialiste de Guinée (DSG), Barry III est une figure majeure de l'animation politique et juridique de 1957. À l'instar des autres leaders de l'opposition, il fait le choix de l'unité nationale lors du tournant historique de 1958. Intégré dans l'appareil d'État de la Première République, il occupe de hautes fonctions ministérielles, notamment au Plan et aux Échanges. Son rôle pivot réside dans l'introduction d'une approche de planification scientifique et juridique au sein de l'appareil administratif guinéen.",
    chantierTitre: "La codification de la planification économique et la légistique",
    chantierAxes: [
      "La naissance de l'administration du Plan",
      "La rigueur de la légistique",
    ],
    image: "/images/horoya/pionniers/barry-iii.jpg",
  },
  {
    id: "habib-tall",
    nom: "Habib Tall",
    titre: "Représentant des Indépendants",
    categorie: "chefs1957",
    identite:
      "Personnalité d'influence et leader du courant des élus « indépendants » lors des élections territoriales de 1957, Habib Tall incarne une force d'équilibre et de médiation dans le paysage politique pré-indépendance. Issu de lignées historiques respectées (région de Dinguiraye), son rôle pivot consiste à avoir agi comme un pont entre l'administration moderne en gestation et les structures sociales et locales traditionnelles. Son positionnement a permis de stabiliser et d'asseoir la légitimité des réformes administratives de la Loi-cadre auprès des populations de l'intérieur du pays.",
    chantierTitre: "L'intégration des collectivités locales et l'administration territoriale",
    chantierAxes: [
      "La pacification et la transition administrative régionale",
      "La légitimation de l'impôt et du recensement",
    ],
    image: "/images/horoya/pionniers/habib-tall.jpg",
  },
  {
    id: "diallo-telli",
    nom: "Boubacar Diallo Telli",
    dates: "1925 – 1977",
    titre: "1er Secrétaire Général de l'OUA",
    categorie: "figures",
    identite:
      "Magistrat de formation et diplomate d'exception, Diallo Telli est le premier Secrétaire Général de l'Organisation de l'Unité Africaine (OUA), poste qu'il occupe de 1964 à 1972. Avant de marquer l'histoire panafricaine, il est le premier ambassadeur de la Guinée auprès des Nations Unies à New York dès décembre 1958, intégrant la jeune république dans le concert des nations. Son rôle pivot consiste à avoir été le concepteur et le bâtisseur de l'appareil administratif du panafricanisme institutionnel et le premier visage juridique de la souveraineté guinéenne à l'international.",
    chantierTitre: "L'ingénierie bureaucratique multilatérale et la diplomatie souveraine",
    chantierAxes: [
      "La fondation de l'administration de l'OUA",
      "L'organisation de la diplomatie guinéenne",
      "La codification de la Justice guinéenne",
    ],
    image: "/images/horoya/pionniers/diallo-telli.jpg",
  },
  {
    id: "jeanne-martin-cisse",
    nom: "Jeanne Martin Cissé",
    dates: "1926 – 2017",
    titre: "1re femme présidente du Conseil de Sécurité de l'ONU",
    categorie: "figures",
    identite:
      "Enseignante de formation, militante panafricaine et diplomate de haut rang, Jeanne Martin Cissé est la première femme de l'histoire à présider le Conseil de Sécurité des Nations Unies (en 1972, en tant que représentante permanente de la Guinée). Secrétaire générale de l'Union Révolutionnaire des Femmes Africaines (URFA) pendant plus d'une décennie, elle intègre par la suite le gouvernement guinéen comme ministre des Affaires sociales. Son rôle pivot consiste à avoir institutionnalisé la cause des femmes et la lutte contre l'apartheid dans les procédures décisionnelles du multilatéralisme mondial, tout en structurant l'administration sociale de la Première République.",
    chantierTitre: "La codification du droit social national et le management diplomatique onusien",
    chantierAxes: [
      "La direction des instances exécutives internationales",
      "La structuration de l'administration des Affaires sociales",
    ],
    image: "/images/horoya/pionniers/jeanne-martin-cisse.jpg",
  },
  {
    id: "loffo-camara",
    nom: "Loffo Camara",
    dates: "c. 1925 – 1971",
    titre: "1re femme au gouvernement",
    categorie: "figures",
    identite:
      "Sage-femme de formation (diplômée de l'École africaine de médecine de Dakar en 1941), syndicaliste et militante de première heure du PDG-RDA à Macenta, Loffo Camara est la première femme de l'histoire à intégrer un gouvernement en République de Guinée. En occupant le poste de Secrétaire d'État aux Affaires sociales de 1961 à 1968, elle brise le plafond de verre institutionnel de la jeune Afrique francophone. Son rôle pivot consiste à avoir été le fer de lance de la syndicalisation, de l'émancipation légale des femmes et de la structuration de l'administration médico-sociale du pays.",
    chantierTitre: "L'institutionnalisation de l'action médico-sociale et la protection maternelle",
    chantierAxes: [
      "La création ex nihilo des services d'assistance sociale",
      "L'organisation des mouvements de travailleuses",
      "La promotion du renouvellement administratif",
    ],
    image: "/images/horoya/pionniers/loffo-camara.jpg",
  },
  {
    id: "mafory-bangoura",
    nom: "Hadja Mafory Bangoura",
    dates: "c. 1910 – 1976",
    titre: "Pionnière du mouvement des femmes",
    categorie: "figures",
    identite:
      "Militante syndicale de la première heure, figure de proue de la grève historique des 73 jours de 1953 et présidente du Comité national des femmes du PDG-RDA, Mafory Bangoura est l'incarnation de la force populaire guinéenne. Nommée ministre des Affaires sociales au cours de sa carrière, elle a joué un rôle essentiel : transformer la puissance de mobilisation des femmes de la Basse-Guinée et de Conakry en un levier institutionnel structuré, intégré directement au cœur des politiques publiques de l'État.",
    chantierTitre: "La structuration de l'encadrement social et l'émancipation civile",
    chantierAxes: [
      "L'institutionnalisation des comités féminins",
      "La codification des droits civils et du statut de la femme",
    ],
    image: "/images/horoya/pionniers/mafory-bangoura.jpg",
  },
  {
    id: "lansana-beavogui",
    nom: "Dr Louis Lansana Béavogui",
    dates: "1923 – 1984",
    titre: "Premier Premier Ministre",
    categorie: "figures",
    identite:
      "Médecin de formation, diplomate chevronné et homme d'État à la longévité exceptionnelle, Louis Lansana Béavogui est nommé au poste de Premier ministre de la République de Guinée lors de la création de cette fonction en avril 1972, rôle qu'il assumera jusqu'en mars 1984. Auparavant ministre des Affaires étrangères puis ministre de l'Économie et des Finances, son rôle pivot a été d'être le « chef d'orchestre de l'administration publique ». Il a assuré la coordination interministérielle, la continuité administrative de l'État et la gestion technique des affaires de la nation.",
    chantierTitre: "L'institutionnalisation de la Primature et la direction de l'action gouvernementale",
    chantierAxes: [
      "La création et la codification des services de la Primature",
      "La diplomatie économique et financière",
      "La gestion de crise et la continuité de l'État",
    ],
    image: "/images/horoya/pionniers/lansana-beavogui.jpg",
  },
];

// ------------------------------------------------------------
// II. LES 60 COMPAGNONS DE L'INDÉPENDANCE
// Conseillers territoriaux élus le 31 mars 1957, devenus
// députés constituants le 2 octobre 1958.
// ------------------------------------------------------------

export const COMPAGNONS_REPERES =
  "Scrutin du 31 mars 1957 à l'Assemblée territoriale de la Guinée française, premier au suffrage universel direct (loi-cadre Defferre). 60 sièges : 56 au PDG-RDA, 3 à Pita (non-PDG, dont Barry III) et 1 à Dinguiraye (indépendant, Tall Mody Habidou). L'Assemblée est érigée en Assemblée nationale constituante le 2 octobre 1958.";

export const COMPAGNONS_BUREAU: { fonction: string; titulaire: string }[] = [
  { fonction: "Président", titulaire: "Diallo Saïfoulaye" },
  { fonction: "1er Vice-président", titulaire: "Célestine Robert" },
  { fonction: "2e Vice-président", titulaire: "Caba Lamine Ibrahima" },
  { fonction: "3e Vice-président", titulaire: "Fofana Kéfimba dit Donzo Kéfing" },
  { fonction: "4e Vice-président", titulaire: "Soumah Moustapha" },
  { fonction: "Secrétaires", titulaire: "Tounkara Jean Faragué · Camara Moussa Sanguiana" },
  { fonction: "Questeur", titulaire: "Keïta Ouremba" },
  { fonction: "Questeur adjoint", titulaire: "Sow Souleymane" },
];

export const COMPAGNONS_SIEGES: CompagnonSiege[] = [
  { circonscription: "Beyla", membres: ["Célestine Robert (1er Vice-président)", "Cissé Moustapha", "Fofana Kéfimba dit Donzo Kéfing (3e Vice-président)"] },
  { circonscription: "Boffa", membres: [], note: "Aucun siège territorial en 1957 (rattachée à la Basse-Guinée) — la répartition des sièges suivait la population, non le découpage préfectoral." },
  { circonscription: "Boké", membres: ["Camara Sankoumba", "Camara Mustapha"] },
  { circonscription: "Conakry", membres: ["Soumah Moustapha (4e Vice-président)"], complement: "Sékou Touré" },
  { circonscription: "Dabola", membres: ["Barry Baba Alimou"] },
  { circonscription: "Dalaba", membres: ["Bah Thierno Ibrahima"] },
  { circonscription: "Dinguiraye", membres: ["Tall Mody Habidou (chef de canton, indépendant rallié au PDG)"] },
  { circonscription: "Dubréka", membres: ["Soumah Nabi Issa"], complement: "Dr Roger Najib Accar" },
  { circonscription: "Faranah", membres: ["Condé Ansoumane"] },
  { circonscription: "Forécariah", membres: ["Touré Dondo"] },
  { circonscription: "Gaoual", membres: ["Bounka Mané", "Diallo Aguibou"] },
  { circonscription: "Guéckédou", membres: ["Joachim Eugène", "Sangaré Toumani", "Traoré Tambakala"] },
  { circonscription: "Kankan", membres: ["Diané Lansana", "Kaba Lamine Ibrahima (2e Vice-président)"] },
  { circonscription: "Kindia", membres: ["Sylla Seny Faciné"], complement: "Jean-Eugène Mignard" },
  { circonscription: "Kissidougou", membres: ["Keïta El Hadj Mory", "Mara Diomba"] },
  { circonscription: "Kouroussa", membres: ["Camara Moussa Sanguiana (secrétaire)", "Keïta Ouremba (questeur)"] },
  { circonscription: "Labé", membres: ["Diallo Saïfoulaye (Président de l'Assemblée)", "Baldé Mamadou Tanou", "Demarchelier Jacques", "Diakité M'Bemba", "Diallo Alpha Mamadou", "Diallo Amadou Telivel"] },
  { circonscription: "Macenta", membres: ["Béavogui Koman", "Camara Mory", "Guèye Doudou"] },
  { circonscription: "Mali", membres: ["Diallo Oumar", "Sow Souleymane (questeur adjoint)"] },
  { circonscription: "Mamou", membres: ["Barry Alpha Oumar", "Doumbouya Bela"] },
  { circonscription: "N'Zérékoré", membres: ["Doré Lama", "Gnan Félix Matos", "Tounkara Jean Faragué (secrétaire)"] },
  { circonscription: "Pita", membres: ["Bah Thierno Ousmane", "Thiam Mamadou"], complement: "Ibrahima Barry" },
  { circonscription: "Siguiri", membres: ["Cissé Karamoko", "Doumbouya Kouramoudou"], note: "Cissé Karamoko figure aussi parmi les décorés à titre posthume (décret N°227, Siguiri) — même personne ou homonymie, à valider au Journal officiel." },
  { circonscription: "Télimélé", membres: ["Diallo Ibrahima", "Sy Boubacar"] },
  { circonscription: "Tougué", membres: ["Barry Mamadou Diouldé"] },
  { circonscription: "Youkounkoun", membres: ["Keïta Kéméko"] },
];

export const PREMIER_GOUVERNEMENT: { portefeuille: string; titulaire: string }[] = [
  { portefeuille: "Président du Conseil", titulaire: "Ahmed Sékou Touré" },
  { portefeuille: "Défense & Affaires étrangères", titulaire: "Ahmed Sékou Touré" },
  { portefeuille: "Intérieur & Sécurité", titulaire: "Fodéba Keïta" },
  { portefeuille: "Finances", titulaire: "Alioune Dramé" },
  { portefeuille: "Justice", titulaire: "Damantang Camara" },
  { portefeuille: "Travaux publics, Transports, PTT", titulaire: "Ismaël Touré" },
  { portefeuille: "Affaires économiques & Plan", titulaire: "Lansana Béavogui" },
  { portefeuille: "Production", titulaire: "Jean-Eugène Mignard" },
  { portefeuille: "Économie rurale, Paysannat, Coopération", titulaire: "Diallo Abdourahmane" },
  { portefeuille: "Éducation nationale", titulaire: "Barry Diawadou" },
  { portefeuille: "Enseignement technique", titulaire: "Michel Collet" },
  { portefeuille: "Santé publique", titulaire: "Dr Roger Najib Accar" },
  { portefeuille: "Travail & Affaires sociales", titulaire: "Bengaly Camara" },
  { portefeuille: "Sec. d'État — Douanes & Trésor", titulaire: "Ousmane Baldé" },
  { portefeuille: "Sec. d'État — Information", titulaire: "Alassane Diop" },
  { portefeuille: "Sec. d'État — Télécommunications", titulaire: "Abdoulaye Diallo" },
  { portefeuille: "Sec. d'État — Présidence", titulaire: "Moussa Diakité · Barry Ibrahima · Fodé Cissé · Nfamara Keïta" },
];

// ------------------------------------------------------------
// III. LA CROIX DU COMPAGNON DE L'INDÉPENDANCE (1959-1960)
// 453 bénéficiaires — décrets N°227 et N°228 du 1er octobre
// 1959, décret du 2 octobre 1960. Transcription du panneau
// commémoratif du SGG.
// ------------------------------------------------------------

export const CROIX_TOTAL = 453;

export const CROIX_DECRETS: CroixDecret[] = [
  {
    id: "d227",
    titre: "Décret N°227/PG du 1er octobre 1959",
    date: "1er octobre 1959",
    note: "Décorés à titre posthume.",
    sections: [
      {
        titre: "À titre posthume",
        entrees: [
          { n: 1, nom: "Mme Camara M'Balia", mention: "Tondon" },
          { n: 2, nom: "M. Dramé Oumar", mention: "Conakry" },
          { n: 3, nom: "M. Barry Gassimou", mention: "Conakry" },
          { n: 4, nom: "M. Dia Mouctar", mention: "Conakry" },
          { n: 5, nom: "M. Touré Adama Kandé", mention: "Conakry" },
          { n: 6, nom: "M. James Alphonse", mention: "Conakry" },
          { n: 7, nom: "M. Soumah Moussa", mention: "Tougnifili (Boffa)" },
          { n: 8, nom: "El-hadj Camara Boubacar", mention: "Khouréralandé (Boffa)" },
          { n: 9, nom: "M. Keïta Yéro", mention: "Gueckédou" },
          { n: 10, nom: "M. Cheick Fanta Mamadi", mention: "Kankan" },
          { n: 11, nom: "M. Camara Raphaël", mention: "Kankan" },
          { n: 12, nom: "M. Sylla Mamadi Fodé", mention: "Kindia" },
          { n: 13, nom: "M. Bakary Fina", mention: "Kissidougou" },
          { n: 14, nom: "M. Diallo Bakary", mention: "Labé" },
          { n: 15, nom: "M. Chérif de Sangalé", mention: "Labé" },
          { n: 16, nom: "M. Camara Kaman", mention: "Macenta" },
          { n: 17, nom: "M. Diallo Thiemo Djibi", mention: "Mamou" },
          { n: 18, nom: "M. Soumaoro Séoro", mention: "N'Zérékoré" },
          { n: 19, nom: "M. N'Faly Touré", mention: "N'Zérékoré" },
          { n: 20, nom: "M. Traoré Falaye", mention: "Siguiri" },
          { n: 21, nom: "M. Cissé Karamoko", mention: "Siguiri" },
          { n: 22, nom: "M. Konso Magassouba", mention: "Siguiri" },
        ],
      },
    ],
  },
  {
    id: "d228",
    titre: "Décret N°228/PG du 1er octobre 1959",
    date: "1er octobre 1959",
    note: "Personnes vivantes à la date du décret.",
    sections: [
      {
        titre: "Commune de Conakry",
        entrees: [
          { n: 1, nom: "M. Touré Sékou", mention: "Président du Gouvernement" },
          { n: 2, nom: "M. Diallo El-hadj Salfoulaye", mention: "Président Assemblée Nationale" },
          { n: 3, nom: "M. Diallo Abdourahamane", mention: "Ministre de l'Économie Rurale" },
          { n: 4, nom: "M. Kéita N'Famara", mention: "Secrétaire d'État à la Présidence" },
          { n: 5, nom: "M. Camara Bangaly", mention: "Ministre du Travail" },
          { n: 6, nom: "M. Fofana El-hadj Mamoudou", mention: "Maire de Conakry" },
          { n: 7, nom: "M. Camara Damantang", mention: "Ministre de la Justice" },
          { n: 8, nom: "Mme Camara Loffo", mention: "Sage-Femme" },
          { n: 9, nom: "Mme Bangoura Mafori", mention: "Ménagère" },
          { n: 10, nom: "M. Kaba Mamadi", mention: "Commis des services administratifs" },
          { n: 11, nom: "M. Camara Daouda", mention: "Secrétaire des Greffes et Parquets" },
          { n: 12, nom: "M. Touré Ismaël", mention: "Ministre des TP" },
          { n: 13, nom: "M. Diakité Moussa", mention: "Secrétaire d'État à la Présidence" },
          { n: 14, nom: "M. Béavogui Louis Lansana", mention: "Ministre de l'Économie Générale" },
          { n: 15, nom: "M. Tounkara Jean Faragué", mention: "Secrétaire Général du Gouvernement" },
          { n: 16, nom: "M. Magassouba Moriba", mention: "Directeur de la Sûreté" },
          { n: 17, nom: "M. Touré Amara", mention: "Président Comité de Coronthie" },
          { n: 18, nom: "M. Traoré Fodé dit Kotigui", mention: "Ouvrier au Chemin de Fer" },
          { n: 19, nom: "M. Sankhon Sékou", mention: "Notable à Sandervalia" },
          { n: 20, nom: "M. Soumah Moustapha", mention: "Député" },
          { n: 21, nom: "M. Diallo Falilou", mention: "Attaché à la Présidence" },
          { n: 22, nom: "M. Yansané Sékou Yalani", mention: "Adjoint au Maire de Conakry" },
          { n: 23, nom: "M. Camara Mangué Hadiri", mention: "PTT" },
          { n: 24, nom: "Mme Doumbouya MMama", mention: "Boulbinet" },
          { n: 25, nom: "Mme Diallo Nènè", mention: "Quartier sans Fils" },
          { n: 26, nom: "Mme Doumbouya N'Youla", mention: "Quartier Sandervalia" },
          { n: 27, nom: "Mme N'Diaye Aïssatou", mention: "Boulbinet I" },
          { n: 28, nom: "M. Collet Michel", mention: "Ambassadeur" },
          { n: 29, nom: "Mme Nabiya Haïdara", mention: "quartier Almamya" },
          { n: 30, nom: "M. Kéita Fodéba", mention: "Ministre de l'Intérieur" },
          { n: 31, nom: "M. Dramé Alioune", mention: "Ministre des Finances" },
          { n: 32, nom: "M. Diop Alassane", mention: "Secrétaire d'État à l'Information" },
          { n: 33, nom: "Mme Keïta Fatou", mention: "Dixinn-foula" },
          { n: 34, nom: "Mme Soumah Mabinti", mention: "quartier Kolea" },
          { n: 35, nom: "Mme Cissé Aïssatou", mention: "Landréah" },
          { n: 36, nom: "Mme Kaba N'Naba", mention: "Boussoura" },
          { n: 37, nom: "M. Camara Seydouba", mention: "Yattaya" },
          { n: 38, nom: "Mme Kaba Kouloumba Ciré", mention: "Coronthie" },
          { n: 39, nom: "M. Camara Aboubacar", mention: "Sonfonia" },
          { n: 40, nom: "Mme Bangoura Sayon", mention: "Sandervalia" },
          { n: 41, nom: "M. Cissé Michel", mention: "Tombo" },
          { n: 42, nom: "M. Chérif Nabaniou", mention: "Boulbinet" },
          { n: 43, nom: "M. Cissé Fodé", mention: "Secrétaire d'État aux Affaires étrangères" },
          { n: 44, nom: "M. Barry Ibrahima dit Barry-III", mention: "Secrétaire d'État à la Présidence" },
          { n: 45, nom: "M. Diallo Demba", mention: "Avocat" },
          { n: 46, nom: "M. Oularé Ansoumane", mention: "Secrétaire de l'USTG" },
          { n: 47, nom: "Mme Touré Mamadi", mention: "Présidente Téminétaye" },
          { n: 48, nom: "M. Camara M'Bemba", mention: "quartier Téminétaye" },
          { n: 49, nom: "M. Camara Momo", mention: "permanence du PDG" },
          { n: 50, nom: "M. Bangoura Kona", mention: "Camayenne" },
          { n: 51, nom: "M. Mont-Louis Joseph", mention: "Directeur des PTT" },
          { n: 52, nom: "M. Bangoura Abou", mention: "Tamara (Îles de Loos)" },
          { n: 53, nom: "M. Camara Mory", mention: "Comptoir Guinéen du Commerce extérieur" },
          { n: 54, nom: "M. Cissé Bangali", mention: "Ouvrier Dixinn" },
          { n: 55, nom: "M. Camara El-hadj Abdou", mention: "Maître cordonnier Sandervalia" },
          { n: 56, nom: "M. Camara N'Faly", mention: "quartier Téminétaye" },
          { n: 57, nom: "M. Camara Issiaga", mention: "quartier Coronthie" },
          { n: 58, nom: "M. Barry Diawadou", mention: "Ministre de l'Éducation Nationale" },
          { n: 59, nom: "M. Accar Najib Roger", mention: "Ministre de la Santé" },
          { n: 60, nom: "M. Diallo Kombi", mention: "ancien combattant" },
          { n: 61, nom: "M. Sako Bouna", mention: "Commerçant Sandervalia" },
          { n: 62, nom: "M. El-hadj Zeno Hassan", mention: "Mairie" },
          { n: 63, nom: "M. Camara Abdou", mention: "Chauffeur" },
          { n: 64, nom: "M. Soumah Youssouf", mention: "Chauffeur" },
          { n: 65, nom: "M. Kamissoko Karifan oudou", mention: "Chauffeur" },
          { n: 66, nom: "M. Diallo Mouctar", mention: "Instituteur" },
          { n: 67, nom: "M. Sylla Momo dit Momo Joe", mention: "Commerçant, Boulbinet" },
          { n: 68, nom: "M. Louis Bonnet", mention: "Sandervalia" },
          { n: 69, nom: "Mme Sylla Mayalan", mention: "Matam" },
          { n: 70, nom: "M. Camara Ibrahima", mention: "Commerçant Boulbinet I" },
          { n: 71, nom: "M. Dioubaté Kanfory", mention: "Infirmier Trypano, Madina" },
          { n: 72, nom: "M. Soumah Amara", mention: "Infirmier" },
          { n: 73, nom: "M. Kobolé Camara", mention: "Camayenne" },
          { n: 74, nom: "Mme Soumah Aïssata", mention: "Almamya" },
          { n: 75, nom: "M. Mara Diomba", mention: "Député" },
          { n: 76, nom: "M. Camara Momo dit Koulikhagnè", mention: "Boulbinet I" },
          { n: 77, nom: "Mme Touré Mawa", mention: "Sandervalia" },
          { n: 78, nom: "Mme Kéita Filani Saran", mention: "Ménagère à Madina" },
        ],
      },
      {
        titre: "Boké",
        entrees: [
          { n: 79, nom: "M. Camara Moustapha", mention: "Député" },
          { n: 80, nom: "M. Sako Moussa", mention: "Dioula" },
          { n: 81, nom: "M. Touré Bakary", mention: "Dioula, la communauté villageoise" },
        ],
      },
      {
        titre: "Télimélé",
        entrees: [
          { n: 82, nom: "M. Thiam Amadou", mention: "Président Conseil de Circonscription" },
          { n: 83, nom: "M. Fofana Karamadi", mention: "Notable" },
          { n: 84, nom: "M. Diallo Diouhé", mention: "Facteur Postes et Télécommunications" },
        ],
      },
      {
        titre: "Gaoual",
        entrees: [
          { n: 85, nom: "M. Condé", mention: "Facteur des Postes et Télécommunications" },
        ],
      },
      {
        titre: "Youkounkoun",
        entrees: [
          { n: 86, nom: "M. Kéita Kémoko", mention: "Député" },
          { n: 87, nom: "M. Kourouma Mamadi", mention: "Infirmier à Saraboïdo" },
          { n: 88, nom: "M. Pata Gobaye", mention: "Notable" },
          { n: 89, nom: "Mme Soumounou Hawa", mention: "Présidente de la Section" },
          { n: 90, nom: "M. Magassouba Ansoumane", mention: "Instituteur" },
        ],
      },
      {
        titre: "Labé",
        entrees: [
          { n: 91, nom: "M. Diono Maguette", mention: "Ouvrier" },
          { n: 92, nom: "Mme Kouyaté Démba", mention: "Ménagère" },
          { n: 93, nom: "M. Tounkara Mamadou", mention: "Chef de poste à Koubia" },
          { n: 94, nom: "M. Diakhaby N'Bemba", mention: "Député" },
          { n: 95, nom: "M. Camara Sékou", mention: "Assistant d'élevage" },
          { n: 96, nom: "Mme M'Mah Yimbé", mention: "Présidente" },
          { n: 97, nom: "M. Chérif Sékou", mention: "Adjoint au Chef de Circonscription" },
          { n: 98, nom: "M. Diallo Thierno Oumar", mention: "Samou" },
          { n: 99, nom: "M. Diallo Mamadou Labiko", mention: "Commis des PTT" },
          { n: 100, nom: "M. Soumaré Samba", mention: "Notable" },
          { n: 101, nom: "M. Sissoko Samba", mention: "Chauffeur" },
        ],
      },
      {
        titre: "Mali",
        entrees: [
          { n: 102, nom: "M. Doumbouya Bela", mention: "Chef de Circonscription" },
          { n: 103, nom: "M. Bangoura Soriba", mention: "Menuisier" },
          { n: 104, nom: "M. Sow Souleymane", mention: "Député" },
          { n: 105, nom: "M. Bah Mamadou Maka", mention: "Infirmier" },
          { n: 106, nom: "M. Diallo Oumar", mention: "Député" },
        ],
      },
      {
        titre: "Tougué",
        entrees: [
          { n: 107, nom: "M. Capitaine Diouldé dit Barry M.", mention: "Député" },
          { n: 108, nom: "M. Baldé Mouctar", mention: "Adjoint Technique des PTT" },
        ],
      },
      {
        titre: "Pita",
        entrees: [
          { n: 109, nom: "M. Maka Léon", mention: "Inspecteur Primaire" },
          { n: 110, nom: "Mme Barry Bobo", mention: "Ménagère" },
          { n: 111, nom: "Mme Fofana Hadi", mention: "Ménagère" },
          { n: 112, nom: "M. Kéita Sory", mention: "Commerçant" },
          { n: 113, nom: "M. Camara Gouly", mention: "Tailleur" },
          { n: 114, nom: "M. Barry Lamarana", mention: "Infirmier A.M.A" },
          { n: 115, nom: "M. Touré Sékou", mention: "Juge de Paix" },
        ],
      },
      {
        titre: "Dalaba",
        entrees: [
          { n: 116, nom: "M. Diakité Albert", mention: "Commerçant" },
          { n: 117, nom: "M. Traoré Samba Lamine", mention: "Député" },
          { n: 118, nom: "M. Abdoulaye", mention: "Menuisier" },
        ],
      },
      {
        titre: "Mamou",
        entrees: [
          { n: 119, nom: "M. Doukouré Aboubacar", mention: "Chef de Poste Administratif" },
          { n: 120, nom: "M. Diop Mamadou", mention: "Adjoint Technique TP" },
          { n: 121, nom: "Mme Sylla Tourou", mention: "Présidente" },
          { n: 122, nom: "M. Coumbassa David", mention: "employé de Commerce" },
          { n: 123, nom: "M. Touré Mohamed Lamine", mention: "Cheminot" },
          { n: 124, nom: "Mme Cissé Oumou", mention: "Kimbély" },
          { n: 125, nom: "M. Diéli Bangali", mention: "Griot" },
          { n: 126, nom: "M. Camara Dîô Momo", mention: "employé de Commerce" },
          { n: 127, nom: "M. Barry Alpha Oumar", mention: "Député" },
          { n: 128, nom: "Mme Hadja Hadouba", mention: "Ménagère" },
        ],
      },
      {
        titre: "Dabola",
        entrees: [
          { n: 129, nom: "Mme Ako Tako", mention: "Ménagère" },
          { n: 130, nom: "M. Camara Dian Lamine", mention: "chef d'équipe Travaux publics (rectificatif : D.239 du 16/10/59)" },
          { n: 131, nom: "M. Camara Morlaye Bissékrima", mention: "" },
          { n: 132, nom: "M. Diané Kerfalla", mention: "Postes et Télécommunications" },
          { n: 133, nom: "M. Sékou Kéita", mention: "Infirmier Trypano" },
          { n: 134, nom: "M. Capitaine Barry Baba Alimou", mention: "Député" },
        ],
      },
      {
        titre: "Dinguiraye",
        entrees: [
          { n: 135, nom: "M. Kondé Oumar", mention: "Infirmier Trypano" },
          { n: 136, nom: "M. Oularé Boubacar", mention: "Infirmier" },
          { n: 137, nom: "M. Traoré Baba", mention: "Président Conseil de Village" },
          { n: 138, nom: "Mme Bah Madina", mention: "Ménagère" },
          { n: 139, nom: "M. Tibou Kouyaté", mention: "Commerçant Matakania" },
          { n: 140, nom: "M. Dioubaté Thiemo", mention: "Griot" },
        ],
      },
      {
        titre: "Kouroussa",
        entrees: [
          { n: 141, nom: "M. Kouyaté Sékou", mention: "Chef de Poste Administratif" },
          { n: 142, nom: "M. Camara Moussa Sanguiana", mention: "Député" },
          { n: 143, nom: "M. Condé Sory", mention: "Chef de Circonscription" },
        ],
      },
      {
        titre: "Siguiri",
        entrees: [
          { n: 144, nom: "M. Condé Oumar", mention: "" },
          { n: 145, nom: "M. Doumbouya El-Hadj Oumar", mention: "Chef de Poste Administratif" },
          { n: 146, nom: "M. Sidibé Mangame", mention: "Commis Expéditionnaire" },
          { n: 147, nom: "M. Diawara El-Hadj Sékou", mention: "Commerçant" },
          { n: 148, nom: "M. Doumbouya Kouramoudou", mention: "Député" },
          { n: 149, nom: "M. Kéita Gadamoudou", mention: "Député" },
          { n: 150, nom: "M. Touré El-Hadj Abdoulaye", mention: "Chef de Circonscription" },
          { n: 151, nom: "Mme Kadia Diawara", mention: "Ménagère" },
          { n: 152, nom: "M. Sako Fodé", mention: "Notable" },
        ],
      },
      {
        titre: "Kankan",
        entrees: [
          { n: 153, nom: "M. Diané Lansana", mention: "Député, Chef de Circonscription" },
          { n: 154, nom: "M. Kaba Seyon-Mady", mention: "Comptable SMDR" },
          { n: 155, nom: "Mme Gnamakoro Kaba", mention: "Ménagère" },
          { n: 156, nom: "M. Touré Ibrahima", mention: "PTT" },
          { n: 157, nom: "M. Dafé Morlaye", mention: "Menuisier" },
          { n: 158, nom: "Mme Camara Nantenin", mention: "Ménagère" },
        ],
      },
      {
        titre: "Beyla",
        entrees: [
          { n: 159, nom: "M. Condé Émile", mention: "Chef de Circonscription" },
          { n: 160, nom: "M. Fofana Donzo Kéfing", mention: "Député" },
          { n: 161, nom: "M. Touré Gbaly-Mamady", mention: "Notable" },
          { n: 162, nom: "M. Kanté Biro", mention: "Adjoint au chef de circonscription" },
          { n: 163, nom: "M. Kourouma Sonagbé Dougnutigui", mention: "Notable" },
          { n: 164, nom: "M. Camara François", mention: "conseiller général" },
          { n: 165, nom: "El-Hadj N'Faly Kourouma", mention: "Notable" },
          { n: 166, nom: "M. Koly Condé", mention: "employé de Commerce" },
          { n: 167, nom: "M. Mansény Mamadi", mention: "Notable" },
        ],
      },
      {
        titre: "N'Zérékoré",
        entrees: [
          { n: 168, nom: "M. Sagno Mamadi", mention: "Chef de Circonscription" },
          { n: 169, nom: "M. Diaby Talfourou", mention: "Notable" },
          { n: 170, nom: "M. Barry Mody Nouhou", mention: "Moniteur d'agriculture" },
          { n: 171, nom: "Mme Katty", mention: "Ménagère quartier Horefenio" },
          { n: 172, nom: "M. Camara Morlaye", mention: "Menuisier" },
          { n: 173, nom: "Mme Konaté Aïssatou", mention: "Ménagère" },
          { n: 174, nom: "El-Hadj Ibrahima Diabaté", mention: "Commerçant" },
          { n: 175, nom: "M. Diallo Ibrahima M'Emba", mention: "Président du Conseil de Circonscription" },
          { n: 176, nom: "M. Togba Nantenin", mention: "Président du Conseil de Village" },
          { n: 177, nom: "M. Gatta Doré", mention: "Tailleur" },
          { n: 178, nom: "M. Mamady Flomo", mention: "Planteur" },
          { n: 179, nom: "M. Soumaré Tidiane", mention: "Instituteur" },
          { n: 180, nom: "M. Siki Manika", mention: "Planteur" },
          { n: 181, nom: "M. Traoré Mountaga", mention: "Président SMDR" },
          { n: 182, nom: "M. Gnan Félix Mathes", mention: "Député" },
          { n: 183, nom: "M. Gblon-gblon Flomo", mention: "Président Conseil de Village" },
          { n: 184, nom: "Mme Mania Doré", mention: "Ménagère" },
          { n: 185, nom: "Mme Manakan Bamba", mention: "Ménagère" },
          { n: 186, nom: "El-Hadj Kourouma Morikè", mention: "Commerçant" },
        ],
      },
      {
        titre: "Macenta",
        entrees: [
          { n: 187, nom: "M. Cissé Sékou", mention: "Notable" },
          { n: 188, nom: "Mme Watta Kandé", mention: "Ménagère" },
          { n: 189, nom: "M. Savané Morikandian", mention: "Chef de Circonscription" },
          { n: 190, nom: "M. Konde Amara", mention: "" },
          { n: 191, nom: "M. Donzo Diély Mamady", mention: "" },
          { n: 192, nom: "M. Kéita Mamady", mention: "" },
          { n: 193, nom: "M. Camara Amara", mention: "Coyama" },
          { n: 194, nom: "M. Koivogui Messa", mention: "Commerçant" },
        ],
      },
      {
        titre: "Guéckédou",
        entrees: [
          { n: 195, nom: "M. Sangaré Toumani", mention: "Député" },
          { n: 196, nom: "M. Traoré Tamba Kallass", mention: "Député" },
          { n: 197, nom: "M. Douno Martin", mention: "Infirmier Trypano" },
          { n: 198, nom: "M. Kaba Mamady", mention: "Infirmier Trypano" },
          { n: 199, nom: "M. Kaba Fodé", mention: "dit el Grand, Koïndou" },
          { n: 200, nom: "M. Momo Yéra", mention: "Cultivateur" },
        ],
      },
      {
        titre: "Kissidougou",
        entrees: [
          { n: 201, nom: "M. Camara Raymond", mention: "Infirmier Ama" },
          { n: 202, nom: "M. Soroma Jean", mention: "Notable" },
          { n: 203, nom: "Mme Touré Boba", mention: "Ménagère" },
          { n: 204, nom: "M. Kémoko Léno", mention: "Employé de commerce" },
          { n: 205, nom: "M. Mansaré Sékou", mention: "Nongourou" },
          { n: 206, nom: "M. Barry Abdoulaye", mention: "" },
        ],
      },
      {
        titre: "Faranah",
        entrees: [
          { n: 207, nom: "M. Condé Ansoumane", mention: "Député" },
          { n: 208, nom: "M. Touré Amara", mention: "Président Conseil de Village" },
          { n: 209, nom: "M. Oularé Nialé Seyon", mention: "Ancien Chef de Village" },
          { n: 210, nom: "Mme Camara Arafou", mention: "Ménagère" },
          { n: 211, nom: "M. Kanté Sékou Dioubeté", mention: "Griot" },
          { n: 212, nom: "M. Kondé Sory", mention: "Infirmier" },
        ],
      },
    ],
  },
  {
    id: "d1960",
    titre: "Décret [N°…256] du 2 octobre 1960",
    date: "2 octobre 1960",
    note: "Numéro de décret partiellement lisible sur le panneau source.",
    sections: [
      {
        titre: "1ʳᵉ Région administrative de Conakry",
        entrees: [
          { n: 1, nom: "M. Syla Diallo", mention: "pêcheur Boulbinet III" },
          { n: 2, nom: "M. Diaby Mamadou", mention: "Conseiller général" },
          { n: 3, nom: "Mme Kéita N'Doura", mention: "Présidente Coronthie" },
          { n: 4, nom: "Mme Touré Makia", mention: "Présidente Dabondi, Conakry I" },
          { n: 5, nom: "M. Camara Fana", mention: "propriétaire, Sandervalia" },
          { n: 6, nom: "M. Touré Mohamed", mention: "Adjoint Commandant région" },
          { n: 7, nom: "M. Soumah Momo dit Koungbé", mention: "cultivateur à Kaporo" },
          { n: 8, nom: "M. Kalissa Grégoire", mention: "Commis au Port" },
          { n: 9, nom: "M. Bangoura Balaké", mention: "cultivateur à Koromanya, Conakry I" },
          { n: 10, nom: "M. Couyaté Diéli Bakar", mention: "Directeur Adjoint ONCFG" },
          { n: 11, nom: "M. Démba Seydou", mention: "ex-Secrétaire général Camayenne" },
          { n: 12, nom: "M. Bangoura Soriba", mention: "employé de commerce à Kouléwondi" },
          { n: 13, nom: "M. Keïta Noumandian", mention: "Chef d'État-Major Général" },
          { n: 14, nom: "M. Camara Alpha", mention: "Directeur de la Sûreté" },
          { n: 15, nom: "M. Hadiri Babadi", mention: "adjoint Commandant de région" },
          { n: 16, nom: "M. Camara Mohamed Lamine", mention: "Commis à la Présidence, Conakry II" },
          { n: 17, nom: "M. Cissé Sény", mention: "à Tanènè, Conakry I" },
          { n: 18, nom: "M. Cissé Moustapha", mention: "Député" },
          { n: 19, nom: "M. Bah Thierno", mention: "Député" },
          { n: 20, nom: "M. Tall Habib", mention: "Député" },
          { n: 21, nom: "M. Diallo Aguibou", mention: "Député" },
          { n: 22, nom: "M. Touré Dondo", mention: "Député" },
          { n: 23, nom: "M. Mané Bounka", mention: "Député" },
          { n: 24, nom: "M. Caba Lamine Ibrahima", mention: "Député" },
          { n: 25, nom: "El-hadj Keïta Mory", mention: "Député" },
          { n: 26, nom: "M. Soumah Nabi Issa", mention: "Député" },
          { n: 27, nom: "M. Keïta Ouremba", mention: "Député" },
          { n: 28, nom: "M. Baldé Mamadou Tanou", mention: "Député" },
          { n: 29, nom: "M. Diallo Amadou Télivel", mention: "Député" },
          { n: 30, nom: "M. Demarchelier Jacques", mention: "Député" },
          { n: 31, nom: "M. Diallo Alpha Mamadou", mention: "Député" },
          { n: 32, nom: "M. Béavogui Koma", mention: "Député" },
          { n: 33, nom: "M. Doré Lama", mention: "Député" },
          { n: 34, nom: "M. Bah Thierno Ousmane", mention: "Député" },
          { n: 35, nom: "M. Thiam Mamadou", mention: "Député" },
          { n: 36, nom: "M. Diallo Ibrahima", mention: "Député" },
          { n: 37, nom: "M. Sy Boubacar", mention: "Député" },
          { n: 38, nom: "M. Kaba Abdoulaye", mention: "commerçant, Boulbinet I" },
          { n: 39, nom: "M. Fall El-hadj Tioubale", mention: "Conakry II" },
          { n: 40, nom: "M. Ballat Jean", mention: "Conakry II" },
          { n: 41, nom: "Mme Youla N'Mai", mention: "ex-Présidente Cameroun, Conakry II" },
          { n: 42, nom: "M. Soumah Jean", mention: "Menuiserie à Koromandian, Conakry I" },
          { n: 43, nom: "Mme Bouré Anna", mention: "Ménagère à Kassa, Conakry III" },
          { n: 44, nom: "M. Touré Lamine", mention: "Commis Eaux et Forêts" },
          { n: 45, nom: "M. Camara Oumar Dinn", mention: "Secrétaire général CNTG" },
          { n: 46, nom: "M. Conté Saïdou", mention: "Ambassadeur de Guinée en URSS" },
          { n: 47, nom: "M. Keïta Kara", mention: "Inspecteur de Police" },
          { n: 48, nom: "M. Diallo Boubacar", mention: "Inspecteur de Police" },
          { n: 49, nom: "M. Camara Balla", mention: "Assistant de Police" },
          { n: 50, nom: "M. Tounkara Tibou", mention: "Inspecteur de la Jeunesse" },
          { n: 51, nom: "M. Béhenzin Louis", mention: "Proviseur du Lycée Technique" },
          { n: 52, nom: "M. Touré Momo", mention: "Secrétaire à la Bourse du Travail" },
          { n: 53, nom: "M. Diallo Ibrahima Sory", mention: "Infirmier, conseiller général Coronthie" },
          { n: 54, nom: "M. Diallo Abdoulaye", mention: "Ministre résident au Ghana" },
          { n: 55, nom: "M. Touré Mamourou", mention: "Permanence Nationale" },
          { n: 56, nom: "M. Youla Nabi", mention: "Ambassadeur de Guinée en France" },
          { n: 57, nom: "M. Diallo Telli", mention: "Ambassadeur de Guinée aux États-Unis" },
          { n: 58, nom: "M. Touré Fodé", mention: "Président Cour d'Appel" },
          { n: 59, nom: "M. Faber Paul", mention: "Procureur général" },
          { n: 60, nom: "M. Barry Sory", mention: "Directeur général de la Production" },
          { n: 61, nom: "M. Diane Ibrahima", mention: "Directeur Douanes" },
          { n: 62, nom: "M. Sow Seydou", mention: "Inspecteur général des AAF" },
          { n: 63, nom: "M. Barry Boubakar", mention: "Directeur de Cabinet du Président de la République" },
          { n: 64, nom: "M. Camara Balla", mention: "Secrétaire général du Gouvernement" },
          { n: 65, nom: "M. Camara Sékou", mention: "Directeur Cabinet Ministre TP" },
          { n: 66, nom: "M. Barry Alpha Ousmane", mention: "Inspecteur des AA" },
          { n: 67, nom: "M. Dinn Ignace", mention: "Médecin principal" },
          { n: 68, nom: "M. Baldé Ousmane", mention: "Directeur général BCRG" },
          { n: 69, nom: "M. Sultan Gabriel", mention: "Médecin-chef Insp. Médicale des Écoles" },
          { n: 70, nom: "M. Touré Lamine", mention: "Directeur du Port" },
          { n: 71, nom: "M. Sall Khalilou", mention: "Directeur de l'Office National des CF" },
          { n: 72, nom: "M. Mignard Eugène", mention: "Directeur de la Station Rizicole de Koba" },
          { n: 73, nom: "M. Soumah Sékou", mention: "Directeur de la Station Rizicole de Bordo (Kankan)" },
          { n: 74, nom: "M. Diallo Salla", mention: "Lieutenant en retraite" },
          { n: 75, nom: "M. Camara Maurice", mention: "Secrétaire général Assemblée Nationale" },
          { n: 76, nom: "M. Traoré Mamadou dit Ray Autra", mention: "Directeur Adjt Institut National Recherches et Documentation" },
          { n: 77, nom: "M. Bangoura Kanfori", mention: "Directeur Cabinet Ministre du Travail et des Lois Sociales" },
          { n: 78, nom: "M. Touré Salifou", mention: "Directeur de Cabinet Ministère de la Fonction Publique" },
          { n: 79, nom: "M. Sow Mamadou", mention: "Directeur adjoint Ministère du Plan" },
          { n: 80, nom: "Lieutenant Bavogui Kékoura", mention: "Commandant de la Gendarmerie Nationale" },
          { n: 81, nom: "M. Keïta Mamoudou", mention: "Inspecteur de la Garde Républicaine" },
          { n: 82, nom: "Capitaine Keïta N'Gaye", mention: "Commandant Camp Alpha Yaya" },
          { n: 83, nom: "M. Diallo Mamoudou", mention: "Commandant Camp Soundiata Keïta, Kankan" },
          { n: 84, nom: "M. Keïta Namory", mention: "État-Major Général" },
          { n: 85, nom: "S/Lt. Tounkara Boubacar", mention: "Commandant Camp Béhanzin" },
          { n: 86, nom: "M. Zoumanigui Kékoura", mention: "Commandant Camp M'Balia" },
          { n: 87, nom: "Lieutenant Kourouma Somah", mention: "Commandant Camp El-hadj Omar" },
          { n: 88, nom: "Lieutenant Barry Siradio", mention: "Commandant Camp Kèmè Bouréma (Kindia)" },
          { n: 89, nom: "M. Foulah Henri", mention: "Chef de Cabinet du Ministère de la Défense Nationale" },
          { n: 90, nom: "S/Lt. Soumah Abou", mention: "Commandant Camp Almamy Samory" },
          { n: 91, nom: "M. Tompapa Émile", mention: "Radiodiffusion Nationale" },
          { n: 92, nom: "M. Camara Foromo", mention: "Planton à la Région administrative" },
        ],
      },
      {
        titre: "2ᵉ Région administrative de Boffa",
        entrees: [
          { n: 93, nom: "M. Soumah Sékou Tidiani", mention: "Boffa" },
          { n: 94, nom: "M. Soumah Yadi", mention: "Boffa" },
          { n: 95, nom: "M. Conté Malik", mention: "Boffa" },
          { n: 96, nom: "M. Bangoura Mory Sory", mention: "Kuba" },
          { n: 97, nom: "Mme Bangoura N'Mah", mention: "Présidente à Tatéma, Koba" },
          { n: 98, nom: "M. Baldé Siradjou", mention: "Commandant de région" },
        ],
      },
      {
        titre: "3ᵉ Région administrative de Boké",
        entrees: [
          { n: 99, nom: "M. Corréa Louis", mention: "Infirmier AMG" },
          { n: 100, nom: "M. Camara Kemoko", mention: "Instituteur" },
          { n: 101, nom: "M. Diallo Mamadou Saliou. **4ᵉ Région administrative de Beyla**\\", mention: "" },
          { n: 102, nom: "M. Koné Mamadou", mention: "Président à Sinko ;\\" },
          { n: 103, nom: "M. Sagno Kerfalla ;\\", mention: "" },
          { n: 104, nom: "M. Touré Ibrahima. **5ᵉ Région administrative de Dalaba**\\", mention: "" },
          { n: 105, nom: "Mme Camara Makoto", mention: "ménagère ;\\" },
          { n: 106, nom: "M. Camara Baba Gallé", mention: "Infirmier AMG ;\\" },
          { n: 107, nom: "M. Sow Ahmadou N'Diaby", mention: "chauffeur ;\\" },
          { n: 108, nom: "M. Baldé Oumar", mention: "Commis auxiliaire. **6ᵉ Région administrative de Dabola**\\" },
          { n: 109, nom: "M. Kondé Facély", mention: "Adjoint technique ;\\" },
          { n: 110, nom: "M. Délacour George ;\\", mention: "" },
          { n: 111, nom: "Mme Touré Saran", mention: "ménagère ;\\" },
          { n: 112, nom: "M. Niaré Yaya", mention: "commandant de région ;\\" },
          { n: 113, nom: "M. Diop Mamadou", mention: "Instituteur à Bissikrima ;\\" },
          { n: 114, nom: "M. Keïta Wodia", mention: "Kouroussa-Bissikrima ;\\" },
          { n: 115, nom: "M. Keïta Féfing", mention: "Infirmier à Bissikrima. **7ᵉ Région administrative de Dinguiraye**\\" },
          { n: 116, nom: "M. Fofana Sékou", mention: "Commandant de région ;\\" },
          { n: 117, nom: "M. Camara Tibou", mention: "cultivateur ;\\" },
          { n: 118, nom: "Mme Tounkara Mayéni ;\\", mention: "" },
          { n: 119, nom: "Mme Kouyaté Yagonaréni", mention: "" },
        ],
      },
      {
        titre: "8ᵉ Région administrative de Dubréka",
        entrees: [
          { n: 120, nom: "M. Soumah Moricani", mention: "Maire de Dubréka" },
          { n: 121, nom: "M. Bangoura Mamadou Kena", mention: "" },
          { n: 122, nom: "Mme Bangoura N'Sira", mention: "" },
          { n: 123, nom: "Mme Sylla Mama Aïssata", mention: "ménagère à Kouria" },
          { n: 124, nom: "M. Bangoura Morikogne", mention: "" },
          { n: 125, nom: "M. Soumah Samba", mention: "" },
          { n: 126, nom: "M. Fofana Ibrahima", mention: "commerçant à Sanoyah" },
          { n: 127, nom: "M. Camara Momo", mention: "cultivateur à Sanoyah" },
          { n: 128, nom: "Mme Soumah Marma Adama", mention: "ménagère à Kountiya, Sanoyah" },
          { n: 129, nom: "M. Sylla Morikani", mention: "cultivateur à Ouassou" },
          { n: 130, nom: "Mme Sylla Binti", mention: "ménagère à Ouassou" },
          { n: 131, nom: "M. Sylla Ansoumane dit koto", mention: "cultivateur à Badi, Ouassou" },
          { n: 132, nom: "M. Bangoura Nabi", mention: "Commis état civil, Coyah" },
          { n: 133, nom: "M. Bangoura Dankimoussa", mention: "notable à Coyah" },
          { n: 134, nom: "M. Sylla Samaké Khaly", mention: "cultivateur à Coyah" },
          { n: 135, nom: "M. Camara Fodé Moussa", mention: "cultivateur à Manéah" },
          { n: 136, nom: "M. Camara Moussa", mention: "cultivateur à Manéah" },
          { n: 137, nom: "Mme Camara Magbé", mention: "ménagère à Manéah" },
          { n: 138, nom: "M. Bangoura Abou Yérilaye", mention: "tailleur à Wonkifong" },
          { n: 139, nom: "Mme Sylla Mafoulé", mention: "ménagère à Manéah" },
          { n: 140, nom: "M. Camara Fodé Aïsény", mention: "cultivateur à Wonkifong" },
        ],
      },
      {
        titre: "9ᵉ Région administrative de Faranah",
        entrees: [
          { n: 141, nom: "M. Oularé Koutamory", mention: "infirmier vétérinaire" },
          { n: 142, nom: "M. Oularé Fakémo", mention: "" },
          { n: 143, nom: "Mme Camara Masso", mention: "ménagère" },
          { n: 144, nom: "M. Barry Mamadou", mention: "Commandant de région" },
          { n: 145, nom: "M. Touré Zakariaou", mention: "Chef poste administratif de Bagna [...]" },
        ],
      },
      {
        titre: "10ᵉ Région administrative de Fria",
        entrees: [
          { n: 146, nom: "M. Paye Ibrahima", mention: "Délégué du Gouvernement" },
        ],
      },
      {
        titre: "11ᵉ Région administrative de Kérouané",
        entrees: [
          { n: 147, nom: "M. Loua Fassou Rane", mention: "Instituteur" },
          { n: 148, nom: "M. Camara Balia", mention: "Délégué du Gouvernement" },
          { n: 149, nom: "M. Touré Nouni", mention: "" },
        ],
      },
      {
        titre: "12ᵉ Région administrative de Kindia",
        entrees: [
          { n: 150, nom: "M. Camara Fodé Ibrahima", mention: "cultivateur à Tafory, Kindia" },
          { n: 151, nom: "Mme Bangoura Mabinty", mention: "teinturière Kindia" },
          { n: 152, nom: "M. Fofana Aboubacar dit Gaston", mention: "tailleur Kindia" },
        ],
      },
      {
        titre: "13ᵉ Région administrative de Kouroussa",
        entrees: [
          { n: 153, nom: "M. Diawara Daman", mention: "tailleur à Kouroussa" },
          { n: 154, nom: "M. Camara Badomady", mention: "tailleur à Kouroussa" },
          { n: 155, nom: "Mme Keïta Kandia", mention: "ménagère à Kobané, Kouroussa" },
        ],
      },
      {
        titre: "14ᵉ Région administrative de Kissidougou",
        entrees: [
          { n: 156, nom: "M. Touré Pierre", mention: "Service des Mines" },
          { n: 157, nom: "M. Kourouma Youssouf", mention: "Ingénieur des Eaux et Forêts" },
          { n: 158, nom: "M. Hilal Mohamed Ouazzi", mention: "" },
          { n: 159, nom: "M. Diaré Yayé", mention: "" },
          { n: 160, nom: "M. Souaré Daman", mention: "maire de Dialekora" },
          { n: 161, nom: "M. Keïta Sidiki Aboubacar", mention: "Instituteur" },
        ],
      },
      {
        titre: "15ᵉ Région administrative de Labé",
        entrees: [
          { n: 162, nom: "Mme Diénéba Damba", mention: "ménagère" },
          { n: 163, nom: "M. Thiemo Sakoba", mention: "Représentant, Labé" },
          { n: 164, nom: "M. Samaké Karamoko", mention: "Maître / menuisier, Labé" },
        ],
      },
      {
        titre: "16ᵉ Région administrative de Macenta",
        entrees: [
          { n: 165, nom: "Mme Camara Kan", mention: "Macenta" },
          { n: 166, nom: "M. Kel Rene", mention: "Secrétaire permanent" },
          { n: 167, nom: "M. Camara Mamadou", mention: "Planton Inspecteur du travail" },
          { n: 168, nom: "M. Sylla Slaka", mention: "Commis TP" },
          { n: 169, nom: "Mme Keïta Fatou", mention: "ménagère" },
          { n: 170, nom: "M. Bangoura Fode", mention: "menuisier" },
        ],
      },
      {
        titre: "17ᵉ Région administrative de Forécariah",
        entrees: [
          { n: 171, nom: "M. Keïta Aboubacar", mention: "Infirmier A.M.O" },
          { n: 172, nom: "M. Touré Mohamed Najir", mention: "commis" },
          { n: 173, nom: "Mme Yoni M'Mah Youin", mention: "ménagère" },
          { n: 174, nom: "M. Hervé Alexandre", mention: "Chef poste Douanes Farmorinh" },
          { n: 175, nom: "Mme Traoré Mambalou", mention: "ménagère à Farmorinh" },
          { n: 176, nom: "M. Camara Lamine", mention: "commerçant à Farmoriah" },
          { n: 177, nom: "Mme Soumah Margot", mention: "ménagère à N'Kampa, Benty" },
          { n: 178, nom: "M. Soumah Fodé", mention: "cultivateur à N'Kampa, Benty" },
          { n: 179, nom: "M. Sakho Soriba", mention: "maçon à N'Kampn, Benty" },
        ],
      },
      {
        titre: "18ᵉ Région administrative de Gaoual",
        entrees: [
          { n: 180, nom: "M. Demba Doumbia", mention: "" },
          { n: 181, nom: "M. Bangoura Yala", mention: "cultivateur à Koumbia" },
          { n: 182, nom: "M. Sankon Fofana", mention: "" },
          { n: 183, nom: "Mme Doumbouya Sanoba", mention: "ménagère à Gaoual" },
        ],
      },
      {
        titre: "19ᵉ Région administrative de Guéckédou",
        entrees: [
          { n: 184, nom: "M. Milimono N'Boké", mention: "cultivateur à Téméssadou" },
          { n: 185, nom: "M. Tinkiano Antoine", mention: "tailleur à Guéckédou" },
          { n: 186, nom: "Mme Milimono Sia", mention: "ménagère à Nongoa" },
        ],
      },
      {
        titre: "20ᵉ Région administrative de Kankan",
        entrees: [
          { n: 187, nom: "Mme Diawara Diéne", mention: "ménagère" },
          { n: 188, nom: "M. Chérif Sékou", mention: "Commis Permanence" },
          { n: 189, nom: "Mme Kanté Nakandé", mention: "ménagère à Kankan" },
          { n: 190, nom: "M. Camara Bonko", mention: "chauffeur T.P Macenta" },
        ],
      },
      {
        titre: "21ᵉ Région administrative de Mali",
        entrees: [
          { n: 191, nom: "M. Fofana Amara", mention: "tailleur à Mali" },
          { n: 192, nom: "M. Baldé Mohamed Bailo", mention: "" },
          { n: 193, nom: "Mme Sylla N'Sira", mention: "ménagère à Mali" },
          { n: 194, nom: "M. Diallo Oumar Labo", mention: "commerçant à Yambéring" },
          { n: 195, nom: "M. Diallo Thiemo Oumar", mention: "" },
          { n: 196, nom: "M. Kanté Mata", mention: "" },
        ],
      },
      {
        titre: "22ᵉ Région administrative de N'Zérékoré",
        entrees: [
          { n: 197, nom: "M. Yogo Idrissa", mention: "planteur à N'Zérékoré" },
          { n: 198, nom: "M. Poné Diarra", mention: "planteur à N'Zérékoré" },
          { n: 199, nom: "M. Bahaouo Jean", mention: "mécanicien à N'Zérékoré" },
          { n: 200, nom: "Mme Soumaoro Mariama", mention: "ménagère à N'Zérékoré" },
          { n: 201, nom: "M. Koto Gbéa", mention: "planteur à Orakora, Yomou" },
          { n: 202, nom: "M. Néma Lopon", mention: "Yomou" },
          { n: 203, nom: "M. Yagbaoro Ougnaboro", mention: "Maire Yomou" },
        ],
      },
      {
        titre: "23ᵉ Région administrative de Pita",
        entrees: [
          { n: 204, nom: "M. Camara Difbré", mention: "commerçant à Pita" },
          { n: 205, nom: "M. Condé Mary", mention: "Agent PTT, Pita" },
          { n: 206, nom: "Mme Cissé Houmou", mention: "ménagère" },
        ],
      },
      {
        titre: "24ᵉ Région administrative de Siguiri",
        entrees: [
          { n: 207, nom: "M. Traoré N'Ki", mention: "Commandant région" },
          { n: 208, nom: "M. Sidibé Dian", mention: "cultivateur à Siguiri" },
          { n: 209, nom: "M. Diakité Sékou", mention: "cultivateur à Dalakan, Siguiri" },
          { n: 210, nom: "Mme Camara Diéké", mention: "ménagère à Diambaya, Siguiri" },
        ],
      },
      {
        titre: "25ᵉ Région administrative de Télimélé",
        entrees: [
          { n: 211, nom: "M. Camara Salifou", mention: "cultivateur" },
          { n: 212, nom: "Mme N'Diaye Aïssatou", mention: "Télimélé" },
          { n: 213, nom: "M. Kourouma Famba", mention: "agent technique Santé, Télimélé" },
        ],
      },
      {
        titre: "26ᵉ Région administrative de Tougué",
        entrees: [
          { n: 214, nom: "M. Touré El-hadj Mouctar", mention: "marabout à Tougué" },
          { n: 215, nom: "Mme Baldé Pété", mention: "ménagère à Tougué" },
          { n: 216, nom: "M. Mara Douba", mention: "maçon à Tougué" },
        ],
      },
      {
        titre: "27ᵉ Région administrative de Younkounkoun",
        entrees: [
          { n: 217, nom: "M. Fofana N'Doungou", mention: "dioula, Younkounkoun" },
          { n: 218, nom: "M. Diallo Saradiouma", mention: "cultivateur à Younkounkoun" },
          { n: 219, nom: "M. Bairou Nouhou", mention: "Maire de Sarabaïdo, Younkounkoun" },
        ],
      },
    ],
  },
];

export const MEMORIAL_SOURCES: string[] = [
  "André Lewin, Ahmed Sékou Touré (1922-1984), Président de la Guinée — Tome 2 (1956-1958), L'Harmattan, 2009 : Annexe 2 (premier gouvernement), Annexe 3 (Bureau), Annexe 4 (membres de l'Assemblée).",
  "Sidiki Kobélé Kéita, Esquisses biographiques des Premiers Députés Guinéens, Éditions Universitaires, Conakry, 1995.",
  "Panneau commémoratif « Les bénéficiaires de la Croix du Compagnon de l'Indépendance (1959-1960) » (Secrétariat Général du Gouvernement).",
  "Exposition « Les Pionniers », SENAG 2026 — Semaine Nationale des Archives de Guinée (25-30 juin 2026, Plage Camayenne).",
];

export const MEMORIAL_AVERTISSEMENT =
  "Document de travail — reconstitution documentaire. L'attribution nominative reste à vérifier ponctuellement sur le Journal officiel de la Guinée française (avril 1957) et sur les décrets originaux de 1959 et 1960. Les passages illisibles du panneau source ont été écartés plutôt qu'inventés.";
