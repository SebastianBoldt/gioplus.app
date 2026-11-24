# gioplus.app

Static Website for my App Gio+

https://gioplus.app

Same setup as `habitbe.app` and `pianoo.app`: a single `index.html` with Tailwind CSS from the CDN,
Google Fonts (IBM Plex), Phosphor Icons and a `favicon/` folder. No build step. Hosted with GitHub Pages
(branch `main`, root folder) and a `CNAME` for `gioplus.app`.

## Structure

```
index.html        Landing page (markup, Tailwind config, styles and a little JS)
media/            Screen recording of a measurement (MP4, WebM, poster)
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

- Clinical, technical look: IBM Plex Sans for text, IBM Plex Mono for labels and values
- Flat surfaces with hairline borders, no glows, no gradient text
- Measurement motifs: graph paper and a 0-180 degree ruler in the hero, numbered sections, figure captions, tables
- Colours from the app screenshots: system blue `#0A84FF`, indigo `#5E5CE6`, green `#30D158`
- Reference ranges and sources come from `JointReference.swift` in the app repo; keep both in sync
- The hero readout (43 / 101 / 58 degrees) is the result of the recording in `media/`; update it with a new video
- Feature illustrations are inline HTML/SVG rebuilt from the app UI
