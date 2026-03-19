import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceVariantSchema } from '../enums/VoiceVariant.schema'

const makeSchema = () => z.object({
  set: VoiceVariantSchema.optional()
}).strict();
export const EnumVoiceVariantFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumVoiceVariantFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumVoiceVariantFieldUpdateOperationsInput>;
export const EnumVoiceVariantFieldUpdateOperationsInputObjectZodSchema = makeSchema();
