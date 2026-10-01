import { Link } from "react-router-dom";
import { Sparkles, BookOpen, Headphones, Film, Gamepad2, GraduationCap } from "lucide-react";
import { SOCIAL } from "../data/site";

// Héros : accroche + illustration de la conteuse en fond + carte Académie Pati.
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
        {/* ─── Layout desktop : accroche à gauche, carte Académie à droite ─── */}
        <div className="md:flex md:items-center md:justify-between md:gap-8">
          {/* ─── Accroche (inchangée) ─── */}
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
              <Link to="/session/new" className="btn-kid bg-[#EA7A2C] text-white">
                <Gamepad2 size={18} /> Jouer ensemble
              </Link>
            </div>
          </div>

          {/* ─── Carte Académie Pati (desktop) ─── */}
          <Link
            to="/academie-pati"
            className="hidden md:flex flex-col w-[280px] shrink-0 rounded-[1.4rem] overflow-hidden shadow-kid hover:scale-[1.02] transition-transform duration-200"
            style={{ background: "#0e5232" }}
          >
            {/* Photo */}
            <div className="relative h-[180px] overflow-hidden">
              <img
                src="/images/academie-pati-hero.jpg"
                alt="Académie Pati"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 40%, #0e5232 100%)" }}
              />
              {/* Badge date */}
              <div
                className="absolute bottom-2 left-3 text-white text-xs font-display font-bold px-3 py-1 rounded-full"
                style={{ background: "#d64541" }}
              >
                Dès le 20 juillet
              </div>
            </div>

            {/* Contenu */}
            <div className="px-4 pt-3 pb-4 flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <GraduationCap size={16} className="text-[#f5b400]" />
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#f5b400]/80">Nouveau</span>
              </div>
              <h3 className="text-white text-lg font-display font-bold leading-snug">
                Académie Pati
              </h3>
              <p className="text-white/80 text-xs leading-relaxed font-semibold">
                2 semaines pour rendre votre enfant incollable sur la Guinée — 12–16 ans
              </p>
              {/* Prix + CTA */}
              <div className="flex items-center justify-between mt-1">
                <div>
                  <span className="text-[#f5b400] text-lg font-bold font-display">950 000</span>
                  <span className="text-[#f5b400]/70 text-xs ml-1">FG</span>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background: "#f5b400", color: "#0e5232" }}
                >
                  Inscrire →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* ─── Carte Académie Pati (mobile) : bandeau sous le héros ─── */}
      <Link
        to="/academie-pati"
        className="md:hidden flex items-center gap-4 mx-4 mb-4 p-3 rounded-2xl shadow-kid"
        style={{ background: "#0e5232" }}
      >
        <img
          src="/images/academie-pati-hero.jpg"
          alt="Académie Pati"
          className="w-16 h-16 rounded-xl object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <GraduationCap size={13} className="text-[#f5b400]" />
            <span className="text-[9px] font-bold tracking-wider uppercase text-[#f5b400]/80">Nouveau</span>
          </div>
          <div className="text-white font-display font-bold text-sm leading-snug">Académie Pati</div>
          <div className="text-white/70 text-xs font-semibold">2 semaines · 12–16 ans · 950 000 FG</div>
        </div>
        <span
          className="text-xs font-bold px-3 py-1.5 rounded-full shrink-0"
          style={{ background: "#f5b400", color: "#0e5232" }}
        >
          Voir →
        </span>
      </Link>

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
