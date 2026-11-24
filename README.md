# gioplus.app

Static Website for my App Gio+

https://gioplus.app

Same setup as `habitbe.app` and `pianoo.app`: a single `index.html` with Tailwind CSS from the CDN,
Google Fonts, Phosphor Icons and a `favicon/` folder. No build step. Hosted with GitHub Pages
(branch `main`, root folder) and a `CNAME` for `gioplus.app`.

## Structure

```
index.html        Landing page (markup, Tailwind config, styles and a little JS)
terms.html        Privacy policy, terms of use and imprint (Styles/ + SFPro.ttf, like habitbe.app)
AppIcon.png       App icon, composited from Gio/AppIcon.icon in the app repo on a dark tile
gioplus-hero.png  Hero image (three iPhones), also used as og:image
favicon/          Favicons and web manifest, generated from the app icon
CNAME             Custom domain for GitHub Pages
```

## Local development

```bash
npm run dev
```

Then open http://localhost:4322. Without npm: `python3 -m http.server 4322`.

## Going live in the App Store

Set `APP_STORE_URL` at the bottom of `index.html`. All download buttons then link to the
App Store and switch from "Coming soon" to "Download". Also add the Smart App Banner in the
`<head>` (`<meta name="apple-itunes-app" content="app-id=…">`).

## Design

- Dark layout from `habitbe.app`
- Colours from the app screenshots: system blue `#0A84FF` fading into indigo `#5E5CE6`
- App accents in the illustrations: green `#34c759`
- Feature illustrations are inline HTML/SVG rebuilt from the app UI, no screenshots needed
