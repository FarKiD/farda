const Path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
         and: [/\.(js|ts)x?$/] ,
       // for webpack 5 use
       // { and: [/\.(js|ts)x?$/] }
      },
      
      use: ['@svgr/webpack'],
    });

    return config;
  }
}

module.exports = nextConfig
