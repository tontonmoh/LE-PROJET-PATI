/**
 * FOUTA THÉOCRATIQUE — Page Principale
 * Route : /fouta
 * Grille des 9 diwés avec sélection interactive
 */

import React, { useState } from 'react';
import foutaDiwals, { FoutaDiwal } from '../data/foutaQuests';
import FoutaCarte from '../components/FoutaCarte';

import FoutaQuete from '../components/FoutaQuete';

export default function FoutaPage() {
  const [selectedDiwalId, setSelectedDiwalId] = useState<string | null>(null);
  const selectedDiwal = foutaDiwals.find((d: FoutaDiwal) => d.id === selectedDiwalId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8dcc8] to-[#d4c4a8]">
      {/* Hero Section */}
      <div className="text-center py-12 px-4 bg-gradient-to-r from-[#8b6f47] to-[#6f5838] text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          FOUTA THÉOCRATIQUE
        </h1>
        <p className="text-xl text-[#f0e6d2] max-w-2xl mx-auto">
          1725–1896 · Une confédération peule islamique à 9 diwés
        </p>
        <p className="text-sm text-[#f0e6d2] mt-4">
          Découvre les 9 provinces et leurs rôles politiques fascinants
        </p>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Si une fiche est sélectionnée, affiche la quête */}
        {selectedDiwal ? (
          <div className="mb-8">
            <FoutaQuete
              diwal={selectedDiwal}
              onClose={() => setSelectedDiwalId(null)}
            />
          </div>
        ) : (
          <>
            {/* Carte */}
            <div className="mb-12">
              <FoutaCarte
                selectedDiwal={selectedDiwalId || undefined}
                onSelectDiwal={(id: string) => setSelectedDiwalId(id)}
              />
            </div>

            {/* Grille des 9 Diwés */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[#8b6f47] mb-2 text-center">
                Les 9 Diwés du Fouta
              </h2>
              <p className="text-center text-[#666] mb-8">
                Clique sur une province pour découvrir son histoire
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foutaDiwals.map((diwal: FoutaDiwal) => (
                  <button
                    key={diwal.id}
                    onClick={() => setSelectedDiwalId(diwal.id)}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
                  >
                    {/* Banneau couleur */}
                    <div
                      className="h-32 w-full group-hover:brightness-110 transition"
                      style={{
                        background: `linear-gradient(135deg, 
                          ${diwal.id === 'timbo' ? '#d4a574' : 
                            diwal.id === 'fougoumba' ? '#c9a574' :
                            diwal.id === 'labe' ? '#b8a574' :
                            diwal.id === 'bhouriya' ? '#a89574' :
                            diwal.id === 'timbi-touni' ? '#9d8574' :
                            diwal.id === 'kebali' ? '#8d8574' :
                            diwal.id === 'kollade' ? '#7d8574' :
                            diwal.id === 'koin' ? '#6d8574' : '#5d8574'} 0%, 
                          ${diwal.id === 'timbo' ? '#c9a574' : 
                            diwal.id === 'fougoumba' ? '#b8a574' :
                            diwal.id === 'labe' ? '#a89574' :
                            diwal.id === 'bhouriya' ? '#9d8574' :
                            diwal.id === 'timbi-touni' ? '#8d8574' :
                            diwal.id === 'kebali' ? '#7d8574' :
                            diwal.id === 'kollade' ? '#6d8574' :
                            diwal.id === 'koin' ? '#5d8574' : '#4d8574'} 100%)`,
                      }}
                    >
                      <div className="h-full flex items-center justify-center">
                        <span className="text-5xl group-hover:scale-110 transition">
                          {diwal.id === 'timbo' && '👑'}
                          {diwal.id === 'fougoumba' && '🕌'}
                          {diwal.id === 'labe' && '⚔️'}
                          {diwal.id === 'bhouriya' && '✨'}
                          {diwal.id === 'timbi-touni' && '📖'}
                          {diwal.id === 'kebali' && '📋'}
                          {diwal.id === 'kollade' && '🛡️'}
                          {diwal.id === 'koin' && '🐴'}
                          {diwal.id === 'fode-hadji' && '🛤️'}
                        </span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#8b6f47] mb-2">
                        {diwal.name}
                      </h3>
                      <p className="text-sm text-[#666] mb-3 line-clamp-2">
                        {diwal.role}
                      </p>
                      <p className="text-xs text-[#999] mb-4">
                        <strong>Fondateur :</strong> {diwal.founder}
                      </p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedDiwalId(diwal.id);
                        }}
                        className="w-full bg-[#8b6f47] text-white py-2 rounded font-semibold group-hover:bg-[#6f5838] transition"
                      >
                        Lire la fiche
                      </button>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Info contextuelle */}
            <div className="bg-white rounded-lg p-8 shadow-md mb-12">
              <h2 className="text-2xl font-bold text-[#8b6f47] mb-4">
                À propos du Fouta-Djalon
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#333]">
                <div>
                  <h3 className="font-bold text-[#8b6f47] mb-2">Période</h3>
                  <p className="text-sm mb-4">
                    Le Fouta-Djalon a existé comme théocratie peule de 1725 à 1896, 
                    bien avant l'arrivée de la colonisation française. C'était un 
                    système politique sophistiqué avec un pouvoir partagé entre 
                    deux familles.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#8b6f47] mb-2">Organisation Politique</h3>
                  <p className="text-sm mb-4">
                    Les 9 diwés fonctionnaient comme une confédération. Chacune avait 
                    un rôle spécifique dans la gouvernance. L'Almamy (chef suprême) 
                    alternait entre deux familles tous les 2 ans : les Alphaya et les Soriya.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#8b6f47] mb-2">Centre d'Enseignement</h3>
                  <p className="text-sm">
                    Le Fouta était un grand centre d'apprentissage islamique. Des 
                    savants venaient de tout l'Afrique de l'Ouest pour y étudier le 
                    Coran et la théologie musulmane. Fougoumba était particulièrement 
                    renommée.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#8b6f47] mb-2">Économie</h3>
                  <p className="text-sm">
                    Le Fouta était un carrefour commercial majeur. Les montagnes 
                    produisaient d'excellents pâturages pour le bétail, et les routes 
                    commerciales reliaient le Fouta au Mali, au Sénégal et à la côte 
                    atlantique.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#8b6f47] text-white text-center py-6 px-4 mt-12">
        <p className="text-sm">
          <strong>Fouta Théocratique</strong> · Encyclopédie Pati 2026
        </p>
        <p className="text-xs mt-2 text-[#f0e6d2]">
          Basé sur des sources : webfuuta.site, UNESCO, historiographie ouest-africaine
        </p>
      </div>
    </div>
  );
}
