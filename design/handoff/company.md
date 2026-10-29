# Handoff — Company

- Purpose / first read / primary action: Verify who stands behind PIDC: entity facts, Pisico relationship, what is secured, leadership.
- Why this page pattern: profile: facts table + placeholder-driven milestones and people — because the CEO has not supplied milestones/names yet. (see BUILD-NOTES.md for build-wide rules)

## Data & content
| Field | Source (API/entity field) | Format | Empty value | Truncation |
|---|---|---|---|---|
| Entity facts (6) | demo verbatim (registry data) | c-glossary dl | n/a | n/a |
| Milestones ×4 | [CEO: date + milestone] | c-milestones | placeholder | n/a |
| People ×3 | [CEO: role + name + line] | c-people | placeholder | n/a |

## States
Default + VI. 'done' check marks unused until a milestone is confirmed secured.

## Interactions
pisico.vn external links (rel attr at build); contact CTA.

## Accessibility
a11y.mjs 0 violations 2026-10-29.

## Open questions
CEO: all milestone dates/items; all leadership roles+names+one-liners; confirm Chairman name + enterprise code stay public (registry data, kept verbatim from demo).

<!-- handoff.mjs:start — generated 2026-10-29, do not edit inside this block -->
## Generated facts
- Screen: `../screens/company.html` · Company · status planned
- Page pattern: **profile**
- States: `company--vi.html`

### Regions per size
- **1440**: header 0,0 1440×85 · main 0,85 1440×2222 · header 130,477 1180×86 · header 130,1468 319×86 · header 130,2022 319×138 · Contact 0,2307 1440×150 · footer 0,2457 1440×225
- **1280**: header 0,0 1280×85 · main 0,85 1280×2222 · header 50,477 1180×86 · header 50,1468 319×86 · header 50,2022 319×138 · Contact 0,2307 1280×150 · footer 0,2457 1280×225
- **1024**: header 0,0 1024×85 · main 0,85 1024×2369 · header 32,464 960×75 · header 32,1487 256×75 · header 32,2041 256×118 · Contact 0,2454 1024×143 · footer 0,2597 1024×227
- **390**: header 0,0 390×220 · main 0,220 390×3297 · header 16,638 358×70 · header 16,2220 358×70 · header 16,2869 358×70 · Contact 0,3517 390×233 · footer 0,3750 390×412

### Responsive behaviour (components that appear/disappear)
- no component changes visibility between sizes (layout reflows only)

### Components used (at 1440)
- `c-btn` ×1 · --primary
- `c-ceo` ×30
- `c-cta` ×1
- `c-figure` ×2
- `c-glossary` ×1
- `c-hero` ×1
- `c-milestones` ×1
- `c-people` ×1
- `c-phase` ×8
- `c-section` ×6 · --body
- `c-sitefoot` ×1
- `c-sitehead` ×1
- `c-terrainrule` ×1
- `r-section-split` ×2

### Outline
- h1 Part of the Pisico groupThành viên Tổng Công ty PISICO Bình 
- h2 The Pisico groupCác lĩnh vực của Pisico
- h2 MilestonesCác cột mốc
- h2 Who stands behind PIDCAi đứng sau PIDC
- h2 Talk to us about the campusTrao đổi với chúng tôi về dự án

### Navigation out of this screen
- `index.html`
- `why-vietnam.html`
- `ai-data-center.html`
- `company.html`
- `contact.html`

### Tokens referenced by the layout
--color-bg --color-text --fs-body --lh-body --font-ui --w-sheet --s-4 --s-6 --s-7 --s-8 --s-5
<!-- handoff.mjs:end -->
