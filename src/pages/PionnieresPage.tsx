// ════════════════════════════════════════════════════════════════
//  GINÈ — La Guinée des Pionnières
//  Routes : /pionnieres (accueil one-page) et /pionnieres/:slug (fiche)
//  Accueil : grille de portraits ; au survol, mini-bio + « Découvrir plus »
//  Fiche : portrait, capsule YouTube, biographie complète
//  Palette alignée sur la couverture GINÈ (rouge, indigo, ocre, crème)
//  DÉPÔT : src/pages/PionnieresPage.tsx
// ════════════════════════════════════════════════════════════════
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PIONNIERES_VISIBLES, type Pionniere } from "../data/pionnieres";

const C = {
  rouge: "#A8162E",
  rougeVif: "#C8102E",
  indigo: "#233A6B",
  ocre: "#C9973B",
  creme: "#F6EEDC",
  encre: "#1A1410",
};

const COVER = "/images/encyclopedies/gine-cover.jpg";

const initiales = (p: Pionniere) =>
  p.nom.replace(/^Hadja /, "").split(" ").map((m) => m[0]).slice(0, 2).join("");

// Image de la tuile : photo si fournie, sinon la miniature de la capsule YouTube
const imageDe = (p: Pionniere) =>
  p.photo || (p.youtube ? `https://i.ytimg.com/vi/${p.youtube}/hqdefault.jpg` : "");

const nomFiche = (p: Pionniere) => `${p.vivante ? "" : "Feue "}${p.nom}`;

// ─── Lecteur YouTube léger : miniature d'abord, lecteur chargé au clic ───
function YouTubeCapsule({ id, titre }: { id: string; titre: string }) {
  const [actif, setActif] = useState(false);
  if (actif) {
    return (
      <iframe
        className="gine-video"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={`Capsule : ${titre}`}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        style={{ border: 0 }}
      />
    );
  }
  return (
    <button className="gine-video gine-yt" onClick={() => setActif(true)} aria-label={`Lire la capsule : ${titre}`}>
      <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
      <span className="gine-play" aria-hidden="true">▶</span>
    </button>
  );
}

// ─── Accueil one-page ───
function Accueil() {
  return (
    <>
      <header className="gine-hero">
        <div className="gine-hero-texte">
          <p className="gine-sur">L'Encyclopédie Guinée · Projet Pati</p>
          <h1>GINÈ</h1>
          <p className="gine-titre-fr">Les Pionnières</p>
          <p className="gine-devise">
            Honorer celles d'hier. Reconnaître celles d'aujourd'hui. Inspirer celles de demain.
          </p>
        </div>
        <img className="gine-hero-img" src={COVER} alt="Deux femmes guinéennes tiennent ensemble un flambeau" />
      </header>

      <main className="gine-grille" aria-label="Les pionnières">
        {PIONNIERES_VISIBLES.map((p) => {
          const img = imageDe(p);
          return (
            <Link key={p.slug} to={`/pionnieres/${p.slug}`} className="gine-tuile">
              <div className="gine-cadre">
                {img ? <img src={img} alt="" loading="lazy" /> : <span className="gine-mono">{initiales(p)}</span>}
                <div className="gine-survol" aria-hidden="true">
                  <p>{p.chapeau}</p>
                  <span className="gine-plus">Découvrir plus →</span>
                </div>
              </div>
              <span className="gine-nom">{p.nom}</span>
            </Link>
          );
        })}
      </main>
    </>
  );
}

