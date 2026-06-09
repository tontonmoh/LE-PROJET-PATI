import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Users, Languages, ShieldCheck, Handshake, BookOpen,
  Sparkles, Download, ArrowRight, Heart, Target, CheckCircle2,
} from 'lucide-react';

/* ============================================================================
   PATI — Page Impact  (route /impact)
   Charte : vert profond #0D2B1A + or #FFC93C. Mobile-first. Zéro dépendance lourde.
   RÈGLE : aucun chiffre inventé. Tout marqué [À REMPLACER] = à confirmer.
   ----------------------------------------------------------------------------
   >>> SEULS CHIFFRES À ÉDITER : le bloc CHIFFRES ci-dessous. <<<
   ========================================================================== */

// ——— RÉELS (confirmés) ———
const PREFECTURES = 34;       // 33 préfectures + Conakry (Le Défi PATI)
const VILLES_DOC  = 48;       // enquête CaMPUS Baabata
const REPONDANTS  = 854;      // enquête CaMPUS Baabata
const SERIES      = 2;
const LIVRES      = 30;
const CONTES      = 20;
const EQUIPES     = 5;        // équipes scolaires — Château d'Eau

// ——— OBJECTIF (projeté) ———
const OBJECTIF_2026   = 10000;
const ENFANTS_TOUCHES = 0;    // point de départ : octobre 2026

// ——— [À REMPLACER] usage cumulé (constantes éditables, PAS de live) ———
const LIVRES_LUS = 0;         // [À REMPLACER] — laisser 0 affiche « — »
const QUIZ_JOUES = 0;         // [À REMPLACER] — laisser 0 affiche « — »

const VERT = '#0D2B1A';
const OR   = '#FFC93C';

/* ——— Apparition au scroll ——————————————————————————————————————————— */
function useInView<T extends HTMLElement>(threshold = 0.25): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      (e) => { if (e[0].isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, threshold]);
  return [ref, seen];
}

/* ——— Compteur animé ————————————————————————————————————————————————— */
function CountUp({ to, duration = 1300, suffix = '' }: { to: number; duration?: number; suffix?: string }) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.4);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return <span ref={ref}>{val.toLocaleString('fr-FR')}{suffix}</span>;
}

/* ——— Section titre ————————————————————————————————————————————————— */
function SectionTitle({ icon: Icon, kicker, title }: { icon: any; kicker: string; title: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: OR }}>
        <Icon size={16} /> {kicker}
      </div>
      <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold" style={{ color: VERT }}>{title}</h2>
    </div>
  );
}

