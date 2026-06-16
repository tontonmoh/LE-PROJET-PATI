import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, Sparkles, Music, Hourglass } from "lucide-react";
import { READERS } from "../data/readers";
import { getBlurb } from "../data/blurbs";
import { getBook } from "../data/books";
import { track } from "../lib/track";
import { recordProgress, resumePage } from "../lib/reading";
import { logProgress } from "../lib/progress";
import { bumpCounter } from "../lib/publicStats";
import { TAADIDI } from "../data/series/taadidi";
import { POINT_ZERO } from "../data/point-zero";

export default function BookReaderML() {
  const { id } = useParams();
  const isSerie = (id || "").startsWith("taadidi-") || (id || "").startsWith("point-zero-") || (id || "").startsWith("g2040-");
  const reader = READERS[id || ""];
  const [lang, setLang] = useState(reader ? reader.langs[0] : "fr");
  const [i, setI] = useState(-1); // -1 = couverture
  const loggedRef = useRef("");
  const book = reader?.books[lang];
  const taglineMap = getBlurb(id || "")?.tagline as Record<string, string> | undefined;
  const tagline = taglineMap?.[lang];
  const total = book?.sections.length ?? 0;

  const koraSrc = getBook(id || "")?.kora;
  const koraRef = useRef<HTMLAudioElement>(null);
  const [koraOn, setKoraOn] = useState(false);
  const toggleKora = () => {
    const a = koraRef.current; if (!a) return;
    if (koraOn) a.pause(); else { a.volume = 0.3; a.play().catch(() => {}); }
    setKoraOn(!koraOn);
  };

  // Sécurité : si on change de langue et que l'index dépasse, on borne
  useEffect(() => { if (i > total - 1) setI(total - 1); }, [lang, total, i]);
  // Reprise : on ré-ouvre à la dernière page non terminée (sinon couverture)
  useEffect(() => { setI(resumePage(id || "")); if (reader) track("livre_ouvert", { livre: id }); }, [id]);
  // Remonter en haut à chaque page
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [i]);
  // Mémoriser la progression locale (dernière page atteinte = livre lu)
  useEffect(() => { if (i >= 0 && total > 0) recordProgress(id || "", i, total); }, [i, total, id]);
  // Dernière page atteinte (1x par livre) : Supabase si parent connecté + compteur public
  useEffect(() => {
    if (total > 0 && i === total - 1 && loggedRef.current !== (id || "")) {
      loggedRef.current = id || "";
      logProgress("livre_lu", id || "");
      bumpCounter("livres_lus");
    }
  }, [i, total, id]);
  const go = useCallback((d: number) => {
    setI((prev) => Math.max(-1, Math.min(total - 1, prev + d)));
  }, [total]);

  // Navigation au clavier (flèches)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!reader || !book) {
    return (
      <section className="bg-[#FFF6E7] min-h-[60vh] flex items-center">
        <div className="max-w-md mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl text-[#0D2B1A] mb-3">Lecture indisponible</h1>
          <Link to="/catalogue" className="btn-kid bg-[#0F6E56] text-white">Voir le catalogue</Link>
        </div>
      </section>
    );
  }

  const accent = reader.accent;
  const rtl = book.dir === "rtl";
  const readerClass = lang === "ar" ? "reader-ar" : lang === "zh" ? "reader-zh" : "reader-text";
  const cover = i < 0;
  const scene = cover ? null : book.sections[i];

  // Tous les livres du catalogue = mode split (50/50 illustration | texte)
  // Charger l'info de la série (si applicable)
  const serieEp = (id || "").startsWith("taadidi-")
    ? TAADIDI.episodes.find((e) => e.numero === parseInt((id || "").replace("taadidi-", ""), 10))
    : undefined;
  const pzTome = (id || "").startsWith("point-zero-")
    ? POINT_ZERO.tomes.find((t) => t.numero === parseInt((id || "").replace("point-zero-t", ""), 10))
    : undefined;

  const planche = serieEp?.planche;
  const cote = serieEp?.cote ?? "gauche";

  // Alternance RANDOM seeded par index
  const randomLayout = (idx: number) => {
    return idx % 2 === 0 ? "left" : "right";
  };

  // Image de base : couverture du livre
  let baseImg = getBook(id || "")?.cover;
  
  // Surcharger si c'est une série avec image spécifique
  if (serieEp && planche) {
    baseImg = planche;
  } else if (serieEp && !planche) {
    baseImg = TAADIDI.cover;
  } else if (pzTome && pzTome.cover) {
    baseImg = pzTome.cover;
  }
  
  // Le split s'applique à TOUS les livres
  const split = true;

  const sectionImg = !cover
    ? (reader.books.fr?.sections[i]?.image || reader.books[reader.langs[0]]?.sections[i]?.image)
    : undefined;
  const pageImg = cover ? baseImg : (sectionImg || baseImg);
  const pageIdx = cover ? 0 : i;
  
  // Layout alternant : Taadidi = séquentiel (original), autres séries = random seeded par index
  let imgLeft = false;
  if (serieEp) {
    // Taadidi : alternance séquentielle
    imgLeft = (pageIdx % 2 === 0) === (cote === "gauche");
  } else if (!cover) {
    // Autres séries (Point Zéro, G2040) : random seeded par index
    imgLeft = randomLayout(i) === "left";
  }

  const inner = (
    <>
      <div className="flex items-center justify-between mb-4">
        <Link to={
          (id || "").startsWith("taadidi-") ? "/serie/taadidi" :
          (id || "").startsWith("point-zero-") ? "/serie/point-zero" :
          (id || "").startsWith("g2040-") ? "/serie/generation-2040" :
          `/livre/${id}`
        } className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold hover:underline">
          <ArrowLeft size={18} /> {isSerie ? "Retour à la série" : "Retour au livre"}
        </Link>
        {!cover && <span className="font-display font-semibold text-[#5a6b62] text-sm">{i + 1} / {total}</span>}
      </div>

      {/* Sélecteur de langue */}
      <div className="flex flex-wrap gap-2 mb-6">
        {reader.langs.map((code) => (
          <button key={code} onClick={() => setLang(code)}
            className={`px-4 py-1.5 rounded-full font-display font-semibold text-sm transition-colors ${lang === code ? "text-white" : "bg-white text-[#0D2B1A] shadow-kid"}`}
            style={lang === code ? { background: accent } : undefined}>
            {reader.books[code].label}
          </button>
        ))}
      </div>

      {/* Barre de progression */}
      {!cover && (
        <div className="h-1.5 rounded-full bg-black/5 mb-5 overflow-hidden">
          <div className="h-full rounded-full transition-all" style={{ width: `${((i + 1) / total) * 100}%`, background: accent }} />
        </div>
      )}

      {/* Page du livre */}
      <article dir={rtl ? "rtl" : "ltr"}
        className={(!cover && split) ? "" : "rounded-[1.75rem] border-8 border-white shadow-kid px-7 py-9 md:px-10 md:py-12 min-h-[55vh]"}
        style={(!cover && split) ? undefined : { background: "#FFFDF6" }}>
        {cover ? (
          <div className="w-full">
            {/* Couverture en mode paysage (plein écran) */}
            {baseImg && (
              <img 
                src={baseImg} 
                alt={book.title}
                loading="lazy"
                className="w-full rounded-2xl shadow-lg mb-8"
                style={{ maxHeight: "60vh", objectFit: "cover" }}
              />
            )}
            {/* Infos texte sous la couverture */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6" style={{ background: `${accent}22` }}>
                <BookOpen size={32} style={{ color: accent }} />
              </div>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-[#0D2B1A] mb-3">{book.title}</h1>
              {book.subtitle && <p className={readerClass} style={{ fontSize: "1.05rem", color: "#5a6b62" }}>{book.subtitle}</p>}
              {tagline && <p className={readerClass} style={{ fontSize: "1rem", color: accent, marginTop: "0.75rem", fontStyle: "italic" }}>{tagline}</p>}
            </div>
          </div>
        ) : (
          <>
            {/* En double page, l'illustration occupe l'autre moitié : pas d'image en ligne */}
            {!split && (() => {
              const img = reader.books.fr?.sections[i]?.image || reader.books[reader.langs[0]]?.sections[i]?.image;
              return img ? <img src={img} alt={scene!.title} loading="lazy" className="w-full rounded-2xl mb-6 shadow-sm" /> : null;
            })()}
            {scene!.title && <h2 className={`font-display font-bold text-2xl md:text-3xl mb-6 ${rtl ? "text-right" : ""}`} style={{ color: accent }}>{scene!.title}</h2>}
            <div className={`${readerClass} ${lang === "fr" || lang === "en" ? "reader-drop" : ""}`} style={{ ["--accent" as any]: accent }}>
              {scene!.paragraphs.map((p, k) => <p key={k}>{p}</p>)}
            </div>
          </>
        )}
      </article>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button onClick={() => go(-1)} disabled={cover}
          className={`btn-kid bg-white text-[#0D2B1A] shadow-kid text-sm py-2.5 px-5 ${cover ? "opacity-40 pointer-events-none" : ""}`}>
          <ChevronLeft size={18} /> Précédent
        </button>
        {i + 1 < total ? (
          <button onClick={() => go(1)} className="btn-kid text-white text-sm py-2.5 px-6" style={{ background: accent }}>
            {cover ? "Commencer" : "Suivant"} <ChevronRight size={18} />
          </button>
        ) : isSerie ? (() => {
          // Logique de navigation pour toutes les séries
          if ((id || "").startsWith("taadidi-")) {
            const num = parseInt((id || "").replace("taadidi-", ""), 10);
            const next = num + 1;
            if (READERS["taadidi-" + next]) return (
              <Link to={`/livre/taadidi-${next}/lire`} className="btn-kid text-white text-sm py-2.5 px-6" style={{ background: accent }}>Continuer · Épisode {next} <ChevronRight size={18} /></Link>
            );
            if (TAADIDI.episodes.some((e) => e.numero === next)) return (
              <Link to="/serie/taadidi" className="btn-kid bg-white text-[#0D2B1A] shadow-kid text-sm py-2.5 px-6"><Hourglass size={16} /> Bientôt · Épisode {next}</Link>
            );
            return (
              <Link to="/serie/taadidi" className="btn-kid text-white text-sm py-2.5 px-6" style={{ background: accent }}><ArrowLeft size={16} /> Retour à la série</Link>
            );
          } else if ((id || "").startsWith("point-zero-")) {
            const num = parseInt((id || "").replace("point-zero-t", ""), 10);
            const next = num + 1;
            const nextTome = POINT_ZERO.tomes.find((t) => t.numero === next);
            if (nextTome && nextTome.statut === "live" && nextTome.to) return (
              <Link to={nextTome.to} className="btn-kid text-white text-sm py-2.5 px-6" style={{ background: accent }}>Continuer · Tome {next} <ChevronRight size={18} /></Link>
            );
            if (nextTome && nextTome.statut === "soon") return (
              <Link to="/serie/point-zero" className="btn-kid bg-white text-[#0D2B1A] shadow-kid text-sm py-2.5 px-6"><Hourglass size={16} /> Bientôt · Tome {next}</Link>
            );
            return (
              <Link to="/serie/point-zero" className="btn-kid text-white text-sm py-2.5 px-6" style={{ background: accent }}><ArrowLeft size={16} /> Retour à la série</Link>
            );
          }
          // G2040 et autres : retour à la série
          return (
            <Link to="/catalogue" className="btn-kid text-white text-sm py-2.5 px-6" style={{ background: accent }}><ArrowLeft size={16} /> Retour au catalogue</Link>
          );
        })() : (
          <Link to={`/livre/${id}/quiz`} className="btn-kid bg-[#0F6E56] text-white text-sm py-2.5 px-6"><Sparkles size={16} /> Quiz</Link>
        )}
      </div>

      {/* Lire avec la kora (optionnel) */}
      {koraSrc && (
        <div className="mt-7 flex flex-col items-center gap-1.5">
          <button onClick={toggleKora}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-display font-semibold text-sm shadow-kid bg-white text-[#0D2B1A] hover:bg-[#FFC93C]/30 transition-colors">
            <Music size={16} style={{ color: accent }} /> {koraOn ? "Couper la kora" : "Lire avec la kora"}
          </button>
          <span className="text-xs text-[#8a9389] font-semibold">Composition&nbsp;: Mohamed Lamine Soumah · La Kora Mystik</span>
          <audio ref={koraRef} src={koraSrc} loop preload="none" />
        </div>
      )}
    </>
  );

  // Livres hors-série : mise en page d'origine (inchangée)
  if (!split) {
    return (
      <section className="bg-[#FFF6E7] min-h-[85vh]">
        <div className="max-w-2xl mx-auto px-6 py-8">{inner}</div>
      </section>
    );
  }

  // Série Taadidi : double page « livre illustré »
  return (
    <section className="spread-stage" data-imgside={imgLeft ? "left" : "right"}>
      <div className="spread">
        <div className="spread-art">
          {pageImg && <img src={pageImg} alt="" className="spread-art-img" onError={(e) => { e.currentTarget.style.display = "none"; }} />}
        </div>
        <div className="spread-text">
          <div className="spread-textinner">{inner}</div>
        </div>
      </div>
      <style>{`
        .spread-stage{min-height:85vh;background:#FFFDF6}
        .spread{display:flex;align-items:flex-start;min-height:85vh;max-width:1500px;margin:0 auto}
        /* Illustration qui REMPLIT sa moitié (cover), bien positionnée, et COLLANTE */
        .spread-art{flex:1 1 50%;position:sticky;top:0;align-self:flex-start;
          height:100vh;overflow:hidden;background:#143d2e}
        .spread-art-img{width:100%;height:100%;object-fit:cover;object-position:center 30%}
        /* Texte : coule librement -> la PAGE scrolle, le texte n'est JAMAIS tronqué */
        .spread-text{flex:1 1 50%;background:#FFFDF6}
        .spread-textinner{width:100%;max-width:560px;margin:0 auto;padding:2.25rem 2rem}
        [data-imgside="right"] .spread-art{order:2}
        [data-imgside="right"] .spread-text{order:1}
        @media (max-width:820px){
          .spread{flex-direction:column;min-height:0}
          .spread-art{position:static;height:48vh;align-self:auto;order:1 !important}
          .spread-text{order:2 !important}
          .spread-textinner{padding:1.6rem 1.2rem}
        }
      `}</style>
    </section>
  );
}
