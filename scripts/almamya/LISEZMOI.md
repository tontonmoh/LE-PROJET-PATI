# Almamya-Zogota — la banque de questions

Le jeu (`public/jeux/almamya-zogota/index.html`) lit `questions.json`.

**Ajouter des questions à la main** : éditer `redigees.json`. Une question = 
`{"c":"catégorie","n":1|2|3,"q":"question","r":"réponse","o":["3 mauvaises réponses qui commencent par la même lettre"],"f":"fiche","s":"/page-pati"}`.
La lettre est calculée depuis la réponse (les articles Le/La/L' sont ignorés).

**Régénérer la banque** (depuis la racine du repo) :
```
npx esbuild scripts/almamya/dump.ts --bundle --platform=node --outfile=scripts/almamya/dump.cjs && node scripts/almamya/dump.cjs
python3 scripts/almamya/build.py scripts/almamya/data.json scripts/almamya/redigees.json public/jeux/konakri.html
mv questions.json public/jeux/almamya-zogota/questions.json
```
Sources générées : territoires (régions, préfectures, sous-préfectures, langues), quartiers de Conakry (LaGuinèKonakri),
pionnières, Mémorial Horoya, diwés du Fouta, Sèbè. Toute donnée enrichie dans ces fichiers enrichit le quiz.
