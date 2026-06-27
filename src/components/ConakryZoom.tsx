import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCommunesConakry, type Territoire } from '../data/territoires';
import {
  CONAKRY_SVG_PATHS,
  CONAKRY_SVG_VIEWBOX,
  CONAKRY_SLUGS_ORDRE,
} from '../data/conakry-svg-paths';

// ─── Palette par commune (cohérente avec la presqu'île) ──────────────────
const COULEURS_COMMUNE: Record<string, { fond: string; bord: string }> = {
  'conakry-kaloum':   { fond: '#2C3E66', bord: '#0F1A38' },
  'conakry-dixinn':   { fond: '#5A4A8C', bord: '#2A2052' },
  'conakry-matam':    { fond: '#C8841E', bord: '#5A3608' },
  'conakry-ratoma':   { fond: '#2A7A8C', bord: '#0E3E47' },
  'conakry-lambanyi': { fond: '#5BA3B5', bord: '#2A5560' },
  'conakry-sonfonia': { fond: '#8AC5D2', bord: '#4A7080' },
  'conakry-gbessia':  { fond: '#A8442C', bord: '#5E2A11' },
  'conakry-matoto':   { fond: '#7A8C3D', bord: '#34421A' },
  'conakry-tombolia': { fond: '#C9CC8C', bord: '#6F7240' },
  'conakry-kassa':    { fond: '#D4A04C', bord: '#6B4818' },
  'conakry-maneah':   { fond: '#B85C2D', bord: '#5E2A11' },
  'conakry-sanoyah':  { fond: '#A87A35', bord: '#4B3210' },
  'conakry-kagbelen': { fond: '#9AAB60', bord: '#4E5A24' },
};

const DISPLAY = '"Fraunces", "Cormorant Garamond", Georgia, serif';

interface ConakryZoomProps {
  onRetourCarte: () => void;
}

