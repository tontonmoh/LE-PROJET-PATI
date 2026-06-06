import { Link } from "react-router-dom";
import { Layers } from "lucide-react";
import { getBlurb } from "../data/blurbs";

type Card = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  comingSoon?: boolean;
  kind?: "book" | "serie";
  to?: string;
  episodes?: { total: number; live: number };
};

export default function BookGrid({ books }: { books: Card[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {books.map((b) => {
        const isSerie = b.kind === "serie";
        const line = isSerie ? b.description : getBlurb(b.slug)?.tagline.fr || b.description;
        const to = b.comingSoon ? "#" : b.to || `/livre/${b.slug}`;
        return (
          <Link key={b.slug} to={to} className="card-kid group overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={b.cover} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              {isSerie && (
                <span className="absolute top-2 left-2 inline-flex items-center gap-1 text-[11px] font-bold text-white px-2.5 py-1 rounded-full shadow-kid" style={{ background: "#0F6E56" }}>
                  <Layers size={12} /> Série
                </span>
              )}
            </div>
            <div className="p-3">
              <h3 className="font-display font-semibold text-[#0D2B1A] text-sm leading-snug mb-0.5">{b.title}</h3>
              <p className="text-xs text-[#5a6b62] leading-snug font-semibold line-clamp-3">{line}</p>
              {isSerie && b.episodes && (
                <span className="inline-block mt-2 text-[11px] font-bold text-[#0F6E56] bg-[#0F6E56]/10 px-2.5 py-0.5 rounded-full">
                  {b.episodes.live}/{b.episodes.total} épisodes
                </span>
              )}
              {b.comingSoon && <span className="inline-block mt-2 text-[11px] font-bold text-[#633806] bg-[#FFC93C]/40 px-2.5 py-0.5 rounded-full">Bientôt&nbsp;!</span>}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
