import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://maps.googleapis.com https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https: https://*.google.com https://*.gstatic.com https://*.googleapis.com",
  "frame-src 'self' https://www.google.com https://maps.google.com",
  "connect-src 'self' https://wa.me https://www.google.com https://*.googleapis.com https://vitals.vercel-insights.com",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  images: {
    qualities: [60, 85],
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: ["192.168.100.12", "192.168.1.158"],
  experimental: {
    optimizePackageImports: ["motion", "@phosphor-icons/react"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        source: "/products/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/gallery/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/icon.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        source: "/icon-192.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        source: "/icon-48.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        source: "/favicon.ico",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        source: "/apple-icon.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        source: "/logo.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        source: "/og-image.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        source: "/llms.txt",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" }],
      },
      {
        source: "/llms-full.txt",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" }],
      },
    ];
  },
};

export default nextConfig;
