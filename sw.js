const CACHE_NAME = 'ocean-bennett-v13';
const ASSETS = [
  '/',
  '/index.html',
  '/404.html',
  '/css/main.css',
  '/css/404.css',
  '/js/main.js',
  '/js/sw-reg.js',
  '/favicon.ico',
  '/favicon.svg',
  '/favicon-48x48.png',
  '/favicon-32x32.png',
  '/favicon-192x192.png',
  '/apple-touch-icon.png',
  '/og-image.png',
  '/site.webmanifest',
  '/robots.txt',
  '/llms.txt',
  '/llms-full.txt',
  '/sitemap.xml',
  '/ouxa/',
  '/ouxa/assets/hero-screen.png',
  '/agent-commerce/',
  '/agent-commerce.json',
  '/ouxa/privacy/',
  '/ouxa/pricing/',
  '/ouxa/support/',
  '/ouxa/terms/',
  '/blog/posts.json',
  '/blog/template.html'
];

// Install: Cache all static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
});

// Fetch: Serve from cache, then update from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});
