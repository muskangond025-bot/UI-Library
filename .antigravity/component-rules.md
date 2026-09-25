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
