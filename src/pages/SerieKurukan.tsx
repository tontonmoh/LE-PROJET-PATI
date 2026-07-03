import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Hourglass } from "lucide-react";
import { KURUKAN } from "../data/series/kurukanFuga";
import { useTrackRead } from "../hooks/useTrackRead";

const NAVY = "#1A2A4A";
const GOLD = "#FFC93C";

export default function SerieKurukan() {
  const episodes = KURUKAN.episodes;
  const live = episodes.filter((e) => e.statut === "live").length;
  const total = episodes.length;

  useTrackRead({ slug: "kurukan-fuga", type: "serie", title: KURUKAN.titre });

  return (
    <div className="bg-[#FFF6E7] min-h-screen">
      {/* En-tête de la série */}
      <section className="text-white" style={{ background: NAVY }}>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <Link to="/catalogue" className="inline-flex items-center gap-1.5 font-display font-semibold mb-8 hover:underline" style={{ color: GOLD }}>
            <ArrowLeft size={18} /> Le catalogue
          </Link>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <img src={KURUKAN.cover} alt={KURUKAN.titre} className="w-44 md:w-52 rounded-2xl shadow-kid shrink-0 self-start" />
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3" style={{ background: "rgba(255,201,60,0.18)", color: GOLD }}>
                Série · {live}/{total} épisodes
              </span>
              <h1 className="font-display font-bold text-3xl md:text-4xl mb-3">{KURUKAN.titre}</h1>
              <p className="text-lg font-semibold text-white/90 mb-3">{KURUKAN.accroche}</p>
              <p className="text-white/75 leading-relaxed max-w-2xl">{KURUKAN.pitch}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Les épisodes */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="font-display font-bold text-[#0D2B1A] text-2xl mb-1.5">Les épisodes</h2>
        <p className="text-sm font-semibold text-[#5a6b62] mb-6">La naissance de la Charte du Mandén, soir après soir — à lire dans l'ordre.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {episodes.map((e) => {
            const titreFr = e.titre.fr;
            const meta = `Épisode ${e.numero}`;

            if (e.statut === "live") {
              const to = `/livre/kurukan-fuga-${e.numero}/lire`;
              return (
                <Link key={e.numero} to={to} className="card-kid group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={e.cover || KURUKAN.cover} alt={titreFr} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-2 left-2 inline-flex items-center justify-center h-6 px-2 text-[11px] font-bold text-white rounded-full shadow-kid" style={{ background: KURUKAN.accent }}>Épisode {e.numero}</span>
                    <div className="absolute inset-x-0 bottom-0 p-2 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/50 to-transparent">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-white px-2.5 py-1 rounded-full" style={{ background: KURUKAN.accent }}><BookOpen size={14} /> Lire</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-[11px] font-bold text-[#0F6E56] uppercase tracking-wide truncate">{meta}</p>
                    <h3 className="font-display font-semibold text-[#0D2B1A] text-sm leading-snug line-clamp-2">{titreFr}</h3>
                  </div>
                </Link>
              );
            }

            return (
              <div key={e.numero} className="card-kid overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden flex items-center justify-center" style={{ background: `linear-gradient(160deg, ${KURUKAN.accent} 0%, #0a1428 100%)` }}>
                  <span className="absolute top-3 left-0 right-0 text-center text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">Kurukan Fuga</span>
                  <span className="absolute inset-0 flex items-center justify-center font-display font-black text-white/10 select-none leading-none" style={{ fontSize: "6rem" }}>{e.numero}</span>
                  <div className="relative z-10 text-center px-2">
                    <p className="font-display font-bold text-white text-lg leading-none">Épisode {e.numero}</p>
                  </div>
                  <span className="absolute bottom-3 inline-flex items-center gap-1 text-[11px] font-bold text-[#0D2B1A] bg-[#FFC93C] px-2.5 py-1 rounded-full shadow-kid"><Hourglass size={12} /> Bientôt</span>
                </div>
                <div className="p-3">
                  <p className="text-[11px] font-bold text-[#9aa39d] uppercase tracking-wide truncate">Épisode {e.numero}</p>
                  <h3 className="font-display font-semibold text-[#5a6b62] text-sm leading-snug line-clamp-2">{titreFr || "À paraître"}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
