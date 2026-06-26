import { useEffect, useMemo, useState } from 'react';
import {
  BUREAU_ASSEMBLEE,
  CIRCONSCRIPTIONS,
  PREMIER_GOUVERNEMENT,
} from '../data/senag-compagnons-60';
import { CROIX_SECTIONS, CROIX_META } from '../data/senag-croix-1959-60';

/* ============================================================================
 * Palette SENAG — refonte 24 juin 2026 (fond clair, parchemin en accents)
 * ========================================================================== */
const C = {
  // Fond + neutres
  bg: '#FAFAF7',
  bgSoft: '#F1EDE3',
  line: 'rgba(36,28,16,0.08)',
  lineStrong: 'rgba(36,28,16,0.15)',

  // Encres / texte
  ink: '#241c10',
  inkSoft: '#5a4f3f',
  inkMute: '#8a7d68',

  // Or commémoratif (accents)
  gold: '#b8860b',
  goldDeep: '#8a6608',
  goldLight: '#d4a437',

  // Parchemin réservé aux tampons / badges
  paper: '#f4eeda',
  paperDeep: '#e7dcc0',

  // Accents jeux
  terracotta: '#C87355',
  terraDeep: '#9c4a20',
  leather: '#7d5a3e',
  leatherDeep: '#5c3812',
};

const FONT_DISPLAY = '"Fraunces", "Iowan Old Style", Georgia, serif';
const FONT_UI = '"Inter", system-ui, -apple-system, sans-serif';

// Normalisation pour la recherche (insensible casse / accents / apostrophes)
const norm = (s: string) =>
  (s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’\s\-_.]/g, '');

/* ============================================================================
 * COMPOSANT RACINE
 * ========================================================================== */
