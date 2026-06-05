import { useState } from "react";
import { Headphones, Mic2, MapPin, Languages, BookText, Sparkles, CheckCircle2, Quote } from "lucide-react";

const CONTEURS = [
  { nom: "Mamadou Kaba", surnom: "Le Griot du Fouta", lieu: "Labé", langues: "Pular, Français", types: "Contes initiatiques, Fables", mot: "Je raconte pour que les enfants sachent d'où ils viennent." },
  { nom: "Fatou Diallo", surnom: "La Voix de Niani", lieu: "Kouroussa", langues: "Malinké, Français", types: "Récits historiques, Contes de femmes", mot: "Chaque conte est un pont entre les générations." },
  { nom: "Ibrahim Soumah", surnom: "Le Conteur de Forêt", lieu: "Nzérékoré", langues: "Guerzé, Kissi, Français", types: "Contes étiologiques, Récits de fondation", mot: "La forêt a des histoires que seuls les anciens connaissent." },
  { nom: "Binta Camara", surnom: "", lieu: "Dalaba", langues: "Peul, Français", types: "Contes de sagesse, Fables", mot: "Ma grand-mère racontait ces histoires le soir. Je veux que mes petits-enfants les entendent aussi." },
  { nom: "Elhadj Touré", surnom: "", lieu: "Boké", langues: "Soussou, Français", types: "Contes facétieux, Contes de femmes", mot: "Rire, c'est aussi transmettre." },
];
const REGIONS = ["Basse-Guinée", "Moyenne-Guinée", "Haute-Guinée", "Guinée Forestière"];
const LANGUES = ["Soussou", "Malinké", "Peul", "Kissi", "Toma", "Guerzé", "Konianké", "Français"];
const TYPES = ["Contes initiatiques", "Fables animalières", "Récits historiques", "Contes étiologiques", "Contes facétieux", "Contes de sagesse", "Récits de fondation", "Contes de femmes"];

export default function EspaceConteurs() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-[#FFF6E7]">
      {/* Hero */}
      <section className="bg-[#0D2B1A] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[#FFC93C] bg-white/10 px-4 py-1.5 rounded-full mb-5">
            <Mic2 size={16} /> Espace conteurs
          </div>
          <h1 className="text-3xl md:text-5xl leading-tight mb-4">
            Sous les étoiles d'Afrique, <span className="text-[#FFC93C]">les voix qui transmettent.</span>
          </h1>
          <p className="text-lg text-white/85 font-semibold max-w-2xl leading-relaxed mb-8">
            Avant le livre, avant le dessin animé, avant la BD, il y a quelqu'un qui s'assoit et qui raconte.
            L'Espace Conteurs est l'archive vivante et la place de rencontre de ces voix.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#conteurs" className="btn-kid bg-[#FFC93C] text-[#0D2B1A]"><Headphones size={18} /> Écouter les contes</a>
            <a href="#engager" className="btn-kid bg-[#FF6B4A] text-white"><Mic2 size={18} /> Engager un conteur</a>
          </div>
        </div>
      </section>

      {/* Filtres / richesse */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="card-kid p-6">
            <div className="flex items-center gap-2 font-display font-semibold text-[#0D2B1A] mb-3"><MapPin className="text-[#FF6B4A]" size={20} /> Régions</div>
            <div className="flex flex-wrap gap-2">{REGIONS.map((r) => <span key={r} className="text-xs font-bold bg-[#5DCAA5]/20 text-[#0F6E56] px-3 py-1.5 rounded-full">{r}</span>)}</div>
          </div>
          <div className="card-kid p-6">
            <div className="flex items-center gap-2 font-display font-semibold text-[#0D2B1A] mb-3"><Languages className="text-[#3FB6E8]" size={20} /> Langues</div>
            <div className="flex flex-wrap gap-2">{LANGUES.map((r) => <span key={r} className="text-xs font-bold bg-[#3FB6E8]/15 text-[#0F6E56] px-3 py-1.5 rounded-full">{r}</span>)}</div>
          </div>
          <div className="card-kid p-6">
            <div className="flex items-center gap-2 font-display font-semibold text-[#0D2B1A] mb-3"><BookText className="text-[#FFC93C]" size={20} /> Types de contes</div>
            <div className="flex flex-wrap gap-2">{TYPES.map((r) => <span key={r} className="text-xs font-bold bg-[#FFC93C]/30 text-[#633806] px-3 py-1.5 rounded-full">{r}</span>)}</div>
          </div>
        </div>
      </section>

      {/* Conteurs */}
      <section id="conteurs" className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-6">Les conteurs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONTEURS.map((c) => (
            <div key={c.nom} className="card-kid p-6">
              <h3 className="font-display font-semibold text-[#0D2B1A] text-lg">{c.nom}</h3>
              {c.surnom && <p className="text-[#FF6B4A] font-display font-semibold text-sm mb-2">{c.surnom}</p>}
              <div className="flex flex-wrap gap-2 my-3 text-xs font-bold">
                <span className="bg-[#5DCAA5]/20 text-[#0F6E56] px-2.5 py-1 rounded-full flex items-center gap-1"><MapPin size={12} />{c.lieu}</span>
                <span className="bg-[#3FB6E8]/15 text-[#0F6E56] px-2.5 py-1 rounded-full">{c.langues}</span>
              </div>
              <p className="text-xs text-[#5a6b62] font-semibold mb-3">{c.types}</p>
              <p className="text-sm text-[#3a4a42] font-semibold italic flex gap-1.5"><Quote size={16} className="text-[#FFC93C] shrink-0" />{c.mot}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Caravane */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="bg-[#0F6E56] rounded-[2rem] p-8 md:p-10 text-white shadow-kid">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[#FFC93C] bg-white/10 px-4 py-1.5 rounded-full mb-4"><Sparkles size={16} /> Le projet vivant</div>
          <h2 className="text-2xl md:text-3xl mb-3">La Caravane de Collecte</h2>
          <p className="text-white/85 font-semibold leading-relaxed mb-3 max-w-2xl">
            La Caravane parcourt la Guinée, région après région, pour recueillir les contes auprès de ceux qui les portent.
            Chaque étape est documentée : conteurs rencontrés, langues représentées, contes archivés.
          </p>
          <p className="text-[#FFC93C] font-display font-semibold">C'est un projet vivant, et il ne s'arrêtera pas. Chaque conte recueilli est un conte sauvé.</p>
        </div>
      </section>

      {/* Engager */}
      <section id="engager" className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-kid">
          {sent ? (
            <div className="text-center py-6">
              <CheckCircle2 className="text-[#0F6E56] mx-auto mb-4" size={48} />
              <h2 className="text-2xl text-[#0D2B1A] mb-2">Demande envoyée&nbsp;!</h2>
              <p className="text-[#5a6b62] font-semibold">L'équipe PATI te contactera sous 72h.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-2">Engager un conteur</h2>
              <p className="text-[#5a6b62] font-semibold mb-6">Pour une école, un festival, un événement.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Ton nom", "Email ou WhatsApp", "Type d'événement", "Ville"].map((l) => (
                  <input key={l} placeholder={l} className="bg-[#FFF6E7] rounded-2xl px-4 py-3 text-[#0D2B1A] font-semibold placeholder:text-[#5a6b62] outline-none focus:ring-2 focus:ring-[#FFC93C]" />
                ))}
              </div>
              <button onClick={() => setSent(true)} className="btn-kid bg-[#FF6B4A] text-white mt-5 w-full justify-center">Envoyer ma demande</button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
