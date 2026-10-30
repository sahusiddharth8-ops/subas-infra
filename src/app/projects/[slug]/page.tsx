import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectDetail from "@/components/project-detail";
import { projectDetails } from "@/lib/projects";
export function generateStaticParams(){return Object.keys(projectDetails).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params; const p=Object.hasOwn(projectDetails,slug)?projectDetails[slug]:undefined;return {title:p?`${p.name} — SUBAS Infra`:"Project not found",description:p?.intro};}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=Object.hasOwn(projectDetails,slug)?projectDetails[slug]:undefined;if(!project)notFound();return <ProjectDetail project={project}/>;}
