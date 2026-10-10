import { useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { BookOpen, ExternalLink, Loader2, Trophy } from 'lucide-react';
import { QUIZ_SEBE, tirerPartie, type SebeQuestion, type SebeStrate } from '../data/quizSebe';
import { QuizCard } from '../components/senag/QuizSenag/QuizCard';
import type { QuizQuestion, QuizOptionId } from '../data/quizSenag';
// ⚠️ À ALIGNER sur src/lib/session.ts — voir enregistrerScore() plus bas.
import { submitScore } from '../lib/session';

// ── Charte Sèbè ──────────────────────────────────────────────────────────────
const INK    = '#2F2A5E'; // indigo encre
const PAPER  = '#F6F1E7';
const ACCENT = '#C8841E';
const DISPLAY = "'Fraunces', Georgia, serif";

const PENALTY_PER_WRONG_MS = 60_000; // même règle que le quiz SENAG : précis bat rapide
const LS_VUS = 'sebe:vus';           // anti-répétition par navigateur

type Phase = 'setup' | 'playing' | 'result';
type Format = 'partie' | 'eclair';
const FORMATS: Record<Format, { n: number; label: string; sub: string }> = {
  partie: { n: 25, label: 'La Partie', sub: '25 questions, du facile au difficile' },
  eclair: { n: 10, label: 'L’Éclair', sub: '10 questions, pour un stand ou une pause' },
};

const STRATE_LABELS: Record<SebeStrate, string> = {
  fondateurs: 'Les fondateurs',
  contemporains: 'Les contemporains',
  oralite: 'La parole',
  encyclopedies: 'Les encyclopédies',
};

const ABCD: QuizOptionId[] = ['A', 'B', 'C', 'D'];

/** Adaptateur SebeQuestion → QuizQuestion (format attendu par QuizCard SENAG). */
function toQuizQuestion(q: SebeQuestion, idx: number): QuizQuestion {
  return {
    id: idx + 1,
    section: 'figures', // champ requis par le type, non affiché ici
    question: q.question,
    options: q.choix.map((text, i) => ({ id: ABCD[i], text })),
    correctId: ABCD[q.reponse],
    commentary: q.fiche,
  };
}

function lireVus(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(LS_VUS) ?? '[]')); } catch { return new Set(); }
}
function ecrireVus(ids: Set<string>) {
  try {
    // si tout le pool a été vu, on repart de zéro
    const arr = ids.size >= QUIZ_SEBE.length ? [] : [...ids];
    localStorage.setItem(LS_VUS, JSON.stringify(arr));
  } catch { /* ignore */ }
}

type Reponse = { q: SebeQuestion; isCorrect: boolean };

export default function SebeQuiz() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionCode = searchParams.get('session') ?? undefined;

  const [phase, setPhase] = useState<Phase>('setup');
  const [format, setFormat] = useState<Format>('partie');
  const [questions, setQuestions] = useState<SebeQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [reponses, setReponses] = useState<Reponse[]>([]);
  const [revealed, setRevealed] = useState(false);
  const startRef = useRef<number>(0);
  const [elapsedMs, setElapsedMs] = useState(0);

  const current = questions[index];
  const quizQuestion = useMemo(() => (current ? toQuizQuestion(current, index) : null), [current, index]);

  const demarrer = (f: Format) => {
    const tirage = tirerPartie(lireVus(), FORMATS[f].n);
    setFormat(f);
    setQuestions(tirage);
    setIndex(0);
    setReponses([]);
    setRevealed(false);
    startRef.current = Date.now();
    setPhase('playing');
  };

  const onAnswer = (_id: QuizOptionId, isCorrect: boolean) => {
    if (!current) return;
    setReponses((prev) => [...prev, { q: current, isCorrect }]);
    setRevealed(true);
  };

  const onNext = () => {
    setRevealed(false);
    if (index + 1 >= questions.length) {
      setElapsedMs(Date.now() - startRef.current);
      const vus = lireVus();
      questions.forEach((q) => vus.add(q.id));
      ecrireVus(vus);
      setPhase('result');
    } else {
      setIndex(index + 1);
    }
  };

  const retour = () => (sessionCode ? navigate(`/session/${sessionCode}`) : setPhase('setup'));

  return (
    <main className="min-h-screen py-12 px-4" style={{ background: PAPER }}>
      {phase === 'setup' && <SebeSetup onStart={demarrer} sessionCode={sessionCode} />}

      {phase === 'playing' && current && quizQuestion && (
        <>
          <QuizCard
            key={current.id}
            question={quizQuestion}
            questionIndex={index}
            totalQuestions={questions.length}
            sectionLabel={STRATE_LABELS[current.strate]}
            onAnswer={onAnswer}
            onNext={onNext}
          />
          {revealed && current.route && (
            <div className="w-full max-w-2xl mx-auto -mt-4 mb-8">
              <Link
                to={current.route}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full"
                style={{ background: `${INK}12`, color: INK }}
              >
                <ExternalLink size={14} /> Ouvrir la page {current.route}
              </Link>
            </div>
          )}
        </>
      )}

      {phase === 'result' && (
        <SebeResult
          reponses={reponses}
          elapsedMs={elapsedMs}
          format={format}
          onReplay={() => demarrer(format)}
          onBack={retour}
          sessionCode={sessionCode}
          onSubmitted={() => sessionCode && navigate(`/sebe/${sessionCode}/scores`)}
        />
      )}
    </main>
  );
}

