/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/random-reminders-page',
    assetPrefix: '/random-reminders-page/',
    images: { unoptimized: true },
};

module.exports = nextConfig;