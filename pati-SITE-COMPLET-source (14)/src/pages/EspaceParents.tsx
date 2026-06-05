import { Heart, ShieldCheck, Clock, BookOpen } from "lucide-react";

const POINTS = [
  { icon: BookOpen, t: "Lire ensemble", d: "Quelques minutes par jour suffisent. Lisez à voix haute, écoutez l'audio, laissez l'enfant tourner les pages." },
  { icon: Heart, t: "Des histoires qui ancrent", d: "Des héros et un patrimoine guinéens : votre enfant se reconnaît dans ce qu'il lit." },
  { icon: ShieldCheck, t: "Un espace sûr", d: "Sans publicité, adapté à l'âge, pensé pour le bien-être des enfants." },
  { icon: Clock, t: "À votre rythme", d: "Gratuit pour l'essentiel, accessible sur téléphone, avec un mode hors-ligne à venir." },
];

export default function EspaceParents() {
  return (
    <div className="bg-[#FFF6E7]">
      <section className="bg-[#FF6B4A] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="inline-flex items-center gap-2 font-display font-semibold bg-white/20 px-4 py-1.5 rounded-full mb-5"><Heart size={16} /> Espace parents</div>
          <h1 className="text-3xl md:text-5xl leading-tight mb-4">Accompagner votre enfant, simplement</h1>
          <p className="text-lg text-white/90 font-semibold max-w-2xl leading-relaxed">PATI vous aide à transmettre le goût de lire et la fierté du patrimoine guinéen, à la maison.</p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-5">
          {POINTS.map((p) => (
            <div key={p.t} className="card-kid p-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FFC93C]/30 flex items-center justify-center mb-3"><p.icon className="text-[#0F6E56]" size={24} /></div>
              <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-1">{p.t}</h3>
              <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