// ── Écran 1 : choix du format ────────────────────────────────────────────────
function SebeSetup({ onStart, sessionCode }: { onStart: (f: Format) => void; sessionCode?: string }) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <div className="mb-4 inline-flex w-16 h-16 rounded-2xl items-center justify-center" style={{ background: `${INK}12` }}>
          <BookOpen size={34} style={{ color: INK }} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: DISPLAY, color: INK }}>Sèbè</h1>
        <p className="text-lg font-semibold" style={{ color: ACCENT }}>Le jeu littéraire guinéen</p>
        <p className="mt-3 max-w-md mx-auto leading-relaxed italic" style={{ color: `${INK}B0` }}>
          Camara Laye, Niane, Sassine, Monénembo, l’épopée des griots — et ce que racontent nos encyclopédies.
          Chaque partie est tirée au sort. Jamais deux fois la même.
        </p>
        {sessionCode && (
          <div className="mt-6 inline-block px-4 py-2 rounded-full text-sm" style={{ background: `${ACCENT}22`, color: INK }}>
            Session collective : <span className="font-mono font-medium">{sessionCode}</span>
          </div>
        )}
      </div>

      <div className="space-y-3">
        {(Object.keys(FORMATS) as Format[]).map((f, i) => (
          <button
            key={f}
            onClick={() => onStart(f)}
            className="w-full text-left px-6 py-5 rounded-xl transition-colors flex items-center justify-between group"
            style={i === 0 ? { background: INK, color: PAPER } : { background: 'white', color: INK, border: `2px solid ${INK}22` }}
          >
            <div>
              <div className="text-lg" style={{ fontFamily: DISPLAY }}>{FORMATS[f].label}</div>
              <div className="text-sm opacity-70 mt-1">{FORMATS[f].sub}</div>
            </div>
            <span className="group-hover:translate-x-1 transition-transform" style={{ color: ACCENT }}>→</span>
          </button>
        ))}
      </div>

      <p className="text-center text-xs italic mt-8" style={{ color: `${INK}70` }}>
        Le temps compte, mais une erreur coûte une minute. Lis avant de cliquer.
      </p>
    </div>
  );
}

