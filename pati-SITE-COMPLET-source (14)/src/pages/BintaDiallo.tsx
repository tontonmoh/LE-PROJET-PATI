import { Link } from "react-router-dom";
import { BookOpen, Headphones, Sparkles, Star } from "lucide-react";
import { getBook } from "../data/books";

export default function BintaDiallo() {
  const book = getBook("binta-diallo")!;
  const youtubeId = book.teaser?.split("/").pop()?.split("?")[0];

  return (
    <section className="bg-[#FFF6E7]">
      {/* Hero teaser */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <div className="inline-flex items-center gap-2 font-display font-semibold text-white bg-[#FF6B4A] px-4 py-1.5 rounded-full mb-5">
          <Star size={16} /> La Dame Oiseau
        </div>
        <h1 className="text-3xl md:text-5xl text-[#0D2B1A] leading-tight mb-3">{book.title}</h1>
        <p className="text-lg text-[#3a4a42] font-semibold mb-8 max-w-2xl leading-relaxed">{book.description}.</p>

        {youtubeId && (
          <div className="rounded-[1.75rem] overflow-hidden border-8 border-white shadow-kid mb-8" style={{ aspectRatio: "16 / 9" }}>
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${youtubeId}`}
              title={`Teaser ${book.title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <Link to={`/livre/${book.slug}/lire`} className="btn-kid bg-[#FF6B4A] text-white shadow-kid">
            <BookOpen size={18} /> Lire le livre
          </Link>
          <Link to={`/livre/${book.slug}/quiz`} className="btn-kid bg-[#FFC93C] text-[#0D2B1A]">
            <Sparkles size={18} /> Faire le quiz
          </Link>
        </div>
        <p className="mt-3 text-sm font-display font-semibold text-[#5a6b62]">
          À lire en Français · English · العربية · 中文
        </p>
      </div>

      {/* Couverture + extrait + langues */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-[260px_1fr] gap-8 items-start">
        <div className="rounded-[1.5rem] overflow-hidden border-8 border-white shadow-kid bg-[#0F6E56]/5 mx-auto md:mx-0 max-w-[260px]">
          <img src={book.cover} alt={book.title} className="w-full object-cover" />
        </div>
        <div>
          {book.audio && (
            <div className="bg-white rounded-3xl p-5 shadow-kid max-w-md mb-7">
              <div className="flex items-center gap-2 font-display font-semibold text-[#0F6E56] mb-3">
                <Headphones size={20} /> Écoute un extrait
              </div>
              <audio controls preload="none" className="w-full">
                <source src={book.audio} type="audio/mpeg" />
              </audio>
            </div>
          )}
          {book.languages && (
            <div>
              <div className="font-display font-semibold text-[#0D2B1A] mb-2">Lis Binta dans d'autres langues</div>
              <div className="flex flex-wrap gap-2">
                {book.languages.map((l) => (
                  <a key={l.label} href={l.pdf} target="_blank" rel="noopener noreferrer"
                     className="font-display font-semibold text-sm bg-[#3FB6E8]/15 text-[#0F6E56] px-4 py-2 rounded-full hover:bg-[#3FB6E8]/25 transition-colors">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
