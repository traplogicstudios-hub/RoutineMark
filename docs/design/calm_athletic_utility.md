---
name: Calm Athletic Utility
colors:
  surface: '#fbf8fc'
  surface-dim: '#dcd9dd'
  surface-bright: '#fbf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2f7'
  surface-container: '#f0edf1'
  surface-container-high: '#eae7eb'
  surface-container-highest: '#e4e1e6'
  on-surface: '#1b1b1e'
  on-surface-variant: '#434655'
  inverse-surface: '#303033'
  inverse-on-surface: '#f3f0f4'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006e2d'
  on-secondary: '#ffffff'
  secondary-container: '#7cf994'
  on-secondary-container: '#007230'
  tertiary: '#ae0010'
  on-tertiary: '#ffffff'
  tertiary-container: '#d52022'
  on-tertiary-container: '#ffecea'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#7ffc97'
  secondary-fixed-dim: '#62df7d'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005320'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000b'
  background: '#fbf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e1e6'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  stat-display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm-medium:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  label-eyebrow:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-nav:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.25rem
  space-xl: 1.5rem
---

## Brand & Style

This design system delivers a calm, grounded, and distraction-free sanctuary for physical self-mastery and daily routine construction. It rejects the aggressive, hyper-gamified tropes of conventional fitness software—no neon flames, skull motifs, loud level badges, or anime-inspired RPG metrics. Instead, it embodies a modern Scandinavian athletic utility: restrained, uncluttered, intentional, and quiet. 

The interface serves runners, strength trainees, habit builders, and health-focused individuals who value consistency over performative flash. The emotional response is one of composure, focus, and frictionless competence:
- **Atmosphere:** Serene neutral backdrops with pristine contrast, creating an environment that feels like a quiet, well-lit studio rather than a chaotic gym floor.
- **Physicality:** Generous, tactile targets calibrated for real-world execution—operable one-handed with tired or sweaty hands.
- **Tone:** Minimalist, direct, and mature. Typography speaks with high-contrast legibility, delivering key training statistics without decorative visual noise.
- **Semantic Clarity:** Color is applied with strict discipline. Interaction is driven by a single purposeful ultramarine accent, completions earn a calm emerald green confirmation, and strict mode deviations receive an unmistakable crimson alert.

## Colors

The palette operates on a strict functional hierarchy where colors are reserved for definitive roles, preventing cognitive fatigue during physical sessions.

### Core Roles
- **Primary (`#2563eb` - Ultramarine):** The solitary brand and interaction driver. Used exclusively for primary calls to action, selected navigation destinations, active day indicators, and highlighted coaching elements. Never dilute its impact with competing decorative tints.
- **Secondary (`#16a34a` - Emerald Green):** The triumph of completion. Dedicated solely to completed sets, checked habit targets, filled streak matrix cells, and terminal workout completion buttons.
- **Tertiary (`#dc2626` - Crimson Red):** High-stakes accountability. Reserved strictly for strict-mode failure warnings, destructive workout aborts, and penalty alerts. It signals real consequence.
- **Neutral (`#18181b` - Deep Zinc / Dark Slate):** Anchors high-contrast typography, dark-mode foundational canvases, and prominent secondary surface boundaries.

### Canvas & Surface Architecture
- **Light Canvas (`#f9fafb`):** Glare-free foundational surface engineered for bright outdoor runs and daylight gyms.
- **Light Surfaces (`#ffffff`):** Pure white container surfaces floating cleanly over the canvas.
- **Recessed Neutrals (`#f3f4f6`):** Inactive stepper segments, secondary button fills, and unfilled habit matrix days.
- **Subtle Hairlines (`#e5e7eb` / `#f3f4f6`):** Low-contrast structural strokes establishing crisp visual containment.
- **Dark Foundations (`#18181b` canvas, `#27272a` card surfaces, `#3f3f46` hairline borders):** Velvety low-light palette calibrated for battery conservation and zero glare during dawn/dusk routines.

## Typography

The typography is built upon Inter's neutral, utilitarian structure, tuned for instant cognitive absorption mid-exercise. 

### Hierarchy Guidelines
- **Top-Level Views (`headline-lg`):** Anchors the 5 primary destinations (`Today`, `Workout`, `Habits`, `Progress`, `Coach`). Letter tracking is tightened (`-0.02em`) to establish a firm, athletic presence.
- **Section & Modal Headers (`headline-md`):** Direct prompts and checkpoint questions.
- **Movement & Entity Titles (`headline-sm`):** Exercise identifiers (e.g., "Barbell Deadlift", "Tempo Run") rendered with prominent weight for rapid reading from waist height.
- **Numeric Glance Data (`stat-display`):** Centered values in rep counters, interval clocks, and weight steppers.
- **Temporal Datelines (`label-eyebrow`):** Uppercase calendar datelines (e.g., `MONDAY, OCTOBER 14TH`) with expanded tracking (`0.05em`) to visually separate temporal metadata from actionable screen titles.
- **Body & Chat Copy (`body-base`, `body-sm`):** Exercise cues, program descriptions, and AI coach dialogue formatted with relaxed line heights (`1.5` to `1.625`) to prevent optical density.

## Layout & Spacing

### Device Shell & Fluid Adaptation
The design system enforces a disciplined mobile-first shell. On mobile devices, the layout occupies 100% viewport width with a safe `1.5rem` (`24px`) lateral outer margin. On tablet and desktop viewports, the primary application column remains strictly constrained to a maximum width of `448px` (`max-w-md`), centered horizontally over a peaceful, muted canvas. This ensures one-handed thumb interaction ranges remain uniform across all devices.

