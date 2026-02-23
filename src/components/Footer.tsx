"use client";

import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="w-48 h-16 mb-6">
              <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <text x="10" y="55" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="white">
                  SOLVENTIS
                </text>
                <path d="M5 65H195" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              Bridging institutional capital with high-quality, short-duration trade receivables through a compliant tokenization framework.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><Link href="/#product" className="hover:text-white transition-colors">Product Brief</Link></li>
              <li><Link href="/regulatory-framework" className="hover:text-white transition-colors font-semibold text-white">Regulatory Framework</Link></li>
              <li><Link href="/compliance" className="hover:text-white transition-colors">Compliance Hub</Link></li>
              <li><Link href="/#mechanism" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="/#data" className="hover:text-white transition-colors">Data & Yield</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><button className="hover:text-white transition-colors text-left">Contact Us</button></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-primary-foreground/50 flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Solventis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}