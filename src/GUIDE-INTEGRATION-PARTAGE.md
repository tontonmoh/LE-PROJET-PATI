# Guide — Intégrer le partage social dans puzzle-guinee.html

## Étape 1 : Ajouter le script de partage

À la **fin du fichier**, juste avant le dernier `</script>`, coller le contenu de `partage-defi-integration.js`.

## Étape 2 : Modifier la modale de victoire

Dans la section `.win` du HTML (autour de la ligne 176), trouver :

```html
<div class="win" id="win"><div>
 <div class="crown">🏆</div>
 <h2>CHAMPION</h2>
 <div class="clock" id="winTime">0:00</div>
 <div class="rank" id="winRank"></div>
 <div class="sub" id="winSub">Chrono arrêté · 34 préfectures placées</div>
 <div class="endbtns">
  <button id="winNewBtn">Nouvelle partie</button>
  <button id="winLbBtn">Classement</button>
 </div>
</div></div>
```

**Remplacer** par :

```html
<div class="win" id="win"><div>
 <div class="crown">🏆</div>
 <h2>CHAMPION</h2>
 <div class="clock" id="winTime">0:00</div>
 <div class="rank" id="winRank"></div>
 <div class="sub" id="winSub">Chrono arrêté · 34 préfectures placées</div>
 <div class="endbtns">
  <button id="winNewBtn">Nouvelle partie</button>
  <button id="winShareBtn" style="opacity:0;animation:rise .5s .75s ease forwards">Partager</button>
  <button id="winLbBtn">Classement</button>
 </div>
</div></div>
```

## Étape 3 : Brancher le bouton Partager dans le JavaScript

Après la ligne qui initialise le bouton classement (`document.getElementById('winLbBtn').onclick=showLb;`), ajouter :

```javascript
document.getElementById('winShareBtn').onclick = () => {
  showPartageModal('completion', game.player, game.lastTime, game.lastRank);
};
```

**Cette ligne devrait être vers la ligne 542**, juste avant ou après :
```javascript
document.getElementById('winLbBtn').onclick=showLb;
```

## Étape 4 : Tester

Après intégration, lancer le jeu et :
1. Compléter un puzzle (mode chrono ou libre)
2. Vérifier que le bouton « Partager » s'affiche dans la modale de victoire
3. Sur mobile : click → affiche le menu natif (WhatsApp, Messages, etc.)
4. Sur desktop : click → affiche un popover avec les 4 réseaux + copier le lien

---

## Utilisation supplémentaire — Classement

Si vous avez une page `/classement` (classement mondial des joueurs), vous pouvez aussi faire :

```javascript
// Depuis la page classement, après avoir affiché le rang du joueur
showPartageModal('classement', joueur.name, 0, rang, totalJoueurs);
```

Cela changera le texte du partage vers :
> « 🇬🇳 Mariama est classée #3 sur 1247 joueurs au Défi Pati ! Viens me défier 👉 »

---

## Fichiers nécessaires

- `partage-defi-integration.js` → coller dans `puzzle-guinee.html` avant `</script>`
- `puzzle-guinee.html` modifié → avec le bouton Partager ajouté + l'onclick attaché
