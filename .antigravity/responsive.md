The UI library must use fluid, adaptive layouts.

Components must NOT be designed for a single fixed screen size.

Every section must naturally adapt to:

- small mobile screens
- large mobile screens
- tablets
- small laptops
- standard laptops
- large desktop monitors
- wide desktop screens

Do not assume a fixed viewport width.

Do not build layouts that only look correct at:
- 375px
- 768px
- 1024px
- 1440px
- or any other single target width.

Breakpoints should enhance the layout, not define the only layouts that work.

Use:
- max-width containers
- percentage-based widths
- CSS Grid
- Flexbox
- min/max constraints
- fluid typography where appropriate
- responsive gaps and spacing
- intrinsic sizing
- wrapping
- `clamp()` where useful

Avoid:
- fixed pixel widths for major containers
- absolute positioning for primary layout
- hardcoded viewport-specific coordinates
- unnecessary fixed heights
- horizontal overflow
- layouts dependent on one monitor resolution

A component should remain visually balanced between breakpoints, not only exactly at the breakpoint values.

The goal is:
"responsive + fluid + adaptive",
not merely:
"desktop/tablet/mobile versions".
