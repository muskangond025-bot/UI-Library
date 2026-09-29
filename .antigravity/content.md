# Content Rules

## Purpose

This file defines how content must be handled inside reusable UI sections.

The UI library must separate:

- content/data
- visual styling
- layout
- component behavior

Every reusable section must be capable of rendering different content without requiring its React/Next.js implementation to be rewritten.

---

## 1. Content Comes From section.settings

Section content must come from:

```ts
section.settings
```
PERMANENT GOVERNING RULE UPDATE

Update:

.antigravity/content.md

Add the following permanent rule without removing or weakening any existing rules.

==================================================
DESIGN + ANIMATION METADATA SYNCHRONIZATION
==================================================

The section header metadata must always describe the ACTUAL
implementation currently rendered in the preview.

The metadata is not static placeholder content.

For every UI section, the header must accurately represent:

- actual visual design
- actual layout concept
- actual interaction
- actual animation
- actual motion behavior
- actual variant identity

The section header and the rendered component must always stay synchronized.

--------------------------------------------------
WHEN A SECTION IS CREATED
--------------------------------------------------

Before completing a new section, inspect the actual implementation
and create metadata based on what was actually built.

The title/variant name must describe the actual design concept.

The description must describe the actual design AND actual animation
or interaction when animation/interaction is present.

Do NOT use generic descriptions.

Do NOT copy metadata from another variant.

Do NOT assume that two variants are different only because their
layout is different.

The actual motion/interaction must also be considered.

--------------------------------------------------
WHEN A DESIGN OR ANIMATION CHANGES
--------------------------------------------------

This is a mandatory synchronization rule:

IF THE DESIGN CHANGES
→ UPDATE THE SECTION HEADER METADATA.

IF THE ANIMATION CHANGES
→ UPDATE THE SECTION HEADER METADATA.

IF THE INTERACTION CHANGES
→ UPDATE THE SECTION HEADER METADATA.

IF THE VISUAL CONCEPT CHANGES
→ UPDATE THE SECTION HEADER METADATA.

The metadata must never describe an old implementation.

Example:

Previous implementation:
"Layered Editorial Stack with staggered reveal."

If the implementation is changed to:
"Horizontal marquee with continuous motion."

The header MUST also change to describe:
"Horizontal Marquee"
and its corresponding motion.

Never leave the old description after changing the implementation.

--------------------------------------------------
IMPLEMENTATION IS THE SOURCE OF TRUTH
--------------------------------------------------

The actual rendered component is the source of truth.

Do NOT design the metadata first and then force the component
to match the metadata.

Instead:

1. Build/inspect the actual component.
2. Identify its visual design.
3. Identify its animation.
4. Identify its interaction.
5. Update the metadata to accurately describe it.

--------------------------------------------------
NO GENERIC METADATA
--------------------------------------------------

Avoid descriptions such as:

"Premium ecommerce section."

"Modern product section."

"Beautiful product highlights."

"Reusable responsive component."

These are insufficient.

The metadata should explain what makes THIS specific variant
different.

--------------------------------------------------
VARIANT UNIQUENESS
--------------------------------------------------

Each variant must have metadata that reflects its own implementation.

If Product Highlights 01 uses:

- editorial layering
- staggered motion
- depth

then its metadata must describe that.

If Product Highlights 02 uses:

- horizontal marquee
- continuous movement
- scrolling content

then its metadata must describe that.

Do not give both variants the same design/animation description.

--------------------------------------------------
MANDATORY FINAL CHECK
--------------------------------------------------

Before considering a section complete, verify:

[ ] Header title matches the actual design.

[ ] Header description matches the actual design.

[ ] Animation mentioned in metadata actually exists.

[ ] Animation changes are reflected in metadata.

[ ] Interaction mentioned in metadata actually exists.

[ ] No old metadata remains after a design/animation change.

[ ] Metadata is unique to the current variant.

This rule applies permanently to ALL current and future UI sections.
