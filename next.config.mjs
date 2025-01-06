/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "website.indiaaccelerator.co",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  // output: "export",
  // reactStrictMode: true,
  // swcMinify: true,
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
