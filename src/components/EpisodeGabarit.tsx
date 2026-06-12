import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Headphones } from "lucide-react";

/**
 * Gabarit d'épisode — fond = planche plein-cadre, carte de l'histoire sobre (noir sur blanc).
 * Un seul gabarit : on n'échange que `episode`. Tient à 28 épisodes (et aux autres séries).
 *
 * Le fond cherche `episode.background` (ex. /images/taadidi/ep2-planche.jpg).
 * S'il est absent, un dégradé de repli lune→soleil s'affiche — le gabarit reste beau sans image.
 *
 * Pour basculer la carte en CRÈME plutôt qu'en blanc clinique : voir les variables --ega-* ci-dessous.
 *
 * RÈGLE : `cote` place la carte du côté OPPOSÉ au sujet de la planche, pour ne jamais le masquer.
 *         Le voile suit : sombre du côté de la carte, dégagé du côté du sujet.
 */

type Episode = {
  serie?: string;
  numero: number;
  phase?: string;        // ex. "Nouvelle lune"
  titre: string;
  accroche: string;
  langues?: string[];
  lireHref: string;
  ecouterHref?: string;
  background?: string;
  cote?: "gauche" | "droite"; // côté de la carte — TOUJOURS opposé au sujet de la planche
};

const DEMO_EP2: Episode = {
  serie: "Taadidi",
  numero: 2,
  phase: "Nouvelle lune",
  titre: "Taadidi gagne son nom",
  accroche:
    "On lui lance un défi qu'aucun enfant ne devrait relever. Il le relève à sa façon — par la ruse — et c'est ainsi qu'il gagne son nom, pour sa mère.",
  langues: ["FR", "EN", "AR", "ZH"],
  lireHref: "/livre/taadidi-2/lire",
  ecouterHref: "/ecouter-les-contes",
  background: "/images/taadidi/ep2-planche.png",
  cote: "gauche", // le rusé est au centre/droite → carte à gauche
};

