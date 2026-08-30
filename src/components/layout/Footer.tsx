import { profile } from "@/data/profile";
import Link from "next/link";
import { MotionLink } from "@/components/motion/MotionLink";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-editorial flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground font-mono">
          © {year} {profile.name}
        </p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-muted-foreground">
          {profile.github && (
            <MotionLink href={profile.github} isExternal>
              GitHub
            </MotionLink>
          )}
          {profile.linkedin && (
            <MotionLink href={profile.linkedin} isExternal>
              LinkedIn
            </MotionLink>
          )}
          <Link href="/#about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
