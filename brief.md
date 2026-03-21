# Brief Client — P'Accord Piano

**Date** : 2026-03-21
**Statut** : Draft
**Type de client** : `entreprise-locale` (artisan métier d'art)
**Score complétude** : voir section audit gate

---

## 1. Identité

| Champ | Valeur |
|-------|--------|
| Nom commercial | P'Accord Piano |
| Raison sociale | P'Accord Piano |
| SIRET / RCS | 983 922 030 (RCS Chartres) |
| Dirigeant | Simon PACOR |
| Métier / Activité | Technicien accordeur réparateur de pianos |
| Sous-type Schema.org | `ProfessionalService` (+ `Person` pour Simon) |
| Année de création | Non renseignée (à compléter) |

---

## 2. Coordonnées

| Champ | Valeur |
|-------|--------|
| Adresse | 3 Rue du Château d'eau |
| Code postal | 28190 |
| Ville | MITTAINVILLIERS VERIGNY |
| Région | Centre-Val de Loire |
| Téléphone | 06.22.26.77.83 |
| Email | paccord.piano@gmail.com |
| Site actuel | https://paccord-piano.fr |
| Coordonnées GPS | lat: 48.49877507352234 / lon: 1.3101347159039247 |

---

## 3. Horaires

Sur rendez-vous uniquement (pas d'horaires fixes — intervention à domicile).
Disponibilités : Lundi–Samedi, Matin & Après-midi (créneaux sélectionnables dans le formulaire de réservation).

---

## 3b. Profil créatif / Artisan

| Champ | Valeur |
|-------|--------|
| Formation technique | Brevet des Métiers d'Art (BMA) à l'ITEMM |
| Formation musicale | Diplômé du Conservatoire de Nantes + Conservatoire de Metz |
| Expérience | 8 ans |
| Disciplines | Accordage, harmonisation, réglage, réparation, restauration de pianos |
| Double expertise | Technicien + musicien pianiste (différenciateur fort) |
| Clients notables | À compléter |
| Zone d'intervention | 100 km autour de Chartres (28 + départements limitrophes + Paris 75) |

---

## 4. Activité

### Description
Simon PACOR est technicien accordeur réparateur de pianos, diplômé du BMA à l'ITEMM et des conservatoires de Nantes et Metz. Fort de 8 ans d'expérience, il combine savoir-faire traditionnel et techniques modernes pour révéler la vraie essence de chaque instrument. Musicien pianiste avant tout, il comprend les besoins des joueurs et adapte chaque intervention à leur sensibilité.

### Services / Prestations

| Service | Tarif | Modalité |
|---------|-------|----------|
| Accord | À partir de 90 € (progressif selon distance) | Prix fixe selon km |
| Harmonisation | Sur devis | Sur devis |
| Réglage des mécaniques | Sur devis | Sur devis |
| Réparations | Sur devis | Sur devis |
| Conseils achat / vente (expertise) | À partir de 60 € + frais déplacement | Sur devis |

### Grille tarifaire accord (par distance depuis Chartres)

| Distance | Tarif |
|----------|-------|
| 0–10 km | 90 € |
| 10–20 km | 95 € |
| 20–30 km | 100 € |
| 30–40 km | 105 € |
| 40–50 km | 110 € |
| 50–60 km | 115 € |
| 60–100 km | 120 € |
| > 100 km | Hors périmètre (contact direct) |

### Fonctionnalité différenciante à conserver
**Calculateur de tarif par code postal** : l'utilisateur saisit son code postal → calcul automatique de la distance depuis Chartres → affichage du tarif → pré-remplissage du formulaire de réservation. *(À implémenter avec l'API OpenRouteService comme sur le site actuel.)*

### Pianos d'occasion
Simon vend des pianos d'occasion entièrement révisés avec garantie 5 ans + banquette + livraison offerte à 80 km. Catalogue actuel (4 pianos, sur RDV uniquement) :
- Young Chang U109 – 1988 – Corée du Sud – 1 200 €
- Hellas 109 – 1982 – Finlande – 1 900 €
- Hyundai U835 – 1993 – Corée du Sud – 2 500 €
- Kawai KS-2F – 1984 – Japon – 4 000 €

*(Page /pianos-doccasion à recréer même si non incluse dans les sections principales — référencée dans la navigation.)*

### Spécialités / Différenciateurs
- Double expertise technicien + musicien pianiste (unique positionnement)
- Tarification transparente et progressive selon distance
- Calculateur de prix en ligne (fonctionnalité rare chez les accordeurs)
- Garantie 5 ans sur pianos d'occasion
- Diplômé ITEMM (référence nationale dans la facture instrumentale)

### Zone de chalandise
100 km autour de Chartres : Eure-et-Loir (28), Yvelines (78), Eure (27), Orne (61), et Paris (75)

### Clientèle cible
Particuliers propriétaires de piano (débutants, pianistes confirmés, héritiers d'un piano familial). Également : écoles de musique, conservatoires, particuliers souhaitant acheter un piano d'occasion révisé.

### Tarifs
Voir grille ci-dessus. TVA non applicable (article 293 B du CGI).

---

## 5. Identité visuelle

### Couleurs existantes (site Webflow actuel)
- Couleur principale : Noir / Très foncé (fond hero, header)
- Couleur accent : Orange `#f9b233`
- Couleur texte : Blanc (sur fond sombre)
- Ambiance : Élégante, artisanale, musicale — contraste sombre/doré

### Polices
- Existantes : non identifiées précisément (site Webflow)
- Préférences : À définir en wf-02

### Logo
- Disponible : ✅ Oui — plusieurs versions SVG
- Formats : SVG (haute qualité)
- Versions disponibles :
  - `Logo_pacorpiano_complet_blanc.svg` (fond sombre)
  - `Logo_pacorpiano_embleme_blanc.svg` (emblème seul)
  - `Logo_pacorpiano_horizontal.svg`
  - `Logo_pacorpiano_textecolor.svg`

### Photos disponibles
- ✅ Photos hero (multi-résolutions WebP : 360/478/767/991/1280/1440/1920)
- ✅ Photo portrait Simon (section L'artisan)
- ✅ Photos des services : harmonisation, réglages, réparations, conseils (avec/sans cadre)
- ✅ Photos accord (section accords)
- ✅ 44 photos brutes JPG (terrain, événements)
- ✅ Pictos SVG : enveloppe, téléphone, Facebook, Instagram, Google

---

## 6. Présence en ligne

| Plateforme | URL | Notes |
|-----------|-----|-------|
| Site actuel | https://paccord-piano.fr | Webflow, one-page |
| Google Business | https://share.google/NWnNwojKplE3SIv9x | 5/5 — 13 avis |
| Facebook | https://www.facebook.com/profile.php?id=61557954886583 | Page P'Accord Piano |
| Instagram | — | Pas de compte |
| LinkedIn | — | Non identifié |

---

## 7. Objectifs du site

### Format retenu
**Multi-page** avec pages :
- `/` — Accueil (Hero + L'artisan + Services + Témoignages + FAQ + CTA)
- `/contact` — Réservation avec calculateur de tarif par code postal
- `/pianos-doccasion` — Catalogue des pianos d'occasion
- `/mentions-legales` — Mentions légales
- `/politique-de-confidentialite` — Politique de confidentialité (manquante actuellement)
- `/cgv` — CGV
- `/merci` — Page de confirmation après soumission formulaire

### Objectif de conversion principal
**Réservation d'accord** via le formulaire en 2 étapes :
1. Saisie du code postal → calcul distance + tarif (API OpenRouteService)
2. Redirection vers /contact avec tarif pré-rempli + sélection créneaux

### Objectifs secondaires
- Vente de pianos d'occasion (page /pianos-doccasion)
- Demande de devis pour services hors accord

### Fonctionnalités souhaitées
- ✅ Calculateur de tarif par code postal (PRIORITÉ HAUTE — fonctionnalité différenciante)
- ✅ Formulaire de contact / réservation
- ✅ Galerie / sections visuelles
- ✅ Pages légales complètes
- ⬜ Témoignages clients (à recueillir)
- ⬜ FAQ
- ⬜ Blog / Actualités (non prioritaire)

---

## 8. Parcours fondateur

Simon PACOR est avant tout musicien et pianiste, diplômé des conservatoires de Nantes et de Metz. Sa passion pour l'instrument l'a conduit vers la facture instrumentale, où il a obtenu le Brevet des Métiers d'Art à l'ITEMM — école de référence nationale pour la facture instrumentale. Avec 8 ans d'expérience terrain, Simon allie la sensibilité du pianiste et la rigueur du technicien pour accompagner chaque client vers le meilleur son possible.

*(À enrichir avec des anecdotes personnelles, la date de création de l'entreprise, et les motivations — à demander au client)*

---

## 9. Contenus fournis par le client

- ✅ Textes rédigés (ébauche `.docx`)
- ✅ Photos professionnelles (WebP multi-résolutions + 44 photos brutes)
- ✅ Logos (SVG, haute qualité, multi-versions)
- ✅ Données pianos d'occasion (fiches détaillées)
- ✅ Grille tarifaire complète
- ✅ Témoignages clients (13 avis Google — 5/5)
- ✅ Liens réseaux sociaux (Facebook + Google Business)
- ⬜ Année de création de l'entreprise
- ✅ CGV → à conserver et adapter

---

## 10. À compléter

### Indispensable (bloquant)
- ✅ Liens réseaux sociaux (Facebook + Google Business)
- ✅ Témoignages clients (13 avis Google récupérés)

### Important (avant mise en prod)
- [ ] Année de création de P'Accord Piano
- [ ] Photos des pianos d'occasion (pour les fiches catalogue)
- [ ] Web3Forms access key (pour le formulaire de contact)
- [ ] Clé API OpenRouteService (pour le calculateur de tarif — peut réutiliser l'actuelle)
- [ ] Politique de confidentialité (manquante sur le site actuel)

### Souhaitable (amélioration)
- [ ] Anecdote / histoire personnelle pour enrichir la page À Propos
- [ ] FAQ rédigée (5–8 questions fréquentes)
- [ ] Photo portrait haute résolution de Simon (pour l'hero et la section artisan)

---

## 11. Témoignages clients (Google — 5/5 ⭐)

| Auteur | Note | Date | Extrait |
|--------|------|------|---------|
| Romuald Lagnez | ⭐⭐⭐⭐⭐ | Sept. 2025 | Piano noyé 3 jours dans les inondations d'oct. 2024 → restauration complète : bois, cordes, mécaniques, touches, pédales. "Pas une réparation… une résurrection !" |
| Alexia Glass | ⭐⭐⭐⭐⭐ | Fév. 2026 | "En tant que pianiste, j'avais besoin de quelqu'un de compétent et de passionné : c'est toutes les qualités que j'ai trouvées avec Simon !" |
| Jon W. | ⭐⭐⭐⭐⭐ | Nov. 2025 | Piano non accordé depuis ~40 ans → remis en état en quelques heures. "Un excellent professionnel" |
| Heidi Lequeux | ⭐⭐⭐⭐⭐ | Juil. 2025 | "Prestation toujours excellente. Professionnalisme, ponctualité et amabilité" |
| Julien Duvivier | ⭐⭐⭐⭐⭐ | Oct. 2024 | Révision complète, réglage mécanique, accord, harmonisation. "Minutieux, consciencieux, perfectionniste et sympa !" |
| Frederick Cazeres | ⭐⭐⭐⭐⭐ | Jan. 2025 | Reprise intégrale mécanique Grotrian Steinway 1918. "Artisan de confiance, passionné, compétent, rigoureux" |
| Christophe Parra | ⭐⭐⭐⭐⭐ | Avr. 2024 | 2 pianos restaurés (G2 + E108). "Ils sont splendides et inspirants, je retrouve enfin mes instruments" |
| emmanuel jorda | ⭐⭐⭐⭐⭐ | Sept. 2024 | "Si il y avait la possibilité de mettre 6 étoiles, je les aurai cochées !" |
| Marius Melnikoff | ⭐⭐⭐⭐⭐ | Sept. 2024 | "Très bon professionnel (ponctuel, savoir-faire, service client)" |
| Hélène Bienvenu | ⭐⭐⭐⭐⭐ | Déc. 2024 | "Très professionnel et compétent, il prend son temps pour bien faire" |
| Cyril Cibois | ⭐⭐⭐⭐⭐ | Déc. 2024 | "Professionnel à l'écoute et compétent" |

**Mots-clés récurrents dans les avis** : passionné, professionnel, minutieux, ponctuel, compétent, savoir-faire, à l'écoute, artisan de confiance.

---

## Notes de l'extraction

- **Site actuel Webflow** : one-page + quelques pages dédiées. Migration vers Astro/Tailwind.
- **Calculateur de tarif** : fonctionnalité clé à reproduire côté Astro avec API OpenRouteService (ORS). La clé API actuelle est visible dans le code source du site. À renouveler proprement en variable d'environnement.
- **Pianos d'occasion** : bien que non sélectionnée comme section principale, la page `/pianos-doccasion` doit être recréée (référencée dans la nav et dans le sitemap actuel).
- **Témoignages** : 13 avis Google 5/5 — à intégrer dans la section sociale du site.
- **Mentions légales** indiquent "ne collecte aucune donnée" alors qu'un formulaire de contact existe → à corriger dans la nouvelle version.
- **TVA** : non applicable (art. 293 B CGI) — à mentionner dans les pages légales.
