// Suivi d'événements GA4 (gratuit). Sans effet si gtag n'est pas chargé
// (ex. environnement local) — donc jamais d'erreur, jamais de coût.
export function track(event: string, params?: Record<string, unknown>): void {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", event, params || {});
}
