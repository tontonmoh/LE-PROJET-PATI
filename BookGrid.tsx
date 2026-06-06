import { Link } from "react-router-dom";
import { getBlurb } from "../data/blurbs";

type Card = { slug: string; title: string; description: string; cover: string; comingSoon?: boolean };

export default function BookGrid({ books }: { books: Card[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {books.map((b) => {
        const line = getBlurb(b.slug)?.tagline.fr || b.description;
        return (
          <Link key={b.slug} to={b.comingSoon ? "#" : `/livre/${b.slug}`}
            className="card-kid group overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={b.cover} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-3">
              <h3 className="font-display font-semibold text-[#0D2B1A] text-sm leading-snug mb-0.5">{b.title}</h3>
              <p className="text-xs text-[#5a6b62] leading-snug font-semibold line-clamp-3">{line}</p>
              {b.comingSoon && <span className="inline-block mt-2 text-[11px] font-bold text-[#633806] bg-[#FFC93C]/40 px-2.5 py-0.5 rounded-full">Bientôt&nbsp;!</span>}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
