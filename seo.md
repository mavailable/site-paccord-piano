# SEO & GEO — P'Accord Piano

**Date** : 2026-03-21
**Domaine prévu** : https://paccord-piano.fr
**Basé sur** : brief.md + contenu.md

---

## Schema.org — ProfessionalService (schéma principal)

> À placer dans le `<head>` de toutes les pages via BaseLayout.astro

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://paccord-piano.fr/#business",
  "name": "P'Accord Piano",
  "legalName": "P'Accord Piano",
  "description": "Technicien accordeur réparateur de pianos, diplômé du Brevet des Métiers d'Art à l'ITEMM. Simon PACOR intervient à domicile dans un rayon de 100 km autour de Chartres pour l'accord, l'harmonisation, le réglage, la réparation et le conseil à l'achat de pianos acoustiques.",
  "image": "https://paccord-piano.fr/images/og-image.jpg",
  "url": "https://paccord-piano.fr",
  "telephone": "+33622267783",
  "email": "paccord.piano@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3 Rue du Château d'eau",
    "addressLocality": "Mittainvilliers-Vérigny",
    "postalCode": "28190",
    "addressRegion": "Eure-et-Loir",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.49877507352234,
    "longitude": 1.3101347159039247
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Eure-et-Loir (28)" },
    { "@type": "AdministrativeArea", "name": "Yvelines (78)" },
    { "@type": "AdministrativeArea", "name": "Eure (27)" },
    { "@type": "AdministrativeArea", "name": "Orne (61)" },
    { "@type": "AdministrativeArea", "name": "Paris (75)" }
  ],
  "priceRange": "90€–120€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "08:00",
      "closes": "19:00",
      "description": "Sur rendez-vous uniquement"
    }
  ],
  "founder": {
    "@type": "Person",
    "@id": "https://paccord-piano.fr/#simon-pacor",
    "name": "Simon PACOR",
    "jobTitle": "Technicien accordeur réparateur de pianos",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Brevet des Métiers d'Art (BMA) — Facture instrumentale",
        "educationalLevel": "BMA",
        "recognizedBy": {
          "@type": "Organization",
          "name": "ITEMM — Institut Technologique Européen des Métiers de la Musique"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "diploma",
        "name": "Diplôme de Conservatoire — Piano",
        "recognizedBy": { "@type": "Organization", "name": "Conservatoire de Nantes" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "diploma",
        "name": "Diplôme de Conservatoire — Piano",
        "recognizedBy": { "@type": "Organization", "name": "Conservatoire de Metz" }
      }
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Prestations P'Accord Piano",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accord de piano",
          "description": "Accordage de pianos droits et à queue à domicile. Remise à hauteur incluse si nécessaire."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": 90,
          "maxPrice": 120,
          "priceCurrency": "EUR"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Harmonisation de piano",
          "description": "Traitement des marteaux pour restituer un timbre chaud et équilibré."
        },
        "priceSpecification": { "@type": "PriceSpecification", "description": "Sur devis" }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Réglage des mécaniques de piano",
          "description": "Réglage complet de la mécanique pour retrouver homogénéité et réactivité du clavier."
        },
        "priceSpecification": { "@type": "PriceSpecification", "description": "Sur devis" }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Réparation et restauration de piano",
          "description": "Petites réparations du quotidien et restaurations complètes de pianos acoustiques anciens."
        },
        "priceSpecification": { "@type": "PriceSpecification", "description": "Sur devis" }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Conseil à l'achat et à la vente de piano",
          "description": "Expertise et accompagnement avant l'achat ou la vente d'un piano d'occasion chez un particulier."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": 60,
          "priceCurrency": "EUR",
          "description": "À partir de 60 € + frais de déplacement"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "13",
    "reviewCount": "13"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61557954886583",
    "https://share.google/NWnNwojKplE3SIv9x"
  ]
}
```

---

## Schema.org — Person (Simon PACOR)

> À placer dans le `<head>` de toutes les pages via BaseLayout.astro (en complément du schéma business)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://paccord-piano.fr/#simon-pacor",
  "name": "Simon PACOR",
  "givenName": "Simon",
  "familyName": "PACOR",
  "jobTitle": "Technicien accordeur réparateur de pianos",
  "description": "Diplômé du BMA à l'ITEMM et des conservatoires de Nantes et Metz, Simon PACOR allie expertise technique et sensibilité musicale pour accorder et restaurer les pianos acoustiques en Eure-et-Loir et en région parisienne. 8 ans d'expérience.",
  "url": "https://paccord-piano.fr",
  "email": "paccord.piano@gmail.com",
  "telephone": "+33622267783",
  "worksFor": { "@id": "https://paccord-piano.fr/#business" },
  "knowsAbout": [
    "Accord de piano",
    "Harmonisation de piano",
    "Réglage mécanique de piano",
    "Restauration de piano",
    "Facture instrumentale",
    "Pianos droits",
    "Pianos à queue",
    "Grotrian Steinway",
    "Kawai",
    "Young Chang"
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61557954886583"
  ]
}
```

