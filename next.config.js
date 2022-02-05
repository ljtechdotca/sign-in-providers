/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    url:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://ljtech-sign-in-providers.vercel.app",
  },
};

module.exports = nextConfig;
