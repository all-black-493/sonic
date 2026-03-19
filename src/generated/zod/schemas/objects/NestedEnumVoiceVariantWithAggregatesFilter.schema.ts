import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceVariantSchema } from '../enums/VoiceVariant.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumVoiceVariantFilterObjectSchema as NestedEnumVoiceVariantFilterObjectSchema } from './NestedEnumVoiceVariantFilter.schema'

const nestedenumvoicevariantwithaggregatesfilterSchema = z.object({
  equals: VoiceVariantSchema.optional(),
  in: VoiceVariantSchema.array().optional(),
  notIn: VoiceVariantSchema.array().optional(),
  not: z.union([VoiceVariantSchema, z.lazy(() => NestedEnumVoiceVariantWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumVoiceVariantFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumVoiceVariantFilterObjectSchema).optional()
}).strict();
export const NestedEnumVoiceVariantWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumVoiceVariantWithAggregatesFilter> = nestedenumvoicevariantwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumVoiceVariantWithAggregatesFilter>;
export const NestedEnumVoiceVariantWithAggregatesFilterObjectZodSchema = nestedenumvoicevariantwithaggregatesfilterSchema;
