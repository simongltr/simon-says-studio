# Design System — simon-says.studio

## Product Context
- **What this is:** Personal brand site for Simon, an on-demand builder-CTO. He builds MVPs for non-technical founders using AI-accelerated delivery, at a fraction of agency cost.
- **Who it's for:** Non-technical founders with validated ideas who are ready to build — not in discovery mode, ready to write a check.
- **Space/industry:** Fractional CTO / boutique dev agency / personal brand
- **Project type:** Single-page personal brand site — credibility artifact for warm referrals, not a marketing funnel

## Aesthetic Direction
- **Direction:** Brutalist-Minimal, Terminal-Adjacent
- **Decoration level:** intentional — monospace accents, structural borders, nothing decorative that doesn't earn its place
- **Mood:** Warm dark, high contrast, the visual language of someone who has a terminal open right now. Not corporate, not startup template. A builder's page. Quiet authority.
- **Reference sites:** paco.me, rauno.me — spare, typographic, builder energy

## Typography
- **Display/Hero:** Instrument Serif — an unexpected serif in a sea of grotesque sans tech sites. Confidence signal. At large size on dark background it reads like a first edition, not a SaaS landing page.
- **Body:** DM Sans — clean, readable for non-technical founders who are the actual audience. Not aggressive. Pairs with Instrument Serif without competing.
- **UI/Labels:** Geist Mono — used sparingly for step numbers, metadata, pricing callouts, CTAs. Monospace presence signals technical credibility.
- **Data/Tables:** Geist Mono (tabular-nums)
- **Code:** Geist Mono
- **Loading:**
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300;1,9..40,400&family=Geist+Mono:wght@300;400;500&display=swap" rel="stylesheet">
  ```
- **Scale:**
  - Hero: clamp(64px, 13vw, 108px) / Instrument Serif / line-height 0.95 / letter-spacing -0.03em
  - H2: 36px / Instrument Serif / line-height 1.15 / letter-spacing -0.01em
  - H3: 20px / DM Sans 500 / line-height 1.3
  - Body: 16px / DM Sans 400 / line-height 1.65
  - Small: 14px / DM Sans 400 / line-height 1.6
  - Label/Mono: 11–13px / Geist Mono / uppercase labels: letter-spacing 0.1em

## Color
- **Approach:** restrained — one accent, used once (the CTA). Everything else is warm neutrals.
- **Background:** `#0D0D0B` — warm near-black. Not cold SaaS dashboard black. Alive, like a workshop at night.
- **Surface:** `#161613` — code blocks, cards, callout sections
- **Primary text:** `#F0EDE6` — warm off-white, not pure white. Reads like cream stock.
- **Muted text:** `#908E88` — metadata, secondary copy, placeholder text. Lifted from `#6B6860` for WCAG AA compliance (~5:1 on `#0D0D0B`).
- **Accent:** `#D4FF58` — acid chartreuse. ONE USE ONLY: the primary CTA. Creates instant visual hierarchy without decoration. No one else in this category uses it.
- **Border:** `#252521` — structural, barely visible. Lines that belong to the material.
- **Semantic:**
  - success: `#4ADE80`
  - warning: `#FACC15`
  - error: `#F87171`
  - info: `#60A5FA`
- **Dark mode:** This IS the dark mode. Light mode: invert surfaces (#FAFAF8 bg, #1A1A18 text), desaturate accent to `#3D7A00` for legibility.

## Spacing
- **Base unit:** 8px
- **Density:** comfortable — room to breathe between sections, not dashboard-tight
- **Scale:** 2xs(4) xs(8) sm(12) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(80) 5xl(120)
- **Max content width:** 760px (centered — wider than prose default to give editorial layout more room)
- **Side padding:** 24px mobile, 0 desktop (container handles)

## Layout
- **Approach:** single-column, disciplined
- **Structure:** One page, no nav. Sections stack vertically. Separated by generous whitespace and thin border lines, not background color changes.
- **Grid:** Single column within 680px container
- **Max content width:** 680px
- **Border radius:** minimal — sm: 2px (buttons), md: 4px (cards), none for structural elements

## Motion
- **Approach:** minimal-functional — only what aids comprehension
- **Cursor blink:** on the terminal CTA element (1.1s, step-end, CSS animation)
- **Page load:** subtle fade-in on body (150ms, ease-out)
- **Hover states:** border-color transitions only (150ms, ease)
- **Nothing else:** no scroll animations, no parallax, no hover transforms

## Signature Risk: Terminal CTA

The primary call-to-action is rendered as a terminal prompt, not a button:

```
$ book --slot 30min --with simon_
```

The cursor blinks. It is a link. This is deliberate self-selection: technical founders who get it are exactly the right audience. Non-technical founders who are curious will ask — and that question is a warm opener. It also makes the site memorable.

**Implementation:**
```css
.terminal-cta {
  font-family: 'Geist Mono', monospace;
  font-size: 14px;
  color: var(--accent);
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 12px 20px;
  border-radius: 2px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: border-color 150ms;
}
.terminal-cta:hover { border-color: var(--accent); }
.cursor {
  display: inline-block;
  width: 8px; height: 14px;
  background: var(--accent);
  animation: blink 1.1s step-end infinite;
}
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
```

## CSS Custom Properties

```css
:root {
  --bg:        #0D0D0B;
  --surface:   #161613;
  --text:      #F0EDE6;
  --muted:     #908E88;
  --accent:    #D4FF58;
  --border:    #252521;

  --font-display: 'Instrument Serif', serif;
  --font-body:    'DM Sans', sans-serif;
  --font-mono:    'Geist Mono', monospace;

  --max-w:     760px;
  --space-xs:  8px;
  --space-sm:  12px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 80px;
}
```

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-29 | Instrument Serif for hero display | Unexpected serif differentiates from every other fractional CTO site using grotesque sans. Confidence signal. |
| 2026-03-29 | DM Sans for body (not monospace) | Monospace body (considered: DM Mono) is harder for non-technical founders to read at length. DM Sans is the right call for the actual audience. |
| 2026-03-29 | #D4FF58 acid chartreuse as sole accent | Nobody in this category uses it. One-use-only rule means it lands hard on the CTA. |
| 2026-03-29 | Terminal CTA over conventional button | Self-selects the right clients. Memorable. Defensible departure from convention. |
| 2026-03-29 | 680px max content width | Prose-width constraint. Forces copy discipline. Feels intentional, not template-default. |
| 2026-03-29 | Initial design system created | Created by /design-consultation based on /office-hours product context. |
| 2026-03-30 | "Your CTO, on demand." hero headline | Names the job title founders want to hire. Previous "I build your MVP. You keep the equity." targeted co-founder pain, not agency pain. |
| 2026-03-30 | Bold editorial layout — masthead + section labels | Approved via /design-shotgun (Mockup C3). Thick masthead rule creates newspaper authority. section-label::after flex pattern for labeled dividers. |
| 2026-03-30 | --muted lifted to #908E88 (from #6B6860) | Design review pass: original muted contrast ~3.5:1, fails WCAG AA. #908E88 = ~5:1. Improves readability for non-technical founders without changing character. |
| 2026-03-30 | --max-w widened to 760px (from 680px) | Editorial layout needs more breathing room. 680px felt tight with the masthead two-column. |
| 2026-03-30 | <span class="cmd"> wrapper on terminal CTA | Fixes 320px viewport bug where cursor floated to its own line. Wrapping text+cursor in one inline element prevents flex item separation. |
