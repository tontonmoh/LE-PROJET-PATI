/* =====================================================================
   Contes Pati — lecteur intelligent (PWA, écoute hors-ligne)
   v2 : reprise auto, lecture en chaîne, vitesse, suppression,
        stockage persistant, "tout télécharger", résumé d'espace.
   ===================================================================== */

// Catalogue — adapte `audio` (de préférence même origine) et `cover`.
const TALES = [
  { id: "foret-et-fer",  title: "La Forêt et le Fer",          sub: "Génération 2040 · Épisode 1", audio: "audio/foret-et-fer.mp3",   cover: "" },
  { id: "makona",        title: "Makona, un fleuve qui relie", sub: "Génération 2040 · Épisode 2", audio: "audio/makona.mp3",        cover: "" },
  { id: "plaine-de-riz", title: "La Plaine de riz",            sub: "Génération 2040 · Épisode 3", audio: "audio/plaine-de-riz.mp3", cover: "" },
];

const AUDIO_CACHE = "pati-audio-v1"; // doit matcher sw.js
const SPEEDS = [1, 1.25, 1.5, 0.75];

const $ = (s) => document.querySelector(s);
const audio = $("#audio");
let current = null;     // conte en cours
let resumeTo = 0;       // position à restaurer après loadedmetadata
let speedIdx = 0;

/* ---------- Service Worker ---------- */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch((e) => console.warn("SW:", e)));
}

/* ---------- Réseau ---------- */
function paintNet() {
  const on = navigator.onLine;
  $("#net").classList.toggle("off", !on);
  $("#netTxt").textContent = on ? "En ligne" : "Hors ligne";
}
addEventListener("online", paintNet);
addEventListener("offline", paintNet);
paintNet();

/* ---------- Utilitaires ---------- */
const fmt = (s) => { if (!isFinite(s)) return "0:00"; const m = Math.floor(s/60), x = Math.floor(s%60); return m + ":" + String(x).padStart(2,"0"); };
const idxOf = (t) => TALES.findIndex((x) => x.id === t.id);
const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : v; } catch { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch {} };

async function audioCache() { return caches.open(AUDIO_CACHE); }
async function isCached(url) { try { const c = await audioCache(); return !!(await c.match(url, { ignoreVary:true, ignoreSearch:true })); } catch { return false; } }

/* ---------- Liste ---------- */
const listEl = $("#list");
function render() {
  listEl.innerHTML = "";
  TALES.forEach((t) => {
    const row = document.createElement("div");
    row.className = "tale"; row.dataset.id = t.id;
    row.innerHTML =
      '<div class="thumb">' + (t.cover ? '<img src="'+t.cover+'" alt="">' : "🎧") + '</div>' +
      '<button class="meta"><div class="t">'+t.title+'</div><div class="s js-status">'+t.sub+'</div></button>' +
      '<button class="dl" aria-label="Télécharger pour écoute hors-ligne">' +
        '<svg viewBox="0 0 44 44"><circle class="track" cx="22" cy="22" r="20"/><circle class="bar" cx="22" cy="22" r="20"/></svg>' +
        '<span class="ic">⬇</span></button>';
    row.querySelector(".meta").addEventListener("click", () => playTale(t));
    const dl = row.querySelector(".dl");
    dl.addEventListener("click", () => dl.classList.contains("done") ? removeDownload(t, row) : download(t, row));
    // appui long => supprimer
    let lp; dl.addEventListener("pointerdown", () => { lp = setTimeout(() => dl.classList.contains("done") && removeDownload(t, row), 600); });
    ["pointerup","pointerleave","pointercancel"].forEach((ev) => dl.addEventListener(ev, () => clearTimeout(lp)));
    listEl.appendChild(row);
    refreshBadge(t, row);
  });
  updateStorage();
}

async function refreshBadge(t, row) {
  const dl = row.querySelector(".dl");
  if (await isCached(t.audio)) {
    dl.classList.add("done"); dl.classList.remove("busy");
    dl.querySelector(".bar").style.strokeDashoffset = 0;
    dl.querySelector(".ic").textContent = "✓";
    dl.setAttribute("aria-label", "Disponible hors-ligne — appui long pour retirer");
    row.querySelector(".js-status").innerHTML = '<span class="offline-badge">✓ Disponible hors-ligne</span>';
  } else {
    dl.classList.remove("done");
    dl.querySelector(".bar").style.strokeDashoffset = 126;
    dl.querySelector(".ic").textContent = "⬇";
    row.querySelector(".js-status").textContent = t.sub;
  }
}

/* ---------- Téléchargement (avec jauge) ---------- */
async function download(t, row) {
  const dl = row.querySelector(".dl"), bar = dl.querySelector(".bar");
  if (dl.classList.contains("busy")) return;
  if (!navigator.onLine) { row.querySelector(".js-status").textContent = "Connecte-toi pour télécharger."; return; }
  if (navigator.storage && navigator.storage.persist) { try { await navigator.storage.persist(); } catch {} }

  dl.classList.add("busy"); dl.querySelector(".ic").textContent = "…";
  const setPct = (p) => { bar.style.strokeDashoffset = p == null ? 126*0.75 : 126*(1-p); };
  try {
    const cache = await audioCache();
    const res = await fetch(t.audio);
    if (!res.ok || !res.body) throw new Error("HTTP " + res.status);
    const total = Number(res.headers.get("Content-Length")) || 0;
    const reader = res.body.getReader(); const chunks = []; let got = 0; setPct(total ? 0 : null);
    for (;;) { const { done, value } = await reader.read(); if (done) break; chunks.push(value); got += value.length; setPct(total ? got/total : null); }
    const type = res.headers.get("Content-Type") || "audio/mpeg";
    const blob = new Blob(chunks, { type });
    await cache.put(t.audio, new Response(blob, { status:200, headers:new Headers({ "Content-Type":type, "Content-Length":String(blob.size), "Accept-Ranges":"bytes" }) }));
    dl.classList.remove("busy");
    await refreshBadge(t, row); updateStorage();
  } catch (e) {
    console.warn("Téléchargement échoué:", e);
    dl.classList.remove("busy"); dl.querySelector(".ic").textContent = "⬇"; setPct(0);
    row.querySelector(".js-status").textContent = "Échec — réessaie.";
  }
}

