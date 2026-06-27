import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPrefectures, type RegionAdministrative, type Territoire } from '../data/territoires';
import { SVG_PATHS, SVG_VIEWBOX } from '../data/territoires-svg-paths';

// ─── Palette régions administratives (7 + Conakry) ──────────────────────
export const COULEURS_REGION_ADMIN: Record<RegionAdministrative, { fond: string; bord: string; label: string }> = {
  'boke':      { fond: '#B85C2D', bord: '#5E2A11', label: 'Région de Boké' },
  'kindia':    { fond: '#2A7A8C', bord: '#0E3E47', label: 'Région de Kindia' },
  'mamou':     { fond: '#A87A35', bord: '#4B3210', label: 'Région de Mamou' },
  'labe':      { fond: '#8B6F47', bord: '#4A3618', label: 'Région de Labé' },
  'faranah':   { fond: '#7A8C3D', bord: '#34421A', label: 'Région de Faranah' },
  'kankan':    { fond: '#D4A04C', bord: '#6B4818', label: 'Région de Kankan' },
  'nzerekore': { fond: '#1A5E3A', bord: '#0A3A22', label: "Région de N'Zérékoré" },
  'conakry':   { fond: '#2C3E66', bord: '#0F1A38', label: 'Gouvernorat de Conakry' },
};

interface GuineCarteProps {
  onConakryClick: () => void;
}

export default function GuineCarte({ onConakryClick }: GuineCarteProps) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<string | null>(null);

  const prefectures = getPrefectures();
  const prefBySlug = new Map(prefectures.map((p) => [p.slug, p]));
  const conakryPath = SVG_PATHS['conakry'];

  return (
    <div className="w-full">
      <div className="relative bg-[#F4ECD8] rounded-2xl overflow-hidden border-2 border-[#8b6f47]/30 shadow-md">
        <svg
          viewBox={SVG_VIEWBOX}
          className="w-full h-auto block"
          role="img"
          aria-label="Carte interactive des 33 préfectures de Guinée et du gouvernorat de Conakry"
        >
          <rect width="1000" height="751" fill="#FDF6E3" />

          {prefectures.map((t) => {
            const svgPath = SVG_PATHS[t.slug];
            if (!svgPath) return null;
            const couleur = COULEURS_REGION_ADMIN[t.regionAdministrative];
            const isHovered = hovered === t.slug;
            return (
              <path
                key={t.slug}
                d={svgPath.d}
                fill={couleur.fond}
                stroke={isHovered ? couleur.bord : '#ffffff'}
                strokeWidth={isHovered ? 2.5 : 0.5}
                style={{
                  cursor: 'pointer',
                  filter: isHovered ? 'brightness(1.18)' : 'none',
                  transition: 'filter 0.18s ease, stroke-width 0.15s ease',
                }}
                onClick={() => navigate(`/guine/${t.slug}`)}
                onMouseEnter={() => setHovered(t.slug)}
                onMouseLeave={() => setHovered(null)}
              >
                <title>{t.nom}</title>
              </path>
            );
          })}

          {conakryPath && (
            <g>
              <path
                d={conakryPath.d}
                fill={COULEURS_REGION_ADMIN['conakry'].fond}
                stroke={hovered === '__conakry__' ? COULEURS_REGION_ADMIN['conakry'].bord : '#ffffff'}
                strokeWidth={hovered === '__conakry__' ? 2.5 : 0.5}
                style={{
                  cursor: 'pointer',
                  filter: hovered === '__conakry__' ? 'brightness(1.25)' : 'none',
                  transition: 'filter 0.18s ease, stroke-width 0.15s ease',
                }}
                onClick={onConakryClick}
                onMouseEnter={() => setHovered('__conakry__')}
                onMouseLeave={() => setHovered(null)}
              >
                <title>Conakry — 13 communes</title>
              </path>
              <ConakryStar />
            </g>
          )}
        </svg>

        {hovered && hovered !== '__conakry__' && prefBySlug.has(hovered) && (
          <Tooltip territoire={prefBySlug.get(hovered)!} />
        )}
        {hovered === '__conakry__' && <ConakryTooltip />}
      </div>

      <div className="mt-5">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-[#5a3608] font-semibold mb-3">
          Les 8 régions du pays
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
          {Object.entries(COULEURS_REGION_ADMIN).map(([key, c]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span
                className="inline-block w-3 h-3 rounded-sm"
                style={{ background: c.fond, border: `1.5px solid ${c.bord}` }}
              />
              <span className="text-[#3D2410] font-medium">{c.label.replace('Région de ', '').replace('Gouvernorat de ', '')}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-[#5a3608] text-sm italic">
        Survole une préfecture pour la voir, clique pour la découvrir. <br className="md:hidden" />
        Conakry → clic pour entrer dans ses 13 communes.
      </p>
    </div>
  );
}

function ConakryStar() {
  const cx = 215;
  const cy = 425;
  return (
    <g transform={`translate(${cx}, ${cy})`} style={{ pointerEvents: 'none' }}>
      <circle r={14} fill="#FFD56B" opacity="0.85" stroke="#8B5E00" strokeWidth="1.5" />
      <path
        d="M 0 -7 L 1.8 -2.3 L 7 -2.3 L 2.9 0.9 L 4.6 6.2 L 0 3.2 L -4.6 6.2 L -2.9 0.9 L -7 -2.3 L -1.8 -2.3 Z"
        fill="#8B5E00"
      />
    </g>
  );
}

function Tooltip({ territoire }: { territoire: Territoire }) {
  const couleur = COULEURS_REGION_ADMIN[territoire.regionAdministrative];
  return (
    <div
      className="absolute top-3 right-3 max-w-[220px] bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md pointer-events-none"
      style={{ border: `1.5px solid ${couleur.bord}` }}
    >
      <p
        className="font-bold text-base"
        style={{ color: couleur.bord, fontFamily: '"Fraunces", Georgia, serif' }}
      >
        {territoire.nom}
      </p>
      <p
        className="text-[10px] uppercase tracking-wider mt-0.5"
        style={{ color: couleur.fond, opacity: 0.85 }}
      >
        {couleur.label}
      </p>
      {territoire.patrimoine?.langueDominante && (
        <p className="text-[11px] mt-1 text-[#3D2410]/70">
          Langue : <span className="font-medium">{territoire.patrimoine.langueDominante}</span>
        </p>
      )}
      <p className="text-[10px] text-[#3D2410]/60 mt-1 italic">Clic pour découvrir →</p>
    </div>
  );
}

function ConakryTooltip() {
  return (
    <div
      className="absolute top-3 right-3 max-w-[220px] bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md pointer-events-none"
      style={{ border: '1.5px solid #2C3E66' }}
    >
      <p
        className="font-bold text-base"
        style={{ color: '#0F1A38', fontFamily: '"Fraunces", Georgia, serif' }}
      >
        ★ Conakry
      </p>
      <p className="text-[10px] uppercase tracking-wider mt-0.5" style={{ color: '#2C3E66' }}>
        Gouvernorat capitale · 13 communes
      </p>
      <p className="text-[10px] text-[#0F1A38]/70 mt-1 italic">Clic pour entrer →</p>
    </div>
  );
}
