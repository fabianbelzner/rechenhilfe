
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('rechenhilfe-cache').then(cache => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        './sounds/tone-gray.mp3',
        './sounds/tone-blue.mp3',
        './sounds/tone-red.mp3'
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
