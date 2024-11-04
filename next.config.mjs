/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "via.placeholder.com" }],
  },
};

export default nextConfig;
