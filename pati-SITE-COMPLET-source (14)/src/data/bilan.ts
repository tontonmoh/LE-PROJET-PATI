// =====================================================================
//  DÉCOUVRE TON GÉNIE — orientation façon RIASEC, adaptée enfants
//  6 "génies" (talents) bien distincts, chacun ouvrant sur de vrais
//  secteurs guinéens et Simandou 2040. Tout est éditable ci-dessous.
// =====================================================================

export type PillarKey = "batisseur" | "chercheur" | "createur" | "accompagnateur" | "entrepreneur" | "organisateur";

export const PILLARS: Record<PillarKey, { title: string; color: string; icon: string; desc: string }> = {
  batisseur:      { title: "Le Bâtisseur",      color: "#E8532D", icon: "build",  desc: "Construire, réparer, manier les machines et le terrain. (profil Réaliste)" },
  chercheur:      { title: "Le Chercheur",      color: "#2563EB", icon: "search", desc: "Comprendre, analyser, explorer les sciences et les chiffres. (profil Investigateur)" },
  createur:       { title: "Le Créateur",       color: "#DB2777", icon: "palette", desc: "Imaginer, dessiner, écrire et raconter. (profil Artistique)" },
  accompagnateur: { title: "L'Accompagnateur",  color: "#0F6E56", icon: "care",   desc: "Aider, soigner et transmettre aux autres. (profil Social)" },
  entrepreneur:   { title: "L'Entrepreneur",    color: "#7C3AED", icon: "rocket", desc: "Convaincre, vendre, lancer et diriger des projets. (profil Entreprenant)" },
  organisateur:   { title: "L'Organisateur",    color: "#0E7490", icon: "org",    desc: "Planifier, coordonner et faire tourner les choses. (profil Conventionnel)" },
};

export type Metier = { id: string; title: string; pillar: PillarKey; sector: string; track: string; shortDesc: string };