// ─── Fiche individuelle ───
function Fiche({ slug }: { slug: string }) {
  const i = PIONNIERES_VISIBLES.findIndex((p) => p.slug === slug);
  const p = PIONNIERES_VISIBLES[i];

  if (!p) {
    return (
      <div className="gine-vide">
        <p>Cette fiche n'est pas encore en ligne.</p>
        <Link to="/pionnieres">Voir toutes les pionnières</Link>
      </div>
    );
  }

  const n = PIONNIERES_VISIBLES.length;
  const prec = PIONNIERES_VISIBLES[(i - 1 + n) % n];
  const suiv = PIONNIERES_VISIBLES[(i + 1) % n];
  const url = `${window.location.origin}/pionnieres/${p.slug}`;
  const wa = `https://wa.me/?text=${encodeURIComponent(`${p.nom} — ${p.titre}. ${url}`)}`;

  return (
    <article>
      <header className="gine-fiche-tete">
        <Link to="/pionnieres" className="gine-retour">← Toutes les pionnières</Link>
        {p.photo && <img className="gine-portrait" src={p.photo} alt={`Portrait de ${p.nom}`} />}
        <h1>{nomFiche(p)}</h1>
        {p.surnom && <p className="gine-surnom">« {p.surnom} »</p>}
        {p.dates && <p className="gine-dates">{p.dates}</p>}
        <p className="gine-sous">{p.titre}</p>
      </header>

      <div className="gine-corps">
        {p.youtube ? (
          <YouTubeCapsule id={p.youtube} titre={p.nom} />
        ) : p.video ? (
          <video className="gine-video" src={p.video} controls preload="none" poster={p.photo} />
        ) : (
          <div className="gine-video gine-video-vide">Capsule bientôt en ligne</div>
        )}

        {p.lieu && <p className="gine-origine">Origine : {p.lieu}</p>}
        {p.bio.map((para, k) => <p key={k} className="gine-bio">{para}</p>)}

        <aside className="gine-ouvert">
          <p className="gine-mot">{p.mot}</p>
          <p><strong>Ce qu'elle a ouvert :</strong> {p.ouvert}</p>
        </aside>

        <div className="gine-actions">
          {p.livre && <Link className="gine-bouton" to={p.livre.url}>Lire le livre Pati : {p.livre.titre}</Link>}
          <a className="gine-bouton gine-wa" href={wa} target="_blank" rel="noreferrer">Partager sur WhatsApp</a>
        </div>

        <nav className="gine-suite" aria-label="Autres pionnières">
          <Link to={`/pionnieres/${prec.slug}`}>‹ {prec.nom}</Link>
          <Link to={`/pionnieres/${suiv.slug}`}>{suiv.nom} ›</Link>
        </nav>
      </div>
    </article>
  );
}

export default function PionnieresPage() {
  const { slug } = useParams<{ slug?: string }>();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [slug]);

  return (
    <div className="gine">
      <style>{CSS}</style>
      {slug ? <Fiche slug={slug} /> : <Accueil />}
      <p className="gine-credit">Ministère de la Femme, de la Famille et des Solidarités · L'Atelier Solidaire · Projet Pati</p>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Montserrat:wght@600;700;800&display=swap');
.gine{background:${C.creme};color:${C.encre};font-family:'Source Serif 4',Georgia,serif}
.gine *{box-sizing:border-box}
.gine a:focus-visible,.gine button:focus-visible{outline:3px solid ${C.ocre};outline-offset:3px}

/* ─── Accueil : bandeau ─── */
.gine-hero{background:${C.rouge};color:${C.creme};display:grid;grid-template-columns:1.2fr 1fr;align-items:stretch;max-height:560px;overflow:hidden}
.gine-hero-texte{padding:4rem 3rem;display:flex;flex-direction:column;justify-content:center}
.gine-sur{font-family:Montserrat,sans-serif;font-weight:700;font-size:.8rem;letter-spacing:.2em;text-transform:uppercase;color:${C.ocre};margin:0 0 1rem}
.gine-hero h1{font-family:'Playfair Display',serif;font-weight:900;font-size:clamp(3.5rem,10vw,7rem);line-height:.9;margin:0;letter-spacing:.03em}
.gine-titre-fr{font-family:'Playfair Display',serif;font-style:italic;font-size:clamp(1.4rem,3vw,2rem);margin:.4rem 0 1.5rem;color:${C.creme}}
.gine-devise{font-family:Montserrat,sans-serif;font-weight:600;line-height:1.6;max-width:30rem;margin:0;opacity:.9;border-left:3px solid ${C.ocre};padding-left:1rem}
.gine-hero-img{width:100%;height:100%;max-height:560px;object-fit:cover;object-position:center 15%;display:block}
@media (max-width:760px){
  .gine-hero{grid-template-columns:1fr;max-height:none}
  .gine-hero-texte{padding:2.5rem 1.25rem 2rem}
  .gine-hero-img{max-height:380px}
}

