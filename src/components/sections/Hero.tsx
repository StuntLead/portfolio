import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { Stagger } from "@/components/motion/Stagger";
import { MotionLink } from "@/components/motion/MotionLink";

export function Hero() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-editorial">
        <Stagger className="max-w-4xl space-y-8" staggerDelay={0.06}>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {profile.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              {profile.headline}
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {profile.bio}
          </p>

          <div className="pt-8 border-t border-border flex flex-col sm:flex-row gap-8">
            <div className="space-y-2 text-sm">
              {(profile.location || (education.length > 0 && education[0].university)) && (
                <div className="text-muted-foreground font-mono">
                  {profile.location && <span>{profile.location}</span>}
                  {profile.location && education.length > 0 && education[0].university && <span> · </span>}
                  {education.length > 0 && education[0].university && <span>{education[0].university}</span>}
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
              {profile.github && (
                <div className="block">
                  <MotionLink href={profile.github} isExternal icon="external" className="text-muted-foreground hover:text-foreground">
                    GitHub
                  </MotionLink>
                </div>
              )}
              {profile.linkedin && (
                <div className="block">
                  <MotionLink href={profile.linkedin} isExternal icon="external" className="text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </MotionLink>
                </div>
              )}
              {profile.resumeUrl && (
                <div className="block">
                  <MotionLink href={profile.resumeUrl} isExternal icon="external" className="text-muted-foreground hover:text-foreground">
                    Résumé
                  </MotionLink>
                </div>
              )}
            </div>
          </div>
          
        </Stagger>
      </div>
    </section>
  );
}
