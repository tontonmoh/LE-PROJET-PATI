import { useState } from 'react';
import { Link } from 'react-router-dom';
import ENCYCLOPEDIES, { type EncyclopedieCarte, type CarteTotem } from '../data/encyclopedies';

const DISPLAY = '"Fraunces", "Cormorant Garamond", Georgia, serif';

// ─── Géométrie de l'éventail (5 cartes) ──────────────────────────────────
// Rotations symétriques autour du centre, transform-origin = bottom center
const ROTATIONS = [-16, -8, 0, 8, 16];
// Les cartes extrêmes descendent légèrement (effet éventail)
const Y_OFFSETS = [22, 8, 0, 8, 22];

// ════════════════════════════════════════════════════════════════════════════
// COMPOSANT PRINCIPAL
// ════════════════════════════════════════════════════════════════════════════

export default function EncyclopedieEventail() {
  return (
    <section className="px-4 pt-8 pb-4 md:pt-12 md:pb-8">
      <div className="max-w-5xl mx-auto">

        {/* ─── Titre de section ─── */}
        <header className="text-center mb-8 md:mb-10">
          <p
            className="text-[11px] md:text-xs uppercase font-bold tracking-[0.3em] text-[#8b6f47] mb-2"
          >
            L'Encyclopédie Guinée
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight"
            style={{ fontFamily: DISPLAY, color: '#241c10' }}
          >
            Tire ta carte. <span className="italic opacity-80">Entre dans l'histoire.</span>
          </h2>
        </header>

        {/* ─── Desktop : éventail ─── */}
        <div className="hidden md:block relative" style={{ height: 480 }}>
          <div className="absolute inset-0 flex items-end justify-center gap-1">
            {ENCYCLOPEDIES.map((carte, i) => (
              <Carte
                key={carte.id}
                carte={carte}
                rotation={ROTATIONS[i]}
                yOffset={Y_OFFSETS[i]}
                indexInFan={i}
              />
            ))}
          </div>
        </div>

        {/* ─── Mobile : pile swipeable scroll-snap ─── */}
        <div className="md:hidden">
          <div
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4"
            style={{ scrollPaddingLeft: 16 }}
          >
            {ENCYCLOPEDIES.map((carte) => (
              <div key={carte.id} className="snap-start shrink-0 w-[78%]">
                <Carte carte={carte} mobile />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// CARTE INDIVIDUELLE
// ════════════════════════════════════════════════════════════════════════════

interface CarteProps {
  carte: EncyclopedieCarte;
  rotation?: number;
  yOffset?: number;
  indexInFan?: number;
  mobile?: boolean;
}

function Carte({ carte, rotation = 0, yOffset = 0, indexInFan = 0, mobile = false }: CarteProps) {
  const { couleurs } = carte;
  const [imageError, setImageError] = useState(false);

  const desktopStyle: React.CSSProperties = mobile
    ? {}
    : {
        transform: `rotate(${rotation}deg) translateY(${yOffset}px)`,
        transformOrigin: 'bottom center',
        zIndex: indexInFan + 1,
      };

  return (
    <Link
      to={carte.route}
      aria-label={`Encyclopédie ${carte.titreFr} (${carte.periode})`}
      className={
        mobile
          ? 'block'
          : 'group relative block transition-transform duration-300 hover:!rotate-0 hover:!-translate-y-3 hover:z-50'
      }
      style={desktopStyle}
    >
      <article
        className="relative rounded-2xl overflow-hidden"
        style={{
          width: mobile ? '100%' : 198,
          height: mobile ? 396 : 348,
          background: couleurs.fond,
          border: `2.5px solid ${couleurs.bord}`,
          boxShadow: '0 8px 24px rgba(13, 43, 26, 0.18)',
        }}
      >
        {/* ─── Cartouche période (en haut) ─── */}
        <div
          className="absolute top-0 left-0 right-0 px-3 py-2 text-center"
          style={{
            background: couleurs.cartoucheBg,
            color: couleurs.accent,
          }}
        >
          <p className="text-[9px] font-bold tracking-[0.25em] uppercase">
            {carte.periode}
          </p>
        </div>

        {/* ─── Image/totem central ─── */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
          style={{
            top: 36,
            width: mobile ? '85%' : 158,
            height: mobile ? 210 : 168,
          }}
        >
          {carte.coverUrl && !imageError ? (
            <img
              src={carte.coverUrl}
              alt=""
              className="w-full h-full object-cover rounded-lg"
              style={{ border: `1px solid ${couleurs.bord}55` }}
              onError={() => setImageError(true)}
            />
          ) : (
            <Totem type={carte.totem} color={couleurs.accent} />
          )}
        </div>

        {/* ─── Mot-tribu (en grand) ─── */}
        <div
          className="absolute w-full text-center px-3"
          style={{
            top: mobile ? 258 : 214,
            color: couleurs.motTribu,
            fontFamily: DISPLAY,
            fontWeight: 700,
            fontSize: mobile ? 30 : 26,
            letterSpacing: '0.04em',
            lineHeight: 1,
          }}
        >
          {carte.motTribu}
        </div>

        {/* ─── Filet doré ─── */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: mobile ? 300 : 250,
            width: 40,
            height: 1.5,
            background: couleurs.accent,
            opacity: 0.7,
          }}
        />

        {/* ─── Titre français ─── */}
        <div
          className="absolute w-full text-center px-3"
          style={{
            top: mobile ? 312 : 260,
            color: couleurs.accent,
            fontFamily: DISPLAY,
            fontStyle: 'italic',
            fontSize: mobile ? 14 : 12.5,
            opacity: 0.95,
          }}
        >
          {carte.titreFr}
        </div>

        {/* ─── Sous-titre ─── */}
        <div
          className="absolute w-full text-center px-3"
          style={{
            top: mobile ? 334 : 280,
            color: couleurs.accent,
            fontSize: mobile ? 9 : 8,
            opacity: 0.6,
            letterSpacing: '0.2em',
            fontWeight: 600,
          }}
        >
          {carte.sousTitre}
        </div>

        {/* ─── Figures (mobile uniquement — sur desktop, c'est dans la bulle au survol) ─── */}
        {mobile && (
          <div
            className="absolute w-full text-center px-3"
            style={{
              top: 360,
              color: couleurs.accent,
              fontSize: 8.5,
              opacity: 0.7,
            }}
          >
            {carte.figures}
          </div>
        )}
      </article>

      {/* ─── Bulle au survol (desktop uniquement) ─── */}
      {!mobile && (
        <div
          className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            bottom: 'calc(100% + 10px)',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 240,
            zIndex: 60,
          }}
        >
          <div
            className="rounded-2xl px-5 py-4 text-center"
            style={{
              background: '#FFF6E7',
              border: `1.5px solid ${couleurs.bord}`,
              boxShadow: '0 10px 28px rgba(13, 43, 26, 0.22)',
            }}
          >
            <p
              className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: couleurs.fond }}
            >
              {carte.periode}
            </p>
            <p
              className="leading-snug mb-3"
              style={{
                fontFamily: DISPLAY,
                fontStyle: 'italic',
                fontSize: 13.5,
                color: couleurs.bord,
              }}
            >
              {carte.description}
            </p>
            <div
              className="pt-2 border-t"
              style={{ borderColor: `${couleurs.fond}33` }}
            >
              <p
                className="text-[10px] font-bold tracking-wider"
                style={{ color: couleurs.fond, opacity: 0.85 }}
              >
                {carte.figures}
              </p>
            </div>
          </div>
          {/* Flèche pointant vers la carte */}
          <div
            aria-hidden
            className="mx-auto relative"
            style={{
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '8px solid #FFF6E7',
              marginTop: -1,
              filter: `drop-shadow(0 2px 1px ${couleurs.bord}55)`,
            }}
          />
        </div>
      )}
    </Link>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// TOTEMS SVG (fallback quand coverUrl absente)
// ════════════════════════════════════════════════════════════════════════════

function Totem({ type, color }: { type: CarteTotem; color: string }) {
  switch (type) {
    case 'crown':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke={color} strokeWidth="2.5">
          <path d="M15 70 L25 35 L40 55 L50 25 L60 55 L75 35 L85 70 Z" strokeLinejoin="round" />
          <line x1="15" y1="78" x2="85" y2="78" />
          <circle cx="25" cy="35" r="3" fill={color} />
          <circle cx="50" cy="25" r="3" fill={color} />
          <circle cx="75" cy="35" r="3" fill={color} />
        </svg>
      );
    case 'book-quill':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke={color} strokeWidth="2.5">
          <path d="M20 75 Q20 25 50 25 Q80 25 80 75 L80 80 Q80 78 50 78 Q20 78 20 80 Z" strokeLinejoin="round" />
          <line x1="50" y1="25" x2="50" y2="78" />
          <line x1="70" y1="15" x2="35" y2="50" strokeLinecap="round" />
          <circle cx="33" cy="52" r="2" fill={color} />
        </svg>
      );
    case 'sabers':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke={color} strokeWidth="2.5">
          <line x1="20" y1="20" x2="80" y2="80" strokeLinecap="round" />
          <line x1="80" y1="20" x2="20" y2="80" strokeLinecap="round" />
          <circle cx="50" cy="50" r="7" />
          <circle cx="20" cy="20" r="4" fill={color} />
          <circle cx="80" cy="20" r="4" fill={color} />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke={color} strokeWidth="2.5">
          <path
            d="M50 15 L58 40 L85 40 L63 55 L72 80 L50 65 L28 80 L37 55 L15 40 L42 40 Z"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'map': {
      // Forme schématique de la Guinée (haricot inversé) + marqueurs
      // 5 points représentant les 4 régions naturelles + Conakry
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke={color} strokeWidth="2.5">
          {/* Contour stylisé */}
          <path
            d="M22 32 Q18 25 25 22 Q40 18 55 22 Q72 24 80 32 Q86 42 82 55 Q78 68 68 72 Q55 76 42 72 Q28 68 22 58 Q18 45 22 32 Z"
            strokeLinejoin="round"
          />
          {/* Marqueurs préfectures (5 régions) */}
          <circle cx="30" cy="55" r="3.5" fill={color} />     {/* Conakry / Basse-Guinée */}
          <circle cx="42" cy="32" r="3.5" fill={color} />     {/* Moyenne-Guinée */}
          <circle cx="55" cy="48" r="3.5" fill={color} />     {/* Centre */}
          <circle cx="68" cy="38" r="3.5" fill={color} />     {/* Haute-Guinée */}
          <circle cx="62" cy="62" r="3.5" fill={color} />     {/* Guinée Forestière */}
          {/* Petite étoile boussole au centre */}
          <circle cx="50" cy="50" r="14" strokeWidth="1" opacity="0.4" />
        </svg>
      );
    }
  }
}
