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
};

export function readerLabels(slug: string): string {
  const r = READERS[slug];
  if (!r) return "";
  return r.langs.map((c) => r.books[c].label).join(" · ");
}
