import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle, Trophy, RotateCcw, BookOpen } from "lucide-react";
import { TAADIDI_QUIZ, getScoreMessage } from "../data/taadidi-quiz";

// ── Charte ───────────────────────────────────────────────────────────────────
const GREEN         = "#0D2B1A";
const GOLD          = "#FFC93C";
const ACCENT        = "#C8841E";
const MANGROVE_DEEP = "#143D2E";
const CREAM         = "#FFF6E7";
const DISPLAY       = "'Fraunces', Georgia, serif";

const PHASE_COLORS: Record<string, string> = {
  "Nouvelle lune":    "#7B5EA7",
  "Premier quartier": "#2C7DA0",
  "Pleine lune":      "#1F6E52",
  "Dernier quartier": "#C8841E",
};

// Meilleures score localStorage
const STORAGE_KEY = "taadidi_quiz_best";
function getBest(): number { try { return Number(localStorage.getItem(STORAGE_KEY) || 0); } catch { return 0; } }
function saveBest(s: number) { try { if (s > getBest()) localStorage.setItem(STORAGE_KEY, String(s)); } catch { /* */ } }

export default function TaadidiQuiz() {
  const total = TAADIDI_QUIZ.length;

  const [current, setCurrent]   = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore]       = useState(0);
  const [done, setDone]         = useState(false);
  const [best, setBest]         = useState(getBest());

  const q         = TAADIDI_QUIZ[current];
  const phaseColor = PHASE_COLORS[q?.phase] ?? ACCENT;
  const answered  = selected !== null;
  const isLast    = current === total - 1;

  const choose = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    if (idx === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (isLast) {
      saveBest(score + (selected === q.correct ? 0 : 0)); // already counted
      setBest(getBest());
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  // Sauvegarder le meilleur score à la fin
  useEffect(() => {
    if (done) {
      saveBest(score);
      setBest(getBest());
    }
  }, [done, score]);

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  // ════════════════════════════════════════════════════════════════════════
  // ÉCRAN FINAL
  // ════════════════════════════════════════════════════════════════════════
  if (done) {
    const pct  = Math.round((score / total) * 100);
    const msg  = getScoreMessage(score);
    const isWin = score >= 12;
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-12" style={{ background: GREEN }}>
        <div className="w-full max-w-md rounded-[2rem] overflow-hidden" style={{ background: CREAM }}>
          {/* En-tête résultat */}
          <div className="px-8 py-8 text-center" style={{ background: MANGROVE_DEEP }}>
            <div className="text-5xl mb-3">{isWin ? "🏆" : "📚"}</div>
            <h1 className="font-bold text-white text-3xl mb-1" style={{ fontFamily: DISPLAY }}>
              {score} / {total}
            </h1>
            <p className="text-white/70 font-semibold text-sm">{pct}% de bonnes réponses</p>
          </div>

          <div className="px-8 py-7">
            {/* Message */}
            <p className="font-display font-bold text-[#0D2B1A] text-lg text-center mb-2"
              style={{ fontFamily: DISPLAY }}>
              {msg}
            </p>

            {/* Meilleur score */}
            {best >= score && best > 0 && (
              <p className="text-[#8a9389] font-semibold text-sm text-center mb-5">
                Ton meilleur score : <b style={{ color: ACCENT }}>{best}/{total}</b>
              </p>
            )}

            {/* Barre de progression */}
            <div className="h-3 rounded-full mb-6 overflow-hidden" style={{ background: `${GREEN}1a` }}>
              <div className="h-full rounded-full transition-all"
                style={{ width: `${pct}%`, background: isWin ? "#1F6E52" : ACCENT }} />
            </div>

            {/* Score par quartier */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {Object.entries(PHASE_COLORS).map(([phase, color], pi) => {
                const qs = TAADIDI_QUIZ.filter((q) => q.phase === phase);
                const emoji = qs[0]?.emoji ?? "";
                return (
                  <div key={phase} className="rounded-xl px-3 py-2 text-center"
                    style={{ background: `${color}15` }}>
                    <p className="text-lg">{emoji}</p>
                    <p className="text-[10px] font-bold text-[#5a6b62]">{phase}</p>
                    <p className="text-xs font-semibold" style={{ color }}>
                      {qs.length} questions
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Boutons */}
            <div className="flex flex-col gap-2">
              <button onClick={restart}
                className="btn-kid text-white shadow-kid justify-center"
                style={{ background: ACCENT }}>
                <RotateCcw size={18} /> Recommencer le quiz
              </button>
              <Link to="/univers/taadidi"
                className="btn-kid justify-center"
                style={{ background: GOLD, color: GREEN }}>
                <BookOpen size={18} /> Retour à la saga
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // QUESTION
  // ════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      {/* Header */}
      <div className="sticky top-0 z-10 shadow-sm" style={{ background: MANGROVE_DEEP }}>
        <div className="max-w-2xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <Link to="/univers/taadidi"
            className="inline-flex items-center gap-1.5 font-display font-semibold text-sm hover:underline"
            style={{ color: GOLD }}>
            <ArrowLeft size={16} /> Taadidi
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              {current + 1} / {total}
            </span>
            <span className="font-bold text-sm px-2.5 py-1 rounded-full"
              style={{ background: `${GOLD}22`, color: GOLD }}>
              ✓ {score}
            </span>
          </div>
        </div>
        {/* Barre de progression */}
        <div className="h-1" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div className="h-full transition-all duration-300"
            style={{ width: `${((current) / total) * 100}%`, background: phaseColor }} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 py-8">
        {/* Phase */}
        <div className="inline-flex items-center gap-2 font-display font-semibold text-sm px-3 py-1.5 rounded-full mb-5"
          style={{ background: `${phaseColor}18`, color: phaseColor }}>
          {q.emoji} {q.phase}
        </div>

        {/* Question */}
        <h1 className="font-bold text-[#0D2B1A] mb-7 leading-snug"
          style={{ fontFamily: DISPLAY, fontSize: "clamp(1.2rem,4vw,1.65rem)" }}>
          {q.question}
        </h1>

        {/* Choix */}
        <div className="flex flex-col gap-3 mb-7">
          {q.choices.map((choice, i) => {
            const isCorrect = i === q.correct;
            const isSelected = i === selected;
            let bg    = "white";
            let border = "border-[#0D2B1A]/08";
            let textColor = "text-[#0D2B1A]";
            let icon: React.ReactNode = null;

            if (answered) {
              if (isCorrect) {
                bg = `${phaseColor}18`;
                border = `border-[${phaseColor}]`;
                textColor = "text-[#0D2B1A]";
                icon = <CheckCircle2 size={18} style={{ color: phaseColor }} className="shrink-0" />;
              } else if (isSelected) {
                bg = "#fff0f0";
                border = "border-red-300";
                textColor = "text-red-700";
                icon = <XCircle size={18} className="shrink-0 text-red-400" />;
              }
            }

            return (
              <button key={i} onClick={() => choose(i)} disabled={answered}
                className={`w-full flex items-center gap-3 text-left px-4 py-4 rounded-2xl border-2 font-semibold transition-all ${border} ${textColor} ${!answered ? "hover:border-[#C8841E]/40 hover:shadow-sm" : ""}`}
                style={{ background: bg }}>
                <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-sm"
                  style={{
                    background: answered && isCorrect ? `${phaseColor}30` : answered && isSelected && !isCorrect ? "#fee2e2" : `${GREEN}0d`,
                    color: answered && isCorrect ? phaseColor : answered && isSelected && !isCorrect ? "#ef4444" : "#8a9389",
                  }}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1 leading-snug">{choice}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {/* Feedback + bouton suivant */}
        {answered && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="rounded-2xl px-4 py-3 mb-4 flex items-center gap-2"
              style={{ background: selected === q.correct ? `${phaseColor}12` : "#fff0f0" }}>
              {selected === q.correct
                ? <CheckCircle2 size={18} style={{ color: phaseColor }} />
                : <XCircle size={18} className="text-red-400" />}
              <p className="font-semibold text-sm"
                style={{ color: selected === q.correct ? phaseColor : "#ef4444" }}>
                {selected === q.correct
                  ? "Bonne réponse !"
                  : `La bonne réponse était : « ${q.choices[q.correct]} »`}
              </p>
            </div>
            <button onClick={next}
              className="w-full btn-kid text-white shadow-kid justify-center"
              style={{ background: ACCENT }}>
              {isLast ? "Voir mon score →" : "Question suivante →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
