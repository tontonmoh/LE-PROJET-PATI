/* ============================================================
   JEU DE L'IMAGIER PATI — DONNÉES ÉDITABLES
   ------------------------------------------------------------
   Pour AJOUTER un thème : copie un bloc { ... } dans THEMES.
   Pour AJOUTER une paire : ajoute { fr, sou, img, audio } au tableau "paires".

   Champs d'une paire :
   - fr     : le mot en français (affiché sur l'étiquette)
   - sou    : le mot en langue nationale (soussou par défaut ; optionnel)
              ⚠️ PLACEHOLDER — à faire relire par un locuteur avant diffusion.
   - img    : pour le prototype = un EMOJI. Plus tard = "/jeux/imagier/svg/<fichier>.svg" OU "/jeux/imagier/img/<fichier>.webp"
   - audio  : (optionnel) "/jeux/imagier/audio/<fichier>.mp3" — vraie voix.
              Si absent → repli synthèse vocale du navigateur.

   L'id du thème sert à l'ouvrir directement : /imagier?theme=<id>
   ============================================================ */

window.IMAGIER_THEMES = [
  {
    id: "couleurs",
    titre: "Les couleurs",
    emoji: "🎨",
    couleur: "#7B5EA7",
    paires: [
      { fr: "Rouge",  sou: "Gbeli", img: "🔴", audio: "" },
      { fr: "Jaune",  sou: "Ɲɛ",    img: "🟡", audio: "" },
      { fr: "Vert",   sou: "Sɛxɛ",  img: "🟢", audio: "" },
      { fr: "Bleu",   sou: "Buu",   img: "🔵", audio: "" },
      { fr: "Noir",   sou: "Fore",  img: "⚫", audio: "" },
      { fr: "Blanc",  sou: "Gbe",   img: "⚪", audio: "" },
      { fr: "Orange", sou: "",      img: "🟠", audio: "" },
      { fr: "Marron", sou: "",      img: "🟤", audio: "" },
    ],
  },
  {
    id: "fruits-legumes",
    titre: "Les fruits & légumes",
    emoji: "🧺",
    couleur: "#C8841E",
    paires: [
      { fr: "Banane",  sou: "Bànáni",  img: "🍌", audio: "" },
      { fr: "Mangue",  sou: "Xàbɛ",    img: "🥭", audio: "" },
      { fr: "Orange",  sou: "Lèmunɛ",  img: "🍊", audio: "" },
      { fr: "Ananas",  sou: "Anánasi", img: "🍍", audio: "" },
      { fr: "Tomate",  sou: "",        img: "🍅", audio: "" },
      { fr: "Piment",  sou: "",        img: "🌶️", audio: "" },
      { fr: "Aubergine", sou: "",      img: "🍆", audio: "" },
      { fr: "Maïs",    sou: "",        img: "🌽", audio: "" },
    ],
  },
  {
    id: "animaux",
    titre: "Les animaux",
    emoji: "🐾",
    couleur: "#1F6E52",
    paires: [
      { fr: "Mouton",   sou: "Yɛxɛ",  img: "🐑", audio: "" },
      { fr: "Chèvre",   sou: "Sii",   img: "🐐", audio: "" },
      { fr: "Poule",    sou: "Tɛgɛ",  img: "🐔", audio: "" },
      { fr: "Vache",    sou: "Ninge", img: "🐄", audio: "" },
      { fr: "Poisson",  sou: "",      img: "🐟", audio: "" },
      { fr: "Éléphant", sou: "Sàgi",  img: "🐘", audio: "" },
      { fr: "Singe",    sou: "Wùli",  img: "🐒", audio: "" },
      { fr: "Oiseau",   sou: "Xɔni",  img: "🐦", audio: "" },
    ],
  },
  {
    id: "maison",
    titre: "Dans la maison",
    emoji: "🏠",
    couleur: "#2C7DA0",
    paires: [
      { fr: "Marmite", sou: "Tunkun", img: "🍲", audio: "" },
      { fr: "Lit",     sou: "Sade",   img: "🛏️", audio: "" },
      { fr: "Chaise",  sou: "Kìiti",  img: "🪑", audio: "" },
      { fr: "Balai",   sou: "Furutɛ", img: "🧹", audio: "" },
      { fr: "Seau",    sou: "Seo",    img: "🪣", audio: "" },
      { fr: "Lampe",   sou: "Lánpu",  img: "🪔", audio: "" },
      { fr: "Assiette", sou: "",      img: "🍽️", audio: "" },
      { fr: "Cuillère", sou: "",      img: "🥄", audio: "" },
    ],
  },
  {
    id: "infrastructures",
    titre: "Les infrastructures",
    emoji: "🏗️",
    couleur: "#3F6B7D",
    paires: [
      { fr: "Maison",  sou: "Banxi", img: "🏠", audio: "" },
      { fr: "École",   sou: "",      img: "🏫", audio: "" },
      { fr: "Hôpital", sou: "",      img: "🏥", audio: "" },
      { fr: "Pont",    sou: "",      img: "🌉", audio: "" },
      { fr: "Route",   sou: "Kira",  img: "🛣️", audio: "" },
      { fr: "Marché",  sou: "",      img: "🏬", audio: "" },
      { fr: "Mosquée", sou: "",      img: "🕌", audio: "" },
      { fr: "Pirogue", sou: "",      img: "🛶", audio: "" },
    ],
  },
  {
    id: "corps",
    titre: "Le corps humain",
    emoji: "🧍",
    couleur: "#A23B72",
    paires: [
      { fr: "Tête",   sou: "Xun",   img: "🧠", audio: "" },
      { fr: "Œil",    sou: "Yaa",   img: "👁️", audio: "" },
      { fr: "Nez",    sou: "Ɲùma",  img: "👃", audio: "" },
      { fr: "Oreille", sou: "Tuli", img: "👂", audio: "" },
      { fr: "Bouche", sou: "Dɛ",    img: "👄", audio: "" },
      { fr: "Main",   sou: "Bɛlɛxɛ", img: "✋", audio: "" },
      { fr: "Pied",   sou: "Sanke", img: "🦶", audio: "" },
      { fr: "Dent",   sou: "Ɲinyi", img: "🦷", audio: "" },
    ],
  },
  {
    id: "alphabet",
    titre: "L'alphabet",
    emoji: "🔤",
    couleur: "#B23A1E",
    type: "alphabet",
    // Chaque lettre + un mot-image guinéen/concret qui commence par elle.
    // img = emoji pour l'instant ; plus tard "/jeux/imagier/img/alpha-x.webp".
    lettres: [
      { maj: "A", min: "a", mot: "Ananas",   img: "🍍" },
      { maj: "B", min: "b", mot: "Banane",   img: "🍌" },
      { maj: "C", min: "c", mot: "Chèvre",   img: "🐐" },
      { maj: "D", min: "d", mot: "Djembé",   img: "🥁" },
      { maj: "E", min: "e", mot: "Éléphant", img: "🐘" },
      { maj: "F", min: "f", mot: "Fleur",    img: "🌺" },
      { maj: "G", min: "g", mot: "Gombo",    img: "🫛" },
      { maj: "H", min: "h", mot: "Hibou",    img: "🦉" },
      { maj: "I", min: "i", mot: "Igname",   img: "🍠" },
      { maj: "J", min: "j", mot: "Jarre",    img: "🏺" },
      { maj: "K", min: "k", mot: "Kola",     img: "🌰" },
      { maj: "L", min: "l", mot: "Lampe",    img: "🪔" },
      { maj: "M", min: "m", mot: "Mangue",   img: "🥭" },
      { maj: "N", min: "n", mot: "Natte",    img: "🟫" },
      { maj: "O", min: "o", mot: "Oiseau",   img: "🐦" },
      { maj: "P", min: "p", mot: "Poisson",  img: "🐟" },
      { maj: "Q", min: "q", mot: "Queue",    img: "🦎" },
      { maj: "R", min: "r", mot: "Riz",      img: "🍚" },
      { maj: "S", min: "s", mot: "Soleil",   img: "☀️" },
      { maj: "T", min: "t", mot: "Tortue",   img: "🐢" },
      { maj: "U", min: "u", mot: "Usine",    img: "🏭" },
      { maj: "V", min: "v", mot: "Vache",    img: "🐄" },
      { maj: "W", min: "w", mot: "Wagon",    img: "🚃" },
      { maj: "X", min: "x", mot: "Xylophone", img: "🎶" },
      { maj: "Y", min: "y", mot: "Yaourt",   img: "🥛" },
      { maj: "Z", min: "z", mot: "Zèbre",    img: "🦓" },
    ],
  },
  {
    id: "cuisine",
    titre: "La Cuisine",
    emoji: "🍳",
    couleur: "#C97450",
    paires: [
      { fr: "Mortier",  sou: "Mortiyé",  img: "/jeux/imagier/svg/cuisine-01-mortier.svg", audio: "" },
      { fr: "Pilon",    sou: "Piloŋ",    img: "/jeux/imagier/svg/cuisine-02-pilon.svg", audio: "" },
      { fr: "Calebasse", sou: "Kambisa", img: "/jeux/imagier/svg/cuisine-03-calebasse.svg", audio: "" },
      { fr: "Marmite",  sou: "Marimité", img: "/jeux/imagier/svg/cuisine-04-marmite.svg", audio: "" },
      { fr: "Louche",   sou: "Luʃé",     img: "/jeux/imagier/svg/cuisine-05-louche.svg", audio: "" },
      { fr: "Foyer",    sou: "Fóyé",     img: "/jeux/imagier/svg/cuisine-06-foyer.svg", audio: "" },
      { fr: "Plat",     sou: "Plá",      img: "/jeux/imagier/svg/cuisine-07-plat.svg", audio: "" },
      { fr: "Bidon",    sou: "Bidoŋ",    img: "/jeux/imagier/svg/cuisine-08-bidon.svg", audio: "" },
      { fr: "Couteau",  sou: "Kuté",     img: "/jeux/imagier/svg/cuisine-09-couteau.svg", audio: "" },
      { fr: "Passoire", sou: "Pasúré",   img: "/jeux/imagier/svg/cuisine-10-passoire.svg", audio: "" },
      { fr: "Panier",   sou: "Paní",     img: "/jeux/imagier/svg/cuisine-11-panier.svg", audio: "" },
      { fr: "Théière",  sou: "Tiré",     img: "/jeux/imagier/svg/cuisine-12-theiere.svg", audio: "" },
      { fr: "Bouteille", sou: "Butéy",   img: "/jeux/imagier/svg/cuisine-13-bouteille.svg", audio: "" },
      { fr: "Tamis",    sou: "Tamí",     img: "/jeux/imagier/svg/cuisine-14-tamis.svg", audio: "" },
      { fr: "Cuillère", sou: "Kiiré",    img: "/jeux/imagier/svg/cuisine-15-cuillere.svg", audio: "" },
    ],
  },
];
