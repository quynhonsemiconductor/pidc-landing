# PIDC Landing — DESIGN.md

> Source of truth for every screen. Chosen direction: **Drawing Set** (owner, 2026-10-29), light ground
> everywhere, no dark band on any page. Borrows from Prospectus (sourced stats band) and Highland Terrain
> (terrain cross-section as recurring motif) — and nothing else. Tokens live in `tokens.css`; screens
> never hard-code values outside it.

## 1. Point of view
The site reads like a well-set construction drawing set: Stripe-grade typographic hierarchy with the
annotation language of engineering documents. For capital partners and GPU engineers the credibility
carrier is evidence — the project's own schematics, sourced numbers, plain honesty about NDA gating —
never stock photography or renders.
Taste anchors: Stripe (type-led calm hierarchy) · engineering-drawing tradition (sheet numbers, title
blocks, revision dates, red callouts) · CoreWeave (single disciplined system, numbers as specs).
Rejected this round: Prospectus dark band (owner: light everywhere), Highland Terrain palette + oversized
headline (owner: only the terrain motif borrowed).

## 2. Tokens
### Colour roles
| Role | Token | Value | Use / never use |
|---|---|---|---|
| Background (paper) | `--color-bg` | `#fafaf7` | page ground; header/CTA sit on it |
| Surface (sheet) | `--color-surface` | `#ffffff` | figure interiors, note cards — never full-page chrome |
| Ink | `--color-text` | `#1a1d1f` | all text, solid lines, structure |
| Ink secondary | `--color-text-2` | `#565b5d` | captions, sources; AA on paper |
| THE accent | `--color-accent` | `#c8401a` | callout markers, LIVE values (kV), primary CTA, NDA bar, focus. Never decoration |
| Links/citations | `--color-accent-2` | `#1a1d1f` | ink; the underline carries them |
| Hairline | `--color-line` | `#d8d8d2` | rules, sheet separations |
| Diagram power | `--color-power` | `#1a1d1f` | solid ink lines |
| Diagram fiber/coolant | `--color-fiber`/`--color-cool` | `#7a8082` | dashed |
| Drawing grid | `--color-grid` | `#ecece6` | hatched ground |
| Vegetation | `--color-ok` | `#a8ae9f` | neutral gray in terrain figures, no second hue |

One hue has ONE job: red = attention (callout + live value). No other saturated hue anywhere.

### Type
- Families: **Space Grotesk** (display: H1/H2/H3, proof titles, buttons) · **Inter** (body) ·
  **IBM Plex Mono** (annotation layer: sheet numbers, eyebrows, figure caps, units, kV values, stats,
  TOC rail). All three carry the Vietnamese subset (fontcheck 2026-10-29).
- **Fonts decision (SA ask, 2026-10-29): KEEP IBM Plex Mono.** Measured self-host woff2 (latin +
  vietnamese subsets only): Inter 400/500/600 = 87 KB, Space Grotesk 500/600/700 = 52 KB,
  IBM Plex Mono 400/500/600 = 42 KB. Dropping Plex Mono for Inter `tabular-nums` saves 42 KB but the
  annotation layer loses its instrument voice — sheet numbers, kV values and figure caps would render
  in the body font and stop reading as "drawing annotation" (the core of the picked direction).
  Space Grotesk labels + Inter tabular-nums was tested as alternative: two sans voices blur the
  annotation/body distinction. Verdict: the mono layer is meaning, not styling. Build may trim Plex
  Mono to 400;600 (drop 500) to save ~14 KB.
- Scale (6 sizes): 13/1.4 meta · 14/1.5 small · 17/1.5 body · 20/1.3 title · 28/1.1 figure ·
  hero clamp(2.3rem,4.6vw,3.6rem)/1.22 (looser than 1.2 for VI stacked diacritics).
- Weights: 3 (400 body, 500 medium, 600 semibold). `tabular-nums` on all figures/units/dates.
- Max line length ~68ch; annotation layer never wraps to full measure.

### Space, radius, elevation, motion
4px scale (--s-1…--s-8). Radius 0–2px everywhere (drawing sheets are square). Elevation: none —
hairlines separate; the only shadow token is `--shadow-overlay` for a future modal, unused on pages.
Motion: quiet — state changes only (hover ink-darken, focus 2px red outline offset 2, 160ms
cubic-bezier(.2,.7,.2,1)); the SLD's flow-dash animation is the one ambient move, off under
`prefers-reduced-motion`.

