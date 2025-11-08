const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  basePath: isProd ? "/website" : "",
  assetPrefix: isProd ? "/website/" : "",
};

module.exports = nextConfig;
