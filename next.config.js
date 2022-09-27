/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.icons8.com'],
    unoptimized: true
}
}

module.exports = nextConfig
