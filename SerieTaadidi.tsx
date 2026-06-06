import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Hourglass, Bell, Check, Sparkles } from "lucide-react";
import { TAADIDI } from "../data/series/taadidi";
import { track } from "../lib/track";

const GREEN = "#0D2B1A";
const GOLD = "#FFC93C";

// Supabase (clé publishable, publique par design — protégée par RLS)
const SB = { url: "https://gipqwrqwouytlmsuxefj.supabase.co", key: "sb_publishable_gaOQLiWvGUeSwOozZlPPGQ_e6ii9upC" };

async function notify(email: string): Promise<void> {
  try {
    const r = await fetch(`${SB.url}/rest/v1/taadidi_notify`, {
      method: "POST",
      headers: { apikey: SB.key, Authorization: `Bearer ${SB.key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({ email }),
    });
    if (!r.ok) throw new Error("supabase");
  } catch {
    // Repli localStorage (comme Le Défi)
    try {
      const k = "taadidi_notify_local";
      const list = JSON.parse(localStorage.getItem(k) || "[]");
      list.push({ email, ts: Date.now() });
      localStorage.setItem(k, JSON.stringify(list));
    } catch { /* ignore */ }
  }
}

function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  const submit = async () => {
    if (!valid || status === "sending") return;
    setStatus("sending");
    await notify(email.trim());
    track("taadidi_notify");
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="flex items-center gap-3 bg-[#0F6E56]/10 text-[#0F6E56] font-display font-semibold rounded-2xl px-5 py-4">
        <Check size={20} /> C'est noté&nbsp;! On te préviendra dès la sortie du prochain épisode.
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="email" inputMode="email" placeholder="ton@email.com" value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
        className="flex-1 rounded-2xl border-2 border-[#0D2B1A]/10 bg-white px-4 py-3 font-semibold text-[#0D2B1A] outline-none focus:border-[#C8841E]"
      />
      <button onClick={submit} disabled={!valid || status === "sending"}
        className={`btn-kid text-[#0D2B1A] shadow-kid ${valid ? "" : "opacity-50 pointer-events-none"}`}
        style={{ background: GOLD }}>
        <Bell size={18} /> {status === "sending" ? "Envoi…" : "Préviens-moi"}
      </button>
    </div>
  );
}

export default function SerieTaadidi() {
  const eps = TAADIDI.episodes;
  const liveCount = eps.filter((e) => e.statut === "live").length;
  const total = eps.length;
  const pct = Math.round((liveCount / total) * 100);
  const nextSoon = eps.find((e) => e.statut === "soon");

  return (
    <div className="bg-[#FFF6E7]">
      {/* HERO série — pleine largeur, distinct des fiches-livre */}
      <section className="w-full" style={{ background: GREEN }}>
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <Link to="/" className="inline-flex items-center gap-1.5 font-display font-semibold mb-8 hover:underline" style={{ color: GOLD }}>
            <ArrowLeft size={18} /> Accueil
          </Link>

          <div className="grid md:grid-cols-[1fr_300px] gap-8 md:gap-12 items-center">
            <div>
          <div className="inline-flex items-center gap-2 font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-5"
            style={{ background: `${GOLD}26`, color: GOLD }}>
            <Sparkles size={16} /> Série
          </div>

          <h1 className="font-display font-bold text-white leading-none mb-4"
            style={{ fontSize: "clamp(3rem, 12vw, 6rem)", letterSpacing: "0.04em" }}>
            TAA<span style={{ color: GOLD }}>DIDI</span>
          </h1>

          <p className="font-display font-semibold text-2xl md:text-3xl mb-4" style={{ color: GOLD }}>
            {TAADIDI.accroche}
          </p>
          <p className="text-white/85 text-lg leading-relaxed font-semibold max-w-2xl mb-6">
            {TAADIDI.pitch}
          </p>

          <div className="inline-block font-display font-semibold text-sm text-white/90 border border-white/25 rounded-full px-4 py-1.5 mb-8">
            {TAADIDI.badge}
          </div>

          {/* Compteur + progression */}
          <div className="max-w-md">
            <div className="flex items-center justify-between font-display font-semibold text-white/90 text-sm mb-2">
              <span>{liveCount} épisodes sur {total}</span>
              <span style={{ color: GOLD }}>{pct}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/15 overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: GOLD }} />
            </div>
          </div>
            </div>
            <div className="mx-auto md:mx-0">
              <img src={TAADIDI.cover} alt="Couverture de la série Taadidi" className="w-full max-w-[260px] md:max-w-[300px] rounded-[1.5rem] shadow-kid border-4 border-white/10" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* SPOTLIGHT prochain épisode */}
        {nextSoon && (
          <div className="rounded-[1.5rem] border-2 border-dashed p-6 md:p-7 mb-10 flex flex-col sm:flex-row sm:items-center gap-5"
            style={{ borderColor: `${TAADIDI.accent}66`, background: `${TAADIDI.accent}0d` }}>
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl shrink-0" style={{ background: `${TAADIDI.accent}1f` }}>
              <Hourglass size={30} style={{ color: TAADIDI.accent }} />
            </div>
            <div className="flex-1">
              <div className="font-display font-semibold text-sm uppercase tracking-wide mb-1" style={{ color: TAADIDI.accent }}>
                Prochain épisode · Bientôt
              </div>
              <div className="font-display font-bold text-xl text-[#0D2B1A] mb-1">Épisode {nextSoon.numero}</div>
              <p className="text-[#5a6b62] font-semibold">
                {nextSoon.teaser?.fr ?? "Un nouveau tour de Taadidi se prépare…"}
              </p>
            </div>
          </div>
        )}

        {/* RAIL des épisodes */}
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-1">Les épisodes</h2>
        <p className="text-[#3a4a42] font-semibold mb-6">Lis ceux qui sont prêts — les autres arrivent.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {eps.map((ep) => {
            const num = String(ep.numero).padStart(2, "0");
            if (ep.statut === "live") {
              return (
                <div key={ep.numero} className="bg-white rounded-[1.5rem] shadow-kid p-6 flex flex-col">
                  <div className="font-display font-bold text-4xl mb-3" style={{ color: TAADIDI.accent }}>{num}</div>
                  <h3 className="font-display font-bold text-lg text-[#0D2B1A] mb-2 leading-snug">{ep.titre.fr}</h3>
                  <p className="text-[#5a6b62] font-semibold text-sm mb-5 flex-1">{ep.teaser?.fr}</p>
                  <Link to={`/livre/taadidi-${ep.numero}/lire`} className="btn-kid text-white shadow-kid self-start" style={{ background: TAADIDI.accent }}>
                    <BookOpen size={18} /> Lire
                  </Link>
                </div>
              );
            }
            return (
              <div key={ep.numero} className="rounded-[1.5rem] border-2 border-dashed border-[#0D2B1A]/15 p-6 flex flex-col items-start bg-[#0D2B1A]/[0.02]">
                <div className="font-display font-bold text-4xl mb-3 text-[#0D2B1A]/25">{num}</div>
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-[#0D2B1A]/45 mb-2">
                  <Hourglass size={16} /> Bientôt
                </div>
                <p className="text-[#0D2B1A]/40 font-semibold text-sm flex-1">{ep.teaser?.fr ?? "?"}</p>
              </div>
            );
          })}
        </div>

        {/* RÉTENTION — préviens-moi */}
        <div className="mt-12 bg-white rounded-[1.5rem] shadow-kid p-6 md:p-8">
          <div className="flex items-center gap-2 font-display font-bold text-xl text-[#0D2B1A] mb-1">
            <Bell size={22} style={{ color: TAADIDI.accent }} /> Préviens-moi du prochain épisode
          </div>
          <p className="text-[#5a6b62] font-semibold mb-5">Laisse ton email : un seul message, à la sortie d'un nouvel épisode de Taadidi.</p>
          <NotifyForm />
        </div>

        {/* Provenance */}
        <p className="mt-10 text-center text-sm text-[#8a9389] font-semibold italic flex items-center justify-center gap-1.5">
          <ArrowRight size={14} className="opacity-0" />{TAADIDI.provenance}
        </p>
      </div>
    </div>
  );
}
