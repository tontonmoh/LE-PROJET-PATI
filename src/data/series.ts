// Registre des SÉRIES pour le catalogue : une série = UN item (jamais un épisode).
// La fiche-série vit déjà sur /serie/<slug> ; ici on ne décrit que la vignette.
import { TAADIDI } from "./series/taadidi";

export type SeriesItem = {
  slug: string;
  title: string;
  description: string; // accroche courte (façon tagline)
  cover: string;
  band: "Mômes" | "Découverte" | "Aventure" | "Passage";
  to: string; // route de la fiche-série
  auteur: string;
  episodes: { total: number; live: number };
  episodeSlugs: string[]; // slugs des épisodes EN LIGNE (pour le badge « Nouvel épisode »)
};

export const SERIES: SeriesItem[] = [
  {
    slug: "generation-2040",
    title: "Génération 2040",
    description: "Le jour où une classe de Boffa découvre qu'elle connaît le monde entier — sauf son propre pays.",
    cover: "/images/g2040-tome0-couverture.webp",
    band: "Aventure",
    to: "/serie/generation-2040",
    auteur: "Mohamed Doumbouya",
    episodes: { total: 12, live: 11 },
    episodeSlugs: ["g2040-tome0", "g2040-foret-et-fer", "g2040-makona", "g2040-plaine-de-riz", "g2040-tambour-et-livre", "g2040-graine-et-huile", "g2040-montagnes-et-sources", "g2040-dame-qui-veille", "g2040-arbre-et-fleuve", "g2040-la-ligne", "g2040-port-et-pirogue"],
  },
  {
    slug: TAADIDI.id,
    title: TAADIDI.titre,
    description: TAADIDI.pitch,
    cover: TAADIDI.cover,
    band: "Aventure",
    to: "/serie/taadidi",
    auteur: "Mohamed Doumbouya",
    episodes: {
      total: TAADIDI.episodes.length,
      live: TAADIDI.episodes.filter((e) => e.statut === "live").length,
    },
    episodeSlugs: TAADIDI.episodes.filter((e) => e.statut === "live").map((e) => `taadidi-${e.numero}`),
  },
];
