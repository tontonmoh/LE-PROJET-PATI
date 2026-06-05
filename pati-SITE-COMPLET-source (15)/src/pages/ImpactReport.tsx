import { BarChart3, TrendingUp, BookOpen, Brain } from "lucide-react";

const CARDS = [
  { icon: BookOpen, t: "Tentatives de quiz", d: "Nombre de quiz tentés par les enfants sur la plateforme." },
  { icon: BarChart3, t: "Score moyen", d: "Moyenne des scores obtenus, par livre et au global." },
  { icon: Brain, t: "Découverte vs connaissance", d: "Comparaison des réponses avant et après lecture." },
  { icon: TrendingUp, t: "Amélioration moyenne", d: "L'écart de score avant/après lecture mesure l'impact réel de la lecture sur la culture générale." },
];

export default function ImpactReport() {
  return (
    <div className="bg-[#FFF6E7] min-h-[60vh]">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl text-[#0D2B1A] mb-2">Rapport d'impact PATI</h1>
        <p className="text-[#3a4a42] font-semibold mb-8">Données anonymes de mesure d'impact des quiz. Ce tableau de bord s'alimente des résultats réels au fil de l'usage.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {CARDS.map((c) => (
            <div key={c.t} className="card-kid p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#5DCAA5]/25 flex items-center justify-center mb-3"><c.icon className="text-[#0F6E56]" size={24} /></div>
              <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-1">{c.t}</h3>
              <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
