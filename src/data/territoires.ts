/**
 * L'ENCYCLOPÉDIE GUINÉ — Territoires de la République de Guinée
 *
 * 46 entités au total :
 *   - 33 préfectures (réparties dans 7 régions administratives)
 *   - 13 communes urbaines de Conakry (loi du 13 mars 2024 portant
 *     promulgation du nouveau découpage communal)
 *
 * Stratégie de remplissage progressif : chaque territoire a une
 * `carteIdentite` minimale obligatoire (slug, nom, type, région,
 * chef-lieu). Toutes les autres dimensions sont optionnelles et
 * peuvent être enrichies au fil du temps — le composant d'affichage
 * doit gérer gracieusement les champs absents.
 *
 * Sources de référence :
 *   - Décret du 13 mars 2024 (création des 13 communes urbaines de Conakry)
 *   - RGPH-4 2025 (recensement général de la population) — population par préfecture
 *   - Sous-préfectures (chef-lieu inclus) : liste guinee-decouverte 2010,
 *     ~331 entités. À VALIDER vs liste officielle MATD actuelle (~344) —
 *     quelques sous-préfectures créées après 2010 peuvent manquer.
 *   - Découpage administratif Guinée (7 régions + 1 gouvernorat)
 */

// ─── Catégories ─────────────────────────────────────────────────────────────

export type RegionNaturelle =
  | 'basse-guinee'      // Maritime — Atlantique
  | 'moyenne-guinee'    // Fouta-Djallon
  | 'haute-guinee'      // Savane
  | 'guinee-forestiere' // Forêt
  | 'conakry';          // Gouvernorat capitale

export type RegionAdministrative =
  | 'boke' | 'kindia' | 'mamou' | 'labe'
  | 'faranah' | 'kankan' | 'nzerekore'
  | 'conakry';

export type TypeEntite = 'prefecture' | 'commune-conakry';

// ─── Les 8 dimensions (toutes optionnelles, à remplir progressivement) ───────

export interface CarteIdentite {
  chefLieu: string;
  slogan?: string;
  devise?: string;
  drapeauUrl?: string;        // ex: /images/territoires/{slug}/drapeau.svg
  blasonUrl?: string;
  population?: number;        // habitants
  populationAnnee?: number;   // année du chiffre (2025 = RGPH-4)
  superficieKm2?: number;
}

export interface Geographie {
  relief?: string;            // ex: "Massif du Fouta-Djallon, plateaux"
  climat?: string;            // ex: "Tropical de mousson"
  fleuves?: string[];         // ex: ["Konkouré", "Kakrima"]
  paysageEmblematique?: string;
  voisins?: string[];         // slugs des territoires limitrophes
}

export interface PatrimoineVivant {
  langueDominante?: string;   // ex: "Soussou", "Pular", "Maninka"
  nomEnLangueLocale?: string; // ex: nom du territoire dans la langue
  ethnies?: string[];
  feteEmblematique?: string;
  instrumentMusical?: string;
  danse?: string;
  conteAssocie?: string;      // slug d'un conte audio Pati lié
}

export interface PlatEmblematique {
  nom: string;
  ingredientsCles?: string[];
  description?: string;
  recetteSlug?: string;       // futur lien vers une recette Pati Cuisine
}

export interface Tresor {
  ressources?: string[];      // ex: ["bauxite", "mangue", "riz pluvial"]
  contributionNationale?: string; // ex: "Berceau de la bauxite guinéenne"
  lienSimandou2040?: string;  // axe du programme Simandou auquel rattacher
}

export interface FigureLocale {
  nom: string;
  periode?: string;           // ex: "1922-1984"
  metier?: string;            // ex: "musicien", "écrivaine", "résistante"
  pourquoi: string;           // une phrase qui dit l'essentiel
  livreAssocieSlug?: string;  // si un livre Pati lui est dédié
}

