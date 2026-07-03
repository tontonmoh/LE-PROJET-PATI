import { Link } from "react-router-dom";
import { Building2, ArrowLeft, Maximize2, Minimize2, Users } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { logProgress } from "../lib/progress";

export default function Konakri() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [fs, setFs] = useState(false);

  // Config Supabase injectée au build par Netlify.
  const SB_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const SB_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
  const sendConfig = () => {
    if (SB_URL && SB_KEY) {
      frameRef.current?.contentWindow?.postMessage({ type: "pati-config", url: SB_URL, key: SB_KEY }, "*");
    }
  };

  // Écoute les messages du jeu (iframe) :
  // - chaque quartier trouvé -> progression de l'enfant actif
  // - fin de partie -> défi terminé (temps enregistré)
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (frameRef.current && e.source !== frameRef.current.contentWindow) return;
      const d = e.data;
      if (d && d.type === "pati-progress" && d.kind === "quartier" && d.ref) {
        logProgress("quartier_trouve", String(d.ref));
      }
      if (d && d.type === "pati-progress" && d.kind === "konakri-sprint" && typeof d.seconds === "number") {
        logProgress("konakri_fini", undefined, d.seconds);
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

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
  useEffect(() => {
    if (!fs) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") exit(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fs]);

  return (
    <div className="bg-[#FFF6E7]">
      <section className="max-w-6xl mx-auto px-6 pt-6 sm:pt-10">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
          <div className="flex items-center gap-2">
            <Building2 className="text-[#0F6E56]" size={26} />
            <h1 className="text-2xl md:text-3xl text-[#0D2B1A]">Konakri — Le défi des quartiers</h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={enter} className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold hover:underline">
              <Maximize2 size={18} /> Plein écran
            </button>
            <Link to="/" className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold hover:underline"><ArrowLeft size={18} /> Accueil</Link>
          </div>
        </div>
        <p className="hidden sm:block text-[#3a4a42] font-semibold mb-4">Rattache chaque quartier à sa commune, le plus vite possible. Chaque quartier trouvé sort définitivement du jeu&nbsp;— objectif&nbsp;: couvrir les 13 communes.</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div
          ref={wrapRef}
          className={
            fs
              ? "fixed inset-0 z-[9999] bg-[#FBF5E4]"
              : "rounded-[1.5rem] overflow-hidden border-8 border-white shadow-kid bg-[#FBF5E4]"
          }
        >
          <iframe
            ref={frameRef}
            onLoad={sendConfig}
            src="/jeux/konakri.html"
            title="Konakri : le défi des quartiers"
            loading="lazy"
            allow="fullscreen"
            className="w-full block"
            style={fs ? { height: "100%", width: "100%", border: 0 } : { height: "min(86vh, 1000px)", minHeight: "620px", border: 0 }}
          />
          {fs && (
            <button
              onClick={exit}
              className="fixed top-3 right-3 z-[10000] inline-flex items-center gap-1.5 bg-white/90 hover:bg-white text-[#0D2B1A] font-display font-semibold rounded-full px-4 py-2 shadow-kid"
            >
              <Minimize2 size={18} /> Quitter
            </button>
          )}
        </div>
        <p className="text-center text-xs text-[#8a9389] font-semibold mt-3">Astuce&nbsp;: plein écran pour un confort de tap maximum. Chaque quartier trouvé est marqué pour toujours&nbsp;— tu ne le reverras plus.</p>

        {/* ── Bandeau : lancer un défi de groupe ── */}
        <Link
          to="/session/new"
          className="group flex items-center gap-3 rounded-2xl px-4 py-3 mt-6 mb-3 transition-colors"
          style={{ background: "#143D2E" }}
        >
          <span className="inline-flex w-10 h-10 rounded-xl items-center justify-center shrink-0" style={{ background: "rgba(255,201,60,0.15)" }}>
            <Users size={20} style={{ color: "#FFC93C" }} />
          </span>
          <span className="flex-1">
            <span className="block font-display font-bold text-white text-sm sm:text-base">Défi de groupe&nbsp;?</span>
            <span className="block text-white/65 font-semibold text-xs sm:text-sm">
              Classe, forum, veillée… Crée une session, projette le QR code, et vois qui rattache le plus vite&nbsp;— en direct.
            </span>
          </span>
          <span className="font-display font-bold text-sm shrink-0 px-3 py-1.5 rounded-full transition-transform group-hover:translate-x-0.5"
            style={{ background: "#C8841E", color: "white" }}>
            Lancer →
          </span>
        </Link>
      </section>
    </div>
  );
}
