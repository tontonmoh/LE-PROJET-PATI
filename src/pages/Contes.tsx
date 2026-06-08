import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Headphones, ArrowLeft } from "lucide-react";
import { CONTES, LANGS, type Lang } from "../data/contes";

const GREEN = "#0D2B1A", GOLD = "#FFC93C";

export default function Contes() {
  const [lang, setLang] = useState<Lang | "tous">("tous");
  useEffect(() => { document.title = "Écouter les contes · Pati"; }, []);

  const list = useMemo(
    () => (lang === "tous" ? CONTES : CONTES.filter((c) => c.lang === lang)),
    [lang],
  );
  const labelOf = (id: Lang | "tous") => LANGS.find((l) => l.id === id)?.label ?? "";
  const countFor = (id: Lang | "tous") => id === "tous" ? CONTES.length : CONTES.filter((c) => c.lang === id).length;

  return (
    <div style={{ background: "#FFF6E7" }}>
      {/* hero */}
      <section className="w-full" style={{ background: GREEN }}>
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-14">
          <Link to="/" className="inline-flex items-center gap-1.5 font-display font-semibold mb-6 hover:underline" style={{ color: GOLD }}>
            <ArrowLeft size={18} /> Accueil
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <Headphones size={30} style={{ color: GOLD }} />
            <h1 className="font-display font-bold text-3xl md:text-4xl" style={{ color: "#fff" }}>Écouter les contes</h1>
          </div>
          <p className="text-lg max-w-2xl" style={{ color: "#ffffffcc" }}>
            Des contes du patrimoine, racontés dans nos langues. Choisis ta langue et écoute.
          </p>
        </div>
      </section>

      {/* filtre par langue */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <div className="flex flex-wrap gap-2">
          {LANGS.map((l) => {
            const active = lang === l.id;
            const n = countFor(l.id);
            return (
              <button key={l.id} onClick={() => setLang(l.id)}
                className="font-display font-semibold text-sm rounded-full px-4 py-2 transition"
                style={{
                  background: active ? GOLD : "#fff",
                  color: active ? GREEN : "#3a4a42",
                  border: `1.5px solid ${active ? GOLD : "#0d2b1a1a"}`,
                  opacity: n === 0 ? 0.5 : 1,
                }}>
                {l.label}{n > 0 && <span style={{ opacity: 0.6 }}> · {n}</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* liste */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        {list.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center" style={{ border: "1px solid #0d2b1a14" }}>
            <p className="font-display font-semibold" style={{ color: GREEN }}>
              Bientôt des contes en {labelOf(lang)}.
            </p>
            <p className="text-sm mt-1" style={{ color: "#5a6b62" }}>Nous enrichissons la collection langue par langue.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {list.map((c) => (
              <div key={c.id} className="rounded-2xl bg-white p-4 md:p-5" style={{ border: "1px solid #0d2b1a14" }}>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-display font-bold leading-tight" style={{ color: GREEN }}>{c.title}</h3>
                    <p className="text-xs font-semibold" style={{ color: "#5a6b62" }}>
                      {labelOf(c.lang)}{c.narrator ? ` · ${c.narrator}` : ""}
                    </p>
                  </div>
                  <span className="font-display font-semibold text-xs rounded-full px-3 py-1 shrink-0"
                    style={{ background: `${GOLD}33`, color: "#7a5a00" }}>{labelOf(c.lang)}</span>
                </div>
                <audio controls preload="none" className="w-full">
                  <source src={c.audio} type="audio/mpeg" />
                </audio>
              </div>
            ))}
          </div>
        )}

        <p className="text-xs mt-8" style={{ color: "#5a6b62" }}>
          Astuce : pour écouter <strong>hors connexion</strong>, installe l'application <Link to="/contes" className="underline" style={{ color: "#B23A1E" }}>Contes Pati</Link>.
        </p>
      </section>
    </div>
  );
}
