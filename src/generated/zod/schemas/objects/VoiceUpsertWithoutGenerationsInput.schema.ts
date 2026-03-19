import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceUpdateWithoutGenerationsInputObjectSchema as VoiceUpdateWithoutGenerationsInputObjectSchema } from './VoiceUpdateWithoutGenerationsInput.schema';
import { VoiceUncheckedUpdateWithoutGenerationsInputObjectSchema as VoiceUncheckedUpdateWithoutGenerationsInputObjectSchema } from './VoiceUncheckedUpdateWithoutGenerationsInput.schema';
import { VoiceCreateWithoutGenerationsInputObjectSchema as VoiceCreateWithoutGenerationsInputObjectSchema } from './VoiceCreateWithoutGenerationsInput.schema';
import { VoiceUncheckedCreateWithoutGenerationsInputObjectSchema as VoiceUncheckedCreateWithoutGenerationsInputObjectSchema } from './VoiceUncheckedCreateWithoutGenerationsInput.schema';
import { VoiceWhereInputObjectSchema as VoiceWhereInputObjectSchema } from './VoiceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => VoiceUpdateWithoutGenerationsInputObjectSchema), z.lazy(() => VoiceUncheckedUpdateWithoutGenerationsInputObjectSchema)]),
  create: z.union([z.lazy(() => VoiceCreateWithoutGenerationsInputObjectSchema), z.lazy(() => VoiceUncheckedCreateWithoutGenerationsInputObjectSchema)]),
  where: z.lazy(() => VoiceWhereInputObjectSchema).optional()
}).strict();
export const VoiceUpsertWithoutGenerationsInputObjectSchema: z.ZodType<Prisma.VoiceUpsertWithoutGenerationsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoiceUpsertWithoutGenerationsInput>;
export const VoiceUpsertWithoutGenerationsInputObjectZodSchema = makeSchema();
