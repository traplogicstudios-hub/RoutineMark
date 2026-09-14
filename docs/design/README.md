# RoutineMark Design Handoff

This folder contains the approved RoutineMark design handoff from Stitch.

## Primary Design Contract

- `DESIGN.md` is the canonical design contract for implementation.
- Use the written semantic palette and component guidance in `DESIGN.md` when exported prototype tokens conflict.
- Treat Stitch exports and screenshots as visual references, not production data.

## Stitch Exports

The `stitch-exports/` folder contains the HTML exports used during design review:

- `routinemark_today_dashboard_locked.html`
- `routinemark_today_active_recovery_day.html`
- `routinemark_today_dashboard_v2.html`
- `routinemark_today_dashboard.html`

## Screenshots

The `screenshots/` folder contains the matching visual references:

- `routinemark_today_dashboard_locked.png`
- `routinemark_today_active_recovery_day.png`
- `routinemark_today_dashboard_bodyweight_draft.png`
- `routinemark_today_dashboard_initial.png`

## Implementation Notes

- RoutineMark remains a mobile-first app/PWA with five tabs: Today, Workout, Habits, Progress, and Coach.
- Preserve the approved calm athletic utility direction.
- Normalize implementation toward the canonical semantic colors in `DESIGN.md`.
- Ignore fake sample data in the exports where it conflicts with the real RoutineMark data model.