export default function EpisodeGabarit({ episode = DEMO_EP2 }: { episode?: Episode }) {
  const [noBg, setNoBg] = useState(false);
  const droite = episode.cote === "droite";

  return (
    <section className="ega-root">
      <style>{`
        .ega-root{
          --ega-card-bg:#ffffff;     /* carte blanche — passe à #FFF6E7 pour la version crème */
          --ega-ink:#14241c;         /* "noir" légèrement vert — passe à #0D2B1A si tu veux plus chaud */
          --ega-muted:#5a6b61;
          --ega-accent:#C8841E;
          position:relative;width:100%;min-height:600px;overflow:hidden;border-radius:24px;
          display:flex;align-items:center;
          font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;
        }
        .ega-bg{position:absolute;inset:0;z-index:0}
        .ega-bg img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        .ega-fallback{position:absolute;inset:0;
          background:
            radial-gradient(70% 90% at 78% 30%, rgba(255,201,60,.55), transparent 60%),
            linear-gradient(115deg,#0b1f2e 0%,#143d2e 32%,#6b5a2a 64%,#c8841e 86%,#f2b138 100%);}
        .ega-scrim{position:absolute;inset:0;
          background:
            linear-gradient(90deg, rgba(8,20,14,.88) 0%, rgba(8,20,14,.6) 36%, rgba(8,20,14,.15) 66%, rgba(8,20,14,0) 100%),
            radial-gradient(120% 100% at 50% 120%, rgba(8,20,14,.5), transparent 60%);}
        .ega-scrim.is-right{
          background:
            linear-gradient(270deg, rgba(8,20,14,.88) 0%, rgba(8,20,14,.6) 36%, rgba(8,20,14,.15) 66%, rgba(8,20,14,0) 100%),
            radial-gradient(120% 100% at 50% 120%, rgba(8,20,14,.5), transparent 60%);}

        .ega-wrap{position:relative;z-index:1;width:100%;max-width:1100px;margin:0 auto;
          padding:3rem 1.5rem;display:flex;justify-content:flex-start}
        .ega-wrap.is-right{justify-content:flex-end}
        .ega-card{background:var(--ega-card-bg);color:var(--ega-ink);
          max-width:440px;padding:2rem 2rem 1.9rem;border-radius:18px;
          border:1px solid rgba(0,0,0,.06);
          box-shadow:0 26px 60px rgba(0,0,0,.4);}
        .ega-eyebrow{display:flex;align-items:center;gap:.5rem;
          font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;
          color:var(--ega-accent);font-weight:700;margin:0 0 .7rem}
        .ega-title{font-family:"Fraunces",Georgia,serif;font-weight:700;
          font-size:2.1rem;line-height:1.08;margin:0}
        .ega-rule{width:46px;height:3px;border-radius:3px;background:var(--ega-accent);margin:.9rem 0 1rem}
        .ega-accroche{font-size:1rem;line-height:1.55;color:var(--ega-ink);opacity:.92;margin:0 0 1.3rem}
        .ega-langs{display:flex;gap:.4rem;margin:0 0 1.4rem;flex-wrap:wrap}
        .ega-lang{font-size:.66rem;font-weight:700;letter-spacing:.06em;
          padding:.22rem .5rem;border-radius:999px;
          border:1px solid rgba(0,0,0,.12);color:var(--ega-muted)}
        .ega-cta{display:flex;gap:.6rem;flex-wrap:wrap}
        .ega-btn{display:inline-flex;align-items:center;gap:.5rem;
          font-weight:700;font-size:.95rem;padding:.7rem 1.1rem;border-radius:999px;
          text-decoration:none;transition:transform .12s ease}
        .ega-btn:hover{transform:translateY(-1px)}
        .ega-btn--read{background:var(--ega-accent);color:#fff}
        .ega-btn--listen{background:transparent;color:var(--ega-ink);
          border:1.5px solid rgba(0,0,0,.18)}

        @media (max-width:760px){
          .ega-root{min-height:0;border-radius:18px}
          .ega-scrim{background:linear-gradient(180deg, rgba(8,20,14,.35) 0%, rgba(8,20,14,.78) 60%, rgba(8,20,14,.9) 100%)}
          .ega-bg img{filter:saturate(.92)}
          .ega-wrap{justify-content:center;padding:2.2rem 1.1rem}
          .ega-card{max-width:100%}
          .ega-title{font-size:1.8rem}
        }
      `}</style>

      <div className="ega-bg" aria-hidden="true">
        <div className="ega-fallback" />
        {!noBg && episode.background && (
          <img src={episode.background} alt="" onError={() => setNoBg(true)} />
        )}
        <div className={"ega-scrim" + (droite ? " is-right" : "")} />
      </div>

      <div className={"ega-wrap" + (droite ? " is-right" : "")}>
        <article className="ega-card">
          <p className="ega-eyebrow">
            <Moon phase={episode.phase} />
            Épisode {episode.numero}{episode.serie ? ` · ${episode.serie}` : ""}
          </p>
          <h1 className="ega-title">{episode.titre}</h1>
          <div className="ega-rule" />
          <p className="ega-accroche">{episode.accroche}</p>

          {episode.langues && episode.langues.length > 0 && (
            <div className="ega-langs">
              {episode.langues.map((l) => (
                <span className="ega-lang" key={l}>{l}</span>
              ))}
            </div>
          )}

          <div className="ega-cta">
            <Link to={episode.lireHref} className="ega-btn ega-btn--read">
              <BookOpen size={18} /> Lire l'épisode
            </Link>
            {episode.ecouterHref && (
              <Link to={episode.ecouterHref} className="ega-btn ega-btn--listen">
                <Headphones size={18} /> Écouter
              </Link>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

/* Petit glyphe de phase lunaire, en cohérence avec la frise */
function Moon({ phase }: { phase?: string }) {
  const frac =
    phase === "Nouvelle lune" ? 0.14 :
    phase === "Premier quartier" ? 0.5 :
    phase === "Pleine lune" ? 1 :
    phase === "Dernier quartier" ? 0.55 : 0.14;
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{ flex: "0 0 auto" }}>
      <circle cx="12" cy="12" r="8" fill="#143D2E" stroke="#C8841E" strokeWidth=".8" />
      <circle cx="12" cy="12" r="8" fill="#FFC93C" opacity={frac} />
    </svg>
  );
}
