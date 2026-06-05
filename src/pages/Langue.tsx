import { Globe, Check } from "lucide-react";
import { useState } from "react";

const LANGS = [
  { code: "fr", label: "Français" }, { code: "en", label: "English" },
  { code: "ar", label: "العربية" }, { code: "zh", label: "中文" },
  { code: "sus", label: "Soussou" }, { code: "man", label: "Malinké" }, { code: "pul", label: "Peul / Pular" },
];

export default function Langue() {
  const [sel, setSel] = useState("fr");
  return (
    <div className="bg-[#FFF6E7] min-h-[60vh]">
      <section className="max-w-2xl mx-auto px-6 py-14 text-center">
        <Globe className="text-[#0F6E56] mx-auto mb-4" size={48} />
        <h1 className="text-3xl md:text-4xl text-[#0D2B1A] mb-3">Choisis ta langue</h1>
        <p className="text-[#3a4a42] font-semibold mb-8">Les livres et l'interface s'adaptent. D'autres langues nationales arrivent.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {LANGS.map((l) => (
            <button key={l.code} onClick={() => setSel(l.code)} className={`card-kid p-4 flex items-center justify-between font-display font-semibold text-[#0D2B1A] ${sel === l.code ? "ring-4 ring-[#FFC93C]" : ""}`}>
              {l.label}{sel === l.code && <Check className="text-[#0F6E56]" size={20} />}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
