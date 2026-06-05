import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getBook } from "../data/books";

export default function BookReader() {
  const { id } = useParams();
  const book = getBook(id || "");

  if (!book || !book.pdf) {
    return (
      <section className="bg-[#FFF6E7] min-h-[60vh] flex items-center">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl text-[#0D2B1A] mb-4">Lecture indisponible</h1>
          <p className="text-[#3a4a42] font-semibold mb-8">Ce livre n'est pas encore lisible en ligne.</p>
          <Link to={book ? `/livre/${book.slug}` : "/"} className="btn-kid bg-[#0F6E56] text-white">
            <ArrowLeft size={18} /> Retour
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#FFF6E7]">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <Link to={`/livre/${book.slug}`} className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold hover:underline">
            <ArrowLeft size={18} /> {book.title}
          </Link>
          <a href={book.pdf} target="_blank" rel="noopener noreferrer" className="btn-kid bg-[#FFC93C] text-[#0D2B1A] text-sm py-2.5 px-5">
            <ExternalLink size={16} /> Plein écran
          </a>
        </div>
        <div className="rounded-[1.5rem] overflow-hidden border-8 border-white shadow-kid bg-white" style={{ height: "80vh" }}>
          <iframe src={book.pdf} title={book.title} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
