import { useEffect, useMemo, useRef, useState } from 'react';
import {
  BUREAU_ASSEMBLEE,
  CIRCONSCRIPTIONS,
  PREMIER_GOUVERNEMENT,
  SOURCES,
} from '../data/senag-compagnons-60';
import { CROIX_SECTIONS, CROIX_META } from '../data/senag-croix-1959-60';

// Palette SENAG (papier d'archive / or commémoratif / noir d'encre)
const C = {
  ink: '#241c10',
  inkSoft: '#5b4f3a',
  gold: '#b8860b',
  goldDeep: '#8a6608',
  paper: '#f4eeda',
  paperDeep: '#e7dcc0',
  line: '#cdbf9c',
};

// Normalisation pour la recherche (insensible casse / accents / apostrophes)
const norm = (s: string) =>
  (s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’\s\-_.]/g, '');

export default function Senag() {
  const mapRef = useRef<HTMLDivElement>(null);

  // Chargement inline de la carte décorative (Guinée + carré symbolique Conakry)
  useEffect(() => {
    let cancelled = false;
    fetch('/maps/gn-conakry-senag.svg')
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(`SVG ${r.status}`))))
      .then((svg) => {
        if (!cancelled && mapRef.current) mapRef.current.innerHTML = svg;
      })
      .catch((err) => console.warn('SeNAG hero map:', err));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main
      style={{
        background: `radial-gradient(120% 80% at 50% -10%, #faf5e6 0%, ${C.paper} 55%, ${C.paperDeep} 130%)`,
        color: C.ink,
        fontFamily: '"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* HERO */}
        <section className="text-center pb-8" style={{ borderBottom: `2px solid ${C.ink}`, position: 'relative' }}>
          <div style={eyebrowStyle}>Semaine Nationale des Archives de la Guinée</div>
          <h1 style={{ fontSize: 'clamp(28px,6vw,46px)', fontWeight: 800, margin: '0 0 6px' }}>SeNAG 2026</h1>
          <p style={{ fontStyle: 'italic', color: C.inkSoft, margin: '0 0 4px' }}>
            « Archives de l'État et Gouvernance publique : préserver la mémoire nationale »
          </p>
          <p style={{ color: C.inkSoft, margin: 0 }}>25&nbsp;–&nbsp;30 juin 2026 · Lac Gbassikolo, Conakry</p>
          <div
            ref={mapRef}
            style={{ maxWidth: 620, margin: '24px auto 0' }}
            role="img"
            aria-label="Carte de la Guinée — Conakry mise en avant"
          />
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: -6, height: 2, background: C.gold }} />
        </section>

        <SectionPuzzle />
        <SectionRegistre60 />
        <SectionCroix />

        <footer style={{ marginTop: 64, padding: '24px 0', borderTop: `1px solid ${C.line}`, fontSize: 13, color: C.inkSoft }}>
          <p style={{ margin: '0 0 8px', fontWeight: 600 }}>Sources des registres</p>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            {SOURCES.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <p style={{ marginTop: 12, fontStyle: 'italic' }}>
            Document de travail commémoratif. Vérification ponctuelle recommandée au Journal officiel
            de la Guinée française (avril 1957) avant publication définitive.
          </p>
        </footer>
      </div>
    </main>
  );
}

