/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  basePath: '/website',
  assetPrefix:'/website/',
  // basePath: '',
  // assetPrefix:'',
};

module.exports = nextConfig;
