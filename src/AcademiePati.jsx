import { useState, useRef } from "react";

// ─── couleurs charte ───
const C = {
  vert: "#1a7a4a",
  vertF: "#0e5232",
  jaune: "#f5b400",
  jauneP: "#fdf3d7",
  rouge: "#d64541",
  bleu: "#2b6cb0",
  creme: "#fffdf6",
  encre: "#2d2a26",
  gris: "#e8e2d4",
};

// ─── photo héros (remplacer par le chemin public réel sur projetpati.com) ───
const HERO_PHOTO = "/images/academie-pati-hero.jpg";

// ─── documents téléchargeables ───
const DOCS = [
  { nom: "Document de projet", desc: "6 pages — tout savoir sur l'Académie", fichier: "/docs/Academie-Pati-Document-de-projet.pdf", icone: "📄" },
  { nom: "Flyer", desc: "À partager sur WhatsApp et Facebook", fichier: "/docs/Flyer-Academie-Pati.png", icone: "🖼️" },
  { nom: "Fiche d'inscription (PDF)", desc: "À imprimer, remplir et envoyer en photo", fichier: "/docs/Formulaire-Inscription-Academie-Pati.pdf", icone: "📝" },
];

// ─── modules ───
const MODULES = [
  { titre: "Histoire", desc: "Des royaumes à l'indépendance de 1958 — racontée comme un récit, pas comme un cours", couleur: C.jaune, tags: ["Mansaya", "Fouta", "Horoya"] },
  { titre: "Géographie", desc: "Les 33 préfectures et les 4 régions naturelles — en tournoi, avec classement en direct", couleur: C.rouge, tags: ["LaGuinè378", "Puzzle", "IWDI"] },
  { titre: "Alphabets africains", desc: "Écrire son prénom en N'Ko et en Adlam — des écritures nées sur le continent", couleur: C.vert, tags: ["N'Ko", "Adlam", "Koré Sèbèli"] },
  { titre: "Simandou & les richesses", desc: "Le projet, les mines, le corridor — ce que la génération 2040 doit comprendre", couleur: C.bleu, tags: ["Simandou 2040", "Le Corridor"] },
  { titre: "I.A. & orientation", desc: "Apprendre avec l'intelligence artificielle sans tricher, repérer le vrai du faux", couleur: C.vertF, tags: ["Orientation", "Esprit critique"] },
];

const INCLUS = [
  { titre: "3 repas par jour", desc: "Petit-déjeuner, déjeuner et goûter — faits maison, produits locaux", icone: "🍽️" },
  { titre: "Kit de l'Explorateur", desc: "Sac, t-shirt, casquette et jeu de cartes IWDI LaGuinè à garder", icone: "🎒" },
  { titre: "Projetpati.com — 1 an", desc: "Accès illimité aux livres, encyclopédies et jeux sur tous vos appareils", icone: "📱" },
  { titre: "Sortie découverte", desc: "Visite culturelle encadrée à Conakry le premier samedi", icone: "🏛️" },
  { titre: "Certificat & cérémonie", desc: "Remise officielle devant les familles le dernier samedi", icone: "🏆" },
  { titre: "Espace Parents", desc: "Suivez les scores, badges et progrès de votre enfant depuis votre téléphone", icone: "👨‍👩‍👧" },
];

const JOURNEE = [
  ["8h – 9h", "Accueil & petit-déjeuner"],
  ["9h – 10h30", "Module du matin — atelier guidé"],
  ["10h30 – 11h", "Goûter & récréation"],
  ["11h – 12h30", "Quête numérique — jeux et quiz Pati"],
  ["12h30 – 14h", "Déjeuner fait maison & pause"],
  ["14h – 15h30", "Module de l'après-midi"],
  ["15h30 – 16h", "Goûter"],
  ["16h – 17h", "Grand défi collectif — tournoi, classement, badges"],
  ["17h – 17h30", "Bilan du jour & départs"],
];

