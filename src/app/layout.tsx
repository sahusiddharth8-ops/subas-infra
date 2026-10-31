import type { Metadata } from "next";
import { siteUrl, brandDescription } from "@/lib/seo";
import "@fontsource-variable/inter";
import "@fontsource/libre-baskerville/latin-700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Subas Infra | Homes in Berhampur & Bhubaneswar", template: "%s | Subas Infra" },
  description: brandDescription,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", siteName: "Subas Infra", locale: "en_IN",
    title: "Subas Infra | Homes in Berhampur & Bhubaneswar",
    description: brandDescription,
  },
  twitter: { card: "summary", title: "Subas Infra | Homes in Odisha", description: brandDescription },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
