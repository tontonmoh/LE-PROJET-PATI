import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Users, Play, Copy, Check, Loader2, Crown, UserPlus, Wifi, WifiOff } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import {
  fetchIwdiGame,
  joinIwdiGame,
  startIwdiGame,
  subscribeIwdiGame,
  updateIwdiState,
  getAnonId,
  type IwdiGame,
  type IwdiPlayer,
} from "../lib/iwdiSession";

// Charte visuelle cohérente avec le reste du site
const GREEN = "#0D2B1A";
const ACCENT = "#C8841E";
const GOLD = "#FFC93C";
const CREAM = "#FFF6E7";

export default function IwdiSessionPlay() {
  const { code } = useParams<{ code: string }>();
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [game, setGame] = useState<IwdiGame | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);
  const [joining, setJoining] = useState(false);
  const [copied, setCopied] = useState(false);
  const [connected, setConnected] = useState(true);
  const myId = getAnonId();

  // ── Chargement initial + abonnement Realtime ─────────────────────────
  useEffect(() => {
    if (!code) return;
    let cancelled = false;
    let unsub: (() => void) | null = null;
    (async () => {
      try {
        const g = await fetchIwdiGame(code);
        if (cancelled) return;
        // g peut être null : la partie n'existe pas encore côté iwdi_games.
        // C'est normal : le 1er joueur qui rejoint la créera automatiquement.
        setGame(g);
        setLoading(false);
        if (g && g.players.some((p) => p.id === myId)) setJoined(true);
        // Abonnement aux mises à jour (déclenché dès qu'une ligne est créée)
        if (cancelled) return;
        unsub = subscribeIwdiGame(code, (newGame) => {
          setGame(newGame);
          setConnected(true);
        });
      } catch (e: any) {
        if (cancelled) return;
        setErr(e.message || "Erreur de chargement");
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
      if (unsub) unsub();
    };
  }, [code, myId]);

  // ── Rejoindre la partie ──────────────────────────────────────────────
  const doJoin = async () => {
    if (!code || !name.trim()) return;
    setJoining(true);
    setErr(null);
    try {
      const g = await joinIwdiGame(code, name.trim());
      setGame(g);
      setJoined(true);
    } catch (e: any) {
      setErr(e.message || "Impossible de rejoindre");
    } finally {
      setJoining(false);
    }
  };

  // ── Démarrer la partie (hôte uniquement) ─────────────────────────────
  const doStart = async () => {
    if (!game || !frameRef.current) return;
    // On demande à l'iframe de construire l'état initial ; elle répondra via postMessage
    frameRef.current.contentWindow?.postMessage(
      {
        type: "iwdi-network-build-initial",
        players: game.players,
        myPosition: myPosition(),
      },
      "*",
    );
  };

  // ── Écoute des messages venant de l'iframe ───────────────────────────
  useEffect(() => {
    const onMsg = async (e: MessageEvent) => {
      if (frameRef.current && e.source !== frameRef.current.contentWindow) return;
      const d = e.data;
      if (!d || !d.type) return;
      // L'iframe a construit l'état initial → on lance la partie côté DB
      if (d.type === "iwdi-network-initial-state" && code && game && isHost()) {
        try {
          await startIwdiGame(code, d.state);
        } catch (err) {
          console.error("startIwdiGame failed", err);
        }
      }
      // L'iframe a joué une action → on met à jour l'état côté DB
      if (d.type === "iwdi-network-action" && code) {
        try {
          await updateIwdiState(code, d.state, d.winnerPosition ?? undefined);
        } catch (err) {
          console.error("updateIwdiState failed", err);
          setConnected(false);
        }
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [code, game]);

  // ── Push de l'état à l'iframe à chaque update Realtime ───────────────
  useEffect(() => {
    if (!game || game.status !== "playing" || !frameRef.current) return;
    const pos = myPosition();
    if (pos < 0) return;
    // On attend un petit délai pour que l'iframe soit prête
    const t = setTimeout(() => {
      frameRef.current?.contentWindow?.postMessage(
        {
          type: "iwdi-network-state",
          state: game.state,
          myPosition: pos,
          players: game.players,
        },
        "*",
      );
    }, 100);
    return () => clearTimeout(t);
  }, [game]);

  // ── Helpers ──────────────────────────────────────────────────────────
  function myPosition(): number {
    if (!game) return -1;
    return game.players.find((p) => p.id === myId)?.position ?? -1;
  }
  function isHost(): boolean {
    return !!game && game.host_id === myId;
  }
  function copyCode() {
    if (!code) return;
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  // ── Rendu ────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-[70vh] grid place-items-center" style={{ background: CREAM }}>
        <Loader2 className="animate-spin" size={32} style={{ color: ACCENT }} />
      </div>
    );
  }

  if (err && !game) {
    return (
      <div className="max-w-md mx-auto p-6 text-center" style={{ background: CREAM }}>
        <p className="text-lg font-bold mb-4" style={{ color: GREEN }}>
          {err}
        </p>
        <Link
          to="/iwdi"
          className="inline-flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: ACCENT }}
        >
          <ArrowLeft size={16} /> Retour à IWDI
        </Link>
      </div>
    );
  }

  // Si la partie n'existe pas encore côté iwdi_games, on affiche un lobby vide.
  // Le 1er "Rejoindre" créera la ligne (via joinIwdiGame → _createIwdiRow).
  const displayGame: IwdiGame = game || {
    code: code!,
    host_id: "",
    players: [],
    state: null,
    status: "lobby",
    winner_position: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  // ═══════════════════════════════════════════════════════════════════
  // LOBBY : partie pas encore lancée
  // ═══════════════════════════════════════════════════════════════════
  if (displayGame.status === "lobby") {
    return (
      <div style={{ background: CREAM, minHeight: "80vh" }}>
        <section className="max-w-2xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Users size={26} style={{ color: ACCENT }} />
              <h1 className="text-2xl font-display font-bold" style={{ color: GREEN }}>
                Salon de partie — IWDI LAGUINÈ
              </h1>
            </div>
            <Link
              to="/iwdi"
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: ACCENT }}
            >
              <ArrowLeft size={16} /> Retour
            </Link>
          </div>

          {/* Code et QR */}
          <div
            className="rounded-2xl p-6 mb-6 flex flex-col sm:flex-row items-center gap-6"
            style={{ background: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,.06)" }}
          >
            <div className="shrink-0 p-3 rounded-xl" style={{ background: "#fff", border: "3px solid " + GOLD }}>
              <QRCodeSVG value={window.location.href} size={128} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#8a9389" }}>
                Code de la partie
              </div>
              <div
                className="text-4xl font-black tracking-widest mb-3"
                style={{ color: GREEN, fontFamily: "monospace" }}
              >
                {code}
              </div>
              <button
                onClick={copyCode}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: ACCENT, color: "#fff" }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Lien copié !" : "Copier le lien"}
              </button>
              <p className="text-xs mt-3" style={{ color: "#3a4a42" }}>
                Partage ce code (ou scanne le QR) pour rejoindre.
              </p>
            </div>
          </div>

          {/* Joueurs */}
          <div className="mb-6">
            <div className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#3a4a42" }}>
              Joueurs ({displayGame.players.length}/4)
            </div>
            <div className="space-y-2">
              {displayGame.players.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "#fff",
                    border: p.id === myId ? `2px solid ${GOLD}` : "1px solid rgba(0,0,0,.06)",
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-full grid place-items-center font-bold text-sm"
                    style={{ background: GOLD, color: GREEN }}
                  >
                    {p.position + 1}
                  </span>
                  <span className="font-semibold flex-1" style={{ color: GREEN }}>
                    {p.name}
                    {p.id === myId && <span className="text-xs ml-2" style={{ color: ACCENT }}>(toi)</span>}
                  </span>
                  {p.is_host && (
                    <span
                      className="inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full"
                      style={{ background: GOLD, color: GREEN }}
                    >
                      <Crown size={12} /> Hôte
                    </span>
                  )}
                </div>
              ))}
              {[...Array(Math.max(0, 4 - displayGame.players.length))].map((_, i) => (
                <div
                  key={"empty-" + i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed"
                  style={{ borderColor: "rgba(0,0,0,.15)", color: "#8a9389" }}
                >
                  <UserPlus size={18} />
                  <span className="italic text-sm">En attente d'un joueur…</span>
                </div>
              ))}
            </div>
          </div>

          {/* Zone action */}
          {!joined ? (
            <div className="rounded-2xl p-6" style={{ background: "#fff", border: `2px solid ${ACCENT}` }}>
              <div className="text-sm font-bold mb-3" style={{ color: GREEN }}>
                Rejoindre la partie
              </div>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Ton prénom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={24}
                  className="flex-1 px-4 py-3 rounded-lg border-2 font-semibold"
                  style={{ borderColor: "rgba(0,0,0,.15)", color: GREEN }}
                  onKeyDown={(e) => e.key === "Enter" && doJoin()}
                />
                <button
                  onClick={doJoin}
                  disabled={joining || !name.trim() || displayGame.players.length >= 4}
                  className="px-6 py-3 rounded-lg font-bold"
                  style={{
                    background: ACCENT,
                    color: "#fff",
                    opacity: joining || !name.trim() || displayGame.players.length >= 4 ? 0.5 : 1,
                  }}
                >
                  {joining ? <Loader2 className="animate-spin" size={18} /> : "Rejoindre"}
                </button>
              </div>
              {err && <div className="text-sm text-red-600 font-semibold">{err}</div>}
            </div>
          ) : isHost() ? (
            <button
              onClick={doStart}
              disabled={displayGame.players.length < 2}
              className="w-full py-4 rounded-2xl font-black text-lg tracking-wider inline-flex items-center justify-center gap-2"
              style={{
                background: displayGame.players.length >= 2 ? GOLD : "#ddd",
                color: GREEN,
                opacity: displayGame.players.length >= 2 ? 1 : 0.6,
                boxShadow: "0 4px 12px rgba(0,0,0,.1)",
              }}
            >
              <Play size={20} />
              {displayGame.players.length < 2 ? "En attente d'au moins 1 autre joueur…" : "DÉMARRER LA PARTIE"}
            </button>
          ) : (
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,.08)" }}
            >
              <Loader2 className="animate-spin mx-auto mb-2" size={24} style={{ color: ACCENT }} />
              <div className="font-semibold" style={{ color: GREEN }}>
                En attente que l'hôte lance la partie…
              </div>
            </div>
          )}
          {/* Iframe cachée : sert à construire l'état initial via postMessage */}
          <iframe
            ref={frameRef}
            src="/jeux/iwdi-laguine.html"
            title="IWDI moteur"
            className="hidden"
            aria-hidden="true"
          />
        </section>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // ENDED : partie terminée
  // ═══════════════════════════════════════════════════════════════════
  if (displayGame.status === "ended") {
    const winner = displayGame.players.find((p) => p.position === displayGame.winner_position);
    return (
      <div style={{ background: CREAM }} className="min-h-[80vh]">
        <div className="max-w-md mx-auto p-8 text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-3xl font-black mb-2" style={{ color: GREEN }}>
            {winner?.id === myId ? "Tu gagnes !" : `${winner?.name || "Quelqu'un"} gagne !`}
          </h1>
          <p className="mb-8 font-semibold" style={{ color: "#3a4a42" }}>
            Partie terminée
          </p>
          <Link
            to="/iwdi"
            className="inline-block px-8 py-3 rounded-full font-bold"
            style={{ background: ACCENT, color: "#fff" }}
          >
            Retour au menu
          </Link>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // PLAYING : le jeu tourne
  // ═══════════════════════════════════════════════════════════════════
  const meIn = displayGame.players.some((p) => p.id === myId);
  if (!meIn) {
    return (
      <div className="max-w-md mx-auto p-8 text-center" style={{ background: CREAM }}>
        <p className="font-semibold mb-4" style={{ color: GREEN }}>
          La partie a démarré sans toi. Rejoins la prochaine.
        </p>
        <Link
          to="/iwdi"
          className="inline-block px-6 py-2 rounded-full font-bold"
          style={{ background: ACCENT, color: "#fff" }}
        >
          Retour
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: GREEN, minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto">
        <div
          className="flex items-center justify-between px-4 py-2 text-xs"
          style={{ background: GREEN, color: "#fff" }}
        >
          <span className="inline-flex items-center gap-1.5">
            {connected ? (
              <>
                <Wifi size={14} style={{ color: GOLD }} /> En ligne · Code {code}
              </>
            ) : (
              <>
                <WifiOff size={14} style={{ color: "#f87171" }} /> Reconnexion…
              </>
            )}
          </span>
          <Link to="/iwdi" className="font-semibold" style={{ color: GOLD }}>
            Quitter
          </Link>
        </div>
        <iframe
          ref={frameRef}
          src="/jeux/iwdi-laguine.html"
          title="IWDI LAGUINÈ"
          allow="fullscreen"
          className="w-full block"
          style={{ height: "calc(100vh - 32px)", border: 0, background: CREAM }}
        />
      </div>
    </div>
  );
}
