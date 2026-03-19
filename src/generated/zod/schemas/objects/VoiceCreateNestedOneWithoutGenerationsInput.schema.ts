import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceCreateWithoutGenerationsInputObjectSchema as VoiceCreateWithoutGenerationsInputObjectSchema } from './VoiceCreateWithoutGenerationsInput.schema';
import { VoiceUncheckedCreateWithoutGenerationsInputObjectSchema as VoiceUncheckedCreateWithoutGenerationsInputObjectSchema } from './VoiceUncheckedCreateWithoutGenerationsInput.schema';
import { VoiceCreateOrConnectWithoutGenerationsInputObjectSchema as VoiceCreateOrConnectWithoutGenerationsInputObjectSchema } from './VoiceCreateOrConnectWithoutGenerationsInput.schema';
import { VoiceWhereUniqueInputObjectSchema as VoiceWhereUniqueInputObjectSchema } from './VoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VoiceCreateWithoutGenerationsInputObjectSchema), z.lazy(() => VoiceUncheckedCreateWithoutGenerationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VoiceCreateOrConnectWithoutGenerationsInputObjectSchema).optional(),
  connect: z.lazy(() => VoiceWhereUniqueInputObjectSchema).optional()
}).strict();
export const VoiceCreateNestedOneWithoutGenerationsInputObjectSchema: z.ZodType<Prisma.VoiceCreateNestedOneWithoutGenerationsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoiceCreateNestedOneWithoutGenerationsInput>;
export const VoiceCreateNestedOneWithoutGenerationsInputObjectZodSchema = makeSchema();
