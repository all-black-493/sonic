import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  temperature: z.literal(true).optional(),
  topP: z.literal(true).optional(),
  topK: z.literal(true).optional(),
  repetitionPenalty: z.literal(true).optional()
}).strict();
export const GenerationAvgAggregateInputObjectSchema: z.ZodType<Prisma.GenerationAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GenerationAvgAggregateInputType>;
export const GenerationAvgAggregateInputObjectZodSchema = makeSchema();
