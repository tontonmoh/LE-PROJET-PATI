import { useState } from "react";

/**
 * Taadidi — La Lignee « Une vie en quatre lunes »
 * Frise autonome : les 4 ages DEBOUT sur une meme ligne de sol, a des hauteurs
 * CROISSANTES (on voit grandir), le long d'un degrade clair qui se rechauffe
 * (frais -> dore). Sogue, le soleil, ferme la marche.
 * Le texte ne REPETE PAS le hero (pas de « 28 episodes » ni « Kike->Sogue ») :
 * il porte le SENS — a chaque age, Taadidi eveille un peu plus la force des femmes.
 *
 * Images dans public/images/taadidi/ (figures debout = frise) :
 *   taadidi-age1-nourrisson.png · taadidi-age2-enfant.png
 *   taadidi-age3-ado.png · taadidi-age4-pere-debout.png · taadidi-sogue.png
 * Si une image manque, la station reste lisible (lune + texte).
 */

type Moon = "new" | "first" | "full" | "last" | "sun";

const STOPS: {
  key: string; img: string; phase: string; age: string; line: string; moon: Moon; h: number; coda?: boolean;
}[] = [
  { key: "nourrisson", img: "/images/taadidi/taadidi-age1-nourrisson.png", phase: "Nouvelle lune", age: "Le nourrisson", line: "Il naît en épargnant sa mère.", moon: "new", h: 118 },
  { key: "enfant", img: "/images/taadidi/taadidi-age2-enfant.png", phase: "Premier quartier", age: "L'enfant", line: "Il grandit parmi ses sœurs, et les défend.", moon: "first", h: 162 },
  { key: "ado", img: "/images/taadidi/taadidi-age3-ado.png", phase: "Pleine lune", age: "L'adolescent", line: "Il déjoue les jaloux, il protège les filles.", moon: "full", h: 198 },
  { key: "pere", img: "/images/taadidi/taadidi-age4-pere-debout.png", phase: "Dernier quartier", age: "Le père", line: "Il devient le bouclier.", moon: "last", h: 220 },
  { key: "sogue", img: "/images/taadidi/taadidi-sogue.png", phase: "Le soleil", age: "Sogué", line: "Sa fille : la source du soleil.", moon: "sun", h: 104, coda: true },
];

const INK = "#0D2B1A", ACCENT = "#C8841E", GOLD = "#FFC93C", NIGHT = "#143D2E";

function Glyph({ moon }: { moon: Moon }) {
  if (moon === "sun") {
    return (
      <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6;
          return (
            <line key={i}
              x1={20 + Math.cos(a) * 13} y1={20 + Math.sin(a) * 13}
              x2={20 + Math.cos(a) * 18} y2={20 + Math.sin(a) * 18}
              stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" />
          );
        })}
        <circle cx="20" cy="20" r="9" fill={GOLD} stroke={ACCENT} strokeWidth="1.5" />
      </svg>
    );
  }
  const frac = moon === "new" ? 0.16 : moon === "first" ? 0.55 : moon === "last" ? 0.6 : 1;
  return (
    <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden="true">
      <circle cx="20" cy="20" r="13" fill={NIGHT} stroke={ACCENT} strokeWidth="1.2" />
      <circle cx="20" cy="20" r="13" fill={GOLD} opacity={frac} />
    </svg>
  );
}

export default function TaadidiLignee() {
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  return (
    <section style={{ padding: "3.5rem 1rem", background: "#FFF6E7" }}>
      <style>{`
        .tdln-wrap{max-width:1060px;margin:0 auto}
        .tdln-eyebrow{font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:#C8841E;font-weight:600}
        .tdln-title{color:#0D2B1A;margin:.4rem 0 .5rem;font-size:1.9rem;line-height:1.1}
        .tdln-sub{color:#3a4a42;max-width:52ch;margin:0 0 1.6rem;font-size:1rem;line-height:1.55}
        .tdln-track{display:flex;gap:0;align-items:flex-end;border-radius:18px;overflow-x:auto;
          background:linear-gradient(90deg,#E7F0EA 0%,#F1EFE0 45%,#FBE6B8 80%,#F6CE78 100%);
          border:1px solid rgba(13,43,26,.10);box-shadow:0 12px 34px rgba(13,43,26,.10);
          scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}
        .tdln-stop{flex:1 0 156px;scroll-snap-align:center;display:flex;flex-direction:column;
          align-items:center;padding:1.2rem .6rem 1.3rem;text-align:center;min-width:156px;position:relative}
        .tdln-stop::after{content:"";position:absolute;left:50%;bottom:calc(1.3rem + 198px);width:100%;
          height:2px;background:rgba(13,43,26,.08)}
        .tdln-stop:last-child::after{width:50%}
        .tdln-stop:first-child::after{left:50%;width:50%}
        .tdln-coda{box-shadow:inset 1px 0 0 rgba(13,43,26,.10)}
        .tdln-figwrap{height:232px;display:flex;align-items:flex-end;justify-content:center;position:relative;z-index:1}
        .tdln-fig{width:auto;max-width:148px;object-fit:contain;filter:drop-shadow(0 6px 9px rgba(13,43,26,.20))}
        .tdln-figfallback{height:120px;width:84px;border-radius:12px;border:1px dashed rgba(13,43,26,.25)}
        .tdln-glyph{margin:.7rem 0 .35rem}
        .tdln-phase{color:#1F6E52;font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;font-weight:600}
        .tdln-age{color:#0D2B1A;font-weight:700;font-size:1rem;margin:.15rem 0 .2rem}
        .tdln-line{color:#4a5a50;font-size:.84rem;line-height:1.4;max-width:19ch}
        .tdln-foot{color:#6b7a70;font-size:.82rem;line-height:1.5;margin:1.2rem 0 0;text-align:center;
          max-width:60ch;margin-left:auto;margin-right:auto;font-style:italic}
        @media(min-width:780px){.tdln-title{font-size:2.4rem}.tdln-track{overflow:visible}}
      `}</style>

      <div className="tdln-wrap">
        <p className="tdln-eyebrow">L'arc en une image</p>
        <h2 className="tdln-title font-display">Une vie en quatre lunes</h2>
        <p className="tdln-sub">
          À chaque âge, Taadidi éveille un peu plus la force des femmes — du nourrisson
          qui épargne sa mère au père qui célèbre sa fille.
        </p>

        <div className="tdln-track">
          {STOPS.map((s) => (
            <div className={`tdln-stop${s.coda ? " tdln-coda" : ""}`} key={s.key}>
              <div className="tdln-figwrap">
                {broken[s.key] ? (
                  <div className="tdln-figfallback" />
                ) : (
                  <img className="tdln-fig" style={{ height: `${s.h}px` }} src={s.img}
                    alt={`Taadidi — ${s.age}`} loading="lazy"
                    onError={() => setBroken((b) => ({ ...b, [s.key]: true }))} />
                )}
              </div>
              <div className="tdln-glyph"><Glyph moon={s.moon} /></div>
              <p className="tdln-phase">{s.phase}</p>
              <p className="tdln-age">{s.age}</p>
              <p className="tdln-line">{s.line}</p>
            </div>
          ))}
        </div>

        <p className="tdln-foot">
          « Kiké », en soussou : la lune, le mois, le miroir, le regard. La série ne
          l'explique pas — elle le fait comprendre.
        </p>
      </div>
    </section>
  );
}
