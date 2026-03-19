import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceWhereInputObjectSchema as VoiceWhereInputObjectSchema } from './VoiceWhereInput.schema';
import { VoiceUpdateWithoutGenerationsInputObjectSchema as VoiceUpdateWithoutGenerationsInputObjectSchema } from './VoiceUpdateWithoutGenerationsInput.schema';
import { VoiceUncheckedUpdateWithoutGenerationsInputObjectSchema as VoiceUncheckedUpdateWithoutGenerationsInputObjectSchema } from './VoiceUncheckedUpdateWithoutGenerationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoiceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => VoiceUpdateWithoutGenerationsInputObjectSchema), z.lazy(() => VoiceUncheckedUpdateWithoutGenerationsInputObjectSchema)])
}).strict();
export const VoiceUpdateToOneWithWhereWithoutGenerationsInputObjectSchema: z.ZodType<Prisma.VoiceUpdateToOneWithWhereWithoutGenerationsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoiceUpdateToOneWithWhereWithoutGenerationsInput>;
export const VoiceUpdateToOneWithWhereWithoutGenerationsInputObjectZodSchema = makeSchema();
