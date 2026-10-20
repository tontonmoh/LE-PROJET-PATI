/**
 * SANANKOUYA — référentiel du futur jeu de cartes PATI
 * « La Guinée est une famille » : les noms qui voyagent, les cousins qui se taquinent.
 *
 * Trois niveaux de liens (validés par Moh le 20/10/2026) :
 *   1. FRÈRES        — même ligne du tableau : le même nom porté dans une autre région.
 *                      On se soutient toujours.
 *   2. COUSINS DE LIGNE — deux lignes entières liées par le cousinage à plaisanterie.
 *                      On se taquine, on peut apaiser les disputes de l'autre.
 *   3. LIENS CROISÉS — alliances qui ne suivent pas le tableau, valables dans certaines
 *                      familles ou certains lieux. Cartes rares, chacune avec sa provenance.
 *
 * Règle de provenance : chaque lien indique d'où il vient (« moh », « cufig »,
 * « collecte:<qui/où> », « veille:<source> »). Rien n'entre sans provenance.
 * Statut : « valide » (arbitré par Moh) ou « a-valider ».
 */

export type Region = "basse-cote" | "fouta" | "haute-guinee" | "foret";

export const REGIONS: Record<Region, string> = {
  "basse-cote": "Basse-Côte",
  fouta: "Fouta",
  "haute-guinee": "Haute-Guinée",
  foret: "Guinée forestière",
};

export type Provenance = string; // "moh" | "cufig" | "collecte:…" | "veille:…"
export type Statut = "valide" | "a-valider";

export interface NomRegional {
  nom: string;
  region: Region;
  langue?: string;          // ex. "Kissi", "Toma"
  note?: string;            // dos de carte : histoire du nom en voyage
  provenance: Provenance;
  statut: Statut;
}

/** 1. FRÈRES — les grandes familles (une ligne = une famille) */
export interface Famille {
  id: string;
  nom: string;              // nom de la ligne
  noms: NomRegional[];
}

export const FAMILLES: Famille[] = [
  {
    id: "camara",
    nom: "Famille Camara",
    noms: [
      { nom: "Camara", region: "basse-cote", provenance: "moh", statut: "valide" },
      { nom: "Diallo", region: "fouta", provenance: "moh", statut: "valide",
        note: "Diallo = Camara : équivalence aussi donnée par CuFiG (Nafadji Sory Condé)." },
      { nom: "Camara", region: "haute-guinee", provenance: "moh", statut: "valide" },
      { nom: "Kamano", region: "foret", langue: "Kissi", provenance: "moh", statut: "valide",
        note: "Kamara = Kamano : équivalence aussi donnée par CuFiG." },
    ],
  },
  {
    id: "sylla",
    nom: "Famille Sylla",
    noms: [
      { nom: "Sylla", region: "basse-cote", provenance: "moh", statut: "valide" },
      { nom: "Bah", region: "fouta", provenance: "moh", statut: "valide",
        note: "Remplace Baldé (ancienne table JAAMU), arbitrage de Moh du 20/10/2026." },
      { nom: "Condé", region: "haute-guinee", provenance: "moh", statut: "valide" },
      { nom: "Millimono", region: "foret", langue: "Kissi", provenance: "moh", statut: "valide",
        note: "CuFiG l'associe aussi à Kourouma : voir LIENS_CROISES." },
    ],
  },
  {
    id: "bangoura",
    nom: "Famille Bangoura",
    noms: [
      { nom: "Bangoura", region: "basse-cote", provenance: "moh", statut: "valide" },
      { nom: "Sow", region: "fouta", provenance: "moh", statut: "valide" },
      { nom: "Doumbouya", region: "haute-guinee", provenance: "moh", statut: "valide",
        note: "Doumbouya = Bangoura : équivalence aussi donnée par CuFiG." },
      { nom: "Kourouma", region: "foret", provenance: "moh", statut: "valide",
        note: "Famille du Manden, très présente à Kissidougou et N'Zérékoré : un nom qui a voyagé." },
    ],
  },
  {
    id: "soumah",
    nom: "Famille Soumah",
    noms: [
      { nom: "Soumah", region: "basse-cote", provenance: "moh", statut: "valide",
        note: "Soumah, de Soumaoro (Kanté), roi du Sosso." },
      { nom: "Barry", region: "fouta", provenance: "moh", statut: "valide",
        note: "Barry = Keïta = Soumah : exemple donné par Guinéenews (2025) et par CuFiG." },
      { nom: "Keïta", region: "haute-guinee", provenance: "moh", statut: "valide",
        note: "Kéita = Soumah : équivalence aussi donnée par CuFiG." },
      { nom: "Doré", region: "foret", langue: "Toma", provenance: "cufig", statut: "a-valider",
        note: "Proposition : CuFiG donne Kanté = Soumaoro = Doré. Case à confirmer par Moh." },
    ],
  },
];

/** 2. COUSINS DE LIGNE — cousinage à plaisanterie entre familles entières */
export interface Cousinage {
  a: string;                // id de famille
  b: string;
  taquinerie?: string;      // formule ou thème de plaisanterie (version enfants)
  provenance: Provenance;
  statut: Statut;
}

export const COUSINS_DE_LIGNE: Cousinage[] = [
  { a: "bangoura", b: "soumah",
    taquinerie: "« Saa na khun ma ! » (« Rajoute-toi à celui-là »), en sosso, d'après Mady Bangoura, groupe CuFiG.",
    provenance: "cufig", statut: "a-valider" },
];

