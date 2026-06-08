import { useEffect, useState } from "react";
import { Download, X, Share } from "lucide-react";

// ============================================================================
// Bouton/bandeau « Installer PATI » (Add to Home Screen).
// - Android/Chrome : capture l'événement beforeinstallprompt et propose
//   l'installation native.
// - iOS/Safari : pas d'API d'installation → on affiche une carte d'aide
//   (Partager → « Sur l'écran d'accueil »).
// - Ne s'affiche qu'après 2 visites, jamais si déjà installé ou déjà refusé.
// ============================================================================

const VISIT_KEY = "pati-visits";
const DISMISS_KEY = "pati-install-dismissed";

function isStandalone() {
  return (
    window.matchMedia?.("(display-mode: standalone)").matches ||
    (navigator as any).standalone === true
  );
}
function isIos() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as any).MSStream;
}

export default function InstallPati() {
  const [deferred, setDeferred] = useState<any>(null);
  const [show, setShow] = useState(false);
  const [iosHelp, setIosHelp] = useState(false);

  useEffect(() => {
    if (isStandalone()) return;
    try { if (localStorage.getItem(DISMISS_KEY) === "1") return; } catch {}

    // Compteur de visites : +1 une seule fois par session.
    let visits = 0;
    try {
      visits = parseInt(localStorage.getItem(VISIT_KEY) || "0", 10) || 0;
      if (!sessionStorage.getItem("pati-counted")) {
        visits += 1;
        localStorage.setItem(VISIT_KEY, String(visits));
        sessionStorage.setItem("pati-counted", "1");
      }
    } catch {}
    const enough = visits >= 2;

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e);
      if (enough) setShow(true);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    // iOS : pas de beforeinstallprompt → carte d'aide manuelle.
    if (enough && isIos()) { setIosHelp(true); setShow(true); }

    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  const dismiss = () => {
    setShow(false);
    try { localStorage.setItem(DISMISS_KEY, "1"); } catch {}
  };

  const install = async () => {
    if (!deferred) return;
    deferred.prompt();
    try { await deferred.userChoice; } catch {}
    setDeferred(null);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[9998] mx-auto max-w-md rounded-2xl border border-[#FFC93C]/40 bg-[#0D2B1A] p-4 text-[#FFF6E7] shadow-kid">
      <button
        onClick={dismiss}
        aria-label="Fermer"
        className="absolute right-2 top-2 text-[#FFF6E7]/60 transition hover:text-[#FFF6E7]"
      >
        <X size={18} />
      </button>
      <div className="flex items-start gap-3 pr-5">
        <img src="/icons/pwa-192x192.png" alt="" className="h-11 w-11 rounded-xl" />
        <div className="min-w-0">
          <p className="font-display text-[#FFC93C]">Installer PATI</p>
          {iosHelp ? (
            <p className="mt-1 text-sm leading-snug text-[#FFF6E7]/85">
              Appuie sur <Share size={14} className="-mt-0.5 inline" /> en bas de Safari,
              puis « Sur l'écran d'accueil ».
            </p>
          ) : (
            <p className="mt-1 text-sm leading-snug text-[#FFF6E7]/85">
              Ajoute PATI à ton écran d'accueil — accès rapide, même quand la connexion faiblit.
            </p>
          )}
        </div>
      </div>
      {!iosHelp && (
        <button
          onClick={install}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FFC93C] px-4 py-2.5 font-display font-semibold text-[#0D2B1A] transition hover:brightness-105"
        >
          <Download size={16} /> Installer
        </button>
      )}
    </div>
  );
}
