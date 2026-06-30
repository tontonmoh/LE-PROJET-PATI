import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowLeft, Users, QrCode, Copy, Check, Loader2, Sparkles,
  GraduationCap, MessageSquare, UserRound, Play, ArrowRight,
  Map as MapIcon, Mountain, Star, TrainFront, Landmark, ScrollText,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { createSession, type SessionType } from "../lib/session";

// ── Charte ───────────────────────────────────────────────────────────────────
const GREEN  = "#0D2B1A";
const ACCENT = "#C8841E";
const GOLD   = "#FFC93C";
const CREAM  = "#FFF6E7";
const DISPLAY = "'Fraunces', Georgia, serif";

// ── Catalogue des jeux/livres jouables en session ───────────────────────────
// 6 cartes au total : 2 Pati + 4 SENAG. Entrée unique pour TOUS les modes :
// solo (joueur seul), classe (1 prof + 30 élèves), forum (stand/atelier).
//
// Champs :
//   slug / jeu       → métadonnées Supabase (table pati_sessions)
//   playPrefix       → racine de la page de jeu (la QR pointe ici)
//   withCodeInPath   → true → /session-xxx/CODE  |  false → /senag/xxx?session=CODE
//   hasLiveScores    → true → bouton "classement live" actif (sinon "bientôt")
//
// ⚠ À VÉRIFIER côté Moh : les slugs/jeu des 3 jeux SENAG doivent matcher
// ce qu'utilise SessionCompagnonsNew (existant) et ce que les pages
// SenagJeu/SenagPrimo enregistreront en phase 2. Si SessionCompagnonsNew
// crée des sessions avec un autre slug que "compagnons", ajuste ici.
type JeuSection = "pati" | "senag";
type Jeu = {
  id: string;
  slug: string;
  jeu: string;
  label: string;
  section: JeuSection;
  icon: typeof Users;
  accent: string;
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
    playPrefix: "/session", withCodeInPath: true, hasLiveScores: true,
  },
  {
    id: "corridor", slug: "corridor", jeu: "defi",
    label: "Le Corridor — TransGuinéen",
    section: "pati", icon: Mountain, accent: "#C8841E",
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
// la valeur "solo".  Voir les prérequis dans la réponse de Claude.
type Contexte = SessionType | "solo";

const TYPES: { id: Contexte; label: string; icon: typeof Users; ex: string }[] = [
  { id: "solo",   label: "Solo",   icon: UserRound,     ex: "Je joue tout seul" },
  { id: "classe", label: "Classe", icon: GraduationCap, ex: "30 élèves, une école" },
  { id: "forum",  label: "Forum",  icon: MessageSquare, ex: "Un stand, un atelier" },
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

export default function SessionNew() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Pré-sélection via ?game=<id> (utilisé par les redirects /session-compagnons/new etc.)
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
        type: type as SessionType, // cast : lib/session.ts doit accepter "solo"
        created_by: contact.trim() || undefined,
      });
      if (isSolo) {
        // Solo : on saute l'écran QR et on file direct sur le jeu.
        // Le score se loggue côté page de jeu dans pati_session_scores comme
        // pour les sessions de groupe → même Hall of Fame.
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
      <div className="min-h-screen" style={{ background: GREEN }}>
        <div className="max-w-3xl mx-auto px-6 py-10">
          <Link to="/session/new" onClick={() => setCode(null)}
            className="inline-flex items-center gap-1.5 font-display font-semibold mb-8 hover:underline"
            style={{ color: GOLD }}>
            <ArrowLeft size={18} /> Nouvelle session
          </Link>

          <div className="text-center mb-8">
            <p className="font-display font-semibold mb-2" style={{ color: GOLD }}>Session ouverte&nbsp;!</p>
            <h1 className="text-white font-bold leading-tight"
              style={{ fontFamily: DISPLAY, fontSize: "clamp(1.6rem,5vw,2.4rem)" }}>
              {label || jeu.label}
            </h1>
          </div>

          <div className="rounded-[2rem] p-8 md:p-10 text-center" style={{ background: CREAM }}>
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
  // ÉCRAN 1 — Configuration
  // ════════════════════════════════════════════════════════════════════════
  const jeuxPati  = JEUX.map((j, i) => ({ j, i })).filter(({ j }) => j.section === "pati");
  const jeuxSenag = JEUX.map((j, i) => ({ j, i })).filter(({ j }) => j.section === "senag");

  const renderJeuButton = (j: Jeu, i: number) => {
    const Icon = j.icon;
    const active = jeuIdx === i;
    return (
      <button key={j.id} onClick={() => setJeuIdx(i)}
        className="flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-colors border-2"
        style={{
          background: active ? `${j.accent}12` : "white",
          borderColor: active ? j.accent : "transparent",
        }}>
        <span className="inline-flex w-9 h-9 rounded-xl items-center justify-center shrink-0"
          style={{ background: active ? j.accent : `${GREEN}0d` }}>
          <Icon size={18} style={{ color: active ? "white" : "#8a9389" }} />
        </span>
        <span className="font-semibold text-[#0D2B1A] text-sm">{j.label}</span>
      </button>
    );
  };

  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      <div className="max-w-2xl mx-auto px-6 py-10">
        <Link to="/defi" className="inline-flex items-center gap-1.5 font-display font-semibold mb-8 hover:underline"
          style={{ color: ACCENT }}>
          <ArrowLeft size={18} /> Retour au jeu
        </Link>

        <div className="inline-flex items-center gap-2 font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-4"
          style={{ background: `${ACCENT}18`, color: ACCENT }}>
          <Sparkles size={15} /> Mode Défi
        </div>
        <h1 className="font-bold text-[#0D2B1A] leading-tight mb-2"
          style={{ fontFamily: DISPLAY, fontSize: "clamp(1.8rem,6vw,2.6rem)" }}>
          Lance ta partie
        </h1>
        <p className="text-[#5a6b62] font-semibold mb-8">
          Joue en solo, ou crée un défi pour ta classe ou ton événement — jusqu'à 300 joueurs.
        </p>

        {/* 1. Choix du jeu — 2 sections (Pati / SENAG) */}
        <div className="mb-6">
          <label className="block font-display font-bold text-[#0D2B1A] mb-2">Quel jeu&nbsp;?</label>

          <div className="mb-4">
            <p className="text-[11px] font-display font-bold uppercase tracking-[0.18em] text-[#8a9389] mb-2">
              Pati
            </p>
            <div className="flex flex-col gap-2">
              {jeuxPati.map(({ j, i }) => renderJeuButton(j, i))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-display font-bold uppercase tracking-[0.18em] text-[#8a9389] mb-2">
              SENAG — Mémoire nationale
            </p>
            <div className="flex flex-col gap-2">
              {jeuxSenag.map(({ j, i }) => renderJeuButton(j, i))}
            </div>
          </div>
        </div>

        {/* 2. Type de session */}
        <div className="mb-6">
          <label className="block font-display font-bold text-[#0D2B1A] mb-2">Quel contexte&nbsp;?</label>
          <div className="grid grid-cols-3 gap-2">
            {TYPES.map((t) => {
              const Icon = t.icon;
              const active = type === t.id;
              return (
                <button key={t.id} onClick={() => setType(t.id)}
                  className="flex flex-col items-center gap-1.5 rounded-2xl px-3 py-4 transition-colors border-2"
                  style={{
                    background: active ? `${ACCENT}12` : "white",
                    borderColor: active ? ACCENT : "transparent",
                  }}>
                  <Icon size={22} style={{ color: active ? ACCENT : "#8a9389" }} />
                  <span className="font-display font-bold text-sm text-[#0D2B1A]">{t.label}</span>
                  <span className="text-[10px] text-[#8a9389] font-semibold text-center leading-tight">{t.ex}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Label optionnel — masqué en mode Solo (pas de groupe à nommer) */}
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
              className="w-full rounded-2xl border-2 border-[#0D2B1A]/10 bg-white px-4 py-3 font-semibold text-[#0D2B1A] outline-none focus:border-[#C8841E]"
            />
          </div>
        )}

        {/* 4. Contact joueur / animateur optionnel */}
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
            className="w-full rounded-2xl border-2 border-[#0D2B1A]/10 bg-white px-4 py-3 font-semibold text-[#0D2B1A] outline-none focus:border-[#C8841E]"
          />
        </div>

        {error && (
          <p className="text-red-600 font-semibold text-sm mb-4 bg-red-50 rounded-xl px-4 py-3">{error}</p>
        )}

        <button onClick={create} disabled={creating}
          className="w-full flex items-center justify-center gap-2 font-display font-bold text-white rounded-2xl px-6 py-4 shadow-kid transition-transform hover:scale-[1.01] disabled:opacity-60"
          style={{ background: jeu.accent }}>
          {creating ? (
            <><Loader2 size={20} className="animate-spin" /> {isSolo ? "Préparation…" : "Création…"}</>
          ) : isSolo ? (
            <><Play size={20} /> Jouer maintenant</>
          ) : (
            <><QrCode size={20} /> Créer la session &amp; le QR code</>
          )}
        </button>
      </div>
    </div>
  );
}
