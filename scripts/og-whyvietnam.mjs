// og-whyvietnam.mjs — generates public/assets/og/why-vietnam.png (1200x630) for the Why
// Vietnam, why Gia Lai page from the Section A–A terrain cross-section (BUILD-NOTES 4: one
// static OG per page, cropped from its own diagram — here the same geometry as
// src/components/diagrams/TerrainSection.astro). Presentation attributes are inlined so
// librsvg (sharp) renders it standalone. No invented figures: only the diagram's own
// strokes plus the PIDC wordmark.
// Usage: node scripts/og-whyvietnam.mjs   (then oxipng if available)
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
const grid = '#ecece6';
const fiber = '#7a8082';
const accent = '#c8401a';

const MONO = "'IBM Plex Mono','Menlo','Consolas',monospace";
const DISPLAY = "'Space Grotesk','Helvetica Neue',Helvetica,Arial,sans-serif";

// Section A–A, viewBox 0 0 600 170 — geometry verbatim from TerrainSection.astro (west→east:
// generation symbols on the highland plateau, transmission towers down through the pass,
// the cable landing station and the two submarine cables on the coast at Quy Nhơn).
const terrain = `
<g transform="translate(72,330) scale(1.7)">
  <path fill="${grid}" d="M0 60C30 54 60 62 95 57S165 52 200 58S270 56 300 62C330 72 360 98 395 110S445 122 480 127L480 170L0 170Z"/>
  <rect x="480" y="129" width="120" height="41" fill="${fiber}" fill-opacity=".12"/>
  <path fill="none" stroke="${text2}" stroke-width="1.25" d="M0 60C30 54 60 62 95 57S165 52 200 58S270 56 300 62C330 72 360 98 395 110S445 122 480 127"/>
  <path fill="none" stroke="${fiber}" stroke-width="1.25" opacity=".5" d="M480 130c3.3-2.5 6.7-2.5 10 0s6.7 2.5 10 0s6.7-2.5 10 0s6.7 2.5 10 0s6.7-2.5 10 0s6.7 2.5 10 0s6.7-2.5 10 0s6.7 2.5 10 0s6.7-2.5 10 0s6.7 2.5 10 0s6.7-2.5 10 0s6.7 2.5 10 0s6.7-2.5 10 0s6.7 2.5 10 0"/>
  <path class="x-pw" d="M48 58V30M48 30V20M48 30L39.3 35M48 30L56.7 35" fill="none" stroke="${ink}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="48" cy="30" r="1.6" fill="${ink}"/>
  <path d="M74 59V36M74 36V28M74 36L67.1 40M74 36L80.9 40" fill="none" stroke="${ink}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="74" cy="36" r="1.4" fill="${ink}"/>
  <path d="M140 49V54" fill="none" stroke="${ink}" stroke-width="1.75" stroke-linecap="round"/>
  <circle cx="140" cy="40" r="9" fill="${white}" stroke="${ink}" stroke-width="1.75"/>
  <path d="M134 40c1.5-3.5 4.5-3.5 6 0s4.5 3.5 6 0" fill="none" stroke="${ink}" stroke-width="1.75" stroke-linecap="round"/>
  <path d="M203 50L223 44L229 50L209 56Z" fill="${white}" stroke="${ink}" stroke-width="1.75"/>
  <path d="M216 53V57.5" fill="none" stroke="${ink}" stroke-width="1.75" stroke-linecap="round"/>
  <path d="M95 56.5L100 38.5L105 56.5M96 43.5H104" fill="none" stroke="${text2}" stroke-width="1.25" stroke-linejoin="round"/>
  <path d="M175 56L180 38L185 56M176 43H184" fill="none" stroke="${text2}" stroke-width="1.25" stroke-linejoin="round"/>
  <path d="M250 59L255 41L260 59M251 46H259" fill="none" stroke="${text2}" stroke-width="1.25" stroke-linejoin="round"/>
  <path d="M327 77L332 59L337 77M328 64H336" fill="none" stroke="${text2}" stroke-width="1.25" stroke-linejoin="round"/>
  <path d="M405 114.6L410 96.6L415 114.6M406 101.6H414" fill="none" stroke="${text2}" stroke-width="1.25" stroke-linejoin="round"/>
  <path d="M100 38.5Q140 44 180 38Q217 45 255 41Q295 52 332 59Q372 80 410 96.6Q432 108 452 116" fill="none" stroke="${ink}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="452" cy="117" r="3.5" fill="${ink}"/>
  <path d="M475 124C490 127 498 138 515 145S565 152 600 153" fill="none" stroke="${fiber}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M475 126C492 133 502 152 525 158S572 163 600 164" fill="none" stroke="${fiber}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M461 126V119L468 114L475 119V126Z" fill="${white}" stroke="${fiber}" stroke-width="1.75" stroke-linejoin="round"/>
</g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${paper}"/>
  <path d="M0 0H${W}V6H0Z M0 ${H - 6}H${W}V${H}H0Z" fill="${ink}"/>
  <g transform="translate(72,72)">
    <text x="0" y="60" font-family="${DISPLAY}" font-size="76" font-weight="700" letter-spacing="4" fill="${ink}">PIDC</text>
    <text x="0" y="112" font-family="${MONO}" font-size="21" font-weight="600" letter-spacing="4" fill="${text2}">PISICO DATA CENTER</text>
    <path d="M0 150H300" stroke="${line}" stroke-width="1"/>
    <text x="0" y="186" font-family="${MONO}" font-size="14.5" font-weight="600" letter-spacing="1.5" fill="${text2}">SECTION A–A · WEST TO EAST</text>
    <text x="0" y="212" font-family="${MONO}" font-size="14.5" letter-spacing="1.5" fill="${text2}">SCHEMATIC · NOT TO SCALE</text>
    <text x="0" y="300" font-family="${DISPLAY}" font-size="44" font-weight="600" fill="${accent}">Why Vietnam,</text>
    <text x="0" y="352" font-family="${DISPLAY}" font-size="44" font-weight="600" fill="${accent}">and why Gia Lai</text>
  </g>
  ${terrain}
</svg>`;

mkdirSync('public/assets/og', { recursive: true });
writeFileSync('.shots/og-whyvietnam.svg', svg);
await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile('public/assets/og/why-vietnam.png');
const meta = await sharp('public/assets/og/why-vietnam.png').metadata();
console.log(`og: public/assets/og/why-vietnam.png ${meta.width}x${meta.height}`);
