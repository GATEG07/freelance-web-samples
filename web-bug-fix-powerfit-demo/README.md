# Web Bug Fix Demo - PowerFit

## 1. Project overview

PowerFit is a fictional gym landing page built with plain HTML, CSS and JavaScript.

This project is a before/after web bug fixing demo for portfolio, Fiverr and Upwork. The `broken` version contains real, reproducible frontend bugs. The `fixed` version keeps the same content and visual direction, but corrects the issues with cleaner HTML, responsive CSS and JavaScript validation.

This is a fictional demo project created to show practical HTML, CSS and JavaScript bug fixing skills. It does not include backend, databases or external integrations.

## 2. What the broken version demonstrates

The `broken` version demonstrates common issues found in small business landing pages:

- mobile navigation that does not open
- contact forms that accept empty or invalid data
- responsive layout problems on small screens
- oversized hero text and visual overflow
- inconsistent button and link behavior
- small CSS quality issues such as weak contrast and spacing problems

## 3. Bug list

1. Mobile hamburger menu does not open.
2. Contact form has no real validation.
3. Services grid breaks on mobile.
4. Hero section is not responsive on mobile.
5. Buttons and links behave inconsistently.
6. Minor CSS issues affect contrast and layout polish.

## 4. Technical cause of each bug

### Bug 1 - Mobile hamburger menu

What was broken:

The hamburger button appears on mobile, but clicking it does not open the navigation.

Why it happened:

The JavaScript looks for `#mobileMenu`, but the actual button uses `#menuButton`. Because the selector does not match, no click event is attached.

How it was fixed:

The fixed version connects the script to `#menuButton`, toggles the `.is-open` class on the navigation and updates `aria-expanded` for accessibility.

### Bug 2 - Contact form validation

What was broken:

The form accepts an empty name, invalid email and empty message. It also shows a success message without checking the input.

Why it happened:

The broken JavaScript prevents the default form action and immediately displays a success message. The form fields have no validation logic or visible error messages.

How it was fixed:

The fixed version validates each field with JavaScript before showing success. It checks for a non-empty name, a valid email format and a non-empty message. Clear error messages appear under each invalid field.

### Bug 3 - Services grid on mobile

What was broken:

The service cards overflow on small screens instead of stacking or resizing.

Why it happened:

The broken CSS uses `grid-template-columns: repeat(4, 310px)`, which creates a fixed-width layout wider than mobile screens.

How it was fixed:

The fixed CSS uses `repeat(auto-fit, minmax(min(100%, 240px), 1fr))`, allowing the cards to resize and wrap responsively.

### Bug 4 - Hero section on mobile

What was broken:

The hero title is too large, does not wrap properly and the visual block overflows on mobile.

Why it happened:

The broken version uses a fixed two-column layout, fixed visual width and `white-space: nowrap` on the main headline.

How it was fixed:

The fixed version uses responsive grid columns, `clamp()` font sizing, natural text wrapping and a fluid hero visual with `width: 100%` and `aspect-ratio`.

### Bug 5 - Buttons and links

What was broken:

Some buttons and links are inconsistent. The main CTA does not use a pointer cursor, one plan link uses `href="#"`, and the Plans navigation link points to the wrong anchor.

Why it happened:

The broken version has incomplete link targets and inconsistent button styles.

How it was fixed:

The fixed version points all navigation and CTA links to real page sections, applies consistent cursor and hover states, and keeps button styling predictable.

### Bug 6 - Minor CSS issues

What was broken:

Some visual details feel unpolished, including weak contrast on small labels and spacing that causes the mobile composition to feel cramped.

Why it happened:

The broken CSS uses lighter text colors in important UI elements and relies on fixed spacing that does not adapt well.

How it was fixed:

The fixed version improves contrast, uses responsive spacing with `clamp()`, adds focus states and keeps layouts flexible across mobile, tablet and desktop.

## 5. How each bug was fixed

Summary of fixes:

- connected the mobile menu button to the correct JavaScript selector
- added menu open/close behavior and accessible `aria-expanded` updates
- added JavaScript validation for name, email and message
- added visible field-level error messages
- replaced fixed-width service grid with responsive CSS grid
- removed hero text overflow and fixed visual scaling
- corrected broken `href` values
- normalized button cursor, hover and focus states
- improved contrast and responsive spacing
- kept JavaScript clear and free of console errors

## 6. How to open the demo

Open the files directly in a browser:

Root overview page:

`web-bug-fix-powerfit-demo/index.html`

Broken version:

`web-bug-fix-powerfit-demo/broken/index.html`

Fixed version:

`web-bug-fix-powerfit-demo/fixed/index.html`

Suggested test:

1. Open both versions on desktop.
2. Resize the browser to mobile width.
3. Try the hamburger menu in both versions.
4. Submit the form with empty fields.
5. Submit the form with an invalid email.
6. Compare the services grid and hero layout on mobile.

## Live Demo Structure

- Root page: overview with links to both versions
- `/broken`: intentionally broken version
- `/fixed`: corrected version

## Suggested screenshots

- Broken mobile navigation
- Fixed mobile navigation
- Broken form validation
- Fixed form validation
- Broken services grid
- Fixed services grid

## 7. Scope note

This demo uses:

- plain HTML
- plain CSS
- plain JavaScript
- no frameworks
- no libraries
- no Bootstrap
- no Tailwind
- no React
- no jQuery
- no backend
- no APIs
- no external images

This is a fictional demo project created to show practical HTML, CSS and JavaScript bug fixing skills. It does not include backend, databases or external integrations.
