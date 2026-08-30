"use client";

import { useState } from "react";
import Image from "next/image";
import { Project, ProjectMedia } from "@/types/portfolio";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectLightbox } from "./ProjectLightbox";

export function ProjectGallery({ project }: { project: Project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project.media || project.media.length === 0) {
    return null;
  }

  const images = project.media.filter((m) => m.type === "image");
  const otherMedia = project.media.filter((m) => m.type !== "image");

  const handleImageClick = (imageIndex: number) => {
    setLightboxIndex(imageIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-editorial">
          <Reveal>
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-12">Gallery & Media</h2>
          </Reveal>
          
          <div className="space-y-12">
            {/* Render Video and Embed Media First */}
            {otherMedia.map((mediaItem: ProjectMedia, idx: number) => {
              if (mediaItem.type === "video") {
                return (
                  <Reveal key={`other-${idx}`} className="mb-16">
                    <div className="rounded-md border border-border bg-surface overflow-hidden">
                      <video 
                        controls 
                        preload="metadata"
                        className="w-full aspect-video object-cover"
                        poster={mediaItem.poster}
                      >
                        <source src={mediaItem.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {mediaItem.title && (
                        <div className="p-4 border-t border-border bg-background">
                          <p className="text-sm font-mono text-muted-foreground">{mediaItem.title}</p>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              }

              if (mediaItem.type === "embed") {
                return (
                  <Reveal key={`other-${idx}`} className="mb-16">
                    <div className="rounded-md border border-border bg-surface overflow-hidden w-full aspect-[4/3] md:aspect-video">
                      <iframe
                        src={mediaItem.src}
                        title={mediaItem.title || "Embedded Content"}
                        className="w-full h-full border-0"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    </div>
                  </Reveal>
                );
              }
              
              return null;
            })}

            {/* Render Image Gallery */}
            {images.length > 0 && (
              <Reveal>
                <div className="space-y-4">
                  {/* Primary Large Image */}
                  <div 
                    className="relative aspect-video rounded-md border border-border bg-surface overflow-hidden cursor-pointer hover:border-foreground/30 transition-colors group"
                    onClick={() => handleImageClick(0)}
                  >
                    <Image 
                      src={images[0].src} 
                      alt={images[0].alt || `${project.title} primary screenshot`}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-contain group-hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>

                  {/* Thumbnail Strip for Remaining Images */}
                  {images.length > 1 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {images.slice(1).map((img, idx) => (
                        <div 
                          key={`thumb-${idx}`}
                          className="relative aspect-video rounded-md border border-border bg-surface overflow-hidden cursor-pointer hover:border-foreground/30 transition-colors group"
                          onClick={() => handleImageClick(idx + 1)}
                        >
                          <Image 
                            src={img.src} 
                            alt={img.alt || `${project.title} screenshot ${idx + 2}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>

      <ProjectLightbox
        media={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setLightboxIndex}
      />
    </>
  );
}
