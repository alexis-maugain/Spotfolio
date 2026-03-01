const CACHE_NAME = 'spotfolio-v1';
const ASSETS_CACHE = 'spotfolio-assets-v1';

// Assets statiques à précacher
const PRECACHE_URLS = [
  '/',
  '/assets/logo.webp',
  '/assets/moi.webp',
  '/assets/favicon.svg',
];

// Installation : précacher les ressources critiques
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// Activation : supprimer les anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== ASSETS_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch : stratégie cache-first pour les assets, network-first pour le HTML
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorer les requêtes non-GET
  if (request.method !== 'GET') return;

  // Ignorer les requêtes vers d'autres origines
  if (url.origin !== location.origin) return;

  // Assets avec hash (JS/CSS buildés) → cache-first, longue durée
  if (url.pathname.match(/\.[a-f0-9]{8,}\.(js|css|woff2?|ttf|otf)$/)) {
    event.respondWith(
      caches.open(ASSETS_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request).then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // Images et médias statiques → cache-first avec revalidation en arrière-plan
  if (url.pathname.match(/\.(webp|png|jpg|jpeg|svg|gif|mp4|webm|pdf)$/)) {
    event.respondWith(
      caches.open(ASSETS_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          const fetchPromise = fetch(request).then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          });
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // HTML et autres → network-first
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});
