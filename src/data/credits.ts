// Crédits affichés sur la fiche de chaque livre.
// Auteur par défaut = Mohamed Doumbouya ; exceptions et illustrateurs/musique/voix ci-dessous.
// musique / voix : à compléter quand l'audio des livres sera prêt.
export type Credits = { auteur?: string; illustrateur?: string; musique?: string; voix?: string };

const DEFAULT_AUTEUR = "Mohamed Doumbouya";

const CREDITS: Record<string, Credits> = {
  "binta-diallo": { auteur: "Mohamed Doumbouya et Abdoulaye Bela Baldé" },
  "fendani": { auteur: "Fatoumata Diaraye Cissé" },
  "secret-cola": { auteur: "Fatoumata Diaraye Cissé", illustrateur: "Mady Camara" },
  "chimpanzes-bossou": { auteur: "Valentine Traoré", illustrateur: "Mohamed Soumah" },
};

export function getCredits(slug: string): Credits {
  const c = CREDITS[slug] || {};
  return {
    auteur: c.auteur || DEFAULT_AUTEUR,
    illustrateur: c.illustrateur,
    musique: c.musique,
    voix: c.voix,
  };
}
