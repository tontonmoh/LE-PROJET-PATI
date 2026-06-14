import { Link } from "react-router-dom";
import { Images, ArrowLeft, Maximize2, Minimize2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Imagier() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
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
            <Images className="text-[#C8841E]" size={26} />
            <h1 className="text-2xl md:text-3xl text-[#0D2B1A]">L'Imagier PATI</h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={enter} className="inline-flex items-center gap-1.5 text-[#C8841E] font-display font-semibold hover:underline">
              <Maximize2 size={18} /> Plein écran
            </button>
            <Link to="/momes" className="inline-flex items-center gap-1.5 text-[#C8841E] font-display font-semibold hover:underline"><ArrowLeft size={18} /> Pati Mômes</Link>
          </div>
        </div>
        <p className="hidden sm:block text-[#3a4a42] font-semibold mb-5">Touche un mot, puis touche la bonne image. Pour les tout-petits&nbsp;: chaque mot se dit aussi à voix haute.</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div
          ref={wrapRef}
          className={
            fs
              ? "fixed inset-0 z-[9999] bg-[#FFF6E7]"
              : "rounded-[1.5rem] overflow-hidden border-8 border-white shadow-kid bg-[#FFF6E7]"
          }
        >
          <iframe
            ref={frameRef}
            src="/jeux/imagier/imagier.html"
            title="L'Imagier PATI"
            loading="lazy"
            allow="fullscreen"
            className="w-full block"
            style={fs ? { height: "100%", width: "100%", border: 0 } : { height: "min(82vh, 900px)", minHeight: "560px", border: 0 }}
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
        <p className="text-center text-xs text-[#8a9389] font-semibold mt-3">Astuce&nbsp;: passe en plein écran pour de plus grandes images. Jouable au doigt sur tablette et téléphone.</p>
      </section>
    </div>
  );
}
