import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * Vignette « SPÉCIAL SENAG » — à placer sur la page d'accueil.
 *
 * Usage :
 *   import SenagHighlight from "../components/SenagHighlight";
 *   ...
 *   <SenagHighlight />
 *
 * Charte commémorative (or / encre / papier) — volontairement distincte
 * du vert/orange Pati pour signaler le caractère "spécial" / hors-collection.
 */

const INK    = "#241c10";
const GOLD   = "#b8860b";
const GOLD_L = "#d4a437";
const PAPER  = "#f4eeda";
const DISPLAY = "'Fraunces', Georgia, serif";

export default function SenagHighlight() {
  return (
    <section className="w-full px-4 sm:px-6 py-10 sm:py-14">
      <Link
        to="/senag"
        className="relative block max-w-5xl mx-auto rounded-[2rem] overflow-hidden group transition-transform hover:scale-[1.005]"
        style={{
          background: INK,
          color: PAPER,
          boxShadow: `8px 8px 0 ${GOLD}`,
          border: `2px solid ${INK}`,
        }}
      >
        {/* Filets d'or façon papier d'archive */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(135deg, transparent 0%, transparent 60%, ${GOLD}0a 100%),
              radial-gradient(circle at 95% 5%, ${GOLD}1a 0%, transparent 40%)
            `,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, height: 3,
            background: `linear-gradient(90deg, ${GOLD} 0%, ${GOLD_L} 50%, ${GOLD} 100%)`,
          }}
        />

        <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 p-7 sm:p-10 md:p-12 items-center">
          {/* ─── Texte ─── */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 uppercase tracking-[0.22em]"
              style={{
                background: GOLD,
                color: INK,
                fontFamily: DISPLAY,
                fontSize: "0.72rem",
                fontWeight: 700,
              }}
            >
              <Sparkles size={13} /> Spécial SENAG · juin 2026
            </div>

            <h2
              className="font-bold leading-[1.05] mb-4"
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1.8rem, 5.5vw, 3rem)",
                color: PAPER,
              }}
            >
              La Carte des <span style={{ color: GOLD_L }}>Compagnons</span>
            </h2>

            <p
              className="font-semibold mb-3 leading-relaxed"
              style={{ color: PAPER, opacity: 0.78, fontSize: "1.02rem" }}
            >
              60 Compagnons de l'Indépendance · 453 Dépositaires de la Croix.
              Place chaque figure sur sa circonscription d'origine et redécouvre
              les visages qui ont porté le NON du 28 septembre 1958.
            </p>

            <p
              className="text-sm font-semibold mb-6 uppercase tracking-[0.1em]"
              style={{ color: GOLD_L, fontFamily: DISPLAY }}
            >
              Semaine Nationale des Archives de Guinée — 25-30 juin 2026
            </p>

            {/* CTA */}
            <span
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-transform group-hover:translate-x-1"
              style={{
                background: GOLD,
                color: INK,
                fontFamily: DISPLAY,
                fontSize: "0.95rem",
              }}
            >
              Découvrir la page SENAG <ArrowRight size={18} />
            </span>
          </div>

          {/* ─── Visuel : tampon commémoratif stylisé ─── */}
          <div className="hidden md:flex items-center justify-center">
            <svg
              viewBox="0 0 220 220"
              width="220"
              height="220"
              style={{ filter: "drop-shadow(0 4px 12px rgba(184,134,11,0.3))" }}
            >
              {/* Cercle extérieur */}
              <circle cx="110" cy="110" r="100" fill="none" stroke={GOLD} strokeWidth="2" />
              <circle cx="110" cy="110" r="92" fill="none" stroke={GOLD} strokeWidth="0.5" />
              {/* Étoile centrale (motif drapeau guinéen simplifié) */}
              <g transform="translate(110,110)">
                <polygon
                  points="0,-38 11,-12 38,-12 16,5 25,32 0,16 -25,32 -16,5 -38,-12 -11,-12"
                  fill={GOLD_L}
                  opacity="0.95"
                />
              </g>
              {/* Texte circulaire — haut */}
              <defs>
                <path
                  id="topArc"
                  d="M 30 110 A 80 80 0 0 1 190 110"
                  fill="none"
                />
                <path
                  id="bottomArc"
                  d="M 30 110 A 80 80 0 0 0 190 110"
                  fill="none"
                />
              </defs>
              <text
                fill={GOLD_L}
                fontFamily="'Fraunces', Georgia, serif"
                fontSize="13"
                fontWeight="700"
                letterSpacing="3"
              >
                <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                  COMPAGNONS · 1957
                </textPath>
              </text>
              <text
                fill={GOLD}
                fontFamily="'Fraunces', Georgia, serif"
                fontSize="11"
                fontWeight="600"
                letterSpacing="2"
              >
                <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
                  · SENAG 2026 ·
                </textPath>
              </text>
              {/* Petits points décoratifs */}
              <circle cx="110" cy="30" r="2.5" fill={GOLD} />
              <circle cx="110" cy="190" r="2.5" fill={GOLD} />
              <circle cx="30" cy="110" r="2.5" fill={GOLD} />
              <circle cx="190" cy="110" r="2.5" fill={GOLD} />
            </svg>
          </div>
        </div>
      </Link>
    </section>
  );
}
