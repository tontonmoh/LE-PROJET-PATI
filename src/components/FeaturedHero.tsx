import { useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, BookOpen, RotateCcw, Headphones, Film, Layers } from "lucide-react";
import { SOCIAL } from "../data/site";
import { BOOKS, getBook } from "../data/books";
import { getBlurb } from "../data/blurbs";
import { READERS } from "../data/readers";
import { inProgressSlugs, isDone, getProgress, lastHero, setLastHero } from "../lib/reading";

const CONTEUSE = "/images/pati-conteuse.webp";

// Séries intégrées à la rotation du héros (descripteur minimal — V1)
const SERIES = [
  { slug: "taadidi", title: "Taadidi", to: "/serie/taadidi", prefix: "taadidi-",
    tagline: "Le cycle du rusé — une saga en épisodes, lisible en 4 langues.", band: "Aventure" },
];

type Feat =
  | { kind: "resume-book"; slug: string }
  | { kind: "resume-serie"; serie: typeof SERIES[number]; ep: number }
  | { kind: "book"; slug: string; nouveau: boolean }
  | { kind: "serie"; serie: typeof SERIES[number] }
  | { kind: "brand" };

function choose(): Feat {
  const readable = BOOKS.filter((b) => !b.comingSoon && READERS[b.slug]);
  const prog = inProgressSlugs();

  // 1) Reprise : un épisode de série en cours
  const epSlug = prog.find((s) => s.startsWith("taadidi-"));
  if (epSlug) return { kind: "resume-serie", serie: SERIES[0], ep: parseInt(epSlug.split("-")[1] || "0", 10) };

  // 1bis) Reprise : un livre en cours
  const bookResume = prog.find((s) => readable.some((b) => b.slug === s));
  if (bookResume) return { kind: "resume-book", slug: bookResume };

  // 2) Mise en avant dès l'arrivée : tirage parmi les non-lus + les séries
  //    (priorité aux nouveautés), en évitant le dernier titre montré
  const unread = readable.filter((b) => !isDone(b.slug));
  const base = unread.length ? unread : readable;
  const novs = base.filter((b) => b.nouveau);
  type Cand = { kind: "book"; slug: string; nouveau: boolean } | { kind: "serie"; serie: typeof SERIES[number] };
  let pool: Cand[] = (novs.length ? novs : base).map((b) => ({ kind: "book", slug: b.slug, nouveau: !!b.nouveau }));
  pool = pool.concat(SERIES.map((s) => ({ kind: "serie", serie: s })));
  const last = lastHero();
  if (pool.length > 1 && last) pool = pool.filter((c) => (c.kind === "book" ? c.slug : c.serie.slug) !== last);

  const c = pool[Math.floor(Math.random() * pool.length)];
  return c.kind === "book" ? { kind: "book", slug: c.slug, nouveau: c.nouveau } : { kind: "serie", serie: c.serie };
}

