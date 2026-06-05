# PATI — projetpati.com (source reconstruite)

Source **éditable** du site, reconstruite à partir du build en ligne.
Stack : **Vite + React + TypeScript + Tailwind CSS + React Router + lucide-react**. Site statique, sans backend.

## Démarrer

```bash
npm install
npm run dev      # serveur de développement
npm run build    # produit le dossier dist/ à déposer sur Netlify
```

## Structure

```
src/
  main.tsx              point d'entrée
  App.tsx               toutes les routes du site
  index.css            charte + styles globaux (navbar, footer)
  components/
    Layout.tsx          en-tête + contenu + pied de page
    Navbar.tsx          en-tête (reconstruit fidèlement)
    Footer.tsx          pied de page (reconstruit fidèlement)
  data/
    books.ts            CATALOGUE des livres — à éditer pour ajouter/modifier un livre
  pages/
    Home.tsx            accueil (version provisoire — incrément suivant : fidèle)
    Stub.tsx            gabarit des pages pas encore portées
public/                  images, livres PDF, audio, manifest, icônes
```

## Avancement de la reconstruction

- [x] Socle technique (build OK), charte, en-tête, pied de page, routage des 51 routes, données catalogue
- [ ] Accueil fidèle (Hero / Valeurs / Nouveautés / Sélection)
- [ ] Pages livres, lecteurs, quiz, audio
- [ ] Espaces (Conteurs / Enseignants / Parents / Clubs), Orientation « Découvre ton Génie »
- [ ] Pages Accès / comptes, pages institutionnelles