/* ============ SECTION 1 — PUZZLE ============ */
function SectionPuzzle() {
  const [embed, setEmbed] = useState(false);
  return (
    <section style={{ padding: '48px 0', borderBottom: `1px solid ${C.line}` }}>
      <SectionTitle eyebrow="Jeu de mémoire" title="La Carte des Compagnons" />
      <p style={{ color: C.inkSoft, lineHeight: 1.7, maxWidth: 720, margin: '0 auto 24px', textAlign: 'center' }}>
        Place chaque Compagnon sur sa circonscription d'origine — les 60 conseillers territoriaux
        élus le 31 mars 1957, devenus députés constituants le 2 octobre 1958, complétés par les
        bénéficiaires de la Croix du Compagnon de l'Indépendance.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
        <a
          href="/jeux/compagnons/compagnons.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '14px 24px',
            background: C.ink,
            color: C.paper,
            textDecoration: 'none',
            fontWeight: 700,
            fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
            border: `2px solid ${C.ink}`,
            boxShadow: `3px 3px 0 ${C.gold}`,
            letterSpacing: '0.04em',
          }}
        >
          Jouer en plein écran →
        </a>
        <button
          onClick={() => setEmbed((v) => !v)}
          style={{
            padding: '14px 24px',
            background: 'transparent',
            color: C.ink,
            border: `2px solid ${C.ink}`,
            fontWeight: 600,
            fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
            cursor: 'pointer',
            boxShadow: `3px 3px 0 ${C.ink}`,
            letterSpacing: '0.04em',
          }}
        >
          {embed ? 'Masquer le jeu' : 'Jouer ici'}
        </button>
      </div>

      {/* ── Bandeau : Lancer une session de groupe ── */}
      <a
        href="/session-compagnons/new"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          maxWidth: 720,
          margin: '0 auto 24px',
          padding: '14px 18px',
          background: C.ink,
          color: C.paper,
          textDecoration: 'none',
          border: `2px solid ${C.ink}`,
          boxShadow: `4px 4px 0 ${C.gold}`,
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
            fontWeight: 700,
            fontSize: 22,
            fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
          }}
        >
          ⚐
        </span>
        <span style={{ flex: 1 }}>
          <span style={{ display: 'block', fontWeight: 700, fontSize: 15, fontFamily: '"Gill Sans","Futura",system-ui,sans-serif', letterSpacing: '0.04em' }}>
            Défi de groupe — classe, atelier, institution
          </span>
          <span style={{ display: 'block', fontSize: 13, opacity: 0.75, marginTop: 2 }}>
            Crée une session, projette le QR code, mesure qui replace les Compagnons le plus vite.
          </span>
        </span>
        <span
          style={{
            background: C.gold,
            color: C.ink,
            padding: '6px 14px',
            fontWeight: 700,
            fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
            fontSize: 13,
            letterSpacing: '0.04em',
            flexShrink: 0,
          }}
        >
          LANCER →
        </span>
      </a>

      {embed && (
        <div style={{ background: '#fff', border: `2px solid ${C.ink}`, boxShadow: `6px 6px 0 ${C.gold}`, overflow: 'hidden' }}>
          <iframe
            src="/jeux/compagnons/compagnons.html"
            title="La Carte des Compagnons — jeu de mémoire SENAG"
            style={{ width: '100%', height: '90vh', border: 0, display: 'block' }}
          />
        </div>
      )}
    </section>
  );
}

