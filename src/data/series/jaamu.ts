// NOUVEAU · src/data/series/jaamu.ts
// Données de la série « JAAMU — Les Noms » (modèle calqué sur point-zero / kurukanFuga).
// La fiche-série /serie/jaamu consomme cet objet.
// Tome 1 (Sakho Diadjiganké) en ligne ; les 8 suivants = totems suspendus dans le baobab-mère.

import { SAKHO_DIADJIGANKE_ML } from "../sakho-diadjiganke-ml";

export type JaamuTome = {
  slug: string;                // slug patronyme (sert de clé READERS + route /livre/<slug>/lire)
  numero: number;              // ordre roadmap éditoriale
  titre: string;
  sousTitre?: string;
  totem: string;               // symbole visuel dans le baobab
  patronyme: string;           // orthographes du nom
  origine: string;             // « soninké — empire du Wagadou », etc.
  lieu: string;                // ancrage guinéen du présent
  statut: "live" | "soon";
  to?: string;                 // route de lecture si live
  cover?: string;              // couverture portrait du tome
  coverLandscape?: string;
  reader?: any;                // reader ML si live (branché dans readers.ts)
  baobabX: number;             // position % X du totem sur la cover série
  baobabY: number;             // position % Y du totem sur la cover série
};

// [À VALIDER] palette accent — ocre/terre, palette Moyenne Guinée soninkée
export const JAAMU_ACCENT = "#8B5A2B";

export const JAAMU = {
  id: "jaamu",
  titre: "JAAMU — Les Noms",
  accroche: "Chaque nom porte une histoire.",
  pitch:
    "Neuf lignées suspendues au baobab-mère. Chaque nom a traversé des siècles, des royaumes, des mélanges. Diadjiga, Sény, Fatoumata et les autres remontent la piste de leur patronyme, un tome à la fois.",
  intro:
    "Comment est né ton nom ? De qui as-tu hérité les silences, les gestes, la manière de tenir debout ? La collection JAAMU — Les Noms explore, patronyme après patronyme, l'origine des grandes lignées ouest-africaines. Un tome, un nom, une légende. À lire seul, à lire en famille — parce que chacun a besoin de savoir d'où vient son nom.",
  cover: "/images/jaamu/jaamu-serie-hero.webp", // [À VALIDER] à uploader
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
      cover: "/images/jaamu/jaamu-t1-couverture.webp",           // [À VALIDER] à uploader
      coverLandscape: "/images/jaamu/jaamu-t1-couverture.webp",  // [À VALIDER] paysage à générer si besoin
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

  // Helpers comptage (même pattern que POINT_ZERO)
  getLiveCount: function () {
    return this.tomes.filter((t) => t.statut === "live").length;
  },
  getTotalCount: function () {
    return this.tomes.length;
  },
};
