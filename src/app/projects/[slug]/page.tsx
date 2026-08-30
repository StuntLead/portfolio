import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectContent } from "@/components/project/ProjectContent";
import { ProjectGallery } from "@/components/project/ProjectGallery";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

import { SITE_URL } from "@/lib/site";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = `${project.title} — Fernando Darren Rachman`;

  const ogImages = project.thumbnail ? [{ url: project.thumbnail }] : undefined;

  return {
    title: {
      absolute: title,
    },
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      ...(ogImages && { images: ogImages }),
    },
    twitter: {
      card: project.thumbnail ? "summary_large_image" : "summary",
      title,
      description: project.description,
      ...(ogImages && { images: ogImages }),
    },
  };
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const githubLink = project.links?.find(l => l.type === "github");

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": project.category === "software" || project.category === "ai" ? "SoftwareSourceCode" : "CreativeWork",
    name: project.title,
    description: project.description,
    author: {
      "@type": "Person",
      name: "Fernando Darren Rachman"
    },
    ...(githubLink && { codeRepository: githubLink.url })
  };

  if (SITE_URL) {
    jsonLd.url = `${SITE_URL}/projects/${project.slug}`;
    jsonLd.mainEntityOfPage = `${SITE_URL}/projects/${project.slug}`;
  }

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectHero project={project} />
      <ProjectContent project={project} />
      <ProjectGallery project={project} />
    </article>
  );
}
