import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceCategorySchema } from '../enums/VoiceCategory.schema';
import { NestedEnumVoiceCategoryWithAggregatesFilterObjectSchema as NestedEnumVoiceCategoryWithAggregatesFilterObjectSchema } from './NestedEnumVoiceCategoryWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumVoiceCategoryFilterObjectSchema as NestedEnumVoiceCategoryFilterObjectSchema } from './NestedEnumVoiceCategoryFilter.schema'

const makeSchema = () => z.object({
  equals: VoiceCategorySchema.optional(),
  in: VoiceCategorySchema.array().optional(),
  notIn: VoiceCategorySchema.array().optional(),
  not: z.union([VoiceCategorySchema, z.lazy(() => NestedEnumVoiceCategoryWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumVoiceCategoryFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumVoiceCategoryFilterObjectSchema).optional()
}).strict();
export const EnumVoiceCategoryWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumVoiceCategoryWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumVoiceCategoryWithAggregatesFilter>;
export const EnumVoiceCategoryWithAggregatesFilterObjectZodSchema = makeSchema();
