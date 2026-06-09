import { jsPDF } from "jspdf";
import { getBook } from "../data/books";
import { PREFECTURES, REGION_COLORS, PREFECTURE_COUNT } from "../data/guinee-map";

type Ev = { type: string; ref: string | null; value: number | null; profile_id: string | null; created_at: string };
type Profile = { id: string; avatar: string; position: number };

function fmtTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

// Carte de Guinee dessinee directement sur un canvas (Path2D) -> PNG. Pas de SVG image (zero risque de canvas "taint").
function mapPNG(discovered: Set<string>, px = 420): string | null {
  try {
    const W = 1000, H = 751, scale = px / W;
    const c = document.createElement("canvas");
    c.width = Math.round(W * scale);
    c.height = Math.round(H * scale);
    const ctx = c.getContext("2d");
    if (!ctx) return null;
    ctx.scale(scale, scale);
    ctx.lineJoin = "round";
    for (const p of PREFECTURES) {
      const path = new Path2D(p.d);
      ctx.fillStyle = discovered.has(p.name) ? (REGION_COLORS[p.region] || "#FFC93C") : "#E4E1D5";
      ctx.fill(path);
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = "#FFF6E7";
      ctx.stroke(path);
    }
    return c.toDataURL("image/png");
  } catch {
    return null;
  }
}

