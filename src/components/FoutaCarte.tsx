/**
 * FOUTA — Composant Carte Interactive
 * Affiche la carte des 9 diwés en SVG avec zones cliquables
 */

import React, { useState } from 'react';
import { foutaMapSVG } from '../data/foutaMap';

interface FoutaCarteProps {
  selectedDiwal?: string;
  onSelectDiwal?: (diwelId: string) => void;
}

const diwelColors: Record<string, string> = {
  timbo: '#d4a574',
  fougoumba: '#c9a574',
  labe: '#b8a574',
  bhouriya: '#a89574',
  'timbi-touni': '#9d8574',
  kebali: '#8d8574',
  kollade: '#7d8574',
  koin: '#6d8574',
  'fode-hadji': '#5d8574',
};

export default function FoutaCarte({ selectedDiwal, onSelectDiwal }: FoutaCarteProps) {
  const [hoveredDiwal, setHoveredDiwal] = useState<string | null>(null);

  return (
    <div className="fouta-carte bg-gradient-to-b from-[#e8dcc8] to-[#d4c4a8] rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-[#8b6f47] mb-4">Carte du Fouta-Djalon</h2>
      
      <div className="bg-white rounded-lg p-4 shadow-md">
        {/* SVG Carte */}
        <div
          dangerouslySetInnerHTML={{ __html: foutaMapSVG }}
          className="w-full max-w-2xl mx-auto mb-6"
        />

        {/* Légende interactive */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
          {Object.entries(diwelColors).map(([diwalId, color]) => {
            const displayName =
              diwalId === 'timbi-touni'
                ? 'Timbi-Touni'
                : diwalId === 'fode-hadji'
                ? 'Fodé-Hadji'
                : diwalId.charAt(0).toUpperCase() + diwalId.slice(1).replace(/-/g, ' ');

            return (
              <button
                key={diwalId}
                onClick={() => onSelectDiwal?.(diwalId)}
                onMouseEnter={() => setHoveredDiwal(diwalId)}
                onMouseLeave={() => setHoveredDiwal(null)}
                className={`flex items-center gap-3 px-4 py-3 rounded transition ${
                  selectedDiwal === diwalId
                    ? 'bg-[#8b6f47] text-white ring-2 ring-[#6f5838]'
                    : hoveredDiwal === diwalId
                    ? 'bg-[#f5f0e8] text-[#8b6f47] ring-2 ring-[#c9a574]'
                    : 'bg-gray-100 text-[#333] hover:bg-[#f5f0e8]'
                }`}
              >
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: color }}
                />
                <span className="font-semibold text-sm">{displayName}</span>
              </button>
            );
          })}
        </div>

        {/* Info sélectionné */}
        {selectedDiwal && (
          <div className="mt-8 p-4 bg-[#f5f0e8] rounded-lg border-l-4 border-[#c9a574]">
            <p className="text-[#333] font-semibold">
              📍 {selectedDiwal.toUpperCase()} sélectionné
            </p>
            <p className="text-[#666] text-sm mt-2">
              Cliquez sur un diwal dans la liste ou ouvrez la fiche pour en savoir plus.
            </p>
          </div>
        )}
      </div>

      {/* Info contextuelle */}
      <div className="mt-6 bg-white rounded-lg p-4 shadow-md">
        <h3 className="font-bold text-[#8b6f47] mb-2">À propos du Fouta-Djalon</h3>
        <p className="text-sm text-[#666] leading-relaxed">
          Le Fouta-Djalon était une théocratie peule de 1725 à 1896. Elle était divisée en 9 diwés (provinces) 
          gouvernées par un Almamy élu. Chaque diwal avait un rôle politique spécifique dans la confédération. 
          La région était un centre majeur d'enseignement islamique et de commerce ouest-africain.
        </p>
      </div>
    </div>
  );
}
