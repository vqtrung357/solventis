"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, ArrowRight, BarChart3, Clock, Shield, HelpCircle } from "lucide-react";
import {
  Table,
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
import { Navigation } from "@/components/Navigation";
import { BulletPointCard } from "@/components/BulletPointCard";
import { DataCharts } from "@/components/DataCharts";
import { TestimonialCard } from "@/components/TestimonialCard";

// --- Helper Components for Structure ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-10 tracking-tight">
    {children}
  </h2>
);

const SectionSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center">
    {children}
  </p>
);

export default function Home() {
  const faqData = [
    {
      question: "What are Solventis Yield Notes?",
      answer: "Solventis Yield Notes are short-duration, asset-backed digital securities representing a claim on tokenized trade finance receivables. They offer institutional investors a way to earn stable yield from real-world trade flows."
    },
    {
      question: "Who is eligible to invest?",
      answer: "Access is strictly limited to whitelisted institutional investors, including family offices, corporate treasuries, and asset managers. All participants must pass rigorous KYC/KYB checks."
    },
    {
      question: "What is the typical duration and yield?",
      answer: "The notes typically have a duration of 30 to 90 days, aligning with the maturity of the underlying trade invoices. Target yields generally range between 6% and 9% APR."
    },
    {
      question: "How are the assets protected?",
      answer: "Assets are held in bankruptcy-remote Special Purpose Vehicles (SPVs) in Singapore, providing a direct legal claim on the underlying trade receivables."
    },
    {
      question: "How is settlement handled?",
      answer: "We utilize stablecoins (e.g., USDC) for near-instantaneous settlement of both principal and yield upon asset maturity, bypassing the delays of traditional banking rails."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      <main className="container mx-auto px-4 md:px-8 py-16 space-y-24 md:space-y-32">
        
        {/* 1. Hero Section */}
        <section className="pt-10 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-200/30 via-blue-200/20 to-primary/20 rounded-3xl"></div>

          <div className="absolute inset-0 -z-20 opacity-60">
            <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300/30 rounded-full blur-2xl"></div>
            <div className="absolute top-20 right-20 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-20 w-28 h-28 bg-orange-300/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-36 h-36 bg-blue-300/30 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter max-w-5xl mx-auto leading-tight text-primary">
              Institutional Yield
              <br />
              <span className="block text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight">
                Backed by Real Trade
              </span>
            </h1>
            <p className="mt-6 text-2xl text-muted-foreground max-w-4xl mx-auto">
              Access short-duration, asset-backed yield derived from tokenized global trade receivables.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <Button size="lg" className="h-12 px-8 text-lg bg-accent hover:bg-accent/90 text-white">
                Request Institutional Access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-primary text-primary hover:bg-primary/10">
                Download Product Brief
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground font-medium">
              <span className="flex items-center">
                <Check className="w-4 h-4 mr-1 text-green-600" /> Singapore-based
              </span>
              <span className="flex items-center">
                <Check className="w-4 h-4 mr-1 text-green-600" /> MAS-compliant structure
              </span>
              <span className="flex items-center">
                <Check className="w-4 h-4 mr-1 text-green-600" /> Permissioned access only
              </span>
            </div>
          </div>
        </section>

        <Separator />

        {/* 2. Problem Statement */}
        <section id="problem" className="text-center">
          <SectionTitle>The Challenge of Institutional Fixed Income</SectionTitle>
          <SectionSubtitle>
            Traditional fixed income markets offer limited opportunities for short-duration, high-quality yield without taking on excessive duration or liquidity risk.
          </SectionSubtitle>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Low Yield Environment</h3>
              <ul className="space-y-3">
                <BulletPointCard>Bank deposits and short-term treasuries often fail to meet target returns.</BulletPointCard>
                <BulletPointCard>Inflation erodes real returns on conservative capital allocations.</BulletPointCard>
              </ul>
            </div>
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Duration & Liquidity Risk</h3>
              <ul className="space-y-3">
                <BulletPointCard>Achieving higher yield typically requires locking up capital for years.</BulletPointCard>
                <BulletPointCard>Private credit markets are opaque and lack standardized exit mechanisms.</BulletPointCard>
              </ul>
            </div>
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Inaccessible Trade Finance</h3>
              <ul className="space-y-3">
                <BulletPointCard>Trade finance is a robust asset class but historically reserved for large banks.</BulletPointCard>
                <BulletPointCard>High operational overhead prevents direct institutional participation.</BulletPointCard>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Solventis Solution Overview */}
        <section id="solution" className="text-center">
          <SectionTitle>Solventis: Tokenizing Institutional Trade Finance</SectionTitle>
          <SectionSubtitle>
            Solventis bridges institutional capital with high-quality, short-duration trade receivables using a compliant, permissioned tokenization framework.
          </SectionSubtitle>

          <div className="max-w-4xl mx-auto text-left space-y-6">
            <div className="p-6 border rounded-lg bg-primary/5">
              <h3 className="text-2xl font-semibold mb-3 text-primary">Core Positioning</h3>
              <p className="text-lg text-foreground">
                Solventis is a **permissioned platform** for institutional investors seeking stable, asset-backed yield. We provide structured access to the global trade finance market, minimizing operational friction through tokenization and stablecoin settlement.
              </p>
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section id="mechanism">
          <SectionTitle>Mechanism: A Structured Approach to RWA</SectionTitle>
          <SectionSubtitle>
            Our process ensures rigorous due diligence, legal clarity, and efficient settlement for every tokenized yield note.
          </SectionSubtitle>

          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "1. Asset Origination", description: "We source high-quality trade receivables from established corporate counterparties." },
              { title: "2. Due Diligence", description: "Assets are segregated into bankruptcy-remote SPVs in Singapore." },
              { title: "3. Note Issuance", description: "A digital security (Yield Note) is issued on a permissioned blockchain ledger." },
              { title: "4. Subscription", description: "Whitelisted institutions subscribe using stablecoins." },
              { title: "5. Settlement", description: "Principal and yield are automatically distributed back via stablecoin." },
            ].map((step, index) => (
              <div key={index} className="relative p-4 border rounded-lg bg-card shadow-md">
                <div className="text-3xl font-extrabold text-accent mb-2">{index + 1}</div>
                <h4 className="font-semibold text-lg mb-1 text-primary">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Product: Solventis Yield Notes */}
        <section id="product" className="text-center">
          <SectionTitle>Product Focus: Solventis Yield Notes</SectionTitle>
          <SectionSubtitle>
            A highly structured, short-duration product designed for treasury management.
          </SectionSubtitle>

          <div className="max-w-3xl mx-auto">
            <Table className="border rounded-lg overflow-hidden">
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-primary-foreground font-bold">Parameter</TableHead>
                  <TableHead className="text-primary-foreground font-bold">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-primary">Duration</TableCell>
                  <TableCell>30–90 days (short-term)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-primary">Yield (Target)</TableCell>
                  <TableCell>6–9% APR (Asset-backed)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-primary">Structure</TableCell>
                  <TableCell>Bankruptcy-remote SPV (Singapore)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* 6. Chart Section */}
        <section id="data" className="text-center">
          <SectionTitle>Data-Driven Allocation</SectionTitle>
          <DataCharts />
        </section>

        {/* 7. General FAQ Section (NEW) */}
        <section id="faq" className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-accent" />
          </div>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <SectionSubtitle>
            General inquiries regarding our platform, products, and investment process.
          </SectionSubtitle>

          <Accordion type="single" collapsible className="w-full text-left">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* 8. Call to Action */}
        <section className="text-center py-10">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Secure Your Access to Tokenized Trade Finance
          </h2>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="h-14 px-10 text-xl bg-primary hover:bg-primary/90 text-white">
              Request Institutional Access
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}