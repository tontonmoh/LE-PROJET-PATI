import { Link } from "react-router-dom";
import { Sparkles, BookOpen, Headphones, Film, ArrowRight } from "lucide-react";
import { SOCIAL } from "../data/site";

// Héros : accroche + illustration de la conteuse en fond + vignette SENAG à droite.
export default function FeaturedHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF6E7]">
      {/* Illustration de fond (desktop), fondue dans le crème */}
      <div className="hidden md:block absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src="/images/pati-conteuse.webp"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ transform: "scale(1.14) translateX(7%)", transformOrigin: "center" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #FFF6E7 0%, #FFF6E7 28%, rgba(255,246,231,0.55) 50%, rgba(255,246,231,0.15) 100%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 md:min-h-[440px]">
        <div className="grid md:grid-cols-[1.1fr_auto] gap-8 md:gap-12 items-center">
          {/* ─── Colonne gauche : accroche ─── */}
          <div className="md:max-w-[560px]">
            <div className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#0F6E56] bg-[#FFC93C]/30 px-4 py-1.5 rounded-full mb-5">
              <Sparkles size={16} /> <span><span className="text-[#FF6B4A]">P</span>our <span className="text-[#FF6B4A]">A</span>pprendre, <span className="text-[#FF6B4A]">T</span>ransmettre et <span className="text-[#FF6B4A]">I</span>nnover</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-[#0D2B1A] leading-tight mb-3">
              <span className="text-[#FF6B4A]">La Guinée est un paradis</span> qui a tout à t'offrir
            </h1>
            <p className="text-sm font-display font-semibold text-[#0F6E56] mb-5">
              Connais-toi, découvre la Guinée
            </p>
            <p className="text-lg text-[#3a4a42] mb-8 leading-relaxed font-semibold">
              Pour les enfants de 4 à 15 ans, en français et dans nos langues guinéennes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/catalogue" className="btn-kid bg-[#FF6B4A] text-white shadow-kid">
                <BookOpen size={18} /> Lire les livres
              </Link>
              <Link to="/ecouter-les-contes" className="btn-kid bg-[#0F6E56] text-white">
                <Headphones size={18} /> Écouter les contes
              </Link>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="btn-kid bg-[#FFC93C] text-[#0D2B1A]">
                <Film size={18} /> Regarder les dessins animés
              </a>
            </div>
          </div>

          {/* ─── Colonne droite : vignette SENAG (desktop) ─── */}
          <div className="hidden md:block">
            <SenagHeroBadge />
          </div>
        </div>
      </div>

      {/* Vignette SENAG (mobile) : pleine largeur sous le texte, avant l'illustration */}
      <div className="md:hidden px-6 pb-6">
        <SenagHeroBadge mobile />
      </div>

      {/* Illustration (mobile) : pleine largeur sous le texte, fondue en haut dans le crème */}
      <img
        src="/images/pati-conteuse.webp"
        alt="Pati, la conteuse, raconte une histoire à des enfants assis sur une natte"
        className="md:hidden w-full h-72 object-cover object-center"
        style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 16%)", maskImage: "linear-gradient(to bottom, transparent 0%, #000 16%)" }}
      />
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Vignette commémorative SENAG — colonne droite du hero
// Charte volontairement distincte (encre / or) du vert/orange Pati :
// signale le caractère "spécial" / hors-collection.
// ───────────────────────────────────────────────────────────────────────────

const INK    = "#241c10";
const GOLD   = "#b8860b";
const GOLD_L = "#d4a437";
const PAPER  = "#f4eeda";
const DISPLAY = "'Fraunces', Georgia, serif";

function SenagHeroBadge({ mobile = false }: { mobile?: boolean }) {
  return (
    <Link
      to="/senag"
      className="relative block rounded-[1.5rem] overflow-hidden group transition-transform hover:scale-[1.02]"
      style={{
        background: INK,
        color: PAPER,
        boxShadow: `6px 6px 0 ${GOLD}`,
        border: `2px solid ${INK}`,
        width: mobile ? "100%" : "320px",
        maxWidth: "100%",
      }}
    >
      {/* Filet doré supérieur */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, ${GOLD} 0%, ${GOLD_L} 50%, ${GOLD} 100%)`,
        }}
      />
      {/* Halo doré décoratif */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 90% 10%, ${GOLD}22 0%, transparent 45%)`,
          pointerEvents: "none",
        }}
      />

      <div className="relative p-6 sm:p-7">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 uppercase tracking-[0.18em]"
          style={{
            background: GOLD,
            color: INK,
            fontFamily: DISPLAY,
            fontSize: "0.65rem",
            fontWeight: 700,
          }}
        >
          <Sparkles size={11} /> Spécial SENAG
        </div>

        {/* Petit tampon en haut à droite */}
        <div className="absolute top-5 right-5 opacity-90">
          <svg viewBox="0 0 60 60" width="56" height="56">
            <circle cx="30" cy="30" r="27" fill="none" stroke={GOLD} strokeWidth="1.2" />
            <circle cx="30" cy="30" r="23" fill="none" stroke={GOLD} strokeWidth="0.4" />
            <polygon
              points="30,15 33.5,25.5 44.5,25.5 35.5,32 39,42.5 30,36 21,42.5 24.5,32 15.5,25.5 26.5,25.5"
              fill={GOLD_L}
            />
            <circle cx="30" cy="6" r="1.5" fill={GOLD} />
            <circle cx="30" cy="54" r="1.5" fill={GOLD} />
          </svg>
        </div>

        <h3
          className="font-bold leading-[1.1] mb-2"
          style={{
            fontFamily: DISPLAY,
            fontSize: "1.5rem",
            color: PAPER,
          }}
        >
          La Carte des <span style={{ color: GOLD_L }}>Compagnons</span>
        </h3>

        <p
          className="font-semibold mb-4 leading-snug"
          style={{ color: PAPER, opacity: 0.78, fontSize: "0.85rem" }}
        >
          60 figures de l'Indépendance · 453 Dépositaires de la Croix.
          Replace chaque Compagnon sur sa circonscription.
        </p>

        <p
          className="text-xs font-semibold mb-4 uppercase tracking-[0.1em]"
          style={{ color: GOLD_L, fontFamily: DISPLAY }}
        >
          25-30 juin 2026 · Conakry
        </p>

        <span
          className="inline-flex items-center gap-1.5 font-bold transition-transform group-hover:translate-x-1"
          style={{
            color: GOLD_L,
            fontFamily: DISPLAY,
            fontSize: "0.9rem",
          }}
        >
          Découvrir la page SENAG <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
