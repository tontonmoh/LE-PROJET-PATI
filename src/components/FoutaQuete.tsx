/**
 * FOUTA — Composant Quête Interactif
 * Affiche une fiche diwal avec versions enfant/adulte, faits illustrés, lightbox
 * 
 * Modèle : MansayaQuete.tsx adapté pour Fouta
 */

import React, { useState } from 'react';
import { FoutaDiwal, FoutaFact } from '../data/foutaQuests';

interface FoutaQueteProps {
  diwal: FoutaDiwal;
  onClose?: () => void;
}

interface LightboxState {
  isOpen: boolean;
  fact?: FoutaFact;
}

const DIWAL_META: Record<string, { icon: string; from: string; to: string }> = {
  'timbo':        { icon: '👑', from: '#d4a574', to: '#8b6f47' },
  'fougoumba':    { icon: '🕌', from: '#c9a574', to: '#6f5838' },
  'labe':         { icon: '⚔️', from: '#b8703a', to: '#6f3818' },
  'bhouriya':     { icon: '✨', from: '#caa94a', to: '#8b6f1f' },
  'timbi-touni':  { icon: '📖', from: '#9d8574', to: '#5d4a38' },
  'kebali':       { icon: '📋', from: '#8d9574', to: '#4a5838' },
  'kollade':      { icon: '🛡️', from: '#7d9584', to: '#385848' },
  'koin':         { icon: '🐴', from: '#6d85a4', to: '#384a6f' },
  'fode-hadji':   { icon: '🛤️', from: '#a4795d', to: '#6f4a38' },
};

export default function FoutaQuete({ diwal, onClose }: FoutaQueteProps) {
  const meta = DIWAL_META[diwal.id] || { icon: '📜', from: '#c9a574', to: '#8b6f47' };
  const heroFact = diwal.facts[0];
  const [version, setVersion] = useState<'enfant' | 'adulte'>('adulte');
  const [lightbox, setLightbox] = useState<LightboxState>({ isOpen: false });

  const openLightbox = (fact: FoutaFact) => {
    setLightbox({ isOpen: true, fact });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false });
  };

  return (
    <div className="fouta-quete min-h-screen bg-gradient-to-b from-[#e8dcc8] to-[#d4c4a8] p-6">
      {/* En-tête */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-[#8b6f47]">{diwal.name}</h1>
          {onClose && (
            <button
              onClick={onClose}
              className="text-[#8b6f47] hover:text-[#6f5838] text-2xl"
            >
              ✕
            </button>
          )}
        </div>

        {/* Fondateur */}
        <div className="mb-6">
          <p className="text-lg text-[#333] mb-2">
            <strong>Fondateur :</strong> {diwal.founder}
          </p>
          {diwal.years && (
            <p className="text-base text-[#666]">
              <strong>Époque :</strong> {diwal.years}
            </p>
          )}
          <p className="text-base text-[#666] mt-2">
            <strong>Rôle :</strong> {diwal.role}
          </p>
        </div>

        {/* Sélecteur de version */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setVersion('enfant')}
            className={`px-6 py-2 rounded font-semibold transition ${
              version === 'enfant'
                ? 'bg-[#c9a574] text-white'
                : 'bg-white text-[#8b6f47] border-2 border-[#c9a574] hover:bg-[#f5f0e8]'
            }`}
          >
            Version Enfant
          </button>
          <button
            onClick={() => setVersion('adulte')}
            className={`px-6 py-2 rounded font-semibold transition ${
              version === 'adulte'
                ? 'bg-[#8b6f47] text-white'
                : 'bg-white text-[#8b6f47] border-2 border-[#8b6f47] hover:bg-[#f5f0e8]'
            }`}
          >
            Version Adulte
          </button>
        </div>
      </div>

      {/* Contenu du texte — mise en page illustrée 2 colonnes */}
      <div className="max-w-5xl mx-auto mb-12 grid md:grid-cols-[300px_1fr] gap-6 items-start">
        {/* Vignette héro du diwal (sticky en desktop) */}
        <div className="md:sticky md:top-6">
          <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-200">
            {/* fallback coloré toujours présent dessous */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: `linear-gradient(150deg, ${meta.from} 0%, ${meta.to} 100%)` }}
            >
              <span className="text-7xl opacity-90">{meta.icon}</span>
            </div>
            {/* image héro si disponible */}
            {heroFact && (
              <img
                src={heroFact.imageUrl}
                alt={diwal.name}
                className="absolute inset-0 w-full h-full object-cover z-10"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            )}
            {/* bandeau nom en bas */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-bold text-lg leading-none">{diwal.name}</p>
              <p className="text-white/80 text-xs mt-1">{diwal.years}</p>
            </div>
          </div>
        </div>

        {/* Le récit */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <p className="text-[#333] leading-relaxed whitespace-pre-wrap text-[1.02rem]">
            {version === 'enfant' ? diwal.versions.enfant : diwal.versions.adulte}
          </p>
        </div>
      </div>

      {/* Faits Illustrés */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-[#8b6f47] mb-8">Faits Illustrés</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diwal.facts.map((fact: FoutaFact) => (
            <button
              key={fact.id}
              onClick={() => openLightbox(fact)}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                <img
                  src={fact.imageUrl}
                  alt={fact.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition z-10"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Placeholder si image manquante */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a574] to-[#8b6f47] flex items-center justify-center opacity-30">
                  <span className="text-white text-4xl">📸</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#8b6f47] text-base mb-2 group-hover:text-[#6f5838]">
                  {fact.title}
                </h3>
                <p className="text-sm text-[#666] line-clamp-2">{fact.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && lightbox.fact && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
          onClick={closeLightbox}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative h-64 w-full bg-gray-200">
              <img
                src={lightbox.fact.imageUrl}
                alt={lightbox.fact.title}
                className="absolute inset-0 w-full h-full object-cover z-10"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a574] to-[#8b6f47] flex items-center justify-center opacity-20">
                <span className="text-white text-6xl">📸</span>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-[#8b6f47] mb-2">{lightbox.fact.title}</h2>
              <p className="text-[#999] text-sm mb-4">Fact ID: {lightbox.fact.id}</p>
              <p className="text-lg text-[#333] mb-4">{lightbox.fact.description}</p>
              <div className="bg-[#f5f0e8] p-4 rounded mb-6 border-l-4 border-[#c9a574]">
                <p className="text-[#666] italic">{lightbox.fact.caption}</p>
              </div>
              {lightbox.fact.source && (
                <p className="text-sm text-[#999] mt-4">
                  <strong>Source :</strong> {lightbox.fact.source}
                </p>
              )}
              <button
                onClick={closeLightbox}
                className="mt-6 w-full bg-[#8b6f47] text-white px-6 py-3 rounded font-semibold hover:bg-[#6f5838] transition"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
