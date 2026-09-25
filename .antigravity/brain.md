# Brain — UI Section Library

## 1. Purpose

This project is a reusable, data-driven React/Next.js UI section library for premium ecommerce and brand websites.

The goal is not merely to produce visually attractive sections. The goal is to produce a coherent design system in which independently built sections still feel like they belong to the same product.

The library must support:
- reusable standalone UI sections
- JSON-driven content
- configurable visual styling
- responsive behavior
- accessible interaction
- intentional motion
- premium, editorial, award-quality visual composition

For individual section tasks, the required deliverables are:
1. Complete React/Next.js `.tsx` component.
2. Sample mock JSON showing the expected section data.

Do not implement routing, backend APIs, database logic, full-page setup, dynamic rendering logic, or registry integration unless explicitly requested.

## 2. Source Architecture

Every section receives one `section` prop.

Conceptually:

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
