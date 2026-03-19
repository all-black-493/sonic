import * as z from 'zod';
export const VoiceUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  orgId: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  category: z.unknown(),
  language: z.string(),
  variant: z.unknown(),
  r2ObjectKey: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  generations: z.array(z.unknown())
}));