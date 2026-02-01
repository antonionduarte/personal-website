"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface AuroraTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children: React.ReactNode;
  disableEffects?: boolean;
}

export function AuroraText({
  className,
  children,
  disableEffects = false,
  ...props
}: AuroraTextProps) {
  return (
    <span
      className={cn("relative inline-flex overflow-hidden", className)}
      {...props}
    >
      {children}
      {!disableEffects && (
        <span className="pointer-events-none absolute inset-0 mix-blend-lighten dark:mix-blend-darken">
          <span className="pointer-events-none absolute -top-1/2 h-[10em] w-[10em] animate-pulse bg-purple-500 mix-blend-overlay blur-[1rem]"></span>
          <span className="pointer-events-none absolute right-0 top-0 h-[10em] w-[10em] animate-pulse bg-blue-500 mix-blend-overlay blur-[1rem]" style={{ animationDelay: '1s' }}></span>
          <span className="pointer-events-none absolute bottom-0 left-0 h-[10em] w-[10em] animate-pulse bg-cyan-500 mix-blend-overlay blur-[1rem]" style={{ animationDelay: '2s' }}></span>
          <span className="pointer-events-none absolute -bottom-1/2 right-0 h-[10em] w-[10em] animate-pulse bg-indigo-500 mix-blend-overlay blur-[1rem]" style={{ animationDelay: '3s' }}></span>
        </span>
      )}
    </span>
  );
}
