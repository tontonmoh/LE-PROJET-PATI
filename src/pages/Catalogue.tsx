import { useState } from "react";
import { BookOpen, Layers, User, ArrowDownAZ, Compass, Sparkles, Shuffle } from "lucide-react";
import { BOOKS } from "../data/books";
import { SERIES } from "../data/series";
import { getCredits } from "../data/credits";
import BookGrid from "../components/BookGrid";
import { useTrackRead } from "../hooks/useTrackRead";

const BANDS = [
  { key: "Mômes", label: "Pati Mômes", age: "4–6 ans" },
  { key: "Découverte", label: "Pati Découverte", age: "7–9 ans" },
  { key: "Aventure", label: "Pati Aventure", age: "10–12 ans" },
  { key: "Passage", label: "Pati Passage", age: "13–15 ans" },
];

type Mode = "themes" | "age" | "auteur" | "az";
const MODES: { key: Mode; label: string; icon: typeof Layers }[] = [
  { key: "themes", label: "Explorer", icon: Compass },
  { key: "age", label: "Par âge", icon: Layers },
  { key: "auteur", label: "Par auteur", icon: User },
  { key: "az", label: "A–Z", icon: ArrowDownAZ },
];

type Card = {
  slug: string; title: string; description: string; cover: string;
  comingSoon?: boolean; kind?: "book" | "serie"; to?: string;
  episodes?: { total: number; live: number };
};

const bookCard = (b: (typeof BOOKS)[number]): Card => ({
  slug: b.slug, title: b.title, description: b.description, cover: b.cover, comingSoon: b.comingSoon, to: b.to,
});
const serieCard = (s: (typeof SERIES)[number]): Card => ({
  slug: s.slug, title: s.title, description: s.description, cover: s.cover,
  kind: "serie", to: s.to, episodes: s.episodes,
});

/* ── Entrées unifiées (livre + série) avec un "blob" de recherche pour les thèmes ── */
type Entry = { card: Card; blob: string; nouveau: boolean; isSerie: boolean };

const ENTRIES: Entry[] = [
  ...BOOKS.map((b) => ({
    card: bookCard(b),
    blob: `${b.title} ${b.description} ${((b as { keywords?: string[] }).keywords || []).join(" ")}`.toLowerCase(),
    nouveau: !!(b as { nouveau?: boolean }).nouveau,
    isSerie: false,
  })),
  ...SERIES.map((s) => ({
    card: serieCard(s),
    blob: `${s.title} ${s.description}`.toLowerCase(),
    nouveau: !!(s as { nouveau?: boolean }).nouveau,
    isSerie: true,
  })),
];

/* ── Rangées thématiques : se peuplent toutes seules depuis les mots-clés.
      Une rangée vide ne s'affiche pas. Un même livre peut vivre dans plusieurs rangées. ── */
const THEMES: { key: string; emoji: string; label: string; note: string; tokens: string[] }[] = [
  {
    key: "heros", emoji: "🦁", label: "Héros & figures vraies", note: "Des vies réelles, racontées pour grandir.",
    tokens: ["naby", "sékou touré", "sekou toure", "takana", "jeanne martin", "fodéba", "fodeba", "hafia",
      "électroman", "electroman", "château d'eau", "chateau", "ibrahima", "biographie", "koumanthio",
      "lydie", "fodé momo", "mory kanté", "petit-sory", "petit sory", "empereur", "soundiata", "rêver", "rever plus grand"],
  },
  {
    key: "resistance", emoji: "✊", label: "La Guinée qui résiste", note: "Le courage de dire non, hier et aujourd'hui.",
    tokens: ["résistance", "resistance", "samory", "alpha yaya", "dinah salifou", "bôkar", "bocar biro",
      "kissi kaba", "zégbéla", "zegbela", "oumar tall", "wali", "1958", "indépendance", "independance", "colonisation", "nalous"],
  },
  {
    key: "contes", emoji: "🌳", label: "Contes & sagesse", note: "Fables, secrets et leçons d'autrefois.",
    tokens: ["conte", "fable", "sagesse", "cola", "fendani", "marmite", "forêt", "foret", "secret", "tradition", "masque"],
  },
  {
    key: "apprendre", emoji: "🔬", label: "Découvrir le vrai monde", note: "Sciences, nature et vie de tous les jours.",
    tokens: ["documentaire", "chimpanzés", "chimpanzes", "primates", "science", "nature", "eau", "boffa", "macenta",
      "marché", "marche", "compter", "aliments", "environnement", "préfecture", "prefecture", "paradis", "simandou", "odd"],
  },
  {
    key: "arts", emoji: "🎵", label: "Arts, musique & culture", note: "Chants, instruments et création.",
    tokens: ["musique", "reggae", "takana", "kora", "danse", "maître d'école", "maitre d'ecole", "fodéba", "chant", "art", "bembeya"],
  },
  {
    key: "ville", emoji: "🏙️", label: "Villes & citoyenneté", note: "Vivre ensemble, ici, dans nos quartiers.",
    tokens: ["conakry", "ville", "propre", "citoyen", "quartier", "marché", "coléah", "coleah", "kindia", "boffa"],
  },
  {
    key: "imagiers", emoji: "🔤", label: "Imagiers & premiers mots", note: "Pour les tout-petits : lettres, couleurs, animaux.",
    tokens: ["imagier", "n'ko", "nko", "adlam", "koré", "kore", "alphabet", "couleurs", "animaux", "corps", "fruits", "premiers mots", "mômes", "momes"],
  },
];

