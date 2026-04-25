# Ocean Bennett Portfolio

![Lighthouse Performance](https://img.shields.io/badge/Performance-98%2F100-brightgreen)
![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-100%2F100-brightgreen)
![Lighthouse Best Practices](https://img.shields.io/badge/Best_Practices-100%2F100-brightgreen)
![Lighthouse SEO](https://img.shields.io/badge/SEO-100%2F100-brightgreen)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4c522319-a79a-46d9-baee-f27b340b9482/deploy-status)](https://app.netlify.com/sites/oceanbennett/deploys)

Static portfolio configured for Netlify at:

https://oceanbennett.com/

## What is included

- `index.html` — main site
- `404.html` — simple branded 404 page
- `og-image.png` — 1200×630 social preview image
- `favicon.*` + `apple-touch-icon.png` — browser/app icons using the `OCB` mark
- `site.webmanifest` + `browserconfig.xml` — install and icon metadata
- `robots.txt`, `sitemap.xml` — search engine discovery
- `llms.txt`, `llms-full.txt` — AI-readable profile summary
- `_headers` — Netlify response headers
- `netlify.toml` — publish config
- `LICENSE` — custom AGPL-3.0 license
- `sw.js` — Service Worker for offline support

## System Architecture

- **Engineered for Speed**: Built with vanilla HTML5/CSS3 to maintain a near-perfect "Full House" (98+) Lighthouse score on mobile audits. No frameworks, zero-JS UI logic.
- **Enterprise Security**: Hardened with strict Content Security Policy (CSP) and submitted for global **HSTS Preloading** to ensure browser-level HTTPS enforcement.
- **Semantic SEO & Schema**: Implemented **JSON-LD Person Schema** and high-density `llms.txt` context to maximize discovery for both search engines and AI agents.
- **Micro-Interactions**: Features a GPU-accelerated starfield, 3D transform hero animations, and pure-CSS tooltips designed for high-end "discovered" depth.

## Content Architecture

- **Searchable Writing Hub**: Integrated technical blog engine using a lightweight JSON-based index for real-time filtering and zero-latency discovery.
- **Asset Optimization**: Standardized on **WebP** for all visual assets with a slug-based folder structure (`blog/img/[slug]/`) to maintain organization at scale.
- **IDE-Style Highlighting**: Custom regex-based micro-syntax highlighter for technical deep-dives, ensuring high readability without the weight of external libraries.

## Writing a New Article

1. **Create a Folder**: `blog/[slug]/` (e.g., `blog/my-new-post/`)
2. **Copy Template**: Copy `blog/template.html` into that folder and rename it to `index.html`.
3. **Add Assets**: Put your images in `blog/[slug]/img/` and use **WebP** for maximum performance.
4. **Register**: Add your post's metadata to `blog/posts.json`. The homepage will automatically detect and list it.

## Editorial Standards

To maintain the **100/100 Lighthouse score** and professional engineering tone:

- **Performance**: Always use `.webp` for images. Aim for < 100KB per asset.
- **Accessibility**: Every `<img>` tag must have a descriptive `alt` attribute.
- **UX (Tooltips)**: Use `<span data-tooltip="...">` for technical acronyms (e.g., HSTS, TBT) to keep the content accessible to non-technical recruiters.
- **Code Hygiene**: Use `<pre><code>` blocks for snippets. The micro-syntax highlighter will handle the rest.
- **Credibility**: Always include a `Sources & References` section at the bottom linking to the relevant GitHub repo or documentation.



## Social preview cache refresh

After first deploy or after updating `og-image.png`, some platforms may cache the old preview. You can force a refresh with:

- Facebook Sharing Debugger
- LinkedIn Post Inspector
- X Card Validator / by reposting after cache expiry

This is normal.

## Favicon note

The favicon set is generated from `favicon-master.png` so it is easy to swap later if you want a new icon.

## Favicon styling

The favicon set now uses a transparent background, which usually looks cleaner in browser tabs and bookmark bars.