async function removeDownload(t, row) {
  if (!confirm("Retirer « " + t.title + " » du hors-ligne ?")) return;
  try { const c = await audioCache(); await c.delete(t.audio, { ignoreVary:true, ignoreSearch:true }); } catch {}
  await refreshBadge(t, row); updateStorage();
}

async function downloadAll() {
  for (const t of TALES) {
    const row = listEl.querySelector('.tale[data-id="' + t.id + '"]');
    if (row && !row.querySelector(".dl").classList.contains("done")) await download(t, row);
  }
}

/* ---------- Résumé d'espace hors-ligne ---------- */
async function updateStorage() {
  const el = $("#storage"); if (!el) return;
  try {
    const c = await audioCache(); const keys = await c.keys(); let bytes = 0;
    for (const req of keys) { const r = await c.match(req); if (r) bytes += (await r.clone().blob()).size; }
    const mo = (bytes / 1048576).toFixed(1);
    el.innerHTML = keys.length
      ? '🟢 <b>' + keys.length + '</b>&nbsp;conte' + (keys.length>1?'s':'') + ' hors-ligne · <b>' + mo + '&nbsp;Mo</b>'
      : 'Aucun conte téléchargé pour l\'instant.';
  } catch { el.textContent = ""; }
}

/* ---------- Lecture + reprise + chaîne ---------- */
function playTale(t, fromStart) {
  current = t;
  $("#npTitle").textContent = t.title;
  $("#npSub").textContent = t.sub;
  $("#npCover").innerHTML = t.cover ? '<img src="'+t.cover+'" alt="">' : "📖";
  resumeTo = fromStart ? 0 : Number(lsGet("pos:" + t.id, 0)) || 0;
  audio.src = t.audio;
  audio.playbackRate = SPEEDS[speedIdx];
  audio.play().catch(() => {});
  document.querySelectorAll(".tale").forEach((r) => r.classList.toggle("active", r.dataset.id === t.id));
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({ title:t.title, artist:"Contes Pati", album:"Génération 2040" });
    navigator.mediaSession.setActionHandler("previoustrack", () => step(-1));
    navigator.mediaSession.setActionHandler("nexttrack", () => step(1));
  }
}
function step(d) {
  if (!current) { if (TALES[0]) playTale(TALES[0], true); return; }
  const i = idxOf(current) + d;
  if (i >= 0 && i < TALES.length) playTale(TALES[i], true);
}

$("#play").addEventListener("click", () => { if (!current) return step(0); audio.paused ? audio.play() : audio.pause(); });
$("#back").addEventListener("click", () => (audio.currentTime = Math.max(0, audio.currentTime - 15)));
$("#fwd").addEventListener("click",  () => (audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 15)));
$("#prev").addEventListener("click", () => step(-1));
$("#next").addEventListener("click", () => step(1));
$("#allDl").addEventListener("click", downloadAll);

/* vitesse */
speedIdx = Math.max(0, SPEEDS.indexOf(Number(lsGet("speed", "1"))));
$("#speed").textContent = SPEEDS[speedIdx] + "×";
$("#speed").addEventListener("click", () => {
  speedIdx = (speedIdx + 1) % SPEEDS.length;
  audio.playbackRate = SPEEDS[speedIdx];
  $("#speed").textContent = SPEEDS[speedIdx] + "×";
  lsSet("speed", String(SPEEDS[speedIdx]));
});

audio.addEventListener("play",  () => ($("#play").textContent = "❚❚"));
audio.addEventListener("pause", () => { $("#play").textContent = "▶"; if (current) lsSet("pos:" + current.id, String(Math.floor(audio.currentTime))); });
audio.addEventListener("loadedmetadata", () => {
  $("#dur").textContent = fmt(audio.duration);
  audio.playbackRate = SPEEDS[speedIdx];
  if (resumeTo > 3 && resumeTo < audio.duration - 3) { audio.currentTime = resumeTo; $("#npSub").textContent = "Reprend à " + fmt(resumeTo); }
});
let lastSave = 0;
audio.addEventListener("timeupdate", () => {
  $("#cur").textContent = fmt(audio.currentTime);
  if (audio.duration) $("#seek").value = Math.round((audio.currentTime / audio.duration) * 1000);
  const now = Date.now();
  if (current && now - lastSave > 5000) { lastSave = now; lsSet("pos:" + current.id, String(Math.floor(audio.currentTime))); }
});
audio.addEventListener("ended", () => { if (current) lsSet("pos:" + current.id, "0"); step(1); }); // enchaîne le suivant
$("#seek").addEventListener("input", (e) => { if (audio.duration) audio.currentTime = (e.target.value / 1000) * audio.duration; });

/* ---------- Installation (Android/Chrome) ---------- */
let deferred = null;
window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); deferred = e; $("#install").style.display = "block"; });
$("#install").addEventListener("click", async () => { if (!deferred) return; deferred.prompt(); await deferred.userChoice; deferred = null; $("#install").style.display = "none"; });

render();
