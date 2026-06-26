/**
 * HOROYA — Carte AOF 1958 (diagrammatique, pas géographique exacte)
 * Affiche les 12 territoires d'Afrique noire française qui ont voté au référendum.
 * La Guinée est seule en NON (rouge) — tous les autres en OUI (vert clair).
 * Cliquer sur la Guinée déclenche l'entrée dans le chapitre III (Le moment Horoya).
 */

import { useState } from 'react';

const VERT_OUI = '#5b8a72';      // vert pâle / sage — les OUI
const ROUGE_NON = '#c8341e';     // rouge guinéen vif — le NON
const OR = '#c9a227';
const INK = '#241c10';

type Territoire = {
  id: string;
  nom: string;
  groupe: 'AOF' | 'AEF';
  vote: 'OUI' | 'NON';
  // Positions sur viewBox 800x520 (disposition approximativement géographique)
  cx: number;
  cy: number;
  r: number;
};

const TERRITOIRES: Territoire[] = [
  // AOF (Afrique-Occidentale française)
  { id: 'mauritanie', nom: 'Mauritanie',       groupe: 'AOF', vote: 'OUI', cx: 200, cy: 90,  r: 58 },
  { id: 'soudan',     nom: 'Soudan français',  groupe: 'AOF', vote: 'OUI', cx: 380, cy: 130, r: 64 },
  { id: 'niger',      nom: 'Niger',            groupe: 'AOF', vote: 'OUI', cx: 555, cy: 110, r: 62 },
  { id: 'senegal',    nom: 'Sénégal',          groupe: 'AOF', vote: 'OUI', cx: 110, cy: 200, r: 48 },
  { id: 'guinee',     nom: 'Guinée',           groupe: 'AOF', vote: 'NON', cx: 165, cy: 320, r: 60 },
  { id: 'haute-volta',nom: 'Haute-Volta',      groupe: 'AOF', vote: 'OUI', cx: 410, cy: 285, r: 50 },
  { id: 'cote',       nom: "Côte d'Ivoire",    groupe: 'AOF', vote: 'OUI', cx: 305, cy: 405, r: 54 },
  { id: 'dahomey',    nom: 'Dahomey',          groupe: 'AOF', vote: 'OUI', cx: 500, cy: 405, r: 42 },
  // AEF (Afrique-Équatoriale française)
  { id: 'tchad',      nom: 'Tchad',            groupe: 'AEF', vote: 'OUI', cx: 670, cy: 230, r: 54 },
  { id: 'oubangui',   nom: 'Oubangui-Chari',   groupe: 'AEF', vote: 'OUI', cx: 680, cy: 350, r: 50 },
  { id: 'congo',      nom: 'Moyen-Congo',      groupe: 'AEF', vote: 'OUI', cx: 615, cy: 450, r: 42 },
  { id: 'gabon',      nom: 'Gabon',            groupe: 'AEF', vote: 'OUI', cx: 510, cy: 475, r: 40 },
];

interface Props {
  onSelectGuinee?: () => void;
}

export default function HoroyaCarte({ onSelectGuinee }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-6 md:p-8">
      <svg
        viewBox="0 0 800 540"
        className="w-full h-auto"
        role="img"
        aria-label="Carte de l'AOF et de l'AEF lors du référendum du 28 septembre 1958"
      >
        {/* Fond océan stylisé */}
        <rect width="800" height="540" fill="#f7f3e8" />

        {/* Filet sépare AOF / AEF */}
        <line x1="608" y1="40" x2="608" y2="500" stroke={OR} strokeWidth="0.8" strokeDasharray="3 4" opacity="0.5" />
        <text x="200" y="32" textAnchor="middle" fontSize="11" fontWeight="700" fill={INK} opacity="0.55" letterSpacing="2">
          AFRIQUE-OCCIDENTALE FRANÇAISE
        </text>
        <text x="700" y="32" textAnchor="middle" fontSize="11" fontWeight="700" fill={INK} opacity="0.55" letterSpacing="2">
          AEF
        </text>

        {/* Territoires */}
        {TERRITOIRES.map((t) => {
          const isGuinee = t.id === 'guinee';
          const isHovered = hovered === t.id;
          const isClickable = isGuinee;
          const fill = t.vote === 'NON' ? ROUGE_NON : VERT_OUI;

          return (
            <g
              key={t.id}
              onMouseEnter={() => setHovered(t.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => isClickable && onSelectGuinee?.()}
              style={{ cursor: isClickable ? 'pointer' : 'default' }}
            >
              {/* Halo pulsant sur la Guinée */}
              {isGuinee && (
                <circle
                  cx={t.cx}
                  cy={t.cy}
                  r={t.r + 8}
                  fill="none"
                  stroke={ROUGE_NON}
                  strokeWidth="1.5"
                  opacity="0.5"
                >
                  <animate attributeName="r" values={`${t.r + 4};${t.r + 14};${t.r + 4}`} dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.05;0.6" dur="2.4s" repeatCount="indefinite" />
                </circle>
              )}

              {/* Cercle territoire */}
              <circle
                cx={t.cx}
                cy={t.cy}
                r={t.r}
                fill={fill}
                stroke={isHovered || isGuinee ? INK : 'transparent'}
                strokeWidth={isGuinee ? 2 : 1}
                opacity={isHovered || isGuinee ? 1 : 0.85}
              />

              {/* Étiquette NON sur Guinée */}
              {isGuinee && (
                <text
                  x={t.cx}
                  y={t.cy - 6}
                  textAnchor="middle"
                  fontSize="22"
                  fontWeight="900"
                  fill="white"
                  fontFamily="'Fraunces', Georgia, serif"
                >
                  NON
                </text>
              )}
              {!isGuinee && (
                <text
                  x={t.cx}
                  y={t.cy - 4}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  opacity="0.85"
                >
                  OUI
                </text>
              )}

              {/* Nom du territoire */}
              <text
                x={t.cx}
                y={t.cy + (isGuinee ? 16 : 12)}
                textAnchor="middle"
                fontSize={isGuinee ? 12 : 10}
                fontWeight={isGuinee ? 700 : 600}
                fill="white"
                opacity="0.95"
              >
                {t.nom}
              </text>

              {/* Pourcentage Guinée */}
              {isGuinee && (
                <text
                  x={t.cx}
                  y={t.cy + 30}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="600"
                  fill="white"
                  opacity="0.85"
                >
                  95,22 %
                </text>
              )}
            </g>
          );
        })}

        {/* Légende en bas */}
        <g transform="translate(40, 500)">
          <circle cx="0" cy="0" r="9" fill={VERT_OUI} />
          <text x="16" y="4" fontSize="12" fontWeight="700" fill={INK}>OUI à la Communauté française</text>

          <circle cx="280" cy="0" r="9" fill={ROUGE_NON} />
          <text x="296" y="4" fontSize="12" fontWeight="700" fill={INK}>NON — Indépendance immédiate</text>
        </g>

        {/* Call-to-action discret */}
        <text
          x="400"
          y="535"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill={INK}
          opacity="0.55"
          fontStyle="italic"
        >
          Cliquer sur la Guinée pour entrer dans l'histoire du NON
        </text>
      </svg>
    </div>
  );
}