export const METIERS: Metier[] = [
  // — Le Bâtisseur : mines, énergie, BTP, mécanique —
  { id: "geologue-mine", title: "Géologue minier", pillar: "batisseur", sector: "Mines & géologie", track: "Lycée scientifique → Université / IST", shortDesc: "Étudier sols et roches pour exploiter le fer de Simandou et d'autres gisements." },
  { id: "tech-energie", title: "Technicien énergie", pillar: "batisseur", sector: "Énergie & barrages", track: "Lycée technique → BTS / IST", shortDesc: "Faire fonctionner les barrages et les réseaux qui apportent l'électricité." },
  { id: "mecanicien-engins", title: "Mécanicien / Conducteur d'engins", pillar: "batisseur", sector: "Mines & BTP", track: "Formation pro / CFP", shortDesc: "Conduire et entretenir les grosses machines des chantiers et des mines." },
  { id: "ingenieur-btp", title: "Ingénieur BTP", pillar: "batisseur", sector: "Infrastructures", track: "Lycée scientifique → École d'ingénieur", shortDesc: "Concevoir routes, ponts, voie ferrée et bâtiments du corridor Simandou." },
  // — Le Chercheur : santé, data, agronomie, finance-analyse —
  { id: "medecin", title: "Médecin / Chercheur en santé", pillar: "chercheur", sector: "Santé", track: "Lycée scientifique → Faculté de médecine", shortDesc: "Comprendre les maladies, diagnostiquer et faire avancer les soins." },
  { id: "data-analyst", title: "Data Analyst", pillar: "chercheur", sector: "Numérique & données", track: "Université → data / IA", shortDesc: "Analyser les chiffres pour aider à décider et à prévoir." },
  { id: "agronome", title: "Agronome / Chercheur", pillar: "chercheur", sector: "Agriculture & environnement", track: "Université / ISAV", shortDesc: "Trouver comment mieux cultiver et protéger les sols et l'eau." },
  { id: "analyste-financier", title: "Analyste financier", pillar: "chercheur", sector: "Finance & économie", track: "Université → finance", shortDesc: "Étudier les chiffres d'un projet pour juger s'il est solide." },
  // — Le Créateur : design, littérature, médias, architecture —
  { id: "designer", title: "Designer graphique / produit", pillar: "createur", sector: "Design & création", track: "École d'art / design", shortDesc: "Imaginer des visuels, des objets et des marques qui parlent aux gens." },
  { id: "illustrateur", title: "Illustrateur / Auteur jeunesse", pillar: "createur", sector: "Littérature & édition", track: "Arts / lettres → portfolio", shortDesc: "Écrire et dessiner des histoires, comme celles de PATI." },
  { id: "journaliste", title: "Journaliste / Créateur de contenu", pillar: "createur", sector: "Médias & communication", track: "Lettres → journalisme", shortDesc: "Raconter le réel en mots, en sons et en images." },
  { id: "architecte", title: "Architecte", pillar: "createur", sector: "Architecture", track: "Lycée scientifique → École d'archi", shortDesc: "Dessiner des bâtiments beaux, utiles et adaptés au climat." },
  // — L'Accompagnateur : santé-soin, éducation, social, droit —
  { id: "infirmier", title: "Infirmier / Sage-femme", pillar: "accompagnateur", sector: "Santé & soin", track: "Lycée → école de santé", shortDesc: "Prendre soin des patients au quotidien, près des familles." },
  { id: "enseignant", title: "Enseignant / Formateur", pillar: "accompagnateur", sector: "Éducation", track: "Université → ENI / formation", shortDesc: "Transmettre le savoir et faire grandir les plus jeunes." },
  { id: "travailleur-social", title: "Travailleur social", pillar: "accompagnateur", sector: "Action sociale", track: "Université → sciences sociales", shortDesc: "Aider les personnes et les communautés à aller mieux." },
  { id: "juriste", title: "Juriste / Avocat", pillar: "accompagnateur", sector: "Droit & justice", track: "Université → faculté de droit", shortDesc: "Défendre les droits des gens et faire respecter les règles." },
  // — L'Entrepreneur : commerce, finance, entrepreneuriat, gestion de projet —
  { id: "entrepreneur", title: "Entrepreneur / Chef d'entreprise", pillar: "entrepreneur", sector: "Entrepreneuriat", track: "Gestion / incubateur", shortDesc: "Lancer sa propre activité et créer des emplois." },
  { id: "commercial", title: "Responsable commercial / marketing", pillar: "entrepreneur", sector: "Commerce & marketing", track: "Université → commerce", shortDesc: "Faire connaître des produits et convaincre des clients." },
  { id: "banquier", title: "Banquier / Conseiller financier", pillar: "entrepreneur", sector: "Banque & finance", track: "Université → finance / gestion", shortDesc: "Aider gens et entreprises à gérer et investir leur argent." },
  { id: "chef-projet", title: "Chef de projet", pillar: "entrepreneur", sector: "Gestion de projet", track: "Université → management", shortDesc: "Porter une idée du début à la fin, avec une équipe." },
  // — L'Organisateur : logistique, administration, agro-industrie, qualité —
  { id: "logisticien", title: "Logisticien / Supply chain", pillar: "organisateur", sector: "Transport & logistique", track: "Université → logistique", shortDesc: "Organiser le transport du minerai et des marchandises, du train au port." },
  { id: "gestionnaire", title: "Gestionnaire / Comptable", pillar: "organisateur", sector: "Administration & gestion", track: "Université → comptabilité", shortDesc: "Tenir les comptes et faire tourner une organisation sans accroc." },
  { id: "resp-agro", title: "Responsable agro-industrie", pillar: "organisateur", sector: "Agro-industrie", track: "ISAV / gestion", shortDesc: "Coordonner la transformation et la vente des produits agricoles." },
  { id: "resp-qualite", title: "Responsable qualité / portuaire", pillar: "organisateur", sector: "Logistique portuaire", track: "Université / BTS", shortDesc: "Veiller à ce que tout arrive à temps et aux normes, jusqu'au port." },
];

