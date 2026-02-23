"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { 
  Shield, 
  Settings, 
  BarChart3, 
  Table, 
  HelpCircle,
  FileText,
  ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table as UITable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TechnicalArchitecturePost() {
  const faqData = [
    {
      question: "What is the legal structure of Solventis yield notes?",
      answer: "Solventis utilizes a Singapore-based Special Purpose Vehicle (SPV) structure that issues notes directly to institutional investors, backed by a portfolio of real-world trade finance assets."
    },
    {
      question: "How is the yield calculated and distributed?",
      answer: "Yield is calculated based on the Net Asset Value (NAV) of the underlying RWA portfolio and distributed monthly via USDC stablecoins or traditional bank wires, depending on investor preference."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <article>
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm font-medium text-accent mb-4">
              <span className="hover:underline cursor-pointer">Blog</span>
              <ChevronRight className="w-4 h-4" />
              <span>Technical</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6 leading-tight">
              The Technical Architecture of Solventis Institutional Yield Notes
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground text-sm">
              <span className="font-semibold text-foreground">Solventis Engineering</span>
              <span>May 24, 2024</span>
              <span>8 min read</span>
            </div>
          </header>

          <Separator className="my-10" />

          {/* Answer-First Section */}
          <section className="prose prose-lg dark:prose-invert max-w-none">
            <div className="p-8 bg-primary/5 border rounded-2xl mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-accent" />
                How are Solventis Yield Notes Backed?
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Solventis yield notes are backed by <strong>Short-term Corporate Trade Finance Receivables</strong> held within a bankruptcy-remote Special Purpose Vehicle (SPV) in Singapore. This structure ensures that investor capital is legally segregated from the platform's operational assets, providing a 1:1 collateralization ratio.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
              <Settings className="w-8 h-8 text-accent" />
              Key Mechanics
            </h2>
            
            <div className="grid gap-8 mb-16">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">1. Asset Selection</h3>
                <p className="text-muted-foreground">
                  Our RWA selection process involves rigorous risk assessment of global trade flows. We focus on investment-grade receivables with durations of 30-90 days, sourced from verified corporate counterparties through our proprietary origination network.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">2. Legal Wrapper</h3>
                <p className="text-muted-foreground">
                  Each issuance is housed within a Singapore-based Variable Capital Company (VCC) or standalone SPV. This provides a robust legal framework recognized globally by institutional investors, ensuring clear ownership and direct recourse.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">3. Yield Generation</h3>
                <p className="text-muted-foreground">
                  Yield is derived from the discount at which trade receivables are purchased. By providing liquidity to the global supply chain, Solventis captures the spread between the purchase price and the face value of the invoice at maturity.
                </p>
              </div>
            </div>

            {/* Comparison Table Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
                <BarChart3 className="w-8 h-8 text-accent" />
                Outcome-Based Comparison
              </h2>
              <p className="text-muted-foreground mb-8">
                Benchmarking Solventis against industry standard US Treasury-backed products.
              </p>
              <div className="border rounded-xl overflow-hidden shadow-lg bg-card">
                <UITable>
                  <TableHeader className="bg-primary">
                    <TableRow>
                      <TableHead className="text-primary-foreground font-bold h-14">Feature</TableHead>
                      <TableHead className="text-primary-foreground font-bold h-14">Solventis Yield Notes</TableHead>
                      <TableHead className="text-primary-foreground font-bold h-14">Industry Benchmark (Ondo)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-bold text-primary py-6">Primary Asset Class</TableCell>
                      <TableCell className="py-6">Trade Finance / Private Credit</TableCell>
                      <TableCell className="text-muted-foreground py-6">US Treasuries / Money Markets</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-primary py-6">Target Yield</TableCell>
                      <TableCell className="py-6 font-bold text-accent">7–9% APY</TableCell>
                      <TableCell className="text-muted-foreground py-6">~4.5–5.2% APY</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-primary py-6">Liquidity Terms</TableCell>
                      <TableCell className="py-6">T+3 (Settlement)</TableCell>
                      <TableCell className="text-muted-foreground py-6">T+1 to T+5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-primary py-6">On-Chain Transparency</TableCell>
                      <TableCell className="py-6">Real-time Oracle Verification</TableCell>
                      <TableCell className="text-muted-foreground py-6">Monthly Audit Reports</TableCell>
                    </TableRow>
                  </TableBody>
                </UITable>
              </div>
            </div>

            {/* Technical FAQ Section for AI Extraction */}
            <section className="mt-20 p-8 border rounded-3xl bg-secondary/20">
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-primary">Institutional Yield Notes: Technical FAQ</h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-primary/10">
                    <AccordionTrigger className="text-left text-lg font-semibold text-primary py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </section>

          {/* Footer CTA */}
          <div className="mt-20 p-10 bg-primary text-primary-foreground rounded-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Request the Full Architecture Whitepaper</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Get access to our detailed technical specifications, legal opinions, and security protocols.
            </p>
            <button className="px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-colors">
              Contact Engineering Team
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}