// ============================================================================
// SeNAG — Jeu chronologique de la mémoire nationale
// 100 questions sur 8 siècles d'histoire guinéenne (1200 → 2026)
// ----------------------------------------------------------------------------
// L'Atelier Solidaire / Projet Pati — pour la 1ère Semaine Nationale
// des Archives de la Guinée (SeNAG), 25-30 juin 2026
// ============================================================================

export type GameCategory =
  | 'patrimoine'        // Empires + Résistance (1200-1900) — couleur ocre
  | 'politique'         // Faits politico-diplomatiques (hors institutionnel) — couleur or
  | 'culturel'          // Musique, littérature, arts, patrimoine immatériel — couleur indigo
  | 'sportif'           // Football, basket, boxe, handball — couleur vert
  | 'constitutionnel';  // Constitutions, référendums, prises de pouvoir — couleur bleu encre

export type GameDifficulty = 'decouverte' | 'citoyen' | 'archiviste';

export type GameEra =
  | 'sosso'         // ~1180-1235
  | 'mali'          // 1235-1500
  | 'songhai'       // 1464-1591
  | 'fouta'         // 1725-1896
  | 'resistance'    // 1857-1912
  | 'colonie'       // 1898-1958
  | 'republique';   // 1958-2026

export interface GameQuestion {
  id: string;
  category: GameCategory;
  difficulty: GameDifficulty;
  era: GameEra;
  event: string;
  date: string;        // Format affichable, ex. "29 septembre 1898"
  year: number;        // Année principale pour tri chronologique et placement frise
  iso?: string;        // OPTIONNEL — clé de tri fine au format YYYY-MM-DD.
                       // OBLIGATOIRE pour toute entrée dont l'année est partagée
                       // avec une autre entrée du même pool (ex. 1958, 2010, 2021).
                       // Sans iso, le tri retombe sur year (1ᵉʳ janvier de l'année).
  place: string;
  archiveSource: string;
  status: 'verified' | 'to-confirm';
  note?: string;
}

// ----------------------------------------------------------------------------
// Fonction utilitaire de tri chronologique fin
// ----------------------------------------------------------------------------
// Utilise `iso` (YYYY-MM-DD) si présent, sinon retombe sur `year` (1er janvier).
// Garantit un ordre déterministe même quand plusieurs entrées partagent une année.
export function sortKey(q: GameQuestion): number {
  if (q.iso) {
    const t = Date.parse(q.iso);
    if (!Number.isNaN(t)) return t;
  }
  return Date.parse(`${q.year}-01-01`);
}

// ----------------------------------------------------------------------------
// 🏹 PATRIMOINE — 25 questions (ocre)
// ----------------------------------------------------------------------------
const patrimoine: GameQuestion[] = [
  // — Découverte (8) —
  {
    id: 'PAT-D-01',
    category: 'patrimoine', difficulty: 'decouverte', era: 'mali',
    event: 'Bataille de Kirina — Soundiata Keïta défait Soumaoro Kanté',
    date: '1235', year: 1235, iso: '1235-01-01',
    place: 'Kirina, plaine du Manden',
    archiveSource: 'Tradition orale Djeli (UNESCO PCI)',
    status: 'verified',
    note: 'Fin de l\'Empire Sosso, naissance de l\'Empire du Mali',
  },
  {
    id: 'PAT-D-02',
    category: 'patrimoine', difficulty: 'decouverte', era: 'mali',
    event: 'Promulgation de la Charte du Mandén (Kurukan Fuga) — 44 articles',
    date: '1236', year: 1236,
    place: 'Kurukan Fuga (plaine du Mandé)',
    archiveSource: 'UNESCO PCI 2009 / Atelier Kankan 1998',
    status: 'verified',
  },
  {
    id: 'PAT-D-03',
    category: 'patrimoine', difficulty: 'decouverte', era: 'fouta',
    event: 'Fondation de l\'Imamat théocratique du Fouta-Djalon',
    date: '1725', year: 1725,
    place: 'Fouta-Djalon, Timbo',
    archiveSource: 'Archives Diwal Fouta / chronique Karamoko Alpha',
    status: 'verified',
  },
  {
    id: 'PAT-D-04',
    category: 'patrimoine', difficulty: 'decouverte', era: 'resistance',
    event: 'Bataille de Porédaka — chute de l\'Almamy Bôkar Biro',
    date: '14 novembre 1896', year: 1896,
    place: 'Porédaka, Fouta-Djalon',
    archiveSource: 'Archives coloniales / veille Pati série Résistance',
    status: 'verified',
    note: 'Fin de l\'indépendance du Fouta',
  },
  {
    id: 'PAT-D-05',
    category: 'patrimoine', difficulty: 'decouverte', era: 'resistance',
    event: 'Arrestation de l\'Almamy Samory Touré par le capitaine Gouraud',
    date: '29 septembre 1898', year: 1898,
    place: 'Guélémou (actuelle Côte d\'Ivoire)',
    archiveSource: 'Archives coloniales / France Archives / Herodote',
    status: 'verified',
    note: '17 ans de résistance — fin de l\'Empire du Wassoulou',
  },
  {
    id: 'PAT-D-07',
    category: 'patrimoine', difficulty: 'decouverte', era: 'resistance',
    event: 'Délégation de Dinah Salifou auprès du président Sadi Carnot',
    date: '1889', year: 1889,
    place: 'Paris',
    archiveSource: 'Archives diplomatiques françaises / veille Pati',
    status: 'verified',
    note: 'Roi des Nalous — résistance par la diplomatie',
  },
  {
    id: 'PAT-D-08',
    category: 'patrimoine', difficulty: 'decouverte', era: 'mali',
    event: 'Pèlerinage de Mansa Moussa, empereur du Mali, à La Mecque',
    date: '1324', year: 1324,
    place: 'Le Caire / La Mecque',
    archiveSource: 'Chroniques arabes (Al-Umari) / UNESCO',
    status: 'verified',
  },
  {
    id: 'PAT-D-09',
    category: 'patrimoine', difficulty: 'decouverte', era: 'mali',
    event: 'Couronnement de Soundiata Keïta comme Mansa du Mali',
    date: '1235', year: 1235, iso: '1235-06-01',
    place: 'Kaaba (Kangaba), Manden',
    archiveSource: 'Tradition orale Djeli / récit du Mansa Jigi',
    status: 'to-confirm',
    note: 'Acte fondateur de l\'Empire du Mali',
  },
  // — Citoyen (10) —
  {
    id: 'PAT-C-01',
    category: 'patrimoine', difficulty: 'citoyen', era: 'resistance',
    event: 'Exil d\'Alpha Yaya Diallo, roi du Labé',
    date: '1905', year: 1905,
    place: 'Du Fouta-Djalon vers le Dahomey puis la Mauritanie',
    archiveSource: 'Archives coloniales / hymne national Liberté',
    status: 'verified',
  },
  {
    id: 'PAT-C-04',
    category: 'patrimoine', difficulty: 'citoyen', era: 'resistance',
    event: 'Résistance du Wali de Goumba face à la pénétration coloniale',
    date: '1911', year: 1911,
    place: 'Goumba, Fouta-Djalon',
    archiveSource: 'Archives coloniales / veille Pati Résistance',
    status: 'verified',
  },
  {
    id: 'PAT-C-07',
    category: 'patrimoine', difficulty: 'citoyen', era: 'colonie',
    event: 'Décret organisant la « Guinée française et dépendances »',
    date: '17 décembre 1891', year: 1891,
    place: 'Paris (signé par le président Sadi Carnot)',
    archiveSource: 'Journal Officiel de la République française',
    status: 'verified',
  },
  {
    id: 'PAT-C-08',
    category: 'patrimoine', difficulty: 'citoyen', era: 'colonie',
    event: 'Intégration de la Guinée à l\'Afrique Occidentale Française (AOF)',
    date: '1904', year: 1904,
    place: 'Dakar / Conakry',
    archiveSource: 'Archives nationales d\'outre-mer (ANOM)',
    status: 'verified',
  },
  {
    id: 'PAT-C-09',
    category: 'patrimoine', difficulty: 'citoyen', era: 'colonie',
    event: 'Massacre des tirailleurs ouest-africains à Thiaroye',
    date: '1ᵉʳ décembre 1944', year: 1944,
    place: 'Thiaroye, Sénégal',
    archiveSource: 'Archives militaires françaises / témoignages',
    status: 'verified',
    note: 'Des soldats guinéens parmi les victimes',
  },
  {
    id: 'PAT-C-10',
    category: 'patrimoine', difficulty: 'citoyen', era: 'colonie',
    event: 'Loi-cadre Defferre — autonomie interne pour les territoires d\'AOF',
    date: '23 juin 1956', year: 1956,
    place: 'Paris',
    archiveSource: 'Journal Officiel de la République française',
    status: 'verified',
  },
  // — Archiviste (7) —
  {
    id: 'PAT-A-01',
    category: 'patrimoine', difficulty: 'archiviste', era: 'fouta',
    event: 'Adoption du diwal (organisation politico-religieuse à 9 provinces) du Fouta',
    date: 'vers 1727', year: 1727,
    place: 'Timbo, Fouta-Djalon',
    archiveSource: 'Chroniques peules du Fouta / encyclopédie Pati Fouta',
    status: 'to-confirm',
    note: 'Date à valider — diwal = province théocratique',
  },
  {
    id: 'PAT-A-02',
    category: 'patrimoine', difficulty: 'archiviste', era: 'resistance',
    event: 'Soulèvement de Zégbéla Togba Pivi en Guinée forestière',
    date: 'années 1908-1910', year: 1908,
    place: 'Guinée forestière',
    archiveSource: 'Archives coloniales / veille Pati Résistance',
    status: 'to-confirm',
  },
  {
    id: 'PAT-A-03',
    category: 'patrimoine', difficulty: 'archiviste', era: 'resistance',
    event: 'Résistance de Kissi Kaba Keïta dans la forêt',
    date: 'années 1910', year: 1910,
    place: 'Guinée forestière',
    archiveSource: 'Archives coloniales / veille Pati Résistance',
    status: 'to-confirm',
  },
  {
    id: 'PAT-A-05',
    category: 'patrimoine', difficulty: 'archiviste', era: 'colonie',
    event: 'Premier débarquement portugais sur les côtes guinéennes',
    date: '1444-1446', year: 1444,
    place: 'Côte des Rivières du Sud',
    archiveSource: 'Chroniques portugaises (Zurara)',
    status: 'verified',
  },
  {
    id: 'PAT-A-06',
    category: 'patrimoine', difficulty: 'archiviste', era: 'colonie',
    event: 'Fondation de la ville de Conakry par les Français',
    date: '1885-1890', year: 1885,
    place: 'Île de Tombo',
    archiveSource: 'Archives coloniales / cartographie ANOM',
    status: 'verified',
  },
];

