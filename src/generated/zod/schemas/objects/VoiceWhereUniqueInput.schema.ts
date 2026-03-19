import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const VoiceWhereUniqueInputObjectSchema: z.ZodType<Prisma.VoiceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VoiceWhereUniqueInput>;
export const VoiceWhereUniqueInputObjectZodSchema = makeSchema();