/* ─── Accueil : grille de portraits ─── */
.gine-grille{display:grid;grid-template-columns:repeat(4,1fr);gap:2.5rem 2rem;max-width:1200px;margin:0 auto;padding:4rem 1.5rem}
@media (max-width:1000px){.gine-grille{grid-template-columns:repeat(3,1fr)}}
@media (max-width:640px){.gine-grille{grid-template-columns:repeat(2,1fr);gap:1.75rem 1rem;padding:2.5rem 1rem}}
.gine-tuile{color:inherit;text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:1rem}
.gine-cadre{position:relative;width:100%;aspect-ratio:1/1;overflow:hidden;background:${C.indigo}}
.gine-cadre img{width:100%;height:100%;object-fit:cover;filter:grayscale(1);transition:filter .3s}
.gine-mono{position:absolute;inset:0;display:grid;place-items:center;font-family:'Playfair Display',serif;font-weight:900;font-size:4rem;color:${C.ocre}}
.gine-survol{position:absolute;inset:0;background:${C.rougeVif};color:#fff;padding:1.4rem 1.3rem;display:flex;flex-direction:column;justify-content:space-between;opacity:0;transition:opacity .25s}
.gine-survol p{font-family:Montserrat,sans-serif;font-weight:700;font-size:1rem;line-height:1.45;margin:0}
.gine-plus{font-family:Montserrat,sans-serif;font-weight:800;text-decoration:underline;text-underline-offset:4px;font-size:.95rem}
.gine-nom{font-family:Montserrat,sans-serif;font-weight:700;font-size:1.1rem;text-align:center;line-height:1.25}
@media (hover:hover){
  .gine-tuile:hover .gine-survol,.gine-tuile:focus-visible .gine-survol{opacity:1}
  .gine-tuile:hover img{filter:grayscale(0)}
}
@media (max-width:640px){.gine-survol p{font-size:.85rem}}

/* ─── Fiche ─── */
.gine-fiche-tete{background:${C.indigo};color:${C.creme};text-align:center;padding:2rem 1.5rem 2.5rem;position:relative}
.gine-retour{display:inline-block;margin-bottom:1.5rem;font-family:Montserrat,sans-serif;font-weight:700;color:${C.ocre};text-decoration:none}
.gine-portrait{display:block;width:200px;height:200px;object-fit:cover;margin:0 auto 1.5rem;border:4px solid ${C.ocre};filter:grayscale(1)}
.gine-fiche-tete h1{font-family:'Playfair Display',serif;font-weight:900;text-transform:uppercase;font-size:clamp(1.8rem,5vw,3rem);line-height:1.05;margin:0}
.gine-surnom,.gine-dates{font-family:'Playfair Display',serif;font-weight:700;font-size:clamp(1.2rem,3.5vw,1.7rem);margin:.3rem 0 0}
.gine-sous{font-family:'Playfair Display',serif;font-style:italic;font-size:1.15rem;margin:.8rem 0 0;color:${C.ocre}}
.gine-corps{max-width:46rem;margin:0 auto;padding:2.5rem 1.5rem 3rem}
.gine-video{width:100%;aspect-ratio:16/9;background:${C.encre};margin-bottom:2rem;display:block}
.gine-yt{position:relative;padding:0;border:0;cursor:pointer;overflow:hidden}
.gine-yt img{width:100%;height:100%;object-fit:cover;display:block}
.gine-play{position:absolute;inset:0;margin:auto;width:76px;height:76px;border-radius:50%;background:${C.rougeVif};color:#fff;display:grid;place-items:center;font-size:1.9rem;padding-left:6px;transition:transform .2s}
.gine-yt:hover .gine-play{transform:scale(1.08)}
.gine-video-vide{color:${C.creme};display:grid;place-items:center;font-family:Montserrat,sans-serif;font-weight:600}
.gine-origine{font-family:Montserrat,sans-serif;font-weight:700;color:${C.rouge}}
.gine-bio{font-size:1.12rem;line-height:1.75;margin:0 0 1.1rem}
.gine-ouvert{border-left:6px solid ${C.rouge};background:#fff8;padding:.8rem 1rem .8rem 1.2rem;margin:2rem 0}
.gine-ouvert p{margin:.3rem 0;line-height:1.6}
.gine-mot{font-family:'Playfair Display',serif;font-weight:900;color:${C.rougeVif};font-size:1.6rem}
.gine-actions{display:flex;flex-wrap:wrap;gap:.6rem}
.gine-bouton{font-family:Montserrat,sans-serif;font-weight:700;color:${C.creme};background:${C.indigo};padding:.8rem 1.1rem;text-decoration:none}
.gine-wa{background:${C.rouge}}
.gine-suite{display:flex;justify-content:space-between;gap:1rem;margin-top:2.5rem;border-top:2px solid ${C.ocre};padding-top:1rem}
.gine-suite a{font-family:'Playfair Display',serif;font-weight:700;color:${C.indigo};text-decoration:none}
.gine-vide{padding:5rem 1.5rem;text-align:center}
.gine-credit{text-align:center;font-family:Montserrat,sans-serif;font-size:.8rem;color:#6b5f55;margin:0;padding:1.5rem}
@media (prefers-reduced-motion:reduce){.gine *{transition:none!important}}
`;
