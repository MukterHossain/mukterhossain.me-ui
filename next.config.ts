import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '**'
      }
    ],
     domains: ['i.ibb.co']
  }
};

export default nextConfig;
