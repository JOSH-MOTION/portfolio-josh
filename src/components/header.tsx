"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = '';
      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 150) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-headline">JOSHDEV</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted-foreground'
            )}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 pt-10">
                <SheetClose asChild>
                  <Link href="/" className="flex items-center gap-2 mb-4">
                    <Code className="h-8 w-8 text-primary" />
                    <span className="text-2xl font-bold font-headline">JOSHDEV</span>
                  </Link>
                </SheetClose>
                {navLinks.map(link => (
                  <SheetClose asChild key={link.name}>
                    <Link href={link.href} className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground'
                    )}>
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
