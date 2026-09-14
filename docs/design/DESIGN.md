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
  display-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  metric-num:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.025em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

The design system delivers an austere, disciplined, and high-performance training interface engineered for individuals committed to measurable routine execution. It rejects gamification tropes—no experience points, cartoon trophies, streak confetti, or hyperbolic motivational badges. Instead, it embodies quiet competence, functional precision, and mechanical clarity reminiscent of high-end sports telemetry, architectural instrumentation, and modern tactical timing equipment.

### Key Principles
- **Clarity Over Decoration:** Negative space and stark contrasts dictate hierarchy. Surfaces exist strictly to isolate data and actions without visual noise.
- **Immediate Ergonomic Accessibility:** Interactions account for physical exertion contexts—sweating hands, elevated heart rates, movement, and single-handed mobile operation. Hit zones never compromise below 48px.
- **Objective Feedback:** Color and micro-interactions communicate status deterministically: complete, in progress, or unattempted. Visual rewards are immediate, functional, and grounded.

## Colors

The palette is engineered for rapid legibility and precise state transitions across both light and dark display modes.

### Core Roles
- **Primary / Interaction Blue (`#2563EB`):** Dedicated to primary calls-to-action, active tracking states, and focused navigation targets. Hover/Pressed state operates at `#1D4ED8`.
- **Completion Green (`#16A34A`):** Indicates logged sets, completed intervals, confirmed habits, and verified routines.
- **Strict / Destructive Red (`#DC2626`):** Reserved exclusively for hard stops, failed targets, critical warnings, and record deletions.
- **Neutral & Text (`#18181B` light text / canvas dark):** Provides deep optical weight in light mode and acts as the deep substrate base in dark mode.

### Light Mode Architecture
- **Canvas:** `#F9FAFB`
- **Card Surface:** `#FFFFFF`
- **Recessed Surface:** `#F3F4F6`
- **Subdued Border:** `#E5E7EB`
- **Main Text:** `#18181B`
- **Muted / Meta Text:** `#71717A`

### Dark Mode Architecture
- **Canvas:** `#18181B`
- **Card Surface:** `#27272A`
- **Recessed Surface / Border:** `#3F3F46`
- **Main Text:** `#F4F4F5`
- **Muted / Meta Text:** `#A1A1AA`

## Typography

Inter is configured to support high-contrast data consumption, clear telemetry metrics, and athletic logging. Tabular numbers (`tnum`) must be enabled on all numerical outputs to prevent horizontal layout shifting during real-time timers, count-ups, and live weight inputs.

All labels and metrics adhere to tight negative tracking on display scales to enforce density, while smaller supporting metadata uses open tracking for instant scannability during motion.

## Layout & Spacing

The design system uses a strict 4px/8px modular base rhythm inside an adaptive grid architecture tailored for thumb-reach access.

### Screen Adaptations
- **Mobile (Viewport < 768px):** Single-column fluid stack. Page margin is `1rem` (16px), column gutter is `1rem`. Critical interactive anchors (e.g., set logging, timer toggles, step increments) reside strictly within the lower 40% vertical viewport threshold.
- **Tablet (768px - 1024px):** 6-column fluid grid. Page margin is `1.5rem` (24px). Dual-pane execution views (e.g., active workout regimen on left, telemetry and rest countdowns on right).
- **Desktop (> 1024px):** 12-column fixed-max grid capped at `1200px` centered width with `2rem` (32px) margins and `1.5rem` gutters.

## Elevation & Depth

Visual hierarchy is maintained through strict tonal layering and subdued boundary strokes rather than diffuse atmospheric drop-shadows.

### Surface Hierarchy
1. **Base Canvas:** The default backdrop (`#F9FAFB` light / `#18181B` dark).
2. **Card Surfaces:** Sits on top of the canvas (`#FFFFFF` light / `#27272A` dark) bordered by a 1px uniform structural line (`#E5E7EB` light / `#3F3F46` dark).
3. **Recessed Wells:** Used for inactive counters, nested inputs, and historical list headers (`#F3F4F6` light / `#3F3F46` dark).
4. **Floating Action Sheets & Modals:** Elevated surfaces retain the card background color with a restrained ambient border shield (`0 8px 24px rgba(0, 0, 0, 0.08)` in light; `0 8px 24px rgba(0, 0, 0, 0.40)` in dark) plus a 1px border. No diffuse, wide-radius colored glow effects are permitted.

