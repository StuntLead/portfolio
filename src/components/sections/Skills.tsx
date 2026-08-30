import { skills } from "@/data/skills";
import { Reveal } from "@/components/motion/Reveal";

export function Skills() {
  if (!skills || skills.length === 0) return null;

  return (
    <section id="capabilities" className="py-24 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-editorial">
        <Reveal className="mb-16">
          <h2 className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-2">04 — Technologies</h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Technologies
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {skills.map((category, index) => (
            <Reveal key={category.title} direction="up" delay={index * 0.05} className="space-y-6">
              <h3 className="text-sm font-mono font-bold text-foreground uppercase tracking-wider border-b border-border pb-3">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li 
                    key={skill}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
