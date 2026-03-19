import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceSelectObjectSchema as VoiceSelectObjectSchema } from './objects/VoiceSelect.schema';
import { VoiceIncludeObjectSchema as VoiceIncludeObjectSchema } from './objects/VoiceInclude.schema';
import { VoiceCreateInputObjectSchema as VoiceCreateInputObjectSchema } from './objects/VoiceCreateInput.schema';
import { VoiceUncheckedCreateInputObjectSchema as VoiceUncheckedCreateInputObjectSchema } from './objects/VoiceUncheckedCreateInput.schema';

export const VoiceCreateOneSchema: z.ZodType<Prisma.VoiceCreateArgs> = z.object({ select: VoiceSelectObjectSchema.optional(), include: VoiceIncludeObjectSchema.optional(), data: z.union([VoiceCreateInputObjectSchema, VoiceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.VoiceCreateArgs>;

export const VoiceCreateOneZodSchema = z.object({ select: VoiceSelectObjectSchema.optional(), include: VoiceIncludeObjectSchema.optional(), data: z.union([VoiceCreateInputObjectSchema, VoiceUncheckedCreateInputObjectSchema]) }).strict();