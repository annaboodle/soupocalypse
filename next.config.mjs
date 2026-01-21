/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  output: "export",
  images: { unoptimized: true },

  // this should do it while the site is hosted on custom domain (soupocalypse.com), however
  // if running on annaboodle.github.io/soupocalypse/ and you see a 404 on localhost, uncomment these:
  // basePath: "/soupocalypse",
  // assetPrefix: "/soupocalypse/",
};

export default nextConfig;
