import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowLeft, Users, QrCode, Copy, Check, Loader2, Sparkles,
  GraduationCap, MessageSquare, UserRound, Play, ArrowRight,
  Map as MapIcon, Mountain, Star, TrainFront, Landmark, ScrollText, MapPin, Building2, Gem, Layers, Globe, BookOpen, Music, Type, Plane, Palette, X, RotateCcw,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { createSession, type SessionType } from "../lib/session";

// ── Charte ───────────────────────────────────────────────────────────────────
const GREEN  = "#0D2B1A";
const ACCENT = "#C8841E";
const GOLD   = "#FFC93C";
const CREAM  = "#FFF6E7";
const CORAL  = "#FF6B4A";
const PATI_GREEN = "#0F6E56";
const DISPLAY = "'Fraunces', Georgia, serif";

// ── Catalogue des jeux/livres jouables en session ───────────────────────────
// 12 cartes : 8 Pati + 4 SENAG. Entrée unique pour TOUS les modes :
// solo (joueur seul), classe (1 prof + 30 élèves), forum (stand/atelier).
//
// `visual` : chemin optionnel d'une illustration servie depuis /public/images/jeux/
// Quand présent → image en haut de la carte. Sinon → icône lucide géante.
type JeuSection = "pati" | "senag";
type Jeu = {
  id: string;
  slug: string;
  jeu: string;
  label: string;
  section: JeuSection;
  icon: typeof Users;
  accent: string;
  visual?: string;
  visualObjectPosition?: string; // ex: "center top" pour cadrer une image
  playPrefix: string;
  withCodeInPath: boolean;
  hasLiveScores: boolean;
};

const JEUX: Jeu[] = [
  // ── Pati ────────────────────────────────────────────────────────────────
  {
    id: "puzzle-guinee", slug: "puzzle-guinee", jeu: "defi",
    label: "Le Défi — Puzzle de la Guinée",
    section: "pati", icon: MapIcon, accent: "#C8841E",
    visual: "/images/jeux/puzzle-guinee.webp",
    playPrefix: "/session", withCodeInPath: true, hasLiveScores: true,
  },
  {
    id: "laguine378", slug: "laguine378", jeu: "matching-sous-pref",
    visual: "/images/jeux/laguine378.webp",
    label: "LaGuinè378 — Les sous-préfectures",
    section: "pati", icon: MapPin, accent: "#7B3FBF",
    playPrefix: "/laguine378", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "konakri", slug: "konakri", jeu: "matching-quartier",
    visual: "/images/jeux/konakri.webp",
    label: "Konakri — Les quartiers",
    section: "pati", icon: Building2, accent: "#1F7A8C",
    playPrefix: "/konakri", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "belle-guinee", slug: "belle-guinee", jeu: "carte-tresors",
    label: "Belle Guinée — La carte aux trésors",
    section: "pati", icon: Gem, accent: "#FF6B4A",
    visual: "/images/jeux/belle-guinee.png",
    playPrefix: "/belle-guinee", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "iwdi", slug: "iwdi", jeu: "cartes-strategie",
    label: "IWDI LAGUINÈ — Conquête des Régions",
    section: "pati", icon: Layers, accent: "#0F6E56",
    visual: "/images/jeux/iwdi.png",
    visualObjectPosition: "center top",
    playPrefix: "/iwdi", withCodeInPath: true, hasLiveScores: false,
  },
  {
    id: "corridor", slug: "corridor", jeu: "defi",
    label: "Le Corridor — TransGuinéen",
    section: "pati", icon: Mountain, accent: "#EA7A2C",
    visual: "/images/jeux/corridor.webp",
    playPrefix: "/session", withCodeInPath: true, hasLiveScores: true,
  },
  {
    id: "afrique", slug: "afrique", jeu: "defi",
    visual: "/images/jeux/afrique.webp",
    label: "Le Puzzle de l'Afrique",
    section: "pati", icon: Globe, accent: "#1a5e3a",
    playPrefix: "/session", withCodeInPath: true, hasLiveScores: true,
  },
  {
    id: "sebe", slug: "quiz-sebe", jeu: "quiz",
    label: "Sèbè — Le jeu littéraire guinéen",
    section: "pati", icon: BookOpen, accent: "#2F2A5E",
    visual: "/images/jeux/sebe.jpg",
    playPrefix: "/sebe", withCodeInPath: false, hasLiveScores: true,
  },
  {
    id: "hymne", slug: "hymne", jeu: "chant",
    visual: "/images/jeux/hymne.webp",
    label: "Chante LIBERTÉ — L'hymne national",
    section: "pati", icon: Music, accent: "#CE1126",
    playPrefix: "/hymne", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "binta", slug: "binta", jeu: "plateforme",
    visual: "/images/jeux/binta.webp",
    label: "Binta Pilote — La Dame Oiseau",
    section: "pati", icon: Plane, accent: "#2F8A4A",
    playPrefix: "/binta", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "jeanne", slug: "jeanne", jeu: "plateforme",
    visual: "/images/jeux/jeanne.webp",
    label: "Jeanne, la fille du Milo",
    section: "pati", icon: BookOpen, accent: "#2E4A8B",
    playPrefix: "/jeanne", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "droits", slug: "droits", jeu: "droits-enfant",
    visual: "/images/jeux/droits.webp",
    label: "Mes droits, mon avenir",
    section: "pati", icon: Palette, accent: "#2E9E4F",
    playPrefix: "/droits", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "almamya", slug: "almamya-zogota", jeu: "quiz-az",
    visual: "/images/jeux/almamya.webp",
    label: "Almamya-Zogota — La Guinée de A à Z",
    section: "pati", icon: Type, accent: "#16224A",
    playPrefix: "/almamya", withCodeInPath: false, hasLiveScores: false,
  },
  // ── SENAG ───────────────────────────────────────────────────────────────
  {
    id: "compagnons", slug: "compagnons", jeu: "puzzle",
    visual: "/images/jeux/compagnons.webp",
    label: "Puzzle des Compagnons",
    section: "senag", icon: Star, accent: "#C9A227",
    playPrefix: "/session-compagnons", withCodeInPath: true, hasLiveScores: true,
  },
  {
    id: "train", slug: "train-memoire", jeu: "chronologie",
    visual: "/images/jeux/train-memoire.webp",
    label: "Train de la Mémoire",
    section: "senag", icon: TrainFront, accent: "#A8442C",
    playPrefix: "/senag/jeu", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "primo", slug: "primo", jeu: "chronologie-pm",
    visual: "/images/jeux/primo.webp",
    label: "PriMo' — Les Premiers Ministres",
    section: "senag", icon: Landmark, accent: "#6B4423",
    playPrefix: "/senag/primo", withCodeInPath: false, hasLiveScores: false,
  },
  {
    id: "quiz", slug: "quiz-senag", jeu: "quiz",
    visual: "/images/jeux/quiz-senag.webp",
    label: "25 questions pour la mémoire",
    section: "senag", icon: ScrollText, accent: "#4A4416",
    playPrefix: "/senag/quiz", withCodeInPath: false, hasLiveScores: false,
  },
];

