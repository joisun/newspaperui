---
name: newspaperui
description: "Use this skill whenever the user asks to build, generate, or lay out a page with NewspaperUI (React components: Layout, Section, Article, Masthead, BodyText, etc.), or asks for a newspaper-style / editorial-style page, front page, weekly digest, or long-form feature and NewspaperUI is available in the project. Covers grid math (Layout → Section → Article span budgeting), component selection for a given content type, content-length rules for headlines/kickers/multi-column body text, ready-made page skeletons (front page, weekly digest, long-form feature, editorial), and a post-generation self-check checklist. Do NOT use for generic CSS Grid layout questions unrelated to NewspaperUI, or for interactive/app UI (forms, dashboards) — NewspaperUI is a static editorial-layout library only."
---

# NewspaperUI — agent usage guide

NewspaperUI (`pnpm add newspaperui`) is a static, editorial-layout React component
library: a 24-column CSS Grid system plus typography/publishing components
(headlines, bylines, pull quotes, factboxes, etc.) styled to look like a printed
newspaper page. It has **no interactive/app components** (no comments, no auth,
no data tables) — it only lays out content that already exists.

This skill exists because the type system clamps individual out-of-range spans
but does not validate the total span budget for a row. It also cannot stop an
agent from writing a 96px headline that's 40 characters long or from opening a
3-column `BodyText` with 60 words in it. Those are the mistakes this guide
prevents.

```js
import { Layout, Section, Article, Masthead, Headline, BodyText, /* ... */ } from 'newspaperui';
import 'newspaperui/style.css';
```

## 1. The grid model — get this right first

Three nested contexts, each constraining the next:

```
Layout columns={24}                 // top-level grid, usually 24
  └─ Section columns={n}            // n ≤ Layout.columns
       └─ Article / NewsSidebar span={m}  // m ≤ Section.columns; each item is clamped
```

**`span` values intended to share one row must sum to ≤ that Section's
`columns`.** Going over doesn't throw: each individual span is clamped to the
Section width, but excess row items wrap onto another row. Always total the spans
yourself.

Proven ratios (24-column section), pick one instead of inventing a split:

| Layout | Spans | Use for |
|---|---|---|
| Two-up, main + sidebar | `16 + 8` or `14 + 10` | Feature article + widgets/related |
| Three-up | `8 + 8 + 8` | Digest / roundup, several short items |
| Full width | `24` (or omit `span`) | Masthead, banners, footer, single lead story |
| Four-up | `6 + 6 + 6 + 6` | Brief-format news ticker |

`Masthead`, `Folio`, `BreakingNewsBanner`, `Footer` are always full-width —
don't wrap them in an `Article`, place them directly in `Layout`/`Section` with
`gridColumn: '1 / -1'` (they set this themselves).

## 2. Which component for which content

| Content | Component | Constraint |
|---|---|---|
| Section/category label above a headline | `Kicker` | 1–3 words, all-caps/small-caps |
| Main headline | `Headline weight="High\|Medium\|Low"` | High→h1 (48–96px). **Keep ≤ ~10–12 English words / ~16–20 CJK chars** — `textWrap:balance` helps wrapping but won't fix a headline that's really a sentence |
| Secondary headline | `Headline weight="Medium"` or `Subhead` | One line, not two clauses |
| Deck/standfirst | `Subhead` | One sentence, not a paragraph |
| Author credit | `Byline` | "BY NAME" / "本报记者 X" — short, one line |
| Dateline | `Dateline` | Inline inside the first `BodyText` paragraph, e.g. `<Dateline>LONDON —</Dateline>` |
| Article body | `BodyText columns={1-4} dropCap` | See §3 for column/length rules |
| Short standout line pulled from the body | `PullQuote` | One sentence, **≤ ~25–30 words**. Max 1–2 per article — more than that and nothing stands out |
| Full quote / testimonial / letter | `Quote variant="block"` | Can be a full paragraph |
| Structured facts, stats, timeline | `Factbox` | Short list items, not prose |
| "See also" list | `RelatedArticles` | Title-only entries, no summaries |
| Front-page contents box | `IndexBox` | `page + title + one-line headline` per item |
| Top-of-page urgent banner | `BreakingNewsBanner` | One sentence, one per page max |
| Page header (page no. / section / date) | `Folio` | Every page after the front page |
| Continuation marker | `JumpLine` | Always in pairs: `direction="to"` at the break, `direction="from"` where it resumes |
| Widget column (weather, related links, stats) | `NewsSidebar` | Defaults to `span={6}` if unset |
| Image + caption | `Figure` | Use over raw `Image` when a caption/credit is needed |

## 3. Content-length rules

These aren't enforced by the library — they're what makes generated output look
like a real page instead of an awkwardly stretched one:

