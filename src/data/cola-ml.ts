// « Le secret magique qui touche les cœurs » — Fatoumata Diaraye Cissé, illustrations Mady Camara.
// Collection Pati · Éditions Solidaires — album documentaire-narratif sur la noix de cola.
// FR posé en premier (texte maître fidèle) ; EN / AR / ZH à ajouter ensuite.
// NB : quelques points restent à valider avec l'autrice (chant maninka sans traduction, formules complétées
// au plus proche du sens) — voir le récap remis à Moh.
export type ColaLang = "fr" | "en" | "ar" | "zh";
type Section = { id: string; title: string; paragraphs: string[]; image?: string };
type Book = { lang: ColaLang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: Section[] };

export const COLA_ML: Partial<Record<ColaLang, Book>> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "Le secret magique qui touche les cœurs",
    sections: [
      { id: "s1", title: "Un fruit qui relie les peuples", paragraphs: [
        "Depuis toujours, l'Homme utilise les moyens que lui offre la nature pour se nourrir, se soigner, ou encore tisser des liens avec ses voisins. La noix de cola, fruit tropical par excellence, est un exemple pour faciliter les échanges entre les peuples d'Afrique." ] },
      { id: "s2", title: "D'où vient la noix de cola", paragraphs: [
        "La noix de cola nous vient du colatier, un arbre fruitier originaire des forêts africaines. La cabosse du colatier contient des graines appelées noix de cola. Amère et âpre au goût, la cola est très aimée en Afrique, surtout chez les adultes et les personnes âgées." ] },
      { id: "s3", title: "Une monnaie, puis une marchandise", paragraphs: [
        "La noix de cola a longtemps servi de monnaie d'échange, au même titre que le cauris et le sel. Mais elle devint très tôt elle-même une marchandise." ] },
      { id: "s4", title: "Un produit vital", paragraphs: [
        "La noix de cola a été, pendant des siècles, un produit vital en Afrique, grâce à ses propriétés médicinales et curatives, dont la plupart ont été confirmées par des études cliniques." ] },
      { id: "s5", title: "Ses vertus", paragraphs: [
        "La cola contient des éléments essentiels : la caféine et la kolatine. Ceux-ci stimulent les nerfs et le corps, ce qui lui confère des vertus diurétiques et cardiotoniques.",
        "La noix de cola peut être mâchée crue, ou infusée après broyage. Elle est utilisée en cas de rhume, de fatigue physique ou intellectuelle. Elle aide également à mieux digérer après un repas." ] },
      { id: "s6", title: "Le symbole de la générosité", paragraphs: [
        "Elle est souvent le symbole de la générosité, utilisée pour souhaiter la bienvenue aux étrangers." ] },
      { id: "s7", title: "De la cola au Coca-Cola", paragraphs: [
        "Elle est à l'origine d'une célèbre boisson appelée « Coca-Cola », produite aux États-Unis d'Amérique par le Dr Pemberton à l'aide de feuilles de coca et de noix de cola. Cette boisson est consommée par des millions de personnes dans le monde.",
        "Depuis, nombreuses sont les compagnies qui désirent reproduire le succès de la marque. La cola est ainsi l'un des ingrédients les plus demandés du secteur de la boisson." ] },
      { id: "s8", title: "Un trait d'union social", paragraphs: [
        "La noix de cola, par-delà les disparités sociales, favorise la paix dans la société. Elle contribue à créer, maintenir et consolider des liens sociaux, tout en instaurant au sein des communautés un climat de considération mutuelle." ] },
      { id: "s9", title: "Le chant de la cola", paragraphs: [
        "♪ Yoli yoliyo badara / Yoli yoliyo badara / Maamaya gnokhoun / Nso ma m'mini ma / Mama so cola ra mini / A na Bankhikoui / Mama so cola ra mini / A natandé ma / Mama so cola ra mini / Yoli yoliyo badara",
        "(Chant en maninka — traduction française à venir.)" ] },
      { id: "s10", title: "La cola et l'apprentissage", paragraphs: [
        "Souvent, pour inscrire son enfant dans un centre d'apprentissage d'un métier, ou dans un programme d'initiation, on offre une poignée de noix de cola." ] },
      { id: "s11", title: "Et si on célébrait un mariage ?", paragraphs: [
        "Et si on participait à célébrer un mariage ?" ] },
      { id: "s12", title: "Fanta et Balla", paragraphs: [
        "Fanta et Balla veulent s'unir pour la vie ; mais, pour ce faire, il faut l'accord des parents, surtout celui de Fanta. Et l'ingrédient secret pour rapprocher les deux familles est, bien évidemment, notre noix magique." ] },
      { id: "s13", title: "Woro tan folo", paragraphs: [
        "WORO TAN FOLO…",
        "« An Mbarafen do yé aloubara men baradiyanyen, Moba louf o woro lé ten »",
        "Par un matin ensoleillé, la famille de Balla se met en route pour rencontrer celle de Fanta, afin de s'assurer qu'il n'y a pas d'autres prétendants pour la jeune femme." ] },
      { id: "s14", title: "Gninin kan woro tan", paragraphs: [
        "Il est de coutume, chez les Malinkés, de toujours s'assurer que la prétendante est libre de tout attachement, afin d'éviter d'éventuels conflits. Et seulement après, la famille du prétendant peut poser sa candidature.",
        "GNININ KAN WORO TAN…",
        "« Ni mo ta ko wo gnini kali woro le ten »",
        "Ça y est ! Fanta est libre de tout engagement vis-à-vis d'un autre homme, et sa famille en a informé la famille du prétendant. Cette dernière, ayant reçu la notification, se prépare donc à repartir chez les grands-oncles de Fanta, munie de dix noix de cola, pour leur demander de bien vouloir accorder la main de la jeune femme à leur fils." ] },
      { id: "s15", title: "Woro tan", paragraphs: [
        "WORO TAN",
        "— « Ni mo ta ko alouyé a din an ma » : l'intention de la famille du prétendant.",
        "— « Silabara la ka alouyé » : la notification de la famille de la fille.",
        "Ensuite, les formalités d'usage sont effectuées par le Fouti wali (chargé de protocole), mandaté par la famille de la fille pour s'occuper de l'intégralité des démarches, en compagnie de la famille du prétendant qu'il est censé guider." ] },
      { id: "s16", title: "Foudou sidi — la célébration", paragraphs: [
        "Le jour de la célébration, dix noix de cola réglementaires — plus un autre lot de cola, en guise de marque de considération envers toutes les parties prenantes — sont présentées par la belle-famille. Et l'union coutumière est scellée entre les deux familles, au-delà des conjoints.",
        "Fanta et Balla sont désormais unis par les liens sacrés du mariage. Ils vécurent heureux et eurent beaucoup d'enfants." ] },
      { id: "fin", title: "Pati — Les racines, c'est la Base", paragraphs: [
        "« Partager les ressources de notre Histoire, analyser les faits et les versions, les transcrire, trier le vrai, trouver les non-dits, illustrer pour mieux inspirer. »",
        "Éditions Solidaires." ] },
    ],
  },
};
