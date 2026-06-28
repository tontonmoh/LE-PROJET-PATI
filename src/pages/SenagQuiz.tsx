import { useMemo, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  getQuestionsForMode,
  SECTION_LABELS,
  type QuizMode,
  type QuizOptionId,
} from '../data/quizSenag';
import { QuizSetup } from '../components/senag/QuizSenag/QuizSetup';
import { QuizCard } from '../components/senag/QuizSenag/QuizCard';
import { QuizResult, type QuizAnswer } from '../components/senag/QuizSenag/QuizResult';

// ────────────────────────────────────────────────────────────
// SESSION INTEGRATION
// ────────────────────────────────────────────────────────────
// Adapter ce bloc selon la signature réelle de src/lib/session.ts.
// L'idée : si un ?session=CODE est dans l'URL, on enregistre le score
// dans session_scores avec game='quiz-senag' à la fin de la partie.
//
// import { submitSessionScore } from '../lib/session';
//
// async function submitToSession(code: string, score: number, total: number) {
//   await submitSessionScore({
//     code,
//     game: 'quiz-senag',
//     score,
//     total,
//   });
// }
// ────────────────────────────────────────────────────────────

type Phase = 'setup' | 'playing' | 'result';

export default function SenagQuiz() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionCode = searchParams.get('session') ?? undefined;

  const [phase, setPhase] = useState<Phase>('setup');
  const [mode, setMode] = useState<QuizMode>('complet');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const questions = useMemo(() => getQuestionsForMode(mode), [mode]);
  const currentQuestion = questions[questionIndex];

  const handleStart = (selectedMode: QuizMode) => {
    setMode(selectedMode);
    setQuestionIndex(0);
    setAnswers([]);
    setPhase('playing');
  };

  const handleAnswer = (selectedId: QuizOptionId, isCorrect: boolean) => {
    setAnswers((prev) => [
      ...prev,
      { questionId: currentQuestion.id, selectedId, isCorrect },
    ]);
  };

  const handleNext = () => {
    if (questionIndex + 1 >= questions.length) {
      setPhase('result');
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handleReplay = () => {
    setQuestionIndex(0);
    setAnswers([]);
    setPhase('playing');
  };

  const handleBackToMenu = () => {
    if (sessionCode) {
      navigate(`/session/${sessionCode}`);
    } else {
      setPhase('setup');
    }
  };

  const handleSubmitToSession = async (score: number, total: number) => {
    if (!sessionCode) return;
    // TODO: brancher à src/lib/session.ts
    // await submitSessionScore({ code: sessionCode, game: 'quiz-senag', score, total });
    console.log('[quiz-senag] submit', { sessionCode, score, total });
    navigate(`/session/${sessionCode}/scores`);
  };

  // Section label for current question
  const sectionLabel = currentQuestion
    ? SECTION_LABELS[currentQuestion.section]
    : '';

  return (
    <main className="min-h-screen bg-[#F2F0E6]/40 py-12 px-4">
      {phase === 'setup' && (
        <QuizSetup onStart={handleStart} sessionCode={sessionCode} />
      )}

      {phase === 'playing' && currentQuestion && (
        <QuizCard
          question={currentQuestion}
          questionIndex={questionIndex}
          totalQuestions={questions.length}
          sectionLabel={sectionLabel}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}

      {phase === 'result' && (
        <QuizResult
          answers={answers}
          onReplay={handleReplay}
          onBackToMenu={handleBackToMenu}
          sessionCode={sessionCode}
          onSubmitToSession={
            sessionCode ? handleSubmitToSession : undefined
          }
        />
      )}
    </main>
  );
}
