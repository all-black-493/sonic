import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceSelectObjectSchema as VoiceSelectObjectSchema } from './objects/VoiceSelect.schema';
import { VoiceIncludeObjectSchema as VoiceIncludeObjectSchema } from './objects/VoiceInclude.schema';
import { VoiceWhereUniqueInputObjectSchema as VoiceWhereUniqueInputObjectSchema } from './objects/VoiceWhereUniqueInput.schema';
import { VoiceCreateInputObjectSchema as VoiceCreateInputObjectSchema } from './objects/VoiceCreateInput.schema';
import { VoiceUncheckedCreateInputObjectSchema as VoiceUncheckedCreateInputObjectSchema } from './objects/VoiceUncheckedCreateInput.schema';
import { VoiceUpdateInputObjectSchema as VoiceUpdateInputObjectSchema } from './objects/VoiceUpdateInput.schema';
import { VoiceUncheckedUpdateInputObjectSchema as VoiceUncheckedUpdateInputObjectSchema } from './objects/VoiceUncheckedUpdateInput.schema';

export const VoiceUpsertOneSchema: z.ZodType<Prisma.VoiceUpsertArgs> = z.object({ select: VoiceSelectObjectSchema.optional(), include: VoiceIncludeObjectSchema.optional(), where: VoiceWhereUniqueInputObjectSchema, create: z.union([ VoiceCreateInputObjectSchema, VoiceUncheckedCreateInputObjectSchema ]), update: z.union([ VoiceUpdateInputObjectSchema, VoiceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.VoiceUpsertArgs>;

export const VoiceUpsertOneZodSchema = z.object({ select: VoiceSelectObjectSchema.optional(), include: VoiceIncludeObjectSchema.optional(), where: VoiceWhereUniqueInputObjectSchema, create: z.union([ VoiceCreateInputObjectSchema, VoiceUncheckedCreateInputObjectSchema ]), update: z.union([ VoiceUpdateInputObjectSchema, VoiceUncheckedUpdateInputObjectSchema ]) }).strict();