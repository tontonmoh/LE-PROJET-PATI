import { useState } from "react";
import { READERS, readerLabels } from "../data/readers";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Headphones, Sparkles, PlayCircle, ShoppingBag, GraduationCap, Users, Heart } from "lucide-react";
import { getBook } from "../data/books";
import { getCredits } from "../data/credits";
import { track } from "../lib/track";
import { getLivret } from "../data/fendani-livret";
import { getProjet } from "../data/chateau-projet";
import { getBlurb } from "../data/blurbs";
import { SOCIAL } from "../data/site";
import ShareButtons from "../components/ShareButtons";

export default function LivreDetail() {
  const { id } = useParams();
  const [tab, setTab] = useState<"presentation" | "livret" | "projet">("presentation");
  const book = getBook(id || "");

  if (!book) {
    return (
      <section className="bg-[#FFF6E7] min-h-[60vh] flex items-center">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl text-[#0D2B1A] mb-4">Livre introuvable</h1>
          <Link to="/" className="btn-kid bg-[#0F6E56] text-white"><ArrowLeft size={18} /> Accueil</Link>
        </div>
      </section>
    );
  }

  const youtubeId = book.teaser?.split("/").pop()?.split("?")[0];
  const livret = getLivret(book.slug);
  const projet = getProjet(book.slug);
  const blurb = getBlurb(book.slug);
  const credits = getCredits(book.slug);
  const hasTabs = !!livret || !!projet;

  return (
    <section className="bg-[#FFF6E7]">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold mb-6 hover:underline">
          <ArrowLeft size={18} /> Tous les livres
        </Link>

        {hasTabs && (
          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => setTab("presentation")} className={`btn-kid text-sm py-2.5 px-5 ${tab === "presentation" ? "bg-[#0F6E56] text-white shadow-kid" : "bg-white text-[#0F6E56]"}`}>
              <BookOpen size={16} /> Présentation
            </button>
            {livret && (
              <button onClick={() => setTab("livret")} className={`btn-kid text-sm py-2.5 px-5 ${tab === "livret" ? "bg-[#A23B72] text-white shadow-kid" : "bg-white text-[#A23B72]"}`}>
                <GraduationCap size={16} /> Livret pédagogique
              </button>
            )}
            {projet && (
              <button onClick={() => setTab("projet")} className={`btn-kid text-sm py-2.5 px-5 ${tab === "projet" ? "bg-[#3FB6E8] text-white shadow-kid" : "bg-white text-[#1f7fa5]"}`}>
                <Users size={16} /> Le projet
              </button>
            )}
          </div>
        )}

        {(!hasTabs || tab === "presentation") && (<>
        <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-10 items-start">
          <div className="rounded-[1.75rem] overflow-hidden border-8 border-white shadow-kid bg-[#0F6E56]/5 mx-auto md:mx-0 max-w-[300px]">
            <img src={book.cover} alt={book.title} className="w-full object-cover" />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl text-[#0D2B1A] mb-3">{book.title}</h1>
            <p className="text-lg text-[#3a4a42] font-semibold mb-4 leading-relaxed">{blurb?.tagline.fr || book.description}</p>
            {blurb && (
              <div className="mb-5 space-y-2 max-w-xl">
                {blurb.blurb.fr.slice(0, -1).map((p, k) => (
                  <p key={k} className="text-[#3a4a42] leading-relaxed">{p}</p>
                ))}
                <p className="text-sm text-[#8a9389] font-semibold pt-1">{blurb.blurb.fr[blurb.blurb.fr.length - 1]}</p>
              </div>
            )}

            <div className="mb-6 text-sm text-[#5a6b62] font-semibold flex flex-wrap gap-x-4 gap-y-1">
              <span>Auteur&nbsp;: {credits.auteur}</span>
              {credits.illustrateur && <span>Illustrateur&nbsp;: {credits.illustrateur}</span>}
              {credits.musique && <span>Musique&nbsp;: {credits.musique}</span>}
              {credits.voix && <span>Voix&nbsp;: {credits.voix}</span>}
            </div>

            {book.comingSoon ? (
              <span className="inline-block font-display font-semibold text-[#633806] bg-[#FFC93C]/40 px-4 py-2 rounded-full">
                Bientôt disponible&nbsp;!
              </span>
            ) : (
              <div>
                <div className="flex flex-wrap gap-3">
                  {READERS[book.slug] ? (
                    <Link to={`/livre/${book.slug}/lire`} className="btn-kid bg-[#FF6B4A] text-white shadow-kid">
                      <BookOpen size={18} /> Lire le livre
                    </Link>
                  ) : book.pdf && (
                    <Link to={`/livre/${book.slug}/texte`} className="btn-kid bg-[#FF6B4A] text-white shadow-kid">
                      <BookOpen size={18} /> Lire le livre
                    </Link>
                  )}
                  <Link to={`/livre/${book.slug}/quiz`} className="btn-kid bg-[#FFC93C] text-[#0D2B1A]">
                    <Sparkles size={18} /> Faire le quiz
                  </Link>
                  <a href={`${SOCIAL.whatsapp}?text=${encodeURIComponent(`Bonjour, je souhaite commander le livre physique « ${book.title} » (30 000 FG).`)}`} target="_blank" rel="noopener noreferrer" onClick={() => track("achat_whatsapp", { livre: book.slug })} className="btn-kid bg-[#0F6E56] text-white">
                    <ShoppingBag size={18} /> Acheter ce livre · 30 000 FG
                  </a>
                </div>
                {READERS[book.slug] && (
                  <p className="mt-3 text-sm font-display font-semibold text-[#5a6b62]">
                    Disponible en {readerLabels(book.slug)}
                  </p>
                )}
              </div>
            )}

            {/* Partage */}
            <div className="mt-6">
              <ShareButtons title={book.title} />
            </div>

            {/* Extrait audio */}
            {book.audio && (
              <div className="mt-7 bg-white rounded-3xl p-5 shadow-kid max-w-md">
                <div className="flex items-center gap-2 font-display font-semibold text-[#0F6E56] mb-3">
                  <Headphones size={20} /> Écoute le conte
                </div>
                <audio controls preload="none" className="w-full">
                  <source src={book.audio} type="audio/mpeg" />
                </audio>
                <p className="text-xs text-[#8a9389] font-semibold mt-2">Composition : Mohamed Lamine Soumah · Lecture : à venir</p>
              </div>
            )}

            {/* Versions en langues */}
            {book.languages && book.languages.length > 0 && (
              <div className="mt-7">
                <div className="font-display font-semibold text-[#0D2B1A] mb-2">Autres langues</div>
                <div className="flex flex-wrap gap-2">
                  {book.languages.map((l) => (
                    <a key={l.label} href={l.pdf} target="_blank" rel="noopener noreferrer"
                       className="font-display font-semibold text-sm bg-[#3FB6E8]/15 text-[#0F6E56] px-4 py-2 rounded-full hover:bg-[#3FB6E8]/25 transition-colors">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Teaser vidéo */}
        {youtubeId && (
          <div className="mt-10">
            <div className="flex items-center gap-2 font-display font-semibold text-[#0D2B1A] text-xl mb-3">
              <PlayCircle className="text-[#FF6B4A]" size={24} /> Le teaser
            </div>
            <div className="rounded-[1.5rem] overflow-hidden border-8 border-white shadow-kid" style={{ aspectRatio: "16 / 9" }}>
              <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${youtubeId}`}
                title={`Teaser ${book.title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            </div>
          </div>
        )}
        </>)}

        {livret && tab === "livret" && (
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-1">{livret.title}</h2>
            {livret.subtitle && <p className="text-[#5a6b62] font-semibold mb-6 leading-relaxed">{livret.subtitle}</p>}
            <div className="space-y-5">
              {livret.sections.map((s, k) => (
                <div key={k} className="bg-white rounded-3xl p-5 md:p-6 shadow-kid">
                  <h3 className="font-display font-semibold text-[#A23B72] text-lg mb-2">{s.title}</h3>
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-[#3a4a42] leading-relaxed mb-2 last:mb-0">{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
        {projet && tab === "projet" && (
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl text-[#0D2B1A] mb-1">{projet.title}</h2>
            {projet.intro.map((p, k) => (
              <p key={k} className="text-[#3a4a42] font-semibold leading-relaxed mb-2">{p}</p>
            ))}

            <div className="space-y-5 mt-6">
              {projet.sections.map((s, k) => (
                <div key={k} className="bg-white rounded-3xl p-5 md:p-6 shadow-kid">
                  <h3 className="font-display font-semibold text-[#1f7fa5] text-lg mb-2">{s.title}</h3>
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-[#3a4a42] leading-relaxed mb-2 last:mb-0">{p}</p>
                  ))}
                </div>
              ))}
            </div>

            {projet.hommage && (
              <div className="mt-6 bg-white rounded-3xl p-5 md:p-6 shadow-kid border-l-4 border-[#3FB6E8]">
                <h3 className="font-display font-semibold text-[#1f7fa5] text-lg mb-1">{projet.hommage.titre}</h3>
                <p className="text-[#3a4a42] italic leading-relaxed mb-4">{projet.hommage.memoriam}</p>

                {projet.hommage.oeuvre.map((p, k) => (
                  <p key={k} className="text-[#3a4a42] leading-relaxed mb-2">{p}</p>
                ))}

                {projet.hommage.chiffres && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
                    {projet.hommage.chiffres.map((c, k) => (
                      <div key={k} className="bg-[#3FB6E8]/10 rounded-2xl px-3 py-3 text-center">
                        <div className="font-display font-bold text-[#1f7fa5] text-xl leading-none">{c.v}</div>
                        <div className="text-xs text-[#5a6b62] font-semibold mt-1 leading-snug">{c.l}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {projet.hommage.photos.map((ph, k) => (
                    <figure key={k} className="m-0">
                      <img src={ph.img} alt={ph.legende} className="w-full aspect-[3/4] object-cover rounded-xl" />
                      <figcaption className="text-xs text-[#5a6b62] font-semibold mt-1.5 leading-snug">{ph.legende}</figcaption>
                    </figure>
                  ))}
                </div>

                {projet.hommage.sources && projet.hommage.sources.length > 0 && (
                  <p className="text-xs text-[#8a9389] font-semibold mt-4">
                    Source&nbsp;:{" "}
                    {projet.hommage.sources.map((s, k) => (
                      <span key={k}>
                        {k > 0 && " · "}
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1f7fa5]">{s.label}</a>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            )}

            <div className="mt-6 bg-[#FFC93C]/20 border border-[#FFC93C]/50 rounded-3xl p-5 md:p-6">
              <div className="flex items-center gap-2 font-display font-semibold text-[#633806] text-lg mb-2">
                <Heart size={18} /> Éthique &amp; transparence
              </div>
              {projet.ethique.map((p, k) => (
                <p key={k} className="text-[#5a4a1a] font-semibold leading-relaxed mb-2 last:mb-0">{p}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-display font-semibold text-[#0D2B1A] text-xl mb-3">Sous la supervision de</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {projet.encadrement.map((e, k) => (
                  <div key={k} className="bg-white rounded-2xl p-4 shadow-kid">
                    {e.photo && <img src={e.photo} alt={e.nom} className="w-full aspect-square object-cover object-top rounded-xl mb-3" />}
                    <div className="font-display font-semibold text-[#0D2B1A]">{e.nom}</div>
                    <div className="text-sm text-[#5a6b62] font-semibold leading-snug mt-1">{e.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-display font-semibold text-[#0D2B1A] text-xl mb-1">Les enfants auteurs</h3>
              <p className="text-sm text-[#5a6b62] font-semibold mb-3">Trente enfants, cinq équipes, plusieurs écoles de Conakry.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {projet.enfants.map((c, k) => (
                  <div key={k} className="bg-white rounded-2xl px-4 py-3 shadow-kid">
                    <div className="font-display font-semibold text-[#0D2B1A] text-sm leading-tight">{c.nom}</div>
                    <div className="text-xs text-[#8a9389] font-semibold mt-0.5">{c.ecole}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-display font-semibold text-[#0D2B1A] text-xl mb-3">Partenaires</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {projet.partenaires.map((p, k) => (
                  <div key={k} title={p.nom} className="bg-white rounded-2xl p-4 shadow-kid flex items-center justify-center h-24">
                    {p.logo ? (
                      <img src={p.logo} alt={p.nom} className="max-h-14 max-w-[85%] object-contain" />
                    ) : (
                      <span className="font-display font-semibold text-sm text-[#1f7fa5] text-center">{p.nom}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
