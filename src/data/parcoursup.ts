/**
 * Offre de formation publique post-bac — relevée sur ParcourSup Guinée (MESRSI), octobre 2026.
 * Pages : offre-de-formation-en-licence-professionnelle-et-fondamentale, -en-dut-et-cycle-preparatoire,
 * -en-diplome-detat-et-ingenierie, institutions. Codage RIASEC : PATI. À rafraîchir chaque rentrée.
 */

export type Serie = "SE" | "SM" | "SS";
export const SERIES: Record<Serie, string> = {
  SE: "Sciences expérimentales",
  SM: "Sciences mathématiques",
  SS: "Sciences sociales",
};
// Les variantes « -FA » (franco-arabe) suivent la série de base.

export type NiveauPsup = "Licence" | "Licence pro" | "DUT" | "Prépa" | "Ingénieur" | "Doctorat d'État";

export const ETABS_PSUP: Record<string, { nom: string; ville: string; region: string }> = {
  UGANC: { nom: "Université Gamal Abdel Nasser de Conakry", ville: "Conakry", region: "Conakry" },
  UGLCS: { nom: "Université Général Lansana Conté de Sonfonia", ville: "Conakry", region: "Conakry" },
  UJNK: { nom: "Université Julius Nyerere de Kankan", ville: "Kankan", region: "Haute-Guinée" },
  UL: { nom: "Université de Labé", ville: "Labé", region: "Moyenne-Guinée" },
  UK: { nom: "Université de Kindia", ville: "Kindia", region: "Basse-Guinée" },
  UZ: { nom: "Université de N’Zérékoré", ville: "N’Zérékoré", region: "Guinée Forestière" },
  UNG: { nom: "Université Numérique de Guinée", ville: "Conakry", region: "Conakry" },
  ISSMV: { nom: "Institut Supérieur des Sciences et de Médecine Vétérinaire", ville: "Dalaba", region: "Moyenne-Guinée" },
  ISAMK: { nom: "Institut Supérieur des Arts Mory Kanté", ville: "Dubréka", region: "Basse-Guinée" },
  ISMG: { nom: "Institut Supérieur des Mines et de Géologie", ville: "Boké", region: "Basse-Guinée" },
  IST: { nom: "Institut Supérieur de Technologie", ville: "Mamou", region: "Moyenne-Guinée" },
  ESTH: { nom: "École Supérieure de Tourisme et de l’Hôtellerie", ville: "Conakry", region: "Conakry" },
  ISAV: { nom: "Institut Supérieur Agronomique et Vétérinaire", ville: "Faranah", region: "Haute-Guinée" },
  ISAU: { nom: "Institut Supérieur d’Architecture et d’Urbanisme", ville: "Conakry", region: "Conakry" },
  CPGE: { nom: "Classes Préparatoires aux Grandes Écoles", ville: "Conakry", region: "Conakry" },
};

export interface FilierePsup {
  f: string;            // intitulé
  n: NiveauPsup;
  e: string[];          // sigles établissements
  s: Serie[];           // séries de bac admises
  c: string;            // code RIASEC (1-2 lettres)
}

const SE_SM: Serie[] = ["SE", "SM"], SE: Serie[] = ["SE"], SS: Serie[] = ["SS"];

