import type { NextConfig } from "next";

// On GitHub Actions the site is served from https://<user>.github.io/portfolio/,
// so it needs a base path. Locally (`dev`/`build`) we keep it at the root.
const basePath = process.env.GITHUB_ACTIONS ? "/portfolio" : "";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` for GitHub Pages hosting.
  output: "export",
  basePath,
  images: {
    // Static export has no server, so the default image optimizer is disabled.
    unoptimized: true,
    // Remote hosts used by project thumbnails in content/projects.json.
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "user-images.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
