"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "The Technical Architecture of Solventis Institutional Yield Notes",
    excerpt: "A deep dive into the legal, financial, and technical structure of our RWA-backed yield products.",
    date: "May 24, 2024",
    readTime: "8 min read",
    slug: "technical-architecture-yield-notes",
    category: "Technical",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary mb-6">
              Solventis Insights
            </h1>
            <p className="text-xl text-muted-foreground">
              Deep dives into RWA tokenization, institutional finance, and technical architecture.
            </p>
          </div>

          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group p-8 border rounded-2xl bg-card shadow-sm hover:border-accent transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-none">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center font-bold text-accent">
                  Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}