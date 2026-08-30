import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) {
    console.warn("Sitemap requires NEXT_PUBLIC_SITE_URL before production deployment.");
    return [];
  }

  const projectUrls = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectUrls,
  ];
}
