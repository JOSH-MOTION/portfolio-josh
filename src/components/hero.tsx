// components/Hero.jsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { socialLinks } from '@/lib/data';

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 px-4">
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight text-primary">
            Crafting Digital Experiences
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            I'm Josh, a full-stack developer specializing in building modern, responsive, and user-friendly web applications. Welcome to my creative space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
          <div className="flex gap-2 mt-6">
            {socialLinks.map((link) => (
              <Button
                asChild
                variant="ghost"
                size="icon"
                key={link.name}
                className="hover:bg-accent"
              >
                <Link href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5 text-muted-foreground" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="hidden md:flex justify-center relative">
          <Avatar className="w-80 h-80 border-8 border-primary shadow-2xl relative overflow-hidden">
            <AvatarImage className="object-cover w-full h-full" src="/images/me.jpg" alt="Josh" />
            <AvatarFallback className="text-4xl">JD</AvatarFallback>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-secondary to-transparent" />
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default Hero;