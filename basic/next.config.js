/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://github.com/Harshjs-Gupta",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
