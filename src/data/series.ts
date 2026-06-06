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
    episodes: { total: 12, live: 1 },
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
  },
];
