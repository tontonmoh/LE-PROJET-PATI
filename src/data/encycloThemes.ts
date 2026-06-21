// ════════════════════════════════════════════════════════════════
//  THÈMES ENCYCLOPÉDIE — signature couleur par section
//  ----------------------------------------------------------------
//  Quand on visite une encyclopédie, la navbar et le fond prennent
//  sa couleur. Ailleurs : thème vert PATI par défaut.
//
//  AJOUTER UNE ENCYCLOPÉDIE = une ligne dans ENCYCLO_THEMES.
//  (prefix = début de l'URL ; navbar = couleur de la barre ;
//   navbarDark = teinte plus foncée pour le menu mobile ;
//   tint = fond général légèrement teinté)
//
//  DÉPÔT : src/data/encycloThemes.ts   (FICHIER NOUVEAU)
// ════════════════════════════════════════════════════════════════

export type EncycloTheme = {
  navbar: string;      // fond de la barre de navigation
  navbarDark: string;  // fond du menu mobile (un cran plus foncé)
  tint: string;        // fond général de la page (légèrement teinté)
};

// Thème PATI par défaut (vert habituel + fond crème).
export const DEFAULT_THEME: EncycloTheme = {
  navbar: "",          // vide = on laisse la classe .navbar (vert CSS) telle quelle
  navbarDark: "#0A4D3C",
  tint: "#FFF6E7",
};

// Une entrée par encyclopédie. Le prefix matche le début du pathname.
const ENCYCLO_THEMES: { prefix: string; theme: EncycloTheme }[] = [
  {
    prefix: "/fouta",
    theme: { navbar: "#8b6f47", navbarDark: "#5d4a30", tint: "#f5efe6" },
  },
  {
    prefix: "/mansaya",
    theme: { navbar: "#BA7517", navbarDark: "#7d4d0e", tint: "#fdf6e9" },
  },
  // ── Futures encyclopédies : ajouter ici ──
  // { prefix: "/nom-encyclo", theme: { navbar: "#xxxxxx", navbarDark: "#xxxxxx", tint: "#xxxxxx" } },
];

// Retourne le thème correspondant au chemin courant (ou le thème par défaut).
export function getEncycloTheme(pathname: string): EncycloTheme {
  const hit = ENCYCLO_THEMES.find((e) => pathname === e.prefix || pathname.startsWith(e.prefix + "/"));
  return hit ? hit.theme : DEFAULT_THEME;
}

// Vrai si on est dans une encyclopédie thémée (utile pour conditionner un style).
export function isEncycloRoute(pathname: string): boolean {
  return ENCYCLO_THEMES.some((e) => pathname === e.prefix || pathname.startsWith(e.prefix + "/"));
}
