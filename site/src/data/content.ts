/**
 * Content helpers — reads JSON files managed by Keystatic CMS
 * All content types are inferred from the JSON structure.
 */

import fs from 'node:fs';
import path from 'node:path';

function readJson<T>(filePath: string): T {
  const fullPath = path.join(process.cwd(), filePath);
  return JSON.parse(fs.readFileSync(fullPath, 'utf-8')) as T;
}

function readCollection<T>(dirPath: string): (T & { slug: string })[] {
  const fullDir = path.join(process.cwd(), dirPath);
  if (!fs.existsSync(fullDir)) return [];
  return fs.readdirSync(fullDir)
    .filter(f => f.endsWith('.json'))
    .map(f => ({
      slug: f.replace(/\.json$/, ''),
      ...readJson<T>(path.join(dirPath, f)),
    }));
}

// ── TYPES ──────────────────────────────────────────────────────────────────

export interface SiteInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  region: string;
  zone: string;
  facebookUrl: string;
  googleBusinessUrl: string;
  siteUrl: string;
}

export interface Hero {
  h1: string;
  subtitle: string;
  ctaLabel: string;
  ctaUrl: string;
  ctaSecondaryLabel: string;
  ctaSecondaryUrl: string;
  badgeText: string;
}

export interface About {
  sectionTitle: string;
  sectionSubtitle: string;
  name: string;
  blocks: Array<{
    title: string;
    text: string;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  price: string;
  priceNote: string;
  image: string;
  imageAlt: string;
  order: number;
}

export interface Testimonial {
  slug: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  context?: string;
}

export interface FaqItem {
  slug: string;
  question: string;
  answer: string;
  order: number;
}

export interface ContactInfo {
  sectionTitle: string;
  sectionSubtitle: string;
  step1Title: string;
  step2Title: string;
  formSuccessUrl: string;
}

export interface Piano {
  slug: string;
  marque: string;
  modele: string;
  annee: number;
  origine: string;
  hauteur: string;
  serie: string;
  prix: number;
  disponible: boolean;
  description: string;
  image: string;
  imageAlt: string;
  order: number;
}

// ── READERS ────────────────────────────────────────────────────────────────

export function getSiteInfo(): SiteInfo {
  return readJson<SiteInfo>('src/content/site-info/index.json');
}

export function getHero(): Hero {
  return readJson<Hero>('src/content/hero/index.json');
}

export function getAbout(): About {
  return readJson<About>('src/content/about/index.json');
}

export function getContactInfo(): ContactInfo {
  return readJson<ContactInfo>('src/content/contact/index.json');
}

export function getServices(): Service[] {
  return readCollection<Service>('src/content/services')
    .sort((a, b) => a.order - b.order);
}

export function getTestimonials(): Testimonial[] {
  return readCollection<Testimonial>('src/content/testimonials');
}

export function getFaq(): FaqItem[] {
  return readCollection<FaqItem>('src/content/faq')
    .sort((a, b) => a.order - b.order);
}

export function getPianos(): Piano[] {
  return readCollection<Piano>('src/content/pianos')
    .sort((a, b) => a.order - b.order);
}
