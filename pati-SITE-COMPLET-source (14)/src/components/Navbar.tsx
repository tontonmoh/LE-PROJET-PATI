import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Star, HelpCircle, Heart, Menu, X, Download, Puzzle } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const active = (p: string) => loc.pathname === p || loc.pathname.startsWith(p + "/");

  return (
    <nav className="navbar">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-28">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/images/pati-logo-white.png" alt="PATI — Bâtir la Génération 2040" className="h-20 md:h-24 w-auto" />
          </Link>

          {/* Liens desktop */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/binta-diallo"
              className={`navbar-link flex items-center gap-1.5 ${active("/binta-diallo") ? "text-white bg-white/10" : ""} bg-[#c4551a]/20 text-[#F5C518] hover:bg-[#c4551a]/30`}
            >
              <Star size={16} />Binta
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
            <Link to="/assistance" className={`navbar-link flex items-center gap-1.5 ${active("/assistance") ? "text-white bg-white/10" : ""}`}>
              <HelpCircle size={16} />Assistance
            </Link>
          </div>

          <Link
            to="/contribuer"
            className="hidden md:flex bg-[#E8532D] hover:bg-[#C4421F] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 items-center gap-2"
          >
            <Heart size={16} />CONTRIBUER
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-[#0A4D3C] border-t border-white/10 px-4 pb-4">
          <Link
            to="/binta-diallo"
            className={`navbar-link block py-3 mt-2 flex items-center gap-2 ${active("/binta-diallo") ? "text-[#F5C518]" : ""}`}
            onClick={() => setOpen(false)}
          >
            <Star size={18} />Binta Diallo
          </Link>
          <Link
            to="/defi"
            className={`navbar-link block py-3 flex items-center gap-2 ${active("/defi") ? "text-[#F5C518]" : ""}`}
            onClick={() => setOpen(false)}
          >
            <Puzzle size={18} />Le Défi
          </Link>
          <Link
            to="/appli-mobile"
            className={`navbar-link block py-3 flex items-center gap-2 ${active("/appli-mobile") ? "text-[#F5C518]" : ""}`}
            onClick={() => setOpen(false)}
          >
            <Download size={18} />Installer l'appli
          </Link>
          <Link
            to="/assistance"
            className={`navbar-link block py-3 flex items-center gap-2 ${active("/assistance") ? "text-[#F5C518]" : ""}`}
            onClick={() => setOpen(false)}
          >
            <HelpCircle size={18} />Assistance
          </Link>
          <div className="mt-3 pt-3 border-t border-white/20">
            <Link
              to="/contribuer"
              className="flex items-center justify-center gap-2 bg-[#E8532D] text-white py-3 rounded-xl text-sm font-bold"
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
