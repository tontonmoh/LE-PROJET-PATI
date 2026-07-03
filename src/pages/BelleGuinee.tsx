import { Link } from "react-router-dom";
import { Map, ArrowLeft, Maximize2, Minimize2, Users } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { logProgress } from "../lib/progress";

export default function BelleGuinee() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [fs, setFs] = useState(false);

  const SB_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const SB_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
  const sendConfig = () => {
    if (SB_URL && SB_KEY) {
      frameRef.current?.contentWindow?.postMessage({ type: "pati-config", url: SB_URL, key: SB_KEY }, "*");
    }
  };

  // Messages du jeu :
  // - chaque trésor découvert -> progression
  // - chaque coffre réussi (préfecture allumée) -> défi terminé
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (frameRef.current && e.source !== frameRef.current.contentWindow) return;
      const d = e.data;
      if (d && d.type === "pati-progress" && d.kind === "tresor" && d.ref) {
        logProgress("tresor_trouve", String(d.ref));
      }
      if (d && d.type === "pati-progress" && d.kind === "belleguinee-coffre" && d.pref) {
        logProgress("belleguinee_coffre", String(d.pref), typeof d.seconds === "number" ? d.seconds : undefined);
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
            <Map className="text-[#0F6E56]" size={26} />
            <h1 className="text-2xl md:text-3xl text-[#0D2B1A]">Belle Guinée — La carte aux trésors</h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={enter} className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold hover:underline">
              <Maximize2 size={18} /> Plein écran
            </button>
            <Link to="/" className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold hover:underline"><ArrowLeft size={18} /> Accueil</Link>
          </div>
        </div>
        <p className="hidden sm:block text-[#3a4a42] font-semibold mb-4">Chaque préfecture est un coffre rempli des richesses de la Guinée&nbsp;: chutes, montagnes, terroirs, patrimoine, culture. Réponds aux défis, allume les 33 préfectures, collectionne les 162 trésors.</p>
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
            src="/jeux/belleguinee.html"
            title="Belle Guinée : la carte aux trésors"
            loading="lazy"
            allow="fullscreen"
            className="w-full block"
            style={fs ? { height: "100%", width: "100%", border: 0 } : { height: "min(88vh, 1050px)", minHeight: "640px", border: 0 }}
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
        <p className="text-center text-xs text-[#8a9389] font-semibold mt-3">Ta carte reste allumée pour toujours&nbsp;— reviens quand tu veux chercher les étoiles manquantes.</p>

        {/* ── Bandeau : défi de groupe ── */}
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
              Classe, forum, veillée… Crée une session, projette le QR code, et vois qui allume le plus de préfectures.
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
