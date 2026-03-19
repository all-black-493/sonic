import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceUpdateManyMutationInputObjectSchema as VoiceUpdateManyMutationInputObjectSchema } from './objects/VoiceUpdateManyMutationInput.schema';
import { VoiceWhereInputObjectSchema as VoiceWhereInputObjectSchema } from './objects/VoiceWhereInput.schema';

export const VoiceUpdateManySchema: z.ZodType<Prisma.VoiceUpdateManyArgs> = z.object({ data: VoiceUpdateManyMutationInputObjectSchema, where: VoiceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoiceUpdateManyArgs>;

export const VoiceUpdateManyZodSchema = z.object({ data: VoiceUpdateManyMutationInputObjectSchema, where: VoiceWhereInputObjectSchema.optional() }).strict();