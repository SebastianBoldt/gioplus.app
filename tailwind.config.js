// Tailwind build for gioplus.app. Colours point at the CSS variables in the pages,
// so light and dark share one markup. Build with: npm run build:css
const token = name => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
    // Every file that contains class names, including strings in the translations and scripts
    content: ['./index.html', './terms.html', './i18n.js', './build-de.js'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
                mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
            },
            colors: {
                ink: token('ink'),       // page
                panel: token('panel'),   // raised surfaces
                strong: token('strong'), // headings
                text: token('text'),
                muted: token('muted'),
                dim: token('dim'),
                brand: token('brand'),   // system blue: your arc, buttons, links
                mint: token('mint'),     // functional range, reached
                track: token('track'),   // empty bars
                line: 'var(--line)',
            },
            aspectRatio: {
                '4/3': '4 / 3',
            },
        },
    },
};
