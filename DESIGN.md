# Design — simon-says.studio

Simple source of truth for the current site. Keep this file practical: it should describe the live design decisions, not an idealized redesign.

## Purpose

Personal brand site for Simon, an on-demand builder-CTO.

The page is a credibility artifact for warm referrals: spare, direct, technical, and clear enough for non-technical founders.

## Aesthetic

- Dark, minimal, terminal-adjacent.
- Editorial single-column page with a fixed masthead.
- Structural borders and whitespace do most of the visual work.
- Accent color is allowed as a recurring technical signal: logo marks, hero emphasis, CTAs, arrows, focus and hover states.
- Avoid decorative graphics, gradients, cards, illustrations, scroll effects, and marketing-site polish.

## Typography

Use the current font stack:

- Display: `Instrument Serif` for the hero headline.
- Body: `DM Sans` for readable founder-facing copy.
- Mono/UI: `Geist Mono` for labels, metadata, steps, language switch, and terminal CTA.
- Logo: `JetBrains Mono` at heavier weight for the masthead mark.

Important sizes:

- Hero: `clamp(64px, 13vw, 108px)`, line-height `0.95`.
- Body: `16px`, line-height `1.65`.
- Hero subcopy: `18px`.
- Section labels and metadata: `11px-12px`, uppercase mono.
- Step/inclusion copy: compact at `14px-15px`.

## Color

Current palette:

```css
--bg:      #0D0D0B;
--surface: #161613;
--text:    #F0EDE6;
--muted:   #908E88;
--accent:  #c8ff00;
--border:  #252521;
```

Use warm near-black, warm off-white, muted grey, and thin borders. The accent should feel sharp and intentional, not decorative.

## Layout

- Single page.
- Fixed masthead with logo, language switch, and small booking CTA.
- Main content lives in `.container` with `--max-w: 760px` and `24px` side padding.
- Sections stack vertically and are separated by thin borders, not background bands.
- Keep the page dense enough to feel senior, but not cramped.

## Core Components

### Masthead

The masthead is fixed, translucent, and blurred:

- Logo: `>simon says_`
- Language switch: `EN / FR`
- Header CTA: small text link styled like a compact outlined button.

This is part of the current identity. Do not remove it unless explicitly redesigning the page.

### Hero

Hero headline:

```text
Votre CTO,
à la demande.
```

English:

```text
Your CTO,
on demand.
```

The second line is italic and accent-colored. Subcopy should stay direct and qualify the audience: non-technical founders who understand the problem and need a senior builder to scope, build, and launch V1.

### Terminal CTA

Primary CTA is a terminal-style link:

```text
$ book --slot 30min --with simon_
```

Rules:

- Use `Geist Mono`.
- Accent-colored command text and blinking cursor.
- Surface background, thin border, `2px` radius.
- Hover may use accent border and subtle glow.
- Keep the `.cmd` wrapper so the cursor does not wrap separately on narrow screens.

### Sections

Current structure:

- Hero
- How it works / Comment ca marche
- What's included / Ce qui est inclus
- Why me / Pourquoi moi
- Fit filter
- Footer with repeated terminal CTA

Section labels are `h2.section-label` headings styled as uppercase mono text with a horizontal rule via `::after`.

## Motion

Motion is minimal:

- `150ms` body fade-in.
- Terminal cursor blink.
- Simple hover/focus transitions.

No scroll animation, parallax, transforms, or animated decoration.

## Copy Tone

- Plainspoken and senior.
- Specific about scope, price, production deployment, ownership, and direct access to Simon.
- Avoid generic agency claims, buzzwords, and long persuasive sections.
- The page should feel like a builder's page, not a SaaS landing page.
