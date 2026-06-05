import { useState } from "react";
import { Trophy, Sparkles, Star, Play } from "lucide-react";
import { CHALLENGE_POOL } from "../data/quizzes";
import QuizRunner from "../components/QuizRunner";

const NIVEAUX = [
  { t: "Ambassadeur", d: "Tu connais la Guinée sur le bout des doigts.", c: "#FFC93C" },
  { t: "Expert", d: "Tu maîtrises l'essentiel de la culture guinéenne.", c: "#0F6E56" },
  { t: "Explorateur", d: "Il reste de belles découvertes à faire.", c: "#3FB6E8" },
  { t: "Novice", d: "Chaque expert a commencé novice. Reviens plus fort !", c: "#FF6B4A" },
];

function pick10() {
  return [...CHALLENGE_POOL].sort(() => Math.random() - 0.5).slice(0, 10);
}

export default function ChallengePati() {
  const [questions, setQuestions] = useState<ReturnType<typeof pick10> | null>(null);
  const [round, setRound] = useState(0);

  if (questions) {
    return (
      <section className="bg-[#FFF6E7] min-h-[70vh]">
        <div className="max-w-2xl mx-auto px-6 pt-8 text-center">
          <span className="inline-flex items-center gap-2 font-display font-semibold text-white bg-[#FF6B4A] px-4 py-1.5 rounded-full"><Trophy size={16} /> Challenge PATI</span>
        </div>
        <QuizRunner key={round} questions={questions} onRestart={() => { setQuestions(pick10()); setRound((r) => r + 1); }} />
      </section>
    );
  }

  return (
    <div className="bg-[#FFF6E7]">
      <section className="max-w-4xl mx-auto px-6 pt-12 text-center">
        <div className="inline-flex items-center gap-2 font-display font-semibold text-white bg-[#FF6B4A] px-4 py-1.5 rounded-full mb-5"><Trophy size={16} /> Challenge PATI</div>
        <h1 className="text-3xl md:text-5xl text-[#0D2B1A] leading-tight mb-3">Teste tes connaissances sur la Guinée&nbsp;!</h1>
        <p className="text-lg text-[#3a4a42] font-semibold max-w-2xl mx-auto mb-7">10 questions tirées au hasard sur la culture, l'histoire et les héros des histoires PATI. Chaque partie est différente&nbsp;!</p>
        <button onClick={() => setQuestions(pick10())} className="btn-kid bg-[#FF6B4A] text-white shadow-kid"><Play size={18} /> Commencer le défi</button>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl text-[#0D2B1A] mb-6 text-center">Les niveaux à débloquer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {NIVEAUX.map((n) => (
            <div key={n.t} className="card-kid p-6 text-center">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: `${n.c}22` }}><Star size={26} style={{ color: n.c }} /></div>
              <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-1">{n.t}</h3>
              <p className="text-xs text-[#5a6b62] font-semibold leading-relaxed">{n.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
