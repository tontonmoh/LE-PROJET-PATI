// NOUVEAU · src/pages/SerieJaamu.tsx
// Fiche-série /serie/jaamu — hub baobab-mère avec 9 hotspots (1 live, 8 soon)
// + intro série + grille classique des tomes en dessous (pattern SeriePointZero).

import { useState } from "react";
import { Link } from "react-router-dom";
import { JAAMU, JAAMU_ACCENT, type JaamuTome } from "../data/series/jaamu";

export default function SerieJaamu() {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = JAAMU.tomes.find((t) => t.slug === hovered);
  const liveCount = JAAMU.getLiveCount();
  const totalCount = JAAMU.getTotalCount();

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* ── Bandeau titre série ─────────────────────────────────────────── */}
      <header className="max-w-4xl mx-auto px-4 pt-8 pb-4 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
          Série · Pati Aventure · Lisible 7–18
        </p>
        <h1
          className="text-4xl md:text-5xl mt-2 tracking-wider font-light"
          style={{ color: JAAMU_ACCENT }}
        >
          {JAAMU.titre}
        </h1>
        <p className="mt-2 text-neutral-500 italic text-sm">{JAAMU.accroche}</p>
        <p className="mt-4 text-neutral-700 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          {JAAMU.intro}
        </p>
        <p className="mt-3 text-xs text-neutral-500">
          {liveCount} tome{liveCount > 1 ? "s" : ""} disponible
          {liveCount > 1 ? "s" : ""} · {totalCount - liveCount} à paraître
        </p>
      </header>

      {/* ── Hub baobab interactif ───────────────────────────────────────── */}
      <section className="max-w-md mx-auto px-4 pb-6">
        <div
          className="relative w-full rounded-xl overflow-hidden shadow-xl shadow-black/20"
          style={{ aspectRatio: "9/16" }}
        >
          {/* Cover série baobab-mère */}
          <img
            src={JAAMU.cover}
            alt="Baobab-mère JAAMU — Les Noms"
            className="w-full h-full object-cover"
            loading="eager"
          />

          {/* Hotspots totems */}
          {JAAMU.tomes.map((tome) => (
            <TotemHotspot
              key={tome.slug}
              tome={tome}
              isHovered={hovered === tome.slug}
              onHover={setHovered}
            />
          ))}
        </div>

        {/* Panneau info dynamique */}
        <TotemInfoPanel tome={active} />
      </section>

      {/* ── Grille classique des tomes (pattern SeriePointZero) ─────────── */}
      <section className="max-w-4xl mx-auto px-4 py-8 border-t border-neutral-200">
        <h2 className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6 text-center">
          Les neuf lignées
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {JAAMU.tomes.map((tome) => (
            <TomeCard key={tome.slug} tome={tome} />
          ))}
        </div>
      </section>

      {/* ── Pied de série ───────────────────────────────────────────────── */}
      <footer className="max-w-2xl mx-auto px-4 py-8 text-center text-xs text-neutral-500">
        <p className="italic">
          « Tu portes plusieurs peuples en toi — c'est cela qui te rend un. »
        </p>
        <p className="mt-2 tracking-widest uppercase">
          Une collection Pati · L'Atelier Solidaire
        </p>
      </footer>
    </div>
  );
}

