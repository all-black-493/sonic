import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceCategorySchema } from '../enums/VoiceCategory.schema';
import { VoiceVariantSchema } from '../enums/VoiceVariant.schema';
import { GenerationCreateNestedManyWithoutVoiceInputObjectSchema as GenerationCreateNestedManyWithoutVoiceInputObjectSchema } from './GenerationCreateNestedManyWithoutVoiceInput.schema'

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
  generations: z.lazy(() => GenerationCreateNestedManyWithoutVoiceInputObjectSchema).optional()
}).strict();
export const VoiceCreateInputObjectSchema: z.ZodType<Prisma.VoiceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoiceCreateInput>;
export const VoiceCreateInputObjectZodSchema = makeSchema();
