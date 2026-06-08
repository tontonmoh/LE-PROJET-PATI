// Contes audio INDÉPENDANTS (hors catalogue de livres).
// Les MP3 sont servis au même endroit que la PWA : public/contes/audio/
// -> donc aucun doublon de fichier entre la PWA et cette page.

export type Lang = "francais" | "soussou" | "maninka" | "poular" | "kissi" | "kpele";

export type Conte = {
  id: string;
  title: string;
  lang: Lang;
  narrator?: string;
  audio: string;   // chemin servi par le site (= dossier de la PWA)
};

// Filtres affichés sur la page (l'ordre = l'ordre des puces)
// NB : les `id` restent des clés internes simples ; seuls les libellés affichés
// utilisent l'orthographe propre de chaque langue.
export const LANGS: { id: Lang | "tous"; label: string }[] = [
  { id: "tous", label: "Tous" },
  { id: "francais", label: "Français" },
  { id: "soussou", label: "Soso" },
  { id: "maninka", label: "Maninkakan" },
  { id: "poular", label: "Pular" },
  { id: "kissi", label: "Kisi" },
  { id: "kpele", label: "Kpèlèwoo" },
];

const A = (f: string) => `/contes/audio/${f}`;
const KB = "Kini Bangaly";

export const CONTES: Conte[] = [
  { id: "00-intro",        title: "Introduction",         lang: "soussou", narrator: KB, audio: A("00-intro.mp3") },
  { id: "01-sounkhori",    title: "Sounkhori",            lang: "soussou", narrator: KB, audio: A("01-sounkhori.mp3") },
  { id: "02-taadidi",      title: "Taadidi",              lang: "soussou", narrator: KB, audio: A("02-taadidi.mp3") },
  { id: "03-soe-rabori",   title: "Soe rabori",           lang: "soussou", narrator: KB, audio: A("03-soe-rabori.mp3") },
  { id: "04-ta-bare",      title: "Ta bare",              lang: "soussou", narrator: KB, audio: A("04-ta-bare.mp3") },
  { id: "05-yawara",       title: "Yawara",               lang: "soussou", narrator: KB, audio: A("05-yawara.mp3") },
  { id: "06-se-riba",      title: "Se riba",              lang: "soussou", narrator: KB, audio: A("06-se-riba.mp3") },
  { id: "07-bare-n-fougna",title: "Bare n fougna",        lang: "soussou", narrator: KB, audio: A("07-bare-n-fougna.mp3") },
  { id: "08-bamba-toumani",title: "Bamba Toumani",        lang: "soussou", narrator: KB, audio: A("08-bamba-toumani.mp3") },
  { id: "09-kobadia",      title: "Kobadia",              lang: "soussou", narrator: KB, audio: A("09-kobadia.mp3") },
  // n°10 « Spécial » découpé en 9 parties (à renommer une fois les contes identifiés)
  { id: "special-1", title: "Spécial Kini Bangaly — Partie 1", lang: "soussou", narrator: KB, audio: A("special-1.mp3") },
  { id: "special-2", title: "Spécial Kini Bangaly — Partie 2", lang: "soussou", narrator: KB, audio: A("special-2.mp3") },
  { id: "special-3", title: "Spécial Kini Bangaly — Partie 3", lang: "soussou", narrator: KB, audio: A("special-3.mp3") },
  { id: "special-4", title: "Spécial Kini Bangaly — Partie 4", lang: "soussou", narrator: KB, audio: A("special-4.mp3") },
  { id: "special-5", title: "Spécial Kini Bangaly — Partie 5", lang: "soussou", narrator: KB, audio: A("special-5.mp3") },
  { id: "special-6", title: "Spécial Kini Bangaly — Partie 6", lang: "soussou", narrator: KB, audio: A("special-6.mp3") },
  { id: "special-7", title: "Spécial Kini Bangaly — Partie 7", lang: "soussou", narrator: KB, audio: A("special-7.mp3") },
  { id: "special-8", title: "Spécial Kini Bangaly — Partie 8", lang: "soussou", narrator: KB, audio: A("special-8.mp3") },
  { id: "special-9", title: "Spécial Kini Bangaly — Partie 9", lang: "soussou", narrator: KB, audio: A("special-9.mp3") },
];
