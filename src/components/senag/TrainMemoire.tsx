// src/components/senag/TrainMemoire.tsx
// Composant principal — gère l'état du jeu, le drag-and-drop, le tirage des wagons

import React, { useState, useMemo } from 'react';
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

import type { GameQuestion } from '../../data/senagGame';
import { senagGameQuestions, trainCategories } from '../../data/senagGame';
import TrainSetup, { type SetupConfig } from './TrainSetup';
import TrainLocomotive from './TrainLocomotive';
import TrainWagon from './TrainWagon';
import TrainResult from './TrainResult';

type Phase = 'setup' | 'playing' | 'result';

interface TrainMemoireProps {
  onBack: () => void; // retour à /senag
}

// Nombre de wagons par niveau
const WAGON_COUNT: Record<string, number> = {
  decouverte: 5,
  citoyen: 7,
  archiviste: 10,
  all: 7,
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

const TrainMemoire: React.FC<TrainMemoireProps> = ({ onBack }) => {
  const [phase, setPhase] = useState<Phase>('setup');
  const [config, setConfig] = useState<SetupConfig | null>(null);
  const [wagons, setWagons] = useState<GameQuestion[]>([]);
  const [correctOrder, setCorrectOrder] = useState<GameQuestion[]>([]);

  // Sensors : pointer (souris + tactile) + touch (mobile explicite) + clavier (accessibilité)
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // Tirage des wagons selon config
  const drawWagons = (cfg: SetupConfig): { shuffled: GameQuestion[]; correct: GameQuestion[] } => {
    // Filtrer le pool actif (jeu principal) — uniquement Patrimoine/Politique/Constitutionnel
    let pool = senagGameQuestions.filter((q) =>
      trainCategories.includes(q.category)
    );

    // Filtre catégorie
    if (cfg.category !== 'mixed') {
      pool = pool.filter((q) => q.category === cfg.category);
    }
    // Filtre niveau
    if (cfg.difficulty !== 'all') {
      pool = pool.filter((q) => q.difficulty === cfg.difficulty);
    }

    const n = Math.min(WAGON_COUNT[cfg.difficulty] || 7, pool.length);
    const selected = shuffle(pool).slice(0, n);

    // Ordre correct = trié par année
    const correct = [...selected].sort((a, b) => a.year - b.year);
    // Ordre initial = mélangé (mais on s'assure qu'il diffère du correct)
    let shuffled = shuffle(selected);
    let attempts = 0;
    while (
      shuffled.every((q, i) => q.id === correct[i].id) &&
      attempts < 10 &&
      selected.length > 1
    ) {
      shuffled = shuffle(selected);
      attempts++;
    }

    return { shuffled, correct };
  };

  const handleStart = (cfg: SetupConfig) => {
    setConfig(cfg);
    const { shuffled, correct } = drawWagons(cfg);
    setWagons(shuffled);
    setCorrectOrder(correct);
    setPhase('playing');
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setWagons((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleValidate = () => {
    setPhase('result');
  };

  const handleReplay = () => {
    if (!config) return;
    const { shuffled, correct } = drawWagons(config);
    setWagons(shuffled);
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
    return <TrainSetup onStart={handleStart} />;
  }

  if (phase === 'result') {
    return (
      <TrainResult
        playerOrder={wagons}
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
          <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-950">
            🚂 Train Guinée
          </h1>
          <p className="text-sm text-slate-600">
            Glisse les wagons pour les placer dans l'ordre chronologique
          </p>
        </div>
        <button
          onClick={handleReturnToSetup}
          className="text-sm bg-white border-2 border-slate-300 hover:border-slate-500 text-slate-700 px-4 py-2 rounded-full"
        >
          ← Changer paramètres
        </button>
      </div>

      {/* Zone de jeu : locomotive + wagons */}
      <div className="bg-gradient-to-b from-sky-50 to-slate-50 rounded-3xl p-4 md:p-6 shadow-inner border border-slate-200">
        <div className="overflow-x-auto pb-4">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <div className="flex items-center gap-2 min-w-min">
              {/* Locomotive */}
              <TrainLocomotive height={140} />

              {/* Wagons draggables */}
              <SortableContext
                items={wagons.map((w) => w.id)}
                strategy={horizontalListSortingStrategy}
              >
                <div className="flex items-center gap-3">
                  {wagons.map((q, idx) => (
                    <TrainWagon key={q.id} question={q} index={idx} />
                  ))}
                </div>
              </SortableContext>
            </div>
          </DndContext>
        </div>

        {/* Rails (voie ferrée) */}
        <div className="mt-2">
          <div className="h-1.5 bg-slate-700 rounded" />
          <div className="flex justify-around mt-1">
            {Array.from({ length: wagons.length + 4 }).map((_, i) => (
              <div key={i} className="w-1 h-3 bg-slate-600" />
            ))}
          </div>
        </div>
      </div>

      {/* Indication chronologique */}
      <div className="flex items-center justify-between text-xs uppercase tracking-wider text-slate-500 font-bold px-4">
        <span>← Plus ancien</span>
        <span>Plus récent →</span>
      </div>

      {/* Bouton validation */}
      <div className="text-center pt-2">
        <button
          onClick={handleValidate}
          className="
            inline-flex items-center gap-3
            bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800
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

export default TrainMemoire;
