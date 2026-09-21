import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // vinext serves `fill` images at a fixed 640px through the optimizer (no srcset),
    // which blurs full-width photos. Assets in /public are already sized and compressed.
    unoptimized: true,
  },
};

export default nextConfig;
