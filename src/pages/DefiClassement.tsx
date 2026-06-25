import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Star, Crown, Medal, ArrowLeft, Loader2, Trophy, Sparkles, Users, Search, X,
  Calendar, TrendingUp, Hash, Clock,
} from "lucide-react";
import {
  getHallOfFame, formatTime, type HallOfFameEntry, type HallOfFamePeriod,
} from "../lib/session";

const GREEN  = "#0D2B1A";
const ACCENT = "#C8841E";
const GOLD   = "#FFC93C";
const CREAM  = "#FFF6E7";
const DISPLAY = "'Fraunces', Georgia, serif";

const PODIUM = [
  { color: GOLD,      ring: "#E8B530", icon: Crown },
  { color: "#C0C7CE", ring: "#9aa3ab", icon: Medal },
  { color: "#CD8B5A", ring: "#b3743f", icon: Medal },
];

const PERIODS: { key: HallOfFamePeriod; label: string; sub: string }[] = [
  { key: "all",    label: "Tout l'historique", sub: "depuis le 1er défi" },
  { key: "30d",    label: "30 derniers jours", sub: "rolling" },
  { key: "season", label: "Ce mois-ci",        sub: "saison en cours" },
];

const TOP_VISIBLE = 10;

export default function DefiClassement() {
  const [period, setPeriod] = useState<HallOfFamePeriod>("all");
  const [entries, setEntries] = useState<HallOfFameEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  // ── Charger le Hall of Fame ─────────────────────────────────────────────
  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    setShowAll(false);
    getHallOfFame(period, "puzzle-guinee", 500)
      .then((rows) => {
        if (!alive) return;
        setEntries(rows);
        setLoading(false);
      })
      .catch((e) => {
        if (!alive) return;
        setError(e?.message || "Impossible de charger le classement.");
        setLoading(false);
      });
    return () => { alive = false; };
  }, [period]);

  // ── Recherche ───────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter((e) => e.pseudo.toLowerCase().includes(q));
  }, [entries, search]);

  const inSearchMode = search.trim().length > 0;
  const top3 = inSearchMode ? [] : entries.slice(0, 3);
  const middle = inSearchMode ? [] : entries.slice(3, TOP_VISIBLE);
  const rest = inSearchMode ? [] : entries.slice(TOP_VISIBLE);

  return (
    <div className="min-h-screen" style={{ background: GREEN }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-6 py-8">

        {/* ── En-tête ── */}
        <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
          <Link to="/defi" className="inline-flex items-center gap-1.5 font-display font-semibold hover:underline"
            style={{ color: GOLD }}>
            <ArrowLeft size={18} /> Le Défi PATI
          </Link>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}>
            <Sparkles size={13} /> Hall of Fame
          </span>
        </div>

        {/* ── Titre ── */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 font-display font-semibold text-sm px-3 py-1 rounded-full mb-3"
            style={{ background: `${GOLD}22`, color: GOLD }}>
            <Star size={14} /> Toutes sessions confondues
          </span>
          <h1 className="text-white font-bold leading-tight"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem,6vw,3.2rem)" }}>
            Hall of Fame
          </h1>
          <p className="text-white/65 font-semibold mt-2 max-w-md mx-auto text-sm sm:text-base">
            Le classement général des joueurs du Défi PATI. Plus tu joues vite et plus tu reviens,
            plus tu montes.
          </p>
        </div>

        {/* ── Sélecteur de période ── */}
        <div className="my-6">
          <div className="grid grid-cols-3 gap-2 rounded-2xl p-1.5"
            style={{ background: "rgba(255,255,255,0.06)" }}>
            {PERIODS.map((p) => {
              const active = p.key === period;
              return (
                <button
                  key={p.key}
                  onClick={() => setPeriod(p.key)}
                  className="rounded-xl px-3 py-2.5 transition-all"
                  style={{
                    background: active ? ACCENT : "transparent",
                    color: active ? "white" : "rgba(255,255,255,0.55)",
                  }}
                >
                  <span className="block font-display font-bold text-xs sm:text-sm leading-tight">
                    {p.label}
                  </span>
                  <span className="block text-[10px] sm:text-xs font-semibold opacity-70 mt-0.5">
                    {p.sub}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Mini-stats globales ── */}
        {!loading && !error && entries.length > 0 && (
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
            <StatChip icon={Users} value={entries.length.toString()} label="joueurs classés" />
            <StatChip icon={Clock} value={formatTime(entries[0].best_time_ms)} label="meilleur temps" />
            <StatChip icon={Hash} value={Math.max(...entries.map((e) => e.points)).toString()} label="points record" />
          </div>
        )}

        {/* ── Recherche ── */}
        {!loading && entries.length > 12 && (
          <div className="flex items-center gap-2 my-4 px-4 py-2.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}>
            <Search size={16} className="text-white/50 shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Chercher un joueur…"
              className="flex-1 bg-transparent text-white placeholder-white/40 font-semibold text-sm outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-white/50 hover:text-white shrink-0"
                aria-label="Effacer"
              >
                <X size={14} />
              </button>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* États : loading / error / empty                                   */}
        {/* ════════════════════════════════════════════════════════════════ */}
        {loading && (
          <div className="text-center py-20">
            <Loader2 size={36} className="mx-auto animate-spin" style={{ color: GOLD }} />
            <p className="text-white/60 font-semibold mt-3 text-sm">Calcul des points…</p>
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-16 rounded-2xl px-6"
            style={{ background: "rgba(255,255,255,0.06)" }}>
            <Trophy size={36} className="mx-auto mb-3 text-white/30" />
            <p className="text-white/70 font-semibold">{error}</p>
          </div>
        )}

        {!loading && !error && entries.length === 0 && (
          <div className="text-center py-20">
            <Trophy size={56} className="mx-auto mb-4" style={{ color: "rgba(255,255,255,0.2)" }} />
            <p className="text-white/55 font-semibold mb-1">
              Aucun joueur classé sur cette période.
            </p>
            <p className="text-white/40 font-semibold text-sm mb-6">
              Sois le premier&nbsp;!
            </p>
            <Link to="/defi" className="btn-kid text-white shadow-kid justify-center inline-flex"
              style={{ background: ACCENT }}>
              <Sparkles size={18} /> Jouer au Défi
            </Link>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* MODE RECHERCHE                                                    */}
        {/* ════════════════════════════════════════════════════════════════ */}
        {!loading && !error && inSearchMode && (
          <div>
            <p className="text-white/60 font-semibold text-sm mb-3">
              {filtered.length} résultat{filtered.length > 1 ? "s" : ""} pour « {search} »
            </p>
            {filtered.length === 0 ? (
              <div className="text-center py-12">
                <Search size={36} className="mx-auto mb-3 text-white/20" />
                <p className="text-white/50 font-semibold">Aucun joueur ne correspond.</p>
              </div>
            ) : (
              <div className="rounded-[1.5rem] overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                {filtered.map((e) => {
                  const realRank = entries.findIndex((x) => x.pseudo === e.pseudo) + 1;
                  return <HOFRow key={e.pseudo} rank={realRank} entry={e} />;
                })}
              </div>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* MODE NORMAL                                                       */}
        {/* ════════════════════════════════════════════════════════════════ */}
        {!loading && !error && !inSearchMode && entries.length > 0 && (
          <>
            {/* ── Podium ── */}
            {top3.length > 0 && (
              <div className="flex items-end justify-center gap-3 sm:gap-5 my-8">
                {[1, 0, 2].map((pos) => {
                  const e = top3[pos];
                  if (!e) return <div key={pos} className="flex-1 max-w-[120px]" />;
                  const p = PODIUM[pos];
                  const Icon = p.icon;
                  const h = pos === 0 ? "h-32" : pos === 1 ? "h-24" : "h-20";
                  return (
                    <div key={pos} className="flex-1 max-w-[150px] flex flex-col items-center">
                      <Icon size={pos === 0 ? 32 : 24} style={{ color: p.color }} className="mb-1" />
                      <p className="font-display font-bold text-white text-center text-sm sm:text-base truncate w-full px-1">
                        {e.pseudo}
                      </p>
                      <p className="font-display font-bold" style={{ color: p.color, fontSize: pos === 0 ? "1.5rem" : "1.2rem" }}>
                        {e.points} pts
                      </p>
                      <p className="text-white/55 font-semibold text-[11px] mb-2">
                        {formatTime(e.best_time_ms)} · {e.sessions_count} session{e.sessions_count > 1 ? "s" : ""}
                      </p>
                      <div className={`w-full ${h} rounded-t-2xl flex items-start justify-center pt-2`}
                        style={{ background: `linear-gradient(180deg, ${p.color} 0%, ${p.ring} 100%)` }}>
                        <span className="font-display font-bold text-[#0D2B1A] text-2xl">{pos + 1}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ── Rangs 4 à TOP_VISIBLE ── */}
            {middle.length > 0 && (
              <div className="my-6">
                <p className="text-white/50 font-display font-semibold text-xs uppercase tracking-widest mb-3 px-2">
                  ★ Top {TOP_VISIBLE}
                </p>
                <div className="rounded-[1.5rem] overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                  {middle.map((e, i) => (
                    <HOFRow key={e.pseudo} rank={i + 4} entry={e} highlight />
                  ))}
                </div>
              </div>
            )}

            {/* ── Reste collapsable ── */}
            {rest.length > 0 && (
              <div className="my-6">
                <button
                  onClick={() => setShowAll((v) => !v)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl transition-colors"
                  style={{ background: "rgba(255,255,255,0.06)", color: "white" }}
                >
                  <span className="flex items-center gap-2 font-display font-semibold text-sm">
                    <TrendingUp size={16} />
                    {showAll ? "Replier" : `Voir les ${rest.length} autre${rest.length > 1 ? "s" : ""} joueur${rest.length > 1 ? "s" : ""}`}
                  </span>
                  <span className="text-white/40 font-semibold text-xs">
                    rangs {TOP_VISIBLE + 1}–{entries.length}
                  </span>
                </button>

                {showAll && (
                  <div className="mt-3 rounded-[1.5rem] overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                    {rest.map((e, i) => (
                      <HOFRow key={e.pseudo} rank={i + TOP_VISIBLE + 1} entry={e} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* ── Explication du score ── */}
        {!loading && !error && entries.length > 0 && (
          <div className="mt-10 rounded-2xl px-5 py-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="font-display font-bold text-white/80 text-sm mb-1">Comment sont calculés les points&nbsp;?</p>
            <p className="text-white/55 font-semibold text-xs leading-relaxed">
              <b style={{ color: GOLD }}>Points = (60 000 ÷ ton meilleur temps en ms) × 10 + nombre de sessions × 20.</b>
              <br />
              Plus tu es rapide et plus tu reviens jouer, plus tu marques. Le pseudo n'est pas réservé&nbsp;:
              homonymes possibles, on agrège par surnom.
            </p>
          </div>
        )}

        {/* ── CTA bas de page ── */}
        <div className="text-center mt-8">
          <Link to="/defi" className="btn-kid text-white shadow-kid justify-center inline-flex"
            style={{ background: ACCENT }}>
            <Sparkles size={18} /> Jouer maintenant
          </Link>
        </div>

        <p className="text-center text-white/30 text-xs font-semibold mt-8">
          projetpati.com · Le Défi PATI · Hall of Fame
        </p>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Petite tuile de stat                                                        */
/* ────────────────────────────────────────────────────────────────────────── */
function StatChip({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Users;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl px-3 py-3 text-center"
      style={{ background: "rgba(255,255,255,0.06)" }}>
      <Icon size={14} className="mx-auto mb-1" style={{ color: GOLD }} />
      <p className="font-display font-bold text-white text-sm sm:text-base leading-tight tabular-nums">
        {value}
      </p>
      <p className="text-white/45 font-semibold text-[10px] sm:text-xs mt-0.5 leading-tight">
        {label}
      </p>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Ligne du Hall of Fame                                                       */
/* ────────────────────────────────────────────────────────────────────────── */
function HOFRow({
  rank,
  entry,
  highlight = false,
}: {
  rank: number;
  entry: HallOfFameEntry;
  highlight?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b last:border-0"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <span
        className="font-display font-bold w-8 text-center shrink-0 text-sm sm:text-base"
        style={{ color: highlight ? GOLD : "rgba(255,255,255,0.4)" }}
      >
        {rank}
      </span>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold truncate text-sm sm:text-base ${highlight ? "text-white" : "text-white/85"}`}>
          {entry.pseudo}
        </p>
        <p className="text-white/40 font-semibold text-[11px] sm:text-xs">
          {formatTime(entry.best_time_ms)} · {entry.sessions_count} session{entry.sessions_count > 1 ? "s" : ""} · {entry.parties_count} partie{entry.parties_count > 1 ? "s" : ""}
        </p>
      </div>
      <span className="font-display font-bold tabular-nums text-sm sm:text-base shrink-0"
        style={{ color: highlight ? GOLD : "rgba(255,255,255,0.7)" }}>
        {entry.points} <span className="text-[11px] font-semibold opacity-60">pts</span>
      </span>
    </div>
  );
}
