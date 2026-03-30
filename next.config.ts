import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "build",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:3000/api/v1/:path*"
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spmech-assets-prod.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
