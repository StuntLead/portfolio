import { Project } from "@/types/portfolio";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="py-16 md:py-24 border-t border-border bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-editorial">
        
        {project.metrics && project.metrics.length > 0 && (
          <Reveal className="mb-24 pb-16 border-b border-border">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-8">Key Results</h2>
            <Stagger className="flex flex-wrap gap-12 md:gap-24" staggerDelay={0.06} amount={0.5}>
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <p className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-2">{metric.value}</p>
                  <p className="text-lg text-muted-foreground font-mono">
                    {metric.label}
                  </p>
                </div>
              ))}
            </Stagger>
          </Reveal>
        )}

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-2/3 flex flex-col gap-16 text-lg text-foreground leading-relaxed">
            {project.problem && (
              <Reveal direction="up" className="space-y-6">
                <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">The Problem</h2>
                <p>{project.problem}</p>
              </Reveal>
            )}
            
            {project.solution && (
              <Reveal direction="up" delay={0.05} className="space-y-6">
                <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Approach & Solution</h2>
                <p>{project.solution}</p>
              </Reveal>
            )}
            
            {project.contribution && (
              <Reveal direction="up" delay={0.1} className="space-y-6">
                <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">My Contribution</h2>
                <p>{project.contribution}</p>
              </Reveal>
            )}
          </div>
          
          <div className="lg:w-1/3 flex flex-col gap-12">
            <Reveal direction="up" delay={0.15}>
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4 border-b border-border pb-4">Stack</h3>
              <p className="text-base text-foreground font-mono leading-relaxed mt-4">
                {project.technologies.join(" / ")}
              </p>
            </Reveal>
            
            {project.role && (
              <Reveal direction="up" delay={0.2}>
                <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4 border-b border-border pb-4">Role</h3>
                <p className="text-base text-foreground mt-4">{project.role}</p>
              </Reveal>
            )}
            
            {project.team && project.team.length > 0 && (
              <Reveal direction="up" delay={0.25}>
                <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4 border-b border-border pb-4">Team</h3>
                <ul className="space-y-4 mt-4">
                  {project.team.map((member, i) => (
                    <li key={i}>
                      <p className="text-base text-foreground">{member.name}</p>
                      <p className="text-sm text-muted-foreground font-mono mt-1">{member.role}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}
