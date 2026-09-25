# Accessibility Rules

## Purpose

Every UI section in the library must be accessible, keyboard-friendly, screen-reader-friendly, and usable across responsive layouts.

Accessibility is part of the component architecture, not an optional enhancement.

Every section should preserve accessibility while remaining visually consistent with the project's design system.

---

## 1. Semantic HTML

Use semantic HTML elements whenever they represent the correct meaning.

Prefer:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`
- `<button>`
- `<a>`
- `<form>`
- `<label>`
- `<input>`
- `<textarea>`
- `<select>`
- `<ul>`
- `<ol>`

Avoid using generic `<div>` elements when a semantic element is appropriate.

Do not use semantic elements only for styling.

The HTML structure should communicate the purpose and hierarchy of the section.

---

## 2. Heading Hierarchy

Maintain a logical heading hierarchy.

Use:

- `<h1>` only when the section is responsible for the page's primary heading.
- `<h2>` for major page sections.
- `<h3>` and below for nested content.

Do not choose heading levels only because of their visual size.

Visual typography and semantic heading levels are separate concerns.

If a design requires a smaller visual heading while maintaining a higher semantic level, use CSS rather than changing the heading level.

---

## 3. Section Structure

Sections should have a meaningful structure.

A typical section may contain:

- section eyebrow
- heading
- supporting description
- main content
- actions
- supporting information

The DOM structure should follow the actual content hierarchy.

Avoid unnecessary wrapper elements when they do not provide structural or styling value.

---

## 4. Links vs Buttons

Use the correct interactive element.

Use `<a>` when the action navigates to another location.

Examples:

- product details
- category pages
- collection pages
- account pages
- external websites

Use `<button>` when the action performs an interaction without navigation.

Examples:

- opening a modal
- toggling a menu
- adding an item to cart
- opening a filter
- changing a selection
- expanding an accordion

Do not use clickable `<div>` elements as replacements for buttons or links.

---

## 5. Accessible Link Labels

Links must communicate their destination or purpose.

Avoid vague labels such as:

- "Click here"
- "Read more"
- "View"
- "Learn more"

When repeated actions require additional context, make the accessible name meaningful.

For example, a product card action should communicate which product it refers to.

Visible text can remain concise while the accessible name provides useful context when necessary.

---

## 6. Keyboard Navigation

All interactive elements must be usable with a keyboard.

Users should be able to:

- reach interactive elements
- move through controls logically
- activate controls
- close interactive UI
- navigate menus
- interact with forms
- operate accordions
- operate tabs
- interact with carousels where applicable

Do not create interactions that depend exclusively on:

- mouse hover
- pointer movement
- drag gestures
- touch gestures

A keyboard-accessible interaction must always have an equivalent usable interaction method.

---

## 7. Focus States

Interactive elements must have a visible focus state.

Do not remove browser focus indicators without providing an accessible replacement.

Focus styles should:

- be clearly visible
- have sufficient contrast
- remain visible on different backgrounds
- fit the design system
- work across responsive layouts

Focus states should not cause unexpected layout shifts.

---

## 8. Focus Order

Keyboard focus should follow the logical visual and content order.

Avoid:

- unnecessary `tabIndex`
- positive `tabIndex` values
- focus traps that are not intentional
- interactive elements appearing in confusing keyboard order

Prefer natural DOM order whenever possible.

The DOM structure should support both visual flow and keyboard navigation.

---

## 9. Images

Images must have appropriate alternative text.

Use meaningful `alt` text when the image communicates information.

Examples:

- product image
- promotional image
- category image
- testimonial avatar
- editorial image

For purely decorative images, use an empty alt attribute:

```tsx
alt=""
```
