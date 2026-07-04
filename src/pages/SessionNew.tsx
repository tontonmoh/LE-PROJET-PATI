import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowLeft, Users, QrCode, Copy, Check, Loader2, Sparkles,
  GraduationCap, MessageSquare, UserRound, Play, ArrowRight,
  Map as MapIcon, Mountain, Star, TrainFront, Landmark, ScrollText, MapPin, Building2, Gem, Layers,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { createSession, type SessionType } from "../lib/session";

// ── Charte ───────────────────────────────────────────────────────────────────
const GREEN  = "#0D2B1A";
const ACCENT = "#C8841E";
const GOLD   = "#FFC93C";
const CREAM  = "#FFF6E7";
const CORAL  = "#FF6B4A";
const PATI_GREEN = "#0F6E56";
const DISPLAY = "'Fraunces', Georgia, serif";

// ── Catalogue des jeux/livres jouables en session ───────────────────────────
// 10 cartes : 6 Pati + 4 SENAG. Entrée unique pour TOUS les modes :
// solo (joueur seul), classe (1 prof + 30 élèves), forum (stand/atelier).
//
// `visual` : chemin optionnel d'une illustration servie depuis /public/images/jeux/
// Quand présent → image en haut de la carte. Sinon → icône lucide géante.
type JeuSection = "pati" | "senag";
type Jeu = {
  id: string;
  slug: string;
  jeu: string;
  label: string;
  section: JeuSection;
  icon: typeof Users;
  accent: string;
  visual?: string;
  visualObjectPosition?: string; // ex: "center top" pour cadrer une image
  playPrefix: string;
  withCodeInPath: boolean;
  hasLiveScores: boolean;
};

const JEUX: Jeu[] = [
  // ── Pati ────────────────────────────────────────────────────────────────
  {
    id: "puzzle-guinee", slug: "puzzle-guinee", jeu: "defi",
    label: "Le Défi — Puzzle de la Guinée",
    section: "pati", icon: MapIcon, accent: "#C8841E",
    visual: "/images/jeux/puzzle-guinee.svg",
    playPrefix: "/session", withCodeInPath: true, hasLiveScores: true,
  },
  {
    id: "laguine378", slug: "laguine378", jeu: "matching-sous-pref",
    label: "LaGuinè378 — Les sous-préfectures",
    section: "pati", icon: MapPin, accent: "#7B3FBF",
    playPrefix: "/laguine378", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "konakri", slug: "konakri", jeu: "matching-quartier",
    label: "Konakri — Les quartiers",
    section: "pati", icon: Building2, accent: "#1F7A8C",
    playPrefix: "/konakri", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "belle-guinee", slug: "belle-guinee", jeu: "carte-tresors",
    label: "Belle Guinée — La carte aux trésors",
    section: "pati", icon: Gem, accent: "#FF6B4A",
    visual: "/images/jeux/belle-guinee.png",
    playPrefix: "/belle-guinee", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "iwdi", slug: "iwdi", jeu: "cartes-strategie",
    label: "IWDI LAGUINÈ — Conquête des Régions",
    section: "pati", icon: Layers, accent: "#0F6E56",
    visual: "/images/jeux/iwdi.png",
    visualObjectPosition: "center top",
    playPrefix: "/iwdi", withCodeInPath: true, hasLiveScores: false,
  },
  {
    id: "corridor", slug: "corridor", jeu: "defi",
    label: "Le Corridor — TransGuinéen",
    section: "pati", icon: Mountain, accent: "#EA7A2C",
    visual: "/images/jeux/corridor.png",
    playPrefix: "/session", withCodeInPath: true, hasLiveScores: true,
  },
  // ── SENAG ───────────────────────────────────────────────────────────────
  {
    id: "compagnons", slug: "compagnons", jeu: "puzzle",
    label: "Puzzle des Compagnons",
    section: "senag", icon: Star, accent: "#C9A227",
    playPrefix: "/session-compagnons", withCodeInPath: true, hasLiveScores: true,
  },
  {
    id: "train", slug: "train-memoire", jeu: "chronologie",
    label: "Train de la Mémoire",
    section: "senag", icon: TrainFront, accent: "#A8442C",
    playPrefix: "/senag/jeu", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "primo", slug: "primo", jeu: "chronologie-pm",
    label: "PriMo' — Les Premiers Ministres",
    section: "senag", icon: Landmark, accent: "#6B4423",
    playPrefix: "/senag/primo", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "quiz", slug: "quiz-senag", jeu: "quiz",
    label: "25 questions pour la mémoire",
    section: "senag", icon: ScrollText, accent: "#4A4416",
    playPrefix: "/senag/quiz", withCodeInPath: false, hasLiveScores: false,
  },
];

