import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceCategorySchema } from '../enums/VoiceCategory.schema';
import { NestedEnumVoiceCategoryFilterObjectSchema as NestedEnumVoiceCategoryFilterObjectSchema } from './NestedEnumVoiceCategoryFilter.schema'

const makeSchema = () => z.object({
  equals: VoiceCategorySchema.optional(),
  in: VoiceCategorySchema.array().optional(),
  notIn: VoiceCategorySchema.array().optional(),
  not: z.union([VoiceCategorySchema, z.lazy(() => NestedEnumVoiceCategoryFilterObjectSchema)]).optional()
}).strict();
export const EnumVoiceCategoryFilterObjectSchema: z.ZodType<Prisma.EnumVoiceCategoryFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumVoiceCategoryFilter>;
export const EnumVoiceCategoryFilterObjectZodSchema = makeSchema();