export interface MotDuTerroir {
  mot: string;
  langue: string;
  traduction: string;
  contexte?: string;          // quand on l'utilise, ce que ça dit du lieu
}

export interface Mascotte {
  nom: string;
  description: string;         // animal-totem, objet, personnage stylisé
  imageUrl?: string;           // illustration générée (style afrotemporel cohérent)
  creditCreation?: string;     // ex: "Conçue par le Club Pati de Mamou"
  histoirCourte?: string;      // le pitch de la mascotte en 1-2 phrases
}

// ─── L'entité territoriale ──────────────────────────────────────────────────

export interface Territoire {
  // Identité obligatoire — toujours renseignée
  slug: string;                         // ex: "boke", "conakry-kaloum"
  nom: string;                          // ex: "Boké", "Kaloum"
  type: TypeEntite;
  regionNaturelle: RegionNaturelle;
  regionAdministrative: RegionAdministrative;
  carteIdentite: CarteIdentite;
  sousPrefectures?: string[];           // liste des sous-préfectures (chef-lieu inclus) — source à valider

  // Dimensions riches — toutes optionnelles, remplies au fil du temps
  mascotte?: Mascotte;
  geographie?: Geographie;
  patrimoine?: PatrimoineVivant;
  plat?: PlatEmblematique;
  tresor?: Tresor;
  figureLocale?: FigureLocale;
  motDuTerroir?: MotDuTerroir;

  // Liens vers d'autres briques Pati existantes
  livresAssocies?: string[];            // slugs livres (collection "La Guinée mon paradis", etc.)
  audiosAssocies?: string[];            // slugs contes audio Pati

  // Méta — pour le dashboard de pilotage éditorial
  derniereMaj?: string;                 // ISO date — "2026-06-27"
}

// ════════════════════════════════════════════════════════════════════════════
// DONNÉES — 46 entités
// ════════════════════════════════════════════════════════════════════════════
//
// Pour chaque entité, seule la carte d'identité minimale est renseignée
// au démarrage. Les dimensions riches (mascotte, plat, figure, mot, etc.)
// seront enrichies au fur et à mesure — par contribution éditoriale,
// par les Clubs Pati, par les Préfectures Connectées.
//
// Note langues dominantes (approximation à affiner par préfecture) :
//   - Basse-Guinée → Soussou (avec Baga, Nalou sur certaines zones côtières)
//   - Moyenne-Guinée → Pular (peul)
//   - Haute-Guinée → Maninka (malinké)
//   - Guinée Forestière → multilingue (Kpèlè, Loma, Kissi, Konianké, Manon)
//   - Conakry → multilingue à dominante Soussou
//
// ════════════════════════════════════════════════════════════════════════════

