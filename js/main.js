/**
 * Personal Portfolio Logic - Ocean Bennett
 * Extracted to external file for better CSP security and performance.
 */

// 1. Projects Pagination & Spotlight
(() => {
  const PROJECTS = [
    {
      name: "icebergcreator.com",
      tag: "WEB · USED IN 163+ COUNTRIES",
      desc: "A web tool for building and sharing iceberg-tier infographics. Quietly grew into a global creative utility — used in 163+ countries to turn niche knowledge into shareable visuals.",
      url: "https://icebergcreator.com",
      slug: "icebergcreator.com",
    },
    {
      name: "hematite-cli",
      tag: "CLI · RUST",
      desc: "Local AI workstation CLI for LM Studio / Ollama. Brings SysAdmin, NetAdmin, and Senior Dev workflows into one terminal tool — codebase maps, previewed edits, autonomous build recovery, system health checks, crash logs, and hybrid BM25/semantic search. Windows-first, one Rust binary, no cloud.",
      url: "https://github.com/undergroundrap/hematite-cli",
      slug: "github.com/undergroundrap/hematite-cli",
    },
    {
      name: "UEFN-TOOLBELT",
      tag: "TOOLKIT · PYTHON",
      desc: "The ever-expanding Swiss Army Knife for the UEFN Python API — 358+ tools across 55+ categories. Automate world-building, manage assets, generate Verse boilerplate, and control the editor with AI from a fully-offline PySide6 dashboard.",
      url: "https://github.com/undergroundrap/UEFN-TOOLBELT",
      slug: "github.com/undergroundrap/UEFN-TOOLBELT",
    },
    {
      name: "SINGLE-PLAYER-AI-MUD",
      tag: "AGENT · TS / PY",
      desc: "Infinite single-player MMORPG — FastAPI + Next.js + local LLM. Procedurally generated open world, AI-simulated players, quest hub, instanced dungeon and raid party combat, and a dual-exponential prestige loop engineered for infinite play. No level cap.",
      url: "https://github.com/undergroundrap/SINGLE-PLAYER-AI-MUD",
      slug: "github.com/undergroundrap/SINGLE-PLAYER-AI-MUD",
    },
  ];

  const PAGE = 2;
  const total = PROJECTS.length;
  const pages = Math.ceil(total / PAGE);
  let page = 0;

  const root  = document.getElementById("projects");
  const prev  = document.getElementById("prev");
  const next  = document.getElementById("next");
  const count = document.getElementById("pg-count");

  if (!root || !prev || !next || !count) return;

  const pad2 = (n) => String(n).padStart(2, "0");

  const arrowSvg = `<svg class="arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>`;

  function card(p) {
    return `
      <a class="project" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${p.name} project">
        <div class="project-head">
          <span class="arrow-wrap">${arrowSvg}</span>
        </div>
        <div class="project-body">
          <div class="name">${p.name.replace(/-/g, "\u2011")}</div>
          <div class="desc">${p.desc}</div>
        </div>
        <div class="project-foot">
          <span class="tag">${p.tag}</span>
          <span class="slug">${p.slug}</span>
        </div>
      </a>`;
  }

  function render() {
    const start = page * PAGE;
    const end = Math.min(start + PAGE, total);
    const items = PROJECTS.slice(start, end);
    root.innerHTML = items.map((p) => card(p)).join("");
    count.innerHTML = `${pad2(start + 1)}&ndash;${pad2(end)} / ${pad2(total)}`;
    prev.disabled = page === 0;
    next.disabled = page >= pages - 1;
    
    root.querySelectorAll(".project").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
        el.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
      });
    });
  }

  function go(delta) {
    const target = Math.max(0, Math.min(pages - 1, page + delta));
    if (target === page) return;
    root.classList.add("swap");
    setTimeout(() => {
      page = target;
      render();
      root.classList.remove("swap");
    }, 160);
  }

  prev.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  go(-1);
    if (e.key === "ArrowRight") go(1);
  });

  render();
})();

// 2. Availability Spotlight
(() => {
  const card = document.querySelector(".now");
  if (!card) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (reduceMotion || !finePointer) return;

  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--now-mx", ((e.clientX - r.left) / r.width * 100) + "%");
    card.style.setProperty("--now-my", ((e.clientY - r.top) / r.height * 100) + "%");
  });
})();

// 3. Hero Name Magnetic Drift
(() => {
  const hero = document.querySelector(".hero-name");
  const area = document.querySelector("main");
  if (!hero || !area) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (reduceMotion || !finePointer) return;

  let raf = 0;
  let active = false;

  function setHero(x, y) {
    hero.style.setProperty("--hero-x", `${x * 16}px`);
    hero.style.setProperty("--hero-y", `${y * 8}px`);
    hero.style.setProperty("--hero-rx", `${y * -1.6}deg`);
    hero.style.setProperty("--hero-ry", `${x * 2.4}deg`);
  }

  function moveHero(e) {
    if (raf) cancelAnimationFrame(raf);

    raf = requestAnimationFrame(() => {
      const r = area.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width - 0.5) * 2));
      const y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height - 0.5) * 2));

      if (!active) {
        active = true;
        hero.classList.add("hero-active");
      }

      setHero(x, y);
    });
  }

  function resetHero() {
    if (raf) cancelAnimationFrame(raf);
    active = false;
    hero.classList.remove("hero-active");
    setHero(0, 0);
  }

  area.addEventListener("pointermove", moveHero);
  area.addEventListener("pointerleave", resetHero);
})();

// 4. Starfield Animation
(() => {
  const canvas = document.getElementById("stars");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
  let stars = [];

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    const density = Math.min(180, Math.floor((W * H) / 12000));
    stars = new Array(density).fill(0).map(() => makeStar());
  }

  function makeStar() {
    const depth = Math.random();
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.3 + depth * 1.1,
      a: 0.25 + depth * 0.55,
      vx: (Math.random() - 0.5) * 0.04 * (0.4 + depth),
      vy: -0.02 - depth * 0.05,
      tw: Math.random() * Math.PI * 2,
      ts: 0.004 + Math.random() * 0.01,
    };
  }

  function step() {
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      s.x += s.vx;
      s.y += s.vy;
      s.tw += s.ts;
      if (s.x < -2) s.x = W + 2;
      if (s.x > W + 2) s.x = -2;
      if (s.y < -2) { s.y = H + 2; s.x = Math.random() * W; }

      const alpha = s.a * (0.65 + 0.35 * Math.sin(s.tw));
      ctx.globalAlpha = alpha;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!prefersReduce) requestAnimationFrame(step);
  }

  resize();
  window.addEventListener("resize", resize);
  if (prefersReduce) step(); else requestAnimationFrame(step);
})();
