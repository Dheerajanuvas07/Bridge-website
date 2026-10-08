import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";

import { MotionProvider } from "@/components/motion/motion-provider";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bridgelincoln.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bridge · A companion for your parent's medical appointments",
    template: "%s · Bridge",
  },
  description:
    "A Bridge companion goes with your mom or dad to a medical appointment, door to door. Afterwards, you hear what the doctor said, with your parent's permission. A small local pilot in Omaha, Nebraska.",
  openGraph: {
    type: "website",
    siteName: "Bridge",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hanken.variable}>
      <body>
        {/* Without JavaScript, show animated content at rest. */}
        <noscript>
          <style>{`[data-motion]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
