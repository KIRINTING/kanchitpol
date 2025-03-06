import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kirinserver.onrender.com",
        port: "",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

export default nextConfig;
