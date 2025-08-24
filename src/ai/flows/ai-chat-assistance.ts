'use server';

/**
 * @fileOverview An AI-powered chat interface that generates mock responses based on the content of a selected web design category or component.
 *
 * - aiChatAssistance - A function that handles the AI chat assistance process.
 * - AiChatAssistanceInput - The input type for the aiChatAssistance function.
 * - AiChatAssistanceOutput - The return type for the aiChatAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiChatAssistanceInputSchema = z.object({
  category: z.string().describe('The web design category or component.'),
  message: z.string().describe('The user message to the AI.'),
});
export type AiChatAssistanceInput = z.infer<typeof AiChatAssistanceInputSchema>;

const AiChatAssistanceOutputSchema = z.object({
  response: z.string().describe('The AI response based on the category or component.'),
});
export type AiChatAssistanceOutput = z.infer<typeof AiChatAssistanceOutputSchema>;

export async function aiChatAssistance(input: AiChatAssistanceInput): Promise<AiChatAssistanceOutput> {
  return aiChatAssistanceFlow(input);
}

const aiChatAssistancePrompt = ai.definePrompt({
  name: 'aiChatAssistancePrompt',
  input: {schema: AiChatAssistanceInputSchema},
  output: {schema: AiChatAssistanceOutputSchema},
  prompt: `You are a web design assistant. Your job is to provide mock responses based on the web design category or component provided.

Category or Component: {{{category}}}
User Message: {{{message}}}

Response:`,
});

const aiChatAssistanceFlow = ai.defineFlow(
  {
    name: 'aiChatAssistanceFlow',
    inputSchema: AiChatAssistanceInputSchema,
    outputSchema: AiChatAssistanceOutputSchema,
  },
  async input => {
    const {output} = await aiChatAssistancePrompt(input);
    return output!;
  }
);
