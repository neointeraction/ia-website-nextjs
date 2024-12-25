/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "13.250.1.115",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
