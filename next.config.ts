import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["fedskillstest.ct.digital"], // Add the allowed external domain
  },
};

export default nextConfig;
