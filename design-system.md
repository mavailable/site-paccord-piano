# Design System — P'Accord Piano

**Date** : 2026-03-21
**Basé sur** : brief.md
**Statut** : Validé

---

## Ambiance visuelle

**Élégance artisanale, noir & or.** L'identité visuelle s'inspire directement du piano lui-même : la laque noire profonde de la caisse, l'ivoire chaud des touches, et l'or ambré des pièces métalliques. Un design sobre, haut de gamme et contrasté — qui inspire confiance et expertise sans sophistication excessive. À la fois classique (métier d'art, diplôme ITEMM, conservatoire) et accessible (artisan de proximité, tarif transparent). Le noir est dominant, l'ambre est l'accent d'action, l'ivoire apporte de la chaleur dans les sections claires.

---

## Palette de couleurs

### Primary — Ébène Piano
*Inspiré de la laque noire du piano. Couleur dominante du site : header, hero, sections sombres, fonds.*

| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | `#f5f5f5` | Fonds de sections très légères |
| 100 | `#e8e8e8` | Fonds légers, séparateurs |
| 200 | `#d4d4d4` | Bordures légères |
| 300 | `#b8b8b8` | Bordures, placeholders |
| 400 | `#8a8a8a` | Icônes secondaires, textes désactivés |
| 500 | `#5c5c5c` | Textes secondaires sur fond clair |
| 600 | `#3d3d3d` | Textes importants sur fond clair |
| 700 | `#2a2a2a` | Textes corps sur fond clair |
| 800 | `#1a1a1a` | Header, nav, sections sombres |
| 900 | `#0d0d0d` | Fond hero, sections très sombres, textes noirs |
| 950 | `#050505` | Fond le plus profond (footer) |

### Secondary — Ivoire
*Inspiré des touches d'ivoire du piano. Pour les sections claires "chaudes" (L'Artisan, FAQ, alternance).*

| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | `#fefdf8` | Fond de section très léger (Artisan, FAQ) |
| 100 | `#fdf9ed` | Fond de section léger |
| 200 | `#f9f0d5` | Fonds chauds, cartes sur fond ivoire |
| 300 | `#f3e4b5` | Bordures dorées légères |
| 400 | `#ead495` | Accents doux, badges |
| 500 | `#dfc070` | Couleur ivoire chaude |
| 600 | `#c8a050` | Dorés secondaires |
| 700 | `#9e7838` | Textes sur fond très clair |
| 800 | `#6e5025` | Textes foncés chauds |
| 900 | `#422e14` | Titres sur fond ivoire |
| 950 | `#22170a` | Très foncé |

### Accent — Or Ambré
*Le `#f9b233` du site actuel, conservé et décliné. CTA, badges, hovers, éléments d'action.*

| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | `#fffbeb` | Fond alerte légère |
| 100 | `#fef3c7` | Badges légers |
| 200 | `#fde68a` | Hovers très doux |
| 300 | `#fcd34d` | États intermédiaires |
| 400 | `#fbbf24` | Accent secondaire |
| 500 | `#f9b233` | **CTA principal, icônes d'accent, liens actifs** |
| 600 | `#d97706` | Hover sur CTA |
| 700 | `#b45309` | Active state CTA |
| 800 | `#92400e` | Texte accent sur fond clair |
| 900 | `#78350f` | Titres accent |
| 950 | `#451a03` | Très foncé accent |

### Neutral — Ardoise
*Gamme de gris neutre pour textes, fonds de pages blanches, bordures UI.*

| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | `#fafafa` | Fond de page général |
| 100 | `#f4f4f5` | Fond de card, input |
| 200 | `#e4e4e7` | Bordures de card |
| 300 | `#d4d4d8` | Séparateurs, bordures input |
| 400 | `#a1a1aa` | Placeholders, textes désactivés |
| 500 | `#71717a` | Textes secondaires |
| 600 | `#52525b` | Textes tertiaires |
| 700 | `#3f3f46` | Textes corps principal |
| 800 | `#27272a` | Textes importants |
| 900 | `#18181b` | Textes noirs, titres sur blanc |
| 950 | `#09090b` | Noir pur texte |

---

## Contraste WCAG AA

