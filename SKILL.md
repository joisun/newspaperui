---
name: newspaperui
description: "Use this skill whenever the user asks to build, generate, or lay out a page with NewspaperUI (React components: Layout, Section, Article, Masthead, BodyText, etc.), or asks for a newspaper-style / editorial-style page, front page, weekly digest, or long-form feature and NewspaperUI is available in the project. Covers grid math (Layout → Section → Article span budgeting), typography scale, color restraint, component composition, and proven page patterns. Do NOT use for generic CSS Grid layout questions unrelated to NewspaperUI, or for interactive/app UI (forms, dashboards) — NewspaperUI is a static editorial-layout library only."
---

# NewspaperUI — Editorial Typography Style Guide

NewspaperUI is a **static editorial-layout component library** that produces pages which look and feel like real printed newspapers. It enforces a visual language rooted in printing craft: restrained color, typographic hierarchy, grid discipline, and quiet reading rhythm.

This guide exists to prevent three failure modes:
1. **Grid budget errors** — spans that don't sum correctly
2. **Typography violations** — headlines too long, columns too narrow, quotes too frequent
3. **Visual noise** — accent overuse, rule inconsistency, CJK rendering in Latin serif

```js
import { Layout, Section, Article, Masthead, Headline, BodyText } from 'newspaperui';
import 'newspaperui/style.css';
```

---

## 1. Grid Discipline

The grid is **three nested contexts**, each constraining the next:

```
Layout columns={24}                    ← top-level container
  └─ Section columns={n}               ← n ≤ Layout.columns
       └─ Article span={m}             ← m ≤ Section.columns
```

**Critical rule**: `span` values in a row must sum to **≤** the Section's `columns`. Excess spans wrap to the next row silently — always total manually.

### Proven Span Ratios (24-column Section)

Pick one instead of inventing splits:

| Ratio | Spans | Use Case |
|---|---|---|
| **Main + Sidebar** | `16 + 8` or `14 + 10` | Feature article + widgets, related, factbox |
| **Three-up** | `8 + 8 + 8` | Digest, roundup, several short items |
| **Four-up** | `6 + 6 + 6 + 6` | Brief ticker, model release cards |
| **Full-width** | `24` (or omit `span`) | Masthead, banner, lead story, footer |

**Full-width components** (always `gridColumn: '1 / -1'`, never wrap in `Article`):
- `Masthead`
- `Folio`
- `BreakingNewsBanner`
- `Footer`
- `Rule`

---

## 2. Typography Scale

The visual hierarchy is **size + weight + line-height**, not color or decoration.

### Size Tiers

| Tier | Size Range | Weight | Line Height | Use For |
|---|---|---|---|---|
| **Display** | `clamp(48px, 8vw, 96px)` | 900 | 1.0–1.1 | Page title, front-page headline |
| **Headline** | `28–40px` | 700–900 | 1.2–1.3 | Section lead, secondary story |
| **Subhead** | `18–24px` | 500–600 | 1.3–1.4 | Deck, standfirst, story subhead |
| **Body** | `14–16px` | 400 | 1.7–1.9 | Article text, captions |
| **Meta** | `11–13px` | 400–700 | 1.4–1.6 | Byline, dateline, kicker, factbox |

### Weight Discipline

- **900 (Black)**: Display headlines only — one per page, max two
- **700 (Bold)**: Section leads, subheads, meta labels
- **400–500 (Regular/Medium)**: Body text, captions, meta text
- **Never mix weights arbitrarily** — pick one per tier and stay consistent

### Content-Length Budgets

These are **hard limits**, not suggestions:

| Component | Max Length | Rationale |
|---|---|---|
| `Headline weight="High"` | **10–12 English words / 16–20 CJK chars** | Longer headlines wrap into ugly multi-line blocks |
| `Kicker` / `Byline` / `Dateline` | **≤15 chars** | Single-line small-caps labels — don't wrap gracefully |
| `PullQuote` | **≤25–30 words, max 1–2 per article** | More than 2 and nothing stands out |
| `BodyText columns={2+}` | **≥120–150 CJK chars / ≥90–100 English words per column** | Short copy in multi-column produces half-empty slivers |
| `dropCap` | **First paragraph ≥3–4 sentences** | Oversized letter looks stranded above stub paragraphs |

---

## 3. Color & Accent

The palette is **warm gray + one accent**, not a rainbow.

### Rule Language (Three Types Only)

