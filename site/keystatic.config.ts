import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'cloud' },
  cloud: { project: 'web-factory/paccord-piano' },

  singletons: {
    siteInfo: singleton({
      label: 'Informations générales',
      path: 'src/content/site-info/index',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Nom commercial', defaultValue: "P'Accord Piano" }),
        tagline: fields.text({ label: 'Slogan', defaultValue: "L'expertise au cœur de chaque note" }),
        phone: fields.text({ label: 'Téléphone', defaultValue: '06.22.26.77.83' }),
        email: fields.text({ label: 'Email', defaultValue: 'paccord.piano@gmail.com' }),
        address: fields.text({ label: 'Adresse', defaultValue: "3 Rue du Château d'eau" }),
        city: fields.text({ label: 'Ville', defaultValue: 'Mittainvilliers-Vérigny' }),
        postalCode: fields.text({ label: 'Code postal', defaultValue: '28190' }),
        region: fields.text({ label: 'Région', defaultValue: 'Eure-et-Loir' }),
        zone: fields.text({ label: "Zone d'intervention", defaultValue: '100 km autour de Chartres' }),
        facebookUrl: fields.url({ label: 'URL Facebook', defaultValue: 'https://www.facebook.com/profile.php?id=61557954886583' }),
        googleBusinessUrl: fields.url({ label: 'URL Google Business', defaultValue: 'https://share.google/NWnNwojKplE3SIv9x' }),
        siteUrl: fields.url({ label: 'URL du site', defaultValue: 'https://paccord-piano.fr' }),
      },
    }),

    hero: singleton({
      label: 'Section Hero',
      path: 'src/content/hero/index',
      format: { data: 'json' },
      schema: {
        h1: fields.text({ label: 'Titre principal (H1)', defaultValue: 'Accordeur de piano à Chartres et en Eure-et-Loir' }),
        subtitle: fields.text({ label: 'Sous-titre', multiline: true, defaultValue: "Simon PACOR — Technicien accordeur réparateur de pianos, diplômé BMA ITEMM, musicien pianiste. Intervient à domicile dans un rayon de 100 km autour de Chartres." }),
        ctaLabel: fields.text({ label: 'Bouton principal', defaultValue: "Je réserve mon accord" }),
        ctaUrl: fields.text({ label: 'URL bouton principal', defaultValue: '/contact' }),
        ctaSecondaryLabel: fields.text({ label: 'Bouton secondaire', defaultValue: 'Calculer mon tarif' }),
        ctaSecondaryUrl: fields.text({ label: 'URL bouton secondaire', defaultValue: '/contact#calculateur' }),
        badgeText: fields.text({ label: 'Badge (ex: À partir de 90 €)', defaultValue: 'À partir de 90 €' }),
      },
    }),

    about: singleton({
      label: 'Section L\'Artisan',
      path: 'src/content/about/index',
      format: { data: 'json' },
      schema: {
        sectionTitle: fields.text({ label: 'Titre de section', defaultValue: "L'Artisan" }),
        sectionSubtitle: fields.text({ label: 'Sous-titre de section', defaultValue: 'Technicien et musicien — une double expertise unique' }),
        name: fields.text({ label: 'Nom', defaultValue: 'Simon PACOR' }),
        blocks: fields.array(
          fields.object({
            title: fields.text({ label: 'Titre du bloc' }),
            text: fields.text({ label: 'Texte', multiline: true }),
          }),
          { label: 'Blocs de présentation', itemLabel: (props) => props.fields.title.value }
        ),
        stats: fields.array(
          fields.object({
            value: fields.text({ label: 'Valeur (ex: 8 ans)' }),
            label: fields.text({ label: 'Label (ex: d\'expérience)' }),
          }),
          { label: 'Chiffres clés', itemLabel: (props) => props.fields.value.value }
        ),
      },
    }),

    contact: singleton({
      label: 'Section Contact',
      path: 'src/content/contact/index',
      format: { data: 'json' },
      schema: {
        sectionTitle: fields.text({ label: 'Titre', defaultValue: 'Réserver un accord' }),
        sectionSubtitle: fields.text({ label: 'Sous-titre', defaultValue: 'Calculez votre tarif et réservez en 2 minutes' }),
        step1Title: fields.text({ label: 'Étape 1', defaultValue: 'Votre code postal' }),
        step2Title: fields.text({ label: 'Étape 2', defaultValue: 'Vos coordonnées' }),
        formSuccessUrl: fields.text({ label: 'URL page succès', defaultValue: '/merci' }),
      },
    }),
  },

  collections: {
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Titre du service' } }),
        shortDesc: fields.text({ label: 'Description courte (pour les cards)', multiline: true }),
        description: fields.text({ label: 'Description complète', multiline: true }),
        price: fields.text({ label: 'Prix (ex: À partir de 90 €)' }),
        priceNote: fields.text({ label: 'Note de prix (ex: Sur devis)' }),
        image: fields.text({ label: "Chemin de l'image (ex: /images/services/accord.webp)" }),
        imageAlt: fields.text({ label: "Texte alternatif de l'image" }),
        order: fields.integer({ label: "Ordre d'affichage", defaultValue: 0 }),
      },
    }),

    testimonials: collection({
      label: 'Témoignages',
      slugField: 'author',
      path: 'src/content/testimonials/*',
      format: { data: 'json' },
      schema: {
        author: fields.slug({ name: { label: 'Nom du client' } }),
        rating: fields.integer({ label: 'Note (1-5)', defaultValue: 5 }),
        date: fields.text({ label: 'Date (ex: Février 2026)' }),
        text: fields.text({ label: 'Témoignage', multiline: true }),
        context: fields.text({ label: 'Contexte (optionnel)', multiline: true }),
      },
    }),

    faq: collection({
      label: 'FAQ',
      slugField: 'question',
      path: 'src/content/faq/*',
      format: { data: 'json' },
      schema: {
        question: fields.slug({ name: { label: 'Question' } }),
        answer: fields.text({ label: 'Réponse', multiline: true }),
        order: fields.integer({ label: "Ordre d'affichage", defaultValue: 0 }),
      },
    }),
  },
});
