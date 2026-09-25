# Quality Rules

## Purpose

This file defines the quality standards for every reusable UI section created for the UI library.

The goal is not only to make a section visually attractive.

Every section must be:

- production-ready
- reusable
- responsive
- fluid
- adaptive
- accessible
- maintainable
- data-driven
- visually consistent
- performant
- safe to integrate into the existing application

A section is not complete simply because it renders correctly once.

---

## 1. Production-Ready Standard

Every section must be written as production-quality React/Next.js code.

The implementation must be:

- clean
- readable
- predictable
- reusable
- maintainable
- appropriately typed
- compatible with the existing project architecture

Do not create prototype-quality code when the task requires a reusable production component.

Avoid unnecessary experimentation inside the final component.

---

## 2. Follow the Existing Architecture

Before implementing a section:

1. Inspect the existing project structure.
2. Identify existing components and primitives.
3. Identify existing hooks and utilities.
4. Identify existing styling conventions.
5. Identify existing dependencies.
6. Reuse appropriate existing functionality.

Do not create a new implementation when an existing project primitive already solves the same problem.

Examples:

If the project already has:

- Button
- Card
- Dialog
- Accordion
- Carousel
- Container
- Typography
- Image utilities

reuse them when appropriate.

---

## 3. Do Not Break Existing Functionality

A new section must not unnecessarily modify unrelated parts of the application.

Do not:

- rewrite existing components without a reason
- change global styles unnecessarily
- modify unrelated routes
- remove existing functionality
- change business logic
- replace established architecture without justification

Keep changes focused on the requested section.

---

## 4. Data-Driven Content

Sections must receive their content through the defined section contract.

Use:

```ts
section.settings
```
