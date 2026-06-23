import { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Maximize2, Minimize2, Trophy, Loader2, Users,
  Sparkles, PartyPopper, Lock,
} from "lucide-react";
import { getSession, submitScore, formatTime, type Session } from "../lib/session";

// Charte SENAG / commémorative
const INK    = "#241c10";
const GOLD   = "#b8860b";
const GOLD_D = "#8a6608";
const PAPER  = "#f4eeda";
const PAPER_D = "#e7dcc0";
const DISPLAY = "'Fraunces', Georgia, serif";

// Map livre_slug → fichier de jeu (ciblé Compagnons)
const GAME_SRC: Record<string, string> = {
  "compagnons": "/jeux/compagnons/compagnons.html",
};

type Phase = "loading" | "ready" | "playing" | "done" | "notfound" | "closed" | "wrongjeu";

export default function SessionCompagnonsPlay() {
  const { code = "" } = useParams();
  const upper = code.toUpperCase().trim();

  const [phase, setPhase]     = useState<Phase>("loading");
  const [session, setSession] = useState<Session | null>(null);
  const [pseudo, setPseudo]   = useState<string>("");
  const [rank, setRank]       = useState<number | null>(null);
  const [timeMs, setTimeMs]   = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const wrapRef  = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [fs, setFs] = useState(false);

  const SB_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const SB_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

  // ── Charger la session ──────────────────────────────────────────────────
  useEffect(() => {
    let alive = true;
    getSession(upper)
      .then((s) => {
        if (!alive) return;
        if (!s) { setPhase("notfound"); return; }
        // Vérifier que c'est bien une session Compagnons
        if (s.jeu !== "compagnons" && s.livre_slug !== "compagnons") {
          setPhase("wrongjeu");
          setSession(s);
          return;
        }
        setSession(s);
        setPhase(s.closed_at ? "closed" : "ready");
      })
      .catch(() => alive && setPhase("notfound"));
    return () => { alive = false; };
  }, [upper]);

  // ── Config Supabase → iframe ────────────────────────────────────────────
  const sendConfig = () => {
    if (SB_URL && SB_KEY) {
      frameRef.current?.contentWindow?.postMessage({ type: "pati-config", url: SB_URL, key: SB_KEY }, "*");
    }
  };

  // ── Écoute la fin de partie : kind === 'compagnons' ─────────────────────
  useEffect(() => {
    if (phase !== "playing" || !session) return;
    const onMsg = async (e: MessageEvent) => {
      if (frameRef.current && e.source !== frameRef.current.contentWindow) return;
      const d = e.data;
      if (d && d.type === "pati-progress" && d.kind === "compagnons" && typeof d.seconds === "number") {
        const ms   = Math.round(d.seconds * 1000);
        const name = (typeof d.name === "string" && d.name.trim()) ? d.name.trim() : "Anonyme";
        setPseudo(name);
        setTimeMs(ms);
        setSubmitting(true);
        try {
          const r = await submitScore({
            code: upper,
            livre_slug: session.livre_slug,
            jeu: session.jeu,
            pseudo: name,
            time_ms: ms,
          });
          setRank(r);
        } catch { /* ignore */ }
        setSubmitting(false);
        if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {});
        setFs(false);
        setPhase("done");
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [phase, session, upper]);

  // ── Plein écran ──────────────────────────────────────────────────────────
  const enter = () => {
    setFs(true);
    const el = wrapRef.current as (HTMLDivElement & { requestFullscreen?: () => Promise<void> }) | null;
    if (el && el.requestFullscreen) el.requestFullscreen().catch(() => {});
  };
  const exit = () => {
    setFs(false);
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {});
  };
  useEffect(() => {
    const onFs = () => { if (!document.fullscreenElement) setFs(false); };
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);
  useEffect(() => {
    frameRef.current?.contentWindow?.postMessage({ type: "pati-fs", on: fs }, "*");
  }, [fs]);

  // ════════════════════════════════════════════════════════════════════════
  // ÉTATS NON-JEU
  // ════════════════════════════════════════════════════════════════════════
  if (phase === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: PAPER }}>
        <Loader2 size={32} className="animate-spin" style={{ color: GOLD }} />
      </div>
    );
  }

  if (phase === "notfound") {
    return (
      <CenterCard>
        <Lock size={40} style={{ color: GOLD_D }} className="mb-3" />
        <h1 className="font-bold text-2xl mb-2" style={{ color: INK, fontFamily: DISPLAY }}>Session introuvable</h1>
        <p className="font-semibold mb-6" style={{ color: INK, opacity: 0.65 }}>
          Le code <b>{upper}</b> ne correspond à aucune partie. Vérifie auprès de l'animateur.
        </p>
        <Link to="/senag" className="rounded-2xl px-6 py-3 font-bold inline-flex items-center gap-2 justify-center"
              style={{ background: INK, color: PAPER, fontFamily: DISPLAY, boxShadow: `3px 3px 0 ${GOLD}` }}>
          Retour SENAG
        </Link>
      </CenterCard>
    );
  }

  if (phase === "wrongjeu") {
    return (
      <CenterCard>
        <Lock size={40} style={{ color: GOLD_D }} className="mb-3" />
        <h1 className="font-bold text-2xl mb-2" style={{ color: INK, fontFamily: DISPLAY }}>Mauvais jeu</h1>
        <p className="font-semibold mb-6" style={{ color: INK, opacity: 0.65 }}>
          Le code <b>{upper}</b> correspond à une session pour <em>{session?.jeu}</em>, pas pour <em>La Carte des Compagnons</em>.
        </p>
        <Link to={`/session/${upper}`} className="rounded-2xl px-6 py-3 font-bold inline-flex items-center gap-2 justify-center"
              style={{ background: INK, color: PAPER, fontFamily: DISPLAY, boxShadow: `3px 3px 0 ${GOLD}` }}>
          Rejoindre la bonne session
        </Link>
      </CenterCard>
    );
  }

  if (phase === "closed") {
    return (
      <CenterCard>
        <Trophy size={40} style={{ color: GOLD }} className="mb-3" />
        <h1 className="font-bold text-2xl mb-2" style={{ color: INK, fontFamily: DISPLAY }}>Cette session est terminée</h1>
        <p className="font-semibold mb-6" style={{ color: INK, opacity: 0.65 }}>
          {session?.label || "La session"} est close. Le classement final reste consultable&nbsp;!
        </p>
        <Link to={`/session-compagnons/${upper}/scores`}
              className="rounded-2xl px-6 py-3 font-bold inline-flex items-center gap-2 justify-center"
              style={{ background: INK, color: PAPER, fontFamily: DISPLAY, boxShadow: `3px 3px 0 ${GOLD}` }}>
          <Trophy size={18} /> Voir le classement
        </Link>
      </CenterCard>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // READY — accueil avant lancement
  // ════════════════════════════════════════════════════════════════════════
  if (phase === "ready") {
    return (
      <CenterCard>
        <div className="inline-flex items-center gap-2 font-semibold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em]"
             style={{ background: `${GOLD}18`, color: GOLD_D, fontFamily: DISPLAY }}>
          <Users size={14} /> Session {upper}
        </div>
        <h1 className="font-bold text-2xl mb-1" style={{ color: INK, fontFamily: DISPLAY }}>
          {session?.label || "La Carte des Compagnons"}
        </h1>
        <p className="font-semibold mb-6" style={{ color: INK, opacity: 0.65 }}>
          Place chaque Compagnon sur sa circonscription le plus vite possible. Tu choisiras ton surnom
          dans le jeu — ton temps rejoint le classement dès que tu finis.
        </p>
        <button onClick={() => setPhase("playing")}
          className="w-full rounded-2xl px-6 py-4 font-bold inline-flex items-center justify-center gap-2"
          style={{ background: INK, color: PAPER, fontFamily: DISPLAY, boxShadow: `3px 3px 0 ${GOLD}` }}>
          <Sparkles size={18} /> Entrer dans la session&nbsp;!
        </button>
      </CenterCard>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // DONE — résultat + rang
  // ════════════════════════════════════════════════════════════════════════
  if (phase === "done") {
    return (
      <CenterCard>
        <PartyPopper size={44} style={{ color: GOLD }} className="mb-3" />
        <h1 className="font-bold text-2xl mb-1" style={{ color: INK, fontFamily: DISPLAY }}>Bravo {pseudo}&nbsp;!</h1>
        {timeMs !== null && (
          <p className="font-bold text-4xl mb-1" style={{ color: GOLD_D, fontFamily: DISPLAY }}>{formatTime(timeMs)}</p>
        )}
        {submitting ? (
          <p className="font-semibold mb-6 flex items-center justify-center gap-2" style={{ color: INK, opacity: 0.65 }}>
            <Loader2 size={16} className="animate-spin" /> Enregistrement…
          </p>
        ) : rank !== null ? (
          <p className="font-semibold mb-6" style={{ color: INK, opacity: 0.65 }}>
            Tu es <b style={{ color: INK, opacity: 1 }}>{rank}{rank === 1 ? "ᵉʳ" : "ᵉ"}</b> de la session&nbsp;!
          </p>
        ) : (
          <p className="font-semibold mb-6" style={{ color: INK, opacity: 0.65 }}>Temps enregistré&nbsp;!</p>
        )}
        <div className="flex flex-col gap-2 w-full">
          <Link to={`/session-compagnons/${upper}/scores`}
                className="rounded-2xl px-6 py-3 font-bold inline-flex items-center gap-2 justify-center"
                style={{ background: INK, color: PAPER, fontFamily: DISPLAY, boxShadow: `3px 3px 0 ${GOLD}` }}>
            <Trophy size={18} /> Voir le classement live
          </Link>
          <button onClick={() => { setPhase("playing"); setRank(null); setTimeMs(null); }}
            className="rounded-2xl px-6 py-3 font-bold inline-flex items-center gap-2 justify-center"
            style={{ background: GOLD, color: INK, fontFamily: DISPLAY }}>
            Rejouer
          </button>
        </div>
      </CenterCard>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // PLAYING — iframe du jeu Compagnons
  // ════════════════════════════════════════════════════════════════════════
  const src = GAME_SRC[session?.livre_slug ?? ""] ?? "/jeux/compagnons/compagnons.html";

  return (
    <div className="min-h-screen" style={{ background: PAPER }}>
      <section className="max-w-6xl mx-auto px-6 pt-6 sm:pt-8">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-bold text-sm px-3 py-1 rounded-full"
                  style={{ background: `${GOLD}15`, color: GOLD_D, fontFamily: DISPLAY }}>
              <Users size={14} /> Session {upper}
            </span>
            <h1 className="text-xl md:text-2xl font-bold" style={{ color: INK, fontFamily: DISPLAY }}>
              {session?.label || "La Carte des Compagnons"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={enter} className="inline-flex items-center gap-1.5 font-semibold hover:underline"
                    style={{ color: GOLD_D, fontFamily: DISPLAY }}>
              <Maximize2 size={18} /> Plein écran
            </button>
            <Link to={`/session-compagnons/${upper}/scores`}
                  className="inline-flex items-center gap-1.5 font-semibold hover:underline"
                  style={{ color: GOLD_D, fontFamily: DISPLAY }}>
              <Trophy size={18} /> Classement
            </Link>
          </div>
        </div>
        <p className="hidden sm:block font-semibold mb-4 text-sm" style={{ color: INK, opacity: 0.65 }}>
          Entre ton surnom dans le jeu, puis place les 34 Compagnons. Ton temps rejoint le classement <b>{upper}</b> dès que tu finis.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div ref={wrapRef}
          className={fs ? "fixed inset-0 z-[9999]" : "rounded-[1.5rem] overflow-hidden"}
          style={fs ? { background: INK } : { background: INK, border: `8px solid #fff`, boxShadow: `6px 6px 0 ${PAPER_D}` }}>
          <iframe
            ref={frameRef}
            onLoad={sendConfig}
            src={src}
            title="La Carte des Compagnons"
            allow="fullscreen"
            className="w-full block"
            style={fs ? { height: "100%", width: "100%", border: 0 } : { height: "min(86vh, 1000px)", minHeight: "620px", border: 0 }}
          />
          {fs && (
            <button onClick={exit}
              className="fixed top-3 right-3 z-[10000] inline-flex items-center gap-1.5 bg-white/90 hover:bg-white font-semibold rounded-full px-4 py-2"
              style={{ color: INK, fontFamily: DISPLAY }}>
              <Minimize2 size={18} /> Quitter
            </button>
          )}
        </div>
        <p className="text-center text-xs font-semibold mt-3" style={{ color: INK, opacity: 0.55 }}>
          Astuce&nbsp;: passe en plein écran pour des pièces plus grandes. Dès que tu finis, ton temps rejoint le classement <b>{upper}</b>.
        </p>
      </section>
    </div>
  );
}

// ── Carte centrée réutilisable ───────────────────────────────────────────────
function CenterCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: PAPER }}>
      <div className="w-full max-w-sm rounded-[2rem] p-8 text-center flex flex-col items-center"
           style={{ background: "#fff", border: `1px solid ${GOLD_D}33`, boxShadow: `4px 6px 0 ${PAPER_D}` }}>
        {children}
      </div>
    </div>
  );
}
