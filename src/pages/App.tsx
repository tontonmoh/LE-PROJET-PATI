import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Stub from "./pages/Stub";
import { LiteProvider } from "./lite/LiteContext";
import InstallPati from "./components/InstallPati";
import { AuthProvider } from "./auth/AuthContext";
import WhoIsReading from "./components/WhoIsReading";
import AccountTypeGate from "./components/AccountTypeGate";
import EpisodeGabarit from "./components/EpisodeGabarit";
// Pages chargées à la demande (code-splitting par route)
const BintaDiallo = lazy(() => import("./pages/BintaDiallo"));
const LivreDetail = lazy(() => import("./pages/LivreDetail"));
const BookReader = lazy(() => import("./pages/BookReader"));
const BookQuiz = lazy(() => import("./pages/BookQuiz"));
const BookReaderML = lazy(() => import("./pages/BookReaderML"));
const UniversTaadidi = lazy(() => import("./pages/UniversTaadidi"));
const SerieG2040 = lazy(() => import("./pages/SerieG2040"));
const SeriePointZero = lazy(() => import("./pages/SeriePointZero"));
const SerieResistance = lazy(() => import("./pages/SerieResistance"));
const Catalogue = lazy(() => import("./pages/Catalogue"));
const AudioBibliotheque = lazy(() => import("./pages/AudioBibliotheque"));
const DecouvrirTonGenie = lazy(() => import("./pages/DecouvrirTonGenie"));
const BilanSimandou = lazy(() => import("./pages/BilanSimandou"));
const ChallengePati = lazy(() => import("./pages/ChallengePati"));
const EspaceConteurs = lazy(() => import("./pages/EspaceConteurs"));
const EspaceEnseignants = lazy(() => import("./pages/EspaceEnseignants"));
const EspaceParents = lazy(() => import("./pages/EspaceParents"));
const EspaceArtistes = lazy(() => import("./pages/EspaceArtistes"));
const ClubsPati = lazy(() => import("./pages/ClubsPati"));
const AtelierIA = lazy(() => import("./pages/AtelierIA"));
const AtelierSolidaire = lazy(() => import("./pages/AtelierSolidaire"));
const Sobela = lazy(() => import("./pages/Sobela"));
const ImpactReport = lazy(() => import("./pages/ImpactReport"));
const Presse = lazy(() => import("./pages/Presse"));
const Contribuer = lazy(() => import("./pages/Contribuer"));
const Collaboration = lazy(() => import("./pages/Collaboration"));
const AppliMobile = lazy(() => import("./pages/AppliMobile"));
const Personnalisation = lazy(() => import("./pages/Personnalisation"));
const LeDefi = lazy(() => import("./pages/LeDefi"));
const SessionNew = lazy(() => import("./pages/SessionNew"));
const SessionPlay = lazy(() => import("./pages/SessionPlay"));
const SessionScores = lazy(() => import("./pages/SessionScores"));
const AccesPati = lazy(() => import("./pages/AccesPati"));
const Auth = lazy(() => import("./pages/Auth"));
const Langue = lazy(() => import("./pages/Langue"));
const FAQ = lazy(() => import("./pages/FAQ"));
const SimplePage = lazy(() => import("./pages/SimplePage"));
const Contes = lazy(() => import("./pages/Contes"));
const Atelier = lazy(() => import("./pages/Atelier"));
const ParentDashboard = lazy(() => import("./pages/ParentDashboard"));
const TaadidiQuiz = lazy(() => import("./pages/TaadidiQuiz"));
const Momes = lazy(() => import("./pages/Momes"));
const Imagier = lazy(() => import("./pages/Imagier"));
const SIMPLE = ["a-propos", "partenaires", "contact", "charte", "developpeurs", "hors-ligne", "zero-data", "populaire-par-pays", "confidentialite", "mentions-legales", "cookies", "accessibilite"];

function PageLoader() {
  return (
    <div className="min-h-[60vh] grid place-items-center" role="status" aria-label="Chargement">
      <div className="h-9 w-9 rounded-full border-[3px] border-[#FFC93C] border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  const location = useLocation();
  useEffect(() => {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("config", "G-2WN3FSBH14", { page_path: location.pathname + location.search });
    }
  }, [location]);

  return (
    <AuthProvider><LiteProvider>
      <Suspense fallback={<PageLoader />}>
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
            <Route path="/univers/taadidi" element={<UniversTaadidi />} />
            <Route path="/univers/taadidi/quiz" element={<TaadidiQuiz />} />
            <Route path="/momes" element={<Momes />} />
            <Route path="/imagier" element={<Imagier />} />
            <Route path="/gabarit-test" element={<EpisodeGabarit />} />
            <Route path="/serie/taadidi" element={<Navigate to="/univers/taadidi" replace />} />
            <Route path="/serie/generation-2040" element={<SerieG2040 />} />
            <Route path="/serie/point-zero" element={<SeriePointZero />} />
            <Route path="/serie/resistance" element={<SerieResistance />} />
            <Route path="/ecouter-les-contes" element={<Contes />} />
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
            <Route path="/atelier-ia" element={<AtelierIA />} />
            <Route path="/atelier-solidaire" element={<AtelierSolidaire />} />
            <Route path="/sobela" element={<Sobela />} />
            <Route path="/impact" element={<ImpactReport />} />
            <Route path="/presse" element={<Presse />} />

            {/* ── Mode Session (classement contextuel) ── */}
            <Route path="/session/new"          element={<SessionNew />} />
            <Route path="/session/:code/scores" element={<SessionScores />} />
            <Route path="/session/:code"        element={<SessionPlay />} />

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

            <Route path="/atelier" element={<Atelier />} />
            <Route path="/parent" element={<ParentDashboard />} />
            <Route path="*" element={<Stub title="Page introuvable" />} />
          </Route>
        </Routes>
      </Suspense>
      <InstallPati /> <WhoIsReading /> <AccountTypeGate />
    </LiteProvider></AuthProvider>
  );
}
