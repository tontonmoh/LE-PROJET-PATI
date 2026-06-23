// src/components/senag/TrainResult.tsx
// Écran de résultats : score + ordre du joueur vs ordre correct

import React from 'react';
import type { GameQuestion } from '../../data/senagGame';
import TrainWagon from './TrainWagon';
import TrainLocomotive from './TrainLocomotive';

interface TrainResultProps {
  playerOrder: GameQuestion[];   // ordre saisi par le joueur
  correctOrder: GameQuestion[];  // ordre chronologique correct
  onReplay: () => void;          // rejouer avec nouveaux wagons
  onReturnToSetup: () => void;   // changer paramètres
  onBackToSenag: () => void;     // retour à /senag
}

const TrainResult: React.FC<TrainResultProps> = ({
  playerOrder,
  correctOrder,
  onReplay,
  onReturnToSetup,
  onBackToSenag,
}) => {
  // Calcul du score : nombre de wagons à la même position que dans l'ordre correct
  const correctCount = playerOrder.reduce((acc, q, idx) => {
    return q.id === correctOrder[idx].id ? acc + 1 : acc;
  }, 0);
  const total = playerOrder.length;
  const percentage = Math.round((correctCount / total) * 100);

  // Message selon score
  let message: { title: string; subtitle: string; emoji: string; bg: string };
  if (percentage === 100) {
    message = {
      title: 'Sans-faute, Archiviste !',
      subtitle: 'Tu maîtrises la chronologie. La mémoire nationale t\'appartient.',
      emoji: '🏆',
      bg: 'from-emerald-100 to-emerald-200',
    };
  } else if (percentage >= 70) {
    message = {
      title: 'Excellent voyage',
      subtitle: 'Tu connais bien notre histoire. Encore quelques ajustements.',
      emoji: '🎉',
      bg: 'from-amber-100 to-amber-200',
    };
  } else if (percentage >= 40) {
    message = {
      title: 'Le train avance',
      subtitle: 'Tu progresses. La mémoire nationale se construit pas à pas.',
      emoji: '🚂',
      bg: 'from-blue-100 to-blue-200',
    };
  } else {
    message = {
      title: 'En route pour apprendre',
      subtitle: 'L\'histoire de notre pays s\'apprend. Recommence pour aller plus loin.',
      emoji: '📚',
      bg: 'from-slate-100 to-slate-200',
    };
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* En-tête : score */}
      <div className={`bg-gradient-to-br ${message.bg} rounded-3xl p-8 text-center shadow-lg`}>
        <div className="text-6xl mb-3">{message.emoji}</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
          {message.title}
        </h1>
        <p className="text-slate-700 mb-6">{message.subtitle}</p>

        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-indigo-950">
              {correctCount}<span className="text-2xl text-slate-500">/{total}</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-600 mt-1">
              Wagons en place
            </div>
          </div>
          <div className="h-16 w-px bg-slate-400" />
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-amber-700">
              {percentage}%
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-600 mt-1">
              Score
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 : Ton ordre */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
          Ton ordre
        </h2>
        <div className="bg-slate-50 rounded-2xl p-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-min">
            <TrainLocomotive height={100} />
            {playerOrder.map((q, idx) => {
              const isCorrect = q.id === correctOrder[idx].id;
              return (
                <div key={`player-${q.id}`} className="flex-shrink-0">
                  <ResultWagonStatic
                    question={q}
                    index={idx}
                    isCorrect={isCorrect}
                  />
                </div>
              );
            })}
          </div>
          {/* Rails */}
          <div className="h-1 bg-slate-700 mt-3" />
          <div className="flex justify-around mt-1">
            {Array.from({ length: total + 2 }).map((_, i) => (
              <div key={i} className="w-1 h-2 bg-slate-600" />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 : L'ordre correct */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
          L'ordre chronologique correct
        </h2>
        <div className="bg-emerald-50 rounded-2xl p-4 overflow-x-auto border-2 border-emerald-200">
          <div className="flex items-center gap-2 min-w-min">
            <TrainLocomotive height={100} />
            {correctOrder.map((q, idx) => (
              <div key={`correct-${q.id}`} className="flex-shrink-0">
                <ResultWagonStatic
                  question={q}
                  index={idx}
                  isCorrect={true}
                />
              </div>
            ))}
          </div>
          {/* Rails */}
          <div className="h-1 bg-slate-700 mt-3" />
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
          className="bg-white border-2 border-slate-300 hover:border-slate-500 text-slate-800 font-semibold px-6 py-3 rounded-full transition-all"
        >
          ⚙️ Changer les paramètres
        </button>
        <button
          onClick={onBackToSenag}
          className="bg-indigo-950 hover:bg-indigo-900 text-white font-semibold px-6 py-3 rounded-full transition-all"
        >
          ← Retour SeNAG
        </button>
      </div>
    </div>
  );
};

// Wagon statique (non draggable) pour l'écran résultat — version simplifiée
interface ResultWagonStaticProps {
  question: GameQuestion;
  index: number;
  isCorrect: boolean;
}

const ResultWagonStatic: React.FC<ResultWagonStaticProps> = ({ question, index, isCorrect }) => {
  // Réutilise le système de couleurs catégorie de TrainWagon
  const catStyles: Record<string, { bg: string; border: string; text: string; icon: string; label: string }> = {
    patrimoine: { bg: 'bg-gradient-to-br from-amber-100 to-orange-200', border: 'border-amber-700', text: 'text-amber-900', icon: '🏹', label: 'Patrimoine' },
    politique: { bg: 'bg-gradient-to-br from-yellow-100 to-yellow-200', border: 'border-yellow-600', text: 'text-yellow-900', icon: '🏛️', label: 'Politique' },
    constitutionnel: { bg: 'bg-gradient-to-br from-blue-100 to-indigo-200', border: 'border-indigo-900', text: 'text-indigo-950', icon: '⚖️', label: 'Constitutionnel' },
    culturel: { bg: 'bg-gradient-to-br from-indigo-100 to-purple-200', border: 'border-indigo-700', text: 'text-indigo-900', icon: '🎭', label: 'Culturel' },
    sportif: { bg: 'bg-gradient-to-br from-emerald-100 to-green-200', border: 'border-emerald-700', text: 'text-emerald-900', icon: '⚽', label: 'Sportif' },
  };
  const cs = catStyles[question.category];
  const ring = isCorrect ? 'ring-4 ring-emerald-500' : 'ring-4 ring-rose-500';

  return (
    <div className={`${cs.bg} ${cs.border} ${cs.text} ${ring} w-56 h-40 rounded-2xl border-2 shadow-md p-3 flex flex-col justify-between`}>
      <div className="flex justify-between items-start text-xs font-bold opacity-80">
        <span>{cs.icon} {cs.label}</span>
        <span className="bg-white/60 rounded-full px-2 py-0.5">{index + 1}</span>
      </div>
      <p className="text-sm font-semibold leading-snug text-center line-clamp-3">
        {question.event}
      </p>
      <div className="flex justify-between items-end">
        <span className="text-[10px] uppercase tracking-wider opacity-60">{question.id}</span>
        <span className="text-sm font-extrabold bg-white/70 rounded px-2 py-0.5">
          {question.date}
        </span>
      </div>
    </div>
  );
};

export default TrainResult;
