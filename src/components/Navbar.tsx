// src/components/Navbar.tsx
// Navbar allégée (15/10/2026) : Contes, Le Défi et L'Atelier retirés — le hero et le footer
// portent les entrées de contenu. Reste : recherche · Installer l'appli · Mon compte · Contribuer.
// Recherche : <SearchBar variant="desktop"> inline ≥ lg ; loupe + champ déroulé < lg.
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X, Download, UserCircle, Search } from "lucide-react";
import LowBandwidthToggle from "./LowBandwidthToggle";
import SearchBar from "./SearchBar";
import { getEncycloTheme } from "../data/encycloThemes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const loc = useLocation();
  const active = (p: string) => loc.pathname === p || loc.pathname.startsWith(p + "/");
  const theme = getEncycloTheme(loc.pathname);

  // Ferme le menu et la recherche à chaque changement de route (rotation iPad, lien tapé, retour arrière)
  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [loc.pathname]);

  return (
    <nav className="navbar" style={theme.navbar ? { background: theme.navbar } : undefined}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
        {/* Barre : 80 px sur mobile/tablette, 112 px seulement à partir de lg (≥ 1024 px) */}
        <div className="flex items-center justify-between h-20 lg:h-28 gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/images/pati-logo-white.png"
              alt="PATI — Bâtir la Génération 2040"
              className="h-14 sm:h-16 lg:h-24 w-auto"
            />
          </Link>

          {/* Recherche inline : uniquement ≥ lg. Un peu plus large qu'avant, la barre a de la place. */}
          <div className="hidden lg:block flex-1 max-w-sm">
            <SearchBar variant="desktop" />
          </div>

          {/* Liens : uniquement ≥ lg. L'iPad portrait (768 px) reste en menu burger. */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/appli-mobile"
              className={`navbar-link flex items-center gap-1.5 ${active("/appli-mobile") ? "text-white bg-white/10" : ""} bg-[#F5C518]/20 text-[#F5C518] hover:bg-[#F5C518]/30`}
            >
              <Download size={16} />Installer l'appli
            </Link>
            <Link to="/compte" className={`navbar-link flex items-center gap-1.5 ${active("/compte") ? "text-white bg-white/10" : ""}`}>
              <UserCircle size={16} />Mon compte
            </Link>
            <LowBandwidthToggle />
          </div>

          <Link
            to="/contribuer"
            className="hidden lg:flex bg-[#E8532D] hover:bg-[#C4421F] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 items-center gap-2"
          >
            <Heart size={16} />CONTRIBUER
          </Link>

          {/* Côté droit mobile/tablette : CONTRIBUER compact sur tablette + loupe + burger (zones tactiles 44 px) */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contribuer"
              className="hidden md:flex bg-[#E8532D] hover:bg-[#C4421F] text-white text-xs font-bold px-4 py-2.5 rounded-full items-center gap-2"
            >
              <Heart size={16} />CONTRIBUER
            </Link>
            <button
              onClick={() => { setSearchOpen(!searchOpen); setOpen(false); }}
              className={`text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors ${searchOpen ? "bg-white/15" : ""}`}
              aria-label={searchOpen ? "Fermer la recherche" : "Rechercher"}
              aria-expanded={searchOpen}
            >
              <Search size={24} />
            </button>
            <button
              onClick={() => { setOpen(!open); setSearchOpen(false); }}
              className="text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Recherche déroulée : mobile/tablette */}
      {searchOpen && (
        <div className="lg:hidden border-t border-white/10 px-4 sm:px-6 py-3" style={{ background: theme.navbarDark }}>
          <SearchBar variant="mobile" onClose={() => setSearchOpen(false)} />
        </div>
      )}

      {/* Menu déplié : 1 colonne sur téléphone, 2 colonnes sur tablette (md → lg) */}
      {open && (
        <div className="lg:hidden border-t border-white/10 px-4 sm:px-6 pb-4" style={{ background: theme.navbarDark }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-2">
            <Link
              to="/appli-mobile"
              className={`navbar-link py-3.5 flex items-center gap-3 ${active("/appli-mobile") ? "text-[#F5C518]" : ""}`}
              onClick={() => setOpen(false)}
            >
              <Download size={20} />Installer l'appli
            </Link>
            <Link
              to="/compte"
              className={`navbar-link py-3.5 flex items-center gap-3 ${active("/compte") ? "text-[#F5C518]" : ""}`}
              onClick={() => setOpen(false)}
            >
              <UserCircle size={20} />Mon compte
            </Link>
            <div className="py-2 flex items-center">
              <LowBandwidthToggle compact />
            </div>
          </div>

          {/* Bouton CONTRIBUER plein-largeur : seulement sur téléphone (sur tablette il est déjà dans la barre) */}
          <div className="md:hidden mt-3 pt-3 border-t border-white/20">
            <Link
              to="/contribuer"
              className="flex items-center justify-center gap-2 bg-[#E8532D] text-white py-3.5 rounded-xl text-sm font-bold"
              onClick={() => setOpen(false)}
            >
              <Heart size={18} />Contribuer au projet
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