export const FILIERES_PSUP: FilierePsup[] = [
  // ——— Licences (sciences, santé, numérique)
  { f: "Microbiologie et Immunologie", n: "Licence pro", e: ["UGANC", "UL"], s: SE, c: "I" },
  { f: "Biologie Médicale", n: "Licence pro", e: ["UGANC", "UL", "UK", "UZ"], s: SE, c: "IS" },
  { f: "Bioinformatique et Analyse des Données Biologiques", n: "Licence pro", e: ["UGANC"], s: SE, c: "IC" },
  { f: "Biochimie", n: "Licence pro", e: ["UGANC", "UJNK"], s: SE, c: "I" },
  { f: "Biologie", n: "Licence", e: ["UGANC", "UJNK", "UK"], s: SE, c: "I" },
  { f: "Chimie", n: "Licence", e: ["UGANC", "UJNK", "UK", "UZ"], s: SE_SM, c: "I" },
  { f: "Chimie Alimentaire et Contrôle Qualité", n: "Licence pro", e: ["UGANC", "UJNK", "UZ"], s: SE_SM, c: "IC" },
  { f: "Chimie Environnementale", n: "Licence pro", e: ["UGANC", "UZ"], s: SE_SM, c: "I" },
  { f: "Mathématiques", n: "Licence", e: ["UGANC", "UJNK", "UL", "UK", "UZ"], s: SE_SM, c: "I" },
  { f: "Mathématiques, Intelligence Artificielle et Analyse Prédictive", n: "Licence pro", e: ["UGANC", "UL"], s: SE_SM, c: "IC" },
  { f: "Modélisation mathématique et Simulation numérique", n: "Licence pro", e: ["UGANC", "UJNK", "UL", "UK", "UZ"], s: SE_SM, c: "I" },
  { f: "Mathématiques Appliquées", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "I" },
  { f: "Physique", n: "Licence", e: ["UGANC", "UK", "UZ"], s: SE_SM, c: "I" },
  { f: "Électronique et Énergétique", n: "Licence pro", e: ["UGANC", "UJNK", "UL", "UZ"], s: SE_SM, c: "RI" },
  { f: "Environnement et Climat", n: "Licence pro", e: ["UGANC", "UL", "UZ"], s: SE_SM, c: "I" },
  { f: "Intelligence Artificielle et Systèmes Embarqués", n: "Licence pro", e: ["UGANC", "UL"], s: SE_SM, c: "IR" },
  { f: "Ingénierie Ferroviaire", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "R" },
  { f: "Communication et Signalisation Ferroviaire", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "RC" },
  { f: "Transport Ferroviaire", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "CR" },
  { f: "Matériels Roulants Ferroviaires", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "R" },
  { f: "Nouvelles Technologies de l’Information et de la Communication", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "IC" },
  { f: "Développement Logiciel et Sécurité Informatique", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "IC" },
  { f: "Procédés Chimiques et Industriels", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "RI" },
  { f: "Construction et Infrastructure", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "R" },
  { f: "Automatisme Industriel, Domotique et Systèmes Électroénergétiques", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "RI" },
  { f: "Maintenance des Systèmes Industriels", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "R" },
  { f: "Informatique, Systèmes numériques et Intelligence Artificielle", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "IC" },
  { f: "Mécanique des Engins Lourds, Productique et Thermique", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "R" },
  { f: "Systèmes Électroniques et Télécommunications", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "RI" },
  { f: "Sciences Infirmières", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "S" },
  { f: "Préparateur en Pharmacie", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "CS" },
  { f: "Sciences Obstétricales (sage-femme)", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "S" },
  { f: "Imagerie Médicale et Radiologie Diagnostique", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "IR" },
  { f: "Nutrition Clinique et Diététique", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "SI" },
  { f: "Kinésithérapie", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "SR" },
  { f: "Finances Publiques et Gouvernance Territoriale", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "CE" },
  { f: "Statistique appliquée à la Décision Publique", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "CI" },
  { f: "Mathématiques, Physique et Sciences de l’Ingénieur (MPSI)", n: "Licence pro", e: ["UGANC"], s: SE_SM, c: "I" },
  // ——— Licences (droit, économie, sciences humaines)
  { f: "Droit Privé", n: "Licence", e: ["UGLCS"], s: SS, c: "EC" },
  { f: "Droit Public", n: "Licence", e: ["UGLCS"], s: SS, c: "CE" },
  { f: "Sciences Politiques", n: "Licence", e: ["UGLCS", "UJNK"], s: SS, c: "ES" },
  { f: "Banque, Finance et Assurance", n: "Licence pro", e: ["UGLCS", "UJNK", "UK"], s: SE_SM, c: "CE" },
  { f: "Gestion", n: "Licence", e: ["UGLCS", "UJNK", "UL", "UK", "UNG"], s: SE_SM, c: "EC" },
  { f: "Économie", n: "Licence", e: ["UGLCS", "UJNK", "UL", "UK"], s: SE_SM, c: "IE" },
  { f: "Histoire", n: "Licence", e: ["UGLCS"], s: SS, c: "IA" },
  { f: "Géographie", n: "Licence", e: ["UGLCS", "UZ"], s: SS, c: "I" },
  { f: "Sociologie", n: "Licence", e: ["UGLCS", "UJNK", "UL", "UK", "UZ"], s: SS, c: "SI" },
  { f: "Philosophie", n: "Licence", e: ["UGLCS", "UJNK", "UK"], s: SS, c: "IA" },
  // ——— DUT et cycles préparatoires
  { f: "Assistant Vétérinaire", n: "DUT", e: ["ISSMV"], s: SE, c: "SR" },
  { f: "Contrôle de Qualité des Aliments", n: "DUT", e: ["ISSMV"], s: SE_SM, c: "CI" },
  { f: "Aquaculture", n: "DUT", e: ["ISSMV"], s: SE_SM, c: "R" },
  { f: "Énergies Renouvelables et Efficacité Énergétique", n: "DUT", e: ["UK"], s: SE_SM, c: "RI" },
  { f: "Réalisation et Production Cinématographiques", n: "DUT", e: ["ISAMK"], s: SS, c: "A" },
  { f: "Production Audiovisuelle et Médias Numériques", n: "DUT", e: ["ISAMK"], s: SS, c: "AE" },
  { f: "Hydraulique et Gestion des Ressources en Eau", n: "DUT", e: ["UZ"], s: SE_SM, c: "RI" },
  { f: "Géomatique", n: "DUT", e: ["UZ"], s: SS, c: "IC" },
  { f: "Échantillonnage et Contrôle Qualité des Minerais", n: "DUT", e: ["ISMG"], s: SE_SM, c: "CR" },
  { f: "Simulation et Optimisation des Procédés Métallurgiques", n: "DUT", e: ["ISMG"], s: SE_SM, c: "IR" },
  { f: "Installation et Maintenance de Système Photovoltaïque", n: "DUT", e: ["IST"], s: SE_SM, c: "R" },
  { f: "Technologie Alimentaire", n: "DUT", e: ["ESTH"], s: SE, c: "RC" },
  { f: "Aménagement Paysager", n: "DUT", e: ["ISAV"], s: SE_SM, c: "RA" },
  { f: "Technologies Agro-industrielles", n: "DUT", e: ["ISAV"], s: SE_SM, c: "R" },
  { f: "Prépa Mathématiques, Physique et Sciences de l’Ingénieur", n: "Prépa", e: ["CPGE"], s: SE_SM, c: "I" },
  { f: "Prépa Économie, Gestion et Statistiques", n: "Prépa", e: ["CPGE"], s: SE_SM, c: "CE" },
  // ——— Ingénierie et diplômes d'État
  { f: "Génie Chimique", n: "Ingénieur", e: ["UGANC"], s: SE_SM, c: "IR" },
  { f: "Génie Civil", n: "Ingénieur", e: ["UGANC"], s: SE_SM, c: "RI" },
  { f: "Génie Électrique", n: "Ingénieur", e: ["UGANC"], s: SE_SM, c: "RI" },
  { f: "Génie Industriel et Maintenance", n: "Ingénieur", e: ["UGANC"], s: SE_SM, c: "R" },
  { f: "Génie Informatique", n: "Ingénieur", e: ["UGANC", "IST"], s: SE_SM, c: "IC" },
  { f: "Génie Mécanique", n: "Ingénieur", e: ["UGANC"], s: SE_SM, c: "R" },
  { f: "Génie des Télécommunications", n: "Ingénieur", e: ["UGANC"], s: SE_SM, c: "RI" },
  { f: "Docteur en Médecine", n: "Doctorat d'État", e: ["UGANC"], s: SE_SM, c: "IS" },
  { f: "Docteur en Pharmacie", n: "Doctorat d'État", e: ["UGANC"], s: SE_SM, c: "IC" },
  { f: "Docteur en Odontologie", n: "Doctorat d'État", e: ["UGANC"], s: SE_SM, c: "SR" },
  { f: "Docteur en Médecine Vétérinaire", n: "Doctorat d'État", e: ["ISSMV"], s: SE, c: "IR" },
  { f: "Technologie et Contrôle des Produits Alimentaires", n: "Ingénieur", e: ["ISSMV"], s: SE_SM, c: "IC" },
  { f: "Pêche et Aquaculture", n: "Ingénieur", e: ["ISSMV"], s: SE_SM, c: "RI" },
  { f: "Architecture", n: "Doctorat d'État", e: ["ISAU"], s: SE_SM, c: "AR" },
  { f: "Urbanisme", n: "Doctorat d'État", e: ["ISAU"], s: SE_SM, c: "IA" },
  { f: "Génie des Ressources Naturelles", n: "Ingénieur", e: ["UZ"], s: SE_SM, c: "RI" },
  { f: "Génie en Sciences de l’Environnement", n: "Ingénieur", e: ["UZ"], s: SE_SM, c: "I" },
  { f: "Génie Hydrologique", n: "Ingénieur", e: ["UZ"], s: SE_SM, c: "IR" },
  { f: "Génie en Sciences de l’Atmosphère", n: "Ingénieur", e: ["UZ"], s: SE_SM, c: "I" },
  { f: "Génie Géologique", n: "Ingénieur", e: ["ISMG"], s: SE, c: "IR" },
  { f: "Génie Minier", n: "Ingénieur", e: ["ISMG"], s: SE_SM, c: "RI" },
  { f: "Traitement des Minerais et Métallurgie", n: "Ingénieur", e: ["ISMG"], s: SE_SM, c: "RI" },
  { f: "Environnement et Sécurité Industriels", n: "Ingénieur", e: ["ISMG"], s: SE_SM, c: "CR" },
  { f: "Génie Énergétique", n: "Ingénieur", e: ["IST"], s: SE_SM, c: "RI" },
  { f: "Instrumentation et Maintenance", n: "Ingénieur", e: ["IST"], s: SE_SM, c: "R" },
  { f: "Technologies des Équipements Biomédicaux", n: "Ingénieur", e: ["IST"], s: SE_SM, c: "RS" },
  { f: "Conception et Fabrication Mécanique", n: "Ingénieur", e: ["IST"], s: SE_SM, c: "RA" },
  { f: "Analyses Chimiques et Contrôle Qualité", n: "Ingénieur", e: ["IST"], s: SE_SM, c: "IC" },
  { f: "Bioingénierie", n: "Ingénieur", e: ["IST"], s: SE_SM, c: "I" },
  { f: "Sciences Agricoles", n: "Ingénieur", e: ["ISAV"], s: SE_SM, c: "RI" },
  { f: "Agroforesterie", n: "Ingénieur", e: ["ISAV"], s: SE_SM, c: "R" },
  { f: "Aménagement et Environnement Forestiers", n: "Ingénieur", e: ["ISAV"], s: SE_SM, c: "RI" },
  { f: "Sciences Animales", n: "Ingénieur", e: ["ISAV"], s: SE_SM, c: "RS" },
  { f: "Génie Rural", n: "Ingénieur", e: ["ISAV"], s: SE_SM, c: "R" },
];

/** Filières pour un code (dominant, secondaire), celles de la région d'abord. */
export function filieresPour(dom: string, sec: string, region?: string, max = 8): FilierePsup[] {
  const score = (x: FilierePsup) => (x.c[0] === dom ? 3 : 0) + (x.c[1] === dom ? 2 : 0) + (x.c[0] === sec ? 1.5 : 0) + (x.c[1] === sec ? 1 : 0)
    + (region && x.e.some((e) => ETABS_PSUP[e]?.region === region) ? 0.5 : 0);
  return FILIERES_PSUP.map((x) => [score(x), x] as const).filter(([s]) => s >= 2).sort((a, b) => b[0] - a[0]).slice(0, max).map(([, x]) => x);
}

/** Séries de bac qui ouvrent ces filières, comptées. */
export function seriesPour(fs: FilierePsup[]): Serie[] {
  const n: Record<string, number> = {};
  fs.forEach((x) => x.s.forEach((s) => (n[s] = (n[s] || 0) + 1)));
  return (Object.keys(n) as Serie[]).sort((a, b) => n[b] - n[a]);
}
