// Registre unifié des livres à lecture multilingue.
// Normalise les différents formats sources vers une structure commune,
// consommée par le lecteur générique BookReaderML.
import { CHATEAU, CHATEAU_LANGS } from "./chateau-ml";
import { LAYE_ML } from "./laye-ml";
import { DMBA_ML } from "./dmba-ml";
import { BINTA_ML } from "./binta-ml";
import { CONAKRY_ML } from "./conakry-ml";
import { EMPEREUR_ML } from "./empereur-ml";
import { MILO_ML } from "./milo-ml";
import { TRESOR_ML } from "./tresor-ml";
import { CORRIDORIUM_ML } from "./corridorium-ml";
import { BOSSOU_ML } from "./bossou-ml";
import { KABACK_ML } from "./kaback-ml";
import { REVER_ML } from "./rever-ml";
import { FENDANI_ML } from "./fendani-ml";
import { COLA_ML } from "./cola-ml";
import { CHIMPO_ML } from "./chimpanzes-bossou-ml";
import * as MAITRE_ML from "./maitre-ecole-ml";
import g2040Tome0 from "./g2040-tome0";
import g2040Tome1 from "./g2040-tome1";
import g2040Tome2 from "./g2040-tome2";
import g2040Tome3 from "./g2040-tome3";
import { TAADIDI, TAADIDI_ACCENT } from "./series/taadidi";

export type MLSection = { title: string; paragraphs: string[]; image?: string };
export type MLBook = { dir: "ltr" | "rtl"; label: string; title: string; subtitle?: string; sections: MLSection[] };
export type MLReader = { langs: string[]; books: Record<string, MLBook>; accent: string };

const LANG_ORDER = ["fr", "en", "ar", "zh"];

// Format laye/dmba : { lang, dir, label, bookTitle, sections:[{id,title,paragraphs}] }
function fromLaye(rec: any): { langs: string[]; books: Record<string, MLBook> } {
  const books: Record<string, MLBook> = {};
  const langs: string[] = [];
  for (const code of LANG_ORDER) {
    const b = rec[code];
    if (!b) continue;
    langs.push(code);
    books[code] = {
      dir: b.dir || "ltr",
      label: b.label || code,
      title: b.bookTitle,
      sections: (b.sections || []).map((s: any) => ({ title: s.title, paragraphs: s.paragraphs, image: s.image })),
    };
  }
  return { langs, books };
}

// Format château : { title, subtitle, dir?, sections:[{title,text}] }
function fromChateau(rec: any): { langs: string[]; books: Record<string, MLBook> } {
  const labelMap: Record<string, string> = {};
  for (const l of CHATEAU_LANGS) labelMap[l.code] = l.label;
  const books: Record<string, MLBook> = {};
  const langs: string[] = [];
  for (const code of LANG_ORDER) {
    const b = rec[code];
    if (!b) continue;
    langs.push(code);
    books[code] = {
      dir: (b.dir as "ltr" | "rtl") || "ltr",
      label: labelMap[code] || code,
      title: b.title,
      subtitle: b.subtitle,
      sections: (b.sections || []).map((s: any) => ({ title: s.title, paragraphs: s.text, image: s.image })),
    };
  }
  return { langs, books };
}

// Format aligné : { meta:{title,subtitle:Record<lang>}, sections:[{title:Record<lang>, body:Record<lang,string[]>}] }
function fromAligned(mod: any): { langs: string[]; books: Record<string, MLBook> } {
  const labels: Record<string, string> = { fr: "Français", en: "English", ar: "العربية", zh: "中文" };
  const books: Record<string, MLBook> = {};
  const langs: string[] = [];
  for (const code of LANG_ORDER) {
    if (!mod.meta?.title?.[code]) continue;
    langs.push(code);
    books[code] = {
      dir: code === "ar" ? "rtl" : "ltr",
      label: labels[code] || code,
      title: mod.meta.title[code],
      subtitle: mod.meta.subtitle?.[code],
      sections: (mod.sections || []).map((s: any) => ({ title: s.title[code], paragraphs: s.body[code] })),
    };
  }
  return { langs, books };
}

// Format Génération 2040 : { titre:Record<lang>, sections:[{voix, fr,en,ar,zh}] }
// (chaque langue = un bloc, paragraphes séparés par des doubles sauts de ligne ; pas de titre de section)
function fromG2040(livre: any): { langs: string[]; books: Record<string, MLBook> } {
  const labels: Record<string, string> = { fr: "Français", en: "English", ar: "العربية", zh: "中文" };
  const books: Record<string, MLBook> = {};
  const langs: string[] = [];
  for (const code of LANG_ORDER) {
    if (!livre.titre?.[code]) continue;
    langs.push(code);
    books[code] = {
      dir: code === "ar" ? "rtl" : "ltr",
      label: labels[code] || code,
      title: livre.titre[code],
      sections: (livre.sections || []).map((s: any) => ({
        title: "",
        paragraphs: String(s[code] || "").split(/\n\n+/).map((p: string) => p.trim()).filter(Boolean),
      })),
    };
  }
  return { langs, books };
}

export const READERS: Record<string, MLReader> = {
  "chateau-eau": { ...fromChateau(CHATEAU), accent: "#3FB6E8" },
  "laye-kouroussa": { ...fromLaye(LAYE_ML), accent: "#0F6E56" },
  "sacree-dmba": { ...fromLaye(DMBA_ML), accent: "#FF6B4A" },
  "binta-diallo": { ...fromLaye(BINTA_ML), accent: "#FF6B4A" },
  "conakry-belle-propre": { ...fromLaye(CONAKRY_ML), accent: "#0F6E56" },
  "empereur-enfant": { ...fromLaye(EMPEREUR_ML), accent: "#1F7A8C" },
  "sauver-milo": { ...fromLaye(MILO_ML), accent: "#2E8BC0" },
  "tresor-terres": { ...fromLaye(TRESOR_ML), accent: "#C2410C" },
  "corridorium": { ...fromLaye(CORRIDORIUM_ML), accent: "#3F6B7D" },
  "bossou": { ...fromLaye(BOSSOU_ML), accent: "#2E7D32" },
  "kaback": { ...fromLaye(KABACK_ML), accent: "#0E8A8A" },
  "rever-plus-grand": { ...fromLaye(REVER_ML), accent: "#C8841E" },
  "fendani": { ...fromLaye(FENDANI_ML), accent: "#A23B72" },
  "secret-cola": { ...fromLaye(COLA_ML), accent: "#B23A1E" },
  "chimpanzes-bossou": { ...fromLaye(CHIMPO_ML), accent: "#3F7D5A" },
  "maitre-ecole": { ...fromAligned(MAITRE_ML), accent: "#B47A1B" },
  "g2040-tome0": { ...fromG2040(g2040Tome0), accent: "#18402A" },
  "g2040-foret-et-fer": { ...fromG2040(g2040Tome1), accent: "#18402A" },
  "g2040-makona": { ...fromG2040(g2040Tome2), accent: "#18402A" },
  "g2040-plaine-de-riz": { ...fromG2040(g2040Tome3), accent: "#18402A" },
};

// Épisodes 'live' de la série Taadidi -> lecteur générique, ids "taadidi-<n>"
for (const ep of TAADIDI.episodes) {
  if (ep.statut === "live" && ep.reader) {
    READERS["taadidi-" + ep.numero] = { ...fromLaye(ep.reader), accent: TAADIDI_ACCENT };
  }
}

export function readerLabels(slug: string): string {
  const r = READERS[slug];
  if (!r) return "";
  return r.langs.map((c) => r.books[c].label).join(" · ");
}