// ----------------------------------------------------------------------------
// 🏛️ POLITIQUE — 15 questions (or)
// Faits politico-diplomatiques hors institutionnel pur
// ----------------------------------------------------------------------------
const politique: GameQuestion[] = [
  // — Découverte (5) —
  {
    id: 'POL-D-01',
    category: 'politique', difficulty: 'decouverte', era: 'republique',
    event: 'Discours de Sékou Touré devant le Général de Gaulle',
    date: '25 août 1958', year: 1958, iso: '1958-08-25',
    place: 'Conakry, Assemblée Territoriale',
    archiveSource: 'Archives présidentielles / INA',
    status: 'verified',
    note: '« Nous préférons la liberté dans la pauvreté à la richesse dans l\'esclavage »',
  },
  {
    id: 'POL-D-02',
    category: 'politique', difficulty: 'decouverte', era: 'republique',
    event: 'Proclamation de l\'indépendance de la Guinée',
    date: '2 octobre 1958', year: 1958, iso: '1958-10-02',
    place: 'Conakry',
    archiveSource: 'Journal Officiel de la République de Guinée',
    status: 'verified',
  },
  {
    id: 'POL-D-03',
    category: 'politique', difficulty: 'decouverte', era: 'republique',
    event: 'Admission de la Guinée à l\'Organisation des Nations Unies',
    date: '12 décembre 1958', year: 1958, iso: '1958-12-12',
    place: 'New York, Siège de l\'ONU',
    archiveSource: 'Archives ONU',
    status: 'verified',
  },
  {
    id: 'POL-D-04',
    category: 'politique', difficulty: 'decouverte', era: 'republique',
    event: 'Création de l\'armée nationale guinéenne',
    date: '1ᵉʳ novembre 1958', year: 1958, iso: '1958-11-01',
    place: 'Conakry',
    archiveSource: 'Ordonnance N°23 du 16 décembre 1958',
    status: 'verified',
  },
  {
    id: 'POL-D-05',
    category: 'politique', difficulty: 'decouverte', era: 'republique',
    event: 'Création du franc guinéen et de la Banque de la République de Guinée',
    date: '1ᵉʳ mars 1960', year: 1960,
    place: 'Conakry',
    archiveSource: 'BCRG / Décret 1960',
    status: 'verified',
    note: 'Rupture avec la zone franc CFA',
  },
  // — Citoyen (6) —
  {
    id: 'POL-C-01',
    category: 'politique', difficulty: 'citoyen', era: 'republique',
    event: 'Coalition des 4 partis politiques guinéens pour le NON (PDG, DSG, BAG, Indépendants de Habib Tall)',
    date: 'septembre 1958', year: 1958, iso: '1958-09-14',
    place: 'Guinée française',
    archiveSource: 'Maitron / André Lewin Sékou Touré',
    status: 'verified',
    note: 'Mot d\'ordre du PDG donné le 14 septembre 1958',
  },
  {
    id: 'POL-C-02',
    category: 'politique', difficulty: 'citoyen', era: 'republique',
    event: 'Fondation de l\'Organisation de l\'Unité Africaine (OUA)',
    date: '25 mai 1963', year: 1963,
    place: 'Addis-Abeba, Éthiopie',
    archiveSource: 'Charte OUA',
    status: 'verified',
  },
  {
    id: 'POL-C-03',
    category: 'politique', difficulty: 'citoyen', era: 'republique',
    event: 'Diallo Telli élu 1ᵉʳ Secrétaire général de l\'OUA',
    date: '17 juillet 1964', year: 1964,
    place: 'Le Caire, Égypte',
    archiveSource: 'Archives OUA / Union africaine',
    status: 'verified',
    note: 'Mandat 1964-1972',
  },
  {
    id: 'POL-C-04',
    category: 'politique', difficulty: 'citoyen', era: 'republique',
    event: 'Jeanne Martin Cissé première femme à présider le Conseil de sécurité de l\'ONU',
    date: 'novembre 1972', year: 1972, iso: '1972-11-01',
    place: 'New York, Siège de l\'ONU',
    archiveSource: 'Archives ONU (un.org/securitycouncil)',
    status: 'verified',
  },
  {
    id: 'POL-C-05',
    category: 'politique', difficulty: 'citoyen', era: 'republique',
    event: 'Remplacement du franc guinéen par le syli',
    date: '2 octobre 1972', year: 1972, iso: '1972-10-02',
    place: 'Conakry',
    archiveSource: 'BCRG',
    status: 'verified',
    note: 'Anniversaire de l\'indépendance — symbolique forte',
  },
  {
    id: 'POL-C-06',
    category: 'politique', difficulty: 'citoyen', era: 'republique',
    event: 'Agression mercenaire contre Conakry (Opération « Mar Verde »)',
    date: '22 novembre 1970', year: 1970,
    place: 'Conakry',
    archiveSource: 'Archives militaires / Journal Officiel',
    status: 'verified',
    note: 'Tentative portugaise déjouée — date commémorée',
  },
  {
    id: 'POL-C-07',
    category: 'politique', difficulty: 'citoyen', era: 'colonie',
    event: 'Yacine Diallo élu 1ᵉʳ député guinéen à l\'Assemblée nationale française',
    date: '21 octobre 1945', year: 1945,
    place: 'Paris (élection en Guinée)',
    archiveSource: 'Assemblée nationale française (sycomore)',
    status: 'verified',
    note: 'Co-signataire de l\'acte fondateur du RDA en 1946',
  },
  {
    id: 'POL-C-08',
    category: 'politique', difficulty: 'citoyen', era: 'republique',
    event: 'Accords fondateurs Simandou — Compagnie du TransGuinéen',
    date: '10 août 2023', year: 2023,
    place: 'Conakry',
    archiveSource: 'Africa Guinée / Agence Ecofin / Rio Tinto Simfer',
    status: 'verified',
    note: 'État guinéen + Rio Tinto Simfer + Winning Consortium Simandou',
  },
  // — Archiviste (4) —
  {
    id: 'POL-A-01',
    category: 'politique', difficulty: 'archiviste', era: 'republique',
    event: 'Retour du franc guinéen et abandon du syli après dévaluation',
    date: 'janvier 1986', year: 1986,
    place: 'Conakry',
    archiveSource: 'BCRG / archives économiques',
    status: 'verified',
  },
  {
    id: 'POL-A-02',
    category: 'politique', difficulty: 'archiviste', era: 'republique',
    event: 'Massacre du stade de Conakry — répression de la manifestation contre Dadis Camara',
    date: '28 septembre 2009', year: 2009, iso: '2009-09-28',
    place: 'Stade du 28-Septembre, Conakry',
    archiveSource: 'Rapport ONU / Cour pénale internationale',
    status: 'verified',
    note: 'Journée nationale de commémoration',
  },
  {
    id: 'POL-A-03',
    category: 'politique', difficulty: 'archiviste', era: 'republique',
    event: 'Accords de Ouagadougou — feuille de route de la transition post-Dadis',
    date: '15 janvier 2010', year: 2010, iso: '2010-01-15',
    place: 'Ouagadougou, Burkina Faso',
    archiveSource: 'Archives CEDEAO',
    status: 'to-confirm',
  },
  {
    id: 'POL-A-04',
    category: 'politique', difficulty: 'archiviste', era: 'republique',
    event: 'Adhésion de la Guinée à la Communauté Économique des États de l\'Afrique de l\'Ouest (CEDEAO)',
    date: '28 mai 1975', year: 1975,
    place: 'Lagos, Nigeria',
    archiveSource: 'Traité de Lagos / Archives CEDEAO',
    status: 'verified',
  },
];

