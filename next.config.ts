import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  serverActions: {
    bodySizeLimit: '4mb',
    serverActions: true,
    allowedOrigins: ["*.apphosting.dev", "*.firebaseapp.com", "*.web.app"]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '4mb',
    },
    serverActionsTimeout: 120000,
  }
};

export default nextConfig;
