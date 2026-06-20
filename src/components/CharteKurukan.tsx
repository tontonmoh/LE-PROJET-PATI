import React, { useState } from 'react';
import { charteKurukan } from '@/data/charteKurukan';
import './CharteKurukan.css';

type TabType = 'resume' | 'complet';

const CharteKurukan: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState(1);
  const [activeTab, setActiveTab] = useState<TabType>('resume');

  const article = charteKurukan.find(a => a.id === activeArticle);
  
  if (!article) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Chargement...</div>;
  }

  const imageUrl = `/images/charte/${article.illustration}`;

  const handlePrevious = () => {
    if (activeArticle > 1) setActiveArticle(activeArticle - 1);
  };

  const handleNext = () => {
    if (activeArticle < 44) setActiveArticle(activeArticle + 1);
  };

  return (
    <div className="charte-container">
      {/* HEADER */}
      <header className="charte-header">
        <h1>La Charte de Kurukan Fuga</h1>
        <p className="charte-subtitle">1236 — Les 44 principes fondateurs de l'Empire du Mali</p>
        <p className="charte-source">
          Version authentique collectée à Kankan, Guinée (mars 1998) · UNESCO Patrimoine Immatériel · 2009
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="charte-article-view">
        {/* IMAGE */}
        <div className="charte-image-container">
          <img 
            src={imageUrl} 
            alt={`Article ${article.id}: ${article.titre}`}
            className="charte-image"
            loading="lazy"
          />
          <figcaption className="charte-image-caption">
            Article {article.id} : {article.titre}
          </figcaption>
        </div>

        {/* CONTENU */}
        <article className="charte-article-content">
          <div className="article-header">
            <span className="article-number">Article {article.id}</span>
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

          {/* ONGLETS */}
          <div className="charte-tabs">
            <button
              className={`tab-button ${activeTab === 'resume' ? 'active' : ''}`}
              onClick={() => setActiveTab('resume')}
            >
              Pour les enfants
            </button>
            <button
              className={`tab-button ${activeTab === 'complet' ? 'active' : ''}`}
              onClick={() => setActiveTab('complet')}
            >
              Texte complet
            </button>
          </div>

          {/* CONTENU ONGLETS */}
          <div className="tab-content">
            {activeTab === 'resume' && (
              <div className="resume-section">
                <p className="resume-text">{article.resume}</p>
              </div>
            )}

            {activeTab === 'complet' && (
              <div className="texte-section">
                <p className="texte-original">{article.texte}</p>
                {article.notesExplicatives && (
                  <div className="notes-explicatives">
                    <h3>💭 Notes explicatives</h3>
                    <p>{article.notesExplicatives}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* NAVIGATION ENTRE ARTICLES */}
          <div className="article-navigation">
            <button 
              className="nav-btn prev-btn"
              onClick={handlePrevious}
              disabled={activeArticle === 1}
            >
              ← Article précédent
            </button>

            <div className="article-counter">
              Article <span className="counter-number">{activeArticle}</span> / 44
            </div>

            <button 
              className="nav-btn next-btn"
              onClick={handleNext}
              disabled={activeArticle === 44}
            >
              Article suivant →
            </button>
          </div>

          {/* PROGRESSION */}
          <div className="charte-progress">
            <div 
              className="progress-bar" 
              style={{ width: `${(activeArticle / 44) * 100}%` }}
            ></div>
          </div>
        </article>
      </main>

      {/* FOOTER */}
      <footer className="charte-footer">
        <p>
          <strong>Source :</strong> Atelier régional de concertation entre communicateurs traditionnels et modernes, 
          Kankan, Guinée (3-12 mars 1998). Transcription et traduction par l'IRLA sous supervision de Siriman Kouyaté.
        </p>
        <p>
          <strong>Reconnaissance UNESCO :</strong> Inscrite au patrimoine immatériel de l'humanité (2009).
        </p>
      </footer>
    </div>
  );
};

export default CharteKurukan;
