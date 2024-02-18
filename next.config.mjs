/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // when DEVELOPING and running locally, comment out:
  basePath: "/soupocalypse",
  assetPrefix: "/soupocalypse/",
  images: { unoptimized: true },
};

export default nextConfig;
