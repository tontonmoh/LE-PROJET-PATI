// src/components/senag/TrainWagon.tsx
// Wagon individuel — sortable, affiche un événement historique
// Couleur de fond selon catégorie : ocre/or/bleu encre

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { GameQuestion, GameCategory } from '../../data/senagGame';

interface TrainWagonProps {
  question: GameQuestion;
  showResult?: boolean;        // true en mode résultat : affiche bordure verte/rouge
  isCorrectPosition?: boolean; // si showResult, indique si le wagon est en bonne position
  index?: number;              // position courante dans la séquence
  showDate?: boolean;          // true uniquement en mode résultat
}

const CATEGORY_STYLES: Record<GameCategory, { bg: string; border: string; text: string; label: string; icon: string }> = {
  patrimoine: {
    bg: 'bg-gradient-to-br from-amber-100 to-orange-200',
    border: 'border-amber-700',
    text: 'text-amber-900',
    label: 'Patrimoine',
    icon: '🏹',
  },
  politique: {
    bg: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
    border: 'border-yellow-600',
    text: 'text-yellow-900',
    label: 'Politique',
    icon: '🏛️',
  },
  constitutionnel: {
    bg: 'bg-gradient-to-br from-blue-100 to-indigo-200',
    border: 'border-indigo-900',
    text: 'text-indigo-950',
    label: 'Constitutionnel',
    icon: '⚖️',
  },
  // Inactifs en phase 1 mais conservés pour cohérence du typage
  culturel: {
    bg: 'bg-gradient-to-br from-indigo-100 to-purple-200',
    border: 'border-indigo-700',
    text: 'text-indigo-900',
    label: 'Culturel',
    icon: '🎭',
  },
  sportif: {
    bg: 'bg-gradient-to-br from-emerald-100 to-green-200',
    border: 'border-emerald-700',
    text: 'text-emerald-900',
    label: 'Sportif',
    icon: '⚽',
  },
};

const TrainWagon: React.FC<TrainWagonProps> = ({
  question,
  showResult = false,
  isCorrectPosition,
  index,
  showDate = false,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: question.id, disabled: showResult });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 50 : 1,
  };

  const catStyle = CATEGORY_STYLES[question.category];

  // Bordure résultat (vert si correct, rouge si non)
  const resultBorder = showResult
    ? isCorrectPosition
      ? 'ring-4 ring-emerald-500'
      : 'ring-4 ring-rose-500'
    : '';

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative flex-shrink-0"
    >
      {/* Wagon body */}
      <div
        {...attributes}
        {...listeners}
        className={`
          ${catStyle.bg} ${catStyle.border} ${catStyle.text}
          ${resultBorder}
          relative w-56 h-40 rounded-2xl border-2 shadow-lg
          ${showResult ? 'cursor-default' : 'cursor-grab active:cursor-grabbing touch-none'}
          flex flex-col justify-between p-3
          transition-shadow hover:shadow-xl
        `}
        aria-label={`Wagon : ${question.event}`}
      >
        {/* Header : icône catégorie + position */}
        <div className="flex justify-between items-start text-xs font-bold opacity-80">
          <span>
            {catStyle.icon} {catStyle.label}
          </span>
          {index !== undefined && (
            <span className="bg-white/60 rounded-full px-2 py-0.5">
              {index + 1}
            </span>
          )}
        </div>

        {/* Événement (texte principal) */}
        <div className="flex-1 flex items-center justify-center px-1 py-1">
          <p className="text-sm font-semibold leading-snug text-center line-clamp-4">
            {question.event}
          </p>
        </div>

        {/* Footer : date (visible uniquement en mode résultat) */}
        <div className="flex justify-between items-end">
          <span className="text-[10px] uppercase tracking-wider opacity-60 font-medium">
            {question.id}
          </span>
          {showDate && (
            <span className="text-sm font-extrabold bg-white/70 rounded px-2 py-0.5">
              {question.date}
            </span>
          )}
        </div>
      </div>

      {/* Attelage entre wagons (visuel) */}
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-2 bg-slate-700 rounded-r" aria-hidden="true" />

      {/* Roues sous le wagon */}
      <div className="flex justify-around absolute -bottom-3 left-4 right-4 pointer-events-none" aria-hidden="true">
        <div className="w-5 h-5 rounded-full bg-slate-800 border-2 border-slate-300" />
        <div className="w-5 h-5 rounded-full bg-slate-800 border-2 border-slate-300" />
      </div>
    </div>
  );
};

export default TrainWagon;