// Le mode "solo" élargit SessionType localement jusqu'à ce que
// lib/session.ts (et la contrainte CHECK Supabase si elle existe) acceptent
// la valeur "solo".
type Contexte = SessionType | "solo";

const TYPES: { id: Contexte; label: string; icon: typeof Users; ex: string; color: string }[] = [
  { id: "solo",   label: "Solo",   icon: UserRound,     ex: "Je joue tout seul",       color: PATI_GREEN },
  { id: "classe", label: "Classe", icon: GraduationCap, ex: "30 élèves, une école",    color: ACCENT },
  { id: "forum",  label: "Forum",  icon: MessageSquare, ex: "Un stand, un atelier",    color: CORAL },
];

// ── Helpers URLs (per-jeu) ──────────────────────────────────────────────────
function buildPlayPath(j: Jeu, code: string): string {
  return j.withCodeInPath ? `${j.playPrefix}/${code}` : `${j.playPrefix}?session=${code}`;
}
function buildJoinUrl(baseUrl: string, j: Jeu, code: string): string {
  return `${baseUrl}${buildPlayPath(j, code)}`;
}
function buildScoresPath(j: Jeu, code: string): string | null {
  return j.hasLiveScores ? `${j.playPrefix}/${code}/scores` : null;
}

// ── Keyframes injectées une fois ────────────────────────────────────────────
const KEYFRAMES = `
  @keyframes patiFloatA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-20px) scale(1.05); } }
  @keyframes patiFloatB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-25px,25px) scale(1.08); } }
  @keyframes patiFloatC { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(20px,15px) scale(0.95); } }
  @keyframes patiRise { 0% { opacity: 0; transform: translateY(24px) scale(0.94); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
  @keyframes patiSparkle { 0%,100% { opacity: 0.4; transform: scale(1) rotate(0deg); } 50% { opacity: 1; transform: scale(1.15) rotate(15deg); } }
  @keyframes patiPulseRing { 0% { box-shadow: 0 0 0 0 rgba(255,201,60,0.55); } 70% { box-shadow: 0 0 0 14px rgba(255,201,60,0); } 100% { box-shadow: 0 0 0 0 rgba(255,201,60,0); } }
  .pati-rise { animation: patiRise 0.55s ease-out both; }
  .pati-sparkle { animation: patiSparkle 2.4s ease-in-out infinite; }
  .pati-pulse-ring { animation: patiPulseRing 2s ease-out infinite; }
  .pati-float-a { animation: patiFloatA 9s ease-in-out infinite; }
  .pati-float-b { animation: patiFloatB 11s ease-in-out infinite; }
  .pati-float-c { animation: patiFloatC 13s ease-in-out infinite; }
`;

