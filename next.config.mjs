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
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: "/api/:path*",
          destination: process.env.API_URL + "/:path*",
        },
        {
          source: "/uploads/:path*",
          destination: process.env.API_URL + "/uploads/:path*",
        },
      ];
    }
    return [];
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