// ── Vitrine : rayons, accroches et repères de chaque jeu ────────────────────
// Clé = id du jeu dans JEUX. Un jeu sans fiche ici s'affiche avec son label.
type RayonId = "cartes" | "histoires" | "culture" | "senag";
type Fiche = {
  rayon: RayonId;
  titre: string;
  sousTitre: string;
  accroche: string;
  genre: string;
  repere: string;
  nouveau?: boolean;
};

const FICHES: Record<string, Fiche> = {
  "puzzle-guinee": { rayon: "cartes", titre: "Le Défi", sousTitre: "Puzzle de la Guinée", accroche: "Reconstitue la Guinée, préfecture par préfecture, le plus vite possible.", genre: "Puzzle", repere: "Classement en direct" },
  "laguine378":    { rayon: "cartes", titre: "LaGuinè378", sousTitre: "Les sous-préfectures", accroche: "Rattache chaque sous-préfecture à sa préfecture.", genre: "Association", repere: "33 préfectures" },
  "konakri":       { rayon: "cartes", titre: "Konakri", sousTitre: "Les quartiers", accroche: "148 quartiers, 13 communes : remets chacun à sa place.", genre: "Association", repere: "148 quartiers" },
  "belle-guinee":  { rayon: "cartes", titre: "Belle Guinée", sousTitre: "La carte aux trésors", accroche: "Retrouve sur la carte les trésors de la Guinée.", genre: "Carte", repere: "Sites et richesses" },
  "iwdi":          { rayon: "cartes", titre: "IWDI LAGUINÈ", sousTitre: "Conquête des Régions", accroche: "Un jeu de cartes pour conquérir les régions, à plusieurs.", genre: "Stratégie", repere: "2 à 8 joueurs" },
  "corridor":      { rayon: "cartes", titre: "Le Corridor", sousTitre: "TransGuinéen", accroche: "Suis le TransGuinéen, du port jusqu'à la mine.", genre: "Puzzle", repere: "Classement en direct" },
  "afrique":       { rayon: "cartes", titre: "Le Puzzle de l'Afrique", sousTitre: "Le continent", accroche: "Replace les pays d'Afrique, région par région.", genre: "Puzzle", repere: "6 régions" },
  "binta":         { rayon: "histoires", titre: "Binta Pilote", sousTitre: "La Dame Oiseau", accroche: "Cours, saute et prends ton envol avec Binta Diallo.", genre: "Plateforme", repere: "Tiré du livre", nouveau: true },
  "jeanne":        { rayon: "histoires", titre: "Jeanne", sousTitre: "La fille du Milo", accroche: "Suis Jeanne Martin Cissé, de Kankan jusqu'à l'ONU.", genre: "Plateforme", repere: "Biographie", nouveau: true },
  "droits":        { rayon: "histoires", titre: "Mes droits, mon avenir", sousTitre: "Les droits de l'enfant", accroche: "Découvre tes droits et apprends à les défendre.", genre: "Histoire", repere: "Droits de l'enfant", nouveau: true },
  "sebe":          { rayon: "culture", titre: "Sèbè", sousTitre: "Le jeu littéraire guinéen", accroche: "Teste ta connaissance des plumes guinéennes.", genre: "Quiz", repere: "65 questions" },
  "almamya":       { rayon: "culture", titre: "Almamya-Zogota", sousTitre: "La Guinée de A à Z", accroche: "Toute la Guinée, une lettre après l'autre.", genre: "Quiz", repere: "De A à Z" },
  "hymne":         { rayon: "culture", titre: "Chante LIBERTÉ", sousTitre: "L'hymne national", accroche: "Apprends les vrais mots de l'hymne national.", genre: "Chant", repere: "Dès 7 ans" },
  "compagnons":    { rayon: "senag", titre: "Puzzle des Compagnons", sousTitre: "SENAG", accroche: "Reconstitue une image de l'indépendance, pièce par pièce.", genre: "Puzzle", repere: "Classement en direct" },
  "train":         { rayon: "senag", titre: "Train de la Mémoire", sousTitre: "SENAG", accroche: "Remets les grandes dates dans l'ordre, wagon après wagon.", genre: "Chronologie", repere: "Histoire nationale" },
  "primo":         { rayon: "senag", titre: "PriMo'", sousTitre: "Les Premiers Ministres", accroche: "Remets les Premiers ministres de la Guinée dans l'ordre.", genre: "Chronologie", repere: "Premiers ministres" },
  "quiz":          { rayon: "senag", titre: "25 questions", sousTitre: "Pour la mémoire", accroche: "Teste ta mémoire nationale en 25 questions.", genre: "Quiz", repere: "25 questions" },
};