/** 3. LIENS CROISÉS — hors tableau, cartes rares */
export interface LienCroise {
  a: string;                // patronyme
  b: string;                // patronyme
  type: "taquinerie" | "equivalence";
  note?: string;
  provenance: Provenance;
  statut: Statut;
}

export const LIENS_CROISES: LienCroise[] = [
  { a: "Doumbouya", b: "Camara", type: "taquinerie",
    note: "Certaines familles se taquinent, alors que les deux lignes ne sont pas cousines en règle générale.",
    provenance: "moh", statut: "valide" },
  { a: "Millimono", b: "Kourouma", type: "equivalence",
    provenance: "cufig", statut: "valide" },
  // ── Équivalences CuFiG (Nafadji Sory Condé) hors des 4 familles : à classer ──
  { a: "Tolno", b: "Touré", type: "equivalence", provenance: "cufig", statut: "a-valider" },
  { a: "Ouamouno", b: "Traoré", type: "equivalence", note: "Ouamouno = Feindouno = Traoré.", provenance: "cufig", statut: "a-valider" },
  { a: "Feindouno", b: "Traoré", type: "equivalence", provenance: "cufig", statut: "a-valider" },
  { a: "Kanté", b: "Doré", type: "equivalence", note: "Kanté = Soumaoro = Doré.", provenance: "cufig", statut: "a-valider" },
  { a: "Kourouma", b: "Cissoko", type: "equivalence", provenance: "cufig", statut: "a-valider" },
  { a: "Fofana", b: "Youla", type: "equivalence", note: "Fofana = Youla = Yansané.", provenance: "cufig", statut: "a-valider" },
  { a: "Fofana", b: "Yansané", type: "equivalence", provenance: "cufig", statut: "a-valider" },
  { a: "Condé", b: "Diarra", type: "equivalence", note: "Condé = Diarra = Ndiaye (au-delà de la Guinée).", provenance: "cufig", statut: "a-valider" },
  // ── Cousinages relevés dans la veille du 20/10/2026 : à vérifier pour la Guinée ──
  { a: "Traoré", b: "Koné", type: "taquinerie", note: "« Qui mange le plus de haricots ? »", provenance: "veille:wikipedia-sanankuya", statut: "a-valider" },
  { a: "Keïta", b: "Coulibaly", type: "taquinerie", provenance: "veille:dossier-patronymes-pati", statut: "a-valider" },
  { a: "Traoré", b: "Diarra", type: "taquinerie", provenance: "veille:dossier-patronymes-pati", statut: "a-valider" },
  { a: "Diallo", b: "Traoré", type: "taquinerie", provenance: "veille:dossier-patronymes-pati", statut: "a-valider" },
];

/** Cousinages entre groupes (pas entre patronymes) */
export const COUSINAGES_GROUPES: { a: string; b: string; note?: string; provenance: Provenance; statut: Statut }[] = [
  { a: "Peuls", b: "Diakhankés", note: "« Partout où un Peul et un Diakhanké se retrouvent, c'est la bienveillance. »",
    provenance: "veille:guineenews-2025", statut: "a-valider" },
  { a: "Manon", b: "Konon", note: "Cousinage de Guinée forestière (groupe CuFiG).", provenance: "cufig", statut: "a-valider" },
  { a: "Peuls", b: "Forgerons", provenance: "veille:afrique-gouvernance", statut: "a-valider" },
  { a: "Nobles", b: "Griots", provenance: "veille:afrique-gouvernance", statut: "a-valider" },
  { a: "Grands-parents", b: "Petits-enfants", note: "Charte de Kurukan Fuga, article 7 (version de Kankan 1998).",
    provenance: "veille:charte-ccaf", statut: "valide" },
];

/** Charte éditoriale du jeu (enfants) */
export const REGLES_EDITORIALES = {
  taquineriesAutorisees: [
    "la gourmandise (riz, haricots, couscous, fonio…)",
    "la paresse ou la lenteur",
    "les défis amicaux (qui court le plus vite, qui se lève le plus tôt…)",
  ],
  interdits: [
    "les insultes « esclave » ou « fils d'esclave », pourtant courantes chez les adultes",
    "tout stéréotype ethnique et tout classement entre ethnies",
    "toute moquerie sur le physique, la religion ou la pauvreté",
  ],
  principe: "La plaisanterie sert à rapprocher et à désamorcer, jamais à humilier.",
};

export const SOURCES = [
  "Arbitrages de Moh (20/10/2026)",
  "Groupe Facebook « ONG Cultures et Fiertés Guinéennes (CuFiG) » — Nafadji Sory Condé, « Le principe d'équivalence patronymique » ; Mady Bangoura, « Sanakhuya »",
  "Nènè Moussa Maléya Camara, La Guinée est une famille (poèmes, Conakry, 1991 ; 3e éd. Bak & Fils, 2003) — à consulter en version papier",
  "Charte du Manden, version de Kankan 1998 (CCAF, The Manden Charter), article 7",
  "Guinéenews, « Le cousinage à plaisanterie, un rempart ancestral contre les conflits sociaux » (24/03/2025)",
  "Beyond Intractability, « Special Affinities and Conflict Resolution »",
  "Afrique-gouvernance, « Les alliances à plaisanteries comme voie… »",
];
