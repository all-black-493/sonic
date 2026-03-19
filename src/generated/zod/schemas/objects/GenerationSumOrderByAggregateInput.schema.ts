import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  temperature: SortOrderSchema.optional(),
  topP: SortOrderSchema.optional(),
  topK: SortOrderSchema.optional(),
  repetitionPenalty: SortOrderSchema.optional()
}).strict();
export const GenerationSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GenerationSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationSumOrderByAggregateInput>;
export const GenerationSumOrderByAggregateInputObjectZodSchema = makeSchema();
