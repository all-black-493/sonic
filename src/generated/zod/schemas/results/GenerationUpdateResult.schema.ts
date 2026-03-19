import * as z from 'zod';
export const GenerationUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  orgId: z.string(),
  voiceId: z.string().optional(),
  voice: z.unknown().optional(),
  voiceName: z.string(),
  text: z.string(),
  r2ObjectKey: z.string().optional(),
  temperature: z.number(),
  topP: z.number(),
  topK: z.number().int(),
  repetitionPenalty: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
}));