# Handoff — Home / The project

- Purpose / first read / primary action: Convince a capital partner in one scroll: the campus is real, engineered, de-risked (power, fiber, land, phases) and route them to contact.
- Why this page pattern: overview-evidence: three concrete proofs + schematics, not a slogan wall — because the audience scans for hard facts before copy. (see BUILD-NOTES.md for build-wide rules)

## Data & content
| Field | Source (API/entity field) | Format | Empty value | Truncation |
|---|---|---|---|---|
| Site facts (statband) | CEO-supplied; 220 kV is live value | mono figure + source/as-of line | `[CEO: …]` placeholder | never — wraps |
| SLD-00 / terrain / iso figures | demo SVGs, byte-verbatim | SVG in c-figure | n/a | n/a |
| Location map LM-01 | content/location-map.svg | SVG | n/a | n/a |

## States
Default only. VI state = `index--vi.html` (data-lang=vi). No empty/loading: static page.

## Interactions
Nav links, proof anchors, CTA → contact. Language switch = plain links (BUILD-NOTES 3). Focus order: nav → hero CTA → statband → sections → CTA → footer.

## Accessibility
Landmarks header/main/footer; a11y.mjs 0 violations 2026-10-29; contrast AA incl. c-ceo (#9c3011 on tint); SLD carries aria-label + data-label EN/VI.

## Open questions
CEO values for the 4 statband placeholders + sources; confirm phases count; OG crop choice.

<!-- handoff.mjs:start — generated 2026-10-29, do not edit inside this block -->
## Generated facts
- Screen: `../screens/index.html` · Home / The project · status planned
- Page pattern: **overview-evidence**
- States: `index--vi.html`

### Regions per size
- **1440**: header 0,0 1440×85 · main 0,85 1440×4831 · Site facts · Thông số khu đất 0,942 1440×376 · header 130,1007 1180×21 · header 130,1383 1180×138 · header 130,3620 319×458 · Contact 0,4940 1440×150 · footer 0,5090 1440×225
- **1280**: header 0,0 1280×85 · main 0,85 1280×4831 · Site facts · Thông số khu đất 0,942 1280×376 · header 50,1007 1180×21 · header 50,1383 1180×138 · header 50,3620 319×458 · Contact 0,4940 1280×150 · footer 0,5090 1280×225
- **1024**: header 0,0 1024×85 · main 0,85 1024×4758 · Site facts · Thông số khu đất 0,942 1024×495 · header 32,1007 960×21 · header 32,1502 960×118 · header 32,3539 256×465 · Contact 0,4867 1024×143 · footer 0,5010 1024×227
- **390**: header 0,0 390×220 · main 0,220 390×6018 · Site facts · Thông số khu đất 0,1738 390×773 · header 16,1787 358×21 · header 16,2560 358×107 · header 16,4662 358×358 · Contact 0,6262 390×233 · footer 0,6495 390×412

### Responsive behaviour (components that appear/disappear)
- no component changes visibility between sizes (layout reflows only)

### Components used (at 1440)
- `c-btn` ×5 · --primary
- `c-callout` ×1
- `c-ceo` ×9
- `c-cta` ×1
- `c-figure` ×4
- `c-glossary` ×1
- `c-hero` ×1
- `c-phase` ×6
- `c-proof` ×3
- `c-section` ×3
- `c-sitefoot` ×1
- `c-sitehead` ×1
- `c-statband` ×1
- `c-terrainrule` ×1
- `r-diagram` ×3
- `r-hero-figure` ×1
- `r-proof-grid` ×1
- `r-section-split` ×1

### Outline
- h1 An international, green, resilient AI campus in a renewable-
- h2 Power, fiber and land in one placeĐiện, cáp quang và đất đai
- h3 A province with surplus powerTỉnh dư thừa điện năng
- h3 Two international cables land nearbyHai tuyến cáp quang biển
- h3 Room to grow on one siteMở rộng trên cùng một khu đất
- h2 Planned for dense AI compute, built in phasesDành cho điện t
- h2 Talk to us about the campusTrao đổi với chúng tôi về dự án

### Navigation out of this screen
- `why-vietnam.html`
- `ai-data-center.html`
- `company.html`
- `contact.html`

### Tokens referenced by the layout
--color-bg --color-text --fs-body --lh-body --font-ui --w-sheet --s-4 --s-6 --s-7 --w-fig-hero --s-8 --s-3 --w-fig-iso --s-5
<!-- handoff.mjs:end -->
