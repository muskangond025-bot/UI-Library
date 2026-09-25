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
