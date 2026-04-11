/**
 * Schema.org helpers — doctrine C1 wf-00-cms §7 + schemas centralises.
 *
 * Specifique pacorpiano (P'Accord Piano) : Simon PACOR, technicien accordeur
 * reparateur de pianos a Chartres. Pattern riche avec @id linked-data :
 *  - ProfessionalService #business (avec founder + hasCredential + hasOfferCatalog)
 *  - Person #simon-pacor (avec worksFor #business)
 *  - WebSite #website (avec publisher #business)
 *  - FAQPage
 *
 * Pas de CMS sur ce projet → tout le contenu des schemas est hardcode
 * dans ces helpers (sera migrable plus tard quand pacorpiano aura un CMS).
 *
 * aggregateRating 5/13 pre-C1 : OMIS (pas de source verifiable documentee).
 * A reinjecter via business.rating.platform quand Simon aura un GBP actif
 * avec 13+ avis, ou via enrichissement testimonials.
 */

export interface Breadcrumb {
  name: string;
  url: string;
}

const SITE_URL = 'https://paccord-piano.fr';
const BUSINESS_ID = `${SITE_URL}/#business`;
const PERSON_ID = `${SITE_URL}/#simon-pacor`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// ============================================================
// getProfessionalServiceSchema — P'Accord Piano avec founder + credentials
// ============================================================

export function getProfessionalServiceSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: "P'Accord Piano",
    legalName: "P'Accord Piano",
    description:
      "Technicien accordeur réparateur de pianos, diplômé du Brevet des Métiers d'Art à l'ITEMM. Simon PACOR intervient à domicile dans un rayon de 100 km autour de Chartres pour l'accord, l'harmonisation, le réglage, la réparation et le conseil à l'achat de pianos acoustiques.",
    image: `${SITE_URL}/images/og-image.jpg`,
    url: SITE_URL,
    telephone: '+33622267783',
    email: 'paccord.piano@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: "3 Rue du Château d'eau",
      addressLocality: 'Mittainvilliers-Vérigny',
      postalCode: '28190',
      addressRegion: 'Eure-et-Loir',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.49877507352234,
      longitude: 1.3101347159039247,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Eure-et-Loir (28)' },
      { '@type': 'AdministrativeArea', name: 'Yvelines (78)' },
      { '@type': 'AdministrativeArea', name: 'Eure (27)' },
      { '@type': 'AdministrativeArea', name: 'Orne (61)' },
      { '@type': 'AdministrativeArea', name: 'Paris (75)' },
    ],
    priceRange: '90€–120€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00',
      },
    ],
    founder: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Simon PACOR',
      jobTitle: 'Technicien accordeur réparateur de pianos',
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: "Brevet des Métiers d'Art (BMA) — Facture instrumentale",
          recognizedBy: {
            '@type': 'Organization',
            name: 'ITEMM — Institut Technologique Européen des Métiers de la Musique',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'diploma',
          name: 'Diplôme de Conservatoire — Piano',
          recognizedBy: { '@type': 'Organization', name: 'Conservatoire de Nantes' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'diploma',
          name: 'Diplôme de Conservatoire — Piano',
          recognizedBy: { '@type': 'Organization', name: 'Conservatoire de Metz' },
        },
      ],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: "Prestations P'Accord Piano",
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Accord de piano',
            description: 'Accordage de pianos droits et à queue à domicile.',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 90,
            maxPrice: 120,
            priceCurrency: 'EUR',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Harmonisation de piano',
            description:
              'Traitement des marteaux pour restituer un timbre chaud et équilibré.',
          },
          priceSpecification: { '@type': 'PriceSpecification', description: 'Sur devis' },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Réglage des mécaniques de piano',
            description:
              'Réglage complet pour retrouver homogénéité et réactivité du clavier.',
          },
          priceSpecification: { '@type': 'PriceSpecification', description: 'Sur devis' },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Réparation et restauration de piano',
            description:
              'Petites réparations et restaurations complètes de pianos acoustiques.',
          },
          priceSpecification: { '@type': 'PriceSpecification', description: 'Sur devis' },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: "Conseil à l'achat et à la vente de piano",
            description: "Expertise avant l'achat ou la vente d'un piano d'occasion.",
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 60,
            priceCurrency: 'EUR',
          },
        },
      ],
    },
    // aggregateRating OMIS (doctrine C1 — 5/13 hardcoded sans source verifiable)
    sameAs: [
      'https://www.facebook.com/profile.php?id=61557954886583',
      'https://share.google/NWnNwojKplE3SIv9x',
    ],
  };
}

// ============================================================
// getPersonSchema — Simon PACOR (avec worksFor @id #business)
// ============================================================

