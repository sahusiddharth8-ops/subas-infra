import { businessContact as contact } from "@/lib/seo";

export default function BusinessContact() {
  return <div className="footer-note">
    <p><strong>SUBAS Infra office</strong></p>
    <address style={{ fontStyle: "normal" }}>{contact.streetAddress}, {contact.city}, {contact.region} {contact.postalCode}</address>
    <p><a href={`tel:${contact.phone}`}>{contact.phoneLabel}</a> · {contact.hours}</p>
  </div>;
}
