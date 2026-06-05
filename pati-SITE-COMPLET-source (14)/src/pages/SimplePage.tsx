import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft } from "lucide-react";
import { PAGES } from "../data/pages";

export default function SimplePage({ slug }: { slug: string }) {
  const c = PAGES[slug];
  if (!c) return null;
  return (
    <div className="bg-[#FFF6E7] min-h-[60vh]">
      <section className="max-w-3xl mx-auto px-6 py-14">
        {c.comingSoon && (
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[#0F6E56] bg-[#FFC93C]/30 px-4 py-1.5 rounded-full mb-5"><Sparkles size={16} /> Bientôt</div>
        )}
        <h1 className="text-3xl md:text-4xl text-[#0D2B1A] mb-4">{c.title}</h1>
        <p className="text-lg text-[#3a4a42] font-semibold leading-relaxed mb-8">{c.intro}</p>
        {c.sections && (
          <div className="space-y-4">
            {c.sections.map((s) => (
              <div key={s.h} className="card-kid p-6">
                <h2 className="font-display font-semibold text-[#0D2B1A] text-lg mb-1">{s.h}</h2>
                <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>
        )}
        <Link to="/" className="btn-kid bg-[#0F6E56] text-white mt-8"><ArrowLeft size={18} /> Accueil</Link>
      </section>
    </div>
  );
}
