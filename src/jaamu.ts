// MODIFIÉ · src/data/series/jaamu.ts
// T4 Camara passe à statut « live » :
//   - import CAMARA_KA_MARA_ML ajouté
//   - tome T4 : titre « Camara, Ka-Mara », sousTitre « Une légende Camara racontée par Tonton Fadouba »
//   - totem changé de « le djembé » à « le sabre » (cohérence narrative : Kamandjan fend la montagne)
//   - lieu Beyla (Konianké), origine mandingue avec dispersion 4 régions guinéennes
//   - cover jaamu-t4-couverture.webp, reader CAMARA_KA_MARA_ML, route /livre/camara/lire

import { SAKHO_DIADJIGANKE_ML } from "../sakho-diadjiganke-ml";
import { DIALLO_ML } from "../diallo-ml";
import { TOURE_MANDJOU_ML } from "../toure-mandjou-ml";
import { CAMARA_KA_MARA_ML } from "../camara-ka-mara-ml";           // ← NOUVEAU

export type JaamuTome = {
  slug: string;
  numero: number;
  titre: string;
  sousTitre?: string;
  totem: string;
  patronyme: string;
  origine: string;
  lieu: string;
  statut: "live" | "soon";
  to?: string;
  cover?: string;
  coverLandscape?: string;
  reader?: any;
  baobabX: number;
  baobabY: number;
};

export const JAAMU_ACCENT = "#8B5A2B";

export const JAAMU = {
  id: "jaamu",
  titre: "JAAMU — Les Noms",
  accroche: "Chaque nom porte une histoire.",
  pitch:
    "Neuf lignées suspendues au baobab-mère. Chaque nom a traversé des siècles, des royaumes, des mélanges. Diadjiga, Diénabou, Mandjou, Karifa et les autres remontent la piste de leur patronyme, un tome à la fois.",
  intro:
    "Comment est né ton nom ? De qui as-tu hérité les silences, les gestes, la manière de tenir debout ? La collection JAAMU — Les Noms explore, patronyme après patronyme, l'origine des grandes lignées ouest-africaines. Un tome, un nom, une légende. À lire seul, à lire en famille — parce que chacun a besoin de savoir d'où vient son nom.",
  cover: "/images/jaamu/jaamu-serie-hero.webp",
  accent: JAAMU_ACCENT,

  tomes: [
    {
      slug: "sakho-diadjiganke",
      numero: 1,
      titre: "Sakho Diadjiganké",
      sousTitre: "Une légende Sacko racontée par Bemba",
      totem: "l'aigrette",
      patronyme: "Sakho · Sacko · Sako",
      origine: "soninké — empire du Wagadou",
      lieu: "Lélouma",
      statut: "live",
      to: "/livre/sakho-diadjiganke/lire",
      cover: "/images/jaamu/jaamu-t1-couverture.webp",
      coverLandscape: "/images/jaamu/jaamu-t1-couverture.webp",
      reader: SAKHO_DIADJIGANKE_ML,
      baobabX: 27,
      baobabY: 18,
    },
    {
      slug: "diallo",
      numero: 2,
      titre: "Diallo, Wakilarè",
      sousTitre: "Les stoïques",
      totem: "le bâton du berger",
      patronyme: "Diallo · Jallo · Jalloh · Djaló",
      origine: "peul — Macina → Fouta Djalon → diaspora",
      lieu: "Cocody, Abidjan",
      statut: "live",
      to: "/livre/diallo/lire",
      cover: "/images/jaamu/jaamu-t2-couverture.webp",
      coverLandscape: "/images/jaamu/jaamu-t2-couverture.webp",
      reader: DIALLO_ML,
      baobabX: 33,
      baobabY: 34,
    },
    {
      slug: "toure",
      numero: 3,
      titre: "Touré, Mandjou",
      sousTitre: "Une légende Manden Mori racontée par Aïssata",
      totem: "le tapis de prière",
      patronyme: "Touré · Sitourou",
      origine: "soninké → Manden Mori — Wagadou → Batè → Wassoulou",
      lieu: "Kipé, Conakry",
      statut: "live",
      to: "/livre/toure/lire",
      cover: "/images/jaamu/jaamu-t3-couverture.webp",
      coverLandscape: "/images/jaamu/jaamu-t3-couverture.webp",
      reader: TOURE_MANDJOU_ML,
      baobabX: 75,
      baobabY: 42,
    },
    {                                                                // ← MODIFIÉ · devient live
      slug: "camara",
      numero: 4,
      titre: "Camara, Ka-Mara",
      sousTitre: "Une légende Camara racontée par Tonton Fadouba",
      totem: "le sabre",                                              // ← CHANGÉ (était le djembé)
      patronyme: "Camara · Kamara · Kamandjan",
      origine: "mandingue — Mandé (Sibi, Kita, Kirina, Niani) puis dispersion 4 régions",
      lieu: "Beyla, Konianké",
      statut: "live",
      to: "/livre/camara/lire",
      cover: "/images/jaamu/jaamu-t4-couverture.webp",
      coverLandscape: "/images/jaamu/jaamu-t4-couverture.webp",
      reader: CAMARA_KA_MARA_ML,
      baobabX: 58,
      baobabY: 18,
    },
    {
      slug: "kante",
      numero: 5,
      titre: "Kanté",
      totem: "l'enclume",
      patronyme: "Kanté",
      origine: "forgerons du Sosso",
      lieu: "Kindia",
      statut: "soon",
      baobabX: 33,
      baobabY: 27,
    },
    {
      slug: "conde",
      numero: 6,
      titre: "Condé",
      totem: "la bufflone",
      patronyme: "Condé · Kondé",
      origine: "mandingue — la lignée de Sundjata",
      lieu: "Sangaran",
      statut: "soon",
      baobabX: 46,
      baobabY: 33,
    },
    {
      slug: "beavogui",
      numero: 7,
      titre: "Béavogui",
      totem: "le masque",
      patronyme: "Béavogui · Loua · Onivogui",
      origine: "Guinée Forestière",
      lieu: "Macenta",
      statut: "soon",
      baobabX: 88,
      baobabY: 46,
    },
    {
      slug: "kouyate",
      numero: 8,
      titre: "Lignée griote",
      sousTitre: "Cissoko · Kouyaté · Diabaté",
      totem: "la kora",
      patronyme: "Cissoko · Kouyaté · Diabaté",
      origine: "griots du Mandé",
      lieu: "Niagassola",
      statut: "soon",
      baobabX: 50,
      baobabY: 46,
    },
    {
      slug: "calebasse",
      numero: 9,
      titre: "à attribuer",
      totem: "la calebasse",
      patronyme: "lignée à définir",
      origine: "—",
      lieu: "—",
      statut: "soon",
      baobabX: 10,
      baobabY: 32,
    },
  ] as JaamuTome[],

  getLiveCount: function () {
    return this.tomes.filter((t) => t.statut === "live").length;
  },
  getTotalCount: function () {
    return this.tomes.length;
  },
};
