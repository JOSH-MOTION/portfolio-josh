import React from 'react';
import { Card } from '@/components/ui/card';
import { skills } from '@/lib/data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <p className="text-lg text-muted-foreground mt-2">The tools and technologies I use to build things.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-card hover:shadow-lg hover:border-primary">
                <skill.icon className="h-10 w-10 text-primary mb-4" />
                <p className="font-semibold">{skill.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
