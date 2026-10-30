// og-company.mjs — generates public/assets/og/company.png (1200x630) for the Company page
// from the Pisico group figure's numbered-keys motif (BUILD-NOTES 4: one static OG per
// page — company: group figure). The mockup's figure is markup, not an SVG, so the OG
// re-draws its own marks only: the eight numbered markers exactly as .c-phase__n styles
// them (solid ink disc, paper number), key 8 — AI data centers · PIDC — in the accent red.
// No invented figures: no labels beyond the figure's own title/cap and the PIDC wordmark.
// Presentation attributes are inlined so librsvg (sharp) renders it standalone.
// Usage: node scripts/og-company.mjs   (then oxipng if available)
import { mkdirSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const W = 1200;
const H = 630;
// token values (src/styles/tokens.css)
const paper = '#fafaf7';
const ink = '#1a1d1f';
const text2 = '#565b5d';
const line = '#d8d8d2';
const accent = '#c8401a';

const MONO = "'IBM Plex Mono','Menlo','Consolas',monospace";
const DISPLAY = "'Space Grotesk','Helvetica Neue',Helvetica,Arial,sans-serif";

// numbered keys 1–8, two columns × four rows; geometry mirrors .c-phase__n (--s-5 disc,
// tabular numeral). Key 8 (PIDC) takes the accent fill, as the mockup's bold entry. The
// grid clears the bottom ink bar and sits centered in the right half of the canvas.
const D = 44; // disc diameter
const GAP_X = 176;
const GAP_Y = 44;
const KEYS_X = 772;
const KEYS_Y = 272;
const keys = Array.from({ length: 8 }, (_, i) => {
  const col = Math.floor(i / 4);
  const row = i % 4;
  const x = KEYS_X + col * (D + GAP_X);
  const y = KEYS_Y + row * (D + GAP_Y);
  const n = i + 1;
  return `<circle cx="${x + D / 2}" cy="${y + D / 2}" r="${D / 2}" fill="${
    n === 8 ? accent : ink
  }"/><text x="${x + D / 2}" y="${y + D / 2 + 8}" text-anchor="middle" font-family="${MONO}" font-size="21" font-weight="700" fill="${paper}">${n}</text>`;
}).join('\n  ');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${paper}"/>
  <path d="M0 0H${W}V6H0Z M0 ${H - 6}H${W}V${H}H0Z" fill="${ink}"/>
  <g transform="translate(72,72)">
    <text x="0" y="60" font-family="${DISPLAY}" font-size="76" font-weight="700" letter-spacing="4" fill="${ink}">PIDC</text>
    <text x="0" y="112" font-family="${MONO}" font-size="21" font-weight="600" letter-spacing="4" fill="${text2}">PISICO DATA CENTER</text>
    <path d="M0 150H300" stroke="${line}" stroke-width="1"/>
    <text x="0" y="186" font-family="${MONO}" font-size="14.5" font-weight="600" letter-spacing="1.5" fill="${text2}">THE PISICO GROUP · PIDC.VN</text>
    <text x="0" y="212" font-family="${MONO}" font-size="14.5" letter-spacing="1.5" fill="${text2}">GIA LAI, VIETNAM</text>
    <text x="0" y="300" font-family="${DISPLAY}" font-size="44" font-weight="600" fill="${accent}">Part of the</text>
    <text x="0" y="352" font-family="${DISPLAY}" font-size="44" font-weight="600" fill="${accent}">Pisico group</text>
  </g>
  ${keys}
</svg>`;

mkdirSync('public/assets/og', { recursive: true });
writeFileSync('.shots/og-company.svg', svg);
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/assets/og/company.png');
const meta = await sharp('public/assets/og/company.png').metadata();
console.log(`og: public/assets/og/company.png ${meta.width}x${meta.height}`);
