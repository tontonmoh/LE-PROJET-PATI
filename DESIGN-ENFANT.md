# PATI — Brief d'identité enfant (prompt exécutable)

Objectif : faire que l'interface « dise » immédiatement *pour enfants*, sans perdre
la crédibilité institutionnelle (parents, enseignants, ministère). On habille les
zones enfant de façon ludique ; la coque peut rester sobre.

## Direction appliquée (incrément « enfant » v1)

**1. Typographie ludique**
- Titres : `Fredoka` (arrondie, chaleureuse, accents FR complets).
- Corps : `Nunito` (très lisible, arrondie) à la place d'Inter.
- Appliqué globalement : `h1/h2/h3`, liens de navigation, boutons.

**2. Palette chaude et joyeuse** (le vert PATI reste l'ancre)
- Vert PATI `#0F6E56` · Soleil `#FFC93C` · Corail `#FF6B4A` · Ciel `#3FB6E8`
- Fond chaud crème `#FFF6E7` sur les pages enfant.

**3. Formes et tactilité**
- Boutons : `.btn-kid` — pleins, arrondis (pilule), grands, avec rebond au survol.
- Cartes : `.card-kid` — coins très arrondis (24px), ombre douce, soulèvement au survol.
- Plus d'espace, cibles tactiles généreuses (doigts d'enfant).

**4. Touche de mascotte / illustration**
- La conteuse en cadre arrondi + bulle de dialogue « Bonjour, je suis ta conteuse ! ».
- Couvertures de livres mises en avant comme vignettes rebondissantes.

## À exécuter ensuite (incréments suivants)
- Mascotte récurrente sur toutes les pages (Fifi / Amadou / Binta).
- Illustrations à la place des aplats.
- Gamification du quiz (badges, confettis, étoiles, progression).
- Lecture audio synchronisée (mots surlignés sur la voix-off existante).
- Profils enfants + avatars ; thème adaptatif selon le niveau (Mômes → Passage).
- Séparation « coque adulte » / « mode enfant » pleinement ludique.

## Où c'est codé
- Couleurs + polices : `tailwind.config.js`
- Polices, base typographique, `.btn-kid`, `.card-kid`, navbar : `src/index.css`
- Accueil enfant : `src/pages/Home.tsx`
- Gabarit enfant : `src/pages/Stub.tsx`
