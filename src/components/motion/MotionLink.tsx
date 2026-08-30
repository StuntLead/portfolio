"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink, Mail, Play, MonitorUp, FileText } from "lucide-react";

interface MotionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  icon?: "chevron" | "external" | "mail" | "play" | "monitor" | "file" | "none";
  showArrow?: boolean; // For backwards compatibility during transition
  className?: string;
  isExternal?: boolean;
}

export function MotionLink({
  href,
  children,
  icon = "none",
  showArrow,
  className = "",
  isExternal = false,
  ...props
}: MotionLinkProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const baseClassName = `group inline-flex items-center gap-1.5 transition-colors hover:text-foreground ${className}`;

  let IconComponent = null;
  let hoverVariants = { initial: { x: 0, y: 0 }, hover: { x: 0, y: 0 } };
  
  if (icon === "chevron") {
    IconComponent = ChevronRight;
    hoverVariants = { initial: { x: 0, y: 0 }, hover: { x: 2, y: 0 } };
  } else if (icon === "external") {
    IconComponent = ExternalLink;
    hoverVariants = { initial: { x: 0, y: 0 }, hover: { x: 1, y: -1 } };
  } else if (icon === "mail") {
    IconComponent = Mail;
  } else if (icon === "play") {
    IconComponent = Play;
  } else if (icon === "monitor") {
    IconComponent = MonitorUp;
  } else if (icon === "file") {
    IconComponent = FileText;
  }

  // Backwards compatibility for old props if any remained
  if (showArrow !== undefined) {
    if (showArrow && icon === "none") {
      IconComponent = isExternal || !isInternal ? ExternalLink : ChevronRight;
      hoverVariants = isExternal || !isInternal 
        ? { initial: { x: 0, y: 0 }, hover: { x: 1, y: -1 } }
        : { initial: { x: 0, y: 0 }, hover: { x: 2, y: 0 } };
    }
  }

  const content = (
    <>
      {children}
      {IconComponent && (
        <motion.span
          className="inline-flex opacity-70 transition-opacity group-hover:opacity-100"
          variants={hoverVariants}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <IconComponent className="w-3.5 h-3.5" strokeWidth={1.75} />
        </motion.span>
      )}
    </>
  );

  if (isInternal && !isExternal) {
    return (
      <Link href={href} className={baseClassName} {...props}>
        <motion.span initial="initial" whileHover="hover" className="inline-flex items-center gap-1.5">
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={isExternal || !isInternal ? "_blank" : undefined}
      rel={isExternal || !isInternal ? "noopener noreferrer" : undefined}
      className={baseClassName}
      {...props}
    >
      <motion.span initial="initial" whileHover="hover" className="inline-flex items-center gap-1.5">
        {content}
      </motion.span>
    </a>
  );
}
