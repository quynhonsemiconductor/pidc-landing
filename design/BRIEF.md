# PIDC Landing — Design Brief (v1, 2026-10-29)

Marketing site (pidc.vn) for PIDC — Pisico Data Center JSC, the project company building an AI
data-center campus in Gia Lai, Vietnam. Five bilingual pages (EN default, VI). This phase produces
2–3 distinct design directions for the owner's pick; DESIGN.md lock comes after the pick.
Source content: owner's demo `~/Desktop/qnsc/pidc-site/` (read-only; copy verbatim).

## 1. Who uses it
- **Capital partners:** infrastructure investors/funds evaluating a hundreds-of-MW build-out. Financially
  literate, engineering-literate, read everything, compare against global deals. EN primary.
- **AI compute tenants:** platform/infra teams deciding where GPU clusters live. Sceptical of marketing,
  respect technical specificity (130 kW racks, GB200 NVL72, PUE, 220 kV). EN primary.
- **Engineering partners + Vietnamese officials/partners:** EPCs, grid, provincial government. VI matters.
- **Why they engage:** conviction for a large allocation/deployment. The site's job is credibility, not delight.

## 1b. Business profile
| Signal | Value |
|---|---|
| Category & model | Pre-construction AI data-center campus; site exists, capacity figures NDA-gated |
| Price position | Enterprise (wholesale deals, not self-serve) |
| Trust burden | Very high — capital allocation + advanced-GPU deployment on a Vietnamese project company |
| Usage pattern | One-off deep read (days, few visits, every page) — not daily |
| Market & culture | International EN audience + Vietnamese VI audience; must read first-world credible to both |
| Competitive stance | Credible challenger — not Equinix; wins on power surplus + cable landings + land, shown as evidence |
| Brand personality | Engineering-led, factual, calm, international — never hype, glossy, crypto-adjacent, or "Asia discount" |
| Emotion at key moment | Certainty: "these people understand 220 kV, liquid cooling, and submarine cables" |
| Constraints | No real building photos (not built); diagrams ARE the imagery. Capacity under NDA. Astro 7 + Tailwind 4 target, Lighthouse ≥ 95, self-hosted fonts, EN/VI both first-class |

**Design consequences:**
- Because trust burden is capital, the design carries **engineering evidence**: the demo's own schematics
  (single-line diagram, terrain cross-section, rack/cooling diagrams, sourced charts) are the hero imagery —
  no stock photos, no glossy 3D renders.
- Because usage is a one-off deep read, typography and long-form reading comfort outrank scroll theatrics;
  navigation must orient (where am I in a 6-section explainer).
- Because both languages are first-class, every font choice is verified for Vietnamese diacritics and VI
  strings set the same hierarchy (VI runs ~15–20% longer).
- Because the project is early, tone = "planned, documented, phased", stated plainly (the demo already does
  this well; keep its honesty — "CONCEPT · NOT TO SCALE", "under NDA").

## 2. Where it is used
| Context | Device / size | What they do |
|---|---|---|
| Partner's desk, evaluation | laptop 1440 / 1280 | Read all 5 pages, follow sources, email under NDA |
| Shared in investment memos | print/PDF, tablet 1024 | Pages must read without interaction |
| First touch from a conference/link | phone 390 | Convince + route to contact; diagrams must scale down legibly |

## 3. Jobs, in priority order
1. Convince a capital partner the project is real, engineered, and de-risked (power, fiber, land, phases).
2. Convince a compute tenant the site fits dense GPU builds (density, cooling, connectivity facts).
3. Route the right party to contact (three audiences named on the contact page).
4. Explain the domain to non-specialist stakeholders (ai-data-center explainer page).

**Design consequence:** Home is an evidence surface — power/fiber/land as three concrete proofs, not a slogan wall.

## 4. Hard constraints
- Language: EN default, VI via inline bilingual pattern (`lang="vi"`/`data-lang` in demo; Astro i18n in build).
  Both languages render the same hierarchy.
- Fonts: self-hosted (no Google CDN at runtime), **Vietnamese subset verified** (fontcheck.sh) — record in §8.
- Numbers: SI units as in demo (220 kV, 130 kW, 415 TWh, PUE 1.0); no localization of unit spacing.
- Readability: body ≥ 17px desktop, ≥ 16px mobile; meta ≥ 14px; WCAG AA; diagrams AA for labels.
- Layouts: desktop-first 1440×900, hold at 1280 and 1024; mobile 390×844; no horizontal scroll.
- Charts/diagrams: accessible alternatives (the demo's SVGs carry bilingual text — keep, don't rasterize).
- Target stack Astro 7 + Tailwind 4; design stays stack-neutral HTML/CSS.
- Public repo: no Tier 0/1 identifiers; only `contact@pidc.vn`.

