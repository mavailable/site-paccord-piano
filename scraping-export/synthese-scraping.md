# Synthèse scraping — P'Accord Piano

**URL source** : https://paccord-piano.fr
**Date d'extraction** : 2026-03-21
**Nombre de pages** : 5 (+ 1 contact-global non publique)
**Technologie actuelle** : Webflow (hébergé chez Webflow Inc., San Francisco)

---

## Structure du site

| Page | URL | Type |
|------|-----|------|
| Accueil (one-page) | https://paccord-piano.fr | One-page principale |
| Contact / Réservation | https://paccord-piano.fr/contact | Page dédiée |
| Pianos d'occasion | https://paccord-piano.fr/pianos-doccasion | Page dédiée |
| Mentions légales | https://paccord-piano.fr/mentions-legales | Page légale |
| CGV | https://paccord-piano.fr/cgv | Page légale |

**Navigation principale** : L'artisan · Accords · Services · Contact · Pianos d'occasion

---

## Contenu extrait par page

### Page : Accueil
**URL** : https://paccord-piano.fr
**Meta title** : P'accord Piano
**Meta description** : (non renseignée)
**Schema.org / JSON-LD** : ❌ Absent

#### Hero
> "Simon PACOR, votre accordeur de piano sur Chartres, en Eure-et-Loir (28), départements limitrophes et Paris (75)"

**CTA principal** : "Réserver votre accord"
**Sous-titre** : "L'expertise au cœur de chaque note"

**Texte présentation** :
Technicien accordeur réparateur de pianos, diplômé du Brevet des Métiers d'art à l'ITEMM, combine 8 ans d'expérience, un savoir-faire traditionnel et des techniques modernes pour révéler la vraie essence de votre piano. Musicien et pianiste, diplômé du conservatoire de Nantes et de Metz.

**Accroche tarif** : "À partir de 90 €" / "Votre tarif personnalisé"

#### Section Accords
> "L'accord est l'intervention la plus courante sur un piano. Avec 20 tonnes de tension, votre piano se désaccorde petit à petit au fil du temps. Un accordage régulier au moins une fois par an permettra une meilleure stabilité de votre instrument."

"J'interviens dans un périmètre de 100km autour de Chartres"

#### Section Services (4 services)

**Harmonisation**
> "Votre piano devient trop puissant et a un son de plus en plus « métallique » ? C'est qu'il est l'heure de l'harmoniser. Avec le temps, les feutres des marteaux du piano se tassent et se marquent changeant la qualité du son de votre piano. En redonnant la forme d'origine et en « aérant » vos marteaux, votre piano retrouvera un son étincelant."
*Sur devis uniquement.*

**Réglages**
> "Votre piano devient difficile à jouer ? Vous n'arrivez plus à obtenir le même son sur chaque note ? [...] Un réglage précis entre elles permet une homogénéité entre chaque note. Avec le temps, ces interactions ne sont plus optimales et rendent le jeu plus difficile et moins fluide."
*Sur devis uniquement.*

**Réparations**
> "Des touches qui ne fonctionnent plus ? Plus de son sur certaines notes quand vous jouez ? Votre piano à surement besoin de réparation. Je suis à votre service pour les petites réparations courantes comme les plus grosses restaurations."
*Sur devis uniquement.*

**Conseils à l'achat et la vente**
> "Vous vendez votre piano ? Faites appel à un expert pour fixer le juste prix de votre piano [...] Vous avez trouvé un piano qui vous intéresse chez un particulier dans la région centre ? Je vous accompagne pour vérifier ensemble les problèmes éventuels."
*Expertise à partir de 60€ + frais de déplacements.*

---

### Page : Contact / Réservation
**URL** : https://paccord-piano.fr/contact
**Meta title** : P'accord Piano - Contact

Formulaire de réservation en 2 étapes :
1. Code postal → calcul du tarif via API ORS (OpenRouteService)
2. Redirection vers /contact avec tarif pré-rempli

**Grille tarifaire** (selon distance depuis Chartres) :
| Distance | Tarif |
|----------|-------|
| 0-10 km | 90 € |
| 10-20 km | 95 € |
| 20-30 km | 100 € |
| 30-40 km | 105 € |
| 40-50 km | 110 € |
| 50-60 km | 115 € |
| 60-100 km | 120 € |
| > 100 km | Hors périmètre |

Formulaire inclut : choix des créneaux (Lundi–Samedi, Matin/Après-midi), coordonnées client.

---

### Page : Pianos d'occasion
**URL** : https://paccord-piano.fr/pianos-doccasion
**Meta title** : Pianos d'occasion

**Proposition de valeur** :
- Révision complète (accord + harmonisation + réglage mécanique + remplacement pièces + polissage)
- Banquette incluse
- Garantie 5 ans
- Livraison offerte dans 80 km (rez-de-chaussée)
- Sur rendez-vous uniquement

