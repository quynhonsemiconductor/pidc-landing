# Direction A — "Drawing Set"

Concept: the site reads like a well-set construction drawing sheet set — Stripe-grade
typographic hierarchy with the annotation language of engineering documents. Paper
ground, near-black ink, hairline rules, square drawing sheets; red appears only where
a drawing uses red: callout markers, live values (220 kV), the key CTA, the NDA note.

Palette (roles → hex):
- paper ground `--color-bg` #FAFAF7 · drawing sheet `--color-surface` #FFFFFF
- ink `--color-text` #1A1D1F · faded ink `--color-text-2` #565B5D · hairline #D8D8D2
- signal red `--color-accent` #C8401A — ONE job: attention marks (proof callout
  circles, live kV values in diagrams, primary CTA, NDA bar, focus, nav current)
- diagram inks: power = ink solid; fiber/coolant = gray #7A8082 (dashed); ground
  grid #ECECE6; iso faces white/#F0F0E9/#E3E3DA; trees neutral #A8AE9F. No blue,
  teal, gold or green survives from the neutral system.

Type: Space Grotesk (display: hero, section titles, wordmark, buttons) + Inter (body)
+ IBM Plex Mono (annotations: badges, eyebrows, figure caps, kV values, figures/units,
  glossary markers). All three have verified Vietnamese subsets; scale untouched from
  the neutral system, --lh-tight loosened to 1.22 for VI stacked diacritics.

Signature moves (3):
1. Title-block section headers — CSS-counted mono "S-01…S-08" cell + existing ruled
   eyebrow; sections separated by full-width hairlines (ruled-sheet rhythm).
2. Red callout-number circles on the proof cards (01/02/03), matching the SVG .mk
   marker discs (ink with paper halo).
3. Mono annotations/units layer across chrome, figures and data (incl. figure title
   strips on paper ground, square-cornered drawing sheets).

What the skin overrides: semantic colors/fonts/radius/leading via tokens.css; in
skin.css — display/mono type application, header/CTA back to paper, figure strips,
sheet counters, proof circles, diagram line weights thinned, cold coolant dashed,
.t-kv (live values) red, benefit bullets back to ink (red dial-back).

Verified: 4 viewport PNGs (1440/390 × both pages) + full-page EN & VI renders via AI
vision — VI diacritics intact and unclipped in both display and mono roles, no
overflow at 390, diagrams fully in ink/red (no leftover neutral blue/gold), red well
under 5% of any viewport, hero reads in ~3 s. One render pass; no fixes required.

Risks: drafting metaphor is carried only by headers/annotations (anti-slop B kept in
check); Google Fonts @import must become self-hosted subsets in the build; mono
uppercase eyebrows inherit the neutral system's tracked-caps pattern — fine at this
density but worth re-checking on the three remaining pages.
