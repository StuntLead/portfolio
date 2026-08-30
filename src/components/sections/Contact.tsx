import { profile } from "@/data/profile";
import { Reveal } from "@/components/motion/Reveal";
import { MotionLink } from "@/components/motion/MotionLink";
import { Stagger } from "@/components/motion/Stagger";

export function Contact() {
  return (
    <section className="py-32 md:py-48">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-editorial">
        <Reveal direction="up" className="flex flex-col items-start gap-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Let&apos;s talk.
          </h2>
          
          <Stagger className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 font-medium" staggerDelay={0.06} amount={0.5}>
            {profile.email && (
              <div className="block">
                <MotionLink 
                  href={`mailto:${profile.email}`}
                  icon="mail"
                  className="text-xl md:text-2xl text-foreground hover:text-accent transition-colors border-b-2 border-foreground hover:border-accent pb-1"
                >
                  {profile.email}
                </MotionLink>
              </div>
            )}
            
            <div className="flex flex-wrap items-center gap-8 mt-4 md:mt-0 text-base">
              {profile.linkedin && (
                <div className="block">
                  <MotionLink 
                    href={profile.linkedin}
                    isExternal
                    icon="external"
                    className="text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-0.5"
                  >
                    LinkedIn
                  </MotionLink>
                </div>
              )}
              
              {profile.github && (
                <div className="block">
                  <MotionLink 
                    href={profile.github}
                    isExternal
                    icon="external"
                    className="text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-0.5"
                  >
                    GitHub
                  </MotionLink>
                </div>
              )}

              {profile.resumeUrl && (
                <div className="block">
                  <MotionLink 
                    href={profile.resumeUrl}
                    isExternal
                    icon="external"
                    className="text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-0.5"
                  >
                    Résumé
                  </MotionLink>
                </div>
              )}
            </div>
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
