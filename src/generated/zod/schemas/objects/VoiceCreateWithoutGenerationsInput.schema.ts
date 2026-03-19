import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceCategorySchema } from '../enums/VoiceCategory.schema';
import { VoiceVariantSchema } from '../enums/VoiceVariant.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  orgId: z.string().optional().nullable(),
  name: z.string(),
  description: z.string().optional().nullable(),
  category: VoiceCategorySchema.optional(),
  language: z.string().optional(),
  variant: VoiceVariantSchema,
  r2ObjectKey: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const VoiceCreateWithoutGenerationsInputObjectSchema: z.ZodType<Prisma.VoiceCreateWithoutGenerationsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoiceCreateWithoutGenerationsInput>;
export const VoiceCreateWithoutGenerationsInputObjectZodSchema = makeSchema();
