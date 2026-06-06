import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, Sparkles, Music, Hourglass } from "lucide-react";
import { READERS } from "../data/readers";
import { getBlurb } from "../data/blurbs";
import { getBook } from "../data/books";
import { track } from "../lib/track";
import { recordProgress, resumePage } from "../lib/reading";
import { TAADIDI } from "../data/series/taadidi";

export default function BookReaderML() {
  const { id } = useParams();
  const isSerie = (id || "").startsWith("taadidi-");
  const reader = READERS[id || ""];
  const [lang, setLang] = useState(reader ? reader.langs[0] : "fr");
  const [i, setI] = useState(-1); // -1 = couverture

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
  // Événement + retour à la couverture quand on change de livre / épisode
  // Reprise : on ré-ouvre à la dernière page non terminée (sinon couverture)
  useEffect(() => { setI(resumePage(id || "")); if (reader) track("livre_ouvert", { livre: id }); }, [id]);
  // Remonter en haut à chaque page
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [i]);
  // Mémoriser la progression locale (dernière page atteinte = livre lu)
  useEffect(() => { if (i >= 0 && total > 0) recordProgress(id || "", i, total); }, [i, total, id]);

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

  return (
    <section className="bg-[#FFF6E7] min-h-[85vh]">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <Link to={isSerie ? "/serie/taadidi" : `/livre/${id}`} className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold hover:underline">
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
        <article dir={rtl ? "rtl" : "ltr"} className="rounded-[1.75rem] border-8 border-white shadow-kid px-7 py-9 md:px-10 md:py-12 min-h-[55vh]" style={{ background: "#FFFDF6" }}>
          {cover ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6" style={{ background: `${accent}22` }}>
                <BookOpen size={32} style={{ color: accent }} />
              </div>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-[#0D2B1A] mb-3">{book.title}</h1>
              {book.subtitle && <p className={readerClass} style={{ fontSize: "1.05rem", color: "#5a6b62" }}>{book.subtitle}</p>}
              {tagline && <p className={readerClass} style={{ fontSize: "1rem", color: accent, marginTop: "0.75rem", fontStyle: "italic" }}>{tagline}</p>}
            </div>
          ) : (
            <>
              {(() => {
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
      </div>
    </section>
  );
}
