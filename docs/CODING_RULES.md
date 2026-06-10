# Coding Rules

These rules keep the Eco Bazar frontend consistent, readable, and easy to maintain.

Before modifying any file:

1. Analyze relevant files.
2. Explain the issue.
3. Explain root cause.
4. Explain proposed fix.
5. Then implement.

Never edit blindly.

## HTML

- Use semantic elements such as `header`, `nav`, `main`, `section`, `article`, and `footer` where they fit.
- Keep page structure readable with clear section comments only when they help navigation.
- Use meaningful alt text for product, category, banner, and brand images.
- Keep links valid. Use `#` only for unfinished placeholders and replace it when a destination exists.
- Avoid duplicate IDs. JavaScript selectors that use IDs should target only one element per page.
- Preserve existing asset paths exactly, especially filenames with spaces or parentheses.

## CSS

- Reuse variables from `:root` in `assets/css/style.css` before adding new colors, fonts, or spacing patterns.
- Keep global theme and component styles in `assets/css/style.css`.
- Keep media queries and viewport-specific fixes in `assets/css/responsive.css`.
- Prefer class-based styling over inline styles.
- Avoid unnecessary `!important`; use it only when overriding a third-party style is the cleanest option.
- Keep product cards, category cards, buttons, badges, and form controls visually consistent across pages.
<!-- - Make layouts responsive with Bootstrap grid utilities, flexbox, CSS grid, and sensible width constraints. -->
- Prefer existing project layout patterns. Use Bootstrap only where it already exists. Do not replace custom layouts with Bootstrap unless requested.

## JavaScript

- Keep scripts small and page-focused.
- Check that an element exists before reading from it or writing to it.
- Avoid duplicating timer, product-card, filtering, and slider logic. Extract small helper functions when behavior repeats.
- Do not block page rendering with heavy synchronous logic.
- Keep user-facing text clear and in English unless the page is intentionally localized.
- Prefer modern browser APIs for simple interactions, but keep compatibility with the existing Bootstrap and jQuery setup.

## Ecommerce UX

- Product cards should clearly show image, name, price, discount/sale state when relevant, rating, and cart action.
- Cart, wishlist, search, filter, and sort controls should be easy to find.
- Sale timers should have a clear expired state and should not crash if timer markup is absent.
- Product images should not stretch or distort.
- Buttons and clickable icons need visible hover/focus states.
- Keep mobile shopping flows compact and scannable.

## Accessibility

- Use descriptive button labels or `aria-label` for icon-only buttons.
- Maintain strong color contrast for text, prices, badges, and controls.
- Ensure keyboard users can reach links, buttons, menus, filters, and forms.
- Do not remove focus styles unless replacing them with a visible custom focus state.
- Form controls need associated labels or clear accessible names.

## File Organization

- Page HTML stays in the project root.
- CSS stays under `assets/css/`.
- JavaScript stays under `assets/js/`.
- Images stay under `assets/images/` and should be organized by page or section.
- Do not add build artifacts, temporary files, or editor-specific files to the project.

## Quality Bar

For each change:

- Test the affected page in a browser.
- Check at least one mobile width and one desktop width.
- Watch the browser console for errors.
- Confirm all edited asset paths still resolve.
- Keep changes focused on the requested behavior or visible improvement.