export const REGIONS = ["Conakry", "Basse-Guinée", "Moyenne-Guinée", "Haute-Guinée", "Guinée Forestière"];

// 30 questions (5 par génie), entrelacées pour ne jamais enchaîner le même profil.
export type Question = { text: string; pillar: PillarKey };
export const QUESTIONS: Question[] = [
  // Tour 1
  { text: "Réparer ou bricoler un objet de mes mains, ça me plaît vraiment.", pillar: "batisseur" },
  { text: "Quand je ne comprends pas quelque chose, je cherche jusqu'à trouver.", pillar: "chercheur" },
  { text: "Dessiner, peindre ou imaginer des images, j'adore ça.", pillar: "createur" },
  { text: "Aider quelqu'un qui en a besoin me rend vraiment heureux.", pillar: "accompagnateur" },
  { text: "Convaincre les autres de me suivre dans une idée, j'aime ça.", pillar: "entrepreneur" },
  { text: "Ranger, classer et tout organiser me satisfait.", pillar: "organisateur" },
  // Tour 2
  { text: "Travailler dehors, sur le terrain, me convient mieux qu'enfermé.", pillar: "batisseur" },
  { text: "Les sciences, les expériences et les observations me passionnent.", pillar: "chercheur" },
  { text: "Inventer une histoire ou écrire des textes me passionne.", pillar: "createur" },
  { text: "Expliquer et apprendre des choses aux autres me plaît.", pillar: "accompagnateur" },
  { text: "J'aimerais lancer ma propre activité un jour.", pillar: "entrepreneur" },
  { text: "Suivre un plan clair, étape par étape, me convient bien.", pillar: "organisateur" },
  // Tour 3
  { text: "Comprendre comment fonctionne une machine ou un moteur m'intéresse.", pillar: "batisseur" },
  { text: "J'aime analyser des chiffres et des données pour comprendre.", pillar: "chercheur" },
  { text: "J'ai souvent des idées originales que personne n'a eues.", pillar: "createur" },
  { text: "Je suis souvent celui ou celle vers qui on vient se confier.", pillar: "accompagnateur" },
  { text: "Prendre les devants et diriger une équipe ne me fait pas peur.", pillar: "entrepreneur" },
  { text: "J'aime gérer des listes, un budget ou un emploi du temps.", pillar: "organisateur" },
  // Tour 4
  { text: "J'aimerais construire des choses concrètes : routes, maisons, ponts.", pillar: "batisseur" },
  { text: "Résoudre une énigme ou un problème compliqué m'amuse.", pillar: "chercheur" },
  { text: "M'exprimer par l'art, la musique ou la mise en scène me plaît.", pillar: "createur" },
  { text: "M'occuper de la santé ou du bien-être des gens me motive.", pillar: "accompagnateur" },
  { text: "Vendre ou faire connaître quelque chose me motive.", pillar: "entrepreneur" },
  { text: "Faire en sorte que tout arrive à temps et en ordre me plaît.", pillar: "organisateur" },
  // Tour 5
  { text: "Manier des outils ou conduire un engin, ça me tente.", pillar: "batisseur" },
  { text: "Comprendre POURQUOI les choses arrivent m'intéresse plus que tout.", pillar: "chercheur" },
  { text: "Rendre les choses belles et soignées est important pour moi.", pillar: "createur" },
  { text: "Défendre ce qui est juste pour les autres me tient à cœur.", pillar: "accompagnateur" },
  { text: "Relever des défis et prendre des risques, ça m'excite.", pillar: "entrepreneur" },
  { text: "Je remarque vite quand un détail ne colle pas dans des informations.", pillar: "organisateur" },
];

export const ANSWERS = [
  { label: "Pas du tout", weight: 0 },
  { label: "Un peu", weight: 1 },
  { label: "Beaucoup", weight: 2 },
  { label: "J'adore ça !", weight: 3 },
];