function ficheDe(j: Jeu): Fiche {
  return FICHES[j.id] ?? {
    rayon: j.section === "senag" ? "senag" : "cartes",
    titre: j.label, sousTitre: "", accroche: "", genre: "Jeu", repere: "",
  };
}

const RAYONS: { id: RayonId; nom: string; accroche: string; colonnes: 3 | 4; tuileClasse?: boolean }[] = [
  { id: "cartes",    nom: "Cartes et territoires", accroche: "Connais-tu vraiment ton pays ?", colonnes: 4, tuileClasse: true },
  { id: "histoires", nom: "Histoires à jouer",     accroche: "Entre dans la peau des héros.", colonnes: 3 },
  { id: "culture",   nom: "Culture et quiz",       accroche: "Les mots, les livres, l'hymne.", colonnes: 3 },
  { id: "senag",     nom: "Mémoire nationale",     accroche: "Les jeux de la Semaine des Archives.", colonnes: 4 },
];

// Jeu mis à la une (id dans JEUX) et clé du dernier jeu lancé sur cet appareil.
const UNE_ID = "binta";
const CLE_DERNIER = "pati_dernier_jeu";

// Le mode "solo" élargit SessionType localement jusqu'à ce que
// lib/session.ts (et la contrainte CHECK Supabase si elle existe) acceptent
// la valeur "solo".
type Contexte = SessionType | "solo";

const TYPES: { id: Contexte; label: string; icon: typeof Users; ex: string; color: string }[] = [
  { id: "solo",   label: "Solo",   icon: UserRound,     ex: "Je joue tout seul",       color: PATI_GREEN },
  { id: "classe", label: "Classe", icon: GraduationCap, ex: "30 élèves, une école",    color: ACCENT },
  { id: "forum",  label: "Forum",  icon: MessageSquare, ex: "Un stand, un atelier",    color: CORAL },
];

