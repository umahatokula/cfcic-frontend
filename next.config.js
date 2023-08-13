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
    ],
  },
};

module.exports = nextConfig;
