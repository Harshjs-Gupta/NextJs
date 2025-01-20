/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