---

## Schema.org — FAQPage

> À placer dans le `<head>` de la page d'accueil uniquement

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "À quelle fréquence faut-il accorder son piano ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un piano s'accorde idéalement une à deux fois par an pour un usage régulier. Si l'instrument n'a pas été accordé depuis plusieurs années, une ou deux remises à hauteur préalables seront nécessaires avant l'accord définitif. Un entretien régulier garantit une meilleure stabilité dans le temps et préserve la mécanique."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le tarif pour un accord de piano ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le tarif de base commence à 90 € pour un déplacement dans un rayon de 10 km autour de Chartres, et évolue progressivement selon la distance : 95 € jusqu'à 20 km, 100 € jusqu'à 30 km, et jusqu'à 120 € pour 60 à 100 km. Les frais de déplacement sont inclus dans le tarif. Vous pouvez calculer votre tarif exact en entrant votre code postal sur la page de réservation."
      }
    },
    {
      "@type": "Question",
      "name": "Venez-vous en dehors de Chartres ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, Simon PACOR intervient dans tout l'Eure-et-Loir (28) ainsi que dans les départements limitrophes : Yvelines (78), Eure (27), Orne (61) et jusqu'à Paris (75), dans un rayon total de 100 km autour de Chartres. Les frais de déplacement sont inclus dans le tarif affiché."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure un accord de piano ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un accord standard dure entre 1h et 1h30 selon l'état du piano. Si l'instrument n'a pas été accordé depuis longtemps et nécessite une remise à hauteur préalable, comptez jusqu'à 2 heures. Simon travaille sans précipitation : la qualité du résultat prime sur la rapidité."
      }
    },
    {
      "@type": "Question",
      "name": "Mon piano n'a pas été accordé depuis des années, est-ce encore possible ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans la grande majorité des cas, oui. Un piano laissé longtemps sans entretien peut nécessiter plusieurs remises à hauteur progressives avant de retrouver un accord stable. Simon évalue la situation dès l'arrivée et vous explique les étapes nécessaires avant de commencer."
      }
    },
    {
      "@type": "Question",
      "name": "Proposez-vous des devis gratuits pour les réparations ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Pour toutes les prestations hors accord (harmonisation, réglage, réparation, conseil à l'achat), Simon établit un devis gratuit après diagnostic de l'instrument. Aucun travail n'est engagé sans votre accord préalable et sans devis signé."
      }
    },
    {
      "@type": "Question",
      "name": "Accordez-vous les pianos numériques et les claviers électroniques ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Simon PACOR est spécialisé dans les pianos acoustiques (droits et à queue) uniquement. Les instruments électroniques ou hybrides nécessitent une maintenance électronique qui relève d'autres compétences."
      }
    },
    {
      "@type": "Question",
      "name": "Comment prendre rendez-vous avec Simon PACOR ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La façon la plus simple est de passer par la page de réservation en ligne : entrez votre code postal, votre tarif s'affiche immédiatement, puis vous sélectionnez vos disponibilités et laissez vos coordonnées. Simon vous recontacte sous 48h. Vous pouvez aussi l'appeler directement au 06.22.26.77.83 ou lui écrire à paccord.piano@gmail.com."
      }
    }
  ]
}
```

---

## Schema.org — WebSite

> À placer dans le `<head>` de la page d'accueil

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://paccord-piano.fr/#website",
  "name": "P'Accord Piano",
  "url": "https://paccord-piano.fr",
  "description": "Site officiel de P'Accord Piano — Simon PACOR, technicien accordeur réparateur de pianos diplômé BMA ITEMM, intervenant à domicile à Chartres et dans un rayon de 100 km.",
  "inLanguage": "fr-FR",
  "publisher": { "@id": "https://paccord-piano.fr/#business" }
}
```

