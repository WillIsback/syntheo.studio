# syntheo.studio

Site public de [Syntheo](https://github.com/WillIsback/Syntheo), le bloc-notes de réunion open source et 100 % local.

- Pages statiques : `index.html` (anglais, par défaut) et `fr/index.html`. Un navigateur en français est redirigé vers `/fr/` à sa première visite (`assets/js/lang.js`) ; le choix EN/FR est mémorisé.
- Identité « 緑茶 Thé vert » : jetons de `packages/design-system` du dépôt Syntheo, clair et sombre (`prefers-color-scheme`).
- Polices auto-hébergées (Geist, Newsreader, sous-ensemble de Noto Serif JP pour les kanji), sous licence OFL : aucune requête vers un service tiers, ni cookie, ni mesure d'audience.
- Publication : GitHub Pages via `.github/workflows/pages.yml` à chaque fusion sur `main`.
- Documentation : <https://docs.syntheo.studio> (Mintlify, dossier `docs/` du dépôt Syntheo).

Aperçu local : `python3 -m http.server -d . 8080`.
