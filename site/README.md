# P'Accord Piano — Site web

Site Astro pour P'Accord Piano (Simon PACOR, accordeur de piano à Chartres).

## Stack

- **Astro 5** + **Tailwind v4** + **TypeScript strict**
- **Keystatic CMS** (interface admin locale ou cloud)
- **Cloudflare Pages** (déploiement)

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Développement (sans CMS)
npm run dev

# Développement avec interface CMS sur /keystatic/
npm run dev:cms

# Build de production
npm run build
```

## Structure

```
src/
├── components/         ← Composants Astro (wf-06)
├── content/            ← Fichiers JSON (éditables via Keystatic)
├── data/
│   ├── business.ts     ← Données techniques (legal, geo)
│   └── content.ts      ← Helpers de lecture du contenu
├── layouts/
│   └── BaseLayout.astro
├── pages/              ← Pages du site
└── styles/
    └── global.css      ← Tokens Tailwind v4 + polices
public/
├── fonts/              ← Polices locales woff2 (⚠️ à télécharger — voir FONTS-TODO.md)
├── images/             ← Assets statiques
├── robots.txt
└── llms.txt
```

## À faire avant le build

1. **Télécharger les polices** : voir `public/fonts/FONTS-TODO.md`
2. **Renseigner `.env`** : copier `.env.example` en `.env` et remplir les clés API

## Variables d'environnement

| Variable | Description |
|----------|-------------|
| `WEB3FORMS_KEY` | Clé Web3Forms pour le formulaire de contact |
| `ORS_API_KEY` | Clé OpenRouteService pour le calculateur de tarif |
| `UMAMI_WEBSITE_ID` | ID Umami Analytics (créé lors du déploiement) |

## Pipeline Web Factory

- wf-00 ✅ Scraping
- wf-01 ✅ Brief
- wf-02 ✅ Design system
- wf-03 ✅ Contenu
- wf-04 ✅ SEO/GEO
- wf-05 ✅ Init projet ← *vous êtes ici*
- wf-06 ⏳ Composants Astro
- wf-07 ⏳ Formulaires + légal
- wf-08 ⏳ Intégration contenu
- wf-09 ⏳ Audit pré-prod
- wf-10 ⏳ Déploiement
