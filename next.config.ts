/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    basePath: isProd ? '/blog-starter-app' : "",
    // output: 'export',
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'hemantyogananda.github.io',
          port: '',
          pathname: '/blog-starter-app/**',
          search: '',
        },
      ],
    },
  }
   
  module.exports = nextConfig