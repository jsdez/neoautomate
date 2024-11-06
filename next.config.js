/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/neoautomate',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig