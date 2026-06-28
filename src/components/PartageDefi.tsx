import { useState, useEffect, useRef } from 'react';

// ════════════════════════════════════════════════════════════════════════════
// PartageDefi — Composant réutilisable de partage social
//
// Usage :
//
//   // Cas 1 : partage de complétion du puzzle
//   <PartageDefi
//     mode="completion"
//     prenom="Mariama"
//     tempsSecondes={184}
//   />
//
//   // Cas 2 : partage du classement
//   <PartageDefi
//     mode="classement"
//     prenom="Mariama"
//     rang={3}
//     totalJoueurs={1247}
//   />
//
// Comporte :
// - Web Share API native sur mobile (AirDrop, Mail, Messages, WhatsApp, etc.)
// - Popover avec 4 réseaux sur desktop (WhatsApp, Facebook, X, Telegram)
// - Bouton « Copier le lien » en fallback
// - Mode debug : ?partage-debug force le popover en local pour tester
// ════════════════════════════════════════════════════════════════════════════

const URL_BASE = 'https://projetpati.com';
const DISPLAY = '"Fraunces", "Cormorant Garamond", Georgia, serif';

type ModePartage = 'completion' | 'classement';

interface PartageDefiProps {
  mode: ModePartage;
  prenom?: string;
  tempsSecondes?: number;
  rang?: number;
  totalJoueurs?: number;
  className?: string;
}

export default function PartageDefi({
  mode,
  prenom,
  tempsSecondes,
  rang,
  totalJoueurs,
  className = '',
}: PartageDefiProps) {
  const [ouvert, setOuvert] = useState(false);
  const [copie, setCopie] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const url = `${URL_BASE}/defi`;
  const texte = construireTexte({ mode, prenom, tempsSecondes, rang, totalJoueurs });

  // Fermer le popover si on clique en dehors
  useEffect(() => {
    if (!ouvert) return;
    const onClick = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setOuvert(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [ouvert]);

  const partager = async () => {
    // Mode debug : ?partage-debug force le popover
    const forcePopover = new URLSearchParams(window.location.search).has('partage-debug');

    if (typeof navigator === 'undefined' || !navigator.share || forcePopover) {
      // Desktop ou debug mode : afficher le popover
      setOuvert(true);
      return;
    }

    // Mobile : Web Share API native
    try {
      await navigator.share({
        title: 'Projet Pati — Le Défi',
        text: texte,
        url: url,
      });
    } catch (err) {
      if ((err as any)?.name !== 'AbortError') {
        console.error('Partage failed:', err);
      }
    }
  };

  const copierLien = async () => {
    try {
      await navigator.clipboard.writeText(`${texte} ${url}`);
      setCopie(true);
      setTimeout(() => setCopie(false), 2500);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  // Liens réseaux
  const t = encodeURIComponent(texte);
  const u = encodeURIComponent(url);
  const liens = {
    whatsapp: `https://wa.me/?text=${t}%20${u}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}&quote=${t}`,
    twitter: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
    telegram: `https://t.me/share/url?url=${u}&text=${t}`,
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={partager}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm md:text-base transition-all hover:scale-[1.03] active:scale-95"
        style={{
          background: '#2A7A8C',
          color: '#FFD56B',
          fontFamily: DISPLAY,
          boxShadow: '0 4px 12px rgba(13, 43, 26, 0.25)',
          border: '2px solid #0E3E47',
        }}
        aria-label="Partager mon résultat"
      >
        <IconePartage />
        <span>Partager</span>
      </button>

      {/* Popover desktop avec réseaux */}
      {ouvert && (
        <div
          ref={popoverRef}
          className="absolute z-50 mt-2 w-72 rounded-2xl p-4 shadow-2xl"
          style={{
            background: '#FFF6E7',
            border: '2px solid #2A7A8C',
            right: 0,
            top: '100%',
          }}
          role="dialog"
          aria-label="Choisir un réseau pour partager"
        >
          <p
            className="text-xs uppercase font-bold tracking-[0.2em] mb-3 text-center"
            style={{ color: '#0E3E47', fontFamily: DISPLAY }}
          >
            Partager mon résultat
          </p>

          <div className="grid grid-cols-2 gap-2">
            <BoutonReseau href={liens.whatsapp} couleur="#25D366" label="WhatsApp" />
            <BoutonReseau href={liens.facebook} couleur="#1877F2" label="Facebook" />
            <BoutonReseau href={liens.twitter} couleur="#000000" label="X" />
            <BoutonReseau href={liens.telegram} couleur="#26A5E4" label="Telegram" />
          </div>

          <button
            onClick={copierLien}
            className="mt-3 w-full px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-95"
            style={{
              background: copie ? '#1A5E3A' : '#0E3E47',
              color: 'white',
            }}
          >
            {copie ? (
              <>
                <IconeCheck /> Copié !
              </>
            ) : (
              <>
                <IconeLien /> Copier le lien
              </>
            )}
          </button>

          <p className="text-[10px] text-center mt-3 opacity-60 italic" style={{ color: '#0E3E47' }}>
            {texte.substring(0, 80)}{texte.length > 80 ? '…' : ''}
          </p>
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// Utilitaires
// ════════════════════════════════════════════════════════════════════════════

function construireTexte({
  mode,
  prenom,
  tempsSecondes,
  rang,
  totalJoueurs,
}: {
  mode: ModePartage;
  prenom?: string;
  tempsSecondes?: number;
  rang?: number;
  totalJoueurs?: number;
}): string {
  const moi = prenom ? prenom : 'Moi';

  if (mode === 'completion') {
    const temps = tempsSecondes ? ` en ${tempsSecondes}` : '';
    return `🇬🇳 ${moi} a complété le puzzle de la Guinée${temps} sur Le Défi Pati ! À toi de jouer 👉`;
  }

  // mode === 'classement'
  if (rang && totalJoueurs) {
    return `🇬🇳 ${moi} est classé·e #${rang} sur ${totalJoueurs.toLocaleString('fr-FR')} joueurs au Défi Pati ! Viens me défier 👉`;
  }
  if (rang) {
    return `🇬🇳 ${moi} est classé·e #${rang} au Défi Pati ! Viens me défier 👉`;
  }
  return `🇬🇳 ${moi} joue au Défi Pati. Tu veux essayer ? 👉`;
}

// ════════════════════════════════════════════════════════════════════════════
// Sous-composants
// ════════════════════════════════════════════════════════════════════════════

function BoutonReseau({ href, couleur, label }: { href: string; couleur: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
      style={{ background: couleur }}
      aria-label={`Partager sur ${label}`}
    >
      <span>{label}</span>
    </a>
  );
}

// ─── Icônes ────────────────────────────────────────────────────────────────

function IconePartage() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function IconeLien() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function IconeCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
