import { Link } from "react-router-dom";
import { Layers, ArrowLeft, Maximize2, Minimize2, Users, Info } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { logProgress } from "../lib/progress";

export default function IwdiLaguine() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [fs, setFs] = useState(false);

  // Config Supabase pour l'iframe (comme LeDefi)
  const SB_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const SB_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
  const sendConfig = () => {
    if (SB_URL && SB_KEY) {
      frameRef.current?.contentWindow?.postMessage(
        { type: "pati-config", url: SB_URL, key: SB_KEY },
        "*",
      );
    }
  };

  // Écoute les messages du jeu — chaque victoire régionale et chaque partie terminée
  // deviennent une progression pour l'enfant actif.
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (frameRef.current && e.source !== frameRef.current.contentWindow) return;
      const d = e.data;
      if (!d || d.type !== "pati-progress" || d.jeu !== "iwdi-laguine") return;

      // Une région conquise (par un humain uniquement)
      if (d.kind === "iwdi-victory" && d.isHuman && d.region) {
        logProgress("iwdi_region_conquise", String(d.region));
      }
      // Une partie terminée : log du temps
      if (d.kind === "iwdi-fini" && typeof d.seconds === "number") {
        logProgress("iwdi_partie_finie", undefined, d.seconds);
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const enter = () => {
    setFs(true);
    const el = wrapRef.current as
      | (HTMLDivElement & { requestFullscreen?: () => Promise<void> })
      | null;
    if (el && el.requestFullscreen) el.requestFullscreen().catch(() => {});
  };
  const exit = () => {
    setFs(false);
    if (document.fullscreenElement && document.exitFullscreen)
      document.exitFullscreen().catch(() => {});
  };

  useEffect(() => {
    const onFs = () => {
      if (!document.fullscreenElement) setFs(false);
    };
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  useEffect(() => {
    frameRef.current?.contentWindow?.postMessage({ type: "pati-fs", on: fs }, "*");
  }, [fs]);

  useEffect(() => {
    if (!fs) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") exit();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fs]);

  return (
    <div className="bg-[#FFF6E7]">
      <section className="max-w-6xl mx-auto px-6 pt-6 sm:pt-10">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
          <div className="flex items-center gap-2">
            <Layers className="text-[#C8841E]" size={26} />
            <h1 className="text-2xl md:text-3xl text-[#0D2B1A]">
              IWDI LAGUINÈ — Conquête des Régions
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={enter}
              className="inline-flex items-center gap-1.5 text-[#C8841E] font-display font-semibold hover:underline"
            >
              <Maximize2 size={18} /> Plein écran
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-[#C8841E] font-display font-semibold hover:underline"
            >
              <ArrowLeft size={18} /> Accueil
            </Link>
          </div>
        </div>
        <p className="hidden sm:block text-[#3a4a42] font-semibold mb-4">
          Collectionne 5 préfectures d'une même région pour gagner. Utilise
          NIMBA, KPAWO, SYLI, SOFA et LOUMO pour prendre l'avantage. Jouable
          seul contre des bots ou en hot-seat entre amis.
        </p>

        {/* Bandeau d'intro : « La Guinée, mon origine » */}
        <div
          className="rounded-2xl px-4 py-3 mb-4 flex items-center gap-3"
          style={{
            background: "linear-gradient(180deg,#FFE08A,#FFC93C)",
            color: "#0D2B1A",
          }}
        >
          <span className="text-2xl shrink-0" aria-hidden="true">
            🎴
          </span>
          <span className="flex-1">
            <span className="block font-display font-bold text-sm sm:text-base">
              « IWDI LAGUINÈ »&nbsp;— la Guinée, mon origine
            </span>
            <span
              className="block font-semibold text-xs sm:text-sm"
              style={{ color: "#3D2410" }}
            >
              33 préfectures, 4 régions, 5 cartes stratégie inspirées du pays :
              Nimba, Sofa, Syli, Loumo, Kpawo. La collection L'Atelier Solidaire
              pour découvrir la Guinée par le jeu.
            </span>
          </span>
        </div>
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
            src="/jeux/iwdi-laguine.html"
            title="IWDI LAGUINÈ — Conquête des Régions"
            loading="lazy"
            allow="fullscreen"
            className="w-full block"
            style={
              fs
                ? { height: "100%", width: "100%", border: 0 }
                : {
                    height: "min(86vh, 1000px)",
                    minHeight: "620px",
                    border: 0,
                  }
            }
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
        <p className="text-center text-xs text-[#8a9389] font-semibold mt-3">
          Astuce&nbsp;: passe en plein écran pour des cartes plus grandes.
          Jouable au doigt sur mobile. Partie type = 5-10 minutes.
        </p>

        {/* Bandeau : défi de groupe (comme LeDefi) */}
        <Link
          to="/session/new?game=iwdi"
          className="group flex items-center gap-3 rounded-2xl px-4 py-3 mt-6 mb-3 transition-colors"
          style={{ background: "#143D2E" }}
        >
          <span
            className="inline-flex w-10 h-10 rounded-xl items-center justify-center shrink-0"
            style={{ background: "rgba(255,201,60,0.15)" }}
          >
            <Users size={20} style={{ color: "#FFC93C" }} />
          </span>
          <span className="flex-1">
            <span className="block font-display font-bold text-white text-sm sm:text-base">
              Envie de jouer à plusieurs&nbsp;?
            </span>
            <span className="block text-white/65 font-semibold text-xs sm:text-sm">
              Classe, forum, entre amis… Crée une session pour rassembler
              plusieurs joueurs autour du jeu.
            </span>
          </span>
          <span
            className="font-display font-bold text-sm shrink-0 px-3 py-1.5 rounded-full transition-transform group-hover:translate-x-0.5"
            style={{ background: "#C8841E", color: "white" }}
          >
            Lancer →
          </span>
        </Link>

        {/* Bandeau info : rappel des règles */}
        <div
          className="flex items-start gap-3 rounded-2xl px-4 py-3"
          style={{
            background: "rgba(200,132,30,0.08)",
            border: "1px solid rgba(200,132,30,0.25)",
          }}
        >
          <span
            className="inline-flex w-10 h-10 rounded-xl items-center justify-center shrink-0"
            style={{ background: "rgba(200,132,30,0.18)" }}
          >
            <Info size={20} style={{ color: "#C8841E" }} />
          </span>
          <span className="flex-1">
            <span className="block font-display font-bold text-[#0D2B1A] text-sm sm:text-base">
              Comment on joue
            </span>
            <span className="block text-[#3a4a42] font-semibold text-xs sm:text-sm">
              1️⃣ Pioche 1 carte. 2️⃣ Joue 1 stratégie si tu veux. 3️⃣ Clame
              victoire dès que tu as 5 cartes d'une même région (joker Conakry
              et cartes frontalières comptent).
            </span>
          </span>
        </div>
      </section>
    </div>
  );
}
