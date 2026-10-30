// og-contact.mjs — generates public/assets/og/contact.png (1200x630) for the Contact page
// from the LM-01 location map (BUILD-NOTES 4: one static OG per page — contact: location
// map). Geometry is the desktop variant of src/components/diagrams/LocationMap.astro (EN
// labels), nested in a clipped <svg> so the land path stays inside the map frame. No
// invented figures: only the map's own labels plus the PIDC wordmark and the page H1.
// Presentation attributes are inlined so librsvg (sharp) renders it standalone.
// Usage: node scripts/og-contact.mjs   (then oxipng if available)
import { mkdirSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const W = 1200;
const H = 630;
// token values (src/styles/tokens.css)
const paper = '#fafaf7';
const white = '#ffffff';
const ink = '#1a1d1f';
const text2 = '#565b5d';
const line = '#d8d8d2';
const accent = '#c8401a';
const fiber = '#7a8082';

const MONO = "'IBM Plex Mono','Menlo','Consolas',monospace";
const DISPLAY = "'Space Grotesk','Helvetica Neue',Helvetica,Arial,sans-serif";

// LM-01 desktop, viewBox 0 0 560 448 — geometry verbatim from LocationMap.astro (EN labels),
// the lm-* class styles translated to attributes (components.css).
const map = `
<svg x="452" y="24" width="724" height="579" viewBox="0 0 560 448">
  <defs>
    <pattern id="og-lm-sea" width="16" height="16" patternUnits="userSpaceOnUse">
      <path d="M0 8 Q4 5.5 8 8 T16 8" fill="none" stroke="${line}" stroke-width="1"/>
    </pattern>
  </defs>
  <path fill="url(#og-lm-sea)" fill-rule="evenodd" d="M0 0H560V448H0Z
    M47.6 -83.5 74.1 -61.2 78.7 -49 107.5 -50.3 134 -13.8 142.6 -13.6 145.3 1.7 188.3 63.1 224.2 94.5
    241.7 151.6 263 195 263.3 219.8 295.2 325.5 293 339.4 286.9 325.8 290.6 413.2 313 462.3 313 501.2
    304.3 501.2 300 493.3 289.7 501.2 36 501.2 25.8 451 45 389.1 43.3 376.4 4.6 284.5 9.5 247.7
    21.9 235.2 34.7 205 26.6 154.9 52 113.1 38.9 92.4 5.7 66.7 -16.3 38.4 -16.4 24.5 8.9 11.9
    16.2 0.3 -44.2 -47.5 -44.2 -83.5Z"/>
  <path fill="${white}" stroke="${ink}" stroke-width="1.5" d="M47.6 -83.5 74.1 -61.2 78.7 -49 107.5 -50.3 134 -13.8 142.6 -13.6 145.3 1.7
    188.3 63.1 224.2 94.5 241.7 151.6 263 195 263.3 219.8 295.2 325.5 293 339.4 286.9 325.8 290.6 413.2
    313 462.3 313 501.2 304.3 501.2 300 493.3 289.7 501.2 36 501.2 25.8 451 45 389.1 43.3 376.4 4.6 284.5
    9.5 247.7 21.9 235.2 34.7 205 26.6 154.9 52 113.1 38.9 92.4 5.7 66.7 -16.3 38.4 -16.4 24.5 8.9 11.9
    16.2 0.3 -44.2 -47.5 -44.2 -83.5Z"/>
  <text x="24" y="46" font-family="${MONO}" font-size="13" font-weight="600" letter-spacing="1" fill="${text2}">VIETNAM</text>
  <path d="M150 8C145 90 128 210 119 313" fill="none" stroke="${ink}" stroke-width="1.75"/>
  <text x="146" y="146" font-family="${MONO}" font-size="13" font-weight="600" fill="${accent}">220 kV grid</text>
  <ellipse cx="118" cy="320" rx="58" ry="50" fill="none" stroke="${text2}" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="118" y="396" text-anchor="middle" font-family="${MONO}" font-size="12.5" font-weight="500" fill="${text2}">Gia Lai Province</text>
  <circle cx="118" cy="320" r="7" fill="${accent}"/>
  <text x="118" y="348" text-anchor="middle" font-family="${MONO}" font-size="13.5" font-weight="600" fill="${ink}">PIDC site</text>
  <g fill="none" stroke="${fiber}" stroke-width="1.75" stroke-dasharray="6 3">
    <path d="M125 316C170 312 230 307 289 304"/>
    <path d="M124 328C175 342 235 360 289 372"/>
    <path d="M293 302C340 296 385 288 428 282"/>
    <path d="M293 374C340 370 385 364 426 358"/>
  </g>
  <text x="272" y="341" text-anchor="end" font-family="${MONO}" font-size="12.5" font-weight="500" fill="${text2}">Quy Nhơn</text>
  <circle cx="288.7" cy="303.7" r="4" fill="${white}" stroke="${ink}" stroke-width="1.5"/>
  <circle cx="288.9" cy="372.1" r="4" fill="${white}" stroke="${ink}" stroke-width="1.5"/>
  <text x="424" y="300" font-family="${MONO}" font-size="12.5" font-weight="600" fill="${ink}">ADC landing</text>
  <text x="424" y="376" font-family="${MONO}" font-size="12.5" font-weight="600" fill="${ink}">SJC2 landing</text>
  <text x="452" y="110" text-anchor="middle" font-family="${MONO}" font-size="12.5" font-weight="500" letter-spacing="1" fill="${text2}">EAST SEA</text>
</svg>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${paper}"/>
  <path d="M0 0H${W}V6H0Z M0 ${H - 6}H${W}V${H}H0Z" fill="${ink}"/>
  <g transform="translate(72,96)">
    <text x="0" y="60" font-family="${DISPLAY}" font-size="76" font-weight="700" letter-spacing="4" fill="${ink}">PIDC</text>
    <text x="0" y="112" font-family="${MONO}" font-size="21" font-weight="600" letter-spacing="4" fill="${text2}">PISICO DATA CENTER</text>
    <path d="M0 150H300" stroke="${line}" stroke-width="1"/>
    <text x="0" y="186" font-family="${MONO}" font-size="14.5" font-weight="600" letter-spacing="1.5" fill="${text2}">LM-01 · SCHEMATIC LOCATION MAP</text>
    <text x="0" y="212" font-family="${MONO}" font-size="14.5" letter-spacing="1.5" fill="${text2}">220 kV GRID · GIA LAI, VIETNAM</text>
    <text x="0" y="330" font-family="${DISPLAY}" font-size="24" font-weight="600" fill="${accent}">Talk to us about</text>
    <text x="0" y="362" font-family="${DISPLAY}" font-size="24" font-weight="600" fill="${accent}">the campus.</text>
  </g>
  ${map}
</svg>`;

mkdirSync('public/assets/og', { recursive: true });
writeFileSync('.shots/og-contact.svg', svg);
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/assets/og/contact.png');
const meta = await sharp('public/assets/og/contact.png').metadata();
console.log(`og: public/assets/og/contact.png ${meta.width}x${meta.height}`);
