/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's.gravatar.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn.auth0.com',
        },
      ],
    },
  };
  
  export default nextConfig;