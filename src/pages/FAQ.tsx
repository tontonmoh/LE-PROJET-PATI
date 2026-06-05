import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const QA = [
  ["PATI, c'est gratuit ?", "Oui, l'essentiel de PATI est gratuit pour les enfants. Des formules élargies existent pour les familles et les écoles."],
  ["Faut-il créer un compte ?", "Non pour découvrir. Un compte gratuit (Freemium) débloque tous les livres, les quiz et le suivi de progression."],
  ["Sur quels appareils lire PATI ?", "Sur n'importe quel téléphone, tablette ou ordinateur, directement depuis le navigateur. Une appli mobile arrive."],
  ["Dans quelles langues sont les livres ?", "En français, et plusieurs titres existent aussi en anglais, arabe et chinois. D'autres langues nationales sont en chantier."],
  ["Comment mettre PATI dans mon école ?", "Via les Clubs PATI et l'Espace enseignants : écris-nous pour recevoir la Boîte à Outils et la mallette pédagogique."],
  ["Comment contribuer au projet ?", "Tu peux soutenir PATI, proposer un conte, devenir conteur ou rejoindre l'équipe via la page Contribuer."],
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="bg-[#FFF6E7] min-h-[60vh]">
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-2"><HelpCircle className="text-[#0F6E56]" size={28} /><h1 className="text-3xl md:text-4xl text-[#0D2B1A]">Assistance & FAQ</h1></div>
        <p className="text-[#3a4a42] font-semibold mb-8">Les réponses aux questions les plus fréquentes.</p>
        <div className="space-y-3">
          {QA.map(([q, a], i) => (
            <div key={i} className="card-kid overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-3 p-5 text-left font-display font-semibold text-[#0D2B1A]">
                {q}<ChevronDown size={20} className={`shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-sm text-[#5a6b62] font-semibold leading-relaxed">{a}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
