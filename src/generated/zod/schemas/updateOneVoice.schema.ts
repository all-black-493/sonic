import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceSelectObjectSchema as VoiceSelectObjectSchema } from './objects/VoiceSelect.schema';
import { VoiceIncludeObjectSchema as VoiceIncludeObjectSchema } from './objects/VoiceInclude.schema';
import { VoiceUpdateInputObjectSchema as VoiceUpdateInputObjectSchema } from './objects/VoiceUpdateInput.schema';
import { VoiceUncheckedUpdateInputObjectSchema as VoiceUncheckedUpdateInputObjectSchema } from './objects/VoiceUncheckedUpdateInput.schema';
import { VoiceWhereUniqueInputObjectSchema as VoiceWhereUniqueInputObjectSchema } from './objects/VoiceWhereUniqueInput.schema';

export const VoiceUpdateOneSchema: z.ZodType<Prisma.VoiceUpdateArgs> = z.object({ select: VoiceSelectObjectSchema.optional(), include: VoiceIncludeObjectSchema.optional(), data: z.union([VoiceUpdateInputObjectSchema, VoiceUncheckedUpdateInputObjectSchema]), where: VoiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VoiceUpdateArgs>;

export const VoiceUpdateOneZodSchema = z.object({ select: VoiceSelectObjectSchema.optional(), include: VoiceIncludeObjectSchema.optional(), data: z.union([VoiceUpdateInputObjectSchema, VoiceUncheckedUpdateInputObjectSchema]), where: VoiceWhereUniqueInputObjectSchema }).strict();