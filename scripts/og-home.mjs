// og-home.mjs — generates public/assets/og/home.png (1200x630) for the home page from the
// SLD-00 diagram (BUILD-NOTES 4: one static OG per page, cropped from its own diagram).
// The SLD geometry is the same as src/components/diagrams/SldDiagram.astro (EN labels), with
// presentation attributes inlined so librsvg (sharp) renders it standalone. No invented
// figures: only the diagram's own labels plus the PIDC wordmark.
// Usage: node scripts/og-home.mjs   (then oxipng if available)
import { mkdirSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const W = 1200;
const H = 630;
// token values (src/styles/tokens.css)
const paper = '#fafaf7';
const ink = '#1a1d1f';
const text2 = '#565b5d';
const line = '#d8d8d2';
const grid = '#ecece6';
const accent = '#c8401a';
const fiber = '#7a8082';

const MONO = "'IBM Plex Mono','Menlo','Consolas',monospace";
const DISPLAY = "'Space Grotesk','Helvetica Neue',Helvetica,Arial,sans-serif";

// SLD-00, viewBox 0 0 360 620 — geometry verbatim from the mockup, translated to attributes.
const sld = `
<g transform="translate(796,10) scale(0.984)">
  <defs>
    <pattern id="og-grid" width="12" height="12" patternUnits="userSpaceOnUse">
      <path d="M12 0H0V12" fill="none" stroke="${grid}" stroke-width="1"/>
    </pattern>
    <pattern id="og-racks" x="84" y="356" width="12" height="26" patternUnits="userSpaceOnUse">
      <rect x="1.5" y="0" width="8" height="18" fill="${text2}"/>
    </pattern>
  </defs>
  <rect width="360" height="620" fill="#ffffff"/>
  <rect width="360" height="620" fill="url(#og-grid)"/>
  <g fill="none" stroke="${ink}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="90" cy="76" r="18" fill="#ffffff"/>
    <path d="M90 76V64.5M90 76L80 81.75M90 76L100 81.75"/>
    <circle cx="90" cy="76" r="2.2" fill="${ink}" stroke="none"/>
    <rect x="162" y="58" width="36" height="36" fill="#ffffff"/>
    <path d="M162 94L198 58"/>
    <circle cx="270" cy="76" r="18" fill="#ffffff"/>
    <path d="M259 76c2.75-6 8.25-6 11 0s8.25 6 11 0"/>
    <path d="M90 94V146M180 94V146M270 94V146"/>
    <path d="M60 146H300" stroke-width="5"/>
    <path d="M180 146V170M180 182V214"/>
    <rect x="174" y="170" width="12" height="12" fill="#ffffff"/>
    <circle cx="180" cy="230" r="16"/>
    <circle cx="180" cy="252" r="16"/>
    <path d="M180 268V294"/>
    <path d="M92 294H268" stroke-width="3.5"/>
    <path d="M140 294V326M220 294V326"/>
    <rect x="70" y="326" width="220" height="86" fill="#ffffff" stroke-width="1.5"/>
  </g>
  <rect x="84" y="356" width="192" height="44" fill="url(#og-racks)"/>
  <rect x="20" y="198" width="320" height="288" fill="none" stroke="${text2}" stroke-width="1.25" stroke-dasharray="7 5"/>
  <g fill="none" stroke="${fiber}" stroke-width="1.5" stroke-dasharray="6 5">
    <path d="M110 412V500M200 412V500"/>
    <path d="M96 528V510L110 500L124 510V528Z" fill="#ffffff" stroke-linejoin="round"/>
    <path d="M186 528V510L200 500L214 510V528Z" fill="#ffffff" stroke-linejoin="round"/>
    <path d="M110 528V588M200 528V588M104 582L110 590L116 582M194 582L200 590L206 582" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <path d="M20 548c5.3-4 10.7-4 16 0s10.7 4 16 0s10.7-4 16 0s10.7 4 16 0s10.7-4 16 0s10.7 4 16 0s10.7-4 16 0s10.7 4 16 0s10.7-4 16 0s10.7 4 16 0s10.7-4 16 0s10.7 4 16 0s10.7-4 16 0s10.7 4 16 0s10.7-4 16 0s10.7 4 16 0s10.7-4 16 0s10.7 4 16 0s10.7-4 16 0s10.7 4 16 0" fill="none" stroke="${fiber}" stroke-width="1.25" opacity="0.45"/>
  <path d="M0 598H360" stroke="${line}" stroke-width="1"/>
  <!-- labels (EN, the diagram's own) -->
  <g font-family="${MONO}">
    <text x="308" y="150" font-size="13" font-weight="600" fill="${accent}">220 kV</text>
    <text x="16" y="24" font-size="11" font-weight="600" letter-spacing="1.5" fill="${text2}">GENERATION</text>
    <text x="32" y="218" font-size="11" font-weight="600" letter-spacing="1.5" fill="${ink}">PIDC CAMPUS</text>
    <text x="278" y="298" font-size="12" font-weight="600" fill="${accent}">MV</text>
    <text x="16" y="612" font-size="9.5" font-weight="600" letter-spacing="1" fill="${text2}">SLD-00 · CONCEPT · NOT TO SCALE</text>
  </g>
  <g font-family="${DISPLAY}">
    <text x="90" y="47" font-size="12.5" text-anchor="middle" fill="${ink}">Wind</text>
    <text x="180" y="47" font-size="12.5" text-anchor="middle" fill="${ink}">Solar</text>
    <text x="270" y="47" font-size="12.5" text-anchor="middle" fill="${ink}">Hydro</text>
    <text x="206" y="238" font-size="12.5" fill="${ink}">Substation</text>
    <text x="84" y="346" font-size="12.5" font-weight="600" fill="${ink}">AI data halls</text>
    <text x="228" y="512" font-size="12.5" fill="${ink}">Cable landings</text>
  </g>
  <g font-family="${DISPLAY}" font-size="10.5" fill="${text2}">
    <text x="308" y="164">grid</text>
    <text x="206" y="253">HV / MV</text>
    <text x="228" y="527">Quy Nhơn</text>
  </g>
  <g font-family="${MONO}" font-size="12" font-weight="600" fill="${fiber}">
    <text x="118" y="574">ADC</text>
    <text x="208" y="574">SJC2</text>
    <text x="155" y="452" text-anchor="middle">Fiber</text>
  </g>
  <text x="146" y="314" font-family="${DISPLAY}" font-size="10.5" fill="${text2}">A</text>
  <text x="226" y="314" font-family="${DISPLAY}" font-size="10.5" fill="${text2}">B</text>
</g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${paper}"/>
  <path d="M0 0H${W}V6H0Z M0 ${H - 6}H${W}V${H}H0Z" fill="${ink}"/>
  <g transform="translate(72,96)">
    <text x="0" y="60" font-family="${DISPLAY}" font-size="76" font-weight="700" letter-spacing="4" fill="${ink}">PIDC</text>
    <text x="0" y="112" font-family="${MONO}" font-size="21" font-weight="600" letter-spacing="4" fill="${text2}">PISICO DATA CENTER</text>
    <path d="M0 150H300" stroke="${line}" stroke-width="1"/>
    <text x="0" y="186" font-family="${MONO}" font-size="14.5" font-weight="600" letter-spacing="1.5" fill="${text2}">SLD-00 · CONCEPT SINGLE-LINE DIAGRAM</text>
    <text x="0" y="212" font-family="${MONO}" font-size="14.5" letter-spacing="1.5" fill="${text2}">220 kV GRID · GIA LAI, VIETNAM</text>
    <text x="0" y="330" font-family="${DISPLAY}" font-size="24" font-weight="600" fill="${accent}">Building AI infrastructure</text>
    <text x="0" y="362" font-family="${DISPLAY}" font-size="24" font-weight="600" fill="${accent}">where the power is.</text>
  </g>
  ${sld}
</svg>`;

mkdirSync('public/assets/og', { recursive: true });
writeFileSync('.shots/og-home.svg', svg);
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/assets/og/home.png');
const meta = await sharp('public/assets/og/home.png').metadata();
console.log(`og: public/assets/og/home.png ${meta.width}x${meta.height}`);
