import { Headphones } from "lucide-react";
import { BOOKS } from "../data/books";

export default function AudioBibliotheque() {
  const withAudio = BOOKS.filter((b) => b.audio);
  return (
    <div className="bg-[#FFF6E7] min-h-[60vh]">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-2"><Headphones className="text-[#0F6E56]" size={28} /><h1 className="text-3xl md:text-4xl text-[#0D2B1A]">Bibliothèque audio</h1></div>
        <p className="text-[#3a4a42] font-semibold mb-8">Écoute les histoires PATI, racontées rien que pour toi.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {withAudio.map((b) => (
            <div key={b.slug} className="card-kid p-5 flex gap-4 items-center">
              <img src={b.cover} alt={b.title} className="w-20 h-24 object-cover rounded-2xl shrink-0" />
              <div className="flex-1">
                <h3 className="font-display font-semibold text-[#0D2B1A] leading-tight mb-1">{b.title}</h3>
                <p className="text-xs text-[#5a6b62] font-semibold mb-2">{b.description}</p>
                <audio controls preload="none" className="w-full"><source src={b.audio} type="audio/mpeg" /></audio>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
