import {
  POINTS_PER_QUESTION,
  SECTION_LABELS,
  QUIZ_QUESTIONS,
  type QuizSection,
  type QuizOptionId,
} from '../../../data/quizSenag';

export type QuizAnswer = {
  questionId: number;
  selectedId: QuizOptionId;
  isCorrect: boolean;
};

type Props = {
  answers: QuizAnswer[];
  onReplay: () => void;
  onBackToMenu: () => void;
  sessionCode?: string;
  onSubmitToSession?: (score: number, total: number) => Promise<void> | void;
};

export function QuizResult({
  answers,
  onReplay,
  onBackToMenu,
  sessionCode,
  onSubmitToSession,
}: Props) {
  const total = answers.length;
  const correct = answers.filter((a) => a.isCorrect).length;
  const score = correct * POINTS_PER_QUESTION;
  const maxScore = total * POINTS_PER_QUESTION;

  // Section breakdown
  const sectionStats: Record<string, { correct: number; total: number }> = {};
  for (const a of answers) {
    const q = QUIZ_QUESTIONS.find((qq) => qq.id === a.questionId);
    if (!q) continue;
    if (!sectionStats[q.section]) sectionStats[q.section] = { correct: 0, total: 0 };
    sectionStats[q.section].total += 1;
    if (a.isCorrect) sectionStats[q.section].correct += 1;
  }

  const verdict = (() => {
    const pct = (correct / total) * 100;
    if (pct >= 90) return { title: 'Archiviste-né(e)', text: 'La mémoire de la Nation coule dans tes veines.' };
    if (pct >= 70) return { title: 'Citoyen(ne) éclairé(e)', text: 'Tu connais ton pays — bravo, et transmets autour de toi.' };
    if (pct >= 50) return { title: 'Apprenti(e) de la mémoire', text: 'Bon début — la SENAG est faite pour toi.' };
    return { title: 'Visiteur(se) curieux(se)', text: 'Reviens demain, le Mur de la Mémoire a encore mille choses à dire.' };
  })();

  const handleSubmit = async () => {
    if (onSubmitToSession) {
      await onSubmitToSession(score, maxScore);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Verdict header */}
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">📜</div>
        <h1 className="text-3xl md:text-4xl font-serif text-[#0E0E0E] mb-2">
          {verdict.title}
        </h1>
        <p className="text-[#4A4416]/80 italic">{verdict.text}</p>
      </div>

      {/* Score */}
      <div className="bg-[#4A4416] text-[#F2F0E6] rounded-xl p-8 mb-8 text-center">
        <div className="text-sm uppercase tracking-widest opacity-70 mb-2">
          Score
        </div>
        <div className="text-5xl font-serif mb-1">
          {score} <span className="opacity-50 text-3xl">/ {maxScore}</span>
        </div>
        <div className="text-[#C9A227]">
          {correct} bonnes réponses sur {total}
        </div>
      </div>

      {/* Section breakdown */}
      <div className="bg-white border border-[#0E0E0E]/10 rounded-xl p-6 mb-8">
        <h3 className="font-serif text-lg text-[#0E0E0E] mb-4">
          Par manche
        </h3>
        <div className="space-y-3">
          {(Object.keys(sectionStats) as QuizSection[]).map((section) => {
            const stats = sectionStats[section];
            const pct = (stats.correct / stats.total) * 100;
            return (
              <div key={section}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#0E0E0E]/80">
                    {SECTION_LABELS[section]}
                  </span>
                  <span className="text-[#4A4416] font-medium">
                    {stats.correct} / {stats.total}
                  </span>
                </div>
                <div className="h-2 bg-[#F2F0E6] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C9A227] transition-all duration-700"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        {sessionCode && onSubmitToSession && (
          <button
            onClick={handleSubmit}
            className="flex-1 px-6 py-3 rounded-lg bg-[#C9A227] text-[#0E0E0E] font-medium hover:bg-[#b38e1f] transition-colors"
          >
            Enregistrer mon score sur la session {sessionCode}
          </button>
        )}
        <button
          onClick={onReplay}
          className="flex-1 px-6 py-3 rounded-lg border-2 border-[#4A4416] text-[#4A4416] font-medium hover:bg-[#F2F0E6] transition-colors"
        >
          Rejouer
        </button>
        <button
          onClick={onBackToMenu}
          className="flex-1 px-6 py-3 rounded-lg border-2 border-[#0E0E0E]/20 text-[#0E0E0E]/70 font-medium hover:border-[#0E0E0E]/40 transition-colors"
        >
          Retour
        </button>
      </div>
    </div>
  );
}
