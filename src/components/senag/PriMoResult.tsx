// src/components/senag/PriMoResult.tsx
// Écran de résultats PriMo' : score + ordre du joueur vs ordre correct

import React from 'react';
import type { PrimeMinister, PresidentEra } from '../../data/senagGame';

interface PriMoResultProps {
  playerOrder: PrimeMinister[];
  correctOrder: PrimeMinister[];
  onReplay: () => void;
  onReturnToSetup: () => void;
  onBackToSenag: () => void;
}

const PRESIDENT_STYLES: Record<PresidentEra, { bg: string; border: string; text: string; label: string }> = {
  sekou_toure:      { bg: 'bg-gradient-to-br from-red-100 to-red-200',         border: 'border-red-800',     text: 'text-red-950',     label: 'Sékou Touré' },
  lansana_conte:    { bg: 'bg-gradient-to-br from-blue-100 to-blue-200',       border: 'border-blue-900',    text: 'text-blue-950',    label: 'L. Conté' },
  dadis_camara:     { bg: 'bg-gradient-to-br from-stone-200 to-stone-300',     border: 'border-stone-700',   text: 'text-stone-900',   label: 'Dadis Camara' },
  sekouba_konate:   { bg: 'bg-gradient-to-br from-slate-100 to-slate-200',     border: 'border-slate-600',   text: 'text-slate-800',   label: 'S. Konaté' },
  alpha_conde:      { bg: 'bg-gradient-to-br from-purple-100 to-purple-200',   border: 'border-purple-800',  text: 'text-purple-950',  label: 'A. Condé' },
  mamadi_doumbouya: { bg: 'bg-gradient-to-br from-emerald-100 to-emerald-200', border: 'border-emerald-800', text: 'text-emerald-950', label: 'M. Doumbouya' },
};

const PriMoResult: React.FC<PriMoResultProps> = ({
  playerOrder,
  correctOrder,
  onReplay,
  onReturnToSetup,
  onBackToSenag,
}) => {
  const correctCount = playerOrder.reduce((acc, pm, idx) => {
    return pm.order === correctOrder[idx].order ? acc + 1 : acc;
  }, 0);
  const total = playerOrder.length;
  const percentage = Math.round((correctCount / total) * 100);

  let message: { title: string; subtitle: string; emoji: string; bg: string };
  if (percentage === 100) {
    message = {
      title: 'Sans-faute, Archiviste !',
      subtitle: 'Tu maîtrises la chronologie des Primatures de la Guinée.',
      emoji: '🏆',
      bg: 'from-emerald-100 to-emerald-200',
    };
  } else if (percentage >= 70) {
    message = {
      title: 'Excellente Ronde',
      subtitle: 'Tu connais bien tes Premiers ministres. Quelques ajustements restent.',
      emoji: '🎉',
      bg: 'from-amber-100 to-amber-200',
    };
  } else if (percentage >= 40) {
    message = {
      title: 'La Ronde tourne',
      subtitle: 'Tu progresses. La mémoire des gouvernements se construit.',
      emoji: '🏛',
      bg: 'from-blue-100 to-blue-200',
    };
  } else {
    message = {
      title: 'À toi de découvrir',
      subtitle: 'Les Primatures guinéennes ont leur histoire. Recommence pour aller plus loin.',
      emoji: '📚',
      bg: 'from-stone-100 to-stone-200',
    };
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* En-tête : score */}
      <div className={`bg-gradient-to-br ${message.bg} rounded-3xl p-8 text-center shadow-lg`}>
        <div className="text-6xl mb-3">{message.emoji}</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-2">
          {message.title}
        </h1>
        <p className="text-stone-700 mb-6">{message.subtitle}</p>

        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-stone-900">
              {correctCount}<span className="text-2xl text-stone-500">/{total}</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-600 mt-1">
              Fauteuils en place
            </div>
          </div>
          <div className="h-16 w-px bg-stone-400" />
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-amber-700">
              {percentage}%
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-600 mt-1">
              Score
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 : Ton ordre */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-stone-700 mb-3">
          Ton ordre
        </h2>
        <div className="bg-stone-50 rounded-2xl p-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-min">
            {playerOrder.map((pm, idx) => {
              const isCorrect = pm.order === correctOrder[idx].order;
              return (
                <div key={`player-${pm.order}`} className="flex-shrink-0">
                  <ResultFauteuilStatic pm={pm} index={idx} isCorrect={isCorrect} />
                </div>
              );
            })}
          </div>
          {/* Tapis rouge */}
          <div className="h-2 bg-gradient-to-r from-red-800 via-red-700 to-red-800 mt-3 rounded" />
        </div>
      </section>

      {/* Section 2 : L'ordre correct */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-stone-700 mb-3">
          L&apos;ordre chronologique correct
        </h2>
        <div className="bg-emerald-50 rounded-2xl p-4 overflow-x-auto border-2 border-emerald-200">
          <div className="flex items-center gap-2 min-w-min">
            {correctOrder.map((pm, idx) => (
              <div key={`correct-${pm.order}`} className="flex-shrink-0">
                <ResultFauteuilStatic pm={pm} index={idx} isCorrect={true} />
              </div>
            ))}
          </div>
          <div className="h-2 bg-gradient-to-r from-red-800 via-red-700 to-red-800 mt-3 rounded" />
        </div>
      </section>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <button
          onClick={onReplay}
          className="bg-amber-700 hover:bg-amber-800 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105"
        >
          🔄 Rejouer
        </button>
        <button
          onClick={onReturnToSetup}
          className="bg-white border-2 border-stone-300 hover:border-stone-500 text-stone-800 font-semibold px-6 py-3 rounded-full transition-all"
        >
          ⚙️ Changer les paramètres
        </button>
        <button
          onClick={onBackToSenag}
          className="bg-stone-800 hover:bg-stone-900 text-white font-semibold px-6 py-3 rounded-full transition-all"
        >
          ← Retour SeNAG
        </button>
      </div>
    </div>
  );
};

// Fauteuil statique (non draggable) pour l'écran résultat
interface ResultFauteuilStaticProps {
  pm: PrimeMinister;
  index: number;
  isCorrect: boolean;
}

const ResultFauteuilStatic: React.FC<ResultFauteuilStaticProps> = ({ pm, index, isCorrect }) => {
  const presStyle = PRESIDENT_STYLES[pm.president];
  const ring = isCorrect ? 'ring-4 ring-emerald-500' : 'ring-4 ring-rose-500';

  return (
    <div className={`${presStyle.bg} ${presStyle.border} ${presStyle.text} ${ring} w-52 h-40 rounded-2xl border-2 shadow-md p-3 flex flex-col justify-between`}>
      <div className="flex justify-between items-start text-xs font-bold opacity-80">
        <span className="leading-tight">{presStyle.label}</span>
        <span className="bg-white/70 rounded-full px-2 py-0.5">{index + 1}</span>
      </div>
      <p className="text-base font-bold leading-tight text-center">{pm.name}</p>
      <div className="flex justify-between items-end">
        <span className="text-[10px] uppercase tracking-wider opacity-60">PM #{pm.order}</span>
        <span className="text-[11px] font-extrabold bg-white/80 rounded px-2 py-0.5 whitespace-nowrap">
          {pm.startYear}–{pm.endYear}
        </span>
      </div>
    </div>
  );
};

export default PriMoResult;
