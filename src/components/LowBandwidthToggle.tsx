import { SignalLow } from "lucide-react";
import { useLite } from "../lite/LiteContext";

// Bouton « Mode léger » à placer dans le header (et le menu mobile).
// Doré quand actif. `compact` = un peu plus grand pour le menu mobile.
export default function LowBandwidthToggle({ compact = false }: { compact?: boolean }) {
  const { lite, toggle } = useLite();
  return (
    <button
      onClick={toggle}
      aria-pressed={lite}
      title={
        lite
          ? "Mode léger activé — moins d'images et d'animations, pour économiser tes données"
          : "Activer le mode léger (connexion lente)"
      }
      className={
        (compact
          ? "navbar-link block py-3 flex items-center gap-2 "
          : "navbar-link flex items-center gap-1.5 ") +
        (lite ? "text-[#FFC93C] bg-[#FFC93C]/15" : "")
      }
    >
      <SignalLow size={compact ? 18 : 16} />
      Mode léger{lite ? " ✓" : ""}
    </button>
  );
}
