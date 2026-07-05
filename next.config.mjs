/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export -> produces an `out/` folder that any host (Netlify,
  // etc.) can serve directly. Remove `output: "export"` later if you add
  // server-rendered/dynamic routes.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
