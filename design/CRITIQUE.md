# CRITIQUE.md — Evaluator pass, "Drawing Set" (2026-10-29)

Evaluator: separate agent, rubric per `references/evaluator-rubric.md`, anchor `refs/coreweave-com.png`.
All five screens graded 0–10 on First read / Hierarchy / Currency / Consistency / Accessibility /
Content fit / Trust. Every defect below was crop-checked or verified against the HTML/CSS source
(vision misreads were caught and discarded — see "Rejected claims"). Machine facts from
`shots/eval/*.facts.json`; budget waivers honored (see Waivers).

## Scores

| Screen | First read | Hierarchy | Currency | Consistency | Accessibility | Content fit | Trust | Verdict |
|---|---|---|---|---|---|---|---|---|
| index | 8 | 7 | 8 | 7 | 8 | 9 | 9 | Strongest screen; hero composition and SLD earn credibility — legend placement and H1 rag are the fixes |
| why-vietnam | 7 | 7 | 8 | 7 | 7 | 8 | 8 | Best argument structure (claim→proof→source); narrow heading column and an inert TOC rail undercut it |
| ai-data-center | 8 | 7 | 8 | 7 | 7 | 9 | 9 | Reads as spec documentation, not marketing — the concept's best execution; hero-grid and container-mix nits |
| company | 8 | 6 | 8 | 6 | 7 | 6 | 7 | Registry card is the strongest trust artifact on the site; milestones/people are placeholder-by-design but read thin |
| contact | 7 | 8 | 8 | 7 | 7 | 7 | 8 | Routing core works and mailto fallback is right; "what happens next" layer is the weak 15% |

Currency call (all screens): placed next to CoreWeave, this holds the same year and class — one
type voice + one mono annotation layer, one accent used semantically, flat surfaces, square radii,
low density. It is not imitating the anchor; it is a sibling discipline. No anti-slop A or B hits:
the drawing metaphor stays in headers/annotations, the paper is justified by the direction, no
hand-drawn icons, no text walls.

Cross-group consistency: shell, tokens, sheet-number grammar, c-ceo convention and figure language
are the same everywhere — the system is real. The two things that are NOT consistent everywhere:
the VI lang-toggle state (broken on all --vi pages) and figure-caption conventions (see findings).

## Findings

**Blockers** (wrong or broken, not taste)

1. **all 5 --vi pages · blocker · header lang toggle** — `screens/*--vi.html` (e.g. index--vi.html
   lines 39–40) ships `data-set-lang="en" aria-pressed="true"` on the VI pages; CSS fills the
   pressed button ink. Every VI screenshot therefore shows EN as the active language on a fully
   Vietnamese page — the exact audience (VI officials/partners) sees their language marked inactive.
   Fix: swap `aria-pressed` values on the two buttons in all five --vi files (VI true, EN false).
   *Verified in markup and in 3 VI screenshots.*

2. **why-vietnam, ai-data-center, company, contact · blocker · TOC rail current state** —
   `components.css:269` styles `li[aria-current] a` (ink text + red left rule) but no page ever sets
   `aria-current` on a rail item, so the rail renders as an undifferentiated gray list at every
   scroll position. The rail is the orienting device for the brief's one-off deep read
   (BRIEF §1 "navigation must orient"); as shipped it is dead chrome, and the machine facts
   confirm its links are the quietest interactive elements (220×29, gray). Fix (mockup): mark the
   first item `aria-current` on each page; fix (build spec): IntersectionObserver scrollspy setting
   `aria-current` — note it in the handoff as the one place JS is permitted. *Verified in CSS + markup.*

**Polish** (would improve; severity-ordered)

3. **index · polish · hero, left column** — the SLD-00 legend (power/fiber/site-boundary key) sits
   under the CTAs in the text column, ~600px from the diagram it explains; it reads as an orphaned
   footnote and breaks the left column's eyebrow→H1→body→CTA rhythm. Fix: move the legend inside
   `c-figure` (above the caption strip) or directly under the card. *From sheet, consistent across
   EN+VI shots.*

4. **index · polish · hero H1** — last line is the single word "province." (widow at display size);
   VI H1 has the same class of problem worse: "dư / thừa" splits the compound across lines 4–5 and
   "dữ liệu / AI" splits lines 1–2. Fix: `text-wrap: balance` on `c-hero` H1 + NBSP inside VI
   compounds (dư thừa, dữ liệu AI). *Verified from sheet; VI compounds confirmed in why-vietnam and
   company H1s too (tăng trưởng, lĩnh vực, Công ty) — one global fix, not four page fixes.*

