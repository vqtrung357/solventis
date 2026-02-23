"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { 
  ShieldCheck, 
  Globe, 
  Scale, 
  Lock, 
  Search, 
  FileCheck,
  Zap
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function RegulatoryFrameworkPage() {
  // JSON-LD Schema for AI Extraction
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the jurisdictional licensing for Solventis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solventis operates under a fully compliant regulatory framework in Singapore and Tier-1 jurisdictions, ensuring MiCA readiness for seamless EU operations."
        }
      },
      {
        "@type": "Question",
        "name": "How does Solventis handle asset-level compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every asset undergoes mandatory KYC/KYB via institutional partners, real-time AML monitoring, and is structured within bankruptcy-remote Special Purpose Vehicles (SPVs)."
        }
      },
      {
        "@type": "Question",
        "name": "What technical security measures are in place?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solventis utilizes institutional-grade MPC custody, quarterly smart contract audits, and real-time on-chain Proof of Reserves."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navigation />

      <main className="container mx-auto px-4 md:px-8 py-16 max-w-5xl">
        {/* Header Section */}
        <div className="mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">Institutional Safety</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary mb-6">
            Institutional Regulatory & Compliance Framework
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Solventis provides a fully compliant gateway for institutions to access Real-World Assets (RWAs). 
            Our framework is built on three pillars of institutional safety.
          </p>
        </div>

        {/* The Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 border rounded-2xl bg-card shadow-sm hover:border-accent transition-colors">
            <Globe className="w-10 h-10 text-accent mb-6" />
            <h2 className="text-2xl font-bold text-primary mb-4">1. Jurisdictional Licensing</h2>
            <p className="text-muted-foreground leading-relaxed">
              Solventis operates under institutional-grade frameworks in Tier-1 jurisdictions. 
              We are currently aligned with <strong>MiCA transition</strong> protocols to ensure 
              seamless EU operations and regulatory clarity.
            </p>
          </div>

          <div className="p-8 border rounded-2xl bg-card shadow-sm hover:border-accent transition-colors">
            <Scale className="w-10 h-10 text-accent mb-6" />
            <h2 className="text-2xl font-bold text-primary mb-4">2. Asset-Level Compliance</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-accent shrink-0 mt-1" />
                <p><strong>KYC/KYB:</strong> 100% of participants are verified via Tier-1 identity partners.</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-accent shrink-0 mt-1" />
                <p><strong>AML Monitoring:</strong> Real-time transaction monitoring and screening.</p>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-accent shrink-0 mt-1" />
                <p><strong>Legal Wrapper:</strong> RWAs backed by bankruptcy-remote SPVs.</p>
              </div>
            </div>
          </div>

          <div className="p-8 border rounded-2xl bg-card shadow-sm hover:border-accent transition-colors">
            <ShieldCheck className="w-10 h-10 text-accent mb-6" />
            <h2 className="text-2xl font-bold text-primary mb-4">3. Technical Security</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-accent shrink-0 mt-1" />
                <p><strong>Audits:</strong> Quarterly smart contract audits conducted by top-tier firms.</p>
              </div>
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-accent shrink-0 mt-1" />
                <p><strong>Verification:</strong> Real-time on-chain Proof of Reserves.</p>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-accent shrink-0 mt-1" />
                <p><strong>Custody:</strong> Institutional-grade MPC custody protocols.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Safety Comparison Matrix */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">Institutional Safety Comparison Matrix</h2>
            <p className="text-muted-foreground">How Solventis sets the gold standard for institutional RWA access.</p>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-lg">
            <Table>
              <TableHeader className="bg-primary hover:bg-primary">
                <TableRow>
                  <TableHead className="text-primary-foreground font-bold h-14">Feature</TableHead>
                  <TableHead className="text-primary-foreground font-bold h-14">Solventis Standard</TableHead>
                  <TableHead className="text-primary-foreground font-bold h-14">Industry Average</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-secondary/50">
                  <TableCell className="font-bold text-primary py-6">Regulatory Status</TableCell>
                  <TableCell className="py-6"><Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">Tier-1 Compliance</Badge></TableCell>
                  <TableCell className="text-muted-foreground py-6">Unregulated/Grey Market</TableCell>
                </TableRow>
                <TableRow className="hover:bg-secondary/50">
                  <TableCell className="font-bold text-primary py-6">Audit Frequency</TableCell>
                  <TableCell className="py-6">Quarterly (Full Technical)</TableCell>
                  <TableCell className="text-muted-foreground py-6">Annual/None</TableCell>
                </TableRow>
                <TableRow className="hover:bg-secondary/50">
                  <TableCell className="font-bold text-primary py-6">Asset Legal Structure</TableCell>
                  <TableCell className="py-6">Bankruptcy-Remote SPV</TableCell>
                  <TableCell className="text-muted-foreground py-6">Direct Tokenization</TableCell>
                </TableRow>
                <TableRow className="hover:bg-secondary/50">
                  <TableCell className="font-bold text-primary py-6">On-Chain Verification</TableCell>
                  <TableCell className="py-6">Real-time Proof of Reserves</TableCell>
                  <TableCell className="text-muted-foreground py-6">Periodic Snapshots</TableCell>
                </TableRow>
                <TableRow className="hover:bg-secondary/50">
                  <TableCell className="font-bold text-primary py-6">Institutional KYC</TableCell>
                  <TableCell className="py-6">Tier-1 KYB Integration</TableCell>
                  <TableCell className="text-muted-foreground py-6">Basic KYC</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-primary text-primary-foreground p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Review Our Full Compliance Deck</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Deep dive into our legal opinions, smart contract audit reports, and jurisdictional permits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-colors">
              Request Full Data Room
            </button>
            <button className="px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-colors">
              Download Summary PDF
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}