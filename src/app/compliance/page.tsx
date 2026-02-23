"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { Shield, Scale, ClipboardCheck, FileText, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">
              Institutional Regulatory Framework
            </h1>
            <p className="text-xl text-muted-foreground">
              A robust legal and compliance infrastructure designed for institutional safety and regulatory clarity.
            </p>
          </div>

          <Separator className="my-12" />

          {/* Section 1: Regulatory Oversight & Jurisdictions */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Scale className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold text-primary">Regulatory Oversight & Jurisdictions</h2>
            </div>
            
            <div className="grid gap-6">
              <div className="p-6 border rounded-xl bg-card shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Entity Structure</h3>
                    <p className="text-muted-foreground">
                      Bankruptcy-remote Special Purpose Vehicles (SPVs) are utilized for each issuance to ensure asset isolation and investor protection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-xl bg-card shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Primary Jurisdiction</h3>
                    <p className="text-muted-foreground">
                      Operating primarily under the legal frameworks of Singapore, Luxembourg, and other Tier-1 institutional jurisdictions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-xl bg-card shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Compliance Standards</h3>
                    <p className="text-muted-foreground">
                      Full KYC/AML/CFT integration and continuous monitoring to meet global institutional standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Institutional Safeguards */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold text-primary">Institutional Safeguards</h2>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              <div className="space-y-8">
                <div className="flex gap-4 p-6 border-l-4 border-l-accent bg-secondary/20 rounded-r-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-bold text-accent">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Asset Segregation</h3>
                    <p className="text-muted-foreground">
                      1:1 backing of all RWAs with audited on-chain proof. Every token represents a direct claim on a specific, ring-fenced trade receivable asset.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 border-l-4 border-l-accent bg-secondary/20 rounded-r-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-bold text-accent">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Investor Protection</h3>
                    <p className="text-muted-foreground">
                      Legal recourse frameworks established under relevant jurisdictional laws, providing institutional investors with enforceable claims against underlying assets.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 border-l-4 border-l-accent bg-secondary/20 rounded-r-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-bold text-accent">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Audit Cadence</h3>
                    <p className="text-muted-foreground">
                      Monthly smart contract and reserve audits conducted by reputable third-party firms to ensure transparency and integrity of the platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="p-8 border rounded-2xl bg-primary/5 text-center">
            <ClipboardCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-2">Ready for Onboarding?</h3>
            <p className="text-muted-foreground mb-6">
              Our compliance team is ready to assist with institutional onboarding and due diligence requests.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                Contact Compliance
              </button>
              <button className="px-6 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors">
                Download Legal Pack
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}