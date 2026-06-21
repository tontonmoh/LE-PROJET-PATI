/**
 * FOUTA THÉOCRATIQUE — Carte SVG
 * 9 diwés avec frontières et étiquettes
 */

export const foutaMapSVG = `
<svg viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Fond -->
  <defs>
    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e8dcc8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d4c4a8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="700" fill="url(#skyGradient)"/>
  
  <!-- Fleuve Bafing (limite est) -->
  <path d="M 450 50 Q 460 150 450 250 Q 440 350 455 450 Q 465 550 450 650" 
    stroke="#4a90e2" stroke-width="3" fill="none" opacity="0.7"/>
  
  <!-- Montagne Hélaya (symbole Timbo) -->
  <polygon points="180,120 200,80 220,120" fill="#8b7355" opacity="0.8"/>
  <text x="180" y="140" font-size="10" fill="#333" text-anchor="middle" font-weight="bold">Mt Hélaya</text>
  
  <!-- ==================== FRONTIÈRES DES 9 DIWÉS ==================== -->
  
  <!-- 1. TIMBO (centre-ouest) -->
  <path d="M 120 100 L 200 80 L 220 120 L 200 180 L 140 160 Z" 
    fill="#d4a574" opacity="0.4" stroke="#8b6f47" stroke-width="2"/>
  <text x="170" y="130" font-size="14" font-weight="bold" fill="#333" text-anchor="middle">Timbo</text>
  
  <!-- 2. FOUGOUMBA (nord-ouest) -->
  <path d="M 80 60 L 140 50 L 160 90 L 120 100 L 100 80 Z" 
    fill="#c9a574" opacity="0.4" stroke="#8b6f47" stroke-width="2"/>
  <text x="115" y="75" font-size="12" font-weight="bold" fill="#333" text-anchor="middle">Fougoumba</text>
  
  <!-- 3. LABÉ (nord-centre) -->
  <path d="M 140 50 L 240 40 L 280 90 L 220 120 L 160 90 Z" 
    fill="#b8a574" opacity="0.4" stroke="#8b6f47" stroke-width="2"/>
  <text x="200" y="75" font-size="12" font-weight="bold" fill="#333" text-anchor="middle">Labé</text>
  
  <!-- 4. BHOURIYA (nord-est) -->
  <path d="M 240 40 L 330 50 L 350 110 L 280 90 Z" 
    fill="#a89574" opacity="0.4" stroke="#8b6f47" stroke-width="2"/>
  <text x="295" y="80" font-size="11" font-weight="bold" fill="#333" text-anchor="middle">Bhouriya</text>
  
  <!-- 5. TIMBI-TOUNI (centre) -->
  <path d="M 200 120 L 280 90 L 320 150 L 250 180 L 200 180 Z" 
    fill="#9d8574" opacity="0.4" stroke="#8b6f47" stroke-width="2"/>
  <text x="250" y="145" font-size="12" font-weight="bold" fill="#333" text-anchor="middle">Timbi-T.</text>
  
  <!-- 6. KÉBALI (centre-sud) -->
  <path d="M 200 180 L 250 180 L 280 250 L 200 240 Z" 
    fill="#8d8574" opacity="0.4" stroke="#8b6f47" stroke-width="2"/>
  <text x="233" y="210" font-size="11" font-weight="bold" fill="#333" text-anchor="middle">Kébali</text>
  
  <!-- 7. KOLLADÉ (sud-ouest) -->
  <path d="M 80 200 L 200 180 L 200 240 L 120 280 L 90 240 Z" 
    fill="#7d8574" opacity="0.4" stroke="#8b6f47" stroke-width="2"/>
  <text x="145" y="240" font-size="12" font-weight="bold" fill="#333" text-anchor="middle">Kolladé</text>
  
  <!-- 8. KOÏN (centre-sud) -->
  <path d="M 200 240 L 280 250 L 340 320 L 240 340 L 200 300 Z" 
    fill="#6d8574" opacity="0.4" stroke="#8b6f47" stroke-width="2"/>
  <text x="265" y="285" font-size="12" font-weight="bold" fill="#333" text-anchor="middle">Koïn</text>
  
  <!-- 9. FODÉ-HADJI (est - au-delà Bafing) -->
  <path d="M 450 200 L 550 180 L 570 350 L 480 360 L 450 280 Z" 
    fill="#5d8574" opacity="0.3" stroke="#4a90e2" stroke-width="2" stroke-dasharray="5,5"/>
  <text x="515" y="270" font-size="11" font-weight="bold" fill="#333" text-anchor="middle">Fodé-Hadji</text>
  <text x="515" y="285" font-size="9" fill="#666" text-anchor="middle">(Annexe)</text>
  
  <!-- ==================== REPÈRES GÉOGRAPHIQUES ==================== -->
  
  <!-- Conakry (référence) -->
  <circle cx="50" cy="600" r="5" fill="#e74c3c"/>
  <text x="60" y="605" font-size="10" fill="#333">Conakry</text>
  
  <!-- Direction rose des vents -->
  <g transform="translate(550, 50)">
    <circle cx="0" cy="0" r="12" fill="none" stroke="#999" stroke-width="1"/>
    <line x1="0" y1="-12" x2="0" y2="-18" stroke="#999" stroke-width="1"/>
    <text x="0" y="-22" font-size="10" fill="#999" text-anchor="middle">N</text>
  </g>
  
  <!-- Légende -->
  <text x="20" y="660" font-size="12" font-weight="bold" fill="#333">Fouta Théocratique (1725–1896)</text>
  <text x="20" y="680" font-size="10" fill="#666">9 diwés — 7 provinces + 1 annexe</text>
  
  <!-- Échelle approximative -->
  <rect x="500" y="660" width="40" height="3" fill="#333"/>
  <text x="545" y="668" font-size="9" fill="#333">~100 km</text>
</svg>
`;

export const foutaMapBounds = {
  minLat: 8.5,
  maxLat: 11.0,
  minLng: -12.5,
  maxLng: -8.0,
};

export const foutaDiwalCoordinates: Record<string, { lat: number; lng: number }> = {
  timbo: { lat: 10.0, lng: -10.8 },
  fougoumba: { lat: 10.3, lng: -11.2 },
  labe: { lat: 10.35, lng: -10.6 },
  bhouriya: { lat: 10.15, lng: -10.2 },
  'timbi-touni': { lat: 9.8, lng: -10.5 },
  kebali: { lat: 9.4, lng: -10.7 },
  kollade: { lat: 9.6, lng: -11.0 },
  koin: { lat: 9.0, lng: -10.3 },
  'fode-hadji': { lat: 9.2, lng: -9.0 },
};
