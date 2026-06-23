// src/components/senag/TrainLocomotive.tsx
// Locomotive de tête du Train de la Mémoire — SVG carte stylisée de la Guinée

import React from 'react';

interface TrainLocomotiveProps {
  height?: number; // px, default 140
  className?: string;
}

const TrainLocomotive: React.FC<TrainLocomotiveProps> = ({ height = 140, className = '' }) => {
  const width = height * 1.4;

  return (
    <svg
      viewBox="0 0 280 200"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 drop-shadow-lg ${className}`}
      aria-label="Locomotive Guinée — tête du train de la mémoire"
      role="img"
    >
      {/* Fumée stylisée */}
      <g opacity="0.55">
        <circle cx="68" cy="22" r="10" fill="#E5E7EB" />
        <circle cx="82" cy="14" r="13" fill="#E5E7EB" />
        <circle cx="98" cy="20" r="9" fill="#E5E7EB" />
      </g>

      {/* Cheminée */}
      <rect x="58" y="48" width="22" height="40" rx="3" fill="#1B2A4A" />
      <rect x="52" y="44" width="34" height="10" rx="2" fill="#1B2A4A" />

      {/* Toit du conducteur (cabine) */}
      <rect x="190" y="60" width="70" height="14" rx="3" fill="#1B2A4A" />
      {/* Cabine */}
      <rect x="194" y="74" width="62" height="48" rx="4" fill="#C9A227" />
      {/* Fenêtre cabine */}
      <rect x="206" y="86" width="38" height="22" rx="3" fill="#FFFFFF" opacity="0.85" />

      {/* Corps principal de la locomotive (chaudron) */}
      <rect x="40" y="86" width="170" height="62" rx="10" fill="#A0522D" />
      {/* Bande supérieure du chaudron */}
      <rect x="40" y="86" width="170" height="10" fill="#8B4513" />

      {/* Bouclier frontal — emplacement carte Guinée */}
      <g transform="translate(50, 100)">
        {/* Fond du médaillon (cercle) */}
        <circle cx="40" cy="22" r="32" fill="#FFFFFF" stroke="#1B2A4A" strokeWidth="2" />

        {/* Carte stylisée de la Guinée (silhouette simplifiée) */}
        <path
          d="M 16 14
             L 26 8
             L 42 6
             L 56 10
             L 62 18
             L 66 28
             L 62 36
             L 54 40
             L 46 42
             L 34 40
             L 22 36
             L 14 28
             Z"
          fill="#1F8B4C"
          stroke="#0F5F32"
          strokeWidth="1"
        />

        {/* Texte GUINÉE */}
        <text
          x="40"
          y="26"
          fontSize="9"
          fontWeight="800"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
        >
          GUINÉE
        </text>
      </g>

      {/* Bandeau "MÉMOIRE NATIONALE" sous le médaillon */}
      <rect x="120" y="100" width="84" height="14" rx="2" fill="#1B2A4A" />
      <text
        x="162"
        y="110"
        fontSize="8"
        fontWeight="700"
        textAnchor="middle"
        fill="#C9A227"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="1.2"
      >
        MÉMOIRE NATIONALE
      </text>

      {/* Détails (rivets) */}
      <circle cx="50" cy="92" r="1.5" fill="#1B2A4A" />
      <circle cx="50" cy="142" r="1.5" fill="#1B2A4A" />
      <circle cx="200" cy="92" r="1.5" fill="#1B2A4A" />
      <circle cx="200" cy="142" r="1.5" fill="#1B2A4A" />

      {/* Châssis */}
      <rect x="32" y="148" width="226" height="16" rx="2" fill="#1B2A4A" />

      {/* Roues */}
      <circle cx="62" cy="172" r="18" fill="#1B2A4A" stroke="#C9A227" strokeWidth="3" />
      <circle cx="62" cy="172" r="6" fill="#C9A227" />

      <circle cx="120" cy="172" r="22" fill="#1B2A4A" stroke="#C9A227" strokeWidth="3" />
      <circle cx="120" cy="172" r="8" fill="#C9A227" />

      <circle cx="180" cy="172" r="22" fill="#1B2A4A" stroke="#C9A227" strokeWidth="3" />
      <circle cx="180" cy="172" r="8" fill="#C9A227" />

      <circle cx="234" cy="172" r="14" fill="#1B2A4A" stroke="#C9A227" strokeWidth="2" />

      {/* Bielle (connexion entre roues) */}
      <line x1="120" y1="172" x2="180" y2="172" stroke="#C9A227" strokeWidth="3" />
    </svg>
  );
};

export default TrainLocomotive;
