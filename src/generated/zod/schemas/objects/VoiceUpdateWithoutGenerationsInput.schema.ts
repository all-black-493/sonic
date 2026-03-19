import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { VoiceCategorySchema } from '../enums/VoiceCategory.schema';
import { EnumVoiceCategoryFieldUpdateOperationsInputObjectSchema as EnumVoiceCategoryFieldUpdateOperationsInputObjectSchema } from './EnumVoiceCategoryFieldUpdateOperationsInput.schema';
import { VoiceVariantSchema } from '../enums/VoiceVariant.schema';
import { EnumVoiceVariantFieldUpdateOperationsInputObjectSchema as EnumVoiceVariantFieldUpdateOperationsInputObjectSchema } from './EnumVoiceVariantFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  orgId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  category: z.union([VoiceCategorySchema, z.lazy(() => EnumVoiceCategoryFieldUpdateOperationsInputObjectSchema)]).optional(),
  language: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  variant: z.union([VoiceVariantSchema, z.lazy(() => EnumVoiceVariantFieldUpdateOperationsInputObjectSchema)]).optional(),
  r2ObjectKey: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const VoiceUpdateWithoutGenerationsInputObjectSchema: z.ZodType<Prisma.VoiceUpdateWithoutGenerationsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoiceUpdateWithoutGenerationsInput>;
export const VoiceUpdateWithoutGenerationsInputObjectZodSchema = makeSchema();