// ----------------------------------------------------------------------------
// 🎭 CULTUREL — 25 questions (indigo)
// ----------------------------------------------------------------------------
const culturel: GameQuestion[] = [
  // — Découverte (8) —
  {
    id: 'CUL-D-01',
    category: 'culturel', difficulty: 'decouverte', era: 'colonie',
    event: 'Publication de « Maître d\'école » de Fodéba Keïta',
    date: '1952', year: 1952,
    place: 'Paris (Présence Africaine)',
    archiveSource: 'BNF / Présence Africaine',
    status: 'verified',
    note: 'Poème pédagogique — mise en abyme dans le livre Pati',
  },
  {
    id: 'CUL-D-02',
    category: 'culturel', difficulty: 'decouverte', era: 'colonie',
    event: 'Parution de « L\'Enfant noir » de Camara Laye',
    date: '1953', year: 1953,
    place: 'Paris (éditions Plon)',
    archiveSource: 'BNF',
    status: 'verified',
    note: 'Roman autobiographique fondateur de la littérature guinéenne',
  },
  {
    id: 'CUL-D-03',
    category: 'culturel', difficulty: 'decouverte', era: 'republique',
    event: 'Fondation du Bembeya Jazz National',
    date: '15 avril 1961', year: 1961,
    place: 'Beyla, Guinée forestière',
    archiveSource: 'INA Guinée',
    status: 'verified',
  },
  {
    id: 'CUL-D-04',
    category: 'culturel', difficulty: 'decouverte', era: 'republique',
    event: 'Bembeya Jazz nommé Orchestre National de la République',
    date: '1966', year: 1966,
    place: 'Conakry',
    archiveSource: 'Décret présidentiel / INA',
    status: 'verified',
  },
  {
    id: 'CUL-D-06',
    category: 'culturel', difficulty: 'decouverte', era: 'republique',
    event: 'Sékou « Diamond Fingers » Diabaté sacré meilleur guitariste au FESTAC',
    date: '1977', year: 1977,
    place: 'Lagos, Nigeria',
    archiveSource: 'Archives FESTAC \'77',
    status: 'verified',
  },
  {
    id: 'CUL-D-07',
    category: 'culturel', difficulty: 'decouverte', era: 'republique',
    event: 'Création des Ballets Africains par Fodéba Keïta',
    date: '1952', year: 1952,
    place: 'Paris (puis Conakry)',
    archiveSource: 'INA / archives Ballets Africains',
    status: 'to-confirm',
    note: 'Date de fondation à préciser',
  },
  {
    id: 'CUL-D-08',
    category: 'culturel', difficulty: 'decouverte', era: 'republique',
    event: 'Bembeya Jazz reçoit le Tamani d\'Or du meilleur orchestre africain des 50 dernières années',
    date: '2011', year: 2011,
    place: 'Bamako, Mali',
    archiveSource: 'Archives Tamani d\'Or',
    status: 'verified',
    note: '50 ans après la fondation',
  },
  {
    id: 'CUL-D-09',
    category: 'culturel', difficulty: 'decouverte', era: 'republique',
    event: 'Adoption de l\'hymne national « Liberté »',
    date: '2 octobre 1958', year: 1958, iso: '1958-10-02',
    place: 'Conakry',
    archiveSource: 'Constitution du 10 novembre 1958, article 1',
    status: 'verified',
    note: 'Mélodie d\'hommage à Alpha Yaya Diallo (1904), arrangée par Fodéba Keïta',
  },
  {
    id: 'CUL-D-10',
    category: 'culturel', difficulty: 'decouverte', era: 'republique',
    event: 'Publication de « Soundjata ou l\'épopée mandingue » par Djibril Tamsir Niane',
    date: '1960', year: 1960,
    place: 'Paris (Présence Africaine)',
    archiveSource: 'BNF / Présence Africaine',
    status: 'verified',
    note: 'Première transcription savante de l\'épopée mandingue, traduite en 30+ langues',
  },
  // — Citoyen (10) —
  {
    id: 'CUL-C-01',
    category: 'culturel', difficulty: 'citoyen', era: 'republique',
    event: 'Sortie de « Demba Tigala » — 1ᵉʳ grand succès du Bembeya (composé par Sékou Diabaté)',
    date: '1964', year: 1964,
    place: 'Beyla / Conakry',
    archiveSource: 'INA',
    status: 'verified',
  },
  {
    id: 'CUL-C-02',
    category: 'culturel', difficulty: 'citoyen', era: 'republique',
    event: 'Sortie de « Mami Wata » par le Bembeya Jazz',
    date: '1973', year: 1973,
    place: 'Conakry (Syliphone)',
    archiveSource: 'INA / Syliphone',
    status: 'verified',
    note: 'Reprise par de nombreux artistes africains',
  },
  {
    id: 'CUL-C-03',
    category: 'culturel', difficulty: 'citoyen', era: 'republique',
    event: 'Sortie de l\'album « Regard sur le passé » du Bembeya Jazz (épopée de Samory)',
    date: '1968', year: 1968,
    place: 'Conakry (Syliphone)',
    archiveSource: 'INA / Syliphone',
    status: 'verified',
    note: 'Production supervisée par Sékou Touré',
  },
  {
    id: 'CUL-C-04',
    category: 'culturel', difficulty: 'citoyen', era: 'republique',
    event: 'Création de la Voix de la Révolution (radio nationale)',
    date: '1958-1959', year: 1959,
    place: 'Conakry',
    archiveSource: 'Archives RTG / INA',
    status: 'to-confirm',
  },
  {
    id: 'CUL-C-05',
    category: 'culturel', difficulty: 'citoyen', era: 'republique',
    event: 'Naissance de Mory Kanté, futur ambassadeur de la kora moderne',
    date: '29 mars 1950', year: 1950,
    place: 'Albadariah, Haute-Guinée',
    archiveSource: 'Biographies officielles',
    status: 'verified',
  },
  {
    id: 'CUL-C-06',
    category: 'culturel', difficulty: 'citoyen', era: 'republique',
    event: 'Sortie de « Yé ké yé ké » de Mory Kanté — tube planétaire',
    date: '1987', year: 1987,
    place: 'Paris',
    archiveSource: 'Archives musicales / Polydor',
    status: 'verified',
  },
  {
    id: 'CUL-C-09',
    category: 'culturel', difficulty: 'citoyen', era: 'republique',
    event: 'Collaboration musicale entre Diamond Fingers et Joss Stone (artiste soul/reggae)',
    date: '2018', year: 2018,
    place: 'Conakry',
    archiveSource: 'Presse / projet Joss Stone Total World Tour',
    status: 'verified',
  },
  {
    id: 'CUL-C-10',
    category: 'culturel', difficulty: 'citoyen', era: 'republique',
    event: 'Sortie du double album « Double Carrière » de Sékou « Diamond Fingers » Diabaté',
    date: 'novembre 2025', year: 2025,
    place: 'Conakry',
    archiveSource: 'INA',
    status: 'verified',
    note: 'Vol. 1 « Menguè » hommage à Sékou Touré',
  },
  // — Archiviste (7) —
  {
    id: 'CUL-A-01',
    category: 'culturel', difficulty: 'archiviste', era: 'republique',
    event: 'Naissance de Sékou « Diamond Fingers » Diabaté',
    date: '8 juillet 1944', year: 1944,
    place: 'Tiro, Faranah (Haute-Guinée)',
    archiveSource: 'Biographies officielles',
    status: 'verified',
  },
  {
    id: 'CUL-A-02',
    category: 'culturel', difficulty: 'archiviste', era: 'republique',
    event: 'Naissance de Mohamed Mouctar Soumah, alias Takana Zion (reggae)',
    date: '1986', year: 1986,
    place: 'Conakry',
    archiveSource: 'Presse / biographies',
    status: 'to-confirm',
    note: 'Jour et mois à valider',
  },
  {
    id: 'CUL-A-03',
    category: 'culturel', difficulty: 'archiviste', era: 'republique',
    event: 'Sortie du 1ᵉʳ album de Takana Zion « Zion Prophet »',
    date: '2007', year: 2007,
    place: 'Conakry / Paris',
    archiveSource: 'Presse musicale africaine',
    status: 'to-confirm',
  },
  {
    id: 'CUL-A-05',
    category: 'culturel', difficulty: 'archiviste', era: 'republique',
    event: 'Sortie du label Syliphone — premier label discographique d\'État',
    date: '1967', year: 1967,
    place: 'Conakry',
    archiveSource: 'INA / Syliphone',
    status: 'to-confirm',
  },
  {
    id: 'CUL-A-06',
    category: 'culturel', difficulty: 'archiviste', era: 'republique',
    event: 'Sortie de « Petit Sékou » du Bembeya Jazz — samplée internationalement',
    date: '1973', year: 1973,
    place: 'Conakry (Syliphone)',
    archiveSource: 'INA',
    status: 'to-confirm',
    note: 'Samplée par Blu « The West » 2014',
  },
  {
    id: 'CUL-A-07',
    category: 'culturel', difficulty: 'archiviste', era: 'colonie',
    event: 'Camara Laye reçoit le Prix Charles Veillon pour « L\'Enfant noir »',
    date: '1954', year: 1954,
    place: 'Lausanne, Suisse',
    archiveSource: 'Archives Prix Veillon',
    status: 'verified',
  },
  {
    id: 'CUL-A-08',
    category: 'culturel', difficulty: 'archiviste', era: 'colonie',
    event: 'Création de l\'écriture N\'Ko par Souleymane Kanté',
    date: '14 avril 1949', year: 1949,
    place: 'Bingerville, Côte d\'Ivoire',
    archiveSource: 'UNESCO / mouvement N\'Ko / archives Kankan',
    status: 'verified',
    note: 'Système alphabétique propre aux langues mandingues — patrimoine immatériel guinéen',
  },
];

