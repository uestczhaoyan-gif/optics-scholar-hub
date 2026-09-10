import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.BASE_PATH || '',
  images: { unoptimized: true },
};

export default nextConfig;
