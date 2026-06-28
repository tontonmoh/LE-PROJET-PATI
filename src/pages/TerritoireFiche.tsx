import { Link, useParams } from 'react-router-dom';
import {
  getBySlug,
  getCompletude,
  LIBELLE_REGION_NATURELLE,
  type Territoire,
} from '../data/territoires';
import { COULEURS_REGION_ADMIN } from '../components/LaGuineCarte';

const DISPLAY = '"Fraunces", "Cormorant Garamond", Georgia, serif';

// Couleurs étendues (ajout d'une teinte claire pour les chips/backgrounds)
const TEINTE_CLAIRE: Record<string, string> = {
  'boke':      '#F0CDB8',
  'kindia':    '#C8DCE3',
  'mamou':     '#EBD4A8',
  'labe':      '#E8D5B3',
  'faranah':   '#D8DCB0',
  'kankan':    '#F5D9A0',
  'nzerekore': '#B8D8C8',
  'conakry':   '#C5CDE0',
};

export default function TerritoireFiche() {
  const { slug } = useParams<{ slug: string }>();
  const territoire = slug ? getBySlug(slug) : undefined;

  if (!territoire) {
    return <NotFound slug={slug} />;
  }

  const couleur = COULEURS_REGION_ADMIN[territoire.regionAdministrative];
  const clair = TEINTE_CLAIRE[territoire.regionAdministrative];
  const completude = getCompletude(territoire);
  const typeLabel = territoire.type === 'commune-conakry' ? 'Commune' : 'Préfecture';

  return (
    <main className="min-h-screen bg-[#F4ECD8]">

      {/* ─── Hero ─── */}
      <header
        className="relative text-white"
        style={{ background: `linear-gradient(135deg, ${couleur.fond}, ${couleur.bord})` }}
      >
        <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
          {/* Fil d'Ariane */}
          <nav className="text-xs md:text-sm mb-6 opacity-80">
            <Link to="/" className="hover:text-[#FFD56B]">Accueil</Link>
            <span className="mx-2">·</span>
            <Link to="/guine" className="hover:text-[#FFD56B]">LaGuinè</Link>
            <span className="mx-2">·</span>
            <span>{territoire.nom}</span>
          </nav>

          <p className="text-[11px] md:text-xs uppercase font-bold tracking-[0.3em] mb-2 opacity-85">
            {typeLabel} · {couleur.label}
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-3"
            style={{ fontFamily: DISPLAY, letterSpacing: '0.02em' }}
          >
            {territoire.nom}
          </h1>

          {territoire.patrimoine?.nomEnLangueLocale && (
            <p
              className="text-xl md:text-2xl italic opacity-85"
              style={{ fontFamily: DISPLAY }}
            >
              « {territoire.patrimoine.nomEnLangueLocale} »
              {territoire.patrimoine.langueDominante && (
                <span className="text-sm not-italic opacity-70 ml-2">
                  en {territoire.patrimoine.langueDominante}
                </span>
              )}
            </p>
          )}

          {/* Carte d'identité minimale en chips */}
          <div className="flex flex-wrap gap-3 mt-6 text-sm">
            <Chip label="Chef-lieu" value={territoire.carteIdentite.chefLieu} />
            {territoire.patrimoine?.langueDominante && (
              <Chip label="Langue" value={territoire.patrimoine.langueDominante} />
            )}
            <Chip label="Ensemble culturel" value={LIBELLE_REGION_NATURELLE[territoire.regionNaturelle].label} />
            {territoire.carteIdentite.population && (
              <Chip
                label="Population"
                value={territoire.carteIdentite.population.toLocaleString('fr-FR')}
              />
            )}
          </div>
        </div>
      </header>

      {/* ─── Sections riches (affichées seulement si data présente) ─── */}
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 space-y-10">

        {/* Sous-préfectures (préfectures uniquement ; absent pour les communes de Conakry) */}
        {territoire.sousPrefectures && territoire.sousPrefectures.length > 0 && (
          <Section
            titre={`Les ${territoire.sousPrefectures.length} sous-préfectures`}
            couleur={couleur}
          >
            <p className="text-[#3D2410] mb-4 text-sm leading-relaxed">
              La préfecture de {territoire.nom} regroupe{' '}
              {territoire.sousPrefectures.length} sous-préfectures, dont son chef-lieu{' '}
              <span className="font-semibold">{territoire.carteIdentite.chefLieu}</span>.
            </p>
            <div className="flex flex-wrap gap-2">
              {territoire.sousPrefectures.map((sp) => {
                const estChefLieu =
                  sp === territoire.carteIdentite.chefLieu ||
                  sp === `${territoire.carteIdentite.chefLieu} Centre`;
                return (
                  <span
                    key={sp}
                    className="rounded-full px-3 py-1.5 text-sm font-medium border"
                    style={{
                      backgroundColor: estChefLieu ? couleur.fond : '#FFF9F0',
                      color: estChefLieu ? '#FFFFFF' : '#3D2410',
                      borderColor: couleur.bord,
                    }}
                  >
                    {sp}
                  </span>
                );
              })}
            </div>
          </Section>
        )}

        {/* Mascotte */}
        {territoire.mascotte && (
          <Section titre="La mascotte" couleur={couleur}>
            <div className="flex gap-5 items-start">
              {territoire.mascotte.imageUrl && (
                <img
                  src={territoire.mascotte.imageUrl}
                  alt={territoire.mascotte.nom}
                  className="w-32 h-32 rounded-xl object-cover shrink-0"
                  style={{ border: `2px solid ${couleur.bord}` }}
                />
              )}
              <div>
                <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: DISPLAY, color: couleur.bord }}>
                  {territoire.mascotte.nom}
                </h3>
                <p className="text-[#3D2410] leading-relaxed">{territoire.mascotte.description}</p>
                {territoire.mascotte.histoirCourte && (
                  <p className="italic text-[#5a3608] mt-2 text-sm" style={{ fontFamily: DISPLAY }}>
                    {territoire.mascotte.histoirCourte}
                  </p>
                )}
                {territoire.mascotte.creditCreation && (
                  <p className="text-xs text-[#3D2410]/60 mt-3">
                    {territoire.mascotte.creditCreation}
                  </p>
                )}
              </div>
            </div>
          </Section>
        )}

        {/* Géographie */}
        {territoire.geographie && (
          <Section titre="La terre, le relief" couleur={couleur}>
            <dl className="space-y-3 text-[#3D2410]">
              {territoire.geographie.relief && <DL label="Relief">{territoire.geographie.relief}</DL>}
              {territoire.geographie.climat && <DL label="Climat">{territoire.geographie.climat}</DL>}
              {territoire.geographie.fleuves && territoire.geographie.fleuves.length > 0 && (
                <DL label="Fleuves">{territoire.geographie.fleuves.join(', ')}</DL>
              )}
              {territoire.geographie.paysageEmblematique && (
                <DL label="Paysage emblématique">{territoire.geographie.paysageEmblematique}</DL>
              )}
            </dl>
          </Section>
        )}

        {/* Patrimoine vivant */}
        {territoire.patrimoine && (
          territoire.patrimoine.ethnies ||
          territoire.patrimoine.feteEmblematique ||
          territoire.patrimoine.instrumentMusical ||
          territoire.patrimoine.danse ||
          territoire.patrimoine.conteAssocie
        ) && (
          <Section titre="Patrimoine vivant" couleur={couleur}>
            <dl className="space-y-3 text-[#3D2410]">
              {territoire.patrimoine.ethnies && territoire.patrimoine.ethnies.length > 0 && (
                <DL label="Ethnies">{territoire.patrimoine.ethnies.join(', ')}</DL>
              )}
              {territoire.patrimoine.feteEmblematique && (
                <DL label="Fête emblématique">{territoire.patrimoine.feteEmblematique}</DL>
              )}
              {territoire.patrimoine.instrumentMusical && (
                <DL label="Instrument">{territoire.patrimoine.instrumentMusical}</DL>
              )}
              {territoire.patrimoine.danse && (
                <DL label="Danse">{territoire.patrimoine.danse}</DL>
              )}
            </dl>
          </Section>
        )}

        {/* Plat emblématique */}
        {territoire.plat && (
          <Section titre="Le plat préfectoral" couleur={couleur}>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: DISPLAY, color: couleur.bord }}>
              {territoire.plat.nom}
            </h3>
            {territoire.plat.description && (
              <p className="text-[#3D2410] leading-relaxed mb-3">{territoire.plat.description}</p>
            )}
            {territoire.plat.ingredientsCles && territoire.plat.ingredientsCles.length > 0 && (
              <p className="text-sm text-[#5a3608]">
                <span className="font-semibold">Ingrédients-clés : </span>
                {territoire.plat.ingredientsCles.join(' · ')}
              </p>
            )}
          </Section>
        )}

        {/* Trésor */}
        {territoire.tresor && (
          <Section titre="Le trésor d'ici" couleur={couleur}>
            {territoire.tresor.contributionNationale && (
              <p
                className="text-lg italic mb-3"
                style={{ fontFamily: DISPLAY, color: couleur.bord }}
              >
                « {territoire.tresor.contributionNationale} »
              </p>
            )}
            {territoire.tresor.ressources && territoire.tresor.ressources.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {territoire.tresor.ressources.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: clair,
                      color: couleur.bord,
                      border: `1px solid ${couleur.bord}33`,
                    }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            )}
            {territoire.tresor.lienSimandou2040 && (
              <p className="text-xs text-[#5a3608] mt-3">
                <span className="font-bold uppercase tracking-wider">Simandou 2040 · </span>
                {territoire.tresor.lienSimandou2040}
              </p>
            )}
          </Section>
        )}

        {/* Figure locale */}
        {territoire.figureLocale && (
          <Section titre="La figure" couleur={couleur}>
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: DISPLAY, color: couleur.bord }}>
              {territoire.figureLocale.nom}
            </h3>
            <p className="text-xs uppercase tracking-wider mb-3" style={{ color: couleur.fond }}>
              {territoire.figureLocale.metier}
              {territoire.figureLocale.periode && ` · ${territoire.figureLocale.periode}`}
            </p>
            <p className="text-[#3D2410] leading-relaxed italic" style={{ fontFamily: DISPLAY }}>
              {territoire.figureLocale.pourquoi}
            </p>
            {territoire.figureLocale.livreAssocieSlug && (
              <Link
                to={`/livres/${territoire.figureLocale.livreAssocieSlug}`}
                className="inline-block mt-4 text-sm font-semibold hover:underline"
                style={{ color: couleur.fond }}
              >
                Lire le livre Pati →
              </Link>
            )}
          </Section>
        )}

        {/* Mot du terroir */}
        {territoire.motDuTerroir && (
          <Section titre="Le mot du terroir" couleur={couleur}>
            <p
              className="text-3xl md:text-4xl font-bold mb-1"
              style={{ fontFamily: DISPLAY, color: couleur.fond }}
            >
              « {territoire.motDuTerroir.mot} »
            </p>
            <p className="text-xs uppercase tracking-[0.25em] mb-3" style={{ color: couleur.bord }}>
              en {territoire.motDuTerroir.langue}
            </p>
            <p className="text-[#3D2410] leading-relaxed">
              <span className="font-semibold">Sens :</span> {territoire.motDuTerroir.traduction}
            </p>
            {territoire.motDuTerroir.contexte && (
              <p className="text-sm text-[#5a3608] mt-2 italic">{territoire.motDuTerroir.contexte}</p>
            )}
          </Section>
        )}

        {/* État de remplissage */}
        {completude < 60 && (
          <FicheEnConstruction completude={completude} couleur={couleur} clair={clair} nom={territoire.nom} />
        )}
      </div>

      {/* ─── Retour à la carte ─── */}
      <div className="border-t-2 border-[#8b6f47]/20 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <Link
            to="/guine"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-colors hover:opacity-90"
            style={{ background: couleur.fond }}
          >
            ← Retour à la carte de LaGuinè
          </Link>
        </div>
      </div>
    </main>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// Sous-composants