// ─── composant principal ───
export default function AcademiePati() {
  const [formState, setFormState] = useState("form"); // form | payment | done
  const [formData, setFormData] = useState({
    enfant_nom: "", enfant_naissance: "", enfant_age: "",
    enfant_ecole: "", enfant_classe: "", enfant_quartier: "",
    parent_nom: "", parent_lien: "", parent_tel: "",
    parent_whatsapp: "", parent_tel2: "", parent_email: "",
    cohorte: "20 juillet 2026",
    paiement: "orange_money",
    fratrie: "1",
    enfant2_nom: "",
    autorise1_nom: "", autorise1_tel: "",
    autorise2_nom: "", autorise2_tel: "",
    allergie: "non", allergie_detail: "",
    traitement: "non", traitement_detail: "",
    remarques: "",
    urgence_nom: "", urgence_lien: "", urgence_tel: "",
    droit_image: "oui",
  });
  const formRef = useRef(null);

  const set = (k, v) => setFormData((p) => ({ ...p, [k]: v }));
  const montant = formData.fratrie === "2" ? "1 757 500 FG" : "950 000 FG";

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("payment");
    window.scrollTo({ top: formRef.current.offsetTop - 40, behavior: "smooth" });
  };

  // ─── styles réutilisables ───
  const s = {
    page: { fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", color: C.encre, background: C.creme, minHeight: "100vh" },
    section: { maxWidth: 960, margin: "0 auto", padding: "0 20px" },
    badge: { display: "inline-block", background: "rgba(255,255,255,0.16)", border: "2px solid rgba(255,255,255,0.5)", borderRadius: 999, padding: "6px 16px", fontSize: 14, fontWeight: 700, marginRight: 8, marginBottom: 8 },
    h2: { fontSize: 28, fontWeight: 800, color: C.vertF, marginBottom: 8 },
    filet: { height: 5, width: 60, borderRadius: 999, background: `linear-gradient(90deg, ${C.rouge}, ${C.jaune}, ${C.vert})`, marginBottom: 24 },
    input: { width: "100%", padding: "10px 14px", border: `2px solid ${C.gris}`, borderRadius: 12, fontSize: 15, outline: "none", background: "white", transition: "border-color 0.2s" },
    label: { display: "block", fontSize: 13, fontWeight: 700, color: "#4a463f", marginBottom: 4 },
    btn: { background: C.vert, color: "white", border: "none", borderRadius: 14, padding: "14px 32px", fontSize: 17, fontWeight: 700, cursor: "pointer", width: "100%" },
  };

  return (
    <div style={s.page}>
      {/* ═══════ HERO ═══════ */}
      <div style={{ background: C.vert, color: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -120, right: -120, width: 340, height: 340, borderRadius: "50%", background: C.jaune, opacity: 0.9 }} />
        <div style={{ position: "absolute", bottom: -140, left: -140, width: 320, height: 320, borderRadius: "50%", background: C.rouge, opacity: 0.85 }} />
        <div style={{ ...s.section, position: "relative", display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap", paddingTop: 48, paddingBottom: 48 }}>
          <div style={{ flex: "1 1 340px" }}>
            <div style={{ fontSize: 13, letterSpacing: 3, textTransform: "uppercase", color: C.jauneP, fontWeight: 700 }}>L'Atelier Solidaire · Projet Pati</div>
            <h1 style={{ fontSize: 56, lineHeight: 1.0, margin: "12px 0 0" }}>Académie Pati</h1>
            <div style={{ display: "inline-block", background: C.jaune, color: C.vertF, fontWeight: 800, fontSize: 20, padding: "10px 20px", borderRadius: 16, transform: "rotate(-1.5deg)", marginTop: 20 }}>
              Votre enfant incollable sur la Guinée !
            </div>
            <p style={{ fontSize: 16, color: "#eafbf1", marginTop: 20, maxWidth: 440, lineHeight: 1.5 }}>
              Deux semaines de vacances apprenantes pour les 12–16 ans : histoire, géographie, alphabets africains, Simandou et intelligence artificielle — par le jeu.
            </p>
            <div style={{ marginTop: 20 }}>
              <span style={s.badge}>12–16 ans</span>
              <span style={s.badge}>2 semaines · lun–sam</span>
              <span style={s.badge}>8h – 17h30</span>
              <span style={s.badge}>20 places</span>
            </div>
          </div>
          <div style={{ flex: "0 0 280px", position: "relative" }}>
            <img src={HERO_PHOTO} alt="Académie Pati" style={{ width: 280, height: 340, objectFit: "cover", borderRadius: 20, border: `5px solid ${C.creme}` }} />
            <div style={{ position: "absolute", bottom: -12, left: -16, background: C.rouge, color: "white", borderRadius: 999, padding: "8px 18px", fontWeight: 700, fontSize: 15, transform: "rotate(-2deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.15)" }}>
              Dès le lundi 20 juillet 2026
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ PROGRAMME ═══════ */}
      <div style={{ padding: "48px 0 0" }}>
        <div style={s.section}>
          <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 3, color: C.rouge, fontWeight: 700, marginBottom: 4 }}>Au programme</div>
          <h2 style={s.h2}>5 modules — tout par le jeu</h2>
          <div style={s.filet} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {MODULES.map((m, i) => (
              <div key={i} style={{ background: "white", border: `2px solid ${C.gris}`, borderLeft: `6px solid ${m.couleur}`, borderRadius: 16, padding: "18px 20px" }}>
                <h3 style={{ fontSize: 18, color: C.vertF, margin: "0 0 6px" }}>{m.titre}</h3>
                <p style={{ fontSize: 14, color: "#6b6558", margin: "0 0 10px", lineHeight: 1.45 }}>{m.desc}</p>
                <div>{m.tags.map((t) => (
                  <span key={t} style={{ display: "inline-block", background: C.jauneP, borderRadius: 999, padding: "3px 10px", fontSize: 12, fontWeight: 700, color: "#7a5c00", marginRight: 6, marginBottom: 4 }}>{t}</span>
                ))}</div>
              </div>
            ))}
            <div style={{ background: C.jaune, borderRadius: 16, padding: "18px 20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontSize: 18, color: C.vertF, margin: "0 0 6px" }}>+ chaque jour</h3>
              <p style={{ fontSize: 14, color: "#5c4500", fontWeight: 700, margin: 0 }}>Défis, badges, classement en direct et certificat final</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ JOURNÉE TYPE ═══════ */}
      <div style={{ padding: "48px 0 0" }}>
        <div style={s.section}>
          <h2 style={s.h2}>Une journée type</h2>
          <div style={s.filet} />
          <div style={{ background: "white", borderRadius: 16, border: `2px solid ${C.gris}`, overflow: "hidden" }}>
            {JOURNEE.map(([h, desc], i) => (
              <div key={i} style={{ display: "flex", borderBottom: i < JOURNEE.length - 1 ? `1px solid ${C.gris}` : "none", padding: "10px 16px", alignItems: "center" }}>
                <div style={{ flex: "0 0 120px", fontWeight: 700, color: C.rouge, fontSize: 14 }}>{h}</div>
                <div style={{ fontSize: 14, color: "#4a463f" }}>{desc}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
            <div style={{ background: C.bleu, color: "white", borderRadius: 16, padding: "18px 20px" }}>
              <h4 style={{ margin: "0 0 6px", fontSize: 16 }}>Samedi 1 — Sortie découverte</h4>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.9)" }}>Matinée hors les murs : visite culturelle à Conakry, carnet d'expédition en main.</p>
            </div>
            <div style={{ background: C.rouge, color: "white", borderRadius: 16, padding: "18px 20px" }}>
              <h4 style={{ margin: "0 0 6px", fontSize: 16 }}>Samedi 2 — Grande cérémonie</h4>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.9)" }}>Tournoi final, restitution et remise des certificats devant les familles.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ TOUT EST INCLUS ═══════ */}
      <div style={{ padding: "48px 0 0" }}>
        <div style={s.section}>
          <h2 style={s.h2}>Tout est inclus</h2>
          <div style={s.filet} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {INCLUS.map((item, i) => (
              <div key={i} style={{ background: "white", border: `2px solid ${C.gris}`, borderRadius: 16, padding: "16px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ fontSize: 28, lineHeight: 1 }}>{item.icone}</div>
                <div>
                  <h4 style={{ margin: "0 0 4px", fontSize: 15, color: C.vertF }}>{item.titre}</h4>
                  <p style={{ margin: 0, fontSize: 13, color: "#6b6558", lineHeight: 1.4 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: C.jauneP, border: `2.5px dashed ${C.jaune}`, borderRadius: 14, padding: "14px 18px", marginTop: 16, fontSize: 14 }}>
            <strong>Repas inclus chaque jour :</strong> petit-déjeuner, déjeuner et goûter — cuisinés sur place avec des produits locaux. Signalez-nous toute allergie à l'inscription.
          </div>
        </div>
      </div>

      {/* ═══════ TARIF ═══════ */}
      <div style={{ padding: "48px 0" }}>
        <div style={s.section}>
          <div style={{ background: C.vert, borderRadius: 20, padding: "32px 36px", color: "white", display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "0 0 280px", background: C.jaune, color: C.vertF, borderRadius: 18, padding: "20px 28px", textAlign: "center" }}>
              <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.05 }}>950 000 FG</div>
              <div style={{ fontSize: 15, fontWeight: 700, marginTop: 4 }}>les 2 semaines, tout compris</div>
              <div style={{ marginTop: 10, display: "inline-block", background: C.vertF, color: C.jaune, borderRadius: 999, padding: "4px 14px", fontSize: 13, fontWeight: 700 }}>–15 % pour le 2ᵉ enfant</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 700 }}>Inscriptions ouvertes — places limitées</div>
              <p style={{ margin: "8px 0 0", fontSize: 15, color: "#dff5e8", lineHeight: 1.5 }}>
                20 places par cohorte. Remplissez le formulaire ci-dessous, puis réglez par Orange Money. Votre place est confirmée dès réception du paiement.
              </p>
              <div style={{ marginTop: 12 }}>
                <span style={{ fontSize: 16 }}>WhatsApp </span><strong style={{ fontSize: 20, color: C.jaune }}>612 60 23 23</strong>
                <span style={{ margin: "0 10px", opacity: 0.5 }}>·</span>
                <span style={{ fontSize: 16 }}>Appel </span><strong style={{ fontSize: 20, color: C.jaune }}>611 27 23 23</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ DOCUMENTS ═══════ */}
      <div style={{ padding: "0 0 48px" }}>
        <div style={s.section}>
          <h2 style={s.h2}>Documents à télécharger</h2>
          <div style={s.filet} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
            {DOCS.map((d, i) => (
              <a key={i} href={d.fichier} download style={{ display: "flex", gap: 14, alignItems: "center", background: "white", border: `2px solid ${C.gris}`, borderRadius: 14, padding: "14px 16px", textDecoration: "none", color: C.encre, transition: "border-color 0.2s" }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = C.vert}
                onMouseOut={(e) => e.currentTarget.style.borderColor = C.gris}>
                <span style={{ fontSize: 32 }}>{d.icone}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: C.vertF }}>{d.nom}</div>
                  <div style={{ fontSize: 13, color: "#6b6558" }}>{d.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ FORMULAIRE / PAIEMENT ═══════ */}
      <div ref={formRef} style={{ background: "white", padding: "48px 0 56px", borderTop: `3px solid ${C.gris}` }}>
        <div style={{ ...s.section, maxWidth: 720 }}>

          {formState === "form" && (
            <>
              <h2 style={s.h2}>Inscription en ligne</h2>
              <div style={s.filet} />
              <p style={{ fontSize: 15, color: "#6b6558", marginBottom: 28, lineHeight: 1.5 }}>
                Remplissez ce formulaire, puis suivez les instructions de paiement. Vous pouvez aussi imprimer la <a href="/docs/Formulaire-Inscription-Academie-Pati.pdf" style={{ color: C.vert, fontWeight: 700 }}>fiche PDF</a> et nous l'envoyer en photo sur WhatsApp.
              </p>

              <form onSubmit={handleSubmit}>
                {/* ── participant ── */}
                <Section titre="Le participant" num="1">
                  <Row>
                    <Field label="Nom complet de l'enfant *" value={formData.enfant_nom} onChange={(v) => set("enfant_nom", v)} required />
                  </Row>
                  <Row cols={2}>
                    <Field label="Date de naissance *" type="date" value={formData.enfant_naissance} onChange={(v) => set("enfant_naissance", v)} required />
                    <Field label="Âge *" type="number" value={formData.enfant_age} onChange={(v) => set("enfant_age", v)} required min={12} max={16} />
                  </Row>
                  <Row cols={2}>
                    <Field label="École / établissement" value={formData.enfant_ecole} onChange={(v) => set("enfant_ecole", v)} />
                    <Field label="Classe" value={formData.enfant_classe} onChange={(v) => set("enfant_classe", v)} />
                  </Row>
                  <Row>
                    <Field label="Commune / quartier *" value={formData.enfant_quartier} onChange={(v) => set("enfant_quartier", v)} required />
                  </Row>
                </Section>

                {/* ── parent ── */}
                <Section titre="Parent ou tuteur légal" num="2">
                  <Row cols={2}>
                    <Field label="Nom complet *" value={formData.parent_nom} onChange={(v) => set("parent_nom", v)} required />
                    <Field label="Lien avec l'enfant *" value={formData.parent_lien} onChange={(v) => set("parent_lien", v)} placeholder="Père, mère, tuteur..." required />
                  </Row>
                  <Row cols={2}>
                    <Field label="Téléphone principal *" type="tel" value={formData.parent_tel} onChange={(v) => set("parent_tel", v)} required />
                    <Field label="WhatsApp *" type="tel" value={formData.parent_whatsapp} onChange={(v) => set("parent_whatsapp", v)} required />
                  </Row>
                  <Row cols={2}>
                    <Field label="Téléphone secondaire" type="tel" value={formData.parent_tel2} onChange={(v) => set("parent_tel2", v)} />
                    <Field label="E-mail (optionnel)" type="email" value={formData.parent_email} onChange={(v) => set("parent_email", v)} />
                  </Row>
                </Section>

                {/* ── cohorte ── */}
                <Section titre="Cohorte et inscription" num="3">
                  <Row cols={2}>
                    <div>
                      <label style={s.label}>Inscription</label>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                        <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, cursor: "pointer" }}>
                          <input type="radio" name="fratrie" value="1" checked={formData.fratrie === "1"} onChange={() => set("fratrie", "1")} />
                          1 enfant — <strong>950 000 FG</strong>
                        </label>
                        <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, cursor: "pointer" }}>
                          <input type="radio" name="fratrie" value="2" checked={formData.fratrie === "2"} onChange={() => set("fratrie", "2")} />
                          2 enfants — <strong>1 757 500 FG</strong> <span style={{ fontSize: 12, color: C.rouge, fontWeight: 700 }}>–15%</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      {formData.fratrie === "2" && (
                        <Field label="Nom du 2ᵉ enfant" value={formData.enfant2_nom} onChange={(v) => set("enfant2_nom", v)} />
                      )}
                    </div>
                  </Row>
                </Section>

                {/* ── personnes autorisées ── */}
                <Section titre="Personnes autorisées à récupérer l'enfant" num="4" note="En dehors du parent signataire. Aucun enfant ne sera remis à une personne non listée.">
                  <Row cols={2}>
                    <Field label="Nom" value={formData.autorise1_nom} onChange={(v) => set("autorise1_nom", v)} />
                    <Field label="Téléphone" type="tel" value={formData.autorise1_tel} onChange={(v) => set("autorise1_tel", v)} />
                  </Row>
                  <Row cols={2}>
                    <Field label="Nom (2ᵉ personne)" value={formData.autorise2_nom} onChange={(v) => set("autorise2_nom", v)} />
                    <Field label="Téléphone" type="tel" value={formData.autorise2_tel} onChange={(v) => set("autorise2_tel", v)} />
                  </Row>
                </Section>

                {/* ── fiche sanitaire ── */}
                <Section titre="Fiche sanitaire" num="5" couleur={C.rouge} note="Informations strictement confidentielles, utilisées uniquement pour la sécurité de votre enfant.">
                  <Row cols={2}>
                    <div>
                      <label style={s.label}>Allergies alimentaires ou médicamenteuses</label>
                      <div style={{ display: "flex", gap: 16, marginTop: 4 }}>
                        <label style={{ fontSize: 14, cursor: "pointer" }}><input type="radio" name="allergie" value="non" checked={formData.allergie === "non"} onChange={() => set("allergie", "non")} /> Aucune</label>
                        <label style={{ fontSize: 14, cursor: "pointer" }}><input type="radio" name="allergie" value="oui" checked={formData.allergie === "oui"} onChange={() => set("allergie", "oui")} /> Oui</label>
                      </div>
                    </div>
                    {formData.allergie === "oui" && <Field label="Précisez" value={formData.allergie_detail} onChange={(v) => set("allergie_detail", v)} />}
                  </Row>
                  <Row cols={2}>
                    <div>
                      <label style={s.label}>Traitement médical en cours</label>
                      <div style={{ display: "flex", gap: 16, marginTop: 4 }}>
                        <label style={{ fontSize: 14, cursor: "pointer" }}><input type="radio" name="traitement" value="non" checked={formData.traitement === "non"} onChange={() => set("traitement", "non")} /> Aucun</label>
                        <label style={{ fontSize: 14, cursor: "pointer" }}><input type="radio" name="traitement" value="oui" checked={formData.traitement === "oui"} onChange={() => set("traitement", "oui")} /> Oui</label>
                      </div>
                    </div>
                    {formData.traitement === "oui" && <Field label="Précisez" value={formData.traitement_detail} onChange={(v) => set("traitement_detail", v)} />}
                  </Row>
                  <Row><Field label="Remarques (asthme, restriction alimentaire, etc.)" value={formData.remarques} onChange={(v) => set("remarques", v)} /></Row>
                  <div style={{ background: "#fef2f2", border: `2px solid ${C.rouge}`, borderRadius: 12, padding: "14px 16px", marginTop: 8 }}>
                    <div style={{ fontWeight: 700, color: C.rouge, fontSize: 14, marginBottom: 8 }}>Contact d'urgence (autre que le parent signataire)</div>
                    <Row cols={3}>
                      <Field label="Nom" value={formData.urgence_nom} onChange={(v) => set("urgence_nom", v)} />
                      <Field label="Lien" value={formData.urgence_lien} onChange={(v) => set("urgence_lien", v)} />
                      <Field label="Téléphone" type="tel" value={formData.urgence_tel} onChange={(v) => set("urgence_tel", v)} />
                    </Row>
                  </div>
                </Section>

                {/* ── clause vie privée ── */}
                <div style={{ background: C.jauneP, border: `2.5px dashed ${C.jaune}`, borderRadius: 14, padding: "18px 20px", marginBottom: 24 }}>
                  <h3 style={{ fontSize: 16, color: C.vertF, marginBottom: 10 }}>Protection de l'image et de la vie privée</h3>
                  <p style={{ fontSize: 13, color: "#4a463f", lineHeight: 1.5, margin: "0 0 8px" }}>
                    À l'Académie Pati, la sécurité et la sérénité de votre enfant sont notre priorité absolue. Conformément à notre éthique de protection des mineurs :
                  </p>
                  <ul style={{ fontSize: 13, color: "#4a463f", lineHeight: 1.5, paddingLeft: 18, margin: 0 }}>
                    <li style={{ marginBottom: 6 }}>Nous nous engageons à ne publier sur nos réseaux sociaux publics <strong>aucune image permettant d'identifier individuellement votre enfant</strong> sans votre autorisation écrite préalable.</li>
                    <li style={{ marginBottom: 6 }}>La majorité de nos contenus mettra en avant les outils pédagogiques, les activités de groupe ou le cadre de travail, <strong>en préservant l'anonymat des participants</strong>.</li>
                    <li style={{ marginBottom: 6 }}>Le partage de photos souvenirs est réservé exclusivement aux parents dans le <strong>groupe WhatsApp privé de la cohorte</strong>.</li>
                    <li>Chaque parent dispose d'un <strong>droit de regard</strong> et peut retirer son accord à tout moment.</li>
                  </ul>
                </div>

                {/* ── autorisation ── */}
                <Section titre="Autorisation parentale" num="7">
                  <p style={{ fontSize: 14, color: "#4a463f", lineHeight: 1.5, marginBottom: 14 }}>
                    En soumettant ce formulaire, j'autorise mon enfant à participer à l'Académie Pati organisée par L'Atelier Solidaire. J'autorise l'équipe d'encadrement à prendre les mesures nécessaires en cas d'urgence médicale. J'ai lu et j'accepte la clause de protection de l'image et de la vie privée ci-dessus.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, cursor: "pointer" }}>
                      <input type="radio" name="droit_image" value="oui" checked={formData.droit_image === "oui"} onChange={() => set("droit_image", "oui")} />
                      J'autorise la publication d'images de mon enfant sur les réseaux publics de l'Académie
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, cursor: "pointer" }}>
                      <input type="radio" name="droit_image" value="non" checked={formData.droit_image === "non"} onChange={() => set("droit_image", "non")} />
                      Je <strong>n'autorise pas</strong> la publication d'images de mon enfant
                    </label>
                  </div>
                  <button type="submit" style={s.btn} onMouseOver={(e) => e.target.style.background = C.vertF} onMouseOut={(e) => e.target.style.background = C.vert}>
                    Valider l'inscription →
                  </button>
                </Section>
              </form>
            </>
          )}

          {/* ═══ ÉCRAN PAIEMENT ═══ */}
          {formState === "payment" && (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>✅</div>
              <h2 style={{ ...s.h2, textAlign: "center" }}>Formulaire enregistré !</h2>
              <div style={s.filet} />
              <p style={{ fontSize: 16, color: "#4a463f", lineHeight: 1.6, marginBottom: 28 }}>
                Merci <strong>{formData.parent_nom || "cher parent"}</strong>. Il ne reste plus qu'une étape pour confirmer la place de <strong>{formData.enfant_nom}</strong> : le règlement.
              </p>

              <div style={{ background: C.jaune, borderRadius: 20, padding: "28px 32px", marginBottom: 24, textAlign: "left" }}>
                <h3 style={{ fontSize: 20, color: C.vertF, margin: "0 0 16px", textAlign: "center" }}>Paiement par Orange Money</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <Step n="1">Ouvrez Orange Money sur votre téléphone</Step>
                  <Step n="2">Envoyez <strong style={{ fontSize: 20 }}>{montant}</strong> au <strong style={{ fontSize: 20 }}>622 72 62 72</strong></Step>
                  <Step n="3">Dans le motif, écrivez : <strong>ACADEMIE PATI – {formData.enfant_nom}</strong></Step>
                  <Step n="4">
                    Envoyez la capture d'écran de confirmation sur WhatsApp au{" "}
                    <a href={`https://wa.me/224612602323?text=Bonjour, je viens de régler l'inscription de ${formData.enfant_nom} à l'Académie Pati. Voici la capture du paiement :`} style={{ color: C.vertF, fontWeight: 700 }}>612 60 23 23</a>
                  </Step>
                </div>
              </div>

              <div style={{ background: "white", border: `2px solid ${C.gris}`, borderRadius: 14, padding: "16px 20px", fontSize: 14, color: "#6b6558", lineHeight: 1.5, marginBottom: 24 }}>
                Votre place est <strong>confirmée dès réception du paiement</strong>. Vous recevrez le programme détaillé et le lien du groupe WhatsApp de la cohorte par retour de message.
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                <a href={`https://wa.me/224612602323?text=Bonjour, j'ai inscrit ${formData.enfant_nom} à l'Académie Pati et je viens d'effectuer le paiement.`} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25d366", color: "white", borderRadius: 14, padding: "12px 24px", fontSize: 16, fontWeight: 700, textDecoration: "none" }}>
                  💬 Confirmer sur WhatsApp
                </a>
                <button onClick={() => { setFormState("form"); window.scrollTo({ top: formRef.current.offsetTop - 40, behavior: "smooth" }); }} style={{ background: "transparent", border: `2px solid ${C.gris}`, borderRadius: 14, padding: "12px 24px", fontSize: 15, cursor: "pointer", color: "#6b6558" }}>
                  ← Modifier le formulaire
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ═══════ PIED ═══════ */}
      <div style={{ background: C.vert, color: "white", padding: "28px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 14, color: "#d9f2e4" }}>
          <strong style={{ color: C.jaune }}>L'Atelier Solidaire</strong> — Rond-Point Bellevue, Dixinn, Conakry
        </div>
        <div style={{ marginTop: 6, fontSize: 14 }}>
          WhatsApp <strong>612 60 23 23</strong> · Appel <strong>611 27 23 23</strong>
        </div>
        <div style={{ marginTop: 6, fontSize: 13, color: "#aadbc2" }}>
          projetpati.com · lateliersolidaire.org
        </div>
      </div>
    </div>
  );
}

// ─── sous-composants ───
function Section({ titre, num, couleur, note, children }) {
  const c = couleur || "#0e5232";
  return (
    <div style={{ border: `2px solid ${couleur === "#d64541" ? "#f0d0cf" : "#e8e2d4"}`, borderRadius: 14, padding: "18px 20px", marginBottom: 20 }}>
      <h3 style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 17, color: c, margin: "0 0 4px" }}>
        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "50%", background: couleur === "#d64541" ? "#d64541" : "#f5b400", color: couleur === "#d64541" ? "white" : "#0e5232", fontSize: 13, fontWeight: 800 }}>{num}</span>
        {titre}
      </h3>
      {note && <p style={{ fontSize: 12, color: "#9a927f", fontStyle: "italic", margin: "0 0 12px" }}>{note}</p>}
      {!note && <div style={{ height: 10 }} />}
      {children}
    </div>
  );
}

function Row({ cols = 1, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 14, marginBottom: 10 }}>
      {children}
    </div>
  );
}

function Field({ label, type = "text", value, onChange, required, placeholder, min, max }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#4a463f", marginBottom: 4 }}>{label}</label>
      <input
        type={type} value={value} required={required} placeholder={placeholder}
        min={min} max={max}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: "100%", padding: "9px 12px", border: "2px solid #e8e2d4", borderRadius: 10, fontSize: 14, outline: "none", background: "white" }}
        onFocus={(e) => e.target.style.borderColor = "#1a7a4a"}
        onBlur={(e) => e.target.style.borderColor = "#e8e2d4"}
      />
    </div>
  );
}

function Step({ n, children }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span style={{ flex: "0 0 30px", height: 30, borderRadius: "50%", background: "#0e5232", color: "#f5b400", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15 }}>{n}</span>
      <span style={{ fontSize: 15, lineHeight: 1.5, paddingTop: 4 }}>{children}</span>
    </div>
  );
}
