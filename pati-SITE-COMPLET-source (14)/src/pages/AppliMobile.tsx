import { Link } from "react-router-dom";
import { Smartphone, Share, Plus, MoreVertical, BookOpen, Headphones, Sparkles, ArrowLeft } from "lucide-react";

export default function AppliMobile() {
  return (
    <div className="bg-[#FFF6E7]">
      <section className="max-w-4xl mx-auto px-6 pt-12 text-center">
        <div className="inline-flex items-center gap-2 font-display font-semibold text-[#0F6E56] bg-[#FFC93C]/30 px-4 py-1.5 rounded-full mb-5"><Smartphone size={16} /> L'appli PATI</div>
        <h1 className="text-3xl md:text-4xl text-[#0D2B1A] mb-3">Toutes les histoires dans ta poche</h1>
        <p className="text-[#3a4a42] font-semibold leading-relaxed max-w-2xl mx-auto">Installe PATI sur ton téléphone en quelques secondes — lecture, audio et quiz, à portée de main, même quand tu n'as pas le navigateur ouvert.</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-5">
          {/* iPhone */}
          <div className="card-kid p-6">
            <h2 className="font-display font-semibold text-[#0D2B1A] text-lg mb-4">Sur iPhone &amp; iPad</h2>
            <ol className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#3a4a42] font-semibold"><span className="w-6 h-6 rounded-full bg-[#0F6E56] text-white flex items-center justify-center text-xs shrink-0">1</span>Ouvre <span className="text-[#0D2B1A]">projetpati.com</span> dans Safari.</li>
              <li className="flex items-start gap-3 text-sm text-[#3a4a42] font-semibold"><span className="w-6 h-6 rounded-full bg-[#0F6E56] text-white flex items-center justify-center text-xs shrink-0">2</span>Touche le bouton <span className="inline-flex items-center gap-1 text-[#0D2B1A]"><Share size={15} /> Partager</span>.</li>
              <li className="flex items-start gap-3 text-sm text-[#3a4a42] font-semibold"><span className="w-6 h-6 rounded-full bg-[#0F6E56] text-white flex items-center justify-center text-xs shrink-0">3</span>Choisis <span className="inline-flex items-center gap-1 text-[#0D2B1A]"><Plus size={15} /> Sur l'écran d'accueil</span>.</li>
            </ol>
          </div>
          {/* Android */}
          <div className="card-kid p-6">
            <h2 className="font-display font-semibold text-[#0D2B1A] text-lg mb-4">Sur Android</h2>
            <ol className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#3a4a42] font-semibold"><span className="w-6 h-6 rounded-full bg-[#0F6E56] text-white flex items-center justify-center text-xs shrink-0">1</span>Ouvre <span className="text-[#0D2B1A]">projetpati.com</span> dans Chrome.</li>
              <li className="flex items-start gap-3 text-sm text-[#3a4a42] font-semibold"><span className="w-6 h-6 rounded-full bg-[#0F6E56] text-white flex items-center justify-center text-xs shrink-0">2</span>Ouvre le menu <span className="inline-flex items-center gap-1 text-[#0D2B1A]"><MoreVertical size={15} /></span> en haut à droite.</li>
              <li className="flex items-start gap-3 text-sm text-[#3a4a42] font-semibold"><span className="w-6 h-6 rounded-full bg-[#0F6E56] text-white flex items-center justify-center text-xs shrink-0">3</span>Choisis <span className="inline-flex items-center gap-1 text-[#0D2B1A]"><Plus size={15} /> Ajouter à l'écran d'accueil</span>.</li>
            </ol>
          </div>
        </div>

        <p className="text-center text-[#5a6b62] font-semibold mt-6">L'icône PATI rejoint tes applications : un appui, et te voilà dans les histoires.</p>

        {/* Ce que tu retrouves */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { icon: BookOpen, t: "Lire", d: "Tous les livres, en 4 langues." },
            { icon: Headphones, t: "Écouter", d: "Les contes audio." },
            { icon: Sparkles, t: "Jouer", d: "Quiz et défis." },
          ].map((f) => (
            <div key={f.t} className="bg-white rounded-2xl p-5 shadow-kid text-center">
              <div className="w-11 h-11 rounded-2xl bg-[#0F6E56]/10 flex items-center justify-center mx-auto mb-2"><f.icon className="text-[#0F6E56]" size={22} /></div>
              <div className="font-display font-semibold text-[#0D2B1A]">{f.t}</div>
              <div className="text-sm text-[#5a6b62] font-semibold">{f.d}</div>
            </div>
          ))}
        </div>

        {/* Stores à venir */}
        <div className="text-center mt-10">
          <p className="text-[#5a6b62] font-semibold mb-3">Les applis natives arrivent bientôt :</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="font-display font-semibold text-sm bg-[#0D2B1A]/5 text-[#5a6b62] px-4 py-2 rounded-full">App Store — bientôt</span>
            <span className="font-display font-semibold text-sm bg-[#0D2B1A]/5 text-[#5a6b62] px-4 py-2 rounded-full">Google Play — bientôt</span>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/" className="btn-kid bg-[#0F6E56] text-white"><ArrowLeft size={18} /> Accueil</Link>
        </div>
      </section>
    </div>
  );
}
