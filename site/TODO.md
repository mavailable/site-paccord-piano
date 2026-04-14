# TODO — pacorpiano

## about.blocks et about.stats mal types dans cms.config (P7)
- Les arrays `blocks` et `stats` dans le singleton about sont definis sans `type: 'array'` ni propriete `item`
- Le form /admin risque de mal les afficher (objet simple au lieu de liste repetable)
- Action : corriger cms.config.ts — ajouter `type: 'array'`, `itemLabel`, et `item` avec la bonne structure
- Priorite : basse (le contenu about est rarement modifie par le client)
- Date : 2026-04-13
