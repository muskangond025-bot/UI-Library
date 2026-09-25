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
