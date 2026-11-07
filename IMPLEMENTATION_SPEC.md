# IMPLEMENTATION SPECIFICATION

## Recommended stack

- Next.js App Router
- React + TypeScript
- CSS Modules or a small global CSS system; Tailwind is optional, not mandatory
- `framer-motion` only if a specific interaction genuinely benefits from it; CSS transitions are preferred for simple motion
- `lucide-react` is optional; custom CSS/SVG doodles are preferred for a more authored feel

Do not add a backend, database, login, CMS, analytics, tracking, or external API.

## Suggested structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  GreetingCard.tsx
  StoryTrack.tsx
  StoryPanel.tsx
  ProgressDots.tsx
  TinyNavigation.tsx
  doodles/
    TomatoStamp.tsx
    PaperTexture.tsx
    HandDrawnHeart.tsx
    CoffeeCup.tsx
    SideMirror.tsx
    EnvelopeSeal.tsx
content/
  story.ts
public/
  textures/
  doodles/
```

Adjust structure to fit an existing repository, but keep concerns separated and content data-driven.

## Content model

Create a typed `StoryPanel` data shape containing:

- `id`
- `eyebrow` (optional)
- `headline`
- `body` (short paragraph or short lines)
- `accent` or `themeVariant`
- `artDirection` / illustration identifier
- optional `annotation`
- optional `interaction`

Keep all screen content in one data file. Do not hardcode copy across many JSX components.

## Horizontal track behaviour

- A single full-viewport main stage.
- Each panel uses `width: 100vw` and `min-height: 100svh` (with a fallback for `100vh`).
- Use horizontal flex layout with `overflow-x: auto` and scroll snap.
- Set `overscroll-behavior-x: contain` where appropriate.
- Hide the scrollbar visually but retain real scrolling.
- Avoid an outer vertical scrollbar in the normal experience.
- Use `scrollIntoView` or a measured scroll position for arrow-key navigation; do not create a custom gesture engine unless necessary.
- Track active screen with `IntersectionObserver` or a simple scroll-position calculation; guard for resize and font-load changes.

## Viewport and safe areas

- Use dynamic viewport units (`100dvh` / `100svh`) with fallbacks.
- Respect `padding-top: env(safe-area-inset-top)` and bottom safe area.
- Verify on small mobile widths and landscape. In short landscape, prioritize readable copy and allow a small internal scroll only if absolutely needed.

## Desktop behaviour

- Keep the main experience as a centered art-card stage with generous exterior whitespace.
- Maintain horizontal navigation using trackpad, arrow keys, and quiet controls.
- Do not stretch the full copy to the entire desktop width.
- The desktop version should feel like a gallery display of one page at a time.

## Styling rules

- Enforce a light-only colour scheme with `color-scheme: light`.
- Do not add dark-mode media query overrides.
- Use CSS variables for palette and spacing.
- Add textures locally (SVG/CSS) to avoid third-party dependency.
- Use `next/font` if using Google Fonts; provide strong local fallback stacks.
- Avoid relying on remote images for the core visual design.

## Performance

- Keep the page static and lightweight.
- Avoid large image libraries or video backgrounds.
- Lazy-load optional decorative assets if they become substantial.
- Prevent layout shifts by reserving dimensions for illustrations.
- Keep animations transform/opacity-based where possible.

## Accessibility and quality

- Semantic `main` and section structure.
- Logical heading hierarchy.
- Keyboard navigation and visible focus states.
- `prefers-reduced-motion` support.
- Minimum comfortable body type size on mobile; aim for 16px equivalent for primary copy.
- Test touch scrolling, keyboard arrows, and screen reader reading order.
- Ensure the page does not trap the user or force interaction.

## Run and delivery

Include a README with accurate setup, dev, build, and deploy commands. Run lint, typecheck, and production build if the project scripts support them. Fix issues rather than merely listing them.
