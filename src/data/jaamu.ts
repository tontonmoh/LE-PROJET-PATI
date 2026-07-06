// MODIFIÉ · src/data/series/jaamu.ts
// PIVOT ÉDITORIAL (6 juillet 2026) : Pulaagu sort de JAAMU pour rejoindre le
// catalogue Pati Aventure 10-12 comme livre indépendant.
// Le totem « bâton du berger » redevient donc réservé au futur tome Diallo.

import { SAKHO_DIADJIGANKE_ML } from "../sakho-diadjiganke-ml";

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
    "Neuf lignées suspendues au baobab-mère. Chaque nom a traversé des siècles, des royaumes, des mélanges. Diadjiga et les autres remontent la piste de leur patronyme, un tome à la fois.",
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
      titre: "Diallo",
      totem: "le bâton du berger",
      patronyme: "Diallo",
      origine: "peul — Fouta Djalon",
      lieu: "Timbo",
      statut: "soon",
      baobabX: 33,
      baobabY: 34,
    },
    {
      slug: "toure",
      numero: 3,
      titre: "Touré",
      totem: "le tapis de prière",
      patronyme: "Touré",
      origine: "soninké — 4ᵉ fils de Dinga",
      lieu: "Kankan",
      statut: "soon",
      baobabX: 75,
      baobabY: 42,
    },
    {
      slug: "camara",
      numero: 4,
      titre: "Camara",
      totem: "le djembé",
      patronyme: "Camara",
      origine: "mandingue",
      lieu: "Haute Guinée",
      statut: "soon",
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
