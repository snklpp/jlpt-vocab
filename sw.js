const CACHE_NAME = 'jlpt-study-v1';
const ASSETS = [
  './',
  './index.html',
  './vocab.js?v=3',
  './kanji.js?v=3',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