// ── Écran 3 : résultat ───────────────────────────────────────────────────────
function SebeResult({
  reponses, elapsedMs, format, onReplay, onBack, sessionCode, onSubmitted,
}: {
  reponses: Reponse[]; elapsedMs: number; format: Format;
  onReplay: () => void; onBack: () => void; sessionCode?: string; onSubmitted: () => void;
}) {
  const total = reponses.length;
  const bonnes = reponses.filter((r) => r.isCorrect).length;
  const fautes = total - bonnes;
  const timeMs = elapsedMs + fautes * PENALTY_PER_WRONG_MS;
  const pct = total ? (bonnes / total) * 100 : 0;

  const verdict =
    pct >= 90 ? { t: 'Djeli', s: 'Tu portes la parole. Les autres écoutent.' } :
    pct >= 70 ? { t: 'Lecteur assidu', s: 'Tu connais la bibliothèque. Reste à la faire lire autour de toi.' } :
    pct >= 50 ? { t: 'Apprenti lecteur', s: 'La moitié du chemin. L’autre moitié est dans les livres.' } :
                { t: 'Visiteur curieux', s: 'Tu es entré. Maintenant ouvre un livre — n’importe lequel, mais guinéen.' };

  // Pages des encyclopédies rencontrées dans la partie
  const pages = Array.from(new Set(reponses.map((r) => r.q.route).filter(Boolean))) as string[];

  // Par strate
  const parStrate: Record<string, { ok: number; n: number }> = {};
  for (const r of reponses) {
    const k = r.q.strate;
    parStrate[k] ??= { ok: 0, n: 0 };
    parStrate[k].n += 1;
    if (r.isCorrect) parStrate[k].ok += 1;
  }

  const [pseudo, setPseudo] = useState('');
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const envoyer = async () => {
    if (!sessionCode || !pseudo.trim()) return;
    setSending(true); setErr(null);
    try {
      await enregistrerScore(sessionCode, pseudo.trim(), timeMs, bonnes, total);
      onSubmitted();
    } catch {
      setErr('Le score n’a pas pu être enregistré. Réessaie.');
    } finally {
      setSending(false);
    }
  };

  const mm = Math.floor(timeMs / 60000);
  const ss = Math.floor((timeMs % 60000) / 1000).toString().padStart(2, '0');

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Trophy size={40} className="mx-auto mb-3" style={{ color: ACCENT }} />
        <h1 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: DISPLAY, color: INK }}>{verdict.t}</h1>
        <p className="italic" style={{ color: `${INK}B0` }}>{verdict.s}</p>
      </div>

      <div className="rounded-xl p-8 mb-6 text-center" style={{ background: INK, color: PAPER }}>
        <div className="text-sm uppercase tracking-widest opacity-70 mb-2">{FORMATS[format].label}</div>
        <div className="text-5xl mb-1" style={{ fontFamily: DISPLAY }}>
          {bonnes} <span className="opacity-50 text-3xl">/ {total}</span>
        </div>
        <div style={{ color: ACCENT }}>
          temps {mm}:{ss} {fautes > 0 && <span className="opacity-70">(dont {fautes} min de pénalité)</span>}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 mb-6" style={{ border: `1px solid ${INK}15` }}>
        <h3 className="text-lg mb-4" style={{ fontFamily: DISPLAY, color: INK }}>Par strate</h3>
        <div className="space-y-3">
          {Object.entries(parStrate).map(([k, v]) => (
            <div key={k}>
              <div className="flex justify-between text-sm mb-1">
                <span style={{ color: `${INK}CC` }}>{STRATE_LABELS[k as SebeStrate]}</span>
                <span className="font-medium" style={{ color: INK }}>{v.ok} / {v.n}</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: PAPER }}>
                <div className="h-full transition-all duration-700" style={{ width: `${(v.ok / v.n) * 100}%`, background: ACCENT }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {pages.length > 0 && (
        <div className="rounded-xl p-6 mb-6" style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}40` }}>
          <h3 className="text-lg mb-2" style={{ fontFamily: DISPLAY, color: INK }}>
            Tu as croisé {pages.length} encyclopédie{pages.length > 1 ? 's' : ''}
          </h3>
          <div className="flex flex-wrap gap-2">
            {pages.map((p) => (
              <Link key={p} to={p} className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full bg-white" style={{ color: INK }}>
                <ExternalLink size={13} /> {p}
              </Link>
            ))}
          </div>
        </div>
      )}

      {sessionCode && (
        <div className="bg-white rounded-xl p-6 mb-6" style={{ border: `1px solid ${INK}15` }}>
          <label className="block text-sm font-semibold mb-2" style={{ color: INK }}>Ton surnom pour le classement</label>
          <div className="flex gap-2">
            <input
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              maxLength={24}
              placeholder="ex. Fanta de Labé"
              className="flex-1 rounded-lg px-4 py-3 outline-none"
              style={{ border: `2px solid ${INK}22`, color: INK }}
            />
            <button
              onClick={envoyer}
              disabled={sending || !pseudo.trim()}
              className="px-5 py-3 rounded-lg font-medium disabled:opacity-40"
              style={{ background: ACCENT, color: INK }}
            >
              {sending ? <Loader2 size={18} className="animate-spin" /> : 'Enregistrer'}
            </button>
          </div>
          {err && <p className="text-red-700 text-sm mt-2">{err}</p>}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={onReplay} className="flex-1 px-6 py-3 rounded-lg font-medium" style={{ border: `2px solid ${INK}`, color: INK }}>
          Nouvelle partie
        </button>
        <button onClick={onBack} className="flex-1 px-6 py-3 rounded-lg font-medium" style={{ border: `2px solid ${INK}33`, color: `${INK}B0` }}>
          Retour
        </button>
      </div>
    </div>
  );
}

// ── Enregistrement du score ──────────────────────────────────────────────────
// ⚠️ UNE SEULE FONCTION À ALIGNER sur la signature réelle de submitScore()
// dans src/lib/session.ts (celle utilisée par le Puzzle de la Guinée).
// Le classement (SessionScores) lit `pseudo` et `time_ms` ; score/total sont
// optionnels si la table les accepte.
async function enregistrerScore(code: string, pseudo: string, time_ms: number, score: number, total: number) {
  await submitScore({ code, pseudo, time_ms, score, total } as never);
}
