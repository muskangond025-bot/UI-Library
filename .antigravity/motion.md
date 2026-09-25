# Motion Rules

## Purpose

This file defines how motion and animation should be used across the reusable UI section library.

Motion should improve:

- hierarchy
- interaction
- feedback
- continuity
- perceived quality
- visual storytelling

Motion must never replace good layout, typography, content hierarchy, or usability.

The goal is:

"premium, intentional, restrained motion"

not:

"animate everything."

---

## 1. Motion Is Optional

Not every section needs animation.

A section may be completely static when static presentation provides the better experience.

Do not add animation simply because the section is part of a modern UI library.

Animation should have a clear purpose.

---

## 2. Motion Hierarchy

Use motion according to importance.

A useful hierarchy is:

1. Page/section entrance
2. Major content reveal
3. Primary interaction
4. Secondary interaction
5. Decorative motion

Important content should receive the strongest visual attention.

Decorative animation should never overpower the primary content.

---

## 3. Entrance Animation

Sections may use subtle entrance animations.

Possible patterns:

- fade
- fade + small vertical movement
- fade + small scale
- controlled image reveal
- staggered content reveal

Keep entrance movement restrained.

Avoid large movements that make the interface feel unstable.

---

## 4. Scroll Reveal

Scroll-based reveal can be used when it improves visual storytelling.

Suitable patterns include:

```text
opacity: 0 → 1
transform: translateY(16px) → translateY(0)
```
