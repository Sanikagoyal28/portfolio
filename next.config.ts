import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Remote hosts used by project thumbnails in content/projects.json.
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "user-images.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
