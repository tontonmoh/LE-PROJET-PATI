// SENAG — Registre des 60 Compagnons de l'Indépendance (1957-1958)
// Source : 60_Compagnons_Independance_1957.docx (Lewin t.2, Kobélé Kéita, panneau SGG)
// Document de travail — vérification finale recommandée au JO de la Guinée française (avril 1957)

export const BUREAU_ASSEMBLEE = [
  { fonction: "Président", nom: "Diallo Saïfoulaye" },
  { fonction: "1er Vice-président", nom: "Célestine Robert" },
  { fonction: "2e Vice-président", nom: "Caba Lamine Ibrahima" },
  { fonction: "3e Vice-président", nom: "Fofana Kéfimba dit Donzo Kéfing" },
  { fonction: "4e Vice-président", nom: "Soumah Moustapha" },
  { fonction: "Secrétaire", nom: "Tounkara Jean Faragué" },
  { fonction: "Secrétaire", nom: "Camara Moussa Sanguiana" },
  { fonction: "Questeur", nom: "Keïta Ouremba" },
  { fonction: "Questeur adjoint", nom: "Sow Souleymane" },
];

export type CirconscriptionEntry = {
  circonscription: string;
  membres: string[];
  sansSiege1957: boolean;
};

export const CIRCONSCRIPTIONS: CirconscriptionEntry[] = [
  { circonscription: "Beyla", sansSiege1957: false, membres: ["Célestine Robert (1er Vice-président)", "Cissé Moustapha", "Fofana Kéfimba dit Donzo Kéfing (3e Vice-président)"] },
  { circonscription: "Boffa", sansSiege1957: true, membres: ["*— aucun siège territorial en 1957 (rattachée à la Basse-Guinée)*"] },
  { circonscription: "Boké", sansSiege1957: false, membres: ["Camara Sankoumba", "Camara Mustapha"] },
  { circonscription: "Conakry", sansSiege1957: false, membres: ["Soumah Moustapha (4e Vice-président)  [+ Sékou Touré]"] },
  { circonscription: "Dabola", sansSiege1957: false, membres: ["Barry Baba Alimou"] },
  { circonscription: "Dalaba", sansSiege1957: false, membres: ["Bah Thierno Ibrahima"] },
  { circonscription: "Dinguiraye", sansSiege1957: false, membres: ["Tall Mody Habidou (chef de canton, indépendant rallié au PDG)"] },
  { circonscription: "Dubréka", sansSiege1957: false, membres: ["Soumah Nabi Issa  [+ Dr Roger Najib Accar ]"] },
  { circonscription: "Faranah", sansSiege1957: false, membres: ["Condé Ansoumane"] },
  { circonscription: "Forécariah", sansSiege1957: false, membres: ["Touré Dondo"] },
  { circonscription: "Gaoual", sansSiege1957: false, membres: ["Bounka Mané", "Diallo Aguibou"] },
  { circonscription: "Guéckédou", sansSiege1957: false, membres: ["Joachim Eugène", "Sangaré Toumani", "Traoré Tambakala"] },
  { circonscription: "Kankan", sansSiege1957: false, membres: ["Diané Lansana", "Kaba Lamine Ibrahima (2e Vice-président)"] },
  { circonscription: "Kindia", sansSiege1957: false, membres: ["Sylla Seny Faciné  [+ Jean-Eugène Mignard ]"] },
  { circonscription: "Kissidougou", sansSiege1957: false, membres: ["Keïta El Hadj Mory", "Mara Diomba"] },
  { circonscription: "Kouroussa", sansSiege1957: false, membres: ["Camara Moussa Sanguiana (secrétaire)", "Keïta Ouremba (questeur)"] },
  { circonscription: "Labé", sansSiege1957: false, membres: ["Diallo Saïfoulaye (Président de l'Assemblée)", "Baldé Mamadou Tanou", "Demarchelier Jacques", "Diakité M'Bemba", "Diallo Alpha Mamadou", "Diallo Amadou Telivel"] },
  { circonscription: "Macenta", sansSiege1957: false, membres: ["Béavogui Koman", "Camara Mory", "Guèye Doudou"] },
  { circonscription: "Mali", sansSiege1957: false, membres: ["Diallo Oumar", "Sow Souleymane (questeur adjoint)"] },
  { circonscription: "Mamou", sansSiege1957: false, membres: ["Barry Alpha Oumar", "Doumbouya Bela"] },
  { circonscription: "N'Zérékoré", sansSiege1957: false, membres: ["Doré Lama", "Gnan Félix Matos", "Tounkara Jean Faragué (secrétaire)"] },
  { circonscription: "Pita", sansSiege1957: false, membres: ["Bah Thierno Ousmane", "Thiam Mamadou  [+ Ibrahima Barry"] },
  { circonscription: "Siguiri", sansSiege1957: false, membres: ["Cissé Karamoko", "Doumbouya Kouramoudou"] },
  { circonscription: "Télimélé", sansSiege1957: false, membres: ["Diallo Ibrahima", "Sy Boubacar"] },
  { circonscription: "Tougué", sansSiege1957: false, membres: ["Barry Mamadou Diouldé"] },
  { circonscription: "Youkounkoun", sansSiege1957: false, membres: ["Keïta Kéméko"] },
];

export const PREMIER_GOUVERNEMENT = [
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

export const SOURCES = [
  "André Lewin, Ahmed Sékou Touré (1922-1984), Président de la Guinée — Tome 2 (1956-1958), L'Harmattan, 2009 : Annexes 2, 3, 4.",
  "Sidiki Kobélé Kéita, Esquisses biographiques des Premiers Députés Guinéens, Éditions Universitaires, Conakry, 1995.",
  "Panneau commémoratif « Les bénéficiaires de la Croix du Compagnon de l'Indépendance (1959-1960) » (SGG).",
];
