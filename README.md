# Ocean Bennett Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/oceanbennett/deploy-status)](https://app.netlify.com/sites/oceanbennett/deploys)

Static portfolio configured for Netlify at:

https://oceanbennett.netlify.app/

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

## System Architecture

- **Zero-Dependency Core**: Built with vanilla HTML5/CSS3 to ensure 100/100 Lighthouse performance scores and zero maintenance overhead.
- **AI-Agent Optimized**: Includes `llms.txt` and `llms-full.txt` (per the `/llms-txt` standard) to provide high-density context for LLM-based crawlers and coding agents.
- **Atomic Deployment**: Configured for immutable, headless deploys via Netlify, using `netlify.toml` and `_headers` to enforce security and caching logic at the edge.
- **Responsive Interaction**: Implements a GPU-accelerated starfield canvas and 3D transform hero animations with a focus on buttery-smooth 60fps interaction.

## Deploy with GitHub + Netlify

1. Create a private GitHub repo.
2. Upload the contents of this folder.
3. In Netlify, choose **Add new site → Import an existing project**.
4. Connect GitHub and select the repo.
5. Build command: leave blank.
6. Publish directory: `.`
7. In Netlify site settings, set the site name to **`oceanbennett`** if available.

## Updating later

You can edit the repo locally or directly in GitHub, then push changes. Netlify will redeploy automatically.

## When you buy a custom domain

Replace `https://oceanbennett.netlify.app/` with your final domain in:

- `index.html`
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `llms-full.txt`

Then push the update. Netlify will redeploy.

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
