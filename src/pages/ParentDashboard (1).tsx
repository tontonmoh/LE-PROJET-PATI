import { useEffect, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Award, MapPin, Timer, UserCircle, Plus, Trash2, Download } from "lucide-react";
import { useAuth } from "../auth/AuthContext";
import { supabase } from "../lib/supabase";
import { getBook } from "../data/books";
import { AVATARS, listProfiles, createProfile, deleteProfile, getActiveProfileId, setActiveProfileId } from "../lib/profiles";
import type { ChildProfile } from "../lib/profiles";
import GuineeMap from "../components/GuineeMap";
import { PREFECTURE_COUNT } from "../data/guinee-map";
import { generateMonthlyReport } from "../lib/monthlyReport";

type Ev = { type: string; ref: string | null; value: number | null; profile_id: string | null; created_at: string };

function Center({ children }: { children: ReactNode }) {
  return (
    <section className="bg-[#FFF6E7] min-h-[60vh] flex items-center">
      <div className="max-w-md mx-auto px-6 py-20 text-center">{children}</div>
    </section>
  );
}

function fmtTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

// Mini-courbe des temps du Defi (sans librairie). values = secondes, du plus ANCIEN au plus RECENT.
// On inverse l'axe : le temps le plus rapide est en bas -> une courbe qui descend = l'enfant va de plus en plus vite.
function TimeSparkline({ values }: { values: number[] }) {
  if (values.length < 2) return null;
  const w = 260, h = 60, pad = 8;
  const max = Math.max(...values), min = Math.min(...values), span = max - min || 1;
  const pts = values.map((v, i) => {
    const x = pad + (i * (w - 2 * pad)) / (values.length - 1);
    const yTop = pad + ((v - min) / span) * (h - 2 * pad);
    return [x, h - yTop]; // plus rapide (min) -> en bas
  });
  const path = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const best = pts[values.indexOf(min)];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "auto", display: "block" }} aria-label="Evolution des temps">
      <path d={path} fill="none" stroke="#0F6E56" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={best[0]} cy={best[1]} r={4} fill="#FFC93C" stroke="#0F6E56" strokeWidth={1.5} />
    </svg>
  );
}

function statsFor(events: Ev[]) {
  const livres = Array.from(new Set(events.filter((e) => e.type === "livre_lu").map((e) => e.ref).filter(Boolean) as string[]));
  const titres = livres.slice(0, 4).map((r) => getBook(r)?.title || r);
  const quiz = events.filter((e) => e.type === "quiz_fini" && e.value != null).map((e) => e.value as number);
  const moy = quiz.length ? Math.round(quiz.reduce((a, b) => a + b, 0) / quiz.length) : null;
  const prefSet = new Set(events.filter((e) => e.type === "prefecture_trouvee").map((e) => e.ref).filter(Boolean) as string[]);
  const defi = events.filter((e) => e.type === "defi_fini" && e.value != null).map((e) => e.value as number);
  const series = [...defi].reverse();
  const best = defi.length ? Math.min(...defi) : null;
  const last = defi.length ? defi[0] : null;
  return { nbLivres: livres.length, titres, nbQuiz: quiz.length, moy, prefSet, nbPref: prefSet.size, nbDefi: defi.length, best, last, series };
}

