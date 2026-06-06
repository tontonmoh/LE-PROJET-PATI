import { Link } from "react-router-dom";
import { Sparkles, Star, BookOpen, Trophy, PenTool, Landmark, Share2, Cpu, Compass, Gift, Headphones, Film } from "lucide-react";
import { SOCIAL } from "../data/site";
import { BOOKS } from "../data/books";
import BookSlider from "../components/BookSlider";
import FeaturedHero from "../components/FeaturedHero";

export default function Home() {
  return (
    <div className="bg-[#FFF6E7]">
      <FeaturedHero />

      {/* Bannière-vedette : nouvelle série (format large, distinct des cartes-livre) */}
      <section className="max-w-6xl mx-auto px-6 pt-10">
        <Link to="/serie/taadidi" className="block rounded-[1.75rem] overflow-hidden shadow-kid hover:-translate-y-0.5 transition-transform" style={{ background: "#0D2B1A" }}>
          <div className="px-7 py-7 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 font-display font-semibold text-sm px-3 py-1 rounded-full mb-3" style={{ background: "rgba(255,201,60,0.15)", color: "#FFC93C" }}>
                <Sparkles size={15} /> Nouvelle série
              </div>
              <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-1">TAA<span style={{ color: "#FFC93C" }}>DIDI</span> — le cycle du rusé</h3>
              <p className="text-white/80 font-semibold">Une saga en épisodes, lisible en 4 langues. Les premiers épisodes sont déjà là.</p>
            </div>
            <span className="btn-kid text-[#0D2B1A] shadow-kid self-start md:self-auto shrink-0" style={{ background: "#FFC93C" }}>Découvrir la série →</span>
          </div>
        </Link>
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
