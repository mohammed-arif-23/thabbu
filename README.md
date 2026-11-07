# DEAR TAMATARR 🍅 — Digital Keepsake for Thabbu

A mobile-first, full-screen, horizontally swipeable digital greeting card and keepsake for Thabbu, crafted in Arif's Tanglish voice.

Part love note, part scrapbook, part handmade stationery collection.

---

## 🎨 Creative Concept

- **The Hook:** *"I'M DONE WITH YOU, TAMATAR. 🍅"* — mock-serious breakup bait.
- **The Twist:** *"HAHAHA, U THINK I DO? VAAIPE ILA PO! 🤭"* — reveals the card as a warm, affectionate museum of shared memories, code words, and inside jokes.
- **The Journey:** 17 horizontally swipeable panels covering the Instagram request, the nicknames, cheek pinches, 7 Arts ride and side-mirror reactions, shared coffee cup, principal's office hand-holding, the 3–5 seconds shoulder rest, daily check-ins, Truth or Dare games, Nole-Matten spam, first voice notes, chem lab back-bench carvings, and the 11:11 closing wish.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js 15 (App Router, React 19, TypeScript)
- **Styling:** Custom CSS with design tokens (`DESIGN_SYSTEM.md`), light mode enforced, zero dark mode flash
- **Typography:** Google Fonts loaded with `next/font/google` (`Cormorant Garamond` serif, `DM Sans`, `Caveat` handwritten script)
- **Art Direction:** Bespoke SVG stationery artwork & textures (rubber stamps, wax seal, washi tape, paperclip, coffee cup ring, side mirror, waveform doodle)
- **Interactivity:** Native CSS scroll-snap carousel, gesture swiping on touch, trackpad scrolling, keyboard arrow keys, interactive wax seal & boopable stamps
- **Privacy & Performance:** Zero external APIs, zero backend, zero analytics or telemetry, fully static export capable

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (tested on Node v22)
- npm 9+

### Install Dependencies

```bash
npm install
```

### Run Locally (Dev Server)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. On desktop, view it directly or toggle mobile device simulation (e.g. 390×844 or 375×812) in Chrome DevTools.

### Production Build

```bash
npm run build
npm start
```

---

## 📱 Navigation Controls

- **Mobile:** Swipe horizontally left or right. Native CSS scroll snapping ensures cards snap to viewport.
- **Desktop:**
  - Left / Right Arrow keys (or PageUp / PageDown)
  - Home / End keys to jump to the first or last scene
  - Horizontal trackpad swipe
  - Bottom navigation pill with discrete 17-dot indicator and chevron buttons
- **Interactive Elements:**
  - **Screen 01:** Tap the wax seal to void the fake breakup agreement.
  - **Screen 02:** Tap the tomato stamp to boop and see the counter.
  - **Screen 17:** Tap the final *"Hate u more jii 🤭"* button to stamp your receipt.

---

## 📂 Project Structure

```text
app/
  layout.tsx        # Next.js font loading, light-mode theme color, viewport config
  page.tsx          # Root page rendering GreetingCard
  globals.css       # Design tokens, responsive gallery frame, safe areas, scroll snap
components/
  GreetingCard.tsx  # Master container with tactile paper grain overlay
  StoryTrack.tsx    # Horizontal carousel with IntersectionObserver & keyboard navigation
  StoryPanel.tsx    # Bespoke editorial layouts for each of the 17 storyboard scenes
  TinyNavigation.tsx# Quiet 17-dot progress pill and arrow controls
  doodles/
    Doodles.tsx     # Handcrafted SVG assets: TomatoStamp, WashiTape, EnvelopeSeal,
                    # CoffeeCup, SideMirror, SmileMarks, WaveformDoodle, PaperClip
content/
  story.ts          # Typed data file containing all 17 storyboard narrative scenes
```
