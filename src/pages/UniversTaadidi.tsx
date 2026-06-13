import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, BookOpen, Headphones, Bell, Check, Hourglass,
  Moon, Sun, Sparkles, Shield, Eye, Quote,
} from "lucide-react";
import { TAADIDI } from "../data/series/taadidi";
import { track } from "../lib/track";
import TaadidiLignee from "../components/TaadidiLignee";

// Charte Pati + accents terre Taadidi
const GREEN = "#0D2B1A";
const GOLD = "#FFC93C";
const ACCENT = TAADIDI.accent; // #C8841E
const MANGROVE = "#1F6E52";
const MANGROVE_DEEP = "#143D2E";
const LAGUNE = "#2C7DA0";

// Police d'affichage de l'univers : Fraunces si chargée (cf. index.html), repli serif sinon.
const DISPLAY = "'Fraunces', Georgia, 'Times New Roman', serif";

// Supabase (clé publishable, publique par design — protégée par RLS) — identique à la série
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
  const [hp, setHp] = useState(""); // honeypot anti-bot — doit rester vide
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  const submit = async () => {
    if (!valid || status === "sending") return;
    if (hp) { setStatus("done"); return; }
    try {
      const last = Number(localStorage.getItem("taadidi_notify_ts") || 0);
      if (Date.now() - last < 30000) { setStatus("done"); return; }
      localStorage.setItem("taadidi_notify_ts", String(Date.now()));
    } catch { /* ignore */ }
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
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={hp} onChange={(e) => setHp(e.target.value)}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
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

// Les 4 phases de lune = la colonne vertébrale de la saga (28 = un cycle lunaire).
const PHASES: { n: number; lune: string; range: [number, number]; etape: string; note: string; pivot?: string }[] = [
  { n: 1, lune: "Nouvelle lune", range: [1, 7], etape: "Naissance & petite enfance", note: "L'ombre avant la lumière. Taadidi naît en épargnant sa mère, et se fait son missionnaire." },
  { n: 2, lune: "Premier quartier", range: [8, 14], etape: "Enfance — sœurs & camarades", note: "Le monde s'élargit. Il inclut les filles que les autres écartent." },
  { n: 3, lune: "Pleine lune", range: [15, 21], etape: "Adolescence", note: "« Les filles sont la lune », dit à son comble — et le refus de la violence.", pivot: "Kiké" },
  { n: 4, lune: "Dernier quartier", range: [22, 28], etape: "Mariage → paternité", note: "La lune cède au jour. Taadidi devient père d'une fille qu'il nomme le soleil.", pivot: "Sogué" },
];

const PERSONNAGES: { nom: string; trait: string; mot: string; tone: string; img?: string }[] = [
  { nom: "Taadidi", trait: "Le rusé. Né missionnaire de sa mère ; il déjoue la force par l'intelligence.", mot: "D'accord… mais à une condition.", tone: ACCENT, img: "/images/taadidi/taadidi-age3-ado.png" },
  { nom: "Nana", trait: "La mère. Moquée dix ans parce qu'elle « ne fait que des filles » — alors qu'elle est la championne des épreuves des femmes.", mot: "Adeyaaa… mon fils, mon missionnaire.", tone: MANGROVE },
  { nom: "Sana", trait: "Le père. Champion des moissons, il croit qu'on gagne au muscle — jusqu'à ce que son fils lui ouvre les yeux.", mot: "Prouve-le, alors.", tone: LAGUNE },
  { nom: "Lima", trait: "L'aînée. Celle qui chante pour relever les cœurs, et décroche sa place d'infirmière à la seule force du travail.", mot: "Je n'ai pas besoin qu'on me fasse de cadeau.", tone: MANGROVE_DEEP },
  { nom: "Tofan", trait: "La beauté — et la tête. Elle ne monte pas sur l'estrade pour son visage, mais avec un projet pour son village.", mot: "Reconnais-moi pour ce que j'ai dans la tête.", tone: ACCENT },
  { nom: "Fanyi", trait: "La bonté même — et maîtresse d'école. Douce, mais redoutable : c'est elle qui mène le jeu et qui choisit.", mot: "Tu veux te faire pardonner ? Prouve-le.", tone: MANGROVE },
  { nom: "Adama", trait: "L'amie de Tofan et Fanyi. Longtemps, on ne l'a jugée que sur son visage. Un seul, lui, a vu qui elle était vraiment.", mot: "Cette voix… je l'aurais reconnue entre mille.", tone: LAGUNE },
  { nom: "Kaly", trait: "Le jumeau doux. Le premier des fils de Bakala que la bonté ait gagné.", mot: "Tu es la Miss de mon univers.", tone: MANGROVE },
  { nom: "Kala", trait: "Le jumeau dur. De l'ennemi juré au plus fidèle des amis — il a appris à voir plus loin que le bout de son nez.", mot: "C'est surtout pour celles qui ont une tête bien faite.", tone: MANGROVE_DEEP },
  { nom: "Bakala", trait: "Le rival. Jaloux du père de Taadidi, il multiplie les pièges — et chacun se retourne contre lui.", mot: "Encore lui. Toujours lui.", tone: "#9c6b3f" },
  { nom: "Sayon", trait: "Le dernier dur. Le seul que la bonté n'a pas encore gagné — celui qu'il faudra convaincre jusqu'au bout.", mot: "Moi, on ne me retourne pas comme les autres.", tone: "#7d5a46" },
  { nom: "Sogué", trait: "Le soleil. La fille qu'il nomme la source — celle qu'il porte et protège.", mot: "Le soleil ne parle pas : il se lève.", tone: ACCENT, img: "/images/taadidi/taadidi-sogue.png" },
];

function MoonPhase({ idx }: { idx: number }) {
  // Pictogramme simple des phases (croissant -> pleine -> décroissant), via un masque.
  const fill = [0.15, 0.5, 1, 0.5][idx] ?? 0.5;
  return (
    <span className="relative inline-flex w-9 h-9 rounded-full shrink-0"
      style={{ background: MANGROVE_DEEP, border: `1px solid ${GOLD}55` }}>
      <span className="absolute inset-0 rounded-full" style={{ background: GOLD, opacity: fill }} />
    </span>
  );
}

export default function UniversTaadidi() {
  const eps = TAADIDI.episodes;
  const liveCount = eps.filter((e) => e.statut === "live").length;

  return (
    <div className="bg-[#FFF6E7]">
      {/* ===== HERO / BANNIÈRE ===== */}
      <section className="w-full relative overflow-hidden" style={{ background: MANGROVE_DEEP }}>
        {/* couches « parallaxe » placeholder — à remplacer par les illustrations basse côte */}
        <div aria-hidden className="absolute inset-0" style={{
          background: `radial-gradient(120% 80% at 80% -10%, ${MANGROVE}88 0%, transparent 60%),
                       radial-gradient(90% 60% at 10% 110%, ${GREEN} 0%, transparent 60%)`,
        }} />
        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[1.1fr_.9fr] gap-10 md:gap-12 items-center">
          <div>
          <Link to="/" className="inline-flex items-center gap-1.5 font-display font-semibold mb-8 hover:underline" style={{ color: GOLD }}>
            <ArrowLeft size={18} /> Accueil
          </Link>

          <div className="inline-flex items-center gap-2 font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-5"
            style={{ background: `${GOLD}22`, color: GOLD }}>
            <Sparkles size={16} /> Univers
          </div>

          <h1 className="font-bold text-white leading-none mb-4"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(3rem, 13vw, 6.5rem)", letterSpacing: "0.02em" }}>
            Taadidi
          </h1>

          <p className="font-display font-semibold text-2xl md:text-3xl mb-4" style={{ color: GOLD }}>
            {TAADIDI.accroche}
          </p>
          <p className="text-white/85 text-lg leading-relaxed font-semibold max-w-2xl mb-6">
            {TAADIDI.pitch}
          </p>

          {/* tagline de marque : l'arc en deux mots */}
          <div className="inline-flex items-center gap-3 font-display font-bold text-white border border-white/20 rounded-full px-5 py-2 mb-8">
            <Moon size={18} style={{ color: GOLD }} /> Kiké
            <span className="opacity-50">→</span>
            Sogué <Sun size={18} style={{ color: GOLD }} />
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/livre/taadidi-1/lire" className="btn-kid text-white shadow-kid" style={{ background: ACCENT }}>
              <BookOpen size={18} /> Lire l'épisode 1
            </Link>
            <Link to="/ecouter-les-contes" className="btn-kid text-[#0D2B1A] shadow-kid" style={{ background: GOLD }}>
              <Headphones size={18} /> Écouter les contes
            </Link>
          </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div aria-hidden className="absolute -inset-4 rounded-[2rem]"
              style={{ background: `radial-gradient(60% 60% at 50% 42%, ${GOLD}33, transparent 70%)` }} />
            <div className="relative rounded-[1.75rem] p-4 md:p-5"
              style={{ background: "#FFF6E7", border: `1px solid ${GOLD}66`, boxShadow: "0 22px 55px rgba(0,0,0,.35)" }}>
              <img
                src="/images/taadidi/taadidi-hero-pere-sogue.png"
                alt="Taadidi devenu père, et Sogué — le soleil"
                className="w-full rounded-[1.1rem]"
                onError={(e) => { const c = e.currentTarget.closest("div") as HTMLElement | null; if (c) c.style.display = "none"; }}
              />
            </div>
          </div>
        </div>
      </section>

      <TaadidiLignee />

      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* ===== LES ÉPISODES (par phase) ===== */}
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mt-14 mb-1" style={{ fontFamily: DISPLAY }}>Les épisodes</h2>
        <p className="text-[#3a4a42] font-semibold mb-7">{liveCount} en ligne · saga prévue de 28. Lis ceux qui sont prêts.</p>

        <div className="space-y-8">
          {PHASES.map((p, i) => {
            const inPhase = eps.filter((e) => e.numero >= p.range[0] && e.numero <= p.range[1]);
            return (
              <div key={p.n}>
                <div className="flex items-center gap-2.5 mb-4">
                  <MoonPhase idx={i} />
                  <h3 className="font-display font-bold text-[#0D2B1A]">{p.lune} <span className="text-[#8a9389] font-semibold text-sm">· {p.etape}</span></h3>
                </div>

                {inPhase.length === 0 ? (
                  <div className="rounded-[1.25rem] border-2 border-dashed border-[#0D2B1A]/12 p-5 bg-[#0D2B1A]/[0.015] flex items-center gap-3">
                    <Hourglass size={18} className="text-[#0D2B1A]/35" />
                    <p className="text-[#0D2B1A]/45 font-semibold text-sm">
                      Bientôt{p.pivot ? <> — dont l'épisode <span className="font-display font-bold">« {p.pivot} »</span></> : null}.
                    </p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {inPhase.map((ep) => {
                      const num = String(ep.numero).padStart(2, "0");
                      if (ep.statut === "live") {
                        return (
                          <div key={ep.numero} className="bg-white rounded-[1.5rem] shadow-kid p-6 flex flex-col">
                            <div className="font-display font-bold text-4xl mb-3" style={{ color: ACCENT }}>{num}</div>
                            <h4 className="font-display font-bold text-lg text-[#0D2B1A] mb-2 leading-snug">{ep.titre.fr}</h4>
                            <p className="text-[#5a6b62] font-semibold text-sm mb-5 flex-1">{ep.teaser?.fr}</p>
                            <Link to={`/livre/taadidi-${ep.numero}/lire`} className="btn-kid text-white shadow-kid self-start" style={{ background: ACCENT }}>
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
                          <p className="text-[#0D2B1A]/40 font-semibold text-sm flex-1">{ep.teaser?.fr ?? "Un nouveau tour de Taadidi se prépare…"}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ===== PERSONNAGES ===== */}
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mt-14 mb-1" style={{ fontFamily: DISPLAY }}>Personnages</h2>
        <p className="text-[#3a4a42] font-semibold mb-7">Ceux qui peuplent la saga.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PERSONNAGES.map((c) => (
            <div key={c.nom} className="bg-white rounded-[1.5rem] shadow-kid p-6 flex flex-col">
              {c.img ? (
                <span className="inline-flex w-12 h-12 rounded-full overflow-hidden mb-3"
                  style={{ background: `${c.tone}22` }}>
                  <img src={c.img} alt={c.nom} className="w-full h-full object-cover" style={{ objectPosition: "50% 14%" }}
                    onError={(e) => { const p = e.currentTarget.parentElement as HTMLElement; p.style.display = "none"; }} />
                </span>
              ) : (
                <span className="inline-flex w-12 h-12 rounded-full items-center justify-center font-display font-bold text-white mb-3"
                  style={{ background: c.tone }}>{c.nom[0]}</span>
              )}
              <h3 className="font-display font-bold text-lg text-[#0D2B1A] mb-1">{c.nom}</h3>
              <p className="text-[#5a6b62] font-semibold text-sm mb-4 flex-1">{c.trait}</p>
              <p className="flex items-start gap-2 text-[#0D2B1A] font-display font-semibold italic text-sm">
                <Quote size={15} style={{ color: c.tone }} className="shrink-0 mt-0.5" /> {c.mot}
              </p>
            </div>
          ))}
          <div className="rounded-[1.5rem] border-2 border-dashed border-[#0D2B1A]/15 p-6 flex flex-col items-center justify-center text-center bg-[#0D2B1A]/[0.02]">
            <Sparkles size={22} className="text-[#0D2B1A]/30 mb-2" />
            <p className="text-[#0D2B1A]/45 font-display font-semibold text-sm">Les sœurs, l'épouse…<br/>à venir au fil de la saga</p>
          </div>
        </div>

        {/* ===== JOUER ===== */}
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mt-14 mb-5" style={{ fontFamily: DISPLAY }}>Jouer & découvrir</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link to="/livre/taadidi-1/lire" className="bg-white rounded-[1.5rem] shadow-kid p-6 flex items-center gap-4 hover:opacity-95 transition">
            <span className="inline-flex w-12 h-12 rounded-2xl items-center justify-center" style={{ background: `${ACCENT}1f` }}>
              <BookOpen size={24} style={{ color: ACCENT }} />
            </span>
            <span>
              <span className="block font-display font-bold text-[#0D2B1A]">Le livre interactif</span>
              <span className="block text-[#5a6b62] font-semibold text-sm">Lis Taadidi en 4 langues, avec quiz.</span>
            </span>
          </Link>
          <Link to="/ecouter-les-contes" className="bg-white rounded-[1.5rem] shadow-kid p-6 flex items-center gap-4 hover:opacity-95 transition">
            <span className="inline-flex w-12 h-12 rounded-2xl items-center justify-center" style={{ background: `${MANGROVE}1f` }}>
              <Headphones size={24} style={{ color: MANGROVE }} />
            </span>
            <span>
              <span className="block font-display font-bold text-[#0D2B1A]">Écouter les contes</span>
              <span className="block text-[#5a6b62] font-semibold text-sm">La voix du conteur, en soussou.</span>
            </span>
          </Link>
        </div>

        {/* ===== CRÉÉ AVEC / TRANSPARENCE ===== */}
        <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mt-14 mb-5" style={{ fontFamily: DISPLAY }}>Créé avec</h2>
        <div className="bg-white rounded-[1.5rem] shadow-kid p-6 md:p-8 space-y-4">
          <p className="flex items-start gap-3 text-[#3a4a42] font-semibold">
            <Sparkles size={18} style={{ color: ACCENT }} className="shrink-0 mt-0.5" />
            {TAADIDI.provenance}
          </p>
          <p className="flex items-start gap-3 text-[#3a4a42] font-semibold">
            <Shield size={18} style={{ color: MANGROVE }} className="shrink-0 mt-0.5" />
            Un récit de masculinité positive, ancré dans la pensée africaine et l'épopée mandingue. Les femmes y restent
            pleinement elles-mêmes ; l'horizon est l'équilibre.
          </p>
          <p className="flex items-start gap-3 text-[#3a4a42] font-semibold">
            <Eye size={18} style={{ color: LAGUNE }} className="shrink-0 mt-0.5" />
            Illustrations assistées par intelligence artificielle, déclarées, sous direction éditoriale humaine.
          </p>
        </div>

        {/* ===== PRÉVIENS-MOI ===== */}
        <div className="mt-12 rounded-[1.5rem] p-6 md:p-8" style={{ background: MANGROVE_DEEP }}>
          <div className="flex items-center gap-2 font-display font-bold text-xl text-white mb-1">
            <Bell size={22} style={{ color: GOLD }} /> Préviens-moi du prochain épisode
          </div>
          <p className="text-white/75 font-semibold mb-5">Un seul message, à la sortie d'un nouvel épisode de Taadidi.</p>
          <NotifyForm />
        </div>
      </div>
    </div>
  );
}