/* ============ SECTION 2 — REGISTRE 60 COMPAGNONS ============ */
function SectionRegistre60() {
  const [open, setOpen] = useState(true);
  return (
    <section style={{ padding: '48px 0', borderBottom: `1px solid ${C.line}` }}>
      <SectionTitle
        eyebrow="Registre officiel"
        title="Les 60 Compagnons de l'Indépendance"
        subtitle="Conseillers territoriaux élus le 31 mars 1957 · députés constituants le 2 octobre 1958"
        onToggle={() => setOpen((v) => !v)}
        open={open}
      />
      {open && (
        <>
          <h3 style={subhead}>Bureau de l'Assemblée nationale constituante</h3>
          <div style={tableWrap}>
            <table style={table}>
              <tbody>
                {BUREAU_ASSEMBLEE.map((b, i) => (
                  <tr key={i}>
                    <td style={{ ...td, width: 220, fontWeight: 600, color: C.goldDeep }}>{b.fonction}</td>
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
                    <td style={{ ...td, fontWeight: 600, color: C.goldDeep, whiteSpace: 'nowrap' }}>{c.circonscription}</td>
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
                    <td style={{ ...td, fontWeight: 600, color: C.goldDeep }}>{p.portefeuille}</td>
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

/* ============ SECTION 3 — DÉPOSITAIRES DE LA CROIX ============ */
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
    <section style={{ padding: '48px 0' }}>
      <SectionTitle
        eyebrow={`${CROIX_META.total} dépositaires recensés`}
        title="Les Dépositaires de la Croix du Compagnon"
        subtitle="Décrets N°227 & N°228/PG du 1er octobre 1959 · décret du 2 octobre 1960"
        onToggle={() => setOpen((v) => !v)}
        open={open}
      />
      {open && (
        <>
          <p style={{ color: C.inkSoft, lineHeight: 1.7, marginBottom: 16, fontSize: 14, fontStyle: 'italic' }}>
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
                border: `2px solid ${C.ink}`,
                background: '#fff',
                fontSize: 15,
                fontFamily: 'inherit',
                color: C.ink,
              }}
            />
            <button
              onClick={() => setExpandAll((v) => !v)}
              style={{
                padding: '10px 18px',
                background: 'transparent',
                color: C.ink,
                border: `2px solid ${C.ink}`,
                cursor: 'pointer',
                fontWeight: 600,
                fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
              }}
            >
              {expandAll ? 'Tout replier' : 'Tout déplier'}
            </button>
          </div>
          {search && (
            <p style={{ fontSize: 14, color: C.goldDeep, marginBottom: 16 }}>
              {totalShown} résultat{totalShown > 1 ? 's' : ''} pour « {search} »
            </p>
          )}
          {filtered.length === 0 && <p style={{ color: C.inkSoft, fontStyle: 'italic' }}>Aucun résultat.</p>}
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
      style={{ background: '#fff', border: `1px solid ${C.line}`, marginBottom: 8 }}
    >
      <summary
        style={{
          cursor: 'pointer',
          padding: '12px 16px',
          fontWeight: 600,
          color: C.ink,
          background: C.paperDeep,
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span>
          {section.section}{' '}
          <span style={{ fontWeight: 400, color: C.inkSoft, fontSize: 13 }}>· {section.decret}</span>
        </span>
        <span style={{ background: C.gold, color: C.ink, padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
          {section.entries.length}
        </span>
      </summary>
      <ol style={{ margin: 0, padding: '12px 16px 16px 36px', lineHeight: 1.8, fontSize: 14 }}>
        {section.entries.map((e) => (
          <li key={e.num} value={e.num} style={{ marginBottom: 2 }}>
            {e.titre && <span style={{ color: C.inkSoft }}>{e.titre} </span>}
            <strong>{e.nom}</strong>
            {e.profession && <span style={{ color: C.inkSoft }}>, {e.profession}</span>}
            {e.lieu && <span style={{ color: C.goldDeep }}> — {e.lieu}</span>}
          </li>
        ))}
      </ol>
    </details>
  );
}

/* ============ Utilitaires ============ */
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
    <div style={{ textAlign: 'center', marginBottom: 24 }}>
      <div style={eyebrowStyle}>{eyebrow}</div>
      <h2 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 800, margin: 0, color: C.ink }}>{title}</h2>
      {subtitle && (
        <p style={{ color: C.inkSoft, fontStyle: 'italic', marginTop: 6, marginBottom: 0, fontSize: 15 }}>{subtitle}</p>
      )}
      {onToggle && (
        <button
          onClick={onToggle}
          style={{
            marginTop: 12,
            padding: '6px 14px',
            background: 'transparent',
            color: C.ink,
            border: `1px solid ${C.ink}`,
            cursor: 'pointer',
            fontSize: 13,
            fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
            fontWeight: 600,
          }}
        >
          {open ? 'Replier ▲' : 'Déplier ▼'}
        </button>
      )}
    </div>
  );
}

const eyebrowStyle: React.CSSProperties = {
  letterSpacing: '0.32em',
  textTransform: 'uppercase',
  fontSize: 11,
  fontWeight: 600,
  color: C.goldDeep,
  fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
  marginBottom: 6,
};

const subhead: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  margin: '32px 0 12px',
  paddingBottom: 6,
  borderBottom: `1px solid ${C.gold}`,
  color: C.ink,
};

const tableWrap: React.CSSProperties = {
  background: '#fff',
  border: `1px solid ${C.line}`,
  overflow: 'auto',
};

const table: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: 14,
};

const th: React.CSSProperties = {
  textAlign: 'left',
  padding: '10px 14px',
  background: C.paperDeep,
  borderBottom: `2px solid ${C.ink}`,
  fontWeight: 700,
  fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
  letterSpacing: '0.02em',
  fontSize: 13,
};

const td: React.CSSProperties = {
  padding: '8px 14px',
  borderBottom: `1px solid ${C.line}`,
  verticalAlign: 'top',
};
