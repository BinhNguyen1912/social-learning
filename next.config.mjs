/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
        pathname: '/**',
      },
      {
        hostname: 'i.pinimg.com',
        pathname: '/**',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
