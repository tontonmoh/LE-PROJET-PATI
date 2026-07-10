// ============================================================
// Teaser « Le Mémorial Horoya » — à insérer dans HoroyaPage.tsx
// sous la grille des 4 chapitres :
//   import HoroyaMemorialTeaser from "../components/HoroyaMemorialTeaser";
//   ...
//   <HoroyaMemorialTeaser />
// ============================================================

import { Link } from "react-router-dom";

const OR = "#c9a227";
const ROUGE = "#c8341e";
const INK = "#241c10";

export default function HoroyaMemorialTeaser() {
  return (
    <section
      aria-label="Le Mémorial Horoya"
      className="max-w-6xl mx-auto px-4 sm:px-6 my-12"
    >
      <Link
        to="/horoya/memorial"
        className="group block rounded-xl overflow-hidden border-2 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          borderColor: OR,
          backgroundColor: INK,
          ["--tw-ring-color" as string]: OR,
        }}
      >
        <div className="px-6 py-8 sm:px-10 sm:flex sm:items-center sm:justify-between gap-8">
          <div>
            <div
              className="text-[11px] uppercase tracking-[0.25em] font-semibold"
              style={{ color: ROUGE }}
            >
              Nouveau · issu des archives de la SENAG 2026
            </div>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-white">
              Le Mémorial Horoya
            </h2>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[#f4ecd8]/80">
              Les 10 Pionniers de l'administration guinéenne, les 60 Compagnons
              de l'Indépendance et les 453 décorés de la Croix du Compagnon —
              nom par nom, décret par décret.
            </p>
          </div>
          <div className="mt-6 sm:mt-0 shrink-0 flex sm:flex-col items-center gap-4 sm:gap-2">
            <div className="flex items-baseline gap-3">
              {[
                ["10", "Pionniers"],
                ["60", "Compagnons"],
                ["453", "Décorés"],
              ].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div
                    className="font-serif text-2xl font-bold"
                    style={{ color: OR }}
                  >
                    {v}
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.15em] text-[#f4ecd8]/60">
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <span
              className="inline-block text-sm font-semibold underline underline-offset-4 group-hover:no-underline"
              style={{ color: OR }}
            >
              Entrer dans le mémorial →
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
