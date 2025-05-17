/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    basePath: isProd ? '/blog-starter-app' : "",
    output: 'export',
   
    // Optional: Change the output directory `out` -> `dist`
    distDir: 'dist',
    NEXT_PUBLIC_BASE_PATH : "https://hemantyogananda.github.io/blog-starter-app/",
  }
   
  module.exports = nextConfig