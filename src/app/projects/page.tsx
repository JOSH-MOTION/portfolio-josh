import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';

export default function AllProjectsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        <section id="all-projects" className="py-20 md:py-28">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl font-bold">All Projects</h1>
              <p className="text-lg text-muted-foreground mt-2">Here's a complete list of my work.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-2 duration-300">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      data-ai-hint={project.aiHint}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                     <div className="flex justify-between mt-auto">
                      <Button asChild variant="outline">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                      </Button>
                      <Button asChild variant="ghost">
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Source
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-secondary py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} JOSHDEV. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
