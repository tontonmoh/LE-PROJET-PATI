import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Hourglass } from "lucide-react";
import { G2040 } from "../data/generation-2040";

const GREEN = "#0D2B1A";
const GOLD = "#FFC93C";

export default function SerieG2040() {
  const tomes = G2040.tomes;
  const live = tomes.filter((t) => t.statut === "live").length;
  const total = tomes.length;

  return (
    <div className="bg-[#FFF6E7] min-h-screen">
      {/* En-tête de la série */}
      <section className="text-white" style={{ background: GREEN }}>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <Link to="/catalogue" className="inline-flex items-center gap-1.5 font-display font-semibold mb-8 hover:underline" style={{ color: GOLD }}>
            <ArrowLeft size={18} /> Le catalogue
          </Link>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <img src={G2040.cover} alt={G2040.titre} className="w-44 md:w-52 rounded-2xl shadow-kid shrink-0 self-start" />
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3" style={{ background: "rgba(255,201,60,0.18)", color: GOLD }}>
                Série · {live}/{total} tomes
              </span>
              <h1 className="font-display font-bold text-3xl md:text-4xl mb-3">{G2040.titre}</h1>
              <p className="text-lg font-semibold text-white/90 mb-3">{G2040.accroche}</p>
              <p className="text-white/75 leading-relaxed max-w-2xl">{G2040.intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Les tomes */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="font-display font-bold text-[#0D2B1A] text-2xl mb-6">Les tomes</h2>
        <div className="space-y-4">
          {tomes.map((t) => {
            const meta = [`Tome ${t.numero}`, t.lieu, t.odd?.length ? `ODD ${t.odd.join(", ")}` : null].filter(Boolean).join(" · ");
            if (t.statut === "live" && t.to) {
              return (
                <Link key={t.numero} to={t.to} className="card-kid flex items-center gap-4 p-4 group">
                  <span className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white" style={{ background: G2040.accent }}>{t.numero}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#0F6E56] uppercase tracking-wide">{meta}</p>
                    <h3 className="font-display font-semibold text-[#0D2B1A] text-lg leading-snug">{t.titre}</h3>
                  </div>
                  <span className="btn-kid text-white shadow-kid shrink-0" style={{ background: G2040.accent }}><BookOpen size={18} /> Lire</span>
                </Link>
              );
            }
            return (
              <div key={t.numero} className="card-kid flex items-center gap-4 p-4 opacity-70">
                <span className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-[#9aa39d] bg-[#ececec]">{t.numero}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-[#9aa39d] uppercase tracking-wide">Tome {t.numero}{t.lieu ? ` · ${t.lieu}` : ""}</p>
                  <h3 className="font-display font-semibold text-[#5a6b62] text-lg leading-snug">{t.titre || "À paraître"}</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8a7a2e] bg-[#FFC93C]/30 px-3 py-1.5 rounded-full shrink-0"><Hourglass size={15} /> Bientôt</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
