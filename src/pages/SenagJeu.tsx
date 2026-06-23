// src/pages/SenagJeu.tsx
// Page conteneur du jeu — route /senag/jeu

import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainMemoire from '../components/senag/TrainMemoire';

const SenagJeu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-slate-50">
      <TrainMemoire onBack={() => navigate('/senag')} />
    </div>
  );
};

export default SenagJeu;
