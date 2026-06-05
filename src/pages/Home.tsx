import { Link } from "react-router-dom";
import { Sparkles, Star, BookOpen, Trophy, PenTool, Landmark, Share2, Cpu, Compass, Gift, Headphones, Film } from "lucide-react";
import { SOCIAL } from "../data/site";
import { BOOKS } from "../data/books";
import BookSlider from "../components/BookSlider";

export default function Home() {
  return (
    <div className="bg-[#FFF6E7]">
      {/* Hero — une seule page illustrée, sans cadre séparateur */}
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
              <span className="text-[#FF6B4A]">La Guinée est un paradis</span> qui a tout à t’offrir si tu la connais
            </h1>
            <p className="text-sm font-display font-semibold text-[#0F6E56] mb-5">
              PATI, la contribution de L’Atelier Solidaire pour le Programme Simandou&nbsp;2040
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

      {/* Nos livres — rangées par âge */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
          <div className="flex items-center gap-2">
            <BookOpen className="text-[#0F6E56]" size={26} />
            <h2 className="text-2xl md:text-3xl text-[#0D2B1A]">Nos livres</h2>
          </div>
          <Link to="/catalogue" className="font-display font-semibold text-sm text-[#0F6E56] hover:underline">Voir tout le catalogue →</Link>
        </div>
        <p className="text-[#3a4a42] font-semibold mb-6">Rangés par âge — choisis le tien&nbsp;!</p>
        {[
          { key: "Mômes", label: "Pati Mômes", age: "4–6 ans" },
          { key: "Découverte", label: "Pati Découverte", age: "7–9 ans" },
          { key: "Aventure", label: "Pati Aventure", age: "10–12 ans" },
          { key: "Passage", label: "Pati Passage", age: "13–15 ans" },
        ].map((band) => {
          const list = BOOKS.filter((b) => b.band === band.key);
          if (!list.length) return null;
          return (
            <div key={band.key} className="mb-8">
              <div className="flex items-baseline gap-2 mb-3">
                <h3 className="font-display font-semibold text-[#0D2B1A] text-lg md:text-xl">{band.label}</h3>
                <span className="text-sm font-display font-semibold text-[#5a6b62]">{band.age}</span>
              </div>
              <BookSlider books={list} />
            </div>
          );
        })}
      </section>

      {/* Club PATI */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-kid">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#0F6E56] bg-[#FFC93C]/30 px-4 py-1.5 rounded-full mb-4"><Trophy size={16} /> Clubs PATI — écoles</div>
              <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-3">Un Club PATI dans chaque école</h2>
              <p className="text-[#3a4a42] font-semibold leading-relaxed mb-6">Lecture, création, patrimoine, ateliers d'intelligence artificielle, connaissance de soi et orientation : les Clubs PATI font vivre la collection au cœur des écoles — et le Grand Concours PATI récompense les plus belles créations.</p>
              <Link to="/clubs" className="btn-kid bg-[#0F6E56] text-white"><Trophy size={18} /> Découvrir les Clubs PATI</Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: BookOpen, t: "Lecture & Découverte", c: "#0F6E56" },
                { icon: PenTool, t: "Expression & Création", c: "#FF6B4A" },
                { icon: Landmark, t: "Culture & Patrimoine", c: "#1F7A8C" },
                { icon: Share2, t: "Engagement & Partage", c: "#C8841E" },
                { icon: Cpu, t: "Atelier IA & numérique", c: "#3FB6E8" },
                { icon: Compass, t: "Connaissance de soi & orientation", c: "#9B59B6" },
              ].map((a) => (
                <div key={a.t} className="rounded-2xl bg-[#FFF6E7] p-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2" style={{ background: `${a.c}22` }}><a.icon size={20} style={{ color: a.c }} /></div>
                  <div className="font-display font-semibold text-[#0D2B1A] text-sm leading-snug">{a.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau Génie */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-[#0F6E56] rounded-[2rem] px-8 py-10 md:px-12 md:py-12 text-center shadow-kid">
          <h2 className="text-2xl md:text-3xl text-white mb-3">Et toi, quel est ton génie&nbsp;?</h2>
          <p className="text-white/85 font-semibold mb-6 max-w-xl mx-auto">
            Réponds à quelques questions rigolotes et découvre les métiers de demain qui sont faits pour toi.
          </p>
          <Link to="/decouvrir-son-genie" className="btn-kid bg-[#FFC93C] text-[#0D2B1A]">
            <Sparkles size={18} /> C'est parti&nbsp;!
          </Link>
        </div>
      </section>

      {/* Offre spéciale — Personnalisation */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-[2rem] px-8 py-9 md:px-12 md:py-11 shadow-kid" style={{ background: "linear-gradient(135deg, #FF6B4A 0%, #FFC93C 100%)" }}>
          <div className="md:flex items-center justify-between gap-6">
            <div className="text-white md:max-w-[64%]">
              <div className="inline-flex items-center gap-2 text-sm font-display font-semibold bg-white/20 px-3 py-1 rounded-full mb-3"><Gift size={16} /> Offre spéciale</div>
              <h2 className="text-2xl md:text-3xl mb-2">Un livre ou un dessin animé sur votre famille&nbsp;?</h2>
              <p className="text-white/90 font-semibold leading-relaxed">Pour un baptême, un anniversaire ou un mariage : une création unique aux couleurs de votre histoire. Sur devis.</p>
            </div>
            <Link to="/personnalisation" className="btn-kid bg-white text-[#0D2B1A] shrink-0 mt-4 md:mt-0"><Gift size={18} /> Demander un devis</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
