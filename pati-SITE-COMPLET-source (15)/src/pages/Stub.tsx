import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function Stub({ title }: { title: string }) {
  return (
    <section className="bg-[#FFF6E7] min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#0F6E56] bg-[#FFC93C]/30 px-4 py-1.5 rounded-full mb-6">
          <Sparkles size={16} /> Bientôt prêt
        </div>
        <h1 className="text-3xl md:text-4xl text-[#0D2B1A] mb-4">{title}</h1>
        <p className="text-lg text-[#3a4a42] font-semibold mb-8 leading-relaxed">
          Cette page arrive très vite&nbsp;! En attendant, le reste du site t'attend.
        </p>
        <Link to="/" className="btn-kid bg-[#0F6E56] text-white">
          <ArrowLeft size={18} /> Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
