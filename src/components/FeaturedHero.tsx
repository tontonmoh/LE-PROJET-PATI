import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, BookOpen, Headphones, Film, Gamepad2 } from "lucide-react";
import { SOCIAL } from "../data/site";
import "./FeaturedHero.css";

// Héros v2 (16/10/2026) : accroche + conteuse DÉTOURÉE (pati-conteuse-hero.webp, fond transparent).
// Composition de la vidéo pati-hero-motion.mp4 :
//  - ≥ md (768)  : 2 colonnes — texte à gauche, conteuse à droite posée sur le crème, halos derrière
//  - < md        : texte, puis conteuse pleine largeur dessous
// (Carte Académie Pati retirée le 07/10/2026 ; la page /academie-pati reste accessible.)
//
// Intro animée : build-in en CSS pur (FeaturedHero.css), ~4,5 s, jouée UNE fois par session
// (sessionStorage), jamais si prefers-reduced-motion. Sans `hero-intro`, rendu statique identique.

const INTRO_KEY = "pati-hero-intro-played";
const INTRO_MS = 5200;

function useHeroIntro(): boolean {
  const [intro, setIntro] = useState(false);
  useEffect(() => {
    try {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || sessionStorage.getItem(INTRO_KEY)) return;
      sessionStorage.setItem(INTRO_KEY, "1");
      setIntro(true);
      const t = window.setTimeout(() => setIntro(false), INTRO_MS);
      return () => window.clearTimeout(t);
    } catch {
      /* sessionStorage indisponible : pas d'intro */
    }
  }, []);
  return intro;
}

// Chronologie (secondes) — ordre de la vidéo, étalée sur ~4,5 s.
const T = {
  halo: 0.1,
  illu: 0.3,
  badge: 1.2,
  h1a: 1.5,
  h1b: 1.85,
  accent: 2.5,
  sub: 2.6,
  p: 2.85,
  btn: [3.2, 3.4, 3.6, 3.8],
};
const d = (s: number) => ({ "--d": `${s}s` } as React.CSSProperties);

const ALT = "Pati, la conteuse, raconte une histoire à trois enfants assis autour d'elle";

export default function FeaturedHero() {
  const intro = useHeroIntro();

  return (
    <section className={`relative overflow-hidden bg-[#FFF6E7] ${intro ? "hero-intro" : ""}`}>
      <div className="relative max-w-6xl mx-auto px-6 pt-10 pb-0 md:py-14 lg:py-20">
        <div className="md:grid md:grid-cols-[1.1fr_1fr] md:gap-8 lg:gap-12 md:items-center">
          {/* ─── Accroche ─── */}
          <div>
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

          {/* ─── Conteuse détourée (toutes tailles) : halos crème derrière, image posée sur le fond ─── */}
          <div className="relative mt-10 md:mt-0 -mx-6 md:mx-0">
            <div className="hi-halo absolute inset-0 pointer-events-none" aria-hidden="true" style={d(T.halo)}>
              <span className="absolute left-[8%] top-[10%] w-[55%] aspect-square rounded-full bg-[#FFE3B8]/70 blur-2xl" />
              <span className="absolute right-[2%] top-[30%] w-[48%] aspect-square rounded-full bg-[#F9CFA0]/60 blur-2xl" />
              <span className="absolute left-[25%] bottom-[0%] w-[60%] aspect-[2/1] rounded-full bg-[#F4B07A]/35 blur-3xl" />
            </div>
            <img
              src="/images/pati-conteuse-hero.webp"
              alt={ALT}
              width={1024}
              height={795}
              className="hi-illu relative w-full max-w-[640px] mx-auto md:max-w-none h-auto select-none"
              style={d(T.illu)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
