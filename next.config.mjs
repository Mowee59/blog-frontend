/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TODO change in prod
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
