"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Sparkles, BrainCircuit } from 'lucide-react';
import { suggestPortfolioImprovements } from '@/ai/flows/suggest-portfolio-improvements';
import type { SuggestPortfolioImprovementsOutput } from '@/ai/flows/suggest-portfolio-improvements';
import { Skeleton } from './ui/skeleton';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';


const enhancerSchema = z.object({
  portfolioDescription: z.string().min(20, "Please provide a description of at least 20 characters."),
  projectWriteups: z.string().min(20, "Please provide project write-ups of at least 20 characters."),
});

type EnhancerInputs = z.infer<typeof enhancerSchema>;

const AiEnhancer = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SuggestPortfolioImprovementsOutput | null>(null);

  const form = useForm<EnhancerInputs>({
    resolver: zodResolver(enhancerSchema),
    defaultValues: {
      portfolioDescription: "",
      projectWriteups: "",
    }
  });

  const onSubmit: SubmitHandler<EnhancerInputs> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const projectWriteupsArray = data.projectWriteups.split('\n').filter(line => line.trim() !== '');
      const aiResult = await suggestPortfolioImprovements({
        portfolioDescription: data.portfolioDescription,
        projectWriteups: projectWriteupsArray,
      });
      setResult(aiResult);
    } catch (error) {
      console.error("AI enhancement failed:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem with the AI suggestion. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const ResultDisplay = () => (
    <div className="mt-8 space-y-6">
        <h3 className="text-2xl font-headline font-semibold flex items-center gap-2"><Sparkles className="text-accent" /> AI Suggestions</h3>
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Improved Portfolio Description</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-foreground whitespace-pre-wrap">{result?.improvedPortfolioDescription}</p>
            </CardContent>
        </Card>
        <div className="space-y-4">
            <h4 className="font-headline text-xl font-semibold">Improved Project Write-ups</h4>
            {result?.improvedProjectWriteups.map((writeup, index) => (
                <Card key={index}>
                    <CardContent className="pt-6">
                        <p className="text-foreground whitespace-pre-wrap">{writeup}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  );

  const LoadingSkeleton = () => (
    <div className="mt-8 space-y-6">
        <h3 className="text-2xl font-headline font-semibold flex items-center gap-2"><Sparkles className="text-accent animate-pulse" /> Generating Suggestions...</h3>
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Improved Portfolio Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
            </CardContent>
        </Card>
         <div className="space-y-4">
            <h4 className="font-headline text-xl font-semibold">Improved Project Write-ups</h4>
            <Card>
                <CardContent className="pt-6 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </CardContent>
            </Card>
             <Card>
                <CardContent className="pt-6 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </CardContent>
            </Card>
        </div>
    </div>
  )

  return (
    <section id="ai-enhancer" className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <BrainCircuit className="h-10 w-10 text-primary" />
            </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">AI-Powered Content Enhancer</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Not sure how to word your portfolio? Paste your descriptions below and let AI suggest improvements to make your profile stand out.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="font-headline">Enhance Your Content</CardTitle>
                <CardDescription>
                    Enter your current portfolio summary and project descriptions (one per line).
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="portfolioDescription" render={({ field }) => (
                      <FormItem>
                          <FormLabel>Portfolio Description</FormLabel>
                          <FormControl>
                              <Textarea placeholder="e.g., A software developer with 5 years of experience..." rows={4} {...field} />
                          </FormControl>
                          <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="projectWriteups" render={({ field }) => (
                      <FormItem>
                          <FormLabel>Project Write-ups (one per line)</FormLabel>
                          <FormControl>
                              <Textarea placeholder="e.g., Project A - a cool app that does cool things..." rows={6} {...field} />
                          </FormControl>
                          <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" disabled={isLoading} className="w-full">
                        <Wand2 className="mr-2 h-4 w-4" />
                        {isLoading ? 'Thinking...' : 'Enhance with AI'}
                    </Button>
                </form>
                </Form>
            </CardContent>
        </Card>

        {isLoading && <LoadingSkeleton />}
        {result && <ResultDisplay />}

      </div>
    </section>
  );
};

export default AiEnhancer;
