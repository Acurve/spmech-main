import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "build",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://sp-mech-backend-production.up.railway.app/api/v1/:path*"
      }
    ]
  }
};

export default nextConfig;
