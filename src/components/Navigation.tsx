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
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
          Solventis
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