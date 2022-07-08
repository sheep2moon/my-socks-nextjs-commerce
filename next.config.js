/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.sanity.io", "live.staticflickr.com"]
    }
};

module.exports = nextConfig;
