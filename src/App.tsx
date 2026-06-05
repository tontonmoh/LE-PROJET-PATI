import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Stub from "./pages/Stub";
import Home from "./pages/Home";
import BintaDiallo from "./pages/BintaDiallo";
import LivreDetail from "./pages/LivreDetail";
import BookReader from "./pages/BookReader";
import BookQuiz from "./pages/BookQuiz";
import BookReaderML from "./pages/BookReaderML";
import Catalogue from "./pages/Catalogue";
import AudioBibliotheque from "./pages/AudioBibliotheque";
import DecouvrirTonGenie from "./pages/DecouvrirTonGenie";
import BilanSimandou from "./pages/BilanSimandou";
import ChallengePati from "./pages/ChallengePati";
import EspaceConteurs from "./pages/EspaceConteurs";
import EspaceEnseignants from "./pages/EspaceEnseignants";
import EspaceParents from "./pages/EspaceParents";
import EspaceArtistes from "./pages/EspaceArtistes";
import ClubsPati from "./pages/ClubsPati";
import AtelierSolidaire from "./pages/AtelierSolidaire";
import Sobela from "./pages/Sobela";
import ImpactReport from "./pages/ImpactReport";
import Contribuer from "./pages/Contribuer";
import Collaboration from "./pages/Collaboration";
import AppliMobile from "./pages/AppliMobile";
import Personnalisation from "./pages/Personnalisation";
import LeDefi from "./pages/LeDefi";
import AccesPati from "./pages/AccesPati";
import Auth from "./pages/Auth";
import Langue from "./pages/Langue";
import FAQ from "./pages/FAQ";
import SimplePage from "./pages/SimplePage";

const SIMPLE = ["a-propos", "partenaires", "presse", "contact", "charte", "developpeurs", "hors-ligne", "zero-data", "populaire-par-pays"];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/binta-diallo" element={<BintaDiallo />} />
        <Route path="/livre/:id/lire" element={<BookReaderML />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/bibliotheque" element={<Catalogue />} />
        <Route path="/livre/:id" element={<LivreDetail />} />
        <Route path="/livre/:id/texte" element={<BookReader />} />
        <Route path="/livre/:id/quiz" element={<BookQuiz />} />
        <Route path="/audio" element={<AudioBibliotheque />} />
        <Route path="/audio/:id" element={<AudioBibliotheque />} />

        <Route path="/decouvrir-son-genie" element={<DecouvrirTonGenie />} />
        <Route path="/orientation" element={<DecouvrirTonGenie />} />
        <Route path="/orientation/questionnaire" element={<BilanSimandou />} />
        <Route path="/challenge" element={<ChallengePati />} />

        <Route path="/espace-conteurs" element={<EspaceConteurs />} />
        <Route path="/espace-enseignants" element={<EspaceEnseignants />} />
        <Route path="/espace-parents" element={<EspaceParents />} />
        <Route path="/espace-artistes" element={<EspaceArtistes />} />
        <Route path="/clubs" element={<ClubsPati />} />

        <Route path="/atelier-solidaire" element={<AtelierSolidaire />} />
        <Route path="/sobela" element={<Sobela />} />
        <Route path="/impact" element={<ImpactReport />} />
        <Route path="/contribuer" element={<Contribuer />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/appli-mobile" element={<AppliMobile />} />
        <Route path="/personnalisation" element={<Personnalisation />} />
        <Route path="/defi" element={<LeDefi />} />
        <Route path="/assistance" element={<FAQ />} />

        <Route path="/abonnement" element={<AccesPati />} />
        <Route path="/acces/free" element={<AccesPati />} />
        <Route path="/acces/freemium" element={<AccesPati />} />
        <Route path="/acces/famille" element={<AccesPati />} />
        <Route path="/acces/ecole" element={<AccesPati />} />
        <Route path="/compte" element={<Auth mode="compte" />} />
        <Route path="/connexion" element={<Auth mode="connexion" />} />
        <Route path="/inscription" element={<Auth mode="inscription" />} />

        <Route path="/langue" element={<Langue />} />
        <Route path="/langues" element={<Langue />} />

        {SIMPLE.map((slug) => (
          <Route key={slug} path={`/${slug}`} element={<SimplePage slug={slug} />} />
        ))}

        <Route path="*" element={<Stub title="Page introuvable" />} />
      </Route>
    </Routes>
  );
}
