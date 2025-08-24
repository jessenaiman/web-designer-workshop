'use server';

/**
 * @fileOverview A component customizer AI agent.
 *
 * - customizeComponent - A function that handles the component customization process.
 * - CustomizeComponentInput - The input type for the customizeComponent function.
 * - CustomizeComponentOutput - The return type for the customizeComponent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomizeComponentInputSchema = z.object({
  componentName: z.string().describe('The name of the component to customize.'),
  prompt: z.string().describe('The prompt to use to customize the component.'),
});
export type CustomizeComponentInput = z.infer<typeof CustomizeComponentInputSchema>;

const CustomizeComponentOutputSchema = z.object({
  customizedComponent: z
    .string()
    .describe('The customized component, as a React component.'),
});
export type CustomizeComponentOutput = z.infer<typeof CustomizeComponentOutputSchema>;

export async function customizeComponent(input: CustomizeComponentInput): Promise<CustomizeComponentOutput> {
  return customizeComponentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'customizeComponentPrompt',
  input: {schema: CustomizeComponentInputSchema},
  output: {schema: CustomizeComponentOutputSchema},
  prompt: `You are an expert web developer specializing in customizing React components.

You will use the prompt to customize the component, and return the customized component as a React component.

Component Name: {{{componentName}}}
Prompt: {{{prompt}}}

Return the customized component as a React component.`,
});

const customizeComponentFlow = ai.defineFlow(
  {
    name: 'customizeComponentFlow',
    inputSchema: CustomizeComponentInputSchema,
    outputSchema: CustomizeComponentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
