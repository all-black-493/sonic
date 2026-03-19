import * as z from 'zod';
export const GenerationFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});