// ============================================================
// LE MÉMORIAL HOROYA — /horoya/memorial
// Trois fonds issus de la SENAG 2026 : les Pionniers (expo),
// les 60 Compagnons de l'Indépendance (1957) et la Croix du
// Compagnon de l'Indépendance (1959-1960).
// Charte HOROYA : VERT #1a5e3a · OR #c9a227 · ROUGE #c8341e ·
// CREAM #f4ecd8 · INK #241c10
// ============================================================

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  PIONNIERS,
  PIONNIERS_CATEGORIES,
  COMPAGNONS_REPERES,
  COMPAGNONS_BUREAU,
  COMPAGNONS_SIEGES,
  PREMIER_GOUVERNEMENT,
  CROIX_DECRETS,
  CROIX_TOTAL,
  MEMORIAL_SOURCES,
  MEMORIAL_AVERTISSEMENT,
  Pionnier,
} from "../data/horoyaMemorial";

type Onglet = "pionniers" | "compagnons" | "croix";

const VERT = "#1a5e3a";
const OR = "#c9a227";
const ROUGE = "#c8341e";
const CREAM = "#f4ecd8";
const INK = "#241c10";

// ------------------------------------------------------------
// Petits blocs
// ------------------------------------------------------------

function Compteur({ valeur, legende }: { valeur: string; legende: string }) {
  return (
    <div className="text-center px-4">
      <div
        className="font-serif text-4xl sm:text-5xl font-bold tracking-tight"
        style={{ color: OR }}
      >
        {valeur}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#f4ecd8]/70">
        {legende}
      </div>
    </div>
  );
}

