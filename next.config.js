/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    ...(process.env.NODE_ENV === 'production' && { unoptimized: true }),
  },
  ...(process.env.NODE_ENV === 'production' && {
    output: "export",
    distDir: "dist",
  }),
};

module.exports = nextConfig;
