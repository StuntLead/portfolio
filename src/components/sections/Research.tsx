import Image from "next/image";
import { publications } from "@/data/publications";
import { Reveal } from "@/components/motion/Reveal";
import { ActionLink } from "@/components/ui/ActionLink";

export function Research() {
  if (!publications || publications.length === 0) return null;

  return (
    <section id="research" className="py-24 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-editorial">
        <Reveal className="mb-16">
          <h2 className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-2">03 — Research</h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Academic Contributions
          </p>
        </Reveal>

        <div className="space-y-16">
          {publications.map((pub, i) => (
            <div key={pub.doi || i} className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              
              <Reveal direction="right" delay={0.05} className="flex-1 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {pub.title}
                </h3>
                
                <div className="space-y-2">
                  <p className="text-base text-muted-foreground">
                    {pub.authors.join(", ")}
                  </p>
                  <p className="text-sm text-foreground font-medium font-mono">
                    {pub.publisher} · {pub.venue}
                  </p>
                </div>
                
                <Reveal delay={0.15}>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-mono border-l-2 border-border pl-4">
                    {pub.year && <span>{pub.year}</span>}
                    {pub.volume && <span>Vol {pub.volume}</span>}
                    {pub.pages && <span>pp. {pub.pages}</span>}
                    {pub.doi && <span>DOI: {pub.doi}</span>}
                  </div>
                </Reveal>
                
                {pub.methodology && (
                  <div className="pt-4">
                    <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Methodology</p>
                    <p className="text-base text-foreground">
                      {pub.methodology.join(" / ")}
                    </p>
                  </div>
                )}
                
                {pub.url && (
                  <div className="pt-6">
                    <ActionLink 
                      href={pub.url} 
                      isExternal
                      icon="file"
                      variant="primary"
                    >
                      Read on ScienceDirect
                    </ActionLink>
                  </div>
                )}
              </Reveal>

              {/* Only the first publication might get the image, or all if we had multiple images. 
                  Currently we know there is one presentation photo in legacy assets that matches the research. */}
              {i === 0 && (
                <div className="w-full lg:w-2/5 flex flex-col gap-6">
                  <Reveal scale delay={0.1} className="relative aspect-[4/3] rounded-md bg-surface-secondary border border-border overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <Image 
                      src="/images/presentation-photo.jpg" 
                      alt="Research presentation" 
                      fill 
                      className="object-cover"
                    />
                  </Reveal>
                  
                  <Reveal scale delay={0.2} className="relative aspect-video rounded-md bg-surface-secondary border border-border overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/s-wL6aDFVEQ"
                      title="Research Presentation Video"
                      className="w-full h-full border-0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </Reveal>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
