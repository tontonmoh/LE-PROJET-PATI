// Registre des SÉRIES pour le catalogue : une série = UN item (jamais un épisode).
// La fiche-série vit déjà sur /serie/<slug> ; ici on ne décrit que la vignette.
import { TAADIDI } from "./series/taadidi";
import { KURUKAN } from "./series/kurukanFuga";

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
  nouveau?: boolean; // badge « nouveau » sur la vignette de série
};

export const SERIES: SeriesItem[] = [
  {
    slug: KURUKAN.id,
    title: KURUKAN.titre,
    description: KURUKAN.pitch,
    cover: KURUKAN.cover,
    band: "Passage",
    to: "/serie/kurukan-fuga",
    auteur: "Mohamed Doumbouya",
    episodes: {
      total: KURUKAN.episodes.length,
      live: KURUKAN.episodes.filter((e) => e.statut === "live").length,
    },
    episodeSlugs: KURUKAN.episodes
      .filter((e) => e.statut === "live")
      .map((e) => `kurukan-fuga-${e.numero}`),
    nouveau: true,
  },
  {
    slug: "resistance",
    title: "Résistance",
    description: "Six figures de la résistance guinéenne à la pénétration coloniale — Samory, Alpha Yaya, Dinah Salifou, Bocar Biro et les autres. Le courage de dire non, et le prix de la dignité.",
    cover: "/images/resistance/resistance-couverture.webp",
    band: "Passage",
    to: "/serie/resistance",
    auteur: "Mohamed Doumbouya",
    episodes: { total: 6, live: 6 },
    episodeSlugs: ["resistance-t1", "resistance-t2", "resistance-t3", "resistance-t4", "resistance-t5", "resistance-t6"],
    nouveau: true,
  },
  {
    slug: "point-zero",
    title: "Le Point Zéro",
    description: "Une étoile-femme tombée par amour, brisée en mille éclats aux quatre coins du monde — et deux enfants qui partent les reconstituer.",
    cover: "/images/point-zero/point-zero-t0-couverture.webp",
    band: "Aventure",
    to: "/serie/point-zero",
    auteur: "Mohamed Doumbouya",
    episodes: { total: 7, live: 7 },
    episodeSlugs: ["point-zero-t0", "point-zero-t1", "point-zero-t2", "point-zero-t3", "point-zero-t4", "point-zero-t5", "point-zero-t6"],
  },
  {
    slug: "generation-2040",
    title: "Génération 2040",
    description: "Le jour où une classe de Boffa découvre qu'elle connaît le monde entier — sauf son propre pays.",
    cover: "/images/g2040-tome0-couverture.webp",
    band: "Aventure",
    to: "/serie/generation-2040",
    auteur: "Mohamed Doumbouya",
    episodes: { total: 12, live: 12 },
    episodeSlugs: ["g2040-tome0", "g2040-foret-et-fer", "g2040-makona", "g2040-plaine-de-riz", "g2040-tambour-et-livre", "g2040-graine-et-huile", "g2040-montagnes-et-sources", "g2040-dame-qui-veille", "g2040-arbre-et-fleuve", "g2040-la-ligne", "g2040-port-et-pirogue", "g2040-conseil-des-enfants"],
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
