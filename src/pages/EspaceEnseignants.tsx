import { useState } from "react";
import { GraduationCap, BookOpen, Sparkles, FileDown, Video, Package, CheckCircle2, Paperclip } from "lucide-react";
import { PILLARS, FORMATS } from "../data/enseignants";

const FORMAT_ICONS = [FileDown, Video, Package];

export default function EspaceEnseignants() {
  const [sent, setSent] = useState(false);
  const toolCount = PILLARS.reduce((n, p) => n + p.tools.length, 0);

  const scrollToTools = () => {
    document.getElementById("outils")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FFF6E7]">
      {/* Hero */}
      <section className="bg-[#0F6E56] text-white">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[#FFC93C] bg-white/10 px-4 py-1.5 rounded-full mb-5">
            <GraduationCap size={16} /> Espace enseignants
          </div>
          <h1 className="text-3xl md:text-5xl leading-tight mb-4">La Boîte à Outils PATI</h1>
          <p className="text-lg text-white/85 font-semibold max-w-2xl leading-relaxed mb-8">
            Une collection d'outils pédagogiques pensés pour des enseignants ouest-africains qui veulent
            à la fois moderniser leur pédagogie et la réancrer culturellement.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-white/10 rounded-2xl px-5 py-3"><b className="font-display text-xl">{toolCount}</b> <span className="text-white/80 text-sm">outils pédagogiques</span></span>
            <span className="bg-white/10 rounded-2xl px-5 py-3"><b className="font-display text-xl">{PILLARS.length}</b> <span className="text-white/80 text-sm">thématiques</span></span>
            <span className="bg-white/10 rounded-2xl px-5 py-3"><b className="font-display text-xl">{FORMATS.length}</b> <span className="text-white/80 text-sm">formats de livraison</span></span>
          </div>
          <button onClick={scrollToTools} className="btn-kid bg-[#FFC93C] text-[#0D2B1A]">
            <Sparkles size={18} /> Explorer les outils
          </button>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-3">Faits pour des salles de classe réelles</h2>
        <p className="text-[#3a4a42] font-semibold leading-relaxed">
          Chaque outil est conçu pour vivre dans une salle de classe guinéenne réelle, avec ses contraintes
          et ses richesses. Pas de théorie abstraite : des protocoles testés, des formats adaptés, des
          résultats mesurables — et des outils utilisables même sans électricité.
        </p>
      </section>

      {/* Piliers + outils */}
      <section id="outils" className="max-w-6xl mx-auto px-6 pb-8">
        {PILLARS.map((p) => (
          <div key={p.key} className="mb-12">
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="text-[#0F6E56]" size={24} />
              <h2 className="text-2xl text-[#0D2B1A]">{p.title}</h2>
            </div>
            <p className="text-[#5a6b62] font-semibold mb-5">{p.intro}</p>
            <div className="grid md:grid-cols-3 gap-5">
              {p.tools.map((t) => (
                <div key={t.name} className="card-kid p-5 flex flex-col">
                  <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-2">{t.name}</h3>
                  <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed flex-1">{t.desc}</p>
                  <div className="mt-4 flex items-start gap-1.5 text-xs font-bold text-[#0F6E56] bg-[#5DCAA5]/20 rounded-xl px-3 py-2 leading-snug">
                    <Paperclip size={14} className="mt-0.5 shrink-0" /> {t.resource}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Formats */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-6">Formats de livraison</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {FORMATS.map((f, i) => {
            const Icon = FORMAT_ICONS[i] || FileDown;
            return (
              <div key={f.name} className="card-kid p-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFC93C]/30 flex items-center justify-center mb-3">
                  <Icon className="text-[#0F6E56]" size={24} />
                </div>
                <h3 className="font-display font-semibold text-[#0D2B1A] text-lg mb-2">{f.name}</h3>
                <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Demande d'accès */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-[#0F6E56] rounded-[2rem] p-8 md:p-10 text-white shadow-kid">
          {sent ? (
            <div className="text-center py-6">
              <CheckCircle2 className="text-[#FFC93C] mx-auto mb-4" size={48} />
              <h2 className="text-2xl text-white mb-2">Demande envoyée&nbsp;!</h2>
              <p className="text-white/85 font-semibold">L'équipe PATI te contactera sous 72h avec tes accès et ta mallette pédagogique.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl text-white mb-2">Recevoir la Boîte à Outils</h2>
              <p className="text-white/80 font-semibold mb-6">Accès gratuit pour les enseignants et les écoles.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Prénom", "Nom", "Email", "École", "Ville", "Matière enseignée"].map((label) => (
                  <input key={label} placeholder={label}
                    className="bg-white/95 rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
                ))}
              </div>
              <button onClick={() => setSent(true)} className="btn-kid bg-[#FFC93C] text-[#0D2B1A] mt-5 w-full justify-center">
                Demander l'accès
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