// ── Helpers URLs (per-jeu) ──────────────────────────────────────────────────
function buildPlayPath(j: Jeu, code: string): string {
  return j.withCodeInPath ? `${j.playPrefix}/${code}` : `${j.playPrefix}?session=${code}`;
}
function buildJoinUrl(baseUrl: string, j: Jeu, code: string): string {
  return `${baseUrl}${buildPlayPath(j, code)}`;
}
function buildScoresPath(j: Jeu, code: string): string | null {
  return j.hasLiveScores ? `${j.playPrefix}/${code}/scores` : null;
}

// ── Keyframes injectées une fois ────────────────────────────────────────────
const KEYFRAMES = `
  @keyframes patiFloatA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-20px) scale(1.05); } }
  @keyframes patiFloatB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-25px,25px) scale(1.08); } }
  @keyframes patiFloatC { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(20px,15px) scale(0.95); } }
  @keyframes patiRise { 0% { opacity: 0; transform: translateY(24px) scale(0.94); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
  @keyframes patiSparkle { 0%,100% { opacity: 0.4; transform: scale(1) rotate(0deg); } 50% { opacity: 1; transform: scale(1.15) rotate(15deg); } }
  @keyframes patiPulseRing { 0% { box-shadow: 0 0 0 0 rgba(255,201,60,0.55); } 70% { box-shadow: 0 0 0 14px rgba(255,201,60,0); } 100% { box-shadow: 0 0 0 0 rgba(255,201,60,0); } }
  .pati-rise { animation: patiRise 0.55s ease-out both; }
  .pati-sparkle { animation: patiSparkle 2.4s ease-in-out infinite; }
  .pati-pulse-ring { animation: patiPulseRing 2s ease-out infinite; }
  .pati-float-a { animation: patiFloatA 9s ease-in-out infinite; }
  .pati-float-b { animation: patiFloatB 11s ease-in-out infinite; }
  .pati-float-c { animation: patiFloatC 13s ease-in-out infinite; }
`;

