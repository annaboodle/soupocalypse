/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  output: "export",
  basePath: "/soupocalypse",
  assetPrefix: "/soupocalypse/",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
