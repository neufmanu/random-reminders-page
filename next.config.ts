const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: isProd ? '/random-reminders-page' : "",
    assetPrefix: isProd ? '/random-reminders-page/' : "",
    images: {unoptimized: true},
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? "/random-reminders-page" : "",
    },
};

module.exports = nextConfig;