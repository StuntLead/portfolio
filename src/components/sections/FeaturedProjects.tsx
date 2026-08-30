"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { ActionLink } from "@/components/ui/ActionLink";

const filters = ["All", "Software", "AI / ML", "Research"];

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return project.featured;
    if (activeFilter === "Software") return project.category === "software" && project.featured;
    if (activeFilter === "AI / ML") return project.category === "ai" && project.featured;
    if (activeFilter === "Research") return project.category === "research" && project.featured;
    return false;
  });

  const primaryProjects = filteredProjects.filter(p => p.featuredLevel === "primary");
  const secondaryProjects = filteredProjects.filter(p => p.featuredLevel !== "primary");

  return (
    <section id="work" className="py-24 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-2">01 — Selected Work</h2>
            <p className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Engineering & Applied AI
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "text-sm font-medium transition-colors relative pb-1",
                  activeFilter === filter
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {filter}
                {activeFilter === filter && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-foreground" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          {/* Primary Projects */}
          <div className="space-y-24">
            <AnimatePresence mode="popLayout">
              {primaryProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4 }}
                  className={cn(
                    "flex flex-col gap-8 lg:gap-16",
                    index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  )}
                >
                  {project.thumbnail && (
                    <Reveal scale delay={0.1} className="w-full md:w-3/5">
                      <Link 
                        href={`/projects/${project.slug}`} 
                        className="block relative aspect-video md:aspect-[4/3] rounded-md border border-border bg-surface overflow-hidden hover:border-foreground/30 transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        aria-label={`Open ${project.title} case study`}
                      >
                        <Image
                          src={project.thumbnail}
                          alt={`${project.title} thumbnail`}
                          fill
                          className="object-cover transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.02]"
                        />
                      </Link>
                    </Reveal>
                  )}
                  
                  <div className={cn("w-full flex flex-col justify-center", project.thumbnail ? "md:w-2/5" : "")}>
                    <div className="mb-4">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {project.category === "ai" ? "AI / ML" : 
                         project.category === "software" ? "Software Engineering" : 
                         project.category === "research" ? "Research" : "Product"}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      <Link 
                        href={`/projects/${project.slug}`} 
                        className="hover:text-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    
                    <p className="text-base text-muted-foreground mb-8">
                      {project.description}
                    </p>

                    {project.metrics && project.metrics.length > 0 && (
                      <Stagger className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-border" staggerDelay={0.05} amount={0.5}>
                        {project.metrics.map(metric => (
                          <div key={metric.label}>
                            <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                            <p className="text-xs font-mono text-muted-foreground mt-1">{metric.label}</p>
                          </div>
                        ))}
                      </Stagger>
                    )}
                    
                    <div className="mb-8">
                      <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                        {project.technologies.join(" · ")}
                      </p>
                    </div>
                    
                    <div>
                      <ActionLink 
                        href={`/projects/${project.slug}`}
                        icon="chevron"
                        variant="primary"
                      >
                        Open case study
                      </ActionLink>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Secondary Projects Grid */}
          {secondaryProjects.length > 0 && (
            <div className="pt-24 border-t border-border">
              <h3 className="text-2xl font-bold text-foreground mb-12">More Projects</h3>
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                <AnimatePresence mode="popLayout">
                  {secondaryProjects.map((project) => (
                    <motion.div
                      key={project.slug}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col group relative"
                    >
                      {/* Make the entire secondary project card a clickable area, without nesting links. We achieve this by stretching a pseudo-element from the title link over the whole card, and elevating z-index of other interactive elements if necessary, but here we'll just link the thumbnail and title separately for semantics as requested. */}
                      {project.thumbnail ? (
                        <Link 
                          href={`/projects/${project.slug}`} 
                          className="block relative aspect-video rounded-md border border-border bg-surface mb-6 overflow-hidden hover:border-foreground/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                          aria-label={`Open ${project.title} case study`}
                        >
                          <Image
                            src={project.thumbnail}
                            alt={`${project.title} thumbnail`}
                            fill
                            className="object-cover transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.02]"
                          />
                        </Link>
                      ) : (
                        <div className="h-[2px] bg-border w-full mb-6 group-hover:bg-accent transition-colors" />
                      )}
                      
                      <div className="flex-1 flex flex-col">
                        <div className="mb-3">
                          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-bold text-foreground mb-3">
                          <Link 
                            href={`/projects/${project.slug}`} 
                            className="hover:text-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                          >
                            {project.title}
                          </Link>
                        </h4>
                        
                        <p className="text-muted-foreground mb-6 flex-1 text-sm">
                          {project.description}
                        </p>
                        
                        <div className="mt-auto">
                          <p className="text-xs font-mono text-muted-foreground mb-4 line-clamp-1">
                            {project.technologies.slice(0, 4).join(" · ")}
                            {project.technologies.length > 4 && " · ..."}
                          </p>
                          <ActionLink 
                            href={`/projects/${project.slug}`}
                            icon="chevron"
                            variant="primary"
                            className="px-3 py-1.5 text-xs"
                          >
                            Open case study
                          </ActionLink>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
