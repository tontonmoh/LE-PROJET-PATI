import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Hourglass } from "lucide-react";
import { RESISTANCE } from "../data/resistance";

const NAVY = "#1A2A4A";
const GOLD = "#FFC93C";

export default function SerieResistance() {
  const tomes = RESISTANCE.tomes;
  const live = tomes.filter((t) => t.statut === "live").length;
  const total = tomes.length;

  return (
    <div className="bg-[#FFF6E7] min-h-screen">
      {/* En-tête de la série */}
      <section className="text-white" style={{ background: NAVY }}>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <Link to="/catalogue" className="inline-flex items-center gap-1.5 font-display font-semibold mb-8 hover:underline" style={{ color: GOLD }}>
            <ArrowLeft size={18} /> Le catalogue
          </Link>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <img src={RESISTANCE.cover} alt={RESISTANCE.titre} className="w-44 md:w-52 rounded-2xl shadow-kid shrink-0 self-start" />
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3" style={{ background: "rgba(255,201,60,0.18)", color: GOLD }}>
                Série · {live}/{total} épisodes
              </span>
              <h1 className="font-display font-bold text-3xl md:text-4xl mb-3">{RESISTANCE.titre}</h1>
              <p className="text-lg font-semibold text-white/90 mb-3">{RESISTANCE.accroche}</p>
              <p className="text-white/75 leading-relaxed max-w-2xl">{RESISTANCE.intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Les épisodes */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="font-display font-bold text-[#0D2B1A] text-2xl mb-1.5">Les épisodes</h2>
        <p className="text-sm font-semibold text-[#5a6b62] mb-6">Six figures, six manières de dire non — à lire dans l'ordre, de la côte jusqu'au seul NON de 1958.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tomes.map((t) => {
            const meta = [`Épisode ${t.numero}`, t.lieu].filter(Boolean).join(" · ");

            if (t.statut === "live" && t.to) {
              return (
                <Link key={t.numero} to={t.to} className="card-kid group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={t.coverLandscape || t.cover} alt={t.titre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-2 left-2 inline-flex items-center justify-center h-6 px-2 text-[11px] font-bold text-white rounded-full shadow-kid" style={{ background: RESISTANCE.accent }}>Épisode {t.numero}</span>
                    <div className="absolute inset-x-0 bottom-0 p-2 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/50 to-transparent">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-white px-2.5 py-1 rounded-full" style={{ background: RESISTANCE.accent }}><BookOpen size={14} /> Lire</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-[11px] font-bold text-[#0F6E56] uppercase tracking-wide truncate">{meta}</p>
                    <h3 className="font-display font-semibold text-[#0D2B1A] text-sm leading-snug line-clamp-2">{t.titre}</h3>
                  </div>
                </Link>
              );
            }

            return (
              <div key={t.numero} className="card-kid overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden flex items-center justify-center" style={{ background: `linear-gradient(160deg, ${RESISTANCE.accent} 0%, #0a1428 100%)` }}>
                  <span className="absolute top-3 left-0 right-0 text-center text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">Résistance</span>
                  <span className="absolute inset-0 flex items-center justify-center font-display font-black text-white/10 select-none leading-none" style={{ fontSize: "6rem" }}>{t.numero}</span>
                  <div className="relative z-10 text-center px-2">
                    <p className="font-display font-bold text-white text-lg leading-none">Épisode {t.numero}</p>
                    {t.sousTitre && <p className="mt-1 text-xs font-semibold text-[#FFC93C]">{t.sousTitre}</p>}
                  </div>
                  <span className="absolute bottom-3 inline-flex items-center gap-1 text-[11px] font-bold text-[#0D2B1A] bg-[#FFC93C] px-2.5 py-1 rounded-full shadow-kid"><Hourglass size={12} /> Bientôt</span>
                </div>
                <div className="p-3">
                  <p className="text-[11px] font-bold text-[#9aa39d] uppercase tracking-wide truncate">Épisode {t.numero}{t.lieu ? ` · ${t.lieu}` : ""}</p>
                  <h3 className="font-display font-semibold text-[#5a6b62] text-sm leading-snug line-clamp-2">{t.titre || "À paraître"}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