| Combinaison | Ratio | Statut |
|-------------|-------|--------|
| Neutral-900 `#18181b` sur Accent-500 `#f9b233` (texte CTA) | 9.65:1 | ✅ AAA |
| White `#ffffff` sur Primary-900 `#0d0d0d` (hero) | 19.44:1 | ✅ AAA |
| White `#ffffff` sur Primary-800 `#1a1a1a` (header, sections sombres) | 17.40:1 | ✅ AAA |
| Neutral-700 `#3f3f46` sur White (texte corps pages claires) | 10.44:1 | ✅ AAA |
| Primary-700 `#2a2a2a` sur White (texte sur fond blanc) | 14.35:1 | ✅ AAA |
| ~~White sur Accent-500~~ `#f9b233` (INTERDIT) | 1.84:1 | ❌ ÉCHEC — utiliser neutral-900 |
| Neutral-50 `#fafafa` sur Primary-900 `#0d0d0d` | 18.62:1 | ✅ AAA |
| Primary-900 `#0d0d0d` sur Secondary-100 `#fdf9ed` (ivoire) | 18.46:1 | ✅ AAA |
| Neutral-700 `#3f3f46` sur Secondary-50 `#fefdf8` | 10.25:1 | ✅ AAA |
| Accent-500 `#f9b233` sur Primary-900 `#0d0d0d` (icônes) | 10.59:1 | ✅ AAA |

> ⚠️ **RÈGLE CRITIQUE** : Ne jamais utiliser du texte blanc sur fond `accent-500`. Toujours utiliser `text-neutral-900` sur `bg-accent-500`.

---

## Typographie

### Heading : Playfair Display
- **Source** : https://fontsource.org/fonts/playfair-display
- **npm** : `npm install @fontsource/playfair-display`
- **Poids** : 600 (H2/H3), 700 (H1), 400 italic (signatures, citations)
- **Justification** : Serif élégant à hauts contrastes de fûts — évoque l'héritage musical classique, la précision artisanale et le soin du détail. Parfait pour un BMA ITEMM qui allie tradition et modernité. Les empattements donnent de la noblesse sans paraître vieilli.

### Body : DM Sans
- **Source** : https://fontsource.org/fonts/dm-sans
- **npm** : `npm install @fontsource-variable/dm-sans`
- **Poids** : 400 (texte), 500 (labels, emphasis), 600 (boutons, nav)
- **Justification** : Sans-serif géométrique, très lisible sur mobile et desktop. Moderne sans être froid — équilibre parfait avec le Playfair Display. Excellent rendu sur tous les écrans, excellente lisibilité petite taille.

### Échelle typographique

| Élément | Mobile | Desktop | Poids | Police | Note |
|---------|--------|---------|-------|--------|------|
| H1 | `2rem / 32px` | `3.5rem / 56px` | 700 | Playfair Display | Hero title |
| H2 | `1.75rem / 28px` | `2.5rem / 40px` | 600 | Playfair Display | Section titles |
| H3 | `1.25rem / 20px` | `1.5rem / 24px` | 600 | Playfair Display | Card titles |
| H4 | `1.125rem / 18px` | `1.25rem / 20px` | 600 | DM Sans | Sous-titres |
| Body lg | `1.125rem / 18px` | `1.25rem / 20px` | 400 | DM Sans | Lead paragraph |
| Body | `1rem / 16px` | `1rem / 16px` | 400 | DM Sans | Texte courant |
| Small | `0.875rem / 14px` | `0.875rem / 14px` | 400 | DM Sans | Notes, meta |
| CTA | `1rem / 16px` | `1.125rem / 18px` | 600 | DM Sans | Boutons |
| Label | `0.875rem / 14px` | `0.875rem / 14px` | 500 | DM Sans | Formulaires |
| Citation | `1.125rem / 18px` | `1.25rem / 20px` | 400 italic | Playfair Display | Témoignages |

---

## Tokens Tailwind v4

> Ces tokens sont à copier dans `src/styles/global.css` lors de l'étape wf-05.

### global.css (prêt à copier)

