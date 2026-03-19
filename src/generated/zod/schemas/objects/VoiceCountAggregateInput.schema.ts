import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  orgId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  category: z.literal(true).optional(),
  language: z.literal(true).optional(),
  variant: z.literal(true).optional(),
  r2ObjectKey: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const VoiceCountAggregateInputObjectSchema: z.ZodType<Prisma.VoiceCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VoiceCountAggregateInputType>;
export const VoiceCountAggregateInputObjectZodSchema = makeSchema();
