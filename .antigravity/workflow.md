# UI Section Development Workflow

## Purpose

This file defines the standard workflow for creating every UI section in the UI library.

The goal is to produce sections that are:

- reusable
- data-driven
- responsive
- fluid
- adaptive
- accessible
- visually consistent
- flexible in styling
- safe when optional data is missing

Every section should follow the same development process.

---

## 1. Inspect Existing Architecture First

Before creating a new section, inspect the existing project architecture.

Check for:

- existing section components
- shared UI components
- layout components
- typography utilities
- spacing conventions
- buttons
- cards
- image components
- responsive utilities
- accessibility primitives
- animation utilities
- existing hooks
- shared types
- existing design-system values

Reuse existing project primitives whenever they already solve the required problem.

Do not create a duplicate component when an appropriate reusable component already exists.

---

## 2. Understand the Section Contract

Every UI section receives its data through a single `section` prop.

The expected structure is:

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
PERMANENT WORKFLOW CHECK — SECTION METADATA SYNC

Add this to:

.antigravity/workflow.md

==================================================
FINAL DESIGN/MOTION METADATA CHECK
==================================================

Before completing ANY UI section task, perform this check.

Ask:

"Does the section header accurately describe the component that
is currently rendered?"

Then verify:

1. Is the design name accurate?
2. Is the visual composition accurately described?
3. Is the animation accurately described?
4. Is the interaction accurately described?
5. Has the implementation changed since the previous version?
6. If yes, was the metadata updated?
7. Does any old design/animation terminology remain?
8. Is the metadata unique to this variant?

If the answer to any applicable question is NO:

UPDATE THE METADATA BEFORE COMPLETING THE TASK.

Do not wait for the user to request a metadata update.

--------------------------------------------------
DESIGN CHANGE TRIGGER
--------------------------------------------------

Any of the following automatically triggers a metadata review:

- new animation
- changed animation
- removed animation
- new interaction
- changed interaction
- changed layout concept
- changed visual composition
- changed scrolling behavior
- changed hover behavior
- changed 3D behavior
- changed parallax behavior
- changed typography motion
- changed image treatment
- changed component concept

After any such change:

COMPONENT
↓
REVIEW METADATA
↓
UPDATE IF NECESSARY
↓
VERIFY PREVIEW + HEADER MATCH

This is mandatory for every current and future section.