import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/libre-baskerville/latin-700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUBAS Infra — Find your next chapter",
  description: "Explore SUBAS Infra and discover Subas Vatika in Barampur.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