// ----------------------------------------------------------------------------
// ⚽ SPORTIF — 15 questions (vert)
// ----------------------------------------------------------------------------
const sportif: GameQuestion[] = [
  // — Découverte (5) —
  {
    id: 'SPO-D-01',
    category: 'sportif', difficulty: 'decouverte', era: 'republique',
    event: 'Hafia FC remporte la Coupe d\'Afrique des clubs champions (vs Simba FC)',
    date: '1972', year: 1972,
    place: 'Kampala, Ouganda',
    archiveSource: 'Archives CAF',
    status: 'verified',
    note: 'Score cumulé 4-2 / 3-2',
  },
  {
    id: 'SPO-D-02',
    category: 'sportif', difficulty: 'decouverte', era: 'republique',
    event: 'Chérif Souleymane reçoit le Ballon d\'Or africain — seul Guinéen à ce jour',
    date: '1972', year: 1972,
    place: 'Paris (France Football)',
    archiveSource: 'France Football / CAF',
    status: 'verified',
  },
  {
    id: 'SPO-D-03',
    category: 'sportif', difficulty: 'decouverte', era: 'republique',
    event: 'Syli National vice-champion d\'Afrique — finale Guinée-Maroc 1-1',
    date: '14 mars 1976', year: 1976,
    place: 'Stade Haïlé Sélassié, Addis-Abeba',
    archiveSource: 'Archives CAF',
    status: 'verified',
    note: 'Poule finale (pas finale classique) — meilleure performance Syli en CAN',
  },
  {
    id: 'SPO-D-04',
    category: 'sportif', difficulty: 'decouverte', era: 'republique',
    event: 'Naby Keïta remporte la Ligue des Champions UEFA avec Liverpool',
    date: '1ᵉʳ juin 2019', year: 2019,
    place: 'Wanda Metropolitano, Madrid',
    archiveSource: 'UEFA / Liverpool FC',
    status: 'verified',
    note: '1ᵉʳ Guinéen à remporter la C1',
  },
  {
    id: 'SPO-D-05',
    category: 'sportif', difficulty: 'decouverte', era: 'republique',
    event: 'Double sacre mondial du handball féminin guinéen — IHF Trophy U17 et U19',
    date: '11 avril 2026', year: 2026,
    place: 'Bulgarie',
    archiveSource: 'IHF / Fédération guinéenne de Handball',
    status: 'verified',
    note: 'U17 vs Venezuela 44-21 ; U19 vs Canada 47-27',
  },
  // — Citoyen (6) —
  {
    id: 'SPO-C-01',
    category: 'sportif', difficulty: 'citoyen', era: 'republique',
    event: 'Hafia FC – 2ᵉ titre Coupe d\'Afrique des clubs (vs Enugu Rangers 2-1)',
    date: '1975', year: 1975,
    place: 'Conakry / Enugu',
    archiveSource: 'Archives CAF',
    status: 'verified',
  },
  {
    id: 'SPO-C-02',
    category: 'sportif', difficulty: 'citoyen', era: 'republique',
    event: 'Hafia FC – 3ᵉ titre Coupe d\'Afrique des clubs (vs Hearts of Oak 3-2)',
    date: '1977', year: 1977,
    place: 'Accra / Conakry',
    archiveSource: 'Archives CAF',
    status: 'verified',
    note: '1ᵉʳ club africain à réaliser le triplé',
  },
  {
    id: 'SPO-C-03',
    category: 'sportif', difficulty: 'citoyen', era: 'republique',
    event: 'Béa Diallo remporte le titre intercontinental IBF des poids moyens',
    date: '1998', year: 1998,
    place: 'Bruxelles (et Conakry pour les défenses)',
    archiveSource: 'IBF / BoxRec',
    status: 'verified',
    note: 'Titre conservé 6 ans (jusqu\'en 2004)',
  },
  {
    id: 'SPO-C-04',
    category: 'sportif', difficulty: 'citoyen', era: 'republique',
    event: 'Naby Keïta signe officiellement à Liverpool FC',
    date: '27 juin 2018', year: 2018,
    place: 'Liverpool, Royaume-Uni',
    archiveSource: 'Liverpool FC / Premier League',
    status: 'verified',
    note: 'Joueur africain le plus cher de l\'histoire à l\'époque',
  },
  {
    id: 'SPO-C-05',
    category: 'sportif', difficulty: 'citoyen', era: 'republique',
    event: 'Inauguration du Stade Petit Sory à Nongo',
    date: '2021', year: 2021,
    place: 'Nongo, Conakry',
    archiveSource: 'Archives MJS',
    status: 'verified',
    note: 'Nommé en l\'honneur de l\'ailier mythique du Hafia',
  },
  {
    id: 'SPO-C-06',
    category: 'sportif', difficulty: 'citoyen', era: 'republique',
    event: 'Les U16 garçons de Guinée champions d\'Afrique de basket (FIBA AfroBasket U16)',
    date: '20 août 2023', year: 2023,
    place: 'Salle Olympique, Monastir, Tunisie',
    archiveSource: 'FIBA Afrique',
    status: 'verified',
    note: 'Finale 84-76 face à l\'Égypte (5 fois champion) — 1ʳᵉ participation en finale',
  },
  // — Archiviste (4) —
  {
    id: 'SPO-A-01',
    category: 'sportif', difficulty: 'archiviste', era: 'republique',
    event: 'Naissance de Naby Keïta',
    date: '10 février 1995', year: 1995,
    place: 'Conakry, quartier Coléah',
    archiveSource: 'État civil / Liverpool FC',
    status: 'verified',
  },
  {
    id: 'SPO-A-02',
    category: 'sportif', difficulty: 'archiviste', era: 'republique',
    event: 'Réplique du Ballon d\'Or africain remise à Chérif Souleymane',
    date: '2020', year: 2020,
    place: 'Conakry',
    archiveSource: 'Archives FGF / presse',
    status: 'verified',
    note: 'L\'original avait été perdu en 1984',
  },
  {
    id: 'SPO-A-03',
    category: 'sportif', difficulty: 'archiviste', era: 'republique',
    event: 'Naby Keïta champion de Premier League avec Liverpool',
    date: '25 juin 2020', year: 2020,
    place: 'Liverpool',
    archiveSource: 'Premier League',
    status: 'verified',
    note: '1ᵉʳ titre de champion d\'Angleterre du club en 30 ans',
  },
  {
    id: 'SPO-A-04',
    category: 'sportif', difficulty: 'archiviste', era: 'republique',
    event: 'Mondial féminin U16 de handball — Guinée seule représentante de l\'Afrique',
    date: '15-24 octobre 2026', year: 2026,
    place: 'Brésil',
    archiveSource: 'IHF / CAHB',
    status: 'verified',
    note: 'Désignée par la CAHB suite aux performances 2026',
  },
];

