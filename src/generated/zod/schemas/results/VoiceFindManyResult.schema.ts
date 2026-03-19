import * as z from 'zod';
export const VoiceFindManyResultSchema = z.object({
  data: z.array(z.object({
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