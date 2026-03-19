import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional(),
  voiceId: SortOrderSchema.optional(),
  voiceName: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  r2ObjectKey: SortOrderSchema.optional(),
  temperature: SortOrderSchema.optional(),
  topP: SortOrderSchema.optional(),
  topK: SortOrderSchema.optional(),
  repetitionPenalty: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GenerationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GenerationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationMaxOrderByAggregateInput>;
export const GenerationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
