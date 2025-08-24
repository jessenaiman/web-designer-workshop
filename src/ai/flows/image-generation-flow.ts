'use server';

/**
 * @fileOverview AI flows for generating and refining images.
 *
 * - generateImage - A function that generates an image based on a prompt and aspect ratio.
 * - GenerateImageInput - The input type for the generateImage function.
 * - GenerateImageOutput - The return type for the generateImage function.
 * - refineImagePrompt - A function that refines an image prompt.
 * - RefineImagePromptInput - The input type for the refineImagePrompt function.
 * - RefineImagePromptOutput - The return type for the refineImagePrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Schema for generating an image
const GenerateImageInputSchema = z.object({
  prompt: z.string().describe('The prompt to use to generate the image.'),
  aspectRatio: z.string().describe('The aspect ratio of the image to generate.'),
});
export type GenerateImageInput = z.infer<typeof GenerateImageInputSchema>;

const GenerateImageOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated image.'),
});
export type GenerateImageOutput = z.infer<typeof GenerateImageOutputSchema>;

// Schema for refining an image prompt
const RefineImagePromptInputSchema = z.object({
    prompt: z.string().describe("The user's initial prompt to refine."),
});
export type RefineImagePromptInput = z.infer<typeof RefineImagePromptInputSchema>;

const RefineImagePromptOutputSchema = z.object({
    refinedPrompt: z.string().describe("The AI-refined, more detailed prompt."),
});
export type RefineImagePromptOutput = z.infer<typeof RefineImagePromptOutputSchema>;


export async function generateImage(input: GenerateImageInput): Promise<GenerateImageOutput> {
  return generateImageFlow(input);
}

export async function refineImagePrompt(input: RefineImagePromptInput): Promise<RefineImagePromptOutput> {
    return refineImagePromptFlow(input);
}

const generateImageFlow = ai.defineFlow(
  {
    name: 'generateImageFlow',
    inputSchema: GenerateImageInputSchema,
    outputSchema: GenerateImageOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: input.prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
        // Note: The model does not directly support aspect ratio,
        // so we can't pass it here. The front-end will handle displaying it correctly.
      },
    });
    
    if (!media.url) {
        throw new Error("No image was generated.");
    }

    return { imageUrl: media.url };
  }
);


const refineImagePromptFlow = ai.defineFlow(
  {
    name: 'refineImagePromptFlow',
    inputSchema: RefineImagePromptInputSchema,
    outputSchema: RefineImagePromptOutputSchema,
  },
  async (input) => {
    const { text } = await ai.generate({
        prompt: `You are an expert prompt engineer for text-to-image models. 
        Your task is to take a user's simple prompt and expand it into a more detailed, vivid, and descriptive prompt that will generate a higher quality and more interesting image.
        
        Original prompt: "${input.prompt}"
        
        Refined prompt:`,
    });

    return { refinedPrompt: text };
  }
);
