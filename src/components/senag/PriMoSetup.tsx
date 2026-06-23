// src/components/senag/PriMoSetup.tsx
// Écran de configuration : choix niveau + ère présidentielle (optionnel)

import React, { useState } from 'react';
import type { PresidentEra, GameDifficulty } from '../../data/senagGame';
import { presidentLabels } from '../../data/senagGame';

interface PriMoSetupProps {
  onStart: (config: PriMoSetupConfig) => void;
  onBack: () => void;
}

export interface PriMoSetupConfig {
  president: PresidentEra | 'tous';
  difficulty: GameDifficulty;
}

const PRESIDENT_OPTIONS: Array<{
  value: PresidentEra | 'tous';
  label: string;
  description: string;
  color: string;
}> = [
  { value: 'tous',             label: 'Tous',                 description: 'Toutes les ères présidentielles', color: '#5b4f3a' },
  { value: 'sekou_toure',      label: 'Sékou Touré',          description: 'Première République (1972-1984)', color: '#7c1a1a' },
  { value: 'lansana_conte',    label: 'Lansana Conté',        description: '2e République (1984-2008)',       color: '#1e3a5f' },
  { value: 'dadis_camara',     label: 'Dadis Camara',         description: 'CNDD (2008-2010)',                color: '#5d4e37' },
  { value: 'sekouba_konate',   label: 'Sékouba Konaté',       description: 'Transition (2010)',               color: '#6b7280' },
  { value: 'alpha_conde',      label: 'Alpha Condé',          description: '3e République (2010-2021)',       color: '#5b21b6' },
  { value: 'mamadi_doumbouya', label: 'Mamadi Doumbouya',     description: 'CNRD / Transition (2021-…)',      color: '#0d503a' },
];

const DIFFICULTY_OPTIONS: Array<{
  value: GameDifficulty;
  label: string;
  description: string;
  count: number;
}> = [
  { value: 'decouverte', label: 'Découverte', description: 'Pour s\'initier',         count: 5  },
  { value: 'citoyen',    label: 'Citoyen',    description: 'Tour d\'horizon',         count: 10 },
  { value: 'archiviste', label: 'Archiviste', description: 'Les 17 Premiers ministres', count: 17 },
];

const PriMoSetup: React.FC<PriMoSetupProps> = ({ onStart, onBack }) => {
  const [president, setPresident] = useState<PresidentEra | 'tous'>('tous');
  const [difficulty, setDifficulty] = useState<GameDifficulty>('citoyen');

  const selectedDifficulty = DIFFICULTY_OPTIONS.find((d) => d.value === difficulty)!;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* Retour SeNAG */}
      <div>
        <button
          onClick={onBack}
          className="text-sm text-stone-600 hover:text-stone-900 font-semibold"
        >
          ← Retour SeNAG
        </button>
      </div>

      {/* En-tête */}
      <div className="text-center space-y-2">
        <div className="text-5xl mb-2">🏛</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900">
          PriMo&apos; — La Ronde des Primatures
        </h1>
        <p className="text-base md:text-lg text-stone-600 max-w-xl mx-auto">
          Choisis un niveau, et remets les Premiers ministres de la Guinée dans l&apos;ordre
          chronologique. De Béavogui (1972) à Bah Oury (2024).
        </p>
      </div>

      {/* Étape 1 : Ère présidentielle (optionnel) */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-stone-700 mb-3">
          1. Quelle ère ? <span className="font-normal text-stone-500 normal-case">(optionnel)</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PRESIDENT_OPTIONS.map((opt) => {
            const isSelected = president === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setPresident(opt.value)}
                className={`
                  text-left p-3 rounded-2xl border-2 transition-all
                  ${isSelected
                    ? 'shadow-lg scale-[1.02] bg-white'
                    : 'border-stone-200 bg-white hover:border-stone-400 hover:shadow-md'
                  }
                `}
                style={isSelected ? { color: opt.color, borderColor: opt.color } : undefined}
                aria-pressed={isSelected}
              >
                <div className="font-bold text-sm leading-tight">{opt.label}</div>
                <div className="text-[11px] text-stone-500 mt-1 leading-tight">
                  {opt.description}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Étape 2 : Niveau */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-stone-700 mb-3">
          2. Combien de Premiers ministres ?
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {DIFFICULTY_OPTIONS.map((opt) => {
            const isSelected = difficulty === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setDifficulty(opt.value)}
                className={`
                  text-left p-4 rounded-2xl border-2 transition-all
                  ${isSelected
                    ? 'border-amber-700 bg-amber-50 shadow-lg scale-[1.02]'
                    : 'border-stone-200 bg-white hover:border-stone-400 hover:shadow-md'
                  }
                `}
                aria-pressed={isSelected}
              >
                <div className="font-bold text-base text-stone-900">{opt.label}</div>
                <div className="text-xs text-stone-500 mt-1 leading-tight">
                  {opt.description}
                </div>
                <div className="mt-2 text-xs font-semibold text-amber-700">
                  {opt.count} fauteuils
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* CTA — Démarrer */}
      <div className="text-center pt-4">
        <button
          onClick={() => onStart({ president, difficulty })}
          className="
            inline-flex items-center gap-3
            bg-amber-700 hover:bg-amber-800 active:bg-amber-900
            text-white font-bold text-lg
            px-8 py-4 rounded-full shadow-xl
            transition-all hover:scale-105 active:scale-100
          "
        >
          🏛 Ouvrir la Primature
          <span className="text-sm font-normal opacity-80">
            ({selectedDifficulty.count} fauteuils)
          </span>
        </button>
      </div>

      {/* Note pédagogique */}
      <div className="text-center text-xs text-stone-500 max-w-md mx-auto">
        PriMo&apos; est un jeu de L&apos;Atelier Solidaire / Projet Pati,
        construit pour la 1<sup>re</sup> Semaine Nationale des Archives de la Guinée (25-30 juin 2026).
      </div>
    </div>
  );
};

export default PriMoSetup;
