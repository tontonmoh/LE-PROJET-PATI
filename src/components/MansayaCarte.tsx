// ════════════════════════════════════════════════════════════════
//  MANSAYA — Carte d'Afrique de l'Ouest (composant générique)
//  ----------------------------------------------------------------
//  Affiche les pays actuels en fond neutre, surligne en ocre
//  l'emprise de l'empire passé en prop, et repère toujours la
//  Guinée (ancrage pour l'enfant guinéen).
//
//  Usage :
//    <MansayaCarte empire="mali" />
//
//  Données : src/data/mansayaMap.ts (frontières réelles embarquées).
//  Aucune dépendance réseau — fonctionne hors-ligne (PWA).
// ════════════════════════════════════════════════════════════════

import { mapData } from '../data/mansayaMap';

interface Props {
  empire: string;            // slug : "ghana" | "sosso" | "mali" | "songhai"
  height?: number | string;  // hauteur optionnelle du conteneur
}

const OCRE = '#BA7517';
const OCRE_STROKE = '#854F0B';
const GUINEE_DEDANS = '#412404'; // texte Guinée quand elle est dans l'empire
const GUINEE_DEHORS = '#A32D2D'; // texte Guinée quand elle est hors empire

export default function MansayaCarte({ empire }: Props) {
  const covered = mapData.empires[empire] ?? [];
  const guineeInside = covered.includes('Guinea');
  const gui = mapData.labels['Guinea'];

  return (
    <div
      style={{
        background: '#EAF1F5',
        borderRadius: 12,
        padding: 10,
      }}
    >
      <svg
        viewBox={mapData.viewBox}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Carte d'Afrique de l'Ouest, emprise de l'empire surlignée en ocre. La Guinée est repérée${guineeInside ? ' et incluse dans l’empire' : ' hors de l’empire'}.`}
      >
        {/* Fond : tous les pays actuels */}
        <g>
          {Object.entries(mapData.paths).map(([name, d]) => (
            <path
              key={name}
              d={d}
              fill="#FFFFFF"
              stroke="#B4B2A9"
              strokeWidth={0.8}
            />
          ))}
        </g>

        {/* Surbrillance : emprise de l'empire */}
        <g>
          {covered.map((name) => {
            const d = mapData.paths[name];
            if (!d) return null;
            return (
              <path
                key={name}
                d={d}
                fill={OCRE}
                fillOpacity={0.45}
                stroke={OCRE_STROKE}
                strokeWidth={1.2}
              />
            );
          })}
        </g>

        {/* Repère permanent : la Guinée */}
        {gui && (
          <g>
            <circle cx={gui[0]} cy={gui[1] - 15} r={3.5} fill="#E24B4A" />
            <text
              x={gui[0]}
              y={gui[1]}
              textAnchor="middle"
              fontSize={13}
              fontWeight={700}
              fill={guineeInside ? GUINEE_DEDANS : GUINEE_DEHORS}
            >
              Guinée
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