// ----------------------------------------------------------------------------
// 🏛️ CONSTITUTIONNEL / RÉGIMES — 20 questions (bleu encre)
// Constitutions, référendums, prises de pouvoir, transitions
// ----------------------------------------------------------------------------
const constitutionnel: GameQuestion[] = [
  // — Découverte (6) —
  {
    id: 'CON-D-01',
    category: 'constitutionnel', difficulty: 'decouverte', era: 'republique',
    event: 'Référendum constitutionnel français — la Guinée vote NON',
    date: '28 septembre 1958', year: 1958, iso: '1958-09-28',
    place: 'Guinée française',
    archiveSource: 'Archives électorales / INA',
    status: 'verified',
    note: '95,2% de NON — acte fondateur',
  },
  {
    id: 'CON-D-02',
    category: 'constitutionnel', difficulty: 'decouverte', era: 'republique',
    event: 'Adoption de la 1ʳᵉ Constitution de la République de Guinée',
    date: '10 novembre 1958', year: 1958, iso: '1958-11-10',
    place: 'Conakry (Assemblée nationale)',
    archiveSource: 'Loi n°4/AN/58 — Journal Officiel',
    status: 'verified',
  },
  {
    id: 'CON-D-03',
    category: 'constitutionnel', difficulty: 'decouverte', era: 'republique',
    event: 'Prise du pouvoir par l\'armée — le colonel Lansana Conté ouvre la Deuxième République',
    date: '3 avril 1984', year: 1984,
    place: 'Conakry',
    archiveSource: 'Archives CMRN',
    status: 'verified',
    note: 'Ouverture de la Deuxième République',
  },
  {
    id: 'CON-D-04',
    category: 'constitutionnel', difficulty: 'decouverte', era: 'republique',
    event: 'Adoption par référendum de la Loi fondamentale — multipartisme',
    date: '23 décembre 1990', year: 1990,
    place: 'Guinée',
    archiveSource: 'Journal Officiel / Cour suprême',
    status: 'verified',
    note: 'Promulguée le 23 décembre 1991',
  },
  {
    id: 'CON-D-05',
    category: 'constitutionnel', difficulty: 'decouverte', era: 'republique',
    event: 'Prise du pouvoir par l\'armée — le CNRD dirigé par Mamadi Doumbouya',
    date: '5 septembre 2021', year: 2021, iso: '2021-09-05',
    place: 'Conakry',
    archiveSource: 'Archives CNRD',
    status: 'verified',
  },
  {
    id: 'CON-D-06',
    category: 'constitutionnel', difficulty: 'decouverte', era: 'republique',
    event: 'Prestation de serment de Mamadi Doumbouya, président élu',
    date: '17 janvier 2026', year: 2026, iso: '2026-01-17',
    place: 'Conakry',
    archiveSource: 'Cour suprême',
    status: 'verified',
    note: 'Fin de la transition',
  },
  // — Citoyen (8) —
  {
    id: 'CON-C-01',
    category: 'constitutionnel', difficulty: 'citoyen', era: 'republique',
    event: 'Adoption de la 2ᵉ Constitution (République Populaire et Révolutionnaire de Guinée)',
    date: '14 mai 1982', year: 1982,
    place: 'Conakry',
    archiveSource: 'Digithèque MJP / Journal Officiel',
    status: 'verified',
    note: 'Institutionnalisation du Parti-État',
  },
  {
    id: 'CON-C-03',
    category: 'constitutionnel', difficulty: 'citoyen', era: 'republique',
    event: '1ʳᵉ élection présidentielle pluraliste — victoire de Lansana Conté',
    date: '19 décembre 1993', year: 1993,
    place: 'Guinée',
    archiveSource: 'CENI / Cour suprême',
    status: 'verified',
  },
  {
    id: 'CON-C-04',
    category: 'constitutionnel', difficulty: 'citoyen', era: 'republique',
    event: 'Référendum supprimant la limitation des mandats présidentiels',
    date: '11 novembre 2001', year: 2001,
    place: 'Guinée',
    archiveSource: 'CENI / Cour suprême',
    status: 'verified',
    note: '98,36% de OUI (taux 87%) — boycott opposition',
  },
  {
    id: 'CON-C-05',
    category: 'constitutionnel', difficulty: 'citoyen', era: 'republique',
    event: 'Prise du pouvoir par l\'armée — le CNDD dirigé par Moussa Dadis Camara',
    date: '23 décembre 2008', year: 2008, iso: '2008-12-23',
    place: 'Conakry',
    archiveSource: 'Archives présidentielles / presse',
    status: 'verified',
  },
  {
    id: 'CON-C-06',
    category: 'constitutionnel', difficulty: 'citoyen', era: 'republique',
    event: 'Promulgation de la Constitution révisée par le général Sékouba Konaté',
    date: '7 mai 2010', year: 2010, iso: '2010-05-07',
    place: 'Conakry',
    archiveSource: 'Digithèque MJP / Journal Officiel',
    status: 'verified',
    note: 'Ouvre la Troisième République',
  },
  {
    id: 'CON-C-07',
    category: 'constitutionnel', difficulty: 'citoyen', era: 'republique',
    event: 'Investiture d\'Alpha Condé — 1ʳᵉ alternance démocratique',
    date: '21 décembre 2010', year: 2010, iso: '2010-12-21',
    place: 'Palais du Peuple, Conakry',
    archiveSource: 'Cour constitutionnelle / Journal Officiel',
    status: 'verified',
    note: 'Élu avec 52,5% au 2ᵉ tour face à Cellou Dalein Diallo',
  },
  {
    id: 'CON-C-08',
    category: 'constitutionnel', difficulty: 'citoyen', era: 'republique',
    event: 'Adoption par référendum de la Constitution de 2020',
    date: '22 mars 2020', year: 2020, iso: '2020-03-22',
    place: 'Guinée',
    archiveSource: 'CENI / Journal Officiel',
    status: 'verified',
    note: 'Promulguée le 14 avril 2020 — permet 3ᵉ mandat à Condé',
  },
  {
    id: 'CON-C-09',
    category: 'constitutionnel', difficulty: 'citoyen', era: 'republique',
    event: 'Concertations nationales inclusives — dialogue avec les forces vives avant la Charte',
    date: '14-23 septembre 2021', year: 2021, iso: '2021-09-23',
    place: 'Palais du Peuple, Conakry',
    archiveSource: 'Archives CNRD / Wikipédia / Mosaïqueguinée',
    status: 'verified',
    note: 'Partis, syndicats, société civile, religions, jeunesse, femmes, diaspora',
  },
  {
    id: 'CON-C-10',
    category: 'constitutionnel', difficulty: 'citoyen', era: 'republique',
    event: 'Vote de la Loi Simandou par le CNT — ratification des 3 conventions',
    date: '3 février 2024', year: 2024,
    place: 'Conakry (Conseil National de la Transition)',
    archiveSource: 'ITIE Guinée / Archives CNT',
    status: 'verified',
    note: 'Codéveloppement infrastructures + convention SIMFER ajustée',
  },
  // — Archiviste (6) —
  {
    id: 'CON-A-02',
    category: 'constitutionnel', difficulty: 'archiviste', era: 'republique',
    event: 'Promulgation de la Charte de la Transition par le CNRD',
    date: '27 septembre 2021', year: 2021, iso: '2021-09-27',
    place: 'Conakry',
    archiveSource: 'Journal Officiel',
    status: 'verified',
    note: 'Loi fondamentale provisoire, 13 pages, 5 chapitres',
  },
  {
    id: 'CON-A-03',
    category: 'constitutionnel', difficulty: 'archiviste', era: 'republique',
    event: 'Investiture du colonel Mamadi Doumbouya, Président de la Transition',
    date: '1ᵉʳ octobre 2021', year: 2021, iso: '2021-10-01',
    place: 'Palais des Nations, Conakry',
    archiveSource: 'Cour suprême',
    status: 'verified',
  },
  {
    id: 'CON-A-04',
    category: 'constitutionnel', difficulty: 'archiviste', era: 'republique',
    event: 'Référendum constitutionnel — adoption de la Constitution Doumbouya',
    date: '21 septembre 2025', year: 2025, iso: '2025-09-21',
    place: 'Guinée',
    archiveSource: 'CENI',
    status: 'verified',
    note: 'Promulguée le 26 septembre 2025',
  },
  {
    id: 'CON-A-05',
    category: 'constitutionnel', difficulty: 'archiviste', era: 'republique',
    event: 'Élection présidentielle — Mamadi Doumbouya président élu',
    date: '28 décembre 2025', year: 2025, iso: '2025-12-28',
    place: 'Guinée',
    archiveSource: 'CENI',
    status: 'verified',
    note: 'Mandat de 7 ans',
  },
  {
    id: 'CON-A-06',
    category: 'constitutionnel', difficulty: 'archiviste', era: 'republique',
    event: 'Proclamation des résultats par la Cour suprême',
    date: '4 janvier 2026', year: 2026, iso: '2026-01-04',
    place: 'Conakry',
    archiveSource: 'Cour suprême',
    status: 'verified',
  },
];

