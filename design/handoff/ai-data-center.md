# Handoff — AI data centers explainer

- Purpose / first read / primary action: Explain the domain to non-specialist stakeholders without dumbing down: what an AI DC is, why power decides location, why this site.
- Why this page pattern: long-form explainer with sticky TOC rail — because a 6-section technical read needs orientation; diagram after lead so neither rail column runs empty. (see BUILD-NOTES.md for build-wide rules)

## Data & content
| Field | Source (API/entity field) | Format | Empty value | Truncation |
|---|---|---|---|---|
| Comparison table | demo copy verbatim | real <table> (c-compare) | n/a | mobile attr()-labels |
| Charts (TWh, PUE, rack kW) | demo SVGs | SVG in c-figure | n/a | n/a |

## States
Default + VI. Print = clean PDF (BUILD-NOTES 7).

## Interactions
TOC rail scrollspy: build sets aria-current on the section in view (IntersectionObserver or CSS scroll-driven — implementer's choice; mockups show it static on the first item). 
TOC anchor links (CSS sticky, no JS); 'See the site' → why-vietnam; contact CTA.

## Accessibility
a11y.mjs 0 violations 2026-10-29; table th scope; figures titled (title/desc at build per BUILD-NOTES 2).

## Open questions
None blocking.

<!-- handoff.mjs:start — generated 2026-10-29, do not edit inside this block -->
## Generated facts
- Screen: `../screens/ai-data-center.html` · AI data centers explainer · status draft
- Page pattern: **long-form-explainer**
- States: `ai-data-center--vi.html`

### Regions per size
- **1440**: header 0,0 1440×85 · main 98,85 1244×6043 · On this page 130,85 220×251 · header 398,1234 242×191 · header 398,1737 242×297 · header 398,2754 242×244 · header 398,3445 242×138 · header 398,4642 242×244 · header 398,5063 242×138 · header 398,5801 242×191 · Contact 0,6128 1440×150 · footer 0,6277 1440×225
- **1280**: header 0,0 1280×85 · main 18,85 1244×6043 · On this page 50,85 220×251 · header 318,1234 242×191 · header 318,1737 242×297 · header 318,2754 242×244 · header 318,3445 242×138 · header 318,4642 242×244 · header 318,5063 242×138 · header 318,5801 242×191 · Contact 0,6128 1280×150 · footer 0,6277 1280×225
- **1024**: header 0,0 1024×85 · main 0,85 1024×5839 · On this page 32,85 960×251 · header 32,1425 256×118 · header 32,1886 256×203 · header 32,2832 256×160 · header 32,3474 256×118 · header 32,4640 256×160 · header 32,4949 256×118 · header 32,5597 256×160 · Contact 0,5924 1024×143 · footer 0,6067 1024×227
- **390**: header 0,0 390×220 · main 0,220 390×8685 · On this page 16,220 358×251 · header 16,1657 358×70 · header 16,2503 358×144 · header 16,4465 358×107 · header 16,5383 358×70 · header 16,6726 358×107 · header 16,7239 358×70 · header 16,8434 358×107 · Contact 0,8905 390×233 · footer 0,9138 390×412

### Responsive behaviour (components that appear/disappear)
- no component changes visibility between sizes (layout reflows only)

### Components used (at 1440)
- `c-btn` ×1 · --primary
- `c-compare` ×1
- `c-cta` ×1
- `c-figure` ×5
- `c-glossary` ×1
- `c-hero` ×1
- `c-phase` ×4
- `c-section` ×14 · --body
- `c-sitefoot` ×1
- `c-sitehead` ×1
- `c-table` ×1
- `r-chart` ×3
- `r-diagram` ×2
- `r-section-split` ×7
- `r-sourcebox` ×1
- `r-tocrail` ×1

### Outline
- h1 What is an AI data center?Trung tâm dữ liệu AI là gì?
- h2 Training and inferenceHuấn luyện và suy luận
- h3 TrainingHuấn luyện
- h3 InferenceSuy luận
- h2 The same kind of building, at many times the powerCùng loại 
- h2 Why power decides where they are builtVì sao nguồn điện quyế
- h2 Cooling and waterLàm mát và nguồn nước
- h2 What a campus brings to a provinceMột khu dữ liệu mang lại g
- h2 Terms you will hearCác thuật ngữ thường gặp
- h2 Where the numbers come fromNguồn số liệu
- h2 Questions about the campus?Bạn có câu hỏi về dự án?

### Navigation out of this screen
- `index.html`
- `why-vietnam.html`
- `ai-data-center.html`
- `company.html`
- `contact.html`
- `index.html#why`

### Tokens referenced by the layout
--color-bg --color-text --fs-body --lh-body --font-ui --w-sheet --s-4 --s-6 --s-7 --w-fig-rack --s-8 --s-5 --w-fig-loop
<!-- handoff.mjs:end -->