function normalise(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// ------------------------------------------------------------
// I. Les Pionniers — galerie + notice dépliable
// ------------------------------------------------------------

function CartePionnier({
  p,
  ouvert,
  onToggle,
}: {
  p: Pionnier;
  ouvert: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-lg overflow-hidden border transition-all duration-200 bg-white ${
        ouvert ? "col-span-full shadow-lg" : "hover:shadow-md"
      }`}
      style={{ borderColor: ouvert ? OR : "#e5dcc3" }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={ouvert}
        className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{ ["--tw-ring-color" as string]: VERT }}
      >
        <div className={ouvert ? "sm:flex" : ""}>
          <div
            className={`relative bg-[#241c10] ${
              ouvert ? "sm:w-64 sm:shrink-0" : ""
            }`}
          >
            <img
              src={p.image}
              alt={`Portrait de ${p.nom}`}
              loading="lazy"
              className={`w-full object-cover object-top grayscale ${
                ouvert ? "h-64 sm:h-full" : "h-56"
              }`}
            />
          </div>
          <div className="p-4">
            <div
              className="text-[10px] uppercase tracking-[0.18em] font-semibold"
              style={{ color: ROUGE }}
            >
              {p.titre}
            </div>
            <div
              className="mt-1 font-serif text-lg leading-snug font-bold"
              style={{ color: INK }}
            >
              {p.nom}
            </div>
            {p.dates && (
              <div className="text-sm text-[#241c10]/60">{p.dates}</div>
            )}
            {!ouvert && (
              <div
                className="mt-3 text-xs font-medium underline underline-offset-4"
                style={{ color: VERT }}
              >
                Lire la notice
              </div>
            )}
          </div>
        </div>
      </button>

      {ouvert && (
        <div className="px-4 pb-5 sm:px-6 space-y-4 border-t" style={{ borderColor: "#efe6cd" }}>
          <div className="pt-4">
            <h4
              className="text-xs uppercase tracking-[0.18em] font-bold mb-1.5"
              style={{ color: VERT }}
            >
              Identité & rôle pivot
            </h4>
            <p className="text-[15px] leading-relaxed text-[#241c10]/90">
              {p.identite}
            </p>
          </div>

          {(p.chantierAxes.length > 0 || p.chantierTitre) && (
            <div>
              <h4
                className="text-xs uppercase tracking-[0.18em] font-bold mb-1.5"
                style={{ color: VERT }}
              >
                Le grand chantier administratif
              </h4>
              <p className="text-[15px] font-medium" style={{ color: INK }}>
                {p.chantierTitre}
              </p>
              {p.chantierAxes.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {p.chantierAxes.map((axe) => (
                    <li key={axe} className="flex gap-2 text-[15px] text-[#241c10]/90">
                      <span aria-hidden="true" style={{ color: OR }}>
                        ◆
                      </span>
                      {axe}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {p.resonance && (
            <div
              className="rounded-md px-4 py-3 text-[15px] leading-relaxed"
              style={{ backgroundColor: "#f4ecd8", color: INK }}
            >
              <span
                className="block text-[10px] uppercase tracking-[0.18em] font-bold mb-1"
                style={{ color: ROUGE }}
              >
                Résonance Simandou 2040
              </span>
              {p.resonance}
            </div>
          )}

          <button
            type="button"
            onClick={onToggle}
            className="text-xs font-medium underline underline-offset-4"
            style={{ color: VERT }}
          >
            Refermer la notice
          </button>
        </div>
      )}
    </div>
  );
}

function OngletPionniers() {
  const [ouvert, setOuvert] = useState<string | null>(null);
  const categories = Object.keys(PIONNIERS_CATEGORIES) as Pionnier["categorie"][];

  return (
    <div className="space-y-10">
      <p className="max-w-3xl text-[15px] leading-relaxed text-[#241c10]/80">
        Dix femmes et hommes qui ont bâti l'administration de la Guinée
        souveraine. Ces notices sont issues de l'exposition « Les Pionniers »
        présentée à la SENAG 2026 — le Président, les chefs des quatre
        formations politiques de 1957, et les figures de « premier » qui ont
        ouvert des portes que personne n'avait franchies avant elles.
      </p>

      {categories.map((cat) => {
        const groupe = PIONNIERS.filter((p) => p.categorie === cat);
        return (
          <section key={cat} aria-label={PIONNIERS_CATEGORIES[cat]}>
            <h3
              className="font-serif text-xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: INK, borderColor: OR }}
            >
              {PIONNIERS_CATEGORIES[cat]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupe.map((p) => (
                <CartePionnier
                  key={p.id}
                  p={p}
                  ouvert={ouvert === p.id}
                  onToggle={() => setOuvert(ouvert === p.id ? null : p.id)}
                />
              ))}
            </div>
          </section>
        );
      })}

      <p className="text-xs text-[#241c10]/50 italic">
        Portraits : restitutions visuelles d'après archives, exposition SENAG
        2026.
      </p>
    </div>
  );
}

// ------------------------------------------------------------
// II. Les 60 Compagnons
// ------------------------------------------------------------

function OngletCompagnons() {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-3">
        <p className="text-[15px] leading-relaxed text-[#241c10]/80">
          {COMPAGNONS_REPERES}
        </p>
        <p className="text-[15px] leading-relaxed text-[#241c10]/80">
          Ce sont eux — les élus du 31 mars 1957 — que la mémoire nationale
          appelle <strong>les 60 Compagnons de l'Indépendance</strong> : les
          constituants qui ont voté la première Constitution de la République
          de Guinée.
        </p>
      </div>

      {/* Bureau */}
      <section aria-label="Bureau de l'Assemblée nationale">
        <h3
          className="font-serif text-xl font-bold mb-4 pb-2 border-b-2"
          style={{ color: INK, borderColor: OR }}
        >
          Le Bureau de l'Assemblée nationale
        </h3>
        <div className="overflow-hidden rounded-lg border" style={{ borderColor: "#e5dcc3" }}>
          <table className="w-full text-[15px]">
            <tbody>
              {COMPAGNONS_BUREAU.map((b, i) => (
                <tr
                  key={b.fonction}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#faf6ea]"}
                >
                  <th
                    scope="row"
                    className="text-left px-4 py-2.5 font-semibold w-1/2 sm:w-2/5"
                    style={{ color: VERT }}
                  >
                    {b.fonction}
                  </th>
                  <td className="px-4 py-2.5" style={{ color: INK }}>
                    {b.titulaire}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sièges par circonscription */}
      <section aria-label="Membres par circonscription">
        <h3
          className="font-serif text-xl font-bold mb-1 pb-2 border-b-2"
          style={{ color: INK, borderColor: OR }}
        >
          Les sièges, circonscription par circonscription
        </h3>
        <p className="text-xs text-[#241c10]/60 mt-2 mb-4">
          Les noms suivis d'une{" "}
          <span
            className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold"
            style={{ backgroundColor: "#f4ecd8", color: ROUGE }}
          >
            mention complémentaire
          </span>{" "}
          proviennent d'un croisement de sources et non de la liste principale
          des annexes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {COMPAGNONS_SIEGES.map((s) => (
            <div
              key={s.circonscription}
              className="rounded-lg border bg-white p-4"
              style={{ borderColor: "#e5dcc3" }}
            >
              <div
                className="text-[11px] uppercase tracking-[0.18em] font-bold"
                style={{ color: ROUGE }}
              >
                {s.circonscription}
              </div>
              {s.membres.length > 0 ? (
                <ul className="mt-2 space-y-1">
                  {s.membres.map((m) => (
                    <li key={m} className="text-[15px] leading-snug" style={{ color: INK }}>
                      {m}
                    </li>
                  ))}
                </ul>
              ) : null}
              {s.complement && (
                <div className="mt-2 text-[14px]" style={{ color: INK }}>
                  {s.complement}{" "}
                  <span
                    className="inline-block ml-1 px-1.5 py-0.5 rounded text-[10px] font-semibold align-middle"
                    style={{ backgroundColor: "#f4ecd8", color: ROUGE }}
                  >
                    mention complémentaire
                  </span>
                </div>
              )}
              {s.note && (
                <p className="mt-2 text-xs italic text-[#241c10]/60">{s.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Premier gouvernement */}
      <section aria-label="Premier gouvernement de la Guinée indépendante">
        <h3
          className="font-serif text-xl font-bold mb-4 pb-2 border-b-2"
          style={{ color: INK, borderColor: OR }}
        >
          Le premier gouvernement de la Guinée indépendante
          <span className="block text-sm font-normal mt-0.5 text-[#241c10]/60">
            2 octobre 1958
          </span>
        </h3>
        <div className="overflow-hidden rounded-lg border" style={{ borderColor: "#e5dcc3" }}>
          <table className="w-full text-[15px]">
            <tbody>
              {PREMIER_GOUVERNEMENT.map((g, i) => (
                <tr
                  key={g.portefeuille}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#faf6ea]"}
                >
                  <th
                    scope="row"
                    className="text-left px-4 py-2.5 font-semibold w-1/2 sm:w-3/5"
                    style={{ color: VERT }}
                  >
                    {g.portefeuille}
                  </th>
                  <td className="px-4 py-2.5" style={{ color: INK }}>
                    {g.titulaire}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ------------------------------------------------------------
// III. La Croix du Compagnon — rouleau d'honneur + recherche
// ------------------------------------------------------------

function OngletCroix() {
  const [recherche, setRecherche] = useState("");
  const [decretsOuverts, setDecretsOuverts] = useState<string[]>(["d227"]);

  const q = normalise(recherche.trim());
  const enRecherche = q.length >= 2;

  const decretsFiltres = useMemo(() => {
    if (!enRecherche) return CROIX_DECRETS;
    return CROIX_DECRETS.map((d) => ({
      ...d,
      sections: d.sections
        .map((s) => ({
          ...s,
          entrees: s.entrees.filter(
            (e) => normalise(e.nom).includes(q) || normalise(e.mention).includes(q)
          ),
        }))
        .filter((s) => s.entrees.length > 0),
    })).filter((d) => d.sections.length > 0);
  }, [q, enRecherche]);

  const nbResultats = useMemo(
    () =>
      decretsFiltres.reduce(
        (acc, d) => acc + d.sections.reduce((a, s) => a + s.entrees.length, 0),
        0
      ),
    [decretsFiltres]
  );

  const toggleDecret = (id: string) =>
    setDecretsOuverts((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <div className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <p className="text-[15px] leading-relaxed text-[#241c10]/80">
          En 1959 et 1960, la jeune République décore{" "}
          <strong>{CROIX_TOTAL} femmes et hommes</strong> de la Croix du
          Compagnon de l'Indépendance. Ministres et ménagères, députés et
          cultivateurs, notables et facteurs des postes : le rouleau d'honneur
          dit, mieux que tout discours, que l'indépendance fut l'œuvre de tout
          un peuple.
        </p>
        <p className="text-[15px] leading-relaxed text-[#241c10]/80">
          Cette transcription reproduit le panneau commémoratif du Secrétariat
          Général du Gouvernement, décret par décret, localité par localité.
        </p>
      </div>

      {/* Recherche */}
      <div className="max-w-md">
        <label
          htmlFor="recherche-croix"
          className="block text-xs uppercase tracking-[0.18em] font-bold mb-1.5"
          style={{ color: VERT }}
        >
          Chercher un nom
        </label>
        <input
          id="recherche-croix"
          type="search"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          placeholder="Ex. : Camara, Boulbinet, institutrice…"
          className="w-full rounded-lg border bg-white px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2"
          style={{ borderColor: "#e5dcc3", ["--tw-ring-color" as string]: VERT }}
        />
        {enRecherche && (
          <p className="mt-1.5 text-sm" style={{ color: nbResultats ? VERT : ROUGE }}>
            {nbResultats > 0
              ? `${nbResultats} nom${nbResultats > 1 ? "s" : ""} trouvé${
                  nbResultats > 1 ? "s" : ""
                }`
              : "Aucun nom ne correspond — essayez une autre graphie (les orthographes de 1959 varient)."}
          </p>
        )}
      </div>

      {/* Décrets */}
      <div className="space-y-4">
        {decretsFiltres.map((d) => {
          const ouvert = enRecherche || decretsOuverts.includes(d.id);
          const nb = d.sections.reduce((a, s) => a + s.entrees.length, 0);
          return (
            <section
              key={d.id}
              className="rounded-lg border bg-white overflow-hidden"
              style={{ borderColor: "#e5dcc3" }}
            >
              <button
                type="button"
                onClick={() => toggleDecret(d.id)}
                aria-expanded={ouvert}
                className="w-full flex items-baseline justify-between gap-3 text-left px-4 sm:px-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset"
                style={{ ["--tw-ring-color" as string]: VERT }}
              >
                <div>
                  <span
                    className="font-serif text-lg font-bold"
                    style={{ color: INK }}
                  >
                    {d.titre}
                  </span>
                  {d.note && (
                    <span
                      className="ml-2 inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold align-middle"
                      style={{
                        backgroundColor: d.id === "d227" ? ROUGE : "#f4ecd8",
                        color: d.id === "d227" ? "#fff" : INK,
                      }}
                    >
                      {d.note}
                    </span>
                  )}
                </div>
                <span
                  className="shrink-0 text-sm font-semibold tabular-nums"
                  style={{ color: OR }}
                >
                  {nb} nom{nb > 1 ? "s" : ""} {ouvert ? "−" : "+"}
                </span>
              </button>

              {ouvert && (
                <div
                  className="px-4 sm:px-6 pb-6 space-y-6 border-t pt-4"
                  style={{ borderColor: "#efe6cd" }}
                >
                  {d.sections.map((s) => (
                    <div key={s.titre}>
                      <h4
                        className="text-[11px] uppercase tracking-[0.2em] font-bold mb-2"
                        style={{ color: ROUGE }}
                      >
                        {s.titre}
                      </h4>
                      <ol className="sm:columns-2 lg:columns-3 gap-8">
                        {s.entrees.map((e) => (
                          <li
                            key={`${d.id}-${s.titre}-${e.n}`}
                            className="break-inside-avoid flex gap-2 py-1 text-[14px] leading-snug"
                          >
                            <span
                              className="shrink-0 w-8 text-right tabular-nums"
                              style={{ color: OR }}
                            >
                              {e.n}.
                            </span>
                            <span>
                              <span className="font-semibold" style={{ color: INK }}>
                                {e.nom}
                              </span>
                              {e.mention && (
                                <span className="text-[#241c10]/60">
                                  {" "}
                                  — {e.mention}
                                </span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

// ------------------------------------------------------------
// Page
// ------------------------------------------------------------

export default function HoroyaMemorialPage() {
  const [onglet, setOnglet] = useState<Onglet>("pionniers");

  const onglets: { id: Onglet; label: string }[] = [
    { id: "pionniers", label: "Les Pionniers" },
    { id: "compagnons", label: "Les 60 Compagnons" },
    { id: "croix", label: "La Croix du Compagnon" },
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: CREAM }}>
      {/* Hero */}
      <header className="relative" style={{ backgroundColor: INK }}>
        <div
          className="absolute inset-x-0 top-0 h-1"
          aria-hidden="true"
          style={{
            background: `linear-gradient(90deg, ${ROUGE} 0 33%, ${OR} 33% 66%, ${VERT} 66% 100%)`,
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-10 text-center">
          <Link
            to="/horoya"
            className="inline-block text-[11px] uppercase tracking-[0.25em] font-semibold mb-4 underline-offset-4 hover:underline"
            style={{ color: OR }}
          >
            ← Horoya · 1946-1960
          </Link>
          <h1
            className="font-serif text-4xl sm:text-5xl font-bold text-white"
          >
            Le Mémorial Horoya
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-[15px] leading-relaxed text-[#f4ecd8]/80">
            Celles et ceux qui ont porté l'indépendance — nom par nom, d'après
            les archives réunies pour la première Semaine Nationale des
            Archives de Guinée.
          </p>
          <div className="mt-8 flex justify-center divide-x divide-[#f4ecd8]/20">
            <Compteur valeur="10" legende="Pionniers" />
            <Compteur valeur="60" legende="Compagnons" />
            <Compteur valeur={String(CROIX_TOTAL)} legende="Décorés" />
          </div>
        </div>
      </header>

      {/* Onglets */}
      <nav
        aria-label="Fonds du mémorial"
        className="sticky top-0 z-10 border-b"
        style={{ backgroundColor: CREAM, borderColor: "#e5dcc3" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-1 overflow-x-auto">
          {onglets.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setOnglet(o.id)}
              aria-current={onglet === o.id ? "page" : undefined}
              className={`shrink-0 px-4 py-3 text-sm font-semibold border-b-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset ${
                onglet === o.id ? "" : "border-transparent hover:opacity-80"
              }`}
              style={{
                color: onglet === o.id ? VERT : "#241c10",
                borderBottomColor: onglet === o.id ? ROUGE : "transparent",
                ["--tw-ring-color" as string]: VERT,
              }}
            >
              {o.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Contenu */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {onglet === "pionniers" && <OngletPionniers />}
        {onglet === "compagnons" && <OngletCompagnons />}
        {onglet === "croix" && <OngletCroix />}
      </div>

      {/* Méthode & sources */}
      <footer className="border-t" style={{ borderColor: "#e5dcc3" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <h2
            className="text-xs uppercase tracking-[0.2em] font-bold mb-3"
            style={{ color: VERT }}
          >
            Méthode & sources
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[#241c10]/70">
            {MEMORIAL_AVERTISSEMENT}
          </p>
          <ul className="mt-4 max-w-3xl space-y-1.5">
            {MEMORIAL_SOURCES.map((s) => (
              <li key={s} className="flex gap-2 text-sm text-[#241c10]/70">
                <span aria-hidden="true" style={{ color: OR }}>
                  •
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </main>
  );
}
