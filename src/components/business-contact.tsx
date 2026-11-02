import { businessContact as contact } from "@/lib/seo";

export function SocialContactLinks() {
  return <div className="social-contact-links" aria-label="Connect with SUBAS Infra">
    <a className="button" href="https://wa.me/919437074757" target="_blank" rel="noopener noreferrer"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.8 7.3L3 20l1.3-4.5A8.5 8.5 0 1 1 20.5 11.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M8.2 7.4c-.8.9-.4 3.2 1.8 5.4 2.2 2.2 4.5 2.6 5.4 1.8l.8-1.1-2.4-1.2-.8.8c-1.3-.6-2.2-1.5-2.8-2.8l.8-.8-1.2-2.4-1.6.3Z" fill="currentColor"/></svg>Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span></a>
    <a className="text-link" href="https://www.instagram.com/subasinfra/" target="_blank" rel="noopener noreferrer"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>Instagram @subasinfra<span className="sr-only"> (opens in a new tab)</span></a>
  </div>;
}

export default function BusinessContact() {
  return <div className="footer-note">
    <p><strong>SUBAS Infra office</strong></p>
    <address style={{ fontStyle: "normal" }}>{contact.streetAddress}, {contact.city}, {contact.region} {contact.postalCode}</address>
    <p><a href={`tel:${contact.phone}`}>{contact.phoneLabel}</a> · {contact.hours}</p>
    <SocialContactLinks />
  </div>;
}
