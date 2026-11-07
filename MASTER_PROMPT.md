# MASTER BUILD PROMPT — DEAR TAMATARR 🍅

You are an award-winning digital art director, interaction designer, and senior frontend engineer. Build a beautiful, polished, mobile-first digital greeting card for a person affectionately called **Thabbu / Tamatarrr** by the sender, Arif.

Before coding, read all project files:

1. `AGENTS.md`
2. `STORYBOARD.md`
3. `DESIGN_SYSTEM.md`
4. `INTERACTIONS.md`
5. `IMPLEMENTATION_SPEC.md`
6. `CONTENT_AND_ASSETS.md`
7. `QA_CHECKLIST.md`

Treat these files as the source of truth. Do not replace the story, tone, or design direction with a generic romantic template.

## THE CREATIVE BRIEF

Create a **full-screen, horizontal, swipe-through greeting card**. It must not look or behave like a normal website, landing page, portfolio, slideshow deck, or mobile app dashboard.

The experience should feel like a tiny handmade art object from an independent creative studio: contemporary, girly, warm, poetic, playful, restrained, tactile, slightly imperfect, and deeply personal.

Think: an editorial stationery collection meets a charming scrapbook, with the confidence and whitespace of a premium art print.

### Core concept

**“I'm Done With You, Tamatar.”**

The opening looks mock-serious and suggests a breakup. The very next screen breaks the tension:

**“HAHA, U THINK I DO? VAAIPE ILA PO!”**

From there, the experience becomes a sequence of little remembered moments, private jokes, nicknames, games, everyday care, and emotionally meaningful lines from the friendship. End with the 11:11 wish and the familiar “Hate u soo soo sooo much, Thabbu jii!” ritual.

The intent is affection and appreciation, not guilt, pressure, or an ultimatum. Never frame Thabbu as responsible for Arif's happiness, and never demand a reply or commitment.

## NON-NEGOTIABLE EXPERIENCE RULES

- Mobile-first. Design for a 360 × 800 viewport first; verify 375 × 812 and 390 × 844.
- Each screen occupies the full available viewport, respecting mobile safe areas.
- The main narrative scrolls **horizontally**, one full-screen panel at a time.
- Use native horizontal scrolling with CSS scroll snapping. Do not hijack all touch gestures with a custom drag implementation.
- The interface is **light mode only**. Do not add dark mode, theme toggles, or automatic dark-theme styling.
- No conventional header, navbar, footer, sidebar, pricing-style cards, or website sections.
- No visible browser-like UI inside the design. It should feel like a greeting card, not a web product.
- Keep each screen concise. A single emotional idea per screen. Large type, short copy, deliberate whitespace.
- Use small, tasteful interactive surprises; never make the core story dependent on discovering hidden controls.
- Avoid a generic pink overload. Use the palette and contrast rules in `DESIGN_SYSTEM.md`.
- Do not use stock photos of couples, random AI-generated faces, fake chat screenshots, or generic romantic photography.
- Do not invent personal memories, quotes, dates, promises, or events that are not in the supplied story files.
- Do not expose private health or medication details. In particular, exclude references to sleeping tablets, PCOS, or any medical routines.
- No autoplay music, sound effects, or browser notification requests. If optional sound is implemented, it must be off by default and user-triggered.
- Do not add a form that asks for a reply. The final interaction can be a playful optional button, but it must be skippable.

## VISUAL DIRECTION

Use `DESIGN_SYSTEM.md` precisely. The main visual language is:

- warm paper / cream backgrounds
- blush and soft cherry accents
- butter-yellow highlights
- occasional lavender
- elegant editorial serif headlines
- clean readable sans-serif body copy
- very limited handwritten accent typography
- subtle paper grain, deckled edges, tape, tiny hand-drawn stars, hearts, arrows, underlines, and imperfect circles
- generous negative space
- varied compositions across screens, as if every page was art-directed separately

The result should be feminine and charming without becoming childish, overly decorative, or cluttered.

## NARRATIVE AND COPY

Implement the 17-screen sequence in `STORYBOARD.md`. Preserve Arif's Tanglish rhythm, spelling style, and code words: `jii`, `Thabbu`, `Tamatarrr`, `panda girl`, `bamboo bear`, `meri teddy`, `deewana dola`, `tubelight`, `Hate u`, `VAAIPE ILA PO`, and the familiar emojis.

Use the supplied copy as the default. You may make tiny typographic edits for readability, but do not turn the voice into polished formal English. Never over-write a screen. The copy should feel spoken by Arif, not written by a brand agency.

A few screens may contain tap-to-reveal marginal notes or tiny annotations, but all essential words must be visible without tapping.

## INTERACTION DESIGN

Implement the interactions in `INTERACTIONS.md`:

- horizontal swipe / trackpad scroll between full-screen panels
- subtle snap-to-panel behavior
- minimal progress dots or a tiny page index (not a large progress bar)
- a discreet “swipe” cue on the first screen that disappears after interaction
- optional small surprise reveals: envelope opening, a note unfolding, a doodle reaction, or a final playful button
- keyboard arrow navigation on desktop and visible focus states
- reduced-motion support

Do not show a big onboarding tutorial. The card should be self-explanatory.

## TECHNICAL REQUIREMENTS

Follow `IMPLEMENTATION_SPEC.md`. Use a clean, maintainable component structure. Keep the copy in a data file or typed array so it can be edited without touching layout code.

Required outcomes:

1. A fully working Next.js app.
2. A beautifully art-directed 17-screen horizontal greeting card.
3. Responsive rendering from small mobile through desktop.
4. No horizontal overflow inside individual panels; only the narrative track should scroll horizontally.
5. No vertical page scroll during the main card experience except where a small screen genuinely requires internal copy scrolling—preferably avoid that by keeping copy concise.
6. Reduced motion and keyboard support.
7. A graceful fallback when fonts or motion assets fail to load.
8. No external API calls, database, auth, or analytics.
9. A README with install/run/build instructions.

## DESIGN QUALITY BAR

Do not settle for a row of identical cards with a pink background. Each of the 17 panels should have a distinct composition while belonging to one visual family. Use varied scale, alignment, paper treatments, decorative motifs, and rhythm.

Avoid:

- generic gradient blobs
- glassmorphism
- heavy drop shadows
- random floating emojis everywhere
- overused heart backgrounds
- cookie-cutter UI cards
- oversized navigation controls
- excessive animation
- tiny body text
- faux handwriting for long paragraphs
- visual elements that compete with the copy

Prefer:

- one strong focal point per screen
- varied but consistent editorial layouts
- imperfect hand-drawn details used sparingly
- subtle tactile texture
- fine rules and tiny labels
- surprising scale shifts
- warm, human copy
- visual pauses between emotional beats

## FINAL DELIVERY

Build the actual app in the current repository. Do not stop at a mockup, plan, or code snippets. Run the app's lint/typecheck/build commands where available, fix errors, and report:

- what was built
- which files are important
- how to run it locally
- any remaining limitations

If there is no existing repository, scaffold the project cleanly. Do not ask for confirmation; make thoughtful creative decisions consistent with the brief.
