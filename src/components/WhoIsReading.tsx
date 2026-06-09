import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { listProfiles, getActiveProfileId, setActiveProfileId } from "../lib/profiles";
import type { ChildProfile } from "../lib/profiles";

const HIDDEN = ["/parent", "/compte", "/connexion", "/inscription"];
const ASKED_KEY = "pati-who-asked";

export default function WhoIsReading() {
  const { user } = useAuth();
  const loc = useLocation();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<ChildProfile[]>([]);
  const [activeId, setActive] = useState<string | null>(getActiveProfileId());
  const [open, setOpen] = useState(false);

  const load = useCallback(async () => {
    const ps = await listProfiles();
    setProfiles(ps);
    return ps;
  }, []);

  useEffect(() => {
    if (!user) { setProfiles([]); return; }
    let alive = true;
    load().then((ps) => {
      if (!alive) return;
      if (ps.length > 0 && !sessionStorage.getItem(ASKED_KEY)) setOpen(true);
    });
    return () => { alive = false; };
  }, [user, load]);

  if (!user || profiles.length === 0 || HIDDEN.some((p) => loc.pathname === p || loc.pathname.startsWith(p + "/"))) {
    return null;
  }

  function pick(id: string) {
    setActiveProfileId(id); setActive(id);
    sessionStorage.setItem(ASKED_KEY, "1"); setOpen(false);
  }
  function skip() { sessionStorage.setItem(ASKED_KEY, "1"); setOpen(false); }

  const activeAvatar = profiles.find((p) => p.id === activeId)?.avatar;

  return (
    <>
      {!open && (
        <button onClick={() => setOpen(true)}
          className="fixed bottom-4 left-4 z-40 w-12 h-12 rounded-full bg-white shadow-kid flex items-center justify-center text-2xl ring-2 ring-[#FFC93C]"
          aria-label="Qui lit ?">
          {activeAvatar || "?"}
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 bg-[#0D2B1A]/80 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="bg-[#FFF6E7] rounded-3xl max-w-md w-full p-8 text-center shadow-2xl">
            <h2 className="font-display font-bold text-2xl text-[#0D2B1A] mb-1">Qui lit aujourd'hui ?</h2>
            <p className="text-[#5a6b62] font-semibold text-sm mb-6">Touche ton avatar.</p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              {profiles.map((p) => (
                <button key={p.id} onClick={() => pick(p.id)}
                  className={`w-20 h-20 rounded-3xl text-4xl flex items-center justify-center bg-white shadow-kid transition-transform hover:scale-105 ${activeId === p.id ? "ring-4 ring-[#FFC93C]" : ""}`}>
                  {p.avatar}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 text-sm font-semibold">
              <button onClick={skip} className="text-[#5a6b62] underline">Plus tard</button>
              <button onClick={() => { setOpen(false); navigate("/parent"); }} className="text-[#0F6E56] underline">Gerer les profils</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
