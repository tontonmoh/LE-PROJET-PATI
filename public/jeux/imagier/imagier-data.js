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

  /* ============================================================
     QUI FAIT CE BRUIT ? — jeu sonore 3-7 ans (type "ecoute")
     - sound   : le bruit à reconnaître (sons/<id>.mp3, 2-4 s)
     - img     : emoji provisoire → remplacer par /jeux/imagier/img/ecoute/<id>.webp (Gemini)
     - sou     : soussou VIDE — à remplir par un locuteur (jamais inventé)
     - niveau  : 1 = sons très distincts (3-4 ans), 2 = sons proches (4-5 ans), 3 = fins
     - paire   : son voisin qui sert de leurre au niveau 2
     - moment  : matin / jour / soir / nuit → mode « La journée de Madi »
     - credit  : auteur · licence · fichier Wikimedia Commons (affiché dans « Crédits »)
     ============================================================ */
  {
    id: "ecoute",
    titre: "Qui fait ce bruit ?",
    emoji: "👂",
    couleur: "#D9622B",
    type: "ecoute",
    sons: [
      { id:"coq",        fr:"le coq",        sou:"", img:"🐓", sound:"/jeux/imagier/sons/coq.mp3",        famille:"animaux", niveau:1, paire:"poule",      moment:"matin", credit:"alys · domaine public · Medium rooster crowing.ogg" },
      { id:"poule",      fr:"la poule",      sou:"", img:"🐔", sound:"/jeux/imagier/sons/poule.mp3",      famille:"animaux", niveau:2, paire:"coq",        moment:"matin", credit:"alys · domaine public · Hen announcing shes lain an egg.ogg" },
      { id:"chevre",     fr:"la chèvre",     sou:"", img:"🐐", sound:"/jeux/imagier/sons/chevre.mp3",     famille:"animaux", niveau:1, paire:"mouton",     moment:"jour",  credit:"stephan · domaine public · Herd of goats bleating.ogg" },
      { id:"mouton",     fr:"le mouton",     sou:"", img:"🐑", sound:"/jeux/imagier/sons/mouton.mp3",     famille:"animaux", niveau:2, paire:"chevre",     moment:"jour",  credit:"earthcalling · domaine public · Sheep bleating.ogg" },
      { id:"ane",        fr:"l'âne",         sou:"", img:"🫏", sound:"/jeux/imagier/sons/ane.mp3",        famille:"animaux", niveau:1, paire:"",           moment:"jour",  credit:"Félix Blume · CC0 · a-donkey-is-braying-in-his-enclosure-in-south-of-france.wav" },
      { id:"grillon",    fr:"le grillon",    sou:"", img:"🦗", sound:"/jeux/imagier/sons/grillon.mp3",    famille:"animaux", niveau:2, paire:"grenouille", moment:"nuit",  credit:"DrTrumpet · CC BY-SA 4.0 · Audio Hörbild Grillenzirpen - nachts um 3 im Föhrenwald Mödling.ogg" },
      { id:"grenouille", fr:"la grenouille", sou:"", img:"🐸", sound:"/jeux/imagier/sons/grenouille.mp3", famille:"animaux", niveau:3, paire:"grillon",    moment:"nuit",  credit:"JogiAsad · CC BY-SA 4.0 · Frogs croak calling chorus at night.ogg" },
      { id:"balafon",    fr:"le balafon",    sou:"", img:"🎶", sound:"/jeux/imagier/sons/balafon.mp3",    famille:"musique", niveau:2, paire:"djembe",     moment:"soir",  credit:"KONE IF · CC BY 4.0 · Le son de balafon sénoufo.ogg" },
      { id:"djembe",     fr:"le djembé",     sou:"", img:"🪘", sound:"/jeux/imagier/sons/djembe.mp3",     famille:"musique", niveau:1, paire:"doundoun",   moment:"soir",  credit:"Freddythehat (Wikipédia) · domaine public · Djembe.ogg" },
      { id:"doundoun",   fr:"le doundoun",   sou:"", img:"🥁", sound:"/jeux/imagier/sons/doundoun.mp3",   famille:"musique", niveau:3, paire:"djembe",     moment:"soir",  credit:"Dunun (Commons) · CC BY-SA 3.0 · Dunun.ogg" },
      { id:"pluie",      fr:"la pluie",      sou:"", img:"🌧️", sound:"/jeux/imagier/sons/pluie.mp3",      famille:"nature",  niveau:1, paire:"eau",        moment:"",      credit:"ezwa · domaine public · Rain on a veranda and t.ogg" },
      { id:"vagues",     fr:"la mer",        sou:"", img:"🌊", sound:"/jeux/imagier/sons/vagues.mp3",     famille:"nature",  niveau:1, paire:"pluie",      moment:"",      credit:"earthcalling · domaine public · On a pebble beach.ogg" },
      { id:"tonnerre",   fr:"l'orage",       sou:"", img:"⛈️", sound:"/jeux/imagier/sons/tonnerre.mp3",   famille:"nature",  niveau:2, paire:"pluie",      moment:"",      credit:"Amuzujoe · CC BY-SA 4.0 · Thunder 01.ogg" },
      { id:"bebe",       fr:"le bébé",       sou:"", img:"👶", sound:"/jeux/imagier/sons/bebe.mp3",       famille:"maison",  niveau:1, paire:"",           moment:"",      credit:"reinsamba · CC BY 3.0 · Baby Laugh.ogg" },
      { id:"eau",        fr:"l'eau",         sou:"", img:"💧", sound:"/jeux/imagier/sons/eau.mp3",        famille:"maison",  niveau:2, paire:"the",        moment:"matin", credit:"earthcalling · domaine public · Pouring water in mug in sink.ogg" },
      { id:"the",        fr:"le thé",        sou:"", img:"🫖", sound:"/jeux/imagier/sons/the.mp3",        famille:"maison",  niveau:2, paire:"eau",        moment:"soir",  credit:"chocoholic · domaine public · Pouring iced tea.ogg" },
      { id:"porte",      fr:"la porte",      sou:"", img:"🚪", sound:"/jeux/imagier/sons/porte.mp3",      famille:"maison",  niveau:3, paire:"",           moment:"",      credit:"stephan · domaine public · Door handle creaking.ogg" },
      { id:"moto",       fr:"le klaxon",     sou:"", img:"🛵", sound:"/jeux/imagier/sons/moto.mp3",       famille:"ville",   niveau:1, paire:"voiture",    moment:"jour",  credit:"15HPanska_Ruttner_Jan · CC0 · Car Horn.wav" },
      { id:"voiture",    fr:"la voiture",    sou:"", img:"🚗", sound:"/jeux/imagier/sons/voiture.mp3",    famille:"ville",   niveau:2, paire:"moto",       moment:"jour",  credit:"stephan · domaine public · Starting a car and driving.ogg" },
      { id:"train",      fr:"le train",      sou:"", img:"🚂", sound:"/jeux/imagier/sons/train.mp3",      famille:"ville",   niveau:2, paire:"",           moment:"",      credit:"NIRVAAN222222 · CC0 · The horn of a Bluebird railcar.ogg" },
      // À ENREGISTRER À CONAKRY (introuvables en banque libre) : pilon, kora, balai, marchande
    ],
  },
];
