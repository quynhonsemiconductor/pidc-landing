// og-aidc.mjs — generates public/assets/og/ai-data-center.png (1200x630) for the AI data
// center explainer from the rack anatomy diagram (BUILD-NOTES 4: one static OG per page,
// cropped from its own diagram — here RK-01, generated with the same geometry as
// src/components/diagrams/RackDiagram.astro). Presentation attributes are inlined so
// librsvg (sharp) renders it standalone. No invented figures: only the diagram's own
// markers plus the PIDC wordmark.
// Usage: node scripts/og-aidc.mjs   (then oxipng if available)
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
const cool = '#7a8082';
const isoLeft = '#f0f0e9';

const MONO = "'IBM Plex Mono','Menlo','Consolas',monospace";
const DISPLAY = "'Space Grotesk','Helvetica Neue',Helvetica,Arial,sans-serif";

// RK-01, viewBox 0 0 222 392 — same geometry as RackDiagram.astro, generated from the
// same coordinates (power shelves, vented; GPU compute trays on cold plates; switch
// trays with ports; coolant supply/return rails; markers 1–4).
const shelf = (y) => {
  let vents = '';
  for (let x = 50; x <= 154; x += 8)
    vents += `<path d="M${x} ${y + 3}V${y + 9}" stroke="${ink}" stroke-width="1"/>`;
  return `<rect x="40" y="${y}" width="130" height="12" fill="${ink}" fill-opacity=".18" stroke="${text2}" stroke-width=".8"/>${vents}`;
};
const tray = (y) => {
  let gpus = '';
  for (const gx of [48, 74, 100, 126])
    gpus += `<rect x="${gx}" y="${y + 3}" width="18" height="7" fill="${text2}"/>`;
  return (
    `<rect x="40" y="${y}" width="130" height="13" fill="${white}" stroke="${text2}" stroke-width=".8"/>${gpus}` +
    `<path d="M170 ${y + 4}H186" fill="none" stroke="${cool}" stroke-width="2" stroke-linecap="round" stroke-dasharray="5 3"/>` +
    `<path d="M170 ${y + 9}H194" fill="none" stroke="${ink}" stroke-width="2" stroke-linecap="round"/>`
  );
};
const sw = (y) => {
  let ports = '';
  for (let x = 50; x <= 162; x += 7)
    ports += `<circle cx="${x}" cy="${y + 4.5}" r="1.3" fill="${cool}"/>`;
  return `<rect x="40" y="${y}" width="130" height="9" fill="${isoLeft}" stroke="${text2}" stroke-width=".8"/>${ports}`;
};
const mk = (x, y, n) =>
  `<g><circle cx="${x}" cy="${y}" r="9" fill="${ink}" stroke="${white}" stroke-width="1.5"/>` +
  `<text x="${x}" y="${y}" font-family="${MONO}" font-weight="700" font-size="11" fill="${paper}" text-anchor="middle" dominant-baseline="central">${n}</text></g>`;

let trays = '';
for (const y of [54, 70, 86, 102, 118, 134, 150, 226, 242, 258, 274, 290, 306, 322])
  trays += tray(y);
let sws = '';
for (const y of [166, 178, 190, 202, 214]) sws += sw(y);

const rack = `
<g transform="translate(806,110) scale(1.05)">
  <rect x="30" y="14" width="150" height="364" rx="3" fill="${white}" stroke="${ink}" stroke-width="2"/>
  ${shelf(24)}${shelf(39)}
  ${trays}
  ${sws}
  ${shelf(338)}${shelf(353)}
  <path d="M186 34V364" fill="none" stroke="${cool}" stroke-width="2" stroke-linecap="round" stroke-dasharray="5 3"/>
  <path d="M194 30V368" fill="none" stroke="${ink}" stroke-width="2" stroke-linecap="round"/>
  <path d="M186.0 20.0L186.0 30.0M184.1 26.5L186.0 30.0L187.9 26.5" fill="none" stroke="${cool}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 3"/>
  <path d="M194.0 24.0L194.0 12.0M195.9 15.5L194.0 12.0L192.1 15.5" fill="none" stroke="${ink}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34 378v6M176 378v6" stroke="${ink}" stroke-width="2"/>
  ${mk(16, 94, 1)}${mk(16, 194, 2)}${mk(16, 37, 3)}${mk(208, 44, 4)}
</g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${paper}"/>
  <path d="M0 0H${W}V6H0Z M0 ${H - 6}H${W}V${H}H0Z" fill="${ink}"/>
  <g transform="translate(72,96)">
    <text x="0" y="60" font-family="${DISPLAY}" font-size="76" font-weight="700" letter-spacing="4" fill="${ink}">PIDC</text>
    <text x="0" y="112" font-family="${MONO}" font-size="21" font-weight="600" letter-spacing="4" fill="${text2}">PISICO DATA CENTER</text>
    <path d="M0 150H300" stroke="${line}" stroke-width="1"/>
    <text x="0" y="186" font-family="${MONO}" font-size="14.5" font-weight="600" letter-spacing="1.5" fill="${text2}">RK-01 · ILLUSTRATIVE GPU RACK</text>
    <text x="0" y="212" font-family="${MONO}" font-size="14.5" letter-spacing="1.5" fill="${text2}">NOT TO SCALE</text>
    <text x="0" y="330" font-family="${DISPLAY}" font-size="24" font-weight="600" fill="${accent}">What is an AI</text>
    <text x="0" y="362" font-family="${DISPLAY}" font-size="24" font-weight="600" fill="${accent}">data center?</text>
  </g>
  ${rack}
</svg>`;

mkdirSync('public/assets/og', { recursive: true });
writeFileSync('.shots/og-aidc.svg', svg);
await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile('public/assets/og/ai-data-center.png');
const meta = await sharp('public/assets/og/ai-data-center.png').metadata();
console.log(`og: public/assets/og/ai-data-center.png ${meta.width}x${meta.height}`);
