/**
 * HOROYA — Fiche détaillée d'un chapitre (la "quête")
 * Affiche : titre + période + bascule enfant/adulte + jalons cliquables (les facts).
 */

import { useState } from 'react';
import { HoroyaChapitre, HoroyaJalon } from '../data/horoyaQuests';

// ── Charte HOROYA ───────────────────────────────────────────────────────────
const VERT  = '#1a5e3a';
const OR    = '#c9a227';
const INK   = '#241c10';
const CREAM = '#f4ecd8';

interface Props {
  chapitre: HoroyaChapitre;
  onClose: () => void;
}

export default function HoroyaQuete({ chapitre, onClose }: Props) {
  const [niveau, setNiveau] = useState<'enfant' | 'adulte'>('adulte');
  const [openJalon, setOpenJalon] = useState<string | null>(null);

  const texte = chapitre.versions[niveau];
  const aRediger = texte.trim().startsWith('[À RÉDIGER');

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* En-tête */}
      <div
        className="px-6 md:px-10 py-8 text-white relative"
        style={{ background: `linear-gradient(135deg, ${VERT} 0%, ${INK} 100%)` }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition px-3 py-1.5 rounded-full text-sm font-semibold"
          style={{ background: 'rgba(255,255,255,0.12)' }}
        >
          ← Retour aux chapitres
        </button>

        <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-70 mb-2">
          Chapitre {chapitre.number} · {chapitre.period}
        </p>
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight mb-2"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {chapitre.name}
        </h1>
        <p className="text-base md:text-lg" style={{ color: OR }}>
          {chapitre.subtitle}
        </p>
      </div>

      {/* Bascule enfant / adulte */}
      <div className="px-6 md:px-10 pt-6 pb-2 flex gap-2 border-b" style={{ borderColor: `${VERT}22` }}>
        <button
          onClick={() => setNiveau('enfant')}
          className="px-4 py-2 rounded-full text-sm font-semibold transition"
          style={{
            background: niveau === 'enfant' ? VERT : 'transparent',
            color: niveau === 'enfant' ? 'white' : VERT,
            border: `1.5px solid ${VERT}`,
          }}
        >
          Pour les 10-12 ans
        </button>
        <button
          onClick={() => setNiveau('adulte')}
          className="px-4 py-2 rounded-full text-sm font-semibold transition"
          style={{
            background: niveau === 'adulte' ? VERT : 'transparent',
            color: niveau === 'adulte' ? 'white' : VERT,
            border: `1.5px solid ${VERT}`,
          }}
        >
          Pour les 13 ans et plus
        </button>
      </div>

      {/* Texte narratif */}
      <div className="px-6 md:px-10 py-8" style={{ background: CREAM }}>
        {aRediger ? (
          <div className="bg-white border-2 border-dashed rounded-lg p-6" style={{ borderColor: OR }}>
            <p className="font-bold mb-2" style={{ color: OR }}>
              ⏳ Chapitre en cours de rédaction
            </p>
            <p className="text-sm whitespace-pre-line" style={{ color: '#555' }}>
              {texte}
            </p>
          </div>
        ) : (
          <div
            className="prose prose-lg max-w-none whitespace-pre-line"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              color: INK,
              lineHeight: 1.75,
              fontSize: niveau === 'enfant' ? '1.05rem' : '1.1rem',
            }}
          >
            {texte}
          </div>
        )}
      </div>

      {/* Jalons cliquables */}
      <div className="px-6 md:px-10 py-10 bg-white">
        <h2
          className="text-2xl font-bold mb-2"
          style={{ color: VERT, fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Les jalons de ce chapitre
        </h2>
        <p className="text-sm mb-6" style={{ color: '#666' }}>
          Cliquer pour ouvrir un jalon et voir son détail.
        </p>

        <div className="space-y-3">
          {chapitre.jalons.map((j: HoroyaJalon) => {
            const isOpen = openJalon === j.id;
            return (
              <div
                key={j.id}
                className="rounded-lg overflow-hidden transition"
                style={{ border: `1.5px solid ${isOpen ? VERT : `${VERT}33`}` }}
              >
                <button
                  onClick={() => setOpenJalon(isOpen ? null : j.id)}
                  className="w-full px-5 py-4 flex items-start gap-4 text-left transition hover:bg-[#fafaf2]"
                  style={{ background: isOpen ? `${VERT}08` : 'white' }}
                >
                  <div className="shrink-0 w-16 text-right">
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: OR }}>
                      {j.date.split(' ').slice(-1)[0]}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-bold mb-1"
                      style={{ color: INK, fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.15rem' }}
                    >
                      {j.title}
                    </h3>
                    <p className="text-xs font-semibold" style={{ color: VERT }}>
                      {j.date}
                    </p>
                  </div>
                  <div className="shrink-0 text-xl font-bold" style={{ color: VERT }}>
                    {isOpen ? '−' : '+'}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 py-5 border-t" style={{ background: CREAM, borderColor: `${VERT}22` }}>
                    <div className="grid md:grid-cols-[2fr_1fr] gap-5">
                      <div>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: INK }}>
                          {j.description}
                        </p>
                        {j.source && (
                          <p className="text-xs italic" style={{ color: '#777' }}>
                            Source : {j.source}
                          </p>
                        )}
                      </div>
                      <div className="bg-white rounded p-3" style={{ border: `1px solid ${VERT}22` }}>
                        <div
                          className="aspect-video rounded mb-2 flex items-center justify-center"
                          style={{ background: `${VERT}11` }}
                        >
                          <span className="text-xs" style={{ color: '#999' }}>
                            {j.imageUrl}
                          </span>
                        </div>
                        <p className="text-xs italic" style={{ color: '#666' }}>
                          {j.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
