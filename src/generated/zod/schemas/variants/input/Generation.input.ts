import * as z from 'zod';
// prettier-ignore
export const GenerationInputSchema = z.object({
    id: z.string(),
    orgId: z.string(),
    voiceId: z.string().optional().nullable(),
    voice: z.unknown().optional().nullable(),
    voiceName: z.string(),
    text: z.string(),
    r2ObjectKey: z.string().optional().nullable(),
    temperature: z.number(),
    topP: z.number(),
    topK: z.number().int(),
    repetitionPenalty: z.number(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GenerationInputType = z.infer<typeof GenerationInputSchema>;
