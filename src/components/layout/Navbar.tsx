"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { skills } from "@/data/skills";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { flushSync } from "react-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  const sectionIds = ["work", "experience", "research", "capabilities", "about"];
  const activeSection = useActiveSection(sectionIds);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ...(projects.length > 0 ? [{ href: "/#work", label: "Work" }] : []),
    ...(experience.length > 0 ? [{ href: "/#experience", label: "Experience" }] : []),
    ...(publications.length > 0 ? [{ href: "/#research", label: "Research" }] : []),
    ...(skills.length > 0 ? [{ href: "/#capabilities", label: "Technologies" }] : []),
    { href: "/#about", label: "About" },
  ];

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentTheme = resolvedTheme || theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(newTheme);
      return;
    }

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 450,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-border" 
          : "bg-background border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-editorial">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-sans font-medium text-sm md:text-sm tracking-tight hover:text-accent transition-colors">
              Fernando Darren Rachman
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => {
              const isActive = activeSection && link.href.includes(activeSection);
              return (
                <Link
                  key={link.href}
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  className={cn(
                    "transition-colors relative py-1",
                    isActive ? "text-foreground" : "hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                  )}
                </Link>
              );
            })}
            
            <div className="flex items-center space-x-6 border-l border-border pl-8 ml-8">
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              )}
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              )}
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Résumé
                </a>
              )}
              
              {/* Theme Toggle Button */}
              {mounted && (
                <button
                  onClick={handleThemeToggle}
                  aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-secondary transition-colors relative overflow-hidden"
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={resolvedTheme || theme}
                      initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {resolvedTheme === "dark" ? (
                        <Sun className="w-4 h-4" />
                      ) : (
                        <Moon className="w-4 h-4" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>
              )}
              {!mounted && (
                <div className="w-7 h-7" /> // Placeholder to prevent layout shift
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            {mounted && (
              <button
                onClick={handleThemeToggle}
                aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-secondary transition-colors"
              >
                {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-t border-border bg-background absolute w-full"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-4 border-t border-border">
                {profile.github && (
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </a>
                )}
                {profile.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                )}
                {profile.resumeUrl && (
                  <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Résumé
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