| Rule | Style | Use For |
|---|---|---|
| **Hairline** | `1px solid var(--nui-rule-hairline)` | Paragraph separators, grid dividers, quiet breaks |
| **Section break** | `3px solid var(--nui-rule-decorative)` | Major section transitions (head → body, body → footer) |
| **Double rule** | Component `Rule variant="double"` | Decorative, classical, one per page max |

**Never use 2px** — it's an intermediate weight that breaks the hairline → 3px hierarchy.

### Accent Color Discipline

- **CJK red** (`--nui-accent-cjk-red`) and **ink red** (`--nui-accent-primary`) are for **news value signals only**:
  - Breaking news labels
  - "Today's new" / "Verified" stamps
  - Page-level urgency indicators
- **Never use accent for**:
  - Decorative borders
  - Body text color
  - Hover states (NewspaperUI is static)
  - Multiple items in the same row (one accent per row, max)

**Example of restraint**: An obituary page uses **zero accent** — all black + hairline + gray. A front page uses accent only for the masthead date and one "verified" label.

---

## 4. Component Composition

### Component Selection Matrix

| Content Type | Component | Key Props |
|---|---|---|
| Section label above headline | `Kicker` | — |
| Main headline | `Headline` | `weight="High\|Medium\|Low"` |
| Secondary headline | `Subhead` or `Headline weight="Medium"` | — |
| Deck / standfirst | `Subhead` | `weight="Medium"` |
| Author credit | `Byline` | — |
| Dateline | `Dateline` | Inline inside first `BodyText` |
| Article body | `BodyText` | `columns={1-4}`, `dropCap`, `weight="High\|Medium\|Low"` |
| Short pulled quote | `PullQuote` | — |
| Full quote / testimonial | `Quote` | `variant="block"` |
| Structured facts | `Factbox` | `title`, list items |
| Related articles | `RelatedArticles` | Title-only entries |
| Front-page contents | `IndexBox` | `page + title + headline` per item |
| Urgent banner | `BreakingNewsBanner` | One sentence, one per page |
| Page header | `Folio` | `page`, `section`, `date` |
| Continuation marker | `JumpLine` | `direction="to"` at break, `direction="from"` at resume |
| Widget column | `NewsSidebar` | Defaults to `span={6}` |
| Image + caption | `Figure` | Use over raw `Image` when caption needed |

### CJK Content

For Chinese/Japanese/Korean text, **always switch font tokens**:

```tsx
const cjk = { fontFamily: 'var(--font-family-cjk-serif)' };
const cjkRed = { color: 'var(--nui-accent-cjk-red)' };

<h2 style={{ ...cjk, fontSize: '32px' }}>中文标题</h2>
```

Never render CJK in the default Latin serif — it looks wrong.

---

## 5. Proven Page Patterns

Use these as **starting scaffolds** instead of improvising. Each is a pre-validated span budget.

### Pattern A: Front Page

```
Layout(columns=24)
  Masthead(title, edition, date, variant="classic")
  BreakingNewsBanner?                              // only if real breaking news
  Section(columns=24)
    Article(span=16)                               // lead story
      Kicker + Headline(High) + Byline + Dateline
      BodyText(columns=2, dropCap)
      PullQuote?
    NewsSidebar(span=8)
      IndexBox(title="Inside", items=[...])
  Rule(variant="double")
  Section(columns=24)
    Article(span=8) × 3                            // three secondary stories
      Kicker + Headline(Medium) + BodyText(columns=1)
  Footer
```

### Pattern B: Weekly Digest

```
Layout(columns=24)
  Masthead(title="Weekly Brief", variant="modern")
  Folio(page, section, date)
  Section(columns=24)
    Article(span=16)                               // week's top story
      Kicker + Headline(High) + Byline
      BodyText(columns=2, dropCap)
    NewsSidebar(span=8)
      IndexBox(title="This Week", items=[...])
  Rule(variant="double")
  Section(columns=24)
    Article(span=8) × 3                            // three short items per row
      Kicker + Headline(Medium) + BodyText(columns=1)
  Footer
```

### Pattern C: Long-Form Feature

```
Layout(columns=24)
  Folio(page, section)
  Section(columns=24)
    Article(span=24)                               // full-width headline
      Kicker + Headline(High) + Subhead + Byline
  Section(columns=24)
    Article(span=16)
      BodyText(columns=2, dropCap)
      PullQuote (1-2x)
      JumpLine(direction="to", page="A6")?
    NewsSidebar(span=8, divider)
      Factbox(title="Key Facts")
      RelatedArticles
  AuthorCard
```

