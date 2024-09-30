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

  // Forward api requets
  async rewrites() {
    return [
      {
        source: "/api/:path*", // The path pattern to match in your Next.js app
        destination: "http://localhost:1337/api/:path*", // The URL where you want to forward the request
      },
      {
        source: "/uploads/:path*", // The path pattern to match in your Next.js app
        destination: "http://localhost:1337/uploads/:path*", // The URL where you want to forward the request
      },
    ];
  },
  // Allow CORS for the revalidate endpoint
  // TODO: change that when deploying
  async headers() {
    return [
      {
        source: '/api/revalidate',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'http://localhost:1337' },
          { key: 'Access-Control-Allow-Methods', value: 'POST' },
        ],
      },
    ];
  },
};

export default nextConfig;
