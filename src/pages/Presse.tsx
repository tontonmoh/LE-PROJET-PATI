import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, FileText, Image as ImageIcon, Mail, Quote, ArrowRight } from "lucide-react";

/* ============================================================================
   PATI — Espace presse (route /presse)
   Charte vert #0D2B1A + or #FFC93C. Mobile-first, sans dépendance lourde.
   Téléchargements attendus dans public/ :
     - public/dossier-presse-pati.pdf
     - public/logo-pati.png
   ========================================================================== */

const VERT = "#0D2B1A";
const OR = "#FFC93C";

const CHIFFRES = [
  ["2", "séries"], ["30", "livres"], ["20", "contes"], ["34", "préfectures"],
  ["48", "villes documentées"], ["854", "répondants (CaMPUS Baabata)"],
  ["4", "langues écrites"], ["8", "langues audio (à venir)"],
];

const CITATIONS = [
  "Un enfant qui se lit dans un livre se projette dans un avenir. C'est là toute l'ambition de PATI.",
  "Nous n'inventons pas la Guinée pour les enfants : nous la recueillons, puis nous la leur rendons.",
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: OR }}>{children}</div>
  );
}

export default function Presse() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Espace presse — PATI | projetpati.com";
    const desc =
      "Dossier de presse PATI : chiffres clés, temps forts, communiqué de l'EXPO du 16 octobre 2026 au CCFG, logo et contact presse de L'Atelier Solidaire.";
    const set = (a: "name" | "property", k: string, v: string) => {
      let el = document.head.querySelector(`meta[${a}="${k}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(a, k); document.head.appendChild(el); }
      el.setAttribute("content", v);
    };
    set("name", "description", desc);
    set("property", "og:title", "Espace presse — PATI");
    set("property", "og:description", desc);
    return () => { document.title = prev; };
  }, []);

  return (
    <main className="bg-[#FBF8F0]">
      {/* HERO */}
      <header className="px-5 py-14 sm:py-20 text-center text-white" style={{ background: VERT }}>
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                style={{ background: OR, color: VERT }}>Espace presse</span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight">PATI — Les racines de l'avenir</h1>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/85">
            Une plateforme d'édutainment jeunesse de L'Atelier Solidaire : des livres, contes et jeux qui
            racontent la Guinée à ses enfants — écrits et illustrés avec eux, dans leurs langues, en toute
            transparence.
          </p>
        </div>
      </header>

      {/* TÉLÉCHARGEMENTS */}
      <section className="mx-auto max-w-4xl px-5 -mt-8">
        <div className="grid gap-3 rounded-2xl bg-white p-5 shadow-lg sm:grid-cols-2">
          <a href="/dossier-presse-pati.pdf" download
             className="flex items-center gap-3 rounded-xl border p-4 transition-colors hover:bg-[#FBF8F0]"
             style={{ borderColor: "#E7E1D2" }}>
            <FileText size={24} style={{ color: OR }} />
            <span>
              <span className="block font-bold" style={{ color: VERT }}>Dossier de presse (PDF)</span>
              <span className="block text-sm text-gray-500">Communiqué, chiffres, temps forts</span>
            </span>
            <Download size={18} className="ml-auto text-gray-400" />
          </a>
          <a href="/logo-pati.png" download
             className="flex items-center gap-3 rounded-xl border p-4 transition-colors hover:bg-[#FBF8F0]"
             style={{ borderColor: "#E7E1D2" }}>
            <ImageIcon size={24} style={{ color: OR }} />
            <span>
              <span className="block font-bold" style={{ color: VERT }}>Logo PATI (PNG)</span>
              <span className="block text-sm text-gray-500">Haute résolution, fond transparent</span>
            </span>
            <Download size={18} className="ml-auto text-gray-400" />
          </a>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <Kicker>Chiffres clés</Kicker>
        <h2 className="mb-6 text-2xl sm:text-3xl font-extrabold" style={{ color: VERT }}>PATI en bref</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CHIFFRES.map(([n, l]) => (
            <div key={l} className="rounded-2xl border p-4 text-center" style={{ borderColor: "#E7E1D2" }}>
              <div className="text-3xl font-extrabold" style={{ color: VERT }}>{n}</div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEMPS FORTS */}
      <section className="mx-auto max-w-4xl px-5 py-4">
        <Kicker>Temps forts</Kicker>
        <h2 className="mb-4 text-2xl sm:text-3xl font-extrabold" style={{ color: VERT }}>Ce qui fait PATI</h2>
        <div className="space-y-3 text-gray-700 leading-relaxed">
          <p><strong style={{ color: VERT }}>Château d'Eau</strong> — un livre imaginé, écrit et illustré par
            une trentaine d'enfants de Conakry, en hommage à Ibrahima Tounkara, professeur de Bolodou bâtisseur
            d'un micro-barrage.</p>
          <p><strong style={{ color: VERT }}>Transparence</strong> — chaque usage d'illustration par IA est
            déclaré, et expliqué en détail aux jeunes lecteurs.</p>
          <p><strong style={{ color: VERT }}>Accès solidaire</strong> — un modèle où le parrainage finance
            l'accès des enfants qui ne peuvent pas payer. Aucun enfant n'est exclu par l'argent.</p>
        </div>
      </section>

      {/* ÉVÉNEMENT */}
      <section className="mx-auto max-w-4xl px-5 py-10">
        <div className="rounded-2xl p-6 text-white" style={{ background: VERT }}>
          <Kicker>À noter</Kicker>
          <h3 className="text-xl sm:text-2xl font-extrabold">EXPO PATI — 16 octobre 2026, au CCFG</h3>
          <p className="mt-2 max-w-2xl text-white/85">
            Une journée de présentation, d'ateliers et de rencontres autour de la Génération 2040, à Conakry.
            Accréditations presse sur demande.
          </p>
        </div>
      </section>

      {/* CITATIONS */}
      <section className="mx-auto max-w-4xl px-5 py-4">
        <Kicker>Citations</Kicker>
        <h2 className="mb-4 text-2xl sm:text-3xl font-extrabold" style={{ color: VERT }}>À attribuer au fondateur</h2>
        <div className="space-y-4">
          {CITATIONS.map((q, k) => (
            <blockquote key={k} className="rounded-2xl border-l-4 bg-white p-5 shadow-sm" style={{ borderColor: OR }}>
              <Quote size={18} style={{ color: OR }} />
              <p className="mt-2 text-lg italic" style={{ color: VERT }}>{q}</p>
              <footer className="mt-2 text-sm text-gray-500">— Mohamed Doumbouya, fondateur de L'Atelier Solidaire</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-5 py-14 text-center text-white" style={{ background: VERT }}>
        <Mail size={28} className="mx-auto" style={{ color: OR }} />
        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold">Contact presse</h2>
        <p className="mt-2 text-white/85">
          <a href="mailto:contact@projetpati.com" className="underline">contact@projetpati.com</a> · projetpati.com
        </p>
        <div className="mt-6">
          <Link to="/impact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold"
                style={{ background: OR, color: VERT }}>
            Voir notre impact <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
