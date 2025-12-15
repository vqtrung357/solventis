import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

interface BulletPointCardProps {
  children: React.ReactNode;
  className?: string;
}

export function BulletPointCard({ children, className }: BulletPointCardProps) {
  return (
    <li className={cn(
      "flex items-start p-3 rounded-md bg-background border border-border/50 transition-colors hover:bg-secondary/50",
      className
    )}>
      <ArrowRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-accent" />
      <p className="text-sm text-foreground/80">{children}</p>
    </li>
  );
}