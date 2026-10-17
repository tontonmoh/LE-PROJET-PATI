import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin, ArrowLeft, RefreshCw, Sparkles, Palette, Hammer, Microscope, HeartHandshake, Rocket, ClipboardList, Briefcase, Compass,
} from "lucide-react";
import { PILLARS, PillarKey, METIERS, REGIONS, QUESTIONS, ANSWERS } from "../data/bilan";
import { filieresPour, seriesPour, SERIES, ETABS_PSUP } from "../data/parcoursup";
import { METIERS_REF, FORMATIONS, MODELES, UNIVERSITES_PUBLIQUES, ADRESSES_UTILES, SOURCE_OIM, LETTRE_PILIER, PARCOURSUP } from "../data/referentiel";

const LETTRE: Record<PillarKey, string> = { batisseur: "R", chercheur: "I", createur: "A", accompagnateur: "S", entrepreneur: "E", organisateur: "C" };
const NOM_RIASEC: Record<PillarKey, string> = { batisseur: "Réaliste", chercheur: "Investigateur", createur: "Artiste", accompagnateur: "Social", entrepreneur: "Entreprenant", organisateur: "Conventionnel" };
// Hexagone de Holland : voisins = profils cohérents
const HEX: PillarKey[] = ["batisseur", "chercheur", "createur", "accompagnateur", "entrepreneur", "organisateur"];
const MAX_PAR_PILIER = 5 * 3; // 5 questions × 3 points
function shuffle<T>(arr: T[], seed: number): T[] {
  const a = arr.slice(); let s = seed;
  for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor((s / 233280) * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

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
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e6));
  // Ordre mélangé des questions (évite le rythme R-I-A-S-E-C répété) ; les réponses restent indexées sur la question d'origine
  const order = useMemo(() => shuffle(QUESTIONS.map((_, i) => i), seed), [seed]);

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
    setAnswers((a) => ({ ...a, [order[qi]]: w }));
    if (qi + 1 < QUESTIONS.length) setQi(qi + 1);
    else setStep("result");
  };

  const restart = () => { setStep("region"); setRegion(""); setQi(0); setAnswers({}); setSeed(Math.floor(Math.random() * 1e6)); };

  // Règles de lecture du profil
  const pct = (k: PillarKey) => Math.round((scores[k] / MAX_PAR_PILIER) * 100);
  const ecartTop = scores[ranking[0]] - scores[ranking[1]];
  const mixte = ecartTop < 2;                       // deux génies presque à égalité
  const moyenne = PKEYS.reduce((n, k) => n + scores[k], 0) / 6;
  const differenciation = scores[ranking[0]] - moyenne; // > 5 : profil net ; < 3 : profil ouvert
  const coherent = Math.abs(HEX.indexOf(ranking[0]) - HEX.indexOf(ranking[1])) % 4 <= 1 || Math.abs(HEX.indexOf(ranking[0]) - HEX.indexOf(ranking[1])) === 5;

  // ---------- ÉTAPE RÉGION ----------
  if (step === "region") {
    return (
      <section className="bg-[#FFF6E7] min-h-[70vh]">
        <div className="max-w-3xl mx-auto px-6 py-14 text-center">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-white bg-[#FF6B4A] px-4 py-1.5 rounded-full mb-5">
            <Compass size={16} /> Découvre ton génie
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
    const q = QUESTIONS[order[qi]];
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
  // Référentiel OIM : métiers dont le code commence par le génie dominant (puis secondaire), émergents en tête
  const codeOk = (c: string) => c[0] === LETTRE[dominant] || (c.length > 1 && c[0] === LETTRE[secondary] && c[1] === LETTRE[dominant]);
  const refs = METIERS_REF.filter((m) => codeOk(m.code)).sort((a, b) => Number(!!b.emergent) - Number(!!a.emergent)).slice(0, 10);
  // Formations de la région pour le génie dominant (repli : secondaire, puis toutes régions)
  const formFor = (p: PillarKey, reg?: string) => FORMATIONS.filter((f) => (!reg || f.region === reg) && f.filieres.some((x) => x.p === p));
  let formations = formFor(dominant, region); if (formations.length < 2) formations = [...formations, ...formFor(secondary, region)];
  const formationsAilleurs = formations.length === 0;
  const psup = filieresPour(LETTRE[dominant], LETTRE[secondary], region);
  const psupSeries = seriesPour(psup);
  if (formationsAilleurs) formations = formFor(dominant);
  formations = formations.slice(0, 4);
  const modele = MODELES.find((m) => m.pilier === dominant) || MODELES.find((m) => m.pilier === secondary) || MODELES[0];

  return (
    <section className="bg-[#FFF6E7]">
      {/* Profil */}
      <div className="text-white" style={{ background: dom.color }}>
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-0 text-center">
          <div className="inline-flex items-center gap-2 font-display font-semibold bg-black/15 px-4 py-1.5 rounded-full mb-5">
            <Sparkles size={16} /> Ton code génie : {LETTRE[dominant]}-{LETTRE[secondary]}
          </div>
          <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mx-auto mb-4">
            <DomIcon size={40} />
          </div>
          <h1 className="text-3xl md:text-4xl mb-1">{mixte ? `${dom.title} & ${PILLARS[secondary].title}` : dom.title}</h1>
          <p className="font-display font-semibold text-white/85 mb-3">{mixte ? `${NOM_RIASEC[dominant]} · ${NOM_RIASEC[secondary]} — profil mixte` : `${NOM_RIASEC[dominant]} (${LETTRE[dominant]})`}</p>
          <p className="font-semibold text-white/90 max-w-xl mx-auto mb-2">{dom.desc}</p>
          <p className="font-display font-semibold text-white/80 text-sm mb-2">
            {mixte ? "Tes deux génies sont presque à égalité : explore les deux." : <>Génie secondaire : {PILLARS[secondary].title} · {NOM_RIASEC[secondary]}</>}
          </p>
          <p className="text-white/75 text-sm font-semibold mb-6">
            {differenciation >= 5 ? "Profil net : tu sais déjà ce qui t'anime." : differenciation >= 3 ? "Profil affirmé, avec de la place pour explorer." : "Profil ouvert : beaucoup de choses t'intéressent, c'est une force."}
            {" "}{coherent ? "Tes deux génies vont bien ensemble." : "Tes deux génies sont très différents : tu peux les relier dans un métier original."}
          </p>
        </div>
        <Mountains color="#ffffff" />
      </div>

      {/* Piliers */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-2xl text-[#0D2B1A] mb-5">Tes six génies</h2>
        <div className="space-y-3">
          {ranking.map((k) => (
            <div key={k}>
              <div className="flex justify-between text-sm font-display font-semibold text-[#0D2B1A] mb-1">
                <span>{PILLARS[k].title} <span className="text-[#5a6b62] font-normal">· {NOM_RIASEC[k]} ({LETTRE[k]})</span></span>
                <span>{pct(k)} %</span>
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

      {/* D'autres métiers du référentiel guinéen */}
      <div className="max-w-5xl mx-auto px-6 pb-10">
        <h2 className="text-xl text-[#0D2B1A] mb-1">D'autres métiers pour ton génie</h2>
        <p className="text-sm text-[#5a6b62] font-semibold mb-4">Code {LETTRE[dominant]}-{LETTRE[secondary]} · d'après le référentiel des métiers en Guinée. <span className="text-[#FF6B4A]">★</span> = métier émergent (IA, numérique, énergie).</p>
        <div className="flex flex-wrap gap-2">
          {refs.map((m) => (
            <span key={m.nom} className="font-display font-semibold text-sm px-3 py-1.5 rounded-full bg-white shadow-kid text-[#0D2B1A]" title={m.secteur}>
              {m.emergent && <span className="text-[#FF6B4A] mr-1">★</span>}{m.nom}
              <span className="text-[#8a9389] font-normal ml-1.5 text-xs">{m.code}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Formations près de chez toi */}
      <div className="max-w-5xl mx-auto px-6 pb-10">
        <h2 className="text-xl text-[#0D2B1A] mb-1">Des formations {formationsAilleurs ? "en Guinée" : "près de chez toi"}</h2>
        <p className="text-sm text-[#5a6b62] font-semibold mb-4 flex items-center gap-1.5"><MapPin size={16} className="text-[#FF6B4A]" /> {formationsAilleurs ? `Pas encore de formation recensée pour ce génie en ${region} — voici ailleurs en Guinée.` : region}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {formations.map((f) => {
            const fil = f.filieres.filter((x) => x.p === dominant || x.p === secondary);
            return (
              <div key={f.etab + f.prefecture} className="card-kid p-5">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-display font-semibold text-[#0D2B1A] leading-tight">{f.etab}</h3>
                  <span className="text-xs font-bold bg-[#5DCAA5]/20 text-[#0F6E56] px-2 py-0.5 rounded-full shrink-0">{f.prefecture}{f.prive ? " · privé" : ""}</span>
                </div>
                <p className="text-sm text-[#3a4a42] font-semibold leading-relaxed">{fil.map((x) => x.f).join(" · ")}</p>
                {(f.niveaux || f.diplomes) && <p className="text-xs text-[#8a9389] font-semibold mt-2">Entrée : {f.niveaux || "—"} → {f.diplomes || "—"}</p>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Un modèle réel */}
      <div className="max-w-3xl mx-auto px-6 pb-10">
        <div className="rounded-3xl p-6 text-white flex items-start gap-4" style={{ background: PILLARS[modele.pilier].color }}>
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 font-display font-bold text-xl">{modele.prenom[0]}</div>
          <div>
            <p className="font-display font-semibold text-white/80 text-sm mb-1">Quelqu'un comme toi, en Guinée</p>
            <h3 className="text-xl mb-1">{modele.prenom}, {modele.metier.toLowerCase()}</h3>
            <p className="font-semibold text-white/90">{modele.phrase}</p>
          </div>
        </div>
      </div>

      {/* Prochaines étapes */}
      <div className="max-w-3xl mx-auto px-6 pb-8">
        <div className="bg-white rounded-3xl p-6 shadow-kid">
          <h2 className="text-xl text-[#0D2B1A] mb-3">Prochaines étapes</h2>
          <ul className="text-sm text-[#3a4a42] font-semibold leading-relaxed space-y-2">
            {ADRESSES_UTILES.map((a) => <li key={a.nom}><b className="text-[#0D2B1A]">{a.nom}</b> — {a.quoi}</li>)}
            <li><b className="text-[#0D2B1A]">Après le bac</b> — {UNIVERSITES_PUBLIQUES.slice(0, 6).join(", ")}…</li>
          </ul>
          <p className="text-xs text-[#8a9389] font-semibold mt-4">Secteurs, métiers et formations d'après le <i>{SOURCE_OIM.titre}</i>, {SOURCE_OIM.editeur} {SOURCE_OIM.annee} ({SOURCE_OIM.licence}). Métiers émergents : ajout PATI 2026.</p>
        </div>
      </div>

      {/* Et quand tu auras ton bac : ParcourSup Guinée */}
      <div className="max-w-3xl mx-auto px-6 pb-8">
        <div className="rounded-3xl p-6 shadow-kid bg-[#2B5C8A] text-white">
          <p className="text-xs font-display font-semibold uppercase tracking-wide text-white/70 mb-1">Quand tu auras ton bac</p>
          <h2 className="text-xl mb-3">{PARCOURSUP.nom}, la vraie porte des universités</h2>
          {psup.length > 0 && (
            <div className="bg-white text-[#0D2B1A] rounded-2xl p-4 mb-4">
              <p className="text-sm font-display font-semibold mb-2">Filières publiques qui vont avec ton code {LETTRE[dominant]}-{LETTRE[secondary]}</p>
              <ul className="text-sm font-semibold text-[#3a4a42] space-y-1.5">
                {psup.map((x) => (
                  <li key={x.f} className="flex flex-wrap gap-x-2 items-baseline">
                    <span className="text-[10px] uppercase tracking-wide bg-[#2B5C8A]/10 text-[#2B5C8A] rounded-full px-2 py-0.5">{x.n}</span>
                    <span>{x.f}</span>
                    <span className="text-[#8a9389] font-normal">· {x.e.map((e) => ETABS_PSUP[e]?.ville ?? e).filter((v, i, a) => a.indexOf(v) === i).join(", ")}</span>
                  </li>
                ))}
              </ul>
              {psupSeries.length > 0 && (
                <p className="text-sm font-semibold mt-3 pt-3 border-t border-[#eee]">
                  <span className="text-[#FF6B4A]">Série du bac à viser :</span> {psupSeries.map((k) => `${SERIES[k]} (${k})`).join(" ou ")}. Ça se décide dès la seconde.
                </p>
              )}
            </div>
          )}
          <ul className="text-sm font-semibold leading-relaxed space-y-2 list-disc pl-5 text-white/90">
            {PARCOURSUP.regles.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <p className="text-sm font-semibold mt-4 bg-white/10 rounded-2xl px-4 py-2">{PARCOURSUP.campagne}. {PARCOURSUP.contacts}</p>
          <a href={PARCOURSUP.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 bg-white text-[#2B5C8A] font-display font-semibold px-4 py-2 rounded-full">
            Ouvrir ParcourSup Guinée ↗
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-20 flex flex-wrap gap-3 justify-center">
        <button onClick={restart} className="btn-kid bg-[#0F6E56] text-white"><RefreshCw size={18} /> Recommencer</button>
        <Link to="/" className="btn-kid bg-white text-[#0D2B1A] shadow-kid">Accueil</Link>
      </div>
    </section>
  );
}