// ============================================================================
// EXPORT
// ============================================================================

export const senagGameQuestions: GameQuestion[] = [
  ...patrimoine,
  ...politique,
  ...culturel,
  ...sportif,
  ...constitutionnel,
];

export const categoryLabels: Record<GameCategory, string> = {
  patrimoine: 'Patrimoine',
  politique: 'Politique',
  culturel: 'Culturel',
  sportif: 'Sportif',
  constitutionnel: 'Constitutionnel & Régimes',
};

export const categoryColors: Record<GameCategory, string> = {
  patrimoine: '#A0522D',      // ocre
  politique: '#C9A227',       // or
  culturel: '#3E2C9C',        // indigo
  sportif: '#1F8B4C',         // vert
  constitutionnel: '#1B2A4A', // bleu encre
};

export const difficultyLabels: Record<GameDifficulty, string> = {
  decouverte: 'Découverte',
  citoyen: 'Citoyen',
  archiviste: 'Archiviste',
};

export const eraLabels: Record<GameEra, { label: string; start: number; end: number }> = {
  sosso:      { label: 'Empire Sosso',          start: 1180, end: 1235 },
  mali:       { label: 'Empire du Mali',        start: 1235, end: 1500 },
  songhai:    { label: 'Empire Songhaï',        start: 1464, end: 1591 },
  fouta:      { label: 'Fouta théocratique',    start: 1725, end: 1896 },
  resistance: { label: 'Résistances coloniales',start: 1857, end: 1912 },
  colonie:    { label: 'Période coloniale',     start: 1898, end: 1958 },
  republique: { label: 'République de Guinée',  start: 1958, end: 2026 },
};