### Pattern D: Editorial / Op-Ed

```
Layout(columns=24)
  Section(columns=24, gap="2rem")
    Article(span=14)                               // main editorial
      Kicker + Headline(High) + Subhead + Byline
      BodyText(weight="High", columns=2, dropCap)
    Article(span=10)                               // expert commentary + letters
      (Kicker + Headline(Medium) + Byline + BodyText) × N
      Rule(variant="hairline") between each
      Quote(variant="block") for reader letters
```

---

## 6. Anti-Patterns

| Don't | Why |
|---|---|
| Nest `Article` inside `Layer` | `Layer` is `position: absolute/fixed/sticky` — takes elements out of grid flow, `span` math breaks |
| Open multi-column `BodyText` in `span < 8` | Column width drops below comfortable reading width |
| Use more than 2 `PullQuote`s per article | Dilutes emphasis — if everything stands out, nothing does |
| Render CJK in default Latin serif | Looks wrong — use `var(--font-family-cjk-serif)` |
| Invent custom span splits without verifying sum | Spans that don't sum to Section's `columns` wrap silently |
| Use 2px rules | Breaks the hairline → 3px hierarchy |
| Color body text with accent | Accent is for news-value signals only |

---

## 7. Self-Check Before Returning

Run through this **after generating**, don't just eyeball:

- [ ] For every `Section`, do all direct `Article`/`NewsSidebar` `span` values sum to that Section's `columns`?
- [ ] Does every `Article` that represents a story have a `Headline`?
- [ ] Is CJK content using `var(--font-family-cjk-serif)` and `var(--nui-accent-cjk-red)` where appropriate?
- [ ] Does every multi-column `BodyText` have enough copy per column (≥120 CJK chars / ≥90 English words)?
- [ ] Is `PullQuote` used sparingly (≤2 per article)?
- [ ] Is there exactly one `Masthead` and at most one `BreakingNewsBanner`?
- [ ] Are `JumpLine`s paired (`to` at break, `from` at resume) if used?
- [ ] Are accent colors used only for news-value signals, not decoration?
- [ ] Are rules only hairline / 3px / double — no 2px?
- [ ] Do `Headline` and `Kicker` respect content-length budgets?

---

## 8. Token Quick Reference

### Spacing

```css
--nui-space-1: 0.25rem;  /* 4px */
--nui-space-2: 0.5rem;   /* 8px */
--nui-space-3: 0.75rem;  /* 12px */
--nui-space-4: 1rem;     /* 16px */
--nui-space-6: 1.5rem;   /* 24px */
--nui-space-8: 2rem;     /* 32px */
--nui-gutter: 1.5rem;    /* 24px default column gap */
```

### Colors

```css
--nui-bg-page: #F7F4ED;           /* Warm off-white */
--nui-bg-surface: #FBF9F4;        /* Slightly lighter */
--nui-text-primary: #1A1A1A;      /* Near-black */
--nui-text-secondary: #4A4742;    /* Dark gray */
--nui-text-muted: #6E6A63;        /* Medium gray */
--nui-rule-hairline: #C9C2B2;     /* Warm gray rule */
--nui-rule-decorative: #1A1A1A;   /* Near-black rule */
--nui-accent-primary: #7A1F1F;    /* Deep red (ink) */
--nui-accent-cjk-red: #CC2929;    /* Bright red (CJK) */
--nui-highlight: #F2E9C8;         /* Warm yellow highlight */
```

### Font Families

```css
--font-family-display: "Source Serif 4", Georgia, serif;
--font-family-headline: "Source Serif 4", Georgia, serif;
--font-family-body: "Source Serif 4", Georgia, serif;
--font-family-meta: "Inter", system-ui, sans-serif;
--font-family-cjk-serif: "Noto Serif SC", "Noto Serif JP", serif;
--font-family-cjk-jp: "Noto Serif JP", serif;
```

---

## 9. When NOT to Use NewspaperUI

This library is for **static editorial content only**. Do not use for:

- Interactive UI (forms, modals, dashboards)
- Data-heavy apps (tables, charts, filters)
- Authentication flows
- Real-time updates (comments, notifications)
- Generic CSS Grid layout questions unrelated to editorial typography

If the page has user-generated content, state management, or API calls — it's probably not a NewspaperUI page.
