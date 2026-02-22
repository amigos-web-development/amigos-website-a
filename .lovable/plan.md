## Entrance Animations for Hero Section

### What will change

When a user first visits the website, two entrance animations will play in the Hero section:

1. **Content card** -- slides in from the right side of the screen to its current position
2. **4-column product row** -- slides up from below the screen to its current position

Content card animations will be 1st animation and 4-column product row will be 2nd animation after 1 second on initial page load (not on every background slide change).

### Technical Details

**File: `src/components/HeroSection.tsx**`

- Add a one-time entrance `motion.div` wrapper around the **content card** (lines 52-80) with:
  - `initial={{ opacity: 0, x: 100 }}` (starts off-screen to the right)
  - `animate={{ opacity: 1, x: 0 }}`
  - `transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}`
  - This replaces the current per-slide animation on the content card. The inner slide-change animation (keyed by `current`) will remain for text transitions.
- Wrap the **featured products row** (lines 82-110) in a `motion.div` with:
  - `initial={{ opacity: 0, y: 100 }}` (starts below the screen)
  - `animate={{ opacity: 1, y: 0 }}`
  - `transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}` (slightly delayed so it follows the content card)

No new dependencies or files needed -- this uses the existing Framer Motion library already imported.