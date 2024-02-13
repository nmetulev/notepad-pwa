const cacheName = "notepad-cache";
const cacheFiles = [
  '/',
  '/index.html',
  '/src/',
];

self.addEventListener("install", (e) => {
    console.log("[Service Worker] Install");
    e.waitUntil(
        (async () => {
        const cache = await caches.open(cacheName);
        console.log("[Service Worker] Caching all: app shell and content");
        await cache.addAll(cacheFiles);
        })(),
    );
});

// Stale-With-Revalidate cache strategy, credit to https://web.dev/articles/offline-cookbook#stale-while-revalidate
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(cacheName).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        var fetchPromise = fetch(event.request).then(function (networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        return response || fetchPromise;
      });
    }),
  );
});