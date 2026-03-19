import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GenerationOrderByRelationAggregateInputObjectSchema as GenerationOrderByRelationAggregateInputObjectSchema } from './GenerationOrderByRelationAggregateInput.schema'

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
  generations: z.lazy(() => GenerationOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const VoiceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.VoiceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.VoiceOrderByWithRelationInput>;
export const VoiceOrderByWithRelationInputObjectZodSchema = makeSchema();