export function getPersonSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Simon PACOR',
    givenName: 'Simon',
    familyName: 'PACOR',
    jobTitle: 'Technicien accordeur réparateur de pianos',
    description:
      "Diplômé du BMA à l'ITEMM et des conservatoires de Nantes et Metz, Simon PACOR allie expertise technique et sensibilité musicale pour accorder et restaurer les pianos acoustiques en Eure-et-Loir et en région parisienne. 8 ans d'expérience.",
    url: SITE_URL,
    email: 'paccord.piano@gmail.com',
    telephone: '+33622267783',
    worksFor: { '@id': BUSINESS_ID },
    knowsAbout: [
      'Accord de piano',
      'Harmonisation de piano',
      'Réglage mécanique de piano',
      'Restauration de piano',
      'Facture instrumentale',
      'Pianos droits',
      'Pianos à queue',
    ],
    sameAs: ['https://www.facebook.com/profile.php?id=61557954886583'],
  };
}

// ============================================================
// getWebsiteSchema — WebSite (avec publisher @id #business)
// ============================================================

export function getWebsiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: "P'Accord Piano",
    url: SITE_URL,
    description:
      "Site officiel de P'Accord Piano — Simon PACOR, technicien accordeur réparateur de pianos diplômé BMA ITEMM, intervenant à domicile à Chartres et dans un rayon de 100 km.",
    inLanguage: 'fr-FR',
    publisher: { '@id': BUSINESS_ID },
  };
}

// ============================================================
// getFAQPageSchema — FAQPage (8 questions hardcoded, pas de CMS)
// ============================================================

export function getFAQPageSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "À quelle fréquence faut-il accorder son piano ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un piano s'accorde idéalement une à deux fois par an pour un usage régulier. Si l'instrument n'a pas été accordé depuis plusieurs années, une ou deux remises à hauteur préalables seront nécessaires avant l'accord définitif. Un entretien régulier garantit une meilleure stabilité dans le temps et préserve la mécanique.",
        },
      },
      {
        '@type': 'Question',
        name: "Quel est le tarif pour un accord de piano ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le tarif de base commence à 90 € pour un déplacement dans un rayon de 10 km autour de Chartres, et évolue progressivement selon la distance : 95 € jusqu'à 20 km, 100 € jusqu'à 30 km, et jusqu'à 120 € pour 60 à 100 km. Les frais de déplacement sont inclus.",
        },
      },
      {
        '@type': 'Question',
        name: "Venez-vous en dehors de Chartres ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, Simon PACOR intervient dans tout l'Eure-et-Loir (28) ainsi que dans les Yvelines (78), l'Eure (27), l'Orne (61) et jusqu'à Paris (75), dans un rayon de 100 km autour de Chartres.",
        },
      },
      {
        '@type': 'Question',
        name: "Combien de temps dure un accord de piano ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un accord standard dure entre 1h et 1h30 selon l'état du piano. Si l'instrument n'a pas été accordé depuis longtemps, comptez jusqu'à 2 heures.",
        },
      },
      {
        '@type': 'Question',
        name: "Mon piano n'a pas été accordé depuis des années, est-ce encore possible ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Dans la grande majorité des cas, oui. Un piano laissé longtemps sans entretien peut nécessiter plusieurs remises à hauteur progressives avant de retrouver un accord stable.",
        },
      },
      {
        '@type': 'Question',
        name: "Proposez-vous des devis gratuits pour les réparations ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. Pour toutes les prestations hors accord, Simon établit un devis gratuit après diagnostic. Aucun travail n'est engagé sans votre accord préalable.",
        },
      },
      {
        '@type': 'Question',
        name: "Accordez-vous les pianos numériques et les claviers électroniques ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Simon PACOR est spécialisé dans les pianos acoustiques (droits et à queue) uniquement.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment prendre rendez-vous avec Simon PACOR ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La façon la plus simple est de passer par la page de réservation en ligne : entrez votre code postal, votre tarif s'affiche immédiatement. Vous pouvez aussi appeler le 06.22.26.77.83 ou écrire à paccord.piano@gmail.com.",
        },
      },
    ],
  };
}

// ============================================================
// getBreadcrumbSchema — BreadcrumbList (pur)
// Utilise par 6 pages : contact, mentions-legales, cgv, politique,
// pianos-doccasion, et home.
// ============================================================

export function getBreadcrumbSchema(items: Breadcrumb[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

// ============================================================
// getSpeakableSchema — Speakable WebPage (pur)
// ============================================================

export function getSpeakableSchema(
  title: string,
  description: string,
  url: string
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    inLanguage: 'fr-FR',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.intro-text', '.faq-answer'],
    },
  };
}
