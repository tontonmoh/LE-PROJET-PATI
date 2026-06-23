import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Trophy, Users, Loader2, Lock, QrCode, Crown,
  Medal, ArrowLeft, CheckCircle2, Radio, X,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import {
  getSession, subscribeLeaderboard, closeSession, formatTime,
  type Session, type SessionScore,
} from "../lib/session";

// Charte SENAG / commémorative
const INK     = "#241c10";
const GOLD    = "#b8860b";
const GOLD_D  = "#8a6608";
const PAPER   = "#f4eeda";
const PAPER_D = "#e7dcc0";
const LINE    = "#cdbf9c";
const DISPLAY = "'Fraunces', Georgia, serif";

const PODIUM = [
  { color: GOLD,      ring: GOLD_D,    icon: Crown,  label: "1er" },
  { color: "#9aa3ab", ring: "#7a8189", icon: Medal,  label: "2e"  },
  { color: "#b3743f", ring: "#8e5928", icon: Medal,  label: "3e"  },
];

export default function SessionCompagnonsScores() {
  const { code = "" } = useParams();
  const upper = code.toUpperCase().trim();

  const [session, setSession]   = useState<Session | null>(null);
  const [scores, setScores]     = useState<SessionScore[]>([]);
  const [loading, setLoading]   = useState(true);
  const [notfound, setNotfound] = useState(false);
  const [showQR, setShowQR]     = useState(false);
  const [closing, setClosing]   = useState(false);
  const [confirmClose, setConfirmClose] = useState(false);

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://projetpati.com";
  const joinUrl = `${baseUrl}/session-compagnons/${upper}`;
  const isClosed = !!session?.closed_at;

  // ── Charger la session ──────────────────────────────────────────────────
  useEffect(() => {
    let alive = true;
    getSession(upper)
      .then((s) => {
        if (!alive) return;
        if (!s) { setNotfound(true); setLoading(false); return; }
        setSession(s);
        setLoading(false);
      })
      .catch(() => { if (alive) { setNotfound(true); setLoading(false); } });
    return () => { alive = false; };
  }, [upper]);

  // ── S'abonner au classement live (realtime) ─────────────────────────────
  useEffect(() => {
    if (!session) return;
    const unsub = subscribeLeaderboard(upper, (rows) => setScores(rows), 200);
    return unsub;
  }, [session, upper]);

  // ── Fermer la session ────────────────────────────────────────────────────
  const doClose = async () => {
    setClosing(true);
    try {
      await closeSession(upper);
      setSession((s) => (s ? { ...s, closed_at: new Date().toISOString() } : s));
    } catch { /* ignore */ }
    setClosing(false);
    setConfirmClose(false);
  };

  // ════════════════════════════════════════════════════════════════════════
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: PAPER }}>
        <Loader2 size={32} className="animate-spin" style={{ color: GOLD }} />
      </div>
    );
  }

  if (notfound) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: PAPER }}>
        <div className="w-full max-w-sm rounded-[2rem] p-8 text-center flex flex-col items-center"
             style={{ background: "#fff", border: `1px solid ${LINE}`, boxShadow: `4px 6px 0 ${PAPER_D}` }}>
          <Lock size={40} style={{ color: GOLD_D }} className="mb-3" />
          <h1 className="font-bold text-2xl mb-2" style={{ color: INK, fontFamily: DISPLAY }}>Session introuvable</h1>
          <p className="font-semibold mb-6" style={{ color: INK, opacity: 0.65 }}>
            Le code <b>{upper}</b> ne correspond à aucune partie.
          </p>
          <Link to="/session-compagnons/new"
                className="rounded-2xl px-6 py-3 font-bold inline-flex items-center gap-2 justify-center"
                style={{ background: INK, color: PAPER, fontFamily: DISPLAY, boxShadow: `3px 3px 0 ${GOLD}` }}>
            Créer une session
          </Link>
        </div>
      </div>
    );
  }

  const top3 = scores.slice(0, 3);
  const rest = scores.slice(3);

  return (
    <div className="min-h-screen" style={{ background: INK }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-6 py-8">

        {/* ── En-tête ── */}
        <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
          <Link to={`/session-compagnons/${upper}`}
                className="inline-flex items-center gap-1.5 font-semibold hover:underline"
                style={{ color: GOLD, fontFamily: DISPLAY }}>
            <ArrowLeft size={18} /> Rejoindre
          </Link>
          <div className="flex items-center gap-2">
            {!isClosed ? (
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.08)", color: "#7CFFB2" }}>
                <Radio size={13} className="animate-pulse" /> En direct
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.08)", color: PAPER }}>
                <CheckCircle2 size={13} /> Terminée
              </span>
            )}
            <button onClick={() => setShowQR((v) => !v)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: GOLD, color: INK, fontFamily: DISPLAY }}>
              <QrCode size={14} /> QR
            </button>
          </div>
        </div>

        {/* ── Titre + compteur ── */}
        <div className="text-center mb-2">
          <span className="inline-flex items-center gap-1.5 font-semibold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-[0.2em]"
                style={{ background: `${GOLD}22`, color: GOLD, fontFamily: DISPLAY }}>
            <Users size={14} /> SENAG · Session {upper}
          </span>
          <h1 className="font-bold leading-tight" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.8rem,6vw,3rem)", color: PAPER }}>
            {session?.label || "La Carte des Compagnons"}
          </h1>
          <p className="font-semibold mt-1" style={{ color: PAPER, opacity: 0.55 }}>
            {scores.length} joueur{scores.length > 1 ? "s" : ""}
            {scores.length === 0 && " — en attente des premiers temps…"}
          </p>
        </div>

        {/* ── QR repliable ── */}
        {showQR && (
          <div className="flex flex-col items-center my-6">
            <div className="bg-white p-5 rounded-[1.5rem]" style={{ border: `3px solid ${GOLD}` }}>
              <QRCodeSVG value={joinUrl} size={200} level="H" fgColor={INK} bgColor="#ffffff" marginSize={1} />
            </div>
            <p className="font-bold tracking-[0.2em] mt-3"
               style={{ fontFamily: DISPLAY, fontSize: "2rem", color: PAPER }}>{upper}</p>
          </div>
        )}

        {/* ── Podium ── */}
        {top3.length > 0 && (
          <div className="flex items-end justify-center gap-3 sm:gap-5 my-8">
            {[1, 0, 2].map((pos) => {
              const s = top3[pos];
              if (!s) return <div key={pos} className="flex-1 max-w-[120px]" />;
              const p = PODIUM[pos];
              const Icon = p.icon;
              const h = pos === 0 ? "h-32" : pos === 1 ? "h-24" : "h-20";
              return (
                <div key={pos} className="flex-1 max-w-[140px] flex flex-col items-center">
                  <Icon size={pos === 0 ? 32 : 24} style={{ color: p.color }} className="mb-1" />
                  <p className="font-bold text-center text-sm sm:text-base truncate w-full px-1"
                     style={{ color: PAPER, fontFamily: DISPLAY }}>
                    {s.pseudo}
                  </p>
                  <p className="font-bold mb-2"
                     style={{ color: p.color, fontSize: pos === 0 ? "1.4rem" : "1.1rem", fontFamily: DISPLAY }}>
                    {formatTime(s.time_ms)}
                  </p>
                  <div className={`w-full ${h} rounded-t-2xl flex items-start justify-center pt-2`}
                       style={{ background: `linear-gradient(180deg, ${p.color} 0%, ${p.ring} 100%)` }}>
                    <span className="font-bold text-2xl" style={{ color: INK, fontFamily: DISPLAY }}>{pos + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Reste du classement ── */}
        {rest.length > 0 && (
          <div className="rounded-[1.5rem] overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
            {rest.map((s, i) => (
              <div key={s.id}
                   className="flex items-center gap-4 px-5 py-3 border-b last:border-0"
                   style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <span className="font-bold w-8 text-center shrink-0"
                      style={{ color: PAPER, opacity: 0.4, fontFamily: DISPLAY }}>{i + 4}</span>
                <span className="flex-1 font-semibold truncate" style={{ color: PAPER }}>{s.pseudo}</span>
                <span className="font-bold tabular-nums" style={{ color: GOLD, fontFamily: DISPLAY }}>{formatTime(s.time_ms)}</span>
              </div>
            ))}
          </div>
        )}

        {/* ── Vide ── */}
        {scores.length === 0 && (
          <div className="text-center py-16">
            <Trophy size={48} className="mx-auto mb-4" style={{ color: "rgba(244,238,218,0.2)" }} />
            <p className="font-semibold" style={{ color: PAPER, opacity: 0.5 }}>
              Le premier qui finit apparaît ici, en direct.
            </p>
            <button onClick={() => setShowQR(true)}
                    className="mt-5 inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-bold"
                    style={{ background: GOLD, color: INK, fontFamily: DISPLAY, boxShadow: `3px 3px 0 ${GOLD_D}` }}>
              <QrCode size={18} /> Afficher le QR code
            </button>
          </div>
        )}

        {/* ── Fermeture (animateur) ── */}
        {!isClosed && scores.length > 0 && (
          <div className="mt-8 text-center">
            {!confirmClose ? (
              <button onClick={() => setConfirmClose(true)}
                      className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                      style={{ background: "rgba(255,255,255,0.06)", color: "rgba(244,238,218,0.7)", fontFamily: DISPLAY }}>
                <X size={15} /> Fermer la session
              </button>
            ) : (
              <div className="inline-flex flex-col items-center gap-3 rounded-2xl px-6 py-5"
                   style={{ background: "rgba(255,255,255,0.06)" }}>
                <p className="font-semibold text-sm" style={{ color: PAPER, opacity: 0.85 }}>
                  Fermer fige le classement. Les temps restent enregistrés. Continuer&nbsp;?
                </p>
                <div className="flex gap-2">
                  <button onClick={doClose} disabled={closing}
                          className="rounded-2xl px-5 py-2.5 font-bold inline-flex items-center gap-2 text-sm"
                          style={{ background: GOLD, color: INK, fontFamily: DISPLAY }}>
                    {closing ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle2 size={16} />} Oui, fermer
                  </button>
                  <button onClick={() => setConfirmClose(false)}
                          className="rounded-2xl px-5 py-2.5 font-bold inline-flex items-center gap-2 text-sm"
                          style={{ background: "rgba(255,255,255,0.1)", color: PAPER, fontFamily: DISPLAY }}>
                    Annuler
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Bandeau session fermée ── */}
        {isClosed && (
          <div className="mt-8 text-center rounded-2xl px-6 py-5" style={{ background: "rgba(255,255,255,0.05)" }}>
            <CheckCircle2 size={28} style={{ color: GOLD }} className="mx-auto mb-2" />
            <p className="font-bold" style={{ color: PAPER, fontFamily: DISPLAY }}>Session terminée</p>
            <p className="font-semibold text-sm mt-1" style={{ color: PAPER, opacity: 0.55 }}>
              Ce classement est figé et partageable. Les temps restent enregistrés pour les archives SENAG.
            </p>
          </div>
        )}

        <p className="text-center text-xs font-semibold mt-8" style={{ color: PAPER, opacity: 0.3 }}>
          projetpati.com · SENAG 2026 · La Carte des Compagnons
        </p>
      </div>
    </div>
  );
}
