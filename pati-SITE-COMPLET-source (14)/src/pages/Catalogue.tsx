import { BookOpen } from "lucide-react";
import { BOOKS } from "../data/books";
import BookGrid from "../components/BookGrid";

const BANDS = [
  { key: "Mômes", label: "Pati Mômes", age: "4–6 ans" },
  { key: "Découverte", label: "Pati Découverte", age: "7–9 ans" },
  { key: "Aventure", label: "Pati Aventure", age: "10–12 ans" },
  { key: "Passage", label: "Pati Passage", age: "13–15 ans" },
];

export default function Catalogue() {
  return (
    <div className="bg-[#FFF6E7] min-h-[60vh]">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-2"><BookOpen className="text-[#0F6E56]" size={28} /><h1 className="text-3xl md:text-4xl text-[#0D2B1A]">Le catalogue</h1></div>
        <p className="text-[#3a4a42] font-semibold mb-8">Toutes les histoires PATI, rangées par âge.</p>
        {BANDS.map((band) => {
          const list = BOOKS.filter((b) => b.band === band.key);
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
      </section>
    </div>
  );
}
