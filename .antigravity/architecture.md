# Architecture — UI Section Library

## 1. Project Responsibility

This project is a UI section library.

An individual section is a standalone React/Next.js component that receives one `section` object.

The section is responsible for:
- rendering its UI
- reading content from `section.settings`
- reading customizable visual values from `section.styles`
- handling its own local presentation behavior
- being responsive
- providing safe fallbacks

The section is not responsible for:
- backend APIs
- database operations
- routing
- page-level orchestration
- registry integration
- dynamic renderer implementation
- application-wide business logic

Unless explicitly requested, do not expand the scope.

## 2. Section Data Contract

Use the project's section model:

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