---

## Schema.org — BreadcrumbList (template par page)

> À placer dans le `<head>` de chaque page interne

### Page Contact (`/contact`)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paccord-piano.fr" },
    { "@type": "ListItem", "position": 2, "name": "Réserver un accord", "item": "https://paccord-piano.fr/contact" }
  ]
}
```

### Page Pianos d'occasion (`/pianos-doccasion`)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paccord-piano.fr" },
    { "@type": "ListItem", "position": 2, "name": "Pianos d'occasion", "item": "https://paccord-piano.fr/pianos-doccasion" }
  ]
}
```

### Pages légales (`/mentions-legales`, `/cgv`, `/politique-de-confidentialite`)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paccord-piano.fr" },
    { "@type": "ListItem", "position": 2, "name": "[Nom page]", "item": "https://paccord-piano.fr/[slug]" }
  ]
}
```

---

## Schema.org — ItemList (Pianos d'occasion)

> À placer dans le `<head>` de `/pianos-doccasion` uniquement

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Pianos d'occasion révisés — P'Accord Piano",
  "description": "Sélection de pianos droits d'occasion entièrement restaurés, garantis 5 ans, avec banquette incluse.",
  "numberOfItems": 4,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Piano droit Young Chang U109",
        "description": "Piano droit 109 cm, fabriqué en Corée du Sud (1988). Entièrement révisé. Idéal débutants et intermédiaires.",
        "brand": { "@type": "Brand", "name": "Young Chang" },
        "offers": {
          "@type": "Offer",
          "price": "1200",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": "https://paccord-piano.fr/#business" }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Piano droit Hellas 109",
        "description": "Piano droit 109 cm, fabriqué en Finlande (1982). Sonorité chaleureuse. Entièrement révisé.",
        "brand": { "@type": "Brand", "name": "Hellas" },
        "offers": {
          "@type": "Offer",
          "price": "1900",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": "https://paccord-piano.fr/#business" }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Piano droit Hyundai U835",
        "description": "Piano droit 121 cm, fabriqué en Corée du Sud (1993). Sonorité riche. Entièrement révisé.",
        "brand": { "@type": "Brand", "name": "Hyundai" },
        "offers": {
          "@type": "Offer",
          "price": "2500",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": "https://paccord-piano.fr/#business" }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Product",
        "name": "Piano droit Kawai KS-2F",
        "description": "Piano droit 125 cm, fabriqué au Japon (1984). Grande marque japonaise, acoustique de qualité. Entièrement révisé.",
        "brand": { "@type": "Brand", "name": "Kawai" },
        "offers": {
          "@type": "Offer",
          "price": "4000",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": "https://paccord-piano.fr/#business" }
        }
      }
    }
  ]
}
```

---

## Open Graph — par page

