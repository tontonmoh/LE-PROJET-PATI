/**
 * Set unifié des encyclopédies Pati présentées en éventail sur la home.
 * Cinq cartes à jouer regroupant les portes d'entrée des grandes
 * encyclopédies narratives du projet.
 */

export type CarteTotem = 'crown' | 'book-quill' | 'sabers' | 'star' | 'map';

export interface EncyclopedieCarte {
  id: string;
  motTribu: string;
  titreFr: string;
  sousTitre: string;
  periode: string;
  figures: string;
  description: string; // accroche courte pour la bulle au survol
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

export const ENCYCLOPEDIES: EncyclopedieCarte[] = [
  {
    id: 'mansa',
    motTribu: 'MANSA',
    titreFr: 'Les Rois',
    sousTitre: 'MANSAYA',
    periode: 'XIIᵉ – XVIᵉ siècle',
    figures: 'Ghana · Sosso · Mali · Songhaï',
    description: "L'âge des grands empires d'Afrique de l'Ouest. Huit siècles où l'or, le sel et la parole forgent des royaumes.",
    route: '/mansaya',
    totem: 'crown',
    coverUrl: '/images/encyclopedies/mansa-cover.jpg',
    couleurs: {
      fond:        '#C8841E',
      bord:        '#5a3608',
      accent:      '#FFE4B0',
      cartoucheBg: '#3D2410',
      motTribu:    '#FFE4B0',
    },
  },
  {
    id: 'almamy',
    motTribu: 'ALMAMY',
    titreFr: 'Les Almamys',
    sousTitre: 'FOUTA-DJALON',
    periode: '1725 — 1896',
    figures: '9 diwés · Alphaya / Soriya',
    description: 'Une théocratie peule à neuf provinces. Pouvoir alterné entre deux familles, le savoir comme socle, le Coran comme boussole.',
    route: '/fouta',
    totem: 'book-quill',
    coverUrl: '/images/encyclopedies/almamy-cover.jpg',
    couleurs: {
      fond:        '#8b6f47',
      bord:        '#4a3618',
      accent:      '#e8d5b3',
      cartoucheBg: '#2e2110',
      motTribu:    '#e8d5b3',
    },
  },
  {
    id: 'sofa',
    motTribu: 'SOFA',
    titreFr: 'Les Résistants',
    sousTitre: 'PÉNÉTRATION COLONIALE',
    periode: '1880 — 1945',
    figures: 'Samory · Alfa Yaya · Nzébéla',
    description: "Les guerriers qui ont tenu tête à la pénétration coloniale. Sept résistants, sept refus, avant qu'on en connaisse le mot.",
    route: '/serie/resistance', // TODO: basculer vers /sofa quand l'encyclopédie SOFA sera livrée
    totem: 'sabers',
    coverUrl: '/images/encyclopedies/sofa-cover.jpg',
    couleurs: {
      fond:        '#A8442C',
      bord:        '#5a1e10',
      accent:      '#f4ccbf',
      cartoucheBg: '#3d150a',
      motTribu:    '#f4ccbf',
    },
  },
  {
    id: 'horoya',
    motTribu: 'HOROYA',
    titreFr: 'Les Compagnons',
    sousTitre: 'HOROYA',
    periode: '1946 — 1960',
    figures: "Sékou · Saïfoulaye · M'Balia",
    description: 'Le 28 septembre 1958, un seul territoire dit NON. Le 2 octobre, la République de Guinée naît — seule au monde.',
    route: '/horoya',
    totem: 'star',
    coverUrl: '/images/encyclopedies/horoya-cover.jpg',
    couleurs: {
      fond:        '#1a5e3a',
      bord:        '#0a3a22',
      accent:      '#c9a227',
      cartoucheBg: '#082818',
      motTribu:    '#c9a227',
    },
  },
  {
    id: 'guine',
    motTribu: 'LaGuinè',
    titreFr: 'Le Pays',
    sousTitre: 'RÉPUBLIQUE DE GUINÉE',
    periode: '46 territoires',
    figures: '4 régions naturelles · Conakry',
    description: 'Le voyage par le pays. 33 préfectures, 13 communes de Conakry, un seul Pati. Découvre une terre, son peuple, son trésor.',
    route: '/guine',
    totem: 'map',
    coverUrl: '/images/encyclopedies/laguine-cover.jpg',
    couleurs: {
      fond:        '#2A7A8C',  // bleu mangrove/turquoise (terre & eau)
      bord:        '#0E3E47',
      accent:      '#E8D5B3',
      cartoucheBg: '#072024',
      motTribu:    '#F4ECD8',
    },
  },
];

export default ENCYCLOPEDIES;
