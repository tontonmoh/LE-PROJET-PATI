import { Link } from "react-router-dom";
import {
  ArrowLeft, Music, Mic, Feather, Palette, SlidersHorizontal,
  Languages, GraduationCap, Compass, Plus, type LucideIcon,
} from "lucide-react";
import { MANIFESTO, CATEGORIES, type Artisan } from "../data/atelier";

// Clés d'icônes utilisées dans src/data/atelier.ts → composant lucide.
const ICONS: Record<string, LucideIcon> = {
  Music, Mic, Feather, Palette, SlidersHorizontal, Languages, GraduationCap, Compass,
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function Portrait({ a }: { a: Artisan }) {
  const todo = a.name.startsWith("À compléter");
  if (a.photo) {
    return (
      <img
        src={a.photo}
        alt={a.name}
        className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-[#FFC93C]/50"
      />
    );
  }
  if (todo) {
    return (
      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-dashed border-[#0D2B1A]/20 text-[#0D2B1A]/30">
        <Plus size={22} />
      </div>
    );
  }
  return (
    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#0F6E56] to-[#0D2B1A] font-display text-lg text-[#FFC93C]">
      {initials(a.name)}
    </div>
  );
}

function Card({ a }: { a: Artisan }) {
  const todo = a.name.startsWith("À compléter");
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-[#0D2B1A]/10 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-kid">
      <Portrait a={a} />
      <div className="min-w-0">
        <div
          className={
            "truncate font-display text-[1.05rem] " +
            (todo ? "italic text-[#0D2B1A]/35" : "text-[#0D2B1A]")
          }
        >
          {a.name}
        </div>
        <div className="text-sm font-semibold text-[#0F6E56]">{a.role}</div>
        {a.line && <p className="mt-0.5 text-xs italic text-[#5b6b61]">{a.line}</p>}
      </div>
    </div>
  );
}

export default function Atelier() {
  return (
    <div className="bg-[#FFF6E7]">
      <style>{`
        @keyframes auFade{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        .au-fade{animation:auFade .6s cubic-bezier(.2,.7,.2,1) both}
      `}</style>

      {/* ---------- En-tête ---------- */}
      <header className="relative overflow-hidden bg-[#0D2B1A] text-[#FFF6E7]">
        <div
          className="pointer-events-none absolute -top-28 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-[#FFC93C]/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          aria-hidden
          style={{
            backgroundImage: "radial-gradient(#FFC93C 1px, transparent 1.4px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 pt-7 pb-16 sm:pb-20">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-display font-semibold text-[#FFF6E7]/80 transition hover:text-[#FFC93C]"
          >
            <ArrowLeft size={18} /> Accueil
          </Link>
          <p className="au-fade mt-10 font-display text-sm uppercase tracking-[0.34em] text-[#FFC93C]">
            Projet Pati
          </p>
          <h1 className="au-fade mt-2 font-display text-5xl font-black leading-none text-[#FFC93C] sm:text-7xl" style={{ animationDelay: ".05s" }}>
            L'Atelier
          </h1>
          <p className="au-fade mt-5 max-w-xl text-lg leading-relaxed text-[#FFF6E7]/85" style={{ animationDelay: ".12s" }}>
            Les artisans qui font Pati — celles et ceux dont les mains, la voix et le rythme
            donnent corps à chaque histoire.
          </p>
        </div>
        {/* motif « fil » */}
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="block h-9 w-full" aria-hidden>
          <path
            d="M0 20 C 150 2, 300 38, 450 20 S 750 2, 900 20 S 1150 38, 1200 20"
            fill="none" stroke="#FFC93C" strokeWidth="2" strokeOpacity="0.55"
          />
        </svg>
      </header>

      {/* ---------- Le manifeste ---------- */}
      <section className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
        {MANIFESTO.map((b, i) => {
          if (b.kind === "lead")
            return (
              <p key={i} className="text-lg leading-relaxed text-[#22332b] first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-black first-letter:leading-[0.8] first-letter:text-[#0F6E56]">
                {b.text}
              </p>
            );
          if (b.kind === "pull")
            return (
              <p key={i} className="my-10 text-center font-display text-2xl text-[#0F6E56] sm:text-3xl">
                {b.text}
              </p>
            );
          if (b.kind === "close")
            return (
              <p key={i} className="mt-10 border-l-4 border-[#FFC93C] pl-5 font-display text-xl leading-snug text-[#0D2B1A]">
                {b.text}
              </p>
            );
          return (
            <p key={i} className="mt-5 leading-relaxed text-[#3a4a42]">
              {b.text}
            </p>
          );
        })}
      </section>

      {/* ---------- Les artisans ---------- */}
      <section className="border-t border-[#0D2B1A]/10 bg-[#FBEFD6]">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="font-display text-3xl font-black text-[#0D2B1A] sm:text-4xl">
            Les artisans de Pati
          </h2>
          <p className="mt-3 max-w-2xl text-[#3a4a42]">
            Auteurs, illustrateurs, voix, musiciens, traducteurs, techniciens : chaque histoire
            passe entre plusieurs mains avant d'arriver à un enfant.
          </p>

          {CATEGORIES.map((cat, ci) => {
            const Icon = ICONS[cat.icon] ?? Compass;
            return (
              <div key={cat.id} className="au-fade mt-12" style={{ animationDelay: `${0.04 * ci}s` }}>
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#FFC93C] bg-[#FFC93C]/20 text-[#0D2B1A]">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-none text-[#0D2B1A]">{cat.label}</h3>
                    <p className="mt-1 text-sm text-[#6b7a70]">{cat.tagline}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.artisans.map((a, ai) => (
                    <Card key={ai} a={a} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* ---------- Invitation ---------- */}
          <div className="mt-16 rounded-[1.5rem] bg-[#0D2B1A] p-8 text-center text-[#FFF6E7] sm:p-10">
            <h3 className="font-display text-2xl text-[#FFC93C] sm:text-3xl">Rejoindre L'Atelier</h3>
            <p className="mx-auto mt-3 max-w-xl text-[#FFF6E7]/85">
              Tu es conteur, illustratrice, musicien, traductrice… et tu veux porter une histoire
              avec nous&nbsp;? Écris-nous.
            </p>
            {/* TODO Moh : remplace par ton vrai e-mail de contact */}
            <a
              href="mailto:contact@projetpati.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFC93C] px-6 py-3 font-display font-semibold text-[#0D2B1A] transition hover:brightness-105"
            >
              Nous écrire
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