5. **company · polish · S-02 milestones** — placeholder chips wrap to 2–3 uneven lines
   ("[CEO: date — grid connection]" breaks "connection]" alone), rows go ~60% empty, and the
   intro promises "what is still in progress" but no status treatment exists. Fix: fixed-height
   `time` slot + `white-space` control or shorter chip strings ("[CEO: date]") with the milestone
   name as real text; add a status column (ink ✓ secured / mono "in progress") so the row grammar
   survives content arrival. *From sheet; chip rag verified in full-page shot.*

6. **contact · polish · S-01/S-02 note boxes** — three sibling note components end at three
   different right edges (~1015 / ~1055 / ~1015 vs the 1310 content edge) — the only visible grid
   break in an otherwise strict system. Fix: lock the note-box component width to the form column
   (`r-*` recipe). *From sheet.*

7. **index, contact, company (pre-CTA) · polish · c-terrainrule** — the 3-segment ink rule is the
   intentional Highland-Terrain motif, but in this pass it was misread twice from the sheets
   ("three solid black bars… reads as failed image loads" on company; "rhythm break, reads
   arbitrary" on index) and on contact its segment order read long–short–long, i.e. not stepped.
   A motif that 2/2 cold readers call a defect is not yet carrying "highlands → pass → coast".
   Fix: make the steps monotonic (descending widths), lighten stroke to ~3–4px or key it to the
   terrain figure's own heights, and/or add a mono micro-label; verify right edge snaps to the
   content margin. *From sheet (motif confirmed intentional in DESIGN.md §4 / components.css:254).*

8. **contact · polish · S-01 routing** — "Capital partners" is `checked` by default, which biases
   routing (a tenant can submit under the wrong audience) and contradicts the documented
   "disabled until choice" pattern. Fix: no default `checked`; form fields `disabled` until a radio
   is chosen, with a mono hint line "choose one to continue". *Verified in markup (contact.html:73).*

9. **index · polish · figure-caption conventions** — SLD-00 carries its sheet id inside the panel;
   the other figures use a caption strip; LM-01 does both (id inside the SVG at index.html:264 AND
   in the figcaption at :266 — genuinely duplicated); separator style mixes "·" and ","; the A–A
   cross-section has no sheet id at all, and LM-01 shows no A–A cut line though the next figure is
   "Section A–A". Fix: one caption grammar (strip below sheet, id once), one separator token, add
   the cut line to LM-01. *Verified in markup.*

10. **why-vietnam · polish · S-03 "Where PIDC fits"** — the 220 kV proximity claim is the only
    substantive claim on the page without a citation marker, and S-03 drops the proof-card pattern
    the other sections use (also noted: proof ordinals restart per section while citations run
    globally [1]–[10], so S-02 card "01" cites "[6]"). Fix: add `[n]` to the grid claim; decide
    ordinal scope (page-global ordinals, or keep per-section but say so in the pattern). *Verified
    in markup.*

11. **why-vietnam, ai-data-center · polish · citations** — `.cite` (recipes.css:11) is a 13px mono
    superscript, ink, no underline until hover; on a page whose strategy is "check us", the
    credibility affordance is the least-designed element and wraps alone onto its own line in three
    chart cards. Fix: keep the size but give cites a resting underline (or red on hover per the
    accent rule "links: the underline carries them") and `white-space: nowrap` so they never orphan.
    *Verified in CSS.*

12. **all inner pages · polish · TOC rail tap targets** — machine facts: rail links measure 220×29
    at 1440 and 358×29 at 390, below the 44px `--target` the design promises (DESIGN.md §7) and
    below the nav links, which do get the 44px treatment (components.css:286). Fix: add the same
    hit-area padding rule to `.r-tocrail a`. *Verified from facts JSON.*

13. **ai-data-center · polish · hero grid** — the intro figure column stops ~200px short of the
    content right edge used by every chart/table below, and the figure centers on the page grid,
    not the text column, so the hero reads subtly off-axis against a hard-left text block; the hero
    figure is also the only unnumbered plate in an otherwise strictly numbered set. Fix: align the
    hero figure's outer edge to the content column and give it a figure id (or deliberately exempt
    the hero in the pattern notes). *From sheet.*

14. **ai-data-center · polish · S-02 containers** — the rack-power chart sits in a bordered card
    while the comparison table directly below is open-ruled; the table header row has no emphasis
    and no caption. Fix: one container treatment per section; bold (or rule-heavy) `thead`, add a
    `<caption>` ("Conventional vs AI data center"). *From sheet; table semantics are real (`c-table`
    inside `c-compare`, mobile attr() row-labels verified at components.css:156–167).*

15. **company · polish · S-01 registry card** — single-column rows leave ~60% of the card empty and
    the card title repeats the H2 above it; "Registered office" wraps to two lines while neighbors
    don't. Fix: 2-up grid (or 60/40 label/value split), drop the duplicate card title.
    *From sheet.*