export default function ConakryZoom({ onRetourCarte }: ConakryZoomProps) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<string | null>(null);

  const communes = getCommunesConakry();
  const communeBySlug = new Map(communes.map((c) => [c.slug, c]));

  return (
    <div className="w-full">
      {/* ── Bandeau retour ── */}
      <button
        onClick={onRetourCarte}
        className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border-2 border-[#2A7A8C] text-[#0E3E47] hover:bg-[#2A7A8C] hover:text-white transition-colors text-sm font-semibold"
      >
        ← Retour à la carte nationale
      </button>

      {/* ── Carte SVG des 13 communes ── */}
      <div className="relative bg-[#F4ECD8] rounded-2xl overflow-hidden border-2 border-[#2C3E66]/30 shadow-md">
        <svg
          viewBox={CONAKRY_SVG_VIEWBOX}
          className="w-full h-auto block"
          role="img"
          aria-label="Carte interactive des 13 communes urbaines de Conakry"
        >
          {/* Hachures discrètes pour signaler les communes au tracé approximatif */}
          <defs>
            <pattern
              id="approxPattern"
              patternUnits="userSpaceOnUse"
              width="14"
              height="14"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="14" stroke="white" strokeWidth="0.4" opacity="0.22" />
            </pattern>
          </defs>

          {/* Titre */}
          <text
            x="600"
            y="40"
            textAnchor="middle"
            style={{
              fontFamily: DISPLAY,
              fontSize: 26,
              fontWeight: 700,
              fill: '#0F1A38',
              letterSpacing: '0.15em',
            }}
          >
            CONAKRY
          </text>
          <text
            x="600"
            y="66"
            textAnchor="middle"
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 12,
              fill: '#0F1A38',
              opacity: 0.7,
              letterSpacing: '0.2em',
            }}
          >
            13 COMMUNES URBAINES — DÉCRET DU 13 MARS 2024
          </text>

          {/* 13 communes cliquables */}
          {CONAKRY_SLUGS_ORDRE.map((slug) => {
            const svgPath = CONAKRY_SVG_PATHS[slug];
            const couleur = COULEURS_COMMUNE[slug];
            if (!svgPath || !couleur) return null;
            const isHovered = hovered === slug;
            const commune = communeBySlug.get(slug);

            return (
              <g
                key={slug}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/guine/${slug}`)}
                onMouseEnter={() => setHovered(slug)}
                onMouseLeave={() => setHovered(null)}
              >
                <path
                  d={svgPath.d}
                  fill={couleur.fond}
                  stroke={isHovered ? couleur.bord : '#ffffff'}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  fillOpacity={0.82}
                  style={{
                    filter: isHovered ? 'brightness(1.18)' : 'none',
                    transition: 'filter 0.18s ease, stroke-width 0.15s ease',
                  }}
                >
                  <title>{commune?.nom ?? svgPath.nom}</title>
                </path>
                {/* Hachures discrètes pour les communes au tracé approximatif */}
                {svgPath.approximatif && (
                  <path
                    d={svgPath.d}
                    fill="url(#approxPattern)"
                    style={{ pointerEvents: 'none' }}
                  />
                )}
              </g>
            );
          })}

          {/* Labels (positionnés au centroïde de chaque path) */}
          {CONAKRY_SLUGS_ORDRE.map((slug) => {
            const commune = communeBySlug.get(slug);
            const svgPath = CONAKRY_SVG_PATHS[slug];
            if (!commune || !svgPath) return null;
            const center = centroidFromPath(svgPath.d);
            return (
              <text
                key={`label-${slug}`}
                x={center.x}
                y={center.y}
                textAnchor="middle"
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: 15,
                  fontWeight: 700,
                  fill: '#ffffff',
                  stroke: '#241c10',
                  strokeWidth: 0.6,
                  paintOrder: 'stroke fill',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                {commune.nom}
              </text>
            );
          })}
        </svg>

        {/* Tooltip flottant */}
        {hovered && communeBySlug.has(hovered) && (
          <CommuneTooltip
            commune={communeBySlug.get(hovered)!}
            approximatif={CONAKRY_SVG_PATHS[hovered]?.approximatif === true}
          />
        )}
      </div>

      {/* ── Grille raccourci (accessibilité + mobile) ── */}
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2">
        {communes.map((c, i) => {
          const couleur = COULEURS_COMMUNE[c.slug];
          return (
            <button
              key={c.slug}
              onClick={() => navigate(`/guine/${c.slug}`)}
              onMouseEnter={() => setHovered(c.slug)}
              onMouseLeave={() => setHovered(null)}
              className="text-left px-3 py-2 rounded-lg bg-white border hover:shadow-sm transition-all"
              style={{
                borderColor: hovered === c.slug ? couleur?.bord ?? '#2C3E66' : 'rgba(44, 62, 102, 0.2)',
                background: hovered === c.slug ? `${couleur?.fond ?? '#2C3E66'}0a` : '#ffffff',
              }}
            >
              <span
                className="inline-block w-2.5 h-2.5 rounded-sm mr-2 align-middle"
                style={{ background: couleur?.fond ?? '#888' }}
              />
              <span className="text-[10px] font-bold mr-1.5 align-middle" style={{ color: couleur?.bord ?? '#888' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-semibold text-[#0F1A38] align-middle">{c.nom}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-center text-[#0E3E47] text-sm italic">
        Clique sur une commune pour la découvrir.
        <br className="md:hidden" />
        <span className="text-[#5a3608] text-xs">
          Les communes hachurées ont un tracé approximatif (à affiner avec la donnée officielle).
        </span>
      </p>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// Tooltip
// ════════════════════════════════════════════════════════════════════════════

function CommuneTooltip({ commune, approximatif }: { commune: Territoire; approximatif: boolean }) {
  const couleur = COULEURS_COMMUNE[commune.slug] ?? { fond: '#2C3E66', bord: '#0F1A38' };
  return (
    <div
      className="absolute top-3 right-3 max-w-[220px] bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md pointer-events-none"
      style={{ border: `1.5px solid ${couleur.bord}` }}
    >
      <p
        className="font-bold text-base"
        style={{ color: couleur.bord, fontFamily: DISPLAY }}
      >
        Commune de {commune.nom}
      </p>
      <p
        className="text-[10px] uppercase tracking-wider mt-0.5"
        style={{ color: couleur.fond, opacity: 0.85 }}
      >
        Gouvernorat de Conakry
      </p>
      {approximatif && (
        <p className="text-[10px] text-[#3D2410]/60 mt-1 italic">
          Tracé approximatif
        </p>
      )}
      <p className="text-[10px] text-[#3D2410]/60 mt-1 italic">Clic pour découvrir →</p>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// Centroïde approximatif d'un path SVG (moyenne des coordonnées M/L)
// ════════════════════════════════════════════════════════════════════════════

function centroidFromPath(d: string): { x: number; y: number } {
  const points: Array<[number, number]> = [];
  // Extract pairs after M or L commands
  const re = /[ML]\s*(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g;
  let match;
  while ((match = re.exec(d)) !== null) {
    points.push([parseFloat(match[1]), parseFloat(match[2])]);
  }
  if (points.length === 0) return { x: 0, y: 0 };
  const x = points.reduce((s, p) => s + p[0], 0) / points.length;
  const y = points.reduce((s, p) => s + p[1], 0) / points.length;
  return { x, y };
}
