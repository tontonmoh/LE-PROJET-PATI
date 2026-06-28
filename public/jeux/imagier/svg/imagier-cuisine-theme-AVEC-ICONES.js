/**
 * Thème « La Cuisine » pour Pati Mômes — avec ICÔNES SVG
 * À ajouter à window.IMAGIER_THEMES dans public/jeux/imagier/imagier-data.js
 * 
 * Format : { fr, sou, peul, malinke, img, audio? }
 * img : chemin vers SVG OU emoji OU HTML SVG inline
 * 
 * STRATÉGIE V1 :
 * 1. Les icônes SVG sont dans icones-cuisine-pati-momes.svg (fichier séparé)
 * 2. OU on peut les enregistrer comme <svg id="icone-mortier"> directement dans imagier-data.js
 * 3. LE MOTEUR imagier.html détecte automatiquement : emoji vs chemin vs SVG inline
 * 
 * OPTION 1 : Référencer comme chemins (à déployer dans public/jeux/imagier/svg/)
 *   img: '/jeux/imagier/svg/cuisine-mortier.svg'
 * 
 * OPTION 2 : SVG inline (déploiement unique dans imagier-data.js)
 *   img: '<svg id="icone-mortier" ...>...</svg>'
 * 
 * Recommandé : OPTION 1 (fichiers séparés = plus propre)
 */

const IMAGIER_THEME_CUISINE = {
  id: 'cuisine',
  title_fr: 'La Cuisine',
  title_sou: 'Kuliné', // à valider
  pairs: [
    {
      fr: 'Mortier',
      sou: 'Mortiyé',
      peul: 'Fulbe', // à remplacer
      malinke: 'Mali', // à remplacer
      img: '/jeux/imagier/svg/cuisine-01-mortier.svg',
      // ALTERNATIVE (inline) : img: '<svg id="icone-mortier" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">...</svg>'
    },
    {
      fr: 'Pilon',
      sou: 'Piloŋ',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-02-pilon.svg',
    },
    {
      fr: 'Calebasse',
      sou: 'Kambisa',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-03-calebasse.svg',
    },
    {
      fr: 'Marmite',
      sou: 'Marimité',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-04-marmite.svg',
    },
    {
      fr: 'Louche',
      sou: 'Luʃé',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-05-louche.svg',
    },
    {
      fr: 'Foyer',
      sou: 'Fóyé',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-06-foyer.svg',
    },
    {
      fr: 'Plat',
      sou: 'Plá',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-07-plat.svg',
    },
    {
      fr: 'Bidon',
      sou: 'Bidoŋ',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-08-bidon.svg',
    },
    {
      fr: 'Couteau',
      sou: 'Kuté',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-09-couteau.svg',
    },
    {
      fr: 'Passoire',
      sou: 'Pasúré',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-10-passoire.svg',
    },
    {
      fr: 'Panier',
      sou: 'Paní',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-11-panier.svg',
    },
    {
      fr: 'Théière',
      sou: 'Tiré',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-12-theiere.svg',
    },
    {
      fr: 'Bouteille',
      sou: 'Butéy',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-13-bouteille.svg',
    },
    {
      fr: 'Tamis',
      sou: 'Tamí',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-14-tamis.svg',
    },
    {
      fr: 'Cuillère',
      sou: 'Kiiré',
      peul: 'Peul',
      malinke: 'Mali',
      img: '/jeux/imagier/svg/cuisine-15-cuillere.svg',
    },
  ]
};

// Ajouter à window.IMAGIER_THEMES dans imagier-data.js :
// window.IMAGIER_THEMES = {
//   fruits: { ... },
//   animaux: { ... },
//   couleurs: { ... },
//   maison: { ... },
//   cuisine: IMAGIER_THEME_CUISINE,  // ← AJOUT
// };

