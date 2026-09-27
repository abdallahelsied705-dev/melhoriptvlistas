import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const isPreview = process.env.VERCEL_ENV === "preview";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: isPreview ? [...securityHeaders, { key: "X-Robots-Tag", value: "noindex, nofollow" }] : securityHeaders,
      },
    ];
  },
  async redirects() {
    // Redirecionar o domínio sem www para o host canónico com www.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "melhoriptvlistas.pt" }],
        destination: "https://www.melhoriptvlistas.pt/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
