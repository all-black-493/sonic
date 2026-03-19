import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  language: SortOrderSchema.optional(),
  variant: SortOrderSchema.optional(),
  r2ObjectKey: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const VoiceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VoiceCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoiceCountOrderByAggregateInput>;
export const VoiceCountOrderByAggregateInputObjectZodSchema = makeSchema();
