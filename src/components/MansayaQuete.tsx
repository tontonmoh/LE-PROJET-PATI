// ════════════════════════════════════════════════════════════════
//  MANSAYA — Moteur de quête interactive (générique)
//  ----------------------------------------------------------------
//  Affiche n'importe quelle quête définie dans src/data/mansayaQuests.ts
//  NE PAS modifier ce fichier pour ajouter un empire : il suffit
//  d'ajouter les données. Ce moteur lit la structure et l'affiche.
//
//  Usage :
//    <MansayaQuete slug="mali" />
//
//  Styles : tout est inline, autonome, sans dépendance CSS externe.
//  Icônes : Tabler (déjà chargées globalement sur projetpati.com).
// ════════════════════════════════════════════════════════════════

import { useState, useCallback } from 'react';
import { quests, speakerColors, type Fact } from '../data/mansayaQuests';
import MansayaCarte from './MansayaCarte';

interface Props {
  slug: string;
}

const FALLBACK_COLOR: [string, string, string] = ['#E6F1FB', '#185FA5', '#042C53'];

export default function MansayaQuete({ slug }: Props) {
  const quest = quests[slug];

  const [sceneKey, setSceneKey] = useState<string>(
    quest ? quest.startScene : 'start'
  );
  const [facts, setFacts] = useState<Fact[]>([]);
  const [finished, setFinished] = useState(false);
  const [lightboxFact, setLightboxFact] = useState<Fact | null>(null);

  const addFact = useCallback((f?: Fact) => {
    if (!f) return;
    setFacts((prev) =>
      prev.some((x) => x.id === f.id) ? prev : [...prev, f]
    );
  }, []);

  const goTo = useCallback(
    (key: string) => {
      if (key === 'end') {
        setFinished(true);
        return;
      }
      const next = quest?.scenes[key];
      if (next) addFact(next.fact);
      setSceneKey(key);
    },
    [quest, addFact]
  );

  const restart = useCallback(() => {
    setFacts([]);
    setFinished(false);
    setSceneKey(quest.startScene);
  }, [quest]);

  if (!quest) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#888780' }}>
        Quête introuvable : « {slug} ».
      </div>
    );
  }

  // Débloque le fait de la scène de départ au premier rendu.
  if (facts.length === 0 && !finished) {
    const first = quest.scenes[quest.startScene];
    if (first?.fact) addFact(first.fact);
  }

  const scene = quest.scenes[sceneKey];
  const pct = Math.round((facts.length / quest.totalFacts) * 100);

  return (
    <div style={{ position: 'relative', fontFamily: 'var(--font-sans, system-ui, sans-serif)', maxWidth: 720, margin: '0 auto' }}>
      {/* En-tête */}
      <div
        style={{
          background: '#BA7517',
          color: '#FAEEDA',
          borderRadius: 12,
          padding: '14px 18px',
          marginBottom: 14,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 12, color: '#FAC775' }}>
            Carnet de {quest.narrator} · {quest.empire}
          </div>
          <div style={{ fontSize: 19, fontWeight: 500 }}>
            {finished ? 'Carnet complété !' : quest.subtitle}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, color: '#FAC775' }}>faits découverts</div>
          <div style={{ fontSize: 22, fontWeight: 500 }}>
            {facts.length} / {quest.totalFacts}
          </div>
        </div>
      </div>

      {/* Barre de progression */}
      <div
        style={{
          height: 6,
          background: 'var(--color-background-secondary, #F1EFE8)',
          borderRadius: 3,
          overflow: 'hidden',
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: `${finished ? 100 : pct}%`,
            height: '100%',
            background: '#1D9E75',
            transition: 'width 0.4s ease',
          }}
        />
      </div>

      {/* Carte d'Afrique de l'Ouest — empire en cours surligné */}
      <div style={{ marginBottom: 16 }}>
        <MansayaCarte empire={slug} />
      </div>

      {/* Scène ou écran final */}
      <div
        style={{
          background: 'var(--color-background-primary, #fff)',
          border: '0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))',
          borderRadius: 12,
          padding: '1.25rem 1.5rem',
          minHeight: 280,
        }}
      >
        {finished ? (
          <EndScreen quest={quest} facts={facts} onRestart={restart} onOpenFact={setLightboxFact} />
        ) : (
          <SceneView scene={scene} onChoose={goTo} onOpenFact={setLightboxFact} />
        )}
      </div>

      {/* Lightbox illustrée — s'ouvre au clic sur un fait */}
      {lightboxFact && (
        <FactLightbox fact={lightboxFact} onClose={() => setLightboxFact(null)} />
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
//  Vue d'une scène
// ────────────────────────────────────────────────────────────────
function SceneView({
  scene,
  onChoose,
  onOpenFact,
}: {
  scene: { speaker: string; text: string; fact?: Fact; choices: { label: string; icon: string; go: string }[] };
  onChoose: (key: string) => void;
  onOpenFact: (f: Fact) => void;
}) {
  const [bg, mid, dark] = speakerColors[scene.speaker] ?? FALLBACK_COLOR;

  return (
    <div>
      {/* Locuteur */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            background: bg,
            color: dark,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 500,
            fontSize: 13,
          }}
        >
          {scene.speaker.slice(0, 2)}
        </div>
        <div style={{ fontSize: 14, fontWeight: 500, color: mid }}>{scene.speaker}</div>
      </div>

      {/* Réplique */}
      <p style={{ fontSize: 15, lineHeight: 1.75, margin: '0 0 16px' }}>{scene.text}</p>

      {/* Fait débloqué — cliquable pour ouvrir l'illustration */}
      {scene.fact && (
        <button
          type="button"
          onClick={() => onOpenFact(scene.fact!)}
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'left',
            background: 'var(--color-background-secondary, #F1EFE8)',
            borderLeft: '3px solid #1D9E75',
            border: 'none',
            borderLeftWidth: 3,
            borderLeftStyle: 'solid',
            borderLeftColor: '#1D9E75',
            padding: '10px 14px',
            marginBottom: 16,
            cursor: 'pointer',
            fontFamily: 'inherit',
            color: 'inherit',
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: '#0F6E56',
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              marginBottom: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span><i className="ti ti-bookmark" aria-hidden="true" /> fait débloqué</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <i className="ti ti-photo" aria-hidden="true" /> voir l’image
            </span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 3 }}>{scene.fact.title}</div>
          <div style={{ fontSize: 13, color: 'var(--color-text-secondary, #5F5E5A)', lineHeight: 1.6 }}>
            {scene.fact.body}
          </div>
        </button>
      )}

      {/* Choix */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {scene.choices.map((c) => (
          <button
            key={c.go + c.label}
            onClick={() => onChoose(c.go)}
            style={{
              textAlign: 'left',
              border: '0.5px solid var(--color-border-secondary, rgba(0,0,0,0.3))',
              borderRadius: 8,
              padding: '12px 14px',
              background: 'var(--color-background-primary, #fff)',
              cursor: 'pointer',
              fontSize: 14,
              fontFamily: 'inherit',
              color: 'inherit',
            }}
          >
            <i className={`ti ${c.icon}`} style={{ marginRight: 8 }} aria-hidden="true" />
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
//  Écran final — carnet récapitulatif + badge
// ────────────────────────────────────────────────────────────────
function EndScreen({
  quest,
  facts,
  onRestart,
  onOpenFact,
}: {
  quest: { badge: string };
  facts: Fact[];
  onRestart: () => void;
  onOpenFact: (f: Fact) => void;
}) {
  return (
    <div>
      <div style={{ textAlign: 'center', padding: '8px 0 16px' }}>
        <div style={{ fontSize: 32, color: '#1D9E75' }}>
          <i className="ti ti-trophy" aria-hidden="true" />
        </div>
        <div style={{ fontSize: 18, fontWeight: 500, margin: '6px 0' }}>
          Badge « {quest.badge} » obtenu
        </div>
        <div style={{ fontSize: 14, color: 'var(--color-text-secondary, #5F5E5A)' }}>
          Tu as reconstitué {facts.length} clés de l’histoire. Touche une carte pour voir son image.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {facts.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => onOpenFact(f)}
            style={{
              textAlign: 'left',
              background: 'var(--color-background-secondary, #F1EFE8)',
              border: 'none',
              borderRadius: 8,
              padding: '10px 12px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              color: 'inherit',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{f.title}</span>
              <i className="ti ti-photo" style={{ fontSize: 14, color: '#BA7517' }} aria-hidden="true" />
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary, #5F5E5A)', lineHeight: 1.5 }}>
              {f.body}
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={onRestart}
        style={{
          marginTop: 14,
          width: '100%',
          border: '0.5px solid var(--color-border-secondary, rgba(0,0,0,0.3))',
          borderRadius: 8,
          padding: 12,
          background: 'var(--color-background-primary, #fff)',
          cursor: 'pointer',
          fontSize: 14,
          fontFamily: 'inherit',
          color: 'inherit',
        }}
      >
        <i className="ti ti-refresh" aria-hidden="true" /> Recommencer l’aventure
      </button>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
//  Lightbox illustrée — s'ouvre au clic sur un fait
//  Affiche l'illustration si `fact.image` existe, sinon un cadre
//  « illustration à venir » (emplacement à remplir plus tard).
// ────────────────────────────────────────────────────────────────
function FactLightbox({ fact, onClose }: { fact: Fact; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={fact.title}
      style={{
        position: 'absolute',
        inset: 0,
        minHeight: '100%',
        background: 'rgba(20, 12, 4, 0.72)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        zIndex: 50,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--color-background-primary, #fff)',
          borderRadius: 14,
          maxWidth: 560,
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* En-tête lightbox */}
        <div
          style={{
            background: '#BA7517',
            color: '#FAEEDA',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 500 }}>{fact.title}</div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FAEEDA',
              cursor: 'pointer',
              fontSize: 20,
              lineHeight: 1,
              padding: 4,
            }}
          >
            <i className="ti ti-x" aria-hidden="true" />
          </button>
        </div>

        {/* Zone illustration */}
        {fact.image ? (
          <img
            src={fact.image}
            alt={fact.caption ?? fact.title}
            style={{ width: '100%', display: 'block' }}
          />
        ) : (
          <div
            style={{
              background: '#FAEEDA',
              color: '#854F0B',
              minHeight: 220,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <i className="ti ti-photo" style={{ fontSize: 40 }} aria-hidden="true" />
            <div style={{ fontSize: 14, fontWeight: 500 }}>Illustration à venir</div>
            <div style={{ fontSize: 12, color: '#BA7517' }}>
              Cette scène sera bientôt illustrée.
            </div>
          </div>
        )}

        {/* Texte du fait + légende */}
        <div style={{ padding: '14px 18px' }}>
          <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0, color: 'var(--color-text-primary, #2C2C2A)' }}>
            {fact.body}
          </p>
          {fact.caption && (
            <p
              style={{
                fontSize: 12,
                fontStyle: 'italic',
                color: 'var(--color-text-secondary, #5F5E5A)',
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              {fact.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
