import { Link } from "react-router-dom";
import { Facebook, Users, Instagram, Youtube, ChevronRight, Compass, MessageCircle, LifeBuoy, Ticket } from "lucide-react";
import { SOCIAL } from "../data/site";

export default function Footer() {
  return (
    <footer className="pati-footer">
      <div className="pf-inner">
        {/* Logo + tagline */}
        <div className="pf-logo-row">
          <div className="pf-logo">
            <Link to="/" className="flex items-center gap-4">
              <img src="/images/pati-logo-main.png" alt="PATI — Bâtir la Génération 2040" className="h-20 w-auto" />
              <div>
                <div className="pf-tagline">
                  L'Atelier Solidaire — Conakry, Guinée
                  <br />
                  Édition jeunesse guinéenne
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Grille 4 colonnes */}
        <div className="pf-grid">
          {/* Colonne 1 — Le Projet */}
          <div>
            <div className="pf-col-title"><Compass size={13} /> Le Projet</div>
            <Link to="/a-propos" className="pf-link">À propos</Link>
            <Link to="/atelier-solidaire" className="pf-link">L'Atelier Solidaire</Link>
            <Link to="/partenaires" className="pf-link">Partenaires</Link>
            <Link to="/presse" className="pf-link">Presse &amp; médias<span className="pf-badge pf-badge-soon">Bientôt</span></Link>
            <Link to="/collaboration" className="pf-link">Offres de collaboration</Link>
            <Link to="/personnalisation" className="pf-link">Créations personnalisées</Link>
            <div className="pf-divider" />
            <div className="pf-col-title"><MessageCircle size={13} /> Contact</div>
            <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="pf-link">
              WhatsApp · +224 611 27 23 23
            </a>
            <div className="pf-social-row">
              <a href={SOCIAL.facebookPati} target="_blank" rel="noopener noreferrer" className="pf-social" aria-label="Facebook PATI">
                <Facebook size={16} />
              </a>
              <a href={SOCIAL.facebookAtelier} target="_blank" rel="noopener noreferrer" className="pf-social" aria-label="Facebook L'Atelier Solidaire">
                <Users size={16} />
              </a>
              <a
                href={SOCIAL.instagram || "#"}
                {...(SOCIAL.instagram ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="pf-social"
                aria-label={SOCIAL.instagram ? "Instagram PATI" : "Instagram (bientôt)"}
              >
                <Instagram size={16} />
              </a>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="pf-social" aria-label="YouTube Le Projet PATI">
                <Youtube size={16} />
              </a>
              <a
                href={SOCIAL.tiktok || "#"}
                {...(SOCIAL.tiktok ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="pf-social"
                aria-label={SOCIAL.tiktok ? "TikTok PATI" : "TikTok (bientôt)"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.84 4.48V12.2a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.17-.15v-3.48z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Colonne 2 — Communautés */}
          <div>
            <div className="pf-col-title"><Users size={13} /> Communautés</div>
            <Link to="/espace-conteurs" className="pf-link">Espace conteurs<span className="pf-badge pf-badge-new">Nouveau</span></Link>
            <Link to="/espace-enseignants" className="pf-link">Espace enseignants</Link>
            <Link to="/espace-parents" className="pf-link">Espace parents</Link>
            <Link to="/espace-artistes" className="pf-link">Espace artistes &amp; animateurs<span className="pf-badge pf-badge-soon">Bientôt</span></Link>
            <Link to="/clubs" className="pf-link">Clubs PATI — écoles</Link>
            <Link to="/developpeurs" className="pf-link">Développeurs &amp; API<span className="pf-badge pf-badge-soon">Bientôt</span></Link>
          </div>

          {/* Colonne 3 — Ressources */}
          <div>
            <div className="pf-col-title"><LifeBuoy size={13} /> Ressources</div>
            <Link to="/assistance" className="pf-link">Assistance &amp; FAQ</Link>
            <Link to="/appli-mobile" className="pf-link">Appli mobile gratuite</Link>
            <Link to="/hors-ligne" className="pf-link">Accès hors-ligne<span className="pf-badge pf-badge-soon">Bientôt</span></Link>
            <Link to="/zero-data" className="pf-link">Accès Zero Data<span className="pf-badge pf-badge-soon">Bientôt</span></Link>
            <Link to="/populaire-par-pays" className="pf-link">Populaire par pays</Link>
            <Link to="/langue" className="pf-link">Choisir ma langue</Link>
          </div>

          {/* Colonne 4 — Accès PATI */}
          <div>
            <div className="pf-col-title"><Ticket size={13} /> Accès PATI</div>
            <Link to="/acces/free" className="pf-access-card">
              <div>
                <div className="pf-access-name">PATI Free<span className="pf-badge pf-badge-free">Gratuit</span></div>
                <div className="pf-access-desc">Accès limité · Sans inscription</div>
              </div>
              <ChevronRight size={16} className="pf-chevron" />
            </Link>
            <Link to="/acces/freemium" className="pf-access-card">
              <div>
                <div className="pf-access-name">PATI Freemium</div>
                <div className="pf-access-desc">Accès élargi · Compte gratuit</div>
              </div>
              <ChevronRight size={16} className="pf-chevron" />
            </Link>
            <Link to="/acces/famille" className="pf-access-card">
              <div>
                <div className="pf-access-name">PATI Famille</div>
                <div className="pf-access-desc">Jusqu'à 6 profils enfants</div>
              </div>
              <ChevronRight size={16} className="pf-chevron" />
            </Link>
            <Link to="/acces/ecole" className="pf-access-card pf-access-card--featured">
              <div>
                <div className="pf-access-name">PATI École</div>
                <div className="pf-access-desc">Accès institutionnel · MEN</div>
              </div>
              <ChevronRight size={16} className="pf-chevron" />
            </Link>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="pf-bottom">
          <div className="pf-copyright">© 2025 L'Atelier Solidaire · Conakry, Guinée</div>
          <div className="pf-legal">
            <a href="#">Confidentialité</a>
            <a href="#">Mentions légales</a>
            <a href="#">Cookies</a>
            <a href="#">Accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
