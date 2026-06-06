import { Link } from "react-router-dom";
import { Sparkles, BookOpen, Headphones, Film } from "lucide-react";
import { SOCIAL } from "../data/site";

// Héros initial : accroche de marque + illustration de la conteuse (fixe).
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
          style={{ background: "linear-gradient(to right, #FFF6E7 0%, #FFF6E7 28%, rgba(255,246,231,0.7) 46%, rgba(255,246,231,0) 62%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 md:min-h-[440px] flex items-center">
        <div className="md:max-w-[46%]">
          <div className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#0F6E56] bg-[#FFC93C]/30 px-4 py-1.5 rounded-full mb-5">
            <Sparkles size={16} /> <span><span className="text-[#FF6B4A]">P</span>our <span className="text-[#FF6B4A]">A</span>pprendre, <span className="text-[#FF6B4A]">T</span>ransmettre et <span className="text-[#FF6B4A]">I</span>nnover</span>
          </div>
          <h1 className="text-4xl md:text-5xl text-[#0D2B1A] leading-tight mb-3">
            <span className="text-[#FF6B4A]">La Guinée est un paradis</span> qui a tout à t’offrir
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
            <Link to="/binta-diallo" className="btn-kid bg-[#0F6E56] text-white">
              <Headphones size={18} /> Écouter les contes
            </Link>
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="btn-kid bg-[#FFC93C] text-[#0D2B1A]">
              <Film size={18} /> Regarder les dessins animés
            </a>
          </div>
        </div>
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
