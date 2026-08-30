"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectMedia } from "@/types/portfolio";

interface ProjectLightboxProps {
  media: ProjectMedia[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function ProjectLightbox({
  media,
  currentIndex,
  isOpen,
  onClose,
  onIndexChange,
}: ProjectLightboxProps) {
  // Only image media should be in the lightbox, but let's filter just in case
  const images = media.filter((m) => m.type === "image");
  const hasMultiple = images.length > 1;

  const handlePrevious = useCallback(() => {
    if (images.length === 0) return;
    onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasMultiple) handlePrevious();
      if (e.key === "ArrowRight" && hasMultiple) handleNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    
    // Body scroll lock
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, hasMultiple, handleNext, handlePrevious, onClose]);

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-background/95 cursor-pointer backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close lightbox"
          />

          {/* Controls */}
          <div className="absolute top-4 right-4 z-[101]">
            <button
              onClick={onClose}
              className="p-3 text-muted-foreground hover:text-foreground bg-background/50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {hasMultiple && (
            <>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-[101]">
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
                  className="p-3 text-muted-foreground hover:text-foreground bg-background/50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-[101]">
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="p-3 text-muted-foreground hover:text-foreground bg-background/50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </>
          )}

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-[100] w-full max-w-6xl max-h-[85vh] h-full mx-4 sm:mx-16 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full pointer-events-auto cursor-default">
              <Image
                src={currentImage.src}
                alt={currentImage.alt || "Project gallery image"}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
                priority
              />
            </div>
            {currentImage.caption && (
              <div className="absolute bottom-[-2rem] text-center w-full text-sm text-muted-foreground font-mono">
                {currentImage.caption}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