### Page d'accueil (`/`)
```html
<!-- Open Graph -->
<meta property="og:title" content="Accordeur de piano à Chartres | Simon PACOR — P'Accord Piano" />
<meta property="og:description" content="Technicien accordeur réparateur de pianos, diplômé BMA ITEMM. Intervient à domicile à Chartres et dans un rayon de 100 km. À partir de 90 €. Devis gratuit." />
<meta property="og:image" content="https://paccord-piano.fr/images/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://paccord-piano.fr" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:site_name" content="P'Accord Piano" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Accordeur de piano à Chartres | Simon PACOR — P'Accord Piano" />
<meta name="twitter:description" content="Technicien accordeur réparateur de pianos, diplômé BMA ITEMM. Intervient à domicile à Chartres et dans un rayon de 100 km. À partir de 90 €. Devis gratuit." />
<meta name="twitter:image" content="https://paccord-piano.fr/images/og-image.jpg" />

<!-- Canonical -->
<link rel="canonical" href="https://paccord-piano.fr" />
```

### Page Contact (`/contact`)
```html
<meta property="og:title" content="Réserver un accord de piano | P'Accord Piano — Chartres" />
<meta property="og:description" content="Calculez votre tarif en entrant votre code postal et réservez directement en ligne. Réponse sous 48h. Déplacements en Eure-et-Loir, Île-de-France et alentours." />
<meta property="og:image" content="https://paccord-piano.fr/images/og-image.jpg" />
<meta property="og:url" content="https://paccord-piano.fr/contact" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:site_name" content="P'Accord Piano" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Réserver un accord de piano | P'Accord Piano — Chartres" />
<meta name="twitter:description" content="Calculez votre tarif en entrant votre code postal et réservez directement en ligne. Réponse sous 48h." />
<meta name="twitter:image" content="https://paccord-piano.fr/images/og-image.jpg" />
<link rel="canonical" href="https://paccord-piano.fr/contact" />
```

### Page Pianos d'occasion (`/pianos-doccasion`)
```html
<meta property="og:title" content="Pianos d'occasion révisés à Chartres | P'Accord Piano" />
<meta property="og:description" content="Pianos droits d'occasion entièrement restaurés, garantis 5 ans, banquette incluse, livraison offerte à 80 km. Sur rendez-vous. Dès 1 200 €." />
<meta property="og:image" content="https://paccord-piano.fr/images/og-pianos.jpg" />
<meta property="og:url" content="https://paccord-piano.fr/pianos-doccasion" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:site_name" content="P'Accord Piano" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Pianos d'occasion révisés à Chartres | P'Accord Piano" />
<meta name="twitter:description" content="Pianos droits d'occasion entièrement restaurés, garantis 5 ans, banquette incluse. Dès 1 200 €." />
<meta name="twitter:image" content="https://paccord-piano.fr/images/og-pianos.jpg" />
<link rel="canonical" href="https://paccord-piano.fr/pianos-doccasion" />
```

### Pages légales (mentions légales, CGV, politique confidentialité)
```html
<!-- Mentions légales -->
<meta property="og:title" content="Mentions légales | P'Accord Piano" />
<meta property="og:description" content="Mentions légales du site paccord-piano.fr — P'Accord Piano, technicien accordeur de pianos à Chartres, Eure-et-Loir." />
<meta property="og:url" content="https://paccord-piano.fr/mentions-legales" />
<meta property="og:type" content="website" />
<meta name="robots" content="noindex, follow" />
<link rel="canonical" href="https://paccord-piano.fr/mentions-legales" />
```

> ⚠️ Pages légales : ajouter `<meta name="robots" content="noindex, follow" />` pour éviter leur indexation.

---

## robots.txt

```
User-agent: *
Allow: /
Disallow: /merci

# Autorisation explicite des bots IA
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://paccord-piano.fr/sitemap-index.xml
```

---

## llms.txt

> À placer à la racine : `https://paccord-piano.fr/llms.txt`