export const territoires: Territoire[] = [

  // ════════════════════════════════════════════════════════════════════════
  // BASSE-GUINÉE (Maritime) — Région administrative de Boké
  // ════════════════════════════════════════════════════════════════════════

  {
    slug: 'boke',
    nom: 'Boké',
    type: 'prefecture',
    regionNaturelle: 'basse-guinee',
    regionAdministrative: 'boke',
    carteIdentite: { chefLieu: 'Boké', population: 777101, populationAnnee: 2025 },
    sousPrefectures: ["Boké Centre", "Bintimodia", "Dabiss", "Kamsar", "Kanfarandé", "Kolaboui", "Malapouya", "Sangarédi", "Sansalé", "Tanènè"],
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'boffa',
    nom: 'Boffa',
    type: 'prefecture',
    regionNaturelle: 'basse-guinee',
    regionAdministrative: 'boke',
    carteIdentite: { chefLieu: 'Boffa', population: 287648, populationAnnee: 2025 },
    sousPrefectures: ["Boffa Centre", "Corréra", "Douprou", "Mankounta", "Koba-Tatéma", "Touguifili", "Tamita"],
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'fria',
    nom: 'Fria',
    type: 'prefecture',
    regionNaturelle: 'basse-guinee',
    regionAdministrative: 'boke',
    carteIdentite: { chefLieu: 'Fria', population: 126205, populationAnnee: 2025 },
    sousPrefectures: ["Fria Centre", "Banguigny", "Tormélin", "Bagataye"],
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'gaoual',
    nom: 'Gaoual',
    type: 'prefecture',
    regionNaturelle: 'basse-guinee',
    regionAdministrative: 'boke',
    carteIdentite: { chefLieu: 'Gaoual', population: 257328, populationAnnee: 2025 },
    sousPrefectures: ["Gaoual Centre", "Bantala", "Foulamori", "Kakoni", "Koumbia", "Touba", "Malanta", "Wendou-M'Borou"],
    patrimoine: { langueDominante: 'Pular' },
  },
  {
    slug: 'koundara',
    nom: 'Koundara',
    type: 'prefecture',
    regionNaturelle: 'basse-guinee',
    regionAdministrative: 'boke',
    carteIdentite: { chefLieu: 'Koundara', population: 180374, populationAnnee: 2025 },
    sousPrefectures: ["Koundara Centre", "Guingan", "Termessè", "Kamabi", "Sambailo", "Youkounkoun", "Saréboïdo"],
    patrimoine: { langueDominante: 'Pular' },
  },

  // ════════════════════════════════════════════════════════════════════════
  // BASSE-GUINÉE — Région administrative de Kindia
  // ════════════════════════════════════════════════════════════════════════

  {
    slug: 'kindia',
    nom: 'Kindia',
    type: 'prefecture',
    regionNaturelle: 'basse-guinee',
    regionAdministrative: 'kindia',
    carteIdentite: { chefLieu: 'Kindia', population: 680635, populationAnnee: 2025 },
    sousPrefectures: ["Kindia Centre", "Bangouyah", "Damankanyah", "Friguiagbé", "Kolenté", "Madina Oula", "Mambiya", "Molota", "Samayah", "Sougueta", "Linsan"],
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'coyah',
    nom: 'Coyah',
    type: 'prefecture',
    regionNaturelle: 'basse-guinee',
    regionAdministrative: 'kindia',
    carteIdentite: { chefLieu: 'Coyah', population: 344741, populationAnnee: 2025 },
    sousPrefectures: ["Coyah Centre", "Manéah", "Kouriah", "Wonkifong"],
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'dubreka',
    nom: 'Dubréka',
    type: 'prefecture',
    regionNaturelle: 'basse-guinee',
    regionAdministrative: 'kindia',
    carteIdentite: { chefLieu: 'Dubréka', population: 488569, populationAnnee: 2025 },
    sousPrefectures: ["Dubréka Centre", "Badi", "Falessadé", "Ouassou", "Tanènè", "Tondon", "Khorira"],
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'forecariah',
    nom: 'Forécariah',
    type: 'prefecture',
    regionNaturelle: 'basse-guinee',
    regionAdministrative: 'kindia',
    carteIdentite: { chefLieu: 'Forécariah', population: 415895, populationAnnee: 2025 },
    sousPrefectures: ["Forécariah Centre", "Benty", "Kaback", "Farmoréah", "Kakossa", "Maférinyah", "Moussayah", "Sikhourou", "Allassoyah", "Kalia"],
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'telimele',
    nom: 'Télimélé',
    type: 'prefecture',
    regionNaturelle: 'basse-guinee',
    regionAdministrative: 'kindia',
    carteIdentite: { chefLieu: 'Télimélé', population: 345780, populationAnnee: 2025 },
    sousPrefectures: ["Télimélé Centre", "Bourouwal", "Daramagnaki", "Gougoudjé", "Koba", "Kollet", "Sinta", "Missira", "Santou", "Sarékaly", "Sogolon", "Tarihoye", "Thionthian", "Brouwal-Tappé"],
    patrimoine: { langueDominante: 'Pular' },
  },

  // ════════════════════════════════════════════════════════════════════════
  // MOYENNE-GUINÉE (Fouta-Djallon) — Région administrative de Mamou
  // ════════════════════════════════════════════════════════════════════════

  {
    slug: 'mamou',
    nom: 'Mamou',
    type: 'prefecture',
    regionNaturelle: 'moyenne-guinee',
    regionAdministrative: 'mamou',
    carteIdentite: { chefLieu: 'Mamou', population: 460786, populationAnnee: 2025 },
    sousPrefectures: ["Mamou Centre", "Bouliwel", "Dounet", "Gongoret", "Ouré-Kaba", "Kégnéko", "Konkouré", "Nyagara", "Porédaka", "Soyah", "Saramoussaya", "Timbo", "Tolo", "Téguéréya"],
    patrimoine: { langueDominante: 'Pular' },
  },
  {
    slug: 'dalaba',
    nom: 'Dalaba',
    type: 'prefecture',
    regionNaturelle: 'moyenne-guinee',
    regionAdministrative: 'mamou',
    carteIdentite: { chefLieu: 'Dalaba', population: 169069, populationAnnee: 2025 },
    sousPrefectures: ["Dalaba Centre", "Bodié", "Ditinn", "Kala", "Kankalabé", "Kébali", "Koba", "Mafara", "Mitty", "Mombéya"],
    patrimoine: { langueDominante: 'Pular' },
  },
  {
    slug: 'pita',
    nom: 'Pita',
    type: 'prefecture',
    regionNaturelle: 'moyenne-guinee',
    regionAdministrative: 'mamou',
    carteIdentite: { chefLieu: 'Pita', population: 286680, populationAnnee: 2025 },
    sousPrefectures: ["Pita Centre", "Bantignel", "Broual-Tappé", "Dongol-Touma", "Gongoré", "Ley-Miro", "Maci", "Sangaréah", "Sintali", "Timbi-Madina", "Timbi-Touny", "Ninguélandé"],
    patrimoine: { langueDominante: 'Pular' },
  },

  // ════════════════════════════════════════════════════════════════════════
  // MOYENNE-GUINÉE — Région administrative de Labé
  // ════════════════════════════════════════════════════════════════════════

  {
    slug: 'labe',
    nom: 'Labé',
    type: 'prefecture',
    regionNaturelle: 'moyenne-guinee',
    regionAdministrative: 'labe',
    carteIdentite: { chefLieu: 'Labé', population: 475961, populationAnnee: 2025 },
    sousPrefectures: ["Labé Centre", "Dalein", "Daralabé", "Diari", "Dionfo", "Garambé", "Hafia", "Noussy", "Popodara", "Sannou", "Tountouroun", "Kalan", "Kouramangui"],
    patrimoine: { langueDominante: 'Pular' },
  },
  {
    slug: 'koubia',
    nom: 'Koubia',
    type: 'prefecture',
    regionNaturelle: 'moyenne-guinee',
    regionAdministrative: 'labe',
    carteIdentite: { chefLieu: 'Koubia', population: 125401, populationAnnee: 2025 },
    sousPrefectures: ["Koubia Centre", "Fafaya", "Gada-Woundou", "Matakaou", "Missira", "Pilimini"],
    patrimoine: { langueDominante: 'Pular' },
  },
  {
    slug: 'lelouma',
    nom: 'Lélouma',
    type: 'prefecture',
    regionNaturelle: 'moyenne-guinee',
    regionAdministrative: 'labe',
    carteIdentite: { chefLieu: 'Lélouma', population: 179384, populationAnnee: 2025 },
    sousPrefectures: ["Lélouma Centre", "Balaya", "Diountou", "Pété", "Lafou", "Linsan-Saran", "Parawol", "Sagalé", "Korbé", "Thianguel-Bori", "Hérico"],
    patrimoine: { langueDominante: 'Pular' },
  },
  {
    slug: 'mali',
    nom: 'Mali',
    type: 'prefecture',
    regionNaturelle: 'moyenne-guinee',
    regionAdministrative: 'labe',
    carteIdentite: { chefLieu: 'Mali', population: 313119, populationAnnee: 2025 },
    sousPrefectures: ["Mali Centre", "Balaki", "Donghol-Sigon", "Fougou", "Gayah", "Hidayatou", "Dougountouny", "Lébékéré", "Madina-Salambandé", "Madina-Wora", "Yimbéring", "Téliré", "Touba"],
    patrimoine: { langueDominante: 'Pular' },
  },
  {
    slug: 'tougue',
    nom: 'Tougué',
    type: 'prefecture',
    regionNaturelle: 'moyenne-guinee',
    regionAdministrative: 'labe',
    carteIdentite: { chefLieu: 'Tougué', population: 146032, populationAnnee: 2025 },
    sousPrefectures: ["Tougué Centre", "Fello-Koundoua", "Kansagui", "Kollet", "Koin", "Kona", "Kouratongo", "Tangali", "Fatako", "Kollangui"],
    patrimoine: { langueDominante: 'Pular' },
  },

  // ════════════════════════════════════════════════════════════════════════
  // HAUTE-GUINÉE (Savane) — Région administrative de Faranah
  // ════════════════════════════════════════════════════════════════════════

  {
    slug: 'faranah',
    nom: 'Faranah',
    type: 'prefecture',
    regionNaturelle: 'haute-guinee',
    regionAdministrative: 'faranah',
    carteIdentite: { chefLieu: 'Faranah', population: 444040, populationAnnee: 2025 },
    sousPrefectures: ["Faranah Centre", "Banian", "Bendougou", "Héremakono", "Kobikoro", "Marela", "Nialia", "Passaya", "Sandénia", "Songoya", "Tiro"],
    patrimoine: { langueDominante: 'Maninka' },
  },
  {
    slug: 'dabola',
    nom: 'Dabola',
    type: 'prefecture',
    regionNaturelle: 'haute-guinee',
    regionAdministrative: 'faranah',
    carteIdentite: { chefLieu: 'Dabola', population: 296613, populationAnnee: 2025 },
    sousPrefectures: ["Dabola Centre", "Arfamoussaya", "Banko", "Bissikrima", "Dogomet", "Kankama", "Kindoye", "Komédou", "N'Déma"],
    patrimoine: { langueDominante: 'Maninka' },
  },
  {
    slug: 'dinguiraye',
    nom: 'Dinguiraye',
    type: 'prefecture',
    regionNaturelle: 'haute-guinee',
    regionAdministrative: 'faranah',
    carteIdentite: { chefLieu: 'Dinguiraye', population: 327941, populationAnnee: 2025 },
    sousPrefectures: ["Dinguiraye Centre", "Banora", "Dialakoro", "Diatiféré", "Gagnakaly", "Kalinko", "Lansanaya", "Sélouma"],
    patrimoine: { langueDominante: 'Pular' },
  },
  {
    slug: 'kissidougou',
    nom: 'Kissidougou',
    type: 'prefecture',
    regionNaturelle: 'haute-guinee',
    regionAdministrative: 'faranah',
    carteIdentite: { chefLieu: 'Kissidougou', population: 393337, populationAnnee: 2025 },
    sousPrefectures: ["Kissidougou Centre", "Albadariah", "Banama", "Beindou", "Bardou", "Firawa", "Kondiadou", "Manfran", "Sangardo", "Yendé-Millimou", "Yombiro"],
    patrimoine: { langueDominante: 'Kissi' },
  },

  // ════════════════════════════════════════════════════════════════════════
  // HAUTE-GUINÉE — Région administrative de Kankan
  // ════════════════════════════════════════════════════════════════════════

  {
    slug: 'kankan',
    nom: 'Kankan',
    type: 'prefecture',
    regionNaturelle: 'haute-guinee',
    regionAdministrative: 'kankan',
    carteIdentite: { chefLieu: 'Kankan', population: 841969, populationAnnee: 2025 },
    sousPrefectures: ["Kankan Centre", "Balandougou", "Baranama", "Batè-Nafadji", "Boula", "Gbérédou-Baranama", "Karfamoriah", "Koumban", "Mamouroudou", "Missamana", "Moribaya", "Tinti-Oulen", "Tokounou"],
    patrimoine: { langueDominante: 'Maninka' },
  },
  {
    slug: 'kerouane',
    nom: 'Kérouané',
    type: 'prefecture',
    regionNaturelle: 'haute-guinee',
    regionAdministrative: 'kankan',
    carteIdentite: { chefLieu: 'Kérouané', population: 297935, populationAnnee: 2025 },
    sousPrefectures: ["Kérouané Centre", "Damaro", "Komodou", "Konsankoro", "Linko", "Sibiribaro", "Soromaya"],
    patrimoine: { langueDominante: 'Maninka' },
  },
  {
    slug: 'kouroussa',
    nom: 'Kouroussa',
    type: 'prefecture',
    regionNaturelle: 'haute-guinee',
    regionAdministrative: 'kankan',
    carteIdentite: { chefLieu: 'Kouroussa', population: 451205, populationAnnee: 2025 },
    sousPrefectures: ["Kouroussa Centre", "Babila", "Balato", "Banfèlè", "Baro", "Cisséla", "Douako", "Kiniéro", "Koumana", "Komola-Koura", "Sanguiana", "Doura"],
    patrimoine: { langueDominante: 'Maninka' },
  },
  {
    slug: 'mandiana',
    nom: 'Mandiana',
    type: 'prefecture',
    regionNaturelle: 'haute-guinee',
    regionAdministrative: 'kankan',
    carteIdentite: { chefLieu: 'Mandiana', population: 800959, populationAnnee: 2025 },
    sousPrefectures: ["Mandiana Centre", "Dialakoro", "Faralako", "Kantoumania", "Kiniéro", "Koundian", "Morodou", "Niantanina", "Saladou", "Sansando", "Balandougou", "Kébaly"],
    patrimoine: { langueDominante: 'Maninka' },
  },
  {
    slug: 'siguiri',
    nom: 'Siguiri',
    type: 'prefecture',
    regionNaturelle: 'haute-guinee',
    regionAdministrative: 'kankan',
    carteIdentite: { chefLieu: 'Siguiri', population: 1718147, populationAnnee: 2025 },
    sousPrefectures: ["Siguiri Centre", "Bankon", "Doko", "Kintinian", "Maléah", "Niagassola", "Naboun", "Niandankoro", "Norassoba", "Siguirini", "Franwalia", "Kiniébakoura"],
    patrimoine: { langueDominante: 'Maninka' },
  },

  // ════════════════════════════════════════════════════════════════════════
  // GUINÉE FORESTIÈRE (Forêt) — Région administrative de N'Zérékoré
  // ════════════════════════════════════════════════════════════════════════

  {
    slug: 'nzerekore',
    nom: "N'Zérékoré",
    type: 'prefecture',
    regionNaturelle: 'guinee-forestiere',
    regionAdministrative: 'nzerekore',
    carteIdentite: { chefLieu: "N'Zérékoré", population: 717120, populationAnnee: 2025 },
    sousPrefectures: ["N'Zérékoré Centre", "Bounouma", "Gouécké", "Koulé", "Koropara", "Samoé", "Yalenzou", "Palé", "Womey", "Soulouta"],
    patrimoine: { langueDominante: 'Kpèlè' },
  },
  {
    slug: 'beyla',
    nom: 'Beyla',
    type: 'prefecture',
    regionNaturelle: 'guinee-forestiere',
    regionAdministrative: 'nzerekore',
    carteIdentite: { chefLieu: 'Beyla', population: 511095, populationAnnee: 2025 },
    sousPrefectures: ["Beyla Centre", "Boola", "Diassodou", "Gbakédou", "Gbessoba", "Karala", "Diaraguéréla", "Koumandou", "Moussadou", "Nionsomoridou", "Samana", "Sinko", "Sokourala", "Fouala"],
    patrimoine: { langueDominante: 'Konianké' },
  },
  {
    slug: 'gueckedou',
    nom: 'Guéckédou',
    type: 'prefecture',
    regionNaturelle: 'guinee-forestiere',
    regionAdministrative: 'nzerekore',
    carteIdentite: { chefLieu: 'Guéckédou', population: 376885, populationAnnee: 2025 },
    sousPrefectures: ["Guéckédou Centre", "Bolodou", "Guendembou", "Fangamadou", "Kassadou", "Nongoa", "Ouendé-Kénéma", "Tékoulo", "Témessadou-Djibo", "Koundou", "Bendou"],
    patrimoine: { langueDominante: 'Kissi' },
  },
  {
    slug: 'lola',
    nom: 'Lola',
    type: 'prefecture',
    regionNaturelle: 'guinee-forestiere',
    regionAdministrative: 'nzerekore',
    carteIdentite: { chefLieu: 'Lola', population: 267869, populationAnnee: 2025 },
    sousPrefectures: ["Lola Centre", "Bossou", "Foumbadou", "Gama", "Guéasso", "Lainé", "Kokota", "N'Zoo", "Tounkarata"],
    patrimoine: { langueDominante: 'Manon' },
  },
  {
    slug: 'macenta',
    nom: 'Macenta',
    type: 'prefecture',
    regionNaturelle: 'guinee-forestiere',
    regionAdministrative: 'nzerekore',
    carteIdentite: { chefLieu: 'Macenta', population: 408414, populationAnnee: 2025 },
    sousPrefectures: ["Macenta Centre", "Balizia", "Binikala", "Bofossou", "Daro", "Kouankan", "Orémaï", "Koyamah", "Panziazou", "Sérédou", "Sengbédou", "N'Zébéla", "Watanka", "Vassérédou"],
    patrimoine: { langueDominante: 'Loma' },
  },
  {
    slug: 'yomou',
    nom: 'Yomou',
    type: 'prefecture',
    regionNaturelle: 'guinee-forestiere',
    regionAdministrative: 'nzerekore',
    carteIdentite: { chefLieu: 'Yomou', population: 200603, populationAnnee: 2025 },
    sousPrefectures: ["Yomou Centre", "Bignamou", "Bhéta", "Diécké", "Bowé", "Péla", "Banié"],
    patrimoine: { langueDominante: 'Kpèlè' },
  },

  // ════════════════════════════════════════════════════════════════════════
  // CONAKRY (Gouvernorat) — 13 communes urbaines (décret du 13 mars 2024)
  // ════════════════════════════════════════════════════════════════════════
  // Population du gouvernorat : 3 407 327 hab. (RGPH-4 2025)
  // ════════════════════════════════════════════════════════════════════════

  {
    slug: 'conakry-kaloum',
    nom: 'Kaloum',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Kaloum' },
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'conakry-dixinn',
    nom: 'Dixinn',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Dixinn' },
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'conakry-matam',
    nom: 'Matam',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Matam' },
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'conakry-ratoma',
    nom: 'Ratoma',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Ratoma' },
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'conakry-matoto',
    nom: 'Matoto',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Matoto' },
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'conakry-kassa',
    nom: 'Kassa',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Kassa' },
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'conakry-lambanyi',
    nom: 'Lambanyi',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Lambanyi' },
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'conakry-sonfonia',
    nom: 'Sonfonia',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Sonfonia' },
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'conakry-gbessia',
    nom: 'Gbessia',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Gbessia' },
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'conakry-tombolia',
    nom: 'Tombolia',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Tombolia' },
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'conakry-kagbelen',
    nom: 'Kagbélén',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Kagbélén' },
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'conakry-sanoyah',
    nom: 'Sanoyah',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Sanoyah' },
    patrimoine: { langueDominante: 'Soussou' },
  },
  {
    slug: 'conakry-maneah',
    nom: 'Manéah',
    type: 'commune-conakry',
    regionNaturelle: 'conakry',
    regionAdministrative: 'conakry',
    carteIdentite: { chefLieu: 'Manéah' },
    patrimoine: { langueDominante: 'Soussou' },
  },
];

