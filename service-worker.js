// service-worker.js

// Define un nombre para la caché
const CACHE_NAME = 'my-pwa-cache-v1';

// Archivos que deseas cachear al inicio
const urlsToCache = [
    '/',
    '/offline', // Página de respaldo para modo offline si la tienes
    // Agrega aquí otros recursos que quieras cachear
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

// Activación del Service Worker y limpieza de cachés antiguas
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Intercepta solicitudes y responde con recursos en caché
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});


self.addEventListener('push', function (event) {
    const data = JSON.parse(event.data.text())
    event.waitUntil(
        registration.showNotification(data.title, {
            body: data.message,
            icon: '/vercel-192x192.png'
        })
    )
})

self.addEventListener('notificationclick', function (event) {
    event.notification.close()
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
            if (clientList.length > 0) {
                let client = clientList[0]
                for (let i = 0; i < clientList.length; i++) {
                    if (clientList[i].focused) {
                        client = clientList[i]
                    }
                }
                return client.focus()
            }
            return clients.openWindow('/')
        })
    )
})
