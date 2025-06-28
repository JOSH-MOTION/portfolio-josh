// src/ai/flows/suggest-portfolio-improvements.ts
'use server';

/**
 * @fileOverview Provides AI-powered suggestions for improving portfolio descriptions and project write-ups.
 *
 * - suggestPortfolioImprovements - A function that suggests improvements to portfolio content.
 * - SuggestPortfolioImprovementsInput - The input type for the suggestPortfolioImprovements function.
 * - SuggestPortfolioImprovementsOutput - The return type for the suggestPortfolioImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPortfolioImprovementsInputSchema = z.object({
  portfolioDescription: z
    .string()
    .describe('The current description of the portfolio.'),
  projectWriteups: z
    .array(z.string())
    .describe('An array of project write-ups to improve.'),
});
export type SuggestPortfolioImprovementsInput = z.infer<
  typeof SuggestPortfolioImprovementsInputSchema
>;

const SuggestPortfolioImprovementsOutputSchema = z.object({
  improvedPortfolioDescription: z
    .string()
    .describe('The improved portfolio description.'),
  improvedProjectWriteups: z
    .array(z.string())
    .describe('An array of improved project write-ups.'),
});
export type SuggestPortfolioImprovementsOutput = z.infer<
  typeof SuggestPortfolioImprovementsOutputSchema
>;

export async function suggestPortfolioImprovements(
  input: SuggestPortfolioImprovementsInput
): Promise<SuggestPortfolioImprovementsOutput> {
  return suggestPortfolioImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPortfolioImprovementsPrompt',
  input: {schema: SuggestPortfolioImprovementsInputSchema},
  output: {schema: SuggestPortfolioImprovementsOutputSchema},
  prompt: `You are an AI portfolio enhancement expert. Your goal is to improve the appeal and clarity of a user's portfolio.

  Here is the user's current portfolio description:
  {{portfolioDescription}}

  Here are the user's project write-ups:
  {{#each projectWriteups}}- {{{this}}}
  {{/each}}

  Please provide an improved portfolio description and improved project write-ups, focusing on clarity, impact, and appeal. Ensure the improved content is engaging and highlights the user's key skills and accomplishments.

  The improved portfolio description should be:
  The improved project write-ups should be:
`,
});

const suggestPortfolioImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestPortfolioImprovementsFlow',
    inputSchema: SuggestPortfolioImprovementsInputSchema,
    outputSchema: SuggestPortfolioImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
