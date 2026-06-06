// « Les Chimpanzés de Bossou — Les primates supérieurs » — Valentine Traoré, ill. Mohamed Soumah.
// Éditions Solidaires (2021) — documentaire. Collection Pati · Découverte (7–9 ans).
// Texte source extrait du PDF puis RÉCRIT au calibre Découverte (phrases simples 8–14 mots,
// 1–2 mots nouveaux par page expliqués en contexte), fidèle aux faits.
// FR posé en premier ; EN / AR / ZH à ajouter ensuite.
// NB : titre distinct du roman « Le Peuple de Bossou » (slug "bossou"), qui reste au catalogue.
export type ChimpoLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[]; image?: string };
type Book = { lang: ChimpoLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const CHIMPO_ML: Partial<Record<ChimpoLang, Book>> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Les Chimpanzés de Bossou",
    sections: [
      { id: "village", title: "Le village de Bossou", paragraphs: [
        "Tout près de la frontière entre la Guinée et le Libéria, il y a un village : Bossou.",
        "Il se trouve à six kilomètres du mont Nimba, dans la préfecture de Lola.",
        "Autour du village s'élèvent de petites collines couvertes de forêt. C'est là que vivent les chimpanzés.",
        "Les habitants y cultivent leurs champs. À Bossou, des scientifiques étudient les chimpanzés sauvages depuis très longtemps." ] },
      { id: "sacres", title: "Des animaux sacrés", paragraphs: [
        "Pour le peuple manon, les chimpanzés de Bossou sont sacrés.",
        "On raconte qu'ils sont les ancêtres revenus vivre parmi eux.",
        "Ces chimpanzés vivent en groupe, tous ensemble. Ceux du mont Nimba, eux, vivent plutôt seuls.",
        "Chaque année, pour les honorer, le village organise une cérémonie d'offrandes sur le mont Gban." ] },
      { id: "comme-nous", title: "Des gestes comme les nôtres", paragraphs: [
        "Beaucoup de leurs gestes ressemblent aux nôtres.",
        "Ils se lavent. Ils « parlent » avec de grands mouvements des bras. Ils pêchent et cueillent pour se nourrir." ] },
      { id: "casseurs", title: "Les casseurs de noix", paragraphs: [
        "Les chimpanzés de Bossou sont célèbres pour une chose : casser les noix du palmier à huile.",
        "Ils posent la noix sur une pierre plate, l'enclume, et frappent avec une autre pierre, le marteau.",
        "C'est la façon la plus habile de se servir d'un outil jamais observée chez des animaux sauvages." ] },
      { id: "partage", title: "Le partage du sage", paragraphs: [
        "Après la pêche ou la cueillette, c'est le plus vieux chimpanzé, le sage, qui partage la nourriture.",
        "Et il partage avec justice, pour tout le monde.",
        "Si chacun reçoit deux fruits, une femelle qui attend un petit en reçoit trois : le bébé dans son ventre a, lui aussi, sa part." ] },
      { id: "outils", title: "Un outil pour chaque besoin", paragraphs: [
        "Ils inventent un outil pour presque tout.",
        "Une feuille pliée pour boire l'eau. Une petite tige pour attraper les fourmis.",
        "Un bâton pour récolter le miel, ou pour ramasser les algues qui flottent sur les mares.",
        "Et la tige d'une feuille de palmier pour piler et sortir le cœur du palmier." ] },
      { id: "berceau", title: "Le berceau de l'humanité", paragraphs: [
        "La vie des chimpanzés de Bossou nous rappelle une grande idée : l'Afrique est le berceau de l'humanité, le lieu où tout a commencé.",
        "Voilà pourquoi il faut protéger ces animaux et leur forêt.",
        "Le mont Nimba est inscrit au patrimoine mondial de l'UNESCO : un trésor de la nature, protégé pour le monde entier.",
        "On y trouve aussi des crapauds très rares, qui donnent naissance à des petits déjà formés, au lieu de pondre des œufs.",
        "En observant les chimpanzés, les scientifiques comprennent mieux comment les primates — la grande famille des singes et des humains — se sont répandus sur la Terre." ] },
      { id: "credo", title: "Pati — Les racines, c'est la Base", paragraphs: [
        "« Partager les ressources de notre Histoire, analyser les faits et les versions, les transcrire, trier le vrai, trouver les non-dits, illustrer pour mieux inspirer. »",
        "Éditions Solidaires — Août 2021." ] },
    ],
  },
};
