import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceWhereUniqueInputObjectSchema as VoiceWhereUniqueInputObjectSchema } from './VoiceWhereUniqueInput.schema';
import { VoiceCreateWithoutGenerationsInputObjectSchema as VoiceCreateWithoutGenerationsInputObjectSchema } from './VoiceCreateWithoutGenerationsInput.schema';
import { VoiceUncheckedCreateWithoutGenerationsInputObjectSchema as VoiceUncheckedCreateWithoutGenerationsInputObjectSchema } from './VoiceUncheckedCreateWithoutGenerationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VoiceCreateWithoutGenerationsInputObjectSchema), z.lazy(() => VoiceUncheckedCreateWithoutGenerationsInputObjectSchema)])
}).strict();
export const VoiceCreateOrConnectWithoutGenerationsInputObjectSchema: z.ZodType<Prisma.VoiceCreateOrConnectWithoutGenerationsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoiceCreateOrConnectWithoutGenerationsInput>;
export const VoiceCreateOrConnectWithoutGenerationsInputObjectZodSchema = makeSchema();
