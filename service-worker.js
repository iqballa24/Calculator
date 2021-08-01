/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'calculator-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/js/app.js',
  '/assets/js/calc.js',
  '/assets/js/registerServiceWorker.js',
  '/assets/js/theme.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then((response) => {
        if (response) {
          console.log('ServiceWorker: Gunakan aset dari cache: ', response.url);
          return response;
        }

        console.log(
          'ServiceWorker: Memuat aset dari server: ',
          event.request.url,
        );
        return fetch(event.request);
      }),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheName !== CACHE_NAME) {
          console.log(`ServiceWorker: cache ${cacheName} dihapus`);
          return caches.delete(cacheName);
        }
      }),
    )),
  );
});
