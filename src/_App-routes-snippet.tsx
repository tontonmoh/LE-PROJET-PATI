// Dans src/App.tsx — AJOUTER les 2 imports en haut :
import GuinePage from './pages/GuinePage';
import TerritoireFiche from './pages/TerritoireFiche';

// Puis AJOUTER les 2 routes dans <Routes> :
<Route path="/guine" element={<GuinePage />} />
<Route path="/guine/:slug" element={<TerritoireFiche />} />