16. **contact · polish · hero/S-01 seam** — the hero's "We welcome conversations with:" ends in a
    colon whose list arrives a full-width divider later; S-01/S-02/S-03 all carry the same "CONTACT"
    rail label. Fix: move the line into S-01 (or drop the colon); vary the S-02 label ("FORM").
    *From sheet.*

17. **index · polish · S-01 statband** — placeholder value boxes wrap unevenly so the band's slots
    don't top-align ("[CEO: distance km…]" takes two lines), and "[CEO: current stage]" is answered
    ("In development") in the hero eyebrow and S-03. Fix: fixed-height value slots; drop or fill the
    stage placeholder. (Casing was verified consistent sentence-case — a sheet claim of title-case
    was a misread.) *From sheet + markup.*

**Rejected claims** (vision misreads, checked against source, NOT defects): "GIA Lại"/"Khư dự án"
map labels (source: correct "Gia Lai", "Khu dự án"); "Vi sao chon Gia Lai" diacritics-stripped
button (source: correct "Vì sao chọn Gia Lai"); "TÍM HIỂU" vs "TÌM" (source: "Tìm hiểu", correct);
"Lâm Duy Viêt" (source: "Lâm Duy Việt"); "[CEO: Land area ha]" title-case (source: sentence-case);
"(Cổng Thương)" truncated (source: "(Công Thương)", complete); garbled map micro-label (source:
"Khu dự án · site", correct). Also not defects: info@pidc.vn alongside contact@pidc.vn — both are
verbatim from the owner's demo content (content/contact.html, schema.org block); "71/2025/QH15"
law number is demo-verbatim (an SA fact-check is reasonable but it is not this design's error);
"© 2026" is coherent with in-development status.

## Waivers

- **Probe details = diagram-SVG label sizes (t-small 10.5px, t-fbl 12px, t-label 11px, t-name
  12.5px): CONFIRMED.** These are the demo's own viewBox-scaled SLD annotations kept verbatim per
  the locked direction; in the 1440 shots they read as drawing annotation, legible at the floor,
  consistent with "mono annotation layer is deliberate". Carried as a build-time watch item:
  confirm effective size on 390 (the SLD card scales down ~3×) — if the labels drop under ~9px
  effective, add a mobile min-scale or a simplified SLD variant; do not rasterize (BRIEF §4).
- **Budget reading/spacing/type fails = bilingual-DOM artifacts: CONFIRMED.** EN and VI spans are
  both in the DOM (one hidden via `[data-lang]`), so word counts and block measures run ~2× real;
  e.g. index "words 92 / block 44" and company "words 181" are inflated by the hidden language.
  Judged from the shots instead: reading comfort is good (17px body, ~60–68ch measure, generous
  section air); the genuine spacing findings above (note-box edges, milestone chips, S-02 dead
  rows) are reported as findings 5/6 — they are real but were found visually, not by the budget.
- **a11y facts: clean** — no serious/critical violations recorded at either size on any screen;
  keys: 0 noRing, 0 unreached, all controls reachable. The 29px rail targets (finding 12) come from
  the probe detail lines, not an a11y fail.

## Overall

**Shippable as a design mockup set for SA review: YES** — with finding 1 (VI toggle state) fixed
first, because every VI screenshot sent to review currently displays a wrong active language and
that colors SA's reading of VI parity, which is otherwise genuinely first-class (diacritics clean
in all three faces including stacked marks in mono caps; only line-break compounds need NBSPs).

The system is the strength: next to the CoreWeave anchor it holds the same class, and on the
brief's primary job (convince a capital partner via evidence) the strongest regions — the SLD hero,
the sourced statband, why-vietnam's claim→proof→source chain, the explainer's numbered sheets, the
company registry card — are reference-grade. The weaknesses are execution seams (caption grammar,
note-box widths, chip wrapping), one under-communicated motif (terrain rule), and one inert
navigational device (rail current state), not the direction.

**Top 3 fixes if only three get done:**

1. Swap `aria-pressed` on the lang toggle in all five `screens/*--vi.html` files (blocker; 10 lines
   total; every VI deliverable is currently wrong).
2. Make the TOC rail live: set `aria-current` on the current section's `li` (mockup) and specify the
   scrollspy in the handoff (blocker; the deep-read orientation the brief demands).
3. Hero package on index: move the SLD legend into the figure card + `text-wrap: balance` / NBSP
   compound control on H1s site-wide (highest-visibility polish; fixes the EN widow and the VI
   compound splits on four pages with one token change).

— Evaluator, 2026-10-29. Nothing was modified; report only.
