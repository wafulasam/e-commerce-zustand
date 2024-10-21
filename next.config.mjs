/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    distDir: 'out', 
    compiler: {
      styledComponents: true,
    },
    images: {
      unoptimized: true
    }
};

export default nextConfig;
