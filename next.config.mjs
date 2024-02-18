/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // these need to be commented out for the dev build to work UGH
  basePath: "/soupocalypse",
  assetPrefix: "/soupocalypse/",
  images: { unoptimized: true },
};

export default nextConfig;
