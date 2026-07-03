import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, BookOpen, Headphones, Bell, Check, Hourglass,
  Moon, Sun, Sparkles, Shield, Eye, Quote, List, LayoutGrid, Users,
} from "lucide-react";
import { TAADIDI } from "../data/series/taadidi";
import { track } from "../lib/track";
import { resumePage } from "../lib/reading";
import TaadidiLignee from "../components/TaadidiLignee";
import { useTrackRead } from "../hooks/useTrackRead";

// ── Charte ──────────────────────────────────────────────────────────────────
const GREEN         = "#0D2B1A";
const GOLD          = "#FFC93C";
const ACCENT        = TAADIDI.accent; // #C8841E
const MANGROVE      = "#1F6E52";
const MANGROVE_DEEP = "#143D2E";
const LAGUNE        = "#2C7DA0";
const DISPLAY       = "'Fraunces', Georgia, 'Times New Roman', serif";

// Couleur de chaque quartier de lune
const PHASE_COLORS = [
  "#7B5EA7", // 🌑 Nouvelle lune — violet nuit
  "#2C7DA0", // 🌓 Premier quartier — lagune
  "#1F6E52", // 🌕 Pleine lune — mangrove
  "#C8841E", // 🌗 Dernier quartier — or/ocre
] as const;

// ── Supabase notify ──────────────────────────────────────────────────────────
const SB = {
  url: "https://gipqwrqwouytlmsuxefj.supabase.co",
  key: "sb_publishable_gaOQLiWvGUeSwOozZlPPGQ_e6ii9upC",
};