### Layout Mechanics
- **Vertical Flow:** Views operate within a fixed full-height shell (`100vh`) with an independent internal scrolling view that terminates with a `6rem` (`pb-24`) clearance buffer, ensuring items are never obstructed by the floating navigation bar.
- **Card Spacing:** Distinct functional units in feeds maintain a consistent `1.5rem` (`24px`) gap.
- **Interior Density:** Interactive cards feature uniform `1.25rem` (`20px`) padding, establishing an exact 1:1 balance between text content and container walls.
- **Touch Bounds:** All primary workout actions, steppers, and habit toggles enforce a minimum target height of `48px` to `56px`.

## Elevation & Depth

Visual hierarchy relies on restrained tonal surfaces and precision hairlines rather than dramatic skeuomorphic shadows or thick borders.

### Depth Strategy
- **Layer 0 (Canvas):** Base background tone (`#f9fafb` light / `#18181b` dark), ground level for all inactive areas.
- **Layer 1 (Card & Row Surfaces):** Primary content layer (`#ffffff` light / `#27272a` dark). Elevation is expressed via a featherlight ambient shadow (`box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)`) reinforced by a crisp 1px hairline stroke (`#f3f4f6` light / `#3f3f46` dark).
- **Layer 2 (Floating Overlays & Docks):** Persistent bottom navigation, sticky workout controls, and interactive modal dialogs. Modals utilize soft diffused ambient shadowing (`box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)`) over a neutral dark scrim (`rgba(0, 0, 0, 0.5)`).
- **Tonal Inset Surfaces:** Inactive matrix squares, secondary pill buttons, and stepper controls sit recessed into the surface using subtle neutral fills (`#f3f4f6` light / `#3f3f46` dark) with zero border elevation.

## Shapes

The design system employs a refined curvature language:
- **Default Elements (`0.5rem` / `rounded-md`):** Checkbox boxes, micro tags, and segmented selector buttons.
- **Secondary Containers & Buttons (`0.75rem` / `rounded-xl`):** Primary action CTAs, input fields, and habit rows.
- **Primary Cards & Modals (`1rem` to `1.5rem` / `rounded-2xl`):** Workout set cards, modal surfaces, insight callouts, and message bubbles.
- **Progress Matrix Tiles (`0.125rem` / `rounded-sm`):** Habit discipline tiles maintain crisp, geometric mini-square geometry to reinforce systematic structure.
- **Navigation Indicators & Badges (`9999px` / `rounded-full`):** Pill-shaped status indicators, active day indicators, and floating utility badges.

## Components

### Buttons
- **Primary CTA:** Full-width block format, `52px` minimum height, `rounded-xl`, filled with `#2563eb` text-white font-semibold. Smooth transition to `#1d4ed8` on hover/active. Placed in the lower third of the screen for thumb reach.
- **Terminal Success Action:** Shifts dynamically to `#16a34a` on the final movement of an exercise session or completed habit cycle.
- **Strict Hazard Action:** Full-width `#dc2626` button reserved for destructive challenge resets or workout abandon confirmations.
- **Utility / Tertiary Pill:** Compact height (`32px`), `rounded-lg`, subtle neutral fill (`#f3f4f6` light / `#27272a` dark), muted text.

### Segmented Controls & Steppers
- **Workout Rep/Weight Stepper:** Segmented horizontal layout containing 48px square decrement (`-`) and increment (`+`) buttons styled in neutral recessed fills (`#f3f4f6` / `#3f3f46`), bracketing a central `stat-display` bold value.
- **Effort (RPE) Segmented Grid:** 4-column horizontal pill group (`Easy`, `Moderate`, `Hard`, `Max`). Inactive states are light neutral cards. Active state switches to soft ultramarine surface (`#eff6ff`) with `#2563eb` border and text.

### Habit Items & Checkboxes
- **Habit Task Row:** Card row (`rounded-xl`, `p-4`) containing a dedicated 20x20px rounded checkbox (`rounded-md`). Unchecked items display a clean hairline border; checked items fill smoothly with `#16a34a` and a white check icon, accompanied by a subtle strikethrough transition on the label.

### 75-Day Discipline Matrix
- Compact 10x8 tile grid. Individual day cells are aspect-square (`rounded-sm`).
  - *Completed Days:* Filled solid `#22c55e`.
  - *Active Today:* Highlighted `#2563eb` with a subtle focus ring.
  - *Pending Horizon:* Recessed `#f3f4f6` light / `#3f3f46` dark.

### Cards & Insight Banners
- **Standard Card:** Clean white (`#ffffff` / `#27272a`) surface, `rounded-2xl`, 1px subtle boundary border, `p-5`.
- **Coach Insight Banner:** Distinctive calm callout featuring an ultramarine background tint (`#eff6ff` light / `rgba(30, 58, 138, 0.2)` dark) bounded by a soft blue border (`#dbeafe`).

### Conversational Coach Stream
- **User Message:** Right-aligned bubble in `#2563eb` with crisp white text, `rounded-2xl` with an asymmetric flattened bottom-right corner (`rounded-br-sm`).
- **Coach Message:** Left-aligned bubble on card surface (`#ffffff` / `#27272a`) with hairline border, `rounded-2xl` with an asymmetric flattened bottom-left corner (`rounded-bl-sm`).
- **Docked Input:** Persistent bottom bar with an integrated pill text input and circular send action.

### Fixed Navigation Bar
- Anchored to the viewport bottom, strictly constrained to `max-w-md` (`448px`).
- Features the 5 primary destinations (`Today`, `Workout`, `Habits`, `Progress`, `Coach`) with vertical icon-over-label pairs. Active states trigger `#2563eb`; inactive items remain `#6b7280`.