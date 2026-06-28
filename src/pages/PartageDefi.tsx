import { useState, useEffect, useRef } from 'react';

// ════════════════════════════════════════════════════════════════════════════
// PartageDefi — composant réutilisable de partage social pour Le Défi
//
// Usage :
//
//   // Cas 1 : partage de complétion du puzzle
//   <PartageDefi
//     mode="completion"
//     prenom="Mariama"
//     tempsSecondes={184}
//     score={920}
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
// Prend en charge :
// - Web Share API native (mobile / iOS / Android — feuille système)
// - WhatsApp (prioritaire en Guinée)
// - Facebook
// - X / Twitter
// - Telegram
// - Copier le lien (fallback universel)
// ════════════════════════════════════════════════════════════════════════════

const URL_BASE = 'https://projetpati.com';
const DISPLAY = '"Fraunces", "Cormorant Garamond", Georgia, serif';

type ModePartage = 'completion' | 'classement';

interface PartageDefiProps {
  mode: ModePartage;
  prenom?: string;
  // Pour 'completion'
  tempsSecondes?: number;
  score?: number;
  // Pour 'classement'
  rang?: number;
  totalJoueurs?: number;
  // Optionnels
  className?: string;
  inviteCode?: string; // si on veut tracer les invitations (ex: ?ref=mariama123)
}

export default function PartageDefi({
  mode,
  prenom,
  tempsSecondes,
  score,
  rang,
  totalJoueurs,
  className = '',
  inviteCode,
}: PartageDefiProps) {
  const [ouvert, setOuvert] = useState(false);
  const [copie, setCopie] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // ─── Construction du texte et de l'URL ────────────────────────────────
  const url = inviteCode
    ? `${URL_BASE}/defi?ref=${encodeURIComponent(inviteCode)}`
    : `${URL_BASE}/defi`;

  const texte = construireTexte({ mode, prenom, tempsSecondes, score, rang, totalJoueurs });

  // ─── Fermer le popover si on clique en dehors ─────────────────────────
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

  // ─── Web Share API native (mobile) ────────────────────────────────────
  const partagerNatif = async () => {
    if (typeof navigator === 'undefined' || !navigator.share) {
      setOuvert(true); // fallback popover desktop
      return;
    }
    try {
      await navigator.share({ title: 'Projet Pati — Le Défi', text: texte, url });
    } catch {
      // L'utilisateur a annulé, on ne fait rien
    }
  };

  // ─── Copier le lien ───────────────────────────────────────────────────
  const copierLien = async () => {
    try {
      await navigator.clipboard.writeText(`${texte} ${url}`);
      setCopie(true);
      setTimeout(() => setCopie(false), 2500);
    } catch {
      // Échec du clipboard — pas critique
    }
  };

  // ─── Liens vers les réseaux ───────────────────────────────────────────
  const t = encodeURIComponent(texte);
  const u = encodeURIComponent(url);
  const liens = {
    whatsapp: `https://wa.me/?text=${t}%20${u}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}&quote=${t}`,
    twitter:  `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
    telegram: `https://t.me/share/url?url=${u}&text=${t}`,
  };

  // Si Web Share API dispo, on s'en sert. Sinon popover desktop.
  const aWebShare = typeof navigator !== 'undefined' && 'share' in navigator;

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={aWebShare ? partagerNatif : () => setOuvert((v) => !v)}
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

      {/* ─── Popover desktop (si pas de Web Share API) ─── */}
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
            <BoutonReseau href={liens.whatsapp} couleur="#25D366" label="WhatsApp" icone={<IconeWhatsApp />} />
            <BoutonReseau href={liens.facebook} couleur="#1877F2" label="Facebook" icone={<IconeFacebook />} />
            <BoutonReseau href={liens.twitter} couleur="#000000" label="X" icone={<IconeX />} />
            <BoutonReseau href={liens.telegram} couleur="#26A5E4" label="Telegram" icone={<IconeTelegram />} />
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
// Texte de partage
// ════════════════════════════════════════════════════════════════════════════

function construireTexte({
  mode,
  prenom,
  tempsSecondes,
  score,
  rang,
  totalJoueurs,
}: {
  mode: ModePartage;
  prenom?: string;
  tempsSecondes?: number;
  score?: number;
  rang?: number;
  totalJoueurs?: number;
}): string {
  const moi = prenom ? prenom : 'Moi';

  if (mode === 'completion') {
    const temps = tempsSecondes ? ` en ${formatTemps(tempsSecondes)}` : '';
    const pts = score ? ` (${score} points)` : '';
    return `🇬🇳 ${moi} a complété le puzzle de la Guinée${temps}${pts} sur Le Défi Pati ! À toi de jouer 👉`;
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

function formatTemps(secondes: number): string {
  if (secondes < 60) return `${secondes}s`;
  const min = Math.floor(secondes / 60);
  const s = secondes % 60;
  return s === 0 ? `${min} min` : `${min} min ${s.toString().padStart(2, '0')}`;
}

// ════════════════════════════════════════════════════════════════════════════
// Sous-composants UI
// ════════════════════════════════════════════════════════════════════════════

function BoutonReseau({
  href,
  couleur,
  label,
  icone,
}: {
  href: string;
  couleur: string;
  label: string;
  icone: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
      style={{ background: couleur }}
      aria-label={`Partager sur ${label}`}
    >
      {icone}
      <span>{label}</span>
    </a>
  );
}

// ─── Icônes inline (pour éviter une dépendance externe) ──────────────────

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

function IconeWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.7 2.9 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
    </svg>
  );
}

function IconeFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z"/>
    </svg>
  );
}

function IconeX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function IconeTelegram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.6 7l-1.5 7.2c-.1.5-.4.6-.8.4l-2.3-1.7-1.1 1.1c-.1.1-.2.2-.4.2l.2-2.4 4.4-4c.2-.2 0-.3-.3-.1L9.4 13l-2.3-.7c-.5-.2-.5-.5.1-.7l9-3.5c.4-.1.8.1.7.6z"/>
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