async function notify(email: string): Promise<void> {
  try {
    const r = await fetch(`${SB.url}/rest/v1/taadidi_notify`, {
      method: "POST",
      headers: {
        apikey: SB.key,
        Authorization: `Bearer ${SB.key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email }),
    });
    if (!r.ok) throw new Error("supabase");
  } catch {
    try {
      const k = "taadidi_notify_local";
      const list = JSON.parse(localStorage.getItem(k) || "[]");
      list.push({ email, ts: Date.now() });
      localStorage.setItem(k, JSON.stringify(list));
    } catch { /* ignore */ }
  }
}

// ── NotifyForm ───────────────────────────────────────────────────────────────
function NotifyForm() {
  const [email, setEmail]   = useState("");
  const [hp, setHp]         = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  const submit = async () => {
    if (!valid || status === "sending") return;
    if (hp) { setStatus("done"); return; }
    try {
      const last = Number(localStorage.getItem("taadidi_notify_ts") || 0);
      if (Date.now() - last < 30000) { setStatus("done"); return; }
      localStorage.setItem("taadidi_notify_ts", String(Date.now()));
    } catch { /* ignore */ }
    setStatus("sending");
    await notify(email.trim());
    track("taadidi_notify");
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="flex items-center gap-3 bg-[#0F6E56]/10 text-[#0F6E56] font-display font-semibold rounded-2xl px-5 py-4">
        <Check size={20} /> C'est noté&nbsp;! On te préviendra dès la sortie du prochain épisode.
      </div>
    );
  }
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={hp} onChange={(e) => setHp(e.target.value)}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
      <input type="email" inputMode="email" placeholder="ton@email.com" value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
        className="flex-1 rounded-2xl border-2 border-[#0D2B1A]/10 bg-white px-4 py-3 font-semibold text-[#0D2B1A] outline-none focus:border-[#C8841E]" />
      <button onClick={submit} disabled={!valid || status === "sending"}
        className={`btn-kid text-[#0D2B1A] shadow-kid ${valid ? "" : "opacity-50 pointer-events-none"}`}
        style={{ background: GOLD }}>
        <Bell size={18} /> {status === "sending" ? "Envoi…" : "Préviens-moi"}
      </button>
    </div>
  );
}

// ── Données saga ─────────────────────────────────────────────────────────────
const PHASES: {
  n: number; lune: string; emoji: string; range: [number, number];
  etape: string; note: string; pivot?: string;
}[] = [
  { n: 1, lune: "Nouvelle lune",    emoji: "🌑", range: [1,  7],  etape: "Naissance & petite enfance", note: "L'ombre avant la lumière. Taadidi naît en épargnant sa mère, et se fait son missionnaire." },
  { n: 2, lune: "Premier quartier", emoji: "🌓", range: [8,  14], etape: "Enfance — sœurs & camarades", note: "Le monde s'élargit. Il inclut les filles que les autres écartent." },
  { n: 3, lune: "Pleine lune",      emoji: "🌕", range: [15, 21], etape: "Adolescence",                 note: "« Les filles sont la lune », dit à son comble — et le refus de la violence.", pivot: "Kiké" },
  { n: 4, lune: "Dernier quartier", emoji: "🌗", range: [22, 28], etape: "Mariage → paternité",         note: "La lune cède au jour. Taadidi devient père d'une fille qu'il nomme le soleil.",  pivot: "Sogué" },
];

const PERSONNAGES: { nom: string; trait: string; mot: string; tone: string; img?: string }[] = [
  { nom: "Taadidi", trait: "Le rusé. Né missionnaire de sa mère ; il déjoue la force par l'intelligence.", mot: "D'accord… mais à une condition.", tone: ACCENT, img: "/images/taadidi/taadidi-age3-ado.png" },
  { nom: "Nana",    trait: "La mère. Moquée dix ans parce qu'elle « ne fait que des filles » — alors qu'elle est la championne des épreuves des femmes.", mot: "Adeyaaa… mon fils, mon missionnaire.", tone: MANGROVE },
  { nom: "Sana",    trait: "Le père. Champion des moissons, il croit qu'on gagne au muscle — jusqu'à ce que son fils lui ouvre les yeux.", mot: "Prouve-le, alors.", tone: LAGUNE },
  { nom: "Lima",    trait: "L'aînée. Celle qui chante pour relever les cœurs, et décroche sa place d'infirmière à la seule force du travail.", mot: "Je n'ai pas besoin qu'on me fasse de cadeau.", tone: MANGROVE_DEEP },
  { nom: "Tofan",   trait: "La beauté — et la tête. Elle ne monte pas sur l'estrade pour son visage, mais avec un projet pour son village.", mot: "Reconnais-moi pour ce que j'ai dans la tête.", tone: ACCENT },
  { nom: "Fanyi",   trait: "La bonté même — et maîtresse d'école. Douce, mais redoutable : c'est elle qui mène le jeu et qui choisit.", mot: "Tu veux te faire pardonner ? Prouve-le.", tone: MANGROVE },
  { nom: "Adama",   trait: "L'amie de Tofan et Fanyi. Longtemps, on ne l'a jugée que sur son visage. Un seul, lui, a vu qui elle était vraiment.", mot: "Cette voix… je l'aurais reconnue entre mille.", tone: LAGUNE },
  { nom: "Kaly",    trait: "Le jumeau doux. Le premier des fils de Bakala que la bonté ait gagné.", mot: "Tu es la Miss de mon univers.", tone: MANGROVE },
  { nom: "Kala",    trait: "Le jumeau dur. De l'ennemi juré au plus fidèle des amis — il a appris à voir plus loin que le bout de son nez.", mot: "C'est surtout pour celles qui ont une tête bien faite.", tone: MANGROVE_DEEP },
  { nom: "Bakala",  trait: "Le rival. Jaloux du père de Taadidi, il multiplie les pièges — et chacun se retourne contre lui.", mot: "Encore lui. Toujours lui.", tone: "#9c6b3f" },
  { nom: "Sayon",   trait: "Le dernier dur. Le seul que la bonté n'a pas encore gagné — celui qu'il faudra convaincre jusqu'au bout.", mot: "Moi, on ne me retourne pas comme les autres.", tone: "#7d5a46" },
  { nom: "Sogué",   trait: "Le soleil. La fille qu'il nomme la source — celle qu'il porte et protège.", mot: "Le soleil ne parle pas : il se lève.", tone: ACCENT, img: "/images/taadidi/taadidi-sogue.png" },
];

// ── Hook : lire l'état de progression de chaque épisode ─────────────────────
// "done"    → épisode entièrement lu (dernière page atteinte)
// "started" → commencé mais pas fini
// "unread"  → jamais ouvert
// "locked"  → pas encore disponible (statut "soon")
type EpStatus = "done" | "started" | "unread" | "locked";

function useReadProgress(): Record<number, EpStatus> {
  const [progress, setProgress] = useState<Record<number, EpStatus>>({});

  useEffect(() => {
    const eps = TAADIDI.episodes;
    const result: Record<number, EpStatus> = {};

    for (const ep of eps) {
      if (ep.statut !== "live") {
        result[ep.numero] = "locked";
        continue;
      }
      const id = `taadidi-${ep.numero}`;
      // resumePage retourne -1 (couverture = jamais lu) ou l'index de la dernière page vue
      const lastPage = resumePage(id);
      // total de sections = sections du reader FR
      const total = ep.reader?.fr?.sections?.length ?? 0;

      if (total === 0 || lastPage < 0) {
        result[ep.numero] = "unread";
      } else if (lastPage >= total - 1) {
        result[ep.numero] = "done";
      } else {
        result[ep.numero] = "started";
      }
    }
    setProgress(result);
  }, []);

  return progress;
}

// ── Frise 28 pastilles ───────────────────────────────────────────────────────
function EpisodeDots({ progress }: { progress: Record<number, EpStatus> }) {
  const eps = TAADIDI.episodes;

  return (
    <div className="w-full" aria-label="Progression dans la saga — 28 épisodes">
      {/* Légende compact */}
      <div className="flex items-center gap-4 mb-3 flex-wrap">
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-white/60">
          <span className="inline-block w-3 h-3 rounded-full bg-white/90" /> Lu
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-white/60">
          <span className="inline-block w-3 h-3 rounded-full border-2 border-white/70" style={{ background: "transparent" }} /> En cours
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-white/60">
          <span className="inline-block w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.18)" }} /> À lire
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-white/40">
          <span className="inline-block w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} /> Bientôt
        </span>
      </div>

      {/* 4 lignes de pastilles, une par quartier */}
      <div className="space-y-2.5">
        {PHASES.map((phase, pi) => {
          const phaseEps = eps.filter((e) => e.numero >= phase.range[0] && e.numero <= phase.range[1]);
          const color    = PHASE_COLORS[pi];
          const doneCount = phaseEps.filter((e) => progress[e.numero] === "done").length;
          const liveCount = phaseEps.filter((e) => e.statut === "live").length;

          return (
            <div key={phase.n} className="flex items-center gap-2">
              {/* Label phase */}
              <span className="text-[10px] font-bold w-5 text-center shrink-0"
                style={{ color: "rgba(255,255,255,0.45)" }}>
                {phase.emoji}
              </span>

              {/* Pastilles */}
              <div className="flex gap-1.5 flex-wrap">
                {phaseEps.map((ep) => {
                  const st  = progress[ep.numero] ?? (ep.statut === "live" ? "unread" : "locked");
                  const num = ep.numero;

                  // Styles selon statut
                  let bg = "";
                  let border = "";
                  let opacity = "1";
                  let title = `Épisode ${num} — ${ep.titre?.fr ?? ""}`;

                  if (st === "done") {
                    // Lu : couleur pleine du quartier, légèrement transparente (décoloré = fini)
                    bg     = color;
                    border = "none";
                    opacity = "0.45";
                    title += " ✓ lu";
                  } else if (st === "started") {
                    // En cours : contour de la couleur, fond très léger
                    bg     = `${color}22`;
                    border = `2px solid ${color}`;
                    title += " — en cours";
                  } else if (st === "unread") {
                    // Pas encore lu : couleur du quartier, pleine
                    bg     = color;
                    border = "none";
                  } else {
                    // Locked / bientôt
                    bg      = "rgba(255,255,255,0.06)";
                    border  = "none";
                    opacity = "1";
                    title   += " — bientôt";
                  }

                  const isClickable = ep.statut === "live";

                  return isClickable ? (
                    <Link key={num}
                      to={`/livre/taadidi-${num}/lire`}
                      title={title}
                      onClick={() => track("ep_dot_click", { ep: num })}
                      className="relative flex items-center justify-center rounded-full transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white/50 shrink-0"
                      style={{ width: 22, height: 22, background: bg, border, opacity }}>
                      <span className="text-[8px] font-bold leading-none"
                        style={{ color: st === "started" ? color : (st === "done" ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.9)") }}>
                        {num}
                      </span>
                      {/* Point "en cours" */}
                      {st === "started" && (
                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full"
                          style={{ background: GOLD }} />
                      )}
                    </Link>
                  ) : (
                    <span key={num} title={title}
                      className="flex items-center justify-center rounded-full shrink-0"
                      style={{ width: 22, height: 22, background: bg, border, opacity }}>
                      <span className="text-[8px] font-bold leading-none text-white/25">{num}</span>
                    </span>
                  );
                })}
              </div>

              {/* Compteur lu/dispo */}
              {liveCount > 0 && (
                <span className="text-[10px] font-bold shrink-0 ml-1"
                  style={{ color: doneCount === liveCount ? color : "rgba(255,255,255,0.35)" }}>
                  {doneCount}/{liveCount}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Avatar ───────────────────────────────────────────────────────────────────
function Avatar({ c, size = 48 }: { c: typeof PERSONNAGES[0]; size?: number }) {
  const [err, setErr] = useState(false);
  if (c.img && !err) {
    return (
      <span className="inline-flex rounded-full overflow-hidden shrink-0"
        style={{ width: size, height: size, background: `${c.tone}22` }}>
        <img src={c.img} alt={c.nom} className="w-full h-full object-cover"
          style={{ objectPosition: "50% 14%" }} onError={() => setErr(true)} />
      </span>
    );
  }
  return (
    <span className="inline-flex rounded-full items-center justify-center font-display font-bold text-white shrink-0"
      style={{ width: size, height: size, background: c.tone, fontSize: size * 0.38 }}>
      {c.nom[0]}
    </span>
  );
}

// ── Picto lune ───────────────────────────────────────────────────────────────
function MoonPicto({ idx, size = 36 }: { idx: number; size?: number }) {
  const fill = [0.12, 0.5, 1, 0.55][idx] ?? 0.5;
  return (
    <span className="relative inline-flex rounded-full shrink-0"
      style={{ width: size, height: size, background: MANGROVE_DEEP, border: `1px solid ${GOLD}55` }}>
      <span className="absolute inset-0 rounded-full" style={{ background: GOLD, opacity: fill }} />
    </span>
  );
}

// ── Onglet Épisodes ──────────────────────────────────────────────────────────
function TabEpisodes({ eps, progress }: { eps: typeof TAADIDI.episodes; progress: Record<number, EpStatus> }) {
  const liveCount = eps.filter((e) => e.statut === "live").length;
  const doneCount = Object.values(progress).filter((v) => v === "done").length;
  const [viewMode,    setViewMode]    = useState<"list" | "grid">("list");
  const [activePhase, setActivePhase] = useState(0);
  const phaseRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = phaseRefs.current.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActivePhase(idx);
          }
        });
      },
      { rootMargin: "-30% 0px -65% 0px", threshold: 0 },
    );
    phaseRefs.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollToPhase = (idx: number) => {
    phaseRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActivePhase(idx);
  };

  return (
    <>
      {/* Sous-nav phases */}
      <div className="sticky top-[49px] z-10 bg-white border-b border-[#0D2B1A]/10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex items-center gap-1 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {PHASES.map((p, i) => {
            const phEps  = eps.filter((e) => e.numero >= p.range[0] && e.numero <= p.range[1]);
            const livePh = phEps.filter((e) => e.statut === "live").length;
            const donePh = phEps.filter((e) => progress[e.numero] === "done").length;
            const isActive = activePhase === i;
            return (
              <button key={p.n} onClick={() => scrollToPhase(i)}
                className="flex items-center gap-1.5 px-3 py-3 text-sm font-semibold whitespace-nowrap shrink-0 border-b-2 transition-colors"
                style={{ color: isActive ? GREEN : "#6b7e74", borderColor: isActive ? PHASE_COLORS[i] : "transparent" }}>
                <span>{p.emoji}</span>
                <span className="hidden sm:inline">{p.lune}</span>
                <span className="sm:hidden text-xs">{["NL","PQ","PM","DQ"][i]}</span>
                <span className="text-[11px] px-1.5 py-0.5 rounded-full font-bold"
                  style={{
                    background: donePh === livePh && livePh > 0 ? `${PHASE_COLORS[i]}22` : (isActive ? `${PHASE_COLORS[i]}18` : `${GREEN}0d`),
                    color:      donePh === livePh && livePh > 0 ? PHASE_COLORS[i] : (isActive ? PHASE_COLORS[i] : "#8a9389"),
                  }}>
                  {donePh}/{livePh}
                </span>
              </button>
            );
          })}
          <div className="ml-auto flex items-center gap-1 pl-3 border-l border-[#0D2B1A]/10 shrink-0">
            <button onClick={() => setViewMode("list")} title="Vue liste"
              className="p-2 rounded-lg transition-colors"
              style={{ background: viewMode === "list" ? `${ACCENT}18` : "transparent", color: viewMode === "list" ? ACCENT : "#8a9389" }}>
              <List size={15} />
            </button>
            <button onClick={() => setViewMode("grid")} title="Vue grille"
              className="p-2 rounded-lg transition-colors"
              style={{ background: viewMode === "grid" ? `${ACCENT}18` : "transparent", color: viewMode === "grid" ? ACCENT : "#8a9389" }}>
              <LayoutGrid size={15} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-5 pb-14">
        {/* Résumé progression */}
        <p className="text-[#5a6b62] font-semibold text-sm mb-6">
          {doneCount > 0
            ? <><span className="font-bold text-[#0D2B1A]">{doneCount} lu{doneCount > 1 ? "s" : ""}</span> sur {liveCount} disponibles · {liveCount}/28 en ligne</>
            : <><span className="font-bold text-[#0D2B1A]">{liveCount}/28</span> épisodes en ligne · un cycle lunaire complet</>
          }
          {" "}· lis dans l'ordre ou saute à la phase qui t'appelle.
        </p>

        <div className="space-y-10">
          {PHASES.map((p, i) => {
            const inPhase  = eps.filter((e) => e.numero >= p.range[0] && e.numero <= p.range[1]);
            const liveInPh = inPhase.filter((e) => e.statut === "live").length;
            const doneInPh = inPhase.filter((e) => progress[e.numero] === "done").length;
            const nextPhase = PHASES[i + 1] ?? null;
            const phColor  = PHASE_COLORS[i];

            return (
              <section key={p.n}
                ref={(el) => { phaseRefs.current[i] = el; }}
                aria-label={p.lune}
                style={{ scrollMarginTop: "98px" }}>

                <div className="flex items-start gap-3 mb-1.5">
                  <MoonPicto idx={i} size={36} />
                  <div className="pt-0.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-bold text-lg text-[#0D2B1A] leading-tight">
                        {p.lune}
                      </h3>
                      {p.pivot && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: `${GOLD}30`, color: "#7a5a00" }}>
                          {p.pivot}
                        </span>
                      )}
                      {doneInPh === liveInPh && liveInPh > 0 && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                          style={{ background: `${phColor}18`, color: phColor }}>
                          <Check size={10} /> Terminée
                        </span>
                      )}
                    </div>
                    <p className="text-[#6b7e74] font-semibold text-xs">
                      Ép. {p.range[0]}–{p.range[1]} · {p.etape} ·{" "}
                      <span style={{ color: doneInPh === liveInPh && liveInPh > 0 ? phColor : ACCENT }}>
                        {doneInPh}/{liveInPh} lu{doneInPh > 1 ? "s" : ""}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="text-[#5a6b62] font-semibold text-xs mb-4 ml-[48px] max-w-xl">{p.note}</p>

                {/* Épisodes */}
                {viewMode === "list" ? (
                  <div className="flex flex-col gap-2">
                    {inPhase.map((ep) => {
                      const num = String(ep.numero).padStart(2, "0");
                      const st  = progress[ep.numero];

                      if (ep.statut === "live") {
                        const isDone    = st === "done";
                        const isStarted = st === "started";
                        return (
                          <Link key={ep.numero} to={`/livre/taadidi-${ep.numero}/lire`}
                            onClick={() => track("ep_click", { ep: ep.numero })}
                            className="group bg-white rounded-[1rem] border border-[#0D2B1A]/07 hover:border-[#C8841E]/40 hover:shadow-sm transition-all flex items-center gap-3.5 p-2.5 pr-3.5"
                            style={{ opacity: isDone ? 0.6 : 1 }}>
                            {/* Vignette */}
                            <div className="relative w-[46px] h-[56px] rounded-[.5rem] overflow-hidden shrink-0"
                              style={{ background: isDone ? `${phColor}40` : MANGROVE_DEEP }}>
                              {ep.planche && (
                                <img src={ep.planche} alt="" className="absolute inset-0 w-full h-full object-cover"
                                  style={{ opacity: isDone ? 0.35 : 0.75 }} />
                              )}
                              <span className="absolute bottom-1 left-1.5 font-display font-bold text-xs leading-none"
                                style={{ color: isDone ? phColor : GOLD }}>{num}</span>
                              {isDone && (
                                <span className="absolute top-1 right-1">
                                  <Check size={10} style={{ color: phColor }} />
                                </span>
                              )}
                            </div>
                            {/* Texte */}
                            <div className="flex-1 min-w-0">
                              <p className={`font-display font-bold text-sm leading-snug truncate ${isDone ? "line-through text-[#0D2B1A]/40" : "text-[#0D2B1A]"}`}>
                                {ep.titre.fr}
                              </p>
                              <p className="text-[#6b7e74] text-xs font-semibold line-clamp-1 mt-0.5">
                                {ep.teaser?.fr}
                              </p>
                            </div>
                            {/* CTA */}
                            <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-full shrink-0 transition-all group-hover:text-white group-hover:bg-[#C8841E]"
                              style={{ background: isStarted ? `${phColor}20` : `${ACCENT}15`, color: isStarted ? phColor : ACCENT }}>
                              <BookOpen size={12} /> {isDone ? "Relire" : isStarted ? "Reprendre" : "Lire"}
                            </span>
                          </Link>
                        );
                      }
                      return (
                        <div key={ep.numero}
                          className="rounded-[1rem] border border-dashed border-[#0D2B1A]/10 flex items-center gap-3.5 p-2.5 pr-3.5 opacity-40">
                          <div className="w-[46px] h-[56px] rounded-[.5rem] shrink-0 flex items-end p-1.5"
                            style={{ background: `${GREEN}12` }}>
                            <span className="font-display font-bold text-xs text-[#0D2B1A]/30">{num}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-display font-bold text-[#0D2B1A]/50 text-sm truncate">{ep.titre.fr}</p>
                            <div className="flex items-center gap-1 text-[10px] text-[#0D2B1A]/40 font-semibold mt-0.5">
                              <Hourglass size={10} /> Bientôt
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {inPhase.map((ep) => {
                      const num    = String(ep.numero).padStart(2, "0");
                      const isDone = progress[ep.numero] === "done";
                      if (ep.statut === "live") {
                        return (
                          <div key={ep.numero} className="bg-white rounded-[1.25rem] shadow-kid p-5 flex flex-col"
                            style={{ opacity: isDone ? 0.65 : 1 }}>
                            <div className="flex items-start justify-between mb-2">
                              <div className="font-display font-bold text-3xl" style={{ color: isDone ? `${phColor}80` : phColor }}>{num}</div>
                              {isDone && <Check size={14} style={{ color: phColor }} className="mt-1" />}
                            </div>
                            <h4 className={`font-display font-bold text-sm mb-1.5 leading-snug ${isDone ? "line-through text-[#0D2B1A]/40" : "text-[#0D2B1A]"}`}>
                              {ep.titre.fr}
                            </h4>
                            <p className="text-[#5a6b62] font-semibold text-xs mb-4 flex-1 line-clamp-3">{ep.teaser?.fr}</p>
                            <Link to={`/livre/taadidi-${ep.numero}/lire`}
                              className="btn-kid text-white shadow-kid self-start text-sm"
                              style={{ background: isDone ? `${phColor}90` : ACCENT }}>
                              <BookOpen size={14} /> {isDone ? "Relire" : "Lire"}
                            </Link>
                          </div>
                        );
                      }
                      return (
                        <div key={ep.numero}
                          className="rounded-[1.25rem] border-2 border-dashed border-[#0D2B1A]/12 p-5 flex flex-col bg-[#0D2B1A]/[0.02]">
                          <div className="font-display font-bold text-3xl mb-2 text-[#0D2B1A]/22">{num}</div>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0D2B1A]/40 mb-1.5">
                            <Hourglass size={12} /> Bientôt
                          </div>
                          <p className="text-[#0D2B1A]/35 font-semibold text-xs line-clamp-3">
                            {ep.teaser?.fr ?? "Un nouveau tour de Taadidi se prépare…"}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Teaser phase suivante */}
                {nextPhase && (
                  <button onClick={() => scrollToPhase(i + 1)}
                    className="mt-4 w-full flex items-center justify-between gap-3 rounded-[.875rem] px-4 py-2.5 border border-[#0D2B1A]/07 hover:border-[#C8841E]/25 transition-colors text-left"
                    style={{ background: `${MANGROVE_DEEP}07` }}>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a9389]">Phase suivante</span>
                      <p className="font-display font-bold text-xs text-[#0D2B1A] mt-0.5">
                        {nextPhase.emoji} {nextPhase.lune} · {nextPhase.etape}
                      </p>
                    </div>
                    <span className="font-bold shrink-0 text-sm" style={{ color: ACCENT }}>→</span>
                  </button>
                )}
              </section>
            );
          })}
        </div>

        {/* Notify */}
        <div className="mt-12 rounded-[1.5rem] p-6 md:p-8" style={{ background: MANGROVE_DEEP }}>
          <div className="flex items-center gap-2 font-display font-bold text-xl text-white mb-1">
            <Bell size={22} style={{ color: GOLD }} /> Préviens-moi du prochain épisode
          </div>
          <p className="text-white/75 font-semibold mb-5">Un seul message, à la sortie d'un nouvel épisode de Taadidi.</p>
          <NotifyForm />
        </div>
      </div>
    </>
  );
}

// ── Onglet Personnages ───────────────────────────────────────────────────────
function TabPersonnages() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-6 pb-14">
      <p className="text-[#5a6b62] font-semibold text-sm mb-6">Ceux qui peuplent la saga.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PERSONNAGES.map((c) => (
          <div key={c.nom} className="bg-white rounded-[1.25rem] p-5 flex flex-col border border-[#0D2B1A]/06 shadow-kid">
            <div className="flex items-center gap-3 mb-3">
              <Avatar c={c} size={44} />
              <h3 className="font-display font-bold text-base text-[#0D2B1A]">{c.nom}</h3>
            </div>
            <p className="text-[#5a6b62] font-semibold text-sm mb-3 flex-1">{c.trait}</p>
            <p className="flex items-start gap-2 text-[#0D2B1A] font-display font-semibold italic text-sm">
              <Quote size={14} style={{ color: c.tone }} className="shrink-0 mt-0.5" /> {c.mot}
            </p>
          </div>
        ))}
        <div className="rounded-[1.25rem] border-2 border-dashed border-[#0D2B1A]/12 p-5 flex flex-col items-center justify-center text-center bg-[#0D2B1A]/[0.015]">
          <Sparkles size={20} className="text-[#0D2B1A]/30 mb-2" />
          <p className="text-[#0D2B1A]/45 font-display font-semibold text-sm">Et bien d'autres…<br />au fil de la saga</p>
        </div>
      </div>
    </div>
  );
}

// ── Onglet À propos ──────────────────────────────────────────────────────────
function TabApropos() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-6 pb-14 space-y-6">
      <div>
        <h3 className="font-display font-bold text-lg text-[#0D2B1A] mb-4">Jouer & découvrir</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link to="/livre/taadidi-1/lire"
            className="bg-white rounded-[1.5rem] shadow-kid p-5 flex items-center gap-4 hover:opacity-95 transition">
            <span className="inline-flex w-11 h-11 rounded-2xl items-center justify-center shrink-0" style={{ background: `${ACCENT}1f` }}>
              <BookOpen size={22} style={{ color: ACCENT }} />
            </span>
            <span>
              <span className="block font-display font-bold text-[#0D2B1A] text-sm">Le livre interactif</span>
              <span className="block text-[#5a6b62] font-semibold text-xs mt-0.5">Lis Taadidi en 4 langues, avec quiz.</span>
            </span>
          </Link>
          <Link to="/ecouter-les-contes"
            className="bg-white rounded-[1.5rem] shadow-kid p-5 flex items-center gap-4 hover:opacity-95 transition">
            <span className="inline-flex w-11 h-11 rounded-2xl items-center justify-center shrink-0" style={{ background: `${MANGROVE}1f` }}>
              <Headphones size={22} style={{ color: MANGROVE }} />
            </span>
            <span>
              <span className="block font-display font-bold text-[#0D2B1A] text-sm">Écouter les contes</span>
              <span className="block text-[#5a6b62] font-semibold text-xs mt-0.5">La voix du conteur, en soussou.</span>
            </span>
          </Link>
        </div>
      </div>
      <div>
        <h3 className="font-display font-bold text-lg text-[#0D2B1A] mb-4">Quiz de la saga</h3>
        <Link to="/univers/taadidi/quiz"
          className="flex items-center gap-4 bg-white rounded-[1.5rem] shadow-kid p-5 hover:opacity-95 transition">
          <span className="inline-flex w-11 h-11 rounded-2xl items-center justify-center shrink-0"
            style={{ background: `${GOLD}22` }}>
            <span className="text-xl">🏆</span>
          </span>
          <span>
            <span className="block font-display font-bold text-[#0D2B1A] text-sm">Tenter le quiz</span>
            <span className="block text-[#5a6b62] font-semibold text-xs mt-0.5">15 questions sur les 28 épisodes. Tu connais vraiment Taadidi&nbsp;?</span>
          </span>
        </Link>
      </div>
      <div>
        <h3 className="font-display font-bold text-lg text-[#0D2B1A] mb-4">Créé avec</h3>
        <div className="bg-white rounded-[1.5rem] shadow-kid p-6 space-y-4">
          <p className="flex items-start gap-3 text-[#3a4a42] font-semibold text-sm">
            <Sparkles size={17} style={{ color: ACCENT }} className="shrink-0 mt-0.5" /> {TAADIDI.provenance}
          </p>
          <p className="flex items-start gap-3 text-[#3a4a42] font-semibold text-sm">
            <Shield size={17} style={{ color: MANGROVE }} className="shrink-0 mt-0.5" />
            Un récit de masculinité positive, ancré dans la pensée africaine et l'épopée mandingue. Les femmes y restent pleinement elles-mêmes ; l'horizon est l'équilibre.
          </p>
          <p className="flex items-start gap-3 text-[#3a4a42] font-semibold text-sm">
            <Eye size={17} style={{ color: LAGUNE }} className="shrink-0 mt-0.5" />
            Illustrations assistées par intelligence artificielle, déclarées, sous direction éditoriale humaine.
          </p>
        </div>
      </div>
      <p className="text-xs text-[#8a9389] font-semibold italic text-center">
        « Kiké » — en soussou : la lune, le mois, le miroir, le regard.
      </p>
    </div>
  );
}

// ── Page principale ──────────────────────────────────────────────────────────
export default function UniversTaadidi() {
  const eps      = TAADIDI.episodes;
  const progress = useReadProgress();
  const [tab, setTab] = useState<"episodes" | "personnages" | "apropos">("episodes");

  useTrackRead({ slug: "taadidi", type: "serie", title: "Taadidi" });

  // Épisode suivant à lire (premier non "done" parmi les live)
  const nextEp = eps.find(
    (e) => e.statut === "live" && progress[e.numero] !== "done"
  );

  const NAV_TABS = [
    { id: "episodes"    as const, label: "Épisodes",   count: `${eps.filter((e) => e.statut === "live").length}/28` },
    { id: "personnages" as const, label: "Personnages", count: `${PERSONNAGES.length}`, icon: <Users size={13} /> },
    { id: "apropos"     as const, label: "À propos",    count: null },
  ];

  return (
    <div className="bg-[#FFF6E7]">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="w-full relative overflow-hidden" style={{ background: MANGROVE_DEEP }}>
        <div aria-hidden className="absolute inset-0" style={{
          background: `radial-gradient(120% 80% at 80% -10%, ${MANGROVE}88 0%, transparent 60%),
                       radial-gradient(90% 60% at 10% 110%, ${GREEN} 0%, transparent 60%)`,
        }} />
        <div className="relative max-w-5xl mx-auto px-6 py-14 md:py-20">

          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start mb-8">
            {/* Gauche : texte */}
            <div>
              <Link to="/" className="inline-flex items-center gap-1.5 font-display font-semibold mb-6 hover:underline"
                style={{ color: GOLD }}>
                <ArrowLeft size={18} /> Accueil
              </Link>
              <div className="inline-flex items-center gap-2 font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-4"
                style={{ background: `${GOLD}22`, color: GOLD }}>
                <Sparkles size={15} /> Univers
              </div>
              <h1 className="font-bold text-white leading-none mb-2"
                style={{ fontFamily: DISPLAY, fontSize: "clamp(3rem, 11vw, 5.5rem)", letterSpacing: "0.02em" }}>
                Taadidi
              </h1>
              <p className="font-display font-semibold text-lg md:text-xl mb-2" style={{ color: GOLD }}>
                {TAADIDI.accroche}
              </p>
              <p className="text-white/75 text-sm leading-relaxed font-semibold max-w-md mb-5">
                {TAADIDI.pitch}
              </p>
              <div className="inline-flex items-center gap-2.5 font-display font-bold text-white border border-white/20 rounded-full px-4 py-1.5 mb-5 text-sm">
                <Moon size={14} style={{ color: GOLD }} /> Kiké <span className="opacity-40">→</span> Sogué <Sun size={14} style={{ color: GOLD }} />
              </div>
              <div className="flex flex-wrap gap-3">
                {nextEp ? (
                  <Link to={`/livre/taadidi-${nextEp.numero}/lire`}
                    className="btn-kid text-white shadow-kid" style={{ background: ACCENT }}>
                    <BookOpen size={17} />
                    {progress[nextEp.numero] === "started" ? `Reprendre · ép. ${nextEp.numero}` : `Commencer · ép. ${nextEp.numero}`}
                  </Link>
                ) : (
                  <Link to="/livre/taadidi-1/lire" className="btn-kid text-white shadow-kid" style={{ background: ACCENT }}>
                    <BookOpen size={17} /> Relire depuis le début
                  </Link>
                )}
                <Link to="/ecouter-les-contes" className="btn-kid text-[#0D2B1A] shadow-kid" style={{ background: GOLD }}>
                  <Headphones size={17} /> Écouter les contes
                </Link>
              </div>
            </div>

            {/* Droite : illustration */}
            <div className="relative hidden md:block w-[200px] shrink-0">
              <div aria-hidden className="absolute -inset-3 rounded-[1.5rem]"
                style={{ background: `radial-gradient(60% 60% at 50% 42%, ${GOLD}28, transparent 70%)` }} />
              <div className="relative rounded-[1.25rem] p-3"
                style={{ background: "#FFF6E7", border: `1px solid ${GOLD}55`, boxShadow: "0 16px 40px rgba(0,0,0,.3)" }}>
                <img src="/images/taadidi/taadidi-hero-pere-sogue.png"
                  alt="Taadidi devenu père, et Sogué — le soleil"
                  className="w-full rounded-[.75rem]"
                  onError={(e) => {
                    const c = e.currentTarget.closest("div") as HTMLElement | null;
                    if (c) c.style.display = "none";
                  }} />
              </div>
            </div>
          </div>

          {/* ── FRISE 28 PASTILLES ── */}
          <div className="border-t border-white/10 pt-5">
            <EpisodeDots progress={progress} />
          </div>
        </div>
      </section>

      {/* ── FRISE LIGNÉE ─────────────────────────────────────── */}
      <TaadidiLignee />

      {/* ── NAVIGATION PRINCIPALE sticky ─────────────────────── */}
      <div className="sticky top-0 z-20 bg-white border-b border-[#0D2B1A]/10 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 flex items-center gap-1">
          {NAV_TABS.map((t) => {
            const isActive = tab === t.id;
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                className="flex items-center gap-1.5 px-4 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors"
                style={{ color: isActive ? GREEN : "#6b7e74", borderColor: isActive ? ACCENT : "transparent" }}>
                {t.icon}
                {t.label}
                {t.count && (
                  <span className="text-[11px] px-1.5 py-0.5 rounded-full font-bold"
                    style={{ background: isActive ? `${ACCENT}18` : `${GREEN}0d`, color: isActive ? ACCENT : "#8a9389" }}>
                    {t.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── CONTENU ── */}
      {tab === "episodes"    && <TabEpisodes eps={eps} progress={progress} />}
      {tab === "personnages" && <TabPersonnages />}
      {tab === "apropos"     && <TabApropos />}
    </div>
  );
}
