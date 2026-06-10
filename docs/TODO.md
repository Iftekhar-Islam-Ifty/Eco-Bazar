# TODO

## High Priority

- Fix broken character encoding in existing comments so source files are easier to read.
- Audit all pages for duplicate IDs, especially timer elements shared across sections.
- Add null checks around JavaScript DOM updates that assume elements always exist.
- Verify responsive header behavior on small screens, tablet widths, and zoomed desktop views.
- Review all image `alt` attributes and replace missing or generic text.
- Complete all remaining pages
- Ensure Figma accuracy
- Fix mobile responsiveness
- Optimize spacing consistency
- Test all pages

## Ecommerce Improvements

- Make search behavior functional or clearly mark it as a placeholder.
- Add usable shop filters for category, price range, rating, and availability.
- Add sort options on the shop page, such as latest, price low to high, price high to low, and best rated.
- Add product quick-view behavior for product cards.
- Improve cart and wishlist interactions with visible feedback.
- Add empty, loading, and error states for product-related UI if dynamic data is introduced.

## Design Polish

- Standardize product-card spacing, image sizing, badge placement, and hover states.
- Confirm category cards use consistent dimensions and alignment.
- Improve footer spacing and link grouping on mobile.
- Check color contrast for green buttons, muted text, sale badges, and footer links.
- Keep decorative effects subtle so product content remains the focus.

## Code Cleanup

- Remove unused commented-out HTML once the final layout is confirmed.
- Consolidate repeated header and footer markup if the project later moves to a template or component system.
- Normalize CSS variable names that contain broken characters.
- Group CSS sections consistently by layout, component, and page.
- Remove unused scripts or libraries if no page depends on them.

## Testing

- Test `index.html`, `shop.html`, and `about.html` in Chrome or Edge.
- Check browser console errors on every page.
- Test mobile widths around 320px, 375px, 768px, and desktop widths above 1200px.
- Confirm all product, category, banner, logo, and social images load correctly.
- Verify Bootstrap dropdowns, menus, and any interactive controls still work after changes.

## Future Ideas

- Add a product details page.
- Add a cart page and checkout flow.
- Add sign in and sign up screens.
- Add localStorage support for cart and wishlist state.
- Add a lightweight data file for products to reduce repeated product-card markup.
- Add a simple static server workflow and document how to run it.
