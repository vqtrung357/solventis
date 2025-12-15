"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { title: "Challenge", href: "#problem" },
  { title: "Solution", href: "#solution" },
  { title: "Mechanism", href: "#mechanism" },
  { title: "Product", href: "#product" },
  { title: "Data", href: "#data" },
  { title: "Compliance", href: "#compliance" },
  { title: "Singapore", href: "#singapore" },
  { title: "Technology", href: "#technology" },
  { title: "Stablecoin", href: "#stablecoin" },
  { title: "Clients", href: "#clients" },
];

export function Navigation() {
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
      {navItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );

  const MobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="flex flex-col space-y-4 pt-6">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-lg font-semibold text-primary hover:text-accent"
            >
              {item.title}
            </Link>
          ))}
          <div className="pt-4">
            <Button className="w-full bg-primary hover:bg-primary/90">
              Request Institutional Access
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center">
          <div className="w-40 h-16 text-primary">
            <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <text x="10" y="55" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="currentColor">
                SOLVENTIS
              </text>
              <path d="M5 65H195" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <NavLinks />
          <Button variant="default" className="bg-primary hover:bg-primary/90 hidden lg:inline-flex">
            Request Institutional Access
          </Button>
          {isMobile !== undefined && <MobileMenu />}
        </div>
      </div>
    </header>
  );
}