```markdown
# P'Accord Piano — Accordeur de piano à Chartres (Eure-et-Loir)

> Simon PACOR est technicien accordeur réparateur de pianos, diplômé du Brevet des Métiers d'Art (BMA) à l'ITEMM (Institut Technologique Européen des Métiers de la Musique) et des conservatoires de Nantes et de Metz. Il intervient à domicile dans un rayon de 100 km autour de Chartres (Eure-et-Loir, 28).
> Musicien et pianiste avant tout, Simon combine 8 ans d'expérience terrain avec une sensibilité musicale rare chez les techniciens. Il propose l'accord, l'harmonisation, le réglage des mécaniques, la réparation, la restauration et le conseil à l'achat ou à la vente de pianos acoustiques. Note Google : 5/5 (13 avis).
> Interventions sur rendez-vous, du lundi au samedi.

## Pages principales

- [Accueil](https://paccord-piano.fr) : Présentation de Simon PACOR, ses services et son expertise d'accordeur de piano à Chartres.
- [Réserver un accord](https://paccord-piano.fr/contact) : Formulaire de réservation avec calculateur de tarif par code postal (API OpenRouteService). Tarif à partir de 90 €.
- [Pianos d'occasion](https://paccord-piano.fr/pianos-doccasion) : Catalogue de pianos droits d'occasion entièrement révisés, garantis 5 ans. Dès 1 200 €.
- [Mentions légales](https://paccord-piano.fr/mentions-legales) : Informations légales de P'Accord Piano.
- [CGV](https://paccord-piano.fr/cgv) : Conditions générales de vente.

## Informations clés

- **Nom** : P'Accord Piano
- **Dirigeant** : Simon PACOR
- **Métier** : Technicien accordeur réparateur de pianos
- **Diplôme** : BMA — ITEMM (Le Mans) + Conservatoires de Nantes et Metz
- **Expérience** : 8 ans
- **Téléphone** : 06.22.26.77.83
- **Email** : paccord.piano@gmail.com
- **Adresse** : 3 Rue du Château d'eau, 28190 Mittainvilliers-Vérigny
- **Zone d'intervention** : 100 km autour de Chartres (Eure-et-Loir 28, Yvelines 78, Eure 27, Orne 61, Paris 75)
- **Tarif accord** : 90 € (0–10 km) à 120 € (60–100 km), frais de déplacement inclus
- **Horaires** : Sur rendez-vous, lundi–samedi
- **Note Google** : 5/5 (13 avis)
- **Facebook** : https://www.facebook.com/profile.php?id=61557954886583
- **RCS** : 983 922 030 (Chartres)
- **TVA** : Non applicable — article 293 B du CGI

## Services détaillés

| Service | Tarif | Description |
|---------|-------|-------------|
| Accord de piano | 90–120 € | Accordage pianos droits et à queue. Tarif progressif selon distance. |
| Harmonisation | Sur devis | Traitement des marteaux pour restaurer le timbre d'origine. |
| Réglage des mécaniques | Sur devis | Optimisation de la mécanique pour un toucher homogène. |
| Réparations / restauration | Sur devis | Des petites réparations aux restaurations complètes. |
| Conseil achat/vente | Dès 60 € | Expertise avant achat ou vente d'un piano d'occasion. |

## Pianos d'occasion disponibles (au 2026-03-21)

| Modèle | Année | Origine | Prix |
|--------|-------|---------|------|
| Young Chang U109 | 1988 | Corée du Sud | 1 200 € |
| Hellas 109 | 1982 | Finlande | 1 900 € |
| Hyundai U835 | 1993 | Corée du Sud | 2 500 € |
| Kawai KS-2F | 1984 | Japon | 4 000 € |

Tous révisés, garantis 5 ans, banquette incluse, livraison offerte à 80 km (rez-de-chaussée).
```

---

## Image OG — Spécifications

### og-image.jpg (image principale — toutes les pages)
- **Dimensions** : 1200 × 630 px
- **Format** : JPG (qualité 85+)
- **Poids max** : 300 Ko
- **Contenu suggéré** :
  - Fond : photo hero piano (clavier en gros plan, sombre) — `1280_hero.webp`
  - Logo : `Logo_pacorpiano_complet_blanc.svg` centré ou à gauche
  - Texte : « P'Accord Piano » (Playfair Display, blanc, 64px) + « Accordeur de piano à Chartres » (DM Sans, gris clair, 32px)
  - Aucun texte dans les 50 px de bordure
  - Vérifier lisibilité en miniature (200 × 105 px)