export default function Senag() {
  // Charger Fraunces + Inter une seule fois
  useEffect(() => {
    if (document.querySelector('link[data-senag-fonts]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap';
    link.setAttribute('data-senag-fonts', 'true');
    document.head.appendChild(link);
  }, []);

  return (
    <main
      style={{
        background: C.bg,
        color: C.ink,
        fontFamily: FONT_UI,
        minHeight: '100vh',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-10">
        <Hero />
        <SectionJeux />
        <BigStats />
        <SectionRegistre60 />
        <SectionCroix />
        <PullQuote />
      </div>
    </main>
  );
}

/* ============================================================================
 * HERO — eyebrow + H1 vedette + lead + 3 compteurs + tampon
 * ========================================================================== */
function Hero() {
  return (
    <section style={{ position: 'relative', padding: '32px 0 40px', borderBottom: `0.5px solid ${C.lineStrong}` }}>
      {/* Tampon SENAG décalé en haut à droite */}
      <Tampon />

      <p
        style={{
          fontFamily: FONT_UI,
          fontSize: 12,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: C.gold,
          fontWeight: 500,
          margin: '0 0 14px',
        }}
      >
        ★ Semaine Nationale des Archives de la Guinée · 25–30 juin 2026
      </p>

      <h1
        style={{
          fontFamily: FONT_DISPLAY,
          fontSize: 'clamp(38px, 7vw, 64px)',
          fontWeight: 500,
          lineHeight: 1.02,
          letterSpacing: '-0.015em',
          margin: '0 0 18px',
          maxWidth: 720,
        }}
      >
        Mémoire en jeu.
      </h1>

      <p
        style={{
          fontFamily: FONT_UI,
          fontSize: 16,
          lineHeight: 1.6,
          color: C.inkSoft,
          maxWidth: 580,
          margin: 0,
        }}
      >
        Trois jeux pour traverser huit siècles d'histoire guinéenne — des plaines du Mandén aux
        institutions d'aujourd'hui. Thème SeNAG&nbsp;: <em>Archives de l'État et Gouvernance publique :
        préserver la mémoire nationale.</em>
      </p>
    </section>
  );
}

function Tampon() {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: 16,
        right: 0,
        width: 96,
        height: 96,
        borderRadius: '50%',
        border: `2px solid ${C.gold}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontFamily: FONT_DISPLAY,
        fontSize: 11,
        letterSpacing: '0.12em',
        color: C.gold,
        textAlign: 'center',
        transform: 'rotate(-8deg)',
        padding: 8,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 6,
          borderRadius: '50%',
          border: `0.5px solid ${C.gold}`,
          pointerEvents: 'none',
        }}
      />
      <span style={{ fontWeight: 500, lineHeight: 1.1 }}>
        SENAG<br />2026
      </span>
      <span style={{ marginTop: 4, fontSize: 14 }}>★</span>
    </div>
  );
}

/* ============================================================================
 * BIG STATS — chiffres-clés en intro des registres
 * ========================================================================== */
function BigStats() {
  const stats = [
    { num: '60', label: 'Compagnons', sub: 'élus le 31 mars 1957' },
    { num: '453', label: 'Dépositaires', sub: 'décrets de 1959-1960' },
    { num: '28.09.58', label: 'Le grand NON', sub: 'au référendum', isDate: true },
  ];

  return (
    <section
      style={{
        padding: '56px 0 48px',
        borderBottom: `0.5px solid ${C.lineStrong}`,
      }}
    >
      <p
        style={{
          fontFamily: FONT_UI,
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: C.goldDeep,
          fontWeight: 500,
          margin: '0 0 10px',
        }}
      >
        Les registres
      </p>
      <h2
        style={{
          fontFamily: FONT_DISPLAY,
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 500,
          margin: '0 0 12px',
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
        }}
      >
        Les visages de l'Indépendance.
      </h2>
      <p
        style={{
          fontFamily: FONT_UI,
          fontSize: 15,
          lineHeight: 1.6,
          color: C.inkSoft,
          maxWidth: 580,
          margin: '0 0 36px',
        }}
      >
        Trois chiffres qui tiennent la mémoire nationale. Derrière eux, des noms — élus, dépositaires,
        anonymes du <strong>NON</strong>. Les registres officiels ci-dessous les recensent un à un.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: 32,
        }}
      >
        {stats.map((s, i) => (
          <div key={i}>
            <div
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: s.isDate ? 'clamp(26px,3.5vw,36px)' : 'clamp(40px,5vw,56px)',
                fontWeight: 500,
                color: C.gold,
                lineHeight: 1,
                marginBottom: 8,
                letterSpacing: '-0.01em',
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontFamily: FONT_UI,
                fontSize: 11,
                fontWeight: 500,
                color: C.ink,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 4,
              }}
            >
              {s.label}
            </div>
            <div
              style={{
                fontFamily: FONT_UI,
                fontSize: 12,
                color: C.inkMute,
                fontStyle: 'italic',
              }}
            >
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================================
 * SECTION JEUX — bento grid : Train vedette + Compagnons & PriMo'
 * ========================================================================== */
function SectionJeux() {
  const [embedded, setEmbedded] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section style={{ padding: '56px 0 48px', borderBottom: `0.5px solid ${C.lineStrong}` }}>
      <p
        style={{
          fontFamily: FONT_UI,
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: C.goldDeep,
          fontWeight: 500,
          margin: '0 0 10px',
        }}
      >
        Jeux de mémoire
      </p>
      <h2
        style={{
          fontFamily: FONT_DISPLAY,
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 500,
          margin: '0 0 12px',
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
        }}
      >
        Jouez et découvrez l'histoire.
      </h2>
      <p
        style={{
          fontFamily: FONT_UI,
          fontSize: 15,
          lineHeight: 1.6,
          color: C.inkSoft,
          maxWidth: 580,
          margin: '0 0 32px',
        }}
      >
        Trois jeux pour traverser la mémoire guinéenne — depuis les royaumes médiévaux jusqu'à
        la République d'aujourd'hui.
      </p>

      {/* Bento : Train vedette + Colonne droite (Compagnons + PriMo' empilés) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
          marginBottom: 24,
        }}
      >
        <JeuCardHero
          id="train"
          tag="🚂 Le voyage"
          titre="Train Guinée"
          tagline="Remettez en ordre les événements marquants — du royaume Soso à l'investiture du président Doumbouya."
          meta="56 événements · 7 ères · 3 niveaux"
          url="/senag/jeu"
          accentBg={C.terracotta}
          accentText="#fff8ee"
          accentTag="rgba(255,248,238,0.18)"
          hovered={hovered === 'train'}
          onHover={(h) => setHovered(h ? 'train' : null)}
          illustration={<TrainSvg />}
        />

        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 16 }}>
          <JeuCardMid
            id="compagnons"
            tag="★ La carte"
            titre="Puzzle Compagnons"
            tagline="Place les 34 figures de 1957 sur leur circonscription d'origine."
            meta="34 pièces · drag-and-drop"
            url="/jeux/compagnons/compagnons.html"
            external
            onEmbed={() => setEmbedded(embedded === 'compagnons' ? null : 'compagnons')}
            embedded={embedded === 'compagnons'}
            accentBg={C.ink}
            accentText={C.paper}
            accentTag={C.gold}
            accentTagText={C.ink}
            hovered={hovered === 'compagnons'}
            onHover={(h) => setHovered(h ? 'compagnons' : null)}
            illustration={<GuineeMapSvg />}
          />

          <JeuCardMid
            id="primo"
            tag="🏛 Le palais"
            titre="PriMo'"
            tagline="Replacez les 17 Premiers ministres dans l'ordre, de Béavogui à Bah Oury."
            meta="17 PM · 1972 → 2026"
            url="/senag/primo"
            accentBg={C.leather}
            accentText={C.paper}
            accentTag={C.goldLight}
            accentTagText={C.ink}
            hovered={hovered === 'primo'}
            onHover={(h) => setHovered(h ? 'primo' : null)}
            illustration={<FauteuilSvg />}
          />
        </div>
      </div>

      {/* Bandeau Défi de groupe — Puzzle Compagnons */}
      <a
        href="/session-compagnons/new"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '18px 22px',
          background: C.bgSoft,
          color: C.ink,
          textDecoration: 'none',
          borderRadius: 12,
          border: `0.5px solid ${C.lineStrong}`,
          transition: 'background 0.2s, transform 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = C.paperDeep;
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = C.bgSoft;
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: C.gold,
            color: C.ink,
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontWeight: 500,
            fontSize: 20,
            fontFamily: FONT_DISPLAY,
          }}
          aria-hidden
        >
          ⚐
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              display: 'block',
              fontFamily: FONT_DISPLAY,
              fontWeight: 500,
              fontSize: 17,
              letterSpacing: '-0.005em',
              marginBottom: 2,
            }}
          >
            Défi de groupe — Puzzle Compagnons
          </span>
          <span
            style={{
              display: 'block',
              fontSize: 13,
              color: C.inkSoft,
              lineHeight: 1.5,
            }}
          >
            Classe, atelier, institution&nbsp;: créez une session, projetez le QR code, mesurez qui
            replace les Compagnons le plus vite.
          </span>
        </span>
        <span
          style={{
            background: C.ink,
            color: C.paper,
            padding: '8px 16px',
            fontFamily: FONT_UI,
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: '0.08em',
            flexShrink: 0,
            borderRadius: 8,
          }}
        >
          LANCER →
        </span>
      </a>

      {/* Iframe du Puzzle Compagnons */}
      {embedded === 'compagnons' && (
        <div
          style={{
            background: '#fff',
            border: `0.5px solid ${C.lineStrong}`,
            borderRadius: 12,
            overflow: 'hidden',
            marginTop: 20,
          }}
        >
          <iframe
            src="/jeux/compagnons/compagnons.html"
            title="Puzzle Compagnons"
            style={{ width: '100%', height: '90vh', border: 0, display: 'block' }}
          />
        </div>
      )}
    </section>
  );
}

/* ----- Carte vedette (Train) ----- */
function JeuCardHero({
  tag,
  titre,
  tagline,
  meta,
  url,
  accentBg,
  accentText,
  accentTag,
  hovered,
  onHover,
  illustration,
}: {
  id: string;
  tag: string;
  titre: string;
  tagline: string;
  meta: string;
  url: string;
  accentBg: string;
  accentText: string;
  accentTag: string;
  hovered: boolean;
  onHover: (h: boolean) => void;
  illustration: React.ReactNode;
}) {
  return (
    <a
      href={url}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      style={{
        position: 'relative',
        background: accentBg,
        color: accentText,
        borderRadius: 16,
        padding: 28,
        minHeight: 320,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textDecoration: 'none',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? `0 12px 32px rgba(36,28,16,0.18)` : `0 1px 0 ${C.line}`,
        transition: 'transform 0.25s, box-shadow 0.25s',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: -24,
          bottom: -24,
          width: 320,
          opacity: hovered ? 0.28 : 0.2,
          color: accentText,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
        }}
      >
        {illustration}
      </div>

      <span
        style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          background: accentTag,
          color: accentText,
          fontFamily: FONT_UI,
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 500,
          padding: '6px 12px',
          borderRadius: 999,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {tag}
      </span>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 500,
            lineHeight: 1.05,
            margin: '0 0 12px',
            letterSpacing: '-0.01em',
          }}
        >
          {titre}
        </h3>
        <p
          style={{
            fontFamily: FONT_UI,
            fontSize: 14,
            lineHeight: 1.55,
            opacity: 0.92,
            margin: '0 0 16px',
            maxWidth: 380,
          }}
        >
          {tagline}
        </p>
        <p
          style={{
            fontFamily: FONT_UI,
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: 0.7,
            margin: '0 0 20px',
          }}
        >
          {meta}
        </p>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: FONT_UI,
            fontWeight: 500,
            fontSize: 14,
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.25s',
          }}
        >
          Embarquer →
        </span>
      </div>
    </a>
  );
}

/* ----- Carte moyenne (Compagnons, PriMo') ----- */
function JeuCardMid({
  tag,
  titre,
  tagline,
  meta,
  url,
  external,
  onEmbed,
  embedded,
  accentBg,
  accentText,
  accentTag,
  accentTagText,
  hovered,
  onHover,
  illustration,
}: {
  id: string;
  tag: string;
  titre: string;
  tagline: string;
  meta: string;
  url: string;
  external?: boolean;
  onEmbed?: () => void;
  embedded?: boolean;
  accentBg: string;
  accentText: string;
  accentTag: string;
  accentTagText: string;
  hovered: boolean;
  onHover: (h: boolean) => void;
  illustration: React.ReactNode;
}) {
  const Wrapper: any = external ? 'div' : 'a';
  const wrapperProps: any = external ? {} : { href: url };

  return (
    <Wrapper
      {...wrapperProps}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      style={{
        position: 'relative',
        background: accentBg,
        color: accentText,
        borderRadius: 14,
        padding: 22,
        minHeight: 152,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textDecoration: 'none',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? `0 10px 24px rgba(36,28,16,0.15)` : `0 1px 0 ${C.line}`,
        transition: 'transform 0.25s, box-shadow 0.25s',
        cursor: 'pointer',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: -14,
          bottom: -14,
          width: 130,
          opacity: hovered ? 0.3 : 0.22,
          color: accentText,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
        }}
      >
        {illustration}
      </div>

      <span
        style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          background: accentTag,
          color: accentTagText,
          fontFamily: FONT_UI,
          fontSize: 10,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 500,
          padding: '4px 10px',
          borderRadius: 999,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {tag}
      </span>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 22,
            fontWeight: 500,
            lineHeight: 1.1,
            margin: '10px 0 6px',
            letterSpacing: '-0.005em',
          }}
        >
          {titre}
        </h3>
        <p
          style={{
            fontFamily: FONT_UI,
            fontSize: 12.5,
            lineHeight: 1.5,
            opacity: 0.88,
            margin: '0 0 10px',
          }}
        >
          {tagline}
        </p>
        <p
          style={{
            fontFamily: FONT_UI,
            fontSize: 10,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: 0.65,
            margin: '0 0 10px',
          }}
        >
          {meta}
        </p>

        {external && onEmbed ? (
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                fontFamily: FONT_UI,
                fontWeight: 500,
                fontSize: 12,
                color: accentText,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              Plein écran →
            </a>
            <span style={{ opacity: 0.4 }}>·</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onEmbed();
              }}
              style={{
                fontFamily: FONT_UI,
                fontWeight: 500,
                fontSize: 12,
                color: accentText,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              {embedded ? 'Masquer ici' : 'Jouer ici'}
            </button>
          </div>
        ) : (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: FONT_UI,
              fontWeight: 500,
              fontSize: 13,
              transform: hovered ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform 0.25s',
            }}
          >
            Jouer →
          </span>
        )}
      </div>
    </Wrapper>
  );
}

/* ============================================================================
 * Illustrations SVG minimalistes au trait
 * ========================================================================== */
function TrainSvg() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="50" cy="80" r="18" />
      <circle cx="100" cy="80" r="18" />
      <circle cx="150" cy="80" r="14" />
      <circle cx="50" cy="80" r="4" />
      <circle cx="100" cy="80" r="4" />
      <circle cx="150" cy="80" r="3" />
      <rect x="30" y="40" width="100" height="35" rx="4" />
      <rect x="135" y="50" width="35" height="25" rx="2" />
      <rect x="50" y="20" width="22" height="22" />
      <circle cx="61" cy="18" r="3" />
      <rect x="80" y="48" width="14" height="14" rx="1" />
      <rect x="105" y="48" width="14" height="14" rx="1" />
      <line x1="10" y1="100" x2="190" y2="100" />
      <line x1="10" y1="104" x2="190" y2="104" />
      <line x1="25" y1="106" x2="25" y2="110" />
      <line x1="55" y1="106" x2="55" y2="110" />
      <line x1="85" y1="106" x2="85" y2="110" />
      <line x1="115" y1="106" x2="115" y2="110" />
      <line x1="145" y1="106" x2="145" y2="110" />
      <line x1="175" y1="106" x2="175" y2="110" />
    </svg>
  );
}

function GuineeMapSvg() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M28 18 L22 32 L18 50 L22 70 L32 86 L52 90 L72 84 L82 68 L80 50 L74 32 L62 22 L48 18 Z" />
      <circle cx="42" cy="35" r="2.5" fill="currentColor" />
      <circle cx="58" cy="42" r="2.5" fill="currentColor" />
      <circle cx="48" cy="52" r="2.5" fill="currentColor" />
      <circle cx="65" cy="58" r="2.5" fill="currentColor" />
      <circle cx="38" cy="65" r="2.5" fill="currentColor" />
      <circle cx="55" cy="72" r="2.5" fill="currentColor" />
      <circle cx="70" cy="48" r="2" fill="currentColor" />
    </svg>
  );
}

function FauteuilSvg() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="15" y="80" width="70" height="6" rx="1" />
      <rect x="28" y="55" width="44" height="28" rx="3" />
      <rect x="28" y="35" width="44" height="22" rx="3" />
      <line x1="28" y1="48" x2="22" y2="50" />
      <line x1="22" y1="50" x2="22" y2="68" />
      <line x1="72" y1="48" x2="78" y2="50" />
      <line x1="78" y1="50" x2="78" y2="68" />
      <line x1="32" y1="80" x2="32" y2="88" />
      <line x1="68" y1="80" x2="68" y2="88" />
      <line x1="50" y1="15" x2="50" y2="40" />
      <rect x="50" y="15" width="18" height="13" />
    </svg>
  );
}

/* ============================================================================
 * SECTION REGISTRE 60 COMPAGNONS — structure conservée, style modernisé
 * ========================================================================== */
function SectionRegistre60() {
  const [open, setOpen] = useState(false);

  return (
    <section style={{ padding: '56px 0', borderBottom: `0.5px solid ${C.lineStrong}` }}>
      <SectionTitle
        eyebrow="Registre officiel"
        title="Les 60 Compagnons de l'Indépendance"
        subtitle="Conseillers territoriaux élus le 31 mars 1957 · députés constituants le 2 octobre 1958"
        onToggle={() => setOpen((v) => !v)}
        open={open}
      />
      {open && (
        <>
          <p
            style={{
              color: C.inkSoft,
              lineHeight: 1.75,
              fontSize: 15,
              marginBottom: 28,
              fontFamily: FONT_UI,
              maxWidth: 720,
            }}
          >
            Le 31 mars 1957, 60 conseillers territoriaux sont élus dans 26 circonscriptions
            de l'Assemblée territoriale de Guinée française. Le 2 octobre 1958 — au lendemain
            du « NON » — ils deviennent les députés constituants de la République de Guinée.
          </p>

          <h3 style={subhead}>Bureau de l'Assemblée nationale constituante</h3>
          <div style={tableWrap}>
            <table style={table}>
              <tbody>
                {BUREAU_ASSEMBLEE.map((b, i) => (
                  <tr key={i}>
                    <td style={{ ...td, width: 220, fontWeight: 500, color: C.goldDeep }}>{b.fonction}</td>
                    <td style={td}>{b.nom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={subhead}>Membres par circonscription</h3>
          <div style={tableWrap}>
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>Circonscription</th>
                  <th style={th}>Conseillers territoriaux</th>
                </tr>
              </thead>
              <tbody>
                {CIRCONSCRIPTIONS.map((c, i) => (
                  <tr key={i}>
                    <td style={{ ...td, fontWeight: 500, color: C.goldDeep, whiteSpace: 'nowrap' }}>
                      {c.circonscription}
                    </td>
                    <td style={td}>
                      {c.sansSiege1957 ? (
                        <em style={{ color: C.inkSoft }}>{c.membres.join(' · ')}</em>
                      ) : (
                        c.membres.join(' · ')
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={subhead}>Premier gouvernement de la Guinée indépendante (2 octobre 1958)</h3>
          <div style={tableWrap}>
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>Portefeuille</th>
                  <th style={th}>Titulaire</th>
                </tr>
              </thead>
              <tbody>
                {PREMIER_GOUVERNEMENT.map((p, i) => (
                  <tr key={i}>
                    <td style={{ ...td, fontWeight: 500, color: C.goldDeep }}>{p.portefeuille}</td>
                    <td style={td}>{p.titulaire}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}

/* ============================================================================
 * SECTION CROIX — structure conservée, style modernisé
 * ========================================================================== */
function SectionCroix() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [expandAll, setExpandAll] = useState(false);

  const filtered = useMemo(() => {
    const q = norm(search);
    if (!q) return CROIX_SECTIONS;
    return CROIX_SECTIONS.map((s) => ({
      ...s,
      entries: s.entries.filter(
        (e) => norm(e.nom).includes(q) || norm(e.lieu).includes(q) || norm(e.profession).includes(q)
      ),
    })).filter((s) => s.entries.length > 0);
  }, [search]);

  const totalShown = filtered.reduce((acc, s) => acc + s.entries.length, 0);

  return (
    <section style={{ padding: '56px 0' }}>
      <SectionTitle
        eyebrow={`${CROIX_META.total} dépositaires recensés`}
        title="Les Dépositaires de la Croix du Compagnon"
        subtitle="Décrets N°227 & N°228/PG du 1er octobre 1959 · décret du 2 octobre 1960"
        onToggle={() => setOpen((v) => !v)}
        open={open}
      />
      {open && (
        <>
          <p
            style={{
              color: C.ink,
              lineHeight: 1.75,
              fontSize: 15,
              marginBottom: 16,
              maxWidth: 720,
              fontFamily: FONT_UI,
            }}
          >
            Les Décrets <strong>N°227 et N°228/PG</strong> du 1<sup>er</sup> octobre 1959, complétés
            par celui du 2 octobre 1960, instituent la <em>Croix du Compagnon de l'Indépendance</em>
            et désignent <strong>{CROIX_META.total}</strong> dépositaires&nbsp;: militants du PDG-RDA,
            syndicalistes, instituteurs, anciens combattants, jeunes du RDA, femmes des marchés,
            anonymes du <strong>NON</strong> du 28 septembre 1958. Une mémoire populaire de
            l'indépendance.
          </p>
          <p
            style={{
              color: C.inkSoft,
              lineHeight: 1.7,
              marginBottom: 20,
              fontSize: 14,
              fontStyle: 'italic',
              fontFamily: FONT_UI,
            }}
          >
            {CROIX_META.avertissement}
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un nom, un lieu ou une profession…"
              style={{
                flex: '1 1 280px',
                padding: '10px 14px',
                border: `0.5px solid ${C.lineStrong}`,
                background: '#fff',
                fontSize: 14,
                fontFamily: FONT_UI,
                color: C.ink,
                borderRadius: 8,
                outline: 'none',
              }}
            />
            <button
              onClick={() => setExpandAll((v) => !v)}
              style={{
                padding: '10px 18px',
                background: 'transparent',
                color: C.ink,
                border: `0.5px solid ${C.lineStrong}`,
                cursor: 'pointer',
                fontWeight: 500,
                fontFamily: FONT_UI,
                fontSize: 13,
                borderRadius: 8,
              }}
            >
              {expandAll ? 'Tout replier' : 'Tout déplier'}
            </button>
          </div>
          {search && (
            <p style={{ fontSize: 14, color: C.goldDeep, marginBottom: 16, fontFamily: FONT_UI }}>
              {totalShown} résultat{totalShown > 1 ? 's' : ''} pour « {search} »
            </p>
          )}
          {filtered.length === 0 && (
            <p style={{ color: C.inkSoft, fontStyle: 'italic', fontFamily: FONT_UI }}>Aucun résultat.</p>
          )}
          {filtered.map((sec, i) => (
            <CroixSectionBlock key={i} section={sec} forceOpen={expandAll || !!search} />
          ))}
        </>
      )}
    </section>
  );
}

function CroixSectionBlock({
  section,
  forceOpen,
}: {
  section: (typeof CROIX_SECTIONS)[number];
  forceOpen: boolean;
}) {
  const [open, setOpen] = useState(false);
  const isOpen = forceOpen || open;
  return (
    <details
      open={isOpen}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
      style={{
        background: '#fff',
        border: `0.5px solid ${C.lineStrong}`,
        marginBottom: 8,
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      <summary
        style={{
          cursor: 'pointer',
          padding: '14px 18px',
          fontWeight: 500,
          color: C.ink,
          background: C.bgSoft,
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          fontFamily: FONT_UI,
          fontSize: 14,
        }}
      >
        <span>
          {section.section}{' '}
          <span style={{ fontWeight: 400, color: C.inkSoft, fontSize: 13 }}>· {section.decret}</span>
        </span>
        <span
          style={{
            background: C.gold,
            color: C.ink,
            padding: '2px 12px',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 500,
            flexShrink: 0,
            fontFamily: FONT_UI,
          }}
        >
          {section.entries.length}
        </span>
      </summary>
      <ol
        style={{
          margin: 0,
          padding: '14px 18px 18px 38px',
          lineHeight: 1.8,
          fontSize: 14,
          fontFamily: FONT_UI,
        }}
      >
        {section.entries.map((e) => (
          <li key={e.num} value={e.num} style={{ marginBottom: 2 }}>
            {e.titre && <span style={{ color: C.inkSoft }}>{e.titre} </span>}
            <strong style={{ fontWeight: 500 }}>{e.nom}</strong>
            {e.profession && <span style={{ color: C.inkSoft }}>, {e.profession}</span>}
            {e.lieu && <span style={{ color: C.goldDeep }}> — {e.lieu}</span>}
          </li>
        ))}
      </ol>
    </details>
  );
}

/* ============================================================================
 * Citation Sékou Touré — sobre, en bas
 * ========================================================================== */
function PullQuote() {
  return (
    <section
      style={{
        padding: '64px 16px 24px',
        textAlign: 'center',
      }}
    >
      <blockquote
        style={{
          fontFamily: FONT_DISPLAY,
          fontStyle: 'italic',
          fontSize: 'clamp(18px, 2.4vw, 24px)',
          fontWeight: 400,
          lineHeight: 1.5,
          color: C.ink,
          maxWidth: 720,
          margin: '0 auto 14px',
          letterSpacing: '-0.005em',
        }}
      >
        « Il n'y a pas de dignité sans liberté&nbsp;: nous préférons la pauvreté dans la liberté
        à l'opulence dans l'esclavage. »
      </blockquote>
      <p
        style={{
          fontFamily: FONT_UI,
          fontSize: 11,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: C.gold,
          fontWeight: 500,
          margin: 0,
        }}
      >
        Ahmed Sékou Touré · Conakry, 25 août 1958
      </p>
    </section>
  );
}

/* ============================================================================
 * SectionTitle helper
 * ========================================================================== */
function SectionTitle({
  eyebrow,
  title,
  subtitle,
  onToggle,
  open,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  onToggle?: () => void;
  open?: boolean;
}) {
  return (
    <div style={{ marginBottom: 28 }}>
      <p
        style={{
          fontFamily: FONT_UI,
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: C.goldDeep,
          fontWeight: 500,
          margin: '0 0 8px',
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: FONT_DISPLAY,
          fontSize: 'clamp(26px, 3.5vw, 36px)',
          fontWeight: 500,
          margin: '0 0 8px',
          color: C.ink,
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: FONT_UI,
            color: C.inkSoft,
            margin: '0 0 14px',
            fontSize: 14,
            lineHeight: 1.5,
            maxWidth: 640,
          }}
        >
          {subtitle}
        </p>
      )}
      {onToggle && (
        <button
          onClick={onToggle}
          style={{
            padding: '8px 16px',
            background: open ? C.ink : 'transparent',
            color: open ? C.paper : C.ink,
            border: `0.5px solid ${C.ink}`,
            cursor: 'pointer',
            fontSize: 13,
            fontFamily: FONT_UI,
            fontWeight: 500,
            borderRadius: 8,
            transition: 'all 0.2s',
          }}
        >
          {open ? '▲ Replier' : '▼ Consulter le registre'}
        </button>
      )}
    </div>
  );
}

/* ============================================================================
 * Styles partagés (tableaux registres)
 * ========================================================================== */
const subhead: React.CSSProperties = {
  fontFamily: FONT_DISPLAY,
  fontSize: 18,
  fontWeight: 500,
  margin: '32px 0 12px',
  paddingBottom: 8,
  borderBottom: `0.5px solid ${C.gold}`,
  color: C.ink,
  letterSpacing: '-0.005em',
};

const tableWrap: React.CSSProperties = {
  background: '#fff',
  border: `0.5px solid ${C.lineStrong}`,
  borderRadius: 8,
  overflow: 'auto',
};

const table: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: 14,
  fontFamily: FONT_UI,
};

const th: React.CSSProperties = {
  textAlign: 'left',
  padding: '12px 16px',
  background: C.bgSoft,
  borderBottom: `0.5px solid ${C.lineStrong}`,
  fontWeight: 500,
  fontFamily: FONT_UI,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  fontSize: 11,
  color: C.inkSoft,
};

const td: React.CSSProperties = {
  padding: '10px 16px',
  borderBottom: `0.5px solid ${C.line}`,
  verticalAlign: 'top',
  fontFamily: FONT_UI,
};
