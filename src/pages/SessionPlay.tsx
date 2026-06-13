import { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Maximize2, Minimize2, Trophy, Loader2, Users,
  Sparkles, PartyPopper, Lock,
} from "lucide-react";
import { getSession, submitScore, formatTime, type Session } from "../lib/session";

const GREEN  = "#0D2B1A";
const ACCENT = "#C8841E";
const GOLD   = "#FFC93C";
const CREAM  = "#FFF6E7";

// Map livre_slug → fichier de jeu servi dans /public/jeux/
const GAME_SRC: Record<string, string> = {
  "puzzle-guinee": "/jeux/puzzle-guinee.html",
  "corridor":      "/jeux/corridor.html",
};

type Phase = "loading" | "join" | "playing" | "done" | "notfound" | "closed";

export default function SessionPlay() {
  const { code = "" } = useParams();
  const upper = code.toUpperCase().trim();

  const [phase, setPhase]     = useState<Phase>("loading");
  const [session, setSession] = useState<Session | null>(null);
  const [pseudo, setPseudo]   = useState("");
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
        setSession(s);
        setPhase(s.closed_at ? "closed" : "join");
      })
      .catch(() => alive && setPhase("notfound"));
    return () => { alive = false; };
  }, [upper]);

  // ── Config Supabase → iframe (classement mondial du jeu) ─────────────────
  const sendConfig = () => {
    if (SB_URL && SB_KEY) {
      frameRef.current?.contentWindow?.postMessage({ type: "pati-config", url: SB_URL, key: SB_KEY }, "*");
    }
  };

  // ── Écoute la fin de partie du jeu → poste le temps dans la session ──────
  useEffect(() => {
    if (phase !== "playing" || !session) return;
    const onMsg = async (e: MessageEvent) => {
      if (frameRef.current && e.source !== frameRef.current.contentWindow) return;
      const d = e.data;
      if (d && d.type === "pati-progress" && d.kind === "defi" && typeof d.seconds === "number") {
        const ms = Math.round(d.seconds * 1000);
        setTimeMs(ms);
        setSubmitting(true);
        try {
          const r = await submitScore({
            code: upper,
            livre_slug: session.livre_slug,
            jeu: session.jeu,
            pseudo: pseudo || "Anonyme",
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
  }, [phase, session, pseudo, upper]);

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
      <div className="min-h-screen flex items-center justify-center" style={{ background: GREEN }}>
        <Loader2 size={32} className="animate-spin" style={{ color: GOLD }} />
      </div>
    );
  }

  if (phase === "notfound") {
    return (
      <CenterCard>
        <Lock size={40} style={{ color: ACCENT }} className="mb-3" />
        <h1 className="font-display font-bold text-2xl text-[#0D2B1A] mb-2">Session introuvable</h1>
        <p className="text-[#5a6b62] font-semibold mb-6">Le code <b>{upper}</b> ne correspond à aucune partie. Vérifie auprès de l'animateur.</p>
        <Link to="/defi" className="btn-kid text-white shadow-kid justify-center" style={{ background: ACCENT }}>
          Jouer en solo
        </Link>
      </CenterCard>
    );
  }

  if (phase === "closed") {
    return (
      <CenterCard>
        <Trophy size={40} style={{ color: GOLD }} className="mb-3" />
        <h1 className="font-display font-bold text-2xl text-[#0D2B1A] mb-2">Cette partie est terminée</h1>
        <p className="text-[#5a6b62] font-semibold mb-6">{session?.label || "La session"} est close. Mais tu peux voir le classement final&nbsp;!</p>
        <Link to={`/session/${upper}/scores`} className="btn-kid text-white shadow-kid justify-center" style={{ background: ACCENT }}>
          <Trophy size={18} /> Voir le classement
        </Link>
      </CenterCard>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // JOIN — saisie du prénom
  // ════════════════════════════════════════════════════════════════════════
  if (phase === "join") {
    const valid = pseudo.trim().length >= 1;
    return (
      <CenterCard>
        <div className="inline-flex items-center gap-2 font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-4"
          style={{ background: `${ACCENT}18`, color: ACCENT }}>
          <Users size={15} /> Session {upper}
        </div>
        <h1 className="font-display font-bold text-2xl text-[#0D2B1A] mb-1">{session?.label || "Le Défi PATI"}</h1>
        <p className="text-[#5a6b62] font-semibold mb-6">Entre ton prénom pour entrer dans le classement.</p>
        <input
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && valid) setPhase("playing"); }}
          maxLength={24}
          autoFocus
          placeholder="Ton prénom"
          className="w-full rounded-2xl border-2 border-[#0D2B1A]/10 bg-white px-4 py-3 font-semibold text-[#0D2B1A] outline-none focus:border-[#C8841E] text-center mb-4"
        />
        <button onClick={() => valid && setPhase("playing")} disabled={!valid}
          className="w-full btn-kid text-white shadow-kid justify-center disabled:opacity-50"
          style={{ background: ACCENT }}>
          <Sparkles size={18} /> C'est parti&nbsp;!
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
        <h1 className="font-display font-bold text-2xl text-[#0D2B1A] mb-1">Bravo {pseudo}&nbsp;!</h1>
        {timeMs !== null && (
          <p className="font-display font-bold text-4xl mb-1" style={{ color: ACCENT }}>{formatTime(timeMs)}</p>
        )}
        {submitting ? (
          <p className="text-[#5a6b62] font-semibold mb-6 flex items-center justify-center gap-2">
            <Loader2 size={16} className="animate-spin" /> Enregistrement…
          </p>
        ) : rank !== null ? (
          <p className="text-[#5a6b62] font-semibold mb-6">
            Tu es <b style={{ color: GREEN }}>{rank}{rank === 1 ? "ᵉʳ" : "ᵉ"}</b> de la session&nbsp;!
          </p>
        ) : (
          <p className="text-[#5a6b62] font-semibold mb-6">Temps enregistré&nbsp;!</p>
        )}
        <div className="flex flex-col gap-2 w-full">
          <Link to={`/session/${upper}/scores`} className="btn-kid text-white shadow-kid justify-center" style={{ background: ACCENT }}>
            <Trophy size={18} /> Voir le classement live
          </Link>
          <button onClick={() => { setPhase("playing"); setRank(null); setTimeMs(null); }}
            className="btn-kid justify-center" style={{ background: GOLD, color: GREEN }}>
            Rejouer
          </button>
        </div>
      </CenterCard>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // PLAYING — iframe du jeu
  // ════════════════════════════════════════════════════════════════════════
  const src = GAME_SRC[session?.livre_slug ?? ""] ?? "/jeux/puzzle-guinee.html";

  return (
    <div className="bg-[#FFF6E7] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 pt-6 sm:pt-8">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-display font-bold text-sm px-3 py-1 rounded-full"
              style={{ background: `${ACCENT}15`, color: ACCENT }}>
              <Users size={14} /> {upper}
            </span>
            <h1 className="text-xl md:text-2xl text-[#0D2B1A] font-display font-bold">{pseudo}</h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={enter} className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold hover:underline">
              <Maximize2 size={18} /> Plein écran
            </button>
            <Link to={`/session/${upper}/scores`} className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold hover:underline">
              <Trophy size={18} /> Classement
            </Link>
          </div>
        </div>
        <p className="hidden sm:block text-[#3a4a42] font-semibold mb-4 text-sm">
          Place les 34 préfectures le plus vite possible. Ton temps est envoyé au classement dès que tu finis.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div ref={wrapRef}
          className={fs ? "fixed inset-0 z-[9999] bg-[#0D2B1A]" : "rounded-[1.5rem] overflow-hidden border-8 border-white shadow-kid bg-[#0D2B1A]"}>
          <iframe
            ref={frameRef}
            onLoad={sendConfig}
            src={src}
            title="Le Défi PATI"
            allow="fullscreen"
            className="w-full block"
            style={fs ? { height: "100%", width: "100%", border: 0 } : { height: "min(86vh, 1000px)", minHeight: "620px", border: 0 }}
          />
          {fs && (
            <button onClick={exit}
              className="fixed top-3 right-3 z-[10000] inline-flex items-center gap-1.5 bg-white/90 hover:bg-white text-[#0D2B1A] font-display font-semibold rounded-full px-4 py-2 shadow-kid">
              <Minimize2 size={18} /> Quitter
            </button>
          )}
        </div>
        <p className="text-center text-xs text-[#8a9389] font-semibold mt-3">
          Astuce&nbsp;: passe en plein écran pour des pièces plus grandes. Dès que tu finis, ton temps rejoint le classement <b>{upper}</b>.
        </p>
      </section>
    </div>
  );
}

// ── Carte centrée réutilisable ───────────────────────────────────────────────
function CenterCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: GREEN }}>
      <div className="w-full max-w-sm rounded-[2rem] p-8 text-center flex flex-col items-center" style={{ background: CREAM }}>
        {children}
      </div>
    </div>
  );
}
