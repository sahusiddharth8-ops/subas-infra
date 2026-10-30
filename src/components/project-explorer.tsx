"use client";
import Image from "next/image";
import { useState } from "react";
import type { ProjectDetail } from "@/lib/projects";

export function FloorPlans({ plans, brochure }: Pick<ProjectDetail,"plans"|"brochure">) {
  const [index,setIndex]=useState(0);
  const plan=plans[index];
  return <div className="floor-explorer"><div className="plan-controls"><div className="filters" aria-label="Choose floor plan">{plans.map((p,i)=><button key={p.name} aria-pressed={i===index} className={i===index?"active":""} onClick={()=>setIndex(i)}>{p.name}</button>)}</div><div className="plan-copy" aria-live="polite"><h3>{plan.name}</h3><p>{plan.description}</p><ul>{plan.rooms.map(room=><li key={room}>{room}</li>)}</ul><a className="text-link" href={plan.image} target="_blank" rel="noopener noreferrer">Open full-size plan</a><a className="text-link" href={brochure} target="_blank" rel="noopener noreferrer">View original brochure</a></div></div><a className="plan-image" href={plan.image} target="_blank" rel="noopener noreferrer" aria-label={`Open ${plan.name} floor plan at full size`}><Image key={plan.image} src={plan.image} alt={`${plan.name} floor plan from the project brochure`} width={1100} height={1000} sizes="(max-width: 700px) 90vw, 60vw" /></a></div>;
}

export function ProjectGallery({ gallery }: Pick<ProjectDetail,"gallery">) {
  const [index,setIndex]=useState(0);
  return <div className="project-gallery"><figure><Image src={gallery[index].image} alt={gallery[index].caption} width={1600} height={1100} sizes="90vw" /><figcaption>{gallery[index].caption}</figcaption></figure>{gallery.length>1&&<div className="gallery-options" aria-label="Choose project image">{gallery.map((item,i)=><button key={item.image} aria-pressed={index===i} className={index===i?"selected":""} onClick={()=>setIndex(i)}><Image src={item.image} alt={item.caption} width={120} height={80} /></button>)}</div>}</div>;
}
