// ════════════════════════════════════════════════════════════════
//  MANSAYA — Page-route
//  ----------------------------------------------------------------
//  Affiche la grille des empires disponibles.
//  Quand on choisit un empire, lance sa quête.
//  Un bouton « retour » revient à la grille.
//
//  À brancher dans le routeur de App.tsx, ex :
//    <Route path="/mansaya" element={<MansayaPage />} />
// ════════════════════════════════════════════════════════════════

import { useState } from 'react';
import { quests } from '../data/mansayaQuests';
import MansayaQuete from '../components/MansayaQuete';

// Ordre d'affichage chronologique + icône par empire.
const ORDER: { slug: string; icon: string; period: string }[] = [
  { slug: 'ghana',   icon: 'ti-coins',           period: 'VIIIe–XIIe s.' },
  { slug: 'sosso',   icon: 'ti-flame',           period: 'XIIe–XIIIe s.' },
  { slug: 'mali',    icon: 'ti-crown',           period: 'XIIIe–XVe s.' },
  { slug: 'songhai', icon: 'ti-book-2',          period: 'XIVe–XVIe s.' },
];

export default function MansayaPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 760, margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1
          style={{
            fontSize: 'clamp(48px, 12vw, 88px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            margin: 0,
            color: '#BA7517',
          }}
        >
          MANSAYA
        </h1>
        <div
          style={{
            fontSize: 14,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary, #5F5E5A)',
            marginTop: 8,
          }}
        >
          L'encyclopédie royale
        </div>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary, #5F5E5A)', marginTop: 10 }}>
          Suis Fanta à travers les grands empires d'Afrique. Fais tes choix,
          débloque l'histoire.
        </p>
      </header>

      {active ? (
        <div>
          <button
            onClick={() => setActive(null)}
            style={{
              border: '0.5px solid var(--color-border-secondary, rgba(0,0,0,0.3))',
              borderRadius: 8,
              padding: '8px 14px',
              background: 'var(--color-background-primary, #fff)',
              cursor: 'pointer',
              fontSize: 13,
              fontFamily: 'inherit',
              color: 'inherit',
              marginBottom: 16,
            }}
          >
            <i className="ti ti-arrow-left" aria-hidden="true" /> Tous les empires
          </button>
          <MansayaQuete slug={active} />
        </div>
      ) : (
        <>
          {/* ═══════════════════════════════════════════════════════════ */}
          {/* TEASER : CHARTE DU MANDÉN */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div
            style={{
              background: 'linear-gradient(135deg, #2C3E7F 0%, #1a2557 100%)',
              borderRadius: 12,
              padding: '1.5rem',
              marginBottom: '2rem',
              color: '#F5E6D3',
              border: '2px solid #D4AF37',
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 10 }}>📜</div>
            <h2 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 8px 0', color: '#D4AF37' }}>
              Charte du Mandén
            </h2>
            <p style={{ fontSize: 13, margin: '0 0 12px 0', lineHeight: 1.6, opacity: 0.9 }}>
              Découvrez les <strong>44 principes fondateurs</strong> de l'Empire du Mali (1236).
              La première constitution écrite d'Afrique de l'Ouest.
            </p>
            <a
              href="/charte"
              style={{
                display: 'inline-block',
                background: '#D4AF37',
                color: '#2C3E7F',
                padding: '0.75rem 1.5rem',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 13,
                transition: 'transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Lire les 44 articles →
            </a>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* GRILLE EMPIRES */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 12,
            }}
          >
            {ORDER.filter((e) => quests[e.slug]).map((e) => {
              const q = quests[e.slug];
              return (
                <button
                  key={e.slug}
                  onClick={() => setActive(e.slug)}
                  style={{
                    textAlign: 'left',
                    border: '0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))',
                    borderRadius: 12,
                    padding: '1rem 1.25rem',
                    background: 'var(--color-background-primary, #fff)',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    color: 'inherit',
                  }}
                >
                  <div style={{ fontSize: 26, color: '#BA7517', marginBottom: 8 }}>
                    <i className={`ti ${e.icon}`} aria-hidden="true" />
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 2 }}>{q.empire}</div>
                  <div style={{ fontSize: 13, color: 'var(--color-text-secondary, #5F5E5A)', marginBottom: 8 }}>
                    {q.subtitle}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-tertiary, #888780)' }}>
                    <i className="ti ti-clock" aria-hidden="true" /> {e.period} ·{' '}
                    {q.totalFacts} faits à débloquer
                  </div>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