export default function FeaturedHero() {
  const feat = useMemo(() => choose(), []);

  useEffect(() => {
    if (feat.kind === "book") setLastHero(feat.slug);
    else if (feat.kind === "serie") setLastHero(feat.serie.slug);
  }, [feat]);

  // --- Brand (premier visiteur) : héros d'accroche d'origine ---
  if (feat.kind === "brand") {
    return (
      <HeroFrame backdrop={CONTEUSE} conteuse>
        <h1 className="text-4xl md:text-5xl text-[#0D2B1A] leading-tight mb-3">
          <span className="text-[#FF6B4A]">La Guinée est un paradis</span> qui a tout à t’offrir
        </h1>
        <p className="text-sm font-display font-semibold text-[#0F6E56] mb-5">Connais-toi, découvre la Guinée</p>
        <p className="text-lg text-[#3a4a42] mb-8 leading-relaxed font-semibold">
          Pour les enfants de 4 à 15 ans, en français et dans nos langues guinéennes.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/catalogue" className="btn-kid bg-[#FF6B4A] text-white shadow-kid"><BookOpen size={18} /> Lire les livres</Link>
          <Link to="/binta-diallo" className="btn-kid bg-[#0F6E56] text-white"><Headphones size={18} /> Écouter les contes</Link>
          <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="btn-kid bg-[#FFC93C] text-[#0D2B1A]"><Film size={18} /> Regarder les dessins animés</a>
        </div>
      </HeroFrame>
    );
  }

  // --- Feature dynamique ---
  let title = "", tagline = "", kicker = "", cta = "", to = "", backdrop = CONTEUSE;
  let Icon = BookOpen;

  if (feat.kind === "resume-book") {
    const b = getBook(feat.slug);
    const p = getProgress(feat.slug);
    title = b?.title || "";
    tagline = getBlurb(feat.slug)?.tagline.fr || b?.description || "";
    kicker = "Reprends ta lecture"; Icon = RotateCcw;
    cta = p ? `Reprendre · page ${p.page + 1}` : "Reprendre";
    to = `/livre/${feat.slug}/lire`;
    backdrop = b?.heroArt || CONTEUSE;
  } else if (feat.kind === "resume-serie") {
    title = feat.serie.title; tagline = feat.serie.tagline;
    kicker = `Reprends l'épisode ${feat.ep}`; Icon = RotateCcw;
    cta = `Reprendre l'épisode ${feat.ep}`; to = `/livre/${feat.serie.prefix}${feat.ep}/lire`;
  } else if (feat.kind === "book") {
    const b = getBook(feat.slug);
    title = b?.title || "";
    tagline = getBlurb(feat.slug)?.tagline.fr || b?.description || "";
    kicker = feat.nouveau ? "Nouveau sur PATI" : "À lire aujourd'hui";
    Icon = feat.nouveau ? Sparkles : BookOpen;
    cta = "Lire ce livre"; to = `/livre/${feat.slug}`;
    backdrop = b?.heroArt || CONTEUSE;
  } else {
    title = feat.serie.title; tagline = feat.serie.tagline;
    kicker = "Nouvelle série"; Icon = Layers;
    cta = "Découvrir la série"; to = feat.serie.to;
  }

  const isConteuse = backdrop === CONTEUSE;

  return (
    <HeroFrame backdrop={backdrop} conteuse={isConteuse}>
      <div className="inline-flex items-center gap-2 font-display font-semibold text-sm text-[#0F6E56] bg-[#FFC93C]/30 px-4 py-1.5 rounded-full mb-4">
        <Icon size={16} /> {kicker}
      </div>
      <h1 className="text-4xl md:text-5xl text-[#0D2B1A] leading-tight mb-3">{title}</h1>
      {tagline && <p className="text-lg text-[#3a4a42] mb-8 leading-relaxed font-semibold max-w-xl">{tagline}</p>}
      <div className="flex flex-wrap gap-3">
        <Link to={to} className="btn-kid bg-[#FF6B4A] text-white shadow-kid"><Icon size={18} /> {cta}</Link>
        <Link to="/catalogue" className="btn-kid bg-white text-[#0F6E56]"><BookOpen size={18} /> Tout le catalogue</Link>
      </div>
    </HeroFrame>
  );
}

// Cadre commun : fond illustré fondu dans le crème (desktop) + image mobile
function HeroFrame({ backdrop, conteuse, children }: { backdrop: string; conteuse?: boolean; children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#FFF6E7]">
      <div className="hidden md:block absolute inset-0 overflow-hidden" aria-hidden="true">
        <img src={backdrop} alt="" className="w-full h-full object-cover object-center"
          style={conteuse ? { transform: "scale(1.14) translateX(7%)", transformOrigin: "center" } : undefined} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #FFF6E7 0%, #FFF6E7 28%, rgba(255,246,231,0.7) 46%, rgba(255,246,231,0) 62%)" }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 md:min-h-[440px] flex items-center">
        <div className="md:max-w-[52%]">{children}</div>
      </div>
      <img src={backdrop} alt="" className="md:hidden w-full h-72 object-cover object-center"
        style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 16%)", maskImage: "linear-gradient(to bottom, transparent 0%, #000 16%)" }} />
    </section>
  );
}
