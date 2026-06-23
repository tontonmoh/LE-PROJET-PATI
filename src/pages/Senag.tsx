import { useMemo, useState } from 'react';
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
  // Accents secondaires pour le menu des jeux (chaleur)
  terracotta: '#c9622e',
  terraDeep: '#9c4a20',
  leather: '#7c4a1c',
  leatherDeep: '#5c3812',
};

// Normalisation pour la recherche (insensible casse / accents / apostrophes)
const norm = (s: string) =>
  (s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’\s\-_.]/g, '');

export default function Senag() {
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
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: -6, height: 2, background: C.gold }} />
        </section>

        <SectionJeux />
        <PullQuote />
        <BigStats />
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

/* ============ SECTION 1 — MENU DES JEUX SENAG ============ */
function SectionJeux() {
  const [embedded, setEmbedded] = useState<string | null>(null);

  const JEUX = [
    {
      id: 'compagnons',
      titre: 'Puzzle Compagnons',
      tagline: 'Place les 34 figures de 1957 sur leur circonscription d\'origine.',
      meta: '34 pièces · drag-and-drop · chrono',
      url: '/jeux/compagnons/compagnons.html',
      session: '/session-compagnons/new',
      statut: 'actif' as const,
      external: true as const,
      accent: C.gold,
      accentDeep: C.goldDeep,
      glyph: '★',
    },
    {
      id: 'train',
      titre: 'Train Guinée',
      tagline: 'Remets en ordre les événements marquants — du royaume Soso à l\'investiture du président Doumbouya.',
      meta: '56 événements · 7 ères · chronologie',
      url: '/senag/jeu',
      session: '',
      statut: 'actif' as const,
      external: false as const,
      accent: C.terracotta,
      accentDeep: C.terraDeep,
      glyph: '🚂',
    },
    {
      id: 'primo',
      titre: 'PriMo\'',
      tagline: 'Replace les 17 Premiers ministres de la Guinée dans l\'ordre, de Béavogui à Bah Oury.',
      meta: '17 PM · chronologie · 1972 → 2026',
      url: '/senag/primo',
      session: '',
      statut: 'actif' as const,
      external: false as const,
      accent: C.leather,
      accentDeep: C.leatherDeep,
      glyph: '🏛',
    },
  ];

  return (
    <section style={{ padding: '48px 0', borderBottom: `1px solid ${C.line}` }}>
      <SectionTitle eyebrow="Jeux de mémoire" title="Joue avec l'histoire" />
      <p style={{ color: C.inkSoft, lineHeight: 1.7, maxWidth: 720, margin: '0 auto 32px', textAlign: 'center' }}>
        Trois jeux pour traverser la mémoire guinéenne — depuis les royaumes médiévaux jusqu'à la République
        d'aujourd'hui. Le premier est jouable, les autres arrivent pour la SeNAG.
      </p>

      {/* ── Grille des 3 cartes ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 18,
          marginBottom: 28,
        }}
      >
        {JEUX.map((j) => {
          const actif = j.statut === 'actif';
          return (
            <article
              key={j.id}
              style={{
                background: '#fff',
                border: `2px solid ${C.ink}`,
                boxShadow: actif ? `5px 5px 0 ${j.accent}` : `3px 3px 0 ${C.line}`,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                opacity: actif ? 1 : 0.92,
                position: 'relative',
              }}
            >
              {/* Filet d'accent en haut */}
              <div
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: j.accent,
                }}
              />

              {/* Badge statut */}
              <div
                style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  background: actif ? j.accent : C.paperDeep,
                  color: actif ? '#fff' : C.inkSoft,
                  padding: '3px 10px',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
                  textTransform: 'uppercase',
                  marginTop: 8,
                  marginBottom: 14,
                }}
              >
                {actif ? 'Disponible' : 'Bientôt'}
              </div>

              {/* Glyphe + titre */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 28, color: j.accent, lineHeight: 1 }}>{j.glyph}</span>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 22,
                    fontWeight: 800,
                    color: C.ink,
                    lineHeight: 1.15,
                  }}
                >
                  {j.titre}
                </h3>
              </div>

              <p style={{ color: C.inkSoft, fontSize: 14, lineHeight: 1.55, margin: '0 0 14px', flex: 1 }}>
                {j.tagline}
              </p>

              <p
                style={{
                  fontSize: 11,
                  color: j.accentDeep,
                  fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  margin: '0 0 16px',
                }}
              >
                {j.meta}
              </p>

              {/* CTA */}
              {actif ? (
                j.external ? (
                  // Jeu HTML externe (Puzzle Compagnons) : plein écran (new tab) + iframe inline
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <a
                      href={j.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: '1 1 auto',
                        textAlign: 'center',
                        padding: '10px 14px',
                        background: C.ink,
                        color: C.paper,
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: 13,
                        fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
                        letterSpacing: '0.04em',
                        border: `2px solid ${C.ink}`,
                      }}
                    >
                      Jouer plein écran →
                    </a>
                    <button
                      onClick={() => setEmbedded(embedded === j.id ? null : j.id)}
                      style={{
                        flex: '1 1 auto',
                        padding: '10px 14px',
                        background: 'transparent',
                        color: C.ink,
                        border: `2px solid ${C.ink}`,
                        fontWeight: 700,
                        fontSize: 13,
                        fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
                        letterSpacing: '0.04em',
                        cursor: 'pointer',
                      }}
                    >
                      {embedded === j.id ? 'Masquer' : 'Jouer ici'}
                    </button>
                  </div>
                ) : (
                  // Jeu React interne (Train, PriMo') : navigation simple vers la route
                  <a
                    href={j.url}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '10px 14px',
                      background: C.ink,
                      color: C.paper,
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: 13,
                      fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
                      letterSpacing: '0.04em',
                      border: `2px solid ${C.ink}`,
                    }}
                  >
                    Jouer →
                  </a>
                )
              ) : (
                <div
                  style={{
                    padding: '10px 14px',
                    background: C.paperDeep,
                    color: C.inkSoft,
                    border: `2px dashed ${C.line}`,
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: 13,
                    fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
                    letterSpacing: '0.04em',
                  }}
                >
                  À venir pour la SeNAG
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* ── Bandeau session de groupe (lié à Puzzle Compagnons) ── */}
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
            display: 'inline-flex', width: 44, height: 44, borderRadius: '50%',
            background: C.gold, color: C.ink, alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, fontWeight: 700, fontSize: 22,
            fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
          }}
        >
          ⚐
        </span>
        <span style={{ flex: 1 }}>
          <span style={{ display: 'block', fontWeight: 700, fontSize: 15, fontFamily: '"Gill Sans","Futura",system-ui,sans-serif', letterSpacing: '0.04em' }}>
            Défi de groupe — Puzzle Compagnons
          </span>
          <span style={{ display: 'block', fontSize: 13, opacity: 0.75, marginTop: 2 }}>
            Classe, atelier, institution : crée une session, projette le QR code, mesure qui replace les Compagnons le plus vite.
          </span>
        </span>
        <span
          style={{
            background: C.gold, color: C.ink, padding: '6px 14px', fontWeight: 700,
            fontFamily: '"Gill Sans","Futura",system-ui,sans-serif', fontSize: 13,
            letterSpacing: '0.04em', flexShrink: 0,
          }}
        >
          LANCER →
        </span>
      </a>

      {/* ── Iframe du jeu sélectionné ── */}
      {embedded && (
        <div style={{ background: '#fff', border: `2px solid ${C.ink}`, boxShadow: `6px 6px 0 ${C.gold}`, overflow: 'hidden', marginTop: 20 }}>
          <iframe
            src={JEUX.find((j) => j.id === embedded)?.url || ''}
            title={JEUX.find((j) => j.id === embedded)?.titre || ''}
            style={{ width: '100%', height: '90vh', border: 0, display: 'block' }}
          />
        </div>
      )}
    </section>
  );
}