// ════════════════════════════════════════════════════════════════════════════

function Section({
  titre,
  couleur,
  children,
}: {
  titre: string;
  couleur: { fond: string; bord: string };
  children: React.ReactNode;
}) {
  return (
    <section
      className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
      style={{ borderLeft: `4px solid ${couleur.fond}` }}
    >
      <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-4" style={{ color: couleur.fond }}>
        {titre}
      </h2>
      {children}
    </section>
  );
}

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/15 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/25">
      <span className="text-[10px] uppercase tracking-wider opacity-70 mr-2">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function DL({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:gap-4">
      <dt className="text-xs uppercase tracking-wider text-[#5a3608]/80 md:w-40 shrink-0 mt-1">
        {label}
      </dt>
      <dd className="text-[#241c10] flex-1">{children}</dd>
    </div>
  );
}

function FicheEnConstruction({
  completude,
  couleur,
  clair,
  nom,
}: {
  completude: number;
  couleur: { fond: string; bord: string };
  clair: string;
  nom: string;
}) {
  return (
    <div
      className="rounded-2xl p-6 md:p-8 text-center"
      style={{ background: clair, border: `1.5px dashed ${couleur.fond}` }}
    >
      <p
        className="text-base md:text-lg font-bold mb-2"
        style={{ fontFamily: DISPLAY, color: couleur.bord }}
      >
        Fiche de {nom} — en construction
      </p>
      <p className="text-sm text-[#3D2410] mb-4">
        Cette fiche s'enrichit progressivement grâce aux Clubs Pati et au programme Préfectures Connectées.
        Mascotte, plat, figure, mot du terroir : reviens bientôt pour découvrir tout cela.
      </p>
      <div className="max-w-xs mx-auto">
        <div className="flex items-center justify-between text-xs mb-1" style={{ color: couleur.bord }}>
          <span>État de la fiche</span>
          <span className="font-bold">{completude}%</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: `${couleur.bord}22` }}>
          <div
            className="h-full transition-all"
            style={{ width: `${completude}%`, background: couleur.fond }}
          />
        </div>
      </div>
    </div>
  );
}

function NotFound({ slug }: { slug?: string }) {
  return (
    <main className="min-h-screen bg-[#F4ECD8] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-6xl mb-4">🗺️</p>
        <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: DISPLAY, color: '#241c10' }}>
          Territoire introuvable
        </h1>
        <p className="text-[#5a3608] mb-6">
          Le territoire « <code className="bg-white px-2 py-1 rounded">{slug}</code> » n'existe pas
          dans l'encyclopédie LaGuinè.
        </p>
        <Link
          to="/guine"
          className="inline-block px-5 py-2.5 rounded-lg bg-[#2A7A8C] text-white font-semibold hover:bg-[#0E3E47] transition-colors"
        >
          Retour à la carte
        </Link>
      </div>
    </main>
  );
}
