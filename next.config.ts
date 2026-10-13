import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // English is served without a prefix: "/" and "/work/..." are rewritten to the /en routes, and the
  // prefixed English URLs redirect back so each page has one canonical URL. Indonesian is /id/...
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/en" },
        { source: "/work/:slug", destination: "/en/work/:slug" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/work/:slug", destination: "/work/:slug", permanent: true },
    ];
  },
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
