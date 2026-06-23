import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft, Users, QrCode, Copy, Check, Loader2, Sparkles,
  GraduationCap, MessageSquare, Building2, ArrowRight,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { createSession, type SessionType } from "../lib/session";

// ── Charte SENAG / commémorative (papier d'archive · or · encre) ────────────
const INK    = "#241c10";
const GOLD   = "#b8860b";
const GOLD_D = "#8a6608";
const PAPER  = "#f4eeda";
const PAPER_D = "#e7dcc0";
const LINE   = "#cdbf9c";
const DISPLAY = "'Fraunces', Georgia, serif";

// Catalogue ciblé Compagnons UNIQUEMENT (pas de mélange avec le Défi)
const JEU = {
  slug: "compagnons",
  jeu: "compagnons",
  label: "La Carte des Compagnons",
};

const TYPES: { id: SessionType; label: string; icon: typeof Users; ex: string }[] = [
  { id: "classe",  label: "Classe",       icon: GraduationCap,  ex: "Une école, un cours" },
  { id: "forum",   label: "Atelier",      icon: MessageSquare,  ex: "Un stand, une expo" },
  { id: "concert", label: "Institution",  icon: Building2,      ex: "QR projeté en salle" },
];

export default function SessionCompagnonsNew() {
  const navigate = useNavigate();

  const [type, setType]       = useState<SessionType>("classe");
  const [label, setLabel]     = useState("");
  const [contact, setContact] = useState("");

  const [creating, setCreating] = useState(false);
  const [error, setError]       = useState<string | null>(null);
  const [code, setCode]         = useState<string | null>(null);
  const [copied, setCopied]     = useState(false);

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://projetpati.com";
  const joinUrl = code ? `${baseUrl}/session-compagnons/${code}` : "";

  const create = async () => {
    setCreating(true);
    setError(null);
    try {
      const s = await createSession({
        livre_slug: JEU.slug,
        jeu: JEU.jeu,
        label: label.trim() || (null as unknown as string),
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
      <div className="min-h-screen" style={{ background: PAPER }}>
        <div className="max-w-3xl mx-auto px-6 py-10">
          <Link to="/session-compagnons/new" onClick={() => setCode(null)}
            className="inline-flex items-center gap-1.5 font-semibold mb-8 hover:underline"
            style={{ color: GOLD_D, fontFamily: DISPLAY }}>
            <ArrowLeft size={18} /> Nouvelle session
          </Link>

          <div className="text-center mb-8">
            <p className="font-semibold mb-2 tracking-[0.2em] uppercase text-xs"
               style={{ color: GOLD_D, fontFamily: DISPLAY }}>
              SENAG · session ouverte
            </p>
            <h1 className="font-bold leading-tight" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.6rem,5vw,2.4rem)", color: INK }}>
              {label || JEU.label}
            </h1>
          </div>

          {/* QR géant + code */}
          <div className="rounded-[2rem] p-8 md:p-10 text-center"
               style={{ background: "#fff", border: `1px solid ${LINE}` }}>
            <p className="font-semibold mb-1" style={{ color: INK, opacity: 0.6, fontFamily: DISPLAY }}>
              Scanne pour rejoindre
            </p>

            <div className="inline-flex p-5 bg-white rounded-[1.5rem] my-4"
                 style={{ border: `3px solid ${GOLD}`, boxShadow: `4px 6px 0 ${PAPER_D}` }}>
              <QRCodeSVG value={joinUrl} size={260} level="H" fgColor={INK} bgColor="#ffffff" marginSize={1} />
            </div>

            <div className="mb-2">
              <p className="text-sm font-semibold mb-1" style={{ color: INK, opacity: 0.5 }}>ou entre le code</p>
              <p className="font-bold tracking-[0.25em]"
                 style={{ fontFamily: DISPLAY, fontSize: "clamp(2.5rem,9vw,4rem)", color: INK }}>
                {code}
              </p>
            </div>

            <button onClick={copyLink}
              className="inline-flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-full transition-colors"
              style={{ background: copied ? `${GOLD}22` : `${GOLD}15`, color: copied ? GOLD_D : INK }}>
              {copied ? <><Check size={15} /> Lien copié</> : <><Copy size={15} /> Copier le lien</>}
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            <Link to={`/session-compagnons/${code}/scores`}
              className="flex items-center justify-center gap-2 font-bold rounded-2xl px-6 py-4 transition-transform hover:scale-[1.02]"
              style={{ background: INK, color: PAPER, fontFamily: DISPLAY, boxShadow: `3px 3px 0 ${GOLD}` }}>
              <Users size={20} /> Classement live <ArrowRight size={18} />
            </Link>
            <Link to={`/session-compagnons/${code}`}
              className="flex items-center justify-center gap-2 font-bold rounded-2xl px-6 py-4 transition-colors"
              style={{ background: GOLD, color: INK, fontFamily: DISPLAY }}>
              <QrCode size={20} /> Tester côté joueur
            </Link>
          </div>

          <p className="text-sm font-semibold text-center mt-6" style={{ color: INK, opacity: 0.55 }}>
            Le classement s'affiche en direct. Tu pourras fermer la session quand tout le monde a fini —
            les temps restent enregistrés pour les archives.
          </p>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // ÉCRAN 1 — Configuration de la session
  // ════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen" style={{ background: PAPER }}>
      <div className="max-w-2xl mx-auto px-6 py-10">
        <Link to="/senag" className="inline-flex items-center gap-1.5 font-semibold mb-8 hover:underline"
              style={{ color: GOLD_D, fontFamily: DISPLAY }}>
          <ArrowLeft size={18} /> Retour SENAG
        </Link>

        <div className="inline-flex items-center gap-2 font-semibold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em]"
             style={{ background: `${GOLD}18`, color: GOLD_D, fontFamily: DISPLAY }}>
          <Sparkles size={14} /> Session mémoire · SENAG
        </div>
        <h1 className="font-bold leading-tight mb-2"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(1.8rem,6vw,2.6rem)", color: INK }}>
          Lance une session de groupe
        </h1>
        <p className="font-semibold mb-8" style={{ color: INK, opacity: 0.7 }}>
          Crée une partie de <em>La Carte des Compagnons</em>, projette le QR code, et regarde
          qui replace les 34 Compagnons le plus vite.
        </p>

        {/* Jeu : affiché en lecture (un seul jeu possible ici) */}
        <div className="mb-6 rounded-2xl px-4 py-3 flex items-center gap-3"
             style={{ background: "#fff", border: `2px solid ${GOLD}` }}>
          <span className="inline-flex w-10 h-10 rounded-xl items-center justify-center shrink-0"
                style={{ background: GOLD }}>
            <QrCode size={18} style={{ color: INK }} />
          </span>
          <span className="font-semibold text-sm" style={{ color: INK }}>{JEU.label}</span>
        </div>

        {/* 1. Type de session */}
        <div className="mb-6">
          <label className="block font-bold mb-2" style={{ color: INK, fontFamily: DISPLAY }}>Quel contexte&nbsp;?</label>
          <div className="grid grid-cols-3 gap-2">
            {TYPES.map((t) => {
              const Icon = t.icon;
              const active = type === t.id;
              return (
                <button key={t.id} onClick={() => setType(t.id)}
                  className="flex flex-col items-center gap-1.5 rounded-2xl px-3 py-4 transition-colors border-2"
                  style={{
                    background: active ? `${GOLD}12` : "white",
                    borderColor: active ? GOLD : "transparent",
                  }}>
                  <Icon size={22} style={{ color: active ? GOLD_D : INK, opacity: active ? 1 : 0.5 }} />
                  <span className="font-bold text-sm" style={{ color: INK, fontFamily: DISPLAY }}>{t.label}</span>
                  <span className="text-[10px] font-semibold text-center leading-tight" style={{ color: INK, opacity: 0.55 }}>{t.ex}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Label (optionnel) */}
        <div className="mb-6">
          <label className="block font-bold mb-2" style={{ color: INK, fontFamily: DISPLAY }}>
            Nom de la session <span className="font-semibold text-sm" style={{ color: INK, opacity: 0.5 }}>(optionnel)</span>
          </label>
          <input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            maxLength={60}
            placeholder="ISAMK Dubréka · 23 juin 2026"
            className="w-full rounded-2xl border-2 bg-white px-4 py-3 font-semibold outline-none"
            style={{ borderColor: `${INK}1a`, color: INK }}
            onFocus={(e) => (e.target.style.borderColor = GOLD)}
            onBlur={(e) => (e.target.style.borderColor = `${INK}1a`)}
          />
        </div>

        {/* 3. Contact animateur (optionnel) */}
        <div className="mb-8">
          <label className="block font-bold mb-2" style={{ color: INK, fontFamily: DISPLAY }}>
            Ton contact <span className="font-semibold text-sm" style={{ color: INK, opacity: 0.5 }}>(optionnel)</span>
          </label>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            maxLength={80}
            placeholder="email ou WhatsApp"
            className="w-full rounded-2xl border-2 bg-white px-4 py-3 font-semibold outline-none"
            style={{ borderColor: `${INK}1a`, color: INK }}
            onFocus={(e) => (e.target.style.borderColor = GOLD)}
            onBlur={(e) => (e.target.style.borderColor = `${INK}1a`)}
          />
        </div>

        {error && (
          <p className="font-semibold text-sm mb-4 rounded-xl px-4 py-3"
             style={{ color: "#a32d2d", background: "#fcebeb" }}>{error}</p>
        )}

        <button onClick={create} disabled={creating}
          className="w-full flex items-center justify-center gap-2 font-bold rounded-2xl px-6 py-4 transition-transform hover:scale-[1.01] disabled:opacity-60"
          style={{ background: INK, color: PAPER, fontFamily: DISPLAY, boxShadow: `3px 3px 0 ${GOLD}` }}>
          {creating ? <><Loader2 size={20} className="animate-spin" /> Création…</> : <><QrCode size={20} /> Créer la session &amp; le QR code</>}
        </button>
      </div>
    </div>
  );
}
