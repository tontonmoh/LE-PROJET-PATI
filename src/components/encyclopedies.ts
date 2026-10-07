/**
 * L'Encyclopédie Guinée — set de cartes (Mansa, Almamy, Sofa, Horoya, LaGuinè, Ginè)
 *
 * Chaque carte = une porte d'entrée vers une encyclopédie narrative.
 * Le mot-tribu (motTribu) est le terme en langue guinéenne, en gros sur la carte.
 * Le titreFr est la lecture française, en plus petit dessous.
 *
 * coverUrl : si présent, l'image générée s'affiche au centre de la carte.
 * Sinon, le composant rend automatiquement un objet-totem SVG en fallback.
 */

export type CarteTotem = 'crown' | 'book-quill' | 'sabers' | 'star' | 'map' | 'torch';

export interface EncyclopedieCarte {
  id: string;
  motTribu: string;
  titreFr: string;
  sousTitre: string;
  periode: string;
  figures: string;
  description: string;  // texte de la bulle au survol (desktop)
  route: string;
  totem: CarteTotem;
  coverUrl?: string;
  coverPosition?: string; // cadrage de la couverture dans la carte (CSS object-position), défaut 'center'
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
    description: "Des empires du Ghana au Songhaï, les rois qui ont fait l'Afrique de l'Ouest.",
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
    description: "Les neuf diwés du Fouta-Djalon et l'alternance des Almamys.",
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
    description: "Ceux qui ont tenu tête à la conquête coloniale.",
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
    description: "De la lutte syndicale au « Non » de 1958 : la Guinée libre.",
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
  {
    id: 'laguine',
    motTribu: 'LaGuinè',
    titreFr: 'Les Territoires',
    sousTitre: '33 PRÉFECTURES',
    periode: 'Aujourd\'hui',
    figures: '8 régions · 33 préfectures · 13 communes',
    description: "Les 33 préfectures et les 13 communes de Conakry, fiche par fiche.",
    route: '/guine',
    totem: 'map',
    // coverUrl : à ajouter quand la couverture LaGuinè sera posée
    couleurs: {
      fond: '#2C3E66',
      bord: '#16213a',
      accent: '#D4A04C',
      cartoucheBg: 'rgba(22, 33, 58, 0.5)',
      motTribu: '#D4A04C',
    },
  },
  {
    id: 'gine',
    motTribu: 'GINÈ',
    titreFr: 'Les Pionnières',
    sousTitre: 'LA GUINÉE DES PIONNIÈRES',
    periode: '1929 — aujourd\'hui',
    figures: 'Jeanne · Loffo · Binta',
    description: "Douze femmes qui ont ouvert la voie. À nous de la poursuivre.",
    route: '/pionnieres',
    totem: 'torch',
    coverUrl: '/images/encyclopedies/gine-cover.jpg',
    coverPosition: 'center 10%', // garde la flamme visible
    couleurs: {
      fond: '#C8102E',
      bord: '#6e0718',
      accent: '#F4E7C9',
      cartoucheBg: 'rgba(110, 7, 24, 0.45)',
      motTribu: '#F4E7C9',
    },
  },
];

export default encyclopedies;
