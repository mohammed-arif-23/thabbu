# INTERACTIONS — Gentle, Discoverable, Optional

## Core navigation

- The 17 scenes form one horizontal track.
- Mobile users swipe naturally left/right.
- Use `overflow-x: auto`, `scroll-snap-type: x mandatory`, and `scroll-snap-align: start` on each full-screen panel.
- Do not prevent normal touch behavior or hijack vertical gestures globally.
- Desktop users can use trackpad horizontal scroll, left/right arrow keys, and small previous/next controls if needed.
- Navigation controls must be visually quiet and must not look like a website navbar.

## Progress cue

- On the first screen, show a very small “swipe to open →” handwritten cue.
- Use 17 tiny dots, a minimal 01/17 marker, or a restrained combination. Do not use a thick progress bar.
- Progress should update as the active panel changes.
- Do not show a large list of all page titles.

## Optional surprise interactions

Choose a maximum of 3–4 across the full experience:

1. **Opening seal:** Tap a tiny wax-seal / sticker on screen 01 to trigger a slight peel/open animation before moving to screen 02. The reveal must not block swipe navigation.
2. **Margin note:** One or two hand-drawn annotations can reveal when tapped. Keep them optional and provide a clear visual affordance.
3. **Memory sticker:** A tiny heart, star, or tomato doodle may gently react to tap with a one-time wobble or tiny burst. No repeated looping.
4. **Final stamp:** On screen 17, the user may tap “Hate u more jii 🤭” to reveal a little stamped reply. It must be optional; no text-entry field and no pressure to send anything.

## Motion constraints

- Use small, quick, soft movement; do not add bouncing UI everywhere.
- No forced auto-advance.
- No confetti explosion.
- No audio autoplay.
- No scroll-jacking.
- Every story screen must be readable and complete without any interaction.
- Under reduced-motion settings, remove transforms and use instant or simple opacity changes.

## Accessibility

- All interactive elements must be keyboard focusable.
- Use buttons for actions, not clickable divs.
- Provide accessible names for icon-only controls.
- Maintain visible focus styles.
- Ensure text is selectable and screen-reader order follows the story order.
- Do not rely on colour alone to communicate active progress.
- Support left/right arrow keys without breaking normal tab navigation.
