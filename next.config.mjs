/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // when building for PROD, comment out:
  // images: { unoptimized: true },

  // when DEVELOPING and running locally, comment out:
  basePath: "/soupocalypse",
  assetPrefix: "/soupocalypse/",
};

export default nextConfig;