/* ============ CITATION CENTRALE (warmth) ============ */
function PullQuote() {
  return (
    <section style={{ padding: '56px 16px', textAlign: 'center', borderBottom: `1px solid ${C.line}` }}>
      <div
        style={{
          fontSize: 36,
          color: C.gold,
          fontFamily: 'Georgia, serif',
          lineHeight: 1,
          marginBottom: 12,
        }}
        aria-hidden
      >
        ❝
      </div>
      <blockquote
        style={{
          fontFamily: '"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif',
          fontSize: 'clamp(20px, 3.2vw, 28px)',
          fontStyle: 'italic',
          lineHeight: 1.5,
          color: C.ink,
          maxWidth: 760,
          margin: '0 auto',
        }}
      >
        … Or il n'y a pas de dignité sans liberté&nbsp;: nous préférons la pauvreté
        dans la liberté à l'opulence dans l'esclavage.
      </blockquote>
      <p
        style={{
          marginTop: 18,
          fontSize: 13,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: C.goldDeep,
          fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
          fontWeight: 700,
        }}
      >
        Ahmed Sékou Touré · Conakry, 25 août 1958
      </p>
    </section>
  );
}

/* ============ COMPTEURS VISUELS (warmth) ============ */
function BigStats() {
  const stats = [
    { num: '60', label: 'Compagnons de l\'Indépendance', sub: 'élus le 31 mars 1957' },
    { num: '453', label: 'Dépositaires de la Croix', sub: 'décrets de 1959-1960' },
    { num: '28.09.1958', label: 'Le NON au référendum', sub: '1 134 324 oui à la République', isDate: true },
  ];

  return (
    <section style={{ padding: '48px 0', borderBottom: `1px solid ${C.line}` }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 24,
          textAlign: 'center',
        }}
      >
        {stats.map((s, i) => (
          <div key={i}>
            <div
              style={{
                fontSize: s.isDate ? 'clamp(22px, 4vw, 32px)' : 'clamp(48px, 8vw, 72px)',
                fontWeight: 800,
                color: C.gold,
                lineHeight: 1,
                fontFamily: '"Iowan Old Style","Palatino Linotype",Georgia,serif',
                marginBottom: 6,
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: C.ink,
                fontFamily: '"Gill Sans","Futura",system-ui,sans-serif',
                letterSpacing: '0.04em',
              }}
            >
              {s.label}
            </div>
            <div style={{ fontSize: 12, color: C.inkSoft, fontStyle: 'italic', marginTop: 4 }}>
              {s.sub}
            </div>
          </div>
        ))}
      </div>
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
          <p style={{ color: C.inkSoft, lineHeight: 1.75, fontSize: 15, marginBottom: 24, fontStyle: 'italic', maxWidth: 720 }}>
            Le 31 mars 1957, 60 conseillers territoriaux sont élus dans 26 circonscriptions
            de l'Assemblée territoriale de Guinée française. Le 2 octobre 1958 — au lendemain
            du « NON » — ils deviennent les députés constituants de la République de Guinée.
            Voici leurs noms.
          </p>

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
          <p style={{ color: C.ink, lineHeight: 1.75, fontSize: 15, marginBottom: 16, maxWidth: 720 }}>
            Les Décrets <strong>N°227 et N°228/PG</strong> du 1<sup>er</sup> octobre 1959, complétés
            par celui du 2 octobre 1960, instituent la <em>Croix du Compagnon de l'Indépendance</em>
            et désignent <strong>{CROIX_META.total}</strong> dépositaires : militants du PDG-RDA,
            syndicalistes, instituteurs, anciens combattants, jeunes du RDA, femmes des marchés,
            anonymes du <strong>NON</strong> du 28 septembre 1958. Une mémoire populaire de
            l'indépendance.
          </p>
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
