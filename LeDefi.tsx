import { Link } from "react-router-dom";
import { Puzzle, ArrowLeft, Maximize2, Minimize2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function LeDefi() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [fs, setFs] = useState(false);

  // Config Supabase injectée au build par Netlify (variables d'environnement Vite).
  // Absente en local => le jeu reste en localStorage. On la transmet à l'iframe au chargement.
  const SB_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const SB_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
  const sendConfig = () => {
    if (SB_URL && SB_KEY) {
      frameRef.current?.contentWindow?.postMessage({ type: "pati-config", url: SB_URL, key: SB_KEY }, "*");
    }
  };

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
            <Puzzle className="text-[#0F6E56]" size={26} />
            <h1 className="text-2xl md:text-3xl text-[#0D2B1A]">Le Défi PATI — Construire la Guinée</h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={enter} className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold hover:underline">
              <Maximize2 size={18} /> Plein écran
            </button>
            <Link to="/" className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold hover:underline"><ArrowLeft size={18} /> Accueil</Link>
          </div>
        </div>
        <p className="hidden sm:block text-[#3a4a42] font-semibold mb-5">Fais glisser les 34 préfectures à leur place, contre la montre. Sauras-tu reconstruire la carte de la Guinée&nbsp;?</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div
          ref={wrapRef}
          className={
            fs
              ? "fixed inset-0 z-[9999] bg-[#0D2B1A]"
              : "rounded-[1.5rem] overflow-hidden border-8 border-white shadow-kid bg-[#0D2B1A]"
          }
        >
          <iframe
            ref={frameRef}
            onLoad={sendConfig}
            src="/jeux/puzzle-guinee.html"
            title="Le Défi PATI : Construire la Guinée"
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
        <p className="text-center text-xs text-[#8a9389] font-semibold mt-3">Astuce&nbsp;: passe en plein écran pour des pièces plus grandes. Jouable au doigt sur mobile. Le classement est pour l'instant propre à ton appareil.</p>
      </section>
    </div>
  );
}
