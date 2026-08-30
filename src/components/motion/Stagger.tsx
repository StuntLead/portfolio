"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MOTION_DURATIONS, MOTION_EASING, MOTION_STAGGER } from "@/lib/motion";

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "none";
  amount?: number;
  once?: boolean;
}

export function Stagger({
  children,
  className = "",
  staggerDelay = MOTION_STAGGER.medium,
  direction = "up",
  amount = 0.2,
  once = true,
}: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  };

  const item = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : (direction === "up" ? 10 : 0) 
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: MOTION_DURATIONS.normal,
        ease: MOTION_EASING.default,
      }
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return <motion.div variants={item}>{child}</motion.div>;
      })}
    </motion.div>
  );
}
