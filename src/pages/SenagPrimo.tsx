// src/pages/SenagPrimo.tsx
// Page conteneur du jeu PriMo' — route /senag/primo

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PriMoRonde from '../components/senag/PriMoRonde';

const SenagPrimo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-amber-50">
      <PriMoRonde onBack={() => navigate('/senag')} />
    </div>
  );
};

export default SenagPrimo;
