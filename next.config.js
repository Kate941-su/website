/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    ...(process.env.NODE_ENV === 'production' && { unoptimized: true }),
  },
  ...(process.env.NODE_ENV === 'production' && {
    output: "export",
    distDir: "dist",
    trailingSlash: true,
    basePath: process.env.GITHUB_ACTIONS ? '/blog' : '',
    assetPrefix: process.env.GITHUB_ACTIONS ? '/blog/' : '',
  }),
};

module.exports = nextConfig;
