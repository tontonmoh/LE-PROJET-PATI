// ════════════════════════════════════════════════════════════════
//  GINÈ — La Guinée des Pionnières
//  Routes : /pionnieres (accueil) et /pionnieres/:slug (fiche)
//  DÉPÔT : src/pages/PionnieresPage.tsx   (FICHIER NOUVEAU)
// ════════════════════════════════════════════════════════════════
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PIONNIERES_VISIBLES, type Pionniere } from "../data/pionnieres";

const C = {
  foret: "#1E5B3A",
  vert: "#3F7D4F",
  olive: "#8C9A5E",
  sauge: "#B3BD93",
  creme: "#F4E7C9",
  encre: "#141414",
  rouge: "#C8102E",
};

function Triangles() {
  const cols = [C.foret, C.vert, C.olive, C.sauge, C.vert, C.olive];
  const n = 14;
  return (
    <svg className="pio-tri" viewBox="0 0 1400 1000" preserveAspectRatio="none" aria-hidden="true">
      <rect width="1400" height="1000" fill={C.foret} />
      {Array.from({ length: n }).map((_, i) => {
        const w = 1400 / n;
        const x = i * w;
        return (
          <g key={i}>
            <polygon points={`${x},0 ${x + w},0 ${x + w / 2},${520 + (i % 3) * 60}`} fill={cols[i % cols.length]} />
            <polygon points={`${x},1000 ${x + w},1000 ${x + w / 2},${460 - (i % 4) * 50}`} fill={cols[(i + 3) % cols.length]} />
          </g>
        );
      })}
    </svg>
  );
}

function Portrait({ p, grand }: { p: Pionniere; grand?: boolean }) {
  const initiales = p.nom.replace(/^Hadja /, "").split(" ").map((m) => m[0]).slice(0, 2).join("");
  return (
    <div className={grand ? "pio-decoupe pio-grand" : "pio-decoupe"}>
      {p.photo ? (
        <img src={p.photo} alt={`Portrait de ${p.nom}`} loading="lazy" />
      ) : (
        <div className="pio-mono" aria-hidden="true">{initiales}</div>
      )}
    </div>
  );
}

const nomAffiche = (p: Pionniere) => `${p.vivante ? "" : "Feue "}${p.nom}`;

function Accueil() {
  return (
    <>
      <header className="pio-hero">
        <Triangles />
        <div className="pio-hero-texte">
          <p className="pio-semaine">La Semaine de la Fête nationale, 68 ans</p>
          <h1>Femmes pionnières</h1>
          <p className="pio-devise">
            Honorer celles d'hier.<br />Reconnaître celles d'aujourd'hui.<br />Inspirer celles de demain.
          </p>
        </div>
      </header>

      <main className="pio-galerie" aria-label="Les pionnières">
        {PIONNIERES_VISIBLES.map((p) => (
          <Link key={p.slug} to={`/pionnieres/${p.slug}`} className="pio-carte">
            <Portrait p={p} />
            <span className="pio-carte-nom">{nomAffiche(p)}</span>
            {p.dates && <span className="pio-carte-dates">{p.dates}</span>}
            <span className="pio-carte-titre">{p.titre}</span>
          </Link>
        ))}
      </main>
    </>
  );
}

