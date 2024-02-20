/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // when DEVELOPING and running locally, comment out:
  output: "export",
  basePath: "/soupocalypse",
  assetPrefix: "/soupocalypse/",
  images: { unoptimized: true },
};

export default nextConfig;
