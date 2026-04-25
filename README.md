# Ocean Bennett — Professional Portfolio & Technical Blog
[Live Site: oceanbennett.com](https://oceanbennett.com/)

A high-fidelity, high-performance professional portfolio and technical publication engine. This repository represents the production standard for agent-optimized, high-authority engineering portfolios.

## 🏛 Architecture & Engineering Standards

-   **Zero-JS Interactivity**: Interactive elements (tooltips, hero animations, navigation hover states) are offloaded to CSS pseudo-elements and hardware-accelerated transforms to keep the main thread idle for maximum responsiveness.
-   **Hardware-Accelerated Starfield**: A custom `<canvas>` engine running a twinkly starfield, optimized via `requestIdleCallback` to ensure background animations never interfere with user interaction.
-   **Agentic SEO (LLM-Native)**: 
    -   Built with a `llms.txt` manifesto for GPT-5.5/Claude 4.7 discovery.
    -   Deep Schema.org (JSON-LD) integration for high-authority search ranking.
    -   "AI-Native" Markdown export suite for easy ingestion by LLM research agents.

## 🚀 Key Features

-   **100/100 Lighthouse Performance**: Zero Total Blocking Time (TBT) and perfect accessibility scores.
-   **Academic Suite**: One-click **APA Citation** engine and native social sharing.
-   **Export Suite**: Professional **Print-to-PDF** (whitepaper optimization) and **Markdown** downloads.
-   **Topic Tagging**: Dynamic search engine that scans titles, summaries, and technical tags.
-   **Offline Resilience**: Custom Service Worker architecture for offline reading and instant metadata retrieval.

---

## ✍️ Editorial Workflow (Adding Articles)

To maintain the high technical standard of this publication, follow this maintenance protocol:

### 1. Metadata Synchronization
Add the entry to `blog/posts.json`:
-   **Tags**: Use relevant technical categories (e.g., `["Systems", "Automation", "Rust"]`).
-   **Slug**: Use hyphenated lowercase names (e.g., `my-technical-deep-dive`).

### 2. Article Structure
Copy `blog/template.html` to your new folder and populate the following slots:
-   **Header Metadata**: Fill in the title, date, and reading metrics.
-   **Tag Container**:
    ```html
    <div class="post-tags">
      <span class="post-tag">CATEGORY_NAME</span>
    </div>
    ```
-   **Content**: Paste semantic HTML into the `[[CONTENT]]` placeholder.

### 3. Visual Assets
-   Store all images in an `img/` subfolder within the article directory.
-   Always include a `hero.webp` optimized for 1200x675.

---

## 🛠 Tech Stack

-   **Frontend**: Vanilla HTML5, CSS3 (Custom Variables/Utility architecture).
-   **Runtime**: Pure ES6 JavaScript.
-   **PWA**: Service Worker (`sw.js`).
-   **SEO**: JSON-LD, llms.txt, Open Graph 3.0.
-   **Deployment**: Production-ready for Netlify / Vercel.

---

## 📄 License

This project is licensed under the **AGPL-3.0 License with a Mandatory Visible Attribution Requirement**. 

Any website, application, or service that uses, derives from, or is substantially built upon this portfolio's design or its architecture must include a visible credit to **Ocean Bennett**. See the [LICENSE](LICENSE) file for full legal terms.
