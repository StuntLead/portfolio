import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { Reveal } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";

export function About() {
  return (
    <section id="about" className="py-24 border-y border-border bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-editorial">
        <Reveal className="mb-16">
          <h2 className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-2">05 — About</h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Background
          </p>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          <Reveal direction="up" delay={0.05} className="flex-1 max-w-2xl text-lg text-foreground leading-relaxed space-y-6">
            <p>
              I am an AI Engineer and Full-Stack Developer focused on translating complex technical concepts into intuitive, high-impact software. I bridge the gap between machine learning research and practical application, building scalable systems that solve real problems.
            </p>
            <p>
              My experience ranges from fine-tuning Large Language Models and deploying real-time Computer Vision systems to engineering robust web architectures. I prioritize writing efficient, user-centric code to deliver products that perform reliably in production environments.
            </p>
          </Reveal>
          
          <Reveal direction="up" delay={0.1} className="w-full md:w-1/3 flex flex-col gap-8">
            {profile.location && (
              <div className="pb-4 border-b border-border">
                <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Based in</h3>
                <p className="text-base text-foreground font-medium">{profile.location}</p>
              </div>
            )}
            
            {education && education.length > 0 && education[0].university && (
              <div className="pb-4 border-b border-border">
                <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Studying</h3>
                <p className="text-base text-foreground font-medium">{education[0].degree}</p>
                <p className="text-sm text-muted-foreground mt-1">{education[0].university}</p>
              </div>
            )}
            
            <div className="pb-4 border-b border-border">
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Focus</h3>
              <p className="text-base text-foreground font-medium">Software Engineering / AI</p>
            </div>
            
            {(profile.github || profile.linkedin || profile.email) && (
              <div>
                <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Links</h3>
                <ul className="space-y-3">
                  {profile.email && (
                    <li>
                      <MotionLink href={`mailto:${profile.email}`} icon="mail" className="text-base font-medium flex items-center">
                        Email
                      </MotionLink>
                    </li>
                  )}
                  {profile.github && (
                    <li>
                      <MotionLink href={profile.github} isExternal icon="external" className="text-base font-medium flex items-center">
                        GitHub
                      </MotionLink>
                    </li>
                  )}
                  {profile.linkedin && (
                    <li>
                      <MotionLink href={profile.linkedin} isExternal icon="external" className="text-base font-medium flex items-center">
                        LinkedIn
                      </MotionLink>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