- **`BodyText columns={2+}`**: only use multi-column when there's enough copy to
  fill it — roughly **≥120–150 CJK characters or ≥90–100 English words per
  column**. A 60-word blurb in `columns={3}` produces three half-empty slivers;
  use `columns={1}` for short items (news-brief blocks, `span={8}` three-up items
  almost always want `columns={1}`).
- **`dropCap`**: only on a first paragraph of at least 3–4 sentences, or the
  oversized first letter looks stranded above a stub paragraph.
- **`Headline weight="High"`**: renders at `clamp(48px,8vw,96px)`. Long headlines
  don't error, they just wrap into an ugly multi-line block — treat the char
  limits above as hard budget, not a suggestion.
- **`Kicker` / `Byline` / `Dateline`**: single-line small-caps labels. Keep under
  ~15 characters; they aren't designed to wrap gracefully.

## 4. Page skeletons

Use these as starting scaffolds instead of improvising grid structure per
request — they're pre-validated span budgets.

### Front page

```
Layout(columns=24)
  Masthead(title, edition, date, variant="classic|blackletter|modern")
  Folio?(page="A1")                    // optional on the very front page
  BreakingNewsBanner?                  // only if there's real breaking news
  Section(columns=24)
    Article(span=16)                   // lead story
      Kicker + Headline(High) + Byline + Dateline
      BodyText(columns=2, dropCap)
      PullQuote?
    NewsSidebar(span=8)
      IndexBox(title="Inside", items=[...])   // 4-6 short entries
  Rule(variant="double")
  Section(columns=24)
    Article(span=8) × 3                // three secondary stories
      Kicker + Headline(Medium) + BodyText(columns=1)
  Footer
```

### Weekly digest / roundup (e.g. "AI 圈周报")

```
Layout(columns=24)
  Masthead(title="AI Weekly", variant="modern")
  Folio(page, section="AI周报", date)
  Section(columns=24)
    Article(span=16)                   // week's top story, deeper treatment
      Kicker + Headline(High) + Byline
      BodyText(columns=2, dropCap)
    NewsSidebar(span=8)
      IndexBox(title="本期速览", items=[6-item list])
  Rule(variant="double")
  Section(columns=24)
    Article(span=8) × 3                // three short items per row, repeat rows as needed
      Kicker + Headline(Medium) + BodyText(columns=1)  // 100-150 words each
  Footer
```

### Long-form feature (single deep-dive article)

```
Layout(columns=24)
  Folio(page, section)
  Section(columns=24)
    Article(span=24)                   // full-width headline block
      Kicker + Headline(High) + Subhead + Byline + Dateline
  Section(columns=24)
    Article(span=16)
      BodyText(columns=2, dropCap)     // long body, PullQuote 1-2x
      JumpLine(direction="to", page="A6")   // if genuinely continuing elsewhere
    NewsSidebar(span=8, divider)
      Factbox(title="Key Facts")
      RelatedArticles
  AuthorCard                            // at the very end
```

### Editorial / op-ed (two-column debate style)

```
Layout(columns=24)
  Section(columns=24, gap="2rem")
    Article(span=14)                   // main editorial
      Kicker + Headline(High) + Subhead + Byline
      BodyText(weight="High", columns=2, dropCap)
    Article(span=10)                   // expert commentary + letters
      (Kicker + Headline(Medium) + Byline + BodyText) × N
      Rule(variant="hairline") between each item
      Quote(variant="block") for reader letters, with attribution below
```

## 5. Anti-patterns

- Don't nest `Article` inside `Layer` — `Layer` is `position: absolute/fixed/sticky`
  and takes elements out of grid flow, so `span` math no longer applies.
- Don't open a multi-column `BodyText` inside a span narrower than ~8 — the
  resulting column width drops below comfortable reading width.
- Don't use more than 1–2 `PullQuote`s per article.
- For CJK content, switch the font tokens or text renders in the default Latin
  serif and looks wrong — see `var(--font-family-cjk-serif)` and
  `var(--nui-accent-cjk-red)` used in the library's own zh-editorial example.
- Don't invent a `span` split — use the ratios in §1, or if a custom split is
  unavoidable, verify it sums to the section's `columns` before writing it out.

## 6. Self-check before returning the page

Run through this after generating, don't just eyeball it:

- [ ] For every `Section`, do all direct `Article`/`NewsSidebar` `span` values sum to
      that Section's `columns`?
- [ ] Does every `Article` that represents a story have a `Headline`?
- [ ] Is CJK content using the CJK font/accent tokens?
- [ ] Does every multi-column `BodyText` have enough copy per column (§3)?
- [ ] Is `PullQuote` used sparingly (≤2 per article)?
- [ ] Is there exactly one `Masthead` and at most one `BreakingNewsBanner`?
- [ ] Are `JumpLine`s paired (`to` at the break, `from` where it resumes) if used?
