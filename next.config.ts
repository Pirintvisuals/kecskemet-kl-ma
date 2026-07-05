import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (avoids stray-lockfile warning).
  turbopack: { root: __dirname },
  // Produce a fully static site (HTML/CSS/JS) that runs on any static host,
  // including the client's PHP/MySQL cPanel hosting (webhelye.hu).
  output: "export",
  // next/image optimization requires a server; disable it for static export.
  images: { unoptimized: true },
  // Emit /page/index.html so folders resolve cleanly on shared hosting.
  trailingSlash: true,
};

export default nextConfig;
