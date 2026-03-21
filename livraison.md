# Livraison — P'Accord Piano

**Date de mise en prod** : 2026-03-21
**URL finale** : https://paccord-piano.fr
**URL Cloudflare Pages** : https://site-paccord-piano.pages.dev
**Repo GitHub** : https://github.com/mavailable/site-paccord-piano
**Hébergement** : Cloudflare Pages (gratuit, CDN mondial)

---

## Accès

| Service | URL / Info | Compte |
|---------|-----------|--------|
| Site web | https://paccord-piano.fr | — |
| CMS Keystatic | keystatic.cloud → équipe paccord-piano | Email Simon (à créer) |
| Statistiques Umami | *(Share URL à renseigner après setup)* | Lien public — pas de compte requis |
| Cloudflare Pages | dash.cloudflare.com → Workers & Pages | Compte agence |
| GitHub | github.com/mavailable/site-paccord-piano | Compte agence |
| Web3Forms | web3forms.com | Compte agence — clé : `5c0597af-…` |
| Umami Admin | cloud.umami.is | Compte agence |
| Google Search Console | search.google.com/search-console | À configurer |

---

## Variables d'environnement Cloudflare Pages

| Variable | Valeur | Statut |
|----------|--------|--------|
| `PUBLIC_WEB3FORMS_KEY` | `5c0597af-80a9-48ba-b856-5c436e39ea74` | ✅ Configuré |
| `PUBLIC_ORS_API_KEY` | *(optionnel — calcul distance route exacte)* | En attente |
| `UMAMI_WEBSITE_ID` | *(UUID à renseigner après création Umami)* | En attente |

---

## Stack technique

- **Framework** : Astro 5 (statique) + Tailwind v4 + TypeScript
- **Hébergement** : Cloudflare Pages (CDN mondial, HTTPS auto)
- **Formulaire** : Web3Forms (email reçu sur paccord.piano@gmail.com)
- **Analytics** : Umami Cloud (sans cookies, RGPD-exempt)
- **CMS** : Keystatic Cloud (édition sans code pour Simon)
- **Calcul tarif** : API adresse.data.gouv.fr (gratuite, sans clé)

---

## Pages du site

| Page | URL | Indexée |
|------|-----|---------|
| Accueil | /  | ✅ |
| Réserver | /contact | ✅ |
| Pianos d'occasion | /pianos-doccasion | ✅ |
| Mentions légales | /mentions-legales | ❌ noindex |
| Politique confidentialité | /politique-de-confidentialite | ❌ noindex |
| CGV | /cgv | ❌ noindex |
| Merci | /merci | ❌ noindex |
| 404 | /404 | ❌ noindex |

---

## Ce que Simon peut modifier (via CMS Keystatic)

- Informations générales (téléphone, email, horaires)
- Section Hero (titre, sous-titre)
- Section À Propos (texte, photo)
- Services (titre, description, images)
- Témoignages (ajout / suppression / modification)
- FAQ (ajout / suppression / modification)
- Pianos d'occasion (fiche, prix, disponibilité)

## Ce qui nécessite l'intervention de l'agence

- Ajout de nouvelles pages
- Modification du design ou des couleurs
- Nouvelles fonctionnalités
- Mise à jour des dépendances Astro/Tailwind
- Modification du formulaire ou du Schema.org

---

## Checklist post-déploiement (à compléter)

- [ ] Site accessible sur https://paccord-piano.fr
- [ ] Redirect www → apex fonctionnel
- [ ] Formulaire testé : email reçu sur paccord.piano@gmail.com
- [ ] Page /merci s'affiche après soumission
- [ ] Schema.org valide : https://search.google.com/test/rich-results
- [ ] OG image visible : https://developers.facebook.com/tools/debug/
- [ ] Sitemap soumis Google Search Console
- [ ] Sitemap soumis Bing Webmaster Tools
- [ ] Umami reçoit des données (visiter le site + check dashboard)
- [ ] Share URL Umami transmis à Simon
- [ ] Lighthouse prod ≥ 90 (https://pagespeed.web.dev/)
- [ ] Keystatic Cloud : Simon peut se connecter et modifier le contenu
- [ ] NAP cohérent site / Google Business Profile

---

## Maintenance recommandée pour Simon

- **Quotidien** : vérifier les soumissions de formulaire (email paccord.piano@gmail.com)
- **Hebdomadaire** : répondre aux avis Google, partager du contenu sur Facebook
- **En cas de changement** : modifier les horaires / tarifs via Keystatic Cloud
- **Semestriel** : contacter l'agence pour mise à jour des dépendances

---

## Support & contact agence

Marc Muller — marc@muller.im
Pour toute question technique, modification de design ou nouvelle fonctionnalité.
