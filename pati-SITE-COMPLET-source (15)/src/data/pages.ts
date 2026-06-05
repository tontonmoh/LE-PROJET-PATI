// Contenu éditable des pages institutionnelles simples.
export type SimpleContent = { title: string; intro: string; comingSoon?: boolean; sections?: { h: string; p: string }[] };

export const PAGES: Record<string, SimpleContent> = {
  "a-propos": {
    title: "À propos de PATI",
    intro: "PATI — Bâtir la Génération 2040 — est une plateforme d'édition jeunesse guinéenne : des histoires illustrées, audio et animées qui racontent le patrimoine d'Afrique de l'Ouest aux enfants de 4 à 15 ans.",
    sections: [
      { h: "Notre mission", p: "Rendre le savoir et les héros africains accessibles à la jeunesse africaine, dans ses propres langues, avec fierté et plaisir." },
      { h: "Notre conviction", p: "Un enfant qui se reconnaît dans ses lectures grandit avec confiance. Le patrimoine n'est pas un musée : c'est une racine vivante de l'avenir." },
      { h: "Notre origine", p: "PATI est née et incubée à l'Atelier Solidaire, à Conakry." },
    ],
  },
  "collaboration": {
    title: "Offres de collaboration",
    intro: "PATI grandit avec celles et ceux qui partagent sa mission. Voici comment travailler avec nous.",
    sections: [
      { h: "Artistes & créateurs", p: "Illustrateurs, auteurs, voix-off, conteurs : rejoignez la fabrique des histoires PATI." },
      { h: "Écoles & institutions", p: "Déployez les Clubs PATI et la Boîte à Outils enseignants dans vos établissements." },
      { h: "Entreprises & partenaires", p: "Soutenez l'édition jeunesse guinéenne via le mécénat, la RSE ou des partenariats produits." },
    ],
  },
  "contact": {
    title: "Contact",
    intro: "Une question, une idée, un partenariat ? Écris-nous, l'équipe PATI te répond.",
    sections: [
      { h: "WhatsApp", p: "+224 611 27 23 23" },
      { h: "Où nous trouver", p: "L'Atelier Solidaire — Conakry, Guinée." },
    ],
  },
  "charte": {
    title: "Charte éthique",
    intro: "PATI s'adresse à des enfants. Notre charte guide chaque décision.",
    sections: [
      { h: "Protection de l'enfance", p: "Contenus adaptés à l'âge, espace sûr, bien-être de l'enfant avant tout." },
      { h: "Sans publicité", p: "Aucune publicité ciblant les enfants sur la plateforme." },
      { h: "Respect du patrimoine", p: "Les récits sont travaillés avec rigueur et respect des cultures représentées." },
      { h: "Données", p: "Le strict nécessaire, jamais revendu. La mesure d'impact est anonyme." },
    ],
  },
  "partenaires": { title: "Partenaires", intro: "PATI avance avec des écoles, des institutions et des acteurs culturels engagés. La page dédiée à nos partenaires arrive bientôt.", comingSoon: true },
  "presse": { title: "Presse & médias", intro: "Dossier de presse, visuels et contacts médias seront bientôt disponibles ici.", comingSoon: true },
  "developpeurs": { title: "Développeurs & API", intro: "Une API et des ressources pour les développeurs sont en préparation.", comingSoon: true },
  "appli-mobile": {
    title: "Appli mobile gratuite",
    intro: "PATI fonctionne déjà dans ton navigateur. Une application mobile dédiée, légère et pensée pour une faible connexion, arrive bientôt.",
    sections: [{ h: "En attendant", p: "Ajoute projetpati.com à ton écran d'accueil pour un accès rapide, comme une appli." }],
  },
  "hors-ligne": { title: "Accès hors-ligne", intro: "Bientôt, tu pourras télécharger des livres et les lire sans connexion.", comingSoon: true },
  "zero-data": { title: "Accès Zero Data", intro: "Un mode économe pensé pour consulter PATI en consommant le moins de données possible. Bientôt disponible.", comingSoon: true },
  "populaire-par-pays": {
    title: "Populaire par pays",
    intro: "Découvre les histoires PATI les plus lues, pays par pays — pour voir ce qui inspire les enfants d'ailleurs.",
    sections: [{ h: "Bientôt enrichi", p: "Ce classement s'affinera à mesure que la communauté grandit." }],
  },
};
