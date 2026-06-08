import { useState } from "react";

/* =====================================================================
   LeadCapture — capture d'email contre une fiche d'activité / coloriage.
   Réutilise le schéma sécurisé : insert-only + honeypot + anti-rejeu.

   ⚠ AVANT USAGE — créer la table dans Supabase (SQL Editor) :

     create table if not exists public.leads (
       id          bigint generated always as identity primary key,
       email       text not null,
       source      text,
       created_at  timestamptz not null default now()
     );
     create unique index if not exists leads_email_source_uidx
       on public.leads (lower(email), coalesce(source,''));
     alter table public.leads enable row level security;
     alter table public.leads force  row level security;
     create policy "anon insert leads" on public.leads
       for insert to anon
       with check (
         email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and length(email) <= 254
         and length(coalesce(source,'')) <= 60
       );
     revoke select, update, delete on public.leads from anon, authenticated;
     grant  insert on public.leads to anon;
   ===================================================================== */

// Clé publishable (publique par design — protégée par la RLS ci-dessus).
const SB = { url: "https://gipqwrqwouytlmsuxefj.supabase.co", key: "sb_publishable_gaOQLiWvGUeSwOozZlPPGQ_e6ii9upC" };

type Props = {
  source: string;                 // ex. "fiche-kouroussa" — pour savoir quel article convertit
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  fileUrl?: string;               // la fiche à délivrer après inscription (PDF)
};

async function saveLead(email: string, source: string): Promise<void> {
  const r = await fetch(`${SB.url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: SB.key,
      Authorization: `Bearer ${SB.key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ email, source }),
  });
  // 409 = doublon (déjà inscrit pour cette source) : on traite comme un succès.
  if (!r.ok && r.status !== 409) throw new Error("supabase " + r.status);
}

export default function LeadCapture({
  source,
  title = "Recevez la fiche d'activité gratuite",
  subtitle = "Un coloriage, 3 questions à partager en famille et une carte « le savais-tu ? ».",
  buttonLabel = "Recevoir ma fiche",
  fileUrl,
}: Props) {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");      // honeypot — doit rester vide
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  const deliver = () => {
    if (fileUrl) { try { window.open(fileUrl, "_blank", "noopener"); } catch { /* ignore */ } }
  };

  const submit = async () => {
    if (!valid || status === "sending") return;
    if (hp) { setStatus("done"); return; }               // bot → faux succès
    try {                                                 // anti-rejeu 30 s
      const last = Number(localStorage.getItem("lead_ts:" + source) || 0);
      if (Date.now() - last < 30000) { setStatus("done"); deliver(); return; }
      localStorage.setItem("lead_ts:" + source, String(Date.now()));
    } catch { /* ignore */ }

    setStatus("sending");
    try {
      await saveLead(email.trim(), source);
      setStatus("done");
      deliver();
    } catch (e) {
      console.warn("lead:", e);
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-[#0F6E56]/10 text-[#0F6E56] font-display font-semibold px-5 py-5 text-center">
        ✓ C'est envoyé&nbsp;! Votre fiche s'ouvre dans un nouvel onglet.
        {fileUrl && (
          <div className="mt-2 text-sm">
            Rien ne s'ouvre&nbsp;?{" "}
            <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="underline">Télécharger la fiche</a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-[#FFF6E7] border-2 border-[#0D2B1A]/10 p-5 md:p-6">
      <h3 className="font-display font-bold text-lg text-[#0D2B1A] mb-1">🎨 {title}</h3>
      <p className="text-sm text-[#5a6b62] mb-4">{subtitle}</p>

      <div className="flex flex-col sm:flex-row gap-3">
        {/* Honeypot anti-bot : invisible, doit rester vide */}
        <input
          type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
          value={hp} onChange={(e) => setHp(e.target.value)}
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        />
        <input
          type="email" inputMode="email" placeholder="votre@email.com" value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
          className="flex-1 rounded-2xl border-2 border-[#0D2B1A]/10 bg-white px-4 py-3 font-semibold text-[#0D2B1A] outline-none focus:border-[#C8841E]"
        />
        <button
          onClick={submit} disabled={!valid || status === "sending"}
          className={`rounded-2xl px-5 py-3 font-display font-bold text-[#0D2B1A] ${valid ? "" : "opacity-50 pointer-events-none"}`}
          style={{ background: "#FFC93C" }}
        >
          {status === "sending" ? "Envoi…" : buttonLabel}
        </button>
      </div>

      {status === "error" && (
        <p className="text-sm text-[#B23A1E] font-semibold mt-2">Une erreur est survenue — réessayez.</p>
      )}
      <p className="text-xs text-[#5a6b62] mt-3">
        Pour un parent ou un enseignant. Pas de spam, désinscription en un clic.{" "}
        <a href="/confidentialite" className="underline">Confidentialité</a>.
      </p>
    </div>
  );
}
