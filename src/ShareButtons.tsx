import { useState, useEffect } from "react";
import { Share2, Link2, Check } from "lucide-react";

/* Glyphes maison (pas de dépendance aux icônes de marque). */
const WhatsAppGlyph = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.9.9-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4c.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3c-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.7 4.3 3.8 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.6-.3Z" />
  </svg>
);
const FacebookGlyph = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14 9V7.5c0-.6.4-.9 1-.9h1.2V4.2h-2C12 4.2 11 5.6 11 7.4V9H9.2v2.6H11V20h3v-8.4h2.1l.4-2.6H14Z" />
  </svg>
);

type Props = { title?: string; url?: string; className?: string };

export default function ShareButtons({ title = "Projet PATI", url, className = "" }: Props) {
  const [copied, setCopied] = useState(false);
  const [canNative, setCanNative] = useState(false);

  useEffect(() => {
    setCanNative(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, []);

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const text = `${title} — à découvrir sur Projet PATI`;
  const waHref = `https://wa.me/?text=${encodeURIComponent(`${text} ${shareUrl}`)}`;
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  const shareNative = async () => {
    try { await navigator.share({ title, text, url: shareUrl }); } catch { /* annulé */ }
  };
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard indisponible */ }
  };

  const pill = "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-display font-semibold transition-transform hover:-translate-y-0.5";

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-sm font-display font-semibold text-[#5a6b62] mr-1">Partager :</span>

      {/* WhatsApp — canal n°1 */}
      <a href={waHref} target="_blank" rel="noopener noreferrer" className={`${pill} text-white`} style={{ background: "#25D366" }}>
        <WhatsAppGlyph /> WhatsApp
      </a>

      {/* Partage natif (mobile) — ouvre le sélecteur du téléphone */}
      {canNative && (
        <button type="button" onClick={shareNative} className={`${pill} bg-[#0F6E56] text-white`}>
          <Share2 size={16} /> Partager
        </button>
      )}

      {/* Facebook */}
      <a href={fbHref} target="_blank" rel="noopener noreferrer" className={`${pill} text-white`} style={{ background: "#1877F2" }}>
        <FacebookGlyph /> Facebook
      </a>

      {/* Copier le lien */}
      <button type="button" onClick={copyLink} className={`${pill} bg-white text-[#0F6E56] border-2 border-[#0F6E56]/20`}>
        {copied ? <><Check size={16} /> Lien copié</> : <><Link2 size={16} /> Copier le lien</>}
      </button>
    </div>
  );
}
