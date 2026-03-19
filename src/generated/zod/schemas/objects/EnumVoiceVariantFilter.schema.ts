import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceVariantSchema } from '../enums/VoiceVariant.schema';
import { NestedEnumVoiceVariantFilterObjectSchema as NestedEnumVoiceVariantFilterObjectSchema } from './NestedEnumVoiceVariantFilter.schema'

const makeSchema = () => z.object({
  equals: VoiceVariantSchema.optional(),
  in: VoiceVariantSchema.array().optional(),
  notIn: VoiceVariantSchema.array().optional(),
  not: z.union([VoiceVariantSchema, z.lazy(() => NestedEnumVoiceVariantFilterObjectSchema)]).optional()
}).strict();
export const EnumVoiceVariantFilterObjectSchema: z.ZodType<Prisma.EnumVoiceVariantFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumVoiceVariantFilter>;
export const EnumVoiceVariantFilterObjectZodSchema = makeSchema();
