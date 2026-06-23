// src/components/senag/PriMoRonde.tsx
// Composant principal du jeu PriMo' (Premiers ministres) —
// gère l'état du jeu, le drag-and-drop, le tirage des fauteuils

import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';

import type { PrimeMinister } from '../../data/senagGame';
import { senagPrimeMinisters } from '../../data/senagGame';
import PriMoSetup, { type PriMoSetupConfig } from './PriMoSetup';
import PriMoFauteuil from './PriMoFauteuil';
import PriMoResult from './PriMoResult';

type Phase = 'setup' | 'playing' | 'result';

interface PriMoRondeProps {
  onBack: () => void; // retour à /senag
}

// Nombre de fauteuils par niveau
const FAUTEUIL_COUNT: Record<string, number> = {
  decouverte: 5,
  citoyen: 10,
  archiviste: 17, // les 17 PM en entier
};

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const PriMoRonde: React.FC<PriMoRondeProps> = ({ onBack }) => {
  const [phase, setPhase] = useState<Phase>('setup');
  const [config, setConfig] = useState<PriMoSetupConfig | null>(null);
  const [fauteuils, setFauteuils] = useState<PrimeMinister[]>([]);
  const [correctOrder, setCorrectOrder] = useState<PrimeMinister[]>([]);

  // Sensors : pointer (souris + tactile) + touch (mobile) + clavier (accessibilité)
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // Tirage des fauteuils selon config
  const drawFauteuils = (cfg: PriMoSetupConfig): { shuffled: PrimeMinister[]; correct: PrimeMinister[] } => {
    let pool = [...senagPrimeMinisters];

    // Filtre par ère présidentielle si demandée
    if (cfg.president !== 'tous') {
      pool = pool.filter((pm) => pm.president === cfg.president);
    }

    const n = Math.min(FAUTEUIL_COUNT[cfg.difficulty] || 10, pool.length);
    const selected = shuffle(pool).slice(0, n);

    // Ordre correct = trié par ordre chronologique (order)
    const correct = [...selected].sort((a, b) => a.order - b.order);

    // Ordre initial = mélangé (mais différent du correct)
    let shuffled = shuffle(selected);
    let attempts = 0;
    while (
      shuffled.every((pm, i) => pm.order === correct[i].order) &&
      attempts < 10 &&
      selected.length > 1
    ) {
      shuffled = shuffle(selected);
      attempts++;
    }

    return { shuffled, correct };
  };

  const handleStart = (cfg: PriMoSetupConfig) => {
    setConfig(cfg);
    const { shuffled, correct } = drawFauteuils(cfg);
    setFauteuils(shuffled);
    setCorrectOrder(correct);
    setPhase('playing');
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setFauteuils((items) => {
        const oldIndex = items.findIndex((i) => String(i.order) === active.id);
        const newIndex = items.findIndex((i) => String(i.order) === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleValidate = () => {
    setPhase('result');
  };

  const handleReplay = () => {
    if (!config) return;
    const { shuffled, correct } = drawFauteuils(config);
    setFauteuils(shuffled);
    setCorrectOrder(correct);
    setPhase('playing');
  };

  const handleReturnToSetup = () => {
    setPhase('setup');
  };

  // ────────────────────────────────────────────────────────────
  // Rendu selon phase
  // ────────────────────────────────────────────────────────────

  if (phase === 'setup') {
    return <PriMoSetup onStart={handleStart} onBack={onBack} />;
  }

  if (phase === 'result') {
    return (
      <PriMoResult
        playerOrder={fauteuils}
        correctOrder={correctOrder}
        onReplay={handleReplay}
        onReturnToSetup={handleReturnToSetup}
        onBackToSenag={onBack}
      />
    );
  }

  // Phase 'playing'
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* En-tête de jeu */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            🏛 PriMo&apos; — La Ronde des Primatures
          </h1>
          <p className="text-sm text-stone-600">
            Glisse les fauteuils pour replacer les Premiers ministres dans l&apos;ordre chronologique
          </p>
        </div>
        <button
          onClick={handleReturnToSetup}
          className="text-sm bg-white border-2 border-stone-300 hover:border-stone-500 text-stone-700 px-4 py-2 rounded-full"
        >
          ← Changer paramètres
        </button>
      </div>

      {/* Zone de jeu : estrade + fauteuils */}
      <div className="bg-gradient-to-b from-amber-50 to-stone-50 rounded-3xl p-4 md:p-6 shadow-inner border border-stone-200">
        <div className="overflow-x-auto pb-4">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <div className="flex items-center gap-2 min-w-min">
              {/* Estrade en tête (équivalent locomotive) */}
              <div
                className="flex-shrink-0 flex flex-col items-center justify-center p-4 h-40 rounded-2xl border-2 border-stone-800 bg-gradient-to-b from-stone-700 to-stone-900 text-amber-100 shadow-lg"
                style={{ minWidth: 100 }}
              >
                <div className="text-3xl mb-1">🇬🇳</div>
                <div className="text-[10px] uppercase tracking-wider font-bold opacity-80 text-center leading-tight">
                  Palais du<br />Peuple
                </div>
              </div>

              {/* Fauteuils draggables */}
              <SortableContext
                items={fauteuils.map((pm) => String(pm.order))}
                strategy={horizontalListSortingStrategy}
              >
                <div className="flex items-center gap-3">
                  {fauteuils.map((pm, idx) => (
                    <PriMoFauteuil key={pm.order} pm={pm} index={idx} />
                  ))}
                </div>
              </SortableContext>
            </div>
          </DndContext>
        </div>

        {/* Tapis rouge (équivalent rails) */}
        <div className="mt-2">
          <div className="h-2 bg-gradient-to-r from-red-800 via-red-700 to-red-800 rounded shadow-inner" />
        </div>
      </div>

      {/* Indication chronologique */}
      <div className="flex items-center justify-between text-xs uppercase tracking-wider text-stone-500 font-bold px-4">
        <span>← Premier PM (1972)</span>
        <span>PM actuel →</span>
      </div>

      {/* Bouton validation */}
      <div className="text-center pt-2">
        <button
          onClick={handleValidate}
          className="
            inline-flex items-center gap-3
            bg-amber-700 hover:bg-amber-800 active:bg-amber-900
            text-white font-bold text-lg
            px-8 py-4 rounded-full shadow-xl
            transition-all hover:scale-105
          "
        >
          ✓ Valider mon ordre
        </button>
      </div>
    </div>
  );
};

export default PriMoRonde;