export default function ParentDashboard() {
  const { user, loading } = useAuth();
  const [profiles, setProfiles] = useState<ChildProfile[]>([]);
  const [events, setEvents] = useState<Ev[]>([]);
  const [activeId, setActive] = useState<string | null>(getActiveProfileId());
  const [adding, setAdding] = useState(false);

  const refresh = useCallback(async () => {
    const [ps, ev] = await Promise.all([
      listProfiles(),
      supabase.from("progress_events").select("type,ref,value,profile_id,created_at").order("created_at", { ascending: false }),
    ]);
    setProfiles(ps);
    setEvents((ev.data as Ev[]) || []);
  }, []);

  useEffect(() => { if (user) refresh(); }, [user, refresh]);

  if (loading) return <Center><p className="text-[#5a6b62] font-semibold">Chargement...</p></Center>;
  if (!user) {
    return (
      <Center>
        <UserCircle className="text-[#0F6E56] mx-auto mb-4" size={56} />
        <h1 className="text-2xl text-[#0D2B1A] mb-3">Espace Parents</h1>
        <p className="text-[#3a4a42] font-semibold mb-6">Connecte-toi pour suivre la progression de tes enfants.</p>
        <Link to="/connexion" className="btn-kid bg-[#0F6E56] text-white">Se connecter</Link>
      </Center>
    );
  }

  const used = profiles.map((p) => p.avatar);
  const libres = AVATARS.filter((a) => !used.includes(a));
  const prenom = (user.user_metadata?.prenom as string) || "";
  const nonAttribue = events.filter((e) => !e.profile_id);

  async function pickAvatar(a: string) { await createProfile(a, profiles.length); setAdding(false); refresh(); }
  async function remove(id: string) {
    if (!window.confirm("Retirer ce profil ? Sa progression ne sera plus affichee.")) return;
    await deleteProfile(id);
    if (activeId === id) { setActiveProfileId(null); setActive(null); }
    refresh();
  }
  function choose(id: string) { const n = activeId === id ? null : id; setActiveProfileId(n); setActive(n); }

  return (
    <>
      <section className="bg-[#0D2B1A] text-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <p className="font-display font-semibold text-[#FFC93C] mb-1">Espace Parents</p>
          <h1 className="font-display font-bold text-3xl md:text-4xl">{prenom ? "Bonjour " + prenom : "Bonjour"}</h1>
        </div>
      </section>

      <section className="bg-[#FFF6E7] min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-6 py-8">

          <div className="card-kid p-6 mb-6">
            <h2 className="font-display font-bold text-lg text-[#0D2B1A] mb-1">Qui utilise PATI en ce moment ?</h2>
            <p className="text-[#5a6b62] font-semibold text-sm mb-4">Choisis un avatar avant de lire ou jouer : la progression sera comptee pour cet enfant.</p>
            <div className="flex flex-wrap gap-3">
              {profiles.map((p) => (
                <button key={p.id} onClick={() => choose(p.id)}
                  className={`relative w-16 h-16 rounded-2xl text-3xl flex items-center justify-center transition-all ${activeId === p.id ? "ring-4 ring-[#FFC93C] bg-white" : "bg-white shadow-kid opacity-80 hover:opacity-100"}`}>
                  {p.avatar}
                  <span onClick={(e) => { e.stopPropagation(); remove(p.id); }} className="absolute -top-1.5 -right-1.5 bg-white rounded-full p-0.5 shadow-kid"><Trash2 size={13} className="text-[#B3261E]" /></span>
                </button>
              ))}
              {libres.length > 0 && !adding && profiles.length < 6 && (
                <button onClick={() => setAdding(true)} className="w-16 h-16 rounded-2xl bg-white shadow-kid flex items-center justify-center text-[#0F6E56]"><Plus size={26} /></button>
              )}
            </div>
            {adding && (
              <div className="mt-4">
                <p className="text-[#5a6b62] font-semibold text-sm mb-2">Choisis un avatar pour ce nouvel enfant :</p>
                <div className="flex flex-wrap gap-2">
                  {libres.map((a) => (
                    <button key={a} onClick={() => pickAvatar(a)} className="w-12 h-12 rounded-xl bg-white shadow-kid text-2xl flex items-center justify-center hover:ring-2 hover:ring-[#FFC93C]">{a}</button>
                  ))}
                </div>
              </div>
            )}
            {activeId
              ? <p className="text-[#0F6E56] font-semibold text-sm mt-4">Actif : {profiles.find((p) => p.id === activeId)?.avatar} — la lecture et les quiz seront comptes ici.</p>
              : profiles.length > 0 && <p className="text-[#8a9389] font-semibold text-sm mt-4">Aucun enfant selectionne : l'activite ne sera pas attribuee.</p>}
          </div>

          {profiles.length > 0 && (
            <div className="flex justify-end mb-6">
              <button onClick={() => generateMonthlyReport(profiles, events, prenom)} className="btn-kid bg-[#0F6E56] text-white inline-flex items-center gap-2">
                <Download size={18} /> Telecharger le rapport du mois
              </button>
            </div>
          )}

          {profiles.length === 0 ? (
            <p className="text-[#5a6b62] font-semibold text-center py-6">Ajoute un premier enfant (avatar) ci-dessus pour suivre sa progression.</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              {profiles.map((p, idx) => {
                const s = statsFor(events.filter((e) => e.profile_id === p.id));
                const complet = s.nbPref >= PREFECTURE_COUNT;
                return (
                  <div key={p.id} className="card-kid p-6">
                    <div className="flex items-center gap-3 mb-4"><span className="text-3xl">{p.avatar}</span><span className="font-display font-bold text-[#0D2B1A]">Enfant {idx + 1}</span></div>

                    <div className="flex flex-wrap gap-x-6 gap-y-3 mb-4">
                      <div className="flex items-center gap-2"><BookOpen className="text-[#0F6E56]" size={20} /><div><div className="font-display font-bold text-2xl text-[#0F6E56]">{s.nbLivres}</div><p className="text-[#5a6b62] font-semibold text-xs">livres lus</p></div></div>
                      <div className="flex items-center gap-2"><Award className="text-[#E8532D]" size={20} /><div><div className="font-display font-bold text-2xl text-[#E8532D]">{s.moy != null ? s.moy + "%" : "-"}</div><p className="text-[#5a6b62] font-semibold text-xs">quiz (moy.)</p></div></div>
                      <div className="flex items-center gap-2"><MapPin className="text-[#3FB6E8]" size={20} /><div><div className="font-display font-bold text-2xl text-[#3FB6E8]">{s.nbPref}<span className="text-sm text-[#8a9389]">/{PREFECTURE_COUNT}</span></div><p className="text-[#5a6b62] font-semibold text-xs">prefectures</p></div></div>
                    </div>

                    <div className="rounded-xl bg-[#FBF6EA] p-3 mb-4">
                      <div className="flex items-center gap-2 mb-2"><Timer className="text-[#0F6E56]" size={18} /><span className="font-display font-bold text-sm text-[#0D2B1A]">Defi de la carte — temps</span></div>
                      {s.nbDefi > 0 ? (
                        <>
                          <div className="flex items-end gap-6 mb-1">
                            <div><div className="font-display font-bold text-3xl text-[#0F6E56]">{fmtTime(s.best as number)}</div><p className="text-[#5a6b62] font-semibold text-xs">meilleur temps</p></div>
                            <div><div className="font-display font-bold text-xl text-[#0D2B1A]">{fmtTime(s.last as number)}</div><p className="text-[#5a6b62] font-semibold text-xs">dernier · {s.nbDefi} partie{s.nbDefi > 1 ? "s" : ""}</p></div>
                          </div>
                          <TimeSparkline values={s.series} />
                          {s.series.length >= 2
                            ? <p className="text-[#8a9389] font-semibold text-[11px] mt-1">Plus la courbe descend, plus il/elle va vite. Objectif : battre son temps chaque semaine.</p>
                            : <p className="text-[#8a9389] font-semibold text-[11px] mt-1">Encore une partie et la courbe de progression apparaitra.</p>}
                        </>
                      ) : (
                        <p className="text-[#8a9389] font-semibold text-sm">Pas encore de partie chronometree. Lance le Defi pour fixer un premier temps a battre.</p>
                      )}
                    </div>

                    {s.titres.length > 0 && <ul className="text-[#3a4a42] font-semibold text-sm space-y-0.5 mb-3">{s.titres.map((t, k) => <li key={k}>- {t}</li>)}</ul>}
                    {s.nbLivres === 0 && s.nbQuiz === 0 && s.nbPref === 0 && s.nbDefi === 0 && <p className="text-[#8a9389] font-semibold text-sm mb-3">Pas encore d'activite.</p>}

                    <div className="mt-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#5a6b62] font-semibold text-xs">Carte de la Guinee</span>
                        {complet
                          ? <span className="text-[#0F6E56] font-display font-bold text-xs">Toute la Guinee cartographiee !</span>
                          : s.nbPref > 0 && <span className="text-[#8a9389] font-semibold text-xs">en cours</span>}
                      </div>
                      <div className="rounded-xl bg-[#FBF6EA] p-2">
                        <GuineeMap discovered={s.prefSet} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {nonAttribue.length > 0 && (
            <div className="card-kid p-5 mt-6">
              <p className="text-[#5a6b62] font-semibold text-sm">Activite non attribuee a un enfant : {statsFor(nonAttribue).nbLivres} livre(s), {statsFor(nonAttribue).nbQuiz} quiz, {statsFor(nonAttribue).nbPref} prefecture(s), {statsFor(nonAttribue).nbDefi} partie(s) de Defi. Selectionne un avatar avant de jouer pour qu'elle soit comptee a la bonne personne.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
