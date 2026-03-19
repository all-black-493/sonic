import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GenerationCountOrderByAggregateInputObjectSchema as GenerationCountOrderByAggregateInputObjectSchema } from './GenerationCountOrderByAggregateInput.schema';
import { GenerationAvgOrderByAggregateInputObjectSchema as GenerationAvgOrderByAggregateInputObjectSchema } from './GenerationAvgOrderByAggregateInput.schema';
import { GenerationMaxOrderByAggregateInputObjectSchema as GenerationMaxOrderByAggregateInputObjectSchema } from './GenerationMaxOrderByAggregateInput.schema';
import { GenerationMinOrderByAggregateInputObjectSchema as GenerationMinOrderByAggregateInputObjectSchema } from './GenerationMinOrderByAggregateInput.schema';
import { GenerationSumOrderByAggregateInputObjectSchema as GenerationSumOrderByAggregateInputObjectSchema } from './GenerationSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional(),
  voiceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  voiceName: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  r2ObjectKey: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  temperature: SortOrderSchema.optional(),
  topP: SortOrderSchema.optional(),
  topK: SortOrderSchema.optional(),
  repetitionPenalty: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => GenerationCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GenerationAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GenerationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GenerationMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GenerationSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GenerationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GenerationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationOrderByWithAggregationInput>;
export const GenerationOrderByWithAggregationInputObjectZodSchema = makeSchema();
