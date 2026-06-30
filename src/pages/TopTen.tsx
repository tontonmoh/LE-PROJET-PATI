import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

type Period = "24h" | "7d" | "30d" | "all";

interface TopRow {
  item_slug: string;
  item_type: string;
  item_title: string | null;
  read_count: number;
}

const PERIOD_LABELS: Record<Period, string> = {
  "24h": "Dernières 24 h",
  "7d": "7 derniers jours",
  "30d": "30 derniers jours",
  all: "Depuis le début",
};

function periodToSince(p: Period): string | null {
  const now = Date.now();
  switch (p) {
    case "24h":
      return new Date(now - 24 * 3600 * 1000).toISOString();
    case "7d":
      return new Date(now - 7 * 24 * 3600 * 1000).toISOString();
    case "30d":
      return new Date(now - 30 * 24 * 3600 * 1000).toISOString();
    case "all":
      return null;
  }
}

function routeFor(row: TopRow): string {
  // À ajuster selon les conventions de routes de projetpati.com
  if (row.item_type === "livre") return `/livre/${row.item_slug}/lire`;
  if (row.item_type === "serie") return `/serie/${row.item_slug}`;
  return `/${row.item_slug}`;
}

function ItemLink({ row }: { row: TopRow }) {
  return (
    <Link
      to={routeFor(row)}
      className="text-gray-800 hover:text-orange-600 hover:underline transition"
    >
      {row.item_title || row.item_slug}
    </Link>
  );
}

function TopList({
  type,
  label,
  emoji,
  limit,
  period,
}: {
  type: string;
  label: string;
  emoji: string;
  limit: number;
  period: Period;
}) {
  const [rows, setRows] = useState<TopRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    supabase
      .rpc("get_top_items", {
        p_type: type,
        p_since: periodToSince(period),
        p_limit: limit,
      })
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          console.error(error);
          setRows([]);
        } else {
          setRows((data as TopRow[]) || []);
        }
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [type, period, limit]);

  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4">
        <span className="mr-2">{emoji}</span>
        {label}
      </h2>

      {loading ? (
        <p className="text-gray-400">Chargement…</p>
      ) : rows.length === 0 ? (
        <p className="text-gray-400 italic">
          Pas encore de lectures sur cette période.
        </p>
      ) : (
        <ol className="space-y-3">
          {rows.map((row, idx) => (
            <li
              key={`${row.item_type}-${row.item_slug}`}
              className="flex items-baseline gap-3 border-b border-gray-100 pb-2 last:border-0 last:pb-0"
            >
              <span
                className={`text-lg font-bold w-8 tabular-nums ${
                  idx === 0
                    ? "text-yellow-500"
                    : idx === 1
                    ? "text-gray-400"
                    : idx === 2
                    ? "text-orange-700"
                    : "text-gray-300"
                }`}
              >
                {idx + 1}
              </span>
              <span className="flex-1">
                <ItemLink row={row} />
              </span>
              <span className="text-sm text-gray-500 tabular-nums whitespace-nowrap">
                {row.read_count.toLocaleString("fr-FR")}{" "}
                {row.read_count > 1 ? "lectures" : "lecture"}
              </span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default function TopTen() {
  const [period, setPeriod] = useState<Period>("30d");

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Les plus lus</h1>
      <p className="text-gray-600 mb-8">
        Classement en temps réel des contenus les plus ouverts sur Pati.
        Tout le monde peut le consulter — la transparence fait partie du projet.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {(["24h", "7d", "30d", "all"] as Period[]).map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              period === p
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {PERIOD_LABELS[p]}
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        <TopList type="livre" label="Top 10 — Livres" emoji="📚" limit={10} period={period} />
        <TopList type="serie" label="Top 5 — Séries" emoji="🎬" limit={5} period={period} />
        <TopList type="encyclopedie" label="Top 5 — Encyclopédies" emoji="🌍" limit={5} period={period} />
      </div>
    </div>
  );
}
