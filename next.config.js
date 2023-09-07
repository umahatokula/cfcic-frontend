/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cfm-media-audio.s3.amazonaws.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
    ],
  },
};

module.exports = nextConfig;
