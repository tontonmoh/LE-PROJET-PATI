import { useState } from 'react';
import { Link } from 'react-router-dom';
import LaGuineCarte from '../components/LaGuineCarte';
import ConakryZoom from '../components/ConakryZoom';
import {
  TOTAL_TERRITOIRES,
  TOTAL_PREFECTURES,
  TOTAL_COMMUNES_CONAKRY,
} from '../data/territoires';
import { useTrackRead } from '../hooks/useTrackRead';

type Vue = 'national' | 'conakry';

const DISPLAY = '"Fraunces", "Cormorant Garamond", Georgia, serif';

export default function GuinePage() {
  const [vue, setVue] = useState<Vue>('national');

  useTrackRead({ slug: "guine", type: "encyclopedie", title: "LaGuinè — Le Pays" });

  return (
    <main className="min-h-screen bg-[#F4ECD8]">

      {/* ─── Hero ─── */}
      <header className="relative bg-gradient-to-br from-[#2A7A8C] to-[#0E3E47] text-white">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
          <nav className="text-xs md:text-sm mb-6 opacity-75">
            <Link to="/" className="hover:text-[#FFD56B] transition-colors">Accueil</Link>
            <span className="mx-2">·</span>
            <span>Encyclopédie LaGuinè</span>
          </nav>

          <p className="text-[11px] md:text-xs uppercase font-bold tracking-[0.4em] mb-3 text-[#E8D5B3]">
            5ᵉ encyclopédie Pati
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: DISPLAY, letterSpacing: '0.02em' }}
          >
            LaGuinè
          </h1>
          <p
            className="text-lg md:text-2xl italic opacity-90 mb-6"
            style={{ fontFamily: DISPLAY }}
          >
            Le voyage par le pays.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm md:text-base mt-8">
            <StatPill nombre={TOTAL_PREFECTURES} libelle="préfectures" />
            <span className="opacity-50">·</span>
            <StatPill nombre={TOTAL_COMMUNES_CONAKRY} libelle="communes de Conakry" />
            <span className="opacity-50">·</span>
            <StatPill nombre={8} libelle="régions administratives" />
          </div>

          <p className="mt-8 max-w-2xl mx-auto text-sm md:text-base opacity-85 leading-relaxed">
            Une terre, son peuple, son trésor. Découvre chacune des {TOTAL_TERRITOIRES} entités
            de la République de Guinée — leur langue, leur plat, leurs figures, leurs mascottes.
          </p>
        </div>

        {/* ─── Bandeau : La Guinée en chiffres (RGPH-4 2025 + MATD/INS) ─── */}
        <div className="bg-black/20 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 py-6 md:py-7">
            <p className="text-center text-[10px] md:text-[11px] uppercase tracking-[0.35em] opacity-70 mb-5">
              La Guinée en chiffres
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-2">
              <MiniStat valeur="17,5 M" libelle="habitants" />
              <MiniStat valeur="245 857" libelle="km²" />
              <MiniStat valeur="378" libelle="sous-préfectures" />
              <MiniStat valeur="46" libelle="communes urbaines" />
              <MiniStat valeur="4 142" libelle="quartiers et districts" />
              <MiniStat valeur="15 741" libelle="villages" />
            </div>
            <p className="text-center text-[9px] md:text-[10px] opacity-55 mt-5 italic">
              Sources : INS — RGPH-4 (recensement 2025, officialisé en mars 2026) · MATD
            </p>
          </div>
        </div>
      </header>

      {/* ─── Tabs vue nationale / vue Conakry ─── */}
      <div className="bg-[#0E3E47] text-white sticky top-0 z-10 shadow-md">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex">
            <TabButton
              active={vue === 'national'}
              onClick={() => setVue('national')}
              label="Carte nationale"
              sub="33 préfectures"
            />
            <TabButton
              active={vue === 'conakry'}
              onClick={() => setVue('conakry')}
              label="Conakry"
              sub="13 communes"
            />
          </div>
        </div>
      </div>

      {/* ─── Contenu : carte cliquable ─── */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        {vue === 'national' ? (
          <LaGuineCarte onConakryClick={() => setVue('conakry')} />
        ) : (
          <ConakryZoom onRetourCarte={() => setVue('national')} />
        )}
      </section>

      {/* ─── Les 8 régions administratives ─── */}
      <section className="bg-white border-t-2 border-[#8b6f47]/20">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#241c10]"
            style={{ fontFamily: DISPLAY }}
          >
            Les huit régions du pays
          </h2>
          <p className="text-center text-[#5a3608] italic mb-8 text-sm md:text-base">
            Sept régions administratives, plus le gouvernorat de Conakry.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RegionCard
              fond="#B85C2D"
              titre="Boké"
              sousTitre="La porte de l'Atlantique"
              text="Bauxite, terres rouges, rivières du Nord."
              prefectures="Boké · Boffa · Fria · Gaoual · Koundara"
              nb={5}
            />
            <RegionCard
              fond="#2A7A8C"
              titre="Kindia"
              sousTitre="La ceinture du climat"
              text="Centre de la Basse-Guinée, ananas et bananes."
              prefectures="Kindia · Coyah · Dubréka · Forécariah · Télimélé"
              nb={5}
            />
            <RegionCard
              fond="#A87A35"
              titre="Mamou"
              sousTitre="La charnière"
              text="Carrefour entre la côte et le Fouta."
              prefectures="Mamou · Dalaba · Pita"
              nb={3}
            />
            <RegionCard
              fond="#8B6F47"
              titre="Labé"
              sousTitre="Le cœur du Fouta-Djallon"
              text="Hauts plateaux, capitale historique des Almamys."
              prefectures="Labé · Koubia · Lélouma · Mali · Tougué"
              nb={5}
            />
            <RegionCard
              fond="#7A8C3D"
              titre="Faranah"
              sousTitre="Le berceau du Niger"
              text="Là où le grand fleuve africain prend sa source."
              prefectures="Faranah · Dabola · Dinguiraye · Kissidougou"
              nb={4}
            />
            <RegionCard
              fond="#D4A04C"
              titre="Kankan"
              sousTitre="La Haute-Guinée"
              text="Maninka, savane, l'âge du Mansaya."
              prefectures="Kankan · Kérouané · Kouroussa · Mandiana · Siguiri"
              nb={5}
            />
            <RegionCard
              fond="#1A5E3A"
              titre="N'Zérékoré"
              sousTitre="La forêt"
              text="Mont Nimba, les langues plurielles."
              prefectures="N'Zérékoré · Beyla · Guéckédou · Lola · Macenta · Yomou"
              nb={6}
            />
            <RegionCard
              fond="#2C3E66"
              titre="Conakry"
              sousTitre="Gouvernorat capitale"
              text="Presqu'île, plus de 3,4 M d'habitants. 13 communes urbaines depuis mars 2024."
              prefectures="13 communes"
              nb={13}
              libelleNb="communes"
            />
          </div>
        </div>
      </section>

      {/* ─── À venir / contribution ─── */}
      <section className="bg-[#F4ECD8] border-t-2 border-[#8b6f47]/20">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h2
            className="text-xl md:text-2xl font-bold mb-3 text-[#241c10]"
            style={{ fontFamily: DISPLAY }}
          >
            Cette encyclopédie grandit avec toi
          </h2>
          <p className="text-[#3D2410] leading-relaxed text-sm md:text-base">
            Chaque préfecture aura bientôt sa mascotte, son plat, sa figure, son mot du terroir.
            Les Clubs Pati et les Préfectures Connectées y contribuent. Reviens régulièrement —
            chaque visite te fera découvrir du nouveau.
          </p>
        </div>
      </section>

    </main>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// Sous-composants UI
// ════════════════════════════════════════════════════════════════════════════

function StatPill({ nombre, libelle }: { nombre: number; libelle: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold" style={{ fontFamily: DISPLAY, color: '#FFD56B' }}>
        {nombre}
      </p>
      <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80 mt-1">
        {libelle}
      </p>
    </div>
  );
}

function MiniStat({ valeur, libelle }: { valeur: string; libelle: string }) {
  return (
    <div className="text-center">
      <p
        className="text-xl md:text-2xl font-bold leading-none"
        style={{ fontFamily: DISPLAY, color: '#FFD56B' }}
      >
        {valeur}
      </p>
      <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] opacity-75 mt-1.5">
        {libelle}
      </p>
    </div>
  );
}

