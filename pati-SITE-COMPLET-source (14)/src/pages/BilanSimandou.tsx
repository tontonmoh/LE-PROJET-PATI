import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin, ArrowLeft, RefreshCw, Sparkles, Palette, Hammer, Microscope, HeartHandshake, Rocket, ClipboardList, Briefcase, Compass,
} from "lucide-react";
import { PILLARS, PillarKey, METIERS, REGIONS, QUESTIONS, ANSWERS } from "../data/bilan";

const ICONS: Record<string, any> = { build: Hammer, search: Microscope, palette: Palette, care: HeartHandshake, rocket: Rocket, org: ClipboardList };
const PKEYS = Object.keys(PILLARS) as PillarKey[];

function Mountains({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 90" className="w-full h-auto block" aria-hidden="true">
      <path d="M0 70 L70 25 L120 60 L190 18 L260 64 L320 30 L400 66 L400 90 L0 90Z" fill={color} opacity="0.35" />
      <path d="M0 82 L80 45 L160 80 L240 40 L320 80 L400 52 L400 90 L0 90Z" fill={color} opacity="0.6" />
    </svg>
  );
}

export default function BilanSimandou() {
  const [step, setStep] = useState<"region" | "quiz" | "result">("region");
  const [region, setRegion] = useState("");
  const [qi, setQi] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const scores = useMemo(() => {
    const s: Record<PillarKey, number> = { batisseur: 0, chercheur: 0, createur: 0, accompagnateur: 0, entrepreneur: 0, organisateur: 0 };
    QUESTIONS.forEach((q, i) => { if (answers[i] != null) s[q.pillar] += answers[i]; });
    return s;
  }, [answers]);

  const ranking = useMemo(() => PKEYS.slice().sort((a, b) => scores[b] - scores[a]), [scores]);
  const maxScore = Math.max(1, ...PKEYS.map((k) => scores[k]));
  const dominant = ranking[0];
  const secondary = ranking[1];

  const answer = (w: number) => {
    setAnswers((a) => ({ ...a, [qi]: w }));
    if (qi + 1 < QUESTIONS.length) setQi(qi + 1);
    else setStep("result");
  };

  const restart = () => { setStep("region"); setRegion(""); setQi(0); setAnswers({}); };

  // ---------- ÉTAPE RÉGION ----------
  if (step === "region") {
    return (
      <section className="bg-[#FFF6E7] min-h-[70vh]">
        <div className="max-w-3xl mx-auto px-6 py-14 text-center">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-white bg-[#FF6B4A] px-4 py-1.5 rounded-full mb-5">
            <Compass size={16} /> Bilan Simandou 2040
          </div>
          <h1 className="text-3xl md:text-4xl text-[#0D2B1A] mb-3">D'abord, où habites-tu&nbsp;?</h1>
          <p className="text-[#3a4a42] font-semibold mb-8">Pour te proposer des métiers et des formations proches de chez toi.</p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            {REGIONS.map((r) => (
              <button key={r} onClick={() => { setRegion(r); setStep("quiz"); }}
                className="card-kid p-4 flex items-center gap-3 text-left hover:ring-2 hover:ring-[#FFC93C]">
                <MapPin className="text-[#FF6B4A] shrink-0" size={22} />
                <span className="font-display font-semibold text-[#0D2B1A]">{r}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ---------- ÉTAPE QUIZ ----------
  if (step === "quiz") {
    const q = QUESTIONS[qi];
    const pct = Math.round((qi / QUESTIONS.length) * 100);
    return (
      <section className="bg-[#FFF6E7] min-h-[70vh]">
        <div className="max-w-2xl mx-auto px-6 py-12">
          {/* Progression "voie ferrée" */}
          <div className="flex items-center justify-between mb-2 text-sm font-display font-semibold text-[#0F6E56]">
            <button onClick={() => (qi > 0 ? setQi(qi - 1) : setStep("region"))} className="inline-flex items-center gap-1 hover:underline">
              <ArrowLeft size={16} /> Retour
            </button>
            <span>Question {qi + 1} / {QUESTIONS.length}</span>
          </div>
          <div className="h-3 rounded-full bg-[#0F6E56]/15 overflow-hidden mb-10">
            <div className="h-full bg-[#FFC93C] transition-all duration-300" style={{ width: `${pct}%` }} />
          </div>

          <h2 className="text-2xl md:text-3xl text-[#0D2B1A] text-center mb-10 leading-snug">{q.text}</h2>

          <div className="grid gap-3 max-w-md mx-auto">
            {ANSWERS.map((a) => (
              <button key={a.label} onClick={() => answer(a.weight)}
                className="btn-kid justify-center bg-white text-[#0D2B1A] shadow-kid hover:bg-[#FFC93C]/30 w-full">
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ---------- ÉTAPE RÉSULTAT ----------
  const dom = PILLARS[dominant];
  const DomIcon = ICONS[dom.icon] || Sparkles;
  const metiersDom = METIERS.filter((m) => m.pillar === dominant);
  const metiersSec = METIERS.filter((m) => m.pillar === secondary);
  const metiers = [...metiersDom, ...metiersSec].slice(0, 6);

  return (
    <section className="bg-[#FFF6E7]">
      {/* Profil */}
      <div className="text-white" style={{ background: dom.color }}>
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-0 text-center">
          <div className="inline-flex items-center gap-2 font-display font-semibold bg-black/15 px-4 py-1.5 rounded-full mb-5">
            <Sparkles size={16} /> Ton profil Simandou 2040
          </div>
          <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mx-auto mb-4">
            <DomIcon size={40} />
          </div>
          <h1 className="text-3xl md:text-4xl mb-2">{dom.title}</h1>
          <p className="font-semibold text-white/90 max-w-xl mx-auto mb-2">{dom.desc}</p>
          <p className="font-display font-semibold text-white/80 text-sm mb-6">
            Génie secondaire : {PILLARS[secondary].title}
          </p>
        </div>
        <Mountains color="#ffffff" />
      </div>

      {/* Piliers */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-2xl text-[#0D2B1A] mb-5">Tes 6 génies</h2>
        <div className="space-y-3">
          {ranking.map((k) => (
            <div key={k}>
              <div className="flex justify-between text-sm font-display font-semibold text-[#0D2B1A] mb-1">
                <span>{PILLARS[k].title}</span>
              </div>
              <div className="h-3 rounded-full bg-black/5 overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${(scores[k] / maxScore) * 100}%`, background: PILLARS[k].color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Métiers */}
      <div className="max-w-5xl mx-auto px-6 pb-10">
        <h2 className="text-2xl text-[#0D2B1A] mb-1">Des métiers faits pour toi</h2>
        <p className="text-[#5a6b62] font-semibold mb-6 flex items-center gap-1.5">
          <MapPin size={16} className="text-[#FF6B4A]" /> Opportunités vues depuis : {region}
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {metiers.map((m) => (
            <div key={m.id} className="card-kid p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${PILLARS[m.pillar].color}22` }}>
                  <Briefcase size={18} style={{ color: PILLARS[m.pillar].color }} />
                </span>
                <h3 className="font-display font-semibold text-[#0D2B1A] leading-tight">{m.title}</h3>
              </div>
              <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed mb-3">{m.shortDesc}</p>
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                <span className="bg-[#5DCAA5]/20 text-[#0F6E56] px-2.5 py-1 rounded-full">{m.sector}</span>
                <span className="bg-[#FFC93C]/30 text-[#633806] px-2.5 py-1 rounded-full">{m.track}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prochaines étapes */}
      <div className="max-w-3xl mx-auto px-6 pb-8">
        <div className="bg-white rounded-3xl p-6 shadow-kid">
          <h2 className="text-xl text-[#0D2B1A] mb-2">Prochaines étapes</h2>
          <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">
            Pour les formations en Guinée, consulte <b>ParcourSup Guinée</b>, qui référence les 17 institutions
            d'enseignement supérieur du pays. Le <b>Guide OMEGA</b> (disponible à l'ANPEJ) recense aussi les
            métiers et les formations professionnelles par secteur.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-20 flex flex-wrap gap-3 justify-center">
        <button onClick={restart} className="btn-kid bg-[#0F6E56] text-white"><RefreshCw size={18} /> Recommencer</button>
        <Link to="/" className="btn-kid bg-white text-[#0D2B1A] shadow-kid">Accueil</Link>
      </div>
    </section>
  );
}
