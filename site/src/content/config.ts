/**
 * Astro Content Collections config
 * Ces collections sont gérées par Keystatic CMS et lues via src/data/content.ts.
 * On utilise z.record(z.any()) pour bypasser la validation Astro — Keystatic gère ses propres schémas.
 */
import { defineCollection, z } from 'astro:content';

const loose = defineCollection({ type: 'data', schema: z.record(z.any()) });

export const collections = {
  services: loose,
  testimonials: loose,
  faq: loose,
  hero: loose,
  about: loose,
  'site-info': loose,
  contact: loose,
  pianos: loose,
};