// ════════════════════════════════════════════════════════════════════════════
// HELPERS
// ════════════════════════════════════════════════════════════════════════════

export function getBySlug(slug: string): Territoire | undefined {
  return territoires.find((t) => t.slug === slug);
}

export function getByRegionNaturelle(region: RegionNaturelle): Territoire[] {
  return territoires.filter((t) => t.regionNaturelle === region);
}

export function getByRegionAdministrative(region: RegionAdministrative): Territoire[] {
  return territoires.filter((t) => t.regionAdministrative === region);
}

export function getPrefectures(): Territoire[] {
  return territoires.filter((t) => t.type === 'prefecture');
}

export function getCommunesConakry(): Territoire[] {
  return territoires.filter((t) => t.type === 'commune-conakry');
}

// ─── Métadonnées d'affichage (pour les libellés UI) ─────────────────────────

export const LIBELLE_REGION_NATURELLE: Record<RegionNaturelle, { label: string; sous: string }> = {
  'basse-guinee':      { label: 'Basse-Guinée',      sous: 'Maritime, l\'Atlantique' },
  'moyenne-guinee':    { label: 'Moyenne-Guinée',    sous: 'Fouta-Djallon, château d\'eau' },
  'haute-guinee':      { label: 'Haute-Guinée',      sous: 'Savane, le Niger naissant' },
  'guinee-forestiere': { label: 'Guinée Forestière', sous: 'Forêt, les langues plurielles' },
  'conakry':           { label: 'Conakry',           sous: 'La capitale, presqu\'île' },
};

