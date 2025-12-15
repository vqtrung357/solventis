import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  className?: string;
}

export function TestimonialCard({ quote, author, title, company, className }: TestimonialCardProps) {
  return (
    <div className={cn(
      "p-6 border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow h-full flex flex-col",
      className
    )}>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-lg italic text-foreground mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center mt-auto">
        <div>
          <p className="font-semibold text-primary">{author}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
    </div>
  );
}