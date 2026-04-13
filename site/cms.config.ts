import type { CmsConfig } from './cms.types';

// ============================================================
// Configuration CMS — P'Accord Piano (pacorpiano)
// ============================================================

const cmsConfig: CmsConfig = {
  repo: 'mavailable/site-paccord-piano',
  branch: 'dev',
  siteName: "P'Accord Piano",

  singletons: {
    'site-info': {
      label: 'Informations generales',
      description: 'Nom, telephone, email, adresse, reseaux sociaux',
      path: 'src/content/site-info/index.json',
      fields: {
        name: { type: 'text', label: 'Nom commercial' },
        tagline: { type: 'text', label: 'Slogan' },
        phone: { type: 'text', label: 'Telephone' },
        email: { type: 'text', label: 'Email' },
        address: { type: 'text', label: 'Adresse' },
        city: { type: 'text', label: 'Ville' },
        postalCode: { type: 'text', label: 'Code postal' },
        region: { type: 'text', label: 'Region' },
        zone: { type: 'text', label: "Zone d'intervention" },
        facebookUrl: { type: 'text', label: 'URL Facebook' },
        googleBusinessUrl: { type: 'text', label: 'URL Google Business' },
        siteUrl: { type: 'text', label: 'URL du site' },
      },
    },

    hero: {
      label: 'Section Hero',
      description: "Titre principal, sous-titre, boutons d'action",
      path: 'src/content/hero/index.json',
      fields: {
        h1: { type: 'text', label: 'Titre principal (H1)' },
        subtitle: { type: 'text', label: 'Sous-titre', multiline: true },
        ctaLabel: { type: 'text', label: 'Bouton principal' },
        ctaUrl: { type: 'text', label: 'URL bouton principal' },
        ctaSecondaryLabel: { type: 'text', label: 'Bouton secondaire' },
        ctaSecondaryUrl: { type: 'text', label: 'URL bouton secondaire' },
        badgeText: { type: 'text', label: 'Badge (ex: A partir de 90 euros)' },
      },
    },

    about: {
      label: "L'Artisan",
      description: 'Presentation de Simon PACOR',
      path: 'src/content/about/index.json',
      fields: {
        sectionTitle: { type: 'text', label: 'Titre de section' },
        sectionSubtitle: { type: 'text', label: 'Sous-titre de section' },
        name: { type: 'text', label: 'Nom' },
        blocks: {
          type: 'array',
          label: 'Blocs de presentation',
          fields: {
            title: { type: 'text', label: 'Titre du bloc' },
            text: { type: 'text', label: 'Texte', multiline: true },
          },
        },
        stats: {
          type: 'array',
          label: 'Chiffres cles',
          fields: {
            value: { type: 'text', label: 'Valeur (ex: 8 ans)' },
            label: { type: 'text', label: "Label (ex: d'experience)" },
          },
        },
      },
    },

    contact: {
      label: 'Section Contact',
      description: 'Titres et configuration du formulaire',
      path: 'src/content/contact/index.json',
      fields: {
        sectionTitle: { type: 'text', label: 'Titre' },
        sectionSubtitle: { type: 'text', label: 'Sous-titre' },
        step1Title: { type: 'text', label: 'Etape 1' },
        step2Title: { type: 'text', label: 'Etape 2' },
        formSuccessUrl: { type: 'text', label: 'URL page succes' },
        web3formsKey: { type: 'text', label: 'Cle Web3Forms (formulaire)', description: 'Collez votre cle pour recevoir vos formulaires directement. Guide : marcm.fr/aide/web3forms' },
      },
    },

    seo: {
      label: 'SEO / Referencement',
      description: 'Nom du site et image de partage reseaux sociaux',
      path: 'src/content/seo/index.json',
      fields: {
        global: {
          type: 'object',
          label: 'Parametres globaux',
          fields: {
            siteName: { type: 'text', label: 'Nom du site (onglets navigateur)' },
            separator: { type: 'text', label: 'Separateur titre (ex: —)' },
            defaultOgImage: { type: 'image', label: 'Image de partage par defaut' },
          },
        },
      },
    },
  },

  collections: {
    services: {
      label: 'Services',
      description: 'Les prestations proposees',
      path: 'src/content/services',
      slugField: 'title',
      fields: {
        title: { type: 'text', label: 'Titre du service' },
        shortDesc: { type: 'text', label: 'Description courte', multiline: true },
        description: { type: 'text', label: 'Description complete', multiline: true },
        price: { type: 'text', label: 'Prix (ex: A partir de 90 euros)' },
        priceNote: { type: 'text', label: 'Note de prix' },
        image: { type: 'image', label: 'Image' },
        imageAlt: { type: 'text', label: "Texte alternatif de l'image" },
        order: { type: 'number', label: "Ordre d'affichage" },
      },
    },

    testimonials: {
      label: 'Temoignages',
      description: 'Avis des clients',
      path: 'src/content/testimonials',
      slugField: 'author',
      fields: {
        author: { type: 'text', label: 'Nom du client' },
        rating: { type: 'number', label: 'Note (1-5)' },
        date: { type: 'text', label: 'Date (ex: Fevrier 2026)' },
        text: { type: 'text', label: 'Temoignage', multiline: true },
        context: { type: 'text', label: 'Contexte (optionnel)', multiline: true },
      },
    },

    faq: {
      label: 'FAQ',
      description: 'Questions frequentes',
      path: 'src/content/faq',
      slugField: 'question',
      fields: {
        question: { type: 'text', label: 'Question' },
        answer: { type: 'text', label: 'Reponse', multiline: true },
        order: { type: 'number', label: "Ordre d'affichage" },
      },
    },

    pianos: {
      label: "Pianos d'occasion",
      description: 'Catalogue des pianos a vendre',
      path: 'src/content/pianos',
      slugField: 'modele',
      fields: {
        marque: { type: 'text', label: 'Marque' },
        modele: { type: 'text', label: 'Modele' },
        annee: { type: 'number', label: 'Annee de fabrication' },
        origine: { type: 'text', label: "Pays d'origine" },
        hauteur: { type: 'text', label: 'Hauteur (ex: 109 cm)' },
        serie: { type: 'text', label: 'Numero de serie' },
        prix: { type: 'number', label: 'Prix (euros)' },
        disponible: { type: 'select', label: 'Disponible', options: ['true', 'false'] },
        description: { type: 'text', label: 'Description complete', multiline: true },
        image: { type: 'image', label: 'Photo du piano' },
        imageAlt: { type: 'text', label: "Description de l'image" },
        order: { type: 'number', label: "Ordre d'affichage" },
      },
    },
  },
};

export default cmsConfig;
