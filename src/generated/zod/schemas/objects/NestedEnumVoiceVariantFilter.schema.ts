import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceVariantSchema } from '../enums/VoiceVariant.schema'

const nestedenumvoicevariantfilterSchema = z.object({
  equals: VoiceVariantSchema.optional(),
  in: VoiceVariantSchema.array().optional(),
  notIn: VoiceVariantSchema.array().optional(),
  not: z.union([VoiceVariantSchema, z.lazy(() => NestedEnumVoiceVariantFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumVoiceVariantFilterObjectSchema: z.ZodType<Prisma.NestedEnumVoiceVariantFilter> = nestedenumvoicevariantfilterSchema as unknown as z.ZodType<Prisma.NestedEnumVoiceVariantFilter>;
export const NestedEnumVoiceVariantFilterObjectZodSchema = nestedenumvoicevariantfilterSchema;
