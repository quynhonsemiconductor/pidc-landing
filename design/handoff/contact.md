# Handoff — Contact

- Purpose / first read / primary action: Route the three audiences; collect nothing yet (disabled submit + mailto fallback).
- Why this page pattern: contact routing: native radio cards → form UI. Capital partners get the IM request CTA (text pending CEO). (see BUILD-NOTES.md for build-wide rules)

## Data & content
| Field | Source (API/entity field) | Format | Empty value | Truncation |
|---|---|---|---|---|
| Audience ×3 | demo verbatim | c-choice radios | n/a | n/a |
| Form fields ×4 | [CEO: field label] | c-formfield | placeholder | n/a |

## States
Default (+VI). disabled-submit is the default state — submit visibly disabled with not-live callout + mailto fallback.

## Interactions
Radios native (keyboard OK, probe 20/20 stops); mailto link = primary action until backend exists.

## Accessibility
a11y.mjs 0 violations 2026-10-29; fieldset/legend; radio target = full card label (input 24px inside ≥44px label).

## Open questions
CEO: confirm 'Request the information memorandum' CTA wording (EN + VI); field labels EN+VI; mailbox is contact@pidc.vn (SA decision); form backend later.

<!-- handoff.mjs:start — generated 2026-10-29, do not edit inside this block -->
## Generated facts
- Screen: `../screens/contact.html` · Contact · status planned
- Page pattern: **contact-routing**
- States: `contact--vi.html`

### Regions per size
- **1440**: header 0,0 1440×85 · main 0,85 1440×1979 · header 130,423 319×86 · header 130,940 319×86 · header 130,1792 319×86 · footer 0,2078 1440×225
- **1280**: header 0,0 1280×85 · main 0,85 1280×1979 · header 50,423 319×86 · header 50,940 319×86 · header 50,1792 319×86 · footer 0,2078 1280×225
- **1024**: header 0,0 1024×85 · main 0,85 1024×1987 · header 32,410 256×75 · header 32,949 256×77 · header 32,1800 256×75 · footer 0,2086 1024×227
- **390**: header 0,0 390×220 · main 0,220 390×2543 · header 16,530 358×70 · header 16,1222 358×73 · header 16,2311 358×70 · footer 0,2777 390×412

### Responsive behaviour (components that appear/disappear)
- no component changes visibility between sizes (layout reflows only)

### Components used (at 1440)
- `c-btn` ×2 · --primary
- `c-callout` ×3
- `c-ceo` ×14
- `c-choice` ×1
- `c-formfield` ×4
- `c-glossary` ×1
- `c-hero` ×1
- `c-section` ×3
- `c-sitefoot` ×1
- `c-sitehead` ×1
- `c-terrainrule` ×1
- `r-section-split` ×3

### Outline
- h1 Talk to us about the campusTrao đổi với chúng tôi về dự án
- h2 I am aTôi là
- h2 [CEO: form section title][CEO: VI wording]
- h2 OfficeVăn phòng

### Navigation out of this screen
- `index.html`
- `why-vietnam.html`
- `ai-data-center.html`
- `company.html`
- `contact.html`

### Tokens referenced by the layout
--color-bg --color-text --fs-body --lh-body --font-ui --w-sheet --s-4 --s-6 --s-7 --s-8 --s-5 --s-3 --s-1 --s-2
<!-- handoff.mjs:end -->