```css
@import "tailwindcss";

@theme {
  /* ── PRIMARY — Ébène Piano ── */
  --color-primary-50: #f5f5f5;
  --color-primary-100: #e8e8e8;
  --color-primary-200: #d4d4d4;
  --color-primary-300: #b8b8b8;
  --color-primary-400: #8a8a8a;
  --color-primary-500: #5c5c5c;
  --color-primary-600: #3d3d3d;
  --color-primary-700: #2a2a2a;
  --color-primary-800: #1a1a1a;
  --color-primary-900: #0d0d0d;
  --color-primary-950: #050505;

  /* ── SECONDARY — Ivoire ── */
  --color-secondary-50: #fefdf8;
  --color-secondary-100: #fdf9ed;
  --color-secondary-200: #f9f0d5;
  --color-secondary-300: #f3e4b5;
  --color-secondary-400: #ead495;
  --color-secondary-500: #dfc070;
  --color-secondary-600: #c8a050;
  --color-secondary-700: #9e7838;
  --color-secondary-800: #6e5025;
  --color-secondary-900: #422e14;
  --color-secondary-950: #22170a;

  /* ── ACCENT — Or Ambré ── */
  --color-accent-50: #fffbeb;
  --color-accent-100: #fef3c7;
  --color-accent-200: #fde68a;
  --color-accent-300: #fcd34d;
  --color-accent-400: #fbbf24;
  --color-accent-500: #f9b233;
  --color-accent-600: #d97706;
  --color-accent-700: #b45309;
  --color-accent-800: #92400e;
  --color-accent-900: #78350f;
  --color-accent-950: #451a03;

  /* ── NEUTRAL — Ardoise ── */
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f4f4f5;
  --color-neutral-200: #e4e4e7;
  --color-neutral-300: #d4d4d8;
  --color-neutral-400: #a1a1aa;
  --color-neutral-500: #71717a;
  --color-neutral-600: #52525b;
  --color-neutral-700: #3f3f46;
  --color-neutral-800: #27272a;
  --color-neutral-900: #18181b;
  --color-neutral-950: #09090b;

  /* ── TYPOGRAPHIE ── */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;

  /* ── BORDER RADIUS ── */
  --radius-sm: 0.25rem;    /* 4px — badges, tags */
  --radius-DEFAULT: 0.375rem;  /* 6px — inputs, boutons */
  --radius-md: 0.5rem;    /* 8px — cards */
  --radius-lg: 0.75rem;   /* 12px — panels */
  --radius-xl: 1rem;      /* 16px — modals, sections */
  --radius-full: 9999px;  /* pills */

  /* ── OMBRES ── */
  --shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06);
  --shadow-card-hover: 0 4px 12px 0 rgb(0 0 0 / 0.12), 0 2px 4px -1px rgb(0 0 0 / 0.08);
  --shadow-modal: 0 20px 40px 0 rgb(0 0 0 / 0.25);
}
```

---

## Composants visuels de référence

### Bouton CTA principal
```
bg-accent-500  text-neutral-900  font-body font-semibold
hover:bg-accent-600
px-6 py-3  rounded-DEFAULT
min-height: 44px (accessibilité tactile)
```
> ⚠️ Texte TOUJOURS `text-neutral-900` (jamais blanc — ratio 1.84:1 ❌)

### Bouton secondaire (outline)
```
border border-primary-800  text-primary-800  bg-transparent
hover:bg-primary-800 hover:text-white
px-6 py-3  rounded-DEFAULT
```

### Card service
```
bg-white  border border-neutral-200  rounded-md
shadow-card  hover:shadow-card-hover hover:-translate-y-0.5
transition-all duration-200
```

### Card témoignage
```
bg-secondary-50  border border-secondary-200  rounded-lg
px-6 py-5
Étoiles : text-accent-500
Citation : font-heading italic text-neutral-700
Auteur : font-body font-semibold text-neutral-900
```

### Sections alternées

| Section | Fond | Texte titre | Texte corps |
|---------|------|-------------|-------------|
| Hero | `bg-primary-900` (+ image) | `text-white` | `text-neutral-100` |
| L'Artisan | `bg-secondary-50` | `text-primary-900` | `text-neutral-700` |
| Services | `bg-white` | `text-primary-900` | `text-neutral-700` |
| Accords | `bg-primary-900` | `text-white` | `text-neutral-200` |
| Témoignages | `bg-secondary-50` | `text-primary-900` | `text-neutral-700` |
| FAQ | `bg-neutral-50` | `text-primary-900` | `text-neutral-700` |
| CTA bannière | `bg-primary-800` | `text-white` | `text-neutral-200` |
| Footer | `bg-primary-950` | `text-white` | `text-neutral-400` |

### Header / Navigation
```
bg-primary-900  (sticky, blur backdrop en scroll)
Logo : blanc  |  Nav links : text-white hover:text-accent-500
CTA nav : bg-accent-500 text-neutral-900  rounded-DEFAULT px-4 py-2
```

### Input formulaire
```
bg-white  border border-neutral-300  rounded-DEFAULT
focus:ring-2 focus:ring-accent-500 focus:border-accent-500
text-neutral-900  placeholder:text-neutral-400
px-4 py-3
```

---

## Guide de couleur texte par fond (référence rapide pour wf-06)

| Fond (classe bg) | Texte titre | Texte corps | Texte small/meta |
|-----------------|------------|-------------|-----------------|
| `bg-white` / `bg-neutral-50` | `text-primary-900` | `text-neutral-700` | `text-neutral-500` |
| `bg-secondary-50` / `bg-secondary-100` | `text-primary-900` | `text-neutral-700` | `text-neutral-500` |
| `bg-primary-800` / `bg-primary-900` / `bg-primary-950` | `text-white` | `text-neutral-200` | `text-neutral-400` |
| `bg-accent-500` (bannières amber) | `text-neutral-900` | `text-neutral-800` | `text-neutral-700` |

---

## Références couleurs pour les images

Les photos hero et services ont une dominante sombre/froide (pianos noirs, éclairage studio). Elles s'intègrent naturellement dans les sections `bg-primary-900`. Pour les sections claires (Artisan, Services), utiliser les photos avec cadre `rounded-lg shadow-card-hover`.
