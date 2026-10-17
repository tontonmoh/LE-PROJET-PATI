// NOUVEAU · src/data/searchIndex.ts
// Index unique de la barre de recherche (navbar).
// Livres : BOOKS (hors comingSoon). Séries : SERIES. Encyclopédies / jeux / pages : statiques.
// Routes vérifiées contre App.tsx le 16/10/2026.
import { BOOKS } from "./books";
import { SERIES } from "./series";
import { getCredits } from "./credits";

export type SearchType = "Livre" | "Série" | "Encyclopédie" | "Jeu" | "Page";

export type SearchItem = {
  type: SearchType;
  title: string;
  sub?: string;   // sous-titre court (tranche, auteur, accroche)
  to: string;
  cover?: string;
  keywords?: string; // termes additionnels (patronymes, préfectures, etc.)
};

const STATIC: SearchItem[] = [
  // ——— Encyclopédies
  { type: "Encyclopédie", title: "MANSAYA", sub: "Empires africains", to: "/mansaya", keywords: "Ghana Mali Songhaï Soundjata royaumes" },
  { type: "Encyclopédie", title: "Charte du Mandén", sub: "Kurukan Fuga, 1236", to: "/charte", keywords: "Kurukan Fuga Mandé 44 articles" },
  { type: "Encyclopédie", title: "HOROYA", sub: "Indépendance 1946-1960", to: "/horoya", keywords: "indépendance 1958 référendum Mémorial Compagnons" },
  { type: "Encyclopédie", title: "Fouta Théocratique", sub: "Imamat 1725-1896", to: "/fouta", keywords: "Fouta Djalon almamy diwé peul" },
  { type: "Encyclopédie", title: "LaGuinè", sub: "44 préfectures, 13 communes", to: "/guine", keywords: "préfectures communes Conakry territoires" },
  { type: "Encyclopédie", title: "GINÈ — La Guinée des Pionnières", sub: "12 femmes pionnières", to: "/pionnieres", keywords: "pionnières femmes M'Balia Camara Jeanne Martin Cissé" },
  // ——— Jeux
  { type: "Jeu", title: "Le Défi PATI", sub: "Jouer", to: "/defi" },
  { type: "Jeu", title: "LaGuinè378", sub: "Relier les préfectures", to: "/laguine378", keywords: "préfectures carte" },
  { type: "Jeu", title: "LaGuinèKonakri", sub: "Quartiers ↔ communes", to: "/konakri", keywords: "Conakry quartiers communes" },
  { type: "Jeu", title: "Puzzle de l'Afrique", sub: "Pavage / Situer", to: "/jeux/afrique/afrique.html", keywords: "Afrique carte pays" },
  { type: "Jeu", title: "Chante LIBERTÉ", sub: "Apprendre l'hymne national · 7 ans et +", to: "/hymne", keywords: "hymne national Liberté chanter paroles Guinée Fodéba Keïta Korofo Moussa Alpha Yaya" },
  { type: "Jeu", title: "Le Marché de Pati", sub: "Compter, payer · 2-7 ans", to: "/marche", keywords: "marché Sira compter argent monnaie francs guinéens mômes" },
  { type: "Jeu", title: "Chante Liberté", sub: "L'hymne national · dès 7 ans", to: "/hymne", keywords: "hymne national Liberté chanter paroles Guinée indépendance" },
  { type: "Jeu", title: "Sèbè", sub: "Quiz littérature guinéenne", to: "/sebe", keywords: "quiz littérature auteurs" },
  { type: "Jeu", title: "IWDI LaGuinè", sub: "Jeu de cartes multijoueur", to: "/iwdi", keywords: "cartes préfectures multijoueur" },
  { type: "Jeu", title: "Quiz SENAG", sub: "25 questions pour la mémoire", to: "/senag", keywords: "archives mémoire quiz" },
  { type: "Jeu", title: "Tous les jeux", sub: "Choisir une partie", to: "/session/new", keywords: "jouer classe forum" },
  // ——— Pages
  { type: "Page", title: "Le catalogue", sub: "Toutes les histoires", to: "/catalogue", keywords: "livres bibliothèque" },
  { type: "Page", title: "Écouter les contes", sub: "Contes audio", to: "/ecouter-les-contes", keywords: "audio soussou Kini Bangaly" },
  { type: "Page", title: "Installer l'appli", to: "/appli-mobile", keywords: "PWA hors ligne" },
  { type: "Page", title: "L'Atelier", to: "/atelier", keywords: "Atelier Solidaire" },
  { type: "Page", title: "Mon compte", to: "/compte", keywords: "parent école connexion" },
  { type: "Page", title: "Contribuer", to: "/contribuer", keywords: "soutenir don" },
  { type: "Page", title: "Impact", to: "/impact", keywords: "rapport chiffres" },
  { type: "Page", title: "Presse", to: "/presse", keywords: "dossier communiqué" },
];

// Livres : même lecture que Catalogue.tsx (keywords optionnels, route to || /livre/slug), sans les « Bientôt ».
const fromBooks: SearchItem[] = BOOKS.filter((b) => !b.comingSoon).map((b) => {
  const auteur = getCredits(b.slug).auteur;
  return {
    type: "Livre",
    title: b.title,
    sub: auteur ? `${b.band} · ${auteur}` : b.band,
    to: b.to || `/livre/${b.slug}`,
    cover: b.cover,
    keywords: `${b.description} ${((b as { keywords?: string[] }).keywords || []).join(" ")}`,
  };
});

const fromSeries: SearchItem[] = SERIES.map((s) => ({
  type: "Série",
  title: s.title,
  sub: `${s.band} · ${s.episodes.live}/${s.episodes.total} épisodes`,
  to: s.to,
  cover: s.cover,
  keywords: s.description,
}));

export const SEARCH_INDEX: SearchItem[] = [...fromBooks, ...fromSeries, ...STATIC];

// Normalisation : minuscules, sans accents (« Guinée » ↔ « guinee »)
export const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function search(q: string, limit = 12): SearchItem[] {
  const n = norm(q.trim());
  if (n.length < 2) return [];
  const words = n.split(/\s+/);
  const scored = SEARCH_INDEX.map((it) => {
    const t = norm(it.title);
    const hay = norm(`${it.title} ${it.sub ?? ""} ${it.keywords ?? ""}`);
    if (!words.every((w) => hay.includes(w))) return null;
    let score = 0;
    if (t.startsWith(n)) score += 3;
    else if (t.includes(n)) score += 2;
    else score += 1;
    return { it, score };
  }).filter(Boolean) as { it: SearchItem; score: number }[];
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((x) => x.it);
}

export const TYPE_ORDER: SearchType[] = ["Livre", "Série", "Encyclopédie", "Jeu", "Page"];
