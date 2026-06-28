import {
  MODE_LABELS,
  type QuizMode,
} from '../../../data/quizSenag';

type Props = {
  onStart: (mode: QuizMode) => void;
  sessionCode?: string;
};

const MODES: QuizMode[] = [
  'complet',
  'definitions',
  'figures',
  'pionniers',
  'independance',
  'senag',
];

export function QuizSetup({ onStart, sessionCode }: Props) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">📜</div>
        <h1 className="text-3xl md:text-4xl font-serif text-[#0E0E0E] mb-3">
          25 questions pour la mémoire
        </h1>
        <p className="text-[#4A4416]/80 italic max-w-md mx-auto leading-relaxed">
          Quiz public de la 1ʳᵉ Semaine Nationale des Archives — du Mur de la Mémoire aux Compagnons de l'Indépendance.
        </p>

        {sessionCode && (
          <div className="mt-6 inline-block px-4 py-2 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/30 text-[#4A4416] text-sm">
            Session collective : <span className="font-mono font-medium">{sessionCode}</span>
          </div>
        )}
      </div>

      {/* Mode picker */}
      <div className="space-y-3 mb-8">
        <p className="text-sm uppercase tracking-wider text-[#4A4416]/60 mb-3">
          Choisis ton parcours
        </p>

        <button
          onClick={() => onStart('complet')}
          className="w-full text-left px-6 py-5 rounded-xl bg-[#4A4416] text-[#F2F0E6] hover:bg-[#0E0E0E] transition-colors flex items-center justify-between group"
        >
          <div>
            <div className="font-serif text-lg">{MODE_LABELS.complet}</div>
            <div className="text-sm text-[#F2F0E6]/70 mt-1">
              Le parcours complet — toutes les manches
            </div>
          </div>
          <span className="text-[#C9A227] group-hover:translate-x-1 transition-transform">→</span>
        </button>

        <div className="pt-3">
          <p className="text-xs uppercase tracking-wider text-[#4A4416]/50 mb-2">
            Ou une manche au choix
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {MODES.filter((m) => m !== 'complet').map((mode) => (
              <button
                key={mode}
                onClick={() => onStart(mode)}
                className="text-left px-4 py-3 rounded-lg border border-[#0E0E0E]/15 bg-white hover:border-[#C9A227] hover:bg-[#F2F0E6]/50 transition-colors text-sm text-[#0E0E0E]/85"
              >
                {MODE_LABELS[mode]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-center text-xs text-[#0E0E0E]/40 italic">
        Pas de chrono. L'archive prend le temps qu'il lui faut.
      </p>
    </div>
  );
}