// ============================================================================
// 🏛️ MINI-JEU BONUS — « LA RONDE DES PRIMATURES »
// Glisser-déposer les 17 Premiers ministres de Guinée dans l'ordre chronologique
// ----------------------------------------------------------------------------
// Fonction de PM créée le 26 avril 1972 (IXᵉ congrès du PDG)
// Pas de PM de déc. 1984 à juillet 1996 (Conté dirige directement, 12 ans)
// ============================================================================

export type PresidentEra =
  | 'sekou_toure'
  | 'lansana_conte'
  | 'dadis_camara'
  | 'sekouba_konate'
  | 'alpha_conde'
  | 'mamadi_doumbouya';

export interface PrimeMinister {
  order: number;          // 1 à 17, ordre chronologique
  name: string;
  startDate: string;      // Format affichable, ex. "26 avril 1972"
  endDate: string;
  startYear: number;      // Pour tri
  endYear: number;
  president: PresidentEra;
  presidentLabel: string;
  note?: string;
}

export const presidentLabels: Record<PresidentEra, string> = {
  sekou_toure:      'Ahmed Sékou Touré',
  lansana_conte:    'Lansana Conté',
  dadis_camara:     'Moussa Dadis Camara',
  sekouba_konate:   'Sékouba Konaté (transition)',
  alpha_conde:      'Alpha Condé',
  mamadi_doumbouya: 'Mamadi Doumbouya',
};

