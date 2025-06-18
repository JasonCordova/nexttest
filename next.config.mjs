/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: 'dist',
  // Add these important configurations:
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs' : '', // Replace with your actual repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nextjs/' : '', // Same as above
  images: {
    unoptimized: true, // Required for static exports
  },
  // Webpack configuration to handle path aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': new URL('./src', import.meta.url).pathname,
    };
    return config;
  }
};

export default nextConfig;