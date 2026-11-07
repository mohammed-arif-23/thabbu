# AGENTS.md — Project Rules

## Product identity

This project is a one-person digital greeting card for Thabbu, made by Arif. It is not a commercial website.

## Source of truth

Read and follow all Markdown files in this folder. `STORYBOARD.md` is the source of truth for narrative order and copy. `DESIGN_SYSTEM.md` is the source of truth for visual direction. `IMPLEMENTATION_SPEC.md` is the source of truth for technical constraints.

## Tone and privacy

- Preserve Tanglish, affectionate teasing, and the established nicknames.
- Keep the teasing warm. Never shame, guilt, pressure, or emotionally corner the recipient.
- Do not imply that she owes Arif a response, relationship, promise, or explanation.
- Do not add private medical or medication details.
- Do not invent quotes or memories.

## Design discipline

- Light mode only.
- Mobile-first and full-screen.
- Horizontal narrative, native swipe, scroll snap.
- No standard website navigation or generic landing-page sections.
- Use whitespace as a primary design element.
- Avoid excessive decoration and animation.

## Engineering discipline

- Prefer semantic HTML and accessible controls.
- Keep page content data-driven.
- Keep dependencies minimal.
- No backend, analytics, tracking, external APIs, or user accounts.
- Respect `prefers-reduced-motion`.
- Test keyboard navigation and small mobile dimensions.
- Do not claim a feature works until it is implemented and tested.
