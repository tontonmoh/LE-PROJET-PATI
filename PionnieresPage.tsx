// ════════════════════════════════════════════════════════════════
//  GINÈ — La Guinée des Pionnières
//  Routes : /pionnieres (accueil one-page) et /pionnieres/:slug (fiche)
//  Accueil : grille de portraits ; au survol, mini-bio + « Découvrir plus »
//  Fiche : portrait, capsule YouTube, biographie complète
//  Palette « ministre » : bleu nuit, indigo leppi, doré, crème
//  DÉPÔT : src/pages/PionnieresPage.tsx
// ════════════════════════════════════════════════════════════════
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PIONNIERES_VISIBLES, type Pionniere } from "../data/pionnieres";

// Palette « ministre » : bleu nuit de l'indigo et doré
const C = {
  nuit: "#14244A",     // bleu nuit (fonds, bandeaux)
  indigo: "#1E3366",   // indigo leppi
  bleu: "#2E4F8F",     // bleu de texte secondaire
  or: "#C9A227",       // doré
  orFonce: "#9C7B14",  // doré lisible sur crème
  creme: "#F7F1E3",
  encre: "#14181F",
};

// Motif « leppi » : réserves claires sur indigo, façon teinture nouée du Fouta
const LEPPI_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'>
<rect width='120' height='120' fill='%231E3366'/>
<g fill='none' stroke='%23A9BCE3' stroke-opacity='.28'>
<circle cx='30' cy='30' r='14'/><circle cx='30' cy='30' r='8' stroke-dasharray='2 3'/><circle cx='30' cy='30' r='2.5' fill='%23A9BCE3' fill-opacity='.35'/>
<circle cx='90' cy='90' r='14'/><circle cx='90' cy='90' r='8' stroke-dasharray='2 3'/><circle cx='90' cy='90' r='2.5' fill='%23A9BCE3' fill-opacity='.35'/>
<path d='M0 60 Q15 54 30 60 T60 60 T90 60 T120 60' stroke-dasharray='3 4'/>
<path d='M60 0 Q66 15 60 30 T60 60 T60 90 T60 120' stroke-dasharray='1 5' stroke-opacity='.2'/>
</g>
<g fill='%23A9BCE3' fill-opacity='.22'><circle cx='90' cy='25' r='1.6'/><circle cx='97' cy='32' r='1.6'/><circle cx='83' cy='32' r='1.6'/><circle cx='25' cy='92' r='1.6'/><circle cx='32' cy='99' r='1.6'/><circle cx='18' cy='99' r='1.6'/></g>
</svg>`;
const LEPPI = `url("data:image/svg+xml,${LEPPI_SVG.replace(/\n/g, "").replace(/#/g, "%23").replace(/"/g, "'")}")`;

// Seul élément de la marque conservé sur ces pages : le logo (vérifier le chemin dans Layout.tsx)
const LOGO = "/logo-pati.png";

// Page dédiée à la ministre qui a consacré la Semaine de la fête nationale 2026 à ses aînées
const DEDICACE = {
  photo: "/images/pionnieres/ministre-aminata-kaba.jpg",
  nom: "Aminata Kaba",
  fonction: "Ministre de la Femme, de la Famille et des Solidarités",
  citation: "Chacune d'entre nous est pionnière à sa façon. Les pionnières partent de génération en génération.",
  citation2: "Moi, ma première pionnière, c'est ma mère. J'espère être la pionnière de ma fille.",
  citation3: "Osez prendre la parole, osez proposer, osez rêver grand.",
  contexte: "Panel intergénérationnel du 29 septembre 2026, Semaine de la fête nationale",
};

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
          <p className="gine-sur">Semaine de la fête nationale · 2026</p>
          <h1>GINÈ</h1>
          <p className="gine-titre-fr">Les Pionnières</p>
          <p className="gine-devise">
            Honorer celles d'hier. Reconnaître celles d'aujourd'hui. Inspirer celles de demain.
          </p>
        </div>
        <figure className="gine-hero-fig">
          <img className="gine-hero-img" src={DEDICACE.photo} alt={`${DEDICACE.nom}, ${DEDICACE.fonction}`} />
          <figcaption>{DEDICACE.nom} · {DEDICACE.fonction}</figcaption>
        </figure>
      </header>

      <section className="gine-intro" aria-label="Dédicace">
        <p className="gine-intro-texte">
          Le 29 septembre 2026, pour la Semaine de la fête nationale, le ministère de la Femme, de la Famille et des
          Solidarités a réuni des pionnières guinéennes et des jeunes autour d'un même thème : <em>« S'inspirer du passé
          pour construire ensemble l'avenir : notre jeunesse »</em>. Une exposition retraçait leurs parcours, avant un
          dialogue entre générations.
        </p>
        <p className="gine-intro-texte">
          Sciences, administration, entreprise, culture, sport, défense : ces femmes ont ouvert des portes que d'autres
          franchissent aujourd'hui. Mais pour la ministre, une pionnière n'est pas seulement celle qui a occupé de hautes
          fonctions : une mère, une grand-mère ou une tante peut l'être aussi, par les valeurs qu'elle transmet.
          Cette encyclopédie prolonge cet hommage. Elle lui est dédiée, ainsi qu'à toutes les pionnières, celles d'hier,
          celles d'aujourd'hui et celles de demain.
        </p>
        <blockquote className="gine-citation">
          <p>« {DEDICACE.citation} »</p>
          <p className="gine-citation-2">« {DEDICACE.citation2} »</p>
          <p className="gine-citation-2">« {DEDICACE.citation3} »</p>
          <footer>— {DEDICACE.nom}, {DEDICACE.fonction.toLowerCase()} · {DEDICACE.contexte}</footer>
        </blockquote>
      </section>

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
      <header className="gine-barre">
        <Link to="/pionnieres" aria-label="Retour à l'accueil des pionnières">
          <img src={LOGO} alt="Logo" />
        </Link>
      </header>
      {slug ? <Fiche slug={slug} /> : <Accueil />}
      <p className="gine-credit">Ministère de la Femme, de la Famille et des Solidarités · L'Atelier Solidaire</p>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Montserrat:wght@600;700;800&display=swap');
