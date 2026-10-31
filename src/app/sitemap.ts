import type { MetadataRoute } from 'next';
import { projectDetails } from '@/lib/projects';
import { siteUrl } from '@/lib/seo';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl }, ...Object.keys(projectDetails).map(slug => ({ url: `${siteUrl}/projects/${slug}` }))];
}
