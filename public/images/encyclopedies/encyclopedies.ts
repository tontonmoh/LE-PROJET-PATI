/**
 * L'Encyclopédie Guinée — set des 4 cartes (Mansa, Almamy, Sofa, Horoya)
 *
 * Chaque carte = une porte d'entrée vers une encyclopédie narrative.
 * Le mot-tribu (motTribu) est le terme en langue guinéenne, en gros sur la carte.
 * Le titreFr est la lecture française, en plus petit dessous.
 *
 * coverUrl : si présent, l'image générée s'affiche au centre de la carte.
 * Sinon, le composant rend automatiquement un objet-totem SVG en fallback.
 */

export type CarteTotem = 'crown' | 'book-quill' | 'sabers' | 'star';

export interface EncyclopedieCarte {
  id: string;
  motTribu: string;
  titreFr: string;
  sousTitre: string;
  periode: string;
  figures: string;
  route: string;
  totem: CarteTotem;
  coverUrl?: string;
  couleurs: {
    fond: string;        // couleur dominante de la carte
    bord: string;        // bordure foncée
    accent: string;      // couleur pâle pour textes secondaires (filet doré, sous-titres)
    cartoucheBg: string; // fond du cartouche période (en haut)
    motTribu: string;    // couleur du mot-tribu en grand
  };
}

export const encyclopedies: EncyclopedieCarte[] = [
  {
    id: 'mansa',
    motTribu: 'MANSA',
    titreFr: 'Les Rois',
    sousTitre: 'MANSAYA',
    periode: 'XIIᵉ – XVIᵉ siècle',
    figures: 'Ghana · Sosso · Mali · Songhaï',
    route: '/mansaya',
    totem: 'crown',
    coverUrl: '/images/encyclopedies/mansa-cover.jpg',
    couleurs: {
      fond: '#C8841E',
      bord: '#5a3608',
      accent: '#FFE4B0',
      cartoucheBg: 'rgba(90, 54, 8, 0.4)',
      motTribu: '#FFE4B0',
    },
  },
  {
    id: 'almamy',
    motTribu: 'ALMAMY',
    titreFr: 'Les Almamys',
    sousTitre: 'FOUTA-DJALON',
    periode: '1725 — 1896',
    figures: '9 diwés · Alphaya / Soriya',
    route: '/fouta',
    totem: 'book-quill',
    coverUrl: '/images/encyclopedies/almamy-cover.jpg',
    couleurs: {
      fond: '#8b6f47',
      bord: '#4a3618',
      accent: '#e8d5b3',
      cartoucheBg: 'rgba(74, 54, 24, 0.45)',
      motTribu: '#e8d5b3',
    },
  },
  {
    id: 'sofa',
    motTribu: 'SOFA',
    titreFr: 'Les Résistants',
    sousTitre: 'PÉNÉTRATION COLONIALE',
    periode: '1880 — 1945',
    figures: 'Samory · Alfa Yaya · Nzébéla',
    route: '/serie/resistance', // TODO: basculer vers /sofa quand l'encyclopédie SOFA sera livrée
    totem: 'sabers',
    coverUrl: '/images/encyclopedies/sofa-cover.jpg',
    couleurs: {
      fond: '#A8442C',
      bord: '#5a1e10',
      accent: '#f4ccbf',
      cartoucheBg: 'rgba(90, 30, 16, 0.45)',
      motTribu: '#f4ccbf',
    },
  },
  {
    id: 'horoya',
    motTribu: 'HOROYA',
    titreFr: 'Les Compagnons',
    sousTitre: 'INDÉPENDANCE',
    periode: '1946 — 1960',
    figures: 'Sékou · Saïfoulaye · M\'Balia',
    route: '/horoya',
    totem: 'star',
    coverUrl: '/images/encyclopedies/horoya-cover.jpg',
    couleurs: {
      fond: '#1a5e3a',
      bord: '#0a3a22',
      accent: '#c9a227',
      cartoucheBg: 'rgba(10, 58, 34, 0.55)',
      motTribu: '#c9a227',
    },
  },
];

export default encyclopedies;
