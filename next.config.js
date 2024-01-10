/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
// const ContentSecurityPolicy = `
// default-src 'self';
// script-src 'self' 'unsafe-eval' 'unsafe-inline';
// child-src;
// style-src 'self' 'unsafe-inline';
// img-src * blob: data:;
// media-src 'none';
// connect-src *;
// font-src 'self' data:;
// frame-ancestors 'self' localhost:*;

 headers: async () => {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; child-src; style-src 'self' 'unsafe-inline'; img-src * blob: data:; media-src 'none'; connect-src *; font-src 'self' data:; frame-ancestors 'self' https://codepen.io;",
        },
      ],
    },
  ]
 }

}

module.exports = nextConfig
