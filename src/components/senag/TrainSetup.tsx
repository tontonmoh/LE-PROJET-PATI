// src/components/senag/TrainSetup.tsx
// Écran de configuration : choix catégorie + niveau avant de démarrer

import React, { useState } from 'react';
import type { GameCategory, GameDifficulty } from '../../data/senagGame';
import { categoryColors } from '../../data/senagGame';

interface TrainSetupProps {
  onStart: (config: SetupConfig) => void;
}

export interface SetupConfig {
  category: GameCategory | 'mixed';
  difficulty: GameDifficulty | 'all';
}

const CATEGORY_OPTIONS: Array<{
  value: GameCategory | 'mixed';
  label: string;
  icon: string;
  description: string;
}> = [
  {
    value: 'patrimoine',
    label: 'Patrimoine',
    icon: '🏹',
    description: 'Empires, royaumes, résistances',
  },
  {
    value: 'politique',
    label: 'Politique',
    icon: '🏛️',
    description: 'Faits politiques et diplomatiques',
  },
  {
    value: 'constitutionnel',
    label: 'Constitutionnel',
    icon: '⚖️',
    description: 'Constitutions, régimes, institutions',
  },
  {
    value: 'mixed',
    label: 'Mixte',
    icon: '🚂',
    description: 'Toutes les catégories mélangées',
  },
];

const DIFFICULTY_OPTIONS: Array<{
  value: GameDifficulty | 'all';
  label: string;
  description: string;
  wagons: number;
}> = [
  { value: 'decouverte', label: 'Découverte', description: 'Bases de l\'histoire', wagons: 5 },
  { value: 'citoyen',    label: 'Citoyen',    description: 'Connaissances solides', wagons: 7 },
  { value: 'archiviste', label: 'Archiviste', description: 'Niveau expert', wagons: 10 },
  { value: 'all',        label: 'Tous niveaux',description: 'Tous les niveaux mélangés', wagons: 7 },
];

const TrainSetup: React.FC<TrainSetupProps> = ({ onStart }) => {
  const [category, setCategory] = useState<GameCategory | 'mixed'>('mixed');
  const [difficulty, setDifficulty] = useState<GameDifficulty | 'all'>('decouverte');

  const selectedDifficulty = DIFFICULTY_OPTIONS.find((d) => d.value === difficulty)!;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* En-tête */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950">
          🚂 Train Guinée
        </h1>
        <p className="text-base md:text-lg text-slate-600">
          Choisis une catégorie, un niveau, et remets les wagons dans le bon ordre chronologique.
        </p>
      </div>

      {/* Étape 1 : Catégorie */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
          1. Choisis ta catégorie
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORY_OPTIONS.map((opt) => {
            const isSelected = category === opt.value;
            const color = opt.value === 'mixed' ? '#1B2A4A' : categoryColors[opt.value as GameCategory];
            return (
              <button
                key={opt.value}
                onClick={() => setCategory(opt.value)}
                className={`
                  text-left p-4 rounded-2xl border-2 transition-all
                  ${isSelected
                    ? 'border-current shadow-lg scale-[1.02] bg-white'
                    : 'border-slate-200 bg-white hover:border-slate-400 hover:shadow-md'
                  }
                `}
                style={isSelected ? { color, borderColor: color } : undefined}
                aria-pressed={isSelected}
              >
                <div className="text-3xl mb-2">{opt.icon}</div>
                <div className="font-bold text-base">{opt.label}</div>
                <div className="text-xs text-slate-500 mt-1 leading-tight">
                  {opt.description}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Étape 2 : Niveau */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
          2. Choisis ton niveau
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {DIFFICULTY_OPTIONS.map((opt) => {
            const isSelected = difficulty === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setDifficulty(opt.value)}
                className={`
                  text-left p-4 rounded-2xl border-2 transition-all
                  ${isSelected
                    ? 'border-indigo-900 bg-indigo-50 shadow-lg scale-[1.02]'
                    : 'border-slate-200 bg-white hover:border-slate-400 hover:shadow-md'
                  }
                `}
                aria-pressed={isSelected}
              >
                <div className="font-bold text-base text-indigo-950">{opt.label}</div>
                <div className="text-xs text-slate-500 mt-1 leading-tight">
                  {opt.description}
                </div>
                <div className="mt-2 text-xs font-semibold text-amber-700">
                  {opt.wagons} wagons
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* CTA — Démarrer */}
      <div className="text-center pt-4">
        <button
          onClick={() => onStart({ category, difficulty })}
          className="
            inline-flex items-center gap-3
            bg-amber-700 hover:bg-amber-800 active:bg-amber-900
            text-white font-bold text-lg
            px-8 py-4 rounded-full shadow-xl
            transition-all hover:scale-105 active:scale-100
          "
        >
          🚂 En route vers la mémoire !
          <span className="text-sm font-normal opacity-80">
            ({selectedDifficulty.wagons} wagons)
          </span>
        </button>
      </div>

      {/* Note pédagogique */}
      <div className="text-center text-xs text-slate-500 max-w-md mx-auto">
        Train Guinée est un jeu de L'Atelier Solidaire / Projet Pati,
        construit pour la 1ʳᵉ Semaine Nationale des Archives de la Guinée (25-30 juin 2026).
      </div>
    </div>
  );
};

export default TrainSetup;
