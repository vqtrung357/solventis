"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { 
  Building2, 
  Map, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Milestone,
  HelpCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ComplianceSingaporePage() {
  const faqData = [
    {
      question: "What specific regulatory framework does Solventis operate under in Singapore?",
      answer: "Solventis operates within the framework of the Securities and Futures Act (SFA). We are currently in the process of applying for a Capital Markets Services (CMS) License to strengthen our institutional offering."
    },
    {
      question: "Who is eligible to invest through the Singapore-based SPVs?",
      answer: "Access is strictly restricted to 'Accredited Investors' and 'Institutional Investors' as defined under the Securities and Futures Act (SFA) of Singapore. All participants must undergo rigorous KYC and KYB verification."
    },
    {
      question: "How does Solventis handle AML/CFT requirements in Singapore?",
      answer: "We strictly adhere to MAS Notice SFA04-N02 (and equivalent PSN01 guidelines), implementing robust Anti-Money Laundering (AML) and Countering the Financing of Terrorism (CFT) controls, including real-time transaction monitoring."
    },
    {
      question: "Is Solventis part of the MAS FinTech Sandbox?",
      answer: "We maintain active dialogue with the MAS FinTech and Ecosystem Development Group. While we currently operate under existing exemptions for institutional-only offerings, we are evaluating the Sandbox for future retail-facing innovations."
    },
    {
      question: "Are the digital notes considered 'Capital Markets Products'?",
      answer: "Yes. Under the SFA, the tokenized yield notes issued by our Singapore SPVs are classified as digital securities and are treated as Capital Markets Products."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <article>
          {/* Header */}
          <header className="mb-12">
            <Badge variant="outline" className="mb-4 border-accent text-accent">Singapore Jurisdiction</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6 leading-tight">
              Solventis: Singapore Regulatory Compliance & MAS Roadmap
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Solventis is committed to the highest standards of regulatory transparency in the Singaporean digital asset ecosystem.
            </p>
          </header>

          <Separator className="my-10" />

          {/* Current Regulatory Status */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold text-primary">Current Regulatory Status</h2>
            </div>
            
            <div className="grid gap-4">
              <div className="p-6 border rounded-xl bg-card shadow-sm flex items-center justify-between">
                <span className="font-semibold text-primary">Authority</span>
                <span className="text-muted-foreground">Monetary Authority of Singapore (MAS)</span>
              </div>
              <div className="p-6 border rounded-xl bg-card shadow-sm flex items-center justify-between">
                <span className="font-semibold text-primary">Status</span>
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 border-none">In Application</Badge>
              </div>
              <div className="p-6 border rounded-xl bg-card shadow-sm flex items-center justify-between">
                <span className="font-semibold text-primary">Target License</span>
                <span className="text-muted-foreground">Capital Markets Services (CMS) License</span>
              </div>
            </div>
          </section>

          {/* Compliance Roadmap */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Milestone className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold text-primary">Compliance Roadmap</h2>
            </div>

            <div className="space-y-6">
              {[
                { date: "Q1 2024", goal: "Initial submission for Capital Markets Services (CMS) License." },
                { date: "Q3 2024", goal: "Implementation of MAS-aligned AML/CFT framework." },
                { date: "Q1 2025", goal: "Expected CMS License approval and full commercial launch in Singapore." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start p-6 border rounded-xl bg-secondary/20">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{step.date}</h3>
                    <p className="text-muted-foreground">{step.goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold text-primary">Singapore Compliance FAQ</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Regulatory Verification */}
          <section className="mb-16 p-8 border rounded-2xl bg-primary/5">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-primary">Regulatory Verification</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              For independent verification of our current status, please refer to the MAS Financial Institutions Directory:
            </p>
            <a 
              href="https://eservices.mas.gov.sg/fid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white border border-border rounded-lg font-semibold text-primary hover:bg-secondary/50 transition-colors shadow-sm"
            >
              MAS Financial Institutions Directory <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            <p className="mt-8 text-sm text-muted-foreground italic">
              Solventis operates under the Securities and Futures Act during the transition period.
            </p>
          </section>

          {/* Footer Note */}
          <div className="p-8 border rounded-2xl bg-card text-center">
            <h3 className="text-xl font-bold text-primary mb-4">Institutional Inquiries</h3>
            <p className="text-muted-foreground mb-6">
              Contact our Singapore compliance desk for specific regulatory queries.
            </p>
            <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
              Contact Compliance
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}