## Shapes

The geometric framework is controlled and structural, deploying `roundedness: 2` (base radius `0.5rem` / 8px).

- **Standard Elements (8px):** Buttons, inputs, inline status chips, cards, bottom sheet containers.
- **Container Elements (16px / `rounded-lg`):** Modular card blocks, workout plan grouping shells, calendar month clusters.
- **Utility Indicators (Full / 9999px):** Circular set completion checkboxes, stopwatch rings, active presence dots, and pill tab-bar toggles.

## Components

### 1. Primary & Secondary Buttons
- **Touch Target:** Minimum height of 48px across all variants.
- **Primary:** Background `#2563EB`, text `#FFFFFF`, font `label-lg`. Active/Hover background `#1D4ED8`.
- **Secondary / Subdued:** Background `#F3F4F6` (light) / `#3F3F46` (dark), border 1px solid `#E5E7EB` (light) / `#3F3F46` (dark), text `#18181B` (light) / `#F4F4F5` (dark).
- **Destructive:** Background transparent, border 1px solid `#DC2626`, text `#DC2626`. Pressed background fills with 10% opacity `#DC2626`.

### 2. Input Fields & Steppers
- **Height & Radius:** 48px height, 8px border radius.
- **Metrics/Steppers:** Numeric fields feature dedicated +/- touch pads measuring 48x48px on lateral edges, flanking bold tabular digits in `metric-num` or `headline-md`.
- **State Colors:** Default border `#E5E7EB` (light) / `#3F3F46` (dark); Focus border `#2563EB` with no outer glow.

### 3. Checkboxes & Habit Affirmation Tokens
- **Physical Size:** Check targets are circular or rounded squares minimum 48x48px hit territory with an internal visual shape of 28x28px.
- **Completion Transition:** Immediate fill to `#16A34A` with crisp white icon checkmark. No spring animations or celebratory particle bursts.

### 4. Minimalist Utility Cards
- **Construction:** 1px stroke `#E5E7EB` (light) / `#3F3F46` (dark), 16px corner radius, internal padding `1rem` (16px).
- **Structure:** Metric title in `label-sm` (uppercase, muted text), primary value in `metric-num` or `headline-lg`, supporting delta or frequency badge pinned to top-right.

### 5. Chips & Filters
- **Height:** 36px height, 48px effective hit zone via negative margin touch expansions.
- **Unselected:** Transparent fill, 1px border `#E5E7EB` (light) / `#3F3F46` (dark), text `#71717A` (light) / `#A1A1AA` (dark).
- **Selected:** Background `#18181B` (light) / `#F4F4F5` (dark), text `#FFFFFF` (light) / `#18181B` (dark), zero border.

### 6. 5-Tab Bottom Navigation Bar
- **Tabs:** Strictly 5 items: *Today*, *Workout*, *Habits*, *Progress*, *Coach*.
- **Height & Placement:** 64px fixed structural container docked directly to bottom safe-area margin.
- **Surface:** `#FFFFFF` (light) / `#27272A` (dark) with top structural border line 1px solid `#E5E7EB` (light) / `#3F3F46` (dark).
- **Interaction Target:** Each tab spans equal width (20%) with a centered 48x48px thumb target. Active icon and label apply `#2563EB`; inactive state applies `#71717A` (light) / `#A1A1AA` (dark).

### 7. Status & Telemetry Indicators
- **Rest Timers:** Recessed surface background with progress bar filling via `#2563EB`. High contrast numerical readout in `metric-num`.
- **Streak & Consistency Grid:** Discrete monochrome/green blocks denoting binary state per day (empty = unlogged, filled `#16A34A` = achieved).