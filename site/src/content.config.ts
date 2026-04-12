// content.config.ts
// Astro Content Collections — mirrors cms.config.ts for CMS maison
// JSON flat files only — format: { data: 'json' }

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── Singletons ────────────────────────────────────────────────────────────

const siteInfo = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/site-info' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    phone: z.string(),
    email: z.string(),
    address: z.string(),
    city: z.string(),
    postalCode: z.string(),
    region: z.string(),
    zone: z.string(),
    facebookUrl: z.string().optional(),
    googleBusinessUrl: z.string().optional(),
    siteUrl: z.string().optional(),
  }),
});

const hero = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/hero' }),
  schema: z.object({
    h1: z.string(),
    subtitle: z.string(),
    ctaLabel: z.string(),
    ctaUrl: z.string(),
    ctaSecondaryLabel: z.string().optional(),
    ctaSecondaryUrl: z.string().optional(),
    badgeText: z.string().optional(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/about' }),
  schema: z.object({
    sectionTitle: z.string(),
    sectionSubtitle: z.string(),
    name: z.string(),
    blocks: z.array(z.object({
      title: z.string(),
      text: z.string(),
    })),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })),
  }),
});

const contact = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/contact' }),
  schema: z.object({
    sectionTitle: z.string(),
    sectionSubtitle: z.string(),
    step1Title: z.string(),
    step2Title: z.string(),
    formSuccessUrl: z.string(),
  }),
});

// ── Collections ───────────────────────────────────────────────────────────

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/services' }),
  schema: z.object({
    title: z.string(),
    shortDesc: z.string(),
    description: z.string(),
    price: z.string(),
    priceNote: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/testimonials' }),
  schema: z.object({
    author: z.string(),
    rating: z.number().min(1).max(5),
    date: z.string(),
    text: z.string(),
    context: z.string().optional(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/faq' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number(),
  }),
});

const pianos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/pianos' }),
  schema: z.object({
    marque: z.string(),
    modele: z.string(),
    annee: z.number(),
    origine: z.string(),
    hauteur: z.string(),
    serie: z.string().optional(),
    prix: z.number(),
    disponible: z.boolean(),
    description: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    order: z.number(),
  }),
});

// ── SEO singleton (CMS maison standard) ───────────────────────────────────

const seo = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/seo' }),
  schema: z.object({
    global: z.object({
      siteName: z.string().optional(),
      separator: z.string().optional(),
      defaultOgImage: z.string().optional(),
    }).optional(),
    pages: z.record(z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      ogImage: z.string().optional(),
      noindex: z.boolean().optional(),
    })).optional(),
  }),
});

export const collections = {
  'site-info': siteInfo,
  hero,
  about,
  contact,
  services,
  testimonials,
  faq,
  pianos,
  seo,
};
