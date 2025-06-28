import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import AiEnhancer from '@/components/ai-enhancer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <AiEnhancer />
        <Contact />
      </main>
      <footer className="w-full bg-secondary py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} JOSHDEV. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
