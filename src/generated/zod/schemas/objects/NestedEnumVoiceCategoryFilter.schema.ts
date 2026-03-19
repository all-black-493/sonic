import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceCategorySchema } from '../enums/VoiceCategory.schema'

const nestedenumvoicecategoryfilterSchema = z.object({
  equals: VoiceCategorySchema.optional(),
  in: VoiceCategorySchema.array().optional(),
  notIn: VoiceCategorySchema.array().optional(),
  not: z.union([VoiceCategorySchema, z.lazy(() => NestedEnumVoiceCategoryFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumVoiceCategoryFilterObjectSchema: z.ZodType<Prisma.NestedEnumVoiceCategoryFilter> = nestedenumvoicecategoryfilterSchema as unknown as z.ZodType<Prisma.NestedEnumVoiceCategoryFilter>;
export const NestedEnumVoiceCategoryFilterObjectZodSchema = nestedenumvoicecategoryfilterSchema;
