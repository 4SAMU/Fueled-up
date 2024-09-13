// next.config.mjs

/** @type {import('next').NextConfig} */

// Import the next-pwa module
import withPWA from "next-pwa";

// Configuration options for Next.js
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

// Configuration object for the next-pwa plugin
const pwaConfig = {
  dest: "public", // Destination directory for the PWA files
  disable: false, // Set to true to disable PWA (for development)
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
};

// Export the combined configuration for Next.js with PWA support
export default withPWA(pwaConfig)(nextConfig);
