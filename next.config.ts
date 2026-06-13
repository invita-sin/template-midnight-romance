import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/template-midnight-romance",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
