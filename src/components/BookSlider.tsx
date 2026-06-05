import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Card = { slug: string; title: string; description: string; cover: string; comingSoon?: boolean };

export default function BookSlider({ books }: { books: Card[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <div className="relative">
      <button onClick={() => scroll(-1)} aria-label="Voir les livres précédents"
        className="hidden md:flex items-center justify-center absolute -left-4 top-[42%] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-kid text-[#0F6E56] hover:bg-[#FFC93C]/40 transition-colors">
        <ChevronLeft size={22} />
      </button>

      <div ref={ref} className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-2 pt-1 px-1">
        {books.map((b) => (
          <Link key={b.slug} to={b.comingSoon ? "#" : `/livre/${b.slug}`}
            className="card-kid group overflow-hidden shrink-0 snap-start w-40 sm:w-44 md:w-52">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={b.cover} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-3">
              <h3 className="font-display font-semibold text-[#0D2B1A] text-sm leading-snug mb-0.5">{b.title}</h3>
              <p className="text-xs text-[#5a6b62] leading-snug font-semibold">{b.description}</p>
              {b.comingSoon && <span className="inline-block mt-2 text-[11px] font-bold text-[#633806] bg-[#FFC93C]/40 px-2.5 py-0.5 rounded-full">Bientôt&nbsp;!</span>}
            </div>
          </Link>
        ))}
      </div>

      <button onClick={() => scroll(1)} aria-label="Voir les livres suivants"
        className="hidden md:flex items-center justify-center absolute -right-4 top-[42%] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-kid text-[#0F6E56] hover:bg-[#FFC93C]/40 transition-colors">
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