function Fiche({ slug }: { slug: string }) {
  const i = PIONNIERES_VISIBLES.findIndex((p) => p.slug === slug);
  const p = PIONNIERES_VISIBLES[i];

  if (!p) {
    return (
      <div className="pio-vide">
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
      <header className="pio-panneau">
        <Triangles />
        <Link to="/pionnieres" className="pio-retour">Toutes les pionnières</Link>
        <Portrait p={p} grand />
        <div className="pio-cartouche">
          <h1>{nomAffiche(p)}</h1>
          {p.surnom && <p className="pio-surnom">« {p.surnom} »</p>}
          {p.dates && <p className="pio-dates">({p.dates})</p>}
          <p className="pio-titre">{p.titre}</p>
        </div>
      </header>

      <div className="pio-corps">
        {p.video ? (
          <video className="pio-video" src={p.video} controls preload="none" poster={p.photo} />
        ) : (
          <div className="pio-video pio-video-vide">Capsule bientôt en ligne</div>
        )}

        {p.lieu && <p className="pio-origine">Origine : {p.lieu}</p>}
        {p.bio.map((para, k) => <p key={k} className="pio-bio">{para}</p>)}

        <aside className="pio-ouvert">
          <p className="pio-mot">{p.mot}</p>
          <p><strong>Ce qu'elle a ouvert :</strong> {p.ouvert}</p>
        </aside>

        {p.livre && <Link className="pio-bouton" to={p.livre.url}>Lire le livre Pati : {p.livre.titre}</Link>}
        <a className="pio-bouton pio-wa" href={wa} target="_blank" rel="noreferrer">Partager sur WhatsApp</a>

        <nav className="pio-suite" aria-label="Autres pionnières">
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
    <div className="pio">
      <style>{CSS}</style>
      {slug ? <Fiche slug={slug} /> : <Accueil />}
      <p className="pio-credit">Ministère de la Femme, de la Famille et des Solidarités · L'Atelier Solidaire</p>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Montserrat:wght@600;800&display=swap');
.pio{background:${C.creme};color:${C.encre};font-family:'Source Serif 4',Georgia,serif}
.pio *{box-sizing:border-box}
.pio a:focus-visible{outline:3px solid ${C.rouge};outline-offset:3px}
.pio-tri{position:absolute;inset:0;width:100%;height:100%;z-index:0}

.pio-hero{position:relative;min-height:60vh;display:grid;place-items:center;overflow:hidden;padding:4rem 1.5rem}
.pio-hero-texte{position:relative;z-index:1;background:${C.creme};padding:2.5rem 2rem 2rem;max-width:34rem;text-align:center;clip-path:polygon(3% 6%,96% 0,100% 88%,92% 100%,5% 95%,0 14%)}
.pio-semaine{font-family:Montserrat,sans-serif;font-weight:800;color:${C.vert};margin:0 0 .5rem;font-size:.95rem}
.pio-hero h1{font-family:'Playfair Display',serif;font-weight:900;font-size:clamp(2.6rem,9vw,4.8rem);line-height:.95;margin:0 0 1.2rem}
.pio-devise{font-family:Montserrat,sans-serif;font-weight:600;color:#555;line-height:1.5;margin:0}

.pio-galerie{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:2.5rem 1.5rem;padding:3rem 1.5rem;max-width:1100px;margin:0 auto}
.pio-carte{text-align:center;color:inherit;text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:.35rem}
.pio-carte-nom{font-family:'Playfair Display',serif;font-weight:900;font-size:1.2rem;line-height:1.1;margin-top:.6rem}
.pio-carte-dates{font-family:'Playfair Display',serif;font-weight:700}
.pio-carte-titre{font-family:'Playfair Display',serif;font-style:italic;font-size:.95rem;line-height:1.3;max-width:15rem}
.pio-decoupe{width:100%;aspect-ratio:4/5;background:${C.sauge};clip-path:polygon(4% 3%,95% 0,100% 90%,90% 100%,6% 96%,0 12%);display:grid;place-items:center;overflow:hidden}
.pio-decoupe img{width:100%;height:100%;object-fit:cover;filter:grayscale(1)}
.pio-mono{font-family:'Playfair Display',serif;font-weight:900;font-size:4rem;color:${C.foret}}
.pio-carte:hover .pio-decoupe{background:${C.olive}}

.pio-panneau{position:relative;overflow:hidden;padding:4.5rem 1.5rem 0;display:flex;flex-direction:column;align-items:center}
.pio-retour{position:absolute;top:1rem;left:1rem;z-index:2;background:${C.creme};padding:.5rem .9rem;font-family:Montserrat,sans-serif;font-weight:600;color:${C.encre};text-decoration:none}
.pio-grand{position:relative;z-index:1;max-width:380px;background:${C.creme}}
.pio-grand .pio-mono{font-size:7rem}
.pio-cartouche{position:relative;z-index:1;background:${C.creme};width:100%;max-width:560px;text-align:center;padding:1.4rem 1.2rem 1.8rem;clip-path:polygon(0 0,100% 4%,98% 100%,2% 96%)}
.pio-cartouche h1{font-family:'Playfair Display',serif;font-weight:900;text-transform:uppercase;font-size:clamp(1.6rem,5.5vw,2.4rem);line-height:1.05;margin:0}
.pio-surnom,.pio-dates{font-family:'Playfair Display',serif;font-weight:900;font-size:clamp(1.3rem,4.5vw,1.9rem);margin:.2rem 0 0}
.pio-titre{font-family:'Playfair Display',serif;font-style:italic;font-size:1.15rem;margin:.5rem 0 0}

.pio-corps{max-width:38rem;margin:0 auto;padding:2.5rem 1.5rem 3rem}
.pio-video{width:100%;aspect-ratio:16/9;background:${C.foret};margin-bottom:2rem;display:block}
.pio-video-vide{color:${C.creme};display:grid;place-items:center;font-family:Montserrat,sans-serif;font-weight:600}
.pio-origine{font-family:Montserrat,sans-serif;font-weight:600;color:${C.vert}}
.pio-bio{font-size:1.12rem;line-height:1.7;margin:0 0 1.1rem}
.pio-ouvert{border-left:6px solid ${C.foret};padding:.4rem 0 .4rem 1.2rem;margin:2rem 0}
.pio-ouvert p{margin:.3rem 0;line-height:1.6}
.pio-mot{font-family:'Playfair Display',serif;font-weight:900;color:${C.rouge};font-size:1.6rem}
.pio-bouton{display:inline-block;font-family:Montserrat,sans-serif;font-weight:600;color:${C.creme};background:${C.foret};padding:.8rem 1.1rem;text-decoration:none;margin:.4rem .4rem .4rem 0}
.pio-wa{background:${C.vert}}
.pio-suite{display:flex;justify-content:space-between;gap:1rem;margin-top:2.5rem;border-top:2px solid ${C.sauge};padding-top:1rem}
.pio-suite a{font-family:'Playfair Display',serif;font-weight:700;color:${C.foret};text-decoration:none}
.pio-vide{padding:5rem 1.5rem;text-align:center}
.pio-credit{text-align:center;font-family:Montserrat,sans-serif;font-size:.8rem;color:#555;margin:0;padding:1.5rem}
`;
