# Ocean Bennett Portfolio & Technical Blog

A high-fidelity, high-performance professional portfolio and technical publication engine. 100/100 Lighthouse metrics across the board. Built with a "Zero-JS" philosophy where interactivity is offloaded to CSS pseudo-elements and the main thread is shielded for maximum responsiveness.

## 🚀 Key Features

-   **100/100 Lighthouse Performance**: Zero Total Blocking Time (TBT) using `requestIdleCallback` shielding.
-   **Agentic SEO**: Optimized for LLMs (GPT-5.5, Claude Opus 4.7) via `llms.txt` and JSON-LD Person Schema.
-   **Academic Suite**: One-click **APA Citation** generation and native sharing.
-   **Export Tools**: Professional **Save as PDF** (print-optimized) and **AI-Ready Markdown** export for LLM ingestion.
-   **Offline-First**: Custom Service Worker pre-caches the blog engine and metadata for full offline resilience.
-   **Premium UX**: Custom glassmorphism scrollbars, technical tooltips, and a smooth-glide navigation engine.

---

## ✍️ Writing a New Article

To maintain the "Gold Master" standard of this blog, follow these steps:

### 1. Update Metadata
Add your new post to `blog/posts.json`. 
-   **Slug**: Use a clean, hyphenated folder name (e.g., `my-new-post`).
-   **Tags**: Add technical categories (e.g., `["Rust", "Security", "AI"]`). These power the search filters.

### 2. Create the Directory
Create `blog/[slug]/` and an `img/` folder inside it for your assets.
-   **Hero Image**: Optimize your hero as `img/hero.webp` (1200x675 recommended).

### 3. Use the Template
Copy the contents of `blog/template.html` into `blog/[slug]/index.html`.
-   **Placeholders**: Replace `[[TITLE]]`, `[[DATE]]`, `[[SUMMARY]]`, `[[READ_TIME]]`, and `[[WORD_COUNT]]`.
-   **Tags Slot**: Fill in the `[[TAGS]]` slot with:
    ```html
    <div class="post-tags">
      <span class="post-tag">Tag1</span>
      <span class="post-tag">Tag2</span>
    </div>
    ```
-   **Content**: Paste your HTML content into the `[[CONTENT]]` slot.

### 4. Technical Standards
-   **Tooltips**: Wrap technical acronyms in `<span data-tooltip="Description here...">Term</span>`.
-   **Code Blocks**: Use `<pre><code>...</code></pre>` for automatic syntax highlighting.
-   **Optimization**: Ensure all images use `loading="lazy"` except for the hero.

---

## 🛠 Tech Stack

-   **Core**: Vanilla HTML5, CSS3, JavaScript (ES6+).
-   **PWA**: Service Worker (`sw.js`) + Manifest.
-   **SEO**: JSON-LD, `llms.txt`, Open Graph.
-   **Deployment**: Netlify (with custom security headers).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
