# Polices à télécharger

Télécharge les fichiers .woff2 suivants et place-les dans ce dossier `public/fonts/`.

## Playfair Display (fontsource ou gwfh)

Liens directs Google Webfonts Helper :
- https://gwfh.mranftl.com/api/fonts/playfair-display?download=zip&subsets=latin&variants=600,700

Fichiers attendus :
- `playfair-display-600.woff2`
- `playfair-display-700.woff2`
- `playfair-display-italic.woff2`

## DM Sans (fontsource ou gwfh)

Liens directs Google Webfonts Helper :
- https://gwfh.mranftl.com/api/fonts/dm-sans?download=zip&subsets=latin&variants=400,500,600

Fichiers attendus :
- `dm-sans-400.woff2`
- `dm-sans-500.woff2`
- `dm-sans-600.woff2`

## Script de téléchargement automatique

Lance ce script depuis le dossier `site/` :

```bash
cd public/fonts
python3 -c "
import urllib.request, json, os

fonts = [
    {'id': 'playfair-display', 'variants': ['600', '700', '400italic']},
    {'id': 'dm-sans', 'variants': ['400', '500', '600']},
]

for font in fonts:
    url = f\"https://gwfh.mranftl.com/api/fonts/{font['id']}?subsets=latin\"
    data = json.loads(urllib.request.urlopen(url).read())
    for variant in data.get('variants', []):
        vid = variant['id']
        if vid in font['variants']:
            woff2_url = variant.get('woff2')
            if woff2_url:
                filename = f\"{data['id']}-italic.woff2\" if vid == '400italic' else f\"{data['id']}-{vid}.woff2\"
                urllib.request.urlretrieve(woff2_url, filename)
                size = os.path.getsize(filename)
                print(f'✅ {filename} — {size / 1024:.0f} Ko')
"
```

## Vérification

Tous les fichiers woff2 doivent faire > 10 Ko.
