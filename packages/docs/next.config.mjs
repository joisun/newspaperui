import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: { unoptimized: true },
  transpilePackages: ['newspaperui'],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
