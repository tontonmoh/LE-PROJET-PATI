// src/components/senag/PriMoFauteuil.tsx
// Fauteuil ministériel individuel — sortable, affiche un Premier ministre
// Couleur de fond selon ère présidentielle

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { PrimeMinister, PresidentEra } from '../../data/senagGame';

interface PriMoFauteuilProps {
  pm: PrimeMinister;
  showResult?: boolean;
  isCorrectPosition?: boolean;
  index?: number;
  showDates?: boolean;
}

const PRESIDENT_STYLES: Record<PresidentEra, { bg: string; border: string; text: string; label: string }> = {
  sekou_toure: {
    bg: 'bg-gradient-to-br from-red-100 to-red-200',
    border: 'border-red-800',
    text: 'text-red-950',
    label: 'Sékou Touré',
  },
  lansana_conte: {
    bg: 'bg-gradient-to-br from-blue-100 to-blue-200',
    border: 'border-blue-900',
    text: 'text-blue-950',
    label: 'L. Conté',
  },
  dadis_camara: {
    bg: 'bg-gradient-to-br from-stone-200 to-stone-300',
    border: 'border-stone-700',
    text: 'text-stone-900',
    label: 'Dadis Camara',
  },
  sekouba_konate: {
    bg: 'bg-gradient-to-br from-slate-100 to-slate-200',
    border: 'border-slate-600',
    text: 'text-slate-800',
    label: 'S. Konaté',
  },
  alpha_conde: {
    bg: 'bg-gradient-to-br from-purple-100 to-purple-200',
    border: 'border-purple-800',
    text: 'text-purple-950',
    label: 'A. Condé',
  },
  mamadi_doumbouya: {
    bg: 'bg-gradient-to-br from-emerald-100 to-emerald-200',
    border: 'border-emerald-800',
    text: 'text-emerald-950',
    label: 'M. Doumbouya',
  },
};

const PriMoFauteuil: React.FC<PriMoFauteuilProps> = ({
  pm,
  showResult = false,
  isCorrectPosition,
  index,
  showDates = false,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: String(pm.order), disabled: showResult });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 50 : 1,
  };

  const presStyle = PRESIDENT_STYLES[pm.president];

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
      {/* Fauteuil body */}
      <div
        {...attributes}
        {...listeners}
        className={`
          ${presStyle.bg} ${presStyle.border} ${presStyle.text}
          ${resultBorder}
          relative w-52 h-40 rounded-2xl border-2 shadow-lg
          ${showResult ? 'cursor-default' : 'cursor-grab active:cursor-grabbing touch-none'}
          flex flex-col justify-between p-3
          transition-shadow hover:shadow-xl
        `}
        aria-label={`Fauteuil : ${pm.name}`}
      >
        {/* Header : ère + position */}
        <div className="flex justify-between items-start text-xs font-bold opacity-80">
          <span className="leading-tight">{presStyle.label}</span>
          {index !== undefined && (
            <span className="bg-white/70 rounded-full px-2 py-0.5">
              {index + 1}
            </span>
          )}
        </div>

        {/* Nom du PM */}
        <div className="flex-1 flex items-center justify-center px-1 py-1">
          <p className="text-base font-bold leading-tight text-center">
            {pm.name}
          </p>
        </div>

        {/* Footer : dates (visible uniquement en mode résultat) */}
        <div className="flex justify-between items-end">
          <span className="text-[10px] uppercase tracking-wider opacity-60 font-medium">
            PM #{pm.order}
          </span>
          {showDates && (
            <span className="text-[11px] font-extrabold bg-white/80 rounded px-2 py-0.5 whitespace-nowrap">
              {pm.startYear}–{pm.endYear}
            </span>
          )}
        </div>
      </div>

      {/* Pieds du fauteuil (décoratifs) */}
      <div className="flex justify-around absolute -bottom-3 left-4 right-4 pointer-events-none" aria-hidden="true">
        <div className="w-2 h-4 bg-stone-700 rounded-b" />
        <div className="w-2 h-4 bg-stone-700 rounded-b" />
      </div>
    </div>
  );
};

export default PriMoFauteuil;