export default function SessionNew() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Pré-sélection via ?game=<id>
  const initialIdx = (() => {
    const g = searchParams.get("game");
    if (!g) return 0;
    const i = JEUX.findIndex((j) => j.id === g);
    return i >= 0 ? i : 0;
  })();

  const [jeuIdx, setJeuIdx]   = useState(initialIdx);
  const [type, setType]       = useState<Contexte>("solo");
  const [label, setLabel]     = useState("");
  const [contact, setContact] = useState("");

  const [creating, setCreating] = useState(false);
  const [error, setError]       = useState<string | null>(null);
  const [code, setCode]         = useState<string | null>(null);
  const [copied, setCopied]     = useState(false);

  const jeu     = JEUX[jeuIdx];
  const isSolo  = type === "solo";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://projetpati.com";
  const joinUrl = code ? buildJoinUrl(baseUrl, jeu, code) : "";

  const create = async () => {
    setCreating(true);
    setError(null);
    try {
      const s = await createSession({
        livre_slug: jeu.slug,
        jeu: jeu.jeu,
        label: label.trim() || (null as unknown as string),
        type: type as SessionType,
        created_by: contact.trim() || undefined,
      });
      if (isSolo) {
        navigate(buildPlayPath(jeu, s.code));
        return;
      }
      setCode(s.code);
    } catch {
      setError(isSolo
        ? "La partie n'a pas pu démarrer. Réessaie dans un instant."
        : "La session n'a pas pu être créée. Réessaie dans un instant.");
    } finally {
      setCreating(false);
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(joinUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* ignore */ }
  };

  // ════════════════════════════════════════════════════════════════════════
  // ÉCRAN 2 — Session créée (uniquement pour les sessions de groupe)
  // ════════════════════════════════════════════════════════════════════════
  if (code) {
    const scoresPath = buildScoresPath(jeu, code);
    const playPath = buildPlayPath(jeu, code);

    return (
      <div className="min-h-screen relative overflow-hidden" style={{ background: GREEN }}>
        <style>{KEYFRAMES}</style>
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full pati-float-a" style={{ background: `${jeu.accent}22`, filter: "blur(60px)" }} />
        <div className="absolute -bottom-40 -right-20 w-[28rem] h-[28rem] rounded-full pati-float-b" style={{ background: `${GOLD}18`, filter: "blur(80px)" }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full pati-float-c" style={{ background: `${CORAL}15`, filter: "blur(70px)" }} />

        <div className="relative max-w-3xl mx-auto px-6 py-10">
          <Link to="/session/new" onClick={() => setCode(null)}
            className="inline-flex items-center gap-1.5 font-display font-semibold mb-8 hover:underline"
            style={{ color: GOLD }}>
            <ArrowLeft size={18} /> Nouvelle session
          </Link>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-3"
              style={{ background: `${GOLD}22`, color: GOLD }}>
              <Sparkles size={15} className="pati-sparkle" /> Session ouverte&nbsp;!
            </div>
            <h1 className="text-white font-bold leading-tight"
              style={{ fontFamily: DISPLAY, fontSize: "clamp(1.6rem,5vw,2.4rem)" }}>
              {label || jeu.label}
            </h1>
          </div>

          <div className="rounded-[2rem] p-8 md:p-10 text-center relative" style={{ background: CREAM }}>
            <p className="font-display font-semibold text-[#5a6b62] mb-1">Scanne pour rejoindre</p>

            <div className="inline-flex p-5 bg-white rounded-[1.5rem] shadow-lg my-4"
              style={{ border: `3px solid ${jeu.accent}` }}>
              <QRCodeSVG
                value={joinUrl}
                size={260}
                level="H"
                fgColor={GREEN}
                bgColor="#ffffff"
                marginSize={1}
              />
            </div>

            <div className="mb-2">
              <p className="text-[#8a9389] text-sm font-semibold mb-1">ou entre le code</p>
              <p className="font-display font-bold tracking-[0.25em]"
                style={{ fontFamily: DISPLAY, fontSize: "clamp(2.5rem,9vw,4rem)", color: GREEN }}>
                {code}
              </p>
            </div>

            <button onClick={copyLink}
              className="inline-flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-full transition-colors"
              style={{ background: copied ? `${GREEN}12` : `${jeu.accent}15`, color: copied ? GREEN : jeu.accent }}>
              {copied ? <><Check size={15} /> Lien copié</> : <><Copy size={15} /> Copier le lien</>}
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {scoresPath ? (
              <Link to={scoresPath}
                className="flex items-center justify-center gap-2 font-display font-bold text-white rounded-2xl px-6 py-4 shadow-kid transition-transform hover:scale-[1.02]"
                style={{ background: jeu.accent }}>
                <Users size={20} /> Voir le classement live <ArrowRight size={18} />
              </Link>
            ) : (
              <div className="flex items-center justify-center gap-2 font-display font-semibold rounded-2xl px-6 py-4 text-center border-2 border-dashed"
                style={{ borderColor: `${GOLD}55`, color: GOLD, background: "transparent" }}>
                <Sparkles size={18} /> Classement live bientôt
              </div>
            )}
            <Link to={playPath}
              className="flex items-center justify-center gap-2 font-display font-bold rounded-2xl px-6 py-4 transition-colors"
              style={{ background: GOLD, color: GREEN }}>
              <QrCode size={20} /> Tester côté joueur
            </Link>
          </div>

          <p className="text-white/55 text-sm font-semibold text-center mt-6">
            Le classement s'affiche en direct. Tu pourras le fermer quand tout le monde a fini — les temps, eux, restent enregistrés.
          </p>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // ÉCRAN 1 — Configuration (cartes à jouer illustrées)
  // ════════════════════════════════════════════════════════════════════════
  const jeuxPati  = JEUX.map((j, i) => ({ j, i })).filter(({ j }) => j.section === "pati");
  const jeuxSenag = JEUX.map((j, i) => ({ j, i })).filter(({ j }) => j.section === "senag");

  const renderJeuCarte = (j: Jeu, i: number, delayIdx: number) => {
    const Icon = j.icon;
    const active = jeuIdx === i;
    return (
      <button
        key={j.id}
        onClick={() => setJeuIdx(i)}
        className="pati-rise group relative overflow-hidden rounded-3xl text-left transition-all duration-300 hover:scale-[1.04] hover:-rotate-1 focus:outline-none flex flex-col"
        style={{
          background: "white",
          boxShadow: active ? `0 12px 30px -8px ${j.accent}80` : `0 4px 12px -4px ${j.accent}22`,
          border: active ? `3px solid ${j.accent}` : `3px solid transparent`,
          animationDelay: `${delayIdx * 55}ms`,
        }}
      >
        {/* Zone illustration — image OU icône géante sur aplat */}
        <div
          className="relative overflow-hidden"
          style={{
            aspectRatio: "3 / 2",
            background: j.visual
              ? "white"
              : `linear-gradient(135deg, ${j.accent} 0%, ${j.accent}dd 100%)`,
          }}
        >
          {j.visual ? (
            <img
              src={j.visual}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ objectPosition: j.visualObjectPosition || "center" }}
            />
          ) : (
            <>
              {/* Blobs blancs décoratifs sur les cartes à icône */}
              <span className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/15 transition-transform duration-500 group-hover:scale-125" />
              <span className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span
                  className="inline-flex w-20 h-20 rounded-2xl items-center justify-center transition-transform duration-300 group-hover:rotate-6"
                  style={{ background: "rgba(255,255,255,0.22)" }}
                >
                  <Icon size={42} className="text-white" strokeWidth={2.2} />
                </span>
              </span>
            </>
          )}

          {/* Coche active */}
          {active && (
            <span className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white pati-pulse-ring shadow-md">
              <Check size={18} style={{ color: j.accent }} strokeWidth={3} />
            </span>
          )}
        </div>

        {/* Bandeau titre en bas — aplat accent */}
        <div
          className="px-4 py-3 flex-1 flex items-center gap-2"
          style={{
            background: active
              ? `linear-gradient(135deg, ${j.accent} 0%, ${j.accent}dd 100%)`
              : `${j.accent}12`,
          }}
        >
          {/* Petite icône badge à côté du titre */}
          <span
            className="inline-flex w-8 h-8 rounded-xl items-center justify-center shrink-0"
            style={{ background: active ? "rgba(255,255,255,0.22)" : `${j.accent}22` }}
          >
            <Icon size={16} style={{ color: active ? "white" : j.accent }} strokeWidth={2.4} />
          </span>
          <h3
            className="font-bold text-sm leading-snug"
            style={{
              fontFamily: DISPLAY,
              color: active ? "white" : GREEN,
            }}
          >
            {j.label}
          </h3>
        </div>
      </button>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: CREAM }}>
      <style>{KEYFRAMES}</style>

      {/* Blobs de fond flottants */}
      <div className="absolute -top-24 -left-16 w-80 h-80 rounded-full pati-float-a pointer-events-none"
        style={{ background: `${ACCENT}22`, filter: "blur(70px)" }} />
      <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full pati-float-b pointer-events-none"
        style={{ background: `${CORAL}18`, filter: "blur(80px)" }} />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full pati-float-c pointer-events-none"
        style={{ background: `${GOLD}22`, filter: "blur(60px)" }} />

      <div className="relative max-w-4xl mx-auto px-6 py-10">
        <Link to="/defi" className="inline-flex items-center gap-1.5 font-display font-semibold mb-8 hover:underline"
          style={{ color: ACCENT }}>
          <ArrowLeft size={18} /> Retour au jeu
        </Link>

        <div className="inline-flex items-center gap-2 font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-4"
          style={{ background: `${ACCENT}18`, color: ACCENT }}>
          <Sparkles size={15} className="pati-sparkle" /> Mode Défi
        </div>
        <h1 className="font-bold text-[#0D2B1A] leading-tight mb-2"
          style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem,7vw,3.2rem)" }}>
          Choisis ton défi <span style={{ color: ACCENT }}>!</span>
        </h1>
        <p className="text-[#5a6b62] font-semibold mb-10 text-lg">
          Joue en solo, ou crée un défi pour ta classe ou ton événement — jusqu'à 300 joueurs.
        </p>

        {/* 1. Choix du jeu — sections Pati / SENAG */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex w-8 h-8 rounded-xl items-center justify-center" style={{ background: `${PATI_GREEN}18` }}>
              <Star size={16} style={{ color: PATI_GREEN }} strokeWidth={2.5} />
            </span>
            <h2 className="font-display font-bold text-xl" style={{ color: GREEN }}>Les jeux Pati</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {jeuxPati.map(({ j, i }, idx) => renderJeuCarte(j, i, idx))}
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex w-8 h-8 rounded-xl items-center justify-center" style={{ background: `${ACCENT}18` }}>
              <Landmark size={16} style={{ color: ACCENT }} strokeWidth={2.5} />
            </span>
            <h2 className="font-display font-bold text-xl" style={{ color: GREEN }}>SENAG — Mémoire nationale</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {jeuxSenag.map(({ j, i }, idx) => renderJeuCarte(j, i, jeuxPati.length + idx))}
          </div>
        </div>

        {/* 2. Contexte */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex w-8 h-8 rounded-xl items-center justify-center" style={{ background: `${CORAL}18` }}>
              <Users size={16} style={{ color: CORAL }} strokeWidth={2.5} />
            </span>
            <h2 className="font-display font-bold text-xl" style={{ color: GREEN }}>Comment tu joues&nbsp;?</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {TYPES.map((t, idx) => {
              const Icon = t.icon;
              const active = type === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setType(t.id)}
                  className="pati-rise group relative overflow-hidden flex flex-col items-center gap-2 rounded-3xl px-3 py-6 transition-all duration-300 hover:scale-[1.04]"
                  style={{
                    background: active
                      ? `linear-gradient(135deg, ${t.color} 0%, ${t.color}dd 100%)`
                      : "white",
                    border: active ? `3px solid ${t.color}` : `3px solid transparent`,
                    boxShadow: active ? `0 12px 30px -8px ${t.color}80` : `0 4px 12px -6px ${GREEN}12`,
                    animationDelay: `${idx * 80}ms`,
                  }}
                >
                  <span className="absolute -top-4 -right-4 w-16 h-16 rounded-full transition-transform duration-500 group-hover:scale-125"
                    style={{ background: active ? "rgba(255,255,255,0.18)" : `${t.color}0d` }} />
                  <span
                    className="relative inline-flex w-14 h-14 rounded-2xl items-center justify-center transition-transform duration-300 group-hover:rotate-6"
                    style={{ background: active ? "rgba(255,255,255,0.22)" : `${t.color}18` }}
                  >
                    <Icon size={28} style={{ color: active ? "white" : t.color }} strokeWidth={2.2} />
                  </span>
                  <span className="relative font-display font-bold text-lg" style={{ color: active ? "white" : GREEN }}>{t.label}</span>
                  <span className="relative text-[11px] font-semibold text-center leading-tight" style={{ color: active ? "rgba(255,255,255,0.85)" : "#8a9389" }}>{t.ex}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Label optionnel — masqué en mode Solo */}
        {!isSolo && (
          <div className="mb-6">
            <label className="block font-display font-bold text-[#0D2B1A] mb-2">
              Nom de la partie <span className="text-[#8a9389] font-semibold text-sm">(optionnel)</span>
            </label>
            <input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              maxLength={60}
              placeholder="Classe CM2 · École Alpha · Conakry"
              className="w-full rounded-2xl border-2 border-[#0D2B1A]/10 bg-white px-4 py-3 font-semibold text-[#0D2B1A] outline-none focus:border-[#C8841E] transition-colors"
            />
          </div>
        )}

        {/* 4. Contact optionnel */}
        <div className="mb-8">
          <label className="block font-display font-bold text-[#0D2B1A] mb-2">
            Ton contact <span className="text-[#8a9389] font-semibold text-sm">
              {isSolo ? "(optionnel — pour retrouver tes scores)" : "(optionnel — pour retrouver tes sessions)"}
            </span>
          </label>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            maxLength={80}
            placeholder="email ou WhatsApp"
            className="w-full rounded-2xl border-2 border-[#0D2B1A]/10 bg-white px-4 py-3 font-semibold text-[#0D2B1A] outline-none focus:border-[#C8841E] transition-colors"
          />
        </div>

        {error && (
          <p className="text-red-600 font-semibold text-sm mb-4 bg-red-50 rounded-xl px-4 py-3">{error}</p>
        )}

        {/* CTA magnifié */}
        <button
          onClick={create}
          disabled={creating}
          className="w-full relative overflow-hidden flex items-center justify-center gap-2 font-display font-bold text-white rounded-2xl px-6 py-5 shadow-kid transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
          style={{
            background: `linear-gradient(135deg, ${jeu.accent} 0%, ${jeu.accent}cc 100%)`,
            boxShadow: `0 12px 30px -8px ${jeu.accent}80`,
            fontSize: "clamp(1rem,3vw,1.15rem)",
          }}
        >
          <span className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/15" />
          <span className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-white/10" />
          <span className="relative flex items-center gap-2">
            {creating ? (
              <><Loader2 size={22} className="animate-spin" /> {isSolo ? "Préparation…" : "Création…"}</>
            ) : isSolo ? (
              <><Play size={22} strokeWidth={2.4} /> Jouer maintenant</>
            ) : (
              <><QrCode size={22} strokeWidth={2.4} /> Créer la session &amp; le QR code</>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
