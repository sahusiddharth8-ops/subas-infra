"use client";

import BusinessContact from "./business-contact";
import Image from "next/image";
import { useState, useEffect, useRef, type FormEvent } from "react";

import Link from "next/link";
import { projects, projectDetails } from "@/lib/projects";

function Arrow({ down = false }: { down?: boolean }) {
  return <svg className={down ? "arrow down" : "arrow"} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Homepage() {
  const enquiryDialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (sessionStorage.getItem("subas-enquiry-dismissed") !== "1") enquiryDialog.current?.showModal();
  }, []);
  function dismissEnquiry() { sessionStorage.setItem("subas-enquiry-dismissed", "1"); enquiryDialog.current?.close(); }
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All projects");
  const [selectedProject, setSelectedProject] = useState("Subas Vatika");
  const [preview, setPreview] = useState(false);
  const visibleProjects = projects.filter(p => filter === "All projects" || p.type === filter || (p.slug === "subas-vatika" && filter === "Apartments"));

  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setPreview(true); }

  const enquiryForm = (<form onSubmit={submit} onChange={() => setPreview(false)}>
          <div className="enquiry-fields"><label>Your name<input name="name" autoComplete="name" required placeholder="Full name" maxLength={100} /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" inputMode="tel" required placeholder="e.g. +91 98765 43210" pattern="[+]?[0-9][0-9 ]{6,23}" title="Enter your phone number using digits and spaces, with an optional + country code." minLength={7} maxLength={25} /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" maxLength={254} /></label></div>
          <label>Project<select name="project" value={selectedProject} onChange={event => setSelectedProject(event.target.value)}>{projects.map(project => <option key={project.name}>{project.name}</option>)}<option>Help me choose</option></select></label>
          <label>Your message <span className="optional">(optional)</span><textarea name="message" rows={3} placeholder="What would you like to know?" maxLength={2000} /></label>
          <button className="button" type="submit">Access brochures <Arrow /></button>
          {preview && <div className="brochure-access"><p role="status">Your brochures are ready. Choose a PDF to download.</p><div className="brochure-downloads">{projects.filter(project => selectedProject === "Help me choose" || project.name === selectedProject).map(project => <a className="text-link" key={project.slug} href={projectDetails[project.slug].brochure} download>Download {project.name} brochure <Arrow /></a>)}</div></div>}
          <p className="form-note">Your details stay on this page and are not stored.</p>
        </form>);

  return <>
    <dialog ref={enquiryDialog} className="enquiry-dialog" aria-labelledby="popup-enquiry-title" onCancel={dismissEnquiry} onClick={event => { if(event.target === event.currentTarget) dismissEnquiry(); }}>
      <div className="enquiry-dialog-content"><button type="button" className="dialog-close" onClick={dismissEnquiry} aria-label="Close enquiry"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="1.5"/></svg></button>
      <h2 id="popup-enquiry-title">Let’s find your next home.</h2><p className="dialog-intro">Explore our projects and download a brochure. Share your details below.</p><p className="preview-note">Preview: contact delivery is being connected. Your details are not sent or stored yet.</p>{enquiryForm}</div>
    </dialog>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <nav className="navigation" aria-label="Main navigation">
        <a className="brand-link" href="#" aria-label="SUBAS Infra home"><Image className="brand-logo" src="/images/subas-logo.png" alt="SUBAS — Building your Dreams" width={1080} height={630} priority /></a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="nav-links">
          <a href="#projects" onClick={() => setMenuOpen(false)}>Our projects</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About SUBAS Infra</a>
          <a href="#enquire" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <a className="button button-small nav-enquire" href="#enquire">Enquire</a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={menuOpen ? "M6 6l12 12M6 18 18 6" : "M4 8h16M4 16h16"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></button>
      </nav>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Subas Vatika.</h1>
          <p className="hero-tagline">A new way to live in Berhampur.</p>
          <p className="location">Haridakhandi Chaka, Berhampur</p>
          <div className="hero-actions"><Link className="button" href="/projects/subas-vatika">Explore Subas Vatika</Link><a className="text-link" href="#enquire">Enquire now <Arrow /></a></div>
        </div>
        <figure className="hero-image"><Image src="/projects/vatika/duplex-enhanced.png" alt="Subas Vatika duplex architectural illustration from the brochure" fill priority sizes="100vw" /><figcaption>Enhanced architectural illustration</figcaption></figure>
        <div className="hero-foot"><span>A new perspective on home.</span><a href="#projects" aria-label="Scroll to our projects"><Arrow down /></a></div>
      </section>

      <section id="projects" className="projects-section section-pad" aria-labelledby="projects-title">
        <div className="section-heading"><h2 id="projects-title">Find your place.</h2><p>A space for every new beginning.</p></div>
        <div className="project-toolbar"><div className="filters" aria-label="Filter projects">{["All projects", "Duplexes", "Apartments"].map(item => <button key={item} className={filter === item ? "active" : ""} aria-pressed={filter === item} onClick={() => { setFilter(item); }}>{item}</button>)}</div><span className="project-count" aria-live="polite">{visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}</span></div>
        <div className="project-grid">{visibleProjects.map(project => <article className={`project ${project.slug}`} key={project.name}>
          <figure className="project-image"><Image src={project.image} alt={`${project.name} architectural illustration`} fill sizes="(max-width: 650px) 90vw, (max-width: 1000px) 45vw, 30vw" /><figcaption>{project.status}</figcaption></figure>
          <div className="project-info"><p className="project-location">{project.location}{project.sample ? ` · ${project.type}` : ""}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p>
            <Link className="text-link" href={`/projects/${project.slug}`}>Explore project <Arrow /></Link>
          </div>
        </article>)}</div>
        
      </section>

      <section className="life-section" aria-labelledby="life-title">
        <div className="life-copy"><h2 id="life-title">More than an address.<br /><span>A feeling of home.</span></h2><p>Slow mornings. Familiar corners. Space to make memories.<br className="desktop-break" /> Imagine what your next chapter could look like.</p><a href="#projects" className="text-link">Discover the collection <Arrow /></a></div>
        <figure className="life-image"><Image src="/images/interior.webp" alt="Illustrative sunlit living room with natural materials and a balcony" fill sizes="100vw" /><figcaption>Representative interior</figcaption></figure>
      </section>

      <section id="about" className="about-section section-pad" aria-labelledby="about-title"><h2 id="about-title">Real spaces.<br /><span>New possibilities.</span></h2><div><p className="about-intro">We are SUBAS Infra.</p><p>SUBAS Infra is a real estate company in Odisha. Explore Subas Vatika in Berhampur, with duplexes and 2 &amp; 3 BHK apartments, and Subas Classic in Chandrasekharpur, Bhubaneswar, where construction and possession are completed.</p><a className="text-link" href="#enquire">Let’s start a conversation <Arrow /></a></div></section>

      <section className="founder-section section-pad" aria-labelledby="founder-title">
        <div><h2 id="founder-title">Meet our founder.</h2><p className="founder-name">Purnima Sahu</p><p className="founder-role">Founder · SUBAS Infra</p></div>
        <div className="founder-biography"><p>Purnima Sahu brings over 28 years of experience in the jewellery industry and a broad business perspective shaped by her work across hospitality, restaurants, handloom, handicrafts and real estate.</p><p>As the founder of SUBAS Infra, she brings this experience to a vision of thoughtfully developed places that enrich everyday life—bringing homes, hospitality and essential conveniences together.</p><p>The daughter of Padma Vibhushan awardee Shri Sudarshan Sahoo, she carries forward a family legacy of craftsmanship while building her own path in business and real estate.</p></div>
      </section>

      <section className="founder-section section-pad" aria-labelledby="architect-title">
        <div><h2 id="architect-title">Meet our principal architect.</h2><p className="founder-name">Sonam Sahu</p><p className="founder-role">Principal Architect · SUBAS Infra</p></div>
        <div className="founder-biography"><p>Sonam Sahu is the Principal Architect at SUBAS Infra, with specializations in urban architecture and interior design.</p><p>An alumna of CEPT University, Ahmedabad, she brings an international perspective shaped by exposure to architecture and design across Europe, particularly Germany.</p><p>Her work connects the wider urban setting with the details of interior spaces, bringing a considered approach to how places are designed and experienced.</p></div>
      </section>

      <section id="enquire" className="enquiry-section section-pad" aria-labelledby="enquiry-title">
        <div className="enquiry-copy"><h2 id="enquiry-title">Your next chapter.<br /><span>Let’s talk.</span></h2><p>Interested in a project? Tell us a little about what you’re looking for.</p><p className="preview-note">Complete your details to access our project brochures. Enquiries are not sent yet.</p></div>
        {enquiryForm}
      </section>
    </main>
    <footer className="footer section-pad"><div className="footer-top"><a className="brand-link footer-brand" href="#" aria-label="SUBAS Infra home"><Image className="brand-logo" src="/images/subas-logo.png" alt="SUBAS — Building your Dreams" width={1080} height={630} /></a><div><a href="#projects">Our projects</a><a href="#about">About SUBAS Infra</a><a href="#enquire">Enquire</a></div></div><p className="footer-note">Project exteriors are architectural illustrations. The lifestyle interior is representative. Please confirm current project details with SUBAS Infra.</p><BusinessContact /><div className="footer-bottom"><span>© {new Date().getFullYear()} SUBAS Infra. All rights reserved.</span><a href="#">Back to top <Arrow /></a></div></footer>
  </>;
}
