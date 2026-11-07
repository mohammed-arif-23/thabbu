# DESIGN SYSTEM — Coquette × Editorial Scrapbook

## North star

A limited-edition stationery object made digital. Curated, contemporary, playful, poetic, gallery-worthy. The page should feel touched by a human hand: small asymmetries, pencil notes, taped fragments, imperfect circles, paper grain. The imperfections are intentional; the layout is not messy.

## Colour palette

Use warm off-whites and restrained accents. Avoid filling every screen with pink.

| Token | Hex | Use |
|---|---:|---|
| Paper | `#FFF9F3` | Main canvas |
| Warm white | `#FFFEFC` | Alternate page canvas |
| Blush | `#F5DCE2` | Soft paper / accent blocks |
| Petal | `#E9AAB9` | Secondary accent |
| Cherry | `#C94E68` | Strong accent / tiny marks |
| Ink | `#332A2B` | Main text |
| Muted ink | `#807176` | Captions / tiny labels |
| Butter | `#F7E7A9` | Occasional highlight |
| Lavender | `#DDD6EF` | Rare counterpoint |
| Sage | `#DCE6D8` | Very occasional contrast |

Rules:
- Main text must remain high contrast against paper backgrounds.
- Cherry is an accent, not a body-text colour for small text.
- Use no more than two accent colours on a single screen, except for a deliberate collage screen.
- Keep the background light on every screen. No dark mode under any condition.

## Typography

Use three families at most:

1. **Editorial serif:** `Bodoni Moda` or `Cormorant Garamond` for expressive headlines and large numbers.
2. **Clean sans:** `DM Sans` for readable body copy, labels, and controls.
3. **Handwritten accent:** `Caveat` used sparingly for tiny marginal notes, not paragraphs.

Typography rules:
- Use expressive scale contrast: large title, comfortably readable body, tiny editorial annotation.
- Avoid ultra-thin body text.
- Keep paragraph line length short on mobile.
- Prefer sentence fragments and line breaks to dense prose.
- Use all-caps selectively for punchlines, not entire paragraphs.
- Do not use handwritten type for long Tanglish copy.

## Layout and composition

- One screen equals one composition.
- Each screen fills the viewport and respects `env(safe-area-inset-*)`.
- Use a 6–8% outer inset on mobile, with generous top and bottom breathing room.
- Most screens should have one focal point and no more than three supporting decorative elements.
- Change the composition across screens: centered cover, offset punchline, label collage, close-up details, split smile page, mirror illustration, coffee still-life, typographic timer, note fragments, audio waveform, notebook page, final centered wish.
- Keep important text away from the extreme bottom where mobile browser chrome may cover it.
- Do not make every screen a rounded rectangle/card. Let the full-bleed canvas do the work.

## Texture and illustration

Use subtle, low-contrast paper grain via a tiny local SVG or CSS texture. Keep it almost invisible. Add physicality with:

- small washi tape strips
- a paperclip or folded-corner detail
- pencil-like lines and imperfect circles
- tiny starbursts, hearts, arrows, flower doodles
- coffee ring / faint stamp mark
- notebook ruling or chalk-like text on selected pages
- tomato motif used as a recurring visual signature, not a mascot on every screen

Illustration style:
- hand-drawn line art, simple shapes, editorial doodles
- slightly uneven line weight
- no clip-art packs
- no photorealistic couple imagery
- no fake screenshots

## Motion and transitions

Motion should feel like paper gently shifting, not a game or product demo.

- 180–450 ms for small transitions.
- Use slight fade / translate / scale for reveal details.
- Keep the horizontal snap itself native and smooth.
- No constant floating animation loops.
- Avoid parallax that makes reading harder.
- Respect `prefers-reduced-motion`.

## Screen-specific art cues

Follow `STORYBOARD.md`. Each screen should have a distinct composition but share consistent paper tone, typography, and accent logic. Avoid repeating the same illustration or layout every screen.

## Desktop adaptation

On desktop, preserve the feeling of a physical card rather than stretching content across a huge monitor. Keep a composed stage with a bounded card canvas or a carefully sized horizontal strip, centered with large margins. Maintain horizontal navigation. Do not convert it into a conventional desktop website.
