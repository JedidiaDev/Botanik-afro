import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: false },
      { source: "/produits.html", destination: "/produits", permanent: false },
      { source: "/services.html", destination: "/services", permanent: false },
      { source: "/apropos.html", destination: "/apropos", permanent: false },
      { source: "/faq.html", destination: "/faq", permanent: false },
      { source: "/contact.html", destination: "/contact", permanent: false },
      { source: "/rendezvous.html", destination: "/rendezvous", permanent: false },
    ];
  },
};

export default nextConfig;