/* ── PRNG déterministe (mulberry32) → mélange stable sur la semaine, varié d'une semaine à l'autre ── */
function seeded(seed: number) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffleSeeded<T>(arr: T[], seed: number): T[] {
  const a = [...arr]; const rnd = seeded(seed);
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const WEEK = Math.floor(Date.now() / 6048e5); // change chaque semaine

const matchTheme = (tokens: string[], cap = 12): Card[] =>
  ENTRIES.filter((e) => tokens.some((t) => e.blob.includes(t))).slice(0, cap).map((e) => e.card);

export default function Catalogue() {
  const [mode, setMode] = useState<Mode>("themes");

  useTrackRead({ slug: "catalogue", type: "encyclopedie", title: "Catalogue Pati" });

  /* Rangées dérivées */
  const nouveautes = ENTRIES.filter((e) => e.nouveau).map((e) => e.card);
  const seriesCards = SERIES.map(serieCard);
  // « À redécouvrir » : on pioche parmi les livres NON nouveaux, mélange hebdo, 8 titres.
  const redecouvrir = shuffleSeeded(ENTRIES.filter((e) => !e.nouveau && !e.isSerie), WEEK).slice(0, 8).map((e) => e.card);

  const byAuthor = () => {
    const groups: Record<string, Card[]> = {};
    for (const b of BOOKS) (groups[getCredits(b.slug).auteur || "—"] ||= []).push(bookCard(b));
    for (const s of SERIES) (groups[s.auteur || "—"] ||= []).push(serieCard(s));
    return Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0], "fr"));
  };

  const azList: Card[] = [...BOOKS.map(bookCard), ...SERIES.map(serieCard)].sort((a, b) => a.title.localeCompare(b.title, "fr"));

  const Row = ({ emoji, label, note, books }: { emoji?: string; label: string; note?: string; books: Card[] }) => {
    if (!books.length) return null;
    return (
      <div className="mb-10">
        <div className="flex items-baseline gap-2 mb-1">
          <h2 className="font-display font-semibold text-[#0D2B1A] text-xl md:text-2xl">{emoji ? `${emoji} ` : ""}{label}</h2>
        </div>
        {note && <p className="text-sm font-semibold text-[#5a6b62] mb-4">{note}</p>}
        <BookGrid books={books} />
      </div>
    );
  };

  return (
    <div className="bg-[#FFF6E7] min-h-[60vh]">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-2"><BookOpen className="text-[#0F6E56]" size={28} /><h1 className="text-3xl md:text-4xl text-[#0D2B1A]">Le catalogue</h1></div>
        <p className="text-[#3a4a42] font-semibold mb-6">Toutes les histoires PATI.</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {MODES.map((m) => {
            const Icon = m.icon;
            return (
              <button key={m.key} onClick={() => setMode(m.key)}
                className={`btn-kid text-sm py-2.5 px-5 ${mode === m.key ? "bg-[#0F6E56] text-white shadow-kid" : "bg-white text-[#0F6E56]"}`}>
                <Icon size={16} /> {m.label}
              </button>
            );
          })}
        </div>

        {/* ── EXPLORER : rangées thématiques + rotation (le mode découverte) ── */}
        {mode === "themes" && (
          <>
            <Row emoji="✨" label="Nouveautés" note="Tout juste arrivé dans la bibliothèque." books={nouveautes} />
            <Row emoji="📚" label="Nos séries" note="Des sagas à suivre, épisode après épisode." books={seriesCards} />
            <Row emoji="🔄" label="À redécouvrir" note="Des trésors du catalogue, remis en lumière chaque semaine." books={redecouvrir} />
            {THEMES.map((t) => (
              <Row key={t.key} emoji={t.emoji} label={t.label} note={t.note} books={matchTheme(t.tokens)} />
            ))}
          </>
        )}

        {mode === "age" && BANDS.map((band) => {
          const list: Card[] = [
            ...BOOKS.filter((b) => b.band === band.key).map(bookCard),
            ...SERIES.filter((s) => s.band === band.key).map(serieCard),
          ];
          if (!list.length) return null;
          return (
            <div key={band.key} className="mb-10">
              <div className="flex items-baseline gap-2 mb-4">
                <h2 className="font-display font-semibold text-[#0D2B1A] text-xl md:text-2xl">{band.label}</h2>
                <span className="text-sm font-display font-semibold text-[#5a6b62]">{band.age}</span>
              </div>
              <BookGrid books={list} />
            </div>
          );
        })}

        {mode === "auteur" && byAuthor().map(([auteur, list]) => (
          <div key={auteur} className="mb-10">
            <h2 className="font-display font-semibold text-[#0D2B1A] text-xl md:text-2xl mb-4">{auteur}</h2>
            <BookGrid books={list} />
          </div>
        ))}

        {mode === "az" && <BookGrid books={azList} />}
      </section>
    </div>
  );
}
