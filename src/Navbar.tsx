import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Headphones, Heart, Menu, X, Download, Puzzle, Users, UserCircle } from "lucide-react";
import LowBandwidthToggle from "./LowBandwidthToggle";
import { getEncycloTheme } from "../data/encycloThemes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const active = (p: string) => loc.pathname === p || loc.pathname.startsWith(p + "/");
  const theme = getEncycloTheme(loc.pathname);

  // Ferme le menu à chaque changement de route (rotation iPad, lien tapé, retour arrière)
  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <nav className="navbar" style={theme.navbar ? { background: theme.navbar } : undefined}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
        {/* Barre : 80 px sur mobile/tablette, 112 px seulement à partir de lg (≥ 1024 px) */}
        <div className="flex items-center justify-between h-20 lg:h-28">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/images/pati-logo-white.png"
              alt="PATI — Bâtir la Génération 2040"
              className="h-14 sm:h-16 lg:h-24 w-auto"
            />
          </Link>

          {/* Liens complets : uniquement ≥ lg. L'iPad portrait (768 px) reste en menu burger. */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/ecouter-les-contes"
              className={`navbar-link flex items-center gap-1.5 text-[#FFC93C] hover:bg-[#FFC93C]/15 ${active("/ecouter-les-contes") ? "bg-[#FFC93C]/20" : ""}`}
            >
              <Headphones size={16} />Contes
            </Link>
            <Link to="/defi" className={`navbar-link flex items-center gap-1.5 ${active("/defi") ? "text-white bg-white/10" : ""}`}>
              <Puzzle size={16} />Le Défi
            </Link>
            <Link
              to="/appli-mobile"
              className={`navbar-link flex items-center gap-1.5 ${active("/appli-mobile") ? "text-white bg-white/10" : ""} bg-[#F5C518]/20 text-[#F5C518] hover:bg-[#F5C518]/30`}
            >
              <Download size={16} />Installer l'appli
            </Link>
            <Link to="/atelier" className={`navbar-link flex items-center gap-1.5 ${active("/atelier") ? "text-white bg-white/10" : ""}`}>
              <Users size={16} />L'Atelier
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

          {/* Côté droit mobile/tablette : CONTRIBUER compact sur tablette + burger (zone tactile 44 px) */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contribuer"
              className="hidden md:flex bg-[#E8532D] hover:bg-[#C4421F] text-white text-xs font-bold px-4 py-2.5 rounded-full items-center gap-2"
            >
              <Heart size={16} />CONTRIBUER
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu déplié : 1 colonne sur téléphone, 2 colonnes sur tablette (md → lg) */}
      {open && (
        <div className="lg:hidden border-t border-white/10 px-4 sm:px-6 pb-4" style={{ background: theme.navbarDark }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-2">
            <Link
              to="/ecouter-les-contes"
              className={`navbar-link py-3.5 flex items-center gap-3 text-[#FFC93C] ${active("/ecouter-les-contes") ? "bg-[#FFC93C]/15" : ""}`}
              onClick={() => setOpen(false)}
            >
              <Headphones size={20} />Contes
            </Link>
            <Link
              to="/defi"
              className={`navbar-link py-3.5 flex items-center gap-3 ${active("/defi") ? "text-[#F5C518]" : ""}`}
              onClick={() => setOpen(false)}
            >
              <Puzzle size={20} />Le Défi
            </Link>
            <Link
              to="/appli-mobile"
              className={`navbar-link py-3.5 flex items-center gap-3 ${active("/appli-mobile") ? "text-[#F5C518]" : ""}`}
              onClick={() => setOpen(false)}
            >
              <Download size={20} />Installer l'appli
            </Link>
            <Link
              to="/atelier"
              className={`navbar-link py-3.5 flex items-center gap-3 ${active("/atelier") ? "text-[#F5C518]" : ""}`}
              onClick={() => setOpen(false)}
            >
              <Users size={20} />L'Atelier
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
