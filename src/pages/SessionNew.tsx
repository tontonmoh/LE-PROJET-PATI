import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft, Users, QrCode, Copy, Check, Loader2, Sparkles,
  GraduationCap, MessageSquare, Music, ArrowRight,
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
// (slug = livre_slug côté Supabase ; route = page qui lance le jeu)
const JEUX = [
  { slug: "puzzle-guinee", jeu: "defi",   label: "Le Défi — Puzzle de la Guinée" },
  { slug: "corridor",      jeu: "defi",   label: "Le Corridor — TransGuinéen" },
  // ajoute ici les quiz/jeux Taadidi quand ils sont jouables en défi
];

const TYPES: { id: SessionType; label: string; icon: typeof Users; ex: string }[] = [
  { id: "classe",  label: "Classe",  icon: GraduationCap, ex: "30 élèves, une école" },
  { id: "forum",   label: "Forum",   icon: MessageSquare, ex: "Un stand, un atelier" },
  { id: "concert", label: "Concert", icon: Music,         ex: "QR projeté à l'écran" },
];

export default function SessionNew() {
  const navigate = useNavigate();

  const [jeuIdx, setJeuIdx]   = useState(0);
  const [type, setType]       = useState<SessionType>("classe");
  const [label, setLabel]     = useState("");
  const [contact, setContact] = useState("");

  const [creating, setCreating] = useState(false);
  const [error, setError]       = useState<string | null>(null);
  const [code, setCode]         = useState<string | null>(null);
  const [copied, setCopied]     = useState(false);

  const jeu     = JEUX[jeuIdx];
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://projetpati.com";
  const joinUrl = code ? `${baseUrl}/session/${code}` : "";

  const create = async () => {
    setCreating(true);
    setError(null);
    try {
      const s = await createSession({
        livre_slug: jeu.slug,
        jeu: jeu.jeu,
        label: label.trim() || null as unknown as string,
        type,
        created_by: contact.trim() || undefined,
      });
      setCode(s.code);
    } catch (e) {
      setError("La session n'a pas pu être créée. Réessaie dans un instant.");
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
  // ÉCRAN 2 — Session créée : QR + code à projeter
  // ════════════════════════════════════════════════════════════════════════
  if (code) {
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

          {/* QR géant + code */}
          <div className="rounded-[2rem] p-8 md:p-10 text-center" style={{ background: CREAM }}>
            <p className="font-display font-semibold text-[#5a6b62] mb-1">Scanne pour rejoindre</p>

            <div className="inline-flex p-5 bg-white rounded-[1.5rem] shadow-lg my-4"
              style={{ border: `3px solid ${ACCENT}` }}>
              <QRCodeSVG
                value={joinUrl}
                size={260}
                level="H"
                fgColor={GREEN}
                bgColor="#ffffff"
                marginSize={1}
              />
            </div>

            {/* Code en grand pour saisie manuelle */}
            <div className="mb-2">
              <p className="text-[#8a9389] text-sm font-semibold mb-1">ou entre le code</p>
              <p className="font-display font-bold tracking-[0.25em]"
                style={{ fontFamily: DISPLAY, fontSize: "clamp(2.5rem,9vw,4rem)", color: GREEN }}>
                {code}
              </p>
            </div>

            {/* Lien copiable */}
            <button onClick={copyLink}
              className="inline-flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-full transition-colors"
              style={{ background: copied ? `${GREEN}12` : `${ACCENT}15`, color: copied ? GREEN : ACCENT }}>
              {copied ? <><Check size={15} /> Lien copié</> : <><Copy size={15} /> Copier le lien</>}
            </button>
          </div>

          {/* Actions animateur */}
          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            <Link to={`/session/${code}/scores`}
              className="flex items-center justify-center gap-2 font-display font-bold text-white rounded-2xl px-6 py-4 shadow-kid transition-transform hover:scale-[1.02]"
              style={{ background: ACCENT }}>
              <Users size={20} /> Voir le classement live <ArrowRight size={18} />
            </Link>
            <Link to={`/session/${code}`}
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
  // ÉCRAN 1 — Configuration de la session
  // ════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      <div className="max-w-2xl mx-auto px-6 py-10">
        <Link to="/defi" className="inline-flex items-center gap-1.5 font-display font-semibold mb-8 hover:underline"
          style={{ color: ACCENT }}>
          <ArrowLeft size={18} /> Retour au jeu
        </Link>

        <div className="inline-flex items-center gap-2 font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-4"
          style={{ background: `${ACCENT}18`, color: ACCENT }}>
          <Sparkles size={15} /> Mode Session
        </div>
        <h1 className="font-bold text-[#0D2B1A] leading-tight mb-2"
          style={{ fontFamily: DISPLAY, fontSize: "clamp(1.8rem,6vw,2.6rem)" }}>
          Lance un défi collectif
        </h1>
        <p className="text-[#5a6b62] font-semibold mb-8">
          Crée une partie, projette le QR code, et regarde qui finit le premier — que vous soyez 30 ou 300.
        </p>

        {/* 1. Choix du jeu */}
        <div className="mb-6">
          <label className="block font-display font-bold text-[#0D2B1A] mb-2">Quel jeu&nbsp;?</label>
          <div className="flex flex-col gap-2">
            {JEUX.map((j, i) => (
              <button key={j.slug} onClick={() => setJeuIdx(i)}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-colors border-2"
                style={{
                  background: jeuIdx === i ? `${ACCENT}12` : "white",
                  borderColor: jeuIdx === i ? ACCENT : "transparent",
                }}>
                <span className="inline-flex w-9 h-9 rounded-xl items-center justify-center shrink-0"
                  style={{ background: jeuIdx === i ? ACCENT : `${GREEN}0d` }}>
                  <QrCode size={18} style={{ color: jeuIdx === i ? "white" : "#8a9389" }} />
                </span>
                <span className="font-semibold text-[#0D2B1A] text-sm">{j.label}</span>
              </button>
            ))}
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

        {/* 3. Label (optionnel) */}
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

        {/* 4. Contact animateur (optionnel) */}
        <div className="mb-8">
          <label className="block font-display font-bold text-[#0D2B1A] mb-2">
            Ton contact <span className="text-[#8a9389] font-semibold text-sm">(optionnel — pour retrouver tes sessions)</span>
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
          style={{ background: ACCENT }}>
          {creating ? <><Loader2 size={20} className="animate-spin" /> Création…</> : <><QrCode size={20} /> Créer la session &amp; le QR code</>}
        </button>
      </div>
    </div>
  );
}
