/**
 * PartageDefi — Intégration vanille dans puzzle-guinee.html
 * 
 * Ajouter ceci DANS puzzle-guinee.html après la fonction shareResult()
 * et avant </script>
 * 
 * Usage (après victoire) :
 *   showPartageModal('completion', game.player, game.lastTime, game.lastRank);
 * 
 * Usage (depuis le classement) :
 *   showPartageModal('classement', joueur.name, 0, rang, totalJoueurs);
 */

const PARTAGE_URL_BASE = 'https://projetpati.com';

function construireTextePartage(mode, prenom, tempsSecondes, rang, totalJoueurs) {
  const moi = prenom || 'Moi';

  if (mode === 'completion') {
    // tempsSecondes est un string du type "2:34"
    let temps = '';
    if (tempsSecondes && tempsSecondes !== '—') {
      temps = ` en ${tempsSecondes}`;
    }
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

function showPartageModal(mode, prenom, tempsSecondes, rang, totalJoueurs = 0) {
  const texte = construireTextePartage(mode, prenom, tempsSecondes, rang, totalJoueurs);
  const url = `${PARTAGE_URL_BASE}/defi`;

  // Vérifier si Web Share API existe (mobile/iOS)
  const aWebShare = typeof navigator !== 'undefined' && 'share' in navigator;
  
  if (aWebShare) {
    // Afficher le menu de partage natif
    navigator
      .share({
        title: 'Projet Pati — Le Défi',
        text: texte,
        url: url,
      })
      .catch((err) => {
        // Utilisateur a annulé, pas de message d'erreur
        if (err?.name !== 'AbortError') {
          console.error('Partage failed:', err);
        }
      });
  } else {
    // Desktop : afficher un popover avec les réseaux
    showPartagePopover(mode, texte, url, prenom, tempsSecondes, rang, totalJoueurs);
  }
}

function showPartagePopover(mode, texte, url, prenom, tempsSecondes, rang, totalJoueurs) {
  // Fermer tout popover existant
  const existing = document.getElementById('partage-modal');
  if (existing) existing.remove();

  // Créer le popover
  const modal = document.createElement('div');
  modal.id = 'partage-modal';
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    padding: 20px;
    z-index: 100;
    background: rgba(10, 8, 5, 0.84);
    backdrop-filter: blur(6px);
  `;

  const sheet = document.createElement('div');
  sheet.style.cssText = `
    width: min(440px, 94vw);
    max-height: 92vh;
    overflow-y: auto;
    background: linear-gradient(180deg, #201c15, #15110b);
    border: 1px solid #1E4A35;
    border-radius: 20px;
    padding: 24px 22px;
    text-align: center;
    box-shadow: 0 40px 80px -28px #000;
    color: #FFF6E7;
    font-family: 'Nunito', system-ui, sans-serif;
  `;

  const title = document.createElement('h3');
  title.style.cssText = `
    font-family: 'Fredoka', serif;
    font-weight: 900;
    font-size: 23px;
    margin: 0 0 16px;
    color: #FFF6E7;
  `;
  title.textContent = 'Partager mon résultat';

  const grid = document.createElement('div');
  grid.style.cssText = `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  `;

  // Liens réseaux
  const t = encodeURIComponent(texte);
  const u = encodeURIComponent(url);
  const networks = [
    { name: 'WhatsApp', color: '#25D366', url: `https://wa.me/?text=${t}%20${u}` },
    { name: 'Facebook', color: '#1877F2', url: `https://www.facebook.com/sharer/sharer.php?u=${u}&quote=${t}` },
    { name: 'X', color: '#000000', url: `https://twitter.com/intent/tweet?text=${t}&url=${u}` },
    { name: 'Telegram', color: '#26A5E4', url: `https://t.me/share/url?url=${u}&text=${t}` },
  ];

  networks.forEach((net) => {
    const btn = document.createElement('a');
    btn.href = net.url;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px;
      border-radius: 12px;
      background: ${net.color};
      color: white;
      text-decoration: none;
      font-weight: 600;
      font-size: 13px;
      transition: 0.16s;
      cursor: pointer;
    `;
    btn.textContent = net.name;
    btn.onmouseover = () => (btn.style.opacity = '0.9');
    btn.onmouseout = () => (btn.style.opacity = '1');
    grid.appendChild(btn);
  });

  // Bouton copier le lien
  const copyBtn = document.createElement('button');
  copyBtn.style.cssText = `
    grid-column: 1 / -1;
    margin-top: 12px;
    padding: 12px 14px;
    background: #0E3E47;
    color: white;
    border: 1px solid #1E4A35;
    border-radius: 12px;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    transition: 0.16s;
  `;
  copyBtn.textContent = '📋 Copier le lien';
  copyBtn.onclick = async () => {
    try {
      await navigator.clipboard.writeText(`${texte} ${url}`);
      copyBtn.textContent = '✓ Copié !';
      setTimeout(() => {
        copyBtn.textContent = '📋 Copier le lien';
      }, 2500);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };
  copyBtn.onmouseover = () => (copyBtn.style.background = '#1A5E3A');
  copyBtn.onmouseout = () => (copyBtn.style.background = '#0E3E47');

  // Texte d'aperçu
  const preview = document.createElement('p');
  preview.style.cssText = `
    font-size: 10px;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid #1E4A35;
    color: #9DBBA9;
    font-style: italic;
    line-height: 1.4;
  `;
  preview.textContent = texte.substring(0, 100) + (texte.length > 100 ? '…' : '');

  sheet.appendChild(title);
  sheet.appendChild(grid);
  sheet.appendChild(copyBtn);
  sheet.appendChild(preview);
  modal.appendChild(sheet);

  // Fermer en cliquant en dehors
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };

  document.body.appendChild(modal);
}

/**
 * À ajouter dans le HTML :
 * 
 * Dans la section .win (après <div class="endbtns">):
 * 
 *   <button id="winShareBtn" style="opacity:0;animation:rise .5s .75s ease forwards">Partager</button>
 * 
 * Puis dans le JavaScript (après que finish() affiche la modale de victoire):
 * 
 *   document.getElementById('winShareBtn').onclick = () => {
 *     showPartageModal('completion', game.player, game.lastTime, game.lastRank);
 *   };
 */
