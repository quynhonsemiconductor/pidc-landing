# Build notes — apply to every page (from the SA's PR2 brief, binding)

These points govern the Astro implementation (PR3+). They are part of every page's handoff.

1. **Diagrams are Astro components; labels come from the i18n files.** One source per diagram serves
   both languages — never duplicated SVGs per locale. The demo/mockups carry EN+VI text inside one SVG
   (`lang` spans + `[data-lang]` CSS); in the build, diagram labels resolve from the i18n dictionaries
   (en/vi) at render time, producing one SVG per language from one component.
2. **Every SVG has `<title>` + `<desc>`** and sits in a `<figure>` with a `<figcaption>` (the mockups
   already carry aria-labels + data-label-en/vi — port them into title/desc). The conventional-vs-AI
   comparison is a real `<table>` (`c-compare` wraps `c-table`; mobile keeps the attr()-labelled row
   collapse from the mockups).
3. **JS only for the mobile menu.** No other script: the language switch is plain links (per-locale
   routes, hreflang in head — already in the demo's meta), the contact "I am a" routing is native
   radios + CSS, the TOC rail is CSS sticky.
4. **One static OG image per page, cropped from its own diagram** (home: SLD-00 detail; ai-data-center:
   rack anatomy; why-vietnam: terrain cross-section; company: group figure; contact: location map).
   1200×630 PNG, no text baked beyond the diagram's own labels.
5. **Self-hosted fonts** (woff2, latin + vietnamese subsets only; no Google CDN at runtime). Weights
   per DESIGN.md §2 (build may drop IBM Plex Mono 500 → saves ~14 KB).
6. **Placeholders `[CEO: …]` are content slots**, styled `c-ceo`. They stay until the CEO supplies the
   value; a page must never ship to production with one still present (build check idea: grep gate).
7. **Print stylesheet** ships as-is from `components.css` (`@media print`): no nav/switcher, URLs after
   links, figures unbreakable.
8. **Contact**: submit stays disabled (no backend yet) + `mailto:contact@pidc.vn` fallback. No
   Form/Function work in this phase. Use `contact@pidc.vn` only, everywhere (SA decision 2026-10-29).
