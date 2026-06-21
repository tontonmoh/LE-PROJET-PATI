import React, { useState } from 'react';
import { charteArticles } from '../data/charteArticles';
import './CharteViewer.css';

export default function CharteViewer() {
  const [currentId, setCurrentId] = useState(1);
  const [activeTab, setActiveTab] = useState<'resume' | 'complet'>('resume');

  const article = charteArticles.find(a => a.id === currentId);

  if (!article) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Article non trouvé</div>;
  }

  const handlePrev = () => {
    if (currentId > 1) setCurrentId(currentId - 1);
  };

  const handleNext = () => {
    if (currentId < 44) setCurrentId(currentId + 1);
  };

  return (
    <div className="charte-viewer">
      <header className="charte-header">
        <h1>Charte du Mandén</h1>
        <p className="charte-subtitle">1236 — Les 44 principes fondateurs de l'Empire du Mali</p>
        <p className="charte-source">
          Collectée à Kankan, Guinée (1998) · UNESCO Patrimoine Immatériel · 2009
        </p>
      </header>

      <main className="charte-content">
        <div className="article-display">
          <div className="article-header">
            <span className="article-num">Article {article.id}</span>
            <span className={`article-theme theme-${article.theme}`}>
              {article.theme === 'organisation' && '📜'}
              {article.theme === 'paix' && '🤝'}
              {article.theme === 'famille' && '👨‍👩‍👧'}
              {article.theme === 'biens' && '💰'}
              {article.theme === 'nature' && '🌿'}
              {article.theme === 'dispositions' && '⚖️'}
              {' '} {article.theme}
            </span>
          </div>

          <h2 className="article-title">{article.titre}</h2>

          <div className="tabs">
            <button
              className={`tab ${activeTab === 'resume' ? 'active' : ''}`}
              onClick={() => setActiveTab('resume')}
            >
              Pour les enfants
            </button>
            <button
              className={`tab ${activeTab === 'complet' ? 'active' : ''}`}
              onClick={() => setActiveTab('complet')}
            >
              Texte complet
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'resume' ? (
              <p className="article-text">{article.resume}</p>
            ) : (
              <div>
                <p className="article-text">{article.texte}</p>
                {article.notesExplicatives && (
                  <div className="notes">
                    <h3>💭 Notes explicatives</h3>
                    <p>{article.notesExplicatives}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="navigation">
            <button 
              className="btn-nav"
              onClick={handlePrev}
              disabled={currentId === 1}
            >
              ← Article précédent
            </button>

            <div className="counter">
              <strong>{currentId}</strong> / 44
            </div>

            <button 
              className="btn-nav"
              onClick={handleNext}
              disabled={currentId === 44}
            >
              Article suivant →
            </button>
          </div>

          <div className="progress-bar">
            <div className="progress" style={{ width: `${(currentId / 44) * 100}%` }}></div>
          </div>
        </div>
      </main>

      <footer className="charte-footer">
        <p>
          <strong>Source :</strong> Atelier régional de concertation, Kankan, Guinée (mars 1998) · 
          Transcription IRLA sous supervision de Siriman Kouyaté
        </p>
        <p>
          <strong>UNESCO :</strong> Patrimoine immatériel de l'humanité (2009)
        </p>
      </footer>
    </div>
  );
}
