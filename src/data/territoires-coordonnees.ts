/**
 * Coordonnées GPS approximatives des chefs-lieux des 46 territoires.
 *
 * Utilisées par <GuineCarte /> et <ConakryZoom /> pour positionner les
 * marqueurs sur la carte SVG. Précision : suffisante pour une carte
 * pédagogique schématique, pas pour de la navigation.
 *
 * Bbox Guinée : lat [7.2, 12.7], lng [-15.0, -7.5]
 * Bbox Conakry presqu'île : lat [9.43, 9.72], lng [-13.77, -13.35]
 */

export interface LatLng {
  lat: number;
  lng: number;
}

export const COORDONNEES: Record<string, LatLng> = {

  // ─── BASSE-GUINÉE — Boké ──────────────────────────────────────────────
  'boke':       { lat: 10.93, lng: -14.30 },
  'boffa':      { lat: 10.17, lng: -14.03 },
  'fria':       { lat: 10.37, lng: -13.58 },
  'gaoual':     { lat: 11.75, lng: -13.20 },
  'koundara':   { lat: 12.48, lng: -13.30 },

  // ─── BASSE-GUINÉE — Kindia ────────────────────────────────────────────
  'kindia':     { lat: 10.05, lng: -12.85 },
  'coyah':      { lat: 9.70,  lng: -13.40 },
  'dubreka':    { lat: 9.79,  lng: -13.52 },
  'forecariah': { lat: 9.43,  lng: -13.10 },
  'telimele':   { lat: 10.92, lng: -13.05 },

  // ─── MOYENNE-GUINÉE — Mamou ───────────────────────────────────────────
  'mamou':      { lat: 10.38, lng: -12.10 },
  'dalaba':     { lat: 10.70, lng: -12.25 },
  'pita':       { lat: 11.07, lng: -12.40 },

  // ─── MOYENNE-GUINÉE — Labé ────────────────────────────────────────────
  'labe':       { lat: 11.32, lng: -12.28 },
  'koubia':     { lat: 11.60, lng: -11.85 },
  'lelouma':    { lat: 11.42, lng: -12.65 },
  'mali':       { lat: 12.10, lng: -12.30 },
  'tougue':     { lat: 11.45, lng: -11.67 },

  // ─── HAUTE-GUINÉE — Faranah ───────────────────────────────────────────
  'faranah':     { lat: 10.04, lng: -10.74 },
  'dabola':      { lat: 10.75, lng: -11.12 },
  'dinguiraye':  { lat: 11.30, lng: -10.73 },
  'kissidougou': { lat: 9.18,  lng: -10.10 },

  // ─── HAUTE-GUINÉE — Kankan ────────────────────────────────────────────
  'kankan':     { lat: 10.39, lng: -9.30 },
  'kerouane':   { lat: 9.27,  lng: -9.02 },
  'kouroussa':  { lat: 10.65, lng: -9.88 },
  'mandiana':   { lat: 10.62, lng: -8.68 },
  'siguiri':    { lat: 11.42, lng: -9.17 },

  // ─── GUINÉE FORESTIÈRE — N'Zérékoré ───────────────────────────────────
  'nzerekore':  { lat: 7.76, lng: -8.83 },
  'beyla':      { lat: 8.69, lng: -8.65 },
  'gueckedou':  { lat: 8.57, lng: -10.13 },
  'lola':       { lat: 7.82, lng: -8.53 },
  'macenta':    { lat: 8.55, lng: -9.47 },
  'yomou':      { lat: 7.57, lng: -9.27 },

  // ─── CONAKRY — 13 communes urbaines (presqu'île) ──────────────────────
  // Positions approximatives le long de l'axe SO → NE de la presqu'île
  'conakry-kaloum':    { lat: 9.51, lng: -13.71 }, // pointe SO
  'conakry-dixinn':    { lat: 9.54, lng: -13.69 },
  'conakry-matam':     { lat: 9.54, lng: -13.67 },
  'conakry-ratoma':    { lat: 9.56, lng: -13.66 },
  'conakry-matoto':    { lat: 9.57, lng: -13.62 },
  'conakry-kassa':     { lat: 9.43, lng: -13.78 }, // île au large
  'conakry-lambanyi':  { lat: 9.59, lng: -13.60 },
  'conakry-sonfonia':  { lat: 9.61, lng: -13.57 },
  'conakry-gbessia':   { lat: 9.58, lng: -13.62 },
  'conakry-tombolia':  { lat: 9.60, lng: -13.55 },
  'conakry-kagbelen':  { lat: 9.66, lng: -13.51 },
  'conakry-sanoyah':   { lat: 9.69, lng: -13.45 },
  'conakry-maneah':    { lat: 9.71, lng: -13.40 }, // NE banlieue
};

// ─── Projections ─────────────────────────────────────────────────────────

/** Bbox de la Guinée entière (pour la carte nationale) */
export const BBOX_GUINEE = {
  latMin: 7.2,
  latMax: 12.7,
  lngMin: -15.0,
  lngMax: -7.5,
};

/** Bbox de la presqu'île + banlieue de Conakry (pour la vue zoom) */
export const BBOX_CONAKRY = {
  latMin: 9.40,
  latMax: 9.75,
  lngMin: -13.82,
  lngMax: -13.35,
};

/** Projette une coordonnée GPS dans un viewport SVG (équirectangulaire) */
export function project(coord: LatLng, bbox: typeof BBOX_GUINEE, width: number, height: number) {
  const x = ((coord.lng - bbox.lngMin) / (bbox.lngMax - bbox.lngMin)) * width;
  const y = ((bbox.latMax - coord.lat) / (bbox.latMax - bbox.latMin)) * height;
  return { x, y };
}
