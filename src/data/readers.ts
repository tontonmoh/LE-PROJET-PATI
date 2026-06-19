// Registre unifié des livres à lecture multilingue.
// Normalise les différents formats sources vers une structure commune,
// consommée par le lecteur générique BookReaderML.
import { CHATEAU, CHATEAU_LANGS } from "./chateau-ml";
import { RESISTANCE_T1_ML } from "./resistance-t1-ml";
import { RESISTANCE_T2_ML } from "./resistance-t2-ml";
import { RESISTANCE_T3_ML } from "./resistance-t3-ml";
import { RESISTANCE_T4_ML } from "./resistance-t4-ml";
import { RESISTANCE_T5_ML } from "./resistance-t5-ml";
import { RESISTANCE_T6_ML } from "./resistance-t6-ml";
import { KOUMANTHIO_ML } from "./koumanthio-ml";
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
import { JOUR_DU_MARCHE_ML } from "./jour-du-marche-ml";
import { NABY_ML } from "./naby-ml";
import { PETIT_SORY_ML } from "./petit-sory-ml";
import { KANDIA_ML } from "./kandia-ml";
import { PROCES_IA_ML } from "./proces-ia-ml";
import { SEPT_KM_ML } from "./sept-kilometres-ml";
import { POINT_ZERO_T0_ML } from "./point-zero-t0-ml";
import { POINT_ZERO_T1_ML } from "./point-zero-t1-ml";
import { POINT_ZERO_T2_ML } from "./point-zero-t2-ml";
import { POINT_ZERO_T3_ML } from "./point-zero-t3-ml";
import { POINT_ZERO_T4_ML } from "./point-zero-t4-ml";
import { POINT_ZERO_T5_ML } from "./point-zero-t5-ml";
import { POINT_ZERO_T6_ML } from "./point-zero-t6-ml";
import { CASSEROLES_ML } from "./casseroles-ml";
import * as MAITRE_ML from "./maitre-ecole-ml";
import g2040Tome0 from "./g2040-tome0";
import g2040Tome1 from "./g2040-tome1";
import g2040Tome2 from "./g2040-tome2";
import g2040Tome3 from "./g2040-tome3";
import g2040Tome4 from "./g2040-tome4";
import g2040Tome5 from "./g2040-tome5";
import g2040Tome6 from "./g2040-tome6";
import g2040Tome7 from "./g2040-tome7";
import g2040Tome8 from "./g2040-tome8";
import g2040Tome9 from "./g2040-tome9";
import g2040Tome10 from "./g2040-tome10";
import g2040Tome11 from "./g2040-tome11";
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
  "resistance-t1": { ...fromLaye(RESISTANCE_T1_ML), accent: "#1B2A4A" },
  "resistance-t2": { ...fromLaye(RESISTANCE_T2_ML), accent: "#1B2A4A" },
  "resistance-t3": { ...fromLaye(RESISTANCE_T3_ML), accent: "#1B2A4A" },
  "resistance-t4": { ...fromLaye(RESISTANCE_T4_ML), accent: "#1B2A4A" },
  "resistance-t5": { ...fromLaye(RESISTANCE_T5_ML), accent: "#1B2A4A" },
  "resistance-t6": { ...fromLaye(RESISTANCE_T6_ML), accent: "#1B2A4A" },
  "koumanthio": { ...fromLaye(KOUMANTHIO_ML), accent: "#2E4A6B" },
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
  "jour-du-marche": { ...fromLaye(JOUR_DU_MARCHE_ML), accent: "#3F7D5A" },
  "naby-coleah": { ...fromLaye(NABY_ML), accent: "#C8102E" },
  "petit-sory": { ...fromLaye(PETIT_SORY_ML), accent: "#1F6E52" },
  "kandia-passe-futur": { ...fromLaye(KANDIA_ML), accent: "#2C6FB0" },
  "proces-ia": { ...fromLaye(PROCES_IA_ML), accent: "#C8841E" },
  "sept-kilometres": { ...fromLaye(SEPT_KM_ML), accent: "#C2410C" },
  "point-zero-t0": { ...fromLaye(POINT_ZERO_T0_ML), accent: "#1A2A4A" },
  "point-zero-t1": { ...fromLaye(POINT_ZERO_T1_ML), accent: "#1A2A4A" },
  "point-zero-t2": { ...fromLaye(POINT_ZERO_T2_ML), accent: "#1A2A4A" },
  "point-zero-t3": { ...fromLaye(POINT_ZERO_T3_ML), accent: "#1A2A4A" },
  "point-zero-t4": { ...fromLaye(POINT_ZERO_T4_ML), accent: "#1A2A4A" },
  "point-zero-t5": { ...fromLaye(POINT_ZERO_T5_ML), accent: "#1A2A4A" },
  "point-zero-t6": { ...fromLaye(POINT_ZERO_T6_ML), accent: "#1A2A4A" },
  "casseroles": { ...fromLaye(CASSEROLES_ML), accent: "#3B5C8A" },
  "maitre-ecole": { ...fromAligned(MAITRE_ML), accent: "#B47A1B" },
  "g2040-tome0": { ...fromG2040(g2040Tome0), accent: "#18402A" },
  "g2040-foret-et-fer": { ...fromG2040(g2040Tome1), accent: "#18402A" },
  "g2040-makona": { ...fromG2040(g2040Tome2), accent: "#18402A" },
  "g2040-plaine-de-riz": { ...fromG2040(g2040Tome3), accent: "#18402A" },
  "g2040-graine-et-huile": { ...fromG2040(g2040Tome4), accent: "#18402A" },
  "g2040-tambour-et-livre": { ...fromG2040(g2040Tome5), accent: "#18402A" },
  "g2040-montagnes-et-sources": { ...fromG2040(g2040Tome6), accent: "#18402A" },
  "g2040-dame-qui-veille": { ...fromG2040(g2040Tome7), accent: "#18402A" },
  "g2040-arbre-et-fleuve": { ...fromG2040(g2040Tome8), accent: "#18402A" },
  "g2040-la-ligne": { ...fromG2040(g2040Tome9), accent: "#18402A" },
  "g2040-port-et-pirogue": { ...fromG2040(g2040Tome10), accent: "#18402A" },
  "g2040-conseil-des-enfants": { ...fromG2040(g2040Tome11), accent: "#18402A" },
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
