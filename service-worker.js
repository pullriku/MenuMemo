const cacheFiles = ['index.html'];
const cacheName = 'v1';

self.addEventListener('install', event => {
  caches.open(cacheName).then(cache => cache.addAll(cacheFiles));
});

self.addEventListener('activate', event => {
});

self.addEventListener('fetch', event => {
});