import { Link } from "react-router-dom";
import { Type, ArrowLeft, Maximize2, Minimize2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Almamya() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [fs, setFs] = useState(false);

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

  return (
    <div className="bg-[#FFF6E7]">
      <section className="max-w-6xl mx-auto px-6 pt-6 sm:pt-10">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
          <div className="flex items-center gap-2">
            <Type className="text-[#C8841E]" size={26} />
            <h1 className="text-2xl md:text-3xl text-[#0D2B1A]">Almamya-Zogota</h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={enter} className="inline-flex items-center gap-1.5 text-[#C8841E] font-display font-semibold hover:underline">
              <Maximize2 size={18} /> Plein écran
            </button>
            <Link to="/session/new" className="inline-flex items-center gap-1.5 text-[#C8841E] font-display font-semibold hover:underline"><ArrowLeft size={18} /> Tous les jeux</Link>
          </div>
        </div>
        <p className="hidden sm:block text-[#3a4a42] font-semibold mb-5">Le quiz de la Guinée de A à Z&nbsp;: chaque réponse commence par une lettre de l'alphabet. Seul ou en défi à deux, du niveau facile au niveau extrême.</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div
          ref={wrapRef}
          className={fs ? "fixed inset-0 z-[9999] bg-[#16224A]" : "rounded-[1.5rem] overflow-hidden border-8 border-white shadow-kid bg-[#16224A]"}
        >
          <iframe
            src="/jeux/almamya-zogota/index.html?v=3"
            title="Almamya-Zogota"
            loading="lazy"
            allow="fullscreen"
            className="w-full block"
            style={fs ? { height: "100%", width: "100%", border: 0 } : { height: "min(86vh, 960px)", minHeight: "620px", border: 0 }}
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
      </section>
    </div>
  );
}
