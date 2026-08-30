"use client";

import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();
    const visibleSections = new Set<string>();

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target.id);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      // Find the first visible section in the order of sectionIds
      for (const id of sectionIds) {
        if (visibleSections.has(id)) {
          setActiveSection(id);
          return;
        }
      }
      
      if (visibleSections.size === 0) {
        setActiveSection("");
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, observer);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
