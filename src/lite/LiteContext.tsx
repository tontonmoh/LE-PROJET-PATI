import {
  createContext, useContext, useEffect, useState, type ReactNode,
} from "react";

// ============================================================================
// Mode léger / faible bande passante.
// - Détecte automatiquement une connexion lente (Save-Data ou 2G/3G) et propose
//   le mode léger par défaut, SANS l'imposer.
// - Mémorise le choix de l'utilisateur dans localStorage (prioritaire).
// - Ajoute/retire la classe `lite` sur <html> → le CSS et les composants
//   peuvent réagir (voir le hook useLite()).
// ============================================================================

type LiteCtx = {
  lite: boolean;
  auto: boolean;          // true si la détection réseau a proposé le mode léger
  setLite: (v: boolean) => void;
  toggle: () => void;
};

const Ctx = createContext<LiteCtx>({
  lite: false, auto: false, setLite: () => {}, toggle: () => {},
});

const KEY = "pati-lite";

function detectSlow(): boolean {
  if (typeof navigator === "undefined") return false;
  const c = (navigator as any).connection;
  if (!c) return false;
  if (c.saveData) return true;
  const t = c.effectiveType as string | undefined;
  return t === "slow-2g" || t === "2g" || t === "3g";
}

export function LiteProvider({ children }: { children: ReactNode }) {
  const auto = detectSlow();

  const [lite, setLiteState] = useState<boolean>(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v === "1") return true;
      if (v === "0") return false;
    } catch {}
    return auto; // aucune préférence enregistrée → on suit la détection réseau
  });

  useEffect(() => {
    document.documentElement.classList.toggle("lite", lite);
  }, [lite]);

  const setLite = (v: boolean) => {
    setLiteState(v);
    try { localStorage.setItem(KEY, v ? "1" : "0"); } catch {}
  };

  return (
    <Ctx.Provider value={{ lite, auto, setLite, toggle: () => setLite(!lite) }}>
      {children}
    </Ctx.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLite = () => useContext(Ctx);
