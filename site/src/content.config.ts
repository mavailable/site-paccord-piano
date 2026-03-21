// content.config.ts
// Astro Content Collections config — used for type-safe content loading.
// For CMS editing, see keystatic.config.ts at the root.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
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
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    author: z.string(),
    slug: z.string(),
    rating: z.number().min(1).max(5),
    date: z.string(),
    text: z.string(),
    context: z.string().optional(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    slug: z.string(),
    answer: z.string(),
    order: z.number(),
  }),
});

export const collections = { services, testimonials, faq };