### Icons & imagery
No icon set — numbers and diagrams do the marking (site nav is text; statuses are words).
Imagery = the project's OWN SVG schematics only (SLD, terrain cross-section, rack anatomy, cooling loop,
location map LM-01, charts). Never stock photos, never renders, never maker-drawn illustration.
Every figure keeps its drawing honesty: sheet id + "SCHEMATIC · NOT TO SCALE".

## 3. Layout grammar
- Shell: text top nav (5 items + EN|VI toggle), `--w-sheet` 1180px page column, paper ground.
- Home: hero (badge + H1 + SLD figure) → site-facts statband → Power/Fiber/Land proofs + location map →
  terrain cross-section → phases → CTA. Ruled hairlines separate sections; sheet numbers S-01… auto.
- Inner pages: `r-tocrail` — sticky 220px TOC left rail on >1024, first figure after the lead
  paragraph (never beside the H1), rail stacks above content at ≤1024.
- Breakpoints: 1440/1280 full rail; 1024 rail collapses; 390 single column, comparison table becomes
  attr()-labelled rows.
- Print: `@media print` — no nav/switcher/CTA buttons, URLs after links, figures unbreakable, red
  placeholders keep their warning color (print-color-adjust). Partners paste pages into memos.

## 4. Components
Full inventory + every state: `components/catalog.html`; classes in `components/components.css`
(c-*) and `components/recipes.css` (r-*, diagram languages s-*/x-*/iso-*/rk-*/cl-*/lm-*).
Key decisions:
- `c-btn` — Space Grotesk 600, square corners, hairline border; primary = red fill (red job: attention).
- `c-statband` — facts band: mono value + label + source/as-of line. NDA values read "Under NDA"
  plainly (gray), never hidden. CEO-unknown values are `c-ceo` placeholders.
- `c-ceo` — the placeholder convention: red dashed box, mono, `[CEO: <what is needed>]`, EN and VI.
  Cannot be mistaken for final copy; survives print.
- `c-figure` — white drawing sheet, bg-colored title/cap strip, square corners, unbreakable in print.
- `c-proof` — 44px red callout circle index (matches SVG .mk markers) + Space Grotesk title.
- `r-tocrail` — mono labels, hairline left rule, red current marker.
- `c-choice` — native radios, checked = ink double border; no JS.
- `c-milestones`/`c-people` — placeholder-driven until CEO supplies content; ink ✓ for secured items.
- `c-terrainrule` — the borrowed motif: 3 stepped ink segments (highlands → pass → coast), decorative
  separator before CTAs. Never carries meaning alone.

## 5. Patterns
Long-form explainer = r-tocrail + sections with sheet numbers; evidence lists = c-proof/c-stat;
comparison = real `<table>` (c-compare wraps c-table); glossary = dl; sources = r-sourcebox under every
figure-bearing section. Contact = radio routing → disabled form + `mailto:contact@pidc.vn` fallback.
Language: EN default in DOM, VI present via `lang="vi"` + the demo's `[data-lang]` CSS mechanism
(build: Astro i18n, plain-link switch, no JS).

## 6. Content rules
Voice: engineering-led, factual, calm; the demo's copy is verbatim EN+VI. Numbers SI exactly as demo
(220 kV, 130 kW, 415 TWh, PUE 1.0); every figure carries source + as-of when the statband states it.
VI: body ≥16px, line-height ≥1.5, diacritics never clipped; VI strings run ~20–30% longer — buttons and
rail sized for them. NEVER invent a figure, date, name or milestone: unknowns are `c-ceo` placeholders.

## 7. Accessibility
AA contrast on paper (ink 15.9:1, text-2 5.9:1, red 4.9:1); diagrams keep label contrast; status never
colour-alone; focus = 2px red outline, offset 2; targets ≥44px; keyboard path for every control
(radios native, nav links); reduced-motion kills the flow animation; text scaling to 200% (ch-based
measures, no fixed heights on text).

## 8. Never do
- No dark band anywhere (owner decision). No dark theme.
- Red outside its one job. A second saturated hue. Gradient, glow, glass, noise, shadows-as-depth.
- Stock photos; renders of "the campus"; maker-drawn illustration or icons.
- Metaphor as chrome: sheet numbers/title blocks live in section headers and annotations only.
- Fake precision: no rounded invented numbers; NDA stays visible as "Under NDA".
- All-caps tracked labels outside the mono annotation layer. More than 3 type families.
- Charts that answer no question; the same figure repeated in two places.
