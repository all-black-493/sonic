import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceCreateManyInputObjectSchema as VoiceCreateManyInputObjectSchema } from './objects/VoiceCreateManyInput.schema';

export const VoiceCreateManySchema: z.ZodType<Prisma.VoiceCreateManyArgs> = z.object({ data: z.union([ VoiceCreateManyInputObjectSchema, z.array(VoiceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VoiceCreateManyArgs>;

export const VoiceCreateManyZodSchema = z.object({ data: z.union([ VoiceCreateManyInputObjectSchema, z.array(VoiceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();