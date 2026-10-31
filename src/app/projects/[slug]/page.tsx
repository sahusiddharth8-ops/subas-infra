import { projectSeo, siteUrl } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectDetail from "@/components/project-detail";
import { projectDetails } from "@/lib/projects";
export function generateStaticParams(){return Object.keys(projectDetails).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const project=Object.hasOwn(projectDetails,slug)?projectDetails[slug]:undefined;
  if (!project) return { title: "Project not found", robots: { index: false, follow: false } };
  const seo=projectSeo[slug];
  return { title: seo.title, description: seo.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { type: "website", siteName: "Subas Infra", title: seo.title, description: seo.description, url: `${siteUrl}/projects/${slug}` },
    twitter: { card: "summary", title: seo.title, description: seo.description },
  };
}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=Object.hasOwn(projectDetails,slug)?projectDetails[slug]:undefined;if(!project)notFound();const url = `${siteUrl}/projects/${slug}`;
const structuredData = { "@context": "https://schema.org", "@graph": [
  { "@type": "WebPage", "@id": `${url}/#webpage`, url, name: projectSeo[slug].title, description: projectSeo[slug].description, about: { "@type": "Place", name: project.name, address: project.location }, publisher: { "@id": `${siteUrl}/#organization` } },
  { "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "SUBAS Infra", item: siteUrl }, { "@type": "ListItem", position: 2, name: project.name, item: url } ] }
] };
return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><ProjectDetail project={project}/></>;}
