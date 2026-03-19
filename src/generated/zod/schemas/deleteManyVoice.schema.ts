import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceWhereInputObjectSchema as VoiceWhereInputObjectSchema } from './objects/VoiceWhereInput.schema';

export const VoiceDeleteManySchema: z.ZodType<Prisma.VoiceDeleteManyArgs> = z.object({ where: VoiceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoiceDeleteManyArgs>;

export const VoiceDeleteManyZodSchema = z.object({ where: VoiceWhereInputObjectSchema.optional() }).strict();