export const senagPrimeMinisters: PrimeMinister[] = [
  {
    order: 1,
    name: 'Lansana Louis Béavogui',
    startDate: '26 avril 1972', endDate: '3 avril 1984',
    startYear: 1972, endYear: 1984,
    president: 'sekou_toure', presidentLabel: presidentLabels.sekou_toure,
    note: '1ᵉʳ PM de l\'histoire de la Guinée — fonction créée au IXᵉ congrès du PDG',
  },
  {
    order: 2,
    name: 'Diarra Traoré',
    startDate: '5 avril 1984', endDate: '18 décembre 1984',
    startYear: 1984, endYear: 1984,
    president: 'lansana_conte', presidentLabel: presidentLabels.lansana_conte,
    note: 'PM bref après le CMRN',
  },
  {
    order: 3,
    name: 'Sidya Touré',
    startDate: '9 juillet 1996', endDate: '8 mars 1999',
    startYear: 1996, endYear: 1999,
    president: 'lansana_conte', presidentLabel: presidentLabels.lansana_conte,
    note: 'Retour de la fonction de PM après 12 ans d\'absence',
  },
  {
    order: 4,
    name: 'Lamine Sidimé',
    startDate: '8 mars 1999', endDate: '23 février 2004',
    startYear: 1999, endYear: 2004,
    president: 'lansana_conte', presidentLabel: presidentLabels.lansana_conte,
  },
  {
    order: 5,
    name: 'François Lounceny Fall',
    startDate: '23 février 2004', endDate: '30 avril 2004',
    startYear: 2004, endYear: 2004,
    president: 'lansana_conte', presidentLabel: presidentLabels.lansana_conte,
    note: 'Démission après 2 mois — désaccord avec Conté',
  },
  {
    order: 6,
    name: 'Cellou Dalein Diallo',
    startDate: '9 décembre 2004', endDate: '5 avril 2006',
    startYear: 2004, endYear: 2006,
    president: 'lansana_conte', presidentLabel: presidentLabels.lansana_conte,
    note: 'Limogé en avril 2006 — futur candidat présidentiel',
  },
  {
    order: 7,
    name: 'Eugène Camara',
    startDate: '9 février 2007', endDate: '26 février 2007',
    startYear: 2007, endYear: 2007,
    president: 'lansana_conte', presidentLabel: presidentLabels.lansana_conte,
    note: 'Le plus bref de l\'histoire (17 jours) — sa nomination déclenche la grève générale',
  },
  {
    order: 8,
    name: 'Lansana Kouyaté',
    startDate: '1ᵉʳ mars 2007', endDate: '20 mai 2008',
    startYear: 2007, endYear: 2008,
    president: 'lansana_conte', presidentLabel: presidentLabels.lansana_conte,
    note: 'PM de consensus post-grève générale',
  },
  {
    order: 9,
    name: 'Ahmed Tidiane Souaré',
    startDate: '20 mai 2008', endDate: '24 décembre 2008',
    startYear: 2008, endYear: 2008,
    president: 'lansana_conte', presidentLabel: presidentLabels.lansana_conte,
    note: 'PM de fin de règne Conté',
  },
  {
    order: 10,
    name: 'Kabinet Komara',
    startDate: '30 décembre 2008', endDate: '26 janvier 2010',
    startYear: 2008, endYear: 2010,
    president: 'dadis_camara', presidentLabel: presidentLabels.dadis_camara,
    note: 'Nommé par le CNDD lors de la transition',
  },
  {
    order: 11,
    name: 'Jean-Marie Doré',
    startDate: '26 janvier 2010', endDate: '26 décembre 2010',
    startYear: 2010, endYear: 2010,
    president: 'sekouba_konate', presidentLabel: presidentLabels.sekouba_konate,
    note: 'PM de la transition vers la démocratie',
  },
  {
    order: 12,
    name: 'Mohamed Saïd Fofana',
    startDate: '24 décembre 2010', endDate: '26 décembre 2015',
    startYear: 2010, endYear: 2015,
    president: 'alpha_conde', presidentLabel: presidentLabels.alpha_conde,
    note: 'Nommé 3 jours après l\'investiture d\'Alpha Condé',
  },
  {
    order: 13,
    name: 'Mamady Youla',
    startDate: '26 décembre 2015', endDate: '24 mai 2018',
    startYear: 2015, endYear: 2018,
    president: 'alpha_conde', presidentLabel: presidentLabels.alpha_conde,
  },
  {
    order: 14,
    name: 'Ibrahima Kassory Fofana',
    startDate: '21 mai 2018', endDate: '5 septembre 2021',
    startYear: 2018, endYear: 2021,
    president: 'alpha_conde', presidentLabel: presidentLabels.alpha_conde,
    note: 'PM lors de la prise du pouvoir par l\'armée (CNRD)',
  },
  {
    order: 15,
    name: 'Mohamed Béavogui',
    startDate: '6 octobre 2021', endDate: '20 août 2022',
    startYear: 2021, endYear: 2022,
    president: 'mamadi_doumbouya', presidentLabel: presidentLabels.mamadi_doumbouya,
    note: '1ᵉʳ PM de la Transition Doumbouya',
  },
  {
    order: 16,
    name: 'Bernard Goumou',
    startDate: '20 août 2022', endDate: '19 février 2024',
    startYear: 2022, endYear: 2024,
    president: 'mamadi_doumbouya', presidentLabel: presidentLabels.mamadi_doumbouya,
  },
  {
    order: 17,
    name: 'Bah Oury',
    startDate: '27 février 2024', endDate: 'en fonction',
    startYear: 2024, endYear: 2026,
    president: 'mamadi_doumbouya', presidentLabel: presidentLabels.mamadi_doumbouya,
    note: 'PM en fonction au moment de la SeNAG 2026',
  },
];

// ============================================================================
// MÉTADONNÉES GLOBALES DU JEU
// ============================================================================

export const senagGameMeta = {
  title: 'Le Jeu de la Mémoire Nationale',
  subtitle: '8 siècles d\'histoire guinéenne — de l\'Empire Sosso à la République',
  totalQuestions: 95,
  totalPrimeMinisters: 17,
  startYear: 1180,
  endYear: 2026,
  source: 'L\'Atelier Solidaire / Projet Pati pour la 1ʳᵉ Semaine Nationale des Archives de la Guinée',
  event: 'SeNAG 2026 — 25-30 juin 2026',
};

// Compteurs par catégorie (utiles pour le composant)
export const categoryQuotas: Record<GameCategory, number> = {
  patrimoine: 19,
  politique: 17,
  culturel: 24,        // Réservé au sous-jeu Biographies (phase 2)
  sportif: 15,         // Réservé au sous-jeu Biographies (phase 2)
  constitutionnel: 20,
};

// Pool actif du Train de la Mémoire (jeu principal phase 1)
export const trainCategories: GameCategory[] = ['patrimoine', 'politique', 'constitutionnel'];

// Compteurs par difficulté (totaux)
export const difficultyQuotas: Record<GameDifficulty, number> = {
  decouverte: 33,
  citoyen: 37,
  archiviste: 25,
};
