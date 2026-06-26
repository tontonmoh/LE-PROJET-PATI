/**
 * HOROYA — Page Principale
 * Route : /horoya
 * Carte AOF 1958 + 4 chapitres + fiches détaillées (les jalons sont à l'intérieur des chapitres).
 */

import { useState } from 'react';
import horoyaChapitres, { HoroyaChapitre } from '../data/horoyaQuests';
import HoroyaCarte from '../components/HoroyaCarte';
import HoroyaQuete from '../components/HoroyaQuete';

// ── Charte HOROYA (vert profond / or / rouge guinéen) ──────────────────────
const VERT  = '#1a5e3a';
const OR    = '#c9a227';
const ROUGE = '#c8341e';
const CREAM = '#f4ecd8';
const INK   = '#241c10';

export default function HoroyaPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = horoyaChapitres.find((c: HoroyaChapitre) => c.id === selectedId);

  return (
    <div className="min-h-screen" style={{ background: `linear-gradient(to bottom, ${CREAM} 0%, #e8dcb8 100%)` }}>
      {/* Hero — cover illustrée + voile vert profond */}
      <div
        className="relative px-4 py-20 md:py-28 text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            `linear-gradient(to bottom, rgba(26,94,58,0.45) 0%, rgba(26,94,58,0.65) 55%, rgba(36,28,16,0.92) 100%), url('/images/horoya/horoya-cover.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="relative max-w-3xl mx-auto">
          <h1 className="font-bold tracking-tight leading-none text-5xl md:text-7xl mb-4 drop-shadow-lg" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
            HOROYA
          </h1>
          <div
            className="inline-flex items-center gap-2 text-sm md:text-base font-semibold backdrop-blur-sm px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(255,255,255,0.18)' }}
          >
            1946 – 1960 · L'indépendance de la Guinée
          </div>
          <p className="text-base md:text-lg max-w-2xl mx-auto drop-shadow" style={{ color: '#f5ecdb' }}>
            « Nous préférons la pauvreté dans la liberté à la richesse dans l'esclavage. »
            <br />
            <span className="text-sm opacity-80">— Conakry, 25 août 1958</span>
          </p>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {selected ? (
          <div className="mb-8">
            <HoroyaQuete chapitre={selected} onClose={() => setSelectedId(null)} />
          </div>
        ) : (
          <>
            {/* Carte AOF 1958 */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ color: VERT, fontFamily: "'Fraunces', Georgia, serif" }}>
                28 septembre 1958 — Le choix
              </h2>
              <p className="text-center mb-8" style={{ color: INK, opacity: 0.7 }}>
                Douze territoires votent. Un seul dit NON.
              </p>
              <HoroyaCarte onSelectGuinee={() => setSelectedId('moment')} />
            </div>

            {/* Grille des 4 chapitres */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ color: VERT, fontFamily: "'Fraunces', Georgia, serif" }}>
                Les 4 chapitres de Horoya
              </h2>
              <p className="text-center mb-10" style={{ color: INK, opacity: 0.7 }}>
                De 1946 à 1960 — cliquer sur un chapitre pour le lire et explorer ses jalons.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {horoyaChapitres.map((c: HoroyaChapitre) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedId(c.id)}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-left"
                  >
                    {/* Banneau couleur */}
                    <div
                      className="h-32 w-full relative group-hover:brightness-110 transition"
                      style={{
                        background:
                          c.id === 'racines'
                            ? `linear-gradient(135deg, ${INK} 0%, #4a3a20 100%)`
                            : c.id === 'marche'
                            ? `linear-gradient(135deg, #6b4423 0%, ${OR} 100%)`
                            : c.id === 'moment'
                            ? `linear-gradient(135deg, ${ROUGE} 0%, ${OR} 100%)`
                            : `linear-gradient(135deg, ${VERT} 0%, #0F6E56 100%)`,
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="text-7xl font-bold opacity-30"
                          style={{ fontFamily: "'Fraunces', Georgia, serif", color: 'white' }}
                        >
                          {c.number}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <p className="text-white text-xs font-semibold uppercase tracking-[0.15em] opacity-90">
                          {c.period}
                        </p>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-1" style={{ color: VERT, fontFamily: "'Fraunces', Georgia, serif" }}>
                        {c.name}
                      </h3>
                      <p className="text-sm font-semibold mb-3" style={{ color: OR }}>
                        {c.subtitle}
                      </p>
                      <p className="text-sm mb-4" style={{ color: '#555' }}>
                        {c.role}
                      </p>

                      {/* Jalons en mini-liste */}
                      <div className="border-t pt-3" style={{ borderColor: `${VERT}22` }}>
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: VERT, opacity: 0.7 }}>
                          {c.jalons.length} jalons
                        </p>
                        <ul className="space-y-1">
                          {c.jalons.map((j) => (
                            <li key={j.id} className="text-xs flex gap-2" style={{ color: '#666' }}>
                              <span className="font-bold" style={{ color: OR }}>·</span>
                              <span><strong>{j.date}</strong> — {j.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        className="mt-4 w-full text-center py-2 rounded font-semibold text-white transition"
                        style={{ background: VERT }}
                      >
                        Lire le chapitre
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Info contextuelle */}
            <div className="bg-white rounded-lg p-8 shadow-md mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: VERT, fontFamily: "'Fraunces', Georgia, serif" }}>
                À propos de l'indépendance guinéenne
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ color: '#333' }}>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: VERT }}>Une singularité africaine</h3>
                  <p className="text-sm mb-4">
                    Sur les douze territoires d'Afrique noire française appelés à se prononcer
                    le 28 septembre 1958, la Guinée est le seul à voter NON à la Communauté
                    française — à 95,22 %. Les autres territoires accéderont à l'indépendance
                    deux ans plus tard, en 1960, par un autre chemin.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: VERT }}>Avant 1958, la lutte</h3>
                  <p className="text-sm mb-4">
                    Le NON de 1958 n'est pas un coup de tonnerre isolé. Il est l'aboutissement
                    d'une décennie de mobilisation : syndicalisme cheminot et postal, grève
                    des 67 jours en 1953, résistance féminine incarnée par M'Balia Camara,
                    structuration du PDG-RDA.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: VERT }}>Après 1958, l'État</h3>
                  <p className="text-sm">
                    Construire un pays sans cadres administratifs (la France retire les siens),
                    sans monnaie (jusqu'au 1ᵉʳ mars 1960), sans aide internationale automatique :
                    l'épreuve commence le 3 octobre. Le Ghana, l'URSS, le bloc de l'Est, la Chine
                    populaire apportent les premiers soutiens.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: VERT }}>Mémoire vive</h3>
                  <p className="text-sm">
                    Toutes les figures qui ont rendu Horoya possible ne sont pas dans les manuels.
                    M'Balia Camara, Mafory Bangoura, Loffo Camara, Diawadou Barry, Barry III,
                    Saïfoulaye Diallo, Louis Lansana Béavogui, Diallo Telli : autant de voix
                    qui ont fait corps avec celle qu'on retient le plus.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="text-white text-center py-6 px-4 mt-12" style={{ background: VERT }}>
        <p className="text-sm">
          <strong>Horoya</strong> · Encyclopédie Pati 2026 · Troisième volet de la trilogie MANSAYA / FOUTA / HOROYA
        </p>
        <p className="text-xs mt-2" style={{ color: '#f0e6d2' }}>
          Sources : Archives nationales de Guinée, archives RTG, historiographie ouest-africaine
        </p>
      </div>
    </div>
  );
}
