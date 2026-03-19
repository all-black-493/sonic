import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const GenerationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.GenerationOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationOrderByRelationAggregateInput>;
export const GenerationOrderByRelationAggregateInputObjectZodSchema = makeSchema();
