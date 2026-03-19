import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceSelectObjectSchema as VoiceSelectObjectSchema } from './objects/VoiceSelect.schema';
import { VoiceUpdateManyMutationInputObjectSchema as VoiceUpdateManyMutationInputObjectSchema } from './objects/VoiceUpdateManyMutationInput.schema';
import { VoiceWhereInputObjectSchema as VoiceWhereInputObjectSchema } from './objects/VoiceWhereInput.schema';

export const VoiceUpdateManyAndReturnSchema: z.ZodType<Prisma.VoiceUpdateManyAndReturnArgs> = z.object({ select: VoiceSelectObjectSchema.optional(), data: VoiceUpdateManyMutationInputObjectSchema, where: VoiceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoiceUpdateManyAndReturnArgs>;

export const VoiceUpdateManyAndReturnZodSchema = z.object({ select: VoiceSelectObjectSchema.optional(), data: VoiceUpdateManyMutationInputObjectSchema, where: VoiceWhereInputObjectSchema.optional() }).strict();