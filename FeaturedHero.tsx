import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, BookOpen, Headphones, Film, Gamepad2 } from "lucide-react";
import { SOCIAL } from "../data/site";
import "./FeaturedHero.css";

// Héros : accroche + illustration de la conteuse.
// 3 mises en page :
//  - mobile (< 768)        : texte, puis illustration pleine largeur dessous
//  - tablette (768–1023)   : 2 colonnes — texte à gauche, illustration cadrée à droite
//  - desktop (≥ 1024)      : illustration en fond, fondue dans le crème, texte par-dessus
// (Carte Académie Pati retirée le 07/10/2026 — session terminée ; la page /academie-pati reste accessible.)
//
// Intro animée (15/10/2026) : build-in des éléments dans l'ordre de pati-hero-motion.mp4,
// en CSS pur (FeaturedHero.css) — tout reste du vrai DOM, cliquable et responsive.
// Jouée UNE fois par session (sessionStorage), jamais si prefers-reduced-motion.
// Sans la classe `hero-intro`, le rendu est strictement identique à l'ancien hero.

const INTRO_KEY = "pati-hero-intro-played";

function useHeroIntro(): boolean {
  const [intro, setIntro] = useState(false);
  useEffect(() => {
    try {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || sessionStorage.getItem(INTRO_KEY)) return;
      sessionStorage.setItem(INTRO_KEY, "1");
      setIntro(true);
      // Retire la classe une fois l'intro finie : plus aucune règle d'animation en jeu.
      const t = window.setTimeout(() => setIntro(false), 4000);
      return () => window.clearTimeout(t);
    } catch {
      /* sessionStorage indisponible (navigation privée stricte) : pas d'intro */
    }
  }, []);
  return intro;
}

// Chronologie (secondes) — calquée sur la vidéo, resserrée.
const T = {
  illu: 0.15,
  badge: 0.9,
  h1a: 1.15,
  h1b: 1.45,
  accent: 1.95,
  sub: 2.0,
  p: 2.2,
  btn: [2.45, 2.6, 2.75, 2.9],
};
const d = (s: number) => ({ "--d": `${s}s` } as React.CSSProperties);

export default function FeaturedHero() {
  const intro = useHeroIntro();

  return (
    <section className={`relative overflow-hidden bg-[#FFF6E7] ${intro ? "hero-intro" : ""}`}>
      {/* Illustration de fond — desktop uniquement */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src="/images/pati-conteuse.webp"
          alt=""
          className="w-full h-full object-cover object-center hi-illu"
          style={{ transform: "scale(1.14) translateX(7%)", transformOrigin: "center", ...d(T.illu) }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #FFF6E7 0%, #FFF6E7 28%, rgba(255,246,231,0.55) 50%, rgba(255,246,231,0.15) 100%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-14 lg:py-24 lg:min-h-[440px]">
        {/* Tablette : grille 2 colonnes. Desktop : bloc simple (l'image est derrière). */}
        <div className="md:grid md:grid-cols-[1.15fr_1fr] md:gap-8 md:items-center lg:block">
          {/* ─── Accroche ─── */}
          <div className="lg:max-w-[560px]">
            <div
              className="hi inline-flex items-center gap-2 text-sm font-display font-semibold text-[#0F6E56] bg-[#FFC93C]/30 px-4 py-1.5 rounded-full mb-5"
              style={d(T.badge)}
            >
              <Sparkles size={16} /> <span><span className="text-[#FF6B4A]">P</span>our <span className="text-[#FF6B4A]">A</span>pprendre, <span className="text-[#FF6B4A]">T</span>ransmettre et <span className="text-[#FF6B4A]">I</span>nnover</span>
            </div>
            <h1 className="text-4xl md:text-[2.6rem] lg:text-5xl text-[#0D2B1A] leading-tight mb-3">
              <span className="hi inline-block" style={d(T.h1a)}>
                <span className="hi-accent text-[#FF6B4A]" style={d(T.accent)}>La Guinée est un paradis</span>
              </span>{" "}
              <span className="hi inline-block" style={d(T.h1b)}>qui a tout à t'offrir</span>
            </h1>
            <p className="hi text-sm font-display font-semibold text-[#0F6E56] mb-5" style={d(T.sub)}>
              Connais-toi, découvre la Guinée
            </p>
            <p className="hi text-lg text-[#3a4a42] mb-8 leading-relaxed font-semibold" style={d(T.p)}>
              Pour les enfants de 4 à 15 ans, en français et dans nos langues guinéennes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/catalogue" className="hi btn-kid bg-[#FF6B4A] text-white shadow-kid" style={d(T.btn[0])}>
                <BookOpen size={18} /> Lire les livres
              </Link>
              <Link to="/ecouter-les-contes" className="hi btn-kid bg-[#0F6E56] text-white" style={d(T.btn[1])}>
                <Headphones size={18} /> Écouter les contes
              </Link>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="hi btn-kid bg-[#FFC93C] text-[#0D2B1A]" style={d(T.btn[2])}>
                <Film size={18} /> Regarder les dessins animés
              </a>
              <Link to="/session/new" className="hi btn-kid bg-[#EA7A2C] text-white" style={d(T.btn[3])}>
                <Gamepad2 size={18} /> Jouer ensemble
              </Link>
            </div>
          </div>

          {/* ─── Illustration tablette : colonne de droite, cadrée, arrondie ─── */}
          <div className="hidden md:block lg:hidden">
            <img
              src="/images/pati-conteuse.webp"
              alt="Pati, la conteuse, raconte une histoire à des enfants assis sur une natte"
              className="w-full aspect-[4/5] object-cover object-[60%_center] rounded-[2rem] shadow-kid hi-illu"
              style={d(T.illu)}
            />
          </div>
        </div>
      </div>

      {/* Illustration mobile : pleine largeur sous le texte, fondue en haut dans le crème */}
      <img
        src="/images/pati-conteuse.webp"
        alt="Pati, la conteuse, raconte une histoire à des enfants assis sur une natte"
        className="md:hidden w-full h-72 object-cover object-center hi-illu"
        style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 16%)", maskImage: "linear-gradient(to bottom, transparent 0%, #000 16%)", ...d(T.illu) }}
      />
    </section>
  );
}
