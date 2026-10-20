# Génération 2040 — charte d'illustration

*Établie le 20/10/2026, après validation de la planche t1-p1.*

Les 74 planches de la série ne servent pas qu'au lecteur du site. Elles sont
destinées à être **remontées en bandes dessinées et animées en dessins animés**.
Tout ce qui suit découle de cette seconde vie : une image composée pour la page
seule est inutilisable en animation, et on ne les régénérera pas deux fois.

---

## 1. Le format, et le piège du 16:9

Le livre est en **portrait 3:4** (896 × 1200) — c'est le format du lecteur et
celui de Taadidi. L'animation, elle, est en **16:9 paysage**. Une image portrait
recadrée en 16:9 perd le haut et le bas ; une image paysage glissée dans le
lecteur perd les côtés.

**Règle : on produit en portrait 3:4, mais l'action essentielle tient dans une
bande horizontale centrale**, aux proportions 16:9, qui occupe environ les deux
tiers du milieu de la hauteur. Les visages, les gestes et l'objet du récit vivent
dans cette bande. Le haut et le bas ne portent que du décor — ciel, feuillage,
sol, bancs — dont la perte ne coûte rien.

On garde ainsi une seule série d'images, utilisable dans les deux formats sans
rien régénérer.

## 2. Les personnages doivent pouvoir être découpés

En animation, un personnage se détache de son décor et se déplace. Donc :

- chaque personnage important est **entier et détaché** : jamais coupé par un
  banc, une table ou le bord de l'image, jamais fondu dans le fond ;
- **silhouette lisible** : la pose dit l'action à elle seule, bras et mains
  dégagés du corps, pas de membres qui se croisent inutilement ;
- **hauteur de caméra constante** : à hauteur d'yeux d'un enfant de 12 ans,
  sauf intention contraire explicite — une série d'images prises de points de
  vue incohérents ne se monte pas ;
- pas de perspective extrême ni de contre-plongée spectaculaire : impossible à
  réutiliser dans un plan suivant.

## 3. Le décor doit pouvoir vivre seul

Pour un panoramique ou un plan de coupe, l'animation a besoin du décor sans
personne dedans. Pour les **lieux récurrents de chaque tome** — la salle de
classe, la montagne, le marché, la rive — on produit en plus une planche de
**décor seul**, même cadre, mêmes lumières, sans aucun personnage. Une par lieu,
pas une par planche.

## 4. Varier la taille de plan

Un tome dont les six planches sont toutes en plan moyen ne donne pas une bande
dessinée. Sur chaque tome on répartit :

- un **plan large** d'ouverture, qui situe le lieu ;
- des **plans moyens** pour l'action et le dialogue ;
- au moins un **gros plan** — un visage, deux mains, un objet — pour le moment
  de bascule du tome.

C'est aussi meilleur pour le livre : la planche 5 de chaque tome, celle où la
classe énonce son Objectif, gagne à être un gros plan.

## 5. Le texte dans l'image

Le texte peint dans une image ne se traduit pas et s'anime mal. Règle :

- **aucun titre, aucun lettrage, aucun filigrane** — ce sont des pages
  intérieures, pas des couvertures. Nourri de la couverture du tome, le
  générateur recopie spontanément le bandeau « GÉNÉRATION 2040 » : il faut le
  lui interdire explicitement, à chaque fois ;
- le texte **narrativement nécessaire** (ce qui est écrit au tableau) est admis,
  en français, et **doit être exact** — accents compris, vérifié planche par
  planche ;
- quand ce texte est au cœur de la planche, produire **en plus une version au
  tableau vide**, pour pouvoir re-lettrer en anglais, arabe ou chinois à
  l'animation.

## 6. La cohérence des visages

Chaque tome a sa classe et ses personnages. La couverture du tome est jointe en
référence à **chaque** génération — c'est elle qui tient le style et les visages.
Pour les personnages nommés qui reviennent d'une planche à l'autre, on s'appuie
en plus sur la première planche validée du tome, jointe elle aussi.

## 7. Le prompt type

> Reprends exactement le style de l'image jointe, qui est la couverture du même
> livre : même technique de gouache sur papier crème, mêmes verts et ocres
> sourds, mêmes uniformes scolaires kaki, mêmes proportions réalistes d'enfants,
> même lumière douce. Pas de rendu 3D, pas de style Pixar, pas de contour
> numérique dur.
>
> Ceci est une **page intérieure**, pas une couverture : aucun titre, aucun
> lettrage, aucun texte en dehors de ce qui est explicitement décrit ci-dessous.
> L'illustration occupe toute la surface, bord à bord.
>
> [la scène]
>
> Cadre la scène pour que les visages et les gestes essentiels tiennent dans la
> bande horizontale centrale de l'image, en laissant le haut et le bas au décor.
> Les personnages sont entiers, détachés du fond, silhouettes lisibles. Hauteur
> de caméra à hauteur d'yeux d'enfant.
>
> Format portrait 3:4.

## 8. Nommage

`public/images/g2040/t<tome>-p<planche>.webp` — ex. `t1-p1.webp`.
Décors seuls : `t1-decor-classe.webp`. Tableaux vides : `t1-p1-tableau-vide.webp`.
Sources JPEG d'origine rangées dans `~/Downloads/_gemini_ranges/`.

---

## 9. Leçons de la production du tome 1 (20/10/2026)

Trois pièges coûteux, tous rencontrés sur les six premières planches.

