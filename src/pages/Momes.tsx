import { Link } from "react-router-dom";
import { Images, Sparkles } from "lucide-react";

// Pati Mômes (4–6 ans) — l'espace des tout-petits.
// Chaque thème = sa carte, qui lance directement sa manche du jeu (/imagier?theme=xxx).

const ACCENT = "#C8841E";
const GOLD   = "#FFC93C";
const GREEN  = "#0D2B1A";

const THEMES = [
  { id: "alphabet",        emoji: "🔤",  titre: "L'alphabet",          couleur: "#B23A1E", dispo: true },
  { id: "couleurs",        emoji: "🎨",  titre: "Les couleurs",        couleur: "#7B5EA7", dispo: true },
  { id: "fruits-legumes",  emoji: "🧺",  titre: "Les fruits & légumes", couleur: "#C8841E", dispo: true },
  { id: "animaux",         emoji: "🐾",  titre: "Les animaux",          couleur: "#1F6E52", dispo: true },
  { id: "maison",          emoji: "🏠",  titre: "Dans la maison",       couleur: "#2C7DA0", dispo: true },
  { id: "infrastructures", emoji: "🏗️", titre: "Les infrastructures",  couleur: "#3F6B7D", dispo: true },
  { id: "corps",           emoji: "🧍",  titre: "Le corps humain",      couleur: "#A23B72", dispo: true },
  // À venir (concept éditorial 12 titres/an)
  { id: "",                emoji: "💧",  titre: "L'eau",                couleur: "#2E8BC0", dispo: false },
  { id: "",                emoji: "🥁",  titre: "Les instruments",      couleur: "#B23A1E", dispo: false },
  { id: "",                emoji: "✨",  titre: "Le ciel",              couleur: "#5A4FA0", dispo: false },
];

export default function Momes() {
  return (
    <div className="bg-[#FFF6E7] min-h-[60vh]">
      {/* ===== Héros ===== */}
      <section className="relative overflow-hidden" style={{ background: GREEN }}>
        <div className="max-w-5xl mx-auto px-6 py-12 sm:py-16 text-center relative z-10">
          <span className="inline-flex items-center gap-2 font-display font-bold text-sm px-4 py-1.5 rounded-full mb-4"
            style={{ background: `${GOLD}22`, color: GOLD }}>
            <Sparkles size={15} /> Pati Mômes · 4–6 ans
          </span>
          <h1 className="font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(2rem,7vw,3.4rem)" }}>
            Les tout-petits nomment le monde
          </h1>
          <p className="text-white/70 font-semibold max-w-xl mx-auto" style={{ fontSize: "clamp(15px,4vw,18px)" }}>
            Un imagier-jeu par thème : touche un mot, écoute-le, trouve l'image — en français et dans la langue de la maison.
          </p>
        </div>
        <div className="absolute inset-0 opacity-[0.07] text-white text-6xl flex flex-wrap gap-6 p-6 select-none pointer-events-none">
          🍌🐐🔴🌙💧🥁🎨🍲💃✨🏘️🌧️🍌🐐🔴🌙💧🥁🎨🍲
        </div>
      </section>

      {/* ===== Les thèmes ===== */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-baseline gap-2 mb-6">
          <Images size={22} className="text-[#C8841E]" />
          <h2 className="font-display font-bold text-[#0D2B1A] text-xl md:text-2xl">Choisis ton imagier</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {THEMES.map((t, i) => {
            if (t.dispo) {
              return (
                <Link key={i} to={`/imagier?theme=${t.id}`}
                  className="group rounded-[1.5rem] p-6 flex flex-col items-center text-center gap-3 shadow-kid transition-transform hover:-translate-y-1"
                  style={{ background: t.couleur }}>
                  <span className="text-5xl">{t.emoji}</span>
                  <span className="font-display font-bold text-white text-base leading-tight">{t.titre}</span>
                  <span className="font-display font-bold text-xs px-4 py-1.5 rounded-full"
                    style={{ background: "white", color: t.couleur }}>
                    Jouer →
                  </span>
                </Link>
              );
            }
            return (
              <div key={i}
                className="rounded-[1.5rem] p-6 flex flex-col items-center text-center gap-3 bg-white/40">
                <span className="text-5xl grayscale opacity-50">{t.emoji}</span>
                <span className="font-display font-bold text-[#8a9389] text-base leading-tight">{t.titre}</span>
                <span className="font-display font-bold text-xs px-4 py-1.5 rounded-full"
                  style={{ background: "#0d2b1a0d", color: "#8a9389" }}>
                  Bientôt
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-[#8a9389] font-semibold mt-8">
          Chaque mot se dit aussi à voix haute — pour apprendre à nommer avant de savoir lire.
        </p>
      </section>
    </div>
  );
}