## 4b. Taste anchors (inferred — owner confirms via direction pick)
- **Anchors:** Stripe (type-led hierarchy, calm engineering credibility) · Vantage Data Centers /
  Stack Infrastructure (category standard: big photography + calm sans) · Bauhaus/engineering-drawing
  tradition (grid, schematics, numbered annotations — matches the demo's own SLD-00 aesthetic).
- **Position:** familiar ←→ distinctive: **balanced, leaning distinctive** — the demo's schematic-first
  content is already unlike the category's render-first sites; directions should keep that difference.
- **Dislikes (from owner brief):** "generic", "AI slop". Fading list applies: no gradient text, no bento
  default, no glassmorphism, no 3D blobs.

## 5. Anti-slop — project additions
- No stock photos of other people's data centers; no fake aerial renders of "the campus".
- No hero copy that any DC company could sign ("Empowering digital futures…"). Copy is the demo's own.
- Schematics keep their drawing labels (SLD-00, NOT TO SCALE) — that honesty is the brand.

## 6. Detail checklist — project additions
- Bilingual pairs never orphan a language in a screenshot crop; VI is not an afterthought style.
- Data figures cite their source line exactly as the demo does ("Where the numbers come from").
- NDA gating stated plainly, not hidden in fine print.

## 7. Screen content (identical across directions)
All copy comes verbatim from the demo (EN + VI). Key strings for the direction screens:

**Index (home)**
- Badge: "In development · Gia Lai, Vietnam / Đang phát triển · Gia Lai, Việt Nam"
- H1: "An international, green, resilient AI campus in a renewable-surplus province." + VI
- Section: "Power, fiber and land in one place" — three proofs:
  - Power: "A province with surplus power" — Gia Lai wind/solar/hydro surplus, site beside 220 kV grid.
  - Connectivity: "Two international cables land nearby" — ADC + SJC2 at Quy Nhơn, in service 2025, separate fiber routes.
  - Land: "Room to grow on one place" — phased on a single parcel.
- SLD-00 single-line diagram (generation → substation → campus → cable landings, bilingual labels).
- Terrain cross-section: Highlands → Mountain pass → Coast/Quy Nhơn.
- "Planned for dense AI compute, built in phases" — phased site plan 1–6, NDA note.
- CTA: "Talk to us about the campus".

**AI data center (explainer, deepest inner page)**
- H1 "What is an AI data center?" — building powered/cooled for GPU clusters.
- Training vs inference diagrams; rack anatomy (cold plates, switch trays, power shelves, coolant).
- Comparison table: conventional vs AI DC (power/rack <10 kW vs ~130 kW, cooling, network, size, grid 110–220 kV).
- Power: 415 TWh (2024) → 945 TWh (2030, IEA) chart; "why power decides location" → site beside 220 kV.
- Cooling & water: liquid loop diagram, PUE explanation + chart.
- Local benefits; glossary; sources; contact CTA.

Full copy lives in `content/` (copied from demo when screens are built in the next phase).

## 8. Verified fonts (fontcheck.sh, vietnamese subset)
HAS: Inter · IBM Plex Sans · IBM Plex Mono · Archivo · Space Grotesk · Manrope · Source Serif 4 ·
Newsreader · Fraunces · Geist · Geist Mono · JetBrains Mono · Libre Franklin · Public Sans
NO (must not use): Sora · Schibsted Grotesk · Instrument Sans
Rule: pairing must cover VN in BOTH display and body roles; mono for figures/annotations only.

## 9. Directions (from research/landscape.md + research/trends.md, 2026-10-29)
Whitespace the map found: engineering-raw + diagram-led is EMPTY in the category (Vantage/Equinix/Google
are corporate + photography-led; CoreWeave is polished graphic-led). PIDC has no buildings to photograph —
the demo's own schematics are the differentiator. Keep-list honoured in all three: stats band, serious
hero, geo/site proof, plain-EN benefit line, CTA above fold.

### A — "Drawing Set" (anchored — Stripe type + construction-document language)
- Idea: the site reads like a well-set drawing sheet set — typographic hierarchy of Stripe, annotation
  language of construction documents (sheet numbers, title blocks, revision dates, red callouts).
- Palette: paper `#FAFAF7` ground, near-black ink `#1A1D1F`, signal red `#C8401A` (callouts/live values
  ONLY — red where a drawing uses red), hairline `#D8D8D2` rules.
- Type: Space Grotesk display + Inter body + IBM Plex Mono annotations (all VN-subset verified).
- Layout grammar: ruled lines & columns, 0–2px radius, hairlines; title-block section headers.
- Risk: drafting metaphor overdone reads dated (anti-slop B) — metaphor lives in headers/annotations only.

### B — "Prospectus" (best business fit — was "Substation Ledger")
- Idea: investor-grade bond-prospectus site — dark schematic hero band (capital gravity, Vantage's weight
  applied to the SLD diagram instead of cinema photo), then a light, printable, spec-sheet body where
  every number carries source + as-of date.
- Palette: navy `#0E1F26` hero band; white/`#F7F8F7` body; blueprint blue `#1A4E8A` structure/diagram
  lines; green `#188038` reserved strictly for sustainability metrics.
- Type: Archivo display + Inter body + IBM Plex Mono data (VN subsets verified).
- Layout grammar: quiet cards on a canvas, 12px radius containers, generous margins; sourced stats band.
- Risk: closest to category norms — needs the sourcing discipline to carry the difference.

### C — "Highland Terrain" (challenger — Vietnamese-first editorial)
- Idea: bilingual editorial grid where VI and EN are equal citizens and the Gia Lai terrain (highlands →
  pass → coast) is the recurring graphic protagonist; earth, laterite, plateau light.
- Palette: warm paper `#F8F6F1`, ink `#22201C`, laterite earth `#B0672B` annotations, green `#3E6B4F`
  environmental metrics.
- Type: Be Vietnam Pro display (cleanest VN diacritics) + Inter EN pairing + IBM Plex Mono.
- Layout grammar: editorial magazine — asymmetric split columns, terrain cross-section as running motif.
- Risk: warm-paper editorial reads old if lazily done (anti-slop B) — needs modern scale + no beige fog.

## 10. Deliverables per direction
tokens.css · skin.css · index.html + ai-data-center.html (layout from neutral starter) · shots/ desktop
1440 + mobile 390 · NOTES.md. Stop after directions for the owner's pick.
