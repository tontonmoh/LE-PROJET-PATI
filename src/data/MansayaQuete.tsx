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
    <div style={{ fontFamily: 'var(--font-sans, system-ui, sans-serif)', maxWidth: 720, margin: '0 auto' }}>
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
          <EndScreen quest={quest} facts={facts} onRestart={restart} />
        ) : (
          <SceneView scene={scene} onChoose={goTo} />
        )}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
//  Vue d'une scène
// ────────────────────────────────────────────────────────────────
function SceneView({
  scene,
  onChoose,
}: {
  scene: { speaker: string; text: string; fact?: Fact; choices: { label: string; icon: string; go: string }[] };
  onChoose: (key: string) => void;
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

      {/* Fait débloqué */}
      {scene.fact && (
        <div
          style={{
            background: 'var(--color-background-secondary, #F1EFE8)',
            borderLeft: '3px solid #1D9E75',
            padding: '10px 14px',
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: '#0F6E56',
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              marginBottom: 4,
            }}
          >
            <i className="ti ti-bookmark" aria-hidden="true" /> fait débloqué
          </div>
          <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 3 }}>{scene.fact.title}</div>
          <div style={{ fontSize: 13, color: 'var(--color-text-secondary, #5F5E5A)', lineHeight: 1.6 }}>
            {scene.fact.body}
          </div>
        </div>
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
}: {
  quest: { badge: string };
  facts: Fact[];
  onRestart: () => void;
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
          Tu as reconstitué {facts.length} clés de l’histoire.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {facts.map((f) => (
          <div
            key={f.id}
            style={{
              background: 'var(--color-background-secondary, #F1EFE8)',
              borderRadius: 8,
              padding: '10px 12px',
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>{f.title}</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary, #5F5E5A)', lineHeight: 1.5 }}>
              {f.body}
            </div>
          </div>
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
