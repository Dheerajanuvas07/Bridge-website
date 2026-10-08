import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    // Old static-site URLs keep working after the switch.
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/book.html", destination: "/request", permanent: true },
      { source: "/captains.html", destination: "/companions", permanent: true },
      { source: "/legal/privacy.html", destination: "/privacy", permanent: true },
      { source: "/legal/terms.html", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;
