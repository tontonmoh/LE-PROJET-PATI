import { Heart, Mic2, PenTool, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";

const WAYS = [
  { icon: HandHeart, t: "Soutenir PATI", d: "Un don, un parrainage ou un partenariat RSE : chaque appui finance de nouveaux livres et leur diffusion gratuite." },
  { icon: Mic2, t: "Proposer un conte", d: "Tu connais une histoire, un proverbe, un récit de ta région ? Confie-le à la Caravane de Collecte." },
  { icon: PenTool, t: "Créer avec nous", d: "Illustrateur, auteur, voix-off, animateur : rejoins la fabrique des histoires PATI." },
];

export default function Contribuer() {
  return (
    <div className="bg-[#FFF6E7]">
      <section className="bg-[#E8532D] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 font-display font-semibold bg-white/20 px-4 py-1.5 rounded-full mb-5"><Heart size={16} /> Contribuer</div>
          <h1 className="text-3xl md:text-5xl leading-tight mb-4">Fais grandir la Génération 2040</h1>
          <p className="text-lg text-white/90 font-semibold max-w-2xl mx-auto leading-relaxed">PATI est un projet citoyen. Il vit grâce à celles et ceux qui le soutiennent, le nourrissent et le font connaître.</p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-5">
          {WAYS.map((w) => (
            <div key={w.t} className="card-kid p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFC93C]/30 flex items-center justify-center mx-auto mb-3"><w.icon className="text-[#0F6E56]" size={26} /></div>
              <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-1">{w.t}</h3>
              <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">{w.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://wa.me/224611272323" target="_blank" rel="noopener noreferrer" className="btn-kid bg-[#0F6E56] text-white">Nous écrire sur WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
