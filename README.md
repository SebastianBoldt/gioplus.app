# gioplus.app

Static Website for my App Gio+

https://gioplus.app

Same setup as `habitbe.app` and `pianoo.app`: a single `index.html` with Tailwind CSS from the CDN,
Google Fonts (IBM Plex), Phosphor Icons and a `favicon/` folder. No build step. Hosted with GitHub Pages
(branch `main`, root folder) and a `CNAME` for `gioplus.app`.

## Structure

```
index.html        Landing page (markup, Tailwind config, styles and a little JS)
i18n.js           German translations
build-de.js       Generates de/index.html (run after text changes)
de/index.html     German page, generated
media/            Screen recording of a measurement (MP4, WebM, poster)
terms.html        Privacy policy, terms of use and imprint (own copy of the landing page styles)
AppIcon.png       App icon, composited from Gio/AppIcon.icon in the app repo on a dark tile
gioplus-hero.png  Preview image for link sharing (og:image)
media/screens/    Hero screenshots per theme and language
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

## Theme and language

- Light is the default. The button in the navigation switches to dark; the choice is stored in `localStorage` (`gio-theme`) and `terms.html` follows it.
- All colours are CSS variables at the top of the `<style>` block in `index.html` (`:root` for light, `html.dark` for dark). Tailwind classes such as `bg-ink` or `text-strong` point at them.
- English is `index.html` at `/`. German is `de/index.html` at `/de/`, generated from `index.html` and the `DE` table in `i18n.js`. Elements are linked by `data-i18n="key"` (or `data-i18n-attr="alt:key"`).
- **After every change to `index.html` or `i18n.js`, run `node build-de.js` and commit both pages.** The script lists keys that have no German text.
- The EN/DE switch links between the two addresses. A German browser without a saved choice is sent from `/` to `/de/`; clicking EN remembers the choice (`gio-lang`).
- Both pages carry `hreflang` links and are in `sitemap.xml`, so search engines index each language under its own address.
- All asset paths are root-absolute (`/media/...`), so the same markup works under `/de/`. Preview through a local server, not by opening the file.
- German terms follow `Gio/Localizable.xcstrings` in the app repo.
- The hero shows real screenshots from `media/screens/<light|dark>-<en|de>-<progress|history|achievements>.jpg`; the page picks the set that matches theme and language.
- Not translated: the measurement video (English app UI) and `terms.html`.

### Retaking the hero screenshots

The app's debug launch arguments do the work. With a simulator build installed on an iPhone 17 simulator:

```bash
xcrun simctl launch <udid> com.sebastianboldt.GioPlus -seedSamples -pro -tab 0 -theme bluePurple -AppleLanguages "(de)" -AppleLocale de_DE
```

`-tab` is 0 (progress), 1 (history) or 2 (achievements); `xcrun simctl ui <udid> appearance light|dark` sets the mode and
`xcrun simctl status_bar <udid> override --time 9:41` the clock. Scale the PNGs to 603 px width and save them as JPG under the names above.

## Design

- Clinical, technical look: IBM Plex Sans for text, IBM Plex Mono for labels and values
- Flat surfaces with hairline borders, no glows, no gradient text
- Measurement motifs: graph paper and a 0-180 degree ruler in the hero, numbered sections, figure captions, tables
- App colours: system blue, indigo `#5E5CE6`, green; lighter or darker per theme for contrast
- Reference ranges and sources come from `JointReference.swift` in the app repo; keep both in sync
- The Free/Pro table follows `FEATURES.md` in the app repo
- The hero readout (43 / 101 / 58 degrees) is the result of the recording in `media/`; update it with a new video
- Feature illustrations are inline HTML/SVG rebuilt from the app UI; they follow the theme, camera images stay dark
