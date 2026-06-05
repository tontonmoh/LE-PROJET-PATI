import { Palette, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function EspaceArtistes() {
  return (
    <section className="bg-[#FFF6E7] min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="w-16 h-16 rounded-3xl bg-[#FFC93C]/30 flex items-center justify-center mx-auto mb-5"><Palette className="text-[#0F6E56]" size={32} /></div>
        <div className="inline-flex items-center gap-2 font-display font-semibold text-[#0F6E56] bg-[#5DCAA5]/20 px-4 py-1.5 rounded-full mb-5"><Sparkles size={16} /> Bientôt</div>
        <h1 className="text-3xl md:text-4xl text-[#0D2B1A] mb-4">Espace artistes & animateurs</h1>
        <p className="text-lg text-[#3a4a42] font-semibold mb-8 leading-relaxed">Illustrateurs, voix-off, conteurs, animateurs : un espace pour collaborer avec PATI arrive très vite. En attendant, découvre comment contribuer.</p>
        <Link to="/contribuer" className="btn-kid bg-[#0F6E56] text-white">Contribuer au projet</Link>
      </div>
    </section>
  );
}
