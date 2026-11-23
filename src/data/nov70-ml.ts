// « 22 novembre 1970 — Pourquoi le Portugal a attaqué la Guinée ? » — Pati Passage (13-15 ans).
// Dialogue entre Fernandez (12 ans) et Tonton Moh, texte tel qu'il est dit dans le documentaire (voix de Moh).
// Images : planches du documentaire (public/livres/22-novembre/). Film : https://youtu.be/FgCw7IhPLBI
export type Nov70Lang = "fr";
type Section = { id: string; title: string; image?: string; paragraphs: string[] };
type Book = { lang: Nov70Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; subtitle?: string; sections: Section[] };

const I = (n: number) => `/livres/22-novembre/nov70-${String(n).padStart(2, "0")}.webp`;

export const NOV70_ML: Record<Nov70Lang, Book> = {
  fr: {
    lang: "fr", dir: "ltr", label: "Français", bookTitle: "22 novembre 1970",
    subtitle: "Pourquoi le Portugal a attaqué la Guinée ?",
    sections: [
      { id: "s01", title: "1. Ronaldo", image: I(1), paragraphs: [
        "Conakry, aujourd'hui. Les rochers de Boulbinet.",
        "Fernandez : Moi, j'adore Cristiano Ronaldo. Mais j'en veux au Portugal d'avoir attaqué la Guinée en 1970.",
        "Tonton Moh : C'est vrai, ça ? Mais pourquoi ?",
        "Fernandez : Pourquoi je leur en veux ?",
        "Tonton Moh : Pourquoi ils nous ont attaqués, déjà ? Tu le sais, toi ?",
        "Fernandez : Non.",
      ] },
      { id: "s02", title: "2. Avant les Français", image: I(97), paragraphs: [
        "Il y a plus de cinq cents ans, sur la côte.",
        "Tonton Moh : Et pourtant, la Guinée a une histoire avec le Portugal. Bien avant l'arrivée des Français : Rio Nunez, Rio Pongo, Cap Verga. Ce sont eux qui ont écrit ces noms sur la carte, il y a plus de 500 ans.",
        "Fernandez : Ils étaient déjà là ?",
        "Tonton Moh : Sur la côte, pour le commerce. Certains sont restés, se sont mariés ici.",
      ] },
      { id: "s03", title: "", image: I(67), paragraphs: [
        "Tonton Moh : Et toi, tu t'appelles comment, déjà ?",
        "Fernandez : Fernandez.",
        "Tonton Moh : Vois-tu, tu leur en veux, et tu portes leur nom depuis des siècles.",
        "Fernandez : Alors pourquoi ils nous ont attaqués ?",
      ] },
      { id: "s04", title: "3. La porte ouverte", image: I(9), paragraphs: [
        "Conakry, de 1958 à 1962.",
        "Tonton Moh : C'est une histoire qui remonte à 1958. La Guinée dit non. Elle est indépendante, la première d'Afrique francophone.",
        "Fernandez : Ça, je sais. Le 2 octobre.",
        "Tonton Moh : Mais ce que tu ne sais pas, c'est ce qu'Ahmed Sékou Touré va dire au monde, à la tribune des Nations unies. Il dit : « La Guinée est indépendante aujourd'hui, mais elle ne sera libre que le jour où toute l'Afrique le sera. »",
      ] },
      { id: "s05", title: "", image: I(68), paragraphs: [
        "Fernandez : C'est gentil, mais ça engage à quoi ?",
        "Tonton Moh : À ouvrir la porte. Et ils sont venus. En 62, un Sud-Africain arrive à Conakry en cachette. Il cherche de l'aide pour se battre contre l'apartheid. Personne ne le connaît encore. Il s'appelle Nelson Mandela.",
        "Fernandez : Mandela est venu ici ?",
      ] },
      { id: "s06", title: "", image: I(13), paragraphs: [
        "Tonton Moh : Ici. Et Miriam Makeba, chassée de chez elle, a vécu ici. Et Kwame Nkrumah, quand on l'a renversé au Ghana, c'est ici qu'il a posé ses valises, dans une villa au bord de la mer.",
        "Fernandez : Donc la Guinée, c'était la maison de tout le monde.",
        "Tonton Moh : De tous ceux qui se battaient. Ceux qui ont le plus reçu l'hospitalité et l'aide de la Guinée, ce sont les colonies portugaises, et surtout nos voisins d'à côté. Leur chef s'appelle Amílcar Cabral. Son bureau, ses bateaux, son école : tout était à Conakry.",
      ] },
      { id: "s07", title: "", image: I(72), paragraphs: [
        "Fernandez : Et ça, le Portugal n'a pas aimé.",
        "Tonton Moh : Le Portugal n'a pas aimé du tout.",
      ] },
      { id: "s08", title: "4. La guerre d'à côté", image: I(17), paragraphs: [
        "Guinée-Bissau, de 1963 à 1970.",
        "Fernandez : Il a fait quoi, le Portugal ?",
        "Tonton Moh : D'abord, il a perdu. Depuis 1963, Cabral et ses hommes lui font la guerre en Guinée-Bissau, et ils gagnent du terrain. Ils capturent même des soldats portugais. Devinez où il les garde ?",
        "Fernandez : À Conakry.",
        "Tonton Moh : À Conakry. Certains depuis sept ans. Alors à Bissau, un général portugais, Spínola, se dit : « Tant que la Guinée leur ouvre la porte, on ne gagnera pas.",
      ] },
      { id: "s09", title: "", image: I(20), paragraphs: [
        "Tonton Moh : Il faut fermer la porte. »",
        "Fernandez : En attaquant un pays qui ne leur a rien fait ?",
        "Tonton Moh : Justement, ils ne peuvent pas le dire. Alors ils préparent tout en cachette, sur une petite île, Soga. Ils y entraînent des Guinéens partis en exil, qui veulent renverser le gouvernement. Ils repeignent les bateaux, ils prennent des armes russes.",
      ] },
      { id: "s10", title: "", image: I(22), paragraphs: [
        "Tonton Moh : Les soldats blancs se noircissent le visage.",
        "Fernandez : Ils se déguisent ?",
        "Tonton Moh : Ils se déguisent. À Lisbonne, le chef du gouvernement a dit oui, à une condition : qu'on ne laisse aucune trace du Portugal.",
        "Fernandez : Et nous, on ne savait rien ?",
        "Tonton Moh : En septembre, le président l'a dit à la radio : « Il y a des camps d'entraînement de l'autre côté. » Mais quand ? Par où ? Comment ? Personne ne savait.",
      ] },
      { id: "s11", title: "", image: I(24), paragraphs: [
        "Tonton Moh : Le 20 novembre 70, à 8 heures du soir, six bateaux quittent l'île de Soga, direction Conakry.",
      ] },
      { id: "s12", title: "20 novembre 1970, 20 heures", paragraphs: [
        "Six bateaux quittent l'île de Soga.",
      ] },
      { id: "s13", title: "22 novembre 1970", paragraphs: [
        "2 heures du matin.",
      ] },
      { id: "s14", title: "5. La nuit", image: I(26), paragraphs: [
        "Conakry, nuit du 21 au 22 novembre 1970.",
        "Tonton Moh : C'est le ramadan, la ville a rompu le jeûne. Elle dort. Pas de lune, pas de vent. Et les soldats aux champs, pour la campagne agricole. Comme souvent. Il ne reste que le peuple et les soldats de garde.",
        "Fernandez : Et eux, ils arrivent par où ?",
        "Tonton Moh : Par la mer. Six bateaux de guerre, sans drapeau, repeints. Conakry est une presqu'île : un bateau devant le port, trois au nord, deux au sud.",
      ] },
      { id: "s15", title: "", image: I(31), paragraphs: [
        "Tonton Moh : Ils la prennent des deux côtés à la fois.",
        "Fernandez : Ils visaient quoi ?",
        "Tonton Moh : Tout ce qui fait tenir une ville debout. Compte avec moi. Le port : les vedettes de Cabral et celles de notre marine. La centrale, pour éteindre la lumière. La radio, à Boulbinet, pour nous couper la voix.",
      ] },
      { id: "s16", title: "", image: I(76), paragraphs: [
        "Tonton Moh : Le palais, la poste, la gendarmerie. Le camp Samory et le camp de la Garde. La prison où Cabral gardait leurs soldats. Le siège du PAIGC. L'aéroport, pour clouer les avions. Et la route de l'isthme, pour couper la ville en deux.",
        "Fernandez : Et ça a marché ?",
        "Tonton Moh : Le port brûle. La lumière s'éteint. Ils libèrent leurs prisonniers.",
      ] },
      { id: "s17", title: "", image: I(37), paragraphs: [
        "Tonton Moh : Mais Cabral est en voyage. Le président n'est ni au palais ni à la villa. À l'aéroport, pas un avion. L'équipe de l'isthme ne descend même pas du bateau. Et celle de la radio se perd dans Boulbinet. La radio continue de parler. Et au matin, à 9 heures, le président parle.",
        "Fernandez : Elle dit quoi ?",
        "Tonton Moh : « Peuple de Guinée, tu es, depuis 2 heures du matin, ce dimanche 22 courant, victime dans ta capitale Conakry d'une agression de la part des forces impérialistes. »",
      ] },
      { id: "s18", title: "", image: I(40), paragraphs: [
        "Tonton Moh : Et le peuple sort. Les militaires aussi. Ensemble, ils ripostent. Ce jour-là, une chanson du Bembeya Jazz prend tout son sens : « Armée guinéenne ».",
      ] },
      { id: "s19", title: "6. La plage", image: I(89), paragraphs: [
        "Cette même nuit, au bord de la mer.",
        "Tonton Moh : Tu vois, là où tu es assise ?",
        "Fernandez : Sur le caillou ?",
        "Tonton Moh : Au bord de l'eau. Cette nuit-là, dans une maison au bord de la plage, il y a un Américain. Il a quitté les États-Unis parce qu'il se battait pour les Noirs. Il s'appelait Stokely Carmichael. Il se fera appeler Kwame Touré. Et sa femme, c'est Miriam Makeba, la chanteuse. Ils vont se coucher, ils entendent des tirs. Ils regardent dehors : des hommes sortent de l'eau et courent sur le sable. Ils préviennent le président.",
      ] },
      { id: "s20", title: "", image: I(43), paragraphs: [
        "Fernandez : Et il prend son fusil.",
        "Tonton Moh : Son fusil, il l'a oublié chez Nkrumah.",
        "Fernandez : Sérieux ?",
        "Tonton Moh : Sérieux. Alors à 4 heures du matin, il met Makeba dans la voiture, il traverse la ville sous les balles, pied au plancher, et il la dépose à l'abri. Lui, il n'a jamais oublié cette nuit. Il a demandé une seule chose avant de mourir : être enterré un 22 novembre.",
      ] },
      { id: "s21", title: "", image: I(81), paragraphs: [
        "Tonton Moh : Il l'a été. Ici, à Conakry.",
      ] },
      { id: "s22", title: "7. Le monde répond", image: I(47), paragraphs: [
        "De décembre 1970 à 1974.",
        "Fernandez : Et après ? Le Portugal a dit pardon ?",
        "Tonton Moh : Le Portugal a dit : « Ce n'est pas nous. »",
        "Fernandez : Avec six bateaux ?",
        "Tonton Moh : Avec six bateaux. Alors la Guinée a porté plainte devant le monde entier. Les Nations unies ont envoyé cinq pays à Conakry pour voir. Ils ont vu, ils ont évalué. Le 8 décembre 1970, le monde a condamné le Portugal.",
      ] },
      { id: "s23", title: "", image: I(50), paragraphs: [
        "Fernandez : Et Cabral ?",
        "Tonton Moh : Cabral a continué jusqu'en janvier 73, mais il a été assassiné, ici même, à Conakry. Il n'a pas vu son pays libre. Mais son pays l'a été.",
      ] },
      { id: "s24", title: "Janvier 1973", paragraphs: [
        "Amílcar Cabral est assassiné à Conakry.",
      ] },
      { id: "s25", title: "", image: I(51), paragraphs: [
        "Tonton Moh : Car à Bissau, le général Spínola avait compris que cette guerre, il ne la gagnerait pas avec des fusils. Et en 74, ce sont les soldats portugais eux-mêmes, fatigués de ces guerres, qui ont renversé leur gouvernement. La même année, la Guinée-Bissau était libre.",
      ] },
      { id: "s26", title: "", image: I(52), paragraphs: [
        "Fernandez : Donc le Portugal qui nous a attaqués…",
        "Tonton Moh : Il n'existe plus.",
      ] },
      { id: "s27", title: "8. Les barques", image: I(53), paragraphs: [
        "Ceux qui étaient dans les bateaux.",
        "Fernandez : Attends, Tonton. Tu as dit qu'il y avait des Guinéens dans les bateaux.",
        "Tonton Moh : Deux cents.",
        "Fernandez : Que faisaient des Guinéens dans ces barques, contre leur propre pays ? C'est pour ça qu'on les appelait des traîtres ?",
        "Tonton Moh : Attention. Les combattants des colonies qui se préparaient chez nous pour aller défendre leur pays, les Portugais les appelaient comment, à ton avis ?",
        "Fernandez : Des traîtres aussi ?",
      ] },
      { id: "s28", title: "", image: I(55), paragraphs: [
        "Tonton Moh : C'est plus complexe que cela, vois-tu. Des Guinéens n'étaient pas d'accord avec le régime à l'époque. Et c'était leur manière de prouver leur amour au pays.",
        "Fernandez : Mais ceux de Cabral, ils se battaient contre un colonisateur. Les autres sont venus avec le colonisateur.",
        "Tonton Moh : C'est vrai.",
        "Fernandez : Et avec des centaines de Guinéens qui ont perdu la vie, Tonton…",
        "Tonton Moh : Oui. Et la riposte, dès lors, sera aussi très malheureuse.",
      ] },
      { id: "s29", title: "9. Le monument", image: I(57), paragraphs: [
        "Conakry, aujourd'hui.",
        "Tonton Moh : Tu passes devant tous les jours.",
        "Fernandez : Le monument de la Liberté.",
        "Tonton Moh : Son vrai nom, c'est le Monument du 22 Novembre 1970. La première pierre a été posée par le président Ahmed Sékou Touré. On l'a inauguré un an après, jour pour jour. Il est là pour ceux qui sont tombés cette nuit-là.",
      ] },
      { id: "s30", title: "", image: I(60), paragraphs: [
        "Fernandez : « L’impérialisme… trouvera son tombeau… en Guinée. » Et Ronaldo, Tonton ? Je fais quoi ?",
        "Tonton Moh : Ronaldo est né en 1985. Laissons-le tranquille.",
      ] },
    ],
  },
};
