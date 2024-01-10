/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://codepen.io",
          },
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
          },
          {
            key: 'Content-Security-Policy',
            value: "style-src 'self' 'unsafe-inline'",
          },
          {
            key: 'Content-Security-Policy',
            value: "img-src 'self' data: blob:",
          },
          {
            key: 'Content-Security-Policy',
            value: "connect-src 'self' https://api.github.com",
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://codepen.io",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