#### Catalogue actuel (4 pianos)

| Modèle | Année | Origine | N° série | Prix |
|--------|-------|---------|----------|------|
| Young Chang U109 | 1988 | Corée du Sud | 142340 | 1 200 € |
| Hellas 109 | 1982 | Finlande | 67905 | 1 900 € |
| Hyundai U835 | 1993 | Corée du Sud | IME00551 | 2 500 € |
| Kawai KS-2F | 1984 | Japon | K1296903 | 4 000 € |

---

### Page : Mentions légales
**URL** : https://paccord-piano.fr/mentions-legales

- **Éditeur** : P'Accord Piano
- **RCS** : 983 922 030 (Chartres)
- **Siège** : 3 Rue du Château d'eau, 28190 MITTAINVILLIERS VERIGNY
- **Hébergeur actuel** : Webflow Inc., 398 11th Street, 2nd Floor, San Francisco, CA 94103

---

### Page : CGV
**URL** : https://paccord-piano.fr/cgv

Points clés :
- TVA non applicable (article 293 B du CGI)
- Paiement : chèque, virement, espèces (≤ 1000 € pour particuliers)
- Garantie 5 ans sur pianos d'occasion (entretien annuel obligatoire)
- Livraison rez-de-chaussée incluse, étage = prestataire externe

---

## Coordonnées complètes

| Champ | Valeur |
|-------|--------|
| Nom | Simon PACOR |
| Entreprise | P'Accord Piano |
| Activité | Technicien accordeur réparateur de pianos |
| Adresse | 3 Rue du Château d'eau, 28190 MITTAINVILLIERS VERIGNY |
| Téléphone | 06.22.26.77.83 |
| Email | paccord.piano@gmail.com |
| RCS | 983 922 030 (Chartres) |
| Zone d'intervention | 100 km autour de Chartres |
| Coordonnées GPS | lat: 48.49877507352234 / lon: 1.3101347159039247 |

---

## Assets disponibles (dossier local)

### Logos & icônes SVG
- `Logo_pacorpiano_complet_blanc.svg` — logo complet fond sombre
- `Logo_pacorpiano_embleme_blanc.svg` — emblème seul
- `Logo_pacorpiano_horizontal.svg` — logo horizontal
- `Logo_pacorpiano_textecolor.svg` — texte couleur
- `Picto_enveloppe_noire.svg` / `Picto_telephone_noir.svg`
- `Telephone_picto_blanc.svg`
- `Croix_valide_orange_ombre.svg`
- `Facebook_logo_blanc.svg` / `Instagram_logo_blanc.svg` / `Google_logo_blanc.svg`

### Images WebP (multi-résolutions : 360/478/767/991/1280/1440/1920)
- **Hero** : photo principale du site
- **L'artisan** : portrait/photo de Simon
- **Accords** : photo d'accordage
- **Services** : harmo, réglages, réparations, conseils (versions avec et sans cadre)

### Photos brutes
- 44 photos JPG dans `Photo site web/` (prises en 2023-12-20, photos terrain)

### Fichiers annexes
- `Texte site web ebauche.docx` — ébauche de contenu rédigé
- `accordeurs 27 28 61 78.xlsx` — données accordeurs par département
- `retours maquette web.xlsx` — retours sur ancienne maquette
- `variables geographiques.xlsx` — données géographiques

---

## Observations

### Points forts à conserver
- Calculateur de tarif par code postal (fonctionnalité différenciante, très concrète)
- Tarification transparente et progressive selon distance
- Double expertise : technicien + musicien (fort élément de différenciation)
- Page pianos d'occasion avec fiches détaillées (n° série, origine, prix)
- Garantie 5 ans + livraison offerte = arguments de vente solides
- Design assets déjà complets et en multi-résolutions

### Contenu manquant / à créer
- ❌ Section "L'artisan" avec biographie développée (absent sur le site actuel)
- ❌ Témoignages clients (aucun sur le site)
- ❌ FAQ (aucune)
- ❌ Meta description (vide)
- ❌ Schema.org / JSON-LD (absent)
- ❌ Open Graph tags (non vérifiés)
- ❌ Liens réseaux sociaux (pictos présents dans assets mais aucun lien)
- ❌ Page 404 personnalisée
- ❌ Politique de confidentialité distincte (mentionnée dans le formulaire mais non accessible)

### Problèmes identifiés
- Meta description absente → mauvais référencement
- Pas de Schema.org → pas de rich snippets Google
- "paccord-piano.fr" vs "www.paccord-piano.fr" → redirection à vérifier
- Faute dans CGV : "à surement besoin" (sans accent sur "sûrement")
- Mentions légales indiquent "ne collecte aucune donnée" alors qu'un formulaire est présent → à corriger

### Réseaux sociaux
Pictos disponibles : Facebook, Instagram, Google
→ Liens à récupérer auprès du client
