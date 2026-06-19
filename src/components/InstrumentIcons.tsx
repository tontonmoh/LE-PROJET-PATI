// Icônes d'instruments guinéens, dessinées sur mesure (lucide-react n'en propose pas).
// Style aligné sur lucide : trait currentColor, fond transparent, viewBox 24×24, strokeWidth 1.8.
// Chaque composant accepte `size` et `color` (et le reste des props SVG).
import type { SVGProps } from "react";

type IconProps = { size?: number; color?: string } & SVGProps<SVGSVGElement>;

const base = (size: number, color?: string): SVGProps<SVGSVGElement> => ({
  width: size, height: size, viewBox: "0 0 24 24",
  fill: "none", stroke: color ?? "currentColor",
  strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round",
});

/* KORA — calebasse ronde + long manche central + chevilles latérales + cordes */
export function KoraIcon({ size = 24, color, ...rest }: IconProps) {
  return (
    <svg {...base(size, color)} {...rest}>
      {/* manche */}
      <line x1="12" y1="2" x2="12" y2="14" />
      {/* chevilles */}
      <line x1="9" y1="4.5" x2="12" y2="4.5" /><line x1="12" y1="4.5" x2="15" y2="4.5" />
      <line x1="9" y1="7.5" x2="12" y2="7.5" /><line x1="12" y1="7.5" x2="15" y2="7.5" />
      <line x1="9" y1="10.5" x2="12" y2="10.5" /><line x1="12" y1="10.5" x2="15" y2="10.5" />
      {/* calebasse (caisse de résonance) */}
      <circle cx="12" cy="17" r="4.6" />
      {/* cordes sur la peau */}
      <line x1="10.7" y1="13.2" x2="10.7" y2="21.4" />
      <line x1="13.3" y1="13.2" x2="13.3" y2="21.4" />
      {/* chevalet */}
      <line x1="10" y1="16.4" x2="14" y2="16.4" />
    </svg>
  );
}

/* BALAFON — cadre incliné + lames + calebasses résonatrices dessous */
export function BalafonIcon({ size = 24, color, ...rest }: IconProps) {
  return (
    <svg {...base(size, color)} {...rest}>
      {/* cadre */}
      <line x1="3" y1="9" x2="20" y2="6" />
      <line x1="4" y1="14.5" x2="21" y2="11.5" />
      <line x1="3" y1="9" x2="4" y2="14.5" />
      <line x1="20" y1="6" x2="21" y2="11.5" />
      {/* lames */}
      <line x1="6" y1="8.4" x2="6.7" y2="13.2" />
      <line x1="9" y1="7.9" x2="9.7" y2="12.7" />
      <line x1="12" y1="7.4" x2="12.7" y2="12.2" />
      <line x1="15" y1="6.9" x2="15.7" y2="11.7" />
      <line x1="18" y1="6.4" x2="18.7" y2="11.2" />
      {/* calebasses résonatrices */}
      <path d="M6 15.2 a1.6 1.6 0 0 0 3 -0.5" />
      <path d="M11 14.4 a1.6 1.6 0 0 0 3 -0.5" />
      <path d="M16 13.6 a1.6 1.6 0 0 0 3 -0.5" />
      {/* mailloche */}
      <line x1="15.5" y1="18" x2="18.5" y2="20" /><circle cx="15" cy="17.6" r="0.9" />
    </svg>
  );
}

/* DJEMBÉ — peau ronde + fût en gobelet (large en haut, évasé en bas) */
export function DjembeIcon({ size = 24, color, ...rest }: IconProps) {
  return (
    <svg {...base(size, color)} {...rest}>
      {/* peau / haut du fût */}
      <ellipse cx="12" cy="5" rx="6" ry="1.8" />
      {/* corps qui se resserre puis s'évase (gobelet) */}
      <path d="M6 5 C6 9 8 11 9 13 C10 15 9.5 18 9 21" />
      <path d="M18 5 C18 9 16 11 15 13 C14 15 14.5 18 15 21" />
      {/* base */}
      <path d="M9 21 a3 1.2 0 0 0 6 0" />
      {/* cordages tendeurs */}
      <line x1="9" y1="6" x2="10" y2="12.5" />
      <line x1="12" y1="6.4" x2="12" y2="13" />
      <line x1="15" y1="6" x2="14" y2="12.5" />
      {/* anneau de tension */}
      <path d="M9.2 12.8 a3 0.8 0 0 0 5.6 0" />
    </svg>
  );
}