**Un fil de conversation neuf par planche.** Dans un fil qui accumule les
images, les boutons de téléchargement ne sont pas numérotés dans l'ordre
d'apparition : on récupère l'image précédente sans s'en apercevoir. Quatre
planches du tome 1 ont été rangées décalées d'un cran avant qu'un contrôle
visuel ne le révèle. Avec un fil neuf, une seule image, un seul bouton, aucune
ambiguïté. Les références (couverture + première planche validée) sont jointes
à chaque fois, ce qui est de toute façon la règle du §6.

**Attendre que l'image soit rendue avant de télécharger.** Un clic trop tôt
télécharge un reste d'image précédente. Vérifier à l'écran que l'image est
complète, puis seulement cliquer.

**Contrôler le contenu, jamais la taille.** Le script de rangement vérifie les
dimensions, ce qui ne prouve rien : une image fausse a les mêmes 896 × 1200
qu'une bonne. Après chaque tome, assembler les planches en bande et les
regarder.

### Ce que le générateur rate régulièrement

- **Les accents sur les capitales.** « LA FORÊT » est revenu deux fois en
  « LA FORET ». Il faut l'exiger explicitement, en renvoyant à une planche
  déjà correcte, et vérifier en zoomant.
- **Les mots qu'on ajoute.** La planche 5 est revenue sans le mot ET au milieu
  du tableau — c'est-à-dire sans son sujet. Énoncer la phrase complète telle
  qu'elle doit se lire, et dire où chaque mot se place.
- **La taille de plan.** Un gros plan demandé revient souvent en plan large :
  le redemander en décrivant ce qu'on ne doit plus voir (« ni le plafond, ni
  les fenêtres »).
- **La géographie.** Le mont Nimba est revenu en cône volcanique fumant. Les
  reliefs réels doivent être décrits, pas nommés.
- **Les gestes techniques.** Les chimpanzés de Bossou sont revenus avec des
  maillets à manche. Décrire le geste exact : une pierre arrondie tenue à
  pleine main, une pierre plate au sol.

### Télécharger sans rater l'image (20/10, tome 0)

Le bouton de téléchargement ne répond pas s'il n'est pas à l'écran : le clic
part, rien ne se passe, et le rangement ramasse une vieille image. La séquence
fiable est `scroll_to` sur le bouton, une pause, puis le clic. Un `scroll` de
la page ne suffit pas.

### Quota

La production du tome 0 s'est arrêtée à la 4e planche sur un refus de Gemini
(« dès que votre limite sera réinitialisée »). Compter environ une quinzaine
d'images générées par session avant la coupure, corrections comprises — donc
deux planches et demie par tome et par jour dans le pire des cas. Ranger et
brancher au fur et à mesure, jamais en fin de tome : une planche rangée est
acquise, une planche en attente est perdue.

---

## 9. Ce que la ré-illustration du tome 0 a appris (20/10/2026)

Le premier tome 0 a été refusé par l'auteur : « Elles se ressemblent toutes. »
Dix planches toutes prises de face, à hauteur d'homme, au même plan moyen.
D'où les règles suivantes, qui priment sur la §2 quand les deux se contredisent :

### 9.1 Un plan de tournage avant la première image

On écrit d'abord le tableau des dix prises de vue du tome, et on vérifie qu'il
n'y a pas deux fois la même. Celui du tome 0, qui a été validé :

| planche | prise de vue |
|---|---|
| 1 ouverture | plongée sur la clairière boisée |
| 2 l'arrivée | contre-plongée très basse, jambes énormes en amorce |
| 3 la classe avant | nature morte, aucun visage |
| 4 bonjour | depuis le fond, par-dessus des nuques énormes, lui petit et loin |
| 5 les mains levées | contre-plongée sous les bras, depuis un enfant assis |
| 6 le silence | trois visages en gros plan, regards qui fuient |
| 7 Simandou | plan serré sur avant-bras et doigts, aucun visage |
| 8 le tour de table | plongée presque verticale sur les bancs |
| 9 le couloir | frise de profil à contre-jour |
| 10 le cahier | par-dessus l'épaule, cahier dans le sens de l'élève |

La hauteur de caméra constante demandée au §2 vaut à l'intérieur d'une scène
continue, pas d'une planche à l'autre : un tome entier à hauteur d'yeux ne se
lit pas.

### 9.2 Deux consignes à répéter à chaque prompt

- **« la peinture occupe TOUTE la surface, bord à bord, sans marge ni cadre »** :
  sans elle, le générateur rend une vignette posée au milieu d'une page crème,
  qui dans le lecteur devient un timbre-poste entouré de vide.
- **« les têtes sont grosses et centrées en hauteur »** : laissé libre, il tasse
  les personnages dans le quart inférieur et remplit le haut de mur vide, ce qui
  vide la bande centrale 16:9 dont dépend l'animation.

Quand une correction en fil ne passe pas au deuxième essai, **rouvrir un fil
neuf** avec la consigne en tête de prompt : dans un fil, le générateur reproduit
son propre défaut.

### 9.3 Le texte manuscrit

Pour un cahier, un carnet, une feuille d'élève : demander explicitement une
écriture **non lisible**, lignes d'encre souples sans mot reconnaissable. Rien
à vérifier, rien à re-lettrer en anglais, arabe ou chinois.

### 9.4 Fiche personnage du tome 0 — le Président

- **polo blanc**, pantalon sombre ;
- **dépasse tous les adultes d'une tête entière** ;
- **visage inventé**, jamais un portrait ressemblant d'un chef d'État en
  exercice : de dos, de trois quarts, à contre-jour ou peu lisible ;
- Boffa est une **zone boisée** : manguiers et grands arbres, jamais une
  clairière nue.
