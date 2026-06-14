import { useState } from "react";
import { BookOpen, Layers, User, ArrowDownAZ } from "lucide-react";
import { BOOKS } from "../data/books";
import { SERIES } from "../data/series";
import { getCredits } from "../data/credits";
import BookGrid from "../components/BookGrid";

const BANDS = [
  { key: "Mômes", label: "Pati Mômes", age: "4–6 ans" },
  { key: "Découverte", label: "Pati Découverte", age: "7–9 ans" },
  { key: "Aventure", label: "Pati Aventure", age: "10–12 ans" },
  { key: "Passage", label: "Pati Passage", age: "13–15 ans" },
];

type Mode = "age" | "auteur" | "az";
const MODES: { key: Mode; label: string; icon: typeof Layers }[] = [
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

export default function Catalogue() {
  const [mode, setMode] = useState<Mode>("age");

  const byAuthor = () => {
    const groups: Record<string, Card[]> = {};
    for (const b of BOOKS) (groups[getCredits(b.slug).auteur || "—"] ||= []).push(bookCard(b));
    for (const s of SERIES) (groups[s.auteur || "—"] ||= []).push(serieCard(s));
    return Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0], "fr"));
  };

  const azList: Card[] = [...BOOKS.map(bookCard), ...SERIES.map(serieCard)].sort((a, b) => a.title.localeCompare(b.title, "fr"));

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
