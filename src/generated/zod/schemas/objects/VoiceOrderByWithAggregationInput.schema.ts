import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { VoiceCountOrderByAggregateInputObjectSchema as VoiceCountOrderByAggregateInputObjectSchema } from './VoiceCountOrderByAggregateInput.schema';
import { VoiceMaxOrderByAggregateInputObjectSchema as VoiceMaxOrderByAggregateInputObjectSchema } from './VoiceMaxOrderByAggregateInput.schema';
import { VoiceMinOrderByAggregateInputObjectSchema as VoiceMinOrderByAggregateInputObjectSchema } from './VoiceMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orgId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  category: SortOrderSchema.optional(),
  language: SortOrderSchema.optional(),
  variant: SortOrderSchema.optional(),
  r2ObjectKey: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => VoiceCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => VoiceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => VoiceMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VoiceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.VoiceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.VoiceOrderByWithAggregationInput>;
export const VoiceOrderByWithAggregationInputObjectZodSchema = makeSchema();
