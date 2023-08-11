const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

module.exports = withPWA({
    reactStrictMode: true,

    // Configuración de reescritura para el Service Worker
    async rewrites() {
        return [
            {
                source: '/service-worker.js',
                destination: '/service-worker.js', // Ruta desde la raíz
            },
        ];
    },
});
