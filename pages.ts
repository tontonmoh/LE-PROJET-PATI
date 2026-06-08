// Contenu éditable des pages institutionnelles simples.
export type SimpleContent = { title: string; intro: string; comingSoon?: boolean; sections?: { h: string; p: string }[] };

export const PAGES: Record<string, SimpleContent> = {
  "confidentialite": {
    title: "Politique de confidentialité",
    intro: "PATI est une plateforme destinée aux enfants. Nous collectons le minimum de données, jamais à des fins publicitaires, et nous ne revendons rien. Dernière mise à jour : [À COMPLÉTER : date].",
    sections: [
      { h: "Qui est responsable", p: "Le service PATI est édité par L'Atelier Solidaire (Conakry, Guinée). Contact : WhatsApp +224 611 27 23 23 ou [À COMPLÉTER : adresse e-mail de contact]." },
      { h: "Ce que nous collectons", p: "Uniquement l'adresse e-mail que vous nous laissez volontairement via le formulaire « Préviens-moi » (sortie d'un nouvel épisode). Aucune autre donnée personnelle n'est demandée pour lire les histoires." },
      { h: "Données qui restent sur votre appareil", p: "Votre progression de lecture et vos préférences sont enregistrées localement dans votre navigateur (localStorage). Elles ne sont pas envoyées à nos serveurs et disparaissent si vous videz votre navigateur." },
      { h: "Mesure d'audience", p: "Si une mesure d'audience est activée, elle est anonyme et sans cookie publicitaire (statistiques de pages vues uniquement). Aucun profilage." },
      { h: "Pourquoi et sur quelle base", p: "L'e-mail sert uniquement à vous prévenir des nouveautés, avec votre consentement. Vous pouvez le retirer à tout moment." },
      { h: "Qui héberge ces données", p: "Le site est hébergé par Netlify ; les e-mails d'inscription sont stockés chez Supabase. Ces prestataires agissent pour notre compte. [À COMPLÉTER : localisation des serveurs si vous souhaitez la préciser.]" },
      { h: "Les enfants", p: "PATI s'adresse aux enfants, mais le formulaire d'inscription est pensé pour un parent, un enseignant ou un tuteur. Nous ne cherchons pas à recueillir sciemment de données personnelles auprès d'un mineur. Un parent peut nous écrire pour faire supprimer une adresse." },
      { h: "Durée de conservation", p: "Votre e-mail est conservé jusqu'à votre désinscription ou votre demande de suppression." },
      { h: "Vos droits", p: "Accès, rectification, suppression : écrivez-nous (WhatsApp ou e-mail ci-dessus) et nous donnons suite dans les meilleurs délais." },
    ],
  },
  "mentions-legales": {
    title: "Mentions légales",
    intro: "Informations légales relatives au site projetpati.com.",
    sections: [
      { h: "Éditeur", p: "L'Atelier Solidaire — Conakry, Guinée (Rond-Point Bellevue, Dixinn). Directeur de la publication : Mohamed Doumbouya. [À COMPLÉTER : forme juridique (SARL), n° RCCM / NIF.]" },
      { h: "Contact", p: "WhatsApp : +224 611 27 23 23. [À COMPLÉTER : e-mail.]" },
      { h: "Hébergeur", p: "Netlify, Inc. — 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis — netlify.com." },
      { h: "Propriété intellectuelle", p: "Les textes, illustrations, contenus audio et la marque PATI sont la propriété de L'Atelier Solidaire, sauf mention contraire. Toute reproduction sans autorisation est interdite." },
      { h: "Crédits", p: "Conception et édition : L'Atelier Solidaire. [À COMPLÉTER : crédits illustrateurs, partenaires.]" },
    ],
  },
  "cookies": {
    title: "Cookies & traceurs",
    intro: "PATI limite les traceurs au strict nécessaire.",
    sections: [
      { h: "Pas de cookie publicitaire", p: "Nous n'utilisons aucun cookie de publicité ni de pistage tiers." },
      { h: "Stockage technique", p: "Le site enregistre dans votre navigateur (localStorage) votre progression de lecture et vos préférences. Ce stockage est technique, reste sur votre appareil, et n'est pas partagé." },
      { h: "Mesure d'audience", p: "Si une mesure d'audience est activée, elle est conçue sans cookie et sans donnée personnelle." },
      { h: "Gérer", p: "Vous pouvez effacer ces données à tout moment en vidant le stockage de votre navigateur." },
    ],
  },
  "accessibilite": {
    title: "Accessibilité",
    intro: "Nous voulons que PATI soit lisible et utilisable par le plus grand nombre d'enfants.",
    sections: [
      { h: "Notre engagement", p: "Contrastes lisibles, navigation simple, contenus en plusieurs langues, et un lecteur pensé pour les jeunes lecteurs." },
      { h: "Un souci d'accès ?", p: "Signalez-nous toute difficulté (WhatsApp +224 611 27 23 23) : nous corrigeons au fil des versions." },
    ],
  },
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
