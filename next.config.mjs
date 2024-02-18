/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  output: "export",
  // basePath: "/soupocalypse",
  // assetPrefix: "/soupocalypse/",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: { unoptimized: true },
};

export default nextConfig;
