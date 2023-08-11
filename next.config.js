const withPWA = require('next-pwa')({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
    },
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/service-worker.js',
                destination: '/_next/static/service-worker.js',
            },
        ];
    },
});

module.exports = withPWA();