// Emoji -> PNG (les polices jsPDF ne savent pas afficher les emojis ; on passe par un canvas).
function emojiPNG(emoji: string, px = 64): string | null {
  try {
    const c = document.createElement("canvas");
    c.width = px;
    c.height = px;
    const ctx = c.getContext("2d");
    if (!ctx) return null;
    ctx.font = `${Math.round(px * 0.78)}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(emoji, px / 2, px / 2 + px * 0.04);
    return c.toDataURL("image/png");
  } catch {
    return null;
  }
}

function statsFor(events: Ev[]) {
  const livres = Array.from(new Set(events.filter((e) => e.type === "livre_lu").map((e) => e.ref).filter(Boolean) as string[]));
  const titres = livres.slice(0, 5).map((r) => getBook(r)?.title || r);
  const quiz = events.filter((e) => e.type === "quiz_fini" && e.value != null).map((e) => e.value as number);
  const moy = quiz.length ? Math.round(quiz.reduce((a, b) => a + b, 0) / quiz.length) : null;
  const prefSet = new Set(events.filter((e) => e.type === "prefecture_trouvee").map((e) => e.ref).filter(Boolean) as string[]);
  const defi = events.filter((e) => e.type === "defi_fini" && e.value != null).map((e) => e.value as number);
  const series = [...defi].reverse(); // du plus ancien au plus recent
  const best = defi.length ? Math.min(...defi) : null;
  const last = defi.length ? defi[0] : null;
  const first = series.length ? series[0] : null;
  return { nbLivres: livres.length, titres, nbQuiz: quiz.length, moy, prefSet, nbPref: prefSet.size, nbDefi: defi.length, best, last, first, series };
}

// Mini-courbe des temps dessinee en vectoriel jsPDF. Le plus rapide en bas -> une courbe qui descend = il/elle va plus vite.
function drawSpark(doc: jsPDF, x: number, y: number, w: number, h: number, series: number[]) {
  if (series.length < 2) return;
  const max = Math.max(...series), min = Math.min(...series), span = max - min || 1;
  const pt = (v: number, i: number): [number, number] => [
    x + (i * w) / (series.length - 1),
    y + h - ((v - min) / span) * h,
  ];
  doc.setDrawColor(15, 110, 86);
  doc.setLineWidth(0.6);
  for (let i = 1; i < series.length; i++) {
    const a = pt(series[i - 1], i - 1), b = pt(series[i], i);
    doc.line(a[0], a[1], b[0], b[1]);
  }
  const bi = series.indexOf(min);
  const bp = pt(min, bi);
  doc.setFillColor(255, 201, 60);
  doc.circle(bp[0], bp[1], 0.9, "F");
}

function monthLabel(d: Date) {
  const s = d.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function generateMonthlyReport(profiles: Profile[], allEvents: Ev[], prenom: string) {
  const now = new Date();
  const y0 = now.getFullYear(), m0 = now.getMonth();
  const inMonth = (e: Ev) => {
    const d = new Date(e.created_at);
    return d.getFullYear() === y0 && d.getMonth() === m0;
  };
  const monthEvents = allEvents.filter(inMonth);

  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const PW = 210;

  // En-tete
  doc.setFillColor(13, 43, 26);
  doc.rect(0, 0, PW, 34, "F");
  doc.setTextColor(255, 201, 60);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("PATI", 16, 16);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(13);
  doc.text("Rapport mensuel — " + monthLabel(now), 16, 24);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(220, 220, 210);
  doc.text(prenom ? "Compte de " + prenom : "Espace Parents", 16, 30);

  let y = 44;

  if (profiles.length === 0) {
    doc.setTextColor(90, 107, 98);
    doc.setFontSize(11);
    doc.text("Aucun enfant (avatar) n'a encore ete cree sur ce compte.", 16, y);
  }

  profiles.forEach((p, idx) => {
    const s = statsFor(monthEvents.filter((e) => e.profile_id === p.id));
    const blockH = 70;
    if (y + blockH > 285) {
      doc.addPage();
      y = 20;
    }

    // Avatar + titre
    const em = emojiPNG(p.avatar);
    if (em) doc.addImage(em, "PNG", 16, y - 4, 9, 9);
    doc.setTextColor(13, 43, 26);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Enfant " + (idx + 1), em ? 28 : 16, y + 3);

    // Stats (colonne gauche)
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(58, 74, 66);
    let ty = y + 12;
    doc.text("Livres lus : " + s.nbLivres, 16, ty); ty += 5.5;
    if (s.titres.length) {
      doc.setFontSize(9);
      doc.setTextColor(120, 130, 120);
      s.titres.forEach((t) => {
        doc.text("- " + (t.length > 42 ? t.slice(0, 41) + "…" : t), 18, ty);
        ty += 4.4;
      });
      doc.setFontSize(10);
      doc.setTextColor(58, 74, 66);
    }
    ty += 1;
    doc.text("Quiz (moyenne) : " + (s.moy != null ? s.moy + " %" : "—") + "   ·   " + s.nbQuiz + " quiz", 16, ty); ty += 6;
    doc.text("Prefectures placees : " + s.nbPref + " / " + PREFECTURE_COUNT, 16, ty); ty += 6;

    // Defi temps
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 110, 86);
    if (s.nbDefi > 0) {
      doc.text("Defi — meilleur temps : " + fmtTime(s.best as number), 16, ty); ty += 5.5;
      doc.setFont("helvetica", "normal");
      doc.setTextColor(58, 74, 66);
      doc.setFontSize(9.5);
      let prog = s.nbDefi + " partie" + (s.nbDefi > 1 ? "s" : "") + " · dernier " + fmtTime(s.last as number);
      if (s.first != null && s.last != null && s.first !== s.last) {
        const gain = s.first - (s.best as number);
        if (gain > 0) prog += " · " + fmtTime(gain) + " gagne ce mois";
      }
      doc.text(prog, 16, ty); ty += 2;
      drawSpark(doc, 16, ty, 80, 14, s.series);
    } else {
      doc.setFont("helvetica", "normal");
      doc.setTextColor(120, 130, 120);
      doc.setFontSize(9.5);
      doc.text("Defi : pas encore de partie chronometree ce mois.", 16, ty);
    }

    // Carte (colonne droite)
    const img = mapPNG(s.prefSet);
    if (img) doc.addImage(img, "PNG", 132, y, 62, 47);

    // Separateur
    doc.setDrawColor(225, 220, 210);
    doc.setLineWidth(0.3);
    doc.line(16, y + blockH - 6, PW - 16, y + blockH - 6);
    y += blockH;
  });

  // Pied de page
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(150, 155, 145);
  doc.text("projetpati.com — Batir la Generation 2040 · donnees anonymes, aucun nom d'enfant.", 16, 292);

  const fname = `PATI-rapport-${y0}-${String(m0 + 1).padStart(2, "0")}.pdf`;
  doc.save(fname);
}