### og-pianos.jpg (page Pianos d'occasion)
- **Dimensions** : 1200 × 630 px
- **Format** : JPG
- **Contenu suggéré** : photo d'un piano en cours de restauration + texte « Pianos d'occasion révisés · Garantie 5 ans · Chartres »

---

## Meta tags — récapitulatif

| Page | Title (car.) | Description (car.) |
|------|-------------|-------------------|
| `/` | Accordeur de piano à Chartres \| Simon PACOR — P'Accord Piano *(53)* | Technicien accordeur réparateur de pianos, diplômé BMA ITEMM. Intervient à domicile à Chartres et dans un rayon de 100 km. À partir de 90 €. Devis gratuit. *(158)* |
| `/contact` | Réserver un accord de piano \| P'Accord Piano — Chartres *(54)* | Calculez votre tarif en entrant votre code postal et réservez directement en ligne. Réponse sous 48h. Déplacements en Eure-et-Loir, Île-de-France et alentours. *(159)* |
| `/pianos-doccasion` | Pianos d'occasion révisés à Chartres \| P'Accord Piano *(51)* | Pianos droits d'occasion entièrement restaurés, garantis 5 ans, banquette incluse, livraison offerte à 80 km. Sur rendez-vous. Dès 1 200 €. *(152)* |
| `/mentions-legales` | Mentions légales \| P'Accord Piano *(30)* | Mentions légales du site paccord-piano.fr — P'Accord Piano, technicien accordeur de pianos à Chartres (28), Eure-et-Loir. *(129)* |
| `/cgv` | Conditions Générales de Vente \| P'Accord Piano *(41)* | Conditions générales de vente de P'Accord Piano — prestations d'accordage et vente de pianos d'occasion à Chartres. *(127)* |
| `/politique-de-confidentialite` | Politique de confidentialité \| P'Accord Piano *(45)* | Politique de confidentialité et traitement des données personnelles — P'Accord Piano, Chartres. *(98)* |

---

## Configuration sitemap Astro

> À mettre dans `astro.config.mjs` (sera appliqué en wf-05)

```js
// astro.config.mjs
sitemap: {
  filter: (page) =>
    !page.includes('/merci') &&
    !page.includes('/404'),
  changefreq: 'monthly',
  priority: 0.7,
  lastmod: new Date(),
  customPages: ['https://paccord-piano.fr'],
}
```

---

## Checklist de validation

- [x] JSON-LD syntaxiquement correct (vérifié par script Python)
- [x] Type Schema.org précis : `ProfessionalService` + `Person` (pas juste `LocalBusiness`)
- [x] `aggregateRating` intégré (13 avis 5/5 → rich snippets Google)
- [x] `hasOfferCatalog` avec tous les services et prix
- [x] `hasCredential` pour les diplômes BMA + Conservatoires
- [x] FAQPage avec 8 Q&R complètes
- [x] ItemList pianos d'occasion avec `Product` + `Offer`
- [x] WebSite + BreadcrumbList templates
- [x] OG tags sur toutes les pages (titre, description, image, url, locale)
- [x] Twitter Card `summary_large_image` sur toutes les pages
- [x] `canonical` sur toutes les pages
- [x] `noindex` sur pages légales
- [x] robots.txt autorise GPTBot, ClaudeBot, PerplexityBot
- [x] llms.txt complet : activité, pages, coordonnées, tarifs, pianos
- [x] Meta titles uniques, 30–60 car. par page
- [x] Meta descriptions uniques, 98–159 car. par page
- [x] Specs image OG définies (1200×630, < 300 Ko)
- [ ] Validation sur Google Rich Results Test (à faire après déploiement)
