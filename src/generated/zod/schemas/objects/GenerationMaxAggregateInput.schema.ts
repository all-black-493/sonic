import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  orgId: z.literal(true).optional(),
  voiceId: z.literal(true).optional(),
  voiceName: z.literal(true).optional(),
  text: z.literal(true).optional(),
  r2ObjectKey: z.literal(true).optional(),
  temperature: z.literal(true).optional(),
  topP: z.literal(true).optional(),
  topK: z.literal(true).optional(),
  repetitionPenalty: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const GenerationMaxAggregateInputObjectSchema: z.ZodType<Prisma.GenerationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GenerationMaxAggregateInputType>;
export const GenerationMaxAggregateInputObjectZodSchema = makeSchema();
