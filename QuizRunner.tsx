import { useState } from "react";
import { Check, X, Sparkles, RefreshCw, Lightbulb } from "lucide-react";
import type { QuizQ } from "../data/quizzes";
import { track } from "../lib/track";

const TIERS = [
  { min: 0.9, t: "Ambassadeur PATI", d: "Exceptionnel ! Tu connais la Guinée sur le bout des doigts.", c: "#FFC93C" },
  { min: 0.7, t: "Expert", d: "Très fort ! Tu maîtrises l'essentiel de la culture guinéenne.", c: "#0F6E56" },
  { min: 0.4, t: "Explorateur", d: "Bon début ! Il reste de belles découvertes à faire.", c: "#3FB6E8" },
  { min: 0, t: "Novice", d: "Chaque expert a commencé novice. Replonge dans les histoires et reviens plus fort !", c: "#FF6B4A" },
];

export default function QuizRunner({ questions, onRestart, id }: { questions: QuizQ[]; onRestart?: () => void; id?: string }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[i];
  const pct = Math.round((i / questions.length) * 100);

  const pick = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 < questions.length) { setI(i + 1); setPicked(null); }
    else { track("quiz_termine", { livre: id, score, total: questions.length }); setDone(true); }
  };

  if (done) {
    const ratio = score / questions.length;
    const tier = TIERS.find((t) => ratio >= t.min)!;
    return (
      <div className="max-w-2xl mx-auto px-6 py-14 text-center">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-5" style={{ background: `${tier.c}22` }}>
          <Sparkles size={40} style={{ color: tier.c }} />
        </div>
        <p className="font-display font-semibold text-[#5a6b62] mb-1">Ton score</p>
        <div className="font-display font-bold text-5xl text-[#0D2B1A] mb-3">{score} / {questions.length}</div>
        <h2 className="text-2xl text-[#0D2B1A] mb-2" style={{ color: tier.c }}>{tier.t}</h2>
        <p className="text-[#3a4a42] font-semibold mb-8 max-w-md mx-auto">{tier.d}</p>
        <button onClick={() => { setI(0); setPicked(null); setScore(0); setDone(false); onRestart?.(); }} className="btn-kid bg-[#0F6E56] text-white">
          <RefreshCw size={18} /> Rejouer
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-2 text-sm font-display font-semibold text-[#0F6E56]">
        <span>Question {i + 1} / {questions.length}</span>
        <span>{score} bon{score > 1 ? "s" : ""}</span>
      </div>
      <div className="h-3 rounded-full bg-[#0F6E56]/15 overflow-hidden mb-8">
        <div className="h-full bg-[#FFC93C] transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>

      <h2 className="text-xl md:text-2xl text-[#0D2B1A] text-center mb-8 leading-snug">{q.q}</h2>

      <div className="grid gap-3 max-w-lg mx-auto">
        {q.options.map((opt, idx) => {
          let cls = "bg-white text-[#0D2B1A] hover:bg-[#FFC93C]/20";
          let icon = null;
          if (picked !== null) {
            if (idx === q.answer) { cls = "bg-[#0F6E56] text-white"; icon = <Check size={18} />; }
            else if (idx === picked) { cls = "bg-[#FF6B4A] text-white"; icon = <X size={18} />; }
            else cls = "bg-white text-[#0D2B1A] opacity-60";
          }
          return (
            <button key={idx} onClick={() => pick(idx)} disabled={picked !== null}
              className={`card-kid px-5 py-4 font-display font-semibold text-left flex items-center justify-between gap-3 ${cls}`}>
              <span>{opt}</span>{icon}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className="max-w-lg mx-auto mt-6">
          {q.fact && (
            <div className="flex items-start gap-2 bg-[#5DCAA5]/15 text-[#0F6E56] rounded-2xl px-4 py-3 text-sm font-semibold mb-4">
              <Lightbulb size={18} className="shrink-0 mt-0.5" />{q.fact}
            </div>
          )}
          <button onClick={next} className="btn-kid bg-[#FF6B4A] text-white w-full justify-center">
            {i + 1 < questions.length ? "Question suivante" : "Voir mon score"}
          </button>
        </div>
      )}
    </div>
  );
}
