import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceCategorySchema } from '../enums/VoiceCategory.schema'

const makeSchema = () => z.object({
  set: VoiceCategorySchema.optional()
}).strict();
export const EnumVoiceCategoryFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumVoiceCategoryFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumVoiceCategoryFieldUpdateOperationsInput>;
export const EnumVoiceCategoryFieldUpdateOperationsInputObjectZodSchema = makeSchema();
