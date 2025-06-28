import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { experiences } from '@/lib/data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">My Journey</h2>
          <p className="text-lg text-muted-foreground mt-2">A timeline of my career and education.</p>
        </div>
        <div className="relative pl-8 after:absolute after:inset-y-0 after:w-px after:bg-border after:left-4">
          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute top-2 -left-1.5 h-6 w-6 bg-primary rounded-full flex items-center justify-center ring-8 ring-background">
                    <exp.icon className="h-3 w-3 text-primary-foreground" />
                </div>
                <Card className="ml-6">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.company} &bull; {exp.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