export default function ImpactReport() {
  /* ——— SEO (sans dépendance) ——— */
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Impact de PATI — Édutainment jeunesse Guinée | projetpati.com';
    const desc =
      "34 préfectures, une trentaine d'enfants co-auteurs, 4 langues écrites : découvrez l'impact de PATI, l'édutainment jeunesse de L'Atelier Solidaire vers la Génération 2040.";
    const set = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    set('name', 'description', desc);
    set('property', 'og:title', 'Impact de PATI — Édutainment jeunesse Guinée');
    set('property', 'og:description', desc);
    return () => { document.title = prevTitle; };
  }, []);

  /* ——— Barre objectif (point de départ) ——— */
  const [barRef, barSeen] = useInView<HTMLDivElement>(0.4);
  const pct = Math.max(2, Math.round((ENFANTS_TOUCHES / OBJECTIF_2026) * 100)); // min 2% visible

  const PARTENAIRES_OK = ['CCFG', '72 Heures du Livre', 'ISAMK'];
  const PARTENAIRES_WIP = ['AFD', 'Institut Français', 'République de Guinée', '4 universités (MOU)'];

  const JALONS = [
    { an: '2024', txt: 'Naissance du projet PATI' },
    { an: '2025', txt: '« Château d\'Eau » aux 72 Heures du Livre (CCFG)' },
    { an: 'Déb. 2026', txt: 'Plateforme en ligne · Clubs PATI · Espace Parents · PWA' },
    { an: 'Juin 2026', txt: 'Comptes & accès financé (payant + parrainage)' },
    { an: 'Oct. 2026', txt: 'EXPO PATI au CCFG — Génération 2040' },
  ];

  return (
    <main className="bg-[#FBF8F0]">
      {/* ——— HERO ——— */}
      <header className="px-5 py-14 sm:py-20 text-center text-white" style={{ background: VERT }}>
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                style={{ background: OR, color: VERT }}>Rapport d'impact</span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight">Bâtir la Génération 2040</h1>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/85">
            PATI n'est pas une bibliothèque de plus. C'est un pays raconté à ses enfants —
            écrit, illustré et joué avec eux, dans leurs langues, en toute transparence.
          </p>
        </div>
      </header>

      {/* ——— BANDEAU PREUVES (catalogue réel) ——— */}
      <section className="mx-auto max-w-4xl px-5 -mt-8">
        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-5 shadow-lg sm:grid-cols-4">
          {[
            { n: SERIES, l: 'séries' },
            { n: LIVRES, l: 'livres' },
            { n: CONTES, l: 'contes' },
            { n: PREFECTURES, l: 'préfectures' },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl font-extrabold" style={{ color: VERT }}><CountUp to={s.n} /></div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ——— INFOGRAPHIE A — barre objectif ——— */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <div ref={barRef} className="rounded-2xl border p-6" style={{ borderColor: '#E7E1D2' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold" style={{ color: VERT }}>
              <Target size={18} /> Objectif 2026 : 10 000 enfants touchés
            </div>
            <span className="text-sm font-semibold text-gray-500">
              {ENFANTS_TOUCHES.toLocaleString('fr-FR')} / {OBJECTIF_2026.toLocaleString('fr-FR')}
            </span>
          </div>
          <div className="mt-4 h-4 w-full overflow-hidden rounded-full" style={{ background: '#E9E4D5' }}>
            <div className="h-full rounded-full transition-[width] duration-[1400ms] ease-out"
                 style={{ width: barSeen ? `${pct}%` : '0%', background: OR }} />
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Notre point de départ : <strong style={{ color: VERT }}>octobre 2026</strong>. Le premier comptage
            officiel sera publié à l'issue de l'EXPO.
          </p>
        </div>
      </section>

      {/* ——— NOTRE TERRITOIRE ——— */}
      <section className="mx-auto max-w-4xl px-5 py-8">
        <SectionTitle icon={MapPin} kicker="Notre territoire" title="Un pays entier, à hauteur d'enfant" />
        <p className="text-gray-700 leading-relaxed">
          PATI couvre <strong>les 33 préfectures de Guinée et Conakry</strong> — {PREFECTURES} territoires que les
          enfants apprennent en jouant, pièce par pièce, dans <em>Le Défi PATI</em>. Notre catalogue compte
          aujourd'hui <strong>{SERIES} séries, {LIVRES} livres et {CONTES} contes</strong>, nourris par une enquête
          de terrain réelle : <strong>{VILLES_DOC} villes documentées</strong> auprès de{' '}
          <strong>{REPONDANTS} personnes</strong> (CaMPUS Baabata). Nous n'inventons pas la Guinée pour les enfants :
          nous la recueillons, puis nous la leur rendons.
        </p>
      </section>

      {/* ——— NOS HÉROS ——— */}
      <section className="mx-auto max-w-4xl px-5 py-8">
        <SectionTitle icon={Users} kicker="Nos héros" title="Les auteurs de PATI ont parfois huit ans" />
        <p className="text-gray-700 leading-relaxed">
          <em>La Guinée — Château d'Eau</em> a été imaginé, écrit et illustré par <strong>une trentaine d'enfants
          de Conakry</strong>, répartis en <strong>{EQUIPES} équipes</strong> d'écoles publiques et privées. Le livre
          rend hommage à <strong>Ibrahima Tounkara</strong>, ce professeur de Bolodou qui a construit, seul, un
          micro-barrage pour éclairer son village. Il nous a quittés en janvier 2026 ; sa lumière, elle, continue de
          passer de page en page.
        </p>
      </section>

      {/* ——— INFOGRAPHIE B — compteurs animés ——— */}
      <section className="mx-auto max-w-4xl px-5 py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: BookOpen, to: LIVRES_LUS, l: 'livres lus' },
            { icon: CheckCircle2, to: QUIZ_JOUES, l: 'quiz joués' },
            { icon: MapPin, to: PREFECTURES, l: 'préfectures à découvrir' },
          ].map((c) => (
            <div key={c.l} className="rounded-2xl border p-6 text-center" style={{ borderColor: '#E7E1D2' }}>
              <c.icon size={22} className="mx-auto" style={{ color: OR }} />
              <div className="mt-2 text-4xl font-extrabold" style={{ color: VERT }}>
                {c.to > 0 ? <CountUp to={c.to} /> : '—'}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{c.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ——— NOS LANGUES ——— */}
      <section className="mx-auto max-w-4xl px-5 py-8">
        <SectionTitle icon={Languages} kicker="Nos langues" title="Lire dans sa langue, écouter dans la langue du cœur" />
        <p className="text-gray-700 leading-relaxed">
          Chaque titre phare de PATI se lit en <strong>4 langues écrites — français, anglais, arabe, chinois</strong>.
          Et parce qu'un conte se transmet d'abord par la voix, nous préparons l'écoute en{' '}
          <strong>8 langues nationales de Guinée</strong> <em>(en déploiement)</em>. La technologie au service de la
          transmission, pas l'inverse.
        </p>
      </section>

      {/* ——— NOTRE TRANSPARENCE ——— */}
      <section className="mx-auto max-w-4xl px-5 py-8">
        <SectionTitle icon={ShieldCheck} kicker="Notre transparence" title="Rien à cacher, tout à expliquer" />
        <p className="text-gray-700 leading-relaxed">
          Chaque recours à l'illustration par intelligence artificielle est <strong>déclaré</strong> — c'est un
          principe fondateur. Dans <em>Château d'Eau</em>, ce choix est même <strong>expliqué en détail</strong> aux
          lecteurs par les enfants eux-mêmes. Et <strong>chaque livre</strong> se prolonge par un <strong>quiz</strong>,
          pour que la lecture laisse une trace mesurable.
        </p>
      </section>

      {/* ——— INFOGRAPHIE C — timeline ——— */}
      <section className="mx-auto max-w-4xl px-5 py-10">
        <SectionTitle icon={Sparkles} kicker="Notre chemin" title="De l'idée à l'EXPO" />
        <ol className="relative ml-3 border-l-2" style={{ borderColor: OR }}>
          {JALONS.map((j) => (
            <li key={j.an} className="mb-6 ml-5">
              <span className="absolute -left-[9px] h-4 w-4 rounded-full" style={{ background: OR }} />
              <div className="text-sm font-extrabold" style={{ color: VERT }}>{j.an}</div>
              <div className="text-gray-700">{j.txt}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* ——— NOS PARTENAIRES ——— */}
      <section className="mx-auto max-w-4xl px-5 py-8">
        <SectionTitle icon={Handshake} kicker="Nos partenaires" title="Avec qui nous avançons" />
        <div className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">Partenaires vérifiés</div>
        <div className="flex flex-wrap gap-2">
          {PARTENAIRES_OK.map((p) => (
            <span key={p} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-white"
                  style={{ background: VERT }}>
              <CheckCircle2 size={14} style={{ color: OR }} /> {p}
            </span>
          ))}
        </div>
        <div className="mb-3 mt-6 text-xs font-bold uppercase tracking-widest text-gray-500">En construction</div>
        <div className="flex flex-wrap gap-2">
          {PARTENAIRES_WIP.map((p) => (
            <span key={p} className="rounded-full border px-3 py-1.5 text-sm font-medium text-gray-600"
                  style={{ borderColor: '#D9D2C0' }}>{p}</span>
          ))}
        </div>
        {/* Logos optionnels plus tard : public/images/partenaires/<slug>.png */}
      </section>

      {/* ——— COMMENT NOUS MESURONS ——— */}
      <section className="mx-auto max-w-4xl px-5 py-8">
        <SectionTitle icon={Target} kicker="Comment nous mesurons" title="Une trace mesurable, honnête" />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="font-bold" style={{ color: VERT }}>Suivi réel</h3>
            <p className="mt-1 text-sm text-gray-700">
              Livres terminés, quiz complétés, préfectures reconstituées au jeu : chaque parent suit la progression de
              son enfant dans l'Espace Parents, sans collecter aucune donnée personnelle.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-dashed p-5" style={{ borderColor: OR }}>
            <h3 className="font-bold" style={{ color: VERT }}>Avant / après lecture <span className="text-xs font-semibold" style={{ color: OR }}>· En déploiement</span></h3>
            <p className="mt-1 text-sm text-gray-700">
              Un quiz avant et après chaque livre mesurera l'écart d'apprentissage. Nous ne publierons ce chiffre que
              lorsqu'il sera réel.
            </p>
          </div>
        </div>
      </section>

      {/* ——— TÉLÉCHARGER LE RAPPORT ——— */}
      <section className="mx-auto max-w-4xl px-5 py-8">
        <div className="flex flex-col items-start gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
             style={{ background: '#F1ECDD' }}>
          <div>
            <h3 className="text-lg font-extrabold" style={{ color: VERT }}>Télécharger notre rapport d'impact</h3>
            <p className="text-sm text-gray-600">Document de synthèse · 6 pages · institutions & RSE</p>
          </div>
          {/* Bouton désactivé tant que public/rapport-impact-pati.pdf n'existe pas */}
          <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white/80"
                style={{ background: '#9AA79B' }}>
            <Download size={16} /> Bientôt disponible
          </span>
          {/* Quand le PDF est en ligne, remplacer le <span> ci-dessus par :
          <a href="/rapport-impact-pati.pdf" download
             className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white"
             style={{ background: VERT }}><Download size={16} /> Télécharger le PDF</a> */}
        </div>
      </section>

      {/* ——— CTA RSE ——— */}
      <section className="px-5 py-14 text-center text-white" style={{ background: VERT }}>
        <div className="mx-auto max-w-2xl">
          <Heart size={28} className="mx-auto" style={{ color: OR }} />
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold">Offrez un accès, pas une aumône</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/85">
            Un parrain finance l'accès d'enfants qui ne peuvent pas payer. Chaque place ouverte, c'est un enfant qui
            lit dans sa langue. Aucun enfant n'est exclu par l'argent.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contribuer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold"
                  style={{ background: OR, color: VERT }}>
              Soutenir PATI <ArrowRight size={16} />
            </Link>
            <Link to="/atelier"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-bold text-white">
              Découvrir l'Atelier
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
