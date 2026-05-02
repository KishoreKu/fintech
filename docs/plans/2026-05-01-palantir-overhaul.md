# Palantir-Grade Overhaul Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Transform the Westley Group site into a full-bleed, all-dark, animated experience inspired by palantir.com.

**Architecture:** All sections flip to dark (#000/#0a0a0a). Navigation becomes transparent-on-dark then glass-black on scroll. GSAP ScrollTrigger powers fade/slide reveals. A typewriter effect animates the hero headline. Count-up numbers animate into view in a new stats bar.

**Tech Stack:** React 19, TypeScript, Tailwind CSS, GSAP + ScrollTrigger, lucide-react

---

## Task 1: Dark Global Design Tokens

**Files:**
- Modify: `src/index.css`

Replace the light `:root` tokens with a dark palette and add new utilities:
- background `#000000`, surface `#0a0a0a`, border `rgba(255,255,255,0.08)`, accent `#2B59FF`
- text-primary `#ffffff`, text-secondary `rgba(255,255,255,0.55)`, text-muted `rgba(255,255,255,0.25)`
- Add `--glow-blue: 0 0 40px rgba(43,89,255,0.35)` and `.glow-border` utility class
- Update `body` background to `#000` and text to `#fff`
- Add `@keyframes typewriter-blink { 0%,100%{opacity:1} 50%{opacity:0} }`

Run: `npm run build` — expect success. Commit: `feat: dark global design tokens`

---

## Task 2: Dark Navigation

**Files:**
- Modify: `src/sections/Navigation.tsx`

- Initial state: `bg-transparent`, logo/links always `text-white`
- Scrolled state: `bg-black/90 backdrop-blur-md border-white/10`
- CTA: `border-white/20 bg-white/5 hover:bg-[#2B59FF] hover:border-[#2B59FF]`
- Mobile menu: `bg-black` (not white)

Run: `npm run lint`. Commit: `feat: dark navigation`

---

## Task 3: Typewriter Hero + Stats Bar

**Files:**
- Modify: `src/App.tsx` (hero section, lines ~83–157)

1. Add typewriter hook in `App` component — types the headline character-by-character at 28ms per char. Show blinking `|` cursor while typing.
2. Add stats bar below the hero grid with 4 metrics: `42+` Workflows, `8` Data Sources, `99.9%` Uptime, `<10wk` Delivery. Use `IntersectionObserver` to trigger count-up animation on scroll.
3. Stats bar: dark `bg-black` cells separated by `bg-white/10` gaps, bordered top with `border-white/10`.

Run: `npm run lint`. Commit: `feat: typewriter hero + stats bar`

---

## Task 4: Dark Capabilities Section

**Files:**
- Modify: `src/App.tsx` (platform section, lines ~159–187)

- Section bg: `bg-[#050505]`, text: `text-white`
- Cards: `bg-[#0a0a0a] border border-white/[0.08] hover:border-[#2B59FF]/40 hover:shadow-[0_0_30px_rgba(43,89,255,0.12)] transition-all duration-500`
- Icon color: `text-[#2B59FF]/60`. Section label: `text-[#2B59FF]`
- Add GSAP stagger fade-up scroll-reveal on the card grid

Commit: `feat: dark capabilities section`

---

## Task 5: Dark Work + Methodology Sections

**Files:**
- Modify: `src/App.tsx` (lines ~189–258)

- Work section video panel: add `border-[#2B59FF]/20 shadow-[0_0_60px_rgba(43,89,255,0.15)]` glow
- Methodology section: bg `bg-[#050505]`, text `text-white`, phase cards `bg-[#0a0a0a] border border-white/[0.08] hover:border-[#2B59FF]/30`
- GSAP stagger reveal on phase cards

Commit: `feat: dark work + methodology sections`

---

## Task 6: Polish Partners + Contact + Footer

**Files:**
- Modify: `src/App.tsx` (lines ~260–322)

- Partners: increase marquee logo opacity to `opacity-30 hover:opacity-80`
- Contact: add `glow-border` class on email hover, blinking cursor dot next to "Access Point" label
- Footer links: `text-white/35 hover:text-white`

Commit: `feat: polish partners contact footer`

---

## Task 7: Dark Pinned Sections (CaseStudy + Services)

**Files:**
- Modify: `src/sections/CaseStudySection.tsx`
- Modify: `src/sections/ServicesSection.tsx`

- Both: bg `bg-[#050505]` (was `#F6F6F2`)
- Accent card: `bg-[#0d1530] border border-[#2B59FF]/30 shadow-[0_0_40px_rgba(43,89,255,0.2)]`
- White detail cards: `bg-[#0a0a0a] border border-white/10`, text `text-white / text-white/60`
- CTA buttons: `text-[#2B59FF] hover:text-white`

Commit: `feat: dark pinned sections`

---

## Task 8: Global Scroll-Reveal + Hero Glow

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.tsx`

1. Add CSS `.reveal` / `.reveal.in-view` classes for fade-up transitions
2. `IntersectionObserver` in App `useEffect` adds `in-view` to all `.reveal` elements
3. Tag all section headings and sub-copies with `reveal` class
4. Add `.hero-glow` radial blue gradient element at top of hero section
5. Final: `npm run lint && npm run build` — fix any errors

Commit: `feat: scroll-reveal + hero glow`

---

## Task 9: QA + Deploy

1. `npm run dev` — visually verify every section
2. Check mobile nav (hamburger, dark overlay, links)
3. Verify typewriter fires once, stats count-up on scroll
4. Verify GSAP pinned sections still animate
5. `npm run build` — production bundle
6. `firebase deploy --only hosting`
7. Commit: `chore: palantir overhaul complete`
