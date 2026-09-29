# Component Rules — UI Section Library

## 1. Purpose

This document defines implementation rules for individual UI section components.

Every component should be:

- reusable
- data-driven
- responsive
- accessible
- visually consistent
- predictable
- maintainable

The component should focus on its own UI responsibility.

Do not allow an individual section to become responsible for application-wide architecture.

## 2. Required Component Contract

Every section component receives one `section` prop.

The baseline contract is:

```ts
interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}
```
PERMANENT COMPONENT RULE — METADATA MUST FOLLOW IMPLEMENTATION

Add this rule to:

.antigravity/component-rules.md

==================================================
IMPLEMENTATION ↔ METADATA SYNCHRONIZATION
==================================================

A UI component and its section metadata are one synchronized unit.

Whenever implementing, modifying, replacing, or substantially
refactoring a section's:

- layout
- visual composition
- animation
- interaction
- transition
- scrolling behavior
- hover behavior
- cursor behavior
- 3D behavior
- parallax behavior
- typography motion
- image behavior

the corresponding section metadata MUST be reviewed.

If the change affects the visual identity of the section,
update the metadata immediately.

Do not leave stale metadata.

--------------------------------------------------
MANDATORY PROCESS
--------------------------------------------------

For every section modification:

1. Inspect the current section metadata.
2. Modify the component.
3. Compare the new implementation with the old metadata.
4. If the design/animation/interaction changed, update metadata.
5. Verify that the metadata accurately describes the final implementation.
6. Only then consider the task complete.

--------------------------------------------------
IMPORTANT
--------------------------------------------------

Never treat metadata as unrelated documentation.

The metadata displayed above a component is part of the UI Library
experience and must accurately document the component currently
being previewed.

If the implementation changes, the documentation/header must change
when necessary.

This applies to ALL future sections and variants.