export default function SessionNew() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Pré-sélection via ?game=<id>
  const initialIdx = (() => {
    const g = searchParams.get("game");
    if (!g) return 0;
    const i = JEUX.findIndex((j) => j.id === g);
    return i >= 0 ? i : 0;
  })();

  const [jeuIdx, setJeuIdx]   = useState(initialIdx);
  const [type, setType]       = useState<Contexte>("solo");
  const [label, setLabel]     = useState("");
  const [contact, setContact] = useState("");

  // Vitrine : rayon filtré, fiche ouverte, dernier jeu lancé sur cet appareil
  const [filtre, setFiltre] = useState<"tous" | RayonId>("tous");
  const [ouvert, setOuvert] = useState(() => {
    const g = searchParams.get("game");
    return !!g && JEUX.some((j) => j.id === g);
  });
  const [dernier] = useState<string | null>(() => {
    try { return localStorage.getItem(CLE_DERNIER); } catch { return null; }
  });
  useEffect(() => {
    if (!ouvert) return;
    const surTouche = (e: KeyboardEvent) => { if (e.key === "Escape") setOuvert(false); };
    window.addEventListener("keydown", surTouche);
    return () => window.removeEventListener("keydown", surTouche);
  }, [ouvert]);

  const [creating, setCreating] = useState(false);
  const [error, setError]       = useState<string | null>(null);
  const [code, setCode]         = useState<string | null>(null);
  const [copied, setCopied]     = useState(false);

  const jeu     = JEUX[jeuIdx];
  const isSolo  = type === "solo";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://projetpati.com";
  const joinUrl = code ? buildJoinUrl(baseUrl, jeu, code) : "";

  const create = async () => {
    setCreating(true);
    setError(null);
    try {
      const s = await createSession({
        livre_slug: jeu.slug,
        jeu: jeu.jeu,
        label: label.trim() || (null as unknown as string),
        type: type as SessionType,
        created_by: contact.trim() || undefined,
      });
      try { localStorage.setItem(CLE_DERNIER, jeu.id); } catch { /* ignore */ }
      if (isSolo) {
        navigate(buildPlayPath(jeu, s.code));
        return;
      }
      setCode(s.code);
    } catch {
      setError(isSolo
        ? "La partie n'a pas pu démarrer. Réessaie dans un instant."
        : "La session n'a pas pu être créée. Réessaie dans un instant.");
    } finally {
      setCreating(false);
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(joinUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* ignore */ }
  };

  // ════════════════════════════════════════════════════════════════════════
  // ÉCRAN 2 — Session créée (uniquement pour les sessions de groupe)
  // ════════════════════════════════════════════════════════════════════════
  if (code) {
    const scoresPath = buildScoresPath(jeu, code);
    const playPath = buildPlayPath(jeu, code);

    return (
      <div className="min-h-screen relative overflow-hidden" style={{ background: GREEN }}>
        <style>{KEYFRAMES}</style>
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full pati-float-a" style={{ background: `${jeu.accent}22`, filter: "blur(60px)" }} />
        <div className="absolute -bottom-40 -right-20 w-[28rem] h-[28rem] rounded-full pati-float-b" style={{ background: `${GOLD}18`, filter: "blur(80px)" }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full pati-float-c" style={{ background: `${CORAL}15`, filter: "blur(70px)" }} />

        <div className="relative max-w-3xl mx-auto px-6 py-10">
          <Link to="/session/new" onClick={() => setCode(null)}
            className="inline-flex items-center gap-1.5 font-display font-semibold mb-8 hover:underline"
            style={{ color: GOLD }}>
            <ArrowLeft size={18} /> Nouvelle session
          </Link>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-3"
              style={{ background: `${GOLD}22`, color: GOLD }}>
              <Sparkles size={15} className="pati-sparkle" /> Session ouverte&nbsp;!
            </div>
            <h1 className="text-white font-bold leading-tight"
              style={{ fontFamily: DISPLAY, fontSize: "clamp(1.6rem,5vw,2.4rem)" }}>
              {label || jeu.label}
            </h1>
          </div>

          <div className="rounded-[2rem] p-8 md:p-10 text-center relative" style={{ background: CREAM }}>
            <p className="font-display font-semibold text-[#5a6b62] mb-1">Scanne pour rejoindre</p>

            <div className="inline-flex p-5 bg-white rounded-[1.5rem] shadow-lg my-4"
              style={{ border: `3px solid ${jeu.accent}` }}>
              <QRCodeSVG
                value={joinUrl}
                size={260}
                level="H"
                fgColor={GREEN}
                bgColor="#ffffff"
                marginSize={1}
              />
            </div>

            <div className="mb-2">
              <p className="text-[#8a9389] text-sm font-semibold mb-1">ou entre le code</p>
              <p className="font-display font-bold tracking-[0.25em]"
                style={{ fontFamily: DISPLAY, fontSize: "clamp(2.5rem,9vw,4rem)", color: GREEN }}>
                {code}
              </p>
            </div>

            <button onClick={copyLink}
              className="inline-flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-full transition-colors"
              style={{ background: copied ? `${GREEN}12` : `${jeu.accent}15`, color: copied ? GREEN : jeu.accent }}>
              {copied ? <><Check size={15} /> Lien copié</> : <><Copy size={15} /> Copier le lien</>}
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {scoresPath ? (
              <Link to={scoresPath}
                className="flex items-center justify-center gap-2 font-display font-bold text-white rounded-2xl px-6 py-4 shadow-kid transition-transform hover:scale-[1.02]"
                style={{ background: jeu.accent }}>
                <Users size={20} /> Voir le classement live <ArrowRight size={18} />
              </Link>
            ) : (
              <div className="flex items-center justify-center gap-2 font-display font-semibold rounded-2xl px-6 py-4 text-center border-2 border-dashed"
                style={{ borderColor: `${GOLD}55`, color: GOLD, background: "transparent" }}>
                <Sparkles size={18} /> Classement live bientôt
              </div>
            )}
            <Link to={playPath}
              className="flex items-center justify-center gap-2 font-display font-bold rounded-2xl px-6 py-4 transition-colors"
              style={{ background: GOLD, color: GREEN }}>
              <QrCode size={20} /> Tester côté joueur
            </Link>
          </div>

          <p className="text-white/55 text-sm font-semibold text-center mt-6">
            Le classement s'affiche en direct. Tu pourras le fermer quand tout le monde a fini — les temps, eux, restent enregistrés.
          </p>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // ÉCRAN 1 — Vitrine des jeux (à la une, rayons, fiche de jeu)
  // ════════════════════════════════════════════════════════════════════════
  const idxDe = (id: string) => JEUX.findIndex((j) => j.id === id);
  const ouvrir = (i: number, t: Contexte = "solo") => {
    setJeuIdx(i);
    setType(t);
    setError(null);
    setOuvert(true);
  };

  const uneIdx = Math.max(0, idxDe(UNE_ID));
  const une = JEUX[uneIdx];
  const uneFiche = ficheDe(une);
  const dernierIdx = dernier ? idxDe(dernier) : -1;
  const defiIdx = Math.max(0, idxDe("puzzle-guinee"));
  const fiche = ficheDe(jeu);

  const jeuxDuRayon = (r: RayonId) =>
    JEUX.map((j, i) => ({ j, i })).filter(({ j }) => ficheDe(j).rayon === r);
  const rayonsVisibles = RAYONS.filter((r) => filtre === "tous" || filtre === r.id);
  const filtres: { id: "tous" | RayonId; nom: string; nb: number }[] = [
    { id: "tous", nom: "Tous les jeux", nb: JEUX.length },
    ...RAYONS.map((r) => ({ id: r.id, nom: r.nom, nb: jeuxDuRayon(r.id).length })),
  ];

  const renderCarte = (j: Jeu, i: number) => {
    const Icon = j.icon;
    const f = ficheDe(j);
    return (
      <button
        key={j.id}
        onClick={() => ouvrir(i)}
        className="group flex flex-col text-left bg-white rounded-3xl overflow-hidden border border-[#0D2B1A]/10 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0F6E56]/40"
      >
        <span
          className="relative block w-full overflow-hidden"
          style={{ aspectRatio: "3 / 2", background: j.visual ? "#F1E7D2" : j.accent }}
        >
          {j.visual ? (
            <img
              src={j.visual}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: j.visualObjectPosition || "center" }}
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center">
              <Icon size={48} className="text-white" strokeWidth={2.2} />
            </span>
          )}
          {f.nouveau && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-white" style={{ background: "#C63F1D" }}>
              Nouveau
            </span>
          )}
        </span>
        <span className="flex flex-col gap-1.5 p-3 sm:p-5 flex-1 w-full">
          <span className="font-display font-bold text-base sm:text-xl leading-tight" style={{ color: GREEN }}>{f.titre}</span>
          {f.sousTitre && (
            <span className="text-xs sm:text-sm font-bold" style={{ color: PATI_GREEN }}>{f.sousTitre}</span>
          )}
          {f.accroche && (
            <span className="text-[13px] sm:text-[15px] leading-snug font-semibold text-[#4A554E]">{f.accroche}</span>
          )}
          <span className="flex flex-wrap items-center gap-2 mt-auto pt-3">
            <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold" style={{ background: "#E1EFE9", color: "#0A4D3C" }}>{f.genre}</span>
            {f.repere && (
              <span className="hidden sm:inline-flex px-2.5 py-1 rounded-lg text-xs font-bold" style={{ background: "#F6EBD0", color: "#5A4410" }}>{f.repere}</span>
            )}
            <span className="ml-auto inline-flex w-10 h-10 rounded-full items-center justify-center shrink-0" style={{ background: GOLD }}>
              <Play size={15} color={GREEN} fill={GREEN} />
            </span>
          </span>
        </span>
      </button>
    );
  };

  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col gap-8 sm:gap-10">

        {/* En-tête + reprise du dernier jeu */}
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="flex-1 min-w-[260px]">
            <h1 className="font-display font-bold leading-tight" style={{ color: PATI_GREEN, fontSize: "clamp(2rem,6vw,3rem)" }}>
              Les jeux PATI
            </h1>
            <p className="mt-2 text-base sm:text-lg font-semibold text-[#4A554E] max-w-xl">
              {JEUX.length} jeux pour découvrir la Guinée en jouant. Seul, ou en défi avec ta classe.
            </p>
          </div>
          {dernierIdx >= 0 && (
            <button
              onClick={() => ouvrir(dernierIdx)}
              className="flex items-center gap-3 pl-2.5 pr-5 py-2.5 bg-white rounded-2xl border border-[#0D2B1A]/15 text-left transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0F6E56]/40"
            >
              {JEUX[dernierIdx].visual ? (
                <img src={JEUX[dernierIdx].visual} alt="" className="w-[72px] h-[52px] object-cover rounded-xl" />
              ) : (
                <span className="inline-flex w-[72px] h-[52px] rounded-xl items-center justify-center" style={{ background: JEUX[dernierIdx].accent }}>
                  <RotateCcw size={20} className="text-white" />
                </span>
              )}
              <span className="flex flex-col">
                <span className="text-xs font-extrabold uppercase tracking-wider" style={{ color: PATI_GREEN }}>Reprendre</span>
                <span className="font-display font-bold" style={{ color: GREEN }}>{JEUX[dernierIdx].label}</span>
              </span>
              <ArrowRight size={18} style={{ color: PATI_GREEN }} />
            </button>
          )}
        </div>

        {/* Jeu à la une */}
        <section aria-label="Jeu à la une" className="rounded-[1.75rem] overflow-hidden flex flex-col md:flex-row" style={{ background: "#0A4D3C" }}>
          <div className="relative md:w-[56%] min-h-[220px] md:min-h-[340px]" style={{ background: une.accent }}>
            {une.visual && (
              <img
                src={une.visual}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: une.visualObjectPosition || "center" }}
              />
            )}
          </div>
          <div className="flex-1 p-6 sm:p-10 flex flex-col gap-4 text-white">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider" style={{ background: GOLD, color: GREEN }}>À la une</span>
              {uneFiche.nouveau && (
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-white" style={{ background: "#C63F1D" }}>Nouveau</span>
              )}
            </div>
            <h2 className="font-display font-bold leading-tight" style={{ fontSize: "clamp(1.7rem,4.5vw,2.6rem)" }}>
              {uneFiche.titre}
              {uneFiche.sousTitre && <><br />{uneFiche.sousTitre}</>}
            </h2>
            <p className="text-base sm:text-lg font-semibold" style={{ color: "#E3F0EA" }}>{uneFiche.accroche}</p>
            <div className="flex flex-wrap items-center gap-4 mt-1">
              <button
                onClick={() => ouvrir(uneIdx)}
                className="inline-flex items-center gap-2.5 font-display font-bold text-lg rounded-full px-8 py-3.5 transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
                style={{ background: GOLD, color: GREEN }}
              >
                <Play size={18} color={GREEN} fill={GREEN} /> Jouer
              </button>
              <span className="text-sm font-semibold" style={{ color: "#E3F0EA" }}>Solo, classe ou forum</span>
            </div>
          </div>
        </section>

        {/* Filtres par rayon */}
        <nav aria-label="Filtrer les jeux" className="flex flex-wrap gap-2.5">
          {filtres.map((f) => {
            const actif = filtre === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFiltre(f.id)}
                aria-pressed={actif}
                className="inline-flex items-center gap-2 min-h-[46px] px-4 rounded-full font-bold text-[15px] border-2 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0F6E56]/40"
                style={{
                  background: actif ? PATI_GREEN : "white",
                  color: actif ? "white" : GREEN,
                  borderColor: actif ? PATI_GREEN : "#B9AD93",
                }}
              >
                {f.nom} <span className="text-sm font-extrabold opacity-80">{f.nb}</span>
              </button>
            );
          })}
        </nav>

        {/* Rayons */}
        {rayonsVisibles.map((r) => (
          <section key={r.id} className="flex flex-col gap-5">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h2 className="font-display font-bold text-2xl sm:text-3xl" style={{ color: PATI_GREEN }}>{r.nom}</h2>
              <p className="text-base font-semibold text-[#4A554E]">{r.accroche}</p>
            </div>
            <div className={`grid grid-cols-2 gap-3 sm:gap-6 ${r.colonnes === 3 ? "lg:grid-cols-3" : "md:grid-cols-3 lg:grid-cols-4"}`}>
              {jeuxDuRayon(r.id).map(({ j, i }) => renderCarte(j, i))}
              {r.tuileClasse && (
                <button
                  onClick={() => ouvrir(defiIdx, "classe")}
                  className="flex flex-col justify-center gap-3 p-5 sm:p-7 rounded-3xl text-left text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0F6E56]/40"
                  style={{ background: PATI_GREEN }}
                >
                  <GraduationCap size={40} strokeWidth={1.8} />
                  <span className="font-display font-bold text-xl sm:text-2xl leading-tight">Défie ta classe</span>
                  <span className="text-sm sm:text-base font-semibold" style={{ color: "#E3F0EA" }}>
                    Choisis un jeu, crée une session et partage le QR code. Jusqu'à 300 joueurs en même temps.
                  </span>
                  <span className="self-start mt-1 px-4 py-2 rounded-full text-sm font-extrabold bg-white" style={{ color: "#0A4D3C" }}>
                    Créer une session
                  </span>
                </button>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Fiche du jeu choisi */}
      {ouvert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-auto"
          style={{ background: "rgba(10,40,30,0.62)" }}
          onClick={() => setOuvert(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Fiche du jeu ${jeu.label}`}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-full overflow-auto rounded-[1.75rem] flex flex-col md:flex-row shadow-2xl"
            style={{ background: "#FFFDF8" }}
          >
            <button
              onClick={() => setOuvert(false)}
              aria-label="Fermer"
              className="absolute top-3 right-3 z-10 inline-flex w-11 h-11 rounded-full items-center justify-center bg-white shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0F6E56]/40"
            >
              <X size={20} color={GREEN} strokeWidth={2.4} />
            </button>

            <div className="relative md:w-[44%] min-h-[190px] md:min-h-[420px] shrink-0" style={{ background: jeu.visual ? "#F1E7D2" : jeu.accent }}>
              {jeu.visual && (
                <img
                  src={jeu.visual}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: jeu.visualObjectPosition || "center" }}
                />
              )}
              {fiche.nouveau && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-white" style={{ background: "#C63F1D" }}>
                  Nouveau
                </span>
              )}
            </div>

            <div className="flex-1 p-5 sm:p-9 flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 pr-12">
                <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold" style={{ background: "#E1EFE9", color: "#0A4D3C" }}>{fiche.genre}</span>
                {fiche.repere && (
                  <span className="px-2.5 py-1 rounded-lg text-xs font-bold" style={{ background: "#F6EBD0", color: "#5A4410" }}>{fiche.repere}</span>
                )}
              </div>
              <div>
                <h2 className="font-display font-bold leading-tight" style={{ color: PATI_GREEN, fontSize: "clamp(1.6rem,4vw,2.2rem)" }}>{fiche.titre}</h2>
                {fiche.sousTitre && <p className="mt-1 font-bold" style={{ color: PATI_GREEN }}>{fiche.sousTitre}</p>}
              </div>
              {fiche.accroche && <p className="text-base sm:text-[17px] font-semibold text-[#4A554E]">{fiche.accroche}</p>}

              <div>
                <p className="font-display font-bold mb-2" style={{ color: GREEN }}>Comment tu joues&nbsp;?</p>
                <div className="grid grid-cols-3 gap-2">
                  {TYPES.map((t) => {
                    const Icon = t.icon;
                    const actif = type === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setType(t.id)}
                        aria-pressed={actif}
                        className="flex flex-col items-center justify-center gap-1 min-h-[76px] px-1.5 py-2 rounded-2xl border-2 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0F6E56]/40"
                        style={{
                          background: actif ? PATI_GREEN : "white",
                          color: actif ? "white" : GREEN,
                          borderColor: actif ? PATI_GREEN : "#B9AD93",
                        }}
                      >
                        <Icon size={20} strokeWidth={2.2} />
                        <span className="font-display font-bold">{t.label}</span>
                        <span className="text-[11px] font-semibold text-center leading-tight opacity-90">{t.ex}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {!isSolo && (
                <label className="flex flex-col gap-1.5 font-display font-bold text-sm" style={{ color: GREEN }}>
                  <span>Nom de la partie <span className="text-[#6B756E] font-semibold">(optionnel)</span></span>
                  <input
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    maxLength={60}
                    placeholder="Classe CM2 · École Alpha · Conakry"
                    className="w-full rounded-xl border-2 border-[#B9AD93] bg-white px-4 py-3 text-base font-semibold text-[#0D2B1A] outline-none focus:border-[#0F6E56] transition-colors"
                  />
                </label>
              )}

              <label className="flex flex-col gap-1.5 font-display font-bold text-sm" style={{ color: GREEN }}>
                <span>Ton contact <span className="text-[#6B756E] font-semibold">
                  {isSolo ? "(optionnel, pour retrouver tes scores)" : "(optionnel, pour retrouver tes sessions)"}
                </span></span>
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  maxLength={80}
                  placeholder="email ou WhatsApp"
                  className="w-full rounded-xl border-2 border-[#B9AD93] bg-white px-4 py-3 text-base font-semibold text-[#0D2B1A] outline-none focus:border-[#0F6E56] transition-colors"
                />
              </label>

              {error && (
                <p className="text-red-700 font-semibold text-sm bg-red-50 rounded-xl px-4 py-3">{error}</p>
              )}

              <button
                onClick={create}
                disabled={creating}
                className="w-full inline-flex items-center justify-center gap-2.5 font-display font-bold text-lg rounded-full px-6 py-4 mt-1 transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0F6E56]/40"
                style={{ background: GOLD, color: GREEN }}
              >
                {creating ? (
                  <><Loader2 size={22} className="animate-spin" /> {isSolo ? "Préparation…" : "Création…"}</>
                ) : isSolo ? (
                  <><Play size={20} color={GREEN} fill={GREEN} /> Jouer maintenant</>
                ) : (
                  <><QrCode size={22} strokeWidth={2.4} /> Créer la session &amp; le QR code</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