.gine{background:${C.creme};color:${C.encre};font-family:'Source Serif 4',Georgia,serif}
.gine *{box-sizing:border-box}
.gine{min-height:100vh}
.gine-barre{background:${C.nuit};padding:.8rem 1.5rem;display:flex;align-items:center}
.gine-barre img{height:52px;width:auto;display:block}
.gine a:focus-visible,.gine button:focus-visible{outline:3px solid ${C.or};outline-offset:3px}

/* ─── Accueil : bandeau ─── */
.gine-hero{background:${C.indigo} ${LEPPI};color:${C.creme};display:grid;grid-template-columns:1.2fr 1fr;align-items:stretch;max-height:560px;overflow:hidden}
.gine-hero-texte{padding:4rem 3rem;display:flex;flex-direction:column;justify-content:center}
.gine-sur{font-family:Montserrat,sans-serif;font-weight:700;font-size:.8rem;letter-spacing:.2em;text-transform:uppercase;color:${C.or};margin:0 0 1rem}
.gine-hero h1{font-family:'Playfair Display',serif;font-weight:900;font-size:clamp(3.5rem,10vw,7rem);line-height:.9;margin:0;letter-spacing:.03em}
.gine-titre-fr{font-family:'Playfair Display',serif;font-style:italic;font-size:clamp(1.4rem,3vw,2rem);margin:.4rem 0 1.5rem;color:${C.creme}}
.gine-devise{font-family:Montserrat,sans-serif;font-weight:600;line-height:1.6;max-width:30rem;margin:0;opacity:.9;border-left:3px solid ${C.or};padding-left:1rem}
.gine-hero-fig{position:relative;margin:0;min-height:100%}
.gine-hero-img{width:100%;height:100%;max-height:560px;object-fit:cover;object-position:center 20%;display:block}
.gine-hero-fig figcaption{position:absolute;left:0;right:0;bottom:0;padding:.6rem 1rem;background:linear-gradient(transparent,rgba(20,36,74,.85));color:${C.creme};font-family:Montserrat,sans-serif;font-weight:600;font-size:.8rem}
.gine-intro{max-width:52rem;margin:0 auto;padding:3.5rem 1.5rem 0;text-align:center}
.gine-intro-texte{font-size:1.15rem;line-height:1.75;margin:0 0 1.2rem;text-align:left}
.gine-intro-texte:last-of-type{margin-bottom:2.5rem}
.gine-citation{margin:0;padding:2rem 1.5rem;border-top:3px solid ${C.or};border-bottom:3px solid ${C.or}}
.gine-citation p{font-family:'Playfair Display',serif;font-style:italic;font-size:clamp(1.4rem,3.5vw,2rem);line-height:1.35;color:${C.nuit};margin:0}
.gine-citation .gine-citation-2{font-size:clamp(1.05rem,2.5vw,1.3rem);color:${C.bleu};margin-top:1rem}
.gine-citation footer{margin-top:1.2rem;font-family:Montserrat,sans-serif;font-weight:700;font-size:.85rem;color:#6b5f55}
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
.gine-cadre{position:relative;width:100%;aspect-ratio:1/1;overflow:hidden;background:${C.nuit};border-bottom:4px solid ${C.or}}
.gine-cadre img{width:100%;height:100%;object-fit:cover;filter:grayscale(1);transition:filter .3s}
.gine-mono{position:absolute;inset:0;display:grid;place-items:center;font-family:'Playfair Display',serif;font-weight:900;font-size:4rem;color:${C.or}}
.gine-survol{position:absolute;inset:0;background:rgba(20,36,74,.95);color:${C.creme};border:2px solid ${C.or};padding:1.4rem 1.3rem;display:flex;flex-direction:column;justify-content:space-between;opacity:0;transition:opacity .25s}
.gine-survol p{font-family:Montserrat,sans-serif;font-weight:700;font-size:1rem;line-height:1.45;margin:0}
.gine-plus{color:${C.or};font-family:Montserrat,sans-serif;font-weight:800;text-decoration:underline;text-underline-offset:4px;font-size:.95rem}
.gine-nom{font-family:Montserrat,sans-serif;font-weight:700;font-size:1.1rem;text-align:center;line-height:1.25}
@media (hover:hover){
  .gine-tuile:hover .gine-survol,.gine-tuile:focus-visible .gine-survol{opacity:1}
  .gine-tuile:hover img{filter:grayscale(0)}
}
@media (max-width:640px){.gine-survol p{font-size:.85rem}}

/* ─── Fiche ─── */
.gine-fiche-tete{background:${C.indigo} ${LEPPI};color:${C.creme};text-align:center;padding:2rem 1.5rem 2.5rem;position:relative}
.gine-retour{display:inline-block;margin-bottom:1.5rem;font-family:Montserrat,sans-serif;font-weight:700;color:${C.or};text-decoration:none}
.gine-portrait{display:block;width:200px;height:200px;object-fit:cover;margin:0 auto 1.5rem;border:4px solid ${C.or};filter:grayscale(1)}
.gine-fiche-tete h1{font-family:'Playfair Display',serif;font-weight:900;text-transform:uppercase;font-size:clamp(1.8rem,5vw,3rem);line-height:1.05;margin:0}
.gine-surnom,.gine-dates{font-family:'Playfair Display',serif;font-weight:700;font-size:clamp(1.2rem,3.5vw,1.7rem);margin:.3rem 0 0}
.gine-sous{font-family:'Playfair Display',serif;font-style:italic;font-size:1.15rem;margin:.8rem 0 0;color:${C.or}}
.gine-corps{max-width:46rem;margin:0 auto;padding:2.5rem 1.5rem 3rem}
.gine-video{width:100%;aspect-ratio:16/9;background:${C.encre};margin-bottom:2rem;display:block}
.gine-yt{position:relative;padding:0;border:0;cursor:pointer;overflow:hidden}
.gine-yt img{width:100%;height:100%;object-fit:cover;display:block}
.gine-play{position:absolute;inset:0;margin:auto;width:76px;height:76px;border-radius:50%;background:${C.or};color:${C.nuit};display:grid;place-items:center;font-size:1.9rem;padding-left:6px;transition:transform .2s}
.gine-yt:hover .gine-play{transform:scale(1.08)}
.gine-video-vide{color:${C.creme};display:grid;place-items:center;font-family:Montserrat,sans-serif;font-weight:600}
.gine-origine{font-family:Montserrat,sans-serif;font-weight:700;color:${C.bleu}}
.gine-bio{font-size:1.12rem;line-height:1.75;margin:0 0 1.1rem}
.gine-ouvert{border-left:6px solid ${C.or};background:#fff8;padding:.8rem 1rem .8rem 1.2rem;margin:2rem 0}
.gine-ouvert p{margin:.3rem 0;line-height:1.6}
.gine-mot{font-family:'Playfair Display',serif;font-weight:900;color:${C.orFonce};font-size:1.6rem}
.gine-actions{display:flex;flex-wrap:wrap;gap:.6rem}
.gine-bouton{font-family:Montserrat,sans-serif;font-weight:700;color:${C.creme};background:${C.nuit};padding:.8rem 1.1rem;text-decoration:none}
.gine-wa{background:${C.or};color:${C.nuit}}
.gine-suite{display:flex;justify-content:space-between;gap:1rem;margin-top:2.5rem;border-top:2px solid ${C.or};padding-top:1rem}
.gine-suite a{font-family:'Playfair Display',serif;font-weight:700;color:${C.nuit};text-decoration:none}
.gine-vide{padding:5rem 1.5rem;text-align:center}
.gine-credit{text-align:center;font-family:Montserrat,sans-serif;font-size:.8rem;color:#6b5f55;margin:0;padding:1.5rem}
@media (prefers-reduced-motion:reduce){.gine *{transition:none!important}}
`;
