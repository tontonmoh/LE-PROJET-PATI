// NOUVEAU · src/components/SearchBar.tsx
// Barre de recherche navbar : champ inline ≥ lg, icône loupe + champ déroulant en dessous < lg.
// Résultats groupés par type en dropdown, navigation clavier (↑ ↓ Entrée Échap), sans page de résultats.
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { search, TYPE_ORDER, type SearchItem } from "../data/searchIndex";

type Props = { variant: "desktop" | "mobile"; onClose?: () => void };

export default function SearchBar({ variant, onClose }: Props) {
  const [q, setQ] = useState("");
  const [focus, setFocus] = useState(false);
  const [cursor, setCursor] = useState(0);
  const nav = useNavigate();
  const box = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  const results = useMemo(() => search(q), [q]);
  const grouped = useMemo(
    () => TYPE_ORDER.map((t) => ({ type: t, items: results.filter((r) => r.type === t) })).filter((g) => g.items.length),
    [results]
  );
  const flat = grouped.flatMap((g) => g.items);
  const open = focus && q.trim().length >= 2;

  useEffect(() => setCursor(0), [q]);
  useEffect(() => { if (variant === "mobile") input.current?.focus(); }, [variant]);

  // Clic en dehors → fermer
  useEffect(() => {
    const h = (e: MouseEvent) => { if (!box.current?.contains(e.target as Node)) setFocus(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const go = (it: SearchItem) => {
    setQ(""); setFocus(false); onClose?.();
    if (it.to.endsWith(".html")) window.location.href = it.to; else nav(it.to);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") { setQ(""); setFocus(false); onClose?.(); input.current?.blur(); }
    if (!open) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setCursor((c) => Math.min(c + 1, flat.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setCursor((c) => Math.max(c - 1, 0)); }
    if (e.key === "Enter" && flat[cursor]) { e.preventDefault(); go(flat[cursor]); }
  };

  const desktop = variant === "desktop";

  return (
    <div ref={box} className={`relative ${desktop ? "w-56 xl:w-72" : "w-full"}`}>
      <div className={`flex items-center gap-2 rounded-full bg-white/10 focus-within:bg-white/20 transition-colors ${desktop ? "px-3 py-2" : "px-4 py-3"}`}>
        <Search size={desktop ? 16 : 20} className="text-white/70 shrink-0" />
        <input
          ref={input}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocus(true)}
          onKeyDown={onKey}
          placeholder="Rechercher un livre, une série, un jeu…"
          aria-label="Rechercher sur PATI"
          role="combobox"
          aria-expanded={open}
          className={`bg-transparent outline-none text-white placeholder:text-white/50 w-full ${desktop ? "text-sm" : "text-base"}`}
        />
        {(q || !desktop) && (
          <button
            onClick={() => { if (q) setQ(""); else onClose?.(); input.current?.focus(); }}
            aria-label={q ? "Effacer" : "Fermer la recherche"}
            className="text-white/70 hover:text-white shrink-0"
          >
            <X size={desktop ? 14 : 20} />
          </button>
        )}
      </div>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 mt-2 z-50 rounded-2xl bg-white text-[#1F1F1F] shadow-2xl overflow-hidden max-h-[70vh] overflow-y-auto"
        >
          {flat.length === 0 && (
            <div className="px-4 py-4 text-sm text-neutral-500">Rien pour « {q} ».</div>
          )}
          {grouped.map((g) => (
            <div key={g.type}>
              <div className="px-4 pt-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                {g.type}{g.items.length > 1 ? "s" : ""}
              </div>
              {g.items.map((it) => {
                const i = flat.indexOf(it);
                return (
                  <button
                    key={`${it.type}-${it.to}-${it.title}`}
                    role="option"
                    aria-selected={i === cursor}
                    onMouseEnter={() => setCursor(i)}
                    onClick={() => go(it)}
                    className={`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-colors ${i === cursor ? "bg-[#FFC93C]/25" : "hover:bg-neutral-100"}`}
                  >
                    {it.cover ? (
                      <img src={it.cover} alt="" className="w-8 h-11 object-cover rounded-md shrink-0" loading="lazy" />
                    ) : (
                      <div className="w-8 h-11 rounded-md bg-neutral-200 shrink-0 flex items-center justify-center">
                        <Search size={14} className="text-neutral-400" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="text-sm font-semibold truncate">{it.title}</div>
                      {it.sub && <div className="text-xs text-neutral-500 truncate">{it.sub}</div>}
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
