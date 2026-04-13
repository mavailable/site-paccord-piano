/**
 * Technical business data — NOT editable via Keystatic CMS
 * For editable content (texts, phone, email, etc.), use src/content/ (Keystatic)
 *
 * This file contains only immutable technical/legal data:
 * - Legal identifiers (RCS, SIRET)
 * - GPS coordinates for Schema.org
 * - Tax regime
 */

// ── LEGAL ──────────────────────────────────────────────────────────────────
export const legal = {
  rcs: '983 922 030',
  rcsVille: 'Chartres',
  siret: '983 922 030 00010',
  tvaIntracom: null, // TVA non applicable — art. 293 B CGI
  regime: 'TVA non applicable, article 293 B du CGI',
  formeJuridique: 'Entrepreneur individuel',
} as const;

// ── GEO COORDINATES — for Schema.org (not client-editable) ─────────────────
export const geo = {
  lat: 48.49877507352234,
  lon: 1.3101347159039247,
} as const;

// ── TARIFF GRID — for price calculator (business logic, not display text) ──
export const tariffGrid = [
  { maxKm: 10,  price: 90  },
  { maxKm: 20,  price: 95  },
  { maxKm: 30,  price: 100 },
  { maxKm: 40,  price: 105 },
  { maxKm: 50,  price: 110 },
  { maxKm: 60,  price: 115 },
  { maxKm: 100, price: 120 },
] as const;

// Chartres origin point for ORS API distance calculation
export const chartriesCoords = {
  lat: 48.4469,
  lon: 1.4889,
} as const;

export type TariffEntry = typeof tariffGrid[number];

// Web3Forms API key — cascade: CMS content → env var → cle Marc (defaut agence)
const WEB3FORMS_DEFAULT = '9667fcf8-c7da-4b7a-8432-0ec25215c75e';
export const web3formsDefault = WEB3FORMS_DEFAULT;
export const web3formsKey = import.meta.env.WEB3FORMS_KEY || WEB3FORMS_DEFAULT;
