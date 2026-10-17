import { useEffect, useRef, useState } from "react";
import { Hammer, Microscope, Palette, HeartHandshake, Rocket, ClipboardList, Sparkles, Pause, Play, RotateCcw, Droplets, Zap, Stethoscope, GraduationCap, CloudSun, Route, Cpu, Database, Plane, Sprout, Box, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { PILLARS, QUESTIONS, ANSWERS, METIERS, type PillarKey } from "../data/bilan";

/* ------------------------------------------------------------------
   GenieMotion — motion design 26 s, 100 % CSS/React, sans dépendance.
   Scènes : 0 question · 1 les 6 profils · 2 la méthode · 3 les résultats · 4 appel.
   Boucle, pause/lecture, rejouer ; respecte prefers-reduced-motion (image fixe).
   ------------------------------------------------------------------ */

const PROFILS: { key: PillarKey; letter: string; name: string; icon: typeof Hammer; verbe: string }[] = [
  { key: "batisseur",      letter: "R", name: "Réaliste",      icon: Hammer,         verbe: "Je construis" },
  { key: "chercheur",      letter: "I", name: "Investigateur", icon: Microscope,     verbe: "Je cherche" },
  { key: "createur",       letter: "A", name: "Artiste",       icon: Palette,        verbe: "J'imagine" },
  { key: "accompagnateur", letter: "S", name: "Social",        icon: HeartHandshake, verbe: "J'aide" },
  { key: "entrepreneur",   letter: "E", name: "Entreprenant",  icon: Rocket,         verbe: "J'entraîne" },
  { key: "organisateur",   letter: "C", name: "Conventionnel", icon: ClipboardList,  verbe: "J'organise" },
];

// Timeline (secondes)
const SCENES = [
  { id: 0, start: 0,    end: 3.5 },  // question
  { id: 5, start: 3.5,  end: 8.5 },  // Simandou 2040
  { id: 6, start: 8.5,  end: 14.5 }, // défis locaux -> nouveaux métiers (IA)
  { id: 1, start: 14.5, end: 20 },   // profils
  { id: 2, start: 20,   end: 26 },   // méthode
  { id: 3, start: 26,   end: 31.5 }, // résultats
  { id: 4, start: 31.5, end: 34.5 }, // appel
];
const DEFIS = [
  { icon: Droplets, t: "Eau potable" }, { icon: Zap, t: "Énergie" }, { icon: Stethoscope, t: "Santé" },
  { icon: GraduationCap, t: "Éducation" }, { icon: CloudSun, t: "Climat" }, { icon: Route, t: "Routes & rail" },
];
const NOUVEAUX = [
  { icon: Database, t: "Data analyst" }, { icon: Cpu, t: "Développeur IA" }, { icon: Plane, t: "Pilote de drone" },
  { icon: Sprout, t: "Agronome connecté" }, { icon: Box, t: "Designer 3D" }, { icon: Sun, t: "Technicien solaire" },
];
const TOTAL = SCENES[SCENES.length - 1].end;

// Résultat « exemple » : scores sur 100 par profil (dominant : Investigateur)
const SCORES: Record<PillarKey, number> = { chercheur: 92, createur: 74, accompagnateur: 61, entrepreneur: 48, batisseur: 37, organisateur: 29 };
const DOMINANT: PillarKey = "chercheur";
const DEMO_Q = [QUESTIONS[1], QUESTIONS[2], QUESTIONS[3]]; // 3 vraies questions du bilan
const DEMO_ANSWER = [3, 2, 3]; // réponse « choisie » dans la démo

export default function GenieMotion() {
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);
  const raf = useRef<number>(0);
  const last = useRef<number>(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = () => setReduced(mq.matches);
    mq.addEventListener?.("change", h);
    return () => mq.removeEventListener?.("change", h);
  }, []);

  useEffect(() => {
    if (!playing || reduced) return;
    const tick = (now: number) => {
      if (!last.current) last.current = now;
      const dt = (now - last.current) / 1000; last.current = now;
      setT((v) => (v + dt) % TOTAL);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf.current); last.current = 0; };
  }, [playing, reduced]);

  const scene = reduced ? 3 : SCENES.find((s) => t >= s.start && t < s.end)!.id;
  const local = reduced ? 10 : t - SCENES[scene].start; // temps écoulé dans la scène
  const qIndex = Math.min(2, Math.floor(local / 2.2));  // scène 2 : une question toutes les 2,2 s
  const qLocal = local - qIndex * 2.2;

  return (
    <div className="gm" data-scene={scene} role="img" aria-label="Présentation animée du bilan : six profils, la méthode en 30 questions, et les résultats personnalisés">
      {/* ----- Bande haute ----- */}
      <div className="gm-top">
        <span className="gm-kicker">Découvre ton génie</span>
        <h3 className="gm-title">
          {scene === 0 && <>Et toi, quel est ton génie&nbsp;?</>}
          {scene === 5 && <>La Guinée de 2040 se construit</>}
          {scene === 6 && <>Des défis d'ici, des métiers de demain</>}
          {scene === 1 && <>Six façons d'être fort</>}
          {scene === 2 && <>30 questions, 10 minutes</>}
          {scene === 3 && <>Ton profil, tes métiers</>}
          {scene === 4 && <>Prêt à te découvrir&nbsp;?</>}
        </h3>
      </div>

      {/* ----- Scène centrale ----- */}
      <div className="gm-stage">
        {/* Scène 0 : les lettres apparaissent */}
        {scene === 0 && (
          <div className="gm-letters">
            {PROFILS.map((p, i) => (
              <span key={p.key} className="gm-letter" style={{ background: PILLARS[p.key].color, animationDelay: `${0.6 + i * 0.22}s` }}>{p.letter}</span>
            ))}
            <p className="gm-sub" style={{ animationDelay: "2.4s" }}>Réaliste · Investigateur · Artiste · Social · Entreprenant · Conventionnel</p>
          </div>
        )}

        {/* Scène 5 : Simandou 2040 — montagnes, rail, soleil */}
        {scene === 5 && (
          <div className="gm-sim">
            <svg viewBox="0 0 800 230" className="gm-sim-svg" aria-hidden="true">
              <circle className="gm-sun" cx="660" cy="62" r="40" fill="#FFC93C" />
              <text className="gm-sun-t" x="660" y="70" textAnchor="middle" fontFamily="Fredoka, sans-serif" fontWeight="700" fontSize="22" fill="#0D2B1A">2040</text>
              <path className="gm-mtn m1" d="M0 170 L120 80 L210 150 L330 60 L460 160 L560 95 L680 165 L800 110 L800 230 L0 230 Z" fill="#0F6E56" />
              <path className="gm-mtn m2" d="M0 195 L150 120 L280 185 L420 110 L560 185 L700 130 L800 175 L800 230 L0 230 Z" fill="#0A4D3C" />
              <g className="gm-rail">
                <line x1="0" y1="205" x2="800" y2="205" stroke="#5DCAA5" strokeWidth="4" />
                <line x1="0" y1="214" x2="800" y2="214" stroke="#5DCAA5" strokeWidth="4" />
                <g className="gm-ties">{Array.from({ length: 30 }).map((_, i) => <line key={i} x1={i * 30} y1="203" x2={i * 30} y2="216" stroke="#9FE1CB" strokeWidth="3" />)}</g>
              </g>
              <g className="gm-train"><rect x="-120" y="186" width="110" height="16" rx="4" fill="#FF6B4A" /><rect x="-120" y="176" width="36" height="12" rx="3" fill="#FF6B4A" /></g>
            </svg>
            <div className="gm-sim-tags">
              {["Mines", "Chemin de fer", "Énergie", "Agriculture", "Numérique", "Ports"].map((x, i) => <span key={x} style={{ animationDelay: `${1.2 + i * 0.22}s` }}>{x}</span>)}
            </div>
          </div>
        )}

        {/* Scène 6 : défis locaux -> nouveaux métiers avec l'IA */}
        {scene === 6 && (
          <div className="gm-defis">
            <div className="gm-list">
              <h4>Les défis d'ici</h4>
              {DEFIS.map((d, i) => <span key={d.t} className="gm-item" style={{ animationDelay: `${0.2 + i * 0.18}s` }}><d.icon size={16} /> {d.t}</span>)}
            </div>
            <div className="gm-arrow" style={{ animationDelay: "1.6s" }}><Cpu size={22} /><span>IA</span></div>
            <div className="gm-list right">
              <h4>Les métiers qui arrivent</h4>
              {NOUVEAUX.map((d, i) => <span key={d.t} className="gm-item new" style={{ animationDelay: `${2 + i * 0.18}s` }}><d.icon size={16} /> {d.t}</span>)}
            </div>
          </div>
        )}

        {/* Scène 1 : les six colonnes montent */}
        {scene === 1 && (
          <div className="gm-cols">
            {PROFILS.map((p, i) => (
              <div key={p.key} className="gm-col" style={{ background: PILLARS[p.key].color, animationDelay: `${i * 0.25}s` }}>
                <p.icon size={22} className="gm-ico" />
                <span className="gm-col-letter">{p.letter}</span>
                <span className="gm-col-name">{p.name}</span>
                <span className="gm-col-verbe" style={{ animationDelay: `${1.8 + i * 0.25}s` }}>{p.verbe}</span>
              </div>
            ))}
          </div>
        )}

        {/* Scène 2 : une question, quatre réponses, une se coche */}
        {scene === 2 && (
          <div className="gm-method">
            <div key={qIndex} className="gm-card">
              <span className="gm-qnum">Question {[5, 12, 21][qIndex]} / 30</span>
              <p className="gm-q">{DEMO_Q[qIndex].text}</p>
              <div className="gm-answers">
                {ANSWERS.map((a, k) => (
                  <span key={k} className={`gm-ans ${k === DEMO_ANSWER[qIndex] && qLocal > 1.1 ? "on" : ""}`} style={{ animationDelay: `${0.25 + k * 0.1}s` }}>{a.label}</span>
                ))}
              </div>
            </div>
            <div className="gm-progress"><i style={{ width: `${(([5, 12, 21][qIndex] + Math.min(1, qLocal / 2.2)) / 30) * 100}%` }} /></div>
          </div>
        )}

        {/* Scène 3 : les barres de résultat + métiers */}
        {scene === 3 && (
          <div className="gm-results">
            <div className="gm-bars">
              {PROFILS.map((p, i) => (
                <div key={p.key} className={`gm-bar ${p.key === DOMINANT ? "dom" : ""}`}>
                  <span className="gm-bar-l">{p.letter}</span>
                  <div className="gm-bar-track"><i style={{ ["--w" as any]: `${SCORES[p.key]}%`, background: PILLARS[p.key].color, animationDelay: `${0.2 + i * 0.12}s` }} /></div>
                  <span className="gm-bar-v" style={{ animationDelay: `${1 + i * 0.12}s` }}>{SCORES[p.key]}</span>
                </div>
              ))}
            </div>
            <div className="gm-verdict">
              <span className="gm-badge" style={{ background: PILLARS[DOMINANT].color, animationDelay: "1.6s" }}><Sparkles size={14} /> Ton profil : {PILLARS[DOMINANT].title}</span>
              <div className="gm-chips">
                {METIERS.filter((m) => m.pillar === DOMINANT).slice(0, 3).map((m, k) => (
                  <span key={m.id} className="gm-chip" style={{ animationDelay: `${2.4 + k * 0.3}s` }}>{m.title}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Scène 4 : appel */}
        {scene === 4 && (
          <div className="gm-final">
            <div className="gm-final-letters">
              {PROFILS.map((p, i) => <span key={p.key} style={{ background: PILLARS[p.key].color, animationDelay: `${i * 0.08}s` }}>{p.letter}</span>)}
            </div>
            <Link to="/orientation/questionnaire" className="btn-kid bg-[#FFC93C] text-[#0D2B1A] gm-cta"><Sparkles size={18} /> Commencer mon bilan</Link>
          </div>
        )}
      </div>

      {/* ----- Bande basse ----- */}
      <div className="gm-bottom">
        <p className="gm-caption">
          {scene === 0 && "Chacun a un génie. Le bilan t'aide à trouver le tien."}
          {scene === 5 && "Simandou 2040 : mines, rail, énergie, agriculture — un pays qui a besoin de tous les talents."}
          {scene === 6 && "L'IA ne remplace pas ton génie : elle le multiplie. Les métiers changent, les besoins restent."}
          {scene === 1 && "Tu n'es pas un seul profil : tu en mélanges plusieurs, à ta façon."}
          {scene === 2 && "Pas de bonne ou de mauvaise réponse. Juste toi, sincèrement."}
          {scene === 3 && "Un profil dominant, un secondaire, et des métiers de la Guinée de demain."}
          {scene === 4 && "30 questions · ~10 minutes · résultat personnalisé"}
        </p>
        <div className="gm-ctrl">
          <div className="gm-dots">{SCENES.map((s) => <i key={s.id} className={s.id === scene ? "on" : ""} />)}</div>
          <button type="button" onClick={() => setPlaying((v) => !v)} aria-label={playing ? "Pause" : "Lecture"}>{playing ? <Pause size={15} /> : <Play size={15} />}</button>
          <button type="button" onClick={() => { setT(0); setPlaying(true); }} aria-label="Rejouer"><RotateCcw size={15} /></button>
        </div>
      </div>

      <style>{`
        .gm{position:relative;background:#0D2B1A;color:#fff;display:flex;flex-direction:column;aspect-ratio:16/9;min-height:300px;font-family:Nunito,sans-serif;overflow:hidden}
        .gm-top{padding:1.1rem 1.5rem .6rem;text-align:center}
        .gm-kicker{display:inline-block;font-family:Fredoka,sans-serif;font-weight:500;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:#FFC93C;opacity:.9}
        .gm-title{font-family:Fredoka,sans-serif;font-weight:600;font-size:clamp(1.3rem,3vw,2rem);line-height:1.1;margin-top:.2rem;animation:gm-fade .5s ease both}
        .gm-stage{flex:1;position:relative;display:flex;align-items:stretch;justify-content:center;padding:0 1.25rem}
        .gm-bottom{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.7rem 1.25rem .9rem}
        .gm-caption{font-weight:600;font-size:clamp(.8rem,1.6vw,1rem);color:rgba(255,255,255,.85);animation:gm-fade .5s ease both}
        .gm-ctrl{display:flex;align-items:center;gap:.5rem;flex-shrink:0}
        .gm-ctrl button{all:unset;cursor:pointer;width:30px;height:30px;border-radius:999px;background:rgba(255,255,255,.12);display:inline-flex;align-items:center;justify-content:center;color:#fff}
        .gm-ctrl button:hover{background:rgba(255,255,255,.24)}
        .gm-dots{display:flex;gap:5px;margin-right:.25rem}
        .gm-dots i{width:6px;height:6px;border-radius:999px;background:rgba(255,255,255,.3)}
        .gm-dots i.on{background:#FFC93C;width:16px;transition:width .3s}
        /* scène 0 */
        .gm-letters{align-self:center;text-align:center;width:100%}
        .gm-letter{display:inline-flex;align-items:center;justify-content:center;width:clamp(44px,8vw,78px);height:clamp(44px,8vw,78px);margin:0 .3rem;border-radius:18px;font-family:Fredoka,sans-serif;font-weight:700;font-size:clamp(1.3rem,3.6vw,2.4rem);box-shadow:0 10px 24px rgba(0,0,0,.25);animation:gm-pop .55s cubic-bezier(.2,1.4,.4,1) both}
        .gm-sub{margin-top:1rem;font-size:clamp(.75rem,1.5vw,.95rem);font-weight:600;color:rgba(255,255,255,.75);animation:gm-fade .6s ease both}
        /* scène 5 : Simandou */
        .gm-sim{align-self:center;width:100%;position:relative}
        .gm-sim-svg{width:100%;height:auto;display:block;border-radius:16px;overflow:hidden;background:#0A4030}
        .gm-sun{transform-origin:660px 62px;animation:gm-pop .7s cubic-bezier(.2,1.4,.4,1) .3s both}
        .gm-sun-t{animation:gm-fade .5s ease .8s both}
        .gm-mtn{transform-origin:400px 230px;animation:gm-rise .9s cubic-bezier(.2,.9,.3,1) both}
        .gm-mtn.m2{animation-delay:.25s}
        .gm-rail{animation:gm-fade .6s ease .9s both}
        .gm-train{animation:gm-train 4s linear 1.1s both}
        .gm-sim-tags{position:absolute;left:0;right:0;bottom:.6rem;display:flex;flex-wrap:wrap;justify-content:center;gap:.35rem;padding:0 .5rem}
        .gm-sim-tags span{font-family:Fredoka,sans-serif;font-weight:500;font-size:clamp(.65rem,1.3vw,.85rem);background:rgba(255,248,234,.92);color:#0D2B1A;padding:.25rem .7rem;border-radius:999px;animation:gm-pop .45s cubic-bezier(.2,1.4,.4,1) both}
        @keyframes gm-train{from{transform:translateX(0)}to{transform:translateX(940px)}}
        /* scène 6 : défis -> métiers */
        .gm-defis{align-self:center;width:100%;display:grid;grid-template-columns:1fr auto 1fr;gap:1rem;align-items:center}
        .gm-list{display:flex;flex-direction:column;gap:.35rem}
        .gm-list h4{font-family:Fredoka,sans-serif;font-weight:500;font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:#FFC93C;margin-bottom:.2rem}
        .gm-list.right{align-items:flex-end;text-align:right}
        .gm-item{display:inline-flex;align-items:center;gap:.45rem;font-weight:700;font-size:clamp(.72rem,1.4vw,.92rem);background:rgba(255,255,255,.1);padding:.3rem .7rem;border-radius:999px;animation:gm-slide .45s cubic-bezier(.2,.9,.3,1) both;width:max-content}
        .gm-item.new{background:#FFF8EA;color:#0D2B1A}
        .gm-arrow{display:flex;flex-direction:column;align-items:center;gap:.1rem;font-family:Fredoka,sans-serif;font-weight:700;font-size:.8rem;color:#0D2B1A;background:#FFC93C;width:52px;height:52px;border-radius:999px;justify-content:center;box-shadow:0 8px 20px rgba(0,0,0,.3);animation:gm-pop .5s cubic-bezier(.2,1.4,.4,1) both}
        /* scène 1 */
        .gm-cols{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;width:100%;align-items:end}
        .gm-col{height:100%;border-radius:16px 16px 0 0;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:.25rem;padding:.9rem .25rem .6rem;transform-origin:bottom;animation:gm-rise .7s cubic-bezier(.2,.9,.3,1) both}
        .gm-ico{opacity:.9}
        .gm-col-letter{font-family:Fredoka,sans-serif;font-weight:700;font-size:clamp(1.4rem,3.4vw,2.4rem);line-height:1}
        .gm-col-name{font-family:Fredoka,sans-serif;font-weight:500;font-size:clamp(.55rem,1.1vw,.75rem);text-transform:uppercase;letter-spacing:.06em;opacity:.9;text-align:center}
        .gm-col-verbe{margin-top:auto;font-size:clamp(.6rem,1.2vw,.8rem);font-weight:700;background:rgba(0,0,0,.22);padding:.2rem .5rem;border-radius:999px;animation:gm-fade .5s ease both;white-space:nowrap}
        /* scène 2 */
        .gm-method{align-self:center;width:min(640px,100%)}
        .gm-card{background:#FFF8EA;color:#0D2B1A;border-radius:20px;padding:1rem 1.2rem;box-shadow:0 14px 34px rgba(0,0,0,.3);animation:gm-slide .55s cubic-bezier(.2,.9,.3,1) both}
        .gm-qnum{font-family:Fredoka,sans-serif;font-weight:500;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:#FF6B4A}
        .gm-q{font-weight:700;font-size:clamp(.95rem,2vw,1.2rem);line-height:1.35;margin:.3rem 0 .8rem}
        .gm-answers{display:flex;flex-wrap:wrap;gap:.45rem}
        .gm-ans{font-family:Fredoka,sans-serif;font-weight:500;font-size:clamp(.72rem,1.4vw,.9rem);padding:.35rem .8rem;border-radius:999px;border:2px solid #0F6E56;color:#0F6E56;background:#fff;animation:gm-fade .4s ease both;transition:background .35s,color .35s,transform .35s}
        .gm-ans.on{background:#0F6E56;color:#fff;transform:scale(1.06)}
        .gm-progress{height:6px;border-radius:999px;background:rgba(255,255,255,.18);margin-top:.9rem;overflow:hidden}
        .gm-progress i{display:block;height:100%;background:#FFC93C;transition:width .4s linear}
        /* scène 3 */
        .gm-results{align-self:center;width:100%;display:grid;grid-template-columns:1.1fr 1fr;gap:1.5rem;align-items:center}
        .gm-bar{display:grid;grid-template-columns:22px 1fr 32px;align-items:center;gap:.5rem;margin:.3rem 0}
        .gm-bar-l{font-family:Fredoka,sans-serif;font-weight:700;font-size:1rem;opacity:.9}
        .gm-bar-track{height:12px;border-radius:999px;background:rgba(255,255,255,.14);overflow:hidden}
        .gm-bar-track i{display:block;height:100%;border-radius:999px;width:var(--w);animation:gm-grow 1s cubic-bezier(.2,.9,.3,1) both}
        .gm-bar.dom .gm-bar-track{box-shadow:0 0 0 2px #FFC93C}
        .gm-bar-v{font-family:Fredoka,sans-serif;font-weight:600;font-size:.8rem;opacity:.85;animation:gm-fade .4s ease both}
        .gm-verdict{display:flex;flex-direction:column;gap:.7rem;align-items:flex-start}
        .gm-badge{display:inline-flex;align-items:center;gap:.4rem;font-family:Fredoka,sans-serif;font-weight:600;font-size:clamp(.8rem,1.6vw,1rem);padding:.45rem .9rem;border-radius:999px;box-shadow:0 8px 20px rgba(0,0,0,.25);animation:gm-pop .5s cubic-bezier(.2,1.4,.4,1) both}
        .gm-chips{display:flex;flex-wrap:wrap;gap:.4rem}
        .gm-chip{font-weight:700;font-size:clamp(.7rem,1.3vw,.85rem);background:#FFF8EA;color:#0D2B1A;padding:.3rem .7rem;border-radius:999px;animation:gm-pop .45s cubic-bezier(.2,1.4,.4,1) both}
        /* scène 4 */
        .gm-final{align-self:center;text-align:center;width:100%}
        .gm-final-letters{display:flex;justify-content:center;gap:.35rem;margin-bottom:1.1rem}
        .gm-final-letters span{display:inline-flex;align-items:center;justify-content:center;width:clamp(30px,5vw,48px);height:clamp(30px,5vw,48px);border-radius:12px;font-family:Fredoka,sans-serif;font-weight:700;font-size:clamp(.9rem,2.2vw,1.4rem);animation:gm-bounce 1.6s ease-in-out infinite}
        .gm-cta{animation:gm-pulse 1.8s ease-in-out infinite}
        @keyframes gm-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
        @keyframes gm-pop{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}
        @keyframes gm-rise{from{transform:scaleY(0);opacity:0}to{transform:scaleY(1);opacity:1}}
        @keyframes gm-slide{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:none}}
        @keyframes gm-grow{from{width:0}to{width:var(--w)}}
        @keyframes gm-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes gm-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
        @media (max-width:640px){
          .gm{aspect-ratio:auto;min-height:420px}
          .gm-results{grid-template-columns:1fr;gap:.8rem}
          .gm-defis{grid-template-columns:1fr 1fr;gap:.6rem}
          .gm-arrow{display:none}
          .gm-list.right{align-items:flex-start;text-align:left}
          .gm-col-name{display:none}
          .gm-col-verbe{display:none}
          .gm-bottom{flex-direction:column;align-items:center;text-align:center}
        }
        @media (prefers-reduced-motion:reduce){.gm *{animation:none !important;transition:none !important}}
      `}</style>
    </div>
  );
}
