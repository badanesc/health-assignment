import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
    ],
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
