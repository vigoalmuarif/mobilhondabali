/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'hondabintangtabanan.co.id',
          },
          {
            protocol: 'https',
            hostname: 'www.honda-indonesia.com',
          },
          {
            protocol: 'https',
            hostname: 'drive.google.com',
          },
        ],
      },
};

export default nextConfig;
