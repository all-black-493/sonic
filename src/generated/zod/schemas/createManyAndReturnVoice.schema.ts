import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceSelectObjectSchema as VoiceSelectObjectSchema } from './objects/VoiceSelect.schema';
import { VoiceCreateManyInputObjectSchema as VoiceCreateManyInputObjectSchema } from './objects/VoiceCreateManyInput.schema';

export const VoiceCreateManyAndReturnSchema: z.ZodType<Prisma.VoiceCreateManyAndReturnArgs> = z.object({ select: VoiceSelectObjectSchema.optional(), data: z.union([ VoiceCreateManyInputObjectSchema, z.array(VoiceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VoiceCreateManyAndReturnArgs>;

export const VoiceCreateManyAndReturnZodSchema = z.object({ select: VoiceSelectObjectSchema.optional(), data: z.union([ VoiceCreateManyInputObjectSchema, z.array(VoiceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();