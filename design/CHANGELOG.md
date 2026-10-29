# Design changelog

Every change to tokens, components or screens gets an entry. Version: MAJOR = direction/structure change,
MINOR = new component or screen, PATCH = adjustment to an existing one.

## 0.1.0 — 2026-10-29
- Project initialised.
## 2026-10-29 — directions phase (step 2, stop for owner pick)
- Research: refs/ 5 competitor captures, research/landscape.md + research/trends.md (Stack ref void — domain parked).
- Neutral system: screens index + ai-data-center (layout-only, EN+VI verbatim, demo SVGs), components/recipes/registry/catalog/DIGEST extended.
- 3 skins: directions/drawing-set, prospectus, highland-terrain (tokens.css + skin.css + NOTES.md + preview + shots).
- Shots per direction: hero-1440/390 (viewport), inner-1440-full/inner-390-full (full page) + contact sheet _sheet.png.
- Independent evaluator pass on A and B (AI vision): both "professional, minor tells to fix at lock"; C verified via maker 2-round vision + deterministic font check + director sheet read.
- STOP per SA prompt: no DESIGN.md lock, no PR. Owner picks direction.
Tool-artefact removal (SA fix item 12, 2026-10-29): budget.log, .uiux-mark.json and shots/eval/*.json removed.
Subagent budget totals for the record: research 42K, neutral maker 163K, 3 skin makers 94/95/90K, page makers 80/132/97K, evaluator 86K tokens.
## 2026-10-29 — SA fix round on PR3 (head 14bb415)
- Location map redrawn from Natural Earth 1:50m (mainland-only extent, sea-only hatching, leader/offset
  labels, EN/VI separate SVGs, mobile variant ≥12px labels); desktop/mobile swap fixed (specificity bug).
- contact@pidc.vn everywhere (screens, content/, BUILD-NOTES; the demo mailbox is gone from the repo).
- Routing label 3 = "Engineering or government partners / Đối tác kỹ thuật hoặc cơ quan nhà nước".
- VI placeholders: real wording (IM CTA, chairman confirm).
- Mobile menu (closed + open state) via <details>; TOC collapses into <details> ≤1024; rail restored as
  direct child at >1024 (regression caught in review shots, fixed + re-verified).
- Form labels written (Name/Email/Organisation/Message · Họ tên/Email/Tổ chức/Nội dung).
- Pisico group card → 3 columns; contact hero lede rewritten (no dangling colon).
- Sources: trailing punctuation/dates moved inside link text (no lone-punctuation lines).
- Shot diet: viewport-only dropped, oxipng+pngquant, desktop fulls 900px; tracked design/ = 2.8 MB.
- Tool artefacts removed (budget.log, .uiux-mark.json, shots/eval/) — budget totals in this file.
