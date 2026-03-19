import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceSelectObjectSchema as VoiceSelectObjectSchema } from './objects/VoiceSelect.schema';
import { VoiceIncludeObjectSchema as VoiceIncludeObjectSchema } from './objects/VoiceInclude.schema';
import { VoiceWhereUniqueInputObjectSchema as VoiceWhereUniqueInputObjectSchema } from './objects/VoiceWhereUniqueInput.schema';

export const VoiceFindUniqueSchema: z.ZodType<Prisma.VoiceFindUniqueArgs> = z.object({ select: VoiceSelectObjectSchema.optional(), include: VoiceIncludeObjectSchema.optional(), where: VoiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VoiceFindUniqueArgs>;

export const VoiceFindUniqueZodSchema = z.object({ select: VoiceSelectObjectSchema.optional(), include: VoiceIncludeObjectSchema.optional(), where: VoiceWhereUniqueInputObjectSchema }).strict();