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
