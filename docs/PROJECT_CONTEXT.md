# Eco Bazar Project Context

Eco Bazar is a static frontend ecommerce website for an organic grocery store. The project currently uses plain HTML, CSS, Bootstrap, Font Awesome, local image assets, and small JavaScript files for page interactions.

## Current Pages

- `index.html` - Home page with header, banners, popular categories, product sections, deals, testimonials, and footer content.
- `shop.html` - Shop/catalog page for browsing products.
- `about.html` - About page with brand story, supporting visuals, and team/social content.

## Main Assets

- `assets/css/bootstrap.min.css` - Local Bootstrap CSS.
- `assets/css/style.css` - Main project styling, theme variables, component styles, and page sections.
- `assets/css/responsive.css` - Responsive overrides.
- `assets/js/bootstrap.bundle.min.js` - Local Bootstrap JavaScript bundle.
- `assets/js/jquery-3.7.1.min.js` - Local jQuery file.
- `assets/js/app.js` - Home page behavior.
- `assets/js/shop.js` - Shop page behavior.
- `assets/js/about.js` - About page behavior.
- `assets/images/` - Product, category, banner, logo, testimonial, and page-specific images.

## Visual Direction

The design should feel fresh, clean, organic, and practical for grocery shopping. The green brand palette is already defined in `assets/css/style.css` with CSS variables such as `--branding-success`, `--branding-success-dark`, and green gray scale tokens.

Keep the interface focused on ecommerce tasks:

- Browse categories and products quickly.
- Make product price, rating, sale state, and cart action easy to scan.
- Keep navigation, search, wishlist, and cart controls predictable.
- Preserve generous product imagery without making the page feel like a marketing-only landing page.

## Technical Shape

This is not currently a framework project. There is no build step, package manager setup, or component compiler. Pages can be opened directly in a browser, although a local static server is useful when testing asset paths and browser behavior.

Prefer simple, maintainable frontend changes:

- Use semantic HTML where possible.
- Reuse existing CSS variables and utility classes.
- Keep shared layout styles in `assets/css/style.css`.
- Put responsive fixes in `assets/css/responsive.css`.
- Keep page-specific JavaScript in the matching file under `assets/js/`.

## Important Project Notes

- Some existing comments appear to contain broken character encoding. Clean them gradually when touching nearby code.
- Image filenames include spaces and parentheses. Preserve exact paths when referencing them.
- Several assets are organized by section, such as `Popular C`, `Hot deals`, `Shop`, and `About`.
- Bootstrap and project CSS are loaded locally, while Font Awesome is currently loaded from a CDN.
- Maintain the current brand name spelling used in the document title: `Eco Bazar`.

## Suggested Testing Checklist

Before considering a frontend change complete, verify:

- Home, shop, and about pages load without console errors.
- Header, navigation, search, cart, and footer remain usable.
- Product cards align consistently.
- Images load at the expected sizes.
- Layout works at mobile, tablet, and desktop widths.
- Buttons, links, dropdowns, and timers still behave correctly.