export const LIBELLE_REGION_ADMIN: Record<RegionAdministrative, string> = {
  'boke':       'Région de Boké',
  'kindia':     'Région de Kindia',
  'mamou':      'Région de Mamou',
  'labe':       'Région de Labé',
  'faranah':    'Région de Faranah',
  'kankan':     'Région de Kankan',
  'nzerekore':  "Région de N'Zérékoré",
  'conakry':    'Gouvernorat de Conakry',
};

// ─── Complétude éditoriale (pour pilotage interne) ──────────────────────────
// Permet de savoir quelles fiches sont prêtes à publier et lesquelles sont
// encore en chantier. Utile pour le futur dashboard /atelier ou /parent.
// ════════════════════════════════════════════════════════════════════════════

const CHAMPS_RICHES: Array<keyof Territoire> = [
  'mascotte', 'geographie', 'patrimoine', 'plat', 'tresor',
  'figureLocale', 'motDuTerroir',
];

export function getCompletude(t: Territoire): number {
  const total = CHAMPS_RICHES.length;
  const remplis = CHAMPS_RICHES.filter((champ) => {
    const v = t[champ];
    if (!v) return false;
    // Patrimoine est rempli s'il a au moins la langue dominante
    if (champ === 'patrimoine') return !!(v as PatrimoineVivant).langueDominante;
    return true;
  }).length;
  return Math.round((remplis / total) * 100);
}

// ─── Comptages utiles ───────────────────────────────────────────────────────

export const TOTAL_TERRITOIRES = territoires.length;        // 46
export const TOTAL_PREFECTURES = getPrefectures().length;   // 33
export const TOTAL_COMMUNES_CONAKRY = getCommunesConakry().length; // 13

export default territoires;
