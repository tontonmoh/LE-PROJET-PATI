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

const GREEN  = "#0D2B1A";
const ACCENT = "#C8841E";
const GOLD   = "#FFC93C";
const CREAM  = "#FFF6E7";
const DISPLAY = "'Fraunces', Georgia, serif";

const PODIUM = [
  { color: GOLD,      ring: "#E8B530", icon: Crown,  label: "1er" },
  { color: "#C0C7CE", ring: "#9aa3ab", icon: Medal,  label: "2e"  },
  { color: "#CD8B5A", ring: "#b3743f", icon: Medal,  label: "3e"  },
];

export default function SessionScores() {
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
  const joinUrl = `${baseUrl}/session/${upper}`;
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
      <div className="min-h-screen flex items-center justify-center" style={{ background: GREEN }}>
        <Loader2 size={32} className="animate-spin" style={{ color: GOLD }} />
      </div>
    );
  }

  if (notfound) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: GREEN }}>
        <div className="w-full max-w-sm rounded-[2rem] p-8 text-center flex flex-col items-center" style={{ background: CREAM }}>
          <Lock size={40} style={{ color: ACCENT }} className="mb-3" />
          <h1 className="font-display font-bold text-2xl text-[#0D2B1A] mb-2">Session introuvable</h1>
          <p className="text-[#5a6b62] font-semibold mb-6">Le code <b>{upper}</b> ne correspond à aucune partie.</p>
          <Link to="/session/new" className="btn-kid text-white shadow-kid justify-center" style={{ background: ACCENT }}>
            Créer une session
          </Link>
        </div>
      </div>
    );
  }

  const top3 = scores.slice(0, 3);
  const rest = scores.slice(3);

  return (
    <div className="min-h-screen" style={{ background: GREEN }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-6 py-8">

        {/* ── En-tête ── */}
        <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
          <Link to={`/session/${upper}`} className="inline-flex items-center gap-1.5 font-display font-semibold hover:underline"
            style={{ color: GOLD }}>
            <ArrowLeft size={18} /> Rejoindre
          </Link>
          <div className="flex items-center gap-2">
            {!isClosed ? (
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.1)", color: "#7CFFB2" }}>
                <Radio size={13} className="animate-pulse" /> En direct
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
                <CheckCircle2 size={13} /> Terminée
              </span>
            )}
            <button onClick={() => setShowQR((v) => !v)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full"
              style={{ background: `${ACCENT}`, color: "white" }}>
              <QrCode size={14} /> QR
            </button>
          </div>
        </div>

        {/* ── Titre + compteur ── */}
        <div className="text-center mb-2">
          <span className="inline-flex items-center gap-1.5 font-display font-semibold text-sm px-3 py-1 rounded-full mb-3"
            style={{ background: `${GOLD}22`, color: GOLD }}>
            <Users size={14} /> Session {upper}
          </span>
          <h1 className="text-white font-bold leading-tight"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(1.8rem,6vw,3rem)" }}>
            {session?.label || "Classement"}
          </h1>
          <p className="text-white/55 font-semibold mt-1">
            {scores.length} joueur{scores.length > 1 ? "s" : ""}
            {scores.length === 0 && " — en attente des premiers temps…"}
          </p>
        </div>

        {/* ── QR repliable (pour ré-afficher pendant la partie) ── */}
        {showQR && (
          <div className="flex flex-col items-center my-6">
            <div className="bg-white p-5 rounded-[1.5rem]" style={{ border: `3px solid ${ACCENT}` }}>
              <QRCodeSVG value={joinUrl} size={200} level="H" fgColor={GREEN} bgColor="#ffffff" marginSize={1} />
            </div>
            <p className="font-display font-bold tracking-[0.2em] text-white mt-3"
              style={{ fontFamily: DISPLAY, fontSize: "2rem" }}>{upper}</p>
          </div>
        )}

        {/* ── Podium ── */}
        {top3.length > 0 && (
          <div className="flex items-end justify-center gap-3 sm:gap-5 my-8">
            {/* Ordre visuel : 2 - 1 - 3 */}
            {[1, 0, 2].map((pos) => {
              const s = top3[pos];
              if (!s) return <div key={pos} className="flex-1 max-w-[120px]" />;
              const p = PODIUM[pos];
              const Icon = p.icon;
              const h = pos === 0 ? "h-32" : pos === 1 ? "h-24" : "h-20";
              return (
                <div key={pos} className="flex-1 max-w-[140px] flex flex-col items-center">
                  <Icon size={pos === 0 ? 32 : 24} style={{ color: p.color }} className="mb-1" />
                  <p className="font-display font-bold text-white text-center text-sm sm:text-base truncate w-full px-1">
                    {s.pseudo}
                  </p>
                  <p className="font-display font-bold mb-2" style={{ color: p.color, fontSize: pos === 0 ? "1.4rem" : "1.1rem" }}>
                    {formatTime(s.time_ms)}
                  </p>
                  <div className={`w-full ${h} rounded-t-2xl flex items-start justify-center pt-2`}
                    style={{ background: `linear-gradient(180deg, ${p.color} 0%, ${p.ring} 100%)` }}>
                    <span className="font-display font-bold text-[#0D2B1A] text-2xl">{pos + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Reste du classement ── */}
        {rest.length > 0 && (
          <div className="rounded-[1.5rem] overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            {rest.map((s, i) => (
              <div key={s.id}
                className="flex items-center gap-4 px-5 py-3 border-b last:border-0"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <span className="font-display font-bold text-white/40 w-8 text-center shrink-0">{i + 4}</span>
                <span className="flex-1 font-semibold text-white truncate">{s.pseudo}</span>
                <span className="font-display font-bold tabular-nums" style={{ color: GOLD }}>{formatTime(s.time_ms)}</span>
              </div>
            ))}
          </div>
        )}

        {/* ── Vide ── */}
        {scores.length === 0 && (
          <div className="text-center py-16">
            <Trophy size={48} className="mx-auto mb-4" style={{ color: "rgba(255,255,255,0.2)" }} />
            <p className="text-white/50 font-semibold">Le premier qui finit apparaît ici, en direct.</p>
            <button onClick={() => setShowQR(true)}
              className="mt-5 inline-flex items-center gap-2 btn-kid text-white shadow-kid"
              style={{ background: ACCENT }}>
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
                style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>
                <X size={15} /> Fermer la session
              </button>
            ) : (
              <div className="inline-flex flex-col items-center gap-3 rounded-2xl px-6 py-5"
                style={{ background: "rgba(255,255,255,0.08)" }}>
                <p className="text-white/80 font-semibold text-sm">
                  Fermer fige le classement. Les temps restent enregistrés. Continuer&nbsp;?
                </p>
                <div className="flex gap-2">
                  <button onClick={doClose} disabled={closing}
                    className="btn-kid text-white shadow-kid justify-center text-sm" style={{ background: ACCENT }}>
                    {closing ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle2 size={16} />} Oui, fermer
                  </button>
                  <button onClick={() => setConfirmClose(false)}
                    className="btn-kid justify-center text-sm" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
                    Annuler
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Bandeau session fermée ── */}
        {isClosed && (
          <div className="mt-8 text-center rounded-2xl px-6 py-5" style={{ background: "rgba(255,255,255,0.06)" }}>
            <CheckCircle2 size={28} style={{ color: GOLD }} className="mx-auto mb-2" />
            <p className="text-white font-display font-bold">Session terminée</p>
            <p className="text-white/55 font-semibold text-sm mt-1">
              Ce classement est figé et partageable. Les temps restent enregistrés pour les statistiques et les records.
            </p>
          </div>
        )}

        <p className="text-center text-white/30 text-xs font-semibold mt-8">
          projetpati.com · Le Défi PATI
        </p>
      </div>
    </div>
  );
}
