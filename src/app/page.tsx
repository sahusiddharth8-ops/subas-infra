import type { Metadata } from "next";
import Homepage from "@/components/homepage";
import { siteUrl, brandDescription, businessContact } from "@/lib/seo";
export const metadata: Metadata = { alternates: { canonical: "/" }, openGraph: { url: siteUrl, title: "Subas Infra | Homes in Berhampur & Bhubaneswar", description: brandDescription, siteName: "Subas Infra", type: "website" } };
export default function Home() {
  const organization = { "@context": "https://schema.org", "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "SUBAS Infra", telephone: businessContact.phone, address: { "@type": "PostalAddress", streetAddress: businessContact.streetAddress, addressLocality: businessContact.city, addressRegion: businessContact.region, postalCode: businessContact.postalCode, addressCountry: "IN" }, url: siteUrl, logo: `${siteUrl}/images/subas-logo.png`, description: brandDescription, sameAs: ["https://www.instagram.com/subasinfra/"] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} /><Homepage /></>;
}
