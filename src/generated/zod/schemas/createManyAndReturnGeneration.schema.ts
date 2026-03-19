import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GenerationSelectObjectSchema as GenerationSelectObjectSchema } from './objects/GenerationSelect.schema';
import { GenerationCreateManyInputObjectSchema as GenerationCreateManyInputObjectSchema } from './objects/GenerationCreateManyInput.schema';

export const GenerationCreateManyAndReturnSchema: z.ZodType<Prisma.GenerationCreateManyAndReturnArgs> = z.object({ select: GenerationSelectObjectSchema.optional(), data: z.union([ GenerationCreateManyInputObjectSchema, z.array(GenerationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GenerationCreateManyAndReturnArgs>;

export const GenerationCreateManyAndReturnZodSchema = z.object({ select: GenerationSelectObjectSchema.optional(), data: z.union([ GenerationCreateManyInputObjectSchema, z.array(GenerationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();