// ── Hotspot totem (clic sur totem live → route de lecture) ──────────────
function TotemHotspot({
  tome,
  isHovered,
  onHover,
}: {
  tome: JaamuTome;
  isHovered: boolean;
  onHover: (slug: string | null) => void;
}) {
  const isLive = tome.statut === "live";
  const size = isHovered ? 48 : 32;
  const glow = isLive ? "#fbbf24" : "#94a3b8";

  const content = (
    <div
      className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
        isLive && !isHovered ? "animate-pulse" : ""
      }`}
      style={{
        background: `radial-gradient(circle, ${glow}${isLive ? "cc" : "55"} 0%, ${glow}${isLive ? "55" : "22"} 45%, transparent 75%)`,
        boxShadow: isHovered
          ? `0 0 32px ${glow}, 0 0 12px ${glow}`
          : `0 0 14px ${glow}${isLive ? "aa" : "55"}`,
      }}
    >
      <span
        className="text-[10px] font-bold select-none tracking-wider"
        style={{ color: isLive ? "#78350f" : "#e2e8f0" }}
      >
        T{tome.numero}
      </span>
    </div>
  );

  const commonProps = {
    className: "absolute transition-all duration-300",
    style: {
      left: `${tome.baobabX}%`,
      top: `${tome.baobabY}%`,
      width: `${size}px`,
      height: `${size}px`,
      transform: "translate(-50%, -50%)",
      opacity: isLive ? 1 : 0.55,
    },
    onMouseEnter: () => onHover(tome.slug),
    onMouseLeave: () => onHover(null),
    "aria-label": `T${tome.numero} — ${tome.titre}`,
  };

  return isLive && tome.to ? (
    <Link to={tome.to} {...commonProps}>
      {content}
    </Link>
  ) : (
    <div {...commonProps} style={{ ...commonProps.style, cursor: "not-allowed" }}>
      {content}
    </div>
  );
}

// ── Panneau info dynamique sous le baobab ───────────────────────────────
function TotemInfoPanel({ tome }: { tome: JaamuTome | undefined }) {
  return (
    <div className="mt-4 min-h-[140px]">
      {tome ? (
        <div
          className="rounded-lg p-4 border"
          style={{
            borderColor: `${JAAMU_ACCENT}33`,
            backgroundColor: `${JAAMU_ACCENT}08`,
          }}
        >
          <div className="flex justify-between items-baseline mb-2">
            <span
              className="text-xs tracking-[0.3em] font-semibold"
              style={{ color: JAAMU_ACCENT }}
            >
              T{tome.numero}
            </span>
            <span
              className={`text-[10px] uppercase tracking-widest ${
                tome.statut === "live" ? "text-emerald-700" : "text-neutral-400"
              }`}
            >
              {tome.statut === "live" ? "● Disponible" : "○ À paraître"}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl mb-1 font-light tracking-wide">
            {tome.titre}
          </h3>
          {tome.sousTitre && (
            <p className="text-xs text-neutral-600 italic mb-2">
              {tome.sousTitre}
            </p>
          )}
          <p className="text-xs text-neutral-500 italic mb-2">{tome.origine}</p>
          <div className="text-xs text-neutral-700 space-y-0.5">
            <p>
              Totem&nbsp;: <span className="text-neutral-900">{tome.totem}</span>
            </p>
            <p>
              Ancrage&nbsp;: <span className="text-neutral-900">{tome.lieu}</span>
            </p>
          </div>
          {tome.statut === "live" && tome.to && (
            <Link
              to={tome.to}
              className="inline-block mt-3 text-xs px-3 py-1.5 rounded-md text-white transition-colors"
              style={{ backgroundColor: JAAMU_ACCENT }}
            >
              Lire ce tome →
            </Link>
          )}
        </div>
      ) : (
        <p className="text-center text-neutral-400 text-xs italic pt-10">
          Survolez un totem du baobab pour découvrir sa lignée
        </p>
      )}
    </div>
  );
}

// ── Carte tome (grille du bas) ───────────────────────────────────────────
function TomeCard({ tome }: { tome: JaamuTome }) {
  const isLive = tome.statut === "live";
  const inner = (
    <div
      className={`group rounded-lg overflow-hidden border transition-shadow ${
        isLive ? "hover:shadow-lg" : "opacity-60"
      }`}
      style={{ borderColor: `${JAAMU_ACCENT}22` }}
    >
      {tome.cover ? (
        <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
          <img
            src={tome.cover}
            alt={tome.titre}
            className={`w-full h-full object-cover ${
              isLive ? "group-hover:scale-105 transition-transform duration-500" : "grayscale"
            }`}
            loading="lazy"
          />
        </div>
      ) : (
        <div
          className="aspect-[3/4] flex items-center justify-center"
          style={{ backgroundColor: `${JAAMU_ACCENT}0e` }}
        >
          <span
            className="text-6xl font-light"
            style={{ color: `${JAAMU_ACCENT}55` }}
          >
            T{tome.numero}
          </span>
        </div>
      )}
      <div className="p-3">
        <div className="flex justify-between items-baseline mb-1">
          <span className="text-[10px] tracking-widest uppercase text-neutral-500">
            Tome {tome.numero}
          </span>
          <span
            className={`text-[9px] uppercase tracking-wider ${
              isLive ? "text-emerald-700" : "text-neutral-400"
            }`}
          >
            {isLive ? "Disponible" : "À paraître"}
          </span>
        </div>
        <h3 className="text-lg font-light">{tome.titre}</h3>
        {tome.sousTitre && (
          <p className="text-xs text-neutral-600 italic mt-0.5 line-clamp-1">
            {tome.sousTitre}
          </p>
        )}
        <p className="text-xs text-neutral-500 mt-1">
          {tome.patronyme} · {tome.lieu}
        </p>
      </div>
    </div>
  );

  return isLive && tome.to ? <Link to={tome.to}>{inner}</Link> : inner;
}
