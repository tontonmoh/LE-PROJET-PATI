import { READERS, readerLabels } from "../data/readers";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Headphones, Sparkles, PlayCircle, ShoppingBag } from "lucide-react";
import { getBook } from "../data/books";
import { SOCIAL } from "../data/site";

export default function LivreDetail() {
  const { id } = useParams();
  const book = getBook(id || "");

  if (!book) {
    return (
      <section className="bg-[#FFF6E7] min-h-[60vh] flex items-center">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl text-[#0D2B1A] mb-4">Livre introuvable</h1>
          <Link to="/" className="btn-kid bg-[#0F6E56] text-white"><ArrowLeft size={18} /> Accueil</Link>
        </div>
      </section>
    );
  }

  const youtubeId = book.teaser?.split("/").pop()?.split("?")[0];

  return (
    <section className="bg-[#FFF6E7]">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold mb-6 hover:underline">
          <ArrowLeft size={18} /> Tous les livres
        </Link>

        <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-10 items-start">
          <div className="rounded-[1.75rem] overflow-hidden border-8 border-white shadow-kid bg-[#0F6E56]/5 mx-auto md:mx-0 max-w-[300px]">
            <img src={book.cover} alt={book.title} className="w-full object-cover" />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl text-[#0D2B1A] mb-3">{book.title}</h1>
            <p className="text-lg text-[#3a4a42] font-semibold mb-6 leading-relaxed">{book.description}</p>

            {book.comingSoon ? (
              <span className="inline-block font-display font-semibold text-[#633806] bg-[#FFC93C]/40 px-4 py-2 rounded-full">
                Bientôt disponible&nbsp;!
              </span>
            ) : (
              <div>
                <div className="flex flex-wrap gap-3">
                  {READERS[book.slug] ? (
                    <Link to={`/livre/${book.slug}/lire`} className="btn-kid bg-[#FF6B4A] text-white shadow-kid">
                      <BookOpen size={18} /> Lire le livre
                    </Link>
                  ) : book.pdf && (
                    <Link to={`/livre/${book.slug}/texte`} className="btn-kid bg-[#FF6B4A] text-white shadow-kid">
                      <BookOpen size={18} /> Lire le livre
                    </Link>
                  )}
                  <Link to={`/livre/${book.slug}/quiz`} className="btn-kid bg-[#FFC93C] text-[#0D2B1A]">
                    <Sparkles size={18} /> Faire le quiz
                  </Link>
                  <a href={`${SOCIAL.whatsapp}?text=${encodeURIComponent(`Bonjour, je souhaite commander le livre physique « ${book.title} » (30 000 FG).`)}`} target="_blank" rel="noopener noreferrer" className="btn-kid bg-[#0F6E56] text-white">
                    <ShoppingBag size={18} /> Acheter ce livre · 30 000 FG
                  </a>
                </div>
                {READERS[book.slug] && (
                  <p className="mt-3 text-sm font-display font-semibold text-[#5a6b62]">
                    Disponible en {readerLabels(book.slug)}
                  </p>
                )}
              </div>
            )}

            {/* Extrait audio */}
            {book.audio && (
              <div className="mt-7 bg-white rounded-3xl p-5 shadow-kid max-w-md">
                <div className="flex items-center gap-2 font-display font-semibold text-[#0F6E56] mb-3">
                  <Headphones size={20} /> Écoute le conte
                </div>
                <audio controls preload="none" className="w-full">
                  <source src={book.audio} type="audio/mpeg" />
                </audio>
                <p className="text-xs text-[#8a9389] font-semibold mt-2">Composition : Mohamed Lamine Soumah · Lecture : à venir</p>
              </div>
            )}

            {/* Versions en langues */}
            {book.languages && book.languages.length > 0 && (
              <div className="mt-7">
                <div className="font-display font-semibold text-[#0D2B1A] mb-2">Autres langues</div>
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

        {/* Teaser vidéo */}
        {youtubeId && (
          <div className="mt-10">
            <div className="flex items-center gap-2 font-display font-semibold text-[#0D2B1A] text-xl mb-3">
              <PlayCircle className="text-[#FF6B4A]" size={24} /> Le teaser
            </div>
            <div className="rounded-[1.5rem] overflow-hidden border-8 border-white shadow-kid" style={{ aspectRatio: "16 / 9" }}>
              <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${youtubeId}`}
                title={`Teaser ${book.title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
