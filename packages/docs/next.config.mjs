import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: { unoptimized: true },
  transpilePackages: ['newspaperui'],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
