import { useState } from 'react';
import type { QuizQuestion, QuizOptionId } from '../../../data/quizSenag';

type Props = {
  question: QuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  sectionLabel: string;
  onAnswer: (selectedId: QuizOptionId, isCorrect: boolean) => void;
  onNext: () => void;
};

export function QuizCard({
  question,
  questionIndex,
  totalQuestions,
  sectionLabel,
  onAnswer,
  onNext,
}: Props) {
  const [selectedId, setSelectedId] = useState<QuizOptionId | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (id: QuizOptionId) => {
    if (revealed) return;
    setSelectedId(id);
  };

  const handleValidate = () => {
    if (!selectedId || revealed) return;
    setRevealed(true);
    onAnswer(selectedId, selectedId === question.correctId);
  };

  const handleNext = () => {
    setSelectedId(null);
    setRevealed(false);
    onNext();
  };

  const isLast = questionIndex + 1 === totalQuestions;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm mb-4 text-[#4A4416]/70">
        <span className="uppercase tracking-wider">{sectionLabel}</span>
        <span className="font-medium">
          {questionIndex + 1} / {totalQuestions}
        </span>
      </div>

      <div className="h-1 bg-[#F2F0E6] rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-[#4A4416] transition-all duration-500"
          style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question */}
      <h2 className="text-xl md:text-2xl font-serif text-[#0E0E0E] mb-8 leading-snug">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((opt) => {
          const isSelected = selectedId === opt.id;
          const isCorrect = opt.id === question.correctId;
          const showAsCorrect = revealed && isCorrect;
          const showAsWrong = revealed && isSelected && !isCorrect;

          let className =
            'w-full text-left px-5 py-4 rounded-lg border-2 transition-all flex items-start gap-4';

          if (showAsCorrect) {
            className += ' border-[#4A4416] bg-[#4A4416] text-[#F2F0E6]';
          } else if (showAsWrong) {
            className += ' border-red-700 bg-red-50 text-red-900';
          } else if (isSelected) {
            className += ' border-[#C9A227] bg-[#F2F0E6]';
          } else if (revealed) {
            className += ' border-[#0E0E0E]/15 bg-white text-[#0E0E0E]/50';
          } else {
            className +=
              ' border-[#0E0E0E]/20 bg-white hover:border-[#C9A227] hover:bg-[#F2F0E6]/50';
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={revealed}
              className={className}
            >
              <span className="font-serif text-lg flex-shrink-0 w-7">
                {opt.id}.
              </span>
              <span className="flex-1 leading-relaxed">{opt.text}</span>
              {showAsCorrect && <span className="text-[#C9A227]">✓</span>}
              {showAsWrong && <span className="text-red-700">✗</span>}
            </button>
          );
        })}
      </div>

      {/* Commentary (revealed) */}
      {revealed && (
        <div className="bg-[#F2F0E6] border-l-4 border-[#C9A227] px-5 py-4 mb-8 rounded-r">
          <p className="text-[#0E0E0E]/85 italic leading-relaxed">
            {question.commentary}
          </p>
        </div>
      )}

      {/* Action */}
      <div className="flex justify-end">
        {!revealed ? (
          <button
            onClick={handleValidate}
            disabled={!selectedId}
            className="px-6 py-3 rounded-lg bg-[#4A4416] text-[#F2F0E6] font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0E0E0E] transition-colors"
          >
            Valider ma réponse
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-lg bg-[#4A4416] text-[#F2F0E6] font-medium hover:bg-[#0E0E0E] transition-colors"
          >
            {isLast ? 'Voir mon score →' : 'Question suivante →'}
          </button>
        )}
      </div>
    </div>
  );
}
