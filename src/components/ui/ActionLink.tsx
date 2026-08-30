"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronRight, ExternalLink, Play, MonitorUp, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary" | "quiet";
  icon?: "chevron" | "external" | "play" | "monitor" | "file" | "none";
  isExternal?: boolean;
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  icon = "none",
  isExternal,
  className,
  ...props
}: ActionLinkProps) {
  const rootRef = useRef<HTMLAnchorElement>(null);

  const handlePointerEnter = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = rootRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate max radius needed to cover the button from pointer position
    const radius = Math.max(
      Math.hypot(x, y),
      Math.hypot(rect.width - x, y),
      Math.hypot(x, rect.height - y),
      Math.hypot(rect.width - x, rect.height - y)
    ) + 2; // +2px safety margin

    el.style.setProperty("--hover-x", `${x}px`);
    el.style.setProperty("--hover-y", `${y}px`);
    el.style.setProperty("--hover-radius", `${radius}px`);
    el.setAttribute("data-hovered", "true");
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = rootRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--hover-x", `${x}px`);
    el.style.setProperty("--hover-y", `${y}px`);
    el.setAttribute("data-hovered", "false");
  };

  // Determine routing behavior
  const isHash = href.startsWith("#");
  const isMail = href.startsWith("mailto:");
  // Infer external if explicit or if it starts with http (and not localhost in prod, but simple check is enough)
  const isExt = isExternal !== undefined ? isExternal : (href.startsWith("http") && !href.startsWith(window?.location?.origin || ""));
  
  const shouldOpenNewTab = isExt && !isMail && !isHash;

  let IconComponent = null;
  if (icon === "chevron") IconComponent = ChevronRight;
  else if (icon === "external") IconComponent = ExternalLink;
  else if (icon === "play") IconComponent = Play;
  else if (icon === "monitor") IconComponent = MonitorUp;
  else if (icon === "file") IconComponent = FileText;

  const baseClasses = cn(
    "action-link relative inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md overflow-hidden isolate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background group border",
    // Transition colors for border/text
    "transition-colors duration-[150ms] motion-reduce:transition-none",
    // Scale on active, but disabled for reduced motion
    "motion-safe:active:scale-[0.985]",
    className
  );

  // Variant specific classes map to our CSS variable roots
  const variantClasses = {
    primary: "action-link-primary",
    secondary: "action-link-secondary",
    quiet: "action-link-quiet",
  };

  const content = (
    <>
      <span 
        className={cn(
          "action-link-bg absolute inset-0 z-0 pointer-events-none",
          
          // DEFAULT / COARSE POINTERS: hidden by default, simple opacity pop on active
          "opacity-0 active:opacity-100 transition-opacity duration-150 motion-reduce:transition-none",
          
          // FINE POINTERS (MOUSE): enable radial animation
          "[@media(hover:hover)_and_(pointer:fine)]:opacity-100",
          "[@media(hover:hover)_and_(pointer:fine)]:transition-all [@media(hover:hover)_and_(pointer:fine)]:duration-[300ms] [@media(hover:hover)_and_(pointer:fine)]:ease-[cubic-bezier(0.22,1,0.36,1)]",
          "[@media(hover:hover)_and_(pointer:fine)]:clip-path-circle-0 [@media(hover:hover)_and_(pointer:fine)]:group-data-[hovered=true]:clip-path-circle-hover",
          
          // REDUCED MOTION: Disable all transformations and rely only on instant opacity
          "motion-reduce:clip-path-none motion-reduce:opacity-0 motion-reduce:group-hover:opacity-100"
        )}
        style={{
          clipPath: "circle(var(--radius, 0px) at var(--hover-x, 50%) var(--hover-y, 50%))",
        }}
      />
      {/* Content wrapper with text color transitions */}
      <span className={cn(
        "relative z-10 flex items-center gap-1.5 text-inherit",
        "transition-colors duration-[150ms] motion-reduce:transition-none"
      )}>
        {children}
        {IconComponent && (
          <span className={cn(
            "inline-flex text-inherit",
            // Icon translation animation
            "transition-transform duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none",
            icon === "chevron" ? "group-data-[hovered=true]:translate-x-[2px]" : 
            icon === "external" ? "group-data-[hovered=true]:translate-x-[1px] group-data-[hovered=true]:-translate-y-[1px]" :
            "group-data-[hovered=true]:translate-x-[1px]"
          )}>
            <IconComponent className="w-3.5 h-3.5" strokeWidth={1.75} />
          </span>
        )}
      </span>
    </>
  );

  const sharedProps = {
    ref: rootRef,
    onPointerEnter: handlePointerEnter,
    onPointerLeave: handlePointerLeave,
    className: cn(baseClasses, variantClasses[variant]),
    "data-hovered": "false",
    ...props
  };

  // Internal route (Next.js Link)
  if (!isExt && !isMail && !isHash && href.startsWith("/")) {
    return (
      <Link href={href} {...sharedProps}>
        {content}
      </Link>
    );
  }

  // External, Mail, or Hash route (normal <a> tag)
  return (
    <a 
      href={href} 
      target={shouldOpenNewTab ? "_blank" : undefined}
      rel={shouldOpenNewTab ? "noopener noreferrer" : undefined}
      {...sharedProps}
    >
      {content}
    </a>
  );
}
