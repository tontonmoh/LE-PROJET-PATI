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
      { fr: "Rouge",  sou: "Gbeli", img: "🔴", audio: "/jeux/imagier/voix/mot-rouge.mp3" },
      { fr: "Jaune",  sou: "Ɲɛ",    img: "🟡", audio: "/jeux/imagier/voix/mot-jaune.mp3" },
      { fr: "Vert",   sou: "Sɛxɛ",  img: "🟢", audio: "/jeux/imagier/voix/mot-vert.mp3" },
      { fr: "Bleu",   sou: "Buu",   img: "🔵", audio: "/jeux/imagier/voix/mot-bleu.mp3" },
      { fr: "Noir",   sou: "Fore",  img: "⚫", audio: "/jeux/imagier/voix/mot-noir.mp3" },
      { fr: "Blanc",  sou: "Gbe",   img: "⚪", audio: "/jeux/imagier/voix/mot-blanc.mp3" },
      { fr: "Orange", sou: "",      img: "🟠", audio: "/jeux/imagier/voix/mot-orange-couleur.mp3" },
      { fr: "Marron", sou: "",      img: "🟤", audio: "/jeux/imagier/voix/mot-marron.mp3" },
    ],
  },
  {
    id: "fruits-legumes",
    titre: "Les fruits & légumes",
    emoji: "🧺",
    couleur: "#C8841E",
    paires: [
      { fr: "Banane",  sou: "Bànáni",  img: "🍌", audio: "/jeux/imagier/voix/mot-banane.mp3" },
      { fr: "Mangue",  sou: "Xàbɛ",    img: "🥭", audio: "/jeux/imagier/voix/mot-mangue.mp3" },
      { fr: "Orange",  sou: "Lèmunɛ",  img: "🍊", audio: "/jeux/imagier/voix/mot-orange-fruit.mp3" },
      { fr: "Ananas",  sou: "Anánasi", img: "🍍", audio: "/jeux/imagier/voix/mot-ananas.mp3" },
      { fr: "Tomate",  sou: "",        img: "🍅", audio: "/jeux/imagier/voix/mot-tomate.mp3" },
      { fr: "Piment",  sou: "",        img: "🌶️", audio: "/jeux/imagier/voix/mot-piment.mp3" },
      { fr: "Aubergine", sou: "",      img: "🍆", audio: "/jeux/imagier/voix/mot-aubergine.mp3" },
      { fr: "Maïs",    sou: "",        img: "🌽", audio: "/jeux/imagier/voix/mot-mais.mp3" },
    ],
  },
  {
    id: "animaux",
    titre: "Les animaux",
    emoji: "🐾",
    couleur: "#1F6E52",
    paires: [
      { fr: "Mouton",   sou: "Yɛxɛ",  img: "🐑", audio: "/jeux/imagier/voix/mot-mouton.mp3" },
      { fr: "Chèvre",   sou: "Sii",   img: "🐐", audio: "/jeux/imagier/voix/mot-chevre.mp3" },
      { fr: "Poule",    sou: "Tɛgɛ",  img: "🐔", audio: "/jeux/imagier/voix/mot-poule.mp3" },
      { fr: "Vache",    sou: "Ninge", img: "🐄", audio: "/jeux/imagier/voix/mot-vache.mp3" },
      { fr: "Poisson",  sou: "",      img: "🐟", audio: "/jeux/imagier/voix/mot-poisson.mp3" },
      { fr: "Éléphant", sou: "Sàgi",  img: "🐘", audio: "/jeux/imagier/voix/mot-elephant.mp3" },
      { fr: "Singe",    sou: "Wùli",  img: "🐒", audio: "/jeux/imagier/voix/mot-singe.mp3" },
      { fr: "Oiseau",   sou: "Xɔni",  img: "🐦", audio: "/jeux/imagier/voix/mot-oiseau.mp3" },
    ],
  },
  {
    id: "maison",
    titre: "Dans la maison",
    emoji: "🏠",
    couleur: "#2C7DA0",
    paires: [
      { fr: "Marmite", sou: "Tunkun", img: "🍲", audio: "/jeux/imagier/voix/mot-marmite.mp3" },
      { fr: "Lit",     sou: "Sade",   img: "🛏️", audio: "/jeux/imagier/voix/mot-lit.mp3" },
      { fr: "Chaise",  sou: "Kìiti",  img: "🪑", audio: "/jeux/imagier/voix/mot-chaise.mp3" },
      { fr: "Balai",   sou: "Furutɛ", img: "🧹", audio: "/jeux/imagier/voix/mot-balai.mp3" },
      { fr: "Seau",    sou: "Seo",    img: "🪣", audio: "/jeux/imagier/voix/mot-seau.mp3" },
      { fr: "Lampe",   sou: "Lánpu",  img: "🪔", audio: "/jeux/imagier/voix/mot-lampe.mp3" },
      { fr: "Assiette", sou: "",      img: "🍽️", audio: "/jeux/imagier/voix/mot-assiette.mp3" },
      { fr: "Cuillère", sou: "",      img: "🥄", audio: "/jeux/imagier/voix/mot-cuillere.mp3" },
    ],
  },
  {
    id: "infrastructures",
    titre: "Les infrastructures",
    emoji: "🏗️",
    couleur: "#3F6B7D",
    paires: [
      { fr: "Maison",  sou: "Banxi", img: "🏠", audio: "/jeux/imagier/voix/mot-maison.mp3" },
      { fr: "École",   sou: "",      img: "🏫", audio: "/jeux/imagier/voix/mot-ecole.mp3" },
      { fr: "Hôpital", sou: "",      img: "🏥", audio: "/jeux/imagier/voix/mot-hopital.mp3" },
      { fr: "Pont",    sou: "",      img: "🌉", audio: "/jeux/imagier/voix/mot-pont.mp3" },
      { fr: "Route",   sou: "Kira",  img: "🛣️", audio: "/jeux/imagier/voix/mot-route.mp3" },
      { fr: "Marché",  sou: "",      img: "🏬", audio: "/jeux/imagier/voix/mot-marche.mp3" },
      { fr: "Mosquée", sou: "",      img: "🕌", audio: "/jeux/imagier/voix/mot-mosquee.mp3" },
      { fr: "Pirogue", sou: "",      img: "🛶", audio: "/jeux/imagier/voix/mot-pirogue.mp3" },
    ],
  },
  {
    id: "corps",
    titre: "Le corps humain",
    emoji: "🧍",
    couleur: "#A23B72",
    paires: [
      { fr: "Tête",   sou: "Xun",   img: "🧠", audio: "/jeux/imagier/voix/mot-tete.mp3" },
      { fr: "Œil",    sou: "Yaa",   img: "👁️", audio: "/jeux/imagier/voix/mot-oeil.mp3" },
      { fr: "Nez",    sou: "Ɲùma",  img: "👃", audio: "/jeux/imagier/voix/mot-nez.mp3" },
      { fr: "Oreille", sou: "Tuli", img: "👂", audio: "/jeux/imagier/voix/mot-oreille.mp3" },
      { fr: "Bouche", sou: "Dɛ",    img: "👄", audio: "/jeux/imagier/voix/mot-bouche.mp3" },
      { fr: "Main",   sou: "Bɛlɛxɛ", img: "✋", audio: "/jeux/imagier/voix/mot-main.mp3" },
      { fr: "Pied",   sou: "Sanke", img: "🦶", audio: "/jeux/imagier/voix/mot-pied.mp3" },
      { fr: "Dent",   sou: "Ɲinyi", img: "🦷", audio: "/jeux/imagier/voix/mot-dent.mp3" },
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
      { maj: "A", min: "a", mot: "Ananas",   img: "🍍", audio: "/jeux/imagier/voix/lettre-a.mp3" },
      { maj: "B", min: "b", mot: "Banane",   img: "🍌", audio: "/jeux/imagier/voix/lettre-b.mp3" },
      { maj: "C", min: "c", mot: "Chèvre",   img: "🐐", audio: "/jeux/imagier/voix/lettre-c.mp3" },
      { maj: "D", min: "d", mot: "Djembé",   img: "🥁", audio: "/jeux/imagier/voix/lettre-d.mp3" },
      { maj: "E", min: "e", mot: "Éléphant", img: "🐘", audio: "/jeux/imagier/voix/lettre-e.mp3" },
      { maj: "F", min: "f", mot: "Fleur",    img: "🌺", audio: "/jeux/imagier/voix/lettre-f.mp3" },
      { maj: "G", min: "g", mot: "Gombo",    img: "🫛", audio: "/jeux/imagier/voix/lettre-g.mp3" },
      { maj: "H", min: "h", mot: "Hibou",    img: "🦉", audio: "/jeux/imagier/voix/lettre-h.mp3" },
      { maj: "I", min: "i", mot: "Igname",   img: "🍠", audio: "/jeux/imagier/voix/lettre-i.mp3" },
      { maj: "J", min: "j", mot: "Jarre",    img: "🏺", audio: "/jeux/imagier/voix/lettre-j.mp3" },
      { maj: "K", min: "k", mot: "Kola",     img: "🌰", audio: "/jeux/imagier/voix/lettre-k.mp3" },
      { maj: "L", min: "l", mot: "Lampe",    img: "🪔", audio: "/jeux/imagier/voix/lettre-l.mp3" },
      { maj: "M", min: "m", mot: "Mangue",   img: "🥭", audio: "/jeux/imagier/voix/lettre-m.mp3" },
      { maj: "N", min: "n", mot: "Natte",    img: "🟫", audio: "/jeux/imagier/voix/lettre-n.mp3" },
      { maj: "O", min: "o", mot: "Oiseau",   img: "🐦", audio: "/jeux/imagier/voix/lettre-o.mp3" },
      { maj: "P", min: "p", mot: "Poisson",  img: "🐟", audio: "/jeux/imagier/voix/lettre-p.mp3" },
      { maj: "Q", min: "q", mot: "Queue",    img: "🦎", audio: "/jeux/imagier/voix/lettre-q.mp3" },
      { maj: "R", min: "r", mot: "Riz",      img: "🍚", audio: "/jeux/imagier/voix/lettre-r.mp3" },
      { maj: "S", min: "s", mot: "Soleil",   img: "☀️", audio: "/jeux/imagier/voix/lettre-s.mp3" },
      { maj: "T", min: "t", mot: "Tortue",   img: "🐢", audio: "/jeux/imagier/voix/lettre-t.mp3" },
      { maj: "U", min: "u", mot: "Usine",    img: "🏭", audio: "/jeux/imagier/voix/lettre-u.mp3" },
      { maj: "V", min: "v", mot: "Vache",    img: "🐄", audio: "/jeux/imagier/voix/lettre-v.mp3" },
      { maj: "W", min: "w", mot: "Wagon",    img: "🚃", audio: "/jeux/imagier/voix/lettre-w.mp3" },
      { maj: "X", min: "x", mot: "Xylophone", img: "🎶", audio: "/jeux/imagier/voix/lettre-x.mp3" },
      { maj: "Y", min: "y", mot: "Yaourt",   img: "🥛", audio: "/jeux/imagier/voix/lettre-y.mp3" },
      { maj: "Z", min: "z", mot: "Zèbre",    img: "🦓", audio: "/jeux/imagier/voix/lettre-z.mp3" },
    ],
  },
  {
    id: "cuisine",
    titre: "La Cuisine",
    emoji: "🍳",
    couleur: "#C97450",
    paires: [
      { fr: "Mortier",  sou: "Mortiyé",  img: "/jeux/imagier/svg/cuisine-01-mortier.svg", audio: "/jeux/imagier/voix/mot-mortier.mp3" },
      { fr: "Pilon",    sou: "Piloŋ",    img: "/jeux/imagier/svg/cuisine-02-pilon.svg", audio: "/jeux/imagier/voix/mot-pilon.mp3" },
      { fr: "Calebasse", sou: "Kambisa", img: "/jeux/imagier/svg/cuisine-03-calebasse.svg", audio: "/jeux/imagier/voix/mot-calebasse.mp3" },
      { fr: "Marmite",  sou: "Marimité", img: "/jeux/imagier/svg/cuisine-04-marmite.svg", audio: "/jeux/imagier/voix/mot-marmite.mp3" },
      { fr: "Louche",   sou: "Luʃé",     img: "/jeux/imagier/svg/cuisine-05-louche.svg", audio: "/jeux/imagier/voix/mot-louche.mp3" },
      { fr: "Foyer",    sou: "Fóyé",     img: "/jeux/imagier/svg/cuisine-06-foyer.svg", audio: "/jeux/imagier/voix/mot-foyer.mp3" },
      { fr: "Plat",     sou: "Plá",      img: "/jeux/imagier/svg/cuisine-07-plat.svg", audio: "/jeux/imagier/voix/mot-plat.mp3" },
      { fr: "Bidon",    sou: "Bidoŋ",    img: "/jeux/imagier/svg/cuisine-08-bidon.svg", audio: "/jeux/imagier/voix/mot-bidon.mp3" },
      { fr: "Couteau",  sou: "Kuté",     img: "/jeux/imagier/svg/cuisine-09-couteau.svg", audio: "/jeux/imagier/voix/mot-couteau.mp3" },
      { fr: "Passoire", sou: "Pasúré",   img: "/jeux/imagier/svg/cuisine-10-passoire.svg", audio: "/jeux/imagier/voix/mot-passoire.mp3" },
      { fr: "Panier",   sou: "Paní",     img: "/jeux/imagier/svg/cuisine-11-panier.svg", audio: "/jeux/imagier/voix/mot-panier.mp3" },
      { fr: "Théière",  sou: "Tiré",     img: "/jeux/imagier/svg/cuisine-12-theiere.svg", audio: "/jeux/imagier/voix/mot-theiere.mp3" },
      { fr: "Bouteille", sou: "Butéy",   img: "/jeux/imagier/svg/cuisine-13-bouteille.svg", audio: "/jeux/imagier/voix/mot-bouteille.mp3" },
      { fr: "Tamis",    sou: "Tamí",     img: "/jeux/imagier/svg/cuisine-14-tamis.svg", audio: "/jeux/imagier/voix/mot-tamis.mp3" },
      { fr: "Cuillère", sou: "Kiiré",    img: "/jeux/imagier/svg/cuisine-15-cuillere.svg", audio: "/jeux/imagier/voix/mot-cuillere.mp3" },
    ],
  },

  /* ============================================================
     QUI FAIT CE BRUIT ? — jeu sonore 3-7 ans (type "ecoute")
     - sound   : le bruit à reconnaître (sons/<id>.mp3, 2-4 s)
     - img     : illustrations Adobe Firefly (Image 5), 512 px webp, dans img/ecoute/
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
      { id:"coq",        fr:"le coq",        sou:"", img:"/jeux/imagier/img/ecoute/coq.webp", sound:"/jeux/imagier/sons/coq.mp3", audio:"/jeux/imagier/voix/mot-coq.mp3",        famille:"animaux", niveau:1, paire:"poule",      moment:"matin", credit:"alys · domaine public · Medium rooster crowing.ogg" },
      { id:"poule",      fr:"la poule",      sou:"", img:"/jeux/imagier/img/ecoute/poule.webp", sound:"/jeux/imagier/sons/poule.mp3", audio:"/jeux/imagier/voix/mot-poule.mp3",      famille:"animaux", niveau:2, paire:"coq",        moment:"matin", credit:"alys · domaine public · Hen announcing shes lain an egg.ogg" },
      { id:"chevre",     fr:"la chèvre",     sou:"", img:"/jeux/imagier/img/ecoute/chevre.webp", sound:"/jeux/imagier/sons/chevre.mp3", audio:"/jeux/imagier/voix/mot-chevre.mp3",     famille:"animaux", niveau:1, paire:"mouton",     moment:"jour",  credit:"stephan · domaine public · Herd of goats bleating.ogg" },
      { id:"mouton",     fr:"le mouton",     sou:"", img:"/jeux/imagier/img/ecoute/mouton.webp", sound:"/jeux/imagier/sons/mouton.mp3", audio:"/jeux/imagier/voix/mot-mouton.mp3",     famille:"animaux", niveau:2, paire:"chevre",     moment:"jour",  credit:"earthcalling · domaine public · Sheep bleating.ogg" },
      { id:"ane",        fr:"l'âne",         sou:"", img:"/jeux/imagier/img/ecoute/ane.webp", sound:"/jeux/imagier/sons/ane.mp3", audio:"/jeux/imagier/voix/mot-ane.mp3",        famille:"animaux", niveau:1, paire:"",           moment:"jour",  credit:"Félix Blume · CC0 · a-donkey-is-braying-in-his-enclosure-in-south-of-france.wav" },
      { id:"grillon",    fr:"le grillon",    sou:"", img:"/jeux/imagier/img/ecoute/grillon.webp", sound:"/jeux/imagier/sons/grillon.mp3", audio:"/jeux/imagier/voix/mot-grillon.mp3",    famille:"animaux", niveau:2, paire:"grenouille", moment:"nuit",  credit:"DrTrumpet · CC BY-SA 4.0 · Audio Hörbild Grillenzirpen - nachts um 3 im Föhrenwald Mödling.ogg" },
      { id:"grenouille", fr:"la grenouille", sou:"", img:"/jeux/imagier/img/ecoute/grenouille.webp", sound:"/jeux/imagier/sons/grenouille.mp3", audio:"/jeux/imagier/voix/mot-grenouille.mp3", famille:"animaux", niveau:3, paire:"grillon",    moment:"nuit",  credit:"JogiAsad · CC BY-SA 4.0 · Frogs croak calling chorus at night.ogg" },
      { id:"balafon",    fr:"le balafon",    sou:"", img:"/jeux/imagier/img/ecoute/balafon.webp", sound:"/jeux/imagier/sons/balafon.mp3", audio:"/jeux/imagier/voix/mot-balafon.mp3",    famille:"musique", niveau:2, paire:"djembe",     moment:"soir",  credit:"KONE IF · CC BY 4.0 · Le son de balafon sénoufo.ogg" },
      { id:"djembe",     fr:"le djembé",     sou:"", img:"/jeux/imagier/img/ecoute/djembe.webp", sound:"/jeux/imagier/sons/djembe.mp3", audio:"/jeux/imagier/voix/mot-djembe.mp3",     famille:"musique", niveau:1, paire:"doundoun",   moment:"soir",  credit:"Freddythehat (Wikipédia) · domaine public · Djembe.ogg" },
      { id:"doundoun",   fr:"le doundoun",   sou:"", img:"/jeux/imagier/img/ecoute/doundoun.webp", sound:"/jeux/imagier/sons/doundoun.mp3", audio:"/jeux/imagier/voix/mot-doundoun.mp3",   famille:"musique", niveau:3, paire:"djembe",     moment:"soir",  credit:"Dunun (Commons) · CC BY-SA 3.0 · Dunun.ogg" },
      { id:"pluie",      fr:"la pluie",      sou:"", img:"/jeux/imagier/img/ecoute/pluie.webp", sound:"/jeux/imagier/sons/pluie.mp3", audio:"/jeux/imagier/voix/mot-pluie.mp3",      famille:"nature",  niveau:1, paire:"eau",        moment:"",      credit:"ezwa · domaine public · Rain on a veranda and t.ogg" },
      { id:"vagues",     fr:"la mer",        sou:"", img:"/jeux/imagier/img/ecoute/vagues.webp", sound:"/jeux/imagier/sons/vagues.mp3", audio:"/jeux/imagier/voix/mot-vagues.mp3",     famille:"nature",  niveau:1, paire:"pluie",      moment:"",      credit:"earthcalling · domaine public · On a pebble beach.ogg" },
      { id:"tonnerre",   fr:"l'orage",       sou:"", img:"/jeux/imagier/img/ecoute/tonnerre.webp", sound:"/jeux/imagier/sons/tonnerre.mp3", audio:"/jeux/imagier/voix/mot-tonnerre.mp3",   famille:"nature",  niveau:2, paire:"pluie",      moment:"",      credit:"Amuzujoe · CC BY-SA 4.0 · Thunder 01.ogg" },
      { id:"bebe",       fr:"le bébé",       sou:"", img:"/jeux/imagier/img/ecoute/bebe.webp", sound:"/jeux/imagier/sons/bebe.mp3", audio:"/jeux/imagier/voix/mot-bebe.mp3",       famille:"maison",  niveau:1, paire:"",           moment:"",      credit:"reinsamba · CC BY 3.0 · Baby Laugh.ogg" },
      { id:"eau",        fr:"l'eau",         sou:"", img:"/jeux/imagier/img/ecoute/eau.webp", sound:"/jeux/imagier/sons/eau.mp3", audio:"/jeux/imagier/voix/mot-eau.mp3",        famille:"maison",  niveau:2, paire:"the",        moment:"matin", credit:"earthcalling · domaine public · Pouring water in mug in sink.ogg" },
      { id:"the",        fr:"le thé",        sou:"", img:"/jeux/imagier/img/ecoute/the.webp", sound:"/jeux/imagier/sons/the.mp3", audio:"/jeux/imagier/voix/mot-the.mp3",        famille:"maison",  niveau:2, paire:"eau",        moment:"soir",  credit:"chocoholic · domaine public · Pouring iced tea.ogg" },
      { id:"porte",      fr:"la porte",      sou:"", img:"/jeux/imagier/img/ecoute/porte.webp", sound:"/jeux/imagier/sons/porte.mp3", audio:"/jeux/imagier/voix/mot-porte.mp3",      famille:"maison",  niveau:3, paire:"",           moment:"",      credit:"stephan · domaine public · Door handle creaking.ogg" },
      { id:"moto",       fr:"le klaxon",     sou:"", img:"/jeux/imagier/img/ecoute/moto.webp", sound:"/jeux/imagier/sons/moto.mp3", audio:"/jeux/imagier/voix/mot-moto.mp3",       famille:"ville",   niveau:1, paire:"voiture",    moment:"jour",  credit:"15HPanska_Ruttner_Jan · CC0 · Car Horn.wav" },
      { id:"voiture",    fr:"la voiture",    sou:"", img:"/jeux/imagier/img/ecoute/voiture.webp", sound:"/jeux/imagier/sons/voiture.mp3", audio:"/jeux/imagier/voix/mot-voiture.mp3",    famille:"ville",   niveau:2, paire:"moto",       moment:"jour",  credit:"stephan · domaine public · Starting a car and driving.ogg" },
      { id:"train",      fr:"le train",      sou:"", img:"/jeux/imagier/img/ecoute/train.webp", sound:"/jeux/imagier/sons/train.mp3", audio:"/jeux/imagier/voix/mot-train.mp3",      famille:"ville",   niveau:2, paire:"",           moment:"",      credit:"NIRVAAN222222 · CC0 · The horn of a Bluebird railcar.ogg" },
      // À ENREGISTRER À CONAKRY (introuvables en banque libre) : pilon, kora, balai, marchande
    ],
  },
];
