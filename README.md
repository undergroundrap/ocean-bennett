# Ocean Bennett Portfolio

![Lighthouse Performance](https://img.shields.io/badge/Performance-98%2F100-brightgreen)
![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-100%2F100-brightgreen)
![Lighthouse Best Practices](https://img.shields.io/badge/Best_Practices-100%2F100-brightgreen)
![Lighthouse SEO](https://img.shields.io/badge/SEO-100%2F100-brightgreen)
[![Netlify Status](https://api.netlify.com/api/v1/badges/oceanbennett/deploy-status)](https://app.netlify.com/sites/oceanbennett/deploys)

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

- **Engineered for Speed**: Built with vanilla HTML5/CSS3 to maintain a near-perfect "Full House" (98+) Lighthouse score on mobile audits. No frameworks, no bloat.
- **AI-Agent Optimized**: Includes `llms.txt` and `llms-full.txt` (per the `/llms-txt` standard) to provide high-density context for LLM-based crawlers and coding agents.
- **Atomic Deployment**: Configured for immutable, headless deploys via Netlify, using `netlify.toml` and `_headers` to enforce security and caching logic at the edge.
- **Responsive Interaction**: Implements a GPU-accelerated starfield canvas and 3D transform hero animations with a focus on buttery-smooth 60fps interaction.

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
