import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface ItemRow {
  item_slug: string;
  item_type: string;
  item_title: string | null;
  last_read: string;
}

const DOW_LABELS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const MONTH_LABELS = [
  "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
  "Juil", "Août", "Sep", "Oct", "Nov", "Déc",
];

function useTotal(slug: string | null) {
  const [total, setTotal] = useState<number | null>(null);
  useEffect(() => {
    let cancelled = false;
    setTotal(null);
    let q = supabase
      .from("book_reads")
      .select("*", { count: "exact", head: true });
    if (slug) q = q.eq("item_slug", slug);
    q.then(({ count, error }) => {
      if (cancelled) return;
      if (!error) setTotal(count ?? 0);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);
  return total;
}

function useDistribution<T = any>(rpc: string, slug: string | null) {
  const [data, setData] = useState<T[] | null>(null);
  useEffect(() => {
    let cancelled = false;
    setData(null);
    supabase.rpc(rpc, { p_slug: slug }).then(({ data: rows, error }) => {
      if (cancelled) return;
      if (error) {
        console.error(rpc, error);
        setData([]);
      } else {
        setData((rows as T[]) || []);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [rpc, slug]);
  return data;
}

function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactElement;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-bold mb-4 text-gray-800">{title}</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function Stats() {
  const [items, setItems] = useState<ItemRow[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  useEffect(() => {
    supabase.rpc("get_distinct_items").then(({ data, error }) => {
      if (!error && data) setItems(data as ItemRow[]);
    });
  }, []);

  const total = useTotal(selectedSlug);
  const byHour = useDistribution<{ hour_of_day: number; read_count: number }>(
    "get_reads_by_hour",
    selectedSlug
  );
  const byDow = useDistribution<{ day_of_week: number; read_count: number }>(
    "get_reads_by_dow",
    selectedSlug
  );
  const byMon = useDistribution<{ month_of_year: number; read_count: number }>(
    "get_reads_by_month",
    selectedSlug
  );
  const byYear = useDistribution<{ year_value: number; read_count: number }>(
    "get_reads_by_year",
    selectedSlug
  );

  // Normalisation : remplir les buckets vides avec 0 pour des graphes lisibles
  const fillHour = Array.from({ length: 24 }, (_, i) => {
    const found = (byHour || []).find((r) => r.hour_of_day === i);
    return { hour: `${i}h`, reads: found?.read_count ?? 0 };
  });
  const fillDow = Array.from({ length: 7 }, (_, i) => {
    const found = (byDow || []).find((r) => r.day_of_week === i + 1);
    return { day: DOW_LABELS[i], reads: found?.read_count ?? 0 };
  });
  const fillMon = Array.from({ length: 12 }, (_, i) => {
    const found = (byMon || []).find((r) => r.month_of_year === i + 1);
    return { month: MONTH_LABELS[i], reads: found?.read_count ?? 0 };
  });
  const fillYear = (byYear || []).map((r) => ({
    year: String(r.year_value),
    reads: r.read_count,
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Statistiques de lecture</h1>
      <p className="text-gray-600 mb-8">
        Quand lit-on Pati ? Cette page est publique — la transparence fait partie du projet.
      </p>

      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex flex-wrap items-end gap-4">
        <div className="flex-1 min-w-[240px]">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Filtrer par contenu
          </label>
          <select
            value={selectedSlug ?? ""}
            onChange={(e) => setSelectedSlug(e.target.value || null)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white"
          >
            <option value="">— Tous les contenus confondus —</option>
            {items.map((it) => (
              <option
                key={`${it.item_type}:${it.item_slug}`}
                value={it.item_slug}
              >
                {it.item_title || it.item_slug} ({it.item_type})
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total lectures</p>
          <p className="text-3xl font-bold text-orange-500 tabular-nums">
            {total === null ? "…" : total.toLocaleString("fr-FR")}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Par heure du jour">
          <BarChart data={fillHour}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="hour" interval={2} tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="reads" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartCard>

        <ChartCard title="Par jour de la semaine">
          <BarChart data={fillDow}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="reads" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartCard>

        <ChartCard title="Par mois de l'année">
          <BarChart data={fillMon}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="reads" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartCard>

        <ChartCard title="Par année">
          {fillYear.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-400 italic">
              Pas encore de données annuelles.
            </div>
          ) : (
            <LineChart data={fillYear}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="reads"
                stroke="#f97316"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          )}
        </ChartCard>
      </div>
    </div>
  );
}
