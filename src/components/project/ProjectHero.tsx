import { Project } from "@/types/portfolio";
import { Stagger } from "@/components/motion/Stagger";
import { MotionLink } from "@/components/motion/MotionLink";
import { ActionLink } from "@/components/ui/ActionLink";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-editorial">
        <div className="mb-12">
          <MotionLink 
            href="/#work" 
            className="text-sm font-bold text-muted-foreground"
          >
            <span className="mr-2 opacity-50 group-hover:opacity-100 group-hover:-translate-x-1 transition-all">←</span>
            Back to selected work
          </MotionLink>
        </div>
        
        <Stagger className="max-w-4xl space-y-6" staggerDelay={0.05} amount={0.1}>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {project.category}
            </span>
            {project.status && (
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider before:content-['·'] before:mr-4">
                {project.status}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed pt-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-3 pt-8">
            {project.links && project.links.map((link) => {
              // Primary project actions: Live Demo, Prototype
              const isPrimary = link.type === "live" || link.type === "paper" || (link.type === "github" && project.slug === "danain");
              
              return (
                <div key={link.url} className="block">
                  <ActionLink 
                    href={link.url} 
                    isExternal
                    icon={
                      link.type === "live" ? "monitor" :
                      link.type === "github" ? "external" :
                      link.type === "huggingface" ? "external" :
                      link.type === "paper" ? "file" : "external"
                    }
                    variant={isPrimary ? "primary" : "secondary"}
                  >
                    {link.label}
                  </ActionLink>
                </div>
              );
            })}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
