"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MOTION_DURATIONS, MOTION_EASING } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: "some" | "all" | number;
  once?: boolean;
  scale?: boolean; // Whether to use the slight scale effect (0.985 -> 1)
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "none",
  amount = 0.1,
  once = true,
  scale = false,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const initial: Record<string, number> = { opacity: 0 };
  const animate: Record<string, number> = { opacity: 1 };

  if (!prefersReducedMotion) {
    if (direction === "up") initial.y = 10;
    if (direction === "down") initial.y = -10;
    if (direction === "left") initial.x = 10;
    if (direction === "right") initial.x = -10;
    
    if (scale) {
      initial.scale = 0.985;
      animate.scale = 1;
    }
    
    animate.x = 0;
    animate.y = 0;
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{
        duration: MOTION_DURATIONS.normal,
        ease: MOTION_EASING.default,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
