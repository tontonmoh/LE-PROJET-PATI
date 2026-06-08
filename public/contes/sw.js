/* =====================================================================
   Contes Pati — Service Worker
   • SHELL : précaché à l'installation → interface dispo hors-ligne.
   • AUDIO : caché À LA DEMANDE par app.js (cache.put) ; ici on se contente
     de SERVIR depuis le cache audio quand la requête arrive (et de gérer
     les requêtes Range pour que la lecture/le seek marchent hors-ligne).
   ⚠ Incrémente les numéros de version quand tu modifies les fichiers.
   ===================================================================== */

const SHELL_CACHE = "pati-shell-v1";
const AUDIO_CACHE = "pati-audio-v1"; // doit matcher app.js

const SHELL = [
  "./",
  "./index.html",
  "./app.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

const AUDIO_RE = /\.(mp3|m4a|aac|ogg|oga|wav|opus)$/i;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== SHELL_CACHE && k !== AUDIO_CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // 1) Fichiers audio → cache audio en priorité (sinon réseau), avec gestion Range
  if (AUDIO_RE.test(url.pathname)) {
    event.respondWith(audioStrategy(req));
    return;
  }
  // 2) Navigation → réseau d'abord, repli sur l'app-shell hors-ligne
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).catch(() => caches.match("./index.html", { ignoreSearch: true }))
    );
    return;
  }
  // 3) Reste (JS, CSS, manifest, icônes) → cache d'abord, puis réseau (et on met en cache)
  event.respondWith(
    caches.match(req).then((hit) =>
      hit || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(SHELL_CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => hit)
    )
  );
});

/* --- audio : sert le fichier complet mis en cache, en répondant au Range --- */
async function audioStrategy(req) {
  const cache = await caches.open(AUDIO_CACHE);
  const cached = await cache.match(req.url, { ignoreVary: true, ignoreSearch: true });
  if (cached) return rangeAware(req, cached);
  try {
    return await fetch(req); // en ligne : on lit depuis le réseau (téléchargement = action explicite)
  } catch {
    return new Response("Conte non téléchargé pour le hors-ligne.", { status: 504, statusText: "Offline" });
  }
}

async function rangeAware(req, res) {
  const range = req.headers.get("range");
  if (!range) return res; // pas de Range → réponse 200 complète
  const buf = await res.clone().arrayBuffer();
  const size = buf.byteLength;
  const m = /bytes=(\d+)-(\d*)/.exec(range);
  if (!m) return res;
  let start = Number(m[1]);
  let end = m[2] ? Number(m[2]) : size - 1;
  if (start >= size) {
    return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
  }
  end = Math.min(end, size - 1);
  const chunk = buf.slice(start, end + 1);
  return new Response(chunk, {
    status: 206,
    statusText: "Partial Content",
    headers: {
      "Content-Type": res.headers.get("Content-Type") || "audio/mpeg",
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": String(chunk.byteLength),
    },
  });
}