function TabButton({ active, onClick, label, sub }: { active: boolean; onClick: () => void; label: string; sub: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 px-4 py-3 md:py-4 transition-all ${
        active
          ? 'border-[#FFD56B] text-white'
          : 'border-transparent text-white/60 hover:text-white/90 hover:border-white/30'
      }`}
      style={{ borderBottomWidth: 3, borderBottomStyle: 'solid' }}
    >
      <div className="text-sm md:text-base font-bold">{label}</div>
      <div className="text-[10px] md:text-xs opacity-75 mt-0.5">{sub}</div>
    </button>
  );
}

function RegionCard({
  fond,
  titre,
  sousTitre,
  text,
  prefectures,
  nb,
  libelleNb = 'préfectures',
}: {
  fond: string;
  titre: string;
  sousTitre: string;
  text: string;
  prefectures: string;
  nb: number;
  libelleNb?: string;
}) {
  return (
    <article
      className="rounded-xl p-5 shadow-md"
      style={{ background: fond, color: '#F4ECD8' }}
    >
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xl font-bold" style={{ fontFamily: DISPLAY }}>{titre}</h3>
        <span className="text-2xl font-bold" style={{ fontFamily: DISPLAY, color: '#FFD56B' }}>
          {nb}
        </span>
      </div>
      <p className="text-[10px] uppercase tracking-[0.2em] opacity-85 mb-3">
        {sousTitre} · {nb} {libelleNb}
      </p>
      <p className="text-sm leading-relaxed opacity-95 mb-3">{text}</p>
      <p className="text-[11px] opacity-75 italic" style={{ fontFamily: DISPLAY }}>
        {prefectures}
      </p>
    </article>
  );
}
