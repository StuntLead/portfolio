import { experience } from "@/data/experience";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export function Experience() {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-24 border-t border-border bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-editorial">
        <Reveal direction="up" className="mb-16">
          <h2 className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-2">02 — Experience</h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Professional Background
          </p>
        </Reveal>

        <div className="space-y-16">
          {experience.map((exp, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
              
              <Reveal direction="up" delay={0.05} className="w-full lg:w-1/3 flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {exp.company}
                </h3>
                <div className="text-base text-foreground font-medium">
                  {exp.role}
                  {exp.team && (
                    <span className="block text-muted-foreground font-normal mt-1">
                      {exp.team}
                    </span>
                  )}
                </div>
                <div className="text-sm font-mono text-muted-foreground mt-2">
                  <p>{exp.startDate} — {exp.current ? "Present" : exp.endDate}</p>
                  {exp.location && <p>{exp.location}</p>}
                </div>
              </Reveal>

              <div className="w-full lg:w-2/3">
                {exp.description && (
                  <Reveal direction="up" delay={0.1}>
                    <p className="text-lg text-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                  </Reveal>
                )}
                
                <Stagger 
                  className="space-y-4 mb-8 text-base text-muted-foreground leading-relaxed block" 
                  staggerDelay={0.03} 
                  amount={0.1}
                >
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="relative pl-5 list-none block">
                      <span className="absolute left-0 top-2.5 w-1 h-1 bg-muted-foreground/50" />
                      {highlight}
                    </li>
                  ))}
                </Stagger>
                
                {exp.technologies && exp.technologies.length > 0 && (
                  <Reveal direction="up" delay={0.2} className="pt-6 border-t border-border">
                    <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                      {exp.technologies.join(" · ")}
                    </p>
                  </Reveal>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
