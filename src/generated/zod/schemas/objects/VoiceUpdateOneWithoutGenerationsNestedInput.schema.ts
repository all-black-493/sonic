import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceCreateWithoutGenerationsInputObjectSchema as VoiceCreateWithoutGenerationsInputObjectSchema } from './VoiceCreateWithoutGenerationsInput.schema';
import { VoiceUncheckedCreateWithoutGenerationsInputObjectSchema as VoiceUncheckedCreateWithoutGenerationsInputObjectSchema } from './VoiceUncheckedCreateWithoutGenerationsInput.schema';
import { VoiceCreateOrConnectWithoutGenerationsInputObjectSchema as VoiceCreateOrConnectWithoutGenerationsInputObjectSchema } from './VoiceCreateOrConnectWithoutGenerationsInput.schema';
import { VoiceUpsertWithoutGenerationsInputObjectSchema as VoiceUpsertWithoutGenerationsInputObjectSchema } from './VoiceUpsertWithoutGenerationsInput.schema';
import { VoiceWhereInputObjectSchema as VoiceWhereInputObjectSchema } from './VoiceWhereInput.schema';
import { VoiceWhereUniqueInputObjectSchema as VoiceWhereUniqueInputObjectSchema } from './VoiceWhereUniqueInput.schema';
import { VoiceUpdateToOneWithWhereWithoutGenerationsInputObjectSchema as VoiceUpdateToOneWithWhereWithoutGenerationsInputObjectSchema } from './VoiceUpdateToOneWithWhereWithoutGenerationsInput.schema';
import { VoiceUpdateWithoutGenerationsInputObjectSchema as VoiceUpdateWithoutGenerationsInputObjectSchema } from './VoiceUpdateWithoutGenerationsInput.schema';
import { VoiceUncheckedUpdateWithoutGenerationsInputObjectSchema as VoiceUncheckedUpdateWithoutGenerationsInputObjectSchema } from './VoiceUncheckedUpdateWithoutGenerationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VoiceCreateWithoutGenerationsInputObjectSchema), z.lazy(() => VoiceUncheckedCreateWithoutGenerationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VoiceCreateOrConnectWithoutGenerationsInputObjectSchema).optional(),
  upsert: z.lazy(() => VoiceUpsertWithoutGenerationsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => VoiceWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => VoiceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => VoiceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => VoiceUpdateToOneWithWhereWithoutGenerationsInputObjectSchema), z.lazy(() => VoiceUpdateWithoutGenerationsInputObjectSchema), z.lazy(() => VoiceUncheckedUpdateWithoutGenerationsInputObjectSchema)]).optional()
}).strict();
export const VoiceUpdateOneWithoutGenerationsNestedInputObjectSchema: z.ZodType<Prisma.VoiceUpdateOneWithoutGenerationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VoiceUpdateOneWithoutGenerationsNestedInput>;
export const VoiceUpdateOneWithoutGenerationsNestedInputObjectZodSchema = makeSchema();
