const CACHE_NAME = 'kpss-cache-v8';
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './sorular_db.js',
  './style.css',
  './manifest.json',
  './logo.png',
  './icon.svg'
];

// Install Event
self.addEventListener('install', event => {
  self.skipWaiting(); // Force new service worker to activate immediately
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate Event - Clean up old caches and take control
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Eski önbellek siliniyor:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim()) // Take immediate control of all clients
  );
});

// Fetch Event - Network First Strategy for seamless updates
self.addEventListener('fetch', event => {
  // Sadece GET isteklerine yanıt ver
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Ağ başarılı olursa önbelleği güncelle
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Ağ bağlantısı yoksa (offline) önbellekten döndür
        return caches.match(event.request);
      })
  );
});

// Message Event - İstemciden gelen mesajları dinle
self.addEventListener('message', event => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
